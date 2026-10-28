"use client"

import { useId, useRef, useState } from "react"
import Link from "next/link"

type PathId = "A" | "B"

const PRODUCT_HREF: Record<string, string> = {
  "AI Call Coaching": "/products/ai-call-coaching",
  "Manager OS": "/products/manager-os",
  "Phone & DM Setter Trackers": "/products/setter-eod",
  "QC Dashboard": "/products/qc-dashboard",
  "Closer & Setter Playbooks": "/products/closer-playbook",
  "Closer Onboarding": "/products/rep-onboarding",
  "Commission Tracker": "/products/commission-tracker",
}

type Stage = {
  id: string
  kicker: string
  title: string
  example: string
  breaks: string
  stuck: string
  apps: string[]
  changes: string
}

type Pain = {
  id: string
  name: string
  paths: PathId[]
  argument: string
}

const paths: Record<
  PathId,
  {
    kicker: string
    title: string
    sub: string
    checks: string[]
    example: string
    argument: string
    stages: Stage[]
  }
> = {
  A: {
    kicker: "PATH A",
    title: "I run the sales team myself",
    sub: "You manage the reps. No sales manager yet.",
    checks: [
      "You have closers, and maybe a setter, and you manage them yourself.",
      "There is no sales manager. You are it.",
      "Reps still ask you for the script, the price, and what to say.",
      "You aren't sure of the real show rate or close rate.",
      "Leads sit when you don't have time to follow up.",
      "You want the team to run without everything going through you.",
    ],
    example:
      "Example business. A founder with two closers and one setter, selling a $6,000 offer from YouTube and a weekly webinar. Calls booked in GoHighLevel, paid in Stripe, taken on Zoom. Headcount and revenue below are an example, not a client result.",
    argument:
      "You already have the reps. The way the team works still lives in your head. This system puts the playbook, the numbers, and the scorecards in one place, so you are not the only copy. You still manage them. If you hire a manager later, they step into the same system. We install it, train you on how to use it, and support you in Slack.",
    stages: [
      {
        id: "a1",
        kicker: "01",
        title: "You still run the day",
        example: "Example: about $100K to $200K a month. One to three closers, and maybe a setter. You are the manager.",
        breaks:
          "The sheet, Slack, and the CRM don't match. New reps learn from you, not from one playbook. Follow-up depends on whether you had time. When you step away, the team slows down.",
        stuck: "Coaching from memory, rescuing deals, answering the same questions, and working out pay by hand.",
        apps: ["RevPhlo", "Closer & Setter Playbooks", "AI Call Coaching", "Speed to Lead", "Commission Tracker"],
        changes:
          "You see one set of numbers. The playbook is written down. Calls get scored so you know what to coach. Pay comes from submissions you approve. The team can work when you are not in every thread.",
      },
      {
        id: "a2",
        kicker: "02",
        title: "A team that can run without you",
        example: "Example: growing toward about $200K to $400K a month. You may hire a sales manager.",
        breaks:
          "You are still the backstop for every hire, every escalation, and every number. A new manager would have nothing to step into. Quality depends on you being in the room.",
        stuck: "Being the only person who knows how the team is supposed to run.",
        apps: ["Hiring App", "Closer Onboarding", "Manager OS", "RevPhlo", "Closer & Setter Playbooks", "AI Call Coaching"],
        changes:
          "A new rep ramps on the same playbook. If you hire a manager, they step into the lists, scorecards, and numbers. You run the business from the brief, not from every deal.",
      },
    ],
  },
  B: {
    kicker: "PATH B",
    title: "I have a sales team and a manager",
    sub: "Closers, maybe setters, and someone running them.",
    checks: [
      "You have closers, maybe setters, and someone managing them.",
      "Your numbers come from reports, a spreadsheet, and a CRM that don't agree.",
      "You still read Slack at night or step in on deals.",
      "Your close rate was better before the team got bigger.",
      "Commission takes hours every pay period, and reps dispute it.",
      "You lost a manager before, and the way you ran the team left with them.",
      "You want the team to run without you in it every day.",
    ],
    example:
      "Example business. The same kind of offer, now with a small team: three closers, two phone setters, one DM setter, and a sales manager. Headcount and revenue below are an example, not a client result.",
    argument:
      "You already have a manager. What you don't have is one system they can run the day from. They get the lists, scorecards, and numbers. You get a daily brief instead of a pile of reports. If the manager leaves, the system stays. We install it, train them on how to use it, and support you in Slack.",
    stages: [
      {
        id: "b1",
        kicker: "01",
        title: "A team with leaks",
        example: "Example: about $200K to $400K a month, with the team described above.",
        breaks:
          "End-of-day reports, the CRM, and Stripe don't match. Setters and closers argue over who gets credit. Some leads wait hours. The manager runs the day from memory and Slack. Close rates slide, and nobody can say which rep or which step.",
        stuck: "Reading end-of-day reports, matching cash to deals, settling pay disputes, and reviewing calls at night.",
        apps: ["RevPhlo", "AI Call Coaching", "QC Dashboard", "Speed to Lead", "Phone & DM Setter Trackers", "Manager OS", "Commission Tracker"],
        changes:
          "The manager starts the day from one list and one set of numbers. You read a daily brief instead of a pile of Slack messages. Your manager coaches the calls that need it. Pay is checked against cash that actually came in.",
      },
      {
        id: "b2",
        kicker: "02",
        title: "A bigger team",
        example: "Example: about $500K to $1M a month. Hiring does not stop.",
        breaks:
          "Quality drifts as the team grows. If one manager leaves, the way the team was run can leave with them. Ad spend has to follow the sources that bring cash, and you need enough closers for the calls being booked.",
        stuck: "Still the backstop for every hire, every escalation, and every number someone doesn't trust.",
        apps: [
          "Hiring App",
          "Closer Onboarding",
          "Closer & Setter Playbooks",
          "Manager OS",
          "RevPhlo",
          "AI Call Coaching",
          "QC Dashboard",
          "Speed to Lead",
          "Phone & DM Setter Trackers",
          "Commission Tracker",
        ],
        changes:
          "The way the team is run lives in the system, not in one person. A new manager steps into the same playbook, lists, and numbers. You run the business from the brief and the weekly numbers.",
      },
    ],
  },
}

