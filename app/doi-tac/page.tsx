"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import { Users } from "lucide-react"

export default function PartnerPage() {
  const partners = [
    {
      name: "HyperG",
      description: "HyperG Security cung cấp giải pháp an ninh mạng ứng dụng AI và Cloud. Bảo vệ doanh nghiệp trước mọi rủi ro số.",
      logo: "https://icss.com.vn/wp-content/uploads/2025/06/z6603220865281_a8751c9cd03f48ec5ef9b82d700917d8.jpg"
    },
    {
      name: "Oracle",
      description: "Oracle là tập đoàn công nghệ hàng đầu, cung cấp hệ quản trị cơ sở dữ liệu, phần mềm doanh nghiệp, đồng thời phát triển điện toán đám mây, AI và an ninh mạng.",
      logo: "https://icss.com.vn/wp-content/uploads/2025/08/Webo.OracleProfile-696x696-1.png"
    },
    {
      name: "Gamania",
      description: "Gamania là công ty giải trí số hàng đầu, chuyên phát triển và phát hành game trực tuyến, đồng thời mở rộng sang thanh toán điện tử, cloud và an ninh mạng.",
      logo: "https://icss.com.vn/wp-content/uploads/2025/06/z6603219309871_c0cf6fdc0c2ede77ee4a3920f5b54e4f.jpg"
    }
  ]

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
            ĐỐI TÁC CỦA CHÚNG TÔI
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
              <h2 className="text-3xl font-bold text-gray-800 mb-8">VỀ ĐỐI TÁC CỦA CHÚNG TÔI</h2>
              
              {/* Partner Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                {partners.map((partner, idx) => (
                  <div 
                    key={idx}
                    className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    <div className="h-64 bg-gray-100 flex items-center justify-center p-6">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-[#0984c7] mb-3">
                        {partner.name}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-[#0984c7] to-[#0770a8] rounded-lg shadow-lg p-12 text-center">
                <div className="flex justify-center mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  ĐĂNG KÝ ĐỂ TRỞ THÀNH ĐỐI TÁC CỦA CHÚNG TÔI
                </h3>
                <p className="text-blue-100 text-lg mb-6">
                  Hãy liên hệ với chúng tôi để tìm hiểu thêm về các cơ hội hợp tác
                </p>
                <a 
                  href="/lien-he"
                  className="inline-block bg-white text-[#0984c7] font-bold py-3 px-8 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Liên hệ ngay
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
