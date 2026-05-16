import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ServicesPage() {
  const { t, lang } = useLanguage()
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = t(
      'Services — Market Entry Diagnosis, Compliance & Execution | CCBONLINE INC.',
      '服务 — 市场进入诊断、合规与执行 | CCBONLINE INC.'
    )
    window.scrollTo(0, 0)
    const page = pageRef.current
    if (!page) return
    const ctx = gsap.context(() => {
      gsap.from(page.querySelectorAll('.sp-block'), {
        y: 25, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: page, start: 'top 80%', once: true },
      })
    }, page)
    return () => ctx.revert()
  }, [])

  const services = [
    {
      num: '01',
      title: t('Market Entry Diagnosis', '市场进入诊断'),
      what: t('A structured assessment of whether your product, operations, and team are ready for North America — and what is missing.', '对您的产品、运营和团队是否准备好进入北美的结构化评估——以及缺少什么。'),
      why: t('Most companies waste months (and money) pursuing markets they are not ready for. A diagnosis prevents this by giving you a clear go/no-go recommendation with specific gaps to address.', '大多数企业在没准备好的市场上浪费数月（和资金）。诊断通过给出明确的可行/不可行建议和具体差距来防止这一点。'),
      deliver: [
        t('Product-market fit assessment for Canada/North America', '产品加拿大/北美适配评估'),
        t('Competitive landscape scan', '竞争格局扫描'),
        t('Certification & compliance gap identification', '认证与合规差距识别'),
        t('Readiness scorecard with priority actions', '就绪度评分卡与优先行动'),
        t('Canada vs. US priority recommendation', '加拿大与美国优先度建议'),
      ],
    },
    {
      num: '02',
      title: t('Compliance Pathway Mapping', '合规路径绘制'),
      what: t('A detailed map of the certification, customs, tax, and regulatory requirements your product must meet to enter Canada or the US legally and safely.', '您的产品必须满足的认证、清关、税务和监管要求的详细地图，以合法安全地进入加拿大或美国。'),
      why: t('Compliance gaps are the single most common reason products from overseas get held at customs, rejected by distributors, or recalled from market. Knowing the pathway before you ship saves time, money, and reputation.', '合规差距是中国产品被海关扣留、被经销商拒绝或从市场召回的最常见原因。发货前了解路径可节省时间、资金和声誉。'),
      deliver: [
        t('Product-specific certification requirement list (CSA, UL, FCC, IC, Health Canada)', '产品特定认证要求清单（CSA、UL、FCC、IC、加拿大卫生部）'),
        t('Import pathway design (direct, broker, distributor, subsidiary)', '进口路径设计（直接、代理、经销商、子公司）'),
        t('Customs documentation checklist', '清关文件检查清单'),
        t('Tax & duty obligations summary', '税务与关税义务摘要'),
        t('Professional partner introductions (brokers, certifiers, lawyers)', '专业合作伙伴介绍（代理、认证机构、律师）'),
      ],
    },
    {
      num: '03',
      title: t('Channel Validation', '渠道验证'),
      what: t('Systematic identification, evaluation, and initial contact with potential distributors, partners, and customers who fit your product and stage.', '系统识别、评估和初步接触适合您产品和阶段的潜在经销商、合作伙伴和客户。'),
      why: t('The right channel partner can make your market entry. The wrong one can waste a year. We help you find, evaluate, and approach partners who have the capability, motivation, and customer base to move your product.', '合适的渠道合作伙伴可以成就您的市场进入。错误的合作伙伴可能浪费一年。我们帮助您找到、评估和接触有能力和动力推动您产品的合作伙伴。'),
      deliver: [
        t('Channel strategy (direct, distributor, hybrid, online)', '渠道策略（直接、经销商、混合、在线）'),
        t('Partner identification & shortlist', '合作伙伴识别与候选清单'),
        t('Partner evaluation framework', '合作伙伴评估框架'),
        t('Initial outreach strategy & scripts', '初步外联拓展策略与话术脚本'),
        t('Trade show or visit planning', '展会或拜访计划'),
      ],
    },
    {
      num: '04',
      title: t('Local Execution Support', '本地执行支持'),
      what: t('Hands-on project management and coordination to keep your market entry moving forward — weekly tracking, partner management, material refinement, and phase reviews.', '实际项目管理和协调，确保市场进入持续推进——每周追踪、合作伙伴管理、材料优化和阶段复盘。'),
      why: t('Plans without execution discipline fail. We provide the structure, accountability, and local presence needed to turn strategy into customer conversations, partner agreements, and actual sales.', '没有执行纪律的计划会失败。我们提供将策略转化为客户对话、合作伙伴协议和实际销售所需的结构、问责机制和本地布局。'),
      deliver: [
        t('Weekly progress meetings & action tracking', '每周进度会议与行动追踪'),
        t('Partner & supplier coordination', '合作伙伴与供应商协调'),
        t('Customer materials & pitch refinement', '客户材料与推介优化'),
        t('Milestone & phase review reports', '里程碑与阶段复盘报告'),
        t('Course correction & plan adjustment', '方向调整与计划优化'),
      ],
    },
    {
      num: '05',
      title: t('0–90 Day Entry Roadmap', '0–90天进入路线图'),
      what: t('A concrete, week-by-week execution plan that takes you from assessment to first customer conversations or partner agreements within 90 days.', '从评估到首次客户对话或合作伙伴协议的具体逐周执行计划，在90天内完成。'),
      why: t('Without a structured timeline, market entry becomes an endless series of "next steps" that never quite happen. A 90-day roadmap creates urgency, accountability, and measurable progress.', '没有结构化时间表，市场进入变成一系列永远不会真正发生的"下一步"。90天路线图创造紧迫感、问责和可衡量的进展。'),
      deliver: [
        t('Week-by-week action plan with owners and deadlines', '逐周行动计划，含责任人和截止日期'),
        t('Milestone definitions and success criteria', '里程碑定义和成功标准'),
        t('Resource & budget allocation', '资源与预算分配'),
        t('Risk register and contingency plans', '风险登记和应急预案'),
        t('Go/no-go decision points', '继续/停止决策点'),
      ],
    },
  ]

  return (
    <div ref={pageRef}>
      <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Services', '服务')}</p>
          <h1 className="font-serif text-[#212121] text-[32px] md:text-[36px] lg:text-[42px] leading-[1.35] md:leading-[1.25] tracking-tight max-w-[800px] mb-4">
            {t('From Diagnosis to Execution', '从诊断到执行')}
          </h1>
          <p className="text-[12px] md:text-[14px] text-[#767676] max-w-[560px]">
            {t('Five integrated capabilities that turn market entry intent into practical operations.', '五项整合能力，将市场进入意图转化为实际运营。')}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site space-y-14 md:space-y-18">
          {services.map((s) => (
            <div key={s.num} className="sp-block">
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-[#00A884] text-[12px] font-bold">{s.num}</span>
                <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] md:leading-[1.3] tracking-tight">{s.title}</h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-6">
                <div className="lg:col-span-4">
                  <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#767676] mb-2">{t('What it means', '含义')}</p>
                    <p className="text-[12px] md:text-[14px] text-[#555] leading-[1.7]">{s.what}</p>
                  </div>
                </div>
                <div className="lg:col-span-8">
                  <div className="p-4 bg-[#F8F9FA]">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#999] mb-2">{t('Why it matters', '重要性')}</p>
                    <p className="text-[12px] md:text-[14px] text-[#555] leading-[1.7]">{s.why}</p>
                  </div>
                </div>
              </div>

              <div className="p-4 md:p-5 bg-[#F8F9FA]">
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#999] mb-3">{t('What we deliver', '交付内容')}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {s.deliver.map((item, i) => (
                    <div key={i} className="text-[11px] md:text-[13px] text-[#555] leading-[1.5] flex gap-2">
                      <span className="text-[#00A884]">·</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-[#1a1a2e]">
        <div className="container-site">
          <div className="max-w-[700px]">
            <h2 className="font-serif text-white text-[26px] md:text-[30px] lg:text-[34px] leading-[1.35] md:leading-[1.3] tracking-tight mb-6">
              {t('Not sure which service fits your stage?', '不确定哪个服务适合您的阶段？')}
            </h2>
            <Link to={`/${lang}/contact`} className="btn-primary text-[12px] md:text-[14px]">
              {t('Discuss Your Market Entry Plan', '讨论您的市场进入计划')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
