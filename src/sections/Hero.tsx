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
      .from(el.querySelector('.hero-btns'), { y: 15, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2')
    return () => { tl.kill() }
  }, [])

  return (
    <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/80 to-[#0a0a1a]/40" />

      <div ref={contentRef} className="relative z-10 container-site pb-[5vh] md:pb-[10vh] pt-[16vh] md:pt-[22vh]">
        <p className="hero-label text-white/50 text-[11px] md:text-[13px] tracking-widest uppercase mb-3 md:mb-4">
          CCBONLINE INC. · {t('智桥国际', 'Zhiqiao')}
        </p>

        <h1
          className="font-serif text-white text-[5vw] md:text-[3vw] leading-[1.35] md:leading-[1.3] tracking-tight max-w-[800px] mb-3 md:mb-5"
          style={{ wordBreak: 'keep-all' }}
        >
          {t(
            'Helping Chinese companies enter the North American market with clarity and confidence.',
            '帮助中国企业稳健进入北美市场。'
          )}
        </h1>

        <p className="hero-sub text-white/65 text-[12px] md:text-[15px] leading-[1.7] md:leading-[1.8] max-w-[600px] mb-4 md:mb-6">
          {t(
            'Market-fit assessment, entry planning, and execution support. Know whether your product fits, which market to enter first, and what your first 90 days should look like.',
            '产品适配评估、进入规划和落地支持。搞清楚产品是否适合、先选哪个市场、前90天做什么。'
          )}
        </p>

        <div className="hero-btns flex flex-wrap gap-3 md:gap-4">
          <Link to="/contact" className="btn-primary text-[12px] md:text-[14px] px-5 py-2.5 md:px-8 md:py-3.5">
            {t('Book a Consultation', '预约咨询')}
          </Link>
          <Link to="/services" className="btn-outline text-[12px] md:text-[14px] px-5 py-2.5 md:px-8 md:py-3.5" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}>
            {t('View Services', '查看服务')}
          </Link>
        </div>
      </div>
    </section>
  )
}
