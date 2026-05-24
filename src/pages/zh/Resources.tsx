import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

const launched = [
  { title: '进口责任与 IOR 基础说明', desc: '进口记录主体（Importer of Record，进口记录主体 / 进口责任主体）是什么、为什么重要、企业在发货前需要确认哪些责任边界。', link: '/zh/topics/importer-of-record-and-responsibility-chain' },
]

const comingBasic = [
  { title: '加拿大市场进入准备清单', desc: '帮助企业从产品、资料、合规、责任链、渠道和本地承接几个角度，初步判断是否具备进入加拿大市场的基础条件。' },
  { title: '北美市场进入初步诊断表', desc: '用于企业在正式投入前，梳理产品类别、目标客户、认证状态、现有资料、进口安排、渠道计划和主要风险点。' },
  { title: '产品资料本地化准备清单', desc: '帮助企业检查英文产品介绍、规格表、认证文件、说明书、标签、警示语、售后信息和常见问题是否适合本地客户阅读。' },
  { title: '责任链自查清单', desc: '围绕进口责任、合规责任、售后责任、保险责任、召回责任和本地服务责任，帮助企业判断当前责任链是否清楚。' },
]

const comingIndustry = [
  { title: '建材进入加拿大市场准备清单', desc: '适用于门窗、地板、板材、五金、橱柜、石材、玻璃、保温材料等建材产品，关注建筑规范、认证评估、安装责任、项目渠道和售后承接。' },
  { title: '小家电进入北美市场准备清单', desc: '适用于厨房电器、清洁电器、个人护理电器等产品，重点关注电气安全、FCC/ISED、能效、食品接触材料、双语标签、售后和召回准备。' },
  { title: 'AI 硬件进入北美责任链清单', desc: '适用于 AI 终端、智能硬件、机器人、边缘计算设备和数据采集类产品，重点关注硬件合规、数据合规、云服务、隐私政策、本地售后和责任边界。' },
  { title: '工业设备进入加拿大市场准备清单', desc: '适用于自动化设备、机械设备、工业控制设备和生产线相关产品，关注电气安全、安装责任、现场调试、备件、售后和本地工程支持。' },
  { title: '储能与电力设备北美市场进入清单', desc: '适用于便携储能、商用储能、电力设备、充电设备、变压器及相关产品，关注认证、并网、安全标准、安装责任、保险和项目客户要求。' },
  { title: '家居消费品进入加拿大市场准备清单', desc: '适用于家具、家居用品、户外用品、收纳用品和生活消费品，重点关注材料安全、标签、包装、退换货、仓储和本地渠道适配。' },
  { title: '儿童用品与母婴产品北美进入清单', desc: '适用于玩具、儿童用品、母婴用品和相关消费品，重点关注年龄分级、测试报告、警示标签、追踪信息和平台 / 渠道准入要求。' },
  { title: '食品接触材料进入北美市场清单', desc: '适用于餐厨用品、包装材料、食品接触部件和相关产品，关注材料声明、测试文件、标签、进口要求和客户采购审核。' },
]

const comingChannel = [
  { title: '出海企业网站可信度检查清单', desc: '帮助企业检查英文网站是否能让北美买家快速理解公司、产品、能力、认证、联系方式和可信背书。' },
  { title: '服务商网站展示清单', desc: '面向加拿大本地服务商，帮助其在线上更清楚展示服务范围、资质、案例、服务对象、合作流程和联系方式。' },
  { title: '展会跟进清单', desc: '帮助企业把展会现场收集的名片、扫码、询盘和微信联系人，转化为可分层、可跟进、可复盘的销售线索。' },
  { title: '北美买家询盘回复清单', desc: '帮助企业判断收到询盘后应该准备哪些资料，如何回复价格、样品、认证、交期、MOQ 和售后问题。' },
  { title: 'LinkedIn（领英）与 Reddit 商业可信度清单', desc: '帮助企业理解在 AI 搜索和北美买家调研环境下，如何通过 LinkedIn（领英）、Reddit 等公开信息平台建立基础可信度。' },
]

const comingService = [
  { title: '加拿大本地服务商资料提交清单', desc: '面向认证检测、物流仓储、清关、售后、法律、会计、保险、媒体传播、数字营销等服务商，说明提交服务信息时需要准备哪些内容。' },
  { title: '商业活动与展会信息提交清单', desc: '面向商协会、展会主办方、产业活动组织者，说明提交活动信息时需要包含哪些关键信息，便于发布、报道和资源连接。' },
  { title: '本地合作方筛选清单', desc: '帮助中国企业在选择加拿大本地服务商、代理、渠道方和合作机构时，判断对方是否具备真实承接能力。' },
]

