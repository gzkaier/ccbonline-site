import { Routes, Route, Navigate } from 'react-router'
import ScrollToTop from './components/ScrollToTop'

// English pages
import ENHome from './pages/en/Home'
import ENCanadaMarketEntry from './pages/en/CanadaMarketEntry'
import ENServices from './pages/en/Services'
import ENResponsibilityChain from './pages/en/ResponsibilityChain'
import ENInsights from './pages/en/Insights'
import ENAbout from './pages/en/About'
import ENContact from './pages/en/Contact'
import ENPrivacy from './pages/en/Privacy'
import ENTerms from './pages/en/Terms'

// English insight articles
import EN_MarketEntryIsNotSellingOverseas from './pages/en/insights/market-entry-is-not-selling-overseas'
import EN_NorthAmericaResponsibilityChain from './pages/en/insights/north-america-responsibility-chain'
import EN_ImporterOfRecord from './pages/en/insights/importer-of-record-is-not-just-customs-clearance'
import EN_Certification from './pages/en/insights/certification-is-not-the-end-of-market-entry'
import EN_CanadaFirstStation from './pages/en/insights/canada-as-first-station-for-north-america-entry'
import EN_TradeShow from './pages/en/insights/trade-show-is-not-just-exhibition'
import EN_ChannelDevelopment from './pages/en/insights/channel-development-is-not-email-blasting'
import EN_90DayRoadmap from './pages/en/insights/0-90-day-north-america-market-entry-roadmap'

import EN_MarketEntryDiagnosis from './pages/en/services/market-entry-diagnosis'
import EN_CustomerChannelValidation from './pages/en/services/customer-channel-validation'
import EN_ComplianceResponsibilityChain from './pages/en/services/compliance-responsibility-chain'
import EN_LocalExecutionSupport from './pages/en/services/local-execution-support'
import EN_AdvisoryRetainer from './pages/en/services/advisory-retainer'
import EN_WebsiteContent from './pages/en/services/website-content-for-service-providers'

// English topic pages (AI search landing pages)
import EN_CanadaMarketEntryForChineseManufacturers from './pages/en/topics/canada-market-entry-for-chinese-manufacturers'
import EN_ImporterOfRecordAndResponsibilityChain from './pages/en/topics/importer-of-record-and-responsibility-chain'
import EN_BuildingMaterialsEnteringNorthAmerica from './pages/en/topics/building-materials-entering-north-america'
import EN_AIHardwareMarketEntryNorthAmerica from './pages/en/topics/ai-hardware-market-entry-north-america'
import EN_LocalTrustBuildingChineseExportBrands from './pages/en/topics/local-trust-building-chinese-export-brands'

// Chinese pages
import ZHHome from './pages/zh/Home'
import ZHCanadaMarketEntry from './pages/zh/CanadaMarketEntry'
import ZHServices from './pages/zh/Services'
import ZHResponsibilityChain from './pages/zh/ResponsibilityChain'
import ZHInsights from './pages/zh/Insights'
import ZHAbout from './pages/zh/About'
import ZHContact from './pages/zh/Contact'
import ZHPrivacy from './pages/zh/Privacy'
import ZHTerms from './pages/zh/Terms'

// Chinese service detail pages
import ZH_MarketEntryDiagnosis from './pages/zh/services/market-entry-diagnosis'
import ZH_CustomerChannelValidation from './pages/zh/services/customer-channel-validation'
import ZH_ComplianceResponsibilityChain from './pages/zh/services/compliance-responsibility-chain'
import ZH_LocalExecutionSupport from './pages/zh/services/local-execution-support'
import ZH_AdvisoryRetainer from './pages/zh/services/advisory-retainer'
import ZH_WebsiteContent from './pages/zh/services/website-content-for-service-providers'

