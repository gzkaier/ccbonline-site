import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

const faqs = [
  { q: '什么是加拿大市场进入顾问服务？', a: '加拿大市场进入顾问服务是一套结构化工作：评估你的产品是否适合加拿大市场、设计合规和运营路径、验证客户和合作伙伴渠道、协调本地执行资源，把市场意向变成实际运营。它不是营销、销售外包或网站开发。' },
  { q: '市场进入顾问和销售外包有什么区别？', a: '销售外包专注于产生线索和成交。市场进入顾问专注于你是否应该进入、进入前需要什么条件、以及如何建立可持续的本地运营。我们帮助你理解完整的责任链——认证、进口、保修、保险、售后——而不只是找买家。' },
  { q: 'IOR（Importer of Record，进口记录主体 / 进口责任主体）是什么？', a: '进口记录主体（IOR）是在法律上负责确保进口货物符合目的地国家所有法律法规的个人或实体。IOR 处理海关文件、支付关税和税款，并在监管机构有问题时作为责任方。这不只是海关手续——它是一种具有真实法律责任的法律身份。' },
  { q: '为什么产品发货前要先判断认证和责任链？', a: '加拿大和美国海关可以拒绝没有适当认证的产品入境。电器产品需要 CSA 或 cUL 认证，无线设备需要 ISED（加拿大）或 FCC（美国）注册，食品接触材料、儿童用品和工业设备各有特定要求。认证通常需要数月时间，所以发货前规划至关重要。' },
  { q: '中国制造企业进入加拿大前需要准备什么？', a: '最低要求包括：专业的英文产品文档（规格书、手册、数据表）、清楚了解产品类别的认证要求、IOR 安排、基本的产品适配度和竞争市场调研、以及考虑认证、合作伙伴开发和运营设置的现实时间线。' },
  { q: '中加商业在线如何支持展会后跟进？', a: '我们帮助展前规划（买家定位、信息调整）、现场协调和展后跟进系统。许多参展商收集了大量名片但缺乏结构化外联流程。我们通过调整后的材料、本地跟进协调和关系管理，帮助把展会线索变成合格的商机。' },
  { q: '什么是出海企业网站与内容诊断？', a: '我们审查你现有的网站和产品材料，评估北美买家是否能快速理解你的产品、验证你的可信度、找到他们需要的信息。常见问题包括英文内容不完整、缺少认证信息、产品描述不清晰、信任信号薄弱。我们提供具体的改进建议。' },
  { q: '中加商业在线是否直接提供法律、税务或清关代理服务？', a: '不。中加商业在线提供商业顾问、市场进入路径设计、资料梳理、本地资源协调和项目推进支持。我们不替代持牌律师、税务师、海关经纪、认证机构、保险顾问或工程专业人士。涉及专业意见时，我们可以协助对接合适的第三方专业机构。' },
  { q: '中加商业在线如何与本地合作伙伴协作？', a: '我们与物流、仓储、认证、法律、保险和渠道开发等领域的本地服务提供商保持合作关系。根据你的项目需求，我们识别并协调合适的合作伙伴，帮助管理沟通，跟踪进度以确保责任落实。' },
  { q: '一个典型的市场进入项目需要多长时间？', a: '因产品类别和投入程度差异很大。基本的市场进入诊断需要 2-3 周。完整的市场进入准备（认证、文档、合作伙伴开发）通常需要 3-6 个月。执行和持续协调根据需要继续进行。' },
  { q: '初步评估是否收费？', a: '初步审阅和书面回复是免费的。这是一个方向性评估，帮助你了解是否应该进入以及如何进入。如果你选择使用我们的付费服务，我们会在任何工作开始前提供明确的范围和报价。' },
  { q: '你们专注于哪些行业？', a: '我们最常与制造商（电子、工业设备、消费品）、建材供应商、AI 硬件公司和专业服务商合作。然而，我们的评估框架适用于任何寻求进入加拿大和北美的实体产品或服务企业。' },
]

export default function ZHFaq() {
  useSEO({
    title: '常见问题 | 加拿大及北美市场进入 | 中加商业在线 CCBONLINE INC.',
    description: '关于加拿大市场进入顾问服务、进口记录主体（IOR）、产品认证、展会跟进、以及中加商业在线如何与企业合作的常见问题。',
    canonical: 'https://www.ccbonline.ca/zh/faq',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '常见问题 | 加拿大及北美市场进入 | 中加商业在线 CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">常见问题</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              常见问题
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px]">
              关于市场进入顾问服务、合规、本地执行，以及我们如何与进入加拿大和北美的企业合作的常见问题。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="space-y-3">
              {faqs.map((faq, i) => (
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
                还有问题？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                提交你的问题，附上产品和市场信息。我们会审阅并给出具体建议。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">联系中加商业在线</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
