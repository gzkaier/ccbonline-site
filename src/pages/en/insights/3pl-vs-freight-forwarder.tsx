import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function EN_3PLVsFreightForwarder() {
  useSEO({
    title: '3PL vs Freight Forwarder: What Is the Difference? | CCBONLINE',
    description: 'Understand the difference between 3PL (third-party logistics) and freight forwarders for Canadian distribution. When you need warehousing, not just transportation.',
    canonical: 'https://www.ccbonline.ca/en/insights/3pl-vs-freight-forwarder',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = '3PL vs Freight Forwarder: What Is the Difference? | CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <article className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Local Operations</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[30px] md:text-[38px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              3PL vs Freight Forwarder: What Is the Difference?
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              Many Chinese manufacturers entering Canada use a freight forwarder when they actually need a 3PL — or vice versa. Understanding the difference prevents costly operational mistakes.
            </p>
          </div>
        </article>

        <article className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Two Different Services, Often Confused
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                A <strong>freight forwarder</strong> arranges the transportation of goods from origin to destination. They book cargo space, handle documentation, and coordinate with carriers (air, ocean, rail, truck). Their job ends when the goods arrive at the destination port or terminal.
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                A <strong>3PL (third-party logistics)</strong> provides warehousing, inventory management, order fulfillment, and often value-added services such as kitting, labeling, returns processing, and last-mile delivery. Their job begins when the goods arrive at their warehouse and continues as long as you hold inventory in Canada.
              </p>
              <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                <p className="text-[14px] font-medium text-[#212121] mb-2">Simple distinction:</p>
                <ul className="space-y-1.5">
                  <li className="text-[14px] text-[#444]"><strong>Freight forwarder</strong> → Moves goods from A to B (transportation)</li>
                  <li className="text-[14px] text-[#444]"><strong>3PL</strong> → Stores goods, manages inventory, and fulfills orders (warehousing + fulfillment)</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                When You Need a Freight Forwarder
              </h2>
              <ul className="space-y-2">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">You need to ship goods from China to Canada or the US</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">You are shipping direct to a customer or distributor who handles receiving</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">You do not plan to hold inventory in Canada</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">You need customs clearance coordination (many freight forwarders also offer customs brokerage)</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                When You Need a 3PL
              </h2>
              <ul className="space-y-2">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">You need to hold inventory in Canada before selling to customers</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">You sell through e-commerce, retail, or B2B channels that require pick-and-pack fulfillment</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">Your customers expect fast delivery (1-3 days) that is only possible with local inventory</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">You need returns handling, value-added services (labeling, kitting), or inventory management</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Common Mistakes
              </h2>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">Using a freight forwarder for order fulfillment</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">Freight forwarders do not typically pick, pack, and ship individual orders to end customers. If you need fulfillment, you need a 3PL.</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">Expecting the 3PL to handle international shipping</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">Most 3PLs focus on domestic fulfillment. They receive goods at their warehouse (usually arranged by you or your freight forwarder) and handle distribution from there.</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">Not clarifying responsibilities at the handoff point</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">When goods move from the freight forwarder to the 3PL, who is responsible for unloading, inspection, and damage claims? This must be defined in advance.</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Related Resources
              </h2>
              <ul className="space-y-2">
                <li><Link to="/en/services/3pl-warehousing-advisory" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">3PL Selection & Warehouse Audit Service →</Link></li>
                <li><Link to="/en/services/local-execution-support" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">Local Execution Support →</Link></li>
                <li><Link to="/en/insights/importer-of-record-is-not-just-customs-clearance" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">Importer of Record Is Not Just Customs Clearance →</Link></li>
                <li><Link to="/en/contact" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">Contact CCBONLINE →</Link></li>
              </ul>
            </div>

            <div className="p-6 md:p-8 bg-[#0B0E14] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">
                Evaluating Canadian logistics partners?
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                We help manufacturers understand logistics requirements and evaluate fulfillment partners systematically.
              </p>
              <Link to="/en/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">
                Request 3PL Evaluation
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer lang="en" />
    </div>
  )
}
