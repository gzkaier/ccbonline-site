import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function EN_TradeShowLeadFollowUpBestPractices() {
  useSEO({
    title: 'Trade Show Lead Follow-Up: Best Practices for Chinese Exporters | CCBONLINE',
    description: 'How Chinese manufacturers can convert trade show leads into real opportunities in Canada and North America. Structured follow-up timeline, email templates, and common mistakes.',
    canonical: 'https://www.ccbonline.ca/en/insights/trade-show-lead-follow-up-best-practices',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Trade Show Lead Follow-Up: Best Practices for Chinese Exporters | CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <article className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Channel Development</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[30px] md:text-[38px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              Trade Show Lead Follow-Up: Best Practices
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              The trade show is not over when you pack up the booth. Most Chinese manufacturers lose 70-80% of their trade show value in the first two weeks after the event — not because the leads were bad, but because follow-up was unstructured, delayed, or culturally mismatched.
            </p>
          </div>
        </article>

        <article className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                The 48-Hour Rule
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                North American buyers expect initial follow-up within 48 hours of a trade show meeting. Not a week later. Not when you return to China. Within 48 hours.
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                This does not mean you need a full proposal in 48 hours. It means a brief, personalized email referencing your conversation, confirming what was discussed, and outlining next steps. The goal is to keep the conversation alive while the buyer still remembers your booth.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                Structured Follow-Up Timeline
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h4 className="font-semibold text-[15px] mb-1">Day 0-2 (At the show)</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">Qualify leads immediately. Note the buyer's role, interests, timeline, and specific questions asked. Take a photo of their business card or badge. Rate each lead A (hot), B (warm), or C (cool) before the end of each show day.</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h4 className="font-semibold text-[15px] mb-1">Day 2-3 (First follow-up)</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">Send personalized email to A and B leads. Reference your specific conversation. Include a clear next step — not "let us know if you are interested" but "I will send you our product specification sheet by Thursday. Does that timeline work for you?"</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h4 className="font-semibold text-[15px] mb-1">Day 7-10 (Second follow-up)</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">Send the promised materials. Include a brief note summarizing key product advantages relevant to what the buyer asked about. If you committed to a sample or quote, deliver it now.</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h4 className="font-semibold text-[15px] mb-1">Day 14-21 (Third follow-up)</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">Check if they received and reviewed the materials. Ask specific questions about their evaluation process and timeline. Offer a video call to walk through product details or answer technical questions.</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h4 className="font-semibold text-[15px] mb-1">Day 30-45 (Nurture or close)</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">For leads that have gone quiet, send a brief value-add message — a relevant industry insight, a new product update, or a reference case. For active leads, propose concrete next steps: sample order, distributor meeting, or site visit.</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Common Follow-Up Mistakes
              </h2>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">Generic mass emails</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">"Dear Sir/Madam, thank you for visiting our booth" signals that you do not remember the conversation. Personalize every email with a reference to what was discussed.</p>
                </div>
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">No clear next step</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">Ending an email with "please let us know if you need anything" puts the burden on the buyer. Propose a specific next action with a timeline.</p>
                </div>
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">Following up in the wrong timezone</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">Emailing at 2 AM Toronto time because that is business hours in China means your email gets buried under 50 others by morning. Schedule emails to arrive during North American business hours.</p>
                </div>
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">Giving up after one or two attempts</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">North American buyers are busy. They may not respond to the first or even second email. A structured 5-6 touch sequence over 6-8 weeks is normal, not pushy.</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Related Resources
              </h2>
              <ul className="space-y-2">
                <li><Link to="/en/services/channel-local-landing" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Channel Strategy & Local Landing Service →</Link></li>
                <li><Link to="/en/services/customer-channel-validation" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Customer & Channel Validation →</Link></li>
                <li><Link to="/en/insights/channel-development-is-not-email-blasting" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Channel Development Is Not Email Blasting →</Link></li>
                <li><Link to="/en/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Contact CCBONLINE →</Link></li>
              </ul>
            </div>

            <div className="p-6 md:p-8 bg-[#07111F] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">
                Need help structuring your trade show follow-up?
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                We help manufacturers build follow-up systems that convert trade show contacts into real business opportunities.
              </p>
              <Link to="/en/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">
                Discuss Trade Show Support
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer lang="en" />
    </div>
  )
}
