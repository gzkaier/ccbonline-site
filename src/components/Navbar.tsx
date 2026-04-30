import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  lang: 'en' | 'zh'
}

const enNav = [
  { label: 'Canada Market Entry', href: '/en/canada-market-entry' },
  { label: 'Services', href: '/en/services' },
  { label: 'Responsibility Chain', href: '/en/responsibility-chain' },
  { label: 'Insights', href: '/en/insights' },
  { label: 'About', href: '/en/about' },
  { label: 'Contact', href: '/en/contact' },
]

const zhNav = [
  { label: '加拿大市场进入', href: '/zh/canada-market-entry' },
  { label: '服务', href: '/zh/services' },
  { label: '责任链', href: '/zh/responsibility-chain' },
  { label: '洞察', href: '/zh/insights' },
  { label: '关于', href: '/zh/about' },
  { label: '联系', href: '/zh/contact' },
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
        <div className="container-site h-[56px] md:h-[64px] flex items-center justify-between">
          <Link
            to={`/${lang}`}
            className="text-[15px] font-semibold tracking-wide uppercase z-50"
            style={{ color: (scrolled || !isHome) && !menuOpen ? '#212121' : '#fff' }}
          >
            CCBONLINE INC.
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-[13px] font-medium transition-all duration-200 ${isActive(link.href) ? 'text-[#C00000]' : 'hover:text-[#C00000]'}`}
                style={{ color: scrolled || !isHome ? (isActive(link.href) ? '#C00000' : '#212121') : '#fff' }}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to={switchLang}
              className="text-[12px] font-medium px-3 py-1.5 border transition-all duration-200 hover:border-[#C00000] hover:text-[#C00000]"
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
              className={`text-[20px] font-semibold ${isActive(`/${lang}`) ? 'text-[#C00000]' : 'text-[#212121] hover:text-[#C00000]'}`}
            >
              {lang === 'en' ? 'Home' : '首页'}
            </Link>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => { setMenuOpen(false); document.body.style.overflow = '' }}
                className={`text-[20px] font-semibold ${isActive(link.href) ? 'text-[#C00000]' : 'text-[#212121] hover:text-[#C00000]'}`}
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
