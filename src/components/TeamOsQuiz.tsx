"use client"

import { useEffect, useId, useLayoutEffect, useRef, useState } from "react"
import {
  bookingCalendarSrc,
  buildQuizResultsPayload,
  createSessionId,
  submitQuizResults,
} from "@/lib/quiz-results"
import {
  numberIsValid,
  quizQuestions,
  quizSpec,
  scoreDiagnostic,
  type Answers,
  type DiagnosticResult,
  type QuizQuestion,
} from "@/lib/teamos-quiz"

type Stage = "intro" | "quiz" | "results"

const emptyAnswers = (): Answers => ({ choice: {}, nums: {}, text: {} })

function draftFor(question: QuizQuestion, answers: Answers): string {
  if (question.type === "number") {
    const value = answers.nums[question.id]
    return value === undefined || value === null ? "" : String(value)
  }
  if (question.type === "open") return answers.text[question.id] || ""
  return ""
}

export default function TeamOsQuiz() {
  const [stage, setStage] = useState<Stage>("intro")
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Answers>(emptyAnswers)
  const [draft, setDraft] = useState("")
  const frameRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const question = quizQuestions[index]
  const total = quizQuestions.length
  const result = stage === "results" ? scoreDiagnostic(answers) : null
  const progress = stage === "results" ? 100 : stage === "quiz" ? Math.round((index / total) * 100) : 0

  useEffect(() => {
    if (stage === "intro") return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    frameRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
    headingRef.current?.focus()
  }, [stage, index])

  function goTo(nextIndex: number, nextAnswers: Answers) {
    if (nextIndex >= total) {
      setStage("results")
      return
    }
    setStage("quiz")
    setIndex(nextIndex)
    setDraft(draftFor(quizQuestions[nextIndex], nextAnswers))
  }

  function choose(optionIndex: number) {
    const next = { ...answers, choice: { ...answers.choice, [question.id]: optionIndex } }
    setAnswers(next)
    goTo(index + 1, next)
  }

  function commitNumber() {
    if (!numberIsValid(draft, question.unit)) return
    const value = Number.parseFloat(draft.replace(/[$,%\s]/g, ""))
    const next = { ...answers, nums: { ...answers.nums, [question.id]: value } }
    setAnswers(next)
    goTo(index + 1, next)
  }

  function unknown() {
    const next = { ...answers, nums: { ...answers.nums, [question.id]: null } }
    setAnswers(next)
    goTo(index + 1, next)
  }

  function finishOpen(skip: boolean) {
    const next = { ...answers, text: { ...answers.text, [question.id]: skip ? "" : draft } }
    setAnswers(next)
    goTo(index + 1, next)
  }

  function back() {
    if (stage === "results") {
      goTo(total - 1, answers)
      return
    }
    if (index === 0) {
      setStage("intro")
      return
    }
    goTo(index - 1, answers)
  }

  const screenKey = stage === "quiz" ? question.id : stage

  return (
    <main className="quiz-page" id="quiz-top">
      <div className="hero-bg-grid grid-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap quiz-frame" ref={frameRef}>
        <div
          className="quiz-bar"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          aria-label="Diagnostic progress"
        >
          <span style={{ width: `${progress}%` }} />
        </div>
        <div key={screenKey} className="quiz-panel">
          {stage === "intro" ? <Intro onStart={() => goTo(0, answers)} headingRef={headingRef} /> : null}
          {stage === "quiz" ? (
            <QuestionScreen
              question={question}
              index={index}
              total={total}
              answers={answers}
              draft={draft}
              showNumbersIntro={question.type === "number" && (index === 0 || quizQuestions[index - 1].type !== "number")}
              headingRef={headingRef}
              onChoose={choose}
              onDraft={setDraft}
              onNumber={commitNumber}
              onUnknown={unknown}
              onOpen={finishOpen}
              onBack={back}
            />
          ) : null}
          {stage === "results" && result ? (
            <Results result={result} answers={answers} headingRef={headingRef} onBack={back} onRestart={() => { setAnswers(emptyAnswers()); setDraft(""); setIndex(0); setStage("intro") }} />
          ) : null}
        </div>
      </div>
    </main>
  )
}

