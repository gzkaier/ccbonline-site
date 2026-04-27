import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Factory, ShoppingCart, Award, Building2, Handshake } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function WhoWeWorkWith() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const audiences = [
    { icon: Factory, text: t('Manufacturing enterprises', '制造型企业'), sub: t('Precision parts, electronics, hardware, equipment, automotive/robotics supply chain', '精密零部件、电子电器、五金、设备、汽车/机器人相关供应链') },
    { icon: ShoppingCart, text: t('Cross-border e-commerce', '跨境电商企业'), sub: t('Amazon.ca, Shopify platforms or local channel operators', 'Amazon.ca、Shopify等平台或本地渠道运营的品牌与工厂') },
    { icon: Award, text: t('Brand exporters', '品牌出海企业'), sub: t('Consumer goods, health products, outdoor gear entering Canada/North America', '消费品、健康相关产品、户外用品等品牌进入加拿大/北美市场') },
    { icon: Building2, text: t('Local growing businesses', '本地成长型企业'), sub: t('Businesses needing AI websites, digital marketing, and customer development', '需要 AI 网站、数字营销、客户开发与业务流程数字化的本地企业') },
    { icon: Handshake, text: t('Traders & agents', '贸易商/代理商'), sub: t('Trading firms looking to establish local presence, websites, and customer systems', '希望建立本地业务主体、官网、获客系统与服务流程的贸易型企业') },
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
              {t('Who We Serve', '我们服务的企业类型')}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {audiences.map((a, i) => {
                const Icon = a.icon
                return (
                  <div key={i} className="audience-item flex items-start gap-3 p-4 bg-white border border-[#E5E5E5]">
                    <Icon size={18} strokeWidth={1.5} className="text-[#767676] mt-0.5 min-w-[18px]" />
                    <div>
                      <span className="text-[13px] md:text-[14px] font-medium block">{a.text}</span>
                      <span className="text-[11px] md:text-[12px] text-[#999] leading-[1.5] block mt-0.5">{a.sub}</span>
                    </div>
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
