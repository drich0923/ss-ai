import type { Metadata } from "next"
import GuideArticle from "./GuideArticle"
import GuideChrome from "./GuideChrome"
import type { Guide } from "@/lib/guide-types"
import { siteUrl } from "@/lib/site-data"

export function guideMetadata(guide: Guide): Metadata {
  const url = `${siteUrl}${guide.path}`
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: url },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url,
      type: "article",
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Systemized Sales AI. The Sales Team OS." }],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: ["/twitter-image"],
    },
  }
}

export default function GuideView({ guide }: { guide: Guide }) {
  return (
    <GuideChrome>
      <GuideArticle guide={guide} />
    </GuideChrome>
  )
}
