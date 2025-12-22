"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Search as SearchIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LanguageSelector } from "@/components/language-selector"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTranslation } from 'react-i18next'

export function Header() {
  const router = useRouter()
  const { t } = useTranslation()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showSearch, setShowSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY
      
      // Hiện header khi ở đầu trang
      if (currentScrollY < 10) {
        setIsVisible(true)
      } 
      // Ẩn header khi scroll xuống
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } 
      // Hiện header khi scroll lên
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', controlHeader)
    return () => window.removeEventListener('scroll', controlHeader)
  }, [lastScrollY])

  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/articles/articles-list?search=${encodeURIComponent(searchTerm.trim())}`)
      setShowSearch(false)
      setSearchTerm('')
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="w-full px-16 lg:px-32">
        <div className="flex items-center justify-between h-24">
          <Link href="/" className="flex items-center">
            <Image
              src="https://icss.com.vn/wp-content/uploads/2025/08/Thiet-ke-chua-co-ten-23-1024x1024.png"
              alt="ICS Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-white hover:bg-black transition-all font-medium px-3 py-2 rounded-md">
                {t('header.aboutUs')}
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px] animate-dropdown">
                    <Link href="/gioi-thieu" className="block px-4 py-2 hover:bg-muted transition-colors">
                      {t('header.generalIntro')}
                    </Link>
                    <Link href="/khach-hang" className="block px-4 py-2 hover:bg-muted transition-colors">
                      {t('header.clients')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/doi-tac" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('header.partners')}
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("consulting")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-white hover:bg-black transition-all font-medium px-3 py-2 rounded-md">
                {t('header.consulting')}
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "consulting" && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[250px] animate-dropdown">
                    <Link href="/toa-nha-thong-minh" className="block px-4 py-2 hover:bg-muted transition-colors">
                      {t('header.smartBuilding')}
                    </Link>
                    <Link href="/nha-may-thong-minh" className="block px-4 py-2 hover:bg-muted transition-colors">
                      {t('header.smartFactory')}
                    </Link>
                    <Link href="/giai-phap-esg" className="block px-4 py-2 hover:bg-muted transition-colors">
                      {t('header.esgSolution')}
                    </Link>
                    <Link href="/ai-soc" className="block px-4 py-2 hover:bg-muted transition-colors">
                      {t('header.aiSoc')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-white hover:bg-black transition-all font-medium px-3 py-2 rounded-md">
                {t('header.products')}
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "products" && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px] animate-dropdown">
                    <Link
                      href="http://vietguardscan.icss.com.vn/"
                      target="_blank"
                      className="block px-4 py-2 hover:bg-muted transition-colors"
                    >
                      {t('header.vietguard')}
                    </Link>
                    <Link
                      href="http://oraclecloud.vn/"
                      target="_blank"
                      className="block px-4 py-2 hover:bg-muted transition-colors"
                    >
                      {t('header.oracleCloud')}
                    </Link>
                    <Link
                      href="http://smartdashboard.vn/"
                      target="_blank"
                      className="block px-4 py-2 hover:bg-muted transition-colors"
                    >
                      {t('header.smartDashboard')}
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-muted transition-colors">
                      {t('header.gurucul')}
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-muted transition-colors">
                      {t('header.csa')}
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/articles/articles-list" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('header.news')}
            </Link>

            <Link href="/tuyen-dung" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('header.recruitment')}
            </Link>

            <Link href="/lien-he" className="text-foreground hover:text-primary transition-colors font-medium">
              {t('header.contact')}
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            {/* Search Button with Expandable Input */}
            <div 
              className="relative"
              onMouseEnter={() => setShowSearch(true)}
              onMouseLeave={() => {
                if (!searchTerm) setShowSearch(false)
              }}
            >
              {!showSearch ? (
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="rounded-full"
                >
                  <SearchIcon className="h-5 w-5" />
                </Button>
              ) : (
                <div className="flex items-center gap-2 bg-background border border-border rounded-lg shadow-lg px-3 py-2 animate-in fade-in zoom-in-95 duration-200">
                  <SearchIcon className="h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder={t('header.searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-64 border-0 focus-visible:ring-0 h-8 px-2"
                    autoFocus
                  />
                  <Button
                    size="sm"
                    onClick={handleSearch}
                    className="h-8"
                  >
                    {t('header.search')}
                  </Button>
                </div>
              )}
            </div>

            <Button asChild className="bg-foreground text-background hover:bg-foreground/90 font-medium px-6">
              <Link href="/lien-he">{t('header.contactUs')}</Link>
            </Button>
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
