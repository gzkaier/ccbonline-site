import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: '购买理由：大多数企业没想清楚的事｜品牌可信度｜CCBONLINE',
    description: '很多企业介绍自己时，习惯讲规模、产品、技术和经验，但客户真正关心的是为什么选择你，而不是选择别人。购买理由不是一句口号，而是客户愿意继续联系、比较和下单的判断基础。',
    canonical: 'https://www.ccbonline.ca/zh/insights/purchase-rationale-clarity',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '购买理由：大多数企业没想清楚的事｜品牌可信度｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">品牌可信度</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              购买理由：大多数企业没想清楚的事
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>阅读时间：约 6 分钟</span>
              <span>·</span>
              <span>购买理由｜品牌可信度｜B2B销售｜官网表达｜客户决策</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                很多企业介绍自己时，习惯讲规模、产品、技术和经验，但客户真正关心的是为什么选择你，而不是选择别人。购买理由不是一句口号，而是客户愿意继续联系、比较和下单的判断基础。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[700px]">
            <div className="prose-content">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">很多企业在介绍自己时，会说几类话：我们有多年经验。我们质量稳定。我们价格有竞争力。我们服务专业。我们支持定制。我们出口多个国家。</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">这些话并不是错。问题是，大多数同行也可以这么说。客户看完之后，仍然不知道为什么要选择你。</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">购买理由不是广告口号</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">购买理由不是广告口号，也不是一句品牌宣传语。它回答的是一个更现实的问题：在同样能供货、同样能报价、同样说自己专业的情况下，客户为什么愿意继续了解你？</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">对 B2B 企业来说，购买理由通常不是单点优势，而是一组让客户觉得"可以继续谈"的证据。比如：你是否更懂某一类应用场景；你是否能服务某一类客户；你是否有稳定交付记录；你是否能提供清楚的英文资料；你是否知道目标市场的合规要求；你是否能处理售后和沟通。</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">信息没有围绕客户决策组织</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">很多企业官网没有购买理由，只有自我介绍。页面看起来很完整：公司历史、产品分类、设备照片、工厂规模、证书图片、联系方式都有。但客户看完之后，还是不知道这家公司适不适合自己。</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">原因很简单：信息没有围绕客户决策组织。客户不是来欣赏企业履历的，客户是在判断风险。他会想：这家公司懂不懂我的行业？产品能不能适配我的场景？沟通会不会顺畅？质量出问题谁处理？交期是否稳定？资料是否完整？</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">从"自我介绍"到"客户价值"</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">"我们有 20 年制造经验"是一条信息，但它还不是完整购买理由。更好的表达应该是：我们长期服务某类客户，熟悉某类应用场景，因此在材料选择、包装要求、交期管理和售后配合上，可以减少客户导入供应商时的不确定性。这就从"自我介绍"变成了"客户价值"。</p>
              <h2 className="text-[18px] md:text-[20px] font-semibold text-[#212121] mb-4 mt-10">梳理购买理由的四个问题</h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4"><strong>第一</strong>，客户为什么现在需要你？是因为现有供应不稳定、价格太高、交期太慢、产品不适配，还是需要进入新市场？</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4"><strong>第二</strong>，客户为什么相信你能解决？有没有案例、经验、文件、流程、团队、认证、本地资源或第三方信息可以支持？</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4"><strong>第三</strong>，客户为什么选择你而不是别人？你是否在某个场景、产品、客户类型、服务方式或市场路径上更适配？</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6"><strong>第四</strong>，客户为什么愿意进入下一步？下一步是否清楚？是发资料、约会议、申请样品、报价、诊断，还是项目评估？</p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-6">购买理由想清楚之后，官网、销售资料、展会介绍、LinkedIn、公众号、邮件和报价单都会变得更清楚。否则内容再多，也只是信息堆叠。</p>
            </div>

            <div className="mt-10 p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3 text-[#212121]">相关服务</h3>
              <div className="space-y-2">
                                <Link to="/zh/services/business-reason-credibility-diagnosis" className="block text-[14px] text-[#00B894] hover:underline">品牌可信度诊断 →</Link>
                <Link to="/zh/services/english-materials-optimization" className="block text-[14px] text-[#00B894] hover:underline">英文资料与服务页优化 →</Link>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Link to="/zh/insights/why-buyers-dont-contact" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors"><span className="text-[12px] text-[#767676] block mb-1">同栏目</span><span className="text-[14px] font-medium text-[#212121]">为什么客户看了你的官网却不联系</span></Link>
              <Link to="/zh/insights/is-your-website-in-chatgpt" className="flex-1 p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors"><span className="text-[12px] text-[#767676] block mb-1">下一篇</span><span className="text-[14px] font-medium text-[#212121]">你的网站在ChatGPT里被提到了吗</span></Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
              这篇文章对你有帮助？
            </h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
              如果你正在考虑进入加拿大或北美市场，可以先提交现有官网或公司介绍，做一次初步判断。
            </p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">预约初步沟通</Link>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
