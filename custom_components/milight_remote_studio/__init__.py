from __future__ import annotations

import json
import logging
import re
import time
from pathlib import Path
from typing import Any

import aiohttp
from aiohttp import web
import voluptuous as vol
import yaml
from homeassistant.components import mqtt, panel_custom
from homeassistant.components.http import HomeAssistantView, StaticPathConfig
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, ServiceCall
from homeassistant.helpers.network import get_url

from .const import (
    CONF_HUB_DEVICE_ID,
    CONF_HUB_URL,
    CONF_MQTT_HOST,
    CONF_MQTT_PORT,
    CONF_TOPIC_PREFIX,
    CONF_TWIN_URL,
    DEFAULT_HUB_DEVICE_ID,
    DEFAULT_HUB_URL,
    DEFAULT_MQTT_HOST,
    DEFAULT_MQTT_PORT,
    DEFAULT_TOPIC_PREFIX,
    DEFAULT_TWIN_URL,
    DOMAIN,
)

_LOGGER = logging.getLogger(__name__)

BASE_ACTIONS = [
    "on", "off", "set_white", "mode",
    "mode_speed_up", "mode_speed_down", "night_mode",
]


def _extract_analog_val(data: dict[str, Any], act: str) -> Any:
    if data.get("value") is not None:
        return data["value"]
    if act == "brightness":
        # Prefer 0..100 'level'; if only 0..255 'brightness' is present, convert 0..255 -> 0..100 cleanly!
        if data.get("level") is not None:
            return data["level"]
        if data.get("brightness") is not None:
            return round((float(data["brightness"]) / 255.0) * 100.0, 1)
    if act in ("kelvin", "color_temp"):
        for k in ("color_temp", "kelvin"):
            if data.get(k) is not None:
                return data[k]
    if act in data and data[act] is not None:
        return data[act]
    for k in ("level", "saturation", "color_temp", "kelvin", "hue", "argument"):
        if data.get(k) is not None:
            return data[k]
    return None


def _build_event_types(remote: dict[str, Any]) -> list[str]:
    types = list(BASE_ACTIONS)
    gestures = remote.get("gestures") or {}
    if gestures.get("double"):
        types.extend(["on_double", "off_double", "mode_speed_up_double", "mode_speed_down_double", "set_white_double"])
    if gestures.get("triple"):
        types.extend(["on_triple", "off_triple", "mode_speed_up_triple", "mode_speed_down_triple"])

    touch_zones = remote.get("touch_zones") or {}
    for surf_key, prefix in [("hue_ring", "hue_seg_"), ("cct_bar", "cct_seg_"), ("sat_bar", "sat_seg_"), ("bri_bar", "bri_seg_")]:
        surf = touch_zones.get(surf_key) or {}
        if surf.get("enabled"):
            segs = max(1, min(12, int(surf.get("segments") or 4)))
            types.extend(f"{prefix}{i}" for i in range(1, segs + 1))

    return list(dict.fromkeys(types))


async def _publish_remote_discovery(hass: HomeAssistant, remote: dict[str, Any], hub_device_id: str) -> None:
    hex_id = str(remote.get("hex") or "").strip()
    if not hex_id:
        return
    slug = hex_id.lower()
    name = str(remote.get("name") or hex_id)
    model = str(remote.get("model") or remote.get("visual_model") or remote.get("type") or "FUT089")
    safe_model = re.sub(r"[^A-Z0-9_-]", "", model.upper()) or "FUT089"
    prefix = str(remote.get("prefix") or f"milight/actions/{slug}").strip("/")
    zones = max(0, min(100, int(remote.get("zones") or 4)))
    event_types = _build_event_types(remote)
    is_panel = safe_model.startswith(("B", "T", "S", "P"))
    icon = "mdi:light-switch" if is_panel else "mdi:remote"

    try:
        base_url = get_url(hass, allow_internal=True, allow_ip=True).rstrip("/")
    except Exception:
        base_url = get_url(hass, prefer_external=False)

    for z in range(0, zones + 1):
        disc_topic = f"homeassistant/event/milight_rem_{slug}_z{z}/config"
        zone_label = "All Zones (Z0)" if z == 0 else f"Zone {z}"
        payload = {
            "name": f"{name} · {zone_label}",
            "default_entity_id": f"event.milight_{slug}_zone_{z}",
            "unique_id": f"milight_rem_{slug}_z{z}_event",
            "icon": icon,
            "entity_picture": f"{base_url}/api/{DOMAIN}/thumb/{safe_model}.svg",
            "state_topic": f"{prefix}/zone/{z}/ha_event",
            "event_types": event_types,
            "json_attributes_topic": f"{prefix}/zone/{z}/event",
            "device": {
                "identifiers": [f"milight_remote_{slug}"],
                "name": f"{name} ({hex_id})",
                "manufacturer": "MiBoxer / Futlight",
                "model": model,
                "via_device": hub_device_id,
            },
        }
        await mqtt.async_publish(hass, disc_topic, json.dumps(payload), retain=True)


