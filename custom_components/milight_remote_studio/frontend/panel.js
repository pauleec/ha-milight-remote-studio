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
        <!-- Colour Ring + Center Cap with Indicator -->
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
  const CAPACITIVE_LAYOUTS = new Set([
    'b8', 'b_strip', 'b0', 'b5', 'u_panel', 'm4',
    'k_display', 's_puck', 'fut087',
    'fut089', 'fut092', 'c_wheel', 'c_slot'
  ]);

  const SINGLE_STICK_ON_LAYOUTS = new Set([
    'b8', 'b_strip', 'b0', 'b5', 'u_panel', 'm4',
    's_puck', 'fut087'
  ]);

  function getStencilFitMode(modelOrId) {
    const m = typeof modelOrId === 'string' ? (MODELS.find(x => x.id === modelOrId) || {}) : (modelOrId || {});
    if (m.isCustom) return 'single_sheet';
    return SINGLE_STICK_ON_LAYOUTS.has(m.layout) ? 'single_sheet' : 'cut_stickers';
  }

  function isSingleStickOnStencilReady(modelOrId) {
    return getStencilFitMode(modelOrId) === 'single_sheet';
  }

  function isCapacitiveFlatPanel(modelOrId) {
    const m = typeof modelOrId === 'string' ? (MODELS.find(x => x.id === modelOrId) || {}) : (modelOrId || {});
    if (m.isCustom) return true;
    return CAPACITIVE_LAYOUTS.has(m.layout);
  }


  function resolveBaseHardwareId(modelOrId) {
    if (!modelOrId) return '';
    const m = typeof modelOrId === 'string'
      ? (MODELS.find(x => x.id === modelOrId) || { id: modelOrId })
      : modelOrId;
    const bId = m.baseModel || m.base_model || m.base || m.id || '';
    const baseObj = MODELS.find(x => x.id === bId && !x.isCustom) || MODELS.find(x => x.id === String(bId).replace(/-B$/, '') && !x.isCustom);
    return baseObj ? (baseObj.base || baseObj.id) : String(bId).replace(/-B$/, '');
  }

  function areModelsPhysicallyCompatible(customModelOrRem, physModelOrRem) {
    if (!customModelOrRem || !physModelOrRem) return false;
    const getMod = (item) => {
      if (typeof item === 'string') return MODELS.find(x => x.id === item) || { id: item };
      const vm = item.visual_model || item.model || item.id || '';
      const found = MODELS.find(x => x.id === vm);
      if (found) return found;
      if (item.base_model || item.baseModel) {
        const bm = MODELS.find(x => x.id === (item.base_model || item.baseModel));
        if (bm) return Object.assign({}, bm, { id: vm, baseModel: bm.id, isCustom: true });
      }
      return item;
    };
    const cm = getMod(customModelOrRem);
    const pm = getMod(physModelOrRem);
    if (pm.isCustom || String(pm.id || '').startsWith('CUST_')) return false;
    const cBase = resolveBaseHardwareId(cm);
    const pBase = resolveBaseHardwareId(pm);
    if (!cBase || !pBase) return false;
    return cBase.toUpperCase() === pBase.toUpperCase();
  }

  function getPhysicalDims(modelOrId) {
    const m = typeof modelOrId === 'string' ? (MODELS.find(x => x.id === modelOrId) || { id: modelOrId }) : (modelOrId || {});
    const layout = m.layout || '';
    if (layout === 'b8') return { width_mm: 106, height_mm: 146, glass_w_mm: 100, glass_h_mm: 140, corner_mm: 4.5, led_x_pct: 50, led_y_pct: 7.5, mount: 'EU/AU Portrait Glass Wall Panel', form_factor: 'EU/AU Portrait Glass Wall Panel' };
    if (layout === 'u_panel') return { width_mm: 70, height_mm: 114, glass_w_mm: 65, glass_h_mm: 109, corner_mm: 4.0, led_x_pct: 50, led_y_pct: 8.5, mount: 'US Single-Gang Glass Wall Panel', form_factor: 'US Single-Gang Glass Wall Panel' };
    if (layout === 'm4') return { width_mm: 142, height_mm: 86, glass_w_mm: 136, glass_h_mm: 80, corner_mm: 4.0, led_x_pct: 8.5, led_y_pct: 11, mount: 'Italian 503/504 Landscape Glass Panel', form_factor: 'Italian 503/504 Landscape Glass Panel' };
    if (layout === 'b_strip' || layout === 'b0' || layout === 'b5') return { width_mm: 86, height_mm: 86, glass_w_mm: 81, glass_h_mm: 81, corner_mm: 4.0, led_x_pct: 50, led_y_pct: 8.0, mount: '86x86mm Square Glass Wall Panel', form_factor: '86x86mm Square Glass Wall Panel' };
    if (layout === 'k_display') return { width_mm: 72, height_mm: 72, glass_w_mm: 66, glass_h_mm: 66, corner_mm: 36.0, shape: 'round', led_x_pct: 50, led_y_pct: 27, mount: '72mm Round Rotary Display Puck', form_factor: '72mm Round Rotary Knob / Puck' };
    if (layout === 's_puck') return { width_mm: 70, height_mm: 70, glass_w_mm: 64, glass_h_mm: 64, corner_mm: 35.0, shape: 'round', led_x_pct: 50, led_y_pct: 16, mount: '70mm Round Magnetic Touch Puck', form_factor: '70mm Round Capacitive Puck' };
    if (layout === 'fut087') return { width_mm: 80, height_mm: 80, glass_w_mm: 62, glass_h_mm: 62, corner_mm: 40.0, shape: 'round', led_x_pct: 50, led_y_pct: 18, mount: '80mm Round Dimmer Puck', form_factor: '80mm Round Touch Dimmer' };
    if (layout === 'fut089') return { width_mm: 47, height_mm: 153, glass_w_mm: 43, glass_h_mm: 148, corner_mm: 10.0, led_x_pct: 50, led_y_pct: 5.5, mount: 'Handheld 8-Zone Remote Overlay', form_factor: '47x153mm Handheld 8-Zone Remote' };
    if (layout === 'fut092' || layout === 'c_wheel' || layout === 'c_slot') return { width_mm: 47, height_mm: 138, glass_w_mm: 43, glass_h_mm: 133, corner_mm: 10.0, led_x_pct: 50, led_y_pct: 6.0, mount: 'Handheld 4-Zone Remote Overlay', form_factor: '47x138mm Handheld Capacitive Remote' };
    return { width_mm: 86, height_mm: 86, glass_w_mm: 80, glass_h_mm: 80, corner_mm: 4.0, mount: 'Standard Panel', form_factor: 'Standard Remote / Wall Panel' };
  }

  // Standardised 24x24 Architectural Vector Icons: Rooms (Group A) + Devices & Controls (Group B)
  const FACIA_ICONS = {
    none:       { group: 'basic',  name: 'No Icon (Text Only)', svg: '' },
    // --- Standardised Room Icons (for Multi-Zone Remotes) ---
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

  const FACIA_FONTS = {
    sans:      { name: 'Clean Sans (Inter)',        stack: 'Inter,system-ui,-apple-system,sans-serif', charFactor: 0.55 },
    geometric: { name: 'Geometric (Century/Futura)', stack: '"Century Gothic",Futura,"Trebuchet MS",sans-serif', charFactor: 0.58 },
    condensed: { name: 'Condensed (Space-Saving)',  stack: '"Arial Narrow","Roboto Condensed",Impact,sans-serif', charFactor: 0.44 },
    rounded:   { name: 'Soft Rounded',              stack: '"SF Pro Rounded","Nunito","Segoe UI",sans-serif', charFactor: 0.56 },
    mono:      { name: 'Technical Mono',            stack: 'ui-monospace,SFMono-Regular,Consolas,monospace', charFactor: 0.60 },
    serif:     { name: 'Architectural Serif',       stack: 'Georgia,"Times New Roman",serif', charFactor: 0.54 }
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

  // Individual cut-sticker sheet builder for knobs, LCDs, rockers, physical buttons & handhelds
  function getCutStickerSheet(modelOrId) {
    const m = typeof modelOrId === 'string' ? (MODELS.find(x => x.id === modelOrId) || MODELS[0]) : (modelOrId || MODELS[0]);
    const dims = getPhysicalDims(m);
    const bp = getPanelBlueprint(m);
    const stickers = [];

    if (Array.isArray(bp.slots) && bp.slots.length > 0) {
      bp.slots.forEach((sl, idx) => {
        const wMm = sl.w ? Math.max(8, Math.round((sl.w / (bp.vw || 190)) * (dims.width_mm || 72) * 10) / 10) : 12;
        const hMm = sl.h ? Math.max(8, Math.round((sl.h / (bp.vh || 190)) * (dims.height_mm || 72) * 10) / 10) : wMm;
        stickers.push({
          key: sl.key || `stk_${idx + 1}`,
          label: sl.label || `Key ${idx + 1}`,
          shape: sl.type === 'circle' ? 'circle' : 'rect',
          width_mm: wMm,
          height_mm: hMm,
          action: sl.act || 'button_press',
          zone: sl.zone != null ? sl.zone : null
        });
      });
    } else {
      const zCount = Math.min(8, Math.max(1, Number(m.zones || 4)));
      stickers.push({ key: 'stk_on', label: 'ON', shape: 'rect', width_mm: 14, height_mm: 10, action: 'on', zone: null });
      stickers.push({ key: 'stk_off', label: 'OFF', shape: 'rect', width_mm: 14, height_mm: 10, action: 'off', zone: null });
      for (let z = 1; z <= zCount; z++) {
        stickers.push({ key: `stk_z${z}`, label: `Z${z}`, shape: 'rect', width_mm: 12, height_mm: 10, action: 'zone', zone: z });
      }
    }

    return {
      model_id: m.id,
      model_name: m.name || m.id,
      layout: m.layout || 'standard',
      fit_mode: getStencilFitMode(m),
      base_dims_mm: { width_mm: dims.width_mm, height_mm: dims.height_mm },
      sticker_count: stickers.length,
      stickers
    };
  }

  function renderCutStickerSheetSvg(modelOrId, opts) {
    const o = opts || {};
    const sheet = getCutStickerSheet(modelOrId);
    const cols = 4;
    const cellW = 54;
    const cellH = 44;
    const padX = 14;
    const padY = 34;
    const rows = Math.max(1, Math.ceil(sheet.stickers.length / cols));
    const vw = padX * 2 + cols * cellW;
    const vh = padY + rows * cellH + 28;

    let itemsSvg = '';
    sheet.stickers.forEach((stk, i) => {
      const r = Math.floor(i / cols);
      const c = i % cols;
      const cx = padX + c * cellW + cellW / 2;
      const cy = padY + r * cellH + cellH / 2 - 4;
      const sw = Math.min(40, Math.max(18, stk.width_mm * 1.4));
      const sh = Math.min(24, Math.max(14, stk.height_mm * 1.4));
      if (stk.shape === 'circle') {
        const rad = Math.min(sw, sh) / 2;
        itemsSvg += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${rad.toFixed(1)}" fill="#ffffff" stroke="#0f172a" stroke-width="1.2" stroke-dasharray="3,1.5"/>`;
      } else {
        itemsSvg += `<rect x="${(cx - sw / 2).toFixed(1)}" y="${(cy - sh / 2).toFixed(1)}" width="${sw.toFixed(1)}" height="${sh.toFixed(1)}" rx="3" fill="#ffffff" stroke="#0f172a" stroke-width="1.2" stroke-dasharray="3,1.5"/>`;
      }
      itemsSvg += `<text x="${cx.toFixed(1)}" y="${(cy + 2.5).toFixed(1)}" text-anchor="middle" font-family="Inter,system-ui,sans-serif" font-size="7.5" font-weight="700" fill="#0f172a">${escXml(stk.label)}</text>`;
      itemsSvg += `<text x="${cx.toFixed(1)}" y="${(cy + sh / 2 + 9).toFixed(1)}" text-anchor="middle" font-family="monospace" font-size="5.5" fill="#475569">${stk.width_mm}x${stk.height_mm}mm</text>`;
    });

    const calY = vh - 20;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${vw} ${vh}" width="${o.width || vw * 2}" height="${o.height || vh * 2}">
      <rect x="1" y="1" width="${vw - 2}" height="${vh - 2}" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1"/>
      <text x="${padX}" y="17" font-family="Inter,system-ui,sans-serif" font-size="8.5" font-weight="800" fill="#0f172a">${escXml(sheet.model_name)} — Cut Stickers (${sheet.sticker_count})</text>
      ${itemsSvg}
      <rect x="${padX}" y="${calY}" width="12" height="12" fill="none" stroke="#0f172a" stroke-width="1"/>
      <text x="${padX + 16}" y="${calY + 8.5}" font-family="monospace" font-size="6" fill="#334155">10x10mm Scale Check (Print 100%)</text>
    </svg>`;
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

    if (m.layout === 'k_display') {
      const isK6 = m.kind === 'k6';
      const slots = [];
      if (isK6) {
        slots.push({ key: 'hue_ring', type: 'ring', surf: 'hue_ring', act: 'hue', cx: 95, cy: 95, rIn: 65, rOut: 81, label: 'COLOR' });
      }
      // Inner buttons positioned cleanly inside rIn=65 and clear of center LED cutout (y=56..74)
      slots.push(
        { key: 'btn_on',  type: 'circle', act: 'on',          cx: 95,  cy: 103, r: 12.2, label: 'PWR', sublabel: 'Hold Off' },
        { key: 'btn_bri', type: 'circle', act: 'brightness',  cx: 62,  cy: 56,  r: 11.0, label: 'BRI' },
        { key: 'btn_cct', type: 'circle', act: 'kelvin',      cx: 128, cy: 56,  r: 11.0, label: 'CCT' },
        { key: 'btn_pal', type: 'circle', act: 'set_white',   cx: 49,  cy: 95,  r: 11.0, label: isK6 ? 'RGB/W' : 'Z1' },
        { key: 'btn_sat', type: 'circle', act: 'saturation',  cx: 141, cy: 95,  r: 11.0, label: isK6 ? 'SAT' : 'Z4' },
        { key: 'btn_m',   type: 'circle', act: 'mode',        cx: 65,  cy: 133, r: 11.0, label: isK6 ? 'MODE' : 'Z2' },
        { key: 'btn_dly', type: 'circle', act: 'night_mode',  cx: 125, cy: 133, r: 11.0, label: isK6 ? 'DELAY' : 'Z3' }
      );
      return {
        vw: 190, vh: 190,
        outer: { x: 10, y: 10, w: 170, h: 170, rx: 85 },
        glass: { x: 14, y: 14, w: 162, h: 162, rx: 81 },
        cutout: { x: 75, y: 57, w: 40, h: 18, rx: 4.5, text: '100%' },
        titleY: 169,
        slots
      };
    }

    if (m.layout === 's_puck') {
      const isRgb = m.kind === 's2';
      const slots = [
        isRgb
          ? { key: 'hue_ring', type: 'ring', surf: 'hue_ring', act: 'hue', cx: 95, cy: 95, rIn: 54, rOut: 78, label: 'COLOR' }
          : { key: 'cct_bar',  type: 'ring', surf: 'cct_bar',  act: 'kelvin', cx: 95, cy: 95, rIn: 54, rOut: 78, label: 'CCT' },
        { key: 'btn_on',  type: 'circle', act: 'on',         cx: 95, cy: 74,  r: 15, label: 'ON' },
        { key: 'btn_off', type: 'circle', act: 'off',        cx: 95, cy: 116, r: 15, label: 'OFF' },
        { key: 'btn_sdn', type: 'circle', act: 'brightness', cx: 63, cy: 95,  r: 12, label: 'DIM-' },
        { key: 'btn_sup', type: 'circle', act: 'mode',       cx: 127, cy: 95, r: 12, label: isRgb ? 'MODE' : 'DIM+' }
      ];
      return {
        vw: 190, vh: 190,
        outer: { x: 11, y: 11, w: 168, h: 168, rx: 84 },
        glass: { x: 16, y: 16, w: 158, h: 158, rx: 79 },
        titleY: 42,
        slots
      };
    }

    if (m.layout === 'fut087') {
      const slots = [
        { key: 'bri_bar', type: 'ring', surf: 'bri_bar', act: 'brightness', cx: 95, cy: 95, rIn: 48, rOut: 76, label: 'DIMMER' },
        { key: 'btn_on',  type: 'circle', act: 'on', cx: 95, cy: 95, r: 28, label: 'ON / OFF', sublabel: 'Hold Night' }
      ];
      return {
        vw: 190, vh: 190,
        outer: { x: 11, y: 11, w: 168, h: 168, rx: 84 },
        glass: { x: 17, y: 17, w: 156, h: 156, rx: 78 },
        titleY: 36,
        slots
      };
    }

    if (m.layout === 'fut089') {
      const slots = [
        { key: 'btn_on',   type: 'rect', act: 'on',  x: 24, y: 24, w: 46, h: 20, rx: 10, label: 'ALL ON' },
        { key: 'btn_off',  type: 'rect', act: 'off', x: 90, y: 24, w: 46, h: 20, rx: 10, label: 'ALL OFF' },
        { key: 'hue_ring', type: 'ring', surf: 'hue_ring', act: 'hue', cx: 80, cy: 86, rIn: 19, rOut: 38, label: 'COLOR' },
        { key: 'center_w', type: 'circle', act: 'set_white', cx: 80, cy: 86, r: 13, label: 'W' },
        { key: 'bri_bar',  type: 'hbar', surf: 'bri_bar', act: 'brightness', x: 24, y: 132, w: 112, h: 15, label: 'BRIGHTNESS' },
        { key: 'cct_bar',  type: 'hbar', surf: 'cct_bar', act: 'kelvin',     x: 24, y: 153, w: 112, h: 15, label: 'WARM / COOL' },
        { key: 'btn_sdn',  type: 'rect', act: 'mode_speed_down', x: 24, y: 175, w: 34, h: 18, rx: 4, label: 'S-' },
        { key: 'btn_m',    type: 'rect', act: 'mode',            x: 63, y: 175, w: 34, h: 18, rx: 4, label: 'M' },
        { key: 'btn_sup',  type: 'rect', act: 'mode_speed_up',   x: 102, y: 175, w: 34, h: 18, rx: 4, label: 'S+' }
      ];
      for (let z = 1; z <= 8; z++) {
        const row = z <= 4 ? 0 : 1;
        const colIdx = (z - 1) % 4;
        slots.push({ key: `zone_${z}`, type: 'rocker', act: 'zone', zone: z, x: 24 + colIdx * 29, y: 200 + row * 44, w: 25, h: 38, rx: 5, label: `${z}` });
      }
      return { vw: 160, vh: 300, outer: { x: 10, y: 6, w: 140, h: 288, rx: 22 }, glass: { x: 14, y: 10, w: 132, h: 280, rx: 19 }, titleY: 19, slots };
    }

    if (m.layout === 'fut092' || m.layout === 'c_wheel' || m.layout === 'c_slot') {
      const slots = [
        { key: 'btn_on',   type: 'rect', act: 'on',  x: 24, y: 26, w: 46, h: 20, rx: 10, label: 'ALL ON' },
        { key: 'btn_off',  type: 'rect', act: 'off', x: 90, y: 26, w: 46, h: 20, rx: 10, label: 'ALL OFF' },
        m.layout === 'c_slot'
          ? { key: 'hue_ring', type: 'hbar', surf: 'hue_ring', act: 'hue', x: 24, y: 64, w: 112, h: 22, label: 'COLOR' }
          : { key: 'hue_ring', type: 'ring', surf: 'hue_ring', act: 'hue', cx: 80, cy: 88, rIn: 19, rOut: 38, label: 'COLOR' },
        { key: 'bri_bar',  type: 'hbar', surf: 'bri_bar', act: 'brightness', x: 24, y: 136, w: 112, h: 16, label: 'BRIGHTNESS' },
        { key: 'cct_bar',  type: 'hbar', surf: 'cct_bar', act: 'kelvin',     x: 24, y: 158, w: 112, h: 16, label: 'CCT / SAT' },
        { key: 'btn_w',    type: 'rect', act: 'set_white',       x: 24, y: 182, w: 34, h: 19, rx: 4, label: 'W' },
        { key: 'btn_m',    type: 'rect', act: 'mode',            x: 63, y: 182, w: 34, h: 19, rx: 4, label: 'M' },
        { key: 'btn_sup',  type: 'rect', act: 'mode_speed_up',   x: 102, y: 182, w: 34, h: 19, rx: 4, label: 'S+' }
      ];
      for (let z = 1; z <= (m.zones || 4); z++) {
        slots.push({ key: `zone_${z}`, type: 'rocker', act: 'zone', zone: z, x: 24 + (z - 1) * 29, y: 210, w: 25, h: 52, rx: 5, label: `${z}` });
      }
      return { vw: 160, vh: 280, outer: { x: 10, y: 6, w: 140, h: 268, rx: 22 }, glass: { x: 14, y: 10, w: 132, h: 260, rx: 19 }, titleY: 19, slots };
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
    const lumCfg = facia.luminous || {};
    const darkPreview = Boolean(o.luminousPreview && !o.stencilMode);
    const LUM_INK = '#6ee7b7';      // Strontium aluminate yellow-green/aqua emission
    const LUM_CORE = '#ecfdf5';     // Bright phosphor core
    const DIM_NIGHT_INK = '#334155'; // Unlit ink in dark room
    const anyLum = Boolean(darkPreview || lumCfg.enabled || lumCfg.border || lumCfg.header || lumCfg.slots || Object.values(pads).some(p => p && p.luminous));
    if (anyLum) {
      defs += `<filter id="glow_${u}" x="-45%" y="-45%" width="190%" height="190%">
        <feGaussianBlur stdDeviation="${darkPreview ? '3.4' : '1.9'}" result="blur1"/>
        <feGaussianBlur stdDeviation="${darkPreview ? '1.3' : '0.7'}" result="blur2"/>
        <feMerge><feMergeNode in="blur1"/><feMergeNode in="blur2"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>`;
    }
    defs += `</defs>`;

    const isSlotLum = (cfg) => Boolean((lumCfg.enabled && lumCfg.slots) || (cfg && cfg.luminous));
    const isBdrLum = Boolean(lumCfg.enabled && lumCfg.border);
    const isHdrLum = Boolean(lumCfg.enabled && lumCfg.header);

    const bgCol = darkPreview ? '#070b14' : (facia.bgColor || col.bg);
    const glassCol = darkPreview ? '#0b1220' : (facia.bgColor || col.glass);
    const bdrCol = darkPreview ? (isBdrLum ? LUM_INK : '#1e293b') : (facia.boundaryColor || col.padStroke || col.bezel);
    const borderGlow = isBdrLum ? ` filter="url(#glow_${u})"` : '';

    // Helper: draw configurable slider track (pitch + end arrows: 'chevron' | 'triangle' | 'ticks' | 'dots' | 'none')
    function renderSliderTrackMarkup(optsTrk) {
      const pitch = Number(optsTrk.pitch ?? 2.2);
      const arrowStyle = optsTrk.arrows || 'chevron';
      const strokeCol = optsTrk.color || col.ink;
      const dashAttr = pitch <= 0.1 ? '' : ` stroke-dasharray="${(pitch * 0.95).toFixed(2)},${(pitch * 0.85).toFixed(2)}" stroke-linecap="round"`;
      const sw = 1.2;
      let mOut = '';

      // Emit an arrowhead or cap at (px, py) pointing in unit direction (ux, uy)
      const emitCap = (px, py, ux, uy, isMaxEnd) => {
        const nx = -uy, ny = ux; // perpendicular normal
        if (arrowStyle === 'none') return '';
        if (arrowStyle === 'ticks') {
          const hw = 2.1;
          return `<line x1="${(px + nx * hw).toFixed(2)}" y1="${(py + ny * hw).toFixed(2)}" x2="${(px - nx * hw).toFixed(2)}" y2="${(py - ny * hw).toFixed(2)}" stroke="${strokeCol}" stroke-width="1.35" stroke-linecap="round" pointer-events="none"/>`;
        }
        if (arrowStyle === 'dots') {
          const rDot = isMaxEnd ? 1.65 : 1.05;
          return `<circle cx="${px.toFixed(2)}" cy="${py.toFixed(2)}" r="${rDot.toFixed(2)}" fill="${strokeCol}" pointer-events="none"/>`;
        }
        const tipX = px + ux * 0.9, tipY = py + uy * 0.9;
        const bx = tipX - ux * 2.7, by = tipY - uy * 2.7;
        const hw = 1.75;
        if (arrowStyle === 'triangle') {
          return `<polygon points="${tipX.toFixed(2)},${tipY.toFixed(2)} ${(bx + nx * hw).toFixed(2)},${(by + ny * hw).toFixed(2)} ${(bx - nx * hw).toFixed(2)},${(by - ny * hw).toFixed(2)}" fill="${strokeCol}" pointer-events="none"/>`;
        }
        // Default: 'chevron'
        return `<polyline points="${(bx + nx * hw).toFixed(2)},${(by + ny * hw).toFixed(2)} ${tipX.toFixed(2)},${tipY.toFixed(2)} ${(bx - nx * hw).toFixed(2)},${(by - ny * hw).toFixed(2)}" fill="none" stroke="${strokeCol}" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" pointer-events="none"/>`;
      };

      const sMin = Number(optsTrk.sMin ?? 0), sMax = Number(optsTrk.sMax ?? 100);
      const startIsMax = sMin > sMax;

      if (optsTrk.kind === 'arc') {
        const { cx, cy, r, sDeg, eDeg } = optsTrk;
        const insetDeg = arrowStyle === 'none' ? 3.2 : 5.4;
        const a1 = sDeg + insetDeg, a2 = eDeg - insetDeg;
        if (a2 > a1 + 2) {
          const p1 = polarPt(cx, cy, r, a1);
          const p2 = polarPt(cx, cy, r, a2);
          const lg = Math.abs(a2 - a1) > 180 ? '1' : '0';
          mOut += `<path d="M ${p1.x.toFixed(2)} ${p1.y.toFixed(2)} A ${r.toFixed(2)} ${r.toFixed(2)} 0 ${lg} 1 ${p2.x.toFixed(2)} ${p2.y.toFixed(2)}" fill="none" stroke="${strokeCol}" stroke-width="${sw}"${dashAttr} opacity="0.88" pointer-events="none"/>`;
          // Tangent at angle deg (0=12 o'clock CW): CW unit tangent = (cos(rad), sin(rad)); CCW outward at a1 = (-cos(rad1), -sin(rad1))
          const rad1 = (a1 * Math.PI) / 180, rad2 = (a2 * Math.PI) / 180;
          mOut += emitCap(p1.x, p1.y, -Math.cos(rad1), -Math.sin(rad1), startIsMax);
          mOut += emitCap(p2.x, p2.y,  Math.cos(rad2),  Math.sin(rad2), !startIsMax);
        }
      } else {
        const { x1, y1, x2, y2 } = optsTrk;
        const dx = x2 - x1, dy = y2 - y1;
        const len = Math.hypot(dx, dy);
        if (len > 5) {
          const ux = dx / len, uy = dy / len;
          const inset = arrowStyle === 'none' ? 0.5 : 2.2;
          const sx = x1 + ux * inset, sy = y1 + uy * inset;
          const ex = x2 - ux * inset, ey = y2 - uy * inset;
          mOut += `<line x1="${sx.toFixed(2)}" y1="${sy.toFixed(2)}" x2="${ex.toFixed(2)}" y2="${ey.toFixed(2)}" stroke="${strokeCol}" stroke-width="${sw}"${dashAttr} opacity="0.88" pointer-events="none"/>`;
          mOut += emitCap(sx, sy, -ux, -uy, startIsMax);
          mOut += emitCap(ex, ey,  ux,  uy, !startIsMax);
        }
      }
      return mOut;
    }

    function hexToRgba(hexStr, alphaVal) {
      const a = Math.max(0, Math.min(1, Number(alphaVal)));
      const mHex = String(hexStr || '').trim().match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
      if (!mHex) return hexStr || `rgba(255,255,255,${a.toFixed(2)})`;
      let h = mHex[1];
      if (h.length === 3) h = h.split('').map(c => c + c).join('');
      const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
      return `rgba(${r},${g},${b},${a.toFixed(2)})`;
    }
    const bgImg = (facia.bgImage && facia.bgImage.dataUrl) ? facia.bgImage : null;
    let bgImgMarkup = '';
    if (bgImg) {
      const clipId = `bgclip_${u}`;
      const zScale = Math.max(0.3, Math.min(3.0, Number(bgImg.scale ?? 100) / 100));
      const panX = Number(bgImg.x ?? 0), panY = Number(bgImg.y ?? 0);
      const fitMode = bgImg.fit || 'cover';
      const par = fitMode === 'contain' ? 'xMidYMid meet' : (fitMode === 'stretch' ? 'none' : 'xMidYMid slice');
      const iw = bp.glass.w * zScale, ih = bp.glass.h * zScale;
      const ix = bp.glass.x + (bp.glass.w - iw) / 2 + (panX / 100) * bp.glass.w;
      const iy = bp.glass.y + (bp.glass.h - ih) / 2 + (panY / 100) * bp.glass.h;
      const rawOp = Math.max(0.05, Math.min(1, Number(bgImg.opacity ?? 88) / 100));
      const effOp = darkPreview ? (rawOp * 0.18) : rawOp;
      bgImgMarkup = `<defs><clipPath id="${clipId}"><rect x="${bp.glass.x}" y="${bp.glass.y}" width="${bp.glass.w}" height="${bp.glass.h}" rx="${bp.glass.rx}"/></clipPath></defs>` +
        `<g clip-path="url(#${clipId})" pointer-events="none"><image href="${escXml(bgImg.dataUrl)}" x="${ix.toFixed(2)}" y="${iy.toFixed(2)}" width="${iw.toFixed(2)}" height="${ih.toFixed(2)}" preserveAspectRatio="${par}" opacity="${effOp.toFixed(2)}"/></g>`;
    }

    let body = `${defs}
      <rect x="${bp.outer.x}" y="${bp.outer.y}" width="${bp.outer.w}" height="${bp.outer.h}" rx="${bp.outer.rx}" fill="${bgCol}" stroke="${bdrCol}" stroke-width="2"${borderGlow}/>
      <rect x="${bp.glass.x}" y="${bp.glass.y}" width="${bp.glass.w}" height="${bp.glass.h}" rx="${bp.glass.rx}" fill="${glassCol}" stroke="${bdrCol}" stroke-width="0.8"${borderGlow}/>${bgImgMarkup}`;

    if (facia.bgPattern === 'grid' || facia.bgPattern === 'brushed') {
      body += `<rect x="${bp.glass.x}" y="${bp.glass.y}" width="${bp.glass.w}" height="${bp.glass.h}" rx="${bp.glass.rx}" fill="url(#pat_${u})" pointer-events="none"/>`;
    }

    const panelFontObj = FACIA_FONTS[facia.fontFamily || 'sans'] || FACIA_FONTS.sans;
    const panelFontStack = panelFontObj.stack;
    const panelFontScale = Math.max(0.6, Math.min(1.6, Number(facia.fontScale || 100) / 100));
    const headerGlow = isHdrLum ? ` filter="url(#glow_${u})"` : '';
    const hdrInk = darkPreview ? (isHdrLum ? LUM_INK : DIM_NIGHT_INK) : col.subInk;

    if (facia.panelTitle) {
      const titleTxt = String(facia.panelTitle).trim().toUpperCase();
      if (bp.outer && bp.outer.rx >= bp.outer.w * 0.45 && bp.outer.w === bp.outer.h) {
        const tcx = bp.outer.x + bp.outer.w / 2;
        const tcy = bp.outer.y + bp.outer.h / 2;
        const tr = bp.outer.w / 2 + 5.5;
        const tArcId = `ptArc_${u}`;
        const pA = polarPt(tcx, tcy, tr, 225);
        const pB = polarPt(tcx, tcy, tr, 135);
        body += `<defs><path id="${tArcId}" d="M ${pA.x.toFixed(2)} ${pA.y.toFixed(2)} A ${tr.toFixed(2)} ${tr.toFixed(2)} 0 0 0 ${pB.x.toFixed(2)} ${pB.y.toFixed(2)}"/></defs>`;
        body += `<text font-family="${escXml(panelFontStack)}" font-size="${(6.4 * panelFontScale).toFixed(2)}" font-weight="800" letter-spacing="0.9" fill="${hdrInk}"${headerGlow} pointer-events="none"><textPath href="#${tArcId}" startOffset="50%" text-anchor="middle">${escXml(titleTxt)}</textPath></text>`;
      } else {
        body += `<text x="${(bp.vw / 2).toFixed(1)}" y="${bp.titleY}" text-anchor="middle" font-family="${escXml(panelFontStack)}" font-size="${(7.2 * panelFontScale).toFixed(2)}" font-weight="800" letter-spacing="0.7" fill="${hdrInk}"${headerGlow} pointer-events="none">${escXml(titleTxt)}</text>`;
      }
    } else if (facia.hideLogo === false) {
      body += `<text x="${bp.glass.x + 12}" y="${bp.titleY}" font-family="Inter,system-ui,sans-serif" font-size="8" font-weight="800" fill="${col.subInk}" pointer-events="none">MiBOXER®</text>`;
    }

    if (bp.cutout) {
      body += `<rect x="${bp.cutout.x}" y="${bp.cutout.y}" width="${bp.cutout.w}" height="${bp.cutout.h}" rx="${bp.cutout.rx}" fill="${o.stencilMode ? '#ffffff' : '#090b10'}" stroke="${col.padStroke}" stroke-width="0.9" stroke-dasharray="${o.stencilMode ? '2,1.5' : 'none'}" pointer-events="none"/>`;
      if (!o.stencilMode && bp.cutout.text) {
        body += `<text x="${(bp.cutout.x + bp.cutout.w / 2).toFixed(1)}" y="${(bp.cutout.y + bp.cutout.h * 0.74).toFixed(1)}" text-anchor="middle" fill="#f97316" font-family="monospace" font-size="11" font-weight="800" pointer-events="none">${escXml(bp.cutout.text)}</text>`;
      }
    }

    if (facia.showLedPinhole) {
      const dims = getPhysicalDims(m);
      const lx = (bp.vw * (dims.led_x_pct || 50)) / 100;
      const ly = (bp.vh * (dims.led_y_pct || 8)) / 100;
      body += `<circle cx="${lx.toFixed(1)}" cy="${ly.toFixed(1)}" r="1.5" fill="${o.stencilMode ? '#ffffff' : col.bg}" stroke="${col.padStroke}" stroke-width="0.6" pointer-events="none"/>`;
    }

    // Automatic box-aware autofit with per-pad font family, font scale, and top/bottom icon positioning
    function resolvePadFont(cfg) {
      const fKey = (cfg && cfg.fontFamily) || facia.fontFamily || 'sans';
      const fObj = FACIA_FONTS[fKey] || FACIA_FONTS.sans;
      const scPct = (cfg && cfg.fontScale) ? Number(cfg.fontScale) : Number(facia.fontScale || 100);
      const fScale = Math.max(0.6, Math.min(1.6, (scPct || 100) / 100));
      return { stack: fObj.stack, charFactor: fObj.charFactor || 0.55, scale: fScale };
    }

    function fitText(str, maxW, desiredFs, minFs, charFactor) {
      const s = String(str || '').trim();
      if (!s) return { text: '', fs: minFs };
      const usableW = Math.max(7, maxW - 3.0);
      const cf = charFactor || 0.55;
      const byWidth = usableW / Math.max(1, s.length * cf);
      const fs = Math.max(minFs, Math.min(desiredFs, byWidth));
      const maxChars = Math.max(1, Math.floor(usableW / Math.max(0.1, fs * cf)));
      const clipped = s.length > maxChars ? (maxChars > 2 ? s.slice(0, maxChars - 1) + '…' : s.slice(0, maxChars)) : s;
      return { text: clipped, fs };
    }

    function drawGlyphContent(cx, cy, bw, bh, cfg, fallbackLbl, fallbackSub) {
      // Default wide pads (bw >= bh * 1.32) to 'left' if iconPos not explicitly set, else 'top'
      const rawPos = (cfg && cfg.iconPos) || '';
      const iconPos = rawPos || ((bw >= bh * 1.45 && cfg && cfg.segmentMode === 'slider') ? 'left' : 'top');
      const icoKey = iconPos === 'none' ? 'none' : ((cfg && cfg.icon) || 'none');
      const ico = FACIA_ICONS[icoKey];
      const hasIco = Boolean(ico && ico.svg);

      const endKey = iconPos === 'both' ? ((cfg && cfg.iconEnd) || icoKey) : 'none';
      const icoEnd = FACIA_ICONS[endKey];
      const hasEndIco = Boolean(iconPos === 'both' && icoEnd && icoEnd.svg);

      const rawLbl = (cfg && cfg.label !== undefined) ? String(cfg.label) : (fallbackLbl || '');
      let rawSub = (cfg && cfg.sublabel !== undefined) ? String(cfg.sublabel) : (fallbackSub || '');
      if (!rawSub && cfg) {
        if (cfg.segmentMode === 'slider') {
          rawSub = `${Number(cfg.sliderMin ?? 0)}–${Number(cfg.sliderMax ?? 100)}%`;
        } else if (cfg.multifunc && cfg.multifunc.enabled) {
          rawSub = `1-${cfg.multifunc.steps || 4} • Hold`;
        }
      }
      const slotLum = isSlotLum(cfg);
      const ink = darkPreview ? (slotLum ? LUM_CORE : DIM_NIGHT_INK) : ((cfg && cfg.color) || col.ink);
      const effSubInk = darkPreview ? (slotLum ? LUM_INK : DIM_NIGHT_INK) : col.subInk;
      const glowGrp = (darkPreview && slotLum) ? ` filter="url(#glow_${u})"` : '';
      const pf = resolvePadFont(cfg);

      const padW = Math.max(8, bw - 2.6);
      const padH = Math.max(8, bh - 2.6);
      let out = '';

      // HORIZONTAL LAYOUT ('left', 'right', 'both'): Icon(s) sit beside centered Main + Sub text!
      if ((iconPos === 'left' || iconPos === 'right' || iconPos === 'both') && (hasIco || hasEndIco)) {
        const icoSz = Math.max(4.6, Math.min(11.5, padH * 0.58, padW * (iconPos === 'both' ? 0.22 : 0.28)));
        const sideGap = 1.8;
        const reservedW = (hasIco ? icoSz + sideGap : 0) + (hasEndIco ? icoSz + sideGap : 0);
        const textAvailW = Math.max(7, padW - reservedW);
        const textCx = iconPos === 'left'
          ? (cx + (hasIco ? (icoSz + sideGap) * 0.46 : 0))
          : iconPos === 'right'
            ? (cx - (hasIco ? (icoSz + sideGap) * 0.46 : 0))
            : cx;

        const baseLblFs = Math.min(7.4, padH * 0.36) * pf.scale;
        const lblFit = rawLbl ? fitText(rawLbl, textAvailW + 2.2, baseLblFs, 3.0, pf.charFactor) : { text: '', fs: 0 };
        const wantSub = Boolean(rawSub && padH >= 11.0);
        const baseSubFs = Math.min(4.8, (lblFit.fs || padH * 0.25) * 0.74);
        const subFit = wantSub ? fitText(rawSub, textAvailW + 2.4, baseSubFs, 2.7, pf.charFactor) : { text: '', fs: 0 };

        const tH = (lblFit.text ? lblFit.fs * 1.10 : 0) + (subFit.text ? subFit.fs * 1.12 : 0);
        let ty = cy - tH / 2;
        if (lblFit.text) {
          out += `<text x="${textCx.toFixed(2)}" y="${(ty + lblFit.fs * 0.82).toFixed(2)}" text-anchor="middle" font-family="${escXml(pf.stack)}" font-size="${lblFit.fs.toFixed(2)}" font-weight="700" fill="${ink}" pointer-events="none">${escXml(lblFit.text)}</text>`;
          ty += lblFit.fs * 1.10;
        }
        if (subFit.text) {
          out += `<text x="${textCx.toFixed(2)}" y="${(ty + subFit.fs * 0.82).toFixed(2)}" text-anchor="middle" font-family="${escXml(pf.stack)}" font-size="${subFit.fs.toFixed(2)}" font-weight="600" fill="${effSubInk}" pointer-events="none">${escXml(subFit.text)}</text>`;
        }

        const iy = cy - icoSz / 2;
        if (hasIco && (iconPos === 'left' || iconPos === 'both')) {
          const ix = iconPos === 'both' ? (cx - padW / 2 + 1.2) : Math.max(cx - padW / 2 + 1.0, textCx - textAvailW / 2 - icoSz - 0.6);
          out += `<g transform="translate(${ix.toFixed(2)},${iy.toFixed(2)}) scale(${(icoSz / 24).toFixed(4)})" pointer-events="none">${ico.svg.replace(/currentColor/g, ink)}</g>`;
        } else if (hasIco && iconPos === 'right') {
          const ix = Math.min(cx + padW / 2 - icoSz - 1.0, textCx + textAvailW / 2 + 0.6);
          out += `<g transform="translate(${ix.toFixed(2)},${iy.toFixed(2)}) scale(${(icoSz / 24).toFixed(4)})" pointer-events="none">${ico.svg.replace(/currentColor/g, ink)}</g>`;
        }
        if (hasEndIco) {
          const ixEnd = cx + padW / 2 - icoSz - 1.2;
          out += `<g transform="translate(${ixEnd.toFixed(2)},${iy.toFixed(2)}) scale(${(icoSz / 24).toFixed(4)})" pointer-events="none">${icoEnd.svg.replace(/currentColor/g, ink)}</g>`;
        }
        return out;
      }

      // VERTICAL LAYOUT ('top', 'bottom', or 'none')
      const minD = Math.min(padW, padH);
      const baseLblFs = Math.min(7.8, minD * (hasIco ? 0.25 : 0.36)) * pf.scale;
      const lblFit = rawLbl ? fitText(rawLbl, padW, baseLblFs, 3.2, pf.charFactor) : { text: '', fs: 0 };
      const baseSubFs = Math.min(4.9, (lblFit.fs || minD * 0.22 * pf.scale) * 0.72);
      const wantSub = rawSub && (padH >= (hasIco ? 16.5 : 12.0));
      const subFit = wantSub ? fitText(rawSub, padW, baseSubFs, 2.8, pf.charFactor) : { text: '', fs: 0 };

      const textBlockH = (lblFit.text ? lblFit.fs * 1.12 : 0) + (subFit.text ? subFit.fs * 1.15 : 0);
      const availForIco = hasIco ? (textBlockH > 0 ? Math.max(4.8, padH - textBlockH - 2.2) : Math.min(padW * 0.68, padH * 0.68)) : 0;
      const icoSz = hasIco ? Math.max(4.8, Math.min(13.2, availForIco)) : 0;

      const gap = (hasIco && textBlockH > 0) ? 1.8 : 0;
      const totalH = icoSz + gap + textBlockH;
      let yCursor = cy - totalH / 2;

      const renderIconAt = (iy) => {
        const ix = cx - icoSz / 2;
        return `<g transform="translate(${ix.toFixed(2)},${iy.toFixed(2)}) scale(${(icoSz / 24).toFixed(4)})" pointer-events="none">${ico.svg.replace(/currentColor/g, ink)}</g>`;
      };
      const renderTextAt = (yStart) => {
        let ty = yStart, tOut = '';
        if (lblFit.text) {
          tOut += `<text x="${cx.toFixed(2)}" y="${(ty + lblFit.fs * 0.82).toFixed(2)}" text-anchor="middle" font-family="${escXml(pf.stack)}" font-size="${lblFit.fs.toFixed(2)}" font-weight="700" fill="${ink}" pointer-events="none">${escXml(lblFit.text)}</text>`;
          ty += lblFit.fs * 1.12;
        }
        if (subFit.text) {
          tOut += `<text x="${cx.toFixed(2)}" y="${(ty + subFit.fs * 0.82).toFixed(2)}" text-anchor="middle" font-family="${escXml(pf.stack)}" font-size="${subFit.fs.toFixed(2)}" font-weight="600" fill="${effSubInk}" pointer-events="none">${escXml(subFit.text)}</text>`;
        }
        return tOut;
      };

      if (hasIco && iconPos === 'bottom') {
        out += renderTextAt(yCursor);
        out += renderIconAt(yCursor + textBlockH + gap);
      } else {
        if (hasIco) {
          out += renderIconAt(yCursor);
          yCursor += icoSz + gap;
        }
        out += renderTextAt(yCursor);
      }
      return glowGrp ? `<g${glowGrp}>${out}</g>` : out;
    }

    function padColors(cfg) {
      const st = (cfg && cfg.style) || defStyle;
      const slotLum = isSlotLum(cfg);
      if (darkPreview) {
        if (st === 'blank') return { st, fill: '#0b1220', stroke: 'none', dash: '', op: '0.25', lum: false };
        return {
          st,
          fill: slotLum ? 'rgba(16, 185, 129, 0.13)' : '#0f172a',
          stroke: slotLum ? LUM_INK : '#1e293b',
          dash: '',
          op: '1',
          lum: slotLum
        };
      }
      const pStroke = slotLum ? '#10b981' : (facia.boundaryColor || col.padStroke);
      if (st === 'blank') return { st, fill: glassCol, stroke: showStencilSlots ? pStroke : 'none', dash: showStencilSlots ? '2 2' : '', op: showStencilSlots ? '0.45' : '1', lum: slotLum };
      if (st === 'minimal') return { st, fill: glassCol, stroke: showStencilSlots ? pStroke : 'none', dash: showStencilSlots ? '1.5 1.5' : '', op: '1', lum: slotLum };
      if (st === 'outline') return { st, fill: glassCol, stroke: pStroke, dash: '', op: '1', lum: slotLum };
      const padAlphaPct = bgImg ? Number(bgImg.padAlpha ?? 72) : 100;
      const pFill = (cfg && cfg.fill)
        || (bgImg ? hexToRgba(col.padFill || '#ffffff', padAlphaPct / 100) : (facia.bgColor ? 'rgba(255,255,255,0.06)' : col.padFill));
      return { st: 'keycap', fill: pFill, stroke: pStroke, dash: '', op: '1', lum: slotLum };
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
          const ringThick = Math.max(8, s.rOut - s.rIn);
          for (let i = 0; i < n; i++) {
            const sKey = `hue_seg_${i + 1}`;
            const cfg = pads[sKey] || {};
            const pc = padColors(cfg);
            const sDeg = off + i * span + 1.5, eDeg = off + (i + 1) * span - 1.5;
            const midDeg = ((off + (i + 0.5) * span) % 360 + 360) % 360;
            const d = ringWedgePath(s.cx, s.cy, s.rIn, s.rOut, sDeg, eDeg);
            const isSelected = selKey === sKey;
            const isLumSeg = Boolean((lumCfg.enabled && lumCfg.slots) || cfg.luminous);
            const glowSeg = isLumSeg ? ` filter="url(#glow_${u})"` : '';
            body += `<path class="mbx-seg-hit" data-seg-act="${sKey}" data-pad-key="${sKey}" data-sdeg="${sDeg.toFixed(1)}" data-edeg="${eDeg.toFixed(1)}" data-cx="${s.cx}" data-cy="${s.cy}" ${pc.st === 'blank' ? 'data-blanked="1"' : ''} d="${d}" fill="${pc.fill}" stroke="${isSelected ? col.accent : pc.stroke}" stroke-width="${isSelected ? 2 : 1.05}" ${pc.dash ? `stroke-dasharray="${pc.dash}"` : ''}${glowSeg} style="cursor:pointer"/>`;

            const defL = (surfCfg.labels && surfCfg.labels[i]) || `${i + 1}`;
            const lblStr = (cfg && cfg.label !== undefined) ? String(cfg.label).trim() : defL;
            const arcSpan = Math.max(10, eDeg - sDeg);
            // Default wide ring segments (>= 50 deg) to 'left' so icon sits in the angular flank beside Main+Sub text!
            const iconPos = (cfg && cfg.iconPos) || (arcSpan >= 50 ? 'left' : 'top');
            const icoKey = iconPos === 'none' ? 'none' : ((cfg && cfg.icon) || 'none');
            const ico = FACIA_ICONS[icoKey];
            const hasIco = Boolean(ico && ico.svg);
            const endKey = iconPos === 'both' ? ((cfg && cfg.iconEnd) || icoKey) : 'none';
            const icoEnd = FACIA_ICONS[endKey];
            const hasEndIco = Boolean(iconPos === 'both' && icoEnd && icoEnd.svg);

            const ink = darkPreview ? (isLumSeg ? LUM_CORE : DIM_NIGHT_INK) : ((cfg && cfg.color) || col.ink);
            const segSubInk = darkPreview ? (isLumSeg ? LUM_INK : DIM_NIGHT_INK) : col.subInk;
            const pf = resolvePadFont(cfg);

            if (pc.st !== 'blank') {
              const isLowerArc = midDeg > 95 && midDeg < 265;
              const isSlider = Boolean(cfg && cfg.segmentMode === 'slider');
              const isMf = Boolean(!isSlider && cfg && cfg.multifunc && cfg.multifunc.enabled);
              const sMin = Number(cfg.sliderMin ?? 0);
              const sMax = Number(cfg.sliderMax ?? 100);
              const subStr = (cfg && cfg.sublabel !== undefined && String(cfg.sublabel).trim() !== '')
                ? String(cfg.sublabel).trim()
                : isSlider ? `${sMin}→${sMax}%`
                : isMf ? `1-${cfg.multifunc.steps || 4} • Hold` : '';

              // Helper: emit curved text along reading-order sub-arc [readStartDeg -> readEndDeg]
              const emitSubArcText = (idSuffix, rBand, rStartDeg, rEndDeg, txt, desiredFs, minFs, weight, fillCol, fontStack) => {
                if (!txt) return;
                const subSpan = Math.abs(rEndDeg - rStartDeg);
                if (subSpan < 8) return;
                const arcLen = (subSpan * Math.PI / 180) * rBand;
                const fitted = fitText(txt, arcLen + 2.5, desiredFs, minFs, pf.charFactor);
                if (!fitted.text) return;
                const pStart = polarPt(s.cx, s.cy, rBand, rStartDeg);
                const pEnd = polarPt(s.cx, s.cy, rBand, rEndDeg);
                const sweep = isLowerArc ? '0' : '1';
                const lgFlag = subSpan > 180 ? '1' : '0';
                const arcId = `arc_${u}_${i}_${idSuffix}`;
                body += `<defs><path id="${arcId}" d="M ${pStart.x.toFixed(2)} ${pStart.y.toFixed(2)} A ${rBand.toFixed(2)} ${rBand.toFixed(2)} 0 ${lgFlag} ${sweep} ${pEnd.x.toFixed(2)} ${pEnd.y.toFixed(2)}"/></defs>`;
                body += `<text font-family="${escXml(fontStack || pf.stack)}" font-size="${fitted.fs.toFixed(2)}" font-weight="${weight}" fill="${fillCol}" pointer-events="none"><textPath href="#${arcId}" startOffset="50%" text-anchor="middle" dy="0.34em">${escXml(fitted.text)}</textPath></text>`;
              };

              if (arcSpan >= 42) {
                // Reading-order left-to-right angles along the arc (so 'Left' is ALWAYS visual left, even on bottom slices!)
                const padAng = Math.min(5.5, arcSpan * 0.08);
                const readLeftDeg  = isLowerArc ? (eDeg - padAng) : (sDeg + padAng);
                const readRightDeg = isLowerArc ? (sDeg + padAng) : (eDeg - padAng);
                const dirSign = isLowerArc ? -1 : 1; // +dirSign moves from visual-left toward visual-right

                const rMid = s.rIn + ringThick * 0.50;
                const icoSz = Math.max(4.8, Math.min(7.4, ringThick * 0.44));
                const icoSpanDeg = Math.min(arcSpan * 0.30, ((icoSz + 2.4) / Math.max(12, rMid)) * (180 / Math.PI));

                if ((iconPos === 'left' || iconPos === 'right' || iconPos === 'both') && (hasIco || hasEndIco)) {
                  // ANGULAR FLANK PLACEMENT: Icon(s) sit on Left / Right / Both flanks at rMid; Main + Sub text stay centered!
                  let txtLeftDeg = readLeftDeg;
                  let txtRightDeg = readRightDeg;

                  if (hasIco && (iconPos === 'left' || iconPos === 'both')) {
                    const iDeg = readLeftDeg + dirSign * (icoSpanDeg * 0.48);
                    const ip = polarPt(s.cx, s.cy, rMid, iDeg);
                    body += `<g transform="translate(${(ip.x - icoSz / 2).toFixed(2)},${(ip.y - icoSz / 2).toFixed(2)}) scale(${(icoSz / 24).toFixed(4)})" pointer-events="none">${ico.svg.replace(/currentColor/g, ink)}</g>`;
                    txtLeftDeg += dirSign * (icoSpanDeg * 0.95);
                  }
                  if (hasIco && iconPos === 'right') {
                    const iDeg = readRightDeg - dirSign * (icoSpanDeg * 0.48);
                    const ip = polarPt(s.cx, s.cy, rMid, iDeg);
                    body += `<g transform="translate(${(ip.x - icoSz / 2).toFixed(2)},${(ip.y - icoSz / 2).toFixed(2)}) scale(${(icoSz / 24).toFixed(4)})" pointer-events="none">${ico.svg.replace(/currentColor/g, ink)}</g>`;
                    txtRightDeg -= dirSign * (icoSpanDeg * 0.95);
                  }
                  if (hasEndIco) {
                    const iDegEnd = readRightDeg - dirSign * (icoSpanDeg * 0.48);
                    const ipEnd = polarPt(s.cx, s.cy, rMid, iDegEnd);
                    body += `<g transform="translate(${(ipEnd.x - icoSz / 2).toFixed(2)},${(ipEnd.y - icoSz / 2).toFixed(2)}) scale(${(icoSz / 24).toFixed(4)})" pointer-events="none">${icoEnd.svg.replace(/currentColor/g, ink)}</g>`;
                    txtRightDeg -= dirSign * (icoSpanDeg * 0.95);
                  }

                  // Visual "above" vs "below" radii (accounting for lower-half flip so Main Label is always visually ABOVE Sub-Label!)
                  const rVisualTop = isLowerArc ? (s.rIn + ringThick * 0.34) : (s.rIn + ringThick * 0.66);
                  const rVisualBot = isLowerArc ? (s.rIn + ringThick * 0.69) : (s.rIn + ringThick * 0.31);
                  const mainR = subStr ? rVisualTop : rMid;
                  const baseMainFs = Math.max(4.0, Math.min(6.4, ringThick * (subStr ? 0.31 : 0.36))) * pf.scale;
                  emitSubArcText('lbl', mainR, txtLeftDeg, txtRightDeg, lblStr, baseMainFs, 3.0, '800', ink, pf.stack);
                  if (subStr && ringThick >= 12.5) {
                    const baseSubFs = Math.max(3.1, Math.min(4.5, ringThick * 0.23)) * pf.scale;
                    emitSubArcText('sub', rVisualBot, txtLeftDeg, txtRightDeg, subStr, baseSubFs, 2.7, '700', segSubInk, pf.stack);
                  }
                } else {
                  // RADIAL ('top', 'bottom', or 'none' text-only): Visually upright order with wide separation so zero overlap!
                  const rVisHigh = isLowerArc ? (s.rIn + ringThick * 0.24) : (s.rIn + ringThick * 0.77);
                  const rVisMid  = s.rIn + ringThick * 0.50;
                  const rVisLow  = isLowerArc ? (s.rIn + ringThick * 0.77) : (s.rIn + ringThick * 0.24);

                  if (hasIco && iconPos === 'top') {
                    const ip = polarPt(s.cx, s.cy, rVisHigh, midDeg);
                    const isz = Math.max(4.4, Math.min(6.4, ringThick * 0.33));
                    body += `<g transform="translate(${(ip.x - isz / 2).toFixed(2)},${(ip.y - isz / 2).toFixed(2)}) scale(${(isz / 24).toFixed(4)})" pointer-events="none">${ico.svg.replace(/currentColor/g, ink)}</g>`;
                    const lblR = subStr ? (isLowerArc ? s.rIn + ringThick * 0.53 : s.rIn + ringThick * 0.47) : rVisLow;
                    emitSubArcText('lbl', lblR, readLeftDeg, readRightDeg, lblStr, Math.min(5.6, ringThick * 0.27) * pf.scale, 2.9, '800', ink, pf.stack);
                    if (subStr && ringThick >= 16) {
                      emitSubArcText('sub', rVisLow, readLeftDeg, readRightDeg, subStr, Math.min(4.0, ringThick * 0.20) * pf.scale, 2.6, '700', segSubInk, pf.stack);
                    }
                  } else if (hasIco && iconPos === 'bottom') {
                    const ip = polarPt(s.cx, s.cy, rVisLow, midDeg);
                    const isz = Math.max(4.4, Math.min(6.4, ringThick * 0.33));
                    body += `<g transform="translate(${(ip.x - isz / 2).toFixed(2)},${(ip.y - isz / 2).toFixed(2)}) scale(${(isz / 24).toFixed(4)})" pointer-events="none">${ico.svg.replace(/currentColor/g, ink)}</g>`;
                    const lblR = subStr ? rVisHigh : rVisHigh;
                    emitSubArcText('lbl', lblR, readLeftDeg, readRightDeg, lblStr, Math.min(5.6, ringThick * 0.27) * pf.scale, 2.9, '800', ink, pf.stack);
                    if (subStr && ringThick >= 16) {
                      emitSubArcText('sub', rVisMid, readLeftDeg, readRightDeg, subStr, Math.min(4.0, ringThick * 0.20) * pf.scale, 2.6, '700', segSubInk, pf.stack);
                    }
                  } else {
                    // Text Only ('none')
                    const mainR = subStr ? (isLowerArc ? s.rIn + ringThick * 0.35 : s.rIn + ringThick * 0.65) : rVisMid;
                    const subR  = isLowerArc ? s.rIn + ringThick * 0.68 : s.rIn + ringThick * 0.32;
                    emitSubArcText('lbl', mainR, readLeftDeg, readRightDeg, lblStr, Math.min(6.4, ringThick * 0.35) * pf.scale, 3.1, '800', ink, pf.stack);
                    if (subStr) {
                      emitSubArcText('sub', subR, readLeftDeg, readRightDeg, subStr, Math.min(4.5, ringThick * 0.24) * pf.scale, 2.7, '700', segSubInk, pf.stack);
                    }
                  }
                }

                // Configurable slider track (dot pitch + end arrows) along outer rim
                if (isSlider) {
                  const trkR = s.rIn + ringThick * 0.90;
                  body += renderSliderTrackMarkup({
                    kind: 'arc', cx: s.cx, cy: s.cy, r: trkR, sDeg, eDeg,
                    pitch: cfg.sliderPitch ?? facia.sliderPitch ?? 2.2,
                    arrows: cfg.sliderArrows || facia.sliderArrows || 'chevron',
                    color: darkPreview && isLumSeg ? LUM_INK : ink,
                    sMin, sMax
                  });
                }
              } else {
                const mp = polarPt(s.cx, s.cy, (s.rIn + s.rOut) / 2, midDeg);
                if (hasIco) {
                  const isz = Math.max(5.5, Math.min(8.5, ringThick * 0.56));
                  body += `<g transform="translate(${(mp.x - isz / 2).toFixed(2)},${(mp.y - isz / 2).toFixed(2)}) scale(${(isz / 24).toFixed(4)})" pointer-events="none">${ico.svg.replace(/currentColor/g, ink)}</g>`;
                } else if (lblStr) {
                  const cFs = Math.max(4.4, Math.min(6.6, ringThick * 0.42)) * pf.scale;
                  body += `<text x="${mp.x.toFixed(2)}" y="${(mp.y + cFs * 0.35).toFixed(2)}" text-anchor="middle" font-family="${escXml(pf.stack)}" font-size="${cFs.toFixed(2)}" font-weight="800" fill="${ink}" pointer-events="none">${escXml(lblStr.slice(0, 4))}</text>`;
                }
              }
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
        if (darkPreview) {
          const glowR = pc.lum ? ` filter="url(#glow_${u})"` : '';
          body += `<circle cx="${s.cx}" cy="${s.cy}" r="${s.rOut}" fill="none" stroke="${pc.stroke}" stroke-width="1.1"${glowR}/>`;
          body += `<circle cx="${s.cx}" cy="${s.cy}" r="${s.rIn}" fill="none" stroke="${pc.stroke}" stroke-width="1.1"${glowR}/>`;
          body += `<circle cx="${s.cx}" cy="${s.cy}" r="${rMid}" fill="none" stroke="${pc.lum ? LUM_INK : DIM_NIGHT_INK}" stroke-width="1.4" stroke-dasharray="2.4 3.0" opacity="0.85"${glowR} pointer-events="none"/>`;
          body += `<circle class="mbx-hit" data-act="hue" data-pad-key="${s.key}" cx="${s.cx}" cy="${s.cy}" r="${rMid}" fill="none" stroke="transparent" stroke-width="${rw}" style="cursor:pointer"/>`;
        } else if (isMono || facia.sliderStyle === 'mono_ticks' || facia.sliderStyle === 'minimal') {
          body += `<circle cx="${s.cx}" cy="${s.cy}" r="${s.rOut}" fill="none" stroke="${col.padStroke}" stroke-width="0.9"/>`;
          body += `<circle cx="${s.cx}" cy="${s.cy}" r="${s.rIn}" fill="none" stroke="${col.padStroke}" stroke-width="0.9"/>`;
          body += `<circle class="mbx-hit" data-act="hue" data-pad-key="${s.key}" cx="${s.cx}" cy="${s.cy}" r="${rMid}" fill="none" stroke="${col.ink}" stroke-width="${facia.sliderStyle === 'minimal' ? 1.5 : rw * 0.55}" ${facia.sliderStyle === 'mono_ticks' ? 'stroke-dasharray="2.2 3.2"' : ''} opacity="${facia.sliderStyle === 'minimal' ? 0.5 : 0.75}" style="cursor:pointer"/>`;
          body += `<circle class="mbx-hit" data-act="hue" data-pad-key="${s.key}" cx="${s.cx}" cy="${s.cy}" r="${rMid}" fill="none" stroke="transparent" stroke-width="${rw}" style="cursor:pointer"/>`;
        } else {
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
            body += `<rect class="mbx-seg-hit" data-seg-act="${sKey}" data-pad-key="${sKey}" ${pc.st === 'blank' ? 'data-blanked="1"' : ''} x="${rx.toFixed(2)}" y="${ry.toFixed(2)}" width="${rw.toFixed(2)}" height="${rh.toFixed(2)}" rx="3" fill="${pc.fill}" stroke="${isSelected ? col.accent : pc.stroke}" stroke-width="${isSelected ? 1.9 : 1.0}" ${pc.dash ? `stroke-dasharray="${pc.dash}"` : ''}${pc.lum ? ` filter="url(#glow_${u})"` : ''} style="cursor:pointer"/>`;
            const defL = (surfCfg.labels && surfCfg.labels[i]) || `${i + 1}`;
            if (pc.st !== 'blank') {
              const barInk = (cfg && cfg.color) || col.ink;
              const isBarSlider = Boolean(cfg && cfg.segmentMode === 'slider');
              const iconOnBottom = (cfg && cfg.iconPos) === 'bottom';
              // Reserve 3.2mm at the edge opposite the icon for the dashed linear slider track
              const glyphCy = isBarSlider ? (iconOnBottom ? (ry + rh / 2 + 1.4) : (ry + rh / 2 - 1.4)) : (ry + rh / 2);
              const glyphH = isBarSlider ? Math.max(8, rh - 3.2) : rh;
              body += drawGlyphContent(rx + rw / 2, glyphCy, rw, glyphH, cfg, defL, '');
              if (isBarSlider) {
                const trkCol = darkPreview ? (isSlotLum(cfg) ? LUM_INK : DIM_NIGHT_INK) : barInk;
                const sMinB = Number(cfg.sliderMin ?? 0), sMaxB = Number(cfg.sliderMax ?? 100);
                const pitchB = cfg.sliderPitch ?? facia.sliderPitch ?? 2.2;
                const arrowsB = cfg.sliderArrows || facia.sliderArrows || 'chevron';
                if (vert && rw < rh * 0.75) {
                  const trkX = rx + rw - 2.5;
                  body += renderSliderTrackMarkup({ kind: 'line', x1: trkX, y1: ry + rh - 3.2, x2: trkX, y2: ry + 3.2, pitch: pitchB, arrows: arrowsB, color: trkCol, sMin: sMinB, sMax: sMaxB });
                } else {
                  const trkY = iconOnBottom ? (ry + 2.7) : (ry + rh - 2.7);
                  body += renderSliderTrackMarkup({ kind: 'line', x1: rx + 3.0, y1: trkY, x2: rx + rw - 3.0, y2: trkY, pitch: pitchB, arrows: arrowsB, color: trkCol, sMin: sMinB, sMax: sMaxB });
                }
              }
            }
          }
          return;
        }

        // Continuous Bar (not segmented) — supports full Stencil Slider customisation (arrows, dot pitch, text, dual icons & luminous glow!)
        const cfg = pads[s.key] || {};
        const pc = padColors(cfg);
        if (pc.st === 'blank') {
          if (showStencilSlots) body += `<rect class="mbx-hit" data-act="${s.act}" data-pad-key="${s.key}" data-blanked="1" x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="${Math.min(s.w, s.h) / 2}" fill="none" stroke="${col.padStroke}" stroke-dasharray="2 2" opacity="0.35" style="cursor:pointer"/>`;
          return;
        }
        const forceFactory = cfg.sliderArrows === 'factory';
        const hasCustomLook = !forceFactory && Boolean(
          cfg.customTrack || cfg.sliderArrows || cfg.sliderPitch !== undefined ||
          cfg.label !== undefined || cfg.sublabel !== undefined ||
          (cfg.icon && cfg.icon !== 'none') || (cfg.iconEnd && cfg.iconEnd !== 'none') ||
          cfg.style || isMono || darkPreview || pc.lum
        );
        let gradFill = pc.fill;
        if (!hasCustomLook && !isMono && facia.sliderStyle !== 'mono_ticks' && facia.sliderStyle !== 'minimal') {
          if (s.act === 'hue') gradFill = `url(#st_rgb_${u})`;
          else if (s.act === 'kelvin' || s.act === 'saturation') gradFill = vert ? `url(#st_cct_v_${u})` : `url(#st_cct_${u})`;
          else gradFill = vert ? `url(#st_bri_v_${u})` : `url(#st_bri_h_${u})`;
        } else if (forceFactory && darkPreview) {
          gradFill = pc.fill;
        }
        const rad = Math.min(6, Math.min(s.w, s.h) / 2);
        const glowBar = pc.lum ? ` filter="url(#glow_${u})"` : '';
        const barStroke = selKey === s.key ? col.accent : pc.stroke;
        body += `<rect class="mbx-hit" data-act="${s.act}" ${s.zone !== undefined ? `data-zone="${s.zone}"` : ''} data-pad-key="${s.key}" x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="${rad}" fill="${gradFill}" stroke="${barStroke}" stroke-width="${selKey === s.key ? 1.9 : 1.0}" ${pc.dash ? `stroke-dasharray="${pc.dash}"` : ''} opacity="${pc.op}"${glowBar} style="cursor:pointer"/>`;

        if (hasCustomLook) {
          const trkCol = darkPreview ? (pc.lum ? LUM_INK : DIM_NIGHT_INK) : ((cfg && cfg.color) || col.ink);
          const inkV = darkPreview ? (pc.lum ? LUM_CORE : DIM_NIGHT_INK) : ((cfg && cfg.color) || col.ink);
          const subInkV = darkPreview ? (pc.lum ? LUM_INK : DIM_NIGHT_INK) : col.subInk;
          const pitchU = cfg.sliderPitch ?? facia.sliderPitch ?? 2.2;
          const arrowsU = (cfg.sliderArrows && cfg.sliderArrows !== 'factory') ? cfg.sliderArrows : (facia.sliderArrows || 'chevron');
          const sMinU = Number(cfg.sliderMin ?? 0), sMaxU = Number(cfg.sliderMax ?? 100);
          const glowTxt = (darkPreview && pc.lum) ? ` filter="url(#glow_${u})"` : '';

          if (vert) {
            const hasTextOrIco = Boolean(cfg.label !== undefined || cfg.sublabel !== undefined || (cfg.icon && cfg.icon !== 'none') || (cfg.iconEnd && cfg.iconEnd !== 'none'));
            const trkX = hasTextOrIco ? (s.x + s.w - 2.7) : (s.x + s.w / 2);
            body += renderSliderTrackMarkup({ kind: 'line', x1: trkX, y1: s.y + s.h - 3.8, x2: trkX, y2: s.y + 3.8, pitch: pitchU, arrows: arrowsU, color: trkCol, sMin: sMinU, sMax: sMaxU });

            if (hasTextOrIco) {
              const rawPosU = cfg.iconPos || 'both';
              const topIcoKey = (rawPosU === 'both') ? (cfg.iconEnd || cfg.icon || 'sun') : ((rawPosU === 'top' || rawPosU === 'right') ? (cfg.icon || 'none') : 'none');
              const botIcoKey = (rawPosU === 'both') ? (cfg.icon || 'moon') : ((rawPosU === 'bottom' || rawPosU === 'left') ? (cfg.icon || 'none') : 'none');
              const icoTop = FACIA_ICONS[topIcoKey], icoBot = FACIA_ICONS[botIcoKey];
              const iszV = Math.max(4.6, Math.min(7.6, (s.w - 3.2) * 0.62));
              const cxV = s.x + (s.w - 3.2) / 2;
              let gInner = '';
              if (icoTop && icoTop.svg) {
                gInner += `<g transform="translate(${(cxV - iszV / 2).toFixed(2)},${(s.y + 5.0).toFixed(2)}) scale(${(iszV / 24).toFixed(4)})" pointer-events="none">${icoTop.svg.replace(/currentColor/g, inkV)}</g>`;
              }
              if (icoBot && icoBot.svg) {
                gInner += `<g transform="translate(${(cxV - iszV / 2).toFixed(2)},${(s.y + s.h - iszV - 5.0).toFixed(2)}) scale(${(iszV / 24).toFixed(4)})" pointer-events="none">${icoBot.svg.replace(/currentColor/g, inkV)}</g>`;
              }
              const vLbl = cfg.label !== undefined ? String(cfg.label).trim() : '';
              const vSub = cfg.sublabel !== undefined ? String(cfg.sublabel).trim() : (vLbl ? `${sMinU}\u2192${sMaxU}%` : '');
              const pfV = resolvePadFont(cfg);
              const availRotW = Math.max(14, s.h - (icoTop && icoTop.svg ? iszV + 7 : 5) - (icoBot && icoBot.svg ? iszV + 7 : 5));
              const cyV = s.y + s.h / 2;
              if (vLbl) {
                const fitL = fitText(vLbl, availRotW, Math.min(5.5, (s.w - 3.5) * 0.46) * pfV.scale, 2.9, pfV.charFactor);
                const xOff = vSub ? (cxV - 1.5) : cxV;
                gInner += `<text transform="translate(${xOff.toFixed(2)},${cyV.toFixed(2)}) rotate(-90)" text-anchor="middle" dy="0.34em" font-family="${escXml(pfV.stack)}" font-size="${fitL.fs.toFixed(2)}" font-weight="800" fill="${inkV}" pointer-events="none">${escXml(fitL.text)}</text>`;
              }
              if (vSub && s.w >= 12) {
                const fitS = fitText(vSub, availRotW, Math.min(3.9, (s.w - 3.5) * 0.33) * pfV.scale, 2.5, pfV.charFactor);
                gInner += `<text transform="translate(${(cxV + 2.4).toFixed(2)},${cyV.toFixed(2)}) rotate(-90)" text-anchor="middle" dy="0.34em" font-family="${escXml(pfV.stack)}" font-size="${fitS.fs.toFixed(2)}" font-weight="700" fill="${subInkV}" pointer-events="none">${escXml(fitS.text)}</text>`;
              }
              body += glowTxt ? `<g${glowTxt}>${gInner}</g>` : gInner;
            }
          } else {
            const trkY = s.y + s.h - 2.6;
            body += renderSliderTrackMarkup({ kind: 'line', x1: s.x + 3.8, y1: trkY, x2: s.x + s.w - 3.8, y2: trkY, pitch: pitchU, arrows: arrowsU, color: trkCol, sMin: sMinU, sMax: sMaxU });
            if (cfg.label !== undefined || cfg.sublabel !== undefined || (cfg.icon && cfg.icon !== 'none') || (cfg.iconEnd && cfg.iconEnd !== 'none')) {
              body += drawGlyphContent(s.x + s.w / 2, s.y + (s.h - 2.6) / 2, s.w, s.h - 2.8, Object.assign({ segmentMode: 'slider' }, cfg), '', '');
            }
          }
        } else {
          const steps = 6;
          const tickCol = darkPreview ? (pc.lum ? LUM_INK : DIM_NIGHT_INK) : (isMono ? col.ink : '#ffffff');
          for (let t = 1; t < steps; t++) {
            if (vert) {
              const ty = s.y + (t * s.h) / steps;
              body += `<line x1="${s.x + 3}" y1="${ty.toFixed(1)}" x2="${s.x + s.w - 3}" y2="${ty.toFixed(1)}" stroke="${tickCol}" stroke-opacity="0.6" stroke-width="0.8" pointer-events="none"/>`;
            } else {
              const tx = s.x + (t * s.w) / steps;
              body += `<line x1="${tx.toFixed(1)}" y1="${s.y + 3}" x2="${tx.toFixed(1)}" y2="${s.y + s.h - 3}" stroke="${tickCol}" stroke-opacity="0.6" stroke-width="0.8" pointer-events="none"/>`;
            }
          }
        }
        if (selKey === s.key) body += selRingRect(s.x, s.y, s.w, s.h, rad);
        return;
      }

      if (s.type === 'circle') {
        const cfg = pads[s.key] || {};
        const pc = padColors(cfg);
        const zAttr = (s.zone !== undefined && s.zone !== null) ? `data-zone="${s.zone}"` : '';
        const isLumC = Boolean((facia.luminous && facia.luminous.enabled && facia.luminous.slots) || (cfg && cfg.luminous));
        const glowAttrC = isLumC ? ` filter="url(#glow_${u})"` : '';
        body += `<circle class="mbx-hit" data-act="${s.act}" ${zAttr} data-pad-key="${s.key}" ${pc.st === 'blank' ? 'data-blanked="1"' : ''} cx="${s.cx}" cy="${s.cy}" r="${s.r}" fill="${pc.fill}" stroke="${selKey === s.key ? col.accent : pc.stroke}" stroke-width="${selKey === s.key ? 1.9 : 1.0}" ${pc.dash ? `stroke-dasharray="${pc.dash}"` : ''} opacity="${pc.op}"${glowAttrC} style="cursor:pointer"/>`;
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
        const glowRocker = pc.lum ? ` filter="url(#glow_${u})"` : '';
        const pipInk = darkPreview ? (pc.lum ? LUM_INK : DIM_NIGHT_INK) : col.subInk;
        body += `<g data-pad-key="${s.key}">
          <rect x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="${s.rx || 5}" fill="${pc.fill}" stroke="${selKey === s.key ? col.accent : pc.stroke}" stroke-width="${selKey === s.key ? 1.9 : 1.0}" ${pc.dash ? `stroke-dasharray="${pc.dash}"` : ''} opacity="${pc.op}"${glowRocker}/>`;
        if (pc.st !== 'blank') {
          body += `<line x1="${(s.x + s.w / 2).toFixed(1)}" y1="${(s.y + 4.5).toFixed(1)}" x2="${(s.x + s.w / 2).toFixed(1)}" y2="${(s.y + 9).toFixed(1)}" stroke="${pipInk}" stroke-width="1.2" stroke-linecap="round" pointer-events="none"/>`;
          body += `<circle cx="${(s.x + s.w / 2).toFixed(1)}" cy="${(s.y + s.h - 6.8).toFixed(1)}" r="2.3" fill="none" stroke="${pipInk}" stroke-width="1.0" pointer-events="none"/>`;
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
      const glowRect = pc.lum ? ` filter="url(#glow_${u})"` : '';
      body += `<rect class="mbx-hit" data-act="${s.act}" ${zAttr} ${vAttr} data-pad-key="${s.key}" ${pc.st === 'blank' ? 'data-blanked="1"' : ''} x="${s.x}" y="${s.y}" width="${s.w}" height="${s.h}" rx="${s.rx || 4}" fill="${pc.fill}" stroke="${selKey === s.key ? col.accent : pc.stroke}" stroke-width="${selKey === s.key ? 1.9 : 1.0}" ${pc.dash ? `stroke-dasharray="${pc.dash}"` : ''} opacity="${pc.op}"${glowRect} style="cursor:pointer"/>`;
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

    // 2. 8-ZONE B8: Standardised 8-Room Icons + Segmented Device Ring / Sliders!
    if (m.layout === 'b8') {
      return [
        {
          id: 'b8_hybrid_arc_and_bar_sliders',
          name: 'Hybrid Arc + Straight Sliders Showcase (0–100% & 100–0%)',
          desc: 'Showcases centered circular arc labels with top/bottom icons, 2 curved variable sliders (Blinds 100–0%, Fan 0–100%), 2 multi-tap slices, AND 2 straight variable sliders (Dimmer 15–100%, Warmth 0–100%)',
          touch_zones: {
            hue_ring: { enabled: true, segments: 4, offset_deg: -45, zone_mask: 65535, labels: ['Blinds','Fan','Climate','Cinema'] },
            sat_bar:  { enabled: true, segments: 2, offset_deg: 0,   zone_mask: 65535, labels: ['Dimmer','Warmth'] },
            bri_bar:  { enabled: false, segments: 4, offset_deg: 0,  zone_mask: 65535, labels: ['','','',''] },
            cct_bar:  { enabled: false, segments: 4, offset_deg: 0,  zone_mask: 65535, labels: ['','','',''] }
          },
          facia: {
            enabled: true, theme: defTheme, fontFamily: 'geometric', fontScale: 105,
            panelTitle: 'HYBRID SLIDER STUDIO', defaultPadStyle: 'keycap', showLedPinhole: true, hideLogo: true,
            luminous: { enabled: true, border: true, header: true, slots: false },
            pads: {
              hue_seg_1: { icon: 'blinds',     iconEnd: 'sun',    iconPos: 'both',  label: 'Blinds',  sublabel: '100→0% Slide', segmentMode: 'slider', sliderMin: 100, sliderMax: 0, sliderPitch: 2.2, sliderArrows: 'chevron', luminous: true },
              hue_seg_2: { icon: 'fan',        iconEnd: 'sparkles', iconPos: 'both', label: 'Fan Spd', sublabel: '0→100% Slide', segmentMode: 'slider', sliderMin: 0,   sliderMax: 100, sliderPitch: 1.5, sliderArrows: 'triangle', luminous: true },
              hue_seg_3: { icon: 'ac',         iconPos: 'left',   label: 'Climate', sublabel: '1-5 • Hold', multifunc: { enabled: true, steps: 5, unit: 'Temp' } },
              hue_seg_4: { icon: 'tv',         iconPos: 'right',  label: 'Cinema',  sublabel: 'Tap Toggle' },
              sat_seg_1: { icon: 'sun',        iconPos: 'top',    label: 'Dimmer',  segmentMode: 'slider', sliderMin: 15,  sliderMax: 100, sliderPitch: 2.0, sliderArrows: 'dots', luminous: true },
              sat_seg_2: { icon: 'coffee',     iconPos: 'top',    label: 'Warmth',  segmentMode: 'slider', sliderMin: 0,   sliderMax: 100, sliderPitch: 2.6, sliderArrows: 'ticks' },
              bri_bar:   { customTrack: true, icon: 'moon', iconEnd: 'sun', iconPos: 'both', label: 'Master Dim', sublabel: '5\u2192100%', segmentMode: 'slider', sliderMin: 5, sliderMax: 100, sliderPitch: 2.0, sliderArrows: 'chevron', luminous: true },
              center_w:  { icon: 'downlight',  iconPos: 'top',    label: 'Main W' },
              btn_on:    { icon: 'power',      iconPos: 'top',    label: 'ON', luminous: true },
              btn_off:   { icon: 'moon',       iconPos: 'top',    label: 'OFF' },
              btn_sdn:   { icon: 'curtains',   iconPos: 'top',    label: 'Privacy' },
              btn_m:     { icon: 'sparkles',   iconPos: 'top',    label: 'Scene' },
              btn_sup:   { icon: 'speaker',    iconPos: 'top',    label: 'Sonos',   multifunc: { enabled: true, steps: 5, unit: 'Vol' } },
              zone_0:    { icon: 'home_all',   label: 'All' },
              zone_1:    { icon: 'sofa',       label: 'Living' },
              zone_2:    { icon: 'kitchen',    label: 'Kitchen' },
              zone_3:    { icon: 'dining',     label: 'Dining' },
              zone_4:    { icon: 'bed',        label: 'Master' },
              btn_60s:   { icon: 'lock',       label: 'Away' },
              zone_5:    { icon: 'bed_single', label: 'Guest' },
              zone_6:    { icon: 'desk',       label: 'Study' },
              zone_7:    { icon: 'bath',       label: 'Bath' },
              zone_8:    { icon: 'garden',     label: 'Patio' }
            }
          }
        },
        {
          id: 'b8_whole_home_devices',
          name: '8-Room Standardised Icons + 6-Device Segmented Wheel',
          desc: 'Zones 1-8 mapped to standardised rooms; Colour Ring segmented into Fan (1-6), Blinds, Curtains, AC, Sonos & Strip',
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
          name: '8-Room Standardised Lighting (Continuous Wheel & Sliders)',
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

    // 2b. K-SERIES ROTARY / COMPACT DIALS (K6 / K6B / K1 / FUT087): Dedicated Ring-Arc + Center Pad Templates!
    if (/^k/i.test(m.id) || m.layout === 'k6' || m.kind === 'k6' || (m.zones === 1 && m.layout !== 'b0' && (!m.width_mm || m.width_mm <= 76))) {
      return [
        {
          id: 'k6_hybrid_quadrant_sliders',
          name: 'Hybrid 4-Quadrant Ring Sliders + Multi-Step (K6)',
          desc: 'Splits the K6 touch ring into 2 curved Variable Sliders (Dimmer 10→100%, Blinds 100→0%) + 2 Tap/Step pads (Fan 1-5, Cinema)',
          touch_zones: {
            hue_ring: { enabled: true, segments: 4, offset_deg: -45, zone_mask: 65535, labels: ['Dimmer','Fan','Blinds','Cinema'] },
            sat_bar:  { enabled: false, segments: 2, offset_deg: 0, zone_mask: 65535, labels: ['',''] },
            bri_bar:  { enabled: false, segments: 2, offset_deg: 0, zone_mask: 65535, labels: ['',''] },
            cct_bar:  { enabled: false, segments: 2, offset_deg: 0, zone_mask: 65535, labels: ['',''] }
          },
          facia: {
            enabled: true, theme: defTheme, fontFamily: 'geometric', fontScale: 105,
            panelTitle: 'K6 SMART DIAL', defaultPadStyle: 'keycap', showLedPinhole: true, hideLogo: true,
            luminous: { enabled: true, border: true, header: true, slots: false },
            pads: {
              hue_seg_1: { icon: 'moon',     iconEnd: 'sun',      iconPos: 'both',  label: 'Dimmer', sublabel: '10→100%', segmentMode: 'slider', sliderMin: 10, sliderMax: 100, sliderPitch: 2.0, sliderArrows: 'chevron', luminous: true },
              hue_seg_2: { icon: 'fan',      iconPos: 'left',     label: 'Fan',    sublabel: '1-5 • Hold', multifunc: { enabled: true, steps: 5, unit: 'Spd' } },
              hue_seg_3: { icon: 'blinds',   iconEnd: 'sun',      iconPos: 'both',  label: 'Blinds', sublabel: '100→0%', segmentMode: 'slider', sliderMin: 100, sliderMax: 0, sliderPitch: 2.2, sliderArrows: 'triangle', luminous: true },
              hue_seg_4: { icon: 'tv',       iconPos: 'right',    label: 'Cinema', sublabel: 'Toggle' },
              center_w:  { icon: 'power',    iconPos: 'top',      label: 'Master', sublabel: 'Tap / Hold', luminous: true },
              btn_on:    { icon: 'power',    iconPos: 'top',      label: 'ON', luminous: true }
            }
          }
        },
        {
          id: 'k6_six_device_dial',
          name: '6-Device Smart Room Ring (Fan / Blinds / AC / Sonos / Lights)',
          desc: 'Turns K6 ring into 6 dedicated room device buttons with Step-Cycle & Hold toggle',
          touch_zones: {
            hue_ring: { enabled: true, segments: 6, offset_deg: -30, zone_mask: 65535, labels: ['Lights','Fan','Blinds','AC','Sonos','Scene'] },
            sat_bar:  { enabled: false, segments: 2, offset_deg: 0, zone_mask: 65535, labels: ['',''] },
            bri_bar:  { enabled: false, segments: 2, offset_deg: 0, zone_mask: 65535, labels: ['',''] },
            cct_bar:  { enabled: false, segments: 2, offset_deg: 0, zone_mask: 65535, labels: ['',''] }
          },
          facia: {
            enabled: true, theme: defTheme, panelTitle: 'STUDIO DIAL', defaultPadStyle: 'keycap', showLedPinhole: true, hideLogo: true,
            pads: {
              hue_seg_1: { icon: 'bulb',     iconPos: 'top', label: 'Lights', multifunc: { enabled: true, steps: 4, unit: 'Bri' } },
              hue_seg_2: { icon: 'fan',      iconPos: 'top', label: 'Fan',    multifunc: { enabled: true, steps: 5, unit: 'Spd' } },
              hue_seg_3: { icon: 'blinds',   iconPos: 'top', label: 'Blinds', multifunc: { enabled: true, steps: 4, unit: 'Pos' } },
              hue_seg_4: { icon: 'ac',       iconPos: 'top', label: 'AC',     multifunc: { enabled: true, steps: 4, unit: 'Temp' } },
              hue_seg_5: { icon: 'speaker',  iconPos: 'top', label: 'Sonos',  multifunc: { enabled: true, steps: 5, unit: 'Vol' } },
              hue_seg_6: { icon: 'sparkles', iconPos: 'top', label: 'Scene' }
            }
          }
        }
      ];
    }

    // 3. STRIP / MULTI-ZONE PANELS (B1..B4, U1..U3, M4, B5): Standardised Room Rockers + Segmented Multi-Device Bars!
    const topSurf = (m.kind === 'b1' || m.kind === 'u1') ? 'bri_bar' : (m.kind === 'b2' || m.kind === 'u2') ? 'cct_bar' : 'hue_ring';
    const segPref = topSurf === 'bri_bar' ? 'bri_seg_' : topSurf === 'cct_bar' ? 'cct_seg_' : 'hue_seg_';
    return [
      {
        id: 'strip_dual_linear_sliders',
        name: 'Dual Straight Variable Sliders (Sheer 0–100% + Blockout 100–0%)',
        desc: 'Splits the straight top touch bar into two independent variable sliders (0–100% & inverted 100–0%) above 4 room rockers',
        touch_zones: {
          hue_ring: { enabled: topSurf === 'hue_ring', segments: 2, offset_deg: 0, zone_mask: 65535, labels: ['Sheer','Blockout'] },
          cct_bar:  { enabled: topSurf === 'cct_bar',  segments: 2, offset_deg: 0, zone_mask: 65535, labels: ['Sheer','Blockout'] },
          bri_bar:  { enabled: topSurf === 'bri_bar',  segments: 2, offset_deg: 0, zone_mask: 65535, labels: ['Sheer','Blockout'] },
          sat_bar:  { enabled: false, segments: 4, offset_deg: 0, zone_mask: 65535, labels: ['','','',''] }
        },
        facia: {
          enabled: true, theme: defTheme, fontFamily: 'sans', fontScale: 105,
          panelTitle: 'DUAL LINEAR SLIDERS', defaultPadStyle: 'keycap', showLedPinhole: true, hideLogo: true,
          pads: {
            [segPref + '1']: { icon: 'curtains', iconEnd: 'sun', iconPos: 'both',   label: 'Sheer',    sublabel: '0→100% Slide', segmentMode: 'slider', sliderMin: 0,   sliderMax: 100 },
            [segPref + '2']: { icon: 'moon',     iconEnd: 'blinds', iconPos: 'both', label: 'Blockout', sublabel: '100→0% Drop',  segmentMode: 'slider', sliderMin: 100, sliderMax: 0 },
            zone_0: { icon: 'home_all', label: 'All' },
            zone_1: { icon: 'sofa',     label: 'Living' },
            zone_2: { icon: 'kitchen',  label: 'Kitchen' },
            zone_3: { icon: 'bed',      label: 'Master' },
            zone_4: { icon: 'desk',     label: 'Study' }
          }
        }
      },
      {
        id: 'strip_rooms_plus_devices',
        name: 'Room Rockers + 4-Device Segmented Bar (Fan/Blinds/AC/Audio)',
        desc: 'Top touch strip becomes 4 multi-function device pads (Tap = Step 1-6, Hold = Toggle); bottom rockers use standardised Room Icons',
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

  function upsertCustomModel(cm) {
    if (!cm || !cm.id) return null;
    const bId = cm.base_model || cm.baseModel || 'B8';
    const base = FACTORY_MODELS.find(f => f.id === bId) || FACTORY_MODELS[0];
    const existingIdx = MODELS.findIndex(x => x.id === cm.id);
    if (existingIdx !== -1) MODELS.splice(existingIdx, 1);
    const entry = {
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
      sub: cm.is_draft ? `WIP Draft ${base.id} (${base.zones}Z)` : `Custom ${base.id} (${base.zones}Z)`,
      readonly: false,
      isCustom: true,
      isDraft: Boolean(cm.is_draft),
      stencilMode: cm.stencil_mode || 'full_panel',
      facia: cm.facia || null,
      touchZones: cm.touch_zones || null,
      suggestedBindings: cm.suggested_bindings || null
    };
    MODELS.unshift(entry);
    return entry;
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

  // Built-in Custom Showcase Remotes demonstrating Segmented Arc Sliders + Straight Bar Sliders
  (function seedBuiltInShowcaseRemotes() {
    const b8Presets = getSamplePresetsForModel('B8');
    const b8Hybrid = b8Presets && b8Presets[0];
    const b3Presets = getSamplePresetsForModel('B3');
    const b3Dual = b3Presets && b3Presets[0];
    const seeds = [];
    if (b8Hybrid) {
      seeds.push({
        id: 'CUST_B8_SLIDER_SHOWCASE',
        baseId: 'B8',
        name: 'B8 Showcase: Arc + Bar Variable Sliders',
        series: 'Custom Stencil Showcase',
        protocol: 'fut089',
        zones: 8,
        isCustom: true,
        isBuiltInShowcase: true,
        touchZones: b8Hybrid.touch_zones,
        facia: b8Hybrid.facia
      });
    }
    if (b3Dual) {
      seeds.push({
        id: 'CUST_B3_LINEAR_SHOWCASE',
        baseId: 'B3',
        name: 'B3 Showcase: Dual Straight Sliders (0–100% / 100–0%)',
        series: 'Custom Stencil Showcase',
        protocol: 'fut089',
        zones: 4,
        isCustom: true,
        isBuiltInShowcase: true,
        touchZones: b3Dual.touch_zones,
        facia: b3Dual.facia
      });
    }
    if (seeds.length && typeof registerCustomModels === 'function') {
      registerCustomModels(seeds);
    }
  })();

  // Auto-hydrate custom models only when served directly from the ESP32 Hub (skip HA :8123 / HB UI :8581)
  if (typeof fetch === 'function' && typeof document !== 'undefined' && typeof location !== 'undefined') {
    const isHaOrHbShell = location.port === '8123' || location.port === '8581' || /milight_remote_studio|custom_components|homebridge/i.test(location.pathname + (document.currentScript && document.currentScript.src || ''));
    if (!isHaOrHbShell) {
      const curScript = document.currentScript && document.currentScript.src ? new URL(document.currentScript.src, location.href).origin : '';
      syncCustomModelsFromHub(curScript);
    }
  }

  root.MiBoxerCatalog = {
    MODELS,
    FACTORY_MODELS,
    FACIA_ICONS,
    FACIA_THEMES,
    FACIA_FONTS,
    isCapacitiveFlatPanel,
    isSingleStickOnStencilReady,
    getStencilFitMode,
    getCutStickerSheet,
    renderCutStickerSheetSvg,
    resolveBaseModel,
    registerCustomModels,
    upsertCustomModel,
    syncCustomModelsFromHub,
    resolveBaseHardwareId,
    areModelsPhysicallyCompatible,
    getPhysicalDims,
    getPanelBlueprint,
    getSamplePresetsForModel,
    renderCapacitiveStencilSvg,
    baseRenderModelSvg: _baseRenderModelSvg,
    renderModelSvg: renderStudioSvg
  };
})(typeof window !== 'undefined' ? window : globalThis);

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

  function injectStudioStyles(contextEl) {
    const cssText = `
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
        width: 96vw; max-width: 1840px; height: 94vh; display: flex; flex-direction: column; overflow: hidden;
        box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.25);
      }
      .mlrs-topbar { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 12px; padding: 14px 20px; background: var(--mlrs-bg); border-bottom: 1px solid var(--mlrs-border); }
      .mlrs-preset-bar { display: flex; flex-wrap: wrap; align-items: center; gap: 8px; padding: 9px 20px; background: var(--mlrs-muted); border-bottom: 1px solid var(--mlrs-border); font-size: 12px; }
      .mlrs-body { display: grid; grid-template-columns: minmax(290px, 355px) minmax(0, 1fr) minmax(315px, 405px); flex: 1; min-height: 0; overflow: hidden; }
      .mlrs-modal *, .mlrs-modal *::before, .mlrs-modal *::after { box-sizing: border-box; }
      @media (max-width: 1040px) { .mlrs-body { grid-template-columns: 1fr; overflow-y: auto; } }
      .mlrs-col { padding: 14px 16px; overflow-y: auto; overflow-x: hidden; min-width: 0; border-right: 1px solid var(--mlrs-border); background: var(--mlrs-bg); }
      .mlrs-col:last-child { border-right: none; border-left: 1px solid var(--mlrs-border); }
      .mlrs-stage-wrap { display: flex; flex-direction: column; align-items: center; justify-content: center; background: var(--mlrs-muted); padding: 16px; overflow: auto; }
      
      @keyframes mlrsSpotPulse {
        0%, 100% { box-shadow: 0 0 0 2px #f59e0b, 0 0 14px rgba(245, 158, 11, 0.45); }
        50%      { box-shadow: 0 0 0 3.5px #0ea5e9, 0 0 22px rgba(14, 165, 233, 0.55); }
      }
      .mlrs-tour-focus {
        border-radius: 8px !important;
        animation: mlrsSpotPulse 1.8s ease-in-out infinite !important;
        position: relative;
        z-index: 5;
      }
      .mlrs-tour-done-badge {
        display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px;
        border-radius: 999px; font-size: 11px; font-weight: 700;
        background: #dcfce7; color: #166534; border: 1px solid #86efac;
      }
      .mlrs-tour-pending-badge {
        display: inline-flex; align-items: center; gap: 4px; padding: 2px 8px;
        border-radius: 999px; font-size: 11px; font-weight: 700;
        background: #fef3c7; color: #92400e; border: 1px solid #fcd34d;
      }
      .mlrs-stage-wrap.mlrs-night-room {
        background: radial-gradient(circle at 50% 42%, #0f172a 0%, #030712 78%) !important;
      }
      .mlrs-stage-wrap.mlrs-night-room .mlrs-stage-card {
        background: #060a13 !important;
        border-color: rgba(110, 231, 183, 0.35) !important;
        box-shadow: 0 0 38px rgba(16, 185, 129, 0.18), inset 0 0 18px rgba(16, 185, 129, 0.06) !important;
      }
      .mlrs-launcher-card {
        background: #ffffff !important; border: 1px solid #cbd5e1 !important;
        border-radius: 10px !important; padding: 9px 12px !important; margin: 0 0 10px 0 !important;
        box-shadow: 0 1px 4px rgba(15, 23, 42, 0.05) !important; color: #0f172a !important;
      }
      .mlrs-launcher-grid {
        display: grid !important; grid-template-columns: repeat(3, minmax(0, 1fr)) !important; gap: 7px !important; margin-top: 7px !important;
      }
      @media (max-width: 960px) { .mlrs-launcher-grid { grid-template-columns: repeat(2, minmax(0, 1fr)) !important; } }
      button.mlrs-wf-item, .mlrs-wf-item {
        display: flex !important; align-items: center !important; gap: 9px !important; text-align: left !important;
        background: #f8fafc !important; color: #0f172a !important; border: 1px solid #cbd5e1 !important;
        border-radius: 8px !important; padding: 7px 10px !important; cursor: pointer !important;
        font-weight: 500 !important; box-shadow: none !important; width: 100% !important;
        transition: transform 0.1s ease, border-color 0.15s ease, background 0.15s ease !important;
      }
      button.mlrs-wf-item:hover, .mlrs-wf-item:hover {
        border-color: #0284c7 !important; background: #f0f9ff !important; filter: none !important;
        box-shadow: 0 2px 6px rgba(2, 132, 199, 0.12) !important; transform: translateY(-1px) !important;
      }
      .mlrs-wf-ico {
        font-size: 15px !important; line-height: 1 !important; width: 28px !important; height: 28px !important; border-radius: 7px !important;
        background: #e0f2fe !important; border: 1px solid #bae6fd !important; display: flex !important; align-items: center !important; justify-content: center !important; flex-shrink: 0 !important;
      }
      .mlrs-lum-swatch {
        display: inline-block; width: 11px; height: 11px; border-radius: 50%;
        background: #6ee7b7; box-shadow: 0 0 8px #34d399, 0 0 14px #10b981;
      }
      .mlrs-stage-card { background: var(--mlrs-bg); border: 1px solid var(--mlrs-border); border-radius: 12px; padding: 20px 28px; display: flex; flex-direction: column; align-items: center; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
      .mlrs-footer { display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 10px; padding: 11px 20px; background: var(--mlrs-bg); border-top: 1px solid var(--mlrs-border); }
      .mlrs-btn { background: var(--mlrs-bg); color: var(--mlrs-fg); border: 1px solid var(--mlrs-border); border-radius: 6px; padding: 6px 12px; font-size: 12.5px; font-weight: 500; cursor: pointer; display: inline-flex; align-items: center; gap: 6px; }
      .mlrs-btn:hover { background: var(--mlrs-hover); }
      .mlrs-btn.primary, .mlrs-btn.active-tab { background: var(--mlrs-primary); border-color: var(--mlrs-primary); color: var(--mlrs-primary-fg); font-weight: 600; }
      .mlrs-btn.danger-outline { color: #dc2626; border-color: #fecaca; }
      .mlrs-sec-title { font-size: 12.5px; font-weight: 700; color: var(--mlrs-fg); margin-bottom: 10px; }
      .mlrs-field { margin-bottom: 10px; }
      .mlrs-field label { display: block; font-size: 11.5px; font-weight: 600; color: var(--mlrs-fg); margin-bottom: 4px; }
      .mlrs-input, .mlrs-select { width: 100%; max-width: 100%; box-sizing: border-box; background: var(--mlrs-input-bg); border: 1px solid var(--mlrs-border); color: var(--mlrs-fg); border-radius: 6px; padding: 6px 9px; font-size: 12.5px; }
      .mlrs-swatch { height: 32px; padding: 2px 4px; cursor: pointer; }
      .mlrs-icon-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 5px; }
      .mlrs-icon-cell { aspect-ratio: 1; border: 1px solid var(--mlrs-border); border-radius: 6px; background: var(--mlrs-input-bg); color: var(--mlrs-fg); display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; padding: 3px; }
      .mlrs-icon-cell:hover { background: var(--mlrs-hover); }
      .mlrs-icon-cell.sel { border: 2px solid var(--mlrs-ring); background: var(--mlrs-hover); }
      .mlrs-pill-group { display: inline-flex; background: var(--mlrs-muted); padding: 3px; border-radius: 8px; border: 1px solid var(--mlrs-border); gap: 3px; }
      .mlrs-pill-group .mlrs-btn { border: none; padding: 5px 11px; font-size: 12px; border-radius: 6px; background: transparent; }
      .mlrs-pill-group .mlrs-btn.active-tab { background: var(--mlrs-primary); color: var(--mlrs-primary-fg); }

      
      .mlrs-modal-backdrop.mlrs-backdrop-fs, .mlrs-modal-backdrop:fullscreen { padding: 0 !important; width: 100vw !important; height: 100vh !important; }
      .mlrs-modal-backdrop:fullscreen .mlrs-modal { width: 100vw !important; max-width: 100vw !important; height: 100vh !important; border-radius: 0 !important; border: none !important; }
      .mlrs-modal.mlrs-fullscreen .mlrs-body, .mlrs-modal-backdrop:fullscreen .mlrs-body { grid-template-columns: 340px 1fr 390px !important; }

      .mlrs-modal.mlrs-fullscreen { width: 100vw !important; max-width: 100vw !important; height: 100vh !important; border-radius: 0 !important; border: none !important; }
      .mlrs-peel-wrap { display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; height: 100%; flex: 1; min-height: 0; user-select: none; }
      .mlrs-peel-bar { display: flex; align-items: center; justify-content: center; gap: 8px; flex-wrap: wrap; margin-bottom: 8px; padding: 6px 10px; border-radius: 9px; border: 1px solid rgba(2,132,199,0.32); background: rgba(2,132,199,0.07); font-size: 11.5px; width: 100%; box-sizing: border-box; }
      .mlrs-peel-btn { padding: 4px 10px; border-radius: 6px; border: 1px solid #0284c7; background: #0284c7; color: #fff; font-weight: 700; font-size: 11.5px; cursor: pointer; }
      .mlrs-peel-btn.peeled { background: #0f172a; border-color: #334155; }
      .mlrs-peel-stack { position: relative; display: inline-grid; place-items: center; padding: 6px; flex: 1; min-height: 0; }
      .mlrs-peel-under, .mlrs-peel-over { grid-area: 1 / 1; display: flex; align-items: center; justify-content: center; }
      .mlrs-peel-over { position: relative; z-index: 2; transition: clip-path 0.24s cubic-bezier(.22,.9,.3,1), filter 0.2s ease; filter: drop-shadow(-3px 5px 8px rgba(15,23,42,0.28)); }
      .mlrs-peel-stack.scrubbing .mlrs-peel-over, .mlrs-peel-stack.scrubbing .mlrs-peel-flap { transition: none !important; }
      .mlrs-peel-corner-hit { position: absolute; top: 2px; right: 2px; width: 42px; height: 42px; z-index: 5; cursor: pointer; border-radius: 0 10px 0 28px; background: linear-gradient(225deg, rgba(148,163,184,0.38) 0%, rgba(255,255,255,0.88) 48%, rgba(15,23,42,0.16) 52%, transparent 56%); box-shadow: -2px 2px 5px rgba(15,23,42,0.18); }
      .mlrs-peel-flap { position: absolute; inset: 6px; z-index: 4; pointer-events: none; background: linear-gradient(225deg, rgba(241,245,249,0.97) 0%, rgba(203,213,225,0.94) 55%, rgba(148,163,184,0.88) 100%); filter: drop-shadow(-6px 7px 10px rgba(15,23,42,0.34)); transition: clip-path 0.24s cubic-bezier(.22,.9,.3,1), opacity 0.2s ease; }


      .mlrs-tour-bar {
        display: flex !important; align-items: center !important; justify-content: space-between !important; gap: 14px !important;
        flex-wrap: wrap !important; padding: 10px 14px !important; border-radius: 11px !important;
        border: 1px solid rgba(2,132,199,0.35) !important;
        background: linear-gradient(135deg, rgba(2,132,199,0.09) 0%, rgba(15,23,42,0.03) 100%) !important;
        box-shadow: inset 0 1px 0 rgba(255,255,255,0.35), 0 2px 6px rgba(15,23,42,0.05) !important;
        margin: 0 0 10px 0 !important; font-size: 12.5px !important; line-height: 1.4 !important; box-sizing: border-box !important;
      }
      .mlrs-tour-left { display: flex !important; align-items: center !important; gap: 11px !important; flex: 1 !important; min-width: 240px !important; }
      .mlrs-tour-icon { width: 34px !important; height: 34px !important; border-radius: 9px !important; background: #0284c7 !important; color: #fff !important; display: flex !important; align-items: center !important; justify-content: center !important; font-size: 16px !important; flex-shrink: 0 !important; }
      .mlrs-tour-step-badge { display: inline-flex !important; align-items: center !important; padding: 2px 8px !important; border-radius: 999px !important; background: rgba(2,132,199,0.16) !important; color: #0284c7 !important; font-weight: 800 !important; font-size: 10.5px !important; text-transform: uppercase !important; letter-spacing: 0.04em !important; margin-right: 7px !important; }
      .mlrs-tour-dots { display: inline-flex !important; gap: 4px !important; align-items: center !important; margin-left: 8px !important; vertical-align: middle !important; }
      .mlrs-tour-dot { width: 6px !important; height: 6px !important; border-radius: 999px !important; background: rgba(100,116,139,0.35) !important; }
      .mlrs-tour-dot.on { width: 16px !important; background: #0284c7 !important; }
      .mlrs-tour-nav { display: flex !important; align-items: center !important; gap: 6px !important; flex-wrap: wrap !important; }
      button.mlrs-tour-btn { padding: 5px 11px !important; border-radius: 7px !important; border: 1px solid rgba(100,116,139,0.38) !important; background: #ffffff !important; color: #0f172a !important; font-weight: 700 !important; font-size: 11.5px !important; cursor: pointer !important; }
      button.mlrs-tour-btn.demo { background: #0284c7 !important; border-color: #0284c7 !important; color: #ffffff !important; }
      button.mlrs-tour-reopen { display: inline-flex !important; align-items: center !important; gap: 6px !important; padding: 5px 12px !important; border-radius: 999px !important; border: 1px solid rgba(2,132,199,0.45) !important; background: rgba(2,132,199,0.10) !important; color: #0284c7 !important; font-weight: 700 !important; font-size: 11.5px !important; cursor: pointer !important; }

      .mlrs-box-sub { padding: 9px 10px; border-radius: 8px; background: var(--mlrs-muted); border: 1px solid var(--mlrs-border); margin-bottom: 10px; }
    `;
    if (document.head && !document.getElementById('mlrs-shared-styles')) {
      const st = document.createElement('style');
      st.id = 'mlrs-shared-styles';
      st.textContent = cssText;
      document.head.appendChild(st);
    }
    const rootNode = contextEl && typeof contextEl.getRootNode === 'function' ? contextEl.getRootNode() : null;
    if (rootNode && rootNode !== document && typeof rootNode.querySelector === 'function' && !rootNode.querySelector('#mlrs-shared-styles')) {
      const stShadow = document.createElement('style');
      stShadow.id = 'mlrs-shared-styles';
      stShadow.textContent = cssText;
      rootNode.appendChild(stShadow);
    }
  }

  // ============================================================================
  // 1. INTERACTIVE STAGE CONTROLLER (Finger Pucks, Segmented Pads & Step/Hold)
  // ============================================================================
  function mountInteractiveStage(stageEl, opts) {
    injectStudioStyles(stageEl);
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
      selectedPadKey: opts.selectedPadKey || null,
      luminousPreview: Boolean(opts.luminousPreview)
    });

    const svgEl = stageEl.querySelector('svg');
    if (!svgEl) return null;
    const vb = (svgEl.getAttribute('viewBox') || '0 0 220 310').trim().split(/[\s,]+/).map(Number);
    const vbRatio = (vb[2] > 0 && vb[3] > 0) ? (vb[2] / vb[3]) : 0.71;
    svgEl.removeAttribute('width');
    svgEl.removeAttribute('height');
    svgEl.style.height = opts.maxHeight || 'clamp(370px, 58vh, 640px)';
    svgEl.style.maxHeight = '100%';
    svgEl.style.width = 'auto';
    svgEl.style.maxWidth = '100%';
    svgEl.style.aspectRatio = `${vb[2] || 220} / ${vb[3] || 310}`;
    if (vbRatio > 0.88) {
      svgEl.style.height = opts.squareHeight || 'clamp(330px, 48vh, 520px)';
    }
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

      // Wheel vs Bar check: if width & height are roughly square (>35x35), it's a Colour Ring!
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
        if (padCfg.segmentMode === 'slider') {
          let frac = 0.5;
          const sDegAttr = el.getAttribute('data-sdeg');
          const eDegAttr = el.getAttribute('data-edeg');
          if (sDegAttr !== null && eDegAttr !== null) {
            const cxRing = Number(el.getAttribute('data-cx') || 0);
            const cyRing = Number(el.getAttribute('data-cy') || 0);
            const sDeg = Number(sDegAttr), eDeg = Number(eDegAttr);
            // polarPt uses 0 deg = 12 o'clock clockwise: ang = atan2(dx, -dy)
            let ang = Math.atan2(px - cxRing, -(py - cyRing)) * 180 / Math.PI;
            while (ang < sDeg - 15) ang += 360;
            while (ang > eDeg + 345) ang -= 360;
            frac = Math.max(0, Math.min(1, (ang - sDeg) / Math.max(1, eDeg - sDeg)));
          } else if (bb && bb.height > bb.width * 1.35) {
            // Vertical bar segment: bottom = 0 (start), top = 1 (far/max)
            frac = Math.max(0, Math.min(1, 1 - (py - bb.y) / Math.max(1, bb.height)));
          } else {
            frac = Math.max(0, Math.min(1, (px - (bb ? bb.x : 0)) / Math.max(1, bb ? bb.width : 1)));
          }
          const sMin = Number(padCfg.sliderMin ?? 0);
          const sMax = Number(padCfg.sliderMax ?? 100);
          const mappedVal = Math.round(sMin + frac * (sMax - sMin));
          const badge = `${padCfg.label || pKey}: ${mappedVal}% (${sMin}%→${sMax}%)`;
          showFingerPuck(px, py, `${mappedVal}%`, false, 'ui_btn');
          if (typeof opts.onAction === 'function') opts.onAction(baseAct, mappedVal, zNext, badge);
          return;
        }
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
  function buildPodOrderPayload(remoteName, hexId, model, facia, touchZones, activeZone) {
    const Cat = root.MiBoxerCatalog;
    const dims = Cat.getPhysicalDims(model);
    const f = facia || {};
    const preset = (Cat.FACIA_THEMES && Cat.FACIA_THEMES[f.theme]) || {};
    const pads = f.pads || {};
    const lum = Object.assign({ enabled: false, border: false, header: false, slots: false }, f.luminous || {});
    const luminousSlots = Object.entries(pads)
      .filter(([, cfg]) => Boolean(cfg && cfg.luminous))
      .map(([slotKey]) => slotKey);
    const sliderSegments = Object.entries(pads)
      .filter(([, cfg]) => Boolean(cfg && cfg.segmentMode === 'slider'))
      .map(([slotKey, cfg]) => ({
        slot: slotKey,
        label: cfg.label || slotKey,
        min_pct: Number(cfg.sliderMin ?? 0),
        max_pct: Number(cfg.sliderMax ?? 100),
        track_pitch_mm: Number(cfg.sliderPitch ?? f.sliderPitch ?? 2.2),
        track_arrows: cfg.sliderArrows || f.sliderArrows || 'chevron'
      }));

    return {
      schema: 'milight_remote_studio.pod_order.v1',
      created_at: new Date().toISOString(),
      remote_name: remoteName || model.name || model.id,
      device_id: hexId || '',
      hardware_model: model.id,
      fit_mode: Cat.getStencilFitMode ? Cat.getStencilFitMode(model) : 'single_sheet',
      dimensions_mm: {
        width_mm: dims.width_mm,
        height_mm: dims.height_mm,
        corner_radius_mm: dims.corner_radius_mm || 0
      },
      appearance: {
        theme: f.theme || 'pure_white',
        material: f.material || 'matte_vinyl_peelable',
        monochrome: Boolean(f.monochrome),
        background_color: f.bgColor || (f.colors && f.colors.bg) || preset.bg || '#ffffff',
        boundary_line_color: f.boundaryColor || (f.colors && f.colors.padStroke) || preset.padStroke || '#0f172a',
        default_font: f.fontFamily || 'sans',
        default_font_scale_pct: Number(f.fontScale || 100),
        panel_title: f.panelTitle || '',
        show_led_pinhole: f.showLedPinhole !== false,
        background_image: (f.bgImage && f.bgImage.dataUrl) ? { fit: f.bgImage.fit || 'cover', scale_pct: Number(f.bgImage.scale ?? 100), offset_x_pct: Number(f.bgImage.x ?? 0), offset_y_pct: Number(f.bgImage.y ?? 0), opacity_pct: Number(f.bgImage.opacity ?? 88), pad_alpha_pct: Number(f.bgImage.padAlpha ?? 72), name: f.bgImage.name || 'custom_artwork', data_url: f.bgImage.dataUrl } : null
      },
      luminous_glow: {
        enabled: Boolean(lum.enabled || luminousSlots.length > 0),
        pigment: 'strontium_aluminate',
        outer_boundary: Boolean(lum.enabled && lum.border),
        header_title: Boolean(lum.enabled && lum.header),
        all_slots: Boolean(lum.enabled && lum.slots),
        individual_slots: luminousSlots
      },
      slider_segments: sliderSegments,
      facia: f,
      touch_zones: touchZones || null
    };
  }

  function buildOneToOnePrintSvg(model, facia, touchZones, activeZone) {
    const Cat = root.MiBoxerCatalog;
    const dims = Cat.getPhysicalDims(model);
    const podMeta = buildPodOrderPayload(model.name || model.id, '', model, facia, touchZones, activeZone);
    const rendered = Cat.renderCapacitiveStencilSvg(model, {
      size: 'large', uid: 'print_1to1',
      facia: Object.assign({}, facia || {}, { enabled: true }),
      touchZones, activeZone: activeZone || 1, stencilMode: true
    });
    const vbMatch = rendered.match(/viewBox="([^"]+)"/);
    const vb = vbMatch ? vbMatch[1] : '0 0 210 210';
    const inner = rendered.replace(/^<svg[^>]*>/, '').replace(/<\/svg>$/, '');
    const safeJson = JSON.stringify(podMeta).replace(/]]>/g, ']]&gt;');
    return `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" width="${dims.width_mm}mm" height="${dims.height_mm}mm" viewBox="${vb}" data-model="${model.id}" data-bg-color="${podMeta.appearance.background_color}" data-boundary-color="${podMeta.appearance.boundary_line_color}" data-luminous="${podMeta.luminous_glow.enabled ? '1' : '0'}">\n<metadata><pod_order><![CDATA[${safeJson}]]></pod_order></metadata>\n${inner}\n</svg>`;
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

  const WIP_STORAGE_KEY = 'mlrs_wip_drafts_v1';

  function loadWipDrafts() {
    try {
      const raw = localStorage.getItem(WIP_STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (_) {
      return [];
    }
  }

  function saveWipDraftRecord(entry) {
    const list = loadWipDrafts().filter(d => d && d.id !== entry.id);
    list.unshift(entry);
    while (list.length > 12) list.pop();
    try {
      localStorage.setItem(WIP_STORAGE_KEY, JSON.stringify(list));
      return { ok: true, count: list.length };
    } catch (e) {
      // Quota fallback: keep latest 4 drafts
      try {
        localStorage.setItem(WIP_STORAGE_KEY, JSON.stringify(list.slice(0, 4)));
        return { ok: true, count: Math.min(4, list.length) };
      } catch (err2) {
        return { ok: false, error: String(err2) };
      }
    }
  }

  function deleteWipDraftRecord(draftId) {
    const list = loadWipDrafts().filter(d => d && d.id !== draftId);
    try { localStorage.setItem(WIP_STORAGE_KEY, JSON.stringify(list)); } catch (_) {}
    return list;
  }

  function compressImageFileToDataUrl(file, maxDim) {
    return new Promise((resolve, reject) => {
      if (!file) return reject(new Error('No file'));
      const reader = new FileReader();
      reader.onerror = () => reject(new Error('File read error'));
      reader.onload = () => {
        const rawUrl = String(reader.result || '');
        if (/^data:image\/svg/i.test(rawUrl) && rawUrl.length < 350000) {
          return resolve(rawUrl);
        }
        const img = new Image();
        img.onerror = () => resolve(rawUrl);
        img.onload = () => {
          const cap = maxDim || 880;
          let w = img.naturalWidth || img.width || 600;
          let h = img.naturalHeight || img.height || 800;
          if (w > cap || h > cap) {
            const sc = cap / Math.max(w, h);
            w = Math.max(1, Math.round(w * sc));
            h = Math.max(1, Math.round(h * sc));
          }
          const cv = document.createElement('canvas');
          cv.width = w; cv.height = h;
          const ctx = cv.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          // Preserve alpha if PNG/WebP, otherwise compact high-quality JPEG
          const outMime = /png|webp/i.test(file.type) ? 'image/webp' : 'image/jpeg';
          let outUrl = cv.toDataURL(outMime, 0.84);
          if (outUrl.length > 480000) outUrl = cv.toDataURL('image/jpeg', 0.74);
          resolve(outUrl);
        };
        img.src = rawUrl;
      };
      reader.readAsDataURL(file);
    });
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
    let luminousPreview = false;
    let step1Confirmed = false;
    let currentDraftId = opts.draftId || null;
    let refreshTourState = null;
    let lastTestReadout = 'Load a Showcase Template above or click any stencil slot on the panel to customise.';

    if (opts.initialWorkflow === 'bare_walkthrough') {
      tz = normalizeTouchZones(null);
      draft.pads = {};
      draft.panelTitle = '';
      localStorage.setItem('mlrs_tour_stencil_build_path_v5_hide', '0');
      localStorage.setItem('mlrs_tour_stencil_build_path_v5_idx', '0');
      lastTestReadout = `Guided Bare-Panel Build started on ${baseModel.id} \u2014 start with Step 1 highlighted above!`;
    } else if (opts.initialWorkflow === 'template_edit' && presets && presets[0]) {
      tz = normalizeTouchZones(JSON.parse(JSON.stringify(presets[0].touch_zones)));
      Object.assign(draft, JSON.parse(JSON.stringify(presets[0].facia)));
      selectedPadKey = Object.keys(draft.pads || {})[0] || selectedPadKey;
      step1Confirmed = true;
      localStorage.setItem('mlrs_tour_stencil_build_path_v5_hide', '0');
      localStorage.setItem('mlrs_tour_stencil_build_path_v5_idx', '2');
      lastTestReadout = `Loaded "${presets[0].name}" \u2014 click any slot to customise its behaviour, text, icons & glow!`;
    } else if (opts.initialWorkflow === 'export_pod') {
      if ((!draft.pads || !Object.keys(draft.pads).length) && presets && presets[0]) {
        tz = normalizeTouchZones(JSON.parse(JSON.stringify(presets[0].touch_zones)));
        Object.assign(draft, JSON.parse(JSON.stringify(presets[0].facia)));
      }
      lastTestReadout = `Ready for Export \u2014 use Print 1:1 Stencil Sheet, Download 1:1 SVG, or Download POD Spec JSON at the bottom-right!`;
        } else if (opts.initialWorkflow === 'resume_draft') {
      const savedList = loadWipDrafts();
      const pick = (opts.draftId && savedList.find(d => d.id === opts.draftId)) || savedList.find(d => d.baseModelId === baseModel.id) || savedList[0];
      if (pick) {
        currentDraftId = pick.id;
        customModelName = pick.name || customModelName;
        tz = normalizeTouchZones(pick.touchZones);
        Object.keys(draft).forEach(k => delete draft[k]);
        Object.assign(draft, JSON.parse(JSON.stringify(pick.facia || { enabled: true, pads: {} })));
        selectedPadKey = pick.selectedPadKey || selectedPadKey;
        step1Confirmed = true;
      }
      lastTestReadout = currentDraftId ? `Resumed WIP Draft "${customModelName}" \u2014 continue editing or click Create Custom Remote when ready!` : 'No saved WIP drafts yet \u2014 click Save WIP Draft at the bottom anytime!';
    }
    const stepState = {};
    let isFullscreen = false;
    const onFsChange = () => {
      const nativeFs = Boolean(document.fullscreenElement === backdrop);
      if (!nativeFs && isFullscreen && document.fullscreenEnabled) { isFullscreen = false; }
      backdrop.classList.toggle('mlrs-backdrop-fs', isFullscreen || nativeFs);
      const m = backdrop.querySelector('.mlrs-modal');
      if (m) m.classList.toggle('mlrs-fullscreen', isFullscreen || nativeFs);
      const fb = backdrop.querySelector('#mlrsFullBtn');
      if (fb) fb.textContent = (isFullscreen || nativeFs) ? '❐ Exit Fullscreen' : '⤢ Fullscreen';
    };
    document.addEventListener('fullscreenchange', onFsChange);

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
      if (/^(hue|sat|bri|cct)_seg_/.test(selectedPadKey)) {
        const pref = selectedPadKey.split('_')[0];
        const surfKey = pref === 'hue' ? 'hue_ring' : (pref + '_bar');
        if (!tz[surfKey] || !tz[surfKey].enabled) {
          selectedPadKey = (bp.slots && bp.slots[0] && bp.slots[0].key) || 'zone_1';
        }
      }
      const presetTheme = Cat.FACIA_THEMES[draft.theme] || Cat.FACIA_THEMES.pure_white;
      const effColors = Object.assign({}, presetTheme, draft.colors || {});
      const curPad = draft.pads[selectedPadKey] || {};
      const curMf = curPad.multifunc || { enabled: false, steps: 4, unit: 'Spd' };

      const iconEntries = Object.entries(Cat.FACIA_ICONS).filter(([k, ic]) => k === 'none' || ic.group === iconTab);

      backdrop.innerHTML = `
        <div class="mlrs-modal ${isFullscreen ? 'mlrs-fullscreen' : ''}" onclick="event.stopPropagation()">
          <div class="mlrs-topbar">
            <div>
              <div style="font-size:16px;font-weight:700">Capacitive Panel Facia &amp; Stencil Studio — ${remoteName} (${model.id})</div>
              <div style="font-size:12px;color:var(--mlrs-muted-fg);margin-top:2px">${dims.width_mm} × ${dims.height_mm} mm Glass Stencil • Segment sliders into multi-function device pads &amp; standardised room icons</div>
            </div>
            <div style="display:flex;gap:10px;align-items:center">
              <div class="mlrs-pill-group" id="mlrsTourStepModeBar">
                <button type="button" class="mlrs-btn ${mode === 'edit' ? 'active-tab' : ''}" id="mlrsModeEdit">1. Design Stencil</button>
                <button type="button" class="mlrs-btn ${mode === 'test' ? 'active-tab' : ''}" id="mlrsModeTest">2. Interactive Test (Tap / Scrub)</button>
              </div>
              <button type="button" class="mlrs-btn ${luminousPreview ? 'active-tab' : ''}" id="mlrsLumPreviewBtn" title="Simulate a dark room at night to preview Strontium Aluminate glow-in-the-dark ink!">
                <span class="mlrs-lum-swatch"></span> ${luminousPreview ? '☀️ Exit Dark Room' : '🌙 Dark-Room Glow'}
              </button>
              ${luminousPreview ? `<button type="button" class="mlrs-btn" id="mlrsTopGlowAllBtn" style="border-color:#10b981;color:#059669;font-weight:700" title="Turn on Luminous Glow for every button, ring &amp; slider at once">✨ Glow All</button>` : ''}
              ${opts.onOpenGestures ? `<button type="button" class="mlrs-btn" id="mlrsOpenGestBtn">🎛️ Gestures &amp; Segments</button>` : ''}
              <button type="button" class="mlrs-btn ${isFullscreen ? 'active-tab' : ''}" id="mlrsFullBtn">${isFullscreen ? '❐ Exit Fullscreen' : '⤢ Fullscreen'}</button>
              <button type="button" class="mlrs-btn" id="mlrsCloseBtn">✕ Close</button>
            </div>
          </div>

          <div class="mlrs-preset-bar" id="mlrsTourStepIdentity" style="justify-content:space-between">
            <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap">
              <span style="padding:3px 8px;border-radius:5px;background:var(--mlrs-bg);border:1px solid var(--mlrs-border);font-weight:700">
                ${isEditingExistingCustom ? `Editing Custom Type: ${rawModel.id}` : `Base Hardware: ${baseModel.id} (Read-Only)`}
              </span>
              <label style="font-weight:600;margin:0">Custom Remote Name:</label>
              <input type="text" class="mlrs-input" id="mlrsCustomModelName" style="width:230px;padding:4px 8px" value="${customModelName.replace(/"/g, '&quot;')}" placeholder="e.g. Master Suite B0"/>
              ${opts.hexId ? `<label style="display:flex;align-items:center;gap:5px;margin-left:6px;cursor:pointer;font-weight:500"><input type="checkbox" id="mlrsBindNowChk" ${bindCurrentRemote ? 'checked' : ''}/> Assign to ${hexId} now</label>` : ''}
            </div>
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap">
              ${(() => {
                const allWips = loadWipDrafts();
                const matchingWips = allWips.filter(d => !d.baseModelId || d.baseModelId === baseModel.id);
                if (!matchingWips.length) return '';
                return `<span style="display:inline-flex;align-items:center;gap:4px;background:rgba(2,132,199,0.09);border:1px solid rgba(2,132,199,0.35);padding:2px 6px;border-radius:6px">
                  <select class="mlrs-select" id="mlrsResumeWipSel" style="width:auto;max-width:205px;padding:2px 6px;font-size:11.5px;font-weight:600">
                    <option value="">📂 WIP Drafts (${matchingWips.length})…</option>
                    ${matchingWips.map(d => `<option value="${d.id}" ${currentDraftId === d.id ? 'selected' : ''}>📝 ${d.name} (${d.savedAtShort || 'saved'})</option>`).join('')}
                  </select>
                  ${currentDraftId ? `<button type="button" class="mlrs-btn danger-outline" id="mlrsDelWipBtn" style="padding:2px 6px;font-size:11px" title="Delete this WIP draft">✕</button>` : ''}
                </span>`;
              })()}
              <button type="button" class="mlrs-btn" id="mlrsResetBareBtn" title="Reset to a bare factory panel so you can build from scratch">🧼 Bare Panel</button><span style="font-weight:600;color:var(--mlrs-muted-fg)">Templates:</span>
              ${presets.map((pr, idx) => `<button type="button" class="mlrs-btn" data-preset-idx="${idx}" title="${pr.desc}">✨ ${pr.name.split(' (')[0]}</button>`).join('')}
            </div>
          </div>

          <div id="mlrsStudioTourMount" style="padding:8px 20px 0;background:var(--mlrs-bg)"></div>
          <div class="mlrs-body">
            <!-- LEFT: Touch Bar/Ring Segmentation + Surface Theme -->
            <div class="mlrs-col">
              <div id="mlrsTourStepSplit">${panelSurfaces.length ? `
                <div class="mlrs-sec-title">1. Segment Wheels &amp; Bars (Buttons or Sliders)</div>
                <div style="background:var(--mlrs-muted);border:1px solid var(--mlrs-border);border-left:3px solid var(--mlrs-primary);border-radius:6px;padding:7px 9px;margin-bottom:9px;font-size:11px;line-height:1.42;color:var(--mlrs-fg)">
                  <b>💡 Segmented Slider Pro-Tips:</b> Any slice on a <b>360° Ring</b> or <b>Straight Bar</b> can act independently as a <b>Tap/Hold Button</b> <i>or</i> a <b>Variable Slider</b> with custom <b>X% → Y%</b> endpoints (e.g. <code>15–80%</code> night-safe dimmer, <code>100–0%</code> inverted blind drop, or two half-bars for Sheer &amp; Blockout).
                </div>
                <div class="mlrs-box-sub">
                  ${panelSurfaces.map(ps => {
                    const sc = tz[ps.surf];
                    const maxS = ps.surf === 'hue_ring' ? 8 : 5;
                    const minS = ps.surf === 'hue_ring' ? 3 : 2;
                    const friendly = ps.surf === 'hue_ring' ? (ps.type === 'ring' ? 'Colour Ring' : 'Top Colour Strip') : ps.surf === 'cct_bar' ? 'CCT Strip' : ps.surf === 'sat_bar' ? 'Left Touch Bar' : 'Dimmer Bar';
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
              ` : ''}</div>

              <div class="mlrs-sec-title" style="margin-top:14px">2. Surface Theme &amp; Print Palette</div>
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
              <div class="mlrs-field" style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
                <div>
                  <label>Background Colour</label>
                  <input type="color" class="mlrs-input" id="mlrsBgColor" style="height:32px;padding:2px" value="${draft.bgColor || '#111827'}"/>
                </div>
                <div>
                  <label>Boundary Line Colour</label>
                  <input type="color" class="mlrs-input" id="mlrsBoundaryColor" style="height:32px;padding:2px" value="${draft.boundaryColor || '#94a3b8'}"/>
                </div>
              </div>
              <div class="mlrs-box-sub" style="margin-bottom:10px;border-left:3px solid #0284c7">
                <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:5px">
                  <label style="font-size:12px;font-weight:700;margin:0">🖼️ Custom Background Graphic</label>
                  <div style="display:flex;gap:4px">
                    <input type="file" id="mlrsBgImgFile" accept="image/*" style="display:none"/>
                    <button type="button" class="mlrs-btn" id="mlrsBgImgPickBtn" style="padding:2px 8px;font-size:11px;font-weight:600">${(draft.bgImage && draft.bgImage.dataUrl) ? '🔄 Change' : '+ Upload Image'}</button>
                    ${(draft.bgImage && draft.bgImage.dataUrl) ? `<button type="button" class="mlrs-btn danger-outline" id="mlrsBgImgClearBtn" style="padding:2px 6px;font-size:11px" title="Remove background graphic">✕</button>` : ''}
                  </div>
                </div>
                ${(draft.bgImage && draft.bgImage.dataUrl) ? `
                  <div style="font-size:10.5px;color:var(--mlrs-muted-fg);margin-bottom:6px">Artwork: <b>${(draft.bgImage.name || 'Custom Graphic').replace(/[<>&"]/g, '')}</b> — align button overlays onto your graphic:</div>
                  <div style="display:grid;grid-template-columns:1.1fr 0.9fr;gap:6px;margin-bottom:6px">
                    <div>
                      <label style="font-size:10.5px;font-weight:600">Fit Mode</label>
                      <select class="mlrs-select" id="mlrsBgImgFit" style="padding:3px 6px;font-size:11px">
                        <option value="cover" ${(draft.bgImage.fit || 'cover') === 'cover' ? 'selected' : ''}>Cover (Fill Glass)</option>
                        <option value="contain" ${draft.bgImage.fit === 'contain' ? 'selected' : ''}>Contain (Whole Image)</option>
                        <option value="stretch" ${draft.bgImage.fit === 'stretch' ? 'selected' : ''}>Stretch 1:1</option>
                      </select>
                    </div>
                    <div>
                      <label style="font-size:10.5px;font-weight:600">Zoom (${draft.bgImage.scale ?? 100}%)</label>
                      <input type="range" min="40" max="250" step="2" id="mlrsBgImgScale" value="${draft.bgImage.scale ?? 100}" style="width:100%;accent-color:#0284c7"/>
                    </div>
                  </div>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-bottom:6px">
                    <div>
                      <label style="font-size:10.5px;font-weight:600">Pan X (${draft.bgImage.x ?? 0}%)</label>
                      <input type="range" min="-60" max="60" step="1" id="mlrsBgImgX" value="${draft.bgImage.x ?? 0}" style="width:100%;accent-color:#0284c7"/>
                    </div>
                    <div>
                      <label style="font-size:10.5px;font-weight:600">Pan Y (${draft.bgImage.y ?? 0}%)</label>
                      <input type="range" min="-60" max="60" step="1" id="mlrsBgImgY" value="${draft.bgImage.y ?? 0}" style="width:100%;accent-color:#0284c7"/>
                    </div>
                  </div>
                  <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
                    <div>
                      <label style="font-size:10.5px;font-weight:600" title="Opacity of the background artwork">Image Opacity (${draft.bgImage.opacity ?? 88}%)</label>
                      <input type="range" min="10" max="100" step="2" id="mlrsBgImgOp" value="${draft.bgImage.opacity ?? 88}" style="width:100%;accent-color:#0284c7"/>
                    </div>
                    <div>
                      <label style="font-size:10.5px;font-weight:600" title="0% = transparent button outlines over photo; 100% = solid keycaps">Button Backing (${draft.bgImage.padAlpha ?? 72}%)</label>
                      <input type="range" min="0" max="100" step="4" id="mlrsBgImgPadAlpha" value="${draft.bgImage.padAlpha ?? 72}" style="width:100%;accent-color:#0284c7"/>
                    </div>
                  </div>
                ` : `<div style="font-size:10.5px;color:var(--mlrs-muted-fg);line-height:1.35">Upload any room photo, floorplan, wood/marble texture, or custom artwork and fit your translucent button overlays right onto it.</div>`}
              </div>
              <div class="mlrs-field">
                <label>Panel Header Title</label>
                <input type="text" class="mlrs-input" id="mlrsPanelTitle" placeholder="e.g. MASTER SUITE" value="${draft.panelTitle || ''}"/>
              </div>
              <div class="mlrs-field" style="display:grid;grid-template-columns:1.35fr 0.85fr;gap:8px">
                <div>
                  <label>Default Stencil Font</label>
                  <select class="mlrs-select" id="mlrsPanelFont">
                    ${Object.entries(Cat.FACIA_FONTS || { sans: { name: 'Clean Sans' } }).map(([fk, fv]) => `<option value="${fk}" ${(draft.fontFamily || 'sans') === fk ? 'selected' : ''}>${fv.name}</option>`).join('')}
                  </select>
                </div>
                <div>
                  <label>Font Size (%)</label>
                  <input type="number" min="65" max="145" step="5" class="mlrs-input" id="mlrsPanelFontScale" value="${draft.fontScale || 100}"/>
                </div>
              </div>
              <div class="mlrs-box-sub" id="mlrsTourStepLuminous" style="margin-bottom:8px;border-left:3px solid #10b981">
                <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:5px">
                  <label style="display:flex;align-items:center;gap:6px;font-size:12px;font-weight:700;cursor:pointer;margin:0">
                    <input type="checkbox" id="mlrsLumMaster" ${(draft.luminous && draft.luminous.enabled) ? 'checked' : ''}/> <span class="mlrs-lum-swatch"></span> Luminous Glow Ink (POD)
                  </label>
                  <button type="button" class="mlrs-btn ${luminousPreview ? 'active-tab' : ''}" id="mlrsLumCardPreviewBtn" style="padding:2px 7px;font-size:10.5px">${luminousPreview ? '☀️ Day View' : '🌙 Test in Dark'}</button>
                </div>
                <div style="font-size:10.5px;color:var(--mlrs-muted-fg);margin-bottom:6px;line-height:1.35">Strontium Aluminate pigment looks subtle off-white by day and emits soft <b>aqua-green glow</b> in total darkness:</div>
                <div style="display:flex;gap:5px;margin-bottom:6px">
                  <button type="button" class="mlrs-btn" id="mlrsGlowAllBtn" style="flex:1;justify-content:center;padding:3px 6px;font-size:11px;border-color:#10b981;color:#059669;font-weight:700">✨ Glow Everything</button>
                  <button type="button" class="mlrs-btn" id="mlrsGlowNoneBtn" style="padding:3px 8px;font-size:11px">✕ Clear Glow</button>
                </div>
                <div style="display:flex;flex-wrap:wrap;gap:10px;font-size:11px">
                  <label style="display:flex;align-items:center;gap:4px;cursor:pointer"><input type="checkbox" id="mlrsLumBorder" ${(draft.luminous && draft.luminous.border) ? 'checked' : ''}/> Outer Boundary</label>
                  <label style="display:flex;align-items:center;gap:4px;cursor:pointer"><input type="checkbox" id="mlrsLumHeader" ${(draft.luminous && draft.luminous.header) ? 'checked' : ''}/> Header / Title</label>
                  <label style="display:flex;align-items:center;gap:4px;cursor:pointer"><input type="checkbox" id="mlrsLumSlots" ${(draft.luminous && draft.luminous.slots) ? 'checked' : ''}/> All Buttons, Wheel &amp; Sliders</label>
                </div>
              </div>
              <div class="mlrs-field" style="display:flex;flex-direction:column;gap:5px">
                <label style="display:flex;align-items:center;gap:6px;font-weight:500;cursor:pointer"><input type="checkbox" id="mlrsMonoChk" ${draft.monochrome ? 'checked' : ''}/> Pure Monochrome / B&amp;W Ink</label>
                <label style="display:flex;align-items:center;gap:6px;font-weight:500;cursor:pointer"><input type="checkbox" id="mlrsLedHole" ${draft.showLedPinhole ? 'checked' : ''}/> Show Status LED Pinhole</label>
              </div>
            </div>

            <!-- CENTER: Accurate 1:1 Capacitive Stencil Canvas -->
            <div class="mlrs-stage-wrap ${luminousPreview ? 'mlrs-night-room' : ''}">
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

            <!-- RIGHT: Selected Slot Inspector + Standardised Room & Device Icons -->
            <div class="mlrs-col">
              <div class="mlrs-sec-title" style="margin-bottom:6px">3. Selected Slot: <code style="padding:2px 6px;border-radius:4px;background:var(--mlrs-muted);border:1px solid var(--mlrs-border)">${selectedPadKey}</code></div>
              ${(() => {
                const surfMap = { hue_ring: 'hue_ring', hue: 'hue_ring', sat_bar: 'sat_bar', saturation: 'sat_bar', bri_bar: 'bri_bar', brightness: 'bri_bar', cct_bar: 'cct_bar', kelvin: 'cct_bar' };
                const targetSurf = surfMap[selectedPadKey];
                if (targetSurf && tz[targetSurf] && !tz[targetSurf].enabled) {
                  return `<div class="mlrs-box-sub" style="margin-bottom:10px;border-left:3px solid var(--mlrs-primary)">
                    <div style="font-size:11.5px;font-weight:700;margin-bottom:4px">Continuous Touch Surface Selected</div>
                    <div style="font-size:11px;color:var(--mlrs-muted-fg);margin-bottom:7px">Split this surface into 2–8 discrete buttons or custom <b>X% → Y% variable sliders</b>:</div>
                    <div style="display:flex;gap:6px;flex-wrap:wrap">
                      <button type="button" class="mlrs-btn primary" id="mlrsQuickSplitSlider" data-surf="${targetSurf}">⚡ Split as Variable Sliders</button>
                      <button type="button" class="mlrs-btn" id="mlrsQuickSplitBtn" data-surf="${targetSurf}">Split as Tap/Hold Buttons</button>
                    </div>
                  </div>`;
                }
                return '';
              })()}

              ${(() => {
                const isSegSlot = /^(hue|bri|cct|sat)_seg_\d+$/.test(selectedPadKey);
                const slotDef = bp.slots.find(sl => sl.key === selectedPadKey);
                const isUnsplitBar = Boolean(slotDef && (slotDef.type === 'vbar' || slotDef.type === 'hbar') && (!slotDef.surf || !tz[slotDef.surf] || !tz[slotDef.surf].enabled));
                const supportsSlider = isSegSlot || isUnsplitBar;
                const effMode = isUnsplitBar
                  ? (curPad.segmentMode || 'slider')
                  : ((isSegSlot && curPad.segmentMode === 'slider') ? 'slider' : (curMf.enabled ? 'multistep' : 'button'));
                return `
                <div class="mlrs-box-sub" id="mlrsTourStepBehaviour" style="margin-bottom:10px">
                  <label style="display:block;font-size:11.5px;font-weight:700;margin-bottom:6px">Slot Function &amp; Touch Behaviour</label>
                  <div style="display:grid;grid-template-columns:${supportsSlider ? '1fr 1fr 1fr' : '1fr 1fr'};gap:5px;margin-bottom:7px">
                    <button type="button" class="mlrs-btn ${effMode === 'button' ? 'active-tab' : ''}" style="justify-content:center;padding:5px 6px;font-size:11.5px" data-slot-mode="button">🔘 Tap / Toggle</button>
                    <button type="button" class="mlrs-btn ${effMode === 'multistep' ? 'active-tab' : ''}" style="justify-content:center;padding:5px 6px;font-size:11.5px" data-slot-mode="multistep">🔢 Step Cycle</button>
                    ${supportsSlider ? `<button type="button" class="mlrs-btn ${effMode === 'slider' ? 'active-tab' : ''}" style="justify-content:center;padding:5px 6px;font-size:11.5px" data-slot-mode="slider">🎚️ ${isUnsplitBar ? 'Slider &amp; Arrows' : 'X–Y% Slider'}</button>` : ''}
                  </div>
                  ${effMode === 'button' ? `
                    <div style="font-size:11px;color:var(--mlrs-muted-fg);line-height:1.38">Standard button pad (<b>1× Tap</b>, <b>2× Double</b>, <b>Hold</b>). Save stencil below to bind any HA/Homebridge entity in the Visual Mapper.</div>
                  ` : ''}
                  ${effMode === 'multistep' ? `
                    <div style="font-size:11px;color:var(--mlrs-muted-fg);margin-bottom:6px">Short tap steps <b>1 → N</b> (e.g. Fan Speed / Blind Pos); <b>Long Hold</b> toggles OFF.</div>
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:7px">
                      <div><label style="font-size:11px">Cycle Steps (2–8)</label><input type="number" min="2" max="8" class="mlrs-input" id="mlrsMfSteps" value="${curMf.steps || 5}"/></div>
                      <div><label style="font-size:11px">Step Unit</label><input type="text" class="mlrs-input" id="mlrsMfUnit" placeholder="Spd / Pos / Temp" value="${curMf.unit || 'Spd'}"/></div>
                    </div>
                  ` : ''}
                  ${effMode === 'slider' ? `
                    <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:2px">
                      <div>
                        <label style="font-size:11px">Left / Start End (%)</label>
                        <input type="number" min="0" max="100" class="mlrs-input" id="mlrsSegMin" value="${curPad.sliderMin ?? 0}"/>
                      </div>
                      <div>
                        <label style="font-size:11px">Right / Far End (%)</label>
                        <input type="number" min="0" max="100" class="mlrs-input" id="mlrsSegMax" value="${curPad.sliderMax ?? 100}"/>
                      </div>
                    </div>
                    <div style="display:grid;grid-template-columns:0.88fr 1.12fr;gap:8px;margin-top:7px">
                      <div>
                        <label style="font-size:11px" title="0 = Solid line, 1.2 = Fine dots, 2.2 = Standard, 3.8 = Wide dash">Dot Pitch (mm)</label>
                        <input type="number" min="0" max="8" step="0.2" class="mlrs-input" id="mlrsSegPitch" value="${curPad.sliderPitch ?? draft.sliderPitch ?? 2.2}"/>
                      </div>
                      <div>
                        <label style="font-size:11px">Track End Arrows</label>
                        <select class="mlrs-select" id="mlrsSegArrows">
                          ${(() => {
                            const ar = curPad.sliderArrows || draft.sliderArrows || 'chevron';
                            return `
                              <option value="chevron" ${ar === 'chevron' ? 'selected' : ''}>‹ ⋯⋯ › Open Chevrons</option>
                              <option value="triangle" ${ar === 'triangle' ? 'selected' : ''}>◄ ⋯⋯ ► Solid Arrows</option>
                              <option value="dots" ${ar === 'dots' ? 'selected' : ''}>• ⋯⋯ ● Min/Max Dots</option>
                              <option value="ticks" ${ar === 'ticks' ? 'selected' : ''}>| ⋯⋯ | Scale End Ticks</option>
                              <option value="none" ${ar === 'none' ? 'selected' : ''}>⋯⋯⋯ Dots Only (No Caps)</option>
                              <option value="factory" ${ar === 'factory' ? 'selected' : ''}>🎨 Factory Gradient Bar</option>
                            `;
                          })()}
                        </select>
                      </div>
                    </div>
                    <div style="font-size:10.5px;color:var(--mlrs-muted-fg);margin-top:5px">Use <code>100 → 0</code> to invert (e.g. Blinds) or <code>15 → 85</code> to cap brightness.</div>
                  ` : ''}
                </div>`;
              })()}

              <div id="mlrsTourStepTypography">
              <div class="mlrs-field" style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
                <div>
                  <label>Main Label (Line 1)</label>
                  <input type="text" class="mlrs-input" id="mlrsPadLabel" placeholder="e.g. Blinds, Living" value="${curPad.label !== undefined ? curPad.label : ''}"/>
                </div>
                <div>
                  <label>Sub-Label (Line 2)</label>
                  <input type="text" class="mlrs-input" id="mlrsPadSub" placeholder="Auto (X→Y% / Hold) or custom" value="${curPad.sublabel !== undefined ? curPad.sublabel : ''}"/>
                </div>
              </div>

              <div class="mlrs-field" style="display:grid;grid-template-columns:1.2fr 0.95fr 0.65fr;gap:6px">
                <div>
                  <label title="Place icon beside text (Left/Right/Both Ends) so Main + Sub text stay centered!">Icon Placement</label>
                  <select class="mlrs-select" id="mlrsPadIconPos">
                    ${(() => {
                      const isVBarSel = Boolean((bp.slots.find(sl => sl.key === selectedPadKey) || {}).type === 'vbar'); const defPos = isVBarSel ? 'both' : (/^hue_seg_/.test(selectedPadKey) ? 'left' : 'top');
                      const pos = curPad.iconPos || defPos;
                      return `
                        <option value="left" ${pos === 'left' ? 'selected' : ''}>⬅️ Left of Text</option>
                        <option value="right" ${pos === 'right' ? 'selected' : ''}>➡️ Right of Text</option>
                        <option value="both" ${pos === 'both' ? 'selected' : ''}>↔️ Dual (Left &amp; Right Ends)</option>
                        <option value="top" ${pos === 'top' ? 'selected' : ''}>⬆️ Above Text</option>
                        <option value="bottom" ${pos === 'bottom' ? 'selected' : ''}>⬇️ Below Text</option>
                        <option value="none" ${pos === 'none' ? 'selected' : ''}>🔤 Text Only (No Icon)</option>
                      `;
                    })()}
                  </select>
                </div>
                <div>
                  <label>Slot Font</label>
                  <select class="mlrs-select" id="mlrsPadFont">
                    <option value="" ${!curPad.fontFamily ? 'selected' : ''}>Panel Default</option>
                    ${Object.entries(Cat.FACIA_FONTS || {}).map(([fk, fv]) => `<option value="${fk}" ${curPad.fontFamily === fk ? 'selected' : ''}>${fv.name.split(' (')[0]}</option>`).join('')}
                  </select>
                </div>
                <div>
                  <label>Size %</label>
                  <input type="number" min="65" max="145" step="5" class="mlrs-input" id="mlrsPadFontScale" placeholder="${draft.fontScale || 100}" value="${curPad.fontScale || ''}"/>
                </div>
              </div>

              ${((curPad.iconPos || ((bp.slots.find(sl => sl.key === selectedPadKey) || {}).type === 'vbar' ? 'both' : '')) === 'both') ? `
              <div class="mlrs-field">
                <label>Right / Far-End Secondary Icon (Dual Mode)</label>
                <select class="mlrs-select" id="mlrsPadIconEnd">
                  ${Object.entries(Cat.FACIA_ICONS || {}).map(([ik, iv]) => `<option value="${ik}" ${(curPad.iconEnd || curPad.icon || 'sun') === ik ? 'selected' : ''}>${iv.name || ik}</option>`).join('')}
                </select>
              </div>` : ''}
              </div>

              <div class="mlrs-field" style="display:grid;grid-template-columns:1.15fr 1fr;gap:8px;align-items:end">
                <div>
                  <label>Slot Visibility / Style</label>
                  <select class="mlrs-select" id="mlrsPadStyle">
                    <option value="" ${!curPad.style ? 'selected' : ''}>Use Panel Default (${draft.defaultPadStyle})</option>
                    <option value="keycap" ${curPad.style === 'keycap' ? 'selected' : ''}>Filled Keycap</option>
                    <option value="outline" ${curPad.style === 'outline' ? 'selected' : ''}>Crisp Outline</option>
                    <option value="minimal" ${curPad.style === 'minimal' ? 'selected' : ''}>Icon + Label Only</option>
                    <option value="blank" ${curPad.style === 'blank' ? 'selected' : ''}>Mask / Blank Unused Slot</option>
                  </select>
                </div>
                <label style="display:flex;align-items:center;gap:6px;font-weight:600;cursor:pointer;padding-bottom:7px">
                  <input type="checkbox" id="mlrsPadLuminous" ${(curPad.luminous || (draft.luminous && draft.luminous.enabled && draft.luminous.slots)) ? 'checked' : ''}/> Glow Slot (POD)
                </label>
              </div>

              <div class="mlrs-field">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
                  <label style="margin:0">Standardised Icons</label>
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

          <div class="mlrs-footer ${opts.initialWorkflow === 'export_pod' ? 'mlrs-tour-focus' : ''}">
            <div style="display:flex;gap:8px;align-items:center">
              ${isEditingExistingCustom ? `<button type="button" class="mlrs-btn danger-outline" id="mlrsDeleteCustomBtn">Delete Custom Remote (${rawModel.id})</button>` : `<span style="font-size:12px;color:var(--mlrs-muted-fg)">Factory ${baseModel.id} is read-only — saving creates a reusable Custom Remote type.</span>`}
            </div>
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap">
              <button type="button" class="mlrs-btn" id="mlrsPrintBtn">Print 1:1 Stencil Sheet</button>
              <button type="button" class="mlrs-btn" id="mlrsDlSvgBtn">Download 1:1 SVG</button>
              <button type="button" class="mlrs-btn" id="mlrsDlPodBtn">Download POD Spec JSON</button>
              ${isEditingExistingCustom ? `<button type="button" class="mlrs-btn" id="mlrsSaveCopyBtn">Save as New Copy</button>` : ''}
              <button type="button" class="mlrs-btn" id="mlrsSaveWipBtn" style="border-color:#0284c7;color:#0284c7;font-weight:700" title="Save your work-in-progress draft so you can close and come back later without overwriting live remotes">📝 Save WIP Draft</button>
              <button type="button" class="mlrs-btn" id="mlrsCancelBtn">Cancel</button>
              <button type="button" class="mlrs-btn primary" id="mlrsDeployBtn">${isEditingExistingCustom ? 'Update Custom Remote' : '+ Create Custom Remote'}</button>
            </div>
          </div>
        </div>
      `;

      const stageBox = backdrop.querySelector('#mlrsCanvasStage');
      const refreshStageOnly = () => {
        mountInteractiveStage(stageBox, {
          model, uid: 'facia_editor_svg', maxHeight: isFullscreen ? 'min(78vh, 820px)' : 'min(66vh, 590px)',
          squareHeight: isFullscreen ? 'min(70vh, 720px)' : 'min(56vh, 500px)',
          facia: draft, touchZones: tz, calibration: cal, activeZone,
          editMode: mode === 'edit', selectedPadKey: mode === 'edit' ? selectedPadKey : null,
          luminousPreview, stepState,
          onSelectPad: (pk) => { selectedPadKey = pk; renderModal(); },
          onZoneChange: (z) => { activeZone = z; },
          onAction: (act, val, z, customMsg) => {
            lastTestReadout = customMsg ? `🟢 ${customMsg}  →  Hub TX (${act}=${val}, Z${z})` : `🟠 TX → Zone ${z} • ${act}(${val})`;
            const b = backdrop.querySelector('#mlrsTestBanner');
            if (b) b.textContent = lastTestReadout;
            if (typeof opts.onTestAction === 'function') opts.onTestAction(act, val, z);
          }
        });
        const b = backdrop.querySelector('#mlrsTestBanner');
        if (b) b.textContent = lastTestReadout;
        if (typeof refreshTourState === 'function') refreshTourState();
      };
      refreshStageOnly();

      // Mode & Close buttons
      backdrop.querySelector('#mlrsModeEdit').onclick = () => { mode = 'edit'; renderModal(); };
      backdrop.querySelector('#mlrsModeTest').onclick = () => { mode = 'test'; lastTestReadout = 'Tap any multi-function device button to cycle steps (1→6), or Hold 0.6s to toggle ON/OFF!'; renderModal(); };
      backdrop.querySelector('#mlrsCloseBtn').onclick = () => backdrop.remove();
      const cleanClose = () => {
        document.removeEventListener('fullscreenchange', onFsChange);
        if (document.fullscreenElement === backdrop && document.exitFullscreen) {
          document.exitFullscreen().catch(() => {});
        }
        backdrop.remove();
      };
      backdrop.querySelector('#mlrsCloseBtn').onclick = cleanClose;
      backdrop.querySelector('#mlrsCancelBtn').onclick = cleanClose;

      const fb = backdrop.querySelector('#mlrsFullBtn');
      if (fb) {
        fb.onclick = async () => {
          const currentlyFs = isFullscreen || (document.fullscreenElement === backdrop);
          if (!currentlyFs) {
            isFullscreen = true;
            backdrop.classList.add('mlrs-backdrop-fs');
            if (backdrop.requestFullscreen) {
              try { await backdrop.requestFullscreen(); } catch (_) {}
            }
          } else {
            isFullscreen = false;
            backdrop.classList.remove('mlrs-backdrop-fs');
            if (document.fullscreenElement && document.exitFullscreen) {
              try { await document.exitFullscreen(); } catch (_) {}
            }
          }
          renderModal();
        };
      }
      const gb = backdrop.querySelector('#mlrsOpenGestBtn');
      if (gb && typeof opts.onOpenGestures === 'function') {
        gb.onclick = () => { backdrop.remove(); opts.onOpenGestures(); };
      }
      const tourBox = backdrop.querySelector('#mlrsStudioTourMount');
      if (tourBox) {
        const hasSegSurfaces = panelSurfaces.length > 0;
        const hasBothRingAndBar = panelSurfaces.some(p => p.type === 'ring') && panelSurfaces.some(p => p.type !== 'ring');
        const surfFriendlyList = panelSurfaces.map(ps =>
          ps.surf === 'hue_ring' ? (ps.type === 'ring' ? 'Colour Ring' : 'Top Colour Strip')
          : ps.surf === 'cct_bar' ? 'CCT Strip'
          : ps.surf === 'sat_bar' ? 'Left Touch Bar' : 'Dimmer Bar'
        );
        const primarySurfLabel = surfFriendlyList[0] || 'Button Pad';

        const tourCtrl = mountShowcaseTour(tourBox, {
          tourId: 'stencil_build_path_v5',
          scopeEl: backdrop,
          steps: [
            {
              title: `Step 1 (${baseModel.id}) \u2014 Name Your Custom Stencil & Pick Starting Point`,
              hintShort: 'Edit Custom Remote Name above or click Start Bare & Next',
              targetSelector: '#mlrsTourStepIdentity',
              isComplete: () => step1Confirmed,
              body: `You are editing <b>${baseModel.id}</b> (${surfFriendlyList.length ? 'supports splitting: <b>' + surfFriendlyList.join(' + ') + '</b>' : 'discrete button pads'}). ` +
                    (!hasBothRingAndBar ? `<i>Tip: Want to test <b>both</b> a 360\u00b0 Arc Slider and a Straight Bar Slider together? Close &amp; pick <b>B8</b> or <b>B0</b>, or <a href="#" id="mlrsSwitchToB8Link" style="color:var(--mlrs-primary);font-weight:700;text-decoration:underline">click here to switch this session to B8 Showcase</a>!</i> ` : '') +
                    `Otherwise type a <b>Custom Remote Name</b> above (keep <b>Assign to ${hexId}</b> ticked) or click <b>\u2705 Start Bare &amp; Next \u25B6</b>.`,
              actionLabel: '\u2705 Start Bare & Go to Step 2 \u25B6',
              onAction: () => {
                step1Confirmed = true;
                tz = normalizeTouchZones(null);
                draft.pads = {};
                selectedPadKey = (bp.slots && bp.slots[0] && bp.slots[0].key) || 'zone_1';
                localStorage.setItem('mlrs_tour_stencil_build_path_v5_idx', '1');
                renderModal();
              }
            },
            {
              title: hasSegSurfaces ? `Step 2 \u2014 Split ${baseModel.id}'s ${primarySurfLabel} Into Segments` : `Step 2 \u2014 Select a Button Pad on ${baseModel.id}`,
              hintShort: hasSegSurfaces ? `Tick ${primarySurfLabel} in Section 1 (left)` : 'Click a button on the center remote',
              targetSelector: hasSegSurfaces ? '#mlrsTourStepSplit' : '#mlrsCanvasStage',
              isComplete: () => !hasSegSurfaces || Object.values(tz || {}).some(s => Boolean(s && s.enabled)),
              body: hasSegSurfaces
                ? `In the highlighted <b>1. Segment Wheels &amp; Bars</b> box on the left, tick <b>${surfFriendlyList.join('</b> or <b>')}</b> and choose how many segments (2\u20138) to create.`
                : `<b>${baseModel.id}</b> uses dedicated buttons rather than continuous sliders \u2014 click any button pad on the center faceplate to configure it.`,
              actionLabel: hasSegSurfaces ? `\u26A1 Split ${primarySurfLabel} & Next \u25B6` : 'Select Pad #1 & Next \u25B6',
              onAction: () => {
                if (hasSegSurfaces) {
                  const sk = panelSurfaces[0].surf;
                  tz[sk].enabled = true;
                  tz[sk].segments = sk === 'hue_ring' ? 4 : 2;
                  selectedPadKey = sk === 'hue_ring' ? 'hue_seg_1' : (sk.split('_')[0] + '_seg_1');
                }
                localStorage.setItem('mlrs_tour_stencil_build_path_v5_idx', '2');
                mode = 'edit';
                renderModal();
              }
            },
            {
              title: 'Step 3 \u2014 Choose Tap/Toggle, Step-Cycle, or X\u2013Y% Variable Slider',
              hintShort: 'Pick a mode pill + Dot Pitch / Arrows on the right',
              targetSelector: '#mlrsTourStepBehaviour',
              onEnter: () => {
                const activeSurf = panelSurfaces.find(ps => tz[ps.surf] && tz[ps.surf].enabled);
                if (activeSurf && !/^(hue|sat|bri|cct)_seg_/.test(selectedPadKey)) {
                  const sk = activeSurf.surf;
                  selectedPadKey = sk === 'hue_ring' ? 'hue_seg_1' : (sk.split('_')[0] + '_seg_1');
                  renderModal();
                }
              },
              isComplete: () => Object.values(draft.pads || {}).some(p => Boolean(p && (p.segmentMode === 'slider' || (p.multifunc && p.multifunc.enabled)))),
              body: hasSegSurfaces
                ? 'In the highlighted <b>Slot Function</b> card (right), click <b>\uD83C\uDF9A\uFE0F X\u2013Y% Slider</b> to set custom <b>Start/End %</b> (e.g. <code>100 \u2192 0</code>), <b>Dot Pitch (mm)</b>, and <b>Track End Arrows</b> \u2014 or pick <b>\uD83D\uDD22 Step Cycle</b>!'
                : 'In the highlighted <b>Slot Function</b> card (right), click <b>\uD83D\uDD22 Step Cycle</b> (tap steps 1\u2192N, hold = OFF) or <b>\uD83D\uDD18 Tap / Toggle</b>.',
              actionLabel: hasSegSurfaces ? '\uD83C\uDF9A\uFE0F Set 100\u21920% Slider & Next \u25B6' : '\uD83D\uDD22 Set 5-Step Cycle & Next \u25B6',
              onAction: () => {
                if (hasSegSurfaces) {
                  if (!Object.values(tz).some(s => s && s.enabled)) {
                    const sk = panelSurfaces[0].surf;
                    tz[sk].enabled = true; tz[sk].segments = sk === 'hue_ring' ? 4 : 2;
                    selectedPadKey = sk === 'hue_ring' ? 'hue_seg_1' : (sk.split('_')[0] + '_seg_1');
                  }
                  const p = ensurePad();
                  p.segmentMode = 'slider'; p.sliderMin = 100; p.sliderMax = 0; p.sliderPitch = 2.2; p.sliderArrows = 'chevron';
                } else {
                  const p = ensurePad();
                  p.multifunc = { enabled: true, steps: 5, unit: 'Spd' };
                }
                localStorage.setItem('mlrs_tour_stencil_build_path_v5_idx', '3');
                renderModal();
              }
            },
            {
              title: 'Step 4 \u2014 Set Main/Sub Text & Left / Right / Dual Icons',
              hintShort: 'Type Main Label + pick Left, Right, or Dual Icons',
              targetSelector: '#mlrsTourStepTypography',
              isComplete: () => {
                const p = draft.pads && draft.pads[selectedPadKey];
                return Boolean(p && p.label && p.icon && p.icon !== 'none');
              },
              body: 'In the highlighted <b>Labels &amp; Icon Placement</b> section (right), enter <b>Main + Sub Labels</b> and place icons to the <b>Left</b>, <b>Right</b>, or <b>Dual (Left &amp; Right Ends)</b> so text stays centered.',
              actionLabel: '\u2194\uFE0F Demo Dual Icons & Next \u25B6',
              onAction: () => {
                const p = ensurePad();
                p.label = p.label || 'Blinds'; p.sublabel = p.sublabel || '100\u21920% Slide';
                p.iconPos = 'both'; p.icon = 'blinds'; p.iconEnd = 'sun';
                localStorage.setItem('mlrs_tour_stencil_build_path_v5_idx', '4');
                renderModal();
              }
            },
            {
              title: 'Step 5 \u2014 Preview Nighttime Luminous Ink & Scrub Live',
              hintShort: 'Click Test in Dark or 2. Interactive Test',
              targetSelector: '#mlrsTourStepLuminous',
              isComplete: () => Boolean(luminousPreview || mode === 'test' || (draft.luminous && draft.luminous.enabled)),
              body: 'Tick <b>Luminous Glow Ink</b> in the highlighted box and click <b>\uD83C\uDF19 Test in Dark</b> to see how Strontium Aluminate glows at night \u2014 and try <b>2. Interactive Test</b> at the top to scrub your slider live!',
              actionLabel: '\uD83C\uDF19 Preview Night Glow & Next \u25B6',
              onAction: () => {
                luminousPreview = true;
                draft.luminous = Object.assign({ enabled: true, border: true, header: true, slots: false }, draft.luminous || {}, { enabled: true, border: true });
                localStorage.setItem('mlrs_tour_stencil_build_path_v5_idx', '5');
                renderModal();
              }
            },
            {
              title: 'Step 6 \u2014 Save Stencil & Map Real HA / Homebridge Devices',
              hintShort: 'Click Create / Update Custom Remote at bottom-right',
              targetSelector: '#mlrsDeployBtn',
              isComplete: () => false,
              body: `Click the highlighted <b>${isEditingExistingCustom ? 'Update Custom Remote' : '+ Create Custom Remote'}</b> button at the bottom-right! That attaches this stencil to <b>${hexId}</b> and returns you to the Visual Mapper to bind lights, blinds, fans, or scenes.`,
              actionLabel: '\uD83D\uDCBE Save & Return to Mapper',
              onAction: () => backdrop.querySelector('#mlrsDeployBtn')?.click()
            }
          ]
        });
        const switchB8Link = backdrop.querySelector('#mlrsSwitchToB8Link');
        if (switchB8Link) {
          switchB8Link.onclick = (ev) => {
            ev.preventDefault();
            backdrop.remove();
            const b8Mod = Cat.MODELS.find(m => m.id === 'CUST_B8_SLIDER_SHOWCASE') || Cat.MODELS.find(m => m.id === 'B8');
            if (b8Mod) openFaciaDesigner(Object.assign({}, opts, { model: b8Mod, remoteName: 'B8 Hybrid Slider Showcase', bindRemoteByDefault: false }));
          };
        }
        refreshTourState = tourCtrl ? tourCtrl.refresh : null;
      }
      backdrop.querySelector('#mlrsCancelBtn').onclick = () => backdrop.remove();

      // Preset Showcase Loader buttons
      backdrop.querySelectorAll('[data-preset-idx]').forEach(btn => {
        btn.onclick = () => {
          const pr = presets[Number(btn.getAttribute('data-preset-idx'))];
          if (!pr) return;
          tz = normalizeTouchZones(JSON.parse(JSON.stringify(pr.touch_zones)));
          Object.assign(draft, JSON.parse(JSON.stringify(pr.facia)));
          selectedPadKey = Object.keys(draft.pads || {})[0] || selectedPadKey;
          step1Confirmed = true;
          lastTestReadout = `Loaded "${pr.name}" — inspect any slot or click 2. Interactive Test to scrub sliders live!`;
          renderModal();
        };
      });

      const qsSlider = backdrop.querySelector('#mlrsQuickSplitSlider');
      if (qsSlider) qsSlider.onclick = () => {
        const sk = qsSlider.getAttribute('data-surf');
        tz[sk].enabled = true;
        tz[sk].segments = sk === 'hue_ring' ? 4 : 2;
        const pref = sk === 'hue_ring' ? 'hue_seg_1' : sk === 'cct_bar' ? 'cct_seg_1' : sk === 'sat_bar' ? 'sat_seg_1' : 'bri_seg_1';
        selectedPadKey = pref;
        const p = ensurePad();
        p.segmentMode = 'slider';
        if (p.sliderMin === undefined) p.sliderMin = 0;
        if (p.sliderMax === undefined) p.sliderMax = 100;
        renderModal();
      };
      const qsBtn = backdrop.querySelector('#mlrsQuickSplitBtn');
      if (qsBtn) qsBtn.onclick = () => {
        const sk = qsBtn.getAttribute('data-surf');
        tz[sk].enabled = true;
        selectedPadKey = sk === 'hue_ring' ? 'hue_seg_1' : sk === 'cct_bar' ? 'cct_seg_1' : sk === 'sat_bar' ? 'sat_seg_1' : 'bri_seg_1';
        renderModal();
      };

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
      const bgColEl = backdrop.querySelector('#mlrsBgColor');
      if (bgColEl) bgColEl.oninput = (e) => { draft.bgColor = e.target.value; refreshStageOnly(); };
      const bdrColEl = backdrop.querySelector('#mlrsBoundaryColor');
      if (bdrColEl) bdrColEl.oninput = (e) => { draft.boundaryColor = e.target.value; refreshStageOnly(); };
      const ensureLum = () => { if (!draft.luminous) draft.luminous = { enabled: false, border: true, header: false, slots: false }; return draft.luminous; };
      const lumMasterEl = backdrop.querySelector('#mlrsLumMaster');
      if (lumMasterEl) lumMasterEl.onchange = (e) => { const l = ensureLum(); l.enabled = e.target.checked; if (e.target.checked && !l.border && !l.header && !l.slots) l.border = true; refreshStageOnly(); };
      const lumBorderEl = backdrop.querySelector('#mlrsLumBorder');
      if (lumBorderEl) lumBorderEl.onchange = (e) => { const l = ensureLum(); l.border = e.target.checked; if (e.target.checked) l.enabled = true; refreshStageOnly(); };
      const lumHeaderEl = backdrop.querySelector('#mlrsLumHeader');
      if (lumHeaderEl) lumHeaderEl.onchange = (e) => { const l = ensureLum(); l.header = e.target.checked; if (e.target.checked) l.enabled = true; refreshStageOnly(); };
      const lumSlotsEl = backdrop.querySelector('#mlrsLumSlots');
      if (lumSlotsEl) lumSlotsEl.onchange = (e) => { const l = ensureLum(); l.slots = e.target.checked; if (e.target.checked) l.enabled = true; renderModal(); };
      const applyGlowAll = () => {
        draft.luminous = { enabled: true, border: true, header: true, slots: true };
        luminousPreview = true;
        renderModal();
      };
      const glowAllBtn = backdrop.querySelector('#mlrsGlowAllBtn');
      if (glowAllBtn) glowAllBtn.onclick = applyGlowAll;
      const topGlowAllBtn = backdrop.querySelector('#mlrsTopGlowAllBtn');
      if (topGlowAllBtn) topGlowAllBtn.onclick = applyGlowAll;
      const glowNoneBtn = backdrop.querySelector('#mlrsGlowNoneBtn');
      if (glowNoneBtn) glowNoneBtn.onclick = () => {
        draft.luminous = { enabled: false, border: false, header: false, slots: false };
        Object.values(draft.pads || {}).forEach(p => { if (p) delete p.luminous; });
        renderModal();
      };
      const padLumEl = backdrop.querySelector('#mlrsPadLuminous');
      if (padLumEl) padLumEl.onchange = (e) => { const p = ensurePad(); p.luminous = e.target.checked; refreshStageOnly(); };
      backdrop.querySelector('#mlrsMonoChk').onchange = (e) => { draft.monochrome = e.target.checked; renderModal(); };
      backdrop.querySelector('#mlrsLedHole').onchange = (e) => { draft.showLedPinhole = e.target.checked; refreshStageOnly(); };

      // Right Column Inspector
      const ensurePad = () => {
        if (!draft.pads[selectedPadKey]) draft.pads[selectedPadKey] = {};
        const slDef = bp.slots.find(sl => sl.key === selectedPadKey);
        if (slDef && (slDef.type === 'vbar' || slDef.type === 'hbar') && draft.pads[selectedPadKey].sliderArrows !== 'factory') {
          draft.pads[selectedPadKey].customTrack = true;
        }
        return draft.pads[selectedPadKey];
      };
      backdrop.querySelector('#mlrsPadStyle').onchange = (e) => { const p = ensurePad(); if (e.target.value) p.style = e.target.value; else delete p.style; renderModal(); };
      const segModeEl = backdrop.querySelector('#mlrsSegMode');
      if (segModeEl) segModeEl.onchange = (e) => {
        const p = ensurePad();
        p.segmentMode = e.target.value;
        if (p.segmentMode === 'slider' && p.multifunc) p.multifunc.enabled = false;
        renderModal();
      };
      const segMinEl = backdrop.querySelector('#mlrsSegMin');
      if (segMinEl) segMinEl.oninput = (e) => {
        const p = ensurePad();
        p.sliderMin = Math.max(0, Math.min(100, Number(e.target.value || 0)));
        refreshStageOnly();
      };
            const toggleNightPreview = () => {
        luminousPreview = !luminousPreview;
        if (luminousPreview && !(draft.luminous && (draft.luminous.enabled || Object.values(draft.pads || {}).some(p => p && p.luminous)))) {
          draft.luminous = Object.assign({ enabled: true, border: true, header: true, slots: false }, draft.luminous || {}, { enabled: true, border: true });
        }
        renderModal();
      };
      const lumPrevBtn = backdrop.querySelector('#mlrsLumPreviewBtn');
      if (lumPrevBtn) lumPrevBtn.onclick = toggleNightPreview;
      const lumCardPrevBtn = backdrop.querySelector('#mlrsLumCardPreviewBtn');
      if (lumCardPrevBtn) lumCardPrevBtn.onclick = toggleNightPreview;

      const bareBtn = backdrop.querySelector('#mlrsResetBareBtn');
      if (bareBtn) bareBtn.onclick = () => {
        tz = normalizeTouchZones(null);
        draft.pads = {};
        draft.panelTitle = '';
        draft.luminous = { enabled: false, border: false, header: false, slots: false };
        luminousPreview = false;
        selectedPadKey = (bp.slots && bp.slots[0] && bp.slots[0].key) || 'zone_1';
        step1Confirmed = true;
        lastTestReadout = `Reset to bare ${baseModel.id} panel — now click Next ▶ in the Guided Path to split a wheel or bar!`;
        renderModal();
      };

      const segPitchEl = backdrop.querySelector('#mlrsSegPitch');
      if (segPitchEl) segPitchEl.oninput = (e) => {
        const p = ensurePad();
        p.sliderPitch = Math.max(0, Math.min(8, Number(e.target.value ?? 2.2)));
        refreshStageOnly();
      };
      const segArrowsEl = backdrop.querySelector('#mlrsSegArrows');
      if (segArrowsEl) segArrowsEl.onchange = (e) => {
        const p = ensurePad();
        p.sliderArrows = e.target.value || 'chevron';
        if (p.sliderArrows === 'factory') delete p.customTrack;
        else p.customTrack = true;
        refreshStageOnly();
      };

      const segMaxEl = backdrop.querySelector('#mlrsSegMax');
      if (segMaxEl) segMaxEl.oninput = (e) => {
        const p = ensurePad();
        p.sliderMax = Math.max(0, Math.min(100, Number(e.target.value || 100)));
        refreshStageOnly();
      };
      const pFontEl = backdrop.querySelector('#mlrsPanelFont');
      if (pFontEl) pFontEl.onchange = (e) => { draft.fontFamily = e.target.value || 'sans'; refreshStageOnly(); };
      const pScaleEl = backdrop.querySelector('#mlrsPanelFontScale');
      if (pScaleEl) pScaleEl.oninput = (e) => { draft.fontScale = Math.max(65, Math.min(145, Number(e.target.value || 100))); refreshStageOnly(); };

            backdrop.querySelectorAll('[data-slot-mode]').forEach(b => {
        b.onclick = () => {
          const mVal = b.getAttribute('data-slot-mode');
          const p = ensurePad();
          if (mVal === 'slider') {
            p.segmentMode = 'slider';
            if (p.sliderMin === undefined) p.sliderMin = 0;
            if (p.sliderMax === undefined) p.sliderMax = 100;
            if (p.multifunc) p.multifunc.enabled = false;
          } else if (mVal === 'multistep') {
            p.segmentMode = 'button';
            p.multifunc = Object.assign({ steps: 5, unit: 'Spd' }, p.multifunc || {}, { enabled: true });
          } else {
            p.segmentMode = 'button';
            if (p.multifunc) p.multifunc.enabled = false;
          }
          renderModal();
        };
      });
      const iconEndEl = backdrop.querySelector('#mlrsPadIconEnd');
      if (iconEndEl) iconEndEl.onchange = (e) => { ensurePad().iconEnd = e.target.value || 'none'; refreshStageOnly(); };

      const iconPosEl = backdrop.querySelector('#mlrsPadIconPos');
      if (iconPosEl) iconPosEl.onchange = (e) => { ensurePad().iconPos = e.target.value || 'left'; renderModal(); };
      const padFontEl = backdrop.querySelector('#mlrsPadFont');
      if (padFontEl) padFontEl.onchange = (e) => { const p = ensurePad(); if (e.target.value) p.fontFamily = e.target.value; else delete p.fontFamily; refreshStageOnly(); };
      const padScaleEl = backdrop.querySelector('#mlrsPadFontScale');
      if (padScaleEl) padScaleEl.oninput = (e) => { const p = ensurePad(); const v = Number(e.target.value); if (v >= 65 && v <= 145) p.fontScale = v; else delete p.fontScale; refreshStageOnly(); };

      backdrop.querySelector('#mlrsPadLabel').oninput = (e) => { const p = ensurePad(); p.label = e.target.value; syncLabelToTouchZone(selectedPadKey, e.target.value); refreshStageOnly(); };
      backdrop.querySelector('#mlrsPadSub').oninput = (e) => { const p = ensurePad(); p.sublabel = e.target.value; refreshStageOnly(); };
      const mfChkLegacy = backdrop.querySelector('#mlrsMfChk'); if (mfChkLegacy) mfChkLegacy.onchange = (e) => {
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
      backdrop.querySelector('#mlrsDlSvgBtn').onclick = (ev) => {
        if (ev) { ev.preventDefault(); ev.stopPropagation(); }
        const svgStr = buildOneToOnePrintSvg(model, draft, tz, activeZone);
        const fName = `${model.id.toLowerCase()}_${hexId.toLowerCase()}_stencil_1to1.svg`;
        downloadTextFile(fName, svgStr, 'image/svg+xml', { hubBase });
      };
      const podBtn = backdrop.querySelector('#mlrsDlPodBtn');
      if (podBtn) podBtn.onclick = (ev) => {
        if (ev) { ev.preventDefault(); ev.stopPropagation(); }
        const podObj = buildPodOrderPayload(remoteName, hexId, model, draft, tz, activeZone);
        const fName = `${model.id.toLowerCase()}_${hexId.toLowerCase()}_pod_order.json`;
        downloadTextFile(fName, JSON.stringify(podObj, null, 2), 'application/json', { hubBase });
      };

            // Background Graphic Upload, Fit, Zoom, Pan & Frosted Keycap Alpha handlers
      const bgFileInp = backdrop.querySelector('#mlrsBgImgFile');
      const bgPickBtn = backdrop.querySelector('#mlrsBgImgPickBtn');
      if (bgPickBtn && bgFileInp) {
        bgPickBtn.onclick = () => bgFileInp.click();
        bgFileInp.onchange = async (ev) => {
          const f = ev.target.files && ev.target.files[0];
          if (!f) return;
          bgPickBtn.textContent = '⏳ Loading…';
          try {
            const dUrl = await compressImageFileToDataUrl(f, 880);
            draft.bgImage = Object.assign({ fit: 'cover', scale: 100, x: 0, y: 0, opacity: 88, padAlpha: 72 }, draft.bgImage || {}, {
              dataUrl: dUrl,
              name: f.name || 'custom_graphic'
            });
            lastTestReadout = `Loaded background graphic "${f.name}" — adjust Zoom, Pan & Button Backing opacity on the left!`;
            renderModal();
          } catch (err) {
            bgPickBtn.textContent = '+ Upload Image';
            alert('Could not load image: ' + err);
          }
        };
      }
      const bgClearBtn = backdrop.querySelector('#mlrsBgImgClearBtn');
      if (bgClearBtn) bgClearBtn.onclick = () => { delete draft.bgImage; renderModal(); };
      const bgFitEl = backdrop.querySelector('#mlrsBgImgFit');
      if (bgFitEl) bgFitEl.onchange = (e) => { if (draft.bgImage) { draft.bgImage.fit = e.target.value; refreshStageOnly(); } };
      [['#mlrsBgImgScale', 'scale', 'Zoom'], ['#mlrsBgImgX', 'x', 'Pan X'], ['#mlrsBgImgY', 'y', 'Pan Y'], ['#mlrsBgImgOp', 'opacity', 'Image Opacity'], ['#mlrsBgImgPadAlpha', 'padAlpha', 'Button Backing']].forEach(([sel, prop, lblTxt]) => {
        const el = backdrop.querySelector(sel);
        if (el) el.oninput = (e) => {
          if (!draft.bgImage) return;
          draft.bgImage[prop] = Number(e.target.value);
          const lbl = el.previousElementSibling;
          if (lbl) lbl.textContent = `${lblTxt} (${draft.bgImage[prop]}%)`;
          refreshStageOnly();
        };
      });

      // Glow Everything / Clear Glow handlers (safe idempotent bind)
      const glowAllB = backdrop.querySelector('#mlrsGlowAllBtn');
      if (glowAllB && !glowAllB.onclick) glowAllB.onclick = () => { draft.luminous = { enabled: true, border: true, header: true, slots: true }; luminousPreview = true; renderModal(); };
      const glowNoneB = backdrop.querySelector('#mlrsGlowNoneBtn');
      if (glowNoneB && !glowNoneB.onclick) glowNoneB.onclick = () => { draft.luminous = { enabled: false, border: false, header: false, slots: false }; Object.values(draft.pads || {}).forEach(p => { if (p) delete p.luminous; }); renderModal(); };

      // Save & Resume Work-in-Progress (WIP) Draft handlers
      const saveWipBtn = backdrop.querySelector('#mlrsSaveWipBtn');
      if (saveWipBtn) {
        saveWipBtn.onclick = () => {
          const cleanName = (customModelName || '').trim() || `${baseModel.id} Draft`;
          const dId = currentDraftId || `WIP_${baseModel.id}_${Date.now().toString(36).toUpperCase()}`;
          currentDraftId = dId;
          const now = new Date();
          const savedAtShort = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
          const res = saveWipDraftRecord({
            id: dId,
            name: cleanName,
            baseModelId: baseModel.id,
            hexId,
            facia: JSON.parse(JSON.stringify(draft)),
            touchZones: JSON.parse(JSON.stringify(tz)),
            selectedPadKey,
            savedAt: now.toISOString(),
            savedAtShort
          });
          if (res.ok) {
            lastTestReadout = `📝 Saved WIP Draft "${cleanName}" (${savedAtShort}) — safe to close and resume anytime from the top bar!`;
            renderModal();
            const freshBtn = backdrop.querySelector('#mlrsSaveWipBtn');
            if (freshBtn) {
              freshBtn.textContent = `✅ Draft Saved (${savedAtShort})!`;
              freshBtn.style.background = '#059669';
              freshBtn.style.color = '#ffffff';
              freshBtn.style.borderColor = '#059669';
              setTimeout(() => { if (freshBtn.isConnected) { freshBtn.textContent = '📝 Save WIP Draft'; freshBtn.style.background = ''; freshBtn.style.color = '#0284c7'; freshBtn.style.borderColor = '#0284c7'; } }, 2400);
            }
          } else {
            alert('Could not save draft locally: ' + res.error);
          }
        };
      }
      const resumeWipSel = backdrop.querySelector('#mlrsResumeWipSel');
      if (resumeWipSel) {
        resumeWipSel.onchange = (e) => {
          const pickId = e.target.value;
          const found = loadWipDrafts().find(d => d.id === pickId);
          if (!found) return;
          currentDraftId = found.id;
          customModelName = found.name || customModelName;
          tz = normalizeTouchZones(found.touchZones);
          Object.keys(draft).forEach(k => delete draft[k]);
          Object.assign(draft, JSON.parse(JSON.stringify(found.facia || { enabled: true, pads: {} })));
          selectedPadKey = found.selectedPadKey || selectedPadKey;
          step1Confirmed = true;
          lastTestReadout = `📂 Loaded WIP Draft "${found.name}" (${found.savedAtShort || 'saved'})!`;
          renderModal();
        };
      }
      const delWipBtn = backdrop.querySelector('#mlrsDelWipBtn');
      if (delWipBtn) {
        delWipBtn.onclick = () => {
          if (!currentDraftId) return;
          deleteWipDraftRecord(currentDraftId);
          currentDraftId = null;
          lastTestReadout = 'Removed saved WIP draft.';
          renderModal();
        };
      }

      const nameInp = backdrop.querySelector('#mlrsCustomModelName');
      if (nameInp) nameInp.oninput = (e) => { customModelName = e.target.value; step1Confirmed = Boolean(customModelName.trim().length >= 2); if (typeof refreshTourState === 'function') refreshTourState(); };
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
        if (typeof opts.onSaveCustomModel === 'function') {
          // Host integration (Home Assistant / Homebridge) handles persistence & Hub proxy!
          if (hubBase) {
            fetch(`${hubBase}/api/remotes/custom_models`, {
              method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
            }).then(() => Cat.syncCustomModelsFromHub(hubBase)).catch(() => {});
          }
          if (Cat.upsertCustomModel) Cat.upsertCustomModel(payload);
          await opts.onSaveCustomModel({ customModel: payload, bindNow: bindCurrentRemote, calibration: cal, touchZones: tz, facia: draft });
        } else {
          const res = await fetch(`${hubBase}/api/remotes/custom_models`, {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
          });
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          await Cat.syncCustomModelsFromHub(hubBase);
          if (bindCurrentRemote && typeof opts.onSave === 'function') {
            await opts.onSave(draft, cal, tz, targetId);
          }
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


  function resolveCustomToPhysicalAction(action, value, zone, touchZones, cal) {
    const act = String(action || '');
    const m = act.match(/^(hue|sat|cct|bri)_seg_(\d+)$/);
    if (!m) return { action: act, value: value, visDeg: undefined, pct: undefined, converted: false };
    const kind = m[1];
    const segNum = Math.max(1, Number(m[2] || value || 1));
    const tz = normalizeTouchZones(touchZones);
    if (kind === 'hue') {
      const n = Math.min(12, Math.max(2, Number(tz.hue_ring.segments || 6)));
      const span = 360 / n;
      const off = Number(tz.hue_ring.offset_deg || 0);
      const visDeg = (((off + (segNum - 0.5) * span) % 360) + 360) % 360;
      const c = Object.assign(defaultCalibration(), cal || {});
      const topRaw = typeof c.hueTopRaw === 'number' ? c.hueTopRaw : (c.wheel_top_raw ?? 0);
      const dir = (c.hueDir === -1 || c.wheel_dir === -1) ? -1 : 1;
      const rawHue = Math.round((((topRaw + dir * visDeg) % 360) + 360) % 360);
      return { action: 'hue', value: rawHue, visDeg, converted: true };
    }
    const cfg = kind === 'sat' ? tz.sat_bar : (kind === 'cct' ? tz.cct_bar : tz.bri_bar);
    const n = Math.min(6, Math.max(2, Number((cfg && cfg.segments) || 4)));
    const pct = Math.max(0, Math.min(100, Math.round(((segNum - 0.5) / n) * 100)));
    if (kind === 'sat') return { action: 'saturation', value: Math.max(0, Math.min(100, Math.round(100 - pct))), pct, converted: true };
    if (kind === 'cct') return { action: 'color_temp', value: Math.round(370 - (pct / 100) * 217), pct, converted: true };
    return { action: 'brightness', value: pct, pct, converted: true };
  }


  function computePeelClipPolygons(peelPct) {
    const p = Math.max(0, Math.min(100, Number(peelPct) || 0));
    if (p <= 0.5) return { overClip: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', flapClip: 'polygon(100% 0%, 100% 0%, 100% 0%)', flapOpacity: 0 };
    if (p >= 99.5) return { overClip: 'polygon(0% 100%, 0% 100%, 0% 100%)', flapClip: 'polygon(0% 0%, 0% 0%, 0% 0%)', flapOpacity: 0 };
    const d = (p / 100) * 200;
    if (d <= 100) {
      const xCut = 100 - d, yCut = d;
      const fx = Math.max(0, xCut - d * 0.28), fy = Math.min(100, yCut + d * 0.28);
      return {
        overClip: `polygon(0% 0%, ${xCut.toFixed(1)}% 0%, 100% ${yCut.toFixed(1)}%, 100% 100%, 0% 100%)`,
        flapClip: `polygon(${xCut.toFixed(1)}% 0%, 100% ${yCut.toFixed(1)}%, ${fx.toFixed(1)}% ${fy.toFixed(1)}%)`,
        flapOpacity: 0.92
      };
    }
    const rem = 200 - d, xBot = rem, yLeft = 100 - rem;
    const fx = Math.max(0, xBot * 0.55), fy = Math.min(100, yLeft + (100 - yLeft) * 0.45);
    return {
      overClip: `polygon(0% ${yLeft.toFixed(1)}%, ${xBot.toFixed(1)}% 100%, 0% 100%)`,
      flapClip: `polygon(0% ${yLeft.toFixed(1)}%, ${xBot.toFixed(1)}% 100%, ${fx.toFixed(1)}% ${fy.toFixed(1)}%)`,
      flapOpacity: Math.max(0.18, rem / 110)
    };
  }

  function mountPeelableStage(containerEl, opts) {
    injectStudioStyles(containerEl);
    const Cat = root.MiBoxerCatalog;
    if (!containerEl || !Cat) return null;
    const overlayModel = typeof opts.overlayModel === 'string' ? (Cat.MODELS.find(m => m.id === opts.overlayModel) || Cat.MODELS[0]) : opts.overlayModel;
    const baseId = (overlayModel && (overlayModel.baseModel || overlayModel.base)) || opts.physicalModelId || 'B8';
    const candPhys = opts.physicalModel
      ? (typeof opts.physicalModel === 'string' ? Cat.MODELS.find(m => m.id === opts.physicalModel) : opts.physicalModel)
      : null;
    const physicalModel = (candPhys && (!Cat.areModelsPhysicallyCompatible || Cat.areModelsPhysicallyCompatible(overlayModel, candPhys)))
      ? candPhys
      : (Cat.MODELS.find(m => m.id === baseId && !m.isCustom) || Cat.MODELS.find(m => (m.base || m.id) === String(baseId).replace(/-B$/, '') && !m.isCustom) || Cat.MODELS[0]);

    let peelPct = Math.max(0, Math.min(100, Number(opts.initialPeelPct || 0)));
    const maxH = opts.maxHeight || 'clamp(370px, 56vh, 620px)';
    const linkedTitle = opts.linkedBadgeText || `Custom Stencil ⇄ Bare ${physicalModel.id}`;

    containerEl.innerHTML = `
      <div class="mlrs-peel-wrap">
        <div class="mlrs-peel-bar">
          <button type="button" class="mlrs-peel-btn" data-role="peel-toggle">🩹 Peel Back Stencil</button>
          <input type="range" min="0" max="100" value="${peelPct}" data-role="peel-range" style="width:105px;cursor:pointer;accent-color:#0284c7"/>
          <span data-role="peel-lbl" style="font-weight:700;min-width:110px;text-align:left">Stencil On (0%)</span>
          <span style="color:#0284c7;font-weight:700">${linkedTitle}</span>
        </div>
        <div class="mlrs-peel-stack" data-role="peel-stack">
          <div class="mlrs-peel-under" data-role="under-stage"></div>
          <div class="mlrs-peel-over" data-role="over-stage"></div>
          <div class="mlrs-peel-flap" data-role="peel-flap"></div>
          <div class="mlrs-peel-corner-hit" data-role="peel-corner" title="Click corner to peel back custom stencil"></div>
        </div>
      </div>
    `;

    const stackEl = containerEl.querySelector('[data-role="peel-stack"]');
    const underEl = containerEl.querySelector('[data-role="under-stage"]');
    const overEl  = containerEl.querySelector('[data-role="over-stage"]');
    const flapEl  = containerEl.querySelector('[data-role="peel-flap"]');
    const cornerEl = containerEl.querySelector('[data-role="peel-corner"]');
    const btnEl   = containerEl.querySelector('[data-role="peel-toggle"]');
    const rangeEl = containerEl.querySelector('[data-role="peel-range"]');
    const lblEl   = containerEl.querySelector('[data-role="peel-lbl"]');

    const underCtrl = mountInteractiveStage(underEl, {
      model: physicalModel, uid: `${opts.uid || 'peel'}_phys`, maxHeight: maxH,
      facia: null, touchZones: null,
      calibration: opts.physicalCalibration || opts.calibration, activeZone: opts.activeZone ?? 1,
      onZoneChange: (z) => { if (opts.onZoneChange) opts.onZoneChange(z); },
      onScrubPreview: opts.onScrubPreview,
      onAction: (act, val, z, lbl) => { if (opts.onPhysicalAction) opts.onPhysicalAction(act, val, z, lbl); else if (opts.onAction) opts.onAction(act, val, z, lbl); }
    });

    const overCtrl = mountInteractiveStage(overEl, {
      model: overlayModel, uid: `${opts.uid || 'peel'}_cust`, maxHeight: maxH,
      facia: opts.facia || (overlayModel && overlayModel.facia),
      touchZones: opts.touchZones || (overlayModel && overlayModel.touchZones),
      calibration: opts.calibration, activeZone: opts.activeZone ?? 1,
      onZoneChange: (z) => { if (opts.onZoneChange) opts.onZoneChange(z); },
      onScrubPreview: opts.onScrubPreview,
      onAction: (act, val, z, lbl) => { if (opts.onCustomAction) opts.onCustomAction(act, val, z, lbl); else if (opts.onAction) opts.onAction(act, val, z, lbl); }
    });

    function applyPeel(nextPct, isScrub) {
      peelPct = Math.max(0, Math.min(100, Number(nextPct) || 0));
      if (stackEl) stackEl.classList.toggle('scrubbing', Boolean(isScrub));
      const clips = computePeelClipPolygons(peelPct);
      if (overEl) { overEl.style.clipPath = clips.overClip; overEl.style.pointerEvents = peelPct >= 85 ? 'none' : 'auto'; }
      if (flapEl) { flapEl.style.clipPath = clips.flapClip; flapEl.style.opacity = String(clips.flapOpacity); }
      if (rangeEl && Number(rangeEl.value) !== Math.round(peelPct)) rangeEl.value = String(Math.round(peelPct));
      if (btnEl) {
        btnEl.classList.toggle('peeled', peelPct >= 50);
        btnEl.textContent = peelPct >= 85 ? '🩹 Re-Apply Stencil' : (peelPct > 10 ? '🩹 Peel Fully (100%)' : '🩹 Peel Back Stencil');
      }
      if (lblEl) lblEl.textContent = peelPct === 0 ? 'Stencil On (0%)' : (peelPct >= 98 ? `Bare ${physicalModel.id}` : `Peeled ${Math.round(peelPct)}%`);
    }
    const cyclePeel = () => applyPeel(peelPct < 40 ? 52 : (peelPct < 92 ? 100 : 0), false);
    if (btnEl) btnEl.onclick = cyclePeel;
    if (cornerEl) cornerEl.onclick = (e) => { e.stopPropagation(); cyclePeel(); };
    if (rangeEl) { rangeEl.oninput = (e) => applyPeel(e.target.value, true); rangeEl.onchange = (e) => applyPeel(e.target.value, false); }
    applyPeel(peelPct, false);

    return {
      underCtrl, overCtrl,
      setPeel: (p) => applyPeel(p, false),
      pulseAction: (action, zone, isRf, val, sourceLayer) => {
        if (sourceLayer === 'physical') {
          if (underCtrl && underCtrl.pulseAction) underCtrl.pulseAction(action, zone, isRf, val);
          const conv = resolvePhysicalToCustomAction(action, val ?? -1, zone, opts.touchZones || (overlayModel && overlayModel.touchZones), opts.calibration);
          if (overCtrl && overCtrl.pulseAction) overCtrl.pulseAction(conv.converted ? conv.action : action, zone, isRf, conv.converted ? conv.value : val);
        } else {
          if (overCtrl && overCtrl.pulseAction) overCtrl.pulseAction(action, zone, isRf, val);
          const rev = resolveCustomToPhysicalAction(action, val, zone, opts.touchZones || (overlayModel && overlayModel.touchZones), opts.physicalCalibration || opts.calibration);
          if (underCtrl && underCtrl.pulseAction) underCtrl.pulseAction(rev.action, zone, isRf, rev.value);
        }
      }
    };
  }


  function submitPostDownloadForm(actionUrl, safeName, text) {
    let ifr = document.getElementById('mlrs_hidden_dl_iframe');
    if (!ifr) {
      ifr = document.createElement('iframe');
      ifr.id = 'mlrs_hidden_dl_iframe';
      ifr.name = 'mlrs_hidden_dl_iframe';
      ifr.style.display = 'none';
      document.body.appendChild(ifr);
    }
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = actionUrl;
    form.target = 'mlrs_hidden_dl_iframe';
    form.enctype = 'application/x-www-form-urlencoded';
    form.style.display = 'none';
    const fnInput = document.createElement('input');
    fnInput.type = 'hidden'; fnInput.name = 'filename'; fnInput.value = safeName;
    const ctInput = document.createElement('input');
    ctInput.type = 'hidden'; ctInput.name = 'content'; ctInput.value = text;
    form.appendChild(fnInput);
    form.appendChild(ctInput);
    document.body.appendChild(form);
    form.submit();
    setTimeout(() => form.remove(), 5000);
  }

  async function downloadTextFile(filename, content, mimeType, opts) {
    const safeName = String(filename || 'stencil_1to1.svg').replace(/[^a-zA-Z0-9._-]/g, '_');
    const mime = mimeType || 'image/svg+xml';
    const text = String(content || '');
    if (root.__MLRS_STAGE_DOWNLOAD) {
      try {
        const dlUrl = await root.__MLRS_STAGE_DOWNLOAD(safeName, text, mime);
        if (dlUrl) {
          const iframe = document.createElement('iframe');
          iframe.style.display = 'none';
          iframe.src = dlUrl;
          document.body.appendChild(iframe);
          setTimeout(() => iframe.remove(), 60000);
          return true;
        }
      } catch (_) {}
    }
    const postEndpoint = (opts && opts.downloadEndpoint)
      || (opts && opts.hubBase ? `${String(opts.hubBase).replace(/\/+$/, '')}/api/remotes/download` : '/api/remotes/download');
    if (postEndpoint && !root.__MLRS_STAGE_DOWNLOAD) {
      submitPostDownloadForm(postEndpoint, safeName, text);
      return true;
    }
    if (typeof window !== 'undefined' && typeof window.showSaveFilePicker === 'function') {
      try {
        const ext = safeName.endsWith('.json') ? '.json' : '.svg';
        const handle = await window.showSaveFilePicker({
          suggestedName: safeName,
          types: [{ description: ext === '.json' ? 'POD JSON' : '1:1 Vector SVG', accept: { [mime]: [ext] } }]
        });
        const writable = await handle.createWritable();
        await writable.write(text);
        await writable.close();
        return true;
      } catch (err) {
        if (err && err.name === 'AbortError') return false;
      }
    }
    try {
      const b64 = btoa(unescape(encodeURIComponent(text)));
      const a = document.createElement('a');
      a.href = `data:application/octet-stream;base64,${b64}`;
      a.setAttribute('download', safeName);
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => a.remove(), 4000);
      return true;
    } catch (_) {
      const blob = new Blob([text], { type: 'application/octet-stream' });
      const bUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = bUrl;
      a.setAttribute('download', safeName);
      document.body.appendChild(a);
      a.click();
      setTimeout(() => { a.remove(); URL.revokeObjectURL(bUrl); }, 120000);
      return true;
    }
  }

  function mountShowcaseTour(containerEl, opts) {
    injectStudioStyles(containerEl);
    if (!containerEl || !opts || !Array.isArray(opts.steps) || !opts.steps.length) return null;
    const scopeRoot = opts.scopeEl || document;
    const storageKey = `mlrs_tour_${opts.tourId || 'default'}`;
    let idx = Number(localStorage.getItem(storageKey + '_idx') || 0);
    if (idx < 0 || idx >= opts.steps.length) idx = 0;
    let hidden = localStorage.getItem(storageKey + '_hide') === '1';

    function clearHighlights() {
      scopeRoot.querySelectorAll('.mlrs-tour-focus').forEach(el => el.classList.remove('mlrs-tour-focus'));
    }

    function applyHighlight(step) {
      clearHighlights();
      if (hidden || !step || !step.targetSelector) return;
      const target = scopeRoot.querySelector(step.targetSelector);
      if (target) {
        target.classList.add('mlrs-tour-focus');
        if (opts.autoScroll !== false && typeof target.scrollIntoView === 'function') {
          try { target.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); } catch (_) {}
        }
      }
    }

    function render(skipScroll) {
      if (hidden) {
        clearHighlights();
        containerEl.innerHTML = `<div style="display:flex;justify-content:flex-end;margin-bottom:8px"><button type="button" class="mlrs-tour-reopen" data-tour="open">🧭 Guided Build Path (${opts.steps.length} Steps: Bare Remote → Device-Linked Stencil)</button></div>`;
        const ob = containerEl.querySelector('[data-tour="open"]');
        if (ob) ob.onclick = () => { hidden = false; localStorage.setItem(storageKey + '_hide', '0'); render(); };
        return;
      }
      const step = opts.steps[idx];
      const hasValidator = typeof step.isComplete === 'function';
      const done = hasValidator ? Boolean(step.isComplete()) : false;
      const dotsHtml = opts.steps.map((st, di) => {
        const stDone = typeof st.isComplete === 'function' && st.isComplete();
        return `<span class="mlrs-tour-dot ${di === idx ? 'on' : ''}" style="${stDone && di !== idx ? 'background:#10b981;opacity:0.85' : ''}"></span>`;
      }).join('');

      const statusBadge = hasValidator
        ? (done
            ? `<span class="mlrs-tour-done-badge">✅ Step Validated — Click Next ▶</span>`
            : `<span class="mlrs-tour-pending-badge">🎯 Highlighted Area Active: ${step.hintShort || 'Complete highlighted control'}</span>`)
        : '';

      containerEl.innerHTML = `
        <div class="mlrs-tour-bar" style="${done ? 'border-color:#86efac;background:linear-gradient(90deg,rgba(220,252,231,0.45),var(--mlrs-bg))' : ''}">
          <div style="display:flex;align-items:flex-start;gap:10px;min-width:0;flex:1">
            <span style="font-size:18px;line-height:1;margin-top:2px">${done ? '✅' : '🧭'}</span>
            <div style="min-width:0;flex:1">
              <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:2px">
                <span style="font-size:10.5px;font-weight:800;text-transform:uppercase;letter-spacing:0.5px;color:var(--mlrs-primary)">GUIDED PATH ${idx + 1} OF ${opts.steps.length}</span>
                <span style="font-size:12.5px;font-weight:700;color:var(--mlrs-fg)">${step.title}</span>
                <span style="display:inline-flex;gap:4px;align-items:center">${dotsHtml}</span>
                ${statusBadge}
              </div>
              <div style="font-size:11.5px;color:var(--mlrs-muted-fg);line-height:1.38">${step.body}</div>
            </div>
          </div>
          <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;flex-shrink:0">
            <button type="button" class="mlrs-btn" data-tour="prev" style="padding:4px 9px;font-size:11.5px">◀ Prev</button>
            ${step.actionLabel ? `<button type="button" class="mlrs-btn ${done ? '' : 'primary'}" data-tour="act" style="padding:4px 10px;font-size:11.5px">${step.actionLabel}</button>` : ''}
            <button type="button" class="mlrs-btn ${done ? 'primary' : ''}" data-tour="next" style="padding:4px 10px;font-size:11.5px">${idx === opts.steps.length - 1 ? 'Finish ✓' : 'Next ▶'}</button>
            <button type="button" class="mlrs-btn" data-tour="hide" style="padding:4px 8px;font-size:11.5px">✕ Hide</button>
          </div>
        </div>`;

      if (!skipScroll) applyHighlight(step);
      else {
        clearHighlights();
        const t = step.targetSelector ? scopeRoot.querySelector(step.targetSelector) : null;
        if (t) t.classList.add('mlrs-tour-focus');
      }

      containerEl.querySelector('[data-tour="prev"]').onclick = () => {
        idx = (idx - 1 + opts.steps.length) % opts.steps.length;
        localStorage.setItem(storageKey + '_idx', String(idx));
        if (opts.steps[idx].onEnter) opts.steps[idx].onEnter();
        render();
      };
      containerEl.querySelector('[data-tour="next"]').onclick = () => {
        if (idx === opts.steps.length - 1) {
          hidden = true;
          localStorage.setItem(storageKey + '_hide', '1');
          render();
          return;
        }
        idx = (idx + 1) % opts.steps.length;
        localStorage.setItem(storageKey + '_idx', String(idx));
        if (opts.steps[idx].onEnter) opts.steps[idx].onEnter();
        render();
      };
      containerEl.querySelector('[data-tour="hide"]').onclick = () => {
        hidden = true;
        localStorage.setItem(storageKey + '_hide', '1');
        render();
      };
      const actBtn = containerEl.querySelector('[data-tour="act"]');
      if (actBtn && typeof step.onAction === 'function') {
        actBtn.onclick = () => { step.onAction(); };
      }
    }

    render();
    return { refresh: () => render(true), clearHighlights };
  }

  // ============================================================================
  // 4. SMART DEVICE-TO-REMOTE RECOMMENDER & AUTO-BUILDER WIZARD
  // ============================================================================
  function inferDeviceProfile(dev) {
    const dom = String(dev.domain || 'light').toLowerCase();
    const nm = String(dev.name || dev.entity_id || 'Device').trim();
    const low = nm.toLowerCase();
    // Pick best icon + preferred interaction style ('slider' | 'multistep' | 'button')
    if (dom === 'cover' || /blind|shade|shutter|roller|awning/.test(low)) {
      const isCurt = /curtain|drape|sheer/.test(low);
      return { kind: 'slider', icon: isCurt ? 'curtains' : 'blinds', iconEnd: 'sun', sMin: isCurt ? 0 : 100, sMax: isCurt ? 100 : 0, arrows: 'chevron', badge: 'Slider (100\u21920%)' };
    }
    if (dom === 'fan' || /\bfan\b|ventil|exhaust/.test(low)) {
      return { kind: 'multistep', icon: /exhaust|vent/.test(low) ? 'extractor' : 'fan', steps: 6, unit: 'Spd', badge: 'Step 1\u20136 + Hold' };
    }
    if (dom === 'climate' || /\bac\b|aircon|split|climate|heat|hvac/.test(low)) {
      return { kind: 'multistep', icon: /heat|towel/.test(low) ? 'heater' : 'ac', steps: 5, unit: 'Temp', badge: 'Step 1\u20135 + Hold' };
    }
    if (dom === 'media_player' || /sonos|speaker|tv|cinema|audio|amp/.test(low)) {
      const isTv = /\btv\b|cinema|projector/.test(low);
      return isTv
        ? { kind: 'button', icon: 'tv', badge: 'Tap Toggle' }
        : { kind: 'slider', icon: 'speaker', iconEnd: 'music', sMin: 0, sMax: 80, arrows: 'dots', badge: 'Vol Slider (0\u219280%)' };
    }
    if (dom === 'scene' || dom === 'script') {
      return { kind: 'button', icon: /night|sleep/.test(low) ? 'moon' : (/morning|coffee/.test(low) ? 'coffee' : 'sparkles'), badge: 'Scene Tap' };
    }
    if (dom === 'light') {
      const ic = /strip|cove|led/.test(low) ? 'strip' : (/pendant|chandelier/.test(low) ? 'pendant' : (/lamp|bed/.test(low) ? 'lamp' : (/downlight|spot/.test(low) ? 'downlight' : 'bulb')));
      const dimmable = dev.dimmable !== false;
      return dimmable
        ? { kind: 'slider_or_zone', icon: ic, iconEnd: 'sun', sMin: 5, sMax: 100, arrows: 'dots', badge: 'Dimmer / Zone' }
        : { kind: 'button', icon: ic, badge: 'Light Toggle' };
    }
    const roomIco = /garag/.test(low) ? 'garage' : (/garden|patio|lawn/.test(low) ? 'garden' : (/lock|away/.test(low) ? 'lock' : 'power'));
    return { kind: 'button', icon: roomIco, badge: 'Tap Toggle' };
  }

  function cleanShortLabel(rawName) {
    return String(rawName || 'Device')
      .replace(/^\[Virtual\]\s*/i, '')
      .replace(/^MiBoxer 3D Smart Home Twin\s*/i, '')
      .replace(/\b(Z\d+|Light|Switch|Cover|Entity|Smart)\b/gi, '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 11) || 'Device';
  }

  function synthesizeRemoteForDevices(modelId, selectedDevs) {
    const Cat = root.MiBoxerCatalog;
    const baseModel = Cat.MODELS.find(m => m.id === modelId && !m.isCustom) || Cat.MODELS[0];
    const bp = Cat.getPanelBlueprint(baseModel);
    const dims = Cat.getPhysicalDims(baseModel);
    const tz = normalizeTouchZones(null);
    const pads = {};
    const bindings = [];

    const sliders = [];
    const stepsAndBtns = [];
    selectedDevs.forEach(d => {
      const prof = Object.assign({}, inferDeviceProfile(d), d.overrideKind ? { kind: d.overrideKind } : {});
      const item = { dev: d, prof, shortLbl: cleanShortLabel(d.name) };
      if (prof.kind === 'slider') sliders.push(item);
      else if (prof.kind === 'slider_or_zone') {
        // Put up to 3 primary dimmable lights onto sliders if space allows, rest onto zone rockers/buttons
        if (sliders.length < 3 && selectedDevs.length <= 8) sliders.push(Object.assign({}, item, { prof: Object.assign({}, prof, { kind: 'slider' }) }));
        else stepsAndBtns.push(item);
      } else {
        stepsAndBtns.push(item);
      }
    });

    // Discover physical surfaces on this candidate model
    const ringSlot = bp.slots.find(s => s.surf === 'hue_ring' && s.type === 'ring');
    const hHueSlot = bp.slots.find(s => s.surf === 'hue_ring' && s.type === 'hbar');
    const barSlots = bp.slots.filter(s => s.surf && s.surf !== 'hue_ring');
    const allSegSurfaces = [];
    if (ringSlot) allSegSurfaces.push({ surf: 'hue_ring', pref: 'hue_seg_', maxSlider: 4, maxBtn: 6, isRing: true });
    if (hHueSlot) allSegSurfaces.push({ surf: 'hue_ring', pref: 'hue_seg_', maxSlider: 3, maxBtn: 4, isRing: false });
    barSlots.forEach(bs => {
      const pref = bs.surf.split('_')[0] + '_seg_';
      allSegSurfaces.push({ surf: bs.surf, pref, maxSlider: 2, maxBtn: 4, isRing: false, slotKey: bs.key });
    });

    const discreteSlots = bp.slots.filter(s => !s.surf && s.key !== 'btn_on' && s.key !== 'btn_off');
    const onOffSlots = bp.slots.filter(s => s.key === 'btn_on' || s.key === 'btn_off');

    // Allocate sliders first across unsplit bars (if 1 slider fits a bar cleanly) or segmented rings/bars!
    const sliderQueue = sliders.slice();
    const btnQueue = stepsAndBtns.slice();

    allSegSurfaces.forEach(sf => {
      if (!sliderQueue.length && btnQueue.length <= discreteSlots.length) return;
      if (sliderQueue.length >= 1 && !sf.isRing && sliderQueue.length === 1 && sf.slotKey) {
        // Use full unsplit bar as a sleek dedicated Custom Stencil Slider!
        const it = sliderQueue.shift();
        pads[sf.slotKey] = {
          customTrack: true, segmentMode: 'slider',
          label: it.shortLbl, sublabel: `${it.prof.sMin ?? 0}\u2192${it.prof.sMax ?? 100}%`,
          icon: it.prof.icon, iconEnd: it.prof.iconEnd || 'sun', iconPos: 'both',
          sliderMin: it.prof.sMin ?? 0, sliderMax: it.prof.sMax ?? 100,
          sliderPitch: 2.0, sliderArrows: it.prof.arrows || 'chevron', luminous: true
        };
        bindings.push({ slot: sf.slotKey, gesture: 'slider', entity_id: it.dev.entity_id, label: it.dev.name });
        return;
      }
      // Otherwise segment this ring/bar to hold sliders + overflow step/toggle buttons
      const wantFromSliders = Math.min(sf.maxSlider, sliderQueue.length);
      const overflowBtns = Math.max(0, btnQueue.length - discreteSlots.length);
      const wantTotal = Math.min(sf.maxBtn, Math.max(wantFromSliders > 0 ? Math.max(2, wantFromSliders) : 0, wantFromSliders + Math.min(sf.maxBtn - wantFromSliders, overflowBtns)));
      if (wantTotal >= 2) {
        tz[sf.surf].enabled = true;
        tz[sf.surf].segments = wantTotal;
        if (sf.isRing) tz[sf.surf].offset_deg = wantTotal === 4 ? -45 : -30;
        tz[sf.surf].labels = [];
        for (let i = 0; i < wantTotal; i++) {
          const sKey = `${sf.pref}${i + 1}`;
          const it = sliderQueue.shift() || btnQueue.shift();
          if (!it) {
            pads[sKey] = { style: 'blank' };
            tz[sf.surf].labels.push('');
            continue;
          }
          tz[sf.surf].labels.push(it.shortLbl);
          if (it.prof.kind === 'slider') {
            pads[sKey] = {
              segmentMode: 'slider', label: it.shortLbl,
              sublabel: `${it.prof.sMin ?? 0}\u2192${it.prof.sMax ?? 100}%`,
              icon: it.prof.icon, iconEnd: it.prof.iconEnd || 'sun', iconPos: 'both',
              sliderMin: it.prof.sMin ?? 0, sliderMax: it.prof.sMax ?? 100,
              sliderPitch: 2.1, sliderArrows: it.prof.arrows || 'chevron', luminous: i === 0
            };
            bindings.push({ slot: sKey, gesture: 'slider', entity_id: it.dev.entity_id, label: it.dev.name });
          } else if (it.prof.kind === 'multistep') {
            pads[sKey] = {
              icon: it.prof.icon, iconPos: sf.isRing ? 'left' : 'top', label: it.shortLbl,
              sublabel: `1-${it.prof.steps || 5} \u2022 Hold`,
              multifunc: { enabled: true, steps: it.prof.steps || 5, unit: it.prof.unit || 'Spd' }
            };
            bindings.push({ slot: sKey, gesture: 'single_tap', entity_id: it.dev.entity_id, label: it.dev.name });
          } else {
            pads[sKey] = { icon: it.prof.icon, iconPos: sf.isRing ? 'left' : 'top', label: it.shortLbl };
            bindings.push({ slot: sKey, gesture: 'single_tap', entity_id: it.dev.entity_id, label: it.dev.name });
          }
        }
      }
    });

    // Any remaining slider items degrade gracefully to multi-step pads on discrete buttons
    const remAll = sliderQueue.concat(btnQueue);
    const allBtnTargets = discreteSlots.concat(onOffSlots);
    if (onOffSlots.find(s => s.key === 'btn_on') && remAll.length <= discreteSlots.length) {
      pads.btn_on = { icon: 'power', label: 'All ON', luminous: true };
    }
    if (onOffSlots.find(s => s.key === 'btn_off') && remAll.length <= discreteSlots.length) {
      pads.btn_off = { icon: 'moon', label: 'All OFF' };
    }

    allBtnTargets.forEach(sl => {
      if (pads[sl.key]) return;
      const it = remAll.shift();
      if (!it) {
        // Mask unused extra buttons cleanly so the stencil looks bespoke!
        pads[sl.key] = { style: 'blank' };
        return;
      }
      if (it.prof.kind === 'multistep' || it.prof.kind === 'slider') {
        pads[sl.key] = {
          icon: it.prof.icon, label: it.shortLbl,
          multifunc: { enabled: true, steps: it.prof.steps || 5, unit: it.prof.unit || 'Lvl' }
        };
      } else {
        pads[sl.key] = { icon: it.prof.icon, label: it.shortLbl };
      }
      bindings.push({ slot: sl.key, gesture: 'single_tap', entity_id: it.dev.entity_id, label: it.dev.name });
    });

    const unplacedCount = remAll.length;
    const totalCap = allBtnTargets.length + allSegSurfaces.reduce((acc, s) => acc + s.maxBtn, 0);
    // Score fit quality (0..99)
    let score = 96;
    if (unplacedCount > 0) score -= unplacedCount * 18;
    const ratio = selectedDevs.length / Math.max(1, discreteSlots.length + allSegSurfaces.length * 3);
    if (ratio < 0.32) score -= Math.round((0.32 - ratio) * 45); // Penalize oversized remote for 1-2 devices
    if (sliders.length > 0 && allSegSurfaces.length === 0) score -= 25;
    if (sliders.length >= 3 && baseModel.id === 'B8') score += 5;
    if (selectedDevs.length <= 5 && (baseModel.id === 'B0' || baseModel.id === 'B3' || baseModel.id === 'K6')) score += 4;
    score = Math.max(35, Math.min(99, score));

    const facia = {
      v: 2, enabled: true,
      theme: baseModel.finish === 'black' ? 'matte_black' : 'pure_white',
      fontFamily: 'geometric', fontScale: 100,
      panelTitle: `${selectedDevs.length}-DEVICE SMART PANEL`,
      defaultPadStyle: 'keycap', showLedPinhole: true, hideLogo: true,
      luminous: { enabled: true, border: true, header: true, slots: false },
      pads
    };

    const summaryReason = unplacedCount === 0
      ? `Fits all ${selectedDevs.length} selected device(s) (${sliders.length} variable slider${sliders.length === 1 ? '' : 's'} + ${selectedDevs.length - sliders.length} tap/step pad${selectedDevs.length - sliders.length === 1 ? '' : 's'}) on ${dims.width_mm}\u00d7${dims.height_mm} mm ${dims.form_factor || 'glass'}.`
      : `Places ${selectedDevs.length - unplacedCount} of ${selectedDevs.length} devices (${unplacedCount} overflow \u2014 pick B8 or FUT089 for higher capacity).`;

    return { model: baseModel, dims, score, unplacedCount, totalCap, tz, facia, bindings, summaryReason };
  }

  function openDeviceRecommenderWizard(opts) {
    injectStudioStyles();
    const o = opts || {};
    const Cat = root.MiBoxerCatalog;

    // Seed device list from HA / Homebridge entities (or rich starter catalog if standalone/empty)
    let rawDevs = Array.isArray(o.devices) ? o.devices.slice() : [];
    if (!rawDevs.length) {
      rawDevs = [
        { entity_id: 'cover.living_roller_blinds', name: 'Living Blinds', domain: 'cover' },
        { entity_id: 'cover.sheer_curtains', name: 'Sheer Curtains', domain: 'cover' },
        { entity_id: 'fan.ceiling_fan', name: 'Ceiling Fan', domain: 'fan' },
        { entity_id: 'climate.split_system_ac', name: 'Split AC', domain: 'climate' },
        { entity_id: 'light.lounge_downlights', name: 'Lounge Lights', domain: 'light', dimmable: true },
        { entity_id: 'light.kitchen_island', name: 'Kitchen Pendant', domain: 'light', dimmable: true },
        { entity_id: 'media_player.living_sonos', name: 'Living Sonos', domain: 'media_player' },
        { entity_id: 'scene.movie_night', name: 'Cinema Scene', domain: 'scene' }
      ];
    }

    const selectedMap = new Map();
    // Pre-select up to 5 diverse sample devices on first open so recommendations render live immediately!
    const seenDom = new Set();
    rawDevs.forEach(d => {
      if (selectedMap.size < 5 && !seenDom.has(d.domain)) {
        seenDom.add(d.domain);
        selectedMap.set(d.entity_id, Object.assign({}, d));
      }
    });
    if (selectedMap.size < 3) {
      rawDevs.slice(0, 4).forEach(d => selectedMap.set(d.entity_id, Object.assign({}, d)));
    }

    let filterDom = 'all';
    let searchTxt = '';
    const candidateModelIds = ['B8', 'B0', 'B4', 'B3', 'U3', 'M4', 'K6', 'FUT089'];

    const backdrop = document.createElement('div');
    backdrop.className = 'mlrs-modal-backdrop' + (isHostDark() ? ' mlrs-dark' : '');

    function renderWiz() {
      const selArr = Array.from(selectedMap.values());
      const recs = candidateModelIds
        .map(mid => synthesizeRemoteForDevices(mid, selArr))
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);

      const domains = ['all', ...Array.from(new Set(rawDevs.map(d => d.domain)))];
      const filteredDevs = rawDevs.filter(d => {
        if (filterDom !== 'all' && d.domain !== filterDom) return false;
        if (searchTxt && !`${d.name} ${d.entity_id} ${d.domain}`.toLowerCase().includes(searchTxt.toLowerCase())) return false;
        return true;
      });

      backdrop.innerHTML = `
        <div class="mlrs-modal" style="max-width:1440px;height:90vh" onclick="event.stopPropagation()">
          <div class="mlrs-topbar">
            <div>
              <div style="font-size:16px;font-weight:800">\uD83E\uDE84 Smart Device-to-Remote Recommender &amp; Auto-Builder</div>
              <div style="font-size:12px;color:var(--mlrs-muted-fg);margin-top:2px">Tick the Home Assistant / Homebridge devices you want on one remote \u2014 we rank the best-fit MiBoxer hardware &amp; pre-build your custom stencil!</div>
            </div>
            <button type="button" class="mlrs-btn" id="mlrsWizClose">\u2715 Close</button>
          </div>

          <div style="display:grid;grid-template-columns:minmax(330px, 410px) 1fr;flex:1;min-height:0;overflow:hidden">
            <!-- LEFT: Device Picker & Custom Slot Adder -->
            <div class="mlrs-col" style="display:flex;flex-direction:column;gap:8px">
              <div class="mlrs-sec-title" style="margin:0">1. Select Devices to Put on One Remote (${selArr.length} chosen)</div>
              <div style="display:flex;gap:6px">
                <input type="text" class="mlrs-input" id="mlrsWizSearch" placeholder="Search lights, blinds, fans, AC, Sonos\u2026" value="${searchTxt.replace(/"/g, '&quot;')}"/>
                <button type="button" class="mlrs-btn" id="mlrsWizClearSel" style="white-space:nowrap;padding:4px 8px;font-size:11px">Clear</button>
              </div>
              <div style="display:flex;gap:4px;flex-wrap:wrap">
                ${domains.map(dm => `<button type="button" class="mlrs-btn ${filterDom === dm ? 'active-tab' : ''}" data-wiz-dom="${dm}" style="padding:3px 8px;font-size:11px;text-transform:capitalize">${dm === 'all' ? 'All (' + rawDevs.length + ')' : dm}</button>`).join('')}
              </div>

              <div style="flex:1;min-height:160px;overflow-y:auto;border:1px solid var(--mlrs-border);border-radius:8px;padding:6px;background:var(--mlrs-muted)">
                ${filteredDevs.slice(0, 80).map(d => {
                  const checked = selectedMap.has(d.entity_id);
                  const chosenObj = selectedMap.get(d.entity_id) || d;
                  const prof = inferDeviceProfile(chosenObj);
                  const effKind = chosenObj.overrideKind || (prof.kind === 'slider_or_zone' ? 'slider' : prof.kind);
                  return `<div style="display:flex;align-items:center;justify-content:space-between;gap:6px;padding:6px 7px;margin-bottom:4px;border-radius:6px;background:var(--mlrs-bg);border:1px solid ${checked ? '#0284c7' : 'var(--mlrs-border)'}">
                    <label style="display:flex;align-items:center;gap:7px;cursor:pointer;min-width:0;flex:1;margin:0">
                      <input type="checkbox" data-wiz-chk="${d.entity_id.replace(/"/g, '&quot;')}" ${checked ? 'checked' : ''}/>
                      <span style="min-width:0;flex:1">
                        <span style="display:block;font-size:12px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${d.name}</span>
                        <span style="display:block;font-size:10px;color:var(--mlrs-muted-fg)">${d.domain} \u2022 ${d.entity_id}</span>
                      </span>
                    </label>
                    ${checked ? `
                      <select class="mlrs-select" data-wiz-kind="${d.entity_id.replace(/"/g, '&quot;')}" style="width:108px;padding:2px 5px;font-size:10.5px">
                        <option value="slider" ${effKind === 'slider' ? 'selected' : ''}>\uD83C\uDF9A\uFE0F Slider</option>
                        <option value="multistep" ${effKind === 'multistep' ? 'selected' : ''}>\uD83D\uDD22 Step Cycle</option>
                        <option value="button" ${effKind === 'button' ? 'selected' : ''}>\uD83D\uDD18 Tap Button</option>
                      </select>
                    ` : `<span style="font-size:10px;color:var(--mlrs-muted-fg);white-space:nowrap">${prof.badge}</span>`}
                  </div>`;
                }).join('')}
              </div>

              <div class="mlrs-box-sub" style="margin:0">
                <div style="font-size:11px;font-weight:700;margin-bottom:4px">Planning ahead? Add a custom device slot:</div>
                <div style="display:flex;gap:5px">
                  <input type="text" class="mlrs-input" id="mlrsWizCustomName" placeholder="e.g. Patio Pergola Louvres" style="padding:4px 7px;font-size:11.5px"/>
                  <select class="mlrs-select" id="mlrsWizCustomDom" style="width:98px;padding:4px 5px;font-size:11px">
                    <option value="cover">Blinds</option>
                    <option value="light">Light</option>
                    <option value="fan">Fan</option>
                    <option value="climate">AC</option>
                    <option value="media_player">Audio</option>
                    <option value="scene">Scene</option>
                  </select>
                  <button type="button" class="mlrs-btn primary" id="mlrsWizAddCustom" style="padding:4px 9px;font-size:11.5px">+ Add</button>
                </div>
              </div>
            </div>

            <!-- RIGHT: Top 3 Ranked MiBoxer Remotes + Live Pre-Configured Stencil Previews -->
            <div style="padding:14px 18px;overflow-y:auto;background:var(--mlrs-muted)">
              <div class="mlrs-sec-title">2. Best-Fit MiBoxer Remotes &amp; Auto-Built Stencil Layouts (Click to Use or Edit)</div>
              ${selArr.length === 0 ? `<div class="mlrs-box-sub" style="background:var(--mlrs-bg);padding:24px;text-align:center">Tick one or more devices on the left to generate ranked hardware &amp; stencil recommendations!</div>` : `
                <div style="display:grid;grid-template-columns:repeat(auto-fit, minmax(290px, 1fr));gap:12px">
                  ${recs.map((rc, rIdx) => {
                    const svgHtml = Cat.renderCapacitiveStencilSvg(rc.model, {
                      size: 'large', uid: `wiz_rec_${rIdx}`, facia: rc.facia, touchZones: rc.tz, activeZone: 1
                    });
                    return `<div style="background:var(--mlrs-bg);border:${rIdx === 0 ? '2px solid #0284c7' : '1px solid var(--mlrs-border)'};border-radius:12px;padding:12px 14px;display:flex;flex-direction:column;justify-content:space-between;box-shadow:0 3px 10px rgba(15,23,42,0.05)">
                      <div>
                        <div style="display:flex;align-items:center;justify-content:space-between;gap:6px;margin-bottom:4px">
                          <span style="font-size:13.5px;font-weight:800">${rIdx === 0 ? '\uD83C\uDFC6 #1 Best Match: ' : '#' + (rIdx + 1) + ' '}MiBoxer ${rc.model.id}</span>
                          <span style="padding:2px 8px;border-radius:999px;font-size:11px;font-weight:800;background:${rIdx === 0 ? '#dcfce7' : '#e0f2fe'};color:${rIdx === 0 ? '#166534' : '#0369a1'}">${rc.score}% Fit</span>
                        </div>
                        <div style="font-size:11px;color:var(--mlrs-muted-fg);margin-bottom:8px;line-height:1.38">${rc.summaryReason}</div>
                        <div style="display:flex;align-items:center;justify-content:center;background:var(--mlrs-muted);border:1px solid var(--mlrs-border);border-radius:9px;padding:10px;height:275px;overflow:hidden">
                          <div style="height:100%;display:flex;align-items:center;justify-content:center">${svgHtml.replace(/<svg /, '<svg style="max-height:252px;width:auto;max-width:100%" ')}</div>
                        </div>
                        <div style="margin-top:8px;font-size:10.5px;color:var(--mlrs-muted-fg)">
                          <b>Auto-mapped (${rc.bindings.length}):</b> ${rc.bindings.slice(0, 6).map(b => `<code style="background:var(--mlrs-muted);padding:1px 4px;border-radius:3px">${b.slot}\u2192${cleanShortLabel(b.label)}</code>`).join(' ')}${rc.bindings.length > 6 ? ` +${rc.bindings.length - 6} more` : ''}
                        </div>
                      </div>
                      <div style="display:flex;gap:6px;margin-top:10px;flex-wrap:wrap">
                        <button type="button" class="mlrs-btn primary" data-wiz-edit="${rIdx}" style="flex:1;justify-content:center;font-size:11.5px">\uD83C\uDFA8 Open &amp; Edit in Stencil Studio</button>
                        <button type="button" class="mlrs-btn" data-wiz-apply="${rIdx}" style="justify-content:center;font-size:11.5px;border-color:#059669;color:#059669;font-weight:700">\u2705 Use As-Is</button>
                      </div>
                    </div>`;
                  }).join('')}
                </div>
              `}
            </div>
          </div>
        </div>`;

      backdrop.querySelector('#mlrsWizClose').onclick = () => backdrop.remove();
      const sInp = backdrop.querySelector('#mlrsWizSearch');
      if (sInp) {
        sInp.oninput = (e) => { searchTxt = e.target.value; renderWiz(); const el2 = backdrop.querySelector('#mlrsWizSearch'); if (el2) { el2.focus(); el2.setSelectionRange(searchTxt.length, searchTxt.length); } };
      }
      backdrop.querySelector('#mlrsWizClearSel').onclick = () => { selectedMap.clear(); renderWiz(); };
      backdrop.querySelectorAll('[data-wiz-dom]').forEach(b => {
        b.onclick = () => { filterDom = b.getAttribute('data-wiz-dom'); renderWiz(); };
      });
      backdrop.querySelectorAll('[data-wiz-chk]').forEach(chk => {
        chk.onchange = () => {
          const eid = chk.getAttribute('data-wiz-chk');
          const dObj = rawDevs.find(x => x.entity_id === eid);
          if (chk.checked && dObj) selectedMap.set(eid, Object.assign({}, dObj));
          else selectedMap.delete(eid);
          renderWiz();
        };
      });
      backdrop.querySelectorAll('[data-wiz-kind]').forEach(sel => {
        sel.onchange = () => {
          const eid = sel.getAttribute('data-wiz-kind');
          const cur = selectedMap.get(eid);
          if (cur) { cur.overrideKind = sel.value; renderWiz(); }
        };
      });
      backdrop.querySelector('#mlrsWizAddCustom').onclick = () => {
        const nm = (backdrop.querySelector('#mlrsWizCustomName').value || '').trim();
        const dm = backdrop.querySelector('#mlrsWizCustomDom').value || 'light';
        if (!nm) return;
        const eid = `${dm}.custom_${nm.toLowerCase().replace(/[^a-z0-9]+/g, '_')}`;
        const newDev = { entity_id: eid, name: nm, domain: dm, dimmable: true };
        rawDevs.unshift(newDev);
        selectedMap.set(eid, newDev);
        renderWiz();
      };

      // Action 1: Open in Stencil Studio to fine-tune (background photo, glow, labels)
      backdrop.querySelectorAll('[data-wiz-edit]').forEach(btn => {
        btn.onclick = () => {
          const rc = recs[Number(btn.getAttribute('data-wiz-edit'))];
          if (!rc) return;
          backdrop.remove();
          openFaciaDesigner({
            model: rc.model,
            hexId: o.hexId || '',
            remoteName: `${rc.model.id} ${selArr.length}-Device Custom`,
            facia: rc.facia,
            touchZones: rc.tz,
            hubUrl: o.hubUrl || '',
            bindRemoteByDefault: Boolean(o.hexId),
            onSaveCustomModel: async (saveRes) => {
              saveRes.customModel.suggested_bindings = rc.bindings;
              if (typeof o.onSaveCustomModel === 'function') await o.onSaveCustomModel(saveRes, rc.bindings);
            }
          });
        };
      });

      // Action 2: Use As-Is right away!
      backdrop.querySelectorAll('[data-wiz-apply]').forEach(btn => {
        btn.onclick = async () => {
          const rc = recs[Number(btn.getAttribute('data-wiz-apply'))];
          if (!rc) return;
          const cleanName = `${rc.model.id} ${selArr.length}-Device Smart Panel`;
          const targetId = slugifyCustomId(rc.model.id, cleanName);
          const payload = {
            id: targetId,
            name: cleanName,
            base_model: rc.model.id,
            stencil_mode: 'full_panel',
            facia: rc.facia,
            touch_zones: rc.tz,
            suggested_bindings: rc.bindings
          };
          if (Cat.upsertCustomModel) Cat.upsertCustomModel(payload);
          if (typeof o.onSaveCustomModel === 'function') {
            await o.onSaveCustomModel({ customModel: payload, bindNow: Boolean(o.hexId), calibration: defaultCalibration(), touchZones: rc.tz, facia: rc.facia }, rc.bindings);
          }
          backdrop.remove();
        };
      });
    }

    document.body.appendChild(backdrop);
    renderWiz();
    return backdrop;
  }

  function mountWorkflowLauncher(containerEl, handlers) {
    injectStudioStyles(containerEl);
    if (!containerEl) return null;
    const h = handlers || {};
    const storeKey = `mlrs_wf_launcher_${h.launcherId || 'main'}_collapsed`;
    let collapsed = localStorage.getItem(storeKey) === '1';

    const wipCount = loadWipDrafts().length;
    const items = [
      {
        id: 'recommender',
        icon: '\uD83E\uDE84',
        title: 'Recommend Remote for My Devices',
        desc: 'Pick your lights, blinds, fans & AC \u2014 auto-ranks the best MiBoxer remotes & builds the stencil!',
        run: () => h.onOpenRecommender ? h.onOpenRecommender() : openDeviceRecommenderWizard({})
      },
      {
        id: 'bare',
        icon: '\uD83E\uDDFC',
        title: 'Build Remote from Bare Glass',
        desc: 'Validated 6-step walkthrough: add custom background artwork, X\u2013Y% sliders & dual icons.',
        run: () => h.onOpenStencil && h.onOpenStencil('bare_walkthrough')
      },
      {
        id: 'template_or_wip',
        icon: wipCount > 0 ? '\uD83D\uDCC2' : '\u2728',
        title: wipCount > 0 ? `Resume WIP Draft (${wipCount}) or Template` : 'Create from Starter Template',
        desc: wipCount > 0 ? `Jump right back into your saved work-in-progress stencil draft (or pick a template).` : 'Start from a Hybrid Arc + Bar Slider or Room Rocker template and customise labels & glow.',
        run: () => h.onOpenStencil && h.onOpenStencil(wipCount > 0 ? 'resume_draft' : 'template_edit')
      },
      {
        id: 'mapper',
        icon: '\uD83C\uDF9B\uFE0F',
        title: 'Map Buttons & Sliders to Devices',
        desc: 'Bind 1\u00d7 Tap, 2\u00d7 Double, Long Hold & variable slider ranges to HA / Homebridge entities.',
        run: () => h.onFocusMapper && h.onFocusMapper()
      },
      {
        id: 'showcase',
        icon: '\uD83E\uDDED',
        title: 'Guided Studio Showcase',
        desc: 'Interactive tour of live 2.4 GHz RF reticles, Peel-Back Stencil X-Ray & Dark-Room Glow.',
        run: () => h.onStartShowcase && h.onStartShowcase()
      },
      {
        id: 'export_pod',
        icon: '\uD83D\uDDA8\uFE0F',
        title: '1:1 Print Sheet & Luminous POD',
        desc: 'Generate a calibrated 1:1 mm cut sheet (with background graphic), SVG, or POD JSON.',
        run: () => h.onOpenStencil && h.onOpenStencil('export_pod')
      }
    ];

    function render() {
      if (collapsed) {
        containerEl.innerHTML = `
          <div style="display:flex;align-items:center;justify-content:space-between;background:var(--mlrs-bg,#fff);border:1px solid var(--mlrs-border,#e2e8f0);border-radius:8px;padding:6px 12px;margin-bottom:8px;font-size:12px">
            <span style="font-weight:700;color:var(--mlrs-fg,#0f172a)">\ud83e\udded What would you like to do today? <span style="font-weight:500;color:var(--mlrs-muted-fg,#64748b)">(Bare Build Walkthrough, Templates, Device Mapping, POD Export)</span></span>
            <button type="button" class="mlrs-tour-btn demo" data-wf-toggle="open" style="padding:3px 10px !important;font-size:11.5px !important">Show 6 Workflows \u25be</button>
          </div>`;
        const btn = containerEl.querySelector('[data-wf-toggle="open"]');
        if (btn) btn.onclick = () => { collapsed = false; localStorage.setItem(storeKey, '0'); render(); };
        return;
      }

      containerEl.innerHTML = `
        <div class="mlrs-launcher-card">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap">
            <div>
              <span style="font-size:13.5px;font-weight:800;color:var(--mlrs-fg,#0f172a)">\ud83d\udc4b What would you like to do today?</span>
              <span style="font-size:11.5px;color:var(--mlrs-muted-fg,#64748b);margin-left:6px">Pick a guided workflow below to jump straight in:</span>
            </div>
            <button type="button" class="mlrs-tour-btn" data-wf-toggle="close" style="padding:3px 9px !important;font-size:11px !important">Hide Options \u25b4</button>
          </div>
          <div class="mlrs-launcher-grid">
            ${items.map(it => `
              <button type="button" class="mlrs-wf-item" data-wf-id="${it.id}">
                <span class="mlrs-wf-ico">${it.icon}</span>
                <span style="min-width:0;flex:1">
                  <span style="display:block;font-size:12px;font-weight:700;color:var(--mlrs-fg,#0f172a);margin-bottom:2px">${it.title}</span>
                  <span style="display:block;font-size:11px;color:var(--mlrs-muted-fg,#64748b);line-height:1.34">${it.desc}</span>
                </span>
              </button>
            `).join('')}
          </div>
        </div>`;

      const closeBtn = containerEl.querySelector('[data-wf-toggle="close"]');
      if (closeBtn) closeBtn.onclick = () => { collapsed = true; localStorage.setItem(storeKey, '1'); render(); };
      containerEl.querySelectorAll('[data-wf-id]').forEach(el => {
        el.onclick = () => {
          const found = items.find(x => x.id === el.getAttribute('data-wf-id'));
          if (found && found.run) found.run();
        };
      });
    }

    render();
    return { expand: () => { collapsed = false; localStorage.setItem(storeKey, '0'); render(); } };
  }

  root.MiLightRemoteStudio = {
    version: '2.5.0',
    normalizeTouchZones, defaultCalibration, resolvePhysicalToCustomAction, resolveCustomToPhysicalAction, mountInteractiveStage, mountPeelableStage, downloadTextFile, mountShowcaseTour, mountWorkflowLauncher,
    buildPodOrderPayload, buildOneToOnePrintSvg, openPrintSheetWindow, openFaciaDesigner, openDeviceRecommenderWizard, loadWipDrafts
  };
})(typeof window !== 'undefined' ? window : globalThis);

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
    window.MiLightRemoteStudio.openFaciaDesigner({ initialWorkflow: (() => { const w = this._pendingStencilWorkflow || null; this._pendingStencilWorkflow = null; return w; })(),
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
      
      button, .btn, .pill-btn, [id*="Sync"], [id*="refreshBtn"], [id*="Stencil"] {
        transition: transform 0.1s ease, filter 0.15s ease, box-shadow 0.15s ease, background-color 0.2s ease !important;
      }
      button:hover:not(:disabled), .btn:hover:not(:disabled) { filter: brightness(1.07); }
      button:active:not(:disabled), .btn:active:not(:disabled) { transform: scale(0.95) !important; }
      .mrs-sync-flash-ok { background: #059669 !important; border-color: #059669 !important; color: #ffffff !important; box-shadow: 0 0 0 3px rgba(16,185,129,0.28) !important; }
      .mrs-sync-flash-warn { background: #d97706 !important; border-color: #d97706 !important; color: #ffffff !important; }
    
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
            <button id="openRecommenderWizBtn" type="button" style="background:#7c3aed;border-color:#7c3aed;color:#fff;font-weight:700">🪄 Recommend Remote</button>
            <button id="openHubStencilStudioBtn" type="button" style="background:#0f172a;color:#fff;">🎨 Stencil Studio</button>
            <button id="refreshBtn" type="button">🔄 Sync Remotes</button>
            <a href="${hubUrl}/#/remotes" target="_blank" rel="noreferrer" style="text-decoration:none;"><button class="sec" type="button">Hub #/remotes ↗</button></a>
            <button id="openTwinBtn" class="sec" type="button">🏠 3D Twin ↗</button>
          </div>
        </div>

        <!-- Dedicated Framed Guided Showcase Card -->
        <div id="mrsWorkflowLauncherMount"></div>
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
    this.querySelector("#refreshBtn").onclick = async (ev) => {
        const btn = ev && ev.currentTarget ? ev.currentTarget : (this.shadowRoot || this).querySelector('#refreshBtn');
        const origHtml = btn ? btn.innerHTML : '🔄 Sync Remotes';
        if (btn) { btn.disabled = true; btn.style.opacity = '0.85'; btn.innerHTML = '⏳ Syncing Hub…'; }
        try {
          await (this._loadRemotes());
          const cnt = Array.isArray(this._remotes) ? this._remotes.length : (this._remotes ? Object.keys(this._remotes).length : 0);
          if (btn) {
            btn.disabled = false; btn.style.opacity = '1';
            btn.classList.add('mrs-sync-flash-ok');
            btn.innerHTML = `✅ Synced (${cnt})!`;
            setTimeout(() => { if (btn.isConnected) { btn.classList.remove('mrs-sync-flash-ok'); btn.innerHTML = origHtml; } }, 2400);
          }
        } catch (err) {
          if (btn) {
            btn.disabled = false; btn.style.opacity = '1';
            btn.classList.add('mrs-sync-flash-warn');
            btn.innerHTML = '⚠️ Hub Offline';
            setTimeout(() => { if (btn.isConnected) { btn.classList.remove('mrs-sync-flash-warn'); btn.innerHTML = origHtml; } }, 3000);
          }
        }
      };
    window.__MLRS_STAGE_DOWNLOAD = async (filename, content, mime) => {
      if (!this._hass) return null;
      const res = await this._hass.callApi("POST", "milight_remote_studio/download_stage", { filename, content, mime });
      return res && res.url ? res.url : null;
    };

    
      const wfBox = (this.shadowRoot || this).querySelector('#mrsWorkflowLauncherMount');
      if (wfBox && window.MiLightRemoteStudio && window.MiLightRemoteStudio.mountWorkflowLauncher) {
        window.MiLightRemoteStudio.mountWorkflowLauncher(wfBox, {
          launcherId: 'ha_main_studio',
          onOpenRecommender: () => {
            const hObj = this._hass || this.hass || {};
            const statesMap = hObj.states || {};
            const allowedDoms = new Set(['light', 'cover', 'fan', 'climate', 'media_player', 'switch', 'scene', 'script']);
            const haDevs = Object.entries(statesMap)
              .filter(([eid]) => allowedDoms.has(eid.split('.')[0]))
              .map(([eid, st]) => ({
                entity_id: eid,
                domain: eid.split('.')[0],
                name: (st && st.attributes && st.attributes.friendly_name) || eid,
                dimmable: eid.startsWith('light.') ? Boolean(!st.attributes || !st.attributes.supported_color_modes || !st.attributes.supported_color_modes.every(m => m === 'onoff')) : true
              }));
            if (window.MiLightRemoteStudio && window.MiLightRemoteStudio.openDeviceRecommenderWizard) {
              window.MiLightRemoteStudio.openDeviceRecommenderWizard({
                devices: haDevs,
                hexId: this._selectedHex || '',
                hubUrl: this._hubUrl || '',
                onSaveCustomModel: async (res) => {
                  if (res && res.customModel && window.MiBoxerCatalog && window.MiBoxerCatalog.upsertCustomModel) {
                    window.MiBoxerCatalog.upsertCustomModel(res.customModel);
                  }
                  if (typeof this._saveCustomModelToBackend === 'function') {
                    try { await this._saveCustomModelToBackend(res); } catch (_) {}
                  }
                  if (typeof this._render === 'function') this._render();
                }
              });
            }
          },
          onOpenStencil: (wfMode) => {
            this._pendingStencilWorkflow = wfMode;
            const sb = (this.shadowRoot || this).querySelector('#openHubStencilStudioBtn');
            if (sb) sb.click();
          },
          onFocusMapper: () => {
            const mapperCol = (this.shadowRoot || this).querySelector('.col-right, [data-tab="mapper"], #mapperPane') || (this.shadowRoot || this).querySelectorAll('.card, section')[2];
            if (mapperCol) {
              mapperCol.classList.add('mlrs-tour-focus');
              mapperCol.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              setTimeout(() => mapperCol.classList.remove('mlrs-tour-focus'), 3600);
            }
          },
          onStartShowcase: () => {
            localStorage.setItem('mlrs_tour_ha_studio_hide', '0');
            localStorage.setItem('mlrs_tour_ha_studio_idx', '0');
            localStorage.setItem('mlrs_tour_main_studio_hide', '0');
            if (typeof this._render === 'function') this._render();
            else location.reload();
          },
          onSyncAndCalibrate: () => {
            const sy = (this.shadowRoot || this).querySelector('#refreshBtn');
            if (sy) sy.click();
          }
        });
      }

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
