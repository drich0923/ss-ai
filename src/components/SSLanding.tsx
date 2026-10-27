"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import AuditModal from "./AuditModal"
import Logo from "./Logo"
import { ecosystemModules, siteStats } from "@/lib/site-data"

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
          <Logo />
        </Link>
        <nav className="site-nav">
          <a href="#problem">PROBLEM</a>
          <a href="#how">HOW IT WORKS</a>
          <a href="#apps">WHAT'S INCLUDED</a>
          <a href="#preview">INSIDE</a>
          <a href="#roi">THE MATH</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="site-cta">
          <a href="mailto:sales@systemizedsales.ai" className="link-dim">sales@systemizedsales.ai</a>
          <button onClick={onBook} className="btn btn-primary">Book a call →</button>
        </div>
      </div>
    </header>
  )
}

function Hero({ onBook }: { onBook: () => void }) {
  const [typed, setTyped] = useState("")
  const cmd = "> ss install --os=sales-team --connect=ghl,stripe,fathom,whop"
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
          <span className="mono ink-mute sm">v4.2 · The Sales Team OS</span>
        </div>
        <h1 className="display display-xl">
          One system<br />for your whole<br />sales team.
        </h1>
        <p className="hero-sub">
          Hire, ramp, track and pay your sales team from one hub, connected to the tools you already use. Every app is included, and the system grows with your team. Built and battle-tested inside our own agency.
        </p>
        <div className="hero-terminal-window">
          <div className="twin-top">
            <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
            <span className="twin-title">ss-ai · ~/sales-team-os</span>
            <span className="twin-tag">live</span>
          </div>
          <div className="twin-body">
            <div className="twin-line ink-mute">// discovery call → tools connected → your team live in its own workspace</div>
            <div className="twin-line">{typed}<span className="caret">▊</span></div>
            <div className="twin-line ink-dim">  ▸ connecting GHL, Stripe, Fathom, Whop ............ <span className="ok">ok</span></div>
            <div className="twin-line ink-dim">  ▸ loading closer + setter playbooks ............... <span className="ok">ok</span></div>
            <div className="twin-line ink-dim">  ▸ publishing hiring page + dashboard .............. <span className="ok">ok</span></div>
            <div className="twin-line ink-dim">  ▸ wiring RevPhlo: cash, shows, closes ............. <span className="ok">ok</span></div>
            <div className="twin-line"><span className="ok">✓</span> system live · your whole team, one workspace</div>
          </div>
        </div>
        <div className="hero-cta-row">
          <button onClick={onBook} className="btn btn-primary">Book a 30-min call →</button>
          <a href="#preview" className="btn btn-ghost">See what's inside</a>
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
    { n: "01", t: "Hiring is a coin flip", d: "You hire the best talker on the call. Thirty days later you find out they can't close. Then you start over." },
    { n: "02", t: "New reps ramp on you", d: "The playbook lives in your head. Every new rep pings you for scripts, pricing and what to say when a lead stalls." },
    { n: "03", t: "Tools don't talk", d: "GHL, Stripe, Fathom, Sheets, Slack. Six tabs to answer 'how did we do this week?' Nobody opens six tabs." },
    { n: "04", t: "Leads slip through the cracks", d: "A lead fills out your form at 9 PM. Nobody calls until tomorrow. Setters log what they remember, not what happened." },
    { n: "05", t: "Commission math is a liability", d: "Spreadsheets with formulas three people understand. Mistakes burn trust. Trust is how reps stay." },
    { n: "06", t: "You don't know what you don't know", d: "Is it the leads, the setter or the closer? Without clean numbers, you're guessing. And guessing is expensive." },
  ]
  return (
    <section id="problem" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="THE PROBLEM" title={<>Your sales team runs on<br /><em className="italic-neon">duct tape and you.</em></>} />
        <div className="problem-grid">
          {pains.map(p => (
            <div key={p.n} className="pain card reveal">
              <div className="pain-n">{p.n}</div>
              <div className="pain-t">{p.t}</div>
              <div className="pain-d">{p.d}</div>
            </div>
          ))}
        </div>
        <div className="problem-bottom ink-mute">// you don't need another tool. you need one system.</div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Map", time: "DISCOVERY CALL", d: "We get on a call and map how your team works today: who does what, which tools you use, and where deals and data fall through.", out: ["Your team, mapped", "Your tools, listed", "The gaps, ranked"], color: "var(--neon)" },
    { n: "02", t: "Connect", time: "FIRST 30 DAYS", d: "We connect your tools to our hub and RevPhlo. Then we load your playbooks, trackers, hiring page and commission plan, and get your team logged in to its own workspace.", out: ["Tools connected", "Every app set up", "Team logged in"], color: "var(--blue)" },
    { n: "03", t: "Refine", time: "ONGOING", d: "We don't hand you logins and leave. A shared Slack channel stays open for fixes and changes, all included. Need a brand-new app as you grow? We scope it with you.", out: ["Shared Slack channel", "Fixes and changes included", "New apps scoped as you grow"], color: "var(--amber)" },
  ]
  return (
    <section id="how" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="HOW IT WORKS" title={<>Three steps.<br /><span className="ink-mute">One system that grows with you.</span></>} />
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
        <div className="how-step-body card" style={{ marginTop: 32, ["--step-color" as string]: "var(--neon)" } as React.CSSProperties}>
          <div className="mono xs ink-mute" style={{ marginBottom: 14 }}>GUARANTEE</div>
          <h3 className="how-step-t" style={{ marginBottom: 14 }}>The Pays-For-Itself Guarantee</h3>
          <p className="how-step-d">By day 90, The Sales Team OS finds at least your setup fee in cash you were leaving on the table: unpaid invoices, leads nobody called, no-shows nobody rebooked. If it doesn't, we refund your setup fee.</p>
          <p className="how-step-d" style={{ marginBottom: 0 }}>And if your numbers haven't clearly moved by day 90, you can walk away from the rest of your term and keep everything we built.</p>
        </div>
      </div>
    </section>
  )
}

