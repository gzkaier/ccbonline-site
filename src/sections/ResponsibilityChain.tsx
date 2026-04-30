import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ResponsibilityChain() {
  const { t } = useLanguage()
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = t(
      'North America Responsibility Chain for Imported Products | CCBONLINE INC.',
      '北美进口产品责任链 | CCBONLINE INC.'
    )
    window.scrollTo(0, 0)
    const page = pageRef.current
    if (!page) return
    const ctx = gsap.context(() => {
      gsap.from(page.querySelectorAll('.rc-block'), {
        y: 25, opacity: 0, duration: 0.6, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: page, start: 'top 80%', once: true },
      })
    }, page)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef}>
      <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Responsibility Chain', '责任链')}</p>
          <h1 className="font-serif text-[#212121] text-[32px] md:text-[36px] lg:text-[42px] leading-[1.35] md:leading-[1.25] tracking-tight max-w-[900px] mb-4">
            {t('North America Responsibility Chain for Imported Products', '北美进口产品责任链')}
          </h1>
          <p className="text-[12px] md:text-[14px] text-[#767676] max-w-[680px]">
            {t('Market entry is not only about demand, sales, or traffic. It is about building a responsibility chain across compliance, importation, documentation, product claims, channel, warehousing, after-sales, insurance, and local accountability.', '市场进入不只是需求、销售或流量。而是围绕合规、进口、文档、产品声明、渠道、仓储、售后、保险和本地责任建立一条完整的责任链。')}
          </p>
        </div>
      </section>

      {/* Section 1: Definition */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4 rc-block">
              <p className="text-label mb-3">{t('Definition', '定义')}</p>
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] md:leading-[1.3] tracking-tight">
                {t('What Is the Responsibility Chain?', '什么是责任链？')}
              </h2>
            </div>
            <div className="lg:col-span-8 rc-block">
              <p className="text-[14px] md:text-[16px] text-[#444] leading-[1.8] mb-5">
                {t(
                  'The responsibility chain is the complete set of obligations, risks, and accountabilities that a company assumes when bringing a product into North America. It starts before the product leaves the factory and continues until the product is safely in the customer\'s hands — and beyond.',
                  '责任链是企业将产品带入北美时承担的完整义务、风险和责任体系。它在产品离开中国之前就开始，持续到产品安全到达客户手中——以及之后。'
                )}
              </p>
              <p className="text-[13px] md:text-[14px] text-[#555] leading-[1.8]">
                {t(
                  'For companies entering from overseas, the responsibility chain is often invisible until something goes wrong: a customs hold, a product recall, a warranty dispute, or a liability claim. Our role is to make this chain visible, manageable, and properly assigned before you ship.',
                  '对中国企业来说，责任链通常在出问题前都是不可见的：海关扣留、产品召回、保修纠纷或责任索赔。我们的作用是在发货前让这条链变得可见、可管理并正确分配。'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Why It Matters */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Why It Matters', '为什么重要')}</p>
          <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10">
            {t('Why the Responsibility Chain Cannot Be Ignored', '为什么责任链不可忽视')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {[
              { title: t('One weak link breaks the chain', '一个薄弱环节会打断链条'), desc: t('A single gap in certification, insurance, or after-sales support can halt your entire market entry, damage your reputation, or create legal liability.', '认证、保险或售后支持中的单一差距可能中断您的整个市场进入、损害声誉或产生法律责任。') },
              { title: t('North American liability is real', '北美责任是真实的'), desc: t('Product liability, consumer protection, and class-action exposure in Canada and the US are significantly different from most overseas regulatory environments.', '加拿大和美国的产品责任、消费者保护和集体诉讼风险与大多数海外监管环境显著不同。') },
              { title: t('Customers expect accountability', '客户期望问责制'), desc: t('North American buyers and distributors expect clear answers on who handles warranty, returns, defects, and compliance issues. Vagueness loses deals.', '北美买家和分销商期望明确回答谁处理保修、退货、缺陷和合规问题。含糊不清会丢失交易。') },
            ].map((item, i) => (
              <div key={i} className="rc-block card-border bg-white">
                <h3 className="text-[14px] md:text-[15px] font-semibold mb-2">{item.title}</h3>
                <p className="text-[11px] md:text-[13px] text-[#767676] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Key Components */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <p className="text-label mb-3">{t('Components', '组成要素')}</p>
          <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[700px] mb-10">
            {t('Key Components of the Responsibility Chain', '责任链的关键组成')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[900px]">
            {[
              { num: '01', title: t('Compliance & Certification', '合规与认证'), desc: t('CSA, UL, FCC, IC, Health Canada, and provincial requirements. Who ensures your product meets standards before it ships?', 'CSA、UL、FCC、IC、加拿大卫生部和省要求。谁确保您的产品在发货前符合标准？') },
              { num: '02', title: t('Import & Customs', '进口与清关'), desc: t('HS codes, duty rates, GST/HST, customs documentation, and broker coordination. Who owns the import process?', 'HS编码、关税率、GST/HST、清关文件和代理协调。谁拥有进口流程？') },
              { num: '03', title: t('Product Documentation', '产品文档'), desc: t('English/French labels, safety data sheets, usage instructions, and product claims. Who validates accuracy and completeness?', '英文/法文标签、安全数据表、使用说明和产品声明。谁验证准确性和完整性？') },
              { num: '04', title: t('Channel & Distribution', '渠道与分销'), desc: t('Distributor agreements, exclusivity terms, pricing structures, and territory definitions. Who negotiates and manages these?', '经销协议、独家条款、定价结构和区域定义。谁谈判和管理这些？') },
              { num: '05', title: t('Warehousing & Logistics', '仓储与物流'), desc: t('Inbound receiving, inventory management, local delivery, and returns handling. Who operates or coordinates this?', '入库接收、库存管理、本地配送和退货处理。谁运营或协调这些？') },
              { num: '06', title: t('After-Sales & Warranty', '售后与保修'), desc: t('Warranty terms, repair process, spare parts availability, and customer service. Who handles customer issues on the ground?', '保修条款、维修流程、备件可用性和客户服务。谁处理本地客户问题？') },
              { num: '07', title: t('Insurance & Liability', '保险与责任'), desc: t('Product liability insurance, cargo insurance, and business liability coverage. Who assesses and secures adequate protection?', '产品责任险、货物险和商业责任险。谁评估并确保充分保护？') },
              { num: '08', title: t('Local Accountability', '本地问责'), desc: t('When something goes wrong, who is the local point of contact? Who can regulators, customers, or lawyers reach?', '出问题时，谁是本地联系人？监管机构、客户或律师可以联系谁？') },
            ].map((item) => (
              <div key={item.num} className="rc-block flex gap-3">
                <span className="text-[#C00000] text-[12px] font-bold mt-0.5 min-w-[24px]">{item.num}</span>
                <div>
                  <h4 className="text-[13px] md:text-[15px] font-semibold mb-1">{item.title}</h4>
                  <p className="text-[11px] md:text-[13px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Common Mistakes */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Mistakes', '常见错误')}</p>
          <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10">
            {t('Common Responsibility Chain Mistakes', '责任链常见错误')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[800px]">
            {[
              { title: t('Assuming the distributor handles everything', '假设经销商处理一切'), desc: t('Many distributors sell but do not assume liability, warranty, or compliance responsibility. Read the contract carefully.', '许多经销商销售但不承担责任、保修或合规责任。仔细阅读合同。') },
              { title: t('Shipping before certification is complete', '认证完成前发货'), desc: t('Products held at customs due to incomplete certification can result in storage fees, delays, and cancelled orders.', '因认证不完整被海关扣留的产品可能产生仓储费、延误和取消订单。') },
              { title: t('No local insurance coverage', '没有本地保险覆盖'), desc: t('Overseas insurance policies often do not cover North American liability exposure. Local product liability insurance is essential.', '海外保险单通常不覆盖北美责任风险。本地产品责任险至关重要。') },
              { title: t('Vague warranty terms', '模糊的保修条款'), desc: t('"One-year warranty" without clear process, local repair capability, or spare parts availability creates customer disputes.', '"一年保修"没有明确流程、本地维修能力或备件可用性会产生客户纠纷。') },
            ].map((item, i) => (
              <div key={i} className="rc-block card-border bg-white border-l-2 border-l-[#C00000]">
                <h3 className="text-[14px] md:text-[15px] font-semibold mb-2">{item.title}</h3>
                <p className="text-[11px] md:text-[13px] text-[#767676] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: How CCBONLINE Helps */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <p className="text-label mb-3">{t('How We Help', '我们如何帮助')}</p>
          <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10">
            {t('How CCBONLINE Helps Build Your Responsibility Chain', 'CCBONLINE 如何帮助构建您的责任链')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[800px]">
            {[
              { title: t('Responsibility chain audit', '责任链审计'), desc: t('We map every component of your responsibility chain, identify gaps, and assign clear ownership for each link.', '我们绘制您责任链的每个组成部分，识别差距，并为每个环节分配明确的责任人。') },
              { title: t('Professional partner coordination', '专业机构协调'), desc: t('We connect you with vetted lawyers, customs brokers, certification bodies, insurers, and logistics providers who understand overseas-to-Canada operations.', '我们将您与了解海外至加拿大业务的律师、报关行、认证机构、保险公司和物流提供商联系起来。') },
              { title: t('Documentation review', '文档审查'), desc: t('We review your product documentation, labels, and claims for North American compliance and customer clarity.', '我们审查您的产品文档、标签和声明，确保符合北美合规要求和客户清晰度。') },
              { title: t('Contract guidance', '合同指导'), desc: t('We help you understand distributor agreements, liability clauses, and warranty terms before you sign.', '我们在签署前帮助您理解经销协议、责任条款和保修条款。') },
            ].map((item, i) => (
              <div key={i} className="rc-block flex gap-3">
                <span className="text-[#C00000] text-[14px] mt-0.5">✓</span>
                <div>
                  <h4 className="text-[13px] md:text-[14px] font-semibold mb-1">{item.title}</h4>
                  <p className="text-[11px] md:text-[13px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: FAQ */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('FAQ', '常见问题')}</p>
          <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10">
            {t('Responsibility Chain FAQ', '责任链常见问题')}
          </h2>
          <div className="max-w-[800px] space-y-4">
            {[
              { q: t('What is a responsibility chain audit?', '什么是责任链审计？'), a: t('A structured assessment of all obligations, risks, and accountabilities involved in bringing your product to North America — from compliance and import to after-sales and liability. We identify gaps, assign ownership, and recommend specific actions.', '对将您的产品带到北美所涉及的所有义务、风险和责任的结构化评估——从合规和进口到售后和责任。我们识别差距、分配责任并推荐具体行动。') },
              { q: t('Do you provide legal or insurance services directly?', '你们直接提供法律或保险服务吗？'), a: t('No. We are not lawyers or insurance brokers. We coordinate with professional partners who are. Our role is to make sure you ask the right questions and connect with the right specialists.', '不。我们不是律师或保险经纪人。我们与专业合作伙伴协调。我们的作用是确保您问对问题并与合适的专家联系。') },
              { q: t('How long does a responsibility chain audit take?', '责任链审计需要多长时间？'), a: t('Typically 2–4 weeks, depending on product complexity and how much documentation you already have. The output is a clear gap list, priority actions, and recommended partner introductions.', '通常2–4周，取决于产品复杂度和您已有的文档量。输出是明确的差距清单、优先行动和推荐合作伙伴介绍。') },
              { q: t('Is this only for physical products?', '这仅适用于实体产品吗？'), a: t('Primarily yes. The responsibility chain framework is designed for companies importing physical goods to North America. Service companies have a different risk profile, though some principles apply.', '主要是的。责任链框架为向北美进口实体商品的公司设计。服务公司有不同的风险特征，尽管某些原则适用。') },
            ].map((faq, i) => (
              <details key={i} className="rc-block group border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 cursor-pointer list-none">
                  <span className="text-[13px] md:text-[15px] font-medium pr-4">{faq.q}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 text-[#767676]">
                    <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-[12px] md:text-[14px] text-[#555] leading-[1.7]">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: CTA */}
      <section className="section-padding bg-[#1a1a2e]">
        <div className="container-site">
          <div className="max-w-[700px]">
            <h2 className="font-serif text-white text-[26px] md:text-[30px] lg:text-[34px] leading-[1.35] md:leading-[1.3] tracking-tight mb-6">
              {t('Map your responsibility chain before you ship.', '发货前绘制您的责任链。')}
            </h2>
            <Link to="/contact" className="btn-primary text-[12px] md:text-[14px]">
              {t('Request a Responsibility Chain Audit', '申请责任链审计')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
