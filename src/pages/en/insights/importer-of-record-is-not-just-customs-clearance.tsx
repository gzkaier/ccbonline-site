import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function EN_ImporterOfRecordIsNotJustCustomsClearance() {
  useSEO({
    title: 'What Is an Importer of Record (IOR)? It Is Not Just Customs Clearance | CCBONLINE',
    description: 'Understand what Importer of Record really means in Canada and the US, who should act as IOR, liability implications, and why it matters before your first shipment.',
    canonical: 'https://www.ccbonline.ca/en/insights/importer-of-record-is-not-just-customs-clearance',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'What Is an Importer of Record (IOR)? It Is Not Just Customs Clearance | CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <article className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Compliance</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[30px] md:text-[38px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              Importer of Record Is Not Just Customs Clearance
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              Many Chinese manufacturers confuse customs clearance with Importer of Record responsibility. They are not the same — and misunderstanding the difference can lead to shipment delays, compliance violations, and liability exposure.
            </p>
          </div>
        </article>

        <article className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            {/* What is IOR */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                What Is an Importer of Record?
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                An <strong>Importer of Record (IOR)</strong> is the person or entity responsible for ensuring that imported goods comply with all laws and regulations of the importing country. In Canada, this means the IOR is legally responsible for:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Accurate declaration of goods to the Canada Border Services Agency (CBSA)</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Payment of all applicable duties and taxes</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Compliance with product safety standards, labeling requirements, and import permits</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Maintaining records for the required retention period (typically 6 years in Canada)</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Responding to CBSA audits, inspections, or compliance inquiries</li>
              </ul>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                The IOR is not necessarily the owner of the goods. It is the entity that takes legal responsibility for the importation. This distinction matters enormously.
              </p>
            </div>

            {/* IOR vs Customs Broker */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                IOR vs. Customs Broker: Not the Same Role
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                This is where many Chinese manufacturers get confused. A <strong>customs broker</strong> is a licensed professional who prepares and submits customs documentation on behalf of the importer. They facilitate the clearance process but do not assume legal responsibility for the import.
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                The <strong>Importer of Record</strong> is the entity that bears the legal liability. The customs broker works for the IOR. You can think of it this way: the customs broker is like an accountant who files your tax return — they help with the paperwork, but you are still responsible for the accuracy of the return.
              </p>
              <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                <p className="text-[14px] font-medium text-[#212121] mb-2">Key difference:</p>
                <ul className="space-y-1.5">
                  <li className="text-[14px] text-[#444]"><strong>Customs Broker</strong> → Prepares and files customs paperwork (service provider)</li>
                  <li className="text-[14px] text-[#444]"><strong>Importer of Record</strong> → Legally responsible for the import (liability holder)</li>
                </ul>
              </div>
            </div>

            {/* Who can be IOR */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Who Can Act as the Importer of Record?
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-5">
                For Chinese manufacturers entering Canada or the US, there are typically three IOR arrangement options:
              </p>
              <div className="space-y-5">
                <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[16px] font-semibold mb-2">Option 1: Your Own Canadian/US Entity</h3>
                  <p className="text-[14px] text-[#444] leading-[1.65] mb-2">
                    You establish or acquire a local entity that acts as the IOR. This gives you maximum control but requires corporate registration, tax compliance, and ongoing administrative obligations.
                  </p>
                  <p className="text-[13px] text-[#666]"><strong>Best for:</strong> Companies planning long-term market presence with significant volume.</p>
                </div>
                <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[16px] font-semibold mb-2">Option 2: Your Distributor or Agent</h3>
                  <p className="text-[14px] text-[#444] leading-[1.65] mb-2">
                    The local distributor or sales agent acts as the IOR. This reduces your administrative burden but means you have less control over the import process and may lose visibility into customs documentation.
                  </p>
                  <p className="text-[13px] text-[#666]"><strong>Best for:</strong> Companies working with established distributors who have strong import capabilities.</p>
                </div>
                <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[16px] font-semibold mb-2">Option 3: Third-Party IOR Service</h3>
                  <p className="text-[14px] text-[#444] leading-[1.65] mb-2">
                    A specialized logistics company or IOR service provider assumes the Importer of Record role for a fee. This can be efficient for initial market entry but may become expensive at scale.
                  </p>
                  <p className="text-[13px] text-[#666]"><strong>Best for:</strong> Companies testing the market or with lower initial volumes.</p>
                </div>
              </div>
            </div>

            {/* When to decide */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                When Do You Need to Decide on IOR?
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                The IOR arrangement must be in place before your first shipment arrives at the port of entry. You cannot "figure it out later" — customs will not release goods without a designated IOR.
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                In practice, you should decide on your IOR structure at least 4-6 weeks before your planned shipment. This allows time for:
              </p>
              <ul className="space-y-2">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Corporate registration (if establishing your own entity)</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Contract negotiation with a distributor or third-party IOR</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">CBSA account setup and bonding arrangements</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Documentation preparation and compliance review</li>
              </ul>
            </div>

            {/* Common mistakes */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Common Mistakes Chinese Manufacturers Make
              </h2>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">Assuming the freight forwarder is the IOR</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">Freight forwarders move goods. They are not legally responsible for import compliance unless specifically contracted as an IOR service provider.</p>
                </div>
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">Letting the distributor handle IOR without a clear agreement</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">If your distributor is the IOR, you need a written agreement specifying who handles what — documentation, duties, compliance, and liability.</p>
                </div>
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">Not understanding the liability exposure</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">The IOR can be held liable for incorrect declarations, underpaid duties, and non-compliant products. This is not a formality — it is a legal responsibility.</p>
                </div>
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">Waiting until the shipment is en route to decide</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">By the time the ship is crossing the ocean, it is too late to set up a proper IOR arrangement. Delays at port can cost thousands per day.</p>
                </div>
              </div>
            </div>

            {/* How to choose */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                How to Choose the Right IOR Arrangement
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                The right IOR structure depends on your business model, volume projections, risk tolerance, and relationship with your Canadian or US partner. There is no universal answer.
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-5">
                Key factors to consider:
              </p>
              <ul className="space-y-2 mb-5">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong>Volume and frequency</strong> — Higher volumes typically justify establishing your own entity</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong>Control requirements</strong> — Do you need direct control over the import process?</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong>Distributor capability</strong> — Does your distributor have reliable import experience?</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong>Liability tolerance</strong> — Are you comfortable with another entity holding legal responsibility for your products?</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong>Timeline</strong> — How quickly do you need to start shipping?</li>
              </ul>
              <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0]">
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7]">
                  <strong>Note:</strong> This article provides a general overview of Importer of Record concepts. Specific IOR arrangements should be reviewed with qualified customs brokers and legal professionals who understand your product category, volume, and business structure. CCBONLINE helps manufacturers understand the IOR landscape and coordinate with appropriate specialists — we do not provide legal advice or act as an IOR ourselves.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Can the IOR and the customs broker be the same entity?</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">Yes. Many customs brokers and freight forwarders offer IOR services. However, it is important to understand that even when one company provides both services, the legal roles are distinct. Make sure the IOR service is explicitly contracted, not assumed as part of customs clearance.</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">What happens if goods arrive without an IOR?</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">CBSA (or CBP in the US) will hold the shipment at the port. Storage fees accumulate daily. If no IOR is designated within a certain period, the goods may be seized or returned at the shipper's expense. This is why IOR arrangements must be confirmed before shipment.</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Does the IOR need to be a Canadian or US citizen?</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">No. The IOR must be a legally registered entity in the importing country (or have legal standing to import), but citizenship is not a requirement. A Chinese-owned Canadian subsidiary can be the IOR, for example.</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Can we change the IOR arrangement later?</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">Yes, but it requires updating CBSA records and may involve a transition period. Many companies start with a third-party IOR or distributor and later transition to their own entity as volume grows. Plan this transition carefully to avoid gaps in import capability.</p>
                  </div>
                </details>
              </div>
            </div>

            {/* Related */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Related Resources
              </h2>
              <ul className="space-y-2">
                <li><Link to="/en/services/ior-import-responsibility" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">IOR & Import Responsibility Advisory Service →</Link></li>
                <li><Link to="/en/services/compliance-responsibility-chain" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Compliance & Responsibility Chain Screening →</Link></li>
                <li><Link to="/en/services/local-execution-support" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Local Execution Support →</Link></li>
                <li><Link to="/en/insights/north-america-responsibility-chain" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Understanding the North America Responsibility Chain →</Link></li>
              </ul>
            </div>

            {/* CTA */}
            <div className="p-6 md:p-8 bg-[#07111F] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">
                Need help structuring your IOR arrangement?
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                We help manufacturers understand IOR options, compare arrangements, and connect with qualified customs specialists.
              </p>
              <Link to="/en/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">
                Discuss Your IOR Arrangement
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer lang="en" />
    </div>
  )
}
