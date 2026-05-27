import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function HomeAbout() {
  const { t, lang } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.habout-block'), {
        y: 25, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 80%', once: true },
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-white">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 habout-block">
            <p className="text-label mb-3">{t('About', '关于')}</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] md:leading-[1.3] tracking-tight mb-5 md:mb-6">
              {t('Clear answers. Concrete plans.', '清晰答案。具体计划。')}
            </h2>
            <p className="text-[12px] md:text-[14px] text-[#555] leading-[1.8] mb-5">
              {t(
                'CCBONLINE INC. helps businesses enter the North American market. Readiness assessments, market comparisons, risk screening, and actionable launch plans.',
                'CCBONLINE INC. 帮助企业进入北美市场。就绪度评估、市场比较、风险筛查和可执行的启动计划。'
              )}
            </p>
            <Link to={`/${lang}/about`} className="inline-flex items-center gap-1.5 text-[11px] md:text-[13px] font-medium text-[#212121] hover:text-[#00B894] transition-colors">
              {t('Learn more', '了解更多')} <ArrowRight size={13} />
            </Link>
          </div>

          <div className="lg:col-span-7 habout-block">
            <h3 className="text-[13px] md:text-[14px] font-semibold mb-4 md:mb-5">{t('How We Help', '我们如何帮助')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                { title: t('Is your product ready?', '产品准备好了吗？'), desc: t('Evaluate product-market fit before investing.', '投资前评估产品适配度。') },
                { title: t('Which market first?', '先选哪个市场？'), desc: t('Compare U.S. and Canada on size, regulation, cost.', '从规模、监管、成本比较美加。') },
                { title: t('What are the risks?', '有哪些风险？'), desc: t('Map out compliance and liability exposure.', '梳理合规和责任风险。') },
                { title: t('What to do first?', '先做什么？'), desc: t('Get a 0–90 day plan with clear milestones.', '获得含里程碑的0–90天计划。') },
              ].map((item, i) => (
                <div key={i} className="p-4 md:p-5 bg-[#F8F9FA]">
                  <h4 className="text-[12px] md:text-[14px] font-semibold mb-1.5">{item.title}</h4>
                  <p className="text-[11px] md:text-[12px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
