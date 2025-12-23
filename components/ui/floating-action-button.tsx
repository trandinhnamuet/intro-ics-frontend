'use client'

import { useState, useEffect } from 'react'
import { Phone, MessageCircle, ChevronUp, Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const actions = [
    {
      icon: Phone,
      label: 'Hotline',
      href: 'tel:0707806860',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MessageCircle,
      label: 'Zalo',
      href: 'https://zalo.me/0707806860',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:info@icss.com.vn',
      color: 'from-purple-500 to-pink-500'
    }
  ]

  if (!isVisible) return null

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-3">
      {/* Action Buttons */}
      <div className={cn(
        "flex flex-col gap-3 transition-all duration-300",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}>
        {actions.map((action, idx) => (
          <Link
            key={idx}
            href={action.href}
            target={action.href.startsWith('http') ? '_blank' : undefined}
            rel={action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            className="group flex items-center gap-3"
          >
            <span className="bg-white/95 backdrop-blur-sm shadow-lg px-4 py-2 rounded-full text-sm font-semibold text-gray-800 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {action.label}
            </span>
            <div className={cn(
              "w-12 h-12 rounded-full bg-gradient-to-br shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-xl",
              action.color
            )}>
              <action.icon className="w-6 h-6" />
            </div>
          </Link>
        ))}
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent shadow-lg flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-xl"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6" />
      </button>

      {/* Main FAB */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-500 shadow-xl flex items-center justify-center text-white transition-all duration-300 hover:scale-110 hover:shadow-2xl",
          isOpen && "rotate-45"
        )}
        aria-label="Contact options"
      >
        <Phone className="w-7 h-7" />
      </button>
    </div>
  )
}
