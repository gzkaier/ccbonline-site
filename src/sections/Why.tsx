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
      title: t('North America specific', '专注北美'),
      desc: t('Every assessment and recommendation is tailored to entering the U.S. and Canadian markets.', '每项评估和建议都针对美国和加拿大市场准入。'),
    },
    {
      num: '02',
      title: t('Actionable judgment', '可执行的判断'),
      desc: t('Clear conclusions on what to do, in what order, and what risks to watch.', '告诉您该做什么、按什么顺序、注意哪些风险。'),
    },
    {
      num: '03',
      title: t('A plan, not a report', '计划，不是报告'),
      desc: t('A concrete 0–90 day action plan with milestones your team can execute.', '具体的0–90天行动计划，含里程碑，团队可直接执行。'),
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
            <p className="text-label mb-3">{t('Why Us', '为什么选择我们')}</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] md:leading-[1.3] tracking-tight mb-5 md:mb-6">
              {t('Practical guidance for market entry', '实用的市场进入指导')}
            </h2>
            <p className="text-[13px] md:text-[15px] text-[#555] leading-[1.8]">
              {t(
                'Stop guessing. Start moving. Clear answers, concrete plans, and hands-on support when you need it.',
                '停止猜测，开始行动。清晰答案、具体计划、需要时的实际支持。'
              )}
            </p>
          </div>
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {points.map((p) => (
              <div key={p.num} className="why-block flex gap-4 md:gap-5">
                <span className="text-[#C00000] text-[12px] font-bold mt-0.5 min-w-[24px]">{p.num}</span>
                <div>
                  <h3 className="text-[14px] md:text-[16px] font-semibold mb-2">{p.title}</h3>
                  <p className="text-[12px] md:text-[14px] text-[#767676] leading-[1.7]">{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