async def _fetch_hub_remotes(hub_url: str) -> list[dict[str, Any]]:
    url = f"{hub_url.rstrip('/')}/api/remotes"
    timeout = aiohttp.ClientTimeout(total=3)
    async with aiohttp.ClientSession(timeout=timeout) as session:
        async with session.get(url) as resp:
            resp.raise_for_status()
            data = await resp.json(content_type=None)
            if isinstance(data, list):
                return data
            if isinstance(data, dict) and isinstance(data.get("remotes"), list):
                return data["remotes"]
            return []


class MilightThumbSvgView(HomeAssistantView):
    url = f"/api/{DOMAIN}/thumb/{{model}}.svg"
    name = f"api:{DOMAIN}:thumb"
    requires_auth = False

    async def get(self, request, model: str):
        safe = re.sub(r"[^A-Z0-9_-]", "", (model or "FUT089").upper())
        thumbs_dir = Path(__file__).parent / "frontend" / "thumbs"
        svg_file = thumbs_dir / f"{safe}.svg"
        if not svg_file.exists():
            svg_file = thumbs_dir / "FUT089.svg"
        svg = svg_file.read_text(encoding="utf-8") if svg_file.exists() else '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"/>'
        return web.Response(text=svg, content_type="image/svg+xml")


class MilightRemotesApiView(HomeAssistantView):
    url = f"/api/{DOMAIN}/remotes"
    name = f"api:{DOMAIN}:remotes"
    requires_auth = True

    async def get(self, request):
        hass: HomeAssistant = request.app["hass"]
        domain_store = hass.data.get(DOMAIN, {})
        active = next((v for k, v in domain_store.items() if not k.startswith("_") and isinstance(v, dict)), None)
        if not active:
            return self.json({"remotes": [], "source": "unconfigured"})

        hub_url = active["config"].get(CONF_HUB_URL, DEFAULT_HUB_URL)
        hub_device_id = active["config"].get(CONF_HUB_DEVICE_ID, DEFAULT_HUB_DEVICE_ID)
        remotes_cache: dict[str, dict[str, Any]] = active["remotes"]
        source = "mqtt_registry"

        try:
            live = await _fetch_hub_remotes(hub_url)
            if live:
                source = "hub_http"
                for rem in live:
                    hx = str(rem.get("hex") or "").upper()
                    if hx:
                        remotes_cache[hx] = rem
                        await _publish_remote_discovery(hass, rem, hub_device_id)
        except Exception as err:
            _LOGGER.debug("Using cached MQTT registry remotes (%s)", err)

        ordered = sorted(remotes_cache.values(), key=lambda r: str(r.get("hex") or ""))
        return self.json({"remotes": ordered, "source": source, "hub_url": hub_url})




