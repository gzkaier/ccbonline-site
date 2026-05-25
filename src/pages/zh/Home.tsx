import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import useSEO from '../../hooks/useSEO'

export default function ZHHome() {
  useSEO({
    title: '加拿大及北美市场进入服务｜中加商业在线 CCBONLINE INC.',
    description: 'CCBONLINE INC. 是加拿大大多伦多地区注册公司，面向中国制造企业与出口品牌，提供市场进入判断、责任链梳理、本地资源协调、商业内容承接与项目推进支持。',
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
        {/* ===== 1. Hero Section ===== */}
        <section className="relative w-full min-h-[100dvh] flex items-end overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/images/canada-north-america-market-entry-consulting.jpg"
              alt="中加商业在线帮助中国制造企业判断并推进加拿大及北美市场进入项目"
              className="w-full h-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#07111F] via-[#07111F]/85 to-[#07111F]/50" />
          <div className="relative z-10 container-site w-full pb-[7vh] md:pb-[10vh] pt-[18vh] md:pt-[22vh]">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-4 md:mb-5 font-medium">
              加拿大注册公司 · 大多伦多本地运营
            </p>
            <h1 className="font-serif text-white text-[24px] sm:text-[28px] md:text-[38px] lg:text-[44px] leading-[1.3] tracking-tight max-w-[900px] mb-4 md:mb-6">
              中国企业进入加拿大及北美市场的本地判断与落地支持
            </h1>
            <p className="text-white/65 text-[15px] md:text-[17px] leading-[1.65] max-w-[720px] mb-6 md:mb-8">
              中加商业在线 CCBONLINE INC. 是一家位于加拿大大多伦多地区的注册公司，面向准备进入加拿大及北美市场的中国制造企业、出口品牌、工业设备供应商和专业服务商，提供市场进入判断、责任链梳理、本地资源协调、商业内容承接与项目推进支持。我们不只是整理信息，而是帮你判断产品是否适合进入、责任链是否清楚、英文资料是否能被北美客户理解，以及后续是否有人能在本地承接推进。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-6">
              <Link to="/zh/contact" className="btn-primary text-[15px] px-6 py-3.5 min-h-[52px]">申请初步诊断</Link>
              <Link to="/zh/services" className="btn-outline text-[15px] px-6 py-3.5 min-h-[52px]" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>了解服务方式</Link>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/40">
              <span>市场进入诊断</span>
              <span>·</span>
              <span>责任链梳理</span>
              <span>·</span>
              <span>本地执行协调</span>
            </div>
          </div>
        </section>

        {/* ===== 2. 中加商业在线真正帮助你判断什么 ===== */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">核心价值</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-5">
              先判断，再推进；先拆责任，再连接资源；先理清路径，再投入成本
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-8">
              中国企业进入加拿大及北美市场，真正需要的不只是客户名单或服务商介绍，而是先看清产品、资料、责任、渠道、本地承接和下一步路径。我们围绕四个关键问题，帮助企业做出更清醒的判断：
            </p>
            <div className="space-y-6">
              <div className="pl-4 border-l-2 border-[#00A884]">
                <h3 className="text-[16px] font-semibold text-[#212121] mb-1">你的产品是否适合进入加拿大或北美市场</h3>
                <p className="text-[14px] text-[#767676] leading-[1.65]">不是每个产品都适合每个市场。我们会根据产品类别、目标买家类型、竞争格局和合规门槛，给出一个诚实的初步判断——而不是简单地鼓励你"赶紧进入"。</p>
              </div>
              <div className="pl-4 border-l-2 border-[#00A884]">
                <h3 className="text-[16px] font-semibold text-[#212121] mb-1">你的资料、认证、责任链和本地承接缺口在哪里</h3>
                <p className="text-[14px] text-[#767676] leading-[1.65]">很多企业的产品本身没有问题，但英文资料不完整、认证路径不清楚、进口责任没安排、售后没人承接。我们会帮你把这些缺口一个一个列出来，标注优先级。</p>
              </div>
              <div className="pl-4 border-l-2 border-[#00A884]">
                <h3 className="text-[16px] font-semibold text-[#212121] mb-1">现在应该先准备资料、先做验证、先找服务商，还是先停下来重新判断</h3>
                <p className="text-[14px] text-[#767676] leading-[1.65]">不同阶段需要不同的动作。有的企业需要先整理产品规格书，有的需要先确认认证路径，有的需要先把网站改好。我们不会给你一个万能方案，而是指出当前最该做的事。</p>
              </div>
              <div className="pl-4 border-l-2 border-[#00A884]">
                <h3 className="text-[16px] font-semibold text-[#212121] mb-1">如果项目可以推进，下一步由谁负责、怎么推进、需要哪些本地资源参与</h3>
                <p className="text-[14px] text-[#767676] leading-[1.65]">判断清楚之后，还需要有人跟进、有节点、有下一步动作。我们会帮你梳理推进节奏，协调需要的本地资源，让项目从"聊过"变成"在推进"。</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 3. 初步诊断通常会看什么 ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">诊断</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              初步诊断通常会看什么
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px] mb-8">
              不是上来就推荐服务，而是先了解你的产品、阶段和主要障碍，再判断哪个环节最需要先处理。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: '产品类别与目标市场', desc: '你做什么产品，目标进入加拿大、美国还是两者都有。不同产品在不同市场的合规要求、渠道特征和竞争格局差异很大。' },
                { title: '当前业务阶段', desc: '是刚开始了解、准备参展、已经收到询盘、正在和分销商谈判，还是已经在准备第一票货。阶段不同，优先级完全不同。' },
                { title: '英文资料与买家可信度', desc: '英文网站、产品规格书、数据表、说明书、认证文件是否能让北美买家快速理解并建立信任。资料的质量直接影响买家的第一印象。' },
                { title: '认证路径与责任链', desc: '产品是否需要 CSA、UL、FCC、ISED 或其他认证？进口责任主体（IOR）是否明确？保修、售后、保险、标签和召回责任是否已安排？' },
                { title: 'IOR / 进口责任主体路径', desc: '谁作为法定进口人？是自己设立加拿大实体、由分销商承担，还是委托第三方 IOR 代理？每种方式的控制权、成本和风险不同。' },
                { title: '本地承接与后续跟进状态', desc: '是否有本地跟进流程、仓储物流安排、展会线索处理机制、客户沟通节奏？还是有线索进来但没人及时响应？' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[15px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-white border border-[#E5E5E5] max-w-[800px]">
              <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">
                <strong className="text-[#444]">输出：</strong>初步问题清单、当前阶段判断（探索期 / 准备期 / 验证期 / 执行期）、优先级建议、下一步适合进入哪类服务。初步诊断不是完整市场进入方案，而是帮助你判断当前最需要处理什么。
              </p>
            </div>
          </div>
        </section>

        {/* ===== 4. 申请初步诊断后会发生什么 ===== */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">流程</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-5">
              申请初步诊断后会发生什么
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-8">
              很多客户在提交诊断申请前，不确定自己会得到什么、是否需要付费、是否会立刻被推销服务。这里我们把流程说清楚。
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-[#C9A44C] text-[14px] font-medium shrink-0 w-6">01</span>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#212121] mb-1">你提交产品类别、目标市场、当前阶段和主要问题</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">不需要准备完美的材料。告诉我们你做什么产品、目标市场在哪里、目前进展到哪一步、最大的困惑或障碍是什么即可。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#C9A44C] text-[14px] font-medium shrink-0 w-6">02</span>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#212121] mb-1">我们先判断项目更接近探索期、准备期、验证期还是执行期</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">不同阶段的关注点和下一步动作完全不同。探索期需要判断和资料准备，执行期需要本地协调和项目跟进。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#C9A44C] text-[14px] font-medium shrink-0 w-6">03</span>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#212121] mb-1">我们指出最需要优先处理的缺口</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">例如：英文资料需要重写、认证路径需要先确认、IOR 需要先安排、网站可信度需要提升、展会线索需要结构化跟进等。每次只聚焦最重要的 2-3 件事。</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#C9A44C] text-[14px] font-medium shrink-0 w-6">04</span>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#212121] mb-1">如果问题较复杂，我们会建议进入付费诊断、专项服务或本地协调项目</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65]">如果初步判断显示需要更深入的分析，我们会说明原因、服务范围和大概节奏，由你决定是否继续。不会强行推销。</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5. 我们服务谁 ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">服务对象</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              我们服务谁
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              我们更适合服务已有真实产品、明确市场意向、愿意梳理资料和责任链的企业。如果你只是想快速获取客户名单，而暂时不准备整理资料、确认责任和后续承接，我们可能不是最合适的第一选择。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {[
                { title: '中国制造企业', desc: '有成熟产能，产品已经在国内或其他市场验证过，正在系统性评估进入加拿大及北美市场的条件和路径。' },
                { title: '出口导向型品牌', desc: '有差异化产品，需要明确品牌定位、合规路径和渠道策略，而不是简单找个分销商发货。' },
                { title: '工业设备供应商', desc: '设备、机械、零部件制造商，需要理清认证要求、IOR 安排、本地安装支持和售后责任。', hasLink: true },
                { title: '专业服务商', desc: '计划扩展至加拿大的专业服务事务所——税务咨询、法律服务、物流、保险、教育、商业咨询等。' },
                { title: '成长型企业', desc: '在国内或已有市场取得一定成功，准备超越试错型方法，建立更系统的市场进入路径。' },
                { title: '加拿大本地服务商与机构', desc: '希望服务中国企业、发布服务信息、参与商业活动或建立中加资源连接的加拿大本地服务商、检测认证机构、物流商、渠道方和商业组织。', hasLink2: true },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">
                    {item.hasLink
                      ? <>有成熟产能，产品已经在国内或其他市场验证过，正在系统性评估进入加拿大及北美市场的条件和路径。需要理清认证要求、<Link to="/zh/topics/importer-of-record-and-responsibility-chain" className="text-[#00A884] hover:underline">IOR 安排</Link>、本地安装支持和售后责任。</>
                      : item.hasLink2
                        ? <>希望服务中国企业、发布服务信息、参与商业活动或建立<Link to="/zh/resources" className="text-[#00A884] hover:underline">中加资源连接</Link>的加拿大本地服务商、检测认证机构、物流商、渠道方和商业组织。</>
                        : item.desc
                    }
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 6. 适合谁 / 不适合谁 ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">匹配度</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              适合谁 / 暂时不一定适合谁
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* 适合 */}
              <div className="p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
                <h3 className="text-[17px] font-semibold mb-4 flex items-center gap-2">
                  <span className="text-[#00A884]">✓</span>
                  适合联系中加商业在线的情况
                </h3>
                <ul className="space-y-3">
                  {[
                    '已有真实产品，准备评估加拿大或北美市场的条件和路径',
                    '已经参加或准备参加加拿大 / 美国展会，需要展前准备或展后跟进支持',
                    '已有询盘，但缺少结构化跟进流程和本地响应能力',
                    '不确定认证、IOR、保修、保险、售后、英文资料应该怎么准备',
                    '找到了分销商或服务商，但责任分工、成本分担和后续承接还没说清',
                    '加拿大本地服务商希望接触中国企业或发布服务信息',
                  ].map((item, i) => (
                    <li key={i} className="text-[14px] text-[#444] leading-[1.65] pl-3 border-l-2 border-[#00A884]">{item}</li>
                  ))}
                </ul>
              </div>
              {/* 不适合 */}
              <div className="p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
                <h3 className="text-[17px] font-semibold mb-4 flex items-center gap-2">
                  <span className="text-[#999]">—</span>
                  暂时不一定适合的情况
                </h3>
                <ul className="space-y-3">
                  {[
                    '只想快速获取客户名单，不愿意梳理资料和责任',
                    '希望别人保证找客户、保证成交、保证进渠道',
                    '产品和目标市场还完全没有定义',
                    '不愿意整理资料、确认责任或参与后续沟通',
                    '只需要低价翻译、普通建站或一次性广告发布',
                    '需要正式法律、税务、认证、保险、报关意见，但不愿意找对应专业机构',
                  ].map((item, i) => (
                    <li key={i} className="text-[14px] text-[#767676] leading-[1.65] pl-3 border-l-2 border-[#E5E5E5]">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-[14px] text-[#767676] leading-[1.65] max-w-[720px] mt-6">
              如果你不确定自己是否属于上述任何一种情况，可以直接提交初步诊断申请。我们会根据你的实际情况，诚实告知能否提供帮助，以及如果暂时不适合，你应该先找谁。
            </p>
          </div>
        </section>

        {/* ===== 7. 常见进入缺口（7个） ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">常见缺口</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              很多企业不是产品不行，而是基础还没准备好
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              产品本身没问题，但进入北美市场的基础还没有打好。以下是我们最常遇到的七类缺口。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
              {[
                { title: '产品准备好了，但资料没有', desc: '英文产品规格书、数据表、用户手册、安全警告不完整、过时，或者写给的是另一个市场的读者。北美买家在初步评估供应商时，会查看产品规格、认证信息、安装说明、保修条款和公司可信度。资料缺一块，就可能失去一个机会。' },
                { title: '有询盘进来，但没有本地跟进流程', desc: '展会线索、网站询盘或推荐来的潜在客户，但没有结构化跟进节奏、没有本地联系人、也没有筛选和培育流程。结果是线索进来得快，凉得也快。' },
                { title: '认证、进口责任、保修义务没有理清', desc: '电气安全、无线通信、电磁兼容、能效、标签、说明书等要求不确定。进口记录主体（IOR）没安排，保修索赔本地怎么处理不清楚，出货前保险覆盖范围没确认。' },
                { title: '网站有了，但北美买家看不懂', desc: '网站缺少清晰的英文产品信息、可验证的认证信息、专业的呈现方式和信任信号。北美买家在评估新供应商时看不到他们需要的信息，或者看到的信息让他们产生疑虑。' },
                { title: '展会名片收了，但没有结构化跟进', desc: '名片收集了一堆，但没有系统的展后外联流程、没有为北美潜在客户调整的材料、也没有本地协调把兴趣转化为会议。展会投入打了折扣。' },
                { title: '找到了分销商，但责任链没厘清', desc: '本地合作伙伴找到了，但进口责任谁来承担、保修怎么处理、售后谁支持、客户关系归谁、出了问题怎么分担——这些都没有明确答案，埋下后续纠纷的种子。' },
                { title: '钱已经开始花了，但进入路径还没判断清楚', desc: '很多企业已经开始参展、投广告、找代理、做网站、找仓库，但还没有判断产品是否真正适合这个市场、责任由谁承担、资料是否够用、客户来了谁跟进。这种状态下，投入越快，不确定性越大，回头成本也越高。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border-l-2 border-[#C9A44C] border border-[#E5E5E5]">
                  <h3 className="text-[15px] font-semibold mb-2 leading-[1.5]">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="max-w-[800px] mt-6 p-4 bg-white border border-[#E5E5E5]">
              <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">
                <strong className="text-[#444]">注意：</strong>加拿大和美国在进口规则、税务安排、认证路径、标签要求、渠道特征和售后责任方面存在差异。我们会根据企业的实际目标市场，区分加拿大、美国或北美整体路径，而不是简单套用同一套方案。
              </p>
            </div>
          </div>
        </section>

        {/* ===== 8. 什么是责任链（重点模块） ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">方法论</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              什么是责任链
            </h2>
            <div className="max-w-[720px] mb-8">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                进入加拿大及北美市场，不只是找到客户或发出第一票货。很多产品一旦进入本地市场，就会涉及认证、进口记录、产品责任、标签说明、保修售后、保险、召回、本地客户沟通等一连串责任。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                我们把这些责任放在一起看，称为<strong className="font-medium text-[#212121]">"责任链"</strong>。如果责任链没有提前理清，企业可能会在找到客户、签下分销商、参加展会甚至发货之后，才发现最关键的问题没人承担——而那时成本已经发生了。
              </p>
              <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] italic">
                这不是法律意见，而是市场进入前必须梳理的商业责任和项目推进框架。涉及具体法律、税务、认证或保险事项时，应由对应专业机构确认。
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
              {[
                { title: '谁负责认证和测试', desc: '产品是否需要 CSA、UL、ETL、FCC、ISED 或其他认证？谁发起测试申请、谁持有认证、谁负责更新和续期？' },
                { title: '谁作为 IOR / 进口记录主体', desc: '谁作为法定进口人承担海关申报、关税、税务和进口合规责任？这直接影响控制权和风险归属。' },
                { title: '谁负责进口文件和清关配合', desc: '商业发票、装箱单、原产地证、产品说明和其他海关所需文件由谁准备、谁审核、谁提交？' },
                { title: '谁承担产品责任和保险安排', desc: '如果产品在加拿大或美国造成损失或伤害，谁承担法律责任？产品责任保险是否覆盖北美地区？' },
                { title: '谁负责保修、售后、备件和退换货', desc: '保修期多长、本地是否有维修能力、备件从哪里来、退换货流程是什么？北美买家对此有明确预期。' },
                { title: '谁负责标签、说明书和安全警示', desc: '产品标签、用户手册、安全警告是否符合加拿大联邦和省级要求？英文（或英法双语）版本是否准确、完整？' },
                { title: '谁负责召回和客户投诉', desc: '如果产品需要召回，或者收到客户投诉甚至监管问询，谁来响应、谁负责沟通、谁承担成本？' },
                { title: '谁拥有客户关系和后续沟通', desc: '客户信息归谁、后续销售和服务沟通由谁负责、品牌声誉出了问题谁出面回应？这在分销商模式下尤其重要。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[15px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 9. 五项核心服务 ===== */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <p className="text-[#00A884] text-[11px] md:text-[12px] tracking-[0.15em] uppercase mb-3 font-medium">服务</p>
            <h2 className="font-serif text-white text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              五项核心服务
            </h2>
            <p className="text-white/60 text-[15px] md:text-[16px] leading-[1.65] max-w-[720px] mb-4">
              我们围绕市场进入的五个核心环节提供服务。每个环节都旨在帮助企业从"不确定"走向"可以推进"。
            </p>
            <p className="text-white/40 text-[14px] leading-[1.6] max-w-[720px] mb-10">
              CCBONLINE 提供市场进入判断、资料准备、责任链梳理、本地资源协调和项目推进支持。涉及法律、税务、认证、保险、报关和监管申报的事项，我们会协助企业识别问题并对接相关专业机构，具体意见和执行结果以对应专业机构的正式文件为准。
            </p>
            <div className="space-y-5">
              {[
                {
                  num: '01',
                  title: '市场进入诊断',
                  problem: '企业在投入大量时间和资金之前，不确定自己的产品、资料和条件是否真正适合进入加拿大或北美市场。',
                  outputs: ['当前阶段判断（探索期 / 准备期 / 验证期 / 执行期）', '关键缺口清单与优先级排序', '产品与市场适配初步观察', '是否继续推进的初步判断', '30 天行动建议'],
                  stage: '准备进入加拿大 / 北美市场，但还没有清楚路径、不确定条件是否成熟的企业。',
                },
                {
                  num: '02',
                  title: '责任链与合规路径梳理',
                  problem: '认证要求不清楚、进口责任主体没确定、保修售后没安排、保险没确认——责任链存在多处缺口，但不知道从哪里开始补。',
                  outputs: ['责任链全景图（8 项核心责任归属梳理）', '认证路径初步判断与资料准备清单', 'IOR 安排选项对比与建议', '保修 / 售后 / 保险责任分工建议', '需要专业机构确认的事项清单'],
                  stage: '产品有一定成熟度，但认证、进口、保修、售后等责任和合规事项尚未理顺的企业。',
                },
                {
                  num: '03',
                  title: '本地执行与合作伙伴协调',
                  problem: '企业有进入计划，但缺少本地执行能力——没人跟进、没节点、没下一步动作，项目停在"聊过"的阶段。',
                  outputs: ['本地合作伙伴沟通计划', '周度任务清单与进度跟踪', '责任分工与节点管理', '会议纪要、待办事项与跟进记录', '阶段性复盘与后续动作建议'],
                  stage: '已经有明确进入计划，需要有人在本地协调推进、跟踪节点、确保项目不断档的企业。',
                },
                {
                  num: '04',
                  title: '网站与北美买家可信度诊断',
                  problem: '英文网站有了，但北美买家看了一头雾水，或者看不到信任信号——资料缺失、表达不清、缺少认证展示和专业呈现。',
                  outputs: ['网站可信度评估（买家视角）', '英文内容差距分析', '信任信号改进建议', '产品资料本地化优先修改清单', '竞品网站对比参考'],
                  stage: '已有英文网站，但不确定是否达到北美买家预期、是否需要重新整理内容和设计表达的企业。',
                },
                {
                  num: '05',
                  title: '商业内容与本地可信度建设',
                  problem: '企业有能力做好产品，但不知道怎么向北美市场表达——公司介绍、产品资料、项目案例都写得像给国内客户看的。',
                  outputs: ['英文公司介绍与产品资料优化建议', '项目案例与成功故事框架', '媒体化内容策划与适配建议', '本地活动或商业曝光规划', '沟通材料改进优先级清单'],
                  stage: '产品竞争力不错，但需要重新整理面向北美客户的商业内容、提升本地可信度的企业。',
                },
              ].map((item) => (
                <div key={item.num} className="p-6 border border-white/10 hover:border-[#00A884]/50 transition-colors">
                  <div className="flex items-start gap-4 mb-3">
                    <span className="text-[#C9A44C] text-[13px] font-medium shrink-0">{item.num}</span>
                    <h3 className="text-white text-[17px] md:text-[18px] font-semibold">{item.title}</h3>
                  </div>
                  <div className="pl-7 space-y-3">
                    <div>
                      <p className="text-[12px] text-[#999] uppercase tracking-wider mb-1">解决什么问题</p>
                      <p className="text-white/60 text-[14px] leading-[1.65]">{item.problem}</p>
                    </div>
                    <div>
                      <p className="text-[12px] text-[#999] uppercase tracking-wider mb-1">常见输出</p>
                      <ul className="space-y-1">
                        {item.outputs.map((out, j) => (
                          <li key={j} className="text-white/60 text-[14px] leading-[1.65]">• {out}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[12px] text-[#999] uppercase tracking-wider mb-1">适合阶段</p>
                      <p className="text-white/60 text-[14px] leading-[1.65]">{item.stage}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link to="/zh/services" className="btn-primary text-[15px] px-8 py-3.5 min-h-[52px] inline-block">查看全部服务</Link>
            </div>
          </div>
        </section>

        {/* ===== 10. 本地执行如何运作 ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">工作流程</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              本地执行如何运作
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px] mb-8">
              每一步都有明确的方向和产出，让你知道进展到哪里、下一步该做什么。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { step: '01', title: '先诊断', desc: '判断你的产品、目标市场、资料、认证、责任链和当前进展中的关键缺口。', output: '初步问题清单、进入阶段判断、优先级建议' },
                { step: '02', title: '再准备', desc: '整理英文资料、市场进入材料、责任链问题清单和合作方沟通文件。', output: '资料修改建议、责任链问题清单、客户沟通材料' },
                { step: '03', title: '做协调', desc: '根据项目需要，对接本地服务商、合作伙伴、渠道资源或客户跟进对象。', output: '服务商沟通记录、任务分工、时间节点' },
                { step: '04', title: '持续推进', desc: '通过周度跟进、任务清单、责任分工和阶段复盘，让项目继续往前走。', output: '周度跟进记录、问题更新、阶段复盘、后续动作建议' },
              ].map((item) => (
                <div key={item.step} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <p className="text-[#C9A44C] text-[13px] font-medium mb-3">{item.step}</p>
                  <h3 className="text-[17px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[14px] text-[#767676] leading-[1.65] mb-3">{item.desc}</p>
                  <p className="text-[12px] text-[#999] leading-[1.5]">产出：{item.output}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 11. 典型项目场景 ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">场景</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              典型项目场景
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              以下是我们经常遇到的典型情境。每个项目背景不同，但核心问题往往相似——先判断，再推进。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                {
                  title: '展会后线索无人跟进',
                  desc: '一家制造企业在多伦多参加了行业展会，收集了几十张名片和多个潜在意向。但展会结束后两周内没有任何系统化的跟进——没有为北美客户调整过的邮件模板，没有本地联系人出面邀约，也没有把线索按优先级分类。结果大部分线索冷却。我们可以帮助理清展会跟进的优先级、准备本地化的跟进材料，并协助建立结构化的后续节奏。',
                },
                {
                  title: '分销商谈判前责任不清',
                  desc: '一家电子企业找到了一个加拿大本地分销商，对方对产品有兴趣，但在讨论代理协议之前，双方都没理清几个关键问题：谁负责进口清关和关税？产品出了问题谁承担保修？客户投诉由谁处理？品牌出了问题谁出面沟通？我们可以帮助梳理责任链中的关键问题，让谈判更有针对性。',
                },
                {
                  title: '英文官网无法建立北美买家信任',
                  desc: '一家建材企业投资建设了英文网站，但北美买家访问后反馈"看不明白公司在做什么""找不到认证信息""联系方式让人不确定是否靠谱"。我们可以从买家视角诊断网站的可信度差距，指出优先级最高的改进点，并提供内容优化方向。',
                },
                {
                  title: '本地服务商想服务中国企业但表达和入口不清',
                  desc: '一家加拿大本地的物流服务商希望接触更多中国企业，但中文资料缺失、服务描述对中国买家不友好、没有清晰的合作入口和沟通渠道。我们可以帮助调整中英文服务表达，优化面向中国企业的内容呈现，并协助建立更有效的资源连接路径。',
                },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <h3 className="text-[16px] font-semibold mb-3">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.65]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 12. 为什么选择中加商业在线 ===== */}
        <section className="section-padding bg-white">
          <div className="container-site">
            <p className="text-label mb-3">为什么选中加商业在线</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              与其他服务商有什么不同
            </h2>
            <p className="text-[14px] md:text-[15px] text-[#767676] leading-[1.65] max-w-[720px] mb-8">
              我们不只是提供建议，而是帮助企业把判断、资料、责任、资源和下一步动作连接起来。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-8">
              {[
                { title: '加拿大本地注册公司', desc: 'CCBONLINE INC. 是在加拿大安大略省注册的公司，办公地址位于大多伦多地区。公开可查的公司信息、联系方式和服务边界，便于客户在合作前核验。' },
                { title: '中英双语沟通', desc: '流利的中英文沟通能力，理解中国企业的表达习惯，也知道北美买家和合作伙伴期望看到什么。减少信息传递中的偏差和延误。' },
                { title: '先判断再推进', desc: '我们评估你是否应该进入、当前阶段是否适合推进，而不只是告诉你"怎么进入"。一个诚实的"暂时不建议"比一个有缺陷的"进入计划"更有价值。' },
                { title: '责任链意识', desc: '我们在出货前梳理认证、进口、保修、保险和责任归属，而不是等问题出现后再补救。责任链梳理是我们区别于一般咨询服务的核心方法。' },
                { title: '实际执行与周度跟进', desc: '周度跟踪、合作伙伴协调、任务清单和持续推进。我们帮助项目往前走，而不只是做规划。每一步都有记录、有节点、有复盘。' },
                { title: '内容与媒体能力', desc: '我们理解中国企业如何展示自己，也了解北美买家期望看到什么。我们帮助弥合这个差距——不是直接替代你的内容团队，而是指出方向、提供框架、协助优化。' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h3 className="text-[15px] md:text-[16px] font-semibold mb-2">{item.title}</h3>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6]">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="max-w-[800px] p-5 bg-[#F8F9FA] border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3">本地资源连接不是简单介绍人</h3>
              <p className="text-[14px] text-[#767676] leading-[1.65] mb-3">
                在加拿大市场，服务商是否适配企业当前阶段，比资源数量更重要。我们会根据企业的产品类别、目标市场、资料准备度和责任链状态，判断需要优先对接哪类本地资源——是认证检测、物流仓储、清关配合、售后支持、媒体传播、商业活动还是渠道资源。
              </p>
              <p className="text-[14px] text-[#767676] leading-[1.65]">
                同时，中加商业在线也是面向中加商业信息、企业动态、服务商资源和活动信息的内容发布与资源连接平台。但这些能力服务于市场进入、可信度建设和项目推进，而不是单纯的广告发布。
              </p>
            </div>
          </div>
        </section>

        {/* ===== 13. 市场进入资源与清单 ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">资源</p>
            <h2 className="font-serif text-[#212121] text-[24px] md:text-[30px] leading-[1.35] tracking-tight max-w-[700px] mb-4">
              市场进入资源与清单
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.65] max-w-[720px] mb-8">
              这些清单不是流量诱饵，而是帮助你在投入资源之前先自查。你可以根据项目阶段，申请领取对应的清单或资料。
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {[
                { title: '加拿大市场进入准备清单', desc: '从产品、资料、合规、责任链、渠道和本地承接几个角度进行初步自评。', status: '可申请领取', link: '/zh/contact' },
                { title: '出海企业网站可信度检查清单', desc: '北美买家在评估供应商网站时关注的关键要素，以及中国企业网站最常见的可信度缺口。', status: '可申请领取', link: '/zh/contact' },
                { title: 'IOR 与进口责任基础说明', desc: '进口记录主体（Importer of Record）是什么、为什么重要、如何安排，以及 IOR 与清关代理的区别。', status: '已上线', link: '/zh/insights/ior-bu-shi-dai-qing-guan' },
                { title: '展会跟进清单', desc: '如何将展会线索转化为结构化跟进，包括时间节点、材料准备和本地协调建议。', status: '可申请领取', link: '/zh/contact' },
                { title: '责任链自查清单', desc: '围绕进口、合规、售后、保险、召回和本地服务责任，判断当前责任链是否完整。', status: '整理中', link: null },
                { title: '产品资料本地化准备清单', desc: '检查英文产品介绍、规格表、认证文件、说明书是否达到北美买家和渠道的预期。', status: '可申请领取', link: '/zh/contact' },
              ].map((item, i) => (
                <div key={i} className="p-5 bg-white border border-[#E5E5E5]">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-[15px] font-semibold leading-[1.4]">{item.title}</h3>
                    <span className={`text-[11px] uppercase tracking-wider shrink-0 ml-2 ${item.status === '已上线' ? 'text-[#00A884]' : item.status === '整理中' ? 'text-[#999]' : 'text-[#C9A44C]'}`}>{item.status}</span>
                  </div>
                  <p className="text-[13px] md:text-[14px] text-[#767676] leading-[1.6] mb-3">{item.desc}</p>
                  {item.link ? (
                    <Link to={item.link} className="text-[13px] font-medium text-[#00A884] hover:underline">
                      {item.status === '已上线' ? '阅读文章 →' : '申请领取 →'}
                    </Link>
                  ) : (
                    <span className="text-[13px] text-[#999]">当前版本整理中，可根据项目情况提供</span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/zh/insights" className="btn-primary text-[14px] px-5 py-3 min-h-[48px]">阅读市场进入洞察</Link>
              <span className="text-[13px] text-[#999] self-center">所有清单均可申请领取，无强制后续义务</span>
            </div>
          </div>
        </section>

        {/* ===== 14. FAQ（10个问题） ===== */}
        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <p className="text-label mb-3">常见问题</p>
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight max-w-[700px] mb-8">
              你可能想问的问题
            </h2>
            <div className="space-y-3">
              {[
                {
                  q: '我们现在还没有客户，适合联系 CCBONLINE 吗？',
                  a: '适合。很多项目正是在客户开发之前，需要先判断产品、资料和责任链是否准备好。如果基础没打好就去找客户，反而可能因为资料不全、责任不清而错失机会。',
                },
                {
                  q: '你们是否直接负责认证、清关或法律服务？',
                  a: '不直接负责。我们可以协助企业识别问题、准备资料、提出问题清单并对接相关专业机构。涉及认证、清关、法律、税务和保险的具体执行和正式意见，应由对应专业机构完成。',
                },
                {
                  q: '初步诊断会看哪些内容？',
                  a: '通常包括：产品类别、目标市场、当前业务阶段、英文资料与网站状态、认证路径、进口责任主体安排、本地承接能力、展会或客户线索跟进状态，以及当前最大的障碍是什么。',
                },
                {
                  q: '加拿大和美国市场可以一起评估吗？',
                  a: '可以一起评估，但需要区分两个市场的规则。加拿大和美国在认证路径、进口安排、税务、标签要求和法律责任方面存在差异，不能简单套用同一套方案。我们会根据你的产品类别和目标，建议优先进入哪个市场。',
                },
                {
                  q: 'IOR / 进口责任主体一定要先确定吗？',
                  a: '不一定要在进入第一天就确定，但必须在第一票货发出之前明确。IOR 涉及法律责任、税务和海关合规，不同的安排方式（自有实体、分销商、第三方代理）对控制权和成本影响很大。越早理清越好。',
                },
                {
                  q: '我们已经有分销商了，还需要责任链梳理吗？',
                  a: '尤其需要。找到分销商不等于责任链已经理清。进口责任、保修处理、售后支持、客户关系归属、品牌问题回应——这些都需要在签约前或合作初期明确，否则后续容易产生纠纷。',
                },
                {
                  q: '你们能不能直接帮我们找客户？',
                  a: '我们不承诺"帮你找客户"或"保证成交"。我们的工作是帮助你在找客户之前，把资料、责任链、网站可信度和跟进流程准备好，让你在接触客户时有更高的成功概率。我们也会根据项目需要，协助对接渠道资源和商业活动机会。',
                },
                {
                  q: '网站诊断和普通建站有什么不同？',
                  a: '我们不提供建站服务。网站诊断是从北美买家视角评估你的英文网站是否可信、清晰、专业——包括内容质量、认证展示、联系信息、信任信号等。诊断后，你可以根据我们的建议自行修改或找建站公司执行。',
                },
                {
                  q: '服务商如何向中加商业在线提交服务资源？',
                  a: '加拿大本地服务商可以通过资源页面了解提交方式。我们接受认证检测、物流仓储、法律税务、商业咨询、媒体传播、渠道服务等类型的服务商信息。我们会根据企业的实际需求和产品类别，判断是否有匹配的资源对接机会。',
                },
                {
                  q: '初步诊断之后一定要继续付费合作吗？',
                  a: '不一定。初步诊断的目的是帮你判断当前阶段和最需要处理的问题。如果问题比较简单，我们会直接告诉你该怎么做，不需要继续合作。如果问题较复杂、需要深入分析或长期跟进，我们会说明服务范围和大概节奏，由你决定是否继续。',
                },
              ].map((faq, i) => (
                <details key={i} className="border border-[#E5E5E5] bg-[#F8F9FA]">
                  <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                    <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">{faq.q}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                  </summary>
                  <div className="px-4 pb-4 md:px-5 md:pb-5">
                    <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">{faq.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 15. 专业服务边界说明 ===== */}
        <section className="section-padding bg-[#F8F9FA]">
          <div className="container-site">
            <div className="max-w-[800px] p-5 md:p-6 bg-white border border-[#E5E5E5]">
              <h3 className="text-[16px] font-semibold mb-3">专业服务边界说明</h3>
              <p className="text-[14px] text-[#767676] leading-[1.65] mb-3">
                CCBONLINE 的工作重点是市场进入判断、资料准备、责任链梳理、本地资源协调和项目推进支持。我们协助企业识别问题、整理信息、准备沟通材料，并对接相关专业服务资源。
              </p>
              <p className="text-[14px] text-[#767676] leading-[1.65] mb-3">
                涉及法律、税务、认证、保险、报关、监管申报的事项，应由对应专业机构执行或确认。CCBONLINE 可以帮助企业准备问题清单、整理背景资料、协调沟通节奏，但不提供正式的法律意见、税务建议、认证服务、保险安排或报关代理。
              </p>
              <p className="text-[14px] text-[#767676] leading-[1.65]">
                本网站内容用于市场进入前期判断和商业信息参考，不构成法律、税务、保险、认证或监管合规意见。加拿大和美国在市场进入规则、认证路径、税务安排和法律责任方面存在差异，需分别评估。
              </p>
            </div>
          </div>
        </section>

        {/* ===== 16. Start Here ===== */}
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
                <Link to="/zh/insights" className="text-[14px] font-medium text-[#00A884] hover:underline">阅读洞察 →</Link>
              </div>
              <div className="p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
                <p className="text-[11px] text-[#999] uppercase tracking-wider mb-3">有具体问题</p>
                <h3 className="text-[17px] font-semibold mb-3">遇到了具体挑战？</h3>
                <p className="text-[14px] text-[#767676] leading-[1.6] mb-4">提交你的产品和情况，我们会审阅并推荐适合你阶段的服务。</p>
                <Link to="/zh/contact" className="text-[14px] font-medium text-[#00A884] hover:underline">申请初步诊断 →</Link>
              </div>
              <div className="p-6 bg-[#F8F9FA] border border-[#E5E5E5]">
                <p className="text-[11px] text-[#999] uppercase tracking-wider mb-3">准备推进</p>
                <h3 className="text-[17px] font-semibold mb-3">准备好往前走了？</h3>
                <p className="text-[14px] text-[#767676] leading-[1.6] mb-4">预约咨询，与本地顾问讨论你的市场进入项目。</p>
                <Link to="/zh/contact" className="text-[14px] font-medium text-[#00A884] hover:underline">预约咨询 →</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 17. Final CTA ===== */}
        <section className="section-padding bg-[#07111F]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-4">
                准备判断你的加拿大及北美市场进入条件了吗？
              </h2>
              <p className="text-white/60 text-[15px] leading-[1.65] mb-6">
                告诉我们你现在的阶段、产品类别、目标市场和主要障碍。我们会先帮你判断当前最应该处理的是什么，而不是直接推荐一堆服务。
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
