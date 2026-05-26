import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function EN_ProductCompliance() {
  useSEO({
    title: 'Product Certification Canada | CSA UL FCC ISED Pathway | CCBONLINE INC.',
    description: 'Product certification pathway mapping for Chinese manufacturers entering Canada and North America. CSA, UL, FCC, ISED requirements by product category.',
    canonical: 'https://www.ccbonline.ca/en/services/product-compliance',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Product Certification Canada | CSA UL FCC ISED Pathway | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Compliance</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              Product Compliance & Certification Pathway
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              Identify which certifications your product needs for Canada and the US, understand documentation requirements, and map a practical compliance timeline before market entry — so you don't spend money on the wrong certification.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            {/* What This Service Is */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                What This Service Is
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                A structured advisory service that helps Chinese manufacturers understand which product certifications are required for Canada and North America, how to obtain them, and in what sequence. We do not perform certification testing ourselves. We map the pathway, identify gaps in your existing documentation, and coordinate with qualified certification bodies — so you approach the certification process with clarity rather than confusion.
              </p>
            </div>

            {/* Who This Is For */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                Who This Service Is For
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Manufacturers whose products require safety, electrical, wireless, or emissions certifications for North America</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Companies unsure which certification body (CSA, UL, ETL, Intertek) to approach for their specific product category</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Businesses with existing CE or other international certifications wondering if they can be leveraged for North America</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Companies that need certification for their specific distribution channel (retail, commercial, industrial, online)</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Businesses that have been told they "need certification" but don't know which type, how long it takes, or what it costs</li>
              </ul>
            </div>

            {/* Problem It Solves */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                What Problem It Solves
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                Certification for North America is not a single process. Different product categories require different certifications — electrical products may need CSA or UL, wireless devices need FCC and ISED, energy-consuming products may need DOE or NRCan registration. The certification body you choose, the testing sequence, and the documentation you prepare all affect timeline and cost.
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                Many manufacturers approach certification backwards: they pick a certification body first, then discover requirements they weren't prepared for. We help you understand requirements first, then choose the right pathway — potentially saving months of delays and thousands in unnecessary testing.
              </p>
            </div>

            {/* What We Do */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                What We Specifically Do
              </h2>
              <ul className="space-y-4">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Product Category Assessment</strong> — We classify your product and identify all applicable certification requirements based on its function, components, and intended use</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Applicable Standards Identification</strong> — We determine which specific standards apply: CSA C22.2, UL  Standards, FCC Part 15, ISED RSS, energy efficiency regulations, and provincial requirements</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Existing Certification Review</strong> — We assess whether your existing CE, CCC, or other international test reports can be leveraged or if additional North America-specific testing is required</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Documentation Gap Analysis</strong> — We identify what technical documentation, user manuals, labels, and safety warnings you need to prepare before certification submission</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Certification Pathway Mapping</strong> — We create a step-by-step timeline showing the optimal sequence for testing, submission, and approval</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Certification Body Coordination</strong> — We help you prepare the right questions and documentation when approaching certification bodies and testing labs</li>
              </ul>
            </div>

            {/* Key Deliverables */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                Key Deliverables
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Certification Requirements Summary</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Complete list of certifications required for your product category in Canada and the US</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Applicable Standards List</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Specific standards and regulations that apply to your product, with explanations</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Existing Certification Assessment</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Evaluation of whether your current certifications or test reports can be leveraged for North America</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Documentation Checklist</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Complete list of required technical documents, manuals, labels, and safety warnings</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Certification Timeline</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Step-by-step timeline from initial assessment to certification completion</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Recommended Certification Bodies</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Shortlist of qualified certification bodies and testing labs suitable for your product</p>
                </div>
              </div>
            </div>

            {/* Scope Boundary */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                What CCBONLINE Does Not Replace
              </h2>
              <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0]">
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                  CCBONLINE does not perform certification testing, issue certifications, or act as a certification body. We do not replace CSA Group, UL Solutions, Intertek, or any other accredited testing laboratory. We provide pathway guidance, documentation preparation support, and coordination assistance. All certification testing must be conducted by accredited laboratories, and final certification decisions rest with the certification bodies.
                </p>
              </div>
            </div>

            {/* Related Pages */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Related Services
              </h2>
              <ul className="space-y-2">
                <li><Link to="/en/services" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">All Services</Link></li>
                <li><Link to="/en/services/market-entry-diagnosis" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Market Entry Diagnosis</Link></li>
                <li><Link to="/en/services/compliance-responsibility-chain" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Compliance & Responsibility Chain</Link></li>
                <li><Link to="/en/topics/importer-of-record-and-responsibility-chain" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">IOR & Responsibility Chain Guide</Link></li>
                <li><Link to="/en/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Contact CCBONLINE</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">FAQ</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-3 mb-10">
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Can we use our CE certification in Canada?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">Sometimes. CE test reports may be accepted by some certification bodies as a basis for North American certification, but the standards and requirements differ. We assess your existing CE documentation to determine what additional testing, if any, is required for CSA, UL, or cUL certification.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">What's the difference between CSA and UL?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">CSA Group is the Canadian standards organization; UL is US-based. Both are accredited in both countries. A CSA mark is recognized in the US, and a cUL (Canadian UL) mark is recognized in Canada. We help you determine which is more efficient for your specific product and target market.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">How long does certification typically take?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">It varies significantly by product complexity and certification type. Simple electrical products may take 4-8 weeks; complex products with multiple certification requirements can take 3-6 months. Our timeline mapping gives you realistic expectations based on your specific product.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Do we need certification before talking to buyers?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">Not always, but you need a clear certification plan. Many buyers will ask about certification status during initial conversations. Knowing which certification you need, the timeline, and having started the process demonstrates seriousness and preparation.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Need clarity on your product's certification requirements?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                Tell us about your product, target market, and current certification status. We will map the pathway and identify the most efficient route to compliance.
              </p>
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Map Your Certification Path</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
