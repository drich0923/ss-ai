import quizMap from "@/data/teamos-quiz-v2.json"

export type ChoiceOption = {
  label: string
  score: number
  points: Record<string, number>
}

export type QuizQuestion = {
  id: string
  category: string | null
  type: "choice" | "number" | "open"
  text: string
  options?: ChoiceOption[]
  quick_win?: string
  unit?: "count" | "pct" | "money"
  var?: string
  allow_unknown?: boolean
  known_scores_category?: string | null
  min?: number
  max?: number
  score_bands?: "show_rate_bands" | "close_rate_bands"
  help?: string
  optional?: boolean
}

export type QuizCategory = {
  id: string
  name: string
  part: string
  good: string
  leak: {
    title: string
    looks_like: string
    looks_like_numbers?: string
    why: string
    fixes: string[]
    cta_line: string
  }
}

type GradeBand = { min: number; grade: string; line: string }
type ScoreBand = { min: number; score: number }
type MathRow = { id: string; line: string | null; needs: string[] }

type QuizSpec = {
  intro: { eyebrow: string; headline: string; sub: string; start: string }
  numbers_intro: string
  config: {
    selling_days_per_month: number
    followup_illustration_rate_pct: number
    leak_threshold: number
    show_rate_bands: ScoreBand[]
    close_rate_bands: ScoreBand[]
    max_quick_wins: number
  }
  categories: QuizCategory[]
  questions: QuizQuestion[]
  archetypes: { id: string; name: string; means: string }[]
  archetype_tiebreak: string[]
  math: MathRow[]
  grade_bands: GradeBand[]
  results_copy: {
    heading: string
    leaks_heading: string
    math_heading: string
    math_note: string
    quick_wins_heading: string
    good_heading: string
    no_leaks: string
    no_math: string
  }
  cta: {
    heading: string
    lead_in: string
    url: string
    button: string
    submit_line: string
  }
}

const spec = quizMap as QuizSpec

export const quizSpec = spec
export const quizQuestions = spec.questions

export type Answers = {
  choice: Record<string, number>
  nums: Record<string, number | null>
  text: Record<string, string>
}

export type AreaScore = { id: string; name: string; part: string; score: number }
export type LeakResult = {
  id: string
  name: string
  part: string
  title: string
  score: number
  severity: "Severe" | "Major" | "Moderate"
  looks: string
  why: string
  fixes: string[]
  cta: string
}

export type DiagnosticResult = {
  areas: AreaScore[]
  overall: number
  grade: string
  gradeLine: string
  archetypeId: string
  archetypeName: string
  archetypeMeans: string
  leaks: LeakResult[]
  lowestName: string
  lowestCta: string
  math: string[]
  quickWins: string[]
  points: Record<string, number>
}

/** Round half up for positive numbers. Same as Math.round, and as the reference scorer. */
export function roundHalfUp(value: number): number {
  return Math.round(value)
}

function fill(template: string, tokens: Record<string, string>): string | null {
  let missing = false
  const out = template.replace(/\{(\w+)\}/g, (_match, key: string) => {
    if (tokens[key] === undefined) {
      missing = true
      return ""
    }
    return tokens[key]
  })
  return missing ? null : out
}

function countLabel(value: number): string {
  return Math.round(value).toLocaleString("en-US")
}

function oneDecimal(value: number): string {
  return String(Number(value.toFixed(1)))
}

function moneyLabel(value: number): string {
  const rounded = value >= 1000 ? Math.round(value / 100) * 100 : Math.round(value)
  return rounded.toLocaleString("en-US")
}

function bandScore(question: QuizQuestion, value: number): number {
  if (!question.score_bands) return 0
  const bands = spec.config[question.score_bands]
  return bands.find(band => value >= band.min)?.score ?? 0
}

function severity(score: number): LeakResult["severity"] {
  if (score <= 39) return "Severe"
  if (score <= 54) return "Major"
  return "Moderate"
}

