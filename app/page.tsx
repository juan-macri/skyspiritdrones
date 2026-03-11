import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/config";
import { trabajos, sesiones } from "@/data/content";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Fotografía y video aéreo en Buenos Aires`,
  description: siteConfig.description,
};

export default function HomePage() {
  const destacados = trabajos.filter((t) => t.destacado);

  return (
    <>
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "8rem 2rem 4rem",
          position: "relative",
          overflow: "hidden",
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(46,109,164,0.18) 0%, transparent 70%), #0A0F14",
        }}
      >
        {/* Background grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(123,196,226,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(123,196,226,0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        {/* Floating logo */}
        <div className="animate-drone-float" style={{ marginBottom: "2rem", position: "relative", zIndex: 1 }}>
          <Image src="/logo.png" alt="SkySpirit Drones" width={110} height={110} style={{ objectFit: "contain", filter: "drop-shadow(0 0 40px rgba(123,196,226,0.3))" }} />
        </div>

        <div className="animate-fade-up" style={{ position: "relative", zIndex: 1 }}>
          <p style={{ color: "#7BC4E2", fontSize: "0.78rem", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            Buenos Aires · Argentina
          </p>
          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(3rem, 8vw, 6.5rem)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              color: "#E8EFF5",
              marginBottom: "1.5rem",
              maxWidth: "800px",
            }}
          >
            El cielo como
            <br />
            <em style={{ color: "#7BC4E2", fontStyle: "italic" }}>perspectiva</em>
          </h1>
          <p
            style={{
              color: "rgba(232,239,245,0.55)",
              fontSize: "clamp(1rem, 2vw, 1.2rem)",
              fontWeight: 300,
              maxWidth: "480px",
              margin: "0 auto 3rem",
              lineHeight: 1.7,
            }}
          >
            Fotografía y video aéreo para inmobiliarias,
            <br />constructoras y proyectos especiales.
          </p>

          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/trabajos"
              style={{
                padding: "0.9rem 2.5rem",
                background: "linear-gradient(135deg, #2E6DA4, #1B3A5C)",
                color: "white",
                textDecoration: "none",
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                border: "1px solid rgba(123,196,226,0.2)",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              Ver trabajos
            </Link>
            <Link
              href="/contacto"
              style={{
                padding: "0.9rem 2.5rem",
                border: "1px solid rgba(123,196,226,0.35)",
                color: "#7BC4E2",
                textDecoration: "none",
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                transition: "background 0.2s",
              }}
            >
              Consultar
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: "2.5rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            opacity: 0.4,
          }}
        >
          <span style={{ fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#7BC4E2" }}>Scroll</span>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #7BC4E2, transparent)" }} />
        </div>
      </section>

      {/* SERVICES STRIP */}
      <section style={{ padding: "5rem 2rem", background: "#080D12", borderTop: "1px solid rgba(123,196,226,0.06)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              { icon: "🏠", title: "Inmobiliarias", desc: "Fotos y video aéreo que venden propiedades antes de la visita." },
              { icon: "🏗️", title: "Seguimiento de obra", desc: "Relevamiento periódico del avance constructivo desde el aire." },
              { icon: "🌅", title: "Paisajes & viajes", desc: "Capturas personales de lugares únicos con perspectiva aérea." },
              { icon: "📍", title: "CABA y GBA", desc: "Operación en Capital y todo el Gran Buenos Aires." },
            ].map((s) => (
              <div
                key={s.title}
                style={{
                  padding: "2rem",
                  background: "#0E1820",
                  border: "1px solid rgba(123,196,226,0.08)",
                  borderRadius: "2px",
                }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{s.icon}</div>
                <h3
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "1.3rem",
                    fontWeight: 400,
                    color: "#E8EFF5",
                    marginBottom: "0.75rem",
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ color: "rgba(232,239,245,0.45)", fontSize: "0.9rem", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WORKS */}
      <section style={{ padding: "6rem 2rem" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <p style={{ color: "#7BC4E2", fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                Portfolio
              </p>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 300, color: "#E8EFF5" }}>
                Trabajos destacados
              </h2>
            </div>
            <Link
              href="/trabajos"
              style={{ color: "#7BC4E2", fontSize: "0.85rem", letterSpacing: "0.1em", textDecoration: "none", borderBottom: "1px solid rgba(123,196,226,0.35)", paddingBottom: "2px" }}
            >
              Ver todos →
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {destacados.map((trabajo) => (
              <Link
                key={trabajo.id}
                href={`/trabajos#${trabajo.id}`}
                style={{ textDecoration: "none" }}
              >
                <article
                  className="project-card"
                  style={{
                    background: "#0E1820",
                    border: "1px solid rgba(123,196,226,0.08)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "200px",
                      background: "linear-gradient(135deg, #0F2236, #1B3A5C)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "3rem",
                    }}
                  >
                    {trabajo.categoria === "inmobiliaria" ? "🏠" : trabajo.categoria === "construccion" ? "🏗️" : "🌅"}
                  </div>
                  <div style={{ padding: "1.5rem" }}>
                    <span
                      style={{
                        fontSize: "0.7rem",
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#7BC4E2",
                        marginBottom: "0.5rem",
                        display: "block",
                      }}
                    >
                      {trabajo.categoria === "inmobiliaria" ? "Inmobiliaria" : trabajo.categoria === "construccion" ? "Construcción" : "Paisajes"}
                    </span>
                    <h3
                      style={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "1.3rem",
                        fontWeight: 400,
                        color: "#E8EFF5",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {trabajo.titulo}
                    </h3>
                    <p style={{ color: "rgba(232,239,245,0.45)", fontSize: "0.85rem" }}>{trabajo.ubicacion}</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "7rem 2rem",
          background: "linear-gradient(135deg, #0F2236 0%, #091929 50%, #0E1820 100%)",
          textAlign: "center",
          borderTop: "1px solid rgba(123,196,226,0.08)",
          borderBottom: "1px solid rgba(123,196,226,0.08)",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <p style={{ color: "#7BC4E2", fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1.5rem" }}>
            ¿Tenés un proyecto?
          </p>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
              fontWeight: 300,
              color: "#E8EFF5",
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}
          >
            Capturemos tu propiedad
            <br />
            <em style={{ color: "#7BC4E2" }}>desde el cielo</em>
          </h2>
          <p style={{ color: "rgba(232,239,245,0.45)", marginBottom: "2.5rem", lineHeight: 1.8 }}>
            Inmobiliarias, constructoras o proyectos especiales.
            <br />Escribime y coordinamos.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "1rem 2.5rem",
                background: "#25D366",
                color: "white",
                textDecoration: "none",
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                fontWeight: 400,
              }}
            >
              WhatsApp
            </a>
            <Link
              href="/contacto"
              style={{
                padding: "1rem 2.5rem",
                border: "1px solid rgba(123,196,226,0.35)",
                color: "#7BC4E2",
                textDecoration: "none",
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              Formulario
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
