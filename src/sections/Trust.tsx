import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ClipboardCheck, GitCompare, ShieldCheck, Route, Globe, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Trust() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const items = [
    {
      icon: ClipboardCheck,
      title: t('Market Entry Readiness Diagnostic', '市场进入可行性初判'),
      desc: t('Know whether your product fits North America before spending money. A clear go/no-go assessment.', '花钱前先看清楚产品是否准备好进入北美。清晰的可行性判断。'),
    },
    {
      icon: GitCompare,
      title: t('Canada vs. US Strategy', '加拿大与美国策略比较'),
      desc: t('Compare market size, regulation, cost, and customer fit. Get a clear recommendation on entry priority.', '比较规模、监管、成本和适配度，给出明确进入顺序建议。'),
    },
    {
      icon: ShieldCheck,
      title: t('Compliance & Import Screening', '合规与进口筛查'),
      desc: t('Identify certification gaps, customs requirements, and liability risks before committing resources.', '投入资源前识别认证差距、清关要求和责任风险。'),
    },
    {
      icon: Route,
      title: t('Entry Strategy & Roadmap', '进入策略与路线图'),
      desc: t('A practical 90-day roadmap with milestones, channel plans, and resource allocation.', '实用的90天路线图，含里程碑、渠道计划和资源配置。'),
    },
    {
      icon: Globe,
      title: t('Digital Trust & Local Presence', '数字化信任与本地存在'),
      desc: t('Website, business profiles, and trust content that makes North American customers find and believe you.', '让北美客户能找到您、信任您的官网、商业简介和信任内容。'),
    },
    {
      icon: Users,
      title: t('Local Execution Support', '本地执行支持'),
      desc: t('Weekly check-ins, partner coordination, and phase reviews to keep your entry on track.', '每周跟进、合作伙伴协调和阶段复盘，确保进入计划稳步执行。'),
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
        <p className="text-label mb-3">{t('Capabilities', '核心能力')}</p>
        <h2 className="font-serif text-[#212121] text-[24px] md:text-[28px] lg:text-[32px] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10 md:mb-12">
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
