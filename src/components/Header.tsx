'use client'

import LanguageSelector from './LanguageSelector'
import { Language, translations } from '@/lib/translations'

interface HeaderProps {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

export default function Header({ language, onLanguageChange }: HeaderProps) {
  const t = translations[language]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🍳</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{t.appName}</h1>
              <p className="text-xs text-gray-500">{t.tagline}</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-orange-500 transition-colors">{t.footer.features}</a>
            <a href="#screenshots" className="text-gray-600 hover:text-orange-500 transition-colors">{t.footer.screenshots}</a>
            <a href="#download" className="text-gray-600 hover:text-orange-500 transition-colors">{t.footer.download}</a>
          </nav>

          <div className="flex items-center space-x-4">
            <LanguageSelector currentLanguage={language} onLanguageChange={onLanguageChange} />
            <a
              href="https://play.google.com/store/apps/details?id=com.zerodice0.recipick_flutter"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              {t.hero.googlePlayDownload}
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}