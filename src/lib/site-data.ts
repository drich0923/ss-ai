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
  { value: "100%", label: "Of calls scored by AI — not the 5% your managers have time for" },
  { value: "14 days", label: "From signed to live. We build it. You use it. No DIY setup." },
  { value: "1 app", label: "Is all you need to start. Pick the one that hurts most." },
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
    title: "Commission Tracker",
    summary: "Automate commission calculations, submissions, and payout approvals.",
    slug: "commission-tracker",
  },
  {
    title: "Setter EOD Dashboard",
    summary: "Daily accountability system for phone and DM setters with team analytics.",
    slug: "setter-eod",
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
    title: "Owner Radar",
    summary: "Automated alerts for account risks, silent breaks, and revenue exposure.",
    slug: "owner-radar",
  },
  {
    title: "Rep Onboarding Portal",
    summary: "Module-based training with knowledge tests and progress tracking.",
    slug: "rep-onboarding",
  },
  {
    title: "Closer Playbook",
    summary: "SOPs, scripts, Loom walkthroughs, and resources in one rep portal.",
    slug: "closer-playbook",
  },
  {
    title: "QC Dashboard",
    summary: "Track rep compliance, pipeline hygiene, and appointment outcomes.",
    slug: "qc-dashboard",
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
    slug: "commission-tracker",
    name: "Commission Tracker",
    eyebrow: "Sales compensation",
    heroTitle: "Automate commissions from submission to payout.",
    heroSummary: "Reps submit cash collected. The system calculates tiers, bonuses, and base salary. Managers approve in one click.",
    audience: "Sales teams paying commissions to closers, setters, or both",
    pricing: "Included with multi-module accounts or standalone setup",
    leadValue: "Eliminate commission disputes and give reps real-time payout visibility.",
    pains: [
      "Commission calculations happen in spreadsheets prone to errors.",
      "Reps do not know what they owe or what they earned until payday.",
      "Managers spend hours reconciling cash collected against payouts.",
      "There is no approval workflow so disputes happen after the fact.",
    ],
    capabilities: [
      "Reps submit cash collected and see their calculated payout instantly.",
      "Support for flat rate, cash-tiered, and unit-tiered commission structures.",
      "Automatic bonus calculation triggered by cash or unit thresholds.",
      "Manager approval workflow with approve, reject, and resubmit flow.",
    ],
    fulfillment: [
      "Configure commission plans per rep type (closer, setter, etc.).",
      "Set payout periods (monthly, semi-monthly, or custom dates).",
      "Train reps on submission flow and managers on approval queue.",
    ],
    outcomes: [
      "Zero spreadsheet commission calculations.",
      "Reps see their payout breakdown before they submit.",
      "Faster payout cycles with fewer disputes.",
    ],
    implementation: [
      "Define commission structures and bonus tiers.",
      "Configure payout periods and reporting preferences.",
      "Roll out to reps and train on the submission flow.",
    ],
  },
  {
    slug: "setter-eod",
    name: "Setter EOD Dashboard",
    eyebrow: "Daily accountability",
    heroTitle: "Daily setter submissions with real analytics.",
    heroSummary: "Phone and DM setters submit their numbers daily. Managers see team-wide performance with 30-plus calculated metrics.",
    audience: "Teams with phone setters, DM setters, or both",
    pricing: "Standalone or included in multi-module accounts",
    leadValue: "Turn daily activity reports into a real accountability system with team analytics.",
    pains: [
      "Setters report numbers in Slack or spreadsheets with no consistency.",
      "Managers cannot compare setter performance across the team.",
      "There is no calculated view of pickup rate, booking rate, or show-to-close.",
      "Daily submissions get lost and are never analyzed at scale.",
    ],
    capabilities: [
      "Structured EOD form: dials, conversations, sets, triage, close metrics, and cash collected.",
      "DM-specific tracking: messages sent, follow-up responses, conversation-to-booking ratios.",
      "Thirty-plus calculated metrics including pickup rate, dials per booking, and show rate.",
      "Summary, monthly, and daily log views with date range filtering.",
    ],
    fulfillment: [
      "Map setters to clients and assign rep types (phone or DM).",
      "Configure the EOD submission form for your workflow.",
      "Train the team on daily submissions and manager review cadence.",
    ],
    outcomes: [
      "Daily accountability without chasing people in Slack.",
      "Instant visibility into setter productivity and conversion rates.",
      "A clear data trail for coaching conversations.",
    ],
    implementation: [
      "Configure rep assignments and submission cadence.",
      "Launch the submission form to the setter team.",
      "Train managers on the analytics views and review rhythm.",
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
    slug: "owner-radar",
    name: "Owner Radar",
    eyebrow: "Executive alerting",
    heroTitle: "Get alerts before accounts break.",
    heroSummary: "Automated monitoring for payment delays, setter silence, quality drops, and account risk across your entire portfolio.",
    audience: "Owners and portfolio operators managing multiple client accounts or brands",
    pricing: "Portfolio-tier pricing, typically bundled with Client Health",
    leadValue: "Stop discovering account problems in fragments. Get severity-ranked alerts in one place.",
    pains: [
      "Account problems surface weeks after they start.",
      "Owners rely on team updates that are inconsistent or late.",
      "There is no automated way to detect silent breaks in activity.",
      "Revenue exposure is invisible until the cash stops coming in.",
    ],
    capabilities: [
      "Severity-ranked alerts for cash, operations, quality, and data gaps.",
      "Client-level health status: healthy, watch, or at-risk.",
      "Portfolio summary: tracked clients, average score, outstanding revenue.",
      "Direct links from each alert to the app where the fix happens.",
    ],
    fulfillment: [
      "Connect payment, setter, and coaching data sources.",
      "Configure alert thresholds per client.",
      "Train the owner on the daily review cadence.",
    ],
    outcomes: [
      "Earlier intervention on at-risk accounts.",
      "Less time in status meetings asking what went wrong.",
      "A single view of portfolio health without app-hopping.",
    ],
    implementation: [
      "Layer it on after two or more apps are feeding data.",
      "Tune alert severity and thresholds for each client.",
      "Build it into the owner weekly review rhythm.",
    ],
  },
  {
    slug: "rep-onboarding",
    name: "Rep Onboarding Portal",
    eyebrow: "Team enablement",
    heroTitle: "Onboard new reps with structure, not chaos.",
    heroSummary: "A day-by-day training portal with modules, embedded content, knowledge tests, and progress tracking.",
    audience: "Sales organizations hiring and ramping new closers or setters",
    pricing: "Included with multi-module accounts or standalone setup",
    leadValue: "Get new reps productive faster with a structured, trackable onboarding path.",
    pains: [
      "Onboarding is a Google Doc or Slack thread that nobody follows.",
      "Managers do not know where new reps are stuck or falling behind.",
      "There is no way to test whether reps absorbed the material.",
      "Each manager onboards differently so quality is inconsistent.",
    ],
    capabilities: [
      "Day-by-day onboarding sections with rich content, Loom videos, and callout blocks.",
      "Knowledge check tests with instant feedback and retake support.",
      "Progress tracking by rep: sections completed, tests passed, time spent.",
      "Admin controls to create, edit, reorder, and publish onboarding content.",
    ],
    fulfillment: [
      "Build or import your onboarding curriculum by day.",
      "Create knowledge check questions for critical modules.",
      "Invite reps and assign them to the onboarding track.",
    ],
    outcomes: [
      "Faster ramp time for new hires.",
      "Clear visibility into who finished what and who is stuck.",
      "A repeatable onboarding process that does not depend on one manager.",
    ],
    implementation: [
      "Map your existing training materials into the day-by-day format.",
      "Add knowledge checks for the most important sections.",
      "Roll out to your next hire and iterate.",
    ],
  },
  {
    slug: "closer-playbook",
    name: "Closer Playbook",
    eyebrow: "Rep resource hub",
    heroTitle: "Every SOP, script, and resource in one place.",
    heroSummary: "A structured playbook portal with Loom walkthroughs, Google Docs embeds, bookmarks, and hierarchical navigation.",
    audience: "Closers, setters, and managers who need a single resource hub for SOPs and training",
    pricing: "Included in multi-module accounts or standalone",
    leadValue: "Stop losing SOPs in Slack threads and Google Drive folders. Give reps one link for everything.",
    pains: [
      "SOPs and scripts live in Slack threads, Google Docs, and memory.",
      "New reps do not know where to find the right resource.",
      "Content is scattered across Notion, Drive, Loom, and bookmarks.",
      "Managers answer the same questions about process repeatedly.",
    ],
    capabilities: [
      "Hierarchical playbook navigation: sales calls, admin, tech, and training sections.",
      "Embed Loom videos, Google Sheets, Docs, and YouTube directly in the portal.",
      "Rep-level bookmarking for quick access to favorite pages.",
      "Admin controls to create pages, embed external content, and reorder navigation.",
    ],
    fulfillment: [
      "Map your existing SOPs, scripts, and Loom libraries into the playbook structure.",
      "Organize into sections: pre-call, during-call, post-call, admin, tech.",
      "Invite reps and train them on the bookmark and search flow.",
    ],
    outcomes: [
      "One link for every SOP, script, and training resource.",
      "Less time answering repeated process questions.",
      "New reps self-serve instead of waiting for a manager walk-through.",
    ],
    implementation: [
      "Audit your existing content and migrate into the playbook.",
      "Set up the navigation hierarchy and assign page types.",
      "Roll out to the team and collect feedback on gaps.",
    ],
  },
  {
    slug: "qc-dashboard",
    name: "QC Dashboard",
    eyebrow: "Compliance and quality",
    heroTitle: "Track rep compliance and pipeline hygiene.",
    heroSummary: "Quality scores, appointment outcomes, pre-call prep, pipeline issues, and activity metrics in one operations view.",
    audience: "Operations managers and team leads running quality control for sales teams on GHL",
    pricing: "Custom pricing based on team size and GHL integration",
    leadValue: "Catch compliance issues and pipeline problems before they cost revenue.",
    pains: [
      "Compliance checks happen manually or not at all.",
      "Pipeline hygiene issues pile up until deals are lost.",
      "There is no consolidated view of appointment show rates and outcomes.",
      "Managers cannot see pre-call and post-call behavior at scale.",
    ],
    capabilities: [
      "Overall quality score with rank badges (Rookie, Pro, Elite, Champion).",
      "Appointment analytics: show rate, close rate, no-show rate, cancellations.",
      "Pre-call preparation tracking: message count, prep pass rate.",
      "Pipeline health: overdue tasks, unassigned opportunities, stale deals.",
    ],
    fulfillment: [
      "Connect GHL and configure webhook sync for opportunities, tasks, and appointments.",
      "Define compliance check criteria and scoring thresholds.",
      "Set up Slack notifications for QC reports.",
    ],
    outcomes: [
      "Automated compliance tracking instead of manual spot-checks.",
      "Fewer lost deals from pipeline hygiene issues.",
      "Clear accountability for pre-call and post-call behavior.",
    ],
    implementation: [
      "Connect GHL and validate webhook data flow.",
      "Configure QC scoring criteria and rank thresholds.",
      "Train ops managers on the report review cadence.",
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
