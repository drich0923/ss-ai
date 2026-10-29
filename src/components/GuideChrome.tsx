"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import AuditModal from "./AuditModal"
import GuideFooterLinks from "./GuideFooterLinks"
import LegalFooterLinks from "./LegalFooterLinks"
import Logo from "./Logo"
import { ecosystemModules } from "@/lib/site-data"

export default function GuideChrome({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="wrap site-header-inner">
          <Link href="/" className="brand">
            <Logo />
          </Link>
          <nav className="site-nav">
            <Link href="/#apps">THE SYSTEM</Link>
            <Link href="/#results">RESULTS</Link>
            <Link href="/#guides">GUIDES</Link>
            <Link href="/#faq">FAQ</Link>
          </nav>
          <div className="site-cta">
            <a href="mailto:sales@systemizedsales.ai" className="link-dim">sales@systemizedsales.ai</a>
            <button onClick={() => setOpen(true)} className="btn btn-primary">Book a call →</button>
          </div>
        </div>
      </header>
      {children}
      <footer className="site-footer">
        <div className="wrap footer-inner">
          <div className="footer-brand">
            <Logo />
            <div className="mono xs ink-mute">the sales team os</div>
          </div>
          <div className="footer-cols">
            <div className="footer-col">
              <div className="eyebrow">INCLUDED</div>
              {ecosystemModules.slice(0, 5).map(item => (
                <Link key={item.slug} href={item.href}>{item.title}</Link>
              ))}
            </div>
            <div className="footer-col">
              <div className="eyebrow">ALSO INCLUDED</div>
              {ecosystemModules.slice(5).map(item => (
                <Link key={item.slug} href={item.href}>{item.title}</Link>
              ))}
            </div>
            <GuideFooterLinks />
            <div className="footer-col">
              <div className="eyebrow">CONTACT</div>
              <a href="mailto:sales@systemizedsales.ai">sales@systemizedsales.ai</a>
              <Link href="/#cta">Book a call →</Link>
            </div>
          </div>
        </div>
        <div className="wrap footer-bottom">
          <span className="ink-mute">© 2026 SYSTEMIZED SALES AI</span>
          <LegalFooterLinks />
          <span className="ink-mute">BUILT FOR HIGH-TICKET SALES TEAMS</span>
        </div>
      </footer>
      <AuditModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
