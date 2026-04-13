import Link from "next/link"
import MarketingShell from "@/components/MarketingShell"
import { productModules } from "@/lib/site-data"

export default function MarketingProductsIndex() {
  return (
    <MarketingShell>
      <section className="page-hero">
        <span className="eyebrow">Product pages</span>
        <h1>Focused offers for one pain, one buyer, and one budget line.</h1>
        <p className="page-summary">
          The brand can sell the ecosystem. The product pages should sell a specific problem worth solving now.
        </p>
      </section>

      <section className="section">
        <div className="module-grid">
          {productModules.map(product => (
            <article key={product.slug} className="module-card product-card">
              <span className="pill">{product.eyebrow}</span>
              <h2>{product.name}</h2>
              <p>{product.heroSummary}</p>
              <div className="product-meta">
                <span>{product.audience}</span>
                <span>{product.pricing}</span>
              </div>
              <Link href={`/products/${product.slug}`} className="button button-primary">
                View product
              </Link>
            </article>
          ))}
        </div>
      </section>
    </MarketingShell>
  )
}
