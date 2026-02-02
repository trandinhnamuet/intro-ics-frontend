'use client'

import { useTranslation } from "react-i18next"
import Image from "next/image"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollReveal } from "@/components/ui/scroll-reveal"
import { AnimatedHeading } from "@/components/ui/animated-heading"
import { Section } from "@/components/ui/section"
import { Shield, Target, Zap, Users, Award, TrendingUp, Play, Calendar, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function GioiThieuPage() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)

  const timeline = [
    { year: "3/2020", title: "Thành lập công ty", description: "ICS được thành lập với tầm nhìn cung cấp giải pháp an ninh mạng hàng đầu" },
    { year: "9/2021", title: "Ra mắt nền tảng đào tạo", description: "Khởi động nền tảng đào tạo an ninh mạng chuyên nghiệp" },
    { year: "7/2022", title: "Tham gia các dự án công nghệ y tế", description: "Mở rộng lĩnh vực hoạt động sang công nghệ healthcare" },
    { year: "6/2023", title: "Mở rộng trụ sở tại Hà Nội", description: "Khai trương văn phòng đại diện tại thủ đô Hà Nội" },
    { year: "2/2024", title: "Hợp tác đối tác quốc tế", description: "Liên kết với các đối tác toàn cầu: HyperG, Oracle, Gamania" },
    { year: "3/2024", title: "Ra mắt Vietguard - Mobile App Security", description: "Giới thiệu sản phẩm Vietguard - Mobile App Security - giải pháp bảo vệ tài sản số" },
    { year: "7/2024", title: "Ra mắt Smartdashboard", description: "Công bố sản phẩm Smartdashboard - nền tảng quản lý tập trung" },
    { year: "10/2025", title: "Ra mắt AI SOC", description: "Khởi động nền tảng AI SOC - trung tâm giám sát an ninh thông minh" },
  ]

  const team = [
    { name: "TS. Võ Trung Âu", role: "CEO", image: "/anhau.jpg" },
    { name: "Đỗ Thanh Toàn", role: "COO", image: "/anhtoan.jpg" },
    { name: "Ths. Vũ Tam Hanh", role: "CTO", image: "/anhhanh.jpg" },
    { name: "Ths. Đặng Lê Trung", role: "CMO", image: "/anhtrung.jpg" },
    { name: "Ths. Vũ Thị Hải Yến", role: "CHRO", image: "/chiyen.jpeg" },
    { name: "Nguyễn Đức Dương", role: "CLO", image: "/duong.jpg" },
  ]

  const visibleTeam = team.slice(currentIndex, currentIndex + 4)
  const canGoPrev = currentIndex > 0
  const canGoNext = currentIndex + 4 < team.length

  const handlePrev = () => {
    if (canGoPrev) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (canGoNext) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const values = [
    { icon: Shield, titleKey: "about.values.security.title", descriptionKey: "about.values.security.description" },
    { icon: Target, titleKey: "about.values.accuracy.title", descriptionKey: "about.values.accuracy.description" },
    { icon: Zap, titleKey: "about.values.speed.title", descriptionKey: "about.values.speed.description" },
    { icon: Users, titleKey: "about.values.team.title", descriptionKey: "about.values.team.description" },
    { icon: Award, titleKey: "about.values.quality.title", descriptionKey: "about.values.quality.description" },
    { icon: TrendingUp, titleKey: "about.values.innovation.title", descriptionKey: "about.values.innovation.description" },
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
            
            <ScrollReveal direction="right" delay={100}>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 max-w-3xl">
                {t('about.hero.title')}
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <p className="text-xl text-white/90 max-w-2xl mb-8">
                {t('about.hero.subtitle')}
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={300}>
              <Link href="/lien-he">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  {t('about.cta.schedule')}
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <Section spacing="sm" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <AnimatedHeading 
              as="h2" 
              gradient 
              centered 
              className="p-3 mb-4"
            >
              {t('about.discoverICS')}
            </AnimatedHeading>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              {t('about.discoverSubtitle')}
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
                {t('about.videoNotSupported')}
              </video>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* Company Description */}
      <Section spacing="sm" background="muted">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6 text-lg leading-relaxed">
                <h2 className="text-4xl font-bold mb-6">
                  {t('about.company.title')}
                </h2>
                <p>
                  {t('about.company.description1')}
                </p>
                <p>
                  {t('about.company.description2')}
                </p>
                <div className="grid grid-cols-2 gap-4 pt-6 auto-rows-max">
                  <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 h-full">
                    <div className="text-4xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">{t('about.stats.clients')}</div>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20 h-full">
                    <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">{t('about.stats.support')}</div>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 h-full">
                    <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">{t('about.stats.uptime')}</div>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20 h-full">
                    <div className="text-4xl font-bold text-accent mb-2">4+</div>
                    <div className="text-sm text-muted-foreground">{t('about.stats.years')}</div>
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
                  <h3 className="text-2xl font-bold mb-2">{t('about.team.title')}</h3>
                  <p className="text-white/90">
                    {t('about.team.description')}
                  </p>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section spacing="sm" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <AnimatedHeading as="h2" gradient centered className="p-3 mb-4">
              {t('about.values.heading')}
            </AnimatedHeading>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
            {values.map((value, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shrink-0">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t(value.titleKey)}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">{t(value.descriptionKey)}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section spacing="sm" background="muted">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <AnimatedHeading as="h2" gradient centered className="p-3 mb-4">
              {t('about.timeline.heading')}
            </AnimatedHeading>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-center text-muted-foreground text-lg mb-16 max-w-3xl mx-auto">
              {t('about.timeline.subtitle')}
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
      <Section spacing="sm" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <AnimatedHeading as="h2" gradient centered className="p-3 mb-4">
              {t('about.leadership.heading')}
            </AnimatedHeading>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              {t('about.leadership.subtitle')}
            </p>
          </ScrollReveal>
          
          <div className="relative">
            {/* Navigation Buttons */}
            <button
              onClick={handlePrev}
              disabled={!canGoPrev}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-4 lg:-translate-x-12 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center transition-all duration-300 ${
                canGoPrev 
                  ? 'hover:bg-primary hover:text-white cursor-pointer' 
                  : 'opacity-30 cursor-not-allowed'
              }`}
              aria-label="Previous team members"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              disabled={!canGoNext}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-4 lg:translate-x-12 w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center transition-all duration-300 ${
                canGoNext 
                  ? 'hover:bg-primary hover:text-white cursor-pointer' 
                  : 'opacity-30 cursor-not-allowed'
              }`}
              aria-label="Next team members"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Team Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 auto-rows-max transition-all duration-500">
              {visibleTeam.map((member, index) => (
                <ScrollReveal key={`${currentIndex}-${index}`} direction="up" delay={index * 100}>
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col">
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

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: team.length - 3 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index 
                      ? 'bg-primary w-8' 
                      : 'bg-gray-300 dark:bg-gray-600 hover:bg-primary/50'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Solutions Preview */}
      <Section spacing="sm" background="gradient">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <AnimatedHeading as="h2" centered className="p-3 mb-4 text-white">
              {t('about.solutions.heading')}
            </AnimatedHeading>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-center text-white/90 text-lg mb-12 max-w-3xl mx-auto">
              {t('about.solutions.subtitle')}
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-max">
            {/* VietGuard */}
            <ScrollReveal direction="up" delay={0}>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col">
                <div className="relative h-48 bg-white flex items-center justify-center">
                  <Image
                    src="/images/1.jpg"
                    alt="VietGuard"
                    fill
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4">{t('about.solutions.vietguard.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {t('about.solutions.vietguard.description')}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white mt-auto">
                    {t('common.learnMore')}
                  </Button>
                </div>
              </Card>
            </ScrollReveal>

            {/* ESG */}
            <ScrollReveal direction="up" delay={100}>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col">
                <div className="relative h-48 bg-white flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/2.jpg"
                    alt="ESG"
                    fill
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4">{t('about.solutions.esg.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {t('about.solutions.esg.description')}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white mt-auto">
                    {t('common.learnMore')}
                  </Button>
                </div>
              </Card>
            </ScrollReveal>

            {/* IoT */}
            <ScrollReveal direction="up" delay={200}>
              <Card className="overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group h-full flex flex-col">
                <div className="relative h-48 bg-white flex items-center justify-center flex-shrink-0">
                  <Image
                    src="/images/3.jpg"
                    alt="IoT Security"
                    fill
                    className="object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold mb-4">{t('about.solutions.iot.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                    {t('about.solutions.iot.description')}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white mt-auto">
                    {t('common.learnMore')}
                  </Button>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="sm" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <Card className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary p-12 lg:p-20 text-center">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-300" />
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  {t('about.cta.heading')}
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  {t('about.cta.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/lien-he">
                    <Button size="lg" className="text-lg px-8 bg-white text-primary hover:bg-white/90 font-semibold">
                      {t('about.cta.schedule')}
                    </Button>
                  </Link>
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
