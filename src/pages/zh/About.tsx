import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'


export default function ZHAbout() {
  useSEO({
    title: '关于 CCBONLINE INC. | 北美市场进入咨询与落地支持',
    description: 'CCBONLINE INC. 是一家加拿大注册咨询公司，总部位于多伦多，帮助中国制造企业和成长型公司进入加拿大和北美市场。',
    canonical: 'https://www.ccbonline.ca/zh/about',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '关于 CCBONLINE INC. | 北美市场进入咨询与落地支持'
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
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[600px]">
              加拿大注册咨询与落地支持公司，帮助中国企业进入加拿大和北美市场。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
              <div className="md:col-span-4">
                <img
                  src="/images/about-ccbonline-team-consultation.jpg"
                  alt="CCBONLINE INC. 多伦多办公室团队会议，帮助中国企业规划北美市场进入。"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:col-span-8">
                <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight mb-6">
                  市场进入咨询与落地支持
                </h2>
                <p className="text-[16px] md:text-[17px] text-[#444] leading-[1.65] mb-4">
                  CCBONLINE INC. 是一家加拿大注册的咨询与落地支持公司，总部位于多伦多。我们帮助中国制造企业、品牌和工业公司进入加拿大和北美，提供结构化的市场进入诊断、合规路径设计、渠道验证、本地合作伙伴协调和实际执行支持。
                </p>
                <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] mb-5">
                  我们不是营销机构、网站开发公司或获客平台。我们是市场进入顾问，结合市场判断、合规意识、渠道理解、本地资源和执行纪律，帮助中国企业在北美建立真实的运营根基。
                </p>
                <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65] mb-6">
                  我们的团队直接与每位客户合作，提供结构化评估、实际协调和持续支持，将市场进入计划转化为实际客户对话、合作伙伴关系和落地运营。
                </p>
                <div className="grid grid-cols-2 gap-3 text-[14px] md:text-[15px]">
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
                    <p className="font-medium">加拿大与北美</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                准备好评估您的北美就绪度了吗？
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
