import { useState, useEffect } from 'react';

// ─── META PIXEL 1904192260257741 ─────────────────────────────────────────────
declare global { interface Window { fbq: any; _fbq: any; } }
const fbq = (event: string, name: string, params: object = {}) => {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq(event, name, params);
  }
};

const C = {
  blue: "#22c55e", blueDark: "#16a34a", blueLight: "#052e16",
  green: "#22c55e", greenLight: "#052e16",
  orange: "#f59e0b", orangeLight: "#1c1917",
  white: "#1e293b", surface: "#0f172a",
  border: "#1e293b", text: "#f1f5f9", muted: "#94a3b8", subtle: "#64748b",
  dark: "#0f172a", card: "#1e293b", cardBorder: "#334155",
};

const PRODUCTOS = [
  // ── PAQUETES ──────────────────────────────────────────────────────────────
  { id:"P012", tipo:"PAQUETE", nombre:"Paquete de Prueba", esPrueba:true, paga:500,  recibe:1500,  disponibles:8, tiempo:"1 – 3 días hábiles · Todo México", badge:"NUEVO", badgeType:"blue", envioGratis:true, popular:false,
    link:"https://pay.ecart.com/payment_link/69f3007228061d954c02e52a" },
  { id:"P001", tipo:"PAQUETE", nombre:"Paquete Básico",    paga:1000, recibe:4000,  disponibles:7, tiempo:"1 – 3 días hábiles · Todo México", badge:"MÁS SOLICITADO", badgeType:"orange", envioGratis:true, popular:true,
    link:"https://pay.ecart.com/payment_link/69f2fe2a20f81ed6ab9a2fad" },
  { id:"P004", tipo:"PAQUETE", nombre:"Paquete Pro",       paga:1500, recibe:6000,  disponibles:5, tiempo:"1 – 3 días hábiles · Todo México", badge:"ALTA DEMANDA", badgeType:"orange", envioGratis:true, popular:false,
    link:"https://pay.ecart.com/payment_link/69f2fe7d28061d954c02d658" },
  { id:"P007", tipo:"PAQUETE", nombre:"Paquete VIP",       paga:2500, recibe:15000, disponibles:3, tiempo:"1 – 3 días hábiles · Todo México", badge:"EXCLUSIVO", badgeType:"blue", envioGratis:true, popular:false,
    link:"https://pay.ecart.com/payment_link/69f2fefe20f81ed6ab9a36e3" },

  // ── RETIROS ───────────────────────────────────────────────────────────────
  { id:"P013", tipo:"RETIRO", nombre:"Retiro de Prueba", esPrueba:true, paga:500,  recibe:1500,  disponibles:8, tiempo:"10 – 30 min", badge:"NUEVO", badgeType:"blue", envioGratis:false, sinTarjeta:true, popular:false,
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
  { id:"P014", tipo:"TRANSFERENCIA", nombre:"Transfer de Prueba", esPrueba:true, paga:500,  recibe:1500,  disponibles:8, tiempo:"10 – 30 min", badge:"NUEVO", badgeType:"blue", envioGratis:false, aCuenta:true, popular:false,
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
    <div style={{ background:"#0f2a1e", borderBottom:"1px solid #22c55e", padding:"9px 24px", display:"flex", alignItems:"center", gap:10 }}>
      <span style={{ background:C.green, color:"#fff", borderRadius:99, fontSize:9, fontWeight:700, padding:"2px 8px", letterSpacing:1, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>● EN VIVO</span>
      <span style={{ color:C.green, fontSize:13, fontWeight:500, opacity:visible?1:0, transition:"opacity 0.3s", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{ACTIVIDAD_LIVE[idx]}</span>
    </div>
  );
}

function Nav({ setView, view }: { setView: (v: string) => void; view: string }) {
  return (
    <nav style={{ background:"#0f172a", borderBottom:"1px solid #1e293b", padding:"0 32px", display:"flex", alignItems:"center", justifyContent:"space-between", height:60, position:"sticky", top:0, zIndex:100, boxShadow:"0 2px 20px rgba(0,0,0,0.4)" }}>
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
    <div style={{ display:"flex", alignItems:"center", gap:6, background:"#052e16", border:"1px solid #22c55e", borderRadius:99, padding:"4px 12px", cursor:"default" }}>
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
    <div style={{ background:"#1e1a0e", borderBottom:"1px solid #f59e0b", padding:"8px 20px", display:"flex", alignItems:"center", justifyContent:"center", gap:12, flexWrap:"wrap" }}>
      <span style={{ fontSize:12, color:"#fde68a", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:500 }}>⚡ Realiza tu pedido en los próximos</span>
      <span style={{ fontSize:14, fontWeight:800, color:"#f59e0b", fontFamily:"'Plus Jakarta Sans',sans-serif", background:"#fef3c7", padding:"2px 10px", borderRadius:6 }}>{m}:{s}</span>
      <span style={{ fontSize:12, color:"#fde68a", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:500 }}>para recibir tu depósito en el bloque de las <strong>{bloque}</strong></span>
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
    }, 16000);
    setTimeout(show, 2000);
    return () => clearInterval(interval);
  }, []);
  const t = TOASTS[idx];
  return (
    <div style={{
      position:"fixed", bottom:80, left:16, zIndex:999,
      background:"#1e293b", border:"1px solid #22c55e",
      borderRadius:12, padding:"12px 16px", boxShadow:"0 4px 24px rgba(34,197,94,0.2)",
      maxWidth:260, transition:"all 0.4s cubic-bezier(.4,0,.2,1)",
      opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(20px)",
      pointerEvents:"none",
    }}>
      <div style={{ display:"flex", alignItems:"center", gap:10 }}>
        <div style={{ width:36, height:36, borderRadius:"50%", background:C.green, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, flexShrink:0 }}>💸</div>
        <div>
          <div style={{ fontSize:12, fontWeight:700, color:"#f1f5f9", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{t.nombre} de {t.ciudad}</div>
          <div style={{ fontSize:11, color:"#94a3b8", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>acaba de recibir <strong style={{ color:C.green }}>{t.monto} MXN</strong> hace {t.min} min</div>
        </div>
      </div>
    </div>
  );
}

// ─── STICKY CTA ───────────────────────────────────────────────────────────────
const WA_LINK = "https://wa.me/521XXXXXXXXXX?text=Hola%2C+tengo+dudas+sobre+mi+dep%C3%B3sito+en+CLD";

function StickyCTA({ setView }: { setView: (v:string)=>void }) {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{
      position:"fixed", bottom:0, left:0, right:0, zIndex:998,
      display:"flex", gap:0,
      opacity: show ? 1 : 0, transform: show ? "translateY(0)" : "translateY(100%)",
      transition:"all 0.3s", pointerEvents: show ? "auto" : "none",
      boxShadow:"0 -4px 20px rgba(0,0,0,0.4)",
    }}>
      <button onClick={() => setView("productos")} style={{
        flex:"0 0 70%", background:"#22c55e", color:"#fff", border:"none",
        padding:"16px 8px", fontSize:15, fontWeight:800,
        cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif",
        display:"flex", alignItems:"center", justifyContent:"center", gap:6,
      }}>
        💰 OBTENER MI CASH YA
      </button>
      <a href={WA_LINK} target="_blank" rel="noreferrer" style={{
        flex:"0 0 30%", background:"#0f172a", color:"#94a3b8", border:"none",
        borderLeft:"1px solid #334155",
        padding:"16px 8px", fontSize:13, fontWeight:700,
        cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif",
        display:"flex", alignItems:"center", justifyContent:"center", gap:4,
        textDecoration:"none",
      }}>
        💬 ¿Dudas?
      </a>
    </div>
  );
}

// ─── PASOS ────────────────────────────────────────────────────────────────────

// ─── SOCIAL PROOF MARQUEE ─────────────────────────────────────────────────────
const PROOF_IMGS = [
  "data:image/webp;base64,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",
  "data:image/webp;base64,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",
  "data:image/webp;base64,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",
  "data:image/webp;base64,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",
  "data:image/webp;base64,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",
  "data:image/webp;base64,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"
];

function MarqueeProof() {
  const items = [...PROOF_IMGS, ...PROOF_IMGS]; // duplicate for seamless loop
  return (
    <section style={{ background:"#0f172a", padding:"36px 0 32px", borderBottom:"1px solid #1e293b", overflow:"hidden" }}>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 24px", marginBottom:20 }}>
        <h2 style={{ fontSize:20, fontWeight:800, color:"#f1f5f9", fontFamily:"'Plus Jakarta Sans',sans-serif", margin:"0 0 4px", letterSpacing:-0.3 }}>
          Depósitos reales en tiempo real
        </h2>
        <p style={{ fontSize:13, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
          Más de 5,200 operaciones exitosas este mes.
        </p>
      </div>
      <div style={{ position:"relative", overflow:"hidden" }}>
        <div style={{
          display:"flex", gap:12,
          animation:"marquee 28s linear infinite",
          width:"max-content",
        }}>
          {items.map((src, i) => (
            <div key={i} style={{
              flexShrink:0, width:180,
              borderRadius:16, overflow:"hidden",
              boxShadow:"0 2px 12px rgba(0,0,0,0.10)",
              border:"1px solid "+C.border,
              background:C.white,
            }}>
              <img src={src} alt="Prueba de operación" style={{ width:"100%", display:"block", objectFit:"cover" }} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SeccionPasos({ setView }: { setView: (v:string)=>void }) {
  const pasos = [
    { n:"1", icon:"🎯", titulo:"Elige tu monto", desc:"Selecciona el paquete, retiro o transferencia que más te convenga." },
    { n:"2", icon:"🔒", titulo:"Realiza el pago seguro", desc:"Pago procesado por Ecart Pay. Tarjeta, SPEI, OXXO o transferencia bancaria." },
    { n:"3", icon:"💸", titulo:"Recibe tu CASH", desc:"El dinero llega directo a tu cuenta. Paquetes de Cash en 1-3 días, retiros y transferencias en 10-30 min." },
  ];
  return (
    <section style={{ background:"#1e293b", padding:"40px 24px", borderBottom:"1px solid #334155" }}>
      <div style={{ maxWidth:900, margin:"0 auto", textAlign:"center" }}>
        <div style={{ textAlign:"center", marginBottom:28 }}>
          <h2 style={{ fontSize:22, fontWeight:800, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif", margin:"0 0 4px", letterSpacing:-0.3 }}>¿Cómo funciona?</h2>
          <p style={{ fontSize:13, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>3 pasos. Sin complicaciones.</p>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))", gap:16 }}>
          {pasos.map((p,i)=>(
            <div key={p.n} style={{ background:"#0f172a", border:"1px solid #334155", borderRadius:12, padding:"24px 20px", textAlign:"center", position:"relative" }}>
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
    <div style={{ background:"#052e16", borderTop:"2px solid #22c55e", borderBottom:"2px solid #22c55e", padding:"14px 24px", display:"flex", alignItems:"center", justifyContent:"center", gap:12 }}>
      <div style={{ width:32, height:32, borderRadius:"50%", background:"#16a34a", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, fontSize:16 }}>✅</div>
      <div>
        <div style={{ fontSize:14, fontWeight:800, color:"#86efac", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Sin letra chiquita</div>
        <div style={{ fontSize:12, color:"#4ade80", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>El monto que ves es exactamente el monto que recibes en tu cuenta.</div>
      </div>
    </div>
  );
}

// ─── SELLOS BANCARIOS ─────────────────────────────────────────────────────────
function SellosBancarios() {
  const bancos = ["BBVA","Santander","Banamex","Banorte"];
  const colores = ["#004A97","#EC0000","#006CAE","#E2231A"];
  return (
    <div style={{ background:"#1e293b", borderTop:"1px solid #334155", padding:"16px 24px" }}>
      <div style={{ maxWidth:900, margin:"0 auto" }}>
        <div style={{ fontSize:11, color:"#64748b", textAlign:"center", marginBottom:12, fontFamily:"'Plus Jakarta Sans',sans-serif", letterSpacing:1, fontWeight:600 }}>COMPATIBLE CON TU BANCO</div>
        <div style={{ display:"flex", gap:12, justifyContent:"center", alignItems:"center", flexWrap:"wrap" }}>
          {bancos.map((b,i)=>(
            <div key={b} style={{ background:"#0f172a", border:"1px solid #334155", borderRadius:8, padding:"8px 16px", display:"flex", alignItems:"center", gap:6 }}>
              <div style={{ width:10, height:10, borderRadius:"50%", background:colores[i], flexShrink:0 }} />
              <span style={{ fontSize:12, fontWeight:700, color:"#e2e8f0", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{b}</span>
            </div>
          ))}
          <div style={{ background:"#0f172a", border:"1px solid #334155", borderRadius:8, padding:"8px 16px", display:"flex", alignItems:"center", gap:6 }}>
            <span style={{ fontSize:13 }}>🏦</span>
            <span style={{ fontSize:12, fontWeight:700, color:"#e2e8f0", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>SPEI</span>
          </div>
          <div style={{ background:"#0f172a", border:"1px solid #334155", borderRadius:8, padding:"8px 16px", display:"flex", alignItems:"center", gap:6 }}>
            <span style={{ fontSize:13 }}>💳</span>
            <span style={{ fontSize:12, fontWeight:700, color:"#e2e8f0", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Visa / MC</span>
          </div>
          <div style={{ background:"#0f172a", border:"1px solid #334155", borderRadius:8, padding:"8px 16px", display:"flex", alignItems:"center", gap:6 }}>
            <span style={{ fontSize:13 }}>🏪</span>
            <span style={{ fontSize:12, fontWeight:700, color:"#e2e8f0", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>OXXO Pay</span>
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
    <div style={{ background:"#1e293b", borderBottom:"1px solid #334155", padding:"8px 16px", display:"flex", gap:0, justifyContent:"center", flexWrap:"nowrap", overflowX:"auto" }}>
      {items.map((s,i)=>(
        <div key={s.label} style={{ display:"flex", alignItems:"center", gap:4, padding:"0 12px", borderRight: i<items.length-1 ? "1px solid "+C.border : "none", flexShrink:0 }}>
          <span style={{ fontSize:13 }}>{s.icon}</span>
          <span style={{ fontSize:11, color:"#94a3b8", fontWeight:600, fontFamily:"'Plus Jakarta Sans',sans-serif", whiteSpace:"nowrap" }}>{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function Hero({ setView }: { setView: (v: string) => void }) {
  const [ops, setOps] = useState(7);
  const [opsHoy, setOpsHoy] = useState(15);
  useEffect(() => {
    const vals=[7,6,8,5,9,4,7,6,8,5]; let vi=0;
    const t = setInterval(()=>{ vi=(vi+1)%vals.length; setOps(vals[vi]); }, 45000);
    return ()=>clearInterval(t);
  }, []);
  useEffect(() => {
    const now = new Date();
    const secsToday = now.getHours()*3600 + now.getMinutes()*60 + now.getSeconds();
    const base = Math.floor(15 + (secsToday / 86400) * 235);
    setOpsHoy(Math.min(base, 250));
    const t = setInterval(()=>{
      setOpsHoy(prev => Math.min(prev + Math.floor(Math.random()*4)+1, 250));
    }, 35000);
    return ()=>clearInterval(t);
  }, []);
  return (
    <section style={{ background:"linear-gradient(135deg,#0f172a 0%,#1e293b 60%)", padding:"40px 24px 36px", borderBottom:"1px solid #1e293b" }}>
      <div style={{ maxWidth:900, margin:"0 auto" }}>
        <div style={{ display:"inline-flex", alignItems:"center", gap:6, background:"#1e293b", border:"1px solid #334155", borderRadius:99, padding:"4px 12px", marginBottom:16 }}>
          <Estrellas n={5} size={11} />
          <span style={{ fontSize:12, fontWeight:600, color:"#f1f5f9", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>4.9/5</span>
          <span style={{ fontSize:11, color:"#94a3b8", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>· +5,200 operaciones</span>
        </div>
        <h1 style={{ fontFamily:"'Plus Jakarta Sans',sans-serif", fontSize:"clamp(24px,5vw,52px)", fontWeight:800, color:"#f1f5f9", lineHeight:1.1, margin:"0 0 16px", letterSpacing:-1.5, textAlign:"center" }}>
          Recibe $1,500 pesos en tu cuenta<br /><span style={{ color:"#dc2626" }}>en menos de 15 minutos</span>
        </h1>
        <p style={{ fontSize:14, color:"#94a3b8", maxWidth:480, lineHeight:1.55, marginBottom:24, fontFamily:"'Plus Jakarta Sans',sans-serif", textAlign:"center" }}>
          Recibe efectivo de forma segura en menos de 15 minutos vía SPEI. Sin trámites, sin burocracia y 100% garantizado.
        </p>
        <div style={{ display:"flex", gap:12, flexWrap:"wrap", alignItems:"center", justifyContent:"center", marginBottom:40 }}>
          <button onClick={()=>setView("productos")} style={{ background:"#22c55e", color:"#000", border:"none", padding:"16px 36px", borderRadius:10, fontSize:16, fontWeight:800, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif", boxShadow:"0 0 30px rgba(34,197,94,0.4)", letterSpacing:0.5 }}
            onMouseEnter={e=>{e.currentTarget.style.background=C.blueDark;e.currentTarget.style.transform="translateY(-1px)"}}
            onMouseLeave={e=>{e.currentTarget.style.background=C.blue;e.currentTarget.style.transform="translateY(0)"}}
          >OBTENER MI EFECTIVO AHORA</button>
          <div style={{ display:"flex", alignItems:"center", gap:6, background:"#1c0f00", border:"1px solid #f59e0b", borderRadius:8, padding:"10px 16px" }}>
            <span style={{ fontSize:14 }}>🔥</span>
            <span style={{ fontSize:13, fontWeight:600, color:"#fbbf24", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Solo quedan {ops} operaciones disponibles</span>
          </div>
        </div>
        <div style={{ display:"flex", gap:0, flexWrap:"nowrap", overflowX:"auto", justifyContent:"center" }}>
          {[{n:"+18,000",l:"personas confían en nosotros"},{n:"100%",l:"Depósito Garantizado"},{n:String(opsHoy),l:"Ops hoy"},{n:"15 min",l:"En 15 Minutos"}].map((s,i,arr)=>(
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
    <section style={{ background:"#0f172a", padding:"36px 32px", borderBottom:"1px solid #1e293b" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ textAlign:"center", marginBottom:28 }}>
          <h2 style={{ fontSize:22, fontWeight:800, color:"#f1f5f9", fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:4, letterSpacing:-0.3 }}>Tu operación está respaldada</h2>
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
    <section style={{ background:"#1e293b", padding:"36px 20px", borderBottom:"1px solid #334155" }}>
      <div style={{ maxWidth:1100, margin:"0 auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:12, marginBottom:20, justifyContent:"center", flexWrap:"wrap" }}>
          <Estrellas n={5} size={16} />
          <span style={{ fontSize:18, fontWeight:800, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>4.9 de 5</span>
          <span style={{ fontSize:13, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>· Basado en +1,200 reseñas verificadas</span>
        </div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:16 }}>
          {REVIEWS_DATA.map((r,i)=>(
            <div key={i} style={{ background:"#0f172a", border:"1px solid #334155", borderRadius:12, padding:"20px 22px", boxShadow:"0 2px 8px rgba(0,0,0,0.3)" }}>
              <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:10 }}>
                <div style={{ display:"flex", alignItems:"center", gap:10 }}>
                  <div style={{ width:36, height:36, borderRadius:"50%", background:C.blue, color:"#fff", display:"flex", alignItems:"center", justifyContent:"center", fontSize:14, fontWeight:700, fontFamily:"'Plus Jakarta Sans',sans-serif", flexShrink:0 }}>{r.nombre[0]}</div>
                  <div>
                    <div style={{ fontSize:14, fontWeight:700, color:"#f1f5f9", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{r.nombre}</div>
                    <div style={{ fontSize:12, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{r.ciudad}</div>
                  </div>
                </div>
                <span style={{ background:C.greenLight, color:C.green, fontSize:10, fontWeight:700, padding:"3px 8px", borderRadius:99, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>✓ Verificado</span>
              </div>
              <Estrellas n={r.estrellas} size={13} />
              <p style={{ fontSize:14, color:"#cbd5e1", lineHeight:1.6, margin:"8px 0 10px", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>"{r.texto}"</p>
              <div style={{ fontSize:12, color:C.subtle, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{r.fecha}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Productos({ setView, setCarrito }: { setView: (v: string) => void; setCarrito: (p: any) => void }) {
  const [filtro, setFiltro] = useState("TRANSFERENCIA");
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
      <div style={{ background:"#1e293b", borderBottom:"1px solid #334155", padding:"20px 20px 0" }}>
        <div style={{ maxWidth:1100, margin:"0 auto" }}>
          <div style={{ display:"flex", flexDirection:"column", alignItems:"center", gap:8, marginBottom:16 }}>
            <h2 style={{ fontSize:24, fontWeight:800, color:"#f1f5f9", fontFamily:"'Plus Jakarta Sans',sans-serif", margin:0, letterSpacing:-0.5, textAlign:"center", lineHeight:1.2 }}>Elige cómo quieres<br />recibir tu <span style={{ color:C.blue }}>CA$H</span> hoy</h2>
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
      <div style={{ borderTop:"2px solid #22c55e", background:"#0f172a" }}>
        <div style={{ maxWidth:1100, margin:"0 auto", padding:"32px" }}>
          <div style={{ background:"#1a0a0a", border:"1px solid #ef4444", borderRadius:10, padding:"12px 16px", marginBottom:20, display:"flex", alignItems:"flex-start", gap:10 }}>
            <span style={{ fontSize:16, flexShrink:0, marginTop:1 }}>ℹ️</span>
            <p style={{ fontSize:13, color:"#fca5a5", fontFamily:"'Plus Jakarta Sans',sans-serif", lineHeight:1.6, margin:0, fontWeight:500 }}>
              {filtro === "PAQUETE" ? "💵 Ca$h calidad espejo. Pasan todas las pruebas de seguridad. Se envían por paquetería a todo México. Llega en 1–3 días hábiles según tu ciudad." : filtro === "RETIRO" ? "🏧 Retiro sin tarjeta en cualquier cajero de la república. Trabajamos con BBVA, Banorte, Santander, Spin by OXXO, Coppel y Banco Azteca. Te enviamos tus códigos por WhatsApp en 10–30 min." : "🏦 Transferencia a cualquier cuenta bancaria. 100% legal y seguro. Te contactamos por WhatsApp para los datos. Recibes en 10–30 min después de tu compra."}
            </p>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))", gap:20 }}>
            {filtrados.map(p=>(
              <div key={p.id} style={{ background:"#1e293b", border:p.popular?"2px solid #22c55e":"1px solid #334155", borderRadius:16, overflow:"hidden", boxShadow:p.popular?"0 4px 20px rgba(26,86,219,0.12)":"0 1px 4px rgba(0,0,0,0.06)", position:"relative", transition:"box-shadow 0.2s,transform 0.2s" }}
                onMouseEnter={e=>{e.currentTarget.style.boxShadow="0 8px 28px rgba(0,0,0,0.1)";e.currentTarget.style.transform="translateY(-2px)"}}
                onMouseLeave={e=>{e.currentTarget.style.boxShadow=p.popular?"0 4px 20px rgba(26,86,219,0.12)":"0 1px 4px rgba(0,0,0,0.06)";e.currentTarget.style.transform="translateY(0)"}}
              >
                {p.popular && <div style={{ background:"linear-gradient(90deg,#22c55e,#16a34a)", color:"#fff", textAlign:"center", padding:"6px", fontSize:11, fontWeight:700, letterSpacing:1, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>⭐ EL MÁS ELEGIDO POR NUESTROS CLIENTES</div>}
                <div style={{ padding:"22px 22px 20px" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:14 }}>
                    <span style={{ background:p.badgeType==="orange"?C.orangeLight:C.blueLight, color:p.badgeType==="orange"?C.orange:C.blue, border:"1px solid "+(p.badgeType==="orange"?"#fed7aa":"#bfdbfe"), fontSize:10, fontWeight:700, padding:"3px 10px", borderRadius:99, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{p.badge}</span>
                    {p.envioGratis && <span style={{ background:C.greenLight, color:C.green, border:"1px solid #bbf7d0", fontSize:10, fontWeight:700, padding:"3px 10px", borderRadius:99, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>🚀 Envío gratis</span>}
                  {p.sinTarjeta && <span style={{ background:"#fdf4ff", color:"#7c3aed", border:"1px solid #e9d5ff", fontSize:10, fontWeight:700, padding:"3px 10px", borderRadius:99, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>💳 Sin tarjeta</span>}
                  {p.aCuenta && <span style={{ background:"#eff6ff", color:C.blue, border:"1px solid #bfdbfe", fontSize:10, fontWeight:700, padding:"3px 10px", borderRadius:99, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>🏦 A tu cuenta</span>}
                  </div>
                  <div style={{ marginBottom:18 }}>
                  <div style={{ fontSize:18, fontWeight:800, color: p.esPrueba ? "#dc2626" : C.text, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{p.nombre}</div>
                  {p.esPrueba && (
                    <div style={{ fontSize:11, color:"#dc2626", fontFamily:"'Plus Jakarta Sans',sans-serif", marginTop:3, fontWeight:500 }}>
                      Multiplica x3 tu primer movimiento (Solo 1 por usuario)
                    </div>
                  )}
                </div>
                  <div style={{ background:"#0f172a", border:"1px solid #334155", borderRadius:10, padding:"16px", marginBottom:16, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <div>
                      <div style={{ fontSize:11, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:2, fontWeight:500 }}>PAGAS</div>
                      <div style={{ fontSize:22, fontWeight:800, color:C.text, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{fmt(p.paga)}</div>
                    </div>
                    <div style={{ width:32, height:32, background:C.blueLight, borderRadius:"50%", display:"flex", alignItems:"center", justifyContent:"center", fontSize:16, color:C.blue }}>→</div>
                    <div style={{ textAlign:"right" }}>
                      <div style={{ fontSize:11, color:"#dc2626", fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:2, fontWeight:800, letterSpacing:0.5 }}>RECIBES</div>
                      <div style={{ fontSize:26, fontWeight:800, color:"#22c55e", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{fmt(p.recibe)}</div>
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
          <div style={{ marginTop:24, background:"#1e293b", border:"1px solid #334155", borderRadius:12, padding:"14px 20px", display:"flex", gap:0, alignItems:"center", flexWrap:"nowrap", overflowX:"auto" }}>
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
  const [telefono, setTelefono] = useState("+52");
  const [calle, setCalle] = useState("");
  const [colonia, setColonia] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [cp, setCp] = useState("");

  const esPaquete = carrito && carrito.tipo === "PAQUETE";

  const confirmar = () => {
    const camposBase = !telefono.trim();
    const camposDireccion = esPaquete && (!calle.trim() || !colonia.trim() || !ciudad.trim() || !cp.trim());
    if (camposBase || camposDireccion) {
      setError("Por favor completa todos los campos.");
      return;
    }
    setError(null);

    // Send to Make.com for abandoned cart follow-up
    const cleanPhone = telefono.trim().replace(/\s/g, "").replace(/[^+\d]/g, "");
    const makePayload = {
      telefono: cleanPhone,
      producto: carrito.nombre,
      monto: carrito.paga,
      link: carrito.link,
      timestamp: new Date().toISOString(),
    };
    const scriptURL = "https://script.google.com/macros/s/AKfycby_U3m2CxwXcCDOYmGW9IOXkl6ObntpYZbwSSPQZkZFLtClJDR_wirgV8E8w4_IBi16/exec";
    const params = new URLSearchParams({
      telefono: makePayload.telefono,
      producto: makePayload.producto,
      monto: String(makePayload.monto),
      link: makePayload.link,
    });
    fetch(scriptURL + "?" + params.toString(), {
      method: "GET",
      mode: "no-cors",
    }).catch(() => {}); // silent fail - don't block the payment

    fbq("track", "InitiateCheckout", { value: carrito.paga, currency: "MXN", content_name: carrito.nombre });
    
    // Open WhatsApp with pre-written message
    const msg = encodeURIComponent(
      "Hola! Quiero hacer un pedido:\n\n" +
      "Producto: " + carrito.nombre + "\n" +
      "Monto: $" + carrito.paga + " MXN\n" +
      "WhatsApp: " + telefono + "\n\n" +
      "Link de pago: " + carrito.link
    );
    window.open("https://wa.me/message/2T4U3VE55YDAC1?text=" + msg, "_blank");
  };

  if (!carrito) return null;

  return (
    <div style={{ background:"#0f172a", minHeight:"70vh", padding:"40px 32px" }}>
      <div style={{ maxWidth:560, margin:"0 auto" }}>
        {step===0 && <>
          {/* BANNER GARANTÍA */}
          <div style={{ background:"#052e16", border:"1px solid #22c55e", borderRadius:12, padding:"14px 20px", marginBottom:20, display:"flex", alignItems:"center", gap:12 }}>
            <span style={{ fontSize:22 }}>🛡️</span>
            <div>
              <div style={{ fontSize:14, fontWeight:800, color:"#86efac", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>¡Sin riesgo! Garantía de devolución de 30 días</div>
              <div style={{ fontSize:12, color:"#4ade80", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Si no quedas satisfecho, te devolvemos tu dinero. Sin preguntas.</div>
            </div>
          </div>

          {/* BANNER TIEMPO DE ENTREGA */}
          {(() => {
            const hoy = new Date();
            const entrega = new Date(hoy);
            const esPaq = carrito.tipo === "PAQUETE";
            if (esPaq) {
              let agregados = 0;
              while (agregados < 3) {
                entrega.setDate(entrega.getDate() + 1);
                const dia = entrega.getDay();
                if (dia !== 0 && dia !== 6) agregados++;
              }
            } else {
              entrega.setMinutes(entrega.getMinutes() + 59);
            }
            const dias = ["domingo","lunes","martes","miércoles","jueves","viernes","sábado"];
            const meses = ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];
            const hrsEnt = String(entrega.getHours()).padStart(2,"0");
            const minEnt = String(entrega.getMinutes()).padStart(2,"0");
            const labelEntrega = esPaq
              ? `${dias[entrega.getDay()]} ${entrega.getDate()} de ${meses[entrega.getMonth()]}`
              : `hoy mismo a las ${hrsEnt}:${minEnt} hrs`;
            const labelHoy = `${dias[hoy.getDay()]} ${hoy.getDate()} de ${meses[hoy.getMonth()]}`;
            return (
              <div style={{ background:"#0c1a2e", border:"1px solid #1e3a5f", borderRadius:12, padding:"16px 20px", marginBottom:20 }}>
                <div style={{ fontSize:13, fontWeight:700, color:"#60a5fa", fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:12, display:"flex", alignItems:"center", gap:6 }}>
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
            <h2 style={{ fontSize:24, fontWeight:800, color:"#f1f5f9", fontFamily:"'Plus Jakarta Sans',sans-serif", margin:0 }}>Confirmar operación</h2>
          </div>
          {/* PROGRESS BAR */}
          <div style={{ marginBottom:20 }}>
            <div style={{ display:"flex", justifyContent:"space-between", marginBottom:6 }}>
              {["Elegiste tu producto","Confirma tu depósito","Recibe tu cash 💸"].map((s,i)=>(
                <span key={i} style={{ fontSize:10, color: i<=1 ? "#22c55e" : "#334155", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight: i<=1 ? 700 : 400 }}>{s}</span>
              ))}
            </div>
            <div style={{ height:5, background:"#1e293b", borderRadius:99, overflow:"hidden" }}>
              <div style={{ height:"100%", width:"66%", background:"linear-gradient(90deg,#22c55e,#16a34a)", borderRadius:99 }} />
            </div>
            <div style={{ textAlign:"center", marginTop:6 }}>
              <span style={{ fontSize:11, fontWeight:700, color:"#22c55e", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Paso 2 de 3: Confirmación de depósito</span>
            </div>
          </div>
          <div style={{ background:"#1e293b", border:"1px solid #334155", borderRadius:12, padding:24, marginBottom:20 }}>
            <div style={{ fontSize:12, fontWeight:600, color:C.muted, letterSpacing:1, marginBottom:14, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>RESUMEN DE TU OPERACIÓN</div>
            <div style={{ fontSize:18, fontWeight:700, color:C.text, marginBottom:16, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{carrito.nombre}</div>
            <div style={{ background:C.surface, borderRadius:10, display:"flex", justifyContent:"space-between", padding:"14px 18px", marginBottom:12 }}>
              <div>
                <div style={{ fontSize:11, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>PAGAS</div>
                <div style={{ fontSize:20, fontWeight:800, color:"#f1f5f9", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{fmt(carrito.paga)}</div>
              </div>
              <div style={{ fontSize:20, color:C.border, alignSelf:"center" }}>→</div>
              <div style={{ textAlign:"right" }}>
                <div style={{ fontSize:11, color:"#dc2626", fontFamily:"'Plus Jakarta Sans',sans-serif", fontWeight:800 }}>RECIBES</div>
                <div style={{ fontSize:20, fontWeight:800, color:"#22c55e", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>{fmt(carrito.recibe)}</div>
              </div>
            </div>
            <div style={{ display:"flex", gap:8, fontSize:13, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
              <span>⏱</span><span>{carrito.tiempo}</span>
              {carrito.envioGratis && <><span>·</span><span style={{ color:C.green, fontWeight:600 }}>🚀 Envío gratis</span></>}
            </div>
          </div>
          {/* AVISO RETIROS Y TRANSFERENCIAS */}
          {!esPaquete && (
            <div style={{ background:"#0c1a2e", border:"1px solid #22c55e", borderRadius:12, padding:"18px 20px", marginBottom:20, display:"flex", gap:14, alignItems:"flex-start" }}>
              <span style={{ fontSize:24, flexShrink:0 }}>💬</span>
              <div>
                <div style={{ fontSize:14, fontWeight:700, color:"#22c55e", fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:4 }}>Un asesor se pondrá en contacto contigo</div>
                <div style={{ fontSize:13, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif", lineHeight:1.6 }}>
                  Una vez confirmado el pago, un asesor de CLD te contactará por <strong>WhatsApp</strong> para continuar y completar tu operación. El proceso toma {carrito.tiempo}.
                </div>
              </div>
            </div>
          )}

          <div style={{ background:"#1e293b", border:"1px solid #334155", borderRadius:12, padding:24, marginBottom:16 }}>
            <div style={{ fontSize:13, fontWeight:700, color:"#f1f5f9", marginBottom:14, fontFamily:"'Plus Jakarta Sans',sans-serif", display:"flex", alignItems:"center", gap:6 }}>
              📱 ¿A qué WhatsApp te contactamos?
            </div>
            <div style={{ marginBottom:8 }}>
              <input
                placeholder="55 0000 0000"
                value={telefono}
                onChange={e=>{
                  const val = e.target.value;
                  if (!val.startsWith("+52")) {
                    setTelefono("+52" + val.replace(/^[+]?52/, ""));
                  } else {
                    setTelefono(val);
                  }
                }}
                type="tel"
                style={{ width:"100%", background:"#0f172a", border:"2px solid #334155", borderRadius:8, color:"#f1f5f9", padding:"13px 14px", fontSize:16, fontFamily:"'Plus Jakarta Sans',sans-serif", outline:"none", boxSizing:"border-box" }}
                onFocus={e=>e.currentTarget.style.borderColor=C.blue}
                onBlur={e=>e.currentTarget.style.borderColor=C.border}
              />
              <div style={{ fontSize:11, color:"#64748b", marginTop:5, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
                Te confirmamos tu operación por aquí
              </div>
            </div>
          </div>

          {/* DIRECCIÓN — solo paquetes */}
          {esPaquete && (
            <div style={{ background:"#1e293b", border:"1px solid #334155", borderRadius:12, padding:24, marginBottom:16 }}>
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
          >SÍ, ENVIAR MI CASH ({fmt(carrito.paga)})</button>
      <div style={{ display:"flex", gap:8, marginTop:12 }}>
        <div style={{ flex:1, background:"#1e293b", border:"1px solid #334155", borderRadius:10, padding:"10px", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}>
          <span style={{ fontSize:14 }}>🔒</span>
          <span style={{ fontSize:11, color:"#94a3b8", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Pago seguro · <span style={{ color:"#22c55e", fontWeight:700 }}>ecartPay</span></span>
        </div>
        <div style={{ flex:1, background:"#1e293b", border:"1px solid #334155", borderRadius:10, padding:"10px", display:"flex", alignItems:"center", justifyContent:"center", gap:6 }}>
          <span style={{ fontSize:14 }}>🏦</span>
          <span style={{ fontSize:11, color:"#94a3b8", fontFamily:"'Plus Jakarta Sans',sans-serif" }}>Red <span style={{ color:"#22c55e", fontWeight:700 }}>SPEI & OXXO</span></span>
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
      <MarqueeProof />
      <SeccionPasos setView={setView} />
      <SeccionGarantias />
      <Productos setView={setView} setCarrito={setCarrito} />
      <BannerTransparencia />
      <SellosBancarios />
      <SeccionReviews />
    </>
  );
}



// ─── EXIT INTENT POPUP ────────────────────────────────────────────────────────
function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const WA_NUMBER = "521XXXXXXXXXX"; // replace with real number

  useEffect(() => {
    if (dismissed) return;
    // Mobile: detect visibility change (user switches tabs/closes)
    const onVisibility = () => {
      if (document.visibilityState === "hidden" && !dismissed) {
        setShow(true);
      }
    };
    // Also show on scroll up fast (intent to leave)
    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY < lastY - 80 && currentY < 200 && !dismissed) {
        setShow(true);
      }
      lastY = currentY;
    };
    document.addEventListener("visibilitychange", onVisibility);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("scroll", onScroll);
    };
  }, [dismissed]);

  if (!show || dismissed) return null;

  return (
    <div style={{
      position:"fixed", inset:0, background:"rgba(0,0,0,0.6)", zIndex:9999,
      display:"flex", alignItems:"flex-end", justifyContent:"center",
      animation:"fadeIn 0.3s ease",
    }} onClick={()=>{ setShow(false); setDismissed(true); }}>
      <div style={{
        background:"#1e293b", borderRadius:"20px 20px 0 0",
        padding:"28px 24px 36px", width:"100%", maxWidth:480,
        animation:"slideUp 0.3s ease",
      }} onClick={e=>e.stopPropagation()}>
        <div style={{ textAlign:"center", marginBottom:20 }}>
          <div style={{ fontSize:36, marginBottom:12 }}>💬</div>
          <h3 style={{ fontSize:20, fontWeight:800, color:"#f1f5f9", fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:8, letterSpacing:-0.3 }}>
            ¡Espera! ¿Tienes dudas?
          </h3>
          <p style={{ fontSize:14, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif", lineHeight:1.6 }}>
            No te vayas sin tu cash. Habla con un asesor ahora por WhatsApp y recibe un bono extra.
          </p>
        </div>
        <a href={"https://wa.me/"+WA_NUMBER+"?text=Hola%2C+tengo+dudas+sobre+mi+dep%C3%B3sito+en+CLD"}
          target="_blank" rel="noreferrer"
          style={{
            display:"block", width:"100%", background:"#25D366", color:"#fff",
            border:"none", padding:"15px", borderRadius:10, fontSize:15,
            fontWeight:700, cursor:"pointer", fontFamily:"'Plus Jakarta Sans',sans-serif",
            textAlign:"center", textDecoration:"none", boxSizing:"border-box",
            boxShadow:"0 4px 14px rgba(37,211,102,0.35)",
          }}>
          💬 Quiero mi bono extra en WhatsApp
        </a>
        <button onClick={()=>{ setShow(false); setDismissed(true); }} style={{
          display:"block", width:"100%", background:"none", border:"none",
          color:C.muted, fontSize:13, marginTop:12, cursor:"pointer",
          fontFamily:"'Plus Jakarta Sans',sans-serif",
        }}>
          No, continuar sin ayuda
        </button>
      </div>
    </div>
  );
}

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const preguntas = [
    { q:"¿Cuánto tiempo tarda realmente en llegar mi dinero?", a:"Olvídate de esperar días. Una vez que tu pago se confirma, el depósito vía SPEI llega a tu cuenta en un promedio de 12 a 15 minutos. Nuestro sistema opera 24/7, por lo que si compras ahora, recibes tu lana hoy mismo, sin vueltas." },
    { q:"¿Es seguro? ¿Cómo sé que no es una estafa?", a:"Entendemos la duda, por eso usamos Ecart Pay como pasarela de pago, lo que garantiza que tu transacción está encriptada y protegida. Además, puedes ver nuestra sección de Depósitos en tiempo real con capturas de transferencias exitosas de hoy mismo. Más de 5,200 mexicanos ya lo han comprobado. Si el depósito no llega, tienes garantía total de devolución." },
    { q:"¿Por qué recibo más de lo que pago?", a:'No hay letras chiquitas. El "Paquete de Prueba" (Pagas $500, Recibes $1,500) es una promoción exclusiva de bienvenida limitada a una sola operación por usuario. Lo hacemos así para que compruebes nuestra rapidez y seguridad con una inversión baja. Queremos que veas que sí cumplimos para que te conviertas en un cliente frecuente de nuestros paquetes mayores.' },
    { q:"¿A qué bancos pueden depositarme?", a:"A cualquier banco de México (BBVA, Banorte, Santander, Banamex, etc.) y también a aplicaciones como Mercado Pago, Nu, Klar o Spin. Solo necesitas tener tu CLABE interbancaria a la mano." },
  ];
  return (
    <section style={{ background:"#0f172a", borderTop:"1px solid #1e293b", borderBottom:"1px solid #1e293b", padding:"40px 24px" }}>
      <div style={{ maxWidth:700, margin:"0 auto" }}>
        <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:24 }}>
          <h2 style={{ fontSize:20, fontWeight:800, color:"#f1f5f9", fontFamily:"'Plus Jakarta Sans',sans-serif", margin:0, letterSpacing:-0.3 }}>Preguntas frecuentes</h2>
          <span style={{ fontSize:12, color:C.muted, fontFamily:"'Plus Jakarta Sans',sans-serif" }}>· Resolvemos tus dudas</span>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:4 }}>
          {preguntas.map((p,i)=>(
            <div key={i} style={{ background:open===i?"#1e293b":"#0f172a", border:"1px solid "+(open===i?"#22c55e":"#334155"), borderRadius:10, overflow:"hidden", transition:"all 0.2s" }}>
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
    <footer style={{ background:"#020617", padding:"40px 32px 32px" }}>
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
      @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}} @keyframes fadeIn{from{opacity:0}to{opacity:1}} @keyframes slideUp{from{transform:translateY(100%)}to{transform:translateY(0)}}
      @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
      @keyframes load{from{width:0%}to{width:100%}}
      @keyframes spin{to{transform:rotate(360deg)}}
      *{box-sizing:border-box;margin:0;padding:0;}
      body{background:#0f172a;}
      input::placeholder{color:#94a3b8;}
      ::-webkit-scrollbar{width:6px;}
      ::-webkit-scrollbar-track{background:#f1f5f9;}
      ::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:99px;}
    `;
    document.head.appendChild(style);
    fbq("track","PageView");
  },[]);

  return (
    <div style={{ background:"#0f172a", minHeight:"100vh" }}>
      <>
        <Nav view={view} setView={handleSetView} />
        <LiveTicker />
        <ToastProof />
        <StickyCTA setView={handleSetView} />
        <ExitIntentPopup />
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
      </>
    </div>
  );
}
