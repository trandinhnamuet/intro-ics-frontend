"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { articlesService, type Article } from "@/services/articles.service"

interface NewsSideBarProps {
  className?: string
}

function NewsSideBar({ className = "" }: NewsSideBarProps) {
  const router = useRouter()
  const [articles, setArticles] = useState<Pick<Article, 'title' | 'slug'>[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchLatestArticles = async () => {
      try {
        setIsLoading(true)
        const response = await articlesService.getAllArticles(1, 9, 'published')
        setArticles(response.data.map((article: Article) => ({
          title: article.title,
          slug: article.slug
        })))
      } catch (error) {
        console.error('Failed to fetch latest articles:', error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchLatestArticles()
  }, [])

  const handleArticleClick = (slug: string) => {
    router.push(`/articles/${slug}`)
  }

  if (isLoading) {
    return (
      <div className={`w-[300px] flex-shrink-0 sticky top-24 h-fit space-y-5 mt-22 ${className}`}>
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <div className="bg-[#0984c7] text-white px-4 py-3 text-center font-semibold text-sm">
            BÀI VIẾT MỚI
          </div>
          <div className="bg-muted/50 p-4 space-y-3">
            {[...Array(5)].map((_, idx) => (
              <div key={idx} className="animate-pulse">
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`w-[300px] flex-shrink-0 sticky top-24 h-fit space-y-5 mt-22 ${className}`}>
      <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-[#0984c7] text-white px-4 py-3 text-center font-semibold text-sm">
          BÀI VIẾT MỚI
        </div>
        <div className="bg-muted/50">
          {articles.map((article, idx) => (
            <div key={idx}>
              <div
                className="px-4 py-2.5 text-[#0984c7] hover:bg-muted/80 transition-colors border-b border-gray-200 text-sm cursor-pointer leading-[18px] font-light"
                title={article.title}
                onClick={() => handleArticleClick(article.slug)}
              >
                {article.title}
              </div>
              {idx < articles.length - 1 && (
                <div className="border-b border-gray-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsSideBar