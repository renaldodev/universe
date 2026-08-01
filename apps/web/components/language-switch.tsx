"use client"

import Link from "next/link"

import type { Locale } from "@/lib/i18n"

const COOKIE_NAME = "NEXT_LOCALE"

function persistLocale(locale: Locale) {
  document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=31536000; samesite=lax`
}

function LanguageSwitch({ locale }: { locale: Locale }) {
  return (
    <div className="flex items-center gap-1.5 font-mono text-xs">
      <Link
        href="/pt"
        onClick={() => persistLocale("pt")}
        aria-current={locale === "pt"}
        className={
          locale === "pt"
            ? "font-bold text-port-text-primary tracking-[1px]"
            : "text-port-text-tertiary tracking-[1px]"
        }
      >
        PT
      </Link>
      <span className="text-port-text-tertiary">/</span>
      <Link
        href="/en"
        onClick={() => persistLocale("en")}
        aria-current={locale === "en"}
        className={
          locale === "en"
            ? "font-bold text-port-text-primary tracking-[1px]"
            : "text-port-text-tertiary tracking-[1px]"
        }
      >
        EN
      </Link>
    </div>
  )
}

export { LanguageSwitch }
