import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: '本地服务资源连接 | CCBONLINE INC.',
    description: 'CCBONLINE INC. 围绕加拿大和北美市场进入的落地需求，连接清关、物流、仓储、认证、法律、财税、保险和渠道合作资源。',
    canonical: 'https://www.ccbonline.ca/zh/services/local-service-connection',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '本地服务资源连接 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">核心服务</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">进入北美市场，不只需要判断，还需要本地承接</h1>
            <p className="text-white/60 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6">我们不做清关、不做物流、不做认证。但我们知道谁做得好、谁适合你当前阶段。我们根据你的需求，帮你连接合适的本地服务资源，并协助沟通推进。</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">咨询资源连接</Link>
              <span className="text-[13px] text-white/40">按需求报价</span>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">适合谁</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">需要清关和IOR（Importer of Record，进口责任主体）安排的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">需要本地仓储和物流的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">需要产品认证（CSA/UL/FCC/ISED）的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">需要法律和财税咨询的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">需要保险和售后服务的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">需要渠道合作和活动资源的企业</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">我们连接什么</h2>
            <ul className="space-y-3 mb-12">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">清关代理与IOR服务</strong> -- 进口责任主体安排、清关文件准备</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">物流与仓储</strong> -- 第三方物流、仓库租赁、库存管理</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">产品认证机构</strong> -- CSA、UL、FCC、ISED等认证</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">法律与财税顾问</strong> -- 公司注册、税务、合规、合同</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">保险服务</strong> -- 产品责任险、货物运输险</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">本地营销与渠道</strong> -- 代理商、分销商、零售商</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">展会与活动资源</strong> -- 展会报名、展位设计、活动策划</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">服务边界</h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-12">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">不承诺服务商一定合适。我们与服务商没有独家合作或利益分成。最终合同和付费由你和服务商直接对接。我们的角色是识别、匹配和协助沟通，不是担保。</p>
            </div>

            <div className="p-6 md:p-8 bg-[#0B0E14] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">咨询资源连接</h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">告诉我们你的需求，我们帮你匹配合适的资源。</p>
              <Link to="/zh/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">联系我们</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
