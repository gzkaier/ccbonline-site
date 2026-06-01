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
import ENFaq from './pages/en/Faq'
import ENResources from './pages/en/Resources'

// English insight articles
import EN_MarketEntryIsNotSellingOverseas from './pages/en/insights/market-entry-is-not-selling-overseas'
import EN_NorthAmericaResponsibilityChain from './pages/en/insights/north-america-responsibility-chain'
import EN_ImporterOfRecord from './pages/en/insights/importer-of-record-is-not-just-customs-clearance'
import EN_Certification from './pages/en/insights/certification-is-not-the-end-of-market-entry'
import EN_CanadaFirstStation from './pages/en/insights/canada-as-first-station-for-north-america-entry'
import EN_TradeShow from './pages/en/insights/trade-show-is-not-just-exhibition'
import EN_ChannelDevelopment from './pages/en/insights/channel-development-is-not-email-blasting'
import EN_90DayRoadmap from './pages/en/insights/0-90-day-north-america-market-entry-roadmap'
import EN_CSAVsUL from './pages/en/insights/csa-vs-ul-certification-difference'
import EN_TradeShowFollowUp from './pages/en/insights/trade-show-lead-follow-up-best-practices'
import EN_3PLVsFreightForwarder from './pages/en/insights/3pl-vs-freight-forwarder'
import EN_ProductCertificationGuide from './pages/en/insights/product-certification-canada-guide'
import EN_CanadaVsUS from './pages/en/insights/canada-vs-us-market-entry'
import EN_CSAVsULWhichBody from './pages/en/insights/csa-vs-ul-which-certification-body'
import EN_WhatHappensWithoutIOR from './pages/en/insights/what-happens-without-ior'
import EN_IsCanadaTooSmall from './pages/en/insights/is-canada-market-too-small'
import EN_CanadaMarketEntryAssessFirst from './pages/en/insights/canada-market-entry-assess-first'
import EN_CSAVsULGuide from './pages/en/insights/csa-vs-ul-certification-guide'
import EN_PurchaseRationale from './pages/en/insights/purchase-rationale-clarity'
import EN_IsYourWebsiteInChatgpt from './pages/en/insights/is-your-website-in-chatgpt'
import EN_ProductLiabilityChain from './pages/en/insights/product-liability-chain'
import EN_SupplyChainReshuffling from './pages/en/insights/supply-chain-reshuffling-opportunities'
import EN_TradeShowSelection from './pages/en/insights/trade-show-selection-strategy'
import EN_WhyBuyersDontContact from './pages/en/insights/why-buyers-dont-contact'
import EN_SeoVsGeo from './pages/en/insights/seo-vs-geo-difference'
import EN_IORExplained from './pages/en/insights/ior-importer-of-record-explained'
import EN_CanadaMarketSize from './pages/en/insights/canada-market-size-worth-it'
import EN_EvaluateServiceProviders from './pages/en/insights/how-to-evaluate-local-service-providers'
import EN_ShippingWithoutIORRisks from './pages/en/insights/shipping-without-ior-risks'
import EN_B2BCredibilityFactors from './pages/en/insights/b2b-credibility-factors'
import EN_WhyFAQMattersForAI from './pages/en/insights/why-faq-matters-for-ai'
import EN_ProductLiabilityInsuranceCanada from './pages/en/insights/product-liability-insurance-canada'
import EN_CanadaVsUSEntry from './pages/en/insights/canada-vs-us-market-entry'
import EN_MaximizeMediaCoverageValue from './pages/en/insights/maximize-media-coverage-value'
import EN_TradeShowLeadFollowUpFailure from './pages/en/insights/trade-show-lead-follow-up-failure'
import EN_FAQAsSalesTool from './pages/en/insights/faq-as-sales-tool'
import EN_GEOContentStructure from './pages/en/insights/geo-content-structure-over-keywords'
import EN_AfterSalesWarrantyOverlooked from './pages/en/insights/after-sales-warranty-overlooked'
import EN_HowBuyersViewChineseSuppliers from './pages/en/insights/how-north-american-buyers-view-chinese-suppliers'
import EN_ServiceProviderShowcase from './pages/en/insights/service-provider-showcase-trust-entry'

