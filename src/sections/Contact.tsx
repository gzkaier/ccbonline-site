import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    products: '',
    goals: '',
    challenges: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.contact-block'), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const inputClass =
    'w-full px-4 py-3 bg-[#F6F6F6] border border-transparent focus:border-black/20 focus:bg-white outline-none transition-all duration-300 text-[14px] placeholder:text-[#767676]'

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="w-full bg-[#F6F6F6] py-[120px] md:py-[160px]"
    >
      <div className="max-w-[1440px] mx-auto px-[4vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div className="lg:col-span-4 contact-block">
            <p className="text-[#767676] text-[13px] font-medium tracking-widest uppercase mb-4">
              {t('Contact', '联系我们')}
            </p>
            <h2 className="font-display italic text-black text-[28px] md:text-[34px] lg:text-[40px] md:text-[32px] md:text-[36px] lg:text-[42px] leading-[1.15] tracking-tight mb-8">
              {t('Let\'s Discuss Your Market Entry', '让我们讨论您的市场进入')}
            </h2>

            <p className="text-[15px] text-[#767676] leading-[1.8] mb-10">
              {t(
                'Schedule a consultation to understand the most realistic path for your business to enter Canada and North America.',
                '预约咨询，了解您的企业进入加拿大和北美市场最现实的路径。'
              )}
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <Mail size={16} strokeWidth={1.5} className="text-[#767676]" />
                <span className="text-[14px]">info@ccbonline.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} strokeWidth={1.5} className="text-[#767676]" />
                <span className="text-[14px]">+1 (416) 000-0000</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={16} strokeWidth={1.5} className="text-[#767676] mt-0.5" />
                <span className="text-[14px]">
                  Toronto, Ontario, Canada
                </span>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-8 contact-block">
            <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-12 h-12 bg-[#C00000] rounded-full flex items-center justify-center mx-auto mb-6">
                    <ArrowRight size={20} className="text-white" />
                  </div>
                  <h3 className="text-[20px] font-semibold mb-2">
                    {t('Thank You', '感谢您的提交')}
                  </h3>
                  <p className="text-[14px] text-[#767676]">
                    {t(
                      'We will get back to you within 1-2 business days.',
                      '我们将在 1-2 个工作日内回复您。'
                    )}
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <input
                      type="text"
                      name="name"
                      placeholder={t('Name *', '姓名 *')}
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder={t('Company', '公司')}
                      value={formData.company}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <input
                      type="email"
                      name="email"
                      placeholder={t('Email *', '邮箱 *')}
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={inputClass}
                    />
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t('Phone', '电话')}
                      value={formData.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div className="mb-5">
                    <input
                      type="text"
                      name="products"
                      placeholder={t('Products / Services', '产品 / 服务')}
                      value={formData.products}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div className="mb-5">
                    <input
                      type="text"
                      name="goals"
                      placeholder={t('Target Market Goals', '目标市场目标')}
                      value={formData.goals}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div className="mb-5">
                    <input
                      type="text"
                      name="challenges"
                      placeholder={t('Current Challenges', '当前挑战')}
                      value={formData.challenges}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <div className="mb-8">
                    <textarea
                      name="message"
                      placeholder={t('Message', '留言')}
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-3.5 bg-[#C00000] text-white text-[14px] font-medium tracking-wide transition-all duration-400 hover:bg-[#A00000]"
                    style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}
                  >
                    {t('Submit Inquiry', '提交咨询')}
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
