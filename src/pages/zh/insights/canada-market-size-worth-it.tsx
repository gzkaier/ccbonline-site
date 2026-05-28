import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: '加拿大市场规模：到底值不值得进入｜中加商业观察｜CCBONLINE',
    description: '加拿大市场不一定适合所有企业，也不是所有产品都应该优先进入。它的价值不只在市场规模本身，还在于北美试点、本地信任、渠道验证、英语市场表达和后续美国市场延展。关键不是市场大不大，而是你的产品和路径是否匹配。',
    canonical: 'https://www.ccbonline.ca/zh/insights/canada-market-size-worth-it',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '加拿大市场规模：到底值不值得进入｜中加商业观察｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">中加商业观察</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              加拿大市场规模：到底值不值得进入
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>阅读时间：约 5 分钟</span>
              <span>·</span>
              <span>加拿大市场｜北美市场｜市场进入｜中加商业观察</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                加拿大市场不一定适合所有企业，也不是所有产品都应该优先进入。它的价值不只在市场规模本身，还在于北美试点、本地信任、渠道验证、英语市场表达和后续美国市场延展。关键不是市场大不大，而是你的产品和路径是否匹配。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[700px]">
            <div className="prose-content">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                很多企业评估加拿大市场时，第一反应是问：市场够不够大？
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                这个问题重要，但不够。如果只看人口和市场体量，加拿大当然不如美国。但如果从市场进入路径看，加拿大对一些企业反而有自己的价值。
              </p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">加拿大市场的独特价值</h2>
              <h3 className="text-[16px] font-semibold text-[#212121] mb-2 mt-6">北美市场的试点</h3>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                对一些产品来说，企业不一定一开始就适合直接进入美国市场。美国市场体量大，但竞争强、渠道复杂、合规和诉讼风险也更高。加拿大市场相对小一些，但可以帮助企业先验证英文资料、客户反馈、渠道接受度、售后安排和本地合作方式。
              </p>
              <h3 className="text-[16px] font-semibold text-[#212121] mb-2 mt-6">建立北美信任</h3>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                很多客户不只是看你能不能供货，也会看你是否理解本地市场、是否有本地联系人、是否有英文资料、是否能处理售后、是否有长期合作准备。加拿大本地的业务验证、媒体报道、服务商合作和客户反馈，都可能成为后续拓展北美市场的信任资产。
              </p>
              <h3 className="text-[16px] font-semibold text-[#212121] mb-2 mt-6">连接中国供应链和北美需求</h3>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                加拿大本地有大量中小企业、华人企业、服务商、采购商和行业资源。他们可能不一定自己做进口，但有市场需求、客户关系或行业入口。对中国供应商来说，这些资源有时比单纯找一个"大代理"更实际。
              </p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">但加拿大不是万能跳板</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                有些产品不适合优先进入加拿大。比如价格高度敏感、售后成本高、运输半径不划算、认证成本太高、客户教育成本太重的产品，可能不适合把加拿大作为第一站。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                有些企业也不适合一开始就投入太大。如果英文资料不清楚，官网没有可信度，产品责任和进口安排没想好，本地合作资源也没有准备，贸然参展或投广告，可能只是把问题提前暴露出来。
              </p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">四个判断问题</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                <strong>第一</strong>，你的产品是否适合加拿大客户的真实需求？
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                <strong>第二</strong>，你是否能用英文和本地客户讲清楚价值？
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                <strong>第三</strong>，你是否能处理进口、售后、保险和责任边界？
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                <strong>第四</strong>，加拿大是否能成为你进入北美市场的合理起点？
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                如果答案是肯定的，加拿大市场的价值就不只是订单，而是市场验证、信任建立和路径打样。如果答案还不清楚，就不要急着把钱花在推广上。先做判断，再行动。
              </p>
            </div>

            <div className="mt-10 p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3 text-[#212121]">相关服务</h3>
              <div className="space-y-2">
                                <Link to="/zh/services/market-entry-diagnosis" className="block text-[14px] text-[#00B894] hover:underline">北美市场进入初步诊断 →</Link>
                <Link to="/zh/services/business-reason-credibility-diagnosis" className="block text-[14px] text-[#00B894] hover:underline">品牌可信度诊断 →</Link>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link to="/zh/insights/ior-importer-of-record-explained" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors">
                <span className="text-[12px] text-[#767676] block mb-1">上一篇</span>
                <span className="text-[14px] font-medium text-[#212121]">IOR（进口责任主体）：为什么比清关更重要</span>
              </Link>
              <Link to="/zh/insights/how-to-evaluate-local-service-providers" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors">
                <span className="text-[12px] text-[#767676] block mb-1">下一篇</span>
                <span className="text-[14px] font-medium text-[#212121]">如何评估一个本地服务商是否靠谱</span>
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
