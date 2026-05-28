import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: 'AI搜索时代，FAQ为什么变得更重要｜AI可见度｜CCBONLINE',
    description: 'ChatGPT、Perplexity等AI搜索工具正在改变用户获取信息的方式。FAQ页面成为AI系统理解企业信息的关键入口。本文解释FAQ在AI搜索时代的新价值。',
    canonical: 'https://www.ccbonline.ca/zh/insights/why-faq-matters-for-ai',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = 'AI搜索时代，FAQ为什么变得更重要｜AI可见度｜CCBONLINE'
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
              AI搜索时代，FAQ为什么变得更重要
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>阅读时间：约 6 分钟</span>
              <span>·</span>
              <span>AI搜索｜GEO｜FAQ优化｜ChatGPT</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                当用户开始在ChatGPT、Perplexity或Claude上提问而不是在Google上搜索时，企业网站的内容结构变得前所未有的重要。而FAQ页面，恰恰是AI系统最容易理解和提取信息的格式之一。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                AI搜索和传统搜索的区别
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                传统搜索引擎主要做匹配：用户输入关键词，搜索引擎返回包含这些关键词的网页链接。用户需要自己点击链接、阅读网页、提取答案。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                AI搜索（也叫生成式搜索或对话式搜索）做的是理解：用户用自然语言提问，AI系统直接生成答案。这个答案可能是综合了多个来源的信息，以对话的形式呈现。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                关键区别在于：AI搜索不直接展示你的网页，而是消化你的内容后，可能只引用其中一两句话。如果你的内容结构不清晰，AI系统可能根本&quot;看不懂&quot;你在说什么。
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                为什么FAQ格式对AI特别友好
              </h2>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">问答结构天然匹配AI训练模式</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">大型语言模型在训练时接触了大量问答形式的数据。FAQ的&quot;问题-答案&quot;结构是AI最容易理解和提取的格式之一。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">问题本身就是用户搜索查询</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">FAQ中的问题往往是用户实际会问的，这与AI搜索中用户的提问方式高度一致。匹配度越高，被引用的概率越大。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">答案通常是自包含的</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">好的FAQ答案不依赖上下文就能理解，这恰好满足AI系统提取独立信息片段的需求。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">便于结构化数据标记</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">FAQ页面最容易添加Schema.org的结构化数据标记，这帮助搜索引擎和AI系统更准确地理解内容语义。</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                什么样的FAQ对AI可见度有帮助
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                不是随便写一个FAQ页面就能被AI系统引用。以下是几个关键要素：
              </p>
              <div className="space-y-3">
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>问题要口语化</strong> — 不要写&quot;产品规格参数&quot;，要写&quot;你们的产品是否符合CSA认证？&quot;。AI搜索用户用自然语言提问，你的FAQ问题越接近真实提问方式，匹配度越高。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>答案要直接且完整</strong> — 不要绕弯子，第一句话就给核心答案，然后补充细节。AI系统倾向于提取开头部分的句子。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>覆盖客户真正关心的问题</strong> — 不要只写你想让客户知道的事，要写客户实际会问的事。售前咨询记录、客服邮件、销售反馈都是FAQ选题的重要来源。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>添加结构化数据标记</strong> — 使用FAQPage Schema标记，让搜索引擎明确知道这是问答内容，提高被AI系统引用的概率。</p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                FAQ与GEO的关系
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                GEO（Generative Engine Optimization，生成式引擎优化）是伴随AI搜索兴起的新概念。它关注的是如何让你的内容更容易被AI系统理解、提取和引用。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                FAQ页面是GEO策略的核心组件。一个精心设计的FAQ不仅能帮助人类访客快速找到答案，还能训练AI系统更准确地理解你的业务、产品和服务。在AI搜索时代，FAQ不再只是客服工具，而是企业信息架构的战略性组成部分。
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                写在最后
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                AI搜索正在快速改变用户获取信息的习惯。对企业来说，这意味着内容策略需要从&quot;让搜索引擎找到我&quot;转变为&quot;让AI系统理解我&quot;。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                FAQ页面是这个转变的最佳起点。它投资小、见效快，而且同时服务于人类访客和AI系统。如果你还没有一个精心设计的FAQ页面，现在就是最好的开始时机。
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
              <Link to="/zh/insights/is-your-website-in-chatgpt" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">你的网站在ChatGPT里被提到了吗</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读 →</span>
              </Link>
              <Link to="/zh/insights/geo-content-structure-over-keywords" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">GEO准备：内容结构比关键词更重要</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读 →</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">想优化你的FAQ和AI可见度？</h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">我们可以帮你设计和优化FAQ内容结构，提升在AI搜索系统中的可见度和引用率。</p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">联系我们</Link>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
