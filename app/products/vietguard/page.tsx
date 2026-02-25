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
import { AnimatedHeading } from '@/components/ui/animated-heading'
import { Section } from '@/components/ui/section'
import {
  Shield, 
  Check, 
  ArrowRight, 
  Star, 
  Zap, 
  Lock,
  Smartphone,
  Search,
  AlertTriangle,
  Award,
  ExternalLink,
  Code,
  Bug,
  FileCode,
  Database,
  Eye,
  ShieldCheck,
  FileCheck,
  Layers,
  CheckCircle2,
  TrendingUp,
  Users,
  Globe
} from 'lucide-react'

interface SecurityFeature {
  id: string
  icon: React.ElementType
  title: string
  description: string
  category: string
  color: string
}

interface ConnectorAnchor {
  x: number
  y: number
}

interface ConnectorLayout {
  width: number
  height: number
  centerX: number
  shieldTop: number
  shieldBottom: number
}

export default function VietguardPage() {
  const { t } = useTranslation()
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const shieldRef = useRef<HTMLDivElement>(null)
  const topCardRefs = useRef<(HTMLDivElement | null)[]>([])
  const bottomCardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [topAnchors, setTopAnchors] = useState<ConnectorAnchor[]>([])
  const [bottomAnchors, setBottomAnchors] = useState<ConnectorAnchor[]>([])
  const [connectorLayout, setConnectorLayout] = useState<ConnectorLayout | null>(null)

  useEffect(() => {
    const updatePositions = () => {
      if (!containerRef.current || !shieldRef.current) return

      const containerRect = containerRef.current.getBoundingClientRect()
      const shieldRect = shieldRef.current.getBoundingClientRect()

      const buildAnchors = (refs: (HTMLDivElement | null)[], position: 'top' | 'bottom'): ConnectorAnchor[] => {
        return refs
          .map(ref => {
            if (!ref) return null
            const rect = ref.getBoundingClientRect()
            return {
              x: rect.left + rect.width / 2 - containerRect.left,
              y: position === 'top'
                ? rect.bottom - containerRect.top
                : rect.top - containerRect.top
            }
          })
          .filter((anchor): anchor is ConnectorAnchor => Boolean(anchor))
      }

      setConnectorLayout({
        width: containerRect.width,
        height: containerRect.height,
        centerX: shieldRect.left + shieldRect.width / 2 - containerRect.left,
        shieldTop: shieldRect.top - containerRect.top,
        shieldBottom: shieldRect.bottom - containerRect.top
      })

      setTopAnchors(buildAnchors(topCardRefs.current, 'top'))
      setBottomAnchors(buildAnchors(bottomCardRefs.current, 'bottom'))
    }

    updatePositions()
    window.addEventListener('resize', updatePositions)

    const observer = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(updatePositions)
      : null

    if (observer && containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => {
      window.removeEventListener('resize', updatePositions)
      if (observer) {
        observer.disconnect()
      }
    }
  }, [])

  const topFeatures: SecurityFeature[] = [
    {
      id: 'attack-surface',
      icon: Code,
      title: t('products.vietguard.features.topFeatures.0.title'),
      description: t('products.vietguard.features.topFeatures.0.description'),
      category: t('products.vietguard.features.topFeatures.0.title'),
      color: 'green'
    },
    {
      id: 'vulnerability-mgmt',
      icon: Bug,
      title: t('products.vietguard.features.topFeatures.1.title'),
      description: t('products.vietguard.features.topFeatures.1.description'),
      category: t('products.vietguard.features.topFeatures.1.title'),
      color: 'green'
    },
    {
      id: 'audit-project',
      icon: FileCode,
      title: t('products.vietguard.features.topFeatures.2.title'),
      description: t('products.vietguard.features.topFeatures.2.description'),
      category: t('products.vietguard.features.topFeatures.2.title'),
      color: 'blue'
    },
    {
      id: 'bug-bounty',
      icon: Award,
      title: t('products.vietguard.features.topFeatures.3.title'),
      description: t('products.vietguard.features.topFeatures.3.description'),
      category: t('products.vietguard.features.topFeatures.3.title'),
      color: 'blue'
    },
    {
      id: 'vulnerability-scan',
      icon: Search,
      title: t('products.vietguard.features.topFeatures.4.title'),
      description: t('products.vietguard.features.topFeatures.4.description'),
      category: t('products.vietguard.features.topFeatures.4.title'),
      color: 'blue'
    },
    {
      id: 'data-leak',
      icon: Eye,
      title: t('products.vietguard.features.topFeatures.5.title'),
      description: t('products.vietguard.features.topFeatures.5.description'),
      category: t('products.vietguard.features.topFeatures.5.title'),
      color: 'purple'
    },
    {
      id: 'password-manager',
      icon: Lock,
      title: t('products.vietguard.features.topFeatures.6.title'),
      description: t('products.vietguard.features.topFeatures.6.description'),
      category: t('products.vietguard.features.topFeatures.6.title'),
      color: 'purple'
    },
    {
      id: 'trust-center',
      icon: ShieldCheck,
      title: t('products.vietguard.features.topFeatures.7.title'),
      description: t('products.vietguard.features.topFeatures.7.description'),
      category: t('products.vietguard.features.topFeatures.7.title'),
      color: 'purple'
    }
  ]

  const bottomFeatures: SecurityFeature[] = [
    {
      id: 'endpoints',
      icon: Smartphone,
      title: t('products.vietguard.features.bottomFeatures.0.title'),
      description: t('products.vietguard.features.bottomFeatures.0.description'),
      category: t('products.vietguard.features.bottomFeatures.0.title'),
      color: 'cyan'
    },
    {
      id: 'threat-intelligence',
      icon: FileCode,
      title: t('products.vietguard.features.bottomFeatures.1.title'),
      description: t('products.vietguard.features.bottomFeatures.1.description'),
      category: t('products.vietguard.features.bottomFeatures.1.title'),
      color: 'emerald'
    },
    {
      id: 'whitehub',
      icon: Users,
      title: t('products.vietguard.features.bottomFeatures.2.title'),
      description: t('products.vietguard.features.bottomFeatures.2.description'),
      category: t('products.vietguard.features.bottomFeatures.2.title'),
      color: 'orange'
    },
    {
      id: 'vuln-research',
      icon: Search,
      title: t('products.vietguard.features.bottomFeatures.3.title'),
      description: t('products.vietguard.features.bottomFeatures.3.description'),
      category: t('products.vietguard.features.bottomFeatures.3.title'),
      color: 'pink'
    },
    {
      id: 'automation',
      icon: Zap,
      title: t('products.vietguard.features.bottomFeatures.4.title'),
      description: t('products.vietguard.features.bottomFeatures.4.description'),
      category: t('products.vietguard.features.bottomFeatures.4.title'),
      color: 'indigo'
    },
    {
      id: 'data-lake',
      icon: Database,
      title: t('products.vietguard.features.bottomFeatures.5.title'),
      description: t('products.vietguard.features.bottomFeatures.5.description'),
      category: t('products.vietguard.features.bottomFeatures.5.title'),
      color: 'teal'
    }
  ]

  const [particles, setParticles] = useState<Array<{ left: number; top: number; delay: number; duration: number }> | null>(null)

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 5 + Math.random() * 10
      }))
    )
  }, [])

  return (
    <>
      <Header />
      
      {/* Hero Section with Video Background */}
      <div className="relative h-[85vh] overflow-hidden mt-20">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/vietguard/Video.mp4" type="video/mp4" />
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/90 via-emerald-800/85 to-teal-900/90" />
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles && particles.map((particle, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`,
                animationDuration: `${particle.duration}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative container-responsive h-full flex items-center">
          <div className="max-w-4xl">
            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                {t('products.vietguard.hero.title')}
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={200}>
              <p className="text-xl lg:text-2xl text-white/95 mb-8 leading-relaxed max-w-3xl">
                {t('products.vietguard.hero.subtitle')}
              </p>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={300}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-green-600 hover:bg-white/90 font-semibold text-lg px-8 py-5 rounded-xl shadow-2xl"
                  asChild
                >
                  <Link href="http://vietguardscan.icss.com.vn/" target="_blank">
                    {t('products.vietguard.hero.accessWebsite')}
                    <ExternalLink className="w-6 h-6 ml-3" />
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-3 border-white text-white hover:bg-white/10 font-semibold text-lg px-8 py-5 rounded-xl backdrop-blur-sm"
                  asChild
                >
                  <Link href="/lien-he">
                    {t('products.vietguard.hero.contactAdvice')}
                    <ArrowRight className="w-6 h-6 ml-3" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal direction="up" delay={400}>
              <div className="grid grid-cols-3 gap-6 mt-10 max-w-2xl">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">100+</div>
                  <div className="text-white/80 text-xs">{t('products.vietguard.hero.stats.customers')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">1B+</div>
                  <div className="text-white/80 text-xs">{t('products.vietguard.hero.stats.usersProtected')}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-1">99.9%</div>
                  <div className="text-white/80 text-xs">{t('products.vietguard.hero.stats.accuracy')}</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-scroll" />
          </div>
        </div>
      </div>

      {/* Shield Interactive Section - Why Trust VietGuard */}
      <Section spacing="sm" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <Badge className="mb-4 px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                <Star className="w-4 h-4 mr-2" />
                {t('products.vietguard.trust.badge')}
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="p-2 mb-4 text-3xl lg:text-4xl">
                {t('products.vietguard.trust.heading')}
              </AnimatedHeading>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t('products.vietguard.trust.description')}
              </p>
            </div>
          </ScrollReveal>

          {/* Trust Points */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {(t('products.vietguard.trust.points', { returnObjects: true }) as any[]).map((item: any, idx: number) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <Card className="p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group border-2 hover:border-green-500 h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    {idx === 0 && <Zap className="w-7 h-7 text-white" />}
                    {idx === 1 && <Users className="w-7 h-7 text-white" />}
                    {idx === 2 && <Award className="w-7 h-7 text-white" />}
                    {idx === 3 && <Globe className="w-7 h-7 text-white" />}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Interactive Shield Diagram */}
          <div className="relative py-8">
            <ScrollReveal direction="up">
              <div className="text-center mb-8">
                <h3 className="text-2xl lg:text-3xl font-bold mb-3">
                  {t('products.vietguard.applications.heading')}
                </h3>
                <p className="text-base text-muted-foreground">
                  {t('products.vietguard.applications.description')}
                </p>
              </div>
            </ScrollReveal>

            {/* Main Shield Diagram with SVG Polylines */}
            <div ref={containerRef} className="relative max-w-7xl mx-auto px-4" id="shield-container">
              {/* SVG for connecting polylines with absolute positioning */}
              {connectorLayout && (
                <svg
                  className="absolute inset-0 pointer-events-none z-0"
                  width={connectorLayout.width}
                  height={connectorLayout.height}
                  viewBox={`0 0 ${connectorLayout.width} ${connectorLayout.height}`}
                  preserveAspectRatio="none"
                >
                  <defs>
                  {/* Define gradients for lines */}
                  <linearGradient id="greenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="blueGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgb(168, 85, 247)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="rgb(168, 85, 247)" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="cyanGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="rgb(6, 182, 212)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="rgb(6, 182, 212)" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="emeraldGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="rgb(16, 185, 129)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="rgb(16, 185, 129)" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="orangeGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="rgb(249, 115, 22)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="rgb(249, 115, 22)" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="pinkGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="rgb(236, 72, 153)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="indigoGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.3" />
                  </linearGradient>
                  <linearGradient id="tealGradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="rgb(20, 184, 166)" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="rgb(20, 184, 166)" stopOpacity="0.3" />
                  </linearGradient>
                  
                  {/* Filters for glow effects */}
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Polylines from top features to center - dynamic alignment */}
                {topAnchors.map((anchor, idx) => {
                  const feature = topFeatures[idx]
                  if (!feature) return null

                  const colorGradient = feature.color === 'green' ? 'greenGradient' :
                                        feature.color === 'blue' ? 'blueGradient' :
                                        'purpleGradient'

                  const entryY = connectorLayout.shieldTop + 50
                  const baselineY = connectorLayout.shieldTop - 20
                  const turnY = Math.min(entryY - 10, Math.max(anchor.y + 30, baselineY))
                  const points = `${anchor.x},${anchor.y} ${anchor.x},${turnY} ${connectorLayout.centerX},${turnY} ${connectorLayout.centerX},${entryY}`

                  return (
                    <g key={feature.id}>
                      <polyline
                        points={points}
                        stroke={`url(#${colorGradient})`}
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="8,4"
                        className="animate-dash"
                        filter="url(#glow)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  )
                })}

                {/* Polylines from center to bottom features - dynamic alignment */}
                {bottomAnchors.map((anchor, idx) => {
                  const feature = bottomFeatures[idx]
                  if (!feature) return null

                  const colorGradient = feature.color === 'cyan' ? 'cyanGradient' :
                                        feature.color === 'emerald' ? 'emeraldGradient' :
                                        feature.color === 'orange' ? 'orangeGradient' :
                                        feature.color === 'pink' ? 'pinkGradient' :
                                        feature.color === 'indigo' ? 'indigoGradient' :
                                        'tealGradient'

                  const entryY = connectorLayout.shieldBottom - 50
                  const baselineY = connectorLayout.shieldBottom + 20
                  const turnY = Math.max(entryY + 20, Math.min(baselineY, anchor.y - 30))
                  const points = `${connectorLayout.centerX},${entryY} ${connectorLayout.centerX},${turnY} ${anchor.x},${turnY} ${anchor.x},${anchor.y}`

                  return (
                    <g key={feature.id}>
                      <polyline
                        points={points}
                        stroke={`url(#${colorGradient})`}
                        strokeWidth="3"
                        fill="none"
                        strokeDasharray="8,4"
                        className="animate-dash"
                        filter="url(#glow)"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  )
                })}
                
                {/* Central shield glow circles - removed for cleaner look */}
              </svg>
              )}

              {/* Top Row Features */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-10 relative z-30">
                {topFeatures.map((feature, idx) => {
                  const Icon = feature.icon
                  const isHovered = hoveredFeature === feature.id
                  const colorClass = feature.color === 'green' ? 'border-green-500/30 hover:border-green-500 shadow-green-500/20' :
                                     feature.color === 'blue' ? 'border-blue-500/30 hover:border-blue-500 shadow-blue-500/20' :
                                     'border-purple-500/30 hover:border-purple-500 shadow-purple-500/20'
                  const bgClass = feature.color === 'green' ? 'from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30' :
                                  feature.color === 'blue' ? 'from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30' :
                                  'from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30'
                  const iconBgClass = feature.color === 'green' ? 'bg-gradient-to-br from-green-500 to-emerald-600' :
                                      feature.color === 'blue' ? 'bg-gradient-to-br from-blue-500 to-cyan-600' :
                                      'bg-gradient-to-br from-purple-500 to-pink-600'
                  
                  return (
                    <div
                      key={feature.id}
                      className="relative group"
                      ref={el => {
                        topCardRefs.current[idx] = el
                      }}
                    >
                      <Card 
                        className={`p-4 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-2 ${colorClass} bg-gradient-to-br ${bgClass} relative overflow-hidden cursor-pointer h-full backdrop-blur-sm flex flex-col items-center justify-center text-center`}
                        onMouseEnter={() => setHoveredFeature(feature.id)}
                        onMouseLeave={() => setHoveredFeature(null)}
                      >
                        {/* Animated background effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Shine effect */}
                        <div className="absolute -inset-full top-0 block h-full w-1/2 transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:opacity-30 group-hover:animate-shine" />
                        
                        <div className="relative z-10 text-center">
                          <div className={`w-10 h-10 rounded-xl ${iconBgClass} flex items-center justify-center mb-2 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-5 h-5 text-white" />
                          </div>
                          <h5 className="font-bold text-[10px] leading-tight">{feature.title}</h5>
                        </div>
                      </Card>
                      
                      {/* Enhanced Tooltip */}
                      {isHovered && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-6 z-[9999] w-72 animate-fade-in-up">
                          <Card className="p-5 shadow-2xl border-3 border-current bg-white dark:bg-gray-900 backdrop-blur-xl">
                            <div className="flex items-start gap-3 mb-3">
                              <div className={`w-10 h-10 rounded-lg ${iconBgClass} flex items-center justify-center flex-shrink-0`}>
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <h4 className="font-bold text-sm leading-tight">{feature.title}</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {feature.description}
                            </p>
                            <div className="mt-3 pt-3 border-t border-border">
                              <span className="text-xs font-semibold text-primary">{feature.category}</span>
                            </div>
                          </Card>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Central Shield Image with Enhanced Design */}
              <div className="relative flex items-center justify-center my-10 lg:my-12 z-10" ref={shieldRef}>
                {/* Outer glow rings - SMALLER */}
                <div className="absolute w-[140px] h-[140px] md:w-[240px] md:h-[240px] lg:w-[280px] lg:h-[280px] rounded-full border-2 border-green-500/20 animate-pulse-slow" />
                <div className="absolute w-[120px] h-[120px] md:w-[210px] md:h-[210px] lg:w-[250px] lg:h-[250px] rounded-full border-2 border-emerald-500/30 animate-pulse-slow" style={{ animationDelay: '1s' }} />
                <div className="absolute w-[100px] h-[100px] md:w-[180px] md:h-[180px] lg:w-[220px] lg:h-[220px] rounded-full border-2 border-teal-500/40 animate-pulse-slow" style={{ animationDelay: '2s' }} />
                
                {/* Gradient background */}
                <div className="absolute w-[240px] h-[160px] md:w-[360px] md:h-[220px] lg:w-[420px] lg:h-[260px] rounded-3xl bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10 blur-3xl" />
                
                {/* Main shield container */}
                <div className="relative w-[220px] h-[140px] md:w-[320px] md:h-[200px] lg:w-[380px] lg:h-[230px] overflow-visible group">
                  {/* Shield image */}
                  <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110">
                    <Image
                      src="/vietguard/anh6.png"
                      alt="VietGuard Shield"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                    />
                  </div>
                  
                  {/* Floating particles around shield - REMOVED */}
                </div>
                
                {/* Shield label */}
                
              </div>

              {/* Bottom Row Features */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-10 relative z-10">
                {bottomFeatures.map((feature, idx) => {
                  const Icon = feature.icon
                  const isHovered = hoveredFeature === feature.id
                  const colorMap: Record<string, string> = {
                    'cyan': 'border-cyan-500/30 hover:border-cyan-500 shadow-cyan-500/20',
                    'emerald': 'border-emerald-500/30 hover:border-emerald-500 shadow-emerald-500/20',
                    'orange': 'border-orange-500/30 hover:border-orange-500 shadow-orange-500/20',
                    'pink': 'border-pink-500/30 hover:border-pink-500 shadow-pink-500/20',
                    'indigo': 'border-indigo-500/30 hover:border-indigo-500 shadow-indigo-500/20',
                    'teal': 'border-teal-500/30 hover:border-teal-500 shadow-teal-500/20'
                  }
                  const bgMap: Record<string, string> = {
                    'cyan': 'from-cyan-50 to-sky-50 dark:from-cyan-950/30 dark:to-sky-950/30',
                    'emerald': 'from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30',
                    'orange': 'from-orange-50 to-amber-50 dark:from-orange-950/30 dark:to-amber-950/30',
                    'pink': 'from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/30',
                    'indigo': 'from-indigo-50 to-violet-50 dark:from-indigo-950/30 dark:to-violet-950/30',
                    'teal': 'from-teal-50 to-cyan-50 dark:from-teal-950/30 dark:to-cyan-950/30'
                  }
                  const iconBgMap: Record<string, string> = {
                    'cyan': 'bg-gradient-to-br from-cyan-500 to-sky-600',
                    'emerald': 'bg-gradient-to-br from-emerald-500 to-teal-600',
                    'orange': 'bg-gradient-to-br from-orange-500 to-amber-600',
                    'pink': 'bg-gradient-to-br from-pink-500 to-rose-600',
                    'indigo': 'bg-gradient-to-br from-indigo-500 to-violet-600',
                    'teal': 'bg-gradient-to-br from-teal-500 to-cyan-600'
                  }
                  
                  return (
                    <div
                      key={feature.id}
                      className="relative group"
                      ref={el => {
                        bottomCardRefs.current[idx] = el
                      }}
                    >
                      <Card 
                        className={`p-4 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border-2 ${colorMap[feature.color]} bg-gradient-to-br ${bgMap[feature.color]} relative overflow-hidden cursor-pointer h-full backdrop-blur-sm flex flex-col items-center justify-center text-center`}
                        onMouseEnter={() => setHoveredFeature(feature.id)}
                        onMouseLeave={() => setHoveredFeature(null)}
                      >
                        {/* Animated background effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Shine effect */}
                        <div className="absolute -inset-full top-0 block h-full w-1/2 transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-0 group-hover:opacity-30 group-hover:animate-shine" />
                        
                        <div className="relative z-10 text-center">
                          <div className={`w-12 h-12 rounded-xl ${iconBgMap[feature.color]} flex items-center justify-center mb-2 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <h5 className="font-bold text-[11px] leading-tight">{feature.title}</h5>
                        </div>
                      </Card>
                      
                      {/* Enhanced Tooltip */}
                      {isHovered && (
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 z-[9999] w-72 animate-fade-in-down">
                          <Card className="p-5 shadow-2xl border-3 border-current bg-white dark:bg-gray-900 backdrop-blur-xl">
                            <div className="flex items-start gap-3 mb-3">
                              <div className={`w-10 h-10 rounded-lg ${iconBgMap[feature.color]} flex items-center justify-center flex-shrink-0`}>
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <h4 className="font-bold text-sm leading-tight">{feature.title}</h4>
                            </div>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                              {feature.description}
                            </p>
                            <div className="mt-3 pt-3 border-t border-border">
                              <span className="text-xs font-semibold text-primary">{feature.category}</span>
                            </div>
                          </Card>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Before & After Comparison Section */}
      <Section spacing="sm" background="muted">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-12">
              <Badge className="mb-4 px-5 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 inline-flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                {t('products.vietguard.beforeAfter.badge')}
              </Badge>
              <AnimatedHeading as="h2" gradient className="p-2 mt-3 mb-3 text-2xl lg:text-3xl">
                {t('products.vietguard.beforeAfter.heading')}
              </AnimatedHeading>
              <p className="text-base text-muted-foreground mb-4 leading-relaxed max-w-3xl mx-auto">
                {t('products.vietguard.beforeAfter.description')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Before Images */}
            <ScrollReveal direction="left">
              <div className="space-y-6">
                <div className="text-center mb-4">
                  <Badge variant="destructive" className="px-4 py-2 text-sm font-bold">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    {t('products.vietguard.beforeAfter.beforeLabel')}
                  </Badge>
                </div>
                
                <Card className="relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 border-2 border-red-200 dark:border-red-800">
                  <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
                    <Image
                      src="/vietguard/before1.png"
                      alt="Before VietGuard 1"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-900/90 to-transparent p-4">
                    <p className="text-white font-semibold text-sm">
                      {t('products.vietguard.beforeAfter.before1')}
                    </p>
                  </div>
                </Card>

                <Card className="relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 border-2 border-red-200 dark:border-red-800">
                  <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
                    <Image
                      src="/vietguard/before2.png"
                      alt="Before VietGuard 2"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-red-900/90 to-transparent p-4">
                    <p className="text-white font-semibold text-sm">
                      {t('products.vietguard.beforeAfter.before2')}
                    </p>
                  </div>
                </Card>
              </div>
            </ScrollReveal>

            {/* After Images */}
            <ScrollReveal direction="right">
              <div className="space-y-6">
                <div className="text-center mb-4">
                  <Badge className="px-4 py-2 text-sm font-bold bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                    <ShieldCheck className="w-4 h-4 mr-2" />
                    {t('products.vietguard.beforeAfter.afterLabel')}
                  </Badge>
                </div>
                
                <Card className="relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 border-2 border-green-200 dark:border-green-800">
                  <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
                    <Image
                      src="/vietguard/after1.png"
                      alt="After VietGuard 1"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/90 to-transparent p-4">
                    <p className="text-white font-semibold text-sm">
                      {t('products.vietguard.beforeAfter.after1')}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    {t('products.vietguard.beforeAfter.protectedLabel')}
                  </div>
                </Card>

                <Card className="relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 border-2 border-green-200 dark:border-green-800">
                  <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px]">
                    <Image
                      src="/vietguard/after2.png"
                      alt="After VietGuard 2"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-900/90 to-transparent p-4">
                    <p className="text-white font-semibold text-sm">
                      {t('products.vietguard.beforeAfter.after2')}
                    </p>
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Check className="w-3 h-3" />
                    {t('products.vietguard.beforeAfter.protectedLabel')}
                  </div>
                </Card>
              </div>
            </ScrollReveal>
          </div>

          {/* Key Benefits */}
          <ScrollReveal direction="up" delay={200}>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 text-center border-2 border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">{t('products.vietguard.beforeAfter.benefit1Title')}</h3>
                <p className="text-sm text-muted-foreground">{t('products.vietguard.beforeAfter.benefit1Desc')}</p>
              </Card>

              <Card className="p-6 text-center border-2 border-green-500/50 bg-gradient-to-br from-green-50/50 to-emerald-50/50 dark:from-green-950/20 dark:to-emerald-950/20">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">{t('products.vietguard.beforeAfter.benefit2Title')}</h3>
                <p className="text-sm text-muted-foreground">{t('products.vietguard.beforeAfter.benefit2Desc')}</p>
              </Card>

              <Card className="p-6 text-center border-2 border-primary/20 hover:border-primary/50 transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold mb-2">{t('products.vietguard.beforeAfter.benefit3Title')}</h3>
                <p className="text-sm text-muted-foreground">{t('products.vietguard.beforeAfter.benefit3Desc')}</p>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Activation & Deployment Section */}
      <Section spacing="sm" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-8">
              <Badge className="mb-4 px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white border-0 inline-flex items-center">
                <Zap className="w-4 h-4 mr-2" />
                {t('products.vietguard.activation.badge')}
              </Badge>
              <AnimatedHeading as="h2" gradient className="p-2 mt-3 mb-3 text-2xl lg:text-3xl">
                {t('products.vietguard.activation.heading')}
              </AnimatedHeading>
              <p className="text-base text-muted-foreground mb-4 leading-relaxed max-w-3xl mx-auto">
                {t('products.vietguard.activation.description')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <div className="space-y-6">
                    {(t('products.vietguard.activation.items', { returnObjects: true }) as any[]).map((item: any, idx: number) => (
                      <div key={idx} className="flex items-start gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                          {idx === 0 && <Zap className="w-6 h-6 text-white" />}
                          {idx === 1 && <TrendingUp className="w-6 h-6 text-white" />}
                          {idx === 2 && <Layers className="w-6 h-6 text-white" />}
                          {idx === 3 && <Users className="w-6 h-6 text-white" />}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                          <p className="text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <Card className="relative overflow-hidden border-2 border-blue-200 dark:border-blue-800 h-64 md:h-96 lg:h-[520px] w-full">
                  <div className="relative w-full h-full">
                    <Image
                      src="https://sonic.com.vn/wp-content/uploads/2024/06/569abb72-6952-4c8e-a915-5e9ed2de7639.png"
                      alt={t('products.vietguard.activation.cardTitle')}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 lg:p-10 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{t('products.vietguard.activation.cardTitle')}</h3>
                    <p className="text-white/90 text-sm md:text-base">{t('products.vietguard.activation.cardDescription')}</p>
                  </div>
                </Card>
              </ScrollReveal>
            </div>
        </div>
      </Section>

      {/* Multi-Platform Section */}
      <Section spacing="sm" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <Badge className="mb-4 px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
                <Smartphone className="w-4 h-4 mr-2" />
                {t('products.vietguard.multiPlatform.badge')}
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="mb-4 p-2 text-3xl lg:text-4xl">
                {t('products.vietguard.multiPlatform.heading')}
              </AnimatedHeading>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t('products.vietguard.multiPlatform.description')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(t('products.vietguard.multiPlatform.items', { returnObjects: true }) as any[]).map((item: any, idx: number) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <Card className="p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border-2 hover:border-purple-500 h-full">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${idx === 0 ? 'bg-gradient-to-br from-green-500 to-emerald-500' : idx === 1 ? 'bg-gradient-to-br from-blue-500 to-cyan-500' : 'bg-gradient-to-br from-purple-500 to-pink-500'}`}>
                    {idx === 0 && <Smartphone className="w-7 h-7 text-white" />}
                    {idx === 1 && <Code className="w-7 h-7 text-white" />}
                    {idx === 2 && <ShieldCheck className="w-7 h-7 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed">{item.desc}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose VietGuard Section */}
      <Section spacing="sm" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-10">
              <Badge className="mb-4 px-5 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white border-0">
                <Award className="w-4 h-4 mr-2" />
                {t('products.vietguard.whyChoose.badge')}
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="p-2 mb-4 text-3xl lg:text-3xl">
                {t('products.vietguard.whyChoose.heading')}
              </AnimatedHeading>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                {t('products.vietguard.whyChoose.description')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {(t('products.vietguard.whyChoose.benefits', { returnObjects: true }) as any[]).map((item: any, idx: number) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <Card className="p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 group border-2 hover:border-orange-500 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full" />
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10 ${idx === 0 ? 'bg-gradient-to-br from-blue-500 to-cyan-500' : idx === 1 ? 'bg-gradient-to-br from-green-500 to-emerald-500' : 'bg-gradient-to-br from-purple-500 to-pink-500'}`}>
                    {idx === 0 && <TrendingUp className="w-7 h-7 text-white" />}
                    {idx === 1 && <FileCheck className="w-7 h-7 text-white" />}
                    {idx === 2 && <Eye className="w-7 h-7 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold mb-3 relative z-10">{item.title}</h3>
                  <p className="text-muted-foreground text-base leading-relaxed mb-4 relative z-10">{item.desc}</p>
                  <div className="pt-4 border-t border-border relative z-10">
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400">{item.stat}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          {/* Compliance Logos */}
          <ScrollReveal direction="up">
            <Card className="p-6 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border-2 border-orange-200 dark:border-orange-800">
              <h3 className="text-xl font-bold text-center mb-6">{t('products.vietguard.complianceBlock.heading')}</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-5 items-center justify-items-center">
                {(t('products.vietguard.complianceBlock.standards', { returnObjects: true }) as string[]).map((standard, idx) => (
                  <div key={idx} className="text-center">
                    <div className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center mb-2 shadow-lg">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <div className="text-sm font-semibold">{standard}</div>
                  </div>
                ))}
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section spacing="sm" background="gradient">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <Card className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 p-10 lg:p-16 text-center border-none">
              {/* Animated Background */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700" />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-1000" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
                  {t('products.vietguard.finalCta.title')}
                </h2>
                
                <p className="text-xl text-white/95 mb-8 max-w-3xl mx-auto leading-relaxed">
                  {t('products.vietguard.finalCta.description')}
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
                  <Button 
                    size="lg" 
                    className="text-lg px-10 py-6 bg-white text-green-600 hover:bg-white/90 font-bold rounded-2xl shadow-2xl hover:scale-105 transition-transform"
                    asChild
                  >
                    <Link href="http://vietguardscan.icss.com.vn/" target="_blank">
                      {t('products.vietguard.hero.experienceNow')}
                      <ExternalLink className="w-5 h-5 ml-3" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    className="text-lg px-10 py-6 bg-white/10 text-white border-3 border-white hover:bg-white/20 font-bold rounded-2xl backdrop-blur-md hover:scale-105 transition-transform"
                    asChild
                  >
                    <Link href="/lien-he">
                      {t('products.vietguard.hero.scheduleConsultation')}
                      <ArrowRight className="w-5 h-5 ml-3" />
                    </Link>
                  </Button>
                </div>

                {/* Contact Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-4xl mx-auto text-white/90">
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Lock className="w-5 h-5" />
                    </div>
                    <span className="text-base">{(t('products.vietguard.finalCta.bullets', { returnObjects: true }) as string[])?.[0]}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <span className="text-base">{(t('products.vietguard.finalCta.bullets', { returnObjects: true }) as string[])?.[1]}</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="text-base">{(t('products.vietguard.finalCta.bullets', { returnObjects: true }) as string[])?.[2]}</span>
                  </div>
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
