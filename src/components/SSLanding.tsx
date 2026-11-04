"use client"

import { useEffect, useId, useState } from "react"
import Link from "next/link"
import AuditModal from "./AuditModal"
import Logo from "./Logo"
import { ecosystemModules, faqs, siteStats } from "@/lib/site-data"
import { guideNav } from "@/lib/guide-nav"
import GuideFooterLinks from "./GuideFooterLinks"
import { LazyMotion, domAnimation, MotionConfig } from "motion/react"
import { SalesOpportunityExample, SalesLeakMap, ProductScreenTour, InstallIllustration, VisualIcon } from "./LandingVisuals"

function Header({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap site-header-inner">
        <Link href="/" className="brand">
          <Logo />
        </Link>
        <nav className="site-nav">
          <a href="#problem">WHY REVPHLO</a>
          <a href="#how">HOW IT WORKS</a>
          <a href="#apps">WHAT'S INCLUDED</a>
          <a href="#results">RESULTS</a>
          <a href="#faq">FAQ</a>
        </nav>
        <div className="site-cta">
          <a href="mailto:sales@systemizedsales.ai" className="link-dim">sales@systemizedsales.ai</a>
          <button onClick={onBook} className="btn btn-primary">Book a demo →</button>
        </div>
      </div>
    </header>
  )
}

function Hero({ onBook }: { onBook: () => void }) {
  return (
    <section className="hero visual-hero">
      <div className="hero-bg-grid grid-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-inner">
        <div className="hero-top">
          <span className="status-dot">FOR HIGH-TICKET SALES TEAMS</span>
          <span className="mono ink-mute sm">RevPhlo</span>
        </div>
        <div className="hero-split">
          <div className="hero-copy">
            <h1 className="display display-xl">A six-figure month<br />can hide a<br /><em className="italic-neon">sales problem.</em></h1>
            <p className="hero-sub">RevPhlo is a sales system that shows where leads, calls and follow-ups are slipping—and gives your team the playbooks and coaching tools to close more of those opportunities.</p>
            <div className="hero-cta-row">
              <button onClick={onBook} className="btn btn-primary">Book a demo →</button>
              <a href="#overview" className="hero-watch"><VisualIcon name="play" />Watch the overview</a>
            </div>
            <p className="hero-fit-note">Installed for your business. Your team trained to use it.</p>
          </div>
          <SalesOpportunityExample />
        </div>
        <div className="hero-proof">
          <div className="hero-proof-kicker">Sales teams we’ve helped through our agency work</div>
          <div className="hero-results">{siteStats.map(s => <div key={s.label} className="hero-result"><div className="stat-n">{s.value}</div><div className="stat-label">{s.label}</div></div>)}</div>
        </div>
      </div>
    </section>
  )
}

function Overview() {
  return (
    <section id="overview" className="section overview-section">
      <div className="wrap overview-grid">
        <div className="overview-player">
          <div className="visual-card-top"><span>See RevPhlo in action</span><VisualIcon name="play" /></div>
          <video controls playsInline preload="none" poster="/media/revphlo-overview-poster.webp" aria-label="RevPhlo overview, narrated by Dylan" width="1280" height="720">
            <source src="/media/revphlo-overview.mp4" type="video/mp4" />
            <track kind="captions" src="/media/revphlo-overview.vtt" srcLang="en" label="English" default />
            Your browser does not support video. <a href="/media/revphlo-overview.mp4">Watch the RevPhlo overview.</a>
          </video>
          <div className="video-note">Product walkthrough · Demo account shown</div>
        </div>
        <div className="overview-copy">
          <h2 className="display display-md">Your numbers should tell you<br /><em className="italic-neon">what to work on.</em></h2>
          <p>More leads? Better follow-up? A rep who needs coaching? Get the evidence to choose where to focus and the processes to help your team improve.</p>
          <div className="fit-row"><VisualIcon name="people" /><div><strong>You lead the sales team</strong><span>Use a repeatable process to manage your reps.</span></div></div>
          <div className="fit-row"><VisualIcon name="target" /><div><strong>You have a sales manager</strong><span>Give them the numbers and tools to lead better.</span></div></div>
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ eyebrow, title }: { eyebrow?: string; title: React.ReactNode }) {
  return (
    <div className="section-header">
      {eyebrow && <div className="eyebrow">{eyebrow}</div>}
      <h2 className="display display-lg">{title}</h2>
    </div>
  )
}

