import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ENContact() {
  useEffect(() => {
    document.title = 'Market Entry Consultation | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    company: '', name: '', email: '', phone: '', location: '',
    category: '', targetMarket: '', stage: '', question: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = 'w-full px-4 py-3 bg-white border border-[#E5E5E5] focus:border-[#212121]/30 outline-none text-[14px] placeholder:text-[#AAA]'

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="en" />
      <main>
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
            <p className="text-label mb-3">Contact</p>
            <h1 className="font-serif text-[#212121] text-[32px] md:text-[42px] leading-[1.3] tracking-tight max-w-[700px] mb-4">
              Discuss Your Market Entry Plan
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#767676] max-w-[520px]">
              Share your situation and we will respond with a clear next step.
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <h3 className="text-[14px] font-semibold mb-5">Contact Information</h3>
                  <div className="space-y-4 text-[13px]">
                    <div><p className="text-[12px] text-[#999]">Website</p><p>ccbonline.ca</p></div>
                    <div><p className="text-[12px] text-[#999]">Email</p><p>info@ccbonline.ca</p></div>
                    <div><p className="text-[12px] text-[#999]">Phone</p><p>+1 647 568 1128</p></div>
                    <div><p className="text-[12px] text-[#999]">Location</p><p>Toronto, Ontario, Canada</p></div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <form onSubmit={handleSubmit} className="bg-[#F8F9FA] p-5 md:p-8">
                  {submitted ? (
                    <div className="text-center py-10">
                      <div className="w-10 h-10 bg-[#C00000] flex items-center justify-center mx-auto mb-4"><span className="text-white text-[16px]">✓</span></div>
                      <h3 className="text-[18px] font-semibold mb-2">Thank You</h3>
                      <p className="text-[13px] text-[#767676]">We will review and respond within 1–2 business days.</p>
                    </div>
                  ) : (
                    <>
                      <div className="mb-6">
                        <p className="text-[11px] font-medium uppercase tracking-wider text-[#999] mb-3">Market Entry Consultation Form <span className="text-[#C00000]">*</span> required</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="text" name="company" placeholder="Company Name *" required className={inputClass} value={formData.company} onChange={handleChange} />
                          <input type="text" name="name" placeholder="Your Name *" required className={inputClass} value={formData.name} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="email" name="email" placeholder="Email *" required className={inputClass} value={formData.email} onChange={handleChange} />
                          <input type="text" name="phone" placeholder="Phone / WeChat" className={inputClass} value={formData.phone} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="text" name="location" placeholder="Company Location" className={inputClass} value={formData.location} onChange={handleChange} />
                          <input type="text" name="category" placeholder="Product Category" className={inputClass} value={formData.category} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <select name="targetMarket" className={`${inputClass} text-[#555]`} value={formData.targetMarket} onChange={handleChange}>
                            <option value="">Target Market</option>
                            <option value="Canada">Canada</option>
                            <option value="United States">United States</option>
                            <option value="North America">North America</option>
                            <option value="Not sure">Not sure yet</option>
                          </select>
                          <select name="stage" className={`${inputClass} text-[#555]`} value={formData.stage} onChange={handleChange}>
                            <option value="">Current Stage</option>
                            <option value="Exploring">Exploring</option>
                            <option value="Preparing">Preparing</option>
                            <option value="Already selling">Already selling</option>
                            <option value="Need partners">Need partners</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-6">
                        <textarea name="question" placeholder="Your main question or challenge (optional)" rows={4} className={`${inputClass} resize-none`} value={formData.question} onChange={handleChange} />
                      </div>
                      <button type="submit" className="btn-primary w-full sm:w-auto text-[14px]">Submit Consultation Request</button>
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
