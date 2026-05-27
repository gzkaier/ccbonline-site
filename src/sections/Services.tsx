import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const { t, lang } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const services = [
    {
      num: '01',
      title: t('Market Entry Readiness Diagnostic', '北美市场进入可行性初判'),
      desc: t('Assess whether your product fits the Canadian/North American market and what foundations are missing. The best entry point for new clients.', '评估产品是否适合加拿大/北美市场，判断进入基础是否具备。最适合新客户的入口服务。'),
      bullets: [
        t('Product-market fit assessment', '产品市场适配评估'),
        t('Certification & entity readiness check', '认证与主体资质检查'),
        t('Canada vs. US priority recommendation', '加拿大与美国优先度建议'),
        t('First 30–90 day action plan', '前30–90天行动计划'),
      ],
    },
    {
      num: '02',
      title: t('Market Entry Strategy & Roadmap', '北美市场进入路径设计'),
      desc: t('Design a structured market entry plan with clear priorities, timelines, and resource allocation.', '设计结构化的市场进入计划，明确优先级、节奏和资源配置。'),
      bullets: [
        t('Target market & customer segmentation', '目标市场与客户分层'),
        t('Entry phasing & timeline design', '进入阶段划分与节奏设计'),
        t('Budget & resource planning', '预算与资源配置'),
        t('Internal team role definition', '内部团队分工'),
      ],
    },
    {
      num: '03',
      title: t('Compliance & Import Coordination', '合规、进口与责任链协同'),
      desc: t('Navigate legal, tax, customs, certification, and regulatory requirements with professional coordination.', '协同专业机构推进法律、税务、清关、认证和监管要求。'),
      bullets: [
        t('Import & customs requirements screening', '进口与清关要求筛查'),
        t('Product certification & standards mapping', '产品认证与标准梳理'),
        t('Tax & regulatory obligations review', '税务与监管义务审查'),
        t('Professional partner coordination', '专业机构协同推进'),
      ],
    },
    {
      num: '04',
      title: t('Channel & Partner Development', '渠道与本地合作伙伴开发'),
      desc: t('Identify and develop the right local partners, distributors, and customer channels for your product.', '识别并开发适合您产品的本地合作伙伴、分销商和客户渠道。'),
      bullets: [
        t('Distributor & partner identification', '经销商与合作伙伴识别'),
        t('Industry customer development', '行业客户开发'),
        t('Trade show follow-up & BD support', '展会跟进与本地商务支持'),
        t('Local service partner setup', '本地服务伙伴搭建'),
      ],
    },
    {
      num: '05',
      title: t('Canada Local Logistics & Hub Support', '加拿大本地物流与中转节点支持'),
      desc: t('A lightweight local logistics foothold for market validation — receiving, short-term storage, local delivery, trade show material transfer, and small-batch distribution.', '轻量本地物流落点，支持市场验证阶段：货物接收、短期存放、本地派送、展会物料转运和小批量分拨。'),
      bullets: [
        t('Goods receiving at Canadian hub', '加拿大本地货物接收'),
        t('Short-term storage & inventory hold', '短期存放与库存暂存'),
        t('Local delivery & sample dispatch', '本地派送与样品发送'),
        t('Trade show material transfer', '展会物料转运'),
        t('Small-batch distribution arrangement', '小批量分拨安排'),
      ],
    },
    {
      num: '06',
      title: t('Digital Trust & Local Presence', '数字化信任与本地前台建设'),
      desc: t('Build the digital infrastructure that makes North American customers trust and find you.', '建设让北美客户信任并找到您的数字化基础设施。'),
      bullets: [
        t('North America website & business profile', '北美官网与商业介绍'),
        t('LinkedIn & professional presence', 'LinkedIn与专业形象'),
        t('Customer inquiry & conversion setup', '客户询盘与转化设置'),
        t('Case studies & trust content', '案例与信任内容建设'),
      ],
    },
    {
      num: '07',
      title: t('Execution Support & Project Management', '本地执行与项目推进陪跑'),
      desc: t('Stay on track with weekly check-ins, task tracking, and hands-on execution support.', '通过每周跟进、任务追踪和实际执行支持，确保项目持续推进。'),
      bullets: [
        t('Weekly progress meetings', '每周进度会议'),
        t('Task tracking & milestone management', '任务追踪与里程碑管理'),
        t('Supplier & partner coordination', '供应商与合作伙伴协调'),
        t('Phase review & course correction', '阶段复盘与方向调整'),
      ],
    },
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.service-card'), {
        y: 25, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 80%', once: true },
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-site">
        <p className="text-label mb-3">{t('Services', '服务模块')}</p>
        <h2 className="font-serif text-[#212121] text-[24px] md:text-[28px] lg:text-[32px] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[700px] mb-10 md:mb-12">
          {t('Seven Capabilities That Turn Intent into Market Entry', '七大能力，将意图转化为市场进入')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((s) => (
            <div key={s.num} className="service-card card-border bg-white flex flex-col">
              <span className="text-[#00B894] text-[11px] font-bold mb-2">{s.num}</span>
              <h3 className="text-[14px] md:text-[15px] font-semibold mb-2 tracking-tight">{s.title}</h3>
              <p className="text-[11px] md:text-[13px] text-[#767676] leading-[1.7] mb-3 flex-1">{s.desc}</p>
              <ul className="space-y-1 mb-4">
                {s.bullets.map((b, i) => (
                  <li key={i} className="text-[11px] md:text-[12px] text-[#555] leading-[1.5] flex gap-2">
                    <span className="text-[#00B894] mt-0.5">—</span>{b}
                  </li>
                ))}
              </ul>
              <Link to={`/${lang}/services`} className="text-[11px] md:text-[13px] font-medium text-[#212121] hover:text-[#00B894] transition-colors inline-flex items-center gap-1.5">
                {t('Learn More', '了解详情')} <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