function Intro({ onStart, headingRef }: { onStart: () => void; headingRef: React.RefObject<HTMLHeadingElement | null> }) {
  return (
    <div className="quiz-intro">
      <p className="quiz-kicker">{`// ${quizSpec.intro.eyebrow}`}</p>
      <h1 ref={headingRef} tabIndex={-1} className="quiz-q quiz-intro-title">
        {quizSpec.intro.headline}
      </h1>
      <p className="quiz-lead">{quizSpec.intro.sub}</p>
      <button type="button" className="btn btn-primary quiz-primary" onClick={onStart}>
        {quizSpec.intro.start} →
      </button>
      <p className="quiz-note">{quizSpec.categories.length} areas scored. Results on screen, no email.</p>
    </div>
  )
}

function QuestionScreen({
  question,
  index,
  total,
  answers,
  draft,
  showNumbersIntro,
  headingRef,
  onChoose,
  onDraft,
  onNumber,
  onUnknown,
  onOpen,
  onBack,
}: {
  question: QuizQuestion
  index: number
  total: number
  answers: Answers
  draft: string
  showNumbersIntro: boolean
  headingRef: React.RefObject<HTMLHeadingElement | null>
  onChoose: (index: number) => void
  onDraft: (value: string) => void
  onNumber: () => void
  onUnknown: () => void
  onOpen: (skip: boolean) => void
  onBack: () => void
}) {
  const headingId = useId()
  const category = quizSpec.categories.find(item => item.id === question.category)
  const numberOk = question.type === "number" && numberIsValid(draft, question.unit)

  return (
    <div className="quiz-question">
      <div className="quiz-progress-row">
        <p className="quiz-kicker">
          {`${String(index + 1).padStart(2, "0")} / ${total} · ${category?.name ?? "Last one"}`}
        </p>
        <button type="button" className="quiz-back" onClick={onBack}>
          ← Back
        </button>
      </div>
      {showNumbersIntro ? <p className="quiz-numbers-intro">{quizSpec.numbers_intro}</p> : null}
      <h1 ref={headingRef} id={headingId} tabIndex={-1} className="quiz-q">
        {question.text}
      </h1>
      {question.help ? <p className="quiz-help">{question.help}</p> : null}

      {question.type === "choice" && question.options ? (
        <div role="radiogroup" aria-labelledby={headingId} className="quiz-options">
          {question.options.map((option, optionIndex) => {
            const selected = answers.choice[question.id] === optionIndex
            return (
              <button
                key={option.label}
                type="button"
                role="radio"
                aria-checked={selected}
                className={`quiz-option${selected ? " is-on" : ""}`}
                onClick={() => onChoose(optionIndex)}
              >
                <span className="quiz-option-key" aria-hidden="true">
                  {String.fromCharCode(65 + optionIndex)}
                </span>
                <span>{option.label}</span>
              </button>
            )
          })}
        </div>
      ) : null}

      {question.type === "number" ? (
        <div className="quiz-number">
          <div className="quiz-number-row">
            {question.unit === "money" ? <span className="quiz-unit" aria-hidden="true">$</span> : null}
            <label className="quiz-sr" htmlFor={`${question.id}-input`}>
              {question.text}
            </label>
            <input
              id={`${question.id}-input`}
              type="number"
              inputMode="decimal"
              min={0}
              max={question.unit === "pct" ? 100 : undefined}
              value={draft}
              placeholder={question.unit === "pct" ? "e.g. 55" : question.unit === "money" ? "e.g. 6000" : "e.g. 80"}
              onChange={event => onDraft(event.target.value)}
              onKeyDown={event => {
                if (event.key === "Enter") {
                  event.preventDefault()
                  onNumber()
                }
              }}
            />
            {question.unit === "pct" ? <span className="quiz-unit" aria-hidden="true">%</span> : null}
          </div>
          <div className="quiz-actions">
            <button type="button" className="btn btn-primary quiz-primary" disabled={!numberOk} onClick={onNumber}>
              Next →
            </button>
            <button type="button" className="quiz-ghost" onClick={onUnknown}>
              I don&apos;t know
            </button>
          </div>
        </div>
      ) : null}

      {question.type === "open" ? (
        <div className="quiz-open">
          <label className="quiz-sr" htmlFor={`${question.id}-input`}>
            {question.text}
          </label>
          <textarea
            id={`${question.id}-input`}
            rows={4}
            value={draft}
            placeholder="One or two lines is plenty."
            onChange={event => onDraft(event.target.value)}
          />
          <div className="quiz-actions">
            <button type="button" className="btn btn-primary quiz-primary" onClick={() => onOpen(false)}>
              See my results
            </button>
            <button type="button" className="quiz-ghost" onClick={() => onOpen(true)}>
              Skip
            </button>
          </div>
        </div>
      ) : null}
    </div>
  )
}

