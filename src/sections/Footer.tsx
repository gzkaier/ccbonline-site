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
                'A Canada-registered consulting and digital growth partner for Chinese businesses entering North America.',
                '注册于加拿大的咨询与数字增长合作伙伴，面向进入北美市场的中国企业。'
              )}
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-medium uppercase tracking-wider text-white/35 mb-4">
              {t('Navigation', '导航')}
            </h4>
            <div className="space-y-2">
              {[
                { en: 'Home', zh: '首页', href: '/' },
                { en: 'Services', zh: '服务', href: '/services' },
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
              <p>ccbonline.ca</p>
              <p className="text-white/25">Toronto, Canada</p>
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
