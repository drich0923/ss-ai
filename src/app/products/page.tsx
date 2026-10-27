import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Products | Systemized Sales AI",
  description: "Every app in The Sales Team OS: RevPhlo, hiring, speed to lead, playbooks, onboarding, setter trackers, commissions and payment tracking.",
}

export default function ProductsPage() {
  redirect("/#apps")
}
