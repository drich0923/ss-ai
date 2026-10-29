import assert from "node:assert/strict"
import test from "node:test"
import { embedsAllowed, parseConsent, readCookieValue, serializeConsent } from "./consent"

test("consent cookie parses only a known choice and source", () => {
  assert.deepEqual(parseConsent(serializeConsent("rejected", "banner")), { choice: "rejected", source: "banner" })
  assert.deepEqual(parseConsent("v1.accepted.gpc"), { choice: "accepted", source: "gpc" })
  assert.equal(parseConsent(null), null)
  assert.equal(parseConsent("accepted"), null)
  assert.equal(parseConsent("v1.maybe.banner"), null)
  assert.equal(parseConsent("v2.rejected.banner"), null)
})

test("a cookie string can hold other cookies beside the consent cookie", () => {
  assert.equal(readCookieValue("a=1; ss_consent=v1.rejected.banner; b=2", "ss_consent"), "v1.rejected.banner")
  assert.equal(readCookieValue("ss_consent=v1.accepted.preferences", "ss_consent"), "v1.accepted.preferences")
  assert.equal(readCookieValue("", "ss_consent"), null)
})

test("embeds stay off until Accept, and Global Privacy Control forces them off", () => {
  assert.equal(embedsAllowed({ gpc: false, stored: null }), false)
  assert.equal(embedsAllowed({ gpc: false, stored: "v1.rejected.banner" }), false)
  assert.equal(embedsAllowed({ gpc: false, stored: "v1.accepted.banner" }), true)
  assert.equal(embedsAllowed({ gpc: true, stored: null }), false)
  assert.equal(embedsAllowed({ gpc: true, stored: "v1.accepted.banner" }), false)
  assert.equal(embedsAllowed({ gpc: true, stored: "v1.rejected.gpc" }), false)
})
