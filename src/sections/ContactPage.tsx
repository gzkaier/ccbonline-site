import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Globe, MapPin, Phone } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function ContactPage() {
  const { t } = useLanguage()
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = t('Contact CCBONLINE INC.', '联系 CCBONLINE INC.')
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
  }, [])

  const [formData, setFormData] = useState({
    company: '', category: '', market: '', stage: '', challenge: '', contact: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [mailtoLink, setMailtoLink] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Market Entry Assessment - ${formData.company || 'Inquiry'}`)
    const body = encodeURIComponent(
      `Company: ${formData.company || 'N/A'}\nProduct/Service Category: ${formData.category || 'N/A'}\nTarget Market: ${formData.market || 'N/A'}\nCurrent Stage: ${formData.stage || 'N/A'}\nMain Challenge: ${formData.challenge || 'N/A'}\nContact Info: ${formData.contact || 'N/A'}`
    )
    const link = `mailto:info@ccbonline.ca?subject=${subject}&body=${body}`
    setMailtoLink(link)
    setSubmitted(true)
    setTimeout(() => { window.location.href = link }, 600)
  }

  const inputClass = 'w-full px-4 py-3 bg-white border border-[#E5E5E5] focus:border-[#212121]/30 outline-none transition-all duration-300 text-[14px] placeholder:text-[#AAA]'
  const selectClass = 'w-full px-4 py-3 bg-white border border-[#E5E5E5] focus:border-[#212121]/30 outline-none transition-all duration-300 text-[14px] text-[#555]'

  return (
    <div ref={pageRef}>
      <section className="relative pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/contact-bg.jpg)' }} />
        <div className="absolute inset-0 bg-[#F8F9FA]/85" />
        <div className="relative z-10 container-site">
          <p className="text-label mb-3">{t('Contact', '联系')}</p>
          <h1 className="font-serif text-[#212121] text-[5vw] md:text-[2.8vw] leading-[1.35] md:leading-[1.25] tracking-tight max-w-[700px] mb-4">
            {t('Start your market entry assessment.', '开始您的市场进入评估。')}
          </h1>
          <p className="text-[12px] md:text-[14px] text-[#767676] max-w-[520px]">
            {t('Six questions. A clear next step.', '六个问题。一个明确的下一步。')}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
            <div className="lg:col-span-4 space-y-6">
              <div className="cp-block">
                <h3 className="text-[14px] font-semibold mb-5">{t('Contact Information', '联系信息')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Globe size={15} strokeWidth={1.5} className="text-[#767676] mt-0.5 min-w-[15px]" />
                    <div><p className="text-[12px] text-[#999]">{t('Website', '官网')}</p><p className="text-[13px]">ccbonline.ca</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail size={15} strokeWidth={1.5} className="text-[#767676] mt-0.5 min-w-[15px]" />
                    <div><p className="text-[12px] text-[#999]">{t('Email', '邮箱')}</p><p className="text-[13px]">info@ccbonline.ca</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone size={15} strokeWidth={1.5} className="text-[#767676] mt-0.5 min-w-[15px]" />
                    <div><p className="text-[12px] text-[#999]">{t('Phone', '电话')}</p><p className="text-[13px]">+1 647 568 1128</p></div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin size={15} strokeWidth={1.5} className="text-[#767676] mt-0.5 min-w-[15px]" />
                    <div><p className="text-[12px] text-[#999]">{t('Location', '所在地')}</p><p className="text-[13px]">Toronto, Ontario, Canada</p></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8 cp-block">
              <form onSubmit={handleSubmit} className="bg-[#F8F9FA] p-5 md:p-8">
                {submitted ? (
                  <div className="text-center py-10 md:py-14">
                    <div className="w-10 h-10 bg-[#C00000] flex items-center justify-center mx-auto mb-4"><span className="text-white text-[16px]">✓</span></div>
                    <h3 className="text-[18px] font-semibold mb-2">{t('Thank You', '感谢您的提交')}</h3>
                    <p className="text-[13px] text-[#767676] mb-4">{t('We will review and respond within 1–2 business days.', '我们将在 1–2 个工作日内审阅并回复。')}</p>
                    <div className="p-4 bg-white border border-[#E5E5E5] max-w-[360px] mx-auto">
                      <p className="text-[11px] text-[#999] mb-1">{t('You can also email us directly at', '您也可以直接发邮件至')}</p>
                      <p className="text-[14px] font-medium text-[#212121] mb-2">info@ccbonline.ca</p>
                      <button
                        type="button"
                        onClick={() => { navigator.clipboard?.writeText('info@ccbonline.ca') }}
                        className="text-[12px] text-[#C00000] hover:underline"
                      >
                        {t('Copy email address', '复制邮箱地址')}
                      </button>
                    </div>
                    {mailtoLink && <a href={mailtoLink} className="text-[13px] text-[#C00000] hover:underline block mt-4">{t('Open email client', '打开邮件客户端')}</a>}
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <p className="text-[11px] font-medium uppercase tracking-wider text-[#999] mb-3">{t('Assessment Form', '评估表单')} <span className="text-[#C00000]">*</span> {t('required', '必填')}</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <input type="text" name="company" placeholder={t('Company name *', '公司名称 *')} value={formData.company} onChange={handleChange} required className={inputClass} />
                        <input type="text" name="category" placeholder={t('Product / service category *', '产品/服务类别 *')} value={formData.category} onChange={handleChange} required className={inputClass} />
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <select name="market" value={formData.market} onChange={handleChange} required className={selectClass}>
                          <option value="">{t('Target market *', '目标市场 *')}</option>
                          <option value="Canada">{t('Canada', '加拿大')}</option>
                          <option value="United States">{t('United States', '美国')}</option>
                          <option value="North America">{t('North America', '北美')}</option>
                          <option value="Not sure">{t('Not sure yet', '尚未确定')}</option>
                        </select>
                        <select name="stage" value={formData.stage} onChange={handleChange} required className={selectClass}>
                          <option value="">{t('Current stage *', '当前阶段 *')}</option>
                          <option value="Exploring">{t('Exploring', '探索中')}</option>
                          <option value="Preparing">{t('Preparing', '准备中')}</option>
                          <option value="Already selling">{t('Already selling', '已有销售')}</option>
                          <option value="Need partners">{t('Need partners', '需要合作伙伴')}</option>
                        </select>
                      </div>
                    </div>

                    <div className="mb-6">
                      <select name="challenge" value={formData.challenge} onChange={handleChange} required className={`${selectClass} mb-3`}>
                        <option value="">{t('Main challenge *', '主要挑战 *')}</option>
                        <option value="Market">{t('Market', '市场判断')}</option>
                        <option value="Compliance">{t('Compliance', '合规问题')}</option>
                        <option value="Channel">{t('Channel', '渠道开发')}</option>
                        <option value="Import">{t('Import', '进口/物流')}</option>
                        <option value="Localization">{t('Localization', '本地化')}</option>
                        <option value="Execution">{t('Execution', '执行推进')}</option>
                      </select>
                      <input type="text" name="contact" placeholder={t('Your contact info (email or phone) *', '联系方式（邮箱或电话）*')} value={formData.contact} onChange={handleChange} required className={inputClass} />
                    </div>

                    <button type="submit" className="btn-primary w-full sm:w-auto text-[13px] md:text-[14px]">{t('Submit Assessment', '提交评估')}</button>
                    <p className="text-[11px] text-[#AAA] mt-4">{t('By submitting, you agree to be contacted by email. We do not share your information.', '提交即表示同意通过邮件联系。我们不会与第三方分享您的信息。')}</p>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
