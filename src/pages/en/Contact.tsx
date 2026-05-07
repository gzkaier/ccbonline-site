import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ENContact() {
  useSEO({
    title: 'Initial Market Entry Assessment | CCBONLINE INC.',
    description: 'Request a free initial assessment with CCBONLINE INC. We review your situation and respond within 1–2 business days with clear next steps for entering Canada and North America.',
    canonical: 'https://www.ccbonline.ca/en/contact',
    ogType: 'website',
    lang: 'en',
  })
  useEffect(() => {
    document.title = 'Initial Market Entry Assessment | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    company: '', name: '', email: '', phone: '', location: '',
    category: '', targetMarket: '', stage: '', challenge: '', question: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    
    // Build mailto link with form data
    const subject = encodeURIComponent(`Market Entry Assessment - ${formData.company}`)
    const body = encodeURIComponent(
      `Company: ${formData.company}\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'Not provided'}\n` +
      `Location: ${formData.location || 'Not provided'}\n` +
      `Product Category: ${formData.category}\n` +
      `Target Market: ${formData.targetMarket || 'Not selected'}\n` +
      `Current Stage: ${formData.stage || 'Not selected'}\n` +
      `Biggest Challenge: ${formData.challenge || 'Not selected'}\n` +
      `Additional Info: ${formData.question || 'None'}\n\n` +
      `--- Submitted via CCBONLINE INC. website ---`
    )
    const mailtoLink = `mailto:info@ccbonline.ca?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
  }

  const inputClass = 'w-full px-4 py-3 bg-white border border-[#E5E5E5] focus:border-[#212121]/30 outline-none text-[14px] placeholder:text-[#AAA]'

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
        {/* Hero */}
        <section className="relative pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/business-consultation-market-entry-discussion.jpg"
              alt="Business consultation for Canada and North America market entry planning."
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[#F8F9FA]/90" />
          <div className="relative z-10 container-site">
            <p className="text-label mb-3">Consultation</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[42px] leading-[1.3] tracking-tight max-w-[720px] mb-4">
              Request an Initial Market Entry Assessment
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#767676] max-w-[560px]">
              Tell us about your product and goals. We will review your situation and respond within 1–2 business days with a clear next step.
            </p>
          </div>
        </section>

        {/* When to reach out */}
        <section className="py-6 md:py-8 bg-[#F8F9FA] border-b border-[#E5E5E5]">
          <div className="container-site">
            <p className="text-label mb-3">When to Reach Out</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-white border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">You are exploring North America</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">Not sure if your product fits or which market to enter first.</p>
              </div>
              <div className="p-4 bg-white border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">You have tried before and stalled</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">Previous attempts failed. You need a structured restart plan.</p>
              </div>
              <div className="p-4 bg-white border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">You have a channel or customer but lack execution support</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">You need someone on the ground to coordinate operations.</p>
              </div>
              <div className="p-4 bg-white border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">You are not sure which service to start with</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">Submit your situation. We will recommend the right first step.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What happens after you submit */}
        <section className="py-8 md:py-10 bg-white border-b border-[#E5E5E5]">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">1. We review your situation</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">Our team reads your submission and matches your product, stage, and goals with the right assessment approach.</p>
              </div>
              <div className="p-4 border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">2. We respond within 1–2 days</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">You receive a structured reply: whether we can help, what service fits your stage, and what information we need next.</p>
              </div>
              <div className="p-4 border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">3. Optional follow-up call</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">If there is a fit, we schedule a 20–30 minute call to clarify your needs and outline a concrete work plan.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Left: Contact info + FAQ */}
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <h3 className="text-[14px] font-semibold mb-5">Contact Information</h3>
                  <div className="space-y-4 text-[13px]">
                    <div><p className="text-[12px] text-[#999]">Website</p><p>www.ccbonline.ca</p></div>
                    <div><p className="text-[12px] text-[#999]">Email</p><p>info@ccbonline.ca</p></div>
                    <div><p className="text-[12px] text-[#999]">Phone</p><p>+1 647 568 1128</p></div>
                    <div><p className="text-[12px] text-[#999]">Location</p><p>84 Kenhar Dr, North York, ON M9L 1N2</p></div>
                  </div>
                </div>

                <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h4 className="text-[13px] font-medium text-[#212121] mb-3">What this assessment covers</h4>
                  <ul className="space-y-2 text-[12px] text-[#666]">
                    <li>• Whether your product category fits the North American market</li>
                    <li>• Which stage you are at and what service matches</li>
                    <li>• High-level compliance and channel feasibility</li>
                    <li>• A recommended sequence of next steps</li>
                  </ul>
                  <p className="text-[11px] text-[#999] mt-3 italic">This is not a detailed audit. It is a directional assessment to help you decide whether to proceed and how.</p>
                </div>

                <div>
                  <h4 className="text-[13px] font-medium text-[#212121] mb-3">Common questions</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[12px] font-medium text-[#212121]">Is the initial assessment free?</p>
                      <p className="text-[12px] text-[#767676] leading-[1.6]">Yes. The first review and our written response are complimentary. Paid services begin only if you choose to proceed.</p>
                    </div>
                    <div>
                      <p className="text-[12px] font-medium text-[#212121]">Do I need to prepare documents?</p>
                      <p className="text-[12px] text-[#767676] leading-[1.6]">No. Just fill in what you know. If we need more, we will ask during follow-up.</p>
                    </div>
                    <div>
                      <p className="text-[12px] font-medium text-[#212121]">What if we are not ready yet?</p>
                      <p className="text-[12px] text-[#767676] leading-[1.6]">That is exactly why we offer the diagnosis service. We will tell you what is missing and whether it is worth prioritizing.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-8">
                <form onSubmit={handleSubmit} className="bg-[#F8F9FA] p-5 md:p-8">
                  {submitted ? (
                    <div className="text-center py-10">
                      <div className="w-10 h-10 bg-[#C00000] flex items-center justify-center mx-auto mb-4"><span className="text-white text-[16px]">✓</span></div>
                      <h3 className="text-[18px] font-semibold mb-2">Assessment Submitted</h3>
                      <p className="text-[13px] text-[#767676] mb-4">We have received your assessment request and will respond within 1–2 business days.</p>
                      <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5] mb-4 max-w-[400px] mx-auto">
                        <p className="text-[12px] text-[#666] mb-2">If your email client did not open automatically, you can also reach us directly:</p>
                        <p className="text-[14px] font-medium text-[#212121]">info@ccbonline.ca</p>
                        <p className="text-[13px] text-[#666]">+1 647 568 1128</p>
                      </div>
                      <p className="text-[12px] text-[#999]">While you wait, you can read our <Link to="/en/insights" className="text-[#C00000] hover:underline">market entry insights</Link> or review <Link to="/en/services" className="text-[#C00000] hover:underline">our services</Link>.</p>
                    </div>
                  ) : (
                    <>
                      <div className="mb-6">
                        <p className="text-[11px] font-medium uppercase tracking-wider text-[#999] mb-3">Market Entry Assessment Form <span className="text-[#C00000]">*</span> required</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="text" name="company" placeholder="Company Name *" required className={inputClass} value={formData.company} onChange={handleChange} />
                          <input type="text" name="name" placeholder="Your Name *" required className={inputClass} value={formData.name} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="email" name="email" placeholder="Business Email *" required className={inputClass} value={formData.email} onChange={handleChange} />
                          <input type="text" name="phone" placeholder="Phone / WeChat" className={inputClass} value={formData.phone} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="text" name="location" placeholder="Company Location (City, Country)" className={inputClass} value={formData.location} onChange={handleChange} />
                          <input type="text" name="category" placeholder="Product Category *" required className={inputClass} value={formData.category} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <select name="targetMarket" className={`${inputClass} text-[#555]`} value={formData.targetMarket} onChange={handleChange}>
                            <option value="">Target Market</option>
                            <option value="Canada">Canada</option>
                            <option value="United States">United States</option>
                            <option value="North America">North America (both)</option>
                            <option value="Not sure">Not sure yet</option>
                          </select>
                          <select name="stage" className={`${inputClass} text-[#555]`} value={formData.stage} onChange={handleChange}>
                            <option value="">Current Stage</option>
                            <option value="Exploring">Just exploring — no concrete plans yet</option>
                            <option value="Preparing">Actively preparing — need direction</option>
                            <option value="Already selling">Already selling — need better structure</option>
                            <option value="Stuck">Tried before — hit obstacles and paused</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-6">
                        <select name="challenge" className={`${inputClass} text-[#555]`} value={formData.challenge} onChange={handleChange}>
                          <option value="">Biggest current challenge (optional)</option>
                          <option value="Not sure where to start">Not sure where to start</option>
                          <option value="Compliance unclear">Compliance requirements are unclear</option>
                          <option value="No local contacts">No local contacts or channels</option>
                          <option value="Previous attempt failed">Previous attempt failed — need to restart</option>
                          <option value="Need execution support">Need someone on the ground to help execute</option>
                          <option value="Other">Other (describe below)</option>
                        </select>
                      </div>
                      <div className="mb-6">
                        <textarea name="question" placeholder="Anything else we should know? (product details, past attempts, timeline, budget range, etc.)" rows={4} className={`${inputClass} resize-none`} value={formData.question} onChange={handleChange} />
                      </div>
                      <button type="submit" className="btn-primary w-full sm:w-auto text-[15px] px-8 py-3.5 min-h-[52px]">Request Initial Assessment</button>
                      <p className="text-[11px] text-[#999] mt-3">By submitting, you agree to be contacted about your assessment. We do not share your information with third parties.</p>
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
