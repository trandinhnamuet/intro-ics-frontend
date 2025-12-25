"use client"

import { useTranslation } from "react-i18next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { Phone, Mail, Globe, MapPin, Building2 } from "lucide-react"

export default function ContactPage() {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      
      {/* Full-width Banner */}
      <div 
        className="relative overflow-hidden text-white text-center py-20 w-full mt-24"
        style={{
          backgroundImage: "url('/bglienhe.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            {t('contact.title')}
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
              {/* Three Column Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 auto-rows-max">
          {/* Company Info Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{t('contact.companyInfo')}</h3>
                <p className="text-blue-100 text-sm">{t('contact.companyName')}</p>
              </div>
            </div>
            <div className="p-6">
              <div className="bg-green-50 rounded-lg p-4 flex gap-3">
                <MapPin className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800">{t('contact.hanoiOffice')}</p>
                  <a 
                    href="https://www.google.com/maps?ll=20.979021,105.816183&z=16&t=m&hl=vi&gl=US&mapclient=embed&cid=12624892976792149208"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 text-sm hover:text-[#0984c7] transition-colors"
                  >
                    TT3-5 Khu đô thị Đại Kim mới, Định Công, Hà Nội
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{t('contact.contactInfo')}</h3>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {/* Phone */}
              <div className="bg-orange-50 rounded-lg p-4 flex gap-3">
                <Phone className="w-5 h-5 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{t('contact.phone')}</p>
                  <a 
                    href="tel:0707806860"
                    className="text-gray-700 font-bold text-lg hover:text-[#0984c7] transition-colors"
                  >
                    0707.806.860
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-purple-50 rounded-lg p-4 flex gap-3">
                <Mail className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{t('contact.email')}</p>
                  <a 
                    href="mailto:info@icss.com.vn"
                    className="text-gray-700 hover:text-[#0984c7] transition-colors break-all"
                  >
                    info@icss.com.vn
                  </a>
                </div>
              </div>

              {/* Website */}
              <div className="bg-blue-50 rounded-lg p-4 flex gap-3">
                <Globe className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{t('contact.website')}</p>
                  <a 
                    href="https://www.icss.com.vn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#0984c7] transition-colors"
                  >
                    www.icss.com.vn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Map Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-red-500 to-red-600 p-6 flex items-center gap-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-lg">{t('contact.location')}</h3>
                <p className="text-red-100 text-sm">{t('contact.locationSubtitle')}</p>
              </div>
            </div>
            <div className="p-0 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.311085903712!2d105.81131271037547!3d20.980163589366107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad001d0b43d3%3A0xaf34a145d9051cd8!2sICSS!5e0!3m2!1svi!2s!4v1748080621408!5m2!1svi!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map ICSS"
              ></iframe>
            </div>
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