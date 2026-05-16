import { useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'


export default function ZHTerms() {
  useSEO({
    title: '使用条款 | CCBONLINE INC.',
    description: 'CCBONLINE INC. 市场进入服务的使用条款，面向进入加拿大和北美市场的企业。',
    canonical: 'https://www.ccbonline.ca/zh/terms',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '使用条款 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px]">
        <div className="container-site max-w-[720px]">
          <p className="text-label mb-3">法律</p>
          <h1 className="font-serif text-[#212121] text-[32px] md:text-[42px] leading-[1.3] tracking-tight mb-10">
            使用条款
          </h1>
          <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.7] mb-8">
            访问和使用本网站即表示您接受这些条款。如不同意，请勿使用本网站。
          </p>
          <div className="space-y-8">
            <div>
              <h3 className="text-[14px] font-semibold mb-2">不构成法律或税务建议</h3>
              <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.7]">本网站内容仅供信息参考，不构成法律、税务或投资建议。请咨询合格专业人士获取针对您具体情况的建议。</p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-2">服务说明</h3>
              <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.7]">CCBONLINE INC. 提供市场进入服务和协调服务。我们不保证特定的商业结果、销售或收入。结果取决于产品质量、市场条件和客户执行。</p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-2">知识产权</h3>
              <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.7]">本网站所有内容均为 CCBONLINE INC. 财产，受版权法保护。未经授权的使用或复制被禁止。</p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-2">责任限制</h3>
              <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.7]">CCBONLINE INC. 对因使用本网站或我们的服务而产生的任何直接、间接或附带损害不承担责任。</p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-2">适用法律</h3>
              <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.7]">这些条款受加拿大安大略省法律管辖。</p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-2">条款变更</h3>
              <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.7]">我们可能随时更新这些条款。继续使用本网站即表示接受修订后的条款。</p>
            </div>
            <div>
              <h3 className="text-[14px] font-semibold mb-2">联系方式</h3>
              <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.7]">关于这些条款的问题请联系 info@ccbonline.ca。</p>
            </div>
          </div>
        </div>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
