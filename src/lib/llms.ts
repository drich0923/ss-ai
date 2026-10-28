import { ecosystemModules, faqs, publicProductModules, siteUrl } from "@/lib/site-data"

const description =
  "The Sales Team OS is a system Systemized Sales installs for high-ticket sales teams that already have reps. We install it, train the owner, manager, and team on how to use it, and support them in Slack. We do not hire, train, coach, ramp, or manage their reps. Their team does the hiring, the selling, and the managing."

const results = [
  "Woobie: $300K to $1.1M a month. First $1M month within 8 months.",
  "Budgetdog: back-to-back $1M months, from $400-500K on a good month. No-shows cut in half, 19.1% to 9.6%. Close rate up from 24.7% to 31.7%.",
  "The Listings Lab: close rate 10.7% to 30.8% in 90 days.",
  "Infinite Heart Health: show rate doubled in 90 days, from 26% to 55%.",
]

export function buildLlmsTxt() {
  const parts = ecosystemModules
    .map(part => `- [${part.title}](${siteUrl}${part.href}): ${part.summary}`)
    .join("\n")
  return `# Sales Team OS

> ${description}

## Who it is for

- Path A: a founder who already runs the reps, with no dedicated sales manager. Everything still runs through the founder.
- Path B: a sales team that already has a manager.

## The 10 parts

${parts}

## Results

${results.map(line => `- ${line}`).join("\n")}

These are results from running this system. They are not a promise that every business gets the same result.

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

  return `${buildLlmsTxt()}
# Full page text

## Homepage

${description}

${faq}

${products}
`
}
