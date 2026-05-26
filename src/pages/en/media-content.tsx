import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function EN_MediaContent() {
  useSEO({
    title: 'Media Coverage, Business Exposure & Content Collaboration | CCBONLINE INC.',
    description: 'Business media exposure, industry content collaboration, and professional profiling for Chinese companies building presence in Canada and North America.',
    canonical: 'https://www.ccbonline.ca/en/media-content',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Media Coverage, Business Exposure & Content Collaboration | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Media & Content</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[40px] leading-[1.25] tracking-tight max-w-[860px] mb-4">
              Media Coverage, Business Exposure, and Content Collaboration
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              Industry media exposure, professional business profiling, and content collaboration — helping Chinese companies establish visible, credible presence in Canadian and North American business communities.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              What This Service Is
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              A business exposure service that helps Chinese companies establish professional visibility in Canadian and North American markets through media-style content, industry features, and strategic business profiling. We do not replace PR agencies or advertising firms. We create and coordinate exposure opportunities through business media channels, industry publications, and professional networking platforms where North American buyers and partners are already present.
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Who This Service Is For
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Chinese manufacturers and brands that have entered or are preparing to enter the North American market and need professional visibility</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Companies with genuine capabilities, certifications, or market achievements that are not well-documented in English</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Leadership teams preparing for trade shows, industry events, or business missions where media presence supports credibility</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Businesses seeking to differentiate from competitors through professional content and industry recognition</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Four Service Components
            </h2>

            <div className="space-y-6 mb-10">
              <div className="p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C9A44C] text-[13px] font-medium">01</span>
                  <h3 className="text-[16px] md:text-[17px] font-semibold">Professional Business Profiling</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-3">
                  Media-style company profiles, executive interviews, and capability articles that present your business professionally to North American audiences. These are not advertisements — they are journalistic-style business features that communicate credibility through substance and presentation.
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Company profile articles suitable for trade publications</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Executive interviews and leadership spotlights</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Case study documentation of market entry achievements</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Industry commentary and thought leadership content</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C9A44C] text-[13px] font-medium">02</span>
                  <h3 className="text-[16px] md:text-[17px] font-semibold">Media Exposure Coordination</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-3">
                  Coordination of business media exposure through industry publications, business platforms, and professional networks. We identify appropriate channels, prepare content, and manage the publication process. Editorial decisions rest with the respective media outlets.
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Industry publication feature coordination</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Business platform profile development</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">LinkedIn and professional network content strategy</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Trade show and event coverage coordination</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C9A44C] text-[13px] font-medium">03</span>
                  <h3 className="text-[16px] md:text-[17px] font-semibold">Content Collaboration</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-3">
                  Collaborative content projects that position your expertise in front of North American business audiences. This includes co-developed industry reports, market insight articles, and educational content that demonstrates knowledge without direct promotion.
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Industry insight articles and market commentary</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Co-developed content with business media partners</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Educational content that demonstrates expertise</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Event recap and industry analysis articles</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C9A44C] text-[13px] font-medium">04</span>
                  <h3 className="text-[16px] md:text-[17px] font-semibold">Event and Presentation Support</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-3">
                  Content and coordination support for trade shows, industry conferences, business missions, and corporate events where professional presentation affects credibility and outcomes.
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Presentation material development and review</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Executive talking points and speech preparation</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">On-site event coordination and follow-up</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">Post-event content and relationship nurturing</li>
                </ul>
              </div>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              What CCBONLINE Does Not Guarantee
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-3">
                We do not guarantee specific media placement, article publication, or audience reach metrics. Editorial decisions are made independently by media outlets and publications. We do not engage in paid advertising, sponsored content placement, or audience buying.
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                What we guarantee is professional content quality, appropriate channel targeting, and diligent coordination. The decision to publish or feature rests with the respective media partners.
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Deliverables
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium">Professional company profile or executive interview article</strong> — publish-ready feature content</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium">Media exposure coordination plan</strong> — targeted channels and timeline</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium">Content collaboration proposals</strong> — identified opportunities for industry content partnerships</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium">Event content package</strong> — presentations, talking points, and follow-up materials</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium">Professional photography guidance</strong> — recommendations for executive portraits, facility photos, and product imagery that meet publication standards</li>
            </ul>

            <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px] inline-block">Discuss Media & Content Services</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">FAQ</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Common Questions
            </h2>
            <div className="space-y-3 mb-10">
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Which publications or media outlets do you work with?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">We coordinate with industry-specific trade publications, business media platforms, and professional networks relevant to your sector. We do not maintain exclusive partnerships with any single outlet. The right channels are selected based on your industry and target audience.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">How long does it take to get media exposure?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">Content preparation typically takes 2-3 weeks. Publication timelines vary by outlet — some publish within days, others have 1-3 month editorial calendars. We coordinate timing and set realistic expectations for each channel.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Can you help with trade show media coverage?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">Yes. We support trade show participation with pre-show content, on-site coordination, and post-show follow-up content including event recaps and lead nurturing materials.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Is this a one-time service or ongoing?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">Both. Some clients need a one-time profile for a specific market entry or event. Others prefer ongoing content support as their North American presence develops. We structure the engagement to match your stage and objectives.</p>
                </div>
              </details>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              Related Services
            </h2>
            <ul className="space-y-2">
              <li><Link to="/en/brand-credibility" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Brand Credibility & Digital Infrastructure Assessment</Link></li>
              <li><Link to="/en/website-content" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Bilingual Website & Content Optimization</Link></li>
              <li><Link to="/en/market-entry" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Canada & North America Market Entry</Link></li>
              <li><Link to="/en/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Contact CCBONLINE</Link></li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Building professional visibility in North America?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                Tell us about your industry, market stage, and visibility goals. We will assess the right media and content approach for your situation.
              </p>
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Discuss Media & Content Services</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