const caseNotes = [
  { title: '帮助中国设备供应商理清加拿大进入路径', desc: '一家在国内有成熟销售的工业设备制造商，希望了解其产品类别在加拿大是否可行，以及需要先补齐哪些认证缺口。', industry: '工业设备' },
  { title: '为本地专业服务提供商审查英文网站呈现', desc: '一家服务华人企业的加拿大会计事务所，需要重新组织网站和服务描述，让英文客户能够理解其服务并信任其专业能力。', industry: '专业服务' },
  { title: '支持出口企业的展会后跟进', desc: '一家消费电子公司在多伦多展会收集了80多条线索，但没有跟进系统。我们帮助建立结构化外联流程、调整材料并协调本地跟进。', industry: '消费电子' },
  { title: '出货前梳理认证和责任链问题', desc: '一家建材供应商准备发货，但尚未明确 CCMC（加拿大建筑材料中心）评估要求、IOR（进口记录主体）安排和省级建筑规范合规。我们在第一个集装箱离港前梳理了完整的责任链。', industry: '建材' },
  { title: '帮助智能硬件企业梳理北美进入前的责任边界', desc: '一家智能硬件企业准备进入北美市场，但产品涉及设备、App、云服务和用户数据。我们帮助其初步梳理硬件合规、隐私政策、售后责任和本地客户资料准备问题。', industry: 'AI 硬件' },
  { title: '为建材供应商评估加拿大项目渠道准备度', desc: '一家建材供应商希望进入加拿大住宅和商业项目渠道。我们帮助其梳理产品资料、认证文件、安装责任、项目客户关注点和本地服务配合方式。', industry: '家居建材' },
  { title: '帮助加拿大服务商整理面向中国企业的服务表达', desc: '一家加拿大本地专业服务机构希望更清楚服务中国出海企业。我们协助其梳理服务范围、客户适配、网站内容和合作信息提交材料。', industry: '本地服务商' },
  { title: '为商业活动整理参展商后续承接路径', desc: '一个面向中加企业合作的商业活动，需要在活动结束后继续承接参展商、服务商和采购方资源。我们协助梳理信息发布、资源分类和后续沟通路径。', industry: '展会活动' },
]

const insightsLive = [
  { title: '北美市场进入：不只是卖货', slug: 'bei-mei-shi-chang-jin-ru-bu-shi-mai-huo' },
  { title: '责任链：出口与市场进入的分水岭', slug: 'bei-mei-shi-chang-jin-ru-ze-ren-lian' },
  { title: 'IOR 不只是海关手续', slug: 'ior-bu-shi-dai-qing-guan' },
  { title: '为什么产品认证要在发货前完成', slug: 'ren-zheng-bu-shi-zhong-dian' },
  { title: '加拿大：进入北美的第一步', slug: 'jia-na-da-ke-yi-shi-bei-mei-di-yi-zhan' },
]

const insightsComing = [
  { title: '中国企业进入加拿大市场，为什么不能只看客户名单' },
  { title: '出海企业英文网站为什么会影响北美客户信任' },
  { title: '展会之后，真正的工作才开始' },
  { title: '加拿大本地服务商如何服务中国出海企业' },
  { title: 'AI 硬件进入北美，为什么责任链比功能介绍更重要' },
]

function ChecklistCard({ item, isLink }: { item: { title: string; desc: string; link?: string }; isLink?: boolean }) {
  return (
    <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
      <h3 className="text-[15px] font-semibold mb-2 leading-[1.4]">{item.title}</h3>
      <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6] mb-3">{item.desc}</p>
      {isLink && item.link && <Link to={item.link} className="text-[13px] text-[#00A884] hover:underline">立即阅读 &rarr;</Link>}
    </div>
  )
}

function ComingGrid({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((item, i) => (
        <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
          <h3 className="text-[15px] font-semibold mb-2 leading-[1.4]">{item.title}</h3>
          <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
        </div>
      ))}
    </div>
  )
}

