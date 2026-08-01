import {
  Geist,
  JetBrains_Mono,
  Noto_Sans_Symbols,
  Space_Grotesk,
} from "next/font/google"

import "@workspace/ui/globals.css"
import { cn } from "@workspace/ui/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

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
