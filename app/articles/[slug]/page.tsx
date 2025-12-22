"use client"

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Calendar, User, ArrowLeft } from 'lucide-react'
import { format } from 'date-fns'
import { Button } from '@/components/ui/button'
import { articlesService, type Article } from '@/services/articles.service'
import { SidebarLayout } from '@/components/sidebar-layout'

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const router = useRouter()
  const [article, setArticle] = useState<Article | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    
    const fetchArticle = async () => {
      try {
        const data = await articlesService.getArticleBySlug(slug)
        setArticle(data)
      } catch (error) {
        setArticle(null)
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [slug])

  if (loading) {
    return (
      <SidebarLayout>
        <div className="py-12 text-center">Đang tải bài viết...</div>
      </SidebarLayout>
    )
  }

  if (!article) {
    return (
      <SidebarLayout>
        <div className="py-12 text-center">
          <div className="text-2xl font-bold mb-4">Không tìm thấy bài viết</div>
          <Button onClick={() => router.push('/articles/articles-list')}>Quay lại danh sách</Button>
        </div>
      </SidebarLayout>
    )
  }

  return (
    <SidebarLayout>
      <div className="max-w-4xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="mb-4"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Quay lại
        </Button>
      <h1 className="text-4xl font-bold mb-2">{article.title}</h1>
      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-1" />
          {format(new Date(article.created_at), 'dd/MM/yyyy HH:mm')}
        </div>
        <div className="flex items-center">
          <User className="h-4 w-4 mr-1" />
          Tác giả #{article.author_id}
        </div>
        <Badge>
          {article.status === 'published'
            ? 'Đã xuất bản'
            : article.status === 'draft'
            ? 'Bản nháp'
            : 'Lưu trữ'}
        </Badge>
      </div>
      {article.thumbnail_url && (
        <div className="aspect-video overflow-hidden rounded-lg mb-6">
          <img
            src={article.thumbnail_url}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      {article.excerpt && (
        <div className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4 mb-6">
          {article.excerpt}
        </div>
      )}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: article.content }}
      />
      </div>
    </SidebarLayout>
  )
}
