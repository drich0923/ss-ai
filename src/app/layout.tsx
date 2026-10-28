import type { Metadata } from "next"
import "./globals.css"
import { siteUrl } from "@/lib/site-data"

const socialImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Systemized Sales AI — One system for your whole sales team.",
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sales Team Operating System for High-Ticket Teams",
    template: "%s | Sales Team OS",
  },
  description:
    "The Sales Team OS: the exact system our agency runs its sales teams on. Your team uses it to hire, ramp, track and pay. We install it and train you on how to use it.",
  authors: [{ name: "Dylan Rich" }, { name: "Jake Tacher" }],
  creator: "Systemized Sales",
  publisher: "Systemized Sales",
  icons: {
    icon: "/favicon.svg",
    apple: "/apple-touch-icon.svg",
  },
  alternates: { canonical: siteUrl },
  keywords: [
    "sales team OS",
    "high-ticket sales team",
    "sales team system",
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
    title: "Sales Team Operating System for High-Ticket Teams",
    description:
      "The exact system our agency runs its sales teams on. Your team uses it to hire, ramp, track and pay.",
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sales Team Operating System for High-Ticket Teams",
    description:
      "The exact system our agency runs its sales teams on. Your team uses it to hire, ramp, track and pay.",
    images: [{ ...socialImage, url: "/twitter-image" }],
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Sales Team OS",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "RevPhlo",
              serviceType: "Part of the Sales Team OS",
              url: `${siteUrl}/products/revphlo`,
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: "Systemized Sales AI",
      url: siteUrl,
      description: "The Sales Team OS: the system high-ticket teams use to hire, ramp, track, and pay their own reps.",
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
