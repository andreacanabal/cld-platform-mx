import { useEffect } from "react";
function initPixel(){if(typeof window==="undefined")return;!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');window.fbq('init','2114141419153674');window.fbq('init','1758556868674151');window.fbq('track','PageView');}
export default function App(){
  useEffect(()=>{
    const style=document.createElement("style");style.textContent=CSS;document.head.appendChild(style);
    let vp=document.querySelector('meta[name="viewport"]');if(!vp){vp=document.createElement("meta");vp.name="viewport";document.head.appendChild(vp);}vp.content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no";
    const link=document.createElement("link");link.rel="stylesheet";link.href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Sora:wght@400;600;700;800&display=swap";document.head.appendChild(link);
    document.title="CS-SHIELD | Recuperación Digital";
    initPixel();
    document.getElementById("cs-root").innerHTML=BODY_HTML;
    const script=document.createElement("script");script.textContent=MAIN_JS;document.body.appendChild(script);
    return()=>{try{document.head.removeChild(style);}catch(e){}};
  },[]);
  return <div id="cs-root"/>;
}
const CSS=`

/* ── SINGLE PRICE CARD ── */
.price-once-card {
  display:flex; align-items:center; justify-content:space-between;
  background:#1a0608; border:1.5px solid rgba(220,38,38,.4);
  border-radius:12px; padding:16px 18px; margin-bottom:14px;
  position:relative; overflow:hidden;
}
.price-once-card::before { content:''; position:absolute; top:0;left:0;right:0; height:2px; background:linear-gradient(90deg,#dc2626,#f87171,#fbbf24); }
.poc-left { display:flex; flex-direction:column; gap:3px; }
.poc-label { font-family:'IBM Plex Mono',monospace; font-size:10px; color:#fca5a5; letter-spacing:.12em; text-transform:uppercase; }
.poc-desc  { font-size:12px; color:#cbd5e1; }
.poc-right { display:flex; align-items:baseline; gap:3px; }
.poc-num   { font-family:'IBM Plex Mono',monospace; font-size:36px; font-weight:600; color:#f1f5f9; line-height:1; }
.poc-per   { font-family:'IBM Plex Mono',monospace; font-size:13px; color:#94a3b8; }

/* ── WA ONLY INFO ── */
.wa-only-info {
  display:flex; align-items:center; justify-content:center; gap:8px;
  background:rgba(37,211,102,.07); border:1px solid rgba(37,211,102,.2);
  border-radius:8px; padding:12px 16px; margin-bottom:14px;
  font-size:14px; color:#e2e8f0;
}
.wa-only-info strong { color:#4ade80; }

/* ── TERMS SMALL PRINT ── */
.terms-smallprint {
  font-family:'IBM Plex Mono',monospace; font-size:9px; color:#475569;
  text-align:center; letter-spacing:.04em; line-height:1.6; margin-top:10px;
}
.terms-link { color:#64748b; text-decoration:underline; cursor:pointer; }
.terms-link:hover { color:#94a3b8; }

/* ── TERMS SECTION ── */
.terms-section {
  padding:40px 20px; background:#030d18;
  border-top:1px solid rgba(59,130,246,.08);
}
.terms-title {
  font-family:'IBM Plex Mono',monospace; font-size:10px; color:#475569;
  letter-spacing:.15em; text-transform:uppercase; margin-bottom:14px;
  display:flex; align-items:center; gap:8px;
}
.terms-title::before,.terms-title::after { content:''; height:1px; width:20px; background:rgba(71,85,105,.4); }
.terms-text {
  font-family:'IBM Plex Mono',monospace; font-size:9px; color:#334155;
  line-height:1.8; letter-spacing:.02em; max-width:480px; margin:0 auto;
}
.terms-text p { margin-bottom:10px; }


/* ── TERMS COLLAPSIBLE ── */
.terms-toggle-bar {
  width:100%; background:#030a14;
  border-top:1px solid rgba(59,130,246,.08);
  padding:12px 20px;
  display:flex; align-items:center; justify-content:center; gap:10px;
  cursor:pointer; transition:background .2s;
  position:relative; z-index:1;
}
.terms-toggle-bar:hover { background:#04111f; }
.terms-toggle-label {
  font-family:'IBM Plex Mono',monospace;
  font-size:9px; color:#334155;
  letter-spacing:.12em; text-transform:uppercase;
}
.terms-toggle-icon {
  font-family:'IBM Plex Mono',monospace;
  font-size:9px; color:#334155;
  transition:transform .3s ease;
  display:inline-block;
}
.terms-drawer {
  background:#030a14;
  border-top:1px solid rgba(59,130,246,.06);
  max-height:0; overflow:hidden;
  transition:max-height .5s ease, padding .3s ease;
  padding:0 20px;
  position:relative; z-index:1;
}
.terms-drawer.open {
  max-height:1200px;
  padding:20px 20px 32px;
}
.terms-text {
  font-family:'IBM Plex Mono',monospace;
  font-size:9px; color:#334155;
  line-height:1.8; letter-spacing:.02em;
  max-width:480px; margin:0 auto;
}
.terms-text p { margin-bottom:10px; }
.terms-text strong { color:#475569; }
.terms-copy { color:#1e293b !important; margin-top:14px; }

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
html { scroll-behavior:smooth; }

body {
  background: #05111f;
  color: #f1f5f9;
  font-family: 'Sora', sans-serif;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}

.grid-layer {
  position: fixed; inset: 0; z-index: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(220,38,38,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(220,38,38,0.04) 1px, transparent 1px);
  background-size: 44px 44px;
}

header, section, footer, #scan-modal, #upsell-modal { position: relative; z-index: 1; }

/* ── HEADER ── */
header {
  position: fixed; top:0; left:0; right:0; z-index: 900;
  padding: 13px 18px;
  display: flex; align-items: center; justify-content: space-between;
  background: #05111f;
  border-bottom: 1px solid rgba(220,38,38,0.2);
}
.logo { display:flex; align-items:center; gap:10px; }
.logo-name {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 15px; font-weight:600; color: #f1f5f9; letter-spacing:.08em;
}
.logo-sub {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px; color: #fca5a5; letter-spacing:.15em; text-transform:uppercase;
}
.live-pill {
  display:flex; align-items:center; gap:6px;
  font-family:'IBM Plex Mono',monospace;
  font-size:10px; color:#4ade80;
  background:rgba(74,222,128,.1); border:1px solid rgba(74,222,128,.3);
  padding:5px 10px; border-radius:4px; letter-spacing:.1em;
}
.live-dot { width:7px; height:7px; border-radius:50%; background:#4ade80; animation:blink 1.8s infinite; }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }

/* ── HERO ── */
.hero {
  min-height: 100vh;
  padding: 76px 20px 28px;
  display:flex; flex-direction:column; justify-content:center; align-items:center;
  text-align: center;
  background: linear-gradient(160deg, #1a0608 0%, #05111f 55%);
}
.hero-chip {
  display:inline-flex; align-items:center; gap:7px;
  font-family:'IBM Plex Mono',monospace; font-size:9px; color:#fca5a5;
  background:rgba(220,38,38,.1); border:1px solid rgba(220,38,38,.3);
  padding:4px 10px; border-radius:4px; letter-spacing:.1em; text-transform:uppercase;
  margin-bottom:12px; width:fit-content;
}
.hero-title {
  font-size: clamp(22px,6vw,40px); font-weight:800;
  line-height:1.12; letter-spacing:-.02em; color:#f1f5f9; margin-bottom:10px;
  text-align:center;
}
.grad {
  background: linear-gradient(120deg,#f87171,#fbbf24);
  -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
}
.hero-sub {
  font-size:12px; color:#cbd5e1; line-height:1.6;
  margin-bottom:14px; font-weight:400; text-align:center;
  max-width:340px;
}
.benefits { display:flex; flex-direction:column; gap:6px; margin-bottom:16px; width:100%; max-width:380px; }
.benefit { display:flex; align-items:center; gap:9px; font-size:12px; color:#e2e8f0; font-weight:500; text-align:left; }
.bcheck {
  width:18px; height:18px; flex-shrink:0;
  background:rgba(34,197,94,.15); border:1px solid rgba(34,197,94,.4);
  border-radius:4px; display:flex; align-items:center; justify-content:center;
  color:#4ade80; font-size:10px;
}
.input-wrap { position:relative; margin-bottom:9px; width:100%; max-width:380px; }
.input-ico { position:absolute; left:14px; top:50%; transform:translateY(-50%); color:#f87171; pointer-events:none; }
#main-input {
  width:100%; background:#1a0608; border:1.5px solid rgba(220,38,38,.45);
  border-radius:9px; padding:13px 14px 13px 42px;
  font-family:'IBM Plex Mono',monospace; font-size:14px; color:#f1f5f9; outline:none; transition:all .25s;
}
#main-input::placeholder { color:#64748b; }
#main-input:focus { border-color:#f87171; box-shadow:0 0 0 3px rgba(248,113,113,.12); }
.cta-btn {
  width:100%; max-width:380px;
  background:linear-gradient(135deg,#15803d,#22c55e);
  border:none; border-radius:9px; padding:15px; cursor:pointer;
  font-family:'Sora',sans-serif; font-size:15px; font-weight:700;
  color:#fff; letter-spacing:.06em; text-transform:uppercase;
  box-shadow:0 4px 24px rgba(34,197,94,.4); transition:all .25s;
}
.cta-btn:hover { transform:translateY(-2px); box-shadow:0 6px 32px rgba(34,197,94,.55); }
.cta-btn:active { transform:translateY(0); }
.input-note {
  font-family:'IBM Plex Mono',monospace; font-size:9px; color:#64748b;
  text-align:center; letter-spacing:.06em; margin-top:7px;
}
.phone-label {
  font-family:'IBM Plex Mono',monospace;
  font-size:10px; color:#94a3b8;
  letter-spacing:.08em; text-transform:uppercase;
  margin-bottom:5px; text-align:center;
}
.pulse-btn { animation: pulse-green 2s infinite; }
@keyframes pulse-green {
  0%,100% { box-shadow:0 4px 24px rgba(34,197,94,.4), 0 0 0 0 rgba(34,197,94,.4); }
  50%      { box-shadow:0 6px 32px rgba(34,197,94,.55), 0 0 0 10px rgba(34,197,94,0); }
}
.trust-strip { display:flex; gap:14px; flex-wrap:wrap; margin-top:12px; justify-content:center; }
.trust-item { display:flex; align-items:center; gap:5px; font-family:'IBM Plex Mono',monospace; font-size:10px; color:#94a3b8; letter-spacing:.06em; text-transform:uppercase; }

/* ── STATS ── */
.stats-section {
  padding:44px 20px;
  background:#0f0505;
  border-top:1px solid rgba(220,38,38,.12);
  border-bottom:1px solid rgba(220,38,38,.12);
}
.stats-label { font-family:'IBM Plex Mono',monospace; font-size:10px; color:#fca5a5; text-align:center; letter-spacing:.2em; text-transform:uppercase; margin-bottom:24px; }
.stats-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:12px; }
.stat-card {
  background:#1a0608; border:1px solid rgba(220,38,38,.2);
  border-radius:10px; padding:20px 10px; text-align:center; position:relative; overflow:hidden;
}
.stat-card::before { content:''; position:absolute; top:0;left:0;right:0; height:2px; background:linear-gradient(90deg,transparent,#ef4444,transparent); }
.stat-num { font-family:'IBM Plex Mono',monospace; font-size:22px; font-weight:600; display:block; margin-bottom:4px; }
.stat-lbl { font-size:9px; color:#94a3b8; font-family:'IBM Plex Mono',monospace; letter-spacing:0; line-height:1; text-transform:uppercase; margin-top:4px; white-space:nowrap; }
.c-green{color:#4ade80} .c-cyan{color:#22d3ee} .c-red{color:#f87171}

/* ── HOW ── */
.how-section { padding:56px 20px; background: #05111f; }
.eyebrow {
  font-family:'IBM Plex Mono',monospace; font-size:10px; color:#fca5a5;
  letter-spacing:.2em; text-transform:uppercase; text-align:center; margin-bottom:10px;
  display:flex; align-items:center; justify-content:center; gap:10px;
}
.eyebrow::before,.eyebrow::after { content:''; height:1px; width:36px; background:rgba(220,38,38,.3); }
.sec-title { font-size:clamp(20px,5vw,32px); font-weight:700; text-align:center; margin-bottom:7px; letter-spacing:-.02em; color:#f1f5f9; }
.sec-sub { font-size:14px; color:#e2e8f0; text-align:center; margin-bottom:34px; line-height:1.6; }
.steps { display:flex; flex-direction:column; gap:14px; }
.step-card { background:#1a0608; border:1px solid rgba(220,38,38,.3); border-radius:11px; padding:20px; display:flex; gap:15px; align-items:flex-start; }
.step-num {
  width:38px; height:38px; flex-shrink:0;
  background:rgba(220,38,38,.15); border:1px solid rgba(220,38,38,.4); border-radius:8px;
  display:flex; align-items:center; justify-content:center;
  font-family:'IBM Plex Mono',monospace; font-size:14px; font-weight:600; color:#f87171;
}
.step-card h3 { font-size:15px; font-weight:700; color:#f1f5f9; margin-bottom:5px; }
.step-card p  { font-size:13px; color:#cbd5e1; line-height:1.6; }

/* ── PAY SECTION ── */
#pay-section { padding:56px 20px 40px; display:none; }
#pay-section.show { display:block; }
.pay-card {
  background:#0f0505; border:1px solid rgba(220,38,38,.35);
  border-radius:16px; padding:28px 22px; position:relative; overflow:hidden;
}
.pay-card::before { content:''; position:absolute; top:0;left:0;right:0; height:3px; background:linear-gradient(90deg,#dc2626,#f87171,#fbbf24); }
.pay-badge {
  display:inline-flex; align-items:center; gap:6px;
  font-family:'IBM Plex Mono',monospace; font-size:10px; color:#fca5a5;
  background:rgba(220,38,38,.12); border:1px solid rgba(220,38,38,.35);
  padding:5px 10px; border-radius:4px; letter-spacing:.1em; text-transform:uppercase; margin-bottom:14px;
}
.pay-title { font-size:22px; font-weight:700; color:#f1f5f9; margin-bottom:7px; letter-spacing:-.02em; line-height:1.2; }
.pay-desc  { font-size:14px; color:#cbd5e1; margin-bottom:22px; line-height:1.6; }

/* offer box */
.offer-box {
  background: rgba(220,38,38,.08);
  border:1px solid rgba(220,38,38,.3);
  border-radius:10px; padding:16px;
  margin-bottom:20px;
}
.offer-box-title {
  font-family:'IBM Plex Mono',monospace;
  font-size:10px; color:#fca5a5; letter-spacing:.15em;
  text-transform:uppercase; margin-bottom:8px;
  display:flex; align-items:center; gap:6px;
}
.offer-box-title::before { content:''; width:6px;height:6px;border-radius:50%;background:#f87171;flex-shrink:0; }
.offer-box-text { font-size:14px; color:#f1f5f9; font-weight:600; line-height:1.5; }
.offer-box-sub  { font-size:12px; color:#cbd5e1; margin-top:4px; line-height:1.5; }

/* result stats row */
.result-stats-row { display:grid; grid-template-columns:repeat(2,1fr); gap:10px; margin-bottom:20px; }
.rs-card { background:#1a0608; border:1px solid rgba(220,38,38,.2); border-radius:9px; padding:16px 12px; text-align:center; }
.rs-card.alert { border-color:rgba(239,68,68,.5); background:rgba(239,68,68,.1); }
.rs-num { font-family:'IBM Plex Mono',monospace; font-size:28px; font-weight:600; display:block; margin-bottom:4px; letter-spacing:0; }
.rs-lbl { font-family:'IBM Plex Mono',monospace; font-size:9px; color:#e2e8f0; letter-spacing:0; line-height:1; text-transform:uppercase; white-space:nowrap; margin-top:2px; }

/* PDF preview */
.pdf-wrap { background:#1a0608; border:1px solid rgba(220,38,38,.25); border-radius:10px; overflow:hidden; margin-bottom:22px; position:relative; }
.pdf-bar {
  background:#2d0a0a; border-bottom:1px solid rgba(239,68,68,.3);
  padding:10px 14px; display:flex; align-items:center; justify-content:space-between;
}
.pdf-bar-title {
  font-family:'IBM Plex Mono',monospace; font-size:9px; color:#e2e8f0;
  display:flex; align-items:center; gap:6px; letter-spacing:.06em;
  overflow:hidden; text-overflow:ellipsis; white-space:nowrap; max-width:55%;
}
.pdf-conf {
  font-family:'IBM Plex Mono',monospace; font-size:9px; color:#f87171;
  background:rgba(239,68,68,.15); border:1px solid rgba(239,68,68,.5);
  padding:3px 8px; border-radius:3px; letter-spacing:.1em; text-transform:uppercase;
  animation: conf-pulse 1.5s infinite; white-space:nowrap;
}
@keyframes conf-pulse { 0%,100%{opacity:1} 50%{opacity:.6} }

/* watermark stamps inside pdf */
.pdf-body { padding:12px; position:relative; min-height:130px; }
.pdf-row { height:10px; background:rgba(203,213,225,.07); border-radius:3px; margin-bottom:10px; filter:blur(3.5px); }
.pdf-row:nth-child(2){width:78%} .pdf-row:nth-child(3){width:62%} .pdf-row:nth-child(4){width:88%} .pdf-row:nth-child(5){width:52%}
.pdf-data-row { display:flex; gap:9px; margin-bottom:10px; }
.pdf-cell { height:30px; flex:1; background:rgba(220,38,38,.06); border:1px solid rgba(220,38,38,.1); border-radius:4px; filter:blur(3.5px); }

/* diagonal stamp */
.pdf-stamp {
  position:absolute; top:50%; left:50%; transform:translate(-50%,-50%) rotate(-25deg);
  font-family:'IBM Plex Mono',monospace; font-size:28px; font-weight:600;
  color:rgba(239,68,68,.18); letter-spacing:.3em; text-transform:uppercase;
  white-space:nowrap; pointer-events:none; border:3px solid rgba(239,68,68,.15);
  padding:6px 12px; border-radius:4px;
}
.pdf-stamp-2 {
  position:absolute; top:22%; left:50%; transform:translate(-50%,-50%) rotate(-25deg);
  font-family:'IBM Plex Mono',monospace; font-size:13px; font-weight:600;
  color:rgba(239,68,68,.14); letter-spacing:.2em; text-transform:uppercase;
  white-space:nowrap; pointer-events:none; border:2px solid rgba(239,68,38,.1);
  padding:4px 8px; border-radius:3px;
}

.pdf-overlay {
  position:absolute; inset:0;
  background:linear-gradient(180deg,rgba(26,6,8,0) 15%,rgba(15,5,5,.97) 100%);
  display:flex; flex-direction:column; align-items:center; justify-content:flex-end; padding-bottom:18px;
}
.pdf-lock-text { font-family:'IBM Plex Mono',monospace; font-size:12px; color:#e2e8f0; text-align:center; line-height:1.6; }

/* price display */
.price-row {
  display:flex; align-items:flex-end; gap:6px; padding:18px;
  background:#1a0608; border:1px solid rgba(220,38,38,.25); border-radius:10px; margin-bottom:18px;
}
.price-sym { font-family:'IBM Plex Mono',monospace; font-size:18px; font-weight:600; color:#e2e8f0; padding-bottom:6px; }
.price-num { font-family:'IBM Plex Mono',monospace; font-size:52px; font-weight:600; color:#f1f5f9; line-height:1; }
.price-meta { font-family:'IBM Plex Mono',monospace; font-size:12px; color:#e2e8f0; padding-bottom:5px; line-height:1.8; }
.price-strike { color:#64748b; text-decoration:line-through; font-size:13px; }
.price-save { color:#4ade80; font-size:11px; font-weight:600; }

.pay-cta {
  width:100%;
  background:linear-gradient(135deg,#991b1b,#ef4444);
  border:none; border-radius:10px; padding:19px; cursor:pointer;
  font-family:'Sora',sans-serif; font-size:14px; font-weight:700;
  color:#fff; letter-spacing:.04em; text-transform:uppercase;
  box-shadow:0 4px 26px rgba(239,68,68,.45);
  animation:glow 2.5s infinite; margin-bottom:12px; transition:all .25s;
}
@keyframes glow { 0%,100%{box-shadow:0 4px 26px rgba(239,68,68,.45)} 50%{box-shadow:0 4px 42px rgba(239,68,68,.75)} }
.pay-cta:hover { transform:translateY(-2px); }
.pay-note { font-family:'Sora',sans-serif; font-size:13px; color:#fca5a5; text-align:center; letter-spacing:.02em; margin-bottom:18px; font-weight:600; font-style:italic; }
.seal-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; }
.seal {
  display:flex; flex-direction:column; align-items:center; gap:4px;
  padding:10px 6px; background:#1a0608; border:1px solid rgba(220,38,38,.2); border-radius:8px;
  font-family:'IBM Plex Mono',monospace; font-size:9px; color:#e2e8f0;
  text-align:center; letter-spacing:.04em; line-height:1.3; text-transform:uppercase;
}
.seal svg { color:#f87171; }

/* ── STEP ROWS ── */
.step-rows {
  width:100%; max-width:420px;
  display:flex; flex-direction:column; gap:10px;
  margin-bottom:24px;
}
.step-row {
  display:flex; align-items:center; justify-content:space-between; gap:10px;
  background:#0f0505;
  border:1px solid rgba(220,38,38,.18);
  border-radius:10px; padding:13px 14px;
  opacity:0; transform:translateY(8px);
  transition:opacity .4s ease, transform .4s ease;
}
.step-row.show { opacity:1; transform:translateY(0); }
.step-row.active-row { border-color:rgba(220,38,38,.5); background:#1a0608; }

.sr-left { display:flex; align-items:center; gap:10px; flex:1; min-width:0; }

.sr-icon {
  width:28px; height:28px; flex-shrink:0;
  background:rgba(220,38,38,.12);
  border:1px solid rgba(220,38,38,.3);
  border-radius:7px;
  display:flex; align-items:center; justify-content:center;
  color:#f87171;
}
.sr-icon-spin svg { animation:spin 1.2s linear infinite; }
.sr-icon.done { background:rgba(74,222,128,.12); border-color:rgba(74,222,128,.35); color:#4ade80; }
.sr-icon.done svg { animation:none; }
.sr-icon.alerting { background:rgba(239,68,68,.15); border-color:rgba(239,68,68,.5); color:#f87171; }
.sr-icon.alerting svg { animation:none; }

.sr-text {
  font-family:'IBM Plex Mono',monospace;
  font-size:11px; color:#e2e8f0; line-height:1.4; letter-spacing:.02em;
}

.sr-badge {
  font-family:'IBM Plex Mono',monospace;
  font-size:9px; font-weight:600; letter-spacing:.12em; text-transform:uppercase;
  padding:4px 8px; border-radius:4px; flex-shrink:0;
  opacity:0; transition:opacity .4s .1s; white-space:nowrap;
}
.step-row.show .sr-badge { opacity:1; }
.sr-badge-listo  { color:#4ade80; background:rgba(74,222,128,.12); border:1px solid rgba(74,222,128,.3); }
.sr-badge-found  { color:#fbbf24; background:rgba(251,191,36,.1);  border:1px solid rgba(251,191,36,.3); }
.sr-badge-alerta { color:#f87171; background:rgba(239,68,68,.12);  border:1px solid rgba(239,68,68,.4); animation:badge-pulse 1s infinite; }
@keyframes badge-pulse { 0%,100%{box-shadow:0 0 0 0 rgba(239,68,68,.4)} 50%{box-shadow:0 0 0 5px rgba(239,68,68,0)} }

/* ── SUCCESS SCREEN ── */
.success-icon-wrap { position:relative; width:80px; height:80px; margin:0 auto 22px; flex-shrink:0; }
.success-ring { position:absolute; inset:0; border-radius:50%; border:2px solid #4ade80; animation:success-pop .5s cubic-bezier(.175,.885,.32,1.275) both; }
.success-check { position:absolute; inset:0; display:flex; align-items:center; justify-content:center; font-size:32px; color:#4ade80; animation:success-pop .5s .1s cubic-bezier(.175,.885,.32,1.275) both; }
@keyframes success-pop { from{opacity:0;transform:scale(.4)} to{opacity:1;transform:scale(1)} }
.success-hl { font-size:24px; font-weight:800; color:#f1f5f9; text-align:center; margin-bottom:6px; letter-spacing:-.02em; }
.success-sub { font-family:'IBM Plex Mono',monospace; font-size:11px; color:#fca5a5; text-align:center; letter-spacing:.08em; margin-bottom:22px; }
.success-stats { display:flex; gap:10px; width:100%; max-width:340px; margin-bottom:20px; }
.sstat { flex:1; border-radius:10px; padding:16px 10px; text-align:center; border:1px solid; }
.sstat-blue { background:rgba(220,38,38,.08); border-color:rgba(220,38,38,.25); }
.sstat-red  { background:rgba(239,68,68,.1);  border-color:rgba(239,68,68,.35); }
.sstat-green{ background:rgba(74,222,128,.08); border-color:rgba(74,222,128,.25); }
.sstat-num  { font-family:'IBM Plex Mono',monospace; font-size:28px; font-weight:600; display:block; margin-bottom:4px; letter-spacing:0; }
.sstat-blue .sstat-num  { color:#fca5a5; }
.sstat-red  .sstat-num  { color:#f87171; }
.sstat-green .sstat-num { color:#4ade80; }
.sstat-lbl { font-family:'IBM Plex Mono',monospace; font-size:9px; color:#e2e8f0; line-height:1; letter-spacing:0; font-weight:400; text-transform:uppercase; white-space:nowrap; margin-top:2px; }
.success-msg { font-size:13px; color:#e2e8f0; text-align:center; line-height:1.6; max-width:340px; margin-bottom:24px; background:#0f0505; border:1px solid rgba(220,38,38,.2); border-radius:10px; padding:14px 16px; }
.success-msg strong { color:#f87171; font-weight:700; }
.success-cta { width:100%; max-width:340px; background:linear-gradient(135deg,#991b1b,#ef4444); border:none; border-radius:10px; padding:18px; cursor:pointer; font-family:'Sora',sans-serif; font-size:15px; font-weight:700; color:#fff; letter-spacing:.05em; text-transform:uppercase; box-shadow:0 4px 26px rgba(239,68,68,.5); animation:glow 2s infinite; }

/* ── SCAN MODAL ── */
#scan-modal {
  display:none; position:fixed; inset:0; z-index:9999;
  background:#090305;
  flex-direction:column; align-items:center; justify-content:flex-start;
  overflow:hidden;
}
#scan-modal.active { display:flex; }

.scan-topbar {
  width:100%; background:#0f0505; border-bottom:1px solid rgba(220,38,38,.2);
  padding:14px 20px; display:flex; align-items:center; justify-content:space-between; flex-shrink:0;
}
.scan-tb-l { font-family:'IBM Plex Mono',monospace; font-size:11px; color:#fca5a5; letter-spacing:.1em; text-transform:uppercase; }
.scan-tb-r { font-family:'IBM Plex Mono',monospace; font-size:11px; color:#4ade80; display:flex; align-items:center; gap:5px; }

.scan-inner {
  width:100%; flex:1; display:flex; flex-direction:column;
  align-items:center; justify-content:center; padding:20px 20px 30px; overflow-y:auto;
}

/* spinning rings */
.rings-wrap { position:relative; width:90px; height:90px; margin-bottom:26px; flex-shrink:0; }
.ring { position:absolute; inset:0; border-radius:50%; border:2px solid transparent; }
.ring-1 { border-top-color:#22d3ee; border-right-color:rgba(34,211,238,.15); animation:spin 1.2s linear infinite; }
.ring-2 { inset:10px; border-top-color:#3b82f6; border-left-color:rgba(59,130,246,.15); animation:spin .85s linear infinite reverse; }
.ring-3 { inset:22px; border-top-color:#4ade80; border-bottom-color:rgba(74,222,128,.15); animation:spin 1.6s linear infinite; }
.ring-center {
  position:absolute; inset:35px; background:rgba(34,211,238,.12);
  border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:14px;
}
@keyframes spin { to{transform:rotate(360deg)} }

.scan-hl { font-size:20px; font-weight:700; color:#f1f5f9; text-align:center; margin-bottom:5px; }
.scan-sub-lbl {
  font-family:'IBM Plex Mono',monospace; font-size:11px; color:#22d3ee;
  text-align:center; letter-spacing:.08em; margin-bottom:22px;
}

/* terminal */
.terminal {
  width:100%; max-width:420px; background:#071628;
  border:1px solid rgba(59,130,246,.25); border-radius:10px; overflow:hidden; margin-bottom:22px;
}
.t-bar { background:#0b1e36; border-bottom:1px solid rgba(59,130,246,.2); padding:9px 14px; display:flex; align-items:center; gap:6px; }
.tb-dot { width:8px;height:8px;border-radius:50%; }
.tb-r{background:rgba(239,68,68,.5)} .tb-y{background:rgba(234,179,8,.5)} .tb-g{background:rgba(74,222,128,.5)}
.tb-title { font-family:'IBM Plex Mono',monospace; font-size:10px; color:#e2e8f0; margin-left:6px; letter-spacing:.08em; }
.t-body { padding:16px 14px; min-height:200px; }

.t-line {
  display:flex; align-items:flex-start; gap:8px;
  font-family:'IBM Plex Mono',monospace; font-size:12px; line-height:1.7;
  opacity:0; transition:opacity .35s; margin-bottom:2px;
  color:#e2e8f0;
}
.t-line.show { opacity:1; }
.t-line.warn { color:#fbbf24; }
.t-line.ok   { color:#4ade80; }
.t-prefix { flex-shrink:0; margin-top:2px; }
.t-prefix.info { color:#22d3ee; }
.t-prefix.warn { color:#fbbf24; }
.t-prefix.ok   { color:#4ade80; }

/* progress */
.prog-wrap { width:100%; max-width:420px; }
.prog-meta { display:flex; justify-content:space-between; font-family:'IBM Plex Mono',monospace; font-size:12px; color:#e2e8f0; margin-bottom:8px; }
.prog-pct { color:#22d3ee; font-weight:600; }
.prog-track { height:8px; background:#1a0608; border:1px solid rgba(220,38,38,.2); border-radius:4px; overflow:hidden; }
.prog-fill {
  height:100%; width:0%;
  background:linear-gradient(90deg,#991b1b,#ef4444);
  border-radius:4px; transition:width .5s ease;
  box-shadow:0 0 12px rgba(239,68,68,.5);
}

/* ── UPSELL ── */
#upsell-modal-month, #upsell-modal-once {
  display:none; position:fixed; inset:0; z-index:9999;
  background:rgba(3,14,26,.9); backdrop-filter:blur(8px);
  align-items:flex-end; justify-content:center;
}
#upsell-modal-month.active, #upsell-modal-once.active { display:flex; }
.upsell-sheet {
  width:100%; max-width:480px; background:#0f0505;
  border:1px solid rgba(220,38,38,.3); border-bottom:none;
  border-radius:16px 16px 0 0; padding:26px 22px 40px;
  animation:slideUp .38s cubic-bezier(.16,1,.3,1);
}
@keyframes slideUp { from{transform:translateY(100%)} to{transform:translateY(0)} }
.u-handle { width:34px;height:4px; background:rgba(203,213,225,.2); border-radius:2px; margin:0 auto 22px; }
.u-chip {
  display:inline-flex; align-items:center; gap:5px;
  font-family:'IBM Plex Mono',monospace; font-size:9px; color:#fca5a5;
  background:rgba(220,38,38,.1); border:1px solid rgba(220,38,38,.3);
  padding:5px 10px; border-radius:3px; letter-spacing:.12em; text-transform:uppercase; margin-bottom:12px;
}
.u-title { font-size:20px;font-weight:700;color:#f1f5f9;margin-bottom:6px;letter-spacing:-.02em;line-height:1.25; }
.u-desc  { font-size:14px;color:#cbd5e1;margin-bottom:18px;line-height:1.6; }
.u-feats { display:flex;flex-direction:column;gap:8px;margin-bottom:18px; }
.u-feat  { display:flex;align-items:center;gap:9px;font-size:13px;color:#e2e8f0; }
.u-feat-ico { font-size:12px;color:#f87171;flex-shrink:0; }
.u-price-row {
  display:flex; align-items:center; justify-content:space-between;
  background:#1a0608; border:1px solid rgba(220,38,38,.2);
  border-radius:8px; padding:13px 15px; margin-bottom:15px;
}
.u-price-lbl { font-family:'IBM Plex Mono',monospace;font-size:12px;color:#e2e8f0;letter-spacing:.05em; }
.u-price-val { font-family:'IBM Plex Mono',monospace;font-size:22px;font-weight:600;color:#f1f5f9; }
.u-price-val span { font-size:12px;color:#cbd5e1; }
.u-add-btn {
  width:100%; background:linear-gradient(135deg,#15803d,#22c55e);
  border:none; border-radius:10px; padding:16px; cursor:pointer;
  font-family:'Sora',sans-serif; font-size:15px;font-weight:700;
  color:#fff;letter-spacing:.04em;
  box-shadow:0 4px 20px rgba(34,197,94,.4); margin-bottom:10px; transition:all .25s;
}
.u-add-btn:hover { transform:translateY(-1px); }
.u-skip {
  width:100%;background:none;border:none;cursor:pointer;
  font-family:'IBM Plex Mono',monospace; font-size:11px;color:#64748b;
  letter-spacing:.08em;text-transform:uppercase;padding:8px;
}

.input-error {
  display:none; font-family:'IBM Plex Mono',monospace;
  font-size:10px; color:#f87171;
  background:rgba(239,68,68,.1); border:1px solid rgba(239,68,68,.3);
  border-radius:6px; padding:6px 12px;
  text-align:center; letter-spacing:.06em; margin-bottom:8px;
  width:100%; max-width:380px;
}
.input-error.show { display:block; }
.delivery-chip {
  display:flex; align-items:center; justify-content:center;
  font-family:'IBM Plex Mono',monospace; font-size:11px; color:#4ade80;
  background:rgba(74,222,128,.08); border:1px solid rgba(74,222,128,.25);
  border-radius:6px; padding:8px 14px; margin-bottom:14px;
  letter-spacing:.04em; white-space:nowrap;
}
}

/* inline badge next to label */
.po-label-row { display:flex; align-items:center; gap:7px; flex-wrap:wrap; margin-bottom:2px; }
.po-badge-inline {
  font-family:'IBM Plex Mono',monospace; font-size:8px; font-weight:600;
  color:#fff; background:linear-gradient(135deg,#991b1b,#ef4444);
  padding:2px 7px; border-radius:3px; letter-spacing:.08em; text-transform:uppercase;
  white-space:nowrap; flex-shrink:0;
}

/* single CTA */
.btn-single-cta {
  width:100%;
  background:linear-gradient(135deg,#991b1b,#ef4444);
  border:none; border-radius:10px; padding:18px; cursor:pointer;
  font-family:'Sora',sans-serif; font-size:17px; font-weight:700;
  color:#fff; letter-spacing:.04em;
  box-shadow:0 4px 26px rgba(239,68,68,.45);
  animation:glow 2.5s infinite; margin-bottom:12px; transition:all .25s;
}
.btn-single-cta:hover { transform:translateY(-2px); }


.pricing-block { display:flex; flex-direction:column; gap:8px; margin-bottom:16px; }

.price-option {
  background:#1a0608; border:1.5px solid rgba(220,38,38,.25);
  border-radius:10px; padding:11px 13px;
  display:flex; gap:10px; align-items:center;
  cursor:pointer; transition:all .2s; position:relative; overflow:hidden;
}
.price-option:hover { border-color:rgba(220,38,38,.5); }
.price-option.selected { border-color:#ef4444; background:rgba(220,38,38,.07); }
.price-option-featured { border-color:rgba(239,68,68,.45); }

.po-badge-top {
  position:absolute; top:0; right:0;
  background:linear-gradient(135deg,#991b1b,#ef4444);
  font-family:'IBM Plex Mono',monospace; font-size:7px; font-weight:600;
  color:#fff; letter-spacing:.1em; text-transform:uppercase;
  padding:3px 8px; border-radius:0 10px 0 6px;
}

.po-radio {
  width:16px; height:16px; flex-shrink:0;
  border-radius:50%; border:2px solid rgba(220,38,38,.4);
  background:transparent; transition:all .2s;
}
.po-radio.on {
  border-color:#ef4444;
  background:radial-gradient(circle, #ef4444 38%, transparent 38%);
}

.po-content { flex:1; display:flex; align-items:center; justify-content:space-between; gap:8px; }
.po-left { display:flex; flex-direction:column; gap:1px; }
.po-label {
  font-family:'IBM Plex Mono',monospace; font-size:9px; color:#fca5a5;
  letter-spacing:.06em; text-transform:uppercase;
}
.po-desc   { font-size:11px; color:#cbd5e1; line-height:1.4; }
.po-cancel {
  font-family:'IBM Plex Mono',monospace; font-size:9px; color:#4ade80;
  letter-spacing:.04em; display:flex; align-items:center; gap:4px; margin-top:2px;
}
.po-cancel::before { content:'✕'; font-size:8px; }

.po-price-right { text-align:right; flex-shrink:0; }
.po-num  { font-family:'IBM Plex Mono',monospace; font-size:22px; font-weight:600; color:#f1f5f9; line-height:1; display:block; }
.po-per  { font-family:'IBM Plex Mono',monospace; font-size:9px; color:#94a3b8; display:block; }
.po-strike { font-family:'IBM Plex Mono',monospace; font-size:9px; color:#64748b; text-decoration:line-through; display:block; }
.po-save   { font-family:'IBM Plex Mono',monospace; font-size:9px; color:#4ade80; font-weight:600; display:block; }

/* Two CTA buttons */
.dual-btns { display:flex; flex-direction:column; gap:9px; margin-bottom:12px; }

.btn-monthly {
  width:100%;
  background:linear-gradient(135deg,#991b1b,#ef4444);
  border:none; border-radius:10px; padding:16px 14px; cursor:pointer;
  font-family:'Sora',sans-serif; font-size:13px; font-weight:700;
  color:#fff; letter-spacing:.04em; text-transform:uppercase;
  box-shadow:0 4px 20px rgba(239,68,68,.45);
  animation:glow 2.5s infinite; transition:all .25s;
  display:flex; flex-direction:column; align-items:center; gap:3px;
}
.btn-monthly:hover { transform:translateY(-1px); }
.btn-main-row { display:flex; align-items:center; justify-content:space-between; width:100%; gap:8px; }
.btn-main-label { font-size:14px; font-weight:700; letter-spacing:.04em; text-transform:uppercase; }
.btn-main-price { font-family:'IBM Plex Mono',monospace; font-size:20px; font-weight:600; white-space:nowrap; }
.btn-price-unit { font-size:11px; font-weight:400; opacity:.8; }
.btn-monthly-sub {
  font-size:10px; font-weight:400; letter-spacing:.04em;
  color:rgba(255,255,255,.75); text-transform:none;
}

.btn-oncetime {
  width:100%;
  background:transparent;
  border:1.5px solid rgba(220,38,38,.4);
  border-radius:10px; padding:14px 14px; cursor:pointer;
  font-family:'Sora',sans-serif; font-size:13px; font-weight:600;
  color:#fca5a5; letter-spacing:.03em; text-transform:uppercase;
  transition:all .25s;
  display:flex; flex-direction:column; align-items:center; gap:3px;
}
.btn-oncetime:hover { border-color:#ef4444; background:rgba(220,38,38,.06); }
.btn-oncetime-sub {
  font-size:10px; font-weight:400; letter-spacing:.03em;
  color:rgba(252,165,165,.6); text-transform:none;
}

/* ── VERIFIED BANNER (inline, below hero CTA) ── */
.verified-banner-inline {
  display: flex; align-items: center; justify-content: center; gap: 8px;
  flex-wrap: wrap;
  margin-top: 14px;
  padding: 8px 14px;
  background: rgba(220,38,38,.07);
  border: 1px solid rgba(220,38,38,.2);
  border-radius: 10px;
  width: 100%; max-width: 380px;
}
.vb-stars { color: #fbbf24; font-size: 13px; letter-spacing: 2px; }
.vb-text {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px; color: #fca5a5; letter-spacing: .1em; text-transform: uppercase;
}
.vb-badge {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px; color: #4ade80;
  background: rgba(74,222,128,.1); border: 1px solid rgba(74,222,128,.3);
  padding: 2px 8px; border-radius: 3px; letter-spacing: .1em;
}

/* ── HOW IT WORKS — solid background so text is always readable ── */
.how-section {
  padding: 56px 20px;
  background: #05111f;
}

/* ── FOOTER ── */
footer {
  padding: 30px 20px; border-top: 1px solid rgba(220,38,38,.12);
  text-align: center; background: #05111f;
}
.footer-brand { font-family:'IBM Plex Mono',monospace; font-size:12px; color:#e2e8f0; letter-spacing:.1em; margin-bottom:10px; }
.footer-txt { font-family:'IBM Plex Mono',monospace; font-size:10px; color:#94a3b8; line-height:1.7; max-width:320px; margin:0 auto; letter-spacing:.03em; }

/* ── REVIEWS SECTION ── */
.reviews-section {
  padding: 48px 20px 40px;
  background: #0f0505;
  border-top: 1px solid rgba(220,38,38,.12);
}
.reviews-header {
  text-align: center; margin-bottom: 24px;
}
.reviews-eyebrow {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px; color: #fca5a5; letter-spacing: .2em;
  text-transform: uppercase; margin-bottom: 8px;
  display: flex; align-items: center; justify-content: center; gap: 10px;
}
.reviews-eyebrow::before,.reviews-eyebrow::after { content:''; height:1px; width:30px; background:rgba(220,38,38,.3); }
.reviews-title { font-size: 20px; font-weight: 700; color: #f1f5f9; margin-bottom: 4px; }
.reviews-stars-row {
  display: flex; align-items: center; justify-content: center; gap: 6px;
  font-family: 'IBM Plex Mono', monospace; font-size: 11px; color: #94a3b8;
}
.reviews-stars-row span { color: #fbbf24; font-size: 14px; }
.reviews-grid { display: flex; flex-direction: column; gap: 12px; }
.review-card {
  background: #1a0608; border: 1px solid rgba(220,38,38,.18);
  border-radius: 12px; padding: 16px 16px 14px;
}
.rc-top {
  display: flex; align-items: center; justify-content: space-between;
  margin-bottom: 8px;
}
.rc-stars { color: #fbbf24; font-size: 12px; letter-spacing: 1px; }
.rc-date {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px; color: #64748b; letter-spacing: .08em;
}
.rc-anon {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 10px; color: #fca5a5; letter-spacing: .08em;
  margin-bottom: 6px; display: flex; align-items: center; gap: 5px;
}
.rc-anon::before { content: '●'; font-size: 6px; }
.rc-text { font-size: 13px; color: #e2e8f0; line-height: 1.6; }
.rc-verified {
  margin-top: 8px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 9px; color: #4ade80; letter-spacing: .08em;
  display: flex; align-items: center; gap: 4px;
}
.rc-verified::before { content: '✓'; }

/* ── CHECKOUT MODAL ── */
#checkout-modal {
  display:none; position:fixed; inset:0; z-index:9999;
  background:#05111f; overflow-y:auto; flex-direction:column;
}
#checkout-modal.active { display:flex; }
.co-header {
  position:sticky; top:0; z-index:10;
  background:#05111f; border-bottom:1px solid rgba(220,38,38,.2);
  padding:14px 20px; display:flex; align-items:center; justify-content:space-between;
}
.co-header-title { font-family:'IBM Plex Mono',monospace; font-size:12px; color:#fca5a5; letter-spacing:.12em; text-transform:uppercase; }
.co-back { background:none; border:none; cursor:pointer; font-family:'IBM Plex Mono',monospace; font-size:11px; color:#94a3b8; letter-spacing:.08em; text-transform:uppercase; display:flex; align-items:center; gap:5px; }
.co-body { padding:20px 20px 60px; display:flex; flex-direction:column; gap:16px; }
.cart-card { background:#0f0505; border:1px solid rgba(220,38,38,.3); border-radius:12px; padding:18px; position:relative; overflow:hidden; }
.cart-card::before { content:''; position:absolute; top:0;left:0;right:0; height:3px; background:linear-gradient(90deg,#dc2626,#f87171,#fbbf24); }
.cart-title { font-family:'IBM Plex Mono',monospace; font-size:10px; color:#fca5a5; letter-spacing:.15em; text-transform:uppercase; margin-bottom:14px; display:flex; align-items:center; gap:7px; }
.cart-item { display:flex; align-items:center; justify-content:space-between; padding:12px 0; border-bottom:1px solid rgba(220,38,38,.12); }
.cart-item:last-of-type { border-bottom:none; padding-bottom:0; }
.cart-item-name { font-size:14px; color:#f1f5f9; font-weight:600; }
.cart-item-desc { font-size:11px; color:#94a3b8; font-family:'IBM Plex Mono',monospace; margin-top:2px; }
.cart-badge { display:inline-block; font-family:'IBM Plex Mono',monospace; font-size:8px; color:#4ade80; background:rgba(74,222,128,.1); border:1px solid rgba(74,222,128,.3); padding:2px 6px; border-radius:3px; letter-spacing:.1em; margin-top:4px; }
.cart-item-price { font-family:'IBM Plex Mono',monospace; font-size:20px; font-weight:600; color:#f1f5f9; text-align:right; }
.cart-strike { display:block; font-size:10px; color:#64748b; text-decoration:line-through; }
.cart-total-row { display:flex; align-items:center; justify-content:space-between; margin-top:14px; padding-top:14px; border-top:1px solid rgba(220,38,38,.2); }
.cart-total-lbl { font-family:'IBM Plex Mono',monospace; font-size:11px; color:#e2e8f0; letter-spacing:.08em; text-transform:uppercase; }
.cart-total-amt { font-family:'IBM Plex Mono',monospace; font-size:26px; font-weight:600; color:#f1f5f9; }
.delivery-card { background:#0f0505; border:1px solid rgba(220,38,38,.3); border-radius:12px; padding:18px; }
.delivery-card-title { font-family:'IBM Plex Mono',monospace; font-size:10px; color:#fca5a5; letter-spacing:.15em; text-transform:uppercase; margin-bottom:14px; display:flex; align-items:center; gap:7px; }
.delivery-opts { display:flex; gap:10px; margin-bottom:16px; }
.delivery-opt { flex:1; padding:16px 10px; text-align:center; background:#1a0608; border:1.5px solid rgba(220,38,38,.2); border-radius:10px; cursor:pointer; transition:all .2s; display:flex; flex-direction:column; align-items:center; gap:6px; }
.delivery-opt:hover { border-color:rgba(220,38,38,.5); }
.delivery-opt.sel { border-color:#ef4444; background:rgba(220,38,38,.08); }
.delivery-opt-icon { width:38px; height:38px; flex-shrink:0; }
.delivery-opt-lbl { font-family:'IBM Plex Mono',monospace; font-size:10px; color:#e2e8f0; letter-spacing:.08em; text-transform:uppercase; }
.delivery-banner { display:none; background:#1a0608; border:1px solid rgba(220,38,38,.25); border-radius:9px; padding:14px; animation:fadeInUp .3s ease both; }
.delivery-banner.show { display:block; }
.delivery-banner-lbl { font-family:'IBM Plex Mono',monospace; font-size:10px; color:#fca5a5; letter-spacing:.1em; text-transform:uppercase; margin-bottom:7px; }
.delivery-field { width:100%; background:#05111f; border:1.5px solid rgba(220,38,38,.35); border-radius:8px; padding:13px 14px; font-family:'IBM Plex Mono',monospace; font-size:14px; color:#f1f5f9; outline:none; transition:all .25s; }
.delivery-field::placeholder { color:#64748b; }
.delivery-field:focus { border-color:#f87171; box-shadow:0 0 0 3px rgba(248,113,113,.1); }
.delivery-field-note { font-family:'IBM Plex Mono',monospace; font-size:10px; color:#64748b; margin-top:6px; letter-spacing:.04em; }
.co-cta { width:100%; background:linear-gradient(135deg,#991b1b,#ef4444); border:none; border-radius:10px; padding:19px; cursor:pointer; font-family:'Sora',sans-serif; font-size:16px; font-weight:700; color:#fff; letter-spacing:.04em; text-transform:uppercase; box-shadow:0 4px 26px rgba(239,68,68,.45); animation:glow 2.5s infinite; transition:all .25s; margin-bottom:8px; }
.co-cta:hover { transform:translateY(-2px); }
.co-cta-err { display:none; font-family:'IBM Plex Mono',monospace; font-size:10px; color:#f87171; background:rgba(239,68,68,.1); border:1px solid rgba(239,68,68,.3); border-radius:6px; padding:7px 12px; text-align:center; margin-bottom:10px; letter-spacing:.05em; }
.co-cta-err.show { display:block; }
.co-seals { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; }
.co-seal { display:flex; flex-direction:column; align-items:center; gap:4px; padding:9px 6px; background:#0f0505; border:1px solid rgba(220,38,38,.15); border-radius:8px; font-family:'IBM Plex Mono',monospace; font-size:9px; color:#e2e8f0; text-align:center; letter-spacing:.04em; text-transform:uppercase; }
.cart-price-meta { display:flex; align-items:center; justify-content:flex-end; gap:5px; margin-top:3px; }
.cart-strike { font-family:'IBM Plex Mono',monospace; font-size:10px; color:#64748b; text-decoration:line-through; }
.cart-discount { font-family:'IBM Plex Mono',monospace; font-size:9px; color:#4ade80; font-weight:600; background:rgba(74,222,128,.1); border:1px solid rgba(74,222,128,.3); padding:1px 5px; border-radius:3px; }
.delivery-opt-icon { width:36px; height:36px; flex-shrink:0; }

/* ── EXIT INTENT MODAL ── */
#exit-modal {
  display:none; position:fixed; inset:0; z-index:10000;
  background:rgba(3,5,9,.92); backdrop-filter:blur(10px);
  align-items:center; justify-content:center; padding:24px;
}
#exit-modal.active { display:flex; }
.exit-sheet {
  background:#0f0505; border:1px solid rgba(220,38,38,.4);
  border-radius:18px; padding:32px 24px; max-width:400px; width:100%;
  position:relative; overflow:hidden;
  animation:exitPop .4s cubic-bezier(.175,.885,.32,1.275) both;
}
@keyframes exitPop { from{opacity:0;transform:scale(.88)} to{opacity:1;transform:scale(1)} }
.exit-sheet::before { content:''; position:absolute; top:0;left:0;right:0; height:3px; background:linear-gradient(90deg,#dc2626,#f87171,#fbbf24); }
.exit-icon { width:60px; height:60px; margin:0 auto 20px; background:rgba(220,38,38,.12); border:1px solid rgba(220,38,38,.3); border-radius:50%; display:flex; align-items:center; justify-content:center; }
.exit-title { font-size:22px; font-weight:800; color:#f1f5f9; text-align:center; margin-bottom:14px; line-height:1.25; letter-spacing:-.02em; }
.exit-title .exit-grad { background:linear-gradient(120deg,#f87171,#fbbf24); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
.exit-body { font-size:14px; color:#cbd5e1; text-align:center; line-height:1.7; margin-bottom:20px; font-weight:400; }
.exit-body strong { color:#f1f5f9; font-weight:700; }
.exit-stat { display:flex; align-items:center; justify-content:center; gap:10px; background:rgba(74,222,128,.07); border:1px solid rgba(74,222,128,.2); border-radius:8px; padding:12px 16px; margin-bottom:22px; }
.exit-stat-num { font-family:'IBM Plex Mono',monospace; font-size:28px; font-weight:600; color:#4ade80; line-height:1; }
.exit-stat-lbl { font-family:'IBM Plex Mono',monospace; font-size:10px; color:#e2e8f0; letter-spacing:.06em; text-transform:uppercase; line-height:1.5; }
.exit-cta { width:100%; background:linear-gradient(135deg,#991b1b,#ef4444); border:none; border-radius:10px; padding:18px; cursor:pointer; font-family:'Sora',sans-serif; font-size:15px; font-weight:700; color:#fff; letter-spacing:.04em; text-transform:uppercase; box-shadow:0 4px 26px rgba(239,68,68,.45); animation:glow 2s infinite; margin-bottom:12px; transition:all .25s; }
.exit-cta:hover { transform:translateY(-2px); }
.exit-dismiss { width:100%; background:none; border:none; cursor:pointer; font-family:'IBM Plex Mono',monospace; font-size:11px; color:#64748b; letter-spacing:.08em; text-transform:uppercase; padding:6px; }

/* ── FOOTER ── */
footer {
  padding:30px 20px; border-top:1px solid rgba(220,38,38,.12);
  text-align:center; background:#05111f;
}
.footer-brand { font-family:'IBM Plex Mono',monospace; font-size:12px;color:#e2e8f0;letter-spacing:.1em;margin-bottom:10px; }
.footer-txt { font-family:'IBM Plex Mono',monospace; font-size:10px;color:#64748b;line-height:1.7;max-width:320px;margin:0 auto;letter-spacing:.03em; }
`;
const BODY_HTML=`

<div class="grid-layer"></div>

<!-- HEADER -->
<header>
  <div class="logo">
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
      <path d="M18 2L4 8v10c0 8.5 6 16.5 14 19 8-2.5 14-10.5 14-19V8L18 2z" fill="rgba(153,27,27,0.25)" stroke="#ef4444" stroke-width="1.5"/>
      <circle cx="20" cy="17" r="6.5" fill="none" stroke="#fca5a5" stroke-width="1.5"/>
      <line x1="24.6" y1="21.6" x2="28.5" y2="25.5" stroke="#fca5a5" stroke-width="2" stroke-linecap="round"/>
      <circle cx="20" cy="17" r="2.5" fill="rgba(252,165,165,0.4)"/>
    </svg>
    <div>
      <div class="logo-name">CS-SHIELD</div>
      <div class="logo-sub">Recuperación Digital</div>
    </div>
  </div>
  <div class="live-pill"><div class="live-dot"></div>Sistema activo</div>
</header>

<!-- HERO -->
<section class="hero">
  <div class="hero-chip">// Test de Fidelidad Digital · Confidencial</div>

  <h1 class="hero-title">
    ¿Es realmente fiel?<br>
    <span class="grad">Descúbrelo ahora.</span>
  </h1>

  <p class="hero-sub">Ingresa su número y analizamos su actividad digital con IA, incluyendo WhatsApp, redes sociales y archivos eliminados.</p>

  <ul class="benefits">
    <li class="benefit"><div class="bcheck">✓</div>Conversaciones de WhatsApp y redes sociales</li>
    <li class="benefit"><div class="bcheck">✓</div>Fotos y archivos eliminados recuperables</li>
    <li class="benefit"><div class="bcheck">✓</div>Reporte PDF confidencial y completo</li>
    <li class="benefit"><div class="bcheck">✓</div>100% privado y confidencial</li>
    <li class="benefit"><div class="bcheck">✓</div>Recibe tu reporte directo a tu WhatsApp</li>
    <li class="benefit" style="color:#4ade80"><div class="bcheck" style="background:rgba(74,222,128,.2);border-color:rgba(74,222,128,.5)">⚡</div>Entrega en menos de 24 horas</li>
  </ul>

  <!-- phone input -->
  <div class="phone-label">Número de teléfono (10 dígitos)</div>
  <div class="input-wrap">
    <svg class="input-ico" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 10.81a19.79 19.79 0 01-3.07-8.67A2 2 0 011.92 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/>
    </svg>
    <input
      type="tel"
      id="main-input"
      placeholder="Ej. 5512345678"
      autocomplete="off"
      inputmode="numeric"
      maxlength="10"
      pattern="[0-9]{10}"
    >
  </div>
  <div class="input-error" id="input-error">⚠ Ingresa los 10 dígitos del número</div>

  <button class="cta-btn pulse-btn" onclick="validateAndScan()">
    🔍 INICIAR TEST DE FIDELIDAD
  </button>
  <p class="input-note">// Análisis con IA · 100% confidencial · Cifrado SSL</p>

  <div class="trust-strip">
    <span class="trust-item">🔒 100% Privado</span>
    <span class="trust-item">🤖 IA avanzada</span>
  </div>

  <!-- Verified banner inside hero, below CTA -->
  <div class="verified-banner-inline">
    <span class="vb-stars">★★★★★</span>
    <span class="vb-text">+12,400 reportes generados</span>
    <span class="vb-badge">✓ Verified Reviews</span>
  </div>
</section>

<!-- STATS -->
<section class="stats-section">
  <p class="stats-label">// Métricas del sistema en tiempo real</p>
  <div class="stats-grid">
    <div class="stat-card">
      <span class="stat-num c-green">98.7%</span>
      <span class="stat-lbl">TASA DE RECUPERACIÓN</span>
    </div>
    <div class="stat-card">
      <span class="stat-num c-cyan">2.4M+</span>
      <span class="stat-lbl">REGISTROS PROCESADOS</span>
    </div>
    <div class="stat-card">
      <span class="stat-num c-red">12 hrs</span>
      <span class="stat-lbl">TIEMPO PROMEDIO</span>
    </div>
  </div>
</section>

<!-- HOW -->
<section class="how-section">
  <p class="eyebrow">Proceso</p>
  <h2 class="sec-title">¿Cómo funciona?</h2>
  <p class="sec-sub">Algoritmos de Inteligencia Artificial analizan la huella digital vinculada al número en 3 pasos</p>
  <div class="steps">
    <div class="step-card">
      <div class="step-num">01</div>
      <div><h3>Ingresa el número de teléfono</h3><p>Nuestro sistema busca todas las cuentas y redes sociales vinculadas a ese número: WhatsApp, Instagram, Facebook, Telegram y más.</p></div>
    </div>
    <div class="step-card">
      <div class="step-num">02</div>
      <div><h3>Análisis con IA</h3><p>Algoritmos de Inteligencia Artificial analizan patrones de conducta, conversaciones eliminadas, actividad reciente y archivos borrados de las cuentas sincronizadas.</p></div>
    </div>
    <div class="step-card">
      <div class="step-num">03</div>
      <div><h3>Reporte PDF confidencial</h3><p>Recibes un certificado de acuerdo a toda la información obtenida y analizada. Entrega en menos de 24 horas.</p></div>
    </div>
  </div>
</section>

<!-- PAY SECTION (revealed after scan) -->
<section id="pay-section">
  <div class="pay-card">
    <div class="pay-badge">📄 Reporte listo para descarga</div>
    <h2 class="pay-title">Tu reporte está listo.<br>Descárgalo ahora.</h2>

    <!-- OFFER BOX -->
    <div class="offer-box">
      <div class="offer-box-title">Acceso Total</div>
      <div class="offer-box-text">Recibe tu certificado hoy. Entrega en menos de 24 horas.</div>
      <div class="offer-box-sub">Historial completo · Patrones de conducta virtual · Ubicación de Google Maps</div>
    </div>

    <!-- result counters -->
    <div class="result-stats-row">
      <div class="rs-card">
        <span class="rs-num" id="pay-msgs" style="color:#fca5a5">2,340</span>
        <span class="rs-lbl">MENSAJES ENCONTRADOS</span>
      </div>
      <div class="rs-card alert">
        <span class="rs-num c-red" id="pay-fotos">45</span>
        <span class="rs-lbl">FOTOS BORRADAS</span>
      </div>
      <div class="rs-card">
        <span class="rs-num c-green">12</span>
        <span class="rs-lbl">PÁGINAS DE REPORTE</span>
      </div>
      <div class="rs-card">
        <span class="rs-num" style="color:#f87171">30d</span>
        <span class="rs-lbl">HISTORIAL DISPONIBLE</span>
      </div>
    </div>

    <!-- PDF preview -->
    <div class="pdf-wrap">
      <div class="pdf-bar">
        <div class="pdf-bar-title">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          REPORTE_FIDELIDAD_30dias.pdf
        </div>
        <div class="pdf-conf">⬤ Confidencial</div>
      </div>
      <div class="pdf-body">
        <div class="pdf-row"></div>
        <div class="pdf-row"></div>
        <div class="pdf-row" style="width:70%"></div>
        <div class="pdf-data-row"><div class="pdf-cell"></div><div class="pdf-cell"></div><div class="pdf-cell"></div></div>
        <div class="pdf-row" style="width:55%"></div>
        <!-- diagonal stamp watermarks -->
        <div class="pdf-stamp">CONFIDENCIAL</div>
        <div class="pdf-stamp-2">USO RESTRINGIDO</div>
        <!-- gradient overlay -->
        <div class="pdf-overlay">
          <p class="pdf-lock-text">🔒 Reporte protegido · 12 páginas<br>Activa tu acceso para descargar</p>
        </div>
      </div>
    </div>

    <!-- 24h delivery chip -->
    <div class="delivery-chip">⚡ Recibes tu reporte en menos de 24 horas</div>

    <!-- single price display -->
    <div class="price-once-card">
      <div class="poc-left">
        <div class="poc-label">PAGO ÚNICO</div>
        <div class="poc-desc">Reporte completo · Entrega en 24 hrs</div>
      </div>
      <div class="poc-right">
        <span class="poc-num">$127</span>
        <span class="poc-per">MXN</span>
      </div>
    </div>

    <!-- single CTA button -->
    <button class="btn-single-cta" onclick="openUpsell()">
      📩 Recibir mi reporte
    </button>

    <p class="pay-note">Sal de dudas de una vez por todas.</p>

    <!-- terms small print -->
    <p class="terms-smallprint">Al continuar aceptas nuestros <a href="#terminos" class="terms-link">Términos y Condiciones</a> y <a href="#terminos" class="terms-link">Aviso de Privacidad</a>.</p>

    <div class="seal-grid">
      <div class="seal">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
        Pago seguro SSL
      </div>
      <div class="seal">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
        Cargo discreto en tarjeta
      </div>
      <div class="seal">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        Satisfacción garantizada
      </div>
    </div>
  </div>
</section>

<!-- REVIEWS SECTION -->
<section class="reviews-section">
  <div class="reviews-header">
    <div class="reviews-eyebrow">Opiniones verificadas</div>
    <h2 class="reviews-title">Lo que dicen nuestros usuarios</h2>
    <div class="reviews-stars-row">
      <span>★★★★★</span> 4.9 / 5 — más de 12,400 reportes
    </div>
    <div style="margin-top:10px;font-family:'IBM Plex Mono',monospace;font-size:10px;color:#4ade80;letter-spacing:.08em;">⚡ Reporte entregado en menos de 24 horas</div>
  </div>
  <div class="reviews-grid">

    <div class="review-card">
      <div class="rc-top">
        <span class="rc-stars">★★★★★</span>
        <span class="rc-date">15 ene 2026</span>
      </div>
      <div class="rc-anon">Usuario anónimo · CDMX</div>
      <p class="rc-text">No podía creer todo lo que encontró. El reporte llegó en minutos y tenía información que yo no esperaba ver. Vale cada peso.</p>
      <div class="rc-verified">Compra verificada</div>
    </div>

    <div class="review-card">
      <div class="rc-top">
        <span class="rc-stars">★★★★★</span>
        <span class="rc-date">3 mar 2026</span>
      </div>
      <div class="rc-anon">Usuario anónimo · Monterrey</div>
      <p class="rc-text">El proceso fue muy rápido y discreto. El PDF llegó con todo detallado. Al fin pude saber la verdad sin confrontar a nadie directamente.</p>
      <div class="rc-verified">Compra verificada</div>
    </div>

    <div class="review-card">
      <div class="rc-top">
        <span class="rc-stars">★★★★☆</span>
        <span class="rc-date">22 feb 2026</span>
      </div>
      <div class="rc-anon">Usuario anónimo · Guadalajara</div>
      <p class="rc-text">Muy fácil de usar. Metí el número y lo recibí al día siguiente a mi correo. El reporte me pareció muy útil y llegó justo a tiempo.</p>
      <div class="rc-verified">Compra verificada</div>
    </div>

    <div class="review-card">
      <div class="rc-top">
        <span class="rc-stars">★★★★★</span>
        <span class="rc-date">9 abr 2026</span>
      </div>
      <div class="rc-anon">Usuario anónimo · Puebla</div>
      <p class="rc-text">Llevaba meses con sospechas. Este servicio me dio la información que necesitaba. Lo recomiendo si quieres respuestas sin dramas.</p>
      <div class="rc-verified">Compra verificada</div>
    </div>

  </div>
</section>


<!-- FOOTER -->
<footer>
  <p class="footer-brand">CS-SHIELD · Recuperación Digital</p>
  <p class="footer-txt">
    Plataforma de análisis y recuperación de respaldos digitales desarrollado por herramientas de Inteligencia Artificial.<br>
    © 2025 CS-SHIELD. Todos los derechos reservados.
  </p>
</footer>

<!-- TERMS COLLAPSIBLE — below footer -->
<div class="terms-toggle-bar" id="terminos" onclick="toggleTerms()">
  <span class="terms-toggle-label">Términos y Condiciones · Aviso de Privacidad</span>
  <span class="terms-toggle-icon" id="terms-icon">▲</span>
</div>

<div class="terms-drawer" id="terms-drawer">
  <div class="terms-text">
    <p><strong>NATURALEZA DEL SERVICIO.</strong> CS-SHIELD es una plataforma tecnológica que ofrece exclusivamente el servicio de emisión de un Certificado de Fidelidad Digital, elaborado con base en el análisis de patrones de actividad virtual y conducta digital asociados a un número telefónico. El servicio consiste en la generación de un reporte informativo de carácter referencial, sin valor jurídico vinculante.</p>
    <p><strong>ALCANCE Y LIMITACIONES.</strong> CS-SHIELD no tiene acceso, ni directo ni indirecto, a información privada, conversaciones personales, contenido multimedia privado, cuentas de redes sociales protegidas, ni a ningún tipo de dato que requiera autorización expresa del titular o que esté protegido por contraseña o cifrado. Toda la información utilizada para la elaboración del certificado proviene exclusivamente de fuentes de dominio público, registros de actividad digital accesibles de forma abierta, y análisis de patrones conductuales basados en datos no protegidos.</p>
    <p><strong>PROTECCIÓN DE DATOS.</strong> El uso de este servicio no implica violación de ninguna ley de privacidad vigente en los Estados Unidos Mexicanos, incluyendo pero no limitado a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP). Los números telefónicos ingresados en la plataforma son utilizados únicamente como identificadores de búsqueda en fuentes públicas y no son almacenados en bases de datos personales permanentes.</p>
    <p><strong>RESPONSABILIDAD DEL USUARIO.</strong> El usuario que contrata este servicio declara ser mayor de edad y acepta utilizarlo de forma responsable, ética y conforme a la legislación aplicable. CS-SHIELD no se hace responsable del uso que el contratante dé a la información contenida en el certificado emitido. Queda estrictamente prohibido utilizar este servicio con fines de acoso, persecución, discriminación o cualquier actividad ilícita.</p>
    <p><strong>CARÁCTER REFERENCIAL.</strong> Los resultados emitidos por CS-SHIELD tienen carácter informativo y referencial. CS-SHIELD no garantiza la exactitud absoluta de los datos analizados ni se responsabiliza de decisiones tomadas con base en el certificado emitido. El servicio no constituye una investigación privada, peritaje digital ni prueba legal admisible ante autoridades judiciales o administrativas.</p>
    <p class="terms-copy">© 2026 CS-SHIELD · Todos los derechos reservados · cshldpt.com</p>
  </div>
</div>


<!-- ═══ SCAN MODAL ═══ -->
<div id="scan-modal">
  <div class="scan-topbar">
    <span class="scan-tb-l">CS-SHIELD · Test de Fidelidad activo</span>
    <span class="scan-tb-r"><div class="live-dot"></div>Conectado</span>
  </div>

  <!-- SCANNING VIEW -->
  <div class="scan-inner" id="scan-view">
    <div class="rings-wrap">
      <div class="ring ring-1"></div>
      <div class="ring ring-2"></div>
      <div class="ring ring-3"></div>
      <div class="ring-center">🔍</div>
    </div>

    <h2 class="scan-hl" id="scan-headline">Analizando número…</h2>
    <p class="scan-sub-lbl" id="scan-sub">Analizando: ••••••••</p>

    <!-- step rows -->
    <div class="step-rows">

      <div class="step-row" id="sr1">
        <div class="sr-left">
          <div class="sr-icon sr-icon-spin" id="sri1">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          </div>
          <span class="sr-text">Conectando con la base de datos…</span>
        </div>
        <span class="sr-badge sr-badge-listo" id="sb1">LISTO</span>
      </div>

      <div class="step-row" id="sr2">
        <div class="sr-left">
          <div class="sr-icon sr-icon-spin" id="sri2">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          </div>
          <span class="sr-text" id="sr2-text">Buscando conversaciones recientes…</span>
        </div>
        <span class="sr-badge sr-badge-found" id="sb2">ENCONTRADO</span>
      </div>

      <div class="step-row" id="sr3">
        <div class="sr-left">
          <div class="sr-icon sr-icon-spin" id="sri3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          </div>
          <span class="sr-text">Recuperando archivos de la papelera de mensajes…</span>
        </div>
        <span class="sr-badge sr-badge-listo" id="sb3">LISTO</span>
      </div>

      <div class="step-row" id="sr4">
        <div class="sr-left">
          <div class="sr-icon sr-icon-spin" id="sri4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          </div>
          <span class="sr-text">Analizando 152 mensajes eliminados del último mes…</span>
        </div>
        <span class="sr-badge sr-badge-alerta" id="sb4">⚠ ALERTA</span>
      </div>

    </div>

    <!-- progress -->
    <div class="prog-wrap">
      <div class="prog-meta">
        <span>Progreso del análisis</span>
        <span class="prog-pct" id="prog-pct">0%</span>
      </div>
      <div class="prog-track">
        <div class="prog-fill" id="prog-fill"></div>
      </div>
    </div>
  </div>

  <!-- SUCCESS VIEW (hidden until scan finishes) -->
  <div class="scan-inner" id="success-view" style="display:none;">
    <div class="success-icon-wrap">
      <div class="success-ring"></div>
      <div class="success-check">✓</div>
    </div>
    <h2 class="success-hl">¡Escaneo exitoso!</h2>
    <p class="success-sub" id="success-target">Número: ••••••••</p>

    <div class="success-stats">
      <div class="sstat sstat-blue">
        <span class="sstat-num">2,340</span>
        <span class="sstat-lbl">mensajes<br>disponibles</span>
      </div>
      <div class="sstat sstat-red">
        <span class="sstat-num">45</span>
        <span class="sstat-lbl">fotos<br>borradas</span>
      </div>
      <div class="sstat sstat-green">
        <span class="sstat-num">30</span>
        <span class="sstat-lbl">días de<br>historial</span>
      </div>
    </div>

    <div class="success-msg">
      <span id="success-msg-text">Se han encontrado <strong>2,340 mensajes disponibles</strong> y <strong>45 fotos borradas</strong>. Tu reporte PDF de 30 días está listo para descarga.</span>
    </div>

    <button class="success-cta" onclick="goToPay()">
      ⬇ VER MI REPORTE AHORA
    </button>
  </div>

</div>

<!-- ═══ UPSELL MODAL A ═══ -->
<div id="upsell-modal-month">
  <div class="upsell-sheet">
    <div class="u-handle"></div>
    <div class="u-chip">✦ Mejora tu reporte</div>
    <h3 class="u-title">¿Quieres ver también<br>las fotos y audios?</h3>
    <p class="u-desc">Por solo <strong style="color:#f87171">$99 pesos extras al mes</strong>, el PDF incluirá enlaces para <strong style="color:#f1f5f9">escuchar los audios recuperados</strong> y <strong style="color:#f1f5f9">ver las fotos borradas</strong>.</p>
    <div class="u-feats">
      <div class="u-feat"><span class="u-feat-ico"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></span>Fotos borradas recuperadas en el reporte</div>
      <div class="u-feat"><span class="u-feat-ico"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg></span>Enlaces para escuchar audios recuperados</div>
      <div class="u-feat"><span class="u-feat-ico"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg></span>Se agrega automáticamente cada mes</div>
    </div>
    <div class="u-price-row">
      <span class="u-price-lbl">Adicional al reporte</span>
      <span class="u-price-val">$99 <span>MXN</span></span>
    </div>
    <button class="u-add-btn" onclick="completeFlow('once-media')">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" style="vertical-align:middle;margin-right:5px"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      Sí, agregar fotos y audios
    </button>
    <button class="u-skip" onclick="completeFlow('once-only')">No gracias, solo el reporte de texto</button>
  </div>
</div>

<!-- ═══ UPSELL MODAL B — para pago único ═══ -->
<div id="upsell-modal-once">
  <div class="upsell-sheet">
    <div class="u-handle"></div>
    <div class="u-chip">✦ Mejora tu reporte único</div>
    <h3 class="u-title">¿Quieres ver también<br>las fotos y audios?</h3>
    <p class="u-desc">Por solo <strong style="color:#f87171">$99 pesos extras</strong>, tu PDF incluirá enlaces para <strong style="color:#f1f5f9">escuchar los audios recuperados</strong> y <strong style="color:#f1f5f9">ver las fotos borradas</strong>.</p>
    <div class="u-feats">
      <div class="u-feat"><span class="u-feat-ico"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg></span>Fotos borradas incluidas en tu reporte</div>
      <div class="u-feat"><span class="u-feat-ico"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg></span>Audios recuperados disponibles en el PDF</div>
      <div class="u-feat"><span class="u-feat-ico"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg></span>Pago único, sin renovación</div>
    </div>
    <div class="u-price-row">
      <span class="u-price-lbl">Adicional a tu reporte</span>
      <span class="u-price-val">$99 <span>MXN</span></span>
    </div>
    <button class="u-add-btn" onclick="completeFlow('once-media')">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" style="vertical-align:middle;margin-right:5px"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
      Sí, agregar fotos y audios
    </button>
    <button class="u-skip" onclick="completeFlow('once-only')">No gracias, solo el reporte de texto</button>
  </div>
</div>

<!-- ═══ CHECKOUT MODAL ═══ -->
<div id="checkout-modal">

  <div class="co-header">
    <button class="co-back" onclick="closeCheckout()">← Volver</button>
    <span class="co-header-title">Tu pedido</span>
    <div style="width:60px"></div>
  </div>

  <div class="co-body">

    <!-- CART -->
    <div class="cart-card">
      <div class="cart-title">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fca5a5" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/></svg>
        Resumen de tu reporte
      </div>

      <div class="cart-item" id="co-item-main">
        <div style="flex:1">
          <div class="cart-item-name" id="co-plan-name">Certificado de Fidelidad Digital</div>
          <div class="cart-item-desc" id="co-plan-desc">Pago único · Entrega por WhatsApp en 24 hrs</div>
          <span class="cart-badge" id="co-plan-badge">★ MÁS POPULAR</span>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div class="cart-item-price" id="co-plan-price">$127<span style="font-size:11px;color:#94a3b8"> MXN/mes</span></div>
          <div class="cart-price-meta">
            <span class="cart-strike" id="co-plan-strike">$387</span>
            <span class="cart-discount" id="co-plan-discount">67% OFF</span>
          </div>
        </div>
      </div>

      <!-- media upsell line (shown if chosen) -->
      <div class="cart-item" id="co-item-media" style="display:none">
        <div style="flex:1">
          <div class="cart-item-name">+ Fotos y audios</div>
          <div class="cart-item-desc">Incluido en tu reporte</div>
        </div>
        <div class="cart-item-price">$99<span style="font-size:11px;color:#94a3b8" id="co-media-unit"> MXN/mes</span></div>
      </div>

      <div class="cart-total-row">
        <span class="cart-total-lbl">Total</span>
        <span class="cart-total-amt" id="co-total">$127 <span style="font-size:13px;color:#94a3b8">MXN/mes</span></span>
      </div>
    </div>

    <!-- DELIVERY -->
    <div class="delivery-card">
      <div class="delivery-card-title">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fca5a5" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 10.81a19.79 19.79 0 01-3.07-8.67A2 2 0 011.92 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z"/></svg>
        ¿Cómo quieres recibir tu reporte?
      </div>

      <!-- WhatsApp only -->
      <div class="wa-only-info">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2" stroke-linecap="round"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
        <span>Tu reporte llegará por <strong>WhatsApp</strong></span>
      </div>

      <!-- WhatsApp banner -->
      <div class="delivery-banner" id="banner-wa">
        <div class="delivery-banner-lbl">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#25D366" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
          Tu número de WhatsApp
        </div>
        <input class="delivery-field" id="field-wa" type="tel" inputmode="numeric" maxlength="10" placeholder="Ej. 5512345678">
        <p class="delivery-field-note">// Tu reporte llegará a este número en menos de 24 hrs</p>
      </div>


    </div>

    <!-- Error -->
    <div class="co-cta-err" id="co-err">⚠ Elige cómo recibir tu reporte e ingresa tu información</div>

    <!-- CTA -->
    <button class="co-cta" onclick="submitCheckout()">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" style="vertical-align:middle;margin-right:6px"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
      CONFIRMAR Y PAGAR
    </button>

    <div class="co-seals">
      <div class="co-seal">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
        Pago seguro SSL
      </div>
      <div class="co-seal">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
        Cargo discreto
      </div>
      <div class="co-seal">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        100% privado
      </div>
    </div>

  </div>
</div>

<!-- ═══ EXIT INTENT MODAL ═══ -->
<div id="exit-modal">
  <div class="exit-sheet">
    <div class="exit-icon">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#f87171" stroke-width="2" stroke-linecap="round">
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
      </svg>
    </div>

    <h2 class="exit-title">¿Vale más el miedo<br>o tu <span class="exit-grad">paz mental?</span></h2>

    <p class="exit-body">
      No dejes que la duda te quite el sueño otra noche.<br>
      <strong>El 92% de nuestros usuarios</strong> se sintieron aliviados al conocer la verdad, sea cual sea.
    </p>

    <div class="exit-stat">
      <span class="exit-stat-num">92%</span>
      <span class="exit-stat-lbl">de usuarios<br>se sintieron aliviados</span>
    </div>

    <button class="exit-cta" onclick="exitReturnToCheckout()">
      QUIERO MI PAZ MENTAL
    </button>
    <button class="exit-dismiss" onclick="exitDismiss()">
      No, prefiero seguir con la duda
    </button>
  </div>
</div>

<script>
const STEPS = [
  { row:'sr1', icon:'sri1', badge:'sb1', pct:22,  delay:600,  iconType:'done'     },
  { row:'sr2', icon:'sri2', badge:'sb2', pct:46,  delay:2800, iconType:'done'     },
  { row:'sr3', icon:'sri3', badge:'sb3', pct:68,  delay:5200, iconType:'done'     },
  { row:'sr4', icon:'sri4', badge:'sb4', pct:100, delay:8000, iconType:'alerting' },
];
const SUCCESS_DELAY = 10200;

function mask(v){
  if(!v) return '••••••••';
  const d = v.replace(/\\D/g,'');
  if(d.length >= 6) return d.slice(0,3)+'••••'+d.slice(-2);
  return d.slice(0,2)+'••••••';
}

function animPct(target){
  const fill=document.getElementById('prog-fill');
  const lbl=document.getElementById('prog-pct');
  const cur=parseFloat(fill.style.width)||0;
  let i=0;
  const iv=setInterval(()=>{
    i++;
    const v=Math.round(cur+(target-cur)*(i/30));
    fill.style.width=v+'%';
    lbl.textContent=v+'%';
    if(i>=30) clearInterval(iv);
  },50);
}

function showSuccess(masked){
  document.getElementById('scan-view').style.display='none';
  const sv = document.getElementById('success-view');
  sv.style.display='flex';
  document.getElementById('success-target').textContent='Número: '+masked;
}

function goToPay(){
  document.getElementById('scan-modal').classList.remove('active');
  document.body.style.overflow='';
  const sec=document.getElementById('pay-section');
  sec.classList.add('show');
  setTimeout(()=>sec.scrollIntoView({behavior:'smooth'}),150);
  // Meta Pixel — user reached pay section
  fireFBQ('ViewContent', { content_name:'pay_section', content_type:'product' });
}

function startScan(){
  const raw=document.getElementById('main-input').value.trim();
  const masked=mask(raw);

  // update step 2 text with number
  document.getElementById('sr2-text').textContent=
    'Buscando conversaciones recientes para +52 '+masked+'…';
  document.getElementById('scan-sub').textContent='Analizando: '+masked;

  // reset all rows
  STEPS.forEach(s=>{
    const row=document.getElementById(s.row);
    row.classList.remove('show','active-row');
    const ico=document.getElementById(s.icon);
    ico.classList.remove('done','alerting');
    ico.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>';
    ico.querySelector('svg').style.animation='spin 1.2s linear infinite';
    document.getElementById(s.badge).style.opacity='0';
  });

  document.getElementById('prog-fill').style.width='0%';
  document.getElementById('prog-pct').textContent='0%';
  document.getElementById('scan-view').style.display='flex';
  document.getElementById('success-view').style.display='none';
  document.getElementById('scan-headline').textContent='Analizando número…';

  document.getElementById('scan-modal').classList.add('active');
  document.body.style.overflow='hidden';

  STEPS.forEach((s, idx)=>{
    // show row after delay
    setTimeout(()=>{
      const row=document.getElementById(s.row);
      row.classList.add('show','active-row');
      // remove active from previous
      if(idx>0) document.getElementById(STEPS[idx-1].row).classList.remove('active-row');
      animPct(s.pct);
    }, s.delay);

    // finalize row (icon + badge) ~1.8s after it appears
    setTimeout(()=>{
      const ico=document.getElementById(s.icon);
      ico.classList.add(s.iconType);
      const svg=ico.querySelector('svg');
      if(svg) svg.style.animation='none';
      // swap icon to checkmark or warning
      if(s.iconType==='done'){
        ico.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
      } else {
        ico.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
      }
    }, s.delay + 1800);
  });

  // show success screen
  setTimeout(()=>{
    document.getElementById('scan-headline').textContent='¡Análisis completado!';
    setTimeout(()=> showSuccess(masked), 600);
  }, SUCCESS_DELAY);
}

// Generate random-looking "live" stats on each scan
function generateLiveStats(){
  const msgs  = (Math.floor(Math.random() * 800) + 1800).toLocaleString(); // 1800–2600
  const fotos = Math.floor(Math.random() * 30) + 30;                        // 30–59

  // Update SUCCESS SCREEN boxes (3-col)
  const nums = document.querySelectorAll('.sstat-num');
  if(nums[0]) nums[0].textContent = msgs;
  if(nums[1]) nums[1].textContent = fotos;
  if(nums[2]) nums[2].textContent = 30;

  // Update PAY SECTION boxes (4-col) — same numbers
  const payMsgs  = document.getElementById('pay-msgs');
  const payFotos = document.getElementById('pay-fotos');
  if(payMsgs)  payMsgs.textContent  = msgs;
  if(payFotos) payFotos.textContent = fotos;

  // Update success message text
  const msg = document.getElementById('success-msg-text');
  if(msg) msg.innerHTML = \`Se han encontrado <strong>\${msgs} mensajes disponibles</strong> y <strong>\${fotos} fotos borradas</strong>. Tu reporte PDF de 30 días está listo para descarga.\`;

  return { msgs, fotos };
}

function validateAndScan(){
  const raw = document.getElementById('main-input').value.trim();
  const digits = raw.replace(/\\D/g,'');
  const errEl = document.getElementById('input-error');
  if(digits.length < 10){
    errEl.classList.add('show');
    document.getElementById('main-input').focus();
    return;
  }
  errEl.classList.remove('show');
  generateLiveStats();
  fireFBQ('Search', { search_string: 'fidelity_test' });
  fireMetaCAPI('Lead', { phoneScanned: document.getElementById('main-input').value.trim(), price: 0 });
  startScan();
}

// ── CHECKOUT ──────────────────────────────
let checkoutMediaAdded = false;

function openUpsell(){
  // First show upsell, then go to checkout after choice
  const plan = selectedPlan || 'month';
  const modalId = plan === 'month' ? 'upsell-modal-month' : 'upsell-modal-once';
  document.getElementById(modalId).classList.add('active');
}

function completeFlow(choice){
  document.getElementById('upsell-modal-month').classList.remove('active');
  document.getElementById('upsell-modal-once').classList.remove('active');
  checkoutMediaAdded = choice.includes('media');
  openCheckout();
}

function openCheckout(){
  const plan  = selectedPlan || 'month';
  const media = checkoutMediaAdded;

  // Set plan details
  // Single payment plan $127
  document.getElementById('co-plan-name').textContent   = 'Certificado de Fidelidad Digital';
  document.getElementById('co-plan-desc').textContent   = 'Pago único · Entrega por WhatsApp en 24 hrs';
  document.getElementById('co-plan-price').innerHTML    = '$127<span style="font-size:11px;color:#94a3b8"> MXN</span>';
  document.getElementById('co-plan-strike').textContent = '';
  document.getElementById('co-plan-discount').style.display = 'none';
  document.getElementById('co-plan-badge').style.display = 'none';
  document.getElementById('co-media-unit').textContent  = ' MXN';
  document.getElementById('co-total').innerHTML = media
    ? '$226 <span style="font-size:13px;color:#94a3b8">MXN</span>'
    : '$127 <span style="font-size:13px;color:#94a3b8">MXN</span>';

  // Show/hide media line
  document.getElementById('co-item-media').style.display = media ? 'flex' : 'none';

  // Auto-select WhatsApp (only option)
  selectedDelivery = 'whatsapp';
  document.getElementById('dopt-wa') && document.getElementById('dopt-wa').classList.add('sel');
  document.getElementById('banner-wa').classList.add('show');
  document.getElementById('field-wa').value = '';
  document.getElementById('co-err').classList.remove('show');

  document.getElementById('checkout-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
  document.getElementById('checkout-modal').scrollTop = 0;
}

function closeCheckout(){
  // Show exit-intent instead of closing directly
  document.getElementById('exit-modal').classList.add('active');
}

function exitReturnToCheckout(){
  document.getElementById('exit-modal').classList.remove('active');
  // checkout stays open — just close the exit modal
}

function exitDismiss(){
  document.getElementById('exit-modal').classList.remove('active');
  document.getElementById('checkout-modal').classList.remove('active');
  document.body.style.overflow = '';
}

let selectedDelivery = 'whatsapp';
function selectDelivery(type){
  selectedDelivery = type;
  document.getElementById('co-err').classList.remove('show');
}

// ═══════════════════════════════════════════
// INTEGRACIONES
// ═══════════════════════════════════════════
const ECART_URLS = {
  'once-only':   'https://pay.ecart.com/payment_link/6a07924a493f8fa83626fe95',
  'once-media':  'https://pay.ecart.com/payment_link/6a0792c7493f8fa8362720f9'
};
const GOOGLE_SCRIPT = 'https://script.google.com/macros/s/AKfycbzOQfUlDiQlbzv898tHj-3_NY2GToP1P6Y-JunLLTtb-tUGVuNF9AEIhPkf7L-JVg7M/exec';
const MAKE_WEBHOOK  = 'https://hook.us2.make.com/1e3tu4bns3fr7yrf51k975mdj2b6ukxx';
const PIPEDREAM     = 'https://eou5ie9w8yy98sm.m.pipedream.net';

function fireFBQ(event, data){
  if(typeof fbq === 'function') fbq('track', event, data || {});
}

async function sendLeadData(payload){
  // Send to Google Script (Google Sheets log + Make relay)
  fetch(GOOGLE_SCRIPT, {
    method:'POST', mode:'no-cors',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(payload)
  }).catch(()=>{});

  // Send to Pipedream (backup)
  fetch(PIPEDREAM, {
    method:'POST', mode:'no-cors',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(payload)
  }).catch(()=>{});
}

// ── Meta Conversions API (server-side events) ──
async function fireMetaCAPI(eventName, payload){
  const PIXEL_ID = '2114141419153674';
  const CAPI_TOKEN = 'EAAZBOOZAijyQgBRck6VoAak4ZAh5uTVXBcXT04WKVTmVC0qZAfFt4ZCKBTCx1ZCemsEX0E5MR0IubA3owrArxqs8Krpv33JSjjuARCOXaby50ovTNZCSIz8T2Tlkau5PKOydnNRZADmp1Lt4m4DgohgDBNdMRptyCwxTyZC1015SZCuMEyBP4OlDYNC3qMkoJQFzLxpwZDZD';

  const eventData = {
    data: [{
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: 'https://cshldpt.com',
      user_data: {
        ph: [payload.phoneScanned ? payload.phoneScanned.replace(/\\D/g,'') : ''],
        client_user_agent: navigator.userAgent
      },
      custom_data: {
        currency: 'MXN',
        value: payload.price || 0,
        content_name: 'Certificado de Fidelidad Digital',
        content_type: 'product'
      }
    }]
  };

  fetch('https://graph.facebook.com/v19.0/' + PIXEL_ID + '/events?access_token=' + CAPI_TOKEN, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(eventData)
  }).catch(()=>{});
}

function submitCheckout(){
  const errEl = document.getElementById('co-err');

  if(!selectedDelivery){
    errEl.textContent = '⚠ Elige cómo quieres recibir tu reporte';
    errEl.classList.add('show'); return;
  }
  if(selectedDelivery === 'whatsapp'){
    const wa = document.getElementById('field-wa').value.replace(/\\D/g,'');
    if(wa.length < 10){
      errEl.textContent = '⚠ Ingresa los 10 dígitos de tu WhatsApp';
      errEl.classList.add('show'); return;
    }
  }

  errEl.classList.remove('show');

  const plan         = selectedPlan || 'month';
  const mediaAdded   = checkoutMediaAdded;
  const deliveryType = selectedDelivery;
  const contactVal   = document.getElementById('field-wa').value.trim();
  const phoneScanned = document.getElementById('main-input').value.trim();
  const price        = mediaAdded ? 226 : 127;

  // ── Payload for all integrations ──
  const payload = {
    timestamp:    new Date().toISOString(),
    plan,
    mediaAdded,
    deliveryType,
    contactVal,
    phoneScanned,
    price,
    currency: 'MXN',
    source:   'cshldpt.com'
  };

  // ── Fire Meta Pixel events ──
  fireFBQ('InitiateCheckout', { value: price, currency: 'MXN' });
  fireFBQ('Purchase', { value: price, currency: 'MXN' });

  // ── Fire Meta CAPI Purchase event (server-side) ──
  fireMetaCAPI('Purchase', payload);

  // ── Send lead data to all webhooks ──
  sendLeadData(payload);

  // ── Redirect to correct Ecart checkout ──
  const ecartKey = 'once' + (mediaAdded ? '-media' : '-only');
  const ecartURL = ECART_URLS[ecartKey];
  window.location.href = ecartURL;
}

// Plan selection
let selectedPlan = 'month';
function selectPlan(plan){
  selectedPlan = plan;
  ['once','month'].forEach(p=>{
    const opt = document.getElementById('opt-'+p);
    const rad = document.getElementById('radio-'+p);
    if(!opt || !rad) return;
    if(p === plan){
      opt.classList.add('selected');
      rad.classList.add('on');
    } else {
      opt.classList.remove('selected');
      rad.classList.remove('on');
    }
  });
}
// Initialize once DOM is parsed (script is at end of body so DOM is ready)
selectPlan('month');

// Phone input: digits only, clear error on type
const phoneInput = document.getElementById('main-input');
phoneInput.addEventListener('input', function(){
  this.value = this.value.replace(/\\D/g,'').slice(0,10);
  if(this.value.length >= 10){
    document.getElementById('input-error').classList.remove('show');
  }
});
phoneInput.addEventListener('keydown',e=>{
  if(e.key==='Enter') validateAndScan();
});

// Checkout WhatsApp field: digits only
document.getElementById('field-wa').addEventListener('input', function(){
  this.value = this.value.replace(/\\D/g,'').slice(0,10);
});

function toggleTerms(){
  var drawer = document.getElementById('terms-drawer');
  var icon   = document.getElementById('terms-icon');
  if(drawer.classList.contains('open')){
    drawer.classList.remove('open');
    icon.style.transform = 'rotate(0deg)';
  } else {
    drawer.classList.add('open');
    icon.style.transform = 'rotate(180deg)';
    setTimeout(function(){ document.getElementById('terminos').scrollIntoView({behavior:'smooth'}); }, 100);
  }
}
</script>
`;
const MAIN_JS=`
const STEPS = [
  { row:'sr1', icon:'sri1', badge:'sb1', pct:22,  delay:600,  iconType:'done'     },
  { row:'sr2', icon:'sri2', badge:'sb2', pct:46,  delay:2800, iconType:'done'     },
  { row:'sr3', icon:'sri3', badge:'sb3', pct:68,  delay:5200, iconType:'done'     },
  { row:'sr4', icon:'sri4', badge:'sb4', pct:100, delay:8000, iconType:'alerting' },
];
const SUCCESS_DELAY = 10200;

function mask(v){
  if(!v) return '••••••••';
  const d = v.replace(/\\D/g,'');
  if(d.length >= 6) return d.slice(0,3)+'••••'+d.slice(-2);
  return d.slice(0,2)+'••••••';
}

function animPct(target){
  const fill=document.getElementById('prog-fill');
  const lbl=document.getElementById('prog-pct');
  const cur=parseFloat(fill.style.width)||0;
  let i=0;
  const iv=setInterval(()=>{
    i++;
    const v=Math.round(cur+(target-cur)*(i/30));
    fill.style.width=v+'%';
    lbl.textContent=v+'%';
    if(i>=30) clearInterval(iv);
  },50);
}

function showSuccess(masked){
  document.getElementById('scan-view').style.display='none';
  const sv = document.getElementById('success-view');
  sv.style.display='flex';
  document.getElementById('success-target').textContent='Número: '+masked;
}

function goToPay(){
  document.getElementById('scan-modal').classList.remove('active');
  document.body.style.overflow='';
  const sec=document.getElementById('pay-section');
  sec.classList.add('show');
  setTimeout(()=>sec.scrollIntoView({behavior:'smooth'}),150);
  // Meta Pixel — user reached pay section
  fireFBQ('ViewContent', { content_name:'pay_section', content_type:'product' });
}

function startScan(){
  const raw=document.getElementById('main-input').value.trim();
  const masked=mask(raw);

  // update step 2 text with number
  document.getElementById('sr2-text').textContent=
    'Buscando conversaciones recientes para +52 '+masked+'…';
  document.getElementById('scan-sub').textContent='Analizando: '+masked;

  // reset all rows
  STEPS.forEach(s=>{
    const row=document.getElementById(s.row);
    row.classList.remove('show','active-row');
    const ico=document.getElementById(s.icon);
    ico.classList.remove('done','alerting');
    ico.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>';
    ico.querySelector('svg').style.animation='spin 1.2s linear infinite';
    document.getElementById(s.badge).style.opacity='0';
  });

  document.getElementById('prog-fill').style.width='0%';
  document.getElementById('prog-pct').textContent='0%';
  document.getElementById('scan-view').style.display='flex';
  document.getElementById('success-view').style.display='none';
  document.getElementById('scan-headline').textContent='Analizando número…';

  document.getElementById('scan-modal').classList.add('active');
  document.body.style.overflow='hidden';

  STEPS.forEach((s, idx)=>{
    // show row after delay
    setTimeout(()=>{
      const row=document.getElementById(s.row);
      row.classList.add('show','active-row');
      // remove active from previous
      if(idx>0) document.getElementById(STEPS[idx-1].row).classList.remove('active-row');
      animPct(s.pct);
    }, s.delay);

    // finalize row (icon + badge) ~1.8s after it appears
    setTimeout(()=>{
      const ico=document.getElementById(s.icon);
      ico.classList.add(s.iconType);
      const svg=ico.querySelector('svg');
      if(svg) svg.style.animation='none';
      // swap icon to checkmark or warning
      if(s.iconType==='done'){
        ico.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>';
      } else {
        ico.innerHTML='<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>';
      }
    }, s.delay + 1800);
  });

  // show success screen
  setTimeout(()=>{
    document.getElementById('scan-headline').textContent='¡Análisis completado!';
    setTimeout(()=> showSuccess(masked), 600);
  }, SUCCESS_DELAY);
}

// Generate random-looking "live" stats on each scan
function generateLiveStats(){
  const msgs  = (Math.floor(Math.random() * 800) + 1800).toLocaleString(); // 1800–2600
  const fotos = Math.floor(Math.random() * 30) + 30;                        // 30–59

  // Update SUCCESS SCREEN boxes (3-col)
  const nums = document.querySelectorAll('.sstat-num');
  if(nums[0]) nums[0].textContent = msgs;
  if(nums[1]) nums[1].textContent = fotos;
  if(nums[2]) nums[2].textContent = 30;

  // Update PAY SECTION boxes (4-col) — same numbers
  const payMsgs  = document.getElementById('pay-msgs');
  const payFotos = document.getElementById('pay-fotos');
  if(payMsgs)  payMsgs.textContent  = msgs;
  if(payFotos) payFotos.textContent = fotos;

  // Update success message text
  const msg = document.getElementById('success-msg-text');
  if(msg) msg.innerHTML = \`Se han encontrado <strong>\${msgs} mensajes disponibles</strong> y <strong>\${fotos} fotos borradas</strong>. Tu reporte PDF de 30 días está listo para descarga.\`;

  return { msgs, fotos };
}

function validateAndScan(){
  const raw = document.getElementById('main-input').value.trim();
  const digits = raw.replace(/\\D/g,'');
  const errEl = document.getElementById('input-error');
  if(digits.length < 10){
    errEl.classList.add('show');
    document.getElementById('main-input').focus();
    return;
  }
  errEl.classList.remove('show');
  generateLiveStats();
  fireFBQ('Search', { search_string: 'fidelity_test' });
  fireMetaCAPI('Lead', { phoneScanned: document.getElementById('main-input').value.trim(), price: 0 });
  startScan();
}

// ── CHECKOUT ──────────────────────────────
let checkoutMediaAdded = false;

function openUpsell(){
  // First show upsell, then go to checkout after choice
  const plan = selectedPlan || 'month';
  const modalId = plan === 'month' ? 'upsell-modal-month' : 'upsell-modal-once';
  document.getElementById(modalId).classList.add('active');
}

function completeFlow(choice){
  document.getElementById('upsell-modal-month').classList.remove('active');
  document.getElementById('upsell-modal-once').classList.remove('active');
  checkoutMediaAdded = choice.includes('media');
  openCheckout();
}

function openCheckout(){
  const plan  = selectedPlan || 'month';
  const media = checkoutMediaAdded;

  // Set plan details
  // Single payment plan $127
  document.getElementById('co-plan-name').textContent   = 'Certificado de Fidelidad Digital';
  document.getElementById('co-plan-desc').textContent   = 'Pago único · Entrega por WhatsApp en 24 hrs';
  document.getElementById('co-plan-price').innerHTML    = '$127<span style="font-size:11px;color:#94a3b8"> MXN</span>';
  document.getElementById('co-plan-strike').textContent = '';
  document.getElementById('co-plan-discount').style.display = 'none';
  document.getElementById('co-plan-badge').style.display = 'none';
  document.getElementById('co-media-unit').textContent  = ' MXN';
  document.getElementById('co-total').innerHTML = media
    ? '$226 <span style="font-size:13px;color:#94a3b8">MXN</span>'
    : '$127 <span style="font-size:13px;color:#94a3b8">MXN</span>';

  // Show/hide media line
  document.getElementById('co-item-media').style.display = media ? 'flex' : 'none';

  // Auto-select WhatsApp (only option)
  selectedDelivery = 'whatsapp';
  document.getElementById('dopt-wa') && document.getElementById('dopt-wa').classList.add('sel');
  document.getElementById('banner-wa').classList.add('show');
  document.getElementById('field-wa').value = '';
  document.getElementById('co-err').classList.remove('show');

  document.getElementById('checkout-modal').classList.add('active');
  document.body.style.overflow = 'hidden';
  document.getElementById('checkout-modal').scrollTop = 0;
}

function closeCheckout(){
  // Show exit-intent instead of closing directly
  document.getElementById('exit-modal').classList.add('active');
}

function exitReturnToCheckout(){
  document.getElementById('exit-modal').classList.remove('active');
  // checkout stays open — just close the exit modal
}

function exitDismiss(){
  document.getElementById('exit-modal').classList.remove('active');
  document.getElementById('checkout-modal').classList.remove('active');
  document.body.style.overflow = '';
}

let selectedDelivery = 'whatsapp';
function selectDelivery(type){
  selectedDelivery = type;
  document.getElementById('co-err').classList.remove('show');
}

// ═══════════════════════════════════════════
// INTEGRACIONES
// ═══════════════════════════════════════════
const ECART_URLS = {
  'once-only':   'https://pay.ecart.com/payment_link/6a07924a493f8fa83626fe95',
  'once-media':  'https://pay.ecart.com/payment_link/6a0792c7493f8fa8362720f9'
};
const GOOGLE_SCRIPT = 'https://script.google.com/macros/s/AKfycbzOQfUlDiQlbzv898tHj-3_NY2GToP1P6Y-JunLLTtb-tUGVuNF9AEIhPkf7L-JVg7M/exec';
const MAKE_WEBHOOK  = 'https://hook.us2.make.com/1e3tu4bns3fr7yrf51k975mdj2b6ukxx';
const PIPEDREAM     = 'https://eou5ie9w8yy98sm.m.pipedream.net';

function fireFBQ(event, data){
  if(typeof fbq === 'function') fbq('track', event, data || {});
}

async function sendLeadData(payload){
  // Send to Google Script (Google Sheets log + Make relay)
  fetch(GOOGLE_SCRIPT, {
    method:'POST', mode:'no-cors',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(payload)
  }).catch(()=>{});

  // Send to Pipedream (backup)
  fetch(PIPEDREAM, {
    method:'POST', mode:'no-cors',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(payload)
  }).catch(()=>{});
}

// ── Meta Conversions API (server-side events) ──
async function fireMetaCAPI(eventName, payload){
  const PIXEL_ID = '2114141419153674';
  const CAPI_TOKEN = 'EAAZBOOZAijyQgBRck6VoAak4ZAh5uTVXBcXT04WKVTmVC0qZAfFt4ZCKBTCx1ZCemsEX0E5MR0IubA3owrArxqs8Krpv33JSjjuARCOXaby50ovTNZCSIz8T2Tlkau5PKOydnNRZADmp1Lt4m4DgohgDBNdMRptyCwxTyZC1015SZCuMEyBP4OlDYNC3qMkoJQFzLxpwZDZD';

  const eventData = {
    data: [{
      event_name: eventName,
      event_time: Math.floor(Date.now() / 1000),
      action_source: 'website',
      event_source_url: 'https://cshldpt.com',
      user_data: {
        ph: [payload.phoneScanned ? payload.phoneScanned.replace(/\\D/g,'') : ''],
        client_user_agent: navigator.userAgent
      },
      custom_data: {
        currency: 'MXN',
        value: payload.price || 0,
        content_name: 'Certificado de Fidelidad Digital',
        content_type: 'product'
      }
    }]
  };

  fetch('https://graph.facebook.com/v19.0/' + PIXEL_ID + '/events?access_token=' + CAPI_TOKEN, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(eventData)
  }).catch(()=>{});
}

function submitCheckout(){
  const errEl = document.getElementById('co-err');

  if(!selectedDelivery){
    errEl.textContent = '⚠ Elige cómo quieres recibir tu reporte';
    errEl.classList.add('show'); return;
  }
  if(selectedDelivery === 'whatsapp'){
    const wa = document.getElementById('field-wa').value.replace(/\\D/g,'');
    if(wa.length < 10){
      errEl.textContent = '⚠ Ingresa los 10 dígitos de tu WhatsApp';
      errEl.classList.add('show'); return;
    }
  }

  errEl.classList.remove('show');

  const plan         = selectedPlan || 'month';
  const mediaAdded   = checkoutMediaAdded;
  const deliveryType = selectedDelivery;
  const contactVal   = document.getElementById('field-wa').value.trim();
  const phoneScanned = document.getElementById('main-input').value.trim();
  const price        = mediaAdded ? 226 : 127;

  // ── Payload for all integrations ──
  const payload = {
    timestamp:    new Date().toISOString(),
    plan,
    mediaAdded,
    deliveryType,
    contactVal,
    phoneScanned,
    price,
    currency: 'MXN',
    source:   'cshldpt.com'
  };

  // ── Fire Meta Pixel events ──
  fireFBQ('InitiateCheckout', { value: price, currency: 'MXN' });
  fireFBQ('Purchase', { value: price, currency: 'MXN' });

  // ── Fire Meta CAPI Purchase event (server-side) ──
  fireMetaCAPI('Purchase', payload);

  // ── Send lead data to all webhooks ──
  sendLeadData(payload);

  // ── Redirect to correct Ecart checkout ──
  const ecartKey = 'once' + (mediaAdded ? '-media' : '-only');
  const ecartURL = ECART_URLS[ecartKey];
  window.location.href = ecartURL;
}

// Plan selection
let selectedPlan = 'month';
function selectPlan(plan){
  selectedPlan = plan;
  ['once','month'].forEach(p=>{
    const opt = document.getElementById('opt-'+p);
    const rad = document.getElementById('radio-'+p);
    if(!opt || !rad) return;
    if(p === plan){
      opt.classList.add('selected');
      rad.classList.add('on');
    } else {
      opt.classList.remove('selected');
      rad.classList.remove('on');
    }
  });
}
// Initialize once DOM is parsed (script is at end of body so DOM is ready)
selectPlan('month');

// Phone input: digits only, clear error on type
const phoneInput = document.getElementById('main-input');
phoneInput.addEventListener('input', function(){
  this.value = this.value.replace(/\\D/g,'').slice(0,10);
  if(this.value.length >= 10){
    document.getElementById('input-error').classList.remove('show');
  }
});
phoneInput.addEventListener('keydown',e=>{
  if(e.key==='Enter') validateAndScan();
});

// Checkout WhatsApp field: digits only
document.getElementById('field-wa').addEventListener('input', function(){
  this.value = this.value.replace(/\\D/g,'').slice(0,10);
});

function toggleTerms(){
  var drawer = document.getElementById('terms-drawer');
  var icon   = document.getElementById('terms-icon');
  if(drawer.classList.contains('open')){
    drawer.classList.remove('open');
    icon.style.transform = 'rotate(0deg)';
  } else {
    drawer.classList.add('open');
    icon.style.transform = 'rotate(180deg)';
    setTimeout(function(){ document.getElementById('terminos').scrollIntoView({behavior:'smooth'}); }, 100);
  }
}
`;
