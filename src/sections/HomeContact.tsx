import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function HomeContact() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from(section.querySelector('.cta-content'), {
        y: 25, opacity: 0, duration: 0.7, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 80%', once: true },
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-[#1a1a2e]">
      <div className="container-site">
        <div className="cta-content max-w-[750px]">
          <h2
            className="font-serif text-white text-[5vw] md:text-[2.6vw] leading-[1.35] md:leading-[1.3] tracking-tight mb-6"
            style={{ wordBreak: 'keep-all' }}
          >
            {t(
              'Start with a consultation to evaluate your North America readiness.',
              '从一次咨询开始，评估您的北美就绪度。'
            )}
          </h2>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <Link to="/contact" className="btn-primary text-[12px] md:text-[14px] px-6 py-2.5 md:px-8 md:py-3.5">
              {t('Book a Consultation', '预约咨询')}
            </Link>
            <Link
              to="/contact"
              className="btn-outline text-[12px] md:text-[14px] px-6 py-2.5 md:px-8 md:py-3.5"
              style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}
            >
              {t('Contact Us', '联系我们')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
