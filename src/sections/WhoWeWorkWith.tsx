import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Building2, Factory, Handshake, Users, Target } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function WhoWeWorkWith() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const audiences = [
    { icon: Building2, text: t('Chinese SMEs', '中国中小企业') },
    { icon: Factory, text: t('Exporters and manufacturers', '出口商与制造商') },
    { icon: Handshake, text: t('Trading companies', '贸易公司') },
    { icon: Users, text: t('Founders and operators', '创始人与运营负责人') },
    { icon: Target, text: t('Businesses planning to enter Canada and North America', '计划进入加拿大及北美市场的企业') },
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
            <h2 className="font-serif text-[#212121] text-[6vw] md:text-[1.8vw] leading-[1.3] tracking-tight">
              {t('Who We Work With', '我们通常服务于')}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {audiences.map((a, i) => {
                const Icon = a.icon
                return (
                  <div key={i} className="audience-item flex items-center gap-3 p-4 bg-white border border-[#E5E5E5]">
                    <Icon size={18} strokeWidth={1.5} className="text-[#767676] min-w-[18px]" />
                    <span className="text-[13px] md:text-[14px] font-medium">{a.text}</span>
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
