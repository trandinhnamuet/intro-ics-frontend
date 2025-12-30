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
  Leaf, 
  Check, 
  ArrowRight, 
  Star, 
  Zap, 
  Users,
  Globe,
  TrendingUp,
  Award,
  Target,
  BarChart3
} from 'lucide-react'

export default function GiaiPhapESGPage() {
  const { t } = useTranslation()

  const features = [
    {
      icon: Leaf,
      title: "Môi trường (Environmental)",
      description: "Đánh giá và tối ưu hóa quản lý tác động môi trường, giảm phát thải carbon, sử dụng tài nguyên bền vững"
    },
    {
      icon: Users,
      title: "Xã hội (Social)",
      description: "Xây dựng văn hóa doanh nghiệp, đảm bảo quyền lợi người lao động, trách nhiệm với cộng đồng"
    },
    {
      icon: Award,
      title: "Quản trị (Governance)",
      description: "Minh bạch hóa quy trình quản lý, tuân thủ pháp luật, xây dựng hệ thống quản trị hiệu quả"
    },
    {
      icon: BarChart3,
      title: "Báo cáo & Đo lường",
      description: "Thiết lập KPIs, thu thập dữ liệu, báo cáo ESG theo chuẩn quốc tế (GRI, SASB, TCFD)"
    }
  ]

  const benefits = [
    "Tư vấn chiến lược ESG phù hợp với đặc thù doanh nghiệp",
    "Xây dựng lộ trình triển khai từng bước cụ thể",
    "Hỗ trợ đo lường và báo cáo theo chuẩn quốc tế",
    "Đào tạo đội ngũ nội bộ về ESG"
  ]

  return (
    <>
      <Header />
      
      <div className="relative h-[600px] overflow-hidden mt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-300" />
        </div>
        
        <div className="relative container-responsive h-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full py-20">
            <ScrollReveal direction="left">
              <div>
                <Badge className="mb-6 px-4 py-2 bg-white/20 backdrop-blur-sm border-white/30 text-white">
                  <Leaf className="w-4 h-4 mr-2" />
                  {t('esg.badge')}
                </Badge>
                
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                  {t('esg.title')}
                </h1>
                
                <p className="text-xl text-white/90 mb-8 leading-relaxed">
                  {t('esg.description')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-green-600 hover:bg-white/90 font-semibold text-lg"
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
                    src="esp.png"
                    alt="ESG Solutions"
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

      <Section spacing="xl" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2">
                <Star className="w-4 h-4 mr-2" />
                Ba trụ cột ESG
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="p-3 mb-6">
                Giải pháp ESG toàn diện
              </AnimatedHeading>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Từ áp lực tuân thủ đến lợi thế cạnh tranh - Lộ trình chiến lược cho doanh nghiệp Việt
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-max">
            {features.map((feature, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <Card className="p-8 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-6 shrink-0">
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

      <Section spacing="xl" background="muted">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="left">
              <div>
                <Badge className="mb-4 px-4 py-2">
                  <Zap className="w-4 h-4 mr-2" />
                  {t('esg.why')}
                </Badge>
                <AnimatedHeading as="h2" gradient className="p-3 mb-6">
                  {t('esg.why')}
                </AnimatedHeading>
                <p className="text-lg text-muted-foreground mb-8">
                  Chúng tôi cung cấp giải pháp ESG toàn diện, từ chiến lược đến triển khai
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-foreground">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="right">
              <Card className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-200 dark:border-green-800">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-background rounded-lg">
                    <div>
                      <div className="text-sm text-muted-foreground">Tiết kiệm chi phí</div>
                      <div className="text-3xl font-bold text-green-600">20-30%</div>
                    </div>
                    <TrendingUp className="w-12 h-12 text-green-500" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-background rounded-lg">
                    <div>
                      <div className="text-sm text-muted-foreground">Tăng giá trị thương hiệu</div>
                      <div className="text-3xl font-bold text-emerald-600">+40%</div>
                    </div>
                    <Globe className="w-12 h-12 text-emerald-500" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-white dark:bg-background rounded-lg">
                    <div>
                      <div className="text-sm text-muted-foreground">Đáp ứng chuẩn quốc tế</div>
                      <div className="text-3xl font-bold text-green-600">100%</div>
                    </div>
                    <Target className="w-12 h-12 text-green-500" />
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      <Section spacing="xl" background="gradient">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <Card className="relative overflow-hidden bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 p-12 lg:p-20 text-center border-none">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-300" />
              </div>
              <div className="relative z-10">
                <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                  Bắt đầu hành trình ESG của bạn
                </h2>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Liên hệ với chúng tôi để được tư vấn lộ trình ESG phù hợp với doanh nghiệp
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="text-lg px-8 bg-white text-green-600 hover:bg-white/90 font-semibold"
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
