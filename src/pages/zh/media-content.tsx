import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZH_MediaContent() {
  useSEO({
    title: '媒体报道、商业曝光与内容合作 | 中加商业在线 CCBONLINE INC.',
    description: '商业媒体曝光、行业内容合作和专业商业人物报道，帮助中国企业在加拿大和北美商业社区建立可见、可信的专业形象。',
    canonical: 'https://www.ccbonline.ca/zh/media-content',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '媒体报道、商业曝光与内容合作 | 中加商业在线 CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">媒体与内容</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[40px] leading-[1.25] tracking-tight max-w-[860px] mb-4">
              媒体报道、商业曝光与内容合作
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              行业媒体曝光、专业商业人物报道和内容合作 —— 帮助中国企业在加拿大和北美商业社区建立可见、可信的专业存在。
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
              一项商业曝光服务，通过媒体风格的内容、行业人物报道和战略性商业 形象塑造，帮助中国企业在加拿大和北美市场建立专业可见度。我们不替代公关公司或广告公司。我们通过商业媒体渠道、行业出版物和专业网络平台 —— 北美买家和合作伙伴已经在场的地方 —— 创建和协调曝光机会。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              适合哪些企业
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">已进入或正准备进入北美市场、需要专业可见度的中国制造商和品牌</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">拥有真实能力、认证或市场成就，但在英文中记录不足的企业</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">准备参加展会、行业活动或商务考察的管理层，媒体露出支持可信度建设</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]">希望通过专业内容和行业认可与竞争对手差异化的企业</li>
            </ul>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              四大服务板块
            </h2>

            <div className="space-y-6 mb-10">
              <div className="p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C9A44C] text-[13px] font-medium">01</span>
                  <h3 className="text-[16px] md:text-[17px] font-semibold">专业商业人物报道</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-3">
                  媒体风格的公司简介、高管访谈和能力文章，向北美受众专业地呈现您的企业。这些不是广告 —— 是通过实质内容和专业呈现传达可信度的商业新闻风格特稿。
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">适合行业出版物发布的公司简介文章</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">高管访谈和领导力特写</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">市场进入成果的案例记录</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">行业评论和思想领导力内容</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C9A44C] text-[13px] font-medium">02</span>
                  <h3 className="text-[16px] md:text-[17px] font-semibold">媒体曝光协调</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-3">
                  通过行业出版物、商业平台和专业网络协调商业媒体曝光。我们识别合适的渠道、准备内容并管理发布流程。编辑决策由各媒体机构独立做出。
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">行业出版物特写协调</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">商业平台档案开发</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">LinkedIn 和专业网络内容策略</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">展会和活动报道协调</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C9A44C] text-[13px] font-medium">03</span>
                  <h3 className="text-[16px] md:text-[17px] font-semibold">内容合作</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-3">
                  将您的专业能力展示在北美商业受众面前的协作内容项目。包括联合开发的行业报告、市场洞察文章和教育内容，以展示知识而非直接推广。
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">行业洞察文章和市场评论</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">与商业媒体伙伴联合开发的内容</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">展示专业知识的教育内容</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">活动回顾和行业分析文章</li>
                </ul>
              </div>

              <div className="p-5 md:p-6 border border-[#E5E5E5] bg-[#F8F9FA]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#C9A44C] text-[13px] font-medium">04</span>
                  <h3 className="text-[16px] md:text-[17px] font-semibold">活动与演讲支持</h3>
                </div>
                <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7] mb-3">
                  为展会、行业会议、商务考察和企业活动提供内容和协调支持，专业呈现直接影响可信度和成果。
                </p>
                <ul className="space-y-2">
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">演讲材料开发和审查</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">高管讲话要点和演讲稿准备</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">现场活动协调和跟进</li>
                  <li className="text-[13px] text-[#555] leading-[1.6] pl-3 border-l border-[#00A884]">活动后内容和关系维护</li>
                </ul>
              </div>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              CCBONLINE 不保证的事项
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-3">
                我们不保证特定的媒体刊登位置、文章发布或受众覆盖指标。编辑决策由媒体和出版机构独立做出。我们不从事付费广告、赞助内容投放或受众购买。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                我们保证的是专业内容质量、合适的渠道定位和勤勉的协调努力。是否刊登或特写的决定权在各媒体合作伙伴。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              交付成果
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium">专业公司简介或高管访谈文章</strong> —— 可发布的特稿内容</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium">媒体曝光协调计划</strong> —— 目标渠道和时间线</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium">内容合作提案</strong> —— 已识别的行业内容合作机会</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium">活动内容包</strong> —— 演讲稿、讲话要点和跟进材料</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#00A884]"><strong className="font-medium">专业摄影指导</strong> —— 高管肖像、工厂照片和产品影像的建议，符合出版标准</li>
            </ul>

            <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px] inline-block">讨论媒体与内容服务</Link>
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
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">你们与哪些出版物或媒体合作？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">我们与行业相关的贸易出版物、商业媒体平台和专业网络协调。我们不与任何单一媒体维持独家合作关系。合适的渠道根据您的行业和目标受众来选择。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">获得媒体曝光需要多长时间？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">内容准备通常需要 2-3 周。发布时间表因媒体而异 —— 有些在几天内发布，其他有 1-3 个月的编辑排期。我们协调时间安排并为每个渠道设定现实期望。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">能否帮助展会的媒体报道？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">可以。我们为展会参与提供展前内容、现场协调和展后跟进内容，包括活动回顾和潜在客户维护材料。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">这是一次性服务还是持续的？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">两者皆可。有些客户需要针对特定市场进入或活动的一次性人物报道。其他客户随着北美业务的发展偏好持续的内容支持。我们根据您的阶段和目标来设计合作方式。</p>
                </div>
              </details>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              相关服务
            </h2>
            <ul className="space-y-2">
              <li><Link to="/zh/brand-credibility" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">品牌可信度与数字基础设施诊断</Link></li>
              <li><Link to="/zh/website-content" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">中英双语官网与商业内容优化</Link></li>
              <li><Link to="/zh/market-entry" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">加拿大及北美市场进入服务</Link></li>
              <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#00A884] hover:underline">联系 CCBONLINE</Link></li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                正在北美建立专业可见度？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                告诉我们您的行业、市场阶段和可见度目标。我们将评估适合您情况的媒体和内容方案。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">讨论媒体与内容服务</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
