import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

import { type Locale, locales } from "@/lib/i18n"

const COOKIE_NAME = "NEXT_LOCALE"
const DEFAULT_LOCALE: Locale = "en"

function resolveLocale(request: NextRequest): Locale {
  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value

  if (cookieLocale && locales.includes(cookieLocale as Locale)) {
    return cookieLocale as Locale
  }

  const acceptLanguage = request.headers.get("accept-language") ?? ""

  if (acceptLanguage.toLowerCase().includes("pt")) {
    return "pt"
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
