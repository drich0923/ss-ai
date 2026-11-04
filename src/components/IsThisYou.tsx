"use client"

import { useId, useRef, useState } from "react"
import Link from "next/link"

type PathId = "A" | "B"

const PRODUCT_HREF: Record<string, string> = {
  "Sales Reporting": "/products/revphlo",
  "Speed to Lead": "/products/speed-to-lead",
  "Hiring App": "/products/hiring-app",
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

const paths: Record<PathId, {
  kicker: string
  title: string
  sub: string
  checks: string[]
  example: string
  argument: string
  stages: Stage[]
}> = {
  A: {
    kicker: "OWNER-LED TEAM",
    title: "I run the sales team myself",
    sub: "You have reps, inbound demand and a business that is already selling.",
    checks: [
      "Cash is coming in, but you know some sales are being missed.",
      "You judge rep performance mostly by feel and collected cash.",
      "Your CRM, spreadsheets and rep updates don’t give you one clear picture.",
      "You want to know where to focus before buying more leads.",
      "You need practical guidance your existing team can use."
    ],
    example: "Illustrative business: a founder, two closers and a setter working leads from YouTube and a webinar. They use GoHighLevel, Stripe and Zoom. This is an example, not a client result.",
    argument: "You bring the knowledge of your offer and customers. RevPhlo gives you the reporting, playbooks and workflows to test your instincts against the facts and give your team a clear next move. We install it and train you to use it.",
    stages: [
      {
        id: "a1",
        kicker: "01",
        title: "See what’s happening",
        example: "Start with the sales process and demand you already have.",
        breaks: "Cash tells you the outcome. It doesn’t tell you which leads went untouched, where bookings stopped becoming conversations, or why one rep converts more than another.",
        stuck: "Asking for updates, reconciling reports and choosing a priority without a reliable baseline.",
        apps: [
          "Sales Reporting",
          "Phone & DM Setter Trackers",
          "Speed to Lead",
          "Commission Tracker"
        ],
        changes: "Connect your activity and outcomes, compare reps and sources, and investigate the stage where opportunities are being missed."
      },
      {
        id: "a2",
        kicker: "02",
        title: "Turn insight into action",
        example: "Once the picture is clearer, give the team a specific improvement to work on.",
        breaks: "Knowing show rate is low doesn’t tell a rep how to improve it. A number becomes useful when it leads to a change in what your team does.",
        stuck: "Repeating advice without a consistent playbook or a way to check whether the change helped.",
        apps: [
          "Closer & Setter Playbooks",
          "AI Call Coaching",
          "Manager OS",
          "Closer Onboarding"
        ],
        changes: "Use the calls, playbooks and workflows to coach a specific behavior. Assign the work, then review the numbers to see its impact."
      }
    ]
  },
  B: {
    kicker: "MANAGER-LED TEAM",
    title: "My sales leader runs the team",
    sub: "You have someone in charge. You want better evidence behind the decisions.",
    checks: [
      "Your team is selling, but there is debate over what needs to improve.",
      "Marketing and sales sometimes draw different conclusions from the numbers.",
      "You can see individual metrics, but struggle to connect the full funnel.",
      "Performance depends heavily on your manager’s experience and memory.",
      "You want to understand the impact of the changes your team makes."
    ],
    example: "Illustrative business: three closers, phone and DM setters, and a sales manager working inbound marketing leads. This is an example, not a client result.",
    argument: "Your sales leader keeps steering the team. RevPhlo gives them reliable reporting and an operating system built from real sales management experience, with implementation, training and ongoing help. You can discuss priorities from the same evidence and review what changed.",
    stages: [
      {
        id: "b1",
        kicker: "01",
        title: "Agree on the numbers",
        example: "Give the owner, marketing team and sales leader a shared view of performance.",
        breaks: "One person points to booked calls. Another points to show rate. A third points to cash collected. Each sees a different part of the same problem.",
        stuck: "Debating which report is right and revisiting the same questions without resolving them.",
        apps: [
          "Sales Reporting",
          "Phone & DM Setter Trackers",
          "QC Dashboard",
          "Commission Tracker"
        ],
        changes: "Agree on the definitions, connect the stages and compare the right reps, sources and periods. The conversation can move from competing opinions to a specific question worth investigating."
      },
      {
        id: "b2",
        kicker: "02",
        title: "Make improvements repeatable",
        example: "Help the team apply what the best performers and strongest processes are doing.",
        breaks: "The manager spots a problem, but the fix stays in a Slack message. New reps receive different guidance. Nobody checks whether the change reached the rest of the team.",
        stuck: "Re-explaining the process and depending on one person to remember every follow-up.",
        apps: [
          "Manager OS",
          "Closer & Setter Playbooks",
          "AI Call Coaching",
          "Closer Onboarding",
          "Hiring App",
          "Speed to Lead"
        ],
        changes: "Put the process in the playbook, coach against real calls and use the priority board to keep the work visible. Review the outcome and adjust with evidence."
      }
    ]
  }
}

const pains: Pain[] = [
  {
    id: "numbers",
    name: "Trusting the numbers",
    paths: [
      "A",
      "B"
    ],
    argument: "Before changing the team, agree on what the numbers mean. RevPhlo connects call activity and payments so you can investigate show rate, close rate and cash with more confidence."
  },
  {
    id: "handoff",
    name: "Setter-to-closer handoffs",
    paths: [
      "A",
      "B"
    ],
    argument: "A setter can book plenty of calls while few become sales. Connect the booking to the downstream result, then review qualification, handoffs and follow-up to see where the opportunity is being lost."
  },
  {
    id: "shows",
    name: "No-shows and cancellations",
    paths: [
      "A",
      "B"
    ],
    argument: "Start by understanding which calls are failing to happen and where they came from. Use the confirmation and follow-up playbooks to work on the gap, then review the change in show rate."
  },
  {
    id: "training",
    name: "Rep performance",
    paths: [
      "A",
      "B"
    ],
    argument: "Compare performance, review the calls behind the numbers and coach a specific behavior. Playbooks and training give the rest of the team a way to apply what is working."
  },
  {
    id: "next",
    name: "What to fix first",
    paths: [
      "A",
      "B"
    ],
    argument: "Use the evidence to choose a priority your team can act on. The priority board keeps the work and its owner visible; the reporting helps you review whether the decision improved performance."
  },
  {
    id: "speed",
    name: "Lead follow-up",
    paths: [
      "A",
      "B"
    ],
    argument: "You have already invested in creating demand. See how quickly new leads are contacted and where follow-ups are missed, then give the team a consistent process for working those opportunities."
  },
  {
    id: "pay",
    name: "Commissions",
    paths: [
      "A",
      "B"
    ],
    argument: "Connect the commission plan to submissions, approvals and collected cash. Your team gets a repeatable process for checking pay without rebuilding the calculation each pay period."
  },
  {
    id: "onboarding",
    name: "Hiring and onboarding",
    paths: [
      "A",
      "B"
    ],
    argument: "As you grow, use a consistent candidate process and a documented ramp. New reps can learn the same playbooks, complete knowledge checks and get clear on how the team works."
  }
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

  return (
    <section className="section iy" id="is-this-you" aria-labelledby={`${baseId}-title`}>
      <div className="wrap">
        <div className="section-header">
          <div className="eyebrow">IS THIS YOU?</div>
          <h2 id={`${baseId}-title`} className="display display-lg">
            You already have a team.<br />
            <em className="italic-neon">Give it a clearer direction.</em>
          </h2>
        </div>
        <p className="iy-lead">
          RevPhlo is built for established businesses with setters and closers working inbound marketing leads. Whether you manage the team or have a sales leader, the goal is the same: understand where sales are being missed and give your team a system to close more of them.
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

        {(["A", "B"] as PathId[]).map(id => {
          const item = paths[id]
          const active = path === id
          const pathPains = pains.filter(pain => pain.paths.includes(id))
          return (
            <div key={id} className="iy-walk" hidden={!active}>
              <p className="iy-example">{item.example}</p>
              <div className="iy-steps" role="tablist" aria-label={`${item.title} walkthrough`}>
                {item.stages.map((step, index) => {
                  const on = active && index === stage
                  const tabId = `${baseId}-${step.id}-tab`
                  const panelId = `${baseId}-${step.id}-panel`
                  return (
                    <button
                      key={step.id}
                      ref={node => {
                        if (active) stageRefs.current[index] = node
                      }}
                      type="button"
                      role="tab"
                      id={tabId}
                      aria-selected={on}
                      aria-controls={panelId}
                      tabIndex={on ? 0 : -1}
                      className={`iy-step${on ? " is-on" : ""}`}
                      onClick={() => {
                        choose(id)
                        setStage(index)
                      }}
                      onKeyDown={event => {
                        if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") return
                        event.preventDefault()
                        const next = event.key === "ArrowRight" ? Math.min(item.stages.length - 1, index + 1) : Math.max(0, index - 1)
                        setStage(next)
                        stageRefs.current[next]?.focus()
                      }}
                    >
                      <span className="iy-step-n">{step.kicker}</span>
                      <span>{step.title}</span>
                    </button>
                  )
                })}
              </div>
              {item.stages.map((step, index) => (
                <div
                  key={step.id}
                  role="tabpanel"
                  id={`${baseId}-${step.id}-panel`}
                  aria-labelledby={`${baseId}-${step.id}-tab`}
                  className="iy-stage card"
                  hidden={!(active && index === stage)}
                >
                  <div className="iy-stage-top">
                    <span className="iy-example-tag">Example business</span>
                    <h3 className="iy-stage-title">{step.title}</h3>
                    <p className="iy-stage-example">{step.example}</p>
                  </div>
                  <div className="iy-facts">
                    <div>
                      <div className="iy-fact-label">Where the gap appears</div>
                      <p>{step.breaks}</p>
                    </div>
                    <div>
                      <div className="iy-fact-label">What it costs you in attention</div>
                      <p>{step.stuck}</p>
                    </div>
                    <div>
                      <div className="iy-fact-label">Tools your team uses</div>
                      <div className="iy-chips">
                        {step.apps.map(name => (
                          <AppChip key={name} name={name} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="iy-fact-label">What changes</div>
                      <p>{step.changes}</p>
                    </div>
                  </div>
                </div>
              ))}
              <div className="iy-close">
                <p className="iy-argument">{item.argument}</p>
                <p className="iy-proof">
                  Built from our experience running sales teams at Systemized Sales. The reporting, workflows and playbooks work together; your team applies them to your business. <a href="#results">See the agency experience behind the system →</a>
                </p>
                <div className="iy-cta">
                  <button type="button" onClick={onBook} className="btn btn-primary">
                    Book a 30-min call →
                  </button>
                  <span className="iy-cta-note">Implementation, team training, dedicated Slack support and weekly office hours.</span>
                </div>
              </div>
              <div className="iy-pains">
                <div className="iy-fact-label">Common problems</div>
                <div className="iy-pain-row">
                  {pathPains.map(pain => {
                    const open = active && openPain === pain.id
                    const panelId = `${baseId}-${id}-pain-${pain.id}`
                    return (
                      <button
                        key={pain.id}
                        type="button"
                        className={`iy-pain${open ? " is-on" : ""}`}
                        aria-expanded={open}
                        aria-controls={panelId}
                        onClick={() => {
                          choose(id)
                          setOpenPain(open ? null : pain.id)
                        }}
                      >
                        {pain.name}
                      </button>
                    )
                  })}
                </div>
                {pathPains.map(pain => (
                  <p
                    key={pain.id}
                    id={`${baseId}-${id}-pain-${pain.id}`}
                    className="iy-pain-body"
                    hidden={!(active && openPain === pain.id)}
                  >
                    {pain.argument}
                  </p>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
