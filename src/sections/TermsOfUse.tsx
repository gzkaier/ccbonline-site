import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function TermsOfUse() {
  const { t } = useLanguage()

  useEffect(() => {
    document.title = t('Terms of Use — CCBONLINE INC.', '使用条款 — CCBONLINE INC.')
    window.scrollTo(0, 0)
  }, [t])

  const sections = [
    {
      h: t('1. Acceptance of Terms', '1. 条款接受'),
      p: t(
        'By accessing and using ccbonline.ca ("the Website"), you agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use the Website.',
        '访问和使用 ccbonline.ca（"本网站"）即表示您同意受本使用条款约束。如果您不同意这些条款，请不要使用本网站。'
      ),
    },
    {
      h: t('2. Use of the Website', '2. 网站使用'),
      p: t(
        'The Website is provided for informational purposes about CCBONLINE INC. and its services. You may use the Website for lawful purposes only.',
        '本网站用于提供关于 CCBONLINE INC. 及其服务的信息。您仅可将本网站用于合法目的。'
      ),
    },
    {
      h: t('3. Intellectual Property', '3. 知识产权'),
      p: t(
        'All content on the Website is the property of CCBONLINE INC. or its content suppliers and is protected by Canadian and international copyright laws. You may not reproduce, modify, distribute, or republish any content without prior written consent.',
        '本网站上的所有内容均为 CCBONLINE INC. 或其内容供应商的财产，受加拿大和国际版权法保护。未经事先书面同意，您不得复制、修改、分发或重新发布任何内容。'
      ),
    },
    {
      h: t('4. Disclaimer', '4. 免责声明'),
      p: t(
        'The Website and its content are provided "as is" without warranties of any kind. CCBONLINE INC. does not warrant that the Website will be uninterrupted, error-free, or free of viruses. The information on this Website is for general guidance only and does not constitute professional advice.',
        '本网站及其内容按"原样"提供，不提供任何形式的担保。CCBONLINE INC. 不保证本网站不会中断、无错误或不含病毒。本网站上的信息仅供一般指导，不构成专业建议。'
      ),
    },
    {
      h: t('5. Limitation of Liability', '5. 责任限制'),
      p: t(
        'CCBONLINE INC. shall not be liable for any direct, indirect, incidental, special, or consequential damages arising from your use of the Website or any information contained therein.',
        'CCBONLINE INC. 不对因您使用本网站或其中包含的任何信息而产生的任何直接、间接、偶然、特殊或后果性损害承担责任。'
      ),
    },
    {
      h: t('6. Governing Law', '6. 适用法律'),
      p: t(
        'These Terms of Use are governed by and construed in accordance with the laws of the Province of Ontario, Canada.',
        '本使用条款受加拿大安大略省法律管辖并按其解释。'
      ),
    },
    {
      h: t('7. Changes to Terms', '7. 条款变更'),
      p: t(
        'CCBONLINE INC. reserves the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the Website.',
        'CCBONLINE INC. 保留随时修改这些使用条款的权利。变更将在发布到本网站后立即生效。'
      ),
    },
    {
      h: t('8. Contact', '8. 联系'),
      p: t('For questions about these Terms of Use, please contact us at:', '如有关于这些使用条款的问题，请联系我们：'),
    },
  ]

  return (
    <div className="pt-[100px] pb-[60px] md:pt-[140px] md:pb-[80px] bg-white">
      <div className="container-site max-w-[800px]">
        <p className="text-label mb-3">{t('Legal', '法律')}</p>
        <h1 className="font-serif text-[#212121] text-[5vw] md:text-[2.2vw] leading-[1.35] md:leading-[1.3] tracking-tight mb-10">
          {t('Terms of Use', '使用条款')}
        </h1>
        <div className="space-y-8 text-[14px] text-[#555] leading-[1.8]">
          {sections.map((s, i) => (
            <section key={i}>
              <h2 className="text-[15px] font-semibold text-[#212121] mb-3">{s.h}</h2>
              <p>{s.p}</p>
              {i === sections.length - 1 && (
                <p className="mt-3 text-[#212121] font-medium">info@ccbonline.ca</p>
              )}
            </section>
          ))}
        </div>
        <p className="text-[12px] text-[#999] mt-12 pt-6 border-t border-[#E5E5E5]">
          {t('Last updated:', '最后更新：')} {new Date().toLocaleDateString('en-CA')}
        </p>
      </div>
    </div>
  )
}
