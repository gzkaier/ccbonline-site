import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_3PLWarehousingAdvisory() {
  useSEO({
    title: '加拿大3PL筛选与仓库运营审计 | 中加商业在线 CCBONLINE INC.',
    description: '帮助中国制造商系统性评估加拿大第三方物流合作伙伴，审计仓库运营能力，确保仓储物流基础设施支持市场进入计划。',
    canonical: 'https://www.ccbonline.ca/zh/services/3pl-warehousing-advisory',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '加拿大3PL筛选与仓库运营审计 | 中加商业在线 CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">本地运营</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              加拿大3PL筛选与仓库运营审计
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              系统性评估加拿大第三方物流合作伙伴和仓库运营能力，确保你的仓储物流基础设施真正支持市场进入计划——而不是在签约后才发现运营缺口。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            {/* 服务定义 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                这是什么服务
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                一项面向中国制造商的实用评估服务，帮助你在签约前选择合适的加拿大3PL（第三方物流）合作伙伴，并审计仓库运营能力。我们自己不运营仓库，也不提供物流服务。我们做的是评估、审计和建议——让你基于运营事实而不是销售承诺做出决策。
              </p>
            </div>

            {/* 适合谁 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                适合哪些企业
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">首次需要在加拿大建立仓储和履约能力的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">正在评估多个3PL合作伙伴但不知道如何比较的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">正在设立加拿大本地库存，需要了解履约成本和SLA结构的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">当前3PL合作出现问题，需要独立评估的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">需要理解货代、3PL和4PL区别后再做基础设施决策的企业</li>
              </ul>
            </div>

            {/* 解决什么问题 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                解决什么问题
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                很多中国制造商进入加拿大时，仅凭价格或一次销售对话就签了3PL合同，没有充分了解运营能力、技术限制、隐性成本和SLA（服务水平协议）缺口——这些问题最终可能损害客户关系。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                一个无法满足你的产品收货要求、缺乏适当库存追踪或包装标准不足的仓库，给你带来的损失可能远大于选择一个稍贵但运营可靠的合作伙伴。我们的审计在签约前评估能力，避免这些运营失败。
              </p>
            </div>

            {/* 我们具体做什么 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                我们具体做什么
              </h2>
              <ul className="space-y-4">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">需求定义</strong> — 根据你的产品特性、订单量预测、渠道策略（B2B还是B2C）和特殊处理需求（温控、危险品、超大件）定义3PL要求</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">合作伙伴识别</strong> — 识别3-5家符合你需求、地理位置和运营规模的加拿大3PL提供商</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">仓库运营审计</strong> — 现场或远程评估收货、仓储、库存管理、拣货、包装、发货和退货处理流程</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">技术系统评估</strong> — 评估WMS（仓库管理系统）、EDI/API能力、报告功能和与你现有系统的集成</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">合同与SLA审核</strong> — 评估定价结构、最低承诺、责任覆盖、绩效指标和终止条款</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">对比评分卡</strong> — 在运营、财务和战略维度上对候选合作伙伴进行并排评估</li>
              </ul>
            </div>

            {/* 交付物 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                你会收到什么
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">3PL需求文档</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">详细的仓储和履约要求规格，用于供应商评估</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">合作伙伴评估评分卡</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">在运营、技术和商业维度上对候选3PL的结构化比较</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">仓库审计报告</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">涵盖收货、仓储、库存准确性、拣货、包装和发货的运营能力评估</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">技术能力评估</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">系统、集成、报告能力和技术路线图的评估</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">合同审核意见</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">3PL合同中识别出的关键条款、风险和谈判要点（非法律意见，最终合同请法律专业人士审核）</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">实施路线图</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">与选定3PL合作伙伴对接的时间表和关键里程碑</p>
                </div>
              </div>
            </div>

            {/* 边界 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                这项服务不替代什么
              </h2>
              <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0]">
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                  中加商业在线不运营仓库，不提供物流服务，也不代表你谈判合同。我们不替代货代、报关行或法律顾问。我们的角色是评估和建议。合同谈判和法律审核应由合格的法律专业人士完成，货运和清关需要持牌报关行。
                </p>
              </div>
            </div>

            {/* 相关页面 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                相关服务
              </h2>
              <ul className="space-y-2">
                <li><Link to="/zh/services" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">全部服务</Link></li>
                <li><Link to="/zh/services/compliance-responsibility-chain" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">合规与责任链梳理</Link></li>
                <li><Link to="/zh/services/local-execution-support" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">本地执行支持</Link></li>
                <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">联系中加商业在线</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">常见问题</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              你可能想问的问题
            </h2>
            <div className="space-y-3 mb-10">
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">3PL和货代有什么区别？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">货代安排货物从A点到B点的运输。3PL提供仓储、库存管理、订单履约，以及增值服务如配套、贴标和退货处理。如果你需要在加拿大持有库存并向客户发货，你需要的是3PL，不仅仅是货代。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">仓库审计通常涵盖什么？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">我们评估收货流程、仓储条件、库存准确性、拣货和包装质量、发货程序、退货处理、技术系统、人员配置和运营指标。审计可以现场进行或远程进行，取决于你的需求和预算。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">加拿大3PL服务通常多少钱？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">加拿大3PL定价因服务、货量和地点差异很大。典型组成包括收货费、仓储费（按托盘或立方米）、每单拣货包装费、运费和账户管理费。我们帮助你在评估过程中理解总成本结构并识别隐性费用。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">你们保证找到合适的3PL合作伙伴吗？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">不保证。我们提供结构化评估和独立评估来提高你的决策质量，但最终选择在你。我们能保证的是：你会更清楚地了解自己的选项，在签约前知道运营风险在哪里。</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                正在评估加拿大3PL合作伙伴？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                告诉我们你的产品、预计货量和渠道策略。我们会帮你定义需求并系统评估合作伙伴。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">申请3PL评估支持</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
