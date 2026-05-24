import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHHome() {
  useSEO({
    title: '加拿大及北美市场进入服务｜中加商业在线 CCBONLINE INC.',
    description: '中加商业在线 CCBONLINE INC. 是一家位于加拿大大多伦多地区的注册公司，面向准备进入加拿大及北美市场的中国制造企业、品牌方、服务商，提供市场进入判断、本地服务资源连接、商业内容发布和项目推进支持。',
    canonical: 'https://www.ccbonline.ca/zh',
    ogType: 'website',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '加拿大及北美市场进入服务｜中加商业在线 CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        {/* Hero */}
        <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/canada-north-america-market-entry-consulting.jpg"
              alt="中加商业在线帮助中国制造企业进入加拿大与北美市场"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/85 to-[#07111F]/50" />
          <div className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5 font-medium">
              加拿大注册公司 · 多伦多本地团队
            </p>
            <h1 className="font-serif text-white text-[24px] sm:text-[28px] md:text-[36px] lg:text-[42px] leading-[1.3] tracking-tight max-w-[900px] mb-4 md:mb-6">
              中国企业进入加拿大及北美市场的本地判断、资源连接与落地支持
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[680px] mb-6 md:mb-8">
              中加商业在线 CCBONLINE INC. 是一家位于加拿大大多伦多地区的注册公司，面向准备进入加拿大及北美市场的中国制造企业、品牌方、服务商和成长型企业，提供市场进入判断、本地服务资源连接、商业内容发布和项目推进支持。我们关注的不只是信息整理，而是产品是否适合进入、责任链是否清楚、资料是否能被北美客户理解，以及后续是否有人能在本地承接推进。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6">
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">申请初步诊断</Link>
              <Link to="/zh/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>了解服务</Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/40">
              <span>市场进入诊断</span>
              <span>·</span>
              <span>合规与责任链</span>
              <span>·</span>
              <span>本地执行协调</span>
            </div>
          </div>
        </section>

        {/* 初步诊断看什么 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">诊断</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              初步诊断通常会看什么
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px] mb-8">
              不是上来就推荐服务，而是先了解你的产品和当前进展，再判断哪个环节最需要先处理。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: '01', title: '产品类别和目标市场', desc: '判断产品是否适配加拿大或北美市场，当前阶段适合先做验证、准备资料，还是补齐合规和责任链。' },
                { step: '02', title: '现有英文资料', desc: '检查英文产品规格、认证文件、说明书、标签、网站内容是否能让北美客户快速理解。' },
                { step: '03', title: '认证与责任链', desc: '电气安全、无线通信、电磁兼容、能效、标签等要求是否清楚，进口责任、售后、保险安排是否明确。' },
                { step: '04', title: '本地承接状态', desc: '是否有本地跟进流程、仓储物流安排、渠道资源和展会或客户线索需要处理。' },
              ].map((item) => (
                <div key={item.step} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[#C9A44C] text-[13px] font-medium mb-3">{item.step}</p>
                  <h3 className="text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-[#F8F9FA] border border-[#E5E5E5] max-w-[800px]">
              <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">
                输出：初步问题清单、进入阶段判断、<Link to="/zh/services" className="text-[#00A884] hover:underline">优先级建议</Link>。
              </p>
            </div>
          </div>
        </section>

        {/* 服务对象 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">服务对象</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              我们服务谁
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              我们更适合服务已经有真实产品、明确市场意向，并愿意把资料、责任和本地承接一步步理清楚的企业。如果当前目标只是快速获取客户名单，而暂时不准备梳理资料、责任和后续承接，我们可能不是最合适的第一选择。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: '中国制造企业', desc: '有成熟产能，寻求系统性进入加拿大及北美市场的制造企业。' },
                { title: '出口导向型品牌', desc: '有差异化产品，需要定位、合规和渠道策略的品牌方。' },
                { title: '工业设备供应商', desc: '设备、机械、零部件制造商，需要认证、IOR安排和本地合作伙伴协调。', hasLink: true },
                { title: '专业服务商', desc: '计划扩展至加拿大的专业服务事务所——税务、法律、物流、保险、教育、咨询等。' },
                { title: '成长型企业', desc: '在国内已有成功基础，准备超越试错型方法的企业。' },
                { title: '加拿大本地服务商与机构', desc: '希望服务中国企业、发布服务信息、参与商业活动或建立中加资源连接的加拿大本地服务商、机构和合作方。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">
                    {item.hasLink 
                      ? <>设备、机械、零部件制造商，需要认证、<Link to="/zh/topics/importer-of-record-and-responsibility-chain" className="text-[#00A884] hover:underline">IOR安排</Link>和本地合作伙伴协调。</>
                      : item.desc
                    }
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 常见进入缺口 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">常见缺口</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              很多企业不是产品不行，而是基础还没准备好
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              很多企业产品本身没问题，但进入北美市场的基础还没有准备好。以下是我们最常见的几类缺口。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {[
                { title: '产品准备好了，但资料没有', desc: '英文产品规格书、数据表、用户手册、安全警告不完整、过时，或者写给的是另一个市场的读者。北美买家在初步评估供应商时，往往会查看产品规格、认证信息、安装或使用说明、保修条款和公司可信度信息。' },
                { title: '有询盘进来，但没有本地跟进流程', desc: '展会线索、网站询盘或推荐来的潜在客户，但没有结构化跟进节奏、没有本地联系人、也没有筛选和培育流程。' },
                { title: '认证、进口责任、保修义务没有理清', desc: '电气安全、无线通信、电磁兼容、能效、标签、说明书等要求不确定，相关 CSA / UL / ETL、FCC / ISED 路径尚未确认。进口记录主体（IOR）没安排，保修索赔本地怎么处理不清楚，出货前保险覆盖范围没确认。' },
                { title: '网站有了，但北美买家看不懂', desc: '网站缺少清晰的英文产品信息、可验证的认证信息、专业的呈现方式和信任信号，北美买家在评估新供应商时看不到他们需要的信息。' },
                { title: '展会名片收了，但没有结构化跟进', desc: '名片收集了一堆，但没有系统的展后外联流程、没有为北美潜在客户调整的材料、也没有本地协调把兴趣转化为会议。' },
                { title: '找到了分销商，但责任链没厘清', desc: '本地合作伙伴找到了，但进口责任谁来承担、保修怎么处理、售后谁支持、客户关系归谁，这些问题都没有明确答案。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border-l-2 border-[#C9A44C] border border-[#E5E5E5]">
                  <h3 className="text-[15px] font-semibold mb-2 leading-[1.5]">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* 加拿大与美国规则差异说明 */}
            <div className="max-w-[800px] mt-6 p-4 bg-white border border-[#E5E5E5]">
              <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">
                <strong className="text-[#444]">注意：</strong>加拿大和美国在进口、税务、认证、标签、渠道和售后责任方面存在差异。我们会根据企业实际目标市场，区分加拿大、美国或北美整体路径，而不是简单套用同一套方案。
              </p>
            </div>
          </div>
        </section>

        {/* 服务 */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">服务</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              五项核心服务
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-10">
              我们围绕市场进入的五个核心环节提供服务，每个环节都旨在帮助企业从"不确定"走向"可以推进"。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { num: '01', title: '市场进入诊断', desc: '在你投入之前，先评估你的产品、能力和时机是否适合进入北美市场。不是鼓励你进入，而是帮你看清条件。' },
                { num: '02', title: '本地执行与合作伙伴协调', desc: '不只是给建议，而是实际协调。本地合作伙伴对接、关系管理、周度进度跟踪，让项目不只是停留在方案里，而是有人跟进、有节点、有下一步动作。' },
                { num: '03', title: '合规与责任链', desc: '根据产品类别和销售路径，梳理可能涉及的认证测试、进口文件、IOR 安排、产品责任、保险、保修和本地售后问题；如涉及税务、法律或监管申报事项，则建议进一步咨询对应专业机构。' },
                { num: '04', title: '网站与商业内容诊断', desc: '检查和优化你的产品资料、网站和文档，确保它们能被北美买家理解和信任，而不是造成困惑。' },
                { num: '05', title: '商业内容与本地可信度建设', desc: '帮助企业整理英文公司介绍、产品资料、网站内容、项目案例和媒体化表达，让北美客户、服务商和合作方更容易理解企业能力和合作价值。' },
              ].map((item) => (
                <div key={item.num} className="p-6 border border-white/10 hover:border-[#00A884]/50 transition-colors">
                  <p className="text-[#C9A44C] text-[13px] font-medium mb-3">{item.num}</p>
                  <h3 className="text-white text-[17px] md:text-[18px] font-semibold mb-3">{item.title}</h3>
                  <p className="text-white/60 text-[14px] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/zh/services" className="btn-primary text-[15px] px-8 py-3.5 min-h-[52px] inline-block">查看全部服务</Link>
            </div>
          </div>
        </section>

        {/* 本地执行流程 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">工作流程</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              本地执行如何运作
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px] mb-8">
              每一步都有明确的输出，让你知道进展到哪、下一步该做什么。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: '01', title: '先诊断', desc: '判断你的产品、目标市场、资料、认证、责任链和当前进展中的关键缺口。输出：初步问题清单、进入阶段判断、优先级建议。' },
                { step: '02', title: '再准备', desc: '整理英文资料、市场进入材料、责任链问题、合作方沟通文件和客户跟进内容。输出：英文资料修改建议、责任链问题清单、客户沟通材料。' },
                { step: '03', title: '做协调', desc: '根据项目需要，对接本地服务商、合作伙伴、渠道资源、活动资源或客户跟进对象。输出：服务商沟通记录、任务分工、时间节点。' },
                { step: '04', title: '持续推进', desc: '通过周度跟进、任务清单、责任分工和阶段复盘，让项目不是停在"聊过"，而是能继续往前走。输出：周度跟进记录、问题更新、阶段复盘、后续动作建议。' },
              ].map((item) => (
                <div key={item.step} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[#C9A44C] text-[13px] font-medium mb-3">{item.step}</p>
                  <h3 className="text-[17px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 为什么选中加商业在线 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">为什么选中加商业在线</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              与其他服务商有什么不同
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px] mb-8">
              我们不只是提供建议，而是帮助企业把信息、判断、资源和下一步动作连接起来。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: '加拿大本地注册公司', desc: '公开展示公司名称、联系方式、地址和服务边界，便于客户在正式合作前核验沟通。' },
                { title: '中英双语沟通', desc: '流利的中英文沟通能力，弥合两个市场之间的文化和商业实践差异。' },
                { title: '先判断再推进', desc: '我们评估你是否应该进入，而不只是怎么进入。一个诚实的"不建议进入"比一个有缺陷的"进入计划"更有价值。' },
                { title: '责任链意识', desc: '在出货前梳理清楚认证、进口、保修、保险和责任归属，而不是等问题出现后再补救。' },
                { title: '实际执行', desc: '周度跟踪、合作伙伴协调、任务清单和持续推进。我们帮助项目往前走，而不只是做规划。' },
                { title: '内容与媒体能力', desc: '我们理解中国企业如何展示自己，也了解北美买家期望看到什么。我们帮助弥合这个差距。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* 本地资源连接说明 */}
            <div className="max-w-[800px] mt-8 p-5 bg-white border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3">本地资源连接不是简单介绍人</h3>
              <p className="text-[14px] text-[#767676] leading-[1.65]">
                在加拿大市场，服务商是否适配企业当前阶段，比资源数量更重要。我们会根据企业的产品类别、目标市场、资料准备度和责任链状态，判断需要优先对接认证检测、物流仓储、清关、售后、媒体传播、商业活动还是渠道资源。
              </p>
            </div>
          </div>
        </section>

        {/* 资源 */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">资源</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              市场进入资源与清单
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              实用的清单、说明和洞察，帮助你在全面投入之前评估准备度。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { title: '加拿大市场进入准备清单', desc: '从产品、资料、合规、责任链、渠道和本地承接几个角度进行初步自评。', status: '即将推出' },
                { title: '出海企业网站可信度检查清单', desc: '北美买家在评估供应商网站时关注的关键要素。', status: '即将推出' },
                { title: 'IOR 与进口责任基础说明', desc: '进口记录主体（Importer of Record）是什么、为什么重要、如何安排。', status: '已上线' },
                { title: '展会跟进清单', desc: '如何将展会线索转化为结构化跟进和真实商机。', status: '即将推出' },
                { title: '责任链自查清单', desc: '围绕进口、合规、售后、保险、召回和本地服务责任，判断当前责任链是否清楚。', status: '即将推出' },
                { title: '产品资料本地化准备清单', desc: '检查英文产品介绍、规格表、认证文件、说明书是否适合本地客户阅读。', status: '即将推出' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[15px] font-semibold leading-[1.4]">{item.title}</h3>
                    <span className="text-[11px] text-[#999] uppercase tracking-wider shrink-0 ml-2">{item.status}</span>
                  </div>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/zh/resources" className="btn-primary text-[14px] px-5 py-3 min-h-[48px]">查看全部资源</Link>
              <span className="text-[13px] text-[#999] self-center">部分清单可根据申请提供</span>
            </div>
          </div>
        </section>

        {/* 常见问题 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">常见问题</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-6">
              你可能想问的问题
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[900px]">
              {[
                { q: '我们现在还没有客户，适合联系 CCBONLINE 吗？', a: '适合。很多项目正是在客户开发前，需要先判断产品、资料和责任链是否准备好。' },
                { q: '你们是否直接负责认证、清关或法律服务？', a: '我们可以协助企业识别问题、准备资料并对接相关服务资源；具体认证、清关、法律、税务和保险事项，应由对应专业机构执行或确认。' },
                { q: '初步诊断会看哪些内容？', a: '通常包括产品类别、目标市场、现有资料、认证状态、进口安排、本地承接、客户线索和当前主要障碍。' },
                { q: '加拿大和美国市场可以一起评估吗？', a: '可以，但需要区分两个市场的规则、渠道、责任和执行路径，不能简单用同一套方案。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h4 className="text-[15px] font-semibold mb-2 leading-[1.5]">{item.q}</h4>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Start Here */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">从这里开始</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              根据你的阶段选择入口
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
                <p className="text-[11px] text-[#999] uppercase tracking-wider mb-3">了解阶段</p>
                <h3 className="text-[17px] font-semibold mb-3">刚开始了解？</h3>
                <p className="text-[14px] text-[#767676] leading-[1.6] mb-4">下载清单或阅读我们的市场进入洞察，了解"准备就绪"实际意味着什么。</p>
                <Link to="/zh/insights" className="text-[14px] font-medium text-[#00A884] hover:underline">阅读洞察 &rarr;</Link>
              </div>
              <div className="p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
                <p className="text-[11px] text-[#999] uppercase tracking-wider mb-3">有具体问题</p>
                <h3 className="text-[17px] font-semibold mb-3">遇到了具体挑战？</h3>
                <p className="text-[14px] text-[#767676] leading-[1.6] mb-4">提交你的产品和情况，我们会审阅并推荐适合你阶段的服务。</p>
                <Link to="/zh/contact" className="text-[14px] font-medium text-[#00A884] hover:underline">申请初步诊断 &rarr;</Link>
              </div>
              <div className="p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
                <p className="text-[11px] text-[#999] uppercase tracking-wider mb-3">准备推进</p>
                <h3 className="text-[17px] font-semibold mb-3">准备好往前走了？</h3>
                <p className="text-[14px] text-[#767676] leading-[1.6] mb-4">预约咨询，与本地顾问讨论你的市场进入项目。</p>
                <Link to="/zh/contact" className="text-[14px] font-medium text-[#00A884] hover:underline">预约咨询 &rarr;</Link>
              </div>
            </div>
          </div>
        </section>

        {/* 专业服务边界说明 */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <div className="max-w-[800px] p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3">专业服务边界说明</h3>
              <p className="text-[14px] text-[#767676] leading-[1.65]">
                CCBONLINE 的工作重点是市场进入判断、资料准备、责任链梳理和本地资源协调。涉及法律、税务、认证、保险、报关和监管申报的事项，我们会协助企业识别问题并对接相关专业机构，具体意见和执行结果以对应专业机构的正式文件为准。
              </p>
            </div>
          </div>
        </section>

        {/* 免责声明 */}
        <section className="py-6 md:py-8 bg-white border-t border-[#E5E5E5]">
          <div className="container-site">
            <div className="max-w-[800px]">
              <p className="text-[12px] text-[#999] leading-[1.6]">
                <strong className="text-[#767676]">说明：</strong>本网站内容用于市场进入前期判断和商业信息参考，不构成法律、税务、保险、认证或监管合规意见。具体项目应结合产品类别、销售地区、进口安排和专业机构意见进一步确认。加拿大和美国在市场进入规则、认证路径、税务安排和法律责任方面存在差异，需分别评估。
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                准备评估你的北美市场进入准备度？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                告诉我们你现在的进展、你在做什么产品、以及是什么在阻碍你前进。我们会推荐正确的第一步。
              </p>
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">申请初步诊断</Link>
              <p className="text-white/40 text-[13px] mt-4">info@ccbonline.ca · +1 647 568 1128 · 84 Kenhar Dr, North York, ON M9L 1N2</p>
            </div>
          </div>
        </section>
      </main>
      <Footer lang="zh" />
    </div>
  )
}
