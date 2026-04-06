import Image from "next/image";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f8fafc", color: "#0f172a" }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(255,255,255,0.88)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(226,232,240,0.8)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)"
      }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ fontSize: 22, fontWeight: 900, letterSpacing: "-0.04em", color: "#0f172a" }}>
            Natural<span style={{ color: "#059669" }}>Masajes</span>
          </div>
          <a
            href="#cita"
            style={{
              display: "flex", alignItems: "center", gap: 8,
              background: "#059669", color: "#fff",
              padding: "10px 24px", borderRadius: 999,
              fontWeight: 700, fontSize: 15,
              textDecoration: "none",
              boxShadow: "0 4px 14px rgba(5,150,105,0.35)",
              transition: "background 0.2s"
            }}
          >
            📅 Pedir Cita
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "88vh", display: "flex", alignItems: "center", overflow: "hidden", backgroundColor: "#fff" }}>

        {/* Background image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <Image
            src="/hero.png"
            alt="Clínica de fisioterapia profesional"
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "center", opacity: 0.35 }}
          />
          {/* Gradient overlays */}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(255,255,255,1) 40%, rgba(255,255,255,0.4) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, #f8fafc 100%)" }} />
        </div>

        {/* Hero content */}
        <div style={{ position: "relative", zIndex: 10, maxWidth: 1152, margin: "0 auto", padding: "64px 24px", width: "100%" }}>
          
          {/* Badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            backgroundColor: "#d1fae5", color: "#065f46",
            padding: "6px 16px", borderRadius: 999,
            fontSize: 12, fontWeight: 800, letterSpacing: "0.1em",
            textTransform: "uppercase", marginBottom: 28,
            border: "1px solid rgba(5,150,105,0.2)"
          }}>
            <span style={{
              width: 8, height: 8, borderRadius: "50%",
              backgroundColor: "#10b981",
              boxShadow: "0 0 0 3px rgba(16,185,129,0.3)",
              animation: "pulse 2s infinite"
            }} />
            Citas disponibles esta semana
          </div>

          <h1 style={{
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#0f172a",
            maxWidth: 720,
            marginBottom: 24
          }}>
            Tu bienestar,<br/>
            <span style={{ color: "#059669" }}>nuestra prioridad.</span>
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "#475569",
            lineHeight: 1.7,
            maxWidth: 560,
            marginBottom: 40,
            fontWeight: 400
          }}>
            Fisioterapia clínica, deportiva y masaje integral. Tratamientos personalizados basados en evidencia científica para que recuperes tu calidad de vida.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            <a
              href="#cita"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                backgroundColor: "#0f172a", color: "#fff",
                padding: "16px 32px", borderRadius: 999,
                fontWeight: 700, fontSize: 16, textDecoration: "none",
                boxShadow: "0 8px 24px rgba(15,23,42,0.25)",
                transition: "transform 0.2s, box-shadow 0.2s"
              }}
            >
              Reservar sesión →
            </a>
            <a
              href="#servicios"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                backgroundColor: "#fff", color: "#0f172a",
                padding: "16px 32px", borderRadius: 999,
                fontWeight: 700, fontSize: 16, textDecoration: "none",
                border: "2px solid #e2e8f0",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
              }}
            >
              Ver servicios
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section style={{ backgroundColor: "#059669", padding: "32px 24px" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24 }}>
          {[
            { num: "+500", label: "Pacientes tratados" },
            { num: "8+", label: "Años de experiencia" },
            { num: "98%", label: "Satisfacción" },
            { num: "5★", label: "Valoración media" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center", color: "#fff" }}>
              <div style={{ fontSize: "2rem", fontWeight: 900, letterSpacing: "-0.02em" }}>{s.num}</div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, opacity: 0.85, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOBRE MÍ ── */}
      <section id="sobre-mi" style={{ padding: "100px 24px", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}>
          
          {/* Photo card */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              width: 300, height: 380,
              backgroundColor: "#d1fae5",
              borderRadius: 32,
              position: "relative",
              boxShadow: "0 24px 64px rgba(5,150,105,0.15)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 96
            }}>
              👨‍⚕️
              {/* Name card */}
              <div style={{
                position: "absolute", bottom: -20, left: "50%",
                transform: "translateX(-50%)",
                backgroundColor: "#fff",
                padding: "16px 28px", borderRadius: 16,
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
                textAlign: "center", minWidth: 220,
                border: "1px solid #f1f5f9"
              }}>
                <div style={{ fontWeight: 800, fontSize: 17, color: "#0f172a" }}>Javier Hidalgo</div>
                <div style={{ color: "#059669", fontWeight: 600, fontSize: 13, marginTop: 4 }}>Fisioterapeuta Titulado · Colegiado</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 3, backgroundColor: "#059669", borderRadius: 2 }} />
              <span style={{ color: "#059669", fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em" }}>Sobre Mí</span>
            </div>

            <h2 style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 900, letterSpacing: "-0.02em",
              color: "#0f172a", lineHeight: 1.15, marginBottom: 24
            }}>
              Más allá de tratar<br/>los síntomas.
            </h2>

            <p style={{ color: "#475569", lineHeight: 1.75, fontSize: "1.05rem", marginBottom: 16 }}>
              En <strong style={{ color: "#0f172a" }}>Natural Masajes</strong> buscamos el origen de tu problema, no solo aliviar el dolor puntual. Cada tratamiento está diseñado exclusivamente para ti, combinando técnicas avanzadas respaldadas por la evidencia científica.
            </p>
            <p style={{ color: "#475569", lineHeight: 1.75, fontSize: "1.05rem", marginBottom: 36 }}>
              Especializado en <strong style={{ color: "#0f172a" }}>terapia manual</strong>, <strong style={{ color: "#0f172a" }}>punción seca</strong>, rehabilitación deportiva y masajes terapéuticos de alta intensidad.
            </p>

            {/* Feature cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { icon: "🔬", title: "Diagnóstico preciso", desc: "Valoración funcional completa antes de cada tratamiento." },
                { icon: "🤝", title: "Trato humano", desc: "Escucha activa y acompañamiento durante tu recuperación." },
                { icon: "🏃", title: "Fisio deportiva", desc: "Vuelta rápida y segura al deporte que amas." },
                { icon: "🧘", title: "Prevención", desc: "Planes de ejercicio y educación postural a largo plazo." },
              ].map((f) => (
                <div key={f.title} style={{
                  backgroundColor: "#fff", padding: 20, borderRadius: 20,
                  border: "1px solid #f1f5f9",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
                }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{f.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 15, color: "#0f172a", marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" style={{ padding: "100px 24px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 40, height: 3, backgroundColor: "#059669", borderRadius: 2 }} />
              <span style={{ color: "#059669", fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.12em" }}>Servicios</span>
              <div style={{ width: 40, height: 3, backgroundColor: "#059669", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900, color: "#0f172a", letterSpacing: "-0.02em" }}>
              Tratamientos especializados
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {[
              { icon: "💆", title: "Masaje Terapéutico", desc: "Técnicas manuales profundas para liberar tensión muscular y mejorar la circulación." },
              { icon: "🎯", title: "Punción Seca", desc: "Tratamiento con agujas finas para calmar puntos gatillo y contracturas resistentes." },
              { icon: "🦴", title: "Terapia Manual", desc: "Manipulaciones articulares y movilizaciones para recuperar el rango de movimiento." },
              { icon: "⚡", title: "Electroterapia", desc: "TENS, ultrasonido y otras corrientes para acelerar la recuperación de tejidos." },
              { icon: "🏋️", title: "Fisio Deportiva", desc: "Readaptación funcional postlesión y prevención de recaídas en deportistas." },
              { icon: "🧠", title: "Educación en Dolor", desc: "Estrategias para entender y gestionar el dolor crónico desde dentro." },
            ].map((s, i) => (
              <div key={s.title} style={{
                backgroundColor: "#f8fafc",
                padding: 28, borderRadius: 24,
                border: "1px solid #f1f5f9",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "default"
              }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 16,
                  backgroundColor: i % 2 === 0 ? "#d1fae5" : "#e0e7ff",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 26, marginBottom: 16
                }}>
                  {s.icon}
                </div>
                <h3 style={{ fontWeight: 800, fontSize: 17, color: "#0f172a", marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: "#475569", fontSize: 14, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section id="cita" style={{
        background: "linear-gradient(135deg, #064e3b 0%, #059669 50%, #10b981 100%)",
        padding: "80px 24px", textAlign: "center"
      }}>
        <h2 style={{ color: "#fff", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.02em", marginBottom: 16 }}>
          ¿Listo para sentirte mejor?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", marginBottom: 40, maxWidth: 480, margin: "0 auto 40px" }}>
          Reserva tu primera sesión sin compromiso. Primera valoración gratuita.
        </p>
        <a
          href="tel:+34600000000"
          style={{
            display: "inline-flex", alignItems: "center", gap: 10,
            backgroundColor: "#fff", color: "#059669",
            padding: "18px 40px", borderRadius: 999,
            fontWeight: 800, fontSize: 17, textDecoration: "none",
            boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          }}
        >
          📞 Llamar ahora
        </a>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#0f172a", color: "#94a3b8", padding: "40px 24px", textAlign: "center", fontSize: 14 }}>
        <div style={{ maxWidth: 1152, margin: "0 auto" }}>
          <div style={{ fontWeight: 900, fontSize: 20, color: "#fff", marginBottom: 8 }}>
            Natural<span style={{ color: "#10b981" }}>Masajes</span>
          </div>
          <p>© {new Date().getFullYear()} Natural Masajes · Fisioterapeuta Javier Hidalgo · Todos los derechos reservados.</p>
        </div>
      </footer>

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 0 0 3px rgba(16,185,129,0.3); }
          50% { box-shadow: 0 0 0 6px rgba(16,185,129,0.1); }
        }
      `}</style>
    </div>
  );
}
