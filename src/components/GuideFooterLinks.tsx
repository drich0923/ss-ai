import Link from "next/link"
import { guideNav } from "@/lib/guide-nav"

export default function GuideFooterLinks({ compact = false }: { compact?: boolean }) {
  return (
    <div className="footer-col">
      <div className="eyebrow">GUIDES</div>
      {(compact ? guideNav.slice(0, 5) : guideNav).map(item => (
        <Link key={item.path} href={item.path}>
          {item.nav}
        </Link>
      ))}
      {compact && <Link href="/#guides">All guides →</Link>}
    </div>
  )
}
