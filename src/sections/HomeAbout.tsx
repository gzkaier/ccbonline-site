import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function HomeAbout() {
  const { t } = useLanguage()
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
            <h2 className="font-serif text-[#212121] text-[6vw] md:text-[1.8vw] leading-[1.3] tracking-tight mb-5 md:mb-6">
              {t('A consulting and digital growth partner', '咨询与数字增长合作伙伴')}
            </h2>
            <p className="text-[13px] md:text-[14px] text-[#555] leading-[1.8] mb-5">
              {t(
                'CCBONLINE INC. works with Chinese businesses exploring or preparing for entry into Canada and North America. We help clients move from uncertainty to structure through market-entry thinking, setup guidance, localized communication, and digital infrastructure.',
                'CCBONLINE INC. 服务于正在评估或准备进入加拿大及北美市场的中国企业。我们帮助客户把"方向不清、路径分散、表达不足、系统缺失"的状态，转化为更有结构的市场进入与增长准备。'
              )}
            </p>
            <Link to="/about" className="inline-flex items-center gap-1.5 text-[12px] md:text-[13px] font-medium text-[#212121] hover:text-[#C00000] transition-colors">
              {t('Read more about us', '了解更多')} <ArrowRight size={13} />
            </Link>
          </div>

          <div className="lg:col-span-7 habout-block">
            <h3 className="text-[14px] font-semibold mb-4 md:mb-5">{t('What We Help Clients Do', '我们帮助客户完成的核心事项')}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {[
                { title: t('Clarify entry priorities', '明确进入优先级'), desc: t('Understand which markets and segments deserve focus first.', '了解哪些市场和细分方向值得优先关注。') },
                { title: t('Reduce setup uncertainty', '降低落地不确定性'), desc: t('Navigate compliance and operational preparation with guidance.', '在实际指导下完成合规与运营准备。') },
                { title: t('Improve local trust', '改善本地信任'), desc: t('Rebuild materials and messaging to meet local expectations.', '重构资料与信息以符合本地期望。') },
                { title: t('Build digital lead systems', '搭建数字获客系统'), desc: t('Create bilingual websites and inquiry-capture infrastructure.', '创建双语官网和线索收集基础设施。') },
              ].map((item, i) => (
                <div key={i} className="p-4 md:p-5 bg-[#F8F9FA]">
                  <h4 className="text-[13px] md:text-[14px] font-semibold mb-1.5">{item.title}</h4>
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
