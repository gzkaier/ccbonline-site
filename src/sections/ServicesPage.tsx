import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ServicesPage() {
  const { t } = useLanguage()
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = t(
      'Services — CCBONLINE INC. Market Entry, Compliance & Digital Growth',
      '服务 — CCBONLINE INC. 市场进入、合规梳理与数字增长'
    )
    window.scrollTo(0, 0)
    const page = pageRef.current
    if (!page) return
    const ctx = gsap.context(() => {
      gsap.from(page.querySelectorAll('.sp-section'), {
        y: 25, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: page, start: 'top 80%', once: true },
      })
    }, page)
    return () => ctx.revert()
  }, [t])

  const services = [
    {
      num: '01',
      title: t('Market Entry Consulting', '市场进入咨询'),
      summary: t(
        'Helps businesses assess whether Canada or North America should be a near-term priority, which products and customer segments to focus on first, and how to approach market entry with more clarity before larger commitments.',
        '帮助企业在正式投入更大资源之前，判断加拿大或北美市场是否值得优先进入，明确应先聚焦哪些产品与客户方向，并形成更清晰的进入思路。'
      ),
      suitable: [
        t('Still evaluating whether Canada is the right next market', '还在判断加拿大是否适合作为下一步市场'),
        t('Have products but unclear on direction and priorities', '已有产品，但方向和优先级尚不清晰'),
        t('Need a structured framework before committing resources', '需要在投入资源前获得结构化分析框架'),
      ],
      problems: [
        t('Uncertainty about market size and competition', '对市场规模和竞争格局的不确定'),
        t('Lack of clarity on target customer profiles', '目标客户画像不够清晰'),
        t('No go / no-go decision framework', '缺少进入/暂缓决策框架'),
      ],
      deliverables: [
        t('Market landscape and opportunity assessment', '市场格局与机会评估'),
        t('Target segment recommendation', '目标细分建议'),
        t('Entry sequencing roadmap', '进入顺序路线图'),
      ],
      approach: [
        t('Initial consultation to understand business context', '初步咨询，了解业务背景'),
        t('Desk research and market data review', '案头研究与市场数据审视'),
        t('Structured analysis and recommendation', '结构化分析与建议交付'),
      ],
    },
    {
      num: '02',
      title: t('Compliance & Setup Guidance', '合规与落地路径梳理'),
      summary: t(
        'Provides practical pathway clarification for compliance, setup, and operational preparation. We help clients understand required steps, gather documents, and become coordination-ready for engaging local professionals.',
        '为合规、设立和运营准备提供实用的路径梳理。帮助客户理解所需步骤、准备合适文件，并为与本地专业人士的协作做好准备。'
      ),
      suitable: [
        t('Preparing formal market entry and need to understand regulatory steps', '正准备正式市场进入，需要了解监管步骤'),
        t('Unfamiliar with Canadian entity setup and compliance requirements', '不熟悉加拿大实体设立与合规要求'),
        t('Need a preparation plan before engaging legal or tax professionals', '需要在聘请法律或税务专业人士前做好准备计划'),
      ],
      problems: [
        t('Uncertainty about regulatory and compliance steps', '对监管和合规步骤的不确定'),
        t('Lack of understanding of entity setup options', '对实体设立选项缺乏了解'),
        t('Difficulty coordinating across multiple professional services', '难以协调多个专业服务'),
      ],
      deliverables: [
        t('Compliance pathway summary and step-by-step outline', '合规路径总结与分步大纲'),
        t('Entity setup options comparison', '实体设立选项对比'),
        t('Document checklist and preparation guide', '文件清单与准备指南'),
      ],
      approach: [
        t('Review business model and operational requirements', '审视业务模型与运营需求'),
        t('Map regulatory pathways and timelines', '梳理监管路径与时间节点'),
        t('Prepare client for professional engagement', '帮助客户做好协作准备'),
      ],
      boundary: t(
        'This service helps clarify pathways and preparation priorities. It does not replace formal legal, tax, or accounting advice.',
        '该服务用于梳理路径、准备重点与执行优先级，不替代正式法律、税务或会计意见。'
      ),
    },
    {
      num: '03',
      title: t('Localized Digital Growth Infrastructure', '本地化数字增长基础设施'),
      summary: t(
        'Focuses on the practical assets and systems required to communicate clearly, build trust, and capture qualified inquiries in Canada and North America — including bilingual websites, business materials, and lead-generation systems.',
        '聚焦于企业进入加拿大与北美市场所需的实际数字资产与系统，包括清晰表达、信任建立以及有效承接咨询线索的基础能力。涵盖双语官网、商业资料和获客系统。'
      ),
      suitable: [
        t('Need a credible North American web presence', '需要在北美建立可信的网络形象'),
        t('Have English materials that need real localization', '已有英文资料但需要的是真正的本地化'),
        t('Want to build systematic lead capture and inquiry handling', '希望建立系统化的线索收集与咨询处理'),
      ],
      problems: [
        t('Website and materials do not meet local trust expectations', '网站和资料不符合本地信任期望'),
        t('No systematic way to capture and respond to inquiries', '没有系统化的线索捕获与响应方式'),
        t('Brand messaging feels foreign or generic', '品牌信息显得外来或通用'),
      ],
      deliverables: [
        t('Bilingual website for North American markets', '面向北美市场的双语官网'),
        t('Localized business materials and messaging', '本地化商业资料与信息框架'),
        t('Lead-capture forms and inquiry workflow', '线索收集表单与咨询处理工作流'),
        t('AI inquiry triage and response support', 'AI 咨询分类与响应支持'),
      ],
      approach: [
        t('Audit current digital presence and identify gaps', '审视现有数字形象并识别差距'),
        t('Rebuild messaging and materials for local audiences', '为本地受众重构信息与资料'),
        t('Develop and deploy digital entry points', '开发并部署数字入口'),
        t('Test, iterate, and optimize based on inquiries', '基于咨询反馈测试、迭代与优化'),
      ],
    },
  ]

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Services', '服务')}</p>
          <h1 className="font-serif text-[#212121] text-[7vw] md:text-[2.8vw] leading-[1.25] tracking-tight max-w-[780px] mb-4">
            {t(
              'Services designed for businesses preparing to enter Canada and North America with more clarity, stronger local trust, and better digital readiness.',
              '为准备进入加拿大与北美市场的企业提供更清晰的路径、更强的本地信任与更完整的数字准备。'
            )}
          </h1>
          <p className="text-[14px] text-[#767676] max-w-[520px]">
            {t('Three integrated areas of support covering strategy, compliance preparation, and localized digital infrastructure.', '三大相互衔接的支持领域，涵盖策略、合规准备与本地化数字基础设施。')}
          </p>
        </div>
      </section>

      {/* Service Details */}
      <section className="section-padding bg-white">
        <div className="container-site space-y-16 md:space-y-20">
          {services.map((s) => (
            <div key={s.num} className="sp-section">
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-[#C00000] text-[12px] font-bold">{s.num}</span>
                <h2 className="font-serif text-[#212121] text-[6vw] md:text-[1.8vw] leading-[1.3] tracking-tight">{s.title}</h2>
              </div>
              <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.8] max-w-[680px] mb-8">{s.summary}</p>

              {/* Suitable if */}
              <div className="mb-6 p-4 md:p-5 bg-[#F8F9FA] border-l-2 border-[#C00000]">
                <h4 className="text-[12px] font-semibold uppercase tracking-wider text-[#767676] mb-3">
                  {t('This service is suitable if', '适合什么情况')}
                </h4>
                <ul className="space-y-2">
                  {s.suitable.map((item, i) => (
                    <li key={i} className="text-[13px] text-[#555] leading-[1.5] flex gap-2">
                      <span className="text-[#C00000]">·</span>{item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-6">
                <div className="p-4 md:p-5 bg-[#F8F9FA]">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#999] mb-3">{t('What we address', '解决什么问题')}</h4>
                  <ul className="space-y-2">
                    {s.problems.map((item, i) => (
                      <li key={i} className="text-[12px] md:text-[13px] text-[#555] leading-[1.5] flex gap-2">
                        <span className="text-[#C00000]">·</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 md:p-5 bg-[#F8F9FA]">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#999] mb-3">{t('What you receive', '典型交付')}</h4>
                  <ul className="space-y-2">
                    {s.deliverables.map((item, i) => (
                      <li key={i} className="text-[12px] md:text-[13px] text-[#555] leading-[1.5] flex gap-2">
                        <span className="text-[#C00000]">·</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 md:p-5 bg-[#F8F9FA]">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#999] mb-3">{t('How we proceed', '如何推进')}</h4>
                  <ul className="space-y-2">
                    {s.approach.map((item, i) => (
                      <li key={i} className="text-[12px] md:text-[13px] text-[#555] leading-[1.5] flex gap-2">
                        <span className="text-[#C00000]">·</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Boundary note */}
              {'boundary' in s && s.boundary && (
                <p className="text-[12px] md:text-[13px] text-[#999] italic border-t border-[#E5E5E5] pt-4">
                  {s.boundary}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Engagement Approach */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Engagement', '合作方式')}</p>
          <h2 className="font-serif text-[#212121] text-[6vw] md:text-[1.8vw] leading-[1.3] tracking-tight max-w-[500px] mb-10">
            {t('How We Engage', '我们如何开始合作')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { num: '01', title: t('Initial consultation', '初步咨询'), desc: t('We begin by understanding your business, products, and market-entry goals.', '从了解您的业务、产品和市场进入目标开始。') },
              { num: '02', title: t('Clarify priorities', '明确优先事项'), desc: t('We identify the most relevant challenges and where our support adds value.', '识别最相关的挑战以及我们的支持可以产生价值的领域。') },
              { num: '03', title: t('Define scope', '定义合作范围'), desc: t('We agree on a focused scope that matches your stage and priorities.', '商定与您的阶段和优先级相匹配的聚焦范围。') },
              { num: '04', title: t('Execute in stages', '分阶段执行'), desc: t('We work through each stage with clear deliverables and checkpoints.', '以清晰的交付物和检查点推进每个阶段。') },
            ].map((item) => (
              <div key={item.num} className="sp-section card-border bg-white">
                <span className="text-[#C00000] text-[12px] font-bold">{item.num}</span>
                <h3 className="text-[14px] md:text-[15px] font-semibold mt-2 mb-2">{item.title}</h3>
                <p className="text-[12px] md:text-[13px] text-[#767676] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-site text-center">
          <h2 className="font-serif text-[#212121] text-[6vw] md:text-[2vw] leading-[1.3] tracking-tight max-w-[600px] mx-auto mb-6">
            {t('Ready to discuss your market entry?', '准备好讨论您的市场进入了？')}
          </h2>
          <Link to="/contact" className="btn-primary text-[13px] md:text-[14px]">
            {t('Book a Consultation', '预约咨询')}
          </Link>
        </div>
      </section>
    </div>
  )
}
