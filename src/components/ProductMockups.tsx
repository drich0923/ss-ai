"use client"

import { T } from "@/lib/design-tokens"

type ProductMockupProps = { slug: string }

const mock = {
  window: {
    border: `1px solid ${T.border}`,
    borderRadius: 16,
    background: T.darkCard,
    overflow: "hidden" as const,
    boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
  },
  windowTop: {
    display: "flex" as const,
    alignItems: "center" as const,
    justifyContent: "space-between" as const,
    gap: 12,
    padding: "10px 14px",
    borderBottom: `1px solid rgba(255,255,255,0.08)`,
    background: "rgba(255,255,255,0.02)",
  },
  dots: { display: "flex" as const, gap: 5 },
  dot: { width: 8, height: 8, borderRadius: "50%", background: "rgba(255,255,255,0.14)" },
  labels: {
    display: "flex" as const, gap: 10, alignItems: "center" as const,
    fontSize: 12, color: "rgba(255,255,255,0.5)",
  },
  app: { fontWeight: 700, color: "#fff" },
  body: { padding: 14 },
  chip: {
    display: "inline-flex" as const, alignItems: "center" as const,
    padding: "4px 10px", borderRadius: 100,
    border: "1px solid rgba(255,255,255,0.12)",
    background: "rgba(255,255,255,0.04)",
    color: "rgba(255,255,255,0.6)", fontSize: 11, fontWeight: 700,
    letterSpacing: "0.06em", textTransform: "uppercase" as const,
  },
  chipBlue: {
    color: "#9ec1ff",
    background: "rgba(79,140,255,0.16)",
    border: "1px solid rgba(79,140,255,0.2)",
  },
  kicker: {
    color: T.green, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase" as const,
  },
  panel: {
    display: "grid" as const, gap: 12, padding: 14,
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 14, background: "rgba(255,255,255,0.02)",
  },
  panelHeader: {
    display: "flex" as const, alignItems: "center" as const,
    justifyContent: "space-between" as const, gap: 10,
  },
  panelTitle: { fontSize: 15, fontWeight: 700, color: "#fff", margin: 0 },
  metricCard: {
    display: "grid" as const, gap: 4, padding: 12,
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 14, background: "rgba(255,255,255,0.02)",
  },
  metricLabel: { color: "rgba(255,255,255,0.5)", fontSize: 12 },
  metricValue: { fontSize: 22, fontWeight: 700, color: "#fff", lineHeight: 1 },
  row: {
    display: "grid" as const, gridTemplateColumns: "1fr auto", gap: 10,
    alignItems: "center" as const, padding: "10px 12px",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 12, background: "rgba(255,255,255,0.02)",
  },
  rowLabel: { color: "rgba(255,255,255,0.5)", fontSize: 13 },
  rowValue: { fontWeight: 700, color: "#fff", fontSize: 14 },
  muted: { color: "rgba(255,255,255,0.5)", fontSize: 13 },
  callCard: {
    display: "grid" as const, gap: 8, padding: 12,
    border: "1px solid rgba(79,140,255,0.28)",
    borderRadius: 14,
    background: "linear-gradient(180deg, rgba(79,140,255,0.12), rgba(255,255,255,0.02))",
  },
  callCardMuted: {
    borderColor: "rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.02)",
  },
  callTop: {
    display: "flex" as const, alignItems: "center" as const,
    justifyContent: "space-between" as const, gap: 10,
  },
  score: { color: "#ffbb3c", fontSize: 16, fontWeight: 700 },
  tagRow: { display: "flex" as const, flexWrap: "wrap" as const, gap: 6 },
  tag: {
    display: "inline-flex" as const, alignItems: "center" as const,
    padding: "3px 8px", borderRadius: 100,
    border: "1px solid rgba(255,187,60,0.2)",
    color: "#ffbb3c", fontSize: 11,
  },
  kanbanCol: {
    display: "grid" as const, gap: 10, padding: 12,
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: 14, background: "rgba(255,255,255,0.02)",
  },
  kanbanCard: {
    padding: 10, borderRadius: 12,
    border: "1px solid rgba(255,255,255,0.08)",
    background: "rgba(255,255,255,0.03)",
    color: "rgba(255,255,255,0.7)", fontSize: 13,
  },
  tableHead: {
    color: "rgba(255,255,255,0.6)", fontSize: 11,
    letterSpacing: "0.12em", textTransform: "uppercase" as const,
  },
}

