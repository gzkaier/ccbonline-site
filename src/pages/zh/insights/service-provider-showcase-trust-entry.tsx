import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: '服务商展示：信任构建的起点｜服务商与活动报道｜CCBONLINE',
    description: '对于进入北美市场的中国企业，选择可靠的本地服务商是成功的关键。本文讨论如何通过服务商展示建立信任，以及选择服务商时的评估框架。',
    canonical: 'https://www.ccbonline.ca/zh/insights/service-provider-showcase-trust-entry',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '服务商展示：信任构建的起点｜服务商与活动报道｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">服务商与活动报道</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              服务商展示：信任构建的起点
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>阅读时间：约 6 分钟</span>
              <span>·</span>
              <span>服务商评估｜信任建设｜本地合作｜B2B服务</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                进入一个新市场，最困难的不是找到客户，而是建立一个可信的本地存在。对于没有北美实体的中国制造商，与可靠的本地服务商合作是建立这种存在的有效路径。但选择错误的服务商可能比没有服务商更糟糕。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                为什么服务商选择如此重要
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                中国制造商进入北美市场时，通常需要依赖多种本地服务商：物流和仓储、法律会计、营销和销售支持、产品认证、售后服务等等。这些服务商不仅是你的合作伙伴，在很多客户眼中，他们就是你的&quot;本地代表&quot;。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                一个专业、可靠的服务商网络可以弥补你没有本地实体的不足。相反，一个不靠谱的服务商会损害你的品牌信誉，甚至带来法律风险。选择服务商不是单纯的采购决策，而是战略决策。
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                服务商评估框架
              </h2>
              <div className="space-y-6">
                <div className="p-5 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[16px] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00B894] text-white text-[12px] flex items-center justify-center shrink-0">1</span>
                    行业经验和专业能力
                  </h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                    不要只看服务商的宣传材料，要深入了解他们服务过的客户、处理过的项目、以及在你所在行业的具体经验。一个做零售物流的服务商可能不懂工业品的仓储要求。
                  </p>
                </div>

                <div className="p-5 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[16px] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00B894] text-white text-[12px] flex items-center justify-center shrink-0">2</span>
                    客户参考和口碑
                  </h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                    要求服务商提供至少2-3个客户参考，主动联系这些客户了解真实的服务体验。在LinkedIn上搜索服务商的评价和推荐。
                  </p>
                </div>

                <div className="p-5 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[16px] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00B894] text-white text-[12px] flex items-center justify-center shrink-0">3</span>
                    沟通能力和响应速度
                  </h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                    在正式合作前，通过几次沟通测试服务商的响应速度、沟通质量和对需求的理解能力。这往往是合作成功的关键指标。
                  </p>
                </div>

                <div className="p-5 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[16px] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00B894] text-white text-[12px] flex items-center justify-center shrink-0">4</span>
                    合同条款和责任界定
                  </h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                    清晰的服务范围、责任界定、服务水平和违约条款是避免未来纠纷的基础。不要被低价诱惑而忽视合同细节。
                  </p>
                </div>

                <div className="p-5 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[16px] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00B894] text-white text-[12px] flex items-center justify-center shrink-0">5</span>
                    与华人客户的合作经验
                  </h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                    有与中国企业合作经验的服务商通常更理解文化差异和沟通习惯，合作摩擦会更少。
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                如何通过服务商展示建立信任
              </h2>
              <div className="space-y-3">
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>在官网展示合作伙伴</strong> — 如果你有可靠的本地服务商网络，在官网上展示这些合作关系可以增加你的本地可信度。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>联合案例发布</strong> — 与服务商合作发布成功案例，展示你们的协作能力和服务本地客户的能力。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>本地活动联合举办</strong> — 与本地服务商联合举办研讨会、产品演示或客户活动，这既能分摊成本，又能扩大影响力。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>获取客户推荐信</strong> — 请满意的本地客户为你写推荐信或案例评价，这些第三方背书比自我宣传更有说服力。</p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                写在最后
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                选择和管理本地服务商是进入北美市场的重要课题。好的服务商不仅是你的执行伙伴，更是你品牌信誉的延伸。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                投入时间去评估、选择和管理服务商关系，这种投入会在你的北美业务发展中持续产生回报。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <h3 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">相关服务</h3>
            <div className="space-y-3">
              <Link to="/zh/services/local-service-connection" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">本地服务资源对接</span>
                  <p className="text-[13px] text-[#767676] mt-1">帮你找到经过验证的加拿大本地服务商</p>
                </div>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">了解 →</span>
              </Link>
              <Link to="/zh/services/local-execution-support" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">本地执行支持</span>
                  <p className="text-[13px] text-[#767676] mt-1">在加拿大本地为你提供市场进入的执行支持</p>
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
              <Link to="/zh/insights/how-to-evaluate-local-service-providers" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">如何评估一个本地服务商是否靠谱</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读 →</span>
              </Link>
              <Link to="/zh/insights/b2b-credibility-factors" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">B2B可信度：客户凭什么相信你</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读 →</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">需要本地服务商资源？</h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">我们可以帮你对接经过验证的加拿大本地服务商，涵盖物流、法律、营销、售后等多个领域。</p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">联系我们</Link>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
