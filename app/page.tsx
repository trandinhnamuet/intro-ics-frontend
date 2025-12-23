'use client'

import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { ProductsSection } from "@/components/products-section"
import { NewsSection } from "@/components/news-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedHeading } from "@/components/ui/animated-heading"
import { Section } from "@/components/ui/section"
import { Shield, Zap, Award, TrendingUp, ArrowRight, CheckCircle2, Star, Users, Building2, Factory, Sparkles } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
  const featuredStats = [
    { icon: Users, value: "100+", label: "Dự án hoàn thành", color: "from-blue-500 to-cyan-500" },
    { icon: Building2, value: "50+", label: "Khách hàng doanh nghiệp", color: "from-purple-500 to-pink-500" },
    { icon: Shield, value: "24/7", label: "Hỗ trợ an ninh mạng", color: "from-orange-500 to-red-500" },
    { icon: Award, value: "99.9%", label: "Uptime đảm bảo", color: "from-green-500 to-emerald-500" },
  ]

  const featuredPartners = [
    {
      name: "HyperG",
      logo: "https://icss.com.vn/wp-content/uploads/2025/06/z6603220865281_a8751c9cd03f48ec5ef9b82d700917d8.jpg",
      description: "Giải pháp an ninh mạng ứng dụng AI và Cloud"
    },
    {
      name: "Oracle",
      logo: "https://icss.com.vn/wp-content/uploads/2025/08/Webo.OracleProfile-696x696-1.png",
      description: "Hệ quản trị cơ sở dữ liệu hàng đầu"
    },
    {
      name: "Gamania",
      logo: "https://icss.com.vn/wp-content/uploads/2025/06/z6603219309871_c0cf6fdc0c2ede77ee4a3920f5b54e4f.jpg",
      description: "Giải trí số và cloud security"
    },
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Công nghệ tiên phong",
      description: "Áp dụng AI, Machine Learning và Zero Trust Architecture trong mọi giải pháp bảo mật"
    },
    {
      icon: Zap,
      title: "Phản ứng nhanh",
      description: "Giám sát và xử lý sự cố an ninh mạng trong thời gian thực với AI SOC"
    },
    {
      icon: Award,
      title: "Chứng nhận quốc tế",
      description: "Tuân thủ các tiêu chuẩn bảo mật ISO 27001, SOC 2, và các chuẩn mực quốc tế"
    },
    {
      icon: TrendingUp,
      title: "Tăng trưởng bền vững",
      description: "Giải pháp mở rộng linh hoạt theo quy mô và nhu cầu doanh nghiệp"
    },
  ]

  const featuredSolutions = [
    {
      icon: Shield,
      title: "CSA - Endpoint Security",
      description: "Bảo vệ máy đọc 4-trong-1, phát hiện virus, ransomware, trojan với AI",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: Factory,
      title: "Smart Factory Security",
      description: "Bảo mật nhà máy thông minh với giám sát OT/IT tích hợp",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&auto=format&fit=crop",
      gradient: "from-purple-600 to-pink-500"
    },
    {
      icon: Building2,
      title: "Smart Building Security",
      description: "An ninh mạng cho tòa nhà thông minh, IoT và hệ thống BMS",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop",
      gradient: "from-orange-600 to-red-500"
    },
  ]

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />

        {/* Featured Stats Section */}
        <Section spacing="lg" background="default">
          <div className="container-responsive">
            <ScrollReveal direction="up">
              <div className="text-center mb-8">
                <Badge className="mb-4 px-4 py-2 bg-primary/10 text-primary border-primary/20">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Thành tựu nổi bật
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                  ICS trong <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">con số</span>
                </h2>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
              {featuredStats.map((stat, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                  <Card className="relative overflow-visible group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/30">
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                    <div className="p-6 lg:p-8 pr-6 lg:pr-8 text-center relative z-10 overflow-visible">
                      <div className={`w-12 h-12 lg:w-16 lg:h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                        <stat.icon className="w-6 h-6 lg:w-8 lg:h-8 text-white" />
                      </div>
                      <div className={`inline-block pr-2 lg:pr-4 text-3xl lg:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent relative z-20`}>
                        {stat.value}
                      </div>
                      <div className="text-sm lg:text-base font-medium text-foreground/80">{stat.label}</div>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Section>

        <ProductsSection />

        {/* Featured Solutions Section */}
        <Section spacing="xl" background="muted">
          <div className="container-responsive">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <Badge className="mb-4 px-4 py-2 bg-primary text-white border-none shadow-lg">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Giải pháp nổi bật
                </Badge>
                <AnimatedHeading as="h2" gradient centered className="mb-4">
                  Giải pháp bảo mật toàn diện
                </AnimatedHeading>
                <p className="text-foreground/70 text-lg max-w-3xl mx-auto font-medium">
                  Từ endpoint đến cloud, từ nhà máy đến tòa nhà - chúng tôi bảo vệ mọi góc độ
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredSolutions.map((solution, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/30">
                    <div className="relative h-48 overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${solution.gradient}`} />
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                        <solution.icon className="w-16 h-16 mb-3 drop-shadow-lg" />
                        <h3 className="text-lg font-bold text-center">{solution.title}</h3>
                      </div>
                    </div>
                    <div className="p-6 bg-background">
                      <p className="text-foreground/70 mb-4 leading-relaxed">
                        {solution.description}
                      </p>
                      <Button variant="ghost" className="group/btn p-0 h-auto font-semibold text-primary hover:text-primary">
                        Tìm hiểu thêm
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Section>

        {/* Why Choose Us Section */}
        <Section spacing="xl" background="default">
          <div className="container-responsive">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <Badge className="mb-4 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800">
                  <Star className="w-4 h-4 mr-2" />
                  Vì sao chọn ICS
                </Badge>
                <AnimatedHeading as="h2" gradient centered className="mb-4">
                  Đối tác tin cậy cho an ninh mạng
                </AnimatedHeading>
                <p className="text-foreground/70 text-lg max-w-3xl mx-auto font-medium">
                  Chúng tôi không chỉ cung cấp giải pháp, mà đồng hành cùng bạn xây dựng hệ sinh thái số an toàn
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {whyChooseUs.map((item, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                  <Card className="group p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/50 bg-gradient-to-br from-background to-muted/30">
                    <div className="flex gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                        <item.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-foreground/70 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Section>

        {/* Featured Partners Section */}
        <Section spacing="xl" background="gradient">
          <div className="container-responsive">
            <ScrollReveal direction="up">
              <div className="text-center mb-12">
                <Badge className="mb-4 px-4 py-2 bg-gradient-to-r from-primary/20 to-accent/20 dark:bg-white/20 backdrop-blur-sm border-primary/30 dark:border-white/30 text-primary dark:text-white">
                  <Award className="w-4 h-4 mr-2" />
                  Đối tác hàng đầu
                </Badge>
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
                  Hợp tác với các tập đoàn công nghệ
                </h2>
                <p className="text-lg text-gray-700 dark:text-white/90 max-w-3xl mx-auto font-medium">
                  Đồng hành cùng những thương hiệu hàng đầu thế giới
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredPartners.map((partner, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                  <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border-2 hover:border-white/50">
                    <div className="relative h-48 bg-white flex items-center justify-center p-8">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6 bg-white">
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary transition-colors">
                        {partner.name}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {partner.description}
                      </p>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={300}>
              <div className="text-center mt-12">
                <Link href="/doi-tac">
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold shadow-xl hover:shadow-2xl transition-all">
                    Xem tất cả đối tác
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Section>

        <NewsSection />
        
        {/* CTA Section */}
        <Section spacing="xl" background="default">
          <div className="container-responsive">
            <ScrollReveal direction="up">
              <Card className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary p-12 lg:p-20 text-center border-none">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
                  <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-300" />
                </div>
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                    Bảo vệ doanh nghiệp của bạn ngay hôm nay
                  </h2>
                  <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                    Liên hệ với chúng tôi để được tư vấn miễn phí về giải pháp an ninh mạng phù hợp nhất
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/lien-he">
                      <Button size="lg" className="text-lg px-8 bg-white text-primary hover:bg-white/90 font-semibold">
                        Liên hệ ngay
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                    <Link href="/gioi-thieu">
                      <Button size="lg" className="text-lg px-8 bg-white/20 text-white border-2 border-white hover:bg-white/30 font-semibold backdrop-blur-sm">
                        Tìm hiểu thêm về ICS
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
