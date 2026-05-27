import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CoreValues() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const values = [
    {
      num: '01',
      title: t('Assess first, then invest', '先评估，后投入'),
      desc: t('Determine which products and customers are most suitable for entering first.', '判断哪些产品和客户更适合优先进入。'),
    },
    {
      num: '02',
      title: t('Comply first, then grow', '先合规，后发展'),
      desc: t('Map out registration, certification, tax, and import requirements.', '梳理注册、认证、税务与进口要求。'),
    },
    {
      num: '03',
      title: t('Build trust first, then orders', '先建信任，后拿订单'),
      desc: t('Prepare business materials and messaging that clients understand.', '准备客户能理解的商业材料。'),
    },
    {
      num: '04',
      title: t('Validate first, then scale', '先验证，后扩大'),
      desc: t('Gather real feedback through small-scale validation before expanding.', '小规模验证获取真实反馈后再扩大。'),
    },
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.value-item'), {
        y: 25, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 80%', once: true },
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-[#F8F9FA]">
      <div className="container-site">
        <p className="text-label mb-3">{t('Principles', '核心原则')}</p>
        <h2 className="font-serif text-[#212121] text-[24px] md:text-[28px] lg:text-[32px] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[560px] mb-10 md:mb-12">
          {t('Reduce risk at every step.', '每一步都降低风险。')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {values.map((v) => (
            <div key={v.num} className="value-item card-border bg-white">
              <span className="text-[#00B894] text-[11px] font-bold">{v.num}</span>
              <h3 className="text-[14px] md:text-[15px] font-semibold mt-2 mb-2">{v.title}</h3>
              <p className="text-[11px] md:text-[13px] text-[#767676] leading-[1.7]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
