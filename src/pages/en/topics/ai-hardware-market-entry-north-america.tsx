import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function EN_AIHardwareMarketEntryNorthAmerica() {
  useSEO({
    title: 'AI Hardware Market Entry in North America | Compliance, Classification, and Channel Strategy | CCBONLINE INC.',
    description: 'AI hardware entering Canada and the US: IC/FCC certification, data privacy regulations, export controls, product classification, and practical market entry guidance for hardware companies.',
    canonical: 'https://www.ccbonline.ca/en/topics/ai-hardware-market-entry-north-america',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'AI Hardware Market Entry in North America | Compliance, Classification, and Channel Strategy | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Industry Guide</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              AI Hardware Market Entry in North America
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[720px]">
              AI hardware sits at the intersection of technology innovation and complex regulation. Between wireless certification, data privacy laws, potential export controls, and evolving AI-specific legislation, this category demands careful navigation. This guide covers what AI hardware companies need to know before entering Canada and the US.
            </p>
          </div>
        </section>

        {/* Unique Challenges */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Why AI Hardware Is Different</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              Regulatory complexity beyond standard electronics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: 'Wireless and RF certification', desc: 'Most AI hardware has wireless connectivity (WiFi, Bluetooth, cellular, or proprietary protocols). Each requires Innovation, Science and Economic Development Canada (ISED) certification in Canada and FCC certification in the US. Multiple radio modules mean multiple certifications.' },
                { title: 'Data privacy and collection', desc: 'If your AI hardware collects, processes, or transmits data, you are subject to PIPEDA (Canada\'s federal privacy law) and potentially provincial privacy laws. In the US, state-level laws like the California Consumer Privacy Act (CCPA) may apply. This affects how data is handled, stored, and consented to.' },
                { title: 'AI-specific regulation is evolving', desc: 'Canada\'s proposed Artificial Intelligence and Data Act (AIDA) will impose new requirements on "high-impact" AI systems. The EU AI Act already affects companies serving European markets. While US federal AI regulation is still developing, industry-specific rules may apply depending on your use case.' },
                { title: 'Export control considerations', desc: 'AI hardware with sufficient processing power or specific capabilities may be subject to export controls. If your hardware contains restricted components or exceeds certain performance thresholds, licensing requirements may apply through Canada\'s Export and Import Permits Act or US EAR/ITAR regulations.' },
              ].map((item, i) => (
                <div key={i} className="p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[16px] font-semibold mb-3 leading-[1.5]">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">By Product Type</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              What different AI hardware products face
            </h2>
            <div className="space-y-4">
              {[
                { type: 'Edge AI Devices (cameras, sensors, processors)', issues: ['ISED/FCC certification for wireless components', 'Data handling and privacy compliance', 'Electrical safety (CSA/cUL)', 'Depending on application: security device regulations, medical device classification'] },
                { type: 'AI-Enabled Consumer Electronics', issues: ['Standard consumer electronics certification plus AI-specific considerations', 'Voice/data collection consent mechanisms', 'Children\'s privacy protections (if applicable)', 'Product liability for AI-driven decisions'] },
                { type: 'Industrial AI Hardware', issues: ['Workplace safety certifications', 'EMC (electromagnetic compatibility) requirements', 'Industrial control system security standards', 'Integration with existing industrial infrastructure'] },
                { type: 'Autonomous Vehicle Components', issues: ['Transport Canada Motor Vehicle Safety Standards', 'Extensive testing and validation requirements', 'Liability and insurance complexity', 'Provincial regulatory differences for autonomous systems'] },
                { type: 'AI Computing Hardware (GPUs, accelerators)', issues: ['Export control screening for high-performance processors', 'Power and thermal safety standards', 'Electromagnetic compatibility', 'Data center-specific certifications if applicable'] },
              ].map((group, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[16px] md:text-[17px] font-semibold mb-4">{group.type}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.issues.map((issue, j) => (
                      <li key={j} className="text-[14px] text-[#555] leading-[1.6] pl-3 border-l-2 border-[#00B894]">{issue}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Roadmap */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Compliance Roadmap</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              Step-by-step for AI hardware entering Canada
            </h2>
            <div className="max-w-[800px] space-y-6">
              {[
                { step: '01', title: 'Product Classification', desc: 'Determine exactly what regulations apply. Consumer electronics? Security device? Industrial equipment? Medical device adjacent? Each has a different regulatory path. Get this wrong and everything downstream is delayed.' },
                { step: '02', title: 'ISED/FCC Certification', desc: 'All wireless-capable devices need radio certification. In Canada, this is through ISED\'s Certification and Engineering Bureau. Timeline: 4-8 weeks if testing is complete. Budget for testing at an accredited lab.' },
                { step: '03', title: 'Electrical Safety Certification', desc: 'CSA, cUL, or ETL certification for electrical safety. This is separate from wireless certification. Timeline: 6-12 weeks depending on product complexity. Required before product can be legally sold.' },
                { step: '04', title: 'Data Privacy Assessment', desc: 'Assess what data your device collects, where it is stored, who has access, and how consent is obtained. Document this. If you process personal information, you need a privacy compliance framework.' },
                { step: '05', title: 'Export Control Review', desc: 'Screen your product against Canada\'s Export Control List and, if relevant, US EAR classifications. High-performance processors and certain AI capabilities may require export permits.' },
                { step: '06', title: 'Labeling and Documentation', desc: 'English and French labels (for Canada), ISED certification numbers, model numbers, manufacturer information, safety warnings. Documentation must be accurate and complete for customs clearance.' },
              ].map((phase) => (
                <div key={phase.step} className="flex gap-4 md:gap-6">
                  <span className="text-[#D4AF37] text-[14px] font-medium w-[32px] shrink-0">{phase.step}</span>
                  <div className="pb-6 border-b border-[#E5E5E5] flex-1">
                    <h4 className="text-[16px] font-semibold mb-2">{phase.title}</h4>
                    <p className="text-[14px] text-[#767676] leading-[1.65]">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Channel Strategy */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Channels</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              How AI hardware typically reaches the North American market
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { channel: 'Direct B2B Sales', desc: 'For industrial AI hardware and enterprise solutions. Requires local sales capability, technical support, and relationship building. Higher margins but longer sales cycles.', fit: 'Best for: enterprise/industrial AI hardware' },
                { channel: 'Technology Distributors', desc: 'Distributors like Ingram Micro, Synnex, and regional specialty distributors can provide reach across Canada and the US. They handle logistics, credit, and some support.', fit: 'Best for: standard AI components and consumer-facing devices' },
                { channel: 'System Integrators', desc: 'Integrators bundle your hardware into larger solutions. Good for edge AI devices and specialized applications. Requires strong technical documentation and partner support.', fit: 'Best for: edge AI, specialized sensors, industrial applications' },
              ].map((item, i) => (
                <div key={i} className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
                  <h4 className="text-[16px] font-semibold mb-2">{item.channel}</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6] mb-3">{item.desc}</p>
                  <p className="text-[13px] text-[#00B894]">{item.fit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">FAQ</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Questions AI hardware companies ask
            </h2>
            <div className="space-y-3">
              {[
                { q: 'Do I need separate certifications for Canada and the US?', a: 'For wireless certification, yes — ISED for Canada, FCC for the US. However, testing at an accredited lab that serves both agencies can streamline the process. For electrical safety, CSA/cUL certification is often accepted in both countries if it meets UL standards. Plan for dual certification but look for efficiencies.' },
                { q: 'How do export controls affect AI hardware?', a: 'If your hardware has sufficient processing power (measured in TOPS or equivalent), contains restricted-origin components, or is designed for specific end uses (military, surveillance), export controls may apply. The threshold changes periodically. Consult with an export control specialist early in your planning.' },
                { q: 'What about AI regulation specifically?', a: 'Canada\'s AIDA (Artificial Intelligence and Data Act) is expected to impose requirements on "high-impact" AI systems, including those used in critical infrastructure, biometric identification, and certain decision-making contexts. If your hardware falls into these categories, prepare for additional documentation and potentially third-party auditing requirements.' },
                { q: 'How long should I budget for full market entry?', a: 'For AI hardware with wireless capability, plan 8-14 months from start to first sale. Certification (ISED/CSA): 3-5 months. Channel development: 2-4 months. Privacy compliance framework: 1-2 months. Export control screening: 1-2 months. This assumes no major regulatory surprises.' },
                { q: 'Should I patent my technology before entering?', a: 'IP protection should be addressed before market entry. Canada and the US have different patent systems, but the costs and processes are manageable. Consider filing in both jurisdictions. Also consider trademark protection for your brand name and any distinctive product features.' },
              ].map((faq, i) => (
                <details key={i} className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">{faq.q}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Bringing AI hardware to Canada or the US?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                CCBONLINE INC. works with AI hardware companies to navigate certification requirements, assess regulatory exposure, and design practical market entry paths for Canada and the US.
              </p>
              <Link to="/en/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">Request an AI Hardware Assessment</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
