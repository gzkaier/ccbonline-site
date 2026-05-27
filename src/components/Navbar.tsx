import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  lang: 'en' | 'zh'
}

const enNav = [
  { label: 'Home', href: '/en' },
  { label: 'Services', href: '/en/services' },
  { label: 'Market Entry', href: '/en/market-entry' },
  { label: 'Business Media', href: '/en/media-content' },
  { label: 'Insights', href: '/en/insights' },
  { label: 'About', href: '/en/about' },
  { label: 'Contact', href: '/en/contact' },
]

const zhNav = [
  { label: '首页', href: '/zh' },
  { label: '服务', href: '/zh/services' },
  { label: '市场进入', href: '/zh/market-entry' },
  { label: '商业媒体', href: '/zh/media-content' },
  { label: '洞察', href: '/zh/insights' },
  { label: '关于我们', href: '/zh/about' },
  { label: '联系我们', href: '/zh/contact' },
]

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
  const navLinks = lang === 'en' ? enNav : zhNav
  const isActive = (href: string) => location.pathname === href

  // Language switch URL
  const switchLang = lang === 'en' ? location.pathname.replace('/en', '/zh') : location.pathname.replace('/zh', '/en')

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

          <div className="hidden lg:flex items-center gap-6">
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
            <Link
              to={switchLang}
              className="text-[12px] font-medium px-3 py-1.5 border transition-all duration-200 hover:border-[#00B894] hover:text-[#00B894]"
              style={{
                color: scrolled || !isHome ? '#212121' : '#fff',
                borderColor: scrolled || !isHome ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.3)',
              }}
            >
              {lang === 'en' ? '中文' : 'EN'}
            </Link>
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
              {lang === 'en' ? 'Home' : '首页'}
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
            <div className="w-full max-w-[280px] pt-4 border-t border-[#E5E5E5] flex flex-col gap-3">
              <Link
                to={lang === 'en' ? '/en/contact' : '/zh/contact'}
                onClick={() => { setMenuOpen(false); document.body.style.overflow = '' }}
                className="btn-primary text-[15px] py-3.5 text-center"
              >
                {lang === 'en' ? 'Book a Consultation' : '预约咨询'}
              </Link>
              <Link
                to={switchLang}
                onClick={() => { setMenuOpen(false); document.body.style.overflow = '' }}
                className="text-[14px] font-medium py-3 text-center border border-[#E5E5E5] text-[#212121]"
              >
                {lang === 'en' ? '切换到中文' : 'Switch to English'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
