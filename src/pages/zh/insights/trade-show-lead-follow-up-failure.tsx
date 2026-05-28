import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: '展会之后：为什么80%的线索没有跟进｜展会跟进｜CCBONLINE',
    description: '展会结束后，大多数中国制造商在两周内就失去了70-80%的展会价值。不是因为线索不好，而是因为跟进没有结构、延迟或文化不匹配。',
    canonical: 'https://www.ccbonline.ca/zh/insights/trade-show-lead-follow-up-failure',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '展会之后：为什么80%的线索没有跟进｜展会跟进｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">渠道开发</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              展会之后：为什么80%的线索没有跟进
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>阅读时间：约 7 分钟</span>
              <span>·</span>
              <span>展会跟进｜线索转化｜B2B销售｜渠道开发</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                展会不是打包展台就结束。大多数中国制造商在展会结束后的前两周就失去了70-80%的展会价值——不是因为线索不好，而是因为跟进没有结构、延迟或文化不匹配。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                48小时规则
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                北美买家期望在展会会面后48小时内收到初步跟进。不是一周后。不是回到中国后。是48小时内。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                这并不意味着你需要在48小时内提供完整方案。而是一封简短的、个性化的邮件，提到你们的对话内容，确认讨论了什么，并概述下一步。目标是在买家还记得你的展位时保持对话继续。
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                线索分级的必要性
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                不是所有线索都是平等的。展会结束后第一件事情应该是线索分级：
              </p>
              <div className="space-y-3">
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">A级：热线索</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">明确表示购买意向，讨论了具体项目或时间线，要求后续会议。这些线索需要在48小时内跟进，一周内安排深度沟通。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#00B894]">
                  <h4 className="font-semibold text-[15px] mb-1">B级：温线索</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">表达了兴趣，询问了产品信息，但没有明确的项目或时间线。适合发送详细资料，保持定期联系。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#767676]">
                  <h4 className="font-semibold text-[15px] mb-1">C级：长期培育</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">只是交换了名片，没有深入交流。加入邮件列表，定期发送有价值的内容，保持品牌存在感。</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                常见跟进错误
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-1">错误一：群发标准化邮件</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">Dear Sir/Madam 的邮件在北美B2B环境中几乎没有效果。买家能一眼看出这是模板邮件，会觉得你不重视这次交流。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-1">错误二：只发产品资料没有下一步</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">发完产品手册就结束对话是一个常见错误。每封跟进邮件都应该明确下一步是什么——&quot;我们可以在下周安排一次30分钟的电话会议来讨论您的具体需求。&quot;</p>
                </div>
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-1">错误三：跟进频率不对</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">太多或太少都会出问题。初期（展会后2-4周）每周一次是合理的，之后可以逐渐延长间隔。关键是保持节奏一致。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-1">错误四：没有记录和分析</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">没有CRM系统或简单的跟进记录，导致重复联系、遗漏线索、无法分析哪些展会或策略最有效。</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                有效的跟进结构
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                一个有效的跟进流程应该包括以下步骤：
              </p>
              <div className="space-y-3">
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>第0-2天：</strong>发送感谢邮件，提及具体对话内容，明确下一步。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>第3-7天：</strong>发送补充材料或案例研究，与对方的具体兴趣相关。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>第8-14天：</strong>提出具体的会议或演示提议，给出几个时间选项。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>第15-30天：</strong>发送有价值的内容（行业报告、相关新闻），保持联系而不显得pushy。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>30天后：</strong>转入长期培育节奏，每2-4周一次有价值的内容分享。</p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                写在最后
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                展会的高成本不仅体现在展位费和差旅上，更体现在时间投入和机会成本上。如果跟进没有系统性，这些投入的大部分就会被浪费。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                建立一个简单但有效的跟进流程，分配明确的责任人，使用适当的工具记录和追踪，这些投入会在未来的展会中持续产生回报。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <h3 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">相关服务</h3>
            <div className="space-y-3">
              <Link to="/zh/services/trade-show-follow-up" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">展会跟进服务</span>
                  <p className="text-[13px] text-[#767676] mt-1">专业的展会线索跟进和转化支持</p>
                </div>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">了解 →</span>
              </Link>
              <Link to="/zh/services/customer-channel-validation" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">客户与渠道验证</span>
                  <p className="text-[13px] text-[#767676] mt-1">验证和筛选展会获得的潜在客户和渠道伙伴</p>
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
              <Link to="/zh/insights/trade-show-selection-strategy" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">展会选择：不是每个展都值得去</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读 →</span>
              </Link>
              <Link to="/zh/insights/zhan-hui-bu-shi-qu-bai-tan" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">展会不是去摆摊</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读 →</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">展会线索需要跟进支持？</h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">我们可以帮你建立展会跟进流程，提供本地化的跟进支持，最大化展会投资回报。</p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">联系我们</Link>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
