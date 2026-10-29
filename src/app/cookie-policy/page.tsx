import type { Metadata } from "next"
import GuideChrome from "@/components/GuideChrome"
import { siteUrl } from "@/lib/site-data"

const url = `${siteUrl}/cookie-policy`

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "The cookies and similar storage systemizedsales.ai uses, what each one is for, and how to reject non-essential embeds.",
  alternates: { canonical: url },
}

export default function CookiePolicyPage() {
  return (
    <GuideChrome>
      <article className="legal-page">
        <div className="wrap legal-prose">
          <p className="eyebrow">Systemized Sales AI</p>
          <h1>Cookie Policy</h1>
          <p>Last updated October 29, 2026. This page is the list of storage and third-party loads on this website. The <a href="/privacy">privacy policy</a> explains the vendors in more detail.</p>

          <h2>Your choice</h2>
          <p>
            The first visit shows Accept and Reject on the same layer, at the same size and style. Reject is the default until you accept. You can reopen the choice from Cookie settings in the footer.
          </p>
          <p>
            Global Privacy Control is treated as Reject. While that signal is on, Typeform and GoHighLevel do not load.
          </p>
          <p>
            There is no Google tag on this site, so Google Consent Mode v2 is not loaded. Consent Mode only matters after a Google tag exists, and this site does not add one in order to have the snippet. If a tag is added later, ad storage, ad user data, ad personalization, and analytics storage must default to denied until Accept.
          </p>

          <h2>Strictly necessary</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Where</th>
                <th>Why</th>
                <th>How long</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ss_consent</td>
                <td>First-party cookie, and the same key in localStorage</td>
                <td>Remembers Accept or Reject, and whether the choice came from the banner, Cookie settings, or Global Privacy Control.</td>
                <td>180 days</td>
              </tr>
              <tr>
                <td>teamos-quiz-draft</td>
                <td>sessionStorage on the quiz tab</td>
                <td>Keeps the quiz you already started, including contact details and the text-message checkbox, so a refresh does not clear it. Not set on the homepage. Not used for advertising.</td>
                <td>Until the tab session ends</td>
              </tr>
            </tbody>
          </table>
          <p>Vercel, the host, does not set a cookie we observed on a normal first load. It does write a server log with your IP address, browser, URL, and time.</p>

          <h2>Off until you accept</h2>
          <table>
            <thead>
              <tr>
                <th>Tool</th>
                <th>What it sets</th>
                <th>When it loads</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Typeform booking form</td>
                <td>On Typeform’s domains: tf_respondent_cc, attribution_user_id, tracking_session_id, AWSALBTG, AWSALBTGCORS, and _dd_s. attribution_user_id and tracking_session_id can recognize a browser on other Typeform pages.</td>
                <td>After Accept, and only after you open the booking dialog. Not on first load.</td>
              </tr>
              <tr>
                <td>GoHighLevel intro-call calendar</td>
                <td>The widget set __cf_bm on .leadconnectorhq.com when it was loaded directly. It also requests link.automatedrev.com, with link.msgsndr.com as the fallback script, plus leadconnectorhq.com and storage.googleapis.com. The frame loads Google Fonts from Google’s servers. Those requests belong to the embed, not to the first page view.</td>
                <td>After Accept, and only on the quiz results step. Not on first load.</td>
              </tr>
            </tbody>
          </table>

          <h2>What a first load used to do</h2>
          <p>
            Before this policy, every page requested fonts from fonts.googleapis.com and font files from fonts.gstatic.com (DM Sans, DM Serif Display, Space Grotesk, and JetBrains Mono). The stylesheet URL also named Inter, which the design does not use, and the browser did not download an Inter file. That first load set no cookies on systemizedsales.ai. Those Google font requests are gone. The font files are served from this site.
          </p>

          <h2>Not on this site</h2>
          <p>
            No advertising pixel, analytics tag, or session replay runs here. YouTube is mentioned as a channel a customer’s offer may be sold on, and as a kind of video the installed playbook can hold. This website does not embed a YouTube player. If one is added, it has to use youtube-nocookie.com, wait for a click before the player loads, and wait for Accept.
          </p>
          <p>
            The quiz submission is a POST to n8n when you send the form. It is not a cookie and it is not loaded on first view.
          </p>

          <h2>How to change your mind</h2>
          <p>
            Use Cookie settings in the footer. You can also clear ss_consent in your browser. Blocking third-party cookies in the browser is a separate control and does not by itself record a choice on this site.
          </p>
        </div>
      </article>
    </GuideChrome>
  )
}
