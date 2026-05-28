import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: 'GEO准备：内容结构比关键词更重要｜AI可见度｜CCBONLINE',
    description: '在AI搜索时代，内容结构决定了AI系统能否理解和引用你的信息。本文分享GEO（生成式引擎优化）的核心原则和实操建议。',
    canonical: 'https://www.ccbonline.ca/zh/insights/geo-content-structure-over-keywords',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = 'GEO准备：内容结构比关键词更重要｜AI可见度｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">AI可见度</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              GEO准备：内容结构比关键词更重要
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>阅读时间：约 7 分钟</span>
              <span>·</span>
              <span>GEO｜AI可见度｜内容结构｜SEO</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                传统的SEO关注关键词密度和外链数量，但AI搜索系统（如ChatGPT、Perplexity）理解内容的方式完全不同。它们更关注内容的结构清晰度、信息完整性和语义连贯性。GEO的核心不是让搜索引擎&quot;找到&quot;你，而是让AI系统&quot;理解&quot;你。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                为什么内容结构对AI更重要
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                传统搜索引擎主要依赖关键词匹配和链接分析来评估网页相关性。一个页面只要包含足够多的目标关键词，有高质量的外链指向，就有较好的排名机会。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                AI搜索系统的工作方式完全不同。它们会读取、理解、综合多个来源的内容，然后生成一个连贯的答案。这个过程要求内容不仅要包含相关信息，还要以AI能够&quot;消化&quot;的方式组织。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                简单来说：关键词帮助搜索引擎找到你，内容结构帮助AI理解你。在GEO时代，后者比前者更重要。
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                AI友好的内容结构特征
              </h2>
              <div className="space-y-6">
                <div className="p-5 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[16px] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00B894] text-white text-[12px] flex items-center justify-center shrink-0">1</span>
                    清晰的层级结构
                  </h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                    使用明确的H1、H2、H3层级，让AI系统快速理解内容的组织方式。每个section应该有一个清晰的主题，section之间应该有逻辑关联。
                  </p>
                </div>

                <div className="p-5 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[16px] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00B894] text-white text-[12px] flex items-center justify-center shrink-0">2</span>
                    自包含的信息单元
                  </h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                    每个段落或section应该相对自包含，即使被单独提取也能传达完整信息。AI系统倾向于提取和重组信息片段，而不是完整引用整篇文章。
                  </p>
                </div>

                <div className="p-5 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[16px] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00B894] text-white text-[12px] flex items-center justify-center shrink-0">3</span>
                    直接回答，少绕弯子
                  </h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                    AI系统偏好直接、明确的陈述。如果用户在问&quot;什么是IOR？&quot;，最优的内容结构是第一句话就给出定义，然后再展开解释。
                  </p>
                </div>

                <div className="p-5 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[16px] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00B894] text-white text-[12px] flex items-center justify-center shrink-0">4</span>
                    一致的术语使用
                  </h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                    在同一篇文章中，对同一概念使用一致的术语。不要在段落之间切换不同的叫法，这会让AI系统困惑。
                  </p>
                </div>

                <div className="p-5 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[16px] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00B894] text-white text-[12px] flex items-center justify-center shrink-0">5</span>
                    列表和表格的合理使用
                  </h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                    AI系统特别擅长理解和提取结构化数据。用列表呈现步骤、用表格对比选项、用FAQ格式回答常见问题，都能显著提升AI的理解度。
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                GEO实操：优化你的核心页面
              </h2>
              <div className="space-y-3">
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>首页：</strong>在首屏清晰回答三个问题——你是谁？你服务谁？你为什么可信？不要只用营销语言，要用AI能理解的直接陈述。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>关于我们：</strong>包含公司背景、核心团队、服务领域、关键里程碑。用具体数据和事实代替模糊描述。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>服务页面：</strong>每个服务页面应该包含：服务定义、适用对象、服务流程、交付成果、成功案例。用结构化格式呈现。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>FAQ页面：</strong>使用标准的问答格式，问题用自然语言，答案直接完整。添加FAQPage Schema标记。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>案例页面：</strong>每个案例包含：客户背景、挑战、解决方案、成果。用数据支撑成果描述。</p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                写在最后
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                GEO不是取代SEO，而是在SEO的基础上增加一个维度——让内容不仅对搜索引擎友好，也对AI系统友好。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                对于进入北美市场的中国制造商来说，GEO是一个弯道超车的机会。你的竞争对手可能还没有意识到AI搜索的重要性，而你可以通过优化内容结构，在AI系统中获得先发优势。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <h3 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">相关服务</h3>
            <div className="space-y-3">
              <Link to="/zh/services/seo-geo-optimization" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">SEO与GEO优化</span>
                  <p className="text-[13px] text-[#767676] mt-1">帮助你的网站在搜索引擎和AI系统中获得更好的可见度</p>
                </div>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">了解 →</span>
              </Link>
              <Link to="/zh/services/website-ai-visibility-diagnosis" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">网站AI可见度诊断</span>
                  <p className="text-[13px] text-[#767676] mt-1">评估你的网站在AI搜索时代的可理解性和可引用性</p>
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
              <Link to="/zh/insights/seo-vs-geo-difference" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">SEO vs GEO：区别、联系与应对</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读 →</span>
              </Link>
              <Link to="/zh/insights/why-faq-matters-for-ai" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">AI搜索时代，FAQ为什么变得更重要</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读 →</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">想优化你的网站GEO？</h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">我们可以帮你评估网站内容的AI友好度，并提供结构优化建议，让你在AI搜索时代获得可见度优势。</p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">联系我们</Link>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
