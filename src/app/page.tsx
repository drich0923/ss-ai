import type { Metadata } from "next"
import SSLanding from "@/components/SSLanding"
import { faqs, siteUrl } from "@/lib/site-data"

const title = "Sales Team Operating System for High-Ticket Teams"
const description =
  "The Sales Team OS is the system our agency runs its sales teams on. Your team uses it to hire, ramp, track, and pay. We install it, show your team how to use it, and support you in Slack."

export const metadata: Metadata = {
  title: { absolute: `${title} | Sales Team OS` },
  description,
  alternates: { canonical: siteUrl },
  openGraph: {
    title,
    description,
    url: siteUrl,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Systemized Sales AI — One system for your whole sales team." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image"],
  },
}

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${siteUrl}/#service`,
      name: "Sales Team OS",
      serviceType: "Sales team operating system",
      description,
      url: siteUrl,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: "Worldwide",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: faqs.map(item => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
    },
  ],
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }} />
      <SSLanding />
    </>
  )
}
