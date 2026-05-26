import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function EN_MediaBusinessContent() {
  useSEO({
    title: 'Media Communication & Business Content Services | CCBONLINE INC.',
    description: 'Business content adaptation, media-style profiles, and exposure coordination for Chinese companies entering North America. Brand positioning and cross-cultural communication.',
    canonical: 'https://www.ccbonline.ca/en/services/media-business-content',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Media Communication & Business Content Services | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Communication</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              Media Communication & Business Content Services
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              Content positioning, English and Chinese adaptation, media-style company profiles, and business exposure coordination — so you communicate effectively with North American business audiences, not just translate words.
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
                A content and communication support service that helps Chinese companies present their capabilities, achievements, and value propositions in ways that North American business audiences can understand and trust. We do not replace your marketing team or PR agency. We bridge the cultural and contextual gaps between how Chinese companies typically present themselves and what North American buyers, media, and partners expect to see.
              </p>
            </div>

            {/* Who This Is For */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                Who This Service Is For
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Chinese companies needing to build brand awareness and credibility in North America</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Businesses preparing for trade shows, industry events, or business missions where professional presentation matters</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Companies seeking media coverage or business profiling in Canadian or North American publications</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Leadership teams whose English company profiles, case studies, or success stories do not effectively convey their capabilities to Western business audiences</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Businesses that need to adapt their Chinese marketing materials for English-speaking decision-makers without losing their core message</li>
              </ul>
            </div>

            {/* Problem It Solves */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                What Problem It Solves
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                Many Chinese companies have impressive products, large-scale manufacturing capabilities, and significant domestic achievements — but when they translate their materials into English for North American audiences, the message falls flat. Technical specifications get translated, but the value proposition doesn't. Company histories get listed, but credibility signals get lost.
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                The problem is not translation quality. It is contextual adaptation: understanding what North American business audiences need to hear, see, and verify before they will engage with a new supplier or partner.
              </p>
            </div>

            {/* What We Do */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                What We Specifically Do
              </h2>
              <ul className="space-y-4">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Brand Positioning Review</strong> — Assessment of how your company, products, and capabilities are positioned for North American audiences, with recommendations for clearer value communication</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">English/Chinese Content Adaptation</strong> — Not direct translation, but contextual adaptation of company profiles, product introductions, case studies, and executive summaries for North American business readers</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Media-Style Company Profiles and Articles</strong> — Development of professional company profiles, executive interviews, and industry articles suitable for business media, trade publications, and partner presentations</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Business Exposure Coordination</strong> — Planning and coordination of business exposure opportunities, including trade events, industry features, and business networking activities</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Event and Presentation Materials</strong> — Support for trade show presentations, pitch decks, executive speeches, and partner meeting materials</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Communication Materials Improvement</strong> — Structured review and prioritized improvement plan for your existing English marketing and communication materials</li>
              </ul>
            </div>

            {/* Key Deliverables */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                Key Deliverables
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Positioning Review Report</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Assessment of current positioning and specific recommendations for North American market alignment</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Adapted Company Profile</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Professional English company profile that effectively communicates your capabilities, scale, and value proposition</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Media-Style Article or Executive Interview</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Professionally written article suitable for business media, trade publications, or partner distribution</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Business Exposure Plan</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Coordinated plan for industry events, media features, and networking opportunities</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Communication Materials Improvement Notes</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Prioritized list of improvements for existing marketing and communication materials</p>
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
                  CCBONLINE does not replace advertising agencies, PR firms, or marketing departments. We do not guarantee media placement, advertising results, or specific audience reach. We provide content development, adaptation, and coordination support. Media relationships and publication decisions rest with the respective media outlets. For advertising campaigns and media buying, we recommend working with specialized agencies.
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
                <li><Link to="/en/services/website-content-for-service-providers" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Website & Commercial Content</Link></li>
                <li><Link to="/en/services/market-entry-diagnosis" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Market Entry Diagnosis</Link></li>
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
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">What kind of media exposure can you arrange?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">We coordinate business exposure opportunities through our network of industry connections, trade events, and business media relationships. However, we do not guarantee specific media placement or coverage. Editorial decisions are made by the respective publications and media outlets.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">How do you adapt Chinese content for Western audiences?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">We focus on contextual adaptation, not literal translation. This means restructuring content to match Western business communication conventions, emphasizing credibility signals that North American readers look for, and reframing achievements in terms that resonate with the target audience. We work with you to ensure accuracy while improving impact.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Can you help with trade show presentations?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">Yes. We help prepare trade show presentation materials, executive talking points, product introductions, and follow-up communication templates. We can also support on-site coordination at Canadian and US trade shows where we have local presence.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Is this a one-time service or ongoing support?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">It can be either. Some clients need a one-time content package for a specific event or launch. Others prefer ongoing support as their North American presence develops. We structure the engagement based on your needs and stage.</p>
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
                Need to communicate your capabilities to North American audiences?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                Tell us about your current materials, target audience, and communication goals. We will assess whether our content and media support is the right fit.
              </p>
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Discuss Content & Media Services</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
