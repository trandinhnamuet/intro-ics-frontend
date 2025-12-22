# Services Documentation

## Overview
Đây là các service để gọi API từ backend cho ứng dụng quản lý bài viết.

## API Base URL
Các service sử dụng biến môi trường `NEXT_PUBLIC_API_URL` để cấu hình base URL của API.

Mặc định: `http://localhost:3007`

Thêm vào file `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:3007
```

## Articles Service

### Imports
```typescript
import { articlesService, type Article, type ArticlesResponse, type CreateArticleDto, type UpdateArticleDto } from '@/services/articles.service'
```

### Types

#### Article
```typescript
interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  thumbnail_url: string
  author_id: number
  status: string
  created_at: string
  updated_at: string
}
```

#### ArticlesResponse
```typescript
interface ArticlesResponse {
  data: Article[]
  total: number
  page: number
  limit: number
}
```

#### CreateArticleDto
```typescript
interface CreateArticleDto {
  title: string
  excerpt?: string
  content: string
  thumbnail_url?: string
  author_id: number
  status?: string  // 'draft' | 'published' | 'archived'
}
```

#### UpdateArticleDto
```typescript
interface UpdateArticleDto {
  title?: string
  excerpt?: string
  content?: string
  thumbnail_url?: string
  status?: string
}
```

### Methods

#### getAllArticles(page, limit, status)
Lấy danh sách bài viết với phân trang và lọc theo trạng thái.

**Parameters:**
- `page` (number, optional): Số trang, mặc định 1
- `limit` (number, optional): Số bài viết mỗi trang, mặc định 10
- `status` (string, optional): Lọc theo trạng thái ('published', 'draft', 'archived')

**Returns:** `Promise<ArticlesResponse>`

**Example:**
```typescript
// Lấy tất cả bài viết trang 1
const articles = await articlesService.getAllArticles(1, 10)

// Chỉ lấy bài viết đã xuất bản
const publishedArticles = await articlesService.getAllArticles(1, 10, 'published')
```

#### getArticleById(id)
Lấy thông tin chi tiết một bài viết theo ID.

**Parameters:**
- `id` (string): ID của bài viết

**Returns:** `Promise<Article>`

**Example:**
```typescript
const article = await articlesService.getArticleById('123')
```

#### getArticleBySlug(slug)
Lấy thông tin chi tiết một bài viết theo slug.

**Parameters:**
- `slug` (string): Slug của bài viết

**Returns:** `Promise<Article>`

**Example:**
```typescript
const article = await articlesService.getArticleBySlug('my-first-article')
```

#### createArticle(data)
Tạo bài viết mới.

**Parameters:**
- `data` (CreateArticleDto): Thông tin bài viết mới

**Returns:** `Promise<Article>`

**Example:**
```typescript
const newArticle = await articlesService.createArticle({
  title: 'Bài viết mới',
  excerpt: 'Tóm tắt ngắn gọn',
  content: '<p>Nội dung bài viết</p>',
  thumbnail_url: 'https://example.com/image.jpg',
  author_id: 1,
  status: 'draft'
})
```

#### updateArticle(id, data)
Cập nhật thông tin bài viết.

**Parameters:**
- `id` (string): ID của bài viết cần cập nhật
- `data` (UpdateArticleDto): Thông tin cần cập nhật

**Returns:** `Promise<Article>`

**Example:**
```typescript
const updatedArticle = await articlesService.updateArticle('123', {
  title: 'Tiêu đề mới',
  status: 'published'
})
```

#### deleteArticle(id)
Xóa một bài viết.

**Parameters:**
- `id` (string): ID của bài viết cần xóa

**Returns:** `Promise<{ message: string }>`

**Example:**
```typescript
await articlesService.deleteArticle('123')
```

## Images Service

### Imports
```typescript
import { imagesService, type Image, type ImagesResponse, type UploadImageResponse } from '@/services/images.service'
```

### Types

#### Image
```typescript
interface Image {
  id: string
  filename: string
  original_name: string
  mime_type: string
  size: number
  url: string
  created_at: string
}
```

