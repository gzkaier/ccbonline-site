import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

const checklists = [
  { title: 'Canada Market Entry Readiness Checklist', desc: 'A structured self-assessment covering product, documentation, compliance, and channel readiness.', status: 'Coming soon' },
  { title: 'Website Credibility Checklist for Export Businesses', desc: 'Key elements North American buyers look for when evaluating a supplier website.', status: 'Coming soon' },
  { title: 'Trade Show Follow-up Checklist', desc: 'How to convert trade show leads into structured follow-up and real opportunities.', status: 'Coming soon' },
  { title: 'Import Responsibility and IOR Basics', desc: 'What Importer of Record means, why it matters, and how to arrange it for Canada and the US.', status: 'Available', link: '/en/topics/importer-of-record-and-responsibility-chain' },
  { title: 'English Product Documentation Checklist', desc: 'What documentation North American distributors and buyers expect to see.', status: 'Coming soon' },
  { title: 'Service Provider Website Profile Checklist', desc: 'How local service providers should present their capabilities online for North American clients.', status: 'Coming soon' },
]

const caseNotes = [
  { title: 'Helping a Chinese Equipment Supplier Clarify Its Canada Entry Path', desc: 'A mid-sized industrial equipment manufacturer with proven domestic sales sought to understand whether their product category was viable in Canada and what certification gaps needed to be closed first.', industry: 'Industrial Equipment' },
  { title: 'Reviewing English Web Presence for a Local Professional Service Provider', desc: 'A Canadian-based accounting firm serving Chinese businesses needed their website and service descriptions reorganized so that English-speaking clients could understand their offerings and trust their expertise.', industry: 'Professional Services' },
  { title: 'Supporting Post-Trade-Show Follow-up for Export-Oriented Businesses', desc: 'A consumer electronics company collected over 80 leads at a Toronto trade show but had no follow-up system. We helped structure the outreach, adapt materials, and coordinate local follow-up.', industry: 'Consumer Electronics' },
  { title: 'Mapping Certification and Responsibility Chain Questions Before Shipment', desc: 'A building materials supplier was ready to ship but had not clarified CCMC evaluation requirements, IOR arrangement, or provincial building code compliance. We mapped the full chain before the first container left.', industry: 'Building Materials' },
]

const insights = [
  { title: 'North America Market Entry: It Is Not Just About Sales', slug: 'market-entry-is-not-selling-overseas' },
  { title: 'The Responsibility Chain: What Separates Export from Market Entry', slug: 'north-america-responsibility-chain' },
  { title: 'IOR Is Not Just a Customs Formality', slug: 'importer-of-record-is-not-just-customs-clearance' },
  { title: 'Why Product Certification Matters Before You Ship', slug: 'certification-is-not-the-end-of-market-entry' },
  { title: 'Canada as a First Step to North America', slug: 'canada-as-first-station-for-north-america-entry' },
]

export default function ENResources() {
  useSEO({
    title: 'Market Entry Resources, Checklists & Case Notes | CCBONLINE INC.',
    description: 'Download market entry checklists, read case notes, and explore insights to help your business assess readiness for entering Canada and North America.',
    canonical: 'https://www.ccbonline.ca/en/resources',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Market Entry Resources, Checklists & Case Notes | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Resources</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              Market Entry Resources
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px]">
              Practical checklists, case notes, and industry insights to help you assess your readiness before committing to a full market entry engagement.
            </p>
          </div>
        </section>

        {/* Checklists */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Checklists</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              Downloadable Market Entry Checklists
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {checklists.map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] text-[#999] uppercase tracking-wider">{item.status}</span>
                  </div>
                  <h3 className="text-[15px] font-semibold mb-2 leading-[1.4]">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6] mb-3">{item.desc}</p>
                  {item.link && <Link to={item.link} className="text-[13px] text-[#00B894] hover:underline">Read now &rarr;</Link>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Notes */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Case Notes</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              Anonymous Project Notes
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px] mb-8">
              Real project scenarios with client names and sensitive data removed. These illustrate the types of challenges we help businesses navigate.
            </p>
            <div className="space-y-4">
              {caseNotes.map((item, i) => (
                <div key={i} className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] text-[#00B894] uppercase tracking-wider">{item.industry}</span>
                  </div>
                  <h3 className="text-[16px] md:text-[17px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Insights */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Insights</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              Industry Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {insights.map((item, i) => (
                <Link key={i} to={`/en/insights/${item.slug}`} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                  <h3 className="text-[15px] font-semibold mb-2 group-hover:text-[#00B894] transition-colors">{item.title}</h3>
                  <span className="text-[13px] text-[#00B894]">Read article &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Want a specific checklist or have a resource request?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                Let us know what would help your team assess market entry readiness. We are continuously adding resources based on the questions businesses ask us most.
              </p>
              <Link to="/en/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">Request a Resource</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
