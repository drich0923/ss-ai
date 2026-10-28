import Link from "next/link"
import { guideNav } from "@/lib/guide-nav"

export default function GuideFooterLinks() {
  return (
    <div className="footer-col">
      <div className="eyebrow">GUIDES</div>
      {guideNav.map(item => (
        <Link key={item.path} href={item.path}>
          {item.nav}
        </Link>
      ))}
    </div>
  )
}
