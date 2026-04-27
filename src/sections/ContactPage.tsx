import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Globe, MapPin } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ContactPage() {
  const { t } = useLanguage()
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = t(
      'Contact CCBONLINE INC. — Book a Consultation',
      '联系 CCBONLINE INC. — 预约咨询'
    )
    window.scrollTo(0, 0)
    const page = pageRef.current
    if (!page) return
    const ctx = gsap.context(() => {
      gsap.from(page.querySelectorAll('.cp-block'), {
        y: 25, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: page, start: 'top 80%', once: true },
      })
    }, page)
    return () => ctx.revert()
  }, [t])

  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '',
    products: '', goals: '', challenges: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [mailtoLink, setMailtoLink] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Consultation Inquiry - ${formData.name} (${formData.company || 'N/A'})`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Company: ${formData.company || 'N/A'}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone || 'N/A'}\n\n` +
      `Products/Services: ${formData.products || 'N/A'}\n` +
      `Target Market Goals: ${formData.goals || 'N/A'}\n` +
      `Current Challenges: ${formData.challenges || 'N/A'}\n\n` +
      `Message:\n${formData.message || 'N/A'}`
    )
    const link = `mailto:info@ccbonline.ca?subject=${subject}&body=${body}`
    setMailtoLink(link)
    setSubmitted(true)
    setTimeout(() => { window.location.href = link }, 600)
  }

  const inputClass = 'w-full px-4 py-3 bg-white border border-[#E5E5E5] focus:border-[#212121]/30 outline-none transition-all duration-300 text-[14px] placeholder:text-[#AAA]'

  const topics = [
    t('Whether Canada is the right next market', '加拿大是否适合作为下一步市场'),
    t('What needs to be prepared before entry', '进入前需要优先准备哪些事项'),
    t('How to improve local trust and communication', '如何提升本地信任与英文表达'),
    t('How to build a bilingual digital entry point', '如何搭建双语官网与数字入口'),
  ]

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Contact', '联系')}</p>
          <h1 className="font-serif text-[#212121] text-[7vw] md:text-[2.8vw] leading-[1.25] tracking-tight max-w-[700px] mb-4">
            {t('Tell us about your business and your market entry goals.', '告诉我们您的业务情况与市场进入目标。')}
          </h1>
          <p className="text-[14px] text-[#767676] max-w-[520px]">
            {t('We will review your message and follow up with the next appropriate step.', '我们会在查看信息后，与您沟通下一步合适的交流方式。')}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            {/* Left: Info + Topics */}
            <div className="lg:col-span-4 space-y-8">
              <div className="cp-block">
                <h3 className="text-[14px] font-semibold mb-5">{t('Contact Information', '联系信息')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Globe size={15} strokeWidth={1.5} className="text-[#767676] mt-0.5 min-w-[15px]" />
                    <div>
                      <p className="text-[12px] text-[#999]">{t('Website', '官网')}</p>
                      <p className="text-[13px]">ccbonline.ca</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={15} strokeWidth={1.5} className="text-[#767676] mt-0.5 min-w-[15px]" />
                    <div>
                      <p className="text-[12px] text-[#999]">{t('Email', '邮箱')}</p>
                      <p className="text-[13px]">info@ccbonline.ca</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={15} strokeWidth={1.5} className="text-[#767676] mt-0.5 min-w-[15px]" />
                    <div>
                      <p className="text-[12px] text-[#999]">{t('Location', '所在地')}</p>
                      <p className="text-[13px]">Toronto, Ontario, Canada</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="cp-block p-5 bg-[#F8F9FA]">
                <h4 className="text-[12px] font-semibold uppercase tracking-wider text-[#767676] mb-3">
                  {t('Typical consultation topics', '常见咨询主题')}
                </h4>
                <ul className="space-y-2.5">
                  {topics.map((topic, i) => (
                    <li key={i} className="text-[13px] text-[#555] leading-[1.5] flex gap-2">
                      <span className="text-[#C00000] mt-0.5">—</span>{topic}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="cp-block p-5 bg-[#F8F9FA]">
                <p className="text-[12px] font-medium uppercase tracking-wider text-[#767676] mb-1">
                  {t('Language', '语言')}
                </p>
                <p className="text-[13px] text-[#555]">{t('English / 简体中文', 'English / 简体中文')}</p>
              </div>
            </div>

            {/* Right: Form */}
            <div className="lg:col-span-8 cp-block">
              <form onSubmit={handleSubmit} className="bg-[#F8F9FA] p-5 md:p-8">
                {submitted ? (
                  <div className="text-center py-10 md:py-14">
                    <div className="w-10 h-10 bg-[#C00000] flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-[16px]">✓</span>
                    </div>
                    <h3 className="text-[18px] font-semibold mb-2">{t('Thank You', '感谢您的提交')}</h3>
                    <p className="text-[13px] text-[#767676] mb-3">
                      {t('We will review your inquiry and respond within 1–2 business days.', '我们将在 1–2 个工作日内审阅并回复。')}
                    </p>
                    {mailtoLink && (
                      <a href={mailtoLink} className="text-[13px] text-[#C00000] hover:underline">
                        {t('Open email client', '打开邮件客户端')}
                      </a>
                    )}
                  </div>
                ) : (
                  <>
                    {/* Contact Info */}
                    <div className="mb-6">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-[#999] mb-3">{t('Contact Info', '联系信息')}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input type="text" name="name" placeholder={t('Name *', '姓名 *')} value={formData.name} onChange={handleChange} required className={inputClass} />
                        <input type="text" name="company" placeholder={t('Company', '公司')} value={formData.company} onChange={handleChange} className={inputClass} />
                        <input type="email" name="email" placeholder={t('Email *', '邮箱 *')} value={formData.email} onChange={handleChange} required className={inputClass} />
                        <input type="tel" name="phone" placeholder={t('Phone', '电话')} value={formData.phone} onChange={handleChange} className={inputClass} />
                      </div>
                    </div>

                    {/* Business Background */}
                    <div className="mb-6">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-[#999] mb-3">{t('Business Background', '业务背景')}</p>
                      <input type="text" name="products" placeholder={t('Products / Services you offer', '您提供的产品 / 服务')} value={formData.products} onChange={handleChange} className={`${inputClass} mb-3`} />
                    </div>

                    {/* Goals & Challenges */}
                    <div className="mb-6">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-[#999] mb-3">{t('Goals & Challenges', '目标与挑战')}</p>
                      <input type="text" name="goals" placeholder={t('Target market goals', '目标市场目标')} value={formData.goals} onChange={handleChange} className={`${inputClass} mb-3`} />
                      <input type="text" name="challenges" placeholder={t('Current challenges you are facing', '当前面临的主要挑战')} value={formData.challenges} onChange={handleChange} className={inputClass} />
                    </div>

                    {/* Additional */}
                    <div className="mb-6">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-[#999] mb-3">{t('Additional Message', '补充信息')}</p>
                      <textarea name="message" placeholder={t('Anything else you would like us to know', '其他希望我们知道的信息')} value={formData.message} onChange={handleChange} rows={3} className={`${inputClass} resize-none`} />
                    </div>

                    <button type="submit" className="btn-primary w-full sm:w-auto text-[13px] md:text-[14px]">
                      {t('Book a Consultation', '预约咨询')}
                    </button>

                    <p className="text-[11px] text-[#AAA] mt-4">
                      {t('By submitting, you agree to be contacted by email. We do not share your information.', '提交即表示同意通过邮件联系。我们不会与第三方分享您的信息。')}
                    </p>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('What happens next', '后续流程')}</p>
          <h2 className="font-serif text-[#212121] text-[6vw] md:text-[2vw] leading-[1.3] tracking-tight max-w-[500px] mb-10">
            {t('What to Expect After Submission', '提交后会发生什么')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { num: '01', title: t('We review your inquiry', '审阅您的咨询'), desc: t('We read your business context, goals, and challenges to understand where we can help.', '我们阅读您的业务背景、目标和挑战，了解我们可以在哪些方面提供帮助。') },
              { num: '02', title: t('We follow up by email', '邮件初步回复'), desc: t('We respond within 1–2 business days with initial thoughts on next steps.', '我们在 1–2 个工作日内回复，说明初步看法与后续步骤。') },
              { num: '03', title: t('We arrange next steps', '安排进一步沟通'), desc: t('If there is a good fit, we schedule an initial consultation to explore working together.', '如果适合，我们会安排初步咨询，探讨合作方式。') },
            ].map((item) => (
              <div key={item.num} className="cp-block card-border bg-white">
                <span className="text-[#C00000] text-[12px] font-bold">{item.num}</span>
                <h3 className="text-[15px] font-semibold mt-2 mb-2">{item.title}</h3>
                <p className="text-[13px] text-[#767676] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
