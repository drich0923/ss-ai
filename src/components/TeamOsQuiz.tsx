"use client"

import { useEffect, useId, useRef, useState } from "react"
import {
  bookingHref,
  isBranchQuestion,
  landingPage,
  longestQuestionCount,
  nextQuizScreen,
  questionById,
  sharedQuestions,
  trackQuizEvent,
  validateEmail,
  validateName,
  type QuizQuestion,
  type QuizScreen,
} from "@/lib/teamos-quiz"

function pad(value: number) {
  return String(value).padStart(2, "0")
}

export default function TeamOsQuiz() {
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [stack, setStack] = useState<QuizScreen[]>([{ kind: "question", id: sharedQuestions[0].id }])
  const [index, setIndex] = useState(0)
  const screen = stack[index]
  const frameRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const answersRef = useRef(answers)
  const startedRef = useRef(false)
  const completedRef = useRef("")
  answersRef.current = answers
  const screenKey = `${screen.kind}:${screen.id}`

  useEffect(() => {
    if (startedRef.current) return
    startedRef.current = true
    trackQuizEvent("quiz_start")
  }, [])

  useEffect(() => {
    if (screen.kind !== "landing") return
    const key = `${index}:${screen.id}`
    if (completedRef.current === key) return
    completedRef.current = key
    trackQuizEvent("quiz_complete", { archetype: screen.id })
  }, [screen.kind, screen.id, index])

  useEffect(() => {
    if (index === 0) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    frameRef.current?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" })
    headingRef.current?.focus()
  }, [index, screenKey])

  function goBack() {
    setIndex(current => Math.max(0, current - 1))
  }

  function goNext() {
    const current = stack[index]
    if (!current || current.kind !== "question") return
    const upcoming = nextQuizScreen(current.id, answersRef.current)
    setStack(previous => [...previous.slice(0, index + 1), upcoming])
    setIndex(index + 1)
  }

  const step = index + 1
  const onBranch = screen.kind === "question" && isBranchQuestion(screen.id)
  const progress = screen.kind === "landing" ? 100 : Math.round((step / (longestQuestionCount + 1)) * 100)
  const progressLabel =
    screen.kind === "landing"
      ? "INTRO CALL"
      : onBranch
        ? `QUESTION ${pad(step)} / ${pad(longestQuestionCount)}`
        : `QUESTION ${pad(step)}`

  return (
    <main className="quiz-page" id="quiz-top">
      <div className="hero-bg-grid grid-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />
      <div className="wrap quiz-frame" ref={frameRef}>
        <div className="quiz-progress-row">
          {index > 0 ? (
            <button type="button" className="quiz-back" onClick={goBack}>
              ← Back
            </button>
          ) : (
            <span className="eyebrow">Quiz</span>
          )}
          <span className="mono xs ink-mute">{progressLabel}</span>
        </div>
        <div
          className="quiz-bar"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          aria-label={progressLabel}
        >
          <span style={{ width: `${progress}%` }} />
        </div>
        <div key={screenKey} className="quiz-panel">
          {screen.kind === "question" ? (
            <QuestionScreen
              questionId={screen.id}
              answer={answers[screen.id] ?? ""}
              headingRef={headingRef}
              onAnswer={value => setAnswers(current => ({ ...current, [screen.id]: value }))}
              onContinue={goNext}
            />
          ) : (
            <LandingScreen landingId={screen.id} headingRef={headingRef} />
          )}
        </div>
      </div>
    </main>
  )
}

function QuestionScreen({
  questionId,
  answer,
  headingRef,
  onAnswer,
  onContinue,
}: {
  questionId: string
  answer: string
  headingRef: React.RefObject<HTMLHeadingElement | null>
  onAnswer: (value: string) => void
  onContinue: () => void
}) {
  const question = questionById(questionId)
  const headingId = useId()
  if (!question) return null

  return (
    <>
      <h1 id={headingId} ref={headingRef} tabIndex={-1} className="quiz-q">
        {question.text}
      </h1>
      {question.type === "choice" ? (
        <ChoiceFields question={question} headingId={headingId} answer={answer} onAnswer={onAnswer} onContinue={onContinue} />
      ) : (
        <OpenField question={question} headingId={headingId} answer={answer} onAnswer={onAnswer} onContinue={onContinue} />
      )}
    </>
  )
}

