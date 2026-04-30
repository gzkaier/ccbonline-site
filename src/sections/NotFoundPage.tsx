import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { Link } from 'react-router'

export default function NotFoundPage() {
  const { t } = useLanguage()

  useEffect(() => {
    document.title = t('Page Not Found — CCBONLINE INC.', '页面未找到 — CCBONLINE INC.')
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-[100dvh] flex items-center justify-center bg-[#F8F9FA]">
      <div className="text-center px-6">
        <p className="text-[#C00000] text-[48px] md:text-[72px] font-serif mb-4">404</p>
        <h1 className="font-serif text-[#212121] text-[22px] md:text-[26px] lg:text-[30px] leading-[1.35] tracking-tight mb-4">
          {t('Page not found', '页面未找到')}
        </h1>
        <p className="text-[13px] md:text-[14px] text-[#767676] mb-8 max-w-[400px] mx-auto">
          {t('The page you are looking for does not exist or has been moved.', '您访问的页面不存在或已被移除。')}
        </p>
        <Link to="/" className="btn-primary text-[13px] md:text-[14px]">
          {t('Back to Home', '返回首页')}
        </Link>
      </div>
    </div>
  )
}
