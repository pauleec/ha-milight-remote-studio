from pathlib import Path

p = Path("panel_core.js")
txt = p.read_text(encoding="utf-8")

old_w12 = '''    if (w.step === 1 && act === "hue") {
  w.liveVal = Math.round(normDeg(v));
  w.hueTopRaw = normDeg(v);
  commitAfterSettle(() => {
    w.step = 2;
    w.liveVal = null;
    w.stepEnteredAt = Date.now();
    this._renderCalBanner();
  });
  return true;
}
if (w.step === 2 && act === "hue") {
  w.liveVal = Math.round(normDeg(v));
  w._candRight = normDeg(v);
  commitAfterSettle(() => {
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
  });
  return true;
}'''

new_w12 = '''    if (w.step === 1 && act === "hue") {
  w.liveVal = Math.round(normDeg(v));
  w.hueTopRaw = normDeg(v);
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
}'''

assert old_w12 in txt, "old_w12 block not found"
txt = txt.replace(old_w12, new_w12, 1)

old_btns = '''        <div style="margin-top:7px;display:flex;justify-content:center;gap:8px;flex-wrap:wrap;">
      ${w.step === 3 && w.sliderMinRaw !== undefined && w.sliderMinRaw !== null ? `<button id="lockMinBtn" type="button" style="padding:4px 11px;font-size:11px;">Lock Left End (${w.sliderMinRaw}) &rarr;</button>` : ""}
      ${w.step === 4 && w.sliderMaxRaw !== undefined && w.sliderMaxRaw !== null ? `<button id="lockMaxBtn" type="button" style="padding:4px 11px;font-size:11px;">Save Right End (${w.sliderMaxRaw}) ✓</button>` : ""}
      ${w.step >= 3 ? `<button id="doneCalBtn" class="sec" type="button" style="padding:4px 10px;font-size:11px;">Finish</button>` : ""}
      <button id="cancelCalBtn" class="sec" type="button" style="padding:4px 10px;font-size:11px;">Cancel</button>
    </div>'''

new_btns = '''        <div style="margin-top:7px;display:flex;justify-content:center;gap:8px;flex-wrap:wrap;">
      ${w.step === 1 && w.hueTopRaw !== undefined ? `<button id="lockTopBtn" type="button" style="padding:4px 11px;font-size:11px;">Lock 12h (${Math.round(w.hueTopRaw)}) &rarr;</button>` : ""}
      ${w.step === 2 && w._candRight !== undefined ? `<button id="lockRightBtn" type="button" style="padding:4px 11px;font-size:11px;">Lock 3h (${Math.round(w._candRight)}) &rarr;</button>` : ""}
      ${w.step === 3 && w.sliderMinRaw !== undefined && w.sliderMinRaw !== null ? `<button id="lockMinBtn" type="button" style="padding:4px 11px;font-size:11px;">Lock Left End (${w.sliderMinRaw}) &rarr;</button>` : ""}
      ${w.step === 4 && w.sliderMaxRaw !== undefined && w.sliderMaxRaw !== null ? `<button id="lockMaxBtn" type="button" style="padding:4px 11px;font-size:11px;">Save Right End (${w.sliderMaxRaw}) ✓</button>` : ""}
      ${w.step >= 3 ? `<button id="doneCalBtn" class="sec" type="button" style="padding:4px 10px;font-size:11px;">Finish</button>` : ""}
      <button id="cancelCalBtn" class="sec" type="button" style="padding:4px 10px;font-size:11px;">Cancel</button>
    </div>'''

assert old_btns in txt, "old_btns block not found"
txt = txt.replace(old_btns, new_btns, 1)

old_wire = '''    const lMin = box.querySelector("#lockMinBtn");'''
new_wire = '''    const lTop = box.querySelector("#lockTopBtn");
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
const lMin = box.querySelector("#lockMinBtn");'''

assert old_wire in txt, "old_wire block not found"
txt = txt.replace(old_wire, new_wire, 1)

p.write_text(txt, encoding="utf-8")
print("Patched wheel Steps 1 & 2 with instant lock buttons!")
