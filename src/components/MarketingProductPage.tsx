import Link from "next/link"
import MarketingShell from "@/components/MarketingShell"
import { productModules, type ProductModule } from "@/lib/site-data"

type MarketingProductPageProps = {
  product: ProductModule
}

export default function MarketingProductPage({ product }: MarketingProductPageProps) {
  const relatedProducts = productModules.filter(candidate => candidate.slug !== product.slug).slice(0, 3)

  return (
    <MarketingShell>
      <section className="product-hero">
        <div className="product-hero-copy">
          <span className="eyebrow">{product.eyebrow}</span>
          <h1>{product.heroTitle}</h1>
          <p className="page-summary">{product.heroSummary}</p>
          <div className="hero-actions">
            <a className="button button-primary" href="mailto:dylan.rich@systemizedsales.com?subject=Systemized%20Sales%20AI%20Demo">
              Request demo
            </a>
            <Link className="button button-secondary" href="/platform">
              View platform
            </Link>
          </div>
        </div>

        <aside className="product-hero-panel">
          <div className="product-fact">
            <span className="section-kicker">Best for</span>
            <strong>{product.audience}</strong>
          </div>
          <div className="product-fact">
            <span className="section-kicker">Typical investment</span>
            <strong>{product.pricing}</strong>
          </div>
          <div className="product-fact">
            <span className="section-kicker">Core promise</span>
            <p>{product.leadValue}</p>
          </div>
        </aside>
      </section>

      <section className="section">
        <div className="two-column-grid">
          <article className="detail-card">
            <span className="section-kicker">Pain points</span>
            <h3>What this solves</h3>
            <ul className="bullet-list">
              {product.pains.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="detail-card">
            <span className="section-kicker">Capabilities</span>
            <h3>What buyers get</h3>
            <ul className="bullet-list">
              {product.capabilities.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section highlight-band">
        <div className="two-column-grid">
          <article className="detail-card">
            <span className="section-kicker">Implementation</span>
            <h3>What launch includes</h3>
            <ul className="bullet-list">
              {product.fulfillment.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="detail-card">
            <span className="section-kicker">Outcomes</span>
            <h3>What changes after rollout</h3>
            <ul className="bullet-list">
              {product.outcomes.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-kicker">Rollout sequence</span>
          <h2>A clean launch instead of a custom project that drags on forever.</h2>
        </div>
        <div className="timeline-grid">
          {product.implementation.map((step, index) => (
            <article key={step} className="timeline-card">
              <span className="timeline-step">{String(index + 1).padStart(2, "0")}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-kicker">Explore next</span>
          <h2>Other products in the platform</h2>
        </div>
        <div className="module-grid">
          {relatedProducts.map(candidate => (
            <article key={candidate.slug} className="module-card">
              <span className="pill">{candidate.name}</span>
              <p>{candidate.heroSummary}</p>
              <Link href={`/products/${candidate.slug}`} className="inline-link">
                Explore {candidate.name}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </MarketingShell>
  )
}