const pains: Pain[] = [
  {
    id: "calls",
    name: "It all runs through you",
    paths: ["A"],
    argument:
      "You have reps, but the way the team works still lives in your head. Write the playbook down and measure the calls. Then you can see who needs help, and the team can run when you are not on every thread.",
  },
  {
    id: "hiring",
    name: "Hiring",
    paths: ["A", "B"],
    argument:
      "Most owners don't have a hiring problem. They have a process that changes for every candidate. Put every applicant through the same steps, compare them side by side, and hire into a ramp that is already built.",
  },
  {
    id: "onboarding",
    name: "Onboarding",
    paths: ["A", "B"],
    argument:
      "If onboarding lives in one doc and one person's head, every new rep gets a different version. Give them the same day-by-day ramp, check what they learned, and see who is behind before they touch your best leads.",
  },
  {
    id: "training",
    name: "Training",
    paths: ["A", "B"],
    argument:
      "You don't need to be a sales trainer to ramp a closer. You need to know which calls went wrong and why. When every call is scored the same way, you coach the right thing that week and watch whether the numbers move.",
  },
  {
    id: "managing",
    name: "Managing the day",
    paths: ["B"],
    argument:
      "A manager with no system is a single point of failure. Put the playbook, the daily list, and the numbers in the system. The manager runs the day from it. If they leave, the next one picks up the same system.",
  },
  {
    id: "tracking",
    name: "Tracking the work",
    paths: ["A", "B"],
    argument:
      "Reps will not love filling in the CRM, so stop relying on that. Let the call recording write the note and the rep approve it. Give setters one form. Read the totals instead of a stack of Slack messages.",
  },
  {
    id: "numbers",
    name: "Real numbers",
    paths: ["A", "B"],
    argument:
      "If your show rate is a range you have to guess, you are guessing. A close should count when the money lands, and edited numbers should get flagged. The figure you run the business on has to be the real one.",
  },
  {
    id: "next",
    name: "What to fix next",
    paths: ["A", "B"],
    argument:
      "Every sales team leaks somewhere. The question is where, this week. Start the day from a short list of the money and the calls that need attention, not from whoever is loudest in Slack.",
  },
  {
    id: "pay",
    name: "Paying reps",
    paths: ["B"],
    argument:
      "Reps should know what they earned before payday, and you should know it matches the cash that came in. Put the plan in the tracker, have reps submit, and approve it in one place.",
  },
  {
    id: "speed",
    name: "Speed to lead",
    paths: ["A", "B"],
    argument:
      "You are already paying for the leads. If some never get a call, that is cash you bought and left sitting. See how long each lead waited, see the missed follow-ups, and hold someone to it every day.",
  },
  {
    id: "qc",
    name: "Call quality",
    paths: ["B"],
    argument:
      "Close rates rarely crash. They slide a little each month while nobody is looking. Check prep, pipeline, and calls often, and you catch the slide in week two instead of month four.",
  },
  {
    id: "handoff",
    name: "Setter handoff",
    paths: ["B"],
    argument:
      "Setters should be coached on the cash their calls create, not only on how many calls they booked. When the setter's call and the closer's result are tied together, you know who to keep and what to fix.",
  },
]

