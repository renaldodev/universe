import { notFound } from "next/navigation"

import { PortfolioContent } from "@/components/portfolio-content"
import { type Locale, locales } from "@/lib/i18n"

function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params

  if (!locales.includes(locale as Locale)) {
    notFound()
  }

  return <PortfolioContent locale={locale as Locale} />
}

export default Page
export { generateStaticParams }
