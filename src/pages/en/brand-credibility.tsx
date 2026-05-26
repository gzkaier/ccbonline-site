import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function EN_BrandCredibility() {
  useSEO({
    title: 'Brand Credibility & Digital Infrastructure Assessment | CCBONLINE INC.',
    description: 'CCBONLINE evaluates how Chinese companies present themselves digitally to North American buyers. Website review, trust signal assessment, and digital readiness for market entry.',
    canonical: 'https://www.ccbonline.ca/en/brand-credibility',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Brand Credibility & Digital Infrastructure Assessment | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Brand & Digital</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[40px] leading-[1.25] tracking-tight max-w-[860px] mb-4">
              Brand Credibility and Digital Infrastructure Assessment
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              Before North American buyers will engage with you, they check your website, review your materials, and look for credibility signals. We assess whether your digital presence supports or undermines that trust.
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
              A structured evaluation of how your company appears to North American business audiences through your digital presence. We review your website, social media profiles, product documentation, and online materials against the trust signals that North American buyers, distributors, and partners typically look for. The output is a prioritized improvement plan — not a marketing makeover, but a practical list of what to fix, why it matters, and what order to do it in.
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Who This Service Is For
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Chinese companies preparing to enter North America whose website and digital materials were built for domestic audiences</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Businesses that have invested in product development and certification but have not updated their digital presence for Western buyers</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Leadership teams receiving feedback that North American prospects "looked at the website but were not sure"</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Companies that want to understand what credibility signals North American buyers expect before investing in website redesign</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              What Problem It Solves
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
              North American buyers research suppliers online before responding to emails or taking meetings. If your website loads slowly, lacks clear service descriptions, has no verifiable contact information, or communicates primarily in Chinese, many qualified prospects will disengage before you ever speak with them.
            </p>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              The problem is not that your product is inadequate. It is that your digital infrastructure does not communicate the credibility you have already built. This service identifies those gaps specifically and practically.
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              What We Review
            </h2>
            <div className="space-y-4 mb-10">
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h3 className="text-[15px] font-semibold mb-2">Website Structure and Clarity</h3>
                <p className="text-[14px] text-[#555] leading-[1.65]">Can a first-time visitor understand what you do, who you serve, and how to contact you within 30 seconds? We assess navigation, messaging hierarchy, and information architecture from a North American buyer perspective.</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h3 className="text-[15px] font-semibold mb-2">Trust Signal Presence</h3>
                <p className="text-[14px] text-[#555] leading-[1.65]">Do you display certifications, client references, case results, team credentials, physical addresses, and professional affiliations? North American buyers look for these signals to validate legitimacy before engaging.</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h3 className="text-[15px] font-semibold mb-2">English Content Quality</h3>
                <p className="text-[14px] text-[#555] leading-[1.65]">Is your English content written for native speakers or translated literally? We assess tone, terminology, clarity, and whether your value proposition comes through effectively.</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h3 className="text-[15px] font-semibold mb-2">Contact and Inquiry Path</h3>
                <p className="text-[14px] text-[#555] leading-[1.65]">Can prospects easily find your contact information, submit an inquiry, or schedule a conversation? We review the inquiry path from discovery to contact submission.</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h3 className="text-[15px] font-semibold mb-2">Social Media and Third-Party Presence</h3>
                <p className="text-[14px] text-[#555] leading-[1.65]">Do you have a LinkedIn company page, industry directory listings, or third-party references that North American buyers can find? We assess your discoverability beyond your own website.</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h3 className="text-[15px] font-semibold mb-2">Mobile Experience and Technical Performance</h3>
                <p className="text-[14px] text-[#555] leading-[1.65]">Page load speed, mobile responsiveness, and SSL/security indicators matter to business buyers. We flag technical issues that affect credibility.</p>
              </div>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Deliverables
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">Digital Credibility Assessment Report</strong> — Structured review across six dimensions with specific findings</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">Prioritized Improvement Plan</strong> — What to fix first, second, and third, with rationale for each priority level</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">Specific Issue List with Examples</strong> — Concrete items flagged during review, with references to North American buyer expectations</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">Competitive Benchmark Notes</strong> — How your digital presence compares to 2-3 comparable companies already in the North American market</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">Implementation Guidance</strong> — Recommended sequence and resource requirements for addressing identified gaps</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              What CCBONLINE Does Not Do
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                We do not build websites, design logos, or manage social media accounts directly. We assess, diagnose, and provide a structured improvement plan. If you need website development, branding, or ongoing social media management, we can recommend specialists. Our role is to tell you what needs fixing and why — not to execute the fix ourselves.
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              How It Works
            </h2>
            <div className="space-y-4 mb-10">
              <div className="flex gap-4">
                <span className="text-[#C9A44C] text-[14px] font-medium shrink-0 w-6">01</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">Information gathering</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">You provide your website URL, social media links, product materials, and any existing English content. This takes 15-20 minutes.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#C9A44C] text-[14px] font-medium shrink-0 w-6">02</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">Structured review</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">We conduct a systematic assessment across the six review areas, typically completed within 5-7 business days.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#C9A44C] text-[14px] font-medium shrink-0 w-6">03</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">Report delivery and walkthrough</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">We deliver the written assessment and schedule a 60-minute call to walk through findings, answer questions, and discuss implementation priorities.</p>
                </div>
              </div>
            </div>

            <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px] inline-block">Request an Assessment</Link>
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
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Do you redesign our website?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">No. We assess and provide a structured improvement plan. If you need website redesign, we can recommend capable partners. Our value is in the diagnosis — knowing what to fix and in what order.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">How is this different from a website audit?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">A typical website audit focuses on SEO and technical performance. Our assessment focuses on credibility and trust signals from a North American buyer perspective — whether your digital presence supports business engagement, not just search rankings.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Can you assess B2B and B2C digital presence?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">Yes. We tailor the assessment based on whether you are selling to businesses, distributors, specifiers, or end consumers. The credibility signals differ by audience type.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">What if we do not have a website yet?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">We can assess your existing digital materials — product sheets, social media profiles, directory listings — and provide recommendations for what a credible initial web presence should include.</p>
                </div>
              </details>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              Related Services
            </h2>
            <ul className="space-y-2">
              <li><Link to="/en/website-content" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Bilingual Website & Content Optimization</Link></li>
              <li><Link to="/en/media-content" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Media & Business Content Services</Link></li>
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
                Is your digital presence building trust with North American buyers?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                Request a Brand Credibility and Digital Infrastructure Assessment. Know exactly what to fix and why.
              </p>
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Request an Assessment</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
