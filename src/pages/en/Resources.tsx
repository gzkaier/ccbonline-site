import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

const checklists = [
  {
    title: 'Website Credibility Self-Assessment',
    desc: '10 key checks to quickly judge whether your website has the foundational elements needed to earn trust from North American buyers. Use this before requesting a formal diagnostic.',
    items: [
      'Does your homepage communicate "who you are, what you do, and why you are credible" within 5 seconds?',
      'Do you have specific client cases or proof of collaboration (not just "we have extensive experience")?',
      'Are product/service descriptions organized from the customer\'s perspective (not an internal feature list)?',
      'Does your FAQ cover the 5-10 most common buyer concerns?',
      'Is there a clear call-to-action (Contact, Get a Quote, etc.)?',
      'Is the English content free of obvious grammar or expression issues?',
      'Does the website display and function properly on mobile devices?',
      'Does the page load within 3 seconds?',
      'Are there third-party trust signals (media coverage, certifications, client reviews)?',
      'Is contact information complete (email, phone, address, LinkedIn)?',
    ],
  },
  {
    title: 'North America Market Entry Readiness Checklist',
    desc: '12 core preparation items to help you assess your conditions and gaps before entering the Canada/North America market.',
    items: [
      'Has your product passed required certifications for the target market (CSA/UL/FCC/ISED, etc.)?',
      'Have you arranged an Importer of Record (IOR)?',
      'Do you have professional English product documentation (specs, manuals, datasheets)?',
      'Does your website have the foundational elements to earn North American buyer trust?',
      'Do you understand the competitive landscape and pricing levels in your target market?',
      'Do you have a clear channel strategy (direct sales, agents, distribution, e-commerce)?',
      'Is your after-sales and warranty plan clearly defined?',
      'Have you arranged product liability insurance?',
      'Have you planned for local warehousing and logistics?',
      'Do you have a process for handling returns and customer complaints?',
      'Have you participated in trade shows or industry events in your target market?',
      'Do you have at least one local contact or service resource?',
    ],
  },
  {
    title: 'Pre-Trade Show Materials Checklist',
    desc: '10 essential pre-show items to help you maximize trade show results and avoid "great conversation at the booth, nothing happens after."',
    items: [
      'One-page English company profile',
      'Core product English materials (with Features + Benefits)',
      'Product samples or demo equipment',
      'Business cards (bilingual, with QR code and website link)',
      'Trade show FAQ (prepared answers to 10 common questions)',
      'Booth talking points and opening lines (3-5 versions)',
      'Client information collection form (structured inquiry record template)',
      'Post-show follow-up email templates (3 versions: high intent / medium / just browsing)',
      '7-day post-show follow-up plan (specific daily actions)',
      'LinkedIn profile optimized (prospects will look you up)',
    ],
  },
  {
    title: 'AI Visibility Basic Checklist',
    desc: '10 GEO and SEO foundational checks to assess whether your website is easily understood and cited by search engines and AI systems.',
    items: [
      'Does each page have one clear H1 heading?',
      'Does the page title (Title Tag) contain core keywords and stay under 60 characters?',
      'Does the Meta Description accurately describe the page content and stay under 160 characters?',
      'Does the website have a complete FAQ page (AI systems especially favor FAQ extraction)?',
      'Are structured data markup implemented (Schema.org FAQPage, Service, etc.)?',
      'Does the website have an XML Sitemap submitted to search engines?',
      'Does page loading speed meet Core Web Vitals standards?',
      'Does the website have a clear internal linking structure?',
      'Is company information consistent across platforms (website, LinkedIn, Google Business)?',
      'Are there third-party content (media coverage, industry articles) linking to your website?',
    ],
  },
]

export default function ENResources() {
  useSEO({
    title: 'Resources | Website Checklist, Market Entry, AI Visibility | CCBONLINE',
    description: 'Free self-assessment tools: Website Credibility Checklist, North America Market Entry Readiness, Pre-Trade Show Checklist, and AI Visibility Checklist.',
    canonical: 'https://www.ccbonline.ca/en/resources',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Resources | Website Checklist, Market Entry, AI Visibility | CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Resources</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              Self-Assessment Tools & Preparation Checklists
            </h1>
            <p className="text-white/60 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6">
              Four free checklists to help you assess your website, market readiness, trade show preparation, and AI visibility before requesting formal services.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[900px]">
            {checklists.map((list, idx) => (
              <div key={idx} className="mb-12 last:mb-0">
                <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-3">
                  {list.title}
                </h2>
                <p className="text-[15px] text-[#767676] leading-[1.65] mb-6">{list.desc}</p>
                <div className="bg-[#F8F9FA] border border-[#E5E5E5]">
                  {list.items.map((item, i) => (
                    <div key={i} className={`flex items-start gap-3 p-4 ${i !== list.items.length - 1 ? 'border-b border-[#E5E5E5]' : ''}`}>
                      <span className="text-[#D4AF37] text-[13px] font-medium shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                      <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <div className="p-6 md:p-8 bg-white border border-[#E5E5E5]">
              <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-4">
                More questions?
              </h2>
              <p className="text-[15px] text-[#444] leading-[1.65] mb-6">
                Check our <Link to="/en/faq" className="text-[#00B894] hover:underline">FAQ page</Link> or <Link to="/en/contact" className="text-[#00B894] hover:underline">contact us</Link> to book a consultation.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                After self-assessment, need a deeper evaluation?
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                Checklists are a starting point. If you find multiple items falling short, consider a Website & Materials Quick Audit (CAD 299-499) for targeted diagnostics and recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Book a Quick Audit</Link>
                <Link to="/en/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Explore All Services</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
