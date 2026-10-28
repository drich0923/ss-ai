import type { Guide } from "@/lib/guide-types"
import { publishedProof } from "@/lib/proof"

const brand = "The Sales Team OS by Systemized Sales AI"

export const guidesD: Guide[] = [
  {
    slug: "high-ticket-sales-team-kpis",
    path: "/high-ticket-sales-team-kpis",
    nav: "Sales team KPIs",
    title: "The KPIs That Matter for a Closer and Setter Team",
    h1: "The KPIs That Matter for a Closer and Setter Team",
    description: "Setter, closer, and team KPIs for a high ticket booked call team, each with a formula. A weekly scorecard you can run without an invented industry target.",
    answer: [
      "A closer and setter team needs a short list of rates, each with a denominator you can say out loud. More metrics do not make the Monday meeting clearer. They give people a number to hide in.",
      "Track setter activity against conversations and bookings. Track closer results as show rate, close rate, and cash per call. Track the team on those same rates plus cash collected. The Sales Team OS by Systemized Sales AI certifies the closer rates. Setter end of day numbers still have to be checked against the CRM.",
    ],
    sections: [
      {
        h2: "Setter KPIs",
        paragraphs: [
          "Setters create the calendar. Their numbers should explain the calendar, not replace it. Dials and messages are effort. Conversations are contact. Sets are the output. A setter who dials all day and books nothing is a different problem from a setter who never dials.",
          "Speed matters, and it is per person. Lead response time is the wait from the lead arriving to the first call by a named setter. A team average hides the setter who did not call. This clock, in our system, works with GoHighLevel only.",
          "Do not grade a setter on close rate. They did not hold the sales call. Grade them on contact, bookings, and whether those bookings attended. If you pay them on cash, that pay is a compensation choice. It is not a reason to pretend they closed.",
        ],
      },
      {
        h2: "Closer KPIs",
        paragraphs: [
          "Show rate tells you whether the closer's calendar was real. Close rate tells you whether held conversations produced a matched payment. Cash per call tells you what those conversations collected. All three can move in different directions in the same week.",
          "No show rate is the complement of attendance, not a second opinion. If you track both, define no show the same way every week, and do not also dump reschedules into that cell. Budgetdog's published move was no shows from 19.1% to 9.6%, next to a close rate move from 24.7% to 31.7%. Those are separate facts.",
          "A closer KPI that the rep types into a sheet will drift. The version worth managing is the one where the note comes from the call, the rep approves it, and the close waits for a payment.",
        ],
      },
      {
        h2: "Team KPIs and the weekly scorecard",
        paragraphs: [
          "The team row is not the average of everyone's feelings. It is booked calls, attended calls, held calls, matched closes, and cash collected, then the three rates. If one pod is drowning, split the row. Do not blend a strong closer into a weak one and call the blend the business.",
          "Review the scorecard once a week. Daily is for the lead clock and the brief. Weekly is for whether show rate, close rate, and cash per call moved, and which setter or closer row explains the move. Change one thing, then look again next week. A meeting that adds a new metric every Monday never learns.",
          "We do not publish target KPIs for your niche. A number stolen from another offer, another price, or another definition will make a healthy team look broken, or a broken team look fine.",
        ],
      },
    ],
    definitions: [
      { term: "Pickup or reply rate", formula: "conversations / dials or messages", text: "Contact divided by attempts. Phone and DM setters should not share one unlabeled rate." },
      { term: "Booking rate", formula: "sets booked / conversations", text: "Booked calls divided by real conversations. Not divided by dials." },
      { term: "Show rate", formula: "attended / booked", text: "Attended divided by booked. Use it for the setter who booked the call and for the closer whose calendar it landed on. Label which one you mean." },
      { term: "Close rate", formula: "matched payment closes / held calls", text: "Payment matched closes divided by held calls. Not divided by booked calls." },
      { term: "Cash per call", formula: "cash collected / held calls", text: "Cash collected divided by held calls." },
      { term: "Lead response time", formula: "first call time minus lead created time", text: "Per setter, not a team average. GoHighLevel only, in this system." },
    ],
    template: {
      title: "Weekly scorecard",
      headers: ["Row", "Booked", "Attended", "Held", "Matched closes", "Cash collected", "Show rate", "Close rate", "Cash per call"],
      rows: [
        ["Setter A", "18", "11", "", "", "", "attended / booked", "", ""],
        ["Closer A", "", "11", "11", "3", "15000", "attended / booked", "closes / held", "cash / held"],
        ["Team", "18", "11", "11", "3", "15000", "11 / 18", "3 / 11", "15000 / 11"],
      ],
    },
    handles: `${brand} puts the closer rates in RevPhlo, the setter day in the end of day tracker, and the lead clock in Speed to Lead when the CRM is GoHighLevel. The scorecard above is the meeting. The parts are where the cells come from.`,
    handleLinks: [
      { href: "/products/revphlo", label: "Certified closer KPIs" },
      { href: "/products/setter-eod", label: "Setter end of day" },
      { href: "/products/speed-to-lead", label: "Speed to Lead" },
      { href: "/high-ticket-close-rate-and-show-rate-benchmarks", label: "Definitions and the calculator" },
    ],
    proof: publishedProof,
    related: [
      { href: "/setter-eod-report-template", label: "Setter end of day template" },
      { href: "/gohighlevel-sales-team-dashboard", label: "GoHighLevel and these KPIs" },
    ],
    faqs: [
      { q: "How many sales KPIs should a small team track?", a: "Enough to separate effort, contact, shows, closes, and cash. For most booked call teams that is the setter rates above plus show rate, close rate, and cash per call. Add a metric only when a decision changes because of it." },
      { q: "What KPIs should an appointment setter have?", a: "Attempts, conversations, sets booked, show rate of those sets, and response time per setter. Not close rate. Check the end of day form against the CRM before you coach from it." },
      { q: "Is pipeline value a KPI?", a: "It is a forecast. It is not cash per call, and it is not close rate. If the meeting only reviews pipeline value, you will congratulate stages that never collect." },
      { q: "Do you set our KPI targets?", a: "No. We do not invent a target for your offer. We install the definitions and show your team how to read them. You choose what to change after you see the rates." },
      { q: "Where do the scorecard numbers come from?", a: "Closer rates come from certified counts: attended, held, matched payments, cash collected. Setter effort comes from the end of day submission, then a check against GoHighLevel or whatever CRM holds the leads. If the two disagree, believe the source system, not the form." },
    ],
  },
  {
    slug: "high-ticket-closer-commission-structure",
    path: "/high-ticket-closer-commission-structure",
    nav: "Commission structure",
    title: "Closer and Setter Commission Structures with a Free Tracker Template",
    h1: "Closer and Setter Commission Structures with a Free Tracker Template",
    description: "Pay closers and setters on cash collected, including splits, payment plans, and clawbacks. A simple tracker, and why a spreadsheet breaks once you have three reps.",
    answer: [
      "Pay high ticket closers and setters on cash collected, not on a contract value nobody has received. A split, a payment plan, and a refund all change what is owed. If the plan ignores them, payroll becomes a debate.",
      "A spreadsheet can hold one closer and a simple rate. At three or more reps, with setter splits and plans that collect over months, the sheet becomes a private system only one person understands. The Sales Team OS by Systemized Sales AI includes a commission tracker so reps submit cash collected and a manager approves the payout.",
    ],
    sections: [
      {
        h2: "Pay on collected cash",
        paragraphs: [
          "Collected cash is money that arrived in the period. It is not the price on the call, and it is not an opportunity marked won. If you pay the full commission when the prospect signs and then pays over six months, you are advancing payroll against cash you might not collect.",
          "A clean plan states the rate, the base if there is one, and the moment a dollar becomes payable. Flat rate, cash tiers, and unit tiers are all usable. The tier should name the unit. Cash tiers step up as collected cash crosses a line. Unit tiers step up as a count of deals crosses a line. Do not mix those labels in the same sentence and hope payroll agrees.",
          "Bonuses belong in the same plan, with the threshold written down. A bonus that lives in the founder's memory will be paid twice, or not at all, the month the founder is traveling.",
        ],
      },
      {
        h2: "Splits, payment plans, and clawbacks",
        paragraphs: [
          "A setter split is a percent of the same collected cash, or a flat amount per show or per close, paid only when the rule says so. Write which. If both the setter and the closer are paid on the full cash as if the other did not exist, you will overpay and you will not notice until the month is closed.",
          "Payment plans pay commission as each installment is collected. The first payment is not the whole contract. Later payments in the plan need an owner, or they sit in a finance tool while the closer has already been paid for a sale that is only partly real.",
          "A clawback is the reverse. If collected cash is refunded, the commission on that cash comes back on a later period. Write the window and who it applies to, setter and closer both. The template below has a column for it. The commission tracker calculates from submitted collected cash and a manager's approval. Put the clawback in the submission when cash goes back out, so the approval sees it. We are not describing a silent automatic reversal you cannot see.",
        ],
      },
      {
        h2: "Why the sheet breaks",
        paragraphs: [
          "One rep, one rate, one tab. That works until the second closer has a different tier, the setter wants their split, and a refund arrives on a deal from last quarter. The sheet grows a tab named final v3. Reps stop trusting it. The person who built it becomes the only one who can run payroll.",
          "Three reps is enough for that failure. You do not need a large floor. You need two plans, a split, and one refund in the same month. After that, reps should submit cash collected and see the calculated payout, and a manager should approve, reject, or send it back. Disputes happen before payday, not after.",
          "Commission software that is only a quota engine is a different purchase. If your question is the whole team, pay is one part. Hiring, the ramp, the lead clock, call quality, and certified rates still have to live somewhere.",
        ],
      },
    ],
    template: {
      title: "Commission tracker template",
      headers: ["Rep", "Role", "Period", "Cash collected", "Rate or tier", "Split percent", "Refund to claw back", "Payout", "Manager note"],
      rows: [
        ["Alex", "Closer", "1 to 15 Oct", "12000", "10 percent to 15k, then 12", "70", "0", "cash times rate times split", ""],
        ["Jordan", "Setter", "1 to 15 Oct", "12000", "flat 3 percent of collected", "30", "500", "same cash, setter rate, minus refund", "Refund on a March plan"],
      ],
      csv: "/guides/closer-commission-template.csv",
    },
    handles: `${brand} puts this plan in the commission tracker. Reps submit cash collected. The tracker handles flat rate, cash tiers, unit tiers, and bonuses. A manager approves. Your team still sells. We show them how to submit and how to approve.`,
    handleLinks: [
      { href: "/products/commission-tracker", label: "Commission Tracker" },
      { href: "/compare/commission-software-vs-sales-team-os", label: "QuotaPath, Spiff, or the system" },
      { href: "/products/revphlo", label: "Cash that matches a payment" },
    ],
    proof: publishedProof,
    related: [
      { href: "/compare/commission-software-vs-sales-team-os", label: "Commission software compared with the system" },
      { href: "/high-ticket-sales-team-kpis", label: "KPIs that should match the pay plan" },
    ],
    faqs: [
      { q: "Should commission be paid on cash collected or on contract value?", a: "On cash collected, for a high ticket team that uses payment plans. Contract value pays people for money that has not arrived. If you intentionally advance pay, write the advance and the clawback. Do not leave it implied." },
      { q: "How should a setter and a closer split commission?", a: "Pick one rule and write it. A percent of the same collected cash, or a flat fee per attended call or per close. Apply the refund rule to both. The template has a split column so the two payouts cannot silently both claim 100 percent." },
      { q: "When does a spreadsheet stop being enough?", a: "When a third rep, a second plan, or a refund shows up and only one person can explain the file. That is a process problem, not a talent problem. Move submissions and approval into one tracker." },
      { q: "Does the tracker replace a payroll system?", a: "No. It calculates and approves what is owed from submitted cash. Your payroll tool still pays the person. Do not expect it to file taxes or run a bank transfer." },
      { q: "Can reps see the payout before they submit?", a: "Yes. They submit cash collected and see the calculated payout. A manager still approves, rejects, or sends it back. Seeing a number is not the same as being paid." },
    ],
  },
  {
    slug: "speed-to-lead-for-coaching-businesses",
    path: "/speed-to-lead-for-coaching-businesses",
    nav: "Speed to lead",
    title: "Speed to Lead for Coaching Businesses: Who Called and How Long the Lead Waited",
    h1: "Speed to Lead for Coaching Businesses: Who Called and How Long the Lead Waited",
    description: "Speed to lead is how long a new lead waited, and which setter made the first call. For coaching teams on GoHighLevel, measure it per setter. A team average hides the person who did not call.",
    answer: [
      "Speed to lead is the time between a new lead arriving and the first call to that lead, by a named person. It is not a slogan about being fast, and it is not the team's average wait.",
      "Coaching, education, and service businesses that book sales calls usually have setters working leads in a CRM. In this system the clock works with GoHighLevel only. You see who called, and when. The Sales Team OS by Systemized Sales AI does not call the lead for you.",
    ],
    sections: [
      {
        h2: "What speed to lead is",
        paragraphs: [
          "A lead fills out a form, books nothing yet, or asks for a call. Someone on your team is supposed to call. Speed to lead is that gap, measured, with a name on it. If you cannot name the setter and the minute, you do not have the metric. You have a hope.",
          "The first call is the event. A text, an email, or a DM can be part of the process you choose, but do not let an automated message reset the clock and pretend a person reached out. Write down what counts as the first human attempt, and use that.",
          "We are not going to quote a minute target from a study we did not run. Public claims about the perfect response window get repeated until they sound like physics. Your leads, your offer, and your setters are the data. Measure the wait you actually have.",
        ],
      },
      {
        h2: "Why the team average is the wrong view",
        paragraphs: [
          "Two setters can produce a respectable average while one of them calls in five minutes and the other calls the next day. The average makes the slow setter invisible and lets the fast setter carry the report.",
          "Look at response time per setter, and look at the leads with no call at all. A lead nobody called is not a long response. It is a miss. Those rows should be obvious in the same view, or the meeting will talk about speed and ignore silence.",
          "Booked call funnels make this sharper. The setter is not closing. The setter is getting a qualified person onto a closer's calendar. A slow first call does not show up in close rate. It shows up as fewer bookings, and then everyone blames the ads.",
        ],
      },
      {
        h2: "What to do with the view",
        paragraphs: [
          "Each day, name the leads that waited too long and the setter who owned them. That is the coaching. A dashboard nobody opens is not a process. Pair the clock with the end of day form so the setter's own story and the CRM can disagree in public.",
          "GoHighLevel is the requirement for this part. If your leads live somewhere else, do not force this clock. RevPhlo can still connect other tools for notes and certified rates. Speed to lead does not.",
          "Your setters still dial. We connect the account, show the team how to read who called and how long the lead waited, and support you in Slack. We do not staff the phones.",
          "Pair the clock with show rate. A setter can be fast and still book people who never attend. Speed without attendance is activity. Attendance without speed is a calendar you got lucky on. You want the name, the wait, and then attended divided by booked.",
        ],
      },
    ],
    definitions: [
      { term: "Lead response time", formula: "time of first human call minus time the lead was created", text: "Per lead, then reviewed per setter. A team average is not the definition." },
      { term: "Uncalled lead", formula: "a lead with no first call", text: "Not a slow response. Count these separately so they cannot hide inside an average." },
      { term: "Show rate", formula: "attended / booked", text: "What happens after a set is booked. Speed to lead does not replace it." },
    ],
    checklist: {
      title: "Daily speed to lead check",
      items: [
        "Every new GoHighLevel lead has a setter name or an explicit unassigned flag.",
        "You can see the first call time, not only that a task exists.",
        "You review the list per setter, not as one average.",
        "Leads with no call are listed on their own.",
        "The setter's end of day count of conversations is checked against this list.",
      ],
    },
    handles: `${brand} shows who called and when, for teams on GoHighLevel. It does not send the call, and it does not invent a minute benchmark. Pair it with certified show rate and close rate so a fast setter is not praised for bookings that never sit down.`,
    handleLinks: [
      { href: "/products/speed-to-lead", label: "Speed to Lead" },
      { href: "/products/setter-eod", label: "Setter end of day" },
      { href: "/gohighlevel-sales-team-dashboard", label: "GoHighLevel dashboard" },
    ],
    proof: publishedProof,
    related: [
      { href: "/setter-eod-report-template", label: "Setter end of day template" },
      { href: "/how-to-improve-show-rate", label: "How to improve show rate" },
    ],
    faqs: [
      { q: "What is speed to lead?", a: "The time a new lead waited before a named person called. Measure it per lead and review it per setter. Do not manage a team average." },
      { q: "What is a good lead response time?", a: "We do not publish one. A copied minute target from another industry is not your number. Measure the wait you have, including leads nobody called, and decide what your team will hold." },
      { q: "Does this work outside GoHighLevel?", a: "No. Speed to Lead works with GoHighLevel only. If leads are created somewhere else, this part will not time them." },
      { q: "Do you call the leads?", a: "No. Your setters call. We install the view and show the team how to read it." },
      { q: "How does this relate to show rate?", a: "Speed to lead is before the booking. Show rate is attended divided by booked, after the setter did the job. A fast team can still have a weak show rate if confirmation is sloppy. Track both." },
    ],
  },
]
