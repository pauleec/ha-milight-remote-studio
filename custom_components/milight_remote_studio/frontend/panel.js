// Hardware-Accurate MiBoxer / Mi-Light SVG Catalog (Shared by ESP32 Hub /remotes-ui & Homebridge v2.0)
(function(root){
  const MODELS = [
    // ================= 1. PANEL REMOTES (White & Black Editions) =================
    {id:'B8',    base:'B8',    finish:'white', cat:'panel', proto:'fut089',  zones:8, name:'B8 Smart Panel (White)',   sub:'8-Zone RGB+CCT Glass Panel', layout:'b8'},
    {id:'B8-B',  base:'B8',    finish:'black', cat:'panel', proto:'fut089',  zones:8, name:'B8-B Smart Panel (Black)', sub:'8-Zone RGB+CCT Glass Panel', layout:'b8'},
    {id:'B4',    base:'B4',    finish:'white', cat:'panel', proto:'rgb_cct', zones:4, name:'B4 / T4 Panel (White)',    sub:'4-Zone RGB+CCT Strip Panel', layout:'b_strip', kind:'b4'},
    {id:'B4-B',  base:'B4',    finish:'black', cat:'panel', proto:'rgb_cct', zones:4, name:'B4-B / T4 Panel (Black)',  sub:'4-Zone RGB+CCT Strip Panel', layout:'b_strip', kind:'b4'},
    {id:'B3',    base:'B3',    finish:'white', cat:'panel', proto:'rgbw',    zones:4, name:'B3 / T3 Panel (White)',    sub:'4-Zone RGBW Strip Panel',    layout:'b_strip', kind:'b3'},
    {id:'B3-B',  base:'B3',    finish:'black', cat:'panel', proto:'rgbw',    zones:4, name:'B3-B / T3 Panel (Black)',  sub:'4-Zone RGBW Strip Panel',    layout:'b_strip', kind:'b3'},
    {id:'B2',    base:'B2',    finish:'white', cat:'panel', proto:'fut091',  zones:4, name:'B2 / T2 Panel (White)',    sub:'4-Zone CCT Strip Panel',     layout:'b_strip', kind:'b2'},
    {id:'B2-B',  base:'B2',    finish:'black', cat:'panel', proto:'fut091',  zones:4, name:'B2-B / T2 Panel (Black)',  sub:'4-Zone CCT Strip Panel',     layout:'b_strip', kind:'b2'},
    {id:'B1',    base:'B1',    finish:'white', cat:'panel', proto:'cct',     zones:4, name:'B1 / T1 Panel (White)',    sub:'4-Zone Brightness Panel',    layout:'b_strip', kind:'b1'},
    {id:'B1-B',  base:'B1',    finish:'black', cat:'panel', proto:'cct',     zones:4, name:'B1-B / T1 Panel (Black)',  sub:'4-Zone Brightness Panel',    layout:'b_strip', kind:'b1'},
    {id:'B0',    base:'B0',    finish:'white', cat:'panel', proto:'rgb_cct', zones:1, name:'B0 Panel (White)',         sub:'1-Zone RGB+CCT Wheel Panel', layout:'b0'},
    {id:'B0-B',  base:'B0',    finish:'black', cat:'panel', proto:'rgb_cct', zones:1, name:'B0-B Panel (Black)',       sub:'1-Zone RGB+CCT Wheel Panel', layout:'b0'},
    {id:'B5',    base:'B5',    finish:'white', cat:'panel', proto:'cct',     zones:4, name:'B5 4-Bar Panel',           sub:'4-Zone Brightness + S1..S4', layout:'b5'},
    {id:'U3',    base:'U3',    finish:'white', cat:'panel', proto:'rgb_cct', zones:3, name:'U3 US Panel (RGB+CCT)',    sub:'3-Zone US Portrait Glass',   layout:'u_panel', kind:'u3'},
    {id:'U2',    base:'U2',    finish:'white', cat:'panel', proto:'fut091',  zones:3, name:'U2 US Panel (CCT)',        sub:'3-Zone US Portrait Glass',   layout:'u_panel', kind:'u2'},
    {id:'U1',    base:'U1',    finish:'white', cat:'panel', proto:'cct',     zones:3, name:'U1 US Panel (Dimmer)',     sub:'3-Zone US Portrait Glass',   layout:'u_panel', kind:'u1'},
    {id:'M4',    base:'M4',    finish:'white', cat:'panel', proto:'rgb_cct', zones:4, name:'M4 Italian Panel',         sub:'4-Zone Landscape 7-Column',  layout:'m4'},
    {id:'K4',    base:'K4',    finish:'white', cat:'panel', proto:'cct',     zones:4, name:'K4 4-Gang Dimmer',         sub:'4-Quadrant Tactile Panel',   layout:'k4'},
    {id:'ESR2T', base:'ESR2T', finish:'white', cat:'panel', proto:'cct',     zones:2, name:'ESR2T 2-Gang Switch',      sub:'2-Gang Blue-Ring Panel',     layout:'esr2t'},
    {id:'PUSH3', base:'PUSH3', finish:'white', cat:'panel', proto:'fut020',  zones:1, name:'PUSH3 Rocker Panel',       sub:'1-Gang Push Dimmer Switch',  layout:'push3'},

    // ================= 2. 2.4G RGB+CCT REMOTES =================
    {id:'FUT100',   base:'FUT100',   finish:'white', cat:'rgbcct', proto:'fut100',  zones:100, name:'FUT100 100-Zone LCD',   sub:'LCD + 3 Sliders + Dual-Bank', layout:'fut100'},
    {id:'FUT089',   base:'FUT089',   finish:'white', cat:'rgbcct', proto:'fut089',  zones:8,   name:'FUT089 (White)',        sub:'8-Zone RGB+CCT Handheld',     layout:'fut089', sixZone:false},
    {id:'FUT089-B', base:'FUT089',   finish:'black', cat:'rgbcct', proto:'fut089',  zones:8,   name:'FUT089-B (Black)',      sub:'8-Zone RGB+CCT Handheld',     layout:'fut089', sixZone:false},
    {id:'FUT089S',  base:'FUT089S',  finish:'white', cat:'rgbcct', proto:'fut089',  zones:6,   name:'FUT089S 6-Zone+Scenes', sub:'6-Zone + S1..S4 Handheld',    layout:'fut089', sixZone:true},
    {id:'FUT092',   base:'FUT092',   finish:'white', cat:'rgbcct', proto:'rgb_cct', zones:4,   name:'FUT092 (White/Lime)',   sub:'4-Zone RGB+CCT Pebble',       layout:'fut092'},
    {id:'FUT092-B', base:'FUT092',   finish:'black', cat:'rgbcct', proto:'rgb_cct', zones:4,   name:'FUT092-B (Black)',      sub:'4-Zone RGB+CCT Pebble',       layout:'fut092'},
    {id:'FUT088',   base:'FUT088',   finish:'white', cat:'rgbcct', proto:'rgb_cct', zones:1,   name:'FUT088 Full-Touch',     sub:'1-Zone RGB+CCT 3x3 Yellow',   layout:'fut088'},
    {id:'FUT096',   base:'FUT096',   finish:'white', cat:'rgbcct', proto:'rgbw',    zones:4,   name:'FUT096 (White/Yellow)', sub:'4-Zone Touch RGBW Pebble',    layout:'fut_pebble', kind:'fut096'},
    {id:'FUT096-B', base:'FUT096',   finish:'black', cat:'rgbcct', proto:'rgbw',    zones:4,   name:'FUT096-B (Black)',      sub:'4-Zone Touch RGBW Pebble',    layout:'fut_pebble', kind:'fut096'},
    {id:'FUT095',   base:'FUT095',   finish:'white', cat:'rgbcct', proto:'rgbw',    zones:4,   name:'FUT095 Button RGBW',    sub:'4-Zone Black-Key RGBW',       layout:'fut_pebble', kind:'fut095'},
    {id:'C8',       base:'C8',       finish:'black', cat:'rgbcct', proto:'fut089',  zones:8,   name:'C8 8-Zone Matte Black', sub:'8-Zone RGB+CCT Modern',       layout:'c_wheel', zones:8},
    {id:'C5',       base:'C5',       finish:'black', cat:'rgbcct', proto:'rgb_cct', zones:4,   name:'C5 4-Zone Matte Black', sub:'4-Zone RGB+CCT Modern',       layout:'c_wheel', zones:4},
    {id:'C4',       base:'C4',       finish:'black', cat:'rgbcct', proto:'rgb_cct', zones:1,   name:'C4 Slot RGB+CCT',       sub:'1-Zone Vertical Touch Bar',   layout:'c_slot',  kind:'rgb'},
    {id:'K6',       base:'K6',       finish:'black', cat:'rgbcct', proto:'rgb_cct', zones:1,   name:'K6 RGB+CCT LED Knob',   sub:'0-330° Rainbow Rotary Display',layout:'k_display', kind:'k6'},
    {id:'Y3',       base:'Y3',       finish:'black', cat:'rgbcct', proto:'rgb_cct', zones:3,   name:'Y3 Desk RGB+CCT',       sub:'3-Zone Vertical Stand Remote',layout:'y_desk',  kind:'y3'},
    {id:'S2-W',     base:'S2',       finish:'white', cat:'rgbcct', proto:'rgb_cct', zones:1,   name:'S2-W Rainbow Puck',     sub:'1-Zone RGB+CCT Touch Puck',   layout:'s_puck',  kind:'s2', multi:false},
    {id:'S2-B',     base:'S2',       finish:'black', cat:'rgbcct', proto:'rgb_cct', zones:1,   name:'S2-B Rainbow (Black)',  sub:'1-Zone RGB+CCT Touch Puck',   layout:'s_puck',  kind:'s2', multi:false},
    {id:'S2W+',     base:'S2W+',     finish:'white', cat:'rgbcct', proto:'rgb_cct', zones:4,   name:'S2W+ 4-Zone Puck',      sub:'4-Zone RGB+CCT Rainbow Puck', layout:'s_puck',  kind:'s2', multi:true},

    // ================= 3. CCT & BRIGHTNESS REMOTES =================
    {id:'FUT094',   base:'FUT094',   finish:'white', cat:'cct', proto:'fut091', zones:4, name:'FUT094 4-Zone CCT',       sub:'CCT Arc + S1..S3 Pebble',     layout:'fut_pebble', kind:'fut094'},
    {id:'FUT007',   base:'FUT007',   finish:'white', cat:'cct', proto:'cct',    zones:4, name:'FUT007 4-Dot CCT',        sub:'4-Zone Classic Cross-Ring',   layout:'fut_classic', kind:'fut007'},
    {id:'FUT006',   base:'FUT006',   finish:'white', cat:'cct', proto:'cct',    zones:4, name:'FUT006 Wheel CCT',        sub:'4-Zone Ridged Wheel Remote',  layout:'fut_classic', kind:'fut006'},
    {id:'FUT087',   base:'FUT087',   finish:'white', cat:'cct', proto:'fut020', zones:1, name:'FUT087 Dimmer (White)',   sub:'Touch Dimming Puck',          layout:'fut087'},
    {id:'FUT087-B', base:'FUT087',   finish:'black', cat:'cct', proto:'fut020', zones:1, name:'FUT087-B Dimmer (Black)', sub:'Touch Dimming Puck',          layout:'fut087'},
    {id:'S1-W',     base:'S1',       finish:'white', cat:'cct', proto:'fut091', zones:1, name:'S1-W Sunrise (White)',    sub:'1-Zone CCT Touch Puck',       layout:'s_puck', kind:'s1', multi:false},
    {id:'S1-B',     base:'S1',       finish:'black', cat:'cct', proto:'fut091', zones:1, name:'S1-B Sunrise (Black)',    sub:'1-Zone CCT Touch Puck',       layout:'s_puck', kind:'s1', multi:false},
    {id:'S1W+',     base:'S1W+',     finish:'white', cat:'cct', proto:'fut091', zones:4, name:'S1W+ 4-Zone Sunrise',     sub:'4-Zone CCT Touch Puck',       layout:'s_puck', kind:'s1', multi:true},
    {id:'C1',       base:'C1',       finish:'black', cat:'cct', proto:'fut091', zones:4, name:'C1 4-Zone Diamond CCT',   sub:'5-Diamond Pad + 4 Bars',      layout:'c1'},
    {id:'C12',      base:'C12',      finish:'black', cat:'cct', proto:'fut091', zones:4, name:'C12 Scroll-Wheel LED',    sub:'100% Display + Thumb Wheel',  layout:'c12'},
    {id:'C3',       base:'C3',       finish:'black', cat:'cct', proto:'fut091', zones:1, name:'C3 Slot CCT Remote',      sub:'1-Zone Vertical CCT Slot',    layout:'c_slot', kind:'cct'},
    {id:'C3P',      base:'C3P',      finish:'black', cat:'cct', proto:'fut020', zones:1, name:'C3P Slot Dimmer',         sub:'1-Zone 12-Dot Dimmer Slot',   layout:'c_slot', kind:'dim'},
    {id:'K5',       base:'K5',       finish:'black', cat:'cct', proto:'fut091', zones:1, name:'K5 CCT LED Knob',         sub:'100% Display + S1..S4 Knob',  layout:'k_display', kind:'k5'},
    {id:'K0S',      base:'K0S',      finish:'black', cat:'cct', proto:'fut091', zones:4, name:'K0S 4-Zone Knob Panel',   sub:'4-Corner Zone + Center Knob', layout:'k0', zonesMode:true},
    {id:'K0',       base:'K0',       finish:'black', cat:'cct', proto:'fut091', zones:1, name:'K0 4-Scene Knob Panel',   sub:'4-Corner Scene + Center Knob',layout:'k0', zonesMode:false},
    {id:'K3',       base:'K3',       finish:'black', cat:'cct', proto:'fut020', zones:1, name:'K3 / K3P Wheel Panel',    sub:'Square Ridged Wheel Dimmer',  layout:'k3', square:true},
    {id:'K3S',      base:'K3S',      finish:'black', cat:'cct', proto:'fut020', zones:1, name:'K3S Round Wheel Puck',    sub:'Round Ridged Wheel Dimmer',   layout:'k3', square:false},
    {id:'K2',       base:'K2',       finish:'white', cat:'cct', proto:'fut091', zones:1, name:'K2 Wall Mini (White)',    sub:'Magnetic Wall 5-Way CCT',     layout:'k2', plate:true},
    {id:'K2-B',     base:'K2',       finish:'black', cat:'cct', proto:'fut091', zones:1, name:'K2-B Wall Mini (Black)',  sub:'Magnetic Wall 5-Way CCT',     layout:'k2', plate:true},
    {id:'K2S',      base:'K2S',      finish:'white', cat:'cct', proto:'fut091', zones:1, name:'K2S Mini Puck (White)',   sub:'Round 5-Way CCT Mini Puck',   layout:'k2', plate:false},
    {id:'K2S-B',    base:'K2S',      finish:'black', cat:'cct', proto:'fut091', zones:1, name:'K2S-B Mini Puck (Black)', sub:'Round 5-Way CCT Mini Puck',   layout:'k2', plate:false},
    {id:'K1',       base:'K1',       finish:'white', cat:'cct', proto:'fut091', zones:1, name:'K1 Minimalist Knob',      sub:'Square Push-Rotary Panel',    layout:'k1'},
    {id:'Y2',       base:'Y2',       finish:'black', cat:'cct', proto:'fut091', zones:3, name:'Y2 Desk CCT Remote',      sub:'3-Zone Dual-Bar Stand',       layout:'y_desk', kind:'y2'},
    {id:'Y1',       base:'Y1',       finish:'black', cat:'cct', proto:'cct',    zones:3, name:'Y1 Desk Brightness',      sub:'3-Zone Single-Bar Stand',     layout:'y_desk', kind:'y1'}
  ];

  function pal(finish){
    const b = finish === 'black';
    return {
      b,
      body:   b ? '#1e2229' : '#f7f9fb',
      bezel:  b ? '#384152' : '#d0d7e2',
      glass:  b ? '#161920' : '#f2f5f8',
      key:    b ? '#252b36' : '#eef2f6',
      keyStr: b ? '#525e73' : '#94a3b8',
      txt:    b ? '#e2e8f0' : '#475569',
      mut:    b ? '#94a3b8' : '#7c8ba1',
      slot:   b ? '#12151b' : '#e2e8f0'
    };
  }

  function sharedDefs(u){
    return `<defs>
      <linearGradient id="cct_${u}" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#facc15"/><stop offset="52%" stop-color="#fef9c3"/><stop offset="100%" stop-color="#38bdf8"/></linearGradient>
      <linearGradient id="vcct_${u}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#38bdf8"/><stop offset="50%" stop-color="#f8fafc"/><stop offset="100%" stop-color="#facc15"/></linearGradient>
      <linearGradient id="vrgb_${u}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#ef4444"/><stop offset="25%" stop-color="#3b82f6"/><stop offset="55%" stop-color="#22c55e"/><stop offset="80%" stop-color="#eab308"/><stop offset="100%" stop-color="#ef4444"/></linearGradient>
      <linearGradient id="hrgb_${u}" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#ef4444"/><stop offset="20%" stop-color="#eab308"/><stop offset="42%" stop-color="#22c55e"/><stop offset="65%" stop-color="#06b6d4"/><stop offset="84%" stop-color="#2563eb"/><stop offset="100%" stop-color="#dc2626"/></linearGradient>
      <linearGradient id="dual_top_${u}" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#facc15"/><stop offset="55%" stop-color="#f8fafc"/><stop offset="100%" stop-color="#7dd3fc"/></linearGradient>
      <linearGradient id="dual_bot_${u}" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#b91c1c"/><stop offset="50%" stop-color="#ef4444"/><stop offset="100%" stop-color="#fee2e2"/></linearGradient>
      <linearGradient id="hsatfade_${u}" x1="0" y1="0" x2="1" y2="0"><stop offset="0%" stop-color="#ffffff" stop-opacity="0"/><stop offset="55%" stop-color="#ffffff" stop-opacity="0.35"/><stop offset="100%" stop-color="#ffffff" stop-opacity="0.96"/></linearGradient>
      <linearGradient id="vsat_rgb_${u}" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#eab308"/><stop offset="28%" stop-color="#ef4444"/><stop offset="68%" stop-color="#16a34a"/><stop offset="100%" stop-color="#064e3b"/></linearGradient>
    <radialGradient id="b8led_${u}" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="#ef4444" stop-opacity="0.72"/>
        <stop offset="65%" stop-color="#ef4444" stop-opacity="0.32"/>
        <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
      </radialGradient>
    </defs>`;
  }

  // Segmented horizontal bar (used on B1..B4, T1..T4, U1..U3, M4)
  function segBarH(x, y, w, h, n, mode, act){
    const step = w / n, bw = Math.max(1.8, step * 0.62);
    const rCols = ['#dc2626','#be185d','#9333ea','#6d28d9','#4338ca','#1d4ed8','#0284c7','#0891b2','#0d9488','#16a34a','#65a30d','#ca8a04','#eab308','#f59e0b','#ea580c','#dc2626'];
    let out = `<g class="mbx-hit" data-act="${act}" style="cursor:pointer">`;
    for(let i=0; i<n; i++){
      const t = i / (n - 1);
      let c = '#64748b';
      if(mode === 'rgb') c = rCols[Math.floor(t * (rCols.length - 1))];
      else if(mode === 'cct') c = t < 0.5 ? `rgb(250,${Math.round(204+t*96)},${Math.round(21+t*420)})` : `rgb(${Math.round(250-(t-0.5)*390)},${Math.round(252-(t-0.5)*130)},248)`;
      else if(mode === 'sat') c = `rgb(239,${Math.round(35+t*185)},${Math.round(35+t*190)})`;
      else { const v = Math.round(38 + t * 195); c = `rgb(${v},${v},${v})`; }
      out += `<rect x="${(x + i*step).toFixed(1)}" y="${y}" width="${bw.toFixed(1)}" height="${h}" fill="${c}"/>`;
    }
    return out + `</g>`;
  }

  // Smooth 36-segment color wheel matching MiBoxer photo orientation (purple/blue top, green right, yellow bottom, red left)
  function colorRing(cx, cy, r, sw){
    const cols = ['#ef4444','#dc2626','#be123c','#9d174d','#86198f','#6b21a8','#5b21b6','#4338ca','#1d4ed8','#0284c7','#0891b2','#06b6d4','#0d9488','#10b981','#16a34a','#22c55e','#65a30d','#84cc16','#eab308','#facc15','#f59e0b','#f97316','#ea580c','#ef4444'];
    const n = cols.length, circ = 2 * Math.PI * r, seg = circ / n;
    // Offset so index 0 (red) starts at ~7:30 o'clock going clockwise through purple(top)->blue->green(right)->yellow(bottom)
    const rot = 145;
    return `<g transform="rotate(${rot} ${cx} ${cy})">` + cols.map((c,i) =>
      `<circle class="mbx-hit" data-act="hue" data-val="${Math.round((i/n)*360)}" cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${c}" stroke-width="${sw}" stroke-dasharray="${(seg+0.9).toFixed(2)} ${circ.toFixed(2)}" stroke-dashoffset="${(-i*seg).toFixed(2)}" style="cursor:pointer"/>`
    ).join('') + `</g>`;
  }

  // Blue brightness pill with graduated dots + sun icon (B8, B0, FUT089, FUT100, FUT088, FUT092)
  function blueBriPillH(x, y, w, h){
    let dots = '';
    for(let i=0; i<8; i++){
      const r = 0.8 + i*0.22;
      dots += `<circle cx="${(x + 12 + i*((w-30)/7)).toFixed(1)}" cy="${y + h/2}" r="${r.toFixed(2)}" fill="#fff"/>`;
    }
    return `<g class="mbx-hit" data-act="brightness" data-val="85" style="cursor:pointer">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h/2}" fill="#0ea5e9"/>
      ${dots}
      <text x="${x + w - 9}" y="${y + h/2 + 3.2}" text-anchor="middle" fill="#fff" font-size="9">☀</text>
    </g>`;
  }

  function vSatPill2D(x, y, w, h, u, strokeCol){
    const cid = `vsat_${u}_${Math.round(x)}_${Math.round(y)}`;
    return `<g class="mbx-hit" data-act="saturation" data-val="50" style="cursor:pointer">
      <clipPath id="${cid}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w/2}"/></clipPath>
      <g clip-path="url(#${cid})">
        <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#vsat_rgb_${u})"/>
        <rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#hsatfade_${u})"/>
      </g>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w/2}" fill="none" stroke="${strokeCol}" stroke-width="0.7"/>
    </g>`;
  }

  function crescentKey(cx, cy, w, h, dip, fill, str, act, innerSvg, zoneAttr){
    // Upward-smiling crescent button matching FUT092_EN_V1.0.pdf
    const xL = cx - w/2, xR = cx + w/2;
    const d = `M ${xL} ${cy - h*0.35} Q ${cx} ${cy - h*0.35 + dip} ${xR} ${cy - h*0.35} C ${xR + 1.5} ${cy + h*0.25}, ${cx + w*0.28} ${cy + h*0.68}, ${cx} ${cy + h*0.68} C ${cx - w*0.28} ${cy + h*0.68}, ${xL - 1.5} ${cy + h*0.25}, ${xL} ${cy - h*0.35} Z`;
    return `<g class="mbx-hit" data-act="${act}" ${zoneAttr!==undefined?`data-zone="${zoneAttr}"`:''} style="cursor:pointer">
      <path d="${d}" fill="${fill}" stroke="${str}" stroke-width="0.8" stroke-linejoin="round"/>
      ${innerSvg}
    </g>`;
  }

  function sceneSlotPair(x, y, w, h, n1, n2, p, tc){
    const c = tc || '#0284c7';
    const tray = (tx, num) => `
      <path d="M ${tx-5.5} ${y+h-5.8} L ${tx-5.5} ${y+h-3.2} L ${tx+5.5} ${y+h-3.2} L ${tx+5.5} ${y+h-5.8}" fill="none" stroke="${c}" stroke-width="1"/>
      <text x="${tx}" y="${y+h-5}" text-anchor="middle" fill="${c}" font-size="6.2" font-weight="700">${num}</text>`;
    return `<g class="mbx-hit" data-act="mode" style="cursor:pointer">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2.5" fill="${p.key}" stroke="${p.keyStr}" stroke-width="0.85"/>
      ${tray(x + 9.5, n1)}
      ${n2 === 'M'
        ? `<text x="${x + w - 9.5}" y="${y + h/2 + 2.5}" text-anchor="middle" fill="${c}" font-size="7" font-weight="700">M</text>`
        : tray(x + w - 9.5, n2)}
    </g>`;
  }

  function blueBriPillV(x, y, w, h){
    let dots = '';
    for(let i=0; i<6; i++){
      const r = 2.1 - i*0.2;
      dots += `<circle cx="${x + w/2}" cy="${(y + 18 + i*((h-36)/5)).toFixed(1)}" r="${r.toFixed(2)}" fill="#fff"/>`;
    }
    return `<g class="mbx-hit" data-act="brightness" data-val="85" style="cursor:pointer">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${w/2}" fill="#0ea5e9"/>
      <text x="${x + w/2}" y="${y + 11}" text-anchor="middle" fill="#fff" font-size="9">☀</text>
      ${dots}
      <text x="${x + w/2}" y="${y + h - 5}" text-anchor="middle" fill="#fff" font-size="6.5">☀</text>
    </g>`;
  }

  // Dual-layer CCT + RGB/Sat horizontal pill (FUT089, FUT089S, FUT100, FUT088)
  function dualCctSatPillH(x, y, w, h, u){
    const cid = `clip_${u}_${Math.round(x)}_${Math.round(y)}`;
    return `<g class="mbx-hit" data-act="kelvin" data-val="50" style="cursor:pointer">
      <clipPath id="${cid}"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h/2}"/></clipPath>
      <g clip-path="url(#${cid})">
        <rect x="${x}" y="${y}" width="${w}" height="${h*0.52}" fill="url(#dual_top_${u})"/>
        <rect x="${x}" y="${y + h*0.48}" width="${w}" height="${h*0.52}" fill="url(#hrgb_${u})"/>
      </g>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${h/2}" fill="none" stroke="#cbd5e1" stroke-width="0.6"/>
    </g>`;
  }

  // Vertical zone rocker [ | / label / O ]
  function vZoneRocker(x, y, w, h, z, label, hi, p, fillOverride, txtOverride){
    const fill = fillOverride || p.key;
    const tc   = txtOverride || p.txt;
    const str  = hi ? '#0ea5e9' : p.keyStr;
    return `<g>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${Math.min(6, w/2)}" fill="${fill}" stroke="${str}" stroke-width="${hi?1.8:0.9}"/>
      <line class="mbx-hit" data-act="zone_on" data-zone="${z}" x1="${x+w/2}" y1="${y+6}" x2="${x+w/2}" y2="${y+12}" stroke="${tc}" stroke-width="1.6" stroke-linecap="round" style="cursor:pointer"/>
      <text class="mbx-hit" data-act="zone" data-zone="${z}" x="${x+w/2}" y="${y + h/2 + 3}" text-anchor="middle" fill="${hi?'#0ea5e9':tc}" font-size="8.5" font-weight="700" style="cursor:pointer">${label}</text>
      <circle class="mbx-hit" data-act="zone_off" data-zone="${z}" cx="${x+w/2}" cy="${y+h-9}" r="3.4" fill="none" stroke="${tc}" stroke-width="1.2" style="cursor:pointer"/>
      <rect class="mbx-hit" data-act="zone_on" data-zone="${z}" x="${x}" y="${y}" width="${w}" height="${h*0.36}" fill="transparent" style="cursor:pointer"/>
      <rect class="mbx-hit" data-act="zone_off" data-zone="${z}" x="${x}" y="${y+h*0.64}" width="${w}" height="${h*0.36}" fill="transparent" style="cursor:pointer"/>
    </g>`;
  }

  // Horizontal zone rocker [ |   Z   O ] (FUT089, FUT089S, FUT100, C8, C1)
  function hZoneRocker(x, y, w, h, z, label, hi, p){
    return `<g>
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="3.2" fill="${p.key}" stroke="${hi?'#0ea5e9':p.keyStr}" stroke-width="${hi?1.6:0.8}"/>
      <line x1="${x+7}" y1="${y+h/2-3.2}" x2="${x+7}" y2="${y+h/2+3.2}" stroke="${p.txt}" stroke-width="1.5" stroke-linecap="round"/>
      <text x="${x+w/2}" y="${y+h/2+3}" text-anchor="middle" fill="${hi?'#0ea5e9':p.txt}" font-size="8" font-weight="700">${label}</text>
      <circle cx="${x+w-8}" cy="${y+h/2}" r="2.8" fill="none" stroke="${p.txt}" stroke-width="1.2"/>
      <rect class="mbx-hit" data-act="zone_on" data-zone="${z}" x="${x}" y="${y}" width="${w*0.45}" height="${h}" fill="transparent" style="cursor:pointer"/>
      <rect class="mbx-hit" data-act="zone" data-zone="${z}" x="${x+w*0.45}" y="${y}" width="${w*0.15}" height="${h}" fill="transparent" style="cursor:pointer"/>
      <rect class="mbx-hit" data-act="zone_off" data-zone="${z}" x="${x+w*0.6}" y="${y}" width="${w*0.4}" height="${h}" fill="transparent" style="cursor:pointer"/>
    </g>`;
  }

  function keyBox(x, y, w, h, lbl, act, p, extra){
    extra = extra || {};
    const rx = extra.rx || 4;
    const fill = extra.fill || p.key;
    const tc = extra.tc || p.txt;
    const fs = extra.fs || 8.5;
    const sub = extra.sub ? `<text x="${x+w/2}" y="${y+h-3.2}" text-anchor="middle" fill="${p.mut}" font-size="5">${extra.sub}</text>` : '';
    const ty = extra.sub ? (y + h/2 + 0.5) : (y + h/2 + fs*0.35);
    return `<g class="mbx-hit" data-act="${act}" ${extra.zone!==undefined?`data-zone="${extra.zone}"`:''} style="cursor:pointer">
      <rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${p.keyStr}" stroke-width="0.85"/>
      <text x="${x+w/2}" y="${ty}" text-anchor="middle" fill="${tc}" font-size="${fs}" font-weight="600">${lbl}</text>
      ${sub}
    </g>`;
  }

  function renderModelSvg(modelOrId, opts){
    opts = opts || {};
    const m = (typeof modelOrId === 'string') ? (MODELS.find(x => x.id === modelOrId) || MODELS[0]) : modelOrId;
    const p = pal(m.finish);
    const az = (typeof opts.activeZone === 'number') ? opts.activeZone : null;
    const u = m.id.replace(/[^a-zA-Z0-9]/g, '') + '_' + (opts.uid || '0');
    const sc = opts.size === 'thumb' ? 0.45 : 1;

    // ---------------- 1. B8 (106x146mm Portrait Glass: Wheel + 2 V-Bars + 5 Rect Keys + 2x5 Circles) ----------------
    if(m.layout === 'b8'){
      let rectRow = '';
      [['ON','on'],['OFF','off'],['S-','mode_speed_down'],['M','mode'],['S+','mode_speed_up']].forEach(([l,a], i) => {
        rectRow += keyBox(21 + i*30.5, 148, 26.5, 18, l, a, p, {rx:3.5, fs:8});
      });
      let circRows = '';
      const r1 = [['All',0],['1',1],['2',2],['3',3],['4',4]];
      const r2 = [['60S',-1],['5',5],['6',6],['7',7],['8',8]];
      [r1, r2].forEach((row, ri) => {
        row.forEach(([lbl, z], ci) => {
          const cx = 34 + ci*30.5, cy = 186 + ri*31;
          const hi = z >= 0 && az === z;
          const act = z === -1 ? 'night_mode' : 'zone';
          circRows += `<g class="mbx-hit" data-act="${act}" ${z>=0?`data-zone="${z}"`:''} style="cursor:pointer">
            <circle cx="${cx}" cy="${cy}" r="12" fill="${p.key}" stroke="${hi?'#ef4444':p.keyStr}" stroke-width="${hi?1.2:0.9}"/>
            ${hi ? `<circle cx="${cx}" cy="${cy}" r="11" fill="url(#b8led_${u})"/>` : ''}
            <text x="${cx}" y="${z===-1?cy+0.5:cy+3.2}" text-anchor="middle" fill="${p.txt}" font-size="${z===-1?7.5:8.5}" font-weight="${hi?'700':'600'}">${lbl}</text>
            ${z===-1?`<text x="${cx}" y="${cy+6.5}" text-anchor="middle" fill="${p.mut}" font-size="3.8">Delay OFF</text>`:''}
          </g>`;
        });
      });
      return `<svg viewBox="0 0 190 250" width="${Math.round(190*sc)}" height="${Math.round(250*sc)}">
        ${sharedDefs(u)}
        <rect x="4" y="4" width="182" height="242" rx="8" fill="${p.body}" stroke="${p.bezel}" stroke-width="2"/>
        <rect x="9" y="9" width="172" height="232" rx="5" fill="${p.glass}" stroke="${p.bezel}" stroke-width="0.7"/>
        <text x="22" y="25" fill="${p.mut}" font-size="8.5" font-weight="800">MiBOXER®</text>
        <text x="168" y="24" text-anchor="end" fill="${p.txt}" font-size="6.5" font-weight="800">2.4G RF</text>
        <!-- Left V-Bar + Center Wheel (with W) + Right Blue Sun V-Bar -->
        ${vSatPill2D(25, 42, 10.5, 86, u, p.keyStr)}
        ${colorRing(95, 85, 36, 12)}
        <g class="mbx-hit" data-act="set_white" style="cursor:pointer">
          <circle cx="95" cy="85" r="14" fill="${p.glass}" stroke="${p.keyStr}" stroke-width="0.9"/>
          <text x="95" y="89" text-anchor="middle" fill="${p.txt}" font-size="11" font-weight="600">W</text>
        </g>
        ${blueBriPillV(153, 42, 12, 86)}
        ${rectRow}
        ${circRows}
      </svg>`;
    }

    // ---------------- 2. B1/T1, B2/T2, B3/T3, B4/T4 Square 86mm Strip Panels ----------------
    if(m.layout === 'b_strip'){
      let bars = '', midRow = '', rockers = '';
      if(m.kind === 'b1'){
        bars = segBarH(26, 56, 158, 12, 34, 'bri', 'brightness');
      } else if(m.kind === 'b2'){
        bars = segBarH(26, 44, 158, 11, 34, 'cct', 'kelvin') + segBarH(26, 74, 158, 11, 34, 'bri', 'brightness');
      } else if(m.kind === 'b3'){
        bars = segBarH(26, 44, 158, 11, 34, 'rgb', 'hue') + segBarH(26, 74, 158, 11, 34, 'bri', 'brightness');
      } else {
        // B4 / T4: Top rainbow bar; second row split left (CCT + Sat double row) & right (Brightness)
        bars = segBarH(26, 44, 158, 11, 34, 'rgb', 'hue')
             + segBarH(26, 73, 72, 5, 18, 'cct', 'kelvin')
             + segBarH(26, 79.5, 72, 5, 18, 'sat', 'saturation')
             + segBarH(112, 73, 72, 11.5, 18, 'bri', 'brightness');
      }
      if(m.kind === 'b1' || m.kind === 'b2'){
        midRow = keyBox(26, 102, 42, 22, 'ON', 'on', p)
               + keyBox(84, 102, 42, 22, '60S', 'night_mode', p, {sub:'Delay OFF'})
               + keyBox(142, 102, 42, 22, 'OFF', 'off', p);
        for(let z=1; z<=4; z++) rockers += vZoneRocker(26 + (z-1)*44.5, 138, 24, 48, z, String(z), az===z, p);
      } else {
        [['White','set_white'],['Mode','mode'],['Speed-','mode_speed_down'],['Speed+','mode_speed_up']].forEach(([l,a], i) => {
          midRow += keyBox(26 + i*41.5, 102, 33.5, 18, l, a, p, {fs:7.2});
        });
        [['All',0],['1',1],['2',2],['3',3],['4',4]].forEach(([lbl,z], i) => {
          rockers += vZoneRocker(26 + i*34.5, 136, 20, 48, z, lbl, az===z, p);
        });
      }
      return `<svg viewBox="0 0 210 210" width="${Math.round(210*sc)}" height="${Math.round(210*sc)}">
        <rect x="6" y="6" width="198" height="198" rx="11" fill="${p.body}" stroke="${p.bezel}" stroke-width="2.2"/>
        <rect x="11" y="11" width="188" height="188" rx="8" fill="${p.glass}" stroke="${p.bezel}" stroke-width="0.7"/>
        <text x="26" y="30" fill="${p.mut}" font-size="9.5" font-weight="800">MiBOXER®</text>
        ${bars}${midRow}${rockers}
      </svg>`;
    }

    // ---------------- 3. B0 / B0-B Square 1-Zone RGB+CCT Wheel Panel ----------------
    if(m.layout === 'b0'){
      return `<svg viewBox="0 0 210 210" width="${Math.round(210*sc)}" height="${Math.round(210*sc)}">
        ${sharedDefs(u)}
        <rect x="6" y="6" width="198" height="198" rx="11" fill="${p.body}" stroke="${p.bezel}" stroke-width="2.2"/>
        <rect x="11" y="11" width="188" height="188" rx="8" fill="${p.glass}" stroke="${p.bezel}" stroke-width="0.7"/>
        <text x="26" y="30" fill="${p.mut}" font-size="9.5" font-weight="800">MiBOXER®</text>
        ${vSatPill2D(32, 45, 10.5, 78, u, p.keyStr)}
        ${colorRing(105, 84, 34, 11.5)}
        <g class="mbx-hit" data-act="set_white" style="cursor:pointer">
          <circle cx="105" cy="84" r="13.5" fill="${p.glass}" stroke="${p.keyStr}" stroke-width="0.9"/>
          <text x="105" y="88" text-anchor="middle" fill="${p.txt}" font-size="10.5" font-weight="600">W</text>
        </g>
        ${blueBriPillV(166, 45, 11.5, 78)}
        ${keyBox(28, 138, 33, 19, 'ON', 'on', p, {fs:8})}
        ${keyBox(70, 138, 33, 19, 'R', 'hue', p, {fs:8})}
        ${keyBox(112, 138, 33, 19, 'G', 'hue', p, {fs:8})}
        ${keyBox(154, 138, 33, 19, 'B', 'hue', p, {fs:8})}
        ${keyBox(28, 165, 33, 19, 'OFF', 'off', p, {fs:8})}
        ${keyBox(70, 165, 33, 19, 'M', 'mode', p, {fs:8})}
        <g class="mbx-hit" data-act="mode_speed_down" style="cursor:pointer">
          <rect x="112" y="165" width="33" height="19" rx="4" fill="${p.key}" stroke="${p.keyStr}" stroke-width="0.85"/>
          <line x1="114" y1="183" x2="143" y2="166" stroke="${p.keyStr}" stroke-width="0.7"/>
          <text x="121" y="174" fill="${p.txt}" font-size="7" font-weight="600">S-</text>
          <text x="134" y="182" text-anchor="middle" fill="${p.mut}" font-size="5.5">60s</text>
        </g>
        <g class="mbx-hit" data-act="mode_speed_up" style="cursor:pointer">
          <rect x="154" y="165" width="33" height="19" rx="4" fill="${p.key}" stroke="${p.keyStr}" stroke-width="0.85"/>
          <line x1="156" y1="183" x2="185" y2="166" stroke="${p.keyStr}" stroke-width="0.7"/>
          <text x="163" y="174" fill="${p.txt}" font-size="7" font-weight="600">S+</text>
          <text x="175" y="182" text-anchor="middle" fill="${p.mut}" font-size="5">10min</text>
        </g>
      </svg>`;
    }

    // ---------------- 4. B5 (4 Blue Vertical 11-Bar Columns + S1..S4 + 60S) ----------------
    if(m.layout === 'b5'){
      let cols = '', scenes = '';
      for(let z=1; z<=4; z++){
        const x = 30 + (z-1)*33;
        for(let b=0; b<11; b++){
          const op = (0.35 + (b/10)*0.65).toFixed(2);
          cols += `<rect class="mbx-hit" data-act="brightness" data-zone="${z}" x="${x}" y="${42 + b*7.5}" width="16" height="4.5" rx="1.5" fill="#0ea5e9" opacity="${op}" style="cursor:pointer"/>`;
        }
        cols += vZoneRocker(x - 3, 134, 22, 50, z, String(z), az===z, p);
      }
      ['S1','S2','S3','S4'].forEach((s, i) => { scenes += keyBox(160, 42 + i*31, 26, 18, s, 'mode', p, {fs:7.5}); });
      scenes += keyBox(160, 166, 26, 18, '60S', 'night_mode', p, {fs:7, sub:'Delay'});
      return `<svg viewBox="0 0 210 210" width="${Math.round(210*sc)}" height="${Math.round(210*sc)}">
        <rect x="6" y="6" width="198" height="198" rx="11" fill="${p.body}" stroke="${p.bezel}" stroke-width="2.2"/>
        <rect x="11" y="11" width="188" height="188" rx="8" fill="${p.glass}" stroke="${p.bezel}" stroke-width="0.7"/>
        <text x="26" y="30" fill="${p.mut}" font-size="9.5" font-weight="800">MiBOXER®</text>
        ${cols}${scenes}
      </svg>`;
    }

    // ---------------- 5. U1 / U2 / U3 US Portrait 3-Zone Panels ----------------
    if(m.layout === 'u_panel'){
      let bars = '';
      if(m.kind === 'u1') bars = segBarH(26, 62, 118, 13, 28, 'bri', 'brightness');
      else if(m.kind === 'u2') bars = segBarH(26, 44, 118, 12, 28, 'cct', 'kelvin') + segBarH(26, 74, 118, 12, 28, 'bri', 'brightness');
      else bars = segBarH(26, 44, 118, 12, 28, 'rgb', 'hue') + segBarH(26, 74, 118, 12, 28, 'bri', 'brightness');

      const midLbl = m.kind === 'u3' ? ['W','set_white'] : ['60S','night_mode'];
      const r2 = m.kind === 'u3'
        ? [['S-/◐','mode_speed_down'],['M','mode'],['S+/⊕','mode_speed_up']]
        : [['1␣','mode'],['2␣','mode'],['3␣','mode']];
      let zRow = '';
      for(let z=1; z<=3; z++) zRow += vZoneRocker(28 + (z-1)*44, 164, 26, 54, z, String(z), az===z, p);
      return `<svg viewBox="0 0 170 240" width="${Math.round(170*sc)}" height="${Math.round(240*sc)}">
        <rect x="8" y="6" width="154" height="228" rx="10" fill="${p.body}" stroke="${p.bezel}" stroke-width="2"/>
        <rect x="13" y="11" width="144" height="218" rx="7" fill="${p.glass}" stroke="${p.bezel}" stroke-width="0.7"/>
        <text x="24" y="29" fill="${p.mut}" font-size="8.5" font-weight="800">MiBOXER®</text>
        ${bars}
        ${keyBox(26, 104, 30, 20, 'ON', 'on', p, {fs:7.5})}
        ${keyBox(70, 104, 30, 20, midLbl[0], midLbl[1], p, {fs:7.5})}
        ${keyBox(114, 104, 30, 20, 'OFF', 'off', p, {fs:7.5})}
        ${keyBox(26, 132, 30, 20, r2[0][0], r2[0][1], p, {fs:7})}
        ${keyBox(70, 132, 30, 20, r2[1][0], r2[1][1], p, {fs:7.5})}
        ${keyBox(114, 132, 30, 20, r2[2][0], r2[2][1], p, {fs:7})}
        ${zRow}
      </svg>`;
    }

    // ---------------- 6. M4 Italian Landscape 7-Column Panel ----------------
    if(m.layout === 'm4'){
      let cols = '';
      // Col 0: ON / All / OFF
      cols += keyBox(20, 98, 22, 68, 'All', 'zone', p, {zone:0, fs:7.5})
            + `<text x="31" y="111" text-anchor="middle" fill="${p.txt}" font-size="6.5" font-weight="700" pointer-events="none">ON</text>
               <text x="31" y="159" text-anchor="middle" fill="${p.txt}" font-size="6.5" font-weight="700" pointer-events="none">OFF</text>`;
      for(let z=1; z<=4; z++) cols += vZoneRocker(20 + z*29, 98, 22, 68, z, String(z), az===z, p);
      // Col 5: W / • / M, Col 6: + / S / -
      cols += keyBox(165, 98, 22, 68, '•', 'set_white', p, {fs:9})
            + `<text x="176" y="112" text-anchor="middle" fill="${p.txt}" font-size="7.5" font-weight="700" pointer-events="none">W</text>
               <text x="176" y="159" text-anchor="middle" fill="${p.txt}" font-size="7.5" font-weight="700" pointer-events="none">M</text>`;
      cols += keyBox(194, 98, 22, 68, 'S', 'mode_speed_up', p, {fs:8})
            + `<text x="205" y="112" text-anchor="middle" fill="${p.txt}" font-size="10" font-weight="700" pointer-events="none">+</text>
               <text x="205" y="159" text-anchor="middle" fill="${p.txt}" font-size="10" font-weight="700" pointer-events="none">−</text>`;
      return `<svg viewBox="0 0 236 184" width="${Math.round(236*sc)}" height="${Math.round(184*sc)}">
        <rect x="6" y="6" width="224" height="172" rx="10" fill="${p.body}" stroke="${p.bezel}" stroke-width="2"/>
        <text x="20" y="26" fill="${p.mut}" font-size="8.5" font-weight="800">MiBOXER®</text>
        <text x="216" y="25" text-anchor="end" fill="${p.txt}" font-size="6.5" font-weight="800">2.4G RF</text>
        ${segBarH(20, 38, 196, 12, 38, 'rgb', 'hue')}
        ${segBarH(20, 64, 88, 5.5, 18, 'cct', 'kelvin')}
        ${segBarH(20, 71.5, 88, 5.5, 18, 'sat', 'saturation')}
        ${segBarH(126, 64, 90, 13, 18, 'bri', 'brightness')}
        ${cols}
      </svg>`;
    }

    // ---------------- 7. K4 / ESR2T / PUSH3 Minimalist Panels ----------------
    if(m.layout === 'k4'){
      const pips = [
        [[56,36]], [[149,36],[159,36]],
        [[53,168],[59,168],[56,162]], [[149,162],[159,162],[149,170],[159,170]]
      ];
      let quads = '';
      for(let q=0; q<4; q++){
        const x = (q%2)*99 + 6, y = Math.floor(q/2)*99 + 6, cx = x+49.5, cy = y+49.5;
        const dots = pips[q].map(([px,py]) => `<circle cx="${px}" cy="${py}" r="1.6" fill="#94a3b8"/>`).join('');
        quads += `<g class="mbx-hit" data-act="zone_on" data-zone="${q+1}" style="cursor:pointer">
          <rect x="${x}" y="${y}" width="99" height="99" rx="6" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1"/>
          <circle cx="${cx}" cy="${cy}" r="40" fill="#e8edf3" stroke="#dde4ec" stroke-width="0.8"/>
          ${dots}
        </g>`;
      }
      return `<svg viewBox="0 0 210 210" width="${Math.round(210*sc)}" height="${Math.round(210*sc)}">${quads}</svg>`;
    }

    if(m.layout === 'esr2t'){
      return `<svg viewBox="0 0 210 210" width="${Math.round(210*sc)}" height="${Math.round(210*sc)}">
        <rect x="8" y="8" width="194" height="194" rx="8" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
        <g class="mbx-hit" data-act="zone_on" data-zone="1" style="cursor:pointer">
          <rect x="46" y="50" width="118" height="42" rx="16" fill="#e2e8f0" stroke="#38bdf8" stroke-width="4.5"/>
          <text x="105" y="75" text-anchor="middle" fill="#64748b" font-size="10" font-weight="600">ON / OFF</text>
        </g>
        <g class="mbx-hit" data-act="zone_on" data-zone="2" style="cursor:pointer">
          <rect x="46" y="110" width="118" height="42" rx="16" fill="#e2e8f0" stroke="#38bdf8" stroke-width="4.5"/>
          <text x="105" y="135" text-anchor="middle" fill="#64748b" font-size="10" font-weight="600">ON / OFF</text>
        </g>
        <text x="105" y="182" text-anchor="middle" fill="#94a3b8" font-size="9" font-weight="800">MiBOXER®</text>
      </svg>`;
    }

    if(m.layout === 'push3'){
      return `<svg viewBox="0 0 210 210" width="${Math.round(210*sc)}" height="${Math.round(210*sc)}">
        <g class="mbx-hit" data-act="on" style="cursor:pointer">
          <rect x="10" y="10" width="190" height="190" rx="7" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
          <line x1="14" y1="24" x2="196" y2="24" stroke="#e2e8f0" stroke-width="1"/>
          <text x="184" y="186" text-anchor="end" fill="#94a3b8" font-size="9.5" font-weight="800">MiBOXER®</text>
        </g>
      </svg>`;
    }

    // ---------------- 8. FUT100 (1:1 CAD Matched to fut100_en_v1.0.pdf & Fut100_45649846513.webp) ----------------
    if(m.layout === 'fut100'){
      const curZ = (az !== null && az >= 0) ? az : 100;
      const zDisp = curZ === 0 ? 'ALL' : (curZ === 100 ? '100' : String(curZ).padStart(2, '0'));
      // 20 pages of 5 zones (Page 0 = zones 1..5, Page 1 = zones 6..10 ... Page 19 = zones 96..100)
      const baseZero = (curZ >= 1 && curZ <= 100) ? Math.floor((curZ - 1) / 5) * 5 : 95;
      const pageUpZ   = ((baseZero + 5) % 100) + 1;
      const pageDownZ = ((baseZero + 95) % 100) + 1;

      const zBtn = (x, y, slotIdx, lbl) => {
        const zNum = baseZero + slotIdx;
        return hZoneRocker(x, y, 40, 15, zNum, lbl, az === zNum, p);
      };

      // Dual-action S- / S+ button with independent left/right hitboxes
      const speedDualBtn = `<g>
        <rect x="65" y="217" width="40" height="15" rx="2.5" fill="${p.key}" stroke="${p.keyStr}" stroke-width="0.85"/>
        <text x="74" y="227" text-anchor="middle" fill="${p.txt}" font-size="7.2" font-weight="600">S−</text>
        <text x="96" y="227" text-anchor="middle" fill="${p.txt}" font-size="7.2" font-weight="600">S+</text>
        <rect class="mbx-hit" data-act="mode_speed_down" x="65" y="217" width="20" height="15" fill="transparent" style="cursor:pointer"/>
        <rect class="mbx-hit" data-act="mode_speed_up"   x="85" y="217" width="20" height="15" fill="transparent" style="cursor:pointer"/>
      </g>`;

      // Crisp vector Child-Lock / Copy button [ 🔒 / ⧉ ] (no emoji font glitches!)
      const lockCopyBtn = `<g class="mbx-hit" data-act="mode" style="cursor:pointer">
        <rect x="79" y="159" width="26" height="16" rx="2.5" fill="${p.key}" stroke="${p.keyStr}" stroke-width="0.85"/>
        <!-- Padlock icon -->
        <rect x="83.5" y="166.8" width="5.2" height="4.2" rx="0.7" fill="none" stroke="${p.txt}" stroke-width="0.9"/>
        <path d="M 84.6 166.8 V 165.2 A 1.5 1.5 0 0 1 87.6 165.2 V 166.8" fill="none" stroke="${p.txt}" stroke-width="0.9"/>
        <!-- Slash -->
        <line x1="90.5" y1="171" x2="93.2" y2="163.5" stroke="${p.txt}" stroke-width="0.85"/>
        <!-- Overlapping Copy-Link squares -->
        <rect x="94.5" y="164" width="4.2" height="4.2" rx="0.6" fill="none" stroke="${p.txt}" stroke-width="0.85"/>
        <rect x="96.5" y="166.5" width="4.2" height="4.2" rx="0.6" fill="${p.key}" stroke="${p.txt}" stroke-width="0.85"/>
      </g>`;

      // Scene 1/2 & Scene 3/M buttons with independent left/right hitboxes
      const trayGlyph = (cx, yBottom, num) => `
        <path d="M ${cx-5.5} ${yBottom-3.2} V ${yBottom} H ${cx+5.5} V ${yBottom-3.2}" fill="none" stroke="#0284c7" stroke-width="1"/>
        <text x="${cx}" y="${yBottom-1.8}" text-anchor="middle" fill="#0284c7" font-size="6.4" font-weight="700">${num}</text>`;

      const sceneRow = `<g>
        <rect x="21" y="236" width="40" height="15" rx="2.5" fill="${p.key}" stroke="${p.keyStr}" stroke-width="0.85"/>
        ${trayGlyph(30.5, 247.5, '1')}
        ${trayGlyph(51.5, 247.5, '2')}
        <rect class="mbx-hit" data-act="scene_1" x="21" y="236" width="20" height="15" fill="transparent" style="cursor:pointer"/>
        <rect class="mbx-hit" data-act="scene_2" x="41" y="236" width="20" height="15" fill="transparent" style="cursor:pointer"/>

        <rect x="65" y="236" width="40" height="15" rx="2.5" fill="${p.key}" stroke="${p.keyStr}" stroke-width="0.85"/>
        ${trayGlyph(74.5, 247.5, '3')}
        <text x="95.5" y="246.2" text-anchor="middle" fill="#0284c7" font-size="7.5" font-weight="700">M</text>
        <rect class="mbx-hit" data-act="scene_3" x="65" y="236" width="20" height="15" fill="transparent" style="cursor:pointer"/>
        <rect class="mbx-hit" data-act="mode"    x="85" y="236" width="20" height="15" fill="transparent" style="cursor:pointer"/>
      </g>`;

      return `<svg viewBox="0 0 126 296" width="${Math.round(126*sc)}" height="${Math.round(296*sc)}">
        ${sharedDefs(u)}
        <!-- Outer body: curved crown & base matching Fut100_45649846513.webp -->
        <rect x="9" y="4" width="108" height="288" rx="26" fill="${p.body}" stroke="${p.bezel}" stroke-width="2"/>
        <!-- Contoured Top Screen Bezel (curved top arch + crisp lower corners) -->
        <path d="M 17 30 C 17 15, 32 11, 63 11 C 94 11, 109 15, 109 30 L 109 73 Q 109 77 105 77 L 21 77 Q 17 77 17 73 Z" fill="#ffffff" stroke="#cbd5e1" stroke-width="0.9"/>
        <text x="63" y="22.5" text-anchor="middle" fill="#1e293b" font-size="7" font-weight="800" letter-spacing="0.3">MiBOXER®</text>

        <!-- Monochrome Segmented LCD Window -->
        <rect x="25" y="26.5" width="76" height="40" rx="1.5" fill="#d9e0d7" stroke="#64748b" stroke-width="0.9"/>
        <!-- LCD Padlock + 3-Bar Battery Icon (top right) -->
        <rect x="82" y="30" width="3.4" height="2.8" fill="none" stroke="#1e293b" stroke-width="0.7"/>
        <path d="M 82.7 30 V 28.9 A 1 1 0 0 1 84.7 28.9 V 30" fill="none" stroke="#1e293b" stroke-width="0.7"/>
        <rect x="88" y="28.7" width="9.5" height="4.2" rx="0.5" fill="none" stroke="#1e293b" stroke-width="0.7"/>
        <rect x="97.5" y="29.8" width="1" height="2" fill="#1e293b"/>
        <rect x="89.2" y="29.6" width="2" height="2.4" fill="#1e293b"/>
        <rect x="91.9" y="29.6" width="2" height="2.4" fill="#1e293b"/>
        <rect x="94.6" y="29.6" width="2" height="2.4" fill="#1e293b"/>

        <!-- LCD Left Column: Giant 7-Seg Zone + Mode 8 + Save 3 -->
        <text x="27.5" y="44" fill="#0f172a" font-family="monospace" font-size="16" font-weight="900" letter-spacing="-0.8">${zDisp}</text>
        <text x="27.5" y="53.5" fill="#1e293b" font-size="5" font-weight="700">Mode <tspan font-family="monospace" font-size="6.8" font-weight="800">8</tspan></text>
        <text x="27.5" y="62.5" fill="#1e293b" font-size="5" font-weight="700">Save <tspan font-family="monospace" font-size="6.8" font-weight="800">3</tspan></text>

        <!-- LCD Right Column: Stacked RGB/CCT 8888K, DIM 100%, SAT 100% -->
        <text x="58" y="39.5" fill="#1e293b" font-size="4.3" font-weight="800">RGB</text>
        <text x="58" y="43.8" fill="#1e293b" font-size="4.3" font-weight="800">CCT</text>
        <text x="98.5" y="43.5" text-anchor="end" fill="#0f172a" font-family="monospace" font-size="8.2" font-weight="800">2700<tspan font-size="5.2">K</tspan></text>
        <text x="58" y="53.5" fill="#1e293b" font-size="5" font-weight="800">DIM</text>
        <text x="98.5" y="53.5" text-anchor="end" fill="#0f172a" font-family="monospace" font-size="8" font-weight="800">100<tspan font-size="5.2">%</tspan></text>
        <text x="58" y="62.5" fill="#1e293b" font-size="5" font-weight="800">SAT</text>
        <text x="98.5" y="62.5" text-anchor="end" fill="#0f172a" font-family="monospace" font-size="8" font-weight="800">100<tspan font-size="5.2">%</tspan></text>

        <!-- Recessed Pill Indicator Light below LCD -->
        <rect x="59.5" y="71.2" width="7" height="2.4" rx="1.2" fill="#f1f5f9" stroke="#64748b" stroke-width="0.7"/>

        <!-- 3 Horizontal Touch Pills: Color Slider, Saturation/CCT Slider, Dimming Slider -->
        <rect class="mbx-hit" data-act="hue" data-val="180" x="21" y="86" width="84" height="9.5" rx="4.75" fill="url(#hrgb_${u})" stroke="#cbd5e1" stroke-width="0.6" style="cursor:pointer"/>
        ${dualCctSatPillH(21, 106, 84, 9.5, u)}
        ${blueBriPillH(21, 126, 84, 9.5)}

        <!-- 2x3 Upper Rectangular Key Matrix: [ON] [△] [OFF] / [W] [▽] [Lock/Copy] -->
        ${keyBox(21, 140, 26, 16, 'ON', 'zone_on', p, {zone:0, fs:7.2, rx:2.5})}
        <g class="mbx-hit" data-act="zone" data-zone="${pageUpZ}" style="cursor:pointer">
          <rect x="50" y="140" width="26" height="16" rx="2.5" fill="${p.key}" stroke="${p.keyStr}" stroke-width="0.85"/>
          <polygon points="63,144.8 66.5,151 59.5,151" fill="none" stroke="${p.txt}" stroke-width="1.1" stroke-linejoin="round"/>
        </g>
        ${keyBox(79, 140, 26, 16, 'OFF', 'zone_off', p, {zone:0, fs:7.2, rx:2.5})}

        ${keyBox(21, 159, 26, 16, 'W', 'set_white', p, {fs:7.2, rx:2.5})}
        <g class="mbx-hit" data-act="zone" data-zone="${pageDownZ}" style="cursor:pointer">
          <rect x="50" y="159" width="26" height="16" rx="2.5" fill="${p.key}" stroke="${p.keyStr}" stroke-width="0.85"/>
          <polygon points="59.5,164 66.5,164 63,170.2" fill="none" stroke="${p.txt}" stroke-width="1.1" stroke-linejoin="round"/>
        </g>
        ${lockCopyBtn}

        <!-- 4x2 Lower Dual-Bank Zone & Scene Matrix -->
        ${zBtn(21, 179, 1, '1/6')}
        ${zBtn(65, 179, 2, '2/7')}
        ${zBtn(21, 198, 3, '3/8')}
        ${zBtn(65, 198, 4, '4/9')}
        ${zBtn(21, 217, 5, '5/0')}
        ${speedDualBtn}
        ${sceneRow}

        <!-- Authentic Bottom 2.4G RF + Waves + Model No.: FUT100 -->
        <text x="58" y="264" text-anchor="middle" fill="#0f172a" font-size="6.8" font-weight="900" letter-spacing="0.4">2.4G RF</text>
        <circle cx="75.5" cy="262" r="1" fill="#0f172a"/>
        <path d="M 77 259.8 A 3 3 0 0 1 77 264.2" fill="none" stroke="#0f172a" stroke-width="0.9"/>
        <path d="M 78.8 258.2 A 5 5 0 0 1 78.8 265.8" fill="none" stroke="#0f172a" stroke-width="0.9"/>
        <text x="63" y="270.5" text-anchor="middle" fill="#475569" font-size="4.8" font-weight="600">Model No.: FUT100</text>
      </svg>`;
    }

    // ---------------- 9. FUT089 (8-Zone, White & Black) & FUT089S (6-Zone + 4 Scenes) — Matched to FUT089/089S_EN_V1.0.pdf ----------------
    if(m.layout === 'fut089'){
      let zGrid = '';
      const maxPairs = m.sixZone ? 3 : 4;
      for(let r=0; r<maxPairs; r++){
        const zL = r*2 + 1, zR = r*2 + 2;
        zGrid += hZoneRocker(22, 178 + r*17, 38, 14, zL, String(zL), az===zL, p);
        zGrid += hZoneRocker(64, 178 + r*17, 38, 14, zR, String(zR), az===zR, p);
      }
      if(m.sixZone){
        zGrid += sceneSlotPair(22, 178 + 3*17, 38, 14, '1', '2', p);
        zGrid += sceneSlotPair(64, 178 + 3*17, 38, 14, '3', '4', p);
      }
      return `<svg viewBox="0 0 124 288" width="${Math.round(124*sc)}" height="${Math.round(288*sc)}">
        ${sharedDefs(u)}
        <!-- 47x153mm slim rectangular body with authentic corner radius -->
        <rect x="12" y="4" width="100" height="280" rx="15" fill="${p.body}" stroke="${p.bezel}" stroke-width="2"/>
        ${colorRing(62, 50, 27, 11.5)}
        <circle cx="62" cy="50" r="15.5" fill="${p.body}"/>
        <circle cx="62" cy="50" r="4.2" fill="none" stroke="${p.keyStr}" stroke-width="0.9"/>
        ${dualCctSatPillH(22, 95, 80, 9.5, u)}
        ${blueBriPillH(22, 115, 80, 9.5)}
        ${keyBox(22, 136, 24, 15, 'ON', 'zone_on', p, {zone:0, fs:7, rx:2.5})}
        ${keyBox(50, 136, 24, 15, 'W', 'set_white', p, {fs:7, rx:2.5})}
        ${keyBox(78, 136, 24, 15, 'OFF', 'zone_off', p, {zone:0, fs:7, rx:2.5})}
        ${keyBox(22, 154, 24, 15, 'S-', 'mode_speed_down', p, {fs:7, rx:2.5})}
        ${keyBox(50, 154, 24, 15, 'M', 'mode', p, {fs:7, rx:2.5})}
        ${keyBox(78, 154, 24, 15, 'S+', 'mode_speed_up', p, {fs:7, rx:2.5})}
        ${zGrid}
        <text x="62" y="266" text-anchor="middle" fill="${p.txt}" font-size="8.2" font-family="serif" font-weight="700">Mi•Light®</text>
      </svg>`;
    }

    // ---------------- 10. FUT092 (White w/ Lime Keys & Black w/ Dark Keys) — Matched 1:1 to FUT092_EN_V1.0.pdf & FUT092_Black_92SYT.png ----------------
    if(m.layout === 'fut092'){
      const kFill = p.b ? '#1d222b' : '#dce642';
      const kTxt  = p.b ? '#e2e8f0' : '#1e293b';
      const kStr  = p.b ? '#475569' : '#b5c428';
      const rimCol = p.b ? '#334155' : '#60a5fa';

      // 4 aligned stadium/capsule zone rockers (1, 2, 3, 4)
      let zCols = '';
      for(let z=1; z<=4; z++){
        zCols += vZoneRocker(23.5 + (z-1)*22.2, 194, 14.2, 41, z, String(z), az===z, p, kFill, kTxt);
      }

      // Top crescent Master ON (—) and Master OFF (O)
      const masterOn  = crescentKey(46, 24, 18, 11, 4.5, kFill, kStr, 'zone_on',
        `<line x1="42.5" y1="25.5" x2="49.5" y2="25.5" stroke="${kTxt}" stroke-width="1.6" stroke-linecap="round"/>`, 0);
      const masterOff = crescentKey(82, 24, 18, 11, 4.5, kFill, kStr, 'zone_off',
        `<circle cx="82" cy="25.5" r="2.6" fill="none" stroke="${kTxt}" stroke-width="1.25"/>`, 0);

      // 3 stacked center crescent smile buttons: S+, M, S-
      const cSplus  = crescentKey(64, 141, 25, 13, 5.2, kFill, kStr, 'mode_speed_up',
        `<text x="64" y="145" text-anchor="middle" fill="${kTxt}" font-size="7.5" font-weight="700">S+</text>`);
      const cMode   = crescentKey(64, 159, 25, 13, 5.2, kFill, kStr, 'mode',
        `<text x="64" y="163" text-anchor="middle" fill="${kTxt}" font-size="7.5" font-weight="700">M</text>`);
      const cSminus = crescentKey(64, 177, 25, 13, 5.2, kFill, kStr, 'mode_speed_down',
        `<text x="64" y="181" text-anchor="middle" fill="${kTxt}" font-size="7.5" font-weight="700">S-</text>`);

      return `<svg viewBox="0 0 128 268" width="${Math.round(128*sc)}" height="${Math.round(268*sc)}">
        ${sharedDefs(u)}
        <!-- Subtle outer blue/dark housing rim + smooth barrel-stadium faceplate -->
        <path d="M 64 4 C 99 4, 115 26, 116 134 C 115 242, 99 264, 64 264 C 29 264, 13 242, 12 134 C 13 26, 29 4, 64 4 Z" fill="${p.body}" stroke="${rimCol}" stroke-width="1.8"/>
        <path d="M 64 6 C 97 6, 113 28, 114 134 C 113 240, 97 262, 64 262 C 31 262, 15 240, 14 134 C 15 28, 31 6, 64 6 Z" fill="none" stroke="${p.bezel}" stroke-width="0.9"/>
        ${masterOn}${masterOff}
        <!-- Color Ring + Center Cap with Indicator -->
        ${colorRing(64, 71, 29, 13)}
        <circle cx="64" cy="71" r="16" fill="${p.body}" stroke="${p.bezel}" stroke-width="0.7"/>
        <circle cx="64" cy="71" r="3.8" fill="none" stroke="${p.keyStr}" stroke-width="0.85"/>
        <!-- Concentric Curved Color Temperature Smile Arc -->
        <path class="mbx-hit" data-act="kelvin" data-val="50" d="M 30.5 110.5 A 48 48 0 0 0 97.5 110.5" fill="none" stroke="url(#cct_${u})" stroke-width="11.5" stroke-linecap="round" style="cursor:pointer"/>
        <!-- Left 2D Saturation Capsule + Center Crescent S+/M/S- + Right Blue Sun Dimming Capsule -->
        ${vSatPill2D(25, 135, 13, 50, u, p.keyStr)}
        ${cSplus}${cMode}${cSminus}
        ${blueBriPillV(90, 135, 13, 50)}
        ${zCols}
        <text x="64" y="250" text-anchor="middle" fill="${p.txt}" font-family="serif" font-size="8.2" font-weight="700">Mi•Light®</text>
      </svg>`;
    }

    // ---------------- 11. FUT088 Rectangular 1-Zone Full-Touch (47x134mm, Matched to FUT088_EN_V1.0.pdf) ----------------
    if(m.layout === 'fut088'){
      const yf = '#e8eb46', yt = '#1e293b';
      const diagTimerKey = (x, y, topTxt, botTxt, act) => `<g class="mbx-hit" data-act="${act}" style="cursor:pointer">
        <rect x="${x}" y="${y}" width="21" height="18" rx="3.5" fill="${yf}" stroke="#b5c428" stroke-width="0.85"/>
        <line x1="${x+3}" y1="${y+15}" x2="${x+18}" y2="${y+3}" stroke="${yt}" stroke-width="0.8"/>
        <text x="${x+6.5}" y="${y+8}" text-anchor="middle" fill="${yt}" font-size="6.2" font-weight="700">${topTxt}</text>
        <circle cx="${x+15.5}" cy="${y+7.2}" r="2.4" fill="none" stroke="${yt}" stroke-width="0.7"/>
        <polyline points="${x+15.5},${y+5.7} ${x+15.5},${y+7.3} ${x+16.7},${y+7.3}" fill="none" stroke="${yt}" stroke-width="0.65"/>
        <text x="${x+11.5}" y="${y+15.8}" text-anchor="middle" fill="${yt}" font-size="5.2" font-weight="700">${botTxt}</text>
      </g>`;

      return `<svg viewBox="0 0 120 266" width="${Math.round(120*sc)}" height="${Math.round(266*sc)}">
        ${sharedDefs(u)}
        <rect x="13" y="6" width="94" height="254" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.8"/>
        ${colorRing(60, 54, 27, 11.5)}
        <circle cx="60" cy="54" r="15.2" fill="#f8fafc"/>
        <circle cx="60" cy="54" r="4" fill="none" stroke="#94a3b8" stroke-width="0.9"/>
        ${dualCctSatPillH(23, 98, 74, 9.5, u)}
        ${blueBriPillH(23, 118, 74, 9.5)}
        ${keyBox(23, 142, 21, 18, 'ON', 'on', p, {fill:yf, tc:yt, rx:3.5, fs:7})}
        ${keyBox(49.5, 142, 21, 18, 'W', 'set_white', p, {fill:yf, tc:yt, rx:3.5, fs:7})}
        ${keyBox(76, 142, 21, 18, 'OFF', 'off', p, {fill:yf, tc:yt, rx:3.5, fs:7})}
        ${keyBox(23, 167, 21, 18, 'R', 'hue', p, {fill:yf, tc:yt, rx:3.5, fs:7.5})}
        ${keyBox(49.5, 167, 21, 18, 'G', 'hue', p, {fill:yf, tc:yt, rx:3.5, fs:7.5})}
        ${keyBox(76, 167, 21, 18, 'B', 'hue', p, {fill:yf, tc:yt, rx:3.5, fs:7.5})}
        ${diagTimerKey(23, 192, 'S-', '60s', 'mode_speed_down')}
        ${keyBox(49.5, 192, 21, 18, 'M', 'mode', p, {fill:yf, tc:yt, rx:3.5, fs:7.5})}
        ${diagTimerKey(76, 192, 'S+', '10min', 'mode_speed_up')}
        <text x="60" y="238" text-anchor="middle" font-size="8.5" font-weight="800"><tspan fill="#e11d48">Mi</tspan><tspan fill="#1e293b">BOXER®</tspan></text>
      </svg>`;
    }

    // ---------------- 12. Pebble 4-Zone Family: FUT096, FUT095, FUT094 (CAD-Matched to fut094_en_v1.0.pdf) ----------------
    if(m.layout === 'fut_pebble'){
      const is95 = m.kind === 'fut095', is94 = m.kind === 'fut094';
      const kf = is95 ? '#18181b' : (p.b ? '#252b36' : (is94 ? '#f2e76d' : '#facc15'));
      const kt = (is95 || p.b) ? '#f8fafc' : '#334155';
      let zCols = '';
      for(let z=1; z<=4; z++){
        const dy = (z===1 || z===4) ? 178 : 185;
        zCols += vZoneRocker(23 + (z-1)*22.5, dy, 14.5, 42, z, String(z), az===z, p, kf, kt);
      }
      const topMaster = is95 ? '' : `
        <rect x="42" y="21" width="44" height="14" rx="7" fill="${p.body}" stroke="${p.keyStr}" stroke-width="0.9"/>
        <line class="mbx-hit" data-act="zone_on" data-zone="0" x1="48" y1="28" x2="55" y2="28" stroke="${p.txt}" stroke-width="1.6" stroke-linecap="round" style="cursor:pointer"/>
        <circle class="mbx-hit" data-act="zone_off" data-zone="0" cx="76" cy="28" r="3.3" fill="none" stroke="${p.txt}" stroke-width="1.3" style="cursor:pointer"/>`;

      const wheel = is94
        ? `<circle cx="64" cy="78" r="35" fill="${p.slot}" opacity="0.45"/>
           <path class="mbx-hit" data-act="kelvin" data-val="50" d="M 44.6 99.5 A 29 29 0 1 1 83.4 99.5" fill="none" stroke="url(#cct_${u})" stroke-width="13.5" stroke-linecap="round" style="cursor:pointer"/>
           <circle cx="64" cy="78" r="17" fill="${p.body}" stroke="${p.bezel}" stroke-width="0.7"/>
           <circle cx="64" cy="78" r="5" fill="#cbd5e1" opacity="0.65"/>`
        : colorRing(64, 76, 29, 12.5);

      let crescent = '';
      if(is94){
        let arcDots = '';
        [121,111,101,91,81,71,61].forEach((deg, idx) => {
          const rad = deg * Math.PI / 180;
          const cx = (64 + 51 * Math.cos(rad)).toFixed(1);
          const cy = (75 + 51 * Math.sin(rad)).toFixed(1);
          arcDots += `<circle cx="${cx}" cy="${cy}" r="${(1.0 + idx*0.18).toFixed(2)}" fill="#fff" pointer-events="none"/>`;
        });
        crescent = `<g class="mbx-hit" data-act="brightness" data-val="85" style="cursor:pointer">
          <path d="M 28.5 111.5 A 51 51 0 0 0 99.5 111.5" fill="none" stroke="#0999dc" stroke-width="12" stroke-linecap="round"/>
          <text x="29" y="114" text-anchor="middle" fill="#fff" font-size="6.5">☀</text>
          ${arcDots}
          <text x="98.5" y="115" text-anchor="middle" fill="#fff" font-size="9.5">☀</text>
        </g>`;
      } else {
        crescent = `<g class="mbx-hit" data-act="brightness" data-val="85" style="cursor:pointer">
          <path d="M 31 116 A 48 48 0 0 0 97 116" fill="none" stroke="${p.txt}" stroke-width="4.5" stroke-linecap="round"/>
          <text x="26" y="116" fill="${p.mut}" font-size="6.5">☀</text><text x="99" y="117" fill="${p.txt}" font-size="9">☀</text>
        </g>`;
      }

      let midBtns = '';
      if(is95){
        midBtns = keyBox(30, 134, 30, 15, 'ON', 'zone_on', p, {zone:0, fill:'#18181b', tc:'#fff', fs:7.5})
                + keyBox(68, 134, 30, 15, 'OFF', 'zone_off', p, {zone:0, fill:'#18181b', tc:'#fff', fs:7.5})
                + keyBox(30, 155, 18, 16, 'S-', 'mode_speed_down', p, {fill:'#18181b', tc:'#fff', rx:8, fs:7})
                + keyBox(55, 155, 18, 16, 'M', 'mode', p, {fill:'#18181b', tc:'#fff', rx:8, fs:7})
                + keyBox(80, 155, 18, 16, 'S+', 'mode_speed_up', p, {fill:'#18181b', tc:'#fff', rx:8, fs:7});
      } else {
        const lbls = is94 ? ['S1','S2','S3'] : ['S-','M','S+'];
        const acts = is94 ? ['mode','mode','mode'] : ['mode_speed_down','mode','mode_speed_up'];
        midBtns = `<g transform="rotate(23 36 146)">${keyBox(24, 139, 24, 13.5, lbls[0], acts[0], p, {fill:kf, tc:kt, rx:5, fs:7.5})}</g>`
                + keyBox(51, 146, 26, 13.5, lbls[1], acts[1], p, {fill:kf, tc:kt, rx:5, fs:7.5})
                + `<g transform="rotate(-23 92 146)">${keyBox(80, 139, 24, 13.5, lbls[2], acts[2], p, {fill:kf, tc:kt, rx:5, fs:7.5})}</g>`;
      }
      const brandFooter = is94
        ? `<text x="64" y="243" text-anchor="middle" font-size="8" font-weight="800"><tspan fill="#e11d48">Mi</tspan><tspan fill="${p.txt}">BOXER®</tspan></text>
           <text x="64" y="250" text-anchor="middle" fill="${p.mut}" font-size="4.8">Model No.: FUT094</text>`
        : `<text x="64" y="246" text-anchor="middle" fill="${p.txt}" font-family="serif" font-size="8" font-weight="700">Mi•Light®</text>`;

      return `<svg viewBox="0 0 128 268" width="${Math.round(128*sc)}" height="${Math.round(268*sc)}">
        ${sharedDefs(u)}
        <path d="M 64 5 C 97 5, 114 34, 116 122 C 118 202, 106 263, 64 263 C 22 263, 10 202, 12 122 C 14 34, 31 5, 64 5 Z" fill="${p.body}" stroke="${p.bezel}" stroke-width="2.2"/>
        ${topMaster}${wheel}${crescent}${midBtns}${zCols}${brandFooter}
      </svg>`;
    }

    // ---------------- 13. Classic Pebble: FUT007 (4-Dot Ring) & FUT006 (12-Tick Wheel) ----------------
    if(m.layout === 'fut_classic'){
      const is06 = m.kind === 'fut006';
      let ring = `<circle cx="64" cy="112" r="34" fill="#18181b" stroke="#475569" stroke-width="1.2"/>
                  <circle cx="64" cy="112" r="16" fill="#f8fafc"/>`;
      if(is06){
        for(let i=0; i<12; i++){
          const a = (i*30)*Math.PI/180;
          ring += `<line class="mbx-hit" data-act="brightness" data-val="${(i+1)*8}" x1="${(64+20*Math.cos(a)).toFixed(1)}" y1="${(112+20*Math.sin(a)).toFixed(1)}" x2="${(64+30*Math.cos(a)).toFixed(1)}" y2="${(112+30*Math.sin(a)).toFixed(1)}" stroke="#64748b" stroke-width="1.3" style="cursor:pointer"/>`;
        }
      } else {
        [[64,85,'brightness'],[64,139,'brightness'],[37,112,'kelvin'],[91,112,'kelvin']].forEach(([cx,cy,act]) => {
          ring += `<circle class="mbx-hit" data-act="${act}" cx="${cx}" cy="${cy}" r="2.2" fill="#fff" style="cursor:pointer"/>`;
        });
      }
      let zCols = '';
      for(let z=1; z<=4; z++){
        const dy = (z===1 || z===4) ? 164 : 174;
        zCols += vZoneRocker(22 + (z-1)*23, dy, 16, 42, z, String(z), az===z, p);
      }
      return `<svg viewBox="0 0 128 264" width="${Math.round(128*sc)}" height="${Math.round(264*sc)}">
        <rect x="8" y="4" width="112" height="256" rx="48" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2"/>
        <g class="mbx-hit" data-act="zone_on" data-zone="0" style="cursor:pointer"><circle cx="64" cy="28" r="11" fill="#f1f5f9" stroke="#94a3b8"/><line x1="64" y1="23" x2="64" y2="33" stroke="#1e293b" stroke-width="2.2" stroke-linecap="round"/></g>
        <g class="mbx-hit" data-act="zone_off" data-zone="0" style="cursor:pointer"><circle cx="64" cy="55" r="11" fill="#f1f5f9" stroke="#94a3b8"/><circle cx="64" cy="55" r="4.5" fill="none" stroke="#1e293b" stroke-width="2"/></g>
        ${ring}${zCols}
        <text x="64" y="238" text-anchor="middle" fill="#334155" font-size="7.5" font-weight="800">MiBOXER ${m.id}</text>
      </svg>`;
    }

    // ---------------- 14. Modern Matte-Black C5 (4-Zone) & C8 (8-Zone) ----------------
    if(m.layout === 'c_wheel'){
      const is8 = m.zones === 8;
      let zPart = '';
      if(is8){
        for(let r=0; r<4; r++){
          zPart += hZoneRocker(22, 178 + r*16.5, 38, 13.5, r*2+1, String(r*2+1), az===r*2+1, p)
                 + hZoneRocker(64, 178 + r*16.5, 38, 13.5, r*2+2, String(r*2+2), az===r*2+2, p);
        }
      } else {
        for(let z=1; z<=4; z++) zPart += vZoneRocker(22 + (z-1)*21.5, 176, 15.5, 44, z, String(z), az===z, p);
      }
      return `<svg viewBox="0 0 124 282" width="${Math.round(124*sc)}" height="${Math.round(282*sc)}">
        ${sharedDefs(u)}
        <rect x="10" y="4" width="104" height="274" rx="12" fill="#22262e" stroke="#3b4252" stroke-width="2"/>
        ${colorRing(62, 54, 28, 13)}
        ${is8 ? `<rect x="22" y="96" width="80" height="12" rx="6" fill="#161920" stroke="#334155" stroke-width="0.8"/>
                 <rect class="mbx-hit" data-act="kelvin" data-val="50" x="32" y="100" width="60" height="4" rx="2" fill="url(#cct_${u})" style="cursor:pointer"/>` : ''}
        <rect x="22" y="${is8?115:104}" width="80" height="12" rx="6" fill="#161920" stroke="#334155" stroke-width="0.8"/>
        <rect class="mbx-hit" data-act="brightness" data-val="80" x="32" y="${is8?119:108}" width="58" height="4" rx="2" fill="#cbd5e1" style="cursor:pointer"/>
        ${keyBox(22, 136, 24, 15, 'ON', 'zone_on', p, {zone:0, fs:7})}
        ${keyBox(50, 136, 24, 15, 'W', 'set_white', p, {fs:7})}
        ${keyBox(78, 136, 24, 15, 'OFF', 'zone_off', p, {zone:0, fs:7})}
        ${keyBox(22, 154, 24, 15, is8?'S-':'S-/◐', 'mode_speed_down', p, {fs:6.8})}
        ${keyBox(50, 154, 24, 15, 'M', 'mode', p, {fs:7})}
        ${keyBox(78, 154, 24, 15, is8?'S+':'S+/⊕', 'mode_speed_up', p, {fs:6.8})}
        ${zPart}
        <text x="62" y="262" text-anchor="middle" fill="#cbd5e1" font-size="7" font-weight="700">MiBOXER ${m.id}</text>
      </svg>`;
    }

    // ---------------- 15. Minimalist Vertical Slot Remotes: C4 (RGB), C3 (CCT), C3P (12-Dot Dimmer) ----------------
    if(m.layout === 'c_slot'){
      let track = '';
      if(m.kind === 'rgb') track = `<rect class="mbx-hit" data-act="hue" data-val="180" x="56" y="44" width="4" height="82" rx="2" fill="url(#vrgb_${u})" style="cursor:pointer"/>`;
      else if(m.kind === 'cct') track = `<rect class="mbx-hit" data-act="kelvin" data-val="50" x="56" y="44" width="4" height="82" rx="2" fill="url(#vcct_${u})" style="cursor:pointer"/>`;
      else {
        for(let i=0; i<12; i++) track += `<circle class="mbx-hit" data-act="brightness" data-val="${100-i*8}" cx="58" cy="${46+i*7}" r="1.4" fill="#94a3b8" style="cursor:pointer"/>`;
      }
      return `<svg viewBox="0 0 116 268" width="${Math.round(116*sc)}" height="${Math.round(268*sc)}">
        ${sharedDefs(u)}
        <rect x="14" y="6" width="88" height="256" rx="14" fill="#262a33" stroke="#3f4654" stroke-width="2"/>
        <rect x="46" y="28" width="24" height="114" rx="12" fill="#1b1e25" stroke="#3b4252"/>
        <text x="58" y="39" text-anchor="middle" fill="#e2e8f0" font-size="7.5">☀</text>
        ${track}
        <text x="58" y="137" text-anchor="middle" fill="#94a3b8" font-size="5.5">☀</text>
        <rect x="33" y="156" width="50" height="18" rx="9" fill="#2d333f" stroke="#4b5563" stroke-width="0.9"/>
        <text class="mbx-hit" data-act="on" x="45" y="167.5" text-anchor="middle" fill="#e2e8f0" font-size="7" font-weight="700" style="cursor:pointer">ON</text>
        <text class="mbx-hit" data-act="off" x="71" y="167.5" text-anchor="middle" fill="#e2e8f0" font-size="7" font-weight="700" style="cursor:pointer">OFF</text>
        <text x="58" y="242" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="700">MiBOXER ${m.id}</text>
      </svg>`;
    }

    // ---------------- 16. C1 (5-Diamond X-Pad + 4 Full-Width Horizontal Zone Bars) & C12 (LED + Scroll Wheel) ----------------
    if(m.layout === 'c1'){
      const dm = (cx,cy,lbl,act) => `<g class="mbx-hit" data-act="${act}" style="cursor:pointer">
        <polygon points="${cx},${cy-11} ${cx+14},${cy} ${cx},${cy+11} ${cx-14},${cy}" fill="${p.key}" stroke="${p.keyStr}" stroke-width="0.9"/>
        <text x="${cx}" y="${cy+2.8}" text-anchor="middle" fill="${p.txt}" font-size="7" font-weight="700">${lbl}</text>
      </g>`;
      let bars = '';
      for(let z=1; z<=4; z++) bars += hZoneRocker(24, 114 + (z-1)*20, 72, 15, z, String(z), az===z, p);
      return `<svg viewBox="0 0 120 272" width="${Math.round(120*sc)}" height="${Math.round(272*sc)}">
        <rect x="14" y="6" width="92" height="260" rx="14" fill="#262a33" stroke="#3f4654" stroke-width="2"/>
        ${keyBox(24, 26, 33, 16, 'ON', 'zone_on', p, {zone:0, fs:7.5})}
        ${keyBox(63, 26, 33, 16, 'OFF', 'zone_off', p, {zone:0, fs:7.5})}
        ${dm(40, 62, '◐-', 'kelvin')}${dm(80, 62, '⊕+', 'kelvin')}
        ${dm(60, 76, 'S1', 'mode')}
        ${dm(40, 90, '☀-', 'brightness')}${dm(80, 90, '☀+', 'brightness')}
        ${bars}
        <text x="60" y="246" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="700">MiBOXER C1</text>
      </svg>`;
    }

    if(m.layout === 'c12'){
      return `<svg viewBox="0 0 120 272" width="${Math.round(120*sc)}" height="${Math.round(272*sc)}">
        <rect x="14" y="6" width="92" height="260" rx="14" fill="#262a33" stroke="#3f4654" stroke-width="2"/>
        <rect x="38" y="26" width="44" height="18" rx="2.5" fill="#181a20" stroke="#3f4654"/>
        <text x="60" y="39.5" text-anchor="middle" fill="#f97316" font-family="monospace" font-size="12" font-weight="800">100%</text>
        <!-- Recessed Mechanical Scroll Wheel -->
        <ellipse cx="60" cy="76" rx="13" ry="26" fill="#14171d" stroke="#3f4654"/>
        <rect class="mbx-hit" data-act="brightness" data-val="85" x="52" y="58" width="16" height="36" rx="6" fill="#272b34" stroke="#475569" style="cursor:pointer"/>
        ${[64,70,76,82,88].map(y=>`<line x1="54" y1="${y}" x2="66" y2="${y}" stroke="#525e73" stroke-width="1"/>`).join('')}
        <!-- 3 Dual-Button Pills -->
        ${keyBox(34, 116, 52, 16, 'ON        OFF', 'on', p, {rx:8, fs:6.8})}
        ${keyBox(34, 138, 52, 16, '1            2', 'zone', p, {zone:1, rx:8, fs:7})}
        ${keyBox(34, 160, 52, 16, '3            4', 'zone', p, {zone:3, rx:8, fs:7})}
        <text x="60" y="246" text-anchor="middle" fill="#cbd5e1" font-size="7.5" font-weight="700">MiBOXER C12</text>
      </svg>`;
    }

    // ---------------- 17. Y1 / Y2 / Y3 Vertical Desk Stand Remotes ----------------
    if(m.layout === 'y_desk'){
      let vbars = '';
      for(let i=0; i<22; i++){
        const y = 34 + i*4.3;
        if(m.kind === 'y1'){
          vbars += `<rect class="mbx-hit" data-act="brightness" x="54" y="${y}" width="16" height="2.6" fill="#cbd5e1" opacity="${(1-i*0.035).toFixed(2)}" style="cursor:pointer"/>`;
        } else {
          const leftCol = m.kind === 'y3' ? `hsl(${i*16},85%,55%)` : (i<11 ? '#7dd3fc' : '#fde047');
          vbars += `<rect class="mbx-hit" data-act="${m.kind==='y3'?'hue':'kelvin'}" x="36" y="${y}" width="15" height="2.6" fill="${leftCol}" style="cursor:pointer"/>`;
          vbars += `<rect class="mbx-hit" data-act="brightness" x="73" y="${y}" width="15" height="2.6" fill="#cbd5e1" opacity="${(1-i*0.035).toFixed(2)}" style="cursor:pointer"/>`;
        }
      }
      let zCols = '';
      for(let z=1; z<=3; z++) zCols += vZoneRocker(24 + (z-1)*30, 192, 18, 42, z, String(z), az===z, p);
      return `<svg viewBox="0 0 124 268" width="${Math.round(124*sc)}" height="${Math.round(268*sc)}">
        <rect x="12" y="6" width="100" height="256" rx="6" fill="#181b22" stroke="#3b4252" stroke-width="2"/>
        <rect x="57" y="16" width="10" height="3" rx="1.5" fill="#64748b"/>
        ${vbars}
        ${keyBox(24, 142, 22, 15, 'ON', 'zone_on', p, {zone:0, fs:7})}
        ${m.kind==='y3' ? keyBox(51, 142, 22, 15, 'W', 'set_white', p, {fs:7}) : ''}
        ${keyBox(78, 142, 22, 15, 'OFF', 'zone_off', p, {zone:0, fs:7})}
        ${keyBox(24, 164, 22, 15, m.kind==='y3'?'S-/◐':'1␣', 'mode', p, {fs:6.8})}
        ${keyBox(51, 164, 22, 15, m.kind==='y3'?'M':'2␣', 'mode', p, {fs:7})}
        ${keyBox(78, 164, 22, 15, m.kind==='y3'?'S+/⊕':'3␣', 'mode', p, {fs:6.8})}
        ${zCols}
        <text x="62" y="252" text-anchor="middle" fill="#cbd5e1" font-size="7" font-weight="700">MiBOXER ${m.id}</text>
      </svg>`;
    }

    // ---------------- 18. S2 / S2W+ / S1 / S1W+ / FUT087 Touch Pucks (White & Black) ----------------
    if(m.layout === 's_puck' || m.layout === 'fut087'){
      if(m.layout === 'fut087'){
        return `<svg viewBox="0 0 190 190" width="${Math.round(190*sc)}" height="${Math.round(190*sc)}">
          <circle cx="95" cy="95" r="85" fill="${p.body}" stroke="${p.bezel}" stroke-width="2.5"/>
          <path class="mbx-hit" data-act="brightness" data-val="80" d="M 48 148 A 68 68 0 1 1 142 148" fill="none" stroke="${p.b?'#94a3b8':'#52525b'}" stroke-width="7" stroke-linecap="round" style="cursor:pointer"/>
          <text x="58" y="162" fill="${p.txt}" font-size="8">☀</text><text x="126" y="163" fill="${p.txt}" font-size="11">☀</text>
          <circle cx="95" cy="95" r="52" fill="${p.glass}" stroke="${p.bezel}"/>
          ${keyBox(67, 62, 56, 22, 'ON', 'on', p, {rx:11, fs:9})}
          ${keyBox(67, 102, 56, 22, 'OFF', 'off', p, {rx:11, fs:9})}
          <text x="95" y="140" text-anchor="middle" fill="${p.mut}" font-size="7.5" font-weight="800">MiBOXER®</text>
        </svg>`;
      }
      const isS2 = m.kind === 's2';
      const arcStroke = isS2 ? `url(#hrgb_${u})` : `url(#cct_${u})`;
      const upperArc = m.multi
        ? `<path class="mbx-hit" data-act="${isS2?'hue':'kelvin'}" d="M 28 104 A 68 68 0 1 1 162 104" fill="none" stroke="${arcStroke}" stroke-width="9" stroke-linecap="round" style="cursor:pointer"/>
           <path d="M 30 112 A 68 68 0 0 0 160 112" fill="none" stroke="#94a3b8" stroke-width="9" stroke-linecap="round"/>
           ${[['All',0,42,138],['1',1,66,158],['2',2,95,165],['3',3,124,158],['4',4,148,138]].map(([l,z,x,y])=>
             `<text class="mbx-hit" data-act="zone" data-zone="${z}" x="${x}" y="${y}" text-anchor="middle" fill="${az===z?'#0ea5e9':'#fff'}" font-size="8" font-weight="800" style="cursor:pointer">${l}</text>`
           ).join('')}`
        : `<path class="mbx-hit" data-act="${isS2?'hue':'kelvin'}" d="M 46 146 A 68 68 0 1 1 144 146" fill="none" stroke="${arcStroke}" stroke-width="8.5" stroke-linecap="round" style="cursor:pointer"/>
           <text x="55" y="160" fill="${p.mut}" font-size="7.5">☀</text><text x="128" y="161" fill="${p.txt}" font-size="10">☀</text>`;

      const centerBtns = isS2
        ? `<text class="mbx-hit" data-act="on" x="76" y="74" text-anchor="middle" fill="${p.txt}" font-size="9" font-weight="700" style="cursor:pointer">ON</text>
           <text class="mbx-hit" data-act="off" x="114" y="74" text-anchor="middle" fill="${p.txt}" font-size="9" font-weight="700" style="cursor:pointer">OFF</text>
           <text class="mbx-hit" data-act="brightness" x="66" y="103" text-anchor="middle" fill="${p.txt}" font-size="11" style="cursor:pointer">☀</text>
           <text class="mbx-hit" data-act="mode" x="124" y="103" text-anchor="middle" fill="${p.txt}" font-size="10" style="cursor:pointer">🎨</text>
           <text class="mbx-hit" data-act="set_white" x="95" y="128" text-anchor="middle" fill="${p.txt}" font-size="9" font-weight="700" style="cursor:pointer">W</text>`
        : `<text class="mbx-hit" data-act="on" x="95" y="68" text-anchor="middle" fill="${p.txt}" font-size="9" font-weight="700" style="cursor:pointer">ON</text>
           <text class="mbx-hit" data-act="brightness" x="66" y="99" text-anchor="middle" fill="${p.txt}" font-size="8.5" font-weight="700" style="cursor:pointer">DIM</text>
           <text class="mbx-hit" data-act="kelvin" x="124" y="99" text-anchor="middle" fill="${p.txt}" font-size="8.5" font-weight="700" style="cursor:pointer">CCT</text>
           <text class="mbx-hit" data-act="off" x="95" y="128" text-anchor="middle" fill="${p.txt}" font-size="9" font-weight="700" style="cursor:pointer">OFF</text>`;

      return `<svg viewBox="0 0 190 190" width="${Math.round(190*sc)}" height="${Math.round(190*sc)}">
        ${sharedDefs(u)}
        <circle cx="95" cy="95" r="85" fill="${p.body}" stroke="${p.bezel}" stroke-width="2.5"/>
        ${upperArc}
        <circle cx="95" cy="95" r="50" fill="${p.glass}" stroke="${p.keyStr}" stroke-width="1"/>
        ${centerBtns}
      </svg>`;
    }

    // ---------------- 19. K6 / K5 Display Knobs, K0 / K0S, K3 / K3S, K2 / K2S, K1 ----------------
    if(m.layout === 'k_display'){
      const isK6 = m.kind === 'k6';
      return `<svg viewBox="0 0 190 190" width="${Math.round(190*sc)}" height="${Math.round(190*sc)}">
        <circle cx="95" cy="95" r="84" fill="#14171d" stroke="#334155" stroke-width="3.5"/>
        ${isK6 ? colorRing(95, 95, 75, 5) : `<circle cx="95" cy="95" r="75" fill="none" stroke="#334155" stroke-width="1.5"/>`}
        <text x="95" y="68" text-anchor="middle" fill="#f97316" font-family="monospace" font-size="19" font-weight="800">100%</text>
        <text class="mbx-hit" data-act="on" x="95" y="102" text-anchor="middle" fill="#fff" font-size="18" style="cursor:pointer">⏻</text>
        <text class="mbx-hit" data-act="brightness" x="62" y="50" text-anchor="middle" fill="#e2e8f0" font-size="11" style="cursor:pointer">☀</text>
        <text class="mbx-hit" data-act="kelvin" x="128" y="50" text-anchor="middle" fill="#e2e8f0" font-size="7.5" font-weight="700" style="cursor:pointer">CCT</text>
        <text class="mbx-hit" data-act="mode" x="40" y="99" text-anchor="middle" fill="#e2e8f0" font-size="9" style="cursor:pointer">${isK6?'🎨':'1␣'}</text>
        <text class="mbx-hit" data-act="saturation" x="150" y="99" text-anchor="middle" fill="#e2e8f0" font-size="9" style="cursor:pointer">${isK6?'◐':'4␣'}</text>
        <text class="mbx-hit" data-act="mode" x="64" y="146" text-anchor="middle" fill="#e2e8f0" font-size="9" font-weight="700" style="cursor:pointer">${isK6?'M':'2␣'}</text>
        <text class="mbx-hit" data-act="mode" x="126" y="146" text-anchor="middle" fill="#e2e8f0" font-size="9" font-weight="700" style="cursor:pointer">${isK6?'1␣':'3␣'}</text>
        <text x="95" y="126" text-anchor="middle" fill="#cbd5e1" font-size="7" font-weight="800">MiBOXER</text>
      </svg>`;
    }

    if(m.layout === 'k0'){
      const cLbl = m.zonesMode ? ['1 ZONE','2 ZONE','3 ZONE','4 ZONE'] : ['1␣','2␣','3␣','4␣'];
      return `<svg viewBox="0 0 200 200" width="${Math.round(200*sc)}" height="${Math.round(200*sc)}">
        <rect x="10" y="10" width="180" height="180" rx="10" fill="#1c1f26" stroke="#384152" stroke-width="2"/>
        <line x1="10" y1="100" x2="190" y2="100" stroke="#0f1115" stroke-width="2"/>
        <text class="mbx-hit" data-act="zone" data-zone="1" x="36" y="34" text-anchor="middle" fill="#94a3b8" font-size="8" font-weight="700" style="cursor:pointer">${cLbl[0]}</text>
        <text class="mbx-hit" data-act="zone" data-zone="2" x="164" y="34" text-anchor="middle" fill="#94a3b8" font-size="8" font-weight="700" style="cursor:pointer">${cLbl[1]}</text>
        <text class="mbx-hit" data-act="zone" data-zone="3" x="36" y="172" text-anchor="middle" fill="#94a3b8" font-size="8" font-weight="700" style="cursor:pointer">${cLbl[2]}</text>
        <text class="mbx-hit" data-act="zone" data-zone="4" x="164" y="172" text-anchor="middle" fill="#94a3b8" font-size="8" font-weight="700" style="cursor:pointer">${cLbl[3]}</text>
        <circle class="mbx-hit" data-act="on" cx="100" cy="100" r="44" fill="#232730" stroke="#0f1115" stroke-width="2.5" style="cursor:pointer"/>
        <text x="100" y="105" text-anchor="middle" fill="#94a3b8" font-size="14" pointer-events="none">${m.zonesMode?'◐':'⏻'}</text>
        <text x="100" y="174" text-anchor="middle" fill="#64748b" font-size="8" font-weight="800">MiBOXER®</text>
      </svg>`;
    }

    if(m.layout === 'k3'){
      let ticks = '';
      for(let i=0; i<12; i++){
        const a = (i*30)*Math.PI/180;
        ticks += `<line class="mbx-hit" data-act="brightness" x1="${(100+46*Math.cos(a)).toFixed(1)}" y1="${(100+46*Math.sin(a)).toFixed(1)}" x2="${(100+56*Math.cos(a)).toFixed(1)}" y2="${(100+56*Math.sin(a)).toFixed(1)}" stroke="#475569" stroke-width="2" stroke-linecap="round" style="cursor:pointer"/>`;
      }
      return `<svg viewBox="0 0 200 200" width="${Math.round(200*sc)}" height="${Math.round(200*sc)}">
        ${m.square ? `<rect x="10" y="10" width="180" height="180" rx="8" fill="#252830" stroke="#3f4654" stroke-width="2"/>` : ''}
        <circle cx="100" cy="100" r="64" fill="#1e2128" stroke="#111318" stroke-width="2.5"/>
        ${ticks}
        <circle class="mbx-hit" data-act="on" cx="100" cy="100" r="36" fill="#262a33" stroke="#111318" stroke-width="1.8" style="cursor:pointer"/>
        <text x="100" y="106" text-anchor="middle" fill="#94a3b8" font-size="16" pointer-events="none">⏻</text>
        ${m.square ? `<text x="100" y="182" text-anchor="middle" fill="#94a3b8" font-size="8" font-weight="800">MiBOXER®</text>` : ''}
      </svg>`;
    }

    if(m.layout === 'k2'){
      return `<svg viewBox="0 0 200 200" width="${Math.round(200*sc)}" height="${Math.round(200*sc)}">
        ${m.plate ? `<rect x="10" y="10" width="180" height="180" rx="6" fill="${p.body}" stroke="${p.bezel}" stroke-width="2"/>` : ''}
        <circle cx="100" cy="96" r="${m.plate?64:80}" fill="${p.glass}" stroke="${p.bezel}" stroke-width="2"/>
        <text class="mbx-hit" data-act="brightness" data-val="100" x="100" y="${m.plate?52:42}" text-anchor="middle" fill="${p.txt}" font-size="8.5" font-weight="700" style="cursor:pointer">DIM+</text>
        <text class="mbx-hit" data-act="brightness" data-val="15" x="100" y="${m.plate?146:156}" text-anchor="middle" fill="${p.txt}" font-size="8.5" font-weight="700" style="cursor:pointer">DIM-</text>
        <text class="mbx-hit" data-act="kelvin" data-val="10" x="${m.plate?52:42}" y="99" text-anchor="middle" fill="${p.txt}" font-size="8.5" font-weight="700" style="cursor:pointer">CCT-</text>
        <text class="mbx-hit" data-act="kelvin" data-val="90" x="${m.plate?148:158}" y="99" text-anchor="middle" fill="${p.txt}" font-size="8.5" font-weight="700" style="cursor:pointer">CCT+</text>
        <circle class="mbx-hit" data-act="on" cx="100" cy="96" r="26" fill="${p.body}" stroke="${p.keyStr}" style="cursor:pointer"/>
        <text x="100" y="102" text-anchor="middle" fill="${p.txt}" font-size="15" pointer-events="none">⏻</text>
        ${m.plate ? `<text x="100" y="182" text-anchor="middle" fill="${p.mut}" font-size="8" font-weight="800">MiBOXER®</text>` : ''}
      </svg>`;
    }

    // K1 Square Minimalist Knob
    return `<svg viewBox="0 0 200 200" width="${Math.round(200*sc)}" height="${Math.round(200*sc)}">
      <rect x="12" y="12" width="176" height="176" rx="10" fill="#e5e7eb" stroke="#cbd5e1" stroke-width="2"/>
      <circle class="mbx-hit" data-act="on" cx="100" cy="96" r="52" fill="#f3f4f6" stroke="#d1d5db" stroke-width="2.5" style="cursor:pointer"/>
      <text x="100" y="174" text-anchor="middle" fill="#6b7280" font-size="8.5" font-weight="800">MiBOXER®</text>
    </svg>`;
  }


// === MIBOXER_FACIA_EXTENSION_START ===
  const CAPACITIVE_LAYOUTS = new Set(['b8', 'b_strip', 'b0', 'b5', 'u_panel', 'm4']);

  function isCapacitiveFlatPanel(modelOrId) {
    const m = typeof modelOrId === 'string' ? (MODELS.find(x => x.id === modelOrId) || {}) : (modelOrId || {});
    return (m.cat === 'panel' || m.isCustom) && CAPACITIVE_LAYOUTS.has(m.layout);
  }

  function getPhysicalDims(modelOrId) {
    const m = typeof modelOrId === 'string' ? (MODELS.find(x => x.id === modelOrId) || { id: modelOrId }) : (modelOrId || {});
    const layout = m.layout || '';
    if (layout === 'b8') return { width_mm: 106, height_mm: 146, glass_w_mm: 100, glass_h_mm: 140, corner_mm: 4.5, led_x_pct: 50, led_y_pct: 7.5, mount: 'EU/AU Portrait Glass Wall Panel' };
    if (layout === 'u_panel') return { width_mm: 70, height_mm: 114, glass_w_mm: 65, glass_h_mm: 109, corner_mm: 4.0, led_x_pct: 50, led_y_pct: 8.5, mount: 'US Single-Gang Glass Wall Panel' };
    if (layout === 'm4') return { width_mm: 142, height_mm: 86, glass_w_mm: 136, glass_h_mm: 80, corner_mm: 4.0, led_x_pct: 8.5, led_y_pct: 11, mount: 'Italian 503/504 Landscape Glass Panel' };
    if (layout === 'b_strip' || layout === 'b0' || layout === 'b5') return { width_mm: 86, height_mm: 86, glass_w_mm: 81, glass_h_mm: 81, corner_mm: 4.0, led_x_pct: 50, led_y_pct: 8.0, mount: '86x86mm Square Glass Wall Panel' };
    return { width_mm: 86, height_mm: 86, glass_w_mm: 80, glass_h_mm: 80, corner_mm: 4.0, mount: 'Standard Panel' };
  }

  // Standardized 24x24 Architectural Vector Icons: Rooms (Group A) + Devices & Controls (Group B)
  const FACIA_ICONS = {
    none:       { group: 'basic',  name: 'No Icon (Text Only)', svg: '' },
    // --- Standardized Room Icons (for Multi-Zone Remotes) ---
    home_all:   { group: 'room',   name: 'Whole Home / All', svg: '<path d="M3 10.5L12 3l9 7.5V20a1 1 0 0 1-1 1h-5.5v-6h-5v6H4a1 1 0 0 1-1-1v-9.5z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/>' },
    sofa:       { group: 'room',   name: 'Living / Lounge', svg: '<path d="M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3m-16 0h18v5H3v-5zm2 5v2.5m14-2.5v2.5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>' },
    kitchen:    { group: 'room',   name: 'Kitchen', svg: '<rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke="currentColor" stroke-width="1.9"/><line x1="4" y1="10" x2="20" y2="10" stroke="currentColor" stroke-width="1.8"/><circle cx="8" cy="7" r="1" fill="currentColor"/><circle cx="12" cy="7" r="1" fill="currentColor"/><line x1="9" y1="13" x2="15" y2="13" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>' },
    dining:     { group: 'room',   name: 'Dining Room', svg: '<path d="M7 3v7a2 2 0 0 0 4 0V3M9 3v18m8-18c-2.2 2-2.2 6 0 8v10" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>' },
    bed:        { group: 'room',   name: 'Master Bedroom', svg: '<path d="M3 7v11m0-4h18m0 4v-7a2 2 0 0 0-2-2h-8v5M7 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>' },
    bed_single: { group: 'room',   name: 'Bedroom 2 / Guest', svg: '<path d="M4 9v9m16-7v7M4 14h16M6 14v-3a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>' },
    bath:       { group: 'room',   name: 'Bathroom / Ensuite', svg: '<path d="M4 12h16v3a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-3zm2-6a2 2 0 0 1 4 0v1M6 12V6m2 13v2m8-2v2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>' },
    desk:       { group: 'room',   name: 'Study / Office', svg: '<rect x="4" y="4" width="16" height="10" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M12 14v4m-4 0h8M3 20h18" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>' },
    stairs:     { group: 'room',   name: 'Hallway / Stairs', svg: '<path d="M4 19h4v-4h4v-4h4V7h4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' },
    garden:     { group: 'room',   name: 'Patio / Outdoor', svg: '<path d="M12 21v-8m0 0C8 13 6 9.5 6 6c3.5 0 6 2 6 7zm0 0c4 0 6-3.5 6-7-3.5 0-6 2-6 7z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>' },
    tv:         { group: 'room',   name: 'Cinema / Media', svg: '<rect x="3" y="5" width="18" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M8 21h8m-4-4v4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>' },
    garage:     { group: 'room',   name: 'Garage / Entry', svg: '<path d="M3 10L12 4l9 6v10H3V10zm3 3h12m-12 3.5h12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>' },

    // --- Multi-Function Room Devices (Tap = +1 Step Cycle, Hold = ON/OFF Toggle) ---
    fan:        { group: 'device', name: 'Ceiling Fan (1-6 / Hold)', svg: '<circle cx="12" cy="12" r="2" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M12 10c-2-3.5 1-6.5 3.5-5 1.8 1 .8 4-1.5 5m2 2c3.5-2 6.5 1 5 3.5-1 1.8-4 .8-5-1.5m-2 2c2 3.5-1 6.5-3.5 5-1.8-1-.8-4 1.5-5m-2-2c-3.5 2-6.5-1-5-3.5 1-1.8 4-.8 5 1.5" fill="none" stroke="currentColor" stroke-width="1.85" stroke-linecap="round"/>' },
    blinds:     { group: 'device', name: 'Roller Blinds (Step / Hold)', svg: '<path d="M4 4h16M5 8h14M5 12h14M5 16h14M12 16v4m-2 0h4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>' },
    curtains:   { group: 'device', name: 'Motor Curtains', svg: '<path d="M3 4h18M5 4c0 6 3 9 3 16M19 4c0 6-3 9-3 16M5 13h3m8 0h3" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>' },
    ac:         { group: 'device', name: 'AC / Climate', svg: '<path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9M9.5 5L12 7.5 14.5 5M9.5 19L12 16.5 14.5 19" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>' },
    heater:     { group: 'device', name: 'Heater / Towel Rail', svg: '<path d="M7 20V6a2 2 0 0 1 4 0v14a2 2 0 0 0 4 0V6a2 2 0 0 1 4 0v14" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>' },
    speaker:    { group: 'device', name: 'Sonos / Audio', svg: '<rect x="6" y="3" width="12" height="18" rx="2" fill="none" stroke="currentColor" stroke-width="1.9"/><circle cx="12" cy="14.5" r="3" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="7.5" r="1" fill="currentColor"/>' },
    music:      { group: 'device', name: 'Music / Playlist', svg: '<path d="M9 18V6l11-2v12" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="6.5" cy="18" r="2.4" fill="none" stroke="currentColor" stroke-width="1.9"/><circle cx="17.5" cy="16" r="2.4" fill="none" stroke="currentColor" stroke-width="1.9"/>' },
    pendant:    { group: 'device', name: 'Pendant / Chandelier', svg: '<path d="M12 3v5m-6 6a6 6 0 0 1 12 0H6zm4 0a2 2 0 0 0 4 0" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>' },
    downlight:  { group: 'device', name: 'Recessed Downlights', svg: '<ellipse cx="12" cy="8" rx="7" ry="3" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M8 13l-2 5m6-4v5m4-6l2 5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>' },
    strip:      { group: 'device', name: 'LED Cove / Strip', svg: '<rect x="3" y="9" width="18" height="6" rx="2" fill="none" stroke="currentColor" stroke-width="1.9"/><circle cx="7.5" cy="12" r="1" fill="currentColor"/><circle cx="12" cy="12" r="1" fill="currentColor"/><circle cx="16.5" cy="12" r="1" fill="currentColor"/>' },
    lamp:       { group: 'device', name: 'Floor / Reading Lamp', svg: '<path d="M7 4h10l2.5 7h-15L7 4zm5 7v9m-4 0h8" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>' },
    bulb:       { group: 'device', name: 'Smart Bulb', svg: '<path d="M9 18h6m-5 3h4M12 3a6 6 0 0 0-3.8 10.6c.7.6 1.3 1.5 1.5 2.4h4.6c.2-.9.8-1.8 1.5-2.4A6 6 0 0 0 12 3z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>' },
    extractor:  { group: 'device', name: 'Exhaust / Ventilation', svg: '<rect x="4" y="4" width="16" height="16" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M12 7.5v9M7.5 12h9" stroke="currentColor" stroke-width="1.6"/>' },
    power:      { group: 'device', name: 'Master Power', svg: '<path d="M12 3v9m6.36-5.36a9 9 0 1 1-12.73 0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>' },
    sun:        { group: 'device', name: 'Bright / Daylight', svg: '<circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v2.5M12 19.5V22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M2 12h2.5M19.5 12H22M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>' },
    moon:       { group: 'device', name: 'Night / Sleep', svg: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linejoin="round"/>' },
    sparkles:   { group: 'device', name: 'Scene / Mood', svg: '<path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3zm6 12l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9L18 15z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/>' },
    coffee:     { group: 'device', name: 'Morning Scene', svg: '<path d="M17 8h1a3 3 0 0 1 0 6h-1M5 8h12v6a5 5 0 0 1-5 5H10a5 5 0 0 1-5-5V8zm-1 13h14" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/>' },
    timer:      { group: 'device', name: 'Delay Off / Timer', svg: '<circle cx="12" cy="13" r="8" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M12 9v4l2.5 2M9.5 2h5" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>' },
    lock:       { group: 'device', name: 'Away / Lock', svg: '<rect x="5" y="11" width="14" height="9" rx="2" fill="none" stroke="currentColor" stroke-width="1.9"/><path d="M8 11V7a4 4 0 0 1 8 0v4" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"/>' },
    warm_cool:  { group: 'device', name: 'Warm / Cool CCT', svg: '<path d="M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16zm0 0v16" fill="none" stroke="currentColor" stroke-width="1.9"/>' }
  };

  const FACIA_THEMES = {
    pure_white:      { name: 'Pure White Architectural',  bg: '#f1f5f9', glass: '#ffffff', bezel: '#cbd5e1', padFill: '#f8fafc', padStroke: '#cbd5e1', ink: '#0f172a', subInk: '#64748b', accent: '#0284c7', mono: false },
    matte_black:     { name: 'Matte Black Glass',         bg: '#0f1115', glass: '#171a21', bezel: '#2d3340', padFill: '#212631', padStroke: '#384152', ink: '#f8fafc', subInk: '#94a3b8', accent: '#38bdf8', mono: false },
    ink_bw:          { name: 'Crisp B&W Stencil (Print)', bg: '#ffffff', glass: '#ffffff', bezel: '#0f172a', padFill: '#ffffff', padStroke: '#0f172a', ink: '#000000', subInk: '#334155', accent: '#000000', mono: true },
    reverse_bw:      { name: 'White Ink on Black Vinyl',  bg: '#000000', glass: '#09090b', bezel: '#ffffff', padFill: '#121215', padStroke: '#d4d4d8', ink: '#ffffff', subInk: '#a1a1aa', accent: '#ffffff', mono: true },
    grayscale_slate: { name: 'Soft Grayscale Slate',      bg: '#e4e4e7', glass: '#f4f4f5', bezel: '#a1a1aa', padFill: '#ffffff', padStroke: '#a1a1aa', ink: '#18181b', subInk: '#52525b', accent: '#27272a', mono: true },
    warm_stone:      { name: 'Warm Travertine / Linen',   bg: '#e7e2d8', glass: '#f7f4ee', bezel: '#c7beae', padFill: '#efeae0', padStroke: '#c7beae', ink: '#292524', subInk: '#57534e', accent: '#b45309', mono: false },
    charcoal_brass:  { name: 'Charcoal & Brushed Brass',  bg: '#161618', glass: '#1e1e22', bezel: '#856a3f', padFill: '#26252b', padStroke: '#a18049', ink: '#fef3c7', subInk: '#d6c7a9', accent: '#eab308', mono: false }
  };

  function polarPt(cx, cy, r, deg) {
    const rad = ((deg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function ringWedgePath(cx, cy, rIn, rOut, startDeg, endDeg) {
    const p1 = polarPt(cx, cy, rOut, endDeg), p2 = polarPt(cx, cy, rOut, startDeg);
    const p3 = polarPt(cx, cy, rIn, startDeg), p4 = polarPt(cx, cy, rIn, endDeg);
    const lg = endDeg - startDeg <= 180 ? '0' : '1';
    return `M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${rOut.toFixed(2)} ${rOut.toFixed(2)} 0 ${lg} 0 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)} L ${p3.x.toFixed(2)} ${p3.y.toFixed(2)} A ${rIn.toFixed(2)} ${rIn.toFixed(2)} 0 ${lg} 1 ${p4.x.toFixed(2)} ${p4.y.toFixed(2)} Z`;
  }

  function escXml(s) {
    return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  // Exact hardware stencil geometry for every capacitive flat panel layout!
  function getPanelBlueprint(model) {
    const m = typeof model === 'string' ? (MODELS.find(x => x.id === model) || MODELS[0]) : (model || MODELS[0]);
    if (m.layout === 'b8') {
      const slots = [
        { key: 'sat_bar', type: 'vbar', surf: 'sat_bar', act: 'saturation', x: 23, y: 42, w: 15, h: 86, label: 'SAT' },
        { key: 'hue_ring', type: 'ring', surf: 'hue_ring', act: 'hue', cx: 95, cy: 85, rIn: 21, rOut: 43, label: 'COLOR' },
        { key: 'center_w', type: 'circle', act: 'set_white', cx: 95, cy: 85, r: 14.5, label: 'W' },
        { key: 'bri_bar', type: 'vbar', surf: 'bri_bar', act: 'brightness', x: 152, y: 42, w: 15, h: 86, label: 'DIM' }
      ];
      [['btn_on','ON','on'],['btn_off','OFF','off'],['btn_sdn','S-','mode_speed_down'],['btn_m','M','mode'],['btn_sup','S+','mode_speed_up']].forEach(([k,l,a], i) => {
        slots.push({ key: k, type: 'rect', act: a, x: 21 + i * 30.5, y: 146, w: 26.5, h: 19, rx: 3.5, label: l });
      });
      const r1 = [['zone_0','All',0,'zone'],['zone_1','1',1,'zone'],['zone_2','2',2,'zone'],['zone_3','3',3,'zone'],['zone_4','4',4,'zone']];
      const r2 = [['btn_60s','60S',null,'night_mode','Delay'],['zone_5','5',5,'zone'],['zone_6','6',6,'zone'],['zone_7','7',7,'zone'],['zone_8','8',8,'zone']];
      [r1, r2].forEach((row, ri) => {
        row.forEach(([k, lbl, z, act, sub], ci) => {
          slots.push({ key: k, type: 'circle', act, zone: z, cx: 34 + ci * 30.5, cy: 185 + ri * 31.5, r: 12.6, label: lbl, sublabel: sub || '' });
        });
      });
      return { vw: 190, vh: 250, outer: { x: 4, y: 4, w: 182, h: 242, rx: 8 }, glass: { x: 9, y: 9, w: 172, h: 232, rx: 5 }, titleY: 24, slots };
    }

    if (m.layout === 'b0') {
      const slots = [
        { key: 'sat_bar', type: 'vbar', surf: 'sat_bar', act: 'saturation', x: 28, y: 43, w: 15, h: 80, label: 'CCT' },
        { key: 'hue_ring', type: 'ring', surf: 'hue_ring', act: 'hue', cx: 105, cy: 83, rIn: 19.5, rOut: 41, label: 'COLOR' },
        { key: 'center_w', type: 'circle', act: 'set_white', cx: 105, cy: 83, r: 14, label: 'W' },
        { key: 'bri_bar', type: 'vbar', surf: 'bri_bar', act: 'brightness', x: 167, y: 43, w: 15, h: 80, label: 'DIM' },
        { key: 'btn_on',  type: 'rect', act: 'on',  x: 26,  y: 137, w: 35, h: 21, rx: 4, label: 'ON' },
        { key: 'btn_r',   type: 'rect', act: 'hue', val: 0,   x: 68,  y: 137, w: 35, h: 21, rx: 4, label: 'R' },
        { key: 'btn_g',   type: 'rect', act: 'hue', val: 120, x: 110, y: 137, w: 35, h: 21, rx: 4, label: 'G' },
        { key: 'btn_b',   type: 'rect', act: 'hue', val: 240, x: 152, y: 137, w: 35, h: 21, rx: 4, label: 'B' },
        { key: 'btn_off', type: 'rect', act: 'off', x: 26,  y: 164, w: 35, h: 21, rx: 4, label: 'OFF' },
        { key: 'btn_m',   type: 'rect', act: 'mode', x: 68, y: 164, w: 35, h: 21, rx: 4, label: 'M' },
        { key: 'btn_sdn', type: 'rect', act: 'mode_speed_down', x: 110, y: 164, w: 35, h: 21, rx: 4, label: 'S-', sublabel: '60s' },
        { key: 'btn_sup', type: 'rect', act: 'mode_speed_up',   x: 152, y: 164, w: 35, h: 21, rx: 4, label: 'S+', sublabel: '10m' }
      ];
      return { vw: 210, vh: 210, outer: { x: 6, y: 6, w: 198, h: 198, rx: 11 }, glass: { x: 11, y: 11, w: 188, h: 188, rx: 8 }, titleY: 27, slots };
    }

    if (m.layout === 'b_strip') {
      const slots = [];
      if (m.kind === 'b1') {
        slots.push({ key: 'bri_bar', type: 'hbar', surf: 'bri_bar', act: 'brightness', x: 26, y: 52, w: 158, h: 20, label: 'DIMMER' });
      } else if (m.kind === 'b2') {
        slots.push({ key: 'cct_bar', type: 'hbar', surf: 'cct_bar', act: 'kelvin', x: 26, y: 40, w: 158, h: 18, label: 'CCT' });
        slots.push({ key: 'bri_bar', type: 'hbar', surf: 'bri_bar', act: 'brightness', x: 26, y: 68, w: 158, h: 18, label: 'DIM' });
      } else if (m.kind === 'b3') {
        slots.push({ key: 'hue_ring', type: 'hbar', surf: 'hue_ring', act: 'hue', x: 26, y: 40, w: 158, h: 18, label: 'COLOR' });
        slots.push({ key: 'bri_bar',  type: 'hbar', surf: 'bri_bar',  act: 'brightness', x: 26, y: 68, w: 158, h: 18, label: 'DIM' });
      } else {
        // B4 / T4
        slots.push({ key: 'hue_ring', type: 'hbar', surf: 'hue_ring', act: 'hue', x: 26, y: 39, w: 158, h: 18, label: 'COLOR' });
        slots.push({ key: 'cct_bar',  type: 'hbar', surf: 'cct_bar',  act: 'kelvin', x: 26, y: 66, w: 75, h: 18, label: 'CCT' });
        slots.push({ key: 'bri_bar',  type: 'hbar', surf: 'bri_bar',  act: 'brightness', x: 109, y: 66, w: 75, h: 18, label: 'DIM' });
      }
      if (m.kind === 'b1' || m.kind === 'b2') {
        slots.push({ key: 'btn_on',  type: 'rect', act: 'on', x: 26, y: 98, w: 46, h: 24, rx: 4, label: 'ON' });
        slots.push({ key: 'btn_60s', type: 'rect', act: 'night_mode', x: 82, y: 98, w: 46, h: 24, rx: 4, label: '60S', sublabel: 'Delay' });
        slots.push({ key: 'btn_off', type: 'rect', act: 'off', x: 138, y: 98, w: 46, h: 24, rx: 4, label: 'OFF' });
        for (let z = 1; z <= 4; z++) {
          slots.push({ key: `zone_${z}`, type: 'rocker', act: 'zone', zone: z, x: 26 + (z - 1) * 43, y: 134, w: 29, h: 52, rx: 6, label: `${z}` });
        }
      } else {
        [['btn_w','White','set_white'],['btn_m','Mode','mode'],['btn_sdn','Spd-','mode_speed_down'],['btn_sup','Spd+','mode_speed_up']].forEach(([k,l,a], i) => {
          slots.push({ key: k, type: 'rect', act: a, x: 26 + i * 41, y: 98, w: 35, h: 21, rx: 4, label: l });
        });
        [['zone_0','All',0],['zone_1','1',1],['zone_2','2',2],['zone_3','3',3],['zone_4','4',4]].forEach(([k,l,z], i) => {
          slots.push({ key: k, type: 'rocker', act: 'zone', zone: z, x: 26 + i * 33.5, y: 132, w: 24, h: 54, rx: 5, label: l });
        });
      }
      return { vw: 210, vh: 210, outer: { x: 6, y: 6, w: 198, h: 198, rx: 11 }, glass: { x: 11, y: 11, w: 188, h: 188, rx: 8 }, titleY: 27, slots };
    }

    if (m.layout === 'u_panel') {
      const slots = [];
      if (m.kind === 'u1') {
        slots.push({ key: 'bri_bar', type: 'hbar', surf: 'bri_bar', act: 'brightness', x: 24, y: 56, w: 122, h: 20, label: 'DIM' });
      } else if (m.kind === 'u2') {
        slots.push({ key: 'cct_bar', type: 'hbar', surf: 'cct_bar', act: 'kelvin', x: 24, y: 40, w: 122, h: 18, label: 'CCT' });
        slots.push({ key: 'bri_bar', type: 'hbar', surf: 'bri_bar', act: 'brightness', x: 24, y: 68, w: 122, h: 18, label: 'DIM' });
      } else {
        slots.push({ key: 'hue_ring', type: 'hbar', surf: 'hue_ring', act: 'hue', x: 24, y: 40, w: 122, h: 18, label: 'COLOR' });
        slots.push({ key: 'bri_bar',  type: 'hbar', surf: 'bri_bar',  act: 'brightness', x: 24, y: 68, w: 122, h: 18, label: 'DIM' });
      }
      const mid = m.kind === 'u3' ? ['btn_w','W','set_white'] : ['btn_60s','60S','night_mode'];
      const r2 = m.kind === 'u3' ? [['btn_sdn','S-','mode_speed_down'],['btn_m','M','mode'],['btn_sup','S+','mode_speed_up']] : [['btn_s1','S1','mode'],['btn_s2','S2','mode'],['btn_s3','S3','mode']];
      slots.push({ key: 'btn_on', type: 'rect', act: 'on', x: 24, y: 100, w: 34, h: 22, rx: 4, label: 'ON' });
      slots.push({ key: mid[0],   type: 'rect', act: mid[2], x: 68, y: 100, w: 34, h: 22, rx: 4, label: mid[1] });
      slots.push({ key: 'btn_off',type: 'rect', act: 'off', x: 112, y: 100, w: 34, h: 22, rx: 4, label: 'OFF' });
      r2.forEach(([k,l,a], i) => slots.push({ key: k, type: 'rect', act: a, x: 24 + i * 44, y: 130, w: 34, h: 22, rx: 4, label: l }));
      for (let z = 1; z <= 3; z++) slots.push({ key: `zone_${z}`, type: 'rocker', act: 'zone', zone: z, x: 24 + (z - 1) * 44, y: 162, w: 34, h: 54, rx: 6, label: `${z}` });
      return { vw: 170, vh: 240, outer: { x: 8, y: 6, w: 154, h: 228, rx: 10 }, glass: { x: 13, y: 11, w: 144, h: 218, rx: 7 }, titleY: 26, slots };
    }

    if (m.layout === 'm4') {
      const slots = [
        { key: 'hue_ring', type: 'hbar', surf: 'hue_ring', act: 'hue', x: 20, y: 36, w: 196, h: 17, label: 'COLOR' },
        { key: 'cct_bar',  type: 'hbar', surf: 'cct_bar',  act: 'kelvin', x: 20, y: 61, w: 92, h: 18, label: 'CCT' },
        { key: 'bri_bar',  type: 'hbar', surf: 'bri_bar',  act: 'brightness', x: 124, y: 61, w: 92, h: 18, label: 'DIM' },
        { key: 'zone_0',   type: 'rocker', act: 'zone', zone: 0, x: 20, y: 94, w: 24, h: 72, rx: 4, label: 'All' }
      ];
      for (let z = 1; z <= 4; z++) slots.push({ key: `zone_${z}`, type: 'rocker', act: 'zone', zone: z, x: 20 + z * 29, y: 94, w: 24, h: 72, rx: 4, label: `${z}` });
      slots.push({ key: 'btn_w',   type: 'rect', act: 'set_white', x: 165, y: 94, w: 23, h: 34, rx: 4, label: 'W' });
      slots.push({ key: 'btn_m',   type: 'rect', act: 'mode',      x: 165, y: 132, w: 23, h: 34, rx: 4, label: 'M' });
      slots.push({ key: 'btn_sup', type: 'rect', act: 'mode_speed_up',   x: 193, y: 94, w: 23, h: 34, rx: 4, label: 'S+' });
      slots.push({ key: 'btn_sdn', type: 'rect', act: 'mode_speed_down', x: 193, y: 132, w: 23, h: 34, rx: 4, label: 'S-' });
      return { vw: 236, vh: 184, outer: { x: 6, y: 6, w: 224, h: 172, rx: 10 }, glass: { x: 11, y: 11, w: 214, h: 162, rx: 7 }, titleY: 25, slots };
    }

    // B5 4-bar panel
    const slots = [];
    for (let z = 1; z <= 4; z++) {
      const x = 26 + (z - 1) * 33;
      slots.push({ key: `bri_z${z}`, type: 'vbar', act: 'brightness', zone: z, x, y: 42, w: 24, h: 84, label: `Z${z}` });
      slots.push({ key: `zone_${z}`, type: 'rocker', act: 'zone', zone: z, x, y: 134, w: 24, h: 52, rx: 5, label: `${z}` });
    }
    ['S1','S2','S3','S4'].forEach((s, i) => slots.push({ key: `btn_s${i+1}`, type: 'rect', act: 'mode', x: 160, y: 42 + i * 31, w: 28, h: 20, rx: 4, label: s }));
    slots.push({ key: 'btn_60s', type: 'rect', act: 'night_mode', x: 160, y: 166, w: 28, h: 20, rx: 4, label: '60S' });
    return { vw: 210, vh: 210, outer: { x: 6, y: 6, w: 198, h: 198, rx: 11 }, glass: { x: 11, y: 11, w: 188, h: 188, rx: 8 }, titleY: 27, slots };
  }

  // Render exact coordinate-driven Capacitive Stencil & Custom Facia SVG!
  function renderCapacitiveStencilSvg(modelOrId, opts) {
    const o = opts || {};
    const m = typeof modelOrId === 'string' ? (MODELS.find(x => x.id === modelOrId) || MODELS[0]) : (modelOrId || MODELS[0]);
    const bp = getPanelBlueprint(m);
    const sc = o.size === 'thumb' ? 0.45 : 1;
    const facia = o.facia || {};
    const preset = FACIA_THEMES[facia.theme] || (m.finish === 'black' ? FACIA_THEMES.matte_black : FACIA_THEMES.pure_white);
    const col = Object.assign({}, preset, facia.colors || {});
    const isMono = Boolean(facia.monochrome !== undefined ? facia.monochrome : col.mono);
    const pads = facia.pads || {};
    const defStyle = facia.defaultPadStyle || 'keycap';
    const selKey = o.selectedPadKey || null;
    const showStencilSlots = Boolean(o.editorMode);
    const tz = o.touchZones || {};
    const u = m.id.replace(/[^a-zA-Z0-9]/g, '') + '_' + (o.uid || 'st');

    let defs = `<defs>
      <linearGradient id="st_rgb_${u}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#ef4444"/><stop offset="20%" stop-color="#eab308"/><stop offset="40%" stop-color="#22c55e"/>
        <stop offset="60%" stop-color="#06b6d4"/><stop offset="80%" stop-color="#3b82f6"/><stop offset="100%" stop-color="#ec4899"/>
      </linearGradient>
      <linearGradient id="st_cct_${u}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#f59e0b"/><stop offset="50%" stop-color="#fef9c3"/><stop offset="100%" stop-color="#38bdf8"/>
      </linearGradient>
      <linearGradient id="st_cct_v_${u}" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="#f59e0b"/><stop offset="50%" stop-color="#fef9c3"/><stop offset="100%" stop-color="#38bdf8"/>
      </linearGradient>
      <linearGradient id="st_bri_v_${u}" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stop-color="#1e293b"/><stop offset="100%" stop-color="#0ea5e9"/>
      </linearGradient>
      <linearGradient id="st_bri_h_${u}" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#334155"/><stop offset="100%" stop-color="#0ea5e9"/>
      </linearGradient>`;
    if (facia.bgPattern === 'grid') {
      defs += `<pattern id="pat_${u}" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="${col.padStroke}" stroke-width="0.3" opacity="0.35"/></pattern>`;
    } else if (facia.bgPattern === 'brushed') {
      defs += `<pattern id="pat_${u}" width="8" height="3" patternUnits="userSpaceOnUse"><line x1="0" y1="1" x2="8" y2="1" stroke="${col.padStroke}" stroke-width="0.35" opacity="0.3"/></pattern>`;
    }
    defs += `</defs>`;

    let body = `${defs}
      <rect x="${bp.outer.x}" y="${bp.outer.y}" width="${bp.outer.w}" height="${bp.outer.h}" rx="${bp.outer.rx}" fill="${col.bg}" stroke="${col.bezel}" stroke-width="2"/>
      <rect x="${bp.glass.x}" y="${bp.glass.y}" width="${bp.glass.w}" height="${bp.glass.h}" rx="${bp.glass.rx}" fill="${col.glass}" stroke="${col.bezel}" stroke-width="0.8"/>`;

    if (facia.bgPattern === 'grid' || facia.bgPattern === 'brushed') {
      body += `<rect x="${bp.glass.x}" y="${bp.glass.y}" width="${bp.glass.w}" height="${bp.glass.h}" rx="${bp.glass.rx}" fill="url(#pat_${u})" pointer-events="none"/>`;
    }

    if (facia.panelTitle) {
      body += `<text x="${(bp.vw / 2).toFixed(1)}" y="${bp.titleY}" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="7.2" font-weight="800" letter-spacing="0.7" fill="${col.subInk}" pointer-events="none">${escXml(facia.panelTitle.toUpperCase())}</text>`;
    } else if (facia.hideLogo === false) {
      body += `<text x="${bp.glass.x + 12}" y="${bp.titleY}" font-family="Inter,system-ui,sans-serif" font-size="8" font-weight="800" fill="${col.subInk}" pointer-events="none">MiBOXER®</text>`;
    }

    if (facia.showLedPinhole) {
      const dims = getPhysicalDims(m);
      const lx = (bp.vw * (dims.led_x_pct || 50)) / 100;
      const ly = (bp.vh * (dims.led_y_pct || 8)) / 100;
      body += `<circle cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" r="1.5" fill="${o.stencilMode ? '#ffffff' : col.bg}" stroke="${col.padStroke}" stroke-width="0.6" pointer-events="none"/>`;
    }

    // Automatic box-aware autofit: sizes icon & text to fit safely inside pad width & height without overflow
    function fitText(str, maxW, desiredFs, minFs) {
      const s = String(str || '').trim();
      if (!s) return { text: '', fs: minFs };
      const usableW = Math.max(8, maxW - 3.5);
      const charFactor = 0.56;
      const byWidth = usableW / Math.max(1, s.length * charFactor);
      const fs = Math.max(minFs, Math.min(desiredFs, byWidth));
      const maxChars = Math.max(1, Math.floor(usableW / Math.max(0.1, fs * charFactor)));
      const clipped = s.length > maxChars ? (maxChars > 2 ? s.slice(0, maxChars - 1) + '…' : s.slice(0, maxChars)) : s;
      return { text: clipped, fs };
    }

    function drawGlyphContent(cx, cy, bw, bh, cfg, fallbackLbl, fallbackSub) {
      const icoKey = (cfg && cfg.icon) || 'none';
      const ico = FACIA_ICONS[icoKey];
      const hasIco = Boolean(ico && ico.svg);
      const rawLbl = (cfg && cfg.label !== undefined) ? String(cfg.label) : (fallbackLbl || '');
      let rawSub = (cfg && cfg.sublabel !== undefined) ? String(cfg.sublabel) : (fallbackSub || '');
      if (!rawSub && cfg && cfg.multifunc && cfg.multifunc.enabled) {
        rawSub = `1-${cfg.multifunc.steps || 4} • Hold`;
      }
      const ink = (cfg && cfg.color) || col.ink;

      const padW = Math.max(8, bw - 3);
      const padH = Math.max(8, bh - 3);
      const minD = Math.min(padW, padH);

      const lblFit = rawLbl ? fitText(rawLbl, padW, Math.min(7.4, minD * (hasIco ? 0.24 : 0.36)), 3.6) : { text: '', fs: 0 };
      const subFit = rawSub ? fitText(rawSub, padW, Math.min(4.8, (lblFit.fs || minD * 0.22) * 0.72), 3.0) : { text: '', fs: 0 };

      const textBlockH = (lblFit.text ? lblFit.fs * 1.15 : 0) + (subFit.text ? subFit.fs * 1.2 : 0);
      const availForIco = hasIco ? (lblFit.text || subFit.text ? Math.max(5.5, padH - textBlockH - 2.2) : Math.min(padW * 0.68, padH * 0.68)) : 0;
      const icoSz = hasIco ? Math.max(5.2, Math.min(14.5, availForIco)) : 0;

      const totalH = icoSz + (hasIco && textBlockH > 0 ? 1.8 : 0) + textBlockH;
      let yCursor = cy - totalH / 2;
      let out = '';

      if (hasIco) {
        const ix = cx - icoSz / 2;
        const iy = yCursor;
        const inner = ico.svg.replace(/currentColor/g, ink);
        out += `<g transform="translate(${ix.toFixed(2)},${iy.toFixed(2)}) scale(${(icoSz / 24).toFixed(4)})" pointer-events="none">${inner}</g>`;
        yCursor += icoSz + 1.8;
      }

      if (lblFit.text) {
        const baselineY = yCursor + lblFit.fs * 0.82;
        out += `<text x="${cx.toFixed(2)}" y="${baselineY.toFixed(2)}" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="${lblFit.fs.toFixed(2)}" font-weight="700" fill="${ink}" pointer-events="none">${escXml(lblFit.text)}</text>`;
        yCursor += lblFit.fs * 1.15;
      }

      if (subFit.text) {
        const subBaselineY = yCursor + subFit.fs * 0.82;
        out += `<text x="${cx.toFixed(2)}" y="${subBaselineY.toFixed(2)}" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="${subFit.fs.toFixed(2)}" font-weight="600" fill="${col.subInk}" pointer-events="none">${escXml(subFit.text)}</text>`;
      }

      return out;
    }

    function padColors(cfg) {
      const st = (cfg && cfg.style) || defStyle;
      if (st === 'blank') return { st, fill: col.glass, stroke: showStencilSlots ? col.padStroke : 'none', dash: showStencilSlots ? '2 2' : '', op: showStencilSlots ? '0.45' : '1' };
      if (st === 'minimal') return { st, fill: col.glass, stroke: showStencilSlots ? col.padStroke : 'none', dash: showStencilSlots ? '1.5 1.5' : '', op: '1' };
      if (st === 'outline') return { st, fill: col.glass, stroke: col.padStroke, dash: '', op: '1' };
      return { st: 'keycap', fill: (cfg && cfg.fill) || col.padFill, stroke: col.padStroke, dash: '', op: '1' };
    }

    function selRingRect(x, y, w, h, rx) {
      return `<rect x="${(x - 1.6).toFixed(1)}" y="${(y - 1.6).toFixed(1)}" width="${(w + 3.2).toFixed(1)}" height="${(h + 3.2).toFixed(1)}" rx="${rx + 1.5}" fill="none" stroke="${col.accent}" stroke-width="1.8" stroke-dasharray="3 1.5" pointer-events="none"/>`;
    }

    bp.slots.forEach(s => {
      // Check if this slot is a touch surface that has been segmented!
      const surfCfg = s.surf ? tz[s.surf] : null;
      const isSeg = Boolean(surfCfg && surfCfg.enabled && Number(surfCfg.segments) >= 2);

      if (s.type === 'ring') {
        if (isSeg) {
          const n = Math.min(12, Math.max(2, Number(surfCfg.segments || 6)));
          const span = 360 / n;
          const off = Number(surfCfg.offset_deg || 0);
          for (let i = 0; i < n; i++) {
            const sKey = `hue_seg_${i + 1}`;
            const cfg = pads[sKey] || {};
            const pc = padColors(cfg);
            const sDeg = off + i * span + 1.5, eDeg = off + (i + 1) * span - 1.5;
            const d = ringWedgePath(s.cx, s.cy, s.rIn, s.rOut, sDeg, eDeg);
            const isSelected = selKey === sKey;
            body += `<path class="mbx-seg-hit" data-seg-act="${sKey}" data-pad-key="${sKey}" ${pc.st === 'blank' ? 'data-blanked="1"' : ''} d="${d}" fill="${pc.fill}" stroke="${isSelected ? col.accent : pc.stroke}" stroke-width="${isSelected ? 2 : 1.05}" ${pc.dash ? `stroke-dasharray="${pc.dash}"` : ''} style="cursor:pointer"/>`;
            const mp = polarPt(s.cx, s.cy, (s.rIn + s.rOut) / 2, off + (i + 0.5) * span);
            const defL = (surfCfg.labels && surfCfg.labels[i]) || `S${i + 1}`;
            if (pc.st !== 'blank') {
              body += drawGlyphContent(mp.x, mp.y, (s.rOut - s.rIn) * 0.98, (s.rOut - s.rIn) * 0.98, cfg, defL, '');
            }
          }
          return;
        }

        // Continuous Ring (not segmented)
        const cfg = pads[s.key] || {};
        const pc = padColors(cfg);
        const rMid = (s.rIn + s.rOut) / 2, rw = s.rOut - s.rIn;
        if (pc.st === 'blank') {
          if (showStencilSlots) body += `<circle class="mbx-hit" data-act="hue" data-pad-key="${s.key}" data-blanked="1" cx="${s.cx}" cy="${s.cy}" r="${rMid}" fill="none" stroke="${col.padStroke}" stroke-width="${rw}" stroke-dasharray="2 3" opacity="0.3" style="cursor:pointer"/>`;
          return;
        }
        if (isMono || facia.sliderStyle === 'mono_ticks' || facia.sliderStyle === 'minimal') {
          body += `<circle cx="${s.cx}" cy="${s.cy}" r="${s.rOut}" fill="none" stroke="${col.padStroke}" stroke-width="0.9"/>`;
          body += `<circle cx="${s.cx}" cy="${s.cy}" r="${s.rIn}" fill="none" stroke="${col.padStroke}" stroke-width="0.9"/>`;
          body += `<circle class="mbx-hit" data-act="hue" data-pad-key="${s.key}" cx="${s.cx}" cy="${s.cy}" r="${rMid}" fill="none" stroke="${col.ink}" stroke-width="${facia.sliderStyle === 'minimal' ? 1.5 : rw * 0.55}" ${facia.sliderStyle === 'mono_ticks' ? 'stroke-dasharray="2.2 3.2"' : ''} opacity="${facia.sliderStyle === 'minimal' ? 0.5 : 0.75}" style="cursor:pointer"/>`;
          // Invisible wide hit ring for smooth dragging
          body += `<circle class="mbx-hit" data-act="hue" data-pad-key="${s.key}" cx="${s.cx}" cy="${s.cy}" r="${rMid}" fill="none" stroke="transparent" stroke-width="${rw}" style="cursor:pointer"/>`;
        } else {
          // Crisp 12-hue color ring
          const cols12 = ['#ef4444','#f97316','#eab308','#84cc16','#22c55e','#14b8a6','#06b6d4','#3b82f6','#6366f1','#a855f7','#ec4899','#f43f5e'];
          for (let i = 0; i < 12; i++) {
            body += `<path d="${ringWedgePath(s.cx, s.cy, s.rIn, s.rOut, i * 30, (i + 1) * 30 + 0.6)}" fill="${cols12[i]}" pointer-events="none"/>`;
          }
          body += `<circle class="mbx-hit" data-act="hue" data-pad-key="${s.key}" cx="${s.cx}" cy="${s.cy}" r="${rMid}" fill="none" stroke="transparent" stroke-width="${rw}" style="cursor:pointer"/>`;
        }
        if (selKey === s.key) body += `<circle cx="${s.cx}" cy="${s.cy}" r="${s.rOut + 2}" fill="none" stroke="${col.accent}" stroke-width="1.8" stroke-dasharray="3 1.5" pointer-events="none"/>`;
        return;
      }

      if (s.type === 'vbar' || s.type === 'hbar') {
        const vert = s.type === 'vbar';
        if (isSeg) {
          const pref = s.surf === 'hue_ring' ? 'hue_seg_' : s.surf === 'cct_bar' ? 'cct_seg_' : s.surf === 'sat_bar' ? 'sat_seg_' : 'bri_seg_';
          const maxN = s.surf === 'hue_ring' ? 8 : 6;
          const n = Math.min(maxN, Math.max(2, Number(surfCfg.segments || 4)));
          const gap = 2.0;
          for (let i = 0; i < n; i++) {
            const sKey = `${pref}${i + 1}`;
            const cfg = pads[sKey] || {};
            const pc = padColors(cfg);
            const idx = vert ? (n - 1 - i) : i;
            const rx = vert ? s.x : s.x + idx * ((s.w + gap) / n);
            const ry = vert ? s.y + idx * ((s.h + gap) / n) : s.y;
            const rw = vert ? s.w : (s.w - gap * (n - 1)) / n;
            const rh = vert ? (s.h - gap * (n - 1)) / n : s.h;
            const isSelected = selKey === sKey;
            body += `<rect class="mbx-seg-hit" data-seg-act="${sKey}" data-pad-key="${sKey}" ${pc.st === 'blank' ? 'data-blanked="1"' : ''} x="${rx.toFixed(2)}" y="${ry.toFixed(2)}" width="${rw.toFixed(2)}" height="${rh.toFixed(2)}" rx="3" fill="${pc.fill}" stroke="${isSelected ? col.accent : pc.stroke}" stroke-width="${isSelected ? 1.9 : 1.0}" ${pc.dash ? `stroke-dasharray="${pc.dash}"` : ''} style="cursor:pointer"/>`;
            const defL = (surfCfg.labels && surfCfg.labels[i]) || `${i + 1}`;
            if (pc.st !== 'blank') body += drawGlyphContent(rx + rw / 2, ry + rh / 2, rw, rh, cfg, defL, '');
          }
          return;
        }

        // Continuous Bar (not segmented)
        const cfg = pads[s.key] || {};
        const pc = padColors(cfg);
        if (pc.st === 'blank') {
          if (showStencilSlots) body += `<rect class="mbx-hit" data-act="${s.act}" data-pad-key="${s.key}" data-blanked="1" x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="${Math.min(s.w, s.h) / 2}" fill="none" stroke="${col.padStroke}" stroke-dasharray="2 2" opacity="0.35" style="cursor:pointer"/>`;
          return;
        }
        let gradFill = pc.fill;
        if (!isMono && facia.sliderStyle !== 'mono_ticks' && facia.sliderStyle !== 'minimal') {
          if (s.act === 'hue') gradFill = `url(#st_rgb_${u})`;
          else if (s.act === 'kelvin' || s.act === 'saturation') gradFill = vert ? `url(#st_cct_v_${u})` : `url(#st_cct_${u})`;
          else gradFill = vert ? `url(#st_bri_v_${u})` : `url(#st_bri_h_${u})`;
        }
        const rad = Math.min(6, Math.min(s.w, s.h) / 2);
        body += `<rect class="mbx-hit" data-act="${s.act}" ${s.zone !== undefined ? `data-zone="${s.zone}"` : ''} data-pad-key="${s.key}" x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="${rad}" fill="${gradFill}" stroke="${col.padStroke}" stroke-width="0.95" style="cursor:pointer"/>`;
        // Graduated ticks for monochrome/minimal clarity
        const steps = 6;
        for (let t = 1; t < steps; t++) {
          if (vert) {
            const ty = s.y + (t * s.h) / steps;
            body += `<line x1="${s.x + 3}" y1="${ty.toFixed(1)}" x2="${s.x + s.w - 3}" y2="${ty.toFixed(1)}" stroke="${isMono ? col.ink : '#ffffff'}" stroke-opacity="0.55" stroke-width="0.8" pointer-events="none"/>`;
          } else {
            const tx = s.x + (t * s.w) / steps;
            body += `<line x1="${tx.toFixed(1)}" y1="${s.y + 3}" x2="${tx.toFixed(1)}" y2="${s.y + s.h - 3}" stroke="${isMono ? col.ink : '#ffffff'}" stroke-opacity="0.55" stroke-width="0.8" pointer-events="none"/>`;
          }
        }
        if (cfg.icon || cfg.label) body += drawGlyphContent(s.x + s.w / 2, s.y + s.h / 2, s.w, s.h, cfg, '', '');
        if (selKey === s.key) body += selRingRect(s.x, s.y, s.w, s.h, rad);
        return;
      }

      if (s.type === 'circle') {
        const cfg = pads[s.key] || {};
        const pc = padColors(cfg);
        const zAttr = (s.zone !== undefined && s.zone !== null) ? `data-zone="${s.zone}"` : '';
        body += `<circle class="mbx-hit" data-act="${s.act}" ${zAttr} data-pad-key="${s.key}" ${pc.st === 'blank' ? 'data-blanked="1"' : ''} cx="${s.cx}" cy="${s.cy}" r="${s.r}" fill="${pc.fill}" stroke="${selKey === s.key ? col.accent : pc.stroke}" stroke-width="${selKey === s.key ? 1.9 : 1.0}" ${pc.dash ? `stroke-dasharray="${pc.dash}"` : ''} opacity="${pc.op}" style="cursor:pointer"/>`;
        if (pc.st !== 'blank') {
          body += drawGlyphContent(s.cx, s.cy, s.r * 1.85, s.r * 1.85, cfg, s.label, s.sublabel || '');
        } else if (showStencilSlots && selKey === s.key) {
          body += drawGlyphContent(s.cx, s.cy, s.r * 1.8, s.r * 1.8, { label: 'MASK' }, 'MASK', '');
        }
        return;
      }

      if (s.type === 'rocker') {
        // Vertical Zone Rocker: Top = zone_on, Center = room icon + label, Bottom = zone_off
        const cfg = pads[s.key] || {};
        const pc = padColors(cfg);
        const z = s.zone ?? 1;
        body += `<g data-pad-key="${s.key}">
          <rect x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="${s.rx || 5}" fill="${pc.fill}" stroke="${selKey === s.key ? col.accent : pc.stroke}" stroke-width="${selKey === s.key ? 1.9 : 1.0}" ${pc.dash ? `stroke-dasharray="${pc.dash}"` : ''} opacity="${pc.op}"/>`;
        if (pc.st !== 'blank') {
          // Subtle top '|' and bottom 'o' rocker pips + room icon/name in center
          body += `<line x1="${(s.x + s.w / 2).toFixed(1)}" y1="${(s.y + 4.5).toFixed(1)}" x2="${(s.x + s.w / 2).toFixed(1)}" y2="${(s.y + 9).toFixed(1)}" stroke="${col.subInk}" stroke-width="1.2" stroke-linecap="round" pointer-events="none"/>`;
          body += `<circle cx="${(s.x + s.w / 2).toFixed(1)}" cy="${(s.y + s.h - 6.8).toFixed(1)}" r="2.3" fill="none" stroke="${col.subInk}" stroke-width="1.0" pointer-events="none"/>`;
          body += drawGlyphContent(s.x + s.w / 2, s.y + s.h / 2, s.w * 0.92, s.h * 0.56, cfg, s.label, s.sublabel || '');
        }
        body += `<rect class="mbx-hit" data-act="zone_on" data-zone="${z}" data-pad-key="${s.key}" ${pc.st === 'blank' ? 'data-blanked="1"' : ''} x="${s.x}" y="${s.y}" width="${s.w}" height="${(s.h * 0.5).toFixed(1)}" fill="transparent" style="cursor:pointer"/>`;
        body += `<rect class="mbx-hit" data-act="zone_off" data-zone="${z}" data-pad-key="${s.key}" ${pc.st === 'blank' ? 'data-blanked="1"' : ''} x="${s.x}" y="${(s.y + s.h * 0.5).toFixed(1)}" width="${s.w}" height="${(s.h * 0.5).toFixed(1)}" fill="transparent" style="cursor:pointer"/>
        </g>`;
        return;
      }

      // Standard Rectangular Capacitive Button
      const cfg = pads[s.key] || {};
      const pc = padColors(cfg);
      const zAttr = (s.zone !== undefined && s.zone !== null) ? `data-zone="${s.zone}"` : '';
      const vAttr = (s.val !== undefined && s.val !== null) ? `data-val="${s.val}"` : '';
      body += `<rect class="mbx-hit" data-act="${s.act}" ${zAttr} ${vAttr} data-pad-key="${s.key}" ${pc.st === 'blank' ? 'data-blanked="1"' : ''} x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="${s.rx || 4}" fill="${pc.fill}" stroke="${selKey === s.key ? col.accent : pc.stroke}" stroke-width="${selKey === s.key ? 1.9 : 1.0}" ${pc.dash ? `stroke-dasharray="${pc.dash}"` : ''} opacity="${pc.op}" style="cursor:pointer"/>`;
      if (pc.st !== 'blank') {
        body += drawGlyphContent(s.x + s.w / 2, s.y + s.h / 2, s.w, s.h, cfg, s.label, s.sublabel || '');
      }
    });

    return `<svg viewBox="0 0 ${bp.vw} ${bp.vh}" width="${Math.round(bp.vw * sc)}" height="${Math.round(bp.vh * sc)}">${body}</svg>`;
  }

  // Ready-to-load Smart Showcase Presets per Panel Type!
  function getSamplePresetsForModel(modelOrId) {
    const m = typeof modelOrId === 'string' ? (MODELS.find(x => x.id === modelOrId) || MODELS[0]) : (modelOrId || MODELS[0]);
    const isBlk = m.finish === 'black';
    const defTheme = isBlk ? 'matte_black' : 'pure_white';

    // 1. SINGLE-ZONE B0: Showcase whole-room multi-device control on ONE single-zone glass panel!
    if (m.layout === 'b0') {
      return [
        {
          id: 'b0_smart_suite',
          name: 'Smart Room Multi-Device Hub (6-Slice Ring + Step/Hold)',
          desc: 'Turns 1-zone B0 into a 14-function room controller: Fan (1-6/Hold), Blinds, Curtains, AC, Sonos & Lighting',
          touch_zones: {
            hue_ring: { enabled: true, segments: 6, offset_deg: -30, zone_mask: 65535, labels: ['Fan','Blinds','Curtain','Climate','Audio','Strip'] },
            sat_bar:  { enabled: true, segments: 3, offset_deg: 0,   zone_mask: 65535, labels: ['Bright','Relax','Cinema'] },
            bri_bar:  { enabled: false, segments: 4, offset_deg: 0,  zone_mask: 65535, labels: ['','','',''] },
            cct_bar:  { enabled: false, segments: 4, offset_deg: 0,  zone_mask: 65535, labels: ['','','',''] }
          },
          facia: {
            enabled: true, theme: defTheme, panelTitle: 'MASTER SUITE', defaultPadStyle: 'keycap', showLedPinhole: true, hideLogo: true,
            pads: {
              hue_seg_1: { icon: 'fan',       label: 'Fan',     multifunc: { enabled: true, steps: 6, unit: 'Spd' } },
              hue_seg_2: { icon: 'blinds',    label: 'Blinds',  multifunc: { enabled: true, steps: 4, unit: 'Pos' } },
              hue_seg_3: { icon: 'curtains',  label: 'Drapes',  multifunc: { enabled: true, steps: 4, unit: 'Pos' } },
              hue_seg_4: { icon: 'ac',        label: 'AC',      multifunc: { enabled: true, steps: 5, unit: 'Temp' } },
              hue_seg_5: { icon: 'speaker',   label: 'Sonos',   multifunc: { enabled: true, steps: 5, unit: 'Vol' } },
              hue_seg_6: { icon: 'strip',     label: 'Cove',    multifunc: { enabled: true, steps: 4, unit: 'Hue' } },
              sat_seg_1: { icon: 'sun',       label: 'Day' },
              sat_seg_2: { icon: 'coffee',    label: 'Relax' },
              sat_seg_3: { icon: 'tv',        label: 'Movie' },
              center_w:  { icon: 'pendant',   label: 'Main',    sublabel: 'Hold W' },
              btn_on:    { icon: 'power',     label: 'Room On' },
              btn_r:     { icon: 'lamp',      label: 'Bed L',   multifunc: { enabled: true, steps: 3, unit: 'Lvl' } },
              btn_g:     { icon: 'lamp',      label: 'Bed R',   multifunc: { enabled: true, steps: 3, unit: 'Lvl' } },
              btn_b:     { icon: 'desk',      label: 'Desk',    multifunc: { enabled: true, steps: 3, unit: 'Lvl' } },
              btn_off:   { icon: 'moon',      label: 'All Off', sublabel: 'Hold Night' },
              btn_m:     { icon: 'sparkles',  label: 'Scene' },
              btn_sdn:   { icon: 'timer',     label: 'Sleep',   sublabel: '60m' },
              btn_sup:   { icon: 'extractor', label: 'Vent',    multifunc: { enabled: true, steps: 3, unit: 'Spd' } }
            }
          }
        },
        {
          id: 'b0_minimal_bw',
          name: 'Minimalist B&W Accessibility Stencil (4-Device Ring)',
          desc: 'High-contrast black & white stencil with blanked unused RGB keys',
          touch_zones: {
            hue_ring: { enabled: true, segments: 4, offset_deg: -45, zone_mask: 65535, labels: ['Lights','Fan','Blinds','TV'] },
            sat_bar:  { enabled: false, segments: 4, offset_deg: 0, zone_mask: 65535, labels: ['','','',''] },
            bri_bar:  { enabled: false, segments: 4, offset_deg: 0, zone_mask: 65535, labels: ['','','',''] },
            cct_bar:  { enabled: false, segments: 4, offset_deg: 0, zone_mask: 65535, labels: ['','','',''] }
          },
          facia: {
            enabled: true, theme: 'ink_bw', monochrome: true, panelTitle: 'LIVING ROOM', defaultPadStyle: 'outline', showLedPinhole: true, hideLogo: true,
            pads: {
              hue_seg_1: { icon: 'bulb',   label: 'Lights', multifunc: { enabled: true, steps: 4, unit: 'Bri' } },
              hue_seg_2: { icon: 'fan',    label: 'Fan',    multifunc: { enabled: true, steps: 6, unit: 'Spd' } },
              hue_seg_3: { icon: 'blinds', label: 'Blinds', multifunc: { enabled: true, steps: 4, unit: 'Pos' } },
              hue_seg_4: { icon: 'tv',     label: 'TV',     multifunc: { enabled: true, steps: 3, unit: 'Src' } },
              sat_bar:   { style: 'blank' },
              btn_r:     { style: 'blank' },
              btn_g:     { style: 'blank' },
              btn_b:     { style: 'blank' },
              btn_sdn:   { style: 'blank' },
              btn_sup:   { style: 'blank' },
              btn_on:    { icon: 'sun',    label: 'ON' },
              btn_off:   { icon: 'moon',   label: 'OFF' },
              btn_m:     { icon: 'lock',   label: 'Away' }
            }
          }
        }
      ];
    }

    // 2. 8-ZONE B8: Standardized 8-Room Icons + Segmented Device Ring / Sliders!
    if (m.layout === 'b8') {
      return [
        {
          id: 'b8_whole_home_devices',
          name: '8-Room Standardized Icons + 6-Device Segmented Wheel',
          desc: 'Zones 1-8 mapped to standardized rooms; Color Ring segmented into Fan (1-6), Blinds, Curtains, AC, Sonos & Strip',
          touch_zones: {
            hue_ring: { enabled: true, segments: 6, offset_deg: -30, zone_mask: 65535, labels: ['Fan','Blinds','Curtains','AC','Audio','Strip'] },
            sat_bar:  { enabled: true, segments: 3, offset_deg: 0,   zone_mask: 65535, labels: ['Day','Relax','Cinema'] },
            bri_bar:  { enabled: false, segments: 4, offset_deg: 0,  zone_mask: 65535, labels: ['','','',''] },
            cct_bar:  { enabled: false, segments: 4, offset_deg: 0,  zone_mask: 65535, labels: ['','','',''] }
          },
          facia: {
            enabled: true, theme: defTheme, panelTitle: 'SMART HOME CONTROL', defaultPadStyle: 'keycap', showLedPinhole: true, hideLogo: true,
            pads: {
              hue_seg_1: { icon: 'fan',        label: 'Fan',     multifunc: { enabled: true, steps: 6, unit: 'Spd' } },
              hue_seg_2: { icon: 'blinds',     label: 'Blinds',  multifunc: { enabled: true, steps: 4, unit: 'Pos' } },
              hue_seg_3: { icon: 'curtains',   label: 'Drapes',  multifunc: { enabled: true, steps: 4, unit: 'Pos' } },
              hue_seg_4: { icon: 'ac',         label: 'Climate', multifunc: { enabled: true, steps: 5, unit: 'Temp' } },
              hue_seg_5: { icon: 'speaker',    label: 'Sonos',   multifunc: { enabled: true, steps: 5, unit: 'Vol' } },
              hue_seg_6: { icon: 'strip',      label: 'LEDs',    multifunc: { enabled: true, steps: 4, unit: 'Scene' } },
              sat_seg_1: { icon: 'sun',        label: 'Bright' },
              sat_seg_2: { icon: 'coffee',     label: 'Warm' },
              sat_seg_3: { icon: 'tv',         label: 'Movie' },
              center_w:  { icon: 'downlight',  label: 'White' },
              btn_on:    { icon: 'power',      label: 'ON' },
              btn_off:   { icon: 'moon',       label: 'OFF' },
              btn_sdn:   { icon: 'blinds',     label: 'Shut' },
              btn_m:     { icon: 'sparkles',   label: 'Scene' },
              btn_sup:   { icon: 'sun',        label: 'Open' },
              zone_0:    { icon: 'home_all',   label: 'Home' },
              zone_1:    { icon: 'sofa',       label: 'Living' },
              zone_2:    { icon: 'kitchen',    label: 'Kitchen' },
              zone_3:    { icon: 'dining',     label: 'Dining' },
              zone_4:    { icon: 'bed',        label: 'Master' },
              btn_60s:   { icon: 'lock',       label: 'Away' },
              zone_5:    { icon: 'bed_single', label: 'Bed 2' },
              zone_6:    { icon: 'desk',       label: 'Study' },
              zone_7:    { icon: 'bath',       label: 'Bath' },
              zone_8:    { icon: 'garden',     label: 'Patio' }
            }
          }
        },
        {
          id: 'b8_rooms_analog',
          name: '8-Room Standardized Lighting (Continuous Wheel & Sliders)',
          desc: 'Keeps analog Color Wheel & Dimmer sliders while adding crisp Room Icons to Zones 1-8',
          touch_zones: {
            hue_ring: { enabled: false, segments: 6, offset_deg: 0, zone_mask: 65535, labels: ['','','','','',''] },
            sat_bar:  { enabled: false, segments: 4, offset_deg: 0, zone_mask: 65535, labels: ['','','',''] },
            bri_bar:  { enabled: false, segments: 4, offset_deg: 0, zone_mask: 65535, labels: ['','','',''] },
            cct_bar:  { enabled: false, segments: 4, offset_deg: 0, zone_mask: 65535, labels: ['','','',''] }
          },
          facia: {
            enabled: true, theme: defTheme, panelTitle: 'RESIDENCE LIGHTING', defaultPadStyle: 'keycap', showLedPinhole: true, hideLogo: true,
            pads: {
              center_w: { icon: 'sun',        label: 'White' },
              zone_0:   { icon: 'home_all',   label: 'All' },
              zone_1:   { icon: 'sofa',       label: 'Living' },
              zone_2:   { icon: 'kitchen',    label: 'Kitchen' },
              zone_3:   { icon: 'dining',     label: 'Dining' },
              zone_4:   { icon: 'bed',        label: 'Master' },
              btn_60s:  { icon: 'timer',      label: '60s Off' },
              zone_5:   { icon: 'bed_single', label: 'Guest' },
              zone_6:   { icon: 'desk',       label: 'Office' },
              zone_7:   { icon: 'bath',       label: 'Bath' },
              zone_8:   { icon: 'garden',     label: 'Outdoor' }
            }
          }
        }
      ];
    }

    // 3. STRIP / MULTI-ZONE PANELS (B1..B4, U1..U3, M4, B5): Standardized Room Rockers + Segmented Multi-Device Bars!
    const topSurf = (m.kind === 'b1' || m.kind === 'u1') ? 'bri_bar' : (m.kind === 'b2' || m.kind === 'u2') ? 'cct_bar' : 'hue_ring';
    const segPref = topSurf === 'bri_bar' ? 'bri_seg_' : topSurf === 'cct_bar' ? 'cct_seg_' : 'hue_seg_';
    return [
      {
        id: 'strip_rooms_plus_devices',
        name: 'Room Rockers + 4-Device Segmented Bar (Fan/Blinds/AC/Audio)',
        desc: 'Top touch strip becomes 4 multi-function device pads (Tap = Step 1-6, Hold = Toggle); bottom rockers use standardized Room Icons',
        touch_zones: {
          hue_ring: { enabled: topSurf === 'hue_ring', segments: 4, offset_deg: 0, zone_mask: 65535, labels: ['Fan','Blinds','AC','Audio'] },
          cct_bar:  { enabled: topSurf === 'cct_bar',  segments: 4, offset_deg: 0, zone_mask: 65535, labels: ['Fan','Blinds','AC','Audio'] },
          bri_bar:  { enabled: topSurf === 'bri_bar',  segments: 4, offset_deg: 0, zone_mask: 65535, labels: ['Fan','Blinds','AC','Audio'] },
          sat_bar:  { enabled: false, segments: 4, offset_deg: 0, zone_mask: 65535, labels: ['','','',''] }
        },
        facia: {
          enabled: true, theme: defTheme, panelTitle: 'APARTMENT SUITE', defaultPadStyle: 'keycap', showLedPinhole: true, hideLogo: true,
          pads: {
            [segPref + '1']: { icon: 'fan',      label: 'Fan',     multifunc: { enabled: true, steps: 6, unit: 'Spd' } },
            [segPref + '2']: { icon: 'blinds',   label: 'Blinds',  multifunc: { enabled: true, steps: 4, unit: 'Pos' } },
            [segPref + '3']: { icon: 'ac',       label: 'Climate', multifunc: { enabled: true, steps: 5, unit: 'Temp' } },
            [segPref + '4']: { icon: 'speaker',  label: 'Sonos',   multifunc: { enabled: true, steps: 5, unit: 'Vol' } },
            zone_0: { icon: 'home_all', label: 'All' },
            zone_1: { icon: 'sofa',     label: 'Living' },
            zone_2: { icon: 'kitchen',  label: 'Kitchen' },
            zone_3: { icon: 'bed',      label: 'Master' },
            zone_4: { icon: 'garden',   label: 'Patio' }
          }
        }
      },
      {
        id: 'strip_bw_print',
        name: 'High-Contrast B&W Room Stencil',
        desc: 'Clean monochrome room rockers and crisp graduated dimmer bar ready for 1:1 laser/vinyl printing',
        touch_zones: {
          hue_ring: { enabled: false, segments: 4, offset_deg: 0, zone_mask: 65535, labels: ['','','',''] },
          cct_bar:  { enabled: false, segments: 4, offset_deg: 0, zone_mask: 65535, labels: ['','','',''] },
          bri_bar:  { enabled: false, segments: 4, offset_deg: 0, zone_mask: 65535, labels: ['','','',''] },
          sat_bar:  { enabled: false, segments: 4, offset_deg: 0, zone_mask: 65535, labels: ['','','',''] }
        },
        facia: {
          enabled: true, theme: 'ink_bw', monochrome: true, panelTitle: 'LIGHTING ZONES', defaultPadStyle: 'outline', showLedPinhole: true, hideLogo: true,
          pads: {
            zone_0: { icon: 'home_all', label: 'All' },
            zone_1: { icon: 'sofa',     label: 'Lounge' },
            zone_2: { icon: 'dining',   label: 'Dining' },
            zone_3: { icon: 'bed',      label: 'Bedroom' },
            zone_4: { icon: 'bath',     label: 'Bath' }
          }
        }
      }
    ];
  }

  // Stamp all 61 packaged factory MiBoxer models as read-only!
  const FACTORY_MODELS = MODELS.map(m => {
    m.readonly = true;
    m.isCustom = false;
    return m;
  });

  function resolveBaseModel(modelOrId) {
    const m = typeof modelOrId === 'string' ? (MODELS.find(x => x.id === modelOrId) || FACTORY_MODELS[0]) : (modelOrId || FACTORY_MODELS[0]);
    if (m.isCustom && m.baseModel) {
      return FACTORY_MODELS.find(f => f.id === m.baseModel) || m;
    }
    return m;
  }

  function registerCustomModels(rawList) {
    // Strip existing custom entries in-place while keeping MODELS array reference stable
    for (let i = MODELS.length - 1; i >= 0; i--) {
      if (MODELS[i].isCustom) MODELS.splice(i, 1);
    }
    if (!Array.isArray(rawList)) return MODELS;
    rawList.forEach(cm => {
      if (!cm || !cm.id) return;
      const bId = cm.base_model || cm.baseModel || 'B8';
      const base = FACTORY_MODELS.find(f => f.id === bId) || FACTORY_MODELS[0];
      MODELS.unshift({
        id: cm.id,
        base: base.base || base.id,
        baseModel: base.id,
        finish: base.finish || 'white',
        cat: 'custom',
        baseCat: base.cat,
        proto: base.proto,
        zones: base.zones,
        layout: base.layout,
        kind: base.kind,
        name: cm.name || `${base.id} Custom`,
        sub: `Custom ${base.id} (${base.zones}Z)`,
        readonly: false,
        isCustom: true,
        stencilMode: cm.stencil_mode || 'full_panel',
        facia: cm.facia || null,
        touchZones: cm.touch_zones || null
      });
    });
    return MODELS;
  }

  async function syncCustomModelsFromHub(hubBaseUrl) {
    const base = (hubBaseUrl || '').replace(/\/$/, '');
    try {
      const res = await fetch(`${base}/api/remotes/custom_models`, { cache: 'no-store' });
      if (!res.ok) return MODELS;
      const list = await res.json();
      return registerCustomModels(list);
    } catch (_) {
      return MODELS;
    }
  }

  const _baseRenderModelSvg = renderModelSvg;
  function renderStudioSvg(modelOrId, opts) {
    const o = opts || {};
    const m = typeof modelOrId === 'string' ? (MODELS.find(x => x.id === modelOrId) || MODELS[0]) : (modelOrId || MODELS[0]);
    const effFacia = o.facia || m.facia || null;
    const effTz = o.touchZones || m.touchZones || null;
    if (isCapacitiveFlatPanel(m) && ((effFacia && effFacia.enabled) || o.editorMode)) {
      return renderCapacitiveStencilSvg(m, Object.assign({}, o, { facia: effFacia, touchZones: effTz }));
    }
    return _baseRenderModelSvg(m, o);
  }

  // Auto-hydrate custom models if loaded inside a browser pointing at Hub
  if (typeof fetch === 'function' && typeof document !== 'undefined') {
    const curScript = document.currentScript && document.currentScript.src ? new URL(document.currentScript.src, location.href).origin : '';
    syncCustomModelsFromHub(curScript);
  }

  root.MiBoxerCatalog = {
    MODELS,
    FACTORY_MODELS,
    FACIA_ICONS,
    FACIA_THEMES,
    isCapacitiveFlatPanel,
    resolveBaseModel,
    registerCustomModels,
    syncCustomModelsFromHub,
    getPhysicalDims,
    getPanelBlueprint,
    getSamplePresetsForModel,
    renderCapacitiveStencilSvg,
    baseRenderModelSvg: _baseRenderModelSvg,
    renderModelSvg: renderStudioSvg
  };
})(typeof window !== 'undefined' ? window : globalThis);

;
(function(root) {
  'use strict';
  const SVG_NS = 'http://www.w3.org/2000/svg';

  const ACT_TO_SVG = {
    on: ['on', 'zone_on'], off: ['off', 'zone_off'],
    set_white: ['set_white', 'on'], night_mode: ['night_mode', 'off'],
    brightness: ['brightness'], level: ['brightness'],
    kelvin: ['kelvin'], color_temp: ['kelvin'], temperature: ['kelvin'],
    saturation: ['saturation'], hue: ['hue'],
    mode: ['mode'], next_mode: ['mode', 'mode_speed_up'], previous_mode: ['mode', 'mode_speed_down'],
    mode_speed_up: ['mode_speed_up'], mode_speed_down: ['mode_speed_down']
  };

  function polarPt(cx, cy, r, deg) {
    const rad = ((deg - 90) * Math.PI) / 180;
    return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
  }

  function ringWedge(cx, cy, rIn, rOut, sDeg, eDeg) {
    const p1 = polarPt(cx, cy, rOut, eDeg), p2 = polarPt(cx, cy, rOut, sDeg);
    const p3 = polarPt(cx, cy, rIn, sDeg), p4 = polarPt(cx, cy, rIn, eDeg);
    const lg = eDeg - sDeg <= 180 ? '0' : '1';
    return `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} A ${rOut.toFixed(1)} ${rOut.toFixed(1)} 0 ${lg} 0 ${p2.x.toFixed(1)} ${p2.y.toFixed(1)} L ${p3.x.toFixed(1)} ${p3.y.toFixed(1)} A ${rIn.toFixed(1)} ${rIn.toFixed(1)} 0 ${lg} 1 ${p4.x.toFixed(1)} ${p4.y.toFixed(1)} Z`;
  }

  function normalizeTouchZones(tz) {
    const def = (segs) => ({ enabled: false, segments: segs, offset_deg: 0, zone_mask: 65535, labels: Array(segs).fill('') });
    const src = tz || {};
    const normOne = (s, dSegs) => {
      if (!s) return def(dSegs);
      const n = Number(s.segments || dSegs);
      const arr = Array.isArray(s.labels) ? s.labels.slice(0, 12) : [];
      while (arr.length < n) arr.push('');
      return {
        enabled: Boolean(s.enabled),
        segments: n,
        offset_deg: Number(s.offset_deg ?? s.offsetDeg ?? 0),
        zone_mask: Number(s.zone_mask ?? s.zoneMask ?? 65535),
        labels: arr
      };
    };
    return {
      hue_ring: normOne(src.hue_ring, 6),
      cct_bar: normOne(src.cct_bar, 4),
      sat_bar: normOne(src.sat_bar, 3),
      bri_bar: normOne(src.bri_bar, 4)
    };
  }

  function defaultCalibration() {
    return { hue_offset: 0, hue_invert: false, bri_min: 0, bri_max: 100, bri_invert: false, cct_min: 0, cct_max: 100, cct_invert: false, sat_min: 0, sat_max: 100, sat_invert: false };
  }

  function isHostDark() {
    if (document.documentElement.classList.contains('dark') || document.body.classList.contains('dark')) return true;
    const parseLum = (str) => {
      if (!str || str === 'transparent') return null;
      const m = String(str).match(/[\d.]+/g);
      if (!m || m.length < 3) return null;
      if (m.length >= 4 && Number(m[3]) < 0.15) return null; // Ignore transparent rgba(0,0,0,0)!
      return (0.299 * Number(m[0]) + 0.587 * Number(m[1]) + 0.114 * Number(m[2])) / 255;
    };
    // Check Home Assistant CSS variables first if hosted inside HA
    const haEl = document.querySelector('home-assistant') || document.documentElement;
    const haBg = getComputedStyle(haEl).getPropertyValue('--primary-background-color').trim() ||
                 getComputedStyle(haEl).getPropertyValue('--card-background-color').trim();
    if (haBg && haBg.startsWith('#')) {
      const hex = haBg.slice(1);
      const full = hex.length === 3 ? hex.split('').map(c => c + c).join('') : hex;
      if (full.length === 6) {
        const r = parseInt(full.slice(0, 2), 16), g = parseInt(full.slice(2, 4), 16), b = parseInt(full.slice(4, 6), 16);
        return ((0.299 * r + 0.587 * g + 0.114 * b) / 255) < 0.45;
      }
    }
    const candidates = [haBg, getComputedStyle(document.body).backgroundColor, getComputedStyle(document.documentElement).backgroundColor];
    for (const c of candidates) {
      const lum = parseLum(c);
      if (lum !== null) return lum < 0.45;
    }
    return false; // Default to clean Light Mode stylesheet
  }

  function injectStudioStyles() {
    if (document.getElementById('mlrs-shared-styles')) return;
    const st = document.createElement('style');
    st.id = 'mlrs-shared-styles';
    st.textContent = `
      .mbx-hit, .mbx-seg-hit { transition: filter 0.12s ease, stroke-width 0.12s ease; touch-action: none; }
      .mbx-hit.zone-active { stroke: #ea580c !important; stroke-width: 2.2px !important; }
      .mbx-hit.fire-rf, .mbx-seg-hit.fire-rf { stroke: #16a34a !important; stroke-width: 2.8px !important; filter: drop-shadow(0 0 6px rgba(22,163,74,0.75)); }
      .mbx-hit.fire-ui, .mbx-seg-hit.fire-ui { stroke: #ea580c !important; stroke-width: 2.8px !important; filter: drop-shadow(0 0 6px rgba(234,88,12,0.75)); }

      .mlrs-modal-backdrop {
        --mlrs-bg: #ffffff; --mlrs-fg: #0f172a; --mlrs-muted: #f8fafc; --mlrs-muted-fg: #64748b;
        --mlrs-border: #e2e8f0; --mlrs-input-bg: #ffffff; --mlrs-primary: #0f172a; --mlrs-primary-fg: #ffffff;
        --mlrs-hover: #f1f5f9; --mlrs-ring: #0284c7;
        position: fixed; inset: 0; z-index: 9999; background: rgba(15, 23, 42, 0.48); backdrop-filter: blur(2px);
        display: flex; align-items: center; justify-content: center; padding: 14px;
        font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; color: var(--mlrs-fg);
      }
      .mlrs-modal-backdrop.mlrs-dark {
        --mlrs-bg: #09090b; --mlrs-fg: #f8fafc; --mlrs-muted: #18181b; --mlrs-muted-fg: #a1a1aa;
        --mlrs-border: #27272a; --mlrs-input-bg: #09090b; --mlrs-primary: #f8fafc; --mlrs-primary-fg: #09090b;
        --mlrs-hover: #27272a; --mlrs-ring: #38bdf8; background: rgba(0, 0, 0, 0.72);
      }
      .mlrs-modal {
        background: var(--mlrs-bg); color: var(--mlrs-fg); border: 1px solid var(--mlrs-border); border-radius: 12px;
        width: min(1240px, 97vw); height: min(860px, 94vh); display: flex; flex-direction: column; overflow: hidden;
        box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.25);
      }
      .mlrs-topbar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 20px; background: var(--mlrs-bg); border-bottom: 1px solid var(--mlrs-border); }
      .mlrs-preset-bar { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; padding: 9px 20px; background: var(--mlrs-muted); border-bottom: 1px solid var(--mlrs-border); font-size: 12px; }
      .mlrs-body { display: grid; grid-template-columns: 310px 1fr 350px; flex: 1; min-height: 0; overflow: hidden; }
      @media (max-width: 1040px) { .mlrs-body { grid-template-columns: 1fr; overflow-y: auto; } }
      .mlrs-col { padding: 14px 16px; overflow-y: auto; border-right: 1px solid var(--mlrs-border); background: var(--mlrs-bg); }
      .mlrs-col:last-child { border-right: none; border-left: 1px solid var(--mlrs-border); }
      .mlrs-stage-wrap { display: flex; flex-direction: column; align-items: center; justify-content: center; background: var(--mlrs-muted); padding: 16px; overflow: auto; }
      .mlrs-stage-card { background: var(--mlrs-bg); border: 1px solid var(--mlrs-border); border-radius: 12px; padding: 20px 28px; display: flex; flex-direction: column; align-items: center; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
      .mlrs-footer { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px; padding: 11px 20px; background: var(--mlrs-bg); border-top: 1px solid var(--mlrs-border); }
      .mlrs-btn { background: var(--mlrs-bg); color: var(--mlrs-fg); border: 1px solid var(--mlrs-border); border-radius: 6px; padding: 6px 12px; font-size: 12.5px; font-weight: 500; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; }
      .mlrs-btn:hover { background: var(--mlrs-hover); }
      .mlrs-btn.primary, .mlrs-btn.active-tab { background: var(--mlrs-primary); border-color: var(--mlrs-primary); color: var(--mlrs-primary-fg); font-weight: 600; }
      .mlrs-btn.danger-outline { color: #dc2626; border-color: #fecaca; }
      .mlrs-sec-title { font-size: 12.5px; font-weight: 700; color: var(--mlrs-fg); margin-bottom: 10px; }
      .mlrs-field { margin-bottom: 10px; }
      .mlrs-field label { display: block; font-size: 11.5px; font-weight: 600; color: var(--mlrs-fg); margin-bottom: 4px; }
      .mlrs-input, .mlrs-select { width: 100%; background: var(--mlrs-input-bg); border: 1px solid var(--mlrs-border); color: var(--mlrs-fg); border-radius: 6px; padding: 6px 9px; font-size: 12.5px; }
      .mlrs-swatch { height: 32px; padding: 2px 4px; cursor: pointer; }
      .mlrs-icon-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 5px; }
      .mlrs-icon-cell { aspect-ratio: 1; border: 1px solid var(--mlrs-border); border-radius: 6px; background: var(--mlrs-input-bg); color: var(--mlrs-fg); display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; padding: 3px; }
      .mlrs-icon-cell:hover { background: var(--mlrs-hover); }
      .mlrs-icon-cell.sel { border: 2px solid var(--mlrs-ring); background: var(--mlrs-hover); }
      .mlrs-pill-group { display: inline-flex; background: var(--mlrs-muted); padding: 3px; border-radius: 8px; border: 1px solid var(--mlrs-border); gap: 3px; }
      .mlrs-pill-group .mlrs-btn { border: none; padding: 5px 11px; font-size: 12px; border-radius: 6px; background: transparent; }
      .mlrs-pill-group .mlrs-btn.active-tab { background: var(--mlrs-primary); color: var(--mlrs-primary-fg); }
      .mlrs-box-sub { padding: 9px 10px; border-radius: 8px; background: var(--mlrs-muted); border: 1px solid var(--mlrs-border); margin-bottom: 10px; }
    `;
    document.head.appendChild(st);
  }

  // ============================================================================
  // 1. INTERACTIVE STAGE CONTROLLER (Finger Pucks, Segmented Pads & Step/Hold)
  // ============================================================================
  function mountInteractiveStage(stageEl, opts) {
    injectStudioStyles();
    const Cat = root.MiBoxerCatalog;
    if (!stageEl || !Cat) return null;

    const model = typeof opts.model === 'string' ? (Cat.MODELS.find(m => m.id === opts.model) || Cat.MODELS[0]) : (opts.model || Cat.MODELS[0]);
    const cal = Object.assign(defaultCalibration(), opts.calibration || {});
    const tz = normalizeTouchZones(opts.touchZones);
    let activeZone = opts.activeZone !== undefined ? Number(opts.activeZone) : 1;
    const editMode = Boolean(opts.editMode);
    const facia = opts.facia || null;
    const stepCounters = opts.stepState || {};

    stageEl.innerHTML = Cat.renderModelSvg(model, {
      size: opts.size || 'large',
      uid: opts.uid || 'studio_stage',
      facia: facia,
      touchZones: tz,
      activeZone: activeZone,
      editorMode: editMode,
      selectedPadKey: opts.selectedPadKey || null
    });

    const svgEl = stageEl.querySelector('svg');
    if (!svgEl) return null;
    svgEl.style.maxHeight = opts.maxHeight || '410px';
    svgEl.style.width = 'auto';
    svgEl.style.display = 'block';
    svgEl.style.userSelect = 'none';

    const updateZoneHighlight = () => {
      svgEl.querySelectorAll('.mbx-hit[data-act="zone"], .mbx-hit[data-act="zone_on"]').forEach(el => {
        const pKey = el.getAttribute('data-pad-key');
        const target = (pKey && svgEl.querySelector(`g[data-pad-key="${pKey}"] > rect`)) || el;
        target.classList.toggle('zone-active', Number(el.getAttribute('data-zone')) === activeZone);
      });
    };
    updateZoneHighlight();

    // Coordinated Finger-Press Reticle Layer
    const puckLayer = document.createElementNS(SVG_NS, 'g');
    puckLayer.setAttribute('pointer-events', 'none');
    svgEl.appendChild(puckLayer);
    const puckTimers = {};

    function showFingerPuck(svgX, svgY, labelText, isRf, keyName) {
      const id = keyName || (isRf ? 'rf' : 'ui');
      const old = puckLayer.querySelector(`[data-puck-id="${id}"]`);
      if (old) old.remove();
      if (puckTimers[id]) clearTimeout(puckTimers[id]);

      const col = isRf ? '#16a34a' : '#ea580c';
      const g = document.createElementNS(SVG_NS, 'g');
      g.setAttribute('data-puck-id', id);

      const halo = document.createElementNS(SVG_NS, 'circle');
      halo.setAttribute('cx', svgX.toFixed(1)); halo.setAttribute('cy', svgY.toFixed(1));
      halo.setAttribute('r', '9.5'); halo.setAttribute('fill', isRf ? 'rgba(22,163,74,0.24)' : 'rgba(234,88,12,0.26)');
      halo.setAttribute('stroke', col); halo.setAttribute('stroke-width', '1.5');
      g.appendChild(halo);

      const dot = document.createElementNS(SVG_NS, 'circle');
      dot.setAttribute('cx', svgX.toFixed(1)); dot.setAttribute('cy', svgY.toFixed(1));
      dot.setAttribute('r', '4'); dot.setAttribute('fill', col);
      dot.setAttribute('stroke', '#ffffff'); dot.setAttribute('stroke-width', '1.2');
      g.appendChild(dot);

      if (labelText) {
        const pillW = Math.max(26, labelText.length * 4.5 + 9);
        const py = Math.max(12, svgY - 15);
        const rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttribute('x', (svgX - pillW / 2).toFixed(1)); rect.setAttribute('y', (py - 8).toFixed(1));
        rect.setAttribute('width', pillW.toFixed(1)); rect.setAttribute('height', '11');
        rect.setAttribute('rx', '4'); rect.setAttribute('fill', '#0f172a');
        rect.setAttribute('stroke', col); rect.setAttribute('stroke-width', '0.9');
        g.appendChild(rect);

        const txt = document.createElementNS(SVG_NS, 'text');
        txt.setAttribute('x', svgX.toFixed(1)); txt.setAttribute('y', py.toFixed(1));
        txt.setAttribute('text-anchor', 'middle'); txt.setAttribute('font-size', '6.2');
        txt.setAttribute('font-weight', '700'); txt.setAttribute('fill', '#ffffff');
        txt.textContent = labelText;
        g.appendChild(txt);
      }

      puckLayer.appendChild(g);
      puckTimers[id] = setTimeout(() => { g.remove(); }, 1500);
    }

    function clientToSvgPoint(clientX, clientY) {
      const pt = svgEl.createSVGPoint();
      pt.x = clientX; pt.y = clientY;
      const ctm = svgEl.getScreenCTM();
      return ctm ? pt.matrixTransform(ctm.inverse()) : { x: 0, y: 0 };
    }

    function unionBBox(els) {
      let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
      els.forEach(el => {
        if (!el.getBBox) return;
        try {
          const b = el.getBBox();
          if (b.width <= 0 && b.height <= 0) return;
          if (b.x < minX) minX = b.x;
          if (b.y < minY) minY = b.y;
          if (b.x + b.width > maxX) maxX = b.x + b.width;
          if (b.y + b.height > maxY) maxY = b.y + b.height;
        } catch (_) {}
      });
      if (!Number.isFinite(minX)) return null;
      return { x: minX, y: minY, width: maxX - minX, height: maxY - minY };
    }

    function analogPointForValue(act, rawVal, isRf) {
      const aLow = String(act || '').toLowerCase();
      const normAct = (aLow === 'color_temp' || aLow === 'temperature') ? 'kelvin' : (aLow === 'level' ? 'brightness' : aLow);
      let candidates = Array.from(svgEl.querySelectorAll(`.mbx-hit[data-act="${normAct}"]`));
      // For hue, exclude discrete R/G/B rectangular buttons (which have width < 40 and rx/rect tag) when a wheel or strip exists
      if (normAct === 'hue' && candidates.length > 1) {
        const nonRectBtn = candidates.filter(el => el.tagName.toLowerCase() === 'circle' || el.tagName.toLowerCase() === 'path' || !el.hasAttribute('data-val') || (el.getBBox && el.getBBox().width < 20));
        if (nonRectBtn.length) candidates = nonRectBtn;
      }
      if (!candidates.length && normAct === 'kelvin') {
        candidates = Array.from(svgEl.querySelectorAll('.mbx-hit[data-act="saturation"]'));
      }
      if (!candidates.length) return null;
      const bb = unionBBox(candidates);
      if (!bb || !bb.width || !bb.height) return null;

      const numVal = Number(rawVal);
      if (Number.isNaN(numVal)) return null;

      // Wheel vs Bar check: if width & height are roughly square (>35x35), it's a Color Ring!
      if (normAct === 'hue' && bb.height > 32 && bb.width > 32 && Math.abs(bb.width - bb.height) < 20) {
        const cx = bb.x + bb.width / 2, cy = bb.y + bb.height / 2;
        const r = Math.max(bb.width, bb.height) * 0.42;
        const deg = isRf ? physicalHueToWheelDeg(numVal, cal) : (((numVal % 360) + 360) % 360);
        const pt = polarPt(cx, cy, r, deg);
        return { x: pt.x, y: pt.y, text: `${Math.round(numVal)}°` };
      }

      const vert = bb.height > bb.width * 1.2;
      if (normAct === 'saturation' && vert) {
        // Physical vertical saturation slider has 0% at TOP and 100% at BOTTOM!
        const rawPct = Math.max(0, Math.min(100, numVal > 100 ? (numVal / 255) * 100 : numVal));
        const fracFromTop = rawPct / 100;
        return {
          x: bb.x + bb.width / 2,
          y: bb.y + 4 + fracFromTop * Math.max(4, bb.height - 8),
          text: `${Math.round(rawPct)}%`
        };
      }

      const pct = isRf ? normalizeSliderPct(numVal, normAct) : Math.max(0, Math.min(100, numVal > 100 ? (numVal / 255) * 100 : numVal));
      const frac = Math.max(0, Math.min(1, pct / 100));
      return {
        x: vert ? (bb.x + bb.width / 2) : (bb.x + 4 + frac * Math.max(4, bb.width - 8)),
        y: vert ? (bb.y + 4 + (1 - frac) * Math.max(4, bb.height - 8)) : (bb.y + bb.height / 2),
        text: `${Math.round(pct)}%`
      };
    }

    function pulseAction(action, zone, isRf, value) {
      if (zone !== undefined && zone !== null && !isNaN(Number(zone))) {
        activeZone = Number(zone);
        updateZoneHighlight();
      }
      const cls = isRf ? 'fire-rf' : 'fire-ui';

      // 1. Segmented Ring / Slider Pads
      const segEls = svgEl.querySelectorAll(`.mbx-seg-hit[data-seg-act="${action}"]`);
      if (segEls.length > 0) {
        segEls.forEach(el => {
          el.classList.add(cls);
          if (el.getBBox) {
            const bb = el.getBBox();
            showFingerPuck(bb.x + bb.width / 2, bb.y + bb.height / 2, action.replace(/_seg_/, ' #'), isRf, isRf ? 'rf' : 'ui');
          }
          setTimeout(() => el.classList.remove(cls), 750);
        });
        return;
      }

      // 2. Zone-only selection pulse
      if (action === 'zone' || action === 'zone_on' || action === 'zone_off') {
        const zTarget = svgEl.querySelector(`.mbx-hit[data-zone="${zone}"][data-act="${action}"]`) || svgEl.querySelector(`.mbx-hit[data-zone="${zone}"]`);
        if (zTarget && zTarget.getBBox) {
          zTarget.classList.add(cls);
          const bb = zTarget.getBBox();
          showFingerPuck(bb.x + bb.width / 2, bb.y + bb.height / 2, `Z${zone}`, isRf, isRf ? 'rf_btn' : 'ui_btn');
          setTimeout(() => zTarget.classList.remove(cls), 720);
          return;
        }
      }

      // 3. Analog Wheel & Sliders (Factory AND Custom Panels): Show exact finger position puck WITHOUT flashing whole track!
      const isAnalogAct = /^(hue|brightness|level|kelvin|color_temp|temperature|saturation)$/i.test(String(action || ''));
      if (isAnalogAct && value !== undefined && value !== null && value !== '' && !Number.isNaN(Number(value)) && Number(value) >= 0) {
        const pt = analogPointForValue(action, value, isRf);
        if (pt) {
          showFingerPuck(pt.x, pt.y, `${isRf ? 'RF' : 'UI'} ${pt.text}`, isRf, isRf ? `rf_${action}` : `ui_${action}`);
          return;
        }
      }

      // 4. Standard Discrete Buttons (ON, OFF, W, M, S+, S-, 60S)
      const acts = ACT_TO_SVG[action] || [action];
      let shownBtnPuck = false;
      acts.forEach(a => {
        svgEl.querySelectorAll(`.mbx-hit[data-act="${a}"]`).forEach(el => {
          if (el.hasAttribute('data-zone') && Number(el.getAttribute('data-zone')) !== Number(zone)) return;
          el.classList.add(cls);
          if (!shownBtnPuck && el.getBBox) {
            const bb = el.getBBox();
            showFingerPuck(bb.x + bb.width / 2, bb.y + bb.height / 2, String(action).toUpperCase(), isRf, isRf ? 'rf_btn' : 'ui_btn');
            shownBtnPuck = true;
          }
          setTimeout(() => el.classList.remove(cls), 720);
        });
      });
    }

    // DESIGN MODE: Click any stencil slot / segment / rocker to customize it!
    if (editMode) {
      svgEl.querySelectorAll('.mbx-seg-hit, .mbx-hit').forEach(el => {
        el.style.cursor = 'pointer';
        el.onclick = (ev) => {
          ev.stopPropagation();
          const pKey = el.getAttribute('data-pad-key') || el.getAttribute('data-seg-act') || el.getAttribute('data-act') || 'btn_on';
          const act = el.getAttribute('data-seg-act') || el.getAttribute('data-act') || 'on';
          const z = el.getAttribute('data-zone');
          if (typeof opts.onSelectPad === 'function') opts.onSelectPad(pKey, act, z);
        };
      });
      return { pulseAction, setActiveZone: (z) => { activeZone = Number(z); updateZoneHighlight(); } };
    }

    // Helper for Single-Button Multi-Function pads (Short Tap = +1 Step Cycle, Hold = ON/OFF Toggle)
    function attachPadInteraction(el, pKey, baseAct, fixedZone, fixedVal) {
      const padCfg = (facia && facia.pads && facia.pads[pKey]) || {};
      const mf = padCfg.multifunc && padCfg.multifunc.enabled ? padCfg.multifunc : null;
      let holdTimer = null, heldFired = false;

      el.addEventListener('pointerdown', () => {
        if (el.getAttribute('data-blanked') === '1') return;
        heldFired = false;
        holdTimer = setTimeout(() => {
          heldFired = true;
          const zNext = fixedZone !== null ? fixedZone : activeZone;
          const bb = el.getBBox ? el.getBBox() : null;
          if (mf) {
            const st = stepCounters[pKey] || { step: 1, on: true };
            st.on = !st.on;
            stepCounters[pKey] = st;
            const msg = `${padCfg.label || pKey}: ${st.on ? 'ON' : 'OFF'} (Hold Toggle)`;
            if (bb) showFingerPuck(bb.x + bb.width / 2, bb.y + bb.height / 2, st.on ? 'HOLD: ON' : 'HOLD: OFF', false, 'ui_btn');
            if (typeof opts.onAction === 'function') opts.onAction(baseAct, st.on ? 100 : 0, zNext, msg);
          } else if (baseAct === 'on' || baseAct === 'off' || baseAct === 'zone_on' || baseAct === 'zone_off' || baseAct === 'set_white') {
            const longAct = (baseAct === 'off' || baseAct === 'zone_off') ? 'night_mode' : 'set_white';
            if (bb) showFingerPuck(bb.x + bb.width / 2, bb.y + bb.height / 2, `HOLD ${longAct.toUpperCase()}`, false, 'ui_btn');
            if (typeof opts.onAction === 'function') opts.onAction(longAct, 0, zNext);
          }
        }, 580);
      });
      const clr = () => { if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; } };
      el.addEventListener('pointerup', clr);
      el.addEventListener('pointerleave', clr);

      el.addEventListener('click', (ev) => {
        ev.stopPropagation();
        if (el.getAttribute('data-blanked') === '1') return;
        if (heldFired) { heldFired = false; return; }
        let zNext = activeZone;
        if (fixedZone !== null) {
          zNext = fixedZone;
          activeZone = zNext;
          updateZoneHighlight();
          if (typeof opts.onZoneChange === 'function') opts.onZoneChange(zNext);
        }
        const sp = clientToSvgPoint(ev.clientX, ev.clientY);
        const bb = el.getBBox ? el.getBBox() : null;
        const px = (sp && !Number.isNaN(sp.x) && sp.x !== 0) ? sp.x : (bb ? bb.x + bb.width / 2 : 0);
        const py = (sp && !Number.isNaN(sp.y) && sp.y !== 0) ? sp.y : (bb ? bb.y + bb.height / 2 : 0);
        if (mf) {
          const maxS = Math.max(2, Number(mf.steps || 4));
          const st = stepCounters[pKey] || { step: 0, on: true };
          st.on = true;
          st.step = (st.step % maxS) + 1;
          stepCounters[pKey] = st;
          const badge = `${padCfg.label || pKey}: ${mf.unit || 'Step'} ${st.step}/${maxS}`;
          showFingerPuck(px, py, `${st.step}/${maxS}`, false, 'ui_btn');
          if (typeof opts.onAction === 'function') opts.onAction(baseAct, Math.round((st.step / maxS) * 100), zNext, badge);
          return;
        }
        showFingerPuck(px, py, padCfg.label || (baseAct === 'zone' ? `Z${zNext}` : baseAct.toUpperCase()), false, 'ui_btn');
        if (baseAct === 'zone') return;
        if (typeof opts.onAction === 'function') opts.onAction(baseAct, fixedVal !== null ? fixedVal : 100, zNext, padCfg.label || undefined);
      });
    }

    // Bind Segmented Ring/Bar Cells
    svgEl.querySelectorAll('.mbx-seg-hit').forEach(el => {
      const segAct = el.getAttribute('data-seg-act') || '';
      const pKey = el.getAttribute('data-pad-key') || segAct;
      attachPadInteraction(el, pKey, segAct, null, 1);
    });

    // Bind Continuous Sliders/Wheels + Discrete Buttons
    svgEl.querySelectorAll('.mbx-hit').forEach(el => {
      const act = el.getAttribute('data-act') || 'on';
      const pKey = el.getAttribute('data-pad-key') || act;
      const zAttr = el.getAttribute('data-zone');
      const fixedZ = (zAttr !== null && zAttr !== '') ? Number(zAttr) : null;
      const fixedVal = el.hasAttribute('data-val') ? Number(el.getAttribute('data-val')) : null;
      const tag = el.tagName.toLowerCase();
      const isDiscreteRgbBtn = (act === 'hue' && (fixedVal === 0 || fixedVal === 120 || fixedVal === 240) && tag === 'rect');
      const isContinuous = (act === 'hue' || act === 'brightness' || act === 'kelvin' || act === 'saturation') && !isDiscreteRgbBtn;

      if (isContinuous) {
        let dragging = false, lastTxMs = 0;
        const scrub = (ev, forceTx) => {
          if (el.getAttribute('data-blanked') === '1') return;
          const bb = el.getBBox();
          const sp = clientToSvgPoint(ev.clientX, ev.clientY);
          let outVal = 0, px = sp.x, py = sp.y, lbl = '';
          if (act === 'hue' && bb.height > bb.width * 0.75) {
            const cx = bb.x + bb.width / 2, cy = bb.y + bb.height / 2, r = Math.max(bb.width, bb.height) * 0.39;
            let deg = ((Math.atan2(sp.y - cy, sp.x - cx) * 180) / Math.PI + 90 + 360) % 360;
            const snap = polarPt(cx, cy, r, deg);
            px = snap.x; py = snap.y;
            let calDeg = (deg - Number(cal.hue_offset || 0) + 360) % 360;
            if (cal.hue_invert) calDeg = (360 - calDeg) % 360;
            outVal = Math.round(calDeg) % 360; lbl = `${outVal}°`;
          } else {
            const vert = bb.height > bb.width * 1.3;
            let frac = Math.max(0, Math.min(1, vert ? (1 - (sp.y - bb.y) / bb.height) : ((sp.x - bb.x) / bb.width)));
            px = vert ? (bb.x + bb.width / 2) : (bb.x + frac * bb.width);
            py = vert ? (bb.y + (1 - frac) * bb.height) : (bb.y + bb.height / 2);
            const inv = act === 'brightness' ? cal.bri_invert : act === 'kelvin' ? cal.cct_invert : cal.sat_invert;
            if (inv) frac = 1 - frac;
            outVal = Math.round(frac * 100); lbl = `${outVal}%`;
          }
          showFingerPuck(px, py, lbl, false, 'ui_analog');
          if (typeof opts.onScrubPreview === 'function') opts.onScrubPreview(act, outVal);
          const now = Date.now();
          if (forceTx || now - lastTxMs >= 135) {
            lastTxMs = now;
            if (typeof opts.onAction === 'function') opts.onAction(act, outVal, fixedZ !== null ? fixedZ : activeZone);
          }
        };
        el.addEventListener('pointerdown', (ev) => { ev.preventDefault(); ev.stopPropagation(); dragging = true; try { el.setPointerCapture(ev.pointerId); } catch (_) {} scrub(ev, true); });
        el.addEventListener('pointermove', (ev) => { if (dragging) scrub(ev, false); });
        el.addEventListener('pointerup', (ev) => { if (dragging) { dragging = false; scrub(ev, true); } });
        el.addEventListener('pointercancel', () => { dragging = false; });
        return;
      }

      attachPadInteraction(el, pKey, act, fixedZ, fixedVal);
    });

    return { pulseAction, setActiveZone: (z) => { activeZone = Number(z); updateZoneHighlight(); } };
  }

  // ============================================================================
  // 2. 1:1 PRINT / CUT STENCIL SHEET BUILDER
  // ============================================================================
  function buildOneToOnePrintSvg(model, facia, touchZones, activeZone) {
    const Cat = root.MiBoxerCatalog;
    const dims = Cat.getPhysicalDims(model);
    const rendered = Cat.renderCapacitiveStencilSvg(model, {
      size: 'large', uid: 'print_1to1',
      facia: Object.assign({}, facia || {}, { enabled: true }),
      touchZones, activeZone: activeZone || 1, stencilMode: true
    });
    const vbMatch = rendered.match(/viewBox="([^"]+)"/);
    const vb = vbMatch ? vbMatch[1] : '0 0 210 210';
    const inner = rendered.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
    return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${dims.width_mm}mm" height="${dims.height_mm}mm" viewBox="${vb}" data-model="${model.id}">\n${inner}\n</svg>`;
  }

  function openPrintSheetWindow(remoteName, hexId, model, facia, touchZones, activeZone) {
    const Cat = root.MiBoxerCatalog;
    const dims = Cat.getPhysicalDims(model);
    const svg1to1 = buildOneToOnePrintSvg(model, facia, touchZones, activeZone);
    const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><title>1:1 Capacitive Stencil — ${remoteName} (${model.id})</title>
      <style>
        @page { size: A4 portrait; margin: 12mm; }
        body { font-family: Inter, system-ui, sans-serif; color: #0f172a; margin: 0; padding: 16px; background: #f8fafc; }
        .no-print { background: #0f172a; color: #fff; padding: 12px 18px; border-radius: 10px; margin-bottom: 18px; display: flex; justify-content: space-between; align-items: center; }
        .no-print button { background: #0284c7; color: #fff; border: none; padding: 8px 16px; border-radius: 6px; font-weight: 700; cursor: pointer; }
        .sheet { background: #fff; border: 1px dashed #94a3b8; padding: 16mm; display: flex; flex-direction: column; align-items: center; gap: 10mm; }
        .crop-wrap { padding: 3mm; border: 0.25mm dashed #64748b; display: inline-block; }
        .ruler-row { display: flex; align-items: center; gap: 14px; border-top: 1px solid #cbd5e1; padding-top: 8mm; width: 100%; justify-content: center; font-size: 11px; }
        .box-10mm { width: 10mm; height: 10mm; border: 0.4mm solid #000; display: inline-block; flex-shrink: 0; }
        @media print { body { background: #fff; padding: 0; } .no-print { display: none; } .sheet { border: none; padding: 4mm; } }
      </style></head><body>
      <div class="no-print">
        <div><strong>1:1 Capacitive Glass Overlay Sheet</strong> — Set Printer Scale to <b>100% / Actual Size</b></div>
        <button onclick="window.print()">Print / Save 1:1 PDF</button>
      </div>
      <div class="sheet">
        <div style="text-align:center">
          <div style="font-size:15px;font-weight:800">${remoteName} • ${model.name || model.id} (${hexId})</div>
          <div style="font-size:11px;color:#475569;margin-top:3px">Exact Outer Cut: <b>${dims.width_mm} mm × ${dims.height_mm} mm</b> • Inner Glass: ${dims.glass_w_mm} × ${dims.glass_h_mm} mm</div>
        </div>
        <div class="crop-wrap">${svg1to1}</div>
        <div class="ruler-row">
          <span class="box-10mm"></span>
          <div><b>10 mm × 10 mm Scale Verification Square</b> — Confirm 10.0 mm with a ruler before applying to capacitive panel.</div>
        </div>
      </div></body></html>`;
    const w = window.open('', '_blank');
    if (w) { w.document.open(); w.document.write(html); w.document.close(); }
  }

  // ============================================================================
  // 3. WYSIWYG CAPACITIVE PANEL STENCIL DESIGNER (Presets + Segments + Rooms)
  // ============================================================================
  function slugifyCustomId(baseId, nameStr) {
    const clean = String(nameStr || 'Custom').toUpperCase().replace(/[^A-Z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 14);
    const sfx = Math.random().toString(36).slice(2, 5).toUpperCase();
    return `CUST_${baseId.replace(/[^A-Z0-9]/gi, '').toUpperCase()}_${clean || 'PANEL'}_${sfx}`;
  }

  function openFaciaDesigner(opts) {
    injectStudioStyles();
    const Cat = root.MiBoxerCatalog;
    const rawModel = typeof opts.model === 'string' ? (Cat.MODELS.find(m => m.id === opts.model) || Cat.MODELS[0]) : opts.model;
    if (!Cat.isCapacitiveFlatPanel(rawModel)) {
      alert(`${rawModel.id} uses mechanical buttons/sliders. Full-surface stencil stickers are currently for flat capacitive glass panels (handheld slider decals coming in v2).`);
      return;
    }

    const isEditingExistingCustom = Boolean(rawModel.isCustom && !opts.forceClone);
    const baseModel = Cat.resolveBaseModel ? Cat.resolveBaseModel(rawModel) : rawModel;
    const bp = Cat.getPanelBlueprint(baseModel);
    const dims = Cat.getPhysicalDims(baseModel);
    const presets = Cat.getSamplePresetsForModel(baseModel);
    const hexId = opts.hexId || '0x0000';
    const remoteName = opts.remoteName || rawModel.name || baseModel.id;
    const hubBase = (opts.hubUrl || '').replace(/\/$/, '');

    let customModelName = isEditingExistingCustom ? (rawModel.name || `${baseModel.id} Custom`) : `${baseModel.id} ${remoteName.replace(baseModel.id, '').trim() || 'Smart Room'}`.trim();
    let bindCurrentRemote = opts.bindRemoteByDefault !== false;

    const seedTz = (isEditingExistingCustom && rawModel.touchZones) ? rawModel.touchZones : opts.touchZones;
    const seedFacia = (isEditingExistingCustom && rawModel.facia) ? rawModel.facia : opts.facia;

    let tz = normalizeTouchZones(seedTz);
    let cal = Object.assign(defaultCalibration(), opts.calibration || {});
    const draft = Object.assign({
      v: 2, enabled: true,
      theme: baseModel.finish === 'black' ? 'matte_black' : 'pure_white',
      monochrome: false, bgPattern: 'clean', sliderStyle: 'factory',
      defaultPadStyle: 'keycap', hideLogo: true, showLedPinhole: true,
      panelTitle: '', material: 'matte_vinyl_peelable', colors: {}, pads: {}
    }, JSON.parse(JSON.stringify(seedFacia || {})), { enabled: true });
    const model = baseModel;

    // Available touch surfaces on this specific panel model
    const panelSurfaces = bp.slots.filter(s => Boolean(s.surf));
    let mode = 'edit';
    let iconTab = model.zones > 1 ? 'room' : 'device';
    let activeZone = 1;
    let selectedPadKey = tz.hue_ring.enabled ? 'hue_seg_1' : (bp.slots.find(s => s.key === 'zone_1') ? 'zone_1' : 'btn_on');
    let lastTestReadout = 'Load a Showcase Preset above or click any stencil slot on the panel to customize.';
    const stepState = {};

    const backdrop = document.createElement('div');
    backdrop.className = 'mlrs-modal-backdrop' + (isHostDark() ? ' mlrs-dark' : '');

    function syncLabelToTouchZone(padKey, lbl) {
      const m = padKey.match(/^(hue|cct|sat|bri)_seg_(\d+)$/);
      if (!m) return;
      const map = { hue: 'hue_ring', cct: 'cct_bar', sat: 'sat_bar', bri: 'bri_bar' };
      const sk = map[m[1]], idx = Number(m[2]) - 1;
      if (tz[sk] && idx >= 0 && idx < 12) {
        while (tz[sk].labels.length <= idx) tz[sk].labels.push('');
        tz[sk].labels[idx] = lbl;
      }
    }

    function renderModal() {
      const presetTheme = Cat.FACIA_THEMES[draft.theme] || Cat.FACIA_THEMES.pure_white;
      const effColors = Object.assign({}, presetTheme, draft.colors || {});
      const curPad = draft.pads[selectedPadKey] || {};
      const curMf = curPad.multifunc || { enabled: false, steps: 4, unit: 'Spd' };

      const iconEntries = Object.entries(Cat.FACIA_ICONS).filter(([k, ic]) => k === 'none' || ic.group === iconTab);

      backdrop.innerHTML = `
        <div class="mlrs-modal" onclick="event.stopPropagation()">
          <div class="mlrs-topbar">
            <div>
              <div style="font-size:16px;font-weight:700">Capacitive Panel Facia &amp; Stencil Studio — ${remoteName} (${model.id})</div>
              <div style="font-size:12px;color:var(--mlrs-muted-fg);margin-top:2px">${dims.width_mm} × ${dims.height_mm} mm Glass Stencil • Segment sliders into multi-function device pads &amp; standardized room icons</div>
            </div>
            <div style="display:flex;gap:10px;align-items:center">
              <div class="mlrs-pill-group">
                <button type="button" class="mlrs-btn ${mode === 'edit' ? 'active-tab' : ''}" id="mlrsModeEdit">1. Design Stencil</button>
                <button type="button" class="mlrs-btn ${mode === 'test' ? 'active-tab' : ''}" id="mlrsModeTest">2. Interactive Test (Tap / Hold)</button>
              </div>
              <button type="button" class="mlrs-btn" id="mlrsCloseBtn">✕ Close</button>
            </div>
          </div>

          <div class="mlrs-preset-bar" style="justify-content:space-between">
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <span style="padding:3px 8px;border-radius:5px;background:var(--mlrs-bg);border:1px solid var(--mlrs-border);font-weight:700">
                ${isEditingExistingCustom ? `Editing Custom Type: ${rawModel.id}` : `Base Hardware: ${baseModel.id} (Read-Only)`}
              </span>
              <label style="font-weight:600;margin:0">Custom Remote Name:</label>
              <input type="text" class="mlrs-input" id="mlrsCustomModelName" style="width:230px;padding:4px 8px" value="${customModelName.replace(/"/g, '&quot;')}" placeholder="e.g. Master Suite B0"/>
              ${opts.hexId ? `<label style="display:flex;align-items:center;gap:5px;margin-left:6px;cursor:pointer;font-weight:500"><input type="checkbox" id="mlrsBindNowChk" ${bindCurrentRemote ? 'checked' : ''}/> Assign to ${hexId} now</label>` : ''}
            </div>
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
              <span style="font-weight:600;color:var(--mlrs-muted-fg)">Starter Templates:</span>
              ${presets.map((pr, idx) => `<button type="button" class="mlrs-btn" data-preset-idx="${idx}" title="${pr.desc}">✨ ${pr.name.split(' (')[0]}</button>`).join('')}
            </div>
          </div>

          <div class="mlrs-body">
            <!-- LEFT: Touch Bar/Ring Segmentation + Surface Theme -->
            <div class="mlrs-col">
              ${panelSurfaces.length ? `
                <div class="mlrs-sec-title">1. Segment Sliders / Ring Into Buttons</div>
                <div class="mlrs-box-sub">
                  ${panelSurfaces.map(ps => {
                    const sc = tz[ps.surf];
                    const maxS = ps.surf === 'hue_ring' ? 8 : 5;
                    const minS = ps.surf === 'hue_ring' ? 3 : 2;
                    const friendly = ps.surf === 'hue_ring' ? (ps.type === 'ring' ? 'Color Ring' : 'Top Color Strip') : ps.surf === 'cct_bar' ? 'CCT Strip' : ps.surf === 'sat_bar' ? 'Left Touch Bar' : 'Dimmer Bar';
                    return `<div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:6px;font-size:12px">
                      <label style="display:flex;align-items:center;gap:6px;margin:0;cursor:pointer;font-weight:600">
                        <input type="checkbox" data-seg-toggle="${ps.surf}" ${sc.enabled ? 'checked' : ''}/> ${friendly}
                      </label>
                      <select class="mlrs-select" style="width:108px;padding:3px 6px;font-size:11.5px" data-seg-count="${ps.surf}" ${!sc.enabled ? 'disabled' : ''}>
                        ${Array.from({ length: maxS - minS + 1 }, (_, k) => minS + k).map(n => `<option value="${n}" ${sc.segments === n ? 'selected' : ''}>${n} Buttons</option>`).join('')}
                      </select>
                    </div>`;
                  }).join('')}
                  <div style="font-size:11px;color:var(--mlrs-muted-fg);margin-top:4px">Enabled bars split into individual icon buttons on both the stencil &amp; ESP32 Hub!</div>
                </div>
              ` : ''}

              <div class="mlrs-sec-title">2. Surface Theme &amp; Print Palette</div>
              <div class="mlrs-field">
                <label>Theme Preset</label>
                <select class="mlrs-select" id="mlrsThemeSel">
                  ${Object.entries(Cat.FACIA_THEMES).map(([k, v]) => `<option value="${k}" ${draft.theme === k ? 'selected' : ''}>${v.name}</option>`).join('')}
                </select>
              </div>
              <div class="mlrs-field" style="display:grid;grid-template-columns:1fr 1fr;gap:7px">
                <div><label>Glass</label><input type="color" class="mlrs-input mlrs-swatch" id="mlrsColGlass" value="${effColors.glass}"/></div>
                <div><label>Keycap Fill</label><input type="color" class="mlrs-input mlrs-swatch" id="mlrsColPad" value="${effColors.padFill}"/></div>
                <div><label>Cut/Border</label><input type="color" class="mlrs-input mlrs-swatch" id="mlrsColStroke" value="${effColors.padStroke}"/></div>
                <div><label>Icon/Text Ink</label><input type="color" class="mlrs-input mlrs-swatch" id="mlrsColInk" value="${effColors.ink}"/></div>
              </div>
              <div class="mlrs-field">
                <label>Default Pad Style</label>
                <select class="mlrs-select" id="mlrsDefPadStyle">
                  <option value="keycap" ${draft.defaultPadStyle === 'keycap' ? 'selected' : ''}>Filled Keycap</option>
                  <option value="outline" ${draft.defaultPadStyle === 'outline' ? 'selected' : ''}>Crisp Stencil Outline</option>
                  <option value="minimal" ${draft.defaultPadStyle === 'minimal' ? 'selected' : ''}>Frameless Icon + Label</option>
                </select>
              </div>
              <div class="mlrs-field">
                <label>Panel Header Title</label>
                <input type="text" class="mlrs-input" id="mlrsPanelTitle" placeholder="e.g. MASTER SUITE" value="${draft.panelTitle || ''}"/>
              </div>
              <div class="mlrs-field" style="display:flex;flex-direction:column;gap:5px">
                <label style="display:flex;align-items:center;gap:6px;font-weight:500;cursor:pointer"><input type="checkbox" id="mlrsMonoChk" ${draft.monochrome ? 'checked' : ''}/> Pure Monochrome / B&amp;W Ink</label>
                <label style="display:flex;align-items:center;gap:6px;font-weight:500;cursor:pointer"><input type="checkbox" id="mlrsLedHole" ${draft.showLedPinhole ? 'checked' : ''}/> Show Status LED Pinhole</label>
              </div>
            </div>

            <!-- CENTER: Accurate 1:1 Capacitive Stencil Canvas -->
            <div class="mlrs-stage-wrap">
              <div style="margin-bottom:10px;font-size:12px;color:var(--mlrs-muted-fg);text-align:center">
                ${mode === 'edit' ? '👆 <b>Design Mode:</b> Click any button, room rocker, or segmented wheel/bar slot to assign its icon &amp; function' : '🧪 <b>Interactive Test:</b> Short-tap multi-function pads to step (1→6), or <b>Hold 0.6s</b> to toggle ON/OFF!'}
              </div>
              <div class="mlrs-stage-card">
                <div id="mlrsCanvasStage" style="display:flex;align-items:center;justify-content:center;min-height:415px"></div>
                <div id="mlrsTestBanner" style="margin-top:12px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:11.5px;color:var(--mlrs-fg);background:var(--mlrs-muted);padding:6px 12px;border-radius:6px;border:1px solid var(--mlrs-border);text-align:center">
                  ${lastTestReadout}
                </div>
              </div>
            </div>

            <!-- RIGHT: Selected Slot Inspector + Standardized Room & Device Icons -->
            <div class="mlrs-col">
              <div class="mlrs-sec-title" style="margin-bottom:6px">3. Selected Slot: <code style="padding:2px 6px;border-radius:4px;background:var(--mlrs-muted);border:1px solid var(--mlrs-border)">${selectedPadKey}</code></div>

              <div class="mlrs-field">
                <label>Slot Visibility / Style</label>
                <select class="mlrs-select" id="mlrsPadStyle">
                  <option value="" ${!curPad.style ? 'selected' : ''}>Use Panel Default (${draft.defaultPadStyle})</option>
                  <option value="keycap" ${curPad.style === 'keycap' ? 'selected' : ''}>Filled Keycap</option>
                  <option value="outline" ${curPad.style === 'outline' ? 'selected' : ''}>Crisp Outline</option>
                  <option value="minimal" ${curPad.style === 'minimal' ? 'selected' : ''}>Icon + Label Only</option>
                  <option value="blank" ${curPad.style === 'blank' ? 'selected' : ''}>Mask / Blank Unused Slot</option>
                </select>
              </div>

              <div class="mlrs-field" style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
                <div>
                  <label>Primary Label</label>
                  <input type="text" class="mlrs-input" id="mlrsPadLabel" placeholder="e.g. Living, Fan" value="${curPad.label !== undefined ? curPad.label : ''}"/>
                </div>
                <div>
                  <label>Sub-Label / Hint</label>
                  <input type="text" class="mlrs-input" id="mlrsPadSub" placeholder="Auto or custom" value="${curPad.sublabel !== undefined ? curPad.sublabel : ''}"/>
                </div>
              </div>

              <!-- Single-Button Multi-Function Showcase Config (Tap = Step 1..N, Hold = Toggle ON/OFF) -->
              <div class="mlrs-box-sub">
                <label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:700;cursor:pointer;margin-bottom:5px">
                  <input type="checkbox" id="mlrsMfChk" ${curMf.enabled ? 'checked' : ''}/> Single-Button Multi-Function (Step + Hold)
                </label>
                <div style="font-size:11px;color:var(--mlrs-muted-fg);margin-bottom:6px">Short tap increments step (+1 cycle); long press toggles ON/OFF.</div>
                ${curMf.enabled ? `
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px">
                    <div><label style="font-size:11px">Cycle Steps (2–8)</label><input type="number" min="2" max="8" class="mlrs-input" id="mlrsMfSteps" value="${curMf.steps || 6}"/></div>
                    <div><label style="font-size:11px">Step Unit</label><input type="text" class="mlrs-input" id="mlrsMfUnit" placeholder="Spd / Pos / Temp" value="${curMf.unit || 'Spd'}"/></div>
                  </div>
                ` : ''}
              </div>

              <div class="mlrs-field">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
                  <label style="margin:0">Standardized Icons</label>
                  <div class="mlrs-pill-group">
                    <button type="button" class="mlrs-btn ${iconTab === 'room' ? 'active-tab' : ''}" style="padding:3px 8px;font-size:11px" id="mlrsTabRoom">Rooms (12)</button>
                    <button type="button" class="mlrs-btn ${iconTab === 'device' ? 'active-tab' : ''}" style="padding:3px 8px;font-size:11px" id="mlrsTabDev">Devices (20)</button>
                  </div>
                </div>
                <div class="mlrs-icon-grid" id="mlrsIconGrid">
                  ${iconEntries.map(([k, ic]) => `
                    <button type="button" class="mlrs-icon-cell ${(curPad.icon || 'none') === k ? 'sel' : ''}" data-ico="${k}" title="${ic.name}">
                      ${ic.svg ? `<svg viewBox="0 0 24 24" width="18" height="18">${ic.svg}</svg>` : '<span style="font-size:10px;color:var(--mlrs-muted-fg)">None</span>'}
                    </button>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <div class="mlrs-footer">
            <div style="display:flex;gap:8px;align-items:center">
              ${isEditingExistingCustom ? `<button type="button" class="mlrs-btn danger-outline" id="mlrsDeleteCustomBtn">Delete Custom Remote (${rawModel.id})</button>` : `<span style="font-size:12px;color:var(--mlrs-muted-fg)">Factory ${baseModel.id} is read-only — saving creates a reusable Custom Remote type.</span>`}
            </div>
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              <button type="button" class="mlrs-btn" id="mlrsPrintBtn">Print 1:1 Stencil Sheet</button>
              <button type="button" class="mlrs-btn" id="mlrsDlSvgBtn">Download 1:1 SVG</button>
              ${isEditingExistingCustom ? `<button type="button" class="mlrs-btn" id="mlrsSaveCopyBtn">Save as New Copy</button>` : ''}
              <button type="button" class="mlrs-btn" id="mlrsCancelBtn">Cancel</button>
              <button type="button" class="mlrs-btn primary" id="mlrsDeployBtn">${isEditingExistingCustom ? 'Update Custom Remote' : '+ Create Custom Remote'}</button>
            </div>
          </div>
        </div>
      `;

      const stageBox = backdrop.querySelector('#mlrsCanvasStage');
      const refreshStageOnly = () => {
        mountInteractiveStage(stageBox, {
          model, uid: 'facia_editor_svg', maxHeight: '425px',
          facia: draft, touchZones: tz, calibration: cal, activeZone,
          editMode: mode === 'edit', selectedPadKey: mode === 'edit' ? selectedPadKey : null,
          stepState,
          onSelectPad: (pk) => { selectedPadKey = pk; renderModal(); },
          onZoneChange: (z) => { activeZone = z; },
          onAction: (act, val, z, customMsg) => {
            lastTestReadout = customMsg ? `🟢 ${customMsg}  →  Hub TX (${act}=${val}, Z${z})` : `🟠 TX → Zone ${z} • ${act}(${val})`;
            const b = backdrop.querySelector('#mlrsTestBanner');
            if (b) b.textContent = lastTestReadout;
            if (typeof opts.onTestAction === 'function') opts.onTestAction(act, val, z);
          }
        });
      };
      refreshStageOnly();

      // Mode & Close buttons
      backdrop.querySelector('#mlrsModeEdit').onclick = () => { mode = 'edit'; renderModal(); };
      backdrop.querySelector('#mlrsModeTest').onclick = () => { mode = 'test'; lastTestReadout = 'Tap any multi-function device button to cycle steps (1→6), or Hold 0.6s to toggle ON/OFF!'; renderModal(); };
      backdrop.querySelector('#mlrsCloseBtn').onclick = () => backdrop.remove();
      backdrop.querySelector('#mlrsCancelBtn').onclick = () => backdrop.remove();

      // Preset Showcase Loader buttons
      backdrop.querySelectorAll('[data-preset-idx]').forEach(btn => {
        btn.onclick = () => {
          const pr = presets[Number(btn.getAttribute('data-preset-idx'))];
          if (!pr) return;
          tz = normalizeTouchZones(JSON.parse(JSON.stringify(pr.touch_zones)));
          Object.assign(draft, JSON.parse(JSON.stringify(pr.facia)));
          selectedPadKey = Object.keys(draft.pads || {})[0] || selectedPadKey;
          lastTestReadout = `Loaded "${pr.name}" — switch to "2. Interactive Test" to try short-tap step cycling & long-hold toggle!`;
          renderModal();
        };
      });

      // Segmentation toggles & counts
      backdrop.querySelectorAll('[data-seg-toggle]').forEach(chk => {
        chk.onchange = () => {
          const sk = chk.getAttribute('data-seg-toggle');
          tz[sk].enabled = chk.checked;
          if (chk.checked) {
            const pref = sk === 'hue_ring' ? 'hue_seg_1' : sk === 'cct_bar' ? 'cct_seg_1' : sk === 'sat_bar' ? 'sat_seg_1' : 'bri_seg_1';
            selectedPadKey = pref;
          }
          renderModal();
        };
      });
      backdrop.querySelectorAll('[data-seg-count]').forEach(sel => {
        sel.onchange = () => {
          const sk = sel.getAttribute('data-seg-count');
          tz[sk].segments = Number(sel.value);
          while (tz[sk].labels.length < tz[sk].segments) tz[sk].labels.push('');
          renderModal();
        };
      });

      // Surface Theme & Colors
      backdrop.querySelector('#mlrsThemeSel').onchange = (e) => {
        draft.theme = e.target.value; draft.colors = {};
        draft.monochrome = Boolean((Cat.FACIA_THEMES[draft.theme] || {}).mono);
        renderModal();
      };
      [['#mlrsColGlass','glass'],['#mlrsColPad','padFill'],['#mlrsColStroke','padStroke'],['#mlrsColInk','ink']].forEach(([id, k]) => {
        backdrop.querySelector(id).oninput = (e) => { draft.colors = draft.colors || {}; draft.colors[k] = e.target.value; refreshStageOnly(); };
      });
      backdrop.querySelector('#mlrsDefPadStyle').onchange = (e) => { draft.defaultPadStyle = e.target.value; renderModal(); };
      backdrop.querySelector('#mlrsPanelTitle').oninput = (e) => { draft.panelTitle = e.target.value; refreshStageOnly(); };
      backdrop.querySelector('#mlrsMonoChk').onchange = (e) => { draft.monochrome = e.target.checked; renderModal(); };
      backdrop.querySelector('#mlrsLedHole').onchange = (e) => { draft.showLedPinhole = e.target.checked; refreshStageOnly(); };

      // Right Column Inspector
      const ensurePad = () => { if (!draft.pads[selectedPadKey]) draft.pads[selectedPadKey] = {}; return draft.pads[selectedPadKey]; };
      backdrop.querySelector('#mlrsPadStyle').onchange = (e) => { const p = ensurePad(); if (e.target.value) p.style = e.target.value; else delete p.style; renderModal(); };
      backdrop.querySelector('#mlrsPadLabel').oninput = (e) => { const p = ensurePad(); p.label = e.target.value; syncLabelToTouchZone(selectedPadKey, e.target.value); refreshStageOnly(); };
      backdrop.querySelector('#mlrsPadSub').oninput = (e) => { const p = ensurePad(); p.sublabel = e.target.value; refreshStageOnly(); };
      backdrop.querySelector('#mlrsMfChk').onchange = (e) => {
        const p = ensurePad();
        p.multifunc = Object.assign({ steps: 6, unit: 'Spd' }, p.multifunc || {}, { enabled: e.target.checked });
        renderModal();
      };
      const mfS = backdrop.querySelector('#mlrsMfSteps');
      if (mfS) mfS.oninput = (e) => { ensurePad().multifunc.steps = Number(e.target.value || 4); refreshStageOnly(); };
      const mfU = backdrop.querySelector('#mlrsMfUnit');
      if (mfU) mfU.oninput = (e) => { ensurePad().multifunc.unit = e.target.value; refreshStageOnly(); };

      backdrop.querySelector('#mlrsTabRoom').onclick = () => { iconTab = 'room'; renderModal(); };
      backdrop.querySelector('#mlrsTabDev').onclick = () => { iconTab = 'device'; renderModal(); };
      backdrop.querySelectorAll('#mlrsIconGrid .mlrs-icon-cell').forEach(btn => {
        btn.onclick = () => {
          const p = ensurePad();
          const icoKey = btn.getAttribute('data-ico');
          p.icon = icoKey;
          // Auto-fill clean room/device name if label wasn't set yet
          if (icoKey !== 'none' && !p.label) {
            const icObj = Cat.FACIA_ICONS[icoKey];
            if (icObj) {
              p.label = icObj.name.split(' (')[0].split(' / ')[0];
              syncLabelToTouchZone(selectedPadKey, p.label);
            }
          }
          renderModal();
        };
      });

      // Print & Export
      backdrop.querySelector('#mlrsPrintBtn').onclick = () => openPrintSheetWindow(remoteName, hexId, model, draft, tz, activeZone);
      backdrop.querySelector('#mlrsDlSvgBtn').onclick = () => {
        const blob = new Blob([buildOneToOnePrintSvg(model, draft, tz, activeZone)], { type: 'image/svg+xml' });
        const a = document.createElement('a'); a.href = URL.createObjectURL(blob);
        a.download = `${model.id.toLowerCase()}_${hexId.toLowerCase()}_stencil_1to1.svg`; a.click();
      };

      const nameInp = backdrop.querySelector('#mlrsCustomModelName');
      if (nameInp) nameInp.oninput = (e) => { customModelName = e.target.value; };
      const bindChk = backdrop.querySelector('#mlrsBindNowChk');
      if (bindChk) bindChk.onchange = (e) => { bindCurrentRemote = e.target.checked; };

      const persistCustomModel = async (forceNewCopy) => {
        const cleanName = (customModelName || '').trim() || `${baseModel.id} Custom`;
        const targetId = (isEditingExistingCustom && !forceNewCopy) ? rawModel.id : slugifyCustomId(baseModel.id, cleanName);
        const payload = {
          id: targetId,
          name: forceNewCopy ? `${cleanName} Copy` : cleanName,
          base_model: baseModel.id,
          stencil_mode: 'full_panel',
          facia: draft,
          touch_zones: tz
        };
        const res = await fetch(`${hubBase}/api/remotes/custom_models`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        await Cat.syncCustomModelsFromHub(hubBase);
        if (typeof opts.onSaveCustomModel === 'function') {
          await opts.onSaveCustomModel({ customModel: payload, bindNow: bindCurrentRemote, calibration: cal, touchZones: tz, facia: draft });
        } else if (bindCurrentRemote && typeof opts.onSave === 'function') {
          await opts.onSave(draft, cal, tz, targetId);
        }
        backdrop.remove();
      };

      const delBtn = backdrop.querySelector('#mlrsDeleteCustomBtn');
      if (delBtn) {
        delBtn.onclick = async () => {
          if (!confirm(`Delete custom remote "${rawModel.name}" (${rawModel.id})? Any bound remotes will safely revert to factory ${baseModel.id}.`)) return;
          await fetch(`${hubBase}/api/remotes/custom_models/delete`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: rawModel.id })
          });
          await Cat.syncCustomModelsFromHub(hubBase);
          if (typeof opts.onDeleteCustomModel === 'function') await opts.onDeleteCustomModel(rawModel.id, baseModel.id);
          backdrop.remove();
        };
      }

      const copyBtn = backdrop.querySelector('#mlrsSaveCopyBtn');
      if (copyBtn) copyBtn.onclick = () => persistCustomModel(true);

      backdrop.querySelector('#mlrsDeployBtn').onclick = async () => {
        const btn = backdrop.querySelector('#mlrsDeployBtn');
        btn.textContent = 'Saving Custom Remote...';
        try {
          await persistCustomModel(false);
        } catch (err) {
          btn.textContent = isEditingExistingCustom ? 'Update Custom Remote' : '+ Create Custom Remote';
          alert('Save failed: ' + err);
        }
      };
    }

    document.body.appendChild(backdrop);
    renderModal();
    return backdrop;
  }

  function normalizeSliderPct(rawVal, act) {
    if (rawVal === undefined || rawVal === null || rawVal === '') return 0;
    const n = Number(rawVal);
    if (Number.isNaN(n)) return 0;
    let pct = n > 100 ? (n / 255) * 100 : n;
    const a = String(act || '').toLowerCase();
    if (a === 'brightness' || a === 'level') {
      // Physical MiBoxer brightness sliders report ~26 at the bottom stop and ~98-100 at the top
      if (pct <= 26.5) return 0;
      if (pct >= 98) return 100;
      pct = ((pct - 26.5) / (98 - 26.5)) * 100;
    }
    return Math.max(0, Math.min(100, pct));
  }

  // Physical RF hue -> clockwise degrees from 12 o'clock (0=top, 90=3h, 180=6h, 270=9h)
  function physicalHueToWheelDeg(rawHue, cal) {
    let h = Number(rawHue || 0);
    if (h > 360) h = (h / 255) * 360;
    h = ((h % 360) + 360) % 360;
    let deg = (270 - h + 360) % 360;
    if (cal && cal.hue_invert) deg = (360 - deg) % 360;
    if (cal && cal.hue_offset) deg = (deg + Number(cal.hue_offset) + 360) % 360;
    return deg;
  }

  function resolvePhysicalToCustomAction(action, value, zone, touchZones, calibration) {
    const tz = normalizeTouchZones(touchZones);
    const cal = Object.assign(defaultCalibration(), calibration || {});
    const z = Number(zone || 0);
    const zBit = z < 16 ? (1 << z) : 0x8000;
    const act = String(action || '').toLowerCase();
    const numVal = (value !== undefined && value !== null && value !== '') ? Number(value) : -1;

    if (act === 'hue' && numVal >= 0 && tz.hue_ring.enabled && (tz.hue_ring.zone_mask & zBit)) {
      const n = Math.min(12, Math.max(2, Number(tz.hue_ring.segments || 4)));
      const span = 360 / n;
      const deg = physicalHueToWheelDeg(numVal, cal);
      const rel = ((deg - Number(tz.hue_ring.offset_deg || 0)) % 360 + 360) % 360;
      const idx = Math.min(n - 1, Math.max(0, Math.floor(rel / span)));
      return {
        action: `hue_seg_${idx + 1}`,
        value: idx + 1,
        label: tz.hue_ring.labels[idx] || `Slice ${idx + 1}`,
        converted: true
      };
    }

    let targetBar = null, pref = '';
    if (act === 'saturation' && tz.sat_bar.enabled && (tz.sat_bar.zone_mask & zBit)) {
      targetBar = tz.sat_bar; pref = 'sat_seg_';
    } else if ((act === 'color_temp' || act === 'kelvin') && tz.cct_bar.enabled && (tz.cct_bar.zone_mask & zBit)) {
      targetBar = tz.cct_bar; pref = 'cct_seg_';
    } else if ((act === 'color_temp' || act === 'kelvin') && tz.sat_bar.enabled && !tz.cct_bar.enabled && (tz.sat_bar.zone_mask & zBit)) {
      targetBar = tz.sat_bar; pref = 'sat_seg_';
    } else if ((act === 'brightness' || act === 'level') && tz.bri_bar.enabled && (tz.bri_bar.zone_mask & zBit)) {
      targetBar = tz.bri_bar; pref = 'bri_seg_';
    }

    if (targetBar && numVal >= 0) {
      const n = Math.min(6, Math.max(2, Number(targetBar.segments || 4)));
      const rawPct = numVal > 100 ? (numVal / 255) * 100 : Math.max(0, Math.min(100, numVal));
      // Physical B8 saturation bar outputs 0 at TOP and 100 at BOTTOM:
      // In miboxer_catalog.js, sat_seg_1 is drawn at BOTTOM (idx=0) and sat_seg_N at TOP (idx=n-1).
      // So 0% (top touch) -> sat_seg_N (top button), 50% -> middle, 100% (bottom touch) -> sat_seg_1 (bottom button)!
      if (pref === 'sat_seg_') {
        const fromTopIdx = Math.min(n - 1, Math.max(0, Math.floor((rawPct / 100.0001) * n)));
        const idx = (n - 1) - fromTopIdx;
        return {
          action: `${pref}${idx + 1}`,
          value: idx + 1,
          label: targetBar.labels[idx] || `Slot ${idx + 1}`,
          converted: true
        };
      }
      const effPct = (pref === 'bri_seg_') ? normalizeSliderPct(numVal, 'brightness') : rawPct;
      const idx = Math.min(n - 1, Math.max(0, Math.floor((effPct / 100.0001) * n)));
      return {
        action: `${pref}${idx + 1}`,
        value: idx + 1,
        label: targetBar.labels[idx] || `Slot ${idx + 1}`,
        converted: true
      };
    }

    return { action, value: numVal, label: '', converted: false };
  }

  root.MiLightRemoteStudio = {
    version: '2.3.0',
    normalizeTouchZones, defaultCalibration, resolvePhysicalToCustomAction, mountInteractiveStage,
    buildOneToOnePrintSvg, openPrintSheetWindow, openFaciaDesigner
  };
})(typeof window !== 'undefined' ? window : globalThis);

;
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
      if (window.MiBoxerCatalog && window.MiBoxerCatalog.syncCustomModelsFromHub) {
        await window.MiBoxerCatalog.syncCustomModelsFromHub("http://192.168.7.121");
      }
      const hr = await fetch("http://192.168.7.121/api/remotes", { cache: "no-store" });
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

  _openHaStencilDesigner(rem) {
    if (!window.MiLightRemoteStudio || !window.MiLightRemoteStudio.openFaciaDesigner) return;
    const mod = this._resolveModel(rem);
    const baseId = mod.baseModel || mod.base || mod.id || "B8";
    window.MiLightRemoteStudio.openFaciaDesigner({
      hubUrl: "http://192.168.7.121",
      baseModelId: baseId,
      editingCustomId: String(mod.id || "").startsWith("CUST_") ? mod.id : "",
      customName: String(rem.name || mod.name || "").replace(/^\[Showcase\]\s*/, ""),
      remoteHex: rem.hex,
      deviceId: rem.device_id || parseInt(String(rem.hex || "0").replace(/^0x/i, ""), 16),
      facia: rem.facia,
      touchZones: rem.touch_zones,
      calibration: this._calibrations[String(rem.hex || "").toUpperCase()],
      onSaved: async () => {
        await this._loadRemotes();
      }
    });
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
      await fetch("http://192.168.7.121/api/remotes/studio_meta", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ device_id: devId, hex_id: custRem.hex, linked_device_id: pId, linked_hex_id: pHex })
      });
      await this._mergeHubMetaIntoRemotes();
      if (switchHex) this._selHex = switchHex;
      this._refreshStudioView();
    };

    if (isCustom) {
      const physList = this._remotes.filter((r) => !isRemCustom(r) && String(r.hex || "").toUpperCase() !== curHexUp);
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
              <option value="">Unlinked (Virtual ${cur.hex} Only)</option>
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
      const custList = this._remotes.filter((r) => isRemCustom(r));
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
      if (prevHex !== hx || prevZone !== z) {
        this._selHex = hx;
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
        const badge = this.querySelector("#selSummary");
        if (badge) badge.textContent = `${this._selHex} · Zone ${this._selZone} · ${this._computedAction()}`;
      }
    }

    const cardBox = this.querySelector(`.rem-card[data-hex-up="${hx}"] .rem-thumb`) || this.querySelector(`.rem-card[data-hex-up="${hx.toLowerCase()}"] .rem-thumb`);
    this._renderAnalogIndicators(cardBox, hx, z, cleanAct);
    this._pulseHits(cardBox, act, z, cls);

    if (this._selHex.toUpperCase() === hx) {
      const fpBox = this.querySelector("#faceplateBox");
      this._renderAnalogIndicators(fpBox, hx, z, cleanAct);
      this._pulseHits(fpBox, act, z, cls);
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
      this._triggerVisualFeedback(this._selHex, "hue", this._selZone, "ui", hubHue, visDeg);
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
      this._triggerVisualFeedback(this._selHex, act, this._selZone, "ui", sendVal, pct);
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
    const hubUrl = cfg.hub_url || "http://192.168.7.121";
    const twinUrl = cfg.twin_url || "http://192.168.6.196:8588";
    this.innerHTML = `
      <style>
        .wrap { padding: 20px; font-family: sans-serif; color: var(--primary-text-color); max-width: 1260px; }
        .hdr { display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; margin-bottom: 16px; }
        .hdr h1 { margin: 0; font-size: 22px; }
        .hdr p { margin: 4px 0 0; color: var(--secondary-text-color); font-size: 13px; }
        .actions, .pills { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
        button { padding: 8px 14px; border-radius: 8px; border: 1px solid var(--divider-color); background: var(--primary-color); color: var(--text-primary-color, #fff); cursor: pointer; font-weight: 600; font-size: 13px; }
        button.sec, .pill { background: var(--card-background-color); color: var(--primary-text-color); }
        .pill.active { background: #0284c7; color: #fff; border-color: #38bdf8; }
        .rem-strip { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 14px; margin-bottom: 20px; }
        .rem-card { display: flex; align-items: center; gap: 14px; background: var(--card-background-color); border: 2px solid var(--divider-color); border-radius: 14px; padding: 12px 16px; cursor: pointer; transition: border-color .15s, transform .12s; }
        .rem-card:hover { transform: translateY(-1px); }
        .rem-card.selected { border-color: #38bdf8; box-shadow: 0 0 0 2px rgba(56,189,248,.25); }
        .rem-thumb { width: 74px; height: 112px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .rem-thumb svg { max-width: 72px; max-height: 110px; width: auto; height: auto; pointer-events: none; }
        .rem-card h3 { margin: 0 0 4px; font-size: 15px; }
        .meta { font-size: 12px; color: var(--secondary-text-color); line-height: 1.4; }
        .src-pill { display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px; border-radius: 999px; font-size: 11px; font-weight: 800; border: 1px solid var(--divider-color); }
        .src-pill.rf { background: #dcfce7; color: #166534; border-color: #86efac; }
        .src-pill.ui { background: #fef3c7; color: #92400e; border-color: #fcd34d; }
        .telem-foot { margin-top: 5px; font-family: monospace; font-size: 11px; color: var(--secondary-text-color); }
        .studio { display: grid; grid-template-columns: minmax(330px, 390px) 1fr; gap: 18px; align-items: start; }
        @media (max-width: 860px) { .studio { grid-template-columns: 1fr; } }
        .card { background: var(--card-background-color); border: 1px solid var(--divider-color); border-radius: 14px; padding: 18px; }
        .card h3 { margin: 0 0 6px; font-size: 16px; }
        #faceplateBox { display: flex; justify-content: center; align-items: center; min-height: 330px; padding: 8px 0; user-select: none; }
        #faceplateBox svg { max-width: 260px; height: auto; filter: drop-shadow(0 10px 22px rgba(0,0,0,.28)); }
        .mbx-hit { cursor: pointer; }
        .mbx-selected:not([data-act="hue"]):not([data-act="kelvin"]):not([data-act="color_temp"]):not([data-act="saturation"]):not([data-act="brightness"]) > rect,
        .mbx-selected:not([data-act="hue"]):not([data-act="kelvin"]):not([data-act="color_temp"]):not([data-act="saturation"]):not([data-act="brightness"]) > circle,
        rect.mbx-selected:not([data-act="kelvin"]):not([data-act="color_temp"]):not([data-act="saturation"]):not([data-act="brightness"]),
        circle.mbx-selected:not([data-act="hue"]) { stroke: #0284c7 !important; stroke-width: 2.4px !important; }
        .mbx-hit.fire-rf:not([data-act="hue"]):not([data-act="kelvin"]):not([data-act="color_temp"]):not([data-act="saturation"]):not([data-act="brightness"]) > rect,
        .mbx-hit.fire-rf:not([data-act="hue"]):not([data-act="kelvin"]):not([data-act="color_temp"]):not([data-act="saturation"]):not([data-act="brightness"]) > circle,
        rect.mbx-hit.fire-rf:not([data-act="kelvin"]):not([data-act="color_temp"]):not([data-act="saturation"]):not([data-act="brightness"]),
        circle.mbx-hit.fire-rf:not([data-act="hue"]),
        .mbx-seg-hit.fire-rf {
          fill: #86efac !important; stroke: #15803d !important; stroke-width: 3px !important;
          filter: drop-shadow(0 0 10px rgba(34,197,94,.85)) !important;
        }
        .mbx-hit.fire-ui:not([data-act="hue"]):not([data-act="kelvin"]):not([data-act="color_temp"]):not([data-act="saturation"]):not([data-act="brightness"]) > rect,
        .mbx-hit.fire-ui:not([data-act="hue"]):not([data-act="kelvin"]):not([data-act="color_temp"]):not([data-act="saturation"]):not([data-act="brightness"]) > circle,
        rect.mbx-hit.fire-ui:not([data-act="kelvin"]):not([data-act="color_temp"]):not([data-act="saturation"]):not([data-act="brightness"]),
        circle.mbx-hit.fire-ui:not([data-act="hue"]),
        .mbx-seg-hit.fire-ui {
          fill: #fde68a !important; stroke: #d97706 !important; stroke-width: 3px !important;
          filter: drop-shadow(0 0 10px rgba(245,158,11,.85)) !important;
        }
        .live-toast { min-height: 24px; margin-top: 8px; padding: 5px 12px; border-radius: 999px; font-size: 12px; font-weight: 700; text-align: center; opacity: 0; transition: opacity .15s; display: inline-block; }
        .live-toast.show { opacity: 1; }
        .live-toast.rf { background: #dcfce7; color: #166534; border: 1px solid #86efac; }
        .live-toast.ui { background: #fef3c7; color: #92400e; border: 1px solid #fcd34d; }
        .legend { display: flex; justify-content: center; gap: 10px; align-items: center; margin-top: 6px; font-size: 11px; color: var(--secondary-text-color); flex-wrap: wrap; }
        .field-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 12px; margin: 14px 0; }
        label { display: block; font-size: 11px; color: var(--secondary-text-color); margin-bottom: 5px; text-transform: uppercase; letter-spacing: .04em; }
        select, input[type="text"] { width: 100%; box-sizing: border-box; padding: 8px 10px; border-radius: 8px; border: 1px solid var(--divider-color); background: var(--secondary-background-color); color: var(--primary-text-color); font-size: 13px; }
        .badge { display: inline-block; padding: 4px 11px; border-radius: 999px; background: rgba(56,189,248,.16); color: #38bdf8; font-weight: 700; font-size: 12px; }
        pre { background: var(--secondary-background-color); border: 1px solid var(--divider-color); border-radius: 8px; padding: 12px; overflow-x: auto; font-size: 12px; margin: 12px 0 0; }
        #status { margin-bottom: 12px; font-size: 13px; color: var(--secondary-text-color); }
      </style>
      <div class="wrap">
        <div class="hdr">
          <div>
            <h1>Mi-Light Visual Remote &amp; Panel Studio</h1>
            <p>True 1:1 finger-aligned wheel &amp; slider reticles (<span class="src-pill rf">🟢 Physical RF</span> / <span class="src-pill ui">🟠 Virtual UI</span>).</p>
          </div>
          <div class="actions">
            <label style="display:inline-flex;align-items:center;gap:6px;margin:0;text-transform:none;font-size:12px;cursor:pointer;">
              <input id="liveSendChk" type="checkbox" checked /> Live Dispatch on Click/Drag
            </label>
            <button id="refreshBtn">Sync Hub Remotes</button>
            <a href="${hubUrl}/#/remotes" target="_blank" rel="noreferrer"><button class="sec" type="button">Hub #/remotes</button></a>
            <button id="openTwinBtn" class="sec" type="button">3D Twin (:8588) ↗</button>
          </div>
        </div>
        <div id="status">Loading registered remotes...</div>
        <div id="remStrip" class="rem-strip"></div>
        <div class="studio">
          <div class="card" style="text-align:center;">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:6px;">
              <h3 id="fpTitle" style="margin:0;">Hardware Faceplate</h3>
              <span id="fpSrcPill" class="src-pill ui">🟠 Ready</span>
            </div>
            <div id="fpSub" class="meta" style="margin:4px 0 6px;">Drag or tap wheel, sliders, buttons, or zones</div>
            <div id="haLinkBar" style="margin-bottom:10px;"></div>
            <div id="faceplateBox"></div>
            <div id="calBanner"></div>
            <div class="legend">
              <span>🟢 Green Puck/Glow = Physical RF</span>
              <span>&middot;</span>
              <span>🟠 Amber Puck/Glow = Virtual Screen</span>
            </div>
            <div><span id="liveToast" class="live-toast"></span></div>
          </div>
          <div class="card">
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;">
              <h3>Visual Gesture &amp; Slice &rarr; Home Assistant Binding</h3>
              <span id="selSummary" class="badge"></span>
            </div>
            <div style="margin-top:12px;">
              <label>Tap / Hold Gesture Modifier (for physical buttons)</label>
              <div class="pills" id="tapPills">
                <button type="button" class="pill active" data-tap="single">1x Single Tap</button>
                <button type="button" class="pill" data-tap="double">2x Double Tap</button>
                <button type="button" class="pill" data-tap="triple">3x Triple Tap</button>
                <button type="button" class="pill" data-tap="long">Long Hold (Night / White)</button>
              </div>
            </div>
            <div class="field-grid">
              <div><label>Target Home Assistant Entity</label><select id="mapEntity"></select></div>
              <div><label>Action to Perform</label><select id="mapService"><option value="homeassistant.toggle">Toggle</option><option value="homeassistant.turn_on">Turn On</option><option value="homeassistant.turn_off">Turn Off</option><option value="cover.open_cover">Open Cover</option><option value="cover.close_cover">Close Cover</option></select></div>
              <div><label>Automation Name (Optional)</label><input id="autoAlias" type="text" placeholder="e.g. B8 Wall Panel Z1 2x ON -> Split AC" /></div>
            </div>
            <div class="pills" style="margin-top:10px;">
              <button id="saveAutoBtn" type="button">Save Directly to HA Automations</button>
              <button id="testVirtualBtn" class="sec" type="button">Fire Virtual RF/MQTT Event</button>
              <button id="runEntityBtn" class="sec" type="button">Test Target Entity</button>
              <button id="copyYamlBtn" class="sec" type="button">Copy YAML</button>
            </div>
            <pre id="yamlPreview"></pre>
            <hr style="border:0;border-top:1px solid var(--divider-color);margin:18px 0;"/>
            <h3>Overlay Labels, Accessibility &amp; 1:1 Print / POD Configurator</h3>
            <p class="meta" style="margin:4px 0 12px;">Customize labels or accessibility symbols, verify exact millimeter sizing, and export 1:1 print or POD order payloads.</p>
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
                <label>Panel Button / Zone / Slider Segment</label>
                <select id="posTargetSel"></select>
              </div>
              <div>
                <label>Icon for Position / Segment</label>
                <select id="customIconSel">
                  <option value="">(None)</option>
                  <option value="💡">💡 Light / Zone</option>
                  <option value="🪟">🪟 Blind / Cover</option>
                  <option value="🌡️">🌡️ Climate / Temp</option>
                  <option value="🌀">🌀 Fan / Air</option>
                  <option value="🎬">🎬 Scene / Mode</option>
                  <option value="🌙">🌙 Night / Sleep</option>
                  <option value="☀️">☀️ Bright / Day</option>
                  <option value="⚡">⚡ Power / Boost</option>
                  <option value="🔊">🔊 Audio / Media</option>
                  <option value="🔒">🔒 Lock / Security</option>
                </select>
              </div>
              <div>
                <label>Custom Text Label</label>
                <div style="display:flex;gap:6px;">
                  <input id="customLabelInp" type="text" placeholder="e.g. Patio Blind or Zone 1" />
                  <button id="applyLabelBtn" class="sec" type="button" style="white-space:nowrap;">Apply</button>
                </div>
              </div>
            </div>
            <div id="podSpecsLine" class="meta" style="margin-bottom:10px;font-weight:600;"></div>
            <div class="pills">
              <button id="openHubStencilStudioBtn" type="button" style="background:#0f172a;color:#fff;font-weight:700">🎨 Open Custom Remote &amp; Stencil Studio</button>
              <div style="width:100%;margin:8px 0;padding:10px 12px;border-radius:8px;border:1px solid rgba(2,132,199,0.35);background:rgba(2,132,199,0.08);font-size:12px;line-height:1.45"><b>💡 Showcase Tips &amp; Reference Remotes:</b> Select <code>0x3DB0</code> (<b>1-Zone Suite B0</b>), <code>0x3DB8</code> (<b>8-Room Estate B8</b>), or <code>0x3DB4</code> (<b>Matte B4-B</b>) on the left to inspect how <b>Segmented Sliders/Rings</b> + <b>Short-Tap Step Cycling (1→6)</b> + <b>Long-Hold Toggle</b> let a single button drive multi-speed fans, blinds &amp; AC—or click <b>Open 3D Smart Home</b> above for Interactive Tour Tips 11 &amp; 12!</div>
              <button id="dlSvg1to1Btn" class="sec" type="button">Download 1:1 SVG</button>
              <button id="dlStencilSvgBtn" class="sec" type="button">Download 1:1 Stencil SVG</button>
              <button id="openPrintSheetBtn" class="sec" type="button">Print Sheet (10mm Ruler)</button>
              <button id="copyPodJsonBtn" class="sec" type="button">Copy POD Order JSON</button>
              <button id="dlPodJsonBtn" class="sec" type="button">Download POD JSON</button>
            </div>
          </div>
        </div>
      </div>`;

    try { window.name = "milight_ha_studio_parent"; } catch (_) {}
    const stBtn = this.querySelector("#openHubStencilStudioBtn");
    if (stBtn) stBtn.onclick = () => {
      const r = (this._remotes || {})[this._selHex] || {};
      const mod = this._resolveModel(r);
      if (!window.MiLightRemoteStudio) { alert("Hub Remote Studio script not loaded yet."); return; }
      window.MiLightRemoteStudio.openFaciaDesigner({
        hubUrl: "http://192.168.7.121",
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
    this.querySelectorAll("#tapPills .pill").forEach((b) => {
      b.onclick = () => {
        this._tapMod = b.dataset.tap;
        this.querySelectorAll("#tapPills .pill").forEach((x) => x.classList.toggle("active", x === b));
        this._refreshStudioView();
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
    const ids = Object.keys(this._hass.states)
      .filter((id) => /^(light|fan|climate|cover|switch|scene|valve|input_boolean)\./.test(id))
      .sort();
    sel.innerHTML = ids.map((id) => `<option value="${id}">${(this._hass.states[id].attributes.friendly_name || id)} (${id})</option>`).join("");
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
            <div class="meta"><b>${mod.id}</b> &middot; <code>${r.hex}</code> &middot; ${r.zones || mod.zones || 4} Zones ${r.linked_hex_id ? `<span style="color:#16a34a;font-weight:700;">🔗 ${r.linked_hex_id}</span>` : (this._remotes.some((c) => String(c.linked_hex_id || "").toUpperCase() === hx) ? `<span style="color:#0284c7;font-weight:700;">🔗 Custom Linked</span>` : "")}</div>
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
          this._throttledSend(this._selHex, this._selZone, finalAct);
          this._updateYaml();
        };
      });

      this._renderOverlayLabelsOnSvg(svgEl, hx);
      this._syncTargetPicker(svgEl, hx);
      this._renderAnalogIndicators(fpBox, hx, this._selZone);
      this._renderHaLinkBar();
      this._renderCalBanner();
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

  _downloadFile(filename, content, mime) {
    const blob = new Blob([content], { type: mime });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  _updateYaml() {
    const hex = (this._selHex || "0x125C").toLowerCase();
    const zone = this._selZone;
    const action = this._computedAction();
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
