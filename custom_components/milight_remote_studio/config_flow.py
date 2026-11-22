from __future__ import annotations

import voluptuous as vol
from homeassistant import config_entries

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


class MilightRemoteStudioConfigFlow(config_entries.ConfigFlow, domain=DOMAIN):
    VERSION = 1

    async def async_step_user(self, user_input=None):
        if user_input is not None:
            await self.async_set_unique_id(f"{DOMAIN}_{user_input[CONF_HUB_DEVICE_ID]}")
            self._abort_if_unique_id_configured()
            return self.async_create_entry(
                title=f"Mi-Light Remote Studio ({user_input[CONF_HUB_DEVICE_ID]})",
                data=user_input,
            )

        schema = vol.Schema(
            {
                vol.Required(CONF_HUB_URL, default=DEFAULT_HUB_URL): str,
                vol.Required(CONF_TWIN_URL, default=DEFAULT_TWIN_URL): str,
                vol.Required(CONF_MQTT_HOST, default=DEFAULT_MQTT_HOST): str,
                vol.Required(CONF_MQTT_PORT, default=DEFAULT_MQTT_PORT): int,
                vol.Required(CONF_TOPIC_PREFIX, default=DEFAULT_TOPIC_PREFIX): str,
                vol.Required(CONF_HUB_DEVICE_ID, default=DEFAULT_HUB_DEVICE_ID): str,
            }
        )
        return self.async_show_form(step_id="user", data_schema=schema)