// Chinese topic pages (AI search landing pages)
import ZH_CanadaMarketEntryForChineseManufacturers from './pages/zh/topics/canada-market-entry-for-chinese-manufacturers'
import ZH_ImporterOfRecordAndResponsibilityChain from './pages/zh/topics/importer-of-record-and-responsibility-chain'
import ZH_BuildingMaterialsEnteringNorthAmerica from './pages/zh/topics/building-materials-entering-north-america'
import ZH_AIHardwareMarketEntryNorthAmerica from './pages/zh/topics/ai-hardware-market-entry-north-america'
import ZH_LocalTrustBuildingChineseExportBrands from './pages/zh/topics/local-trust-building-chinese-export-brands'

// Chinese insight articles
import ZH_MarketEntryNotSelling from './pages/zh/insights/bei-mei-shi-chang-jin-ru-bu-shi-mai-huo'
import ZH_ResponsibilityChain from './pages/zh/insights/bei-mei-shi-chang-jin-ru-ze-ren-lian'
import ZH_IOR from './pages/zh/insights/ior-bu-shi-dai-qing-guan'
import ZH_Certification from './pages/zh/insights/ren-zheng-bu-shi-zhong-dian'
import ZH_CanadaFirst from './pages/zh/insights/jia-na-da-ke-yi-shi-bei-mei-di-yi-zhan'
import ZH_TradeShow from './pages/zh/insights/zhan-hui-bu-shi-qu-bai-tan'
import ZH_ChannelDev from './pages/zh/insights/qu-dao-kai-fa-bu-shi-qun-fa-you-jian'
import ZH_90DayRoadmap from './pages/zh/insights/0-90-tian-bei-mei-shi-chang-jin-ru-lu-jing'

// 404
import NotFoundPage from './sections/NotFoundPage'

