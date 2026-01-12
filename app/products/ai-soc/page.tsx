'use client'

import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import Image from 'next/image'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { AnimatedHeading } from '@/components/ui/animated-heading'
import { Section } from '@/components/ui/section'
import {
  Shield,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Brain,
  Zap,
  Database,
  Search,
  Map,
  FileText,
  DollarSign,
  Users,
  Target,
  TrendingUp,
  Lock,
  Lightbulb,
  ChevronRight,
  ArrowUpRight,
  Rocket,
  Eye,
  Activity,
  Award,
  Sparkles,
  Cpu,
  Network,
  GitBranch,
  Workflow,
  Bot,
  Gauge
} from 'lucide-react'

interface OrbConfig {
  id: number
  top: string
  left: string
  duration: number
  delay: number
}

export default function AiSocPage() {
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState(0)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isClient, setIsClient] = useState(false)
  const [orbs, setOrbs] = useState<OrbConfig[]>([])

  useEffect(() => {
    setIsClient(true)
    
    // Generate orb positions only on client
    const generatedOrbs = [...Array(6)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: 8 + Math.random() * 4,
      delay: i * 0.5
    }))
    setOrbs(generatedOrbs)
    
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const painPointsData = t('products.aiSoc.painPoints.points', { returnObjects: true }) as Array<{title: string; items: string[]}>
  const solutionData = t('products.aiSoc.solution.pillars', { returnObjects: true }) as Array<{title: string; items: string[]}>
  const processData = t('products.aiSoc.process.steps', { returnObjects: true }) as Array<{title: string; description: string}>

  const challenges = [
    {
      icon: AlertTriangle,
      title: painPointsData?.[0]?.title || t('products.aiSoc.painPoints.points.0.title'),
      description: painPointsData?.[0]?.items?.[0] || t('products.aiSoc.painPoints.points.0.items.0'),
      stat: "12,300+",
      statLabel: painPointsData?.[0]?.items?.[1] || t('products.aiSoc.painPoints.points.0.items.1')
    },
    {
      icon: Target,
      title: painPointsData?.[1]?.title || t('products.aiSoc.painPoints.points.1.title'),
      description: painPointsData?.[1]?.items?.[0] || t('products.aiSoc.painPoints.points.1.items.0'),
      stat: "83+",
      statLabel: painPointsData?.[1]?.items?.[1] || t('products.aiSoc.painPoints.points.1.items.1')
    },
    {
      icon: Users,
      title: painPointsData?.[2]?.title || t('products.aiSoc.painPoints.points.2.title'),
      description: painPointsData?.[2]?.items?.[0] || t('products.aiSoc.painPoints.points.2.items.0'),
      stat: "3.5M",
      statLabel: painPointsData?.[2]?.items?.[1] || t('products.aiSoc.painPoints.points.2.items.1')
    },
    {
      icon: Activity,
      title: painPointsData?.[3]?.title || t('products.aiSoc.painPoints.points.3.title'),
      description: painPointsData?.[3]?.items?.[0] || t('products.aiSoc.painPoints.points.3.items.0'),
      stat: "277",
      statLabel: painPointsData?.[3]?.items?.[1] || t('products.aiSoc.painPoints.points.3.items.1')
    }
  ]

  const coreComponents = [
    {
      title: solutionData?.[0]?.title || t('products.aiSoc.solution.pillars.0.title'),
      icon: Database,
      description: solutionData?.[0]?.items?.[0] || t('products.aiSoc.solution.pillars.0.items.0'),
      features: [
        solutionData?.[0]?.items?.[1] || t('products.aiSoc.solution.pillars.0.items.1'),
        solutionData?.[0]?.items?.[2] || t('products.aiSoc.solution.pillars.0.items.2')
      ],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: solutionData?.[1]?.title || t('products.aiSoc.solution.pillars.1.title'),
      icon: Brain,
      description: solutionData?.[1]?.items?.[0] || t('products.aiSoc.solution.pillars.1.items.0'),
      features: [
        solutionData?.[1]?.items?.[1] || t('products.aiSoc.solution.pillars.1.items.1'),
        solutionData?.[1]?.items?.[2] || t('products.aiSoc.solution.pillars.1.items.2')
      ],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: solutionData?.[2]?.title || t('products.aiSoc.solution.pillars.2.title'),
      icon: Zap,
      description: solutionData?.[2]?.items?.[0] || t('products.aiSoc.solution.pillars.2.items.0'),
      features: [
        solutionData?.[2]?.items?.[1] || t('products.aiSoc.solution.pillars.2.items.1')
      ],
      gradient: "from-emerald-500 to-teal-500"
    }
  ]

  const processSteps = [
    {
      number: "01",
      title: processData?.[0]?.title || t('products.aiSoc.process.steps.0.title'),
      description: processData?.[0]?.description || t('products.aiSoc.process.steps.0.description'),
      icon: Database,
      color: "blue"
    },
    {
      number: "02",
      title: processData?.[1]?.title || t('products.aiSoc.process.steps.1.title'),
      description: processData?.[1]?.description || t('products.aiSoc.process.steps.1.description'),
      icon: Brain,
      color: "purple"
    },
    {
      number: "03",
      title: processData?.[2]?.title || t('products.aiSoc.process.steps.2.title'),
      description: processData?.[2]?.description || t('products.aiSoc.process.steps.2.description'),
      icon: Search,
      color: "emerald"
    },
    {
      number: "04",
      title: processData?.[3]?.title || t('products.aiSoc.process.steps.3.title'),
      description: processData?.[3]?.description || t('products.aiSoc.process.steps.3.description'),
      icon: Zap,
      color: "orange"
    }
  ]

  const roiMetrics = [
    { metric: "90%", label: t('products.aiSoc.whyIcs.points.0.title'), icon: TrendingUp },
    { metric: "70%", label: t('products.aiSoc.whyIcs.points.1.title'), icon: Target },
    { metric: "95%", label: "Faster incident response", icon: Zap },
    { metric: "$2.4M", label: t('products.aiSoc.whyIcs.points.2.description'), icon: DollarSign }
  ]



  return (
    <>
      <Header />

      {/* Scroll Progress Bar */}
      {isClient && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 z-50 origin-left" style={{ transform: `scaleX(${scrollProgress / 100})` }} />
      )}

      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen overflow-hidden pt-32 pb-20">
        {/* Animated Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        </div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse animation-delay-4000" />
        </div>

        {/* Floating Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {isClient && orbs.map((orb) => (
            <div
              key={orb.id}
              className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 backdrop-blur-sm"
              style={{
                top: orb.top,
                left: orb.left,
                animationName: 'float',
                animationDuration: `${orb.duration}s`,
                animationTimingFunction: 'ease-in-out',
                animationIterationCount: 'infinite',
                animationDelay: `${orb.delay}s`
              } as React.CSSProperties}
            />
          ))}
        </div>

        <div className="relative container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <ScrollReveal direction="left" duration={0.8}>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-tight">
                    AI SOC
                  </h1>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white/90">
                    {t('products.aiSoc.hero.titleMain')}
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                      {t('products.aiSoc.hero.titleSpan')}
                    </span>
                  </h2>
                  <p className="text-xl text-white/70 max-w-xl leading-relaxed pt-4">
                    {t('products.aiSoc.hero.description')}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "70%", label: t('products.aiSoc.hero.points.0') },
                    { value: "90%", label: t('products.aiSoc.hero.points.1') },
                    { value: "95%", label: t('products.aiSoc.hero.points.2') },
                    { value: "24/7", label: "AI Monitoring" }
                  ].map((stat, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-colors">
                      <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                        {stat.value}
                      </div>
                      <div className="text-sm text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Link href="/lien-he">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg h-14 group shadow-lg shadow-blue-500/50">
                      {t('products.aiSoc.hero.cta1')}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 font-bold text-lg h-14">
                    {t('products.aiSoc.hero.cta2')}
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Visual - Hero Image */}
            <ScrollReveal direction="right" duration={0.8} delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />
                <Card className="relative overflow-hidden border-2 border-white/10 rounded-2xl shadow-2xl backdrop-blur-sm bg-white/5">
                  <Image
                    src="/AI SOC/anh1.jpg"
                    alt="AI SOC Dashboard"
                    width={700}
                    height={500}
                    className="w-full h-auto rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  {/* Floating Stats Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 grid grid-cols-3 gap-3">
                    {[
                      { icon: Shield, label: "Protected", value: "5B+ Devices" },
                      { icon: Zap, label: "Detection", value: "< 1 sec" },
                      { icon: Bot, label: "AI Models", value: "4000+" }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-lg p-3">
                        <item.icon className="w-5 h-5 text-cyan-400 mb-1" />
                        <div className="text-xs text-white/60">{item.label}</div>
                        <div className="text-sm font-bold text-white">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Why AI SOC Section */}
      <Section spacing="md" background="default">
        <div className="container-responsive space-y-16">
          <ScrollReveal direction="up">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300">
                <AlertTriangle className="w-4 h-4" />
                {t('products.aiSoc.painPoints.badge')}
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="text-4xl p-1 lg:text-4xl">
                {t('products.aiSoc.painPoints.title')}
              </AnimatedHeading>
              <p className="text-xl text-muted-foreground">
                {t('products.aiSoc.painPoints.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((challenge, idx) => {
              const IconComponent = challenge.icon
              return (
                <ScrollReveal key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 100}>
                  <Card className="p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden border-2">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                    
                    <div className="relative space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg shadow-red-500/30">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                            {challenge.stat}
                          </div>
                          <div className="text-sm text-muted-foreground">{challenge.statLabel}</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold">{challenge.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{challenge.description}</p>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal direction="up" delay={400}>
            <div className="relative overflow-hidden rounded-3xl border-2 border-red-500/20">
              <Image
                src="/AI SOC/anh2.jpg"
                alt="Traditional SOC vs AI SOC"
                width={1200}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-950/90 via-orange-950/80 to-transparent" />
              <div className="absolute inset-0 flex items-center px-12">
                <div className="max-w-2xl space-y-4">
                  <h3 className="text-3xl font-bold text-white">
                    SOC truyền thống ≠ Đủ bảo vệ
                  </h3>
                  <p className="text-xl text-white/80">
                    Với <span className="text-yellow-400 font-bold">12,300+ tấn công/ngày</span> chỉ riêng tại Việt Nam, 
                    manual SOC không thể theo kịp tốc độ và độ phức tạp của threat landscape hiện đại.
                  </p>
                  <p className="text-lg text-white/70">
                    <strong className="text-cyan-400">AI SOC</strong> phát hiện & phản ứng trong <strong>vài giây</strong>, 
                    không phải vài ngày.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Architecture Section */}
      <Section spacing="md" background="muted">
        <div className="container-responsive space-y-16">
          <ScrollReveal direction="up">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                <Network className="w-4 h-4" />
                {t('products.aiSoc.solution.badge')}
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="text-4xl lg:text-5xl">
                {t('products.aiSoc.solution.title')}
                <br />
                <span className="text-2xl lg:text-3xl text-muted-foreground">
                  {t('products.aiSoc.solution.subtitle')}
                </span>
              </AnimatedHeading>
              <p className="text-xl text-muted-foreground">
                {t('products.aiSoc.solution.description')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Open, Cloud-Native & Hyperscale</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Kiến trúc mở với khả năng:
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Database, title: "Unlimited Storage", desc: "Lưu trữ log không giới hạn thời gian, query trên petabyte data trong giây" },
                    { icon: Zap, title: "Real-time Processing", desc: "Xử lý 50+ tỷ sự kiện/ngày với latency < 1 giây" },
                    { icon: GitBranch, title: "450+ Integrations", desc: "Kết nối mọi data source: Cloud, On-prem, SaaS, Network, Endpoint" },
                    { icon: Cpu, title: "Auto-scaling", desc: "Tự động scale theo nhu cầu, không giới hạn tăng trưởng" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />
                <Card className="relative overflow-hidden border-2 border-blue-500/20 rounded-2xl shadow-2xl">
                  <Image
                    src="/AI SOC/anh3.jpg"
                    alt="AI SOC Architecture"
                    width={600}
                    height={500}
                    className="w-full h-auto"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-xl p-4">
                      <div className="text-xs text-white/60 mb-1">Nền tảng</div>
                      <div className="text-lg font-bold text-white">Google Chronicle SIEM + Gurucul UEBA</div>
                    </div>
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up">
            <Card className="p-8 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 border-none text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse animation-delay-2000" />
              </div>
              <div className="relative z-10 text-center space-y-4">
                <Lightbulb className="w-12 h-12 mx-auto text-yellow-300" />
                <p className="text-2xl font-bold">
                  5 tỷ thiết bị được bảo vệ toàn cầu - Công nghệ đã được chứng minh
                </p>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  Nền tảng AI SOC của ICS dựa trên công nghệ bảo vệ Google, Microsoft, các Fortune 500, 
                  và hàng nghìn doanh nghiệp trên toàn thế giới.
                </p>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* Core Components Section */}
      <Section spacing="md" background="default">
        <div className="container-responsive space-y-16">
          <ScrollReveal direction="up">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300">
                <Cpu className="w-4 h-4" />
                {t('products.aiSoc.features.badge')}
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="text-4xl p-1 lg:text-5xl">
                {t('products.aiSoc.features.title')}
              </AnimatedHeading>
              <p className="text-xl text-muted-foreground">
                {t('products.aiSoc.features.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          {/* Interactive Component Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {coreComponents.map((component, idx) => {
              const IconComponent = component.icon
              const isHovered = hoveredFeature === idx
              return (
                <ScrollReveal key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 100}>
                  <Card
                    className="p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden cursor-pointer border-2"
                    onMouseEnter={() => setHoveredFeature(idx)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${component.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                    
                    {/* Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${component.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                    <div className="relative z-10 space-y-6">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${component.gradient} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className={`text-6xl font-black opacity-10 group-hover:opacity-20 transition-opacity ${isHovered ? 'scale-110' : ''} transition-transform duration-300`}>
                          {(idx + 1).toString().padStart(2, '0')}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold">{component.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{component.description}</p>
                      </div>

                      {/* Features List */}
                      <div className="space-y-2 pt-2">
                        {component.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-start gap-3 text-sm">
                            <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${component.gradient} mt-2 flex-shrink-0`} />
                            <span className="text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Visual Showcase */}
          <ScrollReveal direction="up">
            <div className="relative overflow-hidden rounded-3xl border-2 border-purple-500/20">
              <Image
                src="/AI SOC/anh4.jpeg"
                alt="AI SOC Core Components"
                width={1200}
                height={500}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/50 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-12">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white">
                    Tích hợp liền mạch - Vận hành tự động
                  </h3>
                  <p className="text-lg text-white/80 max-w-3xl">
                    4 component hoạt động đồng bộ 24/7, từ data ingestion đến auto-response, 
                    giảm 90% workload cho SOC team và tăng 95% tốc độ phản ứng
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Process Workflow Section */}
      <Section spacing="md" background="muted">
        <div className="container-responsive space-y-16">
          <ScrollReveal direction="up">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 dark:bg-emerald-900/30 border border-emerald-300 dark:border-emerald-700 text-emerald-700 dark:text-emerald-300">
                <Workflow className="w-4 h-4" />
                {t('products.aiSoc.process.badge')}
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="text-4xl p-1 lg:text-5xl">
                {t('products.aiSoc.process.title')}
              </AnimatedHeading>
              <p className="text-xl text-muted-foreground">
                {t('products.aiSoc.process.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          {/* Process Steps Flow */}
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-8 top-12 bottom-12 w-1 bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 hidden lg:block" />

            <div className="space-y-8">
              {processSteps.map((step, idx) => {
                const IconComponent = step.icon
                const colorMap = {
                  blue: { bg: 'from-blue-500 to-cyan-500', border: 'border-blue-500/30', text: 'text-blue-600 dark:text-blue-400' },
                  purple: { bg: 'from-purple-500 to-pink-500', border: 'border-purple-500/30', text: 'text-purple-600 dark:text-purple-400' },
                  emerald: { bg: 'from-emerald-500 to-teal-500', border: 'border-emerald-500/30', text: 'text-emerald-600 dark:text-emerald-400' },
                  orange: { bg: 'from-orange-500 to-red-500', border: 'border-orange-500/30', text: 'text-orange-600 dark:text-orange-400' }
                }
                const colorClasses = colorMap[step.color as keyof typeof colorMap] || colorMap.blue

                return (
                  <ScrollReveal key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 100}>
                    <div className="relative">
                      <Card className={`p-8 hover:shadow-2xl transition-all duration-300 border-2 ${colorClasses.border} group`}>
                        <div className="flex items-start gap-6">
                          {/* Step Number & Icon */}
                          <div className="flex-shrink-0 space-y-3 relative z-10">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorClasses.bg} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <div className={`text-6xl font-black opacity-10 ${colorClasses.text}`}>
                              {step.number}
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 space-y-3">
                            <h3 className="text-2xl font-bold">{step.title}</h3>
                            <p className="text-lg text-muted-foreground leading-relaxed">{step.description}</p>
                            
                            {/* Time Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 border border-emerald-300 dark:border-emerald-700">
                              <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                              <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                                {idx === 0 ? 'Real-time' : idx === 3 ? '< 5 giây' : '< 1 giây'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* ROI & Benefits Section */}
      <Section spacing="md" background="default">
        <div className="container-responsive space-y-16">
          <ScrollReveal direction="up">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-700 dark:text-green-300">
                <Gauge className="w-4 h-4" />
                ROI & Impact
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="text-4xl p-1 lg:text-5xl">
                {t('products.aiSoc.whyIcs.title')}
              </AnimatedHeading>
              <p className="text-xl text-muted-foreground">
                {t('products.aiSoc.whyIcs.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          {/* ROI Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roiMetrics.map((roi, idx) => {
              const IconComponent = roi.icon
              return (
                <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                  <Card className="p-6 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden border-2 border-green-500/20">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-colors" />
                    
                    <div className="relative z-10 space-y-4">
                      <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>

                      <div className="space-y-2">
                        <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600 dark:from-green-400 dark:to-emerald-400">
                          {roi.metric}
                        </div>
                        <p className="text-sm text-muted-foreground font-medium leading-snug">{roi.label}</p>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Detailed Benefits */}
          <ScrollReveal direction="up">
            <Card className="p-12 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950/20 dark:via-emerald-950/20 dark:to-teal-950/20 border-2 border-green-200 dark:border-green-800">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Tiết kiệm chi phí</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Giảm 60-70% chi phí vận hành SOC truyền thống</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Không cần thuê thêm L1 Analyst (AI thay thế)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>Giảm thiệt hại từ data breach trung bình $2.4M/năm</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Hiệu suất vượt trội</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Phản ứng nhanh hơn 95% so với manual SOC</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Phát hiện APT và insider threat không bỏ sót</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                      <span>Coverage 24/7 với AI không ngừng nghỉ</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">Nâng cao năng lực team</h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Giải phóng SOC team khỏi L1 repetitive tasks</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Tập trung vào threat hunting & strategy</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                      <span>Giảm burnout và tăng job satisfaction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* Resources & Documents Section */}
      <Section spacing="md" background="gradient">
        <div className="container-responsive space-y-12">
          <ScrollReveal direction="up">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/30 text-white backdrop-blur-sm">
                <FileText className="w-4 h-4" />
                {t('products.aiSoc.resources.badge')}
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="text-4xl lg:text-5xl text-white">
                {t('products.aiSoc.resources.title')}
              </AnimatedHeading>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up">
            <Card className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 border-none p-12 lg:p-16">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse animation-delay-2000" />
              </div>

              <div className="relative z-10 text-center space-y-8">
                <Rocket className="w-16 h-16 mx-auto text-white" />
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold text-white">
                    Gurucul Workshop Walkthrough
                  </h3>
                  <p className="text-xl text-white/90 max-w-2xl mx-auto">
                    Tài liệu chi tiết về cách AI SOC hoạt động trong thực tế - từ ingestion đến response
                  </p>

                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    {[
                      "Kiến trúc hệ thống",
                      "Demo thực tế",
                      "Use cases cụ thể",
                      "ROI calculator"
                    ].map((feature, idx) => (
                      <div key={idx} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <CheckCircle className="w-4 h-4 text-cyan-300" />
                        <span className="text-white text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link href="/lien-he">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-bold text-lg h-14 px-8 group shadow-xl">
                    Tải tài liệu miễn phí
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* Final CTA */}
      <Section spacing="md" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 p-16 lg:p-20 text-center border-2 border-white/10">
              {/* Background Effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse animation-delay-2000" />
              </div>

              <div className="relative z-10 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-300">Bắt đầu hành trình chuyển đổi</span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-5xl p-1 lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                    Sẵn sàng nâng tầm<br />An ninh mạng?
                  </h2>
                  <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                    Đội ngũ chuyên gia ICS sẽ tư vấn miễn phí, đánh giá hiện trạng và đề xuất roadmap triển khai AI SOC phù hợp với doanh nghiệp bạn
                  </p>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {[
                    { icon: Rocket, title: "Tư vấn miễn phí", desc: "Workshop 2-4 giờ với experts" },
                    { icon: Target, title: "Assessment nhanh", desc: "Đánh giá security posture" },
                    { icon: Award, title: "Roadmap cụ thể", desc: "Lộ trình triển khai chi tiết" }
                  ].map((item, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                      <item.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link href="/lien-he">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg h-16 px-8 group shadow-lg shadow-blue-500/50">
                      Đặt lịch tư vấn ngay
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 font-bold text-lg h-16 px-8">
                    <Eye className="w-5 h-5 mr-2" />
                    Xem Demo trực tuyến
                  </Button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Footer />

      {/* Animations CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </>
  )
}
