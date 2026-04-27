import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Methodology() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const steps = [
    { num: '01', title: t('Assess', '评估'), desc: t('Evaluate market fit, product readiness, and target customer segments.', '评估市场适配性、产品准备度与目标客户方向。') },
    { num: '02', title: t('Prioritize', '明确优先'), desc: t('Identify priority product lines, channels, and entry opportunities.', '明确优先产品线、渠道与市场进入机会。') },
    { num: '03', title: t('Clarify', '梳理路径'), desc: t('Map out compliance, entity, and import-related pathways.', '梳理合规、设立与进口相关路径。') },
    { num: '04', title: t('Rebuild', '重构表达'), desc: t('Redevelop English business materials, messaging, and sales narratives.', '重构英文商业资料、对外表达与销售叙事。') },
    { num: '05', title: t('Launch', '搭建系统'), desc: t('Deploy bilingual digital entry points and lead-capture infrastructure.', '搭建双语数字入口与线索收集基础设施。') },
    { num: '06', title: t('Scale', '迭代放大'), desc: t('Review market feedback and scale what proves effective.', '根据市场反馈迭代执行重点并放大有效动作。') },
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
        <p className="text-label mb-3">{t('Our Process', '我们的流程')}</p>
        <h2 className="font-serif text-[#212121] text-[6vw] md:text-[2vw] leading-[1.3] tracking-tight max-w-[560px] mb-10 md:mb-12">
          {t('How We Work', '我们的工作方式')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {steps.map((s) => (
            <div key={s.num} className="method-step card-border bg-white">
              <span className="text-[#C00000] text-[11px] font-bold">{s.num}</span>
              <h3 className="text-[15px] font-semibold mt-2 mb-1.5">{s.title}</h3>
              <p className="text-[12px] md:text-[13px] text-[#767676] leading-[1.7]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
