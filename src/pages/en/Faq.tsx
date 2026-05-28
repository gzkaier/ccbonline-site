import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

const faqCategories = [
  {
    label: 'General',
    faqs: [
      { q: 'What does CCBONLINE INC. do?', a: 'We are a business information and connection platform bridging Canada, North America, and China. We help businesses establish clearer commercial expression, digital credibility, and local connection capabilities across markets, languages, and trust systems. Core services include market entry diagnostics, brand credibility audits, AI visibility assessment, English content optimization, business media coverage, and local service resource connections.' },
      { q: 'How are you different from a web agency or marketing company?', a: 'We are not a web agency, ad firm, or export broker. We assess whether your website and business materials are ready for your target audience, diagnose issues, and provide optimization recommendations. Web development is execution; we focus on judgment, strategy, and content restructuring. We do not promise quick sales or guaranteed rankings.' },
      { q: 'Do you guarantee results?', a: 'No. We provide professional diagnostics, analysis, and recommendations. Market entry, client development, and brand building outcomes depend on product quality, market conditions, timing, and execution. We guarantee the professionalism of our judgment and the practicality of our advice. If a service provider promises you results, we recommend proceeding with caution.' },
      { q: 'How much do your services cost?', a: 'From CAD 299 for a Website & Materials Quick Audit to CAD 3,500+ for 30-Day Market Entry Launch Support. Pricing varies by service. We will provide specific pricing after understanding your needs. We recommend starting with lower-cost services to confirm direction before committing more.' },
      { q: 'How do we get started?', a: 'Book an initial consultation (free). We will understand your situation and recommend the right service. You can start with a Website & Materials Quick Audit (CAD 299) to find out whether buyers have a reason to trust you before spending more on promotion.' },
    ],
  },
  {
    label: 'Market Entry',
    faqs: [
      { q: 'Is my product suitable for the Canadian market?', a: 'It depends on product type, certification requirements, competition, and your readiness. Different categories have very different requirements: electrical products need CSA or cUL certification, wireless devices need ISED or FCC registration, building materials, consumer goods, and industrial equipment each have specific standards. Our diagnostic gives you an honest assessment.' },
      { q: 'What certifications are needed to enter Canada?', a: 'Common certifications include CSA (Canadian Standards Association), UL (Underwriters Laboratories), FCC (Federal Communications Commission), and ISED (Innovation, Science and Economic Development Canada). Requirements vary by product category. We will identify exactly what you need, how long it takes, and the cost.' },
      { q: 'What is an Importer of Record (IOR)?', a: 'An Importer of Record is the person or entity legally responsible for ensuring imported goods comply with all laws and regulations of the destination country. The IOR handles customs documentation, pays duties and taxes, and serves as the responsible party if regulators have questions. It is not just a customs formality — it is a legal identity with real liability. Without an IOR, goods cannot clear customs.' },
      { q: 'What should I prepare before a trade show?', a: 'English materials, product brochures, FAQs, business cards, samples, booth talking points, and a post-show follow-up plan. Many exhibitors collect business cards but lack structured follow-up. Our Trade Show Buyer Engagement Package helps you prepare pre-show materials and a post-show follow-up system.' },
      { q: 'What should I prepare before approaching distributors?', a: 'You need product documentation, pricing logic, after-sales plans, partnership terms, and channel support capabilities. Distributors evaluate more than your product — they look at margins, risk, after-sales support, marketing backing, and partnership terms. Without these clarified, it is hard to attract capable partners.' },
    ],
  },
  {
    label: 'Brand Credibility',
    faqs: [
      { q: 'What is a brand credibility audit?', a: 'We review your website and materials from a buyer\'s perspective to assess whether customers have reason to trust and choose you. We answer three core questions: Why should buyers trust you? Why choose you over competitors? Why contact you now? This is not brand packaging design — it is commercial trust building.' },
      { q: 'Why do visitors leave my website without contacting me?', a: 'Common reasons include: unclear purchase rationale, insufficient credibility signals (qualifications, case studies, client proof), weak differentiation from competitors, vague call-to-action paths, and incomplete FAQs. Our diagnostic identifies each issue and provides prioritized fix recommendations.' },
      { q: 'What do I get after the audit?', a: 'A brand credibility diagnostic report including: purchase rationale restructuring recommendations, homepage optimization plan, FAQ supplementation suggestions (8-15 items), competitor comparison analysis, and a prioritized fix checklist. You can execute based on the report yourself or engage us for further optimization.' },
      { q: 'Do you do VI design or advertising creative?', a: 'No. We focus on commercial expression and content strategy. We do not handle visual identity design, advertising creative, or social media operations. If you need these services, we can recommend qualified agencies.' },
    ],
  },
  {
    label: 'AI Visibility',
    faqs: [
      { q: 'What is GEO (Generative Engine Optimization)?', a: 'GEO is the practice of optimizing content so AI systems (such as ChatGPT, Perplexity, Google AI Overview) can understand and cite it. Unlike traditional SEO which targets search engine rankings, GEO focuses on whether content is clear, credible, and easily extractable and citable by AI systems.' },
      { q: 'What is the difference between SEO and GEO?', a: 'SEO targets traditional search engines (Google, Bing) to improve search rankings. GEO targets AI-powered search tools to ensure AI systems can understand, trust, and reference your content. Both require clear content structure, but GEO places greater emphasis on credibility signals and factual accuracy.' },
      { q: 'Can my website be mentioned by ChatGPT?', a: 'It depends on your content quality, structure, credibility, and third-party signals. If your website structure is disorganized, content is thin, or lacks credibility proof, AI systems will struggle to cite you. A GEO diagnostic can assess your readiness and provide specific improvement recommendations.' },
      { q: 'How long until I see GEO results?', a: 'Technical SEO improvements are typically visible within weeks. Content and authority improvements generally take 2-4 months. GEO visibility in AI assistants depends on how quickly AI systems index and begin citing your optimized content, usually 1-3 months after implementation.' },
    ],
  },
  {
    label: 'English Materials',
    faqs: [
      { q: 'Do you do translation?', a: 'We do not do simple translation. We do commercial expression reconstruction — reorganizing your content from the perspective of North American buyer cognition, decision logic, and trust factors. Grammatically correct translation does not equal commercially effective communication.' },
      { q: 'What is included in English materials optimization?', a: 'Company Profile, Services pages, Product Descriptions, FAQs (Frequently Asked Questions), Case Studies, How to Work With Us sections, and Email Templates. We cover the full range of content North American buyers expect to see.' },
      { q: 'What do you need from me?', a: 'Chinese company introduction, product materials, existing website links, target customer descriptions, and any existing English materials. We work from your source materials to reconstruct the commercial expression, rather than creating from scratch.' },
      { q: 'Can I use the optimized copy directly?', a: 'Yes. Our delivered English copy is professionally proofread and ready for use on websites, trade show materials, and email communication. However, we recommend that you or your team confirm content accuracy, especially technical parameters and product specifications.' },
    ],
  },
  {
    label: 'Media & Local Resources',
    faqs: [
      { q: 'What is business media coverage?', a: 'Professional reporting on your company, events, or services from a media perspective, creating publicly citable trust content. It is not advertising, not vanity metrics, but professional reporting based on verified information that helps you build trust assets in front of target customers.' },
      { q: 'Where will the coverage be published?', a: 'CCBONLINE website, WeChat official account, LinkedIn, and other platforms depending on content type and target audience. Content is published after client confirmation.' },
      { q: 'Do you handle customs clearance and logistics directly?', a: 'No. We help connect you with suitable local service providers and assist with communication. We have no exclusive partnerships or revenue sharing with service providers — recommendations are based on past collaboration experience and industry knowledge.' },
      { q: 'How do I know the connected service providers are reliable?', a: 'We recommend based on past collaboration experience, industry reputation, and service quality. However, the final choice is yours. We recommend communicating directly with service providers before signing to understand service details and pricing.' },
      { q: 'Is there a fee for connecting local resources?', a: 'Resource connection is included in some service packages (such as 30-Day Launch Support) and can also be purchased separately. Fees depend on the complexity of the connection and the number of service providers involved.' },
    ],
  },
  {
    label: 'E-commerce & SEO',
    faqs: [
      { q: 'Which e-commerce platforms do you optimize for?', a: 'Amazon, Etsy, Shopify, and independent stores. We optimize product titles, descriptions, FAQs, and purchase reasons to improve conversion rates and search visibility.' },
      { q: 'What is included in product page optimization?', a: 'Product titles (with keywords), product descriptions (Features + Benefits dual structure), FAQs (covering pre-purchase customer concerns), purchase reasons (Why Buy From Us), review response templates, SEO titles and descriptions.' },
      { q: 'Do you run Amazon ads?', a: 'No. We optimize product page content; advertising needs to be handled by another service provider or yourself. Good content is the foundation of advertising — if the product page is not optimized, ad performance will suffer too.' },
      { q: 'How long does e-commerce optimization take?', a: 'Product page copy optimization typically takes 1-2 weeks. SEO foundation work (including keyword research, structured data, internal links) typically takes 2-4 weeks. Ongoing content updates and optimization is a long-term effort.' },
    ],
  },
]

