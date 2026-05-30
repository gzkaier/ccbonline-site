import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHAbout() {
  useSEO({
    title: '关于 CCBONLINE INC.｜为什么是我们｜跨市场商业可信度与连接服务',
    description: 'CCBONLINE INC. 的工作重点不是把企业包装得更好看，而是帮助企业把跨市场合作中最容易被误解、忽略或低估的问题说清楚。我们关注客户在加拿大、北美与中国市场之间建立商业信任时，需要准备哪些表达、资料、责任边界和沟通路径。',
    canonical: 'https://www.ccbonline.ca/zh/about',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '关于 CCBONLINE INC.｜为什么是我们｜跨市场商业可信度与连接服务'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">关于我们</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              为什么 CCBONLINE 能做这件事
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px]">
              我们的工作不是把企业包装得更好看，而是把跨市场合作中最容易被误解、忽略或低估的问题说清楚。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                CCBONLINE 不承诺什么
              </h2>
              <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-6">
                <ul className="space-y-3">
                  <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">不替代律师、会计师、认证机构、保险经纪、报关行等专业机构</li>
                  <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">不承诺保证买家、快速拿订单或具体搜索排名</li>
                  <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">不做虚假评论、夸大宣传或短期流量把戏</li>
                  <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">不只做翻译、写报告或提供一个资源列表就结束</li>
                  <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">不写万能方案、不卖标准化套餐</li>
                </ul>
              </div>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                CCBONLINE INC. 的工作重点，不是把企业包装得更好看，而是帮助企业把跨市场合作中最容易被误解、忽略或低估的问题说清楚。我们关注的不是单一网站、单篇文章或一次推广，而是客户在加拿大、北美与中国市场之间建立商业信任时，需要准备哪些表达、资料、责任边界和沟通路径。
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                为什么阿凯能做这个判断
              </h2>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">懂技术底层</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">了解官网结构、SEO、GEO 和 AI 可见度的技术原理，能从底层判断问题所在，不会被技术供应商忽悠。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">懂中英双语商业表达</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">不是翻译，而是从北美买家的认知习惯和决策逻辑出发，重新组织商业内容。知道什么词在中文里没问题，在英文里会毁掉可信度。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">懂北美本地商业环境</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">加拿大注册公司，多伦多本地运营。了解合规要求、商业惯例、客户期望和服务商生态。知道什么样的建议在这里行得通。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">懂内容传播和媒体化表达</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">能通过商业报道、专业内容和公开渠道，帮企业在目标客户面前建立可验证的信任资产。知道内容不只是写出来，还要能被找到、被理解、被引用。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">懂市场进入和本地资源连接</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">了解 IOR、认证路径、渠道逻辑和本地服务商网络。能帮你对接合适的落地资源，而不是给你一份名单就结束。</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                CCBONLINE 与 阿凯聊出海 的关系
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                <strong>CCBONLINE INC.</strong> 是公司主体，负责服务承接、客户合作和商业交付。所有收费服务、正式合同、诊断报告和长期陪跑都通过 CCBONLINE 完成。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                <strong>阿凯聊出海</strong> 是个人内容品牌，负责深度判断、行业观察和方法论输出。微信公众号和 LinkedIn 上的内容通过这个渠道发布，帮助潜在客户在合作前就建立对 CCBONLINE 专业能力的认知。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                简单来说：阿凯聊出海负责"让你知道我们懂"，CCBONLINE INC. 负责"帮你把事情做成"。
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                工作方法
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { step: '01', title: '初步判断', desc: '看你现有官网、资料、目标市场和当前问题。判断是否适合推进。' },
                  { step: '02', title: '问题诊断', desc: '评估可信度、表达、路径、资源和风险缺口。告诉你什么准备好了、什么需要补。' },
                  { step: '03', title: '优化设计', desc: '重构服务表达、页面内容、英文资料、FAQ、SEO和AI可见度基础。' },
                  { step: '04', title: '落地推进', desc: '根据你的阶段，进入内容优化、市场进入陪跑、服务商连接或媒体报道。' },
                ].map((item) => (
                  <div key={item.step} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                    <p className="text-[#D4AF37] text-[13px] font-medium mb-2">{item.step}</p>
                    <h3 className="text-[16px] font-semibold mb-2">{item.title}</h3>
                    <p className="text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 md:p-8 bg-[#0B0E14] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">联系 CCBONLINE INC.</h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                info@ccbonline.ca · +1 647 568 1128<br />
                84 Kenhar Dr, North York, ON M9L 1N2
              </p>
              <Link to="/zh/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">预约沟通</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
