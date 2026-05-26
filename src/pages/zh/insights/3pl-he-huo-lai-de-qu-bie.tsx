import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_3PLHeHuoLaiDeQuBie() {
  useSEO({
    title: '3PL 和货代有什么区别？| 中加商业在线 CCBONLINE INC.',
    description: '了解第三方物流（3PL）和货运代理的区别，什么时候需要仓储履约，什么时候只需要运输服务。',
    canonical: 'https://www.ccbonline.ca/zh/insights/3pl-he-huo-lai-de-qu-bie',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '3PL 和货代有什么区别？| 中加商业在线 CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <article className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">本地运营</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[30px] md:text-[38px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              3PL 和货代有什么区别？
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              很多进入加拿大的中国制造商在其实际需要 3PL 时用了货代——或者反过来。理解差异可以避免代价高昂的运营错误。
            </p>
          </div>
        </article>

        <article className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                两种不同的服务，经常被混淆
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                <strong>货代（Freight Forwarder）</strong>安排货物从起运地到目的地的运输。他们预订货运仓位、处理文件、与承运人（空运、海运、铁路、卡车）协调。他们的工作在货物到达目的港或终点站时结束。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                <strong>3PL（第三方物流）</strong>提供仓储、库存管理、订单履约，以及增值服务如配套组装、贴标、退货处理和最后一公里配送。他们的工作在货物到达仓库后开始，只要你还在加拿大持有库存，他们就持续服务。
              </p>
              <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                <p className="text-[14px] font-medium text-[#212121] mb-2">简单区分：</p>
                <ul className="space-y-1.5">
                  <li className="text-[14px] text-[#444]"><strong>货代</strong> → 把货物从 A 点运到 B 点（运输）</li>
                  <li className="text-[14px] text-[#444]"><strong>3PL</strong> → 存储货物、管理库存、完成订单（仓储 + 履约）</li>
                </ul>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                什么时候需要货代
              </h2>
              <ul className="space-y-2">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">你需要从中国发货到加拿大或美国</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">你直接发货给客户或分销商，由他们负责收货</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">你不计划在加拿大持有库存</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">你需要清关协调（很多货代也提供报关服务）</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                什么时候需要 3PL
              </h2>
              <ul className="space-y-2">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">你需要在加拿大销售前持有库存</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">你通过电商、零售或 B2B 渠道销售，需要拣货包装履约</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">你的客户期望快速交付（1-3 天），只有本地库存才能实现</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">你需要退货处理、增值服务（贴标、配套）或库存管理</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                常见错误
              </h2>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">用货代做订单履约</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">货代通常不为最终客户拣货、包装和发货单个订单。如果你需要履约服务，你需要的是 3PL。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">期望 3PL 处理国际运输</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">大多数 3PL 聚焦国内履约。他们在仓库接收货物（通常由你或货代安排），然后负责从仓库开始的配送。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#C9A44C]">
                  <h4 className="font-semibold text-[15px] mb-1">没有明确交接点的责任归属</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">当货物从货代移交到 3PL 时，谁负责卸货、检查和损坏索赔？这必须提前定义清楚。</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                相关资源
              </h2>
              <ul className="space-y-2">
                <li><Link to="/zh/services/3pl-warehousing-advisory" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">3PL 筛选与仓库审计服务 →</Link></li>
                <li><Link to="/zh/services/local-execution-support" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">本地执行支持 →</Link></li>
                <li><Link to="/zh/insights/ior-bu-shi-dai-qing-guan" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">IOR 进口责任主体不是清关代理 →</Link></li>
                <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">联系 CCBONLINE →</Link></li>
              </ul>
            </div>

            <div className="p-6 md:p-8 bg-[#07111F] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">
                正在评估加拿大物流合作伙伴？
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                我们帮助制造商理解物流需求并系统评估履约合作伙伴。
              </p>
              <Link to="/zh/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">
                申请 3PL 评估
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer lang="en" />
    </div>
  )
}
