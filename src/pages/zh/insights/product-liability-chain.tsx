import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: '产品责任链：从生产到终端客户的完整路径｜IOR与责任链｜CCBONLINE',
    description: '产品责任不是出厂后就结束。进入北美市场后，生产商、进口商、分销商、零售商和终端客户之间会形成一条责任链。企业需要提前判断每个环节的责任边界和文件准备。',
    canonical: 'https://www.ccbonline.ca/zh/insights/product-liability-chain',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '产品责任链：从生产到终端客户的完整路径｜IOR与责任链｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">IOR与责任链</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              产品责任链：从生产到终端客户的完整路径
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>阅读时间：约 7 分钟</span>
              <span>·</span>
              <span>产品责任｜责任链｜进口责任｜售后｜北美市场进入</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                产品责任不是出厂后就结束。进入北美市场后，生产商、进口商、分销商、零售商和终端客户之间会形成一条责任链。企业需要提前判断每个环节的责任边界和文件准备。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[700px]">
            <div className="prose-content">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">很多制造企业习惯把责任理解到"出厂"为止。产品生产完成，检测合格，装柜发货，客户收货。在国内或传统外贸逻辑里，这似乎已经完成了大部分责任。但进入加拿大和北美市场后，事情没有这么简单。</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">产品进入市场后的环节</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">产品进入市场之后，会经过更多环节：生产商、出口商、进口商、IOR（Importer of Record，进口记录主体）、分销商、零售商、安装商、售后服务方、终端客户。这些角色之间，会形成一条产品责任链。</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">责任链不是法律课上的抽象概念。它会直接影响企业能不能进入渠道，能不能获得客户信任，能不能处理投诉，能不能应对召回，能不能在出现问题时讲清楚责任。</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">企业需要提前想清楚的六个问题</h2>
              <h3 className="text-[16px] font-semibold text-[#212121] mb-2 mt-6">第一，谁是进口责任主体？</h3>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">如果产品正式进入加拿大或美国市场，谁作为进口方？谁负责申报？谁保存记录？谁回应后续核查？</p>
              <h3 className="text-[16px] font-semibold text-[#212121] mb-2 mt-6">第二，谁对产品信息负责？</h3>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">标签、说明书、警示语、规格参数、认证文件、测试报告、包装信息、追溯信息是否准确？如果资料错误，谁负责更正？</p>
              <h3 className="text-[16px] font-semibold text-[#212121] mb-2 mt-6">第三，谁处理客户投诉？</h3>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">终端客户出现问题时，是找零售商、分销商、进口商，还是生产商？投诉如何记录？谁判断是否涉及安全问题？</p>
              <h3 className="text-[16px] font-semibold text-[#212121] mb-2 mt-6">第四，谁负责售后和保修？</h3>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">产品保修期多久？退换货怎么处理？备件如何提供？维修由谁执行？跨境寄回是否现实？</p>
              <h3 className="text-[16px] font-semibold text-[#212121] mb-2 mt-6">第五，谁承担召回相关责任？</h3>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">如果产品存在安全风险，是否需要通知渠道、客户或监管机构？如何追溯批次？如何通知购买者？如何执行纠正措施？</p>
              <h3 className="text-[16px] font-semibold text-[#212121] mb-2 mt-6">第六，保险如何安排？</h3>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">产品责任险是否需要？由谁购买？覆盖哪些市场、产品、销售渠道和责任范围？客户或渠道是否有最低保险要求？</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">责任链需要在市场进入设计时就安排清楚</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">更现实的是，责任链不是单独由生产商解决，也不是单独由进口商解决。它需要在市场进入设计时就安排清楚。生产商负责提供完整准确的产品和技术资料；进口商负责进口申报和本地合规文件衔接；分销商负责渠道销售和客户沟通；售后方负责响应机制；保险安排覆盖相应市场和产品类别。</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">这套东西看起来不像销售，但它会影响销售。因为北美客户的信任，往往来自对风险的判断。如果客户觉得你产品不错，但责任链模糊，他可能不会推进。如果客户觉得你不只会供货，还能把资料、责任、售后和协作方式讲清楚，合作可能性就会提高。</p>
            </div>

            <div className="mt-10 p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3 text-[#212121]">相关服务</h3>
              <div className="space-y-2">
                                <Link to="/zh/services/market-entry-diagnosis" className="block text-[14px] text-[#00B894] hover:underline">北美市场进入初步诊断 →</Link>
                <Link to="/zh/services/local-service-connection" className="block text-[14px] text-[#00B894] hover:underline">本地服务资源连接 →</Link>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link to="/zh/insights/ior-importer-of-record-explained" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors"><span className="text-[12px] text-[#767676] block mb-1">同栏目</span><span className="text-[14px] font-medium text-[#212121]">IOR（进口责任主体）：为什么比清关更重要</span></Link>
              <Link to="/zh/insights/supply-chain-reshuffling-opportunities" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors"><span className="text-[12px] text-[#767676] block mb-1">下一篇</span><span className="text-[14px] font-medium text-[#212121]">中美加三角：供应链重构中的机会</span></Link>
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
