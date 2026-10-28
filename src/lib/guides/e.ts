import type { Guide } from "@/lib/guide-types"
import { publishedProof } from "@/lib/proof"

const brand = "The Sales Team OS by Systemized Sales AI"

export const guidesE: Guide[] = [
  {
    slug: "sales-call-scorecard-template",
    path: "/sales-call-scorecard-template",
    nav: "Call scorecard",
    title: "Sales Call Scorecard Template for High Ticket Closers",
    h1: "Sales Call Scorecard Template for High Ticket Closers",
    description: "A sales call scorecard for high ticket closers, covering the same checks as call QC and AI call coaching: opener, discovery, offer, close, next step, and whether the note matches the call.",
    answer: [
      "A sales call scorecard is a short list of behaviors on one call, scored the same way every time. Without it, coaching is whoever listened last and how they felt.",
      "Use the template below for a manager review. It matches the checks AI Call Coaching and the QC view already care about: the opener, discovery, the offer and the close, the next step, whether the note matches the call, and whether prep and the pipeline were done. The Sales Team OS by Systemized Sales AI can score calls from a transcript. The sheet is still useful when a manager wants the rubric on one page.",
    ],
    sections: [
      {
        h2: "What to score, and what to leave off",
        paragraphs: [
          "Score what a closer can redo on the next call. The opener. The questions that found the problem and the money. How the offer was put in front of the prospect. Whether a decision was asked for. Whether a next step exists if they did not buy. Those are coachable.",
          "Leave off taste. 'Energy' with no definition becomes a personality contest. If you care about pace or talk time, define the behavior. Do not add a row you cannot point to in the recording.",
          "Add two honesty checks. Did the written note match the call, or was it edited to look better? Did the closer prepare, and is the opportunity assigned with a task that is not stale? QC already looks at prep messages and pipeline hygiene. The scorecard should not ignore them just because they happen off the recording.",
        ],
      },
      {
        h2: "How AI coaching and QC use a scorecard",
        paragraphs: [
          "AI Call Coaching pulls transcripts from sources such as RevPhlo and Fathom, applies a scorecard for that rep type, and gives a manager a queue of flags, summaries, and assignments. The point is to listen to the weak calls first, not to sample at random and call it coverage.",
          "QC is the operations view. It tracks a quality score, appointment outcomes, prep before the call, and pipeline problems such as overdue tasks and unassigned opportunities. It connects to GoHighLevel. It is not a second transcript grader. Use it for compliance. Use the call scorecard for what was said.",
          "The points on the template are blanks on purpose. Your rubric sets them. We will not publish a universal passing score. A team that copies someone else's points will coach toward a call they do not run.",
        ],
      },
      {
        h2: "How a manager should use the sheet",
        paragraphs: [
          "One call, one row. Fill it while the recording is open. Write the coach note as the next rep action, not as a verdict on the person. Then assign the review. A score with no owner is a spreadsheet hobby.",
          "Do this on a cadence you will keep. A founder with a few closers can review the flagged calls, not every call, if the scoring already covered the rest. A manager with a larger team should live in the queue. Either way, the closer should know the rows in advance. A secret rubric is not coaching.",
          "We install the scoring and show the manager how to run the queue. We do not coach the reps for you.",
          "Calibrate the card on five real calls before you trust it. If two listeners cannot agree on discovery, the row is vague and the rep will argue the score instead of the call. Tighten the row, then use it. A card nobody can repeat is not a standard.",
        ],
      },
    ],
    template: {
      title: "Call scorecard template",
      headers: ["Call", "Rep", "Opener", "Discovery", "Offer and close", "Next step", "Note matches call", "Prep done", "Coach note"],
      rows: [
        ["14 Oct, 2pm", "Alex", "yes or no", "found budget and problem", "asked for the decision", "booked or clear no", "yes or no", "yes or no", "one action for the next call"],
        ["14 Oct, 4pm", "Alex", "", "", "", "", "", "", ""],
      ],
      csv: "/guides/sales-call-scorecard.csv",
    },
    handles: `${brand} scores calls in AI Call Coaching and checks prep and pipeline in QC. The template is the same list a manager can hold while they listen. Playbooks hold the script those rows are judging.`,
    handleLinks: [
      { href: "/products/ai-call-coaching", label: "AI Call Coaching" },
      { href: "/products/qc-dashboard", label: "QC dashboard" },
      { href: "/products/closer-playbook", label: "Closer and setter playbooks" },
      { href: "/products/manager-os", label: "Manager OS" },
    ],
    proof: publishedProof,
    related: [
      { href: "/closer-onboarding-30-60-90-day-plan", label: "30 60 90 day closer onboarding" },
      { href: "/high-ticket-sales-script-setter-and-closer", label: "Setter and closer scripts" },
      { href: "/sales-playbook-template", label: "Sales playbook template" },
    ],
    faqs: [
      { q: "What should a sales call scorecard include?", a: "Opener, discovery, offer and close, next step, whether the note matches the call, and whether prep was done. Add a row only if you can point to it on the recording or in the CRM. Skip vague traits." },
      { q: "Is this the same rubric the AI uses?", a: "It covers the same checks: a scorecard by rep type, flags for weak calls, and a manager queue. Your points and focus areas are configured for your team. The CSV is a blank of that shape, not a claim that every account uses these exact words." },
      { q: "How many calls should a manager score by hand?", a: "The ones the queue flags, plus any call tied to a dispute. Scoring every minute by hand does not scale, which is why the transcript scoring exists. Hand scoring is for calibration and for the conversation with the rep." },
      { q: "Does QC replace the scorecard?", a: "No. QC is prep, appointment outcomes, and pipeline hygiene, especially on GoHighLevel. The scorecard is what happened on the call. You want both." },
      { q: "Will you coach my closers from the scores?", a: "No. We install the scoring and show your manager, or you, how to use the queue. Your team does the coaching." },
    ],
  },
  {
    slug: "closer-onboarding-30-60-90-day-plan",
    path: "/closer-onboarding-30-60-90-day-plan",
    nav: "30 60 90 day plan",
    title: "A 30 60 90 Day Onboarding Plan for New High Ticket Closers",
    h1: "A 30 60 90 Day Onboarding Plan for New High Ticket Closers",
    description: "A 30 60 90 day plan for a new high ticket closer, with certification gates: product test, shadowing, role play, and first live calls. The manager signs off. We do not ramp the rep for you.",
    answer: [
      "A new high ticket closer should not take live calls because the calendar had a hole. They should pass a product test, shadow real calls, role play the offer, and then take a small set of live calls with a review after each one.",
      "Days 1 to 30 are certification. Days 31 to 60 are live calls under a tight review. Days 61 to 90 are a normal load with the same scorecard as everyone else. The Sales Team OS by Systemized Sales AI holds the modules, the tests, and the progress. Your manager still decides the rep is ready.",
    ],
    sections: [
      {
        h2: "Days 1 to 30: certify before they sell",
        paragraphs: [
          "Week one is the offer, the buyer, the price, and the payment plans. The product test is a knowledge check, not a vibe. If they cannot explain who the offer is for and what happens after a yes, they are not ready to talk to a prospect. The onboarding system stores the modules and the test, with retakes, so the result is not a Slack message.",
          "Shadowing comes next. They sit on live calls and fill the same scorecard you use for coaching. The point is not attendance. The point is whether their notes match what happened. A rep who cannot hear a call will not run one.",
          "Role play is the gate before a live calendar. Another closer or the manager plays the prospect, including the stall and the money objection. Pass means they can open, discover, state the offer, and ask for a decision without inventing terms. Fail means they repeat it. Do not skip this because a lead came in.",
        ],
      },
      {
        h2: "Days 31 to 60: a small live load",
        paragraphs: [
          "First live calls are a capped set, not a full roster. After each one, the manager reviews the scorecard and the note. A close still counts only when a payment matches, even in this window. Do not create a beginner version of the truth.",
          "This is also when they learn the tools: approving a note in Slack, reading show rate and close rate, submitting cash collected. Training on how to use the system is part of the ramp your manager runs. We show your team how the parts work. We do not sit with every new hire.",
          "If the rep is failing the same row on the scorecard, stop adding calls. More volume will not fix a broken offer explanation. Fix the row, role play it again, then reopen the calendar.",
        ],
      },
      {
        h2: "Days 61 to 90: a normal seat",
        paragraphs: [
          "By day 90 the closer should be on the same weekly scorecard as the rest of the team: show rate, close rate, and cash per call, plus the call scores. Compare them to their own first live weeks, not to your best closer's best month.",
          "The playbook is the reference, not the manager's memory. If the new hire asks a question that is already answered, put the answer in the playbook and send the link. That is how the next hire is faster without a different story.",
          "Hiring still belongs to you. The application page is where candidates apply and where your team compares them. This plan starts after you choose someone. It does not choose them.",
          "Write the pass rule next to each gate before the hire starts. A test score, a number of shadowed calls, a role play the manager signs, a cap on live calls. If the rule is 'when they seem ready', the plan collapses the first week someone is impatient.",
        ],
      },
    ],
    checklist: {
      title: "Certification gates",
      items: [
        "Product test passed, with the score stored, not remembered.",
        "Shadowed calls scored on the same card the team uses.",
        "Role play passed for opener, discovery, offer, and the ask.",
        "First live calls capped, each one reviewed.",
        "Note approval and cash submission shown before day 60 ends.",
        "Day 90 review uses show rate, close rate, and cash per call.",
      ],
    },
    handles: `${brand} stores this ramp in Closer Onboarding: day by day modules, tests, and progress by rep. Playbooks hold the script. AI Call Coaching reviews the live calls once they start. Your manager signs every gate.`,
    handleLinks: [
      { href: "/products/rep-onboarding", label: "Closer onboarding" },
      { href: "/products/closer-playbook", label: "Playbooks" },
      { href: "/sales-call-scorecard-template", label: "Call scorecard" },
      { href: "/products/hiring-app", label: "Hiring App" },
    ],
    proof: publishedProof,
    related: [
      { href: "/how-to-hire-high-ticket-closers", label: "How to hire high ticket closers" },
      { href: "/sales-playbook-template", label: "Sales playbook template" },
      { href: "/high-ticket-sales-script-setter-and-closer", label: "Setter and closer scripts" },
    ],
    faqs: [
      { q: "What should a 30 60 90 day sales plan include?", a: "Days 1 to 30: product test, shadowing, and role play. Days 31 to 60: a capped set of live calls with a review after each. Days 61 to 90: a normal load judged on the same show rate, close rate, and cash per call as the rest of the team." },
      { q: "Who certifies that a closer is ready?", a: "Your manager, or you if you do not have one. The system stores the test and the progress. It does not declare a rep ready on its own." },
      { q: "Do you ramp the new hire for us?", a: "No. We do not ramp, coach, or manage reps. We install the onboarding modules and show your team how to run the gates." },
      { q: "Should a new closer be paid the full plan on day one?", a: "Pay on cash collected from the start, so the definition of a sale never changes. If you want a temporary base or a draw, write it down with an end date. Do not invent it in the sheet later." },
      { q: "What if we need them on calls in week one?", a: "Then you are choosing speed over certification. Say so, and do not pretend the plan happened. The usual cost is a rep learning the offer on a prospect." },
    ],
  },
  {
    slug: "setter-eod-report-template",
    path: "/setter-eod-report-template",
    nav: "Setter EOD template",
    title: "Setter EOD Report Template for Phone and DM Setters",
    h1: "Setter EOD Report Template for Phone and DM Setters",
    description: "An end of day report template for phone and DM setters: dials or messages, conversations, sets, and cash. Plus why those numbers have to be checked against the CRM.",
    answer: [
      "An end of day report is the setter's own account of the day: attempts, conversations, sets booked, and follow up. It is useful because it is structured. It is dangerous if you treat it as the CRM.",
      "Phone setters and DM setters should not share one unlabeled form. The Sales Team OS by Systemized Sales AI gives each a submission and a calculated view. You still check the submission against GoHighLevel, or against whatever system holds the leads, before you coach from it.",
    ],
    sections: [
      {
        h2: "What belongs on the report",
        paragraphs: [
          "Phone setters report dials, conversations, sets booked, and the calls that need a follow up. DM setters report messages sent, replies, and bookings. Mixing those into one 'activity' number makes both jobs look the same and neither job coachable.",
          "Add a note for triage: leads that were not a fit, leads that asked to be called later, and leads nobody reached. Those notes explain a low booking rate. Without them, a manager assumes the setter is lazy or the leads are bad, and is often wrong about which.",
          "Cash collected can sit on the same form when setters are paid on cash, but it is not a setter KPI for skill. Booking rate and the show rate of their sets are the skill numbers. Cash is payroll. Keep the columns, and do not pretend they are one idea.",
        ],
      },
      {
        h2: "Why the CRM wins an argument",
        paragraphs: [
          "Setters are tired at the end of the day. They round. They forget a block of dials. They count a voicemail as a conversation. None of that requires bad intent. It does mean the form is a claim, and the CRM is the record.",
          "Check three things. Did the sets they claimed actually get booked on the calendar? Did the conversations line up with calls or messages in the account? Did any lead they marked done still have no activity? If the form and the CRM disagree, coach from the CRM and fix the form habit.",
          "Speed to lead makes the check sharper on GoHighLevel. Who called, and when, is not something the setter should be trusted to remember. The end of day note explains the day. The clock proves the first call.",
        ],
      },
      {
        h2: "How managers should read a week of forms",
        paragraphs: [
          "Do not coach a single day unless the miss is a lead that was never called. Coach the week. Pickup or reply rate, booking rate, and show rate of the sets will move around on a Tuesday. A pattern across five submissions is a conversation.",
          "The tracker calculates rates from the submissions, including pickup rate and dials per booking, and it keeps a daily log. That saves you from rebuilding the math. It does not save you from a wrong input. Calculation on a bad count is a precise mistake.",
          "We configure the form, show setters how to submit, and show the manager how to read the views. Your team still does the dialing and the messaging.",
          "Keep the form short enough that a setter will finish it. A twenty field diary gets skipped, and then you have no claim to compare to the CRM. The columns in the template are enough for a coaching week. Add a field only when a decision depends on it.",
        ],
      },
    ],
    template: {
      title: "Setter end of day template",
      headers: ["Date", "Setter", "Channel", "Attempts", "Conversations", "Sets booked", "Follow ups due", "Cash collected", "Matches CRM", "Note"],
      rows: [
        ["14 Oct", "Jordan", "Phone", "80", "22", "6", "4", "0", "yes or no", "Two leads asked for Thursday"],
        ["14 Oct", "Sam", "DM", "40", "15", "3", "7", "0", "yes or no", "One lead unqualified"],
      ],
      csv: "/guides/setter-eod-template.csv",
    },
    definitions: [
      { term: "Pickup or reply rate", formula: "conversations / attempts", text: "Phone: conversations divided by dials. DM: replies divided by messages. Do not blend them." },
      { term: "Booking rate", formula: "sets booked / conversations", text: "Booked calls divided by conversations, not by attempts." },
      { term: "Show rate of sets", formula: "attended / booked by that setter", text: "Attended divided by the calls that setter booked. This is not the closer's close rate." },
    ],
    handles: `${brand} runs phone and DM end of day in the setter trackers, with the calculated rates and a daily log. Speed to Lead, on GoHighLevel, is the check for who called. RevPhlo is still the source for show rate once the call is attended.`,
    handleLinks: [
      { href: "/products/setter-eod", label: "Phone and DM setter trackers" },
      { href: "/products/speed-to-lead", label: "Speed to Lead" },
      { href: "/high-ticket-sales-team-kpis", label: "Setter KPIs" },
    ],
    proof: publishedProof,
    related: [
      { href: "/how-to-hire-appointment-setters", label: "How to hire appointment setters" },
      { href: "/how-to-improve-show-rate", label: "How to improve show rate" },
    ],
    faqs: [
      { q: "What is on a setter end of day report?", a: "Date, setter, channel, attempts, conversations, sets booked, follow ups, and a note. Cash collected if you pay on it. A yes or no for whether the row matched the CRM." },
      { q: "Why not trust the form?", a: "Because it is typed at the end of the day. Sets have to exist on the calendar. Calls and messages have to exist in the CRM. If they do not, the form is wrong even when the setter believes it." },
      { q: "Should phone and DM setters use the same fields?", a: "No. Dials are not messages. Use the same shape of report and different attempt definitions, or the rates will lie." },
      { q: "Does the tracker check the CRM for me?", a: "It gives you the submissions and the calculated view. You, or a manager, still compare the row to the CRM. We do not claim the form audits itself." },
      { q: "Is end of day the same as speed to lead?", a: "No. End of day is the setter's summary. Speed to lead is who called a new lead and how long that lead waited, and in this system it works with GoHighLevel only." },
    ],
  },
  {
    slug: "commission-software-vs-sales-team-os",
    path: "/compare/commission-software-vs-sales-team-os",
    nav: "Commission software or the system",
    title: "QuotaPath, Spiff or a Sales Team System: Which Fits a High Ticket Coaching Team",
    h1: "QuotaPath, Spiff or a Sales Team System: Which Fits a High Ticket Coaching Team",
    description: "QuotaPath and Salesforce Spiff calculate what a rep is owed. A high ticket coaching team that also needs hiring, onboarding, speed to lead, call quality, and certified rates needs a system. Here is the honest split.",
    answer: [
      "QuotaPath and Salesforce Spiff are commission products. They calculate incentive pay. They are a fit when the problem you have is commission math, quota attainment, and payouts, and the rest of the sales team already has a way to run.",
      "They are the wrong only purchase when the problem is the team: who called the lead, whether show rate and close rate are real, whether calls are coached, how a new closer ramps, and how pay is approved. The Sales Team OS by Systemized Sales AI is that wider install. The commission tracker is one part of it, not the whole thing.",
    ],
    sections: [
      {
        h2: "What QuotaPath and Spiff actually are",
        paragraphs: [
          "QuotaPath's own site describes it as sales commission tracking software. It builds compensation plans, syncs deal data, and runs approvals and payouts. Its help center says the CRM sync it documents for Salesforce and HubSpot is a one way sync into QuotaPath. Read https://www.quotapath.com/ and their help center before you buy. We are not restating their feature list as if it cannot change.",
          "Salesforce sells Spiff as incentive compensation management. Salesforce's product page describes automated commission calculations, plan design, and visibility into attainment, on Salesforce. Salesforce also publishes a price on its Spiff pricing page. Check that page for the current number. We are not pinning a price here, because a copied price goes stale.",
          "Both products are built to answer what a rep is owed. That is a real job. It is not hiring, it is not a 30 60 90 day ramp, it is not who called a new lead, and it is not a close that counts only when a payment matches a held call.",
        ],
      },
      {
        h2: "What a high ticket coaching team usually pays",
        paragraphs: [
          "Coaching, education, and service teams that sell on a booked call often pay closers and setters on cash collected. Splits and payment plans are normal. A refund should claw the commission back. Quota style attainment, the percent of a quarterly number, is a different plan shape, common in software sales and less often the whole story here.",
          "A commission product can be configured for more than one plan shape. Do not take this page as a claim that QuotaPath or Spiff cannot pay on collected cash. Take it as a scope line. If you only need the pay math, buy pay math. If you need the pay math because nobody trusts the close, the close is the problem to fix first.",
          "Our commission tracker is the narrow part that overlaps them. Reps submit cash collected and see a calculated payout. Plans can be flat, cash tiered, or unit tiered, with bonuses. A manager approves, rejects, or sends the submission back. It does not claim to be a payroll system, and it does not claim their quota modeling.",
        ],
      },
      {
        h2: "Which fit is which",
        paragraphs: [
          "Choose QuotaPath or Spiff if the team already runs, the CRM is already the source of deals, and finance wants a dedicated commission system, especially if you live in Salesforce or HubSpot and you want their documented sync. Confirm the current integrations on their sites. We will not rank them against each other.",
          "Choose the system if the reps exist and the work is still scattered: notes, show rate, lead speed, call quality, onboarding, and pay. Installing only a commission tool will make payday cleaner and leave the rest of the week the same.",
          "You can outgrow a sheet without needing either brand. Three reps with splits and refunds are enough to leave a private spreadsheet. That does not mean you must buy the largest compensation suite. Match the purchase to the hole.",
        ],
      },
    ],
    checklist: {
      title: "A straight choice",
      items: [
        "If the only pain is calculating pay, shortlist a commission product and read its current docs.",
        "If you cannot trust show rate or close rate, fix the definition before you automate pay on top of it.",
        "If setters' first calls are invisible, a commission tool will not time them.",
        "If a new closer ramps from a different story each time, a commission tool will not hold the 30 60 90 plan.",
        "If you want people to manage the reps, that is sales management, not commission software and not this install.",
      ],
    },
    handles: `${brand} includes the commission tracker beside certified numbers, speed to lead on GoHighLevel, call scoring, onboarding, and the rest of the parts. We install it and show your team how to use it. We do not run payroll, and we do not manage the reps.`,
    handleLinks: [
      { href: "/products/commission-tracker", label: "Commission Tracker" },
      { href: "/high-ticket-closer-commission-structure", label: "Closer and setter commission structures" },
      { href: "/sales-team-operating-system", label: "The 10 parts" },
      { href: "https://systemizedsales.com/sales-management", label: "Sales management, if you want people" },
    ],
    proof: publishedProof,
    related: [
      { href: "/high-ticket-closer-commission-structure", label: "Commission structures and the template" },
      { href: "/sales-system-vs-hiring-a-sales-manager", label: "System or a sales manager" },
    ],
    faqs: [
      { q: "Is QuotaPath a sales team operating system?", a: "No. QuotaPath describes itself as sales commission tracking software: plans, deal sync, approvals, and payouts. That is pay. A sales team operating system also covers hiring, ramp, lead speed, call quality, and certified show rate and close rate." },
      { q: "Is Spiff a Spiff alternative question or a Salesforce product?", a: "Salesforce sells it as Salesforce Spiff, incentive compensation management. Treat it as commission software on Salesforce. Check Salesforce's current product and pricing pages. This page is not a coupon and not a rank." },
      { q: "Can commission software pay on collected cash?", a: "Many plans can be configured that way. We are not claiming QuotaPath or Spiff are unable to. We are saying a high ticket coaching team usually cares about collected cash, splits, and payment plans, and still has problems a pay tool does not solve." },
      { q: "Do you integrate with QuotaPath or Spiff?", a: "Not as a stated part of this system. Reps submit cash collected in the commission tracker and a manager approves it. If you already pay through one of those products, do not assume we sync to it." },
      { q: "Which one should a coaching team buy?", a: "If payday is the only broken thing, a commission product is the narrower buy. If the week is broken, install the system. We will not tell you that one brand wins a category." },
    ],
  },
]
