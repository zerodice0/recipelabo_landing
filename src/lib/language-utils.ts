import { Language } from './translations'

const LANGUAGE_MAP: Record<string, Language> = {
  'ko': 'ko',
  'kr': 'ko',
  'en': 'en',
  'english': 'en',
  'ja': 'ja',
  'jp': 'ja',
  'japanese': 'ja'
}

export function getLanguageFromUrl(): Language {
  if (typeof window === 'undefined') return 'ko'
  
  const urlParams = new URLSearchParams(window.location.search)
  const langParam = urlParams.get('lang')?.toLowerCase()
  
  if (langParam && LANGUAGE_MAP[langParam]) {
    return LANGUAGE_MAP[langParam]
  }
  
  return 'ko' // 기본값
}

export function updateUrlWithLanguage(language: Language) {
  if (typeof window === 'undefined') return
  
  const url = new URL(window.location.href)
  
  if (language === 'ko') {
    // 한국어가 기본값이므로 쿼리 파라미터 제거
    url.searchParams.delete('lang')
  } else {
    const langCode = language === 'ja' ? 'jp' : language
    url.searchParams.set('lang', langCode)
  }
  
  // 페이지 새로고침 없이 URL 업데이트
  window.history.replaceState({}, '', url.toString())
}

export function getLanguageCode(language: Language): string {
  return language === 'ja' ? 'jp' : language
}