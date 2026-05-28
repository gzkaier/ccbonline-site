import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: 'FAQ不只是客服工具，更是销售工具｜品牌可信度｜CCBONLINE',
    description: 'FAQ页面不仅能减少客服工作量，更能在购买决策的关键时刻消除客户疑虑、建立信任、加速转化。本文解析如何将FAQ转化为销售工具。',
    canonical: 'https://www.ccbonline.ca/zh/insights/faq-as-sales-tool',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = 'FAQ不只是客服工具，更是销售工具｜品牌可信度｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">品牌可信度</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              FAQ不只是客服工具，更是销售工具
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>阅读时间：约 6 分钟</span>
              <span>·</span>
              <span>FAQ｜销售转化｜客户信任｜B2B营销</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                大多数企业把FAQ当作&quot;减少客服工作量&quot;的工具——回答常见问题，让客户自助查询。但在B2B购买决策中，FAQ的作用远不止于此。一个精心设计的FAQ可以在关键时刻消除客户疑虑、建立信任、甚至直接推动转化。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                FAQ在购买决策中的作用
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                B2B购买决策通常涉及多轮评估和多部门参与。在这个过程中，潜在客户会产生大量具体问题：产品是否符合我们的规格？支持哪些认证？交付周期是多长？售后服务如何？
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                如果这些问题不能在官网上快速找到答案，客户有两个选择：发邮件询问（增加了 friction），或者离开网站去找竞争对手（失去了机会）。FAQ的作用就是在客户产生疑问的那一刻，立即提供清晰、可信的答案。
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                销售型FAQ vs. 客服型FAQ
              </h2>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">客服型FAQ</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">聚焦操作性问题：如何重置密码？如何下载发票？如何更改订单？这些问题服务于现有客户，目的是减少客服工作量。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#00B894]">
                  <h4 className="font-semibold text-[15px] mb-1">销售型FAQ</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">聚焦购买决策问题：你们服务哪些行业？最小订单量是多少？是否支持定制化？付款方式有哪些？这些问题服务于潜在客户，目的是消除购买障碍。</p>
                </div>
              </div>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mt-4">
                两种FAQ都需要，但它们服务的对象和目的不同。销售型FAQ应该放在产品页面、定价页面和联系页面的显著位置，而不是 buried 在帮助中心里。
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                销售型FAQ的内容框架
              </h2>
              <div className="space-y-3">
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>产品适配性</strong> — &quot;你们的产品适合XX行业/应用场景吗？&quot;这类问题帮助客户快速判断产品是否匹配他们的需求。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>合规和认证</strong> — &quot;产品是否通过CSA/UL/ISO认证？&quot;合规问题往往是B2B采购的硬性门槛，提前回答可以节省双方时间。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>定制能力</strong> — &quot;是否支持OEM/ODM？定制周期是多长？&quot;对于中国制造商来说，定制能力是核心竞争优势，应该在FAQ中突出。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>价格和订单</strong> — &quot;最小订单量是多少？批量折扣如何？&quot;价格敏感度高的客户会主动寻找这些信息。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>交付和物流</strong> — &quot;交付周期是多长？支持哪些物流方式？&quot;交付能力是采购决策的重要考量因素。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>售后和支持</strong> — &quot;保修期是多长？技术支持如何？&quot;售后承诺直接影响客户的信任度和长期合作意愿。</p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                写好销售型FAQ的技巧
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-2">用客户的语言提问</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">不要写&quot;产品规格参数&quot;，要写&quot;你们的产品是否符合我的需求？&quot;</p>
                </div>
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-2">直接回答，不绕弯子</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">第一句话就给核心答案，然后补充细节。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-2">适当展示差异化</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">在回答中自然融入你的竞争优势，但不要过度推销。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-2">引导下一步行动</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">在答案结尾引导客户采取下一步：&quot;如需具体方案，请联系我们的销售团队。&quot;</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                写在最后
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                FAQ是官网上最容易被低估的销售工具。它不需要复杂的技术，不需要大量的投入，但可以在客户决策的关键时刻发挥重要作用。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                重新审视你的FAQ页面，从&quot;客服工具&quot;的角度转变为&quot;销售工具&quot;的角度，你会发现很多提升转化的机会。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <h3 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">相关服务</h3>
            <div className="space-y-3">
              <Link to="/zh/services/website-content-for-service-providers" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">网站内容策划</span>
                  <p className="text-[13px] text-[#767676] mt-1">专业的网站内容策划，包括FAQ设计和优化</p>
                </div>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">了解 →</span>
              </Link>
              <Link to="/zh/services/business-reason-credibility-diagnosis" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">购买理由与可信度诊断</span>
                  <p className="text-[13px] text-[#767676] mt-1">评估你的网站和FAQ是否有效支撑购买决策</p>
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
              <Link to="/zh/insights/why-faq-matters-for-ai" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">AI搜索时代，FAQ为什么变得更重要</span>
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
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">想优化你的FAQ页面？</h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">我们可以帮你从销售转化的角度重新设计FAQ内容和结构，让它成为真正的销售工具。</p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">联系我们</Link>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
