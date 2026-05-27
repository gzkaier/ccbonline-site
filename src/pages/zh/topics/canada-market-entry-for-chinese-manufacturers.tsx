import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_CanadaMarketEntryForChineseManufacturers() {
  useSEO({
    title: '中国制造企业进入加拿大市场：开始前需要知道什么 | CCBONLINE INC.',
    description: '中国制造企业进入加拿大市场前需要评估什么：产品适配度、认证要求、IOR安排、渠道选择、售后责任。来自加拿大注册市场进入顾问的实操建议。',
    canonical: 'https://www.ccbonline.ca/zh/topics/canada-market-entry-for-chinese-manufacturers',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '中国制造企业进入加拿大市场：开始前需要知道什么 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">市场进入指南</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              中国制造企业进入加拿大市场
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[720px]">
              在投入产品认证、展会摊位或经销商会议之前，有一些问题值得先回答。这份指南涵盖中国制造企业在进入加拿大前应该评估的关键事项。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">关键问题</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              制造企业应该先回答的六个问题
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { num: '01', q: '你的产品真的适合加拿大市场吗？', a: '加拿大有特定的电压标准（120V）、公制/英制标签要求、英法双语标签规定，以及与中国不同的季节性需求模式。在国内卖得好不代表在加拿大不需要大幅调整。' },
                { num: '02', q: '你的产品类别需要什么认证？', a: '电器产品需要 CSA 或 cUL 认证。食品接触材料需要加拿大卫生部合规。儿童用品有 CCPSA 要求。工业设备可能需要省级注册。没有正确的认证，海关可以拒绝入境。' },
                { num: '03', q: '谁将作为进口记录主体（IOR）？', a: 'IOR 是确保你的产品符合加拿大法规的法律实体。这不只是海关手续。没有明确的 IOR 安排，你的产品可能无限期滞留在边境。' },
                { num: '04', q: '你有英文（和法文）产品资料吗？', a: '加拿大消费者和企业期望清晰的英文文档。根据省份和产品类别，可能还需要法文。技术规格、用户手册、保修条款和安全警告都需要专业翻译。' },
                { num: '05', q: '哪种渠道适合你的产品类型？', a: '零售、批发、直接 B2B、电商和分销商网络各需要不同的方法。选错渠道浪费时间和金钱。正确渠道取决于你的产品利润率、产能和售后能力。' },
                { num: '06', q: '出了问题怎么办？', a: '产品缺陷、保修索赔和召回需要本地响应能力。加拿大监管机构、保险公司和客户都期望有国内联系人。没有的话，你的品牌和企业都面临风险。' },
              ].map((item) => (
                <div key={item.num} className="p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <span className="text-[#D4AF37] text-[13px] font-medium">{item.num}</span>
                  <h3 className="text-[16px] font-semibold mt-2 mb-3 leading-[1.5]">{item.q}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">按产品类别</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              不同类别制造企业的特殊要求
            </h2>
            <div className="space-y-4">
              {[
                { cat: '电器与电子产品', items: ['大多数类别需要 CSA 或 cUL 认证', '无线设备需要 ISED（加拿大创新、科学和经济发展部）注册', '电压和插头类型适配（120V，A/B 型插头）', '魁北克省有法文标签要求'] },
                { cat: '工业设备与机械', items: ['省级工作场所安全认证可能适用', '电器部件的 CSA 标准', '海关分类所需的文档要求', '售后服务和备件物流'] },
                { cat: '建材', items: ['建筑产品可能需要 CCMC（加拿大建筑材料中心）评估', '省级建筑规范合规', '消防安全等级和测试', '环境和 VOC 排放标准'] },
                { cat: '消费品', items: ['CCPSA（加拿大消费品安全法）合规', '英法双语标签', '儿童用品的年龄分级和安全警告', '食品接触材料需要在加拿大卫生部注册'] },
              ].map((group, i) => (
                <div key={i} className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[16px] md:text-[17px] font-semibold mb-4">{group.cat}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="text-[14px] text-[#555] leading-[1.6] pl-3 border-l-2 border-[#00B894]">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">时间线</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              前 90 天实际会发生什么
            </h2>
            <div className="max-w-[800px] space-y-6">
              {[
                { days: '第 1-30 天', title: '诊断', desc: '产品市场适配评估、合规要求梳理、竞争格局审查、IOR 安排规划。先不要发货，先不要参展。只做清晰的评估。' },
                { days: '第 15-45 天', title: '合规路径', desc: '认证时间线规划、文档准备、标签审查、海关分类确认。这通常比制造企业预期的要长。尽早开始。' },
                { days: '第 30-60 天', title: '渠道验证', desc: '目标客户画像开发、渠道策略选择、初步外联材料准备、潜在合作伙伴识别。仍然不发货。仍然在打基础。' },
                { days: '第 60-90 天', title: '结构化外联', desc: '第一次结构化客户对话、展会准备（如适用）、物流和售后安排最终确认。只有到了这个时候，发货才变得现实。' },
              ].map((phase) => (
                <div key={phase.days} className="flex gap-4 md:gap-6">
                  <div className="shrink-0 w-[100px]">
                    <p className="text-[#D4AF37] text-[13px] font-medium">{phase.days}</p>
                  </div>
                  <div className="pb-6 border-b border-[#E5E5E5] flex-1">
                    <h4 className="text-[16px] font-semibold mb-2">{phase.title}</h4>
                    <p className="text-[14px] text-[#767676] leading-[1.65]">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">警示信号</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              你可能还没准备好的信号
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                '说不清楚在加拿大的目标客户是谁',
                '没有英文产品文档',
                '没有研究过产品类别的认证要求',
                '没有明确的 IOR 安排',
                '没有售后支持或保修处理计划',
                '期望开始后 30 天内就有第一笔销售',
                '把加拿大当作美国市场的附带来考虑',
              ].map((item, i) => (
                <div key={i} className="p-4 bg-white border-l-2 border-[#D4AF37]">
                  <p className="text-[14px] text-[#444] leading-[1.6]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">常见问题</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              制造企业常问的问题
            </h2>
            <div className="space-y-3">
              {[
                { q: '应该先进入加拿大还是美国？', a: '加拿大通常作为首选市场更合理，因为监管流程更透明、认证时间线通常更短、市场规模允许受控测试。在加拿大取得成功也为进入美国市场建立信誉。' },
                { q: '产品认证需要多长时间？', a: '因产品类别差异很大。简单电器产品可能需要 4-8 周。复杂工业设备可能需要 3-6 个月。建材的 CCMC 评估可能需要 6-12 个月。在规划上市时间前先规划认证。' },
                { q: '我可以用美国分销商作为 IOR 吗？', a: '有时可以，但不总是。IOR 需要了解加拿大法规、在加拿大有商业存在，并愿意承担法律责任。不是所有分销商都满足这些条件。在假设之前先确认。' },
                { q: '我需要在加拿大注册公司才能销售吗？', a: '不一定。你可以通过分销商、代理商或电商平台销售。然而，拥有本地实体或明确指定的 IOR 能显著简化合规、税务和责任问题。' },
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
                正在评估加拿大市场进入？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                CCBONLINE INC. 与中国制造企业合作，评估产品适配度、梳理合规要求，并设计实际的进入路径。如果你认真考虑进入加拿大市场，结构化评估是正确的第一步。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">预约市场进入评估</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
