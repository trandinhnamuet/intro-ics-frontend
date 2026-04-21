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
  Gauge,
  ExternalLink,
  Check,
  Minus
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
  const [expandedRoiCard, setExpandedRoiCard] = useState<number | null>(null)

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

  const painPointsData = (() => {
    const data = t('products.aiSoc.painPoints.points', { returnObjects: true }) as any
    return Array.isArray(data) && data.length > 0 ? data : []
  })()
  
  const solutionData = (() => {
    const data = t('products.aiSoc.solution.pillars', { returnObjects: true }) as any
    return Array.isArray(data) && data.length > 0 ? data : [
      { title: 'Dữ liệu khổng lồ', items: ['Phân tích 50 tỷ tệp/ngày', 'Bảo vệ 5 tỷ thiết bị', 'Lưu trữ không giới hạn'] },
      { title: 'Phân tích hành vi', items: ['Machine Learning', 'Phát hiện bất thường', 'Không dựa chữ ký'] },
      { title: 'Tự động hóa', items: ['Playbook tự động', 'Giảm MTTR 70%'] }
    ]
  })()
  
  const processData = (() => {
    const data = t('products.aiSoc.process.steps', { returnObjects: true }) as any
    return Array.isArray(data) && data.length > 0 ? data : [
      { title: 'Ingestion – Thu thập', description: 'Cloud, Endpoint, Network, IAM, SaaS' },
      { title: 'Detection – Phát hiện', description: 'AI/ML phát hiện mối đe dọa' },
      { title: 'Analysis – Phân tích', description: 'Phân tích ngữ cảnh bỏ false positive' },
      { title: 'Response – Phản ứng', description: 'Playbook tự động khóa mối đe dọa' }
    ]
  })()
  
  const heroPointsData = t('products.aiSoc.hero.points', { returnObjects: true }) as any
  const heroPoints = Array.isArray(heroPointsData) ? heroPointsData : []
  const floatingStatsData = t('products.aiSoc.hero.floatingStats', { returnObjects: true }) as any
  const floatingStats = Array.isArray(floatingStatsData) ? floatingStatsData : []

  const challenges = [
    {
      icon: AlertTriangle,
      title: painPointsData?.[0]?.title || t('products.aiSoc.painPoints.points.0.title'),
      description: painPointsData?.[0]?.items?.[0] || t('products.aiSoc.painPoints.points.0.items.0'),
      stat: "1,512+",
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
      color: "blue"
    },
    {
      number: "03",
      title: processData?.[2]?.title || t('products.aiSoc.process.steps.2.title'),
      description: processData?.[2]?.description || t('products.aiSoc.process.steps.2.description'),
      icon: Search,
      color: "blue"
    },
    {
      number: "04",
      title: processData?.[3]?.title || t('products.aiSoc.process.steps.3.title'),
      description: processData?.[3]?.description || t('products.aiSoc.process.steps.3.description'),
      icon: Zap,
      color: "blue"
    }
  ]

  const roiMetricIcons = [TrendingUp, Target, Zap, DollarSign]
  const roiMetricsData = t('products.aiSoc.roiMetrics', { returnObjects: true })
  const roiMetricsArray = Array.isArray(roiMetricsData) && roiMetricsData.length > 0 ? roiMetricsData : [
    { metric: "90%", label: "Giảm workload cho SOC team" },
    { metric: "70%", label: "Tự động hóa phát hiện" },
    { metric: "95%", label: "Phản ứng sự cố nhanh hơn" },
    { metric: "$2.4M", label: "Giảm thiệt hại data breach" }
  ]
  const roiMetrics = roiMetricsArray.map((item: any, idx: number) => ({ ...item, icon: roiMetricIcons[idx] || Gauge }))

  const traditionalBlock = (() => {
    const data = t('products.aiSoc.traditionalBlock', { returnObjects: true }) as any
    return typeof data === 'object' && data !== null && 'title' in data ? data : { 
      title: 'SOC truyền thống với AI SOC',
      line1: 'Với 1,512+ tấn công/ngày...',
      line2: 'AI SOC phát hiện & phản ứng trong vài giây...'
    }
  })()
  
  const architectureDetails = (() => {
    const data = t('products.aiSoc.architectureDetails', { returnObjects: true }) as any
    return typeof data === 'object' && data !== null && 'headline' in data ? data : {
      headline: 'Open, Cloud-Native & Hyperscale',
      description: 'Kiến trúc mở với khả năng:',
      platformLabel: 'Nền tảng',
      items: [
        { title: 'Unlimited Storage', desc: 'Lưu trữ log không giới hạn' },
        { title: 'Real-time Processing', desc: 'Xử lý 50+ tỷ sự kiện/ngày' },
        { title: '450+ Integrations', desc: 'Kết nối mọi data source' },
        { title: 'Auto-scaling', desc: 'Tự động scale theo nhu cầu' }
      ]
    }
  })()
  
  const proofPoint = (() => {
    const data = t('products.aiSoc.proofPoint', { returnObjects: true }) as any
    return typeof data === 'object' && data !== null && 'title' in data ? data : {
      title: '5 tỷ thiết bị được bảo vệ',
      description: 'Công nghệ đã được chứng minh...'
    }
  })()
  
  const componentsVisual = (() => {
    const data = t('products.aiSoc.componentsVisual', { returnObjects: true }) as any
    return typeof data === 'object' && data !== null && 'title' in data ? data : {
      title: 'Tích hợp liền mạch',
      description: '4 component hoạt động đồng bộ 24/7'
    }
  })()
  
  const processSpeeds = (() => {
    const data = t('products.aiSoc.processSpeeds', { returnObjects: true }) as any
    return typeof data === 'object' && data !== null && 'instant' in data ? data : {
      instant: 'Real-time',
      fast: '< 1 giây',
      slow: '< 5 giây'
    }
  })()
  
  const roiDetails = (() => {
    const data = t('products.aiSoc.roiDetails', { returnObjects: true }) as any
    return typeof data === 'object' && data !== null && 'cost' in data ? data : {
      cost: { title: 'Tiết kiệm chi phí', items: ['Giảm 60-70% chi phí...'] },
      performance: { title: 'Hiệu suất vượt trội', items: ['Phản ứng nhanh hơn 95%...'] },
      team: { title: 'Nâng cao năng lực team', items: ['Giải phóng SOC team...'] }
    }
  })()
  
  const resourceCard = (() => {
    const data = t('products.aiSoc.resourceCard', { returnObjects: true }) as any
    return typeof data === 'object' && data !== null && 'title' in data ? data : {
      title: 'Gurucul Workshop Walkthrough',
      description: 'Tài liệu chi tiết về cách AI SOC hoạt động',
      points: ['Kiến trúc hệ thống', 'Demo thực tế', 'Use cases', 'ROI calculator'],
      cta: 'Tải tài liệu miễn phí'
    }
  })()
  
  const finalCta = (() => {
    const data = t('products.aiSoc.finalCta', { returnObjects: true }) as any
    return typeof data === 'object' && data !== null && 'title' in data ? data : {
      eyebrow: 'Bắt đầu hành trình chuyển đổi',
      title: 'Sẵn sàng nâng tầm An ninh mạng?',
      description: 'Đội ngũ chuyên gia...',
      benefits: [
        { title: 'Tư vấn miễn phí', desc: 'Workshop 2-4 giờ' },
        { title: 'Assessment nhanh', desc: 'Đánh giá security posture' },
        { title: 'Roadmap cụ thể', desc: 'Lộ trình triển khai' }
      ],
      primaryCta: 'Đặt lịch tư vấn',
      secondaryCta: 'Xem Demo'
    }
  })()

  type ComparisonScore = 'yes' | 'partial' | 'no'

  const platformComparisonData = t('products.aiSoc.platformComparison', { returnObjects: true }) as any
  const platformComparison = (() => {
    const fallback = {
      badge: 'So sánh nền tảng',
      headingLine1: 'MINH BẠCH TỐI ĐA',
      headingLine2: 'RÕ RÀNG VÀ HIỆU QUẢ.',
      description: 'REVEAL giúp đội ngũ an ninh có được độ rõ ràng và sự tập trung để vận hành ở hiệu suất cao nhất và chuyển đổi SecOps.',
      tag: 'Gurucul vs Thị trường',
      tableTitle: 'So sánh nền tảng',
      tableTag: 'Năng lực cốt lõi',
      imageAlt: 'Trung tâm điều hành SOC',
      columns: {
        feature: 'Tính năng',
        gurucul: 'Gurucul NGSIEM',
        other: 'NGSIEM khác',
        traditional: 'SIEM truyền thống'
      },
      status: {
        yes: 'Có',
        partial: 'Một phần',
        no: 'Không'
      },
      pillars: [
        {
          title: 'Khả năng hiển thị',
          description: 'Hội tụ nhiều công cụ rời rạc vào một trải nghiệm nền tảng thống nhất giúp đội SOC có bức tranh rõ ràng về toàn bộ hệ thống.',
          pillar: 'Trụ cột 01'
        },
        {
          title: 'Tập trung',
          description: 'Machine Learning và tự động hóa loại bỏ nhiễu từ cảnh báo bất thường và false positive để tập trung vào các mối đe dọa quan trọng.',
          pillar: 'Trụ cột 02'
        },
        {
          title: 'Góc nhìn chiến lược',
          description: 'Khi đội ngũ ngừng bị động, họ có thể ưu tiên, lập kế hoạch và phản ứng chính xác hơn trong điều tra và săn tìm mối đe dọa.',
          pillar: 'Trụ cột 03'
        },
        {
          title: 'Sự chủ động',
          description: 'Từ sự tự tin và khả năng kiểm soát, SOC có thể điều hành chủ động, nhìn xa hơn và thúc đẩy đổi mới bảo mật liên tục.',
          pillar: 'Trụ cột 04'
        }
      ],
      rows: [
        { feature: 'Cloud, Data Lake and Deployment Agnostic', gurucul: 'yes', other: 'partial', traditional: 'no' },
        { feature: 'Cost Reduction with Native Data Pipeline Management', gurucul: 'yes', other: 'partial', traditional: 'no' },
        { feature: 'AI Agent Driven Visibility and Automated Data Ingestion', gurucul: 'yes', other: 'partial', traditional: 'no' },
        { feature: 'Fully Customizable AI/ML Analytics', gurucul: 'yes', other: 'yes', traditional: 'partial' },
        { feature: 'High-fidelity Detections with ML Model Chaining', gurucul: 'yes', other: 'partial', traditional: 'no' },
        { feature: 'Dynamic Risk Prioritized Alerting & Case Management', gurucul: 'yes', other: 'partial', traditional: 'no' },
        { feature: 'Universal Federated Search', gurucul: 'yes', other: 'partial', traditional: 'partial' },
        { feature: 'Agentic AI-driven Alert Triage & Investigations', gurucul: 'yes', other: 'partial', traditional: 'no' },
        { feature: 'Native Virtual Analyst AI Assistant', gurucul: 'yes', other: 'no', traditional: 'no' },
        { feature: 'Automated Response with AI Agent Generated Playbooks', gurucul: 'yes', other: 'partial', traditional: 'no' },
        { feature: 'Seamless Interoperability & Orchestration', gurucul: 'yes', other: 'yes', traditional: 'partial' },
        { feature: 'Migration In As Little As 4 Weeks', gurucul: 'yes', other: 'partial', traditional: 'no' }
      ]
    }

    return typeof platformComparisonData === 'object' && platformComparisonData !== null && 'rows' in platformComparisonData
      ? platformComparisonData
      : fallback
  })()

  const clarityPillars = Array.isArray(platformComparison.pillars) ? platformComparison.pillars : []
  const comparisonPlatformRows: Array<{
    feature: string
    gurucul: ComparisonScore
    other: ComparisonScore
    traditional: ComparisonScore
  }> = Array.isArray(platformComparison.rows) ? platformComparison.rows : []

  const renderComparisonCell = (score: ComparisonScore) => {
    const statusConfig = {
      yes: {
        label: platformComparison?.status?.yes || 'Có',
        icon: Check,
        className: 'text-emerald-300 bg-emerald-500/15 border-emerald-400/30'
      },
      partial: {
        label: platformComparison?.status?.partial || 'Một phần',
        icon: Minus,
        className: 'text-amber-300 bg-amber-500/15 border-amber-400/30'
      },
      no: {
        label: platformComparison?.status?.no || 'Không',
        icon: Minus,
        className: 'text-rose-300 bg-rose-500/15 border-rose-400/30'
      }
    } as const

    const status = statusConfig[score]
    const StatusIcon = status.icon

    return (
      <span className={`inline-flex items-center justify-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${status.className}`}>
        <StatusIcon className="h-3.5 w-3.5" />
        {status.label}
      </span>
    )
  }



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
                    { value: "70%", label: (heroPoints && heroPoints[0]) || t('products.aiSoc.hero.points.0', '70% reduction') },
                    { value: "90%", label: (heroPoints && heroPoints[1]) || t('products.aiSoc.hero.points.1', '90% automation') },
                    { value: "95%", label: (heroPoints && heroPoints[2]) || t('products.aiSoc.hero.points.2', '95% accuracy') },
                    { value: "24/7", label: (heroPoints && heroPoints[3]) || t('products.aiSoc.hero.aiMonitoring', 'AI Monitoring') }
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
                    {(floatingStats && floatingStats.length > 0 ? floatingStats : [
                      { icon: Shield, label: "Protected", value: "5B+ Devices" },
                      { icon: Zap, label: "Detection", value: "< 1 sec" },
                      { icon: Bot, label: "AI Models", value: "4000+" }
                    ]).map((item, idx) => {
                      const ItemIcon = [Shield, Zap, Bot][idx] || Shield
                      return (
                        <div key={idx} className="bg-slate-900/80 backdrop-blur-md border border-white/10 rounded-lg p-3">
                          <ItemIcon className="w-5 h-5 text-cyan-400 mb-1" />
                          <div className="text-xs text-white/60">{item.label}</div>
                          <div className="text-sm font-bold text-white">{item.value}</div>
                        </div>
                      )
                    })}
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-fuchsia-950 via-purple-900 to-indigo-950 py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(255,255,255,0.16),transparent_35%),radial-gradient(circle_at_90%_10%,rgba(56,189,248,0.2),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(147,51,234,0.28),transparent_45%)]" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="relative container-responsive space-y-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
            <div className="space-y-6 lg:col-span-7">
              <Badge className="inline-flex items-center gap-2 border border-fuchsia-300/30 bg-white/10 px-4 py-2 text-fuchsia-100 backdrop-blur-sm">
                <Sparkles className="h-4 w-4" />
                {platformComparison.badge}
              </Badge>
              <h2 className="text-4xl font-black leading-tight tracking-tight text-white lg:text-6xl">
                {platformComparison.headingLine1}
                <br />
                {platformComparison.headingLine2}
              </h2>
              <p className="max-w-2xl text-lg leading-relaxed text-fuchsia-100/90 lg:text-xl">
                {platformComparison.description}
              </p>
            </div>

            <div className="lg:col-span-5">
              <Card className="overflow-hidden border border-white/20 bg-white/5 shadow-2xl shadow-black/30 backdrop-blur-sm">
                <Image
                  src="/AI SOC/anh4.jpeg"
                  alt={platformComparison.imageAlt}
                  width={900}
                  height={620}
                  className="h-full w-full object-cover"
                />
              </Card>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {clarityPillars.map((item, idx) => {
              const Icon = [Eye, Target, Map, Shield][idx] || Eye
              return (
                <Card
                  key={item.title}
                  className="border border-white/15 bg-white/10 p-6 text-white backdrop-blur-md transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-fuchsia-200/40 bg-fuchsia-300/30">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-fuchsia-100/90">{item.description}</p>
                  <div className="mt-4 text-xs font-medium uppercase tracking-wider text-fuchsia-200/80">{item.pillar || `Pillar 0${idx + 1}`}</div>
                </Card>
              )
            })}
          </div>

          <Card className="border border-white/20 bg-slate-950/45 p-5 text-white shadow-2xl shadow-black/40 backdrop-blur-md lg:p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <h3 className="text-2xl font-bold lg:text-3xl">{platformComparison.tableTitle}</h3>
              <span className="rounded-full border border-fuchsia-300/40 bg-fuchsia-300/20 px-3 py-1 text-xs font-semibold text-fuchsia-100">
                {platformComparison.tableTag}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full border-separate border-spacing-y-2 text-left">
                <thead>
                  <tr>
                    <th className="rounded-l-lg bg-white/10 px-4 py-3 text-sm font-semibold text-fuchsia-100">{platformComparison?.columns?.feature || 'Feature'}</th>
                    <th className="bg-emerald-500/20 px-4 py-3 text-sm font-semibold text-emerald-200">{platformComparison?.columns?.gurucul || 'Gurucul NGSIEM'}</th>
                    <th className="bg-amber-500/20 px-4 py-3 text-sm font-semibold text-amber-200">{platformComparison?.columns?.other || 'Other NGSIEM'}</th>
                    <th className="rounded-r-lg bg-rose-500/20 px-4 py-3 text-sm font-semibold text-rose-200">{platformComparison?.columns?.traditional || 'Traditional SIEM'}</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonPlatformRows.map((row) => (
                    <tr key={row.feature}>
                      <td className="rounded-l-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-fuchsia-50">
                        {row.feature}
                      </td>
                      <td className="border border-white/10 bg-white/5 px-4 py-3">{renderComparisonCell(row.gurucul)}</td>
                      <td className="border border-white/10 bg-white/5 px-4 py-3">{renderComparisonCell(row.other)}</td>
                      <td className="rounded-r-lg border border-white/10 bg-white/5 px-4 py-3">{renderComparisonCell(row.traditional)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      {/* Why AI SOC Section */}
      <Section spacing="sm" background="default">
        <div className="container-responsive space-y-16">
          <ScrollReveal direction="up">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300">
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
                  <Card className="p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden border-2 h-full flex flex-col">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                    
                    <div className="relative space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
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
            <div className="relative overflow-hidden rounded-3xl border-2 border-blue-500/20">
              <Image
                src="/AI SOC/anh2.jpg"
                alt="Traditional SOC vs AI SOC"
                width={1200}
                height={400}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-cyan-950/80 to-transparent" />
              <div className="absolute inset-0 flex items-center px-12">
                <div className="max-w-2xl space-y-4">
                  <h3 className="text-3xl font-bold text-white">
                    {traditionalBlock.title}
                  </h3>
                  <p className="text-xl text-white/80">
                    {traditionalBlock.line1}
                  </p>
                  <p className="text-lg text-white/70">
                    {traditionalBlock.line2}
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Gurucul/Gartner Recognition Section */}
      <Section spacing="sm" background="muted">
        <div className="container-responsive space-y-16">
          <ScrollReveal direction="up">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300">
                <Award className="w-4 h-4" />
                {t('products.aiSoc.gartnerRecognition.badge')}
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="text-4xl lg:text-5xl">
                {t('products.aiSoc.gartnerRecognition.title')}
              </AnimatedHeading>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {t('products.aiSoc.gartnerRecognition.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          {/* Gartner Magic Quadrant Image & Content */}
          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">
                    {t('products.aiSoc.gartnerRecognition.gartnerImage.title')}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {t('products.aiSoc.gartnerRecognition.gartnerImage.description')}
                  </p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4">
                  {(t('products.aiSoc.gartnerRecognition.gartnerImage.stats', { returnObjects: true }) as any[]).map((stat: any, idx: number) => (
                    <div key={idx} className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4">
                      <div className="text-2xl font-black text-blue-600 dark:text-blue-400">{stat.value}</div>
                      <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image */}
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-3xl blur-2xl opacity-20 animate-pulse" />
                  <Card className="relative overflow-hidden border-2 border-blue-500/20 rounded-2xl shadow-2xl">
                    <Image
                      src="/AI SOC/Anh_gartner.png"
                      alt="Gartner Magic Quadrant 2025 - Gurucul Leader"
                      width={500}
                      height={560}
                      className="w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-slate-900/90 backdrop-blur-md border border-white/10 rounded-lg p-3">
                        <div className="text-xs text-white/60">Vị trí</div>
                        <div className="text-sm font-bold text-white">Leader 2025</div>
                      </div>
                    </div>
                  </Card>
                </div>
                
                {/* Gartner Report Link Button */}
                <a 
                  href="https://www.gartner.com/doc/reprints?id=1-2M3P612D&ct=251014&st=sb" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button size="lg" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold group">
                    {t('products.aiSoc.gartnerRecognition.gartnerImage.reportCta')}
                    <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Gartner Quote */}
          <ScrollReveal direction="up">
            <Card className="relative overflow-hidden p-8 lg:p-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border-2 border-blue-200 dark:border-blue-800">
              <div className="absolute top-4 left-4 text-8xl text-blue-200 dark:text-blue-800 opacity-30">"</div>
              <div className="relative z-10 space-y-6">
                <p className="text-2xl font-semibold text-center leading-relaxed">
                  {t('products.aiSoc.gartnerRecognition.quote')}
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Award className="w-4 h-4" />
                  <span className="font-medium">{t('products.aiSoc.gartnerRecognition.source')}</span>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          {/* Strengths Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(t('products.aiSoc.gartnerRecognition.strengths', { returnObjects: true }) as any[]).map((strength: any, idx: number) => {
              const icons = [Brain, Database, Rocket, Shield]
              const Icon = icons[idx] || Shield
              return (
                <ScrollReveal key={idx} direction={idx % 2 === 0 ? 'left' : 'right'}>
                  <Card className="h-full p-6 hover:shadow-xl transition-all hover:scale-105 border-2 border-transparent hover:border-blue-500/20">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-xl font-bold">{strength.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Comparison Table */}
          <ScrollReveal direction="up">
            <Card className="p-8 overflow-hidden">
              <h3 className="text-2xl font-bold mb-6 text-center">
                {t('products.aiSoc.gartnerRecognition.comparison.title')}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-blue-200 dark:border-blue-800">
                      <th className="text-left p-4 font-bold">Tiêu chí</th>
                      <th className="text-left p-4 font-bold text-blue-600 dark:text-blue-400">Gurucul</th>
                      <th className="text-left p-4 font-bold text-muted-foreground">Đối thủ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(t('products.aiSoc.gartnerRecognition.comparison.items', { returnObjects: true }) as any[]).map((item: any, idx: number) => (
                      <tr key={idx} className="border-b border-border hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors">
                        <td className="p-4 font-medium">{item.criteria}</td>
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-500" />
                            <span className="text-blue-600 dark:text-blue-400 font-semibold">{item.gurucul}</span>
                          </div>
                        </td>
                        <td className="p-4 text-muted-foreground">{item.competitors}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* Architecture Section */}
      <Section spacing="sm" background="muted">
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
                  <h3 className="text-2xl font-bold">{architectureDetails?.headline}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {architectureDetails?.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {(architectureDetails?.items || []).map((item: any, idx: number) => {
                    const Icon = [Database, Zap, GitBranch, Cpu][idx]
                    return (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20 border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-all">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                        {Icon && <Icon className="w-6 h-6 text-white" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                    )
                  })}
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
                      <div className="text-xs text-white/60 mb-1">{architectureDetails?.platformLabel}</div>
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
                  {proofPoint.title}
                </p>
                <p className="text-lg text-white/80 max-w-3xl mx-auto">
                  {proofPoint.description}
                </p>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* Core Components Section */}
      <Section spacing="sm" background="default">
        <div className="container-responsive space-y-16">
          {/* Visual Showcase */}
          <ScrollReveal direction="up">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                <Cpu className="w-4 h-4" />
                {t('products.aiSoc.features.badge')}
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                {componentsVisual.title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {componentsVisual.description}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up">
            <div className="space-y-12">

              {/* Component Cards Grid */}
              {componentsVisual.items && Array.isArray(componentsVisual.items) && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {componentsVisual.items.map((item: any, idx: number) => {
                    const colorMap = [
                      { bg: 'from-blue-500 to-cyan-500', gradient: 'from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20', border: 'border-blue-200 dark:border-blue-800', number: 'text-blue-100 dark:text-blue-900' },
                      { bg: 'from-blue-600 to-sky-500', gradient: 'from-blue-50 to-sky-50 dark:from-blue-950/20 dark:to-sky-950/20', border: 'border-blue-200 dark:border-blue-800', number: 'text-blue-100 dark:text-blue-900' },
                      { bg: 'from-cyan-500 to-blue-500', gradient: 'from-cyan-50 to-blue-50 dark:from-cyan-950/20 dark:to-blue-950/20', border: 'border-cyan-200 dark:border-cyan-800', number: 'text-cyan-100 dark:text-cyan-900' },
                      { bg: 'from-sky-500 to-blue-600', gradient: 'from-sky-50 to-blue-50 dark:from-sky-950/20 dark:to-blue-950/20', border: 'border-sky-200 dark:border-sky-800', number: 'text-sky-100 dark:text-sky-900' }
                    ]
                    const colors = colorMap[idx] || colorMap[0]
                    const IconComponents = [Database, Brain, Bot, Zap]
                    const Icon = IconComponents[idx]

                    return (
                      <ScrollReveal key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 100}>
                        <Card className={`p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden border-2 ${colors.border} bg-gradient-to-br ${colors.gradient} h-full flex flex-col`}>
                          {/* Animated Background */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                          
                          {/* Glow Effect */}
                          <div className={`absolute -inset-1 bg-gradient-to-r ${colors.bg} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                          <div className="relative z-10 space-y-6">
                            {/* Header */}
                            <div className="flex items-start justify-between">
                              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colors.bg} flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                <Icon className="w-8 h-8 text-white" />
                              </div>
                              <div className="text-6xl font-black opacity-40 group-hover:opacity-50 transition-opacity text-slate-400 dark:text-slate-600">
                                {item.number}
                              </div>
                            </div>

                            {/* Title & Description */}
                            <div className="space-y-3">
                              <h4 className="text-2xl font-bold">{item.title}</h4>
                              <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                            </div>

                            {/* Points List */}
                            {item.points && Array.isArray(item.points) && (
                              <div className="space-y-2 pt-2">
                                {item.points.map((point: string, pointIdx: number) => (
                                  <div key={pointIdx} className="flex items-start gap-3 text-sm">
                                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${colors.bg} mt-2 flex-shrink-0`} />
                                    <span className="text-muted-foreground">{point}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Learn More Button */}
                            {item.learnMoreUrl && (
                              <div className="pt-4 mt-auto">
                                <a 
                                  href={item.learnMoreUrl} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="block"
                                >
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className={`w-full border-2 hover:bg-gradient-to-r ${colors.bg} hover:text-white hover:border-transparent transition-all group`}
                                  >
                                    {t('products.aiSoc.features.learnMoreCta')}
                                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                  </Button>
                                </a>
                              </div>
                            )}
                          </div>
                        </Card>
                      </ScrollReveal>
                    )
                  })}
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </Section>
      <Section spacing="sm" background="muted">
        <div className="container-responsive space-y-16">
          <ScrollReveal direction="up">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300">
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
            <div className="absolute left-8 top-12 bottom-12 w-1 bg-gradient-to-b from-blue-500 via-cyan-500 to-sky-500 hidden lg:block" />

            <div className="space-y-8">
              {processSteps.map((step, idx) => {
                const IconComponent = step.icon
                const colorMap = {
                  blue: { bg: 'from-blue-500 to-cyan-500', border: 'border-blue-500/30', text: 'text-blue-600 dark:text-blue-400' },
                  purple: { bg: 'from-blue-600 to-sky-500', border: 'border-blue-500/30', text: 'text-blue-600 dark:text-blue-400' },
                  emerald: { bg: 'from-cyan-500 to-blue-500', border: 'border-cyan-500/30', text: 'text-cyan-600 dark:text-cyan-400' },
                  orange: { bg: 'from-sky-500 to-blue-600', border: 'border-sky-500/30', text: 'text-sky-600 dark:text-sky-400' }
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
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 border border-blue-300 dark:border-blue-700">
                              <Zap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                              <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                                {idx === 0 ? processSpeeds.instant : idx === 3 ? processSpeeds.slow : processSpeeds.fast}
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
      <Section spacing="sm" background="default">
        <div className="container-responsive space-y-16">
          <ScrollReveal direction="up">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                <Gauge className="w-4 h-4" />
                {t('products.aiSoc.roi.badge', 'ROI & Impact')}
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="text-4xl p-1 lg:text-5xl">
                {t('products.aiSoc.whyIcs.title')}
              </AnimatedHeading>
              <p className="text-xl text-muted-foreground">
                {t('products.aiSoc.whyIcs.subtitle')}
              </p>
            </div>
          </ScrollReveal>

          {/* ROI Metrics - New Expandable Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(t('products.aiSoc.whyIcs.benefits', { returnObjects: true }) as any[]).map((benefit: any, idx: number) => {
              const isExpanded = expandedRoiCard === idx
              const gradients = [
                { bg: 'from-blue-500 to-cyan-500', border: 'border-blue-200 dark:border-blue-800', text: 'text-blue-600 dark:text-blue-400' },
                { bg: 'from-cyan-500 to-blue-500', border: 'border-cyan-200 dark:border-cyan-800', text: 'text-cyan-600 dark:text-cyan-400' },
                { bg: 'from-sky-500 to-blue-600', border: 'border-sky-200 dark:border-sky-800', text: 'text-sky-600 dark:text-sky-400' },
                { bg: 'from-blue-600 to-indigo-500', border: 'border-blue-200 dark:border-blue-800', text: 'text-blue-600 dark:text-blue-400' }
              ]
              const gradient = gradients[idx] || gradients[0]

              return (
                <ScrollReveal key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 100}>
                  <Card 
                    className={`p-6 cursor-pointer hover:shadow-2xl transition-all duration-300 border-2 ${gradient.border} ${isExpanded ? 'ring-2 ring-offset-2 ring-opacity-50' : ''}`}
                    onClick={() => setExpandedRoiCard(isExpanded ? null : idx)}
                  >
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                          <div className={`text-4xl font-black ${gradient.text}`}>
                            {benefit.metric}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {benefit.label}
                          </div>
                        </div>
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${gradient.bg} flex items-center justify-center flex-shrink-0`}>
                          <ChevronRight className={`w-5 h-5 text-white transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                        </div>
                      </div>

                      {/* Expandable Content */}
                      {isExpanded && (
                        <div className="pt-4 border-t space-y-3 animate-in slide-in-from-top-2 duration-300">
                          <p className="text-muted-foreground leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>

          {/* Detailed Benefits */}
          <ScrollReveal direction="up">
            <Card className="p-12 bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50 dark:from-blue-950/20 dark:via-cyan-950/20 dark:to-sky-950/20 border-2 border-blue-200 dark:border-blue-800">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {[
                  { ...roiDetails.cost, icon: DollarSign, gradient: 'from-blue-500 to-cyan-500', checkColor: 'text-blue-500' },
                  { ...roiDetails.performance, icon: Zap, gradient: 'from-cyan-500 to-blue-500', checkColor: 'text-cyan-500' },
                  { ...roiDetails.team, icon: Users, gradient: 'from-sky-500 to-blue-600', checkColor: 'text-sky-500' }
                ].map((section, idx) => {
                  const IconComponent = section.icon
                  return (
                    <div key={`${section.title}-${idx}`} className="space-y-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${section.gradient} flex items-center justify-center`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold">{section.title}</h3>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {(section.items || []).map((item: any, itemIdx: number) => (
                          <li key={itemIdx} className="flex items-start gap-2">
                            <CheckCircle className={`w-4 h-4 ${section.checkColor} mt-0.5 flex-shrink-0`} />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                })}
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* Resources & Documents Section */}
      <Section spacing="sm" background="gradient">
        <div className="container-responsive space-y-12">
          <ScrollReveal direction="up">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-700 dark:text-green-300">
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
                    {resourceCard.title}
                  </h3>
                  <p className="text-xl text-white/90 max-w-2xl mx-auto">
                    {resourceCard.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    {(resourceCard.points || []).map((feature: any, idx: number) => (
                      <div key={idx} className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                        <CheckCircle className="w-4 h-4 text-cyan-300" />
                        <span className="text-white text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a href="/AI SOC/Gurucul Workshop Walkthrough.pdf" download="Gurucul_Workshop_Walkthrough.pdf">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-white/90 font-bold text-lg h-14 px-8 group shadow-xl">
                    {resourceCard.cta}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* Final CTA */}
      <Section spacing="sm" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-950 p-16 lg:p-20 text-center border-2 border-white/10">
              {/* Background Effects */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse animation-delay-2000" />
              </div>

              <div className="relative z-10 space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-semibold text-blue-300">{finalCta.eyebrow}</span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-5xl p-1 lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500">
                    {finalCta.title}
                  </h2>
                  <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
                    {finalCta.description}
                  </p>
                </div>

                {/* Benefits */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {(finalCta.benefits || []).map((item: any, idx: number) => {
                    const icons = [Rocket, Target, Award]
                    const Icon = icons[idx] || Award
                    return (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                      <Icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                      <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-sm text-white/60">{item.desc}</p>
                    </div>
                  )})}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Link href="/lien-he">
                    <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg h-16 px-8 group shadow-lg shadow-blue-500/50">
                      {finalCta.primaryCta}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white hover:bg-white/20 font-bold text-lg h-16 px-8">
                    <Eye className="w-5 h-5 mr-2" />
                    {finalCta.secondaryCta}
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
