import { useState, useEffect } from 'react';

const fbq = (event: string, name: string, params: object = {}) => {
  console.log(`[META PIXEL] ${event}("${name}", ${JSON.stringify(params || {})})`);
};

const C = {
  blue: "#1a56db", blueDark: "#1648c4", blueLight: "#eff6ff",
  green: "#16a34a", greenLight: "#f0fdf4",
  orange: "#ea580c", orangeLight: "#fff7ed",
  white: "#ffffff", surface: "#f8fafc",
  border: "#e2e8f0", text: "#0f172a", muted: "#64748b", subtle: "#94a3b8",
};

const PRODUCTOS = [
  // ── PAQUETES ──────────────────────────────────────────────────────────────
  { id:"P012", tipo:"PAQUETE", nombre:"Paquete Confianza", paga:500,  recibe:1500,  disponibles:8, tiempo:"1 – 3 días hábiles · Todo México", badge:"NUEVO", badgeType:"blue", envioGratis:true, popular:false,
    link:"https://pay.ecart.com/payment_link/69f3007228061d954c02e52a" },
  { id:"P001", tipo:"PAQUETE", nombre:"Paquete Básico",    paga:1000, recibe:4000,  disponibles:7, tiempo:"1 – 3 días hábiles · Todo México", badge:"MÁS SOLICITADO", badgeType:"orange", envioGratis:true, popular:true,
    link:"https://pay.ecart.com/payment_link/69f2fe2a20f81ed6ab9a2fad" },
  { id:"P004", tipo:"PAQUETE", nombre:"Paquete Pro",       paga:1500, recibe:6000,  disponibles:5, tiempo:"1 – 3 días hábiles · Todo México", badge:"ALTA DEMANDA", badgeType:"orange", envioGratis:true, popular:false,
    link:"https://pay.ecart.com/payment_link/69f2fe7d28061d954c02d658" },
  { id:"P007", tipo:"PAQUETE", nombre:"Paquete VIP",       paga:2500, recibe:15000, disponibles:3, tiempo:"1 – 3 días hábiles · Todo México", badge:"EXCLUSIVO", badgeType:"blue", envioGratis:true, popular:false,
    link:"https://pay.ecart.com/payment_link/69f2fefe20f81ed6ab9a36e3" },

  // ── RETIROS ───────────────────────────────────────────────────────────────
  { id:"P013", tipo:"RETIRO", nombre:"Retiro Confianza", paga:500,  recibe:1500,  disponibles:8, tiempo:"10 – 30 min", badge:"NUEVO", badgeType:"blue", envioGratis:false, sinTarjeta:true, popular:false,
    link:"https://pay.ecart.com/payment_link/69f3008b28061d954c02e5cf" },
  { id:"P002", tipo:"RETIRO", nombre:"Retiro Capital",   paga:1000, recibe:3000,  disponibles:6, tiempo:"10 – 30 min", badge:"MÁS SOLICITADO", badgeType:"orange", envioGratis:false, sinTarjeta:true, popular:true,
    link:"https://pay.ecart.com/payment_link/69f2ff2028061d954c02db5e" },
  { id:"P005", tipo:"RETIRO", nombre:"Retiro Elite",     paga:1500, recibe:5000,  disponibles:5, tiempo:"10 – 30 min", badge:"ALTA DEMANDA", badgeType:"orange", envioGratis:false, sinTarjeta:true, popular:false,
    link:"https://pay.ecart.com/payment_link/69f2ff3828061d954c02dbd8" },
  { id:"P008", tipo:"RETIRO", nombre:"Retiro VIP",       paga:2000, recibe:9000,  disponibles:4, tiempo:"10 – 30 min", badge:"ACCESO LIMITADO", badgeType:"blue", envioGratis:false, sinTarjeta:true, popular:false,
    link:"https://pay.ecart.com/payment_link/69f2ff6020f81ed6ab9a3ab4" },
  { id:"P009", tipo:"RETIRO", nombre:"Retiro GOLD",      paga:2500, recibe:12000, disponibles:2, tiempo:"10 – 30 min", badge:"EXCLUSIVO", badgeType:"blue", envioGratis:false, sinTarjeta:true, popular:false,
    link:"https://pay.ecart.com/payment_link/69f2ff7820f81ed6ab9a3b5f" },

  // ── TRANSFERENCIAS ────────────────────────────────────────────────────────
  { id:"P014", tipo:"TRANSFERENCIA", nombre:"Transfer Confianza", paga:500,  recibe:1500,  disponibles:8, tiempo:"10 – 30 min", badge:"NUEVO", badgeType:"blue", envioGratis:false, aCuenta:true, popular:false,
    link:"https://pay.ecart.com/payment_link/69f300a128061d954c02e6ec" },
  { id:"P003", tipo:"TRANSFERENCIA", nombre:"Transfer Capital",   paga:1000, recibe:3000,  disponibles:6, tiempo:"10 – 30 min", badge:"MÁS SOLICITADO", badgeType:"orange", envioGratis:false, aCuenta:true, popular:true,
    link:"https://pay.ecart.com/payment_link/69f2ff9128061d954c02deab" },
  { id:"P006", tipo:"TRANSFERENCIA", nombre:"Transfer Elite",     paga:1500, recibe:5000,  disponibles:5, tiempo:"10 – 30 min", badge:"ALTA DEMANDA", badgeType:"orange", envioGratis:false, aCuenta:true, popular:false,
    link:"https://pay.ecart.com/payment_link/69f2ffa928061d954c02df9b" },
  { id:"P010", tipo:"TRANSFERENCIA", nombre:"Transfer VIP",       paga:2000, recibe:9000,  disponibles:4, tiempo:"10 – 30 min", badge:"ACCESO LIMITADO", badgeType:"blue", envioGratis:false, aCuenta:true, popular:false,
    link:"https://pay.ecart.com/payment_link/69f2ffd428061d954c02e14e" },
  { id:"P011", tipo:"TRANSFERENCIA", nombre:"Transfer GOLD",      paga:2500, recibe:12000, disponibles:2, tiempo:"10 – 30 min", badge:"EXCLUSIVO", badgeType:"blue", envioGratis:false, aCuenta:true, popular:false,
    link:"https://pay.ecart.com/payment_link/69f2ffe920f81ed6ab9a3e54" },
];

const REVIEWS_DATA = [
  { nombre:"Roberto M.", ciudad:"CDMX", estrellas:5, texto:"Excelente servicio. Me llegó en menos de 3 horas, sin complicaciones. Ya es mi segunda operación.", fecha:"hace 2 días" },
  { nombre:"Mariana L.", ciudad:"Guadalajara", estrellas:5, texto:"Proceso limpio y rápido. El soporte respondió en minutos cuando tuve una duda. 100% recomendado.", fecha:"hace 4 días" },
  { nombre:"Andrés F.", ciudad:"Monterrey", estrellas:5, texto:"Al principio dudé, pero funcionó perfecto. El sistema es serio y confiable.", fecha:"hace 5 días" },
  { nombre:"Carmen R.", ciudad:"Puebla", estrellas:5, texto:"Sencillo, claro y cumplió exactamente lo que prometió. Muy satisfecha.", fecha:"hace 1 semana" },
  { nombre:"Jorge V.", ciudad:"Tijuana", estrellas:4, texto:"Muy bueno. Tardó un poco más de lo esperado pero al final todo correcto.", fecha:"hace 1 semana" },
  { nombre:"Sofía P.", ciudad:"Cancún", estrellas:5, texto:"Lo usé por recomendación y no me arrepiento. Volvería a usar el servicio sin duda.", fecha:"hace 8 días" },
];

