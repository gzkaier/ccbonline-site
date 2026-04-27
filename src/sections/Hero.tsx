import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router'
import gsap from 'gsap'

export default function Hero() {
  const { t } = useLanguage()
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = contentRef.current
    if (!el) return
    const tl = gsap.timeline({ delay: 0.2 })
    tl.from(el.querySelector('.hero-label'), { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' })
      .from(el.querySelector('h1'), { y: 30, opacity: 0, duration: 0.8, ease: 'power2.out' }, '-=0.3')
      .from(el.querySelector('.hero-sub'), { y: 20, opacity: 0, duration: 0.7, ease: 'power2.out' }, '-=0.4')
      .from(el.querySelector('.hero-guide'), { y: 15, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
      .from(el.querySelector('.hero-btns'), { y: 15, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2')
    return () => { tl.kill() }
  }, [])

  return (
    <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }}
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/80 to-[#0a0a1a]/40" />

      <div ref={contentRef} className="relative z-10 container-site pb-[8vh] md:pb-[10vh] pt-[22vh]">
        <p className="hero-label text-white/50 text-[12px] md:text-[13px] tracking-widest uppercase mb-4">
          CCBONLINE INC. · {t('智桥国际在线服务有限公司', 'Zhijiao International Online Services')}
        </p>

        <h1
          className="font-serif text-white text-[7.5vw] md:text-[3vw] leading-[1.25] tracking-tight max-w-[800px] mb-5"
          style={{ wordBreak: 'keep-all' }}
        >
          {t(
            'Helping Chinese businesses enter Canada with clarity and local trust.',
            '帮助中国企业更清晰地进入加拿大及北美市场。'
          )}
        </h1>

        <p className="hero-sub text-white/65 text-[14px] md:text-[15px] leading-[1.8] max-w-[640px] mb-4">
          {t(
            'CCBONLINE INC. (智桥国际在线服务有限公司) is a Canada-registered consulting firm. We help Chinese businesses understand Canadian market rules, complete North America market entry preparation, and improve overseas customer acquisition through AI-driven websites, digital marketing, brand localization, and operational support.',
            'CCBONLINE INC.（智桥国际在线服务有限公司）是一家注册于加拿大的咨询服务公司，专注于帮助中国企业理解加拿大市场规则、完成北美市场进入准备，并通过AI驱动的网站、数字营销、品牌本地化和运营支持提升海外获客效率。'
          )}
        </p>

        <p className="hero-guide text-white/40 text-[13px] italic mb-6">
          {t('Bridging Markets, Building Connections.', ' Bridging Markets, Building Connections.')}
        </p>

        <div className="hero-btns flex flex-wrap gap-3 md:gap-4">
          <Link to="/contact" className="btn-primary text-[13px] md:text-[14px] px-6 py-3 md:px-8 md:py-3.5">
            {t('Book a Consultation', '预约咨询')}
          </Link>
          <Link to="/services" className="btn-outline text-[13px] md:text-[14px] px-6 py-3 md:px-8 md:py-3.5" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}>
            {t('View Services', '查看服务')}
          </Link>
        </div>
      </div>
    </section>
  )
}
