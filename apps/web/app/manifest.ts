import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Renaldo Mateus — Software Engineer",
    short_name: "Renaldo Mateus",
    description:
      "Backend-leaning software engineer working on systems and AI agents.",
    start_url: "/en",
    display: "standalone",
    background_color: "#0d0d0c",
    theme_color: "#0d0d0c",
    icons: [
      {
        src: "/icon",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
