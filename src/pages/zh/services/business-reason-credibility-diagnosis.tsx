import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: '企业购买理由与品牌可信度诊断 | CCBONLINE INC.',
    description: '帮你看清楚：客户为什么相信你？为什么选择你？为什么现在联系你？CCBONLINE INC. 提供专业的品牌可信度诊断，不是普通品牌包装。',
    canonical: 'https://www.ccbonline.ca/zh/services/business-reason-credibility-diagnosis',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '企业购买理由与品牌可信度诊断 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">核心服务</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">客户为什么选择你？先把购买理由理清楚</h1>
            <p className="text-white/60 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6">大多数企业的官网和资料回答了"我们是什么"，但没有回答"为什么选我们"。我们帮你从买家视角重新审视：你的购买理由是否清晰、可信、有说服力。</p>
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
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">有官网但询盘转化率低的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">产品不错但客户看不出差异化的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">准备开发新客户或新市场但需要重新定位的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">官网有内容，但读起来像内部介绍而不是客户沟通的企业</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">我们诊断什么</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">购买理由是否清晰（3句话内能说清楚吗）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">可信度信号是否足够（资质、案例、客户、第三方认可）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">与同行的差异化表达（为什么选你而不是别人）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">官网首屏是否能留住客户（5秒内能看懂吗）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">客户常见疑虑是否被主动回应（FAQ、售后、保障）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">行动路径是否明确（客户知道下一步做什么吗）</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">交付内容</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">品牌可信度诊断报告（PDF）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">购买理由重构建议</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">官网首屏优化方案</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">FAQ补充建议（8-15个）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">同行对比分析</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">优先级修改清单</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">服务边界</h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-12">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">不承诺品牌知名度提升、流量增长或询盘增加。不涉及VI设计、广告创意或社媒运营。诊断是判断和建议，不是执行方案。</p>
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
