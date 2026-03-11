import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Clientes",
  description: `Empresas e inmobiliarias que confiaron en SkySpirit Drones para fotografía y video aéreo en Buenos Aires.`,
};

// Editá esta lista con tus clientes reales
const clientes = [
  {
    nombre: "Inmobiliaria Ejemplo",
    sector: "Inmobiliaria",
    descripcion: "Más de 12 propiedades fotografiadas en CABA.",
    destacado: true,
  },
  {
    nombre: "Constructora Ejemplo",
    sector: "Construcción",
    descripcion: "Seguimiento aéreo de obra durante 6 meses en Nordelta.",
    destacado: true,
  },
];

const testimonios = [
  {
    texto: "Las fotos aéreas hicieron que las propiedades se vendieran mucho más rápido. El trabajo fue prolijo, puntual y los resultados superaron nuestras expectativas.",
    autor: "— Responsable de Marketing, Inmobiliaria Ejemplo",
  },
  {
    texto: "El seguimiento semanal de obra nos dio una visión completa del avance que ninguna foto de tierra puede dar. Lo recomendamos sin dudar.",
    autor: "— Director de Obra, Constructora Ejemplo",
  },
];

export default function ClientesPage() {
  return (
    <div style={{ paddingTop: "72px" }}>
      <div style={{ padding: "5rem 2rem 4rem", background: "linear-gradient(180deg, rgba(27,58,92,0.15) 0%, transparent 100%)", borderBottom: "1px solid rgba(123,196,226,0.06)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ color: "#7BC4E2", fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>Confianza</p>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#E8EFF5", marginBottom: "1rem" }}>
            Clientes
          </h1>
          <p style={{ color: "rgba(232,239,245,0.5)", fontSize: "1.05rem", maxWidth: "520px", lineHeight: 1.7 }}>
            Empresas e inmobiliarias que confiaron en SkySpirit Drones para capturar sus proyectos desde el aire.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 2rem" }}>
        {/* Clients grid */}
        <section style={{ marginBottom: "5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {clientes.map((c) => (
              <div
                key={c.nombre}
                style={{
                  padding: "2rem",
                  background: "#0E1820",
                  border: "1px solid rgba(123,196,226,0.08)",
                  position: "relative",
                }}
              >
                {c.destacado && (
                  <div style={{ position: "absolute", top: "1rem", right: "1rem", width: "6px", height: "6px", borderRadius: "50%", background: "#7BC4E2" }} />
                )}
                <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#7BC4E2", marginBottom: "0.75rem", display: "block" }}>
                  {c.sector}
                </span>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.4rem", fontWeight: 400, color: "#E8EFF5", marginBottom: "0.75rem" }}>
                  {c.nombre}
                </h3>
                <p style={{ color: "rgba(232,239,245,0.5)", fontSize: "0.88rem", lineHeight: 1.7 }}>{c.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ marginBottom: "5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "2rem", fontWeight: 300, color: "#E8EFF5" }}>
              Lo que dicen
            </h2>
            <div className="hr-sky" style={{ flex: 1 }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {testimonios.map((t, i) => (
              <blockquote
                key={i}
                style={{
                  padding: "2.5rem",
                  background: "linear-gradient(135deg, #0E1820, #0F2236)",
                  border: "1px solid rgba(123,196,226,0.1)",
                  borderLeft: "3px solid #2E6DA4",
                }}
              >
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.15rem", fontWeight: 300, fontStyle: "italic", color: "rgba(232,239,245,0.8)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                  &ldquo;{t.texto}&rdquo;
                </p>
                <footer style={{ color: "rgba(123,196,226,0.6)", fontSize: "0.82rem", letterSpacing: "0.05em" }}>{t.autor}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ padding: "3rem", background: "linear-gradient(135deg, #0E1820, #0F2236)", border: "1px solid rgba(123,196,226,0.1)", textAlign: "center" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.5rem", color: "#E8EFF5", marginBottom: "0.75rem" }}>
            ¿Sumamos a tu empresa al portfolio?
          </p>
          <p style={{ color: "rgba(232,239,245,0.45)", fontSize: "0.9rem", marginBottom: "1.75rem" }}>
            Trabajamos con inmobiliarias, constructoras y proyectos corporativos.
          </p>
          <Link href="/contacto" style={{ padding: "0.8rem 2rem", border: "1px solid rgba(123,196,226,0.35)", color: "#7BC4E2", textDecoration: "none", fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Escribinos
          </Link>
        </div>
      </div>
    </div>
  );
}
