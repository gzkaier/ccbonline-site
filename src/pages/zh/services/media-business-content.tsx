import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_MediaBusinessContent() {
  useSEO({
    title: '媒体报道与商业内容服务 | 中加商业在线 CCBONLINE INC.',
    description: '帮助中国企业进行品牌定位、中英文内容适配、媒体化公司 profile 和商业曝光协调，有效触达北美商业受众。',
    canonical: 'https://www.ccbonline.ca/zh/services/media-business-content',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '媒体报道与商业内容服务 | 中加商业在线 CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">内容传播</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              媒体报道与商业内容服务
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              品牌定位、中英文内容适配、媒体化公司 profile 和商业曝光协调——让你能有效触达北美商业受众，而不只是翻译文字。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            {/* 服务定义 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                这是什么服务
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                一项内容传播支持服务，帮助中国企业以北美商业受众能够理解和信任的方式，呈现自身的能力、成就和价值主张。我们不替代你的市场团队或公关代理。我们弥合的是文化语境差距——中国企业的典型表达方式，和北美买家、媒体和合作伙伴期望看到的内容之间的差异。
              </p>
            </div>

            {/* 适合谁 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                适合哪些企业
              </h2>
              <ul className="space-y-3">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">需要在北美建立品牌认知度和可信度的中国企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">准备参加展会、行业活动或商务考察，需要专业呈现的企业</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">希望在加拿大或北美商业媒体获得报道或企业 profile 的公司</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">英文公司介绍、案例或成功故事没有有效传达自身能力的领导层</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">需要将中文营销材料适配给英语决策者，同时不丢失核心信息的企业</li>
              </ul>
            </div>

            {/* 解决什么问题 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                解决什么问题
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                很多中国企业拥有令人印象深刻的产品、大规模的制造能力和显著的国内成就——但当他们把这些材料翻译成英文给北美受众时，信息就平淡了。技术规格被翻译了，但价值主张没有传递。公司历史被列出了，但可信度信号丢失了。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                问题不是翻译质量。问题出在语境适配：理解北美商业受众需要听到什么、看到什么、验证什么，才会愿意与一个新的供应商或合作伙伴接触。
              </p>
            </div>

            {/* 具体做什么 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                我们具体做什么
              </h2>
              <ul className="space-y-4">
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">品牌定位评估</strong> — 评估你的公司、产品和能力在北美受众中的定位方式，提出更清晰的价值传达建议</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">中英文内容适配</strong> — 不是直译，而是语境适配：公司介绍、产品介绍、案例和高层摘要，适配北美商业读者的阅读习惯</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">媒体化公司 Profile 和文章</strong> — 撰写适合商业媒体、行业出版物和合作伙伴分发的专业公司 profile、高管访谈和行业文章</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">商业曝光协调</strong> — 规划和协调商业曝光机会，包括行业活动、企业专访和商业社交</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">展会和演讲材料</strong> — 展会演讲、Pitch Deck、高管演讲稿和合作伙伴会议材料</li>
                <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium text-[#212121]">传播材料改进</strong> — 现有英文营销和传播材料的结构化评审和优先改进计划</li>
              </ul>
            </div>

            {/* 交付物 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                你会收到什么
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">定位评估报告</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">当前定位评估和针对北美市场对齐的具体建议</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">适配版公司介绍</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">有效传达你能力、规模和价值的英文专业公司介绍</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">媒体化文章或高管访谈</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">适合商业媒体、行业出版物或合作伙伴分发的专业文章</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">商业曝光计划</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">行业活动、媒体专访和社交机会的协调计划</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[14px] font-medium text-[#212121] mb-1">传播材料改进意见</p>
                  <p className="text-[13px] text-[#666] leading-[1.6]">现有营销和传播材料的优先改进清单</p>
                </div>
              </div>
            </div>

            {/* 边界 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                这项服务不替代什么
              </h2>
              <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0]">
                <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                  中加商业在线不替代广告代理、公关公司或市场部门。我们不保证媒体刊登、广告效果或特定受众触达。我们提供内容开发、适配和协调支持。媒体关系和出版决定由各自媒体机构决定。广告投放和媒体购买建议与专业代理合作。
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                常见问题
              </h2>
              <div className="space-y-3">
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">你们能安排什么样的媒体曝光？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">我们通过行业关系网络、活动资源和商业媒体渠道协调商业曝光机会。但不保证具体媒体刊登或报道。编辑决定由各自出版机构做出。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">你们怎么把中文内容适配给西方受众？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">我们聚焦语境适配，不是字面翻译。这意味着按照西方商业沟通惯例重构内容，突出北美读者关注的可信度信号，用目标受众能理解的方式重新组织成就表述。我们与你协作确保准确性，同时提升影响力。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">能帮做展会演讲材料吗？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">可以。我们帮助准备展会演讲材料、高管 talking points、产品介绍和后续沟通模板。在加拿大和美国展会上，我们也可以在本地提供现场协调支持。</p>
                  </div>
                </details>
                <details className="border border-[#E5E5E5] bg-white">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">这是一次性服务还是持续支持？</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">都可以。有的客户需要为特定活动或发布做一次性内容包。有的希望在北美业务发展过程中获得持续支持。我们根据你的需求和阶段来设计合作方式。</p>
                  </div>
                </details>
              </div>
            </div>

            {/* 相关页面 */}
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                相关服务
              </h2>
              <ul className="space-y-2">
                <li><Link to="/zh/services" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">全部服务</Link></li>
                <li><Link to="/zh/services/website-content-for-service-providers" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">网站与商业内容诊断</Link></li>
                <li><Link to="/zh/services/market-entry-diagnosis" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">市场进入诊断</Link></li>
                <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">联系中加商业在线</Link></li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                需要向北美受众传达你的企业能力？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                告诉我们你现有的材料、目标受众和传播目标。我们会评估内容媒体支持是否适合你。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">咨询内容与媒体服务</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