#### ImagesResponse
```typescript
interface ImagesResponse {
  data: Image[]
  total: number
  page: number
  limit: number
}
```

#### UploadImageResponse
```typescript
interface UploadImageResponse {
  id: string
  filename: string
  original_name: string
  mime_type: string
  size: number
  url: string
  created_at: string
}
```

### Methods

#### uploadImage(file)
Upload một file ảnh lên server.

**Parameters:**
- `file` (File): File ảnh cần upload

**Returns:** `Promise<UploadImageResponse>`

**Constraints:**
- Kích thước tối đa: 5MB
- Định dạng hỗ trợ: JPEG, PNG, GIF, WEBP

**Example:**
```typescript
const fileInput = document.querySelector('input[type="file"]')
const file = fileInput.files[0]

try {
  const uploadedImage = await imagesService.uploadImage(file)
  console.log('Image URL:', uploadedImage.url)
} catch (error) {
  console.error('Upload failed:', error)
}
```

#### getAllImages(page, limit)
Lấy danh sách tất cả ảnh với phân trang.

**Parameters:**
- `page` (number, optional): Số trang, mặc định 1
- `limit` (number, optional): Số ảnh mỗi trang, mặc định 10

**Returns:** `Promise<ImagesResponse>`

**Example:**
```typescript
const images = await imagesService.getAllImages(1, 20)
console.log(`Total images: ${images.total}`)
```

#### getImageUrl(filename)
Lấy URL đầy đủ để hiển thị một ảnh.

**Parameters:**
- `filename` (string): Tên file ảnh

**Returns:** `string`

**Example:**
```typescript
const imageUrl = imagesService.getImageUrl('my-image.jpg')
// Returns: 'http://localhost:3007/api/images/my-image.jpg'
```

#### getImageInfo(id)
Lấy thông tin chi tiết của một ảnh.

**Parameters:**
- `id` (string): ID của ảnh

**Returns:** `Promise<Image>`

**Example:**
```typescript
const imageInfo = await imagesService.getImageInfo('123')
console.log(`File size: ${imageInfo.size} bytes`)
```

#### deleteImage(id)
Xóa một ảnh.

**Parameters:**
- `id` (string): ID của ảnh cần xóa

**Returns:** `Promise<{ message: string }>`

**Example:**
```typescript
await imagesService.deleteImage('123')
```

## Error Handling

Tất cả các methods đều throw Error khi gặp lỗi. Nên sử dụng try-catch để xử lý:

```typescript
try {
  const articles = await articlesService.getAllArticles()
  // Process articles
} catch (error) {
  console.error('Failed to fetch articles:', error)
  // Show error to user
}
```

## Usage in Components

### Example: Fetch and Display Articles
```typescript
'use client'

import { useState, useEffect } from 'react'
import { articlesService, type Article } from '@/services/articles.service'

export default function ArticlesList() {
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchArticles() {
      try {
        const data = await articlesService.getAllArticles(1, 10, 'published')
        setArticles(data.data)
      } catch (error) {
        console.error('Failed to fetch articles:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div>
      {articles.map(article => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.excerpt}</p>
        </div>
      ))}
    </div>
  )
}
```

### Example: Upload Image
```typescript
'use client'

import { useState } from 'react'
import { imagesService } from '@/services/images.service'

export default function ImageUpload() {
  const [uploading, setUploading] = useState(false)
  const [imageUrl, setImageUrl] = useState('')

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    try {
      const result = await imagesService.uploadImage(file)
      setImageUrl(result.url)
    } catch (error) {
      console.error('Upload failed:', error)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleUpload} disabled={uploading} />
      {uploading && <p>Uploading...</p>}
      {imageUrl && <img src={imageUrl} alt="Uploaded" />}
    </div>
  )
}
```

## Notes

- Tất cả các API calls đều sử dụng `fetch` với JSON
- Service tự động thêm API base URL vào các requests
- Upload ảnh sử dụng `FormData` thay vì JSON
- Các methods không cache kết quả, component cần tự quản lý state
