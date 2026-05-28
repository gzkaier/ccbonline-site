import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ENHome() {
  useSEO({
    title: 'CCBONLINE INC. | Canada-China Business Credibility & Connection Platform',
    description: 'CCBONLINE INC. helps businesses build trusted cross-market presence between Canada, North America and China through market entry diagnostics, brand credibility audits, AI visibility optimization, bilingual content, business media, and local service connections.',
    canonical: 'https://www.ccbonline.ca/en',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'CCBONLINE INC. | Canada-China Business Credibility & Connection Platform'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* ===== 1. Hero ===== */}
        <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/canada-north-america-market-entry-consulting.jpg" alt="CCBONLINE INC. connects businesses between Canada, North America and China" className="w-full h-full object-cover" fetchPriority="high" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/90 to-[#0B0E14]/55" />
          <div className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5 font-medium">Canada-Registered · Toronto-Based · Bilingual Advisory</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[42px] lg:text-[48px] leading-[1.2] tracking-tight max-w-[900px] mb-4 md:mb-6">
              Business Credibility & Connection Between Canada, North America and China
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6 md:mb-8">
              CCBONLINE INC. helps businesses establish clearer commercial expression, market-entry readiness, AI visibility, and local connection pathways across markets, languages, and trust systems. We are not a typical web agency, ad firm, or export broker — we help you figure out whether buyers can understand you, trust you, and know why they should contact you before you enter a new market.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6">
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Book a Consultation</Link>
              <Link to="/en/contact" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Send Your Website for Review</Link>
              <Link to="/en/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Explore Services</Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/40">
              <span>Market Entry</span><span>·</span><span>Credibility Audit</span><span>·</span><span>AI Visibility</span><span>·</span><span>Bilingual Content</span><span>·</span><span>Local Connections</span>
            </div>
          </div>
        </section>

        {/* ===== 2. Common Problems ===== */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Common Challenges</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">It Is Not a Visibility Problem — It Is a Readiness Problem</h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-10">Here are the six situations we encounter most frequently. If you are experiencing one of them, we may be able to help.</p>
            <div className="space-y-4">
              {[
                { title: 'You have a website, but visitors do not follow up', desc: 'Your site has content, but North American buyers do not see a reason to trust you or take action. It is not about design — it is about failing to answer "why choose you."', service: 'Website & Brand Credibility Audit', link: '/en/services/business-reason-credibility-diagnosis' },
                { title: 'Your product materials do not communicate value', desc: 'Product specs are complete, but the "why you over competitors" is missing. Technical parameters are not purchase reasons.', service: 'English Materials & Service Page Optimization', link: '/en/services/english-materials-optimization' },
                { title: 'You want to enter Canada but do not know where to start', desc: 'Certification, compliance, channels, materials, trade shows — so many moving pieces, and you are afraid of spending on the wrong things.', service: 'North America Market Entry Diagnostic', link: '/en/services/market-entry-diagnosis' },
                { title: 'Trade show coming, but materials and follow-up are unclear', desc: 'Booth is booked, but pitch scripts, one-pagers, and post-show follow-up systems are not ready.', service: 'Trade Show Buyer Engagement Package', link: '/en/services/trade-show-follow-up' },
                { title: 'Your site does not show up on Google or AI tools', desc: 'Poor site structure, thin content — neither search engines nor AI systems can understand or reference you.', service: 'Website & AI Visibility Diagnostic', link: '/en/services/website-ai-visibility-diagnosis' },
                { title: 'Local service providers need credible exposure to cross-border clients', desc: 'Strong service capabilities, but no effective channel or credible content to reach cross-border customers.', service: 'Brand Credibility & Digital Infrastructure', link: '/en/brand-credibility' },
              ].map((item, i) => (
                <div key={i} className="p-5 md:p-6 border border-white/10 hover:border-[#00B894]/50 transition-colors bg-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#D4AF37] text-[13px] font-medium">0{i + 1}</span>
                    <h3 className="text-white text-[17px] md:text-[18px] font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-white/60 text-[14px] md:text-[15px] leading-[1.65] mb-3">{item.desc}</p>
                  <Link to={item.link} className="text-[14px] font-medium text-[#00B894] hover:underline inline-flex items-center gap-1">{item.service} <span>→</span></Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 3. Core Services ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Core Services</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">Seven Services Covering the Full Path from Assessment to Execution</h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-10">Each service has clear target audience, deliverables, and boundaries. Start anywhere, but we recommend: before spending more on promotion, confirm your commercial expression is ready.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { num: '01', title: 'North America Market Entry Diagnostic', desc: 'Assess whether your product, documentation, compliance, and local support are ready for Canada/North America. We do not push you to enter — we help you see the conditions clearly.', link: '/en/services/market-entry-diagnosis' },
                { num: '02', title: 'Business Reason & Brand Credibility Audit', desc: 'Answer the question: why should buyers trust you? Why choose you? Why contact you now? Not brand packaging — commercial trust building.', link: '/en/services/business-reason-credibility-diagnosis' },
                { num: '03', title: 'Website & AI Visibility Diagnostic', desc: 'Check whether your website can be understood by buyers, indexed by search engines, and referenced by AI systems (ChatGPT, Perplexity).', link: '/en/services/website-ai-visibility-diagnosis' },
                { num: '04', title: 'English Materials & Service Page Optimization', desc: 'Restructure Chinese company introductions into English commercial content that North American buyers understand and trust. Not translation — commercial expression reconstruction.', link: '/en/services/english-materials-optimization' },
                { num: '05', title: 'Business Media Coverage & Content', desc: 'Through company features, event coverage, and professional content, help you build publicly citable trust assets across channels.', link: '/en/services/business-media-content' },
                { num: '06', title: 'Local Service Resource Connection', desc: 'Connect you with customs, logistics, warehousing, certification, legal, tax, insurance, and channel resources for North America market entry.', link: '/en/services/local-service-connection' },
                { num: '07', title: 'E-commerce Product Page & SEO Optimization', desc: 'Optimize product titles, descriptions, FAQs, and purchase reasons for Amazon, Shopify, and independent stores.', link: '/en/services/ecommerce-seo-optimization' },
              ].map((item) => (
                <div key={item.num} className="p-6 border border-[#E5E5E5] hover:border-[#00B894] transition-colors bg-[#F8F9FA]">
                  <p className="text-[#D4AF37] text-[13px] font-medium mb-3">{item.num}</p>
                  <h3 className="text-[17px] md:text-[18px] font-semibold text-[#212121] mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#444] leading-[1.65] mb-4">{item.desc}</p>
                  <Link to={item.link} className="text-[14px] font-medium text-[#00B894] hover:underline inline-flex items-center gap-1">Learn more <span>→</span></Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 4. Why CCBONLINE ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Why CCBONLINE</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">Not a Do-Everything Agency — Cross-Market Judgment & Expression Expertise</h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-10">We combine technical foundations, bilingual commercial expression, North American market experience, content distribution, and media capabilities to break complex cross-market challenges into assessable, expressible, actionable steps.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: 'Technical Foundation', desc: 'We understand website structure, SEO, GEO (Generative Engine Optimization), and AI visibility — and can diagnose issues from the ground up.' },
                { title: 'Bilingual Commercial Expression', desc: 'Not translation. We reorganize your content from the perspective of North American buyer cognition and decision logic.' },
                { title: 'North American Market Presence', desc: 'Canada-registered, Toronto-operated. We understand local compliance requirements, business practices, and client expectations.' },
                { title: 'Content & Media Capability', desc: 'Through business features, professional content, and public channels, we help you build verifiable trust assets in front of target buyers.' },
                { title: 'Market Entry & Resource Connection', desc: 'We understand IOR, certification pathways, channel logic, and local service provider networks to connect you with the right landing resources.' },
                { title: 'Human Judgment at the Core', desc: 'AI is used for research and efficiency, but commercial judgment, strategic advice, and client communication are done by experienced consultants.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 5. How We Work ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Our Process</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">Four Steps: Assess → Diagnose → Optimize → Execute</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: '01', title: 'Initial Assessment', desc: 'Review your current website, materials, target market, and challenges. Determine whether conditions are right to proceed, or what needs to be prepared first.' },
                { step: '02', title: 'Diagnostic', desc: 'Evaluate credibility, expression, pathways, resources, and risk gaps. Tell you what is ready, what needs work, and the priorities.' },
                { step: '03', title: 'Optimization Design', desc: 'Restructure service expression, page content, English materials, FAQs, SEO and AI visibility foundations. Deliver ready-to-use copy and plans.' },
                { step: '04', title: 'Execution Support', desc: 'Based on your stage: content optimization, market entry coaching, service provider connection, media coverage, or local partnership development. We drive action.' },
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

        {/* ===== 6. Who We Serve ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Who We Work With</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">Our Primary Client Types</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: 'Chinese Companies Entering North America', desc: 'Real products, export experience, need market-fit assessment, compliance pathway, English materials, and local resource connections.' },
                { title: 'North American Companies Sourcing from China', desc: 'Need supplier verification, communication clarity, and cross-border working relationship establishment.' },
                { title: 'Local Chinese-Canadian Businesses', desc: 'Need digital credibility, website improvement, commercial content, and local discoverability.' },
                { title: 'E-commerce & Independent Store Owners', desc: 'Need product page optimization, search visibility, and customer communication improvement.' },
                { title: 'B2B Manufacturers & Suppliers', desc: 'Established production capacity, need to develop North American buyers, attend trade shows, build agency or direct channels.' },
                { title: 'Event Organizers, Associations & Service Providers', desc: 'Need business media coverage, service showcase, content strategy, and local resource connections.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 7. Not a Fit ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Not a Good Fit</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">Honestly, We May Not Be the Right Choice For</h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">This is not arrogance — it is respect for your time. Our value is helping you assess whether your direction is sound before committing resources.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: 'Looking for cheap copywriting only', desc: 'We do not do "deliver and leave" content factory work. Our process requires your participation in material review and business judgment.' },
                { title: 'Expecting guaranteed quick sales or rankings', desc: 'We do not promise specific sales results or search rankings. Market entry and brand building take time; we provide professional judgment and practical advice.' },
                { title: 'No baseline materials and unwilling to share', desc: 'We need your product information, company background, and target market description. Without these, we cannot make accurate assessments.' },
                { title: 'Wanting fake reviews or exaggerated claims', desc: 'We do not create false content. All coverage and materials are based on verified information. We do not participate in short-term traffic tricks.', },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[15px] font-semibold mb-2 text-[#212121]">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 8. Service Products Quick View ===== */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Service Products</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">From Quick Audit to Deep Coaching — Staged by Need</h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-10">Each product has clear pricing, audience, and deliverables. Choose what matches your current stage.</p>
            <div className="space-y-4">
              {[
                { tag: 'Starter', price: 'CAD 299–499', title: 'Website & Materials Quick Audit', desc: 'Have a website and English materials but unsure if buyers would feel confident reaching out. Know why buyers might not trust you first.', link: '/en/services/website-content-for-service-providers' },
                { tag: 'Core', price: 'CAD 800–1,500', title: 'Brand Credibility Diagnostic', desc: 'Preparing to develop buyers, attend trade shows, or run LinkedIn outreach. Clarify your purchase rationale and credibility first.', link: '/en/services/business-reason-credibility-diagnosis' },
                { tag: 'Advanced', price: 'CAD 1,800–3,500', title: 'North American Buyer Trust Materials', desc: 'Restructure internal introductions into content that North American buyers understand, trust, and can act on.', link: '/en/services/english-materials-optimization' },
                { tag: 'Trade Show', price: 'CAD 2,500–6,000', title: 'Trade Show Buyer Engagement Package', desc: 'Exhibiting within 2-8 weeks. Avoid the common pattern: "great conversation at the booth, nothing happens after."', link: '/en/services/trade-show-follow-up' },
                { tag: 'Intensive', price: 'CAD 3,500–8,000+', title: 'North America Market Entry 30-Day Launch Support', desc: 'Committed to entering North America but unclear on path, materials, and responsibility chain. We help you sequence phase one correctly.', link: '/en/services/market-entry-diagnosis' },
              ].map((item, i) => (
                <div key={i} className="p-5 md:p-6 border border-white/10 hover:border-[#00B894]/50 transition-colors bg-white/5">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#D4AF37] text-[13px] font-medium">{item.tag}</span>
                        <span className="text-[13px] text-white/50">{item.price}</span>
                      </div>
                      <h3 className="text-white text-[17px] md:text-[18px] font-semibold mb-2">{item.title}</h3>
                      <p className="text-white/60 text-[14px] leading-[1.65]">{item.desc}</p>
                    </div>
                    <Link to={item.link} className="btn-primary text-[14px] px-5 py-3 min-h-[48px] shrink-0">Learn More</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 9. FAQ ===== */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">FAQ</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight mb-8">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: 'What does CCBONLINE INC. do?', a: 'We are a business information and connection platform bridging Canada, North America, and China. We help businesses establish clearer commercial expression, digital credibility, and local connection capabilities across markets, languages, and trust systems. Core services include market entry diagnostics, brand credibility audits, AI visibility assessment, English content optimization, business media coverage, and local service resource connections.' },
                { q: 'How are you different from a web agency?', a: 'We are not a web agency, ad firm, or export broker. We assess whether your website and business materials are ready for your target audience, diagnose issues, and provide optimization recommendations. Web development is execution; we focus on judgment, strategy, and content restructuring.' },
                { q: 'Do you guarantee results?', a: 'No. We provide professional diagnostics, analysis, and recommendations. Market entry, client development, and brand building outcomes depend on product quality, market conditions, timing, and execution. We guarantee the professionalism of our judgment and the practicality of our advice.' },
                { q: 'How much do your services cost?', a: 'From CAD 299 for a quick audit to CAD 3,500+ for intensive coaching. Pricing varies by service. We will provide specific pricing after understanding your needs in an initial consultation. We recommend starting with lower-cost services to confirm direction before committing more.' },
                { q: 'How do we get started?', a: 'Book an initial consultation (free). We will understand your situation and recommend the right service. You can start with a Website & Materials Quick Audit (CAD 299) to find out whether buyers have a reason to trust you before spending more on promotion.' },
                { q: 'What is GEO (Generative Engine Optimization)?', a: 'GEO (Generative Engine Optimization) is the practice of optimizing content so AI systems like ChatGPT, Perplexity, and Google AI Overview can understand and cite it. Unlike traditional SEO which targets search engine rankings, GEO focuses on content clarity, credibility, and ease of extraction by AI systems.' },
              ].map((item, i) => (
                <details key={i} className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">{item.q}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
            <p className="text-[14px] text-[#767676] mt-6">More questions? <Link to="/en/faq" className="text-[#00B894] hover:underline">View full FAQ</Link> or <Link to="/en/contact" className="text-[#00B894] hover:underline">contact us</Link>.</p>
          </div>
        </section>

        {/* ===== 10. Final CTA ===== */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">Not Sure If Your Website or Market Entry Path Is Ready?</h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">Send us your current website or company introduction for an initial assessment. This consultation is free. For deeper analysis, start with a Website & Materials Quick Audit (CAD 299).</p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Book a Consultation</Link>
                <Link to="/en/contact" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Send Website for Review</Link>
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
