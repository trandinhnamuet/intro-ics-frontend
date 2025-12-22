# Hệ thống Quản lý Bài viết

## Tổng quan

Hệ thống quản lý bài viết bao gồm:
- **Backend API**: NestJS với PostgreSQL
- **Frontend**: Next.js với TypeScript, React Quill, Shadcn UI
- **Tính năng**: Viết/Sửa/Xóa bài viết, Upload ảnh, Quản lý trạng thái

## Cấu trúc Frontend

```
app/articles/
  ├── [slug]/page.tsx              # Chi tiết bài viết (public)
  ├── articles-list/page.tsx       # Danh sách bài viết (public) 
  ├── articles-management/page.tsx # Quản lý bài viết (admin)
  └── write-article/page.tsx       # Viết/Sửa bài viết (admin)

services/
  ├── articles.service.ts          # Service gọi API articles
  ├── images.service.ts            # Service upload ảnh
  └── README.md                    # Documentation

styles/
  └── quill-custom.css             # Custom styles cho editor
```

## Các trang

### 1. Chi tiết bài viết - `/articles/[slug]`
**Mục đích**: Hiển thị nội dung đầy đủ của một bài viết

**Tính năng**:
- Hiển thị tiêu đề, tóm tắt, nội dung HTML
- Hiển thị ảnh thumbnail
- Thông tin tác giả, ngày tạo, trạng thái
- Nút quay lại danh sách

**Quyền truy cập**: Public

### 2. Danh sách bài viết - `/articles/articles-list`
**Mục đích**: Hiển thị danh sách các bài viết đã xuất bản

**Tính năng**:
- Grid layout hiển thị bài viết dạng card
- Tìm kiếm theo tiêu đề/tóm tắt
- Phân trang
- Chỉ hiển thị bài viết có status = 'published'
- Click vào card để xem chi tiết
- Preview bài viết trong dialog (nếu có ?preview=id)

**Quyền truy cập**: Public

### 3. Quản lý bài viết - `/articles/articles-management`
**Mục đích**: Admin quản lý tất cả bài viết

**Tính năng**:
- Hiển thị tất cả bài viết (mọi status) dạng bảng
- Nút "Viết bài mới"
- Xem preview bài viết
- Sửa bài viết (chuyển đến write-article)
- Xóa bài viết (có confirm dialog)
- Phân trang
- **Bảo mật**: Yêu cầu nhập password `ics@062025`

**Quyền truy cập**: Admin

### 4. Viết/Sửa bài viết - `/articles/write-article`
**Mục đích**: Tạo bài viết mới hoặc chỉnh sửa bài viết

**Tính năng**:
- Form nhập: tiêu đề, tóm tắt, nội dung, thumbnail, trạng thái
- **2 chế độ editor**:
  - **React Quill**: WYSIWYG editor với toolbar
  - **HTML thuần**: Nhập HTML trực tiếp (cho HTML phức tạp có style/animation)
- Upload ảnh thumbnail từ máy tính hoặc nhập URL
- Validation: file type (JPEG/PNG/GIF/WEBP), size (max 5MB)
- Chế độ sửa: Load bài viết từ ?id=xxx
- **Bảo mật**: Yêu cầu nhập password `ics@062025` để lưu
- Auto-detect HTML phức tạp và khuyến nghị dùng chế độ HTML thuần

**Quyền truy cập**: Admin

## Services

### Articles Service
**File**: `services/articles.service.ts`

**Methods**:
- `getAllArticles(page, limit, status?)`: Lấy danh sách bài viết
- `getArticleById(id)`: Lấy bài viết theo ID
- `getArticleBySlug(slug)`: Lấy bài viết theo slug
- `createArticle(data)`: Tạo bài viết mới
- `updateArticle(id, data)`: Cập nhật bài viết
- `deleteArticle(id)`: Xóa bài viết

### Images Service  
**File**: `services/images.service.ts`

**Methods**:
- `uploadImage(file)`: Upload ảnh (max 5MB, JPEG/PNG/GIF/WEBP)
- `getAllImages(page, limit)`: Lấy danh sách ảnh
- `getImageUrl(filename)`: Lấy URL ảnh
- `getImageInfo(id)`: Lấy thông tin chi tiết ảnh
- `deleteImage(id)`: Xóa ảnh

## Backend API Endpoints

### Articles API - `/api/articles`

```typescript
// GET /api/articles?page=1&limit=10&status=published
// Lấy danh sách bài viết

// GET /api/articles/:id
// Lấy bài viết theo ID

// GET /api/articles/slug/:slug
// Lấy bài viết theo slug

// POST /api/articles
// Tạo bài viết mới
Body: {
  title: string
  excerpt?: string
  content: string
  thumbnail_url?: string
  author_id: number
  status?: 'draft' | 'published' | 'archived'
}

// PUT /api/articles/:id
// Cập nhật bài viết
Body: {
  title?: string
  excerpt?: string
  content?: string
  thumbnail_url?: string
  status?: string
}

// DELETE /api/articles/:id
// Xóa bài viết
```

### Images API - `/api/images`

