import Link from "next/link"
import MarketingShell from "@/components/MarketingShell"
import { productModules } from "@/lib/site-data"

export default function MarketingProductsIndex() {
  return (
    <MarketingShell>
      <section className="page-hero">
        <span className="eyebrow">App store</span>
        <h1>Explore the apps inside the platform.</h1>
        <p className="page-summary">
          Each app solves a specific operating problem. Start with the biggest drag first.
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
