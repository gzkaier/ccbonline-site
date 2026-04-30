import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'


interface InsightCard {
  title: string
  summary: string
  category: string
  slug: string
}

const featuredViewpoints: InsightCard[] = [
  {
    title: 'Market Entry Is Not the Same as Selling Overseas',
    summary: 'Selling overseas focuses on transactions. Market entry requires a system across compliance, import responsibility, channel validation, local execution, and after-sales accountability.',
    category: 'Market Entry',
    slug: 'market-entry-is-not-selling-overseas',
  },
  {
    title: 'The Responsibility Chain Behind North America Market Entry',
    summary: 'Market entry is not just about products and customers—it is a chain of responsibilities across importation, certification, distribution, warranty, and after-sales support.',
    category: 'Responsibility Chain',
    slug: 'north-america-responsibility-chain',
  },
  {
    title: 'A 0–90 Day Roadmap for North America Market Entry',
    summary: 'The first 90 days should follow a structured progression from diagnosis and compliance mapping through channel validation to active customer engagement.',
    category: 'Market Entry',
    slug: '0-90-day-north-america-market-entry-roadmap',
  },
]

const marketEntryCards: InsightCard[] = [
  {
    title: 'Market Entry Is Not the Same as Selling Overseas',
    summary: 'The real question is not whether you have a customer, but whether your company has built a complete entry path from compliance to local accountability.',
    category: 'Market Entry',
    slug: 'market-entry-is-not-selling-overseas',
  },
  {
    title: 'A 0–90 Day Roadmap for North America Market Entry',
    summary: 'Days 0–30: diagnosis. Days 15–45: compliance pathway. Days 30–60: channel validation. Days 60–90: structured customer conversations.',
    category: 'Market Entry',
    slug: '0-90-day-north-america-market-entry-roadmap',
  },
]

const responsibilityCards: InsightCard[] = [
  {
    title: 'The Responsibility Chain Behind North America Market Entry',
    summary: 'Every market entry has a hidden responsibility chain. Most companies do not see it until something goes wrong. Understand the chain before you enter.',
    category: 'Responsibility Chain',
    slug: 'north-america-responsibility-chain',
  },
]

const complianceCards: InsightCard[] = [
  {
    title: 'Importer of Record Is Not Just Customs Clearance',
    summary: 'The IOR is not merely a customs filing role—it carries legal liability for product safety, compliance accuracy, and regulatory accountability long after clearance.',
    category: 'Compliance & Importation',
    slug: 'importer-of-record-is-not-just-customs-clearance',
  },
  {
    title: 'Certification Is Not the End of Market Entry',
    summary: 'CSA, UL, and FCC certification are necessary but not sufficient. Many certified products still fail because certification is treated as the finish line.',
    category: 'Compliance & Importation',
    slug: 'certification-is-not-the-end-of-market-entry',
  },
]

const channelCards: InsightCard[] = [
  {
    title: 'Channel Development Is Not Email Blasting',
    summary: 'Building distribution channels requires structured relationship development and mutual value demonstration—not mass email campaigns or transactional outreach.',
    category: 'Channel & Local Execution',
    slug: 'channel-development-is-not-email-blasting',
  },
  {
    title: 'A Trade Show Is Not Just an Exhibition',
    summary: 'Trade shows are strategic instruments for market validation, competitive intelligence, partnership development, and direct customer engagement.',
    category: 'Channel & Local Execution',
    slug: 'trade-show-is-not-just-exhibition',
  },
]

const canadaCards: InsightCard[] = [
  {
    title: 'Canada as a First Station for North America Market Entry',
    summary: 'Canada offers lower entry barriers, transparent regulatory processes, and a strategic pathway to the broader North American market.',
    category: 'Canada as First Station',
    slug: 'canada-as-first-station-for-north-america-entry',
  },
]

