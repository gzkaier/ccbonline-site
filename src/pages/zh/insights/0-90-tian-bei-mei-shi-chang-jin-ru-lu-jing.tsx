import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'

export default function ZH_90TianBeiMeiShiChangJinRuLuJing() {
  useEffect(() => {
    document.title = '北美市场进入的 0–90 天路径 | CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <section className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">市场进入</p>
            <h1 className="font-serif text-[#212121] text-[28px] md:text-[36px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              北美市场进入的 0–90 天路径
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              北美市场进入的前 90 天应该遵循一个从诊断和合规映射、经过渠道验证到主动客户互动的结构化进程，每个阶段都为下一个阶段奠定运营基础。
            </p>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              为什么这件事重要
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              大多数市场进入失败不是产品不好，而是跳了步骤。还没搞清楚合规要求就急着去见客户，还没验证产品市场匹配就签了经销协议，还没建立本地保修能力就发了货。一个结构化的 90 天路线图能防止这些错误——按正确的顺序做事：先理解市场和自己的准备程度，再搭建运营基础，然后以准备充分的姿态去接触客户与合作伙伴。这种有纪律的方法还能帮你在总部争取资源和支持，因为每一步都有清晰的里程碑和交付物。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              常见误区
            </h2>
            <div className="p-5 md:p-6 bg-[#FFF8F8] border border-[#F0D0D0] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                最常见的误区是把速度当成成功——觉得谁先进场谁就赢了。实际上，准备最充分的人赢。还没准备好就去见客户，留下的负面第一印象很难挽回。另一个误区是 90 天从"决定进入"开始算。其实准备工作应该在几个月前就开始，90 天是指准备就绪确认之后的主动市场推进阶段。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              企业应该先看什么
            </h2>
            <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-10">
              90 天内应该聚焦这些阶段：（1）第 0-30 天：完成市场就绪度诊断，包括产品适配、认证缺口、竞争定位和运营要求。（2）第 15-45 天：制定合规路径，明确认证时间线、进口记录责任人结构、标签要求。（3）第 30-60 天：开始渠道验证，通过精准外联、展会或合作伙伴介绍接触潜在渠道。（4）第 45-75 天：建立本地支持能力——保修流程、服务联系人、库存或履约安排。（5）第 60-90 天：在定位和支持能力都已就位的前提下，开始首批结构化客户对话。
            </p>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              CCBONLINE 的判断
            </h2>
            <div className="p-5 md:p-6 bg-[#F8F9FA] border border-[#E5E5E5] mb-10">
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                CCBONLINE 的每个客户项目都围绕一个定制版的 90 天路线图展开，根据企业的产品、资源和目标做调整。关键洞察是这些阶段有交叉重叠——渠道验证可以在合规完成前启动，客户对话可以反哺合规的优先级排序。但没有任何一个步骤应该被跳过。试图两周内从"决定进入"跳到"首次客户会面"的企业，通常浪费更多时间并损害市场信誉。按结构化流程走的企业，积累的动能会随时间复合增长。
              </p>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-6">
              下一步动作
            </h2>
            <ul className="space-y-3 mb-10">
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">用结构化诊断工具评估当前的市场进入就绪度</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">识别产品认证要求和合规路径</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">绘制潜在渠道伙伴并开始精准外联</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">在第一笔销售之前建立本地保修和服务能力</li>
              <li className="text-[14px] md:text-[15px] text-[#444] leading-[1.65] pl-4 border-l-2 border-[#C00000]">联系 CCBONLINE 获取定制的 90 天市场进入路线图</li>
            </ul>
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
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">前 30 天最重要的事是什么？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">完成诚实的市场就绪度诊断。了解自己的认证缺口、竞争定位和运营要求，然后再去见客户。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">合规还没完成，可以先跟客户聊吗？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">可以，但要透明说明时间线。很多买家愿意等一个准备充分的供应商。不要承诺你做不到交期。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">前 90 天应该准备多少预算？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">因产品和认证要求而异，但大多数企业应该计划 1.5-5 万美元，覆盖诊断、认证启动、差旅和初期物料。</p>
                </div>
              </details>
              <details className="border border-[#E5E5E5] bg-white">
                <summary className="flex items-center justify-between p-4 md:p-5 cursor-pointer list-none">
                  <span className="text-[15px] md:text-[16px] font-medium pr-4 leading-[1.5]">第 90 天之后呢？</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0 text-[#767676]"><path d="m6 9 6 6 6-6"/></svg>
                </summary>
                <div className="px-4 pb-4 md:px-5 md:pb-5">
                  <p className="text-[14px] md:text-[15px] text-[#555] leading-[1.65]">第 90 天是开始，不是结束。你应该有了验证过的产品市场匹配、活跃的伙伴对话和清晰的合规时间线。下一阶段是把验证转化为签约和首单。</p>
                </div>
              </details>
            </div>

            <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
              相关阅读
            </h2>
            <ul className="space-y-2 mb-8">
              <li><Link to="/zh/services" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">市场进入服务</Link></li>
              <li><Link to="/zh/canada-market-entry" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">加拿大市场进入</Link></li>
              <li><Link to="/zh/insights/bei-mei-shi-chang-jin-ru-bu-shi-mai-huo" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">北美市场进入，不是把货卖出去</Link></li>
              <li><Link to="/zh/insights/bei-mei-shi-chang-jin-ru-ze-ren-lian" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">北美市场进入的核心，是责任链</Link></li>
              <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#C00000] hover:underline">联系 CCBONLINE</Link></li>
            </ul>
          </div>
        </section>

        <section className="section-padding bg-[#1a1a2e]">
          <div className="container-site">
            <div className="max-w-[700px]">
              <h2 className="font-serif text-white text-[24px] md:text-[32px] leading-[1.35] tracking-tight mb-6">
                想了解更多关于市场进入规划的内容？
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
