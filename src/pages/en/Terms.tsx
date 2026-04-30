import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'


export default function ENTerms() {
  useSEO({
    title: 'Terms of Use | CCBONLINE INC.',
    description: 'Terms of use for CCBONLINE INC. market entry consulting services for businesses entering Canada and North America.',
    canonical: 'https://www.ccbonline.ca/en/terms',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Terms of Use | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px]">
        <div className="container-site max-w-[720px]">
          <p className="text-label mb-3">Legal</p>
          <h1 className="font-serif text-[#212121] text-[32px] md:text-[42px] leading-[1.3] tracking-tight mb-10">
            Terms of Use
          </h1>
          <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.7] mb-8">
            By accessing and using this website, you accept these terms. If you do not agree, please do not use this website.
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="text-[14px] font-semibold mb-2">No Legal or Tax Advice</h3>
              <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.7]">The content on this website is for informational purposes only and does not constitute legal, tax, or investment advice. Consult qualified professionals for advice specific to your situation.</p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-2">Service Description</h3>
              <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.7]">CCBONLINE INC. provides market entry consulting and coordination services. We do not guarantee specific business outcomes, sales, or revenue. Results depend on product quality, market conditions, and client execution.</p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-2">Intellectual Property</h3>
              <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.7]">All content on this website is the property of CCBONLINE INC. and protected by copyright laws. Unauthorized use or reproduction is prohibited.</p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-2">Limitation of Liability</h3>
              <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.7]">CCBONLINE INC. is not liable for any direct, indirect, or consequential damages arising from the use of this website or our services.</p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-2">Governing Law</h3>
              <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.7]">These terms are governed by the laws of the Province of Ontario, Canada.</p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-2">Changes to Terms</h3>
              <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.7]">We may update these terms at any time. Continued use of the website constitutes acceptance of the revised terms.</p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-2">Contact</h3>
              <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.7]">For questions about these terms, contact info@ccbonline.ca.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer lang="en" />
    </div>
  )
}
