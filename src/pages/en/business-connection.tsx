import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function EN_BusinessConnection() {
  useSEO({
    title: 'Canada-China Business Connection & Supply Chain Services | CCBONLINE INC.',
    description: 'CCBONLINE facilitates business connections between Canadian and Chinese companies — supplier matching, supply chain coordination, and cross-border commercial introductions.',
    canonical: 'https://www.ccbonline.ca/en/business-connection',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Canada-China Business Connection & Supply Chain Services | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Business Connection</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[40px] leading-[1.25] tracking-tight max-w-[860px] mb-4">
              Canada-China Business Connection and Supply Chain Coordination
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              Facilitating commercial connections between Canadian and Chinese businesses — supplier matching, supply chain coordination, and cross-border business introductions with operational follow-through.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              What This Service Is
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              CCBONLINE operates as a business connection platform linking Canadian and North American companies with Chinese suppliers, manufacturers, and business partners — and vice versa. We do not broker transactions or take commissions on trade. We facilitate introductions, coordinate initial discussions, and provide operational support to help both parties evaluate whether a commercial relationship makes sense before committing resources.
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Two Directions of Connection
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              <div className="p-5 md:p-6 border border-[#00A884] bg-white">
                <h3 className="text-[16px] md:text-[17px] font-semibold mb-3 text-[#00A884]">Canada / U.S. → China</h3>
                <p className="text-[14px] text-[#444] leading-[1.7] mb-3">
                  North American companies seeking reliable Chinese suppliers, manufacturers, or OEM partners. We help you identify qualified candidates, validate capabilities, and coordinate initial due diligence.
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Supplier identification and shortlisting</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Factory capability verification coordination</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Initial communication and meeting facilitation</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Sample and prototype logistics coordination</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 border border-[#C9A44C] bg-white">
                <h3 className="text-[16px] md:text-[17px] font-semibold mb-3 text-[#C9A44C]">China → Canada / U.S.</h3>
                <p className="text-[14px] text-[#444] leading-[1.7] mb-3">
                  Chinese manufacturers and brands seeking distribution partners, local representation, or direct market access in Canada and North America. We help you understand market requirements and connect with appropriate local counterparts.
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#C9A44C]">Market entry readiness screening</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#C9A44C]">Introduction to potential distributors or channel partners</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#C9A44C]">Trade show and industry event coordination</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#C9A44C]">Local operational support for initial market presence</li>
                </ul>
              </div>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Supply Chain Coordination
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
              Beyond introductions, we help coordinate the operational elements of cross-border supply chain relationships:
            </p>
            <div className="space-y-3 mb-10">
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h4 className="text-[15px] font-medium mb-1">3PL and Warehousing Introductions</h4>
                <p className="text-[14px] text-[#555] leading-[1.6]">Connections to third-party logistics providers and warehousing options in Canada and the United States for inventory storage and fulfillment.</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h4 className="text-[15px] font-medium mb-1">Compliance and Documentation Guidance</h4>
                <p className="text-[14px] text-[#555] leading-[1.6]">Overview of import documentation, labeling requirements, and certification needs for cross-border shipments. We coordinate with licensed customs brokers for specific filing work.</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h4 className="text-[15px] font-medium mb-1">Quality and Inspection Coordination</h4>
                <p className="text-[14px] text-[#555] leading-[1.6]">Support for arranging pre-shipment inspections, factory audits, and quality verification processes before goods leave China.</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h4 className="text-[15px] font-medium mb-1">Trade Show and Business Mission Support</h4>
                <p className="text-[14px] text-[#555] leading-[1.6]">Coordination of trade show participation, business mission planning, and on-the-ground support for delegations visiting from either direction.</p>
              </div>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              What CCBONLINE Does Not Do
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-3">
                We do not broker deals, take commissions on transactions, or guarantee specific business outcomes. We are not a trading company, freight forwarder, or licensed customs broker. Our role is to facilitate connections, provide operational coordination support, and help both parties make informed decisions.
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                For customs clearance, we coordinate with licensed brokers. For freight and shipping, we work with established logistics providers. For legal matters, we refer to qualified legal professionals in the relevant jurisdiction.
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              How It Works
            </h2>
            <div className="space-y-4 mb-10">
              <div className="flex gap-4">
                <span className="text-[#C9A44C] text-[14px] font-medium shrink-0 w-6">01</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">Requirements discussion</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">We understand your product, volume, timeline, quality standards, and what you are looking for in a commercial partner.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#C9A44C] text-[14px] font-medium shrink-0 w-6">02</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">Matching and introduction</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">We identify and introduce qualified candidates from our network, with background information and capability notes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#C9A44C] text-[14px] font-medium shrink-0 w-6">03</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">Coordination and follow-through</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">We support initial meetings, sample exchanges, and due diligence coordination. Both parties evaluate fit independently.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#C9A44C] text-[14px] font-medium shrink-0 w-6">04</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">Operational setup support</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">If both parties proceed, we help coordinate the operational elements — logistics, compliance, warehousing — that make the relationship work in practice.</p>
                </div>
              </div>
            </div>

            <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px] inline-block">Discuss a Connection</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">FAQ</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Common Questions
            </h2>
            <div className="space-y-3 mb-10">
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Do you charge commission on transactions?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">No. We charge for our coordination and advisory services. We do not take commissions on trade volume, supplier payments, or transaction value.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">How do you qualify suppliers or partners?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">We conduct initial capability screening based on product category, certifications, production capacity, and export experience. We coordinate factory audits and third-party verification as needed. Final due diligence responsibility rests with the engaging party.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">What industries do you cover?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">We focus on manufactured products, building materials, industrial equipment, consumer goods, and technology hardware. We do not facilitate connections for food products, pharmaceuticals, or hazardous materials due to regulatory complexity.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Can you help with ongoing supply chain management?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">We support ongoing coordination — regular check-ins, issue escalation, operational adjustments — through our Advisory Retainer. Day-to-day supply chain management should be handled by your internal team or a dedicated 3PL partner.</p>
                </div>
              </details>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              Related Services
            </h2>
            <ul className="space-y-2">
              <li><Link to="/en/market-entry" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Canada & North America Market Entry</Link></li>
              <li><Link to="/en/services/3pl-warehousing-advisory" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">3PL & Warehousing Advisory</Link></li>
              <li><Link to="/en/services/compliance-responsibility-chain" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Compliance & Responsibility Chain</Link></li>
              <li><Link to="/en/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Contact CCBONLINE</Link></li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Looking to connect with Canadian or Chinese business partners?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                Tell us about your product, requirements, and what you are looking for. We will assess whether a facilitated connection makes sense.
              </p>
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Discuss a Connection</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
