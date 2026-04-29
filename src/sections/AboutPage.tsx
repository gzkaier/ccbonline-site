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
      'About — CCBONLINE INC.',
      '关于 — CCBONLINE INC.'
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
          <h1 className="font-serif text-[#212121] text-[5vw] md:text-[2.8vw] leading-[1.35] md:leading-[1.25] tracking-tight max-w-[780px] mb-4">
            {t('Helping Chinese companies enter North America with confidence.', '帮助中国企业自信地进入北美市场。')}
          </h1>
          <p className="text-[12px] md:text-[14px] text-[#767676] max-w-[560px]">
            {t('Readiness assessment, market comparison, risk screening, and step-by-step entry planning.', '就绪度评估、市场比较、风险筛查和分步入场规划。')}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            <div className="lg:col-span-4 ap-block">
              <p className="text-label mb-3">{t('What We Do', '我们做什么')}</p>
              <h2 className="font-serif text-[#212121] text-[5vw] md:text-[1.8vw] leading-[1.35] md:leading-[1.3] tracking-tight">
                {t('Turn market entry questions into clear action plans.', '将入场问题转化为清晰行动计划。')}
              </h2>
            </div>
            <div className="lg:col-span-8 ap-block">
              <p className="text-[14px] md:text-[16px] text-[#444] leading-[1.8] mb-5">
                {t(
                  'CCBONLINE INC. works with Chinese companies preparing to enter the U.S. and Canadian markets. We help answer: Is your product ready? Which market fits better? What compliance issues need attention? What should the first 90 days look like?',
                  'CCBONLINE INC. 与准备进入美国和加拿大市场的中国企业合作。帮助回答：产品准备好了吗？哪个市场更适合？需要注意哪些合规问题？前90天怎么安排？'
                )}
              </p>
              <p className="text-[12px] md:text-[14px] text-[#767676] leading-[1.8]">
                {t(
                  'We deliver structured assessments, practical recommendations, and execution-ready plans. Our clients leave each engagement knowing exactly what to do next.',
                  '我们提供结构化评估、实用建议和可执行的计划。每次合作结束，客户都清楚知道下一步做什么。'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="container-site">
          <div className="relative w-full aspect-[21/9] md:aspect-[3/1] overflow-hidden bg-[#F8F9FA]">
            <img src="/images/about-cover.jpg" alt="Bridging markets" className="w-full h-full object-cover opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent" />
          </div>
          <p className="text-[11px] text-[#999] mt-2 italic">Bridging Markets, Building Connections</p>
        </div>
      </section>

      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('How We Work', '工作方式')}</p>
          <h2 className="font-serif text-[#212121] text-[5vw] md:text-[1.8vw] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10">
            {t('Principles that guide every engagement.', '指导每次合作的原则。')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { num: '01', title: t('Assess first', '先评估'), desc: t('Know your readiness before committing significant resources.', '投入大量资源前了解就绪度。') },
              { num: '02', title: t('Compare first', '先比较'), desc: t('Understand U.S. and Canada differences to pick the right starting point.', '了解美加差异，选择正确起点。') },
              { num: '03', title: t('Build trust first', '先建信任'), desc: t('Prepare materials that North American customers understand.', '准备北美客户能理解的材料。') },
              { num: '04', title: t('Validate first', '先验证'), desc: t('Test small before committing to large-scale expansion.', '小规模测试后再扩大。') },
            ].map((v) => (
              <div key={v.num} className="ap-block card-border bg-white">
                <span className="text-[#C00000] text-[11px] font-bold">{v.num}</span>
                <h3 className="text-[13px] md:text-[15px] font-semibold mt-2 mb-2">{v.title}</h3>
                <p className="text-[11px] md:text-[13px] text-[#767676] leading-[1.6]">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <p className="text-label mb-3">{t('Founder', '创始人')}</p>
          <h2 className="font-serif text-[#212121] text-[5vw] md:text-[1.8vw] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[500px] mb-10">
            {t('Who Leads Your Project', '谁来主导您的项目')}
          </h2>
          <div className="max-w-[680px]">
            <div className="ap-block mb-6">
              <h3 className="text-[16px] md:text-[20px] font-semibold mb-1">KAI CHEN <span className="text-[#767676] text-[13px] md:text-[14px] font-normal">{t('(Alex)', '（阿凯）')}</span></h3>
              <p className="text-[12px] md:text-[13px] text-[#C00000] font-medium mb-4">{t('Founder & Market Entry Advisor', '创始人 & 市场进入顾问')}</p>
              <p className="text-[13px] md:text-[14px] text-[#555] leading-[1.8] mb-4">
                {t(
                  'Based in Toronto, KAI has spent years helping Chinese businesses navigate the Canadian and North American markets, with experience in market-entry consulting, customer development, and brand localization.',
                  '常驻多伦多，KAI 多年帮助中国企业 navigate 加拿大和北美市场，具备市场准入咨询、客户开发和品牌本地化经验。'
                )}
              </p>
              <p className="text-[13px] md:text-[14px] text-[#555] leading-[1.8]">
                {t(
                  'He works directly with each client, providing the judgment and support needed to turn plans into real customer conversations and partnerships.',
                  '他直接与每位客户合作，提供将计划转化为实际客户对话和合作关系所需的判断和支持。'
                )}
              </p>
            </div>
            <div className="ap-block grid grid-cols-1 sm:grid-cols-2 gap-4 text-[12px] md:text-[13px]">
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
                <p className="font-medium">{t('Chinese businesses entering North America', '准备进入北美的中国企业')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Why Work With Us', '为什么与我们合作')}</p>
          <h2 className="font-serif text-[#212121] text-[5vw] md:text-[1.8vw] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mb-10">
            {t('What you can expect.', '您可以期待的。')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[720px]">
            {[
              { title: t('Direct senior involvement', '资深顾问直接参与'), desc: t('KAI works directly with every client. No junior handoffs.', 'KAI 直接参与每个项目，没有初级团队转手。') },
              { title: t('Actionable output', '可执行的交付'), desc: t('Plans with clear next steps, not documents to file away.', '包含明确下一步的计划，不是放进抽屉的文件。') },
              { title: t('Both markets, one view', '两个市场统一视角'), desc: t('We compare U.S. and Canada so you can choose.', '比较美国和加拿大，帮助您做出选择。') },
              { title: t('Support through execution', '执行阶段持续支持'), desc: t('Advisory retainer keeps you moving forward.', '陪跑顾问确保您持续推进。') },
            ].map((item, i) => (
              <div key={i} className="ap-block flex gap-3">
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

      <section className="section-padding bg-[#1a1a2e]">
        <div className="container-site">
          <div className="max-w-[700px]">
            <h2 className="font-serif text-white text-[5vw] md:text-[2.2vw] leading-[1.35] md:leading-[1.3] tracking-tight mb-6">
              {t('Want to evaluate your North America readiness?', '想评估北美就绪度？')}
            </h2>
            <Link to="/contact" className="btn-primary text-[12px] md:text-[14px]">{t('Book a Consultation', '预约咨询')}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
