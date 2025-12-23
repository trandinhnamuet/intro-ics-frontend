'use client'

import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedHeading } from "@/components/ui/animated-heading"
import { Section } from "@/components/ui/section"
import { Shield, Target, Zap, Users, Award, TrendingUp, Play, Calendar } from "lucide-react"

export default function GioiThieuPage() {
  const timeline = [
    { year: "2018", title: "Thành lập công ty", description: "ICS được thành lập với sứ mệnh bảo vệ không gian số Việt Nam" },
    { year: "2019", title: "Ra mắt VietGuard", description: "Giải pháp bảo mật điểm cuối tiên phong với công nghệ Zero Trust" },
    { year: "2020", title: "Mở rộng quốc tế", description: "Hợp tác với các đối tác công nghệ hàng đầu thế giới" },
    { year: "2021", title: "AI SOC Platform", description: "Triển khai hệ thống điều hành trung tâm an ninh mạng AI" },
    { year: "2022", title: "Smart Factory Security", description: "Cung cấp giải pháp bảo mật cho nhà máy thông minh 4.0" },
    { year: "2023", title: "100+ Dự án", description: "Hoàn thành hơn 100 dự án lớn trong và ngoài nước" },
  ]

  const team = [
    { name: "Nguyễn Văn A", role: "CEO & Founder", image: "/images/1.jpg" },
    { name: "Trần Thị B", role: "CTO", image: "/images/2.jpg" },
    { name: "Lê Văn C", role: "Security Lead", image: "/images/3.jpg" },
    { name: "Phạm Thị D", role: "Head of Operations", image: "/images/1.jpg" },
  ]

  const values = [
    { icon: Shield, title: "Bảo mật tối đa", description: "Cam kết bảo vệ dữ liệu khách hàng ở mức cao nhất" },
    { icon: Target, title: "Chính xác", description: "Giải pháp tùy chỉnh phù hợp với nhu cầu cụ thể" },
    { icon: Zap, title: "Nhanh chóng", description: "Triển khai và phản ứng sự cố trong thời gian thực" },
    { icon: Users, title: "Đội ngũ chuyên nghiệp", description: "Chuyên gia hàng đầu với kinh nghiệm quốc tế" },
    { icon: Award, title: "Chất lượng đảm bảo", description: "Tuân thủ các tiêu chuẩn bảo mật quốc tế" },
    { icon: TrendingUp, title: "Đổi mới liên tục", description: "Cập nhật công nghệ mới nhất trong ngành" },
  ]

  return (
    <>
      <Header />
      
      {/* Hero Banner */}
      <div className="relative w-full h-[500px] mt-20 overflow-hidden">
        <Image
          src="/images/0.jpg"
          alt="Giới thiệu chung"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-responsive">
            <ScrollReveal direction="right">
              <Badge className="mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm border-white/30">
                <Shield className="w-4 h-4 mr-2" />
                Về chúng tôi
              </Badge>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100}>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 max-w-3xl">
                Tiên phong trong An ninh Mạng
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <p className="text-xl text-white/90 max-w-2xl mb-8">
                Bảo vệ hệ sinh thái số một cách an toàn, hiệu quả và bền vững
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={300}>
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  Tìm hiểu thêm
                </Button>
                <Button size="lg" className="bg-primary/90 text-white border-2 border-white hover:bg-primary font-semibold">
                  Liên hệ ngay
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <Section spacing="xl" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <AnimatedHeading 
              as="h2" 
              gradient 
              centered 
              className="mb-4"
            >
              Khám phá ICS
            </AnimatedHeading>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              Xem video giới thiệu để hiểu rõ hơn về sứ mệnh, tầm nhìn và giải pháp của chúng tôi
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <Card className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl border-2 border-primary/20">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
              <video
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full h-full relative z-10"
              >
                <source src="/videos/Video_ICS.mp4" type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video.
              </video>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* Company Description */}
      <Section spacing="xl" background="muted">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6 text-lg leading-relaxed">
                <h2 className="text-4xl font-bold mb-6">
                  CÔNG TY CỔ PHẦN AN NINH MẠNG QUỐC TẾ – ICS
                </h2>
                <p>
                  Là đơn vị tiên phong trong lĩnh vực an ninh mạng tại Việt Nam và khu vực, 
                  chuyên cung cấp các giải pháp bảo mật toàn diện cho thời đại công nghệ số.
                </p>
                <p>
                  ICS tập trung vào các giải pháp bảo mật cho nhiều lĩnh vực trọng yếu, bao gồm: 
                  bảo vệ ứng dụng, an ninh cho nhà máy thông minh, tòa nhà thông minh và đặc biệt 
                  là hệ thống điều hành trung tâm AI SOC.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                    <div className="text-4xl font-bold text-primary mb-2">100+</div>
                    <div className="text-sm text-muted-foreground">Dự án hoàn thành</div>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20">
                    <div className="text-4xl font-bold text-accent mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Khách hàng doanh nghiệp</div>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20">
                    <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">Hỗ trợ khách hàng</div>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                    <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">Uptime đảm bảo</div>
                  </Card>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <Card className="relative h-[600px] overflow-hidden border-2 border-primary/20">
                <Image
                  src="/images/0.jpg"
                  alt="ICS Office"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-2">Đội ngũ chuyên nghiệp</h3>
                  <p className="text-white/90">
                    Hơn 50 chuyên gia an ninh mạng với kinh nghiệm quốc tế
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section spacing="xl" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <AnimatedHeading as="h2" gradient centered className="mb-4">
              Giá trị cốt lõi
            </AnimatedHeading>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              Những nguyên tắc định hướng mọi hành động của chúng tôi
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section spacing="xl" background="muted">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <AnimatedHeading as="h2" gradient centered className="mb-4">
              Hành trình phát triển
            </AnimatedHeading>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
              Những mốc son đánh dấu sự trưởng thành của ICS
            </p>
          </ScrollReveal>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-accent to-secondary hidden lg:block" />
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <ScrollReveal key={index} direction={index % 2 === 0 ? "left" : "right"} delay={index * 100}>
                  <div className={`flex items-center gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    {/* Content */}
                    <Card className="flex-1 p-8 hover:shadow-xl transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent shrink-0">
                          <Calendar className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-3xl font-bold text-primary mb-2">{item.year}</div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </Card>
                    
                    {/* Center dot */}
                    <div className="hidden lg:block w-6 h-6 rounded-full bg-white border-4 border-primary shrink-0 z-10" />
                    
                    {/* Empty space for alternate layout */}
                    <div className="hidden lg:block flex-1" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section spacing="xl" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <AnimatedHeading as="h2" gradient centered className="mb-4">
              Đội ngũ lãnh đạo
            </AnimatedHeading>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              Những chuyên gia hàng đầu dẫn dắt ICS phát triển
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                  <div className="relative h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-white/90 text-sm">{member.role}</p>
                    </div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Solutions Preview */}
      <Section spacing="xl" background="gradient">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <AnimatedHeading as="h2" centered className="mb-4 text-white">
              Giải pháp của chúng tôi
            </AnimatedHeading>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-center text-white/90 text-lg mb-12 max-w-3xl mx-auto">
              Các sản phẩm và giải pháp bảo mật hàng đầu
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* VietGuard */}
            <ScrollReveal direction="up" delay={0}>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="relative h-48 bg-white flex items-center justify-center">
                  <Image
                    src="/images/1.jpg"
                    alt="VietGuard"
                    fill
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">VietGuard</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Giải pháp bảo mật tiên tiến với công nghệ Zero Trust ngay tại điểm cuối, 
                    ngăn chặn mối đe dọa mà không cần nhận diện phần mềm độc hại.
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                    Tìm hiểu thêm
                  </Button>
                </div>
              </Card>
            </ScrollReveal>

            {/* ESG */}
            <ScrollReveal direction="up" delay={100}>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="relative h-48 bg-white flex items-center justify-center">
                  <Image
                    src="/images/2.jpg"
                    alt="ESG"
                    fill
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">ESG Solutions</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Giúp doanh nghiệp phát triển bền vững với trách nhiệm môi trường, 
                    xã hội và quản trị minh bạch trong kỷ nguyên số.
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                    Tìm hiểu thêm
                  </Button>
                </div>
              </Card>
            </ScrollReveal>

            {/* IoT */}
            <ScrollReveal direction="up" delay={200}>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                <div className="relative h-48 bg-white flex items-center justify-center">
                  <Image
                    src="/images/3.jpg"
                    alt="IoT Security"
                    fill
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">IoT Security</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Bảo mật toàn diện cho mạng lưới IoT, bảo vệ dữ liệu từ cảm biến 
                    đến cloud trong hệ sinh thái thiết bị kết nối.
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                    Tìm hiểu thêm
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="xl" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <Card className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary p-12 lg:p-20 text-center">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-300" />
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Sẵn sàng bảo vệ doanh nghiệp của bạn?
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Liên hệ với chúng tôi ngay hôm nay để được tư vấn giải pháp an ninh mạng phù hợp nhất
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8 bg-white text-primary hover:bg-white/90 font-semibold">
                    Đặt lịch tư vấn
                  </Button>
                  <Button size="lg" className="text-lg px-8 bg-white/20 text-white border-2 border-white hover:bg-white/30 font-semibold backdrop-blur-sm">
                    Tải tài liệu
                  </Button>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Section>
      
      <Footer />
    </>
  )
}
