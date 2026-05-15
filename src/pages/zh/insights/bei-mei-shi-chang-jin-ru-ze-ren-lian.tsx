import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'


export default function ZH_BeiMeiShiChangJinRuZeRenLian() {
  useSEO({
    title: '北美市场进入的核心，是责任链 | CCBONLINE INC.',
    description: '北美市场进入不是找到产品和客户就够了，背后有一条隐藏的责任链。CCBONLINE解析从进口、认证到经销、保修的完整责任归属。',
    canonical: 'https://www.ccbonline.ca/zh/insights/bei-mei-shi-chang-jin-ru-ze-ren-lian',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '北美市场进入的核心，是责任链 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">责任链</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              北美市场进入的核心，是责任链
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              市场进入不只是产品和客户的事，背后有一条贯穿进口、认证、经销、保修、售后到本地合规的责任链，每个环节都必须有明确的责任人。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              为什么这件事重要
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              中国企业进入北美时，关注点通常在产品质量和客户获取上。但一旦出现货被海关扣留、产品被要求召回、经销商失联的情况，核心问题就变成了：谁来负责？答案往往不清楚——因为进入市场之前，没有人梳理过责任链。进口记录责任人要承担海关处罚；认证持有方要对产品安全问题负责；经销商通常拒绝承担合规和召回责任；制造商往往是最后一个知道问题的人，却是声誉受损最大的一方。把责任链理清楚，不是为了打官司，而是为了让每个环节都有人管、出事有人应。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              常见误区
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                最大的误区是以为签了经销合同就把责任都转移出去了。事实上，绝大多数经销商的合同中都有免责声明——他们不承担合规责任、不承担召回责任、不承担监管违规的后果。另一个误区是做亚马逊或电商平台就能绕过本地责任。实际上，电商平台越来越要求卖家在本地指定产品安全和售后的责任方。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              企业应该先看什么
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              企业在进入北美之前，应该梳理以下责任：（1）进口：谁是进口记录责任人，海关出了问题谁承担？（2）认证：CSA/UL/FCC 证书上是谁的名字，谁负责重新认证？（3）经销：经销商实际承诺了什么、免责声明了什么？（4）保修：本地谁负责维修、退换货？（5）合规：谁持续关注法规变化，确保持续合规？（6）售后：谁提供技术支持、备件、现场服务？
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              CCBONLINE 的判断
            </h2>
            <div className="p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                CCBONLINE 把责任链梳理作为市场进入准备的核心环节。我们帮客户识别责任链上的每个节点，确定谁对什么负责，并在第一票货发出之前把这些都写在纸上。走得好的企业都有一个共同点：他们在出事之前就知道该找谁、谁该做什么。我们建议每个客户都建立一张责任矩阵——每个功能对应一个明确的责任人和一个备用联系人。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              下一步动作
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">为你的产品类别绘制完整的责任链</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">检查经销合同中的责任缺口</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">确定进口记录责任人和认证持有方</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">在第一笔销售之前建立本地保修和服务方案</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">联系 CCBONLINE 做责任链审计</li>
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
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">什么是市场进入中的责任链？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">责任链是市场进入中必须履行的一系列义务，包括进口、认证、经销、保修、售后、合规等。每个环节都对应法律义务和经营风险，必须有明确的责任人。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">经销商不是什么都管了吗？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">大多数经销商只管销售和物流，不接受合规、召回或监管违规的责任。务必仔细阅读合同中的免责声明。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">如果没有指定进口记录责任人会怎样？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">货物会被海关扣留，可能产生仓储费、罚款甚至退运。每一票进口都必须有指定的进口记录责任人。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">CCBONLINE 能帮忙梳理责任链吗？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">可以。我们会做结构化的责任链审计，识别每个义务节点，分配给具体责任方，并建立带备用联系人的责任矩阵。</p>
                </div>
              </details>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              相关阅读
            </h2>
            <ul className="space-y-2 mb-8">
              <li><Link to="/zh/services" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">市场进入服务</Link></li>
              <li><Link to="/zh/responsibility-chain" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">责任链</Link></li>
              <li><Link to="/zh/insights/bei-mei-shi-chang-jin-ru-bu-shi-mai-huo" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">北美市场进入，不是把货卖出去</Link></li>
              <li><Link to="/zh/insights/ior-bu-shi-dai-qing-guan" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">进口记录责任人不是代清关的人</Link></li>
              <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">联系 CCBONLINE</Link></li>
            </ul>
          </div>
        </section>

        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                想了解更多关于责任链的内容？
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
