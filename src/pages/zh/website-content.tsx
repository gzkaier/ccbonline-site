import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZH_WebsiteContent() {
  useSEO({
    title: '中英双语官网与商业内容优化 | 中加商业在线 CCBONLINE INC.',
    description: 'CCBONLINE 帮助中国企业和本地服务商为加拿大及北美市场打造可信的双语网站与商业内容。中英双语内容策划与优化。',
    canonical: 'https://www.ccbonline.ca/zh/website-content',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '中英双语官网与商业内容优化 | 中加商业在线 CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">网站与内容</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[40px] leading-[1.25] tracking-tight max-w-[860px] mb-4">
              中英双语官网与商业内容优化
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              中英文网站内容、服务信息和信任材料 —— 为北美商业受众和双语客户群体精心组织。
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              服务内容
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
              一项内容开发服务，将您的网站、服务描述和商业材料组织成清晰、可信的沟通体系。我们服务两类不同的客户：需要为西方商业受众适配英文内容的中国企业，以及需要中英文双语内容以服务多元化客户群体的北美本地专业服务机构。
            </p>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              我们不替代网站开发人员或营销机构。我们专注于内容层 —— 您的网站说什么、怎么说、是否对阅读者建立起信任。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              两类服务场景
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
              <div className="p-5 md:p-6 border border-[#00A884] bg-white">
                <h3 className="text-[16px] md:text-[17px] font-semibold mb-3 text-[#00A884]">场景 A：中国企业进入北美</h3>
                <p className="text-[14px] text-[#444] leading-[1.7] mb-3">
                  您已有中文网站、产品文档和公司材料。您需要英文版本，能够向北美买家可信地传达信息 —— 不只是翻译，而是适配西方商业惯例。
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">面向北美商业读者的英文网站内容</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">符合西方采购期望的服务描述</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">公司简介、案例研究和能力陈述</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">回应北美买家关切的 FAQ 内容</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 border border-[#C9A44C] bg-white">
                <h3 className="text-[16px] md:text-[17px] font-semibold mb-3 text-[#C9A44C]">场景 B：本地服务商服务双语客户</h3>
                <p className="text-[14px] text-[#444] leading-[1.7] mb-3">
                  您是本地专业服务机构（税务、保险、物流、法律、咨询），在加拿大或美国同时服务英语和中文客户群体。您的网站需要以两种语言清晰沟通。
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#C9A44C]">信息一致的双语服务页面</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#C9A44C]">适配两种文化背景的信任材料</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#C9A44C]">回应两组语言群体问题的 FAQ</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#C9A44C]">可复用于手册、社交媒体和邮件的内容</li>
                </ul>
              </div>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              六大内容模块
            </h2>
            <div className="space-y-4 mb-10">
              <div className="flex gap-4 items-start">
                <span className="text-[#C9A44C] text-[13px] font-medium shrink-0 mt-1">01</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">服务定位与信息传递</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">明确您服务谁、解决什么问题、有何不同 —— 用目标受众能理解的语言表达。</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-[#C9A44C] text-[13px] font-medium shrink-0 mt-1">02</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">网站页面结构与文案</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">首页、服务页面、关于页面、FAQ 和联系页面，以清晰和转化为目标进行组织。</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-[#C9A44C] text-[13px] font-medium shrink-0 mt-1">03</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">信任建设材料</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">资质、案例经验、团队背景、认证和流程描述，以建立访客信心为目标进行呈现。</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-[#C9A44C] text-[13px] font-medium shrink-0 mt-1">04</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">双语内容协调</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">中英文版本有效传达同一信息 —— 不是逐字翻译，而是等效沟通。</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-[#C9A44C] text-[13px] font-medium shrink-0 mt-1">05</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">多渠道内容延伸</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">网站内容转化为服务手册、LinkedIn 帖子、邮件模板和客户跟进文档。</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <span className="text-[#C9A44C] text-[13px] font-medium shrink-0 mt-1">06</span>
                <div>
                  <h4 className="text-[15px] font-medium mb-1">持续内容优化</h4>
                  <p className="text-[14px] text-[#555] leading-[1.6]">FAQ 更新、服务描述调整、案例补充和季节性内容，随业务发展持续迭代。</p>
                </div>
              </div>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              交付内容
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {[
                '服务页面文案（英文和/或中文）',
                '首页信息与结构',
                '关于 / 团队介绍内容',
                '回应常见买家问题的 FAQ',
                '联系页面和询盘流程建议',
                '服务手册内容',
                '社交媒体帖子模板',
                '邮件 outreach 模板',
                'Google 商家资料优化建议',
                '内容风格指南（保持一致性）',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <span className="text-[#00A884] mt-0.5 shrink-0 text-[13px]">&#10003;</span>
                  <p className="text-[14px] text-[#444] leading-[1.5]">{item}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              CCBONLINE 不替代的专业服务
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                我们不建设或托管网站、设计视觉界面，也不管理 SEO 推广活动。我们创作内容 —— 放入您网站和商业材料的文字、结构和信息传递。如果您需要网站开发或平面设计，我们可以与技术合作伙伴协调。我们的交付物是可直接发布的内容，而非已发布的网站。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              如何开始
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
              通常以 30 分钟的通话开始，讨论您的业务、现有材料、目标受众和语言需求。然后我们提出内容范围和时间线。大多数项目在初次通话后一周内启动。
            </p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px] inline-block">讨论您的内容需求</Link>
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
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">你们建设网站还是只写内容？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">我们写内容。如果您需要建设网站，我们可以推荐技术合作伙伴。我们的核心交付物是可发布的内容 —— 结构化文案、信息框架和内容体系。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">内容是翻译还是原创写作？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">是语境适配 —— 不是字面翻译。我们创作在每个语言和文化语境中有效传达相同含义的内容。中文买家和北美买家可能需要听到不同的内容，才能对您的能力得出相同结论。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">典型的内容项目需要多长时间？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">标准服务型网站（4-6 页）通常需要 2-3 周。包含双语需求和多渠道延伸的大型项目可能需要 4-6 周。时间线取决于材料 availability 和修订周期。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">是否保证带来客户询盘？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">不保证。我们提升沟通的质量和清晰度。客户询盘取决于您的市场条件、推广努力、服务质量和竞争定位。我们让您更容易被理解和信任 —— 我们不保证商业结果。</p>
                </div>
              </details>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              相关服务
            </h2>
            <ul className="space-y-2">
              <li><Link to="/zh/brand-credibility" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">品牌可信度与数字基础设施诊断</Link></li>
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
                需要为北美或双语受众提供更清晰的网站内容？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                告诉我们您现有的材料、目标受众和语言需求。我们将评估适合您情况的内容范围。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">讨论您的内容需求</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
