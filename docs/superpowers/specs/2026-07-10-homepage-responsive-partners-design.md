# Homepage Responsive and Partners Redesign

## Goal

Nâng cấp trang chủ `/` để hiển thị cân đối trên laptop và mobile, làm mới khu vực đối tác theo phong cách dark premium của ảnh tham chiếu, cải thiện semantic SEO, và tinh chỉnh cụm hành động nổi mà không làm thay đổi các trang sản phẩm hiện có.

## Scope

- Rà soát và sửa responsive cho toàn bộ nội dung trang chủ `/`.
- Thiết kế lại khu vực “Đối tác / Đối tác của chúng tôi / Đồng hành cùng những thương hiệu hàng đầu thế giới”.
- Chỉ xóa biểu tượng chatbot khỏi cụm hành động nổi toàn cục.
- Giữ lại các hành động hotline, Zalo và email.
- Tách nút lên đầu trang khỏi cụm hành động và chuyển nút này sang góc dưới bên trái trên mọi trang.
- Giữ nguyên trang sản phẩm V AI – Agent và mục sản phẩm tương ứng trong menu.

## Visual Direction

Khu vực đối tác dùng nền đen xanh có chiều sâu, chữ trắng tương phản cao và màu xanh thương hiệu ICS làm điểm nhấn. Phần mở đầu có nhãn nhỏ “Đối tác”, tiêu đề lớn cân dòng và mô tả ngắn. Bố cục gợi liên tưởng tới các trang tin/doanh nghiệp lớn nhưng không sao chép nội dung, logo hoặc nhận diện của ảnh tham chiếu.

Các logo sử dụng tài sản hiện có của ICS, đặt trong các ô đồng đều với đường viền tinh tế, nền đủ tương phản và hiệu ứng hover nhẹ. Thiết kế tránh lạm dụng gradient, bóng đổ và thẻ lồng nhau.

## Responsive Layout

- Khung nội dung được căn giữa với chiều rộng tối đa rõ ràng trên laptop.
- Mobile dùng khoảng đệm ngang tối thiểu 16px; không có nội dung tràn viewport hoặc thanh cuộn ngang ngoài ý muốn.
- Cỡ chữ tiêu đề và khoảng cách dọc dùng quy mô responsive, ưu tiên `clamp()` khi phù hợp.
- Header mobile có vùng chạm tối thiểu 44px và menu không cắt nội dung.
- Các khu vực hero, thông báo, thống kê, tin tức, sản phẩm, lý do lựa chọn, đối tác và CTA tự co giãn theo breakpoint mà không ẩn nội dung quan trọng.
- Lưới đối tác hiển thị 5–6 cột trên laptop, 4 cột trên tablet và 3 cột trên mobile khi chiều rộng cho phép. Logo dùng `object-contain` trong vùng có tỷ lệ ổn định để không bị cắt.
- Các bộ lọc đối tác cuộn ngang có chủ đích trên mobile, có khoảng hở cuối hàng để báo hiệu còn lựa chọn.

## Partner Content and Interaction

Danh sách đối tác lấy từ tài sản hiện có trong `public/doitac` và các đối tác hiện đang xuất hiện trên trang chủ. Không thêm logo của Seongon hoặc thương hiệu không thuộc ICS.

Các nhóm lọc:

- Tất cả
- Đối tác chiến lược
- An ninh mạng
- Cloud & dữ liệu
- AI & công nghệ

Bộ lọc được triển khai như một nhóm tab/nút có trạng thái chọn rõ ràng, hỗ trợ chuột, cảm ứng và bàn phím. Nội dung mặc định vẫn có cấu trúc HTML dễ lập chỉ mục. Danh sách dài dùng nút “Xem thêm/Thu gọn” thay vì carousel tự chạy để tránh logo bị khuất và giảm khó chịu trên mobile.

## Floating Actions

Cụm hành động nổi tiếp tục cung cấp hotline, Zalo và email. Biểu tượng chatbot bị loại bỏ. Trên mobile, kích thước và khoảng cách được thu gọn để không che nội dung.

Nút lên đầu trang là điều khiển riêng, chỉ xuất hiện sau khi người dùng cuộn đủ xa, nằm ở góc dưới bên trái, có nhãn truy cập tiếng Việt và hỗ trợ cuộn mượt. Khi người dùng bật `prefers-reduced-motion`, hành vi cuộn và chuyển động phải được giảm hoặc tắt.

## SEO and Accessibility

- Duy trì một `h1` chính cho trang và dùng thứ bậc `h2`/`h3` hợp lý cho các section.
- Khu vực đối tác dùng `section` có tên truy cập rõ ràng.
- Mỗi logo có `alt` chính xác theo tên đối tác và kích thước ảnh ổn định để hạn chế layout shift.
- Nút icon có `aria-label`; trạng thái bộ lọc được công bố qua thuộc tính ARIA phù hợp.
- Văn bản thường đạt tương phản tối thiểu 4.5:1, chữ lớn đạt tối thiểu 3:1.
- Rà soát metadata trang chủ và dữ liệu Organization; chỉ bổ sung những phần còn thiếu trong cấu hình hiện tại.
- Nội dung quan trọng được render bằng HTML thật, không nhúng vào ảnh.

## Motion

Chỉ dùng hover, focus và reveal nhẹ để tăng cảm giác hoàn thiện. Nội dung phải hiển thị được ngay cả khi animation không chạy. Mọi chuyển động có phương án thay thế trong `prefers-reduced-motion: reduce`.

## Error and Edge-Case Handling

- Ảnh logo lỗi không được làm vỡ lưới hoặc thay đổi chiều cao hàng.
- Tên đối tác dài phải được cân dòng hoặc rút gọn theo cách vẫn truy cập được.
- Danh sách bộ lọc và logo vẫn thao tác được ở 320–360px.
- Cụm hành động nổi và nút lên đầu trang không che footer, CTA hoặc điều khiển quan trọng.
- Chế độ sáng/tối hiện có không làm giảm độ tương phản của khu vực đối tác.

## Verification

Kiểm tra trực quan ở các viewport 360px, 390px, 768px, 1024px và 1440px. Xác nhận không có overflow ngang, nội dung bị cắt, logo méo hoặc nút nổi che nội dung.

Thực hiện kiểm thử test-first cho logic lọc đối tác và hành vi điều khiển nổi nếu hạ tầng test hiện có hỗ trợ; nếu frontend chưa có test runner, bổ sung kiểm tra tĩnh tập trung mà không đưa vào một framework nặng chỉ cho thay đổi này. Chạy lint, kiểm tra TypeScript độc lập và build sản xuất. Rà soát semantic HTML, focus keyboard, `aria-label`, nội dung metadata và `prefers-reduced-motion` trước khi bàn giao.

## Out of Scope

- Thiết kế lại toàn bộ các route công khai ngoài trang chủ.
- Xóa hoặc thay đổi trang V AI – Agent.
- Thay đổi API backend hoặc dữ liệu database.
- Sao chép logo, nội dung hoặc nhận diện của website trong ảnh tham chiếu.
