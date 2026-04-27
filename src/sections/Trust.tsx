import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Search, Shield, Globe, TrendingUp } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Trust() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const items = [
    {
      icon: Search,
      title: t('Market Entry Consulting', '市场进入咨询'),
      desc: t('Market judgment, entry strategy, and industry opportunity analysis for Canada and North America.', '市场判断、进入策略与行业机会分析，帮助企业识别优先进入方向。'),
    },
    {
      icon: Shield,
      title: t('Compliance & Registration Support', '合规与注册支持'),
      desc: t('Company registration, tax, product certification, and import compliance pathway guidance.', '公司注册、税务、产品认证、进口合规路径梳理，降低后期风险。'),
    },
    {
      icon: Globe,
      title: t('AI Website & Digital Solutions', 'AI网站与数字化'),
      desc: t('Bilingual websites, SEO, AI customer service, and data analytics for professional overseas presence.', '中英双语网站、SEO、AI客服、数据分析，打造专业海外获客入口。'),
    },
    {
      icon: TrendingUp,
      title: t('Localization & Growth Support', '本地化与增长支持'),
      desc: t('Brand localization, digital marketing, customer development, and operational support.', '品牌本地化、数字营销、客户开发与运营支持，建立本地信任。'),
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
        <p className="text-label mb-3">{t('What We Do', '核心业务')}</p>
        <h2 className="font-serif text-[#212121] text-[6vw] md:text-[2vw] leading-[1.3] tracking-tight max-w-[560px] mb-10 md:mb-12">
          {t('Canada / North America Market Entry & AI Digital Solutions', '加拿大 / 北美市场进入与AI数字化解决方案')}
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
