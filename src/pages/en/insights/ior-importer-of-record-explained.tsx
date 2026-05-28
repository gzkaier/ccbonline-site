import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: 'IOR: Why It Matters More Than Customs Clearance | IOR & Responsibility Chain | CCBONLINE',
    description: 'Many businesses understand IOR as "someone who helps with customs clearance" — this underestimates its responsibility. IOR stands for Importer of Record. It relates to declarations, product compliance, taxes, liability boundaries, and traceability. It is not a simple logistics action.',
    canonical: 'https://www.ccbonline.ca/en/insights/ior-importer-of-record-explained',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'IOR: Why It Matters More Than Customs Clearance | IOR & Responsibility Chain | CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">IOR & Responsibility Chain</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">IOR: Why It Matters More Than Customs Clearance</h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>~6 min read</span><span>·</span><span>IOR | Importer of Record | Customs | Product Liability | Market Entry</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">Many businesses understand IOR as "someone who helps with customs clearance" — this underestimates its responsibility. IOR stands for Importer of Record. It relates to declarations, product compliance, taxes, liability boundaries, and traceability. It is not a simple logistics action.</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[700px]">
            <div className="prose-content">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">When entering the Canadian or US market, many businesses treat customs clearance as a logistics step. Ship the goods, find a customs broker, submit the documents, goods come in — seems done.</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">But what businesses need to think through earlier is not just "who helps me clear customs" but "who serves as the Importer of Record."</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">IOR Is More Than Customs Clearance</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">IOR is <strong className="font-medium">Importer of Record</strong>. It is not a simple title, nor something you casually assign to someone. The IOR relates to import declarations, duties, record keeping, compliance responsibilities, follow-up audits, and liability tracing.</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">In Canada, CBSA (Canada Border Services Agency) clearly states that the Importer of Record is the primary contact for its audits and bears direct responsibility for subsequent customs obligations including record keeping, necessary corrections, and duty payments. In the United States, CBP (U.S. Customs and Border Protection) also emphasizes that the importer shares compliance responsibility with customs and must exercise reasonable care regarding declarations, classification, valuation, and related requirements.</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">This is why IOR matters more than "customs clearance." Customs clearance is an action. IOR is a responsibility arrangement.</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">Common Questions</h2>
              <ul className="space-y-3 mb-8">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">Who is responsible for the import declaration?</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">Who pays duties and taxes?</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">Who confirms product classification and declared value?</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">If audited later, who responds to customs?</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">If products involve compliance, labeling, certification, or safety issues, who bears responsibility?</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">If customers return, complain, or recall products, how is the liability chain traced?</li>
              </ul>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">A More Stable Approach</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4"><strong>First, confirm your sales model</strong>: direct sales, agency, distribution, platform sales, or overseas warehouse stocking?</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4"><strong>Then, confirm the import entity</strong>: Who qualifies as the IOR? Who is willing to assume subsequent responsibilities?</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4"><strong>Then, confirm documentation readiness</strong>: Commercial invoice, packing list, product description, HS code, declared value, labeling, certification, insurance, after-sales arrangements — are these all clear?</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6"><strong>Finally, confirm responsibility boundaries</strong>: How is responsibility divided between the business, importer, channel partners, service providers, and customers?</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">IOR issues appear operational but are fundamentally market entry issues. If a business only focuses on "can the goods get in" and ignores "who bears the responsibility," it may pay higher costs later in channel partnerships, compliance audits, insurance, after-sales, and customer trust.</p>
            </div>
            <div className="mt-10 p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3 text-[#212121]">Related Services</h3>
              <div className="space-y-2">
                                <Link to="/en/services/market-entry-diagnosis" className="block text-[14px] text-[#00B894] hover:underline">North America Market Entry Diagnostic →</Link>
                <Link to="/en/services/local-service-connection" className="block text-[14px] text-[#00B894] hover:underline">Local Service Resource Connection →</Link>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link to="/en/insights/seo-vs-geo-difference" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors"><span className="text-[12px] text-[#767676] block mb-1">Previous</span><span className="text-[14px] font-medium text-[#212121]">SEO vs GEO: Differences, Connections, and Response</span></Link>
              <Link to="/en/insights/canada-market-size-worth-it" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors"><span className="text-[12px] text-[#767676] block mb-1">Next</span><span className="text-[14px] font-medium text-[#212121]">Canada Market Size: Is It Worth Entering?</span></Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">Was this article helpful?</h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">If you are considering entering the Canadian or North American market, submit your website or company introduction for an initial assessment.</p>
            <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Book a Consultation</Link>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
