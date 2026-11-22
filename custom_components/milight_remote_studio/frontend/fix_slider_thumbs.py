from pathlib import Path
import re

p = Path("panel_core.js")
txt = p.read_text(encoding="utf-8")

old_block_match = re.search(
    r"    // 2\. Slider Thumbs.*?    \}\);\n  \}",
    txt,
    flags=re.DOTALL,
)
assert old_block_match, "Could not locate Slider Thumbs block in _renderAnalogIndicators"

new_block = '''    // 2. Slider Thumbs (with dualCctSatPillH fallback so saturation on FUT089 renders on the shared CCT/Sat bar!)
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
/opt/homebridge/bin/node --check panel.js && echo "Bundled panel.js syntax OK!"el_core.js > panel.jsd * 2));
Updated slider thumb selector & fallback in panel_core.js!
Bundled panel.js syntax OK!
orangepi@orangepizero3:~/ha-dev/config/custom_components/milight_remote_studio/frontend$ cd /home/orangepi/ha-dev/config/custom_components/milight_remote_studio/frontend
/opt/homebridge/bin/node --check panel.js && grep -n -E "_canonAct|_barBBox|_findArcPath|_rfSliderToPct|_rfHueToVisualDeg" panel_core.js
76:  _rfHueToVisualDeg(hex, rawHue) {
98:  _rfSliderToPct(hex, act, rawVal) {
313:  _findArcPath(barEl) {
323:  _barBBox(barEl) {
421:  const arcPath = this._findArcPath(barEl);
431:    const bb = this._barBBox(barEl);
492:  _canonAct(act) {
505:    const cleanAct = this._canonAct(act);
531:        : (rawVal !== undefined && rawVal !== null ? this._rfHueToVisualDeg(hx, rawVal) : null);
539:        : this._rfSliderToPct(hx, act, rawVal);
641:      const bb = this._barBBox(el);
orangepi@orangepizero3:~/ha-dev/config/custom_components/milight_remote_studio/frontend$ docker exec ha-dev cat /config/.milight_remote_calibration.json
{
  "0X125C": {
    "hueTopRaw": 213,
    "hueDir": -1,
    "sliders": {}
  },
  "0X4542": {
    "hueTopRaw": 244,
    "hueDir": -1
  },
  "0X6AA6": {
    "hueTopRaw": 215,
    "hueDir": -1,
    "sliders": {
      "kelvin": {
        "min": 370,
        "max": 153
      }
    }
  }
orangepi@orangepizero3:~/ha-dev/config/custom_components/milight_remote_studio/frontend$ cd /home/orangepi/ha-dev/config/custom_components/milight_remote_studio/frontendd
python3 - <<'PYEOF'
from pathlib import Path
txt = Path("miboxer_catalog.js").read_text(encoding="utf-8")
print("Length:", len(txt))
print("First 25 lines:\n" + "\n".join(txt.splitlines()[:25]))
print("\nLast 25 lines:\n" + "\n".join(txt.splitlines()[-25:]))
