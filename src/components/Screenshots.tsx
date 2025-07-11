import { Language, translations } from '@/lib/translations'
import Image from 'next/image'

interface ScreenshotsProps {
  language: Language;
}

export default function Screenshots({ language }: ScreenshotsProps) {
  const t = translations[language]

  return (
    <section className="py-20 bg-white" id="screenshots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.screenshots.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.screenshots.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-[7/16] overflow-hidden rounded-xl bg-gray-200">
              <Image 
                src="/screenshots/flutter_10.png" 
                alt="Recipe List" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center mt-4 text-gray-700 font-medium">
              {t.screenshots.recipeManagement}
            </p>
          </div>

          <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-[7/16] overflow-hidden rounded-xl bg-gray-200">
              <Image 
                src="/screenshots/flutter_11.png" 
                alt="Ingredient Search" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center mt-4 text-gray-700 font-medium">
              {t.screenshots.cookingLog}
            </p>
          </div>

          <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-[7/16] overflow-hidden rounded-xl bg-gray-200">
              <Image 
                src="/screenshots/flutter_12.png" 
                alt="Recipe Detail" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center mt-4 text-gray-700 font-medium">
              {t.screenshots.recipeDetail}
            </p>
          </div>

          <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-[7/16] overflow-hidden rounded-xl bg-gray-200">
              <Image 
                src="/screenshots/flutter_13.png" 
                alt="Cooking Log" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center mt-4 text-gray-700 font-medium">
              {t.screenshots.versionManagement}
            </p>
          </div>

          <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-[7/16] overflow-hidden rounded-xl bg-gray-200">
              <Image 
                src="/screenshots/flutter_14.png" 
                alt="Version Management" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center mt-4 text-gray-700 font-medium">
              {t.screenshots.ingredientSearch}
            </p>
          </div>

          <div className="group relative bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="relative aspect-[7/16] overflow-hidden rounded-xl bg-gray-200">
              <Image 
                src="/screenshots/flutter_15.png" 
                alt="Ingredient Library" 
                fill
                className="object-cover"
              />
            </div>
            <p className="text-center mt-4 text-gray-700 font-medium">
              {t.screenshots.ingredientLibrary}
            </p>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
            {t.screenshots.cta}
          </div>
        </div>
      </div>
    </section>
  )
}