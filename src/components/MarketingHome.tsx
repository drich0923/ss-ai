import Link from "next/link"
import MarketingShell from "@/components/MarketingShell"
import { ecosystemModules, productModules, siteStats } from "@/lib/site-data"

export default function MarketingHome() {
  const flagship = productModules[0]

  return (
    <MarketingShell>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Built for high-ticket setter and closer teams</span>
          <h1>The operating system for sales teams that cannot afford blind spots.</h1>
          <p className="hero-summary">
            Systemized Sales AI gives leadership one ecosystem to review calls, coach reps, monitor client health, track revenue ownership, and standardize execution across every brand.
          </p>
          <div className="hero-actions">
            <Link href={`/products/${flagship.slug}`} className="button button-primary">
              Explore {flagship.name}
            </Link>
            <Link href="/platform" className="button button-secondary">
              View platform
            </Link>
          </div>
          <div className="hero-proof-grid">
            {siteStats.map(stat => (
              <article key={stat.label} className="metric-card">
                <div className="metric-value">{stat.value}</div>
                <div className="metric-label">{stat.label}</div>
              </article>
            ))}
          </div>
        </div>

        <div className="hero-panel">
          <div className="hero-panel-card">
            <span className="panel-label">Flagship offer</span>
            <h2>{flagship.name}</h2>
            <p>{flagship.heroSummary}</p>
            <ul className="bullet-list">
              <li>AI grades every call</li>
              <li>Managers review only the calls that matter</li>
              <li>Client-specific scorecards and focus skills</li>
            </ul>
            <div className="mini-roadmap">
              <div>
                <span>Land</span>
                <strong>AI Call Coaching</strong>
              </div>
              <div>
                <span>Expand</span>
                <strong>Manager OS + Client Health</strong>
              </div>
              <div>
                <span>Operationalize</span>
                <strong>Revenue + Onboarding Systems</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-kicker">Why the ecosystem matters</span>
          <h2>Sell one wedge. Deliver an operating system.</h2>
          <p>
            The market buys urgent products, not abstract ecosystems. Systemized Sales AI lets you lead with one painful problem, prove value quickly, and then expand into the rest of the operating layer.
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
                View product
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section highlight-band">
        <div className="section-header">
          <span className="section-kicker">Go-to-market shape</span>
          <h2>Lead with call coaching. Expand into management and account visibility.</h2>
          <p>
            The flagship product is your easiest sale because the pain is immediate and the implementation is already productized. The rest of the platform becomes the expansion path once data and trust are established.
          </p>
        </div>
        <div className="timeline-grid">
          <article className="timeline-card">
            <span className="timeline-step">01</span>
            <h3>Land</h3>
            <p>AI Call Coaching solves the sharpest pain: managers coaching blind while call quality leaks revenue.</p>
          </article>
          <article className="timeline-card">
            <span className="timeline-step">02</span>
            <h3>Expand</h3>
            <p>Manager OS and Client Health turn coaching data into leadership operating rhythm and account visibility.</p>
          </article>
          <article className="timeline-card">
            <span className="timeline-step">03</span>
            <h3>Standardize</h3>
            <p>Revenue Visibility and Sales Onboarding Systems make ownership and execution cleaner across the business.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-kicker">Productized fulfillment</span>
          <h2>Fulfill the first sale with the codebase you already have.</h2>
        </div>
        <div className="two-column-grid">
          <article className="detail-card">
            <h3>What you sell first</h3>
            <ul className="bullet-list">
              <li>One transcript source at launch</li>
              <li>One client workspace</li>
              <li>One default rubric per rep type</li>
              <li>Up to five custom focus skills</li>
              <li>Backfill plus manager training</li>
            </ul>
          </article>
          <article className="detail-card">
            <h3>Why fulfillment stays light</h3>
            <ul className="bullet-list">
              <li>You already have ingestion, scoring, review, rankings, and skill configuration in the product.</li>
              <li>The delivery work becomes mapping reps, calibrating rubrics, and training the manager.</li>
              <li>You avoid custom implementation drag by productizing the first workflow tightly.</li>
            </ul>
          </article>
        </div>
      </section>
    </MarketingShell>
  )
}
