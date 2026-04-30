import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Philosophy() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.phil-block'), {
        y: 25, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 75%', once: true },
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-[#1a1a2e]">
      <div className="container-site">
        <div className="phil-block max-w-[800px]">
          <p className="text-[11px] font-medium uppercase tracking-widest text-white/35 mb-4">
            {t('Our Approach', '核心方法论')}
          </p>
          <h2
            className="font-serif text-white text-[26px] md:text-[30px] lg:text-[34px] leading-[1.35] md:leading-[1.3] tracking-tight mb-6"
          >
            {t(
              'Market entry is not just selling. It is building a responsible local operating path.',
              '市场进入不是简单找客户，而是建立负责任的本地运营路径。'
            )}
          </h2>
          <p className="text-[12px] md:text-[15px] text-white/60 leading-[1.8] mb-8">
            {t(
              'Entering North America is not simply about finding buyers or launching a website. Successful entry requires a practical path across market positioning, compliance coordination, import responsibility, channel development, local service capability, digital trust, and execution discipline.',
              '进入北美不是简单找买家或上线一个英文网站。对中国企业来说，真正的进入需要同时解决市场定位、合规协同、进口责任、渠道开发、本地服务、数字化信任和项目执行问题。'
            )}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { en: 'Market Positioning', zh: '市场定位' },
              { en: 'Compliance', zh: '合规协同' },
              { en: 'Channel Development', zh: '渠道开发' },
              { en: 'Local Execution', zh: '本地执行' },
            ].map((item) => (
              <div key={item.en} className="phil-block border-t border-white/15 pt-3">
                <p className="text-[13px] md:text-[14px] font-medium text-white/80">{t(item.en, item.zh)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
