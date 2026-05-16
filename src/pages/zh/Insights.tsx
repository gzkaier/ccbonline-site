import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'


interface InsightCard {
  title: string
  summary: string
  category: string
  slug: string
}

const coreViewpoints: InsightCard[] = [
  {
    title: '北美市场进入，不是把货卖出去',
    summary: '真正的问题不是有没有客户，而是企业是否已经搭起从合规、进口、渠道、仓储、售后到本地责任主体的完整进入路径。',
    category: '市场进入',
    slug: 'bei-mei-shi-chang-jin-ru-bu-shi-mai-huo',
  },
  {
    title: '北美市场进入的核心，是责任链',
    summary: '每个市场进入项目都有一条隐形的责任链。大多数企业直到出了问题才意识到它的存在。进入市场之前，先把责任链理清楚。',
    category: '责任链',
    slug: 'bei-mei-shi-chang-jin-ru-ze-ren-lian',
  },
  {
    title: '北美市场进入的 0–90 天路径',
    summary: '前 90 天应该遵循从诊断和合规映射、经过渠道验证到主动客户互动的结构化进程，每个阶段都为下一阶段奠定运营基础。',
    category: '市场进入',
    slug: '0-90-tian-bei-mei-shi-chang-jin-ru-lu-jing',
  },
]

const marketEntryCards: InsightCard[] = [
  {
    title: '北美市场进入，不是把货卖出去',
    summary: '真正的问题不是有没有客户，而是企业是否已经搭起从合规、进口、渠道、仓储、售后到本地责任主体的完整进入路径。',
    category: '市场进入',
    slug: 'bei-mei-shi-chang-jin-ru-bu-shi-mai-huo',
  },
  {
    title: '北美市场进入的 0–90 天路径',
    summary: '第 0-30 天：诊断。第 15-45 天：合规路径。第 30-60 天：渠道验证。第 60-90 天：结构化客户对话。',
    category: '市场进入',
    slug: '0-90-tian-bei-mei-shi-chang-jin-ru-lu-jing',
  },
]

const responsibilityCards: InsightCard[] = [
  {
    title: '北美市场进入的核心，是责任链',
    summary: '每个市场进入项目都有一条隐形的责任链。大多数企业直到出了问题才意识到它的存在。进入市场之前，先把责任链理清楚。',
    category: '责任链',
    slug: 'bei-mei-shi-chang-jin-ru-ze-ren-lian',
  },
]

const complianceCards: InsightCard[] = [
  {
    title: 'IOR 不是代清关的人',
    summary: '进口记录责任人（IOR）不只是海关文件上的一个名字，而是承担法律责任的身份——对产品安全、申报准确性、监管合规负长期责任。',
    category: '合规与进口',
    slug: 'ior-bu-shi-dai-qing-guan',
  },
  {
    title: '认证不是终点',
    summary: 'CSA、UL、FCC 认证是必要条件但不是充分条件。很多认证过的产品在北美依然卖不动，因为认证被当成了终点线。',
    category: '合规与进口',
    slug: 'ren-zheng-bu-shi-zhong-dian',
  },
]

const channelCards: InsightCard[] = [
  {
    title: '渠道开发不是群发邮件',
    summary: '在北美找经销商需要结构化的关系建设和互惠价值展示——不是买名单发邮件，也不是忽略经销商真实决策逻辑的交易式推销。',
    category: '渠道与本地承接',
    slug: 'qu-dao-kai-fa-bu-shi-qun-fa-you-jian',
  },
  {
    title: '参展不是去摆摊',
    summary: '北美的展会是市场验证、竞争情报收集、合作伙伴开发和直接客户互动的战略工具，需要数月的准备和严格的跟进。',
    category: '渠道与本地承接',
    slug: 'zhan-hui-bu-shi-qu-bai-tan',
  },
]

const canadaCards: InsightCard[] = [
  {
    title: '加拿大可以成为北美市场进入的第一站',
    summary: '加拿大准入门槛更低、监管流程更透明，并且能为进入更广阔的北美市场提供战略跳板。',
    category: '加拿大作为北美第一站',
    slug: 'jia-na-da-ke-yi-shi-bei-mei-di-yi-zhan',
  },
]

const latestArticles: InsightCard[] = [
  {
    title: '北美市场进入，不是把货卖出去',
    summary: '交易与系统的关键区别。',
    category: '市场进入',
    slug: 'bei-mei-shi-chang-jin-ru-bu-shi-mai-huo',
  },
  {
    title: '北美市场进入的核心，是责任链',
    summary: '谁该对什么负责，以及为什么必须在发货之前搞清楚。',
    category: '责任链',
    slug: 'bei-mei-shi-chang-jin-ru-ze-ren-lian',
  },
  {
    title: 'IOR 不是代清关的人',
    summary: '理解 IOR 角色的完整法律责任范围。',
    category: '合规与进口',
    slug: 'ior-bu-shi-dai-qing-guan',
  },
  {
    title: '北美市场进入的 0–90 天路径',
    summary: '从诊断到首批客户对话的结构化进程。',
    category: '市场进入',
    slug: '0-90-tian-bei-mei-shi-chang-jin-ru-lu-jing',
  },
]

