import type { Guide } from "@/lib/guide-types"
import { publishedProof } from "@/lib/proof"

const brand = "The Sales Team OS by Systemized Sales AI"

export const guidesA: Guide[] = [
  {
    slug: "sales-team-operating-system",
    path: "/sales-team-operating-system",
    nav: "Sales team operating system",
    title: "What a Sales Team Operating System Is and the 10 Parts We Install",
    h1: "What a Sales Team Operating System Is and the 10 Parts We Install",
    description: "A sales team operating system is the one system a high ticket team uses to hire, ramp, track, and pay reps it already has. Here is what we install, who it is for, and who it is not for.",
    answer: [
      "A sales team operating system is the one place a high ticket team runs hiring, onboarding, call quality, lead speed, numbers, and pay. It is not a folder of disconnected tools, and it is not a team we run for you.",
      "The Sales Team OS by Systemized Sales AI is that system. We install it for booked call teams that already have reps. We show the owner, the manager, and the reps how to use it, and we support them in Slack. They do the selling.",
    ],
    sections: [
      {
        h2: "Who installs a Sales Team OS",
        paragraphs: [
          "Systemized Sales AI installs a 10 part sales system for high ticket, booked call sales teams that already have reps. We train the team on how to use it and support them in Slack. We do not hire or manage reps.",
          "The buyer is usually a coaching, education, or service company that sells on a booked call. Path A is a founder who already manages one to a few reps and has no dedicated sales manager. Path B is a team that already has a manager. If you have no reps yet, this is too early. Hire the first person, then install the system so that person is not trained only from your head.",
          "Other companies use nearby names. ProfitSignal, Equip Sales, and SalesTeamOS are different businesses. This page is about The Sales Team OS by Systemized Sales AI: the system we install for a team that already has reps.",
        ],
      },
      {
        h2: "Who it is not for",
        paragraphs: [
          "It is not for a company that wants us to recruit, ramp, coach, or manage closers. That is a different offer. It is not for a retail or inbound call center that does not book sales calls. It is not a promise that your close rate will match a named client.",
          "It is also not a single dashboard you log into and hope the team changes. The install includes the parts below, the playbooks you already use, and time with your people so they know where to look each day.",
        ],
      },
      {
        h2: "The 10 parts",
        paragraphs: [
          "RevPhlo is the numbers. It writes a note from the call that the rep approves in Slack, flags an edit that makes a call look better than it was, and counts a close only when a payment matches. Show rate, close rate, and cash per call are certified there.",
          "The Hiring App is a public page where candidates apply and one place where your team compares them. Your team still decides who to hire. Speed to Lead shows who called a new lead and when. It works with GoHighLevel.",
          "AI Call Coaching scores calls so a manager knows what to coach. Manager OS is the place a manager, or a founder acting as the manager, runs the day from those numbers. Phone and DM setter trackers are the end of day record for setters.",
          "The QC view checks prep and pipeline hygiene so quality does not slide in silence. Closer and setter playbooks hold the script, the objections, and the Loom walkthroughs in one link. Closer onboarding is the day by day ramp with checks, so a new rep is not trained from a different story each time. The commission tracker lets reps submit cash collected and lets a manager approve pay without a private spreadsheet.",
        ],
      },
      {
        h2: "What we do on the install",
        paragraphs: [
          "We connect the tools you already use, load the playbooks and the pay plan, and get the team into its own workspace. Then we show them how to read the daily brief, approve notes, and run the week. After that, fixes and questions stay in a shared Slack channel.",
          "Your reps still take the calls. Your manager, or you, still decides who to coach and who to hire. The system makes those decisions visible. It does not make them for you.",
        ],
      },
    ],
    checklist: {
      title: "A simple check before you install",
      items: [
        "You already have at least one rep taking sales calls.",
        "You sell on a booked call, not only through a checkout page.",
        "You can name who manages those reps today, even if that person is you.",
        "You want one set of numbers, not another login nobody opens.",
        "You accept that your team keeps doing the selling.",
      ],
    },
    handles: `${brand} is the install described above. Each part has its own page. Start with the numbers, then the part that is actually leaking.`,
    handleLinks: [
      { href: "/products/revphlo", label: "RevPhlo" },
      { href: "/products/hiring-app", label: "Hiring App" },
      { href: "/products/speed-to-lead", label: "Speed to Lead" },
      { href: "/products/ai-call-coaching", label: "AI Call Coaching" },
      { href: "/products/manager-os", label: "Manager OS" },
      { href: "/products/setter-eod", label: "Setter trackers" },
      { href: "/products/qc-dashboard", label: "QC" },
      { href: "/products/closer-playbook", label: "Playbooks" },
      { href: "/products/rep-onboarding", label: "Closer onboarding" },
      { href: "/products/commission-tracker", label: "Commission tracker" },
    ],
    proof: publishedProof,
    faqs: [
      { q: "Is a sales operating system the same as a CRM?", a: "No. A CRM stores contacts and pipeline stages. A sales team operating system is how the team hires, ramps, checks calls, watches speed to lead, trusts the numbers, and pays people. The CRM can stay. The system sits on top of the work the team already does." },
      { q: "Do you provide the closers?", a: "No. We do not hire, ramp, coach, or manage reps. We install the system and show your team how to use it. Your people do the selling." },
      { q: "How many parts do we have to turn on?", a: "There are 10 parts. A founder led team usually starts with numbers, playbooks, call scoring, speed to lead, and pay. A team that already has a manager turns on more of the daily rhythm. We fit the install to the business." },
      { q: "How long until it is live?", a: "Most teams are live within 30 days of kickoff, once we have access to the tools you already use. The clock is the install, not a promise about revenue." },
      { q: "What does it cost?", a: "One setup fee and one monthly fee, with RevPhlo included. We give you the price on the call, based on team size and tools. We do not publish a rate card on this page." },
    ],
  },
]
