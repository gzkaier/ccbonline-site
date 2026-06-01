import { useEffect } from 'react'

interface SEOConfig {
  title: string
  description: string
  canonical?: string
  ogTitle?: string
  ogDescription?: string
  ogType?: string
  ogImage?: string
  twitterCard?: string
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  lang?: 'en' | 'zh' | 'fr'
  hreflang?: Array<{ hreflang: string; href: string }>
}

export function useSEO(config: SEOConfig) {
  useEffect(() => {
    // Title
    document.title = config.title

    // Meta description
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.setAttribute('name', 'description')
      document.head.appendChild(metaDesc)
    }
    metaDesc.setAttribute('content', config.description)

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', config.canonical || window.location.href.split('?')[0])

    // OG Title
    let ogTitle = document.querySelector('meta[property="og:title"]')
    if (!ogTitle) {
      ogTitle = document.createElement('meta')
      ogTitle.setAttribute('property', 'og:title')
      document.head.appendChild(ogTitle)
    }
    ogTitle.setAttribute('content', config.ogTitle || config.title)

    // OG Description
    let ogDesc = document.querySelector('meta[property="og:description"]')
    if (!ogDesc) {
      ogDesc = document.createElement('meta')
      ogDesc.setAttribute('property', 'og:description')
      document.head.appendChild(ogDesc)
    }
    ogDesc.setAttribute('content', config.ogDescription || config.description)

    // OG URL
    let ogUrl = document.querySelector('meta[property="og:url"]')
    if (!ogUrl) {
      ogUrl = document.createElement('meta')
      ogUrl.setAttribute('property', 'og:url')
      document.head.appendChild(ogUrl)
    }
    ogUrl.setAttribute('content', config.canonical || window.location.href.split('?')[0])

    // OG Type
    let ogType = document.querySelector('meta[property="og:type"]')
    if (!ogType) {
      ogType = document.createElement('meta')
      ogType.setAttribute('property', 'og:type')
      document.head.appendChild(ogType)
    }
    ogType.setAttribute('content', config.ogType || 'website')

    // OG Image
    let ogImage = document.querySelector('meta[property="og:image"]')
    if (!ogImage) {
      ogImage = document.createElement('meta')
      ogImage.setAttribute('property', 'og:image')
      document.head.appendChild(ogImage)
    }
    ogImage.setAttribute('content', config.ogImage || 'https://www.ccbonline.ca/images/canada-north-america-market-entry-consulting.jpg')

    // Twitter Card
    let twCard = document.querySelector('meta[name="twitter:card"]')
    if (!twCard) {
      twCard = document.createElement('meta')
      twCard.setAttribute('name', 'twitter:card')
      document.head.appendChild(twCard)
    }
    twCard.setAttribute('content', config.twitterCard || 'summary_large_image')

    // Twitter Title
    let twTitle = document.querySelector('meta[name="twitter:title"]')
    if (!twTitle) {
      twTitle = document.createElement('meta')
      twTitle.setAttribute('name', 'twitter:title')
      document.head.appendChild(twTitle)
    }
    twTitle.setAttribute('content', config.twitterTitle || config.ogTitle || config.title)

    // Twitter Description
    let twDesc = document.querySelector('meta[name="twitter:description"]')
    if (!twDesc) {
      twDesc = document.createElement('meta')
      twDesc.setAttribute('name', 'twitter:description')
      document.head.appendChild(twDesc)
    }
    twDesc.setAttribute('content', config.twitterDescription || config.ogDescription || config.description)

    // Twitter Image
    let twImage = document.querySelector('meta[name="twitter:image"]')
    if (!twImage) {
      twImage = document.createElement('meta')
      twImage.setAttribute('name', 'twitter:image')
      document.head.appendChild(twImage)
    }
    twImage.setAttribute('content', config.twitterImage || config.ogImage || 'https://www.ccbonline.ca/images/canada-north-america-market-entry-consulting.jpg')

    // HTML lang
    const langMap: Record<string, string> = { en: 'en-CA', zh: 'zh-Hans', fr: 'fr-CA' }
    document.documentElement.lang = langMap[config.lang || 'en'] || 'en-CA'

    // Hreflang alternates
    const existingAlts = document.querySelectorAll('link[data-seo-hreflang]')
    existingAlts.forEach(el => el.remove())

    if (config.hreflang && config.hreflang.length > 0) {
      config.hreflang.forEach(alt => {
        const link = document.createElement('link')
        link.setAttribute('rel', 'alternate')
        link.setAttribute('hreflang', alt.hreflang)
        link.setAttribute('href', alt.href)
        link.setAttribute('data-seo-hreflang', '')
        document.head.appendChild(link)
      })
    } else {
      // Default alternates for bilingual site
      const currentPath = window.location.pathname
      const enPath = currentPath.replace(/^\/zh/, '/en')
      const zhPath = currentPath.replace(/^\/en/, '/zh')

      const alts = [
        { hreflang: 'en-ca', href: 'https://www.ccbonline.ca' + (enPath === '/en' ? '/en' : enPath) },
        { hreflang: 'zh-Hans', href: 'https://www.ccbonline.ca' + (zhPath === '/zh' ? '/zh' : zhPath) },
        { hreflang: 'x-default', href: 'https://www.ccbonline.ca' + (currentPath.startsWith('/zh') ? zhPath : enPath) },
      ]

      alts.forEach(alt => {
        const link = document.createElement('link')
        link.setAttribute('rel', 'alternate')
        link.setAttribute('hreflang', alt.hreflang)
        link.setAttribute('href', alt.href)
        link.setAttribute('data-seo-hreflang', '')
        document.head.appendChild(link)
      })
    }

    // Cleanup on unmount
    return () => {
      // Keep the meta tags for SPA - they will be overwritten by next page
    }
  }, [config.title, config.description, config.canonical, config.ogTitle, config.ogDescription, config.ogType, config.ogImage, config.twitterCard, config.twitterTitle, config.twitterDescription, config.twitterImage, config.lang, config.hreflang])
}

export default useSEO
