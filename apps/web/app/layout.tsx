import type { Metadata, Viewport } from "next"
import {
  Geist,
  JetBrains_Mono,
  Noto_Sans_Symbols,
  Space_Grotesk,
} from "next/font/google"

import "@workspace/ui/globals.css"
import { cn } from "@workspace/ui/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"
import { siteUrl } from "@/lib/i18n"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Renaldo Mateus",
    template: "%s · Renaldo Mateus",
  },
  applicationName: "Renaldo Mateus",
  authors: [{ name: "Renaldo Mateus", url: siteUrl }],
  creator: "Renaldo Mateus",
  publisher: "Renaldo Mateus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0d0c" },
  ],
  colorScheme: "light dark",
}

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
})

const notoSansSymbols = Noto_Sans_Symbols({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-symbols",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontSans.variable,
        "font-mono",
        jetbrainsMono.variable,
        spaceGrotesk.variable,
        notoSansSymbols.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
