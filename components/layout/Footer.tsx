"use client";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, navLinks } from "@/lib/config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#080D12",
        borderTop: "1px solid rgba(123,196,226,0.08)",
        padding: "4rem 2rem 2rem",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "3rem",
            marginBottom: "3rem",
          }}
        >
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", marginBottom: "1rem" }}>
              <Image src="/logo.png" alt="SkySpirit Drones" width={36} height={36} style={{ objectFit: "contain" }} />
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "1.2rem", fontWeight: 600, letterSpacing: "0.05em", color: "#E8EFF5" }}>
                SKYSPIRIT
              </span>
            </Link>
            <p style={{ color: "rgba(232,239,245,0.45)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: "240px" }}>
              Fotografía y video aéreo profesional en Buenos Aires.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 style={{ color: "#7BC4E2", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              Secciones
            </h3>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ color: "rgba(232,239,245,0.55)", fontSize: "0.88rem", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#7BC4E2")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(232,239,245,0.55)")}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: "#7BC4E2", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              Contacto
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <a
                href={`mailto:${siteConfig.email}`}
                style={{ color: "rgba(232,239,245,0.55)", fontSize: "0.88rem", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#7BC4E2")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(232,239,245,0.55)")}
              >
                {siteConfig.email}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(232,239,245,0.55)", fontSize: "0.88rem", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#25D366")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(232,239,245,0.55)")}
              >
                WhatsApp
              </a>
              <a
                href={`https://instagram.com/${siteConfig.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "rgba(232,239,245,0.55)", fontSize: "0.88rem", textDecoration: "none" }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#7BC4E2")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(232,239,245,0.55)")}
              >
                @{siteConfig.instagram}
              </a>
            </div>
          </div>

          {/* Zone */}
          <div>
            <h3 style={{ color: "#7BC4E2", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              Zona de operación
            </h3>
            <p style={{ color: "rgba(232,239,245,0.45)", fontSize: "0.85rem", lineHeight: 1.8 }}>
              CABA<br />
              Gran Buenos Aires<br />
              Provincia de Buenos Aires
            </p>
          </div>
        </div>

        <div className="hr-sky" style={{ marginBottom: "1.5rem" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <p style={{ color: "rgba(232,239,245,0.25)", fontSize: "0.78rem" }}>
            © {year} {siteConfig.name}. Buenos Aires, Argentina.
          </p>
          <p style={{ color: "rgba(232,239,245,0.2)", fontSize: "0.78rem" }}>
            Fotografía aérea · Video drone · Buenos Aires
          </p>
        </div>
      </div>
    </footer>
  );
}
