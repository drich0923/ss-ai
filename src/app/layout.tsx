import type { Metadata } from "next"
import "./globals.css"

const siteUrl = "https://systemizedsales.ai"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Systemized Sales AI — The Sales Team OS",
    template: "%s | Systemized Sales AI",
  },
  description:
    "The Sales Team OS: every app you need to hire, ramp, track and pay a high-ticket sales team, connected to the tools you already use. Built and battle-tested inside our own agency.",
  authors: [{ name: "Dylan Rich" }, { name: "Jake Tacher" }],
  creator: "Systemized Sales",
  publisher: "Systemized Sales",
  icons: { icon: "/ss-logo.svg" },
  alternates: { canonical: siteUrl },
  keywords: [
    "sales team OS",
    "high-ticket sales team",
    "sales hiring app",
    "speed to lead",
    "setter EOD tracker",
    "commission tracker",
    "RevPhlo",
    "closer playbook",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Systemized Sales AI",
    url: siteUrl,
    title: "Systemized Sales AI — The Sales Team OS",
    description:
      "One system for your whole sales team: hiring, playbooks, setter tracking, RevPhlo numbers and commissions, all in one hub.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Systemized Sales AI — The Sales Team OS",
    description:
      "One system for your whole sales team: hiring, playbooks, setter tracking, RevPhlo numbers and commissions, all in one hub.",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large" as const,
    "max-video-preview": -1,
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Systemized Sales AI",
      url: siteUrl,
      parentOrganization: {
        "@type": "Organization",
        "@id": "https://www.systemizedsales.com/#organization",
        name: "Systemized Sales",
        url: "https://www.systemizedsales.com",
        founder: [
          { "@type": "Person", name: "Dylan Rich" },
          { "@type": "Person", name: "Jake Tacher" },
        ],
      },
      sibling: {
        "@type": "SoftwareApplication",
        name: "RevPhlo",
        url: "https://www.revphlo.com",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Systemized Sales AI",
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=DM+Serif+Display:ital@0;1&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