export default function ENFaq() {
  useSEO({
    title: 'FAQ | North America Market Entry, Brand Credibility, AI Visibility | CCBONLINE',
    description: 'CCBONLINE INC. frequently asked questions about North America market entry, brand credibility audit, AI visibility (SEO+GEO), English content optimization, business media, and e-commerce SEO.',
    canonical: 'https://www.ccbonline.ca/en/faq',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'FAQ | North America Market Entry, Brand Credibility, AI Visibility | CCBONLINE'
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
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px] mb-8">
              Organized by service category. If you cannot find your answer, contact us directly.
            </p>
            <div className="flex flex-wrap gap-2">
              {faqCategories.map((cat) => (
                <a
                  key={cat.label}
                  href={`#${cat.label}`}
                  className="text-[13px] px-3 py-1.5 bg-white border border-[#E5E5E5] hover:border-[#00B894] hover:text-[#00B894] transition-colors"
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            {faqCategories.map((cat) => (
              <div key={cat.label} id={cat.label} className="mb-10 scroll-mt-[80px]">
                <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-5">
                  {cat.label}
                </h2>
                <div className="space-y-3">
                  {cat.faqs.map((faq, i) => (
                    <details key={i} className="border border-[#E5E5E5] bg-[#F8F9FA]">
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
            ))}
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
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
