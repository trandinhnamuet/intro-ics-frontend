"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

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
                Về chúng tôi
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[200px] animate-dropdown">
                    <Link href="/gioi-thieu" className="block px-4 py-2 hover:bg-muted transition-colors">
                      Giới thiệu chung
                    </Link>
                    <Link href="/khach-hang" className="block px-4 py-2 hover:bg-muted transition-colors">
                      Khách hàng
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/doi-tac" className="text-foreground hover:text-primary transition-colors font-medium">
              Đối tác
            </Link>

            <div
              className="relative group"
              onMouseEnter={() => setActiveDropdown("consulting")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 text-foreground hover:text-white hover:bg-black transition-all font-medium px-3 py-2 rounded-md">
                Tư vấn
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "consulting" && (
                <div className="absolute top-full left-0 pt-2">
                  <div className="bg-card border border-border rounded-lg shadow-lg py-2 min-w-[250px] animate-dropdown">
                    <Link href="/toa-nha-thong-minh" className="block px-4 py-2 hover:bg-muted transition-colors">
                      Giải pháp tòa nhà thông minh
                    </Link>
                    <Link href="/nha-may-thong-minh" className="block px-4 py-2 hover:bg-muted transition-colors">
                      Giải pháp nhà máy thông minh
                    </Link>
                    <Link href="/giai-phap-esg" className="block px-4 py-2 hover:bg-muted transition-colors">
                      Giải pháp ESG
                    </Link>
                    <Link href="/ai-soc" className="block px-4 py-2 hover:bg-muted transition-colors">
                      AI SOC
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
                Sản phẩm
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
                      Vietguard
                    </Link>
                    <Link
                      href="http://oraclecloud.vn/"
                      target="_blank"
                      className="block px-4 py-2 hover:bg-muted transition-colors"
                    >
                      Oracle Cloud
                    </Link>
                    <Link
                      href="http://smartdashboard.vn/"
                      target="_blank"
                      className="block px-4 py-2 hover:bg-muted transition-colors"
                    >
                      Smart Dashboard
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-muted transition-colors">
                      Gurucul AI SOC
                    </Link>
                    <Link href="#" className="block px-4 py-2 hover:bg-muted transition-colors">
                      CSA
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link href="/tin-tuc" className="text-foreground hover:text-primary transition-colors font-medium">
              Tin tức
            </Link>

            <Link href="/lien-he" className="text-foreground hover:text-primary transition-colors font-medium">
              Liên hệ
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild className="bg-foreground text-background hover:bg-foreground/90 font-medium px-6">
              <Link href="/lien-he">Liên hệ chúng tôi</Link>
            </Button>
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}
