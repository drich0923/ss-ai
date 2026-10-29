/**
 * Optional SMS consent. The checkbox starts unchecked. Submitting a form
 * without it is still allowed. The sentence names Systemized Sales and the
 * phone number the visitor actually typed.
 */
export function smsConsentSentence(phone: string): string {
  const number = phone.trim() || "the phone number entered on this form"
  return `I agree that Systemized Sales may send text messages to ${number} about my inquiry. Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. Reply STOP to opt out and HELP for help.`
}

/**
 * Paste this into Typeform ("SS AI Application", form hFvfB43J) and into the
 * GoHighLevel intro-call widget (link.automatedrev.com/widget/bookings/ss-intro-call1)
 * as an optional, unchecked checkbox. Replace [PHONE NUMBER ENTERED] with the
 * form's phone field so the number itself appears in the label (Typeform
 * recall, or the GoHighLevel phone merge field). Link the two URLs.
 */
export const THIRD_PARTY_SMS_CONSENT_TEXT =
  "I agree that Systemized Sales may send text messages to [PHONE NUMBER ENTERED] about my inquiry. Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. Reply STOP to opt out and HELP for help. Privacy Policy: https://www.systemizedsales.ai/privacy Terms: https://www.systemizedsales.ai/terms"
