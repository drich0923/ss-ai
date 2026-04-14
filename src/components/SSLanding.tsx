"use client"

import { useState, useEffect } from "react"
import { T, useScrollY, useScrollReveal, Reveal, StaggerChildren } from "@/lib/design-tokens"
import { ecosystemModules, siteStats } from "@/lib/site-data"
import { HubMockup, CallCoachingMockup } from "@/components/ProductMockups"
import NeedsAnalysis from "@/components/NeedsAnalysis"

// ── DOT BACKGROUND ──
const dotBg =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMS4yIiBmaWxsPSJyZ2JhKDE2LDE4NSwxMjksMC4wOCkiLz48L3N2Zz4="

// ── APP ACCENT COLORS ──
const appColors: Record<string, string> = {
  "ai-call-coaching": "#8cb2ff",
  "manager-os": T.green,
  "commission-tracker": "#a78bfa",
  "setter-eod": "#f472b6",
  "client-health": "#f4c24a",
  "revenue-visibility": "#ff8f4d",
  "owner-radar": "#EF4444",
  "rep-onboarding": "#38bdf8",
  "closer-playbook": "#818cf8",
  "qc-dashboard": "#fb923c",
  "sales-onboarding": T.greenLight,
}

// ── NAV ──
function Nav() {
  const scrollY = useScrollY()
  const scrolled = scrollY > 40
  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "14px 32px",
        background: scrolled ? "rgba(250,251,252,0.95)" : "rgba(250,251,252,0.8)",
        backdropFilter: "blur(24px)",
        borderBottom: `1px solid ${scrolled ? T.border : "transparent"}`,
        transition: "all 0.3s",
      }}
    >
      <div style={{ maxWidth: 1140, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src="/ss-logo.svg" alt="Systemized Sales AI" style={{ height: 32 }} />
          <span style={{ fontWeight: 700, fontSize: 15, color: T.text }}>Systemized Sales</span>
        </a>
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          {[
            { label: "Apps", href: "#apps" },
            { label: "How It Works", href: "#howitworks" },
            { label: "FAQ", href: "#faq" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              style={{ fontSize: 14, fontWeight: 500, color: T.text2, textDecoration: "none", transition: "color 0.2s" }}
              onMouseOver={(e) => ((e.target as HTMLElement).style.color = T.text)}
              onMouseOut={(e) => ((e.target as HTMLElement).style.color = T.text2)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#quiz"
            style={{
              padding: "10px 24px", borderRadius: 10, background: T.green, color: "#fff",
              fontWeight: 600, fontSize: 14, textDecoration: "none",
              boxShadow: "0 1px 3px rgba(16,185,129,0.2)", transition: "all 0.2s",
            }}
          >
            Find My Leak
          </a>
        </div>
      </div>
    </nav>
  )
}

// ── HERO ──
function Hero() {
  return (
    <section style={{ padding: "160px 32px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
      {/* Green glow */}
      <div
        style={{
          position: "absolute", top: 40, left: "50%", transform: "translateX(-50%)",
          width: 700, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(16,185,129,0.05) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />
      <Reveal>
        <div
          style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            padding: "7px 16px 7px 10px", borderRadius: 100,
            background: T.white, border: `1px solid ${T.border}`,
            fontSize: 13, fontWeight: 500, color: T.text2,
            boxShadow: "0 1px 4px rgba(0,0,0,0.03)", marginBottom: 36,
          }}
        >
          <span
            style={{
              width: 7, height: 7, borderRadius: "50%", background: T.green,
              boxShadow: "0 0 6px rgba(16,185,129,0.4)",
              animation: "pulse 2s infinite",
            }}
          />
          Used by high-ticket teams doing $50k–$500k+/mo in sales
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h1
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(44px, 6vw, 72px)", lineHeight: 1.08,
            letterSpacing: -1.5, maxWidth: 820, margin: "0 auto 24px",
          }}
        >
          Your reps are leaking revenue.{" "}
          <em style={{ fontStyle: "italic", color: T.green }}>We fix that.</em>
        </h1>
      </Reveal>
      <Reveal delay={0.16}>
        <p style={{ fontSize: "clamp(16px, 1.8vw, 19px)", color: T.text2, maxWidth: 600, margin: "0 auto 40px", lineHeight: 1.65 }}>
          Most sales teams lose 20–40% of revenue to bad calls, missed follow-ups, and zero accountability. We built a platform that plugs every hole &mdash; from AI call scoring to commission payouts. Pick the one bleeding the most. Launch it in 14 days.
        </p>
      </Reveal>
      <Reveal delay={0.24}>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="#quiz" className="btn-primary">
            Show Me What&apos;s Broken <span className="arrow-icon">&rarr;</span>
          </a>
          <a href="#apps" className="btn-ghost">See the Apps</a>
        </div>
      </Reveal>
    </section>
  )
}

// ── STATS BAR ──
function StatsBar() {
  return (
    <div style={{ padding: "0 32px 80px" }}>
      <StaggerChildren
        style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, maxWidth: 900, margin: "0 auto" }}
      >
        {siteStats.map((stat) => (
          <div
            key={stat.label}
            style={{
              textAlign: "center", padding: "28px 20px", borderRadius: 16,
              border: `1px solid ${T.border}`, background: T.white,
            }}
          >
            <div style={{ fontSize: 32, fontWeight: 700, color: T.green, marginBottom: 8 }}>
              {stat.value}
            </div>
            <div style={{ fontSize: 14, color: T.text2, lineHeight: 1.5 }}>{stat.label}</div>
          </div>
        ))}
      </StaggerChildren>
    </div>
  )
}

// ── BEFORE / AFTER ──
function BeforeAfter() {
  return (
    <div style={{ padding: "80px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p style={{ textAlign: "center", fontSize: 13, textTransform: "uppercase", letterSpacing: 2.5, color: T.text3, fontWeight: 600, marginBottom: 40 }}>
            This is what&apos;s actually happening inside your sales team right now
          </p>
        </Reveal>
        <div className="ba-grid" style={{ display: "grid", gridTemplateColumns: "1fr 60px 1fr", alignItems: "stretch", gap: 0 }}>
          {/* BEFORE */}
          <Reveal delay={0.1}>
            <div
              style={{
                padding: 32, borderRadius: 16,
                border: `1px solid ${T.border}`, background: T.white,
                position: "relative",
              }}
            >
              <div
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "4px 12px", borderRadius: 8,
                  background: "rgba(239,68,68,0.08)", color: T.red,
                  fontSize: 12, fontWeight: 600, marginBottom: 20,
                }}
              >
                Before
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>
                What you&apos;re doing now
              </h3>
              <div style={{ display: "grid", gap: 12 }}>
                {[
                  "Your worst closer had 6 bad calls last week. Nobody noticed.",
                  "Managers coach from memory — if they coach at all.",
                  "Commission disputes eat 3+ hours every pay period.",
                  "Setters report numbers in Slack. Nobody analyzes them.",
                  "You find out an account is dying when the revenue stops.",
                  "New reps take 60+ days to ramp because onboarding is a mess.",
                ].map((pain) => (
                  <div key={pain} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ color: T.red, fontSize: 16, lineHeight: 1.4, flexShrink: 0 }}>&times;</span>
                    <span style={{ fontSize: 14, color: T.text2, lineHeight: 1.5 }}>{pain}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Arrow */}
          <div className="ba-arrow" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Reveal delay={0.2}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={T.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m0 0l-6-6m6 6l-6 6" />
              </svg>
            </Reveal>
          </div>

          {/* AFTER */}
          <Reveal delay={0.15}>
            <div
              style={{
                padding: 32, borderRadius: 16,
                border: `1px solid ${T.greenBorder}`,
                background: T.greenBg,
              }}
            >
              <div
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  padding: "4px 12px", borderRadius: 8,
                  background: "rgba(16,185,129,0.1)", color: T.green,
                  fontSize: 12, fontWeight: 600, marginBottom: 20,
                }}
              >
                After
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>
                What changes in 14 days
              </h3>
              <div style={{ display: "grid", gap: 12 }}>
                {[
                  "AI grades every single call. Weak openers, bad closes — flagged instantly.",
                  "Managers open one queue and know exactly who to coach and why.",
                  "Reps submit cash, system calculates commission. Zero disputes.",
                  "Setters log EODs in 60 seconds. You see pickup rate, booking rate, show rate.",
                  "At-risk accounts trigger alerts before revenue drops.",
                  "New reps follow a day-by-day portal with tests. They ramp in half the time.",
                ].map((benefit) => (
                  <div key={benefit} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                      <rect width="18" height="18" rx="5" fill={T.greenBg} />
                      <path d="M5.5 9L8 11.5L12.5 6.5" stroke={T.green} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{ fontSize: 14, color: T.text, lineHeight: 1.5 }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  )
}

// ── APPS GRID ──
function AppsGrid() {
  return (
    <section id="apps" style={{ padding: "80px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 2.5, color: T.green, fontWeight: 600, marginBottom: 12, textAlign: "center" }}>
            One platform, pick what you need
          </p>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(32px, 4vw, 50px)", lineHeight: 1.08, letterSpacing: -1, textAlign: "center", maxWidth: 700, margin: "0 auto 48px" }}>
            Every app kills a specific revenue leak.
          </h2>
        </Reveal>
        <StaggerChildren style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="apps-grid">
          {ecosystemModules.map((mod) => (
            <a
              key={mod.slug}
              href={`/products/${mod.slug}`}
              style={{
                display: "block", padding: 28, borderRadius: 16,
                border: `1px solid ${T.border}`, background: T.white,
                textDecoration: "none", transition: "all 0.25s",
              }}
              className="hover-card"
            >
              <div
                style={{
                  width: 40, height: 40, borderRadius: 12,
                  border: `1.5px solid ${appColors[mod.slug] || T.green}`,
                  marginBottom: 16, display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <div style={{ width: 12, height: 12, borderRadius: 4, background: appColors[mod.slug] || T.green }} />
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8, color: T.text }}>{mod.title}</h3>
              <p style={{ fontSize: 14, color: T.text2, lineHeight: 1.55, marginBottom: 16 }}>{mod.summary}</p>
              <span style={{ fontSize: 13, fontWeight: 600, color: T.green }}>
                Learn more &rarr;
              </span>
            </a>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── FLAGSHIP FEATURE ──
function FlagshipFeature() {
  return (
    <section style={{ padding: "80px 32px" }}>
      <div className="feature-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 48, alignItems: "center" }}>
        <Reveal>
          <div>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "6px 14px", borderRadius: 8,
                background: T.greenBg, border: `1px solid ${T.greenBorder}`,
                fontSize: 12, fontWeight: 600, color: T.green,
                marginBottom: 20, textTransform: "uppercase", letterSpacing: 1,
              }}
            >
              &#9889; Most teams start here
            </div>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", lineHeight: 1.1, letterSpacing: -0.5, marginBottom: 16 }}>
              Your managers listen to 5% of calls. AI reviews 100%.
            </h2>
            <p style={{ fontSize: 16, color: T.text2, lineHeight: 1.65, marginBottom: 28 }}>
              Every call gets scored. Every weak opener, fumbled close, and missed objection gets flagged. Managers stop guessing and start coaching from data.
            </p>
            <div style={{ display: "grid", gap: 14 }}>
              {[
                "Pull transcripts from sources like RevPhlo and Fathom",
                "Use client-specific scorecards by rep type",
                "Generate AI flags, summaries, rankings, and assignments",
                "Give managers a review queue for the right calls first",
              ].map((cap) => (
                <div key={cap} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                    <rect width="20" height="20" rx="6" fill={T.greenBg} />
                    <path d="M6 10L9 13L14 7" stroke={T.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: 15, color: T.text, lineHeight: 1.5 }}>{cap}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 32, display: "flex", gap: 12 }}>
              <a
                href="/products/ai-call-coaching"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  padding: "12px 24px", borderRadius: 12,
                  background: T.green, color: "#fff",
                  fontWeight: 600, fontSize: 14, textDecoration: "none",
                  transition: "all 0.25s", boxShadow: "0 2px 10px rgba(16,185,129,0.2)",
                }}
              >
                Explore AI Call Coaching &rarr;
              </a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <CallCoachingMockup />
        </Reveal>
      </div>
    </section>
  )
}

// ── NEEDS ANALYSIS CTA ──
function NeedsAnalysisCTA() {
  return (
    <section style={{ padding: "60px 32px" }}>
      <Reveal>
        <div
          style={{
            maxWidth: 800, margin: "0 auto", textAlign: "center",
            padding: "48px 40px", borderRadius: 20,
            background: "linear-gradient(135deg, rgba(16,185,129,0.06), rgba(51,97,255,0.04))",
            border: `1px solid ${T.greenBorder}`,
          }}
        >
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 40px)", lineHeight: 1.1, marginBottom: 12 }}>
            You don&apos;t need every app. You need the right one first.
          </h2>
          <p style={{ fontSize: 17, color: T.text2, lineHeight: 1.65, marginBottom: 28, maxWidth: 560, margin: "0 auto 28px" }}>
            Answer 5 questions. We&apos;ll tell you exactly which app to launch first, why it&apos;s the biggest lever, and how fast you&apos;ll see results. Takes 90 seconds.
          </p>
          <a
            href="#quiz"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 28px", borderRadius: 12,
              background: T.green, color: "#fff",
              fontWeight: 600, fontSize: 15, textDecoration: "none",
              boxShadow: "0 2px 10px rgba(16,185,129,0.2)", transition: "all 0.25s",
            }}
          >
            Find My Biggest Revenue Leak &rarr;
          </a>
        </div>
      </Reveal>
    </section>
  )
}

// ── AUDIENCE SECTION ──
function Audience() {
  const audiences = [
    { title: "Setter Teams (5+ reps)", desc: "Your setters are dialing 100+ times a day. Without EOD tracking and AI call scoring, you have no idea who's producing and who's coasting. We fix that in week one." },
    { title: "Closer Teams ($5k+ tickets)", desc: "One fumbled discovery call on a $10k deal is $10k gone. AI catches weak closes, missing urgency, and poor objection handling — across every rep, every call." },
    { title: "Agencies (multi-client)", desc: "Each client gets their own rubrics, dashboards, and coaching queue. You stop stitching together client updates from Slack threads and spreadsheets." },
    { title: "Portfolio Operators", desc: "You manage 3–15 brands. Owner Radar alerts you when an account goes quiet, a payment plan goes past due, or quality drops below threshold. No more surprise fires." },
  ]
  return (
    <section style={{ padding: "80px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 2.5, color: T.green, fontWeight: 600, marginBottom: 12, textAlign: "center" }}>
            This is built for you if
          </p>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", lineHeight: 1.1, textAlign: "center", marginBottom: 48 }}>
            You know the team is underperforming. You just can&apos;t prove where.
          </h2>
        </Reveal>
        <StaggerChildren style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="audience-grid">
          {audiences.map((a) => (
            <div
              key={a.title}
              style={{
                padding: 24, borderRadius: 16,
                border: `1px solid ${T.border}`, background: T.white,
                transition: "all 0.25s",
              }}
              className="hover-card"
            >
              <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{a.title}</h3>
              <p style={{ fontSize: 14, color: T.text2, lineHeight: 1.55 }}>{a.desc}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── HOW IT WORKS ──
function HowItWorks() {
  const steps = [
    { num: "01", title: "Find the leak (90 seconds)", desc: "Answer 5 questions about your team. We tell you which app to install first and exactly what it fixes." },
    { num: "02", title: "We build it for you (14 days)", desc: "No DIY setup. We configure the app, connect your data sources, calibrate against your real calls, and train your managers." },
    { num: "03", title: "See results in the first week", desc: "By day 7 you have data. By day 14 your managers are coaching from it. By day 30 you wonder how you ran without it." },
  ]
  return (
    <section id="howitworks" style={{ padding: "80px 32px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Reveal>
          <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 2.5, color: T.green, fontWeight: 600, marginBottom: 12, textAlign: "center" }}>
            How it works
          </p>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", lineHeight: 1.1, textAlign: "center", marginBottom: 48 }}>
            From &ldquo;we have a problem&rdquo; to &ldquo;we have the data&rdquo; in 14 days.
          </h2>
        </Reveal>
        <StaggerChildren style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="hiw-grid">
          {steps.map((s) => (
            <div
              key={s.num}
              style={{
                padding: 28, borderRadius: 16,
                border: `1px solid ${T.border}`, background: T.white,
              }}
            >
              <div style={{ fontSize: 32, fontWeight: 700, color: T.green, marginBottom: 12, fontFamily: "'DM Serif Display', Georgia, serif" }}>
                {s.num}
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 8 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: T.text2, lineHeight: 1.55 }}>{s.desc}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── FAQ ──
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div
      style={{
        borderBottom: `1px solid ${T.border}`,
        padding: "20px 0",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", display: "flex", justifyContent: "space-between",
          alignItems: "center", gap: 16, background: "none", border: "none",
          cursor: "pointer", textAlign: "left",
          fontSize: 16, fontWeight: 600, color: T.text,
          padding: 0,
        }}
      >
        {q}
        <svg
          width="20" height="20" viewBox="0 0 20 20" fill="none"
          style={{ flexShrink: 0, transform: open ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.25s" }}
        >
          <path d="M5 8L10 13L15 8" stroke={T.text3} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div
        style={{
          maxHeight: open ? 300 : 0, overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p style={{ fontSize: 15, color: T.text2, lineHeight: 1.65, paddingTop: 12 }}>
          {a}
        </p>
      </div>
    </div>
  )
}

function FAQ() {
  const faqs = [
    { q: "What kind of sales teams is this built for?", a: "If you have setters, closers, or both — and you're doing $50k/mo+ in sales — this is built for you. Agencies, portfolio operators, and teams running high-ticket offers on calls. If your team sells over the phone and you can't see what's happening on those calls, start here." },
    { q: "Do I need every app?", a: "No. Most teams start with one — usually AI Call Coaching or Commission Tracker — and add more as the operating rhythm matures. Each app solves a specific problem. Take the needs analysis and we'll tell you which one to launch first." },
    { q: "How long until I see results?", a: "Your first app is live in 14 days. We handle setup, data connections, and manager training. Most teams have usable coaching data by day 7 and are running a new management rhythm by day 30." },
    { q: "What if I already use GHL, Fathom, or RevPhlo?", a: "Good — that's exactly what we plug into. Call transcripts sync from Fathom and RevPhlo. Pipeline data syncs from GHL via webhooks. Payments sync from Stripe. If your tools are already collecting data, we turn that data into operating systems." },
    { q: "How does pricing work?", a: "AI Call Coaching starts around $2.5k/month plus a one-time setup fee. Additional apps are priced as expansions based on team size and usage. Most multi-module accounts pay less per app as they add more." },
    { q: "Can I see a demo before committing?", a: "Yes. Take the 90-second needs analysis, then book a call. We'll walk you through the exact app that matches your team's biggest bottleneck — with your data, not a generic demo." },
  ]
  return (
    <section id="faq" style={{ padding: "80px 32px" }}>
      <div style={{ maxWidth: 720, margin: "0 auto" }}>
        <Reveal>
          <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 2.5, color: T.green, fontWeight: 600, marginBottom: 12, textAlign: "center" }}>
            FAQ
          </p>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", lineHeight: 1.1, textAlign: "center", marginBottom: 40 }}>
            Before you ask.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div>
            {faqs.map((f) => (
              <FAQItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ── FINAL CTA ──
function FinalCTA() {
  return (
    <section id="book" style={{ padding: "80px 32px 100px" }}>
      <Reveal>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(32px, 4vw, 50px)", lineHeight: 1.08, letterSpacing: -1, marginBottom: 16 }}>
            Every week you wait, bad calls close at a lower rate and your best reps carry the ones who should be coached or cut.
          </h2>
          <p style={{ fontSize: 17, color: T.text2, lineHeight: 1.65, marginBottom: 36, maxWidth: 560, margin: "0 auto 36px" }}>
            Take 90 seconds to find which app stops the bleeding. Or book a call and we&apos;ll tell you directly.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="#quiz" className="btn-primary">
              Find My Biggest Leak <span className="arrow-icon">&rarr;</span>
            </a>
            <a
              href="mailto:dylan.rich@systemizedsales.com?subject=Systemized%20Sales%20AI%20Demo"
              className="btn-ghost"
            >
              Book a Call Instead
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

// ── DIVIDER ──
function Divider() {
  return <div style={{ height: 1, background: T.border }} />
}

// ── FOOTER ──
function Footer() {
  return (
    <footer style={{ padding: "48px 32px 36px", textAlign: "center", borderTop: `1px solid ${T.border}` }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 24, marginBottom: 16 }}>
        <a
          href="mailto:dylan.rich@systemizedsales.com"
          style={{ fontSize: 13, color: T.text3, textDecoration: "none", transition: "color 0.2s" }}
          onMouseOver={(e) => ((e.target as HTMLElement).style.color = T.text2)}
          onMouseOut={(e) => ((e.target as HTMLElement).style.color = T.text3)}
        >
          Contact
        </a>
      </div>
      <p style={{ fontSize: 13, color: T.text3 }}>&copy; 2025 Systemized Sales AI. All rights reserved.</p>
    </footer>
  )
}

// ── MAIN ──
export default function SSLanding() {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', -apple-system, sans-serif",
        backgroundColor: T.bg,
        backgroundImage: `url("${dotBg}")`,
        backgroundRepeat: "repeat",
        backgroundSize: "24px 24px",
        color: T.text,
        lineHeight: 1.6,
        overflowX: "hidden",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      <style>{`
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.35; } }
        .btn-primary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 15px 30px; border-radius: 12px; background: ${T.green};
          color: #fff; font-weight: 600; font-size: 15px; text-decoration: none;
          transition: all 0.25s; box-shadow: 0 2px 10px rgba(16,185,129,0.2);
          border: none; cursor: pointer;
        }
        .btn-primary:hover { box-shadow: 0 6px 20px rgba(16,185,129,0.28); transform: translateY(-2px); }
        .btn-primary:hover .arrow-icon { transform: translateX(3px); }
        .arrow-icon { display: inline-block; transition: transform 0.2s; }
        .btn-ghost {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 15px 30px; border-radius: 12px; background: transparent;
          border: 1px solid ${T.border}; color: ${T.text}; font-weight: 600;
          font-size: 15px; text-decoration: none; transition: all 0.25s;
        }
        .btn-ghost:hover { border-color: ${T.borderHover}; background: ${T.white}; transform: translateY(-2px); }
        .hover-card:hover { transform: translateY(-3px); box-shadow: 0 8px 30px rgba(0,0,0,0.06); }

        @media (max-width: 768px) {
          .nav-links a:not(:last-child) { display: none !important; }
          .nav-links { gap: 0 !important; }
          section { padding-left: 20px !important; padding-right: 20px !important; }
          .ba-grid { grid-template-columns: 1fr !important; gap: 20px !important; }
          .ba-arrow svg { transform: rotate(90deg); }
          .feature-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .feature-grid > div { direction: ltr !important; }
          .apps-grid { grid-template-columns: 1fr 1fr !important; }
          .audience-grid { grid-template-columns: 1fr 1fr !important; }
          .hiw-grid { grid-template-columns: 1fr !important; gap: 16px !important; }
          h1 { font-size: 36px !important; }
          .hover-card { padding: 10px 16px !important; font-size: 13px !important; }
        }

        @media (max-width: 480px) {
          h1 { font-size: 30px !important; }
          .btn-primary, .btn-ghost { padding: 12px 22px !important; font-size: 14px !important; }
          .audience-grid { grid-template-columns: 1fr !important; }
          .apps-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Nav />
      <Hero />
      <StatsBar />
      <BeforeAfter />
      <Divider />
      <AppsGrid />
      <FlagshipFeature />
      <NeedsAnalysisCTA />
      <NeedsAnalysis />
      <Divider />
      <Audience />
      <Divider />
      <HowItWorks />
      <Divider />
      <FAQ />
      <Divider />
      <FinalCTA />
      <Footer />
    </div>
  )
}
