import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHHome() {
  useSEO({
    title: 'CCBONLINE INC.｜帮助企业在加拿大、北美与中国市场之间建立可信表达与商业连接',
    description: 'CCBONLINE INC. 提供北美市场进入初步诊断、官网与商业可信度诊断、双语商业内容、本地化资料整理和中加商业连接服务。我们关注的不是曝光，而是客户是否看得懂、信得过，并愿意进入下一步沟通。',
    canonical: 'https://www.ccbonline.ca/zh',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = 'CCBONLINE INC.｜帮助企业在加拿大、北美与中国市场之间建立可信表达与商业连接'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* ===== 1. Hero ===== */}
        <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/canada-north-america-market-entry-consulting.jpg"
              alt="CCBONLINE INC. 连接加拿大、北美与中国市场的商业服务平台"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E14] via-[#0B0E14]/90 to-[#0B0E14]/55" />
          <div className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5 font-medium">
              加拿大注册公司 · 多伦多本地运营 · 中英双语
            </p>
            <h1 className="font-serif text-white text-[24px] sm:text-[30px] md:text-[40px] lg:text-[46px] leading-[1.25] tracking-tight max-w-[900px] mb-4 md:mb-6">
              帮助企业在加拿大、北美与中国市场之间建立可信表达、数字基础设施和商业连接能力
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6 md:mb-8">
              进入北美市场，客户先看的不是你能不能供货，而是你是否可信、是否准备好、是否能被本地商业系统接受。CCBONLINE INC. 帮助企业梳理市场进入路径、英文商业表达、网站可信度、合规准备和本地合作承接，让跨市场合作从"信息不清楚"变成"可以判断、可以沟通、可以推进"。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6">
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">预约初步诊断</Link>
              <Link to="/zh/services/website-credibility-audit" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>了解官网可信度诊断</Link>
              <Link to="/zh/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>查看核心服务</Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/40">
              <span>市场进入诊断</span><span>·</span>
              <span>商业可信度诊断</span><span>·</span>
              <span>双语商业内容</span><span>·</span>
              <span>中加商业连接</span>
            </div>
          </div>
        </section>

        {/* ===== 2. Three Main Services ===== */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">三大核心服务</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              不是服务清单，而是三条清晰的合作路径
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-10">
              你可以选择从任何一条路径开始，但我们建议：在投入更多预算做推广之前，先确认你的商业表达是否已经准备好。
            </p>
            <div className="space-y-5">
              {[
                { num: '01', title: '北美市场进入初步诊断', desc: '适合准备进入加拿大或北美市场的中国企业、制造商和品牌方。核心交付：产品与目标市场初判；合规、认证、标签、责任链缺口；英文资料与网站可信度检查；渠道和客户开发准备度；30–90 天推进建议。', link: '/zh/services/market-entry-diagnosis', price: 'CAD 1,500 起' },
                { num: '02', title: '官网与商业可信度诊断', desc: '适合加拿大本地华人企业、准备参展的中国供应商、以及希望进入主流客户市场的服务商。核心问题：客户看不看得懂？信不信？有没有购买理由？英文表达是否像本地商业沟通？AI 搜索能否理解你？', link: '/zh/services/website-credibility-audit', price: 'CAD 299 起' },
                { num: '03', title: '中加商业连接与媒体内容合作', desc: '适合协会、展会、服务商、企业活动方和商业合作方。核心交付：企业报道、活动推广、服务商展示、中英文内容整理、社群和媒体发布、商业合作资源连接。顾问服务负责判断和路径，媒体服务负责曝光和连接。', link: '/zh/services/business-media-content', price: '按项目报价' },
              ].map((item) => (
                <div key={item.num} className="p-6 md:p-8 border border-white/10 hover:border-[#00B894]/50 transition-colors bg-white/5">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
                    <div className="shrink-0">
                      <span className="text-[#D4AF37] text-[13px] font-medium">{item.num}</span>
                      <span className="text-[13px] text-white/50 ml-3">{item.price}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-white text-[20px] md:text-[22px] font-semibold mb-3">{item.title}</h3>
                      <p className="text-white/60 text-[14px] md:text-[15px] leading-[1.65] mb-4">{item.desc}</p>
                      <Link to={item.link} className="text-[14px] font-medium text-[#00B894] hover:underline inline-flex items-center gap-1">了解详情 <span>→</span></Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 3. Common Problems ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">你现在可能遇到的问题</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              不是曝光不够，而是准备不足
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-10">
              以下是我们最常遇到的六种情况。如果你正在经历其中之一，我们可能可以帮助你。
            </p>
            <div className="space-y-4">
              {[
                { title: '有官网，但客户看完没有继续联系', desc: '网站有内容，但北美客户看不出可信度和购买理由。不是网站不好看，而是没有回答"为什么选择你"。', service: '官网与商业可信度诊断', link: '/zh/services/website-credibility-audit' },
                { title: '有产品资料，但北美客户看不懂优势', desc: '产品规格齐全，但没有讲清楚"为什么选择你而不是别人"。技术参数不等于购买理由。', service: '英文资料与服务页优化', link: '/zh/services/english-materials-optimization' },
                { title: '想进入加拿大市场，但不知道先做什么', desc: '认证、合规、渠道、资料、展会——不知道从哪开始，怕花错钱。', service: '北美市场进入初步诊断', link: '/zh/services/market-entry-diagnosis' },
                { title: '准备参展，但英文资料和跟进路径不清楚', desc: '展位定了，但展会话术、一页纸资料、展后跟进体系都没有准备好。', service: '展会前北美客户承接包', link: '/zh/services/trade-show-follow-up' },
                { title: '网站在Google搜不到，AI也提不到', desc: '官网结构混乱，内容太薄，搜索引擎和AI系统都无法理解和引用。', service: '官网与AI可见度诊断', link: '/zh/services/website-ai-visibility-diagnosis' },
                { title: '本地服务商想接触跨境客户，但缺少可信展示入口', desc: '服务能力不错，但官网和商业内容没有打动目标客户，找不到有效渠道。', service: '品牌可信度与数字基础设施', link: '/zh/brand-credibility' },
              ].map((item, i) => (
                <div key={i} className="p-5 md:p-6 border border-[#E5E5E5] hover:border-[#00B894]/50 transition-colors bg-[#F8F9FA]">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#D4AF37] text-[13px] font-medium">0{i + 1}</span>
                    <h3 className="text-[#212121] text-[17px] md:text-[18px] font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-[#444] text-[14px] md:text-[15px] leading-[1.65] mb-3">{item.desc}</p>
                  <Link to={item.link} className="text-[14px] font-medium text-[#00B894] hover:underline inline-flex items-center gap-1">{item.service} <span>→</span></Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 4. Who We Serve / Not Serve ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-label mb-3">适合谁</p>
                <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
                  我们主要服务的客户
                </h2>
                <div className="space-y-3">
                  {[
                    '准备进入加拿大或北美市场的中国企业、制造商、品牌方',
                    '想进入主流客户市场的加拿大本地华人企业和服务商',
                    '需要中英双语商业资料的供应商和出口团队',
                    '准备参展、招商、找渠道、做客户开发的企业',
                    '希望连接中国供应链或北美本地资源的企业',
                    '协会、展会、活动方和商业合作机构',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white border border-[#E5E5E5]">
                      <span className="text-[#00B894] mt-0.5 shrink-0">✓</span>
                      <span className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-label mb-3" style={{ color: '#999' }}>可能不太适合</p>
                <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
                  这些情况我们可能帮不上
                </h2>
                <div className="space-y-3">
                  {[
                    '只想找最低价建站或代写文案',
                    '希望承诺"马上出单""马上排名"',
                    '没有基础资料、也不愿意配合',
                    '希望用虚假评论或夸大宣传',
                    '没有产品、预算或基本执行配合',
                    '只想用 AI 快速生成一份万能方案',
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-white border border-[#E5E5E5]">
                      <span className="text-[#999] mt-0.5 shrink-0">—</span>
                      <span className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5. How We Work ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">第一步怎么合作</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              第一步不是直接报价，而是做一次初步诊断
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-10">
              我们会先看企业当前资料、网站、目标市场、产品类别和已有资源，再判断适合做市场进入、官网可信度优化、内容合作，还是暂时不适合推进。这个初步沟通是免费的。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: '01', title: '初步判断', desc: '看你现有官网、资料、目标市场和当前问题。判断是否适合推进，如果条件不具备，先告诉你需要准备什么。' },
                { step: '02', title: '问题诊断', desc: '评估可信度、表达、路径、资源和风险缺口。告诉你什么准备好了、什么需要补、优先级是什么。' },
                { step: '03', title: '优化设计', desc: '重构服务表达、页面内容、英文资料、FAQ、SEO和AI可见度基础。输出可以直接使用的文案和方案。' },
                { step: '04', title: '落地推进', desc: '根据你的阶段，进入内容优化、市场进入陪跑、服务商连接、媒体报道或本地合作对接。推动事情发生。' },
              ].map((item) => (
                <div key={item.step} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[#D4AF37] text-[13px] font-medium mb-3">{item.step}</p>
                  <h3 className="text-[17px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 6. AI Methodology ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">关于 AI</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight mb-4">
              AI 提高效率，关键判断由人完成
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] mb-4">
              我们使用 AI 提高资料整理、市场信息梳理、内容初稿和项目推进效率，但关键判断、责任边界、客户沟通和资源筛选由人工完成。
            </p>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65]">
              AI 不是我们的卖点，而是我们的工具。客户购买的不是"AI 生成内容"，而是经过专业判断后的商业建议、可信表达和可执行的推进路径。
            </p>
          </div>
        </section>

        {/* ===== 7. Final CTA ===== */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                如果你不确定官网、资料或市场进入路径是否已经准备好
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                可以先提交现有官网或公司介绍，我们先做初步判断。这个初步沟通是免费的。如果你需要更深入的分析，可以从官网与商业可信度快速诊断（CAD 299）开始。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">预约初步诊断</Link>
                <Link to="/zh/services/website-credibility-audit" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>了解官网可信度诊断</Link>
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
