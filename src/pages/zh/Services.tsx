import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

interface ServiceCard {
  title: string
  desc: string
  slug: string
}

interface ServicePackage {
  name: string
  title: string
  for: string
  deliverables: string[]
}

const beforeEntryServices: ServiceCard[] = [
  { title: '北美市场进入可行性初判', desc: '评估您的产品、能力和时机是否适合进入北美市场。', slug: 'market-entry-diagnosis' },
  { title: '加拿大 / 美国优先级判断', desc: '根据产品适配度、竞争格局和监管复杂度，判断哪个市场优先。', slug: 'market-entry-diagnosis' },
  { title: '产品与市场适配初判', desc: '评估您的产品、包装和定位是否符合北美买家预期。', slug: 'market-entry-diagnosis' },
  { title: '0–90 天市场进入路径设计', desc: '一份实用的、分阶段的前 90 天市场进入准备行动计划。', slug: 'market-entry-diagnosis' },
]

const entryPrepServices: ServiceCard[] = [
  { title: '北美市场商业资料准备', desc: '审查和改进您的产品资料、网站和文档，使其符合北美买家标准。', slug: 'customer-channel-validation' },
  { title: '目标客户与渠道路径设计', desc: '识别谁购买、如何购买，以及哪条渠道路径对您的产品最现实。', slug: 'customer-channel-validation' },
  { title: '北美客户开发准备', desc: '在接触北美潜在客户之前，准备好外联策略、资格筛选问题和材料。', slug: 'customer-channel-validation' },
  { title: '合规与责任链初筛', desc: '在进入市场前，识别认证、进口、文件和责任缺口。', slug: 'compliance-responsibility-chain' },
]

const localExecutionServices: ServiceCard[] = [
  { title: '进口路径与 IOR 协调', desc: '设计进口路线，明确进口记录责任人角色，协调海关文件交接。', slug: 'local-execution-support' },
  { title: '仓储与本地履约协调', desc: '根据您的体积和产品类型，匹配合适的仓储和第三方物流合作伙伴。', slug: 'local-execution-support' },
  { title: '售后与备件承接方案设计', desc: '规划保修处理、退货、备件和本地服务响应能力。', slug: 'local-execution-support' },
  { title: '本地合作资源协调', desc: '与北美运营和服务合作伙伴的持续沟通和协调支持。', slug: 'local-execution-support' },
]

const projectExecutionServices: ServiceCard[] = [
  { title: '北美展会市场进入支持', desc: '展前规划、买家定位、信息调整和展后跟进系统搭建。', slug: 'advisory-retainer' },
  { title: '北美市场进入项目推进管理', desc: '结构化项目跟踪、里程碑管理和团队与外部合作伙伴的协调。', slug: 'advisory-retainer' },
  { title: '北美市场进入顾问陪跑', desc: '月度顾问支持、文件审阅、合作伙伴协调和战略判断。', slug: 'advisory-retainer' },
  { title: '季度复盘与下一步计划', desc: '定期进展回顾、风险评估和基于市场反馈的更新行动计划。', slug: 'advisory-retainer' },
]

const servicePackages: ServicePackage[] = [
  {
    name: '北美市场进入诊断包',
    title: '最稳方案',
    for: '刚开始考虑加拿大 / 北美市场、不确定是否适合进入、需要先判断方向的企业。',
    deliverables: ['《北美市场进入初步诊断报告》', '《0–90 天进入建议路线图》', '《初步风险清单》'],
  },
  {
    name: '北美客户与渠道验证包',
    title: '最快方案',
    for: '已有产品、准备开发客户、准备参展或刚参展回来，希望快速验证市场反馈的企业。',
    deliverables: ['《北美目标客户与渠道路径图》', '《客户开发资料准备清单》', '《30 天客户验证计划》'],
  },
  {
    name: '北美市场进入执行支持包',
    title: '势能最高方案',
    for: '已经决定进入北美，需要本地合规、渠道、进口、仓储、售后、服务商和项目推进协同的企业。',
    deliverables: ['《北美市场进入执行路线图》', '《责任链与本地承接方案》', '《渠道验证与项目推进看板》', '《月度项目复盘报告》'],
  },
]

