import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: '为什么客户看了你的官网却不联系｜品牌可信度｜CCBONLINE',
    description: '官网不是摆设，也不是公司资料的电子版。北美客户第一次接触一家企业时，官网往往承担初步判断的作用：你是谁、服务谁、凭什么可信、下一步怎么联系。如果这些问题没有讲清楚，流量进来之后也很难变成真正询盘。',
    canonical: 'https://www.ccbonline.ca/zh/insights/why-buyers-dont-contact',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '为什么客户看了你的官网却不联系｜品牌可信度｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">品牌可信度</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              为什么客户看了你的官网却不联系
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>阅读时间：约 5 分钟</span>
              <span>·</span>
              <span>官网可信度｜品牌可信度｜B2B转化｜购买理由</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                官网不是摆设，也不是公司资料的电子版。北美客户第一次接触一家企业时，官网往往承担初步判断的作用：你是谁、服务谁、凭什么可信、下一步怎么联系。如果这些问题没有讲清楚，流量进来之后也很难变成真正询盘。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[700px]">
            <div className="prose-content">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                很多企业会遇到一个问题：网站有了，内容也不少，但客户看完之后没有联系。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                这时候，企业通常会怀疑是不是流量不够、设计不够好、关键词不够准。这些都有可能，但更常见的问题是：官网没有回答客户真正关心的问题。
              </p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">客户在官网上做什么判断</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                客户第一次进入一个企业官网时，往往不是认真研究每一页，而是在很短时间内做初步判断：这家公司到底做什么？它适合服务我这种客户吗？它有没有真实能力？它和其他供应商有什么不同？如果合作，下一步应该怎么开始？出了问题谁负责？
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                如果这些问题在首页、服务页、产品页、案例页和联系方式里都找不到答案，客户就很容易离开。
              </p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">不是"不够漂亮"，而是"不够有判断"</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                很多企业官网的问题，不是"不够漂亮"，而是"不够有判断"。页面上写了很多公司介绍、产品参数、发展历程和口号，但客户看完还是不知道为什么要选择你。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                B2B 官网尤其如此。客户不是因为一句宣传语就下单，而是通过一组信息慢慢建立信任：公司是否真实，产品是否清楚，服务边界是否明确，有没有案例，有没有本地承接，联系方式是否可靠，沟通路径是否顺畅。
              </p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">官网可信度的核心</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                官网不是越复杂越好，也不是越多内容越好。真正重要的是让客户在几分钟内形成基本判断：我看懂了。我知道它适合谁。我知道它解决什么问题。我知道为什么可以继续聊。我知道下一步该怎么联系。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                这就是官网可信度的核心。如果官网不能完成这个任务，后面的广告、SEO、LinkedIn、展会和客户开发，都会被削弱。因为你把客户带来了，但没有给他足够理由继续往下走。
              </p>
            </div>

            <div className="mt-10 p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3 text-[#212121]">相关服务</h3>
              <div className="space-y-2">
                                <Link to="/zh/services/business-reason-credibility-diagnosis" className="block text-[14px] text-[#00B894] hover:underline">品牌可信度诊断 →</Link>
                <Link to="/zh/services/website-ai-visibility-diagnosis" className="block text-[14px] text-[#00B894] hover:underline">官网与AI可见度诊断 →</Link>
                <Link to="/zh/services/website-content-for-service-providers" className="block text-[14px] text-[#00B894] hover:underline">官网与商业内容诊断 →</Link>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link to="/zh/insights/canada-market-entry-assess-first" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors">
                <span className="text-[12px] text-[#767676] block mb-1">上一篇</span>
                <span className="text-[14px] font-medium text-[#212121]">加拿大市场进入：先判断，再行动</span>
              </Link>
              <Link to="/zh/insights/seo-vs-geo-difference" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors">
                <span className="text-[12px] text-[#767676] block mb-1">下一篇</span>
                <span className="text-[14px] font-medium text-[#212121]">SEO vs GEO：区别、联系与应对</span>
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
