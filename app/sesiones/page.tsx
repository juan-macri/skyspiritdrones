import type { Metadata } from "next";
import Link from "next/link";
import { sesiones } from "@/data/content";
import MediaEmbed from "@/components/ui/MediaEmbed";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Sesiones",
  description: `Videos y fotografía aérea de paisajes, monumentos y ventos. Capturas personales con dron. ${siteConfig.name}.`,
};

export default function SesionesPage() {
  return (
    <div style={{ paddingTop: "72px" }}>
      {/* Header */}
      <div
        style={{
          padding: "5rem 2rem 4rem",
          background: "linear-gradient(180deg, rgba(27,58,92,0.2) 0%, transparent 100%)",
          borderBottom: "1px solid rgba(123,196,226,0.06)",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ color: "#7BC4E2", fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>
            Exploraciones
          </p>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#E8EFF5", marginBottom: "1rem" }}>
            Sesiones
          </h1>
          <p style={{ color: "rgba(232,239,245,0.5)", fontSize: "1.05rem", maxWidth: "560px", lineHeight: 1.7 }}>
            Sin cliente, sin encargo — solo el dron, la luz y el lugar.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 2rem" }}>
        {sesiones.length === 0 ? (
          <div style={{ textAlign: "center", padding: "6rem 2rem", color: "rgba(232,239,245,0.3)" }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.5rem" }}>Próximamente</p>
            <p style={{ fontSize: "0.9rem", marginTop: "0.75rem" }}>Los primeros videos están en edición.</p>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(360px, 1fr))", gap: "2rem" }}>
            {sesiones.map((s) => (
              <article
                key={s.id}
                id={s.id}
                className="project-card"
                style={{
                  background: "#0E1820",
                  border: "1px solid rgba(123,196,226,0.08)",
                  overflow: "hidden",
                }}
              >
                {s.mediaUrl && s.mediaTipo && s.mediaTipo !== "none" ? (
                  <MediaEmbed url={s.mediaUrl} tipo={s.mediaTipo} titulo={s.titulo} />
                ) : (
                  <div
                    style={{
                      height: "220px",
                      background: "linear-gradient(135deg, #0F2236, #1B3A5C)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "3.5rem",
                    }}
                  >
                    🌅
                  </div>
                )}

                <div style={{ padding: "1.75rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                    <span style={{ fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#7BC4E2" }}>
                      {s.ubicacion}
                    </span>
                    <span style={{ fontSize: "0.75rem", color: "rgba(232,239,245,0.3)" }}>
                      {new Date(s.fecha + "-01").toLocaleDateString("es-AR", { month: "long", year: "numeric" })}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.5rem", fontWeight: 400, color: "#E8EFF5", marginBottom: "0.75rem" }}>
                    {s.titulo}
                  </h3>
                  <p style={{ color: "rgba(232,239,245,0.6)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                    {s.descripcion}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {s.tags.map((tag) => (
                      <span key={tag} style={{ padding: "0.25rem 0.75rem", background: "rgba(46,109,164,0.12)", border: "1px solid rgba(46,109,164,0.2)", color: "rgba(123,196,226,0.6)", fontSize: "0.72rem", letterSpacing: "0.08em" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Note about adding videos */}
        <div
          style={{
            marginTop: "4rem",
            padding: "2rem",
            background: "rgba(46,109,164,0.06)",
            border: "1px solid rgba(46,109,164,0.15)",
            display: "flex",
            gap: "1rem",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "1.25rem", flexShrink: 0 }}>💡</span>
          <div>
            <p style={{ color: "rgba(232,239,245,0.6)", fontSize: "0.88rem", lineHeight: 1.7 }}>
              Para agregar nuevas sesiones, editá el archivo <code style={{ color: "#7BC4E2", background: "rgba(123,196,226,0.1)", padding: "0.1rem 0.4rem" }}>data/content.ts</code> y sumá entradas al array <code style={{ color: "#7BC4E2", background: "rgba(123,196,226,0.1)", padding: "0.1rem 0.4rem" }}>sesiones</code> con la URL de embed de YouTube o Vimeo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
