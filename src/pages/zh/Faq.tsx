import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

const faqCategories = [
  {
    label: '通用问题',
    faqs: [
      { q: 'CCBONLINE INC. 是做什么的？', a: '我们是一家连接加拿大、北美与中国市场的商业信息与服务平台，帮助企业在跨市场、跨语言、跨信任体系中，建立更清晰的商业表达、数字可信度和本地连接能力。核心服务包括市场进入诊断、品牌可信度诊断、AI可见度诊断、英文资料优化、商业媒体报道和本地服务资源连接。' },
      { q: '你们和普通建站公司、营销公司有什么区别？', a: '我们不是建站公司、广告公司或出海中介。我们帮你判断官网和商业资料是否准备好面对目标客户，诊断问题并提供优化建议。建站是执行层面的工作，我们做的是判断、策略和内容重构。我们不承诺快速出单或保证排名，而是帮你在投入之前看清方向。' },
      { q: '你们能保证效果吗？', a: '不保证。我们提供专业的诊断、分析和建议，但市场进入、客户开发和品牌建设的效果取决于产品、市场、时机和执行力等多种因素。我们能保证的是判断的专业性和建议的实用性。如果一个服务商向你保证结果，建议你谨慎对待。' },
      { q: '服务价格是多少？', a: '从CAD 299的官网与资料快速体检到CAD 3,500+的30天市场进入启动陪跑，不同服务价格不同。具体价格会在初步沟通后根据你的需求给出。我们建议先从低成本的服务开始，确认方向正确后再投入更多。' },
      { q: '怎么开始合作？', a: '先预约初步沟通（免费），我们了解你的情况，然后推荐合适的服务。你可以从官网与资料快速体检（CAD 299）开始，在继续投钱做推广之前，先知道客户有没有理由相信你。' },
    ],
  },
  {
    label: '北美市场进入',
    faqs: [
      { q: '我的产品适合进入加拿大市场吗？', a: '这取决于产品类型、认证要求、竞争情况和你的准备程度。不同品类的要求差异很大：电器产品需要CSA或cUL认证，无线设备需要ISED或FCC注册，建材、消费品和工业设备各有特定标准。我们的初步诊断会给你一个诚实的评估。' },
      { q: '进入加拿大需要哪些认证？', a: '常见认证包括CSA（加拿大标准协会）、UL（保险商实验室）、FCC（美国联邦通信委员会）、ISED（加拿大创新、科学和经济发展部）等。不同产品类别要求不同。我们会在诊断中明确你需要哪些认证、多长时间、多少费用。' },
      { q: 'IOR（Importer of Record，进口责任主体）是什么？', a: 'IOR是在法律上负责确保进口货物符合目的地国家所有法规的个人或实体。IOR处理海关文件、支付关税和税款，并在监管机构有问题时作为责任方。这不只是海关手续，而是一种具有真实法律责任的法律身份。没有IOR，货物无法正常清关。' },
      { q: '参展之前需要准备什么？', a: '英文资料、产品手册、FAQ、名片、样品、展会话术和展后跟进计划。很多参展商收集了大量名片但缺乏结构化跟进流程。我们的展会承接包可以帮你系统准备展前资料和展后跟进体系。' },
      { q: '找代理商之前需要准备什么？', a: '你需要准备好产品资料、定价逻辑、售后方案、合作条款和代理支持能力。代理商不只看产品，也看你的整体支持能力：利润、风险、售后、市场支持和合作边界。如果这些都还没理清楚，很难找到真正有能力的合作伙伴。' },
    ],
  },
  {
    label: '品牌可信度诊断',
    faqs: [
      { q: '什么是品牌可信度诊断？', a: '从买家视角审视你的官网和资料，判断客户是否有理由相信你和选择你。我们回答三个核心问题：客户为什么相信你？为什么选择你而不是别人？为什么现在联系你？这不是品牌包装设计，而是商业信任建设。' },
      { q: '为什么客户看了官网不联系？', a: '常见原因包括：购买理由不清晰、缺少可信度信号（资质、案例、客户证明）、与同行差异化不明确、行动路径模糊、FAQ不完整。我们的诊断会逐一识别这些问题并给出优先级修复建议。' },
      { q: '诊断后我能得到什么？', a: '一份品牌可信度诊断报告，包含：购买理由重构建议、官网首屏优化方案、FAQ补充建议（8-15个）、同行对比分析、以及优先级修改清单。你可以根据报告自己执行，也可以委托我们继续优化。' },
      { q: '你们做不做VI设计或广告创意？', a: '不做。我们专注于商业表达和内容策略，不涉及视觉设计、广告创意或社交媒体运营。如果你需要这些服务，我们可以推荐合适的专业机构。' },
    ],
  },
  {
    label: 'AI可见度',
    faqs: [
      { q: '什么是GEO（生成式搜索引擎优化）？', a: 'GEO（Generative Engine Optimization，生成式搜索引擎优化）是优化内容让AI系统（如ChatGPT、Perplexity、Google AI Overview）能理解和引用的技术。与传统SEO（Search Engine Optimization，搜索引擎优化）针对搜索引擎排名不同，GEO关注内容是否清晰、可信、易于被AI提取和引用。' },
      { q: 'SEO和GEO有什么区别？', a: 'SEO针对传统搜索引擎（Google、Bing），目标是提升搜索排名。GEO针对AI生成式搜索工具，目标是让AI系统能理解、信任和引用你的内容。两者都需要清晰的内容结构，但GEO更强调内容的可信度信号和事实准确性。' },
      { q: '我的网站能被ChatGPT提到吗？', a: '取决于你的内容质量、结构、可信度和第三方信号。如果官网结构混乱、内容太薄或缺少可信度证明，AI系统很难引用你。GEO诊断可以评估你的准备度并给出具体改进建议。' },
      { q: 'GEO优化需要多长时间看到效果？', a: '技术SEO改进通常在几周内可见效果。内容和权威度提升一般需要2-4个月。GEO在AI助手里的可见性取决于AI系统索引和引用你优化后内容的速度，通常在实施后1-3个月。' },
    ],
  },
  {
    label: '英文资料优化',
    faqs: [
      { q: '你们做翻译吗？', a: '不做简单翻译。我们做商业表达重构——从北美买家的认知习惯、决策逻辑和信任要素出发，重新组织你的内容。语法正确的翻译不等于商业有效的沟通。' },
      { q: '英文资料优化包括什么？', a: '公司介绍（Company Profile）、服务页面（Services）、产品描述（Product Descriptions）、FAQ（Frequently Asked Questions，常见问题）、案例和客户故事（Case Studies）、合作流程（How to Work With Us）、邮件模板（Email Templates）等。' },
      { q: '需要我提供什么资料？', a: '中文公司介绍、产品资料、现有官网链接、目标客户描述和任何已有的英文材料。我们会基于这些资料进行商业表达重构，而不是从零创作。' },
      { q: '优化后的文案可以直接用吗？', a: '可以。我们交付的英文文案经过专业校对，可以直接用于官网、展会资料和邮件沟通。但我们建议你或你的团队先确认内容准确性，特别是技术参数和产品规格。' },
    ],
  },
  {
    label: '商业媒体与本地资源',
    faqs: [
      { q: '商业媒体报道是什么？', a: '以专业媒体的视角报道企业、活动或服务，形成可在公开渠道引用的信任内容。不是硬广，不是刷量，而是基于真实信息的专业报道，帮助你在目标客户面前建立可验证的信任资产。' },
      { q: '报道会发布在哪里？', a: 'CCBONLINE官网、公众号、LinkedIn等平台，具体根据内容类型和目标受众决定。内容经过客户确认后发布。' },
      { q: '你们自己做清关和物流吗？', a: '不做。我们帮你对接合适的本地服务商，并协助沟通推进。我们与服务商没有独家合作或利益分成，推荐基于过往合作经验和行业了解。' },
      { q: '怎么知道对接的服务商靠谱？', a: '我们基于过往合作经验、行业口碑和服务质量推荐。但最终选择由你决定。我们建议你在签约前与服务商直接沟通，了解服务细节和报价。' },
      { q: '对接本地服务收费吗？', a: '资源连接包含在部分服务包中（如30天启动陪跑），也可以单独购买对接服务。具体费用取决于对接的复杂程度和服务商数量。' },
    ],
  },
  {
    label: '电商与SEO',
    faqs: [
      { q: '你们优化哪些电商平台？', a: '亚马逊（Amazon）、Etsy、Shopify、独立站等。我们优化产品标题、描述、FAQ和购买理由，提升转化率和搜索可见度。' },
      { q: '产品页优化包括什么？', a: '产品标题（含关键词）、产品描述（Features + Benefits双层结构）、FAQ（覆盖客户购买前疑虑）、购买理由（Why Buy From Us）、评价回复模板、SEO标题和描述等。' },
      { q: '你们做不做亚马逊广告？', a: '不做广告投放。我们优化产品页内容，广告需要另外找服务商或自己操作。好的内容是广告投放的基础——如果产品页没优化好，广告效果也会打折。' },
      { q: '电商优化需要多长时间？', a: '产品页文案优化通常1-2周。SEO基础优化（包括关键词研究、结构化数据、内部链接）通常2-4周。持续的内容更新和优化是长期工作。' },
    ],
  },
]

