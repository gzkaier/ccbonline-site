import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ENServices() {
  useSEO({
    title: 'CCBONLINE INC. Services | Buyer Trust Diagnostic, Market Entry Support',
    description: 'CCBONLINE INC. offers Website & Materials Quick Audit, Pre-Outreach Credibility Diagnostic, North American Buyer Trust Materials Package, Trade Show Buyer Engagement Package, and 30-Day Market Entry Launch Support for businesses entering Canada and North America.',
    canonical: 'https://www.ccbonline.ca/en/services',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'CCBONLINE INC. Services | Buyer Trust Diagnostic, Market Entry Support'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#07111F]">
          <div className="container-site">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Services</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              Not Everything for Everyone — The Right Step at the Right Stage
            </h1>
            <p className="text-white/60 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6">
              Five staged service products, from a quick audit to 30-day launch support. Each has a clear target audience, deliverables, value boundaries, and upgrade path. Our recommendation: before spending more on outreach, confirm your materials are ready to convert interest.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">
                Send Us Your Website for a Review
              </Link>
            </div>
          </div>
        </section>

        {/* Pain Point Entry */}
        <section className="section-padding bg-white border-b border-[#E5E5E5]">
          <div className="container-site">
            <p className="text-label mb-3">Where You Might Be Stuck</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              Five Common Situations, Each with a Service Entry Point
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: 'North American buyers are not responding',
                  desc: 'You are sending emails and connecting on LinkedIn, but prospects review your website and materials and do not take the next step.',
                  service: 'Pre-Outreach Credibility Diagnostic',
                  link: '/en/services/customer-channel-validation',
                },
                {
                  title: 'Your website and materials fail to convert',
                  desc: 'You have a website and English materials, but they read like a translated brochure. Buyers do not feel confident enough to reach out.',
                  service: 'Website & Materials Quick Audit',
                  link: '/en/services/website-content-for-service-providers',
                },
                {
                  title: 'Trade show is coming and materials are not ready',
                  desc: 'Trade shows require more than booth space. What matters is whether prospects continue to trust you after they leave.',
                  service: 'Trade Show Buyer Engagement Package',
                  link: '/en/services/trade-show-follow-up',
                },
                {
                  title: 'You want distribution partners but cannot articulate the value',
                  desc: 'Agents and distributors evaluate margins, risk, after-sales support, and partnership terms — not just the product.',
                  service: 'Channel Partnership Materials & Communication',
                  link: '/en/services/customer-channel-validation',
                },
                {
                  title: 'Unsure if your product can enter Canada/North America',
                  desc: 'You need to assess product fit, compliance, responsibility chain, channels, and local support before committing budget.',
                  service: 'Canada & North America Market Entry Diagnostic',
                  link: '/en/services/market-entry-diagnosis',
                },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00A884] transition-colors group">
                  <h3 className="text-[16px] font-semibold mb-2 group-hover:text-[#00A884] transition-colors">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.6] mb-3">{item.desc}</p>
                  <Link to={item.link} className="text-[14px] font-medium text-[#00A884] hover:underline inline-flex items-center gap-1">
                    {item.service} <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Products */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Service Products</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              Five Staged Services
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-10">
              Each product has a clear price range, target audience, deliverables, value source, and boundaries. Choose the service that matches your current stage.
            </p>

            {/* Product 1 */}
            <div className="mb-6 p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-[#C9A44C] text-[13px] font-medium">Starter</span>
                <span className="text-[13px] text-[#767676]">CAD 299–499</span>
              </div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-2">Website & Materials Quick Audit</h3>
              <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] mb-4 max-w-[680px]">
                For companies that already have a website and English materials but are unsure whether prospects would feel confident reaching out. Know why buyers might not trust you — before you spend more on outreach.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">Deliverables</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Homepage quick diagnostic, English company introduction review, credibility gap highlights, buyer-perspective issue list, prioritized fix recommendations</p>
                </div>
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">Boundaries</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">No guarantee of lead volume, inquiries, rankings, or sales. Cost can be credited toward Pre-Outreach Credibility Diagnostic or Buyer Trust Materials Package.</p>
                </div>
              </div>
              <Link to="/en/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px]">Request Quick Audit</Link>
            </div>

            {/* Product 2 */}
            <div className="mb-6 p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-[#C9A44C] text-[13px] font-medium">Core</span>
                <span className="text-[13px] text-[#767676]">CAD 800–1,500</span>
              </div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-2">Pre-Outreach Credibility Diagnostic</h3>
              <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] mb-4 max-w-[680px]">
                For companies preparing to develop North American buyers, attend trade shows, run LinkedIn outreach, send prospecting emails, or find agents. Unprepared materials undermine every sales activity that follows.
              </p>
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
              <Link to="/en/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px]">Request Diagnostic</Link>
            </div>

            {/* Product 3 */}
            <div className="mb-6 p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-[#C9A44C] text-[13px] font-medium">Advanced</span>
                <span className="text-[13px] text-[#767676]">CAD 1,800–3,500</span>
              </div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-2">North American Buyer Trust Materials Package</h3>
              <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] mb-4 max-w-[680px]">
                For companies ready to begin buyer development, attend trade shows, contact channels, or send company materials. We restructure internal introductions into content that North American buyers understand, trust, and can act on.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">Deliverables</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">One-sentence positioning, English company introduction, one-page sales sheet, core product/service value proposition reconstruction, prospecting email opener, LinkedIn profile optimization, homepage core copy recommendations</p>
                </div>
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">Boundaries</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Does not include full website development. No guarantee of sales. Materials are ready for immediate use, but follow-up execution remains your responsibility.</p>
                </div>
              </div>
              <Link to="/en/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px]">Request Materials Package</Link>
            </div>

            {/* Product 4 */}
            <div className="mb-6 p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-[#C9A44C] text-[13px] font-medium">Trade Show</span>
                <span className="text-[13px] text-[#767676]">CAD 2,500–6,000</span>
              </div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-2">Trade Show Buyer Engagement Package</h3>
              <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] mb-4 max-w-[680px]">
                For companies attending a trade show, investment conference, industry meeting, or client visit within 2–8 weeks. Avoid the common pattern: "great conversation at the booth, nothing happens after."
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">Deliverables</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Pre-show website credibility check, English company introduction, one-page handout, booth Q&A talking points, post-show email templates, lead tiering framework, 7-day post-show follow-up rhythm; optional business feature or event coverage</p>
                </div>
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">Boundaries</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">No guarantee of show sales. Does not replace on-site sales engagement. We provide materials and follow-up systems; booth interaction remains your responsibility.</p>
                </div>
              </div>
              <Link to="/en/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px]">Request Trade Show Package</Link>
            </div>

            {/* Product 5 */}
            <div className="mb-6 p-5 md:p-6 bg-[#07111F] border border-[#07111F]">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-[#C9A44C] text-[13px] font-medium">Intensive</span>
                <span className="text-[13px] text-white/60">CAD 3,500–8,000+</span>
              </div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-white mb-2">North America Market Entry 30-Day Launch Support</h3>
              <p className="text-[14px] md:text-[15px] text-white/70 leading-[1.65] mb-4 max-w-[680px]">
                For companies committed to entering Canada or North America but unclear on entry path, materials, responsibility chain, buyer development, and local support. We help you sequence the first phase correctly.
              </p>
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
              <Link to="/en/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px]">Request Launch Support</Link>
            </div>
          </div>
        </section>

        {/* Why staged approach */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">Service Design Logic</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Why a Staged Approach Instead of an "All-in-One Package"
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
              Many market entry services bundle everything — research, certification, channels, promotion, trade shows — into a single large package costing tens of thousands. The problem: before you have assessed whether your product fits this market and whether your materials can convert interest, committing to the full bundle means committing to the wrong things.
            </p>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
              Our logic: assess first, prepare second, execute third. The quick audit surfaces the most visible issues. The credibility diagnostic evaluates whether buyers have reason to trust you. The trust materials package turns diagnostic findings into usable assets. The trade show package addresses time-sensitive scenarios. The 30-day launch support clarifies your overall sequence.
            </p>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
              You can start at any step and stop at any step. But we recommend: before committing more budget to promotion, trade shows, or agent searches, at least do a quick audit or credibility diagnostic. The cost of this judgment is low; the money and missteps it prevents can be significant.
            </p>
          </div>
        </section>

        {/* Service Boundary */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <div className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3">What We Do Not Do</h3>
              <p className="text-[14px] text-[#767676] leading-[1.65] mb-3">
                CCBONLINE INC. provides business advisory, coordination, content, and market-entry support. We are not a law firm, accounting firm, certification body, insurance broker, customs broker, or logistics company.
              </p>
              <p className="text-[14px] text-[#767676] leading-[1.65]">
                When formal professional advice is required, we help you prepare the right questions, organize materials, and connect with qualified specialists. We coordinate; they execute. We do not guarantee buyer acquisition, quick orders, or market entry success. Our value is helping you assess whether your direction is sound before you commit resources.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Not Sure Which Service Fits Your Stage?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                Start with a Website & Materials Quick Audit (CAD 299–499), or contact us to describe your situation and we will recommend the right first step.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">
                  Send Us Your Website for a Review
                </Link>
                <Link to="/en/contact" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                  Contact Us
                </Link>
              </div>
              <p className="text-white/40 text-[13px] mt-6">info@ccbonline.ca · +1 647 568 1128</p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
