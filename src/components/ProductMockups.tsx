type ProductMockupProps = {
  slug: string
}

function MockWindow({
  app,
  label,
  children,
}: {
  app: string
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="mock-window">
      <div className="mock-window-top">
        <div className="mock-window-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="mock-window-labels">
          <span className="mock-window-app">{app}</span>
          <span className="mock-window-context">{label}</span>
        </div>
      </div>
      <div className="mock-window-body">{children}</div>
    </div>
  )
}

function HubMockup() {
  const apps = [
    { title: "AI Call Coaching", accent: "blue" },
    { title: "Manager OS", accent: "green" },
    { title: "Client Health", accent: "gold" },
    { title: "Revenue Visibility", accent: "orange" },
    { title: "Sales Onboarding", accent: "green" },
    { title: "Commission Admin", accent: "blue" },
  ] as const

  return (
    <MockWindow app="Systemized Sales AI" label="Platform hub">
      <div className="hub-mockup">
        <div className="hub-mockup-header">
          <div>
            <div className="mock-kicker">All systems operational</div>
            <strong>Welcome back</strong>
          </div>
          <div className="mock-chip">Client Atlas</div>
        </div>
        <div className="hub-mockup-grid">
          {apps.map(app => (
            <article key={app.title} className={`hub-app-card hub-app-card-${app.accent}`}>
              <div className="hub-app-card-top">
                <span className="hub-app-icon" />
                <span className="mock-status">Live</span>
              </div>
              <strong>{app.title}</strong>
              <p>Launch</p>
            </article>
          ))}
        </div>
      </div>
    </MockWindow>
  )
}

function CallCoachingMockup() {
  return (
    <MockWindow app="AI Call Coaching" label="Client Atlas">
      <div className="coaching-mockup">
        <div className="coaching-mockup-top">
          <div className="mock-metric-card">
            <span>Calls</span>
            <strong>194</strong>
          </div>
          <div className="mock-metric-card">
            <span>Reviewed</span>
            <strong>162</strong>
          </div>
          <div className="mock-metric-card">
            <span>Avg score</span>
            <strong>68.5%</strong>
          </div>
          <div className="mock-metric-card">
            <span>Coaching queue</span>
            <strong>162</strong>
          </div>
        </div>
        <div className="coaching-mockup-main">
          <div className="mock-panel">
            <div className="mock-panel-header">
              <strong>Review Queue</strong>
              <span className="mock-chip">Needs coaching</span>
            </div>
            <div className="mock-call-card">
              <div className="mock-call-card-top">
                <strong>Prospect A. discovery call</strong>
                <span className="mock-score">83%</span>
              </div>
              <p>Rep J. Carter • closer</p>
              <div className="mock-tag-row">
                <span>Weak opener</span>
                <span>Weak urgency</span>
                <span>No clear next step</span>
              </div>
            </div>
            <div className="mock-call-card mock-call-card-muted">
              <div className="mock-call-card-top">
                <strong>Lead 024 strategy call</strong>
                <span className="mock-score">71%</span>
              </div>
              <p>Rep N. Blake • closer</p>
            </div>
          </div>
          <div className="mock-panel">
            <div className="mock-panel-header">
              <strong>AI Review</strong>
              <span className="mock-chip mock-chip-blue">Escalated</span>
            </div>
            <div className="mock-review-stack">
              <div className="mock-review-row">
                <span>Opener &amp; frame</span>
                <strong>30</strong>
              </div>
              <div className="mock-review-row">
                <span>Discovery depth</span>
                <strong>35</strong>
              </div>
              <div className="mock-review-row">
                <span>Close strength</span>
                <strong>20</strong>
              </div>
              <div className="mock-review-row">
                <span>Next step clarity</span>
                <strong>25</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MockWindow>
  )
}

function ManagerOSMockup() {
  return (
    <MockWindow app="Manager OS" label="Weekly coaching rhythm">
      <div className="manager-mockup">
        <div className="mock-panel">
          <div className="mock-panel-header">
            <strong>Rep Priority Board</strong>
            <span className="mock-chip">This week</span>
          </div>
          <div className="mock-list">
            <div className="mock-list-row">
              <span>Rep A. Cole</span>
              <strong>Discovery drifting</strong>
            </div>
            <div className="mock-list-row">
              <span>Rep J. Carter</span>
              <strong>Close rate slipping</strong>
            </div>
            <div className="mock-list-row">
              <span>Rep N. Blake</span>
              <strong>Urgency coaching needed</strong>
            </div>
          </div>
        </div>
        <div className="manager-mockup-bottom">
          <div className="mock-mini-stat">
            <span>Reps at risk</span>
            <strong>3</strong>
          </div>
          <div className="mock-mini-stat">
            <span>Open assignments</span>
            <strong>12</strong>
          </div>
          <div className="mock-mini-stat">
            <span>Resolved this week</span>
            <strong>9</strong>
          </div>
        </div>
      </div>
    </MockWindow>
  )
}