/**
 * Deterministic Team OS diagnostic. Mirrors engine.py: category means, half-up
 * rounding, tiebreak order, and leaks under the threshold.
 */
export function scoreDiagnostic(answers: Answers): DiagnosticResult {
  const items: Record<string, number[]> = {}
  for (const category of spec.categories) items[category.id] = []
  const points: Record<string, number> = {}
  for (const archetype of spec.archetypes) points[archetype.id] = 0
  const tokens: Record<string, string> = {}
  let unknown = 0

  for (const question of spec.questions) {
    if (question.type === "choice" && question.options && answers.choice[question.id] !== undefined) {
      const option = question.options[answers.choice[question.id]]
      if (question.category) items[question.category].push(option.score)
      tokens[question.id] = option.label
      for (const [id, value] of Object.entries(option.points)) {
        if (id in points) points[id] += value
      }
    }
    if (question.type === "number" && answers.nums[question.id] !== undefined) {
      const value = answers.nums[question.id]
      if (question.known_scores_category) {
        items[question.known_scores_category].push(value === null ? 0 : 4)
        if (value === null) unknown += 1
      }
      if (value !== null && question.score_bands && question.category) {
        items[question.category].push(bandScore(question, value))
      }
    }
  }
  tokens.unknown_count = String(unknown)

  const areas: AreaScore[] = spec.categories
    .filter(category => items[category.id].length > 0)
    .map(category => {
      const scores = items[category.id]
      const mean = scores.reduce((sum, score) => sum + score, 0) / scores.length
      return {
        id: category.id,
        name: category.name,
        part: category.part,
        score: roundHalfUp((mean / 4) * 100),
      }
    })

  const overall = areas.length
    ? roundHalfUp(areas.reduce((sum, area) => sum + area.score, 0) / areas.length)
    : 0
  const grade = spec.grade_bands.find(band => overall >= band.min) ?? spec.grade_bands[spec.grade_bands.length - 1]

  let archetypeId = spec.archetype_tiebreak[0]
  for (const id of spec.archetype_tiebreak) {
    if (points[id] > points[archetypeId]) archetypeId = id
  }
  const archetype = spec.archetypes.find(item => item.id === archetypeId) ?? spec.archetypes[0]

  const numberValue = (id: string): number | null => {
    const value = answers.nums[id]
    return value === undefined || value === null ? null : value
  }
  const booked = numberValue("n_booked")
  const showPct = numberValue("n_show")
  const closePct = numberValue("n_close")
  const cashPerSale = numberValue("n_cash")
  const closers = numberValue("n_closers")
  const setters = numberValue("n_setters")

  if (booked !== null) tokens.booked = countLabel(booked)
  if (showPct !== null) tokens.show_pct = oneDecimal(showPct)
  if (closePct !== null) tokens.close_pct = oneDecimal(closePct)
  if (cashPerSale !== null) tokens.cash_per_sale = moneyLabel(cashPerSale)
  if (closers !== null) tokens.closers = countLabel(closers)
  if (setters !== null) tokens.setters = countLabel(setters)

  let shows: number | null = null
  if (booked !== null && showPct !== null) {
    shows = (booked * showPct) / 100
    tokens.shows = countLabel(shows)
    tokens.no_shows = countLabel(booked - shows)
    if (closePct !== null) {
      const closes = (shows * closePct) / 100
      tokens.closes = oneDecimal(closes)
      tokens.unclosed = countLabel(shows - closes)
      if (cashPerSale !== null) {
        const cash = closes * cashPerSale
        tokens.cash = moneyLabel(cash)
        if (booked > 0) tokens.cash_per_booked = moneyLabel(cash / booked)
        const followUp =
          ((shows - closes + (booked - shows)) * spec.config.followup_illustration_rate_pct) /
          100 *
          (closePct / 100) *
          cashPerSale
        tokens.fu_value = moneyLabel(followUp)
      }
    }
  }
  if (booked !== null && closePct !== null && cashPerSale !== null) {
    tokens.show5 = moneyLabel(booked * 0.05 * (closePct / 100) * cashPerSale)
  }
  if (shows !== null && cashPerSale !== null) {
    tokens.close5 = moneyLabel(shows * 0.05 * cashPerSale)
  }
  if (shows !== null && closers !== null && closers > 0) {
    tokens.shows_per_closer_day = oneDecimal(shows / closers / spec.config.selling_days_per_month)
  }
  if (setters !== null && closers !== null && closers > 0) {
    tokens.setters_per_closer = oneDecimal(setters / closers)
  }

  const math = spec.math.flatMap(row => {
    if (!row.line) return []
    const line = fill(row.line, tokens)
    return line ? [line] : []
  })

  const categoryOrder = spec.categories.map(category => category.id)
  const leaks: LeakResult[] = areas
    .filter(area => area.score < spec.config.leak_threshold)
    .sort((a, b) => a.score - b.score || categoryOrder.indexOf(a.id) - categoryOrder.indexOf(b.id))
    .slice(0, 3)
    .map(area => {
      const category = spec.categories.find(item => item.id === area.id)!
      const numbered = category.leak.looks_like_numbers ? fill(category.leak.looks_like_numbers, tokens) : null
      const plain = fill(category.leak.looks_like, tokens)
      const looks =
        numbered ||
        plain ||
        category.leak.looks_like.replace(/\{(\w+)\}/g, (_match, key: string) => tokens[key] || "not answered")
      return {
        id: area.id,
        name: area.name,
        part: area.part,
        title: category.leak.title,
        score: area.score,
        severity: severity(area.score),
        looks,
        why: category.leak.why,
        fixes: category.leak.fixes,
        cta: category.leak.cta_line,
      }
    })

  const ranked = [...areas].sort((a, b) => a.score - b.score || categoryOrder.indexOf(a.id) - categoryOrder.indexOf(b.id))
  const lowest = spec.categories.find(category => category.id === ranked[0]?.id) ?? spec.categories[0]
  const scoreOf: Record<string, number> = {}
  for (const area of areas) scoreOf[area.id] = area.score

  const quickWins = spec.questions
    .map((question, index) => ({ question, index }))
    .filter(({ question }) => {
      if (question.type !== "choice" || !question.options || !question.quick_win) return false
      const picked = answers.choice[question.id]
      return picked !== undefined && question.options[picked].score <= 1
    })
    .sort((a, b) => (scoreOf[a.question.category || ""] ?? 101) - (scoreOf[b.question.category || ""] ?? 101) || a.index - b.index)
    .slice(0, spec.config.max_quick_wins)
    .map(({ question }) => question.quick_win as string)

  return {
    areas,
    overall,
    grade: grade.grade,
    gradeLine: grade.line,
    archetypeId,
    archetypeName: archetype.name,
    archetypeMeans: archetype.means,
    leaks,
    lowestName: lowest.name,
    lowestCta: lowest.leak.cta_line,
    math,
    quickWins,
    points,
  }
}

export function bookingHref(name: string, email: string): string {
  const url = new URL(spec.cta.url)
  const cleaned = name.trim().replace(/\s+/g, " ")
  const [first, ...rest] = cleaned.split(" ")
  if (first) url.searchParams.set("first_name", first)
  const last = rest.join(" ").trim()
  if (last) url.searchParams.set("last_name", last)
  if (cleaned) {
    url.searchParams.set("full_name", cleaned)
    url.searchParams.set("name", cleaned)
  }
  const trimmed = email.trim()
  if (trimmed) url.searchParams.set("email", trimmed)
  return url.toString()
}

export function contactReady(name: string, email: string): boolean {
  const first = name.trim().split(/\s+/)[0] || ""
  return first.length > 0 && /.+@.+\..+/.test(email.trim())
}

export function numberIsValid(draft: string, unit: QuizQuestion["unit"]): boolean {
  const value = Number.parseFloat(draft.replace(/[$,%\s]/g, ""))
  if (Number.isNaN(value) || value < 0) return false
  if (unit === "pct" && value > 100) return false
  return true
}
