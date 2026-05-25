import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ENHome() {
  useSEO({
    title: 'Canada Market Entry Advisory for Chinese Manufacturers | CCBONLINE INC.',
    description: 'CCBONLINE INC. helps Chinese manufacturers and export businesses assess readiness, compliance gaps, import responsibility, and local execution requirements before entering Canada and North America.',
    canonical: 'https://www.ccbonline.ca/en',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Canada Market Entry Advisory for Chinese Manufacturers | CCBONLINE INC.'
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
              alt="CCBONLINE INC. provides Canada market entry advisory for Chinese manufacturers and export businesses."
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/85 to-[#07111F]/50" />
          <div className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5 font-medium">
              Canada-Registered · Toronto-Based · Bilingual
            </p>
            <h1 className="font-serif text-white text-[26px] sm:text-[34px] md:text-[42px] lg:text-[48px] leading-[1.2] tracking-tight max-w-[900px] mb-4 md:mb-6">
              Canada Market Entry Advisory for Chinese Manufacturers & Export Businesses
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6 md:mb-8">
              CCBONLINE INC. is a Canada-registered market entry advisory company based in the Greater Toronto Area. We help Chinese manufacturers, export brands, and suppliers assess product readiness, compliance gaps, import responsibility, local execution requirements, and buyer-facing materials before entering Canada and North America.
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

        {/* ===== 2. Who We Help ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Who We Help</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              Businesses Preparing to Enter Canada & North America
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              We work best with companies that have real products, clear market intent, and the willingness to build a practical entry path rather than rely on shortcuts. We do not promise guaranteed buyers or instant market access — we help you understand what it actually takes and whether you are ready.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: 'Chinese Manufacturers', desc: 'Companies with proven production capacity seeking structured entry into Canadian and North American markets.' },
                { title: 'Export-Oriented Brands', desc: 'Brands with differentiated products that need positioning, compliance review, and channel strategy for North America.' },
                { title: 'Industrial Suppliers', desc: 'Equipment, machinery, and component makers who need certification guidance, IOR understanding, and local partner coordination.' },
                { title: 'Service Providers', desc: 'Professional services firms expanding into Canada — logistics, insurance, education, consulting, and cross-border services.' },
                { title: 'Growth-Stage Businesses', desc: 'Companies with domestic or regional success ready to move beyond trial-and-error approaches to market entry.' },
                { title: 'Trade Show Participants', desc: 'Exhibitors preparing for or following up from Canadian and US trade shows who need structured execution support.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 3. Common Entry Gaps ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Entry Gaps</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              Common Entry Gaps We See
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              Many companies have solid products, but their market-entry foundation is not ready for North America. Here are the gaps we encounter most often during initial diagnosis.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {[
                { title: 'Product is ready, but documentation is not', desc: 'English product specs, datasheets, user manuals, and safety warnings are incomplete, outdated, or written for a different audience. North American buyers expect professional, complete documentation before they engage.' },
                { title: 'The company has inquiries, but no local follow-up process', desc: 'Leads come from trade shows, website inquiries, or referrals, but there is no structured follow-up rhythm, no local point of contact, and no process to qualify or nurture prospects.' },
                { title: 'Certification, import responsibility, and warranty obligations are not clearly mapped', desc: 'Uncertainty about CSA, UL, FCC, or ISED requirements; who serves as Importer of Record; how warranty claims will be handled locally; and what insurance coverage is needed before the first shipment.' },
                { title: 'The website exists, but North American buyers cannot quickly understand the offer', desc: 'Websites lack clear English product information, verifiable certifications, professional presentation, and trust signals that North American buyers look for when evaluating new suppliers.' },
                { title: 'Trade show leads are collected, but not converted into structured follow-up', desc: 'Business cards are gathered, but there is no systematic post-show outreach, no adapted materials for North American prospects, and no local coordination to turn interest into meetings.' },
                { title: 'A distributor was found, but the responsibility chain was never clarified', desc: 'A local partner was identified, but questions about import liability, warranty handling, after-sales support, documentation, and who owns the customer relationship remain unanswered.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border-l-2 border-[#C9A44C] border border-[#E5E5E5]">
                  <h3 className="text-[15px] font-semibold mb-2 leading-[1.5]">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 4. What We Mean by Responsibility Chain ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Our Approach</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              What We Mean by Responsibility Chain
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              Entering Canada is not only about finding buyers. For many products, companies must clarify who is responsible for certification, import records, product liability, warranty, after-sales support, insurance, documentation, and customer communication. We call this the <strong className="font-medium text-[#212121]">responsibility chain</strong> — and gaps in this chain are a leading cause of entry failure.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: 'Certification Responsibility', desc: 'Who ensures the product meets CSA, UL, FCC, ISED, or other applicable standards? Who holds the certification, and who pays for testing and renewal?' },
                { title: 'Importer of Record (IOR)', desc: 'Who is the legal importer responsible for customs declaration, duties, taxes, and compliance with Canadian import regulations? This is not a formality — it carries real liability.' },
                { title: 'Product Liability & Insurance', desc: 'If the product causes damage or injury in Canada, who is responsible? Is product liability insurance in place, and does it cover North American jurisdiction?' },
                { title: 'Warranty & After-Sales Support', desc: 'Who handles warranty claims, repairs, returns, and customer service locally? North American buyers expect clear warranty terms and accessible support — not promises without a process.' },
                { title: 'Documentation & Labeling', desc: 'Who is responsible for ensuring product labels, user manuals, safety warnings, and compliance documentation meet Canadian federal and provincial requirements?' },
                { title: 'Local Customer Communication', desc: 'Who responds when Canadian customers or regulators have questions? Is there a local presence, or does every issue route back to a different time zone?' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
            <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] max-w-[720px] mt-6">
              Our responsibility-chain methodology helps companies map these obligations before they commit to a market entry path — not after a problem forces the conversation.
            </p>
          </div>
        </section>

        {/* ===== 5. What We Do / Services ===== */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Services</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              What We Do
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-4">
              We focus on five core capabilities because they are what matters most when entering a new market. Each service is designed to move you from uncertainty to clarity — and from clarity to action.
            </p>
            <p className="text-white/40 text-[14px] leading-[1.6] max-w-[720px] mb-10">
              CCBONLINE INC. provides business advisory, market-entry diagnosis, coordination, documentation preparation, partner communication support, and project tracking. We are not a law firm, accounting firm, certification body, insurance broker, or customs broker. When formal professional advice is required, we help clients prepare the right questions, organize materials, and coordinate with qualified specialists.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { num: '01', title: 'Market Entry Diagnosis', desc: 'Before you invest, we assess your readiness. Product-market fit observations, competitive landscape review, certification requirements, key entry gaps, and a clear go / no-go / wait recommendation with specific next steps.' },
                { num: '02', title: 'Compliance & Responsibility Chain Mapping', desc: 'Certification pathways (CSA, UL, FCC, ISED), import documentation requirements, IOR questions, product liability considerations, warranty obligations, and insurance gaps — all mapped before you ship. We identify what you need; qualified professionals provide the formal advice.' },
                { num: '03', title: 'Local Execution & Partner Coordination', desc: 'We coordinate with local partners, service providers, and channels based on your project needs. Weekly tracking, action lists, meeting notes, and follow-up items to keep your project moving forward.' },
                { num: '04', title: 'Website & Commercial Content Diagnosis', desc: 'Review of your product materials, website, and documentation for North American buyers. We identify credibility gaps, content issues, and trust-signal weaknesses — then provide a prioritized improvement plan.' },
                { num: '05', title: 'Media Communication & Business Exposure', desc: 'Brand positioning review, content adaptation, event or business exposure planning, and communication strategies to help you reach the right audiences in Canada and North America.' },
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

        {/* ===== 6. Typical Deliverables ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Deliverables</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              What You Can Expect to Receive
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              Each engagement produces practical, structured outputs — not generic reports. Here is what typical deliverables look like for each service.
            </p>
            <div className="space-y-6">
              {/* 01 */}
              <div className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-[#C9A44C] text-[13px] font-medium shrink-0">01</span>
                  <h3 className="text-[17px] md:text-[18px] font-semibold">Market Entry Diagnosis</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-7">
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Readiness assessment summary</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Key entry gaps and risk notes</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Product-market fit observations</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Compliance and documentation checklist</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Recommended entry path</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Go / no-go / wait recommendation</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6] sm:col-span-2">• 30-day next-step action plan</li>
                </ul>
              </div>
              {/* 02 */}
              <div className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-[#C9A44C] text-[13px] font-medium shrink-0">02</span>
                  <h3 className="text-[17px] md:text-[18px] font-semibold">Compliance & Responsibility Chain Mapping</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-7">
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Responsibility-chain map</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Import and IOR questions list</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Certification and documentation gap notes</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Warranty / after-sales responsibility checklist</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6] sm:col-span-2">• Professional service coordination notes (what type of qualified specialist you may need)</li>
                </ul>
              </div>
              {/* 03 */}
              <div className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-[#C9A44C] text-[13px] font-medium shrink-0">03</span>
                  <h3 className="text-[17px] md:text-[18px] font-semibold">Local Execution & Partner Coordination</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-7">
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Local partner communication plan</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Weekly action list</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Responsibility tracking</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Meeting notes and follow-up items</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6] sm:col-span-2">• Next-step coordination roadmap</li>
                </ul>
              </div>
              {/* 04 */}
              <div className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-[#C9A44C] text-[13px] font-medium shrink-0">04</span>
                  <h3 className="text-[17px] md:text-[18px] font-semibold">Website & Commercial Content Diagnosis</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-7">
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Website credibility review</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Buyer-facing content gap analysis</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• English product documentation notes</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Trust signal improvement suggestions</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6] sm:col-span-2">• Priority content revision list</li>
                </ul>
              </div>
              {/* 05 */}
              <div className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-[#C9A44C] text-[13px] font-medium shrink-0">05</span>
                  <h3 className="text-[17px] md:text-[18px] font-semibold">Media Communication & Business Exposure</h3>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-7">
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Positioning review</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• English / Chinese content adaptation suggestions</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Event or business exposure planning</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">• Media-style company profile or article outline</li>
                  <li className="text-[13px] md:text-[14px] text-[#444] leading-[1.6] sm:col-span-2">• Communication materials improvement notes</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 7. How Local Execution Works ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Process</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              How Local Execution Works
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: '01', title: 'Diagnose', desc: 'We review your product, documentation, target market, current stage, and key entry risks. You get a clear assessment of what is ready and what needs attention.' },
                { step: '02', title: 'Prepare', desc: 'We help organize market-entry materials, English content, responsibility-chain questions, and partner communication documents.' },
                { step: '03', title: 'Coordinate', desc: 'We coordinate with relevant local partners, service providers, channels, or follow-up contacts based on your project needs and our assessment.' },
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

        {/* ===== 8. Who This Is For / Not For ===== */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Fit Assessment</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              Who This Is For — And Who It Is Not For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Who This Is For */}
              <div className="p-6 border border-white/10">
                <h3 className="text-white text-[17px] md:text-[18px] font-semibold mb-4">Who This Is For</h3>
                <ul className="space-y-3">
                  {[
                    'Chinese manufacturers preparing for Canada or North America entry',
                    'Export brands with real products and clear market intent',
                    'Suppliers receiving inquiries from Canadian or US buyers',
                    'Companies preparing for or following up after trade shows',
                    'Businesses unsure about compliance, IOR, documentation, warranty, or local execution',
                    'Service providers entering Canada with cross-border business offers',
                  ].map((item, i) => (
                    <li key={i} className="text-[14px] text-white/70 leading-[1.65] flex items-start gap-2">
                      <span className="text-[#00A884] shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Who This Is Not For */}
              <div className="p-6 border border-white/10">
                <h3 className="text-white text-[17px] md:text-[18px] font-semibold mb-4">Who This Is Not For</h3>
                <ul className="space-y-3">
                  {[
                    'Companies looking for guaranteed buyers or instant distributors',
                    'Businesses that want to ship first and handle compliance later',
                    'Companies needing only basic translation without market-entry judgment',
                    'Projects without a defined product, market, or business intent',
                    'Companies seeking formal legal, tax, certification, insurance, or customs advice without involving qualified professionals',
                  ].map((item, i) => (
                    <li key={i} className="text-[14px] text-white/50 leading-[1.65] flex items-start gap-2">
                      <span className="text-[#767676] shrink-0">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-white/40 text-[14px] leading-[1.6] max-w-[720px] mt-6">
              If you are unsure whether we are the right fit, the best next step is to request an initial diagnosis. We will tell you honestly if we can help — and if not, what type of service provider you should look for instead.
            </p>
          </div>
        </section>

        {/* ===== 9. Why CCBONLINE ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Why CCBONLINE</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              Why Businesses Work With CCBONLINE INC.
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: 'Canada-Based', desc: 'A registered company in the Greater Toronto Area with real local presence and operational capability. We understand the Canadian business environment because we work in it every day.' },
                { title: 'Bilingual Communication', desc: 'Fluent in Chinese and English, bridging cultural and business practice gaps between markets. We help you communicate clearly with Canadian partners, buyers, and regulators.' },
                { title: 'Market-Entry Judgment', desc: 'We assess whether you should enter, not just how. An honest no-go recommendation is more valuable than a flawed go plan. We will not push you toward a path that does not match your readiness.' },
                { title: 'Responsibility-Chain Awareness', desc: 'We map certification, import, warranty, insurance, and liability obligations before you ship — not after problems arise. This is our core differentiator.' },
                { title: 'Practical Execution', desc: 'Weekly tracking, partner coordination, task lists, and follow-through. We help projects move forward, not just produce reports that sit unread.' },
                { title: 'Content & Media Capability', desc: 'We understand how Chinese businesses present themselves and what North American buyers expect to see. We help close that gap with actionable, prioritized recommendations.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 10. Resources ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Resources</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              Market Entry Resources
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              Practical guides, checklists, and insights to help you assess your readiness before committing to a full engagement. Some are available now; others can be requested.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { title: 'Canada Market Entry Readiness Checklist', desc: 'A structured self-assessment covering product, documentation, compliance, channel readiness, and key gaps to address before entering.', status: 'Request this checklist', link: '/en/contact' },
                { title: 'Website Credibility Checklist for Export Businesses', desc: 'Key elements North American buyers look for when evaluating a supplier website, and common gaps we see on Chinese manufacturer sites.', status: 'Request this checklist', link: '/en/contact' },
                { title: 'IOR & Import Responsibility Basics', desc: 'What Importer of Record means, why it matters, how it differs from customs clearance, and what to consider before choosing an IOR arrangement.', status: 'Available', link: '/en/insights/importer-of-record-is-not-just-customs-clearance' },
                { title: 'Trade Show Follow-up Checklist', desc: 'How to convert trade show leads into structured follow-up, including timing, materials, and local coordination recommendations.', status: 'Request this checklist', link: '/en/contact' },
                { title: 'Product Certification Pathway Notes for Canada', desc: 'Overview of CSA, UL, FCC, ISED, and other certification requirements by product category — what to check before shipping.', status: 'In preparation', link: null },
                { title: 'English Product Documentation Checklist', desc: 'What documentation North American distributors and buyers expect to see, and how to evaluate whether yours meets the standard.', status: 'Request this checklist', link: '/en/contact' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[15px] font-semibold leading-[1.4]">{item.title}</h3>
                    <span className="text-[11px] text-[#00A884] uppercase tracking-wider shrink-0 ml-2">{item.status}</span>
                  </div>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6] mb-3">{item.desc}</p>
                  {item.link ? (
                    <Link to={item.link} className="text-[13px] font-medium text-[#00A884] hover:underline">
                      {item.status.includes('Request') ? 'Request this resource →' : 'Read now →'}
                    </Link>
                  ) : (
                    <span className="text-[13px] text-[#999]">Current version in preparation</span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/en/insights" className="btn-primary text-[14px] px-5 py-3 min-h-[48px]">Read Market Entry Insights</Link>
              <span className="text-[13px] text-[#999] self-center">All checklists available upon request — no obligation</span>
            </div>
          </div>
        </section>

        {/* ===== 11. FAQ ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">FAQ</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              Common Questions
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: 'How do I know if my product is ready for Canada?',
                  a: 'Readiness depends on your product category, documentation completeness, certification status, and whether you have clarified import responsibility and local support. Our initial diagnosis assesses these factors systematically and gives you a clear go, no-go, or wait recommendation.',
                },
                {
                  q: 'Do I need CSA, UL, FCC, or ISED certification?',
                  a: 'It depends on your product type, electrical components, radio frequency functions, intended use, and the distribution channels you are targeting. Different channels and buyer types have different compliance expectations. We help you identify which certifications are relevant to your situation, but formal certification decisions should be confirmed with a qualified certification body.',
                },
                {
                  q: 'Who should act as Importer of Record in Canada?',
                  a: 'The Importer of Record (IOR) is the legal entity responsible for customs declaration, duties, taxes, and compliance with Canadian import regulations. It can be your own Canadian entity, your distributor, or a third-party IOR agent — each arrangement has different liability, cost, and control implications. We help you understand the trade-offs; the final decision should involve qualified legal or customs specialists.',
                },
                {
                  q: 'Can a distributor handle warranty and after-sales responsibility?',
                  a: 'Some distributors will handle warranty and support; others will not. This must be clarified before signing any agreement — not assumed. We help you map warranty responsibility, after-sales requirements, and local customer communication as part of the responsibility-chain assessment.',
                },
                {
                  q: 'What should we prepare before contacting Canadian buyers?',
                  a: 'At minimum: professional English product documentation, a credible website, clarity on certification status, a defined IOR arrangement or plan, and a clear value proposition for the Canadian market. Buyers will ask about these quickly; having answers ready builds credibility.',
                },
                {
                  q: 'Should we enter Canada or the US first?',
                  a: 'It depends on your product category, compliance complexity, channel availability, competitive landscape, and current resources. For many Chinese manufacturers, Canada offers a more manageable entry point with clearer compliance pathways and less competition than the US. We assess your specific situation and recommend a priority order.',
                },
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

        {/* ===== 12. What to Prepare Before Requesting a Diagnosis ===== */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">Before You Reach Out</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              What to Prepare Before Requesting a Diagnosis
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              You do not need perfect materials to start. But the more context you provide, the more precise our initial assessment can be. Here is what helps:
            </p>
            <ul className="space-y-4 mb-8">
              {[
                { label: 'Product category and model information', desc: 'What you make, what it does, and what materials or components it involves' },
                { label: 'Target market', desc: 'Canada, US, or both — and whether you have a priority province or state in mind' },
                { label: 'Current sales stage', desc: 'Exploring, preparing for a trade show, responding to inquiries, distributor discussion, or first shipment planning' },
                { label: 'Existing certifications or test reports', desc: 'Any CSA, UL, CE, FCC, or other test results you already have — even if incomplete' },
                { label: 'English materials', desc: 'Website, brochure, datasheet, manual, or product catalog — whatever you currently use' },
                { label: 'Current blocker', desc: 'What is stopping you from moving forward — compliance, channel, import, documentation, local partner, follow-up, or something else' },
              ].map((item, i) => (
                <li key={i} className="pl-4 border-l-2 border-[#00A884]">
                  <p className="text-[14px] md:text-[15px] font-medium text-[#212121] mb-0.5">{item.label}</p>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </li>
              ))}
            </ul>
            <p className="text-[14px] text-[#666] leading-[1.6] italic">
              If you do not have all of these, that is normal. Send what you have, and we will tell you what else may be needed after the initial review.
            </p>
          </div>
        </section>

        {/* ===== 13. Start Here ===== */}
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
                <Link to="/en/insights" className="text-[14px] font-medium text-[#00A884] hover:underline">Read Insights →</Link>
              </div>
              <div className="p-6 bg-white border border-[#E5E5E5]">
                <p className="text-[11px] text-[#999] uppercase tracking-wider mb-3">Active</p>
                <h3 className="text-[17px] font-semibold mb-3">Have a Specific Challenge?</h3>
                <p className="text-[14px] text-[#767676] leading-[1.6] mb-4">Submit your product and situation. We will review and recommend the right service for your stage.</p>
                <Link to="/en/contact" className="text-[14px] font-medium text-[#00A884] hover:underline">Request a Diagnosis →</Link>
              </div>
              <div className="p-6 bg-white border border-[#E5E5E5]">
                <p className="text-[11px] text-[#999] uppercase tracking-wider mb-3">Ready</p>
                <h3 className="text-[17px] font-semibold mb-3">Ready to Move Forward?</h3>
                <p className="text-[14px] text-[#767676] leading-[1.6] mb-4">Book a consultation to discuss your market entry project with a local advisor.</p>
                <Link to="/en/contact" className="text-[14px] font-medium text-[#00A884] hover:underline">Book a Consultation →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 14. Final CTA ===== */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Ready to Evaluate Your North America Readiness?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                Tell us where you are, what product you are working with, and what is blocking your progress. We will recommend the right first step — honestly and directly.
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
