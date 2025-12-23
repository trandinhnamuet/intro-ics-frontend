"use client"

import { useTranslation } from "react-i18next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import Link from "next/link"

export default function NhaMayThongMinhPage() {
  const { t } = useTranslation()
  return (
    <>
      <Header />
      
      {/* Banner Section */}
      <div className="relative h-[250px] bg-cover bg-center mt-24" style={{ backgroundImage: "url('https://icss.com.vn/wp-content/uploads/2018/09/bg-gioi-thieu.jpg')" }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative w-full container-responsive h-full flex items-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Giải pháp Nhà máy thông minh
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full container-responsive py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <Sidebar />
          </aside>

          {/* Content */}
          <main className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">
              Giải pháp Nhà máy thông minh thế hệ mới
            </h2>
            
            <p className="mb-4 text-justify">
              Hệ thống của chúng tôi sử dụng Trí tuệ nhân tạo (AI) và Internet vạn vật (IoT) để thu thập dữ liệu vận hành theo thời gian thực, tự động phân tích và đưa ra các quyết định thông minh. Kết quả là một tòa nhà không chỉ biết "phản ứng" mà còn có khả năng "thích ứng" và "dự báo", mang lại hiệu quả vượt trội trên mọi phương diện.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">
              Các Tính năng Cốt lõi và Lợi ích Vượt trội
            </h3>
            
            <p className="mb-4 text-justify">
              Giải pháp Smart Building được xây dựng trên các trụ cột công nghệ vững chắc, mỗi trụ cột đều mang lại những giá trị kinh tế và trải nghiệm rõ rệt.
            </p>

            <h4 className="text-lg font-bold mb-2 mt-5">
              1. Hệ thống Quản lý Năng lượng Thông minh (EMS)
            </h4>
            
            <p className="mb-3 text-justify">
              Hệ thống sử dụng các thuật toán AI để phân tích thói quen sử dụng, điều kiện thời tiết và sự hiện diện của con người. Từ đó, nó tự động tối ưu hóa hoạt động của hệ thống điều hòa và chiếu sáng – tắt các thiết bị ở khu vực không có người, điều chỉnh nhiệt độ theo lịch trình, và tận dụng tối đa ánh sáng tự nhiên.
            </p>

            <ul className="list-disc ml-6 mb-4">
              <li className="text-justify">
                <strong>Lợi ích:</strong> Đây là đòn bẩy tài chính mạnh mẽ nhất. Giải pháp của chúng tôi giúp <strong>tiết kiệm từ 30-40% chi phí điện năng</strong> hàng tháng, một con số khổng lồ đối với các tòa nhà quy mô lớn. Hơn nữa, việc <strong>tiết kiệm năng lượng cho tòa nhà</strong> còn giúp giảm dấu chân carbon, là một điểm cộng lớn cho các chứng chỉ công trình xanh và nâng cao hình ảnh thương hiệu bền vững.
              </li>
            </ul>

            <h4 className="text-lg font-bold mb-2 mt-5">
              2. An ninh Tích hợp và Kiểm soát ra vào Thông minh
            </h4>
            
            <p className="mb-3 text-justify">
              Chúng tôi hợp nhất hệ thống camera giám sát AI, kiểm soát cửa ra vào bằng nhận diện khuôn mặt, thẻ từ hoặc ứng dụng điện thoại. Hệ thống có thể tự động nhận diện các hành vi bất thường, cảnh báo ngay lập tức cho đội ngũ an ninh và lưu trữ dữ liệu để dễ dàng truy vết khi cần.
            </p>

            <ul className="list-disc ml-6 mb-4">
              <li className="text-justify">
                <strong>Lợi ích:</strong> Mang lại một môi trường <strong>an toàn tuyệt đối</strong> và <strong>an ninh thông minh</strong> 24/7. Việc quản lý truy cập trở nên liền mạch và dễ dàng, loại bỏ các quy trình thủ công phức tạp. Đối với ban quản lý, việc truy vết và xuất báo cáo an ninh chỉ mất vài cú nhấp chuột.
              </li>
            </ul>

            <h4 className="text-lg font-bold mb-2 mt-5">
              3. Tự động hóa Tiện ích (Điều hòa, Chiếu sáng, Rèm cửa)
            </h4>
            
            <p className="mb-3 text-justify">
              Người dùng có thể cá nhân hóa không gian làm việc hoặc sinh sống của mình chỉ bằng một vài thao tác trên ứng dụng di động. Hơn thế nữa, hệ thống có thể tự động điều chỉnh rèm cửa dựa trên hướng nắng, điều chỉnh ánh sáng và nhiệt độ dựa trên số lượng người trong phòng.
            </p>

            <ul className="list-disc ml-6 mb-4">
              <li className="text-justify">
                <strong>Lợi ích:</strong> Mang lại <strong>sự tiện nghi và thoải mái tối đa</strong>, trực tiếp nâng cao trải nghiệm và sự hài lòng của người sử dụng tòa nhà. Đối với các văn phòng cho thuê, đây là một yếu tố cạnh tranh đắt giá để thu hút các công ty hàng đầu.
              </li>
            </ul>

            <h4 className="text-lg font-bold mb-2 mt-5">
              4. Nền tảng Quản lý Tòa nhà Tập trung (BMS)
            </h4>
            
            <p className="mb-3 text-justify">
              Toàn bộ thông tin từ các hệ thống con (năng lượng, an ninh, PCCC, HVAC...) đều được hiển thị trực quan trên một dashboard duy nhất. Từ đây, đội ngũ vận hành có thể giám sát, điều khiển và nhận báo cáo về mọi hoạt động của tòa nhà.
            </p>

            <ul className="list-disc ml-6 mb-4">
              <li className="text-justify">
                <strong>Lợi ích:</strong> Giúp <strong>quản lý tòa nhà hiệu quả</strong> hơn bao giờ hết. Ban quản lý có thể giảm thiểu nhân sự vận hành, ra quyết định nhanh chóng và chính xác hơn. Đặc biệt, hệ thống có khả năng phát hiện sớm các dấu hiệu bất thường của thiết bị, giúp ngăn chặn sự cố trước khi chúng xảy ra.
              </li>
            </ul>

            <h4 className="text-lg font-bold mb-2 mt-5">
              5. Phân tích Dữ liệu và Báo cáo Thông minh
            </h4>
            
            <p className="mb-3 text-justify">
              Dữ liệu là vàng. Hệ thống của chúng tôi liên tục thu thập và phân tích dữ liệu vận hành, từ đó tạo ra các báo cáo thông minh và đưa ra những đề xuất cải tiến cụ thể (ví dụ: "Khu vực tầng 5 có xu hướng tiêu thụ năng lượng cao bất thường vào cuối tuần").
            </p>

            <ul className="list-disc ml-6 mb-4">
              <li className="text-justify">
                <strong>Lợi ích:</strong> Giúp chủ đầu tư và ban quản lý <strong>ra quyết định dựa trên dữ liệu</strong> chứ không phải cảm tính. Đây là chìa khóa để liên tục tối ưu hóa hiệu quả vận hành và cắt giảm chi phí trong dài hạn.
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-3 mt-6">
              Tại sao chọn Giải pháp từ ICS?
            </h3>
            
            <p className="mb-3 text-justify">
              Thị trường có nhiều lựa chọn, nhưng giải pháp của ICS tạo ra sự khác biệt nhờ:
            </p>

            <ul className="list-disc ml-6 mb-4">
              <li className="text-justify">
                <strong>Công nghệ AI độc quyền:</strong> Chúng tôi không chỉ tự động hóa theo kịch bản, mà còn sử dụng AI để hệ thống tự học hỏi và ngày càng thông minh hơn.
              </li>
              <li className="text-justify">
                <strong>Đội ngũ chuyên gia giàu kinh nghiệm:</strong> Chúng tôi cung cấp một giải pháp toàn diện từ tư vấn, thiết kế, triển khai cho đến bảo trì.
              </li>
              <li className="text-justify">
                <strong>Dịch vụ hỗ trợ 24/7:</strong> Đảm bảo hệ thống của bạn luôn hoạt động ổn định và được hỗ trợ kịp thời.
              </li>
              <li className="text-justify">
                <strong>Khả năng tùy biến và mở rộng linh hoạt:</strong> Giải pháp của chúng tôi được thiết kế theo dạng module, dễ dàng tùy chỉnh và nâng cấp theo quy mô phát triển của tòa nhà.
              </li>
            </ul>

            <h3 className="text-xl font-bold mb-3 mt-6">
              Kiến tạo Tương lai cho Tòa nhà của bạn
            </h3>
            
            <p className="mb-4 text-justify">
              Một tòa nhà thông minh không chỉ là một công trình xây dựng – đó là một môi trường sống và làm việc thông minh, bền vững và đầy cảm hứng. Nó giúp cắt giảm chi phí, tăng cường an ninh, nâng cao giá trị tài sản và thu hút những khách hàng tốt nhất. Đầu tư vào một <strong>giải pháp smart building</strong> hôm nay chính là đầu tư cho sự thành công của ngày mai.
            </p>
          </main>
        </div>
      </div>

      <Footer />
    </>
  )
}
