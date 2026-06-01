import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

const categories = [
  {
    title: '北美市场进入',
    desc: '关于加拿大和美国市场进入路径、合规要求、认证标准和渠道开发的深度观察。',
    insights: [
      { title: '加拿大市场进入：先判断，再行动', slug: 'canada-market-entry-assess-first', published: true },
      { title: 'IOR（进口责任主体）：为什么比清关更重要', slug: 'ior-importer-of-record-explained', published: true },
      { title: 'CSA vs UL：你的产品需要哪种认证', slug: 'csa-vs-ul-certification-guide', published: true },
      { title: '没有IOR就发货：你可能低估了风险', slug: 'shipping-without-ior-risks', published: true },
      { title: '展会之后：为什么80%的线索没有跟进', slug: 'trade-show-lead-follow-up-failure', published: true },
    ],
  },
  {
    title: '品牌可信度',
    desc: '关于企业购买理由、品牌信任建设、官网可信度和客户决策心理的实用分析。',
    insights: [
      { title: '为什么客户看了你的官网却不联系', slug: 'why-buyers-dont-contact', published: true },
      { title: '购买理由：大多数企业没想清楚的事', slug: 'purchase-rationale-clarity', published: true },
      { title: 'B2B可信度：客户凭什么相信你', slug: 'b2b-credibility-factors', published: true },
      { title: 'FAQ不只是客服工具，更是销售工具', slug: 'faq-as-sales-tool', published: true },
    ],
  },
  {
    title: 'AI可见度与GEO',
    desc: '关于SEO、GEO（生成式搜索引擎优化）、AI搜索趋势和网站内容优化的技术判断。',
    insights: [
      { title: 'SEO vs GEO：区别、联系与应对', slug: 'seo-vs-geo-difference', published: true },
      { title: '你的网站在ChatGPT里被提到了吗', slug: 'is-your-website-in-chatgpt', published: true },
      { title: 'AI搜索时代，FAQ为什么变得更重要', slug: 'why-faq-matters-for-ai', published: true },
      { title: 'GEO准备：内容结构比关键词更重要', slug: 'geo-content-structure-over-keywords', published: true },
    ],
  },
  {
    title: 'IOR与责任链',
    desc: '关于进口责任、产品责任、保险、售后保修和合规义务的深度梳理。',
    insights: [
      { title: '产品责任链：从生产到终端客户的完整路径', slug: 'product-liability-chain', published: true },
      { title: '加拿大产品责任险：为什么你需要它', slug: 'product-liability-insurance-canada', published: true },
      { title: '售后与保修：中国制造商容易忽略的事', slug: 'after-sales-warranty-overlooked', published: true },
    ],
  },
  {
    title: '中加商业观察',
    desc: '关于中加商业环境、双边贸易、供应链变化和商业趋势的独立观察。',
    insights: [
      { title: '加拿大市场规模：到底值不值得进入', slug: 'canada-market-size-worth-it', published: true },
      { title: '中美加三角：供应链重构中的机会', slug: 'supply-chain-reshuffling-opportunities', published: true },
      { title: '从加拿大看北美：进入路径的比较分析', slug: 'canada-vs-us-market-entry', published: true },
      { title: '北美采购商如何看待中国供应商', slug: 'how-north-american-buyers-view-chinese-suppliers', published: true },
    ],
  },
  {
    title: '服务商与活动报道',
    desc: '关于本地服务商、展会活动、商业合作和行业资源的报道与展示。',
    insights: [
      { title: '如何评估一个本地服务商是否靠谱', slug: 'how-to-evaluate-local-service-providers', published: true },
      { title: '展会选择：不是每个展都值得去', slug: 'trade-show-selection-strategy', published: true },
      { title: '商业媒体报道：如何最大化报道价值', slug: 'maximize-media-coverage-value', published: true },
      { title: '服务商展示：信任构建的起点', slug: 'service-provider-showcase-trust-entry', published: true },
    ],
  },
]

export default function ZHInsights() {
  useSEO({
    title: '洞察｜北美市场进入策略、品牌可信度建设、AI可见度优化｜CCBONLINE',
    description: 'CCBONLINE INC. 关于北美市场进入、品牌可信度诊断、AI可见度（SEO+GEO）、IOR与责任链、中加商业观察的专业判断与实用建议。帮助中国制造企业系统性地理解北美市场、建立品牌信任、提升数字可见度。',
    canonical: 'https://www.ccbonline.ca/zh/insights',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '洞察｜北美市场进入策略、品牌可信度建设、AI可见度优化｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">洞察</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              专业判断与实用建议
            </h1>
            <div className="max-w-[720px] mb-8 space-y-4">
              <p className="text-[16px] md:text-[17px] text-[#767676] leading-[1.65]">
                CCBONLINE 的洞察栏目围绕中国制造商进入北美市场的核心挑战展开。我们不追逐热点，而是基于实际服务经验，提供关于
                <Link to="/zh/market-entry" className="text-[#00B894] hover:underline">北美市场进入</Link>、
                <Link to="/zh/brand-credibility" className="text-[#00B894] hover:underline">品牌可信度建设</Link>、
                <Link to="/zh/website-content" className="text-[#00B894] hover:underline">AI 可见度（GEO）</Link>、
                IOR 与责任链、中加商业观察的深度分析与实用建议。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#767676] leading-[1.65]">
                每个主题下的文章既服务于人类读者的决策需求，也经过结构化设计，帮助搜索引擎和 AI 系统（如 ChatGPT、Perplexity）更准确地理解我们的专业方向和服务能力。如果你希望针对自身情况获得更具体的建议，欢迎
                <Link to="/zh/contact" className="text-[#00B894] hover:underline">联系我们</Link>，我们可以围绕你的产品、目标和资源状况提供定向分析。
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => document.getElementById(cat.title)?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-[13px] px-3 py-1.5 bg-white border border-[#E5E5E5] hover:border-[#00B894] hover:text-[#00B894] transition-colors cursor-pointer"
                >{cat.title}</button>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[900px]">
            {categories.map((cat) => (
              <div key={cat.title} id={cat.title} className="mb-12 last:mb-0 scroll-mt-[80px]">
                <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-2">{cat.title}</h2>
                <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6] mb-5">{cat.desc}</p>
                <div className="space-y-2">
                  {cat.insights.map((item) => (
                    item.published ? (
                      <Link key={item.slug} to={`/zh/insights/${item.slug}`} className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                        <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">{item.title}</span>
                        <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读文章 →</span>
                      </Link>
                    ) : (
                      <div key={item.slug} className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                        <span className="text-[14px] md:text-[15px] text-[#444]">{item.title}</span>
                        <span className="text-[13px] text-[#767676] shrink-0 ml-4">即将发布</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">想第一时间获取新内容？</h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">关注 CCBONLINE 公众号或 LinkedIn，获取关于北美市场进入、品牌可信度和AI可见度的最新判断。</p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">联系我们</Link>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
