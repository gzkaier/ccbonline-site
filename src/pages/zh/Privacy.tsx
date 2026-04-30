import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ZHPrivacy() {
  useEffect(() => {
    document.title = '隐私政策 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px]">
        <div className="container-site max-w-[720px]">
          <p className="text-label mb-3">法律</p>
          <h1 className="font-serif text-[#212121] text-[32px] md:text-[42px] leading-[1.3] tracking-tight mb-10">
            隐私政策
          </h1>
          <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.7] mb-8">
            CCBONLINE INC. 致力于保护您的隐私。本政策说明我们如何收集、使用和保护您的个人信息。
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="text-[14px] font-semibold mb-2">我们收集的信息</h3>
              <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.7]">我们通过联系表单收集您提供的信息，包括公司名称、联系方式、产品类别和市场进入目标。我们不收集支付信息。</p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-2">信息使用方式</h3>
              <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.7]">我们使用您的信息来回复咨询、提供市场进入咨询服务，以及沟通项目进展。我们不会出于营销目的向第三方出售或分享您的信息。</p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-2">数据安全</h3>
              <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.7]">我们实施合理的安全措施保护您的数据。但互联网传输并非完全安全。</p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-2">联系方式</h3>
              <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.7]">隐私相关问题请联系 info@ccbonline.ca。</p>
            </div>
          </div>
        </div>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
