import { quizQuestions, type Answers } from "@/lib/teamos-quiz"
import { emptyQuizContact, type QuizContact } from "@/lib/quiz-results"

export const QUIZ_DRAFT_KEY = "teamos-quiz-draft"

export type QuizStage = "intro" | "quiz" | "contact" | "results"

export type QuizDraft = {
  v: 1
  stage: QuizStage
  index: number
  answers: Answers
  contact: QuizContact
  sessionId: string | null
  posted: boolean
}

export type QuizStorage = {
  getItem(key: string): string | null
  setItem(key: string, value: string): void
  removeItem(key: string): void
}

const stages = new Set<QuizStage>(["intro", "quiz", "contact", "results"])

function sanitizeAnswers(raw: unknown): Answers {
  const value = raw && typeof raw === "object" ? (raw as Partial<Answers>) : {}
  const choice: Record<string, number> = {}
  const nums: Record<string, number | null> = {}
  const text: Record<string, string> = {}
  const rawChoice = value.choice && typeof value.choice === "object" ? value.choice : {}
  const rawNums = value.nums && typeof value.nums === "object" ? value.nums : {}
  const rawText = value.text && typeof value.text === "object" ? value.text : {}

  for (const question of quizQuestions) {
    if (question.type === "choice" && question.options) {
      const picked = (rawChoice as Record<string, unknown>)[question.id]
      if (typeof picked === "number" && Number.isInteger(picked) && picked >= 0 && picked < question.options.length) {
        choice[question.id] = picked
      }
    }
    if (question.type === "number") {
      const picked = (rawNums as Record<string, unknown>)[question.id]
      if (picked === null || (typeof picked === "number" && Number.isFinite(picked))) nums[question.id] = picked
    }
    if (question.type === "open") {
      const picked = (rawText as Record<string, unknown>)[question.id]
      if (typeof picked === "string") text[question.id] = picked
    }
  }

  return { choice, nums, text }
}

function sanitizeContact(raw: unknown): QuizContact {
  const value = raw && typeof raw === "object" ? (raw as Partial<QuizContact>) : {}
  const contact = emptyQuizContact()
  for (const key of ["first_name", "last_name", "email", "phone"] as const) {
    if (typeof value[key] === "string") contact[key] = value[key]
  }
  return contact
}

export function parseQuizDraft(raw: string | null): QuizDraft | null {
  if (!raw) return null
  try {
    const data = JSON.parse(raw) as Partial<QuizDraft>
    if (data.v !== 1 || !data.stage || !stages.has(data.stage)) return null
    if (typeof data.index !== "number" || !Number.isFinite(data.index)) return null
    const maxIndex = Math.max(quizQuestions.length - 1, 0)
    const posted = data.posted === true && typeof data.sessionId === "string" && data.sessionId.length > 0
    let stage = data.stage
    if (posted) stage = "results"
    else if (stage === "results") stage = "contact"
    return {
      v: 1,
      stage,
      index: Math.min(Math.max(0, Math.floor(data.index)), maxIndex),
      answers: sanitizeAnswers(data.answers),
      contact: sanitizeContact(data.contact),
      sessionId: typeof data.sessionId === "string" && data.sessionId ? data.sessionId : null,
      posted,
    }
  } catch {
    return null
  }
}

export function loadQuizDraft(storage: Pick<QuizStorage, "getItem"> | null): QuizDraft | null {
  if (!storage) return null
  try {
    return parseQuizDraft(storage.getItem(QUIZ_DRAFT_KEY))
  } catch (error) {
    console.error("quiz draft load failed", error)
    return null
  }
}

export function saveQuizDraft(storage: Pick<QuizStorage, "setItem"> | null, draft: QuizDraft): void {
  if (!storage) return
  try {
    storage.setItem(QUIZ_DRAFT_KEY, JSON.stringify(draft))
  } catch (error) {
    console.error("quiz draft save failed", error)
  }
}

export function clearQuizDraft(storage: Pick<QuizStorage, "removeItem"> | null): void {
  if (!storage) return
  try {
    storage.removeItem(QUIZ_DRAFT_KEY)
  } catch (error) {
    console.error("quiz draft clear failed", error)
  }
}
