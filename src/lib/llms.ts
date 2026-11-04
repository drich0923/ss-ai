import { guides } from "@/lib/guides"
import { ecosystemModules, faqs, publicProductModules, siteUrl } from "@/lib/site-data"

const description =
  "RevPhlo combines sales tracking, workflows, playbooks and training for established high-ticket businesses with setters and closers working inbound marketing leads. Systemized Sales installs it, connects the tools, migrates relevant assets and trains the owner, leader and reps to use it. Dedicated Slack support and weekly group office hours support ongoing use. The client’s team owns selling and day-to-day management."

const results = [
  "Woobie: $300K to $1.1M a month. First $1M month within 8 months.",
  "Budgetdog: back-to-back $1M months, from $400-500K on a good month. No-shows cut in half, 19.1% to 9.6%. Close rate up from 24.7% to 31.7%.",
  "The Listings Lab, during our agency engagement: Close rate 10.7% to 30.8% in 90 days. Booked-call close rate rose from 6% to 19%.",
  "Infinite Heart Health: show rate doubled in 90 days, from 26% to 55%.",
]

export function buildLlmsTxt() {
  const parts = ecosystemModules
    .map(part => `- [${part.title}](${siteUrl}${part.href}): ${part.summary}`)
    .join("\n")
  return `# RevPhlo — The Sales Team OS

> ${description}

## Who it is for

- Path A: a founder who already runs the reps, with no dedicated sales manager. The owner wants evidence to understand missed sales and decide where to focus.
- Path B: a sales team that already has a manager.

## The 10 parts

${parts}

## Results

${results.map(line => `- ${line}`).join("\n")}

These are results from Systemized Sales agency engagements involving people, processes and tools, rather than results from buying the standalone RevPhlo offer. Budgetdog’s back-to-back million-dollar months preceded its June 2026 RevPhlo implementation. Woobie’s 25% to 66% show-rate change was a measurement correction, not a performance lift. Results are not guaranteed.

## Guides

${guides.map(guide => `- [${guide.title}](${siteUrl}${guide.path}): ${guide.description}`).join("\n")}

## Book

- [Book a 30-minute call](${siteUrl}/#cta)
`
}

export function buildLlmsFullTxt() {
  const products = publicProductModules()
    .map(product => {
      const blocks = [
        `## ${product.name}`,
        product.heroTitle,
        product.heroSummary,
        `Who: ${product.audience}`,
        product.leadValue,
        "Pains:",
        ...product.pains.map(item => `- ${item}`),
        "What this part does:",
        ...product.capabilities.map(item => `- ${item}`),
        "How it is installed:",
        ...product.fulfillment.map(item => `- ${item}`),
        "What changes:",
        ...product.outcomes.map(item => `- ${item}`),
        "Rollout:",
        ...product.implementation.map(item => `- ${item}`),
        `Page: ${siteUrl}/products/${product.slug}`,
      ]
      return blocks.join("\n")
    })
    .join("\n\n")

  const faq = faqs.map(item => `Q: ${item.q}\nA: ${item.a}`).join("\n\n")

  const guideText = guides
    .map(guide => {
      const blocks = [
        `## ${guide.h1}`,
        ...guide.answer,
        ...guide.sections.flatMap(section => [section.h2, ...section.paragraphs, ...(section.bullets ?? [])]),
        ...(guide.definitions ?? []).flatMap(item => [item.term, item.formula, item.text]),
        guide.handles,
        ...guide.proof,
        ...guide.faqs.flatMap(item => [`Q: ${item.q}`, `A: ${item.a}`]),
        `Page: ${siteUrl}${guide.path}`,
      ]
      return blocks.join("\n")
    })
    .join("\n\n")

  return `${buildLlmsTxt()}
# Full page text

## Homepage

${description}

${faq}

${products}

# Guides

${guideText}
`
}
