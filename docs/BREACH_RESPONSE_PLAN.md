# Breach response plan

One page for systemizedsales.ai. This is an internal plan, not legal advice. Counsel reviews any notice before it is sent. Last updated October 29, 2026.

## Who decides

Dylan Rich, owner of Systemized Sales (Tampa, Florida), decides whether an incident is a breach that requires notice, what the notice says, and when it goes out. If Dylan is unreachable, Jake Tacher, the other founder named on the site, decides. Privacy mail goes to privacy@systemizedsales.com. That mailbox is an assumption until someone confirms it is monitored. The legal entity name and street address are still placeholders: [LEGAL ENTITY NAME], [BUSINESS STREET ADDRESS, Tampa, FL].

The people who can pull records are whoever administers the Vercel project, the n8n cloud account (systemizedsales.app.n8n.cloud), the Typeform workspace that owns form hFvfB43J, and the GoHighLevel location behind link.automatedrev.com.

## How people are contacted

Use the email address the person submitted on the quiz or the booking form. Florida allows notice by email to the address in our records, or by written notice to a mailing address. This website does not collect a mailing address on the quiz, so email is the channel we actually have. Do not use the marketing text-message program as the statutory notice. A phone call is only a follow-up when email fails and we have a number. Tell the person, in plain language, what happened, what information was involved, what we are doing, and how to reach privacy@systemizedsales.com.

## Deadlines

Do not use one national number of days. The clock starts when we become aware (GDPR) or when we determine a breach occurred (Florida), not when the cleanup feels finished.

- **GDPR.** Notify the lead supervisory authority within 72 hours of becoming aware, unless the breach is unlikely to result in a risk to rights and freedoms. If the breach is likely to result in a high risk, tell the people without undue delay. Document the reasoning when notice is not sent.
- **Florida, Fla. Stat. § 501.171 (2026).** Notify affected Florida residents no later than 30 days after the determination. A law-enforcement agency can delay notice in writing. An extra 15 days is available only if good cause is written to the Department of Legal Affairs within the original 30 days. If 500 or more Florida residents are affected, notify that department within 30 days as well. If more than 1,000 people are notified at once, notify the consumer reporting agencies of the timing and content. A written determination that harm is unlikely, if that exception is used, is kept for 5 years. A vendor that maintains the data (Typeform, GoHighLevel, n8n, Vercel) is, if it is a third-party agent under the statute, supposed to tell us within 10 days. Do not wait out that vendor clock once we already know.
- **Other U.S. states.** Confirm the current statute for each state where an affected person lives before sending. Several states say “without unreasonable delay.” Several set a numeric cap of their own. Write down the statute relied on in the incident file.

## Evidence, then key rotation

Copy evidence before rotating anything. Do not delete logs to tidy up.

Preserve a timeline, Vercel logs for the window, n8n execution history for the quiz webhook, Typeform responses, GoHighLevel contacts created in the window, the git history of this site, and a copy of consent records (the ss_consent values are on visitors’ browsers; the sms_consent flag is in the quiz payload). Store the copies where only the decision maker and counsel can read them.

After the copy exists, rotate access:

- The quiz webhook URL is in the public JavaScript. It is not a secret. If it is being abused, disable that n8n workflow, create a new path, and update `QUIZ_RESULTS_WEBHOOK`.
- Revoke Vercel, GitHub, Typeform, and GoHighLevel sessions that can publish the site or read submissions. Rotate those accounts’ keys and passwords if there is any sign they were exposed. Review Vercel environment variables and the n8n credential store even though this repository does not contain a server secret.
- If DNS or the domain registrar may be involved, rotate that access too.
- Write down what was rotated, by whom, and when.

Then send the notices the decision maker approved, on the clocks above.
