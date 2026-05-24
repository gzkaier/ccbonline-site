import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ENHome() {
  useSEO({
    title: 'Canada & North America Market Entry Advisory | CCBONLINE INC.',
    description: 'CCBONLINE INC. helps Chinese manufacturers, brands, and suppliers assess, plan, and execute market entry into Canada and North America. Market entry diagnosis, compliance pathway design, local execution coordination.',
    canonical: 'https://www.ccbonline.ca/en',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Canada & North America Market Entry Advisory | CCBONLINE INC.'
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
              alt="CCBONLINE INC. provides Canada and North America market entry advisory for Chinese manufacturers and brands."
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/85 to-[#07111F]/50" />
          <div className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5 font-medium">
              Canada-Registered · Toronto-Based
            </p>
            <h1 className="font-serif text-white text-[26px] sm:text-[34px] md:text-[42px] lg:text-[48px] leading-[1.2] tracking-tight max-w-[900px] mb-4 md:mb-6">
              Market Entry Advisory for Businesses Entering Canada & North America
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[680px] mb-6 md:mb-8">
              CCBONLINE INC. is a Canada-registered business advisory company based in the Greater Toronto Area. We help manufacturers, brands, and suppliers assess whether their products are ready for Canada and North America — and what it actually takes to enter.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6">
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Request an Initial Diagnosis</Link>
              <Link to="/en/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Explore Services</Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/40">
              <span>Market Entry Diagnosis</span>
              <span>·</span>
              <span>Compliance & Responsibility Chain</span>
              <span>·</span>
              <span>Local Execution Support</span>
            </div>
          </div>
        </section>

        {/* Who We Help */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Who We Help</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              Businesses Preparing to Enter Canada & North America
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              We work best with companies that already have real products, clear market intent, and the willingness to build a practical entry path rather than rely on shortcuts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: 'Chinese Manufacturers', desc: 'Companies with proven production capacity seeking structured entry into Canadian and North American markets.' },
                { title: 'Export-Oriented Brands', desc: 'Brands with differentiated products that need positioning, compliance, and channel strategy for North America.' },
                { title: 'Industrial Suppliers', desc: 'Equipment, machinery, and component makers who need certification, IOR setup, and local partner coordination.' },
                { title: 'Service Providers', desc: 'Professional services firms expanding into Canada — tax, legal, logistics, insurance, education, and consulting.' },
                { title: 'Growth-Stage Businesses', desc: 'Companies with domestic success ready to move beyond trial-and-error approaches to market entry.' },
                { title: 'Trade Show Participants', desc: 'Exhibitors preparing for or following up from Canadian and US trade shows who need structured execution.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Entry Gaps */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Entry Gaps</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              Common Entry Gaps We See
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              Many companies already have solid products, but their market-entry foundation is not ready for North America. Here are the most common gaps we encounter.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {[
                { title: 'Product is ready, but documentation is not', desc: 'English product specs, datasheets, user manuals, and safety warnings are incomplete, outdated, or written for a different audience. North American buyers expect professional, complete documentation before they will engage.' },
                { title: 'The company has inquiries, but no local follow-up process', desc: 'Leads come in from trade shows, website inquiries, or referrals, but there is no structured follow-up rhythm, no local point of contact, and no process to qualify or nurture prospects.' },
                { title: 'Certification, import responsibility, and warranty obligations are not clearly mapped', desc: 'Uncertainty about CSA/UL/FCC requirements, who serves as Importer of Record (IOR), how warranty claims will be handled locally, and what insurance coverage is needed before the first shipment.' },
                { title: 'The website exists, but North American buyers cannot quickly understand the offer', desc: 'Websites lack clear English product information, verifiable certifications, professional presentation, and trust signals that North American buyers look for when evaluating new suppliers.' },
                { title: 'Trade show leads are collected, but not converted into structured follow-up', desc: 'Business cards are gathered, but there is no systematic post-show outreach, no adapted materials for North American prospects, and no local coordination to turn interest into meetings.' },
                { title: 'A distributor was found, but the responsibility chain was never clarified', desc: 'A local partner was identified, but questions about import liability, warranty handling, after-sales support, and who owns the customer relationship remain unanswered.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border-l-2 border-[#C9A44C] border border-[#E5E5E5]">
                  <h3 className="text-[15px] font-semibold mb-2 leading-[1.5]">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Do */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Services</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              What We Do
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-10">
              We focus on five core capabilities because they are what matters most when entering a new market. Each service is designed to move you from uncertainty to action.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { num: '01', title: 'Market Entry Diagnosis', desc: 'Before you invest, we assess your readiness. Product-market fit analysis, competitive landscape review, certification requirements, and a clear go/no-go recommendation with specific next steps.' },
                { num: '02', title: 'Local Execution & Partner Coordination', desc: 'We do not just advise — we coordinate. Local partner matching, relationship management, weekly progress tracking, and hands-on support to turn plans into actual operations.' },
                { num: '03', title: 'Compliance & Responsibility Chain', desc: 'Certification requirements (CSA, UL, FCC, IC), import documentation, IOR arrangement, tax registration, product liability, insurance, and warranty obligations — all mapped before you ship.' },
                { num: '04', title: 'Website & Commercial Content Diagnosis', desc: 'Review and improvement of your product materials, website, and documentation for North American buyers. Ensuring your online presence supports trust, not confusion.' },
                { num: '05', title: 'Media Communication & Business Exposure', desc: 'Brand positioning, content adaptation, event coordination, and communication strategies that help you reach the right audiences in Canada and North America.' },
              ].map((item) => (
                <div key={item.num} className="p-6 border border-white/10 hover:border-[#00A884]/50 transition-colors">
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

        {/* How Local Execution Works */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Process</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              How Local Execution Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: '01', title: 'Diagnose', desc: 'We review your product, documentation, target market, current stage, and key entry risks. You get a clear assessment of what is ready and what is not.' },
                { step: '02', title: 'Prepare', desc: 'We help organize market-entry materials, English content, responsibility-chain questions, and partner communication documents.' },
                { step: '03', title: 'Coordinate', desc: 'We coordinate with relevant local partners, service providers, channels, or follow-up contacts based on your project needs.' },
                { step: '04', title: 'Track', desc: 'We help keep the project moving through weekly tracking, action lists, responsibility mapping, and next-step reviews.' },
              ].map((item) => (
                <div key={item.step} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[#C9A44C] text-[13px] font-medium mb-3">{item.step}</p>
                  <h3 className="text-[17px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why CCBONLINE */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Why CCBONLINE</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              Why Businesses Work With CCBONLINE INC.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: 'Canada-Based', desc: 'A registered company in the Greater Toronto Area with real local presence and operational capability.' },
                { title: 'Bilingual Communication', desc: 'Fluent in Chinese and English, bridging cultural and business practice gaps between markets.' },
                { title: 'Market-Entry Judgment', desc: 'We assess whether you should enter, not just how. An honest no-go recommendation is more valuable than a flawed go plan.' },
                { title: 'Responsibility-Chain Awareness', desc: 'We map certification, import, warranty, insurance, and liability before you ship — not after problems arise.' },
                { title: 'Practical Execution', desc: 'Weekly tracking, partner coordination, task lists, and follow-through. We help projects move forward, not just plan.' },
                { title: 'Content & Media Capability', desc: 'We understand how Chinese businesses present themselves and what North American buyers expect to see. We help close that gap.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Resources</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              Market Entry Resources
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              Practical guides, checklists, and insights to help you assess your readiness before committing to a full engagement.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { title: 'Canada Market Entry Readiness Checklist', desc: 'A structured self-assessment covering product, documentation, compliance, and channel readiness.', status: 'Coming soon' },
                { title: 'Website Credibility Checklist for Export Businesses', desc: 'Key elements North American buyers look for when evaluating a supplier website.', status: 'Coming soon' },
                { title: 'IOR & Import Responsibility Basics', desc: 'What Importer of Record means, why it matters, and how to arrange it for Canada and the US.', status: 'Available' },
                { title: 'Trade Show Follow-up Checklist', desc: 'How to convert trade show leads into structured follow-up and real opportunities.', status: 'Coming soon' },
                { title: 'Product Certification Guide for Canada', desc: 'CSA, UL, FCC, IC and other certification requirements by product category.', status: 'Coming soon' },
                { title: 'English Product Documentation Checklist', desc: 'What documentation North American distributors and buyers expect to see.', status: 'Coming soon' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[15px] font-semibold leading-[1.4]">{item.title}</h3>
                    <span className="text-[11px] text-[#999] uppercase tracking-wider shrink-0 ml-2">{item.status}</span>
                  </div>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/en/insights" className="btn-primary text-[14px] px-5 py-3 min-h-[48px]">Read Market Entry Insights</Link>
              <span className="text-[13px] text-[#999] self-center">Checklists available upon request</span>
            </div>
          </div>
        </section>

        {/* Start Here */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Start Here</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              Choose Your Starting Point
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-6 bg-white border border-[#E5E5E5]">
                <p className="text-[11px] text-[#999] uppercase tracking-wider mb-3">Exploring</p>
                <h3 className="text-[17px] font-semibold mb-3">Just Starting to Explore?</h3>
                <p className="text-[14px] text-[#767676] leading-[1.6] mb-4">Download a checklist or read our market entry insights to understand what readiness actually looks like.</p>
                <Link to="/en/insights" className="text-[14px] font-medium text-[#00A884] hover:underline">Read Insights &rarr;</Link>
              </div>
              <div className="p-6 bg-white border border-[#E5E5E5]">
                <p className="text-[11px] text-[#999] uppercase tracking-wider mb-3">Active</p>
                <h3 className="text-[17px] font-semibold mb-3">Have a Specific Challenge?</h3>
                <p className="text-[14px] text-[#767676] leading-[1.6] mb-4">Submit your product and situation. We will review and recommend the right service for your stage.</p>
                <Link to="/en/contact" className="text-[14px] font-medium text-[#00A884] hover:underline">Request a Diagnosis &rarr;</Link>
              </div>
              <div className="p-6 bg-white border border-[#E5E5E5]">
                <p className="text-[11px] text-[#999] uppercase tracking-wider mb-3">Ready</p>
                <h3 className="text-[17px] font-semibold mb-3">Ready to Move Forward?</h3>
                <p className="text-[14px] text-[#767676] leading-[1.6] mb-4">Book a consultation to discuss your market entry project with a local advisor.</p>
                <Link to="/en/contact" className="text-[14px] font-medium text-[#00A884] hover:underline">Book a Consultation &rarr;</Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Ready to Evaluate Your North America Readiness?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                Tell us where you are, what product you are working with, and what is blocking your progress. We will recommend the right first step.
              </p>
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Request an Initial Diagnosis</Link>
              <p className="text-white/40 text-[13px] mt-4">info@ccbonline.ca · +1 647 568 1128 · 84 Kenhar Dr, North York, ON M9L 1N2</p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
