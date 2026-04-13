import Link from "next/link"
import MarketingShell from "@/components/MarketingShell"
import { ecosystemModules, productModules, siteStats } from "@/lib/site-data"

export default function MarketingHome() {
  const flagship = productModules[0]

  return (
    <MarketingShell>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">For high-ticket sales teams</span>
          <h1>Review every sales call, catch weak conversations early, and coach the reps that need it most.</h1>
          <p className="hero-summary">
            Systemized Sales AI turns transcripts and sales activity into a coaching system for setters, closers, and managers. Your team gets flagged calls, scorecards, and a cleaner operating rhythm instead of random call reviews and gut-feel coaching.
          </p>
          <div className="hero-actions">
            <a href="mailto:dylan.rich@systemizedsales.com?subject=Systemized%20Sales%20AI%20Demo" className="button button-primary">
              Request demo
            </a>
            <Link href={`/products/${flagship.slug}`} className="button button-secondary">
              Explore {flagship.name}
            </Link>
          </div>
          <div className="hero-notes">
            <span>AI Call Coaching</span>
            <span>Manager OS</span>
            <span>Client Health</span>
            <span>Revenue Visibility</span>
            <span>Sales Onboarding</span>
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
            <span className="panel-label">Where teams start</span>
            <h2>{flagship.name}</h2>
            <p>{flagship.heroSummary}</p>
            <ul className="bullet-list">
              <li>Stop relying on random call sampling.</li>
              <li>See which reps, accounts, and call types need attention.</li>
              <li>Give managers one place to coach, track, and follow up.</li>
            </ul>
            <div className="mini-roadmap">
              <div>
                <span>First win</span>
                <strong>Fix call quality and coaching visibility</strong>
              </div>
              <div>
                <span>Next layer</span>
                <strong>Add management rhythm and account health</strong>
              </div>
              <div>
                <span>Full platform</span>
                <strong>Connect revenue visibility and onboarding systems</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-kicker">What the platform does</span>
          <h2>One place to improve call quality, manager execution, client visibility, and revenue follow-through.</h2>
          <p>
            Most teams already have recordings, dashboards, and spreadsheets. What they do not have is an operating layer that turns those inputs into clear action for managers and leadership.
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
          <span className="section-kicker">How teams usually buy</span>
          <h2>Start with the problem hurting revenue now. Add the rest once the first workflow is working.</h2>
          <p>
            For most teams, that first win is AI Call Coaching. It is urgent, measurable, and easy to prove quickly. Once managers trust that workflow, the rest of the platform becomes easier to roll out.
          </p>
        </div>
        <div className="timeline-grid">
          <article className="timeline-card">
            <span className="timeline-step">01</span>
            <h3>Improve call quality</h3>
            <p>Score calls, catch failures quickly, and coach the reps who need help most.</p>
          </article>
          <article className="timeline-card">
            <span className="timeline-step">02</span>
            <h3>Strengthen management</h3>
            <p>Turn rep trends and flagged calls into a weekly operating rhythm for leaders.</p>
          </article>
          <article className="timeline-card">
            <span className="timeline-step">03</span>
            <h3>Expand visibility</h3>
            <p>Layer in client health, revenue ownership, and onboarding once the first workflow is already working.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-kicker">What launch looks like</span>
          <h2>Fast to stand up. Structured enough to stick.</h2>
        </div>
        <div className="two-column-grid">
          <article className="detail-card">
            <h3>What launch includes</h3>
            <ul className="bullet-list">
              <li>One transcript source connected at launch</li>
              <li>Rep mapping by team and role</li>
              <li>Default scorecard plus custom focus areas</li>
              <li>Backfill of recent calls and sample QA</li>
            </ul>
          </article>
          <article className="detail-card">
            <h3>What changes for your team</h3>
            <ul className="bullet-list">
              <li>Managers stop hunting randomly for calls to review</li>
              <li>Leadership gets a cleaner view of what is slipping</li>
              <li>Coaching becomes more consistent across reps and brands</li>
            </ul>
          </article>
        </div>
      </section>
    </MarketingShell>
  )
}
