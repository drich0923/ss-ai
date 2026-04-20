import type { Metadata } from "next"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
  title: "Products | Systemized Sales AI",
  description: "Focused product pages for AI Call Coaching, Manager OS, Client Health, Revenue Visibility, and Sales Onboarding Systems.",
}

export default function ProductsPage() {
  redirect("/#apps")
}
