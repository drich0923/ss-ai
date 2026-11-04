"use client"

import { useId, useRef, useState } from "react"
import Image from "next/image"
import { AnimatePresence, m, useReducedMotion } from "motion/react"

export type VisualIconName = "chart" | "people" | "call" | "book" | "target" | "check" | "connect" | "support" | "arrow" | "play"

export function VisualIcon({ name, className = "" }: { name: VisualIconName; className?: string }) {
  const paths: Record<VisualIconName, React.ReactNode> = {
    chart: <><path d="M4 4v16h17M8 15v-4m5 4V7m5 8v-6" /></>,
    people: <><circle cx="9" cy="8" r="3" /><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 5a3 3 0 0 1 0 6m2 3a5 5 0 0 1 3 4v2" /></>,
    call: <><path d="m7 3 3 5-2 2a15 15 0 0 0 6 6l2-2 5 3-1 4C10 22 2 14 3 4Z" /></>,
    book: <><path d="M12 5c-3-2-6-2-9-1v15c3-1 6-1 9 1 3-2 6-2 9-1V4c-3-1-6-1-9 1v15M6 8h3m-3 4h3m6-4h3m-3 4h3" /></>,
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="m12 12 9-9m-4 0h4v4" /></>,
    check: <path d="m5 12 4 4L20 5" />,
    connect: <><rect x="2" y="8" width="6" height="8" rx="2" /><rect x="16" y="2" width="6" height="6" rx="2" /><rect x="16" y="16" width="6" height="6" rx="2" /><path d="M8 12h4V5h4m-4 7v7h4" /></>,
    support: <><path d="M4 14v-3a8 8 0 0 1 16 0v3M4 11H2v7h5v-7Zm16 0h2v7h-5v-7ZM20 18c0 3-3 4-7 4" /></>,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    play: <path d="m9 5 11 7-11 7Z" />,
  }
  return <svg className={`visual-icon ${className}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>
}

export const landingScreens = [
  { id: "reporting", label: "Reporting", src: "/media/revphlo-analytics.webp", alt: "RevPhlo demo dashboard with collected cash, close rate, show rate and source reporting.", title: "One view of sales performance.", description: "Connect activity, outcomes and collected cash.", icon: "chart" },
  { id: "team", label: "Team performance", src: "/media/revphlo-team.webp", alt: "RevPhlo demo comparison of closers by calls, shows, closes and collected cash.", title: "See the differences between reps.", description: "Compare results, then investigate the calls behind them.", icon: "people" },
  { id: "coaching", label: "Call coaching", src: "/media/revphlo-coaching.webp", alt: "RevPhlo demo call coaching review queue, scores and coaching tools.", title: "Turn a number into something to coach.", description: "Review calls and give the rep a specific next move.", icon: "call" },
  { id: "playbook", label: "Playbooks", src: "/media/revphlo-playbook.webp", alt: "RevPhlo demo closer playbook with the team's sales script.", title: "Give the team a process to follow.", description: "Scripts, SOPs and training in the same workspace.", icon: "book" },
  { id: "manager", label: "Manager workspace", src: "/media/revphlo-manager.webp", alt: "RevPhlo demo manager workspace with KPIs, a performance follow-up and worklist.", title: "Keep the next priority in view.", description: "Make the work visible, then review what changed.", icon: "target" },
] as const

// Original Motion implementation of the layered-card pattern explored in Componentry.
export function HeroProductStack() {
  const [active, setActive] = useState(0)
  const reduced = useReducedMotion()
  const shots = [landingScreens[4], landingScreens[0], landingScreens[3]]
  const selected = shots[active]
  return (
    <div className="hero-product">
      <div className="hero-product-halo" aria-hidden="true" />
      <div className="product-stack">
        {shots.map((shot, index) => {
          const depth = (index - active + shots.length) % shots.length
          return (
            <m.div key={shot.id} className={`stack-window stack-depth-${depth}`} style={{ zIndex: 3 - depth }} initial={false}
              animate={{ y: depth * -22, x: depth * 14, rotate: depth === 0 ? 0 : depth === 1 ? 3 : -3, scale: 1 - depth * 0.025 }}
              transition={reduced ? { duration: 0 } : { type: "spring", stiffness: 210, damping: 28 }} aria-hidden={depth > 0}>
              <div className="stack-chrome"><span className="stack-dots" aria-hidden="true">● ● ●</span><span>RevPhlo / {shot.label}</span></div>
              <Image src={shot.src} alt={depth === 0 ? shot.alt : ""} width={1920} height={1080} priority={depth === 0} loading="eager" sizes="(max-width: 850px) 90vw, 520px" />
            </m.div>
          )
        })}
      </div>
      <div className="stack-insight">
        <span className="insight-icon"><VisualIcon name="target" /></span>
        <div><span className="mono xs ink-mute">FROM INSTINCT TO ACTION</span><strong>See it. Work on it. Measure it.</strong></div>
        <span className="insight-check"><VisualIcon name="check" /></span>
      </div>
      <div className="stack-selector" aria-label="Product screen previews">
        {shots.map((shot, i) => <button key={shot.id} onClick={() => setActive(i)} aria-pressed={active === i} aria-label={`Show ${shot.label} preview`} className={active === i ? "is-on" : ""}><span />{shot.label}</button>)}
      </div>
      <p className="stack-footnote">{selected.label} · Illustrative demo data</p>
    </div>
  )
}

const leaks = [
  { id: "leads", label: "Unworked leads", stage: 1, question: "The lead came in. Did anyone reach them?", action: "Review response time and follow-up ownership.", icon: "call" },
  { id: "shows", label: "No-shows", stage: 3, question: "The call was booked. Why didn’t it happen?", action: "Review confirmations, cancellations and rebooking.", icon: "people" },
  { id: "followup", label: "Missed follow-ups", stage: 4, question: "The call went well. What happened next?", action: "Review lost-deal reasons and the next follow-up.", icon: "target" },
] as const

export function SalesLeakMap() {
  const [active, setActive] = useState(0)
  const base = useId()
  const buttons = useRef<(HTMLButtonElement | null)[]>([])
  const reduced = useReducedMotion()
  const leak = leaks[active]
  const stages = ["Lead", "Contact", "Booking", "Held call", "Sale"]
  return (
    <div className="leak-map card">
      <div className="visual-card-top"><span className="mono xs ink-mute">FOLLOW THE OPPORTUNITY</span><span className="demo-tag">ILLUSTRATIVE WORKFLOW</span></div>
      <div className="leak-tabs" role="tablist" aria-label="Explore missed sales">
        {leaks.map((item, i) => <button key={item.id} ref={node => { buttons.current[i] = node }} id={`${base}-${item.id}`} role="tab" aria-selected={active === i} aria-controls={`${base}-panel`} tabIndex={active === i ? 0 : -1} className={active === i ? "is-on" : ""} onClick={() => setActive(i)} onKeyDown={event => {
          if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return
          event.preventDefault()
          const next = event.key === "Home" ? 0 : event.key === "End" ? leaks.length - 1 : (active + (event.key === "ArrowRight" ? 1 : -1) + leaks.length) % leaks.length
          setActive(next); buttons.current[next]?.focus()
        }}><VisualIcon name={item.icon} />{item.label}</button>)}
      </div>
      <div className="funnel-flow" aria-label={`An opportunity moves through lead, contact, booking, held call and sale. Investigate the ${stages[leak.stage].toLowerCase()} stage.`}>
        {stages.map((stage, i) => <div key={stage} className={`funnel-stage ${i === leak.stage ? "is-gap" : ""} ${i < leak.stage ? "is-reached" : ""}`}>
          {i > 0 && <span className={`funnel-connector ${i <= leak.stage ? "is-reached" : ""}`} aria-hidden="true"><m.span initial={false} animate={{ scaleX: i <= leak.stage ? 1 : 0 }} transition={{ duration: reduced ? 0 : 0.35 }} /></span>}
          <m.span className="funnel-node" initial={false} animate={{ scale: i === leak.stage ? 1.12 : 1 }} transition={{ duration: reduced ? 0 : 0.25 }}>{i === leak.stage ? "?" : i < leak.stage ? "✓" : <span />}</m.span>
          <span className="funnel-label">{stage}</span>
        </div>)}
      </div>
      <div id={`${base}-panel`} role="tabpanel" aria-labelledby={`${base}-${leak.id}`} className="leak-detail" tabIndex={0}>
        <AnimatePresence mode="wait" initial={false}><m.div key={leak.id} initial={{ opacity: 0, y: reduced ? 0 : 7 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.15 }}>
          <span className="mono xs ink-mute">THE QUESTION WORTH ASKING</span><h3>{leak.question}</h3><p><VisualIcon name="arrow" />{leak.action}</p>
        </m.div></AnimatePresence>
        <div className="leak-outcome"><span className="live-dot" />Find the gap.<br /><strong>Give the team a next move.</strong></div>
      </div>
    </div>
  )
}

export function ProductScreenTour() {
  const [active, setActive] = useState(0)
  const base = useId()
  const buttons = useRef<(HTMLButtonElement | null)[]>([])
  const reduced = useReducedMotion()
  const screen = landingScreens[active]
  return (
    <div className="screen-tour">
      <div className="screen-tabs" role="tablist" aria-label="Explore RevPhlo screens">
        {landingScreens.map((item, i) => <button key={item.id} id={`${base}-${item.id}`} ref={node => { buttons.current[i] = node }} role="tab" aria-selected={active === i} aria-controls={`${base}-panel`} tabIndex={active === i ? 0 : -1} className={active === i ? "is-on" : ""} onClick={() => setActive(i)} onKeyDown={event => {
          if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return
          event.preventDefault()
          const next = event.key === "Home" ? 0 : event.key === "End" ? landingScreens.length - 1 : (active + (event.key === "ArrowRight" ? 1 : -1) + landingScreens.length) % landingScreens.length
          setActive(next); buttons.current[next]?.focus()
        }}><VisualIcon name={item.icon} /><span>{item.label}</span>{active === i && <m.span className="screen-tab-line" initial={{ scaleX: reduced ? 1 : 0 }} animate={{ scaleX: 1 }} transition={{ duration: reduced ? 0 : 0.25 }} />}</button>)}
      </div>
      <div id={`${base}-panel`} className="screen-panel" role="tabpanel" aria-labelledby={`${base}-${screen.id}`} tabIndex={0}>
        <div className="screen-caption"><div><h3>{screen.title}</h3><p>{screen.description}</p></div><span className="demo-tag">DEMO WORKSPACE</span></div>
        <div className="screen-browser">
          <div className="stack-chrome"><span className="stack-dots" aria-hidden="true">● ● ●</span><span>RevPhlo / {screen.label}</span><span className="mono xs">ILLUSTRATIVE DATA</span></div>
          <div className="screen-image">
            <AnimatePresence mode="wait" initial={false}><m.div key={screen.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : 0.16 }}>
              <Image src={screen.src} alt={screen.alt} width={1920} height={1080} sizes="(max-width: 720px) 95vw, 1176px" />
            </m.div></AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}

export function InstallIllustration({ step }: { step: 0 | 1 | 2 }) {
  return (
    <div className={`install-illustration install-illustration-${step}`} aria-hidden="true">
      {step === 0 ? <><span className="tool-tile">CRM</span><span className="tool-join">+</span><span className="tool-tile"><VisualIcon name="call" /></span><span className="tool-join">+</span><span className="tool-tile">$</span><span className="tool-link" /><span className="tool-hub"><VisualIcon name="connect" /></span></>
        : step === 1 ? <><span className="mini-doc doc-back"><i /><i /><i /></span><span className="mini-doc doc-front"><VisualIcon name="book" /><i /><i /><span>✓</span></span></>
          : <><span className="mini-task"><span className="task-dot" /><span>Review the calls</span><span className="task-check">✓</span></span><span className="mini-task"><span className="task-dot" /><span>Coach the handoff</span><VisualIcon name="arrow" /></span><span className="mini-task muted-task"><span className="task-dot" /><span>Check what changed</span></span></>}
    </div>
  )
}
