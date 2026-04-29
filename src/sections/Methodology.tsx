import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Methodology() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const steps = [
    { num: '01', title: t('Assess', '评估'), desc: t('Evaluate readiness: product fit, compliance gaps, channel foundations, and priority market.', '评估就绪度：产品适配、合规差距、渠道基础和优先市场。') },
    { num: '02', title: t('Plan', '规划'), desc: t('Design entry strategy: customer profile, phasing, channel approach, budget, and team roles.', '设计进入策略：客户画像、阶段划分、渠道方案、预算和团队分工。') },
    { num: '03', title: t('Prepare', '准备'), desc: t('Build foundations: compliance coordination, digital presence, materials, and partner identification.', '建设基础：合规协同、数字存在、材料和合作伙伴识别。') },
    { num: '04', title: t('Execute', '执行'), desc: t('Launch with discipline: weekly tracking, partner engagement, customer outreach, and milestone reviews.', '有纪律地启动：每周追踪、合作伙伴 engagement、客户接触和里程碑复盘。') },
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.method-step'), {
        y: 20, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 80%', once: true },
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-site">
        <p className="text-label mb-3">{t('Process', '合作流程')}</p>
        <h2 className="font-serif text-[#212121] text-[5vw] md:text-[2vw] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10 md:mb-12">
          {t('From Assessment to Execution', '从评估到执行')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {steps.map((s) => (
            <div key={s.num} className="method-step card-border bg-white">
              <span className="text-[#C00000] text-[11px] font-bold">{s.num}</span>
              <h3 className="text-[14px] md:text-[15px] font-semibold mt-2 mb-1.5">{s.title}</h3>
              <p className="text-[11px] md:text-[13px] text-[#767676] leading-[1.7]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
