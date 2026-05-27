import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHResponsibilityChain() {
  useSEO({
    title: '进入北美市场的责任链：为什么能出口不等于能进入市场 | CCBONLINE INC.',
    description: '进入加拿大与北美市场不只是把产品卖出去，而是要建立清晰的责任链。了解 IOR、合规、认证、售后、保险和召回在责任链中的作用。',
    canonical: 'https://www.ccbonline.ca/zh/responsibility-chain',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '进入北美市场的责任链：为什么能出口不等于能进入市场 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">核心方法论</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              能出口不等于能进入市场，责任链是关键
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px]">
              进入加拿大与北美市场，不只是把产品卖出去，而是要建立清晰的责任链。企业需要提前判断：谁负责进口，谁负责合规，谁负责标签，谁负责售后，谁负责保险，谁负责召回，出了问题本地谁能被找到。
            </p>
          </div>
        </section>

        {/* 什么是责任链 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">定义</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[600px] mb-6 md:mb-8">
              什么是责任链
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-7">
                <p className="text-[16px] md:text-[17px] text-[#444] leading-[1.65] mb-4">
                  责任链是企业将产品带入北美市场时承担的完整义务、风险和责任体系。它在产品离开中国之前就开始，持续到产品安全到达客户手中——以及之后。
                </p>
                <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] mb-6">
                  对进入北美市场的企业来说，责任链通常在出问题前都是不可见的：海关扣留、产品召回、保修纠纷或责任索赔。我们的作用是在发货前让这条链变得可见、可管理并正确分配。
                </p>
                <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7]">
                    <strong className="font-medium text-[#212121]">关键认知：</strong>许多企业认为"能出口"就等于"能进入市场"。事实是：出口只是物流动作的完成，进入市场则意味着你要在目的地国家承担一系列法律、合规和运营责任。这两个概念之间，差着一条完整的责任链。
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="p-5 bg-[#0B0E14]">
                  <h3 className="text-white text-[16px] font-semibold mb-4">责任链涉及的环节</h3>
                  <ul className="space-y-3">
                    {[
                      '产品合规与认证',
                      '进口记录主体（IOR）安排',
                      '产品标签与说明书',
                      '海关清关与税务',
                      '仓储与物流配送',
                      '售后支持与保修',
                      '产品责任保险',
                      '召回与应急处理',
                      '本地问责主体',
                    ].map((item, i) => (
                      <li key={i} className="text-white/70 text-[14px] flex items-start gap-2">
                        <span className="text-[#00B894] shrink-0 text-[13px]">{'0' + (i + 1)}</span>{item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* IOR 详解 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">关键概念</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-6 md:mb-8">
              IOR：Importer of Record，进口记录主体 / 进口责任主体
            </h2>
            <div className="max-w-[800px]">
              <p className="text-[16px] md:text-[17px] text-[#444] leading-[1.65] mb-4">
                IOR（Importer of Record）不只是一个海关文件上的签名。它是承担法律责任的身份——对产品安全、申报准确性、监管合规负长期责任的主体。
              </p>
              <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] mb-6">
                很多企业以为找一个货代或者让收货方签个字就解决了 IOR 问题。但真正的 IOR 意味着：如果产品出了问题，监管机构知道该找谁；如果海关有疑问，有人负责解释和补充文件；如果需要召回，有本地主体承担责任。
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-white border-l-2 border-[#00B894]">
                  <h4 className="text-[15px] font-semibold mb-3">IOR 负责什么</h4>
                  <ul className="space-y-2 text-[13px] md:text-[14px] text-[#555] leading-[1.6]">
                    <li>确保产品符合进口国法规</li>
                    <li>提供准确的海关申报信息</li>
                    <li>承担税务责任（GST/HST 等）</li>
                    <li>配合监管机构检查</li>
                    <li>在召回或纠纷中作为本地责任主体</li>
                  </ul>
                </div>
                <div className="p-5 bg-white border-l-2 border-[#B8C0CC]">
                  <h4 className="text-[15px] font-semibold mb-3 text-[#767676]">IOR 不负责什么</h4>
                  <ul className="space-y-2 text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">
                    <li>产品销售和市场推广</li>
                    <li>客户开发和渠道管理</li>
                    <li>产品设计和质量控制</li>
                    <li>售后技术支持（除非另有约定）</li>
                    <li>替制造商承担全部产品责任</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 责任链组成要素 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">组成要素</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8 md:mb-10">
              责任链的关键组成
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[900px]">
              {[
                { num: '01', title: '合规与认证', desc: 'CSA、UL、FCC、IC、加拿大卫生部等认证要求。谁确保产品在发货前符合所有标准？' },
                { num: '02', title: '进口与清关', desc: 'HS 编码、关税率、GST/HST、清关文件。谁拥有进口流程并承担相关责任？' },
                { num: '03', title: '产品文档', desc: '英文/法文标签、安全数据表、产品声明。谁验证文档的准确性和合规性？' },
                { num: '04', title: '渠道与分销', desc: '经销协议、定价结构、区域划分。谁负责谈判和管理渠道关系？' },
                { num: '05', title: '仓储与物流', desc: '入库接收、库存管理、本地配送、退货处理。谁运营或协调这些环节？' },
                { num: '06', title: '售后与保修', desc: '保修条款、维修流程、备件可用性。谁处理本地客户的问题和投诉？' },
                { num: '07', title: '保险与责任', desc: '产品责任险、货物险、商业责任险。谁确保覆盖范围充分？' },
                { num: '08', title: '本地问责', desc: '出问题时，谁是本地联系人？监管机构、客户或律师可以联系谁？' },
              ].map((item) => (
                <div key={item.num} className="flex gap-3 p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <span className="text-[#00B894] text-[12px] font-bold mt-0.5 min-w-[24px]">{item.num}</span>
                  <div>
                    <h4 className="text-[14px] md:text-[15px] font-semibold mb-1">{item.title}</h4>
                    <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 常见责任缺口 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">常见缺口</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-6 md:mb-8">
              企业常见的责任链缺口
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: 'IOR 未明确', desc: '以为收货方会自动成为 IOR，实际上对方可能不愿意承担这个法律责任。' },
                { title: '认证缺失或不适用', desc: '产品需要的是 CSA 认证，但企业只有 CE 认证；或者认证已过期。' },
                { title: '标签不合规', desc: '标签缺少法文说明、安全警告不完整、或缺少必要的追踪信息。' },
                { title: '保险覆盖不足', desc: '有货运险但缺少产品责任险，后者才是北美市场的核心保障。' },
                { title: '售后无人承接', desc: '产品出了问题，客户找不到本地联系人，企业无法及时处理。' },
                { title: '召回机制缺失', desc: '没有召回预案、没有本地应急联系人、没有与监管机构的沟通渠道。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5] border-l-2 border-l-[#D4AF37]">
                  <h4 className="text-[15px] font-semibold mb-2">{item.title}</h4>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CCBONLINE 如何帮助企业 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">我们的角色</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-6 md:mb-8">
              CCBONLINE 如何帮助企业梳理责任链
            </h2>
            <div className="max-w-[800px] space-y-4">
              {[
                { step: '01', title: '责任链现状评估', desc: '了解你的产品类型、目标市场、现有认证和物流安排，识别责任链中的缺口和薄弱环节。' },
                { step: '02', title: '优先级排序', desc: '不是所有缺口都需要立刻补齐。我们会根据你的产品特性和市场优先级，告诉你哪些必须先解决、哪些可以逐步完善。' },
                { step: '03', title: '具体路径设计', desc: '针对每个缺口，提供可执行的解决方案：找谁认证、IOR 怎么安排、保险怎么配置、售后怎么承接。' },
                { step: '04', title: '资源连接与协调', desc: '帮你连接加拿大本地的认证机构、物流公司、仓储服务商、保险公司和法律顾问，并协调各方之间的衔接。' },
                { step: '05', title: '持续跟踪与调整', desc: '责任链不是梳理一次就结束了。随着产品和市场的变化，责任链也需要定期审视和调整。' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 md:gap-6">
                  <span className="text-[#D4AF37] text-[14px] font-medium w-[32px] shrink-0">{item.step}</span>
                  <div className="pb-4 border-b border-[#E5E5E5]">
                    <h4 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h4>
                    <p className="text-[14px] text-[#767676] leading-[1.65]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                发货前把责任链理清楚
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                如果你正准备向北美发货，或者正在规划进入路径，建议先做一次责任链评估。看清缺口再行动，比出了问题再补救成本低得多。
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">预约责任链评估</Link>
                <Link to="/zh/services/compliance-responsibility-chain" className="btn-outline text-[16px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>了解合规服务详情</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
