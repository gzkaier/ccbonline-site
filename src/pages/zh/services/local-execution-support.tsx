import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function ZH_local_execution_support() {
  useEffect(() => {
    document.title = '加拿大与北美本地承接支持 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">本地承接</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              加拿大与北美本地承接支持
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              协调北美进入中的本地承接环节，包括进口路径、物流、仓储、履约、退货、备件、售后和本地合作资源沟通。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-10">
              <img
                src="/images/services-local-execution-support.jpg"
                alt="CCBONLINE 帮助中国企业进入北美市场 — 加拿大与北美本地承接支持。"
                className="w-full h-auto max-h-[400px] object-cover"
                loading="lazy"
              />
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              适合哪些企业
            </h2>
            <ul className="space-y-3 mb-10">
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">已验证客户兴趣并需要建立本地运营基础设施的企业</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">已有首笔订单但不知道如何合规地将产品运入加拿大或美国的企业</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">需要协调中国总部与北美物流或服务合作伙伴的团队</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">准备试点发布并需要小规模本地执行方案的企业</li>

            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              解决什么问题
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              进入北美不只是把货发过去。企业必须明确谁来收货、谁处理进口责任、谁管理库存、谁支持退货、以及出问题时谁来响应。这项服务设计并协调回答这些问题的运营基础设施。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              我们会看什么 / 支持什么
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              CCBONLINE 协调您的进口路径设计，明确进口记录责任人角色和替代方案，根据您的体积和产品类型匹配仓储和第三方物流选项，设计退货和换货流程工作流，规划备件就绪和售后响应能力，并支持与本地运营合作伙伴的持续沟通。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              交付内容
            </h2>
            <ul className="space-y-3 mb-10">
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">进口路径协调</strong> — 进口路线、海关策略和文件交接的设计</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">进口记录责任人角色说明</strong> — 谁担任进口记录责任人及其责任的清晰定义</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">仓储与 3PL 资源协调</strong> — 匹配适合您产品的本地仓储和物流合作伙伴</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">退货与换货流程建议</strong> — 处理退货、缺陷和换货的工作流设计</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">备件承接方案设计</strong> — 在北美维持备件可用性的计划</li>
            <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65]"><strong className="font-medium">本地合作资源沟通支持</strong> — 您的团队与北美运营合作伙伴之间的持续协调</li>

            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              不替代什么
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                CCBONLINE 不是报关行、货运代理、仓储公司或物流服务提供商。我们不拥有仓库、运营卡车或清关。我们与持证专业人士和服务提供商协调，设计和管理您的本地执行计划。进口、运输和存储服务由第三方合作伙伴根据其自身许可证和合同提供。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              推荐下一步
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
              预约本地承接评估，审查您的产品体积、目标交付时间表和当前物流安排。我们将识别首笔北美发货前需要到位的运营基础设施。
            </p>
            <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px] inline-block mb-10">预约初步沟通</Link>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">常见问题</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              经常被问到的问题
            </h2>
            <div className="space-y-3 mb-10">
            <details className="border border-[#E5E5E5] bg-white">
              <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">你们在加拿大运营仓库吗？</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="px-4 pb-4 md:px-5 md:pb-5">
                <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">不。我们与第三方仓储和物流合作伙伴协调。我们帮助您选择和管理关系，但存储和履约由持证运营商提供。</p>
              </div>
            </details>
            <details className="border border-[#E5E5E5] bg-white">
              <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">你们能处理清关吗？</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="px-4 pb-4 md:px-5 md:pb-5">
                <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">不。清关由持证报关行执行。我们协调您的团队、报关行和货运代理之间的交接。</p>
              </div>
            </details>
            <details className="border border-[#E5E5E5] bg-white">
              <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">如果我们的起步体积很小呢？</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="px-4 pb-4 md:px-5 md:pb-5">
                <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">我们设计随体积扩展的执行方案。很多企业从小规模试点安排开始，随销售增长而扩展。</p>
              </div>
            </details>
            <details className="border border-[#E5E5E5] bg-white">
              <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">这包含售后服务人员吗？</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="px-4 pb-4 md:px-5 md:pb-5">
                <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">我们设计售后流程并与本地服务合作伙伴协调。如果您需要专职人员，我们可以就招聘或外包选项提供建议。</p>
              </div>
            </details>

            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              相关阅读
            </h2>
            <ul className="space-y-2 mb-8">
          <li><Link to="/zh/services" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">全部服务</Link></li>
          <li><Link to="/zh/canada-market-entry" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">加拿大市场进入</Link></li>
          <li><Link to="/zh/insights/jia-na-da-ke-yi-shi-bei-mei-di-yi-zhan" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">加拿大可以成为北美市场进入的第一站</Link></li>
          <li><Link to="/zh/insights/ior-bu-shi-dai-qing-guan" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">进口记录责任人不是代清关的人</Link></li>
          <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">联系 CCBONLINE</Link></li>

            </ul>
          </div>
        </section>

        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                想了解更多关于本地承接的内容？
              </h2>
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">预约初步沟通</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
