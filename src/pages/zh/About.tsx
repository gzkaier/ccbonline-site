import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHAbout() {
  useSEO({
    title: '关于 CCBONLINE INC. | 加拿大本地商业信息与市场进入服务平台',
    description: 'CCBONLINE INC. 是一家加拿大注册的本地商业信息与市场进入服务平台，连接中国企业与加拿大、北美市场资源。提供市场判断、本地服务资源连接、商业内容传播和项目推进支持。',
    canonical: 'https://www.ccbonline.ca/zh/about',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '关于 CCBONLINE INC. | 加拿大本地商业信息与市场进入服务平台'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">关于</p>
            <h1 className="font-serif text-[#212121] text-[28px] sm:text-[34px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              关于 CCBONLINE INC.
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[720px]">
              加拿大本地商业信息与市场进入服务平台，连接中国企业与加拿大、北美市场资源。
            </p>
          </div>
        </section>

        {/* 首屏核心文案 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
              <div className="lg:col-span-5">
                <img
                  src="/images/about-ccbonline-team-consultation.jpg"
                  alt="CCBONLINE INC. 多伦多办公室"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="lg:col-span-7">
                <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
                  我们关注的不只是"能不能找到客户"，而是企业能不能真正进入本地市场
                </h2>
                <div className="space-y-4 text-[14px] md:text-[15px] leading-[1.7]">
                  <p className="text-[#444]">
                    CCBONLINE INC. 是一家加拿大注册公司，总部位于多伦多，长期关注中国企业进入加拿大及北美市场过程中的商业信息、市场判断、本地资源连接和项目落地支持。
                  </p>
                  <p className="text-[#767676]">
                    我们服务的对象，主要是正在考虑进入加拿大及北美市场的中国企业、品牌方、制造商、服务机构，以及希望与中国供应链和企业资源建立合作的加拿大本地机构与服务商。
                  </p>
                  <p className="text-[#767676]">
                    中国产品进入加拿大市场，表面上看是找客户、找渠道、做推广；真正推进时，背后往往涉及产品适配、合规认证、进口责任、英文资料、本地仓储、售后承接、保险、渠道信任和持续沟通。
                  </p>
                  <p className="text-[#767676]">
                    CCBONLINE 的工作，是帮助企业在这些环节之间建立更清楚的路径。
                  </p>
                  <p className="text-[#555]">
                    我们既关注市场信息，也关注实际执行；既连接本地资源，也帮助企业判断当前阶段该先做什么。有些企业需要先梳理产品资料，有些企业需要判断责任链，有些企业需要对接认证、物流或仓储资源，有些企业则需要通过内容、活动、报道和本地渠道提高可信度。
                  </p>
                  <p className="text-[#555]">
                    我们不把市场进入简单理解为"帮你找几个客户"。真正可持续的进入，是让产品、资料、责任、本地服务和客户信任逐步接上。
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-[14px] md:text-[15px] mt-6 mb-5">
                  <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                    <p className="text-[11px] text-[#999] uppercase mb-1">成立时间</p>
                    <p className="font-medium">2020 年</p>
                  </div>
                  <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                    <p className="text-[11px] text-[#999] uppercase mb-1">服务语言</p>
                    <p className="font-medium">中文 / 英文</p>
                  </div>
                  <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                    <p className="text-[11px] text-[#999] uppercase mb-1">所在地</p>
                    <p className="font-medium">加拿大多伦多</p>
                  </div>
                  <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                    <p className="text-[11px] text-[#999] uppercase mb-1">专注方向</p>
                    <p className="font-medium">加拿大与北美市场进入、本地服务资源连接、商业内容传播、企业项目推进支持</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CCBONLINE 做什么 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">服务范围</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              CCBONLINE 做什么
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              CCBONLINE 主要围绕中国企业进入加拿大及北美市场，提供以下几类支持：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: '市场进入判断', desc: '帮助企业初步判断产品是否适合进入加拿大或北美市场，现阶段适合先做市场验证、资料准备、渠道测试，还是先补齐合规和责任链。' },
                { title: '本地服务资源连接', desc: '根据企业实际需求，连接加拿大本地认证检测、物流清关、仓储、售后、媒体传播、商业活动、渠道合作和专业服务资源。' },
                { title: '商业内容与信息发布', desc: '通过中加商业在线的服务号、视频号、网站和相关内容渠道，发布北美商业信息、企业动态、服务资源、活动信息和市场观察，为企业和服务商提供更稳定的展示与连接入口。' },
                { title: '项目推进支持', desc: '在企业进入加拿大及北美市场的过程中，协助梳理推进顺序、沟通本地合作方、准备英文资料、跟进项目节点，减少信息差和沟通成本。' },
              ].map((item, i) => (
                <div key={i} className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[17px] font-semibold mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 我们服务的对象 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">服务对象</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              我们服务的对象
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              CCBONLINE 主要服务三类客户和合作方：
            </p>
            <div className="space-y-5">
              {[
                { title: '中国企业与品牌方', desc: '包括制造商、消费品企业、家居建材企业、小家电企业、工业设备企业、AI 硬件企业、服务机构和准备进入加拿大及北美市场的出海企业。' },
                { title: '加拿大本地服务商', desc: '包括认证检测、物流仓储、清关、售后、法律、会计、保险、商业地产、展会活动、媒体传播、数字营销和渠道资源方。' },
                { title: '商业活动与机构合作方', desc: '包括商协会、展会主办方、产业园区、招商机构、行业组织和希望连接中加企业资源的合作机构。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[17px] font-semibold mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 负责人 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">负责人</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-6 md:mb-8">
              阿凯，CCBONLINE INC. 负责人
            </h2>
            <div className="max-w-[800px] space-y-4 text-[14px] md:text-[15px] leading-[1.7]">
              <p className="text-[#444]">
                阿凯是 CCBONLINE INC. 负责人，长期关注中国产品进入加拿大及北美市场过程中的市场判断、本地资源连接、责任链建设和商业内容传播。
              </p>
              <p className="text-[#767676]">
                他的工作背景横跨技术、互联网、通信、海外华人媒体、加拿大本地商业环境和电商平台生态，因此在服务企业时，关注的不只是"怎么宣传"，也包括产品资料是否清楚、本地客户是否能理解、责任边界是否明确、渠道沟通是否顺畅，以及项目能否真正往下推进。
              </p>
              <p className="text-[#555]">
                在 CCBONLINE 的工作中，阿凯主要承担三个角色：
              </p>
              <div className="p-5 md:p-6 bg-white border border-[#E5E5E5] mt-4">
                <ul className="space-y-3 text-[14px] text-[#555] leading-[1.7]">
                  <li className="pl-4 border-l-2 border-[#00B894]">
                    <strong className="text-[#212121]">本地观察者：</strong>持续跟踪加拿大和北美市场中的企业动态、活动信息、服务资源和产业机会。
                  </li>
                  <li className="pl-4 border-l-2 border-[#00B894]">
                    <strong className="text-[#212121]">市场进入顾问：</strong>帮助中国企业在进入前判断产品、资料、责任链和落地路径。
                  </li>
                  <li className="pl-4 border-l-2 border-[#00B894]">
                    <strong className="text-[#212121]">资源连接者：</strong>协助中国企业与加拿大本地服务商、机构和合作资源建立更有效的沟通。
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 工作重点 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">工作重点</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-6">
              工作重点
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-6">
              CCBONLINE 的工作重点不是单纯发布信息，也不是简单介绍资源，而是围绕企业进入加拿大和北美市场的真实过程，帮助客户把几个关键问题理清楚：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[900px]">
              {[
                '产品是否适合当前阶段进入加拿大或北美市场',
                '需要哪些本地服务资源配合',
                '进口、合规、售后、保险等责任链是否清楚',
                '英文资料、产品介绍和商业内容是否能被本地客户理解',
                '是否需要通过媒体内容、活动、报道或渠道合作提高本地可信度',
                '下一步应该先验证客户、补齐资料、对接服务商，还是推进具体项目',
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[#F8F9FA] border-l-2 border-[#00B894] border border-[#E5E5E5]">
                  <p className="text-[14px] text-[#444] leading-[1.6]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 原则 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">原则</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              我们坚持的原则
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { title: '信息要真实', desc: '我们发布和连接的商业信息，尽量基于真实企业、真实活动、真实服务和真实需求，不做夸张包装，也不制造虚假热度。' },
                { title: '判断要提前', desc: '企业进入加拿大和北美市场，不适合一上来就投入大量资源。很多时候，先判断产品、资料、责任链和客户验证路径，比马上找客户更重要。' },
                { title: '资源要匹配', desc: '本地服务资源不是越多越好，而是要和企业当前阶段匹配。早期项目需要判断和资料准备，成熟项目才适合进入更具体的服务对接和渠道推进。' },
                { title: '推进要落地', desc: '市场进入不是写一份报告就结束，也不是发一篇文章就完成。真正有价值的工作，是帮助企业把信息、判断、资源和下一步动作连接起来。' },
              ].map((item, i) => (
                <div key={i} className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[17px] font-semibold mb-3">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{item.desc}</p>
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
                想进一步了解 CCBONLINE 的工作方式？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-4">
                如果你是准备进入加拿大或北美市场的中国企业，可以先做一次初步沟通。我们会了解你的产品、目标市场、当前资料、已有进展和主要问题，再判断是否适合进一步诊断、资源对接或项目推进。
              </p>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                如果你是加拿大本地服务商、机构、活动方或资源方，也可以提交服务信息、活动信息或合作需求。我们会根据内容的真实性、相关性和适配度，判断是否适合通过中加商业在线进行发布、报道、资源连接或合作推进。
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">预约初步沟通</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
