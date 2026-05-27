import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_LogisticsCustomsImportDiagnosis() {
  useSEO({
    title: '北美物流、清关与进口责任路径诊断 | CCBONLINE INC.',
    description:
      '不是物流报价，也不是货代推荐。在正式发货前，帮你理清物流路径、清关责任、IOR、贸易条款、海外仓、退货售后和本地承接关系。',
    canonical: 'https://www.ccbonline.ca/zh/services/logistics-customs-import-diagnosis',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '北美物流、清关与进口责任路径诊断 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* 1. Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">发货前判断</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              北美物流、清关与进口责任路径诊断
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic mb-8">
              不是物流报价，也不是货代推荐。在正式发货前，帮你理清物流路径、清关责任、IOR、贸易条款、海外仓、退货售后和本地承接关系——让你在找物流之前，先知道自己应该怎么发、谁来负责、风险在哪。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/zh/contact"
                className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px] text-center"
              >
                提交产品信息，先判断路径
              </Link>
              <Link
                to="/zh/contact"
                className="btn-secondary inline-block text-[15px] px-8 py-3.5 min-h-[52px] text-center"
              >
                预约一次发货前诊断
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            {/* 2. 为什么不能只问物流价格 */}
            <div className="mb-14">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                为什么不能只问物流价格
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                很多企业在准备发货时，第一件事是找几家物流公司比价，选个报价最低的。但问题是——在还没搞清楚自己的货物应该怎么进、由谁负责清关、用什么贸易条款、目的地有没有合规要求之前，物流报价本身几乎没有参考价值。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                更常见的情况是：货已经到港了，才发现需要某个认证；或者货物被海关扣了，才知道进口责任（IOR）不是自己签个字就能解决的；又或者物流商说"包清关"，出了问题才发现"包"的范围远远小于自己的实际需求。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                物流价格只是整个进口链路中可见度最高的一个数字。真正决定你能不能顺利发货、货物能不能安全入库、售后能不能处理的，是价格背后的路径设计、责任分配和风险前置判断。
              </p>
            </div>

            {/* 3. 我们帮助企业判断什么 */}
            <div className="mb-14">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                我们帮助企业判断什么
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-5">
                CCBONLINE 不是物流公司，不直接承运货物。我们做的是在正式发货前，帮企业把路径、资料、责任和服务商匹配方向先理清楚。具体包括：
              </p>
              <ul className="space-y-4">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">
                  <strong className="font-medium text-[#212121]">物流路径与运输方式</strong>{' '}
                  —
                  你的货物适合海运、空运还是联运？整柜还是拼箱？是否需要特殊温控或包装？目的地是港口、机场还是直接到仓？
                </li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">
                  <strong className="font-medium text-[#212121]">进口责任（IOR）归属</strong>{' '}
                  —
                  谁作为法定进口人承担清关责任？是你自己、你的北美客户、还是第三方代理？不同选择对税务、合规和售后有什么影响？
                </li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">
                  <strong className="font-medium text-[#212121]">贸易条款选择</strong>{' '}
                  —
                  DDP、DAP、FOB、CIF……哪种条款对你的产品类别、客户关系和风险承受能力最合适？条款决定了谁负责什么，不是随便选的。
                </li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">
                  <strong className="font-medium text-[#212121]">清关资料与合规前置</strong>{' '}
                  —
                  你的产品进北美需要哪些文件？HS编码是否正确？是否需要原产地证、FDA、FCC、UL
                  或其他认证？资料不齐全的后果是什么？
                </li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">
                  <strong className="font-medium text-[#212121]">海外仓与最后一公里</strong>{' '}
                  —
                  货物清关后去哪？是否需要海外仓？谁负责入库、质检、贴标和发货给最终客户？你的客户对交付时效有什么预期？
                </li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">
                  <strong className="font-medium text-[#212121]">退货与售后承接</strong>{' '}
                  —
                  如果客户退货，货物退到哪？谁来处理？退货流程在北美和中国之间的成本差异有多大？有没有本地承接方？
                </li>
              </ul>
            </div>

            {/* 4. 适合哪些企业 */}
            <div className="mb-14">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                适合哪些企业
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">
                  准备首次向北美发货，但不确定从哪个港口/机场进入、需要什么资料的企业
                </li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">
                  被物流公司给出不同报价方案，看不懂差异、不知道哪种适合自己的企业
                </li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">
                  听说"包税包清关"但心里没底，想知道这句话背后实际覆盖了什么、没覆盖什么的企业
                </li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">
                  产品涉及认证要求（电子、食品接触、建材、医疗器械等），担心清关时被扣或退运的企业
                </li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">
                  客户要求DDP交付，但企业不确定自己能否承担进口责任和税务风险的企业
                </li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">
                  已经在北美有客户或仓库，但退货和售后链路没有理顺、每次退货成本很高的企业
                </li>
              </ul>
            </div>

            {/* 5. 交付内容 */}
            <div className="mb-14">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                你会收到什么
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">
                    物流路径与运输方式建议
                  </p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">
                    基于你的产品特性、时效要求和预算范围，建议最优运输方式和入境口岸/机场
                  </p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">
                    IOR（进口责任人）判断与责任分配说明
                  </p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">
                    明确谁应该作为法定进口人，不同选择对税务、合规和售后关系的具体影响
                  </p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">
                    贸易条款（Incoterms）选择建议
                  </p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">
                    建议适合你产品类别和客户关系的贸易条款，明确买卖双方的责任分界点
                  </p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">
                    清关资料清单与合规缺口筛查
                  </p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">
                    列出清关所需全部文件，标注你已具备的和尚缺的，以及缺项的获取路径
                  </p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">
                    海外仓与售后链路建议
                  </p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">
                    货物清关后的去向建议、海外仓需求判断、退货处理路径和本地承接方向
                  </p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">
                    服务商匹配方向（非具体推荐）
                  </p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">
                    你应该找什么类型的服务商（清关行、物流公司、海外仓运营商、IOR代理），以及筛选时应该关注什么
                  </p>
                </div>
              </div>
            </div>

            {/* 6. 我们不做什么 / 服务边界 */}
            <div className="mb-14">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                我们不做什么
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-5">
                这项服务的目的是帮你在找物流、发货、签约之前，先把逻辑理顺。它不是物流代理服务，也不替代任何合规或法律专业意见。具体而言：
              </p>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#767676]">
                  <strong className="font-medium text-[#212121]">我们不承运货物</strong>{' '}
                  —
                  CCBONLINE 不是物流公司，没有运输资质，不直接操作货物的海运、空运或陆运
                </li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#767676]">
                  <strong className="font-medium text-[#212121]">我们不代理清关</strong>{' '}
                  —
                  我们不作为报关行或清关代理操作任何海关申报。我们可以告诉你清关需要什么、责任怎么分，但具体的清关操作需要由持证清关行完成
                </li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#767676]">
                  <strong className="font-medium text-[#212121]">我们不承诺"包过"或"最低价"</strong>{' '}
                  —
                  任何承诺"包税包过""最低价物流""保证清关"的表述都不属于我们的服务范围。进口是合规行为，没有包过的捷径
                </li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#767676]">
                  <strong className="font-medium text-[#212121]">我们不替代律师或认证机构</strong>{' '}
                  —
                  如果你的产品需要法律意见书、强制性认证申请或合规标签设计，我们会指出方向，但具体的法律文件和认证申请需要由对应专业机构完成
                </li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#767676]">
                  <strong className="font-medium text-[#212121]">我们不直接推荐具体服务商</strong>{' '}
                  —
                  我们会告诉你应该找什么类型的服务商、筛选时关注什么标准，但不会指定某一家物流公司或清关行。最终的服务商选择由你根据自
                </li>
              </ul>
            </div>

            {/* 7. 联系方式 / 资料提交入口 */}
            <div className="mb-12 p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-3">
                如何开始
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-5">
                你只需要提供产品基本信息（品类、材质、用途、目标市场）和一次 30-45
                分钟的线上沟通。我们会基于你的产品特性，判断物流路径、清关责任和进口链路中的关键节点，并给出明确的方向建议。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-5">
                <Link
                  to="/zh/contact"
                  className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px] text-center"
                >
                  提交产品信息，先判断路径
                </Link>
                <Link
                  to="/zh/contact"
                  className="btn-secondary inline-block text-[15px] px-8 py-3.5 min-h-[52px] text-center"
                >
                  预约一次发货前诊断
                </Link>
              </div>
              <p className="text-[13px] text-[#666] leading-[1.6] italic">
                如果你的资料不完整，不用担心。我们会告诉你缺什么、怎么补，不会因此拒绝服务。诊断本身就是为了帮你发现还没意识到的问题。
              </p>
            </div>

            {/* 与其他服务的关系 */}
            <div className="mb-12 p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-3">
                诊断之后，通常会走向哪里
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                物流与进口责任路径诊断的输出会告诉你"应该怎么进、由谁负责"。接下来通常需要验证"能不能做到"。多数客户在完成诊断后会选择以下路径之一：
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                  •
                  如果诊断显示需要{' '}
                  <strong className="font-medium">先梳理合规和责任链</strong>{' '}
                  → 进入{' '}
                  <Link
                    to="/zh/services/compliance-responsibility-chain"
                    className="text-[#00B894] hover:underline"
                  >
                    合规与责任链搭建
                  </Link>
                </li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                  •
                  如果诊断显示{' '}
                  <strong className="font-medium">客户和渠道尚未验证</strong>{' '}
                  → 进入{' '}
                  <Link
                    to="/zh/services/customer-channel-validation"
                    className="text-[#00B894] hover:underline"
                  >
                    客户与渠道验证
                  </Link>
                </li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                  • 如果物流路径已清晰、合规已梳理、客户已验证 → 直接进入{' '}
                  <Link
                    to="/zh/services/local-execution-support"
                    className="text-[#00B894] hover:underline"
                  >
                    本地执行支持
                  </Link>{' '}
                  或{' '}
                  <Link
                    to="/zh/services/advisory-retainer"
                    className="text-[#00B894] hover:underline"
                  >
                    顾问式长期陪跑
                  </Link>
                </li>
              </ul>
              <p className="text-[14px] text-[#666] leading-[1.6] italic">
                你不需要预先决定下一步。诊断报告中会附带明确的阶段建议，你可以根据自身节奏选择推进方式。
              </p>
            </div>

            {/* CTA */}
            <div className="p-6 md:p-8 bg-[#212121] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">
                发货前先理清路径，比事后补救成本低得多
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                大多数企业在物流上花的冤枉钱，不是因为选了贵的物流商，而是因为发货前没想清楚应该怎么发。花 30 分钟做一次诊断，避免未来几个月的退货、扣关和纠纷成本。
              </p>
              <Link
                to="/zh/contact"
                className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]"
              >
                预约发货前诊断
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
