import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { PortfolioContent } from "@/components/portfolio-content"
import { type Locale, locales, siteUrl, translations } from "@/lib/i18n"

function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale: rawLocale } = await params

  if (!locales.includes(rawLocale as Locale)) {
    return {}
  }

  const locale = rawLocale as Locale
  const { seo } = translations[locale]
  const pageUrl = `${siteUrl}/${locale}`

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: pageUrl,
      languages: {
        en: `${siteUrl}/en`,
        pt: `${siteUrl}/pt`,
        "x-default": `${siteUrl}/en`,
      },
    },
    openGraph: {
      title: `Renaldo Mateus — ${seo.title}`,
      description: seo.description,
      url: pageUrl,
      siteName: "Renaldo Mateus",
      locale: locale === "pt" ? "pt_PT" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Renaldo Mateus — ${seo.title}`,
      description: seo.description,
    },
  }
}

async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params

  if (!locales.includes(rawLocale as Locale)) {
    notFound()
  }

  const locale = rawLocale as Locale
  const { seo } = translations[locale]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Renaldo Mateus",
    url: siteUrl,
    jobTitle: seo.jobTitle,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Porto",
      addressCountry: "PT",
    },
    email: "mailto:renaldodev@gmail.com",
    sameAs: [
      "https://linkedin.com/in/renaldodev",
      "https://github.com/renaldodev",
    ],
    knowsAbout: [
      "Backend Engineering",
      "AI Agents",
      "Systems Design",
      "Frontend Development",
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data must be inlined as a script tag; content is server-generated, not user input
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioContent locale={locale} />
    </>
  )
}

export default Page
export { generateStaticParams, generateMetadata }
