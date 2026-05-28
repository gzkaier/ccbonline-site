import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: '展会选择：不是每个展都值得去｜服务商与活动报道｜CCBONLINE',
    description: '展会不是越多越好。企业参展前要判断目标客户是否匹配、现场资源是否有效、展后跟进是否能承接、资料和报价是否准备好。否则展会很容易变成一次昂贵的曝光。',
    canonical: 'https://www.ccbonline.ca/zh/insights/trade-show-selection-strategy',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '展会选择：不是每个展都值得去｜服务商与活动报道｜CCBONLINE'
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
              展会选择：不是每个展都值得去
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>阅读时间：约 5 分钟</span>
              <span>·</span>
              <span>展会｜客户开发｜活动报道｜北美市场进入｜展后跟进</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                展会不是越多越好。企业参展前要判断目标客户是否匹配、现场资源是否有效、展后跟进是否能承接、资料和报价是否准备好。否则展会很容易变成一次昂贵的曝光。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[700px]">
            <div className="prose-content">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">很多企业进入新市场时，会把展会当成重要动作。这个判断没错。展会确实可以帮助企业快速接触客户、服务商、渠道方、行业组织和本地市场信息。但问题是：不是每个展都值得去。</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">参展前需要判断的六个问题</h2>
              <h3 className="text-[16px] font-semibold text-[#212121] mb-2 mt-6">第一个问题：观众是否是你的目标客户？</h3>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">很多展会看起来热闹，但观众结构不一定适合你的产品。有些展适合品牌曝光，有些适合招商，有些适合终端零售，有些适合专业买家。如果你的目标客户是工程采购，却去了一个以普通消费者为主的展会，转化自然不会高。</p>
              <h3 className="text-[16px] font-semibold text-[#212121] mb-2 mt-6">第二个问题：资料是否准备好？</h3>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">展会现场时间很短。客户不会花很久听你解释所有背景。你需要准备清楚的公司介绍、产品资料、英文版本、价格区间、样品政策、认证状态、应用场景、联系方式和后续跟进方式。</p>
              <h3 className="text-[16px] font-semibold text-[#212121] mb-2 mt-6">第三个问题：现场沟通是否有分层？</h3>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">不是每个来聊天的人都是客户。有些是潜在买家，有些是服务商，有些是同行，有些只是随便看看。企业应该在现场快速记录对方身份、需求、意向等级和下一步动作。否则展后拿着一堆名片，很快就不知道该先跟谁联系。</p>
              <h3 className="text-[16px] font-semibold text-[#212121] mb-2 mt-6">第四个问题：展后跟进是否设计好？</h3>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">很多展会线索不是现场成交，而是展后 7 天、14 天、30 天逐步推进。如果展后没有邮件、资料包、报价模板、会议安排和客户分层，展会热度很快就过去。</p>
              <h3 className="text-[16px] font-semibold text-[#212121] mb-2 mt-6">第五个问题：参展目标是否现实？</h3>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">如果企业把一次展会的目标设成"马上拿很多订单"，往往会失望。更现实的目标可能是：验证客户反馈、测试产品表达、收集渠道信息、认识服务商、建立本地曝光、获取初步线索、拍摄内容素材和形成后续文章报道。</p>
              <h3 className="text-[16px] font-semibold text-[#212121] mb-2 mt-6">第六个问题：展会内容能不能复用？</h3>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">一次展会不应该只发生在现场。它可以变成公众号文章、视频号内容、LinkedIn动态、小红书图文、官网新闻、客户邮件、服务商合作素材和媒体报道。如果企业只把展会当成两天摆摊，就浪费了很多后续价值。</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">展会不是简单"去不去"的问题</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">展会不是简单"去不去"的问题。更应该问：这个展适合我的阶段吗？现场客户是不是我要的人？我的资料能不能承接客户？我有没有展后跟进机制？这次展会能否形成长期内容和信任资产？参展成本和预期收益是否匹配？</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">展会有价值，但它不是万能动作。如果准备不足，展会只是一次曝光。如果准备充分，它可以成为市场验证、客户开发、内容传播和本地连接的综合入口。</p>
            </div>

            <div className="mt-10 p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3 text-[#212121]">相关服务</h3>
              <div className="space-y-2">
                                <Link to="/zh/services/trade-show-follow-up" className="block text-[14px] text-[#00B894] hover:underline">展会前北美客户承接包 →</Link>
                <Link to="/zh/services/market-entry-diagnosis" className="block text-[14px] text-[#00B894] hover:underline">北美市场进入初步诊断 →</Link>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link to="/zh/insights/how-to-evaluate-local-service-providers" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors"><span className="text-[12px] text-[#767676] block mb-1">同栏目</span><span className="text-[14px] font-medium text-[#212121]">如何评估一个本地服务商是否靠谱</span></Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
              这篇文章对你有帮助？
            </h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
              如果你正在考虑进入加拿大或北美市场，可以先提交现有官网或公司介绍，做一次初步判断。
            </p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">预约初步沟通</Link>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
