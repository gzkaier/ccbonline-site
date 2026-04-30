import { Link } from 'react-router'

interface FooterProps {
  lang: 'en' | 'zh'
}

export default function Footer({ lang }: FooterProps) {
  const enLinks = [
    { label: 'Canada Market Entry', href: '/en/canada-market-entry' },
    { label: 'Services', href: '/en/services' },
    { label: 'Responsibility Chain', href: '/en/responsibility-chain' },
    { label: 'Insights', href: '/en/insights' },
    { label: 'About', href: '/en/about' },
    { label: 'Contact', href: '/en/contact' },
  ]

  const zhLinks = [
    { label: '加拿大市场进入', href: '/zh/canada-market-entry' },
    { label: '服务', href: '/zh/services' },
    { label: '责任链', href: '/zh/responsibility-chain' },
    { label: '洞察', href: '/zh/insights' },
    { label: '关于', href: '/zh/about' },
    { label: '联系', href: '/zh/contact' },
  ]

  const links = lang === 'en' ? enLinks : zhLinks
  const cta = lang === 'en' ? 'Book a Consultation' : '预约咨询'
  const ctaHref = lang === 'en' ? '/en/contact' : '/zh/contact'
  const tagline = lang === 'en'
    ? 'Canada & North America Market Entry Partner for Chinese Businesses'
    : '中国企业进入加拿大与北美市场的本地化进入顾问'
  const privacy = lang === 'en' ? 'Privacy Policy' : '隐私政策'
  const terms = lang === 'en' ? 'Terms of Use' : '使用条款'
  const privacyHref = lang === 'en' ? '/en/privacy' : '/zh/privacy'
  const termsHref = lang === 'en' ? '/en/terms' : '/zh/terms'
  const copyright = lang === 'en'
    ? '© 2020–2026 CCBONLINE INC. All rights reserved. Canada-registered business advisory firm.'
    : '© 2020–2026 CCBONLINE INC. 保留所有权利。加拿大注册商业咨询公司。'

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
            <h4 className="text-[11px] font-medium uppercase tracking-wider text-white/35 mb-4">
              {lang === 'en' ? 'Navigation' : '导航'}
            </h4>
            <div className="space-y-2">
              {links.map((link) => (
                <Link key={link.href} to={link.href} className="text-[13px] hover:text-white transition-colors block">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-medium uppercase tracking-wider text-white/35 mb-4">
              {lang === 'en' ? 'Contact' : '联系'}
            </h4>
            <div className="space-y-2 text-[13px]">
              <p>info@ccbonline.ca</p>
              <p>+1 647 568 1128</p>
              <p>Toronto, Ontario, Canada</p>
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
