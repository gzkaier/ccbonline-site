import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHHome() {
  useSEO({
    title: '中加商业在线 CCBONLINE INC.｜加拿大与北美市场进入信息与服务连接平台',
    description: '中加商业在线 CCBONLINE INC. 位于加拿大，帮助企业进入加拿大与北美市场，提供北美客户开发前可信度诊断、市场进入初步判断、双语商业资料、官网可信度优化、展会承接、商业媒体内容与资源连接服务。',
    canonical: 'https://www.ccbonline.ca/zh',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '中加商业在线 CCBONLINE INC.｜加拿大与北美市场进入信息与服务连接平台'
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
              alt="中加商业在线帮助企业进入加拿大与北美市场"
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
              开发北美客户之前，先让客户有理由相信你
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6 md:mb-8">
              很多企业已经有产品、官网和英文资料，但北美客户看完之后，仍然没有继续联系。问题往往不只是曝光不够，而是官网、资料和市场表达没有讲清楚：你是谁、为什么可信、和同行有什么不同、下一步怎么合作。CCBONLINE INC. 帮助企业在进入加拿大与北美市场前，先把购买理由、可信表达、双语资料、本地服务和商业连接路径理清楚。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6">
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">
                发送官网，做一次可信度体检
              </Link>
              <Link to="/zh/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                查看北美客户开发准备服务
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/40">
              <span>市场进入判断</span>
              <span>·</span>
              <span>可信度诊断</span>
              <span>·</span>
              <span>双语资料</span>
              <span>·</span>
              <span>展会承接</span>
            </div>
          </div>
        </section>

        {/* ===== 2. Pain Points: Where You Might Be Stuck ===== */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">
              你现在可能卡在这些地方
            </p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              不是曝光不够，而是资料没准备好
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-10">
              很多企业一上来就投广告、跑展会、发开发信。但如果官网和资料没有讲清楚购买理由，这些动作的效果都会打折扣。以下是我们最常遇到的五种情况。
            </p>
            <div className="space-y-4">
              {[
                {
                  num: '01',
                  title: '北美客户不回复',
                  desc: '你已经在发邮件、加 LinkedIn、找买家，但客户看完官网和资料后没有继续动作。不是客户不存在，而是他们没有找到相信你的理由。',
                  service: '北美客户开发前可信度诊断',
                  link: '/zh/services/customer-channel-validation',
                },
                {
                  num: '02',
                  title: '官网和英文资料接不住客户',
                  desc: '网站有了，资料也有了，但看起来像模板站、翻译稿或内部介绍，北美客户看完后没有形成信任，也没有下一步动作。',
                  service: '官网与资料快速体检',
                  link: '/zh/services/website-content-for-service-providers',
                },
                {
                  num: '03',
                  title: '展会快到了，资料还没准备好',
                  desc: '展会不是只准备展位和样品，更重要的是客户离开展位后还能继续相信你。如果展后没有有效的跟进体系和资料支撑，大部分线索都会流失。',
                  service: '展会前北美客户承接包',
                  link: '/zh/services/trade-show-follow-up',
                },
                {
                  num: '04',
                  title: '想找代理和渠道，但合作价值讲不清',
                  desc: '代理商不只看产品，也看利润、风险、售后、市场支持和合作边界。如果这些都还没理清楚，很难找到真正有能力的合作伙伴。',
                  service: '北美渠道合作资料与沟通路径设计',
                  link: '/zh/services/customer-channel-validation',
                },
                {
                  num: '05',
                  title: '不确定产品能不能进入加拿大/北美',
                  desc: '你需要先判断产品、资料、合规、责任链、渠道和本地承接的基础条件，而不是一上来就参展或投广告。',
                  service: '加拿大与北美市场进入初步诊断',
                  link: '/zh/services/market-entry-diagnosis',
                },
              ].map((item) => (
                <div key={item.num} className="p-5 md:p-6 border border-white/10 hover:border-[#00B894]/50 transition-colors bg-white/5">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-[#D4AF37] text-[13px] font-medium">{item.num}</span>
                        <h3 className="text-white text-[17px] md:text-[18px] font-semibold">{item.title}</h3>
                      </div>
                      <p className="text-white/60 text-[14px] md:text-[15px] leading-[1.65] mb-3">{item.desc}</p>
                      <Link to={item.link} className="text-[14px] font-medium text-[#00B894] hover:underline inline-flex items-center gap-1">
                        {item.service} <span>→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 3. Service Products ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">服务产品</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              从快速体检到30天启动陪跑，按阶段推进
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-10">
              每个产品都有明确的服务对象、交付内容、价值边界和升级路径。你可以从任何一个阶段开始，但我们建议：在继续发邮件、参展、投广告之前，先确认你的资料准备好了。
            </p>

            {/* Product 1 */}
            <div className="mb-8 p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#D4AF37] text-[13px] font-medium">入门</span>
                    <span className="text-[13px] text-[#767676]">CAD 299–499</span>
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-2">官网与资料快速体检</h3>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] max-w-[640px]">
                    适合已经有官网、英文资料或公司介绍，但不确定客户看完是否愿意联系的企业。在继续发邮件、参展、投广告之前，先知道客户为什么可能不信你。
                  </p>
                </div>
                <Link to="/zh/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px] shrink-0">申请快速体检</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-white border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">交付</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">官网首页快速诊断、英文公司介绍初步检查、可信度缺口提示、买家视角问题清单、优先修改建议</p>
                </div>
                <div className="p-3 bg-white border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">边界</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">不承诺客户数量、询盘、搜索排名或成交。可抵扣后续北美客户开发前可信度诊断或北美买家信任资料包。</p>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="mb-8 p-5 md:p-6 border border-[#E5E5E5]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#D4AF37] text-[13px] font-medium">核心</span>
                    <span className="text-[13px] text-[#767676]">CAD 800–1,500</span>
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-2">北美客户开发前可信度诊断</h3>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] max-w-[640px]">
                    适合准备开发北美客户、跑展会、做 LinkedIn、发开发信、找代理的企业。客户开发之前，资料没有准备好，后面的邮件、广告、展会和销售动作都会打折。
                  </p>
                </div>
                <Link to="/zh/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px] shrink-0">申请可信度诊断</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">交付</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">官网与资料诊断、买家视角购买理由分析、可信度缺口清单、英文表达问题、北美客户常见疑虑、优先修改建议、30天客户开发准备建议</p>
                </div>
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">边界</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">不承诺客户回复率、成交率或销售结果。帮助你判断客户是否有理由相信你，但不替代销售团队。</p>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="mb-8 p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#D4AF37] text-[13px] font-medium">进阶</span>
                    <span className="text-[13px] text-[#767676]">CAD 1,800–3,500</span>
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-2">北美买家信任资料包</h3>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] max-w-[640px]">
                    适合已经准备开始开发客户、参加展会、联系渠道、做 LinkedIn 或发送公司资料的企业。把企业内部介绍重构成北美买家看得懂、信得过、方便继续沟通的资料。
                  </p>
                </div>
                <Link to="/zh/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px] shrink-0">申请信任资料包</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-white border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">交付</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">一句话定位、英文公司介绍、One-page Sales Sheet（一页纸销售资料）、产品/服务核心卖点重构、北美客户开发邮件开头、LinkedIn 公司或个人简介优化、官网首页核心文案建议</p>
                </div>
                <div className="p-3 bg-white border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">边界</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">不包含完整网站开发，不承诺成交。交付资料可直接用于客户开发和展会，但需要你自己或团队执行后续跟进。</p>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="mb-8 p-5 md:p-6 border border-[#E5E5E5]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#D4AF37] text-[13px] font-medium">展会</span>
                    <span className="text-[13px] text-[#767676]">CAD 2,500–6,000</span>
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-2">展会前北美客户承接包</h3>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] max-w-[640px]">
                    适合未来 2–8 周内准备参加展会、招商会、行业会议或客户拜访的企业。避免"现场聊得不错，展后没有下文"。
                  </p>
                </div>
                <Link to="/zh/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px] shrink-0">申请展会承接包</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">交付</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">展会前官网可信度检查、英文公司介绍、一页纸资料、展会问答话术、展后邮件模板、客户分层表、展后7天跟进节奏；可选增加中加商业在线企业报道或展会动态内容</p>
                </div>
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">边界</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">不承诺展会成交，不替代销售团队现场跟进。提供的是资料和跟进体系，现场接待仍需你自己完成。</p>
                </div>
              </div>
            </div>

            {/* Product 5 */}
            <div className="mb-8 p-5 md:p-6 border border-[#0B0E14] bg-[#0B0E14]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#D4AF37] text-[13px] font-medium">深度</span>
                    <span className="text-[13px] text-white/60">CAD 3,500–8,000 起</span>
                  </div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold text-white mb-2">北美市场进入30天启动陪跑</h3>
                  <p className="text-[14px] md:text-[15px] text-white/70 leading-[1.65] max-w-[640px]">
                    适合已经确定要进入加拿大或北美市场，但进入路径、资料、责任链、客户开发和本地承接还没有理顺的企业。帮助企业把第一阶段推进顺序理清楚，避免一开始就乱投钱、乱找资源、乱参展。
                  </p>
                </div>
                <Link to="/zh/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px] shrink-0">申请启动陪跑</Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-white/5 border border-white/10">
                  <p className="text-[13px] font-medium text-white mb-1">交付</p>
                  <p className="text-[13px] text-white/60 leading-[1.6]">市场进入初步诊断、产品/服务适配判断、合规与责任链风险提示、官网与资料优化方向、客户开发路径、渠道/代理/服务商沟通准备、30天行动计划、每周一次推进沟通</p>
                </div>
                <div className="p-3 bg-white/5 border border-white/10">
                  <p className="text-[13px] font-medium text-white mb-1">边界</p>
                  <p className="text-[13px] text-white/60 leading-[1.6]">不替代法律、税务、认证、清关、保险等专业意见；不承诺市场进入成功或客户成交。我们帮你理清顺序、识别缺口、推动下一步。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 4. Who We Work With ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">服务对象</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              我们主要服务的三类企业
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              我们的核心服务对象是准备进入加拿大与北美市场的中国制造企业和出口品牌。同时，我们也服务加拿大本地企业连接中国市场，以及在加拿大建立业务的创业者和服务商。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-8">
              {[
                { title: '中国制造企业与出口品牌', desc: '有成熟产能、正在进入加拿大及北美市场的企业——需要判断市场适配度、梳理合规与 IOR（进口责任主体）、诊断官网可信度、准备展会资料和本地协调。' },
                { title: '加拿大企业连接中国市场', desc: '希望接触中国市场、中国供应商或中国客户的加拿大公司、品牌和服务商——需要双语内容、本地市场理解和商业连接支持。' },
                { title: '本地创业者与专业服务商', desc: '在加拿大建立业务的移民创业者、中小企业和专业服务商——需要建立数字可信度、改善官网和商业内容、提升本地可发现性。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3 text-[#212121]">我们服务的企业通常有这些特征</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  '年营收人民币 3000 万到 5 亿元',
                  '有真实产品和出口经验，主要来自浙江、广东、江苏、山东、福建等制造业集中地区',
                  '决策人通常是创始人、总经理或外贸负责人，40–55 岁',
                  '之前出口东南亚、中东等地区，现在考虑北美市场',
                  '英文网站有内容，但询盘转化不理想',
                  '参加过展会，但展后跟进体系不健全',
                  '找过服务商，但感觉每家只讲自己那一段，没人帮看全局',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#00B894] mt-1 shrink-0">—</span>
                    <p className="text-[13px] md:text-[14px] text-[#444] leading-[1.6]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5. How We Work ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">工作流程</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              四步推进：诊断 → 规划 → 协调 → 跟踪
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: '01', title: '诊断', desc: '评估你当前的状态：产品、市场、资料、数字存在和关键缺口。给你一个诚实的评估——什么准备好了，什么需要注意。我们不会因为想成交而建议你做不适合的事。' },
                { step: '02', title: '规划', desc: '绘制实用的前进路径：采取哪些行动、按什么顺序、需要什么资源、什么时间线。没有通用模板——针对你的具体情况。' },
                { step: '03', title: '协调', desc: '我们与你的团队和本地合作伙伴一起执行计划——内容、网站、合规、供应商沟通或活动协调。推动事情发生，而不只是产出报告。' },
                { step: '04', title: '跟踪', desc: '通过定期沟通、任务清单和进度审查保持项目推进——确保工作完成，而不只是计划。项目停在"计划好了"和"做完了"之间是最常见的失败模式。' },
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

        {/* ===== 6. Boundary Note ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <div className="max-w-[800px] p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3">服务边界</h3>
              <p className="text-[14px] text-[#767676] leading-[1.65] mb-3">
                中加商业在线 CCBONLINE INC. 提供商业顾问、协调、内容和市场进入支持。我们不是律师事务所、会计师事务所、认证机构、保险经纪公司、报关行或物流公司。
              </p>
              <p className="text-[14px] text-[#767676] leading-[1.65]">
                当需要正式的专业意见——法律、税务、认证、保险或报关——我们帮助你准备正确的问题、整理材料并对接合格的专业人员。我们协调；他们执行。我们不承诺保证买家、快速拿订单或市场进入成功。我们的价值在于帮你在投入之前判断方向是否正确。
              </p>
            </div>
          </div>
        </section>

        {/* ===== 7. Final CTA ===== */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                不确定自己的官网和资料是否准备好了？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                可以先做一次官网与资料快速体检（CAD 299–499），在继续投钱做推广之前，先知道客户有没有理由相信你。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">
                  发送官网，做一次可信度体检
                </Link>
                <Link to="/zh/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                  查看全部服务
                </Link>
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
