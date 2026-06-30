// Single source of truth for article categories.
// Keys are stored in English in the DB; labels are shown in Vietnamese.
export const ARTICLE_CATEGORIES = [
  { key: 'blog',     label: 'Chia sẻ',  badgeClassName: 'bg-emerald-500 hover:bg-emerald-600 text-white' },
  { key: 'news',     label: 'Tin tức',  badgeClassName: 'bg-blue-500 hover:bg-blue-600 text-white' },
  { key: 'document', label: 'Tài liệu', badgeClassName: 'bg-amber-500 hover:bg-amber-600 text-white' },
] as const

export type ArticleCategoryKey = (typeof ARTICLE_CATEGORIES)[number]['key']

// Default category for brand-new articles created in the write form.
export const DEFAULT_ARTICLE_CATEGORY: ArticleCategoryKey = 'blog'

// Filter list = "Tất cả" + the real categories. Used by list & management filters.
export const CATEGORY_FILTERS = [
  { key: 'all', label: 'Tất cả' },
  ...ARTICLE_CATEGORIES.map(({ key, label }) => ({ key, label })),
] as const

// Resolve display meta for a stored key. Falls back to "Tin tức" for unknown/missing keys.
export function getCategoryMeta(key?: string) {
  return (
    ARTICLE_CATEGORIES.find((c) => c.key === key) ??
    ARTICLE_CATEGORIES.find((c) => c.key === 'news')!
  )
}
