import { notFound } from "next/navigation"
import type { Metadata } from "next"
import GuideView, { guideMetadata } from "@/components/GuideView"
import { getGuide, guides } from "@/lib/guides"

type GuidePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return guides.filter(guide => guide.path === `/${guide.slug}`).map(guide => ({ slug: guide.slug }))
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide || guide.path !== `/${slug}`) return { title: "Guide" }
  return guideMetadata(guide)
}

export default async function GuideSlugPage({ params }: GuidePageProps) {
  const { slug } = await params
  const guide = getGuide(slug)
  if (!guide || guide.path !== `/${slug}`) notFound()
  return <GuideView guide={guide} />
}