function MockWindow({ app, label, children }: { app: string; label: string; children: React.ReactNode }) {
  return (
    <div style={mock.window}>
      <div style={mock.windowTop}>
        <div style={mock.dots}>
          <span style={mock.dot} />
          <span style={mock.dot} />
          <span style={mock.dot} />
        </div>
        <div style={mock.labels}>
          <span style={mock.app}>{app}</span>
          <span>{label}</span>
        </div>
      </div>
      <div style={mock.body}>{children}</div>
    </div>
  )
}

function HubMockup() {
  const apps = [
    { title: "AI Call Coaching", color: "#8cb2ff" },
    { title: "Manager OS", color: T.green },
    { title: "Commission Tracker", color: "#a78bfa" },
    { title: "Setter EOD", color: "#f472b6" },
    { title: "Client Health", color: "#f4c24a" },
    { title: "Revenue Visibility", color: "#ff8f4d" },
    { title: "Owner Radar", color: "#EF4444" },
    { title: "Rep Onboarding", color: "#38bdf8" },
    { title: "Closer Playbook", color: "#818cf8" },
    { title: "QC Dashboard", color: "#fb923c" },
    { title: "Sales Onboarding", color: T.green },
    { title: "More coming", color: "rgba(255,255,255,0.2)" },
  ] as const

  return (
    <MockWindow app="Systemized Sales AI" label="Platform hub">
      <div style={{ display: "grid", gap: 14 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={mock.kicker}>All systems operational</div>
            <strong style={{ color: "#fff", fontSize: 16 }}>Welcome back</strong>
          </div>
          <span style={mock.chip}>Client Atlas</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8 }}>
          {apps.map((a) => (
            <div key={a.title} style={{ ...mock.metricCard, minHeight: 64, color: a.color, padding: 8 }}>
              <span style={{ width: 20, height: 20, borderRadius: 7, border: `1px solid ${a.color}`, opacity: 0.9, display: "block" }} />
              <strong style={{ fontSize: 11, color: "#fff", lineHeight: 1.2 }}>{a.title}</strong>
            </div>
          ))}
        </div>
      </div>
    </MockWindow>
  )
}

