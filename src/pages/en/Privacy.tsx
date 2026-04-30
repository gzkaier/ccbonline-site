import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ENPrivacy() {
  useEffect(() => {
    document.title = 'Privacy Policy | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px]">
        <div className="container-site max-w-[720px]">
          <p className="text-label mb-3">Legal</p>
          <h1 className="font-serif text-[#212121] text-[32px] md:text-[42px] leading-[1.3] tracking-tight mb-10">
            Privacy Policy
          </h1>
          <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.7] mb-8">
            CCBONLINE INC. is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal information.
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="text-[14px] font-semibold mb-2">Information We Collect</h3>
              <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.7]">We collect information you provide through our contact form, including company name, contact details, product category, and market entry goals. We do not collect payment information.</p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-2">How We Use Your Information</h3>
              <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.7]">We use your information to respond to inquiries, provide market entry consulting services, and communicate about project progress. We do not sell or share your information with third parties for marketing purposes.</p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-2">Data Security</h3>
              <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.7]">We implement reasonable security measures to protect your data. However, no internet transmission is completely secure.</p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-2">Contact</h3>
              <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.7]">For privacy questions, contact info@ccbonline.ca.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer lang="en" />
    </div>
  )
}
