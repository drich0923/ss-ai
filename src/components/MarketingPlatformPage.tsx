import Link from "next/link"
import MarketingShell from "@/components/MarketingShell"
import { PlatformShowcase } from "@/components/ProductMockups"
import { ecosystemModules } from "@/lib/site-data"

export default function MarketingPlatformPage() {
  return (
    <MarketingShell>
      <section className="page-hero">
        <span className="eyebrow">Platform overview</span>
        <h1>One platform for the way your sales team runs.</h1>
        <p className="page-summary">
          Start with the app solving the biggest problem today, then add the rest as your stack matures.
        </p>
      </section>

      <PlatformShowcase />

      <section className="section">
        <div className="section-header">
          <span className="section-kicker">What the platform covers</span>
          <h2>Each product solves a specific problem. Together they create one operating system.</h2>
          <p>The products share client context, rep identity, and operating data.</p>
        </div>
        <div className="module-grid">
          {ecosystemModules.map(module => (
            <article key={module.slug} className="module-card">
              <div className="module-card-header">
                <span className="pill">{module.title}</span>
              </div>
              <p>{module.summary}</p>
              <Link href={`/products/${module.slug}`} className="inline-link">
                Open product page
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section highlight-band">
        <div className="two-column-grid">
          <article className="detail-card">
            <span className="section-kicker">Most teams start here</span>
            <h3>Fix call quality first.</h3>
            <p>AI Call Coaching is usually first because the pain is urgent and easy to prove.</p>
          </article>
          <article className="detail-card">
            <span className="section-kicker">Then add the next layer</span>
            <h3>Expand into management and account visibility.</h3>
            <p>Once the first workflow works, teams expand into management, account health, revenue, and onboarding.</p>
          </article>
        </div>
      </section>
    </MarketingShell>
  )
}
