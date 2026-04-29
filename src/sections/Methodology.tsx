import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Methodology() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const steps = [
    { num: '01', title: t('Assessment', '初判'), desc: t('Evaluate product fit, path options, and risks. A 0–30 day plan.', '评估产品适配、路径和风险。0–30天计划。') },
    { num: '02', title: t('Diagnostic', '诊断'), desc: t('Full diagnostic: capabilities, customers, channels, compliance. A 0–90 day launch plan.', '全面诊断：能力、客户、渠道、合规。0–90天启动计划。') },
    { num: '03', title: t('Advisory', '陪跑'), desc: t('Weekly meetings, materials refinement, partner screening, phased reviews.', '每周会议、材料优化、合作伙伴筛选、阶段性复盘。') },
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
    <section ref={sectionRef} className="section-padding bg-[#F8F9FA]">
      <div className="container-site">
        <p className="text-label mb-3">{t('Process', '流程')}</p>
        <h2 className="font-serif text-[#212121] text-[5vw] md:text-[2vw] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10 md:mb-12">
          {t('Three Steps to Clarity', '三步获得清晰方向')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
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
