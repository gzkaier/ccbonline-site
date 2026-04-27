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
  }, [t])

  return (
    <div ref={pageRef}>
      {/* Hero */}
      <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('About', '关于')}</p>
          <h1 className="font-serif text-[#212121] text-[7vw] md:text-[2.8vw] leading-[1.25] tracking-tight max-w-[780px]">
            {t(
              'A consulting and digital growth partner for Chinese businesses entering Canada and North America.',
              '面向中国企业进入加拿大与北美市场的咨询与数字增长合作伙伴。'
            )}
          </h1>
        </div>
      </section>

      {/* Who We Are */}
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
                  'CCBONLINE INC. works with Chinese businesses that are exploring or preparing for entry into Canada and North America. Our role is to help clients move from uncertainty to structure — combining market-entry thinking, practical setup guidance, localized communication, and digital growth infrastructure.',
                  'CCBONLINE INC. 服务于正在评估或准备进入加拿大及北美市场的中国企业。我们的角色，是帮助客户把"方向不清、路径分散、表达不足、系统缺失"的状态，转化为更有结构的市场进入与增长准备。'
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

      {/* What We Help Clients Do */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Capabilities', '核心能力')}</p>
          <h2 className="font-serif text-[#212121] text-[6vw] md:text-[1.8vw] leading-[1.3] tracking-tight max-w-[600px] mb-10">
            {t('What We Help Clients Do', '我们帮助客户完成的核心事项')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {[
              { num: '01', title: t('Clarify entry priorities', '明确进入优先级'), desc: t('Understand which markets and segments deserve focus first.', '了解哪些市场和细分方向值得优先关注。') },
              { num: '02', title: t('Reduce setup uncertainty', '降低落地不确定性'), desc: t('Navigate compliance and operational preparation with practical guidance.', '在实际指导下完成合规与运营准备。') },
              { num: '03', title: t('Improve local communication and trust', '改善本地沟通与信任'), desc: t('Rebuild materials and messaging to meet local expectations.', '重构资料与信息以符合本地期望。') },
              { num: '04', title: t('Build digital systems for lead generation', '搭建数字获客系统'), desc: t('Create bilingual websites and inquiry-capture infrastructure.', '创建双语官网和线索收集基础设施。') },
            ].map((item) => (
              <div key={item.num} className="ap-block card-border bg-white">
                <span className="text-[#C00000] text-[12px] font-bold">{item.num}</span>
                <h3 className="text-[15px] font-semibold mt-2 mb-2">{item.title}</h3>
                <p className="text-[13px] text-[#767676] leading-[1.7]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Think */}
      <section className="section-padding bg-white">
        <div className="container-site">
          <p className="text-label mb-3">{t('Principles', '原则')}</p>
          <h2 className="font-serif text-[#212121] text-[6vw] md:text-[1.8vw] leading-[1.3] tracking-tight max-w-[500px] mb-10">
            {t('How We Think', '我们的工作逻辑')}
          </h2>
          <div className="space-y-8 max-w-[720px]">
            <div className="ap-block flex gap-4 md:gap-5">
              <span className="text-[#C00000] text-[13px] font-bold min-w-[24px]">01</span>
              <div>
                <h3 className="text-[16px] font-semibold mb-2">{t('Strategy before execution', '先判断路径，再推进执行')}</h3>
                <p className="text-[14px] text-[#555] leading-[1.8]">
                  {t(
                    'We begin with structured thinking about whether, where, and how your business should enter the market. Recommendations without a clear strategic foundation waste time and money.',
                    '我们先从结构化思考出发：您的企业是否适合进入、从哪里进入、如何进入。没有清晰策略基础的推荐，只会浪费时间和资源。'
                  )}
                </p>
              </div>
            </div>
            <div className="ap-block flex gap-4 md:gap-5">
              <span className="text-[#C00000] text-[13px] font-bold min-w-[24px]">02</span>
              <div>
                <h3 className="text-[16px] font-semibold mb-2">{t('Localization beyond translation', '本地化不是翻译，而是商业表达重构')}</h3>
                <p className="text-[14px] text-[#555] leading-[1.8]">
                  {t(
                    'Translating a Chinese website into English does not create local trust. We rebuild messaging, tone, structure, and visual presentation to meet North American business expectations.',
                    '将中文网站翻译成英文并不能建立本地信任。我们重构信息传递、语气、结构和视觉呈现，以符合北美商业期望。'
                  )}
                </p>
              </div>
            </div>
            <div className="ap-block flex gap-4 md:gap-5">
              <span className="text-[#C00000] text-[13px] font-bold min-w-[24px]">03</span>
              <div>
                <h3 className="text-[16px] font-semibold mb-2">{t('Digital infrastructure before growth scaling', '先搭建数字基础，再放大获客动作')}</h3>
                <p className="text-[14px] text-[#555] leading-[1.8]">
                  {t(
                    'We design bilingual websites as functional market entry points — with lead capture, inquiry handling, and clear pathways for prospects to understand your offering and take action.',
                    '我们将双语官网设计为功能性的市场进入入口——包含线索收集、咨询处理和清晰路径，让潜在客户了解您的产品并采取行动。'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Difference', '差异')}</p>
          <h2 className="font-serif text-[#212121] text-[6vw] md:text-[1.8vw] leading-[1.3] tracking-tight max-w-[600px] mb-10">
            {t('Why Our Approach Is Different', '我们的方法有何不同')}
          </h2>
          <div className="space-y-8 max-w-[720px]">
            <div className="ap-block">
              <h3 className="text-[16px] font-semibold mb-2">{t('1. Consulting connects to execution', '1. 咨询连接执行')}</h3>
              <p className="text-[14px] text-[#555] leading-[1.8]">
                {t('We do not deliver reports that sit on shelves. We connect strategic thinking to practical execution — building the websites, materials, and systems that make recommendations real.', '我们交付的不是放在架子上的报告。我们将战略思考与实际执行相连接——构建让建议变为现实的网站、资料和系统。')}
              </p>
            </div>
            <div className="ap-block">
              <h3 className="text-[16px] font-semibold mb-2">{t('2. Localization is business expression, not translation', '2. 本地化是商业表达重构，不是翻译')}</h3>
              <p className="text-[14px] text-[#555] leading-[1.8]">
                {t('Translating a Chinese website into English does not create local trust. We rebuild messaging, tone, structure, and visual presentation to meet North American business expectations.', '将中文网站翻译成英文并不能建立本地信任。我们重构信息传递、语气、结构和视觉呈现，以符合北美商业期望。')}
              </p>
            </div>
            <div className="ap-block">
              <h3 className="text-[16px] font-semibold mb-2">{t('3. A website is a market entry point, not a brochure', '3. 官网是市场入口，不是展示册')}</h3>
              <p className="text-[14px] text-[#555] leading-[1.8]">
                {t('We design bilingual websites as functional entry points into the North American market — with lead capture, inquiry handling, and clear pathways for prospects to take action.', '我们将双语官网设计为进入北美市场的功能入口——包含线索收集、咨询处理和清晰路径，让潜在客户采取行动。')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#1a1a2e]">
        <div className="container-site">
          <div className="max-w-[700px]">
            <h2 className="font-serif text-white text-[6vw] md:text-[2.2vw] leading-[1.3] tracking-tight mb-6">
              {t('Want to learn more about how we can help?', '想了解更多关于我们如何提供帮助的信息？')}
            </h2>
            <Link to="/contact" className="btn-primary text-[13px] md:text-[14px]">
              {t('Book a Consultation', '预约咨询')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
