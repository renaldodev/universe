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
    setCount(0)

    const interval = setInterval(() => {
      setCount((c) => {
        if (c + 1 >= text.length) {
          clearInterval(interval)
          return text.length
        }
        return c + 1
      })
    }, 90)

    return () => clearInterval(interval)
  }, [text])

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
