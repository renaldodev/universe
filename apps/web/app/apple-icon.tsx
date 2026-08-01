import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"

function AppleIcon() {
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
        fontSize: 110,
        fontWeight: 700,
      }}
    >
      R
    </div>,
    { ...size }
  )
}

export default AppleIcon
