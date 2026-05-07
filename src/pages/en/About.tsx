import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'


export default function ENAbout() {
  useSEO({
    title: 'About CCBONLINE INC. | North America Market Entry Advisory',
    description: 'CCBONLINE INC. is a Canada-registered consulting firm based in Toronto, helping manufacturers, brands, and growth-stage businesses enter Canada and North America.',
    canonical: 'https://www.ccbonline.ca/en/about',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'About CCBONLINE INC. | North America Market Entry Advisory'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">About</p>
            <h1 className="font-serif text-[#212121] text-[28px] sm:text-[34px] md:text-[42px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              About CCBONLINE INC.
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#767676] max-w-[600px]">
              Canada-based market entry advisory and execution support company helping businesses enter Canada and North America.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
              <div className="md:col-span-4">
                <img
                  src="/images/about-ccbonline-team-consultation.jpg"
                  alt="CCBONLINE INC. team consultation in Toronto office, helping businesses plan North America market entry."
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-8">
                <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight mb-6">
                  Market Entry Advisory & Execution Support
                </h2>
                <p className="text-[16px] md:text-[17px] text-[#444] leading-[1.65] mb-4">
                  CCBONLINE INC. is a Canada-registered consulting and execution support company based in Toronto. We support manufacturers, brands, industrial suppliers, and growth-stage companies entering Canada and North America through structured market-entry diagnosis, compliance pathway design, channel validation, local partner coordination, and hands-on execution support.
                </p>
                <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] mb-5">
                  We are not a marketing agency, a web development shop, or a lead-generation platform. We are market-entry advisors who combine market judgment, compliance awareness, channel understanding, local resources, and execution discipline to help Chinese companies build real operations on the ground in North America.
                </p>
                <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65] mb-6">
                  Our work focuses on helping companies move from overseas interest to local execution by aligning market demand, compliance requirements, import responsibility, channel strategy, local operations, documentation, after-sales support, and project execution.
                </p>
                <div className="grid grid-cols-2 gap-3 text-[13px] md:text-[14px]">
                  <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                    <p className="text-[11px] text-[#999] uppercase mb-1">Founded</p>
                    <p className="font-medium">2020</p>
                  </div>
                  <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                    <p className="text-[11px] text-[#999] uppercase mb-1">Languages</p>
                    <p className="font-medium">Chinese / English</p>
                  </div>
                  <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                    <p className="text-[11px] text-[#999] uppercase mb-1">Location</p>
                    <p className="font-medium">84 Kenhar Dr, North York, ON M9L 1N2</p>
                  </div>
                  <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                    <p className="text-[11px] text-[#999] uppercase mb-1">Focus</p>
                    <p className="font-medium">Canada & North America</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                Ready to evaluate your North America readiness?
              </h2>
              <Link to="/en/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">Book a Consultation</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
