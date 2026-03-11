"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
        background: scrolled ? "rgba(10, 15, 20, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(123, 196, 226, 0.1)" : "1px solid transparent",
      }}
    >
      <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
          <Image src="/logo.png" alt="SkySpirit Drones" width={40} height={40} style={{ objectFit: "contain" }} />
          <span
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "1.3rem",
              fontWeight: 600,
              letterSpacing: "0.05em",
              color: "#E8EFF5",
            }}
          >
            SKYSPIRIT
          </span>
        </Link>

        {/* Desktop nav */}
        <ul
          style={{
            display: "flex",
            gap: "2.5rem",
            listStyle: "none",
            alignItems: "center",
          }}
          className="hidden-mobile"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                style={{
                  color: pathname === link.href ? "#7BC4E2" : "rgba(232,239,245,0.7)",
                  textDecoration: "none",
                  fontSize: "0.85rem",
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  transition: "color 0.2s ease",
                  borderBottom: pathname === link.href ? "1px solid #7BC4E2" : "1px solid transparent",
                  paddingBottom: "2px",
                }}
                onMouseEnter={(e) => {
                  if (pathname !== link.href)
                    (e.target as HTMLElement).style.color = "#7BC4E2";
                }}
                onMouseLeave={(e) => {
                  if (pathname !== link.href)
                    (e.target as HTMLElement).style.color = "rgba(232,239,245,0.7)";
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contacto"
              style={{
                padding: "0.5rem 1.25rem",
                border: "1px solid #2E6DA4",
                borderRadius: "2px",
                color: "#7BC4E2",
                fontSize: "0.8rem",
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "rgba(46,109,164,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "transparent";
              }}
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
          }}
          id="mobile-menu-btn"
          aria-label="Menú"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "1px",
                background: "#7BC4E2",
                transition: "transform 0.3s ease, opacity 0.3s ease",
                transform:
                  menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(4px, 4px)"
                      : i === 2
                      ? "rotate(-45deg) translate(4px, -4px)"
                      : "scaleX(0)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(10, 15, 20, 0.97)",
            padding: "1.5rem 2rem 2rem",
            borderTop: "1px solid rgba(123,196,226,0.1)",
          }}
        >
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    color: pathname === link.href ? "#7BC4E2" : "rgba(232,239,245,0.8)",
                    textDecoration: "none",
                    fontSize: "1rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          #mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
