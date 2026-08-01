import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { type Locale, locales } from "@/lib/i18n"

const COOKIE_NAME = "NEXT_LOCALE"
const DEFAULT_LOCALE: Locale = "en"

function parseAcceptLanguage(header: string): string[] {
  return header
    .split(",")
    .map((part) => {
      const [tag, qPart] = part.trim().split(";q=")
      const quality = qPart ? Number.parseFloat(qPart) : 1
      return { tag: tag?.trim().toLowerCase() ?? "", quality }
    })
    .filter((entry) => entry.tag.length > 0)
    .sort((a, b) => b.quality - a.quality)
    .map((entry) => entry.tag)
}

function resolveLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value

  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale
  }

  const acceptLanguage = request.headers.get("accept-language") ?? ""
  const preferredTags = parseAcceptLanguage(acceptLanguage)

  for (const tag of preferredTags) {
    const primarySubtag = tag.split("-")[0]
    const match = locales.find((locale) => locale === primarySubtag)

    if (match) {
      return match
    }
  }

  return DEFAULT_LOCALE
}

function proxy(request: NextRequest) {
  if (request.nextUrl.pathname !== "/") {
    return NextResponse.next()
  }

  const locale = resolveLocale(request)
  const url = request.nextUrl.clone()
  url.pathname = `/${locale}`

  return NextResponse.redirect(url)
}

export default proxy

export const config = {
  matcher: "/",
}
