import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: 'Service Provider Showcase: Building Trust from Day One | Service Provider Network | CCBONLINE',
    description: "For Chinese companies entering North America, choosing reliable local service providers is key to success. Learn how to build trust through service provider showcases.",
    canonical: 'https://www.ccbonline.ca/en/insights/service-provider-showcase-trust-entry',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Service Provider Showcase: Building Trust from Day One | Service Provider Network | CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Service Provider Network</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              Service Provider Showcase: Building Trust from Day One
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>Reading time: ~6 min</span>
              <span>·</span>
              <span>Service Provider | Trust Building | Local Partnership | B2B Services</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                Entering a new market, the hardest part isn't finding customers—it's establishing credible local presence. For Chinese manufacturers without North American entities, partnering with reliable local service providers is an effective path to building this presence. But choosing the wrong service provider can be worse than having none at all.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            
            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Why Service Provider Selection Matters
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                Chinese manufacturers entering North America typically need multiple local service providers: logistics and warehousing, legal and accounting, marketing and sales support, product certification, after-sales service, etc. These providers are not just partners—in many customers' eyes, they are your "local representatives."

A professional, reliable service provider network can compensate for not having a local entity. Conversely, an unreliable provider damages your brand reputation and may create legal risks.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Service Provider Evaluation Framework
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                1. Industry experience and expertise: Look beyond marketing materials to understand their client base, projects handled, and specific experience in your industry.

2. Client references and reputation: Request 2-3 client references and contact them directly. Search for reviews and recommendations on LinkedIn.

3. Communication capability and responsiveness: Test response speed, communication quality, and understanding of your needs before formal engagement.

4. Contract terms and responsibility definitions: Clear scope of service, responsibility boundaries, service levels, and breach terms.

5. Experience working with Chinese clients: Providers with China experience typically better understand cultural differences and communication habits.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Final Thoughts
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                Selecting and managing local service providers is a critical topic for entering the North American market. Good providers are not just execution partners—they are extensions of your brand reputation.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <h3 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">Related Services</h3>
            <div className="space-y-3">
              
              <Link to="/en/services/local-execution-support" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">Local Service Provider Network</span>
                  <p className="text-[13px] text-[#767676] mt-1">Connect you with verified Canadian service providers</p>
                </div>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Learn →</span>
              </Link>

              <Link to="/en/services/advisory-retainer" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">Advisory Retainer</span>
                  <p className="text-[13px] text-[#767676] mt-1">Ongoing strategic guidance for North American market entry</p>
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
              
              <Link to="/en/insights/how-to-evaluate-local-service-providers" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">How to Evaluate Local Service Providers</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Read →</span>
              </Link>

              <Link to="/en/insights/b2b-credibility-factors" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">B2B Credibility Factors</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Read →</span>
              </Link>

            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">Need help with service provider network?</h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">We can help you navigate North American market entry with professional guidance.</p>
            <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Contact Us</Link>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
