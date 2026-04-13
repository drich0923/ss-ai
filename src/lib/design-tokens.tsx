"use client"

import { useRef, useState, useEffect, type ReactNode, type CSSProperties } from "react"

// ── DESIGN TOKENS ──
export const T = {
  // Primary — green accent (SS-AI brand)
  green: "#10B981",
  greenLight: "#34D399",
  greenBg: "rgba(16,185,129,0.06)",
  greenBorder: "rgba(16,185,129,0.14)",
  // Secondary
  blue: "#3361FF",
  blueLight: "#5B82FF",
  // Semantic
  red: "#EF4444",
  redLight: "#F87171",
  amber: "#F59E0B",
  // Neutrals
  dark: "#0F1117",
  darkCard: "#1A1B23",
  text: "#0F1117",
  text2: "#4B5563",
  text3: "#9CA3AF",
  white: "#FFFFFF",
  bg: "#FAFBFC",
  border: "#E5E7EB",
  borderHover: "#D1D5DB",
}

// ── CUSTOM HOOKS ──

export function useScrollReveal(threshold = 0.1): [React.RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true)
          obs.unobserve(el)
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}

export function useScrollY() {
  const [y, setY] = useState(0)
  useEffect(() => {
    const h = () => setY(window.scrollY)
    window.addEventListener("scroll", h, { passive: true })
    return () => window.removeEventListener("scroll", h)
  }, [])
  return y
}

export function useCounter(end: number, duration = 2000, active = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!active) return
    let start = 0
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min((ts - start) / duration, 1)
      setVal(Math.floor(p * end))
      if (p < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [active, end, duration])
  return val
}

export function useScrollProgress(offset = 0.3): [React.RefObject<HTMLDivElement | null>, number] {
  const ref = useRef<HTMLDivElement | null>(null)
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const handle = () => {
      const rect = el.getBoundingClientRect()
      const windowH = window.innerHeight
      const start = windowH
      const end = windowH * offset
      const current = rect.top
      const p = Math.max(0, Math.min(1, (start - current) / (start - end)))
      setProgress(p)
    }
    window.addEventListener("scroll", handle, { passive: true })
    handle()
    return () => window.removeEventListener("scroll", handle)
  }, [offset])
  return [ref, progress]
}

// ── ANIMATION COMPONENTS ──

export function Reveal({
  children,
  delay = 0,
  className = "",
  style = {},
}: {
  children: ReactNode
  delay?: number
  className?: string
  style?: CSSProperties
}) {
  const [ref, visible] = useScrollReveal()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}

export function StaggerChildren({
  children,
  baseDelay = 0,
  stagger = 0.08,
  className = "",
  style = {},
}: {
  children: ReactNode
  baseDelay?: number
  stagger?: number
  className?: string
  style?: CSSProperties
}) {
  const [ref, visible] = useScrollReveal()
  return (
    <div ref={ref} className={className} style={style}>
      {Array.isArray(children)
        ? children.map((child, i) => (
            <div
              key={i}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.5s ease ${baseDelay + i * stagger}s, transform 0.5s ease ${baseDelay + i * stagger}s`,
              }}
            >
              {child}
            </div>
          ))
        : children}
    </div>
  )
}
