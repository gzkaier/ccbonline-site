import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: 'SEO vs GEO：区别、联系与应对｜AI可见度与GEO｜CCBONLINE',
    description: 'SEO 关注搜索引擎能否找到你，GEO 更关注生成式 AI 能否理解、提取和引用你。对企业来说，未来的网站内容不能只堆关键词，还要让公司介绍、服务页面、FAQ、案例和第三方信息更清楚、更一致、更容易被机器理解。',
    canonical: 'https://www.ccbonline.ca/zh/insights/seo-vs-geo-difference',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = 'SEO vs GEO：区别、联系与应对｜AI可见度与GEO｜CCBONLINE'
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
              SEO vs GEO：区别、联系与应对
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>阅读时间：约 7 分钟</span>
              <span>·</span>
              <span>SEO｜GEO｜AI可见度｜官网内容结构</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                SEO 关注搜索引擎能否找到你，GEO 更关注生成式 AI 能否理解、提取和引用你。对企业来说，未来的网站内容不能只堆关键词，还要让公司介绍、服务页面、FAQ、案例和第三方信息更清楚、更一致、更容易被机器理解。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[700px]">
            <div className="prose-content">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                过去企业做网站优化，最常听到的是 SEO。SEO 是 <strong className="font-medium">Search Engine Optimization，搜索引擎优化</strong>。简单说，就是让你的网站更容易被 Google 等搜索引擎发现、理解和展示。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                现在又出现了一个新词：GEO。GEO 是 <strong className="font-medium">Generative Engine Optimization，生成式搜索引擎优化</strong>。它关注的不只是搜索引擎能不能找到你，而是 ChatGPT、Perplexity、Google AI Overview 这类 AI 回答系统，能不能理解你的内容，并在合适的问题里提取、引用或总结你的信息。
              </p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">SEO 仍然重要，GEO 是升级</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                这不是说 SEO 不重要了。恰恰相反，SEO 仍然是基础。没有清楚的网站结构、页面标题、内容主题、内部链接和可信信息，AI 系统也很难准确理解你。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                但 GEO 提醒企业：以后网站内容不能只为"关键词排名"服务，还要为"被理解"服务。
              </p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">很多企业官网现在的问题</h2>
              <ul className="space-y-3 mb-8">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">公司介绍很长，但没有一句清楚说明到底服务谁</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">服务页面很多口号，但没有解释具体交付</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">产品页面有参数，但缺少应用场景和购买理由</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">FAQ 缺失，客户常见问题没有结构化回答</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">官网、LinkedIn、Google 商家资料和媒体报道里的公司信息不一致</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">文章更新零散，没有形成清晰主题</li>
              </ul>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">更实际的做法</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                企业要做 GEO，不是追一个新概念，也不是堆"AI关键词"。更实际的做法是把官网内容整理得更清楚：每个页面有明确主题；每项服务有清楚定义；每个专业术语有解释；每类客户有对应场景；每个常见问题有直接回答；每篇文章和服务页之间有合理内部链接；公司名称、业务描述、联系方式和品牌信息保持一致。
              </p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">FAQ 变得越来越重要</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                对 B2B 企业来说，FAQ 是 <strong className="font-medium">Frequently Asked Questions，常见问题</strong>。好的 FAQ 不只是客服工具，它能帮助客户快速理解服务边界，也能帮助搜索引擎和 AI 系统抓取更明确的问答内容。
              </p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">SEO 和 GEO 的关系</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                SEO 和 GEO 的关系不是替代，而是升级。SEO 解决"能不能被找到"。GEO 进一步解决"能不能被理解、被提取、被信任"。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                企业现在要做的，不是马上追逐所有新工具，而是先把官网、服务页、公司介绍、FAQ、案例和外部信息整理清楚。如果客户看不懂你，AI 大概率也看不懂你。如果客户找不到你的核心价值，AI 也很难准确表达你的价值。
              </p>
            </div>

            <div className="mt-10 p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3 text-[#212121]">相关服务</h3>
              <div className="space-y-2">
                                <Link to="/zh/services/website-ai-visibility-diagnosis" className="block text-[14px] text-[#00B894] hover:underline">官网与AI可见度诊断 →</Link>
                <Link to="/zh/services/seo-geo-optimization" className="block text-[14px] text-[#00B894] hover:underline">SEO与GEO优化服务 →</Link>
                <Link to="/zh/services/website-content-for-service-providers" className="block text-[14px] text-[#00B894] hover:underline">官网与商业内容诊断 →</Link>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link to="/zh/insights/why-buyers-dont-contact" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors">
                <span className="text-[12px] text-[#767676] block mb-1">上一篇</span>
                <span className="text-[14px] font-medium text-[#212121]">为什么客户看了你的官网却不联系</span>
              </Link>
              <Link to="/zh/insights/ior-importer-of-record-explained" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors">
                <span className="text-[12px] text-[#767676] block mb-1">下一篇</span>
                <span className="text-[14px] font-medium text-[#212121]">IOR（进口责任主体）：为什么比清关更重要</span>
              </Link>
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
