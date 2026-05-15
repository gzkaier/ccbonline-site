import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HomeContact() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from(section.querySelector('.cta-content'), {
        y: 25, opacity: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 80%', once: true },
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-[#1a1a2e]">
      <div className="container-site">
        <div className="cta-content max-w-[800px]">
          <h2
            className="font-serif text-white text-[26px] md:text-[34px] lg:text-[40px] leading-[1.35] md:leading-[1.3] tracking-tight mb-6"
          >
            {t(
              'Three ways to start the conversation.',
              '三种方式开始对话。'
            )}
          </h2>

          <div className="space-y-5 md:space-y-6 mb-8">
            <div className="flex gap-4 md:gap-5 items-start">
              <span className="text-[#00A884] text-[12px] font-bold min-w-[24px]">01</span>
              <div>
                <h3 className="text-white text-[14px] md:text-[16px] font-semibold mb-1">{t('Request an Initial Market Entry Assessment', '申请初步市场进入评估')}</h3>
                <p className="text-white/50 text-[11px] md:text-[13px] leading-[1.6]">{t('Best for first-time contact. We evaluate your readiness and recommend next steps.', '适合首次联系。我们评估您的就绪度并建议下一步。')}</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-5 items-start">
              <span className="text-[#00A884] text-[12px] font-bold min-w-[24px]">02</span>
              <div>
                <h3 className="text-white text-[14px] md:text-[16px] font-semibold mb-1">{t('Book a Strategy Call', '预约战略咨询通话')}</h3>
                <p className="text-white/50 text-[11px] md:text-[13px] leading-[1.6]">{t('For companies with clear needs. A focused discussion on your market entry strategy.', '已有明确需求的企业。聚焦讨论您的市场进入策略。')}</p>
              </div>
            </div>
            <div className="flex gap-4 md:gap-5 items-start">
              <span className="text-[#00A884] text-[12px] font-bold min-w-[24px]">03</span>
              <div>
                <h3 className="text-white text-[14px] md:text-[16px] font-semibold mb-1">{t('Prepare Your North America Entry Plan', '制定您的北美进入计划')}</h3>
                <p className="text-white/50 text-[11px] md:text-[13px] leading-[1.6]">{t('For high-intent clients ready to commit. A structured diagnostic and roadmap.', '高意向准备投入的客户。结构化诊断与路线图。')}</p>
              </div>
            </div>
          </div>

          <Link to="/contact" className="btn-primary text-[12px] md:text-[14px] px-6 py-2.5 md:px-8 md:py-3.5">
            {t('Get Started', '开始对话')}
          </Link>
        </div>
      </div>
    </section>
  )
}
