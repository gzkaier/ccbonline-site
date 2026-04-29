import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Factory, ShoppingBag, Wrench, Cpu, Globe, Users } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function WhoWeWorkWith() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const audiences = [
    { icon: Factory, text: t('Manufacturers seeking overseas customers or distributors', '制造企业，寻找海外客户或分销商') },
    { icon: ShoppingBag, text: t('Consumer brands preparing for North American launch', '消费品牌，准备进入北美市场') },
    { icon: Wrench, text: t('Industrial suppliers looking for local partners', '工业供应商，寻找本地合作伙伴') },
    { icon: Cpu, text: t('Technology and AI hardware companies requiring structured entry planning', '科技与智能硬件企业，需要结构化进入规划') },
    { icon: Globe, text: t('Service companies expanding from China into Canada', '服务型企业，从中国扩展至加拿大') },
    { icon: Users, text: t('Cross-border teams needing local business support', '跨境团队，需要北美本地商务支持') },
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.audience-item'), {
        y: 20, opacity: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 80%', once: true },
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-[#F8F9FA]">
      <div className="container-site">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14">
          <div className="lg:col-span-4">
            <p className="text-label mb-3">{t('Clients', '客户')}</p>
            <h2 className="font-serif text-[#212121] text-[5vw] md:text-[1.8vw] leading-[1.35] md:leading-[1.3] tracking-tight mb-4">
              {t('Who We Work With', '我们服务的企业')}
            </h2>
            <p className="text-[12px] md:text-[14px] text-[#767676] leading-[1.7]">
              {t('We work with Chinese companies that are exploring or preparing for Canada and North America market entry.', '我们服务正在探索或准备进入加拿大与北美市场的中国企业。')}
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {audiences.map((a, i) => {
                const Icon = a.icon
                return (
                  <div key={i} className="audience-item flex items-start gap-3 p-4 bg-white border border-[#E5E5E5]">
                    <Icon size={18} strokeWidth={1.5} className="text-[#767676] mt-0.5 min-w-[18px]" />
                    <span className="text-[12px] md:text-[14px] text-[#444] leading-[1.6]">{a.text}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
