import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre mí",
  description: `Conocé al piloto detrás de SkySpirit Drones. Fotografía aérea profesional en Buenos Aires con años de experiencia en inmobiliarias y construcción.`,
};

const equipo = [
  {
    nombre: "DJI Mini 4 Pro",
    descripcion: "Drone de menos de 250g que no requiere registro, con cámara de 1/1.3\" a 4K/60fps, cardán de 3 ejes, grabación en D-Log M y apertura f/1.7. Ideal para propiedades, desarrollos y proyectos turísticos donde la calidad de imagen es clave.",
    icon: "🚁",
  },
  {
    nombre: "Adobe Premiere Pro",
    descripcion: "Edición profesional en Premiere Pro con corrección de color avanzada. Entrega en formatos optimizados para portales inmobiliarios, redes sociales y presentaciones corporativas.",
    icon: "🎬",
  },
  {
    nombre: "Adobe After Effects",
    descripcion: "Composición y motion graphics para agregar títulos, logos, textos animados y efectos visuales que elevan el nivel de presentación del producto final.",
    icon: "✨",
  },
];

export default function SobreMiPage() {
  return (
    <div style={{ paddingTop: "72px" }}>
      {/* Header */}
      <div style={{ padding: "5rem 2rem 4rem", background: "linear-gradient(180deg, rgba(27,58,92,0.15) 0%, transparent 100%)", borderBottom: "1px solid rgba(123,196,226,0.06)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ color: "#7BC4E2", fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>El piloto</p>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#E8EFF5" }}>Sobre mí</h1>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 2rem" }}>
        {/* Bio */}
        <section style={{ marginBottom: "5rem" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <div>
              <img
                src="/foto-piloto.jpg"
                alt="Piloto de drone en Buenos Aires"
                style={{
                  width: "100%",
                  height: "auto",
                  aspectRatio: "4/5",
                  objectFit: "cover",
                  border: "1px solid rgba(123,196,226,0.1)",
                }}
              />
            </div>

            <div style={{ paddingTop: "1rem" }}>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "2.5rem", fontWeight: 300, color: "#E8EFF5", marginBottom: "2rem", lineHeight: 1.2 }}>
                Piloto de dron en Buenos Aires
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", color: "rgba(232,239,245,0.65)", fontSize: "1rem", lineHeight: 1.8 }}>
                <p>
                  Soy piloto de drone y realizador audiovisual especializado en producción aérea para inmobiliarias, arquitectura y proyectos turísticos. Trabajo con un enfoque cinematográfico, buscando que cada toma no solo muestre un lugar, sino que comunique su escala, su entorno y su valor.
                </p>
                <p>
                  Mi objetivo es crear imágenes que ayuden a destacar propiedades y desarrollos en un mercado cada vez más visual. Cada proyecto lo abordo con planificación, control técnico de imagen y un proceso de edición profesional, cuidando especialmente el movimiento de cámara, la composición y el color para lograr un resultado limpio y de alto impacto.
                </p>
                <p>
                  Actualmente colaboro con inmobiliarias y constructoras que buscan elevar la presentación de sus propiedades y diferenciarse visualmente en redes sociales, portales y campañas de marketing.
                </p>
                <p>
                  SkySpirit Drones nace de la combinación entre tecnología aérea, narrativa visual y una búsqueda constante de calidad en cada producción.
                </p>
              </div>

              {/* <div style={{ marginTop: "2.5rem", display: "flex", gap: "3rem" }}>
                {[
                  { numero: "30+", label: "Proyectos" },
                  { numero: "15+", label: "Clientes" },
                  { numero: "4K", label: "Resolución" },
                ].map((s) => (
                  <div key={s.label}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "2.5rem", fontWeight: 300, color: "#7BC4E2", lineHeight: 1 }}>
                      {s.numero}
                    </div>
                    <div style={{ color: "rgba(232,239,245,0.4)", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: "0.3rem" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div> */}
            </div>
          </div>

          {/* Mobile: stack columns */}
          <style>{`@media (max-width: 768px) { .bio-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }`}</style>
        </section>

        {/* Equipment */}
        <section style={{ marginBottom: "5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2.5rem" }}>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "2rem", fontWeight: 300, color: "#E8EFF5" }}>Equipo y proceso</h2>
            <div className="hr-sky" style={{ flex: 1 }} />
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1.5rem" }}>
            {equipo.map((e) => (
              <div key={e.nombre} style={{ padding: "2rem", background: "#0E1820", border: "1px solid rgba(123,196,226,0.08)" }}>
                <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{e.icon}</div>
                <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.2rem", fontWeight: 400, color: "#E8EFF5", marginBottom: "0.75rem" }}>{e.nombre}</h3>
                <p style={{ color: "rgba(232,239,245,0.5)", fontSize: "0.88rem", lineHeight: 1.7 }}>{e.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/trabajos" style={{ padding: "0.8rem 2rem", background: "linear-gradient(135deg, #2E6DA4, #1B3A5C)", color: "white", textDecoration: "none", fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid rgba(123,196,226,0.2)" }}>
            Ver trabajos
          </Link>
          <Link href="/contacto" style={{ padding: "0.8rem 2rem", border: "1px solid rgba(123,196,226,0.35)", color: "#7BC4E2", textDecoration: "none", fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
}
