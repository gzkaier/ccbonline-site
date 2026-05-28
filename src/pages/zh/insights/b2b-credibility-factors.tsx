import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function Page() {
  useSEO({
    title: 'B2B可信度：客户凭什么相信你｜品牌可信度｜CCBONLINE',
    description: '在北美B2B市场，客户选择供应商时看重的不仅仅是价格和产品。本文解析影响B2B可信度的核心因素，帮助中国制造商理解北美采购商的决策逻辑。',
    canonical: 'https://www.ccbonline.ca/zh/insights/b2b-credibility-factors',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = 'B2B可信度：客户凭什么相信你｜品牌可信度｜CCBONLINE'
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
              B2B可信度：客户凭什么相信你
            </h1>
            <div className="flex flex-wrap items-center gap-3 text-[13px] text-white/50 mb-4">
              <span>阅读时间：约 7 分钟</span>
              <span>·</span>
              <span>B2B可信度｜品牌信任｜采购商决策｜中国制造</span>
            </div>
            <div className="p-4 md:p-5 bg-white/5 border border-white/10">
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] italic">
                在北美B2B市场，客户决策往往不是一个人做出的，而是一个涉及多部门、多轮评估的过程。你的产品可能有竞争力，但如果可信度没有建立起来，价格再好也很难打动客户。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                可信度不是品牌知名度
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                很多中国制造商混淆了&quot;品牌知名度&quot;和&quot;品牌可信度&quot;。知名度是被知道的程度，可信度是被信任的程度。一个新进入北美市场的中国品牌，知名度可能为零，但可信度可以在第一次接触时就开始建立。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                可信度的核心问题是：当客户第一次听说你、访问你的网站、收到你的邮件时，他们需要在短时间内回答一个问题——&quot;这家公司靠谱吗？&quot;这个问题的答案，决定了他们是否愿意投入更多时间了解你。
              </p>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                影响B2B可信度的六个核心因素
              </h2>

              <div className="space-y-6">
                <div className="p-5 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[16px] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00B894] text-white text-[12px] flex items-center justify-center shrink-0">1</span>
                    官网的专业度和完整性
                  </h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                    北美B2B买家几乎都会访问供应商官网。一个设计粗糙、信息不完整、只有中文或充满语法错误的英文网站，会在第一时间摧毁可信度。相反，清晰的服务描述、完整的联系信息、专业的案例展示，都能快速建立初步信任。
                  </p>
                </div>

                <div className="p-5 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[16px] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00B894] text-white text-[12px] flex items-center justify-center shrink-0">2</span>
                    第三方背书和认证
                  </h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                    CSA、UL、ISO等行业认证是可信度的重要信号。但除了这些，客户还在寻找其他形式的背书：媒体报道、行业协会会员、合作伙伴logo、客户评价。这些第三方信号比自我宣传更有说服力。
                  </p>
                </div>

                <div className="p-5 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[16px] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00B894] text-white text-[12px] flex items-center justify-center shrink-0">3</span>
                    响应速度和沟通质量
                  </h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                    北美客户对响应时间有明确期望：邮件应在24小时内回复，样品请求应在几天内处理。延迟响应不仅意味着失去机会，还传递了一个负面信号——这家公司可能不够专业或不够重视这个客户。
                  </p>
                </div>

                <div className="p-5 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[16px] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00B894] text-white text-[12px] flex items-center justify-center shrink-0">4</span>
                    本地存在感和可接触性
                  </h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                    有北美办公地址、本地电话号码、或者至少有时区友好的客服时间，都会显著提升可信度。客户想知道，当出现问题时，他们能联系到谁，以及这个人是否能理解他们的处境。
                  </p>
                </div>

                <div className="p-5 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[16px] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00B894] text-white text-[12px] flex items-center justify-center shrink-0">5</span>
                    产品资料和文档的专业度
                  </h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                    规格书、安装指南、安全数据表——这些技术文档的质量直接反映了公司的专业程度。文档中的翻译错误、格式混乱、信息缺失，都会让客户对产品质量产生怀疑。
                  </p>
                </div>

                <div className="p-5 bg-[#F8F9FA]">
                  <h4 className="font-semibold text-[16px] mb-2 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#00B894] text-white text-[12px] flex items-center justify-center shrink-0">6</span>
                    售后承诺和保修条款
                  </h4>
                  <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">
                    清晰的保修政策、明确的售后流程、可执行的退换货条款——这些都是可信度的具体体现。没有明确售后承诺的供应商，在北美B2B市场很难获得长期合作机会。
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                可信度建设的常见误区
              </h2>
              <div className="space-y-3">
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>误区一：只强调价格优势</strong> — 价格敏感的客户往往也是最难建立长期合作关系的客户。过度强调价格反而会让人怀疑质量。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>误区二：官网只有产品没有故事</strong> — 纯粹的产品列表无法建立情感连接。客户想知道你是谁、你为什么做这个、你的价值观是什么。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>误区三：忽视小客户的体验</strong> — 今天的小客户可能是明天的大客户。每一个接触点的体验都在积累或消耗你的可信度。</p>
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]"><strong>误区四：英文资料有明显错误</strong> — 翻译错误、中式英文、格式混乱都会严重损害专业形象。投资于专业的英文内容是值得的。</p>
              </div>
            </div>

            <div className="mb-10">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                写在最后
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                B2B可信度不是一朝一夕建立的，但可以在一瞬间被破坏。每一次客户接触——无论是网站访问、邮件往来、样品交付还是售后支持——都在为你的可信度账户存款或取款。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                对于进入北美市场的中国制造商来说，理解并系统性地建设B2B可信度，可能比单纯优化产品价格更重要。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <h3 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">相关服务</h3>
            <div className="space-y-3">
              <Link to="/zh/services/business-reason-credibility-diagnosis" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">购买理由与可信度诊断</span>
                  <p className="text-[13px] text-[#767676] mt-1">从北美客户视角评估你的品牌可信度和购买理由清晰度</p>
                </div>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">了解 →</span>
              </Link>
              <Link to="/zh/services/english-materials-optimization" className="flex items-center justify-between p-4 bg-white border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <div>
                  <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894] font-medium">英文资料优化</span>
                  <p className="text-[13px] text-[#767676] mt-1">让你的英文网站、产品手册和沟通材料更专业</p>
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
              <Link to="/zh/insights/why-buyers-dont-contact" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">为什么客户看了你的官网却不联系</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读 →</span>
              </Link>
              <Link to="/zh/insights/purchase-rationale-clarity" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">购买理由：大多数企业没想清楚的事</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读 →</span>
              </Link>
              <Link to="/zh/insights/website-credibility-checklist" className="flex items-center justify-between p-4 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00B894] transition-colors group">
                <span className="text-[14px] md:text-[15px] text-[#444] group-hover:text-[#00B894]">官网可信度自检清单</span>
                <span className="text-[13px] text-[#00B894] shrink-0 ml-4">阅读 →</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site max-w-[700px]">
            <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">想评估你的B2B可信度？</h2>
            <p className="text-white/60 text-[15px] leading-[1.65] mb-6">我们可以从北美采购商的视角，系统诊断你的品牌可信度和购买理由清晰度。</p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">联系我们</Link>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
