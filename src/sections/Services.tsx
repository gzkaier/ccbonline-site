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
      title: t('Entry Assessment', '进入初判'),
      desc: t('New to North America? Evaluate product fit, entry paths, and key risks in 0–30 days.', '刚接触北美？0–30天评估产品适配性、路径和风险。'),
      bullets: [
        t('Product-market fit check', '产品适配检查'),
        t('U.S. vs. Canada comparison', '美加路径比较'),
        t('Compliance risk overview', '合规风险概览'),
        t('Priority actions', '优先行动建议'),
      ],
    },
    {
      num: '02',
      title: t('Market Entry Diagnostic', '市场进入诊断'),
      desc: t('Comprehensive diagnostic: capabilities, customers, channels, compliance, and a 0–90 day launch plan.', '全面诊断：能力、客户、渠道、合规，加0–90天启动计划。'),
      bullets: [
        t('Capability & product-fit analysis', '能力与产品适配分析'),
        t('Target customer & channel strategy', '目标客户与渠道策略'),
        t('Compliance & liability screening', '合规与责任筛查'),
        t('0–90 day launch plan', '0–90天启动计划'),
      ],
    },
    {
      num: '03',
      title: t('Advisory Retainer', '陪跑顾问'),
      desc: t('Turn plans into action. Weekly meetings, material refinement, partner screening, ongoing guidance.', '将计划转化为行动。每周会议、材料优化、合作伙伴筛选。'),
      bullets: [
        t('Weekly progress check-ins', '每周进度检查'),
        t('Customer materials refinement', '客户材料优化'),
        t('Partner & distributor screening', '合作伙伴筛选'),
        t('Trade show support', '展会支持'),
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
        <p className="text-label mb-3">{t('Service Packages', '服务方案')}</p>
        <h2 className="font-serif text-[#212121] text-[5vw] md:text-[2vw] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10 md:mb-12">
          {t('Choose the Right Level of Support', '选择适合您的支持')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {services.map((s) => (
            <div key={s.num} className="service-card card-border bg-white flex flex-col">
              <span className="text-[#C00000] text-[11px] font-bold mb-2">{s.num}</span>
              <h3 className="text-[14px] md:text-[16px] font-semibold mb-2 tracking-tight">{s.title}</h3>
              <p className="text-[11px] md:text-[13px] text-[#767676] leading-[1.7] mb-3">{s.desc}</p>
              <ul className="space-y-1 mb-4 flex-1">
                {s.bullets.map((b, i) => (
                  <li key={i} className="text-[11px] md:text-[12px] text-[#555] leading-[1.5] flex gap-2">
                    <span className="text-[#C00000] mt-0.5">—</span>{b}
                  </li>
                ))}
              </ul>
              <Link to="/services" className="text-[11px] md:text-[13px] font-medium text-[#212121] hover:text-[#C00000] transition-colors inline-flex items-center gap-1.5">
                {t('Learn More', '了解详情')} <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