function App() {
  return (
    <div className="relative min-h-[100dvh]">
      <ScrollToTop />
      <Routes>
        {/* Default redirect to English */}
        <Route path="/" element={<Navigate to="/en" replace />} />

        {/* English routes */}
        <Route path="/en" element={<ENHome />} />
        <Route path="/en/canada-market-entry" element={<ENCanadaMarketEntry />} />
        <Route path="/en/services" element={<ENServices />} />
        <Route path="/en/services/market-entry-diagnosis" element={<EN_MarketEntryDiagnosis />} />
        <Route path="/en/services/customer-channel-validation" element={<EN_CustomerChannelValidation />} />
        <Route path="/en/services/compliance-responsibility-chain" element={<EN_ComplianceResponsibilityChain />} />
        <Route path="/en/services/local-execution-support" element={<EN_LocalExecutionSupport />} />
        <Route path="/en/services/advisory-retainer" element={<EN_AdvisoryRetainer />} />
        <Route path="/en/services/website-content-for-service-providers" element={<EN_WebsiteContent />} />
        {/* English topic pages */}
        <Route path="/en/topics/canada-market-entry-for-chinese-manufacturers" element={<EN_CanadaMarketEntryForChineseManufacturers />} />
        <Route path="/en/topics/importer-of-record-and-responsibility-chain" element={<EN_ImporterOfRecordAndResponsibilityChain />} />
        <Route path="/en/topics/building-materials-entering-north-america" element={<EN_BuildingMaterialsEnteringNorthAmerica />} />
        <Route path="/en/topics/ai-hardware-market-entry-north-america" element={<EN_AIHardwareMarketEntryNorthAmerica />} />
        <Route path="/en/topics/local-trust-building-chinese-export-brands" element={<EN_LocalTrustBuildingChineseExportBrands />} />
        <Route path="/en/responsibility-chain" element={<ENResponsibilityChain />} />
        <Route path="/en/insights" element={<ENInsights />} />
        <Route path="/en/insights/market-entry-is-not-selling-overseas" element={<EN_MarketEntryIsNotSellingOverseas />} />
        <Route path="/en/insights/north-america-responsibility-chain" element={<EN_NorthAmericaResponsibilityChain />} />
        <Route path="/en/insights/importer-of-record-is-not-just-customs-clearance" element={<EN_ImporterOfRecord />} />
        <Route path="/en/insights/certification-is-not-the-end-of-market-entry" element={<EN_Certification />} />
        <Route path="/en/insights/canada-as-first-station-for-north-america-entry" element={<EN_CanadaFirstStation />} />
        <Route path="/en/insights/trade-show-is-not-just-exhibition" element={<EN_TradeShow />} />
        <Route path="/en/insights/channel-development-is-not-email-blasting" element={<EN_ChannelDevelopment />} />
        <Route path="/en/insights/0-90-day-north-america-market-entry-roadmap" element={<EN_90DayRoadmap />} />
        <Route path="/en/about" element={<ENAbout />} />
        <Route path="/en/contact" element={<ENContact />} />
        <Route path="/en/privacy" element={<ENPrivacy />} />
        <Route path="/en/terms" element={<ENTerms />} />

        {/* Chinese routes */}
        <Route path="/zh" element={<ZHHome />} />
        <Route path="/zh/canada-market-entry" element={<ZHCanadaMarketEntry />} />
        <Route path="/zh/services" element={<ZHServices />} />
        <Route path="/zh/services/market-entry-diagnosis" element={<ZH_MarketEntryDiagnosis />} />
        <Route path="/zh/services/customer-channel-validation" element={<ZH_CustomerChannelValidation />} />
        <Route path="/zh/services/compliance-responsibility-chain" element={<ZH_ComplianceResponsibilityChain />} />
        <Route path="/zh/services/local-execution-support" element={<ZH_LocalExecutionSupport />} />
        <Route path="/zh/services/advisory-retainer" element={<ZH_AdvisoryRetainer />} />
        <Route path="/zh/services/website-content-for-service-providers" element={<ZH_WebsiteContent />} />
        {/* Chinese topic pages */}
        <Route path="/zh/topics/canada-market-entry-for-chinese-manufacturers" element={<ZH_CanadaMarketEntryForChineseManufacturers />} />
        <Route path="/zh/topics/importer-of-record-and-responsibility-chain" element={<ZH_ImporterOfRecordAndResponsibilityChain />} />
        <Route path="/zh/topics/building-materials-entering-north-america" element={<ZH_BuildingMaterialsEnteringNorthAmerica />} />
        <Route path="/zh/topics/ai-hardware-market-entry-north-america" element={<ZH_AIHardwareMarketEntryNorthAmerica />} />
        <Route path="/zh/topics/local-trust-building-chinese-export-brands" element={<ZH_LocalTrustBuildingChineseExportBrands />} />
        <Route path="/zh/responsibility-chain" element={<ZHResponsibilityChain />} />
        <Route path="/zh/insights" element={<ZHInsights />} />
        <Route path="/zh/insights/bei-mei-shi-chang-jin-ru-bu-shi-mai-huo" element={<ZH_MarketEntryNotSelling />} />
        <Route path="/zh/insights/bei-mei-shi-chang-jin-ru-ze-ren-lian" element={<ZH_ResponsibilityChain />} />
        <Route path="/zh/insights/ior-bu-shi-dai-qing-guan" element={<ZH_IOR />} />
        <Route path="/zh/insights/ren-zheng-bu-shi-zhong-dian" element={<ZH_Certification />} />
        <Route path="/zh/insights/jia-na-da-ke-yi-shi-bei-mei-di-yi-zhan" element={<ZH_CanadaFirst />} />
        <Route path="/zh/insights/zhan-hui-bu-shi-qu-bai-tan" element={<ZH_TradeShow />} />
        <Route path="/zh/insights/qu-dao-kai-fa-bu-shi-qun-fa-you-jian" element={<ZH_ChannelDev />} />
        <Route path="/zh/insights/0-90-tian-bei-mei-shi-chang-jin-ru-lu-jing" element={<ZH_90DayRoadmap />} />
        <Route path="/zh/about" element={<ZHAbout />} />
        <Route path="/zh/contact" element={<ZHContact />} />
        <Route path="/zh/privacy" element={<ZHPrivacy />} />
        <Route path="/zh/terms" element={<ZHTerms />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App
