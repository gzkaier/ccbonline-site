import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function ZH_customer_channel_validation() {
  useEffect(() => {
    document.title = '北美客户与渠道验证 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">进入准备</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              北美客户与渠道验证
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              判断谁是真正买方、哪类渠道路径更现实、客户开发前需要准备什么资料，以及如何在不盲目群发邮件的情况下验证北美客户需求。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-10">
              <img
                src="/images/services-customer-channel-validation.jpg"
                alt="CCBONLINE 帮助中国企业进入北美市场 — 北美客户与渠道验证。"
                className="w-full h-auto max-h-[400px] object-cover"
                loading="lazy"
              />
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              适合哪些企业
            </h2>
            <ul className="space-y-3 mb-10">
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">产品已准备好进入北美但不清楚真正买家是谁的企业</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">准备参加北美展会并需要展前买家定位的企业</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">尝试过邮件外联但没有收到有意义回复的团队</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">需要验证经销、直销还是混合渠道更合适的企业</li>

            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              解决什么问题
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              很多企业挣扎不是因为产品差，而是因为他们不知道实际谁在购买、采购决策如何做出、以及北美买家在接触前期望看到什么材料。这项服务用结构化验证取代猜测——识别真实客户画像、比较渠道选项，并创建可测试的外联计划。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              我们会看什么 / 支持什么
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              CCBONLINE 审查您在北美的目标客户群体，绘制现实的渠道路径——经销、直销、混合或平台型，根据北美买家期望评估您当前的外联材料，设计客户资格筛选问题以区分认真意向和随意询问，并构建 30 天验证计划在全面投入前测试市场兴趣。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              交付内容
            </h2>
            <ul className="space-y-3 mb-10">
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">目标客户画像</strong> — 谁购买、为什么购买、他们看重什么的详细画像</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">渠道类型比较</strong> — 经销、直销、混合和平台型路径的分析</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">经销商 / 分销商 / 终端客户路径判断</strong> — 最可行首选渠道的建议</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">客户开发资料准备度检查</strong> — 您的材料、网站和样品是否符合北美标准的评估</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">客户资格筛选问题</strong> — 快速识别认真意向方的结构化问题</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">30 天客户验证计划</strong> — 带可衡量里程碑的测试市场兴趣的分步计划</li>

            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              不替代什么
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                CCBONLINE 不作为销售代理、获客平台或经销商。我们不保证客户获取或收入。我们提供策略、材料审查和验证框架，使您的团队或合作伙伴能够更有效地接触买家。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              推荐下一步
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
              预约渠道验证会议，审查您当前的客户假设、现有材料和计划的外联方式。我们将识别最大缺口并提出验证计划。
            </p>
            <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px] inline-block mb-10">预约初步沟通</Link>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">常见问题</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              经常被问到的问题
            </h2>
            <div className="space-y-3 mb-10">
            <details className="border border-[#E5E5E5] bg-white">
              <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">这与雇佣销售团队有什么不同？</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="px-4 pb-4 md:px-5 md:pb-5">
                <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">我们不替您销售。我们帮助您理解向谁销售、通过哪些渠道、用什么材料——使您的销售努力或合作伙伴对话更有针对性。</p>
              </div>
            </details>
            <details className="border border-[#E5E5E5] bg-white">
              <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">你们能保证找到经销商吗？</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="px-4 pb-4 md:px-5 md:pb-5">
                <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">不能。我们帮助您识别和评估经销商候选，但签约取决于产品适配、条款谈判和双方意向。</p>
              </div>
            </details>
            <details className="border border-[#E5E5E5] bg-white">
              <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">如果我们的材料还没准备好怎么办？</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="px-4 pb-4 md:px-5 md:pb-5">
                <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">我们将识别具体缺口——语言、技术深度、合规引用或案例研究——并提供优先改进清单。</p>
              </div>
            </details>
            <details className="border border-[#E5E5E5] bg-white">
              <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">这包含展会准备吗？</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="px-4 pb-4 md:px-5 md:pb-5">
                <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">展会支持是独立服务，但客户验证成果直接决定参加哪些展会、接触哪些买家。</p>
              </div>
            </details>

            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              相关阅读
            </h2>
            <ul className="space-y-2 mb-8">
          <li><Link to="/zh/services" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">全部服务</Link></li>
          <li><Link to="/zh/responsibility-chain" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">责任链</Link></li>
          <li><Link to="/zh/insights/qu-dao-kai-fa-bu-shi-qun-fa-you-jian" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">渠道开发不是群发邮件</Link></li>
          <li><Link to="/zh/insights/zhan-hui-bu-shi-qu-bai-tan" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">参展不是去摆摊</Link></li>
          <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">联系 CCBONLINE</Link></li>

            </ul>
          </div>
        </section>

        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                想了解更多关于进入准备的内容？
              </h2>
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">预约初步沟通</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
