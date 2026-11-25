const MBX_SVG_NS = "http://www.w3.org/2000/svg";
const ANALOG_ACTS = new Set(["hue", "brightness", "kelvin", "color_temp", "saturation"]);
// In miboxer_catalog.js, circle dash0 starts at 3 o'clock (90 deg from 12 o'clock) + rotate(145) = 235 deg clockwise from 12 o'clock!
const SVG_WHEEL_HUE0_DEG = 235;

const ACT_TO_SVG = {
  on: ["on"], off: ["off"], brightness: ["brightness"],
  saturation: ["saturation", "kelvin"], color_temp: ["kelvin", "saturation"],
  kelvin: ["kelvin", "saturation"], hue: ["hue"],
  mode_speed_up: ["mode_speed_up", "speed_up"],
  mode_speed_down: ["mode_speed_down", "speed_down"],
  set_white: ["set_white", "on"], mode: ["mode", "next_mode"],
  night_mode: ["off", "night_mode"]
};

function mbxPolar(cx, cy, r, degFromTopCW) {
  const rad = ((degFromTopCW - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}
function mbxWedgePath(cx, cy, rIn, rOut, sDeg, eDeg) {
  const p1 = mbxPolar(cx, cy, rOut, sDeg), p2 = mbxPolar(cx, cy, rOut, eDeg);
  const p3 = mbxPolar(cx, cy, rIn, eDeg),  p4 = mbxPolar(cx, cy, rIn, sDeg);
  const lg = (eDeg - sDeg) > 180 ? 1 : 0;
  return `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} A ${rOut.toFixed(1)} ${rOut.toFixed(1)} 0 ${lg} 1 ${p2.x.toFixed(1)} ${p2.y.toFixed(1)} L ${p3.x.toFixed(1)} ${p3.y.toFixed(1)} A ${rIn.toFixed(1)} ${rIn.toFixed(1)} 0 ${lg} 0 ${p4.x.toFixed(1)} ${p4.y.toFixed(1)} Z`;
}
function normTouchZones(tz) {
  const def = (n, p) => ({ enabled: false, segments: n, offset_deg: 0, zone_mask: 0xFFFF, labels: Array.from({ length: n }, (_, i) => `${p} ${i + 1}`) });
  return {
    hue_ring: Object.assign(def(6, "Slice"), (tz && tz.hue_ring) || {}),
    cct_bar:  Object.assign(def(4, "CCT"),   (tz && tz.cct_bar)  || {}),
    sat_bar:  Object.assign(def(4, "Sat"),   (tz && tz.sat_bar)  || {}),
    bri_bar:  Object.assign(def(4, "Bri"),   (tz && tz.bri_bar)  || {})
  };
}
function normDeg(d) { return ((Number(d) % 360) + 360) % 360; }

class MilightRemoteStudioPanel extends HTMLElement {
  constructor() {
    super();
    this._remotes = [];
    this._selHex = "0x125C";
    this._activeZones = {};
    this._selZone = 1;
    this._tapMod = "single";
    this._baseAct = "on";
    this._liveSend = true;
    this._localSuppress = {};
    this._lastTelemetry = {};
    this._analogState = {};
    this._calibrations = {}; // { "0x125C": { hueTopRaw, hueDir, sliders: { brightness:{min,max}, kelvin:{min,max}, saturation:{min,max} } } }
    this._calWizard = null;  // { step: 1..4, hex, hueTopRaw, sliderAct, sliderMinRaw }
    this._sendThrottle = { lastTs: 0, timer: null, pending: null };
    this._wsUnsub = null;
    this._overlayTheme = "standard"; // standard | high_contrast | accessibility
    this._podMaterial = "peelable_matte_vinyl"; // peelable_matte_vinyl | permanent_matte_vinyl | laminated_pet | die_cut_stencil
    this._customLabels = {};
    this._customIcons = {}; // { "0X4542": { "zone:1": "Lounge", "on": "All On" } }
  }
  disconnectedCallback() {
    if (this._wsUnsub) {
      Promise.resolve(this._wsUnsub).then((fn) => typeof fn === "function" && fn()).catch(() => {});
      this._wsUnsub = null;
    }
  }
  set hass(hass) {
    this._hass = hass;
    if (!this._rendered) this._init();
    else if (!this._entitiesPopulated) this._populateEntities();
    this._ensureWsSubscription();
  }
  set panel(panel) { this._panel = panel; }

  _stateBucket(hex, zone) {
    const k = `${String(hex || this._selHex).toUpperCase()}:${Number(zone ?? this._selZone)}`;
    if (!this._analogState[k]) this._analogState[k] = {};
    return this._analogState[k];
  }

  // Maps raw RF hue -> visual angle (0 deg = 12 o'clock, 90 deg = 3 o'clock, sweeping CW)
  _rfHueToVisualDeg(hex, rawHue) {
    const h = normDeg(rawHue);
    const cal = this._calibrations[String(hex || "").toUpperCase()];
    if (cal && typeof cal.hueTopRaw === "number") {
      const dir = cal.hueDir || 1;
      return normDeg((h - cal.hueTopRaw) * dir);
    }
    // Default catalog alignment: raw hue 0 sits at 235 deg (7:50 o'clock) sweeping CW
    return normDeg(SVG_WHEEL_HUE0_DEG + h);
  }

  // Maps visual angle on screen (0 deg = 12 o'clock CW) -> raw hue to send to Hub
  _visualDegToHubHue(hex, visDeg) {
    const cal = this._calibrations[String(hex || "").toUpperCase()];
    if (cal && typeof cal.hueTopRaw === "number") {
      const dir = cal.hueDir || 1;
      return Math.round(normDeg(cal.hueTopRaw + visDeg * dir));
    }
    return Math.round(normDeg(visDeg - SVG_WHEEL_HUE0_DEG));
  }

  // Maps raw RF slider value -> 0..100% visual position (0% = left / bottom, 100% = right / top)
  _rfSliderToPct(hex, act, rawVal) {
    const n = Number(rawVal);
    if (!Number.isFinite(n)) return null;
    const key = (act === "color_temp") ? "kelvin" : act;
    const cal = this._calibrations[String(hex || "").toUpperCase()];
    const sCal = cal && cal.sliders && cal.sliders[key];
    if (sCal && typeof sCal.min === "number" && typeof sCal.max === "number" && Math.abs(sCal.max - sCal.min) >= 5) {
      return Math.max(0, Math.min(100, Math.round(((n - sCal.min) / (sCal.max - sCal.min)) * 100)));
    }
    if (key === "saturation") {
      // Physical FUT089 / MiBoxer saturation strip: Left = 100 (Full Vivid Color), Right = 0 (Desaturated White)!
      return Math.max(0, Math.min(100, Math.round(100 - n)));
    }
    if (key === "kelvin") {
      if (n >= 140 && n <= 500) {
        return Math.max(0, Math.min(100, Math.round(((370 - n) / (370 - 153)) * 100)));
      }
      if (n > 1000) {
        return Math.max(0, Math.min(100, Math.round(((n - 2700) / (6500 - 2700)) * 100)));
      }
      return Math.max(0, Math.min(100, Math.round(n)));
    }
    if (key === "brightness") {
      const pctRaw = n > 100 ? (n / 255) * 100 : n;
      const floor = 24;
      if (pctRaw <= floor) return 0;
      return Math.max(0, Math.min(100, Math.round(((pctRaw - floor) / (100 - floor)) * 100)));
    }
    return Math.max(0, Math.min(100, Math.round(n)));
  }

  _handleWizardRfCapture(hx, act, rawVal) {
const w = this._calWizard;
if (!w || w.hex !== hx || rawVal === undefined || rawVal === null) return false;
const v = Number(rawVal);
if (!Number.isFinite(v)) return false;
const now = Date.now();
if (w.stepEnteredAt && (now - w.stepEnteredAt < 500)) return false;

if (w.step === 1 && act === "hue") {
  w.liveVal = Math.round(normDeg(v));
  w.hueTopRaw = normDeg(v);
  this._renderHaLinkBar();
    this._renderCalBanner();
  clearTimeout(w._settleTimer);
  w._settleTimer = setTimeout(() => {
    if (this._calWizard === w && w.step === 1) {
      w.step = 2;
      w.liveVal = null;
      w.stepEnteredAt = Date.now();
      this._renderCalBanner();
    }
  }, 450);
  return true;
}

if (w.step === 2 && act === "hue") {
  w.liveVal = Math.round(normDeg(v));
  w._candRight = normDeg(v);
  this._renderCalBanner();
  clearTimeout(w._settleTimer);
  w._settleTimer = setTimeout(() => {
    if (this._calWizard === w && w.step === 2 && w._candRight !== undefined) {
      const rightRaw = w._candRight;
      const cwDelta = normDeg(rightRaw - w.hueTopRaw);
      const ccwDelta = normDeg(w.hueTopRaw - rightRaw);
      const hueDir = Math.abs(cwDelta - 90) <= Math.abs(ccwDelta - 90) ? 1 : -1;
      const existing = this._calibrations[hx] || {};
      this._calibrations[hx] = Object.assign({}, existing, { hueTopRaw: w.hueTopRaw, hueDir });
      w.step = 3;
      w.liveVal = null;
      w.stepEnteredAt = Date.now();
      this._saveCalibration(hx);
      this._renderCalBanner();
    }
  }, 450);
  return true;
}

if (w.step === 3 && (act === "brightness" || act === "kelvin" || act === "color_temp" || act === "saturation")) {
  const sKey = (act === "color_temp") ? "kelvin" : act;
  w.sliderAct = sKey;
  w.sliderMinRaw = v;
  w.liveVal = `${sKey} = ${v}`;
  this._renderCalBanner();
  return true;
}

if (w.step === 4 && ((act === "color_temp" ? "kelvin" : act) === w.sliderAct)) {
  w.sliderMaxRaw = v;
  w.liveVal = `${w.sliderAct} = ${v}`;
  this._renderCalBanner();
  return true;
}

return false;
}

  async _saveCalibration(hx) {
    if (!this._hass) return;
    try {
      await this._hass.callApi("POST", "milight_remote_studio/calibration", {
        hex: hx,
        cal: this._calibrations[hx] || {}
      });
    } catch (_) {}
  }

  async _resetCalibration(hx) {
    delete this._calibrations[hx];
    this._calWizard = null;
    if (this._hass) {
      try { await this._hass.callApi("POST", "milight_remote_studio/calibration", { hex: hx, reset: true }); } catch (_) {}
    }
    this._renderCalBanner();
    this._refreshStudioView();
  }

  _init() {
    this._rendered = true;
    this._render();
  }

  _ensureWsSubscription() {
    if (this._wsUnsub || !this._hass || !this._hass.connection) return;
    this._wsUnsub = this._hass.connection.subscribeEvents((ev) => {
      const d = (ev && ev.data) || {};
      const hx = String(d.hex || "").toUpperCase();
      if (!hx) return;
      const z = Number(d.zone ?? 1);
      const act = String(d.action || d.base_action || "on");
      const key = `${hx}:${z}`;
      if (d.source !== "rf" && this._localSuppress[key] && (Date.now() - this._localSuppress[key] < 950)) return;
      if (d.source === "rf" && this._localSuppress[key] && (Date.now() - this._localSuppress[key] < 450)) return;

      if (d.source === "rf" && this._calWizard && this._calWizard.hex === hx) {
        this._handleWizardRfCapture(hx, act, d.value);
      }
      this._triggerVisualFeedback(hx, act, z, d.source || "rf", d.value);

      if (Array.isArray(this._remotes) && window.MiLightRemoteStudio && window.MiLightRemoteStudio.resolvePhysicalToCustomAction) {
        this._remotes.forEach((cRem) => {
          if (String(cRem.linked_hex_id || "").toUpperCase() === hx) {
            const cHex = String(cRem.hex || "").toUpperCase();
            const cal = this._calibrations[cHex] || this._calibrations[hx] || {};
            const conv = window.MiLightRemoteStudio.resolvePhysicalToCustomAction(act, d.value, z, cRem.touch_zones, cal);
            this._triggerVisualFeedback(cHex, conv.converted ? conv.action : act, z, d.source || "rf", conv.converted ? conv.value : d.value);
          }
        });
      }
    }, "milight_remote_event");
  }

  async _mergeHubMetaIntoRemotes() {
    try {
      const hubUrl = this._getHubUrl();
      if (this._hass) {
        try {
          const metaRes = await this._hass.callApi("GET", "milight_remote_studio/studio_meta");
          if (metaRes && Array.isArray(metaRes.custom_models) && window.MiBoxerCatalog && window.MiBoxerCatalog.registerCustomModels) {
            window.MiBoxerCatalog.registerCustomModels(metaRes.custom_models);
          }
          if (metaRes && metaRes.studio_meta && typeof metaRes.studio_meta === "object" && Array.isArray(this._remotes)) {
            this._remotes.forEach((r) => {
              const hx = String(r.hex || "").toUpperCase();
              const m = metaRes.studio_meta[r.hex] || metaRes.studio_meta[hx] || metaRes.studio_meta[hx.replace(/^0X/, "0x")];
              if (m) {
                if (m.facia) r.facia = m.facia;
                if (m.linked_device_id !== undefined) r.linked_device_id = m.linked_device_id;
                if (m.linked_hex_id !== undefined) r.linked_hex_id = m.linked_hex_id;
              }
            });
          }
        } catch (_) {}
      }
      if (window.MiBoxerCatalog && window.MiBoxerCatalog.syncCustomModelsFromHub) {
        await window.MiBoxerCatalog.syncCustomModelsFromHub(hubUrl).catch(() => {});
      }
      const hr = await fetch(`${hubUrl}/api/remotes`, { cache: "no-store" }).catch(() => null);
      if (!hr) return;
      if (!hr.ok) return;
      const list = await hr.json();
      const byHex = new Map();
      (Array.isArray(list) ? list : []).forEach((item) => {
        const hx = String(item.hex_id || "").toUpperCase();
        if (hx) byHex.set(hx, item);
      });
      if (Array.isArray(this._remotes)) {
        this._remotes.forEach((r) => {
          const hx = String(r.hex || "").toUpperCase();
          const hubItem = byHex.get(hx);
          if (hubItem) {
            r.device_id = hubItem.device_id;
            r.visual_model = hubItem.visual_model || r.visual_model || r.model;
            r.remote_type = hubItem.remote_type || r.remote_type;
            r.facia = hubItem.facia || r.facia;
            r.touch_zones = hubItem.touch_zones || r.touch_zones;
            r.linked_device_id = hubItem.linked_device_id || 0;
            r.linked_hex_id = hubItem.linked_hex_id || "";
          }
        });
      }
    } catch (_) {}
  }

  _getHubUrl() {
    const c = (this._panel && this._panel.config) || this._panelConfig || {}; return String(c.hub_url || "http://milight-hub.local").replace(/\/+$/, "");
  }

  _isCompatPair(custRem, physRem) {
    if (!custRem || !physRem || !window.MiBoxerCatalog || !window.MiBoxerCatalog.areModelsPhysicallyCompatible) return false;
    return window.MiBoxerCatalog.areModelsPhysicallyCompatible(this._resolveModel(custRem), this._resolveModel(physRem));
  }

  _findLinkedPair(rem) {
    if (!rem || !Array.isArray(this._remotes)) return null;
    const curUp = String(rem.hex || "").toUpperCase();
    const isCust = (x) => String(x.visual_model || x.model || "").startsWith("CUST_") || String(x.name || "").includes("[Showcase]");
    if (isCust(rem)) {
      const lhx = String(rem.linked_hex_id || "").toUpperCase();
      if (!lhx) return null;
      const phys = this._remotes.find((p) => String(p.hex || "").toUpperCase() === lhx);
      return (phys && this._isCompatPair(rem, phys)) ? { custom: rem, physical: phys } : null;
    }
    const cust = this._remotes.find((c) => isCust(c) && String(c.linked_hex_id || "").toUpperCase() === curUp && this._isCompatPair(c, rem));
    return cust ? { custom: cust, physical: rem } : null;
  }

  _openHaStencilDesigner(rem) {
    if (!window.MiLightRemoteStudio || !window.MiLightRemoteStudio.openFaciaDesigner) return;
    const target = rem || (this._remotes || []).find((x) => String(x.hex || "").toUpperCase() === String(this._selHex || "").toUpperCase()) || {};
    const mod = this._resolveModel(target);
    const hubUrl = this._getHubUrl();
    window.MiLightRemoteStudio.openFaciaDesigner({
      hubUrl,
      model: mod,
      hexId: target.hex || this._selHex,
      remoteName: target.name || mod.name || this._selHex,
      facia: target.facia || (mod && mod.facia),
      touchZones: target.touch_zones || (mod && mod.touchZones),
      calibration: this._calibrations[String(target.hex || "").toUpperCase()],
      onTestAction: (act, val, z) => {
        const thx = target.hex || this._selHex;
        this._triggerVisualFeedback(thx, act, z, "ui", val);
        this._throttledSend(thx, z, act, val);
      },
      onSaveCustomModel: async () => { await this._loadRemotes(); this._refreshStudioView(); },
      onDeleteCustomModel: async () => { await this._loadRemotes(); this._refreshStudioView(); }
    });
  }


  _mountCompanionFaceplate(hostEl, partnerRem, primaryRem) {
    const C = window.MiBoxerCatalog;
    if (!hostEl || !C || !partnerRem) return;
    const pHex = String(partnerRem.hex || "").toUpperCase();
    const pMod = this._resolveModel(partnerRem);
    hostEl.innerHTML = C.renderModelSvg(pMod, { activeZone: this._selZone, uid: "compfp", facia: partnerRem.facia, touchZones: partnerRem.touch_zones });
    this._mountOverlays(hostEl, partnerRem, this._selZone);

    hostEl.querySelectorAll(".mbx-seg-hit").forEach((segEl) => {
      const segAct = segEl.getAttribute("data-seg-act") || "";
      if (!segAct) return;
      segEl.style.cursor = "pointer";
      segEl.onclick = (ev) => {
        ev.stopPropagation();
        const mSeg = segAct.match(/_(\d+)$/);
        const segIdx = mSeg ? Number(mSeg[1]) : 1;
        this._baseAct = segAct;
        this._triggerVisualFeedback(partnerRem.hex, segAct, this._selZone, "ui", segIdx);
        this._mirrorVirtualAcrossPair(partnerRem, segAct, segIdx, this._selZone);
        this._throttledSend(partnerRem.hex, this._selZone, segAct, segIdx);
        this._updateYaml();
      };
    });

    const svgEl = hostEl.querySelector("svg");
    const tz = normTouchZones(partnerRem.touch_zones);
    const zBit = this._selZone < 16 ? (1 << this._selZone) : 0x8000;
    if (svgEl && !(tz.hue_ring.enabled && ((tz.hue_ring.zone_mask ?? 0xFFFF) & zBit))) {
      const wg = this._wheelGeometry(svgEl);
      if (wg) {
        const ringHit = document.createElementNS(MBX_SVG_NS, "circle");
        ringHit.setAttribute("cx", wg.cx.toFixed(1));
        ringHit.setAttribute("cy", wg.cy.toFixed(1));
        ringHit.setAttribute("r", wg.rTrack.toFixed(1));
        ringHit.setAttribute("fill", "none");
        ringHit.setAttribute("stroke", "rgba(0,0,0,0.001)");
        ringHit.setAttribute("stroke-width", (wg.rOut - wg.rIn + 6).toFixed(1));
        ringHit.style.cursor = "crosshair";
        svgEl.appendChild(ringHit);
        ringHit.onclick = (ev) => {
          ev.stopPropagation();
          const pt = this._svgRootPoint(svgEl, ev.clientX, ev.clientY);
          const visDeg = normDeg((Math.atan2(pt.y - wg.cy, pt.x - wg.cx) * 180) / Math.PI + 90);
          const hubHue = this._visualDegToHubHue(pHex, visDeg);
          this._triggerVisualFeedback(partnerRem.hex, "hue", this._selZone, "ui", hubHue, visDeg);
          this._mirrorVirtualAcrossPair(partnerRem, "hue", hubHue, this._selZone);
          this._throttledSend(partnerRem.hex, this._selZone, "hue", hubHue);
        };
      }
    }

    hostEl.querySelectorAll(".mbx-hit").forEach((el) => {
      const act = el.getAttribute("data-act") || "";
      const zAttr = el.getAttribute("data-zone");
      if (act === "hue") return;
      el.onclick = (ev) => {
        ev.stopPropagation();
        if (zAttr !== null && zAttr !== "") {
          this._selZone = Number(zAttr);
          this._activeZones[pHex] = this._selZone;
          this._activeZones[String(primaryRem.hex || "").toUpperCase()] = this._selZone;
          if (act === "zone") { this._refreshStudioView(); return; }
        }
        let sendAct = act === "zone_on" ? "on" : (act === "zone_off" ? "off" : act);
        let sendVal = undefined;
        if (ANALOG_ACTS.has(act) && svgEl) {
          const pt = this._svgRootPoint(svgEl, ev.clientX, ev.clientY);
          const bb = this._barBBox(el);
          if (bb) {
            const horiz = bb.width >= bb.height;
            const ratio = horiz ? (pt.x - bb.x) / bb.width : (bb.y + bb.height - pt.y) / bb.height;
            const pct = Math.round(Math.max(0, Math.min(1, ratio)) * 100);
            sendVal = (act === "kelvin" || act === "color_temp") ? Math.round(370 - (pct / 100) * 217) : (act === "saturation" ? Math.round(100 - pct) : pct);
            this._triggerVisualFeedback(partnerRem.hex, sendAct, this._selZone, "ui", sendVal, pct);
            this._mirrorVirtualAcrossPair(partnerRem, sendAct, sendVal, this._selZone);
            this._throttledSend(partnerRem.hex, this._selZone, sendAct, sendVal);
            return;
          }
        }
        this._triggerVisualFeedback(partnerRem.hex, sendAct, this._selZone, "ui");
        this._mirrorVirtualAcrossPair(partnerRem, sendAct, sendVal, this._selZone);
        this._throttledSend(partnerRem.hex, this._selZone, sendAct, sendVal);
      };
    });

    this._renderOverlayLabelsOnSvg(svgEl, pHex);
    this._renderAnalogIndicators(hostEl, pHex, this._selZone);
  }

  _mirrorVirtualAcrossPair(srcRem, act, val, zone) {
    if (!srcRem || !window.MiLightRemoteStudio) return;
    const pair = this._findLinkedPair(srcRem);
    if (!pair) return;
    const srcUp = String(srcRem.hex || "").toUpperCase();
    const custUp = String(pair.custom.hex || "").toUpperCase();
    const physUp = String(pair.physical.hex || "").toUpperCase();
    if (srcUp === custUp) {
      const cal = this._calibrations[physUp] || this._calibrations[custUp] || {};
      const rev = window.MiLightRemoteStudio.resolveCustomToPhysicalAction
        ? window.MiLightRemoteStudio.resolveCustomToPhysicalAction(act, val, zone, pair.custom.touch_zones, cal)
        : { action: act, value: val, converted: false };
      this._triggerVisualFeedback(pair.physical.hex, rev.action, zone, "ui", rev.value, rev.visDeg !== undefined ? rev.visDeg : rev.pct);
      if (this._liveSend && !/^(hue|cct|sat|bri)_seg_\d+$/.test(act)) {
        this._throttledSend(pair.physical.hex, zone, rev.action, rev.value);
      }
    } else if (srcUp === physUp) {
      const cal = this._calibrations[custUp] || this._calibrations[physUp] || {};
      const conv = window.MiLightRemoteStudio.resolvePhysicalToCustomAction
        ? window.MiLightRemoteStudio.resolvePhysicalToCustomAction(act, val ?? -1, zone, pair.custom.touch_zones, cal)
        : { action: act, value: val, converted: false };
      this._triggerVisualFeedback(pair.custom.hex, conv.converted ? conv.action : act, zone, "ui", conv.converted ? conv.value : val);
    }
  }

  _renderHaLinkBar() {
    const box = this.querySelector("#haLinkBar");
    if (!box || !Array.isArray(this._remotes) || !this._remotes.length) return;
    const selUp = String(this._selHex || "").toUpperCase();
    const cur = this._remotes.find((r) => String(r.hex || "").toUpperCase() === selUp) || this._remotes[0];
    if (!cur) { box.innerHTML = ""; return; }

    const curHexUp = String(cur.hex || "").toUpperCase();
    const vm = String(cur.visual_model || cur.model || "");
    const isCustom = vm.startsWith("CUST_") || String(cur.name || "").includes("[Showcase]");

    const isRemCustom = (r) => {
      const m = String(r.visual_model || r.model || "");
      return m.startsWith("CUST_") || String(r.name || "").includes("[Showcase]");
    };

    const saveLink = async (custRem, physRem, switchHex) => {
      const devId = Number(custRem.device_id || parseInt(String(custRem.hex || "0").replace(/^0x/i, ""), 16));
      const pId = physRem ? Number(physRem.device_id || parseInt(String(physRem.hex || "0").replace(/^0x/i, ""), 16)) : 0;
      const pHex = physRem ? String(physRem.hex || "") : "";
      const payload = { device_id: devId, hex_id: custRem.hex, linked_device_id: pId, linked_hex_id: pHex };
      let ok = false;
      if (this._hass) {
        try { await this._hass.callApi("POST", "milight_remote_studio/studio_meta", payload); ok = true; } catch (_) {}
      }
      if (!ok) {
        await fetch(`${this._getHubUrl()}/api/remotes/studio_meta`, {
          method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload)
        }).catch(() => {});
      }
      custRem.linked_device_id = pId;
      custRem.linked_hex_id = pHex;
      if (pHex) this._pairViewMode = "split";
      await this._loadRemotes();
      if (switchHex) this._selHex = switchHex;
      this._refreshStudioView();
    };

    if (isCustom) {
      const reqShell = (window.MiBoxerCatalog && window.MiBoxerCatalog.resolveBaseHardwareId) ? window.MiBoxerCatalog.resolveBaseHardwareId(this._resolveModel(cur)) : "";
      const physList = this._remotes.filter((r) => !isRemCustom(r) && String(r.hex || "").toUpperCase() !== curHexUp && this._isCompatPair(cur, r));
      const curLinkHex = String(cur.linked_hex_id || "").toUpperCase();
      const linkedPhysObj = physList.find((p) => String(p.hex || "").toUpperCase() === curLinkHex);
      box.innerHTML = `
        <div style="padding:10px 12px;border-radius:10px;border:1px solid ${curLinkHex ? '#16a34a' : 'var(--divider-color)'};background:${curLinkHex ? 'rgba(22,163,74,0.09)' : 'var(--secondary-background-color)'};font-size:12px;text-align:left;">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;margin-bottom:6px;flex-wrap:wrap;">
            <span style="font-weight:700;">${curLinkHex ? `🟢 Linked to Live Panel: ${linkedPhysObj ? linkedPhysObj.name : curLinkHex} (${curLinkHex})` : '🔗 Link Custom Stencil to Configured Panel'}</span>
            <button id="haEditStencilBtn" class="sec" type="button" style="padding:3px 8px;font-size:11px;">🎨 Edit Stencil</button>
          </div>
          <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
            <select id="haPhysLinkSel" style="flex:1;min-width:155px;padding:5px 8px;font-size:12px;border-radius:6px;">
              <option value="">${physList.length ? `Unlinked (Virtual ${cur.hex} Only — Select ${reqShell} Hardware)` : `No ${reqShell} Hardware Registered (Virtual ${cur.hex} Only)`}</option>
              ${physList.map((p) => {
                const phx = String(p.hex || "").toUpperCase();
                return `<option value="${p.hex}" ${phx === curLinkHex ? 'selected' : ''}>${p.name || p.hex} (${p.hex} · ${p.visual_model || p.model || ''})</option>`;
              }).join("")}
            </select>
            ${curLinkHex ? `<button id="haJumpPhysBtn" class="sec" type="button" style="padding:5px 9px;font-size:11.5px;">View ${curLinkHex}</button>` : ""}
          </div>
        </div>`;
      const editBtn = box.querySelector("#haEditStencilBtn");
      if (editBtn) editBtn.onclick = () => this._openHaStencilDesigner(cur);
      const sel = box.querySelector("#haPhysLinkSel");
      if (sel) sel.onchange = () => {
        const target = sel.value ? this._remotes.find((x) => String(x.hex).toUpperCase() === String(sel.value).toUpperCase()) : null;
        saveLink(cur, target || null);
      };
      const jmp = box.querySelector("#haJumpPhysBtn");
      if (jmp) jmp.onclick = () => { this._selHex = curLinkHex; this._refreshStudioView(); };
    } else {
      const custList = this._remotes.filter((r) => isRemCustom(r) && this._isCompatPair(r, cur));
      const linkedHere = custList.filter((r) => String(r.linked_hex_id || "").toUpperCase() === curHexUp);
      if (linkedHere.length) {
        const cObj = linkedHere[0];
        box.innerHTML = `
          <div style="padding:10px 12px;border-radius:10px;border:1px solid #0284c7;background:rgba(2,132,199,0.09);font-size:12px;display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;text-align:left;">
            <div>
              <div style="font-weight:700;">🔗 Linked Custom Stencil: ${cObj.name || cObj.hex}</div>
              <div style="font-size:11px;color:var(--secondary-text-color);">Physical presses on ${cur.hex} mirror live onto ${cObj.hex}.</div>
            </div>
            <div style="display:flex;gap:6px;">
              <button id="haOpenCustBtn" type="button" style="padding:5px 10px;font-size:11.5px;">Open Custom View &rarr;</button>
              <button id="haUnlinkCustBtn" class="sec" type="button" style="padding:5px 9px;font-size:11.5px;">Unlink</button>
            </div>
          </div>`;
        box.querySelector("#haOpenCustBtn").onclick = () => { this._selHex = cObj.hex; this._refreshStudioView(); };
        box.querySelector("#haUnlinkCustBtn").onclick = () => saveLink(cObj, null);
      } else if (custList.length) {
        box.innerHTML = `
          <div style="padding:10px 12px;border-radius:10px;border:1px solid var(--divider-color);background:var(--secondary-background-color);font-size:12px;text-align:left;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
              <span style="font-weight:700;">🔗 Link a Custom Stencil to ${cur.name || cur.hex} (${cur.hex})</span>
              <button id="haNewStencilBtn" class="sec" type="button" style="padding:3px 8px;font-size:11px;">+ New Stencil</button>
            </div>
            <div style="display:flex;gap:6px;align-items:center;">
              <select id="haCustCompanionSel" style="flex:1;padding:5px 8px;font-size:12px;border-radius:6px;">
                ${custList.map((c) => `<option value="${c.hex}">${c.name || c.hex} (${c.visual_model || c.model || ''})</option>`).join("")}
              </select>
              <button id="haDoLinkCustBtn" type="button" style="padding:5px 10px;font-size:11.5px;white-space:nowrap;">Link &amp; Open</button>
            </div>
          </div>`;
        box.querySelector("#haNewStencilBtn").onclick = () => this._openHaStencilDesigner(cur);
        box.querySelector("#haDoLinkCustBtn").onclick = () => {
          const chosenHx = box.querySelector("#haCustCompanionSel").value;
          const chosenObj = this._remotes.find((x) => String(x.hex).toUpperCase() === String(chosenHx).toUpperCase());
          if (chosenObj) saveLink(chosenObj, cur, chosenObj.hex);
        };
      } else {
        box.innerHTML = "";
      }
    }
  }

  _resolveModel(r) {
    const C = window.MiBoxerCatalog;
    if (!C || !C.MODELS) return null;
    const vm = String((r && (r.visual_model || r.model)) || "").toUpperCase();
    const rt = String((r && (r.remote_type || r.type)) || "fut089").toLowerCase();
    return C.MODELS.find((m) => m.id.toUpperCase() === vm)
        || C.MODELS.find((m) => m.base && m.base.toUpperCase() === vm)
        || C.MODELS.find((m) => m.proto === rt)
        || C.MODELS[0];
  }
  _computedAction() {
    if (this._baseAct.includes("_seg_")) return this._baseAct;
    if (this._tapMod === "long") return (this._baseAct === "off") ? "night_mode" : "set_white";
    if (this._tapMod === "double") return `${this._baseAct}_double`;
    if (this._tapMod === "triple") return `${this._baseAct}_triple`;
    return this._baseAct;
  }

  _throttledSend(hex, zone, action, value) {
    if (!this._liveSend || !this._hass || !hex) return;
    const fire = (p) => {
      this._localSuppress[`${p.hex.toUpperCase()}:${p.zone}`] = Date.now();
      this._hass.callService("milight_remote_studio", "send_virtual_action", p);
    };
    const payload = { hex, zone, action };
    if (value !== undefined && value !== null) payload.value = value;
    const now = performance.now();
    const elapsed = now - this._sendThrottle.lastTs;
    if (elapsed >= 55) {
      this._sendThrottle.lastTs = now;
      clearTimeout(this._sendThrottle.timer);
      this._sendThrottle.pending = null;
      fire(payload);
    } else {
      this._sendThrottle.pending = payload;
      if (!this._sendThrottle.timer) {
        this._sendThrottle.timer = setTimeout(() => {
          this._sendThrottle.timer = null;
          this._sendThrottle.lastTs = performance.now();
          if (this._sendThrottle.pending) {
            const p = this._sendThrottle.pending;
            this._sendThrottle.pending = null;
            fire(p);
          }
        }, 55 - elapsed);
      }
    }
  }

  // Convert screen pointer into ROOT <svg> viewBox coordinates (immune to child rotate(145) transforms!)
  _svgRootPoint(svgEl, clientX, clientY) {
    const pt = svgEl.createSVGPoint();
    pt.x = clientX;
    pt.y = clientY;
    const ctm = svgEl.getScreenCTM();
    return ctm ? pt.matrixTransform(ctm.inverse()) : { x: 0, y: 0 };
  }

  _wheelGeometry(svgEl) {
    const hueEl = svgEl.querySelector('circle.mbx-hit[data-act="hue"]') || svgEl.querySelector('.mbx-hit[data-act="hue"]');
    if (!hueEl) return null;
    if (hueEl.tagName.toLowerCase() === "circle" && hueEl.hasAttribute("r")) {
      const cx = parseFloat(hueEl.getAttribute("cx") || "0");
      const cy = parseFloat(hueEl.getAttribute("cy") || "0");
      const r = parseFloat(hueEl.getAttribute("r") || "0");
      const sw = parseFloat(hueEl.getAttribute("stroke-width") || "16");
      return { cx, cy, rTrack: r, rIn: Math.max(8, r - sw / 2), rOut: r + sw / 2 };
    }
    const bb = hueEl.getBBox();
    const r = Math.max(bb.width, bb.height) / 2;
    return { cx: bb.x + bb.width / 2, cy: bb.y + bb.height / 2, rTrack: r * 0.78, rIn: r * 0.54, rOut: r };
  }

  _findArcPath(barEl) {
    if (!barEl) return null;
    if (barEl.tagName && barEl.tagName.toLowerCase() === "path" && typeof barEl.getPointAtLength === "function") {
      return barEl;
    }
    const sub = barEl.querySelector ? barEl.querySelector("path") : null;
    if (sub && typeof sub.getPointAtLength === "function") return sub;
    return null;
  }

  _barBBox(barEl) {
if (!barEl) return null;
const candidates = [
  barEl.querySelector(":scope > rect"),
  barEl.querySelector(":scope > g > rect"),
  barEl
];
for (const el of candidates) {
  if (!el || typeof el.getBBox !== "function") continue;
  const bb = el.getBBox();
  if (bb && bb.width > 0.5 && bb.height > 0.5) return bb;
}
return null;
}

  _renderAnalogIndicators(container, hex, zone, activePulseAct) {
    if (!container) return;
    const svgEl = container.querySelector("svg");
    if (!svgEl) return;
    let layer = svgEl.querySelector(".mbx-analog-pucks");
    if (!layer) {
      layer = document.createElementNS(MBX_SVG_NS, "g");
      layer.setAttribute("class", "mbx-analog-pucks");
      layer.style.pointerEvents = "none";
      svgEl.appendChild(layer);
    }
    layer.innerHTML = "";
    const hx = String(hex || this._selHex).toUpperCase();
    const st = this._stateBucket(hx, zone);

    // Draw Calibration Target Guide Crosshair on Main Faceplate when Wizard is active!
    if (this._calWizard && this._calWizard.hex === hx && container.id === "faceplateBox") {
      const wg = this._wheelGeometry(svgEl);
      if (wg && (this._calWizard.step === 1 || this._calWizard.step === 2)) {
        const targetDeg = this._calWizard.step === 1 ? 0 : 90;
        const tp = mbxPolar(wg.cx, wg.cy, wg.rTrack, targetDeg);
        const guide = document.createElementNS(MBX_SVG_NS, "circle");
        guide.setAttribute("cx", tp.x.toFixed(1));
        guide.setAttribute("cy", tp.y.toFixed(1));
        guide.setAttribute("r", "11");
        guide.setAttribute("fill", "rgba(56,189,248,0.28)");
        guide.setAttribute("stroke", "#0284c7");
        guide.setAttribute("stroke-width", "2.8");
        guide.setAttribute("stroke-dasharray", "3 2");
        layer.appendChild(guide);
      }
    }

    // 1. Exact Centerline Color Ring Puck
    if (st.hue && st.hue.visDeg !== undefined) {
      const wg = this._wheelGeometry(svgEl);
      if (wg && wg.rTrack > 0) {
        const pos = mbxPolar(wg.cx, wg.cy, wg.rTrack, st.hue.visDeg);
        const isRf = st.hue.src === "rf";
        const colorDeg = normDeg(st.hue.visDeg - SVG_WHEEL_HUE0_DEG);
        const glowCol = isRf ? "rgba(34,197,94,.95)" : "rgba(245,158,11,.95)";

        const halo = document.createElementNS(MBX_SVG_NS, "circle");
        halo.setAttribute("cx", pos.x.toFixed(1));
        halo.setAttribute("cy", pos.y.toFixed(1));
        halo.setAttribute("r", activePulseAct === "hue" ? "10.5" : "8.8");
        halo.setAttribute("fill", "none");
        halo.setAttribute("stroke", isRf ? "#4ade80" : "#fbbf24");
        halo.setAttribute("stroke-width", "3.2");
        halo.style.filter = `drop-shadow(0 0 6px ${glowCol})`;
        layer.appendChild(halo);

        const puck = document.createElementNS(MBX_SVG_NS, "circle");
        puck.setAttribute("cx", pos.x.toFixed(1));
        puck.setAttribute("cy", pos.y.toFixed(1));
        puck.setAttribute("r", "6.2");
        puck.setAttribute("fill", `hsl(${colorDeg}, 95%, 52%)`);
        puck.setAttribute("stroke", "#ffffff");
        puck.setAttribute("stroke-width", "2.2");
        layer.appendChild(puck);
      }
    }

    // 2. Slider Thumbs (with dualCctSatPillH fallback so saturation on FUT089 renders on the shared CCT/Sat bar!)
const hasDedicatedSat = Boolean(svgEl.querySelector('.mbx-hit[data-act="saturation"]'));
const sliderDefs = [
  { key: "brightness", sel: '.mbx-hit[data-act="brightness"], .mbx-hit[data-act="bri"], .mbx-hit[data-act="dim"]' },
  { key: "kelvin",     sel: '.mbx-hit[data-act="kelvin"], .mbx-hit[data-act="color_temp"], .mbx-hit[data-act="cct"]' },
  { key: "saturation", sel: hasDedicatedSat ? '.mbx-hit[data-act="saturation"], .mbx-hit[data-act="sat"]' : '.mbx-hit[data-act="kelvin"], .mbx-hit[data-act="color_temp"], .mbx-hit[data-act="cct"]' }
];
sliderDefs.forEach(({ key, sel }) => {
  const entry = st[key];
  if (!entry || entry.pct === undefined) return;
  if (!hasDedicatedSat && (key === "kelvin" || key === "saturation")) {
    const other = key === "kelvin" ? st.saturation : st.kelvin;
    if (other && (other.ts || 0) > (entry.ts || 0)) return;
  }
  const barEl = svgEl.querySelector(sel);
  if (!barEl) {
    const acts = Array.from(svgEl.querySelectorAll("[data-act]")).map((n) => n.getAttribute("data-act"));
    console.debug("[MiLightStudio] No slider element for", key, "selector:", sel, "available data-act:", [...new Set(acts)]);
    return;
  }
  const arcPath = this._findArcPath(barEl);
  const pct = Math.max(0, Math.min(100, Number(entry.pct))) / 100;
  let tx = null;
  let ty = null;

  if (arcPath && typeof arcPath.getTotalLength === "function" && arcPath.getTotalLength() > 0) {
    const pt = arcPath.getPointAtLength(pct * arcPath.getTotalLength());
    tx = pt.x;
    ty = pt.y;
  } else {
    const bb = this._barBBox(barEl);
    if (!bb) {
      console.debug("[MiLightStudio] Zero bbox for slider", key, barEl);
      return;
    }
    const horiz = bb.width >= bb.height;
    const pad = 2.5;
    tx = horiz ? (bb.x + pad + pct * Math.max(2, bb.width - pad * 2)) : (bb.x + bb.width / 2);
    ty = horiz ? (bb.y + bb.height / 2) : (bb.y + bb.height - pad - pct * Math.max(2, bb.height - pad * 2));
  }

  const isRf = entry.src === "rf";
  const fillCol = isRf ? "#86efac" : "#fde68a";
  const strokeCol = isRf ? "#15803d" : "#d97706";
  const glowCol = isRf ? "rgba(34,197,94,.95)" : "rgba(245,158,11,.95)";

  const thumb = document.createElementNS(MBX_SVG_NS, "rect");
  const tw = 7.5;
  const th = 14;
  thumb.setAttribute("x", (tx - tw / 2).toFixed(1));
  thumb.setAttribute("y", (ty - th / 2).toFixed(1));
  thumb.setAttribute("width", tw.toFixed(1));
  thumb.setAttribute("height", th.toFixed(1));
  thumb.setAttribute("rx", "3.5");
  thumb.setAttribute("fill", fillCol);
  thumb.setAttribute("stroke", strokeCol);
  thumb.setAttribute("stroke-width", "2.2");
  thumb.style.filter = `drop-shadow(0 0 6px ${glowCol})`;
  layer.appendChild(thumb);
});
}
  _pulseHits(container, act, zone, cls) {
    if (!container) return;
    const cleanAct = String(act || "").replace(/_(double|triple)$/, "");
    if (ANALOG_ACTS.has(cleanAct)) return;

    const targets = [];
    if (cleanAct.includes("_seg_")) {
      container.querySelectorAll(`.mbx-seg-hit[data-seg-act="${cleanAct}"]`).forEach((el) => targets.push(el));
    }
    if (cleanAct === "on" || cleanAct === "off" || cleanAct === "night_mode") {
      const zAct = (cleanAct === "on") ? "zone_on" : "zone_off";
      container.querySelectorAll(`.mbx-hit[data-act="${zAct}"][data-zone="${zone}"]`).forEach((el) => targets.push(el));
    }
    const mapped = ACT_TO_SVG[cleanAct] || [cleanAct];
    mapped.forEach((a) => {
      if (!ANALOG_ACTS.has(a)) {
        container.querySelectorAll(`.mbx-hit[data-act="${a}"]`).forEach((el) => targets.push(el));
      }
    });
    container.querySelectorAll(`.mbx-hit[data-act="zone"][data-zone="${zone}"]`).forEach((el) => targets.push(el));

    targets.forEach((el) => {
      el.classList.remove("fire-rf", "fire-ui");
      void el.offsetWidth;
      el.classList.add(cls);
      clearTimeout(el._pulseTimer);
      el._pulseTimer = setTimeout(() => el.classList.remove("fire-rf", "fire-ui"), 620);
    });
  }

  _canonAct(act) {
  const a = String(act || "").toLowerCase().replace(/^(set_|slider_)/, "");
  if (a === "color_temp" || a === "cct" || a === "temp") return "kelvin";
  if (a === "bri" || a === "dim" || a === "level") return "brightness";
  if (a === "sat") return "saturation";
  return a;
}

  _triggerVisualFeedback(hex, act, zone, source, rawVal, uiVisOverride) {
    const hx = String(hex || this._selHex).toUpperCase();
    const isRf = source === "rf";
    const cls = isRf ? "fire-rf" : "fire-ui";
    const z = Number(zone ?? 1);
    const cleanAct = this._canonAct(act);

    const prevHex = this._selHex.toUpperCase();
    const prevZone = this._selZone;
    const prevZoneForHex = this._activeZones[hx];
    this._activeZones[hx] = z;

    let needFullRebuild = false;
    if (isRf && this._remotes.some((r) => r.hex.toUpperCase() === hx)) {
      const curRem = this._remotes.find((r) => r.hex.toUpperCase() === prevHex);
      const curPair = this._findLinkedPair(curRem);
      const isPartnerInSplit = curPair && (this._pairViewMode || "split") === "split" &&
        (String(curPair.custom.hex).toUpperCase() === hx || String(curPair.physical.hex).toUpperCase() === hx);
      if (!isPartnerInSplit && (prevHex !== hx || prevZone !== z)) {
        this._selHex = hx;
        this._selZone = z;
        needFullRebuild = true;
      } else if (isPartnerInSplit && prevZone !== z) {
        this._selZone = z;
        needFullRebuild = true;
      }
    } else if (this._selHex.toUpperCase() === hx && prevZone !== z && ANALOG_ACTS.has(cleanAct)) {
      this._selZone = z;
      needFullRebuild = true;
    } else if (prevZoneForHex !== z) {
      needFullRebuild = true;
    }

    const bucket = this._stateBucket(hx, z);
    let dispVal = "";
    if (cleanAct === "hue") {
      const visDeg = (uiVisOverride !== undefined)
        ? normDeg(uiVisOverride)
        : (rawVal !== undefined && rawVal !== null ? this._rfHueToVisualDeg(hx, rawVal) : null);
      if (visDeg !== null) {
        bucket.hue = { visDeg, src: isRf ? "rf" : "ui", ts: Date.now() };
        dispVal = ` (${Math.round(visDeg)}° clock / raw ${rawVal ?? "--"})`;
      }
    } else if (ANALOG_ACTS.has(cleanAct)) {
      const pct = (uiVisOverride !== undefined)
        ? Math.round(uiVisOverride)
        : this._rfSliderToPct(hx, act, rawVal);
      if (pct !== null) {
        bucket[cleanAct] = { pct, src: isRf ? "rf" : "ui", ts: Date.now() };
        dispVal = ` (${pct}%)`;
      }
    }

    this._lastTelemetry[hx] = {
      source: isRf ? "rf" : "ui",
      text: `${isRf ? "RF" : "UI"} -> Z${z}: ${act}${dispVal}`
    };

    if (needFullRebuild) {
      this._refreshStudioView();
    } else {
      const cardEl = this.querySelector(`.rem-card[data-hex-up="${hx}"]`);
      if (cardEl) {
        const foot = cardEl.querySelector(".telem-foot");
        if (foot) foot.textContent = this._lastTelemetry[hx].text;
        const slot = cardEl.querySelector(".pill-slot");
        if (slot) slot.innerHTML = `<span class="src-pill ${isRf ? "rf" : "ui"}">${isRf ? "🟢 RF" : "🟠 UI"}</span>`;
      }
      if (this._selHex.toUpperCase() === hx) {
        const fpPill = this.querySelector("#fpSrcPill");
        if (fpPill) {
          fpPill.className = `src-pill ${isRf ? "rf" : "ui"}`;
          fpPill.textContent = isRf ? "🟢 Physical RF" : "🟠 Virtual UI";
        }
        if (fpBox) { fpBox.querySelectorAll("svg").forEach((s) => { s.removeAttribute("width"); s.removeAttribute("height"); }); }
    const badge = this.querySelector("#selSummary");
        if (badge) badge.textContent = `${this._selHex} · Zone ${this._selZone} · ${this._computedAction()}`;
      }
    }

    const cardBox = this.querySelector(`.rem-card[data-hex-up="${hx}"] .rem-thumb`) || this.querySelector(`.rem-card[data-hex-up="${hx.toLowerCase()}"] .rem-thumb`);
    this._renderAnalogIndicators(cardBox, hx, z, cleanAct);
    this._pulseHits(cardBox, act, z, cls);

    const fpBox = this.querySelector("#faceplateBox");
    const bareBox = this.querySelector("#haBareLayer");
    const overBox = this.querySelector("#haStencilLayer");
    const selRemNow = this._remotes.find((r) => r.hex.toUpperCase() === this._selHex.toUpperCase());
    const pairNow = this._findLinkedPair(selRemNow);
    if (pairNow && bareBox && overBox) {
      if (String(pairNow.physical.hex).toUpperCase() === hx) {
        this._renderAnalogIndicators(bareBox, hx, z, cleanAct);
        this._pulseHits(bareBox, act, z, cls);
      }
      if (String(pairNow.custom.hex).toUpperCase() === hx) {
        this._renderAnalogIndicators(overBox, hx, z, cleanAct);
        this._pulseHits(overBox, act, z, cls);
      }
    } else if (this._selHex.toUpperCase() === hx && fpBox) {
      this._renderAnalogIndicators(fpBox, hx, z, cleanAct);
      this._pulseHits(fpBox, act, z, cls);
    }
    const compBox = this.querySelector("#companionBox");
    if (compBox && compBox.dataset && compBox.dataset.hexUp === hx) {
      this._renderAnalogIndicators(compBox, hx, z, cleanAct);
      this._pulseHits(compBox, act, z, cls);
    }

    const toast = this.querySelector("#liveToast");
    if (toast) {
      toast.className = `live-toast ${isRf ? "rf" : "ui"} show`;
      toast.textContent = `${isRf ? "🟢 Physical RF" : "🟠 Virtual UI"} · ${hx} Z${z} -> ${act}${dispVal}`;
      clearTimeout(toast._t);
      toast._t = setTimeout(() => toast.classList.remove("show"), 1350);
    }
  }

  _bindHueWheelInteractive(svgEl) {
    const wg = this._wheelGeometry(svgEl);
    if (!wg) return;
    // Create one unified transparent annular hit ring on top of the rotated stroke arcs so pointer coordinates never suffer from rotate(145)!
    const ringHit = document.createElementNS(MBX_SVG_NS, "circle");
    ringHit.setAttribute("cx", wg.cx.toFixed(1));
    ringHit.setAttribute("cy", wg.cy.toFixed(1));
    ringHit.setAttribute("r", wg.rTrack.toFixed(1));
    ringHit.setAttribute("fill", "none");
    ringHit.setAttribute("stroke", "rgba(0,0,0,0.001)");
    ringHit.setAttribute("stroke-width", (wg.rOut - wg.rIn + 6).toFixed(1));
    ringHit.style.cursor = "crosshair";
    ringHit.style.touchAction = "none";
    svgEl.appendChild(ringHit);

    const emitFromPointer = (ev) => {
      const pt = this._svgRootPoint(svgEl, ev.clientX, ev.clientY);
      const visDeg = normDeg((Math.atan2(pt.y - wg.cy, pt.x - wg.cx) * 180) / Math.PI + 90);
      const hubHue = this._visualDegToHubHue(this._selHex, visDeg);
      this._baseAct = "hue";
      const curR = this._remotes.find((x)=>x.hex.toUpperCase()===this._selHex.toUpperCase());
      this._triggerVisualFeedback(this._selHex, "hue", this._selZone, "ui", hubHue, visDeg);
      this._mirrorVirtualAcrossPair(curR, "hue", hubHue, this._selZone);
      this._throttledSend(this._selHex, this._selZone, "hue", hubHue);
      this._updateYaml();
    };

    ringHit.onpointerdown = (ev) => {
      ev.stopPropagation(); ev.preventDefault();
      try { ringHit.setPointerCapture(ev.pointerId); } catch (_) {}
      ringHit._dragging = true;
      emitFromPointer(ev);
    };
    ringHit.onpointermove = (ev) => {
      if (!ringHit._dragging) return;
      ev.stopPropagation();
      if (ringHit._raf) return;
      ringHit._raf = requestAnimationFrame(() => { ringHit._raf = null; emitFromPointer(ev); });
    };
    const stop = (ev) => {
      if (!ringHit._dragging) return;
      ringHit._dragging = false;
      try { ringHit.releasePointerCapture(ev.pointerId); } catch (_) {}
    };
    ringHit.onpointerup = stop;
    ringHit.onpointercancel = stop;
  }

  _bindBarInteractive(svgEl, el, act) {
    const key = (act === "color_temp") ? "kelvin" : act;
    const emitFromPointer = (ev) => {
      const pt = this._svgRootPoint(svgEl, ev.clientX, ev.clientY);
      const bb = this._barBBox(el);
      if (!bb) return;
      const horiz = bb.width >= bb.height;
      const ratio = horiz ? (pt.x - bb.x) / bb.width : (bb.y + bb.height - pt.y) / bb.height;
      const pct = Math.round(Math.max(0, Math.min(1, ratio)) * 100);
      // Convert visual 0..100% -> Hub value (for kelvin, 0% left = 370 warm mireds, 100% right = 153 cool mireds)
      const sendVal = key === "kelvin" ? Math.round(370 - (pct / 100) * (370 - 153)) : (key === "saturation" ? Math.round(100 - pct) : pct);
      this._baseAct = act;
      const curR = this._remotes.find((x)=>x.hex.toUpperCase()===this._selHex.toUpperCase());
      this._triggerVisualFeedback(this._selHex, act, this._selZone, "ui", sendVal, pct);
      this._mirrorVirtualAcrossPair(curR, act, sendVal, this._selZone);
      this._throttledSend(this._selHex, this._selZone, act, sendVal);
      this._updateYaml();
    };

    el.style.touchAction = "none";
    el.onpointerdown = (ev) => {
      ev.stopPropagation(); ev.preventDefault();
      try { el.setPointerCapture(ev.pointerId); } catch (_) {}
      el._dragging = true;
      emitFromPointer(ev);
    };
    el.onpointermove = (ev) => {
      if (!el._dragging) return;
      ev.stopPropagation();
      if (el._raf) return;
      el._raf = requestAnimationFrame(() => { el._raf = null; emitFromPointer(ev); });
    };
    const stop = (ev) => {
      if (!el._dragging) return;
      el._dragging = false;
      try { el.releasePointerCapture(ev.pointerId); } catch (_) {}
    };
    el.onpointerup = stop;
    el.onpointercancel = stop;
  }

  _renderCalBanner() {
const box = this.querySelector("#calBanner");
if (!box) return;
const hx = this._selHex.toUpperCase();
const cal = this._calibrations[hx];
const w = this._calWizard;

if (!w || w.hex !== hx) {
  const hasWheel = cal && typeof cal.hueTopRaw === "number";
  const sKeys = cal && cal.sliders ? Object.keys(cal.sliders).map((k) => `${k}[${cal.sliders[k].min}..${cal.sliders[k].max}]`) : [];
  box.innerHTML = `
    <div style="display:flex;justify-content:center;gap:6px;align-items:center;flex-wrap:wrap;margin-top:8px;">
      <button id="startCalBtn" class="sec" type="button" style="font-size:12px;padding:5px 10px;">
        🎯 ${hasWheel ? "Recalibrate Wheel" : "Calibrate Wheel + Sliders"}
      </button>
      <button id="calSlidersBtn" class="sec" type="button" style="font-size:12px;padding:5px 10px;">
        📏 Calibrate Sliders
      </button>
      ${(hasWheel || sKeys.length) ? `<button id="resetCalBtn" class="sec" type="button" style="font-size:11px;padding:4px 8px;">Reset</button>` : ""}
    </div>
    ${(hasWheel || sKeys.length) ? `<div class="meta" style="margin-top:4px;">${hasWheel ? `Wheel: 12h=${Math.round(cal.hueTopRaw)}° (${cal.hueDir === -1 ? "CCW" : "CW"})` : ""}${sKeys.length ? ` · Sliders: ${sKeys.join(", ")}` : ""}</div>` : ""}`;
  const sBtn = box.querySelector("#startCalBtn");
  if (sBtn) sBtn.onclick = () => {
    this._calWizard = { step: 1, hex: hx, stepEnteredAt: Date.now() };
    this._renderCalBanner();
    this._renderAnalogIndicators(this.querySelector("#faceplateBox"), hx, this._selZone);
  };
  const slBtn = box.querySelector("#calSlidersBtn");
  if (slBtn) slBtn.onclick = () => {
    this._calWizard = { step: 3, hex: hx, stepEnteredAt: Date.now() };
    this._renderCalBanner();
  };
  const rBtn = box.querySelector("#resetCalBtn");
  if (rBtn) rBtn.onclick = () => this._resetCalibration(hx);
  return;
}

const doneTxt = (w.doneSliders && w.doneSliders.length) ? `<div style="color:#16a34a;font-weight:700;margin-bottom:4px;">✓ Saved: ${w.doneSliders.join(", ")}</div>` : "";
const liveTxt = w.liveVal !== null && w.liveVal !== undefined ? `<div style="margin-top:4px;font-family:monospace;color:#0284c7;font-weight:700;">Live RF Value: ${w.liveVal}</div>` : "";
const prompts = {
  1: "Step 1: Touch & release <b>12 o'clock (Top)</b> on your physical Color Wheel...",
  2: "Step 2: Touch & release <b>3 o'clock (Right)</b> on your physical Color Wheel...",
  3: "<b>Left / Bottom End:</b> Touch the <b>Far-Left (or Bottom)</b> edge of your physical slider, then click <b>Lock Left End &rarr;</b>",
  4: `<b>Right / Top End:</b> Left locked (${w.sliderAct} = ${w.sliderMinRaw})! Now touch the <b>Far-Right (or Top)</b> edge of <b>${w.sliderAct}</b>, then click <b>Save Right End ✓</b>`
};
box.innerHTML = `
  <div style="margin-top:10px;padding:10px 12px;border-radius:10px;background:rgba(2,132,199,0.12);border:1px solid #38bdf8;font-size:12px;line-height:1.45;">
    ${doneTxt}
    <div>🎯 ${prompts[w.step]}</div>
    ${liveTxt}
    <div style="margin-top:7px;display:flex;justify-content:center;gap:8px;flex-wrap:wrap;">
      ${w.step === 1 && w.hueTopRaw !== undefined ? `<button id="lockTopBtn" type="button" style="padding:4px 11px;font-size:11px;">Lock 12h (${Math.round(w.hueTopRaw)}) &rarr;</button>` : ""}
      ${w.step === 2 && w._candRight !== undefined ? `<button id="lockRightBtn" type="button" style="padding:4px 11px;font-size:11px;">Lock 3h (${Math.round(w._candRight)}) &rarr;</button>` : ""}
      ${w.step === 3 && w.sliderMinRaw !== undefined && w.sliderMinRaw !== null ? `<button id="lockMinBtn" type="button" style="padding:4px 11px;font-size:11px;">Lock Left End (${w.sliderMinRaw}) &rarr;</button>` : ""}
      ${w.step === 4 && w.sliderMaxRaw !== undefined && w.sliderMaxRaw !== null ? `<button id="lockMaxBtn" type="button" style="padding:4px 11px;font-size:11px;">Save Right End (${w.sliderMaxRaw}) ✓</button>` : ""}
      ${w.step >= 3 ? `<button id="doneCalBtn" class="sec" type="button" style="padding:4px 10px;font-size:11px;">Finish</button>` : ""}
      <button id="cancelCalBtn" class="sec" type="button" style="padding:4px 10px;font-size:11px;">Cancel</button>
    </div>
  </div>`;

const lTop = box.querySelector("#lockTopBtn");
if (lTop) lTop.onclick = () => {
  clearTimeout(w._settleTimer);
  w.step = 2; w.liveVal = null; w.stepEnteredAt = Date.now();
  this._renderCalBanner();
};
const lRight = box.querySelector("#lockRightBtn");
if (lRight) lRight.onclick = () => {
  clearTimeout(w._settleTimer);
  const rightRaw = w._candRight;
  const cwDelta = normDeg(rightRaw - w.hueTopRaw);
  const ccwDelta = normDeg(w.hueTopRaw - rightRaw);
  const hueDir = Math.abs(cwDelta - 90) <= Math.abs(ccwDelta - 90) ? 1 : -1;
  const existing = this._calibrations[hx] || {};
  this._calibrations[hx] = Object.assign({}, existing, { hueTopRaw: w.hueTopRaw, hueDir });
  w.step = 3; w.liveVal = null; w.stepEnteredAt = Date.now();
  this._saveCalibration(hx);
  this._renderCalBanner();
};
const lMin = box.querySelector("#lockMinBtn");
if (lMin) lMin.onclick = () => {
  w.step = 4; w.sliderMaxRaw = null; w.liveVal = null; this._renderCalBanner();
};
const lMax = box.querySelector("#lockMaxBtn");
if (lMax) lMax.onclick = () => {
  if (Math.abs(w.sliderMaxRaw - w.sliderMinRaw) < 5) {
    w.liveVal = `Right (${w.sliderMaxRaw}) matches Left (${w.sliderMinRaw}) — touch the opposite Right/Top end first!`;
    this._renderCalBanner();
    return;
  }
  const existing = this._calibrations[hx] || {};
  const sliders = Object.assign({}, existing.sliders || {});
  sliders[w.sliderAct] = { min: w.sliderMinRaw, max: w.sliderMaxRaw };
  this._calibrations[hx] = Object.assign({}, existing, { sliders });
  w.doneSliders = (w.doneSliders || []).concat([`${w.sliderAct}[${w.sliderMinRaw}..${w.sliderMaxRaw}]`]);
  w.step = 3; w.sliderAct = null; w.sliderMinRaw = null; w.sliderMaxRaw = null; w.liveVal = null;
  this._saveCalibration(hx);
  this._renderCalBanner();
  this._refreshStudioView();
};
const dBtn = box.querySelector("#doneCalBtn");
if (dBtn) dBtn.onclick = () => { this._calWizard = null; this._renderCalBanner(); this._refreshStudioView(); };
const cBtn = box.querySelector("#cancelCalBtn");
if (cBtn) cBtn.onclick = () => { this._calWizard = null; this._renderCalBanner(); this._refreshStudioView(); };
this._renderAnalogIndicators(this.querySelector("#faceplateBox"), hx, this._selZone);
}

  _mountOverlays(box, r, curZ) {
    const svgEl = box.querySelector("svg");
    if (!svgEl || !r) return;
    const tz = normTouchZones(r.touch_zones);
    const zBit = curZ < 16 ? (1 << curZ) : 0x8000;

    if (tz.hue_ring.enabled && ((tz.hue_ring.zone_mask ?? 0xFFFF) & zBit)) {
      const wg = this._wheelGeometry(svgEl);
      if (wg && wg.rOut > 0) {
        const n = Math.min(12, Math.max(2, Number(tz.hue_ring.segments) || 6)), span = 360 / n, off = Number(tz.hue_ring.offset_deg || 0);
        const g = document.createElementNS(MBX_SVG_NS, "g");
        for (let i = 0; i < n; i++) {
          const sD = off + i * span, eD = sD + span, segAct = `hue_seg_${i + 1}`, lbl = (tz.hue_ring.labels || [])[i] || `Slice ${i + 1}`;
          const isSel = this._baseAct === segAct;
          const p = document.createElementNS(MBX_SVG_NS, "path");
          p.setAttribute("d", mbxWedgePath(wg.cx, wg.cy, wg.rIn, wg.rOut, sD, eD));
          p.setAttribute("fill", isSel ? "rgba(56,189,248,0.34)" : "rgba(15,23,42,0.16)");
          p.setAttribute("stroke", isSel ? "#38bdf8" : "#0f172a");
          p.setAttribute("stroke-width", isSel ? "2.5" : "1.5");
          p.setAttribute("class", "mbx-seg-hit");
          p.setAttribute("data-seg-act", segAct);
          p.style.cursor = "pointer";
          p.onclick = (ev) => {
            ev.stopPropagation();
            this._baseAct = segAct;
            this._triggerVisualFeedback(this._selHex, segAct, curZ, "ui", i + 1);
            this._throttledSend(this._selHex, curZ, segAct, i + 1);
            this._updateYaml();
          };
          const t = document.createElementNS(MBX_SVG_NS, "title"); t.textContent = `#${i + 1}: ${lbl} (${segAct})`; p.appendChild(t);
          g.appendChild(p);
          const lp = mbxPolar(wg.cx, wg.cy, wg.rTrack, sD + span / 2);
          const tx = document.createElementNS(MBX_SVG_NS, "text");
          tx.setAttribute("x", lp.x.toFixed(1)); tx.setAttribute("y", (lp.y + 3).toFixed(1));
          tx.setAttribute("text-anchor", "middle"); tx.setAttribute("font-size", "8.5");
          tx.setAttribute("font-weight", "800"); tx.setAttribute("fill", "#fff");
          tx.setAttribute("stroke", "#0f172a"); tx.setAttribute("stroke-width", "2.2");
          tx.setAttribute("paint-order", "stroke"); tx.style.pointerEvents = "none";
          tx.textContent = String(i + 1);
          g.appendChild(tx);
        }
        svgEl.appendChild(g);
      }
    }

    const bars = [
      { key: "cct_bar", sel: '.mbx-hit[data-act="kelvin"], .mbx-hit[data-act="color_temp"]', pfx: "cct_seg_" },
      { key: "sat_bar", sel: '.mbx-hit[data-act="saturation"]', pfx: "sat_seg_" },
      { key: "bri_bar", sel: '.mbx-hit[data-act="brightness"]', pfx: "bri_seg_" }
    ];
    bars.forEach(({ key, sel, pfx }) => {
      const cfg = tz[key];
      if (!cfg || !cfg.enabled || !((cfg.zone_mask ?? 0xFFFF) & zBit)) return;
      const barEl = svgEl.querySelector(sel);
      if (!barEl || !barEl.getBBox) return;
      const bb = barEl.getBBox();
      if (bb.width <= 0 || bb.height <= 0) return;
      const n = Math.min(12, Math.max(2, Number(cfg.segments) || 4));
      const horiz = bb.width >= bb.height;
      const g = document.createElementNS(MBX_SVG_NS, "g");
      for (let i = 0; i < n; i++) {
        const segAct = `${pfx}${i + 1}`, isSel = this._baseAct === segAct;
        const rx = horiz ? bb.x + (bb.width / n) * i : bb.x;
        const ry = horiz ? bb.y : bb.y + (bb.height / n) * i;
        const rw = horiz ? bb.width / n : bb.width;
        const rh = horiz ? bb.height : bb.height / n;
        const rc = document.createElementNS(MBX_SVG_NS, "rect");
        rc.setAttribute("x", rx.toFixed(1)); rc.setAttribute("y", ry.toFixed(1));
        rc.setAttribute("width", rw.toFixed(1)); rc.setAttribute("height", rh.toFixed(1));
        rc.setAttribute("rx", "3");
        rc.setAttribute("fill", isSel ? "rgba(56,189,248,0.34)" : "rgba(15,23,42,0.14)");
        rc.setAttribute("stroke", isSel ? "#38bdf8" : "#0f172a");
        rc.setAttribute("stroke-width", isSel ? "2.2" : "1.2");
        rc.setAttribute("class", "mbx-seg-hit");
        rc.setAttribute("data-seg-act", segAct);
        rc.style.cursor = "pointer";
        rc.onclick = (ev) => {
          ev.stopPropagation();
          this._baseAct = segAct;
          this._triggerVisualFeedback(this._selHex, segAct, curZ, "ui", i + 1);
          this._throttledSend(this._selHex, curZ, segAct, i + 1);
          this._updateYaml();
        };
        g.appendChild(rc);
      }
      svgEl.appendChild(g);
    });
  }

  _render() {
    this._entitiesPopulated = false;
    const cfg = (this._panel && this._panel.config) || {};
    const hubUrl = (cfg.hub_url || "http://milight-hub.local").replace(/\/+$/, "");
    const twinUrl = cfg.twin_url || `${window.location.protocol}//${window.location.hostname}:8588`;
    this.innerHTML = `
      <style>
        :host { display: block; height: 100%; box-sizing: border-box; }
        .app-shell {
          margin: 10px 14px; padding: 14px 16px; border-radius: 16px;
          background: var(--card-background-color); border: 1px solid var(--divider-color);
          box-shadow: 0 6px 24px rgba(0,0,0,0.06); font-family: system-ui, -apple-system, sans-serif;
          color: var(--primary-text-color); display: flex; flex-direction: column;
          height: calc(100vh - 22px); min-height: 680px; box-sizing: border-box; overflow: hidden;
        }
        @media (max-width: 1100px) { .app-shell { height: auto; overflow: visible; } }
        .hdr { display: flex; justify-content: space-between; align-items: center; gap: 10px; flex-wrap: wrap; padding-bottom: 10px; border-bottom: 1px solid var(--divider-color); margin-bottom: 10px; flex-shrink: 0; }
        .hdr h1 { margin: 0; font-size: 19px; font-weight: 800; letter-spacing: -0.01em; }
        .hdr p { margin: 2px 0 0; color: var(--secondary-text-color); font-size: 12px; }
        .actions, .pills { display: flex; gap: 7px; flex-wrap: wrap; align-items: center; }
        .app-shell button:not(.mlrs-tour-btn):not(.mlrs-tour-reopen):not(.mlrs-peel-btn) {
          padding: 7px 12px; border-radius: 8px; border: 1px solid var(--divider-color);
          background: var(--primary-color); color: var(--text-primary-color, #fff);
          cursor: pointer; font-weight: 700; font-size: 12px;
        }
        .app-shell button.sec, .app-shell .pill { background: var(--secondary-background-color); color: var(--primary-text-color); }
        .app-shell .pill.active { background: #0284c7; color: #fff; border-color: #0284c7; }

        .app-shell .mlrs-tour-bar { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; padding: 9px 14px; border-radius: 11px; border: 1px solid rgba(2,132,199,0.38); background: linear-gradient(135deg, rgba(2,132,199,0.10), rgba(15,23,42,0.03)); margin-bottom: 8px; font-size: 12px; }
        .app-shell .mlrs-tour-left { display: flex; align-items: center; gap: 10px; flex: 1; min-width: 240px; }
        .app-shell .mlrs-tour-icon { width: 32px; height: 32px; border-radius: 8px; background: #0284c7; color: #fff; display: flex; align-items: center; justify-content: center; font-size: 15px; flex-shrink: 0; }
        .app-shell .mlrs-tour-step-badge { display: inline-flex; padding: 2px 8px; border-radius: 999px; background: rgba(2,132,199,0.16); color: #0284c7; font-weight: 800; font-size: 10.5px; text-transform: uppercase; margin-right: 6px; }
        .app-shell .mlrs-tour-dots { display: inline-flex; gap: 4px; align-items: center; margin-left: 8px; }
        .app-shell .mlrs-tour-dot { width: 6px; height: 6px; border-radius: 999px; background: rgba(100,116,139,0.35); }
        .app-shell .mlrs-tour-dot.on { width: 15px; background: #0284c7; }
        .app-shell .mlrs-tour-nav { display: flex; gap: 6px; align-items: center; }
        .app-shell button.mlrs-tour-btn { padding: 5px 10px; border-radius: 7px; border: 1px solid var(--divider-color); background: var(--card-background-color); color: var(--primary-text-color); font-weight: 700; font-size: 11.5px; }
        .app-shell button.mlrs-tour-btn.demo { background: #0284c7; border-color: #0284c7; color: #fff; }

        .status-line { display: flex; justify-content: space-between; align-items: center; font-size: 11.5px; color: var(--secondary-text-color); margin-bottom: 8px; flex-shrink: 0; }

        /* 3-Frame Internal Workspace */
        .workspace {
          display: grid; grid-template-columns: 245px minmax(440px, 1.25fr) minmax(390px, 560px);
          gap: 14px; flex: 1; min-height: 0; overflow: hidden;
        }
        @media (max-width: 1100px) { .workspace { grid-template-columns: 1fr; overflow: visible; } }
        .sub-frame {
          background: var(--secondary-background-color); border: 1px solid var(--divider-color);
          border-radius: 13px; padding: 12px; display: flex; flex-direction: column;
          min-height: 0; overflow-y: auto; box-sizing: border-box;
        }
        .sub-frame-hdr { display: flex; justify-content: space-between; align-items: center; gap: 6px; padding-bottom: 8px; margin-bottom: 10px; border-bottom: 1px solid var(--divider-color); flex-shrink: 0; }
        .sub-frame-title { font-size: 13.5px; font-weight: 800; margin: 0; }

        /* Left Frame: Vertical Remote Selector List */
        .rem-strip { display: flex; flex-direction: column; gap: 8px; overflow-y: auto; flex: 1; padding-right: 2px; }
        .rem-card { display: flex; align-items: center; gap: 10px; background: var(--card-background-color); border: 1.5px solid var(--divider-color); border-radius: 11px; padding: 8px 10px; cursor: pointer; transition: border-color .14s, box-shadow .14s; }
        .rem-card:hover { border-color: #38bdf8; }
        .rem-card.selected { border-color: #0284c7; box-shadow: 0 0 0 2px rgba(2,132,199,.20); }
        .rem-thumb { width: 42px; height: 64px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .rem-thumb svg { max-width: 40px; max-height: 62px; width: auto; height: auto; pointer-events: none; }
        .rem-card h3 { margin: 0 0 2px; font-size: 13px; font-weight: 700; }
        .meta { font-size: 11.5px; color: var(--secondary-text-color); line-height: 1.35; }
        .telem-foot { margin-top: 3px; font-family: monospace; font-size: 10.5px; color: var(--secondary-text-color); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

        .src-pill { display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; border-radius: 999px; font-size: 10.5px; font-weight: 800; border: 1px solid var(--divider-color); }
        .src-pill.rf { background: #dcfce7; color: #166534; border-color: #86efac; }
        .src-pill.ui { background: #fef3c7; color: #92400e; border-color: #fcd34d; }

        /* Center Frame: Peel-Back Faceplate Stage */
        #faceplateBox { display: flex; justify-content: center; align-items: center; flex: 1; min-height: 390px; padding: 8px; user-select: none; overflow: hidden; }
        #faceplateBox svg { width: auto !important; height: clamp(380px, calc(100vh - 275px), 650px) !important; max-width: 94% !important; max-height: 100% !important; filter: drop-shadow(0 12px 26px rgba(0,0,0,.24)); }
        .mbx-hit { cursor: pointer; }
        .mbx-selected:not([data-act="hue"]):not([data-act="kelvin"]):not([data-act="color_temp"]):not([data-act="saturation"]):not([data-act="brightness"]) > rect,
        .mbx-selected:not([data-act="hue"]):not([data-act="kelvin"]):not([data-act="color_temp"]):not([data-act="saturation"]):not([data-act="brightness"]) > circle,
        rect.mbx-selected:not([data-act="kelvin"]):not([data-act="color_temp"]):not([data-act="saturation"]):not([data-act="brightness"]),
        circle.mbx-selected:not([data-act="hue"]) { stroke: #0284c7 !important; stroke-width: 2.4px !important; }
        .mbx-hit.fire-rf:not([data-act="hue"]):not([data-act="kelvin"]):not([data-act="color_temp"]):not([data-act="saturation"]):not([data-act="brightness"]) > rect,
        .mbx-hit.fire-rf:not([data-act="hue"]):not([data-act="kelvin"]):not([data-act="color_temp"]):not([data-act="saturation"]):not([data-act="brightness"]) > circle,
        rect.mbx-hit.fire-rf:not([data-act="kelvin"]):not([data-act="color_temp"]):not([data-act="saturation"]):not([data-act="brightness"]),
        circle.mbx-hit.fire-rf:not([data-act="hue"]),
        .mbx-seg-hit.fire-rf { fill: #86efac !important; stroke: #15803d !important; stroke-width: 3px !important; filter: drop-shadow(0 0 10px rgba(34,197,94,.85)) !important; }
        .mbx-hit.fire-ui:not([data-act="hue"]):not([data-act="kelvin"]):not([data-act="color_temp"]):not([data-act="saturation"]):not([data-act="brightness"]) > rect,
        .mbx-hit.fire-ui:not([data-act="hue"]):not([data-act="kelvin"]):not([data-act="color_temp"]):not([data-act="saturation"]):not([data-act="brightness"]) > circle,
        rect.mbx-hit.fire-ui:not([data-act="kelvin"]):not([data-act="color_temp"]):not([data-act="saturation"]):not([data-act="brightness"]),
        circle.mbx-hit.fire-ui:not([data-act="hue"]),
        .mbx-seg-hit.fire-ui { fill: #fde68a !important; stroke: #d97706 !important; stroke-width: 3px !important; filter: drop-shadow(0 0 10px rgba(245,158,11,.85)) !important; }
        .live-toast { min-height: 20px; margin-top: 4px; padding: 3px 10px; border-radius: 999px; font-size: 11px; font-weight: 700; text-align: center; opacity: 0; transition: opacity .15s; display: inline-block; }
        .live-toast.show { opacity: 1; }
        .live-toast.rf { background: #dcfce7; color: #166534; border: 1px solid #86efac; }
        .live-toast.ui { background: #fef3c7; color: #92400e; border: 1px solid #fcd34d; }
        .legend { display: flex; justify-content: center; gap: 10px; align-items: center; margin-top: 4px; font-size: 11px; color: var(--secondary-text-color); }

        /* Right Frame: Clean Tabbed Inspector */
        .insp-tabs { display: flex; gap: 5px; flex-wrap: wrap; background: var(--card-background-color); padding: 4px; border-radius: 10px; border: 1px solid var(--divider-color); margin-bottom: 12px; flex-shrink: 0; }
        .insp-tab { flex: 1; min-width: 115px; padding: 7px 10px !important; border-radius: 7px !important; border: none !important; background: transparent !important; color: var(--secondary-text-color) !important; font-size: 12px !important; font-weight: 800 !important; text-align: center; cursor: pointer; }
        .insp-tab.active { background: #0284c7 !important; color: #ffffff !important; box-shadow: 0 2px 6px rgba(2,132,199,0.25); }
        .insp-pane { background: var(--card-background-color); border: 1px solid var(--divider-color); border-radius: 11px; padding: 14px; flex: 1; overflow-y: auto; }

        .vis-ctrl-hero { display: flex; align-items: center; gap: 12px; padding: 10px 12px; border-radius: 11px; border: 1.5px solid rgba(56,189,248,0.45); background: rgba(2,132,199,0.07); margin-bottom: 12px; }
        .vis-keycap { width: 54px; height: 54px; border-radius: 11px; background: var(--card-background-color); border: 2px solid #0284c7; display: flex; flex-direction: column; align-items: center; justify-content: center; flex-shrink: 0; color: var(--primary-text-color); }
        .gest-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px; margin: 6px 0 12px; }
        .gest-card { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 8px 10px; border-radius: 9px; border: 1.5px solid var(--divider-color); background: var(--secondary-background-color); cursor: pointer; }
        .gest-card.active, .app-shell .gest-card.pill.active { border-color: #0284c7 !important; background: #0284c7 !important; color: #ffffff !important; box-shadow: 0 3px 10px rgba(2,132,199,0.25); }
        .gest-card.active .meta, .app-shell .gest-card.pill.active .meta { color: #e0f2fe !important; font-weight: 600; }
        .gest-test-btn { padding: 4px 8px !important; font-size: 11px !important; border-radius: 6px !important; background: var(--card-background-color) !important; color: var(--primary-text-color) !important; border: 1px solid var(--divider-color) !important; }
        .dom-chips { display: flex; gap: 5px; flex-wrap: wrap; margin: 6px 0 8px; }
        .dom-chip { padding: 3px 9px; border-radius: 999px; font-size: 11px; font-weight: 700; border: 1px solid var(--divider-color); background: var(--secondary-background-color); color: var(--primary-text-color); cursor: pointer; }
        .dom-chip.active { background: #0284c7; color: #fff; border-color: #0284c7; }
        .act-tiles { display: grid; grid-template-columns: repeat(5, minmax(75px, 1fr)); gap: 6px; margin-top: 8px; }
        @media (max-width: 900px) { .act-tiles { grid-template-columns: repeat(2, 1fr); } }
        .act-tile { padding: 7px 6px; border-radius: 8px; border: 1.5px solid var(--divider-color); background: var(--secondary-background-color); color: var(--primary-text-color); font-size: 11.5px; font-weight: 700; text-align: center; cursor: pointer; }
        .act-tile.active { border-color: #15803d !important; background: #16a34a !important; color: #ffffff !important; box-shadow: 0 2px 8px rgba(22,163,74,0.28); }
        .saved-bind-list { margin-top: 10px; display: flex; flex-direction: column; gap: 5px; }
        .saved-bind-item { padding: 6px 10px; border-radius: 8px; background: rgba(22,163,74,0.09); border: 1px solid rgba(22,163,74,0.35); font-size: 11.5px; }

        .field-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(195px, 1fr)); gap: 10px; margin: 10px 0; }
        label { display: block; font-size: 10.5px; font-weight: 700; color: var(--secondary-text-color); margin-bottom: 4px; text-transform: uppercase; letter-spacing: .04em; }
        select, input[type="text"] { width: 100%; box-sizing: border-box; padding: 7px 9px; border-radius: 8px; border: 1px solid var(--divider-color); background: var(--secondary-background-color); color: var(--primary-text-color); font-size: 12.5px; }
        .badge { display: inline-block; padding: 3px 10px; border-radius: 999px; background: #0284c7; color: #ffffff; font-weight: 800; font-size: 11px; }
        pre { background: var(--secondary-background-color); border: 1px solid var(--divider-color); border-radius: 8px; padding: 10px; overflow-x: auto; font-size: 11.5px; margin: 8px 0 0; }
      </style>

      <div class="app-shell">
        <div class="hdr">
          <div>
            <h1>Mi-Light Visual Remote &amp; Panel Studio</h1>
            <p>1:1 finger-aligned reticles &amp; peelable capacitive stencils (<span class="src-pill rf">🟢 Physical RF</span> <span class="src-pill ui">🟠 Virtual UI</span>)</p>
          </div>
          <div class="actions">
            <label style="display:inline-flex;align-items:center;gap:5px;margin:0;text-transform:none;font-size:12px;cursor:pointer;">
              <input id="liveSendChk" type="checkbox" checked /> Live Dispatch
            </label>
            <button id="openHubStencilStudioBtn" type="button" style="background:#0f172a;color:#fff;">🎨 Stencil Studio</button>
            <button id="refreshBtn" type="button">🔄 Sync Remotes</button>
            <a href="${hubUrl}/#/remotes" target="_blank" rel="noreferrer" style="text-decoration:none;"><button class="sec" type="button">Hub #/remotes ↗</button></a>
            <button id="openTwinBtn" class="sec" type="button">🏠 3D Twin ↗</button>
          </div>
        </div>

        <!-- Dedicated Framed Guided Showcase Card -->
        <div id="haGuidedTourBar" style="flex-shrink:0;"></div>
        <div class="status-line"><span id="status">Loading registered remotes...</span></div>

        <!-- 3-Column Internal Resizing Workspace -->
        <div class="workspace">
          <!-- FRAME 1: Remotes Sidebar -->
          <div class="sub-frame">
            <div class="sub-frame-hdr">
              <h3 class="sub-frame-title">1. Remotes &amp; Stencils</h3>
            </div>
            <div id="remStrip" class="rem-strip"></div>
          </div>

          <!-- FRAME 2: Interactive Peel-Back Faceplate Stage -->
          <div class="sub-frame" style="text-align:center;">
            <div class="sub-frame-hdr">
              <div style="text-align:left;min-width:0;">
                <h3 class="sub-frame-title" id="fpTitle" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">Hardware Faceplate</h3>
                <div id="fpSub" class="meta" style="font-size:11px;">Click or drag wheel, sliders, or stencil pads</div>
              </div>
              <span id="fpSrcPill" class="src-pill ui">🟠 Ready</span>
            </div>
            <div id="fpPrimaryTag" style="font-size:11px;font-weight:700;margin-bottom:4px;"></div>
            <div id="haPairModeTabs" style="margin-bottom:6px;"></div>
            <div id="faceplateBox"></div>
            <div id="companionWrap" style="display:none;"><div id="companionBox"></div></div>
            <div class="legend">
              <span>🟢 RF Touch</span><span>&middot;</span><span>🟠 Virtual Click</span>
            </div>
            <div><span id="liveToast" class="live-toast"></span></div>
          </div>

          <!-- FRAME 3: Tabbed Focused Inspector (One Task at a Time!) -->
          <div class="sub-frame">
            <div class="insp-tabs" id="haInspTabs">
              <button type="button" class="insp-tab active" data-itab="mapper">🎯 1. Button Mapper</button>
              <button type="button" class="insp-tab" data-itab="link">🔗 2. Hardware Link &amp; Calibrate</button>
              <button type="button" class="insp-tab" data-itab="pod">🖨️ 3. Stencil &amp; 1:1 Print / POD</button>
              <button type="button" class="insp-tab" data-itab="yaml">📄 4. YAML</button>
            </div>

            <!-- TAB 1: Visual Button Mapper -->
            <div class="insp-pane" data-ipane="mapper">
              <div class="vis-ctrl-hero">
                <div class="vis-keycap" id="visKeycapBox">🔘</div>
                <div style="flex:1;min-width:0;">
                  <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
                    <strong id="visCtrlTitle" style="font-size:13.5px;">Zone 1 · ON Button</strong>
                    <span id="selSummary" class="badge"></span>
                  </div>
                  <div id="visCtrlHint" class="meta" style="margin-top:2px;">Click any pad, zone, or wheel slice on the center faceplate to select it.</div>
                </div>
              </div>

              <label>Step A — Choose Gesture &amp; Click ▶ Test to Simulate Live</label>
              <div class="gest-grid" id="tapPills">
                <div class="gest-card active pill" data-tap="single">
                  <div><div style="font-weight:800;font-size:12px;">👆 Single Tap (1×)</div><div class="meta" style="font-size:10.5px;">Instant press</div></div>
                  <button type="button" class="gest-test-btn" data-test-tap="single">▶ Test</button>
                </div>
                <div class="gest-card pill" data-tap="double">
                  <div><div style="font-weight:800;font-size:12px;">✌️ Double Tap (2×)</div><div class="meta" style="font-size:10.5px;">Quick 2-press</div></div>
                  <button type="button" class="gest-test-btn" data-test-tap="double">▶ Test</button>
                </div>
                <div class="gest-card pill" data-tap="triple">
                  <div><div style="font-weight:800;font-size:12px;">🤟 Triple Tap (3×)</div><div class="meta" style="font-size:10.5px;">3-press scene</div></div>
                  <button type="button" class="gest-test-btn" data-test-tap="triple">▶ Test</button>
                </div>
                <div class="gest-card pill" data-tap="long">
                  <div><div style="font-weight:800;font-size:12px;">⏱️ Long Hold</div><div class="meta" style="font-size:10.5px;">Hold ~0.7s</div></div>
                  <button type="button" class="gest-test-btn" data-test-tap="long">▶ Test</button>
                </div>
              </div>

              <label>Step B — Target Home Assistant Device &amp; Action</label>
              <div class="dom-chips" id="haDomChips">
                <span class="dom-chip active" data-dom="all">All</span>
                <span class="dom-chip" data-dom="light">💡 Lights</span>
                <span class="dom-chip" data-dom="fan">🌀 Fans</span>
                <span class="dom-chip" data-dom="climate">❄️ Climate</span>
                <span class="dom-chip" data-dom="cover">🪟 Covers</span>
                <span class="dom-chip" data-dom="switch">🔌 Switches</span>
                <span class="dom-chip" data-dom="scene">🎬 Scenes</span>
              </div>
              <div style="display:flex;gap:8px;align-items:center;">
                <select id="mapEntity" style="flex:1;"></select>
                <button id="runEntityBtn" class="sec" type="button" style="white-space:nowrap;">▶ Test Device</button>
              </div>
              <div class="act-tiles" id="haActTiles">
                <div class="act-tile active" data-svc="homeassistant.toggle">🔄 Toggle</div>
                <div class="act-tile" data-svc="homeassistant.turn_on">🟢 Turn ON</div>
                <div class="act-tile" data-svc="homeassistant.turn_off">⚫ Turn OFF</div>
                <div class="act-tile" data-svc="cover.open_cover">⬆️ Open</div>
                <div class="act-tile" data-svc="cover.close_cover">⬇️ Close</div>
              </div>
              <select id="mapService" style="display:none;"><option value="homeassistant.toggle">Toggle</option><option value="homeassistant.turn_on">Turn On</option><option value="homeassistant.turn_off">Turn Off</option><option value="cover.open_cover">Open Cover</option><option value="cover.close_cover">Close Cover</option></select>

              <div style="margin-top:12px;display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
                <input id="autoAlias" type="text" placeholder="Optional automation label (auto-named if blank)" style="flex:1;min-width:180px;" />
                <button id="saveAutoBtn" type="button" style="background:#16a34a;border-color:#15803d;color:#fff;padding:8px 16px;">✨ Save Mapping to HA</button>
              </div>
              <div id="savedBindList" class="saved-bind-list"></div>
            </div>

            <!-- TAB 2: Hardware Pairing & Physical Finger Calibration -->
            <div class="insp-pane" data-ipane="link" style="display:none;">
              <h4 style="margin:0 0 6px;font-size:14px;">🔗 Two-Way Physical Panel &amp; Custom Stencil Pairing</h4>
              <p class="meta" style="margin:0 0 10px;">Pair a custom stencil exclusively with its matching base hardware shell so physical 2.4 GHz touches animate your custom stencil &amp; peel-back view.</p>
              <div id="haLinkBar" style="margin-bottom:14px;"></div>
              <hr style="border:0;border-top:1px solid var(--divider-color);margin:14px 0;" />
              <h4 style="margin:0 0 6px;font-size:14px;">🎯 Physical Capacitive Wheel &amp; Slider Calibration</h4>
              <p class="meta" style="margin:0 0 8px;">Align your physical MiBoxer glass touch ring (12 o'clock &amp; 3 o'clock) and slider endpoints 1:1 with the visual reticle.</p>
              <div id="calBanner"></div>
            </div>

            <!-- TAB 3: Stencil Labels, Accessibility & 1:1 Print / POD Export -->
            <div class="insp-pane" data-ipane="pod" style="display:none;">
              <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:10px;">
                <div>
                  <h4 style="margin:0;font-size:14px;">🖨️ Stencil Designer &amp; 1:1 Millimeter Print / POD</h4>
                  <div class="meta">Design full custom stencils or export calibrated 1:1 vector decals.</div>
                </div>
                <button id="openHubStencilStudioBtn2" type="button" style="background:#0f172a;color:#fff;">🎨 Launch Fullscreen Stencil Studio</button>
              </div>
              <div class="field-grid">
                <div>
                  <label>Overlay &amp; Accessibility Theme</label>
                  <select id="overlayThemeSel">
                    <option value="standard">Standard Overlay</option>
                    <option value="high_contrast">High-Contrast Labels</option>
                    <option value="accessibility">Large-Print / Accessibility</option>
                  </select>
                </div>
                <div>
                  <label>Print / Sticker Material</label>
                  <select id="podMaterialSel">
                    <option value="peelable_matte_vinyl">Peelable / Repositionable Matte Vinyl</option>
                    <option value="permanent_matte_vinyl">Permanent Matte Vinyl</option>
                    <option value="laminated_pet">Laminated PET Decal</option>
                    <option value="die_cut_stencil">Die-Cut Stencil</option>
                  </select>
                </div>
                <div>
                  <label>Quick Badge Target</label>
                  <select id="posTargetSel"></select>
                </div>
                <div>
                  <label>Quick Badge Icon &amp; Text</label>
                  <div style="display:flex;gap:5px;">
                    <select id="customIconSel" style="width:90px;">
                      <option value="">None</option>
                      <option value="💡">💡</option><option value="🪟">🪟</option><option value="🌡️">🌡️</option>
                      <option value="🌀">🌀</option><option value="🎬">🎬</option><option value="🌙">🌙</option>
                      <option value="☀️">☀️</option><option value="⚡">⚡</option><option value="🔒">🔒</option>
                    </select>
                    <input id="customLabelInp" type="text" placeholder="Label" />
                    <button id="applyLabelBtn" class="sec" type="button">Set</button>
                  </div>
                </div>
              </div>
              <div id="podSpecsLine" class="meta" style="margin:10px 0;padding:8px 10px;border-radius:8px;background:var(--secondary-background-color);font-weight:700;"></div>
              <div class="pills">
                <button id="dlSvg1to1Btn" type="button">⬇ Download 1:1 SVG</button>
                <button id="dlStencilSvgBtn" class="sec" type="button">⬇ Download 1:1 Stencil Cut SVG</button>
                <button id="openPrintSheetBtn" class="sec" type="button">🖨️ Print Sheet (10mm Ruler)</button>
                <button id="dlPodJsonBtn" class="sec" type="button">📦 Download POD JSON</button>
                <button id="copyPodJsonBtn" class="sec" type="button">📋 Copy POD JSON</button>
              </div>
            </div>

            <!-- TAB 4: Optional Generated YAML -->
            <div class="insp-pane" data-ipane="yaml" style="display:none;">
              <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:8px;">
                <div class="meta">Optional Home Assistant Automation YAML (updates live from Tab 1):</div>
                <div class="pills">
                  <button id="copyYamlBtn" class="sec" type="button">📋 Copy YAML</button>
                  <button id="testVirtualBtn" class="sec" type="button">📡 Fire Virtual Event</button>
                </div>
              </div>
              <pre id="yamlPreview"></pre>
            </div>
          </div>
        </div>
      </div>`;

    try { window.name = "milight_ha_studio_parent"; } catch (_) {}
        const switchHaInspTab = (tabName) => {
      this._activeInspTab = tabName;
      this.querySelectorAll("#haInspTabs .insp-tab").forEach((b) => b.classList.toggle("active", b.dataset.itab === tabName));
      this.querySelectorAll(".insp-pane[data-ipane]").forEach((p) => { p.style.display = p.dataset.ipane === tabName ? "block" : "none"; });
    };
    this._switchInspTab = switchHaInspTab;
    this.querySelectorAll("#haInspTabs .insp-tab").forEach((b) => {
      b.onclick = () => switchHaInspTab(b.dataset.itab);
    });
    const stBtn2 = this.querySelector("#openHubStencilStudioBtn2");
    if (stBtn2) stBtn2.onclick = () => this.querySelector("#openHubStencilStudioBtn")?.click();
    const stBtn = this.querySelector("#openHubStencilStudioBtn");
    if (stBtn) stBtn.onclick = () => {
      const r = (this._remotes || []).find((x) => String(x.hex || "").toUpperCase() === String(this._selHex || "").toUpperCase()) || this._remotes[0] || {};
      const mod = this._resolveModel(r);
      if (!window.MiLightRemoteStudio) { alert("Hub Remote Studio script not loaded yet."); return; }
      window.MiLightRemoteStudio.openFaciaDesigner({
        hubUrl: this._getHubUrl(),
        model: mod,
        hexId: this._selHex,
        remoteName: r.name || this._selHex,
        facia: r.facia || (mod && mod.facia),
        touchZones: r.touch_zones || (mod && mod.touchZones),
        onTestAction: (act, val, z) => {
          this._triggerVisualFeedback(this._selHex, act, z, "ui", val);
          this._throttledSend(this._selHex, z, act, val);
        },
        onSaveCustomModel: async () => { await this._loadRemotes(); this._refreshStudioView(); },
        onDeleteCustomModel: async () => { await this._loadRemotes(); this._refreshStudioView(); }
      });
    };
    this.querySelector("#openTwinBtn").onclick = () => {
      const retUrl = encodeURIComponent(window.location.href);
      const sep = twinUrl.includes("?") ? "&" : "?";
      const fullTwinUrl = `${twinUrl}${sep}ret=${retUrl}&src=ha`;
      if (this._twinWin && !this._twinWin.closed) {
        this._twinWin.location.href = fullTwinUrl;
        this._twinWin.focus();
      } else {
        this._twinWin = window.open(fullTwinUrl, "milight_3d_twin_singleton");
      }
    };
    this.querySelector("#liveSendChk").onchange = (e) => { this._liveSend = e.target.checked; };
    this.querySelector("#refreshBtn").onclick = () => this._loadRemotes();
    window.__MLRS_STAGE_DOWNLOAD = async (filename, content, mime) => {
      if (!this._hass) return null;
      const res = await this._hass.callApi("POST", "milight_remote_studio/download_stage", { filename, content, mime });
      return res && res.url ? res.url : null;
    };

    const tourMount = this.querySelector("#haGuidedTourBar");
    if (tourMount && window.MiLightRemoteStudio && window.MiLightRemoteStudio.mountShowcaseTour) {
      window.MiLightRemoteStudio.mountShowcaseTour(tourMount, {
        tourId: "ha_studio_main",
        steps: [
          { title: "Live 2.4 GHz RF vs Virtual Screen Reticles", body: "Physical MiBoxer wall-panel touches glow Green (RF) while screen clicks/drags glow Amber (UI) with 1:1 finger tracking.", actionLabel: "Pulse Live Demo", onAction: () => { const a = this._computedAction(); this._triggerVisualFeedback(this._selHex, a, this._selZone, "ui"); } },
          { title: "Real-World Peel-Back Custom Stencils", body: "Select 0x3DB8 (3D Estate B8) and peel back the custom vinyl decal to inspect the bare factory B8 glass panel paired underneath.", actionLabel: "Peel Back 0x3DB8 (55%)", onAction: () => { const r = (this._remotes||[]).find(x=>String(x.hex).toUpperCase()==="0X3DB8"); if (r) { this._selHex = r.hex; this._peelPct = 55; this._refreshStudioView(); } } },
          { title: "Visual Button & Gesture Mapper (Zero YAML Required)", body: "Click any pad or wheel slice on the remote, test 1x / 2x / 3x / Hold gestures with the ▶ Test buttons, and save directly to HA Automations.", actionLabel: "Test 2x Double Tap", onAction: () => { const b = this.querySelector('[data-test-tap="double"]'); if (b) b.click(); } },
          { title: "Physical Finger Position Calibration", body: "Use Calibrate Wheel + Sliders under any physical remote so raw MiBoxer capacitive angles align 1:1 with screen clock degrees.", actionLabel: "Highlight Calibration", onAction: () => { if (this._switchInspTab) this._switchInspTab("link"); } },
          { title: "Fullscreen Capacitive Stencil Studio", body: "Design custom multi-zone room icons, mask unused buttons, and configure Step-Cycle (1 to 6) + Long-Hold pads.", actionLabel: "Open Stencil Studio", onAction: () => { this.querySelector("#openHubStencilStudioBtn")?.click(); } },
          { title: "1:1 Millimeter SVG, 10 mm Ruler Print & POD JSON", body: "Export true-scale 1:1 vector stencils (extension-safe download) or print sheets with a 10 mm verification box.", actionLabel: "Download 1:1 SVG", onAction: () => { if (this._switchInspTab) this._switchInspTab("pod"); this.querySelector("#dlSvg1to1Btn")?.click(); } }
        ]
      });
    }

    this.querySelectorAll("#haMapperTabs .mapper-tab").forEach((tb) => {
      tb.onclick = () => {
        const isVis = tb.dataset.mtab === "visual";
        this.querySelectorAll("#haMapperTabs .mapper-tab").forEach((x) => x.classList.toggle("active", x === tb));
        const vp = this.querySelector("#haVisualMapperPane"), yp = this.querySelector("#haYamlMapperPane");
        if (vp) vp.style.display = isVis ? "block" : "none";
        if (yp) yp.style.display = isVis ? "none" : "block";
      };
    });

    this.querySelectorAll("#tapPills .pill").forEach((b) => {
      b.onclick = () => {
        this._tapMod = b.dataset.tap;
        this.querySelectorAll("#tapPills .pill").forEach((x) => x.classList.toggle("active", x === b));
        this._refreshStudioView();
      };
    });

    this.querySelectorAll("[data-test-tap]").forEach((tb) => {
      tb.onclick = (ev) => {
        ev.stopPropagation();
        const tapKind = tb.getAttribute("data-test-tap") || "single";
        this._tapMod = tapKind;
        this.querySelectorAll("#tapPills .pill").forEach((x) => x.classList.toggle("active", x.dataset.tap === tapKind));
        const action = this._computedAction();
        this._triggerVisualFeedback(this._selHex, action, this._selZone, "ui");
        this._throttledSend(this._selHex, this._selZone, action);
        this._updateYaml();
      };
    });

    this.querySelectorAll("#haDomChips .dom-chip").forEach((ch) => {
      ch.onclick = () => {
        this._entityDomainFilter = ch.dataset.dom || "all";
        this.querySelectorAll("#haDomChips .dom-chip").forEach((x) => x.classList.toggle("active", x === ch));
        this._populateEntities();
      };
    });

    this.querySelectorAll("#haActTiles .act-tile").forEach((at) => {
      at.onclick = () => {
        const svc = at.dataset.svc || "homeassistant.toggle";
        const sel = this.querySelector("#mapService");
        if (sel) sel.value = svc;
        this.querySelectorAll("#haActTiles .act-tile").forEach((x) => x.classList.toggle("active", x === at));
        this._updateYaml();
      };
    });
    ["#mapEntity", "#mapService", "#autoAlias"].forEach((s) => {
      this.querySelector(s).onchange = () => this._updateYaml();
    });
    this.querySelector("#testVirtualBtn").onclick = () => {
      const action = this._computedAction();
      this._triggerVisualFeedback(this._selHex, action, this._selZone, "ui");
      this._throttledSend(this._selHex, this._selZone, action);
    };
    this.querySelector("#runEntityBtn").onclick = async () => {
      const entity_id = this.querySelector("#mapEntity").value;
      const [d, s] = (this.querySelector("#mapService").value || "homeassistant.toggle").split(".");
      if (this._hass && entity_id) {
        await this._hass.callService(d, s, { entity_id });
        this.querySelector("#status").textContent = `Tested ${d}.${s} on ${entity_id}`;
      }
    };
    this.querySelector("#saveAutoBtn").onclick = async () => {
      const entity_id = this.querySelector("#mapEntity").value;
      const service = this.querySelector("#mapService").value;
      const action = this._computedAction();
      const label = this.querySelector("#autoAlias").value.trim() || undefined;
      if (!this._hass || !entity_id) return;
      try {
        const res = await this._hass.callApi("POST", "milight_remote_studio/create_automation", {
          hex: this._selHex, zone: this._selZone, action, entity_id, service, label
        });
        this.querySelector("#status").textContent = `Saved & reloaded HA Automation: "${res.alias}"!`;
        this._savedSessionBinds = (this._savedSessionBinds || []).concat([{ hex: this._selHex, zone: this._selZone, action, entity_id, service, alias: res.alias }]);
        const sbBox = this.querySelector("#savedBindList");
        if (sbBox) {
          sbBox.innerHTML = this._savedSessionBinds.slice(-4).reverse().map((b) => `<div class="saved-bind-item"><span>✅ <b>${b.hex} Z${b.zone} · ${b.action}</b> &rarr; <code>${b.entity_id}</code> (${b.service.split('.')[1]})</span></div>`).join("");
        }
      } catch (e) {
        this.querySelector("#status").textContent = `Save failed: ${e.message}`;
      }
    };
    this.querySelector("#copyYamlBtn").onclick = async () => {
      const txt = this.querySelector("#yamlPreview").textContent || "";
      if (navigator.clipboard && txt) {
        await navigator.clipboard.writeText(txt);
        this.querySelector("#status").textContent = "Copied automation YAML!";
      }
    };
    this.querySelector("#overlayThemeSel").onchange = (e) => {
      this._overlayTheme = e.target.value;
      this._refreshStudioView();
    };
    this.querySelector("#podMaterialSel").onchange = (e) => {
      this._podMaterial = e.target.value;
      this._updateYaml();
    };
    this.querySelector("#posTargetSel").onchange = () => {
      this._syncTargetInputs();
    };
    this.querySelector("#customIconSel").onchange = () => {
      const k = this.querySelector("#posTargetSel").value || this._labelKey(this._baseAct, this._selZone);
      const ico = this.querySelector("#customIconSel").value;
      const iMap = this._iconMapForHex(this._selHex);
      if (ico) iMap[k] = ico;
      else delete iMap[k];
      this._refreshStudioView();
    };
    this.querySelector("#applyLabelBtn").onclick = () => {
      const k = this.querySelector("#posTargetSel").value || this._labelKey(this._baseAct, this._selZone);
      const val = (this.querySelector("#customLabelInp").value || "").trim();
      const ico = (this.querySelector("#customIconSel").value || "").trim();
      const lMap = this._labelMapForHex(this._selHex);
      const iMap = this._iconMapForHex(this._selHex);
      if (val) lMap[k] = val;
      else delete lMap[k];
      if (ico) iMap[k] = ico;
      else delete iMap[k];
      this._refreshStudioView();
    };
        this.querySelector("#dlStencilSvgBtn").onclick = () => {
  const rem = this._remotes.find((r) => r.hex.toUpperCase() === this._selHex.toUpperCase()) || this._remotes[0] || { hex: this._selHex, name: this._selHex };
  const mod = this._resolveModel(rem);
  this._downloadFile(`${mod.id.toLowerCase()}_${rem.hex.toLowerCase()}_stencil_1to1.svg`, this._buildStencilSvg(rem, mod), "image/svg+xml");
  this.querySelector("#status").textContent = `Downloaded 1:1 Stencil SVG for ${mod.id} (${rem.hex})`;
};
    this.querySelector("#dlSvg1to1Btn").onclick = () => {
      const rem = this._remotes.find((r) => r.hex.toUpperCase() === this._selHex.toUpperCase()) || this._remotes[0] || { hex: this._selHex, name: this._selHex };
      const mod = this._resolveModel(rem);
      this._downloadFile(`${mod.id.toLowerCase()}_${rem.hex.toLowerCase()}_1to1.svg`, this._buildOneToOneSvg(rem, mod), "image/svg+xml");
      this.querySelector("#status").textContent = `Downloaded 1:1 SVG for ${mod.id} (${rem.hex})`;
    };
    this.querySelector("#openPrintSheetBtn").onclick = () => {
      const rem = this._remotes.find((r) => r.hex.toUpperCase() === this._selHex.toUpperCase()) || this._remotes[0] || { hex: this._selHex, name: this._selHex };
      const mod = this._resolveModel(rem);
      const dims = window.MiBoxerCatalog.getPhysicalDims(mod);
      const svg1to1 = this._buildOneToOneSvg(rem, mod);
      const w = window.open("", "_blank");
      if (!w) return;
      w.document.write(`<!doctype html><html><head><title>1:1 Print Sheet - ${mod.id}</title><style>
        body{font-family:sans-serif;padding:20px;color:#111}
        .ruler{display:inline-flex;align-items:center;gap:8px;border:1px dashed #444;padding:8px 12px;margin-bottom:16px;font-size:12px}
        .sq10{width:10mm;height:10mm;border:1.5px solid #000;background:#f3f4f6}
        @media print{.noprint{display:none}}
      </style></head><body>
        <div class="noprint"><button onclick="window.print()">Print / Save PDF (Set Scale = 100%)</button></div>
        <h2>${rem.name || mod.name} (${rem.hex}) — ${dims.width_mm} × ${dims.height_mm} mm (1:1 Scale)</h2>
        <div class="ruler"><div class="sq10"></div><span>10 mm × 10 mm Scale Check Box (Measure with ruler before cutting)</span></div>
        <div>${svg1to1}</div>
      </body></html>`);
      w.document.close();
    };
    this.querySelector("#copyPodJsonBtn").onclick = async () => {
      const rem = this._remotes.find((r) => r.hex.toUpperCase() === this._selHex.toUpperCase()) || this._remotes[0] || { hex: this._selHex, name: this._selHex };
      const mod = this._resolveModel(rem);
      const payload = JSON.stringify(this._buildPodOrderPayload(rem, mod), null, 2);
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(payload);
        this.querySelector("#status").textContent = `Copied POD Order JSON for ${mod.id} (${rem.hex})`;
      }
    };
    this.querySelector("#dlPodJsonBtn").onclick = () => {
      const rem = this._remotes.find((r) => r.hex.toUpperCase() === this._selHex.toUpperCase()) || this._remotes[0] || { hex: this._selHex, name: this._selHex };
      const mod = this._resolveModel(rem);
      this._downloadFile(`${mod.id.toLowerCase()}_${rem.hex.toLowerCase()}_pod_order.json`, JSON.stringify(this._buildPodOrderPayload(rem, mod), null, 2), "application/json");
      this.querySelector("#status").textContent = `Downloaded POD Order JSON for ${mod.id} (${rem.hex})`;
    };

    this._populateEntities();
    this._loadRemotes();
  }

  _populateEntities() {
    if (!this._hass || !this._hass.states) return;
    const sel = this.querySelector("#mapEntity");
    if (!sel) return;
    const domF = this._entityDomainFilter || "all";
    const prevVal = sel.value;
    const ids = Object.keys(this._hass.states)
      .filter((id) => /^(light|fan|climate|cover|switch|scene|valve|input_boolean)\./.test(id))
      .filter((id) => domF === "all" || id.startsWith(domF + "."))
      .sort();
    sel.innerHTML = ids.map((id) => `<option value="${id}">${(this._hass.states[id].attributes.friendly_name || id)} (${id})</option>`).join("");
    if (prevVal && ids.includes(prevVal)) sel.value = prevVal;
    this._entitiesPopulated = true;
    this._updateYaml();
  }

  _refreshStudioView() {
    const C = window.MiBoxerCatalog;
    const strip = this.querySelector("#remStrip");
    if (strip && C) {
      strip.innerHTML = this._remotes.map((r, idx) => {
        const hx = r.hex.toUpperCase();
        const mod = this._resolveModel(r);
        const sel = hx === this._selHex.toUpperCase() ? "selected" : "";
        const z = this._activeZones[hx] ?? (hx === this._selHex.toUpperCase() ? this._selZone : 1);
        const tel = this._lastTelemetry[hx];
        const pillHtml = tel ? `<span class="src-pill ${tel.source}">${tel.source === "rf" ? "🟢 RF" : "🟠 UI"}</span>` : "";
        const thumbSvg = C.renderModelSvg(mod, { size: "thumb", activeZone: z, uid: `card${idx}`, facia: r.facia, touchZones: r.touch_zones });
        return `<div class="rem-card ${sel}" data-hex="${r.hex}" data-hex-up="${hx}">
          <div class="rem-thumb">${thumbSvg}</div>
          <div style="flex:1;min-width:0;">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;">
              <h3 style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${r.name || mod.name}</h3>
              <span class="pill-slot">${pillHtml}</span>
            </div>
            <div class="meta"><b>${mod.id}</b> &middot; <code>${r.hex}</code> &middot; ${r.zones || mod.zones || 4} Zones ${(() => { const rev = this._remotes.find((c) => String(c.linked_hex_id || "").toUpperCase() === hx); return r.linked_hex_id ? `<span style="color:#16a34a;font-weight:700;">🔗 Live ${r.linked_hex_id}</span>` : (rev ? `<span style="color:#0284c7;font-weight:700;">🔗 Overlay ${rev.hex}</span>` : ""); })()}</div>
            <div class="telem-foot">${tel ? tel.text : "Idle — press remote or drag faceplate"}</div>
          </div>
        </div>`;
      }).join("");
      this._remotes.forEach((r) => {
        const hx = r.hex.toUpperCase();
        const z = this._activeZones[hx] ?? 1;
        const cardThumb = strip.querySelector(`.rem-card[data-hex-up="${hx}"] .rem-thumb`);
        this._renderAnalogIndicators(cardThumb, hx, z);
      });
      strip.querySelectorAll(".rem-card").forEach((c) => {
        c.onclick = () => {
          this._selHex = c.dataset.hex;
          const z = this._activeZones[this._selHex.toUpperCase()];
          if (z !== undefined) this._selZone = z;
          this._refreshStudioView();
        };
      });
    }

    const rem = this._remotes.find((r) => r.hex.toUpperCase() === this._selHex.toUpperCase()) || this._remotes[0];
    const fpBox = this.querySelector("#faceplateBox");
    if (fpBox && C && rem) {
      const hx = rem.hex.toUpperCase();
      const mod = this._resolveModel(rem);
      this.querySelector("#fpTitle").textContent = `${rem.name || mod.name} (${rem.hex})`;
      this.querySelector("#fpSub").textContent = `${mod.name} — ${mod.sub || ""}`;

      fpBox.innerHTML = C.renderModelSvg(mod, { activeZone: this._selZone, uid: "mainfp", facia: rem.facia, touchZones: rem.touch_zones });
      this._mountOverlays(fpBox, rem, this._selZone);

      // Bind mouse clicks on pre-rendered custom stencil segmented pads (.mbx-seg-hit: hue_seg_*, sat_seg_*, cct_seg_*, bri_seg_*)!
      fpBox.querySelectorAll(".mbx-seg-hit").forEach((segEl) => {
        const segAct = segEl.getAttribute("data-seg-act") || "";
        if (!segAct) return;
        segEl.style.cursor = "pointer";
        if (this._baseAct === segAct) segEl.classList.add("mbx-selected");
        segEl.onclick = (ev) => {
          ev.stopPropagation();
          this._baseAct = segAct;
          const mSeg = segAct.match(/_(\d+)$/);
          const segIdx = mSeg ? Number(mSeg[1]) : 1;
          const finalAct = this._computedAction();
          this._triggerVisualFeedback(this._selHex, finalAct, this._selZone, "ui", segIdx);
          this._mirrorVirtualAcrossPair(rem, finalAct, segIdx, this._selZone);
          this._throttledSend(this._selHex, this._selZone, finalAct, segIdx);
          this._updateYaml();
        };
      });

      const svgEl = fpBox.querySelector("svg");
      const tz = normTouchZones(rem.touch_zones);
      const zBit = this._selZone < 16 ? (1 << this._selZone) : 0x8000;

      if (svgEl && !(tz.hue_ring.enabled && ((tz.hue_ring.zone_mask ?? 0xFFFF) & zBit))) {
        this._bindHueWheelInteractive(svgEl);
      }

      fpBox.querySelectorAll(".mbx-hit").forEach((el) => {
        const act = el.getAttribute("data-act") || "";
        const zAttr = el.getAttribute("data-zone");
        if (act === "hue") return; // Handled cleanly by unified _bindHueWheelInteractive ring!

        if (ANALOG_ACTS.has(act) && svgEl) {
          const segBlocked =
            ((act === "kelvin" || act === "color_temp") && tz.cct_bar.enabled && ((tz.cct_bar.zone_mask ?? 0xFFFF) & zBit)) ||
            (act === "saturation" && tz.sat_bar.enabled && ((tz.sat_bar.zone_mask ?? 0xFFFF) & zBit)) ||
            (act === "brightness" && tz.bri_bar.enabled && ((tz.bri_bar.zone_mask ?? 0xFFFF) & zBit));
          if (!segBlocked) {
            this._bindBarInteractive(svgEl, el, act);
            return;
          }
        }

        if (act && act !== "zone" && !ANALOG_ACTS.has(act) && act === this._baseAct) {
          el.classList.add("mbx-selected");
        }
        el.onclick = (ev) => {
          ev.stopPropagation();
          let zoneChanged = false;
          if (zAttr !== null && zAttr !== "") {
            const nz = Number(zAttr);
            if (nz !== this._selZone) zoneChanged = true;
            this._selZone = nz;
            this._activeZones[hx] = nz;
          }
          if (act === "zone") {
            this._refreshStudioView();
            this._pulseHits(fpBox, "zone", this._selZone, "fire-ui");
            return;
          }
          if (act === "zone_on") this._baseAct = "on";
          else if (act === "zone_off") this._baseAct = "off";
          else if (act) this._baseAct = act;

          if (zoneChanged) this._refreshStudioView();
          const finalAct = this._computedAction();
          this._triggerVisualFeedback(this._selHex, finalAct, this._selZone, "ui");
          this._mirrorVirtualAcrossPair(rem, finalAct, undefined, this._selZone);
          this._throttledSend(this._selHex, this._selZone, finalAct);
          this._updateYaml();
        };
      });

      this._renderOverlayLabelsOnSvg(svgEl, hx);
      this._syncTargetPicker(svgEl, hx);
      this._renderAnalogIndicators(fpBox, hx, this._selZone);
      this._renderHaLinkBar();
      this._renderCalBanner();

      const pair = this._findLinkedPair(rem);
      const modeTabs = this.querySelector("#haPairModeTabs");
      const compWrap = this.querySelector("#companionWrap");
      const compBox = this.querySelector("#companionBox");
      const pTag = this.querySelector("#fpPrimaryTag");
      if (compWrap) compWrap.style.display = "none";
      if (compBox) { compBox.innerHTML = ""; compBox.dataset.hexUp = ""; }

      const isCustRem = String(mod.id || "").startsWith("CUST_") || Boolean(rem.facia && rem.facia.enabled);
      if ((isCustRem || pair) && modeTabs) {
        const custTarget = pair ? pair.custom : rem;
        const custMod = this._resolveModel(custTarget);
        const baseId = custMod.baseModel || custMod.base || (pair ? this._resolveModel(pair.physical).id : mod.id);
        const physMod = pair ? this._resolveModel(pair.physical) : (C.MODELS.find((m) => m.id === baseId && !m.isCustom) || mod);
        const peelPct = Math.max(0, Math.min(100, Number(this._peelPct || 0)));
        if (pTag) {
          pTag.innerHTML = pair
            ? `<span style="color:#16a34a">🟢 Paired Overlay <code>${pair.custom.hex}</code> ⇄ Bare <code>${pair.physical.hex}</code> (${physMod.id})</span>`
            : `<span>🎨 Custom Stencil Overlay over Bare ${physMod.id}</span>`;
        }
        modeTabs.innerHTML = `
          <div style="display:flex;align-items:center;justify-content:center;gap:8px;flex-wrap:wrap;padding:6px 10px;border-radius:9px;background:rgba(2,132,199,0.08);border:1px solid rgba(2,132,199,0.3);font-size:11.5px;">
            <button type="button" id="haPeelBtn" class="${peelPct >= 50 ? '' : 'sec'}" style="padding:4px 10px;font-size:11.5px;">
              ${peelPct >= 85 ? '🩹 Re-Apply Stencil' : (peelPct > 10 ? '🩹 Peel Fully (100%)' : '🩹 Peel Back Stencil')}
            </button>
            <input id="haPeelSlider" type="range" min="0" max="100" value="${peelPct}" style="width:110px;cursor:pointer;accent-color:#0284c7;" title="Peel back custom stencil to see original remote underneath" />
            <span id="haPeelReadout" style="font-weight:700;min-width:110px;">${peelPct === 0 ? 'Stencil On (0%)' : (peelPct >= 98 ? `Bare ${physMod.id}` : `Peeled ${Math.round(peelPct)}%`)}</span>
          </div>`;

        // Stack bare physical SVG underneath custom stencil SVG inside faceplateBox for real-world diagonal corner peel!
        if (String(rem.hex).toUpperCase() !== String(custTarget.hex).toUpperCase()) {
          // User clicked physical card: still show its linked custom stencil with peel-back capability!
          fpBox.innerHTML = C.renderModelSvg(custMod, { activeZone: this._selZone, uid: "mainfp", facia: custTarget.facia, touchZones: custTarget.touch_zones });
          this._mountOverlays(fpBox, custTarget, this._selZone);
        }
        const overSvgHtml = fpBox.innerHTML;
        const bareHtml = C.renderModelSvg(physMod, { activeZone: this._selZone, uid: "barefp", facia: null, touchZones: null });
        fpBox.innerHTML = `
          <div id="haPeelStack" style="position:relative;display:inline-grid;place-items:center;padding:4px;">
            <div id="haBareLayer" style="grid-area:1/1;display:flex;justify-content:center;align-items:center;">${bareHtml}</div>
            <div id="haStencilLayer" style="grid-area:1/1;position:relative;z-index:2;display:flex;justify-content:center;align-items:center;transition:clip-path .22s ease;filter:drop-shadow(-3px 5px 8px rgba(15,23,42,.26));">${overSvgHtml}</div>
            <div id="haPeelFlap" style="position:absolute;inset:4px;z-index:3;pointer-events:none;background:linear-gradient(225deg,rgba(241,245,249,.96),rgba(148,163,184,.88));filter:drop-shadow(-5px 6px 9px rgba(15,23,42,.32));transition:clip-path .22s ease,opacity .2s ease;"></div>
            <div id="haPeelCorner" title="Click corner to peel back stencil" style="position:absolute;top:2px;right:2px;width:38px;height:38px;z-index:4;cursor:pointer;border-radius:0 9px 0 24px;background:linear-gradient(225deg,rgba(148,163,184,.38) 0%,rgba(255,255,255,.9) 48%,rgba(15,23,42,.18) 52%,transparent 56%);"></div>
          </div>`;

        const bareBox = fpBox.querySelector("#haBareLayer");
        const overBox = fpBox.querySelector("#haStencilLayer");
        const flapEl  = fpBox.querySelector("#haPeelFlap");
        const physHex = pair ? String(pair.physical.hex).toUpperCase() : hx;
        this._renderAnalogIndicators(bareBox, physHex, this._selZone);
        this._renderAnalogIndicators(overBox, String(custTarget.hex).toUpperCase(), this._selZone);

        // Re-bind clicks on overBox & bareBox
        const bindLayerClicks = (layerBox, targetRem) => {
          if (!layerBox || !targetRem) return;
          const tHx = String(targetRem.hex || "").toUpperCase();
          layerBox.querySelectorAll(".mbx-seg-hit").forEach((segEl) => {
            const segAct = segEl.getAttribute("data-seg-act") || "";
            if (!segAct) return;
            segEl.style.cursor = "pointer";
            segEl.onclick = (ev) => {
              ev.stopPropagation();
              this._baseAct = segAct;
              const mSeg = segAct.match(/_(\d+)$/);
              const segIdx = mSeg ? Number(mSeg[1]) : 1;
              const finalAct = this._computedAction();
              this._triggerVisualFeedback(targetRem.hex, finalAct, this._selZone, "ui", segIdx);
              this._mirrorVirtualAcrossPair(targetRem, finalAct, segIdx, this._selZone);
              this._throttledSend(targetRem.hex, this._selZone, finalAct, segIdx);
              this._updateYaml();
            };
          });
          const sEl = layerBox.querySelector("svg");
          const lTz = normTouchZones(targetRem === custTarget ? custTarget.touch_zones : null);
          const lBit = this._selZone < 16 ? (1 << this._selZone) : 0x8000;
          if (sEl && !(lTz.hue_ring.enabled && ((lTz.hue_ring.zone_mask ?? 0xFFFF) & lBit))) {
            this._bindHueWheelInteractive(sEl);
          }
          layerBox.querySelectorAll(".mbx-hit").forEach((el) => {
            const act = el.getAttribute("data-act") || "";
            const zAttr = el.getAttribute("data-zone");
            if (act === "hue") return;
            if (ANALOG_ACTS.has(act) && sEl && targetRem !== custTarget) {
              this._bindBarInteractive(sEl, el, act);
              return;
            }
            el.onclick = (ev) => {
              ev.stopPropagation();
              if (zAttr !== null && zAttr !== "") {
                this._selZone = Number(zAttr);
                this._activeZones[tHx] = this._selZone;
                if (act === "zone") { this._refreshStudioView(); return; }
              }
              this._baseAct = act === "zone_on" ? "on" : (act === "zone_off" ? "off" : act);
              const finalAct = this._computedAction();
              this._triggerVisualFeedback(targetRem.hex, finalAct, this._selZone, "ui");
              this._mirrorVirtualAcrossPair(targetRem, finalAct, undefined, this._selZone);
              this._throttledSend(targetRem.hex, this._selZone, finalAct);
              this._updateYaml();
            };
          });
        };
        bindLayerClicks(overBox, custTarget);
        bindLayerClicks(bareBox, pair ? pair.physical : rem);

        const setHaPeel = (val, scrub) => {
          this._peelPct = Math.max(0, Math.min(100, Number(val) || 0));
          const p = this._peelPct;
          const d = (p / 100) * 200;
          let overClip = "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", flapClip = "polygon(100% 0%,100% 0%,100% 0%)", fOp = 0;
          if (p >= 99.5) {
            overClip = "polygon(0% 100%, 0% 100%, 0% 100%)";
          } else if (p > 0.5 && d <= 100) {
            const xc = 100 - d, yc = d;
            overClip = `polygon(0% 0%, ${xc.toFixed(1)}% 0%, 100% ${yc.toFixed(1)}%, 100% 100%, 0% 100%)`;
            flapClip = `polygon(${xc.toFixed(1)}% 0%, 100% ${yc.toFixed(1)}%, ${Math.max(0, xc - d*0.28).toFixed(1)}% ${Math.min(100, yc + d*0.28).toFixed(1)}%)`;
            fOp = 0.92;
          } else if (p > 0.5) {
            const r2 = 200 - d, xb = r2, yl = 100 - r2;
            overClip = `polygon(0% ${yl.toFixed(1)}%, ${xb.toFixed(1)}% 100%, 0% 100%)`;
            flapClip = `polygon(0% ${yl.toFixed(1)}%, ${xb.toFixed(1)}% 100%, ${(xb*0.55).toFixed(1)}% ${(yl+(100-yl)*0.45).toFixed(1)}%)`;
            fOp = Math.max(0.18, r2 / 110);
          }
          if (overBox) {
            overBox.style.transition = scrub ? "none" : "clip-path .22s ease";
            overBox.style.clipPath = overClip;
            overBox.style.pointerEvents = p >= 85 ? "none" : "auto";
          }
          if (flapEl) {
            flapEl.style.transition = scrub ? "none" : "clip-path .22s ease, opacity .2s ease";
            flapEl.style.clipPath = flapClip;
            flapEl.style.opacity = String(fOp);
          }
          const rd = modeTabs.querySelector("#haPeelReadout");
          if (rd) rd.textContent = p === 0 ? "Stencil On (0%)" : (p >= 98 ? `Bare ${physMod.id}` : `Peeled ${Math.round(p)}%`);
          const pb = modeTabs.querySelector("#haPeelBtn");
          if (pb) pb.textContent = p >= 85 ? "🩹 Re-Apply Stencil" : (p > 10 ? "🩹 Peel Fully (100%)" : "🩹 Peel Back Stencil");
          const sl = modeTabs.querySelector("#haPeelSlider");
          if (sl && Number(sl.value) !== Math.round(p)) sl.value = String(Math.round(p));
        };
        const stepPeel = () => {
          const curP = Number(this._peelPct || 0);
          setHaPeel(curP < 40 ? 52 : (curP < 92 ? 100 : 0), false);
        };
        const pb = modeTabs.querySelector("#haPeelBtn"); if (pb) pb.onclick = stepPeel;
        const pc = fpBox.querySelector("#haPeelCorner"); if (pc) pc.onclick = stepPeel;
        const sl = modeTabs.querySelector("#haPeelSlider");
        if (sl) {
          sl.oninput = (e) => setHaPeel(e.target.value, true);
          sl.onchange = (e) => setHaPeel(e.target.value, false);
        }
        setHaPeel(peelPct, true);
      } else {
        if (modeTabs) modeTabs.innerHTML = "";
        if (pTag) pTag.textContent = "";
      }
    }

    const badge = this.querySelector("#selSummary");
    if (badge) badge.textContent = `${this._selHex} · Zone ${this._selZone} · ${this._computedAction()}`;
    this._updateYaml();
  }


  _labelMapForHex(hx) {
    const k = String(hx || this._selHex).toUpperCase();
    if (!this._customLabels[k]) this._customLabels[k] = {};
    return this._customLabels[k];
  }

  _labelKey(act, zone) {
    if (act === "zone" && zone !== undefined && zone !== null && zone !== "") return `zone:${zone}`;
    return String(act || "");
  }


  _iconMapForHex(hx) {
    const k = String(hx || this._selHex).toUpperCase();
    if (!this._customIcons[k]) this._customIcons[k] = {};
    return this._customIcons[k];
  }

  _collectPanelTargets(svgEl) {
    const list = [];
    const seen = new Set();
    if (!svgEl) return list;
    svgEl.querySelectorAll(".mbx-hit").forEach((el) => {
      const act = el.getAttribute("data-act") || "";
      if (!act) return;
      const zAttr = el.getAttribute("data-zone");
      const key = this._labelKey(act, zAttr);
      if (seen.has(key)) return;
      seen.add(key);
      const labelTxt = (act === "zone" && zAttr !== null) ? (zAttr === "0" ? "All Zones" : `Zone ${zAttr}`) : act;
      list.push({ key, label: `${labelTxt} (${key})` });
    });
    svgEl.querySelectorAll(".mbx-seg-hit").forEach((el) => {
      const segAct = el.getAttribute("data-seg-act") || "";
      if (!segAct || seen.has(segAct)) return;
      seen.add(segAct);
      list.push({ key: segAct, label: `Segment ${segAct}` });
    });
    return list;
  }

  _syncTargetPicker(svgEl, hx) {
    const sel = this.querySelector("#posTargetSel");
    if (!sel) return;
    const targets = this._collectPanelTargets(svgEl);
    const curKey = this._labelKey(this._baseAct, this._selZone);
    sel.innerHTML = targets.length
      ? targets.map((t) => `<option value="${t.key}">${t.label}</option>`).join("")
      : `<option value="${curKey}">${curKey}</option>`;
    if (targets.some((t) => t.key === curKey)) {
      sel.value = curKey;
    }
    this._syncTargetInputs();
  }

  _syncTargetInputs() {
    const sel = this.querySelector("#posTargetSel");
    const lblInp = this.querySelector("#customLabelInp");
    const icoSel = this.querySelector("#customIconSel");
    const key = (sel && sel.value) || this._labelKey(this._baseAct, this._selZone);
    const lMap = this._labelMapForHex(this._selHex);
    const iMap = this._iconMapForHex(this._selHex);
    if (lblInp) lblInp.value = lMap[key] || "";
    if (icoSel) icoSel.value = iMap[key] || "";
  }

  _renderOverlayLabelsOnSvg(svgEl, hx) {
    if (!svgEl || !window.MiBoxerCatalog) return;
    let layer = svgEl.querySelector(".mbx-overlay-labels");
    if (!layer) {
      layer = document.createElementNS(MBX_SVG_NS, "g");
      layer.setAttribute("class", "mbx-overlay-labels");
      layer.style.pointerEvents = "none";
      svgEl.appendChild(layer);
    }
    layer.innerHTML = "";
    const labels = this._labelMapForHex(hx);
    const icons = this._iconMapForHex(hx);
    const isAcc = this._overlayTheme === "accessibility";
    const isHc = this._overlayTheme === "high_contrast" || isAcc;
    if (!isHc && Object.keys(labels).length === 0 && Object.keys(icons).length === 0) return;

    const placeBadge = (el, key, fallbackAct, fallbackZone) => {
      const customIcon = icons[key] || "";
      const customLbl = labels[key] || "";
      const autoLbl = (!customIcon && !customLbl && isAcc) ? window.MiBoxerCatalog.getAccessibilityLabel(fallbackAct, fallbackZone) : "";
      if (!customIcon && !customLbl && !autoLbl) return;

      const bb = (typeof el.getBBox === "function") ? el.getBBox() : null;
      if (!bb || bb.width <= 0 || bb.height <= 0) return;
      const cx = bb.x + bb.width / 2;
      const cy = bb.y + bb.height / 2;
      const displayStr = customIcon && customLbl ? `${customIcon} ${customLbl}` : (customIcon || customLbl || autoLbl);
      const fs = isAcc ? Math.min(8.5, Math.max(5.5, bb.height * 0.42)) : Math.min(6.8, Math.max(4.6, bb.height * 0.36));

      const pillW = Math.min(Math.max(bb.width + 2, displayStr.length * fs * 0.65 + 5), Math.max(bb.width + 14, 38));
      const pillH = fs + 3.6;
      const pill = document.createElementNS(MBX_SVG_NS, "rect");
      pill.setAttribute("x", (cx - pillW / 2).toFixed(1));
      pill.setAttribute("y", (cy - pillH / 2).toFixed(1));
      pill.setAttribute("width", pillW.toFixed(1));
      pill.setAttribute("height", pillH.toFixed(1));
      pill.setAttribute("rx", "2");
      pill.setAttribute("fill", (customIcon || customLbl) ? "#fef08a" : "#0f172a");
      pill.setAttribute("stroke", (customIcon || customLbl) ? "#ca8a04" : "#38bdf8");
      pill.setAttribute("stroke-width", "0.8");
      layer.appendChild(pill);

      const t = document.createElementNS(MBX_SVG_NS, "text");
      t.setAttribute("x", cx.toFixed(1));
      t.setAttribute("y", (cy + fs * 0.35).toFixed(1));
      t.setAttribute("text-anchor", "middle");
      t.setAttribute("font-size", fs.toFixed(1));
      t.setAttribute("font-weight", "800");
      t.setAttribute("fill", (customIcon || customLbl) ? "#111827" : "#ffffff");
      t.textContent = displayStr;
      layer.appendChild(t);
    };

    svgEl.querySelectorAll(".mbx-hit").forEach((el) => {
      const act = el.getAttribute("data-act") || "";
      if (!act || act === "hue" || act === "brightness" || act === "kelvin" || act === "color_temp" || act === "saturation") return;
      const zAttr = el.getAttribute("data-zone");
      placeBadge(el, this._labelKey(act, zAttr), act, zAttr);
    });

    svgEl.querySelectorAll(".mbx-seg-hit").forEach((el) => {
      const segAct = el.getAttribute("data-seg-act") || "";
      if (!segAct) return;
      placeBadge(el, segAct, segAct, null);
    });
  }


  _buildStencilSvg(rem, mod) {
    const hx = String((rem && rem.hex) || this._selHex || '0X125C').toUpperCase();
    const dims = window.MiBoxerCatalog.getPhysicalDims(mod);
    const svgEl = (this.querySelector('#faceplateBox') || {}).querySelector?.('svg') || null;
    const vb = svgEl ? (svgEl.getAttribute('viewBox') || '0 0 190 250') : '0 0 190 250';
    const labels = this._labelMapForHex(hx);
    const icons = this._iconMapForHex(hx);
    const isAcc = this._overlayTheme === 'accessibility';
    const [vx, vy, vw, vh] = vb.split(/[\s,]+/).map(Number);
    const x0 = vx || 0, y0 = vy || 0, w0 = vw || 190, h0 = vh || 250;
    const out = [`<rect x="${(x0+1.5).toFixed(1)}" y="${(y0+1.5).toFixed(1)}" width="${Math.max(10,w0-3).toFixed(1)}" height="${Math.max(10,h0-3).toFixed(1)}" rx="6" fill="#fff" stroke="#111827" stroke-width="1.4"/>`];
    if (svgEl) {
      const segs = Array.from(svgEl.querySelectorAll('.mbx-seg-hit'));
      const segActs = new Set(segs.map((el) => el.getAttribute('data-seg-act') || '').map((a) => a.startsWith('hue_seg_')?'hue':a.startsWith('bri_seg_')?'brightness':a.startsWith('cct_seg_')?'kelvin':a.startsWith('sat_seg_')?'saturation':'').filter(Boolean));
      svgEl.querySelectorAll('.mbx-hit').forEach((el) => {
        const act = el.getAttribute('data-act') || '';
        if (!act || segActs.has(act)) return;
        const zAttr = el.getAttribute('data-zone');
        const key = this._labelKey(act, zAttr);
        const bb = el.getBBox?.();
        if (!bb || bb.width <= 0 || bb.height <= 0) return;
        const cx = bb.x + bb.width / 2, cy = bb.y + bb.height / 2;
        out.push(act === 'hue' ? `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${(Math.max(bb.width,bb.height)/2).toFixed(1)}" fill="none" stroke="#111827" stroke-width="1.2" stroke-dasharray="3 2"/>` : `<rect x="${bb.x.toFixed(1)}" y="${bb.y.toFixed(1)}" width="${bb.width.toFixed(1)}" height="${bb.height.toFixed(1)}" rx="2.5" fill="none" stroke="#111827" stroke-width="1.1"/>`);
        const txt = (icons[key]||'') + (icons[key]&&labels[key]?' ':'') + (labels[key]||(isAcc?window.MiBoxerCatalog.getAccessibilityLabel(act,zAttr):''));
        if (txt) out.push(`<text x="${cx.toFixed(1)}" y="${(cy+2).toFixed(1)}" text-anchor="middle" font-size="5.5" font-weight="800" fill="#111827">${txt}</text>`);
      });
      segs.forEach((el) => {
        const sa = el.getAttribute('data-seg-act') || '';
        const bb = el.getBBox?.();
        if (!bb || bb.width <= 0 || bb.height <= 0) return;
        const d = el.getAttribute('d');
        out.push((el.tagName.toLowerCase()==='path'&&d) ? `<path d="${d}" fill="#f8fafc" stroke="#0f172a" stroke-width="1.4"/>` : `<rect x="${bb.x.toFixed(1)}" y="${bb.y.toFixed(1)}" width="${bb.width.toFixed(1)}" height="${bb.height.toFixed(1)}" rx="2" fill="#f8fafc" stroke="#0f172a" stroke-width="1.3"/>`);
        const txt = (icons[sa]||'') + (icons[sa]&&labels[sa]?' ':'') + (labels[sa]||sa.replace(/^(hue|bri|cct|sat)_seg_/, '#'));
        out.push(`<text x="${(bb.x+bb.width/2).toFixed(1)}" y="${(bb.y+bb.height/2+2).toFixed(1)}" text-anchor="middle" font-size="5.5" font-weight="800" fill="#0f172a">${txt}</text>`);
      });
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${dims.width_mm}mm" height="${dims.height_mm}mm" viewBox="${vb}" data-stencil="true" data-model="${mod.id}" data-hex="${hx}">${out.join('')}</svg>`;
  }
  _buildOneToOneSvg(rem, mod) {
    const dims = window.MiBoxerCatalog.getPhysicalDims(mod);
    const fpBox = this.querySelector("#faceplateBox");
    const svgEl = fpBox ? fpBox.querySelector("svg") : null;
    const vb = svgEl ? (svgEl.getAttribute("viewBox") || "0 0 190 250") : "0 0 190 250";
    const inner = svgEl ? svgEl.innerHTML : "";
    return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${dims.width_mm}mm" height="${dims.height_mm}mm" viewBox="${vb}" data-model="${mod.id}" data-hex="${rem.hex}" data-material="${this._podMaterial}" data-theme="${this._overlayTheme}">
  ${inner}
</svg>`;
  }

  _buildPodOrderPayload(rem, mod) {
    const hx = rem.hex.toUpperCase();
    const dims = window.MiBoxerCatalog.getPhysicalDims(mod);
    return {
      schema: "milight_remote_studio.pod_order.v1",
      remote_hex: hx,
      remote_name: rem.name || mod.name,
      model_id: mod.id,
      layout: mod.layout,
      physical_dimensions_mm: dims,
      scale: "1:1",
      material: this._podMaterial,
      overlay_theme: this._overlayTheme,
      custom_labels: this._labelMapForHex(hx),
      custom_icons: this._iconMapForHex(hx),
      calibration: this._calibrations[hx] || null,
      svg_1to1: this._buildOneToOneSvg(rem, mod)
    };
  }

  async _downloadFile(filename, content, mime) {
    if (window.MiLightRemoteStudio && window.MiLightRemoteStudio.downloadTextFile) {
      await window.MiLightRemoteStudio.downloadTextFile(filename, content, mime);
      return;
    }
    const b64 = btoa(unescape(encodeURIComponent(String(content || ""))));
    const a = document.createElement("a");
    a.href = `data:application/octet-stream;base64,${b64}`;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => a.remove(), 4000);
  }

  _updateYaml() {
    const hex = (this._selHex || "0x125C").toLowerCase();
    const zone = this._selZone;
    const action = this._computedAction();
    const curRem = (this._remotes || []).find((r) => String(r.hex || "").toUpperCase() === String(this._selHex || "").toUpperCase()) || (this._remotes || [])[0];
    const kcBox = this.querySelector("#visKeycapBox");
    const vcTitle = this.querySelector("#visCtrlTitle");
    const vcHint = this.querySelector("#visCtrlHint");
    if (kcBox && vcTitle && window.MiBoxerCatalog) {
      const pads = (curRem && curRem.facia && curRem.facia.pads) || {};
      const padCfg = pads[this._baseAct] || pads[`btn_${this._baseAct}`] || pads[`zone_${zone}`] || {};
      const icoObj = padCfg.icon && window.MiBoxerCatalog.FACIA_ICONS ? window.MiBoxerCatalog.FACIA_ICONS[padCfg.icon] : null;
      const customLbl = (this._labelMapForHex(this._selHex)[this._baseAct]) || padCfg.label || this._baseAct.toUpperCase();
      kcBox.innerHTML = (icoObj && icoObj.svg)
        ? `<svg viewBox="0 0 24 24" width="24" height="24">${icoObj.svg}</svg><span style="font-size:9.5px;font-weight:800;margin-top:2px;max-width:52px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${customLbl}</span>`
        : `<span style="font-size:12px;font-weight:800;">${customLbl.slice(0, 6)}</span><span style="font-size:9.5px;opacity:0.75;">Z${zone}</span>`;
      vcTitle.textContent = `${curRem ? (curRem.name || curRem.hex) : hex.toUpperCase()} · Zone ${zone === 0 ? 'All' : zone} · ${customLbl} (${action})`;
      if (vcHint) {
        const mf = padCfg.multifunc && padCfg.multifunc.enabled ? ` · Multi-Function Step 1→${padCfg.multifunc.steps} + Hold OFF active` : '';
        vcHint.textContent = `Trigger event: event.milight_${hex}_zone_${zone} == "${action}"${mf}`;
      }
    }
    const entity = this.querySelector("#mapEntity")?.value || "light.example";
    const svc = this.querySelector("#mapService")?.value || "homeassistant.toggle";
    const alias = this.querySelector("#autoAlias")?.value.trim() || `Mi-Light ${hex.toUpperCase()} Z${zone} ${action} -> ${entity}`;
    const pre = this.querySelector("#yamlPreview");
    const specEl = this.querySelector("#podSpecsLine");
    if (specEl && window.MiBoxerCatalog) {
      const rem = this._remotes.find((r) => r.hex.toUpperCase() === (this._selHex || "").toUpperCase()) || this._remotes[0];
      const mod = this._resolveModel(rem);
      const d = window.MiBoxerCatalog.getPhysicalDims(mod);
      specEl.textContent = `Physical Size: ${d.width_mm} × ${d.height_mm} mm (${d.form_factor}) · Material: ${this._podMaterial} · Theme: ${this._overlayTheme}`;
    }
    if (pre) pre.textContent = [
      `alias: "${alias}"`,
      `triggers:`,
      `  - trigger: state`,
      `    entity_id: event.milight_${hex}_zone_${zone}`,
      `conditions:`,
      `  - condition: template`,
      `    value_template: "{{ trigger.to_state.state == '${action}' }}"`,
      `actions:`,
      `  - action: ${svc}`,
      `    target:`,
      `      entity_id: ${entity}`,
      `mode: queued`
    ].join("\n");
  }

  async _loadRemotes() {
    const statusEl = this.querySelector("#status");
    try {
      if (!this._hass) return;
      try {
        this._calibrations = (await this._hass.callApi("GET", "milight_remote_studio/calibration")) || {};
      } catch (_) {}
      const data = await this._hass.callApi("GET", "milight_remote_studio/remotes");
      this._remotes = Array.isArray(data) ? data : (data.remotes || []);
      if (this._remotes.length && !this._remotes.some((r) => r.hex.toUpperCase() === this._selHex.toUpperCase())) {
        this._selHex = this._remotes[0].hex;
      }
      await this._mergeHubMetaIntoRemotes();
      statusEl.textContent = `Synced ${this._remotes.length} remote(s) via ${data.source || "HA"} — drag faceplate or click 🎯 Calibrate Physical Finger Position!`;
      this._refreshStudioView();
    } catch (e) {
      statusEl.textContent = `Sync error: ${e.message}`;
    }
  }
}
customElements.define("milight-remote-studio-panel", MilightRemoteStudioPanel);
