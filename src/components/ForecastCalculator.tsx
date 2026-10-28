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

export default function ForecastCalculator() {
  const [booked, setBooked] = useState(0)
  const [showRate, setShowRate] = useState(0)
  const [closeRate, setCloseRate] = useState(0)
  const [cashPerCall, setCashPerCall] = useState(0)

  const show = Math.min(showRate, 100) / 100
  const close = Math.min(closeRate, 100) / 100
  const held = booked * show
  const closes = held * close
  const cash = held * cashPerCall

  return (
    <div className="calc card">
      <div className="eyebrow">YOUR INPUTS</div>
      <p className="calc-note">
        Show rate is attended divided by booked. Close rate is matched payment closes divided by held calls. Cash per call is cash collected divided by held calls. Expected cash is held calls times cash per call. Do not multiply that cash by close rate again.
      </p>
      <div className="calc-grid">
        <Field label="Booked calls" value={booked} set={setBooked} />
        <Field label="Show rate, percent" value={showRate} set={setShowRate} step={0.1} />
        <Field label="Close rate, percent" value={closeRate} set={setCloseRate} step={0.1} />
        <Field label="Cash per held call" value={cashPerCall} set={setCashPerCall} />
      </div>
      <ul className="calc-out">
        <li>
          <span>Expected held calls</span>
          <strong>{booked && showRate ? held.toFixed(1) : "n/a"}</strong>
        </li>
        <li>
          <span>Expected closes</span>
          <strong>{held && closeRate ? closes.toFixed(1) : "n/a"}</strong>
        </li>
        <li>
          <span>Expected cash</span>
          <strong>{held && cashPerCall ? `$${Math.round(cash).toLocaleString()}` : "n/a"}</strong>
        </li>
      </ul>
    </div>
  )
}
