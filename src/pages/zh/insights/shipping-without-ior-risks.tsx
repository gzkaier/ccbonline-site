import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: '没有IOR就发货：你可能低估了风险｜进口责任｜CCBONLINE',
    description: '很多中国制造商在没有明确进口责任主体（IOR）的情况下就把货物发往北美。这篇文章解释了IOR为什么比清关更重要，以及没有IOR可能导致的港口滞留、仓储费累积和合规风险。',
    canonical: 'https://www.ccbonline.ca/zh/insights/shipping-without-ior-risks',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '没有IOR就发货：你可能低估了风险｜进口责任｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">进口责任</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              没有IOR就发货：你可能低估了风险
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>阅读时间：约 6 分钟</span>
              <span>·</span>
              <span>IOR｜进口责任｜北美清关｜合规风险</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                很多中国制造商认为，只要货代能清关，IOR就不是问题。但现实中，没有明确进口责任主体的货物到港后，往往面临滞留、罚款甚至被拒入境的风险。IOR不是清关的替代品，而是整个进口责任链的起点。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                IOR 到底是什么
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                IOR（Importer of Record，进口责任主体）是法律上承担进口货物全部责任的主体。这个责任不仅包括缴纳关税和税款，还包括确保产品符合本地法规、提供准确的商品归类和价值申报、承担海关审计和查验的配合义务，以及在产品出现问题时承担连带责任。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                很多制造商误以为货代或报关行就是IOR。实际上，大多数货代只提供物流服务，并不承担进口法律责任。如果你的合同中没有明确指定IOR，货物到港后可能没有人对海关的询问做出正式回应。
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                没有IOR的常见场景
              </h2>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">场景一：买家说&quot;你负责发货到我们仓库&quot;</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">北美买家经常要求DDP（完税后交货）条款，这意味着卖方需要负责清关和缴税。但很多中国制造商没有北美实体，无法作为IOR，结果货物到港后无人接手。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">场景二：货代说&quot;我们可以处理清关&quot;</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">货代可以协助报关，但通常不会承担IOR的法律责任。一旦海关对货物价值、归类或合规性提出质疑，需要IOR出面回应。如果IOR不明确，货物可能被无限期扣留。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">场景三：借用第三方IOR但没有正式协议</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">有些企业通过朋友公司或代理机构作为IOR，但没有正式的服务协议和责任界定。一旦出现问题，双方都可能推卸责任，最终损失的还是货主。</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                实际风险有哪些
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-2">港口滞留费</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">货物在港口滞留每天产生数百至数千美元的仓储费，没有IOR的货物往往滞留时间最长。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-2">货物退运</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">长时间无人认领的货物可能被海关下令退运或销毁，制造商承担全部损失。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-2">合规记录</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">进口违规记录可能影响企业未来的海关信用评级，甚至被列入黑名单。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-2">客户关系</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">交货延迟或失败会直接损害与北美客户的合作关系，甚至面临违约赔偿。</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                如何正确解决IOR问题
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                解决IOR问题的最佳时机是在签订合同之前，而不是货物已经发出之后。以下是几种常见的解决方案：
              </p>
              <div className="space-y-3">
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>方案一：由北美买家作为IOR</strong> — 这是最简单的安排，但需要在合同中明确，并确保买家愿意承担相关责任。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>方案二：聘请专业IOR服务提供商</strong> — 专门的IOR服务公司可以作为你的进口责任主体，处理所有海关事务。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>方案三：在北美设立实体</strong> — 对于有长期北美市场计划的企业，设立本地实体可以获得完整的IOR资格。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>方案四：与具备IOR能力的3PL合作</strong> — 部分第三方物流公司提供IOR服务，可以作为综合物流方案的一部分。</p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                写在最后
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                IOR问题看似简单，却是很多中国制造商在进入北美市场时最大的隐性风险点之一。它涉及法律责任、税务合规、产品安全和商业信用多个层面。在进入市场之前先把IOR安排妥当，比任何市场推广活动都更重要。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                如果你不确定自己的IOR安排是否合规，建议在第一批货物发出之前，找专业顾问做一次全面的进口责任链评估。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <h3 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">相关服务</h3>
            <div className="space-y-3">
              <Link to="/zh/services/compliance-responsibility-chain" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">合规与责任链梳理</span>
                  <p className="text-[13px] text-[#767676] mt-1">帮助你理清IOR、产品责任和合规义务的完整链条</p>
                </div>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">了解 →</span>
              </Link>
              <Link to="/zh/services/logistics-customs-import-diagnosis" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">物流、清关与进口诊断</span>
                  <p className="text-[13px] text-[#767676] mt-1">评估你的物流和清关方案，识别IOR和责任链缺口</p>
                </div>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">了解 →</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h3 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">相关阅读</h3>
            <div className="space-y-3">
              <Link to="/zh/insights/ior-importer-of-record-explained" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">IOR（进口责任主体）：为什么比清关更重要</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读 →</span>
              </Link>
              <Link to="/zh/insights/huo-dao-gang-mei-you-ior" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">货物到港没有IOR会怎样</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读 →</span>
              </Link>
              <Link to="/zh/insights/product-liability-chain" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">产品责任链：从生产到终端客户的完整路径</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读 →</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">不确定你的IOR安排是否合规？</h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">我们可以帮你评估当前的进口责任链，识别潜在风险，并提供合规建议。</p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">联系我们</Link>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
