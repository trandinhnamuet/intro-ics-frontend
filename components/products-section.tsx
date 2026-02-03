"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useTranslation } from 'react-i18next'
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedHeading } from "@/components/ui/animated-heading"
import { Section } from "@/components/ui/section"
import { ArrowRight, Shield, Cloud, BarChart3, Lock, Activity, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const products = [
  {
    nameKey: "chatbot",
    descriptionKey: "chatbotDesc", 
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop",
    link: "/products/chatbot",
    icon: MessageCircle,
    color: "from-blue-600 to-cyan-500",
  },
  {
    nameKey: "aiSoc",
    descriptionKey: "aiSocDesc", 
    image: "https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/homepage/nexus-dashboard-800x600.jpg",
    link: "/products/ai-soc",
    icon: Activity,
    color: "from-blue-500 to-cyan-500",
  },
  {
    nameKey: "csaDlp",
    descriptionKey: "csaDlpDesc",
    image: "https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/homepage/2025/cisco-unified-edge-hardware-768x576.jpg",
    link: "https://csa.icss.com.vn/",
    icon: Shield,
    color: "from-purple-500 to-pink-500",
  },
  {
    nameKey: "vietguard",
    descriptionKey: "vietguardDesc",
    image: "/vietguard.webp",
    link: "/products/vietguard",
    icon: Shield,
    color: "from-green-500 to-emerald-500",
  },
  {
    nameKey: "pentestServices", 
    descriptionKey: "pentestServicesDesc",
    image: "https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/homepage/splunk-enterprise-security-800x600.jpg",
    link: "/products/pentest-services",
    icon: Lock,
    color: "from-orange-500 to-red-500",
  },
  {
    nameKey: "oracleCloud",
    descriptionKey: "oracleCloudDesc",
    image: "/doitac/Oracle.jpg",
    link: "/products/oracle-cloud",
    icon: Cloud,
    color: "from-red-500 to-orange-500",
  },
  {
    nameKey: "smartDashboard",
    descriptionKey: "smartDashboardDesc", 
    image: "/smdb.png",
    link: "/products/smart-dashboard",
    icon: BarChart3,
    color: "from-indigo-500 to-blue-500",
  },
]

export function ProductsSection() {
  const [showAll, setShowAll] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { t } = useTranslation()
  const displayedProducts = showAll ? products : products.slice(0, 3)

  return (
    <Section background="gradient" spacing="sm">
      <AnimatedHeading underline>
        {t('home.products.title')}
      </AnimatedHeading>
      
      <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-200">
        {t('home.products.subtitle')}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
        {displayedProducts.map((product, index) => {
          const Icon = product.icon
          
          return (
            <ScrollReveal 
              key={index} 
              direction="up"
              delay={index * 100}
            >
              <Card 
                className={cn(
                  "group relative overflow-hidden bg-card border-none shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col",
                  "transform hover:-translate-y-3"
                )}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={t(`home.products.${product.nameKey}`)}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent",
                    "transition-opacity duration-500",
                    hoveredIndex === index ? "opacity-90" : "opacity-60"
                  )} />
                  
                  {/* Icon Badge */}
                  <div className={cn(
                    "absolute top-4 right-4 p-3 rounded-full backdrop-blur-sm transition-all duration-500",
                    `bg-gradient-to-br ${product.color}`,
                    hoveredIndex === index ? "scale-110 rotate-12" : "scale-100"
                  )}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  {/* Hover Content Overlay */}
                  <div className={cn(
                    "absolute inset-0 flex items-center justify-center transition-all duration-500",
                    hoveredIndex === index ? "opacity-100" : "opacity-0"
                  )}>
                    <div className="text-center space-y-4 px-6">
                      <div className="text-white text-lg font-semibold">
                        {t('home.products.viewMore')}
                      </div>
                      <ArrowRight className="w-8 h-8 text-white mx-auto animate-bounce" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 flex flex-col flex-grow">
                  <h3 className={cn(
                    "text-2xl font-bold transition-all duration-300",
                    hoveredIndex === index && "gradient-text"
                  )}>
                    {t(`home.products.${product.nameKey}`)}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed line-clamp-3 flex-grow">
                    {t(`home.products.${product.descriptionKey}`)}
                  </p>
                  
                  {/* CTA Button */}
                  <Button
                    asChild
                    variant="ghost"
                    className={cn(
                      "w-full group/btn transition-all duration-300 rounded-full font-semibold mt-auto",
                      "hover:bg-gradient-to-r hover:text-white border-2",
                      `hover:${product.color}`
                    )}
                  >
                    <Link href={product.link}>
                      <span className="flex items-center justify-center gap-2">
                        {t('home.products.explore')}
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                      </span>
                    </Link>
                  </Button>
                </div>

                {/* Decorative Corner */}
                <div className={cn(
                  "absolute top-0 right-0 w-24 h-24 bg-gradient-to-br opacity-10 transition-opacity duration-500",
                  product.color,
                  hoveredIndex === index && "opacity-20"
                )} style={{ clipPath: "polygon(100% 0, 0 0, 100% 100%)" }} />
              </Card>
            </ScrollReveal>
          )
        })}
      </div>

      {/* Show More Button */}
      {!showAll && products.length > 3 && (
        <ScrollReveal direction="up" delay={400}>
          <div className="text-center mt-16">
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white font-semibold px-12 py-6 text-lg rounded-full shadow-xl group"
            >
              <span className="flex items-center gap-3">
                {t('home.products.showAll')}
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
              </span>
            </Button>
          </div>
        </ScrollReveal>
      )}

      {showAll && (
        <ScrollReveal direction="up" delay={100}>
          <div className="text-center mt-16">
            <Button
              onClick={() => setShowAll(false)}
              size="lg"
              variant="outline"
              className="border-2 font-semibold px-12 py-6 text-lg rounded-full group"
            >
              {t('home.products.showLess')}
            </Button>
          </div>
        </ScrollReveal>
      )}
    </Section>
  )
}
