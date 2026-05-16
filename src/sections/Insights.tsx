import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Insights() {
  const { t, lang } = useLanguage()
  const pageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    document.title = t(
      'Insights — Canada & North America Market Entry | CCBONLINE INC.',
      '洞察 — 加拿大与北美市场进入 | CCBONLINE INC.'
    )
    window.scrollTo(0, 0)
    const page = pageRef.current
    if (!page) return
    const ctx = gsap.context(() => {
      gsap.from(page.querySelectorAll('.ins-block'), {
        y: 25, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: page, start: 'top 80%', once: true },
      })
    }, page)
    return () => ctx.revert()
  }, [])

  const articles = [
    {
      category: t('Canada Entry', '加拿大进入'),
      title: t('Why Canada Is Often the Right First Step for Manufacturers', '为什么加拿大常是制造商的正确第一步'),
      excerpt: t('Lower risk, uniform regulation, and strong trade infrastructure make Canada a practical testing ground before US expansion.', '较低的风险、统一的法规和强大的贸易基础设施使加拿大成为美国扩张前的实用试验场。'),
      date: '2026.04',
    },
    {
      category: t('Compliance', '合规'),
      title: t('CSA, UL, and FCC: What Exporters Must Know', 'CSA、UL和FCC：出口商必须知道的'),
      excerpt: t('Certification requirements vary dramatically by product type. Here is a practical guide to navigating the North American certification landscape.', '认证要求因产品类型差异很大。这是一份帮你理清北美认证要求的实用指南。'),
      date: '2026.03',
    },
    {
      category: t('Responsibility Chain', '责任链'),
      title: t('The Invisible Risks of North American Market Entry', '北美市场进入的隐形风险'),
      excerpt: t('Product liability, warranty disputes, and insurance gaps often catch overseas companies by surprise. How to build protection before you ship.', '产品责任、保修纠纷和保险缺口常让海外企业措手不及。如何在发货前建立保护。'),
      date: '2026.03',
    },
    {
      category: t('Channel', '渠道'),
      title: t('Finding the Right Canadian Distributor: A Checklist', '找到合适的加拿大经销商：检查清单'),
      excerpt: t('Not all distributors are created equal. Key criteria for evaluating partners who can actually move your product in Canada.', '并非所有经销商都一样。评估能真正在加拿大推动您产品的合作伙伴的关键标准。'),
      date: '2026.02',
    },
    {
      category: t('Strategy', '策略'),
      title: t('0–90 Day Roadmap: From First Conversation to First Order in Canada', '0–90天路线图：从第一次对话到加拿大第一笔订单'),
      excerpt: t('A week-by-week breakdown of what companies should do in their first 90 days of Canada market entry.', '企业进入加拿大市场前90天每周应该做什么的逐周分解。'),
      date: '2026.02',
    },
    {
      category: t('Digital', '数字化'),
      title: t('Building Digital Trust for North American B2B Buyers', '为北美B2B买家建立数字化信任'),
      excerpt: t('North American buyers research extensively before contacting suppliers. What your digital presence must communicate.', '北美买家在联系供应商前会做大量调研。您的数字化布局必须传达什么。'),
      date: '2026.01',
    },
  ]

  return (
    <div ref={pageRef}>
      <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
        <div className="container-site">
          <p className="text-label mb-3">{t('Insights', '洞察')}</p>
          <h1 className="font-serif text-[#212121] text-[32px] md:text-[36px] lg:text-[42px] leading-[1.35] md:leading-[1.25] tracking-tight max-w-[800px] mb-4">
            {t('Market Entry Insights', '市场进入洞察')}
          </h1>
          <p className="text-[12px] md:text-[14px] text-[#767676] max-w-[600px]">
            {t('Practical guidance on Canada and North America market entry, compliance, channel development, and execution.', '关于加拿大和北美市场进入、合规、渠道开发和执行的实用指导。')}
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {articles.map((article, i) => (
              <div key={i} className="ins-block group cursor-pointer">
                <div className="bg-[#F8F9FA] aspect-[16/10] mb-4 overflow-hidden">
                  <div className="w-full h-full bg-[#E5E5E5] group-hover:bg-[#DDD] transition-colors duration-300 flex items-center justify-center">
                    <span className="text-[#999] text-[12px]">{article.category}</span>
                  </div>
                </div>
                <p className="text-[11px] text-[#999] mb-2">{article.date}</p>
                <h3 className="text-[14px] md:text-[15px] font-semibold mb-2 leading-[1.5] group-hover:text-[#00A884] transition-colors">
                  {article.title}
                </h3>
                <p className="text-[11px] md:text-[13px] text-[#767676] leading-[1.6]">{article.excerpt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#F8F9FA]">
        <div className="container-site text-center">
          <h2 className="font-serif text-[#212121] text-[24px] md:text-[28px] lg:text-[32px] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[600px] mx-auto mb-6">
            {t('Want personalized market entry guidance?', '想要个性化的市场进入指导？')}
          </h2>
          <Link to={`/${lang}/contact`} className="btn-primary text-[12px] md:text-[14px]">
            {t('Discuss Your Market Entry Plan', '讨论您的市场进入计划')}
          </Link>
        </div>
      </section>
    </div>
  )
}
