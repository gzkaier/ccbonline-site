import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

const checklists = [
  {
    title: '官网可信度自查清单',
    desc: '10项关键检查，快速判断你的官网是否具备让北美客户信任的基础条件。适合在申请正式诊断之前自行评估。',
    items: [
      '官网首屏是否在5秒内说清楚了"你是谁、做什么、为什么可信"',
      '是否有具体的客户案例或合作证明（而非只有"我们有丰富经验"）',
      '产品/服务描述是否以客户视角组织（而非内部功能罗列）',
      'FAQ是否覆盖了客户最常见的5-10个疑虑',
      '是否有明确的下一步行动引导（Contact、Get a Quote等）',
      '英文内容是否存在明显的语法或表达问题',
      '官网是否在移动端正常显示和操作',
      '页面加载速度是否在3秒以内',
      '是否有第三方信任信号（媒体报道、行业认证、客户评价）',
      '联系信息是否完整（邮箱、电话、地址、LinkedIn）',
    ],
  },
  {
    title: '北美市场进入准备清单',
    desc: '12项核心准备工作，帮助你在进入加拿大/北美市场前理清条件和缺口。',
    items: [
      '产品是否通过了目标市场的必要认证（CSA/UL/FCC/ISED等）',
      '是否明确了进口责任主体（IOR）安排',
      '是否有专业英文产品资料（规格书、手册、数据表）',
      '官网是否具备北美客户信任的基础条件',
      '是否了解目标市场的竞争格局和定价水平',
      '是否有明确的渠道策略（直销、代理、分销、电商）',
      '售后和保修方案是否清晰',
      '产品责任险是否已安排',
      '本地仓储和物流是否已规划',
      '是否有处理退换货和客服投诉的流程',
      '是否参加过目标市场的展会或行业活动',
      '是否有至少一个本地联系人或服务资源',
    ],
  },
  {
    title: '参展前资料准备清单',
    desc: '10项展前必备资料，帮助你最大化展会效果，避免"现场聊得不错，展后没有下文"。',
    items: [
      '一页纸英文公司介绍（One-page Company Profile）',
      '核心产品英文资料（含Features + Benefits）',
      '产品样品或演示设备',
      '名片（中英文，含QR码和官网链接）',
      '展会FAQ（准备回答的10个常见问题）',
      '展位话术和开场白（3-5个版本）',
      '客户信息收集表（结构化的询盘记录模板）',
      '展后跟进邮件模板（3个版本：高意向/一般/仅了解）',
      '展后7天跟进计划（每天具体动作）',
      'LinkedIn个人主页优化完毕（客户会搜你）',
    ],
  },
  {
    title: 'AI可见度基础检查表',
    desc: '10项GEO和SEO基础检查，判断你的官网是否容易被搜索引擎和AI系统理解和引用。',
    items: [
      '每个页面是否有且只有一个清晰的H1标题',
      '页面标题（Title Tag）是否包含核心关键词且不超过60字符',
      'Meta Description是否准确描述页面内容且不超过160字符',
      '网站是否有完整的FAQ页面（AI系统特别喜欢提取FAQ）',
      '是否使用了结构化数据标记（Schema.org的FAQPage、Service等）',
      '网站是否有XML Sitemap并提交给搜索引擎',
      '页面加载速度是否满足Core Web Vitals标准',
      '网站是否有清晰的内部链接结构',
      '公司信息在各平台是否一致（官网、LinkedIn、Google Business等）',
      '是否有第三方内容（媒体报道、行业文章）链接到你的网站',
    ],
  },
]

export default function ZHResources() {
  useSEO({
    title: '资源｜官网自查清单、市场进入准备、AI可见度检查｜CCBONLINE',
    description: '免费下载：官网可信度自查清单、北美市场进入准备清单、参展前资料准备清单、AI可见度基础检查表。帮助企业在进入北美市场前自我评估。',
    canonical: 'https://www.ccbonline.ca/zh/resources',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '资源｜官网自查清单、市场进入准备、AI可见度检查｜CCBONLINE'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#0B0E14]">
          <div className="container-site">
            <p className="text-[#00B894] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">资源</p>
            <h1 className="font-serif text-white text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              自我评估工具与准备清单
            </h1>
            <p className="text-white/60 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6">
              四份免费自查清单，帮助你在申请正式服务之前，先对自己的官网、市场准备度、展会资料和AI可见度做一个基础判断。
            </p>
          </div>
        </section>

        {/* Checklists */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[900px]">
            {checklists.map((list, idx) => (
              <div key={idx} className="mb-12 last:mb-0">
                <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-3">
                  {list.title}
                </h2>
                <p className="text-[15px] text-[#767676] leading-[1.65] mb-6">{list.desc}</p>
                <div className="bg-[#F8F9FA] border border-[#E5E5E5]">
                  {list.items.map((item, i) => (
                    <div key={i} className={`flex items-start gap-3 p-4 ${i !== list.items.length - 1 ? 'border-b border-[#E5E5E5]' : ''}`}>
                      <span className="text-[#D4AF37] text-[13px] font-medium shrink-0 mt-0.5">{String(i + 1).padStart(2, '0')}</span>
                      <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.6]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <div className="p-6 md:p-8 bg-white border border-[#E5E5E5]">
              <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-4">
                还有问题？
              </h2>
              <p className="text-[15px] text-[#444] leading-[1.65] mb-6">
                查看我们的<Link to="/zh/faq" className="text-[#00B894] hover:underline">常见问题</Link>页面，或直接<Link to="/zh/contact" className="text-[#00B894] hover:underline">联系我们</Link>预约初步沟通。
              </p>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="section-padding bg-[#0B0E14]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                自查之后，如果需要更深入的判断
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                清单是自我评估的起点。如果你发现多项不达标，可以考虑做一次正式的官网与资料快速体检（CAD 299-499），获得针对性的诊断和改进建议。
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">预约快速体检</Link>
                <Link to="/zh/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>查看全部服务</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
