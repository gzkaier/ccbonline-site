import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_TradeShowFollowUpService() {
  useSEO({
    title: '展会前准备与展会后跟进服务 | 中加商业在线 CCBONLINE INC.',
    description: '帮助中国制造商准备加拿大和美国展会，展后线索系统化跟进。线索管理、材料准备和本地协调支持。',
    canonical: 'https://www.ccbonline.ca/zh/services/trade-show-follow-up',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '展会前准备与展会后跟进服务 | 中加商业在线 CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">展会与渠道</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              展会前准备与展会后跟进
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              展会前的结构化准备和展会后的系统化跟进——让你收集的线索真正成为机会，而不是抽屉里的一堆名片。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                这是什么服务
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                一项实用协调服务，帮助中国制造商准备加拿大和美国的展会，并在展会后系统化跟进线索。我们不组织展会，不保证参展人数。我们帮你做好准备、专业呈现，并以一种能将展位对话转化为真实商业机会的方式进行跟进。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                适合哪些企业
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">准备首次参加加拿大或美国展会的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">以前参展过但线索转化率低的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">产品不错但对北美展会预期和做法经验有限的制造商</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">在展会上收集了线索但从未系统化跟进的企业</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                问题：大多数展会线索都凉了
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                展会很昂贵——展位费、差旅、运输、住宿和人员时间。但很多中国制造商的 ROI 令人失望，因为跟进薄弱或根本不存在。线索收集了，名片堆起来了，但两周内大多数潜在客户已经忘记了对话。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                问题通常不是产品或展位。而是缺乏结构化跟进流程：没有线索优先级排序、没有适配的跟进材料、没有本地联系人、没有向潜在客户传达明确的下一步。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                我们具体做什么
              </h2>

              <h3 className="text-[17px] font-semibold mb-3 text-[#212121]">展前</h3>
              <ul className="space-y-3 mb-6">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">展位信息审核</strong> — 评估你的展位呈现、材料和产品演示是否符合北美买家预期</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">展前 outreach</strong> — 识别并在展前联系目标参会者，安排展位会面</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">材料准备</strong> — 审核和适配产品资料、名片和 takeaway 材料，适配北美受众</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">线索收集系统设置</strong> — 简单实用的展位线索捕获和分类系统</li>
              </ul>

              <h3 className="text-[17px] font-semibold mb-3 text-[#212121]">展后</h3>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">线索优先级排序</strong> — 展会结束后 48 小时内按兴趣度、适配度和紧迫性对线索排序</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">跟进序列设计</strong> — 结构化 outreach 计划，含时间、信息和渠道建议</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">本地化跟进执行</strong> — 我们以加拿大本地联系人身份帮助执行初次跟进，提高回复率</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">会议安排</strong> — 协调与合格潜在客户展后的电话、视频或面对面 follow-up</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]"><strong className="font-medium text-[#212121]">进度跟踪</strong> — 展后 4-8 周的所有线索状态、回复和下一步行动周度跟踪</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                你会收到什么
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">展前准备清单</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">材料、信息和物流的全面确认清单</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">线索分类矩阵</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">基于展位互动的线索优先级分层框架（热门、温门、冷门）</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">跟进序列模板</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">适配北美商业文化的定时 outreach 计划，含邮件/电话脚本</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">周度跟进报告</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">所有线索的状态跟踪、收到的回复、安排的会议和下一步行动</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">展后总结与建议</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">展会 ROI 评估、线索质量观察和未来活动建议</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                这项服务不替代什么
              </h2>
              <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0]">
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                  中加商业在线不组织展会、不设计展位展示、不保证具体线索数量。我们不替代你的销售团队——我们用结构、本地协调和北美商业实践来支持他们的跟进。产品质量和团队在展位的互动仍然是展会成功的主要驱动力。
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                常见问题
              </h2>
              <div className="space-y-3">
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">加拿大有哪些展会值得考虑？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">完全取决于你的产品类别。加拿大主要展会中心是多伦多、蒙特利尔、卡尔加里和温哥华。我们帮你识别吸引你目标买家的展会，而不是推荐可能不匹配你产品的"大型"展会。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">展会后多久应该跟进？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">最高优先级线索在 48 小时内，所有线索在一周内。等得越久，线索越冷。我们设计展会结束立即启动的跟进序列。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">你们能跟我们一起参展吗？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">取决于展会地点和时间，我们可能能够在大多伦多地区和部分加拿大展会提供现场支持。对于离我们较远的展会，我们提供远程准备和展后跟进协调。</p>
                  </div>
                </details>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                相关资源
              </h2>
              <ul className="space-y-2">
                <li><Link to="/zh/insights/zhan-hou-xian-suo-gen-jin" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">展会后线索跟进最佳实践 →</Link></li>
                <li><Link to="/zh/services" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">全部服务 →</Link></li>
                <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">联系中加商业在线 →</Link></li>
              </ul>
            </div>

            <div className="p-6 md:p-8 bg-[#0B0E14] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">
                准备参加加拿大或美国展会？
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                告诉我们哪个展会、你的产品，以及你需要什么帮助。我们会评估展会支持是否适合你。
              </p>
              <Link to="/zh/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">
                咨询展会支持
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
