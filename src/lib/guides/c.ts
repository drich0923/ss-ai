import type { Guide } from "@/lib/guide-types"
import { publishedProof } from "@/lib/proof"

const brand = "The Sales Team OS by Systemized Sales AI"

export const guidesC: Guide[] = [
  {
    slug: "high-ticket-close-rate-and-show-rate-benchmarks",
    path: "/high-ticket-close-rate-and-show-rate-benchmarks",
    nav: "Close rate and show rate",
    title: "High Ticket Close Rate and Show Rate: How to Measure Them Honestly",
    h1: "High Ticket Close Rate and Show Rate: How to Measure Them Honestly",
    description: "There is no reliable public benchmark for close rate on offers above $5,000. Use exact formulas, matched payments, and your own before and after. No industry average.",
    answer: [
      "There is no reliable public benchmark for show rate or close rate on offers above $5,000. Lists online mix cheap products, different math, and numbers nobody can audit. A rate you cannot define is not a number you can manage.",
      "Use three formulas and keep them stable. Show rate is attended calls divided by booked calls. Close rate on this page is matched payment closes divided by held calls. Cash per call is cash collected divided by held calls. Compare the team to its own last month, and to the named client results below. Do not compare it to an average we cannot source.",
    ],
    sections: [
      {
        h2: "Booked calls and held calls are not the same pile",
        paragraphs: [
          "A booked call is a time on the calendar. An attended call is a prospect who showed up. A held call is a conversation a closer actually ran. If you divide closes by booked calls, you are measuring the whole funnel, including people who never sat down. If you divide closes by held calls, you are measuring the closer.",
          "Both numbers are useful. They answer different questions. A low show rate with a solid close rate means the problem is confirmation and the calendar, not the pitch. A high show rate with a weak close rate means people are sitting down and not buying. Mixing the two into one 'close rate' is how a team argues for a month and changes nothing.",
          "The Listings Lab ran this system. Close rate moved from 10.7% to 30.8% in 90 days. Tripled close rate, from 6% to 19%, is the booked call figure on that same team: matched closes divided by booked calls. Those are not two versions of the same fact. Read the label before you quote the number.",
        ],
      },
      {
        h2: "A close counts when the payment matches",
        paragraphs: [
          "A deal marked won in the CRM is not cash. High ticket teams sell payment plans, deposits, and second invoices. If the closer can mark the opportunity closed, the close rate will drift toward whatever the team wants the meeting to hear.",
          "The definition we install is stricter. A close counts when a payment matches the call. Show rate, close rate, and cash per call are certified from that rule. An edit that makes a call look better than it was gets flagged. The rep still approves the note in Slack, so the note is not a silent rewrite.",
          "Cash per call uses the same held calls as the denominator. Cash collected divided by held calls tells you what a conversation was worth after money arrived. It is not a forecast, and it is not the sticker price of the offer.",
        ],
      },
      {
        h2: "Why a tracker and the calls disagree",
        paragraphs: [
          "Woobie's old tracker said the show rate was 25%. The system measured 66%. Same team, same period of work, two definitions. One number was typed. The other was counted from who attended.",
          "A typed tracker usually fails in one of two directions. It understates show rate when no shows and reschedules get dumped into the same cell, or when the sheet never hears about calls that did happen. It overstates close rate when a closer counts a verbal yes, a deposit that never clears, or a plan that is not a collected payment. Either error sends coaching at the wrong problem.",
          "Fix the definition before you coach the rep. If the sheet is wrong, a better script will not show up in the number, and a worse week will look like a talent problem.",
        ],
      },
    ],
    definitions: [
      { term: "Show rate", formula: "attended / booked", text: "People who showed up, divided by calls that were booked. A reschedule is not an attend. A no show is not an attend." },
      { term: "Close rate", formula: "matched payment closes / held calls", text: "Closes where a payment matches, divided by calls a closer actually held. This is the close rate on this page. It is not closes divided by booked calls." },
      { term: "Booked call close rate", formula: "matched payment closes / booked calls", text: "The same closes, divided by everything that was booked, including no shows. Use this when you want the funnel, and label it so nobody calls it close rate." },
      { term: "Cash per call", formula: "cash collected / held calls", text: "Money that arrived, divided by held calls. Not the price on the sales page. Not a deal marked won." },
    ],
    calculator: true,
    handles: `${brand} certifies these three rates in RevPhlo. The note comes from the call, the rep approves it in Slack, and a close counts only when a payment matches. GoHighLevel can still be the CRM. It is one source, not the certificate.`,
    handleLinks: [
      { href: "/products/revphlo", label: "Certified sales KPIs" },
      { href: "/gohighlevel-sales-team-dashboard", label: "GoHighLevel and certified numbers" },
      { href: "/high-ticket-sales-team-kpis", label: "The KPI list for setters and closers" },
    ],
    proof: publishedProof,
    related: [
      { href: "/high-ticket-sales-team-kpis", label: "KPIs for a closer and setter team" },
      { href: "/how-to-improve-show-rate", label: "How to improve show rate" },
      { href: "/how-to-improve-close-rate", label: "How to improve close rate" },
    ],
    faqs: [
      { q: "What is a good close rate in sales?", a: "We do not publish a universal good close rate. Public lists are not comparable for offers above $5,000, and we will not invent an industry average. Judge the team against its own prior month, with the formulas on this page, and against the named client before and after numbers in the proof section." },
      { q: "Is a 20% close rate good?", a: "Not as a verdict, and not against an industry average. Close rate here is matched payment closes divided by held calls. The Listings Lab ran this system and moved from 10.7% to 30.8% in 90 days. Budgetdog moved from 24.7% to 31.7%. A 20% close rate on that definition sits between Listings Lab's start and their later rate, and below where Budgetdog started. It is a description of those published rates, not a grade for your team. Compare 20% to your own prior month on the same definition." },
      { q: "Should close rate use booked calls or held calls?", a: "Held calls, if you mean closer skill. Booked calls, if you mean the whole funnel including no shows. Write the denominator in the label. The close rate on this page is matched payment closes divided by held calls." },
      { q: "Why did Woobie's show rate jump from 25% to 66%?", a: "The 25% was the old tracker. The 66% is what the system measured from attended calls. It is a measurement correction, published for that client. It is not a promise that your show rate moves by the same amount." },
      { q: "Does a verbal yes count as a close?", a: "Not in this definition. A close counts when a payment matches. A payment plan counts as cash when the cash is collected, not when the contract is signed for the full amount." },
      { q: "Can I use the calculator for my team?", a: "Yes. It only does the division. It does not tell you whether the rate is good, and it does not store the numbers. If attended and held are different in your process, enter them separately so show rate and close rate stay honest." },
    ],
  },
  {
    slug: "gohighlevel-sales-team-dashboard",
    path: "/gohighlevel-sales-team-dashboard",
    nav: "GoHighLevel dashboard",
    title: "GoHighLevel Sales Team Dashboard: Show Rate, Close Rate and Cash Per Call",
    h1: "GoHighLevel Sales Team Dashboard: Show Rate, Close Rate and Cash Per Call",
    description: "GoHighLevel can show appointments and pipeline activity. It does not certify show rate, close rate, and cash per call against matched payments. Here is where that stops, and what we install on top.",
    answer: [
      "GoHighLevel is a strong home for leads, calendars, and opportunities. A report inside it can show what a user did and which appointments exist. That is not the same as a certified show rate, close rate, and cash per call for a closer and setter team.",
      "Native reporting stops at activity and pipeline stages. It does not, by itself, refuse a close until a payment matches, and it does not flag a note that was edited to make a call look better. The Sales Team OS by Systemized Sales AI keeps GoHighLevel as a source and certifies the rates outside the stage names.",
    ],
    sections: [
      {
        h2: "What you can already see in GoHighLevel",
        paragraphs: [
          "If the team lives in GoHighLevel, the account already knows who owns an opportunity, when a call was booked, and whether someone moved a stage. Managers use that every day. We do not ask you to leave it.",
          "The gap shows up when you try to answer three questions in a meeting. What percent of booked calls were attended? What percent of held calls produced a payment? How much cash did a held call collect? Stage names do not answer those. A custom field a rep can type does not answer them either.",
          "Speed to lead has a harder limit. The part of the system that shows who called a new lead, and when, works with GoHighLevel only. If leads do not land there, that clock is not the tool for you.",
        ],
      },
      {
        h2: "Where a rep level report stops",
        paragraphs: [
          "A report filtered to one user tells you that user's tasks, calls, and opportunities. It still trusts the stage. If the closer marks the opportunity won before Stripe, Whop, or another payment tool shows money, the report will agree with the closer. The cash will not.",
          "Show rate breaks the same way. Booked appointments are easy to count. Attended appointments depend on someone updating the appointment after the call. Miss that update, or count a reschedule as a show, and the rate moves without the calendar moving.",
          "Cash per call is worse inside a single CRM report, because the money often does not live in GoHighLevel. Deposits, payment plans, and later invoices sit in the payment tool. A dashboard that never sees them cannot tell you what a conversation collected.",
        ],
      },
      {
        h2: "How certified numbers sit on top",
        paragraphs: [
          "RevPhlo connects GoHighLevel with the call recorder and the payment tools. It writes a note from the call. The rep approves that note in Slack. A close counts only when a payment matches. Show rate, close rate, and cash per call are certified from those rules, then a daily brief lands in Slack.",
          "QC reads GoHighLevel as well: appointment outcomes, prep before the call, and pipeline issues such as overdue tasks and unassigned opportunities. That is compliance and hygiene. It is not a second copy of the certified cash number. Use QC to see if the calendar and the pipeline are being worked. Use RevPhlo to see if the rates are real.",
          "Your team still makes the calls and still moves the stages. We install the connections, show the owner and the manager how to read the brief, and support them in Slack. We do not hire or manage the reps.",
        ],
      },
    ],
    definitions: [
      { term: "Show rate", formula: "attended / booked", text: "Attended calls divided by booked calls. An appointment that only changed stage is not proof someone showed up." },
      { term: "Close rate", formula: "matched payment closes / held calls", text: "A close counts when a payment matches. The denominator is held calls, not every opportunity in a pipeline stage." },
      { term: "Cash per call", formula: "cash collected / held calls", text: "Cash collected in the payment tools, divided by held calls. Pipeline value is not cash per call." },
    ],
    checklist: {
      title: "A check on your current GoHighLevel report",
      items: [
        "Can you name the denominator: booked calls or held calls?",
        "Does a close require a matched payment, or only a stage change?",
        "Can a rep edit the outcome after the call without a flag?",
        "Does the cash number come from the payment tool, or from the opportunity amount?",
        "Can you see who called a new lead, and when, per setter?",
      ],
    },
    handles: `${brand} treats GoHighLevel as the place leads and calendars live. Certification of show rate, close rate, and cash per call happens in RevPhlo. Speed to lead, for who called and when, is GoHighLevel only.`,
    handleLinks: [
      { href: "/products/revphlo", label: "RevPhlo" },
      { href: "/products/speed-to-lead", label: "Speed to Lead for GoHighLevel" },
      { href: "/products/qc-dashboard", label: "QC on GoHighLevel" },
      { href: "/high-ticket-close-rate-and-show-rate-benchmarks", label: "How to measure the rates" },
    ],
    proof: publishedProof,
    related: [
      { href: "/speed-to-lead-for-coaching-businesses", label: "Speed to lead for coaching businesses" },
      { href: "/high-ticket-sales-team-kpis", label: "KPIs worth tracking" },
    ],
    faqs: [
      { q: "Do we have to leave GoHighLevel?", a: "No. Keep it for leads, calendars, and opportunities. The system connects to it. The certified rates are not a renamed pipeline report." },
      { q: "Can GoHighLevel report show rate by itself?", a: "It can count appointments if people update them. That count is only as honest as the update. Show rate here is attended divided by booked, and a close still has to match a payment before it counts." },
      { q: "Does Speed to Lead work with HubSpot?", a: "No. Speed to Lead works with GoHighLevel only. RevPhlo can connect other sources, including HubSpot, for notes and certified KPIs. Do not expect the lead clock on a CRM it does not support." },
      { q: "What is cash per call if the opportunity amount is filled in?", a: "Still cash collected divided by held calls. The amount field on an opportunity is a forecast the rep can type. It is not the definition." },
      { q: "Who keeps the dashboard honest after install?", a: "Your manager, or you if you do not have one. We show the team how to approve notes and read the brief. We do not run the sales meeting for you." },
    ],
  },
  {
    slug: "sales-system-vs-hiring-a-sales-manager",
    path: "/sales-system-vs-hiring-a-sales-manager",
    nav: "System or a manager",
    title: "Install a Sales System or Hire a Sales Manager First",
    h1: "Install a Sales System or Hire a Sales Manager First",
    description: "Hire a sales manager into a team with no numbers, no playbook, and no daily list, and you hired a second person to hold the process in their head. Install the system first if you want the team to survive them.",
    answer: [
      "If the process still lives in one person's memory, hire the system before you hire the manager. A manager dropped onto unmarked numbers, no playbook, and no daily list becomes the next single point of failure.",
      "If the numbers, the playbook, the lead clock, and the pay rules already exist, a manager can run them. That is a people decision. The Sales Team OS by Systemized Sales AI does not hire or manage reps. Buyers who want a person, not a system, should look at sales management from Systemized Sales.",
    ],
    sections: [
      {
        h2: "Path A: you still run the reps",
        paragraphs: [
          "Path A is a founder with closers and maybe a setter, and no dedicated sales manager. You are the manager. The failure is not the missing job title. The failure is that follow up, call quality, and pay wait on whether you looked today.",
          "Systemize first. Certified show rate, close rate, and cash per call. An end of day record for setters, checked against the CRM. Call scoring so coaching has a list. A playbook so you stop retyping the same answer. Pay on cash collected, approved in one place. Manager OS is the list you run that day from, even while the only manager is you.",
          "When those exist, you can keep running the team or you can hire. The hire walks into a rhythm. They do not have to invent one in their first month and take it with them when they leave.",
        ],
      },
      {
        h2: "Path B: you already have a manager",
        paragraphs: [
          "Path B is a team that already has someone in the seat. The question is what they are managing. If they coach from memory and reconcile pay in a private sheet, the seat is busy and the team is still fragile.",
          "Give that manager the same parts. A daily brief. A review queue of weak calls. Setter numbers they can check. A pay approval that is not a weekend in a spreadsheet. Their job becomes deciding who to coach and what to change, which is the job you hired them for.",
          "We install that and show them how to use it. We do not replace them, and we do not sit in for them on coaching calls.",
        ],
      },
      {
        h2: "When a person is the right first buy",
        paragraphs: [
          "Some founders do not want to manage sales at all. They want someone to recruit, ramp, coach, and run the floor. That is not this offer. Pretending a system install is a manager will waste the kickoff.",
          "Systemized Sales has a sales management offer for buyers who want people. The page is https://systemizedsales.com/sales-management. Read it if the constraint is that nobody on your side will manage the reps. Stay on this site if the constraint is that the team you already have cannot see its own work.",
          "A fractional sales manager has the same limit as a full time hire. They can only run what is visible. If you bring one in, hand them certified numbers and a playbook, or budget time for them to build those while the team waits.",
          "Price is not a reason to pick a person over a system, or the reverse. We do not publish a rate card on this page. You get the setup and the monthly on the call, after we see the team and the tools. The sales management offer is priced on its own page, by the people who sell it.",
        ],
      },
    ],
    checklist: {
      title: "Which path you are on",
      items: [
        "You already have at least one rep taking calls.",
        "You can name who manages them this week, even if the name is yours.",
        "You want the work visible more than you want a new boss for the reps.",
        "If you want someone else to manage the reps, you will look at the sales management offer instead of forcing this install to do that job.",
      ],
    },
    handles: `${brand} is Path A and Path B as a system. It is the install, the training on how to use it, and Slack support. It is not a manager we place on your team.`,
    handleLinks: [
      { href: "/products/manager-os", label: "Manager OS" },
      { href: "/products/revphlo", label: "Certified numbers" },
      { href: "/founder-led-sales-team-without-a-manager", label: "Running closers without a manager" },
      { href: "https://systemizedsales.com/sales-management", label: "Sales management, if you want people" },
    ],
    proof: publishedProof,
    related: [
      { href: "/how-to-scale-a-high-ticket-sales-team", label: "How to scale without breaking the team" },
      { href: "/sales-team-operating-system", label: "The 10 parts we install" },
    ],
    faqs: [
      { q: "Should I hire a sales manager or install a system?", a: "Install the system if reps already exist and the process is still in someone's head. Hire a manager when there is something to manage: numbers, a playbook, a daily list, and pay rules. Hiring first, into a blank process, recreates the same risk with a new name." },
      { q: "What is a fractional sales manager good for?", a: "A fractional manager is still a person. They can coach and run a rhythm if the inputs exist. They are the wrong first purchase if you need the inputs built and you also expect them to sell for you. If you want that people offer, use the sales management page linked above." },
      { q: "Will you manage the team while we look for a manager?", a: "No. We do not hire, ramp, coach, or manage reps. We install the system and show your team how to use it. You keep managing, or you hire someone who will." },
      { q: "Can the founder stay the manager?", a: "Yes. That is Path A. Manager OS is the place you run the day. It does not require a second salary." },
      { q: "What if the manager we have is the problem?", a: "A system will show the rates, the slow leads, and the calls that scored poorly. It will not fire anyone. What you do with that view is your decision. We will not pretend software replaces a hard conversation." },
    ],
  },
]
