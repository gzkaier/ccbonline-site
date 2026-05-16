import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHHome() {
  useSEO({
    title: 'CCBONLINE INC. | 中加商业在线——加拿大与北美市场进入服务',
    description: 'CCBONLINE INC. 中加商业在线，帮助制造企业、品牌方、供应商和成长型公司评估、规划并执行加拿大及北美市场的实际进入。',
    canonical: 'https://www.ccbonline.ca/zh',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = 'CCBONLINE INC. | 中加商业在线——加拿大与北美市场进入服务'
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
              alt="CCBONLINE 帮助商业机构进入加拿大与北美市场"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/85 to-[#07111F]/50" />
          <div className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5 font-medium">
              中加商业在线 CCBONLINE INC.
            </p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.25] tracking-tight max-w-[900px] mb-4 md:mb-6">
              不只是服务商——更是您在加拿大的本地化增长伙伴
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[680px] mb-6 md:mb-8">
              我们专注于帮助商业机构真正进入加拿大市场，而不是仅仅完成交易。CCBONLINE INC. 中加商业在线是注册于加拿大的公司，总部位于多伦多，专注于北美市场的商业进入服务。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4">
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">预约免费沟通</Link>
              <Link to="/zh/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>了解我们的服务</Link>
            </div>
            <p className="text-white/40 text-[13px] md:text-[14px] max-w-[560px]">
              告诉我们您目前的阶段、目标市场以及阻碍进展的问题，我们将推荐最合适的第一步。
            </p>
          </div>
        </section>

        {/* Who We Serve */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">服务对象</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-6 md:mb-8">
              我们支持的商业机构
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              我们并非服务于所有人。我们专注于拥有真实出口就绪产品、真正市场意向并具备跟进资源的商业机构。如果您在寻找低成本捷径，我们可能不是合适的选择。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: '制造商与工业供应商', desc: '拥有成熟产能、希望通过直接分销或B2B渠道进入加拿大及北美市场的企业。' },
                { title: '硬件与设备公司', desc: '工业设备、机械、工具及零部件制造商，需要合规认证和本地渠道开发。' },
                { title: '消费产品品牌', desc: '拥有差异化产品、希望建立市场存在感、寻找零售合作伙伴或构建直销渠道的品牌。' },
                { title: '服务出口商', desc: '专业服务型企业、科技公司及咨询公司，从国际市场扩展至加拿大及北美。' },
                { title: '出口商与贸易公司', desc: '希望超越交易型销售、建立可持续本地运营的成熟贸易公司与出口商。' },
                { title: '成长型企业', desc: '在国内已获成功、寻求结构化市场进入支持而非试错型方法的成长型公司。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00A884] transition-colors">
                  <div className="text-[#00A884] text-[20px] font-medium mb-3">{'0' + (i + 1)}</div>
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Services - 4 pillars */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">服务</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-6 md:mb-8">
              四大核心服务模块
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-10">
              我们聚焦四大核心能力，因为这是进入新市场时最重要的环节。每个模块都旨在帮助您从不确定性走向行动。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { num: '01', title: '市场进入判断', desc: '在您投资之前，我们评估您的准备程度。进行产品市场适配分析、竞争格局审查，并提供明确的继续/暂缓建议及具体下一步。' },
                { num: '02', title: '本地落地与合作伙伴协调', desc: '我们不只是建议——我们协调。本地合作伙伴匹配、关系管理、每周进度追踪和实际支持，将计划转化为真实订单。' },
                { num: '03', title: '合规与责任链', desc: '认证要求、进口文件、海关合规、税务注册、产品责任、保险和售后义务——在发货前全部梳理清楚。' },
                { num: '04', title: '商业内容与媒体传播', desc: '您的产品故事，本地化呈现。品牌定位、营销内容适配、媒体外联和与北美买家产生共鸣的沟通策略。' },
              ].map((item, i) => (
                <div key={i} className="p-6 border border-white/10 hover:border-[#00A884]/50 transition-colors">
                  <p className="text-[#C9A44C] text-[13px] font-medium mb-3">{item.num}</p>
                  <h3 className="text-white text-[17px] md:text-[18px] font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/60 text-[14px] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/zh/services" className="btn-primary text-[15px] px-8 py-3.5 min-h-[52px] inline-block">查看全部服务</Link>
            </div>
          </div>
        </section>

        {/* Market entry is not just about getting leads */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">判断</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-6 md:mb-8">
              市场进入不只是找客户
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              进入加拿大和北美市场不仅仅是找到买家、上线网站或发更多邮件。它需要在市场定位、合规协调、进口责任、渠道逻辑、本地执行和项目跟进之间建立一条可行的路径。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
              {[
                { title: '扩张前先判断', desc: '评估您的产品是否适配，以及哪个市场应优先进入。' },
                { title: '发货前先理清责任链', desc: '在发货前明确谁负责认证、进口、责任和售后。' },
                { title: '转化前先建立本地信任', desc: '买家会评估您的可信度、文件完备性和运营准备度。' },
                { title: '扩大前先建立执行节奏', desc: '没有追踪、协调和审查，市场进入会停滞不前。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Definition Block */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">定义</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-6 md:mb-8">
              什么是北美市场进入服务？
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-4">
              北美市场进入服务不是营销、销售外包或网站开发。它是评估产品是否适配、设计合规与运营路径、验证客户与合作伙伴渠道、协调本地执行资源，将市场意向转化为实际运营的结构化工作。
            </p>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px]">
              进入加拿大和美国不仅需要需求。它需要一条清晰的责任链，涵盖认证、进口、文件、渠道、仓储、售后、保险和本地问责。CCBONLINE INC. 协调这条链。
            </p>
          </div>
        </section>

        {/* Trust */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">信任</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8 md:mb-12">
              为什么选择 CCBONLINE INC. 中加商业在线
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { num: '01', title: '务实评估', desc: '我们告诉您实际需要做什么，而不是您想听的。' },
                { num: '02', title: '路径设计', desc: '从初步评估到本地执行的清晰、分步计划。' },
                { num: '03', title: '责任清晰', desc: '谁负责什么、何时完成、成本多少，无模糊地带。' },
                { num: '04', title: '实际执行', desc: '每周追踪、合作伙伴协调和实际问题解决。' },
                { num: '05', title: '发货前合规', desc: '认证、文件和监管要求在发货前全部梳理。' },
                { num: '06', title: '内容驱动转化', desc: '在当地产生共鸣的商业内容和沟通策略。' },
              ].map((t, i) => (
                <div key={i} className="p-5 border border-[#E5E5E5] hover:border-[#00A884] transition-colors">
                  <p className="text-[#C9A44C] text-[13px] font-medium mb-2">{t.num}</p>
                  <h3 className="text-[16px] font-semibold mb-2">{t.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 本地服务商网站与内容建设 — 轻量入口 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <p className="text-label mb-3">同步提供</p>
                <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-3">
                  本地服务商网站与内容建设
                </h2>
                <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[600px] mb-4">
                  为财税、保险、物流、认证、清关、教育等本地专业服务商，整理一个可被客户理解和信任的线上入口。不只是做一个页面，而是把服务讲清楚、把信任建起来。
                </p>
                <Link to="/zh/services/website-content-for-service-providers" className="text-[#00A884] hover:text-[#008F6E] text-[14px] font-medium inline-flex items-center gap-1 group">
                  了解详情
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
                </Link>
              </div>
              <div className="lg:col-span-4">
                <img
                  src="/images/services-website-content-for-service-providers.jpg"
                  alt="本地专业服务商网站与内容建设服务"
                  className="w-full h-auto max-h-[220px] object-cover rounded-sm"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site text-center">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">开始</p>
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
              准备探索加拿大与北美市场？
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[600px] mx-auto mb-8">
              告诉我们您目前的阶段、产品类型以及阻碍进展的问题。我们将推荐最合适的第一步。
            </p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-8 py-3.5 min-h-[52px] inline-block">预约免费沟通</Link>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
