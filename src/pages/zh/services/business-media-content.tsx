import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: '商业媒体报道与内容合作 | CCBONLINE INC.',
    description: 'CCBONLINE INC. 为企业、服务商和活动方提供商业报道、活动报道、服务展示和内容策划，帮助企业在公开渠道建立可引用的信任资产。',
    canonical: 'https://www.ccbonline.ca/zh/services/business-media-content',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '商业媒体报道与内容合作 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">核心服务</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">让企业被看见、被理解、被引用</h1>
            <p className="text-white/60 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6">不是硬广，不是刷量，而是通过专业的商业报道、活动记录和内容策划，帮你在目标客户、搜索引擎和AI系统面前建立可验证的公开信任资产。</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">咨询内容合作</Link>
              <span className="text-[13px] text-white/40">按项目报价</span>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">适合谁</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">需要提升品牌可信度的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">参加活动或展会需要报道的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">服务商需要展示专业能力的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">商协会、活动方需要内容支持的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">希望在LinkedIn、公众号等渠道建立内容存在的企业</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">我们提供什么</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">企业报道</strong>（Company Feature）-- 以媒体视角报道企业能力和市场定位</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">活动报道</strong>（Event Coverage）-- 展会、论坛、招商会的现场报道和内容整理</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">服务商展示</strong>（Service Provider Profile）-- 帮助本地服务商建立可信的线上展示</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">商业内容策划</strong>（Content Strategy）-- 内容方向、发布节奏和渠道策略建议</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">LinkedIn / 公众号内容</strong> -- 专业社交媒体内容创作和发布</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">交付内容</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">商业报道文章（中英双语，可直接发布）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">活动报道和照片整理</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">服务商Profile页面（发布在CCBONLINE平台）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">内容策划建议和执行</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">发布和分发支持</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">服务边界</h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-12">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">不承诺阅读量或传播效果。不替代广告投放。内容需经客户确认后发布。报道基于真实信息，不接受虚假宣传要求。</p>
            </div>

            <div className="p-6 md:p-8 bg-[#0B0E14] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">咨询内容合作</h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">按项目报价，先沟通需求再定价。</p>
              <Link to="/zh/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">联系我们</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