function AppChip({ name }: { name: string }) {
  const href = PRODUCT_HREF[name]
  if (href) {
    return (
      <Link href={href} className="iy-chip iy-chip-link">
        {name}
      </Link>
    )
  }
  return <span className="iy-chip">{name}</span>
}

export default function IsThisYou({ onBook }: { onBook: () => void }) {
  const [path, setPath] = useState<PathId | null>(null)
  const [stage, setStage] = useState(0)
  const [openPain, setOpenPain] = useState<string | null>(null)
  const baseId = useId()
  const cardRefs = useRef<Record<PathId, HTMLButtonElement | null>>({ A: null, B: null })
  const stageRefs = useRef<(HTMLButtonElement | null)[]>([])

  function choose(next: PathId, focus = false) {
    setPath(next)
    setStage(0)
    setOpenPain(null)
    if (focus) requestAnimationFrame(() => cardRefs.current[next]?.focus())
  }

  function onCardKey(event: React.KeyboardEvent, current: PathId) {
    const order: PathId[] = ["A", "B"]
    const index = order.indexOf(current)
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      event.preventDefault()
      choose(order[(index + 1) % order.length], true)
    } else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      event.preventDefault()
      choose(order[(index - 1 + order.length) % order.length], true)
    }
  }

  const selected = path ? paths[path] : null
  const current = selected?.stages[stage]
  const visiblePains = path ? pains.filter(pain => pain.paths.includes(path)) : []

  return (
    <section className="section iy" id="is-this-you" aria-labelledby={`${baseId}-title`}>
      <div className="wrap">
        <div className="section-header">
          <div className="eyebrow">IS THIS YOU?</div>
          <h2 id={`${baseId}-title`} className="display display-lg">
            Two ways in.<br />
            <em className="italic-neon">Same system, fitted to you.</em>
          </h2>
        </div>
        <p className="iy-lead">
          Pick the one that sounds like you. We install the system, train you, your manager, and your team on how to use it, and support you in Slack. Your team does the hiring, the selling, and the managing. Each install is fitted to the business.
        </p>

        <div className="iy-cards" role="radiogroup" aria-label="Which sounds like you?">
          {(Object.keys(paths) as PathId[]).map(id => {
            const item = paths[id]
            const on = path === id
            return (
              <div key={id} className={`iy-card${on ? " is-on" : ""}`}>
                <button
                  ref={node => {
                    cardRefs.current[id] = node
                  }}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  tabIndex={path === null ? (id === "A" ? 0 : -1) : on ? 0 : -1}
                  className="iy-card-btn"
                  onClick={() => choose(id)}
                  onKeyDown={event => onCardKey(event, id)}
                >
                  <span className="iy-kicker">{item.kicker}</span>
                  <span className="iy-card-title">{item.title}</span>
                  <span className="iy-card-sub">{item.sub}</span>
                </button>
                <p className="iy-check-label">Is this you?</p>
                <ul className="iy-checks">
                  {item.checks.map(check => (
                    <li key={check}>{check}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {selected && current && (
          <div className="iy-walk" key={path}>
            <p className="iy-example">{selected.example}</p>

            <div className="iy-steps" role="tablist" aria-label={`${selected.title} walkthrough`}>
              {selected.stages.map((item, index) => {
                const on = index === stage
                const tabId = `${baseId}-${item.id}-tab`
                const panelId = `${baseId}-${item.id}-panel`
                return (
                  <button
                    key={item.id}
                    ref={node => {
                      stageRefs.current[index] = node
                    }}
                    type="button"
                    role="tab"
                    id={tabId}
                    aria-selected={on}
                    aria-controls={panelId}
                    tabIndex={on ? 0 : -1}
                    className={`iy-step${on ? " is-on" : ""}`}
                    onClick={() => setStage(index)}
                    onKeyDown={event => {
                      if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return
                      event.preventDefault()
                      const next = event.key === "ArrowRight" ? Math.min(selected.stages.length - 1, index + 1) : Math.max(0, index - 1)
                      setStage(next)
                      stageRefs.current[next]?.focus()
                    }}
                  >
                    <span className="iy-step-n">{item.kicker}</span>
                    <span>{item.title}</span>
                  </button>
                )
              })}
            </div>

            <div
              key={current.id}
              role="tabpanel"
              id={`${baseId}-${current.id}-panel`}
              aria-labelledby={`${baseId}-${current.id}-tab`}
              className="iy-stage card"
            >
              <div className="iy-stage-top">
                <span className="iy-example-tag">Example business</span>
                <h3 className="iy-stage-title">{current.title}</h3>
                <p className="iy-stage-example">{current.example}</p>
              </div>
              <div className="iy-facts">
                <div>
                  <div className="iy-fact-label">What breaks</div>
                  <p>{current.breaks}</p>
                </div>
                <div>
                  <div className="iy-fact-label">What you're stuck doing</div>
                  <p>{current.stuck}</p>
                </div>
                <div>
                  <div className="iy-fact-label">Parts that turn on</div>
                  <div className="iy-chips">
                    {current.apps.map(name => (
                      <AppChip key={name} name={name} />
                    ))}
                  </div>
                </div>
                <div>
                  <div className="iy-fact-label">What changes</div>
                  <p>{current.changes}</p>
                </div>
              </div>
            </div>

            <div className="iy-close">
              <p className="iy-argument">{selected.argument}</p>
              <p className="iy-proof">
                This exact system is behind these results. They are not a promise you get the same result. Woobie went from $250K to $1M a month in 7 months. The Listings Lab went from a 10.7% to a 30.8% close rate in 90 days. BudgetDog went from $400K-$500K in a good month to back-to-back $1M months. Average monthly revenue rose about $100K within 3-4 months, and the first $1M month came 8-9 months in. Brennan Schlagbaum, Founder, Budgetdog. Your team does the work. We install the system and train you on how to use it.
              </p>
              <div className="iy-cta">
                <button type="button" onClick={onBook} className="btn btn-primary">
                  Book a 30-min call →
                </button>
                <span className="iy-cta-note">We install the system, train you on how to use it, and support you in Slack.</span>
              </div>
            </div>

            <div className="iy-pains">
              <div className="iy-fact-label">Common problems</div>
              <div className="iy-pain-row">
                {visiblePains.map(pain => {
                  const open = openPain === pain.id
                  const panelId = `${baseId}-pain-${pain.id}`
                  return (
                    <button
                      key={pain.id}
                      type="button"
                      className={`iy-pain${open ? " is-on" : ""}`}
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenPain(open ? null : pain.id)}
                    >
                      {pain.name}
                    </button>
                  )
                })}
              </div>
              {visiblePains.map(pain =>
                openPain === pain.id ? (
                  <p key={pain.id} id={`${baseId}-pain-${pain.id}`} className="iy-pain-body">
                    {pain.argument}
                  </p>
                ) : null
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
