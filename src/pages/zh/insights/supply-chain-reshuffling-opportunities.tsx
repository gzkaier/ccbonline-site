import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: '中美加三角：供应链重构中的机会｜中加商业观察｜CCBONLINE',
    description: '中国产品、美国市场和加拿大本地服务之间，正在形成新的协作空间。对一些企业来说，加拿大不仅是终端市场，也可能是北美业务验证、本地合作和供应链转接的重要节点。',
    canonical: 'https://www.ccbonline.ca/zh/insights/supply-chain-reshuffling-opportunities',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '中美加三角：供应链重构中的机会｜中加商业观察｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">中加商业观察</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              中美加三角：供应链重构中的机会
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>阅读时间：约 7 分钟</span>
              <span>·</span>
              <span>中加商业｜供应链｜北美市场｜中国供应链｜商业连接</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                中国产品、美国市场和加拿大本地服务之间，正在形成新的协作空间。对一些企业来说，加拿大不仅是终端市场，也可能是北美业务验证、本地合作和供应链转接的重要节点。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[700px]">
            <div className="prose-content">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">谈北美市场，很多企业第一眼看到的是美国。市场大，客户多，渠道成熟，采购体量也大。加拿大经常被放在第二顺位，甚至被认为只是一个较小的补充市场。但如果从供应链重构的角度看，加拿大的角色可能没有那么简单。</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">传统路径正在变复杂</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">过去很多中国企业做北美市场，是一个相对直接的路径：中国生产，美国销售。企业重点考虑的是价格、交期、平台、客户开发和物流效率。现在，这条路径变得更复杂。贸易政策、关税不确定性、供应链安全、本地化要求、客户审查、合规责任、地缘政治和渠道风险，都在影响企业进入北美的方式。</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">中、美、加之间的新协作空间</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">中国仍然有强大的制造能力和供应链效率。美国仍然是最重要的消费和企业采购市场之一。加拿大则可能在某些场景里承担试点、服务、验证、转接和本地信任角色。</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">加拿大可以成为北美市场的第一步</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">对一些中国企业来说，加拿大可以成为北美市场的第一步。不是因为加拿大市场最大，而是因为它可以帮助企业先验证几件事：英文资料是否能被本地客户理解；产品是否适合北美使用习惯；认证、标签、保险和售后问题是否能梳理；本地服务商是否能配合；渠道反馈是否真实；客户是否愿意进入下一步。</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">加拿大本地服务体系可以参与的环节</h2>
              <ul className="space-y-3 mb-8">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">帮助中国企业理解北美客户</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">帮助本地采购方筛选中国供应链</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">帮助双方整理英文资料和商业表达</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">协助梳理进口、仓储、认证、售后和责任安排</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">通过商业报道、活动和内容建立公开信任资产</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">把单次交易变成更可持续的合作路径</li>
              </ul>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">但加拿大不是所有企业的"跳板"</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">如果企业只是想绕开规则，或者把加拿大当成形式上的中转点，这种思路风险很高。真正有价值的中加商业连接，应该建立在真实业务、真实服务、真实责任和真实客户需求上。未来的机会，不是简单搬运资源，而是帮助企业在跨市场、跨语言、跨信任体系里，把商业身份、供应链能力、本地承接和客户信任重新组织起来。</p>
            </div>

            <div className="mt-10 p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3 text-[#212121]">相关服务</h3>
              <div className="space-y-2">
                                <Link to="/zh/services/market-entry-diagnosis" className="block text-[14px] text-[#00B894] hover:underline">北美市场进入初步诊断 →</Link>
                <Link to="/zh/services/local-service-connection" className="block text-[14px] text-[#00B894] hover:underline">本地服务资源连接 →</Link>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link to="/zh/insights/canada-market-size-worth-it" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors"><span className="text-[12px] text-[#767676] block mb-1">同栏目</span><span className="text-[14px] font-medium text-[#212121]">加拿大市场规模：到底值不值得进入</span></Link>
              <Link to="/zh/insights/trade-show-selection-strategy" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors"><span className="text-[12px] text-[#767676] block mb-1">下一篇</span><span className="text-[14px] font-medium text-[#212121]">展会选择：不是每个展都值得去</span></Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
              这篇文章对你有帮助？
            </h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
              如果你正在考虑进入加拿大或北美市场，可以先提交现有官网或公司介绍，做一次初步判断。
            </p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">预约初步沟通</Link>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
