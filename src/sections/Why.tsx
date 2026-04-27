import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Why() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const points = [
    {
      num: '01',
      title: t('Strategy before execution', '策略先行，再谈执行'),
      desc: t('We begin with structured thinking about whether, where, and how your business should enter the market.', '我们从结构化思考出发：您的企业是否适合进入、从哪里进入、以及如何进入。'),
    },
    {
      num: '02',
      title: t('Localization beyond translation', '本地化不只是翻译'),
      desc: t('We rebuild your business messaging and materials to fit local expectations, not merely translate what exists.', '我们重构您的商业信息和资料以适配本地期望，而非仅仅翻译现有内容。'),
    },
    {
      num: '03',
      title: t('Digital infrastructure that supports growth', '支撑增长的数字基础设施'),
      desc: t('We build bilingual websites, lead-capture forms, and AI inquiry handling that turn interest into conversations.', '我们构建双语官网、线索收集表单和 AI 咨询处理，将兴趣转化为实际对话。'),
    },
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.why-block'), {
        y: 25, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 75%', once: true },
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 why-block">
            <p className="text-label mb-3">{t('Our Difference', '我们的差异')}</p>
            <h2 className="font-serif text-[#212121] text-[6vw] md:text-[1.8vw] leading-[1.3] tracking-tight mb-5 md:mb-6">
              {t('Why Businesses Choose CCBONLINE', '为什么企业会选择 CCBONLINE')}
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.8]">
              {t(
                'Entering a new market is not only a business decision. It is a connected sequence of challenges around market judgment, compliance, local communication, customer trust, and lead-generation capability. CCBONLINE helps clients approach these challenges as one business system rather than as disconnected tasks.',
                '进入一个新市场，并不是单一决策，而是一组彼此关联的问题：市场是否值得进入、合规路径是否清晰、英文沟通是否到位、本地客户是否会信任、数字获客基础是否具备。CCBONLINE 帮助客户把这些问题作为一个相互联动的系统来处理。'
              )}
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {points.map((p) => (
              <div key={p.num} className="why-block flex gap-4 md:gap-5">
                <span className="text-[#C00000] text-[12px] font-bold mt-0.5 min-w-[24px]">{p.num}</span>
                <div>
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{p.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.7]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
