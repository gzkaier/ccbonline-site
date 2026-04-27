import { useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { AlertCircle } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

export default function Challenges() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)

  const challenges = [
    {
      title: t('Unclear whether Canada is the right next market', '不确定加拿大是否适合作为下一步市场进入方向'),
      desc: t('Many businesses hesitate because they lack structured market assessment to make a confident go-or-no-go decision.', '许多企业因缺乏结构化的市场评估，难以做出有信心的进入或暂缓决策。'),
    },
    {
      title: t('Uncertainty around compliance, setup, and import-related pathways', '不清楚合规、设立、进口与落地路径如何梳理'),
      desc: t('Regulatory requirements, entity setup, and import logistics form a maze that is hard to navigate without practical guidance.', '监管要求、实体设立和进口物流构成复杂路径，缺乏实际指导时难以理清。'),
    },
    {
      title: t('English materials and website not strong enough for local trust-building', '英文资料与官网不足以支撑本地客户信任建立'),
      desc: t('Direct translations often fail to convey credibility. Local buyers expect culturally appropriate messaging and professional presentation.', '直接翻译往往无法传达可信度。本地买家期望文化适配的信息传递和专业的商业表达。'),
    },
    {
      title: t('Lack of digital infrastructure for lead generation in North America', '缺少面向北美市场的数字获客基础设施'),
      desc: t('Without localized digital entry points and inquiry-capture systems, even strong products struggle to reach qualified prospects.', '缺乏本地化的数字入口和线索收集系统，即使优秀的产品也难以触达优质潜在客户。'),
    },
  ]

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const ctx = gsap.context(() => {
      gsap.from(section.querySelectorAll('.challenge-item'), {
        y: 25, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: { trigger: section, start: 'top 80%', once: true },
      })
    }, section)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding bg-[#F8F9FA]">
      <div className="container-site">
        <p className="text-label mb-3">{t('Challenges', '典型问题')}</p>
        <h2 className="font-serif text-[#212121] text-[6vw] md:text-[2vw] leading-[1.3] tracking-tight max-w-[600px] mb-10 md:mb-12">
          {t('Common Challenges We Help Solve', '我们重点帮助客户解决的典型问题')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {challenges.map((c, i) => (
            <div key={i} className="challenge-item card-border bg-white">
              <AlertCircle size={17} strokeWidth={1.5} className="text-[#C00000] mb-2.5" />
              <h3 className="text-[14px] md:text-[15px] font-semibold mb-2">{c.title}</h3>
              <p className="text-[12px] md:text-[13px] text-[#767676] leading-[1.7]">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
