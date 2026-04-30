import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ZHServices() {
  useEffect(() => {
    document.title = '市场进入诊断、合规与执行服务 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  const services = [
    {
      num: '01',
      title: '市场进入诊断',
      what: '对您的产品、运营和团队是否准备好进入北美进行结构化评估——以及缺少什么。',
      why: '大多数企业在没准备好的市场上浪费数月。诊断通过给出明确的可行/不可行建议和具体差距来防止这一点。',
      deliver: ['产品市场适配评估', '竞争格局扫描', '认证与合规差距识别', '就绪度评分卡与优先行动', '加拿大与美国优先度建议'],
    },
    {
      num: '02',
      title: '合规路径绘制',
      what: '您的产品必须满足的认证、清关、税务和监管要求的详细地图。',
      why: '合规差距是中国产品被海关扣留、被经销商拒绝或从市场召回的最常见原因。',
      deliver: ['产品特定认证要求清单（CSA、UL、FCC、IC）', '进口路径设计', '清关文件检查清单', '税务与关税义务摘要', '专业合作伙伴介绍'],
    },
    {
      num: '03',
      title: '渠道验证',
      what: '系统识别、评估和初步接触适合您产品和阶段的潜在经销商、合作伙伴和客户。',
      why: '合适的渠道合作伙伴可以成就市场进入。错误的合作伙伴可能浪费一年。',
      deliver: ['渠道策略（直接、经销商、混合）', '合作伙伴识别与候选清单', '合作伙伴评估框架', '初步接触策略与脚本', '展会或拜访计划'],
    },
    {
      num: '04',
      title: '本地执行支持',
      what: '实际项目管理和协调，确保市场进入持续推进。',
      why: '没有执行纪律的计划会失败。我们提供将策略转化为实际销售所需的结构、问责和本地存在。',
      deliver: ['每周进度会议与行动追踪', '合作伙伴与供应商协调', '客户材料与推介优化', '里程碑与阶段复盘报告', '方向调整与计划优化'],
    },
    {
      num: '05',
      title: '0–90天进入路线图',
      what: '从评估到首次客户对话的具体逐周执行计划，在90天内完成。',
      why: '没有结构化时间表，市场进入变成一系列永远不会真正发生的"下一步"。',
      deliver: ['逐周行动计划（含责任人和截止日期）', '里程碑定义和成功标准', '资源与预算分配', '风险登记和应急预案', '继续/停止决策点'],
    },
  ]

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">服务</p>
            <h1 className="font-serif text-[#212121] text-[32px] md:text-[42px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              从诊断到执行
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[560px]">
              五项整合能力，将市场进入意图转化为实际运营。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site space-y-14 md:space-y-18">
            {services.map((s) => (
              <div key={s.num}>
                <div className="flex items-baseline gap-3 mb-5">
                  <span className="text-[#C00000] text-[12px] font-bold">{s.num}</span>
                  <h2 className="font-serif text-[#212121] text-[24px] md:text-[28px] leading-[1.35] tracking-tight">{s.title}</h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 mb-6">
                  <div className="lg:col-span-4">
                    <div className="p-4 bg-[#F8F9FA] border-l-2 border-[#C00000]">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#767676] mb-2">含义</p>
                      <p className="text-[14px] text-[#555] leading-[1.7]">{s.what}</p>
                    </div>
                  </div>
                  <div className="lg:col-span-8">
                    <div className="p-4 bg-[#F8F9FA]">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#999] mb-2">重要性</p>
                      <p className="text-[14px] text-[#555] leading-[1.7]">{s.why}</p>
                    </div>
                  </div>
                </div>
                <div className="p-4 md:p-5 bg-[#F8F9FA]">
                  <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[#999] mb-3">交付内容</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {s.deliver.map((item, i) => (
                      <div key={i} className="text-[14px] md:text-[15px] text-[#555] leading-[1.5] flex gap-2">
                        <span className="text-[#C00000]">·</span>{item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                不确定哪个服务适合您的阶段？
              </h2>
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">讨论您的市场进入计划</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
