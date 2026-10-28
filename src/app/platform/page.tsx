import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Platform | Systemized Sales AI",
  description: "See inside The Sales Team OS: the system behind the numbers, from hiring to pay.",
}

export default function PlatformPage() {
  redirect("/#preview")
}
