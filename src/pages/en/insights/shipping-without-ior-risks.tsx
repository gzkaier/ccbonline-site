import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: 'Shipping Without IOR: Risks You May Be Underestimating | Import Responsibility | CCBONLINE',
    description: "Many Chinese manufacturers ship goods to North America without a clear Importer of Record (IOR). This article explains why IOR matters more than customs clearance and the risks of shipping without one.",
    canonical: 'https://www.ccbonline.ca/en/insights/shipping-without-ior-risks',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Shipping Without IOR: Risks You May Be Underestimating | Import Responsibility | CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Import Responsibility</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              Shipping Without IOR: Risks You May Be Underestimating
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>Reading time: ~6 min</span>
              <span>·</span>
              <span>IOR | Import Responsibility | Customs Clearance | Compliance</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                Many Chinese manufacturers believe that as long as their freight forwarder can clear customs, IOR is not an issue. But in reality, goods arriving at port without a clear Importer of Record often face detention, storage fee accumulation, and even entry denial. IOR is not a substitute for customs clearance—it is the starting point of the entire import responsibility chain.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                What Exactly is IOR
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                IOR (Importer of Record) is the entity legally responsible for all aspects of importing goods. This responsibility includes paying duties and taxes, ensuring products comply with local regulations, providing accurate product classification and valuation, cooperating with customs audits and inspections, and bearing joint liability when product issues arise.

Many manufacturers mistakenly believe their freight forwarder or customs broker is the IOR. In reality, most freight forwarders only provide logistics services and do not assume import legal responsibility. If your contract does not clearly designate an IOR, goods may have no formal respondent when customs inquiries arise.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Common Scenarios Without IOR
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                Scenario 1: Buyer says "deliver to our warehouse" — North American buyers often request DDP (Delivered Duty Paid) terms, requiring the seller to handle customs clearance and tax payment. But many Chinese manufacturers lack a North American entity and cannot act as IOR.

Scenario 2: Freight forwarder says "we can handle customs" — Forwarders can assist with customs declaration but typically do not assume IOR's legal liability.

Scenario 3: Using a third-party IOR without formal agreement — Informal arrangements without service agreements and responsibility definitions can lead to disputes.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Actual Risks
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                Port detention fees: Goods held at port accumulate hundreds to thousands of dollars in storage fees daily.

Goods return or destruction: Unclear IOR arrangements often result in the longest detention times, potentially leading to return shipment or destruction orders.

Compliance records: Import violations may affect your company's customs credit rating or even result in blacklisting.

Customer relationships: Delivery delays or failures directly damage relationships with North American clients and may lead to breach of contract claims.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                How to Properly Resolve IOR Issues
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                Option 1: North American buyer acts as IOR — Simplest arrangement but must be clearly stated in contract.

Option 2: Engage professional IOR service provider — Specialized IOR service companies can handle all customs affairs.

Option 3: Establish a North American entity — For companies with long-term North American plans, local incorporation provides full IOR qualification.

Option 4: Partner with IOR-capable 3PL — Some third-party logistics providers offer IOR services as part of comprehensive logistics solutions.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Final Thoughts
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                IOR issues seem simple but represent one of the biggest hidden risk points for Chinese manufacturers entering North America. Before shipping your first batch, ensure your IOR arrangement is properly addressed—this is more important than any marketing activity.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <h3 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">Related Services</h3>
            <div className="space-y-3">

              <Link to="/en/services/compliance-responsibility-chain" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">Compliance & Responsibility Chain Review</span>
                  <p className="text-[13px] text-[#767676] mt-1">Helps you clarify IOR, product liability, and compliance obligations</p>
                </div>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Learn →</span>
              </Link>

              <Link to="/en/services/local-execution-support" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">Logistics & Customs Diagnosis</span>
                  <p className="text-[13px] text-[#767676] mt-1">Evaluates your logistics and customs clearance plans, identifying IOR gaps</p>
                </div>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Learn →</span>
              </Link>

            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h3 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">Related Reading</h3>
            <div className="space-y-3">

              <Link to="/en/insights/ior-importer-of-record-explained" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">IOR: Why It Matters More Than Customs Clearance</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Read →</span>
              </Link>

              <Link to="/en/insights/what-happens-without-ior" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">What Happens Without IOR</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Read →</span>
              </Link>

              <Link to="/en/insights/product-liability-chain" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">Product Liability Chain</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Read →</span>
              </Link>

            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">Need help with import responsibility?</h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">We can help you navigate North American market entry with professional guidance.</p>
            <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Contact Us</Link>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