function Problem() {
  return (
    <section id="problem" className="section">
      <div className="wrap">
        <SectionHeader title={<>You paid for the lead.<br /><em className="italic-neon">Where did the sale go?</em></>} />
        <p className="visual-section-lead">Leads sit untouched. Booked calls don’t happen. Follow-ups stop too soon. See which part of your sales process needs attention first.</p>
        <SalesLeakMap />
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Connect your sales data.", description: "We map your sales process and connect your tools, bringing leads, calls and collected cash into a shared view." },
    { n: "02", title: "Train your team.", description: "We bring your scripts and sales assets into the system, adapt our playbooks and train your reps and sales leader." },
    { n: "03", title: "Improve week by week.", description: "Use the numbers to choose a priority, coach your reps and review the result. We help your team build the habit." },
  ]
  return (
    <section id="how" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="IMPLEMENTATION & SUPPORT INCLUDED" title={<>We install it.<br /><em className="italic-neon">Your team puts it to work.</em></>} />
        <div className="install-grid">{steps.map((step, i) => <article className="install-card card" key={step.n}>
          <div className="install-top"><span>{step.n}</span></div>
          <InstallIllustration step={i as 0 | 1 | 2} />
          <h3>{step.title}</h3><p>{step.description}</p>
        </article>)}</div>
        <div className="support-strip"><span><VisualIcon name="support" />Dedicated Slack support</span><span><VisualIcon name="people" />Weekly group office hours</span><span><VisualIcon name="book" />SOPs & video walkthroughs</span></div>
      </div>
    </section>
  )
}

function Apps() {
  return (
    <section id="apps" className="section">
      <div className="wrap">
        <SectionHeader title={<>The numbers.<br /><em className="italic-neon">The tools to improve them.</em></>} />
        <div className="outcome-grid">
          <article className="outcome-card"><VisualIcon name="chart" /><h3>See where sales are slipping.</h3><p>Compare reps, lead sources, show rates, close rates and collected cash.</p></article>
          <article className="outcome-card"><VisualIcon name="book" /><h3>Give reps a process to follow.</h3><p>Playbooks, call coaching, onboarding and daily accountability.</p></article>
          <article className="outcome-card"><VisualIcon name="support" /><h3>Get help using the system.</h3><p>Hands-on setup, team training, Slack support and weekly office hours.</p></article>
        </div>
        <div id="preview" className="product-tour-anchor"><ProductScreenTour /></div>
        <details className="module-details">
          <summary>View the full toolkit <span aria-hidden="true">+</span></summary>
          <div className="module-link-grid">{ecosystemModules.map(item => <Link key={item.slug} href={item.href}><span>{item.title}</span><VisualIcon name="arrow" /></Link>)}</div>
        </details>
      </div>
    </section>
  )
}

