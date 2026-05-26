import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_ProductCompliance() {
  useSEO({
    title: '加拿大产品认证路径梳理 | CSA UL FCC ISED | 中加商业在线 CCBONLINE INC.',
    description: '帮助中国制造商了解产品进入加拿大和北美需要的认证要求，理清CSA、UL、FCC、ISED等认证路径，避免在错误的认证上浪费时间和金钱。',
    canonical: 'https://www.ccbonline.ca/zh/services/product-compliance',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '加拿大产品认证路径梳理 | CSA UL FCC ISED | 中加商业在线 CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">合规</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              产品合规与认证路径梳理
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              明确你的产品进入加拿大和北美需要哪些认证，了解文档要求，制定实用的合规时间线——避免把钱花在错误的认证上。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                这是什么服务
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                一项结构化咨询服务，帮助中国制造商了解产品进入加拿大和北美需要的认证、如何获得、以及先后顺序。我们自己不做认证测试。我们梳理路径、识别现有资料缺口，并协调认证机构——让你带着清晰度而不是困惑进入认证流程。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                适合哪些企业
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">产品需要安全、电气、无线或排放认证才能进入北美的制造商</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">不确定应该找哪家认证机构（CSA、UL、ETL、Intertek）的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">已有CE或其他国际认证，想了解能否用于北美的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">需要根据销售渠道（零售、商用、工业、线上）做认证的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">听说"需要做认证"但不知道哪种、多久、多少钱的企业</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                解决什么问题
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                北美认证不是单一流程。不同产品类别需要不同认证——电气产品可能需要CSA或UL，无线设备需要FCC和ISED，能耗产品可能需要DOE或NRCan注册。认证机构选择、测试顺序、文档准备都会影响时间和成本。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                很多制造商反向操作：先选认证机构，再发现要求没准备好。我们先帮你了解要求，再选路径——可能省去数月延误和不必要的测试费用。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                我们具体做什么
              </h2>
              <ul className="space-y-4">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">产品类别评估</strong> — 根据功能、组件和预期用途分类，确定所有适用的认证要求</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">适用标准识别</strong> — 确定具体标准：CSA C22.2、UL标准、FCC Part 15、ISED RSS、能效法规和省要求</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">现有认证评估</strong> — 评估CE、CCC等现有测试报告能否被利用，或是否需要额外北美专项测试</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">文档缺口分析</strong> — 明确提交认证前需要准备的技术文档、用户手册、标签和安全警示</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">认证路径规划</strong> — 制定分步时间线，展示测试、提交和批准的最优顺序</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">认证机构协调</strong> — 帮你准备接触认证机构时该问什么问题、准备什么材料</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                你会收到什么
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">认证要求清单</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">产品在加拿大和美国需要的完整认证列表</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">适用标准列表</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">适用于你产品的具体标准和法规</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">现有认证评估</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">现有认证或测试报告能否用于北美的评估</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">文档准备清单</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">认证所需的完整技术文档、手册、标签和安全警示</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">认证时间线</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">从评估到认证完成的分步时间线</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">推荐认证机构</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">适合你产品的合格认证机构和测试实验室</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                这项服务不替代什么
              </h2>
              <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0]">
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                  中加商业在线不做认证测试，不颁发认证，不作为认证机构。我们不替代CSA Group、UL Solutions、Intertek或任何其他认可测试实验室。我们提供路径指导、文档准备支持和协调协助。所有认证测试必须由认可实验室执行，最终认证决定由认证机构做出。
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                常见问题
              </h2>
              <div className="space-y-3">
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">CE认证在加拿大能用吗？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">有时可以。部分认证机构可能接受CE测试报告作为北美认证的基础，但标准和要求不同。我们评估你的CE文档，确定是否需要额外的CSA、UL或cUL测试。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">CSA和UL认证有什么区别？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">CSA Group是加拿大标准组织，UL是美国机构。两国都互相认可。CSA标志在美国有效，cUL（加拿大UL）在加拿大有效。我们帮你根据产品和目标市场确定哪个更高效。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">认证通常需要多长时间？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">因产品复杂度和认证类型差异很大。简单电气产品可能4-8周；有多个认证要求的复杂产品可能需要3-6个月。我们的时间线规划给你基于具体产品的现实预期。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">需要先做好认证才能找买家吗？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">不一定，但你需要有清晰的认证计划。很多买家会在初次沟通时询问认证状态。知道需要什么认证、时间线怎样、已经开始流程了——这展示了你的认真和准备。</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                相关服务
              </h2>
              <ul className="space-y-2">
                <li><Link to="/zh/services" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">全部服务</Link></li>
                <li><Link to="/zh/services/market-entry-diagnosis" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">市场进入诊断</Link></li>
                <li><Link to="/zh/services/compliance-responsibility-chain" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">合规与责任链梳理</Link></li>
                <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">联系中加商业在线</Link></li>
              </ul>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                需要明确产品的认证要求？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                告诉我们你的产品、目标市场和当前认证状态。我们会帮你梳理路径，找到最高效的合规方式。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">梳理你的认证路径</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
