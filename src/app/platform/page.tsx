import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Inside the Sales Team OS",
  description: "See inside The Sales Team OS: the system behind the numbers, from hiring to pay.",
}

export default function PlatformPage() {
  redirect("/#preview")
}
