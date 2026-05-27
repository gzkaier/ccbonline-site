import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'


export default function ENResponsibilityChain() {
  useSEO({
    title: 'North America Market Entry Responsibility Chain | CCBONLINE INC.',
    description: 'Understand the responsibility chain behind North America market entry: who is responsible for importation, certification, distribution, warranty, and after-sales support.',
    canonical: 'https://www.ccbonline.ca/en/responsibility-chain',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'North America Responsibility Chain for Imported Products | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Responsibility Chain</p>
            <h1 className="font-serif text-[#212121] text-[32px] md:text-[42px] leading-[1.3] tracking-tight max-w-[900px] mb-4">
              North America Responsibility Chain for Imported Products
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#767676] max-w-[680px]">
              Market entry is not only about demand, sales, or traffic. It is about building a responsibility chain across compliance, importation, documentation, channel, warehousing, after-sales, insurance, and local accountability.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Definition</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[600px] mb-6 md:mb-8">
              What Is the Responsibility Chain?
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-4">
              The responsibility chain is the complete set of obligations, risks, and accountabilities that a company assumes when bringing a product into North America. It starts before the product leaves the factory and continues until the product is safely in the customer's hands — and beyond.
            </p>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px]">
              For companies entering from overseas, the responsibility chain is often invisible until something goes wrong: a customs hold, a product recall, a warranty dispute, or a liability claim. Our role is to make this chain visible, manageable, and properly assigned before you ship.
            </p>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Components</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8 md:mb-10">
              Key Components
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[900px]">
              {[
                { num: '01', title: 'Compliance & Certification', desc: 'CSA, UL, FCC, IC, Health Canada. Who ensures your product meets standards before it ships?' },
                { num: '02', title: 'Import & Customs', desc: 'HS codes, duty rates, GST/HST, customs documentation. Who owns the import process?' },
                { num: '03', title: 'Product Documentation', desc: 'English/French labels, safety data sheets, product claims. Who validates accuracy?' },
                { num: '04', title: 'Channel & Distribution', desc: 'Distributor agreements, exclusivity, pricing. Who negotiates and manages these?' },
                { num: '05', title: 'Warehousing & Logistics', desc: 'Inbound receiving, inventory, local delivery, returns. Who operates or coordinates?' },
                { num: '06', title: 'After-Sales & Warranty', desc: 'Warranty terms, repair, spare parts. Who handles customer issues on the ground?' },
                { num: '07', title: 'Insurance & Liability', desc: 'Product liability, cargo, business coverage. Who secures adequate protection?' },
                { num: '08', title: 'Local Accountability', desc: 'When something goes wrong, who is the local point of contact?' },
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

        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                Map your responsibility chain before you ship.
              </h2>
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Request a Responsibility Chain Audit</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
