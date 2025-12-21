"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Carousel } from "antd"
import type { CarouselRef } from "antd/es/carousel"

const newsArticles = [
  {
    id: 1,
    title: "Xu hướng An ninh mạng 2025: AI và Machine Learning",
    description:
      "Khám phá những công nghệ mới nhất trong lĩnh vực bảo mật và cách AI đang thay đổi cách chúng ta bảo vệ dữ liệu.",
    image: "/cybersecurity-ai-technology.jpg",
    date: "15/01/2025",
  },
  {
    id: 2,
    title: "ICS công bố đối tác chiến lược với Oracle",
    description: "Mở rộng dịch vụ cloud computing tại Việt Nam với giải pháp Oracle Cloud Infrastructure.",
    image: "/partnership-business-handshake.jpg",
    date: "10/01/2025",
  },
  {
    id: 3,
    title: "Smart Building: Tương lai của tòa nhà thông minh",
    description: "Giải pháp IoT và quản lý tòa nhà thông minh giúp tiết kiệm năng lượng và tối ưu vận hành.",
    image: "/smart-building-technology.png",
    date: "05/01/2025",
  },
  {
    id: 4,
    title: "Vietguard ra mắt phiên bản 3.0",
    description: "Nâng cấp toàn diện với khả năng phát hiện lỗ hổng bảo mật nhanh hơn 50% so với phiên bản trước.",
    image: "/mobile-security-app.png",
    date: "28/12/2024",
  },
  {
    id: 5,
    title: "Workshop: An ninh mạng cho doanh nghiệp SME",
    description: "Sự kiện miễn phí dành cho các doanh nghiệp vừa và nhỏ muốn nâng cao bảo mật hệ thống.",
    image: "/workshop-training-technology.jpg",
    date: "20/12/2024",
  },
  {
    id: 6,
    title: "Chứng nhận ISO 27001 cho ICS",
    description: "ICS tự hào đạt chứng nhận quốc tế về quản lý an ninh thông tin ISO 27001:2022.",
    image: "/certificate-iso-quality.jpg",
    date: "15/12/2024",
  },
  {
    id: 7,
    title: "Giải pháp Zero Trust Security cho doanh nghiệp",
    description: "Mô hình bảo mật không tin tưởng giúp doanh nghiệp bảo vệ dữ liệu trong thời đại số.",
    image: "/cybersecurity-ai-technology.jpg",
    date: "12/12/2024",
  },
  {
    id: 8,
    title: "Cloud Security: Bảo vệ dữ liệu trên đám mây",
    description: "Các phương pháp và công cụ hiện đại để đảm bảo an toàn cho hệ thống cloud.",
    image: "/partnership-business-handshake.jpg",
    date: "08/12/2024",
  },
  {
    id: 9,
    title: "Threat Intelligence: Phân tích mối đe dọa an ninh mạng",
    description: "Sử dụng AI để phát hiện và phòng ngừa các cuộc tấn công mạng tinh vi.",
    image: "/smart-building-technology.png",
    date: "05/12/2024",
  },
  {
    id: 10,
    title: "Bảo mật IoT trong Smart Home và Smart Building",
    description: "Giải pháp bảo vệ các thiết bị IoT khỏi các mối đe dọa an ninh mạng.",
    image: "/mobile-security-app.png",
    date: "01/12/2024",
  },
  {
    id: 11,
    title: "Ransomware Defense: Chiến lược phòng chống mã độc tống tiền",
    description: "Hướng dẫn triển khai các biện pháp bảo vệ khỏi ransomware cho doanh nghiệp.",
    image: "/workshop-training-technology.jpg",
    date: "28/11/2024",
  },
  {
    id: 12,
    title: "Secure Coding Practices: Lập trình an toàn",
    description: "Best practices để phát triển phần mềm an toàn và tránh lỗ hổng bảo mật.",
    image: "/certificate-iso-quality.jpg",
    date: "25/11/2024",
  },
  {
    id: 13,
    title: "SIEM Solutions: Giám sát an ninh thông tin",
    description: "Triển khai hệ thống SIEM để phát hiện và phản ứng nhanh với các mối đe dọa.",
    image: "/cybersecurity-ai-technology.jpg",
    date: "20/11/2024",
  },
  {
    id: 14,
    title: "Data Privacy và GDPR Compliance",
    description: "Hướng dẫn tuân thủ các quy định về bảo vệ dữ liệu cá nhân tại Việt Nam và quốc tế.",
    image: "/partnership-business-handshake.jpg",
    date: "15/11/2024",
  },
  {
    id: 15,
    title: "Mobile Security: Bảo vệ ứng dụng di động",
    description: "Các kỹ thuật và công cụ để bảo mật ứng dụng iOS và Android.",
    image: "/smart-building-technology.png",
    date: "10/11/2024",
  },
  {
    id: 16,
    title: "Network Security Architecture",
    description: "Thiết kế kiến trúc mạng an toàn cho doanh nghiệp hiện đại.",
    image: "/mobile-security-app.png",
    date: "05/11/2024",
  },
  {
    id: 17,
    title: "Incident Response Planning",
    description: "Xây dựng kế hoạch ứng phó sự cố an ninh mạng hiệu quả.",
    image: "/workshop-training-technology.jpg",
    date: "01/11/2024",
  },
  {
    id: 18,
    title: "Security Awareness Training",
    description: "Đào tạo nhận thức an ninh mạng cho nhân viên trong tổ chức.",
    image: "/certificate-iso-quality.jpg",
    date: "28/10/2024",
  },
  {
    id: 19,
    title: "Penetration Testing: Kiểm thử xâm nhập",
    description: "Phương pháp đánh giá bảo mật hệ thống thông qua mô phỏng tấn công thực tế.",
    image: "/cybersecurity-ai-technology.jpg",
    date: "25/10/2024",
  },
  {
    id: 20,
    title: "Blockchain Security: Bảo mật công nghệ chuỗi khối",
    description: "Ứng dụng blockchain trong việc nâng cao bảo mật và minh bạch dữ liệu.",
    image: "/partnership-business-handshake.jpg",
    date: "20/10/2024",
  },
]

