import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_HuoDaoGangMeiYouIOR() {
  useSEO({
    title: '货物到港没有 IOR 会怎样？进口责任主体缺失的后果 | 中加商业在线',
    description: '没有指定进口责任主体（IOR）就把货运到加拿大或美国的后果：港口滞留、仓储费累积、货物被没收风险，以及如何预防这种代价高昂的错误。',
    canonical: 'https://www.ccbonline.ca/zh/insights/huo-dao-gang-mei-you-ior',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '货物到港没有 IOR 会怎样？进口责任主体缺失的后果 | 中加商业在线'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <article className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">进口责任</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[30px] md:text-[38px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              货物到港没有 IOR 会怎样？
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              没有指定进口责任主体（IOR）就把货运到加拿大或美国，是中国制造商最常犯、也最可以避免的错误之一。以下是具体会发生什么，以及如何预防。
            </p>
          </div>
        </article>

        <article className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                我们见过很多次这种场景：中国制造商拿到北美买家的采购订单，安排生产和运输，直到货物已经在水上航行时才意识到还没有指定进口责任主体（IOR）。到那时，这就不是规划问题了——而是危机。
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                立即发生的后果
              </h2>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">1. 货物被扣留在入境口岸</h4>
                  <p className="text-[14px] text-[#444] leading-[1.65]">加拿大边境服务局（CBSA）或美国海关和边境保护局（CBP）在没有指定 IOR 的情况下不会放行货物。你的集装箱在码头等着——仓储费的计时已经开始。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">2. 滞港费和滞箱费每天累积</h4>
                  <p className="text-[14px] text-[#444] leading-[1.65]">港口仓储费通常为每个集装箱每天 100-400 美元，取决于港口和码头。免费期过后（通常 4-7 天），费用会 escalating。两周的延误可能增加 2,000-5,000 美元的意外成本。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">3. 买家开始问棘手的问题</h4>
                  <p className="text-[14px] text-[#444] leading-[1.65]">买家期望在某个日期收到货。现在他们被告知货物卡在海关因为"我们还没有 IOR"。这会损害信任，可能在关系正式开始前就危及合作。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">4. 紧急 IOR 设置成本更高</h4>
                  <p className="text-[14px] text-[#444] leading-[1.65]">在货物正在累积费用的时间压力下设置 IOR 安排，会限制你与 IOR 服务提供商和清关行的谈判筹码。紧急服务存在，但成本显著更高。</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                最坏的情况
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                如果在合理时间内（通常 30-45 天，取决于港口和情况）没有指定 IOR，海关当局可能：
              </p>
              <ul className="space-y-2 mt-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C9A44C]">没收货物用于拍卖或销毁</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C9A44C]">下令将货物退回原产国，费用由发货人承担</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C9A44C]">将你的公司标记为 future shipments 的重点检查对象</li>
              </ul>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mt-4">
                这些结果都是不可挽回的。产品、运输成本和与买家的关系全部损失。
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                如何预防
              </h2>
              <div className="space-y-3">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">第一步：发货前 4-6 周确认 IOR 结构</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">决定由你自己的实体、分销商还是第三方 IOR 服务来处理进口责任。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">第二步：完成 CBSA 或 CBP 账户设置</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">IOR 实体需要在相关边境机构有海关账户。这需要时间——不要留到最后一刻。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">第三步：指定并与清关行沟通</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">清关行需要知道谁是 IOR，并在货物到达前拥有所有相关文件。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">第四步：确认 IOR 拥有所有必需文件</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">商业发票、装箱单、原产地证和产品特定许可证或认证应准备就绪并经过审核。</p>
                </div>
              </div>
            </div>

            <div className="mb-10 p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0]">
              <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7]">
                <strong>注意：</strong>本文描述基于典型情况的一般性场景。具体结果取决于港口、产品类型、货物价值和海关官员裁量权。中加商业在线帮助制造商主动规划 IOR 安排——我们不提供紧急 IOR 服务或法律意见。
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                相关资源
              </h2>
              <ul className="space-y-2">
                <li><Link to="/zh/insights/ior-bu-shi-dai-qing-guan" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">什么是进口责任主体（IOR）？→</Link></li>
                <li><Link to="/zh/services/ior-import-responsibility" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">IOR 与进口责任服务 →</Link></li>
              </ul>
            </div>

            <div className="p-6 md:p-8 bg-[#07111F] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">
                正在计划第一票货到北美？
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                我们帮助制造商设置 IOR 安排，协调清关行，在第一票货发出前避免代价高昂的延误。
              </p>
              <Link to="/zh/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">
                讨论你的 IOR 安排
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
