import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Challenges from './sections/Challenges'
import Trust from './sections/Trust'
import Philosophy from './sections/Philosophy'
import Services from './sections/Services'
import CoreValues from './sections/CoreValues'
import Why from './sections/Why'
import Methodology from './sections/Methodology'
import WhoWeWorkWith from './sections/WhoWeWorkWith'
import HomeAbout from './sections/HomeAbout'
import HomeContact from './sections/HomeContact'
import Footer from './sections/Footer'
import ServicesPage from './sections/ServicesPage'
import AboutPage from './sections/AboutPage'
import ContactPage from './sections/ContactPage'
import PrivacyPolicy from './sections/PrivacyPolicy'
import TermsOfUse from './sections/TermsOfUse'
import NotFoundPage from './sections/NotFoundPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Home() {
  const { t } = useLanguage()
  useEffect(() => {
    document.title = t(
      'CCBONLINE INC. | Canada & North America Market Entry Partner for Chinese Businesses',
      'CCBONLINE INC. | 中国企业进入加拿大与北美市场的合作伙伴'
    )
  }, [t])

  return (
    <>
      <Hero />
      <Challenges />
      <Trust />
      <Philosophy />
      <Services />
      <CoreValues />
      <Why />
      <Methodology />
      <WhoWeWorkWith />
      <HomeAbout />
      <HomeContact />
    </>
  )
}

function AppContent() {
  return (
    <div className="relative min-h-[100dvh]">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
