"use client"

import Link from "next/link"
import { useSyncExternalStore } from "react"
import { getConsentSnapshot, requestConsentPreferences, subscribeConsent } from "@/lib/consent"

export function useNonEssentialConsent(): boolean {
  const snapshot = useSyncExternalStore(subscribeConsent, getConsentSnapshot, () => "off|none")
  return snapshot === "off|accepted"
}

export default function EmbedGate({
  title,
  detail,
  children,
}: {
  title: string
  detail: string
  children: React.ReactNode
}) {
  const allowed = useNonEssentialConsent()
  if (!allowed) {
    return (
      <div className="embed-blocked">
        <p className="embed-blocked-title">{title}</p>
        <p>{detail}</p>
        <button type="button" className="consent-choice consent-choice-inline" onClick={requestConsentPreferences}>
          Cookie settings
        </button>
        <p className="form-legal">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms</Link>
        </p>
      </div>
    )
  }
  return <>{children}</>
}
