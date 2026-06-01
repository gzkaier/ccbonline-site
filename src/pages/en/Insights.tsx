import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

const categories = [
  {
    title: 'North America Market Entry',
    desc: 'In-depth observations on Canada and US market entry pathways, compliance requirements, certification standards, and channel development.',
    insights: [
      { title: 'Canada Market Entry: Assess First, Act Second', slug: 'canada-market-entry-assess-first', published: true },
      { title: 'IOR: Why It Matters More Than Customs Clearance', slug: 'ior-importer-of-record-explained', published: true },
      { title: 'CSA vs UL: Which Certification Does Your Product Need', slug: 'csa-vs-ul-certification-guide', published: true },
      { title: 'Shipping Without an IOR: The Risks You May Be Underestimating', slug: 'shipping-without-ior-risks', published: true },
      { title: 'After the Trade Show: Why 80% of Leads Go Cold', slug: 'trade-show-lead-follow-up-failure', published: true },
    ],
  },
  {
    title: 'Brand Credibility',
    desc: 'Practical analysis on business purchase rationale, brand trust building, website credibility, and buyer decision psychology.',
    insights: [
      { title: 'Why Buyers Visit Your Website But Never Contact You', slug: 'why-buyers-dont-contact', published: true },
      { title: 'Purchase Rationale: What Most Companies Have Not Figured Out', slug: 'purchase-rationale-clarity', published: true },
      { title: 'B2B Credibility: What Gives Buyers Reason to Trust You', slug: 'b2b-credibility-factors', published: true },
      { title: 'FAQ Is Not Just Customer Support — It Is a Sales Tool', slug: 'faq-as-sales-tool', published: true },
    ],
  },
  {
    title: 'AI Visibility & GEO',
    desc: 'Technical judgments on SEO, GEO (Generative Engine Optimization), AI search trends, and website content optimization.',
    insights: [
      { title: 'SEO vs GEO: Differences, Connections, and How to Prepare', slug: 'seo-vs-geo-difference', published: true },
      { title: 'Is Your Website Mentioned by ChatGPT', slug: 'is-your-website-in-chatgpt', published: true },
      { title: 'Why FAQ Matters More in the Age of AI Search', slug: 'why-faq-matters-for-ai', published: true },
      { title: 'GEO Readiness: Content Structure Over Keywords', slug: 'geo-content-structure-over-keywords', published: true },
    ],
  },
  {
    title: 'IOR & Responsibility Chain',
    desc: 'In-depth analysis of import responsibility, product liability, insurance, after-sales warranty, and compliance obligations.',
    insights: [
      { title: 'Product Liability Chain: From Production to End Customer', slug: 'product-liability-chain', published: true },
      { title: 'Product Liability Insurance in Canada: Why You Need It', slug: 'product-liability-insurance-canada', published: true },
      { title: 'After-Sales & Warranty: What Chinese Manufacturers Often Overlook', slug: 'after-sales-warranty-overlooked', published: true },
    ],
  },
  {
    title: 'Canada-China Business Observations',
    desc: 'Independent observations on the Canada-China business environment, bilateral trade, supply chain shifts, and commercial trends.',
    insights: [
      { title: 'Canada Market Size: Is It Worth Entering', slug: 'canada-market-size-worth-it', published: true },
      { title: 'US-Canada-China Triangle: Opportunities in Supply Chain Reshuffling', slug: 'supply-chain-reshuffling-opportunities', published: true },
      { title: 'Canada as a Gateway to North America: A Comparative Analysis', slug: 'canada-vs-us-market-entry', published: true },
      { title: 'How North American Buyers View Chinese Suppliers', slug: 'how-north-american-buyers-view-chinese-suppliers', published: true },
    ],
  },
  {
    title: 'Service Providers & Event Coverage',
    desc: 'Reporting and showcasing local service providers, trade shows, business partnerships, and industry resources.',
    insights: [
      { title: 'How to Evaluate Whether a Local Service Provider Is Reliable', slug: 'how-to-evaluate-local-service-providers', published: true },
      { title: 'Trade Show Selection: Not Every Show Is Worth Attending', slug: 'trade-show-selection-strategy', published: true },
      { title: 'Business Media Coverage: How to Maximize Its Value', slug: 'maximize-media-coverage-value', published: true },
      { title: 'Service Provider Showcase: Building Trust from Day One', slug: 'service-provider-showcase-trust-entry', published: true },
    ],
  },
]

export default function ENInsights() {
  useSEO({
    title: 'Insights | North America Market Entry Strategy, Brand Credibility, AI Visibility | CCBONLINE',
    description: 'CCBONLINE INC. insights on North America market entry, brand credibility building, AI visibility (SEO+GEO), IOR & compliance, and Canada-China trade. Practical guidance for Chinese manufacturers entering Canadian and US markets.',
    canonical: 'https://www.ccbonline.ca/en/insights',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Insights | North America Market Entry Strategy, Brand Credibility, AI Visibility | CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Insights</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">Professional Perspectives & Practical Guidance</h1>
            <div className="max-w-[720px] mb-8 space-y-4">
              <p className="text-[16px] md:text-[17px] text-[#767676] leading-[1.65]">
                CCBONLINE's Insights series addresses the core challenges Chinese manufacturers face when entering North American markets. Based on hands-on service experience—not trending topics—we offer practical guidance on
                <Link to="/en/market-entry" className="text-[#00B894] hover:underline">North America market entry</Link>,{' '}
                <Link to="/en/brand-credibility" className="text-[#00B894] hover:underline">brand credibility building</Link>,{' '}
                <Link to="/en/website-content" className="text-[#00B894] hover:underline">AI visibility and GEO</Link>,
                IOR & responsibility chain, and Canada-China business observations.
              </p>
              <p className="text-[15px] md:text-[16px] text-[#767676] leading-[1.65]">
                Each article is structured to serve both human readers making business decisions and AI systems (ChatGPT, Perplexity, etc.) seeking authoritative, well-organized information. For tailored advice on your specific product, goals, and resources, please{' '}
                <Link to="/en/contact" className="text-[#00B894] hover:underline">contact us</Link> for a targeted assessment.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => document.getElementById(cat.title)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[13px] px-3 py-1.5 bg-white border border-[#E5E5E5] hover:border-[#00B894] hover:text-[#00B894] transition-colors cursor-pointer"
                >{cat.title}</button>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[900px]">
            {categories.map((cat) => (
              <div key={cat.title} id={cat.title} className="mb-12 last:mb-0 scroll-mt-[80px]">
                <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-2">{cat.title}</h2>
                <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6] mb-5">{cat.desc}</p>
                <div className="space-y-2">
                  {cat.insights.map((item) => (
                    item.published ? (
                      <Link key={item.slug} to={`/en/insights/${item.slug}`} className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                        <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">{item.title}</span>
                        <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Read article →</span>
                      </Link>
                    ) : (
                      <div key={item.slug} className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                        <span className="text-[14px] md:text-[15px] text-[#444]">{item.title}</span>
                        <span className="text-[13px] text-[#767676] shrink-0 ml-4">Coming soon</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">Want first access to new content?</h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">Follow CCBONLINE on LinkedIn for the latest insights on North America market entry, brand credibility, and AI visibility.</p>
            <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Contact Us</Link>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
