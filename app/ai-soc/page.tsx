'use client'

import Image from 'next/image'
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
  Brain,
  Eye,
  Activity,
  AlertTriangle,
  TrendingUp,
  Target
} from 'lucide-react'

export default function AiSocConsultingPage() {
  const { t } = useTranslation()

  const features = [
    {
      icon: Brain,
      title: "AI Phân tích Hành vi (UEBA)",
      description: "Sử dụng machine learning để phát hiện các hành vi bất thường của người dùng và thực thể trong hệ thống"
    },
    {
      icon: AlertTriangle,
      title: "Phát hiện Mối đe dọa Tiên tiến",
      description: "Tự động nhận diện và cảnh báo các mối đe dọa APT, zero-day attacks và ransomware"
    },
    {
      icon: Activity,
      title: "Giám sát Thời gian Thực",
      description: "Theo dõi liên tục 24/7 với dashboard tập trung, cảnh báo tức thì khi phát hiện sự cố"
    },
    {
      icon: Eye,
      title: "Tự động hóa Phản ứng",
      description: "SOAR tự động xử lý các sự cố theo playbook được định nghĩa trước, giảm thời gian phản ứng"
    }
  ]

  const benefits = [
    "Giảm 80% thời gian phản ứng với sự cố an ninh mạng",
    "Phát hiện mối đe dọa với độ chính xác 99.5%",
    "Giảm tải 70% công việc cho đội ngũ SOC",
    "Tuân thủ các chuẩn bảo mật quốc tế"
  ]

  return (
    <>
      <Header />
      
      <div className="relative h-[600px] overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-300" />
        </div>
        
        <div className="relative container-responsive h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-20">
            <ScrollReveal direction="left">
              <div>
                <Badge className="mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm border-white/30 text-white">
                  <Shield className="w-4 h-4 mr-2" />
                  {t('aiSoc.badge')}
                </Badge>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                  {t('aiSoc.title')}
                </h1>
                
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  {t('aiSoc.intro')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-indigo-600 hover:bg-white/90 font-semibold text-lg"
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
                    src="/aisoc.png"
                    alt="AI SOC"
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

      <Section spacing="md" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                {t('aiSoc.features')}
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="p-3 mb-6">
                {t('aiSoc.features')}
              </AnimatedHeading>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Tái định nghĩa an ninh mạng – Từ phản ứng bị động đến phòng thủ tiên đoán
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-max">
            {features.map((feature, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <Card className="p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6 shrink-0">
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

      <Section spacing="md" background="muted">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <Badge className="mb-4 px-4 py-2">
                  <Zap className="w-4 h-4 mr-2" />
                  {t('aiSoc.why')}
                </Badge>
                <AnimatedHeading as="h2" gradient className="p-3 mb-6">
                  {t('aiSoc.why')}
                </AnimatedHeading>
                <p className="text-lg text-muted-foreground mb-8">
                  Giải pháp AI SOC mang lại hiệu quả vượt trội so với SOC truyền thống
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-indigo-500 flex items-center justify-center shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <Card className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-2 border-indigo-200 dark:border-indigo-800">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-background rounded-lg">
                    <div>
                      <div className="text-sm text-muted-foreground">Mối đe dọa phát hiện/tháng</div>
                      <div className="text-3xl font-bold text-indigo-600">50K+</div>
                    </div>
                    <AlertTriangle className="w-12 h-12 text-indigo-500" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-background rounded-lg">
                    <div>
                      <div className="text-sm text-muted-foreground">Thời gian phản ứng</div>
                      <div className="text-3xl font-bold text-green-600">&lt;5min</div>
                    </div>
                    <Activity className="w-12 h-12 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-background rounded-lg">
                    <div>
                      <div className="text-sm text-muted-foreground">Độ chính xác</div>
                      <div className="text-3xl font-bold text-indigo-600">99.5%</div>
                    </div>
                    <Target className="w-12 h-12 text-indigo-500" />
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      <Section spacing="md" background="gradient">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <Card className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 p-12 lg:p-20 text-center border-none">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-300" />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Bảo vệ doanh nghiệp với AI SOC
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Liên hệ với chúng tôi để được tư vấn giải pháp AI SOC phù hợp nhất
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 bg-white text-indigo-600 hover:bg-white/90 font-semibold"
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
