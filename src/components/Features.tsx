import { Language, translations } from '@/lib/translations'

interface FeaturesProps {
  language: Language;
}

export default function Features({ language }: FeaturesProps) {
  const t = translations[language]

  const features = [
    {
      title: t.features.recipeManagement.title,
      description: t.features.recipeManagement.description,
      icon: "📝",
      color: "bg-blue-500"
    },
    {
      title: t.features.ingredientSearch.title,
      description: t.features.ingredientSearch.description,
      icon: "🔍",
      color: "bg-green-500"
    },
    {
      title: t.features.cookingLog.title,
      description: t.features.cookingLog.description,
      icon: "📔",
      color: "bg-purple-500"
    },
    {
      title: t.features.versionManagement.title,
      description: t.features.versionManagement.description,
      icon: "🔄",
      color: "bg-orange-500"
    },
    {
      title: t.features.ingredientLibrary.title,
      description: t.features.ingredientLibrary.description,
      icon: "📚",
      color: "bg-pink-500"
    },
    {
      title: t.features.intuitiveUI.title,
      description: t.features.intuitiveUI.description,
      icon: "✨",
      color: "bg-indigo-500"
    }
  ]

  return (
    <section className="py-20 bg-gray-50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t.features.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-full flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}