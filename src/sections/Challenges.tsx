import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { HelpCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Challenges() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const challenges = [
    {
      title: t('Unsure if your product fits?', '不确定产品是否适合北美？'),
      desc: t('No clear answer on whether your product meets market requirements, customer expectations, and compliance standards.', '产品是否符合市场需求、客户期望和合规标准，没有明确答案。'),
    },
    {
      title: t('U.S. or Canada first?', '不确定先做美国还是加拿大？'),
      desc: t('Both markets differ in size, regulation, cost, and customer behavior. You need a clear comparison to decide.', '两个市场在规模、监管、成本和客户行为上差异很大，需要清晰比较。'),
    },
    {
      title: t('Worried about compliance risks?', '担心合规和责任风险？'),
      desc: t('Import regulations, certification, tax, and liability are complex. One oversight can be costly.', '进口法规、认证、税务和责任都很复杂，一个疏漏代价高昂。'),
    },
    {
      title: t('No plan for the first 90 days?', '前90天没有清晰计划？'),
      desc: t('You want to enter but do not know where to start, what to prioritize, or how to measure progress.', '想进入但不知从何开始、优先做什么、如何衡量进展。'),
    },
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.challenge-item'), {
        y: 25, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 80%', once: true },
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-[#F8F9FA]">
      <div className="container-site">
        <p className="text-label mb-3">{t('Common Situations', '常见处境')}</p>
        <h2 className="font-serif text-[#212121] text-[5vw] md:text-[2vw] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10 md:mb-12">
          {t('Are You Facing These Challenges?', '您是否面临这些问题？')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {challenges.map((c, i) => (
            <div key={i} className="challenge-item card-border bg-white">
              <HelpCircle size={17} strokeWidth={1.5} className="text-[#C00000] mb-2.5" />
              <h3 className="text-[13px] md:text-[15px] font-semibold mb-2">{c.title}</h3>
              <p className="text-[11px] md:text-[13px] text-[#767676] leading-[1.7]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
