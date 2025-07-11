'use client'

import { useState, useEffect } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Screenshots from '@/components/Screenshots'
import Download from '@/components/Download'
import Footer from '@/components/Footer'
import DynamicHead from '@/components/DynamicHead'
import { Language } from '@/lib/translations'
import { getLanguageFromUrl, updateUrlWithLanguage } from '@/lib/language-utils'

export default function Home() {
  const [language, setLanguage] = useState<Language>('ko')
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // 클라이언트에서만 URL 파라미터를 읽어서 언어 설정
    const urlLanguage = getLanguageFromUrl()
    setLanguage(urlLanguage)
    setIsLoaded(true)
  }, [])

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
    updateUrlWithLanguage(newLanguage)
  }

  // 언어가 로드되기 전까지는 로딩 표시
  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
            <span className="text-white font-bold text-lg">🍳</span>
          </div>
          <div className="text-gray-600">Loading...</div>
        </div>
      </div>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <DynamicHead language={language} />
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <Hero language={language} />
      <Features language={language} />
      <Screenshots language={language} />
      <Download language={language} />
      <Footer language={language} />
    </main>
  )
}