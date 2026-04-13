"use client"

import { T, useScrollY, Reveal, StaggerChildren } from "@/lib/design-tokens"
import { ProductMockup } from "@/components/ProductMockups"
import type { ProductModule } from "@/lib/site-data"

const dotBg =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMS4yIiBmaWxsPSJyZ2JhKDE2LDE4NSwxMjksMC4wOCkiLz48L3N2Zz4="

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
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <img src="/ss-logo.svg" alt="Systemized Sales AI" style={{ height: 32 }} />
          <span style={{ fontWeight: 700, fontSize: 15, color: T.text }}>Systemized Sales</span>
        </a>
        <div className="nav-links" style={{ display: "flex", alignItems: "center", gap: 32 }}>
          <a href="/#apps" style={{ fontSize: 14, fontWeight: 500, color: T.text2, textDecoration: "none" }}>All Apps</a>
          <a
            href="mailto:dylan.rich@systemizedsales.com?subject=Demo%20Request"
            style={{
              padding: "10px 24px", borderRadius: 10, background: T.green, color: "#fff",
              fontWeight: 600, fontSize: 14, textDecoration: "none",
              boxShadow: "0 1px 3px rgba(16,185,129,0.2)", transition: "all 0.2s",
            }}
          >
            Book a Call
          </a>
        </div>
      </div>
    </nav>
  )
}

// ── HERO ──
function ProductHero({ product }: { product: ProductModule }) {
  return (
    <section style={{ padding: "160px 32px 80px", textAlign: "center", position: "relative", overflow: "hidden" }}>
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
            padding: "7px 16px", borderRadius: 100,
            background: T.greenBg, border: `1px solid ${T.greenBorder}`,
            fontSize: 12, fontWeight: 600, color: T.green,
            textTransform: "uppercase", letterSpacing: 1.5,
            marginBottom: 24,
          }}
        >
          {product.eyebrow}
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h1
          style={{
            fontFamily: "'DM Serif Display', Georgia, serif",
            fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.08,
            letterSpacing: -1.5, maxWidth: 780, margin: "0 auto 24px",
          }}
        >
          {product.heroTitle}
        </h1>
      </Reveal>
      <Reveal delay={0.16}>
        <p style={{ fontSize: "clamp(16px, 1.8vw, 19px)", color: T.text2, maxWidth: 560, margin: "0 auto 40px", lineHeight: 1.65 }}>
          {product.heroSummary}
        </p>
      </Reveal>
      <Reveal delay={0.24}>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="mailto:dylan.rich@systemizedsales.com?subject=Demo%20Request"
            className="btn-primary"
          >
            Book a Call <span className="arrow-icon">&rarr;</span>
          </a>
          <a href="/" className="btn-ghost">Back to Platform</a>
        </div>
      </Reveal>
    </section>
  )
}

