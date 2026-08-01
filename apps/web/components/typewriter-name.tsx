"use client"

import * as React from "react"

function TypewriterName({
  text,
  className,
}: {
  text: string
  className?: string
}) {
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (count >= text.length) {
      return
    }

    const timeout = setTimeout(() => setCount((c) => c + 1), 90)

    return () => clearTimeout(timeout)
  }, [count, text.length])

  return (
    <h1 aria-label={text} className={className}>
      <span aria-hidden="true">
        {text.slice(0, count)}
        <span className="animate-[caret-blink_1s_steps(2)_infinite]">|</span>
      </span>
    </h1>
  )
}

export { TypewriterName }
