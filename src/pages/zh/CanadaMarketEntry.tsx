import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'


export default function ZHCanadaMarketEntry() {
  useSEO({
    title: '中国企业加拿大市场进入咨询 | CCBONLINE INC.',
    description: 'CCBONLINE INC. 帮助中国企业通过结构化的市场进入诊断、合规路径设计和本地合作伙伴协调进入加拿大市场。',
    canonical: 'https://www.ccbonline.ca/zh/canada-market-entry',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '中国企业加拿大市场进入咨询 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">加拿大市场进入</p>
            <h1 className="font-serif text-[#212121] text-[32px] md:text-[42px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              中国企业加拿大市场进入咨询
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[600px] leading-[1.65]">
              从探索到本地运营的实际路径——为中国制造企业、品牌和工业公司设计。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">为什么选加拿大</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              加拿大为什么是务实的第一站
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[800px]">
              <div className="card-border bg-white">
                <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">初始进入风险低于美国</h3>
                <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">加拿大市场较小意味着前期投入更低，产品适配验证的反馈周期更短。</p>
              </div>
              <div className="card-border bg-white">
                <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">与中国贸易联系紧密</h3>
                <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">成熟的海关流程、进口文档标准和货运通道，中加贸易基础设施完善。</p>
              </div>
              <div className="card-border bg-white">
                <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">联邦法规统一</h3>
                <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">与美国各州拼凑式法规不同，加拿大联邦法规提供更可预测的合规框架。</p>
              </div>
              <div className="card-border bg-white">
                <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">通往北美的门户</h3>
                <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">加拿大的成功为美国扩张建立可信度、案例和运营经验。</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">准备工作</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              进入前必须准备什么
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[800px]">
              {[
                { num: '01', title: '英文产品文档', desc: '技术规格、安全数据表、使用说明必须提供英文或法文版本。' },
                { num: '02', title: '认证意识', desc: 'CSA、UL、FCC、IC和加拿大卫生部要求因产品而异。了解哪些适用于您。' },
                { num: '03', title: '进口主体结构', desc: '确定是直接进口、通过代理、加拿大子公司还是经销商。' },
                { num: '04', title: '定价与到岸成本', desc: '将运费、关税、GST/HST、代理费和本地配送纳入定价模型。' },
                { num: '05', title: '客户支持能力', desc: '北美客户期望本地语言支持、退货处理和保修响应。' },
                { num: '06', title: '展会或拜访计划', desc: '有具体的面对面会见客户计划能显著加速信任建设。' },
              ].map((item) => (
                <div key={item.num} className="flex gap-3">
                  <span className="text-[#C00000] text-[12px] font-bold mt-0.5 min-w-[24px]">{item.num}</span>
                  <div>
                    <h4 className="text-[14px] md:text-[15px] font-semibold mb-1">{item.title}</h4>
                    <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">路线图</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[600px] mb-8 md:mb-10">
              0–90天加拿大进入路线图
            </h2>
            <div className="space-y-4 md:space-y-5 max-w-[800px]">
              {[
                { phase: '第0–14天', title: '诊断与市场适配评估', items: ['产品市场适配筛查', '竞争格局扫描', '认证差距识别', '优先市场建议'] },
                { phase: '第15–30天', title: '合规路径与合作伙伴绘制', items: ['监管要求清单', '进口路径设计', '合作伙伴/经销商识别', '到岸成本模型'] },
                { phase: '第31–60天', title: '渠道验证与材料准备', items: ['客户对话脚本', '英文产品材料', '展会或拜访准备', '初步合作伙伴对话'] },
                { phase: '第61–90天', title: '试点执行与复盘', items: ['样品或小批量发货', '客户反馈收集', '合作协议谈判', '90天复盘与下一阶段计划'] },
              ].map((r, i) => (
                <div key={i} className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-3">
                    <span className="text-[#C00000] text-[12px] font-bold">{r.phase}</span>
                    <h3 className="text-[15px] md:text-[17px] font-semibold">{r.title}</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {r.items.map((item, j) => (
                      <div key={j} className="text-[14px] md:text-[15px] text-[#555] flex gap-2">
                        <span className="text-[#C00000]">·</span>{item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                开始您的加拿大市场进入评估
              </h2>
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">讨论您的加拿大进入计划</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
