'use client'

import { Suspense } from 'react'
import { CategoryArticlesView } from '@/components/articles/category-articles-view'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ArticleListSkeleton } from '@/components/ui/loading-skeleton'

export default function TinTucDanhMucPage() {
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
      <CategoryArticlesView />
    </Suspense>
  )
}
