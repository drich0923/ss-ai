export type QuizQuestion = {
  id: string
  question: string
  options: { label: string; value: string }[]
}

export type QuizAnswers = Record<string, string>

export type ProductScore = {
  slug: string
  name: string
  score: number
  reason: string
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "team",
    question: "What does your sales team look like?",
    options: [
      { label: "Setters and closers (separate roles)", value: "setter-closer" },
      { label: "Full-cycle reps (one person handles the full process)", value: "full-cycle" },
      { label: "Managers overseeing multiple reps or pods", value: "managers" },
      { label: "Owner/operator managing everything", value: "owner" },
    ],
  },
  {
    id: "pain",
    question: "What\u2019s causing the most drag right now?",
    options: [
      { label: "We can\u2019t tell which reps are underperforming until it\u2019s too late", value: "rep-visibility" },
      { label: "Coaching happens reactively \u2014 no consistent system", value: "coaching-gap" },
      { label: "Client accounts drift and we hear about problems late", value: "client-drift" },
      { label: "Revenue tracking is scattered across spreadsheets and tools", value: "revenue-chaos" },
    ],
  },
  {
    id: "volume",
    question: "How many sales calls does your team handle per week?",
    options: [
      { label: "Under 20", value: "low" },
      { label: "20\u201350", value: "medium" },
      { label: "50\u2013150", value: "high" },
      { label: "150+", value: "very-high" },
    ],
  },
  {
    id: "tools",
    question: "What are you using to manage sales operations today?",
    options: [
      { label: "Spreadsheets and manual reports", value: "spreadsheets" },
      { label: "CRM only (GHL, HubSpot, etc.)", value: "crm" },
      { label: "A mix of tools stitched together", value: "mixed" },
      { label: "Nothing formal \u2014 mostly Slack and memory", value: "nothing" },
    ],
  },
  {
    id: "priority",
    question: "If you could fix one thing this month, what would it be?",
    options: [
      { label: "Get visibility into every sales call without more listening time", value: "call-visibility" },
      { label: "Give managers a system for weekly coaching", value: "manager-system" },
      { label: "See which client accounts are at risk before revenue drops", value: "client-risk" },
      { label: "Track revenue ownership without spreadsheet chaos", value: "revenue-tracking" },
      { label: "Standardize how we onboard clients and reps", value: "onboarding" },
    ],
  },
]

const productMeta: Record<string, { name: string; reason: string }> = {
  "ai-call-coaching": {
    name: "AI Call Coaching",
    reason: "Score every call with AI and show managers what to coach first.",
  },
  "manager-os": {
    name: "Manager OS",
    reason: "Turn rep trends into a weekly management rhythm with clear priorities.",
  },
  "client-health": {
    name: "Client Health",
    reason: "Blend call quality, delivery, and revenue into one account risk view.",
  },
  "revenue-visibility": {
    name: "Revenue Visibility",
    reason: "Track deal ownership and cash exposure without spreadsheet fog.",
  },
  "sales-onboarding": {
    name: "Sales Onboarding Systems",
    reason: "Standardize how clients and reps go live as the team grows.",
  },
}

export function scoreQuiz(answers: QuizAnswers): ProductScore[] {
  const scores: Record<string, number> = {
    "ai-call-coaching": 0,
    "manager-os": 0,
    "client-health": 0,
    "revenue-visibility": 0,
    "sales-onboarding": 0,
  }

  // Q1: Team structure
  const team = answers.team
  if (team === "setter-closer" || team === "full-cycle") {
    scores["ai-call-coaching"] += 3
  }
  if (team === "managers") {
    scores["manager-os"] += 3
    scores["ai-call-coaching"] += 1
  }
  if (team === "owner") {
    scores["client-health"] += 3
    scores["revenue-visibility"] += 2
  }

  // Q2: Biggest pain
  const pain = answers.pain
  if (pain === "rep-visibility") {
    scores["ai-call-coaching"] += 4
  }
  if (pain === "coaching-gap") {
    scores["manager-os"] += 4
    scores["ai-call-coaching"] += 2
  }
  if (pain === "client-drift") {
    scores["client-health"] += 4
  }
  if (pain === "revenue-chaos") {
    scores["revenue-visibility"] += 4
  }

  // Q3: Call volume — amplifies call coaching
  const volume = answers.volume
  if (volume === "high") scores["ai-call-coaching"] += 2
  if (volume === "very-high") scores["ai-call-coaching"] += 3
  if (volume === "medium") scores["ai-call-coaching"] += 1

  // Q4: Current tools — minor adjustments
  const tools = answers.tools
  if (tools === "spreadsheets" || tools === "nothing") {
    scores["revenue-visibility"] += 1
    scores["ai-call-coaching"] += 1
  }
  if (tools === "mixed") {
    scores["client-health"] += 1
  }

  // Q5: Priority — strongest signal
  const priority = answers.priority
  if (priority === "call-visibility") scores["ai-call-coaching"] += 5
  if (priority === "manager-system") scores["manager-os"] += 5
  if (priority === "client-risk") scores["client-health"] += 5
  if (priority === "revenue-tracking") scores["revenue-visibility"] += 5
  if (priority === "onboarding") scores["sales-onboarding"] += 5

  // Sort by score descending
  const results: ProductScore[] = Object.entries(scores)
    .map(([slug, score]) => ({
      slug,
      name: productMeta[slug].name,
      score,
      reason: productMeta[slug].reason,
    }))
    .sort((a, b) => b.score - a.score)

  return results
}
