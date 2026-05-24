import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHAbout() {
  useSEO({
    title: '关于 CCBONLINE INC. | 加拿大与北美市场进入顾问',
    description: 'CCBONLINE INC. 是一家加拿大注册的市场进入顾问公司，总部位于多伦多。帮助中国企业在进入加拿大及北美市场前，判断产品是否适合、责任链是否完整、资料是否能被本地客户理解。',
    canonical: 'https://www.ccbonline.ca/zh/about',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '关于 CCBONLINE INC. | 加拿大与北美市场进入顾问'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">关于</p>
            <h1 className="font-serif text-[#212121] text-[28px] sm:text-[34px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              关于 CCBONLINE INC.
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px]">
              加拿大注册的市场进入顾问公司，帮助中国企业在进入加拿大及北美市场前做出正确判断。
            </p>
          </div>
        </section>

        {/* 公司定位 */}
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
                <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight mb-6">
                  不是帮你"找客户"，而是帮你看清该不该进
                </h2>
                <p className="text-[16px] md:text-[17px] text-[#444] leading-[1.65] mb-4">
                  CCBONLINE INC. 是一家加拿大注册的市场进入顾问公司，总部位于多伦多。我们帮助中国企业在进入加拿大及北美市场前，判断产品是否适合进入、合规与进口责任缺什么、客户与渠道如何验证、本地执行如何落地。
                </p>
                <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] mb-5">
                  我们不是营销机构、不是建站公司、不是获客平台。我们的工作是围绕市场判断、合规路径、渠道验证、本地执行和项目推进，为企业提供结构化的评估和实际协调支持。
                </p>
                <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65] mb-6">
                  我们认为，进入一个新市场最危险的不是"进不去"，而是"没想清楚就进去了"。所以我们把"判断"放在服务的第一步——帮助企业在投入大量资源之前，先看清条件、理清责任、明确路径。
                </p>
                <div className="grid grid-cols-2 gap-3 text-[14px] md:text-[15px] mb-5">
                  <div className="p-3 bg-[#F8F9FA] border border-[#E5E5E5]">
                    <p className="text-[11px] text-[#999] uppercase mb-1">成立时间</p>
                    <p className="font-medium">2020</p>
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
                    <p className="text-[11px] text-[#999] uppercase mb-1">专注领域</p>
                    <p className="font-medium">加拿大与北美市场进入</p>
                  </div>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">
                    如需提交服务资源、活动信息、招商合作或本地服务资源，可参考
                    <Link to="/zh/resource-submission-guidelines" className="text-[#00A884] hover:underline">《资源发布与合作信息说明》</Link>。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 负责人介绍 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">负责人</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-6 md:mb-8">
              阿凯，CCBONLINE INC. 负责人
            </h2>
            <div className="max-w-[800px]">
              <p className="text-[16px] md:text-[17px] text-[#444] leading-[1.65] mb-4">
                阿凯是 CCBONLINE INC. 的负责人，长期关注中国产品进入加拿大及北美市场过程中的市场判断、合规路径、进口责任、本地承接和商业内容传播。
              </p>
              <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] mb-6">
                曾在加拿大本地商业和电商环境中工作多年，持续服务和连接中国企业、加拿大本地服务商、物流仓储、认证检测、媒体传播和渠道资源。对中加两地商业文化、合规要求和操作实务有实际经验。
              </p>

              <div className="p-5 md:p-6 bg-white border border-[#E5E5E5] mb-6">
                <h3 className="text-[16px] font-semibold mb-4">工作重点</h3>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-4">
                  他的工作重点不是简单帮助企业"找客户"，而是在进入前帮助企业判断：
                </p>
                <ul className="space-y-2 text-[14px] text-[#555] leading-[1.65]">
                  <li className="pl-4 border-l-2 border-[#00A884]">产品是否适合进入加拿大或北美市场</li>
                  <li className="pl-4 border-l-2 border-[#00A884]">责任链是否完整——谁负责进口、合规、售后、保险</li>
                  <li className="pl-4 border-l-2 border-[#00A884]">资料是否能被本地客户理解和信任</li>
                  <li className="pl-4 border-l-2 border-[#00A884]">下一步应该先验证什么，而不是盲目推进</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
                <h3 className="text-[16px] font-semibold mb-4">工作方式</h3>
                <ul className="space-y-2 text-[14px] text-[#555] leading-[1.65]">
                  <li className="pl-4 border-l-2 border-[#C9A44C]">直接与企业负责人沟通，了解产品、目标和当前阶段</li>
                  <li className="pl-4 border-l-2 border-[#C9A44C]">根据判断结果给出明确建议，不适合进入时会如实告知</li>
                  <li className="pl-4 border-l-2 border-[#C9A44C]">协调加拿大本地服务商资源，帮助企业对接认证、物流、仓储、售后等环节</li>
                  <li className="pl-4 border-l-2 border-[#C9A44C]">持续跟踪项目进展，定期复盘和调整方向</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 我们的原则 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">原则</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-6 md:mb-8">
              我们坚持的工作原则
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[900px]">
              {[
                { title: '先判断，再推进', desc: '不鼓励企业在条件不成熟时贸然进入。如果判断现阶段不适合，我们会如实告知。' },
                { title: '责任链优先', desc: '发货前把责任链理清楚，比找到第一个客户更重要。没有责任链的进入是冒险。' },
                { title: '真实沟通', desc: '不用夸张词，不做虚假承诺。我们告诉你真实的情况、真实的风险和真实的路径。' },
                { title: '本地视角', desc: '结合加拿大本地商业环境、法规要求和文化习惯，给出可实际执行的建议。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h4 className="text-[15px] font-semibold mb-2">{item.title}</h4>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                想进一步了解 CCBONLINE 的工作方式？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                可以先做一次初步沟通。我们会了解你的产品、目标市场和当前阶段，再判断是否需要进一步诊断或推进。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">预约初步沟通</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
