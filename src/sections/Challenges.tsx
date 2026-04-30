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
      title: t('Unsure if your product fits North America?', '不确定产品是否适合北美？'),
      desc: t('You have a product but no clear answer on market requirements, customer expectations, or certification needs.', '有产品但不确定是否符合市场需求、客户期望或认证要求。'),
    },
    {
      title: t('Canada or the US — which first?', '加拿大还是美国，先选哪个？'),
      desc: t('Both markets differ in regulation, cost, logistics, and customer behavior. You need a clear comparison.', '两个市场在监管、成本、物流和客户行为上差异很大，需要清晰比较。'),
    },
    {
      title: t('Worried about compliance and liability?', '担心合规和责任风险？'),
      desc: t('Import rules, certification, tax obligations, and supply-chain liability are complex. One oversight can be costly.', '进口法规、认证、税务和供应链责任都很复杂，一个疏漏代价高昂。'),
    },
    {
      title: t('No clear plan for the first 90 days?', '前90天没有清晰计划？'),
      desc: t('You want to enter but do not know where to start, what to prioritize, or how to structure your approach.', '想进入但不知从何开始、优先做什么、如何组织推进。'),
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
        <h2 className="font-serif text-[#212121] text-[28px] md:text-[32px] lg:text-[36px] md:text-[24px] md:text-[28px] lg:text-[32px] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10 md:mb-12">
          {t('Are You Facing These Challenges?', '您是否面临这些挑战？')}
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