function ClientHealthMockup() {
  return (
    <MockWindow app="Client Health" label="Portfolio view">
      <div className="health-mockup">
        <div className="health-score-grid">
          <div className="mock-mini-stat">
            <span>Client Atlas</span>
            <strong>Stable</strong>
          </div>
          <div className="mock-mini-stat">
            <span>Client North</span>
            <strong>At risk</strong>
          </div>
          <div className="mock-mini-stat">
            <span>Client Summit</span>
            <strong>Recovering</strong>
          </div>
        </div>
        <div className="mock-panel">
          <div className="mock-panel-header">
            <strong>Risk signals</strong>
            <span className="mock-chip">Executive view</span>
          </div>
          <div className="mock-review-stack">
            <div className="mock-review-row">
              <span>Call quality drift</span>
              <strong>High</strong>
            </div>
            <div className="mock-review-row">
              <span>Delivery slippage</span>
              <strong>Medium</strong>
            </div>
            <div className="mock-review-row">
              <span>Revenue exposure</span>
              <strong>High</strong>
            </div>
          </div>
        </div>
      </div>
    </MockWindow>
  )
}

function RevenueVisibilityMockup() {
  return (
    <MockWindow app="Revenue Visibility" label="Collections and ownership">
      <div className="revenue-mockup">
        <div className="mock-panel">
          <div className="mock-panel-header">
            <strong>Open plans</strong>
            <span className="mock-chip">Client Atlas</span>
          </div>
          <div className="mock-table">
            <div className="mock-table-row mock-table-head">
              <span>Deal</span>
              <span>Closer</span>
              <span>Status</span>
            </div>
            <div className="mock-table-row">
              <span>Lead 018</span>
              <span>Rep J. Carter</span>
              <span>On track</span>
            </div>
            <div className="mock-table-row">
              <span>Lead 027</span>
              <span>Unassigned</span>
              <span>Past due</span>
            </div>
            <div className="mock-table-row">
              <span>Lead 041</span>
              <span>Rep N. Blake</span>
              <span>Follow up</span>
            </div>
          </div>
        </div>
      </div>
    </MockWindow>
  )
}

function SalesOnboardingMockup() {
  return (
    <MockWindow app="Sales Onboarding" label="Launch workflow">
      <div className="onboarding-mockup">
        <div className="mock-kanban">
          <div className="mock-kanban-column">
            <span className="mock-kicker">Backlog</span>
            <div className="mock-kanban-card">Kickoff form review</div>
            <div className="mock-kanban-card">Slack channel setup</div>
          </div>
          <div className="mock-kanban-column">
            <span className="mock-kicker">In progress</span>
            <div className="mock-kanban-card">Ops validation call</div>
            <div className="mock-kanban-card">CRM buildout</div>
          </div>
          <div className="mock-kanban-column">
            <span className="mock-kicker">Complete</span>
            <div className="mock-kanban-card">Forms submitted</div>
            <div className="mock-kanban-card">Sales team onboarded</div>
          </div>
        </div>
      </div>
    </MockWindow>
  )
}

export function PlatformShowcase() {
  return (
    <section className="section section-tight">
      <div className="section-header visual-section-header">
        <span className="section-kicker">Product visuals</span>
        <h2>See the platform before you book the walkthrough.</h2>
        <p>These are anonymized product previews built from the live workflows inside the system.</p>
      </div>
      <div className="visual-showcase-grid">
        <div className="visual-showcase-feature">
          <CallCoachingMockup />
        </div>
        <div className="visual-showcase-stack">
          <HubMockup />
          <ManagerOSMockup />
        </div>
      </div>
    </section>
  )
}

export function ProductMockup({ slug }: ProductMockupProps) {
  if (slug === "ai-call-coaching") return <CallCoachingMockup />
  if (slug === "manager-os") return <ManagerOSMockup />
  if (slug === "client-health") return <ClientHealthMockup />
  if (slug === "revenue-visibility") return <RevenueVisibilityMockup />
  if (slug === "sales-onboarding") return <SalesOnboardingMockup />

  return <HubMockup />
}
