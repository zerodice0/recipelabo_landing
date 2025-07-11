'use client'

import { useEffect } from 'react'
import { Language, translations } from '@/lib/translations'

interface DynamicHeadProps {
  language: Language;
}

export default function DynamicHead({ language }: DynamicHeadProps) {
  const t = translations[language]

  useEffect(() => {
    // 동적으로 title과 meta description 업데이트
    document.title = `${t.appName} - ${t.tagline}`
    
    // Meta description 업데이트
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t.hero.subtitle)
    }

    // HTML lang 속성 업데이트
    document.documentElement.lang = language
    
    // OG meta tags 업데이트
    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) {
      ogTitle.setAttribute('content', `${t.appName} - ${t.tagline}`)
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]')
    if (ogDescription) {
      ogDescription.setAttribute('content', t.hero.subtitle)
    }

    // Twitter meta tags 업데이트
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    if (twitterTitle) {
      twitterTitle.setAttribute('content', `${t.appName} - ${t.tagline}`)
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    if (twitterDescription) {
      twitterDescription.setAttribute('content', t.hero.subtitle)
    }
  }, [language, t])

  return null // 이 컴포넌트는 렌더링하지 않음
}