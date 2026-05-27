import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

interface InsightCard {
  title: string
  summary: string
  slug: string
}

interface Column {
  title: string
  label: string
  desc: string
  cards: InsightCard[]
  bg: 'white' | 'gray'
}

const columns: Column[] = [
  {
    title: '北美市场进入观察',
    label: '市场进入',
    desc: '关于北美市场进入的核心判断、路径设计和阶段性建议。',
    bg: 'white',
    cards: [
      { title: '北美市场进入，不是把货卖出去', summary: '真正的问题不是有没有客户，而是企业是否已经搭起从合规、进口、渠道、仓储、售后到本地责任主体的完整进入路径。', slug: 'bei-mei-shi-chang-jin-ru-bu-shi-mai-huo' },
      { title: '北美市场进入的 0–90 天路径', summary: '前 90 天应该遵循从诊断和合规映射、经过渠道验证到主动客户互动的结构化进程。', slug: '0-90-tian-bei-mei-shi-chang-jin-ru-lu-jing' },
    ],
  },
  {
    title: '责任链与 IOR',
    label: '责任链',
    desc: '关于产品责任链、进口记录主体（IOR）、合规要求和风险识别。',
    bg: 'gray',
    cards: [
      { title: '北美市场进入的核心，是责任链', summary: '每个市场进入项目都有一条隐形的责任链。大多数企业直到出了问题才意识到它的存在。', slug: 'bei-mei-shi-chang-jin-ru-ze-ren-lian' },
      { title: 'IOR 不是代清关的人', summary: '进口记录主体（IOR）不只是海关文件上的一个名字，而是承担法律责任的身份。', slug: 'ior-bu-shi-dai-qing-guan' },
      { title: '认证不是终点', summary: 'CSA、UL、FCC 认证是必要条件但不是充分条件。很多认证过的产品在北美依然卖不动。', slug: 'ren-zheng-bu-shi-zhong-dian' },
    ],
  },
  {
    title: '渠道与本地承接',
    label: '渠道',
    desc: '关于渠道开发、展会策略、客户验证和本地执行的实际操作方法。',
    bg: 'white',
    cards: [
      { title: '渠道开发不是群发邮件', summary: '在北美找经销商需要结构化的关系建设和互惠价值展示，不是买名单发邮件。', slug: 'qu-dao-kai-fa-bu-shi-qun-fa-you-jian' },
      { title: '参展不是去摆摊', summary: '北美的展会是市场验证、竞争情报收集、合作伙伴开发的战略工具，需要数月的准备。', slug: 'zhan-hui-bu-shi-qu-bai-tan' },
    ],
  },
  {
    title: '加拿大作为北美第一站',
    label: '加拿大',
    desc: '为什么加拿大可以成为进入北美市场的优先选择。',
    bg: 'gray',
    cards: [
      { title: '加拿大可以成为北美市场进入的第一站', summary: '加拿大准入门槛更低、监管流程更透明，并且能为进入更广阔的北美市场提供战略跳板。', slug: 'jia-na-da-ke-yi-shi-bei-mei-di-yi-zhan' },
    ],
  },
]

const downloadResources = [
  { title: '中国企业进入加拿大市场初步准备清单', desc: '一份基础清单，帮助你快速发现资料、合规和责任链上的明显缺口。不能替代正式判断，但可以作为起点。', status: '即将推出' },
  { title: '北美市场进入前需要准备的英文资料清单', desc: '梳理进入北美市场前需要准备的英文产品资料、认证文件、标签要求和沟通模板。', status: '即将推出' },
  { title: 'IOR 与进口责任常见问题说明', desc: '关于进口记录主体（Importer of Record）的常见疑问、责任边界和安排方式。', status: '即将推出' },
]

function InsightCardComponent({ card }: { card: InsightCard }) {
  return (
    <div className="group bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors p-5 md:p-6 flex flex-col">
      <h3 className="text-[16px] md:text-[17px] font-semibold mb-3 leading-[1.5] group-hover:text-[#00B894] transition-colors">
        {card.title}
      </h3>
      <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6] mb-4 flex-1">
        {card.summary}
      </p>
      <Link
        to={`/zh/insights/${card.slug}`}
        className="text-[14px] font-medium text-[#00B894] hover:underline inline-flex items-center gap-1"
      >
        阅读全文 <span className="text-[16px]">&rarr;</span>
      </Link>
    </div>
  )
}

export default function ZHInsights() {
  useSEO({
    title: '北美市场进入洞察与资料 | CCBONLINE INC.',
    description: '关于市场进入、责任链、合规要求、渠道开发和本地执行的专业判断，帮助中国企业进入加拿大和北美市场。',
    canonical: 'https://www.ccbonline.ca/zh/insights',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '北美市场进入洞察与资料 | CCBONLINE INC.'
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
              市场进入判断与实用资料
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px]">
              关于北美市场进入的专业判断，按栏目分类整理。还有可下载的准备清单，帮助你在正式沟通前先自我评估。
            </p>
          </div>
        </section>

        {/* 栏目列表 */}
        {columns.map((col, idx) => (
          <section key={idx} className={`section-padding ${col.bg === 'gray' ? 'bg-[#F8F9FA]' : 'bg-white'}`}>
            <div className="container-site">
              <p className="text-label mb-3">{col.label}</p>
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-2">
                {col.title}
              </h2>
              <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px] mb-8">
                {col.desc}
              </p>
              <div className={`grid grid-cols-1 ${col.cards.length > 2 ? 'md:grid-cols-3' : col.cards.length === 2 ? 'md:grid-cols-2' : ''} gap-4 md:gap-5`}>
                {col.cards.map((card, i) => (
                  <InsightCardComponent key={i} card={card} />
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* 资料下载 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">资料</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-2">
              市场进入准备资料
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px] mb-8">
              如果你正在准备进入加拿大或北美市场，可以先参考这些基础清单。它们不能替代正式判断，但可以帮助你快速发现资料、合规和责任链上的明显缺口。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
              {downloadResources.map((res, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] text-[#999] uppercase tracking-wider">{res.status}</span>
                  </div>
                  <h3 className="text-[15px] font-semibold mb-2 leading-[1.5]">{res.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{res.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                想深入讨论你的市场进入问题？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                洞察和资料提供的是通用判断，你的具体情况可能需要针对性评估。可以先做一次初步沟通。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">预约初步沟通</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
