"use client";
import { useState } from "react";
import Link from "next/link";
import { faqItems } from "@/data/content";

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div style={{ paddingTop: "72px" }}>
      <div style={{ padding: "5rem 2rem 4rem", background: "linear-gradient(180deg, rgba(27,58,92,0.15) 0%, transparent 100%)", borderBottom: "1px solid rgba(123,196,226,0.06)" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <p style={{ color: "#7BC4E2", fontSize: "0.75rem", letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "1rem" }}>Información</p>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 300, color: "#E8EFF5", marginBottom: "1rem" }}>
            Preguntas frecuentes
          </h1>
          <p style={{ color: "rgba(232,239,245,0.5)", fontSize: "1.05rem", maxWidth: "520px", lineHeight: 1.7 }}>
            Todo lo que necesitás saber antes de contratar una sesión de fotografía o video aéreo.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 2rem" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {faqItems.map((item, i) => (
            <div
              key={i}
              style={{
                borderBottom: "1px solid rgba(123,196,226,0.08)",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "1.75rem 0",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "1.5rem",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "1.2rem",
                    fontWeight: 400,
                    color: open === i ? "#7BC4E2" : "#E8EFF5",
                    lineHeight: 1.4,
                    transition: "color 0.2s",
                  }}
                >
                  {item.pregunta}
                </span>
                <span
                  style={{
                    color: "#7BC4E2",
                    fontSize: "1.5rem",
                    flexShrink: 0,
                    transition: "transform 0.3s ease",
                    transform: open === i ? "rotate(45deg)" : "rotate(0)",
                    lineHeight: 1,
                  }}
                >
                  +
                </span>
              </button>

              <div
                style={{
                  overflow: "hidden",
                  maxHeight: open === i ? "400px" : "0",
                  transition: "max-height 0.4s ease",
                }}
              >
                <p
                  style={{
                    color: "rgba(232,239,245,0.6)",
                    fontSize: "0.95rem",
                    lineHeight: 1.8,
                    paddingBottom: "1.75rem",
                  }}
                >
                  {item.respuesta}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* More questions */}
        <div
          style={{
            marginTop: "4rem",
            padding: "2.5rem",
            background: "linear-gradient(135deg, #0E1820, #0F2236)",
            border: "1px solid rgba(123,196,226,0.1)",
            textAlign: "center",
          }}
        >
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.4rem", color: "#E8EFF5", marginBottom: "0.75rem" }}>
            ¿No encontraste lo que buscabas?
          </p>
          <p style={{ color: "rgba(232,239,245,0.45)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
            Escribime directamente, te respondo rápido.
          </p>
          <Link
            href="/contacto"
            style={{
              padding: "0.8rem 2rem",
              border: "1px solid rgba(123,196,226,0.35)",
              color: "#7BC4E2",
              textDecoration: "none",
              fontSize: "0.82rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Consultar
          </Link>
        </div>
      </div>
    </div>
  );
}
