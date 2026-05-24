import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

const faqs = [
  {
    q: 'What is Canada market entry advisory?',
    a: 'Canada market entry advisory is the structured work of assessing whether your product fits the Canadian market, designing the compliance and operational path, validating customer and partner channels, and coordinating local execution resources to turn market intent into real operations. It is not marketing, sales outsourcing, or website development.',
  },
  {
    q: 'How is market entry advisory different from sales outsourcing?',
    a: 'Sales outsourcing focuses on generating leads and closing deals. Market entry advisory focuses on whether you should enter, what needs to be in place before you enter, and how to build sustainable local operations. We help you understand the full responsibility chain — certification, import, warranty, insurance, after-sales — not just find buyers.',
  },
  {
    q: 'What is an Importer of Record (IOR)?',
    a: 'An Importer of Record (IOR) is the person or entity legally responsible for ensuring imported goods comply with all laws and regulations of the destination country. The IOR handles customs documentation, pays duties and taxes, and serves as the responsible party if regulators have questions. It is not just a customs formality — it is a legal identity with real liability.',
  },
  {
    q: 'Why does product certification matter before shipping?',
    a: 'Canadian and US customs can refuse entry to products without proper certification. Electrical products need CSA or cUL certification. Wireless devices need ISED (Canada) or FCC (US) registration. Food contact materials, children\'s products, and industrial equipment each have specific requirements. Certification takes time — often months — so planning before shipping is essential.',
  },
  {
    q: 'What should Chinese manufacturers prepare before entering Canada?',
    a: 'At minimum: professional English product documentation (specs, manuals, datasheets), a clear understanding of certification requirements for your product category, an IOR arrangement, basic market research on product fit and competition, and a realistic timeline that accounts for certification, partner development, and operational setup.',
  },
  {
    q: 'How does CCBONLINE support trade show follow-up?',
    a: 'We help with pre-show planning (buyer targeting, messaging adaptation), on-site coordination, and post-show follow-up systems. Many exhibitors collect business cards but lack structured outreach. We help turn trade show leads into qualified opportunities through adapted materials, local follow-up coordination, and relationship management.',
  },
  {
    q: 'What is website and content diagnosis for export-oriented businesses?',
    a: 'We review your existing website and product materials to assess whether North American buyers can quickly understand your offer, verify your credibility, and find the information they need. Common issues include incomplete English content, missing certifications, unclear product descriptions, and weak trust signals. We provide specific recommendations for improvement.',
  },
  {
    q: 'Does CCBONLINE provide legal, tax, or customs brokerage advice directly?',
    a: 'No. CCBONLINE INC. provides business advisory, market-entry coordination, documentation review, and partner communication support. We do not replace licensed legal, tax, customs brokerage, certification, insurance, or engineering professionals. When specialized advice is required, we help coordinate with qualified third-party professionals.',
  },
  {
    q: 'How does CCBONLINE work with local partners?',
    a: 'We maintain relationships with local service providers across logistics, warehousing, certification, legal, insurance, and channel development. Based on your project needs, we identify and coordinate with the right partners, help manage communications, and track progress to ensure accountability.',
  },
  {
    q: 'How long does a typical market entry project take?',
    a: 'It varies significantly by product category and ambition level. A basic market entry diagnosis takes 2–3 weeks. Full market entry preparation (certification, documentation, partner development) typically takes 3–6 months. Execution and ongoing coordination continue as long as needed.',
  },
  {
    q: 'What does the initial assessment cost?',
    a: 'The initial review and our written response are complimentary. This is a directional assessment to help you understand whether and how to proceed. If you choose to engage our paid services, we will provide a clear scope and pricing before any work begins.',
  },
  {
    q: 'What industries do you specialize in?',
    a: 'We work most frequently with manufacturers (electronics, industrial equipment, consumer goods), building materials suppliers, AI hardware companies, and professional service providers. However, our assessment framework applies to any business with a physical product or service seeking to enter Canada and North America.',
  },
]

export default function ENFaq() {
  useSEO({
    title: 'FAQ | Canada & North America Market Entry | CCBONLINE INC.',
    description: 'Common questions about Canada market entry advisory, Importer of Record (IOR), product certification, trade show follow-up, and how CCBONLINE INC. works with businesses.',
    canonical: 'https://www.ccbonline.ca/en/faq',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'FAQ | Canada & North America Market Entry | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">FAQ</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px]">
              Common questions about market entry advisory, compliance, local execution, and how we work with businesses entering Canada and North America.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <details key={i} className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">{faq.q}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                Still have questions?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                Submit your question along with your product and market information. We will review and respond with specific guidance.
              </p>
              <Link to="/en/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">Contact CCBONLINE</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
