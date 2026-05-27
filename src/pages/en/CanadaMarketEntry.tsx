import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'


export default function ENCanadaMarketEntry() {
  useSEO({
    title: 'Canada Market Entry Advisory | CCBONLINE INC.',
    description: 'CCBONLINE INC. helps businesses enter the Canadian market through structured market-entry diagnosis, compliance pathway design, and local partner coordination.',
    canonical: 'https://www.ccbonline.ca/en/canada-market-entry',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Canada Market Entry Advisory | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Canada Market Entry</p>
            <h1 className="font-serif text-[#212121] text-[32px] md:text-[42px] leading-[1.3] tracking-tight max-w-[850px] mb-4">
              Canada Market Entry Advisory
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#767676] max-w-[600px] leading-[1.65]">
              A practical pathway from exploration to local operations — for manufacturers, brands, and industrial companies.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Why Canada</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              Canada as a Strategic Entry Point
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[800px]">
              <div className="card-border bg-white">
                <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">Lower risk than the US for initial entry</h3>
                <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">Canada's smaller market means lower upfront investment and faster feedback loops for product-market fit validation.</p>
              </div>
              <div className="card-border bg-white">
                <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">Established international trade infrastructure</h3>
                <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">Well-developed customs processes, import documentation standards, and freight corridors between major international ports and Canada.</p>
              </div>
              <div className="card-border bg-white">
                <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">Uniform federal regulation</h3>
                <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">Unlike the US state-by-state patchwork, Canadian federal regulations provide a more predictable compliance framework.</p>
              </div>
              <div className="card-border bg-white">
                <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">Gateway to North America</h3>
                <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">Success in Canada generates case studies, references, and operational experience for US expansion.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Preparation</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              What Companies Must Prepare
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[800px]">
              {[
                { num: '01', title: 'Product documentation in English', desc: 'Technical specs, safety data sheets, usage instructions, and product claims must be available in English or French.' },
                { num: '02', title: 'Certification awareness', desc: 'CSA, UL, FCC, IC, and Health Canada requirements vary by product category. Know what applies to yours.' },
                { num: '03', title: 'Import entity structure', desc: 'Determine whether to import directly, through a broker, via a Canadian subsidiary, or through a distributor.' },
                { num: '04', title: 'Pricing and landed cost model', desc: 'Factor in freight, duties, GST/HST, brokerage, and local delivery to set realistic pricing.' },
                { num: '05', title: 'Customer support capability', desc: 'North American customers expect local language support, return handling, and warranty responsiveness.' },
                { num: '06', title: 'Trade show or customer visit plan', desc: 'Having a concrete plan for meeting customers face-to-face accelerates trust-building significantly.' },
              ].map((item) => (
                <div key={item.num} className="flex gap-3">
                  <span className="text-[#00B894] text-[12px] font-bold mt-0.5 min-w-[24px]">{item.num}</span>
                  <div>
                    <h4 className="text-[14px] md:text-[15px] font-semibold mb-1">{item.title}</h4>
                    <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Roadmap</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              0–90 Day Canada Entry Roadmap
            </h2>
            <div className="space-y-4 md:space-y-5 max-w-[800px]">
              {[
                { phase: 'Days 0–14', title: 'Diagnosis & Market Fit Assessment', items: ['Product-market fit screening', 'Competitive landscape scan', 'Certification gap identification', 'Priority market recommendation'] },
                { phase: 'Days 15–30', title: 'Compliance Pathway & Partner Mapping', items: ['Regulatory requirement list', 'Import pathway design', 'Partner / distributor identification', 'Landed cost model'] },
                { phase: 'Days 31–60', title: 'Channel Validation & Material Preparation', items: ['Customer conversation scripts', 'English product materials', 'Trade show or visit preparation', 'Initial partner conversations'] },
                { phase: 'Days 61–90', title: 'Pilot Execution & Review', items: ['Sample or small-batch shipment', 'Customer feedback collection', 'Partner agreement negotiation', '90-day review and next-phase plan'] },
              ].map((r, i) => (
                <div key={i} className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3">
                    <span className="text-[#00B894] text-[12px] font-bold">{r.phase}</span>
                    <h3 className="text-[15px] md:text-[17px] font-semibold">{r.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {r.items.map((item, j) => (
                      <div key={j} className="text-[13px] md:text-[14px] text-[#555] flex gap-2">
                        <span className="text-[#00B894]">·</span>{item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                Start your Canada market entry assessment.
              </h2>
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Discuss Your Canada Entry Plan</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
