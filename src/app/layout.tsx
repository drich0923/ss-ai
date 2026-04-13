import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Systemized Sales AI",
  description: "AI coaching, management, and sales operating systems for high-ticket sales teams.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
