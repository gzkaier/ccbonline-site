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
    tl.from(el.querySelector('h1'), { y: 30, opacity: 0, duration: 0.8, ease: 'power2.out' })
      .from(el.querySelector('.hero-sub'), { y: 20, opacity: 0, duration: 0.7, ease: 'power2.out' }, '-=0.4')
      .from(el.querySelector('.hero-guide'), { y: 15, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
      .from(el.querySelector('.hero-btns'), { y: 15, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2')
      .from(el.querySelector('.hero-badges'), { y: 10, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.2')
    return () => { tl.kill() }
  }, [])

  const badges = [
    t('Canada-registered', '加拿大注册'),
    t('Bilingual Chinese & English', '中英双语'),
    t('Strategy + Execution', '策略与执行'),
    t('Lead-generation infrastructure', '获客基础设施'),
  ]

  return (
    <section
      className="relative w-full min-h-[100dvh] flex items-end"
      style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
    >
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 20% 80%, rgba(192,0,0,0.15) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 40%)' }} />

      <div ref={contentRef} className="relative z-10 container-site pb-[8vh] md:pb-[10vh] pt-[22vh]">
        <h1
          className="font-serif text-white text-[7.5vw] md:text-[3.2vw] leading-[1.25] tracking-tight max-w-[800px] mb-5"
          style={{ wordBreak: 'keep-all' }}
        >
          {t(
            'Helping Chinese businesses enter Canada with clarity and local trust.',
            '帮助中国企业更清晰地进入加拿大市场。'
          )}
        </h1>

        <p className="hero-sub text-white/65 text-[14px] md:text-[15px] leading-[1.8] max-w-[600px] mb-4">
          {t(
            'CCBONLINE INC. helps Chinese businesses assess market-entry opportunities, clarify compliance pathways, and build the localized websites, business materials, and digital systems needed to support trust and qualified lead generation in Canada and North America.',
            'CCBONLINE INC. 帮助中国企业评估市场进入机会，梳理合规与落地路径，并建设进入加拿大与北美市场所需的本地化官网、商业资料与数字获客基础设施。'
          )}
        </p>

        <p className="hero-guide text-white/40 text-[13px] italic mb-6">
          {t(
            'Tell us your market-entry goals and current challenges.',
            '告诉我们你的目标市场方向和当前挑战。'
          )}
        </p>

        <div className="hero-btns flex flex-wrap gap-3 md:gap-4 mb-8">
          <Link to="/contact" className="btn-primary text-[13px] md:text-[14px] px-6 py-3 md:px-8 md:py-3.5">
            {t('Book a Consultation', '预约咨询')}
          </Link>
          <Link to="/services" className="btn-outline text-[13px] md:text-[14px] px-6 py-3 md:px-8 md:py-3.5" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}>
            {t('View Services', '查看服务')}
          </Link>
        </div>

        <div className="hero-badges flex flex-wrap gap-2 md:gap-3">
          {badges.map((b) => (
            <span key={b} className="text-[11px] md:text-[12px] text-white/45 px-2.5 py-1 md:px-3 md:py-1.5 border border-white/15">
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
