'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollReveal } from '@/components/ui/scroll-reveal'
import { AnimatedHeading } from '@/components/ui/animated-heading'
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
} from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ChatbotPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [hoveredUseCase, setHoveredUseCase] = useState<number | null>(null)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const deploymentRef = useRef<HTMLDivElement>(null)

  const features = [
    {
      icon: MessageSquare,
      title: 'Messaging API & SDK',
      subtitle: 'Chat 1-1, nhóm, kênh mở',
      description: 'Tích hợp đơn giản, hỗ trợ đầy đủ cho chat thời gian thực như iMessage/Zalo',
      benefits: ['Thread replies', 'Rich media', 'Message editing', 'Real-time sync']
    },
    {
      icon: Phone,
      title: 'Voice & Video Call',
      subtitle: 'Cuộc gọi HD chuẩn',
      description: 'Gọi thoại/video chất lượng cao với mã hóa bảo mật đầu cuối',
      benefits: ['HD quality', 'Auto adaptation', 'End-to-end encryption', 'Group calls']
    },
    {
      icon: Brain,
      title: 'AI Chatbot & Trợ lý',
      subtitle: 'Tự động CSKH 24/7',
      description: 'Tự động hóa với AI, tóm tắt nội dung và dịch thuật đa ngôn ngữ',
      benefits: ['24/7 automation', 'Real-time translation', 'Conversation summary', 'Smart routing']
    },
    {
      icon: BarChart3,
      title: 'Console & BI Analytics',
      subtitle: 'Dashboard theo thời gian thực',
      description: 'Giám sát mọi metric, lọc nội dung tự động bằng AI',
      benefits: ['Real-time monitoring', 'AI-powered filtering', 'User insights', 'Custom reports']
    },
  ]

  const painPoints = [
    {
      icon: AlertCircle,
      title: 'Chi phí ẩn khổng lồ',
      description: '10+ kỹ sư, 6+ tháng, $40,000+ trước khi ra mắt',
    },
    {
      icon: TrendingUp,
      title: 'Rủi ro hạ tầng',
      description: 'Tin nhắn trễ, mất dữ liệu, sập hệ thống khi livestream/sự kiện',
    },
    {
      icon: ShieldCheck,
      title: 'Bảo mật phức tạp',
      description: 'Ngăn rác, nội dung độc hại, tuân thủ tiêu chuẩn quốc tế',
    },
  ]

  const useCases = [
    {
      icon: Users,
      title: 'Game & Entertainment',
      description: 'Chat trong game, lập đội, trao đổi vật phẩm mà không thoát app',
      color: 'from-purple-500 to-pink-500',
      stat: '220K+ users'
    },
    {
      icon: Heart,
      title: 'Social & Hidol',
      description: 'Fan nhắn trực tiếp với thần tượng qua VIP ticket hoặc subscription',
      color: 'from-red-500 to-pink-500',
      stat: 'Direct messaging'
    },
    {
      icon: ShoppingBag,
      title: 'E-commerce & Retail',
      description: 'Chat tư vấn sản phẩm trực tiếp, tăng tỷ lệ chốt đơn 3x',
      color: 'from-blue-500 to-cyan-500',
      stat: '+300% conversion'
    },
    {
      icon: Stethoscope,
      title: 'Healthcare & Eldercare',
      description: 'Gọi video giám sát sức khỏe từ xa, tích hợp robot chăm sóc',
      color: 'from-green-500 to-emerald-500',
      stat: 'Remote monitoring'
    },
  ]

  const comparisonData = [
    {
      feature: 'Thời gian ra mắt',
      inHouse: '6 - 9 tháng',
      vAIChat: '1 - 2 tuần'
    },
    {
      feature: 'Chi phí ban đầu',
      inHouse: '> $40,000',
      vAIChat: 'Dùng bao nhiêu trả bấy nhiêu'
    },
    {
      feature: 'Độ ổn định',
      inHouse: 'Phụ thuộc IT',
      vAIChat: '99.9% (AWS/GCP)'
    },
    {
      feature: 'Bảo trì & Cập nhật',
      inHouse: 'Tốn nhân lực',
      vAIChat: 'Tự động & Miễn phí'
    },
    {
      feature: 'Tính năng AI',
      inHouse: 'Khó tích hợp',
      vAIChat: 'Có sẵn & tích hợp'
    },
  ]

  const deploymentSteps = [
    {
      number: '01',
      title: 'Đăng ký & Nhận API Key',
      description: 'Truy cập Console V AIChat và tạo tài khoản developer'
    },
    {
      number: '02',
      title: 'Tích hợp SDK',
      description: 'Vài dòng code nhúng khung chat vào iOS/Android/Web'
    },
    {
      number: '03',
      title: 'Tùy chỉnh UI',
      description: 'Dùng UI Kit đồng bộ với màu sắc thương hiệu của bạn'
    },
    {
      number: '04',
      title: 'Go-Live',
      description: 'Bắt đầu kết nối người dùng và theo dõi tăng trưởng'
    },
  ]

  const faqs = [
    {
      question: 'V AIChat có hỗ trợ chuyển đổi dữ liệu từ nền tảng cũ sang không?',
      answer: 'Có, chúng tôi cung cấp công cụ và hỗ trợ kỹ thuật để bạn di chuyển dữ liệu mượt mà nhất. Đội ngũ migration specialist sẽ hỗ trợ 24/7.'
    },
    {
      question: 'Nếu ứng dụng của tôi có hàng triệu người dùng, hệ thống có tải nổi không?',
      answer: 'Hệ thống được xây dựng trên hạ tầng Auto-scaling của AWS/GCP, đã kiểm chứng qua các tựa game hàng triệu người chơi của Gamania. Bạn có thể yên tâm.'
    },
    {
      question: 'Chi phí được tính như thế nào?',
      answer: 'Chúng tôi có gói linh hoạt dựa trên MAU (Monthly Active Users) hoặc số lượng tin nhắn, tối ưu chi phí cho cả Startup lẫn doanh nghiệp lớn.'
    },
    {
      question: 'Bạn cung cấp hỗ trợ kỹ thuật như thế nào?',
      answer: 'Hỗ trợ 24/7 qua email, chat, và dedicated account manager cho các gói enterprise. SLA response time: 30 phút cho critical issues.'
    },
    {
      question: 'Có thể tùy chỉnh giao diện chat không?',
      answer: 'Có, hoàn toàn tùy chỉnh được. White-label solution cho phép bạn kiểm soát 100% UI/UX theo ý muốn.'
    },
  ]

  const trustBadges = [
    {
      icon: Award,
      text: 'Top 1 Công ty Giải trí Số Đài Loan'
    },
    {
      icon: Users,
      text: '220,000+ Người dùng hoạt động mỗi ngày'
    },
    {
      icon: Cloud,
      text: 'Đối tác AWS & Google Cloud'
    },
  ]

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
                {/* Super Headline */}
                <div className="inline-block">
                  <Badge className="px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-sm border border-blue-500/50 text-white-300">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Nền tảng Giao tiếp In-App
                  </Badge>
                </div>

                {/* Main Headline */}
                <div>
                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight">
                    <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-400 bg-clip-text text-transparent">
                      V AIChat
                    </span>
                  </h1>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                    Đừng để người dùng rời bỏ ứng dụng
                  </h2>
                </div>

                {/* Detailed Description */}
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                  Tăng 40% tỷ lệ giữ chân người dùng với Communication Hub mạnh mẽ từ Gamania Group. Tích hợp Nhắn tin, Gọi điện và AI Bot chỉ trong 48 giờ. Không phải lo code, không phải lo infrastructure.
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-4 py-4">
                  <ScrollReveal direction="up" delay={100}>
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                      <Award className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-foreground/90">Top 1 Công ty Giải trí Đài Loan</span>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal direction="up" delay={150}>
                    <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                      <Users className="w-5 h-5 text-cyan-400" />
                      <span className="text-sm text-foreground/90">220K+ Người dùng</span>
                    </div>
                  </ScrollReveal>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <ScrollReveal direction="up" delay={200}>
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg px-8 py-7 rounded-xl shadow-xl"
                    >
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Bắt đầu dùng thử miễn phí
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </ScrollReveal>

                  <ScrollReveal direction="up" delay={250}>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-cyan-500/50 hover:bg-cyan-500/10 text-foreground font-bold text-lg px-8 py-7 rounded-xl"
                    >
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Xem Case Study
                    </Button>
                  </ScrollReveal>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Image */}
            <ScrollReveal direction="up" delay={200}>
              <Card className="relative h-96 lg:h-[500px] overflow-hidden border-2 border-cyan-200 dark:border-cyan-800 rounded-3xl shadow-2xl">
                <Image
                  src="https://bluedata.vn/wp-content/uploads/2024/11/ai-cham-soc-khach-hang.webp"
                  alt="V AIChat Communication Platform"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 via-cyan-900/30 to-transparent" />
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Section 2: Pain Points */}
      <Section background="muted" spacing="md">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2">
                <AlertCircle className="w-4 h-4 mr-2" />
                Nỗi Đau Thực Tế
              </Badge>
              <h2 className="text-5xl font-bold mb-6">
                Tại sao tự xây dựng chat là một <span className="text-red-500">sai lầm</span> đắt giá?
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Nhiều doanh nghiệp đánh giá thấp sự phức tạp của việc xây dựng tính năng nhắn tin thời gian thực
              </p>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="grid md:grid-cols-1 gap-6">
              {painPoints.map((point, idx) => (
                <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                  <Card className="p-6 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-200/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                        <point.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{point.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up">
              <Card className="relative h-96 overflow-hidden border-2 border-red-200 dark:border-red-800 rounded-2xl shadow-xl">
                <Image
                  src="https://lh7-us.googleusercontent.com/F7OUk_L3MIrf13rhUYn3-O4lQkfEbiC5Blju5S0OEuJLrZN7qX1OgIJSbdVNCOz89hKa564ZuKtp2KYbZqioKs5UZQoNncD9r9XihZE0DFhnhVjC64hI_i1gyIkO9uP_iOCiK3S82MQ9TtThKXjb5lI"
                  alt="Chat Development Challenges"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-red-900/30 to-transparent" />
              </Card>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={300}>
            <Card className="mt-12 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 border-2 border-blue-200/50 dark:border-blue-800/50">
              <div className="flex items-start gap-4">
                <Check className="w-8 h-8 text-green-500 shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Giải pháp: V AIChat</h3>
                  <p className="text-lg text-foreground/90">
                    Chúng tôi gánh vác mọi rủi ro kỹ thuật để bạn tập trung 100% vào kinh doanh. Không phải lo code, không phải lo infrastructure, chỉ cần tích hợp API và bắt đầu kiếm tiền.
                  </p>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* Section 3: Deep Dive Solutions */}
      <Section background="gradient" spacing="md">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                Giải Pháp Chi Tiết
              </Badge>
              <h2 className="text-5xl font-bold mb-6">4 Tính Năng Mạnh Mẽ</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Mỗi tính năng được thiết kế để giải quyết một bài toán cụ thể của doanh nghiệp
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon
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
                        <p className="text-sm font-semibold text-cyan-600">Tính năng nâng cao:</p>
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

      {/* Section 4: Comparison Table */}
      <Section background="default" spacing="md">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2">
                <Gauge className="w-4 h-4 mr-2" />
                So Sánh Trực Quan
              </Badge>
              <h2 className="text-5xl font-bold mb-6">Tự xây dựng vs V AIChat</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Dữ liệu thực tế từ 50+ doanh nghiệp đã sử dụng V AIChat
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={100}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left py-4 px-6 font-bold text-lg">Tiêu chí</th>
                    <th className="text-left py-4 px-6 font-bold text-lg text-red-500">Tự xây dựng</th>
                    <th className="text-left py-4 px-6 font-bold text-lg text-green-500">V AIChat</th>
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
      <Section background="gradient" spacing="md">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2">
                <Target className="w-4 h-4 mr-2" />
                Kịch Bản Ứng Dụng
              </Badge>
              <h2 className="text-5xl font-bold mb-6">Các Ngành Đã Thành Công</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Từ Game đến Healthcare, V AIChat đều chứng minh hiệu quả
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((useCase, idx) => {
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
      <Section background="muted" spacing="md">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2">
                <Lock className="w-4 h-4 mr-2" />
                Bảo Mật & Tin Cậy
              </Badge>
              <h2 className="text-5xl font-bold mb-6">Dữ Liệu Của Bạn Luôn An Toàn</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Tuân thủ tiêu chuẩn bảo mật quốc tế, giám sát 24/7
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <ScrollReveal direction="left">
              <Card className="p-8 border-2 border-green-200/50 dark:border-green-800/50 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Award className="w-8 h-8 text-green-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Chứng chỉ ISO</h3>
                      <p className="text-muted-foreground">Tuân thủ ISO 27001, SOC 2 và tiêu chuẩn bảo mật quốc tế khắt khe nhất</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-8 h-8 text-green-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Giám sát 24/7</h3>
                      <p className="text-muted-foreground">Phát hiện và xử lý sự cố ngay lập tức trước khi người dùng nhận ra</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-8 h-8 text-green-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Chủ quyền Dữ liệu</h3>
                      <p className="text-muted-foreground">Bạn sở hữu 100% dữ liệu người dùng và nội dung hội thoại</p>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="right">
              <Card className="p-8 border-2 border-blue-200/50 dark:border-blue-800/50 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Cloud className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">White-label Solution</h3>
                      <p className="text-muted-foreground">Chúng tôi đứng sau, nhưng thương hiệu hiển thị là của bạn</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Gauge className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">Auto-scaling Hạ tầng</h3>
                      <p className="text-muted-foreground">Dựa trên AWS/GCP, đã kiểm chứng qua hàng triệu người dùng</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <TrendingUp className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold mb-2">99.9% Uptime Guarantee</h3>
                      <p className="text-muted-foreground">SLA cam kết, hoặc bạn được tiền hoàn lại</p>
                    </div>
                  </div>
                </div>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* Section 7: Deployment Steps */}
      <Section background="default" spacing="md">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2">
                <Zap className="w-4 h-4 mr-2" />
                Quy Trình Triển Khai
              </Badge>
              <h2 className="text-5xl font-bold mb-6">4 Bước Đến Thành Công</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Từ đăng ký đến go-live chỉ trong vài ngày
              </p>
            </div>
          </ScrollReveal>

          <div ref={deploymentRef} className="grid md:grid-cols-4 gap-6 mb-12">
            {deploymentSteps.map((step, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 100}>
                <Card className="p-8 relative hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
                  {/* Step Number */}
                  <div className="absolute top-4 right-4">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl">
                      {step.number}
                    </div>
                  </div>

                  {/* Connection Line */}
                  {idx < deploymentSteps.length - 1 && (
                    <div className="hidden md:block absolute top-24 left-full w-6 h-1 bg-gradient-to-r from-cyan-500 to-transparent" />
                  )}

                  <div className="pr-20">
                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={500}>
            <Card className="p-8 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border-2 border-blue-500/30 text-center">
              <h3 className="text-2xl font-bold mb-4">Sẵn sàng bắt đầu?</h3>
              <p className="text-lg text-muted-foreground mb-6">
                Không cần credit card, không cần contract dài. Chỉ cần 5 phút để setup tài khoản developer của bạn.
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold"
                onClick={() => {
                  window.location.href = 'https://v-aichat.com/signup';
                }}
              >
                Đăng Ký Miễn Phí Ngay
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* Section 8: FAQs */}
      <Section background="muted" spacing="md">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <div className="text-center mb-16">
              <Badge className="mb-4 px-4 py-2">
                <MessageCircle className="w-4 h-4 mr-2" />
                Câu Hỏi Thường Gặp
              </Badge>
              <h2 className="text-5xl font-bold mb-6">Những Câu Hỏi Từ CTO/CEO</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Câu trả lời chi tiết từ engineering team của chúng tôi
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
                Câu hỏi khác không có trong danh sách?
              </p>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-500/50 hover:bg-cyan-500/10"
              >
                Liên hệ với Sales Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* Final CTA Section */}
      <Section background="gradient" spacing="md">
        <div className="container-responsive text-center">
          <ScrollReveal direction="up">
            <h2 className="text-6xl font-bold mb-6">Lợi ích Tương Đương $40,000 - Giá Chỉ 48 Giờ</h2>
            <p className="text-2xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Bạn không chỉ tiết kiệm chi phí. Bạn còn nhận được sự hỗ trợ 24/7 từ team Gamania với 20+ năm kinh nghiệm xây dựng app quy mô lớn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg px-8 py-7"
                onClick={() => {
                  window.location.href = 'https://v-aichat.com/signup';
                }}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Bắt Đầu Thử Nghiệm Ngay
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cyan-500/50 hover:bg-cyan-500/10 font-bold text-lg px-8 py-7"
                onClick={() => {
                  window.location.href = 'https://v-aichat.com/schedule-demo';
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                Lên Lịch Demo
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Footer />
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
