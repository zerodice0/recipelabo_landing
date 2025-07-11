import { Language, translations } from '@/lib/translations'

interface FooterProps {
  language: Language;
}

export default function Footer({ language }: FooterProps) {
  const t = translations[language]

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🍳</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{t.footer.appTitle}</h3>
                <p className="text-gray-400 text-sm">{t.footer.appSubtitle}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <span className="sr-only">Facebook</span>
                📘
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <span className="sr-only">Twitter</span>
                🐦
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <span className="sr-only">Instagram</span>
                📷
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                <span className="sr-only">YouTube</span>
                📺
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t.footer.app}</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-orange-500 transition-colors">{t.footer.features}</a></li>
              <li><a href="#screenshots" className="text-gray-400 hover:text-orange-500 transition-colors">{t.footer.screenshots}</a></li>
              <li><a href="#download" className="text-gray-400 hover:text-orange-500 transition-colors">{t.footer.download}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">{t.footer.updates}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t.footer.support}</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">{t.footer.help}</a></li>
              <li>
                <a 
                  href="mailto:zerodice0@gmail.com?subject=Recipe%20Labo%20Inquiry&body=Hello,%20I%20would%20like%20to%20inquire%20about%20Recipe%20Labo."
                  className="text-gray-400 hover:text-orange-500 transition-colors"
                >
                  {t.footer.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}