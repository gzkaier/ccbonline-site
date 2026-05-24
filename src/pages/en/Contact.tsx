import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ENContact() {
  useSEO({
    title: 'Contact CCBONLINE INC. | Market Entry Diagnosis & Consultation',
    description: 'Request a market entry assessment with CCBONLINE INC. We review your product, target market, and current stage, then recommend the right next step for entering Canada and North America.',
    canonical: 'https://www.ccbonline.ca/en/contact',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Contact CCBONLINE INC. | Market Entry Diagnosis & Consultation'
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    company: '', name: '', email: '', phone: '', wechat: '',
    category: '', targetMarket: '', stage: '', challenge: '',
    hasEnglishMaterials: '', message: '', consent: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    if ('checked' in target) {
      setFormData({ ...formData, [target.name]: (target as HTMLInputElement).checked })
    } else {
      setFormData({ ...formData, [target.name]: target.value })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const subject = encodeURIComponent(`Market Entry Assessment - ${formData.company}`)
    const body = encodeURIComponent(
      `Company: ${formData.company}\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'N/A'}\n` +
      `WeChat: ${formData.wechat || 'N/A'}\n` +
      `Product Category: ${formData.category}\n` +
      `Target Market: ${formData.targetMarket || 'N/A'}\n` +
      `Current Stage: ${formData.stage || 'N/A'}\n` +
      `Biggest Challenge: ${formData.challenge || 'N/A'}\n` +
      `English Materials: ${formData.hasEnglishMaterials || 'N/A'}\n` +
      `Message: ${formData.message || 'N/A'}\n\n` +
      `--- Submitted via CCBONLINE INC. website ---`
    )
    window.location.href = `mailto:info@ccbonline.ca?subject=${subject}&body=${body}`
  }

  const inputClass = 'w-full px-4 py-3 bg-white border border-[#E5E5E5] focus:border-[#212121]/30 outline-none text-[14px] placeholder:text-[#AAA]'
  const selectClass = `${inputClass} text-[#555]`

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">Contact</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              Request a Market Entry Assessment
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px]">
              Tell us about your product and goals. We will review your situation and respond within 1–2 business days with a clear next step.
            </p>
          </div>
        </section>

        {/* When to reach out */}
        <section className="py-6 md:py-8 bg-white border-b border-[#E5E5E5]">
          <div className="container-site">
            <p className="text-label mb-3">When to reach out</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Exploring North America', desc: 'Not sure if your product fits or which market to enter first.' },
                { title: 'Tried before and stalled', desc: 'Previous attempts failed. You need a structured restart plan.' },
                { title: 'Have a lead but lack execution', desc: 'You need someone on the ground to coordinate operations.' },
                { title: 'Not sure which service fits', desc: 'Submit your situation. We will recommend the right first step.' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">{item.title}</p>
                  <p className="text-[12px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Boundary */}
        <section className="py-6 md:py-8 bg-[#F8F9FA] border-b border-[#E5E5E5]">
          <div className="container-site">
            <div className="max-w-[800px] p-5 bg-white border border-[#E5E5E5]">
              <p className="text-[13px] text-[#767676] leading-[1.7]">
                <strong className="text-[#212121]">Service scope:</strong> CCBONLINE INC. provides business advisory, market-entry coordination, documentation review, and partner communication support. We do not replace licensed legal, tax, customs brokerage, certification, insurance, or engineering professionals. When specialized advice is required, we may help coordinate with qualified third-party professionals.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Left: Contact info */}
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <h3 className="text-[14px] font-semibold mb-5">Contact Information</h3>
                  <div className="space-y-4 text-[13px]">
                    <div><p className="text-[12px] text-[#999]">Company</p><p className="font-medium">CCBONLINE INC.</p></div>
                    <div><p className="text-[12px] text-[#999]">Website</p><p>www.ccbonline.ca</p></div>
                    <div><p className="text-[12px] text-[#999]">Email</p><p>info@ccbonline.ca</p></div>
                    <div><p className="text-[12px] text-[#999]">Phone</p><p>+1 647 568 1128</p></div>
                    <div><p className="text-[12px] text-[#999]">Address</p><p>84 Kenhar Dr, North York, ON M9L 1N2, Canada</p></div>
                  </div>
                </div>
                <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h4 className="text-[13px] font-medium text-[#212121] mb-3">What happens after you submit</h4>
                  <ol className="space-y-2 text-[12px] text-[#666] list-decimal list-inside">
                    <li>We review your submission and match your situation with the right assessment approach.</li>
                    <li>We respond within 1–2 business days with a structured reply.</li>
                    <li>If there is a fit, we schedule a 20–30 minute call to clarify needs and outline a plan.</li>
                  </ol>
                  <p className="text-[11px] text-[#999] mt-3 italic">This is a directional assessment, not a detailed audit. We will tell you what is missing and whether it is worth prioritizing.</p>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-8">
                <form onSubmit={handleSubmit} className="bg-[#F8F9FA] p-5 md:p-8">
                  {submitted ? (
                    <div className="text-center py-10">
                      <div className="w-10 h-10 bg-[#00A884] flex items-center justify-center mx-auto mb-4"><span className="text-white text-[16px]">&#10003;</span></div>
                      <h3 className="text-[18px] font-semibold mb-2">Assessment Submitted</h3>
                      <p className="text-[13px] text-[#767676] mb-4">Thank you for contacting CCBONLINE INC. We will review your information and recommend an appropriate next step. For project-related inquiries, we may ask for additional product, documentation, or market information before offering specific advice.</p>
                      <div className="p-4 bg-white border border-[#E5E5E5] mb-4 max-w-[400px] mx-auto">
                        <p className="text-[12px] text-[#666] mb-2">If your email client did not open automatically:</p>
                        <p className="text-[14px] font-medium text-[#212121]">info@ccbonline.ca</p>
                        <p className="text-[13px] text-[#666]">+1 647 568 1128</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-[11px] font-medium uppercase tracking-wider text-[#999] mb-4">Market Entry Assessment <span className="text-[#00A884]">*</span> required</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        <input type="text" name="company" placeholder="Company Name *" required className={inputClass} value={formData.company} onChange={handleChange} />
                        <input type="text" name="name" placeholder="Your Name *" required className={inputClass} value={formData.name} onChange={handleChange} />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        <input type="email" name="email" placeholder="Business Email *" required className={inputClass} value={formData.email} onChange={handleChange} />
                        <input type="text" name="phone" placeholder="Phone" className={inputClass} value={formData.phone} onChange={handleChange} />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        <input type="text" name="wechat" placeholder="WeChat ID (optional)" className={inputClass} value={formData.wechat} onChange={handleChange} />
                        <input type="text" name="category" placeholder="Product / Service Category *" required className={inputClass} value={formData.category} onChange={handleChange} />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        <select name="targetMarket" className={selectClass} value={formData.targetMarket} onChange={handleChange}>
                          <option value="">Target Market</option>
                          <option value="Canada">Canada</option>
                          <option value="United States">United States</option>
                          <option value="North America">North America (both)</option>
                          <option value="Not sure">Not sure yet</option>
                        </select>
                        <select name="stage" className={selectClass} value={formData.stage} onChange={handleChange}>
                          <option value="">Current Stage</option>
                          <option value="Preparing">Preparing — need direction</option>
                          <option value="Already exporting">Already exporting — need better structure</option>
                          <option value="Received inquiries">Received inquiries — need local follow-up</option>
                          <option value="Attended trade show">Attended trade show — need follow-up</option>
                          <option value="Looking for partners">Looking for local partners</option>
                          <option value="Need website diagnosis">Need website / content diagnosis</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        <select name="challenge" className={selectClass} value={formData.challenge} onChange={handleChange}>
                          <option value="">Biggest Challenge (optional)</option>
                          <option value="Market fit">Market fit assessment</option>
                          <option value="Certification">Certification / compliance</option>
                          <option value="Import / IOR">Import / IOR arrangement</option>
                          <option value="Local channel">Local channel development</option>
                          <option value="Website / content">Website / English content</option>
                          <option value="Trade show follow-up">Trade show follow-up</option>
                          <option value="Partner coordination">Partner coordination</option>
                        </select>
                        <select name="hasEnglishMaterials" className={selectClass} value={formData.hasEnglishMaterials} onChange={handleChange}>
                          <option value="">English materials ready?</option>
                          <option value="Yes, complete">Yes, complete</option>
                          <option value="Partial">Partial — needs review</option>
                          <option value="No">No — need to prepare</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <textarea name="message" placeholder="Tell us about your product, past attempts, timeline, and what you need help with." rows={5} className={`${inputClass} resize-none`} value={formData.message} onChange={handleChange} />
                      </div>

                      {/* Consent checkbox */}
                      <div className="mb-4 flex items-start gap-2">
                        <input type="checkbox" name="consent" id="consent" checked={formData.consent} onChange={handleChange} className="mt-0.5" />
                        <label htmlFor="consent" className="text-[12px] text-[#666] leading-[1.6]">
                          I agree to receive updates from CCBONLINE INC. about Canada and North America market entry, business resources, events, and related services. I understand I can unsubscribe at any time.
                        </label>
                      </div>

                      <button type="submit" className="btn-primary w-full sm:w-auto text-[15px] px-8 py-3.5 min-h-[52px]">Submit Assessment</button>

                      {/* Form disclaimers */}
                      <div className="mt-4 space-y-2">
                        <p className="text-[11px] text-[#999] leading-[1.5]">
                          By submitting this form, you agree that CCBONLINE INC. may use the information provided to respond to your inquiry and assess the appropriate next step. Please do not submit confidential technical files, trade secrets, or sensitive personal information through this form.
                        </p>
                        <p className="text-[11px] text-[#999] leading-[1.5]">
                          We do not share your information with third parties. See our <Link to="/en/privacy" className="text-[#00A884] hover:underline">Privacy Policy</Link> and <Link to="/en/terms" className="text-[#00A884] hover:underline">Terms of Use</Link>.
                        </p>
                      </div>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="en" />
    </div>
  )
}
