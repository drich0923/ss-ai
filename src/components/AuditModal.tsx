"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import EmbedGate from "./EmbedGate"

export default function AuditModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    if (!open) {
      setLoaded(false)
      return
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, onClose])

  return (
    <div
      className={`audit-modal-backdrop ${open ? "open" : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
      aria-hidden={!open}
      inert={!open ? true : undefined}
    >
      <div className="audit-modal" role="dialog" aria-label="Book a 30-minute system map call">
        <div className="audit-modal-head">
          <div className="audit-modal-title">
            <span className="live-dot" />
            <span>BOOK YOUR 30-MIN SYSTEM MAP CALL</span>
          </div>
          <p className="form-legal">
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms</Link>
          </p>
          <button className="audit-modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="audit-modal-body">
          {open ? (
            <EmbedGate
              title="This form is hosted by Typeform"
              detail="The booking form stays off until you accept non-essential cookies. You can email sales@systemizedsales.ai instead."
            >
              <>
                <div className={`audit-modal-loading ${loaded ? "hide" : ""}`}>
                  <div className="audit-loading-spinner" />
                  <span>LOADING FORM…</span>
                </div>
                <iframe
                  src="https://automatedrevenue.typeform.com/to/hFvfB43J"
                  title="Book a 30-minute system map call"
                  onLoad={() => setLoaded(true)}
                  allow="camera; microphone; autoplay; encrypted-media; fullscreen"
                />
              </>
            </EmbedGate>
          ) : null}
        </div>
      </div>
    </div>
  )
}
