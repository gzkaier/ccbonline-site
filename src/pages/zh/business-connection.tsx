import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZH_BusinessConnection() {
  useSEO({
    title: '中加商业连接与供应链协作服务 | 中加商业在线 CCBONLINE INC.',
    description: 'CCBONLINE 促进加拿大与中国企业之间的商业连接 —— 供应商匹配、供应链协调和跨境商业引荐服务。',
    canonical: 'https://www.ccbonline.ca/zh/business-connection',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '中加商业连接与供应链协作服务 | 中加商业在线 CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">商业连接</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[40px] leading-[1.25] tracking-tight max-w-[860px] mb-4">
              中加商业连接与供应链协作
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              促进加拿大与中国企业之间的商业连接 —— 供应商匹配、供应链协调和跨境商业引荐，附带运营跟进支持。
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              服务内容
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              CCBONLINE 作为商业连接平台，将加拿大及北美企业与中国的供应商、制造商和商业伙伴对接 —— 反之亦然。我们不撮合交易，不从贸易中收取佣金。我们促进引荐、协调初步沟通，并提供运营支持，帮助双方在投入资源之前评估商业关系是否可行。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              双向连接
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              <div className="p-5 md:p-6 border border-[#00A884] bg-white">
                <h3 className="text-[16px] md:text-[17px] font-semibold mb-3 text-[#00A884]">加拿大 / 美国 → 中国</h3>
                <p className="text-[14px] text-[#444] leading-[1.7] mb-3">
                  北美企业寻找可靠的中国供应商、制造商或 OEM 合作伙伴。我们帮助您识别合格候选方、验证能力，并协调初步尽职调查。
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">供应商识别和候选名单筛选</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">工厂能力验证协调</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">初步沟通和会面协调</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">样品和原型物流协调</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 border border-[#C9A44C] bg-white">
                <h3 className="text-[16px] md:text-[17px] font-semibold mb-3 text-[#C9A44C]">中国 → 加拿大 / 美国</h3>
                <p className="text-[14px] text-[#444] leading-[1.7] mb-3">
                  中国制造商和品牌寻找分销合作伙伴、本地代理或加拿大及北美的直接市场准入。我们帮助您了解市场要求并连接合适的本地合作方。
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#C9A44C]">市场进入准备度筛查</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#C9A44C]">潜在分销商或渠道合作伙伴引荐</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#C9A44C]">展会和行业活动协调</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#C9A44C]">初始市场存在的本地运营支持</li>
                </ul>
              </div>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              供应链协调
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
              除了引荐之外，我们还帮助协调跨境供应链关系的运营要素：
            </p>
            <div className="space-y-3 mb-10">
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h4 className="text-[15px] font-medium mb-1">3PL 和仓储引荐</h4>
                <p className="text-[14px] text-[#555] leading-[1.6]">对接加拿大和美国的第三方物流供应商和仓储选项，用于库存存储和配送执行。</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h4 className="text-[15px] font-medium mb-1">合规与单证指导</h4>
                <p className="text-[14px] text-[#555] leading-[1.6]">概述跨境货运的进口单证、标签要求和认证需求。具体报关事务我们与持牌报关行协调。</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h4 className="text-[15px] font-medium mb-1">质量与检验协调</h4>
                <p className="text-[14px] text-[#555] leading-[1.6]">支持安排装运前检验、工厂审核和货物离华前的质量验证流程。</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h4 className="text-[15px] font-medium mb-1">展会与商务考察支持</h4>
                <p className="text-[14px] text-[#555] leading-[1.6]">协调展会参与、商务考察规划和代表团的实地支持，无论方向是中国还是北美。</p>
              </div>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              CCBONLINE 不执行的服务
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-3">
                我们不撮合交易、不从交易中收取佣金，也不保证特定商业结果。我们不是贸易公司、货运代理或持牌报关行。我们的角色是促进连接、提供运营协调支持，并帮助双方做出知情决策。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                对于清关事务，我们与持牌报关行协调。对于货运和运输，我们与成熟的物流供应商合作。对于法律事务，我们引荐相关司法管辖区的合格法律专业人士。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              工作流程
            </h2>
            <div className="space-y-4 mb-10">
              <div className="flex gap-4">
                <span className="text-[#C9A44C] text-[14px] font-medium shrink-0 w-6">01</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">需求沟通</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">了解您的产品、数量、时间线、质量标准和商业合作方期望。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#C9A44C] text-[14px] font-medium shrink-0 w-6">02</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">匹配与引荐</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">我们从网络中识别并引荐合格候选方，附背景信息和能力说明。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#C9A44C] text-[14px] font-medium shrink-0 w-6">03</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">协调与跟进</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">我们支持初次会面、样品交换和尽职调查协调。双方独立评估匹配度。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#C9A44C] text-[14px] font-medium shrink-0 w-6">04</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">运营落地支持</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">若双方决定推进，我们帮助协调运营要素 —— 物流、合规、仓储 —— 使合作关系在实践中运转。</p>
                </div>
              </div>
            </div>

            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px] inline-block">讨论商业连接</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">常见问题</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              常见问题解答
            </h2>
            <div className="space-y-3 mb-10">
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">你们从交易中收取佣金吗？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">不收取。我们对协调和顾问服务收费。我们不从贸易额、供应商付款或交易价值中抽取佣金。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">如何筛选供应商或合作伙伴？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">我们基于产品类别、认证、生产能力和出口经验进行初始能力筛查。根据需要协调工厂审核和第三方验证。最终尽职调查责任由委托方承担。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">覆盖哪些行业？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">我们聚焦工业制造产品、建材、工业设备、消费品和科技硬件。由于法规复杂性，我们不协调食品、药品或危险品的连接。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">能否帮助持续供应链管理？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">我们通过顾问月费支持持续协调 —— 定期检查、问题升级、运营调整。日常供应链管理应由您的内部团队或专门的 3PL 合作伙伴处理。</p>
                </div>
              </details>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              相关服务
            </h2>
            <ul className="space-y-2">
              <li><Link to="/zh/market-entry" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">加拿大及北美市场进入服务</Link></li>
              <li><Link to="/zh/services/3pl-warehousing-advisory" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">3PL 与仓储顾问</Link></li>
              <li><Link to="/zh/services/compliance-responsibility-chain" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">合规与责任链条筛查</Link></li>
              <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">联系 CCBONLINE</Link></li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                正在寻找加拿大或中国的商业合作伙伴？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                告诉我们您的产品、需求和合作期望。我们将评估促进连接是否可行。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">讨论商业连接</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
