"use client";
import { useEffect, useRef } from "react";
import type { MediaTipo } from "@/data/content";

interface MediaEmbedProps {
  url: string;
  tipo: MediaTipo;
  titulo: string;
}

function InstagramEmbed({ url }: { url: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cargar el script de Instagram si no está
    if (!document.getElementById("instagram-embed-script")) {
      const script = document.createElement("script");
      script.id = "instagram-embed-script";
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // Si el script ya estaba, procesar manualmente
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    }
  }, [url]);

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        justifyContent: "center",
        background: "#0E1820",
        padding: "1rem 0",
        minHeight: "400px",
      }}
    >
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: "#0E1820",
          border: "1px solid rgba(123,196,226,0.12)",
          borderRadius: "0",
          margin: "0",
          maxWidth: "400px",
          width: "100%",
          minWidth: "280px",
        }}
      />
    </div>
  );
}

export default function MediaEmbed({ url, tipo, titulo }: MediaEmbedProps) {
  if (tipo === "instagram") {
    return <InstagramEmbed url={url} />;
  }

  // YouTube o Vimeo — iframe estándar
  return (
    <div className="video-embed">
      <iframe
        src={url}
        title={titulo}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
