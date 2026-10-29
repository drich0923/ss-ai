"use client"

import Link from "next/link"
import { useEffect, useId, useLayoutEffect, useRef, useState, type FormEvent } from "react"
import EmbedGate from "./EmbedGate"
import { smsConsentSentence } from "@/lib/sms-consent"
import {
  bookingCalendarSrc,
  buildQuizResultsPayload,
  createSessionId,
  emptyQuizContact,
  submitQuizResults,
  validateQuizContact,
  type QuizContact,
  type QuizContactErrors,
} from "@/lib/quiz-results"
import { loadQuizDraft, saveQuizDraft, type QuizStage } from "@/lib/quiz-session"
import {
  numberIsValid,
  quizQuestions,
  quizSpec,
  scoreDiagnostic,
  type Answers,
  type DiagnosticResult,
  type QuizQuestion,
} from "@/lib/teamos-quiz"

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
  const [stage, setStage] = useState<QuizStage>("intro")
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Answers>(emptyAnswers)
  const [draft, setDraft] = useState("")
  const [contact, setContact] = useState<QuizContact>(emptyQuizContact)
  const [sessionId, setSessionId] = useState<string | null>(null)
  const [posted, setPosted] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const frameRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const postedRef = useRef(false)
  const sessionIdRef = useRef<string | null>(null)
  const question = quizQuestions[index]
  const total = quizQuestions.length
  const result = stage === "results" ? scoreDiagnostic(answers) : null
  const progress = stage === "results" || stage === "contact" ? 100 : stage === "quiz" ? Math.round((index / total) * 100) : 0

  useLayoutEffect(() => {
    const stored = loadQuizDraft(window.sessionStorage)
    if (stored) {
      setStage(stored.stage)
      setIndex(stored.index)
      setAnswers(stored.answers)
      setContact(stored.contact)
      setSessionId(stored.sessionId)
      setPosted(stored.posted)
      postedRef.current = stored.posted
      sessionIdRef.current = stored.sessionId
      if (stored.stage === "quiz") {
        const restored = quizQuestions[stored.index]
        if (restored) setDraft(draftFor(restored, stored.answers))
      }
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated) return
    saveQuizDraft(window.sessionStorage, {
      v: 1,
      stage,
      index,
      answers,
      contact,
      sessionId,
      posted,
    })
  }, [hydrated, stage, index, answers, contact, sessionId, posted])

  useEffect(() => {
    if (!hydrated || stage === "intro") return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    frameRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
    headingRef.current?.focus()
  }, [hydrated, stage, index])

  function goTo(nextIndex: number, nextAnswers: Answers) {
    if (nextIndex >= total) {
      setStage("contact")
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
      setStage("contact")
      return
    }
    if (stage === "contact") {
      goTo(total - 1, answers)
      return
    }
    if (index === 0) {
      setStage("intro")
      return
    }
    goTo(index - 1, answers)
  }

  function showResults(nextContact: QuizContact) {
    const trimmed: QuizContact = {
      first_name: nextContact.first_name.trim(),
      last_name: nextContact.last_name.trim(),
      email: nextContact.email.trim(),
      phone: nextContact.phone.trim(),
      sms_consent: nextContact.sms_consent === true,
    }
    const id = sessionIdRef.current ?? createSessionId()
    sessionIdRef.current = id
    if (!postedRef.current) {
      postedRef.current = true
      const pageUrl = window.location.href
      submitQuizResults(
        buildQuizResultsPayload({
          sessionId: id,
          result: scoreDiagnostic(answers),
          answers,
          pageUrl,
          submittedAt: new Date().toISOString(),
          contact: trimmed,
        }),
      )
      const page = new URL(pageUrl)
      page.searchParams.set("quiz_session_id", id)
      window.history.replaceState(window.history.state, "", `${page.pathname}${page.search}${page.hash}`)
    }
    saveQuizDraft(window.sessionStorage, {
      v: 1,
      stage: "results",
      index,
      answers,
      contact: trimmed,
      sessionId: id,
      posted: true,
    })
    setSessionId(id)
    setPosted(true)
    setContact(trimmed)
    setStage("results")
  }

  function restart() {
    postedRef.current = false
    sessionIdRef.current = null
    setPosted(false)
    setSessionId(null)
    setContact(emptyQuizContact())
    setAnswers(emptyAnswers())
    setDraft("")
    setIndex(0)
    setStage("intro")
    saveQuizDraft(window.sessionStorage, {
      v: 1,
      stage: "intro",
      index: 0,
      answers: emptyAnswers(),
      contact: emptyQuizContact(),
      sessionId: null,
      posted: false,
    })
    const page = new URL(window.location.href)
    if (page.searchParams.has("quiz_session_id")) {
      page.searchParams.delete("quiz_session_id")
      window.history.replaceState(window.history.state, "", `${page.pathname}${page.search}${page.hash}`)
    }
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
          {stage === "contact" ? (
            <ContactStep contact={contact} headingRef={headingRef} onChange={setContact} onBack={back} onSubmit={showResults} />
          ) : null}
          {stage === "results" && result && sessionId ? (
            <Results
              result={result}
              sessionId={sessionId}
              contact={contact}
              headingRef={headingRef}
              onBack={back}
              onRestart={restart}
            />
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
      <p className="quiz-note">{quizSpec.categories.length} areas scored. Your breakdown stays on this page.</p>
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
              Next →
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

function BookingFrame({ src }: { src: string }) {
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
    <iframe
      ref={iframeRef}
      id={frameId}
      src={src}
      title="Book an intro call"
      width="100%"
      scrolling="no"
      style={{ border: "none", width: "100%" }}
    />
  )
}

function BookingCalendar({ src }: { src: string }) {
  return (
    <>
      <div className="quiz-calendar">
        <EmbedGate
          title="This calendar is hosted by GoHighLevel"
          detail="The intro-call calendar stays off until you accept non-essential cookies. Your quiz result is already saved. Email sales@systemizedsales.ai if you would rather not load the calendar."
        >
          <BookingFrame src={src} />
        </EmbedGate>
      </div>
      <p className="form-legal">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms</Link>
      </p>
    </>
  )
}

function ContactStep({
  contact,
  headingRef,
  onChange,
  onBack,
  onSubmit,
}: {
  contact: QuizContact
  headingRef: React.RefObject<HTMLHeadingElement | null>
  onChange: (contact: QuizContact) => void
  onBack: () => void
  onSubmit: (contact: QuizContact) => void
}) {
  const reactId = useId().replace(/[^a-zA-Z0-9]/g, "")
  const [errors, setErrors] = useState<QuizContactErrors>({})
  const fieldId = (name: keyof QuizContact) => `quiz-${name}-${reactId}`

  function update(name: keyof QuizContact, value: string) {
    onChange({ ...contact, [name]: value })
    if (errors[name]) setErrors(current => ({ ...current, [name]: undefined }))
  }

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validateQuizContact(contact)
    setErrors(nextErrors)
    const firstInvalid = (["first_name", "last_name", "email", "phone"] as const).find(name => nextErrors[name])
    if (firstInvalid) {
      document.getElementById(fieldId(firstInvalid))?.focus()
      return
    }
    onSubmit(contact)
  }

  return (
    <form className="quiz-contact" onSubmit={submit} noValidate>
      <div className="quiz-progress-row">
        <p className="quiz-kicker">{"// Last step"}</p>
        <button type="button" className="quiz-back" onClick={onBack}>
          ← Back
        </button>
      </div>
      <h1 ref={headingRef} tabIndex={-1} className="quiz-q">
        Your diagnosis is ready
      </h1>
      <p className="quiz-lead">Where should we send your full breakdown?</p>
      <div className="quiz-fields">
        <ContactField
          id={fieldId("first_name")}
          name="first_name"
          label="First name"
          type="text"
          autoComplete="given-name"
          autoCapitalize="words"
          value={contact.first_name}
          error={errors.first_name}
          onChange={value => update("first_name", value)}
        />
        <ContactField
          id={fieldId("last_name")}
          name="last_name"
          label="Last name"
          type="text"
          autoComplete="family-name"
          autoCapitalize="words"
          value={contact.last_name}
          error={errors.last_name}
          onChange={value => update("last_name", value)}
        />
        <ContactField
          id={fieldId("email")}
          name="email"
          label="Email"
          type="email"
          wide
          autoComplete="email"
          inputMode="email"
          autoCapitalize="none"
          spellCheck={false}
          value={contact.email}
          error={errors.email}
          onChange={value => update("email", value)}
        />
        <ContactField
          id={fieldId("phone")}
          name="phone"
          label="Phone"
          type="tel"
          wide
          autoComplete="tel"
          inputMode="tel"
          value={contact.phone}
          error={errors.phone}
          onChange={value => update("phone", value)}
        />
      </div>
      <label className="sms-consent" htmlFor={`quiz-sms-${reactId}`}>
        <input
          id={`quiz-sms-${reactId}`}
          name="sms_consent"
          type="checkbox"
          checked={contact.sms_consent}
          onChange={event => onChange({ ...contact, sms_consent: event.target.checked })}
        />
        <span>
          {smsConsentSentence(contact.phone)}{" "}
          <Link href="/privacy">Privacy Policy</Link>
          {" and "}
          <Link href="/terms">Terms</Link>.
        </span>
      </label>
      <div className="quiz-actions">
        <button type="submit" className="btn btn-primary quiz-primary">
          Show my results
        </button>
      </div>
      <p className="quiz-note">
        Submitting sends your answers so we can reply about your results. It is not consent to text messages. Text messages are sent only if the box above is checked.
      </p>
    </form>
  )
}

function ContactField({
  id,
  name,
  label,
  type,
  wide,
  autoComplete,
  autoCapitalize,
  inputMode,
  spellCheck,
  value,
  error,
  onChange,
}: {
  id: string
  name: string
  label: string
  type: "text" | "email" | "tel"
  wide?: boolean
  autoComplete: string
  autoCapitalize?: "words" | "none"
  inputMode?: "email" | "tel"
  spellCheck?: boolean
  value: string
  error?: string
  onChange: (value: string) => void
}) {
  const errorId = `${id}-error`
  return (
    <div className={wide ? "quiz-field quiz-field-wide" : "quiz-field"}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        autoCapitalize={autoCapitalize}
        inputMode={inputMode}
        spellCheck={spellCheck}
        required
        aria-required="true"
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        value={value}
        onChange={event => onChange(event.target.value)}
      />
      {error ? (
        <p id={errorId} className="quiz-field-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  )
}

function Results({
  result,
  sessionId,
  contact,
  headingRef,
  onBack,
  onRestart,
}: {
  result: DiagnosticResult
  sessionId: string
  contact: QuizContact
  headingRef: React.RefObject<HTMLHeadingElement | null>
  onBack: () => void
  onRestart: () => void
}) {
  const calendarSrc = bookingCalendarSrc(sessionId, result.grade, result.archetypeId, contact)

  useLayoutEffect(() => {
    const page = new URL(window.location.href)
    if (page.searchParams.get("quiz_session_id") === sessionId) return
    page.searchParams.set("quiz_session_id", sessionId)
    window.history.replaceState(window.history.state, "", `${page.pathname}${page.search}${page.hash}`)
  }, [sessionId])

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
        <BookingCalendar src={calendarSrc} />
        <button type="button" className="quiz-back" onClick={onRestart}>
          Start over
        </button>
      </section>
    </div>
  )
}
