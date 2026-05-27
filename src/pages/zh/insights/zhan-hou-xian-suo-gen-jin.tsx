import { useEffect } from 'react'
import { Link } from 'react-router'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import useSEO from '../../../hooks/useSEO'

export default function ZH_ZhanHouXianSuoGenJin() {
  useSEO({
    title: '展会后线索跟进的最佳做法 | 中加商业在线 CCBONLINE INC.',
    description: '中国制造商如何在加拿大和北美将展会线索转化为真正机会。结构化跟进时间线、邮件模板和常见错误。',
    canonical: 'https://www.ccbonline.ca/zh/insights/zhan-hou-xian-suo-gen-jin',
    ogType: 'article',
    lang: 'zh',
  })
  useEffect(() => {
    document.title = '展会后线索跟进的最佳做法 | 中加商业在线 CCBONLINE INC.'
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-[100dvh]">
      <Navbar lang="zh" />
      <main>
        <article className="pt-[100px] pb-[50px] md:pt-[140px] md:pb-[70px] bg-[#F8F9FA]">
          <div className="container-site">
            <p className="text-label mb-3">渠道开发</p>
            <h1 className="font-serif text-[#212121] text-[26px] sm:text-[30px] md:text-[38px] leading-[1.3] tracking-tight max-w-[800px] mb-4">
              展会后线索跟进的最佳做法
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#444] leading-[1.65] max-w-[720px] italic">
              展会不是打包展台就结束。大多数中国制造商在展会结束后的前两周就失去了 70-80% 的展会价值——不是因为线索不好，而是因为跟进没有结构、延迟或文化不匹配。
            </p>
          </div>
        </article>

        <article className="section-padding bg-white">
          <div className="container-site max-w-[800px]">
            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                48 小时规则
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7] mb-4">
                北美买家期望在展会会面后 48 小时内收到初步跟进。不是一周后。不是回到中国后。是 48 小时内。
              </p>
              <p className="text-[15px] md:text-[16px] text-[#444] leading-[1.7]">
                这并不意味着你需要在 48 小时内提供完整方案。而是一封简短的、个性化的邮件，提到你们的对话内容，确认讨论了什么，并概述下一步。目标是在买家还记得你的展位时保持对话继续。
              </p>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-5">
                结构化跟进时间线
              </h2>
              <div className="space-y-4">
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h4 className="font-semibold text-[15px] mb-1">第 0-2 天（展会期间）</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">立即筛选线索。记录买家的角色、兴趣、时间线和具体问题。拍名片或胸牌照片。在每个展会日结束前给每个线索评级 A（热）、B（温）或 C（冷）。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h4 className="font-semibold text-[15px] mb-1">第 2-3 天（首次跟进）</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">给 A 和 B 级线索发送个性化邮件。提到你们的具体对话。包含明确的下一步——不是"有需要请联系我们"，而是"我会在周四前发给你产品规格表，这个时间可以吗？"</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h4 className="font-semibold text-[15px] mb-1">第 7-10 天（二次跟进）</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">发送承诺的材料。附简要说明，总结买家询问的相关产品优势。如果你承诺了样品或报价，现在交付。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h4 className="font-semibold text-[15px] mb-1">第 14-21 天（三次跟进）</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">确认他们是否收到并审阅了材料。问关于他们评估流程和时间线的具体问题。提议视频通话来详细讲解产品或回答技术问题。</p>
                </div>
                <div className="p-4 bg-[#F8F9FA] border border-[#E5E5E5]">
                  <h4 className="font-semibold text-[15px] mb-1">第 30-45 天（培育或推进）</h4>
                  <p className="text-[14px] text-[#444] leading-[1.6]">对于沉默的线索，发送简短的有价值信息——相关行业洞察、新产品更新或参考案例。对于活跃线索，提出具体下一步：样品订单、分销商会议或工厂参观。</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                常见跟进错误
              </h2>
              <div className="space-y-4">
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">群发通用邮件</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">"尊敬的先生/女士，感谢您参观我们的展位"——这表示你不记得对话了。每封邮件都要个性化，提到讨论内容。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">没有明确的下一步</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">以"有任何需要请联系我们"结尾，把负担推给了买家。提出一个具体的下一步行动和时间线。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">在错误时区跟进</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">因为中国的工作时间发邮件，导致多伦多时间凌晨 2 点送达，你的邮件会被埋在 50 封其他邮件下面。安排邮件在北美工作时间送达。</p>
                </div>
                <div className="pl-4 border-l-2 border-[#D4AF37]">
                  <h4 className="font-semibold text-[15px] mb-1">一两次尝试后就放弃</h4>
                  <p className="text-[14px] text-[#767676] leading-[1.6]">北美买家很忙。他们可能不回复第一封甚至第二封邮件。6-8 周内 5-6 次触达的结构化跟进是正常的，不是骚扰。</p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="font-serif text-[#212121] text-[22px] md:text-[26px] leading-[1.35] tracking-tight mb-4">
                相关资源
              </h2>
              <ul className="space-y-2">
                <li><Link to="/zh/services/channel-local-landing" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">渠道策略与本地落地服务 →</Link></li>
                <li><Link to="/zh/services/customer-channel-validation" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">客户与渠道验证 →</Link></li>
                <li><Link to="/zh/insights/qu-dao-kai-fa-bu-shi-qun-fa-you-jian" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">渠道开发不是群发邮件 →</Link></li>
                <li><Link to="/zh/contact" className="text-[14px] md:text-[15px] text-[#00B894] hover:underline">联系 CCBONLINE →</Link></li>
              </ul>
            </div>

            <div className="p-6 md:p-8 bg-[#0B0E14] text-center">
              <h3 className="font-serif text-white text-[20px] md:text-[24px] leading-[1.35] mb-3">
                需要帮助搭建展会跟进系统？
              </h3>
              <p className="text-white/70 text-[14px] md:text-[15px] leading-[1.6] max-w-[500px] mx-auto mb-6">
                我们帮助制造商建立跟进系统，将展会联系人转化为真正的商业机会。
              </p>
              <Link to="/zh/contact" className="btn-primary inline-block text-[15px] px-8 py-3.5 min-h-[52px]">
                咨询展会支持服务
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer lang="en" />
    </div>
  )
}
