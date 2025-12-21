import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import Link from "next/link"

export default function GiaiPhapESGPage() {
  return (
    <>
      <Header />
      
      {/* Banner Section */}
      <div className="relative h-[250px] bg-cover bg-center mt-24" style={{ backgroundImage: "url('https://icss.com.vn/wp-content/uploads/2018/09/bg-gioi-thieu.jpg')" }}>
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative container mx-auto px-16 lg:px-32 h-full flex items-center">
          <h1 className="text-4xl lg:text-5xl font-normal text-white">
            Giải pháp ESG
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-16 lg:px-32 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4">
            <Sidebar />
          </aside>

          {/* Content */}
          <main className="lg:w-3/4">
            <h2 className="text-2xl font-bold mb-4">
              ESG: Từ Áp Lực Tuân Thủ Đến Lợi Thế Cạnh Tranh – Lộ Trình Chiến Lược Cho Doanh Nghiệp Việt
            </h2>
            
            <p className="mb-4 text-justify">
              Trong thế giới phẳng và một kỷ nguyên kinh doanh đầy biến động, thước đo thành công của một doanh nghiệp không chỉ còn nằm ở những con số lợi nhuận trên báo cáo tài chính. Một cuộc chuyển dịch mang tính toàn cầu đang diễn ra, nơi giá trị của doanh nghiệp được định hình bởi cả những yếu tố vô hình nhưng đầy sức mạnh: trách nhiệm với môi trường, cam kết với xã hội và sự minh bạch trong quản trị. Đó chính là ba trụ cột của ESG (Môi trường – Xã hội – Quản trị).
            </p>

            <p className="mb-4 text-justify">
              ESG không còn là một "xu hướng" truyền thông hay một hoạt động từ thiện đơn thuần. Giờ đây, nó đã trở thành một yêu cầu kinh doanh tất yếu. Áp lực đang đến từ mọi phía: từ các nhà đầu tư yêu cầu sự minh bạch về rủi ro khí hậu, từ người tiêu dùng thông thái ưu tiên các sản phẩm bền vững, từ các quy định ngày càng khắt khe của các thị trường xuất khẩu lớn như EU, và từ chính yêu cầu của các đối tác trong chuỗi cung ứng toàn cầu.
            </p>

            <p className="mb-6 text-justify">
              Trước làn sóng này, câu hỏi đặt ra cho các nhà lãnh đạo không còn là "có nên" thực hành ESG hay không, mà là "làm thế nào" để triển khai một cách chiến lược, biến áp lực tuân thủ thành một lợi thế cạnh tranh thực sự.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">
              Phần 1: Tại sao ESG là "ván cờ" chiến lược mà bạn không thể đứng ngoài?
            </h3>
            
            <p className="mb-4 text-justify">
              Nhiều doanh nghiệp vẫn nhìn nhận ESG qua lăng kính chi phí. Nhưng với một tầm nhìn chiến lược, ESG chính là một khoản đầu tư vào sức bật và sự trường tồn của doanh nghiệp.
            </p>

            <h4 className="text-lg font-bold mb-2">
              E (Environment – Môi trường): Quản trị Rủi ro và Tối ưu Hiệu quả
            </h4>
            
            <p className="mb-4 text-justify">
              Việc thực hành các tiêu chuẩn về môi trường không chỉ là bảo vệ hành tinh. Đó là việc quản trị rủi ro cho hoạt động kinh doanh trước các biến động về khí hậu, tối ưu hóa chi phí vận hành thông qua việc tiết kiệm năng lượng cho tòa nhà, nhà máy, và sử dụng tài nguyên hiệu quả. Một chiến lược ESG tốt giúp doanh nghiệp giảm sự phụ thuộc vào các nguồn tài nguyên hữu hạn, từ đó tăng cường sự ổn định và khả năng phục hồi.
            </p>

            <h4 className="text-lg font-bold mb-2">
              S (Social – Xã hội): Nguồn vốn Con người và Tài sản Thương hiệu
            </h4>
            
            <p className="mb-4 text-justify">
              Trong cuộc chiến giành giật nhân tài, một môi trường làm việc an toàn, công bằng và đầy cảm hứng là một lợi thế không thể đo đếm. Các chính sách xã hội tiến bộ không chỉ giúp thu hút và giữ chân những cá nhân xuất sắc nhất, mà còn xây dựng một thương hiệu được yêu mến và tin tưởng trong cộng đồng. Đây chính là tài sản thương hiệu vô giá.
            </p>

            <h4 className="text-lg font-bold mb-2">
              G (Governance – Quản trị): Nền tảng của Sự Tin cậy và Tăng trưởng
            </h4>
            
            <p className="mb-6 text-justify">
              Quản trị minh bạch, đạo đức và có trách nhiệm giải trình là nền tảng cho mọi sự phát triển ổn định. Một hệ thống quản trị vững chắc giúp giảm thiểu rủi ro pháp lý, tăng cường niềm tin của các nhà đầu tư, và mở ra các cơ hội tiếp cận nguồn vốn quốc tế, đặc biệt là các dòng đầu tư ESG đang ngày càng lớn mạnh.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">
              Phần 2: Những rào cản trên hành trình chinh phục ESG
            </h3>
            
            <p className="mb-3 text-justify">
              Mặc dù nhận thức được tầm quan trọng, nhiều doanh nghiệp Việt Nam vẫn gặp phải những rào cản đáng kể khi bắt tay vào triển khai ESG:
            </p>

            <ul className="list-disc ml-6 mb-4">
              <li className="mb-2 text-justify">
                <strong>Sự phức tạp:</strong> ESG bao trùm một phạm vi rất rộng. Nhiều doanh nghiệp không biết phải bắt đầu từ đâu, ưu tiên yếu tố nào trước?
              </li>
              <li className="mb-2 text-justify">
                <strong>Thiếu chuyên môn:</strong> Việc xây dựng chiến lược, thiết lập KPI và đo lường hiệu quả đòi hỏi kiến thức chuyên sâu về cả kinh doanh, kỹ thuật và các chuẩn mực quốc tế.
              </li>
              <li className="mb-2 text-justify">
                <strong>Khó khăn trong tích hợp:</strong> Làm thế nào để lồng ghép các mục tiêu ESG vào chiến lược kinh doanh cốt lõi, thay vì biến nó thành một hoạt động bên lề của phòng marketing hay nhân sự?
              </li>
              <li className="text-justify">
                <strong>Rủi ro "Tẩy xanh" (Greenwashing):</strong> Làm thế nào để xây dựng và truyền thông các báo cáo một cách thuyết phục, minh bạch, tránh được những cáo buộc về việc "làm màu" vì mục đích quảng cáo?
              </li>
            </ul>

            <p className="mb-6 text-justify">
              Những thách thức này đòi hỏi một người dẫn đường có chuyên môn, kinh nghiệm và tầm nhìn.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">
              Phần 3: Dịch vụ tư vấn chiến lược ESG của chúng tôi – lộ trình 4 bước đến bền vững
            </h3>
            
            <p className="mb-4 text-justify">
              Chúng tôi không cung cấp một giải pháp đóng hộp. Chúng tôi đóng vai trò là một "hoa tiêu chiến lược", đồng hành cùng doanh nghiệp của bạn trên hành trình kiến tạo giá trị bền vững thông qua một quy trình tư vấn chuyên nghiệp gồm 4 bước:
            </p>

            <h4 className="text-lg font-bold mb-2">
              Bước 1: Đánh giá hiện trạng & định vị (ESG Assessment)
            </h4>
            
            <p className="mb-4 text-justify">
              Chúng tôi tiến hành một cuộc "khám sức khỏe" ESG toàn diện cho doanh nghiệp, phân tích các hoạt động hiện tại, phỏng vấn các bên liên quan và so sánh với các doanh nghiệp cùng ngành cũng như các chuẩn mực quốc tế. Kết quả là một báo cáo chi tiết chỉ ra điểm mạnh, điểm yếu, cơ hội và rủi ro ESG của bạn.
            </p>

            <h4 className="text-lg font-bold mb-2">
              Bước 2: Xây dựng chiến lược & lộ trình (ESG Strategy & Roadmap)
            </h4>
            
            <p className="mb-4 text-justify">
              Dựa trên kết quả đánh giá, chúng tôi sẽ tổ chức các buổi làm việc chiến lược với ban lãnh đạo để xác định các mục tiêu ESG ưu tiên, phù hợp nhất với mô hình kinh doanh và tầm nhìn của công ty. Chúng tôi sẽ cùng bạn thiết lập các chỉ số đo lường hiệu quả (KPIs) và xây dựng một lộ trình hành động cụ thể, khả thi cho từng giai đoạn.
            </p>

            <h4 className="text-lg font-bold mb-2">
              Bước 3: Hỗ trợ triển khai & tích hợp (Implementation Support)
            </h4>
            
            <p className="mb-4 text-justify">
              Một chiến lược dù hoàn hảo đến đâu cũng sẽ vô nghĩa nếu chỉ nằm trên giấy. Đội ngũ của chúng tôi sẽ đồng hành cùng các phòng ban liên quan của bạn, từ vận hành, tài chính đến nhân sự, để tư vấn và hỗ trợ việc đưa các sáng kiến ESG vào thực tiễn hoạt động hàng ngày, đảm bảo sự thay đổi diễn ra một cách mượt mà và hiệu quả.
            </p>

            <h4 className="text-lg font-bold mb-2">
              Bước 4: Đo lường & báo cáo bền vững (ESG Reporting)
            </h4>
            
            <p className="mb-6 text-justify">
              Tính minh bạch là chìa khóa của sự tin cậy. Chúng tôi hỗ trợ doanh nghiệp xây dựng các báo cáo ESG và báo cáo phát triển bền vững theo các tiêu chuẩn quốc tế được công nhận rộng rãi như GRI (Global Reporting Initiative) hay SASB. Một báo cáo chuyên nghiệp không chỉ giúp bạn đáp ứng yêu cầu của nhà đầu tư mà còn là một công cụ truyền thông mạnh mẽ.
            </p>

            <h3 className="text-xl font-bold mb-3 mt-6">
              Tại sao chọn chúng tôi làm Đối Tác Chiến Lược?
            </h3>
            
            <ul className="list-disc ml-6 mb-6">
              <li className="mb-2 text-justify">
                <strong>Đội ngũ chuyên gia đa ngành:</strong> Chúng tôi quy tụ các chuyên gia không chỉ về môi trường, mà còn về tài chính, quản trị doanh nghiệp, nhân sự và chuỗi cung ứng.
              </li>
              <li className="mb-2 text-justify">
                <strong>Am hiểu sâu sắc thị trường Việt Nam:</strong> Chúng tôi áp dụng các chuẩn mực quốc tế nhưng luôn điều chỉnh cho phù hợp với bối cảnh pháp lý, văn hóa và thách thức riêng của các doanh nghiệp tại Việt Nam.
              </li>
              <li className="mb-2 text-justify">
                <strong>Phương pháp luận đã được chứng thực:</strong> Quy trình tư vấn của chúng tôi được xây dựng dựa trên kinh nghiệm thực tiễn và đã được chứng minh hiệu quả tại nhiều doanh nghiệp hàng đầu.
              </li>
              <li className="text-justify">
                <strong>Cam kết đồng hành dài hạn:</strong> Chúng tôi xem thành công của bạn là thành công của chúng tôi và cam kết trở thành một đối tác chiến lược trên suốt hành trình phát triển bền vững của bạn.
              </li>
            </ul>

            <p className="mb-4 text-justify">
              Trong một thế giới đầy biến động, doanh nghiệp bền vững không chỉ là doanh nghiệp tạo ra lợi nhuận, mà là doanh nghiệp có khả năng thích ứng, phục hồi và tạo ra giá trị lâu dài cho tất cả các bên liên quan. Đầu tư vào ESG chính là đầu tư vào tương lai và sức bật của doanh nghiệp bạn.
            </p>
          </main>
        </div>
      </div>

      <Footer />
    </>
  )
}
