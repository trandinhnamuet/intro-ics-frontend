"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Mail, Phone, Youtube, MapPin, Send, ArrowRight } from "lucide-react"
import { useTranslation } from 'react-i18next'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function Footer() {
  const { t } = useTranslation()
  const [email, setEmail] = useState('')
  
  return (
    <footer className="relative bg-gradient-to-br from-secondary via-secondary to-secondary/90 text-secondary-foreground overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="relative container-responsive section-spacing">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Company Info - Spans 4 columns */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12">
                <Image
                  src="https://icss.com.vn/wp-content/uploads/2025/08/Thiet-ke-chua-co-ten-23-1024x1024.png"
                  alt="ICS Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold">{t('footer.companyName')}</h3>
                <p className="text-sm text-secondary-foreground/60">Cybersecurity Solutions</p>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { href: "https://www.facebook.com/profile.php?id=61575247001986", icon: Facebook, label: "Facebook", color: "hover:bg-blue-600" },
                { href: "https://www.youtube.com/channel/UCpOn4kxyTtzmUldsDZoxLHg", icon: Youtube, label: "YouTube", color: "hover:bg-red-600" },
                { href: "mailto:info@icss.com.vn", icon: Mail, label: "Email", color: "hover:bg-green-600" },
                { href: "tel:0931487231", icon: Phone, label: "Phone", color: "hover:bg-purple-600" },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    className={cn(
                      "w-10 h-10 rounded-lg bg-secondary-foreground/10 backdrop-blur-sm flex items-center justify-center",
                      "transition-all duration-300 hover:scale-110 hover:-translate-y-1",
                      social.color
                    )}
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Quick Links - 2 columns */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
              {t('footer.products')}
            </h4>
            <ul className="space-y-3">
              {[
                { href: "http://oraclecloud.vn/", label: "Oracle Cloud", external: true },
                { href: "http://vietguardscan.icss.com.vn/", label: "VietGuard Scan", external: true },
                { href: "http://smartdashboard.vn/", label: "Smart Dashboard", external: true },
                { href: "#", label: "AI SOC Platform", external: false },
                { href: "#", label: "CSA Endpoint", external: false },
              ].map((link) => (
                <li key={link.label}>
                  <Link 
                    href={link.href} 
                    target={link.external ? "_blank" : undefined}
                    className="group flex items-center gap-2 text-sm hover:text-primary transition-all"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-lg font-bold mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
              {t('footer.consulting')}
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/toa-nha-thong-minh", label: t('footer.smartBuilding') },
                { href: "/nha-may-thong-minh", label: t('footer.smartFactory') },
                { href: "/esg", label: t('footer.esgSolution') },
                { href: "/ai-soc", label: t('footer.aiSocSolution') },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="group flex items-center gap-2 text-sm hover:text-primary transition-all"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - Spans 4 columns */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-lg font-bold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
              Newsletter
            </h4>
            <p className="text-sm text-secondary-foreground/70">
              Đăng ký để nhận thông tin mới nhất về an ninh mạng và các giải pháp công nghệ.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Email của bạn"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-secondary-foreground/5 border-secondary-foreground/20 focus:border-primary"
              />
              <Button 
                size="icon"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Trust Badges */}
            <div className="pt-4 space-y-2">
              <p className="text-xs text-secondary-foreground/60 uppercase font-semibold tracking-wide">
                Chứng nhận & Đối tác
              </p>
              <div className="flex gap-4 flex-wrap">
                <div className="px-3 py-1.5 bg-secondary-foreground/5 rounded text-xs font-medium">
                  ISO 27001
                </div>
                <div className="px-3 py-1.5 bg-secondary-foreground/5 rounded text-xs font-medium">
                  Oracle Partner
                </div>
                <div className="px-3 py-1.5 bg-secondary-foreground/5 rounded text-xs font-medium">
                  Verified
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/60">
              © {new Date().getFullYear()} {t('footer.companyName')}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm">
              {[
                { href: "/gioi-thieu", label: t('footer.aboutIcs') },
                { href: "/articles/articles-list", label: t('footer.news') },
                { href: "/lien-he", label: t('footer.contact') },
                { href: "/tuyen-dung", label: t('footer.recruitment') },
              ].map((link) => (
                <Link 
                  key={link.href}
                  href={link.href} 
                  className="hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-px after:bg-primary after:transition-all hover:after:w-full"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
