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
import { Handshake, Star, Award, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { useState } from "react"
import { useTranslation } from 'react-i18next'

export default function PartnerPage() {
  const { t } = useTranslation()
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const technologyPartners = [
    {
      name: "Gurucul",
      description: t('partners.guruculDesc'),
      logo: "/doitac/Gurucul.jpg",
    },
    {
      name: "HyperG & Oracle",
      description: t('partners.hypergOracleDesc'),
      logo: "/doitac/Oracle.jpg",
    },
    {
      name: "CyStack",
      description: t('partners.cystackDesc'),
      logo: "/doitac/CyStack.png",
    },
    {
      name: "VieSecurity",
      description: t('partners.viesecurityDesc'),
      logo: "/doitac/VieSecurity.jpg",
    },
    {
      name: "Loca AI",
      description: t('partners.locaAiDesc'),
      logo: "/doitac/Loca%20AI.jfif",
    },
    {
      name: "IRTech",
      description: t('partners.irtechDesc'),
      logo: "/doitac/IRTech.png",
    },
  ]

  const businessPartners = [
    {
      name: "BlueNet",
      description: t('partners.bluenetDesc'),
      logo: "/doitac/BlueNet.jpg",
    },
    {
      name: "BitCare",
      description: t('partners.bitcareDesc'),
      logo: "/doitac/BitCare.jpg",
    },
    {
      name: "BigBen",
      description: t('partners.bigbenDesc'),
      logo: "/doitac/BigBen.png",
    },
    {
      name: "TLU (Đại học Thủy Lợi)",
      description: t('partners.tluDesc'),
      logo: "/doitac/TLU (Đại học Thủy Lợi).png",
    },
    {
      name: "CTCP Học viện Công nghệ AI Việt Nam",
      description: t('partners.aiAcademyDesc'),
      logo: "/doitac/AI UNI.png",
    },
    {
      name: "Cathay",
      description: t('partners.cathayDesc'),
      logo: "/doitac/Cathay.png",
    },
  ]

  const testimonials = [
    {
      company: "Tập đoàn FPT",
      person: "Nguyễn Văn A - CTO",
      content: "ICS đã giúp chúng tôi nâng cao đáng kể khả năng bảo mật hệ thống. Đội ngũ chuyên nghiệp, giải pháp hiệu quả và hỗ trợ tận tình.",
      rating: 5,
      logo: "/images/1.jpg"
    },
    {
      company: "Viettel Group",
      person: "Trần Thị B - CISO",
      content: "Giải pháp AI SOC của ICS đã cách mạng hóa cách chúng tôi giám sát và phản ứng với các mối đe dọa an ninh mạng. Rất ấn tượng!",
      rating: 5,
      logo: "/images/2.jpg"
    },
    {
      company: "Vingroup",
      person: "Lê Văn C - IT Director",
      content: "Hợp tác với ICS là quyết định đúng đắn. Smart Factory Security của họ hoàn toàn đáp ứng nhu cầu của chúng tôi.",
      rating: 5,
      logo: "/images/3.jpg"
    }
  ]

  const tiers = [
    {
      name: t('partners.platinum'),
      color: "from-purple-500 to-pink-500",
      benefits: [
        t('partners.benefits.support247'),
        t('partners.benefits.training'),
        t('partners.benefits.comarketing'),
        t('partners.benefits.rebate')
      ],
      icon: Star
    },
    {
      name: t('partners.gold'),
      color: "from-yellow-500 to-orange-500",
      benefits: [
        t('partners.benefits.techSupport'),
        t('partners.benefits.productTraining'),
        t('partners.benefits.marketingSupport'),
        t('partners.benefits.competitiveRebate')
      ],
      icon: Award
    }
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <>
      <Header />
      
      {/* Hero Banner */}
      <div 
        className="relative w-full h-[500px] mt-20 overflow-hidden"
      >
        <Image
          src="/bgdoitac.jpg"
          alt="Đối tác"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="container-responsive">
            <ScrollReveal direction="right">
              <Badge className="mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm border-white/30">
                <Handshake className="w-4 h-4 mr-2" />
                {t('partners.badge')}
              </Badge>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={100}>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 max-w-3xl">
                {t('partners.title')}
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={200}>
              <p className="text-xl text-white/90 max-w-2xl">
                {t('partners.subtitle')}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Partnership Tiers */}
      <Section spacing="md" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <AnimatedHeading as="h2" gradient centered className="p-3 mb-4">
              {t('partners.programTitle')}
            </AnimatedHeading>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              {t('partners.programSubtitle')}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto auto-rows-max">
            {tiers.map((tier, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <Card className={`relative overflow-hidden p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col`}>
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${tier.color}`} />
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${tier.color} flex items-center justify-center shrink-0`}>
                      <tier.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{tier.name}</h3>
                  </div>
                  <ul className="space-y-3 flex-grow">
                    {tier.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${tier.color} flex items-center justify-center shrink-0 mt-0.5`}>
                          <span className="text-white text-xs">✓</span>
                        </div>
                        <span className="text-muted-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Technology Partners Section */}
      <Section spacing="md" background="muted">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <AnimatedHeading as="h2" gradient centered className="p-3 mb-4">
              {t('partners.technologyPartners')}
            </AnimatedHeading>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              {t('partners.technologyPartnersSubtitle')}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
            {technologyPartners.map((partner, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  {/* Logo */}
                  <div className="relative h-64 bg-white flex items-center justify-center p-8 flex-shrink-0">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                      {partner.description}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Business Partners Section */}
      <Section spacing="md" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <AnimatedHeading as="h2" gradient centered className="p-3 mb-4">
              {t('partners.businessPartners')}
            </AnimatedHeading>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              {t('partners.businessPartnersSubtitle')}
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
            {businessPartners.map((partner, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  {/* Logo */}
                  <div className="relative h-64 bg-white flex items-center justify-center p-8 flex-shrink-0">
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {partner.name}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                      {partner.description}
                    </p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Testimonials Carousel */}
      <Section spacing="md" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="mb-4">
              <AnimatedHeading as="h2" gradient centered className="p-3 text-4xl lg:text-5xl py-2">
                {t('partners.testimonials')}
              </AnimatedHeading>
            </div>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-center text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              {t('partners.testimonialsSubtitle')}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={200}>
            <div className="max-w-4xl mx-auto">
              <Card className="relative p-12 overflow-hidden">
                <div className="absolute top-8 left-8 opacity-10">
                  <Quote className="w-24 h-24 text-primary" />
                </div>

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex justify-center gap-2 mb-6">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-xl text-center mb-8 leading-relaxed italic">
                    "{testimonials[currentTestimonial].content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
                      <img 
                        src={testimonials[currentTestimonial].logo} 
                        alt={testimonials[currentTestimonial].company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-bold text-lg">{testimonials[currentTestimonial].company}</div>
                      <div className="text-muted-foreground">{testimonials[currentTestimonial].person}</div>
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-center gap-4 mt-8">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prevTestimonial}
                      className="rounded-full"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <div className="flex items-center gap-2">
                      {testimonials.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentTestimonial(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentTestimonial 
                              ? 'bg-primary w-8' 
                              : 'bg-muted-foreground/30'
                          }`}
                        />
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={nextTestimonial}
                      className="rounded-full"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="md" background="gradient">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <Card className="relative overflow-hidden bg-gradient-to-br from-primary via-accent to-secondary p-12 lg:p-20 text-center border-none">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-300" />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                  <Handshake className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  {t('partners.becomePartner')}
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  {t('partners.becomePartnerDesc')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="text-lg px-8 bg-white text-primary hover:bg-white/90 font-semibold">
                    {t('partners.registerPartner')}
                  </Button>
                  <Button size="lg" className="text-lg px-8 bg-white/20 text-white border-2 border-white hover:bg-white/30 font-semibold backdrop-blur-sm">
                    {t('partners.downloadDocs')}
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
