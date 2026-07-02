// Single source of truth for article categories.
// Keys are stored in English in the DB; labels are shown in Vietnamese.
export const ARTICLE_CATEGORIES = [
  { key: 'blog',       label: 'Blog',       route: '/tin-tuc/blog',       badgeClassName: 'bg-emerald-500 hover:bg-emerald-600 text-white' },
  { key: 'case_study', label: 'Case Study', route: '/tin-tuc/case-study', badgeClassName: 'bg-violet-500 hover:bg-violet-600 text-white' },
] as const

export type ArticleCategoryKey = (typeof ARTICLE_CATEGORIES)[number]['key']

// Default category for brand-new articles created in the write form.
export const DEFAULT_ARTICLE_CATEGORY: ArticleCategoryKey = 'blog'

// "All articles" landing route (header "Tin tức" + legacy redirects point here).
export const DEFAULT_NEWS_ROUTE = '/tin-tuc/news'

// Category tabs on the /tin-tuc/* pages. Order: All → Blog → Case Study.
// "All" has no category key so it lists every article.
export const CATEGORY_NAV = [
  { key: 'all', label: 'All', route: DEFAULT_NEWS_ROUTE },
  ...ARTICLE_CATEGORIES.map(({ key, label, route }) => ({ key, label, route })),
] as const

// Filter list = "All" + the real categories. Used by the management filter dropdown.
export const CATEGORY_FILTERS = [
  { key: 'all', label: 'All' },
  ...ARTICLE_CATEGORIES.map(({ key, label }) => ({ key, label })),
] as const

// Display-only meta for legacy categories that are no longer selectable but may
// still be stored on older articles. Keeps their badges rendering sensibly.
const LEGACY_CATEGORY_META = [
  { key: 'news',     label: 'News',      badgeClassName: 'bg-blue-500 hover:bg-blue-600 text-white' },
  { key: 'document', label: 'Documents', badgeClassName: 'bg-amber-500 hover:bg-amber-600 text-white' },
]

// Resolve display meta for a stored key. Falls back to "Blog" for unknown/missing keys.
export function getCategoryMeta(key?: string) {
  return (
    ARTICLE_CATEGORIES.find((c) => c.key === key) ??
    LEGACY_CATEGORY_META.find((c) => c.key === key) ??
    ARTICLE_CATEGORIES.find((c) => c.key === 'blog')!
  )
}
