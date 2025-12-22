'use client'

import { useState, useEffect, Suspense } from 'react'
import React from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useToast } from '@/hooks/use-toast'
import { Search, Calendar, User, ArrowLeft } from 'lucide-react'
import { format } from 'date-fns'
import { articlesService, type Article, type ArticlesResponse } from '@/services/articles.service'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import NewsSideBar from '@/components/news-sidebar'

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

  const previewId = searchParams.get('preview')
  const urlSearchQuery = searchParams.get('search')

  useEffect(() => {
    fetchArticles()
  }, [page])

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
      // Only fetch published articles for public view
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-500 hover:bg-green-600'
      case 'draft':
        return 'bg-yellow-500 hover:bg-yellow-600'
      case 'archived':
        return 'bg-gray-500 hover:bg-gray-600'
      default:
        return 'bg-gray-500 hover:bg-gray-600'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published':
        return t('articlesList.status.published')
      case 'draft':
        return t('articlesList.status.draft')
      case 'archived':
        return t('articlesList.status.archived')
      default:
        return status
    }
  }

  const getPaginationNumbers = () => {
    const pages: (number | string)[] = []
    const itemsPerPage = 12
    const startItem = (page - 1) * itemsPerPage + 1
    const endItem = Math.min(page * itemsPerPage, totalItems)
    
    // Show first page
    pages.push(1)
    
    // Show 2 pages before current
    if (page > 3) {
      pages.push('...')
    }
    if (page - 2 > 1) {
      pages.push(page - 2)
    }
    if (page - 1 > 1) {
      pages.push(page - 1)
    }
    
    // Show current page
    if (page !== 1 && page !== totalPages) {
      pages.push(page)
    }
    
    // Show 2 pages after current
    if (page + 1 < totalPages) {
      pages.push(page + 1)
    }
    if (page + 2 < totalPages) {
      pages.push(page + 2)
    }
    
    // Show last page
    if (totalPages > 1 && !pages.includes(totalPages)) {
      if (pages[pages.length - 1] !== '...') {
        pages.push('...')
      }
      pages.push(totalPages)
    }
    
    return { pages, startItem, endItem }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="w-full px-16 lg:px-32 py-6">
          <div className="flex gap-8">
            {/* News Sidebar */}
            <NewsSideBar />
            
            {/* Main Content */}
            <div className="flex-1">
              <Button
                variant="ghost"
                onClick={() => router.back()}
                className="mb-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Quay lại
              </Button>
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{t('articlesList.title')}</h1>
                <p className="text-muted-foreground text-lg">
                  {t('articlesList.description')}
                </p>
              </div>

              {/* Search */}
              <div className="mb-6">
                <div className="relative max-w-md flex gap-2">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder={t('articlesList.searchPlaceholder')}
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="pl-10"
                    />
                  </div>
                  <Button
                    onClick={handleSearch}
                    className="px-6"
                  >
                    <Search className="h-4 w-4 mr-2" />
                    Tìm kiếm
                  </Button>
                </div>
                {searchQuery && (
                  <div className="mt-3 text-sm text-muted-foreground">
                    Kết quả tìm kiếm cho <span className="font-semibold text-foreground">"{searchQuery}"</span>: 
                    <span className="font-semibold text-foreground ml-1">{filteredArticles.length}</span> bài viết
                  </div>
                )}
              </div>

              {isLoading ? (
                <div className="flex justify-center py-12">
                  <div className="text-muted-foreground">{t('articlesList.loading')}</div>
                </div>
              ) : filteredArticles.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-muted-foreground text-lg">
                    {searchQuery ? t('articlesList.noResults') : t('articlesList.noArticles')}
                  </div>
                </div>
              ) : (
                <>
                  {/* Articles Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {filteredArticles.map((article) => (
                      <Link key={article.id} href={`/articles/${article.slug}`} className="block group">
                        <Card className="overflow-hidden hover:shadow-lg transition-shadow group-hover:ring-2 group-hover:ring-primary cursor-pointer">
                          {article.thumbnail_url && (
                            <div className="aspect-video overflow-hidden">
                              <img
                                src={article.thumbnail_url}
                                alt={article.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                              />
                            </div>
                          )}
                          <CardHeader className="pb-2">
                            <div className="flex items-center justify-between mb-2">
                              <Badge className={getStatusColor(article.status)}>
                                {getStatusText(article.status)}
                              </Badge>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Calendar className="h-3 w-3 mr-1" />
                                {format(new Date(article.created_at), 'dd/MM/yyyy')}
                              </div>
                            </div>
                            <CardTitle className="line-clamp-2 text-lg group-hover:text-primary">
                              {article.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="mb-4 min-h-[72px] flex items-start">
                              <p className="text-muted-foreground line-clamp-3">
                                {article.excerpt || '\u00A0'}
                              </p>
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <User className="h-3 w-3 mr-1" />
                              {t('articlesList.author', { id: article.author_id })}
                            </div>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (() => {
                    const { pages, startItem, endItem } = getPaginationNumbers()
                    return (
                      <div className="flex flex-col items-center gap-4 py-8">
                        <div className="text-sm text-muted-foreground">
                          {startItem} to {endItem} of {totalItems}
                        </div>
                        <div className="flex justify-center items-center gap-2 flex-wrap">
                          <Button
                            variant="outline"
                            onClick={() => setPage(1)}
                            disabled={page === 1}
                            className="text-xs"
                          >
                            First
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setPage(page - 1)}
                            disabled={page === 1}
                            className="text-xs"
                          >
                            {t('articlesList.pagination.previous')}
                          </Button>
                          
                          {pages.map((p, idx) => (
                            <React.Fragment key={idx}>
                              {p === '...' ? (
                                <span className="px-2 text-muted-foreground">...</span>
                              ) : (
                                <Button
                                  variant={p === page ? 'default' : 'outline'}
                                  onClick={() => typeof p === 'number' && setPage(p)}
                                  className="h-9 w-9 p-0 text-xs"
                                >
                                  {p}
                                </Button>
                              )}
                            </React.Fragment>
                          ))}
                          
                          <Button
                            variant="outline"
                            onClick={() => setPage(page + 1)}
                            disabled={page === totalPages}
                            className="text-xs"
                          >
                            {t('articlesList.pagination.next')}
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setPage(totalPages)}
                            disabled={page === totalPages}
                            className="text-xs"
                          >
                            Last
                          </Button>
                        </div>
                      </div>
                    )
                  })()}
                </>
              )}
            </div>
          </div>
        </div>
        </main>
      <Footer />

      {/* Auto-open preview dialog if preview ID is provided */}
      {previewId && selectedArticle && (
        <Dialog open={true} onOpenChange={() => setSelectedArticle(null)}>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl mb-4">
                {selectedArticle.title}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground border-b pb-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  {format(new Date(selectedArticle.created_at), 'dd/MM/yyyy HH:mm')}
                </div>
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  {t('articlesList.author', { id: selectedArticle.author_id })}
                </div>
                <Badge className={getStatusColor(selectedArticle.status)}>
                  {getStatusText(selectedArticle.status)}
                </Badge>
              </div>
              
              {selectedArticle.thumbnail_url && (
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={selectedArticle.thumbnail_url}
                    alt={selectedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              
              {selectedArticle.excerpt && (
                <div className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4">
                  {selectedArticle.excerpt}
                </div>
              )}
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  )
}

function LoadingFallback() {
  const { t } = useTranslation()
  
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="w-full px-16 lg:px-32 py-6">
          <div className="flex gap-8">
            <NewsSideBar />
            <div className="flex-1">
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{t('articlesList.title')}</h1>
                <p className="text-muted-foreground text-lg">
                  {t('articlesList.description')}
                </p>
              </div>
              <div className="flex justify-center py-12">
                <div className="text-muted-foreground">{t('articlesList.loading')}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function ArticlesListPage() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ArticlesListContent />
    </Suspense>
  )
}
