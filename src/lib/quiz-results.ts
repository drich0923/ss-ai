import { quizQuestions, quizSpec, type Answers, type DiagnosticResult, type QuizQuestion } from "@/lib/teamos-quiz"

export const QUIZ_RESULTS_WEBHOOK = "https://systemizedsales.app.n8n.cloud/webhook/quiz-results"

export type QuizResultsAnswer = {
  question_id: string
  question: string
  answer: string | number
}

export type QuizResultsPayload = {
  session_id: string
  quiz: "teamos"
  grade: string
  score: number
  archetype: { id: string; name: string }
  area_scores: { id: string; score: number }[]
  top_leaks: { id: string; title: string; why: string; score: number }[]
  answers: QuizResultsAnswer[]
  page_url: string
  submitted_at: string
}

export function createSessionId(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return crypto.randomUUID()
  }
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, char => {
    const random = Math.floor(Math.random() * 16)
    const value = char === "x" ? random : (random & 0x3) | 0x8
    return value.toString(16)
  })
}

export function answerFor(question: QuizQuestion, answers: Answers): string | number {
  if (question.type === "choice") {
    const picked = answers.choice[question.id]
    const label = picked === undefined ? undefined : question.options?.[picked]?.label
    return label || "I don't know"
  }
  if (question.type === "number") {
    const value = answers.nums[question.id]
    if (value === undefined || value === null) return "I don't know"
    return value
  }
  const text = answers.text[question.id]?.trim()
  return text ? text : "I don't know"
}

export function buildQuizResultsPayload(input: {
  sessionId: string
  result: DiagnosticResult
  answers: Answers
  pageUrl: string
  submittedAt: string
}): QuizResultsPayload {
  const { sessionId, result, answers, pageUrl, submittedAt } = input
  return {
    session_id: sessionId,
    quiz: "teamos",
    grade: result.grade,
    score: result.overall,
    archetype: { id: result.archetypeId, name: result.archetypeName },
    area_scores: result.areas.map(area => ({ id: area.id, score: area.score })),
    top_leaks: result.leaks.map(leak => ({ id: leak.id, title: leak.title, why: leak.why, score: leak.score })),
    answers: quizQuestions.map(question => ({
      question_id: question.id,
      question: question.text,
      answer: answerFor(question, answers),
    })),
    page_url: pageUrl,
    submitted_at: submittedAt,
  }
}

export function bookingCalendarSrc(sessionId: string, grade: string, archetypeId: string): string {
  const url = new URL(quizSpec.cta.url)
  url.searchParams.set("utm_source", "quiz")
  url.searchParams.set("utm_medium", "quiz-results")
  url.searchParams.set("utm_campaign", "teamos")
  url.searchParams.set("utm_term", `${grade}-${archetypeId}`)
  url.searchParams.set("utm_content", sessionId)
  url.searchParams.set("quiz_session_id", sessionId)
  return url.toString()
}

function sendQuizBeacon(body: string): boolean {
  if (typeof navigator === "undefined" || typeof navigator.sendBeacon !== "function") return false
  try {
    return navigator.sendBeacon(QUIZ_RESULTS_WEBHOOK, new Blob([body], { type: "text/plain" }))
  } catch (error) {
    console.error("quiz results beacon failed", error)
    return false
  }
}

/**
 * Fire-and-forget. fetch is the path that runs in the browser. sendBeacon is only
 * used when fetch itself is missing, because a rejected simple POST was already
 * handed to the network and a second beacon would store the result twice.
 */
export function submitQuizResults(payload: QuizResultsPayload): void {
  const body = JSON.stringify(payload)
  if (typeof fetch !== "function") {
    if (!sendQuizBeacon(body)) console.error("quiz results submit failed")
    return
  }
  try {
    fetch(QUIZ_RESULTS_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body,
      keepalive: true,
    })
      .then(response => {
        if (!response.ok) console.error("quiz results submit failed", response.status)
      })
      .catch(error => {
        console.error("quiz results submit failed", error)
      })
  } catch (error) {
    if (!sendQuizBeacon(body)) console.error("quiz results submit failed", error)
  }
}
