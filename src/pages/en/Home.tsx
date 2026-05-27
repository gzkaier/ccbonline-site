import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ENHome() {
  useSEO({
    title: 'CCBONLINE INC. | Canada Market Entry & Business Services',
    description: 'CCBONLINE INC. helps businesses prepare for Canada and North America market entry through buyer trust audits, market-entry assessment, bilingual business materials, website credibility, trade show support, business media content, and commercial connection pathways.',
    canonical: 'https://www.ccbonline.ca/en',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'CCBONLINE INC. | Canada Market Entry & Business Services'
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
              alt="CCBONLINE INC. helps businesses prepare for Canada and North America market entry"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/90 to-[#07111F]/55" />
          <div className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5 font-medium">
              Canada-Registered · Toronto-Based · Bilingual Advisory
            </p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[42px] lg:text-[48px] leading-[1.2] tracking-tight max-w-[900px] mb-4 md:mb-6">
              Before Reaching North American Buyers, Make Sure They Have a Reason to Trust You
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6 md:mb-8">
              Many companies already have products, websites, and English materials. But when North American buyers review them, they may still not have enough reason to respond, continue the conversation, or take the next step. CCBONLINE INC. helps businesses clarify their buyer trust, market-entry readiness, bilingual materials, and commercial connection pathways before entering Canada and North America.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6">
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">
                Send Us Your Website for a Review
              </Link>
              <Link to="/en/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                Explore Buyer Trust Services
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/40">
              <span>Market Entry</span>
              <span>·</span>
              <span>Credibility Audit</span>
              <span>·</span>
              <span>Bilingual Materials</span>
              <span>·</span>
              <span>Trade Show Support</span>
            </div>
          </div>
        </section>

        {/* ===== 2. Pain Points: Where You Might Be Stuck ===== */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">
              Where You Might Be Stuck
            </p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              It Is Not a Exposure Problem — It Is a Readiness Problem
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-10">
              Many companies jump straight into advertising, trade shows, and outreach. But if your website and materials do not communicate a clear reason to buy, all those efforts underperform. Here are the five situations we encounter most frequently.
            </p>
            <div className="space-y-4">
              {[
                {
                  num: '01',
                  title: 'North American buyers are not responding',
                  desc: 'You are sending emails, connecting on LinkedIn, and reaching out to prospects. But after reviewing your website and materials, buyers do not take the next step. The issue is not that buyers do not exist — it is that they have not found a reason to trust you.',
                  service: 'Pre-Outreach Credibility Diagnostic',
                  link: '/en/services/customer-channel-validation',
                },
                {
                  num: '02',
                  title: 'Your website and materials fail to convert interest',
                  desc: 'You have a website and English materials, but they read like a translated brochure or internal presentation. North American buyers review them and do not feel confident enough to initiate contact.',
                  service: 'Website & Materials Quick Audit',
                  link: '/en/services/website-content-for-service-providers',
                },
                {
                  num: '03',
                  title: 'Trade show is coming and materials are not ready',
                  desc: 'Trade shows require more than booth space and samples. What matters most is whether prospects continue to trust you after they leave your booth. Without effective follow-up systems and supporting materials, most leads go cold.',
                  service: 'Trade Show Buyer Engagement Package',
                  link: '/en/services/trade-show-follow-up',
                },
                {
                  num: '04',
                  title: 'You want distribution partners but cannot articulate the value',
                  desc: 'Agents and distributors evaluate more than your product. They look at margins, risk, after-sales support, market backing, and partnership terms. Without these clarified, it is hard to attract capable partners.',
                  service: 'Channel Partnership Materials & Communication Design',
                  link: '/en/services/customer-channel-validation',
                },
                {
                  num: '05',
                  title: 'You are unsure if your product can enter Canada/North America',
                  desc: 'You need to assess product fit, documentation, compliance, responsibility chain, channel viability, and local support capacity before committing to trade shows or advertising spend.',
                  service: 'Canada & North America Market Entry Initial Diagnostic',
                  link: '/en/services/market-entry-diagnosis',
                },
              ].map((item) => (
                <div key={item.num} className="p-5 md:p-6 border border-white/10 hover:border-[#00A884]/50 transition-colors bg-white/5">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[#C9A44C] text-[13px] font-medium">{item.num}</span>
                        <h3 className="text-white text-[17px] md:text-[18px] font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-white/60 text-[14px] md:text-[15px] leading-[1.65] mb-3">{item.desc}</p>
                      <Link to={item.link} className="text-[14px] font-medium text-[#00A884] hover:underline inline-flex items-center gap-1">
                        {item.service} <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 3. Service Products ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Services</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              From Quick Audit to 30-Day Launch Support — Staged by Need
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-10">
              Each service has a clear target audience, deliverables, value proposition, and boundaries. You can start at any stage, but we recommend this: before spending more on outreach, confirm that your materials are ready to convert interest.
            </p>

            {/* Product 1 */}
            <div className="mb-8 p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#C9A44C] text-[13px] font-medium">Starter</span>
                    <span className="text-[13px] text-[#767676]">CAD 299–499</span>
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-2">Website & Materials Quick Audit</h3>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] max-w-[640px]">
                    For companies that already have a website and English materials but are unsure whether prospects would feel confident reaching out. Know why buyers might not trust you — before you spend more on emails, trade shows, or ads.
                  </p>
                </div>
                <Link to="/en/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px] shrink-0">Request Quick Audit</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-white border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">Deliverables</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Homepage quick diagnostic, English company introduction review, credibility gap highlights, buyer-perspective issue list, prioritized fix recommendations</p>
                </div>
                <div className="p-3 bg-white border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">Boundaries</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">No guarantee of lead volume, inquiries, search rankings, or sales. Cost can be credited toward a Pre-Outreach Credibility Diagnostic or Buyer Trust Materials Package.</p>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="mb-8 p-5 md:p-6 border border-[#E5E5E5]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#C9A44C] text-[13px] font-medium">Core</span>
                    <span className="text-[13px] text-[#767676]">CAD 800–1,500</span>
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-2">Pre-Outreach Credibility Diagnostic</h3>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] max-w-[640px]">
                    For companies preparing to develop North American buyers, attend trade shows, run LinkedIn outreach, send prospecting emails, or find agents. Unprepared materials undermine every email, ad, show, and sales conversation that follows.
                  </p>
                </div>
                <Link to="/en/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px] shrink-0">Request Diagnostic</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">Deliverables</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Website and materials diagnostic, buyer-perspective purchase rationale analysis, credibility gap list, English expression issues, common North American buyer concerns, prioritized fix recommendations, 30-day outreach readiness plan</p>
                </div>
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">Boundaries</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">No guarantee of response rates, conversion rates, or sales results. We help you assess whether buyers have reason to trust you — we do not replace your sales team.</p>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="mb-8 p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#C9A44C] text-[13px] font-medium">Advanced</span>
                    <span className="text-[13px] text-[#767676]">CAD 1,800–3,500</span>
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-2">North American Buyer Trust Materials Package</h3>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] max-w-[640px]">
                    For companies ready to begin buyer development, attend trade shows, contact channels, run LinkedIn, or send company materials. We restructure internal introductions into content that North American buyers understand, trust, and can act on.
                  </p>
                </div>
                <Link to="/en/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px] shrink-0">Request Materials Package</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-white border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">Deliverables</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">One-sentence positioning, English company introduction, one-page sales sheet, core product/service value proposition reconstruction, North American prospecting email opener, LinkedIn company or personal profile optimization, homepage core copy recommendations</p>
                </div>
                <div className="p-3 bg-white border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">Boundaries</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Does not include full website development. No guarantee of sales. Materials are ready for immediate use in outreach and trade shows, but follow-up execution remains your responsibility.</p>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="mb-8 p-5 md:p-6 border border-[#E5E5E5]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#C9A44C] text-[13px] font-medium">Trade Show</span>
                    <span className="text-[13px] text-[#767676]">CAD 2,500–6,000</span>
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-2">Trade Show Buyer Engagement Package</h3>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] max-w-[640px]">
                    For companies attending a trade show, investment conference, industry meeting, or client visit within 2–8 weeks. Avoid the common pattern: "great conversation at the booth, nothing happens after."
                  </p>
                </div>
                <Link to="/en/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px] shrink-0">Request Trade Show Package</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">Deliverables</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Pre-show website credibility check, English company introduction, one-page handout, booth Q&A talking points, post-show email templates, lead tiering framework, 7-day post-show follow-up rhythm; optional CCBONLINE business feature or event coverage</p>
                </div>
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">Boundaries</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">No guarantee of show sales. Does not replace on-site sales team engagement. We provide materials and follow-up systems; booth interaction remains your responsibility.</p>
                </div>
              </div>
            </div>

            {/* Product 5 */}
            <div className="mb-8 p-5 md:p-6 border border-[#07111F] bg-[#07111F]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#C9A44C] text-[13px] font-medium">Intensive</span>
                    <span className="text-[13px] text-white/60">CAD 3,500–8,000+</span>
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-white mb-2">North America Market Entry 30-Day Launch Support</h3>
                  <p className="text-[14px] md:text-[15px] text-white/70 leading-[1.65] max-w-[640px]">
                    For companies committed to entering Canada or North America but unclear on entry path, materials, responsibility chain, buyer development, and local support. We help you sequence the first phase correctly — avoiding wasted spending on wrong priorities, wrong resources, and premature trade shows.
                  </p>
                </div>
                <Link to="/en/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px] shrink-0">Request Launch Support</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-white/5 border border-white/10">
                  <p className="text-[13px] font-medium text-white mb-1">Deliverables</p>
                  <p className="text-[13px] text-white/60 leading-[1.6]">Market entry initial diagnostic, product/service fit assessment, compliance and responsibility chain risk review, website and materials optimization direction, buyer development pathway, channel/agent/service provider communication prep, 30-day action plan, weekly progress call</p>
                </div>
                <div className="p-3 bg-white/5 border border-white/10">
                  <p className="text-[13px] font-medium text-white mb-1">Boundaries</p>
                  <p className="text-[13px] text-white/60 leading-[1.6]">Does not replace legal, tax, certification, customs, or insurance professionals. No guarantee of market entry success or customer acquisition. We clarify sequence, identify gaps, and drive next steps.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 4. Who We Work With ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Who We Work With</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              Three Types of Companies We Serve
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              Our core focus is Chinese manufacturing companies and export brands preparing to enter Canada and North America. We also serve Canadian businesses connecting with China, and local entrepreneurs building credibility in Canada.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-8">
              {[
                { title: 'Chinese Manufacturers & Export Brands', desc: 'Companies with proven production capacity entering Canadian and North American markets — needing market-fit assessment, compliance and IOR (Importer of Record) coordination, website credibility diagnostic, trade show preparation, and local execution support.' },
                { title: 'Canadian Businesses Reaching China', desc: 'Canadian companies, brands, and service providers looking to connect with Chinese markets, suppliers, or customers — needing bilingual content, local market understanding, and commercial connection support.' },
                { title: 'Local Entrepreneurs & Service Providers', desc: 'Immigrant entrepreneurs, small businesses, and professional service providers in Canada building digital credibility, improving websites and business content, and enhancing local discoverability.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3 text-[#212121]">Typical Client Profile</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  'Annual revenue RMB 30 million to 500 million',
                  'Real products and export experience, mainly from Zhejiang, Guangdong, Jiangsu, Shandong, Fujian',
                  'Decision-maker is typically founder, GM, or export director, age 40–55',
                  'Previously exported to Southeast Asia, Middle East; now considering North America',
                  'English website exists but inquiry conversion is low',
                  'Has attended trade shows but post-show follow-up is unstructured',
                  'Has worked with service providers who each only covered their own scope, with no one seeing the full picture',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#00A884] mt-1 shrink-0">—</span>
                    <p className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5. How We Work ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Process</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              Four Steps: Diagnose → Plan → Coordinate → Track
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: '01', title: 'Diagnose', desc: 'We assess your current state: product, market, materials, digital presence, and key gaps. You get an honest assessment of what is ready and what needs attention. We will recommend against proceeding if the fit is not there.' },
                { step: '02', title: 'Plan', desc: 'We map a practical path forward: which actions to take, in what sequence, with what resources, and what timeline. No generic templates — specific to your situation.' },
                { step: '03', title: 'Coordinate', desc: 'We work with your team and local partners to execute the plan — content, website, compliance, supplier communication, or event coordination. We drive action, not just produce reports.' },
                { step: '04', title: 'Track', desc: 'We keep the project moving through regular check-ins, task lists, and progress reviews — ensuring work gets done, not just planned. Projects die between "planned" and "done" more than anywhere else.' },
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

        {/* ===== 6. Boundary Note ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <div className="max-w-[800px] p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3">What We Do Not Do</h3>
              <p className="text-[14px] text-[#767676] leading-[1.65] mb-3">
                CCBONLINE INC. provides business advisory, coordination, content, and market-entry support. We are not a law firm, accounting firm, certification body, insurance broker, customs broker, or logistics company.
              </p>
              <p className="text-[14px] text-[#767676] leading-[1.65]">
                When formal professional advice is required — legal, tax, certification, insurance, or customs — we help you prepare the right questions, organize materials, and connect with qualified specialists. We coordinate; they execute. We do not guarantee buyer acquisition, quick orders, or market entry success. Our value is helping you assess whether your direction is sound before you commit resources.
              </p>
            </div>
          </div>
        </section>

        {/* ===== 7. Final CTA ===== */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Not Sure If Your Website and Materials Are Ready?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                Start with a Website & Materials Quick Audit (CAD 299–499). Before spending more on promotion, find out whether buyers have a reason to trust you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">
                  Send Us Your Website for a Review
                </Link>
                <Link to="/en/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                  Explore All Services
                </Link>
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
