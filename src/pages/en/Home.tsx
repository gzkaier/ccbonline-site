import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ENHome() {
  useSEO({
    title: 'CCBONLINE INC. | Cross-Market Business Credibility & Connection Between Canada, North America and China',
    description: 'CCBONLINE INC. provides North America market entry diagnostics, website and business credibility audits, bilingual business content, localization, and Canada-China business connection services. We focus on whether buyers can understand you, trust you, and take the next step.',
    canonical: 'https://www.ccbonline.ca/en',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'CCBONLINE INC. | Cross-Market Business Credibility & Connection Between Canada, North America and China'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/canada-north-america-market-entry-consulting.jpg" alt="CCBONLINE INC. connects businesses between Canada, North America and China" className="w-full h-full object-cover" fetchPriority="high" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/90 to-[#0B0E14]/55" />
          <div className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5 font-medium">Canada-Registered · Toronto-Based · Bilingual Advisory</p>
            <h1 className="font-serif text-white text-[24px] sm:text-[30px] md:text-[40px] lg:text-[46px] leading-[1.25] tracking-tight max-w-[900px] mb-4 md:mb-6">
              Helping Businesses Build Trusted Expression, Digital Infrastructure & Commercial Connection Between Canada, North America and China
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6 md:mb-8">
              When entering the North American market, buyers first look at whether you are credible, prepared, and ready for the local business system. CCBONLINE INC. helps businesses clarify market entry pathways, English commercial expression, website credibility, compliance readiness, and local partnership capacity — turning unclear cross-market information into actionable judgment, communication, and progress.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6">
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Book a Diagnostic Call</Link>
              <Link to="/en/services/website-credibility-audit" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Website Credibility Audit</Link>
              <Link to="/en/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Explore Services</Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/40">
              <span>Market Entry Diagnostics</span><span>·</span>
              <span>Business Credibility Audit</span><span>·</span>
              <span>Bilingual Content</span><span>·</span>
              <span>Canada-China Connection</span>
            </div>
          </div>
        </section>

        {/* Three Main Services */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Three Core Services</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              Not a service list — three clear engagement paths
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-10">
              You can start from any path. But we recommend: before spending more on promotion, confirm whether your commercial expression is ready.
            </p>
            <div className="space-y-5">
              {[
                { num: '01', title: 'North America Market Entry Diagnostic', desc: 'For Chinese enterprises, manufacturers, and brands preparing to enter Canada or North America. Deliverables: initial product-market fit assessment; compliance, certification, labeling, and responsibility chain gaps; English materials and website credibility review; channel and customer development readiness; 30–90 day action roadmap.', link: '/en/services/market-entry-diagnosis', price: 'From CAD 1,500' },
                { num: '02', title: 'Website & Business Credibility Audit', desc: 'For Canadian local Chinese businesses, Chinese suppliers preparing for trade shows, and service providers targeting mainstream clients. Key questions: Can clients understand you? Do they trust you? Is there a clear purchase rationale? Does your English read like local business communication? Can AI search systems understand you?', link: '/en/services/website-credibility-audit', price: 'From CAD 299' },
                { num: '03', title: 'Canada-China Business Connection & Media Content', desc: 'For associations, trade show organizers, service providers, event hosts, and business partners. Deliverables: business features, event promotion, service provider showcases, bilingual content curation, community and media distribution, business partnership connections. Advisory services handle judgment and pathways; media services handle exposure and connection.', link: '/en/services/business-media-content', price: 'Project-based' },
              ].map((item) => (
                <div key={item.num} className="p-6 md:p-8 border border-white/10 hover:border-[#00B894]/50 transition-colors bg-white/5">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                    <div className="shrink-0">
                      <span className="text-[#D4AF37] text-[13px] font-medium">{item.num}</span>
                      <span className="text-[13px] text-white/50 ml-3">{item.price}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-[20px] md:text-[22px] font-semibold mb-3">{item.title}</h3>
                      <p className="text-white/60 text-[14px] md:text-[15px] leading-[1.65] mb-4">{item.desc}</p>
                      <Link to={item.link} className="text-[14px] font-medium text-[#00B894] hover:underline inline-flex items-center gap-1">Learn more <span>→</span></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Problems */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Common Problems</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              Not a lack of exposure — a lack of preparation
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-10">
              Here are the six situations we encounter most often. If you are experiencing any of them, we may be able to help.
            </p>
            <div className="space-y-4">
              {[
                { title: 'You have a website, but visitors do not follow up', desc: 'Your site has content, but North American buyers cannot see the credibility or purchase rationale. It is not about design — it is about not answering "why choose you."', service: 'Website & Business Credibility Audit', link: '/en/services/website-credibility-audit' },
                { title: 'Product specs are ready, but buyers do not see the advantage', desc: 'Technical parameters are complete, but the story of "why you instead of someone else" is missing. Specs are not a purchase rationale.', service: 'English Materials Optimization', link: '/en/services/english-materials-optimization' },
                { title: 'Want to enter Canada but do not know where to start', desc: 'Certification, compliance, channels, materials, trade shows — so many variables, and you are afraid of spending money in the wrong place.', service: 'Market Entry Diagnostic', link: '/en/services/market-entry-diagnosis' },
                { title: 'Trade show booked, but English materials and follow-up unclear', desc: 'Booth is reserved, but pitch decks, one-pagers, and post-show follow-up systems are not ready.', service: 'Trade Show Preparation Package', link: '/en/services/trade-show-follow-up' },
                { title: 'Not found on Google, not mentioned by AI', desc: 'Website structure is chaotic, content is thin, and neither search engines nor AI systems can understand or cite you.', service: 'Website & AI Visibility Audit', link: '/en/services/website-ai-visibility-diagnosis' },
                { title: 'Local service providers lack credible entry points', desc: 'Strong service capability, but website and business content do not resonate with target clients.', service: 'Brand Credibility & Digital Infrastructure', link: '/en/brand-credibility' },
              ].map((item, i) => (
                <div key={i} className="p-5 md:p-6 border border-[#E5E5E5] hover:border-[#00B894]/50 transition-colors bg-[#F8F9FA]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#D4AF37] text-[13px] font-medium">0{i + 1}</span>
                    <h3 className="text-[#212121] text-[17px] md:text-[18px] font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-[#444] text-[14px] md:text-[15px] leading-[1.65] mb-3">{item.desc}</p>
                  <Link to={item.link} className="text-[14px] font-medium text-[#00B894] hover:underline inline-flex items-center gap-1">{item.service} <span>→</span></Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who We Serve / Not Serve */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-label mb-3">Who We Serve</p>
                <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
                  Clients we work with
                </h2>
                <div className="space-y-3">
                  {[
                    'Chinese enterprises, manufacturers, and brands entering Canada/North America',
                    'Canadian Chinese businesses seeking mainstream market entry',
                    'Suppliers and export teams needing bilingual commercial materials',
                    'Companies preparing for trade shows, channel development, or client acquisition',
                    'Organizations seeking China supply chain or North America local connections',
                    'Associations, trade show organizers, and business partnership institutions',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white border border-[#E5E5E5]">
                      <span className="text-[#00B894] mt-0.5 shrink-0">✓</span>
                      <span className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-label mb-3" style={{ color: '#999' }}>Not a Good Fit</p>
                <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
                  Where we may not be the best choice
                </h2>
                <div className="space-y-3">
                  {[
                    'Looking for the cheapest website or copywriting service',
                    'Expecting guaranteed sales or instant rankings',
                    'No basic materials and unwilling to collaborate',
                    'Seeking fake reviews or exaggerated claims',
                    'No product, budget, or execution capacity',
                    'Wanting a one-size-fits-all AI-generated solution',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white border border-[#E5E5E5]">
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
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">How We Engage</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              First step is not a quote — it is a diagnostic call
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-10">
              We review your current website, materials, target market, product category, and existing resources before determining whether market entry, credibility optimization, content partnership, or delayed action is the right path. This initial consultation is free.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: '01', title: 'Initial Assessment', desc: 'Review your website, materials, target market, and current situation. Determine whether conditions are right to proceed, or what needs to be prepared first.' },
                { step: '02', title: 'Diagnostic Analysis', desc: 'Evaluate credibility, expression, pathways, resources, and risk gaps. Tell you what is ready, what needs work, and the priorities.' },
                { step: '03', title: 'Optimization Design', desc: 'Reconstruct service expression, page content, English materials, FAQ, SEO and AI visibility foundations. Deliver ready-to-use copy and plans.' },
                { step: '04', title: 'Implementation', desc: 'Based on your stage, move into content optimization, market entry support, service provider connections, media coverage, or local partnership facilitation.' },
              ].map((item) => (
                <div key={item.step} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[#D4AF37] text-[13px] font-medium mb-3">{item.step}</p>
                  <h3 className="text-[17px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Methodology */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">About AI</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight mb-4">
              AI for efficiency, human judgment for decisions
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] mb-4">
              We use AI to accelerate material organization, market research, content drafting, and project execution. Critical judgments, responsibility boundaries, client communication, and resource selection are done by humans.
            </p>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65]">
              AI is not our selling point — it is our tool. Clients buy professionally judged business advice, credible expression, and actionable pathways, not AI-generated content.
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Not sure if your website, materials, or market entry pathway is ready?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                Submit your existing website or company introduction for an initial assessment. This consultation is free. For deeper analysis, start with a Website & Business Credibility Quick Audit (CAD 299).
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Book a Diagnostic Call</Link>
                <Link to="/en/services/website-credibility-audit" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Website Credibility Audit</Link>
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
