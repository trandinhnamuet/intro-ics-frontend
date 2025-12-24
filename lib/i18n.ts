import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import vi from '../locales/vi.json'
import en from '../locales/en.json'
import zh from '../locales/zh.json'
import ja from '../locales/ja.json'
import ko from '../locales/ko.json'

const isClient = typeof window !== 'undefined'

const supportedLngs = ['vi', 'en', 'zh', 'ja', 'ko']

// Determine initial language (prefer saved on client)
let initialLng = 'vi'
if (isClient) {
  const saved = localStorage.getItem('preferred-language')
  if (saved && supportedLngs.includes(saved)) {
    initialLng = saved
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources: {
      vi: { translation: vi },
      en: { translation: en },
      zh: { translation: zh },
      ko: { translation: ko },
      ja: { translation: ja },
    },
    lng: initialLng,
    fallbackLng: 'vi',
    supportedLngs,
    load: 'languageOnly',
    interpolation: {
      escapeValue: false
    },
    debug: process.env.NODE_ENV === 'development'
  })

// If client and saved language differs from current, ensure change
if (isClient) {
  const savedLang = localStorage.getItem('preferred-language')
  if (savedLang && supportedLngs.includes(savedLang) && savedLang !== i18n.language) {
    i18n.changeLanguage(savedLang)
  }
}

// Persist language changes
i18n.on('languageChanged', (lng: string) => {
  if (isClient) {
    try {
      localStorage.setItem('preferred-language', lng)
    } catch (e) {
      // ignore storage errors
    }
  }
})

export default i18n
