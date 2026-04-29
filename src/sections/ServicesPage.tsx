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
      'Services — CCBONLINE INC.',
      '服务 — CCBONLINE INC.'
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
  }, [])

  const services = [
    {
      num: '01',
      title: t('North America Entry Assessment', '北美进入初判'),
      summary: t(
        'Considering North America? In 0–30 days, get a clear answer on whether your product fits, what is missing, and what to do first.',
        '考虑进入北美？0–30天内获得明确答案：产品是否适合、缺什么、先做什么。'
      ),
      delivers: [
        t('Product-market fit assessment', '产品适配评估'),
        t('U.S. vs. Canada path comparison', '美加路径比较'),
        t('Compliance risk overview', '合规风险概览'),
        t('Material gap analysis', '材料差距分析'),
        t('Priority action list', '优先行动清单'),
      ],
      result: t(
        'Know whether North America is the right move, what to fix first, and which market offers a better starting point.',
        '知道现在是否该进入北美、先修什么、哪个市场更适合起步。'
      ),
      forWho: [
        t('First-time North America explorers', '首次探索北美的企业'),
        t('Companies with products but no clear path', '有产品但无清晰路径'),
        t('Teams preparing for trade shows', '准备参加展会的企业'),
        t('Businesses unsure about U.S. vs. Canada', '不确定先做美国还是加拿大'),
      ],
    },
    {
      num: '02',
      title: t('Market Entry Diagnostic', '市场进入诊断'),
      summary: t(
        'Ready to enter? A comprehensive diagnostic covering capabilities, customers, channels, compliance, and competition—delivered as a 0–90 day launch plan.',
        '准备进入？全面诊断涵盖能力、客户、渠道、合规和竞争格局——交付为0–90天启动计划。'
      ),
      delivers: [
        t('Business capability assessment', '企业能力评估'),
        t('Target customer & positioning', '目标客户与定位'),
        t('Channel strategy & partner approach', '渠道策略与合作方案'),
        t('Compliance & liability screening', '合规与责任筛查'),
        t('Competitive landscape analysis', '竞争格局分析'),
        t('U.S. vs. Canada detailed comparison', '美加详细比较'),
        t('0–90 day launch plan', '0–90天启动计划'),
        t('Customer development checklist', '客户开发清单'),
      ],
      result: t(
        'A clear plan: who to target, how to reach them, what to prepare, and what to watch—organized into a 90-day roadmap.',
        '清晰计划：目标是谁、如何触达、准备什么、注意什么——整理为90天路线图。'
      ),
      forWho: [
        t('Companies committed to North America entry', '已决定进入北美的企业'),
        t('Teams needing a structured launch plan', '需要结构化启动计划'),
        t('Businesses seeking investor or HQ approval', '需投资人或总部批准'),
        t('Companies needing internal alignment', '需要内部达成一致的团队'),
      ],
    },
    {
      num: '03',
      title: t('Entry Advisory Retainer', '陪跑顾问'),
      summary: t(
        'Have a plan but need execution support? Weekly tracking, material refinement, partner screening, and course correction to keep you moving forward.',
        '有计划但需要执行支持？每周追踪、材料优化、合作伙伴筛选和方向调整，确保持续推进。'
      ),
      delivers: [
        t('Weekly progress meetings', '每周进度会议'),
        t('Customer materials refinement', '客户材料优化'),
        t('Partner & distributor screening', '合作伙伴筛选'),
        t('Trade show prep & follow-up', '展会准备与跟进'),
        t('Compliance guidance', '合规指导'),
        t('Quarterly review & adjustment', '季度复盘与调整'),
      ],
      result: t(
        'Real progress: qualified leads, meaningful partnerships, and a team that knows what to do next.',
        '实际进展：合格线索、有意义的合作伙伴关系、团队知道下一步做什么。'
      ),
      forWho: [
        t('Companies with a plan ready to execute', '已有计划准备执行的企业'),
        t('Teams needing regular accountability', '需要定期跟进的团队'),
        t('Businesses seeking hands-on support', '需要实际执行支持'),
        t('Companies navigating complex compliance', '需要应对复杂合规的企业'),
      ],
    },
  ]

  return (
    <div ref={pageRef}>
      <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Services', '服务')}</p>
          <h1 className="font-serif text-[#212121] text-[5vw] md:text-[2.8vw] leading-[1.35] md:leading-[1.25] tracking-tight max-w-[780px] mb-4">
            {t('North America market entry advisory.', '北美市场准入咨询。')}
          </h1>
          <p className="text-[12px] md:text-[14px] text-[#767676] max-w-[520px]">
            {t('Three service levels to match your stage.', '三层服务匹配您的阶段。')}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site space-y-14 md:space-y-18">
          {services.map((s) => (
            <div key={s.num} className="sp-section">
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-[#C00000] text-[12px] font-bold">{s.num}</span>
                <h2 className="font-serif text-[#212121] text-[5vw] md:text-[1.8vw] leading-[1.35] md:leading-[1.3] tracking-tight">{s.title}</h2>
              </div>
              <p className="text-[13px] md:text-[15px] text-[#555] leading-[1.8] max-w-[680px] mb-6">{s.summary}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-5">
                <div className="p-4 md:p-5 bg-[#F8F9FA]">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#999] mb-3">{t('What you receive', '交付内容')}</h4>
                  <ul className="space-y-2">
                    {s.delivers.map((item, i) => (
                      <li key={i} className="text-[11px] md:text-[13px] text-[#555] leading-[1.5] flex gap-2"><span className="text-[#C00000]">·</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <div className="p-4 md:p-5 bg-[#F8F9FA] border-l-2 border-[#C00000]">
                    <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#767676] mb-3">{t('What you gain', '您将获得')}</h4>
                    <p className="text-[12px] md:text-[13px] text-[#555] leading-[1.6]">{s.result}</p>
                  </div>
                  <div className="p-4 md:p-5 bg-[#F8F9FA]">
                    <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#999] mb-3">{t('Best for', '适合谁')}</h4>
                    <ul className="space-y-2">
                      {s.forWho.map((item, i) => (
                        <li key={i} className="text-[11px] md:text-[13px] text-[#555] leading-[1.5] flex gap-2"><span className="text-[#C00000]">·</span>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Process', '合作流程')}</p>
          <h2 className="font-serif text-[#212121] text-[5vw] md:text-[1.8vw] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[500px] mb-10">{t('How We Work Together', '如何合作')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { num: '01', title: t('Initial conversation', '初步沟通'), desc: t('Tell us about your business and North America goals.', '告诉我们您的业务和北美目标。') },
              { num: '02', title: t('Assessment', '评估'), desc: t('We conduct the assessment based on your chosen service level.', '按您选择的服务层级开展评估。') },
              { num: '03', title: t('Review', '审阅'), desc: t('We walk through findings and agree on next steps.', '一起审阅发现，商定下一步。') },
              { num: '04', title: t('Execution', '执行'), desc: t('Execute internally, or continue with advisory support.', '内部执行，或继续顾问支持。') },
            ].map((item) => (
              <div key={item.num} className="sp-section card-border bg-white">
                <span className="text-[#C00000] text-[12px] font-bold">{item.num}</span>
                <h3 className="text-[13px] md:text-[15px] font-semibold mt-2 mb-2">{item.title}</h3>
                <p className="text-[11px] md:text-[13px] text-[#767676] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site text-center">
          <h2 className="font-serif text-[#212121] text-[5vw] md:text-[2vw] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mx-auto mb-6">{t('Ready to evaluate your North America readiness?', '准备好评估北美就绪度？')}</h2>
          <Link to="/contact" className="btn-primary text-[12px] md:text-[14px]">{t('Book a Consultation', '预约咨询')}</Link>
        </div>
      </section>
    </div>
  )
}
