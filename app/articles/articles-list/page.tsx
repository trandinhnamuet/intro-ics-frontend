'use client'

import { useState, useEffect, Suspense } from 'react'
import React from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'
import { Search, Calendar, User, ArrowRight, Clock, Eye, TrendingUp } from 'lucide-react'
import { format } from 'date-fns'
import { articlesService, type Article } from '@/services/articles.service'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { AnimatedHeading } from '@/components/ui/animated-heading'
import { Section } from '@/components/ui/section'
import { ArticleListSkeleton } from '@/components/ui/loading-skeleton'
import { cn } from '@/lib/utils'

function ArticlesListContent() {
  const { t } = useTranslation()
  const searchParams = useSearchParams()
  const router = useRouter()
  const { toast } = useToast()
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [featuredArticle, setFeaturedArticle] = useState<Article | null>(null)

  const previewId = searchParams.get('preview')
  const urlSearchQuery = searchParams.get('search')

  useEffect(() => {
    fetchArticles()
    fetchFeaturedArticle()
  }, [page])

  useEffect(() => {
    if (urlSearchQuery) {
      setSearchTerm(urlSearchQuery)
      setSearchQuery(urlSearchQuery)
    }
  }, [urlSearchQuery])

  useEffect(() => {
    if (previewId) {
      openPreview(previewId)
    }
  }, [previewId])

  const fetchFeaturedArticle = async () => {
    try {
      const result = await articlesService.getAllArticles(1, 1, 'published')
      if (result.data.length > 0) {
        setFeaturedArticle(result.data[0])
      }
    } catch (error) {
      console.error('Failed to fetch featured article:', error)
    }
  }

  useEffect(() => {
    if (urlSearchQuery) {
      setSearchTerm(urlSearchQuery)
      setSearchQuery(urlSearchQuery)
    }
  }, [urlSearchQuery])

  useEffect(() => {
    if (previewId) {
      fetchArticleForPreview(previewId)
    }
  }, [previewId])

  const fetchArticles = async () => {
    try {
      setIsLoading(true)
      const data = await articlesService.getAllArticles(page, 12, 'published')
      setArticles(data.data)
      setTotalItems(data.total)
      setTotalPages(Math.ceil(data.total / data.limit))
    } catch (error) {
      toast({
        title: t('articlesList.errors.errorTitle'),
        description: t('articlesList.errors.fetchError'),
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const fetchArticleForPreview = async (id: string) => {
    try {
      const article = await articlesService.getArticleById(id)
      setSelectedArticle(article)
    } catch (error) {
      console.error('Failed to fetch article for preview:', error)
    }
  }

  const handleSearch = () => {
    setSearchQuery(searchTerm)
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const categories = ['all']

  return (
    <>
      <Header />
      
      {/* Hero Banner */}
      <div className="relative h-[400px] bg-gradient-to-br from-primary via-accent to-secondary overflow-hidden mt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-300" />
        </div>
        
        <div className="relative container-responsive h-full flex flex-col justify-center">
          <ScrollReveal direction="down">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6 w-fit">
              <TrendingUp className="w-4 h-4 text-white" />
              <span className="text-sm font-medium text-white">Tin tức & Insights</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-3xl">
              Khám Phá Thế Giới An Ninh Mạng
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl">
              Cập nhật tin tức, xu hướng và giải pháp công nghệ mới nhất từ các chuyên gia hàng đầu
            </p>
          </ScrollReveal>

          {/* Search Bar */}
          <ScrollReveal direction="up" delay={300}>
            <div className="flex gap-3 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Tìm kiếm bài viết..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-12 h-14 bg-white/95 backdrop-blur-sm border-white/20 rounded-full text-base"
                />
              </div>
              <Button
                onClick={handleSearch}
                size="lg"
                className="h-14 px-8 rounded-full bg-secondary hover:bg-secondary/90 text-white font-semibold"
              >
                <Search className="h-5 w-5 mr-2" />
                Tìm
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <Section spacing="sm" container={false}>
        <div className="container-responsive">
          {/* Featured Article */}
          {featuredArticle && (
            <ScrollReveal direction="up">
              <div className="mb-16">
                <div className="flex items-center gap-2 mb-6">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <h2 className="text-2xl font-bold">Bài viết nổi bật</h2>
                </div>
                <Link href={`/articles/${featuredArticle.slug}`}>
                  <Card className="group overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      {/* Image */}
                      <div className="relative h-[400px] lg:h-[500px] overflow-hidden bg-muted">
                        <Image
                          src={featuredArticle.thumbnail_url || '/images/placeholder.jpg'}
                          alt={featuredArticle.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        <div className="absolute top-6 left-6">
                          <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm px-4 py-1.5 border-none">
                            🔥 MỚI NHẤT
                          </Badge>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {format(new Date(featuredArticle.created_at), 'dd/MM/yyyy')}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            8 phút đọc
                          </div>
                        </div>

                        <h2 className="text-3xl lg:text-4xl font-bold mb-4 group-hover:text-primary transition-colors leading-12">
                          {featuredArticle.title}
                        </h2>

                        <p className="text-lg text-muted-foreground mb-6 line-clamp-3">
                          {featuredArticle.excerpt}
                        </p>

                        <Button 
                          size="lg" 
                          className="w-fit bg-gradient-to-r from-primary to-accent hover:opacity-90"
                        >
                          Đọc ngay
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </Card>
                </Link>
              </div>
            </ScrollReveal>
          )}

          {/* Category Filters */}
          <ScrollReveal direction="up">
            <div className="flex flex-wrap gap-3 mb-12 justify-center">
              {categories.map((cat) => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "rounded-full px-6 transition-all",
                    selectedCategory === cat && "bg-gradient-to-r from-primary to-accent"
                  )}
                >
                  {cat === 'all' ? 'Tất cả' : cat.charAt(0).toUpperCase() + cat.slice(1)}
                </Button>
              ))}
            </div>
          </ScrollReveal>

          {/* Search Results Info */}
          {searchQuery && (
            <ScrollReveal direction="up">
              <div className="mb-8 p-4 bg-muted/30 rounded-lg border border-border">
                <p className="text-sm">
                  Tìm thấy <span className="font-bold text-primary">{filteredArticles.length}</span> kết quả cho 
                  <span className="font-semibold"> "{searchQuery}"</span>
                </p>
              </div>
            </ScrollReveal>
          )}

          {/* Articles Grid */}
          {isLoading ? (
            <ArticleListSkeleton />
          ) : filteredArticles.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Search className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Không tìm thấy bài viết</h3>
              <p className="text-muted-foreground mb-6">
                {searchQuery ? 'Thử tìm kiếm với từ khóa khác' : 'Chưa có bài viết nào'}
              </p>
              {searchQuery && (
                <Button onClick={() => { setSearchQuery(''); setSearchTerm('') }} variant="outline">
                  Xóa tìm kiếm
                </Button>
              )}
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
                {filteredArticles.map((article, index) => (
                  <ScrollReveal key={article.id} direction="up" delay={index * 50}>
                    <Link href={`/articles/${article.slug}`}>
                      <Card className="group overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:-translate-y-2">
                        {/* Image */}
                        {article.thumbnail_url && (
                          <div className="relative h-56 overflow-hidden bg-muted">
                            <Image
                              src={article.thumbnail_url}
                              alt={article.title}
                              fill
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                              <Badge className="bg-white/90 text-foreground backdrop-blur-sm hover:bg-white">
                                Tin tức
                              </Badge>
                            </div>
                          </div>
                        )}

                        {/* Content */}
                        <div className="p-6 flex-1 flex flex-col">
                          {/* Meta Info */}
                          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {format(new Date(article.created_at), 'dd/MM/yyyy')}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              5 phút đọc
                            </div>
                          </div>

                          {/* Title */}
                          <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                            {article.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-sm text-muted-foreground line-clamp-3 mb-4 flex-1">
                            {article.excerpt || 'Đọc để tìm hiểu thêm...'}
                          </p>

                          {/* Read More Link */}
                          <div className="flex items-center justify-between pt-4 border-t border-border">
                            <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-4 transition-all">
                              Đọc thêm
                              <ArrowRight className="w-4 h-4" />
                            </div>
                            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                              <Eye className="w-3 h-3" />
                              {Math.floor(Math.random() * 1000)}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <ScrollReveal direction="up" delay={200}>
                  <div className="flex justify-center gap-2 mt-16">
                    <Button
                      variant="outline"
                      onClick={() => setPage(p => Math.max(1, p - 1))}
                      disabled={page === 1}
                      className="rounded-full"
                    >
                      ← Trước
                    </Button>
                    
                    <div className="flex items-center gap-2">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum;
                        if (totalPages <= 5) {
                          pageNum = i + 1;
                        } else if (page <= 3) {
                          pageNum = i + 1;
                        } else if (page >= totalPages - 2) {
                          pageNum = totalPages - 4 + i;
                        } else {
                          pageNum = page - 2 + i;
                        }
                        
                        return (
                          <Button
                            key={pageNum}
                            variant={page === pageNum ? "default" : "outline"}
                            onClick={() => setPage(pageNum)}
                            className={cn(
                              "w-10 h-10 rounded-full",
                              page === pageNum && "bg-gradient-to-r from-primary to-accent"
                            )}
                          >
                            {pageNum}
                          </Button>
                        );
                      })}
                    </div>

                    <Button
                      variant="outline"
                      onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                      disabled={page === totalPages}
                      className="rounded-full"
                    >
                      Sau →
                    </Button>
                  </div>

                  <p className="text-center text-sm text-muted-foreground mt-4">
                    Trang {page} / {totalPages} • Tổng {totalItems} bài viết
                  </p>
                </ScrollReveal>
              )}
            </>
          )}
        </div>
      </Section>

      {/* Preview Dialog */}
      <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedArticle?.title}</DialogTitle>
          </DialogHeader>
          {selectedArticle && (
            <div className="prose prose-sm max-w-none">
              {selectedArticle.thumbnail_url && (
                <img src={selectedArticle.thumbnail_url} alt={selectedArticle.title} className="w-full rounded-lg mb-4" />
              )}
              <div dangerouslySetInnerHTML={{ __html: selectedArticle.content }} />
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  )
}

export default function ArticlesListPage() {
  return (
    <Suspense fallback={
      <>
        <Header />
        <div className="min-h-screen pt-32 pb-20">
          <ArticleListSkeleton />
        </div>
        <Footer />
      </>
    }>
      <ArticlesListContent />
    </Suspense>
  )
}
