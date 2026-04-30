import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function ZH_ZhanHuiBuShiQuBaiTan() {
  useEffect(() => {
    document.title = '参展不是去摆摊 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">渠道与本地承接</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              参展不是去摆摊
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              在北美的展会不是被动展示产品的地方，而是市场验证、竞争情报收集、合作伙伴开发和直接客户互动的战略工具，需要数月的准备和严格的跟进。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              为什么这件事重要
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              中国企业参加北美展会的方式，常常和国内展会一样：租个展位，把产品摆出来，发发资料，等客户上门。这种方式在北美效果一直很差。北美的展会成本很高——展位、运输、差旅、物料，一个展轻松花掉三万美元以上。没有明确目标和系统准备，大部分投入都打了水漂。做得好的企业把展会当成集中的市场调研和关系建设机会。他们知道哪些买家会来，提前约见面，准备好竞争情报的采集问题，甚至在拆展位之前就已经制定了 90 天跟进计划。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              常见误区
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                最大的误区是"好产品自然能吸引买家"。实际上，北美的买家来展会有明确议程，时间有限，走过几十个展位。没有主动接触和清晰的价值传递，再好的产品也会被忽略。另一个误区是展会结束就完事了。事实上，展会 80% 的价值来自展后几周到几个月的跟进。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              企业应该先看什么
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              企业在决定参展之前应该审视：（1）去年和预计今年有哪些具体的买家、经销商或合作伙伴会来？（2）你的三大目标是什么：获客、招经销商、竞争情报、还是市场验证？（3）产品演示是否针对北美的客户关注点设计，而不只是技术参数展示？（4）你有没有跟进系统，确保每个线索都有责任人和时间节点？（5）你的物料（样本、网站、样品）是否为英语受众准备？（6）你是否研究了同展会上竞争对手的参展和定位策略？
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              CCBONLINE 的判断
            </h2>
            <div className="p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                CCBONLINE 帮客户把展会当成战略投资来管理，而不是营销费用。我们协助展前规划、买家定位、信息调整、展后跟进系统搭建。最成功的客户用展会来验证产品市场匹配度，再决定是否投入更大的经销协议。一场执行好的展会，能抵得上几个月的远程调研。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              下一步动作
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">筛选出 3-5 个与你产品类别最相关的北美展会</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">为每场展会设定具体、可衡量的目标再决定是否参加</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">制定展前外联计划，提前约目标观众见面</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">建立展后 90 天跟进系统，明确责任人</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">联系 CCBONLINE 获取展会策略和执行支持</li>
            </ul>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">常见问题</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              经常被问到的问题
            </h2>
            <div className="space-y-3 mb-10">
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">参加北美展会一般要多少钱？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">差异很大，但在主要行业展上，一个基础的 10x10 英尺展位通常 1.5-5 万美元，包括展位、运输、差旅和物料。更大或位置更好的展位会贵很多。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">第一场展会应该选哪个？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">取决于产品和目标客户。我们根据观众构成、竞争对手参展情况和历史投入回报数据帮客户筛选合适的展会。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">参加展会前应该准备多久？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">理想情况下 3-6 个月：定目标、识别目标观众、约见面、调整物料、准备演示、规划跟进。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">中国企业在北美展会上最常见的错误是什么？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">被动等客——坐在桌后等访客。成功的参展商主动接触路过的人、问资格问题、做详细记录用于跟进。</p>
                </div>
              </details>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              相关阅读
            </h2>
            <ul className="space-y-2 mb-8">
              <li><Link to="/zh/services" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">市场进入服务</Link></li>
              <li><Link to="/zh/insights/qu-dao-kai-fa-bu-shi-qun-fa-you-jian" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">渠道开发不是群发邮件</Link></li>
              <li><Link to="/zh/insights/jia-na-da-ke-yi-shi-bei-mei-di-yi-zhan" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">加拿大可以成为北美市场进入的第一站</Link></li>
              <li><Link to="/zh/insights/0-90-tian-bei-mei-shi-chang-jin-ru-lu-jing" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">北美市场进入的 0–90 天路径</Link></li>
              <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">联系 CCBONLINE</Link></li>
            </ul>
          </div>
        </section>

        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                想了解更多关于展会策略的内容？
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
