import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_local_execution_support() {
  useSEO({
    title: '北美本地执行支持 | CCBONLINE INC.',
    description: '在客户确认、渠道就绪、合规清晰之后，提供经销商对接、样品管理、客户沟通、订单跟进和本地事务协调等落地支持。',
    canonical: 'https://www.ccbonline.ca/zh/services/local-execution-support',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '北美本地执行支持 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* 1. Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">落地执行</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              北美本地执行支持
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              在客户意向确认、渠道就绪、合规清晰之后，为您提供经销商对接、样品管理、客户沟通、订单跟进和本地事务协调等落地支持——让您在北美有人可找、有事可托。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            {/* Image */}
            <div className="mb-10">
              <img
                src="/images/services-local-execution-support.jpg"
                alt="CCBONLINE 为中国企业提供北美本地执行支持"
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
                本地执行支持是 CCBONLINE 为已经<strong className="font-medium text-[#212121]">完成前期判断和验证、准备实质性进入销售阶段</strong>的企业提供的落地协助服务。很多企业到了这一步发现：虽然市场判断清楚了、客户也找到了，但自己没有人在北美本地处理样品寄送、客户跟进、经销商会议安排、或者突发的物流和售后问题。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mt-4">
                我们的本地执行支持不是替您做销售，而是作为您在北美本地的<strong className="font-medium text-[#212121]">协调人和信息节点</strong>，帮您处理那些"必须有人在本地才能做的事"。
              </p>
            </div>

            {/* 3. 适合谁 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                适合哪些企业
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">已经完成<strong className="font-medium">市场判断和客户验证</strong>，准备开始实质性销售的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">在北美<strong className="font-medium">没有本地员工或办公室</strong>，但需要有人协调样品、会议和物流的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">与经销商或渠道方签订了意向，但<strong className="font-medium">需要本地支持来推进落地</strong>的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">希望<strong className="font-medium">先以最小成本测试本地运营</strong>，再决定是否设立正式办公室的企业</li>
              </ul>
            </div>

            {/* 4. 解决什么问题 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                解决什么问题
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                "有人对接"和"有人在本地处理"是两个不同层次的需求。很多中国企业可以通过邮件和视频会议完成初步客户沟通，但一旦涉及到样品寄送后的跟进、客户突然要求现场会面、经销商需要看仓库、或者物流出现异常需要本地协调——时差和距离就成了不可逾越的障碍。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                常见的问题场景：样品寄出后没人跟进客户反馈、客户在关键时刻联系不上中国团队、经销商对产品培训有疑问但没人能当面解答、或者订单出了小问题但因为沟通延迟变成了大问题。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                本地执行支持的核心价值是<strong className="font-medium text-[#212121]">消除"距离带来的响应延迟"</strong>，让您在北美有一个可信赖的本地触点来处理这些必须面对面或即时响应的事务。
              </p>
            </div>

            {/* 5. 我们审查/支持什么 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                我们会做什么 / 支持什么
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">经销商/渠道对接协调</strong> — 协助安排会议、传递资料、跟进合作条款进展、处理沟通中的信息缺口</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">样品管理与跟进</strong> — 协助样品在本地接收、转交、客户反馈收集和后续沟通</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">客户沟通支持</strong> — 在关键节点代您出面或协助沟通，确保客户感到被重视、响应及时</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">订单与物流协调</strong> — 协助跟进订单执行、物流状态、交付异常处理</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">本地事务信息节点</strong> — 作为您在北美本地的信息枢纽，收集市场动态、客户反馈和渠道动态，定期同步给您</li>
              </ul>
            </div>

            {/* 6. 核心交付物 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                您会收到什么
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">定期执行状态更新</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">约定频率的执行进展报告，包含客户/渠道状态、待处理事项和下一步计划</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">关键沟通记录与反馈汇总</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">重要会议和沟通的要点记录，以及客户/渠道反馈的结构化整理</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">样品跟进状态报告</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">样品流转状态、客户反馈收集、后续行动建议</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">问题升级与处理建议</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">执行过程中发现的问题、风险提醒和推荐的应对措施</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">本地市场动态简报</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">与您行业相关的本地市场变化、竞争动态和客户行为趋势的简要信息</p>
                </div>
              </div>
            </div>

            {/* 7. 不替代什么 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                这项服务不替代什么
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                本地执行支持是<strong className="font-medium text-[#212121]">协调与信息传递</strong>，不是替您完成销售目标。我们不替您签订销售合同，不替您的产品做质量保证，也不对最终的销售结果承担责任。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                我们的角色是<strong className="font-medium text-[#212121]">您在北美本地的延伸触点</strong>。重大商业决策、价格谈判、合同条款和产品策略仍然由您主导。我们确保的是：当这些决策需要本地执行时，不会因为"没有人在现场"而延误或出错。
              </p>
            </div>

            {/* 8. 建议下一步 */}
            <div className="mb-12 p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-3">
                本地支持之后，通常会走向哪里
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                本地执行支持通常是一个过渡性安排。它的目的是让您在不设立正式办公室的情况下，验证北美销售的可行性和运营模式。经过 3-6 个月的本地支持后，您通常会更清楚：
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">• 销售节奏和客户需求是否<strong className="font-medium">值得设立长期本地运营据点</strong></li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">• 经销商模式是否可行，还是需要<strong className="font-medium">调整渠道策略</strong></li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">• 产品是否需要针对北美市场做<strong className="font-medium">本地化改进</strong></li>
              </ul>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                如果验证结果积极，您可以考虑招聘本地代表或设立小型办公室；如果还需要时间观察，可以继续通过 <Link to="/zh/services/advisory-retainer" className="text-[#00A884] hover:underline">顾问式长期陪跑</Link> 获得持续支持。
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
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">本地支持服务的覆盖范围是加拿大还是美国？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">我们的核心团队在加拿大多伦多，主要覆盖加拿大市场。对于美国市场的支持，我们可以协调远程沟通和特定城市的短期出差安排。具体覆盖范围会在项目启动前明确。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">你们会替我做销售吗？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">不会。我们不替您做销售、不签单、不承诺销售目标。我们做的是销售背后的协调和支持——跟进、沟通、信息传递、问题处理——让您可以专注于产品和策略。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">我需要签多长时间的本地支持服务？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">通常建议从 3 个月起步，这样可以看到至少一个完整的销售跟进周期。如果进展顺利，可以续约或过渡到顾问式陪跑。如果市场反馈不如预期，也可以在合约到期后调整策略。</p>
                  </div>
                </details>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 md:p-8 bg-[#212121] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">
                在北美市场，您需要一个可信赖的本地触点
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                不要让距离和时差成为您失去订单的原因。让 CCBONLINE 作为您在北美本地的协调人，帮您把验证过的机会转化为实际销售。
              </p>
              <Link
                to="/zh/contact"
                className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]"
              >
                预约本地执行支持咨询
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
