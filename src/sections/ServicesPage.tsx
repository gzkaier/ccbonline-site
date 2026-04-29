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
      title: t('Market Entry Readiness Diagnostic', '北美市场进入可行性初判'),
      summary: t(
        'Before committing resources, know whether your product is ready. We assess market fit, certification gaps, entity requirements, and channel foundations — then recommend whether to prioritize Canada, the US, or a validation-first approach.',
        '在投入资源之前，先了解您的产品是否准备好。我们评估市场适配度、认证差距、主体要求和渠道基础——然后建议优先做加拿大、美国，还是先做客户验证。'
      ),
      delivers: [
        t('Product-market fit for Canada/North America', '产品加拿大/北美适配分析'),
        t('Certification & standards gap analysis', '认证与标准差距分析'),
        t('Entity & operational readiness check', '主体与运营准备度检查'),
        t('Canada vs. US entry priority', '加拿大与美国进入优先度'),
        t('First 30–90 day action plan', '前30–90天行动计划'),
      ],
      forWho: [
        t('First-time North America explorers', '首次探索北美市场'),
        t('Companies unsure about market fit', '不确定产品是否适配'),
        t('Leadership needing a go/no-go assessment', '管理层需要可行性判断'),
        t('Teams preparing for trade shows', '准备参加展会的企业'),
      ],
    },
    {
      num: '02',
      title: t('Market Entry Strategy & Roadmap', '北美市场进入路径设计'),
      summary: t(
        'Turn readiness into a concrete plan. We design your target customer profile, entry phasing, channel priorities, budget framework, and internal team roles — all organized into a 90-day execution roadmap.',
        '将就绪度转化为具体计划。我们设计目标客户画像、进入阶段、渠道优先级、预算框架和内部团队分工——全部整理为90天执行路线图。'
      ),
      delivers: [
        t('Target customer & market positioning', '目标客户与市场定位'),
        t('Entry phasing & milestone design', '进入阶段与里程碑设计'),
        t('Channel strategy & partner approach', '渠道策略与合作方案'),
        t('Budget & resource plan', '预算与资源计划'),
        t('Internal team role definition', '内部团队分工定义'),
        t('90-day execution roadmap', '90天执行路线图'),
      ],
      forWho: [
        t('Companies committed to North America entry', '已决定进入北美的企业'),
        t('Teams needing structured planning', '需要结构化计划的团队'),
        t('Businesses seeking investor or HQ approval', '需要投资人或总部批准'),
        t('Leadership needing internal alignment', '需要在内部达成一致的团队'),
      ],
    },
    {
      num: '03',
      title: t('Compliance & Import Coordination', '合规、进口与责任链协同'),
      summary: t(
        'We coordinate with relevant professional partners where legal, tax, customs, certification, or regulatory expertise is required. We do not replace lawyers or accountants — we make sure the right questions are asked and the right partners are involved.',
        '对涉及法律、税务、清关、认证和监管判断的事项，我们协同相应专业机构共同推进。我们不替代律师或会计师——我们确保问对问题、找对伙伴。'
      ),
      delivers: [
        t('Import & customs requirements screening', '进口与清关要求筛查'),
        t('Product certification & standards mapping', '产品认证与标准梳理'),
        t('Tax & regulatory obligations review', '税务与监管义务审查'),
        t('Liability & responsibility chain analysis', '责任链分析'),
        t('Professional partner coordination', '专业机构协同'),
      ],
      forWho: [
        t('Companies importing products to Canada/US', '向加拿大/美国进口产品的企业'),
        t('Businesses facing certification gaps', '存在认证差距的企业'),
        t('Teams needing regulatory clarity', '需要厘清监管要求的团队'),
        t('Companies with complex supply chains', '供应链复杂的企业'),
      ],
    },
    {
      num: '04',
      title: t('Channel & Partner Development', '渠道与本地合作伙伴开发'),
      summary: t(
        'Finding the right local partners is often the difference between entry and traction. We help identify, evaluate, and approach distributors, industry customers, 3PL providers, and service partners that fit your product and stage.',
        '找到合适的本地合作伙伴往往决定了能否真正落地。我们帮助识别、评估和接触适合您产品阶段的经销商、行业客户、物流提供商和服务伙伴。'
      ),
      delivers: [
        t('Distributor & partner identification', '经销商与合作伙伴识别'),
        t('Partner evaluation & due diligence', '合作伙伴评估与尽职调查'),
        t('Industry customer development', '行业客户开发'),
        t('3PL, warehousing & after-sales setup', '物流、仓储与售后搭建'),
        t('Trade show follow-up & BD support', '展会跟进与商务支持'),
      ],
      forWho: [
        t('Manufacturers seeking distributors', '寻找分销商的制造企业'),
        t('Brands needing local partners', '需要本地合作伙伴的品牌'),
        t('Companies with trade show follow-up needs', '有展会跟进需求的企业'),
        t('Teams needing local BD representation', '需要本地商务代表的团队'),
      ],
    },
    {
      num: '05',
      title: t('Digital Trust & Local Presence', '数字化信任与本地前台建设'),
      summary: t(
        'North American customers research before they buy. We build the digital infrastructure — website, business profiles, inquiry systems, trust content — that makes you findable, credible, and contactable in local market context.',
        '北美客户在购买前会做调研。我们建设数字化基础设施——官网、商业简介、询盘系统、信任内容——让本地市场的客户能找到您、信任您、联系到您。'
      ),
      delivers: [
        t('North America-focused website', '面向北美的官网'),
        t('English business profile & messaging', '英文商业简介与表达'),
        t('LinkedIn & professional presence', 'LinkedIn与专业形象'),
        t('Customer inquiry & conversion setup', '客户询盘与转化设置'),
        t('Case studies & trust content', '案例与信任内容'),
      ],
      forWho: [
        t('Companies with no North America digital presence', '没有在北美数字存在的企业'),
        t('Businesses needing English content', '需要英文内容的企业'),
        t('Teams wanting to build local credibility', '希望建立本地可信度的团队'),
        t('Companies preparing for customer outreach', '准备开展客户接触的企业'),
      ],
    },
    {
      num: '06',
      title: t('Execution Support & Project Management', '本地执行与项目推进陪跑'),
      summary: t(
        'Plans fail without execution discipline. We provide weekly progress check-ins, task tracking, supplier coordination, material refinement, and phase reviews — keeping your market entry project moving forward with accountability.',
        '没有执行纪律，计划就会落空。我们提供每周进度跟进、任务追踪、供应商协调、材料优化和阶段复盘——确保您的市场进入项目有问责地持续推进。'
      ),
      delivers: [
        t('Weekly progress meetings & action tracking', '每周进度会议与行动追踪'),
        t('Supplier & partner coordination', '供应商与合作伙伴协调'),
        t('Customer materials refinement', '客户材料优化'),
        t('Milestone & phase review', '里程碑与阶段复盘'),
        t('Course correction & plan adjustment', '方向调整与计划优化'),
      ],
      forWho: [
        t('Companies with a plan needing execution support', '有计划需要执行支持'),
        t('Teams needing regular accountability', '需要定期跟进和问责'),
        t('Businesses navigating complex multi-party projects', ' navigating 复杂多方项目'),
        t('Leadership wanting visibility into progress', '管理层需要掌握进展'),
      ],
    },
  ]

  return (
    <div ref={pageRef}>
      <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Services', '服务')}</p>
          <h1 className="font-serif text-[#212121] text-[5vw] md:text-[2.8vw] leading-[1.35] md:leading-[1.25] tracking-tight max-w-[800px] mb-4">
            {t('Six capabilities. One goal: practical market entry.', '六大能力。一个目标：让市场进入真正落地。')}
          </h1>
          <p className="text-[12px] md:text-[14px] text-[#767676] max-w-[560px]">
            {t('From initial assessment to ongoing execution support.', '从初步评估到持续执行支持。')}
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
          ))}
        </div>
      </section>

      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site text-center">
          <h2 className="font-serif text-[#212121] text-[5vw] md:text-[2vw] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mx-auto mb-6">{t('Ready to evaluate your market entry readiness?', '准备好评估您的市场进入就绪度了吗？')}</h2>
          <Link to="/contact" className="btn-primary text-[12px] md:text-[14px]">{t('Request an Initial Assessment', '申请初步市场进入评估')}</Link>
        </div>
      </section>
    </div>
  )
}
