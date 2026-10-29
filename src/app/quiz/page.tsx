import type { Metadata } from "next"
import GuideChrome from "@/components/GuideChrome"
import TeamOsQuiz from "@/components/TeamOsQuiz"
import { siteUrl } from "@/lib/site-data"

// Static /quiz. This segment wins over app/[slug], so the guide route never handles it.
const title = "Where is your sales system leaking?"
const description =
  "23 questions. About 6 minutes. You get a score across nine parts of your sales system, your top three leaks, the math on your own numbers, and fixes you can run this week."
const url = `${siteUrl}/quiz`

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Systemized Sales AI — One system for your whole sales team." }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/twitter-image"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${url}/#webpage`,
      name: title,
      description,
      url,
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Sales Team OS", item: siteUrl },
        { "@type": "ListItem", position: 2, name: title, item: url },
      ],
    },
  ],
}

export default function QuizPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GuideChrome>
        <TeamOsQuiz />
      </GuideChrome>
    </>
  )
}