export default function ZHFaq() {
  useSEO({
    title: '常见问题｜北美市场进入、品牌可信度、AI可见度、英文资料｜CCBONLINE',
    description: 'CCBONLINE INC. 常见问题汇总：北美市场进入、品牌可信度诊断、AI可见度（SEO+GEO）、英文资料优化、商业媒体报道、本地服务资源连接和电商SEO。',
    canonical: 'https://www.ccbonline.ca/zh/faq',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '常见问题｜北美市场进入、品牌可信度、AI可见度、英文资料｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">常见问题</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              你可能想知道的事
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px] mb-8">
              按服务分类整理的常见问题。如果找不到你要的答案，可以直接联系我们。
            </p>
            <div className="flex flex-wrap gap-2">
              {faqCategories.map((cat) => (
                <a
                  key={cat.label}
                  href={`#${cat.label}`}
                  className="text-[13px] px-3 py-1.5 bg-white border border-[#E5E5E5] hover:border-[#00B894] hover:text-[#00B894] transition-colors"
                >
                  {cat.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            {faqCategories.map((cat) => (
              <div key={cat.label} id={cat.label} className="mb-10 scroll-mt-[80px]">
                <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-5">
                  {cat.label}
                </h2>
                <div className="space-y-3">
                  {cat.faqs.map((faq, i) => (
                    <details key={i} className="border border-[#E5E5E5] bg-[#F8F9FA]">
                      <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                        <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">{faq.q}</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                      </summary>
                      <div className="px-4 pb-4 md:px-5 md:pb-5">
                        <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">{faq.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                还有问题？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                提交你的问题，附上产品和市场信息。我们会审阅并给出具体建议。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">联系 CCBONLINE</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
