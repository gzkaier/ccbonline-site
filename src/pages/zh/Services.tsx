import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

interface ServiceDetail {
  title: string
  desc: string
  slug: string
}

const mainServices: { category: string; title: string; desc: string; services: ServiceDetail[] }[] = [
  {
    category: '市场进入判断',
    title: '判断该不该进、怎么进',
    desc: '在投入资源前，先评估产品适配度、市场优先级和进入路径的可行性。',
    services: [
      { title: '北美市场进入可行性初判', desc: '评估你的产品、能力和时机是否适合进入北美市场。不是鼓励你进入，而是帮你看清条件。', slug: 'market-entry-diagnosis' },
      { title: '加拿大 / 美国优先级判断', desc: '根据产品适配度、竞争格局和监管复杂度，判断哪个市场优先。', slug: 'market-entry-diagnosis' },
      { title: '产品与市场适配初判', desc: '评估你的产品、包装和定位是否符合北美买家预期。', slug: 'market-entry-diagnosis' },
      { title: '0–90 天市场进入路径设计', desc: '一份实用的、分阶段的前 90 天市场进入准备行动计划。', slug: 'market-entry-diagnosis' },
    ],
  },
  {
    category: '合规与责任链',
    title: '发货前把责任链理清楚',
    desc: '认证、进口、标签、清关、仓储、售后、保险、召回——谁在哪个环节负什么责任。',
    services: [
      { title: '合规与责任链初筛', desc: '在进入市场前，识别认证、进口、文件和责任缺口。', slug: 'compliance-responsibility-chain' },
      { title: '进口路径与 IOR 安排', desc: '明确进口记录主体（Importer of Record）的安排方式、责任边界和协调路径。', slug: 'local-execution-support' },
      { title: '产品合规与认证路径梳理', desc: '明确产品进入加拿大和北美需要的认证（CSA、UL、FCC、ISED），制定合规时间线。', slug: 'product-compliance' },
      { title: '标签、说明书与合规文档', desc: '英文/法文标签、安全数据表、产品声明等文档的合规性审查。', slug: 'compliance-responsibility-chain' },
    ],
  },
  {
    category: '客户与渠道验证',
    title: '找到真实客户前先验证方向',
    desc: '不是发邮件买名单，而是系统性地验证目标客户画像、渠道逻辑和合作方能力。',
    services: [
      { title: '目标客户与渠道路径设计', desc: '识别谁购买、如何购买，以及哪条渠道路径对你最现实。', slug: 'customer-channel-validation' },
      { title: '北美客户开发准备', desc: '在接触北美潜在客户之前，准备好外联策略、资格筛选问题和材料。', slug: 'customer-channel-validation' },
      { title: '展会前准备与展会后跟进', desc: '展前规划、买家定位、资料调整和展后跟进系统搭建。', slug: 'trade-show-follow-up' },
      { title: '渠道合作方能力评估', desc: '评估潜在代理、经销商或合作方的真实能力和匹配度。', slug: 'customer-channel-validation' },
    ],
  },
  {
    category: '本地执行支持',
    title: '把计划落到本地操作层面',
    desc: '协调进口、仓储、履约、售后和本地服务商资源，确保进入市场后有承接能力。',
    services: [
      { title: '本地执行与服务商资源连接', desc: '协调仓储物流、售后支持、本地服务商对接和实际执行落地。', slug: 'local-execution-support' },
      { title: '3PL筛选与仓库运营审计', desc: '系统性评估加拿大第三方物流合作伙伴和仓库运营能力，避免签约后才发现运营缺口。', slug: '3pl-warehousing-advisory' },
      { title: '售后与备件承接方案设计', desc: '规划保修处理、退货、备件和本地服务响应能力。', slug: 'local-execution-support' },
      { title: '北美市场进入项目推进管理', desc: '结构化项目跟踪、里程碑管理和团队与外部合作伙伴的协调。', slug: 'advisory-retainer' },
      { title: '季度复盘与下一步计划', desc: '定期进展回顾、风险评估和基于市场反馈的更新行动计划。', slug: 'advisory-retainer' },
    ],
  },
]

