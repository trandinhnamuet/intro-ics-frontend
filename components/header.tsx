"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Search as SearchIcon, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { LanguageSelector } from "@/components/language-selector"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTranslation } from 'react-i18next'
import { cn } from "@/lib/utils"

export function Header() {
  const router = useRouter()
  const { t } = useTranslation()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [showSearch, setShowSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY
      
      // Check if scrolled
      setIsScrolled(currentScrollY > 20)
      
      // Hiện header khi ở đầu trang
      if (currentScrollY < 10) {
        setIsVisible(true)
      } 
      // Ẩn header khi scroll xuống
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setShowSearch(false)
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
      setMobileMenuOpen(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-background/80 backdrop-blur-lg shadow-md" 
        : "bg-background/60 backdrop-blur-sm",
      isVisible ? 'translate-y-0' : '-translate-y-full'
    )}>
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group flex-shrink-0">
            <div className="relative w-14 h-14 transition-transform duration-300 group-hover:scale-110">
              <Image
                src="/images/ics_logo.png"
                alt="ICS Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-0.5">
            {/* About Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={cn(
                "flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium",
                "hover:bg-primary/10 hover:text-primary",
                activeDropdown === "about" && "bg-primary/10 text-primary"
              )}>
                {t('header.aboutUs')}
                <ChevronDown className={cn(
                  "w-3.5 h-3.5 transition-transform duration-200",
                  activeDropdown === "about" && "rotate-180"
                )} />
              </button>
              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 pt-2 min-w-[220px]">
                  <div className="bg-card/95 backdrop-blur-lg border border-border rounded-xl shadow-xl py-1 animate-fade-in-down">
                    <Link 
                      href="/gioi-thieu" 
                      className="block px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-lg mx-1 text-sm"
                    >
                      <div className="font-medium">{t('header.generalIntro')}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t('header.menu.aboutCompany')}</div>
                    </Link>
                    <Link 
                      href="/khach-hang" 
                      className="block px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-lg mx-1 text-sm"
                    >
                      <div className="font-medium">{t('header.clients')}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t('header.menu.ourClients')}</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/doi-tac" 
              className="px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium hover:bg-primary/10 hover:text-primary"
            >
              {t('header.partners')}
            </Link>

            {/* Consulting Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("consulting")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={cn(
                "flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium",
                "hover:bg-primary/10 hover:text-primary",
                activeDropdown === "consulting" && "bg-primary/10 text-primary"
              )}>
                {t('header.consulting')}
                <ChevronDown className={cn(
                  "w-3.5 h-3.5 transition-transform duration-200",
                  activeDropdown === "consulting" && "rotate-180"
                )} />
              </button>
              {activeDropdown === "consulting" && (
                <div className="absolute top-full left-0 pt-2 min-w-[250px]">
                  <div className="bg-card/95 backdrop-blur-lg border border-border rounded-xl shadow-xl py-1 animate-fade-in-down">
                    <Link 
                      href="/toa-nha-thong-minh" 
                      className="block px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-lg mx-1 text-sm"
                    >
                      <div className="font-medium">{t('header.smartBuilding')}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t('header.menu.smartBuildingDesc')}</div>
                    </Link>
                    <Link 
                      href="/nha-may-thong-minh" 
                      className="block px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-lg mx-1 text-sm"
                    >
                      <div className="font-medium">{t('header.smartFactory')}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t('header.menu.smartFactoryDesc')}</div>
                    </Link>
                    <Link 
                      href="/giai-phap-esg" 
                      className="block px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-lg mx-1 text-sm"
                    >
                      <div className="font-medium">{t('header.esgSolution')}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t('header.menu.esgDesc')}</div>
                    </Link>
                    <Link 
                      href="/ai-soc" 
                      className="block px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-lg mx-1 text-sm"
                    >
                      <div className="font-medium">{t('header.aiSoc')}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t('header.menu.aiSocDesc')}</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("products")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={cn(
                "flex items-center gap-1 px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium",
                "hover:bg-primary/10 hover:text-primary",
                activeDropdown === "products" && "bg-primary/10 text-primary"
              )}>
                {t('header.products')}
                <ChevronDown className={cn(
                  "w-3.5 h-3.5 transition-transform duration-200",
                  activeDropdown === "products" && "rotate-180"
                )} />
              </button>
              {activeDropdown === "products" && (
                <div className="absolute top-full left-0 pt-2 min-w-[240px]">
                  <div className="bg-card/95 backdrop-blur-lg border border-border rounded-xl shadow-xl py-1 animate-fade-in-down">
                    <Link
                      href="/products/chatbot"
                      className="block px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-lg mx-1 text-sm"
                    >
                      <div className="font-medium">V AIChat - Chatbot</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t('header.menu.productDescriptions.chatbot')}</div>
                    </Link>
                    <Link
                      href="/products/vietguard"
                      className="block px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-lg mx-1 text-sm"
                    >
                      <div className="font-medium">{t('header.vietguard')}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t('header.menu.productDescriptions.vietguard')}</div>
                    </Link>
                    <Link
                      href="/products/ai-soc"
                      className="block px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-lg mx-1 text-sm"
                    >
                      <div className="font-medium">AI SOC</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t('header.menu.productDescriptions.aiSoc')}</div>
                    </Link>
                    <Link
                      href="https://landing-csa.vercel.app/"
                      className="block px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-lg mx-1 text-sm"
                    >
                      <div className="font-medium">CSA-Endpoint</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t('header.menu.productDescriptions.csaDlp')}</div>
                    </Link>
                    <Link
                      href="/products/pentest-services"
                      className="block px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-lg mx-1 text-sm"
                    >
                      <div className="font-medium">Pentest Services</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t('header.menu.productDescriptions.pentest')}</div>
                    </Link>
                    <Link
                      href="https://oraclecloud.vn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-lg mx-1 text-sm"
                    >
                      <div className="font-medium">{t('header.oracleCloud')}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t('header.menu.productDescriptions.oracleCloud')}</div>
                    </Link>
                    <Link
                      href="https://smartdashboard.vn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2 hover:bg-primary/10 hover:text-primary transition-all duration-200 rounded-lg mx-1 text-sm"
                    >
                      <div className="font-medium">{t('header.smartDashboard')}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{t('header.menu.productDescriptions.smartDashboard')}</div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/articles/articles-list" 
              className="px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium hover:bg-primary/10 hover:text-primary"
            >
              {t('header.news')}
            </Link>

            <Link 
              href="/tuyen-dung" 
              className="px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium hover:bg-primary/10 hover:text-primary"
            >
              {t('header.recruitment')}
            </Link>

            <Link 
              href="/lien-he" 
              className="px-3 py-2 rounded-lg transition-all duration-200 text-sm font-medium hover:bg-primary/10 hover:text-primary"
            >
              {t('header.contact')}
            </Link>
          </nav>

          {/* Right Side - Actions */}
          <div className="flex items-center gap-2">
            {/* Search - Desktop */}
            <div className="hidden md:block relative">
              {!showSearch ? (
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="rounded-full hover:bg-primary/10"
                  onClick={() => setShowSearch(true)}
                >
                  <SearchIcon className="h-5 w-5" />
                </Button>
              ) : (
                <div className="flex items-center gap-2 bg-card/95 backdrop-blur-lg border border-border rounded-full shadow-lg px-4 py-2 animate-scale-in">
                  <SearchIcon className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                  <Input
                    type="text"
                    placeholder={t('header.searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    onBlur={() => {
                      if (!searchTerm) setShowSearch(false)
                    }}
                    className="w-48 lg:w-64 border-0 focus-visible:ring-0 h-7 px-0 bg-transparent"
                    autoFocus
                  />
                  {searchTerm && (
                    <Button
                      size="sm"
                      onClick={handleSearch}
                      className="h-7 px-3 rounded-full"
                    >
                      {t('header.search')}
                    </Button>
                  )}
                </div>
              )}
            </div>

            {/* CTA Button - Hidden on mobile */}
            <Button 
              asChild 
              className="hidden md:flex bg-gradient-to-r from-primary to-accent hover:opacity-90 font-medium px-4 py-1.5 text-sm rounded-full shadow-lg"
            >
              <Link href="/lien-he">{t('header.contactUs')}</Link>
            </Button>

            {/* Language & Theme - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-2">
              <LanguageSelector />
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="xl:hidden rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-t border-border animate-fade-in-down">
            <nav className="py-4 space-y-1">
              {/* About Section */}
              <div className="space-y-1">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === "about" ? null : "about")}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-primary/10 rounded-lg transition-all"
                >
                  <span className="font-medium">{t('header.aboutUs')}</span>
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform",
                    activeDropdown === "about" && "rotate-180"
                  )} />
                </button>
                {activeDropdown === "about" && (
                  <div className="pl-4 space-y-1 animate-fade-in">
                    <Link href="/gioi-thieu" className="block px-4 py-2 hover:bg-primary/10 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                      {t('header.generalIntro')}
                    </Link>
                    <Link href="/khach-hang" className="block px-4 py-2 hover:bg-primary/10 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                      {t('header.clients')}
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/doi-tac" className="block px-4 py-3 hover:bg-primary/10 rounded-lg font-medium transition-all" onClick={() => setMobileMenuOpen(false)}>
                {t('header.partners')}
              </Link>

              {/* Consulting Section */}
              <div className="space-y-1">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === "consulting" ? null : "consulting")}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-primary/10 rounded-lg transition-all"
                >
                  <span className="font-medium">{t('header.consulting')}</span>
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform",
                    activeDropdown === "consulting" && "rotate-180"
                  )} />
                </button>
                {activeDropdown === "consulting" && (
                  <div className="pl-4 space-y-1 animate-fade-in">
                    <Link href="/toa-nha-thong-minh" className="block px-4 py-2 hover:bg-primary/10 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                      {t('header.smartBuilding')}
                    </Link>
                    <Link href="/nha-may-thong-minh" className="block px-4 py-2 hover:bg-primary/10 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                      {t('header.smartFactory')}
                    </Link>
                    <Link href="/giai-phap-esg" className="block px-4 py-2 hover:bg-primary/10 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                      {t('header.esgSolution')}
                    </Link>
                    <Link href="/ai-soc" className="block px-4 py-2 hover:bg-primary/10 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                      {t('header.aiSoc')}
                    </Link>
                  </div>
                )}
              </div>

              {/* Products Section */}
              <div className="space-y-1">
                <button 
                  onClick={() => setActiveDropdown(activeDropdown === "products" ? null : "products")}
                  className="w-full flex items-center justify-between px-4 py-3 hover:bg-primary/10 rounded-lg transition-all"
                >
                  <span className="font-medium">{t('header.products')}</span>
                  <ChevronDown className={cn(
                    "w-4 h-4 transition-transform",
                    activeDropdown === "products" && "rotate-180"
                  )} />
                </button>
                {activeDropdown === "products" && (
                  <div className="pl-4 space-y-1 animate-fade-in">
                    <Link href="http://vietguardscan.icss.com.vn/" target="_blank" className="block px-4 py-2 hover:bg-primary/10 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                      {t('header.vietguard')}
                    </Link>
                    <Link href="https://oraclecloud.vn/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-primary/10 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                      {t('header.oracleCloud')}
                    </Link>
                    <Link href="https://smartdashboard.vn/" target="_blank" rel="noopener noreferrer" className="block px-4 py-2 hover:bg-primary/10 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                      {t('header.smartDashboard')}
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-primary/10 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                      {t('header.gurucul')}
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-primary/10 rounded-lg" onClick={() => setMobileMenuOpen(false)}>
                      {t('header.csa')}
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/articles/articles-list" className="block px-4 py-3 hover:bg-primary/10 rounded-lg font-medium transition-all" onClick={() => setMobileMenuOpen(false)}>
                {t('header.news')}
              </Link>

              <Link href="/tuyen-dung" className="block px-4 py-3 hover:bg-primary/10 rounded-lg font-medium transition-all" onClick={() => setMobileMenuOpen(false)}>
                {t('header.recruitment')}
              </Link>

              <Link href="/lien-he" className="block px-4 py-3 hover:bg-primary/10 rounded-lg font-medium transition-all" onClick={() => setMobileMenuOpen(false)}>
                {t('header.contact')}
              </Link>

              {/* Mobile Search */}
              <div className="px-4 pt-3 pb-2 space-y-2">
                <div className="flex items-center gap-2 bg-muted/50 rounded-lg px-3 py-2">
                  <SearchIcon className="h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder={t('header.searchPlaceholder')}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="border-0 focus-visible:ring-0 bg-transparent"
                  />
                  {searchTerm && (
                    <Button size="sm" onClick={handleSearch} className="h-8 rounded-lg">
                      {t('header.search')}
                    </Button>
                  )}
                </div>
              </div>

              {/* Mobile Actions */}
              <div className="px-4 pt-2 space-y-2">
                <Button asChild className="w-full bg-gradient-to-r from-primary to-accent">
                  <Link href="/lien-he" onClick={() => setMobileMenuOpen(false)}>{t('header.contactUs')}</Link>
                </Button>
                <div className="flex items-center justify-center gap-2 pt-2">
                  <LanguageSelector />
                  <ThemeToggle />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
