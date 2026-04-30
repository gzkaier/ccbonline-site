import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHContact() {
  useSEO({
    title: '市场进入初步评估 | CCBONLINE INC.',
    description: '预约与 CCBONLINE INC. 的免费初步评估。我们会在 1-2 个工作日内回复，帮您判断当前是否适合进入北美市场、应优先解决什么问题。',
    canonical: 'https://www.ccbonline.ca/zh/contact',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '市场进入初步评估 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    company: '', name: '', email: '', phone: '', location: '',
    category: '', targetMarket: '', stage: '', challenge: '', question: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    
    // Build mailto link with form data
    const subject = encodeURIComponent(`市场进入评估申请 - ${formData.company}`)
    const body = encodeURIComponent(
      `公司名称: ${formData.company}\n` +
      `姓名: ${formData.name}\n` +
      `邮箱: ${formData.email}\n` +
      `电话: ${formData.phone || '未填写'}\n` +
      `所在地: ${formData.location || '未填写'}\n` +
      `产品类别: ${formData.category}\n` +
      `目标市场: ${formData.targetMarket || '未选择'}\n` +
      `当前阶段: ${formData.stage || '未选择'}\n` +
      `最大挑战: ${formData.challenge || '未选择'}\n` +
      `补充信息: ${formData.question || '无'}\n\n` +
      `--- 通过 CCBONLINE INC. 官网提交 ---`
    )
    const mailtoLink = `mailto:info@ccbonline.ca?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
  }

  const inputClass = 'w-full px-4 py-3 bg-white border border-[#E5E5E5] focus:border-[#212121]/30 outline-none text-[14px] placeholder:text-[#AAA]'

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="relative pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/business-consultation-market-entry-discussion.jpg"
              alt="市场进入咨询：为加拿大和北美市场进入计划进行商业讨论。"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-[#F8F9FA]/90" />
          <div className="relative z-10 container-site">
            <p className="text-label mb-3">咨询</p>
            <h1 className="font-serif text-[#212121] text-[32px] md:text-[42px] leading-[1.3] tracking-tight max-w-[720px] mb-4">
              预约市场进入初步评估
            </h1>
            <p className="text-[15px] md:text-[16px] text-[#767676] max-w-[560px]">
              告诉我们您的产品和目标。我们会在 1-2 个工作日内审阅您的情况，并给出明确的下一步建议。
            </p>
          </div>
        </section>

        {/* 适合先来沟通的情况 */}
        <section className="py-6 md:py-8 bg-[#F8F9FA] border-b border-[#E5E5E5]">
          <div className="container-site">
            <p className="text-label mb-3">这些情况适合先沟通</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-white border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">正在考虑北美市场</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">不确定产品是否适配，也不确定该先进哪个市场。</p>
              </div>
              <div className="p-4 bg-white border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">曾经尝试过但停滞了</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">之前的尝试失败了，需要一个结构化的重启方案。</p>
              </div>
              <div className="p-4 bg-white border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">有渠道或客户意向，但缺少落地支持</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">需要在北美本地有人协调执行和跟进。</p>
              </div>
              <div className="p-4 bg-white border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">不确定该从哪个服务开始</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">提交您的情况，我们会推荐最合适的第一步。</p>
              </div>
            </div>
          </div>
        </section>

        {/* What happens after you submit */}
        <section className="py-8 md:py-10 bg-white border-b border-[#E5E5E5]">
          <div className="container-site">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">1. 我们审阅您的情况</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">我们的团队阅读您的提交信息，根据产品类型、当前阶段和目标，匹配最适合的评估方式。</p>
              </div>
              <div className="p-4 border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">2. 1-2 个工作日内回复</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">您会收到一份结构化回复：我们能否帮助、哪个服务适合您的阶段、以及接下来需要补充什么信息。</p>
              </div>
              <div className="p-4 border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">3. 可选的后续电话沟通</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">如果双方认为有合作空间，我们会安排 20-30 分钟的电话，澄清需求并给出具体的工作计划。</p>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* Left: Contact info + FAQ */}
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <h3 className="text-[14px] font-semibold mb-5">联系信息</h3>
                  <div className="space-y-4 text-[13px]">
                    <div><p className="text-[12px] text-[#999]">官网</p><p>www.ccbonline.ca</p></div>
                    <div><p className="text-[12px] text-[#999]">邮箱</p><p>info@ccbonline.ca</p></div>
                    <div><p className="text-[12px] text-[#999]">电话</p><p>+1 647 568 1128</p></div>
                    <div><p className="text-[12px] text-[#999]">所在地</p><p>加拿大多伦多</p></div>
                  </div>
                </div>

                <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h4 className="text-[13px] font-medium text-[#212121] mb-3">这项初步评估涵盖什么</h4>
                  <ul className="space-y-2 text-[12px] text-[#666]">
                    <li>• 您的产品类别是否适配北美市场</li>
                    <li>• 您当前处于哪个阶段、哪种服务最合适</li>
                    <li>• 合规和渠道的可行性初判</li>
                    <li>• 推荐的下一步行动序列</li>
                  </ul>
                  <p className="text-[11px] text-[#999] mt-3 italic">这不是详细的审计报告，而是一份方向性评估，帮您判断是否值得继续投入、以及从哪里开始。</p>
                </div>

                <div>
                  <h4 className="text-[13px] font-medium text-[#212121] mb-3">常见问题</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[12px] font-medium text-[#212121]">初步评估是否收费？</p>
                      <p className="text-[12px] text-[#767676] leading-[1.6]">不收费。首次审阅和书面回复均为免费。付费服务仅在您明确选择后才开始。</p>
                    </div>
                    <div>
                      <p className="text-[12px] font-medium text-[#212121]">我需要提前准备资料吗？</p>
                      <p className="text-[12px] text-[#767676] leading-[1.6]">不需要。填您知道的即可。如果我们需要更多资料，会在后续沟通中向您索取。</p>
                    </div>
                    <div>
                      <p className="text-[12px] font-medium text-[#212121]">如果我们还没准备好呢？</p>
                      <p className="text-[12px] text-[#767676] leading-[1.6]">这正是诊断服务的意义。我们会告诉您缺什么、是否值得优先补齐、以及大概需要多长时间。</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-8">
                <form onSubmit={handleSubmit} className="bg-[#F8F9FA] p-5 md:p-8">
                  {submitted ? (
                    <div className="text-center py-10">
                      <div className="w-10 h-10 bg-[#C00000] flex items-center justify-center mx-auto mb-4"><span className="text-white text-[16px]">✓</span></div>
                      <h3 className="text-[18px] font-semibold mb-2">评估申请已提交</h3>
                      <p className="text-[13px] text-[#767676] mb-4">我们已收到您的评估请求，将在 1-2 个工作日内回复。</p>
                      <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5] mb-4 max-w-[400px] mx-auto">
                        <p className="text-[12px] text-[#666] mb-2">如果您的邮件客户端没有自动打开，也可以直接联系我们：</p>
                        <p className="text-[14px] font-medium text-[#212121]">info@ccbonline.ca</p>
                        <p className="text-[13px] text-[#666]">+1 647 568 1128</p>
                      </div>
                      <p className="text-[12px] text-[#999]">等待期间，您可以阅读我们的<Link to="/zh/insights" className="text-[#C00000] hover:underline">市场进入洞察</Link>或查看<Link to="/zh/services" className="text-[#C00000] hover:underline">服务项目</Link>。</p>
                    </div>
                  ) : (
                    <>
                      <div className="mb-6">
                        <p className="text-[11px] font-medium uppercase tracking-wider text-[#999] mb-3">市场进入评估表 <span className="text-[#C00000]">*</span> 必填项</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="text" name="company" placeholder="公司名称 *" required className={inputClass} value={formData.company} onChange={handleChange} />
                          <input type="text" name="name" placeholder="您的姓名 *" required className={inputClass} value={formData.name} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="email" name="email" placeholder="工作邮箱 *" required className={inputClass} value={formData.email} onChange={handleChange} />
                          <input type="text" name="phone" placeholder="电话 / 微信" className={inputClass} value={formData.phone} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="text" name="location" placeholder="公司所在地（城市，国家）" className={inputClass} value={formData.location} onChange={handleChange} />
                          <input type="text" name="category" placeholder="产品类别 *" required className={inputClass} value={formData.category} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <select name="targetMarket" className={`${inputClass} text-[#555]`} value={formData.targetMarket} onChange={handleChange}>
                            <option value="">目标市场</option>
                            <option value="Canada">加拿大</option>
                            <option value="United States">美国</option>
                            <option value="North America">北美（两者皆可）</option>
                            <option value="Not sure">尚未确定</option>
                          </select>
                          <select name="stage" className={`${inputClass} text-[#555]`} value={formData.stage} onChange={handleChange}>
                            <option value="">当前阶段</option>
                            <option value="Exploring">初步了解 — 还没有具体计划</option>
                            <option value="Preparing">正在准备 — 需要方向性指导</option>
                            <option value="Already selling">已有销售 — 需要更系统的结构</option>
                            <option value="Stuck">曾经尝试 — 遇到障碍暂停了</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-6">
                        <select name="challenge" className={`${inputClass} text-[#555]`} value={formData.challenge} onChange={handleChange}>
                          <option value="">目前最大的挑战（选填）</option>
                          <option value="Not sure where to start">不知道从哪里开始</option>
                          <option value="Compliance unclear">合规要求不清楚</option>
                          <option value="No local contacts">没有本地人脉或渠道</option>
                          <option value="Previous attempt failed">之前尝试过但失败了，想重新启动</option>
                          <option value="Need execution support">需要有人在本地协助执行</option>
                          <option value="Other">其他（请在下方说明）</option>
                        </select>
                      </div>
                      <div className="mb-6">
                        <textarea name="question" placeholder="还有什么我们应该知道的？（产品详情、过往尝试、时间预期、预算范围等）" rows={4} className={`${inputClass} resize-none`} value={formData.question} onChange={handleChange} />
                      </div>
                      <button type="submit" className="btn-primary w-full sm:w-auto text-[15px] px-8 py-3.5 min-h-[52px]">提交初步评估申请</button>
                      <p className="text-[11px] text-[#999] mt-3">提交即表示您同意我们就评估事项与您联系。我们不会与第三方分享您的信息。</p>
                    </>
                  )}
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
