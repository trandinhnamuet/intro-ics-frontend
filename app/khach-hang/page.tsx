"use client"

import { useTranslation } from "react-i18next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import Link from "next/link"

export default function KhachHangPage() {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      
      {/* Banner Section */}
      <div className="relative w-full h-[300px] mt-24">
        <Image
          src="/images/0.jpg"
          alt="Khách hàng"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white">{t('clients.title')}</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-muted/20 py-3">
        <div className="w-full px-16 lg:px-32">
          <div className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">{t('common.home')}</Link>
            <span>›</span>
            <Link href="/gioi-thieu" className="hover:text-primary">{t('common.about')}</Link>
            <span>›</span>
            <span>{t('clients.title')}</span>
          </div>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <main className="min-h-screen">
        <div className="w-full px-16 lg:px-32 py-12">
          <div className="flex gap-8">
            <Sidebar />
            <div className="flex-1">
              {/* Customer Description */}
              <section className="py-6">
                <div className="prose prose-sm max-w-none mb-12">
                  <p className="text-base leading-relaxed text-foreground">
                    {t('clients.description')}
                  </p>
                </div>

                {/* Three Columns Section - Staggered Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-max">
                  {/* Finance - Offset down */}
                  <div className="group text-center md:mt-12">
                    <div className="relative w-full h-[200px] mb-4 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-white transition-transform duration-300 hover:scale-105">
                      <Image
                        src="/taichinh.jpg"
                        alt="Ngành tài chính"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h5 className="font-bold text-lg uppercase text-foreground">{t('clients.finance')}</h5>
                  </div>

                  {/* Government - Normal position */}
                  <div className="group text-center">
                    <div className="relative w-full h-[200px] mb-4 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-white transition-transform duration-300 hover:scale-105">
                      <Image
                        src="/chinhphu.webp"
                        alt="Chính phủ"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h5 className="font-bold text-lg uppercase text-foreground">{t('clients.government')}</h5>
                  </div>

                  {/* Telecom - Offset down */}
                  <div className="group text-center md:mt-12">
                    <div className="relative w-full h-[200px] mb-4 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-white transition-transform duration-300 hover:scale-105">
                      <Image
                        src="/vienthong.jpg"
                        alt="Ngành viễn thông"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <h5 className="font-bold text-lg uppercase text-foreground">{t('clients.telecom')}</h5>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
