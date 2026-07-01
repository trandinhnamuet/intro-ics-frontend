// Single source of truth for article categories.
// Keys are stored in English in the DB; labels are shown in Vietnamese.
export const ARTICLE_CATEGORIES = [
  { key: 'blog',     label: 'Blog',      route: '/tin-tuc/blog',      badgeClassName: 'bg-emerald-500 hover:bg-emerald-600 text-white' },
  { key: 'news',     label: 'News',      route: '/tin-tuc/news',      badgeClassName: 'bg-blue-500 hover:bg-blue-600 text-white' },
  { key: 'document', label: 'Documents', route: '/tin-tuc/documents', badgeClassName: 'bg-amber-500 hover:bg-amber-600 text-white' },
] as const

export type ArticleCategoryKey = (typeof ARTICLE_CATEGORIES)[number]['key']

// Default category for brand-new articles created in the write form.
export const DEFAULT_ARTICLE_CATEGORY: ArticleCategoryKey = 'blog'

// Default news landing route (header "Tin tức" + legacy redirects point here).
export const DEFAULT_NEWS_ROUTE = '/tin-tuc/news'

// Category tabs on the /tin-tuc/* pages (no "All"); each links to its own route.
export const CATEGORY_NAV = ARTICLE_CATEGORIES.map(({ key, label, route }) => ({ key, label, route }))

// Filter list = "All" + the real categories. Used by the management filter dropdown.
export const CATEGORY_FILTERS = [
  { key: 'all', label: 'All' },
  ...ARTICLE_CATEGORIES.map(({ key, label }) => ({ key, label })),
] as const

// Resolve display meta for a stored key. Falls back to "News" for unknown/missing keys.
export function getCategoryMeta(key?: string) {
  return (
    ARTICLE_CATEGORIES.find((c) => c.key === key) ??
    ARTICLE_CATEGORIES.find((c) => c.key === 'news')!
  )
}
