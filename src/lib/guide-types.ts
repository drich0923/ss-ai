export type GuideLink = { href: string; label: string }

export type Guide = {
  slug: string
  path: string
  nav: string
  title: string
  description: string
  h1: string
  answer: string[]
  sections: { h2: string; paragraphs: string[]; bullets?: string[] }[]
  definitions?: { term: string; formula: string; text: string }[]
  calculator?: boolean
  checklist?: { title: string; items: string[] }
  template?: { title: string; headers: string[]; rows: string[][]; csv?: string }
  handles: string
  handleLinks: GuideLink[]
  proof: string[]
  related?: GuideLink[]
  faqs: { q: string; a: string }[]
}
