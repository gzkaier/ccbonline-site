import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

interface ServiceCard {
  title: string
  desc: string
  slug: string
}

interface ServicePackage {
  name: string
  title: string
  for: string
  deliverables: string[]
}

const beforeEntryServices: ServiceCard[] = [
  { title: 'Market Entry Feasibility Review', desc: 'Assess whether your product, capabilities, and timing are suitable for North America entry.', slug: 'market-entry-diagnosis' },
  { title: 'Canada vs. U.S. Entry Path Assessment', desc: 'Determine which market should come first based on product fit, competition, and regulatory complexity.', slug: 'market-entry-diagnosis' },
  { title: 'Product & Market Fit Review', desc: 'Evaluate whether your product, packaging, and positioning match North American buyer expectations.', slug: 'market-entry-diagnosis' },
  { title: '0–90 Day Market Entry Roadmap', desc: 'A practical, phased action plan for the first 90 days of market entry preparation.', slug: 'market-entry-diagnosis' },
]

const entryPrepServices: ServiceCard[] = [
  { title: 'North America Business Material Readiness', desc: 'Review and improve your product materials, website, and documentation for North American buyers.', slug: 'customer-channel-validation' },
  { title: 'Target Customer & Channel Mapping', desc: 'Identify who buys, how they buy, and which channel path is most realistic for your product.', slug: 'customer-channel-validation' },
  { title: 'Customer Outreach Readiness', desc: 'Prepare outreach strategy, qualification questions, and materials before engaging North American prospects.', slug: 'customer-channel-validation' },
  { title: 'Compliance & Responsibility Chain Screening', desc: 'Identify certification, import, documentation, and liability gaps before entering the market.', slug: 'compliance-responsibility-chain' },
]

const localExecutionServices: ServiceCard[] = [
  { title: 'Import Pathway & IOR Coordination', desc: 'Design the import route, clarify the Importer of Record role, and coordinate customs documentation.', slug: 'local-execution-support' },
  { title: 'Warehousing & Local Fulfillment Coordination', desc: 'Match with suitable warehousing and third-party logistics partners for your volume and product type.', slug: 'local-execution-support' },
  { title: 'After-sales & Service Readiness Planning', desc: 'Plan for warranty handling, returns, spare parts, and local service response capability.', slug: 'local-execution-support' },
  { title: 'Local Partner Coordination', desc: 'Ongoing communication and coordination with North American operational and service partners.', slug: 'local-execution-support' },
]

const projectExecutionServices: ServiceCard[] = [
  { title: 'Trade Show Market Entry Support', desc: 'Pre-show planning, buyer targeting, messaging adaptation, and post-show follow-up systems.', slug: 'advisory-retainer' },
  { title: 'Market Entry Project Management', desc: 'Structured project tracking, milestone management, and coordination between your team and external partners.', slug: 'advisory-retainer' },
  { title: 'North America Entry Advisory Retainer', desc: 'Monthly advisory support, document review, partner coordination, and strategic judgment as you enter.', slug: 'advisory-retainer' },
  { title: 'Quarterly Review & Next-step Planning', desc: 'Regular progress reviews, risk assessment, and updated action plans based on market feedback.', slug: 'advisory-retainer' },
]

const servicePackages: ServicePackage[] = [
  {
    name: 'Market Entry Diagnosis Package',
    title: '最稳方案：北美市场进入诊断包',
    for: '刚开始考虑加拿大 / 北美市场、不确定是否适合进入、需要先判断方向的企业。',
    deliverables: ['Market Entry Diagnosis Report', '0–90 Day Entry Roadmap', 'Initial Risk Checklist'],
  },
  {
    name: 'Customer & Channel Validation Package',
    title: '最快方案：北美客户与渠道验证包',
    for: '已有产品、准备开发客户、准备参展或刚参展回来，希望快速验证市场反馈的企业。',
    deliverables: ['Target Customer & Channel Map', 'Outreach Material Checklist', '30-Day Customer Validation Plan'],
  },
  {
    name: 'North America Entry Execution Support',
    title: '势能最高方案：北美市场进入执行支持包',
    for: '已经决定进入北美，需要本地合规、渠道、进口、仓储、售后、服务商和项目推进协同的企业。',
    deliverables: ['Market Entry Execution Roadmap', 'Responsibility Chain & Local Execution Plan', 'Channel Validation & Project Management Dashboard', 'Monthly Review Report'],
  },
]

