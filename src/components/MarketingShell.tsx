import Link from "next/link"

type MarketingShellProps = {
  children: React.ReactNode
}

const navLinks = [
  { href: "/platform", label: "Platform" },
  { href: "/products", label: "Apps" },
  { href: "/products/ai-call-coaching", label: "AI Call Coaching" },
] as const

export default function MarketingShell({ children }: MarketingShellProps) {
  return (
    <div className="site-shell">
      <div className="site-glow site-glow-one" />
      <div className="site-glow site-glow-two" />
      <header className="site-header">
        <div className="site-header-inner">
          <Link href="/" className="brand-lockup" aria-label="Systemized Sales AI home">
            <img src="/ss-logo.svg" alt="" className="brand-logo" />
            <div>
              <div className="brand-title">Systemized Sales AI</div>
              <div className="brand-subtitle">App store for your sales team</div>
            </div>
          </Link>
          <nav className="site-nav">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="site-actions">
            <a className="button button-secondary" href="mailto:dylan.rich@systemizedsales.com?subject=Systemized%20Sales%20AI%20Demo">
              Request demo
            </a>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="site-footer">
        <div className="site-footer-inner">
          <div>
            <div className="footer-brand">Systemized Sales AI</div>
            <p className="footer-copy">
              A platform of connected operating apps for high-ticket sales teams that need better coaching, cleaner management, stronger client visibility, and tighter revenue execution.
            </p>
          </div>
          <div className="footer-links">
            <Link href="/platform">Platform</Link>
            <Link href="/products">Products</Link>
            <a href="mailto:dylan.rich@systemizedsales.com?subject=Systemized%20Sales%20AI%20Demo">Book demo</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
