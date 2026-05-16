import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { en: 'Home', zh: '首页', href: '' },
  { en: 'Canada Market Entry', zh: '加拿大市场进入', href: 'canada-market-entry' },
  { en: 'Services', zh: '服务', href: 'services' },
  { en: 'Responsibility Chain', zh: '责任链', href: 'responsibility-chain' },
  { en: 'Insights', zh: '洞察', href: 'insights' },
  { en: 'About', zh: '关于', href: 'about' },
  { en: 'Contact', zh: '联系', href: 'contact' },
]

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage()
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
    if (typeof document !== 'undefined') {
      document.body.style.overflow = ''
    }
  }, [location.pathname])

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
    if (typeof document !== 'undefined') {
      document.body.style.overflow = menuOpen ? '' : 'hidden'
    }
  }

  const isHome = location.pathname === `/${lang}` || location.pathname === '/'
  const isActive = (href: string) => {
    const fullPath = href === '' ? `/${lang}` : `/${lang}/${href}`
    return location.pathname === fullPath
  }

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
            onClick={() => { setMenuOpen(false); document.body.style.overflow = '' }}
          >
            CCBONLINE INC.
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.slice(1).map((link) => {
              const linkPath = `/${lang}/${link.href}`
              return (
                <Link
                  key={link.en}
                  to={linkPath}
                  className={`text-[13px] font-medium transition-all duration-200 ${isActive(link.href) ? 'text-[#00A884]' : 'hover:text-[#00A884]'}`}
                  style={{ color: scrolled || !isHome ? (isActive(link.href) ? '#00A884' : '#212121') : '#fff' }}
                >
                  {t(link.en, link.zh)}
                </Link>
              )
            })}
            <button
              onClick={toggleLang}
              className="text-[12px] font-medium px-3 py-1.5 border transition-all duration-200 hover:border-[#00A884] hover:text-[#00A884]"
              style={{
                color: scrolled || !isHome ? '#212121' : '#fff',
                borderColor: scrolled || !isHome ? 'rgba(0,0,0,0.15)' : 'rgba(255,255,255,0.3)',
              }}
            >
              {lang === 'en' ? 'EN' : '中文'}
            </button>
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

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
            {navLinks.map((link) => {
              const linkPath = link.href === '' ? `/${lang}` : `/${lang}/${link.href}`
              return (
                <Link
                  key={link.en}
                  to={linkPath}
                  onClick={() => { setMenuOpen(false); document.body.style.overflow = '' }}
                  className={`text-[20px] font-semibold transition-colors ${isActive(link.href) ? 'text-[#00A884]' : 'text-[#212121] hover:text-[#00A884]'}`}
                >
                  {t(link.en, link.zh)}
                </Link>
              )
            })}
            <div className="w-full max-w-[280px] pt-4 border-t border-[#E5E5E5] flex flex-col gap-3">
              <Link
                to={`/${lang}/contact`}
                onClick={() => { setMenuOpen(false); document.body.style.overflow = '' }}
                className="btn-primary text-[15px] py-3.5 text-center"
              >
                {t('Book a Discussion', '预约沟通')}
              </Link>
              <button
                onClick={() => { toggleLang(); }}
                className="text-[14px] font-medium py-3 text-center border border-[#E5E5E5] text-[#212121]"
              >
                {lang === 'en' ? 'Switch to 中文' : 'Switch to English'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
