import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: 'Product Liability Insurance in Canada: Why You Need It | Product Liability | CCBONLINE',
    description: "Chinese manufacturers entering the Canadian market must understand the importance of product liability insurance. This article explains coverage, legal requirements, and selection advice.",
    canonical: 'https://www.ccbonline.ca/en/insights/product-liability-insurance-canada',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Product Liability Insurance in Canada: Why You Need It | Product Liability | CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Product Liability</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              Product Liability Insurance in Canada: Why You Need It
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>Reading time: ~6 min</span>
              <span>·</span>
              <span>Product Liability Insurance | Canadian Regulations | Risk Management</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                Many Chinese manufacturers focus entirely on product certification and customs clearance when entering Canada, overlooking product liability insurance. In North America, product liability lawsuits can cost businesses far more than expected, and insurance is an essential part of risk management.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            
            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Canada's Product Liability Legal Environment
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                Canada has a strict product liability regime. This means that even if a manufacturer is not at fault, if a product has defects and causes harm, the manufacturer may still be held liable.

Product liability claims in Canada can be filed by consumers, users, or even bystanders. Compensation may include medical expenses, lost income, pain and suffering, and in some cases, punitive damages.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                What Product Liability Insurance Covers
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                Bodily injury and property damage caused by product defects.

Legal defense costs — Even if not ultimately liable, defending a lawsuit can cost hundreds of thousands of dollars.

Settlement and judgment amounts — Insurance companies handle negotiations and pay judgments up to policy limits.

Recall expenses (some policies) — Product recall insurance covers costs of recalling products due to safety issues.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Who Needs Product Liability Insurance
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                Direct sales to Canadian end users without intermediary protection.

Products with safety risks — electronics, children's products, building materials, food, medical devices.

Sales through retailers or distributors — Most Canadian retailers require suppliers to provide proof of product liability insurance.

Companies with North American entities — Canadian entities are more likely to be direct targets of lawsuits.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Final Thoughts
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                Product liability insurance is not optional—it is essential preparation for entering the Canadian market. It protects not only your financial security but also your long-term reputation and business sustainability in North America.
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
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">Compliance & Responsibility Chain</span>
                  <p className="text-[13px] text-[#767676] mt-1">Comprehensive review of your product liability, compliance obligations, and insurance needs</p>
                </div>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Learn →</span>
              </Link>

              <Link to="/en/services/product-compliance" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">Product Compliance Consulting</span>
                  <p className="text-[13px] text-[#767676] mt-1">Ensure your products meet Canadian safety standards and regulatory requirements</p>
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
              
              <Link to="/en/insights/product-liability-chain" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">Product Liability Chain</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Read →</span>
              </Link>

              <Link to="/en/insights/shipping-without-ior-risks" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">Shipping Without IOR Risks</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Read →</span>
              </Link>

            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">Need help with product liability?</h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">We can help you navigate North American market entry with professional guidance.</p>
            <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Contact Us</Link>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
