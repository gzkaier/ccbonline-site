import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ENServices() {
  useEffect(() => {
    document.title = 'Market Entry Diagnosis, Compliance & Execution | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  const services = [
    {
      num: '01',
      title: 'Market Entry Diagnosis',
      what: 'A structured assessment of whether your product, operations, and team are ready for North America — and what is missing.',
      why: 'Most companies waste months pursuing markets they are not ready for. A diagnosis prevents this by giving you a clear go/no-go recommendation with specific gaps to address.',
      deliver: ['Product-market fit assessment', 'Competitive landscape scan', 'Certification & compliance gap identification', 'Readiness scorecard with priority actions', 'Canada vs. US priority recommendation'],
    },
    {
      num: '02',
      title: 'Compliance Pathway Mapping',
      what: 'A detailed map of the certification, customs, tax, and regulatory requirements your product must meet to enter Canada or the US legally and safely.',
      why: 'Compliance gaps are the single most common reason Chinese products get held at customs, rejected by distributors, or recalled from market.',
      deliver: ['Product-specific certification requirement list (CSA, UL, FCC, IC)', 'Import pathway design', 'Customs documentation checklist', 'Tax & duty obligations summary', 'Professional partner introductions'],
    },
    {
      num: '03',
      title: 'Channel Validation',
      what: 'Systematic identification, evaluation, and initial contact with potential distributors, partners, and customers who fit your product and stage.',
      why: 'The right channel partner can make your market entry. The wrong one can waste a year.',
      deliver: ['Channel strategy (direct, distributor, hybrid)', 'Partner identification & shortlist', 'Partner evaluation framework', 'Initial outreach strategy & scripts', 'Trade show or visit planning'],
    },
    {
      num: '04',
      title: 'Local Execution Support',
      what: 'Hands-on project management and coordination to keep your market entry moving forward.',
      why: 'Plans without execution discipline fail. We provide the structure, accountability, and local presence needed to turn strategy into actual sales.',
      deliver: ['Weekly progress meetings & action tracking', 'Partner & supplier coordination', 'Customer materials & pitch refinement', 'Milestone & phase review reports', 'Course correction & plan adjustment'],
    },
    {
      num: '05',
      title: '0–90 Day Entry Roadmap',
      what: 'A concrete, week-by-week execution plan that takes you from assessment to first customer conversations within 90 days.',
      why: 'Without a structured timeline, market entry becomes an endless series of "next steps" that never quite happen.',
      deliver: ['Week-by-week action plan with owners and deadlines', 'Milestone definitions and success criteria', 'Resource & budget allocation', 'Risk register and contingency plans', 'Go/no-go decision points'],
    },
  ]

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Services</p>
            <h1 className="font-serif text-[#212121] text-[32px] md:text-[42px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              From Diagnosis to Execution
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#767676] max-w-[560px]">
              Five integrated capabilities that turn market entry intent into practical operations.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site space-y-14 md:space-y-18">
            {services.map((s) => (
              <div key={s.num}>
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="text-[#C00000] text-[12px] font-bold">{s.num}</span>
                  <h2 className="font-serif text-[#212121] text-[24px] md:text-[28px] leading-[1.35] tracking-tight">{s.title}</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-6">
                  <div className="lg:col-span-4">
                    <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#C00000]">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#767676] mb-2">What it means</p>
                      <p className="text-[14px] text-[#555] leading-[1.7]">{s.what}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <div className="p-4 bg-[#F8F9FA]">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#999] mb-2">Why it matters</p>
                      <p className="text-[14px] text-[#555] leading-[1.7]">{s.why}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-5 bg-[#F8F9FA]">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#999] mb-3">What we deliver</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.deliver.map((item, i) => (
                      <div key={i} className="text-[13px] md:text-[14px] text-[#555] leading-[1.5] flex gap-2">
                        <span className="text-[#C00000]">·</span>{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                Not sure which service fits your stage?
              </h2>
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Discuss Your Market Entry Plan</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
