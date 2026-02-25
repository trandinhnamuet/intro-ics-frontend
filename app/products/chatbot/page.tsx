'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { Section } from '@/components/ui/section'
import {
  MessageCircle,
  Check,
  ArrowRight,
  Star,
  Zap,
  Users,
  Clock,
  ShieldCheck,
  BarChart3,
  MessageSquare,
  Phone,
  Brain,
  TrendingUp,
  AlertCircle,
  Target,
  Gauge,
  Lock,
  Award,
  ChevronRight,
  CheckCircle,
  Expand,
  X,
} from 'lucide-react'
import { cn } from '@/lib/utils'

// Component để tự động phát video khi scroll tới
function AutoplayVideo({ src, className, alt }: { src: string; className?: string; alt: string }) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay blocked, fallback to manual play
            })
          } else {
            video.pause()
          }
        })
      },
      { threshold: 0.25 } // Phát khi 25% video hiển thị trên màn hình
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <video
      ref={videoRef}
      src={src}
      className={className}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={alt}
    />
  )
}

export default function ChatbotPage() {
  const { t } = useTranslation()
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [hoveredUseCase, setHoveredUseCase] = useState<number | null>(null)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null)
  const deploymentRef = useRef<HTMLDivElement>(null)
  const hero = t('products.chatbot.hero', { returnObjects: true }) as any
  const painPoints = t('products.chatbot.painPoints.points', { returnObjects: true }) as Array<{ title: string; description: string }>
  const features = t('products.chatbot.features.items', { returnObjects: true }) as Array<{ title: string; subtitle: string; description: string; benefits: string[] }>
  const useCasesMeta = t('products.chatbot.useCases', { returnObjects: true }) as any
  const useCases = t('products.chatbot.useCases.items', { returnObjects: true }) as Array<{ title: string; description: string; stat: string }>
  const useCaseIcons = [Heart, ShoppingBag, Stethoscope, Target]
  const useCaseColors = ['from-pink-500 to-red-500', 'from-amber-500 to-orange-500', 'from-blue-500 to-cyan-500', 'from-emerald-500 to-green-600']
  const useCasesWithMeta = (useCases || []).map((item, idx) => ({
    ...item,
    icon: useCaseIcons[idx % useCaseIcons.length],
    color: useCaseColors[idx % useCaseColors.length],
  }))
  const comparisonMeta = t('products.chatbot.comparison', { returnObjects: true }) as any
  const comparisonData = t('products.chatbot.comparison.items', { returnObjects: true }) as Array<{ feature: string; inHouse: string; vAIChat: string }>
  const deploymentMeta = t('products.chatbot.deployment', { returnObjects: true }) as any
  const deploymentSteps = t('products.chatbot.deployment.steps', { returnObjects: true }) as Array<{ number: string; title: string; description: string }>
  const faqsMeta = t('products.chatbot.faqs', { returnObjects: true }) as any
  const faqs = t('products.chatbot.faqs.items', { returnObjects: true }) as Array<{ question: string; answer: string }>
  const automation = t('products.chatbot.automation', { returnObjects: true }) as any
  const solution = t('products.chatbot.solution', { returnObjects: true }) as any
  const security = t('products.chatbot.security', { returnObjects: true }) as { badge: string; title: string; subtitle: string; items: Array<{ title: string; description: string }>; gallery: Array<{ title: string; description: string; label?: string }> }
  const cta = t('products.chatbot.cta', { returnObjects: true }) as any

  return (
    <>
      <Header />

      {/* Hero Section - Gây ấn tượng mạnh */}
      <div className="relative min-h-[900px] overflow-hidden pt-32 pb-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-500" />
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-300" />
        </div>

        <div className="relative container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <ScrollReveal direction="up">
              <div className="space-y-8">
                {/* Main Headline */}
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
                      {hero.title}
                    </span>
                  </h1>
                  <h2 className="text-3xl md:text-5xl font-bold text-foreground">
                    {hero.badge}
                  </h2>
                </div>

                {/* Detailed Description */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  {hero.description}
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 py-4">
                  <ScrollReveal direction="up" delay={100}>
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                      <Award className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-foreground/90">{hero.features?.badge1}</span>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="up" delay={150}>
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                      <Users className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-foreground/90">{hero.features?.badge2}</span>
                    </div>
                  </ScrollReveal>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <ScrollReveal direction="up" delay={200}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-cyan-500/50 hover:bg-cyan-500/10 text-foreground font-bold text-lg px-8 py-7 rounded-xl"
                      onClick={() => {
                        const featuresSection = document.getElementById('features-section');
                        if (featuresSection) {
                          featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                      }}
                    >
                      <BarChart3 className="w-5 h-5 mr-2" />
                      {hero.cta2}
                    </Button>
                  </ScrollReveal>

                  <ScrollReveal direction="up" delay={250}>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg px-8 py-7 rounded-xl shadow-xl"
                      asChild
                    >
                      <Link href="https://console.stg.vyin.chat/login?brand=vgent" target="_blank">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        {hero.cta1}
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Link>
                    </Button>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Image */}
            <ScrollReveal direction="up" delay={200}>
              <Card className="relative h-96 lg:h-[500px] overflow-hidden border-2 border-cyan-200 dark:border-cyan-800 rounded-3xl shadow-2xl">
                <Image
                  src="/chatbot/anh1.png"
                  alt={hero.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-cyan-900/10 to-transparent" />
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Section 2: Pain Points */}
      <Section background="muted" spacing="sm">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2">
                <AlertCircle className="w-4 h-4 mr-2" />
                {t('products.chatbot.painPoints.badge')}
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
                {t('products.chatbot.painPoints.title')}
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('products.chatbot.painPoints.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="grid grid-cols-1 gap-6">
              {painPoints.map((point, idx) => {
                const IconComponent = [AlertCircle, TrendingUp, ShieldCheck][idx]
                return (
                  <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                    <Card className="p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                          {IconComponent && <IconComponent className="w-6 h-6 text-white" />}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                        </div>
                      </div>
                    </Card>
                  </ScrollReveal>
                )
              })}
            </div>

            <ScrollReveal direction="up">
              <div className="relative w-full overflow-hidden rounded-2xl shadow-xl group cursor-pointer" onClick={() => setExpandedVideo('/chatbot/Video_chatbot1.mp4')}>
                <div className="relative w-full h-[400px] sm:h-[400px] lg:h-[370px]">
                  <AutoplayVideo
                  src="/chatbot/Video_chatbot1.mp4"
                  alt={t('products.chatbot.painPoints.title')}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-black/90 p-3 rounded-full">
                    <Expand className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={300}>
            <Card className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200/50 dark:border-blue-800/50">
              <div className="flex items-start gap-4">
                <Check className="w-8 h-8 text-green-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">{solution.title}</h3>
                  <p className="text-lg text-foreground/90">
                    {solution.description}
                  </p>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* Section 3: Deep Dive Solutions */}
      <Section background="gradient" spacing="sm" data-section="features" id="features-section">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                {t('products.chatbot.features.badge')}
              </Badge>
              <h2 className="text-5xl font-bold mb-6">{t('products.chatbot.features.title')}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {t('products.chatbot.features.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, idx) => {
              const Icon = [MessageSquare, Phone, Brain, BarChart3][idx]
              return (
                <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                  <Card
                    className={cn(
                      "p-8 cursor-pointer transition-all duration-500 h-full flex flex-col",
                      "hover:shadow-2xl hover:-translate-y-4 border-2",
                      hoveredFeature === idx
                        ? "border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-cyan-500/10"
                        : "border-border bg-card"
                    )}
                    onMouseEnter={() => setHoveredFeature(idx)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <Star className={cn(
                        "w-6 h-6 transition-all duration-300",
                        hoveredFeature === idx ? "fill-yellow-400 text-yellow-400 scale-125" : "text-muted-foreground"
                      )} />
                    </div>

                    <h3 className="text-2xl font-bold mb-1">{feature.title}</h3>
                    <p className="text-cyan-600 font-semibold mb-3">{feature.subtitle}</p>
                    <p className="text-muted-foreground mb-6 flex-grow">{feature.description}</p>

                    {hoveredFeature === idx && (
                      <div className="space-y-2 pt-4 border-t border-border">
                        <p className="text-sm font-semibold text-cyan-600">{t('products.chatbot.features.advancedTitle')}</p>
                        <ul className="space-y-1">
                          {feature.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm">
                              <Check className="w-4 h-4 text-green-500" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Section 3.5: Featured - Automation Technology */}
      <Section background="gradient" spacing="sm">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2 mx-auto w-fit inline-flex items-center justify-center">
                <Gauge className="w-4 h-4 mr-2" />
                {automation.badge}
              </Badge>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                {automation.title}
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                {automation.subtitle}
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Video */}
            <ScrollReveal direction="up">
              <div className="relative w-full overflow-hidden rounded-2xl shadow-xl group cursor-pointer" onClick={() => setExpandedVideo('/chatbot/Video_chatbot2.mp4')}>
                <div className="relative w-full h-[400px] sm:h-[400px] lg:h-[360px]">
                  <AutoplayVideo
                    src="/chatbot/Video_chatbot2.mp4"
                    alt={automation.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 dark:bg-black/90 p-3 rounded-full">
                    <Expand className="w-8 h-8 text-green-600 dark:text-green-400" />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Content */}
            <ScrollReveal direction="left">
              <div className="space-y-6 text-center">
                <div className="space-y-4 pt-4">
                  {(automation.items || []).map((item: any, idx: number) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                        <p className="text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Section 4: Comparison Table */}
      <Section background="default" spacing="sm">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2">
                <Gauge className="w-4 h-4 mr-2" />
                {comparisonMeta.badge}
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{comparisonMeta.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {comparisonMeta.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-6 font-bold text-lg">{comparisonMeta.featureColumn}</th>
                    <th className="text-left py-4 px-6 font-bold text-lg text-red-500">{comparisonMeta.inHouseColumn}</th>
                    <th className="text-left py-4 px-6 font-bold text-lg text-green-500">{comparisonMeta.productColumn}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={cn(
                        "border-b border-border transition-all duration-300 hover:bg-primary/5",
                        idx % 2 === 0 ? "bg-muted/30" : ""
                      )}
                    >
                      <td className="py-4 px-6 font-semibold text-foreground">{row.feature}</td>
                      <td className="py-4 px-6 text-muted-foreground">{row.inHouse}</td>
                      <td className="py-4 px-6">
                        <span className="font-semibold text-green-600 dark:text-green-400 flex items-center gap-2">
                          <Check className="w-5 h-5" />
                          {row.vAIChat}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Section 5: Use Cases */}
      <Section background="gradient" spacing="sm">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2">
                <Target className="w-4 h-4 mr-2" />
                {useCasesMeta.badge}
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{useCasesMeta.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {useCasesMeta.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {useCasesWithMeta.map((useCase, idx) => {
              const Icon = useCase.icon
              return (
                <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                  <Card
                    className={cn(
                      "group relative overflow-hidden p-8 cursor-pointer transition-all duration-500",
                      "hover:shadow-2xl hover:-translate-y-4 border-2",
                      hoveredUseCase === idx
                        ? "border-blue-500/50"
                        : "border-border"
                    )}
                    onMouseEnter={() => setHoveredUseCase(idx)}
                    onMouseLeave={() => setHoveredUseCase(null)}
                  >
                    <div className={cn(
                      "absolute inset-0 opacity-10 transition-opacity duration-300",
                      `bg-gradient-to-br ${useCase.color}`,
                      hoveredUseCase === idx ? "opacity-20" : "opacity-10"
                    )} />

                    <div className="relative z-10">
                      <div className={cn(
                        "w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300",
                        `bg-gradient-to-br ${useCase.color}`,
                        hoveredUseCase === idx ? "scale-110" : "scale-100"
                      )}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>

                      <h3 className="text-2xl font-bold mb-2">{useCase.title}</h3>
                      <p className="text-muted-foreground mb-4">{useCase.description}</p>

                      <div className={cn(
                        "inline-block px-4 py-2 rounded-full text-sm font-bold transition-all duration-300",
                        `bg-gradient-to-r ${useCase.color}`,
                        "text-white"
                      )}>
                        {useCase.stat}
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </Section>

      {/* Section 6: Security & Infrastructure */}
      <Section background="muted" spacing="sm">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2">
                <Lock className="w-4 h-4 mr-2" />
                {security.badge}
              </Badge>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{security.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {security.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
            <ScrollReveal direction="left">
              <Card className="p-8 border-2 border-green-200/50 dark:border-green-800/50 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
                <div className="space-y-6">
                  {(security.items || []).slice(0, 3).map((item, idx) => {
                    const Icon = [Award, Clock, ShieldCheck][idx]
                    return (
                      <div key={idx} className="flex items-start gap-4">
                        <Icon className="w-8 h-8 text-green-600 shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Card className="p-8 border-2 border-blue-200/50 dark:border-blue-800/50 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30">
                <div className="space-y-6">
                  {(security.items || []).slice(3).map((item, idx) => {
                    const Icon = [Cloud, Gauge, TrendingUp][idx]
                    return (
                      <div key={idx} className="flex items-start gap-4">
                        <Icon className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            </ScrollReveal>
          </div>

          {/* Video & Image Showcase */}
          <ScrollReveal direction="up" delay={200}>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {(security.gallery || []).map((item, idx) => (
                <Card
                  key={idx}
                  className="relative h-64 overflow-hidden border-2 border-blue-200/50 dark:border-blue-800/50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group"
                >
                  {idx === 0 ? (
                    <AutoplayVideo
                      src="/chatbot/Video_chatbot1.mp4"
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-contain bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20"
                    />
                  ) : idx === 1 ? (
                    <AutoplayVideo
                      src="/chatbot/Video_chatbot2.mp4"
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-contain bg-gradient-to-br from-blue-50/50 to-cyan-50/50 dark:from-blue-950/20 dark:to-cyan-950/20"
                    />
                  ) : (
                    <Image
                      src="/chatbot/thongke.png"
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    {item.label && (
                      <div className="inline-block px-2 py-1 bg-green-500 rounded text-xs font-bold mb-2">{item.label}</div>
                    )}
                    <h4 className="text-lg font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Section 7: Deployment Steps */}
      <Section background="default" spacing="sm">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                {deploymentMeta.badge}
              </Badge>
              <h2 className="text-5xl font-bold mb-6">{deploymentMeta.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {deploymentMeta.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div ref={deploymentRef} className="grid md:grid-cols-4 gap-6 mb-12">
            {deploymentSteps.map((step, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <Card className="p-8 relative hover:shadow-xl transition-all duration-500 hover:-translate-y-2 text-center">
                  {/* Step Number - Centered */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl">
                      {step.number}
                    </div>
                  </div>

                  {/* Connection Line */}
                  {idx < deploymentSteps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-full w-6 h-1 bg-gradient-to-r from-cyan-500 to-transparent" />
                  )}

                  {/* Horizontal Text */}
                  <div>
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={500}>
            <Card className="p-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/30 text-center">
              <h3 className="text-2xl font-bold mb-4">{cta.heading}</h3>
              <p className="text-lg text-muted-foreground mb-6">
                {cta.description}
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold"
                asChild
              >
                <Link href="/lien-he">
                  {cta.ctaButton}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* Section 8: FAQs */}
      <Section background="muted" spacing="sm">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2">
                <MessageCircle className="w-4 h-4 mr-2" />
                {faqsMeta.badge}
              </Badge>
              <h2 className="text-5xl font-bold mb-6">{faqsMeta.title}</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                {faqsMeta.subtitle}
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 50}>
                <Card
                  className={cn(
                    "cursor-pointer transition-all duration-300 overflow-hidden",
                    "hover:shadow-lg hover:border-cyan-500/50",
                    expandedFaq === idx ? "border-cyan-500/50 bg-cyan-500/5" : "border-border"
                  )}
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                >
                  <div className="p-6 flex items-center justify-between">
                    <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                    <ArrowRight
                      className={cn(
                        "w-5 h-5 text-cyan-500 shrink-0 transition-transform duration-300",
                        expandedFaq === idx ? "rotate-90" : ""
                      )}
                    />
                  </div>

                  {expandedFaq === idx && (
                    <div className="px-6 pb-6 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={300}>
            <div className="text-center mt-16">
              <p className="text-lg text-muted-foreground mb-6">
                {faqsMeta.moreQuestion}
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-500/50 hover:bg-cyan-500/10"
              >
                {faqsMeta.contactCta}
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section background="gradient" spacing="sm">
        <div className="container-responsive text-center">
          <ScrollReveal direction="up">
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              {cta.savings}
              <br />
              {cta.savingsDesc}
            </h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              {cta.benefits}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg px-8 py-7"
                asChild
              >
                <Link href="https://console.stg.vyin.chat/login?brand=vgent" target="_blank">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {cta.tryButton}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-500/50 hover:bg-cyan-500/10 font-bold text-lg px-8 py-7"
                asChild
              >
                <Link href="/lien-he">
                  <Phone className="w-5 h-5 mr-2" />
                  {cta.demoButton}
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Footer />

      {/* Video Fullscreen Modal */}
      {expandedVideo && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setExpandedVideo(null)}
        >
          <button
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            onClick={() => setExpandedVideo(null)}
          >
            <X className="w-8 h-8 text-white" />
          </button>
          <div className="relative w-full max-w-6xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <video
              src={expandedVideo}
              controls
              autoPlay
              loop
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  )
}

// Icons that are not in lucide-react but used in the component
function Heart(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function ShoppingBag(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  )
}

function Stethoscope(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 0 0 .3.3" />
      <path d="M12 12c4.418 0 8-1.79 8-4" />
    </svg>
  )
}

function Cloud(props: any) {
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
