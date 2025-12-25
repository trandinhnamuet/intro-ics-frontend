"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel } from "antd"
import type { CarouselRef } from "antd/es/carousel"
import { useTranslation } from 'react-i18next'
import { articlesService, type Article } from '@/services/articles.service'

export function NewsSection() {
  const carouselRef = useRef<CarouselRef>(null)
  const { t } = useTranslation()
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setIsLoading(true)
        // Lấy tối đa 20 bài viết mới nhất
        const response = await articlesService.getAllArticles(1, 20)
        setArticles(response.data)
      } catch (error) {
        console.error('Failed to fetch articles:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchArticles()
  }, [])

  const handlePrev = () => {
    if (carouselRef.current) carouselRef.current.prev()
  }

  const handleNext = () => {
    if (carouselRef.current) carouselRef.current.next()
  }

  // Nhóm mỗi 3 bài viết thành 1 slide
  const groups = []
  for (let i = 0; i < articles.length; i += 3) {
    groups.push(articles.slice(i, i + 3))
  }

  if (isLoading) {
    return (
      <section className="py-12 md:py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 md:px-16 lg:px-32">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-balance">{t('home.news.title')}</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('home.news.subtitle')}
            </p>
          </div>
          <div className="flex justify-center py-12 md:py-16">
            <div className="text-muted-foreground">Đang tải tin tức...</div>
          </div>
        </div>
      </section>
    )
  }

  if (articles.length === 0) {
    return (
      <section className="py-12 md:py-20 lg:py-28">
        <div className="w-full px-4 sm:px-6 md:px-16 lg:px-32">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-balance">{t('home.news.title')}</h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {t('home.news.subtitle')}
            </p>
          </div>
          <div className="text-center py-12 md:py-16">
            <div className="text-muted-foreground">Chưa có bài viết nào</div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 md:py-20 lg:py-28">
      <div className="w-full px-4 sm:px-6 md:px-16 lg:px-32">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-balance">{t('home.news.title')}</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('home.news.subtitle')}
          </p>
        </div>

        <div className="relative flex items-center gap-2 md:gap-4">
          <button
            onClick={handlePrev}
            className="flex-shrink-0 w-10 md:w-12 h-10 md:h-12 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors flex items-center justify-center shadow-md z-10"
            aria-label="Previous news"
          >
            <ChevronLeft className="w-5 md:w-6 h-5 md:h-6" />
          </button>

          <div className="flex-1 overflow-hidden px-1 md:px-2 py-2 md:py-4">
            <Carousel
              ref={carouselRef}
              dots={false}
              effect="scrollx"
              autoplay
              autoplaySpeed={5000}
              infinite
            >
              {groups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-2 md:px-4 py-4 md:py-8 auto-rows-max">
                    {group.map((article) => (
                      <Card
                        key={article.id}
                        className="group relative hover:z-10 hover:md:scale-105 hover:shadow-2xl transition-all duration-300 overflow-hidden bg-background border-border shadow-lg rounded-lg flex flex-col h-full"
                      >
                        <div className="relative h-48 sm:h-56 md:h-64 lg:h-56 overflow-hidden rounded-t-lg flex-shrink-0">
                          <Image
                            src={article.thumbnail_url || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute top-3 left-3 bg-primary text-primary-foreground px-2 md:px-3 py-1 rounded-md text-xs md:text-sm font-medium">
                            {new Date(article.created_at).toLocaleDateString('vi-VN')}
                          </div>
                        </div>
                        <div className="pt-4 md:pt-6 pb-4 md:pb-6 px-4 md:px-6 flex flex-col flex-grow">
                          <CardTitle className="text-lg sm:text-xl md:text-lg lg:text-xl mb-2 md:mb-3 group-hover:text-primary transition-colors line-clamp-2 min-h-[3.5rem] font-bold">
                            <Link href={`/articles/${article.slug}`}>{article.title}</Link>
                          </CardTitle>
                          <CardDescription className="text-sm md:text-base leading-relaxed line-clamp-3 mb-3 md:mb-4 flex-grow">
                            {article.excerpt || 'Không có mô tả'}
                          </CardDescription>
                          <Link
                            href={`/articles/${article.slug}`}
                            className="text-primary font-medium hover:underline inline-flex items-center gap-1 mt-auto text-sm md:text-base"
                          >
                            {t('home.news.readMore')}
                            <span className="text-lg">›</span>
                          </Link>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          <button
            onClick={handleNext}
            className="flex-shrink-0 w-10 md:w-12 h-10 md:h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center shadow-md z-10"
            aria-label="Next news"
          >
            <ChevronRight className="w-5 md:w-6 h-5 md:h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8 md:mt-12">
          <Button asChild className="rounded-full px-8 sm:px-12 md:px-15 py-6 md:py-8 text-base md:text-lg font-semibold bg-[#268aff] text-white hover:bg-[#1677ff] transition-colors shadow-md">
            <Link href="/articles/articles-list">{t('home.news.viewAll')}</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
