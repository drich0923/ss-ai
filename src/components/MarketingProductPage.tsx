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
      <section className="page-hero">
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
      </section>

      <section className="section">
        <div className="three-column-grid">
          <article className="detail-card">
            <span className="section-kicker">Audience</span>
            <h3>{product.audience}</h3>
          </article>
          <article className="detail-card">
            <span className="section-kicker">Pricing</span>
            <h3>{product.pricing}</h3>
          </article>
          <article className="detail-card">
            <span className="section-kicker">Why it lands</span>
            <h3>{product.leadValue}</h3>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="two-column-grid">
          <article className="detail-card">
            <span className="section-kicker">Pain points</span>
            <h3>What this product fixes</h3>
            <ul className="bullet-list">
              {product.pains.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="detail-card">
            <span className="section-kicker">Capabilities</span>
            <h3>What gets delivered</h3>
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
            <span className="section-kicker">Fulfillment</span>
            <h3>How you can deliver this cleanly</h3>
            <ul className="bullet-list">
              {product.fulfillment.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="detail-card">
            <span className="section-kicker">Outcomes</span>
            <h3>What the buyer actually gets</h3>
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
          <span className="section-kicker">Implementation sequence</span>
          <h2>Productized rollout, not bespoke consulting.</h2>
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
          <span className="section-kicker">Expansion path</span>
          <h2>Related products in the ecosystem</h2>
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