import EN_MarketEntryDiagnosis from './pages/en/services/market-entry-diagnosis'
import EN_WebsiteCredibilityAudit from './pages/en/services/website-credibility-audit'
import EN_CustomerChannelValidation from './pages/en/services/customer-channel-validation'
import EN_ComplianceResponsibilityChain from './pages/en/services/compliance-responsibility-chain'
import EN_LocalExecutionSupport from './pages/en/services/local-execution-support'
import EN_AdvisoryRetainer from './pages/en/services/advisory-retainer'
import EN_WebsiteContent from './pages/en/services/website-content-for-service-providers'
import EN_3PLWarehousingAdvisory from './pages/en/services/3pl-warehousing-advisory'
import EN_MediaBusinessContent from './pages/en/services/media-business-content'
import EN_ProductCompliance from './pages/en/services/product-compliance'
import EN_TradeShowFollowUpService from './pages/en/services/trade-show-follow-up'
import EN_SeoGeoOptimization from './pages/en/services/seo-geo-optimization'

// New English service pages (platform repositioning)
import EN_MarketEntry from './pages/en/market-entry'
import EN_BrandCredibility from './pages/en/brand-credibility'
import EN_WebsiteContentPlatform from './pages/en/website-content'
import EN_BusinessConnection from './pages/en/business-connection'
import EN_MediaContent from './pages/en/media-content'

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
import ZHFaq from './pages/zh/Faq'
import ZHResources from './pages/zh/Resources'

// Chinese service detail pages
import ZH_MarketEntryDiagnosis from './pages/zh/services/market-entry-diagnosis'
import ZH_WebsiteCredibilityAudit from './pages/zh/services/website-credibility-audit'
import ZH_CustomerChannelValidation from './pages/zh/services/customer-channel-validation'
import ZH_ComplianceResponsibilityChain from './pages/zh/services/compliance-responsibility-chain'
import ZH_LocalExecutionSupport from './pages/zh/services/local-execution-support'
import ZH_AdvisoryRetainer from './pages/zh/services/advisory-retainer'
import ZH_WebsiteContent from './pages/zh/services/website-content-for-service-providers'
import ZH_LogisticsCustomsImportDiagnosis from './pages/zh/services/logistics-customs-import-diagnosis'
import ZH_3PLWarehousingAdvisory from './pages/zh/services/3pl-warehousing-advisory'
import ZH_MediaBusinessContent from './pages/zh/services/media-business-content'
import ZH_ProductCompliance from './pages/zh/services/product-compliance'
import ZH_TradeShowFollowUpService from './pages/zh/services/trade-show-follow-up'
import ZH_SeoGeoOptimization from './pages/zh/services/seo-geo-optimization'
import ZH_BusinessReasonCredibility from './pages/zh/services/business-reason-credibility-diagnosis'
import ZH_WebsiteAIVisibility from './pages/zh/services/website-ai-visibility-diagnosis'
import ZH_EnglishMaterialsOptimization from './pages/zh/services/english-materials-optimization'
import ZH_BusinessMediaContent from './pages/zh/services/business-media-content'
import ZH_LocalServiceConnection from './pages/zh/services/local-service-connection'
import ZH_EcommerceSEOOptimization from './pages/zh/services/ecommerce-seo-optimization'

