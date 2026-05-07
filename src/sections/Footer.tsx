import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#111] text-white/55">
      <div className="container-site py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">
          <div className="md:col-span-5">
            <Link to="/" className="text-[14px] font-semibold tracking-wide uppercase text-white mb-3 block">
              CCBONLINE INC.
            </Link>
            <p className="text-[13px] leading-[1.7] max-w-[320px]">
              {t(
                'North America market entry advisory and execution support.',
                '中国企业北美市场准入咨询。'
              )}
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-medium uppercase tracking-wider text-white/35 mb-4">
              {t('Navigation', '导航')}
            </h4>
            <div className="space-y-2">
              {[
                { en: 'Canada Market Entry', zh: '加拿大市场进入', href: '/canada-market-entry' },
                { en: 'Services', zh: '服务', href: '/services' },
                { en: 'Responsibility Chain', zh: '责任链', href: '/responsibility-chain' },
                { en: 'Insights', zh: '洞察', href: '/insights' },
                { en: 'About', zh: '关于', href: '/about' },
                { en: 'Contact', zh: '联系', href: '/contact' },
              ].map((link) => (
                <Link key={link.en} to={link.href} className="text-[13px] hover:text-white transition-colors block">
                  {t(link.en, link.zh)}
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-medium uppercase tracking-wider text-white/35 mb-4">
              {t('Legal', '法律')}
            </h4>
            <div className="space-y-2">
              <Link to="/privacy" className="text-[13px] hover:text-white transition-colors block">
                {t('Privacy Policy', '隐私政策')}
              </Link>
              <Link to="/terms" className="text-[13px] hover:text-white transition-colors block">
                {t('Terms of Use', '使用条款')}
              </Link>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-medium uppercase tracking-wider text-white/35 mb-4">
              {t('Contact', '联系')}
            </h4>
            <div className="space-y-2 text-[13px]">
              <p>info@ccbonline.ca</p>
              <p>+1 647 568 1128</p>
              <p>ccbonline.ca</p>
              <p className="text-white/25">84 Kenhar Dr, North York, ON M9L 1N2</p>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-5 border-t border-white/8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="text-[11px] text-white/25">
            © {new Date().getFullYear()} CCBONLINE INC. {t('All rights reserved.', '保留所有权利。')}
          </p>
          <p className="text-[11px] text-white/15">
            info@ccbonline.ca · ccbonline.ca
          </p>
        </div>
      </div>
    </footer>
  )
}
