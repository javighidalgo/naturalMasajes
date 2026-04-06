import Image from "next/image";

export default function Home() {
  const services30 = [
    {
      icon: "🌿",
      name: "Masaje Relajante",
      desc: "Pases suaves y sedantes focalizados en espalda y cuello, o en pies y piernas. Ideal para liberar la tensión acumulada del día a día.",
      price: 25,
      duration: 30,
    },
    {
      icon: "🦶",
      name: "Reflexología Podal",
      desc: "Estimulación de las terminaciones nerviosas en los pies para mejorar el bienestar general del organismo.",
      price: 25,
      duration: 30,
    },
    {
      icon: "🧠",
      name: "Masaje Craneal",
      desc: "Técnica suave centrada en cabeza, cara y cuello. Muy efectiva para aliviar cefaleas tensionales y el estrés mental.",
      price: 25,
      duration: 30,
    },
  ];

  const services60 = [
    {
      icon: "✨",
      name: "Masaje Relajante Completo",
      desc: "Recorre todo el cuerpo por la parte posterior con pases lentos y envolventes para una relajación profunda.",
      price: 30,
      duration: 60,
    },
    {
      icon: "💪",
      name: "Especial Espalda y Cuello",
      desc: "Sesión concentrada en las zonas de mayor acumulación de tensión. Perfecta para quienes trabajan largas horas sentados.",
      price: 30,
      duration: 60,
    },
    {
      icon: "🦵",
      name: "Piernas Cansadas",
      desc: "Mejora la circulación y alivia la sensación de pesadez en las piernas con técnicas de drenaje y amasamiento.",
      price: 30,
      duration: 60,
    },
    {
      icon: "🌸",
      name: "Aceite Templado y Aromas",
      desc: "Una experiencia sensorial completa. Aceites esenciales calentados y aromas terapéuticos para una relajación profunda.",
      price: 35,
      duration: 60,
    },
    {
      icon: "🪨",
      name: "Masaje con Piedras Calientes",
      desc: "Combinación de termoterapia con piedras volcánicas y masaje manual. Alivia la tensión muscular y profunda.",
      price: 35,
      duration: 60,
    },
    {
      icon: "🎯",
      name: "Descarga Muscular",
      desc: "Presiones profundas y técnicas específicas para liberar nudos y contracturas musculares de alta intensidad.",
      price: 35,
      duration: 60,
    },
  ];

  const services75plus = [
    {
      icon: "⚡",
      name: "Tejido Profundo (Deep Tissue)",
      desc: "Trabajo intenso en las capas más profundas del músculo. Ideal para deportistas o personas con tensión muscular crónica.",
      price: 45,
      duration: 75,
    },
    {
      icon: "👑",
      name: "Masaje Combinado",
      desc: "La experiencia completa: presiones intensas y suaves, masaje craneal y reflexología podal. Para quienes quieren lo mejor.",
      price: 50,
      duration: 90,
    },
  ];

  const reviews = [
    {
      name: "María G.",
      rating: 5,
      text: "Totalmente recomendable. Fernando es un profesional excepcional. Me fui completamente relajada y con mucho menos dolor en la espalda.",
    },
    {
      name: "Carlos M.",
      rating: 5,
      text: "Quedé gratamente sorprendido por su profesionalidad y trato humano. El masaje de descarga muscular fue justo lo que necesitaba.",
    },
    {
      name: "Ana P.",
      rating: 5,
      text: "El mejor masaje que me han dado en años. Nota el trabajo serio y con conocimiento. Sin duda volveré.",
    },
  ];

  const faqs = [
    {
      q: "¿Cómo pido una cita?",
      a: "Las citas se gestionan directamente por WhatsApp o teléfono al 657 736 119. Te confirmo disponibilidad de inmediato.",
    },
    {
      q: "¿Puedo pagar con tarjeta?",
      a: "Actualmente se acepta efectivo y Bizum. No disponemos de datáfono por el momento.",
    },
    {
      q: "¿Necesito llevar algo?",
      a: "No es necesario. Todo el material (sábanas, aceites, etc.) está preparado. Solo ven cómodo.",
    },
    {
      q: "¿Hay aparcamiento cerca?",
      a: "Sí, hay zona azul de aparcamiento gratuita por las tardes en los alrededores de C. Flor de Retama.",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fafaf8", color: "#1a1a1a", fontFamily: "var(--font-inter), system-ui, sans-serif" }}>

      {/* ── NAVBAR ── */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 1px 16px rgba(0,0,0,0.04)"
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", height: 72, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 36, height: 36, borderRadius: 10,
              background: "linear-gradient(135deg, #1a7a4a, #2ecc71)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 18
            }}>🌿</div>
            <div>
              <div style={{ fontSize: 18, fontWeight: 900, letterSpacing: "-0.03em", color: "#1a1a1a", lineHeight: 1.1 }}>Natural Masajes</div>
              <div style={{ fontSize: 11, color: "#6b7280", fontWeight: 600, letterSpacing: "0.04em" }}>SEVILLA ESTE</div>
            </div>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <a href="#servicios" style={{ color: "#4b5563", fontWeight: 600, textDecoration: "none", fontSize: 14, display: "none" }}>Servicios</a>
            <a
              href="https://wa.me/34657736119?text=Hola%20Fernando,%20me%20gustar%C3%ADa%20pedir%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, #1a7a4a, #059669)",
                color: "#fff", padding: "10px 20px", borderRadius: 999,
                fontWeight: 700, fontSize: 14, textDecoration: "none",
                boxShadow: "0 4px 12px rgba(5,150,105,0.3)"
              }}
            >
              💬 Reservar por WhatsApp
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "92vh", display: "flex", alignItems: "center", backgroundColor: "#fff", overflow: "hidden" }}>
        {/* Background image with overlay */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image src="/hero.png" alt="Centro de masajes Natural Masajes Sevilla Este" fill priority style={{ objectFit: "cover", objectPosition: "center", opacity: 0.25 }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(110deg, rgba(255,255,255,1) 45%, rgba(255,255,255,0.2) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 50%, #fafaf8 100%)" }} />
        </div>

        <div style={{ position: "relative", zIndex: 10, maxWidth: 1200, margin: "0 auto", padding: "80px 24px", width: "100%" }}>
          <div style={{ maxWidth: 680 }}>
            {/* Badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              backgroundColor: "#ecfdf5", color: "#065f46",
              padding: "7px 18px", borderRadius: 999, marginBottom: 32,
              fontSize: 12, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase",
              border: "1px solid #a7f3d0"
            }}>
              <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: "#10b981", display: "inline-block" }} />
              ⭐ 5.0 · +103 reseñas en Google
            </div>

            <h1 style={{
              fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
              fontWeight: 900, lineHeight: 1.0,
              letterSpacing: "-0.04em", color: "#111827", marginBottom: 28
            }}>
              Centro de<br />
              <span style={{
                background: "linear-gradient(135deg, #059669, #10b981)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
              }}>Masajes</span><br />
              en Sevilla Este
            </h1>

            <p style={{ fontSize: "clamp(1rem, 2vw, 1.2rem)", color: "#4b5563", lineHeight: 1.7, marginBottom: 40, fontWeight: 400, maxWidth: 540 }}>
              Especialista en masajes, deporte y salud. Trato humano e individualizado enfocado en el movimiento, la salud y la prevención.
            </p>

            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <a
                href="https://wa.me/34657736119?text=Hola%20Fernando,%20me%20gustar%C3%ADa%20pedir%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  background: "linear-gradient(135deg, #059669, #10b981)",
                  color: "#fff", padding: "17px 32px", borderRadius: 999,
                  fontWeight: 800, fontSize: 16, textDecoration: "none",
                  boxShadow: "0 8px 28px rgba(5,150,105,0.35)"
                }}
              >
                💬 Pedir cita por WhatsApp
              </a>
              <a
                href="tel:+34657736119"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 10,
                  backgroundColor: "#fff", color: "#111827",
                  padding: "17px 28px", borderRadius: 999,
                  fontWeight: 700, fontSize: 16, textDecoration: "none",
                  border: "2px solid #e5e7eb",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)"
                }}
              >
                📞 657 736 119
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "linear-gradient(135deg, #064e3b, #059669)", padding: "36px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 24 }}>
          {[
            { num: "5.0 ⭐", label: "Valoración Google" },
            { num: "+103", label: "Reseñas verificadas" },
            { num: "desde 25€", label: "Por sesión" },
            { num: "Sevilla Este", label: "C. Flor de Retama, 4" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center", color: "#fff" }}>
              <div style={{ fontSize: "1.7rem", fontWeight: 900, letterSpacing: "-0.02em" }}>{s.num}</div>
              <div style={{ fontSize: "0.82rem", fontWeight: 600, opacity: 0.8, marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SOBRE FERNANDO ── */}
      <section id="sobre-mi" style={{ padding: "96px 24px", backgroundColor: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}>

          {/* Card foto */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{
              width: 300, height: 380, borderRadius: 32,
              background: "linear-gradient(145deg, #d1fae5, #ecfdf5)",
              position: "relative", boxShadow: "0 32px 64px rgba(5,150,105,0.12)",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              fontSize: 90, gap: 8
            }}>
              👨‍⚕️
              <div style={{ fontSize: 14, color: "#065f46", fontWeight: 700 }}>Fernando Altazubiaga</div>
              {/* Card label */}
              <div style={{
                position: "absolute", bottom: -20, left: "50%", transform: "translateX(-50%)",
                backgroundColor: "#fff", padding: "14px 24px", borderRadius: 16,
                boxShadow: "0 8px 24px rgba(0,0,0,0.1)", textAlign: "center", minWidth: 230,
                border: "1px solid #f0fdf4"
              }}>
                <div style={{ fontWeight: 800, fontSize: 16, color: "#111827" }}>Fernando Altazubiaga</div>
                <div style={{ color: "#059669", fontWeight: 600, fontSize: 13, marginTop: 3 }}>Especialista en Masajes · Estudiante de Fisioterapia</div>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <div style={{ width: 36, height: 3, background: "linear-gradient(to right, #059669, #10b981)", borderRadius: 2 }} />
              <span style={{ color: "#059669", fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.14em" }}>Mi Historia</span>
            </div>

            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900, letterSpacing: "-0.025em", color: "#111827", lineHeight: 1.15, marginBottom: 22 }}>
              Pasión por el bienestar<br />desde febrero de 2024.
            </h2>

            <p style={{ color: "#4b5563", lineHeight: 1.75, fontSize: "1.05rem", marginBottom: 18 }}>
              En <strong style={{ color: "#111827" }}>Natural Masajes</strong> me especializo en aplicar técnicas adaptadas a las necesidades de cada persona. Mi filosofía es simple: cada cuerpo es único y merece un tratamiento individualizado.
            </p>
            <p style={{ color: "#4b5563", lineHeight: 1.75, fontSize: "1.05rem", marginBottom: 36 }}>
              Actualmente cursando el grado de <strong style={{ color: "#111827" }}>Fisioterapia</strong>, combino conocimiento académico actualizado con la experiencia práctica en consulta para ofrecerte los mejores resultados.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
              {[
                { icon: "🎯", title: "Trato personalizado", desc: "Cada sesión adaptada a tu cuerpo y objetivo." },
                { icon: "📚", title: "Formación continua", desc: "Estudiante de Fisioterapia + práctica activa." },
                { icon: "🏃", title: "Enfoque deportivo", desc: "Experiencia en masajes para deportistas." },
                { icon: "💚", title: "Ambiente acogedor", desc: "Un espacio cálido y de total confianza." },
              ].map((f) => (
                <div key={f.title} style={{
                  backgroundColor: "#fff", padding: "18px 20px", borderRadius: 18,
                  border: "1px solid #f3f4f6", boxShadow: "0 2px 8px rgba(0,0,0,0.04)"
                }}>
                  <div style={{ fontSize: 26, marginBottom: 8 }}>{f.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#111827", marginBottom: 4 }}>{f.title}</div>
                  <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.5 }}>{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section id="servicios" style={{ padding: "96px 24px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
              <div style={{ width: 32, height: 3, background: "linear-gradient(to right, #059669, #10b981)", borderRadius: 2 }} />
              <span style={{ color: "#059669", fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.14em" }}>Tratamientos</span>
              <div style={{ width: 32, height: 3, background: "linear-gradient(to right, #10b981, #059669)", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900, color: "#111827", letterSpacing: "-0.025em", marginBottom: 14 }}>
              Nuestros tratamientos
            </h2>
            <p style={{ color: "#6b7280", maxWidth: 520, margin: "0 auto", lineHeight: 1.6 }}>
              Todos los masajes se realizan en un ambiente relajado, limpio y absolutamente profesional. Elige el que mejor se adapta a lo que necesitas.
            </p>
          </div>

          {/* 30 min */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <div style={{ padding: "6px 16px", backgroundColor: "#ecfdf5", color: "#065f46", borderRadius: 999, fontWeight: 800, fontSize: 13, border: "1px solid #a7f3d0" }}>30 minutos</div>
              <div style={{ flex: 1, height: 1, backgroundColor: "#f0fdf4" }} />
              <div style={{ fontWeight: 700, color: "#6b7280", fontSize: 14 }}>25€</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {services30.map((s) => (
                <ServiceCard key={s.name} s={s} />
              ))}
            </div>
          </div>

          {/* 60 min */}
          <div style={{ marginBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <div style={{ padding: "6px 16px", backgroundColor: "#eff6ff", color: "#1e40af", borderRadius: 999, fontWeight: 800, fontSize: 13, border: "1px solid #bfdbfe" }}>60 minutos</div>
              <div style={{ flex: 1, height: 1, backgroundColor: "#eff6ff" }} />
              <div style={{ fontWeight: 700, color: "#6b7280", fontSize: 14 }}>30€ – 35€</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {services60.map((s) => (
                <ServiceCard key={s.name} s={s} accent="#1e40af" lightBg="#eff6ff" />
              ))}
            </div>
          </div>

          {/* 75-90 min */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
              <div style={{ padding: "6px 16px", backgroundColor: "#fdf4ff", color: "#701a75", borderRadius: 999, fontWeight: 800, fontSize: 13, border: "1px solid #f0abfc" }}>75 – 90 minutos</div>
              <div style={{ flex: 1, height: 1, backgroundColor: "#fdf4ff" }} />
              <div style={{ fontWeight: 700, color: "#6b7280", fontSize: 14 }}>45€ – 50€</div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
              {services75plus.map((s) => (
                <ServiceCard key={s.name} s={s} accent="#701a75" lightBg="#fdf4ff" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEÑAS ── */}
      <section style={{ padding: "96px 24px", backgroundColor: "#fafaf8" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
              <div style={{ width: 32, height: 3, background: "linear-gradient(to right, #059669, #10b981)", borderRadius: 2 }} />
              <span style={{ color: "#059669", fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.14em" }}>Opiniones</span>
              <div style={{ width: 32, height: 3, background: "linear-gradient(to right, #10b981, #059669)", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 900, color: "#111827", letterSpacing: "-0.025em" }}>
              Lo que dicen nuestros clientes
            </h2>
            <p style={{ color: "#6b7280", marginTop: 10, fontSize: 15 }}>+103 reseñas · 5.0 ⭐ en Google</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {reviews.map((r) => (
              <div key={r.name} style={{
                backgroundColor: "#fff", padding: 28, borderRadius: 24,
                border: "1px solid #f3f4f6", boxShadow: "0 4px 24px rgba(0,0,0,0.05)"
              }}>
                <div style={{ fontSize: 20, marginBottom: 14 }}>{"⭐".repeat(r.rating)}</div>
                <p style={{ color: "#374151", lineHeight: 1.65, fontSize: 15, fontStyle: "italic", marginBottom: 20 }}>"{r.text}"</p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: "50%",
                    background: "linear-gradient(135deg, #059669, #10b981)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#fff", fontWeight: 800, fontSize: 14
                  }}>{r.name[0]}</div>
                  <div style={{ fontWeight: 700, color: "#111827", fontSize: 14 }}>{r.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: "96px 24px", backgroundColor: "#fff" }}>
        <div style={{ maxWidth: 760, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
              <div style={{ width: 32, height: 3, background: "linear-gradient(to right, #059669, #10b981)", borderRadius: 2 }} />
              <span style={{ color: "#059669", fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.14em" }}>FAQ</span>
              <div style={{ width: 32, height: 3, background: "linear-gradient(to right, #10b981, #059669)", borderRadius: 2 }} />
            </div>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 900, color: "#111827", letterSpacing: "-0.025em" }}>
              Preguntas frecuentes
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {faqs.map((f) => (
              <div key={f.q} style={{
                backgroundColor: "#fafaf8", padding: "24px 28px", borderRadius: 20,
                border: "1px solid #f3f4f6"
              }}>
                <div style={{ fontWeight: 800, color: "#111827", fontSize: 16, marginBottom: 10 }}>❓ {f.q}</div>
                <div style={{ color: "#4b5563", lineHeight: 1.65, fontSize: 15 }}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / CONTACTO ── */}
      <section id="contacto" style={{
        background: "linear-gradient(135deg, #064e3b 0%, #059669 60%, #10b981 100%)",
        padding: "88px 24px", textAlign: "center"
      }}>
        <div style={{ maxWidth: 640, margin: "0 auto" }}>
          <h2 style={{ color: "#fff", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 900, letterSpacing: "-0.025em", marginBottom: 16 }}>
            ¿Listo para cuidarte?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.82)", fontSize: "1.1rem", marginBottom: 40, lineHeight: 1.6 }}>
            Reserva tu sesión ahora mismo. Atendemos en C. Flor de Retama, 4 — 41020 Sevilla.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a
              href="https://wa.me/34657736119?text=Hola%20Fernando,%20me%20gustar%C3%ADa%20pedir%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                backgroundColor: "#fff", color: "#059669",
                padding: "18px 36px", borderRadius: 999,
                fontWeight: 800, fontSize: 17, textDecoration: "none",
                boxShadow: "0 8px 32px rgba(0,0,0,0.18)"
              }}
            >
              💬 WhatsApp
            </a>
            <a
              href="tel:+34657736119"
              style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                backgroundColor: "rgba(255,255,255,0.12)", color: "#fff",
                padding: "18px 36px", borderRadius: 999,
                fontWeight: 800, fontSize: 17, textDecoration: "none",
                border: "2px solid rgba(255,255,255,0.35)"
              }}
            >
              📞 657 736 119
            </a>
          </div>
          <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
            <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>📧 naturalmasaje30@gmail.com</div>
            <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>
              <a href="https://www.instagram.com/naturalmasaje" target="_blank" rel="noopener noreferrer" style={{ color: "rgba(255,255,255,0.75)", textDecoration: "none" }}>
                📸 @naturalmasaje
              </a>
            </div>
            <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 14 }}>💳 Efectivo · Bizum</div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ backgroundColor: "#0a0a0a", color: "#6b7280", padding: "40px 24px", textAlign: "center", fontSize: 13 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ fontWeight: 900, fontSize: 18, color: "#fff", marginBottom: 6 }}>
            Natural<span style={{ color: "#10b981" }}>Masajes</span>
          </div>
          <p>C. Flor de Retama, 4 · 41020 Sevilla Este · 657 736 119</p>
          <p style={{ marginTop: 6 }}>© {new Date().getFullYear()} Natural Masajes · Fernando Altazubiaga · Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ s, accent = "#059669", lightBg = "#ecfdf5" }) {
  return (
    <div style={{
      backgroundColor: "#fafaf8", padding: 24, borderRadius: 22,
      border: "1px solid #f3f4f6", boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
      display: "flex", flexDirection: "column", gap: 10
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div style={{
          width: 48, height: 48, borderRadius: 14,
          backgroundColor: lightBg,
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: 24
        }}>
          {s.icon}
        </div>
        <div style={{
          padding: "4px 12px", borderRadius: 999,
          backgroundColor: lightBg, color: accent,
          fontWeight: 800, fontSize: 14
        }}>
          {s.price}€
        </div>
      </div>
      <div style={{ fontWeight: 800, fontSize: 16, color: "#111827" }}>{s.name}</div>
      <div style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.6, flex: 1 }}>{s.desc}</div>
      <div style={{ fontSize: 12, color: accent, fontWeight: 700 }}>⏱ {s.duration} minutos</div>
    </div>
  );
}
