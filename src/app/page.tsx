import type { Metadata } from "next"
import SSLanding from "@/components/SSLanding"
import { faqs, siteUrl } from "@/lib/site-data"

const title = "RevPhlo — The Sales Team OS"
const description =
  "A six-figure month can hide a sales problem. RevPhlo connects sales tracking, workflows, playbooks and training to help your team find missed sales and close more of them."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: siteUrl },
  openGraph: {
    title,
    description,
    url: siteUrl,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "RevPhlo — A six-figure month can hide a sales problem." }],
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
      name: "RevPhlo — The Sales Team OS",
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
