import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: 'After the Trade Show: Why 80% of Leads Go Cold | Channel Development | CCBONLINE',
    description: "Most Chinese manufacturers lose 70-80% of trade show value within two weeks after the event. Not because the leads were bad, but because follow-up lacks structure, is delayed, or suffers from cultural mismatch.",
    canonical: 'https://www.ccbonline.ca/en/insights/trade-show-lead-follow-up-failure',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'After the Trade Show: Why 80% of Leads Go Cold | Channel Development | CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Channel Development</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              After the Trade Show: Why 80% of Leads Go Cold
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>Reading time: ~7 min</span>
              <span>·</span>
              <span>Trade Show | Lead Follow-up | Conversion | B2B Sales</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                The trade show doesn't end when you pack up the booth. Most Chinese manufacturers lose 70-80% of trade show value within the first two weeks after the event—not because the leads were bad, but because follow-up lacks structure, is delayed, or suffers from cultural mismatch.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            
            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                The 48-Hour Rule
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                North American buyers expect initial follow-up within 48 hours of a trade show meeting. Not a week later. Not after you return to China. Within 48 hours.

This doesn't mean you need to provide a complete proposal in 48 hours. It's a short, personalized email referencing your conversation, confirming what was discussed, and outlining next steps. The goal is to keep the conversation going while the buyer still remembers your booth.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Lead Scoring is Essential
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                Not all leads are equal. The first thing after a trade show should be lead scoring:

A-level (Hot): Expressed clear purchase intent, discussed specific projects or timelines, requested follow-up meetings. Follow up within 48 hours, schedule deep-dive within a week.

B-level (Warm): Expressed interest, asked for product information, but no clear project or timeline. Send detailed materials, maintain regular contact.

C-level (Long-term nurture): Just exchanged business cards, no deep conversation. Add to email list, send valuable content regularly.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Common Follow-up Mistakes
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                Mistake 1: Mass generic emails — Dear Sir/Madam emails have virtually no effect in North American B2B. Buyers can spot template emails immediately.

Mistake 2: Sending product info without clear next steps — Ending the conversation after sending brochures is a common error. Every follow-up email should suggest a specific next action.

Mistake 3: Wrong follow-up frequency — Too much or too little both cause problems. Weekly during the first 2-4 weeks is reasonable, then gradually space out.

Mistake 4: No tracking or analysis — Without a CRM or follow-up log, leads get duplicated, missed, or you can't analyze which shows or strategies work best.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Final Thoughts
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                The high cost of trade shows isn't just booth fees and travel—it's time investment and opportunity cost. Without systematic follow-up, most of this investment is wasted. Build a simple but effective follow-up process, assign clear ownership, and use appropriate tools to track and monitor.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <h3 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">Related Services</h3>
            <div className="space-y-3">
              
              <Link to="/en/services/trade-show-follow-up" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">Trade Show Follow-up Service</span>
                  <p className="text-[13px] text-[#767676] mt-1">Professional trade show lead follow-up and conversion support</p>
                </div>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Learn →</span>
              </Link>

              <Link to="/en/services/customer-channel-validation" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">Customer & Channel Validation</span>
                  <p className="text-[13px] text-[#767676] mt-1">Validate and qualify prospects and channel partners from trade shows</p>
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
              
              <Link to="/en/insights/trade-show-selection-strategy" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">Trade Show Selection Strategy</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Read →</span>
              </Link>

              <Link to="/en/insights/trade-show-lead-follow-up-best-practices" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">Trade Show Best Practices</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Read →</span>
              </Link>

            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">Need help with channel development?</h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">We can help you navigate North American market entry with professional guidance.</p>
            <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Contact Us</Link>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
