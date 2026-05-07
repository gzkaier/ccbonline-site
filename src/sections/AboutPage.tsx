import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AboutPage() {
  const { t } = useLanguage()
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = t(
      'About CCBONLINE | North America Market Entry Advisory',
      '关于CCBONLINE | 北美市场进入咨询'
    )
    window.scrollTo(0, 0)
    const page = pageRef.current
    if (!page) return
    const ctx = gsap.context(() => {
      gsap.from(page.querySelectorAll('.ab-block'), {
        y: 25, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: page, start: 'top 80%', once: true },
      })
    }, page)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef}>
      <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('About', '关于')}</p>
          <h1 className="font-serif text-[#212121] text-[28px] md:text-[32px] lg:text-[36px] leading-[1.35] tracking-tight max-w-[800px] mb-4">
            {t('About CCBONLINE | North America Market Entry Advisory', '关于CCBONLINE | 北美市场进入咨询')}
          </h1>
          <p className="text-[12px] md:text-[14px] text-[#767676] max-w-[600px]">
            {t('Canada-based market entry advisory and execution support company helping businesses enter Canada and North America.', '总部位于加拿大的市场进入咨询与落地支持公司，帮助企业进入加拿大和北美。')}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4 ab-block">
              <p className="text-label mb-3">{t('What We Do', '我们做什么')}</p>
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] md:leading-[1.3] tracking-tight">
                {t('Market judgment, compliance awareness, channel understanding, local resources, and execution support.', '市场判断、合规意识、渠道理解、本地资源和执行支持。')}
              </h2>
            </div>
            <div className="lg:col-span-8 ab-block">
              <p className="text-[14px] md:text-[16px] text-[#444] leading-[1.8] mb-5">
                {t(
                  'CCBONLINE INC. is a Canada-registered consulting and execution support company. We support manufacturers, brands, industrial suppliers, and growth-stage companies entering Canada and North America through structured market-entry diagnosis, compliance pathway design, channel validation, local partner coordination, and hands-on execution support.',
                  'CCBONLINE INC. 是一家加拿大注册的咨询与落地支持公司。我们通过结构化的市场进入诊断、合规路径设计、渠道验证、本地合作伙伴协调和实际执行支持，帮助中国制造企业、品牌和工业公司进入加拿大和北美。'
                )}
              </p>
              <p className="text-[13px] md:text-[14px] text-[#555] leading-[1.8] mb-5">
                {t(
                  'We are not a marketing agency, a web development shop, or a lead-generation platform. We are market-entry advisors who combine market judgment, compliance awareness, channel understanding, local resources, and execution discipline to help Chinese companies build real operations on the ground in North America.',
                  '我们不是营销机构、网站开发公司或获客平台。我们是市场进入顾问，结合市场判断、合规意识、渠道理解、本地资源和执行纪律，帮助中国企业在北美建立真实的运营根基。'
                )}
              </p>
              <p className="text-[12px] md:text-[14px] text-[#767676] leading-[1.8]">
                {t(
                  'We do not replace lawyers, accountants, customs brokers, or logistics providers. We coordinate across them to build a practical, responsible market entry path.',
                  '我们不替代律师、会计师、报关行或物流提供商。我们协同各方构建实际、负责的市场进入路径。'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="container-site">
          <div className="relative w-full aspect-[21/9] md:aspect-[3/1] overflow-hidden bg-[#F8F9FA]">
            <img src="/images/about-cover.jpg" alt="CCBONLINE INC. connects businesses with Canada and North America markets through market entry consulting." className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <p className="text-[11px] text-[#999] mt-2 italic">Bridging Markets, Building Connections</p>
        </div>
      </section>

      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Team', '团队')}</p>
          <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[500px] mb-10">
            {t('Who We Are', '我们是谁')}
          </h2>
          <div className="max-w-[680px]">
            <div className="ab-block mb-6">
              <h3 className="text-[16px] md:text-[20px] font-semibold mb-4">{t('CCBONLINE INC.', 'CCBONLINE INC.')}</h3>
              <p className="text-[12px] md:text-[13px] text-[#C00000] font-medium mb-4">{t('Market Entry Advisory Team', '市场进入顾问团队')}</p>
              <p className="text-[13px] md:text-[14px] text-[#555] leading-[1.8] mb-4">
                {t(
                  'CCBONLINE INC. is a Canada-based market entry advisory team with years of experience helping businesses navigate the Canadian and North American markets. Our work spans market-entry consulting, customer development, brand localization, compliance coordination, and execution support.',
                  'CCBONLINE INC. 是一支总部位于加拿大的市场进入顾问团队，多年来帮助中国企业开拓加拿大和北美市场。我们的工作涵盖市场进入咨询、客户开发、品牌本地化、合规协调和落地执行支持。'
                )}
              </p>
              <p className="text-[13px] md:text-[14px] text-[#555] leading-[1.8]">
                {t(
                  'We work directly with each client, providing the judgment and practical support needed to turn market-entry plans into real customer conversations, partnerships, and operational presence in North America.',
                  '我们直接与每位客户合作，提供将市场进入计划转化为实际客户对话、合作伙伴关系和北美运营根基所需的判断和实际支持。'
                )}
              </p>
            </div>
            <div className="ab-block grid grid-cols-1 sm:grid-cols-2 gap-4 text-[12px] md:text-[13px]">
              <div className="p-4 bg-white border border-[#E5E5E5]">
                <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">{t('Founded', '成立时间')}</p>
                <p className="font-medium">2020</p>
              </div>
              <div className="p-4 bg-white border border-[#E5E5E5]">
                <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">{t('Languages', '服务语言')}</p>
                <p className="font-medium">{t('Chinese / English', '中文 / 英文')}</p>
              </div>
              <div className="p-4 bg-white border border-[#E5E5E5]">
                <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">{t('Location', '所在地')}</p>
                <p className="font-medium">84 Kenhar Dr, North York, ON M9L 1N2</p>
              </div>
              <div className="p-4 bg-white border border-[#E5E5E5]">
                <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">{t('Focus', '专注领域')}</p>
                <p className="font-medium">{t('Canada & North America market entry', '加拿大与北美市场进入')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <p className="text-label mb-3">{t('What We Do Not Do', '我们不做什么')}</p>
          <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10">
            {t('Clear Boundaries, Clear Value', '清晰的边界，清晰的价值')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[800px]">
            {[
              { title: t('We do not replace lawyers or accountants', '我们不替代律师或会计师'), desc: t('We coordinate with them. We are not licensed to provide legal or tax advice.', '我们与他们协调。我们没有提供法律或税务建议的资质。') },
              { title: t('We do not guarantee sales or revenue', '我们不保证销售或收入'), desc: t('We build the conditions for market entry. Actual sales depend on product, timing, and execution.', '我们建立市场进入的条件。实际销售取决于产品、时机和执行。') },
              { title: t('We are not a digital marketing agency', '我们不是数字营销机构'), desc: t('Digital presence is part of market entry infrastructure, not our primary service. We build what is needed for credibility, not campaigns.', '数字化布局是市场进入基础设施的一部分，不是我们的主要服务。我们建立可信度所需的内容，不是营销活动。') },
              { title: t('We do not handle customs clearance directly', '我们不直接处理清关'), desc: t('We work with licensed customs brokers. We design the pathway and introduce the right partners.', '我们与持牌报关行合作。我们设计路径并介绍合适的合作伙伴。') },
            ].map((item, i) => (
              <div key={i} className="ab-block card-border bg-white">
                <h3 className="text-[14px] md:text-[15px] font-semibold mb-2">{item.title}</h3>
                <p className="text-[11px] md:text-[13px] text-[#767676] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#1a1a2e]">
        <div className="container-site">
          <div className="max-w-[700px]">
            <h2 className="font-serif text-white text-[26px] md:text-[30px] lg:text-[34px] leading-[1.35] md:leading-[1.3] tracking-tight mb-6">
              {t('Ready to evaluate your North America readiness?', '准备好评估您的北美市场准备程度了吗？')}
            </h2>
            <Link to="/contact" className="btn-primary text-[12px] md:text-[14px]">
              {t('Discuss Your Market Entry Plan', '讨论您的市场进入计划')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
