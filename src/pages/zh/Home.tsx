import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHHome() {
  useSEO({
    title: 'CCBONLINE INC. 中加商业在线｜跨市场品牌可信度与商业连接服务',
    description: 'CCBONLINE INC. 帮助企业在加拿大、北美与中国市场之间建立可信表达与商业连接。提供市场进入诊断、品牌可信度评估、官网升级、中英双语资料、商业内容和连接服务。',
    canonical: 'https://www.ccbonline.ca/zh',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = 'CCBONLINE INC. 中加商业在线｜跨市场品牌可信度与商业连接服务'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/canada-north-america-market-entry-consulting.jpg"
              alt="CCBONLINE INC. 中加商业在线 — 跨市场品牌可信度与商业连接服务"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/90 to-[#0B0E14]/55" />
          <div className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5 font-medium">
              跨市场品牌可信度与商业连接服务
            </p>
            <h1 className="font-serif text-white text-[26px] sm:text-[34px] md:text-[44px] lg:text-[50px] leading-[1.2] tracking-tight max-w-[900px] mb-4 md:mb-6">
              让企业在加拿大、北美与中国市场之间，被看懂、被信任、被连接
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6 md:mb-8">
              中加商业在线（CCBONLINE INC.）提供市场进入初步诊断、企业品牌可信度评估、官网与数字可信度升级、中英双语商业资料本地化、商业媒体内容与品牌曝光、展会活动对接，以及 30/90 天项目推进陪跑。服务对象不限方向——无论你是中国企业进入北美，还是北美企业连接中国市场，或者是本地华人企业提升主流市场可信度。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6">
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">预约初步诊断</Link>
              <Link to="/zh/services/website-credibility-audit" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>官网可信度诊断 — CAD 299 起</Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/40">
              <span>多伦多 · 安大略 · 加拿大注册公司</span>
              <span>·</span>
              <span>中文 · English · Français</span>
            </div>
          </div>
        </section>

        {/* Seven Services */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">核心服务</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              七个方向，帮你准备好、连上对接、推得动
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-10">
              不是服务清单，是我们在实际项目中判断、执行、推进的七个领域。你可以从任何一个方向开始。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { num: '01', title: '北美市场进入初步诊断', desc: '适合准备进入加拿大或美国市场的中国企业、制造商和品牌方。产品与目标市场初判、合规与认证缺口、英文资料准备度、渠道和客户开发 readiness，以及 30–90 天推进建议。不是保证出单的路线图，是告诉你什么还没准备好。', price: 'CAD 1,500 起', link: '/zh/services/market-entry-diagnosis' },
                { num: '02', title: '企业购买理由与品牌可信度诊断', desc: '适合有官网和产品资料、但购买理由不清晰的企业。诊断你的目标客户是否能理解你的价值、相信你的说法、找到选择你的理由。覆盖品牌定位、价值表达和竞争差异化。', price: 'CAD 800 起', link: '/zh/services/business-reason-credibility-diagnosis' },
                { num: '03', title: '官网与数字可信度升级', desc: '不是重新设计网站。我们诊断你的官网是否在回答买家真正想问的问题：你是谁？你服务谁？我为什么要信任你？下一步做什么？覆盖首页、服务页、关于页、联系路径、FAQ 和英文表达质量。', price: 'CAD 299 起', link: '/zh/services/website-credibility-audit' },
                { num: '04', title: '中英双语商业资料与本地化表达', desc: '不是翻译，而是面向目标受众重新写作。一页纸介绍、服务说明、展会话术、邮件模板、FAQ——适配当地商业文化和买家习惯。中→英，英→中，都可以做。', price: 'CAD 600 起', link: '/zh/services/english-materials-optimization' },
                { num: '05', title: '商业媒体内容与品牌曝光', desc: '专业的商业内容，建立可搜索的信任资产：企业报道、行业观察、专业评论和媒体就绪文章。通过 CCBONLINE 渠道发布，并针对搜索引擎和 AI 系统进行优化。', price: '按项目报价', link: '/zh/services/media-business-content' },
                { num: '06', title: '展会、活动与本地商业连接', desc: '展前准备（资料、话术、跟进体系）、现场支持和展后线索管理。同时也为协会、展会主办方和活动方提供对接服务，连接中国企业和北美本地资源。', price: 'CAD 1,200 起', link: '/zh/services/trade-show-follow-up' },
                { num: '07', title: '30天 / 90天项目推进陪跑', desc: '有计划但需要推进支持的企业。每周检查、任务跟进、内容审核、供应商协调和进度追踪。我们不替你干活，我们陪着你把事干成。', price: 'CAD 3,000/月起', link: '/zh/services/advisory-retainer' },
              ].map((item) => (
                <div key={item.num} className="p-5 md:p-6 border border-white/10 hover:border-[#00B894]/50 transition-colors bg-white/5">
                  <div className="flex items-start gap-4">
                    <span className="text-[#D4AF37] text-[13px] font-medium shrink-0">{item.num}</span>
                    <div className="flex-1">
                      <h3 className="text-white text-[17px] md:text-[18px] font-semibold mb-2">{item.title}</h3>
                      <p className="text-white/55 text-[13px] md:text-[14px] leading-[1.65] mb-3">{item.desc}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-[#D4AF37] text-[13px]">{item.price}</span>
                        <Link to={item.link} className="text-[13px] font-medium text-[#00B894] hover:underline">了解详情 →</Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who For */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <p className="text-label mb-3">我们服务谁</p>
                <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
                  不限方向——任何跨市场商业连接需求
                </h2>
                <div className="space-y-3">
                  {[
                    '准备进入加拿大或美国市场的中国企业和制造商',
                    '希望连接中国市场或中国供应商的北美企业',
                    '想进入主流客户市场的加拿大本地华人企业',
                    '服务商、协会、展会主办方等桥梁型机构',
                    '准备参展、招商、找渠道、建合作的企业',
                    '需要官网和资料跨语言、跨文化有效传达的企业',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                      <span className="text-[#00B894] mt-0.5 shrink-0">✓</span>
                      <span className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-label mb-3" style={{ color: '#999' }}>可能不太适合</p>
                <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
                  这些情况我们帮不上
                </h2>
                <div className="space-y-3">
                  {[
                    '只想找最低价建站或写文案',
                    '要求保证出单、保证排名、保证效果',
                    '没有基础资料，也不愿意配合',
                    '希望用虚假评论或夸大宣传',
                    '想要一份万能 AI 生成方案',
                    '不愿意投入时间做前期准备的企业',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                      <span className="text-[#999] mt-0.5 shrink-0">—</span>
                      <span className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Work */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">怎么开始合作</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              第一步不是报价，是一次诊断性沟通
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-10">
              我们先看你的现有资料、官网、目标和资源，再判断适合做什么服务。如果条件不具备，我们会告诉你需要先准备什么。这个初步沟通是免费的。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: '01', title: '初步评估', desc: '了解你的现状。判断是否适合推进，或者需要先准备什么。' },
                { step: '02', title: '问题诊断', desc: '评估可信度、表达、缺口和风险。告诉你什么准备好了，什么需要补。' },
                { step: '03', title: '优化设计', desc: '根据你的情况，制定内容、资料和行动计划。' },
                { step: '04', title: '落地支持', desc: '执行层面的跟进：连接、内容、推进，持续追踪进度。' },
              ].map((item) => (
                <div key={item.step} className="p-5 bg-white border border-[#E5E5E5]">
                  <p className="text-[#D4AF37] text-[13px] font-medium mb-3">{item.step}</p>
                  <h3 className="text-[17px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Note */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">关于 AI</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              AI 辅助工作，判断由人完成
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65]">
              我们使用 AI 工具加速研究、起草和分析。每一条面向客户的建议、每一份内容和每一个战略判断，都由理解商业语境的人审核和确认。AI 是我们的工具，专业判断是我们的产品。
            </p>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                不确定你的跨市场可信度处于什么水平？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                提交你的官网或企业介绍，我们先做免费初步评估。如果需要深入诊断，官网与数字可信度审核从 CAD 299 起。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">预约诊断沟通</Link>
                <Link to="/zh/services/website-credibility-audit" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>了解可信度诊断</Link>
              </div>
              <p className="text-white/40 text-[13px] mt-6">info@ccbonline.ca · +1 647 568 1128 · 84 Kenhar Dr, North York, ON M9L 1N2</p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
