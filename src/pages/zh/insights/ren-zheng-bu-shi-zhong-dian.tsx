import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'


export default function ZH_RenZhengBuShiZhongDian() {
  useSEO({
    title: '认证不是终点 | CCBONLINE INC.',
    description: 'CSA、UL、FCC认证是必要条件但不是充分条件。拿到认证之后，产品责任、标签合规和售后体系才是真正的难关。',
    canonical: 'https://www.ccbonline.ca/zh/insights/ren-zheng-bu-shi-zhong-dian',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '认证不是终点 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">合规与进口</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              认证不是终点
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              认证敲开了市场进入的门，但不保证市场成功——把认证当成终点线的企业，往往在拿到证书之后才发现，市场进入的真正工作才刚刚开始。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              为什么这件事重要
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              中国企业常常投入大量时间和资金获得 CSA、UL 或 FCC 认证，然后发现认证本身并不能带来销售。证书证明产品符合安全标准，但它不能帮你建渠道、打品牌、也不能确保产品符合本地用户的使用习惯。有些企业认证了错误的产品型号，有些拿到的认证覆盖范围不够，还有些企业在产品设计变更后没及时更新认证，造成了合规缺口。更关键的是，很多渠道商和零售商虽然要求有认证，但不会因为你有认证就自动采购。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              常见误区
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                最常见的误区是"拿到认证就能卖了"。实际上，认证只是众多条件之一。经销商可能因为包装、保修条款或定价而拒绝产品。零售商可能需要额外的测试或文件。终端客户可能需要你提供本地服务能力。另一个误区是一份认证走遍北美。CSA 在很多产品类别上被美国接受，但不是全部。有些渠道即便接受了 CSA，仍然要求 UL 标识。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              企业应该先看什么
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              拿到认证之后，企业应该审视：（1）认证是否覆盖了所有产品型号和预期用途？（2）认证产品需要附什么样的标签和文件？（3）哪些渠道接受这份认证，哪些还需要额外审批？（4）重新认证的周期和流程是什么？（5）如果现场出现故障或安全事故，如何触发认证审查？（6）包装和用户手册是否符合本地的语言和内容要求？
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              CCBONLINE 的判断
            </h2>
            <div className="p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                CCBONLINE 把认证看作更长旅程中的一个节点。我们帮客户理解认证能开启什么、不能替代什么。最成功的企业把认证整合进更大的市场进入计划中——渠道开发、本地代表、服务能力，缺一不可。我们也会帮客户避免认证陷阱：还没跟真实客户验证过需求，就投入大量资源去认证一个产品。早期的客户对话应该和认证同步进行，甚至先于认证。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              下一步动作
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">审计现有认证的覆盖范围，找出缺口</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">梳理目标渠道和客户对认证的具体要求</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">建立产品变更后的重新认证管理流程</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">把认证里程碑和渠道开发时间线对齐</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">联系 CCBONLINE 做认证对齐的市场进入规划</li>
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
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">CSA 认证在美国能用吗？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">很多产品类别下，CSA 认证在美国被职业安全健康管理局的国家认可测试实验室项目接受。但有些零售商和经销商明确要求 UL 标识。务必提前跟目标渠道确认。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">CSA 或 UL 认证需要多长时间？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">根据产品复杂度和测试要求，通常 3-9 个月。如果需要工厂检查，时间可能更长。加急项目可能可以付费提速。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">产品设计变更后，认证还有效吗？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">必须通知认证机构，可能需要更新认证。在旧证书下销售变更后的产品，可能导致法律责任和市场召回。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">有了认证就能进加拿大零售渠道吗？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">认证是必要的，但通常不够。零售商还要求供应商资质审查、保险、包装审核，有些还要求上架费或营销投入。</p>
                </div>
              </details>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              相关阅读
            </h2>
            <ul className="space-y-2 mb-8">
              <li><Link to="/zh/services" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">市场进入服务</Link></li>
              <li><Link to="/zh/responsibility-chain" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">责任链</Link></li>
              <li><Link to="/zh/insights/ior-bu-shi-dai-qing-guan" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">进口记录责任人不是代清关的人</Link></li>
              <li><Link to="/zh/insights/jia-na-da-ke-yi-shi-bei-mei-di-yi-zhan" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">加拿大可以成为北美市场进入的第一站</Link></li>
              <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">联系 CCBONLINE</Link></li>
            </ul>
          </div>
        </section>

        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                想了解更多关于合规与认证的内容？
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
