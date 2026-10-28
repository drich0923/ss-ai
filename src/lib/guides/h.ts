import type { Guide } from "@/lib/guide-types"
import { publishedProof } from "@/lib/proof"

const brand = "The Sales Team OS by Systemized Sales AI"

export const guidesH: Guide[] = [
  {
    slug: "high-ticket-sales-team-structure",
    path: "/high-ticket-sales-team-structure",
    nav: "Sales team structure",
    title: "High Ticket Sales Team Structure: Setters, Closers and Who Manages Them",
    h1: "High Ticket Sales Team Structure: Setters, Closers and Who Manages Them",
    description: "A sales team structure for booked calls: who sets, who closes, and who manages, at three stages. A sales org chart you can actually staff.",
    answer: [
      "A high ticket sales team structure is small on purpose. Someone books. Someone closes. Someone manages. Early on, the founder is the manager. Later, a manager sits on a system that already exists.",
      "The Sales Team OS by Systemized Sales AI does not hire those people and does not become the manager. The chart below is who reports to whom. Capacity comes from your own show rate, on the ratio page, not from a headcount we publish.",
    ],
    sections: [
      {
        h2: "The sales org chart at three stages",
        paragraphs: [
          "Stage one is a founder and the first reps. One to three closers, maybe a setter. There is no sales manager title. You are the manager. The reps report to you. If you draw a chart with an empty manager box, you are decorating.",
          "Stage two is a small team, still often without a separate manager. Setters and closers both report to you. The failure is two stories about the same lead. The structure does not need a new boss yet. It needs one set of numbers, one playbook, and one end of day record.",
          "Stage three is a manager layer. Closers and setters report to that manager. The manager reports to you. Hire that person only after the numbers, the playbook, and the daily list exist. A manager hired into your memory becomes the next single point of failure. The system or manager page is the honest split between installing a system and hiring a person.",
        ],
      },
      {
        h2: "What each role owns",
        paragraphs: [
          "A setter owns the first conversation, the booking, the confirmation, and the same day rebook. They do not own the close. The appointment setter job description is the seat. Phone and DM can be different people. Do not draw one box labeled setter if the work is two channels.",
          "A closer owns the held call, the decision, the note, and the cash they submit. They do not own a show rate for a meeting they did not book, unless they also owned confirmation. The closer job description is the seat. Pay is on cash collected.",
          "The manager, who might be you, owns the list: show rate, close rate, cash per call, the leads that waited, the calls that scored poorly, and the pay approval. They do not own every sentence on every call. Call review is a queue, not a shadow.",
        ],
      },
      {
        h2: "Who does not belong on the chart yet",
        paragraphs: [
          "Do not add a second manager, a pod lead, and a quality role because a template online had those boxes. A booked call team with a handful of reps needs owners, not layers. QC and certified numbers are parts of the system, not extra people you must hire on day one.",
          "Do not put us on the chart. We install, we show your team how to use it, and we support in Slack. We do not take a seat. If you want people who hire and manage, that is a different offer, linked from the system or manager page.",
          "Do not staff from a borrowed setter to closer ratio. Work the capacity page with your booked calls and your show rate. Then draw the boxes you can fill.",
        ],
      },
    ],
    template: {
      title: "Sales org chart by stage",
      headers: ["Stage", "Who sets", "Who closes", "Who manages", "Reports to"],
      rows: [
        ["First reps", "You, or one setter", "One to a few closers", "You", "You"],
        ["Small team", "Phone setter, DM setter, or both", "Closers", "You", "You"],
        ["Manager layer", "Setters", "Closers", "A manager, on a system that exists", "The manager reports to you"],
      ],
    },
    handles: `${brand} is the system under the chart: certified numbers, speed to lead on GoHighLevel, call scoring, playbooks, onboarding, and pay. Manager OS is the list the manager opens. The chart does not run itself.`,
    handleLinks: [
      { href: "/setter-to-closer-ratio", label: "Capacity from your numbers" },
      { href: "/founder-led-sales-team-without-a-manager", label: "When you are the manager" },
      { href: "/sales-system-vs-hiring-a-sales-manager", label: "System or a manager first" },
      { href: "/products/manager-os", label: "Manager OS" },
    ],
    proof: publishedProof,
    related: [
      { href: "/how-to-scale-a-high-ticket-sales-team", label: "Scaling a sales team" },
      { href: "/sales-team-meeting-cadence", label: "The meetings this structure runs" },
    ],
    faqs: [
      { q: "What is a sales team structure for high ticket offers?", a: "Setters book, closers hold the call, and one manager, often the founder, runs the list. Add a separate manager when the system already exists, not before." },
      { q: "What does a sales org chart need?", a: "Names in the boxes and a reporting line. An empty manager box is not a structure. The table on this page is the three stages." },
      { q: "Should setters report to closers?", a: "No. They report to the manager, or to you. A closer is not the setter's boss unless you have explicitly made them one, and on a small team that usually creates two standards." },
      { q: "How many people go in each box?", a: "As many as your booked calls and show rate support. The capacity page is the method. We do not publish a headcount." },
      { q: "Are you on the org chart?", a: "No. We install the system and support in Slack. We do not manage the reps and we do not sit in the manager box." },
    ],
  },
  {
    slug: "how-to-review-sales-calls",
    path: "/how-to-review-sales-calls",
    nav: "Review sales calls",
    title: "How to Review Sales Calls Without Listening to All of Them",
    h1: "How to Review Sales Calls Without Listening to All of Them",
    description: "How to review sales calls: score them, listen to the weak ones, and use one scorecard. A sales call review is a queue, not a hero shift of recordings.",
    answer: [
      "You review sales calls by scoring all of them against one card, then listening to the ones that failed. Listening at random until you run out of time is not a review. It is a sample of whatever was on top.",
      "The Sales Team OS by Systemized Sales AI scores transcripts in AI Call Coaching and checks prep and pipeline in QC. The scorecard page is the card. Your manager still coaches. We do not.",
    ],
    sections: [
      {
        h2: "Sales call review starts with a card",
        paragraphs: [
          "The card is short. Opener. Discovery. Offer and the ask. Next step. Whether the note matches the call. Whether prep happened. If you cannot point at the row on the recording or in the CRM, the row does not belong. Vague traits become a personality contest.",
          "Use the same card for a live closer and for a role play in onboarding. A secret rubric is not coaching. The scorecard template is the blank. Your points are yours. We will not publish a universal passing score.",
          "QC is the operations half. Appointment outcomes, prep messages, overdue tasks, unassigned opportunities, on GoHighLevel. It is not a second transcript grader. Use it so a pretty call is not sitting on a rotten pipeline.",
        ],
      },
      {
        h2: "How to review sales calls you will not all hear",
        paragraphs: [
          "AI Call Coaching pulls transcripts from sources such as RevPhlo and Fathom, applies the card for that rep type, and puts flags in a queue. The manager listens to the queue. That is the sample. It is chosen because the call failed a row, not because you had an hour.",
          "Calibrate on a handful of real calls before you trust the card. If two listeners cannot agree on discovery, the row is vague. Tighten it. Then stop relitigating the card in every review.",
          "One coach note per call, written as the next action. A score with no owner is a hobby. The rep should know the rows in advance. The playbook is what those rows are judging.",
        ],
      },
      {
        h2: "What not to do in the review",
        paragraphs: [
          "Do not listen to every minute and call that rigor. You will stop, and then you will review nothing. The queue exists so coverage does not depend on your stamina.",
          "Do not review only the deals that closed. You will teach the team that a payment excuses a bad call, and you will never see the pattern on the losses. Close rate is matched payment closes divided by held calls. The review is how you learn why.",
          "Do not turn the review into us coaching the rep. We install the scoring and show your manager how to run the queue. The founder led page is the same queue when the manager is you.",
        ],
      },
    ],
    checklist: {
      title: "A sales call review session",
      items: [
        "The card is the same one the reps have seen.",
        "You listened to flagged calls, not a random pile.",
        "Each call has one next action.",
        "A repeated miss is either coached or the playbook line is rewritten.",
        "Prep and pipeline misses are in the same week, from QC.",
        "New closers are reviewed inside the 30 60 90 gates, not only after a bad month.",
      ],
    },
    handles: `${brand} queues the calls in AI Call Coaching, checks hygiene in QC, and holds the script in the playbooks. The scorecard page is the template. Manager OS is where the review sits in the week.`,
    handleLinks: [
      { href: "/sales-call-scorecard-template", label: "Sales call scorecard template" },
      { href: "/products/ai-call-coaching", label: "AI Call Coaching" },
      { href: "/products/qc-dashboard", label: "QC" },
      { href: "/products/manager-os", label: "Manager OS" },
      { href: "/sales-team-meeting-cadence", label: "Where the review sits in the week" },
    ],
    proof: publishedProof,
    related: [
      { href: "/high-ticket-sales-script-setter-and-closer", label: "The script the card is judging" },
      { href: "/how-to-improve-close-rate", label: "How to increase close rate" },
    ],
    faqs: [
      { q: "How do you review sales calls if you cannot hear all of them?", a: "Score them against one card and listen to the failures. AI Call Coaching builds that queue from the transcript. QC covers prep and pipeline. You coach the list, not the archive." },
      { q: "What is a sales call review?", a: "One call, one card, one next action. Not a vibe. The rows are opener, discovery, offer and ask, next step, whether the note matches, and whether prep was done." },
      { q: "How many calls should I listen to?", a: "The ones the queue flags, plus any call tied to a dispute, plus a few to calibrate the card. We will not invent a percentage you must hit. A percentage with no card is still random." },
      { q: "Should setters be on the same card?", a: "No. A setter is scored on the booking conversation: open, qualify, book, confirm, disqualify. The closer card is the decision. The script page splits them." },
      { q: "Will you review the calls for us?", a: "The scoring runs. The coaching is yours. We do not coach or manage the reps." },
    ],
  },
  {
    slug: "gohighlevel-pipeline-stages-for-sales-teams",
    path: "/gohighlevel-pipeline-stages-for-sales-teams",
    nav: "GoHighLevel pipeline stages",
    title: "GoHighLevel Pipeline Stages for a Setter and Closer Team",
    h1: "GoHighLevel Pipeline Stages for a Setter and Closer Team",
    description: "GoHighLevel pipeline stages for setters and closers, with definitions that match show rate and a close that waits for payment. Recommended stages, not a certified forecast.",
    answer: [
      "A GoHighLevel pipeline is useful when the stage names mean something you can check. New, contacted, booked, showed, and paid are checkable. A single stage called working is not.",
      "These are the stages we recommend a setter and closer team use. They are not a claim that GoHighLevel ships them with these exact words, and they are not a forecast. The Sales Team OS by Systemized Sales AI still certifies show rate, close rate, and cash per call outside the stage name. Speed to Lead works with GoHighLevel only.",
    ],
    sections: [
      {
        h2: "Recommended GoHighLevel pipeline stages",
        paragraphs: [
          "New lead: the person exists and nobody has called. Contacted: a named setter made a human attempt. You can see who and when. Speed to Lead is that clock. An automated text does not move this stage.",
          "Qualified and booked: the setter asked the questions, the disqualifiers passed, and a time is on the calendar. Confirmed: the setter restated the time before the slot. Showed: they attended. No show: they did not attend and the call was not moved before the slot. Rescheduled is its own stage if you use it. Do not dump it into no show.",
          "Closed: a payment matched. Lost or not a fit: a real no, or a disqualifier. Do not use closed for a verbal yes. Close rate is matched payment closes divided by held calls. A stage that fires early will make the pipeline lie in the same direction as a typed tracker.",
        ],
      },
      {
        h2: "What native reporting still will not do",
        paragraphs: [
          "GoHighLevel can show the opportunity, the appointment, and the user who owns it. That is the pipeline. It does not, by itself, refuse a close until money matches, and it does not flag a note edited to flatter the call. The dashboard page is that gap.",
          "A report filtered to one rep is still a rep level activity view. It is not cash per call. Cash usually lives in the payment tool. RevPhlo connects GoHighLevel with the recorder and the payments, writes the note, and counts the close when a payment matches.",
          "QC reads the same account for overdue tasks, unassigned opportunities, and stale deals. Those are hygiene. They are not a second copy of certified cash. Keep the stage honest, and keep the rate honest somewhere that can see the payment.",
        ],
      },
      {
        h2: "How to use the stages in the week",
        paragraphs: [
          "Every booking has a setter name. Every held call has a closer name. Unassigned is a stage you look at daily, not a parking lot. If the owner is blank, nobody confirms and nobody rebooks.",
          "Move the stage when the event happens, not at the end of the day from memory. The end of day form is a claim. The pipeline is part of the record you check it against. If they disagree, believe the calendar and the payment, then fix the stage.",
          "Do not add ten extra stages because a closer wants a place to hide a maybe. Maybe is not a stage. It is a next step with a time, or a no. The forecasting page will punish a pipeline full of maybes, because you cannot multiply a feeling.",
        ],
      },
    ],
    definitions: [
      { term: "Show rate", formula: "attended / booked", text: "Showed divided by qualified bookings. A stage change is not proof of attendance." },
      { term: "No show", formula: "booked, not attended, not moved before the slot", text: "Its own stage. Not a reschedule." },
      { term: "Closed", formula: "a matched payment", text: "Not a verbal yes and not an opportunity amount." },
    ],
    template: {
      title: "Stage definitions",
      headers: ["Stage", "Meaning", "What it is not"],
      rows: [
        ["New lead", "Created, no human call yet", "A sent automation"],
        ["Contacted", "A named person called", "A team average"],
        ["Booked", "A time is on the calendar and the questions passed", "A maybe"],
        ["Showed", "They attended", "A reschedule"],
        ["No show", "Missed, not moved before the slot", "A cancel you already rebooked"],
        ["Closed", "A payment matched", "A stage someone dragged"],
      ],
    },
    handles: `${brand} reads GoHighLevel as a source. RevPhlo certifies the rates. Speed to Lead times the first call. QC watches hygiene. The dashboard guide is where native reporting stops.`,
    handleLinks: [
      { href: "/gohighlevel-sales-team-dashboard", label: "GoHighLevel sales team dashboard" },
      { href: "/products/speed-to-lead", label: "Speed to Lead" },
      { href: "/products/qc-dashboard", label: "QC" },
      { href: "/products/revphlo", label: "Certified close" },
      { href: "/sales-forecasting-for-coaching-businesses", label: "Forecast from rates, not from stages" },
    ],
    proof: publishedProof,
    related: [
      { href: "/high-ticket-lead-qualification", label: "What booked should mean" },
      { href: "/no-show-follow-up-templates", label: "What happens in the no show stage" },
    ],
    faqs: [
      { q: "What GoHighLevel pipeline stages should a setter and closer team use?", a: "New lead, contacted, booked, showed, no show, and closed only when a payment matches. Add rescheduled if you need it, separate from no show. Skip a stage called working." },
      { q: "Does moving an opportunity to won count as a close?", a: "Not in this system. Close rate is matched payment closes divided by held calls. The stage can say closed after the payment matches. Not before." },
      { q: "Will these stages appear by themselves?", a: "No. They are the definitions we recommend you use. GoHighLevel will not invent your standards. We connect the account. Your team moves the work." },
      { q: "Does Speed to Lead work if the pipeline is in another CRM?", a: "No. Speed to Lead works with GoHighLevel only. RevPhlo can still connect other sources for notes and certified rates." },
      { q: "How does this relate to the forecast?", a: "Stages keep the words straight. The forecast multiplies booked calls, show rate, close rate, and cash per held call. A stage total is not that math." },
    ],
  },
  {
    slug: "sales-team-meeting-cadence",
    path: "/sales-team-meeting-cadence",
    nav: "Meeting cadence",
    title: "Sales Team Meeting Cadence and Agenda Templates",
    h1: "Sales Team Meeting Cadence and Agenda Templates",
    description: "A sales meeting cadence for a closer and setter team: a daily huddle, a weekly one to one, and a weekly team review. Agendas that use the numbers, not a status round.",
    answer: [
      "A sales team meeting agenda should fit on a short list: the rates, the leads that waited, the calls that failed the card, and one change. A cadence is those meetings on a clock people can keep.",
      "Daily huddle. Weekly one to one. Weekly team review. The Sales Team OS by Systemized Sales AI gives the manager, or the founder acting as the manager, the list in Manager OS. We do not run the meeting.",
    ],
    sections: [
      {
        h2: "Daily huddle",
        paragraphs: [
          "Fifteen minutes. Yesterday's show rate and the no shows that still need a same day rebook. New leads with no first call. Anything blocked before today's calendar. No storytelling. If it needs a story, it is a one to one.",
          "The huddle dies when it becomes a tour of every deal. Deal talk belongs with the owner of that deal, later. The huddle is the exceptions: the miss, the wait, the unpaid close someone wants to celebrate early.",
          "Setters and closers can be in the same huddle if the team is small. The setter reports bookings and misses. The closer does not recite the pitch. End of day from yesterday should already be in. You are not collecting the form live.",
        ],
      },
      {
        h2: "Weekly one to one",
        paragraphs: [
          "One rep. Their show rate or their close rate, compared with their own prior week, not with your best closer's best day. Two calls from the review queue. One skill to repeat. Pay, if a submission is waiting, so money is not a surprise on payday.",
          "A new closer's one to one follows the 30 60 90 gates: the test, the shadows, the role play, then the capped live calls. Do not run a veteran's agenda on someone who is not on the calendar yet.",
          "If you are the only manager, these still happen. Skipping them because you are also closing is how the founder stays the constraint. The founder led page is that situation. The one to one is shorter when the daily list already exists.",
        ],
      },
      {
        h2: "Weekly team review",
        paragraphs: [
          "The team row: booked, attended, held, matched closes, cash collected, then show rate, close rate, and cash per call. Split a pod if one person is hiding inside the average. Change one thing. Add a metric only when a decision depends on it.",
          "This is also where the forecast gets updated, from those rates, not from a new hope. And where the pipeline stages get a look: unassigned, overdue, closed without a payment. One hygiene item is enough.",
          "The Listings Lab ran this system. Close rate moved from 10.7% to 30.8% in 90 days. Tripled close rate, from 6% to 19%. Budgetdog's close rate moved from 24.7% to 31.7%, and no shows from 19.1% to 9.6%. Bring those up only as published proof that measured rates can move. Do not open the meeting by promising your team the same month.",
        ],
      },
    ],
    template: {
      title: "Agenda templates",
      headers: ["Meeting", "When", "Agenda"],
      rows: [
        ["Daily huddle", "Start of the day, short", "No shows still open, leads with no first call, today's calendar blocks"],
        ["Weekly one to one", "Once a week per rep", "Their rate versus their last week, two flagged calls, one skill, pay if it is waiting"],
        ["Weekly team review", "Once a week", "Show rate, close rate, cash per call, one change, one pipeline hygiene item"],
      ],
      csv: "/guides/sales-meeting-agendas.csv",
    },
    handles: `${brand} feeds the cadence from Manager OS, RevPhlo, the setter tracker, and the call queue. The meeting is yours to run. We show you how to read the list.`,
    handleLinks: [
      { href: "/products/manager-os", label: "Manager OS" },
      { href: "/sales-rep-accountability", label: "What the list is accountable to" },
      { href: "/how-to-review-sales-calls", label: "The calls in the one to one" },
      { href: "/sales-forecasting-for-coaching-businesses", label: "The forecast you update weekly" },
    ],
    proof: publishedProof,
    related: [
      { href: "/founder-led-sales-team-without-a-manager", label: "The cadence when you are the manager" },
      { href: "/high-ticket-sales-team-kpis", label: "The numbers on the team review" },
    ],
    faqs: [
      { q: "What is a sales meeting cadence?", a: "A daily huddle, a weekly one to one, and a weekly team review, on a clock you keep. Each one has an agenda that fits on a few lines. More meetings are how the founder becomes the calendar." },
      { q: "What is a sales team meeting agenda?", a: "Rates, exceptions, and one change. The templates are on this page. A round of how is everyone feeling is not an agenda." },
      { q: "Do setters and closers meet together?", a: "In a small team, yes for the huddle and the weekly review. The one to one is individual, because a setter's show rate of sets and a closer's close rate are different jobs." },
      { q: "What if I do not have a sales manager?", a: "You run the three meetings from the same list. Manager OS does not require a second salary. Hire a manager when the list exists and the constraint is your hours." },
      { q: "Will you run the weekly meeting?", a: "No. We install the system and show your team how to use the list. We do not manage the reps or sit in for you." },
    ],
  },
]
