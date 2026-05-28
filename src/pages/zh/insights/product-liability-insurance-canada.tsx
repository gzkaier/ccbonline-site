import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: '加拿大产品责任险：为什么你需要它｜产品责任｜CCBONLINE',
    description: '进入加拿大市场的中国制造商必须了解产品责任险的重要性。本文解释产品责任险的覆盖范围、法律要求和选择建议。',
    canonical: 'https://www.ccbonline.ca/zh/insights/product-liability-insurance-canada',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '加拿大产品责任险：为什么你需要它｜产品责任｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">产品责任</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              加拿大产品责任险：为什么你需要它
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>阅读时间：约 6 分钟</span>
              <span>·</span>
              <span>产品责任险｜加拿大法规｜风险管理｜制造商责任</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                很多中国制造商在进入加拿大市场时，把全部注意力放在产品认证和清关上，却忽略了产品责任险这个关键议题。在北美，产品责任诉讼可能让企业付出远超预期的代价，而保险是风险管理的必要组成部分。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                加拿大的产品责任法律环境
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                加拿大实行严格的产品责任制度。这意味着，即使制造商没有过失，如果产品存在缺陷并导致损害，制造商仍可能需要承担责任。这与很多其他司法管辖区的&quot;过失责任&quot;原则有显著区别。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                在加拿大，产品责任诉讼可以由消费者、使用者甚至旁观者提起。赔偿范围包括医疗费用、收入损失、疼痛和痛苦，以及在某些情况下的惩罚性赔偿。这些赔偿金额可能非常高，足以让一家中小企业破产。
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                产品责任险覆盖什么
              </h2>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">人身伤害和财产损失</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">产品缺陷导致的消费者伤害或第三方财产损失是产品责任险的核心覆盖范围。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">法律辩护费用</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">即使没有最终责任，辩护产品责任诉讼的律师费用也可能高达数十万加元。保险可以覆盖这些费用。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">和解和判决金额</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">保险公司会负责与原告谈判和解，或在庭审后支付判决金额，最高到保单限额。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">召回费用（部分保单）</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">某些产品责任险可以附加产品召回保险，覆盖因安全问题召回产品产生的费用。</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                谁需要产品责任险
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                以下情况强烈建议购买产品责任险：
              </p>
              <div className="space-y-3">
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>直接向加拿大终端用户销售产品</strong> — 没有中间商缓冲，制造商直接面对消费者。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>产品涉及安全风险</strong> — 电子电器、儿童用品、建材、食品、医疗器械等高风险类别。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>通过零售商或分销商销售</strong> — 大多数加拿大零售商会要求供应商提供产品责任险证明。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>在北美有实体存在</strong> — 加拿大本地实体更容易成为诉讼的直接目标。</p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                选择产品责任险的关键考量
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-2">保额限额</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">每次事故限额和年度总限额。加拿大市场通常建议每次事故至少200万加元。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-2">覆盖地域</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">确认保单覆盖加拿大全境，以及是否需要覆盖美国。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-2">免赔额</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">每次索赔中企业需要自己承担的金额。免赔额越低，保费越高。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-2"> retroactive date</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">追溯日期决定了保险覆盖多早之前销售的产品。</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                写在最后
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                产品责任险不是可选项，而是进入加拿大市场的必要准备。它保护的不只是你的财务安全，还有你在北美市场的长期声誉和业务可持续性。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                在选择产品责任险时，建议咨询专业的保险经纪人，确保保单真正覆盖你的产品和市场。最便宜的保单往往不是最好的选择——关键是当索赔发生时，保险是否真的能提供保护。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <h3 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">相关服务</h3>
            <div className="space-y-3">
              <Link to="/zh/services/compliance-responsibility-chain" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">合规与责任链梳理</span>
                  <p className="text-[13px] text-[#767676] mt-1">全面梳理你的产品责任、合规义务和保险需求</p>
                </div>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">了解 →</span>
              </Link>
              <Link to="/zh/services/product-compliance" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">产品合规咨询</span>
                  <p className="text-[13px] text-[#767676] mt-1">确保你的产品符合加拿大安全标准和法规要求</p>
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
              <Link to="/zh/insights/product-liability-chain" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">产品责任链：从生产到终端客户的完整路径</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读 →</span>
              </Link>
              <Link to="/zh/insights/shipping-without-ior-risks" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">没有IOR就发货：你可能低估了风险</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读 →</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">需要产品责任险咨询？</h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">我们可以帮你评估产品责任风险，推荐合适的保险方案，并协助对接加拿大本地保险资源。</p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">联系我们</Link>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
