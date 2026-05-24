import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_WebsiteContentForServiceProviders() {
  useSEO({
    title: '专业服务商网站与内容建设服务｜中加商业在线',
    description: '中加商业在线帮助加拿大及北美本地专业服务商整理网站、服务说明、负责人背书、常见问题解答、可下载资料和客户沟通入口，搭建让客户看懂、信任并愿意联系的线上可信入口。',
    canonical: 'https://www.ccbonline.ca/zh/services/website-content-for-service-providers',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '专业服务商网站与内容建设服务｜中加商业在线'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* 1. Hero */}
        <section className="relative pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA] overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #00A884 1px, transparent 0)', backgroundSize: '40px 40px' }} />
          <div className="container-site relative z-10">
            <p className="text-label mb-3">内容建设</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[38px] leading-[1.25] tracking-tight max-w-[900px] mb-4 md:mb-6">
              专业服务商网站与内容建设
            </h1>
            <p className="text-[#444] text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6 md:mb-8">
              这项服务是 CCBONLINE INC. 面向加拿大及北美本地专业服务商提供的内容建设服务，重点帮助服务商把专业能力转化为可被客户理解和信任的线上表达。它与 CCBONLINE 的市场进入、合规路径、本地服务资源连接业务形成互补。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">预约沟通</Link>
              <a href="#process" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px] inline-flex items-center justify-center" onClick={(e) => { e.preventDefault(); document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' }); }}>了解服务流程</a>
            </div>
          </div>
        </section>

        {/* 2. Problems */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">常见问题</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-8 md:mb-10">
              三个这项服务解决的问题
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { num: '01', title: '客户访问了你的网站，但没看懂你做什么', desc: '很多专业服务商有真实的行业能力，但网站上的内容要么太笼统、要么太专业，客户浏览后依然不清楚你具体解决什么问题、服务流程是什么样的、为什么值得选择你。' },
                { num: '02', title: '有资质有经验，但线上表达没有建立信任', desc: '行业认证、客户案例、负责人专业背景、服务流程——这些信任要素往往散落在日常沟通记录或口头介绍里，网站没有系统呈现，客户第一次接触时无法快速建立信任感。' },
                { num: '03', title: '从"对你感兴趣"到"愿意联系你"之间缺少路径', desc: '网站没有清晰的常见问题解答、没有明确的联系入口、没有可下载的资料。客户有兴趣但不确定下一步该做什么，最终没有联系就离开了。' },
              ].map((p, i) => (
                <div key={i} className="p-5 md:p-6 border border-[#E5E5E5] hover:border-[#00A884] transition-colors bg-white">
                  <p className="text-[#C9A44C] text-[13px] font-medium mb-3">{p.num}</p>
                  <h3 className="text-[16px] md:text-[17px] font-semibold mb-3 leading-[1.5]">{p.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Who This Is For */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">服务对象</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6 md:mb-8">
              这项服务适合哪些本地专业服务商
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                '财税服务、会计师事务所、报税代理',
                '保险经纪、理财顾问、商业保险服务',
                '物流运输、仓储管理、供应链管理',
                '产品认证、质量检测、合规咨询',
                '报关清关、进出口代理、贸易服务',
                '教育培训、职业培训、商业课程',
                '移民咨询、法律服务、人力资源',
                '技术服务、IT 支持、商业数字化',
                '其他有明确服务能力但线上表达不清晰的专业机构',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-[#00A884] mt-0.5 shrink-0">&#10003;</span>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">{item}</p>
                </div>
              ))}
            </div>
            <div className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7]">
                <strong className="font-medium text-[#212121]">共同特征：</strong>已有真实服务能力和客户基础；准备参加活动、展会或社群推广；希望把网站、社交媒体和客户沟通材料统一起来；需要一个可被客户理解和信任的正式线上入口。
              </p>
            </div>
          </div>
        </section>

        {/* 4. What We Help Build */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">服务内容</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-8 md:mb-10">
              我们帮助构建什么
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                { num: '01', title: '服务定位梳理', desc: '把客户对象、服务场景、核心问题和差异化优势讲清楚。' },
                { num: '02', title: '网站内容搭建', desc: '整理首页、服务页、关于我们、常见问题、联系页等基础内容。' },
                { num: '03', title: '信任资料整理', desc: '把负责人介绍、资质、经验、合作资源、客户评价和服务流程整理成客户能理解的表达。' },
                { num: '04', title: '中英文内容表达', desc: '根据客户群体，提供中文、英文或中英双语内容。' },
                { num: '05', title: '多平台内容延展', desc: '把网站内容延展为服务手册、邮件资料、客户跟进文档和社交媒体内容。' },
                { num: '06', title: '后续内容维护', desc: '根据业务发展继续更新常见问题、案例场景、服务说明、活动内容和服务商报道。' },
              ].map((m, i) => (
                <div key={i} className="p-5 border border-[#E5E5E5] hover:border-[#00A884] transition-colors">
                  <p className="text-[#C9A44C] text-[13px] font-medium mb-2">{m.num}</p>
                  <h3 className="text-[16px] font-semibold mb-2">{m.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Deliverables */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">交付物</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6 md:mb-8">
              可交付内容
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                'Services 页面服务卡片文案',
                '独立服务详情页文案',
                '首页轻量入口文案',
                '关于我们 / 负责人介绍',
                '常见问题解答',
                '联系页与联系表单建议',
                '服务手册文案',
                '社交媒体内容文案',
                '邮件外联模板',
                'Google Business Profile 基础优化建议',
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3 bg-white border border-[#E5E5E5]">
                  <span className="text-[#00A884] mt-0.5 shrink-0 text-[13px]">&#10003;</span>
                  <p className="text-[14px] text-[#444] leading-[1.5]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Why More Than Website Building */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">核心差异</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6 md:mb-8">
              这不是简单建站，而是整理一个能承接业务的线上入口
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6 max-w-[720px]">
              客户真正需要的不是一个漂亮页面，而是一个能回答关键问题的入口：
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                '你服务谁',
                '客户为什么需要你',
                '你的服务如何分类',
                '为什么值得信任',
                '下一步怎么联系',
                '哪些内容可以继续用于社交媒体、服务手册和销售跟进',
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[#F8F9FA] border-l-2 border-[#00A884]">
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Engagement Options */}
        <section id="process" className="section-padding bg-[#07111F]">
          <div className="container-site">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">服务方案</p>
            <h2 className="font-serif text-white text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-8 md:mb-10">
              三种合作方式
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { name: '可信单页', tag: '起步', desc: '适合需要一个正式线上介绍页、准备活动推广或快速上线的服务商。一个聚焦的、建立信任的单页，让客户知道你是谁、做什么、怎么联系。', features: ['单页结构', '服务定位', '信任资料', '联系入口'] },
                { name: '标准服务页', tag: '标准', desc: '适合已经有官网，希望在现有网站中新增清晰服务页面的机构。完整的服务详情页、常见问题解答和联系流程，与现有网站风格统一。', features: ['服务详情页', '常见问题板块', '联系流程设计', '适配现有网站'] },
                { name: '网站 + 内容启动', tag: '完整', desc: '适合希望同时整理官网、社交媒体和客户沟通资料的服务商。从网站到邮件到社交的全套内容体系。', features: ['网站内容', '博客/文章文案', '客户沟通资料', '社交媒体文案'] },
              ].map((pkg, i) => (
                <div key={i} className="p-6 border border-white/10 hover:border-[#00A884]/50 transition-colors">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[#C9A44C] text-[12px] font-medium tracking-wider">{pkg.tag}</span>
                  </div>
                  <h3 className="text-white text-[18px] font-semibold mb-3">{pkg.name}</h3>
                  <p className="text-white/60 text-[14px] leading-[1.65] mb-4">{pkg.desc}</p>
                  <ul className="space-y-2">
                    {pkg.features.map((f, j) => (
                      <li key={j} className="text-white/50 text-[13px] flex items-start gap-2">
                        <span className="text-[#00A884] shrink-0">&#10003;</span>{f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Process */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">服务流程</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-8 md:mb-10">
              五步流程
            </h2>
            <div className="space-y-6">
              {[
                { num: '01', title: '初步沟通', desc: '了解业务类型、客户对象、服务范围和现有线上资料。通常 30-45 分钟。' },
                { num: '02', title: '资料收集', desc: '收集公司信息、负责人背景、资质证书、服务项目、案例、照片、二维码和联系方式。' },
                { num: '03', title: '结构梳理', desc: '重新整理服务定位、客户问题、服务分类、信任背书和转化路径。' },
                { num: '04', title: '内容制作', desc: '完成服务页面、介绍资料、常见问题解答、可下载资料和相关内容。' },
                { num: '05', title: '上线与优化', desc: '根据实际使用情况继续优化页面表达、联系入口和内容方向。' },
              ].map((step, i) => (
                <div key={i} className="flex gap-4 md:gap-6">
                  <div className="shrink-0">
                    <p className="text-[#C9A44C] text-[14px] font-medium w-[32px]">{step.num}</p>
                  </div>
                  <div className="pb-6 border-b border-[#E5E5E5]">
                    <h3 className="text-[16px] md:text-[17px] font-semibold mb-2">{step.title}</h3>
                    <p className="text-[14px] text-[#767676] leading-[1.65]">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. Good Fit / Not Right Fit */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">适合评估</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-8 md:mb-10">
              是否适合你？
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="p-6 border-l-2 border-[#00A884] bg-white">
                <h3 className="text-[16px] font-semibold mb-4 text-[#00A884]">适合</h3>
                <ul className="space-y-3">
                  {[
                    '已经有真实服务能力',
                    '愿意整理资料',
                    '希望提升线上表达和客户信任',
                    '需要正式服务页、服务手册和对外内容',
                  ].map((item, i) => (
                    <li key={i} className="text-[14px] text-[#444] leading-[1.6] flex items-start gap-2">
                      <span className="text-[#00A884] shrink-0">&#10003;</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 border-l-2 border-[#B8C0CC] bg-white">
                <h3 className="text-[16px] font-semibold mb-4 text-[#767676]">不太适合</h3>
                <ul className="space-y-3">
                  {[
                    '还没有明确服务内容',
                    '只想做一个极低价展示页',
                    '不愿意配合整理资料',
                    '希望短期内立刻大量获客',
                    '无法说明服务边界和客户对象',
                  ].map((item, i) => (
                    <li key={i} className="text-[14px] text-[#767676] leading-[1.6] flex items-start gap-2">
                      <span className="text-[#B8C0CC] shrink-0">&#10007;</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 10. 常见问题 */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">常见问题</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6 md:mb-8">
              客户常问的问题
            </h2>
            <div className="space-y-3 mb-10">
              {[
                { q: '这项服务适合哪些行业？', a: '主要面向有明确服务能力的本地专业机构，包括财税、保险、物流、认证、清关、教育、移民咨询、法律服务等领域。重点是"有服务能力但线上表达不清晰"的机构，而不是特定行业。' },
                { q: '这是建站服务吗？', a: '不完全是。CCBONLINE 不是建站公司，我们的重点是内容梳理、服务表达和信任建设。如果你已经有网站，我们帮助优化内容；如果你需要建站，我们可以协调技术资源配合。核心是"把服务讲清楚"，不是"做一个漂亮页面"。' },
                { q: '如果我已经有网站，还需要这项服务吗？', a: '很多专业服务商已有网站，但内容是模板化的、服务描述是模糊的、客户无法从网站中快速理解你具体做什么。我们帮助你重新梳理内容，让现有网站真正发挥"被客户看懂"的作用。' },
                { q: '可以做中英文双语吗？', a: '可以。根据你的客户群体，我们提供中文、英文或中英双语内容。如果客户包括本地华人和英文客户，双语表达通常是更好的选择。' },
                { q: '没有完整资料可以开始吗？', a: '可以。我们从沟通开始，逐步收集和整理资料。你不需要在开始时就准备好所有内容，我们会指导你需要准备什么、怎么准备。' },
                { q: '会帮忙做手册、社交媒体和其他营销内容吗？', a: '会的。网站内容完成后，我们会延展为服务手册、社交媒体内容、邮件模板和客户跟进资料。目标是一套可以在多个渠道中一致使用的表达。' },
                { q: '这项服务一般怎么开始？', a: '通常从一次 30 分钟的初步沟通开始，我们了解你的业务、客户和服务范围。然后我们会提出一个内容框架和资料清单，你确认后我们开始内容制作。' },
                { q: '是否承诺带来客户线索？', a: '不承诺。这项服务的核心价值是提升你的线上表达质量和客户信任度，让你更容易被理解、被记住和被联系。获客效果取决于你的服务能力、市场推广和实际运营，我们无法保证具体线索数量。' },
              ].map((faq, i) => (
                <details key={i} className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">{faq.q}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 11. CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site text-center">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">开始</p>
            <h2 className="font-serif text-white text-[22px] md:text-[28px] leading-[1.35] tracking-tight mb-4">
              让客户第一次看到你时，就能看懂你
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[600px] mx-auto mb-8">
              如果你希望把服务介绍、网站内容和客户沟通资料整理得更清楚，可以先和中加商业在线做一次初步沟通。
            </p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-8 py-3.5 min-h-[52px] inline-block">预约沟通</Link>
            <p className="text-white/40 text-[13px] mt-4">info@ccbonline.ca</p>
          </div>
        </section>

        {/* 12. Related Services */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">相关服务</p>
            <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">
              你可能还需要
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: '市场进入判断', desc: '评估你的产品和时机是否适合进入北美。', slug: 'market-entry-diagnosis' },
                { title: '合规与责任链', desc: '识别认证、进口和责任缺口，规避潜在风险。', slug: 'compliance-responsibility-chain' },
                { title: '客户与渠道验证', desc: '在进入前验证买家、渠道和外联方向。', slug: 'customer-channel-validation' },
                { title: '本地执行支持', desc: '协调进口、仓储、履约和售后支持。', slug: 'local-execution-support' },
              ].map((s, i) => (
                <Link key={i} to={`/zh/services/${s.slug}`} className="p-5 bg-white border border-[#E5E5E5] hover:border-[#00A884] transition-colors group">
                  <h3 className="text-[15px] font-semibold mb-2 group-hover:text-[#00A884] transition-colors">{s.title}</h3>
                  <p className="text-[13px] text-[#767676] leading-[1.6]">{s.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
