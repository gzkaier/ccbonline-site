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
      .from(el.querySelectorAll('.hero-line'), { y: 30, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power2.out' }, '-=0.3')
      .from(el.querySelector('.hero-sub'), { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.3')
      .from(el.querySelector('.hero-btns'), { y: 15, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
    return () => { tl.kill() }
  }, [])

  return (
    <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="/images/canada-north-america-market-entry-consulting.jpg"
          alt="CCBONLINE helps businesses enter Canada and North America through market entry diagnosis and local execution support."
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/80 to-[#0a0a1a]/40" />

      <div ref={contentRef} className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
        <p className="hero-label text-white/50 text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5">
          CCBONLINE INC. · {t('中加商业在线', 'CCBONLINE')}
        </p>

        <h1
          className="font-serif text-white mb-4 md:mb-6"
        >
          <span className="hero-line block text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.2] tracking-tight">
            Canada & North America
          </span>
          <span className="hero-line block text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.2] tracking-tight">
            Market Entry Partner
          </span>
          <span className="hero-line block text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[1.2] tracking-tight">
            
          </span>
        </h1>

        <p className="hero-sub text-white/65 text-[15px] md:text-[16px] leading-[1.65] md:leading-[1.7] max-w-[640px] mb-6 md:mb-8">
          {t(
            'Market-entry diagnosis, compliance pathway design, channel validation, and local execution support for businesses entering Canada and North America.',
            '为中国企业进入加拿大和北美提供市场进入诊断、合规路径设计、渠道验证和本地执行支持。'
          )}
        </p>

        <div className="hero-btns flex flex-col sm:flex-row gap-3 md:gap-4">
          <Link to="/contact" className="btn-primary text-[15px] md:text-[15px] px-6 py-3.5 min-h-[52px]">
            {t('Book a Market Entry Consultation', '预约市场进入咨询')}
          </Link>
          <Link to="/services" className="btn-outline text-[15px] md:text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
            {t('View Services', '查看服务')}
          </Link>
        </div>
      </div>
    </section>
  )
}