// New Chinese service pages (platform repositioning)
import ZH_MarketEntry from './pages/zh/market-entry'
import ZH_BrandCredibility from './pages/zh/brand-credibility'
import ZH_WebsiteContentPlatform from './pages/zh/website-content'
import ZH_BusinessConnection from './pages/zh/business-connection'
import ZH_MediaContent from './pages/zh/media-content'

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
import ZH_CSAVsUL from './pages/zh/insights/csa-he-ul-de-qu-bie'
import ZH_TradeShowFollowUp from './pages/zh/insights/zhan-hou-xian-suo-gen-jin'
import ZH_3PLVsFreightForwarder from './pages/zh/insights/3pl-he-huo-lai-de-qu-bie'
import ZH_ProductCertificationGuide from './pages/zh/insights/chan-pin-ren-zheng-lu-jing-zhi-nan'
import ZH_CanadaVsUS from './pages/zh/insights/jia-na-da-vs-mei-guo-xian-jin-ru'
import ZH_CSAVsULWhichBody from './pages/zh/insights/csa-he-ul-xuan-na-jia'
import ZH_CanadaMarketEntryAssessFirst from './pages/zh/insights/canada-market-entry-assess-first'
import ZH_CSAVsULGuide from './pages/zh/insights/csa-vs-ul-certification-guide'
import ZH_PurchaseRationale from './pages/zh/insights/purchase-rationale-clarity'
import ZH_IsYourWebsiteInChatgpt from './pages/zh/insights/is-your-website-in-chatgpt'
import ZH_ProductLiabilityChain from './pages/zh/insights/product-liability-chain'
import ZH_SupplyChainReshuffling from './pages/zh/insights/supply-chain-reshuffling-opportunities'
import ZH_TradeShowSelection from './pages/zh/insights/trade-show-selection-strategy'
import ZH_WhyBuyersDontContact from './pages/zh/insights/why-buyers-dont-contact'
import ZH_SeoVsGeo from './pages/zh/insights/seo-vs-geo-difference'
import ZH_IORExplained from './pages/zh/insights/ior-importer-of-record-explained'
import ZH_CanadaMarketSize from './pages/zh/insights/canada-market-size-worth-it'
import ZH_EvaluateServiceProviders from './pages/zh/insights/how-to-evaluate-local-service-providers'
import ZH_HuoDaoGangMeiYouIOR from './pages/zh/insights/huo-dao-gang-mei-you-ior'
import ZH_JiaNaDaShiChangZhiDeZuoMa from './pages/zh/insights/jia-na-da-shi-chang-zhi-de-zuo-ma'
import ZH_ShippingWithoutIOR from './pages/zh/insights/shipping-without-ior-risks'
import ZH_B2BCredibilityFactors from './pages/zh/insights/b2b-credibility-factors'
import ZH_WhyFAQMatters from './pages/zh/insights/why-faq-matters-for-ai'
import ZH_ProductLiabilityInsurance from './pages/zh/insights/product-liability-insurance-canada'
import ZH_CanadaVsUSEntry from './pages/zh/insights/canada-vs-us-market-entry'
import ZH_MaximizeMediaCoverage from './pages/zh/insights/maximize-media-coverage-value'
import ZH_TradeShowLeadFollowUp from './pages/zh/insights/trade-show-lead-follow-up-failure'
import ZH_FAQAsSalesTool from './pages/zh/insights/faq-as-sales-tool'
import ZH_GEOContentStructure from './pages/zh/insights/geo-content-structure-over-keywords'
import ZH_AfterSalesWarranty from './pages/zh/insights/after-sales-warranty-overlooked'
import ZH_HowBuyersViewSuppliers from './pages/zh/insights/how-north-american-buyers-view-chinese-suppliers'
import ZH_ServiceProviderShowcase from './pages/zh/insights/service-provider-showcase-trust-entry'

