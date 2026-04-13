import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Systemized Sales AI — The App Store for Your Sales Team",
    template: "%s | Systemized Sales AI",
  },
  description:
    "AI coaching, management, client health, revenue visibility, and onboarding systems for high-ticket sales teams. Start with one app, add the rest as your team grows.",
  keywords: [
    "AI call coaching",
    "sales operating system",
    "sales management software",
    "high-ticket sales",
    "sales coaching AI",
    "client health monitoring",
    "revenue visibility",
    "sales onboarding",
    "setter closer teams",
    "sales team management",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Systemized Sales AI",
    title: "Systemized Sales AI — The App Store for Your Sales Team",
    description:
      "AI coaching, management, client health, revenue visibility, and onboarding systems for high-ticket sales teams.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Systemized Sales AI",
    description:
      "The app store for your sales team. AI coaching, management, and revenue operating systems.",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large" as const,
    "max-video-preview": -1,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Serif+Display:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
