"use client"

import { useState } from "react"

function Field({
  label,
  value,
  set,
  step = 1,
}: {
  label: string
  value: number
  set: (n: number) => void
  step?: number
}) {
  return (
    <label className="calc-field">
      <span>{label}</span>
      <input
        type="number"
        min={0}
        step={step}
        value={value}
        onChange={event => set(Math.max(0, Number(event.target.value) || 0))}
      />
    </label>
  )
}

export default function CapacityCalculator() {
  const [booked, setBooked] = useState(0)
  const [showRate, setShowRate] = useState(0)
  const [perDay, setPerDay] = useState(0)
  const [days, setDays] = useState(0)

  const show = Math.min(showRate, 100) / 100
  const held = booked * show
  const closerDays = perDay ? held / perDay : 0
  const closers = days ? closerDays / days : 0

  return (
    <div className="calc card">
      <div className="eyebrow">YOUR INPUTS</div>
      <p className="calc-note">
        This is a method, not a published ratio. Replace every starter zero. Show rate is attended divided by booked. A closer day is the number of held calls one closer can take in a day. The result is only as honest as those inputs.
      </p>
      <div className="calc-grid">
        <Field label="Booked calls in the period" value={booked} set={setBooked} />
        <Field label="Show rate, percent" value={showRate} set={setShowRate} step={0.1} />
        <Field label="Held calls one closer can take per day" value={perDay} set={setPerDay} />
        <Field label="Working days in the period" value={days} set={setDays} />
      </div>
      <ul className="calc-out">
        <li>
          <span>Expected held calls</span>
          <strong>{booked && showRate ? held.toFixed(1) : "n/a"}</strong>
        </li>
        <li>
          <span>Closer days required</span>
          <strong>{perDay && held ? closerDays.toFixed(1) : "n/a"}</strong>
        </li>
        <li>
          <span>Closers to cover those days</span>
          <strong>{days && closerDays ? closers.toFixed(1) : "n/a"}</strong>
        </li>
      </ul>
    </div>
  )
}
