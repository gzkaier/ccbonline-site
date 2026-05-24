import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_compliance_responsibility_chain() {
  useSEO({
    title: '合规与责任链搭建 | CCBONLINE INC.',
    description: '帮你在北美销售前梳理清关、认证、产品责任、税务和售后责任链，避免因合规缺口导致货物扣留或法律风险。',
    canonical: 'https://www.ccbonline.ca/zh/services/compliance-responsibility-chain',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '合规与责任链搭建 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* 1. Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">合规先行</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              合规与责任链搭建
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              帮你在北美销售前梳理清关、认证、产品责任、税务结构和售后责任链，避免因合规缺口导致货物扣留、订单取消或法律风险。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            {/* Image */}
            <div className="mb-10">
              <img
                src="/images/services-compliance-responsibility-chain.jpg"
                alt="CCBONLINE 帮助企业搭建北美合规与责任链"
                className="w-full h-auto max-h-[400px] object-cover"
                loading="lazy"
              />
            </div>

            {/* 2. 服务定义 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                这是什么服务
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                合规与责任链搭建是 CCBONLINE 为准备实质性销售的企业的提供的<strong className="font-medium text-[#212121]">前置合规梳理服务</strong>。北美市场对产品安全、标签规范、进口申报、税务合规和产品责任有严格且具体的要求。很多企业不是产品质量不好，而是因为没有在发货前完成必要的合规步骤，导致货物在海关被扣、客户收到后无法上架销售、或者在出现产品问题时没有人承担责任。
              </p>
            </div>

            {/* 3. 适合谁 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                适合哪些企业
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">已经有客户意向或渠道合作意向，但<strong className="font-medium">不确定合规要求</strong>的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">产品涉及电子、机械、儿童用品、食品接触材料等<strong className="font-medium">监管敏感类别</strong>的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">曾因为<strong className="font-medium">认证缺失、标签错误或清关问题</strong>导致货物延误或退运的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">希望在<strong className="font-medium">发货前就建立清晰责任链</strong>（谁负责售后、谁承担产品责任、谁处理退货）的企业</li>
              </ul>
            </div>

            {/* 4. 解决什么问题 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                解决什么问题
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                合规问题不会自己消失，只会变成更大的麻烦。常见场景包括：货物到港后才发现缺少某个认证、产品标签上的警告语不符合加拿大英法双语要求、客户在安装过程中受伤但责任归属不清楚、或者税务结构设置错误导致后续被追缴。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                这些问题不是"运气不好"，而是<strong className="font-medium text-[#212121]">在进入前没有系统性地梳理责任链和合规清单</strong>。这项服务的目标，是在你第一次发货前就让你知道：需要哪些认证、标签要怎么做、清关需要什么文件、以及如果出了问题谁负责。
              </p>
            </div>

            {/* 5. 我们审查/支持什么 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                我们会梳理什么 / 支持什么
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">强制性认证与标准识别</strong> — 根据产品类别，识别加拿大和美国分别需要的认证（如 CSA、UL、FCC、Health Canada 等）及获取路径</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">产品标签与包装合规审查</strong> — 检查标签内容、语言要求、警告标识、成分披露等是否符合目标市场规定</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">进口清关文件清单</strong> — 明确发货前需要准备的文件、常见的清关延误原因、以及如何与报关行配合</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">税务结构初步建议</strong> — GST/HST、关税分类、以及是否需要本地税务登记的初步判断（非税务法律意见）</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">售后责任链设计</strong> — 明确产品责任归属、售后维修/退换货流程、以及在北美本地由谁出面处理客户投诉</li>
              </ul>
            </div>

            {/* 6. 核心交付物 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                你会收到什么
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">产品合规要求清单</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">针对你的产品类别，列出加拿大和美国分别需要的认证、标准、标签要求和获取方式</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">标签与包装合规检查表</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">标签内容逐项检查清单，标注常见问题和高风险项</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">进口清关文件准备指南</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">清关所需文件清单、准备要点、常见延误原因和规避建议</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">税务结构初步方向建议</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">GST/HST 影响、关税分类、是否需要本地税务登记的基本判断（需会计师最终确认）</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">售后责任链框架文档</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">责任归属建议、售后流程设计、本地联系点安排、客户投诉处理预案</p>
                </div>
              </div>
            </div>

            {/* 7. 不替代什么 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                这项服务不替代什么
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                合规与责任链搭建是<strong className="font-medium text-[#212121]">梳理、识别和建议</strong>，不是替你完成所有合规手续。我们不代替认证机构做产品测试，不代替报关行处理清关，不代替律师出具法律意见，也不代替会计师做税务申报。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                我们的价值在于：帮你<strong className="font-medium text-[#212121]">在第一次发货前就知道缺什么、找谁补、以及按什么顺序做</strong>。具体的认证申请、测试执行、税务登记等，你需要委托对应的专业机构完成，我们可以协助你理解需求并与这些机构沟通。
              </p>
            </div>

            {/* 8. 建议下一步 */}
            <div className="mb-12 p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-3">
                合规梳理之后，通常会走向哪里
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                合规清单完成后，你会知道哪些认证必须在发货前拿到、哪些可以并行推进、以及责任链如何设计。接下来的典型路径：
              </p>
              <ul className="space-y-2 mb-4">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">• 如果清单显示<strong className="font-medium">需要 2-3 个月完成认证</strong> → 在认证推进的同时，可以并行进入 <Link to="/zh/services/customer-channel-validation" className="text-[#00A884] hover:underline">客户与渠道验证</Link></li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">• 如果合规准备度和客户验证都已经完成 → 进入 <Link to="/zh/services/local-execution-support" className="text-[#00A884] hover:underline">本地执行支持</Link> 开始实质性销售</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]">• 如果合规缺口较大、需要长期跟踪 → 建议选择 <Link to="/zh/services/advisory-retainer" className="text-[#00A884] hover:underline">顾问式长期陪跑</Link>，在认证和渠道推进过程中持续获得指导</li>
              </ul>
            </div>

            {/* 9. 常见问题 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                常见问题
              </h2>
              <div className="space-y-3 mb-10">
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">你们能直接帮我做认证吗？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">不能。我们不替代认证机构。但我们会告诉你需要什么认证、找哪家机构、准备什么资料、大概多长时间、以及常见的失败原因。如果你愿意，我们可以协助你与认证机构的前期沟通。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">合规梳理需要我提供什么？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">产品规格书、现有认证（如有）、产品照片和标签样本、目标市场的初步计划。如果你的资料不完整，我们会告诉你缺什么，并指导你如何补充。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">如果我的产品不需要特殊认证，这项服务还有价值吗？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">有价值。即使不需要特殊认证，进口清关文件、税务结构、标签语言要求和售后责任链仍然需要梳理。很多"简单产品"的问题出在标签或责任归属上。</p>
                  </div>
                </details>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 md:p-8 bg-[#212121] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">
                不要在发货后才发现合规缺口
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                一次系统性的合规梳理，能避免货物扣留、订单取消和法律风险。成本远低于一次退运的损失。
              </p>
              <Link
                to="/zh/contact"
                className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]"
              >
                预约合规与责任链梳理
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
