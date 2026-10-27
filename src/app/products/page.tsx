import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Products | Systemized Sales AI",
  description: "Every app in The Sales Team OS: RevPhlo, hiring, speed to lead, AI call coaching, Manager OS, setter trackers, the QC Dashboard, playbooks, onboarding and commissions.",
}

export default function ProductsPage() {
  redirect("/#apps")
}
