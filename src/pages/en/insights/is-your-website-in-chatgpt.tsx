import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: 'Is Your Website Mentioned by ChatGPT | AI Visibility & GEO | CCBONLINE',
    description: 'Many businesses are starting to wonder why AI does not mention them when answering industry questions. The answer usually lies not in a single keyword, but in whether information is public, clear, consistent, and verifiable. Businesses need to first make their website and external content understandable.',
    canonical: 'https://www.ccbonline.ca/en/insights/is-your-website-in-chatgpt',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Is Your Website Mentioned by ChatGPT | AI Visibility & GEO | CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">AI Visibility & GEO</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">Is Your Website Mentioned by ChatGPT</h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>~5 min read</span><span>·</span><span>AI Visibility | ChatGPT | GEO | Website Optimization | Brand Credibility</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">Many businesses are starting to wonder why AI does not mention them when answering industry questions. The answer usually lies not in a single keyword, but in whether information is public, clear, consistent, and verifiable. Businesses need to first make their website and external content understandable.</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[700px]">
            <div className="prose-content">
              <p className="text-[15px] md:text-[16px] text-[#767676] leading-[1.7] mb-6 italic">The English version of this article is being prepared. Please refer to the <Link to="/zh/insights/is-your-website-in-chatgpt" className="text-[#00B894] hover:underline">Chinese version</Link> for the full content, or contact us for a summary.</p>
            </div>
            <div className="mt-10 p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3 text-[#212121]">Related Services</h3>
              <div className="space-y-2">
                <Link to="/en/services" className="block text-[14px] text-[#00B894] hover:underline">Explore Our Services →</Link>
                <Link to="/en/contact" className="block text-[14px] text-[#00B894] hover:underline">Contact Us →</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">Was this article helpful?</h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">If you are considering entering the Canadian or North American market, submit your website or company introduction for an initial assessment.</p>
            <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Book a Consultation</Link>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
