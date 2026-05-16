import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function EN_WebsiteContentForServiceProviders() {
  useSEO({
    title: 'Website & Content System for Local Service Providers | CCBONLINE INC.',
    description: 'CCBONLINE helps local professional service providers in Canada and North America organize their website, service messaging, trust materials, FAQs, downloadable content, and inquiry path into a clearer online presence.',
    canonical: 'https://www.ccbonline.ca/en/services/website-content-for-service-providers',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Website & Content System for Local Service Providers | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* 1. Hero */}
        <section className="relative pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #00A884 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="container-site relative z-10">
            <p className="text-label mb-3">Content Systems</p>
            <h1 className="font-serif text-[#212121] text-[28px] sm:text-[34px] md:text-[42px] leading-[1.2] tracking-tight max-w-[900px] mb-4 md:mb-6">
              Website & Content System for Local Professional Service Providers
            </h1>
            <p className="text-[#444] text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6 md:mb-8">
              We help local professional service providers organize a credible online presence that clients can understand, trust, and act on — not just a page, but a complete communication system.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Book a Consultation</Link>
              <a href="#engagement" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px] inline-flex items-center justify-center" onClick={(e) => { e.preventDefault(); document.getElementById('engagement')?.scrollIntoView({ behavior: 'smooth' }); }}>See How It Works</a>
            </div>
          </div>
        </section>

        {/* 2. Problems */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Common Problems</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-8 md:mb-10">
              Three Problems This Service Solves
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { num: '01', title: 'Clients visit your site but still don\'t understand what you do', desc: 'Many professional service providers have genuine expertise, but their websites are either too vague or too technical. Prospective clients leave without a clear sense of what you offer, how your process works, or why they should choose you.' },
                { num: '02', title: 'You have credentials and experience, but your online presence doesn\'t build trust', desc: 'Certifications, case experience, team backgrounds, and service processes — these trust signals often live in scattered conversations. Your website doesn\'t present them systematically, so first-time visitors have no foundation of confidence.' },
                { num: '03', title: 'There is no clear path from "interested" to "willing to contact"', desc: 'Without structured FAQs, a clear inquiry channel, or downloadable materials, interested visitors don\'t know what to do next. They leave without reaching out, and you never know they were there.' },
              ].map((p, i) => (
                <div key={i} className="p-5 md:p-6 border border-[#E5E5E5] hover:border-[#00A884] transition-colors bg-white">
                  <p className="text-[#C9A44C] text-[13px] font-medium mb-3">{p.num}</p>
                  <h3 className="text-[16px] md:text-[17px] font-semibold mb-3 leading-[1.5]">{p.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Who This Is For */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Who This Is For</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6 md:mb-8">
              Who We Serve
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                'Tax, accounting, and bookkeeping services',
                'Insurance brokers and commercial insurance advisors',
                'Logistics, warehousing, and supply chain management',
                'Product certification, quality testing, and compliance consulting',
                'Customs brokerage, import/export services, and trade consulting',
                'Education and professional training institutions',
                'Immigration consulting, legal services, and HR services',
                'IT support, technical services, and business digitization',
                'Any local professional firm with real capability but unclear online expression',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#00A884] mt-0.5 shrink-0">&#10003;</span>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7]">
                <strong className="font-medium text-[#212121]">Shared traits:</strong> Already delivering real services with existing clients. Preparing for events, trade shows, or community outreach. Want to align website, social media, brochures, and client conversation materials. Need a credible online presence that clients can understand and trust.
              </p>
            </div>
          </div>
        </section>

        {/* 4. What We Help Build */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">What We Help Build</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-8 md:mb-10">
              Six Service Modules
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { num: '01', title: 'Service positioning', desc: 'Clarify who you serve, what problems you solve, and what makes you different.' },
                { num: '02', title: 'Website content structure', desc: 'Organize homepage, services page, about section, FAQ, and contact page with clear messaging.' },
                { num: '03', title: 'Trust materials', desc: 'Turn credentials, team background, experience, and process into content that builds client confidence.' },
                { num: '04', title: 'Bilingual content', desc: 'Chinese, English, or bilingual versions based on your client base.' },
                { num: '05', title: 'Multi-channel content extensions', desc: 'Repurpose website content into service brochures, email materials, client follow-up documents, and social media assets.' },
                { num: '06', title: 'Ongoing content updates', desc: 'Continue refining FAQs, service descriptions, case scenarios, and promotional content as your business evolves.' },
              ].map((m, i) => (
                <div key={i} className="p-5 border border-[#E5E5E5] hover:border-[#00A884] transition-colors">
                  <p className="text-[#C9A44C] text-[13px] font-medium mb-2">{m.num}</p>
                  <h3 className="text-[16px] font-semibold mb-2">{m.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Deliverables */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Deliverables</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6 md:mb-8">
              What You Receive
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Service page card copy',
                'Standalone service detail page copy',
                'Homepage entry point copy',
                'About section / team introduction',
                'FAQ (common questions)',
                'Contact page and inquiry form recommendations',
                'Service brochure content',
                'Social media post copy',
                'Email outreach templates',
                'Google Business Profile optimization suggestions',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white border border-[#E5E5E5]">
                  <span className="text-[#00A884] mt-0.5 shrink-0 text-[13px]">&#10003;</span>
                  <p className="text-[14px] text-[#444] leading-[1.5]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Why More Than Website Building */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Core Difference</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6 md:mb-8">
              This Is Not Just Website Building — It Is Building a Business Entry Point
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6 max-w-[720px]">
              What clients actually need is not a prettier page, but a communication system that answers the questions every prospective client has:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Who you serve',
                'Why clients need you',
                'How your services are organized',
                'Why you are trustworthy',
                'What the next step is',
                'Which content can be reused for social media, brochures, and sales follow-up',
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Engagement Options */}
        <section id="engagement" className="section-padding bg-[#07111F]">
          <div className="container-site">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Engagement Options</p>
            <h2 className="font-serif text-white text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-8 md:mb-10">
              Three Ways to Work With Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { name: 'Credible Single Page', tag: 'Starter', desc: 'For service providers who need a formal online presence quickly for events or outreach. One focused, trust-building page that tells clients who you are, what you do, and how to contact you.', features: ['Single-page structure', 'Service positioning', 'Trust materials', 'Contact setup'] },
                { name: 'Standard Service Pages', tag: 'Standard', desc: 'For firms with existing websites who want to add clear, structured service pages. Complete service detail pages, FAQ, and inquiry flow that fits into your current site.', features: ['Service detail pages', 'FAQ section', 'Inquiry flow design', 'Content for existing site'] },
                { name: 'Website + Content Launch Package', tag: 'Complete', desc: 'For firms who want to align website content, social media, and client communication materials in one coordinated effort. Full content system from website to email to social.', features: ['Website content', 'Blog / article copy', 'Client communication materials', 'Social media copy'] },
              ].map((pkg, i) => (
                <div key={i} className="p-6 border border-white/10 hover:border-[#00A884]/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#C9A44C] text-[12px] font-medium tracking-wider">{pkg.tag}</span>
                  </div>
                  <h3 className="text-white text-[18px] font-semibold mb-3">{pkg.name}</h3>
                  <p className="text-white/60 text-[14px] leading-[1.65] mb-4">{pkg.desc}</p>
                  <ul className="space-y-2">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="text-white/50 text-[13px] flex items-start gap-2">
                        <span className="text-[#00A884] shrink-0">&#10003;</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Process */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Process</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-8 md:mb-10">
              How It Works
            </h2>
            <div className="space-y-6">
              {[
                { num: '01', title: 'Initial conversation', desc: 'Understand your business type, client profile, service scope, and existing materials. Usually 30-45 minutes.' },
                { num: '02', title: 'Information gathering', desc: 'Collect company info, team background, certifications, service items, case notes, photos, QR codes, and contact details.' },
                { num: '03', title: 'Structure design', desc: 'Reorganize service positioning, client problems, service categories, trust elements, and conversion paths into a clear framework.' },
                { num: '04', title: 'Content production', desc: 'Complete service pages, introduction materials, FAQ, downloadable materials, and related content based on the approved structure.' },
                { num: '05', title: 'Launch and refinement', desc: 'Optimize page expression, inquiry entry points, and content direction based on actual usage and feedback.' },
              ].map((step, i) => (
                <div key={i} className="flex gap-4 md:gap-6">
                  <div className="shrink-0">
                    <p className="text-[#C9A44C] text-[14px] font-medium w-[32px]">{step.num}</p>
                  </div>
                  <div className="pb-6 border-b border-[#E5E5E5]">
                    <h3 className="text-[16px] md:text-[17px] font-semibold mb-2">{step.title}</h3>
                    <p className="text-[14px] text-[#767676] leading-[1.65]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Good Fit / Not Right Fit */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Fit Assessment</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-8 md:mb-10">
              Is This the Right Fit?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-6 border-l-2 border-[#00A884] bg-white">
                <h3 className="text-[16px] font-semibold mb-4 text-[#00A884]">Good Fit</h3>
                <ul className="space-y-3">
                  {[
                    'Already delivering real services',
                    'Willing to gather and organize materials',
                    'Want to improve online expression and client trust',
                    'Need formal service pages, brochure content, and external content',
                  ].map((item, i) => (
                    <li key={i} className="text-[14px] text-[#444] leading-[1.6] flex items-start gap-2">
                      <span className="text-[#00A884] shrink-0">&#10003;</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-l-2 border-[#B8C0CC] bg-white">
                <h3 className="text-[16px] font-semibold mb-4 text-[#767676]">Not the Right Fit</h3>
                <ul className="space-y-3">
                  {[
                    'Have not yet defined your services clearly',
                    'Only want a minimal-cost display page',
                    'Unwilling to participate in content gathering',
                    'Expect immediate high-volume client acquisition',
                    'Cannot articulate service boundaries and client profiles',
                  ].map((item, i) => (
                    <li key={i} className="text-[14px] text-[#767676] leading-[1.6] flex items-start gap-2">
                      <span className="text-[#B8C0CC] shrink-0">&#10007;</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">FAQ</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6 md:mb-8">
              Common Questions
            </h2>
            <div className="space-y-3 mb-10">
              {[
                { q: 'Which industries do you serve?', a: 'We focus on local professional service firms with clear capabilities — tax, insurance, logistics, certification, customs, education, immigration, legal, IT, and similar fields. The key factor is "has real services but unclear online expression," not a specific industry.' },
                { q: 'Is this a website building service?', a: 'It is more than that. We focus on content clarity, service expression, and trust building. If you already have a website, we optimize the content. If you need a website built, we can coordinate technical resources. The core deliverable is "making your services understandable," not "making a pretty page."' },
                { q: 'I already have a website. Do I still need this?', a: 'Many professional firms have websites, but the content is templated, the service descriptions are vague, and clients cannot quickly understand what you actually do. We help you reorganize your content so your existing site does what it should — be understood by potential clients.' },
                { q: 'Can you do bilingual Chinese and English?', a: 'Yes. Based on your client base, we provide Chinese, English, or bilingual content. If your clients include both local Chinese-speaking and English-speaking audiences, bilingual expression is usually the better choice.' },
                { q: 'What if I don\'t have all the materials ready?', a: 'We start with a conversation and gather materials progressively. You don\'t need to have everything prepared at the start. We will guide you on what is needed and how to prepare it.' },
                { q: 'Will you help with brochures, social media, and other marketing content?', a: 'Yes. After the website content is complete, we extend it into service brochures, social media posts, email templates, and client follow-up materials. The goal is a consistent message across multiple channels.' },
                { q: 'How does this service usually start?', a: 'Typically with a 30-minute initial conversation where we understand your business, clients, and service scope. We then propose a content framework and materials checklist. Once you confirm, we begin content production.' },
                { q: 'Do you guarantee client leads?', a: 'No. The core value of this service is improving the quality of your online expression and building client trust — making you easier to understand, remember, and contact. Lead generation depends on your service capability, market outreach, and operations. We cannot guarantee a specific number of leads.' },
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

        {/* 11. CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site text-center">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Start Here</p>
            <h2 className="font-serif text-white text-[22px] md:text-[28px] leading-[1.35] tracking-tight mb-4">
              Make Sure Clients Understand You at First Sight
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[600px] mx-auto mb-8">
              If you want to organize your service introductions, website content, and client communication materials more clearly, start with a preliminary conversation with CCBONLINE.
            </p>
            <Link to="/en/contact" className="btn-primary text-[15px] px-8 py-3.5 min-h-[52px] inline-block">Book a Consultation</Link>
            <p className="text-white/40 text-[13px] mt-4">info@ccbonline.ca</p>
          </div>
        </section>

        {/* 12. Related Services */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Related Services</p>
            <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">
              You May Also Need
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Market Entry Diagnosis', desc: 'Assess whether your product and timing are suitable for North America entry.', slug: 'market-entry-diagnosis' },
                { title: 'Compliance & Responsibility Chain', desc: 'Identify certification, import, and liability gaps before entering the market.', slug: 'compliance-responsibility-chain' },
                { title: 'Customer & Channel Validation', desc: 'Validate buyers, channels, and outreach direction before full-scale expansion.', slug: 'customer-channel-validation' },
                { title: 'Local Execution Support', desc: 'Coordinate import, warehousing, fulfillment, and after-sales in North America.', slug: 'local-execution-support' },
              ].map((s, i) => (
                <Link key={i} to={`/en/services/${s.slug}`} className="p-5 bg-white border border-[#E5E5E5] hover:border-[#00A884] transition-colors group">
                  <h3 className="text-[15px] font-semibold mb-2 group-hover:text-[#00A884] transition-colors">{s.title}</h3>
                  <p className="text-[13px] text-[#767676] leading-[1.6]">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