function ChoiceFields({
  question,
  headingId,
  answer,
  onAnswer,
  onContinue,
}: {
  question: QuizQuestion
  headingId: string
  answer: string
  onAnswer: (value: string) => void
  onContinue: () => void
}) {
  const options = question.options ?? []
  const selected = options.findIndex(option => option.label === answer)
  const refs = useRef<(HTMLButtonElement | null)[]>([])

  function move(from: number, delta: number) {
    const next = (from + delta + options.length) % options.length
    onAnswer(options[next].label)
    refs.current[next]?.focus()
  }

  return (
    <>
      <div role="radiogroup" aria-labelledby={headingId} className="quiz-options">
        {options.map((option, optionIndex) => {
          const checked = selected === optionIndex
          const tabStop = selected < 0 ? optionIndex === 0 : checked
          return (
            <button
              key={option.label}
              ref={element => {
                refs.current[optionIndex] = element
              }}
              type="button"
              role="radio"
              aria-checked={checked}
              tabIndex={tabStop ? 0 : -1}
              className={`quiz-option${checked ? " is-on" : ""}`}
              onClick={() => onAnswer(option.label)}
              onKeyDown={event => {
                if (event.key === "ArrowDown" || event.key === "ArrowRight") {
                  event.preventDefault()
                  move(optionIndex, 1)
                } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
                  event.preventDefault()
                  move(optionIndex, -1)
                } else if (event.key === "Home") {
                  event.preventDefault()
                  move(0, 0)
                } else if (event.key === "End") {
                  event.preventDefault()
                  move(options.length - 1, 0)
                }
              }}
            >
              <span className="quiz-option-key" aria-hidden="true">
                {String.fromCharCode(65 + optionIndex)}
              </span>
              <span>{option.label}</span>
            </button>
          )
        })}
      </div>
      <div className="quiz-actions">
        <button type="button" className="btn btn-primary quiz-cta" disabled={selected < 0} onClick={onContinue}>
          Continue
        </button>
      </div>
    </>
  )
}

function OpenField({
  question,
  headingId,
  answer,
  onAnswer,
  onContinue,
}: {
  question: QuizQuestion
  headingId: string
  answer: string
  onAnswer: (value: string) => void
  onContinue: () => void
}) {
  const fieldId = useId()
  const helpId = useId()

  return (
    <>
      <div className="quiz-field">
        <label className="quiz-label" htmlFor={fieldId}>
          Your answer
        </label>
        <textarea
          id={fieldId}
          value={answer}
          rows={5}
          aria-labelledby={headingId}
          aria-describedby={helpId}
          onChange={event => onAnswer(event.target.value)}
        />
        <p id={helpId} className="quiz-help">
          Optional, but worth answering.
        </p>
      </div>
      <div className="quiz-actions">
        <button type="button" className="btn btn-primary quiz-cta" onClick={onContinue}>
          Continue
        </button>
      </div>
    </>
  )
}

function LandingScreen({
  landingId,
  headingRef,
}: {
  landingId: string
  headingRef: React.RefObject<HTMLHeadingElement | null>
}) {
  const landing = landingPage(landingId)
  const formId = useId()
  const nameId = useId()
  const emailId = useId()
  const nameErrorId = useId()
  const emailErrorId = useId()
  const submitLineId = useId()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [attempted, setAttempted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    setAttempted(false)
    setSubmitting(false)
  }, [landingId])

  const nameError = attempted ? validateName(name) : null
  const emailError = attempted ? validateEmail(email) : null

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setAttempted(true)
    if (validateName(name) || validateEmail(email)) return
    setSubmitting(true)
    trackQuizEvent("booking_click", { archetype: landingId })
    window.location.assign(bookingHref(landing.offer.after_submit, name, email))
  }

  return (
    <>
      <h1 ref={headingRef} tabIndex={-1} className="quiz-q">
        {landing.headline}
      </h1>
      <ul className="quiz-pains">
        {landing.pain_points.map((point, pointIndex) => (
          <li key={point} className="card quiz-pain">
            <div className="pain-n">{pad(pointIndex + 1)}</div>
            <p className="pain-t">{point}</p>
          </li>
        ))}
      </ul>
      <section className="card quiz-offer" aria-labelledby={`${formId}-offer`}>
        <h2 id={`${formId}-offer`} className="eyebrow">
          What you get
        </h2>
        <p>{landing.offer.what}</p>
      </section>
      <form className="card quiz-form" onSubmit={onSubmit} noValidate>
        <div className="quiz-field">
          <label className="quiz-label" htmlFor={nameId}>
            Name
          </label>
          <input
            id={nameId}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={nameError ? true : undefined}
            aria-describedby={nameError ? nameErrorId : undefined}
            value={name}
            onChange={event => setName(event.target.value)}
          />
          {nameError ? (
            <p id={nameErrorId} className="quiz-error" role="alert">
              {nameError}
            </p>
          ) : null}
        </div>
        <div className="quiz-field">
          <label className="quiz-label" htmlFor={emailId}>
            Email
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            autoCapitalize="none"
            spellCheck={false}
            required
            aria-required="true"
            aria-invalid={emailError ? true : undefined}
            aria-describedby={emailError ? emailErrorId : undefined}
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          {emailError ? (
            <p id={emailErrorId} className="quiz-error" role="alert">
              {emailError}
            </p>
          ) : null}
        </div>
        <p id={submitLineId} className="quiz-submit-line">
          {landing.offer.submit_line}
        </p>
        <button
          type="submit"
          className="btn btn-primary quiz-cta"
          disabled={submitting}
          aria-busy={submitting}
          aria-describedby={submitLineId}
        >
          {landing.cta}
        </button>
      </form>
    </>
  )
}
