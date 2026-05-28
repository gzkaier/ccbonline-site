import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZH_MarketEntry() {
  useSEO({
    title: '北美市场进入服务｜加拿大市场判断、合规梳理与本地承接｜CCBONLINE',
    description: 'CCBONLINE INC. 帮助准备进入加拿大和美国市场的企业判断产品适配度、认证路径、进口责任（IOR）、英文资料可信度和本地承接能力。',
    canonical: 'https://www.ccbonline.ca/zh/market-entry',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '北美市场进入服务｜加拿大市场判断、合规梳理与本地承接｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">市场进入</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              进入加拿大/北美市场之前，先判断你准备好了吗
            </h1>
            <p className="text-white/60 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6">
              很多企业在没有准备好的情况下就开始参展、找代理、做推广，钱花了不少，方向可能错了。我们的市场进入服务帮你在投入之前，看清产品适配度、认证要求、合规责任、资料准备度和渠道可行性。
            </p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">申请市场进入初步诊断</Link>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">市场进入不是简单找客户</h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-8">
              企业需要先判断能不能进入、从哪里进入、先补什么、哪些风险不能忽略。真正的问题不是"有没有客户"，而是企业是否已经搭起从合规、进口、渠道、仓储、售后到本地责任主体的完整进入路径。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">适合哪些企业</h2>
            <ul className="space-y-3 mb-10">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">计划进入加拿大或美国市场的中国制造企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">收到北美客户询盘但不清楚如何回应的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">准备参加北美展会的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">正在谈代理商或分销商的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">不确定产品是否需要CSA/UL/FCC/ISED等认证的企业</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">我们帮你判断什么</h2>
            <div className="space-y-6 mb-10">
              {[
                { num: '01', title: '产品与市场适配度', desc: '你的产品真的适合这个市场吗？规格、标准、价格带、竞争格局是否匹配？' },
                { num: '02', title: '认证与合规路径', desc: '需要哪些认证（CSA、UL、FCC、ISED）、多长时间、多少费用、先后顺序是什么。' },
                { num: '03', title: '进口责任与IOR安排', desc: '谁承担进口责任（Importer of Record）？清关怎么安排？责任边界在哪里？' },
                { num: '04', title: '英文资料与官网可信度', desc: '北美客户看了你的官网和资料会怎么想？购买理由是否清晰？可信度是否足够？' },
                { num: '05', title: '渠道与代理可行性', desc: '找代理之前需要准备什么？代理商看重什么？你的支持能力是否到位？' },
                { num: '06', title: '本地承接能力', desc: '售后、保修、退换货、客服怎么处理？有没有本地服务网络？' },
              ].map(item => (
                <div key={item.num} className="p-5 border border-[#E5E5E5] bg-[#F8F9FA]">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[#D4AF37] text-[13px] font-medium">{item.num}</span>
                    <h3 className="text-[16px] font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-[14px] text-[#444] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">相关服务</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              <Link to="/zh/services/market-entry-diagnosis" className="p-5 border border-[#E5E5E5] hover:border-[#00B894] transition-colors bg-[#F8F9FA]">
                <h3 className="text-[15px] font-semibold mb-2">北美市场进入初步诊断</h3>
                <p className="text-[13px] text-[#767676]">CAD 3,500-8,000起 · 30天启动陪跑</p>
              </Link>
              <Link to="/zh/services/business-reason-credibility-diagnosis" className="p-5 border border-[#E5E5E5] hover:border-[#00B894] transition-colors bg-[#F8F9FA]">
                <h3 className="text-[15px] font-semibold mb-2">品牌可信度诊断</h3>
                <p className="text-[13px] text-[#767676]">CAD 800-1,500</p>
              </Link>
              <Link to="/zh/services/english-materials-optimization" className="p-5 border border-[#E5E5E5] hover:border-[#00B894] transition-colors bg-[#F8F9FA]">
                <h3 className="text-[15px] font-semibold mb-2">英文资料优化</h3>
                <p className="text-[13px] text-[#767676]">CAD 1,800-3,500</p>
              </Link>
              <Link to="/zh/services/local-service-connection" className="p-5 border border-[#E5E5E5] hover:border-[#00B894] transition-colors bg-[#F8F9FA]">
                <h3 className="text-[15px] font-semibold mb-2">本地服务资源连接</h3>
                <p className="text-[13px] text-[#767676]">按需求报价</p>
              </Link>
            </div>

            <div className="p-6 md:p-8 bg-[#0B0E14] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">准备进入北美市场？</h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">先做一次初步诊断，看清条件和缺口，再决定下一步。</p>
              <Link to="/zh/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">申请初步诊断</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
