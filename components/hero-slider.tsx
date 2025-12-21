"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    title: "Vietguard",
    description: "Giải pháp bảo mật phần mềm mobile toàn diện và hiệu quả",
    image: "https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-8-1-1024x335.jpg",
    link: "http://vietguardscan.icss.com.vn/",
  },
  {
    id: 2,
    title: "Oracle Cloud",
    description:
      "Chúng tôi tự hào là đối tác chính thức cung cấp Oracle Cloud tại Việt Nam, với mức giá tốt hơn và tối ưu hỗ trợ khách hàng Việt",
    image: "https://icss.com.vn/wp-content/uploads/2025/08/Gemini_Generated_Image_itzj9witzj9witzj-scaled.png",
    link: "http://oraclecloud.vn/",
  },
  {
    id: 3,
    title: "Smart Building",
    description: "Giải pháp quản lý toàn diện hệ sinh thái tòa nhà thông minh",
    image: "https://icss.com.vn/wp-content/uploads/2025/05/Thiet-ke-chua-co-ten-22-1-1024x576.jpg",
    link: "/smart-building",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [direction, setDirection] = useState<"next" | "prev">("next")

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection("next")
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

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
    <div className="relative h-[calc(100vh-5rem)] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/50 z-10" />
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="w-full px-16 lg:px-32">
              <div className={`max-w-3xl ${index === currentSlide ? "slide-in" : ""}`}>
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 text-balance">{slide.title}</h1>
                <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">{slide.description}</p>
                <Button asChild size="lg" className="bg-transparent border border-white text-white hover:bg-white/10">
                  <Link href={slide.link} target={slide.link.startsWith("http") ? "_blank" : undefined}>
                    Tìm hiểu thêm
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white w-8" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
