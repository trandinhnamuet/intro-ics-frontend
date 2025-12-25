"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from 'react-i18next'
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    titleKey: "vietguard",
    descriptionKey: "vietguardDesc",
    image: "/bgtrangchu3.jpg",
    link: "http://vietguardscan.icss.com.vn/",
  },
  {
    id: 2,
    titleKey: "oracleCloud", 
    descriptionKey: "oracleCloudDesc",
    image: "/bgtrangchu2.jpg",
    link: "http://oraclecloud.vn/",
  },
  {
    id: 3,
    titleKey: "smartBuilding",
    descriptionKey: "smartBuildingDesc",
    image: "/bgtrangchu1.jpg",
    link: "/smart-building",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState<"next" | "prev">("next")
  const [isPaused, setIsPaused] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    if (isPaused) return
    
    const timer = setInterval(() => {
      setDirection("next")
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [isPaused])

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? "next" : "prev")
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setDirection("next")
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setDirection("prev")
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div 
      className="relative h-screen min-h-[600px] overflow-hidden bg-black"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={cn(
            "absolute inset-0 transition-all duration-1000",
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          )}
        >
          {/* Background Image with Parallax Effect */}
          <div className="absolute inset-0 scale-110">
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.titleKey}
              fill
              className="object-cover"
              priority={index === 0}
              quality={90}
            />
          </div>

          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container-responsive">
              <div className={cn(
                "max-w-2xl space-y-6",
                index === currentSlide && "animate-fade-in-up"
              )}>
                {/* Tag */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-medium text-white">
                    {t('home.hero.featured')}
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-tight">
                  {t('home.hero.title')}
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-xl">
                  {t('home.hero.subtitle')}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {/* Primary CTA removed as requested */}
                  
                  <Button 
                    asChild 
                    size="lg" 
                    variant="outline"
                    className="border-2 border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-8 py-6 text-lg rounded-full"
                  >
                    <Link href="/gioi-thieu">
                      {t('home.hero.learnMore')}
                    </Link>
                  </Button>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap gap-6 pt-6">
                  <div className="glass px-6 py-3 rounded-xl">
                    <div className="text-3xl font-bold text-white">4+</div>
                    <div className="text-sm text-white/80">{t('home.hero.years')}</div>
                  </div>
                  <div className="glass px-6 py-3 rounded-xl">
                    <div className="text-3xl font-bold text-white">24/7</div>
                    <div className="text-sm text-white/80">{t('home.hero.support')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 group"
        aria-label="Previous slide"
      >
        <div className="bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 sm:p-4 transition-all duration-300 border border-white/20 group-hover:scale-110">
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 group"
        aria-label="Next slide"
      >
        <div className="bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full p-3 sm:p-4 transition-all duration-300 border border-white/20 group-hover:scale-110">
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </div>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group"
            aria-label={`Go to slide ${index + 1}`}
          >
            <div className={cn(
              "transition-all duration-300 rounded-full",
              index === currentSlide 
                ? "w-12 h-3 bg-white" 
                : "w-3 h-3 bg-white/40 group-hover:bg-white/60"
            )} />
          </button>
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 z-30">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
          style={{ 
            width: `${((currentSlide + 1) / slides.length) * 100}%`,
            transition: 'width 0.3s ease-in-out'
          }}
        />
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 z-30 hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <div className="text-white/60 text-sm font-medium rotate-90 origin-center whitespace-nowrap">
          {t('home.hero.scrollDown')}
        </div>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </div>
  )
}
