import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZHWebsiteCredibilityAudit() {
  useSEO({
    title: '官网与商业可信度诊断｜客户为什么看了你的网站却不联系｜CCBONLINE',
    description: 'CCBONLINE 提供专业的官网与商业可信度诊断服务。不是检查网站漂不漂亮，而是诊断客户看不看得懂、信不信、有没有购买理由、下一步联系入口是否清晰。从 CAD 299 起。',
    canonical: 'https://www.ccbonline.ca/zh/services/website-credibility-audit',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '官网与商业可信度诊断｜客户为什么看了你的网站却不联系｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">核心服务</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              客户为什么看了你的网站却不联系
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6">
              大多数 B2B 官网的问题不是"设计不好看"，而是没有回答客户真正想问的三个问题：你是谁？你服务谁？我为什么现在联系你？我们的诊断不检查配色和排版，而是检查商业信任链是否完整。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">预约可信度诊断</Link>
              <Link to="/zh/contact" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>提交官网做初步判断</Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              可信度诊断不是网站设计评审
            </h2>
            <div className="space-y-4 mb-10">
              <div className="pl-4 border-l-2 border-[#D4AF37]">
                <h4 className="font-semibold text-[15px] mb-1">我们诊断什么</h4>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">首页是否 3 秒内传达核心价值；服务描述是否以客户问题为导向；是否有明确的购买理由和差异化表达；联系入口是否按客户类型设计；英文表达是否像本地商业沟通而非翻译腔；FAQ 是否覆盖客户真实疑问；SEO 和 AI 可见度基础是否到位。</p>
              </div>
              <div className="pl-4 border-l-2 border-[#00B894]">
                <h4 className="font-semibold text-[15px] mb-1">我们不做什么</h4>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">不 redesign 网站、不改配色排版、不做视觉设计、不承诺搜索排名、不提供万能模板。</p>
              </div>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              诊断内容框架
            </h2>
            <div className="space-y-3 mb-10">
              {[
                { area: '首页信任链', check: '3秒内能否传达"你是谁、服务谁、为什么可信"' },
                { area: '服务表达', check: '描述的是客户问题还是你的功能列表' },
                { area: '购买理由', check: '客户能否快速找到"为什么选择你而非竞争对手"' },
                { area: '社会证明', check: '案例、客户、认证、数据是否可信且可验证' },
                { area: '联系路径', check: '不同客户类型是否有对应的下一步行动入口' },
                { area: '英文表达', check: '是否像北美商业沟通，而非翻译或中式英文' },
                { area: 'FAQ 覆盖', check: '是否回答了售前客户真正会问的问题' },
                { area: '搜索可见度', check: '标题、描述、结构是否利于搜索引擎和 AI 理解' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <span className="text-[#D4AF37] text-[13px] font-medium shrink-0 w-24">{item.area}</span>
                  <span className="text-[14px] text-[#444] leading-[1.6]">{item.check}</span>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              适合谁 / 不适合谁
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <div className="space-y-3">
                <h4 className="font-semibold text-[15px] text-[#00B894]">适合</h4>
                {[
                  '加拿大本地华人企业想进入主流市场',
                  '准备参展、开发客户的中国供应商',
                  '有官网但转化率低的 B2B 企业',
                  '准备做 SEO/GEO 前先理清内容架构',
                  '需要英文资料重建的出口企业',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#00B894] mt-0.5 shrink-0">✓</span>
                    <span className="text-[14px] text-[#444] leading-[1.6]">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-[15px] text-[#999]">不适合</h4>
                {[
                  '只想找最低价建站的',
                  '希望 redesign 视觉设计的',
                  '没有官网也没有任何资料的',
                  '期望诊断后直接承诺排名的',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-[#999] mt-0.5 shrink-0">—</span>
                    <span className="text-[14px] text-[#767676] leading-[1.6]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              价格与交付
            </h2>
            <div className="space-y-4 mb-10">
              <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-[16px]">官网与资料快速体检</h4>
                  <span className="text-[#D4AF37] font-medium">CAD 299</span>
                </div>
                <p className="text-[14px] text-[#444] leading-[1.6]">已有官网和英文资料，但不确定客户看完是否愿意联系。1 个工作日内输出核心问题清单和优先级建议。</p>
              </div>
              <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-[16px]">商业可信度深度诊断</h4>
                  <span className="text-[#D4AF37] font-medium">CAD 800–1,500</span>
                </div>
                <p className="text-[14px] text-[#444] leading-[1.6]">覆盖首页、服务页、关于页、联系路径、FAQ、英文表达、SEO/AI 可见度 8 个维度。输出完整诊断报告 + 优化建议 + 重写样段。</p>
              </div>
              <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-[16px]">北美买家信任资料包</h4>
                  <span className="text-[#D4AF37] font-medium">CAD 1,800–3,500</span>
                </div>
                <p className="text-[14px] text-[#444] leading-[1.6]">把企业内部介绍重构成北美买家看得懂、信得过、方便继续沟通的资料包。含一页纸介绍、服务说明、FAQ 和邮件模板。</p>
              </div>
            </div>

            <div className="p-6 bg-[#0B0E14] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[22px] mb-3">不确定是否需要诊断？</h3>
              <p className="text-white/60 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                提交你的官网链接，我们先做免费初步判断。不收费，不推销，只告诉你问题在哪。
              </p>
              <Link to="/zh/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">提交官网做判断</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
