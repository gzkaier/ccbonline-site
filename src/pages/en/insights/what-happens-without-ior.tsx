import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function EN_WhatHappensWithoutIOR() {
  useSEO({
    title: 'What Happens If Goods Arrive Without an IOR Arrangement? | CCBONLINE',
    description: 'Consequences of shipping to Canada or the US without an Importer of Record: port delays, storage fees, seizure risk, and how to prevent this costly mistake.',
    canonical: 'https://www.ccbonline.ca/en/insights/what-happens-without-ior',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'What Happens If Goods Arrive Without an IOR Arrangement? | CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <article className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Import Responsibility</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[30px] md:text-[38px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              What Happens If Goods Arrive Without an IOR Arrangement
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              Shipping products to Canada or the US without a designated Importer of Record is one of the most expensive and avoidable mistakes Chinese manufacturers make. Here is exactly what happens — and how to prevent it.
            </p>
          </div>
        </article>

        <article className="section-padding bg-white">
        <div className="container-site max-w-[800px]">
            <div className="mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                We have seen this scenario multiple times: a Chinese manufacturer secures a purchase order from a North American buyer, arranges production and shipping, and only realizes they have not designated an Importer of Record (IOR) when the cargo is already on the water. By then, it is a crisis — not a planning exercise.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                The Immediate Consequences
              </h2>
              <div className="space-y-5">
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">1. Goods are held at the port of entry</h4>
                  <p className="text-[14px] text-[#444] leading-[1.65]">Canadian Border Services Agency (CBSA) or US Customs and Border Protection (CBP) will not release shipments without a designated IOR. Your container sits at the terminal — and the clock starts ticking on storage fees.</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">2. Demurrage and detention fees accumulate daily</h4>
                  <p className="text-[14px] text-[#444] leading-[1.65]">Port storage fees typically range from $100 to $400 per day per container, depending on the port and terminal. After free time expires (usually 4-7 days), these fees escalate. A two-week delay can add $2,000-$5,000 in unexpected costs.</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">3. Your buyer starts asking difficult questions</h4>
                  <p className="text-[14px] text-[#444] leading-[1.65]">The buyer expected delivery on a certain date. Now they are told the goods are stuck at customs because "we do not have an IOR yet." This erodes trust and can jeopardize the relationship before it even begins.</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">4. Rush IOR setup costs more</h4>
                  <p className="text-[14px] text-[#444] leading-[1.65]">Setting up an IOR arrangement under time pressure — while goods are accumulating fees — limits your negotiation leverage with IOR service providers and customs brokers. Rush services exist but cost significantly more.</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                The Worst-Case Scenario
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                If no IOR is designated within a reasonable timeframe (typically 30-45 days, depending on the port and circumstances), customs authorities may:
              </p>
              <ul className="space-y-2 mt-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">Seize the goods for auction or destruction</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">Order the goods returned to the origin country at the shipper's expense</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">Flag your company for future shipments, triggering additional inspections</li>
              </ul>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mt-4">
                None of these outcomes are recoverable. The product, the shipping cost, and the relationship with the buyer are all lost.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                How to Prevent This
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                The prevention is simple — but requires planning before the shipment is booked:
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Step 1: Confirm IOR structure 4-6 weeks before shipping</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Decide whether your own entity, your distributor, or a third-party IOR service will handle import responsibility.</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Step 2: Complete CBSA or CBP account setup</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">The IOR entity needs a customs account with the relevant border agency. This takes time — do not leave it to the last minute.</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Step 3: Designate and communicate with your customs broker</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">The customs broker needs to know who the IOR is and have all relevant documentation before the shipment arrives.</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Step 4: Verify the IOR has all required documents</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Commercial invoice, packing list, certificate of origin, and product-specific permits or certifications should be ready and reviewed.</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                If You Are Already in This Situation
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                If your goods are already en route and you do not have an IOR arrangement, contact a customs broker or IOR service provider immediately. Some providers offer emergency IOR setup, though at premium rates. The key is speed — every day of delay increases your costs and risk. Do not wait until the goods arrive at the port.
              </p>
            </div>

            <div className="mb-10 p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0]">
              <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7]">
                <strong>Note:</strong> This article describes general scenarios based on typical cases. Specific outcomes depend on the port, product type, shipment value, and customs officer discretion. CCBONLINE helps manufacturers plan IOR arrangements proactively — we do not provide emergency IOR services or legal advice.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Related Resources
              </h2>
              <ul className="space-y-2">
                <li><Link to="/en/insights/importer-of-record-is-not-just-customs-clearance" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">What Is an Importer of Record (IOR)? →</Link></li>
                <li><Link to="/en/services/ior-import-responsibility" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">IOR & Import Responsibility Service →</Link></li>
              </ul>
            </div>

            <div className="p-6 md:p-8 bg-[#0B0E14] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">
                Planning your first shipment to North America?
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                We help manufacturers set up IOR arrangements, coordinate with customs brokers, and avoid costly delays before the first shipment.
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
