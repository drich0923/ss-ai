"use client"

import Link from "next/link"
import { requestConsentPreferences } from "@/lib/consent"

export default function LegalFooterLinks() {
  return (
    <nav className="footer-legal" aria-label="Legal">
      <Link href="/privacy">Privacy</Link>
      <Link href="/cookie-policy">Cookies</Link>
      <Link href="/terms">Terms</Link>
      <button type="button" onClick={requestConsentPreferences}>
        Cookie settings
      </button>
    </nav>
  )
}
