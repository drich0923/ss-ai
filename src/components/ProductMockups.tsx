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
    { title: "Client Health", color: "#f4c24a" },
    { title: "Revenue Visibility", color: "#ff8f4d" },
    { title: "Sales Onboarding", color: T.green },
    { title: "Commission Admin", color: "#8cb2ff" },
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          {apps.map((a) => (
            <div key={a.title} style={{ ...mock.metricCard, minHeight: 100, color: a.color }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ width: 28, height: 28, borderRadius: 10, border: `1px solid ${a.color}`, opacity: 0.9 }} />
                <span style={{ ...mock.chip, fontSize: 10 }}>Live</span>
              </div>
              <strong style={{ fontSize: 14, color: "#fff", lineHeight: 1.2 }}>{a.title}</strong>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, marginTop: "auto" }}>Launch</span>
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

export function ProductMockup({ slug }: ProductMockupProps) {
  if (slug === "ai-call-coaching") return <CallCoachingMockup />
  if (slug === "manager-os") return <ManagerOSMockup />
  if (slug === "client-health") return <ClientHealthMockup />
  if (slug === "revenue-visibility") return <RevenueVisibilityMockup />
  if (slug === "sales-onboarding") return <SalesOnboardingMockup />
  return <HubMockup />
}

export { HubMockup, CallCoachingMockup, ManagerOSMockup, ClientHealthMockup, RevenueVisibilityMockup, SalesOnboardingMockup }
