import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHAbout() {
  useSEO({
    title: '关于 CCBONLINE INC.｜连接加拿大、北美与中国市场的商业可信度与本地服务平台',
    description: 'CCBONLINE INC. / 中加商业在线，位于加拿大，帮助企业在跨市场、跨语言、跨信任体系中建立更清晰的商业表达、数字可信度和本地连接能力。',
    canonical: 'https://www.ccbonline.ca/zh/about',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '关于 CCBONLINE INC.｜连接加拿大、北美与中国市场的商业可信度与本地服务平台'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* CCBONLINE INC. 是什么 */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">关于我们</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              CCBONLINE INC. 是什么
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px]">
              一家连接加拿大、北美与中国市场的商业信息与服务平台。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-8">
              CCBONLINE INC. / 中加商业在线，是一家注册在加拿大大多伦多地区的商业信息与服务平台。我们的核心不是普通建站公司、广告公司、培训机构或泛泛的出海服务商，而是帮助企业在跨市场、跨语言、跨信任体系中，建立更清晰的商业表达、数字可信度和本地连接能力。
            </p>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-8">
              我们的客户包括准备进入加拿大和北美市场的中国企业、希望连接中国供应链的北美企业、加拿大本地华人企业和专业服务商、跨境电商卖家、B2B制造商、展会与活动方，以及需要商业报道和本地连接的各类机构。
            </p>

            {/* 阿凯是谁 */}
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              阿凯是谁
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-8">
              阿凯是 CCBONLINE INC. 的创始人，常驻加拿大多伦多。他结合技术底层理解、中英双语商业表达、北美本地商业经验、内容传播和媒体化服务能力，帮助企业把复杂的跨市场问题拆成可以判断、可以表达、可以推进的具体动作。他不是传统意义上的"咨询师"，而是把判断力和执行力结合在一起的跨市场连接者。
            </p>

            {/* 工作方法 */}
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              我们的工作方法
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
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

            {/* 不做什么 */}
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              我们不做什么
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">不替代律师、会计师、认证机构、保险经纪、报关行等专业机构</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">不承诺保证买家、快速拿订单或具体搜索排名</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">不做虚假评论、夸大宣传或短期流量把戏</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">不只做翻译、写报告或提供一个资源列表就结束</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00B894]">不写万能方案、不卖标准化套餐</li>
              </ul>
            </div>

            {/* 合作伙伴类型 */}
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              我们服务的合作伙伴类型
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {[
                '准备进入加拿大和北美市场的中国企业',
                '希望连接中国供应链的北美企业',
                '加拿大本地华人企业和服务商',
                '跨境电商和独立站商家',
                'B2B制造企业和供应商',
                '展会、活动方、商协会',
                '需要商业报道的机构',
                '需要服务展示和本地连接的专业服务商',
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] text-[#444] leading-[1.6]">{item}</p>
                </div>
              ))}
            </div>

            {/* 媒体与活动合作 */}
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              媒体与活动合作
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">
              我们欢迎商业媒体、行业活动方、商协会和服务机构的合作。CCBONLINE 可以为企业提供报道、活动记录、内容策划和服务展示，也可以为活动方提供内容支持和参与者连接。
            </p>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              如果你有合作想法，请<Link to="/zh/contact" className="text-[#00B894] hover:underline">联系我们</Link>，附上合作类型和基本信息。
            </p>

            {/* Contact info */}
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
