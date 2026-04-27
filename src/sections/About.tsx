import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function About() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.about-block'), {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          once: true,
        },
      })
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="w-full bg-white py-[120px] md:py-[160px]"
    >
      <div className="max-w-[1440px] mx-auto px-[4vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4 about-block">
            <p className="text-[#767676] text-[13px] font-medium tracking-widest uppercase mb-4">
              {t('About Us', '关于我们')}
            </p>
            <h2 className="font-display italic text-black text-[7vw] md:text-[2.8vw] leading-[1.15] tracking-tight">
              {t('Your Bridge to North America', '您通往北美的桥梁')}
            </h2>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="about-block">
              <p className="text-[18px] md:text-[20px] leading-[1.8] text-black/80">
                {t(
                  'CCBONLINE INC. is a consulting and digital growth partner for Chinese businesses entering the Canadian and North American markets. We combine strategic consulting, regulatory guidance, bilingual communication, and digital infrastructure expertise into one integrated service.',
                  'CCBONLINE INC. 是一家面向进入加拿大和北美市场的中国企业的咨询与数字增长合作伙伴。我们将战略咨询、监管指导、双语沟通和数字基础设施专业知识整合为一项综合服务。'
                )}
              </p>
            </div>

            <div className="about-block pt-8 border-t border-black/10">
              <h3 className="text-[16px] font-semibold mb-4">
                {t('What sets us apart', '我们的不同之处')}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: t('Strategy + Execution', '策略 + 执行'),
                    desc: t(
                      'We don\'t just advise — we build, launch, and scale your market presence.',
                      '我们不只是建议——我们构建、启动和扩展您的市场存在。'
                    ),
                  },
                  {
                    title: t('Local Trust Building', '本地信任建立'),
                    desc: t(
                      'Deep understanding of Canadian business culture and consumer expectations.',
                      '对加拿大商业文化和消费者期望的深入理解。'
                    ),
                  },
                  {
                    title: t('Bilingual Communication', '双语沟通'),
                    desc: t(
                      'Fluent Chinese-English communication ensuring nothing gets lost in translation.',
                      '流利的中英文沟通，确保信息传达准确无误。'
                    ),
                  },
                  {
                    title: t('Digital Infrastructure', '数字基础设施'),
                    desc: t(
                      'Websites, AI systems, and lead generation tools built for North American markets.',
                      '为北美市场构建的网站、AI 系统和获客工具。'
                    ),
                  },
                ].map((item, i) => (
                  <div key={i}>
                    <h4 className="text-[14px] font-semibold mb-2">{item.title}</h4>
                    <p className="text-[13px] text-[#767676] leading-[1.6]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-block pt-8 border-t border-black/10">
              <p className="text-[15px] leading-[1.8] text-[#767676]">
                {t(
                  'Founded in Canada, we understand both the operational realities of Chinese businesses and the expectations of North American customers. Our mission is to lower the barriers to market entry and help our clients build sustainable, trust-based business relationships across borders.',
                  '成立于加拿大，我们既理解中国企业的运营实际，也了解北美客户的期望。我们的使命是降低市场进入门槛，帮助客户建立可持续的、基于信任的跨境商业关系。'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
