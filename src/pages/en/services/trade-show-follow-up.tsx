import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function EN_TradeShowFollowUpService() {
  useSEO({
    title: 'Trade Show Follow-Up & Pre-Show Preparation | CCBONLINE INC.',
    description: 'Pre-show preparation and structured post-show follow-up for Chinese manufacturers exhibiting at Canadian and US trade shows. Lead management, materials, and local coordination.',
    canonical: 'https://www.ccbonline.ca/en/services/trade-show-follow-up',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Trade Show Follow-Up & Pre-Show Preparation | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Events & Channels</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              Trade Show Follow-Up & Pre-Show Preparation
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              Structured preparation before the show and systematic follow-up after — so the leads you collect actually turn into opportunities, not just business cards in a drawer.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                What This Service Is
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                A practical coordination service that helps Chinese manufacturers prepare for Canadian and US trade shows and follow up on leads systematically afterward. We do not organize trade shows or guarantee attendance. We help you show up prepared, present professionally, and follow up in a way that turns booth conversations into real business opportunities.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                Who This Is For
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Companies preparing for their first Canadian or US trade show</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Businesses that have exhibited before but struggled with lead conversion</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Manufacturers with solid products but limited experience with North American trade show expectations</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Companies that collected leads at a show but never followed up systematically</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                The Problem: Most Trade Show Leads Go Cold
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                Trade shows are expensive — booth fees, travel, shipping, accommodation, and staff time. Yet many Chinese manufacturers see disappointing ROI because the follow-up is weak or nonexistent. Leads are collected, business cards are stacked, but within two weeks most prospects have forgotten the conversation.
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                The issue is not usually the product or the booth. It is the lack of a structured follow-up process: no prioritization of leads, no adapted follow-up materials, no local point of contact, and no clear next steps communicated to prospects.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                What We Specifically Do
              </h2>

              <h3 className="text-[17px] font-semibold mb-3 text-[#212121]">Before the Show</h3>
              <ul className="space-y-3 mb-6">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Booth messaging review</strong> — Assessment of whether your booth presentation, materials, and product demos are aligned with North American buyer expectations</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Pre-show outreach</strong> — Identification and contact of target attendees before the show to schedule booth meetings</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Materials preparation</strong> — Review and adaptation of product sheets, business cards, and takeaway materials for the North American audience</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Lead capture system setup</strong> — Simple, practical system for capturing and categorizing leads at the booth</li>
              </ul>

              <h3 className="text-[17px] font-semibold mb-3 text-[#212121]">After the Show</h3>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Lead prioritization</strong> — Sorting and ranking leads by interest level, fit, and urgency within 48 hours of show close</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Follow-up sequence design</strong> — Structured outreach plan with timing, messaging, and channel recommendations for each lead tier</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Localized follow-up execution</strong> — We help execute initial follow-up from a Canadian-based contact, increasing response rates</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Meeting scheduling</strong> — Coordination of post-show calls, video meetings, or in-person follow-ups with qualified prospects</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Progress tracking</strong> — Weekly tracking of follow-up status, responses, and next-step actions for 4-8 weeks post-show</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                Key Deliverables
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Pre-Show Preparation Checklist</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Comprehensive list of materials, messaging, and logistics to confirm before the show</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Lead Categorization Matrix</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Structured framework for sorting leads into priority tiers (hot, warm, cold) based on booth interaction</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Follow-Up Sequence Template</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Timed outreach plan with email/phone scripts adapted for North American business culture</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Weekly Follow-Up Report</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Status tracking of all leads, responses received, meetings scheduled, and next-step actions</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Post-Show Summary & Recommendations</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Assessment of show ROI, lead quality observations, and recommendations for future events</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                What We Do Not Do
              </h2>
              <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0]">
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                  CCBONLINE does not organize trade shows, design booth displays, or guarantee specific lead numbers. We do not replace your sales team — we support their follow-up with structure, local coordination, and North American business practices. The quality of your product and your team's booth engagement remain the primary drivers of trade show success.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Which trade shows in Canada should we consider?</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">It depends entirely on your product category. Canada's major trade show hubs are Toronto, Montreal, Calgary, and Vancouver. We help you identify the shows that attract your target buyers rather than recommending generic "big" shows that may not match your product.</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">How quickly should we follow up after a trade show?</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">Within 48 hours for your highest-priority leads, within one week for all leads. The longer you wait, the colder the lead becomes. We design a follow-up sequence that starts immediately after the show closes.</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Can you attend the show with us?</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">Depending on the show location and timing, we may be able to provide on-site support in the Greater Toronto Area and select Canadian shows. For shows outside our immediate area, we provide remote preparation and post-show follow-up coordination.</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Related Resources
              </h2>
              <ul className="space-y-2">
                <li><Link to="/en/insights/trade-show-lead-follow-up-best-practices" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Trade Show Lead Follow-Up Best Practices →</Link></li>
                <li><Link to="/en/services" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">All Services →</Link></li>
                <li><Link to="/en/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Contact CCBONLINE →</Link></li>
              </ul>
            </div>

            <div className="p-6 md:p-8 bg-[#07111F] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">
                Preparing for a Canadian or US trade show?
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                Tell us which show, your product, and what you need help with. We will assess whether our trade show support is the right fit.
              </p>
              <Link to="/en/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">
                Discuss Trade Show Support
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
