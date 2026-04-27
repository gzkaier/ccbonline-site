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
      'About CCBONLINE INC. — Consulting & Digital Growth Partner',
      '关于 CCBONLINE INC. — 咨询与数字增长合作伙伴'
    )
    window.scrollTo(0, 0)
    const page = pageRef.current
    if (!page) return
    const ctx = gsap.context(() => {
      gsap.from(page.querySelectorAll('.ap-block'), {
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
          <p className="text-label mb-3">{t('About Us', '关于我们')}</p>
          <h1 className="font-serif text-[#212121] text-[7vw] md:text-[2.8vw] leading-[1.25] tracking-tight max-w-[780px] mb-4">
            {t(
              'A consulting and digital growth partner for Chinese businesses entering Canada and North America.',
              '面向中国企业进入加拿大与北美市场的咨询与数字增长合作伙伴。'
            )}
          </h1>
          <p className="text-[14px] text-[#767676] max-w-[560px]">
            {t(
              'CCBONLINE INC. (智桥国际在线服务有限公司) combines market-entry consulting, compliance pathways, and AI-driven digital growth to help businesses reduce trial-and-error costs and build sustainable customer relationships.',
              'CCBONLINE INC.（智桥国际在线服务有限公司）将市场进入咨询、合规路径与AI驱动的数字增长相结合，帮助企业降低进入陌生市场的试错成本，建立可持续的客户关系。'
            )}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4 ap-block">
              <p className="text-label mb-3">{t('Who We Are', '我们是谁')}</p>
              <h2 className="font-serif text-[#212121] text-[6vw] md:text-[1.8vw] leading-[1.3] tracking-tight">
                {t('From uncertainty to structure', '从模糊到结构')}
              </h2>
            </div>
            <div className="lg:col-span-8 ap-block">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.8] mb-5">
                {t(
                  'We work with Chinese businesses that are exploring or preparing for entry into Canada and North America. Our role is to help clients move from uncertainty to structure — combining market-entry thinking, practical setup guidance, localized communication, and digital growth infrastructure.',
                  '我们服务于正在评估或准备进入加拿大及北美市场的中国企业。我们的角色，是帮助客户把"方向不清、路径分散、表达不足、系统缺失"的状态，转化为更有结构的市场进入与增长准备。'
                )}
              </p>
              <p className="text-[14px] text-[#767676] leading-[1.8]">
                {t(
                  'We are not a generic marketing agency, a SaaS vendor, or a legal services firm. We are a focused consulting and execution partner bridging the gap between Chinese business capability and North American market requirements.',
                  '我们不是通用的营销代理公司、SaaS 供应商或法律服务机构。我们是一个聚焦的咨询与执行合作伙伴，连接中国商业能力与北美市场需求之间的鸿沟。'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bridge Image — Brand metaphor */}
      <section className="w-full">
        <div className="container-site">
          <div className="relative w-full aspect-[21/9] md:aspect-[3/1] overflow-hidden bg-[#F8F9FA]">
            <img
              src="/images/about-cover.jpg"
              alt="Bridging markets"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <p className="text-[11px] text-[#999] mt-2 italic">
            {t('Bridging Markets, Building Connections', 'Bridging Markets, Building Connections')}
          </p>
        </div>
      </section>

      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Core Values', '核心价值')}</p>
          <h2 className="font-serif text-[#212121] text-[6vw] md:text-[1.8vw] leading-[1.3] tracking-tight max-w-[600px] mb-10">
            {t('Make the right judgment first, then invest with confidence.', '先把判断做对，再决定投入。')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { num: '01', title: t('Judge first, then invest', '先判断，后投入'), desc: t('Determine which products, industries, and customers are most suitable for entering Canada/North America first.', '判断哪些产品、行业和客户更适合优先进入加拿大/北美市场。') },
              { num: '02', title: t('Comply first, then grow', '先合规，后发展'), desc: t('Map out company registration, product certification, tax, and import requirements to reduce risks.', '梳理公司注册、产品认证、税务与进口要求，降低后期风险。') },
              { num: '03', title: t('Build trust first, then orders', '先信任，后订单'), desc: t('Rebuild business materials and website messaging so overseas clients understand, trust, and engage.', '重构商业资料与网站表达，让海外客户看懂、信任并愿意沟通。') },
              { num: '04', title: t('Validate first, then scale', '先验证，后放大'), desc: t('Use small-scale validation to gather real feedback before gradually expanding.', '通过小范围验证获取真实反馈，再逐步扩大投入与市场覆盖。') },
            ].map((v) => (
              <div key={v.num} className="ap-block card-border bg-white">
                <span className="text-[#C00000] text-[11px] font-bold">{v.num}</span>
                <h3 className="text-[14px] md:text-[15px] font-semibold mt-2 mb-2">{v.title}</h3>
                <p className="text-[12px] md:text-[13px] text-[#767676] leading-[1.6]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <p className="text-label mb-3">{t('Founder', '创始人')}</p>
          <h2 className="font-serif text-[#212121] text-[6vw] md:text-[1.8vw] leading-[1.3] tracking-tight max-w-[500px] mb-10">
            {t('Founder Introduction', '创始人介绍')}
          </h2>
          <div className="max-w-[680px]">
            <div className="ap-block mb-6">
              <h3 className="text-[18px] md:text-[20px] font-semibold mb-1">KAI CHEN <span className="text-[#767676] text-[14px] font-normal">{t('(Alex)', '（阿凯）')}</span></h3>
              <p className="text-[13px] text-[#C00000] font-medium mb-4">{t('Global Growth Partner', '全球增长合作伙伴')}</p>
              <p className="text-[14px] text-[#555] leading-[1.8] mb-4">
                {t(
                  'Long-term focus on helping Chinese businesses enter the Canadian and North American markets. Brings practical experience in market-entry consulting, digital growth, brand localization, and customer development.',
                  '长期专注于帮助中国企业进入加拿大和北美市场，具备市场进入咨询、数字化增长、品牌本地化和客户开发的实战经验。'
                )}
              </p>
              <p className="text-[14px] text-[#555] leading-[1.8]">
                {t(
                  'Committed to becoming a strategic and execution partner for Chinese businesses in North America — from making the right directional judgment, to building digital entry points, to continuously acquiring high-quality customers.',
                  '致力于成为中国企业在北美市场的战略与执行伙伴——从判断正确方向，到建立数字入口，再到持续获得高质量客户。'
                )}
              </p>
            </div>
            <div className="ap-block grid grid-cols-1 sm:grid-cols-2 gap-4 text-[13px]">
              <div className="p-4 bg-[#F8F9FA]">
                <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">{t('Founded', '成立时间')}</p>
                <p className="font-medium">2020</p>
              </div>
              <div className="p-4 bg-[#F8F9FA]">
                <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">{t('Languages', '服务语言')}</p>
                <p className="font-medium">{t('Chinese / English', '中文 / 英文')}</p>
              </div>
              <div className="p-4 bg-[#F8F9FA]">
                <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">{t('Core Market', '核心市场')}</p>
                <p className="font-medium">{t('Canada & North America', '加拿大及北美')}</p>
              </div>
              <div className="p-4 bg-[#F8F9FA]">
                <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">{t('Clients', '服务对象')}</p>
                <p className="font-medium">{t('Chinese businesses entering North America', '希望进入加拿大/北美市场的中国企业')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Why Choose Us', '为什么选择我们')}</p>
          <h2 className="font-serif text-[#212121] text-[6vw] md:text-[1.8vw] leading-[1.3] tracking-tight max-w-[600px] mb-10">
            {t('Why CCBONLINE', '为什么选择 CCBONLINE')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[720px]">
            {[
              { title: t('Consulting + execution integration', '咨询 + 执行一体化'), desc: t('Strategy connects to implementation. We do not stop at reports.', '策略连接落地，不止于报告。') },
              { title: t('Localization, not translation', '本地化，不是翻译'), desc: t('We rebuild messaging to match North American buyer expectations.', '重构信息表达以匹配北美买家期望。') },
              { title: t('Digital-driven growth', '数字化驱动'), desc: t('Websites, AI, and data make customer acquisition trackable and optimizable.', '网站、AI与数据让获客可追踪、可优化。') },
              { title: t('Results-oriented focus', '专注结果导向'), desc: t('Customer validation and business growth are our core goals.', '以客户验证和业务增长为目标。') },
            ].map((item, i) => (
              <div key={i} className="ap-block flex gap-3">
                <span className="text-[#C00000] text-[14px] mt-0.5">✓</span>
                <div>
                  <h4 className="text-[14px] font-semibold mb-1">{item.title}</h4>
                  <p className="text-[12px] md:text-[13px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#1a1a2e]">
        <div className="container-site">
          <div className="max-w-[700px]">
            <h2 className="font-serif text-white text-[6vw] md:text-[2.2vw] leading-[1.3] tracking-tight mb-6">
              {t('Want to learn more about how we can help?', '想了解更多关于我们如何提供帮助的信息？')}
            </h2>
            <Link to="/contact" className="btn-primary text-[13px] md:text-[14px]">{t('Book a Consultation', '预约咨询')}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
