import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHContact() {
  useSEO({
    title: '联系中加商业在线 | 市场进入初步评估与咨询',
    description: '提交你的产品信息和目标市场，CCBONLINE INC. 会在1-2个工作日内回复，推荐适合你的市场进入下一步。',
    canonical: 'https://www.ccbonline.ca/zh/contact',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '联系中加商业在线 | 市场进入初步评估与咨询'
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    company: '', name: '', email: '', phone: '', wechat: '',
    category: '', targetMarket: '', stage: '', challenge: '',
    hasEnglishMaterials: '', message: '', consent: false,
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    if ('checked' in target) {
      setFormData({ ...formData, [target.name]: (target as HTMLInputElement).checked })
    } else {
      setFormData({ ...formData, [target.name]: target.value })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    const subject = encodeURIComponent(`市场进入评估 - ${formData.company}`)
    const body = encodeURIComponent(
      `公司: ${formData.company}\n` +
      `姓名: ${formData.name}\n` +
      `邮箱: ${formData.email}\n` +
      `电话: ${formData.phone || '未提供'}\n` +
      `微信: ${formData.wechat || '未提供'}\n` +
      `产品类别: ${formData.category}\n` +
      `目标市场: ${formData.targetMarket || '未选择'}\n` +
      `当前阶段: ${formData.stage || '未选择'}\n` +
      `最大挑战: ${formData.challenge || '未选择'}\n` +
      `英文资料: ${formData.hasEnglishMaterials || '未选择'}\n` +
      `说明: ${formData.message || '无'}\n\n` +
      `--- 通过 CCBONLINE INC. 网站提交 ---`
    )
    window.location.href = `mailto:info@ccbonline.ca?subject=${subject}&body=${body}`
  }

  const inputClass = 'w-full px-4 py-3 bg-white border border-[#E5E5E5] focus:border-[#212121]/30 outline-none text-[14px] placeholder:text-[#AAA]'
  const selectClass = `${inputClass} text-[#555]`

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">联系</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              申请市场进入初步评估
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px]">
              告诉我们你的产品和目标。我们会审阅你的情况，并在1-2个工作日内给出明确的下一步建议。
            </p>
          </div>
        </section>

        <section className="py-6 md:py-8 bg-white border-b border-[#E5E5E5]">
          <div className="container-site">
            <p className="text-label mb-3">适合联系的情况</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: '正在考虑北美市场', desc: '不确定产品是否适配，也不确定该先进哪个市场。' },
                { title: '曾经尝试过但停滞了', desc: '之前的尝试没有持续推进，需要重新评估方向。' },
                { title: '有客户意向但缺少落地支持', desc: '需要在北美本地有人协调执行、合规和售后。' },
                { title: '不确定该从哪个服务开始', desc: '提交你的情况，我们会推荐最合适的第一步。' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[13px] font-medium text-[#212121] mb-1">{item.title}</p>
                  <p className="text-[12px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6 md:py-8 bg-[#F8F9FA] border-b border-[#E5E5E5]">
          <div className="container-site">
            <div className="max-w-[800px] p-5 bg-white border border-[#E5E5E5]">
              <p className="text-[13px] text-[#767676] leading-[1.7]">
                <strong className="text-[#212121]">服务范围说明：</strong>中加商业在线提供商业顾问、市场进入路径设计、资料梳理、本地资源协调和项目推进支持。我们不替代持牌律师、税务师、海关经纪、认证机构、保险顾问或工程专业人士。涉及专业意见时，我们可以协助对接合适的第三方专业机构。
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <h3 className="text-[14px] font-semibold mb-5">联系信息</h3>
                  <div className="space-y-4 text-[13px]">
                    <div><p className="text-[12px] text-[#999]">公司</p><p className="font-medium">CCBONLINE INC. / 中加商业在线</p></div>
                    <div><p className="text-[12px] text-[#999]">官网</p><p>www.ccbonline.ca</p></div>
                    <div><p className="text-[12px] text-[#999]">邮箱</p><p>info@ccbonline.ca</p></div>
                    <div><p className="text-[12px] text-[#999]">电话</p><p>+1 647 568 1128</p></div>
                    <div><p className="text-[12px] text-[#999]">地址</p><p>84 Kenhar Dr, North York, ON M9L 1N2, Canada</p></div>
                  </div>
                </div>
                <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h4 className="text-[13px] font-medium text-[#212121] mb-3">提交后流程</h4>
                  <ol className="space-y-2 text-[12px] text-[#666] list-decimal list-inside">
                    <li>我们审阅你的提交内容，匹配适合你的评估方式。</li>
                    <li>1-2个工作日内回复，给出结构化建议。</li>
                    <li>如果双方认为有合作空间，安排20-30分钟电话澄清需求。</li>
                  </ol>
                  <p className="text-[11px] text-[#999] mt-3 italic">这是方向性评估，不是详细审计。我们会告诉你缺什么、是否值得优先补齐。</p>
                </div>
              </div>

              <div className="lg:col-span-8">
                <form onSubmit={handleSubmit} className="bg-[#F8F9FA] p-5 md:p-8">
                  {submitted ? (
                    <div className="text-center py-10">
                      <div className="w-10 h-10 bg-[#00B894] flex items-center justify-center mx-auto mb-4"><span className="text-white text-[16px]">&#10003;</span></div>
                      <h3 className="text-[18px] font-semibold mb-2">评估申请已提交</h3>
                      <p className="text-[13px] text-[#767676] mb-4">感谢联系中加商业在线。我们会先阅读你提交的信息，再判断适合的下一步。如果涉及具体项目，我们可能会进一步了解产品、资料、认证、目标市场和当前进展，再给出更具体的建议。</p>
                      <div className="p-4 bg-white border border-[#E5E5E5] mb-4 max-w-[400px] mx-auto">
                        <p className="text-[12px] text-[#666] mb-2">如果邮件客户端没有自动打开：</p>
                        <p className="text-[14px] font-medium text-[#212121]">info@ccbonline.ca</p>
                        <p className="text-[13px] text-[#666]">+1 647 568 1128</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-[11px] font-medium uppercase tracking-wider text-[#999] mb-4">市场进入评估 <span className="text-[#00B894]">*</span> 必填</p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        <input type="text" name="company" placeholder="公司名称 *" required className={inputClass} value={formData.company} onChange={handleChange} />
                        <input type="text" name="name" placeholder="联系人姓名 *" required className={inputClass} value={formData.name} onChange={handleChange} />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        <input type="email" name="email" placeholder="工作邮箱 *" required className={inputClass} value={formData.email} onChange={handleChange} />
                        <input type="text" name="phone" placeholder="电话" className={inputClass} value={formData.phone} onChange={handleChange} />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        <input type="text" name="wechat" placeholder="微信（选填）" className={inputClass} value={formData.wechat} onChange={handleChange} />
                        <input type="text" name="category" placeholder="产品/服务类别 *" required className={inputClass} value={formData.category} onChange={handleChange} />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        <select name="targetMarket" className={selectClass} value={formData.targetMarket} onChange={handleChange}>
                          <option value="">目标市场</option>
                          <option value="Canada">加拿大</option>
                          <option value="United States">美国</option>
                          <option value="North America">北美（两者皆可）</option>
                          <option value="Not sure">不确定</option>
                        </select>
                        <select name="stage" className={selectClass} value={formData.stage} onChange={handleChange}>
                          <option value="">当前阶段</option>
                          <option value="Preparing">准备中 — 需要方向</option>
                          <option value="Already exporting">已在出口 — 需要系统化</option>
                          <option value="Received inquiries">已有询盘 — 需要本地跟进</option>
                          <option value="Attended trade show">已参展 — 需要跟进</option>
                          <option value="Looking for partners">寻找本地合作伙伴</option>
                          <option value="Need website diagnosis">需要网站/内容诊断</option>
                        </select>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                        <select name="challenge" className={selectClass} value={formData.challenge} onChange={handleChange}>
                          <option value="">最大挑战（选填）</option>
                          <option value="Market fit">市场适配评估</option>
                          <option value="Certification">认证/合规</option>
                          <option value="Import / IOR">进口/IOR安排</option>
                          <option value="Local channel">本地渠道开发</option>
                          <option value="Website / content">网站/英文内容</option>
                          <option value="Trade show follow-up">展会跟进</option>
                          <option value="Partner coordination">合作伙伴协调</option>
                        </select>
                        <select name="hasEnglishMaterials" className={selectClass} value={formData.hasEnglishMaterials} onChange={handleChange}>
                          <option value="">英文资料准备好了吗？</option>
                          <option value="Yes, complete">已准备好，完整</option>
                          <option value="Partial">部分 — 需要审查</option>
                          <option value="No">没有 — 需要准备</option>
                        </select>
                      </div>
                      <div className="mb-4">
                        <textarea name="message" placeholder="请介绍你的产品、过往尝试、时间线和需要帮助的地方。" rows={5} className={`${inputClass} resize-none`} value={formData.message} onChange={handleChange} />
                      </div>

                      <div className="mb-4 flex items-start gap-2">
                        <input type="checkbox" name="consent" id="consent" checked={formData.consent} onChange={handleChange} className="mt-0.5" />
                        <label htmlFor="consent" className="text-[12px] text-[#666] leading-[1.6]">
                          我同意接收中加商业在线关于加拿大及北美市场进入、商业资源、活动和相关服务的信息，并理解可以随时取消订阅。
                        </label>
                      </div>

                      <button type="submit" className="btn-primary w-full sm:w-auto text-[15px] px-8 py-3.5 min-h-[52px]">提交评估申请</button>

                      <div className="mt-4 space-y-2">
                        <p className="text-[11px] text-[#999] leading-[1.5]">
                          提交本表单即表示你同意中加商业在线使用你提供的信息回复咨询并判断下一步沟通方式。请不要通过本表单提交高度敏感的技术文件、商业秘密或敏感个人信息。
                        </p>
                        <p className="text-[11px] text-[#999] leading-[1.5]">
                          我们不会与第三方分享你的信息。查看<Link to="/zh/privacy" className="text-[#00B894] hover:underline">隐私政策</Link>和<Link to="/zh/terms" className="text-[#00B894] hover:underline">使用条款</Link>。
                        </p>
                      </div>
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
