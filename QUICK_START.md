# Quick Start Guide - Hệ thống Quản lý Bài viết

## 🚀 Khởi động nhanh

### 1. Cấu hình môi trường

**Frontend** - Tạo `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3007
```

**Backend** - Đảm bảo đã có `.env` với config database

### 2. Chạy ứng dụng

```bash
# Terminal 1 - Backend
cd intro-ics-backend
npm run dev

# Terminal 2 - Frontend  
cd intro-ics-frontend
npm run dev
```

### 3. Truy cập

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:3007

## 📝 Các trang chính

| Đường dẫn | Mô tả | Quyền |
|-----------|-------|-------|
| `/articles/articles-list` | Danh sách bài viết (public) | Public |
| `/articles/[slug]` | Chi tiết bài viết | Public |
| `/articles/articles-management` | Quản lý bài viết | Admin* |
| `/articles/write-article` | Viết/Sửa bài viết | Admin* |

*Cần password: `ics@062025`

## 🔑 Workflow nhanh

### Tạo bài viết mới

1. Vào `/articles/articles-management`
2. Nhập password `ics@062025` vào ô input
3. Click **"Viết bài mới"**
4. Điền form:
   - Tiêu đề ✅
   - Tóm tắt (optional)
   - Upload ảnh thumbnail hoặc nhập URL
   - Chọn editor mode (React Quill hoặc HTML)
   - Nhập nội dung ✅
   - Chọn trạng thái (draft/published/archived)
5. Nhập password `ics@062025` ở cuối form
6. Click **"Tạo bài viết"**

### Sửa bài viết

1. Từ trang quản lý
2. Nhập password
3. Click icon ✏️ **Edit**
4. Chỉnh sửa
5. Nhập password
6. Click **"Cập nhật bài viết"**

### Xóa bài viết

1. Từ trang quản lý
2. Nhập password
3. Click icon 🗑️ **Delete**
4. Confirm
5. Nhập password trong dialog

## 🖼️ Upload ảnh

### Trong form viết bài:
1. Click button **"Upload ảnh từ máy"**
2. Chọn file (JPEG/PNG/GIF/WEBP, max 5MB)
3. URL tự động điền vào ô thumbnail

### Hoặc nhập URL trực tiếp:
- Paste URL vào ô "Ảnh thumbnail"

## ✍️ Chọn Editor

### React Quill (Khuyên dùng)
- WYSIWYG, dễ dùng
- Toolbar đầy đủ
- Phù hợp nội dung thông thường

### HTML thuần
- Nhập HTML trực tiếp
- Hỗ trợ CSS phức tạp, animation
- Dùng khi cần kiểm soát hoàn toàn

⚠️ **Lưu ý**: Không chuyển từ HTML thuần sang Quill nếu có style phức tạp (sẽ mất format)

## 🔍 Xem bài viết (Public)

### Danh sách:
- Vào `/articles/articles-list`
- Tìm kiếm bài viết
- Click vào card để xem chi tiết

### Chi tiết:
- Vào `/articles/[slug]`
- Hoặc click từ danh sách

## 📦 Services

### Gọi API trong code:

```typescript
import { articlesService } from '@/services/articles.service'
import { imagesService } from '@/services/images.service'

// Lấy bài viết
const articles = await articlesService.getAllArticles(1, 10, 'published')

// Upload ảnh
const image = await imagesService.uploadImage(file)
```

Chi tiết xem [services/README.md](./services/README.md)

## ⚙️ API Endpoints

### Articles
- `GET /api/articles` - Danh sách
- `GET /api/articles/:id` - Chi tiết theo ID
- `GET /api/articles/slug/:slug` - Chi tiết theo slug
- `POST /api/articles` - Tạo mới
- `PUT /api/articles/:id` - Cập nhật
- `DELETE /api/articles/:id` - Xóa

### Images
- `POST /api/images/upload` - Upload
- `GET /api/images` - Danh sách
- `GET /api/images/:filename` - Lấy file
- `GET /api/images/info/:id` - Thông tin
- `DELETE /api/images/:id` - Xóa

## 🐛 Troubleshooting

| Vấn đề | Giải pháp |
|--------|-----------|
| Không tải được ảnh | Kiểm tra backend chạy port 3007, kiểm tra `.env.local` |
| Không lưu được bài | Xem console log, kiểm tra database migration |
| React Quill không load | Đã có `dynamic import`, chạy `npm install` |
| Mất format khi chuyển mode | Dùng HTML thuần cho content phức tạp |

## 📚 Documentation đầy đủ

- [Hệ thống Articles](./ARTICLES_SYSTEM.md)
- [Services API](./services/README.md)