class MilightStudioMetaView(HomeAssistantView):
    url = f"/api/{DOMAIN}/studio_meta"
    name = f"api:{DOMAIN}:studio_meta"
    requires_auth = True

    async def get(self, request: web.Request) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        domain_store = hass.data.get(DOMAIN, {})
        active = next((v for k, v in domain_store.items() if isinstance(v, dict) and "config" in v), None)
        hub_url = str((active or {}).get("config", {}).get("hub_url") or DEFAULT_HUB_URL).rstrip("/")
        try:
            async with aiohttp.ClientSession(timeout=aiohttp.ClientTimeout(total=4)) as session:
                async with session.get(f"{hub_url}/api/remotes/studio_meta") as resp:
                    meta = await resp.json(content_type=None)
                async with session.get(f"{hub_url}/api/remotes/custom_models") as cresp:
                    cmodels = await cresp.json(content_type=None)
            return self.json({"studio_meta": meta, "custom_models": cmodels, "hub_url": hub_url})
        except Exception as err:
            return self.json({"error": str(err), "hub_url": hub_url}, status_code=502)

    async def post(self, request: web.Request) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        body = await request.json()
        domain_store = hass.data.get(DOMAIN, {})
        active = next((v for k, v in domain_store.items() if isinstance(v, dict) and "config" in v), None)
        hub_url = str((active or {}).get("config", {}).get("hub_url") or DEFAULT_HUB_URL).rstrip("/")
        try:
            async with aiohttp.ClientSession(timeout=aiohttp.ClientTimeout(total=4)) as session:
                async with session.post(f"{hub_url}/api/remotes/studio_meta", json=body) as resp:
                    res = await resp.json(content_type=None)
                if active and "remotes" in active:
                    live = await _fetch_hub_remotes(hub_url)
                    for rem in live:
                        hx = str(rem.get("hex_id") or rem.get("hex") or "").upper()
                        if hx:
                            rem["hex"] = rem.get("hex") or rem.get("hex_id") or hx
                            active["remotes"][hx] = {**active["remotes"].get(hx, {}), **rem}
            return self.json(res if isinstance(res, dict) else {"success": True})
        except Exception as err:
            return self.json({"error": str(err)}, status_code=502)


class MilightDownloadStageView(HomeAssistantView):
    url = f"/api/{DOMAIN}/download_stage"
    name = f"api:{DOMAIN}:download_stage"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        import secrets, time
        hass: HomeAssistant = request.app["hass"]
        body = await request.json()
        filename = re.sub(r"[^a-zA-Z0-9._-]", "_", str(body.get("filename") or "stencil_1to1.svg"))
        content = str(body.get("content") or "")
        mime = str(body.get("mime") or "application/octet-stream")
        store = hass.data.setdefault(DOMAIN, {}).setdefault("_dl_tokens", {})
        now = time.time()
        for k in [k for k, v in store.items() if now - v["ts"] > 180]:
            store.pop(k, None)
        token = secrets.token_urlsafe(18)
        store[token] = {"filename": filename, "content": content, "mime": mime, "ts": now}
        return self.json({"url": f"/api/{DOMAIN}/dl/{token}/{filename}"})


class MilightDownloadFetchView(HomeAssistantView):
    url = f"/api/{DOMAIN}/dl/{{token}}/{{filename}}"
    name = f"api:{DOMAIN}:download_fetch"
    requires_auth = False

    async def get(self, request: web.Request, token: str, filename: str) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        store = hass.data.get(DOMAIN, {}).get("_dl_tokens", {})
        item = store.get(token)
        if not item:
            return web.Response(status=404, text="Download token expired")
        safe_fn = item["filename"]
        raw_bytes = item["content"].encode("utf-8")
        return web.Response(
            body=raw_bytes,
            headers={
                "Content-Type": "application/octet-stream",
                "Content-Length": str(len(raw_bytes)),
                "Content-Disposition": f'attachment; filename="{safe_fn}"',
                "Cache-Control": "no-store",
                "Connection": "close",
            },
        )