function CallCoachingMockup() {
  return (
    <MockWindow app="AI Call Coaching" label="Client Atlas">
      <div style={{ display: "grid", gap: 14 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {[
            { label: "Calls", val: "194" },
            { label: "Reviewed", val: "162" },
            { label: "Avg score", val: "68.5%" },
            { label: "Coaching queue", val: "162" },
          ].map((m) => (
            <div key={m.label} style={mock.metricCard}>
              <span style={mock.metricLabel}>{m.label}</span>
              <strong style={mock.metricValue}>{m.val}</strong>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 14 }}>
          <div style={mock.panel}>
            <div style={mock.panelHeader}>
              <strong style={mock.panelTitle}>Review Queue</strong>
              <span style={mock.chip}>Needs coaching</span>
            </div>
            <div style={mock.callCard}>
              <div style={mock.callTop}>
                <strong style={{ color: "#fff", fontSize: 14 }}>Prospect A. discovery call</strong>
                <span style={mock.score}>83%</span>
              </div>
              <p style={mock.muted}>Rep J. Carter &bull; closer</p>
              <div style={mock.tagRow}>
                <span style={mock.tag}>Weak opener</span>
                <span style={mock.tag}>Weak urgency</span>
                <span style={mock.tag}>No clear next step</span>
              </div>
            </div>
            <div style={{ ...mock.callCard, ...mock.callCardMuted }}>
              <div style={mock.callTop}>
                <strong style={{ color: "#fff", fontSize: 14 }}>Lead 024 strategy call</strong>
                <span style={mock.score}>71%</span>
              </div>
              <p style={mock.muted}>Rep N. Blake &bull; closer</p>
            </div>
          </div>
          <div style={mock.panel}>
            <div style={mock.panelHeader}>
              <strong style={mock.panelTitle}>AI Review</strong>
              <span style={{ ...mock.chip, ...mock.chipBlue }}>Escalated</span>
            </div>
            <div style={{ display: "grid", gap: 8 }}>
              {[
                { label: "Opener & frame", val: "30" },
                { label: "Discovery depth", val: "35" },
                { label: "Close strength", val: "20" },
                { label: "Next step clarity", val: "25" },
              ].map((r) => (
                <div key={r.label} style={mock.row}>
                  <span style={mock.rowLabel}>{r.label}</span>
                  <strong style={mock.rowValue}>{r.val}</strong>
                </div>
              ))}
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
      <div style={{ display: "grid", gap: 14 }}>
        <div style={mock.panel}>
          <div style={mock.panelHeader}>
            <strong style={mock.panelTitle}>Rep Priority Board</strong>
            <span style={mock.chip}>This week</span>
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            {[
              { name: "Rep A. Cole", issue: "Discovery drifting" },
              { name: "Rep J. Carter", issue: "Close rate slipping" },
              { name: "Rep N. Blake", issue: "Urgency coaching needed" },
            ].map((r) => (
              <div key={r.name} style={mock.row}>
                <span style={mock.rowLabel}>{r.name}</span>
                <strong style={mock.rowValue}>{r.issue}</strong>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          {[
            { label: "Reps at risk", val: "3" },
            { label: "Open assignments", val: "12" },
            { label: "Resolved this week", val: "9" },
          ].map((s) => (
            <div key={s.label} style={mock.metricCard}>
              <span style={mock.metricLabel}>{s.label}</span>
              <strong style={mock.metricValue}>{s.val}</strong>
            </div>
          ))}
        </div>
      </div>
    </MockWindow>
  )
}

function ClientHealthMockup() {
  return (
    <MockWindow app="Client Health" label="Portfolio view">
      <div style={{ display: "grid", gap: 14 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          {[
            { name: "Client Atlas", status: "Stable" },
            { name: "Client North", status: "At risk" },
            { name: "Client Summit", status: "Recovering" },
          ].map((c) => (
            <div key={c.name} style={mock.metricCard}>
              <span style={mock.metricLabel}>{c.name}</span>
              <strong style={mock.metricValue}>{c.status}</strong>
            </div>
          ))}
        </div>
        <div style={mock.panel}>
          <div style={mock.panelHeader}>
            <strong style={mock.panelTitle}>Risk signals</strong>
            <span style={mock.chip}>Executive view</span>
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            {[
              { label: "Call quality drift", val: "High" },
              { label: "Delivery slippage", val: "Medium" },
              { label: "Revenue exposure", val: "High" },
            ].map((r) => (
              <div key={r.label} style={mock.row}>
                <span style={mock.rowLabel}>{r.label}</span>
                <strong style={mock.rowValue}>{r.val}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockWindow>
  )
}

function RevenueVisibilityMockup() {
  return (
    <MockWindow app="Revenue Visibility" label="Collections and ownership">
      <div style={{ display: "grid", gap: 14 }}>
        <div style={mock.panel}>
          <div style={mock.panelHeader}>
            <strong style={mock.panelTitle}>Open plans</strong>
            <span style={mock.chip}>Client Atlas</span>
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <div style={{ ...mock.row, gridTemplateColumns: "1.1fr 1fr 0.8fr" }}>
              <span style={mock.tableHead}>Deal</span>
              <span style={mock.tableHead}>Closer</span>
              <span style={mock.tableHead}>Status</span>
            </div>
            {[
              { deal: "Lead 018", closer: "Rep J. Carter", status: "On track" },
              { deal: "Lead 027", closer: "Unassigned", status: "Past due" },
              { deal: "Lead 041", closer: "Rep N. Blake", status: "Follow up" },
            ].map((r) => (
              <div key={r.deal} style={{ ...mock.row, gridTemplateColumns: "1.1fr 1fr 0.8fr" }}>
                <span style={mock.rowLabel}>{r.deal}</span>
                <span style={mock.rowLabel}>{r.closer}</span>
                <span style={mock.rowValue}>{r.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockWindow>
  )
}

function SalesOnboardingMockup() {
  return (
    <MockWindow app="Sales Onboarding" label="Launch workflow">
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
        {[
          { stage: "Backlog", items: ["Kickoff form review", "Slack channel setup"] },
          { stage: "In progress", items: ["Ops validation call", "CRM buildout"] },
          { stage: "Complete", items: ["Forms submitted", "Sales team onboarded"] },
        ].map((col) => (
          <div key={col.stage} style={mock.kanbanCol}>
            <span style={mock.kicker}>{col.stage}</span>
            {col.items.map((item) => (
              <div key={item} style={mock.kanbanCard}>{item}</div>
            ))}
          </div>
        ))}
      </div>
    </MockWindow>
  )
}

function CommissionTrackerMockup() {
  return (
    <MockWindow app="Commission Tracker" label="Payout period">
      <div style={{ display: "grid", gap: 14 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {[
            { label: "Cash collected", val: "$18,400" },
            { label: "Commission", val: "$2,760" },
            { label: "Bonus", val: "$500" },
            { label: "Total payout", val: "$3,260" },
          ].map((m) => (
            <div key={m.label} style={mock.metricCard}>
              <span style={mock.metricLabel}>{m.label}</span>
              <strong style={mock.metricValue}>{m.val}</strong>
            </div>
          ))}
        </div>
        <div style={mock.panel}>
          <div style={mock.panelHeader}>
            <strong style={mock.panelTitle}>Submissions</strong>
            <span style={mock.chip}>Apr 1 \u2013 15</span>
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            {[
              { rep: "Rep J. Carter", cash: "$8,200", status: "Approved" },
              { rep: "Rep N. Blake", cash: "$6,400", status: "Pending" },
              { rep: "Rep A. Cole", cash: "$3,800", status: "Approved" },
            ].map((r) => (
              <div key={r.rep} style={{ ...mock.row, gridTemplateColumns: "1.2fr 0.8fr 0.8fr" }}>
                <span style={mock.rowLabel}>{r.rep}</span>
                <span style={mock.rowValue}>{r.cash}</span>
                <span style={{ fontSize: 12, color: r.status === "Approved" ? T.green : "#ffbb3c", fontWeight: 600 }}>{r.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockWindow>
  )
}

function SetterEODMockup() {
  return (
    <MockWindow app="Setter EOD" label="Team analytics">
      <div style={{ display: "grid", gap: 14 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {[
            { label: "Dials today", val: "347" },
            { label: "Pickup rate", val: "28%" },
            { label: "Sets booked", val: "12" },
            { label: "Show rate", val: "72%" },
          ].map((m) => (
            <div key={m.label} style={mock.metricCard}>
              <span style={mock.metricLabel}>{m.label}</span>
              <strong style={mock.metricValue}>{m.val}</strong>
            </div>
          ))}
        </div>
        <div style={mock.panel}>
          <div style={mock.panelHeader}>
            <strong style={mock.panelTitle}>Rep Breakdown</strong>
            <span style={mock.chip}>Today</span>
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            <div style={{ ...mock.row, gridTemplateColumns: "1.2fr 0.6fr 0.6fr 0.6fr" }}>
              <span style={mock.tableHead}>Rep</span>
              <span style={mock.tableHead}>Dials</span>
              <span style={mock.tableHead}>Sets</span>
              <span style={mock.tableHead}>Cash</span>
            </div>
            {[
              { rep: "Rep M. Torres", dials: "124", sets: "5", cash: "$4,200" },
              { rep: "Rep K. Lin", dials: "108", sets: "4", cash: "$3,600" },
              { rep: "Rep D. Foster", dials: "115", sets: "3", cash: "$2,100" },
            ].map((r) => (
              <div key={r.rep} style={{ ...mock.row, gridTemplateColumns: "1.2fr 0.6fr 0.6fr 0.6fr" }}>
                <span style={mock.rowLabel}>{r.rep}</span>
                <span style={mock.rowValue}>{r.dials}</span>
                <span style={mock.rowValue}>{r.sets}</span>
                <span style={mock.rowValue}>{r.cash}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockWindow>
  )
}

function OwnerRadarMockup() {
  return (
    <MockWindow app="Owner Radar" label="Portfolio alerts">
      <div style={{ display: "grid", gap: 14 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          {[
            { label: "Tracked clients", val: "8" },
            { label: "Avg health", val: "74%" },
            { label: "At risk", val: "2" },
          ].map((m) => (
            <div key={m.label} style={mock.metricCard}>
              <span style={mock.metricLabel}>{m.label}</span>
              <strong style={{ ...mock.metricValue, color: m.label === "At risk" ? "#EF4444" : "#fff" }}>{m.val}</strong>
            </div>
          ))}
        </div>
        <div style={mock.panel}>
          <div style={mock.panelHeader}>
            <strong style={mock.panelTitle}>Active Alerts</strong>
            <span style={{ ...mock.chip, color: "#EF4444", background: "rgba(239,68,68,0.16)", border: "1px solid rgba(239,68,68,0.2)" }}>3 high</span>
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            {[
              { alert: "Client North: 5 days no setter submissions", severity: "High" },
              { alert: "Client Summit: $12k past due, 3 plans overdue", severity: "High" },
              { alert: "Client Atlas: QC score dropped below 60%", severity: "Medium" },
            ].map((a) => (
              <div key={a.alert} style={{ ...mock.row, gridTemplateColumns: "1fr auto" }}>
                <span style={{ ...mock.rowLabel, fontSize: 12 }}>{a.alert}</span>
                <span style={{ fontSize: 11, fontWeight: 700, color: a.severity === "High" ? "#EF4444" : "#F59E0B" }}>{a.severity}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockWindow>
  )
}

function RepOnboardingMockup() {
  return (
    <MockWindow app="Rep Onboarding" label="Training portal">
      <div style={{ display: "grid", gap: 14 }}>
        <div style={mock.panel}>
          <div style={mock.panelHeader}>
            <strong style={mock.panelTitle}>Day-by-Day Progress</strong>
            <span style={mock.chip}>Week 1</span>
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            {[
              { day: "Day 1: Company Overview", status: "Complete", test: "Passed" },
              { day: "Day 2: CRM Training", status: "Complete", test: "Passed" },
              { day: "Day 3: Sales Process", status: "In progress", test: "\u2014" },
              { day: "Day 4: Objection Handling", status: "Locked", test: "\u2014" },
            ].map((d) => (
              <div key={d.day} style={{ ...mock.row, gridTemplateColumns: "1.4fr 0.6fr 0.5fr" }}>
                <span style={mock.rowLabel}>{d.day}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: d.status === "Complete" ? T.green : d.status === "In progress" ? "#ffbb3c" : "rgba(255,255,255,0.3)" }}>{d.status}</span>
                <span style={{ fontSize: 12, color: d.test === "Passed" ? T.green : "rgba(255,255,255,0.3)" }}>{d.test}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockWindow>
  )
}

function CloserPlaybookMockup() {
  return (
    <MockWindow app="Closer Playbook" label="SOP library">
      <div style={{ display: "grid", gridTemplateColumns: "0.35fr 1fr", gap: 14 }}>
        {/* Nav sidebar */}
        <div style={{ display: "grid", gap: 6, alignContent: "start" }}>
          {["Sales Calls", "Pre-call", "During-call", "Post-call", "Admin", "Tech Stack", "Training"].map((item, i) => (
            <div
              key={item}
              style={{
                padding: "6px 10px", borderRadius: 8, fontSize: 12,
                color: i === 0 ? T.green : "rgba(255,255,255,0.5)",
                background: i === 0 ? "rgba(16,185,129,0.12)" : "transparent",
                fontWeight: i === 0 ? 600 : 400,
              }}
            >
              {item}
            </div>
          ))}
        </div>
        {/* Content */}
        <div style={mock.panel}>
          <div style={mock.panelHeader}>
            <strong style={mock.panelTitle}>Sales Calls</strong>
            <span style={{ ...mock.chip, fontSize: 10 }}>5 pages</span>
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            {[
              { title: "Discovery Framework", type: "Loom" },
              { title: "Objection Matrix", type: "Sheet" },
              { title: "Close Script v3", type: "Doc" },
              { title: "Payment Agreement Flow", type: "Page" },
            ].map((p) => (
              <div key={p.title} style={{ ...mock.row, gridTemplateColumns: "1fr auto" }}>
                <span style={mock.rowLabel}>{p.title}</span>
                <span style={{ ...mock.chip, fontSize: 10 }}>{p.type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockWindow>
  )
}

function QCDashboardMockup() {
  return (
    <MockWindow app="QC Dashboard" label="Rep compliance">
      <div style={{ display: "grid", gap: 14 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 10 }}>
          {[
            { label: "Quality score", val: "82%" },
            { label: "Show rate", val: "76%" },
            { label: "Close rate", val: "34%" },
            { label: "Pipeline issues", val: "7" },
          ].map((m) => (
            <div key={m.label} style={mock.metricCard}>
              <span style={mock.metricLabel}>{m.label}</span>
              <strong style={{ ...mock.metricValue, color: m.label === "Pipeline issues" ? "#F59E0B" : "#fff" }}>{m.val}</strong>
            </div>
          ))}
        </div>
        <div style={mock.panel}>
          <div style={mock.panelHeader}>
            <strong style={mock.panelTitle}>Compliance Checks</strong>
            <span style={{ ...mock.chip, color: T.green, background: "rgba(16,185,129,0.16)", border: `1px solid rgba(16,185,129,0.2)` }}>Pro</span>
          </div>
          <div style={{ display: "grid", gap: 8 }}>
            {[
              { check: "Pre-call preparation", result: "92%" },
              { check: "Post-call actions completed", result: "88%" },
              { check: "Pipeline updated within 24h", result: "71%" },
            ].map((c) => (
              <div key={c.check} style={mock.row}>
                <span style={mock.rowLabel}>{c.check}</span>
                <strong style={mock.rowValue}>{c.result}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MockWindow>
  )
}

export function ProductMockup({ slug }: ProductMockupProps) {
  if (slug === "ai-call-coaching") return <CallCoachingMockup />
  if (slug === "manager-os") return <ManagerOSMockup />
  if (slug === "commission-tracker") return <CommissionTrackerMockup />
  if (slug === "setter-eod") return <SetterEODMockup />
  if (slug === "client-health") return <ClientHealthMockup />
  if (slug === "revenue-visibility") return <RevenueVisibilityMockup />
  if (slug === "owner-radar") return <OwnerRadarMockup />
  if (slug === "rep-onboarding") return <RepOnboardingMockup />
  if (slug === "closer-playbook") return <CloserPlaybookMockup />
  if (slug === "qc-dashboard") return <QCDashboardMockup />
  if (slug === "sales-onboarding") return <SalesOnboardingMockup />
  return <HubMockup />
}

export {
  HubMockup, CallCoachingMockup, ManagerOSMockup, ClientHealthMockup,
  RevenueVisibilityMockup, SalesOnboardingMockup, CommissionTrackerMockup,
  SetterEODMockup, OwnerRadarMockup, RepOnboardingMockup, CloserPlaybookMockup,
  QCDashboardMockup,
}
