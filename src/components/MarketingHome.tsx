import Link from "next/link"
import MarketingShell from "@/components/MarketingShell"
import { ecosystemModules, productModules, siteStats } from "@/lib/site-data"

export default function MarketingHome() {
  const flagship = productModules[0]

  return (
    <MarketingShell>
      <section className="hero">
        <div className="hero-copy">
          <span className="eyebrow">Sales operating system for high-ticket teams</span>
          <h1>The app store for your sales team.</h1>
          <p className="hero-summary">
            Systemized Sales AI gives you one platform for AI Call Coaching, Manager OS, Client Health, Revenue Visibility,
            and Sales Onboarding. Start with the workflow costing you the most money now, then expand into the rest as your
            team grows.
          </p>
          <ul className="hero-value-list">
            <li>Replace random call reviews with a real coaching system.</li>
            <li>Give managers, operators, and leadership one connected operating layer.</li>
            <li>Keep client health, rep execution, and revenue ownership in the same system.</li>
          </ul>
          <div className="hero-actions">
            <a href="mailto:dylan.rich@systemizedsales.com?subject=Systemized%20Sales%20AI%20Demo" className="button button-primary">
              Request a walkthrough
            </a>
            <Link href="/products" className="button button-secondary">
              Explore the apps
            </Link>
          </div>
          <div className="hero-notes">
            <span>Setter teams</span>
            <span>Closer teams</span>
            <span>Agencies</span>
            <span>Portfolio operators</span>
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
      </section>

      <section className="section section-tight highlight-band">
        <div className="section-header">
          <span className="section-kicker">Explore the app store</span>
          <h2>Start with the app solving the most expensive problem in your sales operation.</h2>
          <p>
            Each app solves a specific operational bottleneck. Most teams start with one, prove value quickly, and then layer in the rest.
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

      <section className="section">
        <div className="section-header">
          <span className="section-kicker">Why teams start looking</span>
          <h2>The pain usually shows up in one department first. The real problem is that the operating system is fragmented.</h2>
          <p>
            Call recordings live in one tool, coaching lives in Slack, client health lives in someone&apos;s head, and revenue
            visibility lives in spreadsheets. That fragmentation is what slows leadership down.
          </p>
        </div>
        <div className="three-column-grid">
          <article className="detail-card">
            <span className="section-kicker">Coaching breaks first</span>
            <h3>Managers are coaching blind.</h3>
            <p>Only a fraction of calls get reviewed, weak conversations slip through, and reps repeat the same mistakes for weeks.</p>
          </article>
          <article className="detail-card">
            <span className="section-kicker">Visibility breaks next</span>
            <h3>Leadership cannot see what is actually drifting.</h3>
            <p>Account health, rep execution, and revenue follow-through live in different places, so every decision takes too much stitching.</p>
          </article>
          <article className="detail-card">
            <span className="section-kicker">Operations absorb the mess</span>
            <h3>Growth creates more exceptions than systems.</h3>
            <p>Onboarding, ownership, and team accountability get harder to maintain as more reps, managers, and brands get added.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-kicker">How teams typically buy</span>
          <h2>Start with one app. Expand into the rest once the first workflow is already working.</h2>
        </div>
        <div className="timeline-grid">
          <article className="timeline-card">
            <span className="timeline-step">01</span>
            <h3>Start with {flagship.name}</h3>
            <p>{flagship.heroSummary}</p>
          </article>
          <article className="timeline-card">
            <span className="timeline-step">02</span>
            <h3>Add Manager OS and Client Health</h3>
            <p>Turn call intelligence into a weekly operating rhythm and cleaner leadership visibility.</p>
          </article>
          <article className="timeline-card">
            <span className="timeline-step">03</span>
            <h3>Layer in revenue and onboarding systems</h3>
            <p>Connect deal ownership, collections, launch quality, and operational execution inside the same platform.</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <span className="section-kicker">What launch looks like</span>
          <h2>Fast enough to stand up quickly. Structured enough to become part of how the team runs.</h2>
        </div>
        <div className="two-column-grid">
          <article className="detail-card">
            <h3>What launch includes</h3>
            <ul className="bullet-list">
              <li>One workflow selected as the first system to roll out.</li>
              <li>Data connection, team mapping, and operating setup.</li>
              <li>Configuration aligned to your sales motion and manager structure.</li>
              <li>Sample QA, launch support, and first operating-cycle refinement.</li>
            </ul>
          </article>
          <article className="detail-card">
            <h3>What buyers are really getting</h3>
            <ul className="bullet-list">
              <li>A clearer system for how reps, managers, and operators work.</li>
              <li>Less time lost to random reviews, spreadsheet stitching, and reactive triage.</li>
              <li>A platform that can expand as the team adds more complexity.</li>
            </ul>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="cta-band">
          <div>
            <span className="section-kicker">Next step</span>
            <h2>See which app should be your first rollout.</h2>
            <p className="page-summary">
              We&apos;ll show you the platform, identify the workflow hurting revenue most right now, and map the cleanest
              starting point.
            </p>
          </div>
          <div className="hero-actions">
            <a href="mailto:dylan.rich@systemizedsales.com?subject=Systemized%20Sales%20AI%20Demo" className="button button-primary">
              Book a walkthrough
            </a>
            <Link href="/products" className="button button-secondary">
              Browse the apps
            </Link>
          </div>
        </div>
      </section>
    </MarketingShell>
  )
}
