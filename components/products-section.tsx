"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const products = [
  {
    name: "Gurucul AI SOC",
    description:
      "Trung tâm điều hành an ninh mạng được trang bị AI tiên tiến. Phát hiện và phản ứng tự động với các mối đe dọa an ninh mạng.",
    // image: "https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/homepage/2025/cisco-unified-edge-hardware-768x576.jpg",
    image: "https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/homepage/nexus-dashboard-800x600.jpg",
    link: "#",
  },
  {
    name: "CSA",
    description:
      "Giải pháp đánh giá và kiểm toán an ninh mạng toàn diện. Đảm bảo tuân thủ các tiêu chuẩn bảo mật quốc tế và quy định địa phương.",
    image: "https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/homepage/2025/cisco-unified-edge-hardware-768x576.jpg",
    // image: "https://socialtalky.com/wp-content/uploads/2024/06/Mobile-Device-Management-for-Small-Businesses.jpg",
    link: "#",
  },
  {
    name: "Pentest Services",
    description:
      "Dịch vụ kiểm thử xâm nhập chuyên nghiệp. Phát hiện lỗ hổng bảo mật trước khi kẻ tấn công khai thác chúng. Bao gồm 3 công cụ: Mobile App Scan, Compability Check, Code Analysis.",
    image: "https://www.cisco.com/content/dam/cisco-cdc/site/images/photography/homepage/splunk-enterprise-security-800x600.jpg",
    // image: "https://softwareevolutionlab.gallerycdn.vsassets.io/extensions/softwareevolutionlab/codeanalyzer2/2.0.1/1704987220396/Microsoft.VisualStudio.Services.Icons.Default",
    link: "https://vietguardscan.icss.com.vn/",
  },
  {
    name: "Vietguard - Mobile App Security",
    description:
      "Công cụ quét và phát hiện lỗ hổng bảo mật cho ứng dụng di động. Bảo vệ toàn diện các ứng dụng iOS và Android khỏi các mối đe dọa an ninh mạng.",
    image: "https://icss.com.vn/wp-content/uploads/2025/08/Screenshot-2025-08-07-174127-300x167.png",
    link: "http://vietguardscan.icss.com.vn/",
  },
  {
    name: "Oracle Cloud",
    description:
      "Giải pháp điện toán đám mây hàng đầu với hiệu suất cao, bảo mật tuyệt đối. Đối tác chính thức Oracle tại Việt Nam với giá ưu đãi nhất.",
    image: "https://icss.com.vn/wp-content/uploads/2025/06/oracle_2_ac4dac9f3d.jpg",
    link: "http://oraclecloud.vn/",
  },
  {
    name: "Smart Dashboard",
    description:
      "Hệ thống giám sát và quản lý tập trung cho doanh nghiệp. Theo dõi real-time, phân tích dữ liệu thông minh, tối ưu hóa vận hành.",
    image: "https://icss.com.vn/wp-content/uploads/2025/06/Thiet-ke-chua-co-ten-39.jpg",
    link: "http://smartdashboard.vn/",
  },
  
]

export function ProductsSection() {
  const [showAll, setShowAll] = useState(false)
  const displayedProducts = showAll ? products : products.slice(0, 3)

  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="w-full px-16 lg:px-32">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-balance">Sản phẩm của chúng tôi</h2>
        {/* <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
          Giải pháp công nghệ tiên tiến, được thiết kế để bảo vệ và tối ưu hóa hệ thống của bạn
        </p> */}

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
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="text-3xl mb-3">{product.name}</CardTitle>
                <CardDescription className="text-lg leading-relaxed">{product.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent rounded-full px-8 py-4 text-lg font-semibold"
                >
                  <Link href={product.link} target={product.link.startsWith("http") ? "_blank" : undefined}>
                    Tìm hiểu thêm
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
              Xem thêm
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
