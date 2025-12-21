import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import vi from '../locales/vi.json'
import en from '../locales/en.json'
import zh from '../locales/zh.json'
import ja from '../locales/ja.json'
import ko from '../locales/ko.json'

const isClient = typeof window !== 'undefined'

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
    lng: 'vi', // Ngôn ngữ mặc định
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false
    },
    debug: process.env.NODE_ENV === 'development'
  })

// Tải ngôn ngữ đã lưu từ localStorage khi client mount
if (isClient) {
  const savedLang = localStorage.getItem('preferred-language')
  if (savedLang && ['vi', 'en', 'zh', 'ja', 'ko'].includes(savedLang) && savedLang !== i18n.language) {
    i18n.changeLanguage(savedLang)
  }
}

// Lưu ngôn ngữ vào localStorage khi thay đổi
i18n.on('languageChanged', (lng: string) => {
  if (isClient) {
    localStorage.setItem('preferred-language', lng)
  }
})

export default i18n
