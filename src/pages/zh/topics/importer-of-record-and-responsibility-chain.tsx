import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_ImporterOfRecordAndResponsibilityChain() {
  useSEO({
    title: '进口记录主体（IOR）与责任链：你在承担什么责任 | CCBONLINE INC.',
    description: '了解 IOR（Importer of Record）：进口记录主体的法律责任、责任链的完整构成、以及将产品带入加拿大和美国时各环节的 accountability。',
    canonical: 'https://www.ccbonline.ca/zh/topics/importer-of-record-and-responsibility-chain',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '进口记录主体（IOR）与责任链：你在承担什么责任 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">合规指南</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              进口记录主体与责任链
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[720px]">
              进口记录主体（IOR：Importer of Record）不是一个海关手续，而是一种法律责任身份。这份指南解释 IOR 实际做什么、为什么重要、以及将产品带入加拿大和美国时的完整责任链如何运作。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">定义</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-6">
              什么是进口记录主体（IOR）？
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7">
                <p className="text-[16px] md:text-[17px] text-[#444] leading-[1.65] mb-4">
                  进口记录主体（IOR）是在法律上负责确保进口货物符合目的地国家所有法律和法规的个人或实体。在加拿大，IOR 通常在加拿大海关编码表（B3 表）上申报。在美国，IOR 出现在 CBP 入境摘要上。
                </p>
                <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] mb-4">
                  IOR 不仅仅是文件上的一个名字。如果海关质疑产品的分类、估价或合规性，IOR 是监管机构联系的对象。如果发生产品召回，IOR 是责任方。如果关税少缴，IOR 承担财务责任。
                </p>
                <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] text-[#444] leading-[1.7]">
                    <strong className="font-medium text-[#212121]">关键区别：</strong>货运代理处理物流。报关行处理清关文件。IOR 承担法律责任。这三者可以是同一实体，也可以不同。许多企业混淆了这三个角色，以为货运代理就是他们的 IOR。
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5">
                <div className="p-5 bg-[#0B0E14]">
                  <h3 className="text-white text-[16px] font-semibold mb-4">IOR 责任清单</h3>
                  <ul className="space-y-3">
                    {[
                      '确保准确的产品分类（HS 编码）',
                      '申报正确的估价用于关税评估',
                      '遵守所有进口法规和限制',
                      '按规定期限保存记录（加拿大 5 年以上）',
                      '回应海关询问和审计',
                      '支付关税、税款和费用',
                      '确保产品安全和本地标准合规',
                      '在召回情况下作为责任方',
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

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">完整责任链</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              责任链：谁对什么负责
            </h2>
            <div className="max-w-[900px] space-y-4">
              {[
                { role: '制造商（你）', resp: '产品设计、质量控制、文档准确性、提供合规标签和安全信息。', risk: '产品责任索赔、监管不合规、产品缺陷导致的召回成本。' },
                { role: '进口记录主体（IOR）', resp: '边境法律合规、准确申报、关税支付、记录保存、监管通信。', risk: '财务处罚、海关扣押、虚假陈述的刑事责任、货物没收。' },
                { role: '报关行', resp: '准备和提交海关文件、提供分类和估价建议、协助清关。', risk: '文件错误（但最终责任在 IOR）、信息不完整导致的延误。' },
                { role: '货运代理', resp: '实体运输、物流协调、货物跟踪、有时安排保险。', risk: '货物损坏或丢失（如投保）、延误、错发。不承担进口合规责任。' },
                { role: '分销商 / 零售商', resp: '销售、市场推广、本地客户关系、有时售后支持。根据协议可能分担产品责任。', risk: '商业风险、产品失败时的声誉风险、消费者索赔中的潜在连带责任。' },
                { role: '保险公司', resp: '按保单规定覆盖产品责任、货物险和商业综合责任。', risk: '覆盖范围不足时的拒赔、索赔后保费上涨、保单不续保。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4 mb-3">
                    <h4 className="text-[15px] font-semibold shrink-0 sm:w-[160px]">{item.role}</h4>
                    <p className="text-[14px] text-[#555] leading-[1.6]">{item.resp}</p>
                  </div>
                  <p className="text-[13px] text-[#767676] pl-0 sm:pl-[176px]"><span className="text-[#D4AF37]">风险敞口：</span>{item.risk}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">你的选择</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              在加拿大处理 IOR 的四种方式
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { option: '自己的加拿大子公司', pros: '完全控制、直接与海关建立关系、建立本地存在。', cons: '需要加拿大实体注册、持续的合规义务、更高的管理负担。适合有 serious 长期承诺的公司。' },
                { option: '加拿大分销商', pros: '利用现有本地实体、分销商有动力推动产品销售。', cons: '分销商可能不愿承担 IOR 责任、产生依赖性、失去直接海关关系。必须确认分销商愿意且有能力。' },
                { option: '第三方 IOR 服务', pros: '专业 IOR 管理、不需要自己的实体、包含合规专业知识。', cons: '持续服务费用、较少直接控制、需要仔细核实覆盖范围和能力。' },
                { option: '代理商或代表', pros: '承诺较低、用有限量测试市场。', cons: '代理商可能缺乏 IOR 能力、量有限、对品牌和定价控制较少。通常是过渡性安排。' },
              ].map((item, i) => (
                <div key={i} className="p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h4 className="text-[16px] font-semibold mb-3">{item.option}</h4>
                  <p className="text-[13px] text-[#00B894] mb-1">优势</p>
                  <p className="text-[14px] text-[#555] leading-[1.6] mb-3">{item.pros}</p>
                  <p className="text-[13px] text-[#D4AF37] mb-1">劣势</p>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">{item.cons}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">常见缺口</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              责任链通常在哪里断裂
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { gap: '以为货运代理就是 IOR', fix: '书面确认谁是 IOR。许多货运代理在条款中明确否认 IOR 责任。' },
                { gap: '没有书面 IOR 协议', fix: '签订明确协议，规定 IOR 责任、责任限制、以及海关问题或召回时的处理方式。' },
                { gap: '低估记录保存要求', fix: '加拿大海关要求记录保存至少 5 年。确保你的 IOR 有适当的记录管理系统。' },
                { gap: '没有召回或危机预案', fix: '预先定义谁协调召回、沟通如何流动、谁承担成本。监管机构期望有本地联系人。' },
                { gap: '保险缺口', fix: '产品责任险、货物险和商业综合责任是不同的保险。核实你的 IOR 有什么保险、还有什么缺口。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border-l-2 border-l-[#D4AF37] border border-[#E5E5E5]">
                  <h4 className="text-[14px] font-semibold mb-2 text-[#212121]">{item.gap}</h4>
                  <p className="text-[13px] md:text-[14px] text-[#555] leading-[1.6]"><span className="text-[#00B894]">解决方案：</span>{item.fix}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">常见问题</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              IOR 和责任链常见问题
            </h2>
            <div className="space-y-3">
              {[
                { q: '外国公司可以自己做 IOR 吗？', a: '技术上在某些安排下可行，但实际操作困难。通常需要加拿大商业号码、本地地址和对加拿大法规的了解。大多数外国公司与本地实体或第三方 IOR 服务合作。' },
                { q: '如果 IOR 在海关申报上出错会怎样？', a: 'IOR 承担财务和法律后果。这可能包括处罚、额外关税、货物没收，严重时还有刑事指控。IOR 可能对制造商有追索权（如果制造商提供了错误信息），但海关直接与 IOR 打交道。' },
                { q: 'IOR 必须是销售方吗？', a: '不一定。IOR 是任何接受进口法律责任的人。卖方、分销商、第三方服务或子公司都可以担任 IOR。关键是要有明确的协议和对责任的理解。' },
                { q: 'IOR 必须保存什么记录？', a: '在加拿大，IOR 必须保存至少 5 年的进口记录，包括：海关文件、发票、装箱单、原产地证书、分类裁定、与 CBSA 的通信，以及任何修改或更正。' },
              ].map((faq, i) => (
                <details key={i} className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">{faq.q}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                需要理清你的 IOR 和责任链？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                CCBONLINE INC. 帮助进入加拿大和美国的企业评估责任链、评估 IOR 选项，并在产品到达边境前关闭合规缺口。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">预约责任链评估</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