const ACTIVIDAD_LIVE = [
  "CDMX — operación confirmada hace 1 min",
  "Guadalajara — retiro procesado hace 3 min",
  "Monterrey — paquete activado hace 5 min",
  "Puebla — transferencia completada hace 7 min",
  "Tijuana — paquete básico confirmado hace 9 min",
  "León — operación completada hace 11 min",
  "CDMX — capital transferido hace 14 min",
  "Cancún — retiro confirmado hace 16 min",
];

const fmt = (n) => "$" + n.toLocaleString("es-MX");

function Estrellas({ n = 5, size = 14 }: { n?: number; size?: number }) {
  return (
    <span style={{ display:"inline-flex", gap:2 }}>
      {[1,2,3,4,5].map(i => (
        <span key={i} style={{ fontSize:size, color: i<=n ? "#f59e0b" : "#d1d5db" }}>★</span>
      ))}
    </span>
  );
}

function Loader({ onDone }: { onDone: () => void }) {
  const [step, setStep] = useState(0);
  const steps = ["INICIALIZANDO SISTEMA…","VALIDANDO ACCESO…","ACCESO AUTORIZADO"];
  useEffect(() => {
    const t1 = setTimeout(()=>setStep(1), 900);
    const t2 = setTimeout(()=>setStep(2), 1800);
    const t3 = setTimeout(()=>onDone(), 2700);
    return () => [t1,t2,t3].forEach(clearTimeout);
  }, []);
  return (
    <div style={{ position:"fixed", inset:0, background:C.blue, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", zIndex:9999, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
      <div style={{ fontSize:32, fontWeight:800, color:"#fff", letterSpacing:-1, marginBottom:6 }}>CLD</div>
      <div style={{ fontSize:11, letterSpacing:4, color:"rgba(255,255,255,0.5)", marginBottom:40 }}>CASH LAUNDRY DEPARTMENT</div>
      <div style={{ fontSize:13, letterSpacing:2, fontWeight:600, color: step===2 ? "#86efac" : "rgba(255,255,255,0.9)", transition:"color 0.4s", marginBottom:28 }}>
        {steps[step]}
      </div>
      <div style={{ width:220, height:3, background:"rgba(255,255,255,0.15)", borderRadius:99, overflow:"hidden" }}>
        <div style={{ height:"100%", background:"#fff", borderRadius:99, width: step===0?"25%": step===1?"65%":"100%", transition:"width 0.8s cubic-bezier(.4,0,.2,1)" }} />
      </div>
    </div>
  );
}

function LiveTicker() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const t = setInterval(() => {
      setVisible(false);
      setTimeout(() => { setIdx(i=>(i+1)%ACTIVIDAD_LIVE.length); setVisible(true); }, 350);
    }, 3000);
    return () => clearInterval(t);
  }, []);
  return (
    <div style={{ background:C.greenLight, borderBottom:"1px solid #bbf7d0", padding:"9px 24px", display:"flex", alignItems:"center", gap:10 }}>
      <span style={{ background:C.green, color:"#fff", borderRadius:99, fontSize:9, fontWeight:700, padding:"2px 8px", letterSpacing:1, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>● EN VIVO</span>
      <span style={{ color:C.green, fontSize:13, fontWeight:500, opacity:visible?1:0, transition:"opacity 0.3s", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{ACTIVIDAD_LIVE[idx]}</span>
    </div>
  );
}

function Nav({ setView, view }: { setView: (v: string) => void; view: string }) {
  return (
    <nav style={{ background:C.white, borderBottom:"1px solid "+C.border, padding:"0 32px", display:"flex", alignItems:"center", justifyContent:"space-between", height:60, position:"sticky", top:0, zIndex:100, boxShadow:"0 1px 3px rgba(0,0,0,0.06)" }}>
      <div style={{ display:"flex", alignItems:"center", gap:10, cursor:"pointer" }} onClick={()=>setView("home")}>
        <div style={{ width:36, height:36, background:C.blue, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
          <span style={{ fontSize:11, fontWeight:900, color:"#fff", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>CLD</span>
        </div>
        <span style={{ fontSize:14, fontWeight:900, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif", letterSpacing:0.5, whiteSpace:"nowrap" }}>CA$H LAUNDRY DEPARTMENT</span>
      </div>
      <div style={{ display:"flex", alignItems:"center", gap:4 }}>

      </div>
    </nav>
  );
}


// ─── SISTEMA ACTIVO (header pulse) ───────────────────────────────────────────
function SistemaActivo() {
  return (
    <div style={{ display:"flex", alignItems:"center", gap:6, background:"#f0fdf4", border:"1px solid #86efac", borderRadius:99, padding:"4px 12px", cursor:"default" }}>
      <div style={{ width:8, height:8, borderRadius:"50%", background:"#16a34a", animation:"pulse 1.5s infinite", flexShrink:0 }} />
      <span style={{ fontSize:11, fontWeight:700, color:"#15803d", fontFamily:"'Plus Jakarta Sans',sans-serif", whiteSpace:"nowrap" }}>SISTEMA ACTIVO · Depósitos en 15 min</span>
    </div>
  );
}

// ─── TIMER CORTE ─────────────────────────────────────────────────────────────
function TimerCorte() {
  const [secs, setSecs] = useState(525);
  useEffect(() => {
    const t = setInterval(() => setSecs(s => s <= 0 ? 525 : s - 1), 1000);
    return () => clearInterval(t);
  }, []);
  const m = String(Math.floor(secs / 60)).padStart(2,"0");
  const s = String(secs % 60).padStart(2,"0");
  const now = new Date();
  now.setMinutes(now.getMinutes() + 20);
  const hrs = now.getHours();
  const min = String(now.getMinutes()).padStart(2,"0");
  const bloque = `${hrs}:${min} hrs`;
  return (
    <div style={{ background:"#fffbeb", borderBottom:"1px solid #fde68a", padding:"8px 20px", display:"flex", alignItems:"center", justifyContent:"center", gap:12, flexWrap:"wrap" }}>
      <span style={{ fontSize:12, color:"#92400e", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:500 }}>⚡ Realiza tu pedido en los próximos</span>
      <span style={{ fontSize:14, fontWeight:800, color:"#b45309", fontFamily:"'Plus Jakarta Sans',sans-serif", background:"#fef3c7", padding:"2px 10px", borderRadius:6 }}>{m}:{s}</span>
      <span style={{ fontSize:12, color:"#92400e", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:500 }}>para recibir tu depósito en el bloque de las <strong>{bloque}</strong></span>
    </div>
  );
}

// ─── TOAST SOCIAL PROOF ───────────────────────────────────────────────────────
const TOASTS = [
  { nombre:"Juan C.", ciudad:"Monterrey", monto:"$2,000", min:4 },
  { nombre:"María G.", ciudad:"CDMX", monto:"$1,500", min:7 },
  { nombre:"Roberto A.", ciudad:"Guadalajara", monto:"$3,000", min:2 },
  { nombre:"Sofía M.", ciudad:"Puebla", monto:"$500", min:9 },
  { nombre:"Carlos V.", ciudad:"Tijuana", monto:"$2,500", min:5 },
  { nombre:"Ana L.", ciudad:"Cancún", monto:"$1,000", min:11 },
];
function ToastProof() {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const show = () => { setVisible(true); setTimeout(() => setVisible(false), 4000); };
    const interval = setInterval(() => {
      setIdx(i => (i + 1) % TOASTS.length);
      show();
    }, 9000);
    setTimeout(show, 3000);
    return () => clearInterval(interval);
  }, []);
  const t = TOASTS[idx];
  return (
    <div style={{
      position:"fixed", bottom:80, left:16, zIndex:999,
      background:C.white, border:"1px solid "+C.border,
      borderRadius:12, padding:"12px 16px", boxShadow:"0 4px 20px rgba(0,0,0,0.12)",
      maxWidth:260, transition:"all 0.4s cubic-bezier(.4,0,.2,1)",
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
      pointerEvents:"none",
    }}>
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <div style={{ width:36, height:36, borderRadius:"50%", background:C.green, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, flexShrink:0 }}>💸</div>
        <div>
          <div style={{ fontSize:12, fontWeight:700, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{t.nombre} de {t.ciudad}</div>
          <div style={{ fontSize:11, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>acaba de recibir <strong style={{ color:C.green }}>{t.monto} MXN</strong> hace {t.min} min</div>
        </div>
      </div>
    </div>
  );
}

// ─── STICKY CTA ───────────────────────────────────────────────────────────────
function StickyCTA({ setView }: { setView: (v:string)=>void }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{
      position:"fixed", bottom:16, right:16, zIndex:998,
      opacity: show ? 1 : 0, transform: show ? "scale(1)" : "scale(0.8)",
      transition:"all 0.3s", pointerEvents: show ? "auto" : "none",
    }}>
      <button onClick={() => setView("productos")} style={{
        background:C.green, color:"#fff", border:"none",
        padding:"14px 22px", borderRadius:99, fontSize:14, fontWeight:800,
        cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif",
        boxShadow:"0 4px 16px rgba(22,163,74,0.4)",
        display:"flex", alignItems:"center", gap:8,
      }}>
        💰 OBTENER MI CASH
      </button>
    </div>
  );
}

// ─── PASOS ────────────────────────────────────────────────────────────────────
function SeccionPasos({ setView }: { setView: (v:string)=>void }) {
  const pasos = [
    { n:"1", icon:"🎯", titulo:"Elige tu monto", desc:"Selecciona el paquete, retiro o transferencia que más te convenga." },
    { n:"2", icon:"🔒", titulo:"Realiza el pago seguro", desc:"Pago procesado por Ecart Pay. Tarjeta, SPEI, OXXO o transferencia bancaria." },
    { n:"3", icon:"💸", titulo:"Recibe tu CASH", desc:"El dinero llega directo a tu cuenta. Paquetes de Cash en 1-3 días, retiros y transferencias en 10-30 min." },
  ];
  return (
    <section style={{ background:C.white, padding:"40px 24px", borderBottom:"1px solid "+C.border }}>
      <div style={{ maxWidth:900, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:28 }}>
          <h2 style={{ fontSize:22, fontWeight:800, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif", margin:"0 0 4px", letterSpacing:-0.3 }}>¿Cómo funciona?</h2>
          <p style={{ fontSize:13, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>3 pasos. Sin complicaciones.</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:16 }}>
          {pasos.map((p,i)=>(
            <div key={p.n} style={{ background:C.surface, border:"1px solid "+C.border, borderRadius:12, padding:"24px 20px", textAlign:"center", position:"relative" }}>
              <div style={{ width:40, height:40, borderRadius:"50%", background:C.blue, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 12px", fontSize:18, fontWeight:800, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{p.n}</div>
              <div style={{ fontSize:24, marginBottom:8 }}>{p.icon}</div>
              <div style={{ fontSize:15, fontWeight:700, color:C.text, marginBottom:6, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{p.titulo}</div>
              <div style={{ fontSize:13, color:C.muted, lineHeight:1.5, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{p.desc}</div>
              {i < pasos.length-1 && (
                <div style={{ position:"absolute", right:-12, top:"50%", transform:"translateY(-50%)", fontSize:20, color:C.border, display:"none" }}>→</div>
              )}
            </div>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:24 }}>
          <button onClick={()=>setView("productos")} style={{ background:C.blue, color:"#fff", border:"none", padding:"13px 32px", borderRadius:10, fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", boxShadow:"0 3px 12px rgba(26,86,219,0.3)" }}>
            Ver operaciones disponibles →
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── BANNER TRANSPARENCIA ─────────────────────────────────────────────────────
function BannerTransparencia() {
  return (
    <div style={{ background:"#f0fdf4", borderTop:"2px solid #16a34a", borderBottom:"2px solid #16a34a", padding:"14px 24px", display:"flex", alignItems:"center", justifyContent:"center", gap:12 }}>
      <div style={{ width:32, height:32, borderRadius:"50%", background:"#16a34a", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:16 }}>✅</div>
      <div>
        <div style={{ fontSize:14, fontWeight:800, color:"#14532d", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Sin letra chiquita</div>
        <div style={{ fontSize:12, color:"#15803d", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>El monto que ves es exactamente el monto que recibes en tu cuenta.</div>
      </div>
    </div>
  );
}

// ─── SELLOS BANCARIOS ─────────────────────────────────────────────────────────
function SellosBancarios() {
  const bancos = ["BBVA","Santander","Banamex","Banorte"];
  const colores = ["#004A97","#EC0000","#006CAE","#E2231A"];
  return (
    <div style={{ background:C.surface, borderTop:"1px solid "+C.border, padding:"16px 24px" }}>
      <div style={{ maxWidth:900, margin:"0 auto" }}>
        <div style={{ fontSize:11, color:C.muted, textAlign:"center", marginBottom:12, fontFamily:"'Plus Jakarta Sans',sans-serif", letterSpacing:1, fontWeight:600 }}>COMPATIBLE CON TU BANCO</div>
        <div style={{ display:"flex", gap:12, justifyContent:"center", alignItems:"center", flexWrap:"wrap" }}>
          {bancos.map((b,i)=>(
            <div key={b} style={{ background:C.white, border:"1px solid "+C.border, borderRadius:8, padding:"8px 16px", display:"flex", alignItems:"center", gap:6 }}>
              <div style={{ width:10, height:10, borderRadius:"50%", background:colores[i], flexShrink:0 }} />
              <span style={{ fontSize:12, fontWeight:700, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{b}</span>
            </div>
          ))}
          <div style={{ background:C.white, border:"1px solid "+C.border, borderRadius:8, padding:"8px 16px", display:"flex", alignItems:"center", gap:6 }}>
            <span style={{ fontSize:13 }}>🏦</span>
            <span style={{ fontSize:12, fontWeight:700, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>SPEI</span>
          </div>
          <div style={{ background:C.white, border:"1px solid "+C.border, borderRadius:8, padding:"8px 16px", display:"flex", alignItems:"center", gap:6 }}>
            <span style={{ fontSize:13 }}>💳</span>
            <span style={{ fontSize:12, fontWeight:700, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Visa / MC</span>
          </div>
          <div style={{ background:C.white, border:"1px solid "+C.border, borderRadius:8, padding:"8px 16px", display:"flex", alignItems:"center", gap:6 }}>
            <span style={{ fontSize:13 }}>🏪</span>
            <span style={{ fontSize:12, fontWeight:700, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>OXXO Pay</span>
          </div>
        </div>
        <div style={{ marginTop:12, background:C.white, border:"1px solid "+C.border, borderRadius:10, padding:"10px 16px", display:"flex", alignItems:"center", justifyContent:"center", gap:8 }}>
          <span style={{ fontSize:18 }}>🔒</span>
          <span style={{ fontSize:12, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Pago procesado de forma segura por</span>
          <span style={{ fontSize:13, fontWeight:800, color:C.blue, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>ecartPay</span>
        </div>
      </div>
    </div>
  );
}

function Sellos() {
  const items = [{ icon:"🔒", label:"Pago seguro" },{ icon:"✅", label:"5,200+ ops" },{ icon:"⚡", label:"Garantía" },{ icon:"🇲🇽", label:"Todo México" },{ icon:"💬", label:"Soporte" }];
  return (
    <div style={{ background:C.surface, borderBottom:"1px solid "+C.border, padding:"8px 16px", display:"flex", gap:0, justifyContent:"center", flexWrap:"nowrap", overflowX:"auto" }}>
      {items.map((s,i)=>(
        <div key={s.label} style={{ display:"flex", alignItems:"center", gap:4, padding:"0 12px", borderRight: i<items.length-1 ? "1px solid "+C.border : "none", flexShrink:0 }}>
          <span style={{ fontSize:13 }}>{s.icon}</span>
          <span style={{ fontSize:11, color:C.muted, fontWeight:600, fontFamily:"'Plus Jakarta Sans',sans-serif", whiteSpace:"nowrap" }}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function Hero({ setView }: { setView: (v: string) => void }) {
  const [ops, setOps] = useState(7);
  useEffect(() => {
    const vals=[7,6,8,5,9,4,7,6,8,5]; let vi=0; const t = setInterval(()=>{ vi=(vi+1)%vals.length; setOps(vals[vi]); }, 45000);
    return ()=>clearInterval(t);
  }, []);
  return (
    <section style={{ background:"linear-gradient(135deg,"+C.blueLight+" 0%,#fff 60%)", padding:"40px 24px 36px", borderBottom:"1px solid "+C.border }}>
      <div style={{ maxWidth:900, margin:"0 auto" }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:C.white, border:"1px solid "+C.border, borderRadius:99, padding:"4px 12px", marginBottom:16, boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
          <Estrellas n={5} size={11} />
          <span style={{ fontSize:12, fontWeight:600, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>4.9/5</span>
          <span style={{ fontSize:11, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>· +5,200 operaciones</span>
        </div>
        <h1 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:"clamp(28px,5vw,52px)", fontWeight:800, color:C.text, lineHeight:1.1, margin:"0 0 16px", letterSpacing:-1.5 }}>
          Tu dinero disponible<br /><span style={{ color:C.blue }}>hoy mismo en tu cuenta</span>
        </h1>
        <p style={{ fontSize:14, color:C.muted, maxWidth:480, lineHeight:1.55, marginBottom:24, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
          Recibe efectivo de forma segura en menos de 15 minutos vía SPEI. Sin trámites, sin burocracia y 100% garantizado.
        </p>
        <div style={{ display:"flex", gap:12, flexWrap:"wrap", alignItems:"center", marginBottom:40 }}>
          <button onClick={()=>setView("productos")} style={{ background:C.green, color:"#fff", border:"none", padding:"15px 32px", borderRadius:10, fontSize:16, fontWeight:700, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", boxShadow:"0 4px 14px rgba(22,163,74,0.35)" }}
            onMouseEnter={e=>{e.currentTarget.style.background=C.blueDark;e.currentTarget.style.transform="translateY(-1px)"}}
            onMouseLeave={e=>{e.currentTarget.style.background=C.blue;e.currentTarget.style.transform="translateY(0)"}}
          >OBTENER MI EFECTIVO AHORA</button>
          <div style={{ display:"flex", alignItems:"center", gap:6, background:C.orangeLight, border:"1px solid #fed7aa", borderRadius:8, padding:"10px 16px" }}>
            <span style={{ fontSize:14 }}>🔥</span>
            <span style={{ fontSize:13, fontWeight:600, color:C.orange, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Solo quedan {ops} operaciones disponibles</span>
          </div>
        </div>
        <div style={{ display:"flex", gap:0, flexWrap:"nowrap", overflowX:"auto" }}>
          {[{n:"+5,200",l:"Ops completadas"},{n:"100%",l:"Depósito Garantizado"},{n:"182",l:"Ops hoy"},{n:"15 min",l:"En 15 Minutos"}].map((s,i,arr)=>(
            <div key={s.l} style={{ paddingRight:20, marginRight:20, borderRight: i<arr.length-1 ? "1px solid "+C.border : "none", flexShrink:0 }}>
              <div style={{ fontSize:22, fontWeight:800, color:C.blue, fontFamily:"'Plus Jakarta Sans',sans-serif", lineHeight:1 }}>{s.n}</div>
              <div style={{ fontSize:11, color:C.muted, marginTop:2, fontFamily:"'Plus Jakarta Sans',sans-serif", whiteSpace:"nowrap" }}>{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeccionGarantias() {
  const items = [
    { icon:"🛡️", titulo:"Garantía de operación", desc:"Si tu operación no se completa correctamente, recibirás soporte prioritario y resolución total. Sin letras chiquitas.", bg:C.blueLight, border:"#bfdbfe" },
    { icon:"⚡", titulo:"Entrega en tiempo", desc:"182 operaciones procesadas hoy. Tu operación entra al sistema en minutos y se procesa dentro del tiempo estimado.", bg:C.greenLight, border:"#bbf7d0" },
    { icon:"🔒", titulo:"Datos protegidos", desc:"Tu información es confidencial. Operamos con cifrado y nunca compartimos datos con terceros.", bg:C.orangeLight, border:"#fed7aa" },
    { icon:"💬", titulo:"Soporte en español", desc:"Equipo de soporte disponible para resolver cualquier duda antes, durante y después de tu operación.", bg:"#fdf4ff", border:"#e9d5ff" },
  ];
  return (
    <section style={{ background:C.white, padding:"36px 32px", borderBottom:"1px solid "+C.border }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:28 }}>
          <h2 style={{ fontSize:22, fontWeight:800, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:4, letterSpacing:-0.3 }}>Tu operación está respaldada</h2>
          <p style={{ fontSize:13, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Garantías reales, no promesas vacías</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:16 }}>
          {items.map(g=>(
            <div key={g.titulo} style={{ background:g.bg, border:"1px solid "+g.border, borderRadius:12, padding:"24px 22px" }}>
              <div style={{ fontSize:32, marginBottom:12 }}>{g.icon}</div>
              <div style={{ fontSize:16, fontWeight:700, color:C.text, marginBottom:8, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{g.titulo}</div>
              <div style={{ fontSize:14, color:C.muted, lineHeight:1.6, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{g.desc}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function SeccionReviews() {
  return (
    <section style={{ background:C.surface, padding:"36px 20px", borderBottom:"1px solid "+C.border }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20, justifyContent:"center", flexWrap:"wrap" }}>
          <Estrellas n={5} size={16} />
          <span style={{ fontSize:18, fontWeight:800, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>4.9 de 5</span>
          <span style={{ fontSize:13, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>· Basado en +1,200 reseñas verificadas</span>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:16 }}>
          {REVIEWS_DATA.map((r,i)=>(
            <div key={i} style={{ background:C.white, border:"1px solid "+C.border, borderRadius:12, padding:"20px 22px", boxShadow:"0 1px 3px rgba(0,0,0,0.05)" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10 }}>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <div style={{ width:36, height:36, borderRadius:"50%", background:C.blue, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, fontWeight:700, fontFamily:"'Plus Jakarta Sans',sans-serif", flexShrink:0 }}>{r.nombre[0]}</div>
                  <div>
                    <div style={{ fontSize:14, fontWeight:700, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{r.nombre}</div>
                    <div style={{ fontSize:12, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{r.ciudad}</div>
                  </div>
                </div>
                <span style={{ background:C.greenLight, color:C.green, fontSize:10, fontWeight:700, padding:"3px 8px", borderRadius:99, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>✓ Verificado</span>
              </div>
              <Estrellas n={r.estrellas} size={13} />
              <p style={{ fontSize:14, color:"#334155", lineHeight:1.6, margin:"8px 0 10px", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>"{r.texto}"</p>
              <div style={{ fontSize:12, color:C.subtle, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{r.fecha}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Productos({ setView, setCarrito }: { setView: (v: string) => void; setCarrito: (p: any) => void }) {
  const [filtro, setFiltro] = useState("PAQUETE");
  const [dOff, setDOff] = useState(0);
  const dOffsets = [0,1,-1,2,-1,1,0,-1,1,-1,2,0,-1,1];
  useEffect(()=>{
    const t = setInterval(()=>setDOff(o=>(o+1)%dOffsets.length), 120000);
    return ()=>clearInterval(t);
  },[]);
  const tipos = ["PAQUETE","RETIRO","TRANSFERENCIA"];
  const filtrados = PRODUCTOS.filter(p=>p.tipo===filtro).map((p,i)=>({...p, disponibles: Math.max(1, p.disponibles + (dOffsets[(dOff+i)%dOffsets.length]||0))}));

  const handleComprar = (prod) => {
    fbq("track","AddToCart",{ content_name:prod.nombre, value:prod.paga, currency:"MXN" });
    fbq("track","InitiateCheckout",{ content_name:prod.nombre, value:prod.paga });
    setCarrito(prod);
    setView("checkout");
  };

  useEffect(()=>{ fbq("track","ViewContent",{ content_name:"Catálogo CLD" }); }, []);

  return (
    <div style={{ background:C.white, minHeight:"60vh" }}>
      <div style={{ background:C.surface, borderBottom:"1px solid "+C.border, padding:"20px 20px 0" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ display:"flex", alignItems:"baseline", gap:12, flexWrap:"wrap", marginBottom:16 }}>
            <h2 style={{ fontSize:22, fontWeight:800, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif", margin:0, letterSpacing:-0.3 }}>Selecciona tu operación</h2>
            <span style={{ fontSize:13, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Elige la categoría y el plan que mejor se adapte a ti</span>
          </div>
          <div style={{ display:"flex", gap:4 }}>
            {tipos.map(t=>(
              <button key={t} onClick={()=>setFiltro(t)} style={{ background:filtro===t?C.blue:"transparent", color:filtro===t?"#fff":C.muted, border:"1px solid "+(filtro===t?C.blue:C.border), borderBottom:"none", padding:"10px 24px", fontSize:14, fontWeight:600, fontFamily:"'Plus Jakarta Sans',sans-serif", cursor:"pointer", borderRadius:"8px 8px 0 0", transition:"all 0.15s" }}>
                {t.charAt(0)+t.slice(1).toLowerCase()}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div style={{ borderTop:"2px solid "+C.blue, background:C.surface }}>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"32px" }}>
          <div style={{ background:"#fff5f5", border:"1px solid #fca5a5", borderRadius:10, padding:"12px 16px", marginBottom:20, display:"flex", alignItems:"flex-start", gap:10 }}>
            <span style={{ fontSize:16, flexShrink:0, marginTop:1 }}>ℹ️</span>
            <p style={{ fontSize:13, color:"#991b1b", fontFamily:"'Plus Jakarta Sans',sans-serif", lineHeight:1.6, margin:0, fontWeight:500 }}>
              {filtro === "PAQUETE" ? "💵 Ca$h calidad espejo. Pasan todas las pruebas de seguridad. Se envían por paquetería a todo México. Llega en 1–3 días hábiles según tu ciudad." : filtro === "RETIRO" ? "🏧 Retiro sin tarjeta en cualquier cajero de la república. Trabajamos con BBVA, Banorte, Santander, Spin by OXXO, Coppel y Banco Azteca. Te enviamos tus códigos por WhatsApp en 10–30 min." : "🏦 Transferencia a cualquier cuenta bancaria. 100% legal y seguro. Te contactamos por WhatsApp para los datos. Recibes en 10–30 min después de tu compra."}
            </p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:20 }}>
            {filtrados.map(p=>(
              <div key={p.id} style={{ background:C.white, border:p.popular?"2px solid "+C.blue:"1px solid "+C.border, borderRadius:16, overflow:"hidden", boxShadow:p.popular?"0 4px 20px rgba(26,86,219,0.12)":"0 1px 4px rgba(0,0,0,0.06)", position:"relative", transition:"box-shadow 0.2s,transform 0.2s" }}
                onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 8px 28px rgba(0,0,0,0.1)";e.currentTarget.style.transform="translateY(-2px)"}}
                onMouseLeave={e=>{e.currentTarget.style.boxShadow=p.popular?"0 4px 20px rgba(26,86,219,0.12)":"0 1px 4px rgba(0,0,0,0.06)";e.currentTarget.style.transform="translateY(0)"}}
              >
                {p.popular && <div style={{ background:C.blue, color:"#fff", textAlign:"center", padding:"6px", fontSize:11, fontWeight:700, letterSpacing:1, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>⭐ EL MÁS ELEGIDO POR NUESTROS CLIENTES</div>}
                <div style={{ padding:"22px 22px 20px" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
                    <span style={{ background:p.badgeType==="orange"?C.orangeLight:C.blueLight, color:p.badgeType==="orange"?C.orange:C.blue, border:"1px solid "+(p.badgeType==="orange"?"#fed7aa":"#bfdbfe"), fontSize:10, fontWeight:700, padding:"3px 10px", borderRadius:99, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{p.badge}</span>
                    {p.envioGratis && <span style={{ background:C.greenLight, color:C.green, border:"1px solid #bbf7d0", fontSize:10, fontWeight:700, padding:"3px 10px", borderRadius:99, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>🚀 Envío gratis</span>}
                  {p.sinTarjeta && <span style={{ background:"#fdf4ff", color:"#7c3aed", border:"1px solid #e9d5ff", fontSize:10, fontWeight:700, padding:"3px 10px", borderRadius:99, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>💳 Sin tarjeta</span>}
                  {p.aCuenta && <span style={{ background:"#eff6ff", color:C.blue, border:"1px solid #bfdbfe", fontSize:10, fontWeight:700, padding:"3px 10px", borderRadius:99, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>🏦 A tu cuenta</span>}
                  </div>
                  <div style={{ fontSize:18, fontWeight:800, color:C.text, marginBottom:18, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{p.nombre}</div>
                  <div style={{ background:C.surface, border:"1px solid "+C.border, borderRadius:10, padding:"16px", marginBottom:16, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <div>
                      <div style={{ fontSize:11, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:2, fontWeight:500 }}>PAGAS</div>
                      <div style={{ fontSize:22, fontWeight:800, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{fmt(p.paga)}</div>
                    </div>
                    <div style={{ width:32, height:32, background:C.blueLight, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, color:C.blue }}>→</div>
                    <div style={{ textAlign:"right" }}>
                      <div style={{ fontSize:11, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:2, fontWeight:500 }}>RECIBES</div>
                      <div style={{ fontSize:22, fontWeight:800, color:C.green, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{fmt(p.recibe)}</div>
                    </div>
                  </div>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:18 }}>
                    <div style={{ display:"flex", alignItems:"center", gap:6 }}>
                      <span style={{ fontSize:14 }}>⏱</span>
                      <span style={{ fontSize:13, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{p.tiempo}</span>
                    </div>
                    <div style={{ fontSize:12, fontWeight:600, color:p.disponibles<=2?C.orange:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
                      {p.disponibles<=2?"⚠️ Solo "+p.disponibles+" disp.":p.disponibles+" disponibles"}
                    </div>
                  </div>
                  <button onClick={()=>handleComprar(p)} style={{ width:"100%", background:C.blue, color:"#fff", border:"none", padding:"14px", borderRadius:10, fontSize:15, fontWeight:700, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", boxShadow:"0 3px 10px rgba(26,86,219,0.25)", transition:"all 0.15s" }}
                    onMouseEnter={e=>{e.currentTarget.style.background=C.blueDark;e.currentTarget.style.transform="translateY(-1px)"}}
                    onMouseLeave={e=>{e.currentTarget.style.background=C.blue;e.currentTarget.style.transform="translateY(0)"}}
                  >Comprar ahora</button>
                  <div style={{ textAlign:"center", marginTop:10, fontSize:12, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif", display:"flex", alignItems:"center", justifyContent:"center", gap:4 }}>
                    <span>🔒</span> Proceso seguro · Soporte incluido
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop:24, background:C.white, border:"1px solid "+C.border, borderRadius:12, padding:"14px 20px", display:"flex", gap:0, alignItems:"center", flexWrap:"nowrap", overflowX:"auto" }}>
            <div style={{ display:"flex", alignItems:"center", gap:6, paddingRight:16, borderRight:"1px solid "+C.border, flexShrink:0 }}>
              <Estrellas n={5} size={13} />
              <span style={{ fontSize:13, fontWeight:700, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>4.9/5</span>
              <span style={{ fontSize:12, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif", whiteSpace:"nowrap" }}>+1,200 reseñas</span>
            </div>
            <div style={{ display:"flex", gap:12, paddingLeft:16, flexWrap:"nowrap" }}>
              {REVIEWS_DATA.slice(0,3).map((r,i)=>(
                <div key={i} style={{ display:"flex", alignItems:"center", gap:6, flexShrink:0 }}>
                  <div style={{ width:24, height:24, borderRadius:"50%", background:C.blue, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:10, fontWeight:700, fontFamily:"'Plus Jakarta Sans',sans-serif", flexShrink:0 }}>{r.nombre[0]}</div>
                  <div>
                    <div style={{ fontSize:11, fontWeight:600, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif", whiteSpace:"nowrap" }}>{r.nombre}</div>
                    <Estrellas n={r.estrellas} size={9} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── ECART PAY CONFIG ────────────────────────────────────────────────────────
const ECARTPAY: Record<string, string> = {
  accountId:  "69f2f95200c40f24311dbe64",
  publicId:   "pub69f2f95300c40f24311dbe6b",
  privateKey: "priv69f2f95300c40f24311dbe6c",
  apiBase:    "https://app.ecartpay.com",
};

async function crearCheckoutEcartPay(produto: any, cliente: any) {
  const body = {
    account_id: ECARTPAY.accountId,
    currency: "MXN",
    amounts: [produto.paga],
    concept: produto.nombre,
    items: [{
      name: produto.nombre,
      quantity: 1,
      price: produto.paga,
      discount: 0,
      is_service: true,
      id: produto.id,
    }],
    customer: {
      name:  cliente.nombre,
      email: cliente.email,
      phone: cliente.telefono,
    },
    notify_url: "https://tudominio.com/api/webhook/ecartpay",
  };

  const res = await fetch(`${ECARTPAY.apiBase}/api/checkouts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": ECARTPAY.privateKey,
      "x-public-id": ECARTPAY.publicId,
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error("Ecart Pay error: " + err);
  }

  const data = await res.json();
  return data.link; // URL de pago
}

function Checkout({ carrito, setView }: { carrito: any; setView: (v: string) => void }) {
  const [step, setStep] = useState(0);
  const [error, setError] = useState(null);
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [calle, setCalle] = useState("");
  const [colonia, setColonia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [cp, setCp] = useState("");

  const esPaquete = carrito && carrito.tipo === "PAQUETE";

  const confirmar = () => {
    const camposBase = !nombre.trim() || !email.trim() || !telefono.trim();
    const camposDireccion = esPaquete && (!calle.trim() || !colonia.trim() || !ciudad.trim() || !cp.trim());
    if (camposBase || camposDireccion) {
      setError("Por favor completa todos los campos.");
      return;
    }
    setError(null);
    fbq("track", "InitiateCheckout", { value: carrito.paga, currency: "MXN", content_name: carrito.nombre });
    fbq("track", "Purchase", { value: carrito.paga, currency: "MXN", content_name: carrito.nombre });
    window.location.href = carrito.link;
  };

  if (!carrito) return null;

  return (
    <div style={{ background:C.surface, minHeight:"70vh", padding:"40px 32px" }}>
      <div style={{ maxWidth:560, margin:"0 auto" }}>
        {step===0 && <>
          {/* BANNER GARANTÍA */}
          <div style={{ background:"#f0fdf4", border:"1px solid #86efac", borderRadius:12, padding:"14px 20px", marginBottom:20, display:"flex", alignItems:"center", gap:12 }}>
            <span style={{ fontSize:22 }}>🛡️</span>
            <div>
              <div style={{ fontSize:14, fontWeight:800, color:"#15803d", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>¡Sin riesgo! Garantía de devolución de 30 días</div>
              <div style={{ fontSize:12, color:"#16a34a", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Si no quedas satisfecho, te devolvemos tu dinero. Sin preguntas.</div>
            </div>
          </div>

          {/* BANNER TIEMPO DE ENTREGA */}
          {(() => {
            const hoy = new Date();
            const entrega = new Date(hoy);
            const diasHabiles = carrito.tipo === "PAQUETE" ? 3 : 0;
            if (diasHabiles > 0) {
              let agregados = 0;
              while (agregados < diasHabiles) {
                entrega.setDate(entrega.getDate() + 1);
                const dia = entrega.getDay();
                if (dia !== 0 && dia !== 6) agregados++;
              }
            } else {
              entrega.setHours(entrega.getHours() + 6);
            }
            const dias = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
            const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
            const labelEntrega = diasHabiles > 0
              ? `${dias[entrega.getDay()]} ${entrega.getDate()} de ${meses[entrega.getMonth()]}`
              : `hoy mismo antes de las ${entrega.getHours()}:00 hrs`;
            const labelHoy = `${dias[hoy.getDay()]} ${hoy.getDate()} de ${meses[hoy.getMonth()]}`;
            return (
              <div style={{ background:C.blueLight, border:"1px solid #bfdbfe", borderRadius:12, padding:"16px 20px", marginBottom:20 }}>
                <div style={{ fontSize:13, fontWeight:700, color:C.blue, fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:12, display:"flex", alignItems:"center", gap:6 }}>
                  🇲🇽 Entrega estimada para todo México
                </div>
                <div style={{ display:"flex", alignItems:"center", justifyContent:"space-between", gap:4 }}>
                  {[
                    { icon:"📋", label:"Pedido", sub:labelHoy, color:C.blue },
                    { icon:"⚡", label:"Procesando", sub:"en camino", color:"#f59e0b" },
                    { icon:"✅", label:"Entrega", sub:labelEntrega, color:C.green },
                  ].map((step, i, arr) => (
                    <div key={step.label} style={{ display:"flex", alignItems:"center", gap:4, flex:1 }}>
                      <div style={{ textAlign:"center", flex:1 }}>
                        <div style={{ width:30, height:30, borderRadius:"50%", background:step.color, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 3px", fontSize:14 }}>{step.icon}</div>
                        <div style={{ fontSize:10, fontWeight:700, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{step.label}</div>
                        <div style={{ fontSize:10, color: i===2 ? C.green : C.muted, fontWeight: i===2 ? 700 : 400, fontFamily:"'Plus Jakarta Sans',sans-serif", whiteSpace:"nowrap" }}>{step.sub}</div>
                      </div>
                      {i < arr.length-1 && <div style={{ color:C.subtle, fontSize:14, flexShrink:0 }}>→</div>}
                    </div>
                  ))}
                </div>
              </div>
            );
          })()}

          <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:28 }}>
            <button onClick={()=>setView("productos")} style={{ background:"none", border:"none", color:C.muted, cursor:"pointer", fontSize:14, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>← Volver</button>
            <h2 style={{ fontSize:24, fontWeight:800, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif", margin:0 }}>Confirmar operación</h2>
          </div>
          <div style={{ background:C.white, border:"1px solid "+C.border, borderRadius:12, padding:24, marginBottom:20, boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
            <div style={{ fontSize:12, fontWeight:600, color:C.muted, letterSpacing:1, marginBottom:14, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>RESUMEN DE TU OPERACIÓN</div>
            <div style={{ fontSize:18, fontWeight:700, color:C.text, marginBottom:16, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{carrito.nombre}</div>
            <div style={{ background:C.surface, borderRadius:10, display:"flex", justifyContent:"space-between", padding:"14px 18px", marginBottom:12 }}>
              <div>
                <div style={{ fontSize:11, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>PAGAS</div>
                <div style={{ fontSize:20, fontWeight:800, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{fmt(carrito.paga)}</div>
              </div>
              <div style={{ fontSize:20, color:C.border, alignSelf:"center" }}>→</div>
              <div style={{ textAlign:"right" }}>
                <div style={{ fontSize:11, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>RECIBES</div>
                <div style={{ fontSize:20, fontWeight:800, color:C.green, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{fmt(carrito.recibe)}</div>
              </div>
            </div>
            <div style={{ display:"flex", gap:8, fontSize:13, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
              <span>⏱</span><span>{carrito.tiempo}</span>
              {carrito.envioGratis && <><span>·</span><span style={{ color:C.green, fontWeight:600 }}>🚀 Envío gratis</span></>}
            </div>
          </div>
          {/* AVISO RETIROS Y TRANSFERENCIAS */}
          {!esPaquete && (
            <div style={{ background:"#eff6ff", border:"1px solid #bfdbfe", borderRadius:12, padding:"18px 20px", marginBottom:20, display:"flex", gap:14, alignItems:"flex-start" }}>
              <span style={{ fontSize:24, flexShrink:0 }}>💬</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:C.blue, fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:4 }}>Un asesor se pondrá en contacto contigo</div>
                <div style={{ fontSize:13, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif", lineHeight:1.6 }}>
                  Una vez confirmado el pago, un asesor de CLD te contactará por <strong>WhatsApp</strong> para continuar y completar tu operación. El proceso toma {carrito.tiempo}.
                </div>
              </div>
            </div>
          )}

          <div style={{ background:C.white, border:"1px solid "+C.border, borderRadius:12, padding:24, marginBottom:16, boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
            <div style={{ fontSize:12, fontWeight:600, color:C.muted, letterSpacing:1, marginBottom:18, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>TUS DATOS</div>
            {[
              {label:"Nombre completo", ph:"¿Cómo te llamas?", val:nombre, set:setNombre},
              {label:"Correo electrónico", ph:"correo@ejemplo.com", val:email, set:setEmail},
              {label:"Teléfono / WhatsApp", ph:"+52 55 0000 0000", val:telefono, set:setTelefono},
            ].map(f=>(
              <div key={f.label} style={{ marginBottom:16 }}>
                <label style={{ display:"block", fontSize:13, fontWeight:600, color:C.text, marginBottom:6, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{f.label}</label>
                <input placeholder={f.ph} value={f.val} onChange={e=>f.set(e.target.value)}
                  style={{ width:"100%", background:C.white, border:"1.5px solid "+C.border, borderRadius:8, color:C.text, padding:"11px 14px", fontSize:14, fontFamily:"'Plus Jakarta Sans',sans-serif", outline:"none", boxSizing:"border-box" }}
                  onFocus={e=>e.currentTarget.style.borderColor=C.blue}
                  onBlur={e=>e.currentTarget.style.borderColor=C.border}
                />
              </div>
            ))}
          </div>

          {/* DIRECCIÓN — solo paquetes */}
          {esPaquete && (
            <div style={{ background:C.white, border:"1px solid "+C.border, borderRadius:12, padding:24, marginBottom:16, boxShadow:"0 1px 4px rgba(0,0,0,0.06)" }}>
              <div style={{ fontSize:12, fontWeight:600, color:C.muted, letterSpacing:1, marginBottom:18, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>DIRECCIÓN DE ENTREGA</div>
              {[
                {label:"Calle y número", ph:"Ej: Av. Insurgentes 123", val:calle, set:setCalle},
                {label:"Colonia", ph:"Ej: Roma Norte", val:colonia, set:setColonia},
                {label:"Ciudad / Municipio", ph:"Ej: Ciudad de México", val:ciudad, set:setCiudad},
                {label:"Código postal", ph:"Ej: 06600", val:cp, set:setCp},
              ].map(f=>(
                <div key={f.label} style={{ marginBottom:16 }}>
                  <label style={{ display:"block", fontSize:13, fontWeight:600, color:C.text, marginBottom:6, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{f.label}</label>
                  <input placeholder={f.ph} value={f.val} onChange={e=>f.set(e.target.value)}
                    style={{ width:"100%", background:C.white, border:"1.5px solid "+C.border, borderRadius:8, color:C.text, padding:"11px 14px", fontSize:14, fontFamily:"'Plus Jakarta Sans',sans-serif", outline:"none", boxSizing:"border-box" }}
                    onFocus={e=>e.currentTarget.style.borderColor=C.blue}
                    onBlur={e=>e.currentTarget.style.borderColor=C.border}
                  />
                </div>
              ))}
            </div>
          )}

          {error && (
            <div style={{ background:"#fef2f2", border:"1px solid #fecaca", borderRadius:8, padding:"10px 14px", marginBottom:16, fontSize:13, color:"#dc2626", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
              ⚠️ {error}
            </div>
          )}

          <div style={{ display:"flex", gap:16, justifyContent:"center", marginBottom:16, flexWrap:"wrap" }}>
            {["🔒 Pago seguro","✅ Garantía incluida","💬 Soporte 24/7"].map(s=>(
              <span key={s} style={{ fontSize:13, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{s}</span>
            ))}
          </div>
          <button onClick={confirmar} style={{ width:"100%", background:C.blue, color:"#fff", border:"none", padding:"16px", borderRadius:10, fontSize:16, fontWeight:700, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", boxShadow:"0 4px 14px rgba(26,86,219,0.35)" }}
            onMouseEnter={e=>e.currentTarget.style.background=C.blueDark}
            onMouseLeave={e=>e.currentTarget.style.background=C.blue}
          >Ir a pagar — {fmt(carrito.paga)}</button>
      <div style={{ background:C.surface, border:"1px solid "+C.border, borderRadius:10, padding:"12px 16px", marginTop:12, display:"flex", alignItems:"center", justifyContent:"center", gap:10 }}>
        <span style={{ fontSize:18 }}>🔒</span>
        <div style={{ textAlign:"center" }}>
          <div style={{ fontSize:12, fontWeight:700, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Pago procesado de forma segura por <span style={{ color:C.blue }}>ecartPay</span></div>
          <div style={{ fontSize:11, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Encriptación SSL · Datos protegidos</div>
        </div>
      </div>
    </>}

        {step===1 && (
          <div style={{ textAlign:"center", padding:"80px 0" }}>
            <div style={{ width:52, height:52, borderRadius:"50%", border:"4px solid "+C.blue, borderTopColor:"transparent", margin:"0 auto 24px", animation:"spin 0.8s linear infinite" }} />
            <div style={{ fontSize:18, fontWeight:700, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:8 }}>Conectando con Ecart Pay…</div>
            <div style={{ fontSize:14, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Preparando tu pago seguro</div>
          </div>
        )}

        {step===2 && (
          <div style={{ textAlign:"center", padding:"60px 0" }}>
            <div style={{ width:64, height:64, borderRadius:"50%", background:C.greenLight, border:"2px solid "+C.green, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 24px", fontSize:28 }}>✓</div>
            <h2 style={{ fontSize:26, fontWeight:800, color:C.green, fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:8 }}>¡Operación confirmada!</h2>
            <div style={{ fontSize:14, color:C.muted, marginBottom:6, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Referencia: <strong>{ref}</strong></div>
            <div style={{ fontSize:15, color:C.text, marginBottom:28, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Recibirás <strong style={{ color:C.green }}>{fmt(carrito.recibe)}</strong> en {carrito.tiempo}</div>
            <div style={{ background:C.greenLight, border:"1px solid #bbf7d0", borderRadius:10, padding:"16px 24px", marginBottom:28, fontSize:14, color:C.green, fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:500 }}>
              ✅ Tu operación está en el sistema. Recibirás confirmación por correo.
            </div>
            <button onClick={()=>setView("home")} style={{ background:C.blue, color:"#fff", border:"none", padding:"12px 28px", borderRadius:8, fontSize:14, fontWeight:700, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Volver al inicio</button>
          </div>
        )}
      </div>
    </div>
  );
}

function HomePage({ setView, setCarrito }: { setView: (v: string) => void; setCarrito: (p: any) => void }) {
  return (
    <>
      <TimerCorte />
      <Hero setView={setView} />
      <Sellos />
      <SeccionPasos setView={setView} />
      <SeccionGarantias />
      <Productos setView={setView} setCarrito={setCarrito} />
      <BannerTransparencia />
      <SellosBancarios />
      <SeccionReviews />
    </>
  );
}


function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const preguntas = [
    { q:"¿Cuál es el origen de los recursos?", a:"Provienen de procesos de optimización y recuperación de activos mediante sistemas de gestión financiera avanzada." },
    { q:"¿Cómo funciona el modelo de negocio?", a:"Operamos bajo un esquema de logística y rotación. Gestionamos el flujo de activos a través de una red de distribución para mantener la liquidez y escalabilidad, recibiendo una comisión por servicio que nos permite facturar con total transparencia." },
    { q:"¿Qué garantías ofrecen?", a:"Todas las operaciones están respaldadas por una garantía de protección de 30 días para asegurar la satisfacción del cliente." },
    { q:"¿Es una operación segura?", a:"Totalmente. Implementamos protocolos de confidencialidad y seguridad operativa que blindan al usuario, garantizando un proceso fluido y sin riesgos administrativos. Este negocio siempre ha existido, solo que ahora es digital." },
  ];
  return (
    <section style={{ background:C.white, borderTop:"1px solid "+C.border, borderBottom:"1px solid "+C.border, padding:"40px 24px" }}>
      <div style={{ maxWidth:700, margin:"0 auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:24 }}>
          <h2 style={{ fontSize:20, fontWeight:800, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif", margin:0, letterSpacing:-0.3 }}>Preguntas frecuentes</h2>
          <span style={{ fontSize:12, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>· Resolvemos tus dudas</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
          {preguntas.map((p,i)=>(
            <div key={i} style={{ background:open===i?C.blueLight:C.surface, border:"1px solid "+(open===i?"#bfdbfe":C.border), borderRadius:10, overflow:"hidden", transition:"all 0.2s" }}>
              <button onClick={()=>setOpen(open===i?null:i)} style={{ width:"100%", background:"none", border:"none", padding:"14px 18px", cursor:"pointer", display:"flex", justifyContent:"space-between", alignItems:"center", gap:12 }}>
                <span style={{ fontSize:14, fontWeight:700, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif", textAlign:"left" }}>{p.q}</span>
                <span style={{ fontSize:20, color:C.blue, flexShrink:0, transform:open===i?"rotate(45deg)":"rotate(0deg)", transition:"transform 0.2s", lineHeight:1 }}>+</span>
              </button>
              {open===i && (
                <div style={{ padding:"0 18px 16px" }}>
                  <div style={{ height:1, background:"#bfdbfe", marginBottom:12 }} />
                  <p style={{ fontSize:13, color:C.muted, lineHeight:1.7, margin:0, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{p.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ setView }: { setView?: (v: string) => void }) {
  return (
    <footer style={{ background:C.text, padding:"40px 32px 32px" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:24, marginBottom:32 }}>
          <div>
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:12 }}>
              <div style={{ width:36, height:36, background:C.blue, borderRadius:8, display:"flex", alignItems:"center", justifyContent:"center" }}>
                <span style={{ fontSize:12, fontWeight:800, color:"#fff", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>CLD</span>
              </div>
              <span style={{ fontSize:16, fontWeight:700, color:"#fff", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>CA$H LAUNDRY DEPARTMENT</span>
            </div>
            <p style={{ fontSize:13, color:"#94a3b8", fontFamily:"'Plus Jakarta Sans',sans-serif", maxWidth:280, lineHeight:1.6 }}>Acceso a liquidez, operaciones de capital y transferencias para todo México.</p>
          </div>
          <div style={{ display:"flex", gap:40, flexWrap:"wrap" }}>
            <div>
                <div style={{ fontSize:12, fontWeight:700, color:"#64748b", letterSpacing:1, marginBottom:12, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>OPERACIONES</div>
                {["Paquetes","Retiros","Transferencias"].map(l=>(<div key={l} style={{ fontSize:13, color:"#94a3b8", marginBottom:8, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{l}</div>))}
              </div>
          </div>
        </div>
        <div style={{ borderTop:"1px solid #1e293b", paddingTop:20, display:"flex", justifyContent:"space-between", flexWrap:"wrap", gap:8 }}>
          <span style={{ fontSize:12, color:"#475569", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>© 2026 CA$H LAUNDRY DEPARTMENT</span>
          <div style={{ display:"flex", gap:12, alignItems:"center" }}>
            {["🔒 Seguro","🇲🇽 México","✅ +5,200"].map(s=>(<span key={s} style={{ fontSize:11, color:"#475569", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{s}</span>))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const [view, setView] = useState("home");
  const [carrito, setCarrito] = useState(null);

  const handleSetView = (v) => { setView(v); window.scrollTo({ top:0, behavior:"smooth" }); };

  useEffect(()=>{
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    const style = document.createElement("style");
    style.textContent = `
      @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
      @keyframes load{from{width:0%}to{width:100%}}
      @keyframes spin{to{transform:rotate(360deg)}}
      *{box-sizing:border-box;margin:0;padding:0;}
      body{background:#f8fafc;}
      input::placeholder{color:#94a3b8;}
      ::-webkit-scrollbar{width:6px;}
      ::-webkit-scrollbar-track{background:#f1f5f9;}
      ::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:99px;}
    `;
    document.head.appendChild(style);
    fbq("track","PageView");
  },[]);

  return (
    <div style={{ background:C.surface, minHeight:"100vh" }}>
      {!loaded && <Loader onDone={()=>setLoaded(true)} />}
      {loaded && <>
        <Nav view={view} setView={handleSetView} />
        <LiveTicker />
        <ToastProof />
        <StickyCTA setView={handleSetView} />
        {view==="home" && <HomePage setView={handleSetView} setCarrito={setCarrito} />}
        {view==="productos" && <>
          <TimerCorte />
          <Productos setView={handleSetView} setCarrito={setCarrito} />
          <BannerTransparencia />
          <SellosBancarios />
          <SeccionReviews />
          <SeccionGarantias />
        </>}
        {view==="checkout" && <Checkout carrito={carrito} setView={handleSetView} />}
        <FAQ />
        <Footer />
      </>}
    </div>
  );
}
