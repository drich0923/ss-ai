"use client"

import { useState } from "react"
import AuditModal from "./AuditModal"

export default function BookCall({ label = "Book a 30-min call →" }: { label?: string }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button type="button" className="btn btn-primary" onClick={() => setOpen(true)}>
        {label}
      </button>
      <AuditModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