// Chinese resource submission guidelines
// French pages
import FRHome from './pages/fr/Home'
import FRContact from './pages/fr/Contact'

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
        <Route path="/en/services/website-credibility-audit" element={<EN_WebsiteCredibilityAudit />} />
        <Route path="/en/services/customer-channel-validation" element={<EN_CustomerChannelValidation />} />
        <Route path="/en/services/compliance-responsibility-chain" element={<EN_ComplianceResponsibilityChain />} />
        <Route path="/en/services/local-execution-support" element={<EN_LocalExecutionSupport />} />
        <Route path="/en/services/advisory-retainer" element={<EN_AdvisoryRetainer />} />
        <Route path="/en/services/website-content-for-service-providers" element={<EN_WebsiteContent />} />
        <Route path="/en/services/3pl-warehousing-advisory" element={<EN_3PLWarehousingAdvisory />} />
        <Route path="/en/services/media-business-content" element={<EN_MediaBusinessContent />} />
        <Route path="/en/services/product-compliance" element={<EN_ProductCompliance />} />
        <Route path="/en/services/trade-show-follow-up" element={<EN_TradeShowFollowUpService />} />
        <Route path="/en/services/seo-geo-optimization" element={<EN_SeoGeoOptimization />} />
        {/* New English platform pages */}
        <Route path="/en/market-entry" element={<EN_MarketEntry />} />
        <Route path="/en/brand-credibility" element={<EN_BrandCredibility />} />
        <Route path="/en/website-content" element={<EN_WebsiteContentPlatform />} />
        <Route path="/en/business-connection" element={<EN_BusinessConnection />} />
        <Route path="/en/media-content" element={<EN_MediaContent />} />
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
        <Route path="/en/insights/csa-vs-ul-certification-difference" element={<EN_CSAVsUL />} />
        <Route path="/en/insights/trade-show-lead-follow-up-best-practices" element={<EN_TradeShowFollowUp />} />
        <Route path="/en/insights/3pl-vs-freight-forwarder" element={<EN_3PLVsFreightForwarder />} />
        <Route path="/en/insights/product-certification-canada-guide" element={<EN_ProductCertificationGuide />} />
        <Route path="/en/insights/canada-vs-us-market-entry" element={<EN_CanadaVsUS />} />
        <Route path="/en/insights/csa-vs-ul-which-certification-body" element={<EN_CSAVsULWhichBody />} />
        <Route path="/en/insights/what-happens-without-ior" element={<EN_WhatHappensWithoutIOR />} />
        <Route path="/en/insights/is-canada-market-too-small" element={<EN_IsCanadaTooSmall />} />
        <Route path="/en/insights/canada-market-entry-assess-first" element={<EN_CanadaMarketEntryAssessFirst />} />
        <Route path="/en/insights/csa-vs-ul-certification-guide" element={<EN_CSAVsULGuide />} />
        <Route path="/en/insights/purchase-rationale-clarity" element={<EN_PurchaseRationale />} />
        <Route path="/en/insights/is-your-website-in-chatgpt" element={<EN_IsYourWebsiteInChatgpt />} />
        <Route path="/en/insights/product-liability-chain" element={<EN_ProductLiabilityChain />} />
        <Route path="/en/insights/supply-chain-reshuffling-opportunities" element={<EN_SupplyChainReshuffling />} />
        <Route path="/en/insights/trade-show-selection-strategy" element={<EN_TradeShowSelection />} />
        <Route path="/en/insights/why-buyers-dont-contact" element={<EN_WhyBuyersDontContact />} />
        <Route path="/en/insights/seo-vs-geo-difference" element={<EN_SeoVsGeo />} />
        <Route path="/en/insights/ior-importer-of-record-explained" element={<EN_IORExplained />} />
        <Route path="/en/insights/canada-market-size-worth-it" element={<EN_CanadaMarketSize />} />
        <Route path="/en/insights/how-to-evaluate-local-service-providers" element={<EN_EvaluateServiceProviders />} />
        <Route path="/en/insights/shipping-without-ior-risks" element={<EN_ShippingWithoutIORRisks />} />
        <Route path="/en/insights/b2b-credibility-factors" element={<EN_B2BCredibilityFactors />} />
        <Route path="/en/insights/why-faq-matters-for-ai" element={<EN_WhyFAQMattersForAI />} />
        <Route path="/en/insights/product-liability-insurance-canada" element={<EN_ProductLiabilityInsuranceCanada />} />
        <Route path="/en/insights/canada-vs-us-market-entry" element={<EN_CanadaVsUSEntry />} />
        <Route path="/en/insights/maximize-media-coverage-value" element={<EN_MaximizeMediaCoverageValue />} />
        <Route path="/en/insights/trade-show-lead-follow-up-failure" element={<EN_TradeShowLeadFollowUpFailure />} />
        <Route path="/en/insights/faq-as-sales-tool" element={<EN_FAQAsSalesTool />} />
        <Route path="/en/insights/geo-content-structure-over-keywords" element={<EN_GEOContentStructure />} />
        <Route path="/en/insights/after-sales-warranty-overlooked" element={<EN_AfterSalesWarrantyOverlooked />} />
        <Route path="/en/insights/how-north-american-buyers-view-chinese-suppliers" element={<EN_HowBuyersViewChineseSuppliers />} />
        <Route path="/en/insights/service-provider-showcase-trust-entry" element={<EN_ServiceProviderShowcase />} />
        <Route path="/en/about" element={<ENAbout />} />
        <Route path="/en/contact" element={<ENContact />} />
        <Route path="/en/privacy" element={<ENPrivacy />} />
        <Route path="/en/terms" element={<ENTerms />} />
        <Route path="/en/faq" element={<ENFaq />} />
        <Route path="/en/resources" element={<ENResources />} />

        {/* Chinese routes */}
        <Route path="/zh" element={<ZHHome />} />
        <Route path="/zh/canada-market-entry" element={<ZHCanadaMarketEntry />} />
        <Route path="/zh/services" element={<ZHServices />} />
        <Route path="/zh/services/market-entry-diagnosis" element={<ZH_MarketEntryDiagnosis />} />
        <Route path="/zh/services/website-credibility-audit" element={<ZH_WebsiteCredibilityAudit />} />
        <Route path="/zh/services/customer-channel-validation" element={<ZH_CustomerChannelValidation />} />
        <Route path="/zh/services/compliance-responsibility-chain" element={<ZH_ComplianceResponsibilityChain />} />
        <Route path="/zh/services/local-execution-support" element={<ZH_LocalExecutionSupport />} />
        <Route path="/zh/services/advisory-retainer" element={<ZH_AdvisoryRetainer />} />
        <Route path="/zh/services/website-content-for-service-providers" element={<ZH_WebsiteContent />} />
        <Route path="/zh/services/logistics-customs-import-diagnosis" element={<ZH_LogisticsCustomsImportDiagnosis />} />
        <Route path="/zh/services/3pl-warehousing-advisory" element={<ZH_3PLWarehousingAdvisory />} />
        <Route path="/zh/services/media-business-content" element={<ZH_MediaBusinessContent />} />
        <Route path="/zh/services/product-compliance" element={<ZH_ProductCompliance />} />
        <Route path="/zh/services/trade-show-follow-up" element={<ZH_TradeShowFollowUpService />} />
        <Route path="/zh/services/seo-geo-optimization" element={<ZH_SeoGeoOptimization />} />
        <Route path="/zh/services/business-reason-credibility-diagnosis" element={<ZH_BusinessReasonCredibility />} />
        <Route path="/zh/services/website-ai-visibility-diagnosis" element={<ZH_WebsiteAIVisibility />} />
        <Route path="/zh/services/english-materials-optimization" element={<ZH_EnglishMaterialsOptimization />} />
        <Route path="/zh/services/business-media-content" element={<ZH_BusinessMediaContent />} />
        <Route path="/zh/services/local-service-connection" element={<ZH_LocalServiceConnection />} />
        <Route path="/zh/services/ecommerce-seo-optimization" element={<ZH_EcommerceSEOOptimization />} />
        {/* New Chinese platform pages */}
        <Route path="/zh/market-entry" element={<ZH_MarketEntry />} />
        <Route path="/zh/brand-credibility" element={<ZH_BrandCredibility />} />
        <Route path="/zh/website-content" element={<ZH_WebsiteContentPlatform />} />
        <Route path="/zh/business-connection" element={<ZH_BusinessConnection />} />
        <Route path="/zh/media-content" element={<ZH_MediaContent />} />
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
        <Route path="/zh/insights/csa-he-ul-de-qu-bie" element={<ZH_CSAVsUL />} />
        <Route path="/zh/insights/zhan-hou-xian-suo-gen-jin" element={<ZH_TradeShowFollowUp />} />
        <Route path="/zh/insights/3pl-he-huo-lai-de-qu-bie" element={<ZH_3PLVsFreightForwarder />} />
        <Route path="/zh/insights/chan-pin-ren-zheng-lu-jing-zhi-nan" element={<ZH_ProductCertificationGuide />} />
        <Route path="/zh/insights/jia-na-da-vs-mei-guo-xian-jin-ru" element={<ZH_CanadaVsUS />} />
        <Route path="/zh/insights/csa-he-ul-xuan-na-jia" element={<ZH_CSAVsULWhichBody />} />
        <Route path="/zh/insights/canada-market-entry-assess-first" element={<ZH_CanadaMarketEntryAssessFirst />} />
        <Route path="/zh/insights/csa-vs-ul-certification-guide" element={<ZH_CSAVsULGuide />} />
        <Route path="/zh/insights/purchase-rationale-clarity" element={<ZH_PurchaseRationale />} />
        <Route path="/zh/insights/is-your-website-in-chatgpt" element={<ZH_IsYourWebsiteInChatgpt />} />
        <Route path="/zh/insights/product-liability-chain" element={<ZH_ProductLiabilityChain />} />
        <Route path="/zh/insights/supply-chain-reshuffling-opportunities" element={<ZH_SupplyChainReshuffling />} />
        <Route path="/zh/insights/trade-show-selection-strategy" element={<ZH_TradeShowSelection />} />
        <Route path="/zh/insights/why-buyers-dont-contact" element={<ZH_WhyBuyersDontContact />} />
        <Route path="/zh/insights/seo-vs-geo-difference" element={<ZH_SeoVsGeo />} />
        <Route path="/zh/insights/ior-importer-of-record-explained" element={<ZH_IORExplained />} />
        <Route path="/zh/insights/canada-market-size-worth-it" element={<ZH_CanadaMarketSize />} />
        <Route path="/zh/insights/how-to-evaluate-local-service-providers" element={<ZH_EvaluateServiceProviders />} />
        <Route path="/zh/insights/huo-dao-gang-mei-you-ior" element={<ZH_HuoDaoGangMeiYouIOR />} />
        <Route path="/zh/insights/jia-na-da-shi-chang-zhi-de-zuo-ma" element={<ZH_JiaNaDaShiChangZhiDeZuoMa />} />
        <Route path="/zh/insights/shipping-without-ior-risks" element={<ZH_ShippingWithoutIOR />} />
        <Route path="/zh/insights/b2b-credibility-factors" element={<ZH_B2BCredibilityFactors />} />
        <Route path="/zh/insights/why-faq-matters-for-ai" element={<ZH_WhyFAQMatters />} />
        <Route path="/zh/insights/product-liability-insurance-canada" element={<ZH_ProductLiabilityInsurance />} />
        <Route path="/zh/insights/canada-vs-us-market-entry" element={<ZH_CanadaVsUSEntry />} />
        <Route path="/zh/insights/maximize-media-coverage-value" element={<ZH_MaximizeMediaCoverage />} />
        <Route path="/zh/insights/trade-show-lead-follow-up-failure" element={<ZH_TradeShowLeadFollowUp />} />
        <Route path="/zh/insights/faq-as-sales-tool" element={<ZH_FAQAsSalesTool />} />
        <Route path="/zh/insights/geo-content-structure-over-keywords" element={<ZH_GEOContentStructure />} />
        <Route path="/zh/insights/after-sales-warranty-overlooked" element={<ZH_AfterSalesWarranty />} />
        <Route path="/zh/insights/how-north-american-buyers-view-chinese-suppliers" element={<ZH_HowBuyersViewSuppliers />} />
        <Route path="/zh/insights/service-provider-showcase-trust-entry" element={<ZH_ServiceProviderShowcase />} />
        <Route path="/zh/about" element={<ZHAbout />} />
        <Route path="/zh/contact" element={<ZHContact />} />
        <Route path="/zh/privacy" element={<ZHPrivacy />} />
        <Route path="/zh/terms" element={<ZHTerms />} />
        <Route path="/zh/faq" element={<ZHFaq />} />
        <Route path="/zh/resources" element={<ZHResources />} />

        {/* French routes */}
        <Route path="/fr" element={<FRHome />} />
        <Route path="/fr/contact" element={<FRContact />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}

export default App