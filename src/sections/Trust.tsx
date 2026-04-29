import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Brain, GitCompare, AlertTriangle, ClipboardCheck, Target, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Trust() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const items = [
    {
      icon: Brain,
      title: t('Go / No-Go Assessment', '可行性判断'),
      desc: t('Know whether your product is ready for North America before spending money.', '花钱前先看清楚产品是否准备好进入北美。'),
    },
    {
      icon: GitCompare,
      title: t('U.S. vs. Canada', '美国还是加拿大'),
      desc: t('Compare market size, regulation, cost, and customer fit. Get a clear recommendation.', '比较规模、监管、成本和适配度，给出明确建议。'),
    },
    {
      icon: AlertTriangle,
      title: t('Risk & Compliance', '风险与合规'),
      desc: t('Identify compliance requirements and liability risks before committing resources.', '投入资源前识别合规要求和责任风险。'),
    },
    {
      icon: ClipboardCheck,
      title: t('0–90 Day Plan', '0–90天计划'),
      desc: t('A practical roadmap with clear milestones—not a report to file away.', '实用路线图，含明确里程碑，不是放进抽屉的报告。'),
    },
    {
      icon: Target,
      title: t('Practical Launch Steps', '可落地的步骤'),
      desc: t('Channel design, customer targeting, and trade show strategy turned into concrete actions.', '渠道设计、客户定位、展会策略，全部落地为具体动作。'),
    },
    {
      icon: Users,
      title: t('Execution Support', '落地支持'),
      desc: t('Weekly check-ins, material refinement, and partner screening to keep you moving.', '每周跟进、材料优化、合作伙伴筛选，确保持续推进。'),
    },
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.trust-item'), {
        y: 25, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 80%', once: true },
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-site">
        <p className="text-label mb-3">{t('Services', '服务内容')}</p>
        <h2 className="font-serif text-[#212121] text-[5vw] md:text-[2vw] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10 md:mb-12">
          {t('What You Get', '您能获得什么')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="trust-item card-border bg-white">
                <Icon size={20} strokeWidth={1.5} className="text-[#767676] mb-3" />
                <h3 className="text-[13px] md:text-[15px] font-semibold mb-2 tracking-tight">{item.title}</h3>
                <p className="text-[11px] md:text-[13px] text-[#767676] leading-[1.7]">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
