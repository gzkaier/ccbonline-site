import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'


export default function ZH_BeiMeiShiChangJinRuBuShiMaiHuo() {
  useSEO({
    title: '北美市场进入，不是把货卖出去 | CCBONLINE INC.',
    description: '真正的北美市场进入不是找到客户把货卖出去，而是搭建从合规、进口、渠道、仓储到本地责任主体的完整进入路径。',
    canonical: 'https://www.ccbonline.ca/zh/insights/bei-mei-shi-chang-jin-ru-bu-shi-mai-huo',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '北美市场进入，不是把货卖出去 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">市场进入</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              北美市场进入，不是把货卖出去
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              把货卖出去是一次交易行为，而市场进入是一套从合规、进口、渠道、仓储、售后到本地责任主体的完整系统搭建。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              为什么这件事重要
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              很多企业的出海逻辑很简单：找到一个客户，把货发过去，就算进入北美了。但真正的问题往往从发货之后才开始。货被海关扣了，发现缺少 CSA 认证；客户收到货了，发现包装标签不符合省里的要求；经销商签完合同了，才发现对方不承担合规责任。这些问题的根源，是把"找到客户"等同于"市场进入"。北美不是一个单一市场。加拿大和美国有不同的联邦监管体系，各省、各州在税务、产品注册、售后义务上都有差异。没有搭建完整的进入路径，每一个订单都是一次冒险。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              常见误区
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                最常见的误区是：先有客户，再补流程。不少企业花了半年时间开发出一个客户，结果发货时才发现产品需要认证，或者需要指定进口记录责任人，或者包装不符合双语标签要求。这时候要么延迟交货失去信任，要么硬着头皮违规发货承担风险。另一个误区是以为签了一个经销商就万事大吉。实际上，大多数经销商只管销售和物流，不管合规、不管召回、不承担监管责任。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              企业应该先看什么
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              企业在决定进入北美之前，应该先审视这几个问题：（1）你的产品是否需要 CSA、UL、FCC 等认证，认证周期多长？（2）谁来担任进口记录责任人，这个身份意味着什么法律责任？（3）包装和标签是否符合目标省/州的法规？（4）售后和保修义务如何本地履行？（5）定价模型是否考虑了经销商利润、物流成本、关税和本地税费？
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              CCBONLINE 的判断
            </h2>
            <div className="p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                CCBONLINE 的判断是：市场进入应该先诊断，再执行。我们在做任何客户对接之前，会先帮客户做一次结构化的就绪度评估——看产品适配度、认证缺口、竞争格局、运营要求。这能避免一种很常见的失败模式：先承诺客户，然后发现做不到。在北美市场走得稳的企业，都把市场进入当成一个项目来管理，而不是当成一场短期销售活动。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              下一步动作
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">做产品适配评估，看是否具备进入北美市场的基础条件</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">绘制所需认证清单，估算时间和费用</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">确定进口记录责任人及其法律责任</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">验证渠道策略：经销、直销还是混合模式</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">联系 CCBONLINE 做一次市场进入就绪度诊断</li>
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
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">卖货和市场进入到底有什么区别？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">卖货是找到买家、完成交易。市场进入是搭建一套完整的运营系统，包括合规、进口、渠道、仓储、售后和本地责任主体。没有这套系统，每一笔交易都面临风险和不可控因素。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">市场进入需要多长时间？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">初步诊断 2-4 周。完整的 0-90 天路线图通常在 30 天内交付。执行阶段根据认证要求和渠道复杂度，一般持续 3-12 个月。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">必须在加拿大或美国注册公司吗？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">不一定。很多企业先从合作伙伴模式或直接出口开始。但如果产品属于监管较严的类别，或者计划建立直销团队，注册本地子公司可能更合适。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">可以先从一个省开始做吗？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">完全可以。安大略省、魁北克省、BC省都是常见的首发市场。先在一个省验证模式，再扩展全国，风险更低。</p>
                </div>
              </details>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              相关阅读
            </h2>
            <ul className="space-y-2 mb-8">
              <li><Link to="/zh/services" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">市场进入服务</Link></li>
              <li><Link to="/zh/responsibility-chain" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">责任链</Link></li>
              <li><Link to="/zh/insights/bei-mei-shi-chang-jin-ru-ze-ren-lian" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">北美市场进入的核心，是责任链</Link></li>
              <li><Link to="/zh/insights/0-90-tian-bei-mei-shi-chang-jin-ru-lu-jing" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">北美市场进入的 0–90 天路径</Link></li>
              <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">联系 CCBONLINE</Link></li>
            </ul>
          </div>
        </section>

        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                想了解更多关于市场进入的内容？
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
