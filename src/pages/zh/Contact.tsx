import { useState, useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHContact() {
  useSEO({
    title: '预约市场进入初步沟通 | CCBONLINE INC.',
    description: '如果你还不确定是否适合进入加拿大或北美市场，可以先做一次初步沟通。我们会先了解你的产品、目标市场和当前阶段，再判断是否需要进一步诊断或推进。',
    canonical: 'https://www.ccbonline.ca/zh/contact',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '预约市场进入初步沟通 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    wechat: '',
    productType: '',
    targetMarket: '',
    stage: '',
    concern: '',
    hasEnglishMaterials: '',
    preferredContact: '',
    notes: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    const subject = encodeURIComponent(`市场进入初步沟通 - ${formData.company}`)
    const body = encodeURIComponent(
      `公司名称: ${formData.company}\n` +
      `联系人: ${formData.name}\n` +
      `邮箱: ${formData.email}\n` +
      `微信/电话: ${formData.wechat || '未填写'}\n\n` +
      `产品/服务类型: ${formData.productType}\n` +
      `目标市场: ${formData.targetMarket || '未选择'}\n` +
      `当前阶段: ${formData.stage || '未选择'}\n` +
      `最关心的问题: ${formData.concern || '未选择'}\n` +
      `是否已有英文资料: ${formData.hasEnglishMaterials || '未选择'}\n` +
      `希望沟通方式: ${formData.preferredContact || '未选择'}\n\n` +
      `问题说明:\n${formData.notes || '无'}\n\n` +
      `--- 通过 CCBONLINE INC. 官网提交 ---`
    )
    const mailtoLink = `mailto:info@ccbonline.ca?subject=${subject}&body=${body}`
    window.location.href = mailtoLink
  }

  const inputClass = 'w-full px-4 py-3 bg-white border border-[#E5E5E5] focus:border-[#212121]/30 outline-none text-[14px] placeholder:text-[#AAA]'
  const selectClass = `${inputClass} text-[#555]`

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">沟通</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              预约初步沟通
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px]">
              如果你还不确定是否适合进入加拿大或北美市场，也可以先做一次初步沟通。我们会先了解你的产品、目标市场和当前阶段，再判断是否需要进一步诊断或推进。
            </p>
          </div>
        </section>

        {/* 适合先来沟通的情况 */}
        <section className="py-6 md:py-8 bg-white border-b border-[#E5E5E5]">
          <div className="container-site">
            <p className="text-label mb-3">这些情况适合先沟通</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">正在考虑北美市场</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">不确定产品是否适配，也不确定该先进哪个市场。</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">曾经尝试过但停滞了</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">之前的尝试没有持续推进，需要重新评估方向。</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">有客户意向，但缺少落地支持</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">需要在北美本地有人协调执行、合规和售后。</p>
              </div>
              <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">不确定该从哪个服务开始</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">提交你的情况，我们会推荐最合适的第一步。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 提交后流程 */}
        <section className="py-8 md:py-10 bg-white border-b border-[#E5E5E5]">
          <div className="container-site">
            <p className="text-label mb-3">沟通流程</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">1. 我们审阅你的情况</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">根据产品类型、当前阶段和目标市场，匹配最适合的评估方式。</p>
              </div>
              <div className="p-4 border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">2. 1-2 个工作日内回复</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">你会收到一份结构化回复：我们能否帮助、哪个服务适合、接下来需要什么。</p>
              </div>
              <div className="p-4 border border-[#E5E5E5]">
                <p className="text-[13px] font-medium text-[#212121] mb-1">3. 可选的后续电话沟通</p>
                <p className="text-[12px] text-[#767676] leading-[1.6]">如果双方认为有合作空间，安排 20-30 分钟电话澄清需求并给出工作计划。</p>
              </div>
            </div>
          </div>
        </section>

        {/* 表单区域 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
              {/* 左侧联系信息 */}
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <h3 className="text-[14px] font-semibold mb-5">联系信息</h3>
                  <div className="space-y-4 text-[13px]">
                    <div><p className="text-[12px] text-[#999]">官网</p><p>www.ccbonline.ca</p></div>
                    <div><p className="text-[12px] text-[#999]">邮箱</p><p>info@ccbonline.ca</p></div>
                    <div><p className="text-[12px] text-[#999]">电话</p><p>+1 647 568 1128</p></div>
                    <div><p className="text-[12px] text-[#999]">地址</p><p>84 Kenhar Dr, North York, ON M9L 1N2, Canada</p></div>
                  </div>
                </div>

                <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h4 className="text-[13px] font-medium text-[#212121] mb-3">这项初步沟通涵盖什么</h4>
                  <ul className="space-y-2 text-[12px] text-[#666]">
                    <li>你的产品类别是否适配北美市场</li>
                    <li>你当前处于哪个阶段、哪种服务最合适</li>
                    <li>合规要求和责任链的初步评估</li>
                    <li>推荐下一步行动序列</li>
                  </ul>
                  <p className="text-[11px] text-[#999] mt-3 italic">这不是详细的审计报告，而是一份方向性评估，帮你判断是否值得继续投入、以及从哪里开始。</p>
                </div>
              </div>

              {/* 右侧表单 */}
              <div className="lg:col-span-8">
                <form onSubmit={handleSubmit} className="bg-[#F8F9FA] p-5 md:p-8">
                  {submitted ? (
                    <div className="text-center py-10">
                      <div className="w-10 h-10 bg-[#00A884] flex items-center justify-center mx-auto mb-4"><span className="text-white text-[16px]">&#10003;</span></div>
                      <h3 className="text-[18px] font-semibold mb-2">沟通申请已提交</h3>
                      <p className="text-[13px] text-[#767676] mb-4">我们已收到你的信息，将在 1-2 个工作日内回复。</p>
                      <div className="p-4 bg-white border border-[#E5E5E5] mb-4 max-w-[400px] mx-auto">
                        <p className="text-[12px] text-[#666] mb-2">如果邮件客户端没有自动打开，也可以直接联系我们：</p>
                        <p className="text-[14px] font-medium text-[#212121]">info@ccbonline.ca</p>
                        <p className="text-[13px] text-[#666]">+1 647 568 1128</p>
                      </div>
                      <p className="text-[12px] text-[#999]">等待期间，可以阅读我们的<Link to="/zh/insights" className="text-[#00A884] hover:underline">市场进入洞察</Link>或查看<Link to="/zh/services" className="text-[#00A884] hover:underline">服务项目</Link>。</p>
                    </div>
                  ) : (
                    <>
                      {/* 基本信息 */}
                      <div className="mb-6">
                        <p className="text-[11px] font-medium uppercase tracking-wider text-[#999] mb-3">基本信息 <span className="text-[#00A884]">*</span> 必填</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="text" name="company" placeholder="公司名称 *" required className={inputClass} value={formData.company} onChange={handleChange} />
                          <input type="text" name="name" placeholder="联系人姓名 *" required className={inputClass} value={formData.name} onChange={handleChange} />
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="email" name="email" placeholder="工作邮箱 *" required className={inputClass} value={formData.email} onChange={handleChange} />
                          <input type="text" name="wechat" placeholder="微信或电话" className={inputClass} value={formData.wechat} onChange={handleChange} />
                        </div>
                      </div>

                      {/* 产品与目标 */}
                      <div className="mb-6">
                        <p className="text-[11px] font-medium uppercase tracking-wider text-[#999] mb-3">产品与目标</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <input type="text" name="productType" placeholder="产品 / 服务类型" className={inputClass} value={formData.productType} onChange={handleChange} />
                          <select name="targetMarket" className={selectClass} value={formData.targetMarket} onChange={handleChange}>
                            <option value="">目标市场</option>
                            <option value="Canada">加拿大</option>
                            <option value="United States">美国</option>
                            <option value="North America">北美（两者皆可）</option>
                            <option value="Not sure">不确定</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <select name="stage" className={selectClass} value={formData.stage} onChange={handleChange}>
                            <option value="">当前阶段</option>
                            <option value="初步了解">初步了解 — 还没有具体计划</option>
                            <option value="已有客户询盘">已有客户询盘 — 需要评估和准备</option>
                            <option value="准备参展">准备参展 — 需要展前准备</option>
                            <option value="准备进口">准备进口 — 需要合规和 IOR 安排</option>
                            <option value="已经在销售">已经在销售 — 需要系统化和扩展</option>
                          </select>
                          <select name="concern" className={selectClass} value={formData.concern} onChange={handleChange}>
                            <option value="">目前最关心的问题</option>
                            <option value="合规认证">合规认证 — 认证要求和路径不清楚</option>
                            <option value="清关与 IOR">清关与 IOR — 进口责任怎么安排</option>
                            <option value="英文资料">英文资料 — 产品资料需要本地化</option>
                            <option value="客户渠道">客户渠道 — 不知道怎么找客户</option>
                            <option value="本地售后">本地售后 — 售后和备件怎么承接</option>
                            <option value="仓储物流">仓储物流 — 入库和配送怎么安排</option>
                            <option value="其他">其他（请在下方说明）</option>
                          </select>
                        </div>
                      </div>

                      <div className="mb-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <select name="hasEnglishMaterials" className={selectClass} value={formData.hasEnglishMaterials} onChange={handleChange}>
                            <option value="">是否已有英文资料</option>
                            <option value="有完整英文资料">有完整的英文产品资料</option>
                            <option value="有部分">有部分，需要完善</option>
                            <option value="没有">没有，需要整理</option>
                          </select>
                          <select name="preferredContact" className={selectClass} value={formData.preferredContact} onChange={handleChange}>
                            <option value="">希望沟通方式</option>
                            <option value="微信">微信</option>
                            <option value="邮件">邮件</option>
                            <option value="电话">电话</option>
                            <option value="Zoom">Zoom</option>
                          </select>
                        </div>
                      </div>

                      {/* 问题说明 */}
                      <div className="mb-6">
                        <textarea name="notes" placeholder="简要说明你的情况：产品类型、目标市场、当前进展、遇到什么困难、希望获得什么帮助" rows={5} className={`${inputClass} resize-none`} value={formData.notes} onChange={handleChange} />
                      </div>

                      <button type="submit" className="btn-primary w-full sm:w-auto text-[15px] px-8 py-3.5 min-h-[52px]">提交初步沟通申请</button>
                      <p className="text-[11px] text-[#999] mt-3">提交即表示你同意我们就评估事项与你联系。我们不会与第三方分享你的信息。</p>
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
