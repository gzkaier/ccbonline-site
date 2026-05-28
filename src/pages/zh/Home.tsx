import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHHome() {
  useSEO({
    title: '中加商业在线 CCBONLINE INC.｜连接加拿大、北美与中国市场的商业可信度与本地服务平台',
    description: 'CCBONLINE INC. 位于加拿大，帮助企业进入加拿大与北美市场，提供市场进入诊断、品牌可信度诊断、AI可见度诊断、英文资料优化、商业媒体报道和本地服务资源连接。',
    canonical: 'https://www.ccbonline.ca/zh',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '中加商业在线 CCBONLINE INC.｜连接加拿大、北美与中国市场的商业可信度与本地服务平台'
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
              连接加拿大、北美与中国市场的商业可信度与本地服务平台
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6 md:mb-8">
              CCBONLINE INC. / 中加商业在线，帮助企业在跨市场、跨语言、跨信任体系中，建立更清晰的官网表达、市场进入判断、AI可见度和本地合作路径。我们不是普通建站公司、广告公司或出海中介——而是帮你在进入新市场之前，先把"客户是否看得懂你、是否信任你、是否知道为什么联系你"这些问题理清楚。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6">
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">预约初步沟通</Link>
              <Link to="/zh/contact" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>提交官网做初步判断</Link>
              <Link to="/zh/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>查看核心服务</Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/40">
              <span>市场进入判断</span><span>·</span>
              <span>品牌可信度诊断</span><span>·</span>
              <span>AI可见度</span><span>·</span>
              <span>英文资料优化</span><span>·</span>
              <span>本地资源连接</span>
            </div>
          </div>
        </section>

        {/* ===== 2. Common Problems ===== */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">你现在可能遇到的问题</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              不是曝光不够，而是准备不足
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-10">
              以下是我们最常遇到的六种情况。如果你正在经历其中之一，我们可能可以帮助你。
            </p>
            <div className="space-y-4">
              {[
                { title: '有官网，但客户看完没有继续联系', desc: '网站有内容，但北美客户看不出可信度和购买理由。不是网站不好看，而是没有回答"为什么选择你"。', service: '官网与品牌可信度诊断', link: '/zh/services/business-reason-credibility-diagnosis' },
                { title: '有产品资料，但北美客户看不懂优势', desc: '产品规格齐全，但没有讲清楚"为什么选择你而不是别人"。技术参数≠购买理由。', service: '英文资料与服务页优化', link: '/zh/services/english-materials-optimization' },
                { title: '想进入加拿大市场，但不知道先做什么', desc: '认证、合规、渠道、资料、展会——不知道从哪开始，怕花错钱。', service: '北美市场进入初步诊断', link: '/zh/services/market-entry-diagnosis' },
                { title: '准备参展，但英文资料和跟进路径不清楚', desc: '展位定了，但展会话术、一页纸资料、展后跟进体系都没有准备好。', service: '展会前北美客户承接包', link: '/zh/services/trade-show-follow-up' },
                { title: '网站在Google搜不到，AI也提不到', desc: '官网结构混乱，内容太薄，搜索引擎和AI系统都无法理解和引用。', service: '官网与AI可见度诊断', link: '/zh/services/website-ai-visibility-diagnosis' },
                { title: '本地服务商想接触跨境客户，但缺少可信展示入口', desc: '服务能力不错，但官网和商业内容没有打动目标客户，找不到有效渠道。', service: '品牌可信度与数字基础设施', link: '/zh/brand-credibility' },
              ].map((item, i) => (
                <div key={i} className="p-5 md:p-6 border border-white/10 hover:border-[#00B894]/50 transition-colors bg-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[#D4AF37] text-[13px] font-medium">0{i + 1}</span>
                    <h3 className="text-white text-[17px] md:text-[18px] font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-white/60 text-[14px] md:text-[15px] leading-[1.65] mb-3">{item.desc}</p>
                  <Link to={item.link} className="text-[14px] font-medium text-[#00B894] hover:underline inline-flex items-center gap-1">{item.service} <span>→</span></Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 3. Core Services ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">核心服务</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              七项服务，覆盖从判断到落地的完整路径
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-10">
              每项服务都有明确的对象、交付和边界。你可以从任何一项开始，但我们建议：在投入更多预算做推广之前，先确认你的商业表达是否准备好了。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { num: '01', title: '北美市场进入初步诊断', desc: '判断你的产品、资料、合规和责任链是否准备好进入加拿大/北美市场。不是鼓励你进入，而是帮你看清条件。', link: '/zh/services/market-entry-diagnosis' },
                { num: '02', title: '企业购买理由与品牌可信度诊断', desc: '帮你看清楚：客户为什么相信你？为什么选择你？为什么现在联系你？不是品牌包装，而是商业信任建设。', link: '/zh/services/business-reason-credibility-diagnosis' },
                { num: '03', title: '官网与AI可见度诊断', desc: '检查官网是否能被客户看懂、被搜索引擎收录、被AI系统（ChatGPT、Perplexity）理解和引用。', link: '/zh/services/website-ai-visibility-diagnosis' },
                { num: '04', title: '英文资料与服务页优化', desc: '把中文企业介绍重构成北美客户看得懂、信得过的英文商业表达。不是翻译，是商业表达重构。', link: '/zh/services/english-materials-optimization' },
                { num: '05', title: '商业媒体报道与内容合作', desc: '通过企业报道、活动报道和专业内容，帮你在公开渠道建立可被客户、搜索引擎和AI引用的信任资产。', link: '/zh/services/business-media-content' },
                { num: '06', title: '本地服务资源连接', desc: '围绕进入北美市场的落地需求，连接清关、物流、仓储、认证、法律、财税、保险和渠道资源。', link: '/zh/services/local-service-connection' },
                { num: '07', title: '电商产品页与SEO基础优化', desc: '优化产品标题、描述、FAQ和购买理由，提升亚马逊、Shopify、独立站的转化率和搜索可见度。', link: '/zh/services/ecommerce-seo-optimization' },
              ].map((item) => (
                <div key={item.num} className="p-6 border border-[#E5E5E5] hover:border-[#00B894] transition-colors bg-[#F8F9FA]">
                  <p className="text-[#D4AF37] text-[13px] font-medium mb-3">{item.num}</p>
                  <h3 className="text-[17px] md:text-[18px] font-semibold text-[#212121] mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#444] leading-[1.65] mb-4">{item.desc}</p>
                  <Link to={item.link} className="text-[14px] font-medium text-[#00B894] hover:underline inline-flex items-center gap-1">了解详情 <span>→</span></Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 4. Why CCBONLINE ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">为什么选择我们</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              不是万能服务商，而是跨市场判断与表达的专业能力
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-10">
              我们结合技术底层、中英双语商业表达、北美本地商业经验、内容传播和媒体化服务能力，帮助企业把复杂的跨市场问题拆成可以判断、可以表达、可以推进的具体动作。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: '懂技术底层', desc: '了解官网结构、SEO、GEO（生成式搜索引擎优化）和AI可见度的技术原理，能从底层判断问题所在。' },
                { title: '懂中英双语商业表达', desc: '不是翻译，而是从北美买家的认知习惯和决策逻辑出发，重新组织你的商业内容。' },
                { title: '懂北美本地商业环境', desc: '加拿大注册公司，多伦多本地运营。了解这里的合规要求、商业惯例和客户期望。' },
                { title: '懂内容传播和媒体化表达', desc: '能通过商业报道、专业内容和公开渠道，帮你在目标客户面前建立可验证的信任资产。' },
                { title: '懂市场进入和本地资源连接', desc: '了解IOR、认证路径、渠道逻辑和本地服务商网络，能帮你对接合适的落地资源。' },
                { title: '核心判断由人完成', desc: 'AI用于资料整理和效率提升，但商业判断、策略建议和客户沟通由经验丰富的顾问完成。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 5. How We Work ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">工作方法</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              四步推进：判断 → 诊断 → 优化 → 落地
            </h2>
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

        {/* ===== 6. Who We Serve ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">适合谁</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              我们主要服务的客户类型
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: '准备进入加拿大和北美市场的中国企业', desc: '有真实产品和出口经验，需要判断市场适配度、梳理合规路径、优化英文资料和连接本地资源。' },
                { title: '希望连接中国供应链的北美企业', desc: '需要验证中国供应商、理解沟通方式、建立跨境工作关系。' },
                { title: '加拿大本地华人企业和服务商', desc: '需要建立数字可信度、改善官网和商业内容、提升本地可发现性。' },
                { title: '跨境电商和独立站商家', desc: '需要优化产品页、提升搜索可见度、改善客户沟通和购买理由表达。' },
                { title: 'B2B制造企业和供应商', desc: '有成熟产能，需要开发北美客户、参加展会、建立代理或直销渠道。' },
                { title: '展会、活动方、商协会和出海服务机构', desc: '需要商业报道、服务展示、内容策划和本地资源连接。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 7. Who We Do Not Serve ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">可能不太适合</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              诚实地说，以下情况我们可能不是最佳选择
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              这不是傲慢，而是尊重彼此的时间。我们的价值在于帮你在投入之前判断方向是否正确。如果前提条件不具备，我们先帮你把条件准备好。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: '只想要低价代写文案', desc: '我们不做"交稿就走"的文案代工。我们的工作需要你参与资料梳理和商业判断，是一个协作过程。' },
                { title: '希望承诺"马上出单""马上排名"', desc: '我们不承诺具体的销售结果或搜索排名。市场进入和品牌建设需要时间，我们提供的是专业判断和实用建议。' },
                { title: '没有基础资料、也不愿意配合', desc: '我们需要你提供产品信息、公司资料和目标市场描述。如果连这些都不愿意提供，我们无法做出准确判断。' },
                { title: '希望用虚假评论或夸大宣传', desc: '我们不制作虚假内容。所有报道和资料都基于真实信息。短期流量把戏我们不参与。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[15px] font-semibold mb-2 text-[#212121]">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 8. Service Products Quick View ===== */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">服务产品</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              从快速体检到深度陪跑，按阶段推进
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-10">
              每个产品都有明确的价格区间、服务对象和交付内容。选择与你当前阶段最匹配的服务开始。
            </p>
            <div className="space-y-4">
              {[
                { tag: '入门', price: 'CAD 299–499', title: '官网与资料快速体检', desc: '已有官网和英文资料，但不确定客户看完是否愿意联系。先知道客户为什么可能不信你。', link: '/zh/services/website-content-for-service-providers' },
                { tag: '核心', price: 'CAD 800–1,500', title: '品牌可信度诊断', desc: '准备开发客户、跑展会、做LinkedIn。客户开发之前，先把购买理由和可信度理清楚。', link: '/zh/services/business-reason-credibility-diagnosis' },
                { tag: '进阶', price: 'CAD 1,800–3,500', title: '北美买家信任资料包', desc: '把企业内部介绍重构成北美买家看得懂、信得过、方便继续沟通的资料。', link: '/zh/services/english-materials-optimization' },
                { tag: '展会', price: 'CAD 2,500–6,000', title: '展会前北美客户承接包', desc: '未来2-8周参展。避免"现场聊得不错，展后没有下文"。', link: '/zh/services/trade-show-follow-up' },
                { tag: '深度', price: 'CAD 3,500–8,000起', title: '北美市场进入30天启动陪跑', desc: '确定要进入北美市场，但路径、资料、责任链还没理顺。帮你看清第一阶段该做什么。', link: '/zh/services/market-entry-diagnosis' },
              ].map((item, i) => (
                <div key={i} className="p-5 md:p-6 border border-white/10 hover:border-[#00B894]/50 transition-colors bg-white/5">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#D4AF37] text-[13px] font-medium">{item.tag}</span>
                        <span className="text-[13px] text-white/50">{item.price}</span>
                      </div>
                      <h3 className="text-white text-[17px] md:text-[18px] font-semibold mb-2">{item.title}</h3>
                      <p className="text-white/60 text-[14px] leading-[1.65]">{item.desc}</p>
                    </div>
                    <Link to={item.link} className="btn-primary text-[14px] px-5 py-3 min-h-[48px] shrink-0">了解详情</Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 9. FAQ ===== */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">常见问题</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight mb-8">
              你可能还想知道
            </h2>
            <div className="space-y-3">
              {[
                { q: 'CCBONLINE INC. 是做什么的？', a: '我们是一家连接加拿大、北美与中国市场的商业信息与服务平台，帮助企业在跨市场、跨语言、跨信任体系中，建立更清晰的商业表达、数字可信度和本地连接能力。核心服务包括市场进入诊断、品牌可信度诊断、AI可见度诊断、英文资料优化、商业媒体报道和本地服务资源连接。' },
                { q: '你们和普通建站公司有什么区别？', a: '我们不是建站公司、广告公司或出海中介。我们帮你判断官网和商业资料是否准备好面对目标客户，诊断问题并提供优化建议。建站是执行层面的工作，我们做的是判断、策略和内容重构。' },
                { q: '你们能保证效果吗？', a: '不保证。我们提供专业的诊断、分析和建议，但市场进入、客户开发和品牌建设的效果取决于产品、市场、时机和执行力等多种因素。我们能保证的是判断的专业性和建议的实用性。' },
                { q: '服务价格是多少？', a: '从CAD 299的快速体检到CAD 3,500+的深度陪跑，不同服务价格不同。具体价格会在初步沟通后根据你的需求给出。我们建议先从低成本的服务开始，确认方向正确后再投入更多。' },
                { q: '怎么开始合作？', a: '先预约初步沟通（免费），我们了解你的情况，然后推荐合适的服务。你可以从官网与资料快速体检（CAD 299）开始，在继续投钱做推广之前，先知道客户有没有理由相信你。' },
                { q: '什么是GEO（生成式搜索引擎优化）？', a: 'GEO（Generative Engine Optimization，生成式搜索引擎优化）是优化内容让AI系统（如ChatGPT、Perplexity、Google AI Overview）能理解和引用的技术。与传统SEO针对搜索引擎排名不同，GEO关注内容是否清晰、可信、易于被AI提取和引用。' },
              ].map((item, i) => (
                <details key={i} className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">{item.q}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
            <p className="text-[14px] text-[#767676] mt-6">
              更多问题请查看<Link to="/zh/faq" className="text-[#00B894] hover:underline">完整FAQ</Link>或直接<Link to="/zh/contact" className="text-[#00B894] hover:underline">联系我们</Link>。
            </p>
          </div>
        </section>

        {/* ===== 10. Final CTA ===== */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                如果你不确定官网、资料或市场进入路径是否已经准备好
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                可以先提交现有官网或公司介绍，我们先做初步判断。这个初步沟通是免费的。如果你需要更深入的分析，可以从官网与资料快速体检（CAD 299）开始。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">预约初步沟通</Link>
                <Link to="/zh/contact" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>提交官网做判断</Link>
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
