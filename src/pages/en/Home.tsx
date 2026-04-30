import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ENHome() {
  useEffect(() => {
    document.title = 'CCBONLINE INC. | Canada & North America Market Entry Partner for Chinese Businesses'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/canada-north-america-market-entry-consulting.jpg"
              alt="CCBONLINE helps Chinese companies enter Canada and North America through market entry diagnosis and local execution support."
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/80 to-[#0a0a1a]/40" />
          <div className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
            <p className="text-white/50 text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5">
              CCBONLINE INC.
            </p>
            <h1 className="font-serif text-white text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.2] tracking-tight max-w-[900px] mb-4 md:mb-6" style={{ wordBreak: 'keep-all' }}>
              <span className="block">Canada & North America</span>
              <span className="block">Market Entry Partner</span>
              <span className="block">for Chinese Businesses</span>
            </h1>
            <p className="text-white/65 text-[15px] md:text-[16px] leading-[1.65] max-w-[640px] mb-6 md:mb-8">
              Market-entry diagnosis, compliance pathway design, channel validation, and local execution support for Chinese businesses entering Canada and North America.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Book a Market Entry Consultation</Link>
              <Link to="/en/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>View Services</Link>
            </div>
          </div>
        </section>

        {/* Definition Block */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Definition</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-6 md:mb-8">
              What Is North America Market Entry Advisory?
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-4">
              North America market entry advisory is not marketing, sales outsourcing, or website development. It is the structured work of assessing whether your product fits, designing the compliance and operational path, validating customer and partner channels, and coordinating local execution resources to turn market intent into real operations.
            </p>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px]">
              For Chinese companies, entering Canada and the United States requires more than demand. It requires a clear responsibility chain across certification, importation, documentation, channel, warehousing, after-sales, insurance, and local accountability. CCBONLINE INC. coordinates this chain.
            </p>
          </div>
        </section>

        {/* Three Core Services */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Core Capabilities</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight mb-8 md:mb-10">
              Three Core Capabilities
            </h2>
            <div className="grid grid-cols-1 gap-4 md:gap-5">
              <div className="card-border bg-white flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F8F9FA] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#767676" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <div>
                  <h3 className="text-[16px] md:text-[17px] font-semibold mb-1.5">Market Entry Diagnosis</h3>
                  <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">Assess whether your product is ready for Canada and North America, and what gaps must be closed first.</p>
                </div>
              </div>
              <div className="card-border bg-white flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F8F9FA] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#767676" strokeWidth="1.5"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
                </div>
                <div>
                  <h3 className="text-[16px] md:text-[17px] font-semibold mb-1.5">Compliance Pathway Design</h3>
                  <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">Map certification, customs, tax, and regulatory requirements so you know exactly what is needed before shipping.</p>
                </div>
              </div>
              <div className="card-border bg-white flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F8F9FA] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#767676" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
                <div>
                  <h3 className="text-[16px] md:text-[17px] font-semibold mb-1.5">Local Execution Support</h3>
                  <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">Weekly tracking, partner coordination, and phase reviews that turn plans into actual customer conversations and orders.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Framework */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Framework</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight mb-8 md:mb-10">
              Our Entry Framework
            </h2>
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {[
                { num: '01', title: 'Diagnose', desc: 'Product fit, certification gaps, competitor scan' },
                { num: '02', title: 'Design', desc: 'Compliance pathway, channel strategy, partner map' },
                { num: '03', title: 'Validate', desc: 'Customer conversations, partner meetings, pilot orders' },
                { num: '04', title: 'Coordinate', desc: 'Align brokers, certifiers, 3PL, and local reps' },
                { num: '05', title: 'Execute', desc: '90-day roadmap with weekly tracking and reviews' },
              ].map((f) => (
                <div key={f.num} className="flex items-start gap-4 p-4 md:p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <span className="text-[#C00000] text-[14px] font-bold mt-0.5 min-w-[28px]">{f.num}</span>
                  <div>
                    <h3 className="text-[16px] md:text-[17px] font-semibold mb-1">{f.title}</h3>
                    <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Help */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Clients</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight mb-8 md:mb-10">
              Who We Help
            </h2>
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {[
                'Chinese manufacturers with export-ready products',
                'Consumer brands preparing for North American launch',
                'Industrial suppliers looking for local partners',
                'Technology and AI hardware companies with certification needs',
                'Service companies expanding from China into Canada',
                'Cross-border teams needing local business support',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white border border-[#E5E5E5]">
                  <span className="text-[#C00000] text-[14px] mt-0.5 shrink-0">✓</span>
                  <span className="text-[15px] md:text-[16px] text-[#444] leading-[1.55]">{text}</span>
                </div>
              ))}
            </div>
            <p className="text-[13px] md:text-[14px] text-[#999] mt-4">
              We do not replace lawyers, accountants, or logistics providers. We coordinate across them to build a practical market entry path.
            </p>
          </div>
        </section>

        {/* What We Do Not Replace */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Boundaries</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              What We Do Not Replace
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[800px]">
              {[
                { title: 'We do not replace lawyers or accountants', desc: 'We coordinate with them. We are not licensed to provide legal or tax advice.' },
                { title: 'We do not guarantee sales or revenue', desc: 'We build the conditions for market entry. Actual sales depend on product, timing, and execution.' },
                { title: 'We are not a digital marketing agency', desc: 'Digital presence is part of market entry infrastructure, not our primary service.' },
                { title: 'We do not handle customs clearance directly', desc: 'We work with licensed customs brokers. We design the pathway and introduce the right partners.' },
              ].map((item, i) => (
                <div key={i} className="card-border bg-white">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">FAQ</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              Frequently Asked Questions
            </h2>
            <div className="max-w-[800px] space-y-3">
              {[
                { q: 'What does CCBONLINE actually do?', a: 'We help Chinese companies enter Canada and North America. We assess readiness, design compliance pathways, validate channels, coordinate local partners, and support execution.' },
                { q: 'Do you replace lawyers or accountants?', a: 'No. We coordinate with professional partners where legal, tax, customs, or certification expertise is required.' },
                { q: 'How long does market entry take?', a: 'Initial diagnosis takes 2–4 weeks. A full 0–90 day roadmap is typically delivered within 30 days. Execution support continues as long as needed.' },
                { q: 'Do we need a local entity first?', a: 'Not always. Many companies start with partner-based or direct-export models. We help you determine the right structure.' },
                { q: 'What does it cost?', a: 'We offer three engagement levels. Contact us for a tailored estimate based on your product and scope.' },
              ].map((faq, i) => (
                <details key={i} className="group border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">{faq.q}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#767676]"><path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                Ready to assess your North America readiness?
              </h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Book a Market Entry Consultation</Link>
                <Link to="/en/canada-market-entry" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Explore Canada Entry</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
