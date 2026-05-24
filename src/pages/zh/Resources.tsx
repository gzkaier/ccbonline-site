import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

const checklists = [
  { title: '加拿大市场进入准备清单', desc: '涵盖产品、文档、合规和渠道准备度的结构化自评清单。', status: '即将推出' },
  { title: '出海企业网站可信度检查清单', desc: '北美买家在评估供应商网站时关注的关键要素。', status: '即将推出' },
  { title: '展会跟进清单', desc: '如何将展会线索转化为结构化跟进和真实商机。', status: '即将推出' },
  { title: '进口责任与 IOR 基础说明', desc: '进口记录主体（Importer of Record）是什么、为什么重要、如何安排。', status: '已上线', link: '/zh/topics/importer-of-record-and-responsibility-chain' },
  { title: '英文产品文档清单', desc: '北美分销商和买家期望看到哪些文档。', status: '即将推出' },
  { title: '服务商网站展示清单', desc: '本地服务商应如何在线上向北美客户展示专业能力。', status: '即将推出' },
]

const caseNotes = [
  { title: '帮助中国设备供应商理清加拿大进入路径', desc: '一家在国内有成熟销售的工业设备制造商，希望了解其产品类别在加拿大是否可行，以及需要先补齐哪些认证缺口。', industry: '工业设备' },
  { title: '为本地专业服务提供商审查英文网站呈现', desc: '一家服务华人企业的加拿大会计事务所，需要重新组织网站和服务描述，让英文客户能够理解其服务并信任其专业能力。', industry: '专业服务' },
  { title: '支持出口企业的展会后跟进', desc: '一家消费电子公司在多伦多展会收集了80多条线索，但没有跟进系统。我们帮助建立结构化外联流程、调整材料并协调本地跟进。', industry: '消费电子' },
  { title: '出货前梳理认证和责任链问题', desc: '一家建材供应商准备发货，但尚未明确 CCMC（加拿大建筑材料中心）评估要求、IOR（进口记录主体）安排和省级建筑规范合规。我们在第一个集装箱离港前梳理了完整的责任链。', industry: '建材' },
]

const insights = [
  { title: '北美市场进入：不只是卖货', slug: 'bei-mei-shi-chang-jin-ru-bu-shi-mai-huo' },
  { title: '责任链：出口与市场进入的分水岭', slug: 'bei-mei-shi-chang-jin-ru-ze-ren-lian' },
  { title: 'IOR 不只是海关手续', slug: 'ior-bu-shi-dai-qing-guan' },
  { title: '为什么产品认证要在发货前完成', slug: 'ren-zheng-bu-shi-zhong-dian' },
  { title: '加拿大：进入北美的第一步', slug: 'jia-na-da-ke-yi-shi-bei-mei-di-yi-zhan' },
]

export default function ZHResources() {
  useSEO({
    title: '市场进入资源、清单与案例 | 中加商业在线 CCBONLINE INC.',
    description: '下载市场进入清单、阅读项目案例、探索行业洞察，帮助你的企业评估进入加拿大和北美的准备度。',
    canonical: 'https://www.ccbonline.ca/zh/resources',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '市场进入资源、清单与案例 | 中加商业在线 CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">资源</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              市场进入资料
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[680px]">
              实用的清单、项目案例和行业洞察，帮助你在全面投入之前评估自己的准备度。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">清单</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              可下载的市场进入清单
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {checklists.map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] text-[#999] uppercase tracking-wider">{item.status}</span>
                  </div>
                  <h3 className="text-[15px] font-semibold mb-2 leading-[1.4]">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6] mb-3">{item.desc}</p>
                  {item.link && <Link to={item.link} className="text-[13px] text-[#00A884] hover:underline">立即阅读 &rarr;</Link>}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">项目案例</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              匿名项目笔记
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px] mb-8">
              真实的项目场景，客户名称和敏感数据已移除。这些案例说明了我们帮助企业应对的挑战类型。
            </p>
            <div className="space-y-4">
              {caseNotes.map((item, i) => (
                <div key={i} className="p-5 md:p-6 bg-white border border-[#E5E5E5]">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] text-[#00A884] uppercase tracking-wider">{item.industry}</span>
                  </div>
                  <h3 className="text-[16px] md:text-[17px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">洞察</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              行业洞察
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {insights.map((item, i) => (
                <Link key={i} to={`/zh/insights/${item.slug}`} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5] hover:border-[#00A884] transition-colors group">
                  <h3 className="text-[15px] font-semibold mb-2 group-hover:text-[#00A884] transition-colors">{item.title}</h3>
                  <span className="text-[13px] text-[#00A884]">阅读文章 &rarr;</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                需要特定清单或有资源请求？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                告诉我们什么能帮助你的团队评估市场进入准备度。我们根据企业最常问的问题持续添加资源。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[16px] px-6 py-3.5 min-h-[52px]">提交资源请求</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
