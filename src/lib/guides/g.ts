import type { Guide } from "@/lib/guide-types"
import { publishedProof } from "@/lib/proof"

const brand = "The Sales Team OS by Systemized Sales AI"

export const guidesG: Guide[] = [
  {
    slug: "sales-rep-accountability",
    path: "/sales-rep-accountability",
    nav: "Rep accountability",
    title: "How to Hold Sales Reps Accountable Without Micromanaging",
    h1: "How to Hold Sales Reps Accountable Without Micromanaging",
    description: "Hold sales reps accountable with numbers they cannot inflate, an end of day record checked against the CRM, and call quality you can see. Not a day of watching them work.",
    answer: [
      "You hold sales reps accountable by agreeing the definitions first, then looking at the same list every day. Micromanaging is redoing their calls because you do not trust the record. Accountability is a record you can check.",
      "Show rate is attended divided by booked. Close rate is matched payment closes divided by held calls. Cash per call is cash collected divided by held calls. The Sales Team OS by Systemized Sales AI certifies those. Your manager, or you, still decides what to say to the rep.",
    ],
    sections: [
      {
        h2: "Numbers a rep cannot inflate",
        paragraphs: [
          "A tracker a closer can edit will agree with the closer. That is not accountability. It is a shared story. RevPhlo writes the note from the call, the rep approves it in Slack, and a close counts only when a payment matches. An edit that makes the call look better than it was gets flagged.",
          "Woobie is the published warning. The old tracker said a 25% show rate. The system measured 66%. If you coach the typed number, you coach a fiction. Budgetdog's no shows moved from 19.1% to 9.6% and close rate from 24.7% to 31.7% on measured rates. The Listings Lab ran this system: close rate from 10.7% to 30.8% in 90 days, and tripled close rate from 6% to 19%. Those are their results, not a target you paste onto a rep.",
          "CRM hygiene is the same idea in the pipeline. An opportunity with no owner, a task that is overdue, and a stage that says won before money arrives are accountability problems. QC reads those on GoHighLevel. The stage name is not the cash.",
        ],
      },
      {
        h2: "End of day versus the CRM",
        paragraphs: [
          "Setters should submit an end of day record: attempts, conversations, sets, and a note. That form is a claim. The CRM is the record. A set that is not on the calendar did not happen. A conversation that has no call or message in the account did not happen. Coach the gap, not the mood.",
          "Do this per person. A team total hides the setter whose form and calendar never meet. Speed to lead, on GoHighLevel, adds who called a new lead and when. A lead nobody called is not a long response. It is a miss, and it belongs on the same list.",
          "Closers are accountable for held calls, matched closes, and the note. They are not accountable for a show rate they did not book, unless they also owned confirmation. Split the owner. Then the conversation is about that owner's number.",
        ],
      },
      {
        h2: "What accountability is not",
        paragraphs: [
          "It is not sitting on every call. AI Call Coaching scores transcripts and queues the weak ones. You listen to those. QC shows prep and pipeline hygiene so you are not sampling at random and calling it management.",
          "It is not a public scolding in Slack. The list is the conversation: the rate, the call, the lead that waited, the pay that does not match cash. One item, one owner, one change. A meeting that adds a new rule every day is the founder still being the system.",
          "It is not us managing the reps. We install the parts and show your team how to read them. You, or a manager you hire, hold the standard.",
        ],
      },
    ],
    checklist: {
      title: "Accountability checklist",
      items: [
        "Show rate, close rate, and cash per call use the definitions above.",
        "A close requires a matched payment.",
        "Setter end of day rows are checked against the CRM before coaching.",
        "Every new lead has a name on the first call, or an explicit miss.",
        "Overdue tasks and unassigned opportunities are visible.",
        "The calls you review are the ones the score flagged.",
        "Pay is approved against cash that arrived.",
      ],
    },
    handles: `${brand} puts the certified rates in RevPhlo, the setter day in the end of day tracker, pipeline hygiene in QC, and the weak calls in AI Call Coaching. Manager OS is the list you run, even if the manager is you.`,
    handleLinks: [
      { href: "/products/revphlo", label: "Certified KPIs" },
      { href: "/products/setter-eod", label: "Setter end of day" },
      { href: "/products/qc-dashboard", label: "QC and CRM hygiene" },
      { href: "/how-to-review-sales-calls", label: "How to review sales calls" },
      { href: "/sales-team-meeting-cadence", label: "The meeting that uses this list" },
    ],
    proof: publishedProof,
    related: [
      { href: "/setter-eod-report-template", label: "Setter end of day template" },
      { href: "/founder-led-sales-team-without-a-manager", label: "Running this without a manager" },
      { href: "/high-ticket-close-rate-and-show-rate-benchmarks", label: "The definitions" },
    ],
    faqs: [
      { q: "How do you hold sales reps accountable without watching every call?", a: "Use certified show rate, close rate, and cash per call, an end of day record checked against the CRM, and a queue of weak calls. You listen where the score already failed. You do not rebuild the day from Slack." },
      { q: "What is CRM hygiene on a booked call team?", a: "An owner on the opportunity, tasks that are not overdue, a stage that matches what happened, and a close that waits for a payment. QC surfaces the misses on GoHighLevel. The stage is not the money." },
      { q: "Should I trust the end of day form?", a: "As a claim. Trust the calendar and the CRM when they disagree. A precise calculation on a bad count is still wrong." },
      { q: "Does accountability mean a daily lecture?", a: "No. A short list, the same definitions, and one change. The meeting cadence page is the agenda. The list is the content." },
      { q: "Will you manage the reps?", a: "No. We install the system and show your team how to use it. We do not coach or manage reps." },
    ],
  },
  {
    slug: "setter-to-closer-ratio",
    path: "/setter-to-closer-ratio",
    nav: "Setter to closer capacity",
    title: "Setter to Closer Ratio: How to Work Out Capacity From Your Own Numbers",
    h1: "Setter to Closer Ratio: How to Work Out Capacity From Your Own Numbers",
    description: "How many closers you need is booked calls, times your show rate, divided by the held calls one closer can take. A method. Not a ratio we publish.",
    answer: [
      "A setter to closer ratio copied from another company is not your capacity. How many closers you need depends on how many calls get booked, what share of them are attended, and how many held calls one closer can take in a day.",
      "Show rate is attended divided by booked. The calculator below does only that arithmetic. The Sales Team OS by Systemized Sales AI does not publish a setters per closer figure, and it does not publish anyone else's. Replace the zeros with your numbers.",
    ],
    sections: [
      {
        h2: "The method",
        paragraphs: [
          "Start with booked calls in a period you can actually count. A week is usually enough. Multiply by show rate to get expected held calls. If your show rate is a typed tracker, stop and measure attendance first. Woobie's tracker said 25% and the system measured 66%. A capacity plan on the wrong show rate hires the wrong seat.",
          "Then ask how many held calls one closer can take in a day without the notes and the follow up collapsing. That number is yours. It is not a standard we will print. Divide expected held calls by that daily number. That is closer days. Divide closer days by the working days in the period. That is how many closers those bookings require.",
          "Setters enter the method on the other side. You need enough booking capacity to produce the booked calls, on the channel you actually use. Phone bookings and DM bookings are not the same unit. Do not turn the result into a slogan like three setters per closer. If the inputs change, the result changes. Publish the inputs, not a ratio.",
        ],
      },
      {
        h2: "How many closers do I need",
        paragraphs: [
          "You need enough closers to hold the calls that will be attended, not the calls that were merely booked. A full calendar of no shows looks like demand and is not. Infinite Heart Health's published show rate moved from 26% to 55%. The same bookings would have required a different closer load at those two rates. That is why the show rate input is not optional.",
          "A closer who is still inside the 30 60 90 plan does not have the same daily capacity as a closer on a normal load. Do not staff the week as if a new hire is already full. The onboarding page is the gate. Capacity planning that ignores it puts prospects on a calendar the rep was not certified to run.",
          "If the calculator says you need more closers, check the sets before you post a job. Weak qualification fills the calendar with people who should not have been booked. That is a setter problem, and it looks like a closer shortage. Read close rate by setter before you add a seat. The closer job description and the appointment setter job description are the seats, not this page.",
        ],
      },
      {
        h2: "What this page will not tell you",
        paragraphs: [
          "It will not tell you a universal setter to closer ratio. We will not quote one from a blog, a vendor, or a neighboring company and call it ours. If you need a number, it has to come out of the calculator with your booked calls, your show rate, and your closer's real day.",
          "It will not tell you to hire. We install the system. We do not recruit. The application page is where candidates go after you have decided a seat exists.",
          "It will not treat pipeline value as capacity. Capacity here is held conversations. Cash per call is a separate forecast, on the forecasting page, and it uses matched payments.",
        ],
      },
    ],
    definitions: [
      { term: "Show rate", formula: "attended / booked", text: "The input that turns bookings into held calls. Measure it. Do not type it." },
      { term: "Closer day", formula: "held calls one closer can take in a day", text: "Your constraint, including notes and follow up. Not a number from this site." },
      { term: "Closers required", formula: "booked x show rate / calls per closer per day / days", text: "The calculator. A method. Not a benchmark." },
    ],
    capacity: true,
    handles: `${brand} certifies the show rate you should type into the calculator, in RevPhlo. Speed to Lead, on GoHighLevel, shows whether the bookings are even being worked. The job descriptions are separate pages. We do not staff the seats.`,
    handleLinks: [
      { href: "/products/revphlo", label: "Certified show rate" },
      { href: "/how-to-improve-show-rate", label: "How show rate is measured" },
      { href: "/how-to-hire-appointment-setters", label: "Appointment setter job description" },
      { href: "/how-to-hire-high-ticket-closers", label: "Closer job description" },
      { href: "/sales-forecasting-for-coaching-businesses", label: "Forecast the cash from the same inputs" },
    ],
    proof: publishedProof,
    related: [
      { href: "/high-ticket-sales-team-structure", label: "Who sits in the structure" },
      { href: "/closer-onboarding-30-60-90-day-plan", label: "New closers are not full capacity" },
    ],
    faqs: [
      { q: "What is a setter to closer ratio?", a: "On this page it is not a fixed pair of numbers. It is booked calls, times your show rate, divided by how many held calls one closer can take. Setters are the people who create the bookings. We do not publish a ratio." },
      { q: "How many closers do I need?", a: "Enough to hold the attended calls, using the calculator and your own daily capacity. A closer still in onboarding is not a full day. A calendar full of no shows is not demand." },
      { q: "Can I use another company's ratio?", a: "You can read it somewhere else. Do not treat it as a result from this system. Your show rate and your offer decide the load. A borrowed ratio hires a story." },
      { q: "Where does show rate come from?", a: "Attended divided by booked, from the calls, not from a sheet a rep maintains. The benchmarks page has the definition. RevPhlo is where we certify it." },
      { q: "Do you hire the extra closer?", a: "No. If the method says you need a seat, your team hires. We install the application page and the job lives on the closer page." },
    ],
  },
  {
    slug: "sales-forecasting-for-coaching-businesses",
    path: "/sales-forecasting-for-coaching-businesses",
    nav: "Sales forecasting",
    title: "Sales Forecasting for Coaching and High Ticket Businesses",
    h1: "Sales Forecasting for Coaching and High Ticket Businesses",
    description: "Sales forecasting for a booked call team is booked calls times show rate, then close rate and cash per held call on matched payments. A template, not a promise.",
    answer: [
      "Sales forecasting for a coaching or high ticket business starts with calls you can count, not with a revenue number you hope to hit. Revenue forecasting and pipeline forecasting fail when the pipeline stage is treated as cash.",
      "Expected held calls are booked calls times show rate. Expected closes are those held calls times close rate. Expected cash is held calls times cash per call. Cash per call is cash collected divided by held calls, and a close is a matched payment. The Sales Team OS by Systemized Sales AI certifies those inputs. The forecast is still a forecast.",
    ],
    sections: [
      {
        h2: "Predictable revenue is a formula, not a mood",
        paragraphs: [
          "Predictable revenue, on a booked call team, means you can say how many calls are booked, what share attend, what share of held calls collect, and how much a held call collects. If any input is a guess, the forecast is a guess with a spreadsheet around it.",
          "Show rate is attended divided by booked. Close rate is matched payment closes divided by held calls. Do not multiply cash per held call by close rate again. That cash figure is already per held call. Close rate tells you how many closes to expect. Cash per call tells you the money. Using both as extra multipliers double counts.",
          "Pipeline forecasting that sums opportunity amounts will follow whatever a closer typed. A stage named won before Stripe, Whop, or another payment tool shows money is not revenue. The Listings Lab ran this system and moved close rate from 10.7% to 30.8% in 90 days, with a tripled close rate from 6% to 19% on the booked call figure. Budgetdog moved from 24.7% to 31.7%. Use those as proof the rate can be measured. Do not drop them into your forecast as if they were your rates.",
        ],
      },
      {
        h2: "What to put in the template",
        paragraphs: [
          "One row per week or per closer is enough. Booked calls. Show rate. Held calls. Close rate. Closes. Cash per held call. Cash. If you cannot fill show rate from attendance, leave it blank rather than typing a round number you like.",
          "Separate a new closer from a closer on a full load. The 30 60 90 plan caps live calls on purpose. A forecast that gives a new hire a full week of held calls will miss, and then you will blame the ads.",
          "Payment plans collect over time. Cash in the forecast period is cash you expect to collect in that period, not the full contract. That matches how commission should be paid, and it matches the definition of cash per call.",
        ],
      },
      {
        h2: "What a forecast is not allowed to hide",
        paragraphs: [
          "It is not allowed to hide no shows inside close rate. People who do not attend are a show rate problem. Infinite Heart Health moved from 26% to 55% show rate. That change would move a forecast even if close rate never did. Read both.",
          "It is not allowed to hide a setter who books people who cannot buy. Look at close rate by setter before you decide the closer is the miss. Qualification questions live on their own page.",
          "It is not a promise that next month matches a named client. The calculator uses your inputs. If you type their rates, you are writing fan fiction.",
        ],
      },
    ],
    definitions: [
      { term: "Expected held calls", formula: "booked x show rate", text: "Show rate is attended divided by booked." },
      { term: "Expected closes", formula: "held x close rate", text: "Close rate is matched payment closes divided by held calls." },
      { term: "Expected cash", formula: "held x cash per call", text: "Cash per call is cash collected divided by held calls. Do not multiply by close rate again." },
    ],
    forecast: true,
    template: {
      title: "Forecast template",
      headers: ["Period", "Booked", "Show rate", "Held", "Close rate", "Closes", "Cash per held call", "Cash"],
      rows: [
        ["Week", "your count", "attended / booked", "booked x show rate", "closes / held", "held x close rate", "cash collected / held", "held x cash per call"],
      ],
      csv: "/guides/sales-forecast-template.csv",
    },
    handles: `${brand} is where the inputs should come from: RevPhlo for show rate, close rate, and cash per call, with a close counted only when a payment matches. GoHighLevel can hold the pipeline. It does not certify the forecast.`,
    handleLinks: [
      { href: "/products/revphlo", label: "Certified inputs" },
      { href: "/high-ticket-close-rate-and-show-rate-benchmarks", label: "Definitions and the rate calculator" },
      { href: "/setter-to-closer-ratio", label: "Capacity from the same show rate" },
      { href: "/gohighlevel-pipeline-stages-for-sales-teams", label: "Pipeline stages that match the words" },
    ],
    proof: publishedProof,
    related: [
      { href: "/high-ticket-sales-team-kpis", label: "The KPIs in the forecast" },
      { href: "/sales-rep-accountability", label: "Holding the inputs honest" },
    ],
    faqs: [
      { q: "How do you do sales forecasting for a coaching business?", a: "Count booked calls, multiply by show rate for held calls, multiply held calls by close rate for closes, and multiply held calls by cash per call for cash. Use matched payments. Do not sum opportunity amounts." },
      { q: "Is pipeline forecasting the same thing?", a: "Only if the stages mean attended, held, and paid. A stage a rep can move is not cash. The pipeline page is the stage list. This page is the math." },
      { q: "What is predictable revenue here?", a: "A forecast you can recompute when show rate or close rate moves, because the inputs are defined. It is not a guarantee that the month lands on the number." },
      { q: "Should I use a client's close rate in my forecast?", a: "No. The Listings Lab and Budgetdog numbers are published results for those teams. Your forecast uses your rates." },
      { q: "Why not multiply cash per call by close rate?", a: "Because cash per call on this site is already cash collected divided by held calls. Close rate is a count of closes. Multiplying both onto the same cash double counts." },
    ],
  },
  {
    slug: "no-show-follow-up-templates",
    path: "/no-show-follow-up-templates",
    nav: "No show follow up",
    title: "No Show Follow Up Templates for High Ticket Sales Calls",
    h1: "No Show Follow Up Templates for High Ticket Sales Calls",
    description: "No show email, text, and DM templates for a high ticket call, plus the rebooking flow. The setter who booked it sends them the same day.",
    answer: [
      "A no show follow up is a same day message from the setter who booked the call, with two new times, not a lecture. The email, the text, and the DM are the same job in three channels.",
      "A no show was booked, was not attended, and was not moved before the slot. Show rate is attended divided by booked. The Sales Team OS by Systemized Sales AI makes that rate visible. These templates do not raise it by themselves. A person has to send them and put the new time on the calendar.",
    ],
    sections: [
      {
        h2: "No show email template",
        paragraphs: [
          "Send the day before note so a miss is not the first message. It names the time and the problem they already stated. It asks them to reply if the time is wrong. It does not promise a result.",
          "The morning of note names the time and the link. It offers a move before the slot. A move before the slot is a reschedule, not a no show. Keep those buckets apart or the rate lies.",
          "The miss note goes the same day. Two times. A question. The setter who booked it sends it. A closer sending a cold 'sorry we missed you' after the setter already vanished is how the lead dies twice.",
        ],
      },
      {
        h2: "No show text template and DM",
        paragraphs: [
          "The text is shorter than the email and says the same thing. Time, two options, a question. Do not add a paragraph about the offer. They already missed a call. A pitch in the text is noise.",
          "The DM matches the channel they came from. If they booked from a DM thread, the follow up belongs in that thread, not in a new email they will not open. Three messages is enough: the reminder, the morning of, the miss.",
          "None of these reset speed to lead. Speed to lead is the first human call on a new lead. A no show follow up is after a booking. Do not let an automated reminder count as the setter doing the job.",
        ],
      },
      {
        h2: "The rebooking flow",
        paragraphs: [
          "The policy is short. One owner. Same day attempt. The new time goes on the calendar or it did not happen. Two misses and the lead comes off the closer's calendar until a time is confirmed. That rule is also on the show rate page, with the measurement.",
          "Budgetdog's published no shows went from 19.1% to 9.6%. Infinite Heart Health's show rate went from 26% to 55%. Those teams are not a script you paste. They are the reason to measure, then run a flow you can see. Woobie's tracker said 25% and the system measured 66%. If you do not trust the no show count, fix the count before you rewrite the email.",
          "Do not invent a discount in the follow up to buy the second call. You will teach the list that missing the first call is how you get a better price.",
        ],
      },
    ],
    template: {
      title: "No show email, text, and DM",
      headers: ["When", "Email", "Text or DM"],
      rows: [
        ["Day before", "You are on the calendar tomorrow at [time] to talk through [the problem they named]. Reply if that time still works.", "Tomorrow at [time]. Reply if you need to move it."],
        ["Morning of", "Today at [time]. The link is [link]. Tell me before the slot if you need a different time.", "Today at [time]. Link: [link]. Need to move it?"],
        ["After a miss", "We missed each other at [time]. I can do [time] or [time]. Which should I book?", "Missed you at [time]. [time] or [time]?"],
      ],
      csv: "/guides/no-show-follow-up-templates.csv",
    },
    handles: `${brand} certifies show rate and no show rate in RevPhlo and keeps the setter's end of day claim next to the calendar. The show rate page is the measurement and the policy. This page is the wording.`,
    handleLinks: [
      { href: "/how-to-improve-show-rate", label: "How to reduce no shows" },
      { href: "/products/revphlo", label: "Certified show rate" },
      { href: "/products/setter-eod", label: "Setter end of day" },
      { href: "/high-ticket-sales-script-setter-and-closer", label: "The setter script that books the call" },
    ],
    proof: publishedProof,
    related: [
      { href: "/how-to-improve-show-rate", label: "Show rate and the no show policy" },
      { href: "/setter-eod-report-template", label: "Where the rebook should show up" },
    ],
    faqs: [
      { q: "What is a no show email template?", a: "A day before note, a morning of note, and a same day miss note with two new times. The setter who booked the call sends them. No promise about the result." },
      { q: "What is a no show text template?", a: "The same three moments, shorter. Time, and a way to move it. After the miss, two times and a question. Do not paste the offer into the text." },
      { q: "Who sends the no show follow up?", a: "The setter who booked it, the same day. If there is no setter, the person who owned the booking. A message with no owner is not a flow." },
      { q: "Does a reschedule count as a no show?", a: "No, if it moved before the slot. Count it on its own. The show rate page defines the buckets." },
      { q: "Will the template fix show rate by itself?", a: "No. Someone has to send it and put the new time on the calendar. Measure attendance first. Woobie's 25% tracker versus 66% measured is why." },
    ],
  },
  {
    slug: "high-ticket-lead-qualification",
    path: "/high-ticket-lead-qualification",
    nav: "Lead qualification",
    title: "High Ticket Lead Qualification: Questions Setters Should Ask",
    h1: "High Ticket Lead Qualification: Questions Setters Should Ask",
    description: "Lead qualification for a high ticket booked call: the questions, the disqualifiers, and the note the closer actually needs. A question bank, not a pitch.",
    answer: [
      "Lead qualification is how a setter decides a call should exist. The questions find the problem, the money, and who decides. The disqualifiers say who does not get a closer's calendar.",
      "A qualified set is not a close. The Sales Team OS by Systemized Sales AI keeps the questions in the playbook and the handoff in the note. Your setters still ask. We do not take the dial.",
    ],
    sections: [
      {
        h2: "Qualifying questions",
        paragraphs: [
          "Ask fewer questions than you want to, and ask them in the order that can end the call. Who the offer is for comes before a tour of the curriculum. If they are outside it, stop. Booking them to be polite is how show rate and close rate both get worse.",
          "Then the problem in their words, not yours. Then whether they can spend the price band, said plainly. Then who else has to be on the decision. A setter who hides the price to protect the booking is creating a closer call that cannot close.",
          "The bank below is the list. Use the ones that match your offer and delete the rest. Twelve questions on a setting call means you delivered the closer's discovery early and badly.",
        ],
        bullets: [
          "What made you ask about this now?",
          "What have you already tried?",
          "Who is this for in your business, or in your life, specifically?",
          "The offer is in this price band. Is that a conversation you can have?",
          "Who else has to say yes?",
          "What does a no look like for you, so we do not book a call you do not want?",
          "If we book a time, will you be the person on the call?",
        ],
      },
      {
        h2: "Disqualifiers",
        paragraphs: [
          "Write them down. A disqualifier is a fact, not a feeling. They are outside who the offer is for. They cannot have the money conversation. The decision maker will not attend. They want a result you do not sell. Any one of those ends the setting call with a clear no.",
          "A setter who is paid only on bookings will ignore a disqualifier. Say that in the pay plan and in the job description. If the only way to get paid is to book, you will buy closers a calendar of polite mismatches.",
          "The handoff note should include the disqualifier check: passed, or not booked. A closer should not discover on minute three that the setter already knew the person could not buy.",
        ],
      },
      {
        h2: "The note the closer needs",
        paragraphs: [
          "Four lines. The problem in the prospect's words. The price band you stated. Who decides, and whether they will be on the call. The time, and what confirmation you already did. Anything else is a story.",
          "RevPhlo writes a note from the sales call the closer holds, and the rep approves it. The setter's handoff is earlier. It still has to match what was said. A handoff that flatters the lead is the same failure as a closer editing a call to look better.",
          "Qualification does not replace show rate. A perfect set can still no show. Confirmation and the no show follow up are the next pages. Close rate on a bad set is not a closer skill problem. Read it by setter before you rewrite the closer script.",
        ],
      },
    ],
    handles: `${brand} keeps the questions in the playbook and the setter's day in the end of day tracker. The closer reads a note, not a memory. Speed to Lead, on GoHighLevel, is who called. It is not the qualification itself.`,
    handleLinks: [
      { href: "/products/closer-playbook", label: "Playbooks" },
      { href: "/high-ticket-sales-script-setter-and-closer", label: "Setter script" },
      { href: "/how-to-improve-close-rate", label: "Close rate when the sets are the problem" },
      { href: "/no-show-follow-up-templates", label: "After a qualified call does not show" },
    ],
    proof: publishedProof,
    related: [
      { href: "/how-to-hire-appointment-setters", label: "Appointment setter job description" },
      { href: "/sales-playbook-template", label: "Where the questions live" },
    ],
    faqs: [
      { q: "What is lead qualification on a high ticket call?", a: "A setter deciding the closer's calendar should be used. Problem, price band, decision maker, and a disqualifier if any of those fail. It is not the close." },
      { q: "How many qualifying questions should a setter ask?", a: "Enough to end the call or book it. The bank on this page is a menu. Most setting calls need the problem, the price band, and who decides. More than that starts the closer's call early." },
      { q: "Should the setter say the price?", a: "They should say the band you chose to reveal before the call. Hiding it to win the booking shows up later as a close rate problem on that setter's sets." },
      { q: "What does the closer need in the handoff?", a: "The problem in the prospect's words, the price band stated, who decides, and the time. Four lines. A novel means the setter did not decide." },
      { q: "Do you qualify the leads for us?", a: "No. Your setters ask. We install the playbook and show the team how to use the note. We do not dial." },
    ],
  },
]
