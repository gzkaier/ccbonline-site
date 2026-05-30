import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ENAbout() {
  useSEO({
    title: 'About CCBONLINE INC. | Why Us | Cross-Market Business Credibility & Connection',
    description: 'CCBONLINE INC. does not promise prettier packaging. We help businesses articulate the most commonly misunderstood, overlooked, or underestimated issues in cross-market collaboration between Canada, North America and China.',
    canonical: 'https://www.ccbonline.ca/en/about',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'About CCBONLINE INC. | Why Us | Cross-Market Business Credibility & Connection'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">About</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              Why CCBONLINE Can Do This
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px]">
              Our work is not about making businesses look better. It is about clarifying the issues most commonly misunderstood, overlooked, or underestimated in cross-market collaboration.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                What CCBONLINE Does Not Promise
              </h2>
              <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-6">
                <ul className="space-y-3">
                  <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">We do not replace lawyers, accountants, certification bodies, insurance brokers, or customs agents</li>
                  <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">We do not guarantee buyers, quick orders, or specific search rankings</li>
                  <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">We do not create fake reviews, exaggerated claims, or short-term traffic tricks</li>
                  <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">We do not just translate, write reports, or hand over a resource list</li>
                  <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">We do not sell one-size-fits-all packages</li>
                </ul>
              </div>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                CCBONLINE INC. focuses not on making businesses look better, but on helping them clarify the issues most commonly misunderstood, overlooked, or underestimated in cross-market collaboration. We do not focus on a single website, article, or campaign — we focus on what clients need to prepare when building commercial trust between Canada, North America and China: expression, materials, responsibility boundaries, and communication pathways.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Why A Kai Can Make This Judgment
              </h2>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">Technical Foundation</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">Understands website architecture, SEO, GEO, and AI visibility at a technical level. Can identify real issues without being swayed by tech vendors.</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">Bilingual Business Expression</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">Not translation — reorganization of commercial content from the perspective of North American buyer cognition and decision logic. Knows which terms are fine in Chinese but destroy credibility in English.</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">North American Local Business Context</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">Canada-registered company, Toronto-based operations. Understands compliance requirements, business conventions, client expectations, and the service provider ecosystem.</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">Content & Media Capabilities</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">Can help businesses build verifiable trust assets through business features, professional content, and public channels. Content must be found, understood, and cited.</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">Market Entry & Local Resource Connections</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">Knowledge of IOR, certification pathways, channel logic, and local service provider networks. Connects you with the right resources, not just a list of names.</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                CCBONLINE and A Kai Talks Chuhai
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                <strong>CCBONLINE INC.</strong> is the corporate entity handling service delivery, client engagement, and commercial execution. All paid services, formal contracts, diagnostic reports, and long-term support are delivered through CCBONLINE.
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                <strong>A Kai Talks Chuhai (阿凯聊出海)</strong> is a personal content brand for deep judgment, industry observation, and methodology sharing. Content on WeChat and LinkedIn builds pre-collaboration awareness of CCBONLINE's expertise.
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                Simply put: A Kai Talks Chuhai helps you know we understand; CCBONLINE INC. helps you get things done.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Our Method
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { step: '01', title: 'Initial Assessment', desc: 'Review your website, materials, target market, and current situation. Determine whether conditions are right to proceed.' },
                  { step: '02', title: 'Diagnostic Analysis', desc: 'Evaluate credibility, expression, pathways, resources, and risk gaps. Tell you what is ready and what needs work.' },
                  { step: '03', title: 'Optimization Design', desc: 'Reconstruct service expression, page content, English materials, FAQ, SEO and AI visibility foundations.' },
                  { step: '04', title: 'Implementation', desc: 'Based on your stage, move into content optimization, market entry support, service provider connections, or media coverage.' },
                ].map((item) => (
                  <div key={item.step} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                    <p className="text-[#D4AF37] text-[13px] font-medium mb-2">{item.step}</p>
                    <h3 className="text-[16px] font-semibold mb-2">{item.title}</h3>
                    <p className="text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 bg-[#0B0E14] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">Contact CCBONLINE INC.</h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                info@ccbonline.ca · +1 647 568 1128<br />
                84 Kenhar Dr, North York, ON M9L 1N2
              </p>
              <Link to="/en/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">Book a Call</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
