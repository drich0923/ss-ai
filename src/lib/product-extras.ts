export type ProductExtra = {
  definitions: { term: string; formula: string; text: string }[]
  faqs: { q: string; a: string }[]
  guides: { href: string; label: string }[]
}

const rates = [
  { term: "Show rate", formula: "attended / booked", text: "Calls where someone showed up, divided by calls that were booked." },
  { term: "Close rate", formula: "matched payment closes / held calls", text: "A close counts when a payment matches. The denominator is held calls." },
  { term: "Cash per call", formula: "cash collected / held calls", text: "Cash collected, divided by held calls. Not the amount typed on an opportunity." },
]

export const productExtras: Record<string, ProductExtra> = {
  revphlo: {
    definitions: rates,
    guides: [
      { href: "/high-ticket-close-rate-and-show-rate-benchmarks", label: "How to measure close rate and show rate" },
      { href: "/how-to-improve-show-rate", label: "How to improve show rate" },
      { href: "/how-to-improve-close-rate", label: "How to improve close rate" },
    ],
    faqs: [
      { q: "What does certified mean here?", a: "Show rate, close rate, and cash per call are counted from the call and from payments. A close counts only when a payment matches. An edit that makes a call look better than it was is flagged." },
      { q: "Who writes the call note?", a: "RevPhlo writes a note from the call. The rep approves it in Slack. It is not a note typed from memory after the hang up." },
      { q: "Which tools does it connect?", a: "About 20 sources, including GoHighLevel, HubSpot, iClosed, Zoom, Fathom, Stripe, Whop, Commas, Zapier, Typeform, PandaDoc, Hyros, Cortana, Slack, and Google Sheets." },
      { q: "Does this replace our CRM?", a: "No. The CRM stays. RevPhlo is the part of the system that certifies the numbers and sends the daily brief." },
      { q: "Will you coach reps off these numbers?", a: "No. We install it and show your team how to read it. Your manager, or you, decides what to coach." },
    ],
  },
  "hiring-app": {
    definitions: [
      { term: "Application page", formula: "one public page", text: "Candidates apply in one place instead of in DMs and inboxes." },
      { term: "Review", formula: "your team compares", text: "Your team reviews and compares applicants. The page does not hire them." },
    ],
    guides: [
      { href: "/how-to-hire-high-ticket-closers", label: "How to hire high ticket closers" },
      { href: "/how-to-hire-appointment-setters", label: "How to hire appointment setters" },
      { href: "/closer-onboarding-30-60-90-day-plan", label: "What happens after you hire" },
    ],
    faqs: [
      { q: "Do you hire the reps?", a: "No. We do not hire, ramp, or manage reps. Your team uses the page to take applications and compare people." },
      { q: "Is there a recorded call or a score on candidates?", a: "Not in this part. It is a public application page and one place to review. We do not claim video review or automated candidate scoring." },
      { q: "Who decides who gets an offer?", a: "Your team. We set up the page and show you how to use it." },
      { q: "When should we turn this on?", a: "When you are about to hire, or you already hire often enough that applicants arrive in five places. If you have no reps yet, get the first hire moving, then put the next one through the page." },
    ],
  },
  "speed-to-lead": {
    definitions: [
      { term: "Lead response time", formula: "first call time minus lead created time", text: "Per setter. A team average hides the person who did not call." },
      { term: "Where it works", formula: "GoHighLevel only", text: "This part times leads that live in GoHighLevel. It does not time other CRMs." },
    ],
    guides: [
      { href: "/speed-to-lead-for-coaching-businesses", label: "Speed to lead for coaching businesses" },
      { href: "/how-to-improve-show-rate", label: "How to improve show rate" },
      { href: "/setter-eod-report-template", label: "Setter end of day template" },
    ],
    faqs: [
      { q: "What does Speed to Lead show?", a: "Who called a new lead, and when. Your team can see the wait." },
      { q: "Does it call the lead?", a: "No. Your setters make the calls. We connect GoHighLevel and show the team how to read the view." },
      { q: "Does it send alerts?", a: "We do not claim alerts. The part shows who called and when." },
      { q: "Will it work with HubSpot?", a: "No. Speed to Lead works with GoHighLevel only." },
      { q: "Is a team average enough?", a: "No. Read it per setter, and list leads nobody called. The guide explains why." },
    ],
  },
  "ai-call-coaching": {
    definitions: [
      { term: "Call scorecard", formula: "same rows, every call", text: "Opener, discovery, offer and close, next step, and whether the note matches the call." },
      { term: "Review queue", formula: "weak calls first", text: "Managers get flags and a queue instead of a random sample." },
    ],
    guides: [
      { href: "/sales-call-scorecard-template", label: "Sales call scorecard template" },
      { href: "/how-to-improve-close-rate", label: "How to improve close rate" },
      { href: "/high-ticket-sales-script-setter-and-closer", label: "Setter and closer scripts" },
    ],
    faqs: [
      { q: "Where do transcripts come from?", a: "Sources such as RevPhlo and Fathom. We connect one source, map reps, and install a rubric." },
      { q: "Does the AI coach the rep?", a: "It scores and flags. Your manager coaches. We do not coach your reps." },
      { q: "Can the scorecard change by role?", a: "Yes. Scorecards are set by rep type, with the focus areas you choose." },
      { q: "What if we want the rubric on paper?", a: "Use the scorecard guide. It covers the same checks: opener, discovery, offer, close, next step, and the note." },
    ],
  },
  "manager-os": {
    definitions: [
      { term: "The day list", formula: "one queue", text: "Rankings, decline, and the calls to review, in one place a manager opens." },
      { term: "Who runs it", formula: "your manager, or you", text: "A founder with no sales manager can still run the day from this list." },
    ],
    guides: [
      { href: "/founder-led-sales-team-without-a-manager", label: "Run closers without a sales manager" },
      { href: "/sales-system-vs-hiring-a-sales-manager", label: "System or a sales manager first" },
      { href: "/sales-call-scorecard-template", label: "Call scorecard" },
    ],
    faqs: [
      { q: "Does Manager OS require a sales manager?", a: "No. If you run the reps yourself, you are the person who opens it. The list does not require a second salary." },
      { q: "What has to exist first?", a: "Call scoring. Manager OS turns on once AI coaching is live, then you set a review cadence." },
      { q: "Will you run our sales meetings?", a: "No. We show leaders how to run the day from it. Your team still manages." },
      { q: "What if I want someone else to manage the reps?", a: "That is a people offer. See the guide on installing a system or hiring a manager, including the link to sales management." },
    ],
  },
  "setter-eod": {
    definitions: [
      { term: "Phone attempt", formula: "a dial", text: "Dials, conversations, and sets. Do not mix these with DM messages." },
      { term: "DM attempt", formula: "a message", text: "Messages sent, replies, and bookings. A separate channel from phone." },
      { term: "CRM check", formula: "form versus the record", text: "The submission is a claim. Booked sets and calls still have to exist in the CRM." },
    ],
    guides: [
      { href: "/setter-eod-report-template", label: "Setter end of day template" },
      { href: "/how-to-hire-appointment-setters", label: "How to hire appointment setters" },
      { href: "/how-to-improve-show-rate", label: "How to improve show rate" },
    ],
    faqs: [
      { q: "What do setters submit?", a: "Phone: dials, conversations, sets, triage, and cash if you track it. DM: messages, follow ups, and bookings. The tracker calculates rates such as pickup rate and dials per booking." },
      { q: "Are the typed numbers the source of truth?", a: "No. Check them against the CRM. A set that is not on the calendar did not happen." },
      { q: "Does this time the first call?", a: "No. That is Speed to Lead, and it works with GoHighLevel only. End of day is the setter's summary." },
      { q: "Who reviews it?", a: "Your manager, or you. We show setters how to submit and managers how to read the views." },
    ],
  },
  "qc-dashboard": {
    definitions: [
      { term: "Prep", formula: "messages and a prep pass", text: "Whether the work before the call happened. QC tracks message count and prep pass rate." },
      { term: "Pipeline hygiene", formula: "tasks and ownership", text: "Overdue tasks, unassigned opportunities, and stale deals." },
      { term: "Show rate", formula: "attended / booked", text: "Appointment outcomes live here too. Certified cash still lives in RevPhlo." },
    ],
    guides: [
      { href: "/sales-call-scorecard-template", label: "Call scorecard template" },
      { href: "/how-to-improve-close-rate", label: "How to improve close rate" },
      { href: "/sales-playbook-template", label: "Sales playbook template" },
    ],
    faqs: [
      { q: "What CRM does QC use?", a: "GoHighLevel. It syncs opportunities, tasks, and appointments." },
      { q: "Is QC the same as AI call scoring?", a: "No. QC is compliance and pipeline hygiene: prep, outcomes, overdue work. AI Call Coaching scores what was said on the transcript." },
      { q: "What is the rank on the quality score?", a: "The view shows a quality score with rank badges. Your team sets the thresholds. We do not publish a universal passing score." },
      { q: "Does a QC show rate replace RevPhlo?", a: "No. Use QC to see if the calendar and the pipeline are being worked. Use RevPhlo when a close has to match a payment." },
    ],
  },
  "closer-playbook": {
    definitions: [
      { term: "Playbook", formula: "one link", text: "Scripts, SOPs, and Loom walkthroughs in one place, instead of a Drive folder and a Slack thread." },
      { term: "What it is not", formula: "not the scorecard", text: "The playbook is the standard. The scorecard is how a call is judged against it." },
    ],
    guides: [
      { href: "/high-ticket-sales-script-setter-and-closer", label: "Setter and closer scripts" },
      { href: "/sales-playbook-template", label: "Sales playbook template" },
      { href: "/closer-onboarding-30-60-90-day-plan", label: "30 60 90 day onboarding" },
    ],
    faqs: [
      { q: "What goes in the playbook?", a: "The script, the objections, SOPs, and the Loom or doc the rep should open. Sections cover the call, admin, tech, and training." },
      { q: "Do reps still ask you questions?", a: "They will, once. Put the answer in the playbook and send the link. The next hire should not need a different story." },
      { q: "Is this where calls get scored?", a: "No. Scoring is AI Call Coaching and the scorecard. The playbook is the reference those scores point at." },
      { q: "Who fills it in?", a: "We map what you already have into the structure and show the team how to use it. Your team owns the words." },
    ],
  },
  "rep-onboarding": {
    definitions: [
      { term: "Day by day ramp", formula: "modules plus a test", text: "Sections, Loom, and a knowledge check with a stored result." },
      { term: "Gates", formula: "product test, shadow, role play, live calls", text: "Your manager signs each gate. The system stores progress. It does not declare a rep ready." },
    ],
    guides: [
      { href: "/closer-onboarding-30-60-90-day-plan", label: "30 60 90 day plan" },
      { href: "/sales-playbook-template", label: "Sales playbook the ramp uses" },
      { href: "/how-to-hire-high-ticket-closers", label: "Hiring, before onboarding" },
    ],
    faqs: [
      { q: "Do you ramp the new closer?", a: "No. We do not ramp or coach reps. We install the modules and show your team how to run them." },
      { q: "What is stored?", a: "Sections completed, tests passed, and time in the material. Retakes are supported." },
      { q: "What are the gates before live calls?", a: "A product test, shadowed calls, and a role play. Then a capped set of live calls with a review. The guide writes the 30 60 90 order." },
      { q: "Can each manager invent their own ramp?", a: "They can, and that is the failure. One published track is the point." },
    ],
  },
  "commission-tracker": {
    definitions: [
      { term: "Payable cash", formula: "cash collected in the period", text: "Not contract value. A payment plan pays as each installment arrives." },
      { term: "Plans", formula: "flat, cash tier, or unit tier", text: "Plus bonuses when a threshold is written down. A manager approves the submission." },
    ],
    guides: [
      { href: "/high-ticket-closer-commission-structure", label: "Commission structures and the template" },
      { href: "/compare/commission-software-vs-sales-team-os", label: "QuotaPath, Spiff, or this system" },
      { href: "/products/revphlo", label: "Cash matched to a payment" },
    ],
    faqs: [
      { q: "What do reps submit?", a: "Cash collected. They see the calculated payout. A manager approves, rejects, or sends it back." },
      { q: "Which plan shapes work?", a: "Flat rate, cash tiers, and unit tiers, with bonuses on a cash or unit threshold. Set the period: monthly, twice a month, or custom dates." },
      { q: "Does it pay the bank transfer?", a: "No. It calculates and approves what is owed. Payroll still pays the person." },
      { q: "How are refunds handled?", a: "Put the cash that went back out into the submission so the approval sees it. The guide covers clawbacks. This is not a silent reversal." },
      { q: "Is this QuotaPath or Spiff?", a: "No. Those are commission products. This tracker is one part of the sales system. The comparison guide says which problem each one fits." },
    ],
  },
  "revenue-visibility": {
    definitions: [
      { term: "Collected", formula: "cash that arrived", text: "Separate from outstanding balance and from a deal marked sold." },
      { term: "Owner", formula: "closer and setter on the money", text: "The person attached to follow through stays attached after the call." },
    ],
    guides: [
      { href: "/high-ticket-close-rate-and-show-rate-benchmarks", label: "Cash per call and matched payments" },
      { href: "/high-ticket-closer-commission-structure", label: "Paying on collected cash" },
    ],
    faqs: [
      { q: "What problem does this part solve?", a: "Collected and outstanding money, with a closer and a setter still attached, instead of a spreadsheet that loses the owner after the sale." },
      { q: "Is pipeline value the same as collected cash?", a: "No. Pipeline value is a forecast. Collected cash arrived. Outstanding is what is still owed." },
      { q: "Who uses it?", a: "Managers, reps, and owners, filtering the deals they own and the ones nobody owns." },
      { q: "Does this replace the commission tracker?", a: "No. This is follow through on the money. The commission tracker is how a payout is submitted and approved." },
    ],
  },
  "sales-onboarding": {
    definitions: [
      { term: "Board", formula: "one list of steps", text: "Client setup and rep readiness on one board, with an owner per step." },
      { term: "Ready", formula: "the step is done, not assumed", text: "A launch is ready when the steps are checked, not when someone says it feels ready." },
    ],
    guides: [
      { href: "/closer-onboarding-30-60-90-day-plan", label: "Closer 30 60 90 day plan" },
      { href: "/sales-team-operating-system", label: "The system this board belongs to" },
    ],
    faqs: [
      { q: "Who is this for?", a: "A team onboarding clients, reps, or both, when sales and ops otherwise split the steps." },
      { q: "Does this ramp a closer by itself?", a: "No. Closer Onboarding holds the rep curriculum and the tests. This board is the launch checklist across teams." },
      { q: "Can a client see the board?", a: "You can keep a client visible stream and an internal stream. Set that on purpose." },
      { q: "Who has to own it?", a: "One operational owner. A board with no owner becomes another doc." },
    ],
  },
}
