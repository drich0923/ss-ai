"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import AuditModal from "./AuditModal"
import { ecosystemModules, siteStats } from "@/lib/site-data"

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="26" height="26" rx="4" stroke="currentColor" strokeOpacity=".35" />
      <path d="M8 10h8a3 3 0 0 1 0 6H10a3 3 0 0 0 0 6h10" stroke="#9cff4f" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <circle cx="20" cy="10" r="1.6" fill="#9cff4f" />
    </svg>
  )
}

function Header({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap site-header-inner">
        <Link href="/" className="brand">
          <LogoMark />
          <span className="brand-name">
            SYSTEMIZED<span className="brand-thin">SALES</span>
          </span>
        </Link>
        <nav className="site-nav">
          <a href="#problem">PROBLEM</a>
          <a href="#how">HOW IT WORKS</a>
          <a href="#apps">APPS</a>
          <a href="#preview">PREVIEW</a>
          <a href="#roi">ROI</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="site-cta">
          <a href="mailto:sales@systemizedsales.ai" className="link-dim">sales@systemizedsales.ai</a>
          <button onClick={onBook} className="btn btn-primary">Book audit →</button>
        </div>
      </div>
    </header>
  )
}

function Hero({ onBook }: { onBook: () => void }) {
  const [typed, setTyped] = useState("")
  const cmd = "> ss build --track=pipeline --automate=outbound --analyze=rev"
  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      i++
      setTyped(cmd.slice(0, i))
      if (i >= cmd.length) clearInterval(id)
    }, 28)
    return () => clearInterval(id)
  }, [])
  return (
    <section className="hero">
      <div className="hero-bg-grid grid-bg" aria-hidden />
      <div className="hero-glow" aria-hidden />
      <div className="wrap hero-inner">
        <div className="hero-top">
          <span className="status-dot">ALL SYSTEMS OPERATIONAL</span>
          <span className="mono ink-mute sm">v4.2 · The app store for your sales team</span>
        </div>
        <h1 className="display display-xl">
          Your sales process<br />deserves software<br />built for it.
        </h1>
        <p className="hero-sub">
          AI coaching, management, client health, revenue visibility, and onboarding systems for
          high-ticket sales teams. Start with one app. Add the rest as your team grows.
        </p>
        <div className="hero-terminal-window">
          <div className="twin-top">
            <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
            <span className="twin-title">ss-ai · ~/revops</span>
            <span className="twin-tag">live</span>
          </div>
          <div className="twin-body">
            <div className="twin-line ink-mute">// discovery → scoped in 5 days, first build shipped in 14</div>
            <div className="twin-line">{typed}<span className="caret">▊</span></div>
            <div className="twin-line ink-dim">  ▸ scanning pipeline schema ........................ <span className="ok">ok</span></div>
            <div className="twin-line ink-dim">  ▸ mapping 14 touchpoints across 3 systems .......... <span className="ok">ok</span></div>
            <div className="twin-line ink-dim">  ▸ generating scorecard: Closer / Setter / Manager .. <span className="ok">ok</span></div>
            <div className="twin-line ink-dim">  ▸ deploying dashboard to portal.yourco.com ......... <span className="ok">ok</span></div>
            <div className="twin-line"><span className="ok">✓</span> system live · 100% of calls scored, not 5%</div>
          </div>
        </div>
        <div className="hero-cta-row">
          <button onClick={onBook} className="btn btn-primary">Book 30-min audit →</button>
          <a href="#preview" className="btn btn-ghost">See a live build</a>
          <div className="hero-stats mono">
            {siteStats.map(s => (
              <div key={s.label} className="stat" style={{ maxWidth: 170 }}>
                <div className="stat-n">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="section-header">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="display display-lg">{title}</h2>
    </div>
  )
}

function Problem() {
  const pains = [
    { n: "01", t: "Your CRM is a graveyard", d: "Reps don't log, managers don't look, and the one dashboard everyone checks was built in 2019 by someone who left." },
    { n: "02", t: "SOPs live in Notion, nowhere else", d: "The playbook says one thing. The calls say another. There's no enforcement layer between intent and reality." },
    { n: "03", t: "Coaching is vibes, not data", d: "Managers grade 5% of calls on gut. The other 95% go ungraded. The signal is in there — you can't see it." },
    { n: "04", t: "Tools don't talk", d: "Close, GHL, Stripe, Sheets, Slack. Six tabs to answer 'how did we do this week?' Nobody opens six tabs." },
    { n: "05", t: "Commission math is a liability", d: "Spreadsheets with formulas three people understand. Mistakes burn trust. Trust is how reps stay." },
    { n: "06", t: "You can't see the leaks", d: "Revenue leaks through setter → closer handoffs, unpaid invoices, ghosted renewals. You feel them. You can't point at them." },
  ]
  return (
    <section id="problem" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="THE PROBLEM" title={<>Your sales org runs on<br /><em className="italic-neon">duct tape and good intentions.</em></>} />
        <div className="problem-grid">
          {pains.map(p => (
            <div key={p.n} className="pain card reveal">
              <div className="pain-n">{p.n}</div>
              <div className="pain-t">{p.t}</div>
              <div className="pain-d">{p.d}</div>
            </div>
          ))}
        </div>
        <div className="problem-bottom ink-mute">// you don't need another tool. you need a system.</div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Audit", time: "1 WEEK", d: "We sit with your team. Shadow calls. Read every SOP. Map every tool. Find where money is leaking and where time is dying.", out: ["Full process map", "Leak diagnosis", "Build priorities ranked"], color: "var(--neon)" },
    { n: "02", t: "Build", time: "2 WEEKS", d: "We ship custom apps to your portal — dashboards, scorecards, automations — fit to your exact motion. 14 days from signed to live.", out: ["Custom dashboards live", "SOP automation layer", "Team onboarded"], color: "var(--blue)" },
    { n: "03", t: "Operate", time: "ONGOING", d: "We don't hand you a folder and leave. We monitor, tune, and ship new apps as your org scales. You get a sparring partner, not a vendor.", out: ["Weekly tuning", "New builds on demand", "Slack line, always open"], color: "var(--amber)" },
  ]
  return (
    <section id="how" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="HOW IT WORKS" title={<>Three phases.<br /><span className="ink-mute">One engagement.</span></>} />
        <div className="how-track">
          <div className="how-rail" aria-hidden />
          {steps.map(s => (
            <div key={s.n} className="how-step reveal" style={{ ["--step-color" as string]: s.color } as React.CSSProperties}>
              <div className="how-step-marker">
                <span className="how-step-dot" style={{ background: s.color }} />
                <span className="mono xs ink-mute">{s.time}</span>
              </div>
              <div className="how-step-body card">
                <div className="how-step-head">
                  <span className="mono xs ink-mute">PHASE {s.n}</span>
                  <h3 className="how-step-t">{s.t}</h3>
                </div>
                <p className="how-step-d">{s.d}</p>
                <ul className="how-step-out">
                  {s.out.map(o => (
                    <li key={o}><span className="tick" style={{ color: s.color }}>✓</span> {o}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Apps() {
  const cats: Record<string, { color: string; icon: string }> = {
    "ai-call-coaching": { color: "var(--amber)", icon: "◉" },
    "manager-os": { color: "var(--purple)", icon: "▤" },
    "commission-tracker": { color: "var(--neon)", icon: "$" },
    "setter-eod": { color: "var(--blue)", icon: "⎯" },
    "client-health": { color: "var(--coral)", icon: "✦" },
    "revenue-visibility": { color: "var(--neon)", icon: "◆" },
    "owner-radar": { color: "var(--coral)", icon: "◎" },
    "rep-onboarding": { color: "var(--blue)", icon: "⟶" },
    "closer-playbook": { color: "var(--purple)", icon: "▣" },
    "qc-dashboard": { color: "var(--amber)", icon: "≡" },
    "sales-onboarding": { color: "var(--blue)", icon: "⎇" },
  }
  return (
    <section id="apps" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="THE APP STORE" title={<>Every app is custom.<br /><span className="ink-mute">Start with one. Add the rest.</span></>} />
        <div className="feat-grid">
          {ecosystemModules.map(m => {
            const meta = cats[m.slug] ?? { color: "var(--neon)", icon: "◆" }
            return (
              <Link key={m.slug} href={`/products/${m.slug}`} className="feat card reveal">
                <div className="feat-top">
                  <span className="feat-icon" style={{ color: meta.color, borderColor: meta.color }}>{meta.icon}</span>
                  <span className="mono xs" style={{ color: meta.color, letterSpacing: "0.14em" }}>APP</span>
                </div>
                <div className="feat-t">{m.title}</div>
                <div className="feat-d">{m.summary}</div>
                <div className="feat-bottom">
                  <span className="feat-live"><span className="live-dot" /> LIVE</span>
                  <span>learn more →</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function DashPreview() {
  const [tab, setTab] = useState<"pipeline" | "coaching" | "cash" | "health">("coaching")
  const tabs = [
    { id: "coaching", label: "AI Call Coaching", color: "var(--amber)" },
    { id: "pipeline", label: "Manager OS", color: "var(--blue)" },
    { id: "cash", label: "Revenue Visibility", color: "var(--neon)" },
    { id: "health", label: "Client Health", color: "var(--coral)" },
  ] as const
  return (
    <section id="preview" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="INSIDE THE PORTAL" title={<>Your team's <em className="italic-neon">command center</em>.<br /><span className="ink-mute">Built to your shape, not a template.</span></>} />
        <div className="preview-shell">
          <div className="preview-chrome">
            <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
            <span className="mono sm ink-mute">portal.yourco.com / {tab}</span>
            <span className="status-dot-inline"><span className="live-dot" /> LIVE</span>
          </div>
          <div className="preview-tabs">
            {tabs.map(t => (
              <button key={t.id} className={`preview-tab ${tab === t.id ? "active" : ""}`} onClick={() => setTab(t.id as typeof tab)} style={{ ["--tab-color" as string]: t.color } as React.CSSProperties}>
                {t.label}
              </button>
            ))}
          </div>
          <div className="preview-body">
            {tab === "coaching" && <CoachingView />}
            {tab === "pipeline" && <PipelineView />}
            {tab === "cash" && <CashView />}
            {tab === "health" && <HealthView />}
          </div>
        </div>
      </div>
    </section>
  )
}

function DashKpi({ title, v, delta, c }: { title: string; v: string; delta: string; c: string }) {
  return (
    <div className="dash-kpi">
      <div className="mono xs ink-mute">{title}</div>
      <div className="dash-kpi-v">{v}</div>
      <div className="mono xs" style={{ color: c }}>{delta}</div>
    </div>
  )
}

function CoachingView() {
  const calls = [
    { rep: "S. Reyes", dur: "24:11", score: 92, flag: "Strong frame, weak ask", c: "var(--neon)" },
    { rep: "A. Desai", dur: "18:40", score: 74, flag: "Priced too early", c: "var(--amber)" },
    { rep: "M. Okafor", dur: "31:02", score: 88, flag: "Missed objection", c: "var(--neon)" },
    { rep: "J. Blake", dur: "12:20", score: 58, flag: "No discovery loop", c: "var(--coral)" },
  ]
  return (
    <div className="dash-view">
      <div className="dash-kpis">
        <DashKpi title="CALLS GRADED" v="2,418" delta="this wk" c="var(--amber)" />
        <DashKpi title="AVG SCORE" v="79" delta="+2.1" c="var(--neon)" />
        <DashKpi title="FLAGS OPEN" v="312" delta="queued" c="var(--amber)" />
        <DashKpi title="COACH HOURS SAVED" v="47hr" delta="/wk" c="var(--neon)" />
      </div>
      <div className="dash-table">
        <div className="dash-th"><span>REP</span><span>DURATION</span><span>SCORE</span><span>TOP FLAG</span><span>ACTION</span></div>
        {calls.map((c, i) => (
          <div key={i} className="dash-tr">
            <span className="rep-name"><span className="rep-dot" style={{ background: c.c }} />{c.rep}</span>
            <span className="mono sm ink-dim">{c.dur}</span>
            <span className="score-bar"><span className="score-bar-fill" style={{ width: `${c.score}%`, background: c.c }} /><span className="mono xs">{c.score}</span></span>
            <span className="sm ink-dim">{c.flag}</span>
            <button className="mini-btn">coach →</button>
          </div>
        ))}
      </div>
    </div>
  )
}

function PipelineView() {
  const reps = [
    { n: "M. Okafor", role: "Closer", score: 96, flags: 0, c: "var(--neon)" },
    { n: "S. Reyes", role: "Closer", score: 91, flags: 1, c: "var(--neon)" },
    { n: "T. Nolan", role: "Setter", score: 88, flags: 2, c: "var(--blue)" },
    { n: "A. Desai", role: "Closer", score: 82, flags: 3, c: "var(--neon)" },
    { n: "R. Park", role: "Setter", score: 74, flags: 5, c: "var(--blue)" },
    { n: "J. Blake", role: "Setter", score: 68, flags: 7, c: "var(--amber)" },
  ]
  return (
    <div className="dash-view">
      <div className="dash-kpis">
        <DashKpi title="SOP ADHERENCE" v="91%" delta="+3pts" c="var(--neon)" />
        <DashKpi title="STAGE SLIPPAGE" v="12" delta="-4" c="var(--blue)" />
        <DashKpi title="GHOST DEALS" v="7" delta="-2" c="var(--amber)" />
        <DashKpi title="TOUCHPOINTS / DEAL" v="6.4" delta="+0.8" c="var(--neon)" />
      </div>
      <div className="dash-table">
        <div className="dash-th"><span>REP</span><span>ROLE</span><span>HYGIENE</span><span>FLAGS</span><span>ACTION</span></div>
        {reps.map(r => (
          <div key={r.n} className="dash-tr">
            <span className="rep-name"><span className="rep-dot" style={{ background: r.c }} />{r.n}</span>
            <span className="mono sm ink-dim">{r.role}</span>
            <span className="score-bar"><span className="score-bar-fill" style={{ width: `${r.score}%`, background: r.c }} /><span className="mono xs">{r.score}</span></span>
            <span className="mono sm" style={{ color: r.flags > 4 ? "var(--amber)" : "var(--ink-dim)" }}>{r.flags}</span>
            <button className="mini-btn">review →</button>
          </div>
        ))}
      </div>
    </div>
  )
}

function CashView() {
  return (
    <div className="dash-view">
      <div className="dash-kpis">
        <DashKpi title="COLLECTED (MTD)" v="$412,880" delta="+18.2%" c="var(--neon)" />
        <DashKpi title="OUTSTANDING" v="$68,200" delta="-$12k" c="var(--blue)" />
        <DashKpi title="FAILED RETRIES" v="14" delta="auto-retry" c="var(--amber)" />
        <DashKpi title="AVG DAYS TO PAY" v="2.8d" delta="-0.6" c="var(--neon)" />
      </div>
      <div className="cash-chart">
        <div className="mono sm ink-mute">30-DAY COLLECTIONS · $</div>
        <svg viewBox="0 0 800 180" preserveAspectRatio="none" className="cash-svg">
          <defs>
            <linearGradient id="cashFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9cff4f" stopOpacity=".4" />
              <stop offset="100%" stopColor="#9cff4f" stopOpacity="0" />
            </linearGradient>
          </defs>
          {Array.from({ length: 11 }).map((_, i) => (
            <line key={i} x1="0" x2="800" y1={i * 18} y2={i * 18} stroke="rgba(255,255,255,0.04)" />
          ))}
          <path d="M0,140 L40,130 L80,135 L120,110 L160,115 L200,90 L240,95 L280,75 L320,85 L360,60 L400,70 L440,50 L480,58 L520,40 L560,48 L600,32 L640,38 L680,25 L720,30 L760,18 L800,22 L800,180 L0,180 Z" fill="url(#cashFill)" />
          <path d="M0,140 L40,130 L80,135 L120,110 L160,115 L200,90 L240,95 L280,75 L320,85 L360,60 L400,70 L440,50 L480,58 L520,40 L560,48 L600,32 L640,38 L680,25 L720,30 L760,18 L800,22" fill="none" stroke="#9cff4f" strokeWidth="2" />
        </svg>
      </div>
    </div>
  )
}

function HealthView() {
  const accts = [
    { n: "Northstar Realty", health: 94, mrr: "$18k", status: "HEALTHY", c: "var(--neon)" },
    { n: "Atlas /RE", health: 81, mrr: "$12k", status: "HEALTHY", c: "var(--neon)" },
    { n: "Huxley & Co", health: 62, mrr: "$8k", status: "WATCH", c: "var(--amber)" },
    { n: "Bluepeak Group", health: 44, mrr: "$22k", status: "AT RISK", c: "var(--coral)" },
    { n: "Forgeway", health: 38, mrr: "$15k", status: "AT RISK", c: "var(--coral)" },
  ]
  return (
    <div className="dash-view">
      <div className="dash-kpis">
        <DashKpi title="HEALTHY" v="31" delta="of 47" c="var(--neon)" />
        <DashKpi title="WATCH" v="9" delta="of 47" c="var(--amber)" />
        <DashKpi title="AT RISK" v="7" delta="of 47" c="var(--coral)" />
        <DashKpi title="PROJECTED SAVE" v="$312k" delta="ARR" c="var(--neon)" />
      </div>
      <div className="dash-table">
        <div className="dash-th"><span>ACCOUNT</span><span>MRR</span><span>HEALTH</span><span>STATUS</span><span>ACTION</span></div>
        {accts.map(a => (
          <div key={a.n} className="dash-tr">
            <span className="rep-name"><span className="rep-dot" style={{ background: a.c }} />{a.n}</span>
            <span className="mono sm ink-dim">{a.mrr}</span>
            <span className="score-bar"><span className="score-bar-fill" style={{ width: `${a.health}%`, background: a.c }} /><span className="mono xs">{a.health}</span></span>
            <span className="mono xs" style={{ color: a.c }}>{a.status}</span>
            <button className="mini-btn">intervene →</button>
          </div>
        ))}
      </div>
    </div>
  )
}

function Roi({ onBook }: { onBook: () => void }) {
  const [reps, setReps] = useState(12)
  const [calls, setCalls] = useState(40)
  const [acv, setAcv] = useState(14000)
  const hoursSavedPerRepWk = 14, hourlyLoaded = 65
  const timeSavingsAnnual = reps * hoursSavedPerRepWk * hourlyLoaded * 48
  const callsWk = reps * calls
  const closeRateLift = 0.022
  const extraDealsYr = Math.round(callsWk * 48 * closeRateLift)
  const revenueLift = extraDealsYr * acv
  const leakRecovered = Math.round(reps * 2600 + acv * 0.4)
  const total = timeSavingsAnnual + revenueLift + leakRecovered
  const fmt = (n: number) => "$" + Math.round(n).toLocaleString()
  const fmtShort = (n: number) => n >= 1_000_000 ? "$" + (n / 1_000_000).toFixed(2) + "M" : "$" + Math.round(n / 1000) + "k"

  return (
    <section id="roi" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="RUN THE MATH" title={<>What's it worth <em className="italic-neon">to your org?</em></>} />
        <div className="roi-grid">
          <div className="roi-inputs card">
            <div className="mono xs ink-mute roi-card-label">ENV // INPUTS</div>
            <RoiSlider label="Sales reps on team" v={reps} set={setReps} min={2} max={80} step={1} />
            <RoiSlider label="Avg calls / rep / week" v={calls} set={setCalls} min={5} max={200} step={5} />
            <RoiSlider label="Avg contract value" v={acv} set={setAcv} min={500} max={100000} step={500} prefix="$" format={n => n.toLocaleString()} />
          </div>
          <div className="roi-outputs">
            <div className="roi-out card">
              <div className="roi-out-row">
                <div className="mono xs ink-mute">TIME RECOVERED</div>
                <div className="roi-out-v">{fmt(timeSavingsAnnual)}</div>
                <div className="mono sm ink-dim">{reps * hoursSavedPerRepWk}hr / wk recovered via automation</div>
              </div>
            </div>
            <div className="roi-out card">
              <div className="roi-out-row">
                <div className="mono xs ink-mute">REVENUE LIFT</div>
                <div className="roi-out-v">{fmt(revenueLift)}</div>
                <div className="mono sm ink-dim">+{extraDealsYr} deals/yr from +2.2pt close rate lift</div>
              </div>
            </div>
            <div className="roi-out card">
              <div className="roi-out-row">
                <div className="mono xs ink-mute">LEAK RECOVERY</div>
                <div className="roi-out-v">{fmt(leakRecovered)}</div>
                <div className="mono sm ink-dim">unpaid invoices, dropped handoffs, missed renewals</div>
              </div>
            </div>
            <div className="roi-total">
              <div className="roi-total-label">ANNUAL IMPACT // PROJECTED</div>
              <div className="roi-total-v">{fmtShort(total)}<span className="roi-total-yr">/yr</span></div>
              <div className="roi-total-bar"><div className="roi-bar-fill" style={{ width: "88%" }} /></div>
              <div className="mono xs ink-dim">Based on tracked averages across deployed systems. Your audit will give you the exact number.</div>
              <button onClick={onBook} className="btn btn-primary roi-btn">Book the audit →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RoiSlider({ label, v, set, min, max, step, prefix = "", format }: { label: string; v: number; set: (n: number) => void; min: number; max: number; step: number; prefix?: string; format?: (n: number) => string }) {
  const display = format ? format(v) : v
  return (
    <div className="roi-slider">
      <div className="roi-slider-top">
        <label className="roi-slider-label">{label}</label>
        <span className="roi-slider-v">{prefix}{display}</span>
      </div>
      <input type="range" className="roi-range" min={min} max={max} step={step} value={v} onChange={e => set(Number(e.target.value))} />
    </div>
  )
}

function Faq() {
  const qs = [
    { q: "How is this different from hiring a Zapier consultant or a RevOps agency?", a: "They wire existing tools together. We build new tools when the existing ones don't fit. Most orgs need both — but the custom builds are where the step-change lives." },
    { q: "We already have HubSpot/Salesforce. Does this replace it?", a: "No. We layer on top. Your CRM stays the source of truth; we build the dashboards, scorecards, and automation that your CRM's native UI is too generic to deliver." },
    { q: "How fast until something is live?", a: "14 days from signed to live. We scope in week one, ship in week two. No DIY setup." },
    { q: "What does it cost?", a: "Audits are fixed-fee. Apps start around $2.5k/mo plus setup. Most clients see payback inside 90 days." },
    { q: "Do we own the code?", a: "Yes. Everything lives in your portal, on your infrastructure, documented. You can fork us and run it in-house the moment you want to." },
    { q: "What if our process changes?", a: "It will. That's what the ongoing phase is for. We re-shape apps as your motion evolves, and ship new ones when new needs emerge." },
  ]
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="FAQ" title={<>Questions we get<br /><span className="ink-mute">on every audit call.</span></>} />
        <div className="faq-list">
          {qs.map((item, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="faq-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="faq-q-t">{item.q}</span>
                <span className="faq-plus">{open === i ? "−" : "+"}</span>
              </button>
              <div className="faq-a-wrap"><div className="faq-a">{item.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCta({ onBook }: { onBook: () => void }) {
  return (
    <section id="cta" className="section">
      <div className="wrap">
        <div className="final-card">
          <div className="grid-bg final-bg" aria-hidden />
          <div className="final-inner">
            <div className="status-dot">NEXT COHORT · 6 SEATS OPEN</div>
            <h2 className="display display-xl final-t">Stop guessing.<br /><em className="italic-neon">Ship the system.</em></h2>
            <p className="final-sub">30-minute audit call. We'll map your current motion, find the three highest-leverage builds, and send you a written diagnosis within 48 hours. No deck. No pitch.</p>
            <div className="final-ctas">
              <button onClick={onBook} className="btn btn-primary">Book 30-min audit →</button>
              <a href="mailto:sales@systemizedsales.ai" className="btn btn-ghost">sales@systemizedsales.ai</a>
            </div>
            <div className="final-meta"><span>◆ Fixed-fee audits</span><span>◆ 14-day first ship</span><span>◆ You own the code</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <LogoMark />
          <div>
            <div className="brand-name">SYSTEMIZED<span className="brand-thin">SALES</span></div>
            <div className="mono xs ink-mute">the app store for your sales team</div>
          </div>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <div className="eyebrow">APPS</div>
            {ecosystemModules.slice(0, 5).map(m => (
              <Link key={m.slug} href={`/products/${m.slug}`}>{m.title}</Link>
            ))}
          </div>
          <div className="footer-col">
            <div className="eyebrow">MORE APPS</div>
            {ecosystemModules.slice(5).map(m => (
              <Link key={m.slug} href={`/products/${m.slug}`}>{m.title}</Link>
            ))}
          </div>
          <div className="footer-col">
            <div className="eyebrow">CONTACT</div>
            <a href="mailto:sales@systemizedsales.ai">sales@systemizedsales.ai</a>
            <a href="#cta">Book audit →</a>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span className="ink-mute">© 2026 SYSTEMIZED SALES AI</span>
        <span className="ink-mute">BUILT FOR HIGH-TICKET SALES TEAMS</span>
        <span className="status-dot-inline"><span className="live-dot" /> ALL SYSTEMS OPERATIONAL</span>
      </div>
    </footer>
  )
}

export default function SSLanding() {
  const [modalOpen, setModalOpen] = useState(false)
  useEffect(() => {
    const els = document.querySelectorAll(".reveal")
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in") }),
      { threshold: 0.1 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
  const openModal = () => setModalOpen(true)
  return (
    <>
      <Header onBook={openModal} />
      <Hero onBook={openModal} />
      <Problem />
      <HowItWorks />
      <Apps />
      <DashPreview />
      <Roi onBook={openModal} />
      <Faq />
      <FinalCta onBook={openModal} />
      <Footer />
      <AuditModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
