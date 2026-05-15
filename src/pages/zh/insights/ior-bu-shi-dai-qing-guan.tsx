import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'


export default function ZH_IORBuShiDaiQingGuan() {
  useSEO({
    title: '进口记录责任人不是代清关的人 | CCBONLINE INC.',
    description: '加拿大的进口记录责任人远不只是清关文件上的一个名字，而是承担法律责任的实体。CCBONLINE为您解析IOR的真实含义与风险边界。',
    canonical: 'https://www.ccbonline.ca/zh/insights/ior-bu-shi-dai-qing-guan',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '进口记录责任人不是代清关的人 | CCBONLINE INC.'
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
              进口记录责任人不是代清关的人
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              进口记录责任人不是帮你跑腿清关的角色，而是一个承担法律责任的身份——对申报准确性、税费缴纳、产品安全和监管合规负长期责任。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              为什么这件事重要
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              很多中国企业在发货时随便找一个货代或者在加拿大的朋友帮忙清关，却不知道这个人或公司在政府记录上就成了进口记录责任人。这个身份的法律责任远不止清关。加拿大边境服务局或美国海关如果发现申报不实，处罚对象是进口记录责任人。如果产品出了安全问题，监管机构和原告律师也会找进口记录责任人。这种责任在货物清关之后还会持续多年。随便指定进口记录责任人，相当于把法律风险交给一个可能并不知情、也没有能力承担责任的人。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              常见误区
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                最危险的误区是把进口记录责任人当成代清关的人。实际上，这个身份的责任在清关后依然持续。另一个误区是以为找了报关行就不需要进口记录责任人。报关行只是协助清关的中介，进口记录责任人的法律责任不会因此转移。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              企业应该先看什么
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              在指定进口记录责任人之前，企业应该审视：（1）进口记录责任人是否了解所进口产品的特性和相关监管要求？（2）进口记录责任人是否是有能力应对政府问询的正规商业实体？（3）如果进口记录责任人停业或拒绝继续担任这个角色，备选方案是什么？（4）进口记录由谁保管、保存多久？（5）如果产品出现安全问题，进口记录责任人的法律责任边界在哪里？（6）进口记录责任人是否取得了在加拿大或美国进口所需的商业号码？
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              CCBONLINE 的判断
            </h2>
            <div className="p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                CCBONLINE 把进口记录责任人的选择当成一个战略决策，而不是物流细节。我们帮客户评估三种结构的利弊：自己担任（通过加拿大子公司）、使用可信合作伙伴、委托专业服务机构。每种方案有不同的成本和风险特征。关键是让客户明白自己在请别人承担什么责任，并且双方有书面协议覆盖所有可能的情况。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              下一步动作
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">确认当前发货由谁担任进口记录责任人</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">了解进口记录责任人在加拿大或美国的法律义务</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">评估自建进口记录责任人能力还是使用合作伙伴</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">用书面协议明确进口记录责任人关系和责任边界</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">联系 CCBONLINE 咨询进口记录责任人结构方案</li>
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
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">进口记录责任人到底是什么？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">进口记录责任人是确保进口商品符合当地法律、海关申报准确、关税和税费已缴纳的责任方。他们在货物清关后继续承担法律责任。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">货代可以当进口记录责任人吗？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">有些货代提供进口记录责任人服务，但不是所有。即使提供，这个身份的法律责任依然重大，不是所有货代都具备应对监管责任的能力。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">进口记录责任人的责任持续多久？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">在加拿大，边境服务局可在进口后四年内进行审查。在美国，海关最长可审查五年。产品责任诉讼可能更晚发生。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">我们有必要自己注册加拿大公司当进口记录责任人吗？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">取决于销量和长期承诺。如果计划持续大量销售，注册加拿大实体可能更有控制权。如果只是市场测试，专业合作伙伴可能更经济。</p>
                </div>
              </details>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              相关阅读
            </h2>
            <ul className="space-y-2 mb-8">
              <li><Link to="/zh/services" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">市场进入服务</Link></li>
              <li><Link to="/zh/responsibility-chain" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">责任链</Link></li>
              <li><Link to="/zh/insights/bei-mei-shi-chang-jin-ru-ze-ren-lian" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">北美市场进入的核心，是责任链</Link></li>
              <li><Link to="/zh/insights/ren-zheng-bu-shi-zhong-dian" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">认证不是终点</Link></li>
              <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">联系 CCBONLINE</Link></li>
            </ul>
          </div>
        </section>

        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                想了解更多关于合规与进口的内容？
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
