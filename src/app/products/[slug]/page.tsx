import { notFound } from "next/navigation"
import type { Metadata } from "next"
import MarketingProductPage from "@/components/MarketingProductPage"
import { getProductModule, productModules } from "@/lib/site-data"

type ProductPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return productModules.map(product => ({ slug: product.slug }))
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params
  const product = getProductModule(slug)
  if (!product) {
    return { title: "Product not found | Systemized Sales AI" }
  }

  return {
    title: `${product.name} | Systemized Sales AI`,
    description: product.heroSummary,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductModule(slug)

  if (!product) notFound()

  return <MarketingProductPage product={product} />
}
