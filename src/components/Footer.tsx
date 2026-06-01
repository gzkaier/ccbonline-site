import { Link } from 'react-router'

interface FooterProps {
  lang: 'en' | 'zh' | 'fr'
}

const enLinks = [
  { label: 'Home', href: '/en' },
  { label: 'Market Entry', href: '/en/market-entry' },
  { label: 'Credibility Audit', href: '/en/services/website-credibility-audit' },
  { label: 'Business Connection', href: '/en/business-connection' },
  { label: 'Insights', href: '/en/insights' },
  { label: 'About', href: '/en/about' },
  { label: 'Contact', href: '/en/contact' },
]

const zhLinks = [
  { label: '首页', href: '/zh' },
  { label: '市场进入', href: '/zh/market-entry' },
  { label: '可信度诊断', href: '/zh/services/website-credibility-audit' },
  { label: '商业连接', href: '/zh/business-connection' },
  { label: '洞察', href: '/zh/insights' },
  { label: '关于我们', href: '/zh/about' },
  { label: '联系我们', href: '/zh/contact' },
]

const frLinks = [
  { label: 'Accueil', href: '/fr' },
  { label: 'Contact', href: '/fr/contact' },
]

const allLinks: Record<string, typeof enLinks> = { en: enLinks, zh: zhLinks, fr: frLinks }

export default function Footer({ lang }: FooterProps) {
  const links = allLinks[lang] || enLinks
  const cta = lang === 'en' ? 'Book a Consultation' : lang === 'zh' ? '预约咨询' : 'Nous contacter'
  const ctaHref = lang === 'fr' ? '/fr/contact' : lang === 'en' ? '/en/contact' : '/zh/contact'
  const navLabel = lang === 'en' ? 'Navigation' : lang === 'zh' ? '导航' : 'Navigation'
  const contactLabel = lang === 'en' ? 'Contact' : lang === 'zh' ? '联系' : 'Contact'

  const taglines: Record<string, string> = {
    en: 'Cross-Market Business Credibility & Connection Services. Canada-registered. Toronto-based. English · Chinese · French.',
    zh: '跨市场品牌可信度与商业连接服务。加拿大注册。多伦多运营。中文 · English · Français。',
    fr: 'Services de crédibilité et de connexion commerciale intermarchés. Enregistrée au Canada. Basée à Toronto.',
  }
  const tagline = taglines[lang] || taglines.en

  const privacy = lang === 'en' ? 'Privacy Policy' : lang === 'zh' ? '隐私政策' : 'Politique de confidentialité'
  const terms = lang === 'en' ? 'Terms of Use' : lang === 'zh' ? '使用条款' : 'Conditions d\'utilisation'
  const privacyHref = lang === 'fr' ? '/fr/privacy' : lang === 'en' ? '/en/privacy' : '/zh/privacy'
  const termsHref = lang === 'fr' ? '/fr/terms' : lang === 'en' ? '/en/terms' : '/zh/terms'

  const copyrights: Record<string, string> = {
    en: '\u00A9 2020\u20132026 CCBONLINE INC. All rights reserved. Canada-registered business advisory firm.',
    zh: '\u00A9 2020\u20132026 CCBONLINE INC. 保留所有权利。加拿大注册商业顾问公司。',
    fr: '\u00A9 2020\u20132026 CCBONLINE INC. Tous droits r\u00e9serv\u00e9s. Entreprise canadienne de conseil en affaires.',
  }
  const copyright = copyrights[lang] || copyrights.en

  return (
    <footer className="bg-[#1a1a2e] text-white/70">
      <div className="container-site py-14 md:py-18">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
          <div className="md:col-span-5">
            <h3 className="text-[16px] font-semibold text-white mb-3 tracking-wide">CCBONLINE INC.</h3>
            <p className="text-[14px] leading-[1.7] text-white/50 max-w-[320px] mb-5">{tagline}</p>
            <Link to={ctaHref} className="btn-primary text-[13px] py-3 px-5">{cta}</Link>
          </div>
          <div className="md:col-span-3">
            <h4 className="text-[11px] font-medium uppercase tracking-wider text-white/35 mb-4">{navLabel}</h4>
            <div className="space-y-2">
              {links.map((link) => (
                <Link key={link.href} to={link.href} className="text-[13px] hover:text-white transition-colors block">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-medium uppercase tracking-wider text-white/35 mb-4">{contactLabel}</h4>
            <div className="space-y-2 text-[13px]">
              <p>www.ccbonline.ca</p>
              <p>info@ccbonline.ca</p>
              <p>+1 647 568 1128</p>
              <p>84 Kenhar Dr, North York, ON M9L 1N2</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-[11px] text-white/35">{copyright}</p>
          <div className="flex gap-4 text-[11px] text-white/35">
            <Link to={privacyHref} className="hover:text-white/70 transition-colors">{privacy}</Link>
            <Link to={termsHref} className="hover:text-white/70 transition-colors">{terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
