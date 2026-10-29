import assert from "node:assert/strict"
import test from "node:test"
import { QUIZ_DRAFT_KEY, loadQuizDraft, parseQuizDraft, saveQuizDraft, type QuizStorage } from "./quiz-session"

function memoryStorage(): QuizStorage & { data: Map<string, string> } {
  const data = new Map<string, string>()
  return {
    data,
    getItem: key => data.get(key) ?? null,
    setItem: (key, value) => {
      data.set(key, value)
    },
    removeItem: key => {
      data.delete(key)
    },
  }
}

test("a submitted draft reopens on results and keeps contact", () => {
  const storage = memoryStorage()
  saveQuizDraft(storage, {
    v: 1,
    stage: "contact",
    index: 3,
    answers: { choice: { cd_who: 0 }, nums: { n_show: null }, text: {} },
    contact: { first_name: "Ada", last_name: "Lovelace", email: "ada@example.com", phone: "4155550100" },
    sessionId: "sess-1",
    posted: true,
  })
  const draft = loadQuizDraft(storage)
  assert.equal(draft?.stage, "results")
  assert.equal(draft?.posted, true)
  assert.equal(draft?.sessionId, "sess-1")
  assert.equal(draft?.contact.email, "ada@example.com")
  assert.equal(draft?.answers.choice.cd_who, 0)
  assert.equal(draft?.answers.nums.n_show, null)
})

test("results without a successful submit return to the contact step", () => {
  const draft = parseQuizDraft(
    JSON.stringify({
      v: 1,
      stage: "results",
      index: 22,
      answers: { choice: {}, nums: {}, text: {} },
      contact: { first_name: "Ada", last_name: "Lovelace", email: "ada@example.com", phone: "4155550100" },
      sessionId: null,
      posted: false,
    }),
  )
  assert.equal(draft?.stage, "contact")
  assert.equal(draft?.posted, false)
})

test("corrupt drafts are ignored", () => {
  assert.equal(parseQuizDraft("{"), null)
  assert.equal(parseQuizDraft(JSON.stringify({ v: 2, stage: "results" })), null)
  assert.equal(loadQuizDraft(null), null)
  const storage = memoryStorage()
  storage.data.set(QUIZ_DRAFT_KEY, "nope")
  assert.equal(loadQuizDraft(storage), null)
})
