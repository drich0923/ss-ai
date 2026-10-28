"use client"

import { useState } from "react"

function Field({
  label,
  value,
  set,
}: {
  label: string
  value: number
  set: (n: number) => void
}) {
  return (
    <label className="calc-field">
      <span>{label}</span>
      <input
        type="number"
        min={0}
        value={value}
        onChange={event => set(Math.max(0, Number(event.target.value) || 0))}
      />
    </label>
  )
}

function pct(part: number, whole: number) {
  if (!whole) return "n/a"
  return `${((part / whole) * 100).toFixed(1)}%`
}

export default function RateCalculator() {
  const [booked, setBooked] = useState(20)
  const [attended, setAttended] = useState(12)
  const [held, setHeld] = useState(12)
  const [closes, setCloses] = useState(4)
  const [cash, setCash] = useState(24000)

  return (
    <div className="calc card">
      <div className="eyebrow">YOUR NUMBERS</div>
      <p className="calc-note">
        This uses the definitions on this page. Show rate is attended divided by booked. Close rate is matched payment closes divided by held calls. Cash per call is cash collected divided by held calls.
      </p>
      <div className="calc-grid">
        <Field label="Booked calls" value={booked} set={setBooked} />
        <Field label="Attended calls" value={attended} set={setAttended} />
        <Field label="Held calls" value={held} set={setHeld} />
        <Field label="Closes with a matched payment" value={closes} set={setCloses} />
        <Field label="Cash collected" value={cash} set={setCash} />
      </div>
      <ul className="calc-out">
        <li>
          <span>Show rate</span>
          <strong>{pct(attended, booked)}</strong>
        </li>
        <li>
          <span>Close rate</span>
          <strong>{pct(closes, held)}</strong>
        </li>
        <li>
          <span>Cash per held call</span>
          <strong>{held ? `$${Math.round(cash / held).toLocaleString()}` : "n/a"}</strong>
        </li>
      </ul>
    </div>
  )
}
