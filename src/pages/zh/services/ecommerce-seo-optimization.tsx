import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: '电商产品页与SEO基础优化 | CCBONLINE INC.',
    description: 'CCBONLINE INC. 帮助跨境电商、独立站、亚马逊卖家优化产品标题、描述、FAQ和购买理由，提升电商平台的转化率和搜索可见度。',
    canonical: 'https://www.ccbonline.ca/zh/services/ecommerce-seo-optimization',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '电商产品页与SEO基础优化 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">核心服务</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">产品页不只是放图片，还需要购买理由</h1>
            <p className="text-white/60 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6">电商平台上的客户用3-5秒决定是否继续看你的产品。好的标题、清晰的描述、完整的FAQ和可信的购买理由，直接影响转化率和搜索排名。</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">申请此项服务</Link>
              <span className="text-[13px] text-white/40">CAD 800--2,500</span>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">适合谁</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">亚马逊、Etsy、Shopify卖家</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">独立站运营者</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">B2B产品需要在电商平台展示的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">产品页转化率低的商家</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">我们优化什么</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">产品标题</strong> -- 含关键词，符合平台搜索逻辑</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">产品描述</strong> -- Features + Benefits 双层结构</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">FAQ</strong>（Frequently Asked Questions） -- 覆盖客户购买前的常见疑虑</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">购买理由</strong>（Why Buy From Us） -- 差异化优势和信任信号</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">评价回复模板</strong> -- 专业、及时的客户评价回复</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">Google Business Profile</strong>优化</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">SEO标题和描述</strong> -- 搜索引擎友好的页面元数据</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">交付内容</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">优化后的产品标题和描述（5-10个产品）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">FAQ（5-10个，覆盖常见购买疑虑）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">购买理由文案（Why Buy From Us）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">评价回复模板（正面、中性、负面各1-2个）</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#D4AF37]">SEO基础建议</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">服务边界</h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-12">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">不承诺排名或销量提升。不涉及刷单或虚假评价。需要客户提供产品信息、图片和现有文案。优化后的内容需要客户在平台后台更新。</p>
            </div>

            <div className="p-6 md:p-8 bg-[#0B0E14] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">准备开始？</h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">CAD 800--2,500，根据产品数量和工作范围定价。</p>
              <Link to="/zh/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">联系我们</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
