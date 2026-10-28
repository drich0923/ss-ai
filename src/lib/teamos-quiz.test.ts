import assert from "node:assert/strict"
import test from "node:test"
import {
  bookingHref,
  classifyBuyer,
  confidenceThreshold,
  landingPage,
  nextQuizScreen,
  type QuizScreen,
  validateEmail,
  validateName,
} from "./teamos-quiz"

const a1Answers = {
  s1: "I do",
  s2: "Reviewing calls and EOD reports",
  s3: "The night reviews.",
  a1_q1: "4 to 8",
  a1_q2: "A spreadsheet.",
  a1_q3: "They slip.",
}

const a2Answers = {
  s1: "A sales manager",
  s2: "Figuring out which numbers are right",
  s3: "One set of numbers.",
  a2_q1: "A dashboard nobody trusts",
  a2_q2: "We picked one and moved on.",
  a2_q3: "We don't.",
}

const a3Answers = {
  s1: "Nobody. We keep rehiring.",
  s2: "Hiring and training new reps",
  s3: "Onboarding.",
  a3_q1: "Most never do",
  a3_q2: "Six.",
  a3_q3: "No ramp.",
}

const tieAnswers = {
  s1: "I do",
  s2: "Hiring and training new reps",
  s3: "Both, honestly.",
}

function walk(answers: Record<string, string>): QuizScreen {
  let screen: QuizScreen = { kind: "question", id: "s1" }
  const seen: string[] = []
  for (let step = 0; step < 12 && screen.kind === "question"; step++) {
    seen.push(screen.id)
    screen = nextQuizScreen(screen.id, answers)
  }
  assert.equal(screen.kind, "landing")
  return Object.assign(screen, { seen })
}

test("confidence threshold stays on the map for a future classifier", () => {
  assert.equal(confidenceThreshold, 0.85)
})

test("shared questions route to each archetype branch", () => {
  assert.deepEqual(nextQuizScreen("s3", a1Answers), { kind: "question", id: "a1_q1" })
  assert.deepEqual(nextQuizScreen("s3", a2Answers), { kind: "question", id: "a2_q1" })
  assert.deepEqual(nextQuizScreen("s3", a3Answers), { kind: "question", id: "a3_q1" })
})

test("a tie after the shared questions skips the branch", () => {
  assert.deepEqual(nextQuizScreen("s3", tieAnswers), { kind: "landing", id: "general" })
})

test("no points lands on general", () => {
  const decision = classifyBuyer([
    { questionId: "s3", question: "If you had one week, what would you fix first?", answer: "The handoffs." },
  ])
  assert.equal(decision.archetypeId, "general")
  assert.equal(decision.confidence, 0)
})

test("a split below the confidence threshold still follows the top tally", () => {
  const decision = classifyBuyer([
    { questionId: "s1", question: "Who manages your sales team day to day?", answer: "I do" },
    { questionId: "s2", question: "What eats most of your week?", answer: "Reviewing calls and EOD reports" },
    { questionId: "a1_q1", question: "How many reps do you manage yourself?", answer: "More than 8" },
  ])
  assert.equal(decision.archetypeId, "a1")
  assert.ok(decision.confidence < confidenceThreshold)
  assert.equal(decision.scores.a1, 3)
  assert.equal(decision.scores.a2, 1)
})

test("open answers do not change the tally", () => {
  const withOpen = classifyBuyer([
    { questionId: "s1", question: "Who manages your sales team day to day?", answer: "A sales manager" },
    { questionId: "s3", question: "If you had one week, what would you fix first?", answer: "I do" },
  ])
  assert.equal(withOpen.archetypeId, "a2")
})

test("each full path ends on its landing page", () => {
  const owner = walk(a1Answers) as QuizScreen & { seen: string[] }
  assert.equal(owner.id, "a1")
  assert.deepEqual(owner.seen, ["s1", "s2", "s3", "a1_q1", "a1_q2", "a1_q3"])

  const manager = walk({ ...a2Answers, a2_q1: "Honestly, nowhere" }) as QuizScreen & { seen: string[] }
  assert.equal(manager.id, "a2")
  assert.deepEqual(manager.seen, ["s1", "s2", "s3", "a2_q1", "a2_q2", "a2_q3"])

  const hiring = walk(a3Answers) as QuizScreen & { seen: string[] }
  assert.equal(hiring.id, "a3")
  assert.deepEqual(hiring.seen, ["s1", "s2", "s3", "a3_q1", "a3_q2", "a3_q3"])

  const general = walk(tieAnswers) as QuizScreen & { seen: string[] }
  assert.equal(general.id, "general")
  assert.deepEqual(general.seen, ["s1", "s2", "s3"])
})

test("more than 8 reps still lands on the owner path", () => {
  const screen = walk({ ...a1Answers, a1_q1: "More than 8" })
  assert.equal(screen.id, "a1")
})

test("landing copy comes from the map", () => {
  assert.equal(landingPage("a1").headline, "You run the team. The team runs your evenings.")
  assert.equal(landingPage("a1").cta, "Book an intro call")
  assert.equal(landingPage("missing").headline, landingPage("general").headline)
  assert.equal(landingPage("a2").pain_points.length, 3)
})

test("booking link prefills the GoHighLevel contact fields", () => {
  const href = bookingHref(
    "https://link.automatedrev.com/widget/bookings/ss-intro-call1",
    "Ada Lovelace",
    "ada@example.com",
  )
  const url = new URL(href)
  assert.equal(url.origin + url.pathname, "https://link.automatedrev.com/widget/bookings/ss-intro-call1")
  assert.equal(url.searchParams.get("first_name"), "Ada")
  assert.equal(url.searchParams.get("last_name"), "Lovelace")
  assert.equal(url.searchParams.get("full_name"), "Ada Lovelace")
  assert.equal(url.searchParams.get("name"), "Ada Lovelace")
  assert.equal(url.searchParams.get("email"), "ada@example.com")

  const single = new URL(bookingHref(landingPage("general").offer.after_submit, "Cher", "cher@example.com"))
  assert.equal(single.searchParams.get("first_name"), "Cher")
  assert.equal(single.searchParams.get("last_name"), null)
  assert.equal(single.searchParams.get("email"), "cher@example.com")
})

test("name and email validation", () => {
  assert.equal(validateName("  "), "Enter your name.")
  assert.equal(validateName("A"), "Enter your name.")
  assert.equal(validateName("Ada"), null)
  assert.equal(validateEmail("not-an-email"), "Enter a valid email.")
  assert.equal(validateEmail("ada@example.com"), null)
})
