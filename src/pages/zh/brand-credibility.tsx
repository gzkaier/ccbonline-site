import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZH_BrandCredibility() {
  useSEO({
    title: '企业品牌可信度与数字基础设施诊断 | 中加商业在线 CCBONLINE INC.',
    description: 'CCBONLINE 评估中国企业在北美买家面前的数字形象呈现。网站审查、信任信号评估和市场进入前的数字准备度分析。',
    canonical: 'https://www.ccbonline.ca/zh/brand-credibility',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '企业品牌可信度与数字基础设施诊断 | 中加商业在线 CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">品牌与数字</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[40px] leading-[1.25] tracking-tight max-w-[860px] mb-4">
              企业品牌可信度与数字基础设施诊断
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              北美买家在接触您之前会查看您的网站、审阅您的材料、寻找可信度信号。我们评估您的数字形象是在支持还是削弱这种信任。
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              服务内容
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              针对中国企业在北美商业受众面前的数字形象呈现进行结构化评估。我们审查您的网站、社交媒体档案、产品文档和在线材料，对照北美买家、分销商和合作伙伴通常寻找的信任信号。输出结果是一份优先改进计划 —— 不是营销改造，而是实用的修复清单：需要修复什么、为什么重要、按什么顺序进行。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              适合哪些企业
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">准备进入北美市场、但网站和数字材料为国内市场而建的中国企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">已在产品研发和认证上投入资源，但尚未为西方买家更新数字形象的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">收到反馈称北美潜在客户"看了网站但不太确定"的管理层</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">希望在投入网站重新设计之前，了解北美买家期望哪些可信度信号的企业</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              诊断解决的问题
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
              北美买家在回复邮件或接受会面前会在线研究供应商。如果您的网站加载缓慢、缺乏清晰的服务描述、没有可验证的联系信息，或者主要使用中文，许多合格潜在客户将在您有机会交谈之前就已放弃接触。
            </p>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              问题不在于您的产品不够好。而在于您的数字基础设施未能传达您已经建立的可信度。本服务具体且实用地识别这些缺口。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              诊断范围
            </h2>
            <div className="space-y-4 mb-10">
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h3 className="text-[15px] font-semibold mb-2">网站结构与清晰度</h3>
                <p className="text-[14px] text-[#555] leading-[1.65]">首次访问者能否在 30 秒内理解您做什么、服务谁、如何联系？我们从北美买家角度评估导航、信息层级和架构。</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h3 className="text-[15px] font-semibold mb-2">信任信号存在性</h3>
                <p className="text-[14px] text-[#555] leading-[1.65]">您是否展示认证、客户参考、案例成果、团队资质、实体地址和专业协会会员资格？北美买家在接触前会寻找这些信号来验证合法性。</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h3 className="text-[15px] font-semibold mb-2">英文内容质量</h3>
                <p className="text-[14px] text-[#555] leading-[1.65]">您的英文内容是为母语者编写还是字面翻译？我们评估语气、术语、清晰度，以及您的价值主张是否有效传达。</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h3 className="text-[15px] font-semibold mb-2">联系与询盘路径</h3>
                <p className="text-[14px] text-[#555] leading-[1.65]">潜在客户能否轻松找到联系信息、提交询盘或安排通话？我们审查从发现到联系提交的完整询盘路径。</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h3 className="text-[15px] font-semibold mb-2">社交媒体与第三方存在</h3>
                <p className="text-[14px] text-[#555] leading-[1.65]">您是否有 LinkedIn 公司主页、行业目录 listing 或北美买家能够找到的第三方参考？我们评估您在自有网站之外的被发现能力。</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                <h3 className="text-[15px] font-semibold mb-2">移动端体验与技术性能</h3>
                <p className="text-[14px] text-[#555] leading-[1.65]">页面加载速度、移动端响应性和 SSL/安全指标对商业买家很重要。我们标记影响可信度的技术问题。</p>
              </div>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              交付成果
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">数字可信度评估报告</strong> —— 跨六个维度的结构化审查及具体发现</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">优先改进计划</strong> —— 先修什么、次修什么、后修什么，每项优先级附理由</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">具体问题清单及示例</strong> —— 审查中发现的具体项目，附北美买家期望的参考依据</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">竞争基准对比</strong> —— 您的数字形象与 2-3 家已在北美的同类公司的对比</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">实施指导</strong> —— 修复识别出的缺口所需的建议顺序和资源需求</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              CCBONLINE 不执行的服务
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                我们不直接建设网站、设计品牌标识或管理社交媒体账户。我们评估、诊断并提供结构化改进计划。如果您需要网站开发、品牌设计或持续的社交媒体管理，我们可以推荐专业人士。我们的角色是告诉您需要修复什么以及为什么 —— 不是亲自执行修复。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              工作流程
            </h2>
            <div className="space-y-4 mb-10">
              <div className="flex gap-4">
                <span className="text-[#C9A44C] text-[14px] font-medium shrink-0 w-6">01</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">信息收集</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">您提供网站地址、社交媒体链接、产品材料和现有英文内容。约需 15-20 分钟。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#C9A44C] text-[14px] font-medium shrink-0 w-6">02</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">结构化审查</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">我们在六个审查维度进行系统评估，通常在 5-7 个工作日内完成。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-[#C9A44C] text-[14px] font-medium shrink-0 w-6">03</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">报告交付与讲解</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">我们交付书面评估并安排 60 分钟通话，逐项讲解发现、回答问题并讨论实施优先级。</p>
                </div>
              </div>
            </div>

            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px] inline-block">申请诊断</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">常见问题</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              常见问题解答
            </h2>
            <div className="space-y-3 mb-10">
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">你们会重新设计我们的网站吗？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">不会。我们评估并提供结构化改进计划。如果您需要网站重新设计，我们可以推荐合适的合作伙伴。我们的价值在于诊断 —— 知道该修复什么以及按什么顺序。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">这与网站审核有何不同？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">典型的网站审核聚焦 SEO 和技术性能。我们的评估从北美买家角度聚焦可信度和信任信号 —— 您的数字形象是否支持商业接触，而不仅仅是搜索排名。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">可以评估 B2B 和 B2C 数字形象吗？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">可以。我们根据您的销售对象是商业客户、分销商、指定商还是终端消费者来调整评估。可信度信号因受众类型而异。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">如果我们还没有网站怎么办？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">我们可以评估您现有的数字材料 —— 产品手册、社交媒体档案、目录 listing —— 并提供可信的初始网络形象应包含什么的建议。</p>
                </div>
              </details>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              相关服务
            </h2>
            <ul className="space-y-2">
              <li><Link to="/zh/website-content" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">中英双语官网与商业内容优化</Link></li>
              <li><Link to="/zh/media-content" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">媒体报道与商业曝光服务</Link></li>
              <li><Link to="/zh/market-entry" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">加拿大及北美市场进入服务</Link></li>
              <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">联系 CCBONLINE</Link></li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                您的数字形象是否在赢得北美买家的信任？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                申请品牌可信度与数字基础设施诊断。准确了解该修复什么以及为什么。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">申请诊断</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
