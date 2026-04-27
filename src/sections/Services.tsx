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
      desc: t('Assess where to enter, what to prioritize, and how to reduce uncertainty before committing resources.', '在正式投入资源之前，判断加拿大或北美市场是否值得优先进入，明确应聚焦哪些产品与客户方向。'),
      bullets: [
        t('Market fit and competitive landscape assessment', '市场适配性与竞争格局评估'),
        t('Target customer segment identification', '目标客户群体识别'),
        t('Entry sequencing and priority planning', '进入顺序与优先级规划'),
      ],
    },
    {
      num: '02',
      title: t('Compliance & Setup Guidance', '合规与落地路径梳理'),
      desc: t('Clarify compliance-related pathways, support setup planning, and help clients become coordination-ready.', '梳理合规与设立相关路径，支持前期准备与执行规划，帮助客户理解关键步骤与准备事项。'),
      bullets: [
        t('Regulatory pathway clarification', '监管路径梳理'),
        t('Entity setup and operational preparation planning', '实体设立与运营准备规划'),
        t('Document preparation and process understanding', '文件准备与流程理解支持'),
      ],
    },
    {
      num: '03',
      title: t('Localized Digital Growth Infrastructure', '本地化数字增长基础设施'),
      desc: t('Build bilingual websites, localized materials, and lead-generation systems to support trust and inquiry conversion.', '构建企业进入加拿大与北美市场所需的实际数字资产与系统，包括清晰表达、信任建立与线索承接。'),
      bullets: [
        t('Bilingual corporate websites for North American markets', '面向北美市场的双语企业官网'),
        t('Localized business materials and messaging rebuild', '本地化商业资料与信息表达重构'),
        t('Lead-capture forms, AI inquiry handling, and digital entry points', '线索收集表单、AI 咨询处理与数字入口搭建'),
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
    <section ref={sectionRef} className="section-padding bg-[#F8F9FA]">
      <div className="container-site">
        <p className="text-label mb-3">{t('Core Services', '核心服务')}</p>
        <h2 className="font-serif text-[#212121] text-[6vw] md:text-[2vw] leading-[1.3] tracking-tight max-w-[560px] mb-10 md:mb-12">
          {t('Three integrated areas of support', '三大相互衔接的支持领域')}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((s) => (
            <div key={s.num} className="service-card card-border bg-white flex flex-col">
              <span className="text-[#C00000] text-[11px] font-bold mb-3">{s.num}</span>
              <h3 className="text-[15px] md:text-[16px] font-semibold mb-2 tracking-tight">{s.title}</h3>
              <p className="text-[12px] md:text-[13px] text-[#767676] leading-[1.7] mb-4">{s.desc}</p>
              <ul className="space-y-1.5 mb-5 flex-1">
                {s.bullets.map((b, i) => (
                  <li key={i} className="text-[12px] md:text-[13px] text-[#555] leading-[1.5] flex gap-2">
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
