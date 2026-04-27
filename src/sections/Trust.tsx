import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Globe, Languages, TrendingUp, ShieldCheck } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Trust() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const items = [
    {
      icon: Globe,
      title: t('China-to-Canada market entry focus', '聚焦中国企业进入加拿大及北美市场'),
      desc: t('We focus on helping Chinese businesses prepare for and enter the Canadian and North American markets.', '我们专注于帮助中国企业准备并进入加拿大及北美市场，而非泛泛的全球咨询。'),
    },
    {
      icon: Languages,
      title: t('Bilingual Chinese and English communication', '支持中英双语沟通与商务表达'),
      desc: t('Fluent in both languages, we ensure nothing is lost in translation during critical business discussions.', '流利的中英文能力，确保在关键商务沟通中不会因语言障碍产生信息偏差。'),
    },
    {
      icon: TrendingUp,
      title: t('Strategy + execution + digital growth support', '覆盖策略、执行与数字增长基础建设'),
      desc: t('We combine market strategy, practical execution, and digital infrastructure into one connected service.', '我们将市场策略、实际执行和数字基础设施整合为一项相互连接的综合服务。'),
    },
    {
      icon: ShieldCheck,
      title: t('Practical support for local trust-building and lead generation', '面向本地信任建立与线索获取的实际支持'),
      desc: t('From localized materials to lead-capture systems, we help you build credibility where it matters.', '从本地化资料到线索收集系统，我们帮助您在关键市场中建立可信的商业形象。'),
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
        <p className="text-label mb-3">{t('Trust', '信任基础')}</p>
        <h2 className="font-serif text-[#212121] text-[6vw] md:text-[2vw] leading-[1.3] tracking-tight max-w-[560px] mb-10 md:mb-12">
          {t('Built for businesses entering new markets.', '专为进入新市场的企业而构建。')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div key={i} className="trust-item card-border bg-white">
                <Icon size={20} strokeWidth={1.5} className="text-[#767676] mb-3" />
                <h3 className="text-[14px] md:text-[15px] font-semibold mb-2 tracking-tight">{item.title}</h3>
                <p className="text-[12px] md:text-[13px] text-[#767676] leading-[1.7]">{item.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
