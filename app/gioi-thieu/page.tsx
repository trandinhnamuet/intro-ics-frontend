import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"

export default function GioiThieuPage() {
  return (
    <>
      <Header />
      
      {/* Banner Section */}
      <div className="relative w-full h-[300px] mt-24">
        <Image
          src="/images/0.jpg"
          alt="Giới thiệu chung"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white">Giới thiệu chung</h1>
        </div>
      </div>

      {/* Main Content with Sidebar */}
      <main className="min-h-screen">
        <div className="w-full px-16 lg:px-32 py-12">
          <div className="flex gap-8">
            <Sidebar />
            <div className="flex-1">
              {/* Video Section */}
              <section className="py-12 bg-background">
                <div className="w-full">
                    
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <video
                controls
                autoPlay
                muted
                className="w-full h-full"
                poster="/video-thumbnail.jpg"
              >
                <source
                  src="/videos/1.mp4"
                  type="video/mp4"
                />
                Trình duyệt của bạn không hỗ trợ video.
              </video>
            </div>
          </div>

          {/* Company Description */}
          <div className="max-w-5xl mx-auto space-y-6 text-lg leading-relaxed">
            <p>
              <strong>CÔNG TY CỔ PHẦN AN NINH MẠNG QUỐC TẾ – ICS</strong> là đơn vị tiên phong trong lĩnh vực an ninh 
              mạng tại Việt Nam và khu vực, chuyên cung cấp các giải pháp bảo mật toàn diện cho thời đại công nghệ số. 
              Với sứ mệnh bảo vệ hệ sinh thái số một cách an toàn, hiệu quả và bền vững, ICS không ngừng nghiên cứu, 
              phát triển và ứng dụng các công nghệ hiện đại nhằm giúp doanh nghiệp, tổ chức và chính phủ đối phó với 
              các mối đe dọa an ninh ngày càng tinh vi.
            </p>

            <p>
              ICS tập trung vào các giải pháp bảo mật cho nhiều lĩnh vực trọng yếu, bao gồm: bảo vệ ứng dụng (app protection), 
              an ninh cho nhà máy thông minh (smart factory security), tòa nhà thông minh (smart building) và đặc biệt là 
              hệ thống điều hành trung tâm AI SOC (Artificial Intelligence Security Operations Center) – một bước đột phá 
              trong việc giám sát và phản ứng nhanh trước các cuộc tấn công mạng. Với AI SOC, ICS giúp khách hàng phát hiện 
              sớm các rủi ro, chủ động phòng ngừa, đồng thời giảm thiểu tổn thất trong thời gian thực.
            </p>

            <p>
              Bằng việc ứng dụng công nghệ trí tuệ nhân tạo (AI), học máy (machine learning) và các chuẩn bảo mật tiên tiến 
              quốc tế, ICS mang đến những giải pháp bảo mật mang tính cá nhân hóa, đáp ứng nhu cầu đặc thù của từng tổ chức. 
              Từ việc bảo vệ dữ liệu nội bộ, hệ thống vận hành đến các thiết bị IoT trong tòa nhà hay nhà máy, ICS luôn đảm 
              bảo tính toàn vẹn, sẵn sàng và bảo mật thông tin ở mức cao nhất.
            </p>

            <p>
              Với đội ngũ chuyên gia có nhiều năm kinh nghiệm trong lĩnh vực an ninh mạng, từng triển khai thành công hàng 
              trăm dự án lớn trong và ngoài nước, ICS cam kết đồng hành cùng khách hàng trên hành trình chuyển đổi số an 
              toàn và bền vững. Không chỉ là nhà cung cấp giải pháp, ICS còn là đối tác chiến lược, góp phần nâng cao nhận 
              thức và năng lực phòng thủ không gian mạng cho cộng đồng và doanh nghiệp.
            </p>

            <p>
              Trong thời đại mà không gian số là yếu tố sống còn của mọi hoạt động kinh tế – xã hội, ICS khẳng định vị thế 
              là lá chắn tin cậy, bảo vệ giá trị số của tổ chức và doanh nghiệp trước mọi hiểm họa mạng.
            </p>
          </div>
        </div>
      </section>

      {/* Three Columns Section */}
      <section className="py-12 bg-muted/30">
        <div className="w-full px-0 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
            {/* VietGuard */}
            <div className="group">
              <div className="relative w-full h-[140px] mb-3 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-white">
                <Image
                  src="/images/1.jpg"
                  alt="VietGuard"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                <span className="font-bold">VietGuard</span> là một giải pháp bảo mật tiên tiến, được thiết kế để ngăn chặn các mối đe dọa mạng bằng cách áp dụng nguyên tắc “Zero Trust” ngay tại điểm cuối, giúp bảo vệ hệ thống mà không cần nhận diện phần mềm độc hại.
              </p>
            </div>

            {/* ESG */}
            <div className="group">
              <div className="relative w-full h-[140px] mb-3 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-white">
                <Image
                  src="/images/2.jpg"
                  alt="ESG"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                <span className="font-bold">ESG</span> (Environmental, Social, and Governance) giúp các doanh nghiệp phát triển bền vững bằng cách tối ưu hóa tác động môi trường, đảm bảo trách nhiệm xã hội và xây dựng hệ thống quản trị minh bạch. Đây là yếu tố quan trọng giúp nâng cao uy tín và thu hút đầu tư trong kỷ nguyên chuyển đổi số.
              </p>
            </div>

            {/* IoT */}
            <div className="group">
              <div className="relative w-full h-[140px] mb-3 rounded-lg overflow-hidden shadow-lg flex items-center justify-center bg-white">
                <Image
                  src="/images/3.jpg"
                  alt="IoT"
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                <span className="font-bold">IoT</span> (Internet of Things) là một mạng lưới các thiết bị và đối tượng vật lý được tích hợp cảm biến, phần mềm và công nghệ kết nối, cho phép chúng thu thập, trao đổi dữ liệu và tương tác với nhau thông qua internet mà không cần sự can thiệp trực tiếp của con người.
              </p>
            </div>
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
