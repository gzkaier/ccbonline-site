import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function EN_MarketEntry() {
  useSEO({
    title: 'Canada & North America Market Entry Services | CCBONLINE INC.',
    description: 'Structured market entry services for Chinese companies entering Canada and North America. Readiness diagnosis, customer validation, compliance screening, local execution, and advisory support.',
    canonical: 'https://www.ccbonline.ca/en/market-entry',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Canada & North America Market Entry Services | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Market Entry</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[40px] leading-[1.25] tracking-tight max-w-[860px] mb-4">
              Canada and North America Market Entry Services
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              Structured entry support for Chinese manufacturers and brands preparing to enter Canada and the United States. From readiness assessment to local execution coordination.
            </p>
          </div>
        </section>

        {/* What This Service Is */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">\n            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              What This Service Covers
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              CCBONLINE provides structured market entry support for Chinese companies considering or preparing to enter Canada and North America. We do not sell market access or guarantee distributor relationships. We help you understand whether you are ready, what must be prepared, which market to enter first, and how to coordinate the operational and compliance requirements that precede customer engagement.
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Who This Service Is For
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Chinese manufacturers with products ready for North American market consideration</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Companies that have tried entering North America before but encountered compliance, channel, or logistics setbacks</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Leadership teams needing a structured assessment before allocating significant budget to certification, travel, or distributor negotiations</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Businesses unsure whether Canada or the U.S. should be the first priority market</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Companies needing on-ground coordination support for trade shows, warehousing, or local operations</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Five Service Modules
            </h2>

            <div className="space-y-8 mb-10">
              <div className="p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C9A44C] text-[13px] font-medium">01</span>
                  <h3 className="text-[16px] md:text-[17px] font-semibold">Market Entry Diagnosis</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-3">
                  A structured readiness assessment before you commit significant budget. We review your product, materials, and assumptions against North American buyer expectations, compliance thresholds, and competitive reality. You receive a clear picture of whether you are ready, what is missing, and which market to enter first.
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Product-market fit screening against North American buyer expectations</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Canada vs. U.S. priority assessment based on your product category and compliance barriers</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Compliance and certification gap identification</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Target customer profile and channel direction</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">0-90 day action roadmap with prioritized sequence</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C9A44C] text-[13px] font-medium">02</span>
                  <h3 className="text-[16px] md:text-[17px] font-semibold">Customer and Channel Validation</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-3">
                  Before building a full sales operation, validate who your actual buyers are, how they make purchasing decisions, and which channels they use. We help you test assumptions about customer segments, decision-making processes, and channel preferences with structured research and local market feedback.
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Buyer persona research for Canadian and U.S. markets</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Decision process mapping — who influences, who decides, who pays</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Channel pathway analysis — distributor, direct, specifier, or hybrid</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Competitive positioning review against existing market players</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Pilot outreach strategy with measurable validation criteria</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C9A44C] text-[13px] font-medium">03</span>
                  <h3 className="text-[16px] md:text-[17px] font-semibold">Compliance and Responsibility Chain Screening</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-3">
                  North American market entry involves certification, labeling, import licensing, and liability assignment that many companies discover too late. We map the full compliance and responsibility chain for your product category so you understand what must be completed before the first shipment leaves the port.
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Product certification requirements (CSA, UL, cUL, FCC, Energy Star, etc.)</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Import licensing and customs documentation requirements</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Importer of Record (IOR) responsibility assignment</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Labeling, packaging, and language requirements</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Provincial and federal regulatory variations (Canada)</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C9A44C] text-[13px] font-medium">04</span>
                  <h3 className="text-[16px] md:text-[17px] font-semibold">Local Execution Support</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-3">
                  Entering the market requires on-ground coordination — trade show preparation, warehousing discussions, sample management, and initial customer meetings. We provide local execution support to help you manage these operational elements without establishing a full local office prematurely.
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Trade show preparation and on-site coordination</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Warehousing and 3PL provider evaluation</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Sample and demo unit logistics coordination</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Introduction to local service providers (legal, logistics, certification)</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Initial customer meeting preparation and follow-up support</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C9A44C] text-[13px] font-medium">05</span>
                  <h3 className="text-[16px] md:text-[17px] font-semibold">Advisory Retainer</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-3">
                  For companies that have entered the market and need ongoing strategic guidance. Monthly advisory access for market development decisions, partnership evaluations, competitive response planning, and operational problem-solving as your North American presence grows.
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Monthly strategy calls with structured agendas</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Market development priority assessment</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Partnership and distributor evaluation support</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Competitive intelligence and response planning</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Operational issue escalation and coordination</li>
                </ul>
              </div>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              What CCBONLINE Does Not Replace
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                CCBONLINE does not replace law firms, certification laboratories, customs brokers, tax advisors, or licensed regulatory specialists. We help you understand the entry landscape, identify critical gaps, and coordinate with the right professional partners. We do not provide legal opinions, certification testing, customs clearance, or guarantee specific business outcomes such as distributor contracts or sales volume.
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Recommended Starting Point
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
              Most companies benefit from starting with a Market Entry Diagnosis. This 2-4 week structured assessment gives you a clear picture of readiness, priority market, and required next steps before committing larger budgets. It costs significantly less than one failed distributor relationship or one shipment held at customs.
            </p>
            <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px] inline-block mb-10">Book a Consultation</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">FAQ</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3 mb-10">
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Do we need to work through all five modules?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">No. Most clients start with Module 1 (Market Entry Diagnosis) and then select additional modules based on identified priorities. Each module can be engaged independently.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">How long does the full market entry process take?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">The initial diagnosis takes 2-4 weeks. Full market preparation, including compliance work and channel validation, typically spans 3-6 months depending on product complexity and certification requirements.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Do you guarantee we will get distributors or customers?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">No. We help you prepare, validate, and coordinate your market entry. Customer acquisition and distributor relationships depend on your product competitiveness, pricing, and market timing. We improve your readiness and reduce avoidable mistakes.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Can you help us decide between Canada and the U.S. first?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">Yes. The Market Entry Diagnosis includes a structured Canada vs. U.S. priority assessment based on your product category, compliance barriers, channel availability, and competitive landscape. We provide a recommendation with supporting rationale.</p>
                </div>
              </details>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              Related Pages
            </h2>
            <ul className="space-y-2 mb-8">
              <li><Link to="/en/services" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">All Services</Link></li>
              <li><Link to="/en/brand-credibility" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Brand Credibility & Digital Infrastructure</Link></li>
              <li><Link to="/en/insights/market-entry-is-not-selling-overseas" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Market Entry Is Not the Same as Selling Overseas</Link></li>
              <li><Link to="/en/insights/0-90-day-north-america-market-entry-roadmap" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">A 0-90 Day Roadmap for North America Market Entry</Link></li>
              <li><Link to="/en/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Contact CCBONLINE</Link></li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Considering entering Canada or North America?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                Start with a preliminary consultation. We will assess your current situation, key questions, and whether a structured Market Entry Diagnosis is the right next step.
              </p>
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Book a Consultation</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
