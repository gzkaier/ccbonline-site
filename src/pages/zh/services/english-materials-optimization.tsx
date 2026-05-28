import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: '英文资料与服务页优化 | CCBONLINE INC.',
    description: '不是简单翻译，而是让北美客户看得懂的商业表达重构。CCBONLINE INC. 帮助中国企业把公司介绍、产品资料重构成北美客户看得懂、信得过的英文商业内容。',
    canonical: 'https://www.ccbonline.ca/zh/services/english-materials-optimization',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '英文资料与服务页优化 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">核心服务</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">不是翻译，而是让北美客户看得懂的商业表达</h1>
            <p className="text-white/60 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6">很多中国企业的英文资料"语法正确但商业不通"。我们做的不是中英对照翻译，而是从北美买家的认知习惯、决策逻辑和信任要素出发，重新组织你的服务表达。</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">申请此项服务</Link>
              <span className="text-[13px] text-white/40">CAD 1,800--3,500</span>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">适合谁</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">有中文资料但需要英文版本的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">现有英文资料但客户反馈"看不懂"的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">准备开发北美客户需要重新写英文介绍的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">官网英文页面需要重写的企业</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">我们优化什么</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">公司介绍</strong>（Company Profile）-- 是否说清楚了购买理由和可信度</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">服务页面</strong>（Services）-- 是否以客户视角组织，而非内部功能罗列</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">产品描述</strong>（Product Descriptions）-- 是否有 Features + Benefits 双层结构</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">FAQ</strong>（Frequently Asked Questions）-- 是否覆盖北美客户常见疑虑</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">案例和客户故事</strong>（Case Studies）-- 是否有具体场景和可信细节</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">合作流程和下一步</strong>（How to Work With Us）-- 客户知道怎么开始吗</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">邮件模板和开场白</strong>（Email Templates）-- 是否有效引导继续沟通</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">交付内容</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">英文公司介绍（1页，可直接使用）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">核心服务英文描述（每个服务1段）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">FAQ英文版（8-15个，覆盖常见客户疑虑）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">客户沟通邮件模板（3-5个场景）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">官网英文页面结构和文案建议</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">服务边界</h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-12">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">不包含完整网站开发，不承诺成交效果。需要客户提供中文基础资料和产品信息。优化后的文案需要客户确认后使用。</p>
            </div>

            <div className="p-6 md:p-8 bg-[#0B0E14] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">准备开始？</h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">CAD 1,800--3,500，根据资料量和工作范围定价。</p>
              <Link to="/zh/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">联系我们</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
