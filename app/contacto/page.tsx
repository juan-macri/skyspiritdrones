"use client";
import { useState } from "react";
import { siteConfig } from "@/lib/config";

export default function ContactoPage() {
  const [form, setForm] = useState({ nombre: "", email: "", tipo: "", mensaje: "" });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Genera link de mailto con los datos del form
  const handleSubmit = () => {
    if (!form.nombre || !form.email || !form.mensaje) return;
    const subject = encodeURIComponent(`Consulta de ${form.nombre} — ${form.tipo || "General"}`);
    const body = encodeURIComponent(`Nombre: ${form.nombre}\nEmail: ${form.email}\nTipo de proyecto: ${form.tipo}\n\n${form.mensaje}`);
    window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`, "_blank");
    setEnviado(true);
  };

  const inputStyle = {
    width: "100%",
    padding: "0.9rem 1rem",
    background: "#0E1820",
    border: "1px solid rgba(123,196,226,0.15)",
    color: "#E8EFF5",
    fontSize: "0.95rem",
    outline: "none",
    transition: "border-color 0.2s",
    fontFamily: "'Montserrat', sans-serif",
  };

  const labelStyle = {
    display: "block",
    color: "rgba(232,239,245,0.5)",
    fontSize: "0.75rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    marginBottom: "0.5rem",
  };

  return (
    <div style={{ paddingTop: "72px" }}>
      <div style={{ padding: "5rem 2rem 4rem", background: "linear-gradient(180deg, rgba(27,58,92,0.15) 0%, transparent 100%)", borderBottom: "1px solid rgba(123,196,226,0.06)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ color: "#7BC4E2", fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>Hablemos</p>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#E8EFF5", marginBottom: "1rem" }}>Contacto</h1>
          <p style={{ color: "rgba(232,239,245,0.5)", fontSize: "1.05rem", maxWidth: "480px", lineHeight: 1.7 }}>
            Contame sobre tu proyecto. Te respondo en menos de 24 horas hábiles.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "5rem", alignItems: "start" }}>
          {/* Contact info */}
          <div>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.6rem", fontWeight: 300, color: "#E8EFF5", marginBottom: "2rem" }}>
              Vías de contacto
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              <div>
                <p style={{ color: "#7BC4E2", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.4rem" }}>WhatsApp</p>
                <a
                  href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#25D366", textDecoration: "none", fontSize: "1rem" }}
                >
                  {siteConfig.whatsapp}
                </a>
                <p style={{ color: "rgba(232,239,245,0.35)", fontSize: "0.82rem", marginTop: "0.3rem" }}>Respuesta rápida</p>
              </div>

              <div>
                <p style={{ color: "#7BC4E2", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Email</p>
                <a href={`mailto:${siteConfig.email}`} style={{ color: "rgba(232,239,245,0.75)", textDecoration: "none", fontSize: "1rem" }}>
                  {siteConfig.email}
                </a>
              </div>

              <div>
                <p style={{ color: "#7BC4E2", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Zona</p>
                <p style={{ color: "rgba(232,239,245,0.65)", fontSize: "0.95rem", lineHeight: 1.7 }}>
                  CABA · Gran Buenos Aires<br />Provincia de Buenos Aires
                </p>
              </div>

              <div>
                <p style={{ color: "#7BC4E2", fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "0.4rem" }}>Instagram</p>
                <a
                  href={`https://instagram.com/${siteConfig.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgba(232,239,245,0.65)", textDecoration: "none", fontSize: "0.95rem" }}
                >
                  @{siteConfig.instagram}
                </a>
              </div>
            </div>

            {/* Quick WhatsApp */}
            <a
              href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(siteConfig.whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: "3rem",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "1rem 1.5rem",
                background: "rgba(37, 211, 102, 0.08)",
                border: "1px solid rgba(37,211,102,0.2)",
                color: "#25D366",
                textDecoration: "none",
                fontSize: "0.88rem",
                letterSpacing: "0.08em",
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Escribir por WhatsApp
            </a>
          </div>

          {/* Form */}
          <div>
            {enviado ? (
              <div style={{ padding: "3rem", background: "rgba(46,109,164,0.08)", border: "1px solid rgba(123,196,226,0.2)", textAlign: "center" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1.5rem" }}>✅</div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.5rem", color: "#E8EFF5", marginBottom: "0.75rem" }}>
                  ¡Se abrió tu cliente de email!
                </p>
                <p style={{ color: "rgba(232,239,245,0.5)", fontSize: "0.9rem", lineHeight: 1.7 }}>
                  Enviá el email que se pre-completó con tus datos. También podés escribirme por WhatsApp para una respuesta más rápida.
                </p>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                  <div>
                    <label style={labelStyle}>Nombre *</label>
                    <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Tu nombre" style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="tu@email.com" style={inputStyle} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Tipo de proyecto</label>
                  <select name="tipo" value={form.tipo} onChange={handleChange} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="">Seleccioná una opción</option>
                    <option value="Fotografía inmobiliaria">Fotografía inmobiliaria</option>
                    <option value="Video inmobiliaria">Video inmobiliaria</option>
                    <option value="Seguimiento de obra">Seguimiento de obra</option>
                    <option value="Evento">Evento</option>
                    <option value="Otro">Otro</option>
                  </select>
                </div>

                <div>
                  <label style={labelStyle}>Mensaje *</label>
                  <textarea
                    name="mensaje"
                    value={form.mensaje}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Contame sobre tu proyecto: ubicación, qué necesitás, cuándo..."
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!form.nombre || !form.email || !form.mensaje}
                  style={{
                    padding: "1rem 2.5rem",
                    background: form.nombre && form.email && form.mensaje ? "linear-gradient(135deg, #2E6DA4, #1B3A5C)" : "rgba(46,109,164,0.2)",
                    border: "1px solid rgba(123,196,226,0.2)",
                    color: form.nombre && form.email && form.mensaje ? "white" : "rgba(232,239,245,0.3)",
                    cursor: form.nombre && form.email && form.mensaje ? "pointer" : "not-allowed",
                    fontSize: "0.85rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    transition: "opacity 0.2s",
                    fontFamily: "'Montserrat', sans-serif",
                    alignSelf: "flex-start",
                  }}
                >
                  Enviar consulta
                </button>
                <p style={{ color: "rgba(232,239,245,0.3)", fontSize: "0.78rem" }}>
                  * Al enviar se abrirá tu cliente de email con los datos pre-completados.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 3rem !important; } .form-row { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
