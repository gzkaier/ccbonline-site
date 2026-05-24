import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_customer_channel_validation() {
  useSEO({
    title: '客户与渠道验证 | CCBONLINE INC.',
    description: '在正式投入销售资源前，先验证北美目标客户是否真实存在、采购流程如何运作、渠道是否愿意合作。',
    canonical: 'https://www.ccbonline.ca/zh/services/customer-channel-validation',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '客户与渠道验证 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* 1. Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">进入前验证</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              客户与渠道验证
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              在正式投入销售资源前，先验证北美目标客户是否真实存在、采购流程如何运作、渠道是否愿意合作、以及你的产品在真实场景中是否被接受。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            {/* Image */}
            <div className="mb-10">
              <img
                src="/images/services-customer-channel-validation.jpg"
                alt="CCBONLINE 帮助企业验证北美客户与渠道"
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
                客户与渠道验证是 CCBONLINE 为已经初步判断要进入北美的企业提供的"落地前实测"服务。我们通过定向访谈、渠道接触和小范围样品测试，帮你确认：你想象中的客户是否真实买单、你计划的渠道是否愿意合作、以及你的产品在北美真实使用环境中是否达到预期。这不是市场调研，这是用实际对话和测试来降低假设风险。
              </p>
            </div>

            {/* 3. 适合谁 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                适合哪些企业
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">已经完成初步市场判断，但需要<strong className="font-medium">在投入前验证假设</strong>的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">有产品样品或初步资料，但<strong className="font-medium">不确定北美客户真实反应</strong>的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">计划参加展会或拜访渠道，但<strong className="font-medium">希望带着明确验证目标去</strong>的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">曾经通过展会拿到名片但<strong className="font-medium">后续转化极低</strong>、希望找到原因的企业</li>
              </ul>
            </div>

            {/* 4. 解决什么问题 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                解决什么问题
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                "我们觉得北美市场很大"和"北美的具体某类客户愿意以什么价格、通过什么渠道、在什么条件下买我们的产品"，是两个完全不同的认知层级。很多企业在前者上花了太多预算，却从未验证过后者。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                常见的问题包括：参加展会拿到一堆名片但没有人回复、找到的经销商提的要求根本做不到、客户说感兴趣但样品发出去后没有下文、或者产品在实际使用场景中暴露了国内没有的设计缺陷。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                客户与渠道验证通过<strong className="font-medium text-[#212121]">结构化的真实接触</strong>，在你在北美租办公室、雇销售、签大订单之前，先把这些假设性风险暴露出来。
              </p>
            </div>

            {/* 5. 我们审查/支持什么 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                我们会做什么 / 支持什么
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">目标客户定向访谈</strong> — 找到与你产品匹配的真实采购决策者或使用者，进行采购流程、决策标准、价格敏感度的结构化访谈</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">渠道接触与反馈收集</strong> — 接触潜在的分销商、代理商或集成商，了解他们的合作条件、对产品的真实评价、以及代理意愿</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">样品测试与场景验证</strong> — 如有条件，安排样品进入真实使用环境，收集功能性反馈和适配性评价</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">竞品对比与定位校准</strong> — 在真实对话中了解客户目前用什么替代品、你的产品相对优劣势在哪里</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">采购流程与决策链梳理</strong> — 了解从接触到下单需要经过哪些环节、多长时间、谁有最终决定权</li>
              </ul>
            </div>

            {/* 6. 核心交付物 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                你会收到什么
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">客户验证摘要报告</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">访谈对象画像、核心反馈汇总、购买意愿评估、主要顾虑点清单</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">渠道接触反馈与可行性评估</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">接触的渠道类型、合作条件概览、对产品的评价、推荐优先级排序</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">样品测试反馈（如适用）</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">功能性评价、适配性问题、与竞品的对比印象、改进建议</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">采购流程与决策链说明</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">从初次接触到成单的关键环节、典型时间线、决策参与方</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">进入策略调整建议</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">基于验证结果，对产品定位、渠道策略、定价或资料提出的具体调整方向</p>
                </div>
              </div>
            </div>

            {/* 7. 不替代什么 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                这项服务不替代什么
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                客户与渠道验证是<strong className="font-medium text-[#212121]">信息收集与风险暴露</strong>，不是销售执行。我们不替你签订经销协议，不替你完成大规模销售，也不保证验证过程中接触到的客户或渠道一定会成为你的长期合作伙伴。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                它的价值在于给你一个<strong className="font-medium text-[#212121]">基于真实反馈的决策依据</strong>。如果验证结果显示市场并不如你预期，这同样是有价值的输出——它帮你避免了更大的投入损失。
              </p>
            </div>

            {/* 8. 建议下一步 */}
            <div className="mb-12 p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-3">
                验证之后，通常会走向哪里
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                验证完成后，你会知道客户是否真实存在、渠道是否愿意合作、以及产品是否需要调整。接下来的路径通常是：
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">• 如果验证显示<strong className="font-medium">合规和责任链是主要瓶颈</strong> → 进入 <Link to="/zh/services/compliance-responsibility-chain" className="text-[#00A884] hover:underline">合规与责任链搭建</Link></li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">• 如果验证通过、需要<strong className="font-medium">开始实质性本地运营</strong> → 进入 <Link to="/zh/services/local-execution-support" className="text-[#00A884] hover:underline">本地执行支持</Link></li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">• 如果验证显示产品需要调整但市场方向正确 → 返回产品优化，之后再进入渠道签约阶段</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">• 如果验证结果不理想 → 你可以在损失可控的阶段重新评估市场优先级，而不是在投入大量资源后被迫退出</li>
              </ul>
            </div>

            {/* 9. 常见问题 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                常见问题
              </h2>
              <div className="space-y-3 mb-10">
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">验证需要多长时间？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">通常 4-6 周，具体取决于目标客户的可接触性、样品寄送周期以及渠道方的回复速度。我们会在项目启动时给出明确的时间预期。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">你们怎么找到这些目标客户和渠道？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">我们会结合行业数据库、展会名录、线上渠道和本地网络进行定向接触。不是随机打电话，而是基于你的产品特性和我们的行业经验做精准匹配。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">验证结果不理想怎么办？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">这也是有价值的输出。我们会分析不理想的根本原因——是产品问题、定位问题、价格问题还是渠道选择问题——并给出是否值得继续投入、以及如何调整的建议。</p>
                  </div>
                </details>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 md:p-8 bg-[#212121] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">
                在进入北美市场前，先验证你的假设
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                不要等投入了大量资源后才发现客户并不存在。用 4-6 周的时间，把假设变成可验证的事实。
              </p>
              <Link
                to="/zh/contact"
                className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]"
              >
                预约客户与渠道验证服务
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
