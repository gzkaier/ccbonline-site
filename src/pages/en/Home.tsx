import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ENHome() {
  useSEO({
    title: 'CCBONLINE INC. | Cross-Market Business Credibility & Connection Services',
    description: 'CCBONLINE INC. helps businesses build trust, clarity, and connections across Canada, North America and China. Market entry diagnostics, brand credibility audits, website trust upgrades, bilingual materials, and business connection services.',
    canonical: 'https://www.ccbonline.ca/en',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'CCBONLINE INC. | Cross-Market Business Credibility & Connection Services'
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
              alt="CCBONLINE INC. — Cross-Market Business Credibility & Connection"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/90 to-[#0B0E14]/55" />
          <div className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5 font-medium">
              Cross-Market Business Credibility & Connection Services
            </p>
            <h1 className="font-serif text-white text-[26px] sm:text-[34px] md:text-[44px] lg:text-[50px] leading-[1.2] tracking-tight max-w-[900px] mb-4 md:mb-6">
              Build trust, clarity, and business connections across Canada, North America, and China
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6 md:mb-8">
              CCBONLINE INC. provides market entry diagnostics, brand credibility audits, website and digital trust upgrades, bilingual business materials, media content, and cross-market connection services — for businesses moving between Canada, North America, and China in any direction.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6">
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Book a Diagnostic Call</Link>
              <Link to="/en/services/website-credibility-audit" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Credibility Audit — From CAD 299</Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/40">
              <span>Toronto · North York · Canada-Registered</span>
              <span>·</span>
              <span>English · Chinese · French</span>
            </div>
          </div>
        </section>

        {/* Seven Services */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">What We Do</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              Seven ways we help businesses get ready — and get connected
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-10">
              Not a service list. These are the areas where we make judgment, do the work, and help you move forward. Pick the one that matches where you are now.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { num: '01', title: 'North America Market Entry Diagnostic', desc: 'For Chinese enterprises, manufacturers, and brands preparing to enter Canada or the US. Initial product-market fit, compliance gaps, English materials readiness, channel prep, and a 30–90 day action plan. Not a guaranteed roadmap — a clear-eyed assessment of what you still need.', price: 'From CAD 1,500', link: '/en/services/market-entry-diagnosis' },
                { num: '02', title: 'Business Reason & Brand Credibility Audit', desc: 'For companies with a website and product info, but unclear purchase rationale. We diagnose whether your buyers can understand your value, trust your claims, and find a reason to choose you. Covers brand positioning, value expression, and competitive differentiation.', price: 'From CAD 800', link: '/en/services/business-reason-credibility-diagnosis' },
                { num: '03', title: 'Website & Digital Trust Upgrade', desc: 'Not a redesign. We audit whether your site answers the questions buyers actually ask: Who are you? Who do you serve? Why should I trust you? What is the next step? Includes homepage, service pages, about, contact paths, FAQ, and English expression quality.', price: 'From CAD 299', link: '/en/services/website-credibility-audit' },
                { num: '04', title: 'Bilingual Business Materials & Localization', desc: 'English and Chinese business content written for the audience, not translated from one language to another. One-pagers, service descriptions, pitch decks, email templates, and FAQ — adapted to local business culture and buyer expectations.', price: 'From CAD 600', link: '/en/services/english-materials-optimization' },
                { num: '05', title: 'Business Media Content & Brand Visibility', desc: 'Professional business content that builds searchable trust: company features, industry observations, executive commentary, and media-ready articles. Distributed through CCBONLINE channels and optimized for both search engines and AI systems.', price: 'Project-based', link: '/en/services/media-business-content' },
                { num: '06', title: 'Trade Show, Event & Local Business Connection', desc: 'Pre-show preparation (materials, pitch, follow-up system), on-site support, and post-show lead management. Also: local service provider connections, partnership facilitation, and event collaboration for associations and trade organizations.', price: 'From CAD 1,200', link: '/en/services/trade-show-follow-up' },
                { num: '07', title: '30/90-Day Execution Support', desc: 'Hands-on support for businesses that have a plan but need help executing. Weekly check-ins, task management, content review, vendor coordination, and progress tracking. We do not do the work for you — we keep it moving with you.', price: 'From CAD 3,000/mo', link: '/en/services/advisory-retainer' },
              ].map((item) => (
                <div key={item.num} className="p-5 md:p-6 border border-white/10 hover:border-[#00B894]/50 transition-colors bg-white/5">
                  <div className="flex items-start gap-4">
                    <span className="text-[#D4AF37] text-[13px] font-medium shrink-0">{item.num}</span>
                    <div className="flex-1">
                      <h3 className="text-white text-[17px] md:text-[18px] font-semibold mb-2">{item.title}</h3>
                      <p className="text-white/55 text-[13px] md:text-[14px] leading-[1.65] mb-3">{item.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#D4AF37] text-[13px]">{item.price}</span>
                        <Link to={item.link} className="text-[13px] font-medium text-[#00B894] hover:underline">Learn more →</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who For */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <p className="text-label mb-3">Who We Work With</p>
                <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
                  Businesses moving between markets — in any direction
                </h2>
                <div className="space-y-3">
                  {[
                    'Chinese manufacturers and brands entering Canada or the US',
                    'Canadian and North American businesses connecting with China or Chinese suppliers',
                    'Canadian Chinese businesses seeking mainstream market credibility',
                    'Service providers, associations, and event organizers bridging markets',
                    'Companies preparing for trade shows, channel development, or partnership building',
                    'Businesses that need their website and materials to work across languages and cultures',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                      <span className="text-[#00B894] mt-0.5 shrink-0">✓</span>
                      <span className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-label mb-3" style={{ color: '#999' }}>Not a Good Fit</p>
                <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
                  Where we are not the right choice
                </h2>
                <div className="space-y-3">
                  {[
                    'Looking for the cheapest website or copywriting',
                    'Wanting guaranteed sales, rankings, or instant results',
                    'No existing product, materials, or willingness to collaborate',
                    'Seeking fake reviews, inflated claims, or shortcuts',
                    'Wanting a one-size-fits-all AI-generated package',
                    'Businesses not willing to invest time in preparation',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                      <span className="text-[#999] mt-0.5 shrink-0">—</span>
                      <span className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">How We Engage</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              First step: a diagnostic conversation, not a quote
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-10">
              We review your current materials, website, goals, and resources before recommending any service. If you are not ready, we will tell you what to prepare first. This initial consultation is free.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: '01', title: 'Assessment', desc: 'Review your situation. Determine if conditions are right, or what needs to be prepared first.' },
                { step: '02', title: 'Diagnosis', desc: 'Evaluate credibility, expression, gaps, and risks. Tell you what is ready and what needs work.' },
                { step: '03', title: 'Design', desc: 'Develop optimized content, materials, and a clear action plan tailored to your situation.' },
                { step: '04', title: 'Support', desc: 'Hands-on help with execution, connections, content, and ongoing progress tracking.' },
              ].map((item) => (
                <div key={item.step} className="p-5 bg-white border border-[#E5E5E5]">
                  <p className="text-[#D4AF37] text-[13px] font-medium mb-3">{item.step}</p>
                  <h3 className="text-[17px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Note */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">About AI</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              AI assists our work. Judgment is human.
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65]">
              We use AI tools to accelerate research, drafting, and analysis. Every recommendation, every piece of client-facing content, and every strategic call is reviewed and validated by a human who understands the business context. AI is our tool. Professional judgment is our product.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Ready to see where your cross-market credibility stands?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                Submit your website or company overview for a free preliminary assessment. For a detailed audit, our Website & Digital Trust review starts at CAD 299.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Book a Diagnostic Call</Link>
                <Link to="/en/services/website-credibility-audit" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Credibility Audit</Link>
              </div>
              <p className="text-white/40 text-[13px] mt-6">info@ccbonline.ca · +1 647 568 1128 · 84 Kenhar Dr, North York, ON M9L 1N2</p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
