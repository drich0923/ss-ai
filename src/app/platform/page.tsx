import type { Metadata } from "next"
import MarketingPlatformPage from "@/components/MarketingPlatformPage"

export const metadata: Metadata = {
  title: "Platform | Systemized Sales AI",
  description: "See how Systemized Sales AI turns AI coaching, management, client health, and revenue visibility into one operating system.",
}

export default function PlatformPage() {
  return <MarketingPlatformPage />
}
