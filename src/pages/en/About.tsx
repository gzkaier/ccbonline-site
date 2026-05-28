import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ENAbout() {
  useSEO({
    title: 'About CCBONLINE INC. | Canada-China Business Credibility & Connection Platform',
    description: 'CCBONLINE INC. helps businesses build trusted cross-market presence between Canada, North America and China through market entry advisory, credibility audits, and local connections.',
    canonical: 'https://www.ccbonline.ca/en/about',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'About CCBONLINE INC. | Canada-China Business Credibility & Connection Platform'
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
              What CCBONLINE INC. Is
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px]">
              A business information and connection platform bridging Canada, North America, and China.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-8">
              CCBONLINE INC. is a business information and connection platform registered in the Greater Toronto Area, Canada. We are not a typical web agency, advertising company, training institution, or generic export service provider. Our core mission is to help businesses establish clearer commercial expression, digital credibility, and local connection capabilities across markets, languages, and trust systems.
            </p>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-8">
              Our clients include Chinese companies preparing to enter Canada and North America, North American businesses seeking to connect with Chinese supply chains, local Chinese-Canadian businesses and service providers, e-commerce sellers, B2B manufacturers, trade show and event organizers, and institutions requiring business media coverage and local connections.
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              About the Founder
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-8">
              The founder of CCBONLINE INC. is based in Toronto, Canada. He combines technical understanding, bilingual commercial expression, North American market experience, content distribution, and media capabilities to break complex cross-market challenges into assessable, expressible, actionable steps. He is not a traditional "consultant" in the conventional sense — he is a cross-market connector who combines judgment with execution.
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              How We Work
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { step: '01', title: 'Initial Assessment', desc: 'Review your current website, materials, target market, and challenges. Determine whether conditions are right.' },
                { step: '02', title: 'Diagnostic', desc: 'Evaluate credibility, expression, pathways, resources, and risk gaps. Tell you what is ready and what needs work.' },
                { step: '03', title: 'Optimization Design', desc: 'Restructure service expression, page content, English materials, FAQs, SEO and AI visibility foundations.' },
                { step: '04', title: 'Execution Support', desc: 'Based on your stage: content optimization, market entry coaching, service provider connection, or media coverage.' },
              ].map((item) => (
                <div key={item.step} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[#D4AF37] text-[13px] font-medium mb-2">{item.step}</p>
                  <h3 className="text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              What We Do Not Do
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">We do not replace licensed lawyers, accountants, certification bodies, insurance brokers, or customs brokers</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">We do not guarantee buyers, quick orders, or specific search rankings</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">We do not produce fake reviews, exaggerated claims, or short-term traffic tricks</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">We do not just translate, write reports, or provide a resource list and walk away</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">We do not sell one-size-fits-all packages or write universal solutions</li>
              </ul>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              Who We Partner With
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                'Chinese companies entering Canada and North America',
                'North American businesses connecting with Chinese supply chains',
                'Local Chinese-Canadian businesses and service providers',
                'E-commerce and independent store owners',
                'B2B manufacturers and suppliers',
                'Trade shows, events, and business associations',
                'Institutions requiring business media coverage',
                'Professional service providers seeking local connections',
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] text-[#444] leading-[1.6]">{item}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              Media & Event Partnership
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
              We welcome partnerships with business media, industry event organizers, business associations, and service institutions. CCBONLINE provides business reporting, event coverage, content strategy, and service showcases. We also offer content support and participant connections for event organizers.
            </p>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              If you have a partnership idea, please <Link to="/en/contact" className="text-[#00B894] hover:underline">contact us</Link> with the partnership type and basic information.
            </p>

            <div className="p-6 md:p-8 bg-[#0B0E14] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">Contact CCBONLINE INC.</h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                info@ccbonline.ca · +1 647 568 1128<br />
                84 Kenhar Dr, North York, ON M9L 1N2
              </p>
              <Link to="/en/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">Book a Consultation</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
