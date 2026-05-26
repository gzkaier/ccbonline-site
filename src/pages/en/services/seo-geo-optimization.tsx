import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function EN_SeoGeoOptimization() {
  useSEO({
    title: 'SEO & GEO Optimization for B2B | AI Search Visibility | CCBONLINE INC.',
    description: 'SEO and Generative Engine Optimization (GEO) for B2B companies entering North America. Improve visibility in Google and AI-powered search tools.',
    canonical: 'https://www.ccbonline.ca/en/services/seo-geo-optimization',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'SEO & GEO Optimization for B2B | AI Search Visibility | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Digital Visibility</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              SEO & GEO Optimization
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              Traditional SEO for Google search plus Generative Engine Optimization (GEO) for AI-powered search tools — so your business is findable by both human searchers and AI assistants.
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
                A digital visibility service that combines traditional Search Engine Optimization (SEO) for Google with Generative Engine Optimization (GEO) for AI-powered search tools like ChatGPT, Perplexity, and Gemini. We do not guarantee first-page rankings or specific traffic numbers. We optimize your content, structure, and presence so that both search engines and AI systems can understand, reference, and recommend your business.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                Who This Is For
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Chinese manufacturers with English websites that are not appearing in relevant searches</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">B2B companies concerned about being left out of AI-generated recommendations</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Businesses that want their website to be cited as a source by AI assistants</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">Companies entering North America who understand that digital presence is a prerequisite for credibility</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                The Shift: From SEO to SEO + GEO
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                Traditional SEO focuses on ranking in Google's search results. But an increasing number of B2B buyers now use AI assistants (ChatGPT, Perplexity, Gemini, Copilot) to research suppliers, compare options, and shortlist vendors. These AI tools do not just retrieve pages — they synthesize answers from multiple sources and cite the businesses they consider authoritative.
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                If your website and content are not structured in ways that AI systems can understand and trust, you may be invisible to a growing segment of your target audience — even if your traditional SEO is decent.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                What We Specifically Do
              </h2>

              <h3 className="text-[17px] font-semibold mb-3 text-[#212121]">Traditional SEO</h3>
              <ul className="space-y-3 mb-6">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Technical SEO audit</strong> — Review of site structure, crawlability, page speed, mobile usability, and indexation issues</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Keyword strategy</strong> — B2B-focused keyword research targeting buyer-intent search terms relevant to your product and market</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">On-page optimization</strong> — Title tags, meta descriptions, heading structure, internal linking, and content optimization</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Content structure</strong> — Organization of content into topic clusters and pillar pages that search engines can easily understand</li>
              </ul>

              <h3 className="text-[17px] font-semibold mb-3 text-[#212121]">Generative Engine Optimization (GEO)</h3>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">AI readability audit</strong> — Assessment of whether your content is structured in ways that AI systems can parse, understand, and cite</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">E-E-A-T signal enhancement</strong> — Strengthening Experience, Expertise, Authoritativeness, and Trustworthiness signals across your digital presence</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Citation optimization</strong> — Ensuring your business name, credentials, and key facts are presented clearly for AI citation</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Structured data implementation</strong> — Schema markup and structured data that help AI systems understand your business type, location, and services</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">Content clarity improvement</strong> — Rewriting key pages for clarity, factual precision, and reduced ambiguity — all of which improve AI comprehension</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                Key Deliverables
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">SEO Technical Audit Report</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Comprehensive assessment of technical SEO issues with prioritized fix recommendations</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Keyword Strategy Document</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">B2B-focused keyword map with search intent classification and content assignment</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">GEO Readiness Assessment</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Evaluation of your content's AI-friendliness and specific improvement recommendations</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Content Optimization Plan</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Prioritized list of pages to optimize with specific changes for both SEO and GEO</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">Structured Data Implementation Guide</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Schema markup recommendations and implementation instructions</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                What We Do Not Guarantee
              </h2>
              <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0]">
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                  We do not guarantee specific rankings, traffic numbers, or that your business will be cited by AI assistants. SEO and GEO are ongoing efforts that depend on competition, content quality, technical implementation, and algorithm changes. What we guarantee is that your website and content will be better structured and more discoverable than before — by both search engines and AI systems.
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
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">What is the difference between SEO and GEO?</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">SEO (Search Engine Optimization) targets traditional search engines like Google, focusing on rankings in search results. GEO (Generative Engine Optimization) targets AI-powered search tools that synthesize answers from multiple sources. GEO emphasizes clarity, authority signals, and structured information that AI systems can understand and cite.</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">How long until we see results?</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">Technical SEO improvements can show impact within weeks. Content and authority improvements typically take 2-4 months. GEO visibility in AI assistants depends on how quickly AI systems index and begin citing your optimized content — usually 1-3 months after implementation.</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">Do you build websites?</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">No. We optimize existing websites for search engine and AI visibility. If you need a new website built, we can recommend web development partners and coordinate with them on SEO/GEO requirements.</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Related Resources
              </h2>
              <ul className="space-y-2">
                <li><Link to="/en/services/website-content-for-service-providers" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Website & Commercial Content Diagnosis →</Link></li>
                <li><Link to="/en/services" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">All Services →</Link></li>
                <li><Link to="/en/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">Contact CCBONLINE →</Link></li>
              </ul>
            </div>

            <div className="p-6 md:p-8 bg-[#07111F] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">
                Want to improve your visibility in search and AI?
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                We assess your current digital presence and recommend specific SEO and GEO improvements tailored to your business.
              </p>
              <Link to="/en/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">
                Request SEO/GEO Assessment
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
