import { Language, translations } from '@/lib/translations'

interface HeroProps {
  language: Language;
}

export default function Hero({ language }: HeroProps) {
  const t = translations[language]

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-orange-100 overflow-hidden pt-16">
      <div className="absolute inset-0 opacity-50">
        <div className="w-full h-full bg-orange-50 bg-opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900">
              <span className="block">{t.hero.title}</span>
              <span className="block text-orange-500">{t.hero.titleAccent}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto whitespace-pre-line">
              {t.hero.subtitle}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gray-400 text-white font-semibold py-4 px-8 rounded-full text-lg cursor-not-allowed opacity-70">
              {t.hero.appStoreComingSoon}
            </button>
            <a
              href="https://play.google.com/store/apps/details?id=com.zerodice0.recipick_flutter"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-8 rounded-full text-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {t.hero.googlePlayDownload}
            </a>
          </div>
        </div>
        
        <div className="mt-16 relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md mx-auto transform rotate-3 hover:rotate-0 transition-transform duration-300 float">
            <div className="bg-orange-500 rounded-t-xl h-8 mb-4 flex items-center px-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
                <div className="w-3 h-3 bg-white/30 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-3 bg-gray-100 rounded w-full"></div>
              <div className="h-3 bg-gray-100 rounded w-2/3"></div>
              <div className="flex space-x-2">
                <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">chili powder</div>
                <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm">ketchup</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}