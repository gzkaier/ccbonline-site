import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: 'After-sales & Warranty: What Chinese Manufacturers Overlook | Product Liability | CCBONLINE',
    description: "After-sales service and warranty policies are important factors North American customers consider when choosing suppliers. This article analyzes common blind spots and provides improvement recommendations.",
    canonical: 'https://www.ccbonline.ca/en/insights/after-sales-warranty-overlooked',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'After-sales & Warranty: What Chinese Manufacturers Overlook | Product Liability | CCBONLINE'
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
              After-sales & Warranty: What Chinese Manufacturers Overlook
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>Reading time: ~6 min</span>
              <span>·</span>
              <span>After-sales Service | Warranty Policy | Customer Satisfaction | North America</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                Many Chinese manufacturers invest tremendous effort in R&D and production but neglect after-sales service and warranty policies. In the North American market, after-sales is not a cost center—it's a key source of competitive differentiation. A clear, credible after-sales commitment may be the deciding factor when customers choose you over competitors.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            
            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                North American Customer After-sales Expectations
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                Clear warranty terms: How long? What's covered? What's excluded? How to claim? This information needs to be available before purchase.

Accessible technical support: Customers expect to reach technical support during business hours by phone or email and get meaningful responses.

Fast issue response: When products have problems, customers expect initial response within 24-48 hours, not a week later.

Parts supply assurance: Customers need to know spare parts availability and whether they're provided free during warranty.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Common After-sales Blind Spots
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                Blind spot 1: No written warranty policy — Many manufacturers' warranty commitments are verbal only. This is unacceptable in North America.

Blind spot 2: Vague warranty terms — "Quality issues under normal use conditions" is too vague. What counts as "normal use"? What counts as "quality issue"?

Blind spot 3: After-sales only for big clients — Many manufacturers only provide support to major clients, neglecting small and medium customers.

Blind spot 4: Insufficient cross-timezone support — North American business hours are 12-15 hours behind China. If support is only available during China daytime, urgent North American issues wait until the next day.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Building an Effective After-sales System
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                Create written warranty policies in English, reviewed by legal professionals.

Establish tiered support with different response time standards based on customer level and issue urgency.

Consider local service partners in Canada or the US for localized after-sales support.

Build a knowledge base with FAQs, troubleshooting guides, and installation manuals for customer self-service.

Conduct regular customer check-ins to proactively identify potential issues before they become problems.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Final Thoughts
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                After-sales service is not a cost—it's an investment. In the North American market, a good after-sales system improves customer satisfaction and loyalty, increases repeat purchases and referrals, reduces customer acquisition costs, and creates competitive differentiation.
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
                  <p className="text-[13px] text-[#767676] mt-1">Help you establish a complete after-sales responsibility and warranty system</p>
                </div>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Learn →</span>
              </Link>

              <Link to="/en/services/local-execution-support" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">Local Execution Support</span>
                  <p className="text-[13px] text-[#767676] mt-1">On-the-ground support in Canada for market entry execution</p>
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

              <Link to="/en/insights/product-liability-insurance-canada" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">Product Liability Insurance Canada</span>
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
