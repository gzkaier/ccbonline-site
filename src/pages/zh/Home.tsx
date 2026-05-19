import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHHome() {
  useSEO({
    title: '中国企业进入加拿大与北美市场的本地判断与落地支持 | CCBONLINE INC.',
    description: 'CCBONLINE INC. 帮助企业在进入加拿大及北美市场前，判断产品是否适合进入、合规与进口责任缺什么、客户与渠道如何验证、本地执行如何落地。',
    canonical: 'https://www.ccbonline.ca/zh',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '中国企业进入加拿大与北美市场的本地判断与落地支持 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero - 首屏 */}
        <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/canada-north-america-market-entry-consulting.jpg"
              alt="CCBONLINE 帮助中国企业进入加拿大与北美市场"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/85 to-[#07111F]/50" />
          <div className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5 font-medium">
              加拿大注册 · 多伦多总部
            </p>
            <h1 className="font-serif text-white text-[24px] sm:text-[28px] md:text-[36px] lg:text-[40px] leading-[1.3] tracking-tight max-w-[900px] mb-4 md:mb-6">
              中国企业进入加拿大与北美市场前的本地判断与落地支持
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6 md:mb-8">
              CCBONLINE INC. 帮助企业在进入加拿大及北美市场前，判断产品是否适合进入、合规与进口责任缺什么、客户与渠道如何验证、本地执行如何落地。不是帮你"卖货"，而是帮你判断该不该进、怎么进、责任链是否完整。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4">
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">预约初步沟通</Link>
              <Link to="/zh/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>查看市场进入服务</Link>
            </div>
          </div>
        </section>

        {/* 客户常见处境 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">处境</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4 md:mb-6">
              你可能正在遇到这些情况
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8 md:mb-10">
              不是每家企业都适合立刻进入北美。但如果你正处于以下某种处境，说明应该开始认真评估了。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: '第一次认真考虑加拿大或美国市场', desc: '产品已经出口过，但之前没有系统性地评估过北美市场的适配度、合规要求和进入路径。' },
                { title: '有海外客户询盘，但对方要求本地资料', desc: '海外客户要求英文资料、认证证明、保险、本地服务能力——这些你还没有准备好。' },
                { title: '准备参展，但展前资料还没整理好', desc: '准备参加加拿大或美国展会，但展前资料、报价体系、样品准备和跟进流程还没有系统化。' },
                { title: '想找代理或经销商，但不确定验证方向', desc: '想找代理、经销商或项目方，但不清楚应该优先验证哪类客户、如何判断对方的真实能力。' },
                { title: '产品涉及敏感品类，需要先判断合规风险', desc: '产品涉及电气、食品接触材料、儿童用品、工业设备、AI 硬件等，需要先判断认证要求和合规风险。' },
                { title: '已有物流方案，但不清楚 IOR 和售后责任', desc: '已经有物流渠道，但不清楚进口记录主体（IOR）怎么安排、本地售后和进口责任如何分配。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00A884] transition-colors">
                  <div className="text-[#C9A44C] text-[13px] font-medium mb-3">{'0' + (i + 1)}</div>
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2 leading-[1.5]">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 四大核心服务 */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">核心服务</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4 md:mb-6">
              四项市场进入核心判断与落地支持
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-10">
              每项服务都有明确的服务对象、解决的问题和适合的阶段。不是为了覆盖所有业务场景，而是为了在你最需要判断和落地的环节提供真实支持。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { num: '01', title: '北美市场进入初步诊断', audience: '准备进入或刚考虑北美市场的企业', problem: '产品是否适合、市场是否匹配、当前缺什么、从哪一步开始', stage: '判断阶段', slug: 'market-entry-diagnosis' },
                { num: '02', title: '合规与责任链路径梳理', audience: '产品涉及认证、合规、进口要求的企业', problem: '认证缺什么、IOR 怎么安排、责任链谁负责、标签和文档是否合规', stage: '合规准备阶段', slug: 'compliance-responsibility-chain' },
                { num: '03', title: '客户与渠道验证支持', audience: '已有产品、准备开发客户或参展的企业', problem: '目标客户在哪、渠道怎么验证、参展怎么跟进、怎么判断合作方能力', stage: '市场验证阶段', slug: 'customer-channel-validation' },
                { num: '04', title: '本地执行与服务商资源连接', audience: '已进入或准备进入执行阶段的企业', problem: '进口落地谁协调、仓储物流怎么接、售后怎么处理、本地资源怎么连接', stage: '落地执行阶段', slug: 'local-execution-support' },
              ].map((item) => (
                <div key={item.num} className="p-6 border border-white/10 hover:border-[#00A884]/50 transition-colors">
                  <p className="text-[#C9A44C] text-[13px] font-medium mb-2">{item.num}</p>
                  <h3 className="text-white text-[17px] md:text-[18px] font-semibold mb-3">{item.title}</h3>
                  <div className="space-y-2 mb-4">
                    <p className="text-white/50 text-[13px]"><span className="text-white/30">服务对象：</span>{item.audience}</p>
                    <p className="text-white/50 text-[13px]"><span className="text-white/30">解决问题：</span>{item.problem}</p>
                    <p className="text-white/50 text-[13px]"><span className="text-white/30">适合阶段：</span>{item.stage}</p>
                  </div>
                  <Link to={`/zh/services/${item.slug}`} className="text-[14px] font-medium text-[#00A884] hover:underline inline-flex items-center gap-1">
                    查看详情 <span className="text-[16px]">&rarr;</span>
                  </Link>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/zh/services" className="btn-primary text-[15px] px-8 py-3.5 min-h-[52px] inline-block">查看全部服务</Link>
            </div>
          </div>
        </section>

        {/* 责任链 - 核心方法论 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-5">
                <img
                  src="/images/services-compliance-responsibility-chain.jpg"
                  alt="CCBONLINE 帮助企业梳理进入北美市场的责任链"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="lg:col-span-7">
                <p className="text-label mb-3">核心方法论</p>
                <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4 md:mb-6">
                  能出口不等于能进入市场，责任链是关键
                </h2>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-4">
                  进入加拿大与北美市场，不只是把产品卖出去，而是要建立清晰的责任链。企业需要提前判断：谁负责进口，谁负责合规，谁负责标签，谁负责售后，谁负责保险，谁负责召回，出了问题本地谁能被找到。
                </p>
                <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px] mb-6">
                  大多数企业直到出问题——海关扣留、产品召回、保修纠纷——才意识到这条链的存在。我们的作用是在发货前帮你把它理清楚。
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link to="/zh/responsibility-chain" className="btn-primary text-[14px] px-5 py-3 min-h-[48px]">了解责任链方法论</Link>
                  <Link to="/zh/contact" className="btn-outline text-[14px] px-5 py-3 min-h-[48px]">预约责任链初步评估</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 判断模块 - 为什么不是卖货 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">判断</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-6 md:mb-8">
              市场进入不是卖货，而是建立完整的进入路径
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {[
                { title: '扩张前先判断', desc: '评估你的产品是否适配，以及加拿大和美国哪个应该优先。不是所有产品都适合所有市场。' },
                { title: '发货前先理清责任链', desc: '在发货前明确谁负责认证、进口、责任和售后。责任链不完整，进入市场就是冒险。' },
                { title: '转化前先建立本地信任', desc: '北美买家评估的不只是产品，还有你的可信度、文件完备性和运营准备度。' },
                { title: '扩大前先建立执行节奏', desc: '没有项目跟踪、服务商协调和阶段性复盘，市场进入计划很快会停滞。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 服务对象 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">服务对象</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4 md:mb-6">
              我们服务谁
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              我们并非服务于所有人。我们专注于有真实产品、真实出口能力和真实市场意向的企业。如果你只是想找"捷径"，我们可能不是合适的选择。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: '制造商与工业供应商', desc: '拥有成熟产能，希望通过直接分销或 B2B 渠道进入北美市场的企业。' },
                { title: '硬件与设备公司', desc: '工业设备、机械、工具及零部件制造商，需要合规认证和本地渠道开发支持。' },
                { title: '消费产品品牌', desc: '拥有差异化产品，希望建立市场存在感、寻找零售合作伙伴的品牌。' },
                { title: '出口商与贸易公司', desc: '希望超越交易型销售、建立可持续本地运营的成熟贸易公司。' },
                { title: '科技与创新企业', desc: 'AI 硬件、智能设备、新能源技术等需要判断合规路径和市场适配的创新型企业。' },
                { title: '有明确需求的成长型企业', desc: '在国内已有成功基础，需要结构化市场进入支持而非试错型方法的成长型公司。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[15px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 专业服务商网站与内容建设 - 辅助服务入口 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <div className="max-w-[800px] p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <p className="text-label mb-3">辅助服务</p>
              <h2 className="font-serif text-[#212121] text-[18px] md:text-[22px] leading-[1.35] tracking-tight mb-3">
                面向加拿大本地专业服务商的网站与内容建设
              </h2>
              <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[680px] mb-4">
                这项服务是 CCBONLINE 面向加拿大及北美本地专业服务商提供的内容建设服务，重点帮助服务商把专业能力转化为可被客户理解和信任的线上表达。它与我们的市场进入、合规路径、本地服务资源连接业务形成互补。
              </p>
              <Link to="/zh/services/website-content-for-service-providers" className="text-[#00A884] hover:text-[#008F6E] text-[14px] font-medium inline-flex items-center gap-1 group">
                了解详情
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site text-center">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">开始</p>
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
              不确定是否适合进入北美市场？
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[600px] mx-auto mb-8">
              可以先做一次初步沟通。我们会了解你的产品、目标市场和当前阶段，再判断是否需要进一步诊断或推进。
            </p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-8 py-3.5 min-h-[52px] inline-block">预约初步沟通</Link>
            <p className="text-white/40 text-[13px] mt-4">info@ccbonline.ca · +1 647 568 1128</p>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
