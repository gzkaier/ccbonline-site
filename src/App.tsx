import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Trust from './sections/Trust'
import Challenges from './sections/Challenges'
import CoreValues from './sections/CoreValues'
import Why from './sections/Why'
import Services from './sections/Services'
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
      'CCBONLINE INC. — Helping Chinese Businesses Enter Canada & North America',
      'CCBONLINE INC. — 帮助中国企业进入加拿大与北美市场'
    )
  }, [t])

  return (
    <>
      <Hero />
      <Trust />
      <Challenges />
      <CoreValues />
      <Why />
      <Services />
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
