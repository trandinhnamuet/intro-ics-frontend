import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import Link from "next/link"

export default function KhachHangPage() {
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
          <h1 className="text-5xl lg:text-6xl font-bold text-white">Khách hàng</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-muted/20 py-3">
        <div className="w-full px-16 lg:px-32">
          <div className="flex gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Trang chủ</Link>
            <span>›</span>
            <Link href="/gioi-thieu" className="hover:text-primary">Về chúng tôi</Link>
            <span>›</span>
            <span>Khách hàng</span>
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
                    Khách hàng của chúng tôi trải rộng từ <strong>ngân hàng, chính phủ, các doanh nghiệp vừa và nhỏ đến các tập đoàn lớn,</strong> hoạt động trong nhiều ngành nghề khác nhau. Họ đang chuyển đổi số, coi an ninh mạng là nền tảng để phát triển bền vững và giữ vững lợi thế cạnh tranh trên thị trường.
                  </p>
                </div>

                {/* Three Columns Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Finance */}
                  <div className="group text-center">
                    <div className="relative w-full h-[180px] mb-4 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-white">
                      <Image
                        src="https://icss.com.vn/wp-content/uploads/2025/08/cong-nghe-tai-chinh-la-nganh-gi-hinh-anh1-300x180.jpg"
                        alt="Ngành tài chính"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h5 className="font-bold text-lg uppercase text-foreground">Ngành tài chính</h5>
                  </div>

                  {/* Government */}
                  <div className="group text-center">
                    <div className="relative w-full h-[180px] mb-4 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-white">
                      <Image
                        src="https://icss.com.vn/wp-content/uploads/2025/08/pngtree-government-building-with-columns-icon-png-image_1806612-e1754988700564-300x180.jpg"
                        alt="Chính phủ"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h5 className="font-bold text-lg uppercase text-foreground">Chính phủ</h5>
                  </div>

                  {/* Telecom */}
                  <div className="group text-center">
                    <div className="relative w-full h-[180px] mb-4 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-white">
                      <Image
                        src="https://icss.com.vn/wp-content/uploads/2025/08/cong-nghe-vien-thong-e1754988927184-300x190.jpg"
                        alt="Ngành viễn thông"
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h5 className="font-bold text-lg uppercase text-foreground">Ngành viễn thông</h5>
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
