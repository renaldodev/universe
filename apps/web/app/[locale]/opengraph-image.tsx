import { ImageResponse } from "next/og"

import { type Locale, locales, translations } from "@/lib/i18n"

export const alt = "Renaldo Mateus — Software Engineer"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params
  const locale = (
    locales.includes(rawLocale as Locale) ? rawLocale : "en"
  ) as Locale
  const t = translations[locale]

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        background: "#0d0d0c",
        color: "#eaeae4",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            width: 14,
            height: 14,
            borderRadius: "50%",
            background: "#7fc7e8",
            display: "flex",
          }}
        />
        <div style={{ fontSize: 22, letterSpacing: 2, color: "#8c8c86" }}>
          {locale === "pt"
            ? "DISPONÍVEL PARA NOVOS PROJETOS"
            : "AVAILABLE FOR NEW PROJECTS"}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ fontSize: 116, fontWeight: 700, display: "flex" }}>
          Renaldo Mateus
        </div>
        <div style={{ display: "flex", gap: 16, fontSize: 32 }}>
          <span style={{ color: "#8c8c86" }}>
            {t.roleLong}
            &nbsp;
          </span>
          <span style={{ color: "#7fc7e8" }}>{t.categories.systems}</span>
          <span style={{ color: "#8c8c86" }}>·</span>
          <span style={{ color: "#f2669b" }}>{t.categories.agents}</span>
          <span style={{ color: "#8c8c86" }}>·</span>
          <span style={{ color: "#b79af5" }}>{t.categories.craft}</span>
        </div>
      </div>

      <div style={{ fontSize: 24, color: "#5c5c57", display: "flex" }}>
        renaldo.dev
      </div>
    </div>,
    { ...size }
  )
}

export default Image
