export type ProductModule = {
  slug: string
  name: string
  eyebrow: string
  heroTitle: string
  heroSummary: string
  audience: string
  pricing: string
  leadValue: string
  pains: string[]
  capabilities: string[]
  fulfillment: string[]
  outcomes: string[]
  implementation: string[]
}

export const siteStats = [
  { value: "100%", label: "Of your sales calls reviewed instead of random sampling" },
  { value: "14 days", label: "To launch the first coaching workflow" },
  { value: "1 system", label: "For coaching, management, account health, and revenue visibility" },
] as const

export const ecosystemModules = [
  {
    title: "AI Call Coaching",
    summary: "Score every call and show managers what to coach first.",
    slug: "ai-call-coaching",
  },
  {
    title: "Manager OS",
    summary: "Turn rep drift into clear priorities and weekly management rhythm.",
    slug: "manager-os",
  },
  {
    title: "Client Health",
    summary: "Blend call quality, delivery, and revenue into one account risk view.",
    slug: "client-health",
  },
  {
    title: "Revenue Visibility",
    summary: "Track deal ownership and cash exposure without spreadsheet fog.",
    slug: "revenue-visibility",
  },
  {
    title: "Sales Onboarding Systems",
    summary: "Standardize how clients and reps go live as the team grows.",
    slug: "sales-onboarding",
  },
] as const

