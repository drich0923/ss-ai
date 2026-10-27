import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Platform | Systemized Sales AI",
  description: "See inside The Sales Team OS: RevPhlo, setter trackers, commissions and hiring in one workspace.",
}

export default function PlatformPage() {
  redirect("/#preview")
}
