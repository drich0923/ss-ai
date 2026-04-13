"use client"

import { useState, useEffect, useRef } from "react"
import { T, Reveal } from "@/lib/design-tokens"
import { quizQuestions, scoreQuiz, type QuizAnswers, type ProductScore } from "@/lib/quiz-logic"

function TypeformEmbed() {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "//embed.typeform.com/next/embed.js"
    script.async = true
    document.body.appendChild(script)
    return () => {
      try { document.body.removeChild(script) } catch {}
    }
  }, [])

  return (
    <div
      ref={containerRef}
      data-tf-widget="hFvfB43J"
      data-tf-opacity="100"
      data-tf-inline-on-mobile
      data-tf-iframe-props="title=Systemized Sales AI"
      style={{
        width: "100%",
        height: 500,
        borderRadius: 16,
        overflow: "hidden",
      }}
    />
  )
}

export default function NeedsAnalysis() {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<QuizAnswers>({})
  const [results, setResults] = useState<ProductScore[] | null>(null)
  const [hoveredOption, setHoveredOption] = useState<string | null>(null)

  const isQuizDone = results !== null
  const currentQ = quizQuestions[step]
  const progress = ((step + 1) / quizQuestions.length) * 100

  function selectAnswer(value: string) {
    const updated = { ...answers, [currentQ.id]: value }
    setAnswers(updated)

    if (step < quizQuestions.length - 1) {
      setTimeout(() => setStep(step + 1), 300)
    } else {
      setTimeout(() => setResults(scoreQuiz(updated)), 300)
    }
  }

  function restart() {
    setStep(0)
    setAnswers({})
    setResults(null)
  }

  if (isQuizDone && results) {
    const top = results[0]
    const alsoConsider = results.slice(1, 3).filter((r) => r.score > 0)

    return (
      <section id="quiz" style={{ padding: "100px 32px", textAlign: "center" }}>
        <div style={{ maxWidth: 780, margin: "0 auto" }}>
          <Reveal>
            <p
              style={{
                fontSize: 13, textTransform: "uppercase", letterSpacing: 2.5,
                color: T.green, fontWeight: 600, marginBottom: 12,
              }}
            >
              Your results
            </p>
            <h2
              style={{
                fontFamily: "'DM Serif Display', Georgia, serif",
                fontSize: "clamp(32px, 4vw, 48px)", lineHeight: 1.1,
                letterSpacing: -1, marginBottom: 16,
              }}
            >
              Start with {top.name}.
            </h2>
            <p style={{ fontSize: 17, color: T.text2, lineHeight: 1.65, marginBottom: 48 }}>
              Based on your answers, this is the app that solves your biggest bottleneck right now.
            </p>
          </Reveal>

          {/* Primary recommendation */}
          <Reveal delay={0.1}>
            <div
              style={{
                padding: 32, borderRadius: 16,
                border: `2px solid ${T.green}`,
                background: T.greenBg, textAlign: "left",
                marginBottom: 24,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <span
                  style={{
                    width: 8, height: 8, borderRadius: "50%", background: T.green,
                    boxShadow: `0 0 6px rgba(16,185,129,0.4)`,
                  }}
                />
                <span style={{ fontSize: 12, fontWeight: 600, color: T.green, textTransform: "uppercase", letterSpacing: 1.5 }}>
                  Recommended starting point
                </span>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>{top.name}</h3>
              <p style={{ fontSize: 16, color: T.text2, lineHeight: 1.6, marginBottom: 20 }}>
                {top.reason}
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a
                  href={`/products/${top.slug}`}
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "12px 24px", borderRadius: 12,
                    background: T.green, color: "#fff",
                    fontWeight: 600, fontSize: 14, textDecoration: "none",
                    transition: "all 0.25s",
                  }}
                >
                  Learn more
                </a>
                <a
                  href="mailto:dylan.rich@systemizedsales.com?subject=Needs%20Analysis%20Follow-Up"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    padding: "12px 24px", borderRadius: 12,
                    background: "transparent", border: `1px solid ${T.border}`,
                    color: T.text, fontWeight: 600, fontSize: 14,
                    textDecoration: "none", transition: "all 0.25s",
                  }}
                >
                  Book a call to discuss
                </a>
              </div>
            </div>
          </Reveal>

          {/* Secondary recommendations */}
          {alsoConsider.length > 0 && (
            <Reveal delay={0.2}>
              <p style={{ fontSize: 13, fontWeight: 600, color: T.text3, textTransform: "uppercase", letterSpacing: 2, marginBottom: 16 }}>
                Also consider
              </p>
              <div style={{ display: "grid", gridTemplateColumns: alsoConsider.length > 1 ? "1fr 1fr" : "1fr", gap: 16, marginBottom: 40 }}>
                {alsoConsider.map((p) => (
                  <a
                    key={p.slug}
                    href={`/products/${p.slug}`}
                    style={{
                      display: "block", padding: 20, borderRadius: 14,
                      border: `1px solid ${T.border}`, background: T.white,
                      textAlign: "left", textDecoration: "none",
                      transition: "all 0.25s",
                    }}
                  >
                    <h4 style={{ fontSize: 16, fontWeight: 700, color: T.text, marginBottom: 6 }}>{p.name}</h4>
                    <p style={{ fontSize: 14, color: T.text2, lineHeight: 1.5 }}>{p.reason}</p>
                  </a>
                ))}
              </div>
            </Reveal>
          )}

          {/* Typeform embed — next step to get started */}
          <Reveal delay={0.25}>
            <div style={{ marginTop: 48, marginBottom: 40 }}>
              <p
                style={{
                  fontSize: 13, textTransform: "uppercase", letterSpacing: 2.5,
                  color: T.green, fontWeight: 600, marginBottom: 12,
                }}
              >
                Next step
              </p>
              <h3
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: "clamp(24px, 3vw, 36px)", lineHeight: 1.1,
                  marginBottom: 12,
                }}
              >
                Tell us about your team.
              </h3>
              <p style={{ fontSize: 16, color: T.text2, lineHeight: 1.65, marginBottom: 28, maxWidth: 520, margin: "0 auto 28px" }}>
                Fill out a quick form so we can prepare a tailored walkthrough for your {top.name} setup.
              </p>
              <TypeformEmbed />
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <button
              onClick={restart}
              style={{
                background: "none", border: "none", color: T.text3,
                fontSize: 14, fontWeight: 500, cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Retake the quiz
            </button>
          </Reveal>
        </div>
      </section>
    )
  }

  // Quiz in progress
  return (
    <section id="quiz" style={{ padding: "100px 32px" }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <Reveal>
          <p
            style={{
              fontSize: 13, textTransform: "uppercase", letterSpacing: 2.5,
              color: T.green, fontWeight: 600, marginBottom: 12, textAlign: "center",
            }}
          >
            Needs Analysis
          </p>
          <h2
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "clamp(28px, 4vw, 42px)", lineHeight: 1.1,
              letterSpacing: -0.5, marginBottom: 40, textAlign: "center",
            }}
          >
            Find the right app for your team.
          </h2>
        </Reveal>

        {/* Progress bar */}
        <div style={{ marginBottom: 40 }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: T.text3, fontWeight: 500 }}>
              Question {step + 1} of {quizQuestions.length}
            </span>
            <span style={{ fontSize: 13, color: T.text3, fontWeight: 500 }}>
              {Math.round(progress)}%
            </span>
          </div>
          <div style={{ height: 4, borderRadius: 2, background: T.border }}>
            <div
              style={{
                height: "100%", borderRadius: 2, background: T.green,
                width: `${progress}%`, transition: "width 0.4s ease",
              }}
            />
          </div>
        </div>

        {/* Question */}
        <div key={currentQ.id}>
          <Reveal>
            <h3 style={{ fontSize: 22, fontWeight: 600, marginBottom: 24, lineHeight: 1.35 }}>
              {currentQ.question}
            </h3>
          </Reveal>

          <div style={{ display: "grid", gap: 10 }}>
            {currentQ.options.map((opt, i) => {
              const isSelected = answers[currentQ.id] === opt.value
              const isHovered = hoveredOption === `${currentQ.id}-${opt.value}`
              return (
                <Reveal key={opt.value} delay={0.05 * (i + 1)}>
                  <button
                    onClick={() => selectAnswer(opt.value)}
                    onMouseEnter={() => setHoveredOption(`${currentQ.id}-${opt.value}`)}
                    onMouseLeave={() => setHoveredOption(null)}
                    style={{
                      width: "100%", textAlign: "left", cursor: "pointer",
                      padding: "16px 20px", borderRadius: 12,
                      border: `1px solid ${isSelected ? T.green : isHovered ? T.borderHover : T.border}`,
                      background: isSelected ? T.greenBg : isHovered ? "rgba(0,0,0,0.01)" : T.white,
                      fontSize: 15, fontWeight: 500, color: T.text,
                      transition: "all 0.2s",
                      display: "flex", alignItems: "center", gap: 14,
                    }}
                  >
                    <span
                      style={{
                        width: 22, height: 22, borderRadius: "50%", flexShrink: 0,
                        border: `2px solid ${isSelected ? T.green : T.border}`,
                        background: isSelected ? T.green : "transparent",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.2s",
                      }}
                    >
                      {isSelected && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2.5 6L5 8.5L9.5 3.5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </span>
                    {opt.label}
                  </button>
                </Reveal>
              )
            })}
          </div>

          {/* Back button */}
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              style={{
                marginTop: 20, background: "none", border: "none",
                color: T.text3, fontSize: 14, fontWeight: 500,
                cursor: "pointer", display: "flex", alignItems: "center", gap: 6,
              }}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M10 4L6 8L10 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Back
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
