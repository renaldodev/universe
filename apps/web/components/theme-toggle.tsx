"use client"

import { MoonIcon, SunIcon } from "@phosphor-icons/react"
import { useTheme } from "next-themes"
import * as React from "react"

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex items-center gap-2 text-port-text-primary"
    >
      {mounted && resolvedTheme === "light" ? (
        <SunIcon size={16} weight="regular" />
      ) : (
        <MoonIcon size={16} weight="regular" />
      )}
    </button>
  )
}

export { ThemeToggle }
