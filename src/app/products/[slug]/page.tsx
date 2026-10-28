import { notFound } from "next/navigation"
import type { Metadata } from "next"
import ProductPageLayout from "@/components/ProductPageLayout"
import { productExtras } from "@/lib/product-extras"
import { getProductModule, productModules, productSeoTitle, siteUrl } from "@/lib/site-data"

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
    return { title: "Product not found" }
  }

  const title = productSeoTitle(product.slug, product.name)
  const url = `${siteUrl}/products/${product.slug}`
  return {
    title,
    description: product.heroSummary,
    alternates: { canonical: url },
    openGraph: {
      title,
      description: product.heroSummary,
      url,
      images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${product.name}, part of the Sales Team OS` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: product.heroSummary,
      images: ["/twitter-image"],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params
  const product = getProductModule(slug)

  if (!product) notFound()

  const url = `${siteUrl}/products/${product.slug}`
  const extra = productExtras[product.slug]
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: product.name,
        serviceType: "Sales Team OS",
        description: product.heroSummary,
        url,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: "Worldwide",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Sales Team OS", item: siteUrl },
          { "@type": "ListItem", position: 2, name: product.name, item: url },
        ],
      },
      ...(extra
        ? [
            {
              "@type": "FAQPage",
              mainEntity: extra.faqs.map(item => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
          ]
        : []),
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ProductPageLayout product={product} />
    </>
  )
}