function ServiceCardComponent({ card }: { card: ServiceCard }) {
  return (
    <div className="group bg-white border border-[#E5E5E5] hover:border-[#C00000] transition-colors p-5 md:p-6 flex flex-col">
      <h3 className="text-[16px] md:text-[17px] font-semibold mb-3 leading-[1.5] group-hover:text-[#C00000] transition-colors">
        {card.title}
      </h3>
      <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6] mb-4 flex-1">
        {card.desc}
      </p>
      <Link
        to={`/zh/services/${card.slug}`}
        className="text-[14px] font-medium text-[#C00000] hover:underline inline-flex items-center gap-1"
      >
        了解详情
        <span className="text-[16px]">&rarr;</span>
      </Link>
    </div>
  )
}

export default function ZHServices() {
  useEffect(() => {
    document.title = '面向中国企业进入加拿大与北美市场的服务体系 | CCBONLINE INC.'
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
            <h1 className="font-serif text-[#212121] text-[32px] md:text-[42px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              面向中国企业进入加拿大与北美市场的服务体系
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[600px] mb-6">
              从市场进入诊断、合规路径判断、渠道验证，到本地资源协调和项目推进支持。
            </p>
          </div>
        </section>

        {/* Before Entry */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">进入前判断</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              进入前判断：先看清该不该进、怎么进
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8 md:mb-10">
              在正式投入北美市场前，企业需要先判断：产品是否适合进入、加拿大和美国哪个优先、当前资料是否足够、哪些风险必须先解决，以及未来 0–90 天应该先做什么。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8">
              {beforeEntryServices.map((card, i) => (
                <ServiceCardComponent key={i} card={card} />
              ))}
            </div>
            <Link to="/zh/services/market-entry-diagnosis" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">了解市场进入诊断</Link>
          </div>
        </section>

        {/* Entry Preparation */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">进入准备</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              进入准备：资料、客户、渠道和风险先准备好
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8 md:mb-10">
              很多企业不是产品不行，而是资料、客户画像、渠道路径、合规意识和责任承接方式还没有准备好。北美客户看的不是一份产品目录，而是企业是否具备持续合作、交付和负责的能力。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8">
              {entryPrepServices.map((card, i) => (
                <ServiceCardComponent key={i} card={card} />
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/zh/services/customer-channel-validation" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">了解客户与渠道验证</Link>
              <Link to="/zh/services/compliance-responsibility-chain" className="btn-outline text-[16px] px-6 py-3.5 min-h-[52px]">了解合规与责任链初筛</Link>
            </div>
          </div>
        </section>

        {/* Local Execution */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">本地承接</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              本地承接：进口、仓储、履约和售后如何接得住
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8 md:mb-10">
              进入北美不是把货发过去就结束。企业必须想清楚：谁作为进口责任主体，谁收货，谁管库存，谁处理退货，谁支持备件，谁负责售后，出问题以后谁来解释和承接。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8">
              {localExecutionServices.map((card, i) => (
                <ServiceCardComponent key={i} card={card} />
              ))}
            </div>
            <Link to="/zh/services/local-execution-support" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">了解本地承接支持</Link>
          </div>
        </section>

        {/* Project Execution */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">项目推进</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              项目推进：不是停在方案里，而是持续推下去
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8 md:mb-10">
              很多北美进入项目不是因为缺一个客户名单失败，而是因为没有项目主导人、没有路线图、没有任务拆解、没有跟进节奏，也没有人持续协调企业内部团队和外部服务商。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-8">
              {projectExecutionServices.map((card, i) => (
                <ServiceCardComponent key={i} card={card} />
              ))}
            </div>
            <Link to="/zh/services/advisory-retainer" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">了解顾问陪跑</Link>
          </div>
        </section>

        {/* Service Packages */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">服务包</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8 md:mb-10">
              推荐服务包
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {servicePackages.map((pkg, i) => (
                <div key={i} className="bg-[#F8F9FA] border border-[#E5E5E5] p-5 md:p-6 flex flex-col">
                  <p className="text-[11px] text-[#999] uppercase tracking-wider mb-2">
                    {pkg.title}
                  </p>
                  <h3 className="text-[17px] md:text-[18px] font-semibold mb-3 leading-[1.4]">{pkg.name}</h3>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6] mb-3">
                    <strong className="font-medium">适合：</strong>{pkg.for}
                  </p>
                  <div className="mb-4 flex-1">
                    <p className="text-[13px] text-[#999] uppercase tracking-wider mb-2">交付物</p>
                    <ul className="space-y-1.5">
                      {pkg.deliverables.map((d, j) => (
                        <li key={j} className="text-[13px] md:text-[14px] text-[#555] leading-[1.5] pl-3 border-l-2 border-[#C00000]">{d}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to="/zh/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px] w-full text-center">咨询此服务包</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                不确定哪个服务适合您当前阶段？
              </h2>
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">预约初步沟通</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
