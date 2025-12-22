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

interface ArticlesResponse {
  data: Article[]
  total: number
  page: number
  limit: number
}

interface CreateArticleDto {
  title: string
  excerpt?: string
  content: string
  thumbnail_url?: string
  author_id: number
  status?: string
}

interface UpdateArticleDto {
  title?: string
  excerpt?: string
  content?: string
  thumbnail_url?: string
  status?: string
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3007'

class ArticlesService {
  private async fetchApi(endpoint: string, options: RequestInit = {}) {
    const url = `${API_BASE_URL}/api/articles${endpoint}`
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    })

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }

    return response.json()
  }

  async getAllArticles(page: number = 1, limit: number = 10, status?: string): Promise<ArticlesResponse> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    })

    if (status) {
      params.append('status', status)
    }

    return this.fetchApi(`?${params.toString()}`)
  }

  async getArticleById(id: string): Promise<Article> {
    return this.fetchApi(`/${id}`)
  }

  async getArticleBySlug(slug: string): Promise<Article> {
    return this.fetchApi(`/slug/${slug}`)
  }

  async createArticle(data: CreateArticleDto): Promise<Article> {
    return this.fetchApi('', {
      method: 'POST',
      body: JSON.stringify(data),
    })
  }

  async updateArticle(id: string, data: UpdateArticleDto): Promise<Article> {
    return this.fetchApi(`/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    })
  }

  async deleteArticle(id: string): Promise<{ message: string }> {
    return this.fetchApi(`/${id}`, {
      method: 'DELETE',
    })
  }
}

export const articlesService = new ArticlesService()
export type { Article, ArticlesResponse, CreateArticleDto, UpdateArticleDto }
