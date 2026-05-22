import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_BuildingMaterialsEnteringNorthAmerica() {
  useSEO({
    title: '建材进入北美：规范、认证与市场实际 | CCBONLINE INC.',
    description: '中国建材进入加拿大和美国：建筑规范合规、CCMC评估、省级法规、消防安全标准，以及实操市场进入建议。',
    canonical: 'https://www.ccbonline.ca/zh/topics/building-materials-entering-north-america',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '建材进入北美：规范、认证与市场实际 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">行业指南</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              建材进入北美
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[720px]">
              建材是进入加拿大和美国时面临最严格合规要求的产品类别之一。规范是省级的，标准是联邦的，风险很高。这份指南解释建材制造商需要知道的事项。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">为什么这个类别不同</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-6">
              建材的特殊挑战在哪里
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: '省级建筑规范，不是联邦的', desc: '加拿大没有单一的国家建筑规范。每个省和地区有自己的。安大略省遵循安大略建筑规范。BC 省有 BC 建筑规范。在艾伯塔省通过的，在魁北克省可能不通过。你需要知道你目标市场的省份及其具体要求。' },
                { title: '通常需要 CCMC 评估', desc: '加拿大建筑材料中心（CCMC）根据加拿大规范评估建筑产品。CCMC 评估不是法律强制的，但许多建筑师、工程师和承包商在没有 CCMC 的情况下不会指定你的产品。评估过程可能需要 6-12 个月。' },
                { title: 'CSA 标准和 CAN/ULC 规范', desc: '加拿大标准协会（CSA）和加拿大保险商实验室（ULC）制定建材标准。消防安全等级、结构性能和耐久性测试通常引用这些标准。中国的测试报告通常不被接受，除非有加拿大或同等认证。' },
                { title: '责任和专业依赖', desc: '指定你的产品的建筑师和工程师在产品失败时可能被追究责任。这意味着他们对没有适当加拿大文件的产品极其谨慎。与设计界建立信任需要的不仅仅是有竞争力的价格。' },
              ].map((item, i) => (
                <div key={i} className="p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[16px] font-semibold mb-3 leading-[1.5]">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">按材料类型</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              不同建材需要什么
            </h2>
            <div className="space-y-4">
              {[
                { type: '结构材料（钢材、混凝土、工程木）', reqs: ['CSA 结构标准合规', '等级标记和工厂认证', '耐火等级（CAN/ULC-S101）', '非标准应用的省级工程师批准'] },
                { type: '保温材料', reqs: ['加拿大标准 R 值测试', '消防安全分类（CAN/ULC-S102）', '强烈推荐 CCMC 评估', 'VOC 排放合规'] },
                { type: '地板和瓷砖', reqs: ['CSA 性能标准', '防滑等级', 'VOC 排放（CDPH/EHLB 标准方法）', '加拿大条件下的保修条款'] },
                { type: '屋顶材料', reqs: ['CSA A123 系列标准', '抗风揭测试', '消防分类（CAN/ULC-S107 的 A/B/C 级）', '寒冷天气性能数据'] },
                { type: '管道和暖通空调', reqs: ['CSA B 系列标准（B45、B64、B125 等）', 'NSF/ANSI 饮用水接触批准', '省级注册要求', '适用的能效等级'] },
                { type: '外墙包层和壁板', reqs: ['抗水渗透测试', '火焰传播测试（某些类型的 CAN/ULC-S134）', '耐久性和耐候性数据', '许多产品类型的 CCMC 评估'] },
              ].map((group, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[16px] md:text-[17px] font-semibold mb-4">{group.type}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.reqs.map((req, j) => (
                      <li key={j} className="text-[14px] text-[#555] leading-[1.6] pl-3 border-l-2 border-[#00A884]">{req}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">进入市场路径</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              建材通常如何进入加拿大市场
            </h2>
            <div className="max-w-[800px] space-y-6">
              {[
                { step: '01', title: '规范研究', desc: '确定哪些省级规范适用于你的目标市场。确定你的产品必须满足哪些标准。了解在你的类别中是否预期需要 CCMC 评估。' },
                { step: '02', title: '测试和认证', desc: '安排加拿大或同等标准的测试。如果你的中国测试实验室不被认可，你可能需要在加拿大或 CSA 认可实验室重新测试。预算至少 3-6 个月。' },
                { step: '03', title: 'CCMC 评估（如适用）', desc: '提交产品进行 CCMC 评估。这涉及技术审查、规范合规评估和评估号的发放。时间线：6-12 个月。费用：因产品复杂程度而异。' },
                { step: '04', title: '目标市场选择', desc: '选择 1-2 个省份作为起点。每个省有不同的规范、市场规模和竞争格局。安大略省和 BC 省通常因市场规模而成为首选。' },
                { step: '05', title: '渠道开发', desc: '建材通常通过以下渠道流通：分销商、建材供应经销商、直接对承包商、或通过建筑师/工程师指定。每个渠道需要不同的方法。' },
              ].map((phase) => (
                <div key={phase.step} className="flex gap-4 md:gap-6">
                  <span className="text-[#C9A44C] text-[14px] font-medium w-[32px] shrink-0">{phase.step}</span>
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
            <p className="text-label mb-3">按省份</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              建材的关键省级市场
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { prov: '安大略省', size: '最大的建筑市场', note: '安大略建筑规范（OBC）。多伦多和渥太华是主要枢纽。高层住宅建筑规模庞大。对创新材料需求强劲。' },
                { prov: '不列颠哥伦比亚省', size: '第二大市场', note: 'BC 建筑规范。温哥华有积极的可持续发展目标。抗震要求影响结构材料。高木框架建筑需求。' },
                { prov: '艾伯塔省', size: '第三大市场', note: '艾伯塔建筑规范。卡尔加里和埃德蒙顿带动需求。能源行业项目需要工业级材料。寒冷气候考虑影响材料选择。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h4 className="text-[16px] font-semibold mb-1">{item.prov}</h4>
                  <p className="text-[12px] text-[#00A884] mb-3">{item.size}</p>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">{item.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">常见问题</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              建材制造商常问的问题
            </h2>
            <div className="space-y-3">
              {[
                { q: 'CCMC 评估是强制性的吗？', a: '不是法律强制，但对许多类别实际上是必需的。没有 CCMC，建筑师和工程师可能不愿指定你的产品，建筑官员可能要求额外文件。在某些情况下，省级工程师批准可以替代，但这是个案处理。' },
                { q: '中国的测试报告可以用吗？', a: '有时可以，如果测试实验室是 ISO 17025 认证且测试方法与加拿大标准等效。然而，许多加拿大当局偏好或要求 CSA 认可实验室的测试。为可能的重新测试预留预算。' },
                { q: '完整的进入过程需要多长时间？', a: '从初步研究到第一笔销售，建材通常需要 12-18 个月。认证和测试：3-6 个月。CCMC 评估：6-12 个月。渠道开发：3-6 个月。这不是一个快速进入的类别。' },
                { q: '应该 targeting 商业还是住宅建筑？', a: '住宅建筑通常进入门槛较低、决策周期较短。商业建筑涉及建筑师和工程师的指定，需要更强的文档和关系建设。许多制造商从住宅开始，再扩展到商业。' },
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

        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                带着建材进入北美？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                CCBONLINE INC. 帮助建材制造商评估规范要求、规划认证时间线，并为加拿大和美国开发实际的进入策略。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">预约建材市场评估</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