class MilightCalibrationView(HomeAssistantView):
    url = f"/api/{DOMAIN}/calibration"
    name = f"api:{DOMAIN}:calibration"
    requires_auth = True

    async def get(self, request):
        hass: HomeAssistant = request.app["hass"]
        cal_file = Path(hass.config.path(".milight_remote_calibration.json"))
        def _load():
            if cal_file.exists():
                try:
                    return json.loads(cal_file.read_text(encoding="utf-8"))
                except Exception:
                    return {}
            return {}
        data = await hass.async_add_executor_job(_load)
        return self.json(data)

    async def post(self, request):
        hass: HomeAssistant = request.app["hass"]
        body = await request.json()
        hx = str(body.get("hex") or "").upper()
        if not hx:
            return self.json({"error": "hex required"}, status_code=400)
        cal_file = Path(hass.config.path(".milight_remote_calibration.json"))
        def _save():
            cur = {}
            if cal_file.exists():
                try:
                    cur = json.loads(cal_file.read_text(encoding="utf-8"))
                except Exception:
                    cur = {}
            if body.get("reset"):
                cur.pop(hx, None)
            else:
                cur[hx] = body.get("cal") or {}
            cal_file.write_text(json.dumps(cur, indent=2), encoding="utf-8")
            return cur
        updated = await hass.async_add_executor_job(_save)
        return self.json({"ok": True, "calibration": updated})


