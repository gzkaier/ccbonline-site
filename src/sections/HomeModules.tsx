import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Factory, ShoppingBag, Wrench, Cpu, Globe, Users, ChevronDown, Stethoscope, Route, Handshake } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function HomeModules() {
  const { t, lang } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.hm-block'), {
        y: 20, opacity: 0, duration: 0.5, stagger: 0.06, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 85%', once: true },
      })
    }, section)
    return () => ctx.revert()
  }, [])

  // Module 2: 三个核心服务
  const coreServices = [
    {
      icon: Stethoscope,
      title: t('Market Entry Diagnosis', '市场进入诊断'),
      desc: t('Assess whether your product is ready for Canada and North America, and what gaps must be closed first.', '评估您的产品是否准备好进入加拿大和北美，以及必须先填补哪些差距。'),
    },
    {
      icon: Route,
      title: t('Compliance Pathway Design', '合规路径设计'),
      desc: t('Map certification, customs, tax, and regulatory requirements so you know exactly what is needed before shipping.', '绘制认证、清关、税务和监管要求，让您在发货前清楚知道需要什么。'),
    },
    {
      icon: Handshake,
      title: t('Local Execution Support', '本地执行支持'),
      desc: t('Weekly tracking, partner coordination, and phase reviews that turn plans into actual customer conversations and orders.', '每周追踪、合作伙伴协调和阶段复盘，将计划转化为实际客户对话和订单。'),
    },
  ]

  // Module 4: Why Different
  const whyDifferent = [
    { title: t('Not a marketing agency', '不是营销机构'), desc: t('We do not sell ads or build websites as our main business. We diagnose whether your product fits, then build the operational path to enter.', '我们不卖广告或把建站当主业。我们诊断您的产品是否适配，然后构建进入的运营路径。') },
    { title: t('Not a law firm', '不是律师事务所'), desc: t('We coordinate with lawyers, brokers, and certifiers, but we do not replace them. Our job is to connect the dots across disciplines.', '我们与律师、经纪人和认证机构协调，但不替代他们。我们的工作是跨学科连接点。') },
    { title: t('Not a logistics company', '不是物流公司'), desc: t('We help design your supply chain and warehousing strategy, but we do not operate trucks or warehouses. We find the right partners who do.', '我们帮助设计供应链和仓储策略，但不运营卡车或仓库。我们找到合适的合作伙伴。') },
  ]

  // Module 5: Framework
  const framework = [
    { num: '01', title: t('Diagnose', '诊断'), desc: t('Product fit, certification gaps, competitor scan', '产品适配、认证差距、竞争扫描') },
    { num: '02', title: t('Design', '设计'), desc: t('Compliance pathway, channel strategy, partner map', '合规路径、渠道策略、合作伙伴图') },
    { num: '03', title: t('Validate', '验证'), desc: t('Customer conversations, partner meetings, pilot orders', '客户对话、合作伙伴会议、试点订单') },
    { num: '04', title: t('Coordinate', '协调'), desc: t('Align brokers, certifiers, 3PL, and local reps', '协调经纪人、认证机构、物流和本地代表') },
    { num: '05', title: t('Execute', '执行'), desc: t('90-day roadmap with weekly tracking and reviews', '90天路线图，每周追踪和复盘') },
  ]

  // Module 6: Suitable Clients
  const clients = [
    { icon: Factory, text: t('Manufacturers with export-ready products', '拥有出口就绪产品的制造商') },
    { icon: ShoppingBag, text: t('Consumer brands seeking North American presence', '寻求在北美建立市场存在感的消费品牌') },
    { icon: Wrench, text: t('Industrial suppliers needing local partners', '需要本地合作伙伴的工业供应商') },
    { icon: Cpu, text: t('Hardware companies with certification needs', '有认证需求的硬件公司') },
    { icon: Globe, text: t('Service companies expanding to Canada', '扩展至加拿大的服务公司') },
    { icon: Users, text: t('Cross-border teams needing local execution', '需要本地执行的跨境团队') },
  ]

  // Module 7: Use Cases
  const useCases = [
    { title: t('Manufacturer → Canadian distributor network', '制造商 → 加拿大经销商网络'), desc: t('A Shenzhen electronics factory used our diagnosis and compliance mapping to sign two Canadian distributors within 90 days.', '一家深圳电子工厂使用我们的诊断和合规映射，在90天内签约了两家加拿大经销商。') },
    { title: t('Industrial supplier → direct B2B sales', '工业供应商 → 直接企业间销售'), desc: t('A Jiangsu machinery supplier entered Canada through trade-show validation and direct customer outreach, bypassing distributor margins.', '一家江苏机械供应商通过展会验证和直接客户外联拓展进入加拿大，绕过经销商利润分成。') },
    { title: t('Brand → pilot warehouse + online', '品牌 → 试点仓库 + 线上'), desc: t('A Hangzhou consumer brand launched a small-batch Canada test using our logistics hub and local digital presence strategy.', '一家杭州消费品牌借助我们的物流枢纽和本地数字化布局策略，启动了小批量加拿大市场测试。') },
  ]

  // Module 9: FAQ
  const faqs = [
    { q: t('What does CCBONLINE actually do?', 'CCBONLINE 到底是做什么的？'), a: t('We help businesses enter Canada and North America. We assess readiness, design compliance pathways, validate channels, coordinate local partners, and support execution.', '我们帮助企业进入加拿大和北美。我们评估准备程度、设计合规路径、验证渠道、协调本地合作伙伴并支持执行。') },
    { q: t('Do you guarantee sales?', '你们保证销售吗？'), a: t('No. We build the conditions for market entry. Actual sales depend on your product, pricing, and execution. We make the path clear, but you must walk it.', '不。我们建立市场进入的条件。实际销售取决于您的产品、定价和执行。我们让路径清晰，但您必须走下去。') },
    { q: t('How long does market entry take?', '市场进入需要多长时间？'), a: t('Initial diagnosis takes 2–4 weeks. A full 0–90 day roadmap is typically delivered within 30 days. Execution support continues as long as needed.', '初步诊断2–4周。完整的0–90天路线图通常在30天内交付。执行支持按需持续。') },
    { q: t('Do we need a local entity?', '我们需要本地实体吗？'), a: t('Not always. Many companies start with partner-based or direct-export models. We help you determine the right structure for your stage and product.', '不一定。许多企业从合作伙伴模式或直接出口开始。我们帮助您根据阶段和产品确定合适的结构。') },
    { q: t('What does it cost?', '费用是多少？'), a: t('We offer three engagement levels: diagnostic assessment, full entry roadmap, and ongoing advisory support. Contact us for a tailored estimate based on your product and scope.', '我们提供三层合作：诊断评估、完整进入路线图和持续顾问支持。联系我们获取基于您产品和范围的定制报价。') },
  ]

  return (
    <div ref={sectionRef}>

      {/* Module 2: 一句话定位 + 三个核心服务 */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="hm-block mb-8 md:mb-10">
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] md:leading-[1.7] max-w-[720px]">
              {t(
                'We help businesses move from "wanting to enter North America" to "being practically ready to operate locally" — through structured diagnosis, compliance pathway design, channel validation, and hands-on execution support.',
                '我们帮助企业从"想进入北美"走到"具备实际本地运营条件"——通过结构化诊断、合规路径设计、渠道验证和实际执行支持。'
              )}
            </p>
          </div>

          <h2 className="hm-block font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6 md:mb-8">
            {t('Three Core Capabilities', '三大核心能力')}
          </h2>
          <div className="grid grid-cols-1 gap-4 md:gap-5">
            {coreServices.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="hm-block card-border bg-white flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F8F9FA] flex items-center justify-center shrink-0">
                    <Icon size={18} strokeWidth={1.5} className="text-[#767676]" />
                  </div>
                  <div>
                    <h3 className="text-[16px] md:text-[17px] font-semibold mb-1.5">{s.title}</h3>
                    <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">{s.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Module 4: Why North America Entry Is Different */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Difference', '差异')}</p>
          <h2 className="hm-block font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
            {t('Why North America Entry Is Different', '为什么北美市场进入不同')}
          </h2>
          <div className="grid grid-cols-1 gap-4 md:gap-5 max-w-[800px]">
            {whyDifferent.map((item, i) => (
              <div key={i} className="hm-block p-5 md:p-6 bg-white border border-[#E5E5E5]">
                <h3 className="text-[16px] md:text-[17px] font-semibold mb-2">{item.title}</h3>
                <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module 5: Our Entry Framework */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <p className="text-label mb-3">{t('Framework', '框架')}</p>
          <h2 className="hm-block font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
            {t('Our Entry Framework', '进入框架')}
          </h2>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {framework.map((f) => (
              <div key={f.num} className="hm-block flex items-start gap-4 p-4 md:p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                <span className="text-[#00B894] text-[14px] font-bold mt-0.5 min-w-[28px]">{f.num}</span>
                <div>
                  <h3 className="text-[16px] md:text-[17px] font-semibold mb-1">{f.title}</h3>
                  <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="hm-block mt-6">
            <img
              src="/images/north-america-market-entry-framework.jpg"
              alt="North America market entry framework covering diagnosis, compliance pathway, channel validation, local execution, and roadmap planning."
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Module 6: Suitable Clients */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Clients', '客户')}</p>
          <h2 className="hm-block font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
            {t('Suitable Clients', '适合的客户')}
          </h2>
          <div className="grid grid-cols-1 gap-3 md:gap-4">
            {clients.map((c, i) => {
              const Icon = c.icon
              return (
                <div key={i} className="hm-block flex items-start gap-3 p-4 bg-white border border-[#E5E5E5]">
                  <Icon size={18} strokeWidth={1.5} className="text-[#767676] mt-0.5 shrink-0" />
                  <span className="text-[15px] md:text-[16px] text-[#444] leading-[1.55]">{c.text}</span>
                </div>
              )
            })}
          </div>
          <p className="hm-block text-[13px] md:text-[14px] text-[#999] mt-4">
            {t('We do not replace lawyers, accountants, or logistics providers. We coordinate across them to build a practical market entry path.', '我们不替代律师、会计师或物流提供商。我们协同各方构建实际的市场进入路径。')}
          </p>
        </div>
      </section>

      {/* Module 7: Representative Use Cases */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <p className="text-label mb-3">{t('Cases', '案例')}</p>
          <h2 className="hm-block font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
            {t('Representative Use Cases', '代表性案例')}
          </h2>
          <div className="grid grid-cols-1 gap-4 md:gap-5">
            {useCases.map((c, i) => (
              <div key={i} className="hm-block p-5 md:p-6 bg-[#F8F9FA] border-l-2 border-[#00B894]">
                <h3 className="text-[16px] md:text-[17px] font-semibold mb-2">{c.title}</h3>
                <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.6]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Module 8: About CCBONLINE */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-span-4">
              <div className="hm-block mb-4">
                <img
                  src="/images/about-ccbonline-team-consultation.jpg"
                  alt="CCBONLINE INC. Toronto office team meeting, helping businesses plan North America market entry."
                  className="w-full h-auto max-h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="md:col-span-8">
              <p className="text-label mb-3">{t('About', '关于')}</p>
              <h2 className="hm-block font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4 md:mb-6">
                {t('About CCBONLINE', '关于CCBONLINE')}
              </h2>
              <p className="hm-block text-[15px] md:text-[16px] text-[#444] leading-[1.65] mb-4">
                {t(
                  'CCBONLINE INC. is a Canada-registered consulting firm based in Toronto, helping manufacturers, brands, and growth-stage businesses enter Canada and North America.',
                  'CCBONLINE INC. 是一家加拿大注册服务公司，总部位于多伦多，帮助中国制造企业和成长型公司进入加拿大和北美。'
                )}
              </p>
              <p className="hm-block text-[14px] md:text-[15px] text-[#767676] leading-[1.65] mb-5">
                {t(
                  'Our team combines market judgment, compliance awareness, channel understanding, local resources, and execution discipline to help clients build real operating presence in North America.',
                  '我们的团队结合市场判断、合规意识、渠道理解、本地资源和执行纪律，帮助客户在北美建立真实的运营根基。'
                )}
              </p>
              <div className="hm-block grid grid-cols-2 gap-3 text-[13px] md:text-[14px]">
                <div className="p-3 bg-white border border-[#E5E5E5]">
                  <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">{t('Founded', '成立')}</p>
                  <p className="font-medium">2020</p>
                </div>
                <div className="p-3 bg-white border border-[#E5E5E5]">
                  <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">{t('Languages', '语言')}</p>
                  <p className="font-medium">{t('Chinese / English', '中文 / 英文')}</p>
                </div>
                <div className="p-3 bg-white border border-[#E5E5E5]">
                  <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">{t('Location', '地点')}</p>
                  <p className="font-medium">84 Kenhar Dr, North York, ON M9L 1N2</p>
                </div>
                <div className="p-3 bg-white border border-[#E5E5E5]">
                  <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">{t('Focus', '专注')}</p>
                  <p className="font-medium">{t('Canada & North America', '加拿大与北美')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Module 9: FAQ */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <p className="text-label mb-3">{t('FAQ', '常见问题')}</p>
          <h2 className="hm-block font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
            {t('Frequently Asked Questions', '常见问题')}
          </h2>
          <div className="max-w-[800px] space-y-3">
            {faqs.map((faq, i) => (
              <details key={i} className="hm-block group border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">{faq.q}</span>
                  <ChevronDown size={16} className="shrink-0 text-[#767676] transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Module 10: CTA */}
      <section className="section-padding bg-[#0B0E14]">
        <div className="container-site">
          <div className="max-w-[700px]">
            <h2 className="hm-block font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight mb-6">
              {t('Ready to assess your North America readiness?', '准备好评估您的北美市场准备程度了吗？')}
            </h2>
            <div className="hm-block flex flex-col sm:flex-row gap-3">
              <Link to={`/${lang}/contact`} className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">
                {t('Book a Market Entry Consultation', '预约市场进入沟通')}
              </Link>
              <Link to={`/${lang}/canada-market-entry`} className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                {t('Explore Canada Entry', '探索加拿大进入')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
