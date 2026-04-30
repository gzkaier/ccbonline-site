import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_market_entry_diagnosis() {
  useSEO({
    title: '北美市场进入可行性诊断 | CCBONLINE INC.',
    description: '在正式投入前，先判断您是否适合进入北美市场、加拿大和美国哪个优先、当前准备度是否足够，以及未来 0-90 天应如何推进。',
    canonical: 'https://www.ccbonline.ca/zh/services/market-entry-diagnosis',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '北美市场进入可行性诊断 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* 1. Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">进入前判断</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              北美市场进入可行性诊断
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              在正式投入北美市场前，先判断是否适合进入、加拿大和美国哪个优先、当前资料和能力是否足够、哪些风险必须先处理，以及未来 0-90 天应该如何推进。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            {/* Image */}
            <div className="mb-10">
              <img
                src="/images/services-market-entry-diagnosis.jpg"
                alt="CCBONLINE 帮助中国企业评估北美市场进入可行性"
                className="w-full h-auto max-h-[400px] object-cover"
                loading="lazy"
              />
            </div>

            {/* 2. 服务定义 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                这是什么服务
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                市场进入可行性诊断是 CCBONLINE 为企业提供的结构化评估服务。我们不替您做商业决策，而是通过系统化的资料审查、市场比对和风险筛查，帮助您在投入大量资源之前，看清自己是否已经准备好进入北美，以及如果准备好，第一步应该踩在哪里。
              </p>
            </div>

            {/* 3. 适合谁 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                适合哪些企业
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">考虑首次进入北美市场的中国制造企业或品牌方</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">不确定加拿大和美国哪个应该优先进入的管理层</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">需要在分配预算前进行结构化准备度评估的决策者</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">曾经尝试进入北美但遇到合规或渠道挫折、希望重新评估的企业</li>
              </ul>
            </div>

            {/* 4. 解决什么问题 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                解决什么问题
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                很多企业在还没了解自己的产品是否真正适配北美买家需求、哪个市场更合适、存在哪些合规缺口之前，就急于开始客户对话或参加展会。这往往导致时间浪费、经销商关系失败、货物被海关扣留、或者投入大量预算后发现市场并不需要这个产品。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                结构化的可行性诊断通过在投入资金之前识别准备缺口、验证市场假设、明确优先级，来防止这些代价高昂的错误。
              </p>
            </div>

            {/* 5. 我们审查/支持什么 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                我们会审查什么 / 支持什么
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]"><strong className="font-medium text-[#212121]">产品与市场适配度</strong> — 您的产品功能、定价、认证状态是否与北美主流买家需求匹配</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]"><strong className="font-medium text-[#212121]">加拿大 / 美国优先级判断</strong> — 基于您的产品类别、竞争格局、合规门槛和渠道特性，建议先进入哪个市场</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]"><strong className="font-medium text-[#212121]">合规与认证缺口筛查</strong> — 识别主要强制性认证、进口许可、标签要求和责任链前置条件</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]"><strong className="font-medium text-[#212121]">目标客户画像与渠道方向</strong> — 谁最可能购买、通过什么渠道采购、决策流程大概多长</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]"><strong className="font-medium text-[#212121]">现有资料与能力评估</strong> — 您的英文资料、产品文档、样品准备是否达到可展示标准</li>
              </ul>
            </div>

            {/* 6. 核心交付物 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                您会收到什么
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">产品与市场适配初判报告</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">初步评估您的产品是否适合北美买家，主要适配点与潜在阻力</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">加拿大 / 美国优先级判断及理由</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">建议哪个市场先进入，基于竞争、合规门槛和渠道可得性的具体分析</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">合规与责任链初筛清单</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">识别主要认证、进口和责任要求，标注哪些必须先行处理</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">目标客户与渠道方向建议</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">谁购买、如何购买、通过哪些渠道的概览，帮助您聚焦资源</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">0-90 天行动路线图 + 初步风险清单</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">明确的优先级排序、时间线建议和需要规避的主要风险点</p>
                </div>
              </div>
            </div>

            {/* 7. 不替代什么 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                这项服务不替代什么
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                可行性诊断是一份<strong className="font-medium text-[#212121]">基于现有资料的评估与建议</strong>，它不是法律意见，也不是替您做最终的商业决策。我们不代替律师处理合规事务，不代替您的产品团队修改设计，也不代替销售团队去谈客户。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                它的价值在于：帮您在花钱之前，先看清方向和缺口。具体的执行——无论是申请认证、修改产品、还是签约经销商——仍然需要您或后续的专业服务商来完成。
              </p>
            </div>

            {/* 8. 建议下一步 */}
            <div className="mb-12 p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-3">
                诊断之后，通常会走向哪里
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                可行性诊断的输出会告诉您"应该做什么"。接下来通常需要验证"能不能做到"。多数客户在完成诊断后会选择以下路径之一：
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">• 如果诊断显示需要<strong className="font-medium">先验证客户和渠道</strong> → 进入 <Link to="/zh/services/customer-channel-validation" className="text-[#C00000] hover:underline">客户与渠道验证</Link></li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">• 如果诊断显示<strong className="font-medium">合规和责任链是最大缺口</strong> → 进入 <Link to="/zh/services/compliance-responsibility-chain" className="text-[#C00000] hover:underline">合规与责任链搭建</Link></li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">• 如果客户和渠道已初步验证、合规已梳理 → 直接进入 <Link to="/zh/services/local-execution-support" className="text-[#C00000] hover:underline">本地执行支持</Link> 或 <Link to="/zh/services/advisory-retainer" className="text-[#C00000] hover:underline">顾问式长期陪跑</Link></li>
              </ul>
              <p className="text-[14px] text-[#666] leading-[1.6] italic">
                您不需要预先决定下一步。诊断报告中会附带明确的阶段建议，您可以根据自身节奏选择推进方式。
              </p>
            </div>

            {/* 9. FAQ */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                常见问题
              </h2>
              <div className="space-y-3 mb-10">
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">诊断需要我提供什么资料？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">产品规格书、现有的英文资料（如有）、目标市场想法、以及一次 30-45 分钟的线上沟通。如果您的资料不完整，我们会告诉您缺什么，不会因此拒绝服务。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">诊断和普通的"市场调研报告"有什么区别？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">调研报告告诉您"市场有多大"。诊断告诉您"您的产品在这个市场里能不能卖、要先解决什么问题、第一步踩在哪里"。诊断是以您的企业为中心，不是以市场为中心。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">诊断能代替我自己去北美考察吗？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">不能。诊断帮您缩小考察的范围、明确考察时应该验证什么。它让您去北美的时候带着清晰的问题清单，而不是盲目参展。</p>
                  </div>
                </details>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 md:p-8 bg-[#212121] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">
                不确定自己是否准备好了？
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                大多数企业以为自己准备好了，实际上还差 2-3 个关键步骤。花 30 分钟做一次诊断，避免未来几个月的弯路。
              </p>
              <Link
                to="/zh/contact"
                className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]"
              >
                预约市场进入可行性诊断
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
