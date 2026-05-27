import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function EN_3PLWarehousingAdvisory() {
  useSEO({
    title: 'Canada 3PL & Warehouse Operation Audit | CCBONLINE INC.',
    description: 'Systematic 3PL evaluation and warehouse operation audit for Chinese manufacturers entering Canada. Assess fulfillment partners, warehouse capabilities, and operational readiness.',
    canonical: 'https://www.ccbonline.ca/en/services/3pl-warehousing-advisory',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Canada 3PL & Warehouse Operation Audit | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Local Operations</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              3PL Selection & Warehouse Operation Audit
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              Systematic evaluation of third-party logistics providers and warehouse operations to ensure your Canadian distribution infrastructure supports your market entry plan — before you sign a contract you may regret.
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
                A practical evaluation service that helps Chinese manufacturers choose the right Canadian 3PL (third-party logistics) partner and assess warehouse operational capabilities before committing to a fulfillment contract. We do not operate warehouses or provide logistics services ourselves. We evaluate, audit, and advise — so you make an informed decision based on operational facts rather than sales promises.
              </p>
            </div>

            {/* Who This Is For */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                Who This Service Is For
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">Companies needing warehousing and fulfillment in Canada for the first time</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">Businesses evaluating multiple 3PL partners and unsure how to compare them</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">Manufacturers setting up local inventory who need to understand Canadian fulfillment costs and SLA structures</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">Companies that have had operational issues with a current 3PL and need an independent assessment</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">Businesses that need to understand the difference between freight forwarding, 3PL, and 4PL before making infrastructure decisions</li>
              </ul>
            </div>

            {/* Problem It Solves */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                What Problem It Solves
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                Many Chinese manufacturers entering Canada sign 3PL contracts based on price alone or a single sales conversation, without understanding the operational capabilities, technology limitations, hidden costs, and SLA (Service Level Agreement) gaps that can damage customer relationships later.
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                A warehouse that cannot handle your product's receiving requirements, lacks proper inventory tracking, or has insufficient packing standards can cost you far more than a slightly more expensive but operationally sound partner. Our audit prevents these operational failures by evaluating capabilities before commitment.
              </p>
            </div>

            {/* What We Do */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                What We Specifically Do
              </h2>
              <ul className="space-y-4">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">Requirements Definition</strong> — We define your 3PL requirements based on your product characteristics, order volume projections, channel strategy (B2B vs. B2C), and special handling needs (temperature control, hazardous materials, oversized items)</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">Partner Identification</strong> — We identify 3-5 Canadian 3PL providers that match your requirements, geographic needs, and operational scale</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">Warehouse Operation Audit</strong> — On-site or virtual assessment of receiving, storage, inventory management, picking, packing, shipping, and returns handling processes</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">Technology Systems Review</strong> — Evaluation of WMS (Warehouse Management System), EDI/API capabilities, reporting, and integration with your systems</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">Contract & SLA Review</strong> — Assessment of pricing structures, minimum commitments, liability coverage, performance metrics, and termination clauses</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">Comparison Scorecard</strong> — Side-by-side evaluation of shortlisted partners across operational, financial, and strategic criteria</li>
              </ul>
            </div>

            {/* Key Deliverables */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                Key Deliverables
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">3PL Requirements Document</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Detailed specification of your warehousing and fulfillment requirements for vendor evaluation</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Partner Evaluation Scorecard</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Structured comparison of shortlisted 3PL providers across operational, technical, and commercial dimensions</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Warehouse Audit Report</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Operational capability assessment covering receiving, storage, inventory accuracy, picking, packing, and shipping</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Technology Capability Assessment</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Review of systems, integrations, reporting capabilities, and technology roadmap</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Contract Review Notes</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Key terms, risks, and negotiation points identified in the 3PL contract (not legal advice — we recommend involving legal counsel for contract finalization)</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Implementation Roadmap</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Timeline and key milestones for onboarding with the selected 3PL partner</p>
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
                  CCBONLINE does not operate warehouses, provide logistics services, or negotiate contracts on your behalf. We do not replace freight forwarders, customs brokers, or legal counsel. Our role is to evaluate and advise. Contract negotiation and legal review should involve qualified legal professionals. Freight forwarding and customs clearance require licensed customs brokers.
                </p>
              </div>
            </div>

            {/* Related Pages */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Related Services
              </h2>
              <ul className="space-y-2">
                <li><Link to="/en/services" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">All Services</Link></li>
                <li><Link to="/en/services/compliance-responsibility-chain" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">Compliance & Responsibility Chain</Link></li>
                <li><Link to="/en/services/local-execution-support" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">Local Execution Support</Link></li>
                <li><Link to="/en/contact" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">Contact CCBONLINE</Link></li>
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
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">How is a 3PL different from a freight forwarder?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">A freight forwarder arranges transportation of goods from point A to point B. A 3PL provides warehousing, inventory management, order fulfillment, and often value-added services like kitting, labeling, and returns processing. If you need to hold inventory in Canada and ship orders to customers, you need a 3PL, not just a freight forwarder.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">What does a warehouse audit typically cover?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">We assess receiving processes, storage conditions, inventory accuracy, picking and packing quality, shipping procedures, returns handling, technology systems, staffing levels, and operational metrics. The audit can be conducted on-site or virtually depending on your needs and budget.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">How much does Canadian 3PL services typically cost?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">3PL pricing in Canada varies widely based on services, volume, and location. Typical components include receiving fees, storage fees (per pallet or per cubic meter), pick-and-pack fees per order, shipping fees, and account management fees. We help you understand the total cost structure and identify hidden fees during our evaluation.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Do you guarantee finding the right 3PL partner?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">No. We provide structured evaluation and independent assessment to improve your decision quality, but the final choice is yours. What we guarantee is that you will understand your options more clearly and be aware of operational risks before signing a contract.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Evaluating Canadian 3PL partners?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                Tell us about your product, projected volumes, and channel strategy. We will help you define requirements and evaluate partners systematically.
              </p>
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Request 3PL Evaluation Support</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
