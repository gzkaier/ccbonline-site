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
      title: t('Judge first, then invest', '先判断，后投入'),
      desc: t('We help businesses determine which products, industries, and customers are most suitable for entering the Canadian and North American markets first.', '帮助企业判断哪些产品、行业和客户更适合优先进入加拿大/北美市场。'),
    },
    {
      num: '02',
      title: t('Comply first, then grow', '先合规，后发展'),
      desc: t('We map out company registration, product certification, tax, and import requirements to reduce later-stage risks.', '梳理公司注册、产品认证、税务与进口等关键要求，降低后期风险。'),
    },
    {
      num: '03',
      title: t('Build trust first, then orders', '先信任，后订单'),
      desc: t('We rebuild business materials and website messaging so overseas clients quickly understand, trust, and engage.', '重构商业资料与网站表达，让海外客户快速看懂、认可并愿意沟通。'),
    },
    {
      num: '04',
      title: t('Validate first, then scale', '先验证，后放大'),
      desc: t('We use small-scale customer validation to gather real feedback before gradually expanding investment and market coverage.', '通过小范围客户验证获取真实反馈，再逐步扩大投入与市场覆盖。'),
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
        <p className="text-label mb-3">{t('Our Values', '核心价值')}</p>
        <h2 className="font-serif text-[#212121] text-[6vw] md:text-[2vw] leading-[1.3] tracking-tight max-w-[560px] mb-10 md:mb-12">
          {t('Make the right judgment first, then invest with confidence.', '先把判断做对，再决定投入。')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {values.map((v) => (
            <div key={v.num} className="value-item card-border bg-white">
              <span className="text-[#C00000] text-[11px] font-bold">{v.num}</span>
              <h3 className="text-[15px] font-semibold mt-2 mb-2">{v.title}</h3>
              <p className="text-[12px] md:text-[13px] text-[#767676] leading-[1.7]">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