const GHL_EMBED_SCRIPTS = [
  "https://link.automatedrev.com/js/form_embed.js",
  "https://link.msgsndr.com/js/form_embed.js",
] as const

const GHL_EMBED_SCRIPT_ID = "ghl-form-embed"

let ghlEmbedScript: Promise<void> | null = null

function loadGhlEmbedScript(): Promise<void> {
  if (ghlEmbedScript) return ghlEmbedScript
  ghlEmbedScript = new Promise(resolve => {
    if (document.getElementById(GHL_EMBED_SCRIPT_ID)) {
      resolve()
      return
    }
    const append = (index: number) => {
      const script = document.createElement("script")
      script.id = GHL_EMBED_SCRIPT_ID
      script.src = GHL_EMBED_SCRIPTS[index]
      script.async = true
      script.onload = () => resolve()
      script.onerror = () => {
        script.remove()
        if (index + 1 < GHL_EMBED_SCRIPTS.length) append(index + 1)
        else resolve()
      }
      document.body.appendChild(script)
    }
    append(0)
  })
  return ghlEmbedScript
}

function BookingCalendar({ src }: { src: string }) {
  const reactId = useId()
  const frameId = `ghl-ss-intro-call1-${reactId.replace(/[^a-zA-Z0-9]/g, "")}`
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    let cancelled = false
    const frame = iframeRef.current
    loadGhlEmbedScript().then(() => {
      if (cancelled || !frame) return
      if (frame.getAttribute("data-iframe-resizer-initialized") === "true") {
        frame.setAttribute("scrolling", "no")
        return
      }
      const resize = (window as Window & {
        iFrameResize?: (options: Record<string, unknown>, target: HTMLIFrameElement) => void
      }).iFrameResize
      resize?.(
        {
          log: false,
          checkOrigin: false,
          heightCalculationMethod: "offset",
          scrolling: false,
          autoResize: true,
          sizeWidth: false,
          sizeHeight: true,
        },
        frame,
      )
      frame.setAttribute("scrolling", "no")
    })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="quiz-calendar">
      <iframe
        ref={iframeRef}
        id={frameId}
        src={src}
        title="Book an intro call"
        width="100%"
        scrolling="no"
        style={{ border: "none", width: "100%" }}
      />
    </div>
  )
}

