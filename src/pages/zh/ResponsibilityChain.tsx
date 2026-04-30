import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'


export default function ZHResponsibilityChain() {
  useSEO({
    title: '北美进口产品责任链 | CCBONLINE INC.',
    description: '理解北美市场进入背后的责任链：谁负责进口、认证、经销、保修和售后支持。',
    canonical: 'https://www.ccbonline.ca/zh/responsibility-chain',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '北美进口产品责任链 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">责任链</p>
            <h1 className="font-serif text-[#212121] text-[32px] md:text-[42px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              北美进口产品责任链
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px]">
              市场进入不只是需求、销售或流量。而是围绕合规、进口、文档、渠道、仓储、售后、保险和本地责任建立完整的责任体系。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">定义</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[600px] mb-6 md:mb-8">
              什么是责任链
            </h2>
            <p className="text-[16px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] mb-4">
              责任链是企业将产品带入北美时承担的完整义务、风险和责任体系。它在产品离开中国之前就开始，持续到产品安全到达客户手中——以及之后。
            </p>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px]">
              对中国企业来说，责任链通常在出问题前都是不可见的：海关扣留、产品召回、保修纠纷或责任索赔。我们的作用是在发货前让这条链变得可见、可管理并正确分配。
            </p>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">组成要素</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8 md:mb-10">
              责任链的关键组成
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[900px]">
              {[
                { num: '01', title: '合规与认证', desc: 'CSA、UL、FCC、IC、加拿大卫生部。谁确保产品发货前符合标准？' },
                { num: '02', title: '进口与清关', desc: 'HS编码、关税率、GST/HST、清关文件。谁拥有进口流程？' },
                { num: '03', title: '产品文档', desc: '英文/法文标签、安全数据表、产品声明。谁验证准确性？' },
                { num: '04', title: '渠道与分销', desc: '经销协议、独家条款、定价结构。谁谈判和管理？' },
                { num: '05', title: '仓储与物流', desc: '入库接收、库存管理、本地配送、退货处理。谁运营或协调？' },
                { num: '06', title: '售后与保修', desc: '保修条款、维修流程、备件可用性。谁处理本地客户问题？' },
                { num: '07', title: '保险与责任', desc: '产品责任险、货物险、商业责任险。谁确保充分保护？' },
                { num: '08', title: '本地问责', desc: '出问题时，谁是本地联系人？监管机构、客户或律师可以联系谁？' },
              ].map((item) => (
                <div key={item.num} className="flex gap-3">
                  <span className="text-[#C00000] text-[12px] font-bold mt-0.5 min-w-[24px]">{item.num}</span>
                  <div>
                    <h4 className="text-[14px] md:text-[15px] font-semibold mb-1">{item.title}</h4>
                    <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.6]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                发货前绘制您的责任链
              </h2>
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">申请责任链审计</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
