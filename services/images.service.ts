interface Image {
  id: string
  filename: string
  original_name: string
  mime_type: string
  size: number
  url: string
  created_at: string
}

interface ImagesResponse {
  data: Image[]
  total: number
  page: number
  limit: number
}

interface UploadImageResponse {
  id: string
  filename: string
  original_name: string
  mime_type: string
  size: number
  url: string
  created_at: string
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3007'

class ImagesService {
  /**
   * Upload một ảnh lên server
   * @param file File ảnh cần upload
   * @returns Thông tin ảnh đã upload bao gồm URL
   */
  async uploadImage(file: File): Promise<UploadImageResponse> {
    const formData = new FormData()
    formData.append('image', file)

    const response = await fetch(`${API_BASE_URL}/api/images/upload`, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      throw new Error(errorData.message || `Upload failed: ${response.status} ${response.statusText}`)
    }

    const data = await response.json()
    
    // Đảm bảo URL luôn có prefix API base URL
    if (data.url && !data.url.startsWith('http')) {
      data.url = `${API_BASE_URL}${data.url}`
    } else if (data.filename) {
      data.url = `${API_BASE_URL}/api/images/${data.filename}`
    }

    return data
  }

  /**
   * Lấy danh sách tất cả ảnh với phân trang
   * @param page Số trang (mặc định: 1)
   * @param limit Số ảnh mỗi trang (mặc định: 10)
   * @returns Danh sách ảnh với thông tin phân trang
   */
  async getAllImages(page: number = 1, limit: number = 10): Promise<ImagesResponse> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    })

    const response = await fetch(`${API_BASE_URL}/api/images?${params.toString()}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  /**
   * Lấy URL đầy đủ của một ảnh
   * @param filename Tên file ảnh
   * @returns URL đầy đủ để hiển thị ảnh
   */
  getImageUrl(filename: string): string {
    return `${API_BASE_URL}/api/images/${filename}`
  }

  /**
   * Lấy thông tin chi tiết của một ảnh
   * @param id ID của ảnh
   * @returns Thông tin chi tiết ảnh
   */
  async getImageInfo(id: string): Promise<Image> {
    const response = await fetch(`${API_BASE_URL}/api/images/info/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  /**
   * Xóa một ảnh
   * @param id ID của ảnh cần xóa
   * @returns Message xác nhận xóa thành công
   */
  async deleteImage(id: string): Promise<{ message: string }> {
    const response = await fetch(`${API_BASE_URL}/api/images/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }
}

export const imagesService = new ImagesService()
export type { Image, ImagesResponse, UploadImageResponse }
