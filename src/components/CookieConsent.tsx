"use client"

import Link from "next/link"
import { useEffect, useState, useSyncExternalStore } from "react"
import {
  getConsentSnapshot,
  readGpc,
  requestConsentPreferences,
  subscribeConsent,
  subscribeConsentOpen,
  writeConsent,
  type ConsentChoice,
} from "@/lib/consent"

const inventory = [
  "Strictly necessary: one first-party cookie, ss_consent, remembers Accept or Reject.",
  "Off until you accept: the Typeform booking form and the GoHighLevel intro-call calendar.",
  "Not on this site: advertising pixels, analytics tags, and YouTube players.",
]

export default function CookieConsent() {
  const snapshot = useSyncExternalStore(subscribeConsent, getConsentSnapshot, () => "off|none")
  const [ready, setReady] = useState(false)
  const [bannerOpen, setBannerOpen] = useState(false)
  const [prefsOpen, setPrefsOpen] = useState(false)

  useEffect(() => {
    if (readGpc()) writeConsent("rejected", "gpc")
    setReady(true)
  }, [])

  useEffect(() => {
    return subscribeConsentOpen(() => setPrefsOpen(true))
  }, [])

  useEffect(() => {
    if (!prefsOpen) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setPrefsOpen(false)
    }
    document.addEventListener("keydown", onKey)
    return () => document.removeEventListener("keydown", onKey)
  }, [prefsOpen])

  useEffect(() => {
    if (!ready) return
    const [signal, choice] = snapshot.split("|")
    if (signal === "gpc" || choice === "accepted" || choice === "rejected") {
      setBannerOpen(false)
      return
    }
    setBannerOpen(true)
  }, [ready, snapshot])

  function choose(choice: ConsentChoice) {
    writeConsent(choice, prefsOpen ? "preferences" : "banner")
    setBannerOpen(false)
    setPrefsOpen(false)
  }

  const gpc = snapshot.startsWith("gpc|")
  const showBanner = ready && bannerOpen && !prefsOpen
  const showPrefs = ready && prefsOpen

  return (
    <>
      {showBanner ? (
        <div className="consent-banner" role="dialog" aria-labelledby="consent-title" aria-describedby="consent-copy">
          <div>
            <p id="consent-title" className="consent-kicker">Cookies</p>
            <p id="consent-copy">
              Typeform and GoHighLevel stay off until you accept. Reject leaves this site on strictly necessary storage only.{" "}
              <Link href="/cookie-policy">Cookie policy</Link>
              {" · "}
              <Link href="/privacy">Privacy policy</Link>
            </p>
          </div>
          <div className="consent-actions">
            <button type="button" className="consent-choice" onClick={() => choose("rejected")}>
              Reject
            </button>
            <button type="button" className="consent-choice" onClick={() => choose("accepted")}>
              Accept
            </button>
          </div>
        </div>
      ) : null}

      {showPrefs ? (
        <div className="consent-dialog-backdrop" onClick={event => { if (event.target === event.currentTarget) setPrefsOpen(false) }}>
          <div className="consent-dialog" role="dialog" aria-labelledby="consent-prefs-title" aria-modal="true">
            <p id="consent-prefs-title" className="consent-kicker">Cookie settings</p>
            <ul>
              {inventory.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            {gpc ? (
              <p className="consent-gpc">
                Global Privacy Control is on in this browser. We treat that as Reject, so Typeform and GoHighLevel stay off.
              </p>
            ) : null}
            <div className="consent-actions">
              <button type="button" className="consent-choice" onClick={() => choose("rejected")}>
                Reject
              </button>
              <button type="button" className="consent-choice" onClick={() => choose("accepted")}>
                Accept
              </button>
            </div>
            <button type="button" className="consent-close" onClick={() => setPrefsOpen(false)}>
              Close
            </button>
            <p className="form-legal">
              <Link href="/cookie-policy">Cookie policy</Link>
              <Link href="/privacy">Privacy policy</Link>
            </p>
          </div>
        </div>
      ) : null}
    </>
  )
}