function Apps() {
  const cats: Record<string, { color: string; icon: string }> = {
    "revphlo": { color: "var(--neon)", icon: "◆" },
    "hiring-app": { color: "var(--coral)", icon: "◎" },
    "speed-to-lead": { color: "var(--amber)", icon: "▸" },
    "ai-call-coaching": { color: "var(--purple)", icon: "◉" },
    "manager-os": { color: "var(--blue)", icon: "▦" },
    "setter-eod": { color: "var(--blue)", icon: "⎯" },
    "qc-dashboard": { color: "var(--amber)", icon: "✓" },
    "closer-playbook": { color: "var(--purple)", icon: "▣" },
    "rep-onboarding": { color: "var(--blue)", icon: "⟶" },
    "commission-tracker": { color: "var(--neon)", icon: "$" },
  }
  return (
    <section id="apps" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="WHAT'S INCLUDED" title={<>Every app your team needs.<br /><span className="ink-mute">All included. All connected.</span></>} />
        <div className="feat-grid">
          {ecosystemModules.map(m => {
            const meta = cats[m.slug] ?? { color: "var(--neon)", icon: "◆" }
            return (
              <Link key={m.slug} href={m.href} className="feat card reveal">
                <div className="feat-top">
                  <span className="feat-icon" style={{ color: meta.color, borderColor: meta.color }}>{meta.icon}</span>
                  <span className="mono xs" style={{ color: meta.color, letterSpacing: "0.14em" }}>APP</span>
                </div>
                <div className="feat-t">{m.title}</div>
                <div className="feat-d">{m.summary}</div>
                <div className="feat-bottom">
                  <span className="feat-live"><span className="live-dot" /> INCLUDED</span>
                  <span>{m.href.startsWith("/products/") ? "learn more →" : "see it on a call →"}</span>
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
  const [tab, setTab] = useState<"pipeline" | "coaching" | "cash" | "health">("cash")
  const tabs = [
    { id: "cash", label: "RevPhlo", color: "var(--neon)" },
    { id: "pipeline", label: "Setter EOD", color: "var(--blue)" },
    { id: "coaching", label: "Commissions", color: "var(--amber)" },
    { id: "health", label: "Hiring", color: "var(--coral)" },
  ] as const
  return (
    <section id="preview" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="INSIDE THE HUB" title={<>Your team's <em className="italic-neon">command center</em>.<br /><span className="ink-mute">Every number, one workspace.</span></>} />
        <div className="preview-shell">
          <div className="preview-chrome">
            <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
            <span className="mono sm ink-mute">yourteam · systemized hub / {tab}</span>
            <span className="status-dot-inline"><span className="live-dot" /> SAMPLE DATA</span>
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
        <div className="mono xs ink-dim" style={{ marginTop: 14 }}>Sample data for illustration. Your workspace shows your own numbers.</div>
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
    { rep: "S. Reyes", dur: "1st–15th", score: 92, flag: "Tier 2 bonus hit", c: "var(--neon)" },
    { rep: "A. Desai", dur: "1st–15th", score: 74, flag: "Ready to approve", c: "var(--amber)" },
    { rep: "M. Okafor", dur: "1st–15th", score: 88, flag: "Split with setter", c: "var(--neon)" },
    { rep: "J. Blake", dur: "1st–15th", score: 58, flag: "Missing payment proof", c: "var(--coral)" },
  ]
  return (
    <div className="dash-view">
      <div className="dash-kpis">
        <DashKpi title="PENDING APPROVAL" v="9" delta="this period" c="var(--amber)" />
        <DashKpi title="APPROVED (MO)" v="$21,480" delta="+8%" c="var(--neon)" />
        <DashKpi title="DISPUTES" v="0" delta="this period" c="var(--amber)" />
        <DashKpi title="PAYOUT PERIOD" v="1st–15th" delta="semi-monthly" c="var(--neon)" />
      </div>
      <div className="dash-table">
        <div className="dash-th"><span>REP</span><span>PERIOD</span><span>% OF TARGET</span><span>NOTE</span><span>ACTION</span></div>
        {calls.map((c, i) => (
          <div key={i} className="dash-tr">
            <span className="rep-name"><span className="rep-dot" style={{ background: c.c }} />{c.rep}</span>
            <span className="mono sm ink-dim">{c.dur}</span>
            <span className="score-bar"><span className="score-bar-fill" style={{ width: `${c.score}%`, background: c.c }} /><span className="mono xs">{c.score}</span></span>
            <span className="sm ink-dim">{c.flag}</span>
            <button className="mini-btn">approve →</button>
          </div>
        ))}
      </div>
    </div>
  )
}

function PipelineView() {
  const reps = [
    { n: "M. Okafor", role: "Phone", score: 96, flags: 0, c: "var(--neon)" },
    { n: "S. Reyes", role: "DM", score: 91, flags: 1, c: "var(--neon)" },
    { n: "T. Nolan", role: "Phone", score: 88, flags: 2, c: "var(--blue)" },
    { n: "A. Desai", role: "DM", score: 82, flags: 3, c: "var(--neon)" },
    { n: "R. Park", role: "Phone", score: 74, flags: 5, c: "var(--blue)" },
    { n: "J. Blake", role: "DM", score: 68, flags: 7, c: "var(--amber)" },
  ]
  return (
    <div className="dash-view">
      <div className="dash-kpis">
        <DashKpi title="DIALS TODAY" v="412" delta="+38" c="var(--neon)" />
        <DashKpi title="CONVERSATIONS" v="96" delta="+11" c="var(--blue)" />
        <DashKpi title="BOOKED" v="18" delta="+3" c="var(--amber)" />
        <DashKpi title="EOD SUBMITTED" v="6 of 7" delta="1 missing" c="var(--neon)" />
      </div>
      <div className="dash-table">
        <div className="dash-th"><span>SETTER</span><span>CHANNEL</span><span>EOD SCORE</span><span>MISSED</span><span>ACTION</span></div>
        {reps.map(r => (
          <div key={r.n} className="dash-tr">
            <span className="rep-name"><span className="rep-dot" style={{ background: r.c }} />{r.n}</span>
            <span className="mono sm ink-dim">{r.role}</span>
            <span className="score-bar"><span className="score-bar-fill" style={{ width: `${r.score}%`, background: r.c }} /><span className="mono xs">{r.score}</span></span>
            <span className="mono sm" style={{ color: r.flags > 4 ? "var(--amber)" : "var(--ink-dim)" }}>{r.flags}</span>
            <button className="mini-btn">open EOD →</button>
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
        <DashKpi title="CASH COLLECTED (MTD)" v="$84,600" delta="+12% vs last mo" c="var(--neon)" />
        <DashKpi title="SHOW RATE" v="68%" delta="+6 pts" c="var(--blue)" />
        <DashKpi title="CLOSE RATE ON SHOWS" v="31%" delta="+4 pts" c="var(--amber)" />
        <DashKpi title="CASH PER CALL" v="$1,240" delta="+$180" c="var(--neon)" />
      </div>
      <div className="cash-chart">
        <div className="mono sm ink-mute">30-DAY CASH COLLECTED · $</div>
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
    { n: "Candidate A", health: 94, mrr: "Closer", status: "SHORTLIST", c: "var(--neon)" },
    { n: "Candidate B", health: 81, mrr: "Setter", status: "SHORTLIST", c: "var(--neon)" },
    { n: "Candidate C", health: 62, mrr: "Closer", status: "REVIEW", c: "var(--amber)" },
    { n: "Candidate D", health: 44, mrr: "Setter", status: "REVIEW", c: "var(--amber)" },
    { n: "Candidate E", health: 38, mrr: "Closer", status: "PASS", c: "var(--coral)" },
  ]
  return (
    <div className="dash-view">
      <div className="dash-kpis">
        <DashKpi title="APPLICANTS" v="64" delta="this month" c="var(--neon)" />
        <DashKpi title="VIDEO SENT" v="29" delta="step 2" c="var(--amber)" />
        <DashKpi title="CALL RECORDED" v="12" delta="step 3" c="var(--coral)" />
        <DashKpi title="SHORTLIST" v="5" delta="ready" c="var(--neon)" />
      </div>
      <div className="dash-table">
        <div className="dash-th"><span>CANDIDATE</span><span>ROLE</span><span>SCORE</span><span>STAGE</span><span>ACTION</span></div>
        {accts.map(a => (
          <div key={a.n} className="dash-tr">
            <span className="rep-name"><span className="rep-dot" style={{ background: a.c }} />{a.n}</span>
            <span className="mono sm ink-dim">{a.mrr}</span>
            <span className="score-bar"><span className="score-bar-fill" style={{ width: `${a.health}%`, background: a.c }} /><span className="mono xs">{a.health}</span></span>
            <span className="mono xs" style={{ color: a.c }}>{a.status}</span>
            <button className="mini-btn">watch →</button>
          </div>
        ))}
      </div>
    </div>
  )
}

function Roi({ onBook }: { onBook: () => void }) {
  const [reps, setReps] = useState(3)
  const [calls, setCalls] = useState(12)
  const [acv, setAcv] = useState(6000)
  const closeRateLift = 0.05
  const extraDealsYr = Math.round(reps * calls * 48 * closeRateLift)
  const revenueLift = extraDealsYr * acv
  const perCloser = reps > 0 ? revenueLift / reps : 0
  const total = revenueLift
  const fmt = (n: number) => "$" + Math.round(n).toLocaleString()
  const fmtShort = (n: number) => n >= 1_000_000 ? "$" + (n / 1_000_000).toFixed(2) + "M" : "$" + Math.round(n / 1000) + "k"

  return (
    <section id="roi" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="RUN THE MATH" title={<>What's a better close rate <em className="italic-neon">worth to you?</em></>} />
        <div className="roi-grid">
          <div className="roi-inputs card">
            <div className="mono xs ink-mute roi-card-label">ENV // INPUTS</div>
            <RoiSlider label="Closers on your team" v={reps} set={setReps} min={1} max={20} step={1} />
            <RoiSlider label="Shows per closer / week" v={calls} set={setCalls} min={2} max={40} step={1} />
            <RoiSlider label="Average deal" v={acv} set={setAcv} min={500} max={50000} step={500} prefix="$" format={n => n.toLocaleString()} />
          </div>
          <div className="roi-outputs">
            <div className="roi-out card">
              <div className="roi-out-row">
                <div className="mono xs ink-mute">EXTRA CLOSES / YR</div>
                <div className="roi-out-v">{extraDealsYr}</div>
                <div className="mono sm ink-dim">at +5 pts close rate on shows</div>
              </div>
            </div>
            <div className="roi-out card">
              <div className="roi-out-row">
                <div className="mono xs ink-mute">CASH FROM THE LIFT</div>
                <div className="roi-out-v">{fmt(revenueLift)}</div>
                <div className="mono sm ink-dim">{extraDealsYr} closes × your average deal</div>
              </div>
            </div>
            <div className="roi-out card">
              <div className="roi-out-row">
                <div className="mono xs ink-mute">PER CLOSER / YR</div>
                <div className="roi-out-v">{fmt(perCloser)}</div>
                <div className="mono sm ink-dim">extra cash each closer brings in</div>
              </div>
            </div>
            <div className="roi-total">
              <div className="roi-total-label">ANNUAL IMPACT // ILLUSTRATIVE</div>
              <div className="roi-total-v">{fmtShort(total)}<span className="roi-total-yr">/yr</span></div>
              <div className="roi-total-bar"><div className="roi-bar-fill" style={{ width: "88%" }} /></div>
              <div className="mono xs ink-dim">Illustration only, not a promise. It assumes a 5-point lift in close rate on shows. Inside our own agency, 4 of 5 teams we tracked raised close rate on shows within 90 days, by 5 to 20 points. One went down. Your call gives you a real baseline.</div>
              <button onClick={onBook} className="btn btn-primary roi-btn">Get your real baseline →</button>
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
    { q: "Is this a done-for-you sales team?", a: "No. We don't supply setters, closers or managers. You get the system your own team runs on: hiring, playbooks, tracking, numbers and pay, all connected. Your team does the selling." },
    { q: "What's included?", a: "Ten apps, set up and connected for you: RevPhlo, the Hiring App, Speed to Lead, AI Call Coaching, Manager OS, phone and DM setter trackers, the QC Dashboard, closer and setter playbooks, Closer Onboarding and the Commission Tracker. Fixes and changes in a shared Slack channel are included too." },
    { q: "We already use GoHighLevel. Does this replace it?", a: "No. We connect to it. GoHighLevel, Stripe, Fathom and Whop plug into your workspace, so your numbers come from the tools you already use. On a different stack? Ask us on the call." },
    { q: "How fast is it live?", a: "Most teams are live within 30 days of kickoff. The clock starts once we have access to your tools." },
    { q: "Who owns it?", a: "Your team gets its own workspace in our hub. Your data and your integrations stay yours. We host and maintain the apps, keep an eye on them so we can fix things fast, and keep improving them." },
    // TODO: Optional price line is not approved. Do not add "Setup starts at $8,000." until Dylan signs off.
    { q: "What does it cost?", a: "One setup fee and one monthly fee, with RevPhlo included. Most teams stay with us 6 to 12 months. We give you an exact price on the call, based on your team size and tools." },
    { q: "What's the guarantee?", a: "If The Sales Team OS doesn't surface at least your setup fee in leaked cash by day 90, we refund the setup fee. If your numbers haven't clearly moved by then, you can walk away from the rest of your term and keep what we built. We'll walk you through the details on the call." },
    { q: "What if our process changes?", a: "It will. Changes and fixes happen in your shared Slack channel and are included. If you need a brand-new app, we scope and price it with you." },
  ]
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="FAQ" title={<>Questions we get<br /><span className="ink-mute">on every call.</span></>} />
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
            <div className="status-dot">NOW BOOKING DISCOVERY CALLS</div>
            <h2 className="display display-xl final-t">Stop being the glue.<br /><em className="italic-neon">Install the system.</em></h2>
            <p className="final-sub">30-minute call. We'll map your team and your tools, show you where the glue is, and tell you exactly what we'd set up. No deck. No pressure.</p>
            <div className="final-ctas">
              <button onClick={onBook} className="btn btn-primary">Book a 30-min call →</button>
              <a href="mailto:sales@systemizedsales.ai" className="btn btn-ghost">sales@systemizedsales.ai</a>
            </div>
            <div className="final-meta"><span>◆ Every app included</span><span>◆ Live in 30 days</span><span>◆ Your data stays yours</span><span>◆ Pays for itself in 90 days, or your setup fee back.</span></div>
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
          <Logo />
          <div className="mono xs ink-mute">the sales team os</div>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <div className="eyebrow">INCLUDED</div>
            {ecosystemModules.slice(0, 5).map(m => (
              <Link key={m.slug} href={m.href}>{m.title}</Link>
            ))}
          </div>
          <div className="footer-col">
            <div className="eyebrow">ALSO INCLUDED</div>
            {ecosystemModules.slice(5).map(m => (
              <Link key={m.slug} href={m.href}>{m.title}</Link>
            ))}
          </div>
          <div className="footer-col">
            <div className="eyebrow">CONTACT</div>
            <a href="mailto:sales@systemizedsales.ai">sales@systemizedsales.ai</a>
            <a href="#cta">Book a call →</a>
            <a href="https://www.revphlo.com" target="_blank" rel="noopener noreferrer">RevPhlo, included in the OS ↗</a>
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
