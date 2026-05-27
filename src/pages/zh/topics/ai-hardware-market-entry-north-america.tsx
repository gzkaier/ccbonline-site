import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_AIHardwareMarketEntryNorthAmerica() {
  useSEO({
    title: 'AI 硬件进入北美：合规、分类与渠道策略 | CCBONLINE INC.',
    description: 'AI 硬件进入加拿大和美国：IC/FCC 认证、数据隐私法规、出口管制、产品分类，以及硬件公司的实操市场进入建议。',
    canonical: 'https://www.ccbonline.ca/zh/topics/ai-hardware-market-entry-north-america',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = 'AI 硬件进入北美：合规、分类与渠道策略 | CCBONLINE INC.'
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
              AI 硬件进入北美
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[720px]">
              AI 硬件处于技术创新和复杂监管的交叉点。无线认证、数据隐私法律、潜在的出口管制、以及不断演变的 AI 专项立法之间，这个类别需要谨慎导航。这份指南涵盖 AI 硬件公司在进入加拿大和美国前需要知道的事项。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">为什么 AI 硬件不同</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              超越标准电子产品的监管复杂性
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: '无线和射频认证', desc: '大多数 AI 硬件都有无线连接（WiFi、蓝牙、蜂窝或专有协议）。每种都需要加拿大 ISED 认证和美国 FCC 认证。多个射频模块意味着多个认证。' },
                { title: '数据隐私和收集', desc: '如果你的 AI 硬件收集、处理或传输数据，你受加拿大 PIPEDA（联邦隐私法）管辖，可能还受省级隐私法管辖。在美国，像加州消费者隐私法（CCPA）这样的州级法律可能适用。这影响数据的处理、存储和同意方式。' },
                { title: 'AI 专项法规在演变', desc: '加拿大提议的人工智能和数据法（AIDA）将对"高影响"AI 系统施加新要求。欧盟 AI 法已经影响服务欧洲市场的公司。虽然美国联邦 AI 监管仍在发展，但行业特定规则可能取决于你的用例而适用。' },
                { title: '出口管制考虑', desc: '具有足够处理能力或特定功能的 AI 硬件可能受出口管制。如果你的硬件包含受限制组件或超过某些性能阈值，可能需要通过加拿大《进出口许可法》或美国 EAR/ITAR 法规获得许可。' },
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
            <p className="text-label mb-3">按产品类型</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              不同 AI 硬件产品面临的挑战
            </h2>
            <div className="space-y-4">
              {[
                { type: '边缘 AI 设备（摄像头、传感器、处理器）', issues: ['ISED/FCC 无线部件认证', '数据处理与隐私合规', '电气安全（CSA/cUL）', '取决于应用：安全设备法规、医疗器械分类'] },
                { type: 'AI 赋能的消费电子', issues: ['标准消费电子认证加 AI 专项考虑', '语音/数据收集同意机制', '儿童隐私保护（如适用）', 'AI 驱动决策的产品责任'] },
                { type: '工业 AI 硬件', issues: ['工作场所安全认证', 'EMC（电磁兼容性）要求', '工业控制系统安全标准', '与现有工业基础设施的集成'] },
                { type: '自动驾驶车辆部件', issues: ['加拿大交通部机动车辆安全标准', '广泛的测试和验证要求', '责任和保险复杂性', '自动驾驶系统的省级监管差异'] },
                { type: 'AI 计算硬件（GPU、加速器）', issues: ['高性能处理器的出口管制筛查', '电源和热安全标准', '电磁兼容性', '如适用：数据中心专项认证'] },
              ].map((group, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[16px] md:text-[17px] font-semibold mb-4">{group.type}</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {group.issues.map((issue, j) => (
                      <li key={j} className="text-[14px] text-[#555] leading-[1.6] pl-3 border-l-2 border-[#00B894]">{issue}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">合规路线图</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              AI 硬件进入加拿大的分步指南
            </h2>
            <div className="max-w-[800px] space-y-6">
              {[
                { step: '01', title: '产品分类', desc: '确定哪些法规适用。消费电子？安全设备？工业设备？医疗器械相关？每个类别有不同的监管路径。分类错了，后续一切都会延误。' },
                { step: '02', title: 'ISED/FCC 认证', desc: '所有无线设备都需要无线电认证。在加拿大，这通过 ISED 的认证和工程局完成。时间线：如果测试完成，4-8 周。为认证实验室的测试预留预算。' },
                { step: '03', title: '电气安全认证', desc: 'CSA、cUL 或 ETL 的电气安全认证。这与无线认证分开。时间线：因产品复杂程度而异，6-12 周。产品销售前必需。' },
                { step: '04', title: '数据隐私评估', desc: '评估你的设备收集什么数据、存储在哪里、谁有访问权限、如何获得同意。记录这些。如果你处理个人信息，你需要隐私合规框架。' },
                { step: '05', title: '出口管制审查', desc: '根据加拿大出口管制清单筛查你的产品，如果相关，还要筛查美国 EAR 分类。高性能处理器和某些 AI 功能可能需要出口许可。' },
                { step: '06', title: '标签和文档', desc: '加拿大需要英文和法文标签、ISED 认证号、型号、制造商信息、安全警告。文档必须准确完整，以便海关清关。' },
              ].map((phase) => (
                <div key={phase.step} className="flex gap-4 md:gap-6">
                  <span className="text-[#D4AF37] text-[14px] font-medium w-[32px] shrink-0">{phase.step}</span>
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
            <p className="text-label mb-3">渠道</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              AI 硬件通常如何触达北美市场
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { channel: '直接 B2B 销售', desc: '针对工业 AI 硬件和企业解决方案。需要本地销售能力、技术支持和关系建设。利润率更高，但销售周期更长。', fit: '最适合：企业/工业 AI 硬件' },
                { channel: '技术分销商', desc: 'Ingram Micro、Synnex 和区域专业分销商可以提供加拿大和美国的覆盖。他们处理物流、信用和一些支持。', fit: '最适合：标准 AI 组件和消费设备' },
                { channel: '系统集成商', desc: '集成商将您的硬件打包进更大的解决方案。适合边缘 AI 设备和专业应用。需要强大的技术文档和合作伙伴支持。', fit: '最适合：边缘 AI、专业传感器、工业应用' },
              ].map((item, i) => (
                <div key={i} className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
                  <h4 className="text-[16px] font-semibold mb-2">{item.channel}</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6] mb-3">{item.desc}</p>
                  <p className="text-[13px] text-[#00B894]">{item.fit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">常见问题</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              AI 硬件公司常问的问题
            </h2>
            <div className="space-y-3">
              {[
                { q: '加拿大和美国需要分别认证吗？', a: '无线认证方面，是的——加拿大 ISED，美国 FCC。然而，在同时服务两个机构的认证实验室测试可以简化流程。电气安全方面，CSA/cUL 认证如果满足 UL 标准，通常在两国都被接受。计划双重认证，但寻找效率。' },
                { q: '出口管制如何影响 AI 硬件？', a: '如果你的硬件具有足够的处理能力（以 TOPS 或等效衡量），包含受限来源组件，或为特定最终用途（军事、监控）设计，出口管制可能适用。阈值会定期变化。尽早咨询出口管制专家。' },
                { q: 'AI 专项监管呢？', a: '加拿大的 AIDA（人工智能和数据法）预计将对"高影响"AI 系统施加要求，包括用于关键基础设施、生物识别和某些决策环境的系统。如果你的硬件属于这些类别，准备额外的文档和可能的第三方审计要求。' },
                { q: '完整的市场进入应该预算多长时间？', a: '对于具有无线功能的 AI 硬件，计划从启动到首次销售 8-14 个月。认证（ISED/CSA）：3-5 个月。渠道开发：2-4 个月。隐私合规框架：1-2 个月。出口管制筛查：1-2 个月。这假设没有重大监管意外。' },
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
                带着 AI 硬件进入加拿大或美国？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                CCBONLINE INC. 与 AI 硬件公司合作，导航认证要求、评估监管暴露，并为加拿大和美国设计实际的市场进入路径。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">预约 AI 硬件评估</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