class MilightCreateAutomationView(HomeAssistantView):
    url = f"/api/{DOMAIN}/create_automation"
    name = f"api:{DOMAIN}:create_automation"
    requires_auth = True

    async def post(self, request):
        hass: HomeAssistant = request.app["hass"]
        body = await request.json()
        hex_id = str(body.get("hex") or "0x125C").lower()
        zone = int(body.get("zone", 1))
        action = str(body.get("action") or "on")
        entity_id = str(body.get("entity_id") or "")
        service = str(body.get("service") or "homeassistant.toggle")
        label = str(body.get("label") or f"Mi-Light {hex_id.upper()} Z{zone} {action} -> {entity_id}")

        if not entity_id:
            return self.json({"error": "entity_id required"}, status_code=400)

        auto_id = f"milight_{hex_id}_{zone}_{action}_{int(time.time())}"
        rule = {
            "id": auto_id,
            "alias": label,
            "description": f"Created visually in Mi-Light Studio ({hex_id.upper()} Zone {zone} [{action}])",
            "triggers": [{"trigger": "state", "entity_id": f"event.milight_{hex_id}_zone_{zone}"}],
            "conditions": [{"condition": "template", "value_template": f"{{{{ trigger.to_state.state == '{action}' }}}}"}],
            "actions": [{"action": service, "target": {"entity_id": entity_id}}],
            "mode": "queued",
        }

        auto_file = Path(hass.config.path("automations.yaml"))

        def _save():
            existing = []
            if auto_file.exists():
                raw = auto_file.read_text(encoding="utf-8").strip()
                if raw:
                    loaded = yaml.safe_load(raw)
                    if isinstance(loaded, list):
                        existing = loaded
            existing.append(rule)
            auto_file.write_text(yaml.safe_dump(existing, sort_keys=False), encoding="utf-8")

        await hass.async_add_executor_job(_save)
        await hass.services.async_call("automation", "reload", {}, blocking=True)
        return self.json({"ok": True, "id": auto_id, "alias": label})


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    cfg = {**entry.data, **entry.options}
    hub_url = cfg.get(CONF_HUB_URL, DEFAULT_HUB_URL)
    twin_url = cfg.get(CONF_TWIN_URL, DEFAULT_TWIN_URL)
    topic_prefix = cfg.get(CONF_TOPIC_PREFIX, DEFAULT_TOPIC_PREFIX).strip("/")
    hub_device_id = cfg.get(CONF_HUB_DEVICE_ID, DEFAULT_HUB_DEVICE_ID)

    remotes_cache: dict[str, dict[str, Any]] = {}
    http_session = aiohttp.ClientSession(
        timeout=aiohttp.ClientTimeout(total=1.8),
        connector=aiohttp.TCPConnector(limit=8, keepalive_timeout=60),
    )

    async def refresh_remotes(_call: ServiceCall | None = None) -> None:
        try:
            remotes = await _fetch_hub_remotes(hub_url)
            for rem in remotes:
                hx = str(rem.get("hex") or "").upper()
                if hx:
                    remotes_cache[hx] = rem
                    await _publish_remote_discovery(hass, rem, hub_device_id)
        except Exception as err:
            _LOGGER.debug("Hub HTTP sync skipped (using MQTT registry): %s", err)

    async def sync_remote_config(call: ServiceCall) -> None:
        rem_payload = dict(call.data)
        hx = str(rem_payload.get("hex") or "").upper()
        try:
            url = f"{hub_url.rstrip('/')}/api/remotes"
            async with aiohttp.ClientSession(timeout=aiohttp.ClientTimeout(total=4)) as session:
                async with session.post(url, json=rem_payload) as resp:
                    resp.raise_for_status()
        except Exception:
            if hx:
                await mqtt.async_publish(hass, f"{topic_prefix}/remotes_registry/{hx}", json.dumps(rem_payload), retain=True)
        if hx:
            remotes_cache[hx] = rem_payload
            await _publish_remote_discovery(hass, rem_payload, hub_device_id)

    async def _fast_dispatch(hx: str, zone: int, action: str, val: Any) -> None:
        body: dict[str, Any] = {"hex": hx, "zone": zone, "action": action}
        if val is not None:
            body["value"] = val
        try:
            url = f"{hub_url.rstrip('/')}/api/remotes/virtual_send"
            async with http_session.post(url, json=body) as resp:
                if resp.status < 400:
                    return
        except Exception:
            pass

        rem = remotes_cache.get(hx) or {}
        prefix = str(rem.get("prefix") or f"{topic_prefix}/actions/{hx.lower()}").strip("/")
        ev_payload: dict[str, Any] = {"action": action, "gesture": "virtual", "gesture_action": action, "source": "ha_studio"}
        if val is not None:
            ev_payload["value"] = val
        await mqtt.async_publish(hass, f"{prefix}/zone/{zone}/event", json.dumps(ev_payload), retain=False)
        if action not in ("hue", "brightness", "kelvin", "color_temp", "saturation"):
            await mqtt.async_publish(hass, f"{prefix}/zone/{zone}/ha_event", json.dumps({"event_type": action}), retain=False)

    async def send_virtual_action(call: ServiceCall) -> None:
        hx = str(call.data["hex"]).upper()
        zone = int(call.data.get("zone", 1))
        action = str(call.data["action"])
        val = call.data.get("value")
        hass.async_create_task(_fast_dispatch(hx, zone, action, val))

    hass.services.async_register(DOMAIN, "refresh_registry", refresh_remotes)
    hass.services.async_register(DOMAIN, "sync_remote_config", sync_remote_config, schema=vol.Schema({vol.Required("hex"): str}, extra=vol.ALLOW_EXTRA))
    hass.services.async_register(
        DOMAIN, "send_virtual_action", send_virtual_action,
        schema=vol.Schema({vol.Required("hex"): str, vol.Optional("zone", default=1): int, vol.Required("action"): str, vol.Optional("value"): vol.Any(int, float, str)}, extra=vol.ALLOW_EXTRA),
    )

    async def _on_registry_msg(msg: mqtt.ReceiveMessage) -> None:
        if not msg.payload:
            remotes_cache.pop(msg.topic.rsplit("/", 1)[-1].upper(), None)
            return
        try:
            rem = json.loads(msg.payload)
        except Exception:
            return
        hx = str(rem.get("hex") or msg.topic.rsplit("/", 1)[-1]).upper()
        if hx:
            remotes_cache[hx] = rem
            await _publish_remote_discovery(hass, rem, hub_device_id)

    async def _on_remote_event(msg: mqtt.ReceiveMessage) -> None:
        try:
            data = json.loads(msg.payload)
        except Exception:
            return
        gesture_action = data.get("gesture_action") or data.get("action")
        if not gesture_action or not msg.topic.endswith("/event"):
            return

        if str(gesture_action) not in ("hue", "brightness", "kelvin", "color_temp", "saturation"):
            await mqtt.async_publish(hass, msg.topic[:-6] + "ha_event", json.dumps({"event_type": str(gesture_action)}), retain=False)

        # Parse prefix and zone from <prefix>/zone/<z>/event
        m = re.match(r"^(.+)/zone/(\d+)/event$", msg.topic)
        zone = int(m.group(2)) if m else int(data.get("group_id", data.get("zone", 1)))
        pfx = m.group(1).strip("/") if m else ""

        # Resolve hex ID from payload, remotes_cache prefix match, or topic slug
        hx = str(data.get("device_id_hex") or data.get("hex") or "").upper()
        if not hx and isinstance(data.get("device_id"), int):
            hx = f"0x{int(data['device_id']):04X}"
        if not hx:
            for cand_hx, rem in remotes_cache.items():
                rp = str(rem.get("prefix") or "").strip("/")
                if rp and rp == pfx:
                    hx = cand_hx
                    break
        if not hx:
            hm = re.search(r"(0x[0-9a-fA-F]{4}|[0-9a-fA-F]{4})$", pfx)
            if hm:
                raw = hm.group(1).upper()
                hx = raw if raw.startswith("0X") else f"0x{raw}"
                hx = "0x" + hx[2:].upper()

        raw_src = str(data.get("source") or "").lower()
        is_ui = raw_src in ("ui", "web", "virtual", "ha_studio", "homebridge") or str(data.get("gesture") or "") == "virtual"

        hass.bus.async_fire(f"{DOMAIN}_event", {
            "hex": hx,
            "zone": zone,
            "action": str(gesture_action),
            "base_action": str(data.get("action") or gesture_action),
            "source": "ui" if is_ui else "rf",
            "value": _extract_analog_val(data, str(gesture_action)),
            "topic": msg.topic,
        })

    u0 = await mqtt.async_subscribe(hass, f"{topic_prefix}/remotes_registry/+", _on_registry_msg, qos=0)
    u1 = await mqtt.async_subscribe(hass, f"{topic_prefix}/+/zone/+/event", _on_remote_event, qos=0)
    u2 = await mqtt.async_subscribe(hass, f"{topic_prefix}/actions/+/zone/+/event", _on_remote_event, qos=0)

    domain_store = hass.data.setdefault(DOMAIN, {})
    if not domain_store.get("_views_registered"):
        hass.http.register_view(MilightThumbSvgView())
        hass.http.register_view(MilightRemotesApiView())
        hass.http.register_view(MilightCreateAutomationView())
        hass.http.register_view(MilightCalibrationView())
        hass.http.register_view(MilightStudioMetaView())
        hass.http.register_view(MilightDownloadStageView())
        hass.http.register_view(MilightDownloadFetchView())
        fe_dir = Path(__file__).parent / "frontend"
        await hass.http.async_register_static_paths([
            StaticPathConfig(f"/{DOMAIN}_static/panel.js", str(fe_dir / "panel.js"), cache_headers=False),
        ])
        ver = 1795268156
        await panel_custom.async_register_panel(
            hass=hass,
            webcomponent_name="milight-remote-studio-panel",
            frontend_url_path=DOMAIN,
            sidebar_title="Mi-Light Studio",
            sidebar_icon="mdi:remote",
            module_url=f"/{DOMAIN}_static/panel.js?v={int((fe_dir / 'panel.js').stat().st_mtime)}",
            embed_iframe=False,
            require_admin=False,
            config={"hub_url": hub_url, "twin_url": twin_url},
        )
        domain_store["_views_registered"] = True

    domain_store[entry.entry_id] = {"remotes": remotes_cache, "config": cfg, "unsubs": [u0, u1, u2], "session": http_session}
    await refresh_remotes()
    return True


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    entry_data = hass.data.get(DOMAIN, {}).pop(entry.entry_id, None)
    if entry_data:
        sess = entry_data.get('session')
        if sess:
            await sess.close()
        for unsub in entry_data.get("unsubs", []):
            try:
                unsub()
            except Exception:
                pass
    return True
