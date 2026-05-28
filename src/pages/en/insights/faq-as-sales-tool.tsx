import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: "FAQ is Not Just Support—It's a Sales Tool | Brand Credibility | CCBONLINE",
    description: "FAQ pages reduce support workload and eliminate customer doubts at critical purchase decision moments. Learn how to transform FAQ into a sales tool.",
    canonical: 'https://www.ccbonline.ca/en/insights/faq-as-sales-tool',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = "FAQ is Not Just Support—It's a Sales Tool | Brand Credibility | CCBONLINE"
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">Brand Credibility</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              FAQ is Not Just Support—It's a Sales Tool
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>Reading time: ~6 min</span>
              <span>·</span>
              <span>FAQ | Sales Conversion | Customer Trust | B2B Marketing</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                Most companies treat FAQ as a way to reduce support workload. But in B2B purchase decisions, FAQ does much more. A well-designed FAQ can eliminate customer doubts, build trust, and directly drive conversions at critical moments.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            
            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                FAQ's Role in Purchase Decisions
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                B2B purchase decisions typically involve multi-round evaluation across departments. During this process, potential customers generate many specific questions: Does the product meet our specs? What certifications are supported? What's the delivery timeline? How's after-sales service?

If these questions can't be quickly answered on your website, customers have two options: send an email (adding friction) or leave and find a competitor (losing the opportunity). FAQ's role is to provide clear, credible answers the moment questions arise.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Sales FAQ vs. Support FAQ
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                Support FAQ focuses on operational questions: How to reset password? How to download invoices? These serve existing customers.

Sales FAQ focuses on purchase decision questions: What industries do you serve? What's the MOQ? Do you support customization? These serve potential customers and aim to remove purchase barriers.

Sales FAQ should be prominently placed on product pages, pricing pages, and contact pages—not buried in a help center.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Sales FAQ Content Framework
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                Product Fit: "Is your product suitable for XX industry/application?"

Compliance & Certification: "Does the product have CSA/UL/ISO certification?"

Customization: "Do you support OEM/ODM? What's the customization timeline?"

Pricing & Orders: "What's the MOQ? What are volume discounts?"

Delivery & Logistics: "What's the delivery timeline? What shipping methods are supported?"

After-sales & Support: "What's the warranty period? How does technical support work?"
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Final Thoughts
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                FAQ is the most underrated sales tool on your website. It doesn't require complex technology or large investment, but can play a crucial role at critical customer decision moments. Re-examine your FAQ page from a sales tool perspective rather than just a support tool.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <h3 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">Related Services</h3>
            <div className="space-y-3">
              
              <Link to="/en/services/website-content-for-service-providers" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">Website Content Strategy</span>
                  <p className="text-[13px] text-[#767676] mt-1">Professional website content planning including FAQ design and optimization</p>
                </div>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Learn →</span>
              </Link>

              <Link to="/en/services/advisory-retainer" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">Credibility Diagnosis</span>
                  <p className="text-[13px] text-[#767676] mt-1">Assess whether your website and FAQ effectively support purchase decisions</p>
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
              
              <Link to="/en/insights/why-faq-matters-for-ai" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">Why FAQ Matters for AI Search</span>
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
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">Need help with brand credibility?</h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">We can help you navigate North American market entry with professional guidance.</p>
            <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Contact Us</Link>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
