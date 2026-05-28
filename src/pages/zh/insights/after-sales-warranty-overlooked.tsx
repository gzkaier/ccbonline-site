import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: '售后与保修：中国制造商容易忽略的事｜产品责任｜CCBONLINE',
    description: '售后服务和保修政策是北美客户选择供应商的重要考量因素。本文分析中国制造商在售后方面常见的盲点，并提供改进建议。',
    canonical: 'https://www.ccbonline.ca/zh/insights/after-sales-warranty-overlooked',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '售后与保修：中国制造商容易忽略的事｜产品责任｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site max-w-[800px]">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">产品责任</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight mb-4">
              售后与保修：中国制造商容易忽略的事
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>阅读时间：约 6 分钟</span>
              <span>·</span>
              <span>售后服务｜保修政策｜客户满意度｜北美市场</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                很多中国制造商在产品研发和生产上投入巨大精力，却在售后服务和保修政策上敷衍了事。在北美市场，售后不是成本中心，而是竞争差异化的关键来源。一个清晰、可信的售后承诺，可能是客户选择你而非竞争对手的决定性因素。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                北美客户对售后的期望
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                北美B2B客户对售后服务有明确的期望，这些期望往往比中国市场的标准更高：
              </p>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">明确的保修条款</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">保修期多长？覆盖什么？不覆盖什么？如何申请？这些信息需要在购买前就能清楚获得。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">可接触的技术支持</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">客户期望能在工作时间内通过电话或邮件联系到技术支持，并得到有意义的回应。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">快速的故障响应</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">当产品出现问题时，客户期望在24-48小时内得到初步响应，而不是一周后才收到回复。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">备件供应保障</h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">客户需要知道关键备件的供应周期，以及在保修期内备件是否免费提供。</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                中国制造商常见的售后盲点
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-1">盲点一：没有书面保修政策</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">很多制造商的保修承诺停留在口头层面，没有书面文件。这在北美市场是不可接受的——客户需要看到明确的、具有法律效力的保修条款。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-1">盲点二：保修条款模糊</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">&quot;正常使用条件下的质量问题&quot;这种表述太模糊。什么算&quot;正常使用&quot;？什么算&quot;质量问题&quot？需要更具体的定义。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-1">盲点三：售后服务只面向大客户</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">很多制造商只给大客户提供售后支持，中小客户被忽视。但在北美，中小客户加起来可能占更大的市场份额。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[15px] mb-1">盲点四：跨时区支持不足</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">北美的工作时间和中国相差12-15小时。如果售后团队只在中国的白天工作，北美客户的紧急问题可能要等到第二天才能得到回应。</p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                建立有效的售后体系
              </h2>
              <div className="space-y-3">
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>制定书面保修政策</strong> — 明确保修期、覆盖范围、排除条款、申请流程和响应时间。用英文撰写，由法律专业人士审核。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>建立分级支持体系</strong> — 根据客户级别和问题紧急程度设置不同的响应时间标准。即使是小客户，也应该有基本的支持渠道。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>考虑本地服务合作伙伴</strong> — 在加拿大或美国寻找授权服务合作伙伴，提供本地化的售后支持。这不仅能解决时区问题，还能用本地语言服务客户。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>建立知识库</strong> — 整理常见问题、故障排除指南、安装手册等技术文档，让客户能够自助解决部分问题。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>定期客户回访</strong> — 主动回访客户，了解产品使用情况，提前发现潜在问题。这种 proactive 的态度在北美市场很受重视。</p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                写在最后
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                售后服务不是成本，而是投资。在北美市场，一个好的售后体系可以：提高客户满意度和忠诚度、增加重复购买和推荐、降低客户获取成本、形成竞争差异化。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                对于希望长期深耕北美市场的中国制造商来说，建立一个专业、可靠的售后服务体系，是必不可少的基础设施。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <h3 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">相关服务</h3>
            <div className="space-y-3">
              <Link to="/zh/services/compliance-responsibility-chain" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">合规与责任链梳理</span>
                  <p className="text-[13px] text-[#767676] mt-1">帮助你建立完整的售后责任和保修体系</p>
                </div>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">了解 →</span>
              </Link>
              <Link to="/zh/services/local-service-connection" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">本地服务资源对接</span>
                  <p className="text-[13px] text-[#767676] mt-1">帮你找到加拿大本地的售后服务合作伙伴</p>
                </div>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">了解 →</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h3 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">相关阅读</h3>
            <div className="space-y-3">
              <Link to="/zh/insights/product-liability-chain" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">产品责任链：从生产到终端客户的完整路径</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读 →</span>
              </Link>
              <Link to="/zh/insights/product-liability-insurance-canada" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">加拿大产品责任险：为什么你需要它</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读 →</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">需要建立北美售后体系？</h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">我们可以帮你设计适合北美市场的售后服务体系，并对接本地服务资源。</p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">联系我们</Link>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