export function NewsSection() {
  const carouselRef = useRef<CarouselRef>(null)

  const handlePrev = () => {
    if (carouselRef.current) carouselRef.current.prev()
  }

  const handleNext = () => {
    if (carouselRef.current) carouselRef.current.next()
  }

  // Nhóm mỗi 4 bài viết thành 1 slide
  const groups = []
  for (let i = 0; i < newsArticles.length; i += 4) {
    groups.push(newsArticles.slice(i, i + 4))
  }

  return (
    <section className="py-20 lg:py-28">
      <div className="w-full px-16 lg:px-32">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-balance">ICS TIN TỨC</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Đừng bỏ lỡ bất kỳ chuyển động nào trên thế giới công nghệ – cập nhật tin tức mới nhất cùng ICS và dẫn đầu
            mọi xu hướng
          </p>
        </div>

        <div className="relative flex items-center gap-4">
          <button
            onClick={handlePrev}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors flex items-center justify-center shadow-md z-10"
            aria-label="Previous news"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="flex-1 overflow-hidden">
            <Carousel
              ref={carouselRef}
              dots={false}
              effect="scrollx"
              autoplay
              autoplaySpeed={5000}
              infinite
            >
              {groups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {group.map((article) => (
                      <Card
                        key={article.id}
                        className="group relative hover:z-10 hover:scale-105 hover:shadow-2xl transition-transform duration-300 overflow-hidden bg-background border-border shadow-lg rounded-lg p-0"
                      >
                        <div className="relative h-64 overflow-hidden rounded-t-lg">
                          <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            className="object-cover transition-transform duration-500"
                          />
                          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-medium">
                            {article.date}
                          </div>
                        </div>
                        <div className="pt-6 pb-6 px-6">
                          <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors line-clamp-2 min-h-[4rem] font-bold">
                            <Link href="#">{article.id} - {article.title}</Link>
                          </CardTitle>
                          <CardDescription className="text-base leading-relaxed line-clamp-3 mb-4">
                            {article.description}
                          </CardDescription>
                          <Link
                            href="#"
                            className="text-primary font-medium hover:underline inline-flex items-center gap-1"
                          >
                            Tìm hiểu thêm
                            <span className="text-lg">›</span>
                          </Link>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </Carousel>
          </div>

          <button
            onClick={handleNext}
            className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center justify-center shadow-md z-10"
            aria-label="Next news"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="flex justify-center mt-12">
          <Button asChild className="rounded-full px-15 py-8 text-lg font-semibold bg-[#268aff] text-white hover:bg-[#1677ff] transition-colors shadow-md">
            <Link href="/tin-tuc">Xem thêm tin tức</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