```typescript
// POST /api/images/upload
// Upload ảnh
Body: FormData với field 'image'
Constraints:
  - Max size: 5MB
  - Allowed types: image/jpeg, image/png, image/gif, image/webp

// GET /api/images?page=1&limit=10
// Lấy danh sách ảnh

// GET /api/images/:filename
// Lấy file ảnh (streaming)

// GET /api/images/info/:id
// Lấy thông tin ảnh

// DELETE /api/images/:id
// Xóa ảnh
```

## Cấu hình

### Environment Variables

**Frontend** - Tạo file `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3007
```

**Backend** - File `.env`:
```env
DB_HOST=localhost
DB_PORT=5432
DB_USERNAME=postgres
DB_PASSWORD=yourpassword
DB_DATABASE=intro_ics
PORT=3007
```

## Quy trình sử dụng

### 1. Tạo bài viết mới

1. Truy cập `/articles/articles-management`
2. Nhập password: `ics@062025`
3. Click "Viết bài mới"
4. Điền thông tin:
   - Tiêu đề (bắt buộc)
   - Tóm tắt (tùy chọn)
   - Upload ảnh thumbnail hoặc nhập URL
   - Chọn chế độ editor (React Quill hoặc HTML)
   - Nhập nội dung (bắt buộc)
   - Chọn trạng thái: draft/published/archived
5. Nhập password: `ics@062025`
6. Click "Tạo bài viết"

### 2. Chỉnh sửa bài viết

1. Từ `/articles/articles-management`
2. Nhập password
3. Click icon Edit (✏️) ở bài viết cần sửa
4. Chỉnh sửa thông tin
5. Nhập password
6. Click "Cập nhật bài viết"

### 3. Xóa bài viết

1. Từ `/articles/articles-management`
2. Nhập password
3. Click icon Delete (🗑️)
4. Confirm trong dialog
5. Nhập password trong dialog confirm

### 4. Xem bài viết (Public)

- Danh sách: Truy cập `/articles/articles-list`
- Chi tiết: Click vào card hoặc truy cập `/articles/[slug]`

## Lưu ý

### React Quill vs HTML thuần

**React Quill** (khuyên dùng):
- WYSIWYG editor, dễ dùng
- Toolbar đầy đủ: format text, color, list, align, blockquote, code, link, image, video
- Phù hợp cho nội dung thông thường

**HTML thuần**:
- Nhập HTML trực tiếp
- Hỗ trợ CSS phức tạp: `<style>`, inline styles, animations
- Khuyên dùng khi:
  - Cần kiểm soát hoàn toàn HTML/CSS
  - Copy HTML từ nguồn khác
  - Có animation, custom styling phức tạp

⚠️ **Cảnh báo**: Khi sửa bài viết có HTML phức tạp:
- Hệ thống tự động chuyển sang chế độ HTML thuần
- Không nên chuyển sang React Quill (sẽ mất style/format)
- Nếu cố chuyển, sẽ có cảnh báo

### Bảo mật

- Password hiện tại: `ics@062025` (hardcoded)
- Chỉ dùng cho demo, không dùng trong production
- Nên implement authentication/authorization thực sự

### Upload ảnh

- Frontend validate: type, size
- Backend cũng validate lại
- Ảnh lưu trong folder `uploads/` của backend
- URL trả về có đầy đủ base URL

### Slug

- Backend tự động tạo slug từ title
- Slug dùng làm URL thân thiện SEO
- Ví dụ: "Bài viết đầu tiên" → "bai-viet-dau-tien"

## Troubleshooting

### 1. Không tải được ảnh
**Nguyên nhân**: Sai NEXT_PUBLIC_API_URL hoặc backend không chạy

**Giải pháp**: 
- Kiểm tra backend đang chạy ở port 3007
- Kiểm tra `.env.local` có đúng URL không

### 2. Không lưu được bài viết
**Nguyên nhân**: Backend lỗi database hoặc validation

**Giải pháp**:
- Xem console log frontend để biết lỗi cụ thể
- Xem log backend
- Kiểm tra database đã migrate chưa

### 3. React Quill không load
**Nguyên nhân**: SSR issue hoặc thiếu dependency

**Giải pháp**:
- Đã dùng `dynamic import` với `ssr: false`
- Chạy `npm install` để đảm bảo có `react-quill`

### 4. Editor mất format khi chuyển mode
**Nguyên nhân**: React Quill và HTML thuần xử lý HTML khác nhau

**Giải pháp**:
- Với bài viết có HTML phức tạp, luôn dùng chế độ HTML thuần
- Hệ thống sẽ cảnh báo nếu cố chuyển mode không phù hợp

## Development

### Chạy Frontend
```bash
cd intro-ics-frontend
npm install
npm run dev
```

### Chạy Backend
```bash
cd intro-ics-backend
npm install
npm run dev
```

### Migration Database
```bash
cd intro-ics-backend
npm run migration:run
```

## Dependencies chính

**Frontend**:
- Next.js 16
- React 19
- TypeScript
- react-quill
- shadcn/ui (Radix UI + Tailwind)
- date-fns
- lucide-react
- react-i18next

**Backend**:
- NestJS
- TypeORM
- PostgreSQL
- Multer (file upload)

## Tài liệu tham khảo

- [Services Documentation](./services/README.md)
- [Backend API Documentation](../intro-ics-backend/API_DOCUMENTATION.md)