function Results() {
  const cases = [
    { name: "Budgetdog", from: "$400–500K", to: "$1M", label: "MONTHLY REVENUE", note: "Back-to-back $1M months", detail: "Agency engagement. Budgetdog grew from $400K–$500K on a good month to back-to-back $1M months. Those months came before RevPhlo’s June 2026 rollout." },
    { name: "Woobie", from: "$300K", to: "$1.1M", label: "MONTHLY REVENUE", note: "First $1M month within 8 months", detail: "Agency engagement involving changes to qualification and handoffs. RevPhlo also corrected a show-rate measurement from 25% to 66%; that correction was not a performance lift." },
    { name: "Infinite Heart Health", from: "26%", to: "55%", label: "SHOW RATE", note: "July → September 2026", detail: "Agency engagement. Our team worked with the client on the confirmation process. The result reflects the people and processes involved." },
    { name: "The Listings Lab", from: "10.7%", to: "30.8%", label: "CLOSE RATE ON HELD CALLS", note: "Over 90 days", detail: "Agency engagement. Close rate on held calls moved from 10.7% to 30.8%; booked-call close rate moved from 6% to 19% over the same period." },
  ]
  return (
    <section id="results" className="section">
      <div className="wrap">
        <SectionHeader title={<>Built by people<br /><em className="italic-neon">who run sales teams.</em></>} />
        <p className="visual-section-lead">These are results from Systemized Sales agency engagements—the operating experience behind RevPhlo’s playbooks.</p>
        <div className="proof-grid">{cases.map(item => <article key={item.name} className="proof-card card">
          <div className="proof-card-top"><h3>{item.name}</h3><span className="demo-tag">AGENCY RESULT</span></div>
          <div className="mono xs ink-mute">{item.label}</div>
          <div className="proof-change"><span>{item.from}</span><VisualIcon name="arrow" /><strong>{item.to}</strong></div>
          <p className="proof-note">{item.note}{item.name === "Budgetdog" && <span>Achieved before RevPhlo’s June 2026 rollout.</span>}</p>
          <details><summary>About this engagement</summary><p>{item.detail}</p></details>
        </article>)}</div>
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
  const fmt = (n: number) => "$" + Math.round(n).toLocaleString()

  return (
    <section id="roi" className="section">
      <div className="wrap">
        <SectionHeader title={<>What could a better close rate <em className="italic-neon">be worth to you?</em></>} />
        <div className="roi-grid">
          <div className="roi-inputs card">
            <div className="mono xs ink-mute roi-card-label">YOUR NUMBERS</div>
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
            <div className="roi-total" aria-live="polite">
              <div className="roi-total-label">ILLUSTRATIVE EXTRA CASH / YEAR</div>
              <div className="roi-total-v">{fmt(revenueLift)}</div>
              <div className="roi-formula">{extraDealsYr} extra closes × {fmt(acv)} collected per customer</div>
              <div className="mono xs ink-dim">Illustration, not a forecast. Assumes 48 selling weeks, the same held-call volume and a 5-percentage-point increase in close rate. Extra closes are rounded to a whole number. Cash is before costs, fees and refunds; it is not profit or RevPhlo ROI.</div>
              <button onClick={onBook} className="btn btn-primary roi-btn">Talk through your numbers →</button>
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
        <SectionHeader title={<>Your questions,<br /><em className="italic-neon">answered.</em></>} />
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
    <section id="guides" className="resources-section">
      <div className="wrap">
        <details className="module-details resource-details">
          <summary>Resources for sales leaders <span aria-hidden="true">+</span></summary>
          <div className="guide-index">{guideNav.map(item => <Link key={item.path} href={item.path} className="guide-index-card card"><div className="guide-index-t">{item.title}</div><div className="related-card-cta">Read guide →</div></Link>)}</div>
        </details>
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
            <h2 className="display display-xl final-t">Find the sales<br /><em className="italic-neon">you’re missing.</em></h2>
            <p className="final-sub">On a 30-minute call, we’ll look at how your team handles leads and booked calls, show you RevPhlo and explain how we’d install it for your business.</p>
            <div className="final-ctas">
              <button onClick={onBook} className="btn btn-primary">Book a demo →</button>
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
          <GuideFooterLinks compact />
          <div className="footer-col">
            <div className="eyebrow">CONTACT</div>
            <a href="mailto:sales@systemizedsales.ai">sales@systemizedsales.ai</a>
            <a href="#cta">Book a demo →</a>
            <a href="https://www.revphlo.com" target="_blank" rel="noopener noreferrer">Explore RevPhlo ↗</a>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span className="ink-mute">© 2026 SYSTEMIZED SALES AI</span>
        <span className="ink-mute">BUILT FOR HIGH-TICKET SALES TEAMS</span>
        <span className="ink-mute">IMPLEMENTATION · TRAINING · SUPPORT</span>
      </div>
    </footer>
  )
}

export default function SSLanding() {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)
  return (
    <LazyMotion features={domAnimation} strict>
      <MotionConfig reducedMotion="user">
        <div className="visual-landing">
          <Header onBook={openModal} />
          <Hero onBook={openModal} />
          <Overview />
          <Problem />
          <HowItWorks />
          <Apps />
          <Results />
          <Roi onBook={openModal} />
          <Faq />
          <FinalCta onBook={openModal} />
          <Guides />
          <Footer />
          <AuditModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </MotionConfig>
    </LazyMotion>
  )
}
