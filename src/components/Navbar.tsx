import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  lang: 'en' | 'zh' | 'fr'
}

const enNav = [
  { label: 'Home', href: '/en' },
  { label: 'Market Entry', href: '/en/market-entry' },
  { label: 'Credibility Audit', href: '/en/services/website-credibility-audit' },
  { label: 'Business Connection', href: '/en/business-connection' },
  { label: 'Insights', href: '/en/insights' },
  { label: 'About', href: '/en/about' },
  { label: 'Contact', href: '/en/contact' },
]

const zhNav = [
  { label: '首页', href: '/zh' },
  { label: '市场进入', href: '/zh/market-entry' },
  { label: '可信度诊断', href: '/zh/services/website-credibility-audit' },
  { label: '商业连接', href: '/zh/business-connection' },
  { label: '洞察', href: '/zh/insights' },
  { label: '关于我们', href: '/zh/about' },
  { label: '联系我们', href: '/zh/contact' },
]

const frNav = [
  { label: 'Accueil', href: '/fr' },
  { label: 'Contact', href: '/fr/contact' },
]

const allNavs: Record<string, typeof enNav> = { en: enNav, zh: zhNav, fr: frNav }

// Language switch map: for each lang, the other two lang paths
function getLangSwitchPaths(_currentLang: string, pathname: string) {
  // Strip leading /en, /zh, /fr
  const rest = pathname.replace(/^\/(en|zh|fr)/, '') || ''
  return {
    en: `/en${rest}`,
    zh: `/zh${rest}`,
    fr: `/fr${rest}`,
  }
}

export default function Navbar({ lang }: NavbarProps) {
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    if (typeof document !== 'undefined') document.body.style.overflow = ''
  }, [location.pathname])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = menuOpen ? '' : 'hidden'
    }
  }

  const isHome = location.pathname === `/${lang}`
  const navLinks = allNavs[lang] || enNav
  const isActive = (href: string) => location.pathname === href

  // Language switch URLs
  const langPaths = getLangSwitchPaths(lang, location.pathname)

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
        style={{
          backgroundColor: scrolled || !isHome ? 'rgba(255,255,255,0.97)' : 'transparent',
          backdropFilter: scrolled || !isHome ? 'blur(8px)' : 'none',
          borderBottom: scrolled || !isHome ? '1px solid hsl(var(--border))' : 'none',
        }}
      >
        <div className="container-site h-[60px] md:h-[72px] flex items-center justify-between">
          <Link
            to={`/${lang}`}
            className="flex items-center gap-2 z-50"
          >
            <img
              src="/images/ccbonline-logo.png"
              alt="CCBONLINE INC."
              className="h-[36px] md:h-[42px] w-auto"
              style={{ filter: (scrolled || !isHome) && !menuOpen ? 'none' : 'brightness(0) invert(1)' }}
            />
            <span
              className="text-[15px] md:text-[16px] font-semibold tracking-wide uppercase hidden sm:inline"
              style={{ color: (scrolled || !isHome) && !menuOpen ? '#212121' : '#fff' }}
            >
              CCBONLINE INC.
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[13px] font-medium transition-all duration-200 ${isActive(link.href) ? 'text-[#00B894]' : 'hover:text-[#00B894]'}`}
                style={{ color: scrolled || !isHome ? (isActive(link.href) ? '#00B894' : '#212121') : '#fff' }}
              >
                {link.label}
              </Link>
            ))}
            {/* Language switcher */}
            <div className="flex items-center gap-1 text-[12px] font-medium">
              {(['en', 'zh', 'fr'] as const).map((l, i) => (
                <span key={l} className="flex items-center gap-1">
                  {i > 0 && <span className="text-white/30" style={{ color: scrolled || !isHome ? '#ccc' : 'rgba(255,255,255,0.3)' }}>|</span>}
                  <Link
                    to={langPaths[l]}
                    className={`px-1.5 py-0.5 transition-all duration-200 ${lang === l ? 'text-[#00B894]' : 'hover:text-[#00B894]'}`}
                    style={{ color: scrolled || !isHome ? (lang === l ? '#00B894' : '#212121') : (lang === l ? '#00B894' : '#fff') }}
                  >
                    {l === 'en' ? 'EN' : l === 'zh' ? '中文' : 'FR'}
                  </Link>
                </span>
              ))}
            </div>
          </div>

          <button
            className="lg:hidden p-2 -mr-2 z-50"
            onClick={toggleMenu}
            style={{ color: (scrolled || !isHome) && !menuOpen ? '#212121' : '#fff' }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
            <Link
              to={`/${lang}`}
              onClick={() => { setMenuOpen(false); document.body.style.overflow = '' }}
              className={`text-[20px] font-semibold ${isActive(`/${lang}`) ? 'text-[#00B894]' : 'text-[#212121] hover:text-[#00B894]'}`}
            >
              {lang === 'en' ? 'Home' : lang === 'zh' ? '首页' : 'Accueil'}
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => { setMenuOpen(false); document.body.style.overflow = '' }}
                className={`text-[20px] font-semibold ${isActive(link.href) ? 'text-[#00B894]' : 'text-[#212121] hover:text-[#00B894]'}`}
              >
                {link.label}
              </Link>
            ))}
            {/* Mobile language switcher */}
            <div className="flex items-center gap-3 pt-4 border-t border-[#E5E5E5]">
              {(['en', 'zh', 'fr'] as const).map((l) => (
                <Link
                  key={l}
                  to={langPaths[l]}
                  onClick={() => { setMenuOpen(false); document.body.style.overflow = '' }}
                  className={`text-[16px] font-medium ${lang === l ? 'text-[#00B894]' : 'text-[#767676]'}`}
                >
                  {l === 'en' ? 'EN' : l === 'zh' ? '中文' : 'FR'}
                </Link>
              ))}
            </div>
            <div className="w-full max-w-[280px] pt-2 flex flex-col gap-3">
              <Link
                to={lang === 'fr' ? '/fr/contact' : lang === 'en' ? '/en/contact' : '/zh/contact'}
                onClick={() => { setMenuOpen(false); document.body.style.overflow = '' }}
                className="btn-primary text-[15px] py-3.5 text-center"
              >
                {lang === 'en' ? 'Book a Consultation' : lang === 'zh' ? '预约咨询' : 'Nous contacter'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
