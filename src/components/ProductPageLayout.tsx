"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import type { ProductModule } from "@/lib/site-data"
import { ecosystemModules } from "@/lib/site-data"
import AuditModal from "./AuditModal"

function LogoMark() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="1" y="1" width="26" height="26" rx="4" stroke="currentColor" strokeOpacity=".35" />
      <path d="M8 10h8a3 3 0 0 1 0 6H10a3 3 0 0 0 0 6h10" stroke="#9cff4f" strokeWidth="1.8" fill="none" strokeLinecap="round" />
      <circle cx="20" cy="10" r="1.6" fill="#9cff4f" />
    </svg>
  )
}

function Header({ onBook }: { onBook: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap site-header-inner">
        <Link href="/" className="brand">
          <LogoMark />
          <span className="brand-name">SYSTEMIZED<span className="brand-thin">SALES</span></span>
        </Link>
        <nav className="site-nav">
          <Link href="/#problem">PROBLEM</Link>
          <Link href="/#how">HOW IT WORKS</Link>
          <Link href="/#apps">APPS</Link>
          <Link href="/#roi">ROI</Link>
          <Link href="/#faq">FAQ</Link>
        </nav>
        <div className="site-cta">
          <a href="mailto:sales@systemizedsales.ai" className="link-dim">sales@systemizedsales.ai</a>
          <button onClick={onBook} className="btn btn-primary">Book audit →</button>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <div className="footer-brand">
          <LogoMark />
          <div>
            <div className="brand-name">SYSTEMIZED<span className="brand-thin">SALES</span></div>
            <div className="mono xs ink-mute">the app store for your sales team</div>
          </div>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <div className="eyebrow">APPS</div>
            {ecosystemModules.slice(0, 5).map(m => (
              <Link key={m.slug} href={`/products/${m.slug}`}>{m.title}</Link>
            ))}
          </div>
          <div className="footer-col">
            <div className="eyebrow">MORE APPS</div>
            {ecosystemModules.slice(5).map(m => (
              <Link key={m.slug} href={`/products/${m.slug}`}>{m.title}</Link>
            ))}
          </div>
          <div className="footer-col">
            <div className="eyebrow">CONTACT</div>
            <a href="mailto:sales@systemizedsales.ai">sales@systemizedsales.ai</a>
            <Link href="/#cta">Book audit →</Link>
          </div>
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span className="ink-mute">© 2026 SYSTEMIZED SALES AI</span>
        <span className="ink-mute">BUILT FOR HIGH-TICKET SALES TEAMS</span>
        <span className="status-dot-inline"><span className="live-dot" /> ALL SYSTEMS OPERATIONAL</span>
      </div>
    </footer>
  )
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: React.ReactNode }) {
  return (
    <div className="section-header">
      <div className="eyebrow">{eyebrow}</div>
      <h2 className="display display-md">{title}</h2>
    </div>
  )
}

function ListGrid({ items }: { items: readonly string[] }) {
  return (
    <div className="product-section-grid">
      {items.map((item, i) => (
        <div key={i} className="product-list-item card reveal">
          <span className="product-list-n">{String(i + 1).padStart(2, "0")}</span>
          <span className="product-list-text">{item}</span>
        </div>
      ))}
    </div>
  )
}

export default function ProductPageLayout({ product }: { product: ProductModule }) {
  const [modalOpen, setModalOpen] = useState(false)
  const openModal = () => setModalOpen(true)

  useEffect(() => {
    const els = document.querySelectorAll(".reveal")
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("in") }),
      { threshold: 0.1 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])

  const related = ecosystemModules.filter(m => m.slug !== product.slug).slice(0, 3)

  return (
    <>
      <Header onBook={openModal} />

      <section className="product-hero">
        <div className="hero-bg-grid grid-bg" aria-hidden />
        <div className="hero-glow" aria-hidden />
        <div className="wrap hero-inner">
          <div className="product-hero-grid">
            <div>
              <div className="product-eyebrow"><span className="status-dot">{product.eyebrow.toUpperCase()}</span></div>
              <h1 className="product-title">{product.heroTitle}</h1>
              <p className="product-summary">{product.heroSummary}</p>
              <p className="mono sm ink-dim" style={{ marginBottom: 24 }}>{product.leadValue}</p>
              <div className="hero-cta-row">
                <button onClick={openModal} className="btn btn-primary">Book 30-min audit →</button>
                <Link href="/#apps" className="btn btn-ghost">← Back to all apps</Link>
              </div>
            </div>
            <div className="product-meta-card card">
              <div className="product-meta-row">
                <div className="product-meta-label">AUDIENCE</div>
                <div className="product-meta-v">{product.audience}</div>
              </div>
              <div className="product-meta-row">
                <div className="product-meta-label">PRICING</div>
                <div className="product-meta-v">{product.pricing}</div>
              </div>
              <div className="product-meta-row">
                <div className="product-meta-label">APP</div>
                <div className="product-meta-v">{product.name}</div>
              </div>
              <div className="product-meta-row">
                <div className="product-meta-label">STATUS</div>
                <div className="product-meta-v"><span className="live-dot" style={{ marginRight: 8 }} />Live · shipping in 14 days</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeader eyebrow="THE PAIN" title={<>What we keep hearing<br /><span className="ink-mute">from teams like yours.</span></>} />
          <ListGrid items={product.pains} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeader eyebrow="CAPABILITIES" title={<>What the app <em className="italic-neon">actually does.</em></>} />
          <ListGrid items={product.capabilities} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeader eyebrow="FULFILLMENT" title={<>How we ship it.<br /><span className="ink-mute">Zero DIY setup.</span></>} />
          <ListGrid items={product.fulfillment} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeader eyebrow="OUTCOMES" title={<>What changes <em className="italic-neon">after launch.</em></>} />
          <ListGrid items={product.outcomes} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeader eyebrow="IMPLEMENTATION" title={<>The rollout path.</>} />
          <ListGrid items={product.implementation} />
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHeader eyebrow="RELATED APPS" title={<>Pairs well with.</>} />
          <div className="related-grid">
            {related.map(m => (
              <Link key={m.slug} href={`/products/${m.slug}`} className="related-card card">
                <div className="related-card-t">{m.title}</div>
                <div className="related-card-d">{m.summary}</div>
                <div className="related-card-cta">LEARN MORE →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="section">
        <div className="wrap">
          <div className="final-card">
            <div className="grid-bg final-bg" aria-hidden />
            <div className="final-inner">
              <div className="status-dot">READY TO SHIP</div>
              <h2 className="display display-lg final-t">Let's build <em className="italic-neon">{product.name}</em><br />for your team.</h2>
              <p className="final-sub">30-minute audit call. We'll map your current motion, find the three highest-leverage builds, and send you a written diagnosis within 48 hours.</p>
              <div className="final-ctas">
                <button onClick={openModal} className="btn btn-primary">Book 30-min audit →</button>
                <a href="mailto:sales@systemizedsales.ai" className="btn btn-ghost">sales@systemizedsales.ai</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AuditModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
