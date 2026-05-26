import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHHome() {
  useSEO({
    title: '中加商业在线｜加拿大、北美与中国市场之间的商业连接服务',
    description: '中加商业在线 CCBONLINE INC. 位于加拿大，提供市场进入、品牌可信度、双语官网内容、中加商业连接、供应链协作和媒体内容合作服务，帮助企业在加拿大、北美与中国市场之间建立可信连接。',
    canonical: 'https://www.ccbonline.ca/zh',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '中加商业在线｜加拿大、北美与中国市场之间的商业连接服务'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* ===== 1. Hero ===== */}
        <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/canada-north-america-market-entry-consulting.jpg"
              alt="中加商业在线帮助企业在加拿大、北美与中国市场之间建立可信连接"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/85 to-[#07111F]/50" />
          <div className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5 font-medium">
              加拿大注册公司 · 多伦多本地运营 · 中英双语
            </p>
            <h1 className="font-serif text-white text-[24px] sm:text-[28px] md:text-[38px] lg:text-[44px] leading-[1.3] tracking-tight max-w-[900px] mb-4 md:mb-6">
              让企业在加拿大、北美与中国市场之间，建立可信连接
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6 md:mb-8">
              中加商业在线 CCBONLINE INC. 位于加拿大，提供市场进入、本地化落地、品牌可信度、双语内容、官网优化、供应链协作和商业媒体连接服务。我们帮助企业把产品、服务和合作机会说清楚、放对位置、找到更稳的推进路径。我们服务中国企业进入北美市场，也服务加拿大企业连接中国市场；服务本地创业者建立数字可信度，也服务采购商对接中国供应链。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6">
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">预约咨询</Link>
              <Link to="/zh/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>了解服务</Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/40">
              <span>市场进入</span>
              <span>·</span>
              <span>品牌可信度</span>
              <span>·</span>
              <span>商业连接</span>
              <span>·</span>
              <span>媒体与内容</span>
            </div>
          </div>
        </section>

        {/* ===== 2. Five Core Services ===== */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">服务</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              五项核心服务
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-10">
              我们帮助企业在加拿大、北美和中国市场之间更有效地运营——无论你是进入新市场、建立本地可信度，还是连接合作伙伴和供应商。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { num: '01', title: '市场进入与本地化落地', desc: '面向进入北美的中国制造企业和希望连接中国市场的加拿大企业。我们评估准备度、梳理合规与认证路径、明确进口责任（IOR）、协调本地执行——让你带着计划进入，而不是只靠希望。', link: '/zh/market-entry' },
                { num: '02', title: '品牌可信度与数字基础设施', desc: '面向加拿大本地企业、移民创业者和服务商。我们诊断网站可信度、商业内容、信任信号和本地可发现性——帮助你在买家、合作伙伴和搜索引擎面前呈现专业形象。', link: '/zh/brand-credibility' },
                { num: '03', title: '中英双语官网与内容优化', desc: '面向需要用中英双语沟通的企业——网站、产品资料、服务描述和商业内容。我们针对人类读者和 AI 搜索（GEO）进行优化，确保你的信息以正确的语言触达正确的受众。', link: '/zh/website-content' },
                { num: '04', title: '中加商业连接与供应链协作', desc: '面向北美采购商、亚马逊卖家、零售商和工程采购方，以及寻求可靠北美合作伙伴的中国供应商。我们帮助评估供应商、澄清沟通、建立跨境工作关系。', link: '/zh/business-connection' },
                { num: '05', title: '媒体报道与内容合作', desc: '面向企业、活动方、协会和服务商，希望在华人商业社区中获得曝光。我们协调媒体报道、双语内容、活动推广和资源连接。', link: '/zh/media-content' },
              ].map((item) => (
                <div key={item.num} className="p-6 border border-white/10 hover:border-[#00A884]/50 transition-colors">
                  <p className="text-[#C9A44C] text-[13px] font-medium mb-3">{item.num}</p>
                  <h3 className="text-white text-[17px] md:text-[18px] font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/60 text-[14px] leading-[1.65] mb-4">{item.desc}</p>
                  <Link to={item.link} className="text-[13px] font-medium text-[#00A884] hover:underline">了解更多 →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 3. Who We Work With ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">服务对象</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              跨市场运营的企业与个人
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              我们服务有真实产品、服务能力或市场意向的企业——愿意通过务实的方式建立跨境运营，而不是寻找捷径。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: '中国制造企业与出口品牌', desc: '有成熟产能、正在进入加拿大及北美市场的企业——需要诊断、合规、IOR 和本地协调。' },
                { title: '加拿大企业连接中国市场', desc: '希望接触中国市场、中国供应商或中国客户的加拿大公司、品牌和服务商。' },
                { title: '本地创业者与服务商', desc: '在加拿大建立业务的移民创业者、中小企业和专业服务商——需要建立数字可信度和本地存在感。' },
                { title: '北美采购商与零售商', desc: '亚马逊卖家、零售商、采购团队和品牌方——寻找中国供应链的可靠连接。' },
                { title: '活动方与协会', desc: '展会、商业协会和服务平台——希望在华人商业社区中获得曝光和资源连接。' },
                { title: '跨境服务商', desc: '物流、法律、会计、保险和咨询公司——服务华人商业走廊。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 4. Common Challenges ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">常见挑战</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              双向市场中我们看到的缺口
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {[
                { title: '中国企业有好产品，但北美买家找不到、信不过', desc: '产品本身不错，但英文资料弱、认证状态不清、没有本地存在——买家选择了更容易接触的竞争对手。' },
                { title: '加拿大企业想进中国市场，但缺双语内容和本地认知', desc: '网站和营销材料只有英文，没有中文产品介绍，不了解中国买家如何做研究和决策。' },
                { title: '本地移民创业者在新市场难以建立数字可信度', desc: '专业服务不错、产品很好，但网站看起来不专业、服务描述不清、缺少加拿大客户期望的信任信号。' },
                { title: '北美采购商无法有效验证中国供应商', desc: '从阿里巴巴或展会采购，但缺乏适当验证，导致质量问题、沟通障碍和交货不可靠。' },
                { title: '活动方缺乏触达华人商业受众的渠道', desc: '商业活动、研讨会和服务难以连接到华人创业和专业社区。' },
                { title: '企业在基础没打好的情况下花钱做营销', desc: '广告、展会和推广带来了流量——但网站、内容和跟进流程还没准备好把兴趣转化为业务。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border-l-2 border-[#C9A44C] border border-[#E5E5E5]">
                  <h3 className="text-[15px] font-semibold mb-2 leading-[1.5]">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 5. Why CCBONLINE ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">为什么选中加商业在线</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              一家了解两个市场的加拿大本地团队
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: '加拿大本地注册', desc: '在大多伦多地区注册的实体公司，有真实的本地存在和运营能力。我们每天都在加拿大商业环境中工作。' },
                { title: '中英双语沟通', desc: '流利的中英文能力，弥合市场之间的文化和商业实践差距。帮助你在两边与合作伙伴、买家和监管机构清晰沟通。' },
                { title: '先判断再执行', desc: '我们评估你是否应该推进，而不只是告诉你怎么做。一个诚实的"暂时不建议"比有缺陷的执行计划更有价值。' },
                { title: '数字 + 商业能力', desc: '我们理解企业如何数字展示自己，买家期望看到什么。我们弥合你的能力和你的线上形象之间的差距。' },
                { title: '务实协调', desc: '周度跟进、合作伙伴协调、任务清单和持续推进。我们帮助项目往前走，而不只是产出报告。' },
                { title: '双向服务', desc: '我们与双向的企业合作——中国到北美，北美到中国——这给了单向顾问所缺乏的视角。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 6. How We Work ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">工作流程</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              我们的工作方式
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: '01', title: '诊断', desc: '评估你当前的状态：产品、市场、资料、数字存在和关键缺口。给你一个诚实的评估——什么准备好了，什么需要注意。' },
                { step: '02', title: '规划', desc: '绘制实用的前进路径：采取哪些行动、按什么顺序、需要什么资源、什么时间线。没有通用模板——针对你的具体情况。' },
                { step: '03', title: '协调', desc: '我们与你的团队和本地合作伙伴一起执行计划——内容、网站、合规、供应商沟通或活动协调。' },
                { step: '04', title: '跟踪', desc: '通过定期沟通、任务清单和进度审查保持项目推进——确保工作完成，而不只是计划。' },
              ].map((item) => (
                <div key={item.step} className="p-5 bg-white border border-[#E5E5E5]">
                  <p className="text-[#C9A44C] text-[13px] font-medium mb-3">{item.step}</p>
                  <h3 className="text-[17px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 7. Boundary Note ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <div className="max-w-[800px] p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3">服务边界</h3>
              <p className="text-[14px] text-[#767676] leading-[1.65] mb-3">
                中加商业在线 CCBONLINE INC. 提供商业顾问、协调、内容和市场进入支持。我们不是律师事务所、会计师事务所、认证机构、保险经纪公司、报关行或物流公司。
              </p>
              <p className="text-[14px] text-[#767676] leading-[1.65]">
                当需要正式的专业意见——法律、税务、认证、保险或报关——我们帮助你准备正确的问题、整理材料并对接合格的专业人员。我们协调；他们执行。
              </p>
            </div>
          </div>
        </section>

        {/* ===== 8. Final CTA ===== */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                准备加强你的跨境业务存在？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                告诉我们你现在的阶段、手中的产品和主要的障碍。我们会直接且诚实地推荐下一步该做什么。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">预约咨询</Link>
              <p className="text-white/40 text-[13px] mt-4">info@ccbonline.ca · +1 647 568 1128 · 84 Kenhar Dr, North York, ON M9L 1N2</p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
