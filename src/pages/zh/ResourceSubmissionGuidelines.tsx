import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHResourceSubmissionGuidelines() {
  useSEO({
    title: '资源发布与合作信息说明｜中加商业在线 CCBONLINE INC.',
    description: '中加商业在线欢迎企业、服务商、机构和个人顾问提交真实、清楚、可核验的商业资源、服务介绍、活动信息和合作机会。本说明用于帮助发布方了解基础信息建议、适用范围和隐私边界。',
    canonical: 'https://www.ccbonline.ca/zh/resource-submission-guidelines',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '资源发布与合作信息说明｜中加商业在线 CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">信息透明说明</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[32px] md:text-[40px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              资源发布与合作信息说明
            </h1>
            <p className="text-[16px] md:text-[17px] text-[#767676] max-w-[720px]">
              为了提高信息透明度，减少误解，也方便企业和服务商之间建立初步信任，建议发布方尽量提供可核验的基础信息。
            </p>
          </div>
        </section>

        {/* 引言 */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] mb-4">
              中加商业在线 / CCBONLINE INC. 是面向中国企业、加拿大及北美本地服务商、渠道方、机构和商业合作伙伴的信息与资源连接平台。
            </p>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] mb-4">
              我们欢迎企业、机构、服务商和个人顾问通过中加商业在线的社群、服务号、网站、视频号、线下活动及其他渠道，发布有价值的商业资源、服务介绍、活动信息、招商合作和项目对接需求。
            </p>
            <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
              <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.7]">
                本说明不构成强制认证，也不代表中加商业在线对所有发布信息进行背书。我们鼓励真实、清楚、可核验的商业交流，并会根据平台定位、信息质量和相关性，决定是否发布、整理、转发或推荐相关内容。
              </p>
            </div>
          </div>
        </section>

        {/* 适用范围 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">
              一、适用范围
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] mb-4">
              本说明适用于以下类型的信息发布：
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                '服务介绍',
                '招商合作',
                '展会活动',
                '项目对接',
                '培训课程',
                '渠道合作',
                '本地服务资源',
                '媒体与推广合作',
                '供应链、物流、认证、清关、仓储、法律、金融、保险、税务等专业服务信息',
                '与中国企业进入加拿大、美国及北美市场相关的其他商业资源',
              ].map((item, i) => (
                <li key={i} className="text-[14px] text-[#444] leading-[1.6] pl-3 border-l-2 border-[#00A884]">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 国内企业 */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">
              二、中国国内企业或机构建议提供的信息
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] mb-4">
              如发布方为中国国内企业、机构或团队，建议提供以下基础信息：
            </p>
            <ul className="space-y-2">
              {[
                '企业主体名称',
                '官方网站或主要对外页面',
                '公众号、视频号、LinkedIn（领英）或其他公开渠道',
                '如使用中国境内网站，可提供 ICP 备案（中国大陆网站备案）信息',
                '联系人姓名、所在城市、职务或服务方向',
                '服务范围、过往案例、活动资料或合作介绍',
                '如涉及特定资质要求，可说明相关资质、牌照、授权或合作主体',
              ].map((item, i) => (
                <li key={i} className="text-[14px] text-[#444] leading-[1.6] pl-3 border-l-2 border-[#00A884]">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 加拿大公司 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">
              三、加拿大公司建议提供的信息
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] mb-4">
              如发布方为加拿大公司、机构或团队，建议提供以下基础信息：
            </p>
            <ul className="space-y-2">
              {[
                '公司注册名称',
                '所在省份或城市',
                '官方网站或公司邮箱',
                'LinkedIn（领英）、Google Business Profile（Google 商家资料）或其他公开页面',
                '服务范围、客户类型、过往案例或项目经验',
                '如涉及清关、物流、仓储、认证、法律、金融、保险、地产等专业服务，可说明相关资质、牌照、合作主体或服务边界',
              ].map((item, i) => (
                <li key={i} className="text-[14px] text-[#444] leading-[1.6] pl-3 border-l-2 border-[#00A884]">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 美国公司 */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">
              四、美国公司建议提供的信息
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] mb-4">
              如发布方为美国公司、机构或团队，建议提供以下基础信息：
            </p>
            <ul className="space-y-2">
              {[
                '公司注册名称',
                '注册州或主要运营地区',
                '官方网站或公司邮箱',
                'LinkedIn（领英）、Google Business Profile（Google 商家资料）或其他公开页面',
                '服务范围、客户类型、过往案例或项目经验',
                '如涉及清关、物流、仓储、认证、法律、金融、保险、税务等专业服务，可说明相关资质、牌照、合作主体或服务边界',
              ].map((item, i) => (
                <li key={i} className="text-[14px] text-[#444] leading-[1.6] pl-3 border-l-2 border-[#00A884]">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 个人服务者 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">
              五、个人服务者或自由顾问建议提供的信息
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] mb-4">
              中加商业在线也欢迎个人服务者、自由顾问、行业专家和本地资源方参与交流。建议提供以下信息：
            </p>
            <ul className="space-y-2">
              {[
                '真实姓名',
                '所在城市',
                '专业方向',
                '过往经验',
                '公开主页、LinkedIn（领英）、作品、案例或其他可核验资料',
                '当前可提供的服务范围和合作方式',
              ].map((item, i) => (
                <li key={i} className="text-[14px] text-[#444] leading-[1.6] pl-3 border-l-2 border-[#00A884]">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 不建议发布 */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">
              六、不建议公开发布的信息
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] mb-4">
              为保护个人隐私、企业信息安全和合作双方利益，不建议在公开社群或公开页面发布以下内容：
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {[
                '个人证件号码',
                '个人税号或社会保险号码',
                '银行账户信息',
                '家庭住址',
                '客户隐私资料',
                '未公开合同',
                '未经授权的客户名单',
                '商业机密',
                '涉及第三方权益、未经授权披露的资料',
              ].map((item, i) => (
                <li key={i} className="text-[14px] text-[#444] leading-[1.6] pl-3 border-l-2 border-[#C9A44C]">{item}</li>
              ))}
            </ul>
            <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
              <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">
                如双方进入正式合作阶段，可根据实际情况在私下进一步核验主体、资质、合同、付款、责任边界和交付标准。
              </p>
            </div>
          </div>
        </section>

        {/* 平台说明 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">
              七、关于中加商业在线的说明
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] mb-4">
              中加商业在线鼓励真实、透明、可核验的商业信息交流。但需要说明的是：平台发布、转发或整理相关信息，不等于自动为发布方的服务能力、商业承诺、资质状态或合作结果背书。
            </p>
            <p className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] mb-6">
              企业或个人在开展合作前，仍应根据自身需要进行独立判断和必要核验，包括但不限于主体信息、服务能力、过往案例、合同条款、付款安排、责任边界和合规要求。
            </p>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] mb-4">
              中加商业在线可根据具体情况，为企业、服务商和机构提供以下支持：
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {[
                '企业服务介绍整理',
                '合作资源发布',
                '服务商信息展示',
                '活动信息发布',
                '媒体报道与内容传播',
                '加拿大及北美市场进入初步判断',
                '本地服务资源连接',
                '项目沟通与合作路径设计',
              ].map((item, i) => (
                <li key={i} className="text-[14px] text-[#444] leading-[1.6] pl-3 border-l-2 border-[#00A884]">{item}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* 联系 */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[20px] md:text-[24px] leading-[1.35] tracking-tight mb-6">
              八、联系中加商业在线
            </h2>
            <div className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
              <div className="space-y-3 text-[14px] md:text-[15px]">
                <p><span className="text-[#999] text-[13px]">公司</span><br />CCBONLINE INC. / 中加商业在线</p>
                <p><span className="text-[#999] text-[13px]">官网</span><br /><a href="https://www.ccbonline.ca" className="text-[#00A884] hover:underline">www.ccbonline.ca</a></p>
                <p><span className="text-[#999] text-[13px]">邮箱</span><br />info@ccbonline.ca</p>
                <p><span className="text-[#999] text-[13px]">服务号</span><br />中加商业在线</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[22px] md:text-[28px] leading-[1.35] tracking-tight mb-4">
                希望通过中加商业在线发布资源？
              </h2>
              <p className="text-white/60 text-[14px] md:text-[15px] leading-[1.65] mb-6">
                如果你希望通过中加商业在线发布服务介绍、活动信息、招商合作或北美本地资源，请先整理基础资料，并通过官网联系入口与我们沟通。我们会根据平台定位、信息质量和相关性，判断是否适合发布、整理或推荐。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">联系中加商业在线</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