export const productModules: ProductModule[] = [
  {
    slug: "ai-call-coaching",
    name: "AI Call Coaching",
    eyebrow: "Flagship product",
    heroTitle: "Review every sales call with AI.",
    heroSummary: "AI scores every call, flags weak conversations, and shows managers what to coach first.",
    audience: "High-ticket teams with setters, closers, or both",
    pricing: "Starts around $2.5k/mo plus setup",
    leadValue: "Catch weak conversations faster and give managers a repeatable coaching system.",
    pains: [
      "Managers only review a small sample of calls.",
      "Recorded calls are not turned into consistent coaching.",
      "Rep quality drifts and there is no scoring standard.",
      "Leadership sees weak numbers before weak behavior.",
    ],
    capabilities: [
      "Pull transcripts from sources like RevPhlo and Fathom.",
      "Use client-specific scorecards by rep type.",
      "Generate AI flags, summaries, rankings, and assignments.",
      "Give managers a review queue for the right calls first.",
    ],
    fulfillment: [
      "Connect one transcript source.",
      "Map reps to teams and roles.",
      "Install one rubric and up to five focus areas.",
      "Backfill recent calls and calibrate.",
    ],
    outcomes: [
      "More coaching coverage without more listening time.",
      "Faster visibility into weak openers, discovery, and closes.",
      "A repeatable management rhythm built on real calls.",
    ],
    implementation: [
      "Connect your call source and map reps.",
      "Calibrate the rubric against real calls.",
      "Launch the manager queue and tune the first cycle.",
    ],
  },
  {
    slug: "manager-os",
    name: "Manager OS",
    eyebrow: "Leadership expansion",
    heroTitle: "Give managers one place to run coaching.",
    heroSummary: "Turn call quality and rep trends into one weekly management rhythm.",
    audience: "Sales leaders managing multiple reps, pods, or brands",
    pricing: "Custom expansion pricing after coaching launch",
    leadValue: "Create a management rhythm that is proactive, measurable, and easier to scale.",
    pains: [
      "Managers know the team is off but cannot diagnose it quickly.",
      "Coaching happens reactively through Slack and memory.",
      "Weekly meetings drift without a real intervention framework.",
    ],
    capabilities: [
      "Rep rankings and decline detection by role and skill area.",
      "Review queues built from flags and score drops.",
      "Manager workflows anchored in operating rhythm.",
    ],
    fulfillment: [
      "Enable once AI coaching is live.",
      "Define one review cadence per manager.",
      "Train leaders to use it as the command layer.",
    ],
    outcomes: [
      "Less time guessing what is wrong.",
      "More consistent coaching quality across managers.",
      "Cleaner visibility into what managers are fixing.",
    ],
    implementation: [
      "Turn it on after the coaching queue is stable.",
      "Map review rituals and escalation rules.",
      "Roll it into weekly team meetings.",
    ],
  },
  {
    slug: "client-health",
    name: "Client Health",
    eyebrow: "Executive visibility",
    heroTitle: "See account risk before revenue slips.",
    heroSummary: "Blend call quality, delivery, rep activity, and revenue into one account risk view.",
    audience: "Owners and operators managing a portfolio of client accounts or brands",
    pricing: "Portfolio-tier pricing or custom expansion",
    leadValue: "Spot account risk earlier without relying on fragmented team updates.",
    pains: [
      "Leadership hears account problems in fragments.",
      "It is hard to tell whether the issue is leads, reps, or delivery.",
      "Accounts drift for weeks before risk becomes obvious.",
    ],
    capabilities: [
      "Cross-system health scoring from coaching, onboarding, and revenue.",
      "Fast visibility into red-risk accounts.",
      "Leadership rollups that reduce app-hopping.",
    ],
    fulfillment: [
      "Start with call and payment data.",
      "Add onboarding and manager signals later.",
      "Tune scoring after the first operating cycle.",
    ],
    outcomes: [
      "Earlier escalation on account risk.",
      "A clearer explanation for where revenue is leaking.",
      "Less reliance on stitched leadership updates.",
    ],
    implementation: [
      "Layer it on after one or two products are stable.",
      "Score the key indicators and adjust weighting.",
      "Use it in owner review and forecast meetings.",
    ],
  },
  {
    slug: "revenue-visibility",
    name: "Revenue Visibility",
    eyebrow: "Commercial operations",
    heroTitle: "Track revenue ownership without spreadsheet fog.",
    heroSummary: "Turn payment tracking into an operating layer for managers, reps, and owners.",
    audience: "Teams collecting high-ticket payments across multiple reps and payment plans",
    pricing: "Typically sold into multi-module accounts",
    leadValue: "Add commercial visibility so ownership stays attached to the money.",
    pains: [
      "Collected versus outstanding revenue lives in fragmented tools.",
      "Rep ownership disappears after the deal is sold.",
      "Managers cannot filter revenue follow-through fast enough.",
    ],
    capabilities: [
      "Client-scoped payment tracking with closer and setter assignment.",
      "Rep views of unassigned and owned deals.",
      "Visibility into open plans, overdue amounts, and follow-up burden.",
    ],
    fulfillment: [
      "Configure payment offers and ownership rules.",
      "Roll out closer and setter assignment logic.",
      "Train teams on filtering and assignment workflows.",
    ],
    outcomes: [
      "Cleaner ownership over follow-through and collections.",
      "Less leakage between sold, financed, and collected revenue.",
      "More useful visibility than a spreadsheet audit trail.",
    ],
    implementation: [
      "Requires clean rep identity and client scoping.",
      "Best added once one product is already in use.",
      "Use it in weekly manager and finance review.",
    ],
  },
  {
    slug: "sales-onboarding",
    name: "Sales Onboarding Systems",
    eyebrow: "Delivery expansion",
    heroTitle: "Launch clients and reps with fewer missed steps.",
    heroSummary: "Give your team a structured rollout for client setup and rep readiness.",
    audience: "Sales organizations onboarding clients, reps, or both at the same time",
    pricing: "Usually sold as implementation and expansion work",
    leadValue: "Protect launch quality as more teams touch the rollout.",
    pains: [
      "Onboarding breaks when sales, ops, and fulfillment split ownership.",
      "Critical context gets lost between kickoff and launch.",
      "There is no single source of truth for readiness.",
    ],
    capabilities: [
      "Structured onboarding boards and milestone visibility.",
      "Client-visible and internal-only workstreams.",
      "A cleaner system for multi-team launches.",
    ],
    fulfillment: [
      "Install the default onboarding template.",
      "Define internal versus client-visible stages.",
      "Train the team to use the board as the system of record.",
    ],
    outcomes: [
      "Fewer launch surprises and cleaner coordination.",
      "Better handoff quality between teams.",
      "A more scalable setup process as volume increases.",
    ],
    implementation: [
      "Works best with one operational owner.",
      "Roll out to one brand first and template the rest.",
      "Add client-facing milestones after the default flow works.",
    ],
  },
] as const

export function getProductModule(slug: string) {
  return productModules.find(product => product.slug === slug) ?? null
}
