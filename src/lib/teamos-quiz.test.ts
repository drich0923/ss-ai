import assert from "node:assert/strict"
import test from "node:test"
import { scoreDiagnostic, type Answers } from "./teamos-quiz"

// Canvas Team OS sample. The reference scorer (engine.py rules) returns 40/D, a2, leaks comp, data, hiring.
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
  text: {},
}

test("sample answers match the reference scorer", () => {
  const result = scoreDiagnostic(sample)
  assert.equal(result.overall, 40)
  assert.equal(result.grade, "D")
  assert.equal(result.archetypeId, "a2")
  assert.deepEqual(result.leaks.map(leak => leak.id), ["comp", "data", "hiring"])
  assert.deepEqual(
    Object.fromEntries(result.areas.map(area => [area.id, area.score])),
    {
      hiring: 25,
      ramp: 38,
      speed: 50,
      qc: 33,
      cadence: 63,
      tracking: 71,
      comp: 13,
      data: 13,
      playbooks: 50,
    },
  )
  assert.deepEqual(result.points, { a1: 1, a2: 9, a3: 3 })
})

test("sample leak copy uses their answers and the math uses their inputs", () => {
  const result = scoreDiagnostic(sample)
  const comp = result.leaks.find(leak => leak.id === "comp")
  assert.equal(comp?.looks, "Commissions: By hand, with disputes. Reps are paid on: Closed.")
  assert.equal(comp?.severity, "Severe")
  assert.ok(result.math.includes("300 booked x 52% showed = 156 calls held"))
  assert.ok(result.math.includes("156 held x 18% closed = 28.1 sales"))
  assert.ok(result.math.includes("Held calls per closer per selling day: 1.9"))
  assert.ok(result.math.includes("Setters per closer: 0.5"))
  assert.equal(result.math.some(line => /\$0\b|price/i.test(line) && line.includes("Team OS")), false)
})

test("an unknown number scores zero and drops out of the math", () => {
  const result = scoreDiagnostic({
    ...sample,
    nums: { ...sample.nums, n_show: null, n_close: null },
  })
  assert.equal(result.math.some(line => line.includes("showed")), false)
  assert.ok(result.math.includes("Setters per closer: 0.5"))
  assert.ok(result.areas.find(area => area.id === "tracking"))
})

test("a points tie follows the tiebreak order", () => {
  const result = scoreDiagnostic({
    choice: {},
    nums: {},
    text: {},
  })
  assert.equal(result.archetypeId, "a2")
  assert.equal(result.overall, 0)
  assert.equal(result.grade, "F")
})
