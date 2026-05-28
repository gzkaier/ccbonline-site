import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: 'IOR（进口责任主体）：为什么比清关更重要｜IOR与责任链｜CCBONLINE',
    description: '很多企业把 IOR 理解成"帮忙清关的人"，这其实低估了它的责任。IOR 是 Importer of Record，中文通常理解为进口记录主体或进口责任主体。它关系到申报、产品合规、税费、责任边界和后续追溯，不是一个简单物流动作。',
    canonical: 'https://www.ccbonline.ca/zh/insights/ior-importer-of-record-explained',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = 'IOR（进口责任主体）：为什么比清关更重要｜IOR与责任链｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">IOR与责任链</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              IOR（进口责任主体）：为什么比清关更重要
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>阅读时间：约 6 分钟</span>
              <span>·</span>
              <span>IOR｜进口责任主体｜清关｜产品责任｜北美市场进入</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                很多企业把 IOR 理解成"帮忙清关的人"，这其实低估了它的责任。IOR 是 Importer of Record，中文通常理解为进口记录主体或进口责任主体。它关系到申报、产品合规、税费、责任边界和后续追溯，不是一个简单物流动作。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[700px]">
            <div className="prose-content">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                很多企业进入加拿大或美国市场时，会把清关当成一个物流环节。货发出去，找个清关公司，资料交过去，货能进来，好像事情就完成了。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                但真正需要企业提前想清楚的，不只是"谁帮我清关"，而是"谁作为进口责任主体"。
              </p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">IOR 不只是清关</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                IOR 是 <strong className="font-medium">Importer of Record，进口记录主体 / 进口责任主体</strong>。它不是一个简单名义，也不是随便找人挂一下就可以。IOR 关系到进口申报、税费、记录保存、合规责任、后续核查和责任追溯。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                在加拿大，CBSA（Canada Border Services Agency，加拿大边境服务局）明确说明，Importer of Record 是其核查的主要联系对象，并对后续报关义务承担直接责任，包括记录保存、必要更正和关税支付等事项。在美国，CBP（U.S. Customs and Border Protection，美国海关与边境保护局）也强调进口方与海关共同承担合规责任，进口人需要对申报、分类、估价和相关要求保持合理注意。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                这就是为什么 IOR 比"清关"更重要。清关是动作。IOR 是责任安排。
              </p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">常见问题</h2>
              <ul className="space-y-3 mb-8">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">谁负责进口申报？</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">谁支付关税和税费？</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">产品分类和申报价值由谁确认？</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">如果后续被核查，谁回应海关？</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">如果产品涉及合规、标签、认证或安全问题，谁承担责任？</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">如果客户退货、投诉或召回，责任链怎么追溯？</li>
              </ul>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">更稳的做法</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                <strong>先确认销售模式</strong>：是直销、代理、分销、平台销售，还是海外仓备货？
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                <strong>再确认进口主体</strong>：谁具备作为 IOR 的条件？谁愿意承担后续责任？
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                <strong>然后确认资料准备</strong>：商业发票、装箱单、产品说明、HS 编码、申报价值、标签、认证、保险、售后安排是否清楚？
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                <strong>最后确认责任边界</strong>：企业、进口商、渠道商、服务商和客户之间的责任如何划分？
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
                IOR 问题看起来偏操作，但本质上是市场进入问题。如果企业只关注"货能不能进来"，忽略"责任由谁承担"，后面可能会在渠道合作、合规核查、保险、售后和客户信任上付出更高成本。
              </p>
            </div>

            <div className="mt-10 p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3 text-[#212121]">相关服务</h3>
              <div className="space-y-2">
                                <Link to="/zh/services/market-entry-diagnosis" className="block text-[14px] text-[#00B894] hover:underline">北美市场进入初步诊断 →</Link>
                <Link to="/zh/services/local-service-connection" className="block text-[14px] text-[#00B894] hover:underline">本地服务资源连接 →</Link>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link to="/zh/insights/seo-vs-geo-difference" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors">
                <span className="text-[12px] text-[#767676] block mb-1">上一篇</span>
                <span className="text-[14px] font-medium text-[#212121]">SEO vs GEO：区别、联系与应对</span>
              </Link>
              <Link to="/zh/insights/canada-market-size-worth-it" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors">
                <span className="text-[12px] text-[#767676] block mb-1">下一篇</span>
                <span className="text-[14px] font-medium text-[#212121]">加拿大市场规模：到底值不值得进入</span>
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
