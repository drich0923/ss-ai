import { notFound } from "next/navigation"
import type { Metadata } from "next"
import GuideView, { guideMetadata } from "@/components/GuideView"
import { getGuide } from "@/lib/guides"

const slug = "commission-software-vs-sales-team-os"

export async function generateMetadata(): Promise<Metadata> {
  const guide = getGuide(slug)
  if (!guide) return { title: "Guide" }
  return guideMetadata(guide)
}

export default function CompareCommissionPage() {
  const guide = getGuide(slug)
  if (!guide) notFound()
  return <GuideView guide={guide} />
}
