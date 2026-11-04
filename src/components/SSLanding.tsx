"use client"

import { useEffect, useId, useState } from "react"
import Link from "next/link"
import AuditModal from "./AuditModal"
import IsThisYou from "./IsThisYou"
import Logo from "./Logo"
import { ecosystemModules, faqs, siteStats } from "@/lib/site-data"
import { guideNav } from "@/lib/guide-nav"
import GuideFooterLinks from "./GuideFooterLinks"

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
  const cmd = "> revphlo connect your-sales-team"
  useEffect(() => {
    let i = 0
    // Keep the terminal animation brief and clear.
    const id = setInterval(() => {
      i++
      setTyped(cmd.slice(0, i))
      if (i >= cmd.length) clearInterval(id)
    }, 46)
    return () => clearInterval(id)
  }, [])
  return (
    <section className="hero">
      <div className="hero-bg-grid grid-bg" aria-hidden />
      <div className="hero-glow" aria-hidden />
      <div className="wrap hero-inner">
        <div className="hero-top">
          <span className="status-dot">BUILT FOR INBOUND SALES TEAMS</span>
          <span className="mono ink-mute sm">RevPhlo · The Sales Team OS</span>
        </div>
        <h1 className="display display-xl">
          A six-figure month<br />can hide a<br /><em className="italic-neon">sales problem.</em>
        </h1>
        <p className="hero-sub">
          Find the sales you’re missing and close more of them. RevPhlo connects your sales tracking with the workflows, playbooks, and training your team uses every day. We install it in your business and help your team put it to work—so you know exactly what to do to generate more money.
        </p>
        <div className="hero-terminal-window">
          <div className="twin-top">
            <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
            <span className="twin-title">revphlo · ~/team</span>
            <span className="twin-tag">workflow</span>
          </div>
          <div className="twin-body">
            <div className="twin-line ink-mute">// illustrative workflow: combine instinct with fact.</div>
            <div className="twin-line">{typed}<span className="caret">▊</span></div>
            <div className="twin-line ink-dim">  ▸ connect leads, bookings, shows and cash<span className="twin-tail"><span className="twin-dots-full"> ...... </span><span className="twin-dots-short"> .. </span><span className="ok">ok</span></span></div>
            <div className="twin-line ink-dim">  ▸ compare performance by rep and source<span className="twin-tail"><span className="twin-dots-full"> ......... </span><span className="twin-dots-short"> .. </span><span className="ok">ok</span></span></div>
            <div className="twin-line ink-dim">  ▸ review the calls and follow-ups behind it<span className="twin-tail"><span className="twin-dots-full"> ..... </span><span className="twin-dots-short"> .. </span><span className="ok">ok</span></span></div>
            <div className="twin-line ink-dim">  ▸ give your team a clear priority to work on<span className="twin-tail"><span className="twin-dots-full"> ......... </span><span className="twin-dots-short"> .. </span><span className="ok">ok</span></span></div>
            <div className="twin-line"><span className="ok">✓</span> see what changed, then decide where to focus next</div>
          </div>
        </div>
        <div className="hero-cta-row">
          <button onClick={onBook} className="btn btn-primary">Book a 30-min call →</button>
          <a href="#preview" className="btn btn-ghost">See what's inside</a>
        </div>
        <div className="hero-proof">
          <div className="hero-proof-kicker">Built by the operators behind these agency results</div>
          <div className="hero-results">
            {siteStats.map(s => (
              <div key={s.label} className="hero-result">
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
    { n: "01", t: "Cash is coming in. The picture is incomplete.", d: "The month looks healthy, but your CRM, rep updates and payment reports tell different stories. You can’t confidently say what is working." },
    { n: "02", t: "Some leads never get a real chance", d: "A lead comes in, waits for a call, or gets lost between the setter and closer. You paid to create the opportunity. You need to see what happened next." },
    { n: "03", t: "Booked calls don’t always become conversations", d: "No-shows, cancellations and missed follow-ups quietly cost you sales. A single show-rate number doesn’t tell you where to intervene." },
    { n: "04", t: "One rep keeps outperforming the others", d: "Is it their calls, their follow-up, or the leads they receive? Understanding the difference gives you something specific to coach and repeat." },
    { n: "05", t: "The next move becomes a debate", d: "More leads? Better setters? A new script? Everyone has a theory. You need evidence to decide which problem deserves your attention first." },
    { n: "06", t: "You make a change. Did it help?", d: "Without a reliable baseline and a way to review the result, it’s hard to know whether your decision improved performance or just changed the conversation." },
  ]
  return (
    <section id="problem" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="THE PROBLEM" title={<>Cash is coming in.<br /><em className="italic-neon">What are you missing?</em></>} />
        <p className="results-lead">Leads are coming in. Calls are getting booked. Your team is collecting cash. You know there’s room to improve. Finding the right place to focus takes a clearer picture.</p>
        <div className="problem-grid">
          {pains.map(p => (
            <div key={p.n} className="pain card reveal">
              <div className="pain-n">{p.n}</div>
              <div className="pain-t">{p.t}</div>
              <div className="pain-d">{p.d}</div>
            </div>
          ))}
        </div>
        <div className="problem-bottom ink-mute">// your instincts, backed by evidence. your team, clear on the next move.</div>
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { n: "01", t: "Understand", time: "YOUR STARTING POINT", d: "We map your funnel, your team, your tools and the decisions you’re struggling to make. Together, we identify gaps in tracking and process and agree on what the implementation needs to address.", out: ["Your sales process, mapped", "Reporting gaps identified", "Implementation scope agreed"], color: "var(--neon)" },
    { n: "02", t: "Install & train", time: "IMPLEMENTATION", d: "We connect your tools, migrate your sales assets and adapt our proven workflows to your business. We help correct weak processes and train your owner, sales leader and reps to use the system.", out: ["Connected tracking and workflows", "Playbooks, SOPs and walkthroughs", "Your team trained on the system"], color: "var(--blue)" },
    { n: "03", t: "Put it to work", time: "ONGOING GUIDANCE", d: "Your team uses the numbers to investigate missed opportunities, choose a priority and follow through. Dedicated Slack support and weekly office hours help you use RevPhlo and work through questions as they come up.", out: ["Dedicated Slack support", "Weekly group office hours", "Review the impact of your decisions"], color: "var(--amber)" },
  ]
  return (
    <section id="how" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="HOW IT WORKS" title={<>Three steps.<br /><span className="ink-mute">From a clearer picture to a better next move.</span></>} />
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
          <div className="mono xs ink-mute" style={{ marginBottom: 14 }}>IMPLEMENTATION + SUPPORT</div>
          <h3 className="how-step-t" style={{ marginBottom: 14 }}>Installed in your business. Put to work by your team.</h3>
          <p className="how-step-d">You get the tracking, workflows and operating knowledge together. We help your team understand the numbers, use the playbooks and build the habits that turn a missed opportunity into action.</p>
          <p className="how-step-d" style={{ marginBottom: 0 }}>Your team owns the selling and day-to-day management. We provide implementation, training, documentation, Slack support and weekly office hours to help them use the system well.</p>
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
        <SectionHeader eyebrow="THE SYSTEM" title={<>Visibility. Execution. Guidance.<br /><span className="ink-mute">Connected in RevPhlo.</span></>} />
        <div className="feat-grid">
          {ecosystemModules.map(m => {
            const meta = cats[m.slug] ?? { color: "var(--neon)", icon: "◆" }
            return (
              <Link key={m.slug} href={m.href} className="feat card reveal">
                <div className="feat-top">
                  <span className="feat-icon" style={{ color: meta.color, borderColor: meta.color }}>{meta.icon}</span>
                  <span className="mono xs" style={{ color: meta.color, letterSpacing: "0.14em" }}>PART</span>
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
    { id: "cash", label: "Sales Reporting", color: "var(--neon)" },
    { id: "pipeline", label: "Setter EOD", color: "var(--blue)" },
    { id: "coaching", label: "Commissions", color: "var(--amber)" },
    { id: "health", label: "Hiring", color: "var(--coral)" },
  ] as const
  return (
    <section id="preview" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="INSIDE REVPHLO" title={<>See the numbers.<br /><em className="italic-neon">Know where to look next.</em></>} />
        <div className="preview-shell">
          <div className="preview-chrome">
            <span className="dot dot-r" /><span className="dot dot-y" /><span className="dot dot-g" />
            <span className="mono sm ink-mute">yourteam · revphlo / {tabs.find(t => t.id === tab)?.label}</span>
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

function Results() {
  const cases = [
    {
      name: "Budgetdog",
      who: "Brennan Schlagbaum, Founder",
      headline: "From $400-500K on a good month to back-to-back $1M months.",
      story: "During our agency engagement, Budgetdog grew from $400K–$500K on a good month to back-to-back $1M months. Those million-dollar months came before RevPhlo was implemented in June 2026. This is the operating experience behind the offer.",
      nums: [
        { n: "~$100K", l: "Average monthly revenue, up within 3-4 months" },
        { n: "8-9 months", l: "To the first $1M month" },
        { n: "19.1% → 9.6%", l: "No-shows cut in half" },
        { n: "24.7% → 31.7%", l: "Close rate, up" },
      ],
    },
    {
      name: "Woobie",
      who: "Cole Tenney, CEO",
      headline: "$300K to $1.1M a month.",
      story: "Our agency team helped rebuild the sales process around better lead qualification and handoffs. RevPhlo also exposed a measurement problem: the old tracker reported a 25% show rate; the measured rate was 66%. That was a reporting correction.",
      nums: [
        { n: "Within 8 months", l: "First $1M month" },
        { n: "41.5%", l: "Of booked prospects closed, Aug-Oct 2026" },
        { n: "25% → 66%", l: "Accurate numbers. Old tracker said 25% show rate. The system measured 66%." },
      ],
    },
    {
      name: "Infinite Heart Health",
      who: "",
      headline: "Show rate doubled in 90 days.",
      story: "During our agency work, the team tightened its confirmation process and improved show rate from July to September 2026. The result reflects the work of the people and processes involved.",
      nums: [
        { n: "26% → 55%", l: "Show rate, Jul to Sep 2026" },
      ],
    },
    {
      name: "The Listings Lab",
      who: "",
      headline: "10.7% to 30.8% close rate in 90 days.",
      story: "During our agency engagement, close rate on held calls moved from 10.7% to 30.8% in 90 days. Booked-call close rate went from 6% to 19% over those same months.",
      nums: [
        { n: "6% → 19%", l: "Tripled booked-call close rate" },
        { n: "90 days", l: "For the 10.7% to 30.8% close rate" },
      ],
    },
  ]
  return (
    <section id="results" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="THE EXPERIENCE BEHIND REVPHLO" title={<>Experience earned<br /><em className="italic-neon">running real sales teams.</em></>} />
        <p className="results-lead">These are results from Systemized Sales agency engagements, where our team worked on sales operations with the client. They show the experience behind RevPhlo’s workflows and playbooks. They are not results from purchasing the standalone system alone.</p>
        <div className="case-list">
          {cases.map(item => (
            <article key={item.name} className="case card">
              <div className="case-copy">
                <div className="case-name">{item.name}</div>
                {item.who ? <div className="case-who">{item.who}</div> : null}
                <h3 className="case-headline">{item.headline}</h3>
                <p className="case-story">{item.story}</p>
              </div>
              <ul className="case-nums">
                {item.nums.map(stat => (
                  <li key={stat.l}>
                    <span className="case-num">{stat.n}</span>
                    <span className="case-num-l">{stat.l}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
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
            <RoiSlider label="Average cash collected per new customer" v={acv} set={setAcv} min={500} max={50000} step={500} prefix="$" format={n => n.toLocaleString()} />
          </div>
          <div className="roi-outputs">
            <div className="roi-out card">
              <div className="roi-out-row">
                <div className="mono xs ink-mute">EXTRA CLOSES / YR</div>
                <div className="roi-out-v">{extraDealsYr}</div>
                <div className="mono sm ink-dim">at +5 percentage points on held calls</div>
              </div>
            </div>
            <div className="roi-out card">
              <div className="roi-out-row">
                <div className="mono xs ink-mute">ILLUSTRATIVE EXTRA CASH</div>
                <div className="roi-out-v">{fmt(revenueLift)}</div>
                <div className="mono sm ink-dim">{extraDealsYr} closes × cash per new customer</div>
              </div>
            </div>
            <div className="roi-out card">
              <div className="roi-out-row">
                <div className="mono xs ink-mute">PER CLOSER / YR</div>
                <div className="roi-out-v">{fmt(perCloser)}</div>
                <div className="mono sm ink-dim">illustrative extra cash, before costs</div>
              </div>
            </div>
            <div className="roi-total">
              <div className="roi-total-label">ANNUAL IMPACT // ILLUSTRATIVE</div>
              <div className="roi-total-v">{fmtShort(total)}<span className="roi-total-yr">/yr</span></div>
              <div className="roi-total-bar" aria-hidden="true"><div className="roi-bar-fill" style={{ width: "88%" }} /></div>
              <div className="mono xs ink-dim">Illustration, not a forecast. Assumes 48 selling weeks, the same held-call volume and a 5-percentage-point increase in close rate. Extra closes are rounded to a whole number. Cash is before costs, fees and refunds; it is not profit or RevPhlo ROI.</div>
              <button onClick={onBook} className="btn btn-primary roi-btn">Talk through your opportunity →</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function RoiSlider({ label, v, set, min, max, step, prefix = "", format }: { label: string; v: number; set: (n: number) => void; min: number; max: number; step: number; prefix?: string; format?: (n: number) => string }) {
  const id = useId()
  const display = format ? format(v) : v
  return (
    <div className="roi-slider">
      <div className="roi-slider-top">
        <label htmlFor={id} className="roi-slider-label">{label}</label>
        <span className="roi-slider-v">{prefix}{display}</span>
      </div>
      <input id={id} type="range" className="roi-range" min={min} max={max} step={step} value={v} onChange={e => set(Number(e.target.value))} />
    </div>
  )
}

function Faq() {
  const qs = faqs
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="FAQ" title={<>Questions we get<br /><span className="ink-mute">on every call.</span></>} />
        <div className="faq-list">
          {qs.map((item, i) => (
            <div key={i} className={`faq-item ${open === i ? "open" : ""}`}>
              <button className="faq-q" aria-expanded={open === i} aria-controls={`faq-answer-${i}`} onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="faq-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="faq-q-t">{item.q}</span>
                <span className="faq-plus">{open === i ? "−" : "+"}</span>
              </button>
              <div id={`faq-answer-${i}`} className="faq-a-wrap" inert={open !== i}><div className="faq-a">{item.a}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Guides() {
  return (
    <section id="guides" className="section">
      <div className="wrap">
        <div className="section-header">
          <div className="eyebrow">GUIDES</div>
          <h2 className="display display-md">Explore the processes behind better performance.</h2>
        </div>
        <div className="guide-index">
          {guideNav.map(item => (
            <Link key={item.path} href={item.path} className="guide-index-card card">
              <div className="guide-index-t">{item.title}</div>
              <div className="related-card-cta">READ →</div>
            </Link>
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
            <h2 className="display display-xl final-t">Find the sales<br /><em className="italic-neon">you’re missing.</em></h2>
            <p className="final-sub">In 30 minutes, we’ll talk through your sales process, show you how RevPhlo works and map what an implementation could look like for your team. You’ll leave clear on whether it fits and what comes next.</p>
            <div className="final-ctas">
              <button onClick={onBook} className="btn btn-primary">Book a 30-min call →</button>
              <a href="mailto:sales@systemizedsales.ai" className="btn btn-ghost">sales@systemizedsales.ai</a>
            </div>
            <div className="final-meta"><span>◆ Installed for your team</span><span>◆ Training and playbooks</span><span>◆ Dedicated Slack support</span><span>◆ Weekly office hours</span></div>
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
          <div className="mono xs ink-mute">RevPhlo · The Sales Team OS</div>
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
          <GuideFooterLinks />
          <div className="footer-col">
            <div className="eyebrow">CONTACT</div>
            <a href="mailto:sales@systemizedsales.ai">sales@systemizedsales.ai</a>
            <a href="#cta">Book a call →</a>
            <a href="https://www.revphlo.com" target="_blank" rel="noopener noreferrer">Explore RevPhlo ↗</a>
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
      <IsThisYou onBook={openModal} />
      <Problem />
      <HowItWorks />
      <Apps />
      <DashPreview />
      <Results />
      <Roi onBook={openModal} />
      <Faq />
      <Guides />
      <FinalCta onBook={openModal} />
      <Footer />
      <AuditModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
