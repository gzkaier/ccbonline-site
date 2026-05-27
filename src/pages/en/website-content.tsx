import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function EN_WebsiteContent() {
  useSEO({
    title: 'Bilingual Website & Commercial Content Optimization | CCBONLINE INC.',
    description: 'CCBONLINE helps Chinese companies and local service providers build credible bilingual websites and commercial content for Canada and North American markets.',
    canonical: 'https://www.ccbonline.ca/en/website-content',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Bilingual Website & Commercial Content Optimization | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Website & Content</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[40px] leading-[1.25] tracking-tight max-w-[860px] mb-4">
              Bilingual Website and Commercial Content Optimization
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              Chinese and English website content, service messaging, and trust materials — organized for North American business audiences and bilingual client bases.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              What This Service Is
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
              A content development service that organizes your website, service descriptions, and commercial materials into clear, credible communication systems. We work with two distinct client types: Chinese companies entering North America that need English content adapted for Western business audiences, and local North American professional service firms that need bilingual (Chinese/English) content to serve diverse client bases.
            </p>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              We do not replace web developers or marketing agencies. We focus on the content layer — what your website says, how it says it, and whether it builds trust with the people who read it.
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Two Client Scenarios We Serve
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              <div className="p-5 md:p-6 border border-[#00B894] bg-white">
                <h3 className="text-[16px] md:text-[17px] font-semibold mb-3 text-[#00B894]">Scenario A: Chinese Companies Entering North America</h3>
                <p className="text-[14px] text-[#444] leading-[1.7] mb-3">
                  You have a Chinese website, product documentation, and company materials. You need English versions that communicate credibly to North American buyers — not just translated, but adapted for Western business conventions.
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00B894]">English website content adapted for North American business readers</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00B894]">Service descriptions that match Western purchasing expectations</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00B894]">Company profiles, case studies, and capability statements</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00B894]">FAQ content addressing North American buyer concerns</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 border border-[#D4AF37] bg-white">
                <h3 className="text-[16px] md:text-[17px] font-semibold mb-3 text-[#D4AF37]">Scenario B: Local Firms Serving Bilingual Clients</h3>
                <p className="text-[14px] text-[#444] leading-[1.7] mb-3">
                  You are a local professional service firm (tax, insurance, logistics, legal, consulting) serving both English-speaking and Chinese-speaking clients in Canada or the U.S. Your website needs to communicate clearly in both languages.
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#D4AF37]">Bilingual service pages with consistent messaging</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#D4AF37]">Trust materials adapted for both cultural contexts</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#D4AF37]">FAQ sections addressing questions from both language groups</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#D4AF37]">Content repurposed for brochures, social media, and email</li>
                </ul>
              </div>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Six Content Modules
            </h2>
            <div className="space-y-4 mb-10">
              <div className="flex gap-4 items-start">
                <span className="text-[#D4AF37] text-[13px] font-medium shrink-0 mt-1">01</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">Service positioning and messaging</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">Clarify who you serve, what problems you solve, and what differentiates you — expressed in language your target audience understands.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-[#D4AF37] text-[13px] font-medium shrink-0 mt-1">02</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">Website page structure and copy</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">Homepage, service pages, about section, FAQ, and contact pages organized for clarity and conversion.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-[#D4AF37] text-[13px] font-medium shrink-0 mt-1">03</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">Trust-building materials</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">Credentials, case experience, team backgrounds, certifications, and process descriptions presented to build visitor confidence.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-[#D4AF37] text-[13px] font-medium shrink-0 mt-1">04</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">Bilingual content coordination</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">Chinese and English versions that say the same thing effectively — not word-for-word translation, but equivalent communication.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-[#D4AF37] text-[13px] font-medium shrink-0 mt-1">05</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">Multi-channel content extension</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">Website content repurposed into service brochures, LinkedIn posts, email templates, and client follow-up documents.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-[#D4AF37] text-[13px] font-medium shrink-0 mt-1">06</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">Ongoing content refinement</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">FAQ updates, service description adjustments, case study additions, and seasonal content as your business evolves.</p>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              What You Receive
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {[
                'Service page copy (English and/or Chinese)',
                'Homepage messaging and structure',
                'About / team introduction content',
                'FAQ addressing common buyer questions',
                'Contact page and inquiry flow recommendations',
                'Service brochure content',
                'Social media post templates',
                'Email outreach templates',
                'Google Business Profile optimization notes',
                'Content style guide for consistency',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <span className="text-[#00B894] mt-0.5 shrink-0 text-[13px]">&#10003;</span>
                  <p className="text-[14px] text-[#444] leading-[1.5]">{item}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              What CCBONLINE Does Not Replace
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                We do not build or host websites, design visual interfaces, or manage SEO campaigns. We create content — the words, structure, and messaging that go into your website and commercial materials. If you need web development or graphic design, we can coordinate with technical partners. Our deliverable is content that is ready to publish, not the published site itself.
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              How It Starts
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
              Typically with a 30-minute conversation about your business, current materials, target audience, and language requirements. We then propose a content scope and timeline. Most projects begin within one week of the initial call.
            </p>
            <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px] inline-block">Discuss Your Content Needs</Link>
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
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Do you build websites or just write content?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">We write content. If you need a website built, we can recommend technical partners. Our core deliverable is publish-ready content — structured copy, messaging frameworks, and content systems.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Is the content translation or original writing?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">It is contextual adaptation — not literal translation. We write content that communicates the same meaning effectively in each language and cultural context. A Chinese buyer and a North American buyer may need to hear different things to reach the same conclusion about your capabilities.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">How long does a typical content project take?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">A standard service website with 4-6 pages typically takes 2-3 weeks. Larger projects with bilingual requirements and multi-channel extensions may take 4-6 weeks. Timeline depends on material availability and revision cycles.</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Do you guarantee leads or client inquiries?</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">No. We improve the quality and clarity of your communication. Lead generation depends on your market conditions, outreach efforts, service quality, and competitive positioning. We make you easier to understand and trust — we do not guarantee business outcomes.</p>
                </div>
              </details>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              Related Services
            </h2>
            <ul className="space-y-2">
              <li><Link to="/en/brand-credibility" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">Brand Credibility & Digital Infrastructure Assessment</Link></li>
              <li><Link to="/en/media-content" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">Media & Business Content Services</Link></li>
              <li><Link to="/en/market-entry" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">Canada & North America Market Entry</Link></li>
              <li><Link to="/en/contact" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">Contact CCBONLINE</Link></li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Need clearer website content for North American or bilingual audiences?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                Tell us about your current materials, target audience, and language requirements. We will assess the right content scope for your situation.
              </p>
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Discuss Your Content Needs</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
