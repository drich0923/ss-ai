"use client"

import { useEffect, useId, useState } from "react"
import Link from "next/link"
import AuditModal from "./AuditModal"
import Logo from "./Logo"
import { ecosystemModules, faqs, siteStats } from "@/lib/site-data"
import { guideNav } from "@/lib/guide-nav"
import GuideFooterLinks from "./GuideFooterLinks"
import { LazyMotion, domAnimation, MotionConfig } from "motion/react"
import { HeroProductStack, SalesLeakMap, ProductScreenTour, InstallIllustration, VisualIcon } from "./LandingVisuals"

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
  return (
    <section className="hero visual-hero">
      <div className="hero-bg-grid grid-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap hero-inner">
        <div className="hero-top">
          <span className="status-dot">BUILT FOR INBOUND SALES TEAMS</span>
          <span className="mono ink-mute sm">RevPhlo · The Sales Team OS</span>
        </div>
        <div className="hero-split">
          <div className="hero-copy">
            <h1 className="display display-xl">A six-figure month<br />can hide a<br /><em className="italic-neon">sales problem.</em></h1>
            <p className="hero-sub">Find the sales you’re missing and close more of them. We install the tracking, playbooks and workflows—and help your team put them to work.</p>
            <div className="hero-cta-row">
              <button onClick={onBook} className="btn btn-primary">Book a 30-min call →</button>
              <a href="#overview" className="hero-watch"><VisualIcon name="play" />Watch in 58 seconds</a>
            </div>
            <p className="hero-fit-note">For established businesses with setters, closers and inbound leads.</p>
          </div>
          <HeroProductStack />
        </div>
        <div className="hero-proof">
          <div className="hero-proof-kicker">Built by the operators behind these agency results</div>
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
          <div className="visual-card-top"><span className="mono xs ink-mute">THE IDEA IN 58 SECONDS</span><span className="demo-tag">SOUND ON</span></div>
          <video controls playsInline preload="none" poster="/media/revphlo-overview-poster.webp" aria-label="RevPhlo overview, narrated by Dylan" width="1280" height="720">
            <source src="/media/revphlo-overview.mp4" type="video/mp4" />
            <track kind="captions" src="/media/revphlo-overview.vtt" srcLang="en" label="English" default />
            Your browser does not support video. <a href="/media/revphlo-overview.mp4">Watch the RevPhlo overview.</a>
          </video>
          <div className="video-note">Actual product screens · Illustrative demo data</div>
        </div>
        <div className="overview-copy">
          <div className="eyebrow">YOUR INSTINCTS. BACKED BY FACT.</div>
          <h2 className="display display-md">You have a feel for it.<br /><em className="italic-neon">Now see where to focus.</em></h2>
          <p>Whether you run the team or have a sales leader, RevPhlo connects the numbers with the work that improves them.</p>
          <div className="fit-row"><VisualIcon name="people" /><div><strong>You run the team</strong><span>Give yourself a repeatable way to lead it.</span></div></div>
          <div className="fit-row"><VisualIcon name="target" /><div><strong>You have a sales leader</strong><span>Give them clearer evidence and a shared process.</span></div></div>
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
  return (
    <section id="problem" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="WHERE SALES GET MISSED" title={<>The money is in<br /><em className="italic-neon">what happens next.</em></>} />
        <p className="visual-section-lead">The lead came in. The call got booked. Somewhere along the way, the opportunity stalled. Pick a gap to explore.</p>
        <SalesLeakMap />
      </div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Connect the picture.", description: "We map your funnel, connect your tools and correct gaps in tracking and process.", note: "YOUR FUNNEL + YOUR DATA" },
    { n: "02", title: "Equip your team.", description: "We migrate your sales assets, adapt the playbooks and train your team to use the system.", note: "PLAYBOOKS + TRAINING" },
    { n: "03", title: "Work the priority.", description: "Your team chooses what to improve, takes action and reviews what changed. We help along the way.", note: "EXECUTION + GUIDANCE" },
  ]
  return (
    <section id="how" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="IMPLEMENTATION INCLUDED" title={<>Installed for your business.<br /><em className="italic-neon">Put to work by your team.</em></>} />
        <div className="install-grid">{steps.map((step, i) => <article className="install-card card" key={step.n}>
          <div className="install-top"><span>{step.n}</span><span>{step.note}</span></div>
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
        <SectionHeader eyebrow="ONE CONNECTED SYSTEM" title={<>See the gap.<br /><em className="italic-neon">Give your team a way to close it.</em></>} />
        <div className="outcome-grid">
          <article className="outcome-card"><VisualIcon name="chart" /><span className="eyebrow">01 / VISIBILITY</span><h3>Know where to look.</h3><p>Sales reporting · Rep comparisons · Funnel performance</p></article>
          <article className="outcome-card"><VisualIcon name="book" /><span className="eyebrow">02 / EXECUTION</span><h3>Know what to work on.</h3><p>Call coaching · Playbooks · Daily workflows</p></article>
          <article className="outcome-card"><VisualIcon name="support" /><span className="eyebrow">03 / GUIDANCE</span><h3>Help putting it to work.</h3><p>Implementation · Team training · Ongoing support</p></article>
        </div>
        <div id="preview" className="product-tour-anchor"><ProductScreenTour /></div>
        <details className="module-details">
          <summary>Explore all 10 parts of the system <span aria-hidden="true">+</span></summary>
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
        <SectionHeader eyebrow="THE OPERATORS BEHIND REVPHLO" title={<>Built from experience.<br /><em className="italic-neon">Earned on real sales teams.</em></>} />
        <p className="visual-section-lead">Results from our agency engagements. The operating experience behind the system, rather than outcomes from buying RevPhlo alone.</p>
        <div className="proof-grid">{cases.map(item => <article key={item.name} className="proof-card card">
          <div className="proof-card-top"><h3>{item.name}</h3><span className="demo-tag">AGENCY RESULT</span></div>
          <div className="mono xs ink-mute">{item.label}</div>
          <div className="proof-change"><span>{item.from}</span><VisualIcon name="arrow" /><strong>{item.to}</strong></div>
          <p className="proof-note">{item.note}{item.name === "Budgetdog" && <span>Achieved before RevPhlo’s June 2026 rollout.</span>}</p>
          <details><summary>Context behind the result</summary><p>{item.detail}</p></details>
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
            <div className="roi-total" aria-live="polite">
              <div className="roi-total-label">ILLUSTRATIVE EXTRA CASH / YEAR</div>
              <div className="roi-total-v">{fmt(revenueLift)}</div>
              <div className="roi-formula">{extraDealsYr} extra closes × {fmt(acv)} collected per customer</div>
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
  const [expanded, setExpanded] = useState(false)
  const featured = guideNav.slice(0, 4)
  return (
    <section id="guides" className="section">
      <div className="wrap">
        <SectionHeader eyebrow="GO DEEPER" title={<>The thinking behind<br /><span className="ink-mute">better sales operations.</span></>} />
        <div id="guide-library" className="guide-index">{(expanded ? guideNav : featured).map(item => <Link key={item.path} href={item.path} className="guide-index-card card"><div className="guide-index-t">{item.title}</div><div className="related-card-cta">READ →</div></Link>)}</div>
        <button className="text-toggle" aria-expanded={expanded} aria-controls="guide-library" onClick={() => setExpanded(!expanded)}>{expanded ? "Show fewer guides −" : `Browse all ${guideNav.length} guides +`}</button>
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
            <p className="final-sub">See RevPhlo in action, talk through your sales process and find out what an implementation would look like for your team.</p>
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
          <GuideFooterLinks compact />
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
          <Guides />
          <FinalCta onBook={openModal} />
          <Footer />
          <AuditModal open={modalOpen} onClose={() => setModalOpen(false)} />
        </div>
      </MotionConfig>
    </LazyMotion>
  )
}
