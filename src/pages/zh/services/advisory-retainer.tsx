import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_advisory_retainer() {
  useSEO({
    title: '顾问式长期陪跑 | CCBONLINE INC.',
    description: '在北美市场进入的全周期中，提供持续的市场进入顾问服务——从战略判断到执行调整，确保您的每一步都有可信赖的专业支持。',
    canonical: 'https://www.ccbonline.ca/zh/services/advisory-retainer',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '顾问式长期陪跑 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* 1. Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">长期陪伴</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              顾问式长期陪跑
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              在北美市场进入的全周期中，提供持续的战略判断、执行指导和风险提醒——从前期评估到渠道签约、从合规推进到售后调整，确保您的每一步都有可信赖的专业支持。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            {/* Image */}
            <div className="mb-10">
              <img
                src="/images/services-advisory-retainer.jpg"
                alt="CCBONLINE 为中国企业提供北美市场进入顾问式陪跑"
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
                顾问式长期陪跑是 CCBONLINE 为已经在北美市场进入过程中的企业提供的<strong className="font-medium text-[#212121]">持续性顾问服务</strong>。市场进入不是一次性项目——它是一个跨越数月甚至数年的动态过程，期间会遇到新的合规变化、渠道谈判僵局、客户投诉、竞争动态变化和内部资源调配问题。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mt-4">
                这项服务的价值在于：您不需要在每次遇到新问题的时候都重新寻找外部顾问。CCBONLINE 作为已经了解您的产品、策略和目标市场的长期伙伴，可以在关键时刻提供快速、有针对性的判断和建议。
              </p>
            </div>

            {/* 3. 适合谁 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                适合哪些企业
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">已经<strong className="font-medium">启动北美市场进入</strong>，但需要在过程中持续获得战略判断和操作建议的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">管理层有北美战略意图，但<strong className="font-medium">内部没有专人全职负责</strong>市场进入执行的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">在北美<strong className="font-medium">已经有初步渠道或客户</strong>，但遇到执行瓶颈或方向不确定的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">希望在北美市场建立<strong className="font-medium">长期可持续的运营体系</strong>，而非一次性项目的企业</li>
              </ul>
            </div>

            {/* 4. 解决什么问题 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                解决什么问题
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                市场进入过程中最常见的问题不是"没有计划"，而是"计划赶不上变化"。您可能在启动时有一个清晰的方向，但三个月后会遇到新的竞争格局、六个月后会发现某个合规要求比预期复杂、九个月后原来的渠道策略不再适用。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                如果没有一个了解您背景的外部顾问，每次遇到新问题都需要重新 briefing 新顾问，不仅效率低，而且建议往往缺乏连续性。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                顾问式陪跑解决的是<strong className="font-medium text-[#212121]">连续性判断和动态调整</strong>的问题。我们了解您的起点、跟踪您的进展，因此能够在变化发生时快速给出有针对性的建议，而不是通用的"最佳实践"。
              </p>
            </div>

            {/* 5. 我们支持什么 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                我们会做什么 / 支持什么
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]"><strong className="font-medium text-[#212121]">月度战略回顾与执行评估</strong> — 定期检视进展、识别偏差、调整优先级</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]"><strong className="font-medium text-[#212121]">关键决策前的判断支持</strong> — 在签约、投资、策略转向等重大决策前提供结构化的分析和建议</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]"><strong className="font-medium text-[#212121]">合规与风险动态监控</strong> — 跟踪与您产品相关的法规变化、市场风险和新出现的竞争动态</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]"><strong className="font-medium text-[#212121]">渠道与客户关系维护建议</strong> — 在渠道谈判、客户投诉或合作僵局时提供处理策略</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]"><strong className="font-medium text-[#212121]">资源协调与外部对接</strong> — 在需要引入认证机构、法律或税务顾问时，协助您理解需求和评估服务商</li>
              </ul>
            </div>

            {/* 6. 核心交付物 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                您会收到什么
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">月度执行评估与调整建议</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">定期回顾进展，指出偏差和风险，给出下月优先级建议</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">关键事项判断备忘录</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">在遇到重大决策或突发问题时，提供结构化的分析备忘录和可选方案</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">市场动态与风险简报</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">与您业务相关的法规变化、竞争动态和市场趋势摘要</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">持续可用的沟通渠道</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">约定范围内的即时沟通权限，确保关键时刻有人可问、有人可托</p>
                </div>
              </div>
            </div>

            {/* 7. 不替代什么 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                这项服务不替代什么
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                顾问式陪跑是<strong className="font-medium text-[#212121]">战略判断和执行指导</strong>，不是替您做日常运营。我们不替您管理库存、不替您处理客户售后、不替您做财务记账，也不对您的销售业绩做出承诺。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                我们的角色是<strong className="font-medium text-[#212121]">您在北美的外部大脑</strong>——在关键时刻提供判断、在迷茫时提供方向、在变化时提供应对建议。日常的销售执行、客户服务和产品运营仍然由您的团队负责。
              </p>
            </div>

            {/* 8. 建议下一步 */}
            <div className="mb-12 p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-3">
                陪跑服务通常如何开始
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                大多数选择陪跑服务的企业已经经历了前期诊断或验证阶段。如果您是首次接触 CCBONLINE，我们建议按以下路径启动：
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">• 如果还没有做过系统评估 → 先通过 <Link to="/zh/services/market-entry-diagnosis" className="text-[#C00000] hover:underline">市场进入可行性诊断</Link> 建立基础认知</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">• 如果已经有客户或渠道但需要推进 → 可以先用 <Link to="/zh/services/local-execution-support" className="text-[#C00000] hover:underline">本地执行支持</Link> 处理落地事务</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">• 如果已经在进程中但需要长期判断支持 → 直接启动顾问式陪跑，我们会根据您的当前状态调整服务重点</li>
              </ul>
              <p className="text-[14px] text-[#666] leading-[1.6] italic">
                陪跑服务的最短合约期通常为 6 个月，以确保能够覆盖至少一个完整的业务周期并提供有价值的连续性建议。
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
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">陪跑服务和单次项目服务有什么区别？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">单次项目（如诊断、验证）有明确的交付物和结束点。陪跑服务是持续性的，没有固定的"交付物清单"，而是根据您在每个阶段遇到的具体问题提供动态支持。更适合已经进入进程、需要长期外部视角的企业。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">陪跑服务包含多少次沟通？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">具体沟通频率和形式根据合约层级确定，通常包含月度正式回顾、关键时刻的即时沟通、以及约定范围内的邮件/信息支持。我们会在签约前明确服务边界，避免预期偏差。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">如果我发现陪跑服务不适合我，可以调整吗？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">可以。我们建议从 6 个月起步，但如果您的需求在过程中发生变化，可以在合约到期后调整为其他服务形式（如单次项目支持或本地执行）。我们不捆绑长期合约，服务形式应该匹配您的实际需求。</p>
                  </div>
                </details>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 md:p-8 bg-[#212121] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">
                在北美市场进入的漫长旅程中，您需要一个可信赖的伙伴
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                市场进入不是冲刺，是马拉松。让 CCBONLINE 陪您跑完前半程，帮您避开别人已经踩过的坑。
              </p>
              <Link
                to="/zh/contact"
                className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]"
              >
                预约顾问式陪跑咨询
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
