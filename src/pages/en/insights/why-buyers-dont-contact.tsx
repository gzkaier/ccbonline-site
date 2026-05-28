import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: 'Why Buyers Visit Your Website But Never Contact You | Brand Credibility | CCBONLINE',
    description: 'A website is not a display piece or a digital version of company materials. When North American buyers first encounter a business, the website serves as an initial assessment tool: who you are, who you serve, why you are credible, and how to contact you. If these questions are not answered clearly, traffic rarely converts into real inquiries.',
    canonical: 'https://www.ccbonline.ca/en/insights/why-buyers-dont-contact',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Why Buyers Visit Your Website But Never Contact You | Brand Credibility | CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Brand Credibility</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">Why Buyers Visit Your Website But Never Contact You</h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>~5 min read</span><span>·</span><span>Website Credibility | Brand Trust | B2B Conversion | Purchase Rationale</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">A website is not a display piece or a digital version of company materials. When North American buyers first encounter a business, the website serves as an initial assessment tool: who you are, who you serve, why you are credible, and how to contact you. If these questions are not answered clearly, traffic rarely converts into real inquiries.</p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[700px]">
            <div className="prose-content">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">Many businesses face this problem: the website exists, content is substantial, but customers do not reach out after visiting.</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">The business typically suspects insufficient traffic, poor design, or inaccurate keywords. These may contribute, but the more common issue is: the website does not answer the questions customers actually care about.</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">What Judgments Do Customers Make on Your Website?</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">When customers first land on a business website, they are not carefully studying every page. They are making quick initial judgments: What does this company actually do? Does it serve customers like me? Does it have real capabilities? How is it different from other suppliers? How do we start working together? Who is responsible if something goes wrong?</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">If these questions cannot be answered on the homepage, services page, product page, case studies, and contact page, customers will likely leave.</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">Not "Not Pretty Enough" — "Not Judgmental Enough"</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">Many business websites are not failing because they are "not pretty." They are failing because they are "not judgmental" — packed with company introductions, product parameters, development history, and slogans, yet customers still do not know why they should choose you.</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">B2B websites are especially vulnerable. Customers do not place orders based on a tagline. They build trust gradually through information: Is the company real? Are products clear? Are service boundaries defined? Are there cases? Is there local support? Are contact methods reliable? Is the communication pathway smooth?</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">The Core of Website Credibility</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">A website is not better because it is more complex or has more content. What truly matters is enabling customers to form a basic judgment within minutes: I understand. I know who it serves. I know what problems it solves. I know why I should continue the conversation. I know how to contact them.</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">This is the core of website credibility. If the website cannot accomplish this, all subsequent advertising, SEO, LinkedIn, trade shows, and customer development efforts will be undermined. Because you brought the customer in, but did not give them enough reason to continue.</p>
            </div>
            <div className="mt-10 p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3 text-[#212121]">Related Services</h3>
              <div className="space-y-2">
                                <Link to="/en/services/business-reason-credibility-diagnosis" className="block text-[14px] text-[#00B894] hover:underline">Brand Credibility Diagnostic →</Link>
                <Link to="/en/services/website-ai-visibility-diagnosis" className="block text-[14px] text-[#00B894] hover:underline">Website & AI Visibility Diagnostic →</Link>
                <Link to="/en/services/website-content-for-service-providers" className="block text-[14px] text-[#00B894] hover:underline">Website & Content Diagnostic →</Link>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link to="/en/insights/canada-market-entry-assess-first" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors"><span className="text-[12px] text-[#767676] block mb-1">Previous</span><span className="text-[14px] font-medium text-[#212121]">Canada Market Entry: Assess First, Act Second</span></Link>
              <Link to="/en/insights/seo-vs-geo-difference" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors"><span className="text-[12px] text-[#767676] block mb-1">Next</span><span className="text-[14px] font-medium text-[#212121]">SEO vs GEO: Differences, Connections, and Response</span></Link>
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
