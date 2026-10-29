import assert from "node:assert/strict"
import test from "node:test"
import { bookingCalendarSrc, buildQuizResultsPayload } from "./quiz-results"
import { scoreDiagnostic, type Answers } from "./teamos-quiz"

const sample: Answers = {
  choice: {
    cd_who: 0,
    cd_eod: 1,
    hr_source: 1,
    hr_vet: 2,
    rp_first: 2,
    rp_day1: 1,
    sl_speed: 2,
    qc_share: 2,
    qc_feedback: 1,
    tr_rep: 2,
    tr_split: 1,
    cp_calc: 2,
    cp_basis: 1,
    dt_agree: 2,
    dt_log: 2,
    pb_script: 1,
  },
  nums: {
    n_booked: 300,
    n_show: 52,
    n_close: 18,
    n_cash: 5000,
    n_closers: 4,
    n_setters: 2,
  },
  text: { open_other: "Handoffs slip on Mondays." },
}

const submittedAt = "2026-10-29T02:00:00.000Z"
const pageUrl = "https://www.systemizedsales.ai/quiz?test=1"

test("payload builder maps the score, leaks, and readable answers", () => {
  const result = scoreDiagnostic(sample)
  const payload = buildQuizResultsPayload({
    sessionId: "sess-1",
    result,
    answers: sample,
    pageUrl,
    submittedAt,
  })

  assert.equal(payload.session_id, "sess-1")
  assert.equal(payload.quiz, "teamos")
  assert.equal(payload.grade, result.grade)
  assert.equal(payload.score, result.overall)
  assert.deepEqual(payload.archetype, { id: result.archetypeId, name: result.archetypeName })
  assert.deepEqual(
    payload.area_scores,
    result.areas.map(area => ({ id: area.id, score: area.score })),
  )
  assert.deepEqual(
    payload.top_leaks,
    result.leaks.map(leak => ({ id: leak.id, title: leak.title, why: leak.why, score: leak.score })),
  )
  assert.equal(payload.page_url, pageUrl)
  assert.equal(payload.submitted_at, submittedAt)
  assert.equal(payload.grade, "D")
  assert.equal(payload.score, 40)
  assert.equal(payload.archetype.id, "a2")
  assert.deepEqual(
    payload.top_leaks.map(leak => leak.id),
    ["comp", "data", "hiring"],
  )

  const byId = Object.fromEntries(payload.answers.map(item => [item.question_id, item]))
  assert.equal(byId.cd_who.question, "Who manages the sales team day to day?")
  assert.equal(byId.cd_who.answer, "A sales manager")
  assert.equal(byId.n_booked.answer, 300)
  assert.equal(byId.n_cash.answer, 5000)
  assert.equal(byId.open_other.answer, "Handoffs slip on Mondays.")
  assert.equal(payload.answers.some(item => typeof item.answer === "string" && /\$|price/i.test(item.answer)), false)
})

test("skipped numbers and a blank note are I don't know", () => {
  const answers: Answers = {
    ...sample,
    nums: { ...sample.nums, n_show: null },
    text: { open_other: "  " },
  }
  const payload = buildQuizResultsPayload({
    sessionId: "sess-2",
    result: scoreDiagnostic(answers),
    answers,
    pageUrl,
    submittedAt,
  })
  const byId = Object.fromEntries(payload.answers.map(item => [item.question_id, item]))
  assert.equal(byId.n_show.answer, "I don't know")
  assert.equal(byId.open_other.answer, "I don't know")
  assert.equal(byId.n_close.answer, 18)
})

test("booking url carries the session, grade, and archetype", () => {
  const src = bookingCalendarSrc("sess-1", "D", "a2")
  const url = new URL(src)
  assert.equal(url.origin + url.pathname, "https://link.automatedrev.com/widget/bookings/ss-intro-call1")
  assert.equal(url.searchParams.get("utm_source"), "quiz")
  assert.equal(url.searchParams.get("utm_medium"), "quiz-results")
  assert.equal(url.searchParams.get("utm_campaign"), "teamos")
  assert.equal(url.searchParams.get("utm_term"), "D-a2")
  assert.equal(url.searchParams.get("utm_content"), "sess-1")
  assert.equal(url.searchParams.get("quiz_session_id"), "sess-1")
})
