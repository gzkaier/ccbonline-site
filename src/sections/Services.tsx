import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    {
      num: '01',
      title: t('Market Entry Consulting', '市场进入咨询'),
      desc: t('Market opportunity analysis, product/industry prioritization, competitive analysis, and 90-day entry action plan.', '市场机会分析、产品/行业优先级、竞争分析、进入路径设计与90天行动计划。'),
      bullets: [
        t('Market opportunity and industry analysis', '市场机会与行业分析'),
        t('Product and customer prioritization', '产品与客户优先级判断'),
        t('Competitive landscape assessment', '竞争格局评估'),
        t('90-day entry action plan', '90天进入行动计划'),
      ],
    },
    {
      num: '02',
      title: t('Compliance & Company Setup', '公司与合规路径'),
      desc: t('Canadian company registration, trademarks, GST/HST, CARM, product certification, import compliance and tax guidance.', '加拿大公司注册路径、商标、GST/HST、CARM、产品认证、进口合规与税务建议。'),
      bullets: [
        t('Company registration pathway guidance', '公司注册路径梳理'),
        t('GST/HST, CARM, and tax requirements', 'GST/HST、CARM及税务要求'),
        t('Product certification and import compliance', '产品认证与进口合规'),
        t('Trademark and IP protection basics', '商标与知识产权基础保护'),
      ],
    },
    {
      num: '03',
      title: t('AI Website & Digital Entry', 'AI网站与数字入口'),
      desc: t('Bilingual websites, SEO, Google Business, lead forms, AI customer service, and data analytics.', '中英双语网站、SEO、Google地图、表单、AI客服、数据分析，打造专业海外获客入口。'),
      bullets: [
        t('Bilingual corporate website development', '双语企业官网开发'),
        t('SEO and Google Business optimization', 'SEO与Google商业优化'),
        t('Lead capture forms and AI chatbot', '线索收集表单与AI客服'),
        t('Data analytics and performance tracking', '数据分析与效果追踪'),
      ],
    },
    {
      num: '04',
      title: t('English Materials & Localization', '英文商业资料重构'),
      desc: t('Company profiles, capability sheets, product pages, sales emails, LinkedIn messaging, and quotation templates.', '公司介绍、Capability Sheet、产品页、销售邮件、LinkedIn话术、报价模板等。'),
      bullets: [
        t('Company profile and capability sheet', '公司介绍与Capability Sheet'),
        t('Product pages and sales narratives', '产品页与销售叙事'),
        t('LinkedIn messaging and email templates', 'LinkedIn话术与邮件模板'),
        t('Quotation and proposal frameworks', '报价与提案框架'),
      ],
    },
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.service-card'), {
        y: 25, opacity: 0, duration: 0.6, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 80%', once: true },
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-site">
        <p className="text-label mb-3">{t('Core Services', '核心服务')}</p>
        <h2 className="font-serif text-[#212121] text-[6vw] md:text-[2vw] leading-[1.3] tracking-tight max-w-[600px] mb-10 md:mb-12">
          {t('What We Can Do for You', '我们能为您做什么')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {services.map((s) => (
            <div key={s.num} className="service-card card-border bg-white flex flex-col">
              <span className="text-[#C00000] text-[11px] font-bold mb-2">{s.num}</span>
              <h3 className="text-[15px] md:text-[16px] font-semibold mb-2 tracking-tight">{s.title}</h3>
              <p className="text-[12px] md:text-[13px] text-[#767676] leading-[1.7] mb-3">{s.desc}</p>
              <ul className="space-y-1 mb-4 flex-1">
                {s.bullets.map((b, i) => (
                  <li key={i} className="text-[12px] text-[#555] leading-[1.5] flex gap-2">
                    <span className="text-[#C00000] mt-0.5">—</span>{b}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="text-[12px] md:text-[13px] font-medium text-[#212121] hover:text-[#C00000] transition-colors inline-flex items-center gap-1.5">
                {t('Learn More', '查看详情')} <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
