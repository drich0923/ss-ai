"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import type { ProductModule } from "@/lib/site-data"
import { ecosystemModules } from "@/lib/site-data"
import AuditModal from "./AuditModal"
import Logo from "./Logo"

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
          <Logo />
        </Link>
        <nav className="site-nav">
          <Link href="/#problem">PROBLEM</Link>
          <Link href="/#how">HOW IT WORKS</Link>
          <Link href="/#apps">WHAT'S INCLUDED</Link>
          <Link href="/#roi">THE MATH</Link>
          <Link href="/#faq">FAQ</Link>
        </nav>
        <div className="site-cta">
          <a href="mailto:sales@systemizedsales.ai" className="link-dim">sales@systemizedsales.ai</a>
          <button onClick={onBook} className="btn btn-primary">Book a call →</button>
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
          <Logo />
          <div className="mono xs ink-mute">the sales team os</div>
        </div>
        <div className="footer-cols">
          <div className="footer-col">
            <div className="eyebrow">INCLUDED</div>
            {ecosystemModules.slice(0, 5).map(m => (
              <Link key={m.slug} href={m.href.startsWith("#") ? `/${m.href}` : m.href}>{m.title}</Link>
            ))}
          </div>
          <div className="footer-col">
            <div className="eyebrow">ALSO INCLUDED</div>
            {ecosystemModules.slice(5).map(m => (
              <Link key={m.slug} href={m.href.startsWith("#") ? `/${m.href}` : m.href}>{m.title}</Link>
            ))}
          </div>
          <div className="footer-col">
            <div className="eyebrow">CONTACT</div>
            <a href="mailto:sales@systemizedsales.ai">sales@systemizedsales.ai</a>
            <Link href="/#cta">Book a call →</Link>
            <a href="https://www.revphlo.com" target="_blank" rel="noopener noreferrer">RevPhlo, included in the OS ↗</a>
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
                <button onClick={openModal} className="btn btn-primary">Book a 30-min call →</button>
                <Link href="/#apps" className="btn btn-ghost">← Back to all apps</Link>
              </div>
            </div>
            <div className="product-meta-card card">
              <div className="product-meta-row">
                <div className="product-meta-label">AUDIENCE</div>
                <div className="product-meta-v">{product.audience}</div>
              </div>
              <div className="product-meta-row">
                <div className="product-meta-label">SCOPING</div>
                <div className="product-meta-v">Custom scope set after your sales call.</div>
              </div>
              <div className="product-meta-row">
                <div className="product-meta-label">APP</div>
                <div className="product-meta-v">{product.name}</div>
              </div>
              <div className="product-meta-row">
                <div className="product-meta-label">STATUS</div>
                <div className="product-meta-v"><span className="live-dot" style={{ marginRight: 8 }} />Included in The Sales Team OS</div>
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
              <Link key={m.slug} href={m.href.startsWith("#") ? `/${m.href}` : m.href} className="related-card card">
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
              <p className="final-sub">30-minute call. We'll map your team and your tools, show you where the glue is, and tell you exactly what we'd set up. No deck. No pressure.</p>
              <div className="final-ctas">
                <button onClick={openModal} className="btn btn-primary">Book a 30-min call →</button>
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
