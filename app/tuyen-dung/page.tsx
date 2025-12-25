"use client"

import { useTranslation } from "react-i18next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { Briefcase, Clock } from "lucide-react"

export default function RecruitmentPage() {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      
      {/* Full-width Banner */}
      <div 
        className="relative overflow-hidden text-white text-center py-20 w-full mt-24"
        style={{
          backgroundImage: "url('/bgtuyendung.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            {t('recruitment.title')}
          </h1>
        </div>
      </div>

      <main className="min-h-screen pt-0">
        <div className="w-full px-16 lg:px-32 py-6">
          <div className="flex gap-8">
            {/* Sidebar */}
            <Sidebar />
            
            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-lg p-12 text-center">
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <Briefcase className="w-16 h-16 text-[#0984c7]" />
                    <Clock className="w-8 h-8 text-[#0984c7] absolute -top-2 -right-2" />
                  </div>
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  {t('recruitment.coming_soon')}
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  {t('recruitment.message')}
                </p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="/"
                    className="inline-block bg-[#0984c7] hover:bg-[#0770a8] text-white font-bold py-3 px-8 rounded-lg transition-colors"
                  >
                    {t('common.backHome')}
                  </a>
                  <a 
                    href="/lien-he"
                    className="inline-block bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
                  >
                    {t('common.contact')}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
