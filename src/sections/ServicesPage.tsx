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
  }, [])

  const services = [
    {
      num: '01',
      title: t('Market Entry Consulting', '市场进入咨询'),
      summary: t('Helps businesses assess whether Canada or North America should be a near-term priority, which products and customer segments to focus on first, and how to approach market entry with more clarity before committing larger resources.',
        '帮助企业在正式投入更大资源之前，判断加拿大或北美市场是否值得优先进入，明确应先聚焦哪些产品与客户方向，并形成更清晰的进入思路与90天行动计划。'),
      suitable: [
        t('Still evaluating whether Canada is the right next market', '还在判断加拿大是否适合作为下一步市场'),
        t('Have products but unclear on direction and priorities', '已有产品，但方向和优先级尚不清晰'),
        t('Need a structured framework before committing resources', '需要在投入资源前获得结构化分析框架'),
      ],
      deliverables: [
        t('Market opportunity and industry analysis', '市场机会与行业分析'),
        t('Product and customer prioritization', '产品与客户优先级判断'),
        t('Competitive landscape assessment', '竞争格局评估'),
        t('90-day entry action plan', '90天进入行动计划'),
      ],
      approach: [
        t('Initial consultation to understand business context', '初步咨询，了解业务背景与目标'),
        t('Desk research and market data review', '案头研究与市场数据审视'),
        t('Structured analysis and recommendation delivery', '结构化分析与建议交付'),
      ],
    },
    {
      num: '02',
      title: t('Compliance & Company Setup', '公司与合规路径'),
      summary: t('Provides practical pathway clarification for company registration, tax, product certification, and import compliance. We help clients understand required steps, gather documents, and become coordination-ready for engaging local professionals.',
        '为公司注册、税务、产品认证和进口合规提供实用的路径梳理。帮助客户理解所需步骤、准备合适文件，并为与本地专业人士的协作做好准备。'),
      suitable: [
        t('Preparing formal market entry and need to understand regulatory steps', '正准备正式市场进入，需要了解监管步骤'),
        t('Unfamiliar with Canadian GST/HST, CARM, and compliance requirements', '不熟悉加拿大GST/HST、CARM及合规要求'),
        t('Need a preparation plan before engaging legal or tax professionals', '需要在聘请法律或税务专业人士前做好准备计划'),
      ],
      deliverables: [
        t('Company registration pathway summary', '公司注册路径总结'),
        t('GST/HST, CARM, and tax requirement outline', 'GST/HST、CARM及税务要求大纲'),
        t('Product certification and import compliance guide', '产品认证与进口合规指南'),
        t('Trademark and IP protection basics', '商标与知识产权基础保护'),
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
      title: t('English Materials Rebuild', '英文商业资料重构'),
      summary: t('Rebuilds company profiles, capability sheets, product pages, sales emails, LinkedIn messaging, and quotation templates to meet North American business expectations — not merely translate existing content.',
        '重构公司介绍、Capability Sheet、产品页、销售邮件、LinkedIn话术、报价模板等，以符合北美商业期望——不是简单翻译现有内容。'),
      suitable: [
        t('Have Chinese materials that need professional English adaptation', '已有中文资料，需要专业的英文适配'),
        t('Current English materials feel generic or fail to build trust', '现有英文资料显得通用或无法建立信任'),
        t('Need sales narratives that resonate with North American buyers', '需要能引起北美买家共鸣的销售叙事'),
      ],
      deliverables: [
        t('Company profile and capability sheet', '公司介绍与Capability Sheet'),
        t('Product pages and sales narratives', '产品页与销售叙事'),
        t('LinkedIn messaging and email templates', 'LinkedIn话术与邮件模板'),
        t('Quotation and proposal frameworks', '报价与提案框架'),
      ],
      approach: [
        t('Audit current materials and identify trust gaps', '审视现有资料并识别信任差距'),
        t('Rebuild messaging for North American audiences', '为北美受众重构信息表达'),
        t('Deliver templates and train internal team', '交付模板并培训内部团队'),
      ],
    },
    {
      num: '04',
      title: t('AI Website & Digital Entry', 'AI网站与数字入口'),
      summary: t('Builds bilingual corporate websites, SEO optimization, Google Business profiles, lead capture forms, AI customer service, and data analytics to create a professional overseas customer acquisition entry point.',
        '构建双语企业官网、SEO优化、Google商业档案、线索收集表单、AI客服和数据分析，打造专业海外获客入口。'),
      suitable: [
        t('Need a credible North American web presence', '需要在北美建立可信的网络形象'),
        t('Current website lacks lead capture or inquiry handling', '现有网站缺少线索收集或咨询处理'),
        t('Want to use AI to improve customer response efficiency', '希望使用AI提升客户响应效率'),
      ],
      deliverables: [
        t('Bilingual corporate website for North American markets', '面向北美市场的双语企业官网'),
        t('SEO and Google Business optimization', 'SEO与Google商业优化'),
        t('Lead capture forms and AI chatbot', '线索收集表单与AI客服'),
        t('Data analytics and performance tracking', '数据分析与效果追踪'),
      ],
      approach: [
        t('Audit current digital presence and identify gaps', '审视现有数字形象并识别差距'),
        t('Design and develop bilingual website with lead capture', '设计开发带线索收集的双语网站'),
        t('Deploy AI chatbot and analytics dashboard', '部署AI客服与分析面板'),
        t('Test, iterate, and optimize based on data', '基于数据测试、迭代与优化'),
      ],
    },
    {
      num: '05',
      title: t('Digital Marketing & Customer Development', '数字营销与客户开发'),
      summary: t('Target customer list building, email outreach, LinkedIn development, content marketing, advertising guidance, and customer feedback review to systematically develop North American prospects.',
        '目标客户名单、邮件触达、LinkedIn开发、内容营销、广告投放建议与客户反馈复盘，系统化开发北美潜在客户。'),
      suitable: [
        t('Have a website but lack systematic customer outreach', '已有网站但缺少系统化的客户触达'),
        t('Want to use LinkedIn and email for B2B prospecting', '希望使用LinkedIn和邮件进行B2B开发'),
        t('Need guidance on content and advertising strategy', '需要内容与广告策略指导'),
      ],
      deliverables: [
        t('Target customer list and outreach plan', '目标客户名单与触达计划'),
        t('LinkedIn profile optimization and messaging scripts', 'LinkedIn档案优化与话术脚本'),
        t('Email sequences and follow-up templates', '邮件序列与跟进模板'),
        t('Advertising strategy and budget guidance', '广告策略与预算指导'),
      ],
      approach: [
        t('Define ideal customer profile and target list', '定义理想客户画像与目标名单'),
        t('Develop outreach scripts and content calendar', '开发触达话术与内容日历'),
        t('Execute campaigns and track response rates', '执行活动并追踪响应率'),
        t('Review feedback and refine approach', '复盘反馈并优化方法'),
      ],
    },
    {
      num: '06',
      title: t('Localization & Operational Support', '本地化运营支持'),
      summary: t('Local customer service workflows, sales follow-up cadence, channel/agent screening, customer meeting support, and operational tool setup to help businesses run smoothly in the North American market.',
        '本地客服流程、销售跟进节奏、渠道/代理商筛选、客户会议支持、运营工具搭建，帮助企业在北美市场顺畅运营。'),
      suitable: [
        t('Have initial customers but lack local operational processes', '已有初步客户但缺少本地运营流程'),
        t('Need help screening distributors or agents', '需要帮助筛选分销商或代理商'),
        t('Want to establish local customer service and sales rhythms', '希望建立本地客服与销售节奏'),
      ],
      deliverables: [
        t('Customer service workflow and response standards', '客服流程与响应标准'),
        t('Sales follow-up cadence and CRM setup', '销售跟进节奏与CRM搭建'),
        t('Channel/agent screening criteria', '渠道/代理商筛选标准'),
        t('Meeting support and presentation materials', '会议支持与演示材料'),
      ],
      approach: [
        t('Map current operational gaps', '梳理当前运营差距'),
        t('Design workflows adapted to North American expectations', '设计符合北美期望的工作流'),
        t('Train team and deploy tools', '培训团队并部署工具'),
        t('Monitor and adjust based on customer feedback', '基于客户反馈监控与调整'),
      ],
    },
  ]

  return (
    <div ref={pageRef}>
      <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Services', '服务')}</p>
          <h1 className="font-serif text-[#212121] text-[7vw] md:text-[2.8vw] leading-[1.25] tracking-tight max-w-[780px] mb-4">
            {t('Services designed for businesses preparing to enter Canada and North America.', '为准备进入加拿大与北美市场的企业提供更清晰的路径、更强的本地信任与更完整的数字准备。')}
          </h1>
          <p className="text-[14px] text-[#767676] max-w-[520px]">
            {t('Six integrated areas of support covering market strategy, compliance, digital infrastructure, materials, marketing, and operations.', '六大相互衔接的支持领域，涵盖市场策略、合规、数字基础设施、资料重构、营销和运营。')}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site space-y-14 md:space-y-18">
          {services.map((s) => (
            <div key={s.num} className="sp-section">
              <div className="flex items-baseline gap-3 mb-5">
                <span className="text-[#C00000] text-[12px] font-bold">{s.num}</span>
                <h2 className="font-serif text-[#212121] text-[6vw] md:text-[1.8vw] leading-[1.3] tracking-tight">{s.title}</h2>
              </div>
              <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.8] max-w-[680px] mb-6">{s.summary}</p>

              <div className="mb-5 p-4 md:p-5 bg-[#F8F9FA] border-l-2 border-[#C00000]">
                <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#767676] mb-3">{t('Suitable if', '适合什么情况')}</h4>
                <ul className="space-y-2">
                  {s.suitable.map((item, i) => (
                    <li key={i} className="text-[13px] text-[#555] leading-[1.5] flex gap-2"><span className="text-[#C00000]">·</span>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-5">
                <div className="p-4 md:p-5 bg-[#F8F9FA]">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#999] mb-3">{t('Deliverables', '典型交付')}</h4>
                  <ul className="space-y-2">
                    {s.deliverables.map((item, i) => (
                      <li key={i} className="text-[12px] md:text-[13px] text-[#555] leading-[1.5] flex gap-2"><span className="text-[#C00000]">·</span>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 md:p-5 bg-[#F8F9FA]">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#999] mb-3">{t('How we proceed', '如何推进')}</h4>
                  <ul className="space-y-2">
                    {s.approach.map((item, i) => (
                      <li key={i} className="text-[12px] md:text-[13px] text-[#555] leading-[1.5] flex gap-2"><span className="text-[#C00000]">·</span>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {'boundary' in s && s.boundary && (
                <p className="text-[12px] md:text-[13px] text-[#999] italic border-t border-[#E5E5E5] pt-4">{s.boundary}</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Engagement', '合作方式')}</p>
          <h2 className="font-serif text-[#212121] text-[6vw] md:text-[1.8vw] leading-[1.3] tracking-tight max-w-[500px] mb-10">{t('How We Engage', '我们如何开始合作')}</h2>
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

      <section className="section-padding bg-white">
        <div className="container-site text-center">
          <h2 className="font-serif text-[#212121] text-[6vw] md:text-[2vw] leading-[1.3] tracking-tight max-w-[600px] mx-auto mb-6">{t('Ready to discuss your market entry?', '准备好讨论您的市场进入了？')}</h2>
          <Link to="/contact" className="btn-primary text-[13px] md:text-[14px]">{t('Book a Consultation', '预约咨询')}</Link>
        </div>
      </section>
    </div>
  )
}
