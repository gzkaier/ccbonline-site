import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ENHome() {
  useSEO({
    title: 'CCBONLINE INC. | Canada-China Business Connection & Market Entry Services',
    description: 'CCBONLINE INC. helps businesses build trusted connections between Canada, North America and China through market entry advisory, bilingual website content, brand credibility, supplier connection and media exposure.',
    canonical: 'https://www.ccbonline.ca/en',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'CCBONLINE INC. | Canada-China Business Connection & Market Entry Services'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* ===== 1. Hero ===== */}
        <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/canada-north-america-market-entry-consulting.jpg"
              alt="CCBONLINE INC. helps businesses build trusted connections between Canada, North America and China."
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/85 to-[#07111F]/50" />
          <div className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5 font-medium">
              Canada-Registered · Toronto-Based · Bilingual Advisory
            </p>
            <h1 className="font-serif text-white text-[26px] sm:text-[34px] md:text-[42px] lg:text-[48px] leading-[1.2] tracking-tight max-w-[900px] mb-4 md:mb-6">
              Build Trusted Business Connections Between Canada, North America and China
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6 md:mb-8">
              CCBONLINE INC. helps businesses strengthen market entry, bilingual communication, digital credibility, supplier connection and local business presence across Canada, North America and China. We work with Chinese manufacturers entering North America, Canadian businesses reaching Chinese markets, local service providers building digital credibility, and buyers connecting with suppliers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6">
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Request a Consultation</Link>
              <Link to="/en/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Explore Services</Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/40">
              <span>Market Entry</span>
              <span>·</span>
              <span>Brand Credibility</span>
              <span>·</span>
              <span>Business Connection</span>
              <span>·</span>
              <span>Media & Content</span>
            </div>
          </div>
        </section>

        {/* ===== 2. Five Core Services ===== */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Services</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              What We Do
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-10">
              We help businesses operate more effectively across Canadian, North American and Chinese markets — whether you are entering a new market, building local credibility, or connecting with partners and suppliers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { num: '01', title: 'Market Entry & Local Landing', desc: 'For Chinese manufacturers entering North America and Canadian businesses exploring China. We assess readiness, map compliance and certification pathways, clarify import responsibility (IOR), and coordinate local execution — so you enter with a plan, not just hope.', link: '/en/market-entry' },
                { num: '02', title: 'Brand Credibility & Digital Infrastructure', desc: 'For Canadian businesses, immigrant entrepreneurs, and service providers who need stronger digital presence. We diagnose website credibility, business content, trust signals, and local discoverability — helping you look professional to buyers, partners, and search engines.', link: '/en/brand-credibility' },
                { num: '03', title: 'Bilingual Website & Content Optimization', desc: 'For businesses that need to communicate in both English and Chinese — across websites, product materials, service descriptions, and commercial content. We optimize for both human readers and AI-driven search (GEO), ensuring your message reaches the right audience in the right language.', link: '/en/website-content' },
                { num: '04', title: 'Canada-China Business Connection', desc: 'For North American buyers, Amazon sellers, retailers, and procurement teams sourcing from China — and for Chinese suppliers seeking reliable North American partners. We help evaluate suppliers, clarify communication, and establish working relationships across borders.', link: '/en/business-connection' },
                { num: '05', title: 'Media Coverage & Content Partnership', desc: 'For businesses, event organizers, associations, and service providers seeking exposure in Chinese-Canadian business communities. We coordinate media coverage, bilingual content, event promotion, and resource connections within the CCBONLINE platform.', link: '/en/media-content' },
              ].map((item) => (
                <div key={item.num} className="p-6 border border-white/10 hover:border-[#00A884]/50 transition-colors">
                  <p className="text-[#C9A44C] text-[13px] font-medium mb-3">{item.num}</p>
                  <h3 className="text-white text-[17px] md:text-[18px] font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/60 text-[14px] leading-[1.65] mb-4">{item.desc}</p>
                  <Link to={item.link} className="text-[13px] font-medium text-[#00A884] hover:underline">Learn more →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 3. Who We Work With ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Who We Work With</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              Businesses Operating Across Borders
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              We work with companies and individuals that have real products, services, or market intent — and the willingness to build practical cross-border operations rather than rely on shortcuts.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: 'Chinese Manufacturers & Export Brands', desc: 'Companies with proven production capacity entering Canadian and North American markets — needing diagnosis, compliance, IOR, and local coordination.' },
                { title: 'Canadian Businesses Reaching China', desc: 'Canadian companies, brands, and service providers looking to connect with Chinese markets, suppliers, or customers.' },
                { title: 'Local Entrepreneurs & Service Providers', desc: 'Immigrant entrepreneurs, small businesses, and professional service providers in Canada building digital credibility and local presence.' },
                { title: 'North American Buyers & Retailers', desc: 'Amazon sellers, retailers, procurement teams, and brand owners seeking reliable supplier connections in China.' },
                { title: 'Event Organizers & Associations', desc: 'Trade shows, business associations, and service platforms seeking media exposure and resource connections in Chinese-Canadian communities.' },
                { title: 'Cross-Border Service Providers', desc: 'Logistics, legal, accounting, insurance, and consulting firms serving Chinese-Canadian business corridors.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 4. Common Challenges ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Common Challenges</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              Gaps We See Across Both Directions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {[
                { title: 'Chinese companies have products, but North American buyers cannot find or trust them', desc: 'Solid products, weak English materials, unclear certification status, and no local presence mean buyers choose more accessible competitors.' },
                { title: 'Canadian businesses want Chinese market access, but lack bilingual content and local know-how', desc: 'Website and marketing materials only in English, no Chinese-language product information, and no understanding of how Chinese buyers research and decide.' },
                { title: 'Local immigrant businesses struggle with digital credibility in a new market', desc: 'Professional services, good products, but website looks unprofessional, unclear service descriptions, and no trust signals that Canadian customers expect.' },
                { title: 'North American buyers cannot verify Chinese suppliers effectively', desc: 'Sourcing from Alibaba or trade shows without proper verification leads to quality issues, communication gaps, and unreliable delivery.' },
                { title: 'Event organizers lack channels to reach Chinese-Canadian business audiences', desc: 'Business events, seminars, and services struggle to connect with the Chinese-speaking entrepreneurial and professional community.' },
                { title: 'Companies spend on marketing without fixing the fundamentals', desc: 'Advertising, trade shows, and outreach campaigns drive traffic — but the website, content, and follow-up process are not ready to convert interest into business.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border-l-2 border-[#C9A44C] border border-[#E5E5E5]">
                  <h3 className="text-[15px] font-semibold mb-2 leading-[1.5]">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 5. Why CCBONLINE ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Why CCBONLINE</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              A Canada-Based Team That Understands Both Markets
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: 'Canada-Based', desc: 'A registered company in the Greater Toronto Area with real local presence and operational capability. We understand the Canadian business environment because we work in it every day.' },
                { title: 'Bilingual Communication', desc: 'Fluent in Chinese and English, bridging cultural and business practice gaps between markets. We help you communicate clearly with partners, buyers, and regulators on both sides.' },
                { title: 'Judgment Before Execution', desc: 'We assess whether you should proceed, not just how. An honest "not yet" recommendation is more valuable than a flawed execution plan.' },
                { title: 'Digital + Commercial Capability', desc: 'We understand how businesses present themselves digitally and what buyers expect to see. We close the gap between your capabilities and your online presence.' },
                { title: 'Practical Coordination', desc: 'Weekly tracking, partner coordination, task lists, and follow-through. We help projects move forward, not just produce reports that sit unread.' },
                { title: 'Multi-Directional', desc: 'We work with businesses going both directions — China to North America, and North America to China — giving us perspective that single-direction advisors lack.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 6. How We Work ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Process</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              How We Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: '01', title: 'Diagnose', desc: 'We review your current state: product, market, materials, digital presence, and key gaps. You get an honest assessment of what is ready and what needs attention.' },
                { step: '02', title: 'Plan', desc: 'We map a practical path forward: which actions to take, in what sequence, with what resources, and what timeline. No generic templates — specific to your situation.' },
                { step: '03', title: 'Coordinate', desc: 'We work with your team and local partners to execute the plan — content, website, compliance, supplier communication, or event coordination.' },
                { step: '04', title: 'Track', desc: 'We keep the project moving through regular check-ins, task lists, and progress reviews — ensuring work gets done, not just planned.' },
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

        {/* ===== 7. Boundary Note ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <div className="max-w-[800px] p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3">What We Do Not Do</h3>
              <p className="text-[14px] text-[#767676] leading-[1.65] mb-3">
                CCBONLINE INC. provides business advisory, coordination, content, and market-entry support. We are not a law firm, accounting firm, certification body, insurance broker, customs broker, or logistics company.
              </p>
              <p className="text-[14px] text-[#767676] leading-[1.65]">
                When formal professional advice is required — legal, tax, certification, insurance, or customs — we help you prepare the right questions, organize materials, and connect with qualified specialists. We coordinate; they execute.
              </p>
            </div>
          </div>
        </section>

        {/* ===== 8. Final CTA ===== */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Ready to Strengthen Your Cross-Border Presence?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                Tell us where you are, what you are working with, and what is blocking your progress. We will recommend the right first step — honestly and directly.
              </p>
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Request a Consultation</Link>
              <p className="text-white/40 text-[13px] mt-4">info@ccbonline.ca · +1 647 568 1128 · 84 Kenhar Dr, North York, ON M9L 1N2</p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
