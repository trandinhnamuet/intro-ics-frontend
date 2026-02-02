'use client'

import { useState } from 'react'
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
  ShieldCheck, 
  Check, 
  ArrowRight, 
  Star, 
  Zap, 
  Lock,
  FileSearch,
  AlertTriangle,
  CheckCircle2,
  Award,
  Users,
  Shield
} from 'lucide-react'

export default function CsaDlpPage() {
  const { t } = useTranslation()

  const features = [
    {
      icon: Shield,
      title: t('products.csaDlp.features.endpoint.title'),
      description: t('products.csaDlp.features.endpoint.description')
    },
    {
      icon: Lock,
      title: t('products.csaDlp.features.dlp.title'),
      description: t('products.csaDlp.features.dlp.description')
    },
    {
      icon: FileSearch,
      title: t('products.csaDlp.features.monitoring.title'),
      description: t('products.csaDlp.features.monitoring.description')
    },
    {
      icon: CheckCircle2,
      title: t('products.csaDlp.features.compliance.title'),
      description: t('products.csaDlp.features.compliance.description')
    }
  ]

  const benefits = [
    t('products.csaDlp.benefits.item1'),
    t('products.csaDlp.benefits.item2'),
    t('products.csaDlp.benefits.item3'),
    t('products.csaDlp.benefits.item4')
  ]

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-300" />
        </div>
        
        <div className="relative container-responsive h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-20">
            <ScrollReveal direction="left">
              <div>
                <Badge className="mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm border-white/30 text-white">
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  {t('products.csaDlp.badge')}
                </Badge>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                  CSA-Endpoint
                </h1>
                
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  {t('products.csaDlp.subtitle')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-purple-600 hover:bg-white/90 font-semibold text-lg"
                  >
                    {t('common.learnMore')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold text-lg"
                  >
                    {t('common.contactUs')}
                  </Button>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 rounded-3xl transform rotate-6" />
                <Card className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                  <Image
                    src="/csa.jpg"
                    alt="CSA-Endpoint"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <Section spacing="sm" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                {t('products.csaDlp.features.title')}
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="p-3 mb-6">
                {t('products.csaDlp.features.heading')}
              </AnimatedHeading>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                {t('products.csaDlp.features.description')}
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-max">
            {features.map((feature, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <Card className="p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow">{feature.description}</p>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section spacing="sm" background="muted">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <Badge className="mb-4 px-4 py-2">
                  <Zap className="w-4 h-4 mr-2" />
                  {t('products.csaDlp.benefits.title')}
                </Badge>
                <AnimatedHeading as="h2" gradient className="p-3 mb-6">
                  {t('products.csaDlp.benefits.heading')}
                </AnimatedHeading>
                <p className="text-lg text-muted-foreground mb-8">
                  {t('products.csaDlp.benefits.description')}
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <Card className="p-8 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border-2 border-purple-200 dark:border-purple-800">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-background rounded-lg">
                    <div>
                      <div className="text-sm text-muted-foreground">{t('products.csaDlp.stats.endpoints')}</div>
                      <div className="text-3xl font-bold text-purple-600">10K+</div>
                    </div>
                    <Shield className="w-12 h-12 text-purple-500" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-background rounded-lg">
                    <div>
                      <div className="text-sm text-muted-foreground">{t('products.csaDlp.stats.incidents')}</div>
                      <div className="text-3xl font-bold text-green-600">98%</div>
                    </div>
                    <CheckCircle2 className="w-12 h-12 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-background rounded-lg">
                    <div>
                      <div className="text-sm text-muted-foreground">{t('products.csaDlp.stats.compliance')}</div>
                      <div className="text-3xl font-bold text-purple-600">100%</div>
                    </div>
                    <Award className="w-12 h-12 text-purple-500" />
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section spacing="sm" background="gradient">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <Card className="relative overflow-hidden bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700 p-12 lg:p-20 text-center border-none">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-300" />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  {t('products.csaDlp.cta.heading')}
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  {t('products.csaDlp.cta.description')}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 bg-white text-purple-600 hover:bg-white/90 font-semibold"
                  >
                    {t('common.learnMore')}
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button 
                    size="lg" 
                    className="text-lg px-8 bg-white/20 text-white border-2 border-white hover:bg-white/30 font-semibold backdrop-blur-sm"
                  >
                    {t('common.contactUs')}
                    <ArrowRight className="w-5 h-5 ml-2" />
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
