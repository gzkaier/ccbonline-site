import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ENHome() {
  useSEO({
    title: 'CCBONLINE INC. | Canada & North America Market Entry Advisory',
    description: 'CCBONLINE INC. helps manufacturers, brands, suppliers, and growth-stage businesses evaluate, plan, and execute practical market entry into Canada and North America.',
    canonical: 'https://www.ccbonline.ca/en',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'CCBONLINE INC. | Canada & North America Market Entry Advisory'
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
              alt="CCBONLINE helps businesses enter Canada and North America through market entry diagnosis and local execution support."
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/85 to-[#07111F]/50" />
          <div className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5 font-medium">
              CCBONLINE INC.
            </p>
            <h1 className="font-serif text-white text-[26px] sm:text-[34px] md:text-[42px] lg:text-[48px] leading-[1.2] tracking-tight max-w-[900px] mb-4 md:mb-6">
              Not Just a Service Provider—Your Local Growth Partner in Canada
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[680px] mb-6 md:mb-8">
              We specialize in helping businesses truly enter the Canadian market, not just complete transactions. CCBONLINE INC. is a registered company in Canada, headquartered in Toronto, focusing on business entry services in the North American market.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4">
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Book a Free Consultation</Link>
              <Link to="/en/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Explore Our Services</Link>
            </div>
            <p className="text-white/40 text-[13px] md:text-[14px] max-w-[560px]">
              Tell us where you are now, what market you are targeting, and what is currently blocking progress.
            </p>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Who We Serve</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-6 md:mb-8">
              Businesses We Support
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              We do not serve everyone. We focus on businesses with real export-ready products, genuine market intent, and the resources to follow through. If you are looking for a low-cost shortcut, we are not the right fit.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { icon: '🔧', title: 'Manufacturers & Industrial Suppliers', desc: 'Companies with proven production capacity seeking to enter the Canadian and North American markets through direct distribution or B2B channels.' },
                { icon: '🏭', title: 'Hardware & Equipment Companies', desc: 'Industrial equipment, machinery, tools, and component manufacturers who need compliance certification and local channel development.' },
                { icon: '🏷️', title: 'Consumer Product Brands', desc: 'Brands with differentiated products looking to establish market presence, find retail partners, or build direct-to-consumer channels.' },
                { icon: '🌏', title: 'Service-Based Exporters', desc: 'Professional service firms, tech companies, and consultancies expanding from international markets into Canada and North America.' },
                { icon: '📦', title: 'Exporters & Trading Companies', desc: 'Established trading companies and exporters who want to move beyond transactional sales and build sustainable local operations.' },
                { icon: '🚀', title: 'Growth-Stage Businesses', desc: 'Companies with proven domestic success looking for structured market entry support rather than trial-and-error approaches.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00A884] transition-colors">
                  <div className="text-[24px] mb-3">{item.icon}</div>
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services - 4 pillars */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Services</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-6 md:mb-8">
              Four Core Service Modules
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-10">
              We focus on four core capabilities because they are what matters most when entering a new market. Each module is designed to move you from uncertainty to action.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { num: '01', title: 'Market Entry Diagnosis', desc: 'Before you invest, we assess your readiness. Product-market fit analysis, competitive landscape review, and a clear go/no-go recommendation with specific next steps.' },
                { num: '02', title: 'Local Execution & Partner Coordination', desc: 'We do not just advise—we coordinate. Local partner matching, relationship management, weekly progress tracking, and hands-on support to turn plans into actual orders.' },
                { num: '03', title: 'Compliance & Responsibility Chain', desc: 'Certification requirements, import documentation, customs compliance, tax registration, product liability, insurance, and warranty obligations—all mapped before you ship.' },
                { num: '04', title: 'Commercial Content & Media Communication', desc: 'Your product story, localized. Brand positioning, marketing content adaptation, media outreach, and communication strategies that resonate with North American buyers.' },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-white/10 hover:border-[#00A884]/50 transition-colors">
                  <p className="text-[#C9A44C] text-[13px] font-medium mb-3">{item.num}</p>
                  <h3 className="text-white text-[17px] md:text-[18px] font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/60 text-[14px] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/en/services" className="btn-primary text-[15px] px-8 py-3.5 min-h-[52px] inline-block">View All Services</Link>
            </div>
          </div>
        </section>

        {/* Market entry is not just about getting leads */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Judgment</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-6 md:mb-8">
              Market entry is not just about getting leads
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              Entering Canada and North America is not simply about finding buyers, launching a website, or sending more emails. It requires a workable path across market positioning, compliance coordination, import responsibility, channel logic, local execution, and project follow-through.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {[
                { title: 'Market judgment before expansion', desc: 'Assess whether your product fits and which market should come first.' },
                { title: 'Responsibility-chain awareness before shipment', desc: 'Know who handles certification, import, liability, and after-sales before shipping.' },
                { title: 'Local trust before inquiry conversion', desc: 'Buyers evaluate your credibility, documentation, and operational readiness.' },
                { title: 'Execution rhythm before scaling', desc: 'Without tracking, coordination, and review, market entry stalls.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Definition Block */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Definition</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-6 md:mb-8">
              What Is North America Market Entry Advisory?
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-4">
              North America market entry advisory is not marketing, sales outsourcing, or website development. It is the structured work of assessing whether your product fits, designing the compliance and operational path, validating customer and partner channels, and coordinating local execution resources to turn market intent into real operations.
            </p>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px]">
              Entering Canada and the United States requires more than demand. It requires a clear responsibility chain across certification, importation, documentation, channel, warehousing, after-sales, insurance, and local accountability. CCBONLINE INC. coordinates this chain.
            </p>
          </div>
        </section>

        {/* Trust */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Trust</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8 md:mb-12">
              Why Businesses Work With CCBONLINE INC.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { num: '01', title: 'Realistic Assessment', desc: 'We tell you what actually needs to happen, not what you want to hear.' },
                { num: '02', title: 'Pathway Design', desc: 'Clear, step-by-step plans from initial assessment through local execution.' },
                { num: '03', title: 'Responsibility Clarity', desc: 'No ambiguity about who handles what, when, and at what cost.' },
                { num: '04', title: 'Practical Execution', desc: 'Weekly tracking, partner coordination, and hands-on problem-solving.' },
                { num: '05', title: 'Compliance Before Shipment', desc: 'Certification, documentation, and regulatory requirements mapped upfront.' },
                { num: '06', title: 'Content That Converts', desc: 'Commercial content and communication strategies that resonate locally.' },
              ].map((t, i) => (
                <div key={i} className="p-5 border border-[#E5E5E5] hover:border-[#00A884] transition-colors">
                  <p className="text-[#C9A44C] text-[13px] font-medium mb-2">{t.num}</p>
                  <h3 className="text-[16px] font-semibold mb-2">{t.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site text-center">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Start Here</p>
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
              Ready to Explore Canada & North America?
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[600px] mx-auto mb-8">
              Tell us where you are, what product you are working with, and what is blocking your progress. We will recommend the right first step.
            </p>
            <Link to="/en/contact" className="btn-primary text-[15px] px-8 py-3.5 min-h-[52px] inline-block">Book a Free Consultation</Link>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
