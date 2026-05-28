import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: 'B2B Credibility: Why Should Customers Trust You | Brand Credibility | CCBONLINE',
    description: "In the North American B2B market, customers look beyond price and product. This article analyzes the core factors influencing B2B credibility and helps Chinese manufacturers understand North American buyer decision logic.",
    canonical: 'https://www.ccbonline.ca/en/insights/b2b-credibility-factors',
    ogType: 'article',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'B2B Credibility: Why Should Customers Trust You | Brand Credibility | CCBONLINE'
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
              B2B Credibility: Why Should Customers Trust You
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>Reading time: ~7 min</span>
              <span>·</span>
              <span>B2B Credibility | Brand Trust | Buyer Decision | Chinese Manufacturing</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                In the North American B2B market, customer decisions are rarely made by one person—they involve multi-department, multi-round evaluation processes. Your product may be competitive, but if credibility isn't established, even the best price won't win over customers.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Credibility is Not Brand Awareness
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                Many Chinese manufacturers confuse brand awareness with brand credibility. Awareness is being known; credibility is being trusted. A new Chinese brand entering North America may have zero awareness, but credibility can start building from the first interaction.

The core question of credibility is: when a customer first hears about you, visits your website, or receives your email, they need to quickly answer—"Is this company reliable?" The answer determines whether they're willing to invest more time in learning about you.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Six Core Factors Affecting B2B Credibility
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                1. Website Professionalism: North American B2B buyers almost always visit supplier websites. A poorly designed, incomplete, or grammatically incorrect English website destroys credibility instantly.

2. Third-party Endorsements: Industry certifications, media coverage, association memberships, partner logos, and client testimonials carry more weight than self-promotion.

3. Response Speed and Communication Quality: North American customers expect email responses within 24 hours. Delayed responses signal unprofessionalism.

4. Local Presence and Accessibility: Having a North American address, local phone number, or time-zone-friendly support hours significantly boosts credibility.

5. Product Documentation Quality: Spec sheets, installation guides, safety data sheets reflect your company's professionalism. Translation errors and formatting issues raise doubts about product quality.

6. After-sales Commitment: Clear warranty policies, defined service processes, and enforceable return/exchange terms demonstrate credibility in concrete ways.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Common Credibility Mistakes
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] whitespace-pre-line">
                Mistake 1: Only emphasizing price advantage — Price-sensitive customers are often the hardest to build long-term relationships with.

Mistake 2: Website has only products, no story — Pure product listings don't build emotional connections. Customers want to know who you are and why you do what you do.

Mistake 3: Neglecting small customer experiences — Today's small customers may be tomorrow's large ones. Every touchpoint builds or depletes credibility.

Mistake 4: English materials with obvious errors — Translation errors and Chinglish seriously damage professional image.
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                Final Thoughts
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                B2B credibility is not built overnight but can be destroyed in an instant. Every customer interaction—website visit, email exchange, sample delivery, after-sales support—deposits or withdraws from your credibility account. For Chinese manufacturers entering North America, systematically building B2B credibility may be more important than optimizing product prices.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <h3 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">Related Services</h3>
            <div className="space-y-3">

              <Link to="/en/services/advisory-retainer" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">Credibility Diagnosis</span>
                  <p className="text-[13px] text-[#767676] mt-1">Assess your brand credibility and purchase rationale clarity from a North American buyer's perspective</p>
                </div>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Learn →</span>
              </Link>

              <Link to="/en/services/website-content-for-service-providers" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">English Materials Optimization</span>
                  <p className="text-[13px] text-[#767676] mt-1">Make your English website, product manuals, and communication materials more professional</p>
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

              <Link to="/en/insights/why-buyers-dont-contact" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">Why Buyers Don't Contact After Visiting Your Website</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Read →</span>
              </Link>

              <Link to="/en/insights/purchase-rationale-clarity" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">Purchase Rationale Clarity</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">Read →</span>
              </Link>

              <Link to="/en/insights/is-your-website-in-chatgpt" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">Website Credibility Checklist</span>
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
