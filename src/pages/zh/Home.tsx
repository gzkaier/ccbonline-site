import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'


export default function ZHHome() {
  useSEO({
    title: 'CCBONLINE INC. | 帮助中国企业进入加拿大与北美市场',
    description: 'CCBONLINE INC. 帮助中国制造企业、品牌企业和成长型出海企业，评估、规划并推进加拿大及北美市场进入。',
    canonical: 'https://www.ccbonline.ca/zh',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = 'CCBONLINE INC. | 帮助中国企业进入加拿大与北美市场'
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
              CCBONLINE INC.
            </p>
            <h1 className="font-serif text-white text-[28px] sm:text-[34px] md:text-[40px] lg:text-[44px] leading-[1.25] tracking-tight max-w-[900px] mb-4 md:mb-6">
              帮助中国企业进入加拿大与北美
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[680px] mb-6 md:mb-8">
              市场进入不是找几个客户那么简单。在花钱参展、投广告、签代理之前，先判断你的产品是否适配、该先进哪个市场、合规和责任链缺什么。我们帮你把这个判断做对。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4">
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">申请初步市场进入评估</Link>
              <Link to="/zh/services" className="btn-outline text-[16px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>查看服务体系</Link>
            </div>
            <p className="text-white/40 text-[13px] md:text-[14px] max-w-[560px]">
              告诉我们你现在处于哪个阶段、想进入哪个市场、当前卡在哪里。
            </p>
          </div>
        </section>

        {/* 北美市场进入不只是找客户 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">判断</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[28px] leading-[1.35] tracking-tight max-w-[700px] mb-6 md:mb-8">
              北美市场进入，不只是找客户
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              对中国企业来说，进入加拿大和北美，不是上线一个网站、发几封邮件、找几个客户那么简单。真正的进入，需要同时把市场定位、合规协同、进口责任、渠道逻辑、本地承接和项目推进这些问题接起来。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {[
                { title: '先判断市场，再决定投入', desc: '评估你的产品是否适配，以及哪个市场应该优先进入。' },
                { title: '先看责任链，再安排发货', desc: '在发货前搞清楚谁负责认证、进口、责任和售后。' },
                { title: '先建立信任，再谈线索转化', desc: '买家评估你的可信度、文件完备性和运营准备程度。' },
                { title: '先有推进节奏，再谈持续放大', desc: '没有跟进、协调和复盘，市场进入会停滞。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 定义区块 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">定义</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[28px] leading-[1.35] tracking-tight max-w-[700px] mb-6 md:mb-8">
              什么是北美市场进入咨询
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-4">
              北美市场进入咨询不是营销、不是销售外包、也不是网站开发。它是一套结构化的工作——评估你的产品是否适配，设计合规和运营路径，验证客户和合作伙伴渠道，并协调本地执行资源，把市场意图转化为真实运营。
            </p>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px]">
              对中国企业而言，进入加拿大和美国需要的不仅仅是需求。它需要一条清晰的责任链，贯穿认证、进口、文件、渠道、仓储、售后、保险和本地责任主体。CCBONLINE INC. 就是协调这条链的专业顾问。
            </p>
          </div>
        </section>

        {/* 三大核心能力 */}
        <section className="section-padding bg-white">
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
        <section className="section-padding bg-[#F8F9FA]">
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
                <div key={f.num} className="flex items-start gap-4 p-4 md:p-5 bg-white border border-[#E5E5E5]">
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
        <section className="section-padding bg-white">
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
                <div key={i} className="flex items-start gap-3 p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
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
        <section className="section-padding bg-[#F8F9FA]">
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

        {/* CTA */}
        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                准备好评估你的北美市场进入条件了吗？
              </h2>
              <p className="text-white/60 text-[14px] md:text-[15px] mb-6">
                告诉我们你现在处于哪个阶段、想进入哪个市场、当前卡在哪里。我们会先看清你的阶段和问题，再建议更合适的下一步。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">申请初步市场进入评估</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
