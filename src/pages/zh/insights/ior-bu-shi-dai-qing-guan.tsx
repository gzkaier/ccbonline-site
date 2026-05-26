import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_IORBuShiDaiQingGuan() {
  useSEO({
    title: 'IOR 进口责任主体不是清关代理 | 中加商业在线 CCBONLINE INC.',
    description: '了解加拿大和美国的 Importer of Record（进口责任主体）到底意味着什么，谁应该担任 IOR，以及为什么第一票货发出前就需要确定安排。',
    canonical: 'https://www.ccbonline.ca/zh/insights/ior-bu-shi-dai-qing-guan',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = 'IOR 进口责任主体不是清关代理 | 中加商业在线 CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <article className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">合规</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[30px] md:text-[38px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              IOR 进口责任主体不是清关代理
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              很多中国制造商把清关和进口责任主体混为一谈。它们不是一回事——混淆这个区别可能导致货物延误、合规违规和责任风险。
            </p>
          </div>
        </article>

        <article className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            {/* 什么是IOR */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                什么是进口责任主体（Importer of Record）？
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                <strong>进口责任主体（Importer of Record，简称 IOR）</strong>是负责确保进口货物符合进口国所有法律法规的个人或实体。在加拿大，这意味着 IOR 在以下方面负有法律责任：
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">向加拿大边境服务局（CBSA）准确申报货物</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">缴纳所有适用的关税和税款</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">确保产品符合安全标准、标签要求和进口许可证规定</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">在规定的保留期限内保存记录（加拿大通常 6 年）</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">响应 CBSA 的审计、检查或合规询问</li>
              </ul>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                IOR 不一定是货物的所有者。它是承担进口法律责任的实体。这个区别非常重要。
              </p>
            </div>

            {/* IOR vs 清关行 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                IOR 与清关行：不是同一个角色
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                这是很多中国制造商最容易混淆的地方。<strong>清关行（Customs Broker）</strong>是持牌专业人士，代表进口商准备和提交海关文件。他们协助完成清关流程，但不承担进口的法律责任。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                <strong>进口责任主体（IOR）</strong>是承担法律责任的实体。清关行为 IOR 工作。可以这样理解：清关行就像帮你报税的会计师——他们帮你处理文件，但你对申报的准确性仍然负全责。
              </p>
              <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                <p className="text-[14px] font-medium text-[#212121] mb-2">核心区别：</p>
                <ul className="space-y-1.5">
                  <li className="text-[14px] text-[#444]"><strong>清关行</strong> → 准备和提交海关文件（服务提供商）</li>
                  <li className="text-[14px] text-[#444]"><strong>进口责任主体（IOR）</strong> → 对进口负法律责任（责任承担方）</li>
                </ul>
              </div>
            </div>

            {/* 谁能担任IOR */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                谁可以担任进口责任主体？
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-5">
                对于中国制造商进入加拿大或美国，通常有三种 IOR 安排方式：
              </p>
              <div className="space-y-5">
                <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[16px] font-semibold mb-2">方式一：你自己的加拿大/美国实体</h3>
                  <p className="text-[14px] text-[#444] leading-[1.65] mb-2">
                    你在当地设立或收购一个实体作为 IOR。这给你最大的控制权，但需要公司注册、税务合规和持续的行政义务。
                  </p>
                  <p className="text-[13px] text-[#666]"><strong>适合：</strong>计划在北美长期发展、货量较大的企业。</p>
                </div>
                <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[16px] font-semibold mb-2">方式二：你的分销商或代理商</h3>
                  <p className="text-[14px] text-[#444] leading-[1.65] mb-2">
                    本地分销商或销售代理担任 IOR。这减少了你的行政负担，但意味着你对进口流程的控制更少，可能失去对海关文件的可视性。
                  </p>
                  <p className="text-[13px] text-[#666]"><strong>适合：</strong>与有成熟进口能力的分销商合作的企业。</p>
                </div>
                <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[16px] font-semibold mb-2">方式三：第三方 IOR 服务</h3>
                  <p className="text-[14px] text-[#444] leading-[1.65] mb-2">
                    专业的物流公司或 IOR 服务提供商收取费用后承担进口责任主体角色。这对初步进入市场来说可能很高效，但规模大了之后成本可能较高。
                  </p>
                  <p className="text-[13px] text-[#666]"><strong>适合：</strong>测试市场或初始货量较低的企业。</p>
                </div>
              </div>
            </div>

            {/* 什么时候需要决定 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                什么时候需要确定 IOR 安排？
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                IOR 安排必须在第一票货到达入境口岸之前就位。你不能"到了再说"——海关不会在没有指定 IOR 的情况下放行货物。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                实际上，你应该在计划发货前至少 4-6 周确定 IOR 结构。这需要时间：
              </p>
              <ul className="space-y-2">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">公司注册（如果设立自己的实体）</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">与分销商或第三方 IOR 的合同谈判</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">CBSA 账户设置和保证金安排</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">文件准备和合规审查</li>
              </ul>
            </div>

            {/* 常见错误 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                中国制造商常犯的错误
              </h2>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">以为货代就是 IOR</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">货代负责运输货物。他们不对进口合规负法律责任，除非专门签订了 IOR 服务合同。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">让分销商处理 IOR 但没有明确协议</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">如果分销商是 IOR，你需要书面协议明确谁负责什么——文件、关税、合规和责任。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">不了解责任敞口有多大</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">IOR 可能因为申报不实、关税少缴或产品不合规而被追责。这不是走个形式——是法律责任。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">等货在路上了才想起来</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">等船在海上航行了再安排 IOR 就来不及了。港口滞留费可能每天数千加元。</p>
                </div>
              </div>
            </div>

            {/* 如何选择 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                如何选择合适的 IOR 安排
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                合适的 IOR 结构取决于你的商业模式、货量预期、风险承受能力和与加拿大或美国合作伙伴的关系。没有放之四海而皆准的答案。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-5">
                需要考虑的关键因素：
              </p>
              <ul className="space-y-2 mb-5">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong>货量和频率</strong> — 更高的货量通常值得设立自己的实体</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong>控制需求</strong> — 你是否需要直接控制进口流程？</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong>分销商能力</strong> — 你的分销商是否有可靠的进口经验？</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong>责任容忍度</strong> — 你是否接受另一个实体对你的产品负法律责任？</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong>时间线</strong> — 你需要多快开始发货？</li>
              </ul>
              <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0]">
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7]">
                  <strong>注意：</strong>本文提供 Importer of Record 概念的一般性概述。具体的 IOR 安排应由了解你产品类别、货量和业务结构的合格清关行和法律专业人士审核。中加商业在线帮助制造商了解 IOR 选项并协调相关专业人员——我们不提供法律意见，也不担任 IOR。
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                常见问题
              </h2>
              <div className="space-y-3">
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">IOR 和清关行可以是同一个实体吗？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">可以。很多清关行和货代提供 IOR 服务。但即使一家公司同时提供两种服务，法律角色也是不同的。确保 IOR 服务是明确签约的，不是作为清关服务的一部分被默认包含的。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">货物到达时没有 IOR 会怎么样？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">CBSA（或美国的 CBP）会扣留货物在港口。仓储费每天累积。如果在一定期限内没有指定 IOR，货物可能被没收或退回，费用由发货人承担。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">IOR 必须是加拿大或美国公民吗？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">不需要。IOR 必须是在进口国合法注册的实体（或有进口的法律资格），但不要求是公民。例如，中资加拿大子公司可以作为 IOR。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">以后可以改 IOR 安排吗？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">可以，但需要更新 CBSA 记录，可能涉及过渡期。很多企业先从第三方 IOR 或分销商开始，随着货量增加再过渡到自己的实体。谨慎规划这个过渡，避免进口能力出现空档。</p>
                  </div>
                </details>
              </div>
            </div>

            {/* 相关资源 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                相关资源
              </h2>
              <ul className="space-y-2">
                <li><Link to="/zh/services/ior-import-responsibility" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">IOR 与进口责任服务 →</Link></li>
                <li><Link to="/zh/services/compliance-responsibility-chain" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">合规与责任链梳理 →</Link></li>
                <li><Link to="/zh/services/local-execution-support" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">本地执行支持 →</Link></li>
                <li><Link to="/zh/services/3pl-warehousing-advisory" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">3PL 筛选与仓库审计 →</Link></li>
              </ul>
            </div>

            {/* CTA */}
            <div className="p-6 md:p-8 bg-[#07111F] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">
                需要帮助梳理 IOR 安排？
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                我们帮助制造商了解 IOR 选项、比较不同安排，并对接合格的清关专业人员。
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