// ── PAIN POINTS ──
function PainPoints({ product }: { product: ProductModule }) {
  return (
    <section style={{ padding: "80px 32px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Reveal>
          <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 2.5, color: T.red, fontWeight: 600, marginBottom: 12 }}>
            Why teams need this
          </p>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", lineHeight: 1.1, marginBottom: 40 }}>
            The problems this app solves.
          </h2>
        </Reveal>
        <StaggerChildren style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="pain-grid">
          {product.pains.map((pain) => (
            <div
              key={pain}
              style={{
                padding: 24, borderRadius: 14,
                border: `1px solid ${T.border}`, background: T.white,
                display: "flex", gap: 14, alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  width: 28, height: 28, borderRadius: 8, flexShrink: 0,
                  background: "rgba(239,68,68,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3.5 3.5L10.5 10.5M10.5 3.5L3.5 10.5" stroke={T.red} strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <p style={{ fontSize: 15, color: T.text, lineHeight: 1.5 }}>{pain}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── CAPABILITIES + MOCKUP ──
function Capabilities({ product }: { product: ProductModule }) {
  return (
    <section style={{ padding: "80px 32px" }}>
      <div className="feature-grid" style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 48, alignItems: "center" }}>
        <Reveal>
          <div>
            <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 2.5, color: T.green, fontWeight: 600, marginBottom: 12 }}>
              What&apos;s included
            </p>
            <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", lineHeight: 1.1, marginBottom: 28 }}>
              What buyers get with {product.name}.
            </h2>
            <div style={{ display: "grid", gap: 14 }}>
              {product.capabilities.map((cap) => (
                <div key={cap} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                    <rect width="20" height="20" rx="6" fill={T.greenBg} />
                    <path d="M6 10L9 13L14 7" stroke={T.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span style={{ fontSize: 15, color: T.text, lineHeight: 1.5 }}>{cap}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <ProductMockup slug={product.slug} />
        </Reveal>
      </div>
    </section>
  )
}

// ── FULFILLMENT / HOW IT WORKS ──
function Fulfillment({ product }: { product: ProductModule }) {
  return (
    <section style={{ padding: "80px 32px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Reveal>
          <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 2.5, color: T.green, fontWeight: 600, marginBottom: 12 }}>
            Implementation
          </p>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", lineHeight: 1.1, marginBottom: 40 }}>
            How we roll it out.
          </h2>
        </Reveal>
        <StaggerChildren style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(product.fulfillment.length, 4)}, 1fr)`, gap: 16 }} className="hiw-grid">
          {product.fulfillment.map((step, i) => (
            <div
              key={step}
              style={{
                padding: 24, borderRadius: 14,
                border: `1px solid ${T.border}`, background: T.white,
              }}
            >
              <div style={{ fontSize: 28, fontWeight: 700, color: T.green, marginBottom: 10, fontFamily: "'DM Serif Display', Georgia, serif" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <p style={{ fontSize: 15, color: T.text, lineHeight: 1.5 }}>{step}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── OUTCOMES ──
function Outcomes({ product }: { product: ProductModule }) {
  return (
    <section style={{ padding: "80px 32px" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Reveal>
          <p style={{ fontSize: 13, textTransform: "uppercase", letterSpacing: 2.5, color: T.green, fontWeight: 600, marginBottom: 12 }}>
            What changes after launch
          </p>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(28px, 3.5vw, 42px)", lineHeight: 1.1, marginBottom: 40 }}>
            The outcomes you can expect.
          </h2>
        </Reveal>
        <StaggerChildren style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(product.outcomes.length, 3)}, 1fr)`, gap: 16 }} className="outcome-grid">
          {product.outcomes.map((outcome) => (
            <div
              key={outcome}
              style={{
                padding: 24, borderRadius: 14,
                border: `1px solid ${T.greenBorder}`,
                background: T.greenBg,
                display: "flex", gap: 14, alignItems: "flex-start",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                <rect width="22" height="22" rx="6" fill="rgba(16,185,129,0.15)" />
                <path d="M6.5 11L9.5 14L15.5 8" stroke={T.green} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p style={{ fontSize: 15, color: T.text, lineHeight: 1.5 }}>{outcome}</p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  )
}

// ── AUDIENCE + PRICING ──
function AudiencePricing({ product }: { product: ProductModule }) {
  return (
    <section style={{ padding: "60px 32px" }}>
      <Reveal>
        <div
          style={{
            maxWidth: 700, margin: "0 auto",
            padding: "36px 40px", borderRadius: 16,
            background: "linear-gradient(135deg, rgba(16,185,129,0.06), rgba(51,97,255,0.04))",
            border: `1px solid ${T.greenBorder}`,
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32,
          }}
          className="audience-pricing"
        >
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: T.green, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
              Who this is for
            </p>
            <p style={{ fontSize: 16, color: T.text, lineHeight: 1.55, fontWeight: 500 }}>
              {product.audience}
            </p>
          </div>
          <div>
            <p style={{ fontSize: 12, fontWeight: 600, color: T.green, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 8 }}>
              Investment
            </p>
            <p style={{ fontSize: 16, color: T.text, lineHeight: 1.55, fontWeight: 500 }}>
              {product.pricing}
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

// ── FINAL CTA ──
function ProductCTA({ product }: { product: ProductModule }) {
  return (
    <section style={{ padding: "80px 32px 100px" }}>
      <Reveal>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(28px, 4vw, 44px)", lineHeight: 1.08, letterSpacing: -0.5, marginBottom: 16 }}>
            Ready to launch {product.name}?
          </h2>
          <p style={{ fontSize: 17, color: T.text2, lineHeight: 1.65, marginBottom: 36 }}>
            {product.leadValue}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="mailto:dylan.rich@systemizedsales.com?subject=Demo%20Request"
              className="btn-primary"
            >
              Book a Call <span className="arrow-icon">&rarr;</span>
            </a>
            <a href="/#apps" className="btn-ghost">
              Explore other apps
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
      <p style={{ fontSize: 13, color: T.text3 }}>&copy; 2025 Systemized Sales AI. All rights reserved.</p>
    </footer>
  )
}

// ── MAIN ──
export default function ProductPageLayout({ product }: { product: ProductModule }) {
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

        @media (max-width: 768px) {
          .nav-links a:not(:last-child) { display: none !important; }
          .nav-links { gap: 0 !important; }
          section { padding-left: 20px !important; padding-right: 20px !important; }
          .feature-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
          .pain-grid { grid-template-columns: 1fr !important; }
          .hiw-grid { grid-template-columns: 1fr !important; }
          .outcome-grid { grid-template-columns: 1fr !important; }
          .audience-pricing { grid-template-columns: 1fr !important; }
          h1 { font-size: 36px !important; }
        }

        @media (max-width: 480px) {
          h1 { font-size: 30px !important; }
          .btn-primary, .btn-ghost { padding: 12px 22px !important; font-size: 14px !important; }
        }
      `}</style>

      <Nav />
      <ProductHero product={product} />
      <Divider />
      <PainPoints product={product} />
      <Capabilities product={product} />
      <Divider />
      <Fulfillment product={product} />
      <Outcomes product={product} />
      <Divider />
      <AudiencePricing product={product} />
      <ProductCTA product={product} />
      <Footer />
    </div>
  )
}
