import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHServices() {
  useSEO({
    title: '中加商业在线服务｜北美客户开发准备、可信度诊断、市场进入支持',
    description: 'CCBONLINE INC. 提供官网与资料快速体检、北美客户开发前可信度诊断、北美买家信任资料包、展会前客户承接包、北美市场进入30天启动陪跑五项服务，帮助企业在进入加拿大与北美市场前做好准备。',
    canonical: 'https://www.ccbonline.ca/zh/services',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '中加商业在线服务｜北美客户开发准备、可信度诊断、市场进入支持'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">服务</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              不是做什么都能做，而是帮你判断现在该做什么
            </h1>
            <p className="text-white/60 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6">
              五项按阶段设计的服务产品，从快速体检到30天启动陪跑。每项服务都有明确的服务对象、交付内容、价值边界和升级路径。我们建议：在继续发邮件、参展、投广告之前，先确认你的资料准备好了。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">
                发送官网，做一次可信度体检
              </Link>
            </div>
          </div>
        </section>

        {/* Pain Point Entry */}
        <section className="section-padding bg-white border-b border-[#E5E5E5]">
          <div className="container-site">
            <p className="text-label mb-3">你可能卡在这些地方</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              五种常见情况，对应不同的服务入口
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                {
                  title: '北美客户不回复',
                  desc: '你已经在发邮件、加 LinkedIn、找买家，但客户看完官网和资料后没有继续动作。',
                  service: '北美客户开发前可信度诊断',
                  link: '/zh/services/customer-channel-validation',
                },
                {
                  title: '官网和英文资料接不住客户',
                  desc: '网站有了，资料也有了，但看起来像模板站、翻译稿或内部介绍。',
                  service: '官网与资料快速体检',
                  link: '/zh/services/website-content-for-service-providers',
                },
                {
                  title: '展会快到了，资料还没准备好',
                  desc: '展会不只是展位和样品，更重要的是客户离开展位后还能继续相信你。',
                  service: '展会前北美客户承接包',
                  link: '/zh/services/trade-show-follow-up',
                },
                {
                  title: '想找代理和渠道，但合作价值讲不清',
                  desc: '代理商不只看产品，也看利润、风险、售后、市场支持和合作边界。',
                  service: '渠道合作资料与沟通路径',
                  link: '/zh/services/customer-channel-validation',
                },
                {
                  title: '不确定产品能不能进入加拿大/北美',
                  desc: '需要先判断产品、资料、合规、责任链、渠道和本地承接的基础条件。',
                  service: '加拿大与北美市场进入初步诊断',
                  link: '/zh/services/market-entry-diagnosis',
                },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                  <h3 className="text-[16px] font-semibold mb-2 group-hover:text-[#00B894] transition-colors">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.6] mb-3">{item.desc}</p>
                  <Link to={item.link} className="text-[14px] font-medium text-[#00B894] hover:underline inline-flex items-center gap-1">
                    {item.service} <span>→</span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Products */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">服务产品</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              五项按阶段设计的服务
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-10">
              每个产品都有明确的价格区间、服务对象、交付内容、价值来源和不承诺事项。选择与你当前阶段最匹配的服务开始。
            </p>

            {/* Product 1 */}
            <div className="mb-6 p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-[#D4AF37] text-[13px] font-medium">入门</span>
                <span className="text-[13px] text-[#767676]">CAD 299–499</span>
              </div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-2">官网与资料快速体检</h3>
              <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] mb-4 max-w-[680px]">
                适合已经有官网、英文资料或公司介绍，但不确定客户看完是否愿意联系的企业。在继续发邮件、参展、投广告之前，先知道客户为什么可能不信你。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">交付</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">官网首页快速诊断、英文公司介绍初步检查、可信度缺口提示、买家视角问题清单、优先修改建议</p>
                </div>
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">边界</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">不承诺客户数量、询盘、搜索排名或成交。可抵扣后续北美客户开发前可信度诊断或北美买家信任资料包。</p>
                </div>
              </div>
              <Link to="/zh/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px]">申请快速体检</Link>
            </div>

            {/* Product 2 */}
            <div className="mb-6 p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-[#D4AF37] text-[13px] font-medium">核心</span>
                <span className="text-[13px] text-[#767676]">CAD 800–1,500</span>
              </div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-2">北美客户开发前可信度诊断</h3>
              <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] mb-4 max-w-[680px]">
                适合准备开发北美客户、跑展会、做 LinkedIn、发开发信、找代理的企业。客户开发之前，资料没有准备好，后面的邮件、广告、展会和销售动作都会打折。
              </p>
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
              <Link to="/zh/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px]">申请可信度诊断</Link>
            </div>

            {/* Product 3 */}
            <div className="mb-6 p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-[#D4AF37] text-[13px] font-medium">进阶</span>
                <span className="text-[13px] text-[#767676]">CAD 1,800–3,500</span>
              </div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-2">北美买家信任资料包</h3>
              <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] mb-4 max-w-[680px]">
                适合已经准备开始开发客户、参加展会、联系渠道、做 LinkedIn 或发送公司资料的企业。把企业内部介绍重构成北美买家看得懂、信得过、方便继续沟通的资料。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">交付</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">一句话定位、英文公司介绍、一页纸销售资料（One-page Sales Sheet）、产品/服务核心卖点重构、北美客户开发邮件开头、LinkedIn 简介优化、官网首页核心文案建议</p>
                </div>
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">边界</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">不包含完整网站开发，不承诺成交。交付资料可直接用于客户开发和展会，但需要你自己或团队执行后续跟进。</p>
                </div>
              </div>
              <Link to="/zh/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px]">申请信任资料包</Link>
            </div>

            {/* Product 4 */}
            <div className="mb-6 p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-[#D4AF37] text-[13px] font-medium">展会</span>
                <span className="text-[13px] text-[#767676]">CAD 2,500–6,000</span>
              </div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-2">展会前北美客户承接包</h3>
              <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] mb-4 max-w-[680px]">
                适合未来 2–8 周内准备参加展会、招商会、行业会议或客户拜访的企业。避免"现场聊得不错，展后没有下文"。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">交付</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">展会前官网可信度检查、英文公司介绍、一页纸资料、展会问答话术、展后邮件模板、客户分层表、展后7天跟进节奏；可选企业报道或展会动态内容</p>
                </div>
                <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">边界</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">不承诺展会成交，不替代销售团队现场跟进。提供的是资料和跟进体系，现场接待仍需你自己完成。</p>
                </div>
              </div>
              <Link to="/zh/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px]">申请展会承接包</Link>
            </div>

            {/* Product 5 */}
            <div className="mb-6 p-5 md:p-6 bg-[#0B0E14] border border-[#0B0E14]">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-[#D4AF37] text-[13px] font-medium">深度</span>
                <span className="text-[13px] text-white/60">CAD 3,500–8,000 起</span>
              </div>
              <h3 className="text-[18px] md:text-[20px] font-semibold text-white mb-2">北美市场进入30天启动陪跑</h3>
              <p className="text-[14px] md:text-[15px] text-white/70 leading-[1.65] mb-4 max-w-[680px]">
                适合已经确定要进入加拿大或北美市场，但进入路径、资料、责任链、客户开发和本地承接还没有理顺的企业。帮助企业把第一阶段推进顺序理清楚，避免一开始就乱投钱、乱找资源、乱参展。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-white/5 border border-white/10">
                  <p className="text-[13px] font-medium text-white mb-1">交付</p>
                  <p className="text-[13px] text-white/60 leading-[1.6]">市场进入初步诊断、产品/服务适配判断、合规与责任链风险提示、官网与资料优化方向、客户开发路径、渠道/代理/服务商沟通准备、30天行动计划、每周一次推进沟通</p>
                </div>
                <div className="p-3 bg-white/5 border border-white/10">
                  <p className="text-[13px] font-medium text-white mb-1">边界</p>
                  <p className="text-[13px] text-white/60 leading-[1.6]">不替代法律、税务、认证、清关、保险等专业意见；不承诺市场进入成功或客户成交。帮你理清顺序、识别缺口、推动下一步。</p>
                </div>
              </div>
              <Link to="/zh/contact" className="btn-primary text-[14px] px-5 py-3 min-h-[48px]">申请启动陪跑</Link>
            </div>
          </div>
        </section>

        {/* Why staged approach */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">服务设计逻辑</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              为什么按阶梯设计，而不是打包成"一站式方案"
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
              很多企业接触到的"市场进入服务"是一个大而全的套餐，包含调研、认证、渠道、推广、展会等所有环节，价格动辄几万到几十万。问题是：在你还没判断清楚产品是否适合这个市场、资料是否接得住客户之前，把这些全部打包在一起，很容易花错钱。
            </p>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
              我们的设计逻辑是：先判断，再准备，再执行。快速体检帮你发现最明显的问题；可信度诊断帮你判断客户是否有理由相信你；信任资料包把诊断结果变成可以直接使用的材料；展会承接包针对有明确时间节点的场景；30天陪跑则帮你把整体推进顺序理清楚。
            </p>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
              你可以从任何一步开始，也可以只走一步。但我们建议：在投入更多预算做推广、参展或找代理之前，至少做一次快速体检或可信度诊断。这个判断的成本很低，但省下的钱和避免的弯路可能很大。
            </p>
          </div>
        </section>

        {/* Service Boundary */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <div className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
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

        {/* CTA */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                不确定从哪个服务开始？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                可以先做一次官网与资料快速体检（CAD 299–499），或者联系我们描述你当前的情况，我们会推荐最合适的第一步。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">
                  发送官网，做一次可信度体检
                </Link>
                <Link to="/zh/contact" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                  联系我们，描述你的情况
                </Link>
              </div>
              <p className="text-white/40 text-[13px] mt-6">info@ccbonline.ca · +1 647 568 1128</p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
