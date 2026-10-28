import Link from "next/link"
import BookCall from "./BookCall"
import CapacityCalculator from "./CapacityCalculator"
import ForecastCalculator from "./ForecastCalculator"
import RateCalculator from "./RateCalculator"
import type { Guide } from "@/lib/guide-types"
import { siteUrl } from "@/lib/site-data"

export default function GuideArticle({ guide }: { guide: Guide }) {
  const url = `${siteUrl}${guide.path}`
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: guide.h1,
        description: guide.description,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#service` },
      },
      {
        "@type": "Article",
        headline: guide.h1,
        description: guide.description,
        mainEntityOfPage: url,
        author: { "@type": "Organization", name: "Systemized Sales AI", url: siteUrl },
        publisher: { "@id": `${siteUrl}/#organization` },
        dateModified: "2026-10-28",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Sales Team OS", item: siteUrl },
          { "@type": "ListItem", position: 2, name: guide.nav, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faqs.map(item => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  }

  return (
    <article className="guide">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header className="product-hero">
        <div className="hero-bg-grid grid-bg" aria-hidden />
        <div className="wrap hero-inner">
          <div className="guide-measure">
            <p className="eyebrow">GUIDE</p>
            <h1 className="display display-lg guide-h1">{guide.h1}</h1>
            {guide.answer.map(paragraph => (
              <p key={paragraph} className="guide-answer">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </header>
      <div className="section">
        <div className="wrap">
          <div className="guide-measure guide-body">
            {guide.sections.map(section => (
              <section key={section.h2}>
                <h2>{section.h2}</h2>
                {section.paragraphs.map(paragraph => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets ? (
                  <ul>
                    {section.bullets.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            {guide.definitions ? (
              <section>
                <h2>Definitions</h2>
                <div className="def-list">
                  {guide.definitions.map(item => (
                    <div key={item.term} className="def card">
                      <h3>{item.term}</h3>
                      <p className="def-formula">{item.formula}</p>
                      <p>{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>
            ) : null}

            {guide.calculator ? (
              <section>
                <h2>Check your own rates</h2>
                <RateCalculator />
              </section>
            ) : null}

            {guide.capacity ? (
              <section>
                <h2>Work it out from your numbers</h2>
                <CapacityCalculator />
              </section>
            ) : null}

            {guide.forecast ? (
              <section>
                <h2>Run the formula on your numbers</h2>
                <ForecastCalculator />
              </section>
            ) : null}

            {guide.checklist ? (
              <section>
                <h2>{guide.checklist.title}</h2>
                <ol className="guide-check">
                  {guide.checklist.items.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </section>
            ) : null}

            {guide.template ? (
              <section>
                <h2>{guide.template.title}</h2>
                <div className="guide-table-wrap">
                  <table className="guide-table">
                    <thead>
                      <tr>
                        {guide.template.headers.map(header => (
                          <th key={header}>{header}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {guide.template.rows.map((row, rowIndex) => (
                        <tr key={`${row[0]}-${rowIndex}`}>
                          {row.map((cell, cellIndex) => (
                            <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {guide.template.csv ? (
                  <p>
                    <a href={guide.template.csv}>Download the CSV template</a>
                  </p>
                ) : null}
              </section>
            ) : null}

            <section>
              <h2>How the Sales Team OS by Systemized Sales AI handles this</h2>
              <p>{guide.handles}</p>
              <ul>
                {guide.handleLinks.map(link => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2>Published proof</h2>
              {guide.proof.map(paragraph => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>

            {guide.related?.length ? (
              <section>
                <h2>Related guides</h2>
                <ul>
                  {guide.related.map(link => (
                    <li key={link.href}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <section>
              <h2>Questions buyers ask</h2>
              <div className="guide-faq">
                {guide.faqs.map(item => (
                  <div key={item.q}>
                    <h3>{item.q}</h3>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="guide-cta">
              <h2>See it on your numbers</h2>
              <p>Book a 30 minute call. We map your team and the tools you already use, and we tell you what we would install. Your team still does the selling.</p>
              <BookCall />
            </section>
          </div>
        </div>
      </div>
    </article>
  )
}
