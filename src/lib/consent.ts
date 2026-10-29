export const CONSENT_COOKIE = "ss_consent"
export const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 180

export type ConsentChoice = "accepted" | "rejected"
export type ConsentSource = "banner" | "preferences" | "gpc"

const CHOICES = new Set<ConsentChoice>(["accepted", "rejected"])
const SOURCES = new Set<ConsentSource>(["banner", "preferences", "gpc"])

export function serializeConsent(choice: ConsentChoice, source: ConsentSource): string {
  return `v1.${choice}.${source}`
}

export function parseConsent(raw: string | null | undefined): { choice: ConsentChoice; source: ConsentSource } | null {
  if (!raw) return null
  const [version, choice, source] = raw.split(".")
  if (version !== "v1") return null
  if (!CHOICES.has(choice as ConsentChoice)) return null
  if (!SOURCES.has(source as ConsentSource)) return null
  return { choice: choice as ConsentChoice, source: source as ConsentSource }
}

export function readCookieValue(cookieString: string, name: string): string | null {
  const parts = cookieString.split(";")
  for (const part of parts) {
    const trimmed = part.trim()
    const eq = trimmed.indexOf("=")
    if (eq === -1) continue
    if (trimmed.slice(0, eq) === name) {
      try {
        return decodeURIComponent(trimmed.slice(eq + 1))
      } catch {
        return trimmed.slice(eq + 1)
      }
    }
  }
  return null
}

/**
 * Non-essential embeds load only after an explicit Accept, and never while
 * Global Privacy Control is on. No stored choice means denied.
 */
export function embedsAllowed(input: { gpc: boolean; stored: string | null }): boolean {
  if (input.gpc) return false
  return parseConsent(input.stored)?.choice === "accepted"
}

type Listener = () => void

const listeners = new Set<Listener>()
const openListeners = new Set<Listener>()

export function subscribeConsent(listener: Listener): () => void {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

function emitConsent() {
  listeners.forEach(listener => listener())
}

export function subscribeConsentOpen(listener: Listener): () => void {
  openListeners.add(listener)
  return () => openListeners.delete(listener)
}

export function requestConsentPreferences(): void {
  openListeners.forEach(listener => listener())
}

export function readGpc(): boolean {
  if (typeof navigator === "undefined") return false
  return (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true
}

function readStored(): string | null {
  if (typeof document === "undefined") return null
  const fromCookie = readCookieValue(document.cookie, CONSENT_COOKIE)
  if (fromCookie) return fromCookie
  try {
    return window.localStorage.getItem(CONSENT_COOKIE)
  } catch {
    return null
  }
}

export function getConsentSnapshot(): string {
  if (typeof document === "undefined") return "off|none"
  const gpc = readGpc() ? "gpc" : "off"
  const choice = parseConsent(readStored())?.choice ?? "none"
  return `${gpc}|${choice}`
}

export function nonEssentialAllowed(): boolean {
  return embedsAllowed({ gpc: readGpc(), stored: readStored() })
}

export function writeConsent(choice: ConsentChoice, source: ConsentSource): void {
  if (typeof document === "undefined") return
  const value = serializeConsent(choice, source)
  const secure = window.location.protocol === "https:" ? "; Secure" : ""
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(value)}; Path=/; Max-Age=${CONSENT_MAX_AGE_SECONDS}; SameSite=Lax${secure}`
  try {
    window.localStorage.setItem(CONSENT_COOKIE, value)
  } catch {
    // The cookie is the copy the next page load reads. Storage can be blocked.
  }
  emitConsent()
}
