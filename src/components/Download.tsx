import { Language, translations } from '@/lib/translations'

interface DownloadProps {
  language: Language;
}

export default function Download({ language }: DownloadProps) {
  const t = translations[language]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-600" id="download">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              {t.download.title}
            </h2>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto whitespace-pre-line">
              {t.download.subtitle}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="bg-gray-600 text-white font-semibold py-4 px-8 rounded-xl text-lg cursor-not-allowed opacity-70 flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">🍎</span>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">{language === 'ko' ? '준비중' : language === 'ja' ? '準備中' : 'Coming Soon'}</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </div>
            
            <a
              href="https://play.google.com/store/apps/details?id=com.zerodice0.recipick_flutter"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-black hover:bg-gray-900 text-white font-semibold py-4 px-8 rounded-xl text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center space-x-3"
            >
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-black font-bold text-sm">📱</span>
              </div>
              <div className="text-left">
                <div className="text-xs text-gray-300">{language === 'ko' ? '다운로드' : language === 'ja' ? 'ダウンロード' : 'Get it on'}</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-white">
              {t.download.featuresTitle}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                t.download.features.free,
                t.download.features.offline,
                t.download.features.ui
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium"
                >
                  {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}