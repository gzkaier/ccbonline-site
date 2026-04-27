import { useEffect, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link, useLocation } from 'react-router'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { en: 'Services', zh: '服务', href: '/services' },
  { en: 'About', zh: '关于', href: '/about' },
  { en: 'Contact', zh: '联系', href: '/contact' },
]

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage()
  const location = useLocation()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  const isHome = location.pathname === '/'

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
        <div className="container-site h-[64px] flex items-center justify-between">
          <Link
            to="/"
            className="text-[15px] font-semibold tracking-wide uppercase"
            style={{ color: scrolled || !isHome ? '#212121' : '#fff' }}
          >
            CCBONLINE INC.
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.en}
                to={link.href}
                className="text-[14px] font-medium transition-opacity duration-300 hover:opacity-60"
                style={{ color: scrolled || !isHome ? '#212121' : '#fff' }}
              >
                {t(link.en, link.zh)}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="text-[13px] font-medium px-3 py-1 border transition-all duration-300 hover:opacity-70"
              style={{
                color: scrolled || !isHome ? '#212121' : '#fff',
                borderColor: scrolled || !isHome ? 'rgba(0,0,0,0.2)' : 'rgba(255,255,255,0.3)',
              }}
            >
              {lang === 'en' ? 'EN' : '中文'}
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: scrolled || !isHome ? '#212121' : '#fff' }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center gap-8">
          <button
            className="absolute top-5 right-5 text-[#212121]"
            onClick={() => setMenuOpen(false)}
          >
            <X size={24} />
          </button>
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-[#212121] text-2xl font-semibold">
            {t('Home', '首页')}
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.en}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#212121] text-2xl font-semibold hover:opacity-60 transition-opacity"
            >
              {t(link.en, link.zh)}
            </Link>
          ))}
          <button
            onClick={() => {
              toggleLang()
              setMenuOpen(false)
            }}
            className="text-[#212121] text-lg font-medium mt-4 px-6 py-2 border border-[#212121]/20"
          >
            {lang === 'en' ? 'Switch to 中文' : 'Switch to English'}
          </button>
        </div>
      )}
    </>
  )
}
