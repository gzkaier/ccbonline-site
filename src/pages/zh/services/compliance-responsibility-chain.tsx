import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function ZH_compliance_responsibility_chain() {
  useEffect(() => {
    document.title = '合规与责任链初筛 | CCBONLINE INC.'
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
              合规与责任链初筛
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              在进入北美前，先识别认证、进口责任、文件一致性、产品声明、仓储、售后、保险和本地责任主体等关键责任点。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-10">
              <img
                src="/images/services-compliance-responsibility-chain.jpg"
                alt="CCBONLINE 帮助中国企业进入北美市场 — 合规与责任链初筛。"
                className="w-full h-auto max-h-[400px] object-cover"
                loading="lazy"
              />
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              适合哪些企业
            </h2>
            <ul className="space-y-3 mb-10">
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">知道需要认证但不确定哪些认证及顺序的企业</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">不清楚谁应担任进口记录责任人及这意味着什么的企业</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">从货代、代理或网络来源收到矛盾建议的团队</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">希望在签约经销商或合作伙伴前了解完整责任链的企业</li>

            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              解决什么问题
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              北美市场进入涉及一条隐藏的责任链，大多数企业在出问题前看不到它。这项服务针对您的产品类别绘制合规、进口、责任和文件要求——在发货、签约或承诺之前。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              我们会看什么 / 支持什么
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              CCBONLINE 筛查与您产品和目标市场相关的认证要求，审查谁应担任进口记录责任人及涉及什么责任，检查产品声明、标签和规格的文件一致性，评估售后责任分配，并识别您需要接触的专业合作伙伴——认证实验室、报关行、保险公司、法律顾问。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              交付内容
            </h2>
            <ul className="space-y-3 mb-10">
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">认证要求初步识别</strong> — CSA、UL、FCC、FDA、Health Canada 或其他要求的识别</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">进口责任主体初判</strong> — 评估谁应担任进口记录责任人及含义</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">文件缺口清单</strong> — 北美进口和销售中缺失、不一致或不充分的具体文件</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">产品声明风险提示</strong> — 根据本地广告和产品责任标准评估营销声明</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">售后责任初判</strong> — 谁处理保修、退货、维修和备件的评估</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">专业服务商协同建议</strong> — 每个缺口应接触哪些持证专业人士的建议</li>

            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              不替代什么
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                CCBONLINE 不替代律师事务所、报关行、认证实验室、税务顾问、保险专业人士或持牌监管专业机构。我们帮助客户识别进入路径、理解关键责任点、协调合适资源并推动项目落地。我们不提供法律意见、进行认证测试或提交海关申报。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              推荐下一步
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
              联系我们，提供您的产品类别、目标市场和当前认证状态。我们将确定合规与责任链初筛是否是正确的下一步。
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
                <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">你们直接处理认证吗？</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="px-4 pb-4 md:px-5 md:pb-5">
                <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">不。我们识别需要什么认证，并协调与认可认证机构的介绍。测试和认证过程由实验室直接进行。</p>
              </div>
            </details>
            <details className="border border-[#E5E5E5] bg-white">
              <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">你们能做我们的进口记录责任人吗？</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="px-4 pb-4 md:px-5 md:pb-5">
                <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">通常不能。在大多数情况下，我们帮助您识别合适的进口记录责任人合作伙伴，或评估建立自己加拿大实体是否有意义。</p>
              </div>
            </details>
            <details className="border border-[#E5E5E5] bg-white">
              <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">初筛需要多长时间？</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="px-4 pb-4 md:px-5 md:pb-5">
                <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">聚焦初筛通常 2-3 周。具有多重认证要求的复杂产品可能需要更长时间。</p>
              </div>
            </details>
            <details className="border border-[#E5E5E5] bg-white">
              <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">如果我们已有一些认证呢？</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="px-4 pb-4 md:px-5 md:pb-5">
                <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">我们审计您现有认证的覆盖范围、在加拿大和美国的有效性，以及您预期应用的缺口。</p>
              </div>
            </details>

            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              相关阅读
            </h2>
            <ul className="space-y-2 mb-8">
          <li><Link to="/zh/services" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">全部服务</Link></li>
          <li><Link to="/zh/responsibility-chain" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">责任链</Link></li>
          <li><Link to="/zh/insights/bei-mei-shi-chang-jin-ru-ze-ren-lian" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">北美市场进入的核心，是责任链</Link></li>
          <li><Link to="/zh/insights/ior-bu-shi-dai-qing-guan" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">进口记录责任人不是代清关的人</Link></li>
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
