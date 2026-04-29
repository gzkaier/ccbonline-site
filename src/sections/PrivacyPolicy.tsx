import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function PrivacyPolicy() {
  const { t } = useLanguage()

  useEffect(() => {
    document.title = t('Privacy Policy — CCBONLINE INC.', '隐私政策 — CCBONLINE INC.')
    window.scrollTo(0, 0)
  }, [t])

  const sections = [
    {
      h: t('1. Introduction', '1. 引言'),
      p: t(
        'CCBONLINE INC. ("we", "us", or "our") respects your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you visit ccbonline.ca or contact us through our website.',
        'CCBONLINE INC.（"我们"）尊重您的隐私。本隐私政策说明我们在您访问 ccbonline.ca 或通过网站联系我们时如何收集、使用和保护您的个人信息。'
      ),
    },
    {
      h: t('2. Information We Collect', '2. 我们收集的信息'),
      p: t(
        'When you submit an inquiry through our contact form, we collect: your name, company name, email address, phone number, products or services description, target market goals, current challenges, and any additional message you provide.',
        '当您通过联系表单提交咨询时，我们收集：您的姓名、公司名称、邮箱地址、电话号码、产品或服务描述、目标市场目标、当前挑战以及您提供的任何附加留言。'
      ),
    },
    {
      h: t('3. How We Use Your Information', '3. 信息使用方式'),
      p: t(
        'We use your information solely to respond to your inquiry, assess whether our services can help your business, and communicate with you about potential next steps. We do not use your information for marketing purposes without your explicit consent.',
        '我们仅将您的信息用于回复您的咨询、评估我们的服务是否可以帮助您的企业，以及就可能的后续步骤与您沟通。未经您明确同意，我们不会将您的信息用于营销目的。'
      ),
    },
    {
      h: t('4. Information Sharing', '4. 信息共享'),
      p: t(
        'We do not sell, trade, or share your personal information with third parties. Your information is only accessible to CCBONLINE INC. team members involved in responding to your inquiry.',
        '我们不会出售、交易或与第三方分享您的个人信息。您的信息仅对参与回复您咨询的 CCBONLINE INC. 团队成员可访问。'
      ),
    },
    {
      h: t('5. Data Retention', '5. 数据保留'),
      p: t(
        'We retain your contact information for as long as necessary to respond to your inquiry and maintain business records. You may request deletion of your information at any time by contacting info@ccbonline.ca.',
        '我们在必要的时间内保留您的联系信息，以回复您的咨询并维护业务记录。您可以随时通过 info@ccbonline.ca 要求删除您的信息。'
      ),
    },
    {
      h: t('6. Contact Us', '6. 联系我们'),
      p: t('If you have questions about this Privacy Policy, please contact us at:', '如果您对本隐私政策有疑问，请联系我们：'),
    },
  ]

  return (
    <div className="pt-[100px] pb-[60px] md:pt-[140px] md:pb-[80px] bg-white">
      <div className="container-site max-w-[800px]">
        <p className="text-label mb-3">{t('Legal', '法律')}</p>
        <h1 className="font-serif text-[#212121] text-[5vw] md:text-[2.2vw] leading-[1.35] md:leading-[1.3] tracking-tight mb-10">
          {t('Privacy Policy', '隐私政策')}
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