const supportServices: ServiceDetail[] = [
  { title: '网站与内容建设', desc: '为加拿大本地专业服务商整理线上内容和服务表达。', slug: 'website-content-for-service-providers' },
  { title: '英文资料整理', desc: '产品资料、服务说明、品牌内容的英文本地化表达。', slug: 'customer-channel-validation' },
  { title: '媒体报道与商业内容服务', desc: '品牌定位、中英文内容适配、媒体化公司 profile 和商业曝光协调。', slug: 'media-business-content' },
  { title: '市场进入顾问陪跑', desc: '月度顾问支持、文件审阅、合作伙伴协调和战略判断。', slug: 'advisory-retainer' },
  { title: 'SEO 与 GEO 优化', desc: '传统SEO确保Google搜索可见，GEO优化确保在ChatGPT、Perplexity等AI助手推荐中被引用。', slug: 'seo-geo-optimization' },
]

function ServiceCard({ service }: { service: ServiceDetail }) {
  return (
    <div className="group bg-white border border-[#E5E5E5] hover:border-[#00A884] transition-colors p-5 md:p-6 flex flex-col">
      <h3 className="text-[16px] md:text-[17px] font-semibold mb-3 leading-[1.5] group-hover:text-[#00A884] transition-colors">
        {service.title}
      </h3>
      <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6] mb-4 flex-1">
        {service.desc}
      </p>
      <Link
        to={`/zh/services/${service.slug}`}
        className="text-[14px] font-medium text-[#00A884] hover:underline inline-flex items-center gap-1"
      >
        了解详情 <span className="text-[16px]">&rarr;</span>
      </Link>
    </div>
  )
}

