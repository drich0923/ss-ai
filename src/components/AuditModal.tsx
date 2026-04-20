"use client"

import { useEffect, useState } from "react"

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
    >
      <div className="audit-modal" role="dialog" aria-label="Book a 30-minute audit">
        <div className="audit-modal-head">
          <div className="audit-modal-title">
            <span className="live-dot" />
            <span>BOOK YOUR 30-MIN AUDIT</span>
          </div>
          <button className="audit-modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="audit-modal-body">
          <div className={`audit-modal-loading ${loaded ? "hide" : ""}`}>
            <div className="audit-loading-spinner" />
            <span>LOADING FORM…</span>
          </div>
          {open && (
            <iframe
              src="https://automatedrevenue.typeform.com/to/hFvfB43J"
              title="Book a 30-minute audit"
              onLoad={() => setLoaded(true)}
              allow="camera; microphone; autoplay; encrypted-media; fullscreen"
            />
          )}
        </div>
      </div>
    </div>
  )
}
