"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { Clock } from "lucide-react"

export default function SocialActivitiesPage() {
  return (
    <>
      <Header />
      
      {/* Full-width Banner */}
      <div 
        className="relative overflow-hidden text-white text-center py-20 w-full mt-24"
        style={{
          backgroundImage: "url('https://icss.com.vn/wp-content/uploads/2018/09/bg-gioi-thieu.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            HOẠT ĐỘNG XÃ HỘI
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
                  <Clock className="w-16 h-16 text-[#0984c7]" />
                </div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Nội dung đang được cập nhật…
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Chúng tôi đang chuẩn bị các thông tin về hoạt động xã hội của công ty. Vui lòng quay lại sau để xem nội dung mới.
                </p>
                <a 
                  href="/"
                  className="inline-block bg-[#0984c7] hover:bg-[#0770a8] text-white font-bold py-3 px-8 rounded-lg transition-colors"
                >
                  Quay lại trang chủ
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