export default function ZHServices() {
  useSEO({
    title: '市场进入判断、合规责任链、客户验证与本地落地支持 | CCBONLINE INC.',
    description: 'CCBONLINE INC. 提供市场进入判断、合规与责任链梳理、客户与渠道验证、本地执行支持四项主线服务，以及网站内容建设、英文资料整理和顾问陪跑等支撑服务。',
    canonical: 'https://www.ccbonline.ca/zh/services',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '市场进入判断、合规责任链、客户验证与本地落地支持 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">服务体系</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              主线服务 + 支撑服务
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px] mb-6">
              主线服务围绕市场进入的四个核心环节——判断、合规、验证、落地。支撑服务帮助企业在内容、资料和持续沟通方面做好准备。
            </p>
          </div>
        </section>

        {/* Core Platform Services */}
        <section className="section-padding bg-white border-b border-[#E5E5E5]">
          <div className="container-site">
            <p className="text-label mb-3">核心服务</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-8">
              五大服务板块
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { title: '加拿大及北美市场进入', desc: '从可行性评估到本地执行协调的结构化进入支持。', slug: 'market-entry' },
                { title: '品牌可信度与数字基础设施', desc: '评估并改善中国企业在北美买家面前的网络形象。', slug: 'brand-credibility' },
                { title: '中英双语官网与商业内容', desc: '为北美商业受众和双语客户群体组织网站内容。', slug: 'website-content' },
                { title: '中加商业连接与供应链', desc: '供应商匹配、供应链协调和跨境商业引荐。', slug: 'business-connection' },
                { title: '媒体报道与商业内容合作', desc: '行业媒体曝光、专业人物报道和商业内容协调。', slug: 'media-content' },
              ].map((s, i) => (
                <Link key={i} to={`/zh/${s.slug}`} className="p-5 bg-white border border-[#E5E5E5] hover:border-[#00A884] transition-colors group">
                  <h3 className="text-[15px] font-semibold mb-2 group-hover:text-[#00A884] transition-colors">{s.title}</h3>
                  <p className="text-[13px] text-[#767676] leading-[1.6] mb-3">{s.desc}</p>
                  <span className="text-[14px] font-medium text-[#00A884] group-hover:underline inline-flex items-center gap-1">了解详情 <span className="text-[16px]">&rarr;</span></span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Guidance */}
        <section className="py-6 md:py-8 bg-white border-b border-[#E5E5E5]">
          <div className="container-site">
            <div className="max-w-[800px] p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5] mb-4">
              <h2 className="font-serif text-[#212121] text-[16px] md:text-[18px] leading-[1.35] tracking-tight mb-4">
                你应该从哪里开始？
              </h2>
              <ul className="space-y-3 text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                <li className="pl-4 border-l-2 border-[#00A884]">如果你还在判断北美值不值得做，先看 <Link to="/zh/services/market-entry-diagnosis" className="text-[#00A884] hover:underline">市场进入诊断</Link></li>
                <li className="pl-4 border-l-2 border-[#00A884]">如果你已经有产品，需要验证客户和渠道，先看 <Link to="/zh/services/customer-channel-validation" className="text-[#00A884] hover:underline">客户与渠道验证</Link></li>
                <li className="pl-4 border-l-2 border-[#00A884]">如果你已经进入进口、仓储、履约或售后准备阶段，先看 <Link to="/zh/services/compliance-responsibility-chain" className="text-[#00A884] hover:underline">合规与责任链</Link></li>
                <li className="pl-4 border-l-2 border-[#00A884]">如果你需要持续协调多个环节，先看 <Link to="/zh/services/advisory-retainer" className="text-[#00A884] hover:underline">顾问陪跑</Link></li>
              </ul>
            </div>
            <div className="max-w-[800px] p-4 bg-white border border-[#E5E5E5]">
              <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">
                如需提交服务资源、活动信息、招商合作或本地服务资源，请直接联系沟通。
              </p>
            </div>
          </div>
        </section>

        {/* 主线服务 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">主线服务</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              四项市场进入核心环节
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-10">
              每项服务都有明确的服务对象、解决的问题和适合的阶段。选择与你当前阶段最匹配的服务开始。
            </p>
          </div>
        </section>

        {mainServices.map((group, idx) => (
          <section key={idx} className={`${idx % 2 === 0 ? 'bg-[#F8F9FA]' : 'bg-white'} section-padding`}>
            <div className="container-site">
              <p className="text-label mb-3">{group.category}</p>
              <h3 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight max-w-[700px] mb-2">
                {group.title}
              </h3>
              <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px] mb-8">
                {group.desc}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                {group.services.map((service, i) => (
                  <ServiceCard key={i} service={service} />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* 支撑服务 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">支撑服务</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-2">
              内容、资料与持续支持
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              这些服务不替代主线服务，而是帮助企业在进入市场前准备好必要的沟通内容和资料。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {supportServices.map((service, i) => (
                <ServiceCard key={i} service={service} />
              ))}
            </div>
          </div>
        </section>

        {/* 推荐服务包 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">服务包</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8 md:mb-10">
              推荐服务组合
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {[
                {
                  name: '市场进入诊断包',
                  tag: '适合刚起步',
                  desc: '适合刚开始考虑北美市场、还不确定是否值得进入的企业。核心价值是把方向看清楚，再决定下一步。',
                  includes: ['北美市场进入初步诊断报告', '0–90 天进入建议路线图', '初步风险清单'],
                  link: '/zh/services/market-entry-diagnosis',
                  cta: '查看诊断服务',
                },
                {
                  name: '客户与渠道验证包',
                  tag: '适合有产品',
                  desc: '适合已有产品、准备开发客户或参展的企业。目标是先验证方向，而不是盲目扩量。',
                  includes: ['北美目标客户与渠道路径图', '客户开发资料准备清单', '30 天客户验证计划'],
                  link: '/zh/services/customer-channel-validation',
                  cta: '查看验证服务',
                },
                {
                  name: '责任链与本地落地包',
                  tag: '适合已进入执行阶段',
                  desc: '适合已经进入或准备进入执行阶段的企业。围绕合规、进口、仓储、售后做系统协同。',
                  includes: ['责任链与本地承接方案', '进口路径与 IOR 安排', '服务商资源连接计划'],
                  link: '/zh/services/compliance-responsibility-chain',
                  cta: '查看合规服务',
                },
              ].map((pkg, i) => (
                <div key={i} className="bg-[#F8F9FA] border border-[#E5E5E5] p-5 md:p-6 flex flex-col">
                  <p className="text-[11px] text-[#999] uppercase tracking-wider mb-2">{pkg.tag}</p>
                  <h3 className="text-[17px] md:text-[18px] font-semibold mb-3 leading-[1.4]">{pkg.name}</h3>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6] mb-4 flex-1">{pkg.desc}</p>
                  <div className="mb-4">
                    <p className="text-[13px] text-[#999] uppercase tracking-wider mb-2">包含</p>
                    <ul className="space-y-1.5">
                      {pkg.includes.map((d, j) => (
                        <li key={j} className="text-[13px] md:text-[14px] text-[#555] leading-[1.5] pl-3 border-l-2 border-[#00A884]">{d}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to={pkg.link} className="btn-primary text-[14px] px-5 py-3 min-h-[48px] w-full text-center">{pkg.cta}</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                不确定哪个服务适合你的阶段？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                可以先做一次初步沟通。我们会了解你的产品、目标市场和当前阶段，再推荐最合适的第一步。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">预约初步沟通</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
