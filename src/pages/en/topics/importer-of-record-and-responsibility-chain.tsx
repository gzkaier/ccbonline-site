import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function EN_ImporterOfRecordAndResponsibilityChain() {
  useSEO({
    title: 'Importer of Record (IOR) and Responsibility Chain | What You Are Really Signing Up For | CCBONLINE INC.',
    description: 'Understanding IOR: Importer of Record responsibilities, liability, and the full chain of accountability when importing into Canada and the US. Practical guidance for businesses entering North America.',
    canonical: 'https://www.ccbonline.ca/en/topics/importer-of-record-and-responsibility-chain',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Importer of Record (IOR) and Responsibility Chain | What You Are Really Signing Up For | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Compliance Guide</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              Importer of Record and Responsibility Chain
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[720px]">
              The Importer of Record (IOR) is not a customs formality. It is a legal identity that carries real responsibility. This guide explains what the IOR actually does, why it matters, and how the full responsibility chain works when bringing products into Canada and the US.
            </p>
          </div>
        </section>

        {/* What is IOR */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Definition</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-6">
              What is an Importer of Record?
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <p className="text-[16px] md:text-[17px] text-[#444] leading-[1.65] mb-4">
                  The Importer of Record (IOR) is the person or entity legally responsible for ensuring that imported goods comply with all laws and regulations of the destination country. In Canada, the IOR is typically declared on the Canada Customs Coding Form (B3). In the US, it appears on the CBP Entry Summary.
                </p>
                <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] mb-4">
                  The IOR is not merely a name on a document. If customs questions the classification, valuation, or compliance of your product, the IOR is the entity regulators contact. If a product recall occurs, the IOR is the responsible party. If duties were underpaid, the IOR bears the financial liability.
                </p>
                <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] text-[#444] leading-[1.7]">
                    <strong className="font-medium text-[#212121]">Key distinction:</strong> A freight forwarder handles logistics. A customs broker handles clearance paperwork. The IOR accepts legal responsibility. These can be the same entity or different ones. Many businesses confuse the three roles and assume their freight forwarder is also their IOR.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="p-5 bg-[#0B0E14]">
                  <h3 className="text-white text-[16px] font-semibold mb-4">IOR Responsibilities</h3>
                  <ul className="space-y-3">
                    {[
                      'Ensure accurate product classification (HS code)',
                      'Declare correct valuation for duty assessment',
                      'Comply with all import regulations and restrictions',
                      'Maintain records for specified periods (5+ years in Canada)',
                      'Respond to customs inquiries and audits',
                      'Pay duties, taxes, and fees',
                      'Ensure product safety and compliance with local standards',
                      'Serve as the responsible party in case of recalls',
                    ].map((item, i) => (
                      <li key={i} className="text-white/70 text-[14px] flex items-start gap-2">
                        <span className="text-[#00B894] shrink-0 text-[13px]">{'0' + (i + 1)}</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Responsibility Chain */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">The Full Chain</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              Responsibility chain: who is accountable for what
            </h2>
            <div className="max-w-[900px] space-y-4">
              {[
                { role: 'Manufacturer (You)', resp: 'Product design, quality control, documentation accuracy, providing compliant labeling and safety information.', risk: 'Product liability claims, regulatory non-compliance, recall costs if defects exist.' },
                { role: 'Importer of Record', resp: 'Legal compliance at the border, accurate declarations, duty payments, record maintenance, regulatory correspondence.', risk: 'Financial penalties, customs holds, criminal liability for misrepresentation, seizure of goods.' },
                { role: 'Customs Broker', resp: 'Preparing and submitting customs documentation, advising on classification and valuation, facilitating clearance.', risk: 'Errors in documentation (though ultimate liability rests with the IOR), delays from incomplete information.' },
                { role: 'Freight Forwarder', resp: 'Physical transportation, logistics coordination, cargo tracking, sometimes arranging insurance.', risk: 'Cargo damage or loss (if insured), delays, misrouting. Does not bear import compliance liability.' },
                { role: 'Distributor / Retailer', resp: 'Sales, marketing, local customer relationships, sometimes after-sales support. May share product liability depending on agreements.', risk: 'Commercial risk, reputation risk if product fails, potential shared liability in consumer claims.' },
                { role: 'Insurance Provider', resp: 'Coverage for product liability, cargo, and commercial general liability as specified in the policy.', risk: 'Claim denials if coverage is inadequate, premium increases after claims, policy non-renewal.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 mb-3">
                    <h4 className="text-[15px] font-semibold shrink-0 sm:w-[180px]">{item.role}</h4>
                    <p className="text-[14px] text-[#555] leading-[1.6]">{item.resp}</p>
                  </div>
                  <p className="text-[13px] text-[#767676] pl-0 sm:pl-[196px]"><span className="text-[#D4AF37]">Risk exposure:</span> {item.risk}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IOR Options */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">Your Options</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              Four ways to handle IOR in Canada
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { option: 'Your own Canadian subsidiary', pros: 'Full control, direct relationship with customs, builds local presence.', cons: 'Requires Canadian entity registration, ongoing compliance obligations, higher administrative burden. Best for companies with serious long-term commitment.' },
                { option: 'Your Canadian distributor', pros: 'Leverages existing local entity, distributor has incentive to move product.', cons: 'Distributor may not want IOR liability, creates dependency, loss of direct customs relationship. Must verify distributor is willing and capable.' },
                { option: 'Third-party IOR service', pros: 'Professional IOR management, no need for your own entity, compliance expertise included.', cons: 'Ongoing service fees, less direct control, need to verify coverage and capabilities carefully.' },
                { option: 'Agent or representative', pros: 'Lower commitment, testing market with limited volume.', cons: 'Agent may lack IOR capacity, limited volume capacity, less control over branding and pricing. Often a transitional arrangement.' },
              ].map((item, i) => (
                <div key={i} className="p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h4 className="text-[16px] font-semibold mb-3">{item.option}</h4>
                  <p className="text-[13px] text-[#00B894] mb-1">Pros</p>
                  <p className="text-[14px] text-[#555] leading-[1.6] mb-3">{item.pros}</p>
                  <p className="text-[13px] text-[#D4AF37] mb-1">Cons</p>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">{item.cons}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Common Gaps */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Common Gaps</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              Where responsibility chains typically break
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { gap: 'Assuming the freight forwarder is the IOR', fix: 'Verify in writing who the IOR is. Many freight forwarders explicitly disclaim IOR responsibility in their terms.' },
                { gap: 'No written IOR agreement', fix: 'Have a clear agreement specifying IOR responsibilities, liability limits, and what happens in case of customs issues or recalls.' },
                { gap: 'Underestimating record-keeping requirements', fix: 'Canadian customs requires records to be maintained for 5+ years. Ensure your IOR has proper record management systems.' },
                { gap: 'No recall or crisis plan', fix: 'Define in advance who coordinates a recall, how communication flows, and who bears costs. Regulators expect a domestic point of contact.' },
                { gap: 'Insurance gaps', fix: 'Product liability insurance, cargo insurance, and commercial general liability are different coverages. Verify what your IOR carries and what gaps remain.' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border-l-2 border-l-[#D4AF37] border border-[#E5E5E5]">
                  <h4 className="text-[14px] font-semibold mb-2 text-[#212121]">{item.gap}</h4>
                  <p className="text-[13px] md:text-[14px] text-[#555] leading-[1.6]"><span className="text-[#00B894]">Fix:</span> {item.fix}</p>
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
              Common IOR and responsibility questions
            </h2>
            <div className="space-y-3">
              {[
                { q: 'Can a foreign company be its own IOR in Canada?', a: 'Technically possible in some arrangements, but practically difficult. Having a Canadian business number, local address, and understanding of Canadian regulations is typically required. Most foreign companies work with a local entity or third-party IOR service.' },
                { q: 'What happens if the IOR makes a mistake on the customs declaration?', a: 'The IOR bears the financial and legal consequences. This can include penalties, additional duties, seizure of goods, and in serious cases, criminal charges. The IOR may have recourse against the manufacturer if the manufacturer provided incorrect information, but customs deals directly with the IOR.' },
                { q: 'Does the IOR need to be the same entity as the seller?', a: 'No. The IOR is whoever accepts legal responsibility for the import. The seller, distributor, a third-party service, or even a subsidiary can serve as IOR. The key is having a clear agreement and understanding of responsibilities.' },
                { q: 'What records must the IOR maintain?', a: 'In Canada, the IOR must maintain import records for at least 5 years, including: customs documentation, invoices, packing lists, certificates of origin, classification rulings, correspondence with CBSA, and any amendments or corrections.' },
                { q: 'How do I verify my IOR arrangement is solid?', a: 'Check: Is there a written agreement? Does the IOR understand your product category? Does the IOR have proper insurance? Has the IOR handled similar products before? Is there a crisis communication plan? If any answer is no, there is work to do.' },
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

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Need clarity on your IOR and responsibility chain?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                CCBONLINE INC. helps businesses entering Canada and the US assess their responsibility chain, evaluate IOR options, and close compliance gaps before products reach the border.
              </p>
              <Link to="/en/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">Request a Responsibility Chain Assessment</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
