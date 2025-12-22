"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useTranslation } from 'react-i18next'

const products = [
  {
    nameKey: "aiSoc",
    descriptionKey: "aiSocDesc", 
    image: "https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/homepage/nexus-dashboard-800x600.jpg",
    link: "#",
  },
  {
    nameKey: "csa",
    descriptionKey: "csaDesc",
    image: "https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/homepage/2025/cisco-unified-edge-hardware-768x576.jpg",
    link: "#",
  },
  {
    nameKey: "pentestServices", 
    descriptionKey: "pentestServicesDesc",
    image: "https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/homepage/splunk-enterprise-security-800x600.jpg",
    link: "https://vietguardscan.icss.com.vn/",
  },
  {
    nameKey: "vietguard",
    descriptionKey: "vietguardDesc",
    image: "https://icss.com.vn/wp-content/uploads/2025/08/Screenshot-2025-08-07-174127-300x167.png",
    link: "http://vietguardscan.icss.com.vn/",
  },
  {
    nameKey: "oracleCloud",
    descriptionKey: "oracleCloudDesc",
    image: "https://icss.com.vn/wp-content/uploads/2025/06/oracle_2_ac4dac9f3d.jpg",
    link: "http://oraclecloud.vn/",
  },
  {
    nameKey: "smartDashboard",
    descriptionKey: "smartDashboardDesc", 
    image: "https://icss.com.vn/wp-content/uploads/2025/06/Thiet-ke-chua-co-ten-39.jpg",
    link: "http://smartdashboard.vn/",
  },
]

export function ProductsSection() {
  const [showAll, setShowAll] = useState(false)
  const { t } = useTranslation()
  const displayedProducts = showAll ? products : products.slice(0, 3)

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="w-full px-16 lg:px-32">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-balance">{t('home.products.title')}</h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
          {t('home.products.subtitle')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {displayedProducts.map((product, index) => {
            const isNewCard = showAll && index >= 3
            const animationDelay = `${(index - 3) * 150}ms`
            
            return (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-background !border-none shadow-none ${
                isNewCard ? 'animate-[fadeInUp_0.6s_ease-out_forwards]' : ''
              }`}
              style={isNewCard ? {
                opacity: 0,
                animationDelay: animationDelay
              } : {}}
            >
              <CardHeader className="p-0">
                <div className="relative h-[25rem] overflow-hidden rounded-t-lg">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={t(`home.products.${product.nameKey}`)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="text-3xl mb-3">{t(`home.products.${product.nameKey}`)}</CardTitle>
                <CardDescription className="text-lg leading-relaxed">{t(`home.products.${product.descriptionKey}`)}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent rounded-full px-8 py-4 text-lg font-semibold"
                >
                  <Link href={product.link} target={product.link.startsWith("http") ? "_blank" : undefined}>
                    {t('home.products.viewMore')}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            )
          })}
        </div>

        {!showAll && products.length > 3 && (
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setShowAll(true)}
              size="lg"
              className="px-8"
            >
              {t('home.products.showMore')}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
