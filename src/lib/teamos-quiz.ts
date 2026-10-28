import quizMap from "@/data/teamos-quiz-map.json"

export type ChoiceOption = {
  label: string
  points_to: string[]
}

export type QuizQuestion = {
  id: string
  type: "choice" | "open"
  text: string
  options?: ChoiceOption[]
}

export type LandingPage = {
  headline: string
  pain_points: string[]
  cta: string
  offer: {
    what: string
    after_submit: string
    submit_line: string
  }
}

type QuizMap = {
  archetypes: { id: string; name: string; description: string }[]
  shared_questions: QuizQuestion[]
  branches: Record<string, QuizQuestion[]>
  landing_pages: Record<string, LandingPage>
  confidence_threshold: number
}

const map = quizMap as QuizMap

/** Reserved for a future classifier. The deterministic tally does not apply it. */
export const confidenceThreshold = map.confidence_threshold

export const sharedQuestions = map.shared_questions

export const longestQuestionCount =
  map.shared_questions.length +
  Math.max(0, ...Object.values(map.branches).map(branch => branch.length))

const fallbackBookingUrl = "https://link.automatedrev.com/widget/bookings/ss-intro-call1"

export function questionById(id: string): QuizQuestion | null {
  const shared = map.shared_questions.find(question => question.id === id)
  if (shared) return shared
  for (const branch of Object.values(map.branches)) {
    const found = branch.find(question => question.id === id)
    if (found) return found
  }
  return null
}

export function isBranchQuestion(id: string): boolean {
  return Object.values(map.branches).some(branch => branch.some(question => question.id === id))
}

export function landingPage(id: string): LandingPage {
  return map.landing_pages[id] ?? map.landing_pages.general
}

export type QuizResponse = {
  questionId: string
  question: string
  answer: string
}

export type BuyerClassification = {
  /** Archetype id, or "general" when the tally ties or has no points. */
  archetypeId: string
  confidence: number
  scores: Record<string, number>
}

export type QuizScreen =
  | { kind: "question"; id: string }
  | { kind: "landing"; id: string }

function emptyScores(): Record<string, number> {
  const scores: Record<string, number> = {}
  for (const archetype of map.archetypes) scores[archetype.id] = 0
  return scores
}

function tally(responses: readonly QuizResponse[]): Record<string, number> {
  const scores = emptyScores()
  for (const response of responses) {
    const question = questionById(response.questionId)
    if (!question || question.type !== "choice" || !question.options) continue
    const option = question.options.find(item => item.label === response.answer)
    if (!option) continue
    for (const id of option.points_to) {
      if (id in scores) scores[id] += 1
    }
  }
  return scores
}

function fromScores(scores: Record<string, number>): BuyerClassification {
  const ranked = Object.entries(scores).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
  const total = ranked.reduce((sum, [, points]) => sum + points, 0)
  const topScore = ranked[0]?.[1] ?? 0
  const leaders = ranked.filter(([, points]) => points === topScore && points > 0)
  if (total === 0 || leaders.length !== 1) {
    return { archetypeId: "general", confidence: 0, scores }
  }
  return {
    archetypeId: leaders[0][0],
    confidence: topScore / total,
    scores,
  }
}

/**
 * Routing seam. Called after the shared questions to pick a branch, and after
 * a branch to pick the landing page. Today it tallies `points_to` on choice
 * answers. A tie, or no points at all, returns "general".
 *
 * Replace this function with an AI classifier later. Keep the return shape.
 * A classifier should return "general" when it fails, when the top
 * probabilities tie, or when the top probability is below `confidenceThreshold`.
 * The tally does not apply that threshold: the highest total wins unless it is
 * tied or zero. Open answers are on each response for that future call; the
 * tally ignores them.
 */
export function classifyBuyer(responses: readonly QuizResponse[]): BuyerClassification {
  return fromScores(tally(responses))
}

export function responsesFor(questionIds: readonly string[], answers: Record<string, string>): QuizResponse[] {
  return questionIds.map(id => {
    const question = questionById(id)
    return {
      questionId: id,
      question: question?.text ?? "",
      answer: answers[id] ?? "",
    }
  })
}

export function nextQuizScreen(currentQuestionId: string, answers: Record<string, string>): QuizScreen {
  const sharedIndex = map.shared_questions.findIndex(question => question.id === currentQuestionId)
  if (sharedIndex >= 0) {
    if (sharedIndex < map.shared_questions.length - 1) {
      return { kind: "question", id: map.shared_questions[sharedIndex + 1].id }
    }
    const decision = classifyBuyer(responsesFor(map.shared_questions.map(question => question.id), answers))
    if (decision.archetypeId === "general") return { kind: "landing", id: "general" }
    const branch = map.branches[decision.archetypeId]
    if (!branch?.length) return { kind: "landing", id: decision.archetypeId }
    return { kind: "question", id: branch[0].id }
  }

  for (const [archetypeId, branch] of Object.entries(map.branches)) {
    const branchIndex = branch.findIndex(question => question.id === currentQuestionId)
    if (branchIndex < 0) continue
    if (branchIndex < branch.length - 1) {
      return { kind: "question", id: branch[branchIndex + 1].id }
    }
    const ids = [...map.shared_questions.map(question => question.id), ...branch.map(question => question.id)]
    const decision = classifyBuyer(responsesFor(ids, answers))
    return { kind: "landing", id: decision.archetypeId }
  }

  return { kind: "landing", id: "general" }
}

/**
 * GoHighLevel booking widgets read first_name, last_name, full_name, name, and
 * email from the page query string into the contact form. Confirmed in this
 * calendar widget's form-fill (`eg` keys include those fields).
 */
export function bookingHref(afterSubmit: string, name: string, email: string): string {
  const base = /^https?:\/\//.test(afterSubmit) ? afterSubmit : fallbackBookingUrl
  const url = new URL(base)
  const cleaned = name.trim().replace(/\s+/g, " ")
  const [first, ...rest] = cleaned.split(" ")
  if (first) url.searchParams.set("first_name", first)
  const last = rest.join(" ").trim()
  if (last) url.searchParams.set("last_name", last)
  if (cleaned) {
    url.searchParams.set("full_name", cleaned)
    url.searchParams.set("name", cleaned)
  }
  const trimmedEmail = email.trim()
  if (trimmedEmail) url.searchParams.set("email", trimmedEmail)
  return url.toString()
}

export function validateName(value: string): string | null {
  const name = value.trim().replace(/\s+/g, " ")
  if (name.length < 2) return "Enter your name."
  return null
}

export function validateEmail(value: string): string | null {
  const email = value.trim()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return "Enter a valid email."
  return null
}

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void
  fbq?: (...args: unknown[]) => void
  va?: (...args: unknown[]) => void
  plausible?: (event: string, options?: { props?: Record<string, string> }) => void
  dataLayer?: unknown[]
}

/** Fires only if a tracker is already on the page. Does not load a new one. */
export function trackQuizEvent(
  name: "quiz_start" | "quiz_complete" | "booking_click",
  detail?: { archetype?: string },
) {
  if (typeof window === "undefined") return
  const payload: Record<string, string> = {}
  if (detail?.archetype) payload.archetype = detail.archetype
  const host = window as AnalyticsWindow
  try {
    host.gtag?.("event", name, payload)
    host.fbq?.("trackCustom", name, payload)
    host.va?.("event", { name, ...payload })
    if (Object.keys(payload).length) host.plausible?.(name, { props: payload })
    else host.plausible?.(name)
    host.dataLayer?.push({ event: name, ...payload })
  } catch {
    // Tracking must not block the quiz.
  }
}
