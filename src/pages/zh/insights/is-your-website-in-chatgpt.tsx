import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: '你的网站在ChatGPT里被提到了吗｜AI可见度与GEO｜CCBONLINE',
    description: '很多企业开始关心，AI 回答行业问题时为什么没有提到自己。答案通常不在单一关键词，而在信息是否公开、清楚、一致、可验证。企业需要先让官网和外部内容具备被理解的基础。',
    canonical: 'https://www.ccbonline.ca/zh/insights/is-your-website-in-chatgpt',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '你的网站在ChatGPT里被提到了吗｜AI可见度与GEO｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">AI可见度与GEO</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              你的网站在ChatGPT里被提到了吗
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>阅读时间：约 5 分钟</span>
              <span>·</span>
              <span>AI可见度｜ChatGPT｜GEO｜官网优化｜品牌可信度</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                很多企业开始关心，AI 回答行业问题时为什么没有提到自己。答案通常不在单一关键词，而在信息是否公开、清楚、一致、可验证。企业需要先让官网和外部内容具备被理解的基础。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[700px]">
            <div className="prose-content">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">这两年，越来越多企业开始问一个新问题：客户用 ChatGPT 或其他 AI 工具搜索行业服务时，会不会看到我们？</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">这个问题背后，其实是企业获客方式正在发生变化。过去客户主要通过 Google 搜索、朋友推荐、展会、LinkedIn、行业平台找到供应商。现在，一部分客户会直接问 AI。</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">AI 是否提到你，取决于什么</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">AI 是否提到一家企业，通常取决于多个信号：官网内容是否清楚、是否有可公开索引的信息、外部是否有一致的第三方内容、公司描述是否稳定、服务定义是否明确、文章是否围绕具体主题持续更新。</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">如果一个企业官网本身就很模糊，AI 很难准确理解它。如果官网、LinkedIn、Google 商家资料、公众号、媒体报道里的公司介绍都不一致，AI 也很难形成稳定判断。</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">企业不要先问"怎样让 AI 推荐我"</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">企业不要先问"怎样让 AI 提到我"，而要先问：我有没有一个清楚的网站？我有没有明确说明自己服务谁？我有没有把服务边界讲清楚？我有没有回答客户常问的问题？我有没有持续发布围绕核心主题的内容？我的公司名称、地址、邮箱、服务描述是否一致？有没有第三方内容或媒体报道可以佐证我的存在和业务？</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">比较实际的做法</h2>
              <ul className="space-y-3 mb-8">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium">重写公司介绍</strong>。不要只写"专业、领先、优质、全球化"。要清楚说明你是谁、在哪、服务谁、解决什么问题。</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium">完善服务页</strong>。每项服务都要有独立页面，说明适合谁、解决什么问题、交付什么、不承诺什么、下一步怎么开始。</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium">增加 FAQ</strong>。FAQ 是 AI 最容易提取的内容之一。问题要具体，答案要直接。</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium">保持外部信息一致</strong>。官网、LinkedIn、Google Business Profile、媒体报道和社交平台上的信息要统一。</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium">持续发布有主题的内容</strong>。围绕几个核心主题长期积累。</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium">增加可验证信号</strong>。包括真实作者信息、更新时间、公司联系方式、服务边界、公开报道。</li>
              </ul>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">GEO 是 <strong className="font-medium">Generative Engine Optimization，生成式搜索引擎优化</strong>。它不是传统 SEO 的替代，而是在 SEO 基础上进一步考虑 AI 系统如何理解和提取信息。AI 可见度不是一夜之间获得的，它更像企业数字可信度的一部分。你在公开网络上留下的信息越清楚、一致、具体，AI 越有可能正确理解你。</p>
            </div>

            <div className="mt-10 p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3 text-[#212121]">相关服务</h3>
              <div className="space-y-2">
                                <Link to="/zh/services/website-ai-visibility-diagnosis" className="block text-[14px] text-[#00B894] hover:underline">官网与AI可见度诊断 →</Link>
                <Link to="/zh/services/seo-geo-optimization" className="block text-[14px] text-[#00B894] hover:underline">SEO与GEO优化服务 →</Link>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link to="/zh/insights/seo-vs-geo-difference" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors"><span className="text-[12px] text-[#767676] block mb-1">同栏目</span><span className="text-[14px] font-medium text-[#212121]">SEO vs GEO：区别、联系与应对</span></Link>
              <Link to="/zh/insights/product-liability-chain" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors"><span className="text-[12px] text-[#767676] block mb-1">下一篇</span><span className="text-[14px] font-medium text-[#212121]">产品责任链：从生产到终端客户的完整路径</span></Link>
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
