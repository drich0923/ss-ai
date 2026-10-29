import type { Metadata } from "next"
import GuideChrome from "@/components/GuideChrome"
import { siteUrl } from "@/lib/site-data"

const url = `${siteUrl}/terms`

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms for using systemizedsales.ai, including the optional text-message program.",
  alternates: { canonical: url },
}

function Ph({ children }: { children: string }) {
  return <span className="legal-placeholder">{children}</span>
}

export default function TermsPage() {
  return (
    <GuideChrome>
      <article className="legal-page">
        <div className="wrap legal-prose">
          <p className="eyebrow">Systemized Sales AI</p>
          <h1>Terms</h1>
          <p>Last updated October 29, 2026.</p>
          <p>
            These terms cover use of the website at systemizedsales.ai, published as Systemized Sales AI by <Ph>[LEGAL ENTITY NAME]</Ph>, <Ph>[BUSINESS STREET ADDRESS, Tampa, FL]</Ph>. They are not the customer agreement for a paid install of the Sales Team OS. That agreement, if you sign one, controls the install. Marketing lines on the site are not restated here as extra contract terms.
          </p>
          <p>
            The site explains the system and lets you request a conversation. Do not misuse the forms, attempt to break the site, or submit someone else’s personal information.
          </p>

          <h2>Text messages</h2>
          <p>
            Systemized Sales sends text messages only if you check an optional box that starts unchecked. The box names Systemized Sales and the phone number you entered. Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help. The <a href="/privacy">privacy policy</a> describes what we store.
          </p>
          <p>
            On the quiz, that checkbox is on the form and the yes or no answer is stored with the submission. The Typeform booking form and the GoHighLevel calendar are hosted by those vendors. A phone number entered there is not consent to text unless that form shows this same choice and records it.
          </p>

          <h2>Privacy</h2>
          <p>
            The <a href="/privacy">privacy policy</a> and the <a href="/cookie-policy">cookie policy</a> describe the vendors, cookies, and Global Privacy Control. Those pages are part of using the forms on this site.
          </p>

          <h2>Governing law</h2>
          <p>
            These website terms are governed by the laws of the State of Florida. Venue lies in Tampa, Florida. The legal entity name and street address above are placeholders until they are filled in.
          </p>

          <h2>Contact</h2>
          <p>
            Sales: sales@systemizedsales.ai. Privacy: privacy@systemizedsales.com. The privacy mailbox is an assumption until it is confirmed. Postal mail: <Ph>[LEGAL ENTITY NAME]</Ph>, <Ph>[BUSINESS STREET ADDRESS, Tampa, FL]</Ph>.
          </p>
        </div>
      </article>
    </GuideChrome>
  )
}
