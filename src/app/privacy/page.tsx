import type { Metadata } from "next"
import GuideChrome from "@/components/GuideChrome"
import { siteUrl } from "@/lib/site-data"

const url = `${siteUrl}/privacy`
const title = "Privacy Policy"

export const metadata: Metadata = {
  title,
  description:
    "What systemizedsales.ai collects, which vendors receive it, how cookies and text messages work, and how to reach us about your information.",
  alternates: { canonical: url },
}

function Ph({ children }: { children: string }) {
  return <span className="legal-placeholder">{children}</span>
}

export default function PrivacyPage() {
  return (
    <GuideChrome>
      <article className="legal-page">
        <div className="wrap legal-prose">
          <p className="eyebrow">Systemized Sales AI</p>
          <h1>Privacy Policy</h1>
          <p>Last updated October 29, 2026.</p>
          <p className="legal-note">
            Text in amber brackets is a placeholder the operator still has to fill in. This page describes what this website actually does. It does not describe a practice the code does not perform.
          </p>

          <h2>Who we are</h2>
          <p>
            The site at systemizedsales.ai is published as Systemized Sales AI. The business named on the site is Systemized Sales, headquartered in Tampa, Florida. The legal entity that operates it is <Ph>[LEGAL ENTITY NAME]</Ph>, <Ph>[BUSINESS STREET ADDRESS, Tampa, FL]</Ph>.
          </p>
          <p className="legal-note">
            Assumption: the privacy contact is privacy@systemizedsales.com. Confirm that mailbox exists and is monitored before relying on this page.
          </p>
          <p>
            This policy covers this website: the pages, the quiz, and the booking forms linked from here. It does not claim to be the privacy notice for every product a customer uses after an agreement is signed.
          </p>

          <h2>Information this website collects</h2>
          <ul>
            <li>Quiz at /quiz: first name, last name, email, phone number, whether you checked the optional text-message box, your answers, the score and diagnosis, the page URL, a session id, and the time you submitted.</li>
            <li>Booking form hosted by Typeform, only after you accept non-essential cookies and open the form: business type, sales-rep count, which team you want to improve, the problem you want to solve, areas of interest, how the work is managed today, urgency, visibility, who would approve a platform, the outcome you care about, first name, last name, phone number, email, and company.</li>
            <li>Intro-call calendar hosted by GoHighLevel, only after you accept and reach the quiz results: the name, email, and phone number from the quiz, whether the text-message box was checked, the quiz session id, and anything you type into the calendar.</li>
            <li>Hosting logs at Vercel: IP address, browser type, the URL requested, and the time. These are created because the page was served.</li>
            <li>Your cookie choice, stored in a first-party cookie named ss_consent and in localStorage under the same name.</li>
            <li>While a quiz tab is open, the browser keeps a draft in sessionStorage so a refresh does not wipe the answers you already typed. That draft can include the contact details above. It is deleted when the tab session ends.</li>
          </ul>
          <p>This website does not take payment card numbers and does not create an account you log in to.</p>

          <h2>Vendors and what each one receives</h2>
          <table>
            <thead>
              <tr>
                <th>Vendor</th>
                <th>Role</th>
                <th>What it receives</th>
                <th>When</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vercel</td>
                <td>Hosting</td>
                <td>IP address, user agent, URL, and time in server logs.</td>
                <td>Every page request. Strictly necessary to serve the site.</td>
              </tr>
              <tr>
                <td>Fonts on this domain</td>
                <td>Typography</td>
                <td>Nothing is sent to Google. DM Sans, DM Serif Display, Space Grotesk, and JetBrains Mono are downloaded when the site is built and served from systemizedsales.ai.</td>
                <td>Every page. Inter was previously requested from Google Fonts and was not used by the design. It is no longer requested.</td>
              </tr>
              <tr>
                <td>Typeform</td>
                <td>Booking form (form hFvfB43J, “SS AI Application”)</td>
                <td>The answers listed above, plus the IP address and device data Typeform collects. Typeform sets its own cookies, including attribution_user_id, tracking_session_id, tf_respondent_cc, AWSALBTG, AWSALBTGCORS, and _dd_s.</td>
                <td>Only after Accept, and only when the booking dialog is open.</td>
              </tr>
              <tr>
                <td>GoHighLevel (HighLevel / LeadConnector)</td>
                <td>Intro-call calendar</td>
                <td>Name, email, phone, text-message choice, and quiz session id on the calendar link, plus what you submit in the widget. The page loads link.automatedrev.com and, if that fails, link.msgsndr.com. The widget contacts leadconnectorhq.com and storage.googleapis.com. A load of the widget set a __cf_bm cookie on .leadconnectorhq.com. Inside that frame, GoHighLevel also loads Google Fonts.</td>
                <td>Only after Accept, and only on the quiz results step.</td>
              </tr>
              <tr>
                <td>n8n cloud</td>
                <td>Quiz delivery</td>
                <td>The quiz payload, including contact details and the text-message checkbox, posted to systemizedsales.app.n8n.cloud.</td>
                <td>When you submit the quiz. This is the request you just made. It is not an advertising tag and it does not wait on the cookie banner. It does not set a cookie on this site.</td>
              </tr>
            </tbody>
          </table>
          <p>
            No Google tag, Google Analytics, Google Ads, Google Tag Manager, Meta pixel, or session-replay tool is loaded. Because no Google tag is present, Google Consent Mode is not installed. Adding the Consent Mode snippet would mean adding a Google tag this site does not use. If a Google tag is added later, ad storage, ad user data, ad personalization, and analytics storage have to default to denied and stay denied until Accept.
          </p>

          <h2>AI providers</h2>
          <p>
            This website does not send quiz answers, form entries, or page views to an AI model. There is no model API call in this site’s code.
          </p>
          <p>
            The product described on this site scores sales-call transcripts. The site names RevPhlo and Fathom as examples of transcript sources a customer can connect after they are using the product. That processing does not run on this website, and the model vendor is not named in this repository. The operator has to name it here before this sentence is complete: <Ph>[AI MODEL PROVIDER]</Ph>. Until that name is filled in, do not read this policy as identifying a model vendor.
          </p>

          <h2>Do Not Track</h2>
          <p>
            We do not change the site’s behavior in response to a Do Not Track header. Browsers have removed that signal and it is not a reliable instruction.
          </p>
          <p>
            We do honor Global Privacy Control. If the browser sends Sec-GPC or sets navigator.globalPrivacyControl, we treat that as Reject. Typeform and GoHighLevel are not loaded, including when an older Accept is still stored.
          </p>

          <h2>Cross-site tracking by third parties</h2>
          <p>
            We do not install our own advertising or retargeting pixels, and we do not sell personal information. We do not share personal information with an ad network for cross-context behavioral advertising from a tag we run, because we do not run one.
          </p>
          <p>
            Typeform and GoHighLevel can recognize a browser on other sites that use the same vendor, through cookies they set on their own domains. Typeform’s attribution_user_id and tracking_session_id are that kind of identifier. Those requests are not made if you Reject or if Global Privacy Control is on. If you Accept, that cross-site recognition is their tracking, limited to the moment their embed is allowed to load.
          </p>

          <h2>Text messages</h2>
          <p>
            The quiz phone field has an optional checkbox that starts unchecked. The label names Systemized Sales and the number you typed. It says consent is not a condition of purchase, message frequency varies, message and data rates may apply, reply STOP to opt out, and reply HELP for help, with links to this policy and the terms. We store whether you checked it with the quiz submission. A phone number alone is not consent to text.
          </p>
          <p>
            The Typeform booking form and the GoHighLevel calendar collect a phone number inside those vendors’ tools. This website cannot tick a box inside them. A phone number entered there is not treated as consent to text unless that form itself shows the optional checkbox and records the answer. The wording to add there is in the launch notes for the operator.
          </p>
          <p>
            You can opt out of texts by replying STOP. You can ask for help by replying HELP. Email privacy@systemizedsales.com to withdraw consent as well. Withdrawing consent does not affect a message already sent, and it is not required to buy anything, because this website is not a checkout.
          </p>

          <h2>If you are in the European Economic Area, the United Kingdom, or Switzerland</h2>
          <p>
            The controller is <Ph>[LEGAL ENTITY NAME]</Ph>, <Ph>[BUSINESS STREET ADDRESS, Tampa, FL]</Ph>. Contact privacy@systemizedsales.com. That mailbox is an assumption until the operator confirms it.
          </p>
          <ul>
            <li>Replying to a quiz or booking inquiry, and keeping a record of it: steps taken at your request before a contract, and our legitimate interest in answering the inquiry.</li>
            <li>Text messages: your consent, which you can withdraw.</li>
            <li>The consent cookie: legitimate interest in remembering the choice the law requires us to honor. It is strictly necessary for that purpose.</li>
            <li>Typeform and GoHighLevel: your consent, given by Accept. Reject, or Global Privacy Control, means they are not loaded.</li>
            <li>Hosting logs: legitimate interest in operating and securing the site.</li>
          </ul>
          <p>
            Recipients are Vercel, Typeform, GoHighLevel, and n8n cloud, as described above. They process this website’s data in the United States. This repository does not record a signed Standard Contractual Clause or an EU-US Data Privacy Framework certification for each of them. Those transfer tools have to be confirmed with each vendor before this paragraph is treated as complete.
          </p>
          <p>
            We keep inquiry details for as long as we need them to respond and to show whether text-message consent was given. This website does not delete them on a timer. You can ask us to delete them.
          </p>
          <p>You can ask to access, correct, delete, or restrict your information, object to a use based on legitimate interest, and ask for a copy of what you submitted. You can withdraw cookie or text-message consent. You can complain to your supervisory authority. We do not make a decision with legal or similar significant effect about you by automated means. The quiz score is calculated in your browser to show you a diagnosis. It does not decide credit, housing, employment, or whether we will sell to you.</p>

          <h2>Security and breach notification</h2>
          <p>
            Pages and form posts are sent over HTTPS. We do not claim a security certification this site has not earned. Access to quiz submissions is through the n8n, Typeform, and GoHighLevel accounts that receive them.
          </p>
          <p>
            If we become aware of a breach of personal information, <Ph>[LEGAL ENTITY NAME]</Ph> will investigate it, preserve evidence before credentials are rotated, and notify people and regulators when the law requires it. Under the GDPR, the supervisory authority is notified within 72 hours of becoming aware of a breach unless the breach is unlikely to result in a risk to people’s rights and freedoms, and people are told without undue delay when the breach is likely to result in a high risk. For Florida residents, notice is generally due no later than 30 days after we determine a breach occurred, under Fla. Stat. § 501.171, with the statute’s law-enforcement delay and the limited extension for good cause. If 500 or more Florida residents are affected, the Florida Department of Legal Affairs is notified on that same 30-day clock. Other U.S. states set their own deadlines. A written plan for who decides, how people are contacted, and how evidence is kept is maintained with the business. This policy is not that runbook.
          </p>

          <h2>Children</h2>
          <p>
            This site is for people who run sales teams. It is not directed to children under 16. We do not knowingly collect their information. If we learn that we have, we will delete it.
          </p>

          <h2>Changes</h2>
          <p>
            We will update this page, and the date above, when a vendor, a script, or an AI provider is added or removed. The cookie policy is part of that list.
          </p>

          <h2>Contact</h2>
          <p>
            Privacy requests: privacy@systemizedsales.com. That address is an assumption until the mailbox is confirmed. Sales questions: sales@systemizedsales.ai. Postal mail: <Ph>[LEGAL ENTITY NAME]</Ph>, <Ph>[BUSINESS STREET ADDRESS, Tampa, FL]</Ph>.
          </p>
          <p>
            <a href="/cookie-policy">Cookie policy</a>
            {" · "}
            <a href="/terms">Terms</a>
          </p>
        </div>
      </article>
    </GuideChrome>
  )
}
