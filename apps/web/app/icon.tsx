import { ImageResponse } from "next/og"

export const size = { width: 512, height: 512 }
export const contentType = "image/png"

function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#0d0d0c",
        color: "#eaeae4",
        fontFamily: "sans-serif",
        fontSize: 320,
        fontWeight: 700,
      }}
    >
      R
    </div>,
    { ...size }
  )
}

export default Icon