export default function ZHResources() {
  useSEO({
    title: '市场进入资源、清单与案例 | 中加商业在线 CCBONLINE INC.',
    description: '下载加拿大与北美市场进入清单，阅读匿名项目笔记和行业洞察，帮助中国企业评估产品、资料、责任链、渠道和本地承接准备度。',
    canonical: 'https://www.ccbonline.ca/zh/resources',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '市场进入资源、清单与案例 | 中加商业在线 CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">资源</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              市场进入资源与清单
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[720px]">
              实用的清单、说明、项目笔记和行业洞察，帮助中国企业在全面投入之前，先评估产品、资料、责任链和本地承接准备度。
            </p>
          </div>
        </section>

        {/* 可下载的市场进入清单 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">清单</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-2">
              可下载的市场进入清单
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px] mb-8">
              这些清单面向准备进入加拿大及北美市场的中国企业，也适合本地服务商、活动方和合作机构用于初步沟通。内容会根据实际项目和企业常见问题持续更新。
            </p>

            {/* 已上线 */}
            <div className="mb-8">
              <h3 className="text-[15px] font-semibold text-[#00A884] mb-4">已上线</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {launched.map((item, i) => (
                  <ChecklistCard key={i} item={item} isLink />
                ))}
              </div>
            </div>

            {/* 即将推出：市场进入基础类 */}
            <div className="mb-8">
              <h3 className="text-[15px] font-semibold text-[#767676] mb-4">即将推出：市场进入基础类</h3>
              <ComingGrid items={comingBasic} />
            </div>

            {/* 即将推出：行业清单类 */}
            <div className="mb-8">
              <h3 className="text-[15px] font-semibold text-[#767676] mb-4">即将推出：行业清单类</h3>
              <ComingGrid items={comingIndustry} />
            </div>

            {/* 即将推出：渠道与获客类 */}
            <div className="mb-8">
              <h3 className="text-[15px] font-semibold text-[#767676] mb-4">即将推出：渠道与获客类</h3>
              <ComingGrid items={comingChannel} />
            </div>

            {/* 即将推出：本地服务资源类 */}
            <div className="mb-8">
              <h3 className="text-[15px] font-semibold text-[#767676] mb-4">即将推出：本地服务资源类</h3>
              <ComingGrid items={comingService} />
            </div>
          </div>
        </section>

        {/* 资源更新说明 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <div className="max-w-[800px] p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3">资源更新说明</h3>
              <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] mb-5">
                部分清单会先以文章形式发布，随后整理为可下载版本。如果你正在准备某一类产品进入加拿大或北美市场，也可以提交资源请求。我们会根据企业最常问的问题，优先整理相关行业清单和实用说明。
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/zh/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px]">提交资源请求</Link>
                <Link to="/zh/resource-submission-guidelines" className="btn-outline text-[14px] px-5 py-3 min-h-[48px]">提交服务资源</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 匿名项目笔记 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">项目案例</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              匿名项目笔记
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px] mb-8">
              真实的项目场景，客户名称和敏感数据已移除。这些案例说明了我们帮助企业应对的挑战类型。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {caseNotes.map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <span className="text-[11px] text-[#00A884] uppercase tracking-wider mb-3 block">{item.industry}</span>
                  <h3 className="text-[15px] font-semibold mb-2 leading-[1.5]">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 行业洞察：已发布 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">洞察</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              行业洞察
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {insightsLive.map((item, i) => (
                <Link key={i} to={`/zh/insights/${item.slug}`} className="p-5 bg-white border border-[#E5E5E5] hover:border-[#00A884] transition-colors group">
                  <h3 className="text-[15px] font-semibold mb-2 group-hover:text-[#00A884] transition-colors">{item.title}</h3>
                  <span className="text-[13px] text-[#00A884]">阅读文章 &rarr;</span>
                </Link>
              ))}
            </div>

            {/* 即将推出的洞察内容 */}
            <h3 className="text-[15px] font-semibold text-[#767676] mb-4">即将推出的洞察内容</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {insightsComing.map((item, i) => (
                <div key={i} className="p-4 bg-white border border-[#E5E5E5]">
                  <p className="text-[14px] text-[#555]">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                需要特定行业清单或资源说明？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-4">
                如果你正在准备某一类产品进入加拿大或北美市场，可以告诉我们你的产品类别、目标市场和当前阶段。我们会根据常见问题，优先整理相关清单、说明或项目笔记。
              </p>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                如果你是加拿大本地服务商、活动方或机构，也可以提交服务资源、活动信息或合作内容。我们会根据真实性、相关性和适配度，判断是否适合发布、报道或进一步连接。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">提交资源请求</Link>
                <Link to="/zh/resource-submission-guidelines" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>提交服务资源</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
