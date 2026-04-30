import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CanadaMarketEntry() {
  const { t } = useLanguage()
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = t(
      'Canada Market Entry Consulting for Chinese Businesses | CCBONLINE INC.',
      '中国企业加拿大市场进入咨询 | CCBONLINE INC.'
    )
    window.scrollTo(0, 0)
    const page = pageRef.current
    if (!page) return
    const ctx = gsap.context(() => {
      gsap.from(page.querySelectorAll('.cme-block'), {
        y: 25, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: page, start: 'top 80%', once: true },
      })
    }, page)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef}>
      <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Canada Market Entry', '加拿大市场进入')}</p>
          <h1 className="font-serif text-[#212121] text-[28px] md:text-[32px] lg:text-[36px] md:text-[32px] md:text-[36px] lg:text-[42px] leading-[1.35] md:leading-[1.25] tracking-tight max-w-[850px] mb-4">
            {t('Canada Market Entry Consulting for Chinese Businesses', '中国企业加拿大市场进入咨询')}
          </h1>
          <p className="text-[12px] md:text-[14px] text-[#767676] max-w-[600px]">
            {t('A practical pathway from exploration to local operations — designed for Chinese manufacturers, brands, and industrial companies.', '从探索到本地运营的实际路径——为中国制造企业、品牌和工业公司设计。')}
          </p>
        </div>
      </section>

      {/* Section 1: Why Canada */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <p className="text-label mb-3">{t('Why Canada', '为什么选择加拿大')}</p>
          <h2 className="font-serif text-[#212121] text-[28px] md:text-[32px] lg:text-[36px] md:text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10">
            {t('Canada as a Strategic Entry Point', '加拿大作为战略性进入点')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[800px]">
            {[
              { title: t('Lower risk than the US for initial entry', '初始进入风险低于美国'), desc: t('Canada\'s smaller market means lower upfront investment and faster feedback loops for product-market fit validation.', '加拿大市场较小意味着前期投入更低，产品适配验证的反馈周期更短。') },
              { title: t('Established China-Canada trade infrastructure', '成熟的中加贸易基础设施'), desc: t('Well-developed customs processes, import documentation standards, and freight corridors between China and major Canadian ports.', '成熟的海关流程、进口文档标准和货运通道。') },
              { title: t('Uniform federal regulation', '统一的联邦法规'), desc: t('Unlike the US state-by-state patchwork, Canadian federal regulations provide a more predictable compliance framework.', '与美国各州拼凑式法规不同，加拿大联邦法规提供更可预测的合规框架。') },
              { title: t('Credibility building for US expansion', '为美国扩张建立可信度'), desc: t('Success in Canada generates case studies, references, and operational experience that make US market conversations easier.', '加拿大的成功产生案例、推荐和运营经验，让美国市场对话更容易。') },
            ].map((item, i) => (
              <div key={i} className="cme-block card-border bg-white">
                <h3 className="text-[14px] md:text-[15px] font-semibold mb-2">{item.title}</h3>
                <p className="text-[11px] md:text-[13px] text-[#767676] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2: Who Is Suitable */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Suitability', '适合性')}</p>
          <h2 className="font-serif text-[#212121] text-[28px] md:text-[32px] lg:text-[36px] md:text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10">
            {t('Who Is Suitable for Canada Entry', '谁适合进入加拿大')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {[
              t('Manufacturers with export-ready products', '拥有出口就绪产品的制造商'),
              t('Consumer brands seeking North American presence', '寻求北美存在的消费品牌'),
              t('Industrial suppliers with B2B customer potential', '有B2B客户潜力的工业供应商'),
              t('Technology hardware companies with certification needs', '有认证需求的科技硬件公司'),
              t('Service companies with cross-border delivery capability', '有跨境交付能力的服务公司'),
              t('Companies already exporting to Asia or Europe, expanding to North America', '已向亚洲或欧洲出口、扩展至北美的企业'),
            ].map((text, i) => (
              <div key={i} className="cme-block flex items-start gap-2 p-4 bg-white border border-[#E5E5E5]">
                <span className="text-[#C00000] text-[14px] mt-0.5">✓</span>
                <span className="text-[12px] md:text-[14px] text-[#444] leading-[1.6]">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: What Companies Must Prepare */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <p className="text-label mb-3">{t('Preparation', '准备工作')}</p>
          <h2 className="font-serif text-[#212121] text-[28px] md:text-[32px] lg:text-[36px] md:text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10">
            {t('What Companies Must Prepare Before Entry', '进入前必须准备什么')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[800px]">
            {[
              { num: '01', title: t('Product documentation in English', '英文产品文档'), desc: t('Technical specs, safety data sheets, usage instructions, and product claims must be available in English or French.', '技术规格、安全数据表、使用说明和产品声明必须提供英文或法文版本。') },
              { num: '02', title: t('Certification awareness', '认证意识'), desc: t('CSA, UL, FCC, IC, and Health Canada requirements vary by product category. Know what applies to yours.', 'CSA、UL、FCC、IC和加拿大卫生部要求因产品类别而异。了解哪些适用于您。') },
              { num: '03', title: t('Import entity structure', '进口主体结构'), desc: t('Determine whether to import directly, through a broker, via a Canadian subsidiary, or through a distributor.', '确定是直接进口、通过代理、加拿大子公司还是经销商。') },
              { num: '04', title: t('Pricing and landed cost model', '定价与到岸成本模型'), desc: t('Factor in freight, duties, GST/HST, brokerage, and local delivery to set realistic pricing.', '将运费、关税、GST/HST、代理费和本地配送纳入定价。') },
              { num: '05', title: t('Customer support capability', '客户支持能力'), desc: t('North American customers expect local language support, return handling, and warranty responsiveness.', '北美客户期望本地语言支持、退货处理和保修响应。') },
              { num: '06', title: t('Trade show or customer visit plan', '展会或客户拜访计划'), desc: t('Having a concrete plan for meeting customers face-to-face accelerates trust-building significantly.', '有具体的面对面会见客户计划能显著加速信任建设。') },
            ].map((item) => (
              <div key={item.num} className="cme-block flex gap-3">
                <span className="text-[#C00000] text-[12px] font-bold mt-0.5 min-w-[24px]">{item.num}</span>
                <div>
                  <h4 className="text-[13px] md:text-[14px] font-semibold mb-1">{item.title}</h4>
                  <p className="text-[11px] md:text-[13px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: 0–90 Day Roadmap */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Roadmap', '路线图')}</p>
          <h2 className="font-serif text-[#212121] text-[28px] md:text-[32px] lg:text-[36px] md:text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10">
            {t('0–90 Day Canada Entry Roadmap', '0–90天加拿大进入路线图')}
          </h2>
          <div className="space-y-4 md:space-y-5 max-w-[800px]">
            {[
              { phase: t('Days 0–14', '第0–14天'), title: t('Diagnosis & Market Fit Assessment', '诊断与市场适配评估'), items: [t('Product-market fit screening', '产品市场适配筛查'), t('Competitive landscape scan', '竞争格局扫描'), t('Certification gap identification', '认证差距识别'), t('Priority market recommendation', '优先市场建议')] },
              { phase: t('Days 15–30', '第15–30天'), title: t('Compliance Pathway & Partner Mapping', '合规路径与合作伙伴绘制'), items: [t('Regulatory requirement list', '监管要求清单'), t('Import pathway design', '进口路径设计'), t('Partner / distributor identification', '合作伙伴/经销商识别'), t('Landed cost model', '到岸成本模型')] },
              { phase: t('Days 31–60', '第31–60天'), title: t('Channel Validation & Material Preparation', '渠道验证与材料准备'), items: [t('Customer conversation scripts', '客户对话脚本'), t('English product materials', '英文产品材料'), t('Trade show or visit preparation', '展会或拜访准备'), t('Initial partner conversations', '初步合作伙伴对话')] },
              { phase: t('Days 61–90', '第61–90天'), title: t('Pilot Execution & Review', '试点执行与复盘'), items: [t('Sample or small-batch shipment', '样品或小批量发货'), t('Customer feedback collection', '客户反馈收集'), t('Partner agreement negotiation', '合作协议谈判'), t('90-day review and next-phase plan', '90天复盘与下一阶段计划')] },
            ].map((r, i) => (
              <div key={i} className="cme-block p-5 md:p-6 bg-white border border-[#E5E5E5]">
                <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3">
                  <span className="text-[#C00000] text-[12px] font-bold">{r.phase}</span>
                  <h3 className="text-[14px] md:text-[16px] font-semibold">{r.title}</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {r.items.map((item, j) => (
                    <div key={j} className="text-[11px] md:text-[13px] text-[#555] flex gap-2">
                      <span className="text-[#C00000]">·</span>{item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Risks */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <p className="text-label mb-3">{t('Risks', '风险')}</p>
          <h2 className="font-serif text-[#212121] text-[28px] md:text-[32px] lg:text-[36px] md:text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10">
            {t('Common Risks to Manage', '需要管理的常见风险')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[800px]">
            {[
              { title: t('Certification delays', '认证延迟'), desc: t('CSA, UL, or Health Canada approvals can take 3–12 months. Starting late can block your entire timeline.', 'CSA、UL或加拿大卫生部批准可能需要3–12个月。开始太晚会阻塞整个时间表。') },
              { title: t('Underestimating landed costs', '低估到岸成本'), desc: t('Duties, GST/HST, brokerage, and local freight can add 25–45% to your product cost. Pricing must account for this.', '关税、GST/HST、代理费和本地运费可能增加25–45%的产品成本。定价必须考虑这一点。') },
              { title: t('Assuming demand equals readiness', '假设需求等于就绪度'), desc: t('Canadian customers may want your product, but if you lack local support, documentation, or warranty handling, the deal falls through.', '加拿大客户可能想要您的产品，但如果您缺乏本地支持、文档或保修处理，交易就会失败。') },
              { title: t('Choosing the wrong partner structure', '选择错误的合作伙伴结构'), desc: t('Exclusive distributor agreements signed too early can limit your flexibility. Structure matters before you sign.', '过早签署的独家经销协议可能限制您的灵活性。签署前的结构很重要。') },
            ].map((item, i) => (
              <div key={i} className="cme-block card-border bg-white">
                <h3 className="text-[14px] md:text-[15px] font-semibold mb-2">{item.title}</h3>
                <p className="text-[11px] md:text-[13px] text-[#767676] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('FAQ', '常见问题')}</p>
          <h2 className="font-serif text-[#212121] text-[28px] md:text-[32px] lg:text-[36px] md:text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10">
            {t('Canada Market Entry FAQ', '加拿大市场进入常见问题')}
          </h2>
          <div className="max-w-[800px] space-y-4">
            {[
              { q: t('Do I need a Canadian company to sell in Canada?', '我需要在加拿大设立公司才能销售吗？'), a: t('Not necessarily. Many Chinese companies start by selling through Canadian distributors, online marketplaces, or direct B2B sales. A local entity becomes important when you need to import directly, hire local staff, or build brand-owned operations.', '不一定。许多中国企业通过加拿大经销商、在线市场或直接B2B销售开始。当您需要直接进口、雇佣本地员工或建立品牌自有运营时，本地实体才变得重要。') },
              { q: t('How long does certification take?', '认证需要多长时间？'), a: t('It depends on the product. Simple electrical products may take 4–8 weeks for CSA. Health Canada registrations for food, cosmetics, or medical devices can take 3–12 months. We help you identify requirements early and coordinate with certification bodies.', '取决于产品。简单电气产品CSA认证可能需要4–8周。加拿大卫生部对食品、化妆品或医疗设备的注册可能需要3–12个月。我们帮助您早期识别要求并协调认证机构。') },
              { q: t('Should I enter Canada or the US first?', '我应该先进入加拿大还是美国？'), a: t('For most Chinese companies, Canada is a lower-risk first step. The market is smaller but more manageable, regulations are more uniform, and success in Canada builds credibility for US conversations. We assess your product, resources, and goals to make a specific recommendation.', '对大多数中国企业来说，加拿大是风险较低的第一步。市场较小但更可控，法规更统一，加拿大的成功为美国对话建立可信度。我们评估您的产品、资源和目标给出具体建议。') },
              { q: t('What does your Canada entry service cost?', '您的加拿大进入服务费用是多少？'), a: t('We offer three engagement levels: a diagnostic assessment (0–30 days), a full entry roadmap with execution plan (0–90 days), and ongoing advisory support. Pricing depends on product complexity, scope, and whether compliance coordination is included. Contact us for a tailored estimate.', '我们提供三层合作：诊断评估（0–30天）、完整进入路线图与执行计划（0–90天）、以及持续顾问支持。价格取决于产品复杂度、范围和是否包含合规协调。联系我们获取定制报价。') },
            ].map((faq, i) => (
              <details key={i} className="cme-block group border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                  <span className="text-[13px] md:text-[15px] font-medium pr-4">{faq.q}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#767676]">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-[12px] md:text-[14px] text-[#555] leading-[1.7]">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="section-padding bg-[#1a1a2e]">
        <div className="container-site">
          <div className="max-w-[700px]">
            <h2 className="font-serif text-white text-[28px] md:text-[32px] lg:text-[36px] md:text-[26px] md:text-[30px] lg:text-[34px] leading-[1.35] md:leading-[1.3] tracking-tight mb-6">
              {t('Start your Canada market entry assessment.', '开始您的加拿大市场进入评估。')}
            </h2>
            <Link to="/contact" className="btn-primary text-[12px] md:text-[14px]">
              {t('Discuss Your Canada Entry Plan', '讨论您的加拿大进入计划')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