function Results({
  result,
  answers,
  headingRef,
  onBack,
  onRestart,
}: {
  result: DiagnosticResult
  answers: Answers
  headingRef: React.RefObject<HTMLHeadingElement | null>
  onBack: () => void
  onRestart: () => void
}) {
  const [calendarSrc, setCalendarSrc] = useState<string | null>(null)

  useLayoutEffect(() => {
    const sessionId = createSessionId()
    submitQuizResults(
      buildQuizResultsPayload({
        sessionId,
        result,
        answers,
        pageUrl: window.location.href,
        submittedAt: new Date().toISOString(),
      }),
    )
    const page = new URL(window.location.href)
    page.searchParams.set("quiz_session_id", sessionId)
    window.history.replaceState(window.history.state, "", `${page.pathname}${page.search}${page.hash}`)
    setCalendarSrc(bookingCalendarSrc(sessionId, result.grade, result.archetypeId))
    // Once per results visit. A restart remounts this screen and starts a new session.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const top = result.leaks[0]
  const ask = top
    ? `Your top leak is ${top.title.toLowerCase()}. ${top.cta}`
    : `Your lowest score is ${result.lowestName.toLowerCase()}. ${result.lowestCta}`

  return (
    <div className="quiz-results">
      <div className="quiz-progress-row">
        <p className="quiz-kicker">{"// Your result"}</p>
        <button type="button" className="quiz-back" onClick={onBack}>
          ← Back
        </button>
      </div>
      <h1 ref={headingRef} tabIndex={-1} className="quiz-q">
        {quizSpec.results_copy.heading}
      </h1>
      <div className="card quiz-grade">
        <div className="quiz-grade-mark" aria-hidden="true">{result.grade}</div>
        <div>
          <p className="quiz-score">
            {result.overall}
            <span> / 100</span>
          </p>
          <p className="quiz-grade-line">{result.gradeLine}</p>
          <p className="quiz-profile">
            <span>Profile: {result.archetypeName}.</span> {result.archetypeMeans}
          </p>
        </div>
      </div>

      <section className="quiz-block" aria-labelledby="quiz-areas">
        <h2 id="quiz-areas" className="quiz-kicker">Score by area</h2>
        <ul className="quiz-areas">
          {result.areas.map(area => (
            <li key={area.id} className="quiz-area">
              <span className="quiz-area-name">
                {area.name}
                {area.part ? <span>{area.part}</span> : null}
              </span>
              <span className="quiz-area-track" aria-hidden="true">
                <span
                  className={area.score < quizSpec.config.leak_threshold ? `is-${area.score <= 39 ? "severe" : area.score <= 54 ? "major" : "moderate"}` : "is-ok"}
                  style={{ width: `${Math.max(area.score, 2)}%` }}
                />
              </span>
              <span className="quiz-area-score">{area.score}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="quiz-block" aria-labelledby="quiz-leaks">
        <h2 id="quiz-leaks" className="quiz-section-title">{quizSpec.results_copy.leaks_heading}</h2>
        {result.leaks.length === 0 ? <p className="quiz-lead">{quizSpec.results_copy.no_leaks}</p> : null}
        <ol className="quiz-leaks">
          {result.leaks.map((leak, leakIndex) => (
            <li key={leak.id} className={`card quiz-leak is-${leak.severity.toLowerCase()}`}>
              <p className="quiz-leak-kicker">{`#${leakIndex + 1} · ${leak.severity.toUpperCase()} · ${leak.name} ${leak.score}/100`}</p>
              <h3>{leak.title}</h3>
              <div>
                <p className="quiz-kicker">In your answers</p>
                <p className="quiz-copy">{leak.looks}</p>
              </div>
              <div>
                <p className="quiz-kicker">Why it costs you</p>
                <p className="quiz-lead">{leak.why}</p>
              </div>
              <div>
                <p className="quiz-kicker">Fix it this week</p>
                <ol>
                  {leak.fixes.map(fix => (
                    <li key={fix}>{fix}</li>
                  ))}
                </ol>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="quiz-block" aria-labelledby="quiz-math">
        <h2 id="quiz-math" className="quiz-section-title">{quizSpec.results_copy.math_heading}</h2>
        {result.math.length === 0 ? (
          <p className="quiz-lead">{quizSpec.results_copy.no_math}</p>
        ) : (
          <div className="card quiz-math">
            {result.math.map(line => (
              <p key={line}>{line}</p>
            ))}
            <p className="quiz-note">{quizSpec.results_copy.math_note}</p>
          </div>
        )}
      </section>

      {result.quickWins.length ? (
        <section className="quiz-block" aria-labelledby="quiz-wins">
          <h2 id="quiz-wins" className="quiz-section-title">{quizSpec.results_copy.quick_wins_heading}</h2>
          <ol className="quiz-wins">
            {result.quickWins.map(win => (
              <li key={win}>{win}</li>
            ))}
          </ol>
        </section>
      ) : null}

      <section className="quiz-block" aria-labelledby="quiz-good">
        <h2 id="quiz-good" className="quiz-section-title">{quizSpec.results_copy.good_heading}</h2>
        <ul className="quiz-good">
          {quizSpec.categories.map(category => (
            <li key={category.id} className="card">
              <p className="quiz-kicker">{category.name}</p>
              <p>{category.good}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="card quiz-ask" aria-labelledby="quiz-ask">
        <h2 id="quiz-ask" className="quiz-section-title">{quizSpec.cta.heading}</h2>
        <p className="quiz-copy">{ask}</p>
        {calendarSrc ? <BookingCalendar src={calendarSrc} /> : <div className="quiz-calendar" aria-hidden="true" />}
        <button type="button" className="quiz-back" onClick={onRestart}>
          Start over
        </button>
      </section>
    </div>
  )
}
