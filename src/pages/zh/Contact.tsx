import { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function ZHContact() {
  useEffect(() => {
    document.title = '市场进入咨询 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    company: '', name: '', email: '', phone: '', location: '',
    category: '', targetMarket: '', stage: '', question: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputClass = 'w-full px-4 py-3 bg-white border border-[#E5E5E5] focus:border-[#212121]/30 outline-none text-[14px] placeholder:text-[#AAA]'

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
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
            <p className="text-label mb-3">联系</p>
            <h1 className="font-serif text-[#212121] text-[32px] md:text-[42px] leading-[1.3] tracking-tight max-w-[700px] mb-4">
              讨论您的市场进入计划
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[520px]">
              分享您的情况，我们会回复明确的下一步。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              <div className="lg:col-span-4 space-y-6">
                <div>
                  <h3 className="text-[14px] font-semibold mb-5">联系信息</h3>
                  <div className="space-y-4 text-[14px]">
                    <div><p className="text-[12px] text-[#999]">官网</p><p>ccbonline.ca</p></div>
                    <div><p className="text-[12px] text-[#999]">邮箱</p><p>info@ccbonline.ca</p></div>
                    <div><p className="text-[12px] text-[#999]">电话</p><p>+1 647 568 1128</p></div>
                    <div><p className="text-[12px] text-[#999]">所在地</p><p>加拿大多伦多</p></div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8">
                <form onSubmit={handleSubmit} className="bg-[#F8F9FA] p-5 md:p-8">
                  {submitted ? (
                    <div className="text-center py-10">
                      <div className="w-10 h-10 bg-[#C00000] flex items-center justify-center mx-auto mb-4"><span className="text-white text-[16px]">✓</span></div>
                      <h3 className="text-[18px] font-semibold mb-2">感谢您的提交</h3>
                      <p className="text-[14px] text-[#767676]">我们将在1–2个工作日内回复。</p>
                    </div>
                  ) : (
                    <>
                      <div className="mb-6">
                        <p className="text-[11px] font-medium uppercase tracking-wider text-[#999] mb-3">市场进入咨询表单 <span className="text-[#C00000]">*</span> 必填</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="text" name="company" placeholder="公司名称 *" required className={inputClass} value={formData.company} onChange={handleChange} />
                          <input type="text" name="name" placeholder="您的姓名 *" required className={inputClass} value={formData.name} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="email" name="email" placeholder="邮箱 *" required className={inputClass} value={formData.email} onChange={handleChange} />
                          <input type="text" name="phone" placeholder="电话 / 微信" className={inputClass} value={formData.phone} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="text" name="location" placeholder="公司所在地" className={inputClass} value={formData.location} onChange={handleChange} />
                          <input type="text" name="category" placeholder="产品类别" className={inputClass} value={formData.category} onChange={handleChange} />
                        </div>
                      </div>
                      <div className="mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <select name="targetMarket" className={`${inputClass} text-[#555]`} value={formData.targetMarket} onChange={handleChange}>
                            <option value="">目标市场</option>
                            <option value="Canada">加拿大</option>
                            <option value="United States">美国</option>
                            <option value="North America">北美</option>
                            <option value="Not sure">尚未确定</option>
                          </select>
                          <select name="stage" className={`${inputClass} text-[#555]`} value={formData.stage} onChange={handleChange}>
                            <option value="">当前阶段</option>
                            <option value="Exploring">探索中</option>
                            <option value="Preparing">准备中</option>
                            <option value="Already selling">已有销售</option>
                            <option value="Need partners">需要合作伙伴</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-6">
                        <textarea name="question" placeholder="您的主要问题或挑战（可选）" rows={4} className={`${inputClass} resize-none`} value={formData.question} onChange={handleChange} />
                      </div>
                      <button type="submit" className="btn-primary w-full sm:w-auto text-[14px]">提交咨询请求</button>
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
