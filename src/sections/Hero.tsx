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
      .from(el.querySelector('.hero-trust'), { y: 15, opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.3')
      .from(el.querySelector('.hero-btns'), { y: 15, opacity: 0, duration: 0.6, ease: 'power2.out' }, '-=0.2')
    return () => { tl.kill() }
  }, [])

  return (
    <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/hero-bg.jpg)' }} />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1a] via-[#0a0a1a]/85 to-[#0a0a1a]/45" />

      <div ref={contentRef} className="relative z-10 container-site pb-[5vh] md:pb-[10vh] pt-[16vh] md:pt-[22vh]">
        <p className="hero-label text-white/50 text-[11px] md:text-[13px] tracking-widest uppercase mb-3 md:mb-4">
          CCBONLINE INC. · {t('智桥国际', 'Zhiqiao')}
        </p>

        <h1
          className="font-serif text-white text-[5.5vw] md:text-[2.8vw] leading-[1.35] md:leading-[1.25] tracking-tight max-w-[850px] mb-3 md:mb-5"
          style={{ wordBreak: 'keep-all' }}
        >
          {t(
            'Helping Chinese Businesses Enter Canada & North America',
            '帮助中国企业进入加拿大与北美市场'
          )}
        </h1>

        <p className="hero-sub text-white/65 text-[12px] md:text-[15px] leading-[1.7] md:leading-[1.8] max-w-[680px] mb-4 md:mb-6">
          {t(
            'We help Chinese manufacturers, brands, and service companies evaluate, plan, and execute practical market entry into Canada and North America — covering strategy, localization, compliance coordination, channel development, digital trust, and local execution support.',
            '我们帮助中国制造企业、品牌企业和服务型企业，评估、规划并推进加拿大及北美市场进入，覆盖市场判断、本地化表达、合规协同、渠道开发、数字化信任建设与本地执行支持。'
          )}
        </p>

        <p className="hero-trust text-white/40 text-[11px] md:text-[13px] mb-5 md:mb-6">
          {t('Toronto-based consulting partner for China-to-Canada and North America market entry.', '总部位于多伦多，专注中国企业进入加拿大与北美市场的咨询伙伴。')}
        </p>

        <div className="hero-btns flex flex-wrap gap-3 md:gap-4">
          <Link to="/contact" className="btn-primary text-[12px] md:text-[14px] px-5 py-2.5 md:px-8 md:py-3.5">
            {t('Request an Initial Assessment', '申请初步市场进入评估')}
          </Link>
          <Link to="/services" className="btn-outline text-[12px] md:text-[14px] px-5 py-2.5 md:px-8 md:py-3.5" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}>
            {t('Explore Our Services', '查看服务内容')}
          </Link>
        </div>
      </div>
    </section>
  )
}
