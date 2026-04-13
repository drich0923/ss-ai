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
    summary: "Review every setter and closer call, catch weak conversations early, and give managers a prioritized coaching queue.",
    slug: "ai-call-coaching",
  },
  {
    title: "Manager OS",
    summary: "Turn rep performance drift into clear priorities, interventions, and weekly management rhythm.",
    slug: "manager-os",
  },
  {
    title: "Client Health",
    summary: "Blend call quality, rep execution, fulfillment, and revenue signals into one account risk view.",
    slug: "client-health",
  },
  {
    title: "Revenue Visibility",
    summary: "Track deal ownership, payment plans, and collected versus exposed revenue without spreadsheet fog.",
    slug: "revenue-visibility",
  },
  {
    title: "Sales Onboarding Systems",
    summary: "Standardize how clients and reps go live so growth does not create operational chaos.",
    slug: "sales-onboarding",
  },
] as const

export const productModules: ProductModule[] = [
  {
    slug: "ai-call-coaching",
    name: "AI Call Coaching",
    eyebrow: "Flagship product",
    heroTitle: "Review every sales call without asking your managers to listen to them all.",
    heroSummary: "Systemized Sales AI scores every call against your standards, flags weak conversations automatically, and shows managers exactly what to coach first.",
    audience: "High-ticket teams with setters, closers, or both",
    pricing: "Starts around $2.5k/mo plus setup",
    leadValue: "Catch weak conversations faster, coach reps more precisely, and give managers a repeatable system instead of random reviews.",
    pains: [
      "Managers only review a small sample of calls and miss repeated failure patterns.",
      "Recorded calls exist, but nobody turns them into consistent coaching at scale.",
      "Rep quality drifts across teams and there is no clear scoring standard.",
      "Leadership can feel weak calls in the numbers but cannot isolate the behavior fast enough.",
    ],
    capabilities: [
      "Pull transcripts from sources like RevPhlo and Fathom.",
      "Use client-specific scorecards for closers, setters, and DM setters.",
      "Generate AI flags, summaries, rankings, and coaching assignments automatically.",
      "Give managers a review queue so they intervene on the right calls first.",
    ],
    fulfillment: [
      "Connect one transcript source at launch.",
      "Map reps to teams and rep types.",
      "Install one default rubric and up to five custom focus areas.",
      "Backfill recent calls and calibrate against a live sample.",
    ],
    outcomes: [
      "More coaching coverage without increasing manager listening time.",
      "Faster visibility into weak openers, shallow discovery, and weak closes.",
      "A repeatable weekly management rhythm built on real call behavior.",
    ],
    implementation: [
      "Connect your call source, map reps, and backfill recent calls.",
      "Calibrate the rubric against a sample of real conversations.",
      "Launch the manager queue and tune focus skills over the first operating cycle.",
    ],
  },
  {
    slug: "manager-os",
    name: "Manager OS",
    eyebrow: "Leadership expansion",
    heroTitle: "Give every manager a clear weekly system for coaching, intervention, and accountability.",
    heroSummary: "Manager OS turns call quality and rep trend data into one operating rhythm so leaders know who needs attention, why, and what to do next.",
    audience: "Sales leaders managing multiple reps, pods, or brands",
    pricing: "Custom expansion pricing after coaching launch",
    leadValue: "Create a management rhythm that is proactive, measurable, and easier to scale across teams.",
    pains: [
      "Managers can sense the team is off, but they cannot diagnose what is slipping quickly.",
      "Coaching happens reactively through Slack, memory, and random call reviews.",
      "Weekly meetings drift because there is no clear intervention framework.",
    ],
    capabilities: [
      "Rep rankings and decline detection by role, account, and skill area.",
      "Review queue built from flags, score drops, and unresolved coaching items.",
      "Manager workflows anchored in operating rhythm, not ad hoc reactions.",
    ],
    fulfillment: [
      "Enable once AI coaching is live.",
      "Define one weekly review cadence and intervention playbook per manager.",
      "Train leaders on how to use the system as their command layer.",
    ],
    outcomes: [
      "Less time spent guessing what is wrong.",
      "More consistent coaching quality across managers and brands.",
      "Cleaner executive visibility into what managers are actually fixing.",
    ],
    implementation: [
      "Turn on after the call coaching queue is stable.",
      "Map manager review rituals and escalation rules.",
      "Roll the view into weekly team meetings.",
    ],
  },
  {
    slug: "client-health",
    name: "Client Health",
    eyebrow: "Executive visibility",
    heroTitle: "See which client accounts are healthy, slipping, or quietly putting revenue at risk.",
    heroSummary: "Client Health blends call quality, fulfillment, rep activity, and revenue signals into one account risk view for leadership.",
    audience: "Owners and operators managing a portfolio of client accounts or brands",
    pricing: "Portfolio-tier pricing or custom expansion",
    leadValue: "Spot account risk earlier and stop relying on fragmented updates from different teams.",
    pains: [
      "Leadership hears account problems in fragments instead of one scored view.",
      "It is hard to tell whether the issue is lead flow, rep quality, or delivery execution.",
      "Accounts can drift for weeks before the risk becomes obvious.",
    ],
    capabilities: [
      "Cross-system health scoring informed by coaching, onboarding, and revenue signals.",
      "Fast visibility into red-risk and silent-break accounts.",
      "Leadership rollups that reduce app-hopping and reactive triage.",
    ],
    fulfillment: [
      "Start with call and payment visibility data.",
      "Add onboarding and manager signals as those products are live.",
      "Tune scoring with leadership after the first operating cycle.",
    ],
    outcomes: [
      "Earlier escalation on account risk.",
      "A better executive explanation for where revenue is leaking.",
      "Less reliance on manually stitched leadership updates.",
    ],
    implementation: [
      "Layer on after one or two operational products are stable.",
      "Score the key indicators and adjust weighting with real usage.",
      "Use it in weekly owner review and forecast meetings.",
    ],
  },
  {
    slug: "revenue-visibility",
    name: "Revenue Visibility",
    eyebrow: "Commercial operations",
    heroTitle: "Know who owns every deal, what has been collected, and where cash is still exposed.",
    heroSummary: "Revenue Visibility turns payment tracking into an operating layer for managers, reps, and owners so accountability stays attached to the money.",
    audience: "Teams collecting high-ticket payments across multiple reps and payment plans",
    pricing: "Typically sold into multi-module accounts",
    leadValue: "Add commercial visibility so ownership does not disappear after the deal is sold.",
    pains: [
      "Collected versus outstanding revenue lives in fragmented tools and spreadsheets.",
      "Nobody knows which rep owns which payment issue without manual digging.",
      "Managers cannot filter revenue follow-through by closer or setter quickly.",
    ],
    capabilities: [
      "Client-scoped payment tracking with closer and setter assignment.",
      "Rep-level views of unassigned and owned deals.",
      "Operational visibility into open plans, overdue amounts, and follow-up burden.",
    ],
    fulfillment: [
      "Configure payment offers and ownership rules.",
      "Roll out closer and setter assignment logic.",
      "Train managers and reps on filtering and assignment workflows.",
    ],
    outcomes: [
      "Cleaner ownership over follow-through and collections.",
      "Less leakage between sold, financed, and collected revenue.",
      "More useful commercial visibility than a spreadsheet audit trail.",
    ],
    implementation: [
      "Requires clean rep identity and client scoping.",
      "Best added once one operating system product is already in use.",
      "Use with weekly manager and finance review.",
    ],
  },
  {
    slug: "sales-onboarding",
    name: "Sales Onboarding Systems",
    eyebrow: "Delivery expansion",
    heroTitle: "Launch clients and reps with fewer missed steps, weaker handoffs, and setup surprises.",
    heroSummary: "Sales Onboarding Systems gives your team a structured rollout for client setup, rep readiness, and operational clarity instead of scattered docs and tribal knowledge.",
    audience: "Sales organizations onboarding clients, reps, or both at the same time",
    pricing: "Usually sold as implementation and expansion work",
    leadValue: "Protect launch quality as volume increases and more teams touch the rollout.",
    pains: [
      "Onboarding quality collapses when sales, ops, and fulfillment each own different parts of setup.",
      "Critical context gets lost between kickoff, validation, and launch.",
      "There is no single source of truth for launch readiness.",
    ],
    capabilities: [
      "Structured onboarding boards, milestones, and handoff visibility.",
      "Client-visible and internal-only workstreams.",
      "A cleaner operational system for multi-team launches.",
    ],
    fulfillment: [
      "Install the default onboarding template and tailor milestone language.",
      "Define internal-only versus client-visible stages.",
      "Train operations and leadership on using the board as the system of record.",
    ],
    outcomes: [
      "Fewer launch surprises and cleaner internal coordination.",
      "Better handoff quality between sales, ops, and managers.",
      "A more scalable setup process as volume increases.",
    ],
    implementation: [
      "Works best when one operational owner is assigned.",
      "Roll out to one brand first and template the rest.",
      "Layer in client-facing milestones only after the default flow is working.",
    ],
  },
] as const

export function getProductModule(slug: string) {
  return productModules.find(product => product.slug === slug) ?? null
}
