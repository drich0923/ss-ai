import type { Metadata } from "next"
import { DM_Sans, DM_Serif_Display, JetBrains_Mono, Space_Grotesk } from "next/font/google"
import CookieConsent from "@/components/CookieConsent"
import "./globals.css"
import { siteUrl } from "@/lib/site-data"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  variable: "--font-dm-sans",
  axes: ["opsz"],
})

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-dm-serif",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jetbrains-mono",
})

const fontVars = `${dmSans.variable} ${dmSerif.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`

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
    <html lang="en" className={fontVars}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
