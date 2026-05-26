import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_SeoGeoOptimization() {
  useSEO({
    title: 'SEO与GEO优化服务 | B2B数字可见性 | 中加商业在线 CCBONLINE',
    description: '面向北美B2B企业的传统SEO与生成式引擎优化(GEO)服务。提升在Google搜索和AI助手推荐中的可见性。',
    canonical: 'https://www.ccbonline.ca/zh/services/seo-geo-optimization',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = 'SEO与GEO优化服务 | B2B数字可见性 | 中加商业在线 CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">数字可见性</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              SEO 与 GEO 优化
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              传统SEO确保你在Google搜索中被找到，GEO（生成式引擎优化）确保你在ChatGPT、Perplexity等AI助手的推荐中被引用——覆盖人工搜索和AI推荐两种发现路径。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                这是什么服务
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                一项将传统搜索引擎优化（SEO）与生成式引擎优化（GEO）结合的数字可见性服务。前者针对Google等传统搜索引擎的排名，后者针对ChatGPT、Perplexity、Gemini、Claude等AI搜索工具的引用和推荐。我们不承诺具体排名位置或流量数字。我们的目标是让你的网站和内容在结构和信息呈现上，同时满足搜索引擎和AI系统的理解逻辑，提升被找到、被引用、被推荐的可能性。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                适合谁
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">已有英文官网但搜索曝光几乎为零的中国制造商</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">担忧AI搜索趋势可能绕过传统SEO、需要提前布局GEO的B2B企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">希望在AI助手回答中被引用为信息源的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">理解数字 presence 是北美市场信任前提的进入期企业</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                转变：从只做SEO，到SEO + GEO 同步
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                传统SEO的目标是让你在Google搜索结果页排名靠前。但越来越多的B2B采购人员开始使用AI助手（ChatGPT、Perplexity、Gemini、Claude）来研究供应商、对比方案、筛选厂商。这些AI工具不只是检索网页——它们从多个来源综合答案，并引用被认为权威可靠的企业信息。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                如果你的网站和内容没有按照AI系统能理解和信任的方式组织，即使传统SEO做得还可以，你也可能对日益增长的AI搜索用户群体完全不可见。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                我们具体做什么
              </h2>

              <h3 className="text-[17px] font-semibold mb-3 text-[#212121]">传统SEO</h3>
              <ul className="space-y-3 mb-6">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">技术SEO审计</strong> — 网站结构、可抓取性、页面速度、移动端适配、索引问题的全面检查</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">关键词策略</strong> — 针对B2B采购意图的关键词研究，匹配你的产品品类和目标市场</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">页面优化</strong> — 标题标签、Meta描述、标题层级、内链结构和内容优化</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">内容架构</strong> — 按主题簇和支柱页面组织内容，让搜索引擎清晰理解你的业务结构</li>
              </ul>

              <h3 className="text-[17px] font-semibold mb-3 text-[#212121]">生成式引擎优化（GEO）</h3>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">AI可读性审计</strong> — 评估你的内容是否以AI系统能解析、理解、引用的方式组织</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">E-E-A-T信号强化</strong> — 提升Experience（经验）、Expertise（专业）、Authoritativeness（权威）、Trustworthiness（可信）四维信号</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">引用优化</strong> — 确保企业名称、资质、关键事实以AI易于引用的方式清晰呈现</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">结构化数据实施</strong> — Schema标记和结构化数据，帮助AI系统理解你的企业类型、地域和服务范围</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">内容清晰度提升</strong> — 重写关键页面，减少歧义、提升事实精确度——这些都直接影响AI的理解和引用意愿</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                交付物
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">SEO技术审计报告</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">全面的技术SEO问题评估，附优先级排序的修复建议</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">关键词策略文档</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">面向B2B的关键词地图，含搜索意图分类和内容分配方案</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">GEO就绪度评估</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">评估你当前内容的AI友好度，给出具体改进建议</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">内容优化计划</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">按优先级排序的页面优化清单，兼顾SEO和GEO双重目标</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">结构化数据实施指南</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">Schema标记推荐和实施说明</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                我们不承诺的事项
              </h2>
              <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0]">
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                  我们不承诺具体排名位置、流量数字，也不保证你的企业一定会被AI助手引用。SEO和GEO是长期工作，效果受竞争环境、内容质量、技术执行和算法更新等多重因素影响。我们承诺的是：你的网站和内容在结构和信息质量上会比之前更适合被搜索引擎和AI系统发现和引用。
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                常见问题
              </h2>
              <div className="space-y-3">
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">SEO和GEO有什么区别？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">SEO（搜索引擎优化）针对Google等传统搜索引擎，目标是提升在搜索结果页的排名。GEO（生成式引擎优化）针对AI驱动的搜索工具，这些工具从多个来源综合答案。GEO强调内容清晰度、权威信号和结构化信息，让AI系统能够理解和引用你的内容。两者互补，不是替代关系。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">多久能看到效果？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">技术SEO改进通常在数周内可见效果。内容和权威度提升一般需要2-4个月。GEO在AI助手里的可见性取决于AI系统索引和开始引用你优化后内容的速度——通常在实施后1-3个月。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">你们做网站建设吗？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">不做。我们优化现有网站在搜索引擎和AI中的可见性。如果你需要新建网站，我们可以推荐网站开发合作伙伴，并协调SEO/GEO需求的对接。</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                相关资源
              </h2>
              <ul className="space-y-2">
                <li><Link to="/zh/services/website-content-for-service-providers" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">网站与商业内容诊断 →</Link></li>
                <li><Link to="/zh/services" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">全部服务 →</Link></li>
                <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">联系 CCBONLINE →</Link></li>
              </ul>
            </div>

            <div className="p-6 md:p-8 bg-[#07111F] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">
                希望提升搜索和AI中的可见性？
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                我们评估你当前的数字 presence，给出针对性的SEO和GEO改进建议。
              </p>
              <Link to="/zh/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">
                申请 SEO/GEO 评估
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
