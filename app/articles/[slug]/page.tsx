"use client"

import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Calendar, User, ArrowLeft, Clock, Eye, Share2, Facebook, Twitter, Linkedin, Link as LinkIcon, ChevronRight, BookOpen } from 'lucide-react'
import { format } from 'date-fns'
import { articlesService, type Article } from '@/services/articles.service'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { cn } from '@/lib/utils'

export default function ArticleDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const router = useRouter()
  const [article, setArticle] = useState<Article | null>(null)
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('')
  const [tocHeadings, setTocHeadings] = useState<{id: string, text: string, level: number}[]>([])

  useEffect(() => {
    if (!slug) return
    
    const fetchArticle = async () => {
      try {
        const data = await articlesService.getArticleBySlug(slug)
        setArticle(data)
        
        // Fetch related articles
        const allArticles = await articlesService.getAllArticles(1, 4, 'published')
        setRelatedArticles(allArticles.data.filter(a => a.id !== data.id).slice(0, 3))
      } catch (error) {
        setArticle(null)
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [slug])

  // Extract headings for Table of Contents
  useEffect(() => {
    if (article?.content) {
      const parser = new DOMParser()
      const doc = parser.parseFromString(article.content, 'text/html')
      const headings = Array.from(doc.querySelectorAll('h1, h2, h3')).map((heading, index) => ({
        id: `heading-${index}`,
        text: heading.textContent || '',
        level: parseInt(heading.tagName.substring(1))
      }))
      setTocHeadings(headings)
    }
  }, [article])

  const handleShare = (platform: string) => {
    const url = window.location.href
    const text = article?.title || ''
    
    const shareUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      copy: url
    }
    
    if (platform === 'copy') {
      navigator.clipboard.writeText(url)
      alert('Đã sao chép liên kết!')
    } else {
      window.open(shareUrls[platform as keyof typeof shareUrls], '_blank', 'width=600,height=400')
    }
  }

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen pt-32 pb-20">
          <div className="container-responsive">
            <div className="animate-pulse space-y-8">
              <div className="h-12 bg-muted rounded w-3/4"></div>
              <div className="h-64 bg-muted rounded"></div>
              <div className="space-y-4">
                <div className="h-4 bg-muted rounded"></div>
                <div className="h-4 bg-muted rounded w-5/6"></div>
                <div className="h-4 bg-muted rounded w-4/6"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  if (!article) {
    return (
      <>
        <Header />
        <div className="min-h-screen pt-32 pb-20">
          <div className="container-responsive text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <BookOpen className="w-12 h-12 text-muted-foreground" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Không tìm thấy bài viết</h2>
            <p className="text-muted-foreground mb-8">Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
            <Button onClick={() => router.push('/articles/articles-list')} size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại danh sách
            </Button>
          </div>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 pt-32 pb-12 mt-20">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <Button
              variant="ghost"
              onClick={() => router.back()}
              className="mb-6 hover:bg-background/80"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Quay lại
            </Button>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div className="flex flex-wrap gap-3 mb-6">
              <Badge variant="secondary" className="px-4 py-1">Tin tức</Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {format(new Date(article.created_at), 'dd/MM/yyyy')}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  8 phút đọc
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {Math.floor(Math.random() * 2000)} lượt xem
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>
          </ScrollReveal>

          {article.excerpt && (
            <ScrollReveal direction="up" delay={300}>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl">
                {article.excerpt}
              </p>
            </ScrollReveal>
          )}
        </div>
      </div>

      {/* Main Content */}
      <div className="container-responsive py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Table of Contents - Sticky Sidebar */}
          {tocHeadings.length > 0 && (
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-32">
                <ScrollReveal direction="right">
                  <Card className="p-6">
                    <h3 className="font-bold mb-4 flex items-center gap-2">
                      <BookOpen className="w-4 h-4" />
                      Nội dung bài viết
                    </h3>
                    <nav className="space-y-2">
                      {tocHeadings.map((heading, index) => (
                        <a
                          key={index}
                          href={`#${heading.id}`}
                          className={cn(
                            "block text-sm hover:text-primary transition-colors",
                            heading.level === 1 ? "font-semibold" : "",
                            heading.level === 2 ? "ml-3" : "",
                            heading.level === 3 ? "ml-6 text-muted-foreground" : ""
                          )}
                        >
                          {heading.text}
                        </a>
                      ))}
                    </nav>
                  </Card>
                </ScrollReveal>
              </div>
            </aside>
          )}

          {/* Article Content */}
          <article className={cn(
            tocHeadings.length > 0 ? "lg:col-span-9" : "lg:col-span-12 max-w-5xl mx-auto"
          )}>
            {/* Featured Image */}
            {article.thumbnail_url && (
              <ScrollReveal direction="up">
                <div className="relative aspect-video overflow-hidden rounded-2xl mb-12 shadow-2xl">
                  <Image
                    src={article.thumbnail_url}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </ScrollReveal>
            )}

            {/* Share Buttons */}
            <ScrollReveal direction="up">
              <Card className="p-6 mb-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-5 h-5 text-primary" />
                    <span className="font-semibold">Chia sẻ bài viết:</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('facebook')}
                      className="hover:bg-blue-600 hover:text-white hover:border-blue-600"
                    >
                      <Facebook className="w-4 h-4 mr-1" />
                      Facebook
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('twitter')}
                      className="hover:bg-sky-500 hover:text-white hover:border-sky-500"
                    >
                      <Twitter className="w-4 h-4 mr-1" />
                      Twitter
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('linkedin')}
                      className="hover:bg-blue-700 hover:text-white hover:border-blue-700"
                    >
                      <Linkedin className="w-4 h-4 mr-1" />
                      LinkedIn
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleShare('copy')}
                      className="hover:bg-primary hover:text-white"
                    >
                      <LinkIcon className="w-4 h-4 mr-1" />
                      Sao chép
                    </Button>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            {/* Article Body */}
            <ScrollReveal direction="up">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-bold prose-headings:tracking-tight
                  prose-h1:text-4xl prose-h1:mb-6 prose-h1:mt-12
                  prose-h2:text-3xl prose-h2:mb-4 prose-h2:mt-10 prose-h2:pb-2 prose-h2:border-b prose-h2:border-border
                  prose-h3:text-2xl prose-h3:mb-3 prose-h3:mt-8
                  prose-p:text-base prose-p:leading-relaxed prose-p:mb-6
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                  prose-strong:font-bold prose-strong:text-foreground
                  prose-ul:my-6 prose-ol:my-6
                  prose-li:mb-2
                  prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-muted/30 prose-blockquote:p-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
                  prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                  prose-pre:bg-muted prose-pre:border prose-pre:border-border
                "
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
            </ScrollReveal>

            {/* Author Info */}
            <ScrollReveal direction="up">
              <Separator className="my-12" />
              <Card className="p-8 bg-gradient-to-br from-muted/30 to-muted/50">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold shrink-0">
                    ICS
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-2">ICS Team</h4>
                    <p className="text-muted-foreground mb-4">
                      Đội ngũ chuyên gia về an ninh mạng và công nghệ thông tin, 
                      luôn cập nhật những xu hướng mới nhất trong ngành.
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        Xuất bản: {format(new Date(article.created_at), 'dd/MM/yyyy')}
                      </div>
                      {article.updated_at && article.updated_at !== article.created_at && (
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Cập nhật: {format(new Date(article.updated_at), 'dd/MM/yyyy')}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </article>
        </div>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <ScrollReveal direction="up">
            <Separator className="my-16" />
            <div className="mt-16">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"></div>
                <h2 className="text-3xl font-bold">Bài viết liên quan</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((related, index) => (
                  <ScrollReveal key={related.id} direction="up" delay={index * 100}>
                    <Link href={`/articles/${related.slug}`}>
                      <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:-translate-y-2">
                        {related.thumbnail_url && (
                          <div className="relative h-48 overflow-hidden bg-muted">
                            <Image
                              src={related.thumbnail_url}
                              alt={related.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          </div>
                        )}
                        <div className="p-6 flex-1 flex flex-col">
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
                            <Calendar className="w-3 h-3" />
                            {format(new Date(related.created_at), 'dd/MM/yyyy')}
                          </div>
                          <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                            {related.title}
                          </h3>
                          <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                            {related.excerpt || 'Đọc để tìm hiểu thêm...'}
                          </p>
                          <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-4 transition-all">
                            Đọc thêm
                            <ChevronRight className="w-4 h-4" />
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}
      </div>

      <Footer />
    </>
  )
}
