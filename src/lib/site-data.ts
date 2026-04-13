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
  { value: "100%", label: "Call coverage instead of random manual sampling" },
  { value: "14 days", label: "Typical launch window for the flagship offer" },
  { value: "5 modules", label: "Land-and-expand ecosystem behind one brand" },
] as const

export const ecosystemModules = [
  {
    title: "AI Call Coaching",
    summary: "Review every setter and closer call, catch revenue leaks early, and give managers a prioritized coaching queue.",
    slug: "ai-call-coaching",
  },
  {
    title: "Manager OS",
    summary: "Turn call quality, performance drift, and rep trends into one operating rhythm for leaders.",
    slug: "manager-os",
  },
  {
    title: "Client Health",
    summary: "Blend fulfillment, call quality, rep execution, and revenue signals into one risk layer.",
    slug: "client-health",
  },
  {
    title: "Revenue Visibility",
    summary: "Track payment plans, ownership, and collected versus at-risk revenue without spreadsheet fog.",
    slug: "revenue-visibility",
  },
  {
    title: "Sales Onboarding Systems",
    summary: "Standardize how clients and reps go live so growth does not destroy setup quality.",
    slug: "sales-onboarding",
  },
] as const

export const productModules: ProductModule[] = [
  {
    slug: "ai-call-coaching",
    name: "AI Call Coaching",
    eyebrow: "Flagship product",
    heroTitle: "AI grades every call so managers stop coaching blind.",
    heroSummary: "Systemized Sales AI ingests call transcripts, scores them against your rubric, flags bad calls automatically, and tells managers what to review first.",
    audience: "High-ticket teams with setters, closers, or both",
    pricing: "Starts around $2.5k/mo plus setup",
    leadValue: "Best first product because the pain is urgent, visible, and easy to prove within 30 days.",
    pains: [
      "Managers only review a tiny sample of calls and miss repeated failure patterns.",
      "Call recordings exist, but nobody turns them into actionable coaching at scale.",
      "Rep quality drifts across brands and there is no client-specific scoring standard.",
      "Leadership can feel weak calls in the numbers but cannot isolate the behavior fast enough.",
    ],
    capabilities: [
      "Webhook and sync ingestion from sources like RevPhlo and Fathom.",
      "Client-specific rubrics for closers, setters, and DM setters.",
      "AI-generated flags, summaries, rankings, and coaching assignments.",
      "Review queue for managers so they intervene on the right calls first.",
    ],
    fulfillment: [
      "Connect one transcript source at launch.",
      "Map reps to clients and rep types.",
      "Install one default rubric and up to five custom focus skills.",
      "Backfill 30 days of calls and calibrate on a live sample.",
    ],
    outcomes: [
      "More coaching coverage without adding manager listening time.",
      "Faster visibility into weak openers, shallow discovery, and weak closes.",
      "A repeatable weekly management rhythm built on real call behavior.",
    ],
    implementation: [
      "Week 1: connect data source, map reps, and backfill recent calls.",
      "Week 2: calibrate scores, QA sample calls, and launch manager workflow.",
      "Ongoing: tune focus skills and leadership review cadence.",
    ],
  },
  {
    slug: "manager-os",
    name: "Manager OS",
    eyebrow: "Leadership expansion",
    heroTitle: "Give every manager a system for intervention, not just reporting.",
    heroSummary: "Manager OS turns call quality and rep trend data into one weekly operating layer so leaders know who needs attention, why, and what to do next.",
    audience: "Sales leaders managing multiple reps, pods, or brands",
    pricing: "Usually layered on after AI Call Coaching",
    leadValue: "Strong second product once leaders trust the underlying call data.",
    pains: [
      "Managers can sense the team is off, but they cannot diagnose what is slipping quickly.",
      "Coaching happens reactively through Slack, memory, and random call reviews.",
      "Weekly meetings drift because there is no clear intervention framework.",
    ],
    capabilities: [
      "Rep rankings and decline detection by role, account, and skill area.",
      "Review queue built from flags, score drops, and unresolved coaching items.",
      "Manager-facing workflows anchored in operating rhythm, not ad hoc reactions.",
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
    heroTitle: "See which accounts are healthy, slipping, or quietly breaking.",
    heroSummary: "Client Health blends call quality, fulfillment, rep activity, and revenue indicators into one risk-and-opportunity layer for leadership.",
    audience: "Owners and operators managing a portfolio of client accounts or brands",
    pricing: "Portfolio-tier pricing or custom expansion",
    leadValue: "Best sold after at least one operational module is already feeding clean data.",
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
    heroTitle: "Track who owns the deal, what is collected, and what is still at risk.",
    heroSummary: "Revenue Visibility turns payment tracking into an operational layer for managers, reps, and owners so accountability stays attached to the money.",
    audience: "Teams collecting high-ticket payments across multiple reps and payment plans",
    pricing: "Typically sold into multi-module accounts",
    leadValue: "Strong operational upsell once the buyer wants money visibility tied to rep ownership.",
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
    heroTitle: "Standardize how clients and reps go live so growth does not break setup quality.",
    heroSummary: "Sales Onboarding Systems gives your team a structured rollout for client setup, rep readiness, and operational clarity instead of scattered docs and tribal knowledge.",
    audience: "Sales organizations onboarding clients, reps, or both at the same time",
    pricing: "Usually sold as implementation and expansion work",
    leadValue: "High-value once a customer is already relying on your operating system and wants rollout quality to keep pace.",
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
