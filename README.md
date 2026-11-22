# Mi-Light Visual Remote & Panel Studio for Home Assistant

Interactive 1:1 visual remote configurator, capacitive wall-panel stencil studio, and MQTT/RF automation mapper for **esp8266_milight_hub** (ESP32 Dual-Radio & Remotes Studio).

## Key Features
- **61+ MiBoxer / Mi-Light 1:1 Vector Faceplates** synchronized directly from the ESP32 Hub single source of truth (`miboxer_catalog.js` & `remote_studio.js`).
- **Two-Way Live Hardware Panel Linking:** Link virtual custom stencils (e.g. `CUST_B8_3D_ESTATE`) to live detected physical wall panels (e.g. `B8 0x4542`) so physical 2.4 GHz RF touches animate segmented wheel slices and slider macro buttons in real time.
- **Capacitive Panel Facia & 1:1 Printable Stencil Studio:** Segment color wheels and sliders into labeled room/device pads with automatic box-aware icon/text autofit and calibrated 1:1 millimeter print export (`SVG` / print sheet / POD JSON).
- **One-Click Home Assistant Automation Builder:** Bind single-tap, double-tap, triple-tap, long-hold, and segmented wheel/bar actions directly to Home Assistant entities.
- **Live Finger-Position Reticles & Calibration Wizard:** Color-coded physical RF (emerald) vs. virtual UI (amber) pucks across wheels, saturation/CCT bars, and dimmers.

## Installation (HACS Custom Repository)
1. Open **HACS → Integrations → ⋮ (Top Right) → Custom repositories**.
2. Add `https://github.com/pauleec/ha-milight-remote-studio` with category **Integration**.
3. Install **Mi-Light Visual Remote & Panel Studio** and restart Home Assistant.
