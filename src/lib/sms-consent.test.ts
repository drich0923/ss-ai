import assert from "node:assert/strict"
import test from "node:test"
import { THIRD_PARTY_SMS_CONSENT_TEXT, smsConsentSentence } from "./sms-consent"

test("the SMS sentence names Systemized Sales and the number that was typed", () => {
  const sentence = smsConsentSentence(" +1 (415) 555-0100 ")
  assert.match(sentence, /Systemized Sales/)
  assert.match(sentence, /\+1 \(415\) 555-0100/)
  assert.match(sentence, /not a condition of purchase/)
  assert.match(sentence, /Message frequency varies/)
  assert.match(sentence, /Message and data rates may apply/)
  assert.match(sentence, /Reply STOP to opt out/)
  assert.match(sentence, /HELP for help/)
  assert.equal(smsConsentSentence("  "), smsConsentSentence(""))
  assert.match(smsConsentSentence(""), /the phone number entered on this form/)
})

test("the third-party paste text keeps the same promises and a phone slot", () => {
  assert.match(THIRD_PARTY_SMS_CONSENT_TEXT, /Systemized Sales/)
  assert.match(THIRD_PARTY_SMS_CONSENT_TEXT, /\[PHONE NUMBER ENTERED\]/)
  assert.match(THIRD_PARTY_SMS_CONSENT_TEXT, /not a condition of purchase/)
  assert.match(THIRD_PARTY_SMS_CONSENT_TEXT, /STOP/)
  assert.match(THIRD_PARTY_SMS_CONSENT_TEXT, /HELP/)
  assert.match(THIRD_PARTY_SMS_CONSENT_TEXT, /https:\/\/www\.systemizedsales\.ai\/privacy/)
  assert.match(THIRD_PARTY_SMS_CONSENT_TEXT, /https:\/\/www\.systemizedsales\.ai\/terms/)
})