function InsightCardComponent({ card }: { card: InsightCard }) {
  return (
    <div className="group bg-white border border-[#E5E5E5] hover:border-[#00A884] transition-colors p-5 md:p-6 flex flex-col">
      <p className="text-[11px] text-[#999] uppercase tracking-wider mb-2">{card.category}</p>
      <h3 className="text-[16px] md:text-[17px] font-semibold mb-3 leading-[1.5] group-hover:text-[#00A884] transition-colors">
        {card.title}
      </h3>
      <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6] mb-4 flex-1">
        {card.summary}
      </p>
      <Link
        to={`/zh/insights/${card.slug}`}
        className="text-[14px] font-medium text-[#00A884] hover:underline inline-flex items-center gap-1"
      >
        阅读全文
        <span className="text-[16px]">&rarr;</span>
      </Link>
    </div>
  )
}

function InsightSection({ title, label, cards }: { title: string; label: string; cards: InsightCard[] }) {
  return (
    <section className="section-padding bg-white">
      <div className="container-site">
        <p className="text-label mb-3">{label}</p>
        <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
          {title}
        </h2>
        <div className="grid grid-cols-1 gap-4 md:gap-5">
          {cards.map((card, i) => (
            <InsightCardComponent key={i} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ZHInsights() {
  useSEO({
    title: '北美市场进入洞察 | CCBONLINE INC.',
    description: '关于市场进入、合规、渠道开发和执行的专业观点，帮助企业进入加拿大和北美市场。',
    canonical: 'https://www.ccbonline.ca/zh/insights',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '北美市场进入洞察 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">洞察</p>
            <h1 className="font-serif text-[#212121] text-[28px] sm:text-[34px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              北美市场进入洞察
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[600px]">
              关于市场进入、合规、渠道开发和执行的专业观点。每个观点都链接到详细指导。
            </p>
          </div>
        </section>

        {/* Core Viewpoints */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">核心</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              核心判断
            </h2>
            <div className="grid grid-cols-1 gap-4 md:gap-5">
              {coreViewpoints.map((card, i) => (
                <InsightCardComponent key={i} card={card} />
              ))}
            </div>
          </div>
        </section>

        {/* Market Entry */}
        <InsightSection title="市场进入" label="进入" cards={marketEntryCards} />

        {/* Responsibility Chain */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">责任</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              责任链
            </h2>
            <div className="grid grid-cols-1 gap-4 md:gap-5">
              {responsibilityCards.map((card, i) => (
                <InsightCardComponent key={i} card={card} />
              ))}
            </div>
          </div>
        </section>

        {/* Compliance & Importation */}
        <InsightSection title="合规与进口" label="合规" cards={complianceCards} />

        {/* Channel & Local Execution */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">渠道</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              渠道与本地承接
            </h2>
            <div className="grid grid-cols-1 gap-4 md:gap-5">
              {channelCards.map((card, i) => (
                <InsightCardComponent key={i} card={card} />
              ))}
            </div>
          </div>
        </section>

        {/* Canada as First Station */}
        <InsightSection title="加拿大作为北美第一站" label="加拿大" cards={canadaCards} />

        {/* Latest Articles */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">最新</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              最新文章
            </h2>
            <div className="grid grid-cols-1 gap-3 md:gap-4">
              {latestArticles.map((card, i) => (
                <div key={i} className="group flex items-start gap-4 p-4 bg-white border border-[#E5E5E5] hover:border-[#00A884] transition-colors">
                  <div className="flex-1 min-w-0">
                    <p className="text-[11px] text-[#999] uppercase tracking-wider mb-1">{card.category}</p>
                    <h3 className="text-[15px] md:text-[16px] font-semibold leading-[1.5] group-hover:text-[#00A884] transition-colors mb-1">
                      {card.title}
                    </h3>
                    <p className="text-[13px] md:text-[14px] text-[#767676]">{card.summary}</p>
                  </div>
                  <Link
                    to={`/zh/insights/${card.slug}`}
                    className="text-[14px] font-medium text-[#00A884] hover:underline shrink-0 mt-1"
                  >
                    阅读 &rarr;
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                想了解更多市场进入方面的内容？
              </h2>
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">预约初步沟通</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