const latestArticles: InsightCard[] = [
  {
    title: 'Market Entry Is Not the Same as Selling Overseas',
    summary: 'The critical difference between transactions and systems.',
    category: 'Market Entry',
    slug: 'market-entry-is-not-selling-overseas',
  },
  {
    title: 'The Responsibility Chain Behind North America Market Entry',
    summary: 'Who is responsible for what, and why it matters before you ship.',
    category: 'Responsibility Chain',
    slug: 'north-america-responsibility-chain',
  },
  {
    title: 'Importer of Record Is Not Just Customs Clearance',
    summary: 'Understanding the full legal scope of the IOR role.',
    category: 'Compliance & Importation',
    slug: 'importer-of-record-is-not-just-customs-clearance',
  },
  {
    title: 'A 0–90 Day Roadmap for North America Market Entry',
    summary: 'A structured progression from diagnosis to first customer conversations.',
    category: 'Market Entry',
    slug: '0-90-day-north-america-market-entry-roadmap',
  },
]

function InsightCardComponent({ card }: { card: InsightCard }) {
  return (
    <div className="group bg-white border border-[#E5E5E5] hover:border-[#C00000] transition-colors p-5 md:p-6 flex flex-col">
      <p className="text-[11px] text-[#999] uppercase tracking-wider mb-2">{card.category}</p>
      <h3 className="text-[16px] md:text-[17px] font-semibold mb-3 leading-[1.5] group-hover:text-[#C00000] transition-colors">
        {card.title}
      </h3>
      <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6] mb-4 flex-1">
        {card.summary}
      </p>
      <Link
        to={`/en/insights/${card.slug}`}
        className="text-[14px] font-medium text-[#C00000] hover:underline inline-flex items-center gap-1"
      >
        Read full insight
        <span className="text-[16px]">&rarr;</span>
      </Link>
    </div>
  )
}

function InsightSection({ title, label, cards }: { title: string; label: string; cards: InsightCard[] }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <p className="text-label mb-3">{label}</p>
        <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:gap-5">
          {cards.map((card, i) => (
            <InsightCardComponent key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ENInsights() {
  useSEO({
    title: 'Insights on Canada & North America Market Entry | CCBONLINE INC.',
    description: 'Practical viewpoints on market entry, compliance, channel development, and execution for businesses entering Canada and North America.',
    canonical: 'https://www.ccbonline.ca/en/insights',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Insights on Canada & North America Market Entry | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Insights</p>
            <h1 className="font-serif text-[#212121] text-[28px] sm:text-[34px] md:text-[42px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              Insights on Canada & North America Market Entry
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#767676] max-w-[600px]">
              Practical viewpoints on market entry, compliance, channel development, and execution. Every insight links to detailed guidance.
            </p>
          </div>
        </section>

        {/* Featured Viewpoints */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Featured</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              Featured Viewpoints
            </h2>
            <div className="grid grid-cols-1 gap-4 md:gap-5">
              {featuredViewpoints.map((card, i) => (
                <InsightCardComponent key={i} card={card} />
              ))}
            </div>
          </div>
        </section>

        {/* Market Entry */}
        <InsightSection title="Market Entry" label="Market Entry" cards={marketEntryCards} />

        {/* Responsibility Chain */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Responsibility</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              Responsibility Chain
            </h2>
            <div className="grid grid-cols-1 gap-4 md:gap-5">
              {responsibilityCards.map((card, i) => (
                <InsightCardComponent key={i} card={card} />
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Importation */}
        <InsightSection title="Compliance & Importation" label="Compliance" cards={complianceCards} />

        {/* Channel & Local Execution */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Channel</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              Channel & Local Execution
            </h2>
            <div className="grid grid-cols-1 gap-4 md:gap-5">
              {channelCards.map((card, i) => (
                <InsightCardComponent key={i} card={card} />
              ))}
            </div>
          </div>
        </section>

        {/* Canada as First Station */}
        <InsightSection title="Canada as First Station" label="Canada" cards={canadaCards} />

        {/* Latest Articles */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Latest</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {latestArticles.map((card, i) => (
                <div key={i} className="group flex items-start gap-4 p-4 bg-white border border-[#E5E5E5] hover:border-[#C00000] transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">{card.category}</p>
                    <h3 className="text-[15px] md:text-[16px] font-semibold leading-[1.5] group-hover:text-[#C00000] transition-colors mb-1">
                      {card.title}
                    </h3>
                    <p className="text-[13px] md:text-[14px] text-[#767676]">{card.summary}</p>
                  </div>
                  <Link
                    to={`/en/insights/${card.slug}`}
                    className="text-[14px] font-medium text-[#C00000] hover:underline shrink-0 mt-1"
                  >
                    Read &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                Want personalized market entry guidance?
              </h2>
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Book a Consultation</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
