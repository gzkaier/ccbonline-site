import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function EN_CanadaMarketEntryForChineseManufacturers() {
  useSEO({
    title: 'Canada Market Entry for Chinese Manufacturers | What to Know Before You Start | CCBONLINE INC.',
    description: 'Chinese manufacturers entering Canada: what to assess before investing. Product fit, compliance gaps, IOR setup, channel validation, and local execution. Practical guidance from a Canada-registered market entry advisor.',
    canonical: 'https://www.ccbonline.ca/en/topics/canada-market-entry-for-chinese-manufacturers',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Canada Market Entry for Chinese Manufacturers | What to Know Before You Start | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Market Entry Guide</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              Canada Market Entry for Chinese Manufacturers
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[720px]">
              Before you invest in product certification, trade show booths, or distributor meetings, there are questions worth answering. This guide covers what Chinese manufacturers should assess before entering Canada.
            </p>
          </div>
        </section>

        {/* Core Questions */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">The Real Questions</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              Six questions every manufacturer should answer first
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { num: '01', q: 'Is your product actually suitable for the Canadian market?', a: 'Canada has specific voltage standards (120V), metric/imperial labeling requirements, bilingual (English/French) labeling mandates, and seasonal demand patterns that differ from China. A product that sells well domestically may need significant adaptation.' },
                { num: '02', q: 'What certifications does your product category require?', a: 'Electrical products need CSA or cUL certification. Food contact materials require Health Canada compliance. Children\'s products have CCPSA requirements. Industrial equipment may need provincial registrations. Not having the right certification means customs can refuse entry.' },
                { num: '03', q: 'Who will be the Importer of Record (IOR)?', a: 'The IOR is the legal entity responsible for ensuring your product complies with Canadian regulations. It is not just a customs formality. Without a clear IOR arrangement, your product can be held at the border indefinitely.' },
                { num: '04', q: 'Do you have English (and French) product documentation?', a: 'Canadian consumers and businesses expect clear English documentation. Depending on the province and product category, French may also be required. Technical specifications, user manuals, warranty terms, and safety warnings all need professional translation.' },
                { num: '05', q: 'Which channel makes sense for your product type?', a: 'Retail, wholesale, direct B2B, e-commerce, and distributor networks each require different approaches. Choosing the wrong channel costs time and money. The right channel depends on your product margins, volume capacity, and after-sales capabilities.' },
                { num: '06', q: 'What happens when something goes wrong?', a: 'Product defects, warranty claims, and recalls require a local response capability. Canadian regulators, insurance companies, and customers all expect a domestic point of contact. Without one, your brand and business are exposed.' },
              ].map((item) => (
                <div key={item.num} className="p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <span className="text-[#C9A44C] text-[13px] font-medium">{item.num}</span>
                  <h3 className="text-[16px] font-semibold mt-2 mb-3 leading-[1.5]">{item.q}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Product Categories */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">By Product Category</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              What manufacturers in different categories need to know
            </h2>
            <div className="space-y-4">
              {[
                { cat: 'Electrical and Electronic Products', items: ['CSA or cUL certification required for most categories', 'FCC-equivalent IC (Innovation, Science and Economic Development Canada) registration for wireless devices', 'Voltage and plug type adaptation (120V, Type A/B plugs)', 'French labeling requirements in Quebec'] },
                { cat: 'Industrial Equipment and Machinery', items: ['Provincial workplace safety certifications may apply', 'CSA standards for electrical components', 'Documentation requirements for customs classification', 'After-sales service and spare parts logistics'] },
                { cat: 'Building Materials', items: ['CCMC (Canadian Construction Materials Centre) evaluation for construction products', ' provincial building code compliance', 'Fire safety ratings and testing', 'Environmental and VOC emissions standards'] },
                { cat: 'Consumer Goods', items: ['CCPSA (Canada Consumer Product Safety Act) compliance', 'Bilingual labeling (English/French)', 'Age grading and safety warnings for children\'s products', 'Product registration with Health Canada for food contact materials'] },
              ].map((group, i) => (
                <div key={i} className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[16px] md:text-[17px] font-semibold mb-4">{group.cat}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="text-[14px] text-[#555] leading-[1.6] pl-3 border-l-2 border-[#00A884]">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The 0-90 Day Reality */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Timeline</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              What realistically happens in the first 90 days
            </h2>
            <div className="max-w-[800px] space-y-6">
              {[
                { days: 'Days 1-30', title: 'Diagnosis', desc: 'Product-market fit assessment, compliance requirement mapping, competitive landscape review, and IOR arrangement planning. No shipping yet. No trade shows yet. Just clear assessment.' },
                { days: 'Days 15-45', title: 'Compliance Path', desc: 'Certification timeline planning, documentation preparation, label review, and customs classification verification. This often takes longer than manufacturers expect. Start early.' },
                { days: 'Days 30-60', title: 'Channel Validation', desc: 'Target customer profile development, channel strategy selection, initial outreach material preparation, and potential partner identification. Still no shipping. Still building foundation.' },
                { days: 'Days 60-90', title: 'Structured Outreach', desc: 'First structured customer conversations, trade show preparation if applicable, and finalization of logistics and after-sales arrangements. Only now does shipping become realistic.' },
              ].map((phase) => (
                <div key={phase.days} className="flex gap-4 md:gap-6">
                  <div className="shrink-0 w-[100px]">
                    <p className="text-[#C9A44C] text-[13px] font-medium">{phase.days}</p>
                  </div>
                  <div className="pb-6 border-b border-[#E5E5E5] flex-1">
                    <h4 className="text-[16px] font-semibold mb-2">{phase.title}</h4>
                    <p className="text-[14px] text-[#767676] leading-[1.65]">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Red Flags */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Warning Signs</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              Signs you might not be ready yet
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'You cannot clearly explain who your target customer is in Canada',
                'You have no English product documentation',
                'You have not researched certification requirements for your product category',
                'You do not have a clear IOR arrangement',
                'You have no plan for after-sales support or warranty handling',
                'You expect first sales within 30 days of starting',
                'You are treating Canada as an afterthought to the US market',
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white border-l-2 border-[#C9A44C]">
                  <p className="text-[14px] text-[#444] leading-[1.6]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">FAQ</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Common questions from manufacturers
            </h2>
            <div className="space-y-3">
              {[
                { q: 'Should I enter Canada or the US first?', a: 'Canada often makes sense as a first market because regulatory processes are more transparent, certification timelines are generally shorter, and the market size allows for controlled testing. Success in Canada also creates credibility for US expansion.' },
                { q: 'How long does product certification take?', a: 'It varies significantly by product category. Simple electrical products may take 4-8 weeks. Complex industrial equipment can take 3-6 months. Building materials with CCMC evaluations can take 6-12 months. Plan certification before you plan your launch.' },
                { q: 'Can I use my US distributor as my IOR?', a: 'Sometimes, but not always. The IOR needs to understand Canadian regulations, have a Canadian business presence, and be willing to accept legal responsibility. Not every distributor meets these criteria. Verify before assuming.' },
                { q: 'Do I need a Canadian entity to sell in Canada?', a: 'Not necessarily. You can sell through a distributor, agent, or e-commerce platform. However, having a local entity or a clearly designated IOR significantly simplifies compliance, tax, and liability matters.' },
                { q: 'How much should I budget for market entry preparation?', a: 'Budgets vary by product category and ambition level. A conservative estimate for a small-to-medium manufacturer includes: certification ($5K-50K), documentation and translation ($3K-10K), initial channel development ($5K-15K), and compliance consulting ($5K-20K). These are pre-revenue investments.' },
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

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Assessing Canada market entry for your manufacturing business?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                CCBONLINE INC. works with Chinese manufacturers to assess product fit, map compliance requirements, and design practical entry paths. If you are serious about entering Canada, a structured assessment is the right first step.
              </p>
              <Link to="/en/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">Request a Market Entry Assessment</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
