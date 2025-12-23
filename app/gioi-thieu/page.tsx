'use client'

import { useTranslation } from "react-i18next"
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
  const { t } = useTranslation()

  const timeline = [
    { year: "2018", titleKey: "about.timeline.2018.title", descriptionKey: "about.timeline.2018.description" },
    { year: "2019", titleKey: "about.timeline.2019.title", descriptionKey: "about.timeline.2019.description" },
    { year: "2020", titleKey: "about.timeline.2020.title", descriptionKey: "about.timeline.2020.description" },
    { year: "2021", titleKey: "about.timeline.2021.title", descriptionKey: "about.timeline.2021.description" },
    { year: "2022", titleKey: "about.timeline.2022.title", descriptionKey: "about.timeline.2022.description" },
    { year: "2023", titleKey: "about.timeline.2023.title", descriptionKey: "about.timeline.2023.description" },
  ]

  const team = [
    { name: "Nguyễn Văn A", roleKey: "about.team.ceo", image: "/images/1.jpg" },
    { name: "Trần Thị B", roleKey: "about.team.cto", image: "/images/2.jpg" },
    { name: "Lê Văn C", roleKey: "about.team.securityLead", image: "/images/3.jpg" },
    { name: "Phạm Thị D", roleKey: "about.team.operations", image: "/images/1.jpg" },
  ]

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
            <ScrollReveal direction="right">
              <Badge className="mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm border-white/30">
                <Shield className="w-4 h-4 mr-2" />
                {t('about.badge')}
              </Badge>
            </ScrollReveal>
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
              <div className="flex gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold">
                  {t('common.learnMore')}
                </Button>
                <Button size="lg" className="bg-primary/90 text-white border-2 border-white hover:bg-primary font-semibold">
                  {t('common.contactUs')}
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
      <Section spacing="xl" background="muted">
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
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
                    <div className="text-4xl font-bold text-primary mb-2">100+</div>
                    <div className="text-sm text-muted-foreground">{t('about.stats.projects')}</div>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-to-br from-accent/10 to-secondary/10 border-accent/20">
                    <div className="text-4xl font-bold text-accent mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">{t('about.stats.clients')}</div>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-to-br from-secondary/10 to-primary/10 border-secondary/20">
                    <div className="text-4xl font-bold text-secondary mb-2">24/7</div>
                    <div className="text-sm text-muted-foreground">{t('about.stats.support')}</div>
                  </Card>
                  <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
                    <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
                    <div className="text-sm text-muted-foreground">{t('about.stats.uptime')}</div>
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
      <Section spacing="xl" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <AnimatedHeading as="h2" gradient centered className="mb-4">
              {t('about.values.heading')}
            </AnimatedHeading>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              {t('about.values.subtitle')}
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className="p-8 h-full hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{t(value.titleKey)}</h3>
                  <p className="text-muted-foreground leading-relaxed">{t(value.descriptionKey)}</p>
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
                          <h3 className="text-xl font-bold mb-2">{t(item.titleKey)}</h3>
                          <p className="text-muted-foreground">{t(item.descriptionKey)}</p>
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
              {t('about.leadership.heading')}
            </AnimatedHeading>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              {t('about.leadership.subtitle')}
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
                      <p className="text-white/90 text-sm">{t(member.roleKey)}</p>
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
              {t('about.solutions.heading')}
            </AnimatedHeading>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-center text-white/90 text-lg mb-12 max-w-3xl mx-auto">
              {t('about.solutions.subtitle')}
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
                  <h3 className="text-2xl font-bold mb-4">{t('about.solutions.vietguard.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t('about.solutions.vietguard.description')}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                    {t('common.learnMore')}
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
                  <h3 className="text-2xl font-bold mb-4">{t('about.solutions.esg.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t('about.solutions.esg.description')}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                    {t('common.learnMore')}
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
                  <h3 className="text-2xl font-bold mb-4">{t('about.solutions.iot.title')}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {t('about.solutions.iot.description')}
                  </p>
                  <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white">
                    {t('common.learnMore')}
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
                  {t('about.cta.heading')}
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  {t('about.cta.subtitle')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8 bg-white text-primary hover:bg-white/90 font-semibold">
                    {t('about.cta.schedule')}
                  </Button>
                  <Button size="lg" className="text-lg px-8 bg-white/20 text-white border-2 border-white hover:bg-white/30 font-semibold backdrop-blur-sm">
                    {t('about.cta.download')}
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
