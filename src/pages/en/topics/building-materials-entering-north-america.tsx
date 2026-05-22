import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function EN_BuildingMaterialsEnteringNorthAmerica() {
  useSEO({
    title: 'Building Materials Entering North America | Compliance, Codes, and Market Reality | CCBONLINE INC.',
    description: 'Chinese building materials entering Canada and the US: code compliance, CCMC evaluation, provincial regulations, fire safety standards, and practical market entry guidance.',
    canonical: 'https://www.ccbonline.ca/en/topics/building-materials-entering-north-america',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Building Materials Entering North America | Compliance, Codes, and Market Reality | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Industry Guide</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              Building Materials Entering North America
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[720px]">
              Building materials face some of the most rigorous compliance requirements of any product category entering Canada and the US. Codes are provincial, standards are national, and the stakes are high. This guide explains what building material manufacturers need to know.
            </p>
          </div>
        </section>

        {/* Why Building Materials Are Different */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Why This Category Is Different</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-6">
              What makes building materials uniquely challenging
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: 'Provincial building codes, not federal', desc: 'Canada does not have a single national building code. Each province and territory has its own. Ontario follows the Ontario Building Code. British Columbia has the BC Building Code. What passes in Alberta may not pass in Quebec. You need to know which provinces you are targeting and their specific requirements.' },
                { title: 'CCMC evaluation is often required', desc: 'The Canadian Construction Materials Centre (CCMC) evaluates building products against Canadian codes and standards. A CCMC evaluation is not mandatory by law, but many architects, engineers, and contractors will not specify a product without one. The evaluation process can take 6-12 months.' },
                { title: 'CSA standards and CAN/ULC codes', desc: 'Canadian Standards Association (CSA) and Underwriters Laboratories of Canada (ULC) develop standards for building materials. Fire safety ratings, structural performance, and durability testing often reference these standards. Chinese test reports are generally not accepted without Canadian or equivalent certification.' },
                { title: 'Liability and professional reliance', desc: 'Architects and engineers who specify your product can be held liable if the product fails. This means they are extremely cautious about specifying products without proper Canadian documentation. Building trust with the design community requires more than a competitive price.' },
              ].map((item, i) => (
                <div key={i} className="p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[16px] font-semibold mb-3 leading-[1.5]">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Material Categories */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">By Material Type</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              What different building materials need
            </h2>
            <div className="space-y-4">
              {[
                { type: 'Structural Materials (steel, concrete, engineered wood)', reqs: ['CSA structural standards compliance', 'Grade stamping and mill certifications', 'Fire resistance ratings (CAN/ULC-S101)', 'Provincial engineer approval for non-standard applications'] },
                { type: 'Insulation Materials', reqs: ['R-value testing to Canadian standards', 'Fire safety classification (CAN/ULC-S102)', 'CCMC evaluation strongly recommended', 'VOC emissions compliance'] },
                { type: 'Flooring and Tile', reqs: ['CSA performance standards', 'Slip resistance ratings', 'VOC emissions (CDPH/EHLB Standard Method)', 'Warranty terms for Canadian conditions'] },
                { type: 'Roofing Materials', reqs: ['CSA A123 series standards', 'Wind uplift resistance testing', 'Fire classification (Class A/B/C per CAN/ULC-S107)', 'Cold weather performance data'] },
                { type: 'Plumbing and HVAC', reqs: ['CSA B-series standards (B45, B64, B125, etc.)', 'NSF/ANSI drinking water contact approval', 'Provincial registration requirements', 'Energy efficiency ratings where applicable'] },
                { type: 'Exterior Cladding and Siding', reqs: ['Water penetration resistance testing', 'Fire propagation testing (CAN/ULC-S134 for some types)', 'Durability and weathering data', 'CCMC evaluation for many product types'] },
              ].map((group, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[16px] md:text-[17px] font-semibold mb-4">{group.type}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.reqs.map((req, j) => (
                      <li key={j} className="text-[14px] text-[#555] leading-[1.6] pl-3 border-l-2 border-[#00A884]">{req}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Path to Market */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Market Entry Path</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              How building materials typically enter the Canadian market
            </h2>
            <div className="max-w-[800px] space-y-6">
              {[
                { step: '01', title: 'Code Research', desc: 'Identify which provincial codes apply to your target markets. Determine which standards your product must meet. Understand if a CCMC evaluation is expected in your category.' },
                { step: '02', title: 'Testing and Certification', desc: 'Arrange testing to Canadian or recognized equivalent standards. If your Chinese test lab is not recognized, you may need to retest in Canada or at a CSA-recognized lab. Budget 3-6 months minimum.' },
                { step: '03', title: 'CCMC Evaluation (if applicable)', desc: 'Submit your product for CCMC evaluation. This involves technical review, code compliance assessment, and issuance of an evaluation number. Timeline: 6-12 months. Cost: varies by product complexity.' },
                { step: '04', title: 'Target Market Selection', desc: 'Choose 1-2 provinces to start. Each province has different codes, different market sizes, and different competitive landscapes. Ontario and BC are often the first choices due to market size.' },
                { step: '05', title: 'Channel Development', desc: 'Building materials typically flow through: distributors, construction supply dealers, direct to contractors, or specification through architects/engineers. Each channel requires a different approach.' },
              ].map((phase) => (
                <div key={phase.step} className="flex gap-4 md:gap-6">
                  <span className="text-[#C9A44C] text-[14px] font-medium w-[32px] shrink-0">{phase.step}</span>
                  <div className="pb-6 border-b border-[#E5E5E5] flex-1">
                    <h4 className="text-[16px] font-semibold mb-2">{phase.title}</h4>
                    <p className="text-[14px] text-[#767676] leading-[1.65]">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Provinces */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">By Province</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              Key provincial markets for building materials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { prov: 'Ontario', size: 'Largest construction market', note: 'Ontario Building Code (OBC). Toronto and Ottawa are major hubs. High-rise residential construction is significant. Strong demand for innovative materials.' },
                { prov: 'British Columbia', size: 'Second largest', note: 'BC Building Code. Vancouver has aggressive sustainability targets. Seismic requirements affect structural materials. High wood-frame construction demand.' },
                { prov: 'Alberta', size: 'Third largest', note: 'Alberta Building Code. Calgary and Edmonton drive demand. Energy sector projects require industrial-grade materials. Cold climate considerations affect material selection.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h4 className="text-[16px] font-semibold mb-1">{item.prov}</h4>
                  <p className="text-[12px] text-[#00A884] mb-3">{item.size}</p>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">{item.note}</p>
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
              Questions building material manufacturers ask
            </h2>
            <div className="space-y-3">
              {[
                { q: 'Is CCMC evaluation mandatory?', a: 'Not legally mandatory, but practically essential for many categories. Without it, architects and engineers may be unwilling to specify your product, and building officials may ask for additional documentation. In some cases, a provincial engineer\'s approval can substitute, but this is case-by-case.' },
                { q: 'Can Chinese test reports be used?', a: 'Sometimes, if the testing lab is ISO 17025 accredited and the test methods are equivalent to Canadian standards. However, many Canadian authorities prefer or require testing by CSA-recognized labs. Budget for potential retesting.' },
                { q: 'How long does the full entry process take?', a: 'From initial research to first sales, typically 12-18 months for building materials. Certification and testing: 3-6 months. CCMC evaluation: 6-12 months. Channel development: 3-6 months. This is not a quick-entry category.' },
                { q: 'Should I target commercial or residential construction?', a: 'Residential construction generally has fewer barriers to entry and faster decision cycles. Commercial construction involves specification through architects and engineers, which requires stronger documentation and relationship building. Many manufacturers start residential and expand to commercial.' },
                { q: 'Do I need a Canadian warehouse?', a: 'Not initially. Many building material manufacturers start by shipping from China on a project basis. However, as volume grows, a Canadian distribution point becomes necessary for competitive lead times and customer service.' },
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

        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Entering North America with building materials?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                CCBONLINE INC. helps building material manufacturers assess code requirements, plan certification timelines, and develop practical entry strategies for Canada and the US.
              </p>
              <Link to="/en/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">Request a Building Materials Assessment</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
