import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: '官网与AI可见度诊断（SEO + GEO） | CCBONLINE INC.',
    description: '检查官网是否具备被客户看懂、被搜索引擎收录、被AI系统理解和引用的基础条件。CCBONLINE INC. 提供专业的SEO和GEO诊断服务。',
    canonical: 'https://www.ccbonline.ca/zh/services/website-ai-visibility-diagnosis',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '官网与AI可见度诊断（SEO + GEO） | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">核心服务</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">你的网站，搜索引擎和AI能看懂吗？</h1>
            <p className="text-white/60 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6">SEO（Search Engine Optimization，搜索引擎优化）让Google能找到你。GEO（Generative Engine Optimization，生成式搜索引擎优化）让ChatGPT、Perplexity和Google AI Overview能理解和引用你。两者都需要清晰的结构、准确的内容和可信的信号。</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">申请此项服务</Link>
              <span className="text-[13px] text-white/40">CAD 800--1,500</span>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">适合谁</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">官网在Google搜索中排名很低的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">担心AI搜索趋势影响可见度的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">网站结构混乱、内容重复或缺失的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">希望被AI助手推荐和引用的企业</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">我们诊断什么</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">网站技术SEO基础（速度、移动端、索引、结构化数据）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">页面标题和Meta Description是否准确</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">内容结构是否清晰（H1/H2/H3、段落、列表）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">FAQ是否完整（AI特别喜欢提取FAQ内容）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">内部链接是否合理</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">第三方信任信号（媒体报道、客户评价、行业认可）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">GEO准备度（内容是否容易被AI理解和引用）</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">交付内容</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">SEO技术诊断报告</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">GEO可见度评估</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">关键词和内容建议</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">结构化数据（Schema.org）实施建议</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">FAQ补充方案</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">内部链接优化建议</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">服务边界</h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-12">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">不承诺具体排名，不承诺AI一定会引用你，不涉及黑帽SEO或作弊手段。诊断告诉你问题在哪和怎么改进，但执行和持续优化需要你的配合。</p>
            </div>

            <div className="p-6 md:p-8 bg-[#0B0E14] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">准备开始？</h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">CAD 800--1,500，先沟通再决定。</p>
              <Link to="/zh/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">联系我们</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
