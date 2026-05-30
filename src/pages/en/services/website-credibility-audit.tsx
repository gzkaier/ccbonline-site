import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ENWebsiteCredibilityAudit() {
  useSEO({
    title: 'Website & Business Credibility Audit | Why Buyers Don\'t Contact | CCBONLINE',
    description: 'CCBONLINE provides professional website and business credibility audits. We do not check if your site looks pretty — we diagnose whether buyers understand you, trust you, and have a reason to contact you. Starting from CAD 299.',
    canonical: 'https://www.ccbonline.ca/en/services/website-credibility-audit',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = "Website & Business Credibility Audit | Why Buyers Don't Contact | CCBONLINE"
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Core Service</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              Why Buyers Visit Your Website But Never Contact You
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6">
              Most B2B websites fail not because of poor design, but because they do not answer three questions buyers actually ask: Who are you? Who do you serve? Why should I contact you now? Our audit does not review color schemes — it checks whether your trust chain is complete.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Book a Credibility Audit</Link>
              <Link to="/en/contact" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>Submit Your Website for Review</Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Credibility Audit Is Not a Design Review
            </h2>
            <div className="space-y-4 mb-10">
              <div className="pl-4 border-l-2 border-[#D4AF37]">
                <h4 className="font-semibold text-[15px] mb-1">What We Audit</h4>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">Whether your homepage conveys core value within 3 seconds; whether service descriptions address client problems or just list features; whether clear purchase rationale and differentiation exist; whether contact pathways are designed by client type; whether English reads like local business communication, not translation; whether FAQ covers real pre-sales questions; whether SEO and AI visibility foundations are in place.</p>
              </div>
              <div className="pl-4 border-l-2 border-[#00B894]">
                <h4 className="font-semibold text-[15px] mb-1">What We Do Not Do</h4>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">We do not redesign websites, change colors or layouts, do visual design, promise search rankings, or provide universal templates.</p>
              </div>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Audit Framework
            </h2>
            <div className="space-y-3 mb-10">
              {[
                { area: 'Homepage Trust', check: 'Can visitors grasp "who you are, who you serve, why you are credible" within 3 seconds?' },
                { area: 'Service Expression', check: 'Do you describe client problems or your feature list?' },
                { area: 'Purchase Rationale', check: 'Can buyers quickly find "why you instead of competitors"?' },
                { area: 'Social Proof', check: 'Are cases, clients, certifications, and data credible and verifiable?' },
                { area: 'Contact Pathway', check: 'Do different client types have appropriate next-step entry points?' },
                { area: 'English Expression', check: 'Does it read like North American business communication, not translation?' },
                { area: 'FAQ Coverage', check: 'Does it answer the questions pre-sales clients actually ask?' },
                { area: 'Search Visibility', check: 'Are titles, descriptions, and structures optimized for search engines and AI?' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <span className="text-[#D4AF37] text-[13px] font-medium shrink-0 w-28">{item.area}</span>
                  <span className="text-[14px] text-[#444] leading-[1.6]">{item.check}</span>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Who This Is For / Not For
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="space-y-3">
                <h4 className="font-semibold text-[15px] text-[#00B894]">Good Fit</h4>
                {[
                  'Canadian Chinese businesses seeking mainstream market entry',
                  'Chinese suppliers preparing for trade shows or client development',
                  'B2B companies with websites but low conversion rates',
                  'Companies planning SEO/GEO who need content architecture first',
                  'Export companies needing English material reconstruction',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#00B894] mt-0.5 shrink-0">✓</span>
                    <span className="text-[14px] text-[#444] leading-[1.6]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-[15px] text-[#999]">Not a Fit</h4>
                {[
                  'Looking for the cheapest website builder',
                  'Wanting visual redesign only',
                  'No website and no materials at all',
                  'Expecting guaranteed rankings after audit',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#999] mt-0.5 shrink-0">—</span>
                    <span className="text-[14px] text-[#767676] leading-[1.6]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Pricing & Deliverables
            </h2>
            <div className="space-y-4 mb-10">
              <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-[16px]">Website & Materials Quick Check</h4>
                  <span className="text-[#D4AF37] font-medium">CAD 299</span>
                </div>
                <p className="text-[14px] text-[#444] leading-[1.6]">You have a website and English materials, but are unsure whether visitors would contact you. Core issue list and priority recommendations delivered within 1 business day.</p>
              </div>
              <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-[16px]">Business Credibility Deep Audit</h4>
                  <span className="text-[#D4AF37] font-medium">CAD 800–1,500</span>
                </div>
                <p className="text-[14px] text-[#444] leading-[1.6]">Covers 8 dimensions: homepage, services, about, contact pathways, FAQ, English expression, SEO/AI visibility. Complete audit report + optimization recommendations + rewrite samples.</p>
              </div>
              <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-[16px]">North American Buyer Trust Package</h4>
                  <span className="text-[#D4AF37] font-medium">CAD 1,800–3,500</span>
                </div>
                <p className="text-[14px] text-[#444] leading-[1.6]">Reconstruct your company introduction into materials North American buyers can understand, trust, and act on. Includes one-pager, service descriptions, FAQ, and email templates.</p>
              </div>
            </div>

            <div className="p-6 bg-[#0B0E14] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[22px] mb-3">Not sure if you need an audit?</h3>
              <p className="text-white/60 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                Submit your website link for a free preliminary assessment. No charge, no sales pitch — just an honest assessment of where the problems are.
              </p>
              <Link to="/en/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">Submit Your Website</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
