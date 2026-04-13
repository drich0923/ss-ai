import Link from "next/link"
import MarketingShell from "@/components/MarketingShell"
import { ecosystemModules } from "@/lib/site-data"

export default function MarketingPlatformPage() {
  return (
    <MarketingShell>
      <section className="page-hero">
        <span className="eyebrow">Platform overview</span>
        <h1>One sales operating system. Multiple productized wedges.</h1>
        <p className="page-summary">
          Systemized Sales AI is the commercial operating layer behind coaching, management, account health, revenue ownership, and onboarding discipline for high-ticket teams.
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-kicker">Platform logic</span>
          <h2>The ecosystem is the expansion story, not the first confusing sale.</h2>
          <p>
            Prospects buy urgent outcomes. Operators stay for the ecosystem once they realize each module shares the same client context, rep identity, and management data.
          </p>
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
            <span className="section-kicker">Buyers feel this first</span>
            <h3>“Our managers are coaching blind.”</h3>
            <p>
              That is why AI Call Coaching is the front door. It is the easiest way to prove the value of the operating system with hard evidence.
            </p>
          </article>
          <article className="detail-card">
            <span className="section-kicker">Then they want this</span>
            <h3>“Now show me the bigger picture.”</h3>
            <p>
              Once call intelligence is trusted, the ecosystem story gets stronger: manager intervention, client health, revenue visibility, and operational consistency.
            </p>
          </article>
        </div>
      </section>
    </MarketingShell>
  )
}
