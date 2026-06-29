import type { Metadata } from "next";
import Link from "next/link";
import { trabajos } from "@/data/content";
import MediaEmbed from "@/components/ui/MediaEmbed";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Trabajos",
  description: `Portfolio de fotografía y video aéreo con dron en Buenos Aires. Proyectos para inmobiliarias y constructoras. ${siteConfig.name}.`,
};

const categoriaBadge: Record<string, { label: string; emoji: string; color: string }> = {
  inmobiliaria: { label: "Inmobiliaria", emoji: "🏠", color: "123,196,226" },
  construccion: { label: "Construcción", emoji: "🏗️", color: "251,191,36" },
  hoteleria:    { label: "Hotelería",    emoji: "🏨", color: "52,211,153" },
  evento:       { label: "Evento",       emoji: "🎉", color: "167,139,250" },
  paisajes:     { label: "Paisajes",     emoji: "🌅", color: "134,239,172" },
};

export default function TrabajosPage() {
  const sorted = [...trabajos].sort((a, b) => b.fecha.localeCompare(a.fecha));

  const renderCard = (t: (typeof trabajos)[0]) => (
    <article
      key={t.id}
      id={t.id}
      className="project-card"
      style={{
        background: "#0E1820",
        border: "1px solid rgba(123,196,226,0.08)",
        overflow: "hidden",
        scrollMarginTop: "80px",
      }}
    >
      {t.mediaUrl && t.mediaTipo && t.mediaTipo !== "none" ? (
        <MediaEmbed url={t.mediaUrl} tipo={t.mediaTipo} titulo={t.titulo} />
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
          {t.categoria === "inmobiliaria" ? "🏠" : t.categoria === "evento" ? "🎉" : "🏗️"}
        </div>
      )}
      <div style={{ padding: "1.75rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
          {(() => {
            const b = categoriaBadge[t.categoria] ?? { label: t.categoria, emoji: "", color: "123,196,226" };
            return (
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.35rem", padding: "0.2rem 0.6rem", background: `rgba(${b.color},0.12)`, border: `1px solid rgba(${b.color},0.3)`, color: `rgb(${b.color})`, fontSize: "0.7rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                <span>{b.emoji}</span>{b.label}
              </span>
            );
          })()}
          <span style={{ fontSize: "0.75rem", color: "rgba(232,239,245,0.3)" }}>
            {new Date(t.fecha + "-01").toLocaleDateString("es-AR", { month: "long", year: "numeric" })}
          </span>
        </div>
        <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.5rem", fontWeight: 400, color: "#E8EFF5", marginBottom: "0.4rem" }}>
          {t.titulo}
        </h3>
        <p style={{ color: "rgba(232,239,245,0.4)", fontSize: "0.82rem", marginBottom: "1rem" }}>{t.ubicacion}</p>
        <p style={{ color: "rgba(232,239,245,0.6)", fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>{t.descripcion}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {t.tags.map((tag) => (
            <span key={tag} style={{ padding: "0.25rem 0.75rem", background: "rgba(46,109,164,0.15)", border: "1px solid rgba(46,109,164,0.25)", color: "rgba(123,196,226,0.7)", fontSize: "0.72rem", letterSpacing: "0.08em" }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );

  return (
    <div style={{ paddingTop: "72px" }}>
      <div style={{ padding: "5rem 2rem 4rem", background: "linear-gradient(180deg, rgba(46,109,164,0.1) 0%, transparent 100%)", borderBottom: "1px solid rgba(123,196,226,0.06)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ color: "#7BC4E2", fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>Portfolio</p>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#E8EFF5", marginBottom: "1rem" }}>Trabajos</h1>
          <p style={{ color: "rgba(232,239,245,0.5)", fontSize: "1.05rem", maxWidth: "520px", lineHeight: 1.7 }}>
            Fotografía y video aéreo para inmobiliarias y constructoras en Buenos Aires.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
          {sorted.map(renderCard)}
        </div>

        <div style={{ padding: "3rem", background: "linear-gradient(135deg, #0E1820, #0F2236)", border: "1px solid rgba(123,196,226,0.1)", textAlign: "center" }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.5rem", color: "#E8EFF5", marginBottom: "1rem" }}>¿Querés sumar tu propiedad u obra?</p>
          <Link href="/contacto" style={{ padding: "0.8rem 2rem", border: "1px solid rgba(123,196,226,0.35)", color: "#7BC4E2", textDecoration: "none", fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
}
