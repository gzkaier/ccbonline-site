import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ZHHome() {
  useEffect(() => {
    document.title = 'CCBONLINE INC. | 中国企业进入加拿大与北美市场的本地化进入顾问'
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
              alt="CCBONLINE 帮助中国企业通过市场进入诊断和本地执行支持进入加拿大和北美市场。"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/80 to-[#0a0a1a]/40" />
          <div className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
            <p className="text-white/50 text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5">
              CCBONLINE INC. · 智桥国际
            </p>
            <h1 className="font-serif text-white text-[34px] sm:text-[38px] md:text-[44px] leading-[1.25] tracking-tight max-w-[800px] mb-4 md:mb-6" style={{ wordBreak: 'keep-all' }}>
              <span className="block">中国企业进入加拿大与北美</span>
              <span className="block">本地化进入顾问</span>
            </h1>
            <p className="text-white/65 text-[16px] md:text-[17px] leading-[1.65] max-w-[640px] mb-6 md:mb-8">
              先判断路径，再设计合规、渠道、本地承接和落地推进方案。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">预约初步沟通</Link>
              <Link to="/zh/services" className="btn-outline text-[16px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>查看服务路径</Link>
            </div>
          </div>
        </section>

        {/* 一句话判断 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[28px] leading-[1.35] tracking-tight max-w-[700px] mb-4 md:mb-6">
              我们做什么
            </h2>
            <p className="text-[16px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] mb-4">
              CCBONLINE 不是营销机构，不是建站公司，也不是物流公司。我们是市场进入顾问——帮企业在进入加拿大和北美之前，把路径判断清楚：产品是否适配、合规怎么过、渠道怎么建、本地谁承接、出了问题谁负责。
            </p>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px]">
              我们做的不是信息汇总，而是判断。不是方案堆砌，而是可落地的执行路径。
            </p>
          </div>
        </section>

        {/* 三大核心能力 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">核心能力</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[28px] leading-[1.35] tracking-tight mb-8 md:mb-10">
              三个核心能力
            </h2>
            <div className="grid grid-cols-1 gap-4 md:gap-5">
              <div className="card-border bg-white flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F8F9FA] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#767676" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <div>
                  <h3 className="text-[16px] md:text-[17px] font-semibold mb-1.5">市场进入诊断</h3>
                  <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">评估产品是否适合北美，识别认证差距、竞争格局和优先进入点。不让企业在没准备好的市场上浪费时间和资金。</p>
                </div>
              </div>
              <div className="card-border bg-white flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F8F9FA] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#767676" strokeWidth="1.5"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/></svg>
                </div>
                <div>
                  <h3 className="text-[16px] md:text-[17px] font-semibold mb-1.5">合规路径设计</h3>
                  <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">绘制认证、清关、税务和监管要求的完整路径。协同专业机构推进，但不替代律师和会计师。</p>
                </div>
              </div>
              <div className="card-border bg-white flex items-start gap-4">
                <div className="w-10 h-10 bg-[#F8F9FA] flex items-center justify-center shrink-0">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#767676" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
                <div>
                  <h3 className="text-[16px] md:text-[17px] font-semibold mb-1.5">本地执行支持</h3>
                  <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">每周进度追踪、合作伙伴协调、材料优化和阶段复盘。把计划变成客户对话和实际订单。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 进入框架 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">方法论</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[28px] leading-[1.35] tracking-tight mb-8 md:mb-10">
              市场进入五步法
            </h2>
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {[
                { num: '01', title: '诊断', desc: '产品适配、认证差距、竞争扫描' },
                { num: '02', title: '设计', desc: '合规路径、渠道策略、合作伙伴图' },
                { num: '03', title: '验证', desc: '客户对话、伙伴会面、试点订单' },
                { num: '04', title: '协调', desc: '对接报关、认证、物流和本地代表' },
                { num: '05', title: '执行', desc: '90天路线图，每周追踪和复盘' },
              ].map((f) => (
                <div key={f.num} className="flex items-start gap-4 p-4 md:p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <span className="text-[#C00000] text-[14px] font-bold mt-0.5 min-w-[28px]">{f.num}</span>
                  <div>
                    <h3 className="text-[16px] md:text-[17px] font-semibold mb-1">{f.title}</h3>
                    <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 适合哪些企业 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">客户</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[28px] leading-[1.35] tracking-tight mb-8 md:mb-10">
              适合找我们的企业
            </h2>
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {[
                '有出口就绪产品，但不确定是否适合北美',
                '准备进入加拿大或美国，但不知从何开始',
                '需要合规路径设计（CSA、UL、清关、税务）',
                '寻找本地经销商或合作伙伴',
                '需要本地物流节点和仓储支持',
                '希望获得结构化执行路径，而非通用报告',
              ].map((text, i) => (
                <div key={i} className="flex items-start gap-3 p-4 bg-white border border-[#E5E5E5]">
                  <span className="text-[#C00000] text-[14px] mt-0.5 shrink-0">✓</span>
                  <span className="text-[15px] md:text-[16px] text-[#444] leading-[1.55]">{text}</span>
                </div>
              ))}
            </div>
            <p className="text-[13px] md:text-[14px] text-[#999] mt-4">
              我们不替代律师、会计师或物流提供商。我们协同各方，构建实际可行的市场进入路径。
            </p>
          </div>
        </section>

        {/* 常见误区 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">误区</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[28px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              常见进入误区
            </h2>
            <div className="grid grid-cols-1 gap-4 md:gap-5 max-w-[800px]">
              {[
                { title: '以为找几个客户就是进入市场', desc: '找到客户不等于建立了可持续的运营体系。没有合规、售后和本地承接，订单无法持续。' },
                { title: '把营销当成进入', desc: '投广告、做SEO不等于市场进入。没有判断就没有方向，流量来了也接不住。' },
                { title: '先发货再想合规', desc: '产品到港才发现认证不齐、标签不合规，导致扣关、罚款、退货，代价远高于提前准备。' },
                { title: '签独家代理前不做尽调', desc: '独家协议一旦签署就很难调整。合作伙伴的能力和动机必须在签约前充分验证。' },
              ].map((item, i) => (
                <div key={i} className="card-border bg-white">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 不替代什么 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">边界</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[28px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              我们不替代谁
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[800px]">
              {[
                { title: '不替代律师和会计师', desc: '我们协调专业机构，但不提供法律或税务建议。需要持证专业人士处理的事项，我们会引荐合适的合作伙伴。' },
                { title: '不替代经销商和物流商', desc: '我们帮助识别和评估合作伙伴，但不直接卖货或运货。本地运营最终还是由您和合作伙伴共同完成。' },
                { title: '不替代企业内部决策', desc: '我们提供判断和建议，但市场进入的最终决策、投入和风险由企业自己承担。' },
                { title: '不替代认证机构', desc: 'CSA、UL等认证必须由官方认证机构完成。我们帮助梳理要求和准备材料，但不发放证书。' },
              ].map((item, i) => (
                <div key={i} className="card-border bg-white">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 常见问题 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">常见问题</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[28px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              企业常问的问题
            </h2>
            <div className="max-w-[800px] space-y-3">
              {[
                { q: 'CCBONLINE 到底是做什么的？', a: '我们帮助中国企业进入加拿大和北美。不是营销机构，不是建站公司，不是物流公司。我们做的是市场进入诊断、合规路径设计、渠道验证和本地执行支持。' },
                { q: '你们能保证销售吗？', a: '不能。我们建立市场进入的条件，实际销售取决于产品、定价和执行。我们让路径清晰，但企业必须自己走下去。' },
                { q: '进入北美需要多长时间？', a: '初步诊断2–4周。完整路线图通常30天内交付。执行支持按需持续。' },
                { q: '需要先设立加拿大公司吗？', a: '不一定。很多企业在初期通过经销商或直接出口模式进入。我们根据产品和阶段建议合适的方式。' },
                { q: '服务费用是多少？', a: '我们提供三层服务：诊断评估、完整路线图、持续顾问支持。根据产品复杂度和范围定制报价。联系我们了解详情。' },
              ].map((faq, i) => (
                <details key={i} className="group border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">{faq.q}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#767676]"><path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                准备好评估您的北美就绪度了吗？
              </h2>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">预约初步沟通</Link>
                <Link to="/zh/canada-market-entry" className="btn-outline text-[16px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>了解加拿大进入</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