function ServiceCardComponent({ card }: { card: ServiceCard }) {
  return (
    <div className="group bg-white border border-[#E5E5E5] hover:border-[#C00000] transition-colors p-5 md:p-6 flex flex-col">
      <h3 className="text-[16px] md:text-[17px] font-semibold mb-3 leading-[1.5] group-hover:text-[#C00000] transition-colors">
        {card.title}
      </h3>
      <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6] mb-4 flex-1">
        {card.desc}
      </p>
      <Link
        to={`/en/services/${card.slug}`}
        className="text-[14px] font-medium text-[#C00000] hover:underline inline-flex items-center gap-1"
      >
        Learn more
        <span className="text-[16px]">&rarr;</span>
      </Link>
    </div>
  )
}

export default function ENServices() {
  useEffect(() => {
    document.title = 'Services for Chinese Companies Entering Canada & North America | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Services</p>
            <h1 className="font-serif text-[#212121] text-[32px] md:text-[42px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              Services for Chinese Companies Entering Canada & North America
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#767676] max-w-[600px] mb-6">
              From market-entry diagnosis to compliance pathway, channel validation, local partner coordination, and execution support.
            </p>
          </div>
        </section>

        {/* Before Entry */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Before Entry</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              Before Entry: Market Entry Diagnosis
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8 md:mb-10">
              Before investing heavily in North America, companies need to understand whether they are ready to enter, which market should come first, and what risks must be addressed before customer outreach.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8">
              {beforeEntryServices.map((card, i) => (
                <ServiceCardComponent key={i} card={card} />
              ))}
            </div>
            <Link to="/en/services/market-entry-diagnosis" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Explore Market Entry Diagnosis</Link>
          </div>
        </section>

        {/* Entry Preparation */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Entry Preparation</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              Entry Preparation: Materials, Customers, Channels and Risks
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8 md:mb-10">
              Many companies do not fail because their products are weak. They fail because their materials, customer targeting, compliance preparation, and channel logic are not ready for North American buyers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8">
              {entryPrepServices.map((card, i) => (
                <ServiceCardComponent key={i} card={card} />
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/en/services/customer-channel-validation" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Explore Customer & Channel Validation</Link>
              <Link to="/en/services/compliance-responsibility-chain" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]">Explore Compliance Screening</Link>
            </div>
          </div>
        </section>

        {/* Local Execution */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Local Execution</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              Local Execution: Importation, Warehousing, Fulfillment and After-sales
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8 md:mb-10">
              Entering North America is not only about getting products across the border. Companies need to clarify who receives the goods, who handles import responsibility, who manages inventory, who supports returns, and who responds when problems occur.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8">
              {localExecutionServices.map((card, i) => (
                <ServiceCardComponent key={i} card={card} />
              ))}
            </div>
            <Link to="/en/services/local-execution-support" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Explore Local Execution Support</Link>
          </div>
        </section>

        {/* Project Execution */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Project Execution</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              Project Execution: Trade Shows, PMO and Advisory Retainer
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8 md:mb-10">
              Most market-entry projects do not fail because of one missing contact. They fail because there is no owner, no roadmap, no task structure, no follow-up rhythm, and no mechanism to coordinate internal teams and external partners.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8">
              {projectExecutionServices.map((card, i) => (
                <ServiceCardComponent key={i} card={card} />
              ))}
            </div>
            <Link to="/en/services/advisory-retainer" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Explore Advisory Retainer</Link>
          </div>
        </section>

        {/* Service Packages */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Packages</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8 md:mb-10">
              Recommended Service Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {servicePackages.map((pkg, i) => (
                <div key={i} className="bg-[#F8F9FA] border border-[#E5E5E5] p-5 md:p-6 flex flex-col">
                  <p className="text-[11px] text-[#999] uppercase tracking-wider mb-2">
                    {i === 0 ? 'Most Stable' : i === 1 ? 'Fastest' : 'Highest Potential'}
                  </p>
                  <h3 className="text-[17px] md:text-[18px] font-semibold mb-3 leading-[1.4]">{pkg.name}</h3>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6] mb-3">
                    <strong className="font-medium">For:</strong> {pkg.for}
                  </p>
                  <div className="mb-4 flex-1">
                    <p className="text-[13px] text-[#999] uppercase tracking-wider mb-2">Deliverables</p>
                    <ul className="space-y-1.5">
                      {pkg.deliverables.map((d, j) => (
                        <li key={j} className="text-[13px] md:text-[14px] text-[#555] leading-[1.5] pl-3 border-l-2 border-[#C00000]">{d}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/en/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px] w-full text-center">Inquire About This Package</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                Not sure which service fits your stage?
              </h2>
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Book a Consultation</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
