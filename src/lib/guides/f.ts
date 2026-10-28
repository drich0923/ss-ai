import type { Guide } from "@/lib/guide-types"
import { publishedProof } from "@/lib/proof"

const brand = "The Sales Team OS by Systemized Sales AI"

const cluster = [
  { href: "/how-to-improve-show-rate", label: "How to improve show rate" },
  { href: "/how-to-improve-close-rate", label: "How to improve close rate" },
  { href: "/how-to-hire-high-ticket-closers", label: "How to hire high ticket closers" },
  { href: "/how-to-hire-appointment-setters", label: "How to hire appointment setters" },
  { href: "/high-ticket-sales-script-setter-and-closer", label: "Setter and closer scripts" },
  { href: "/sales-playbook-template", label: "Sales playbook template" },
  { href: "/closer-onboarding-30-60-90-day-plan", label: "30 60 90 day closer onboarding" },
]

export const guidesF: Guide[] = [
  {
    slug: "how-to-improve-show-rate",
    path: "/how-to-improve-show-rate",
    nav: "Improve show rate",
    title: "How to Improve Show Rate on High Ticket Sales Calls",
    h1: "How to Improve Show Rate on High Ticket Sales Calls",
    description: "Improve show rate only after you measure it. Attended divided by booked, not a tracker a rep can type. Then work speed to lead, confirmation, reminders, and rebooking per setter.",
    answer: [
      "You improve show rate by measuring who actually attended, then fixing the steps between the booking and the call. A typed tracker is not that measurement. Woobie's old tracker said 25%. The system measured 66% on the same kind of work. Coaching the wrong number wastes the week.",
      "Show rate is attended calls divided by booked calls. No show rate is no shows divided by booked calls. A reschedule is neither. Once those are stable, the levers are speed to lead, setter confirmation, content before the call, reminders, rebooking, and a named setter on each booked call. The Sales Team OS by Systemized Sales AI makes the rate visible. Your setters still make the calls.",
    ],
    sections: [
      {
        h2: "Measure it before you chase it",
        paragraphs: [
          "A booked call is a time on the calendar. An attended call is a prospect who showed up. If the sheet and the calendar disagree, believe the calendar and the call record. Woobie is the published example: 25% in the old tracker, 66% when attendance was counted. That gap is a definition problem. It is not a tip you can copy onto your ads.",
          "No show rate uses the same booked calls as the denominator. A no show is a booking that was not attended and was not moved before the slot. If you dump reschedules into the no show cell, the rate looks worse than the room was, and you will 'fix' confirmation that was already happening. Write the three buckets: attended, no show, rescheduled or canceled. They should account for the bookings.",
          "Do this per setter, not as one team blob. The setter who booked the call owns the show until a closer is in the room. A team average hides the person whose calendar is fiction. Budgetdog published a no show move from 19.1% to 9.6%. Infinite Heart Health published a show rate move from 26% to 55% from July to September 2026. Those are their before and after numbers. They are not your target.",
        ],
      },
      {
        h2: "The levers that actually move attendance",
        paragraphs: [
          "Speed to lead is first if the lead is not yet a hard booking, and it still matters after one. A person who waited a day to be called is less likely to treat the appointment as real. On this system the clock is per setter and it works with GoHighLevel only. You see who called and how long the lead waited. You do not get a team average that flatters the fast setter.",
          "Confirmation is a conversation, not a checkbox. The setter confirms the problem, the time, and what the call is for. Pre call content is the short piece you send so the prospect arrives knowing the offer is real: a page, a short video you already use, or a written outline. Reminders are the calendar note and the message the day before and the day of. None of these replace a human who will rebook a miss the same day.",
          "Rebooking is where show rate goes to die quietly. A no show with no same day attempt becomes a lost lead and a dirty rate. Put the rebook on the setter who owned the set, with a due time, and check it against the CRM. End of day forms will claim the rebook. The calendar is the proof.",
        ],
        bullets: [
          "Speed to lead: who called, and how long the lead waited, per setter.",
          "Confirmation: the setter restates the time and the point of the call.",
          "Pre call content: one asset, sent on purpose, not a dump of links.",
          "Reminders: day before and day of, from a person or a sequence you can see.",
          "Rebooking: same day attempt, visible on the calendar.",
          "Accountability: each booked call has a setter name.",
        ],
      },
      {
        h2: "What not to do with a weak show rate",
        paragraphs: [
          "Do not change the closer script because people are not sitting down. Close rate is matched payment closes divided by held calls. If nobody held the call, the closer was not the variable. Fix attendance, then read close rate.",
          "Do not add a second reminder tool and call it a system. The failure is usually an unnamed owner and a number nobody trusts. One list of today's bookings, with a setter and a status, beats three apps that all say confirmed.",
          "Do not promise the prospect a result on the confirmation just to raise the show. You will buy attendance with a claim you cannot keep, and the close rate will pay for it later. Confirm the meeting. Do not invent the outcome.",
        ],
      },
    ],
    definitions: [
      { term: "Show rate", formula: "attended / booked", text: "Prospects who showed up, divided by calls that were booked. A reschedule is not an attend." },
      { term: "No show rate", formula: "no shows / booked", text: "Bookings that were not attended and were not moved before the slot, divided by booked calls." },
      { term: "Reschedule", formula: "moved before the slot", text: "Count these on their own. They are not no shows and they are not shows." },
    ],
    checklist: {
      title: "This week's show rate check",
      items: [
        "Show rate and no show rate use booked calls as the denominator.",
        "Reschedules are not sitting inside no shows.",
        "Every booking has a setter name.",
        "You can see who called new leads, and when, if leads live in GoHighLevel.",
        "No shows from yesterday have a same day rebook attempt on the calendar.",
        "You are not coaching closers for a problem that happened before the call.",
      ],
    },
    handles: `${brand} certifies show rate in RevPhlo, times the first call in Speed to Lead when the CRM is GoHighLevel, and keeps setter submissions in the end of day tracker so you can check them against the calendar. QC can show whether prep before the call happened. Your team still confirms and still rebooks.`,
    handleLinks: [
      { href: "/products/revphlo", label: "Certified show rate" },
      { href: "/products/speed-to-lead", label: "Speed to Lead" },
      { href: "/products/setter-eod", label: "Setter end of day" },
      { href: "/products/qc-dashboard", label: "Prep and appointment outcomes" },
      { href: "/high-ticket-close-rate-and-show-rate-benchmarks", label: "How the rates are defined" },
    ],
    proof: publishedProof,
    related: cluster.filter(item => item.href !== "/how-to-improve-show-rate"),
    faqs: [
      { q: "How do you calculate no show rate?", a: "No shows divided by booked calls. A no show was booked, was not attended, and was not rescheduled before the slot. Show rate is the other fraction: attended divided by booked. Keep reschedules in their own bucket." },
      { q: "Why did Woobie show 25% and 66%?", a: "25% was the old tracker. 66% is what the system measured from attendance. Use it as a warning about typed numbers. Do not treat the gap as a promise for your calendar." },
      { q: "What improved show rate for the teams you can name?", a: "Budgetdog's published no shows went from 19.1% to 9.6%. Infinite Heart Health's published show rate went from 26% to 55% from July to September 2026. The pages do not hand you their reminder copy. They show that the rate was measured and then worked." },
      { q: "Should reminders be automatic?", a: "A reminder the prospect receives is useful. An automatic send that nobody checks is not confirmation. You still want a person who sees the no show and rebooks it." },
      { q: "Does a higher show rate raise close rate?", a: "Not by itself. Close rate is measured on held calls. More people in the room can lower close rate if the sets are weaker. Read both rates. Do not blend them into one number." },
    ],
  },
  {
    slug: "how-to-improve-close-rate",
    path: "/how-to-improve-close-rate",
    nav: "Improve close rate",
    title: "How to Improve Close Rate on a High Ticket Sales Team",
    h1: "How to Improve Close Rate on a High Ticket Sales Team",
    description: "Improve close rate only after a close means a matched payment. Then review calls, enforce the playbook, and look at the sets your setters are booking. No universal good close rate.",
    answer: [
      "You improve close rate by counting a close only when a payment matches, then changing the calls and the leads that produce those payments. A stage named won is not a close. A verbal yes is not a close.",
      "There is no reliable public number for what a good close rate is on offers above $5,000. The formulas and the reason are on the benchmarks page. Budgetdog's published close rate moved from 24.7% to 31.7%. That is their result, not a bar you are owed. The Sales Team OS by Systemized Sales AI shows the rate and the calls. Your closers still sell.",
    ],
    sections: [
      {
        h2: "Count the close the hard way",
        paragraphs: [
          "Close rate on this site is matched payment closes divided by held calls. Held means a closer actually ran the conversation. Booked calls that never sat down belong in show rate, not in this denominator. If you divide closes by booked calls, label it booked call close rate so the meeting does not argue about two different fractions.",
          "Cash has to match. High ticket offers collect deposits and payment plans. If the closer can mark the opportunity closed before money arrives, the rate will rise on the day you ask about it and fall when finance catches up. RevPhlo counts the close when a payment matches and flags an edit that makes the call look better than it was. The rep approves the note in Slack.",
          "Read the benchmarks page before you set a goal. It explains why public lists are not usable here, and it keeps show rate, close rate, and cash per call from being mashed into one slogan. Cash per call is cash collected divided by held calls. A higher close rate on tiny cash is not the same win as a steady close rate on collected plans.",
        ],
      },
      {
        h2: "What to change once the rate is real",
        paragraphs: [
          "Call review is the first lever. Score the opener, the discovery, the offer, the ask, and the next step. QC catches prep and pipeline hygiene, including whether the opportunity is assigned and the tasks are not stale. AI Call Coaching scores transcripts and puts weak calls in a queue so a manager does not sample at random. The manager still coaches. We do not.",
          "Playbook adherence is the second lever. A script that lives in one closer's head cannot be enforced. The playbook holds the call flow and the objections. The scorecard asks whether the call followed it. If the same miss shows up on three calls, fix the playbook or the rep. Do not add a new slogan.",
          "Lead quality is the third lever, and it belongs to setters. A closer cannot close a set that was booked by hiding the price or the point of the call. Look at close rate by setter, not only by closer. A setter with fast speed to lead and a weak close rate on their sets is booking the wrong people, or booking without confirmation. That is a setter problem. Treat it as one.",
        ],
      },
      {
        h2: "What a good close rate is not",
        paragraphs: [
          "It is not an industry average. We will not publish one. It is not your best closer's best week used as a whip for the new hire. Compare a closer to their own prior month, on the same definition, after they have passed the 30 60 90 gates and are on a normal load.",
          "It is not show rate in disguise. People who do not attend cannot buy. Fix show rate on its own page. Then come back to held calls.",
          "It is not a promise. Budgetdog moved from 24.7% to 31.7%. The Listings Lab moved from 10.7% to 30.8% in 90 days, which is also published on the homepage. Your starting point, offer, and lead source are not theirs. Use the numbers to see that the rate can be measured and worked. Do not paste them into a forecast.",
        ],
      },
    ],
    definitions: [
      { term: "Close rate", formula: "matched payment closes / held calls", text: "A close counts when a payment matches. The denominator is calls a closer held." },
      { term: "Booked call close rate", formula: "matched payment closes / booked calls", text: "The same closes, including no shows in the denominator. Label it. Do not call it close rate." },
      { term: "Cash per call", formula: "cash collected / held calls", text: "Money that arrived, divided by held calls." },
    ],
    checklist: {
      title: "Before you try to raise close rate",
      items: [
        "Closes require a matched payment.",
        "The denominator is held calls.",
        "You can name the setter on the sets that are not closing.",
        "Weak calls are in a review queue, not a random sample.",
        "The objection that keeps appearing is written in the playbook.",
        "New closers are judged after the onboarding gates, not in week one.",
      ],
    },
    handles: `${brand} certifies the rate in RevPhlo, scores calls in AI Call Coaching, checks prep in QC, and keeps the script in the playbooks. The benchmarks page is the definition. Your manager decides what to coach.`,
    handleLinks: [
      { href: "/high-ticket-close-rate-and-show-rate-benchmarks", label: "Close rate and show rate benchmarks" },
      { href: "/products/revphlo", label: "Matched payment closes" },
      { href: "/products/ai-call-coaching", label: "AI Call Coaching" },
      { href: "/products/qc-dashboard", label: "QC" },
      { href: "/products/closer-playbook", label: "Closer and setter playbooks" },
    ],
    proof: publishedProof,
    related: cluster.filter(item => item.href !== "/how-to-improve-close-rate"),
    faqs: [
      { q: "What is a good close rate?", a: "We do not publish one. Offers above $5,000 do not have a reliable public benchmark. Use the benchmarks page for the formulas, then compare your team to its own last month and to the named results in the proof section." },
      { q: "How do you increase sales close rate without faking it?", a: "Stop counting unpaid wins. Review the calls that scored poorly. Put the repeated objection in the playbook. Check which setter's bookings are the ones that do not pay. Change one of those, then read the rate next week." },
      { q: "Whose close rate moved in the published results?", a: "Budgetdog's close rate went from 24.7% to 31.7%. That is the figure this page is built around. Other homepage results use their own labels. Do not mix them into a single promise." },
      { q: "Should I coach show rate and close rate in the same meeting?", a: "Look at both. Coach them separately. Show rate is attendance. Close rate is held calls that collected. A blended number hides which fix you need." },
      { q: "Will you coach the closers?", a: "No. Scoring shows your manager what to coach. We install the system and show your team how to use it. We do not coach or manage the reps." },
    ],
  },
  {
    slug: "how-to-hire-high-ticket-closers",
    path: "/how-to-hire-high-ticket-closers",
    nav: "Hire closers",
    title: "How to Hire High Ticket Closers: Application, Scorecard and Interview Process",
    h1: "How to Hire High Ticket Closers: Application, Scorecard and Interview Process",
    description: "A hiring process for high ticket closers: one application page, a scorecard, named stages, and a role play. We install that system. We do not recruit the closer for you.",
    answer: [
      "Hire a high ticket closer with one application page, a written scorecard, and stages you do not skip when you are in a hurry. The interview is a role play and a few hard questions, not a tour of the office story.",
      "The Sales Team OS by Systemized Sales AI includes the Hiring App: a public page where candidates apply, and one place where your team reviews and compares them. You still choose who to hire. We do not recruit for you. Teams that want hiring done for them should start at https://systemizedsales.com.",
    ],
    sections: [
      {
        h2: "The application, the scorecard, and the stages",
        paragraphs: [
          "Every candidate hits the same public application. DMs, email forwards, and 'my friend knows a closer' still happen. They get pointed at the page. If the person will not fill it out, you learned something before you spent an hour.",
          "The scorecard is how you compare people who are not in the room together. Same rows, filled by the person who ran the interview, before you talk yourself into a yes. Score the offer explanation, the discovery questions, the ask, and how they handled a stall. Leave off charm. Charm is how bad hires get through.",
          "Stages keep the scorecard from being a souvenir. Application received. Scorecard review. Interview. Role play. Decision. A candidate does not skip to an offer because the calendar is empty. Empty calendars are how you hire someone you then spend 90 days replacing. The 30 60 90 plan starts after the decision, not instead of it.",
        ],
      },
      {
        h2: "Interview questions that are worth the time",
        paragraphs: [
          "Ask for a specific deal, not a philosophy. What was the price? Who else was on the decision? What did the prospect say when they stalled, and what did you say next? A closer who cannot narrate one deal will not run yours.",
          "Ask what they do the day before a call. Confirmation is part of the job on a booked call team even when a setter booked it. A closer who thinks attendance is someone else's problem will blame show rate for a close rate they never earned.",
          "Ask how they want to be paid. You pay on cash collected, with the plan written down. A candidate who only understands contract value, or who needs the full fee on a signature, is telling you the argument you will have in month two. Listen.",
        ],
        bullets: [
          "Walk through the last offer you sold, including the price.",
          "What did you say when they needed to think about it?",
          "How do you confirm a call the day before?",
          "What does a bad set look like, and what do you do with it?",
          "How have you been paid: collected cash, contract value, or a salary plus a story?",
        ],
      },
      {
        h2: "What to test before an offer",
        paragraphs: [
          "Test a role play, not a resume. You play the prospect. You stall on price, then on a partner who is not on the call, then on timing. You are listening for a question and an ask, not for a speech. The same scorecard you will use on live calls is the right card here. Do not invent a softer one for candidates.",
          "Test whether they can learn an offer they do not already know. Give them a one page version of yours the day before. In the role play they should be able to say who it is for, what it costs, and what happens after a yes, without inventing terms. Product mastery is the onboarding test. This is the 'can they learn it' test.",
          "Do not test them by putting them on a live calendar 'just to see.' That is a prospect paying for your interview. The gates for live calls sit in the 30 60 90 plan: product test, shadowing, role play, then a capped set of live calls. Hiring ends at the decision. Onboarding starts at day one.",
        ],
      },
    ],
    template: {
      title: "Closer candidate scorecard",
      headers: ["Candidate", "Stage", "Offer explanation", "Discovery", "Ask", "Stall", "Pay fit", "Advance"],
      rows: [
        ["Name", "Interview", "yes or no", "asked about the problem and the money", "asked for a decision", "stayed in the question", "collected cash is acceptable", "yes or no"],
      ],
      csv: "/guides/closer-candidate-scorecard.csv",
    },
    handles: `${brand} gives you the application page and one place to compare candidates. The scorecard above is the comparison. After you hire, Closer Onboarding holds the 30 60 90 plan. We show your team how to use both. We do not source the candidates.`,
    handleLinks: [
      { href: "/products/hiring-app", label: "Hiring App" },
      { href: "/closer-onboarding-30-60-90-day-plan", label: "30 60 90 day onboarding" },
      { href: "/sales-call-scorecard-template", label: "The call scorecard to reuse in the role play" },
      { href: "https://systemizedsales.com", label: "Systemized Sales, if you want hiring done for you" },
    ],
    proof: publishedProof,
    related: cluster.filter(item => item.href !== "/how-to-hire-high-ticket-closers"),
    faqs: [
      { q: "Do you recruit closers for us?", a: "No. We install the hiring system and show your team how to run the application, the scorecard, and the stages. We do not recruit, ramp, or manage reps. If you want a team that hires for you, go to https://systemizedsales.com." },
      { q: "What sales rep interview questions matter?", a: "A specific past deal with a price, the words they used on a stall, how they confirm a call, what a bad set looks like, and how they expect to be paid. Then a role play. Opinions about hustle do not separate candidates." },
      { q: "Can we skip the role play if the resume is strong?", a: "You can, and you will not know if they can run the call. A strong resume is a reason to interview. The role play is the test. The scorecard is what keeps the debrief from becoming a vote on likability." },
      { q: "Where do they go after we say yes?", a: "Into the 30 60 90 plan: product test, shadowing, role play against your offer, then a small set of live calls. The hiring scorecard does not replace that. It gets them in the door." },
      { q: "What if we only need one closer?", a: "Use the same page and the same scorecard. A single hire made from a group chat is how a founder led team gets a closer who only works when you are watching." },
    ],
  },
  {
    slug: "how-to-hire-appointment-setters",
    path: "/how-to-hire-appointment-setters",
    nav: "Hire setters",
    title: "How to Hire Appointment Setters for a Booked Call Team",
    h1: "How to Hire Appointment Setters for a Booked Call Team",
    description: "Hire phone and DM setters with one application, a scorecard, and a booking role play. Size the seat from your own show rate and closer capacity. We do not recruit them for you.",
    answer: [
      "Hire appointment setters the same way you hire closers: one application page, a scorecard, and a test that matches the channel. Phone setters are tested on a call. DM setters are tested on a written thread. Do not pretend those are the same job.",
      "The Sales Team OS by Systemized Sales AI installs that hiring system. Your team still decides. We do not recruit setters for you. If you want hiring done as a service, start at https://systemizedsales.com. After they are hired, the end of day tracker is how you see the work.",
    ],
    sections: [
      {
        h2: "Phone setters and DM setters are different hires",
        paragraphs: [
          "A phone setter lives on dials, conversations, and bookings. A DM setter lives on messages, replies, and bookings. The scorecard should say which channel you are hiring for. A person who is warm in writing and frozen on the phone will look great in the wrong interview.",
          "Both jobs end at a qualified booking, not at a close. Do not interview setters as junior closers unless that is actually the next seat. Ask them to book you, not to pitch the full offer. The failure mode is a setter who 'closes' on the first touch and leaves the closer with a prospect who was promised the wrong thing.",
          "Stages match the closer process, with a different test at the end. Application received. Scorecard review. Interview. Channel role play. Decision. The Hiring App is the public page and the place you compare them. The scorecard is yours to fill. We do not score the candidate for you.",
        ],
      },
      {
        h2: "How many setters, thought through from your numbers",
        paragraphs: [
          "There is no setter to closer ratio we will publish. The ratio is arithmetic on your own rates. Start from how many calls one closer can hold in a week. Divide by your show rate to see how many bookings that closer needs. Divide by how many real sets one setter can book in a week. That is the headcount. If show rate is a typed fiction, the headcount is fiction too. Measure show rate first.",
          "Here is the shape of the math, labeled as an example so it is not mistaken for a client result. Suppose a closer can hold 12 calls a week and show rate is one half. That closer needs 24 bookings. Suppose a setter can book 8 sets that actually qualify. That is three setters for that closer, before you add room for no shows you intend to rebook. Change any input and the answer changes. Use your inputs.",
          "Separate the channels in that math. Eight DM sets are not eight phone sets. They confirm differently and they no show differently. A blended 'activity' number will tell you to hire the wrong seat.",
        ],
      },
      {
        h2: "What to ask and what to test",
        paragraphs: [
          "Ask them to describe a booking they made that showed up, and one that did not. You want to hear confirmation and a rebook, not a speech about grinding. Ask what they say when the lead asks for information instead of a time. The right shape is a short answer and a booked slot, or a clean disqualify. A novel is a miss.",
          "For a phone hire, role play a live dial. You are busy, skeptical, and you ask 'what is this about?' For a DM hire, hand them a thread and a clock. They write the next three messages. You are looking for a question, a time, and no invented discount. Keep the messages. Compare them on the scorecard after, not from memory.",
          "Pay comes up in the interview because setters on this kind of team are often paid on shows, on collected cash, or on a mix. Say which plan you actually run. A setter who heard 'commission' and assumed closer pay will be gone in a month. The end of day report is where their claimed dials or messages meet the CRM. Tell them that in the interview so the job is not a surprise.",
        ],
      },
    ],
    template: {
      title: "Setter candidate scorecard",
      headers: ["Candidate", "Channel", "Opener", "Books a time", "Disqualifies cleanly", "Confirmation habit", "Advance"],
      rows: [
        ["Name", "Phone or DM", "states why they are reaching out", "yes or no", "yes or no", "describes the day before the call", "yes or no"],
      ],
      csv: "/guides/setter-candidate-scorecard.csv",
    },
    checklist: {
      title: "Before you open the seat",
      items: [
        "You know whether the seat is phone, DM, or one person who truly does both.",
        "Show rate is measured, so the headcount math has a real denominator.",
        "The application page is the only front door.",
        "The role play matches the channel.",
        "The end of day tracker is ready for their first week.",
        "You have said, out loud, that you hire them. We do not.",
      ],
    },
    handles: `${brand} is the application page, the place you compare setters, and the end of day tracker they submit into after you hire. Speed to Lead, on GoHighLevel, shows who called. We install those parts and show your team how to use them.`,
    handleLinks: [
      { href: "/products/hiring-app", label: "Hiring App" },
      { href: "/products/setter-eod", label: "Phone and DM setter end of day" },
      { href: "/setter-eod-report-template", label: "Setter end of day template" },
      { href: "/how-to-improve-show-rate", label: "Show rate, which sizes this seat" },
      { href: "https://systemizedsales.com", label: "Systemized Sales, if you want hiring done for you" },
    ],
    proof: publishedProof,
    related: cluster.filter(item => item.href !== "/how-to-hire-appointment-setters"),
    faqs: [
      { q: "How do you hire appointment setters?", a: "One application page, a scorecard for the channel, an interview, and a role play that asks them to book a time. Phone and DM are different tests. Your team makes the decision." },
      { q: "What is the right setter to closer ratio?", a: "The one your show rate and your closer's held call capacity produce. Divide held calls by show rate to get bookings required, then divide by sets one setter can book. We do not publish a universal ratio." },
      { q: "Do you find the setters?", a: "No. We install the hiring system. We do not recruit. Teams that want hiring done for them can start at https://systemizedsales.com." },
      { q: "Where do their numbers go after they start?", a: "Into the phone or DM end of day tracker, checked against the CRM. The template is on the setter end of day guide. A form they can type is not the calendar." },
      { q: "Should a setter be on the closer onboarding plan?", a: "The 30 60 90 plan on this site is written for closers: product test, shadowing, role play, live closes. Setters need the same idea with a booking test instead of a close. Do not run them through a closer certification and call it done." },
    ],
  },
  {
    slug: "high-ticket-sales-script-setter-and-closer",
    path: "/high-ticket-sales-script-setter-and-closer",
    nav: "Setter and closer scripts",
    title: "Setter and Closer Scripts for High Ticket Offers: How to Build and Enforce Them",
    h1: "Setter and Closer Scripts for High Ticket Offers: How to Build and Enforce Them",
    description: "Build a setter script and a closer call framework, including objections, then enforce them with QC and call review. A script nobody checks is a document.",
    answer: [
      "A setter script books a qualified time. A closer framework runs the conversation through discovery, the offer, and a decision. Neither is a poem the rep must recite. Both are the standard you can score.",
      "Scripts fail when they are optional. The Sales Team OS by Systemized Sales AI keeps them in the playbooks and checks calls against them with QC and AI Call Coaching. Your team still says the words. We do not hop on the calls.",
    ],
    sections: [
      {
        h2: "What a setter script has to do",
        paragraphs: [
          "The setter script has five jobs, in order. Open with a reason that is true. Ask enough to know the person could buy. State what the call with the closer is, including the kind of decision and the price range if you reveal price before the call. Book a specific time. Confirm what will happen before that time. If a line does not serve one of those jobs, cut it.",
          "Phone and DM can share the jobs and not the sentences. A dial has a few seconds to earn the next sentence. A DM can be shorter still: one question, then a time. Do not paste the closer's pitch into the setter's mouth. The setter who delivers the whole offer on the booking call steals the closer's conversation and usually mangles the terms.",
          "Write the disqualify. A script that only knows how to book will book people who should have been told no. The line is simple: who it is not for, said early, without an apology. That protects show rate and close rate at the same time, because the people who attend are the people who were supposed to.",
        ],
      },
      {
        h2: "A closer call framework",
        paragraphs: [
          "Frame the call in the first minute: how long it is, what a yes and a no look like, and that a decision is the point. Then discovery, which is the problem, the cost of leaving it, and who else decides. Then the offer, tied to what they just said, including price and what happens after payment. Then the ask. Then, if they do not buy, a next step that is a time or a clear no. A framework with no ask is a webinar.",
          "Do not write the discovery as a form they can hear. Two or three questions that you actually use are better than twelve that no closer remembers. The playbook can hold examples. The live call has to sound like a person who listened.",
          "The note after the call has to match this framework. If the script says they asked for a decision and the note says the prospect needs to think, the scorecard should show that gap. RevPhlo writes the note from the call and the rep approves it. An edited note that flatters the call gets flagged. That is how a script stays honest.",
        ],
      },
      {
        h2: "Objections, and why the script dies without QC",
        paragraphs: [
          "Handle objections in a section of the playbook, not in a side doc. For each one, write what it usually means, the question to ask, and the line you are willing to say. The common ones on a high ticket booked call are price, a partner who is absent, timing, and 'I need to think about it.' 'I need to think' is often a missing decision or a missing person. The question comes before the speech.",
          "A script fails in silence. Closers drift off it on Thursday and the close rate moves the next month, and nobody can point at the call. QC shows whether prep happened and whether the pipeline is being worked. AI Call Coaching scores the call against the card for that role and queues the weak ones. The manager listens to those. If the same objection is missed, you either coach the rep or you rewrite the line because the line was bad. Both are allowed. Ignoring it is not.",
          "New closers learn the script inside the 30 60 90 plan, including the role play gate before live calls. Setters learn the booking script before they are turned loose on leads. Onboarding without the script is a tour. A script without onboarding is a file. QC without either is a score of a conversation you never defined.",
        ],
      },
    ],
    template: {
      title: "Script outline",
      headers: ["Part", "Setter", "Closer"],
      rows: [
        ["Open", "Why you are calling, in one sentence", "Time, decision, what a yes and a no are"],
        ["Questions", "Fit: problem, budget range, who decides", "Problem, cost of waiting, who else decides"],
        ["Offer", "What the closer call is, not the full pitch", "Offer, price, what happens after payment"],
        ["Ask", "A specific time", "A decision"],
        ["If no", "Disqualify or book a better time", "A next step with a time, or a clear no"],
        ["Objection", "Send me info: answer short, then book or stop", "Price, partner, timing, think about it"],
      ],
      csv: "/guides/setter-closer-script-outline.csv",
    },
    handles: `${brand} stores the script in Closer and Setter Playbooks, scores the call in AI Call Coaching, and checks prep in QC. The playbook template is the rest of the document this script lives in. Your manager enforces it.`,
    handleLinks: [
      { href: "/products/closer-playbook", label: "Closer and Setter Playbooks" },
      { href: "/sales-playbook-template", label: "Sales playbook template" },
      { href: "/sales-call-scorecard-template", label: "Call scorecard" },
      { href: "/products/qc-dashboard", label: "QC" },
      { href: "/products/ai-call-coaching", label: "AI Call Coaching" },
    ],
    proof: publishedProof,
    related: cluster.filter(item => item.href !== "/high-ticket-sales-script-setter-and-closer"),
    faqs: [
      { q: "What is in a high ticket closing script?", a: "A frame, discovery, the offer with price, an ask, and a next step if they do not buy. Objections sit next to it: price, an absent partner, timing, and the need to think about it. It is a framework, not a recital." },
      { q: "Should setters use the closer script?", a: "No. The setter script opens, qualifies, books, and confirms. The closer script runs the decision. Mixing them makes the booking call too long and the sales call redundant." },
      { q: "How do you enforce a script?", a: "Put it in the playbook, score calls against it, and review the misses. A document nobody opens is not enforced. QC and call coaching are the check. The manager is the one who coaches." },
      { q: "Do you write the script for us?", a: "We install the playbook and show your team how to put the script in it. The words are yours. We do not take the sales calls, and we do not hand you a generic closer monologue." },
      { q: "When does a new rep have to know it?", a: "Before live calls. That gate is in the 30 60 90 plan: they role play the script, then they take a capped set of calls that get reviewed." },
    ],
  },
  {
    slug: "sales-playbook-template",
    path: "/sales-playbook-template",
    nav: "Sales playbook",
    title: "Sales Playbook Template for High Ticket Closer and Setter Teams",
    h1: "Sales Playbook Template for High Ticket Closer and Setter Teams",
    description: "What belongs in a sales playbook for a high ticket setter and closer team: the buyer, the offer, the calls, the objections, the KPIs, and the SOPs. Plus how it connects to onboarding and QC.",
    answer: [
      "A sales playbook is the one link a setter or closer opens for how this team sells. It holds the buyer, the offer, the call flow, the objections, the KPIs with their formulas, and the SOPs for the work around the call. If it lives in five tools, it is not a playbook.",
      "The Sales Team OS by Systemized Sales AI puts that link in Closer and Setter Playbooks. Onboarding assigns it. QC and call review check whether the calls followed it. We install the place and show your team how to fill it. We do not write your offer for you.",
    ],
    sections: [
      {
        h2: "What goes in it",
        paragraphs: [
          "Start with who you sell to and who you do not. A playbook that describes 'anyone with the problem' will be used to book anyone with a pulse. Name the buyer, the price band, and the disqualify. Setters need this more than closers do, because they decide who reaches the calendar.",
          "Then the offer in plain language: what they get, what it costs, how it is paid, and what happens the day after a yes. Closers invent terms when this page is vague. Payment plans belong here so commission and the pitch describe the same cash.",
          "Then the calls. Link the setter script and the closer framework rather than pasting a new version. One source. Objections next, each with the question and the line. KPIs next, with the formulas: show rate is attended divided by booked, close rate is matched payment closes divided by held calls, cash per call is cash collected divided by held calls. SOPs last: how to confirm, how to rebook, how to submit end of day, how to approve a note, how to submit cash collected. A playbook that stops at the pitch ignores the work that makes the pitch possible.",
        ],
      },
      {
        h2: "How the outline is used",
        paragraphs: [
          "Onboarding is where a new closer is required to open it. The 30 60 90 plan tests the product from this document, then shadows calls, then role plays the framework that lives here. If the playbook and the onboarding modules disagree, the rep will follow whichever person spoke last. Make the playbook the source and point the modules at it.",
          "QC and the call scorecard are how you know the playbook is real. Prep before the call, the shape of the conversation, and the note after it should match the pages you wrote. When they do not, you have a coaching item or a page that is wrong. Update the page when the offer changes. A playbook that is 'basically current' is how two closers quote two prices.",
          "Setters get the same link, with their script and their end of day SOP on top. Do not make them dig through closer objections to find out how to book. Order the navigation so a setter lands on setter pages and a closer lands on closer pages. The Hiring App is not the playbook. Hiring decides who joins. The playbook is what they are required to use on day one.",
        ],
      },
      {
        h2: "What to leave out",
        paragraphs: [
          "Leave out motivation. A playbook is not a poster. Leave out numbers you cannot define, and leave out any industry average. If a KPI does not have a formula next to it, it does not belong on the page.",
          "Leave out a second copy of the script 'for managers.' Managers get lost between versions, and so do reps. One page, edited when the words change, with the date of the change in the document.",
          "Leave out access rules that hide the playbook from the people on the calls. Setters and closers should both open it. Sensitive pay rates can sit on the commission page. The pitch cannot.",
        ],
      },
    ],
    template: {
      title: "Playbook outline",
      headers: ["Section", "What the page must answer"],
      rows: [
        ["Buyer", "Who it is for, who it is not for, price band"],
        ["Offer", "What they get, price, how they pay, the day after a yes"],
        ["Setter call", "Open, qualify, book, confirm, disqualify"],
        ["Closer call", "Frame, discovery, offer, ask, next step"],
        ["Objections", "Price, partner, timing, think about it: question then line"],
        ["KPIs", "Show rate, no show rate, close rate, cash per call, with formulas"],
        ["SOPs", "Confirm, rebook, end of day, note approval, cash submission"],
      ],
      csv: "/guides/sales-playbook-outline.csv",
    },
    handles: `${brand} is where this outline lives after you fill it in: Closer and Setter Playbooks, pointed at by Closer Onboarding, checked by QC and AI Call Coaching. The script guide is the call section. The onboarding guide is the ramp that requires it.`,
    handleLinks: [
      { href: "/products/closer-playbook", label: "Closer and Setter Playbooks" },
      { href: "/high-ticket-sales-script-setter-and-closer", label: "Setter and closer scripts" },
      { href: "/closer-onboarding-30-60-90-day-plan", label: "30 60 90 day onboarding" },
      { href: "/products/qc-dashboard", label: "QC" },
      { href: "/sales-call-scorecard-template", label: "Call scorecard" },
    ],
    proof: publishedProof,
    related: cluster.filter(item => item.href !== "/sales-playbook-template"),
    faqs: [
      { q: "What is a sales playbook?", a: "The one link for how this team sells: buyer, offer, setter call, closer call, objections, KPIs with formulas, and the SOPs around the call. If people still ask Slack for the price, the playbook is not done." },
      { q: "What is a sales SOP versus a script?", a: "A script is the shape of the conversation. An SOP is the surrounding work: confirm, rebook, submit end of day, approve the note, submit cash. Both belong in the playbook. They are not the same page." },
      { q: "How does this tie to onboarding?", a: "The 30 60 90 plan tests and role plays what the playbook says. New closers should not learn a second version from a manager who has a private doc." },
      { q: "How does QC use it?", a: "QC and the call scorecard check the behaviors the playbook defined: prep, the call, the note. A score without a playbook is a preference. A playbook without a score is a hope." },
      { q: "Will you write the playbook?", a: "We set up the playbook part and show your team how to move the pages in. The buyer, the offer, and the words are yours. We do not manage the reps who use them." },
    ],
  },
]
