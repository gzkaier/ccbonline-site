import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZH_MarketEntry() {
  useSEO({
    title: '加拿大及北美市场进入服务 | 中加商业在线 CCBONLINE INC.',
    description: '为准备进入加拿大及北美市场的中国企业提供结构化市场进入服务。可行性诊断、客户验证、合规筛查、本地执行协调与持续顾问支持。',
    canonical: 'https://www.ccbonline.ca/zh/market-entry',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '加拿大及北美市场进入服务 | 中加商业在线 CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">市场进入</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[40px] leading-[1.25] tracking-tight max-w-[860px] mb-4">
              加拿大及北美市场进入服务
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              为中国制造商和品牌提供结构化的加拿大及美国市场进入支持。从可行性评估到本地执行协调的全流程服务。
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              服务内容
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              CCBONLINE 为考虑或准备进入加拿大及北美市场的中国公司提供结构化市场进入支持。我们不销售市场准入名额，也不保证分销商关系。我们帮助您了解自身是否已做好准备、哪些事项必须提前完成、应优先进入哪个市场，以及如何协调客户开发之前的运营和合规要求。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              适合哪些企业
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">产品已具备一定竞争力、正在考虑北美市场进入的中国制造商</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">曾尝试进入北美但在合规、渠道或物流环节遭遇挫折的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">需要在投入大额认证、差旅或分销商谈判预算前进行结构化评估的管理层</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">不确定应优先进入加拿大还是美国市场的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">需要展会、仓储或本地运营协调支持的已进入市场企业</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              五大服务模块
            </h2>

            <div className="space-y-8 mb-10">
              <div className="p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C9A44C] text-[13px] font-medium">01</span>
                  <h3 className="text-[16px] md:text-[17px] font-semibold">市场进入可行性诊断</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-3">
                  在投入大额预算前进行的结构化可行性评估。我们根据北美买家期望、合规门槛和竞争现实，审查您的产品、材料和假设条件。诊断结果明确您是否已做好准备、缺口在哪里、应优先进入哪个市场。
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">产品与市场需求匹配度筛查</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">加拿大 vs. 美国优先级评估</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">合规与认证缺口识别</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">目标客户画像与渠道方向</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">0-90 天行动路线图</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C9A44C] text-[13px] font-medium">02</span>
                  <h3 className="text-[16px] md:text-[17px] font-semibold">客户与渠道验证</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-3">
                  在建立完整销售体系之前，验证您的实际买家是谁、他们的采购决策如何做出、使用哪些渠道。我们通过结构化研究和本地市场反馈，帮助您测试关于客户群体、决策流程和渠道偏好的假设。
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">加拿大和美国市场买家画像研究</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">采购决策流程映射</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">渠道路径分析 — 分销、直销、指定商或混合模式</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">竞争定位审查</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">试点推广策略</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C9A44C] text-[13px] font-medium">03</span>
                  <h3 className="text-[16px] md:text-[17px] font-semibold">合规与责任链条筛查</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-3">
                  北美市场进入涉及认证、标签、进口许可和责任分配，许多企业在这些问题上发现得太晚。我们针对您的产品类别梳理完整的合规和责任链条，让您在首批发货离港前清楚了解必须完成的事项。
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">产品认证要求（CSA、UL、cUL、FCC、Energy Star 等）</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">进口许可和海关单证要求</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">进口商责任（IOR）分配</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">标签、包装和语言要求</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">省级和联邦法规差异（加拿大）</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C9A44C] text-[13px] font-medium">04</span>
                  <h3 className="text-[16px] md:text-[17px] font-semibold">本地执行支持</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-3">
                  进入市场需要实地协调 — 展会准备、仓储洽谈、样品管理和初次客户会面。我们提供本地执行支持，帮助您管理这些运营要素，而不必过早建立完整的本地办公室。
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">展会准备和现场协调</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">仓储和第三方物流供应商评估</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">样品和演示设备物流协调</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">本地服务商介绍（法律、物流、认证）</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">初次客户会面准备和跟进支持</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C9A44C] text-[13px] font-medium">05</span>
                  <h3 className="text-[16px] md:text-[17px] font-semibold">顾问月费服务</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-3">
                  针对已进入市场、需要持续战略指导的企业。按月提供顾问支持，涵盖市场发展决策、合作伙伴评估、竞争应对规划和运营问题解决。
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">月度战略沟通会议</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">市场发展优先级评估</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">合作伙伴和分销商评估支持</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">竞争情报和应对规划</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">运营问题升级协调</li>
                </ul>
              </div>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              CCBONLINE 不替代的专业服务
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                CCBONLINE 不替代律师事务所、认证实验室、报关行、税务顾问或持牌监管专家。我们帮助您了解市场进入全景、识别关键缺口，并与合适的专业合作伙伴协调对接。我们不直接提供法律意见、认证测试、清关服务，也不保证分销商合同或销售量等特定商业结果。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              建议的起步方式
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
              大多数企业适合从市场进入可行性诊断开始。这项为期 2-4 周的结构化评估为您提供关于可行性、优先市场和后续步骤的清晰画面，然后再投入更大预算。其成本远低于一次失败的分销商关系或一批滞留在海关的货物。
            </p>
            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px] inline-block mb-10">预约咨询</Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">常见问题</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              常见问题解答
            </h2>
            <div className="space-y-3 mb-10">
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">是否必须完成全部五个模块？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">不需要。多数客户从模块一（市场进入可行性诊断）开始，然后根据诊断结果识别的优先项选择后续模块。每个模块可以独立购买。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">完整的市场进入流程需要多长时间？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">初始诊断需要 2-4 周。包括合规工作和渠道验证在内的完整市场准备通常需要 3-6 个月，具体时间取决于产品复杂度和认证要求。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">是否保证获得分销商或客户？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">不保证。我们帮助您准备、验证和协调市场进入。客户获取和分销商关系取决于您的产品竞争力、定价和市场时机。我们提高您的准备度，减少可避免的错误。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">能否帮助决定先进入加拿大还是美国？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">可以。市场进入可行性诊断包含结构化的加拿大 vs. 美国优先级评估，基于您的产品类别、合规门槛、渠道可用性和竞争格局提供建议及支持性理由。</p>
                </div>
              </details>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              相关页面
            </h2>
            <ul className="space-y-2 mb-8">
              <li><Link to="/zh/services" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">全部服务</Link></li>
              <li><Link to="/zh/brand-credibility" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">品牌可信度与数字基础设施评估</Link></li>
              <li><Link to="/zh/insights/bei-mei-shi-chang-jin-ru-bu-shi-mai-huo" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">市场进入不等于卖货</Link></li>
              <li><Link to="/zh/insights/0-90-tian-bei-mei-shi-chang-jin-ru-lu-jing" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">北美市场进入 0-90 天路线图</Link></li>
              <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">联系 CCBONLINE</Link></li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
  正在考虑进入加拿大或北美市场？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                从初步咨询开始。我们将评估您的现状、关键问题，以及结构化市场进入诊断是否适合作为下一步。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">预约咨询</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
