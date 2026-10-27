import { ogAlt, ogSize, renderOgImage } from "@/lib/og-card"

export const alt = ogAlt
export const size = ogSize
export const contentType = "image/png"
export const runtime = "nodejs"

export default function TwitterImage() {
  return renderOgImage()
}
