'use client'

import { useState } from 'react'
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
  Award
} from 'lucide-react'

export default function AiSocPage() {
  const [activeStep, setActiveStep] = useState(0)

  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Quá tải cảnh báo",
      items: [
        "Hệ thống phát sinh hàng triệu alert mỗi ngày",
        "Riêng tại Việt Nam: 12.300+ cuộc tấn công mạng/ngày",
        "SOC truyền thống không thể xử lý thủ công với độ chính xác cao"
      ],
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Target,
      title: "Tấn công ngày càng tinh vi",
      items: [
        "83+ chiến dịch APT mỗi năm nhắm vào doanh nghiệp",
        "Ngân hàng – Tài chính, Năng lượng – Viễn thông, Cơ quan nhà nước",
        "Hacker ẩn mình nhiều tuần/tháng thay vì tấn công nhanh"
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: "Khủng hoảng nhân sự SOC",
      items: [
        "Thiếu trầm trọng SOC Analyst cấp cao",
        "Chi phí duy trì SOC 24/7 cực lớn",
        "Burnout – sai sót – phản ứng chậm"
      ],
      color: 'from-red-600 to-pink-500'
    },
    {
      icon: Activity,
      title: "Thời gian phản ứng không chấp nhận được",
      items: [
        "SOC truyền thống: vài ngày → vài tuần",
        "AI SOC: vài giây → vài phút",
        "Khác biệt rõ rệt về khả năng phản ứng sự cố"
      ],
      color: 'from-pink-500 to-rose-500'
    }
  ]

  const pillars = [
    {
      icon: "Database",
      number: "1",
      title: "Dữ liệu khổng lồ – Google Scale",
      items: [
        "Phân tích 50 tỷ tệp/ngày",
        "Bảo vệ 5 tỷ thiết bị toàn cầu",
        "Khả năng lưu trữ – truy vấn log không giới hạn"
      ]
    },
    {
      icon: "Brain",
      number: "2",
      title: "Phân tích hành vi – UEBA",
      items: [
        "Machine Learning học hành vi người dùng & hệ thống",
        "Phát hiện: Tài khoản bị chiếm quyền, Nội gián, Lateral Movement",
        "Không phụ thuộc chữ ký (signature-less)"
      ]
    },
    {
      icon: "Zap",
      number: "3",
      title: "Tự động hóa phản ứng – SOAR",
      items: [
        "Playbook phản ứng tự động: Cô lập endpoint, Ngắt kết nối tài khoản",
        "Chặn IP / Domain độc hại tự động",
        "Giảm MTTR > 70%"
      ]
    }
  ]

  const features = [
    {
      icon: "Target",
      title: "Risk Scoring Dashboard",
      description: "Chấm điểm rủi ro theo ngữ cảnh thực, ưu tiên xử lý mối đe dọa nguy hiểm nhất. Không còn \"alert noise\""
    },
    {
      icon: "Search",
      title: "Investigate Studio",
      description: "Truy vết sâu toàn bộ pipeline dữ liệu, drill-down từ alert → log → hành vi. Hỗ trợ forensic & threat hunting"
    },
    {
      icon: "Map",
      title: "MITRE ATT&CK Mapping",
      description: "Tự động ánh xạ kỹ thuật tấn công, hiểu rõ hacker đang ở giai đoạn nào của kill chain"
    },
    {
      icon: "FileText",
      title: "Custom Reporting",
      description: "Báo cáo Compliance (ISO 27001, NIST, PCI-DSS…), báo cáo Executive cho Ban điều hành"
    },
    {
      icon: "CheckCircle",
      title: "Case Management",
      description: "Quản lý toàn bộ vòng đời sự cố, gán nhiệm vụ – theo dõi SLA – đóng case khoa học"
    }
  ]

  const steps = [
    {
      number: "1",
      title: "Ingestion – Thu thập",
      description: "Cloud, Endpoint, Network, IAM, SaaS. Log tập trung, chuẩn hóa tức thời"
    },
    {
      number: "2",
      title: "Detection – Phát hiện",
      description: "AI/ML đối soát với threat intelligence toàn cầu. Phát hiện bất thường chưa từng biết (Zero-day)"
    },
    {
      number: "3",
      title: "Analysis – Phân tích",
      description: "AI + Chuyên gia ICS phân tích ngữ cảnh. Loại bỏ false positive"
    },
    {
      number: "4",
      title: "Response – Phản ứng",
      description: "Kích hoạt playbook tự động. Hạn chế lan rộng trong vài giây"
    },
    {
      number: "5",
      title: "Recovery – Phục hồi",
      description: "Hỗ trợ khôi phục. Đề xuất vá lỗ hổng – cải thiện posture an ninh"
    }
  ]

  const whyIcsPoints = [
    {
      icon: "DollarSign",
      title: "Tối ưu chi phí",
      description: "Không cần đầu tư SOC vật lý đắt đỏ. Mô hình linh hoạt theo quy mô doanh nghiệp"
    },
    {
      icon: "Zap",
      title: "Công nghệ hàng đầu thế giới",
      description: "Đối tác triển khai Gurucul AI SOC. Tiếp cận nền tảng AI SOC tiên tiến nhất hiện nay"
    },
    {
      icon: "Users",
      title: "Đội ngũ tại Việt Nam",
      description: "Hỗ trợ 24/7 – tiếng Việt. Hiểu rõ đặc thù hạ tầng & mối đe dọa trong nước"
    }
  ]

  const featureIcons: Record<string, any> = {
    Target, Search, Map, FileText, CheckCircle
  }

  const pillarIcons: Record<string, any> = {
    Database, Brain, Zap
  }

  const whyIcsIcons: Record<string, any> = {
    DollarSign, Zap, Users
  }

  return (
    <>
      <Header />

      {/* SECTION 1 - HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-32">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700" />
        
        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-300 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-300 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

        <div className="relative container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <ScrollReveal direction="left" duration={0.8}>
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="inline-flex px-4 py-2 bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 transition-all">
                    <Shield className="w-4 h-4 mr-2" />
                    Mạnh mẽ. Thông minh. Tự động.
                  </Badge>

                  <div className="space-y-3">
                    <h1 className="text-6xl lg:text-7xl font-black text-white leading-tight">
                      AI SOC
                    </h1>
                    <h2 className="text-3xl lg:text-4xl font-bold text-white/90">
                      Cách mạng hóa vận hành An ninh mạng bằng Trí tuệ Nhân tạo
                    </h2>
                  </div>

                  <p className="text-xl text-white/80 max-w-xl leading-relaxed pt-4">
                    SOC truyền thống đã lỗi thời. AI SOC là tiêu chuẩn mới.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-4">
                  <p className="text-white font-semibold text-lg">
                    Giải pháp AI SOC của ICS kết hợp nền tảng phân tích dữ liệu quy mô toàn cầu của Google với công nghệ phân tích hành vi tiên tiến từ Gurucul, giúp doanh nghiệp:
                  </p>
                  <div className="space-y-3">
                    {[
                      "Phát hiện APT, tấn công nội gián, mã độc thế hệ mới trong vài giây",
                      "Tự động hóa đến 90% quy trình phản ứng sự cố",
                      "Giảm thiểu cảnh báo giả, tập trung vào nguy cơ thực sự"
                    ].map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <Rocket className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                        <span className="text-white/90">{point}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-yellow-200 font-semibold pt-2 italic">
                    Không chỉ là phát hiện – mà là hành động ngay lập tức.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-white/90 font-bold text-lg h-14 group"
                  >
                    Nhận tư vấn giải pháp AI SOC
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 font-bold text-lg h-14"
                  >
                    Xem tài liệu Workshop Walkthrough
                  </Button>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Visual */}
            <ScrollReveal direction="right" duration={0.8} delay={200}>
              <div className="relative h-[500px] flex items-center justify-center">
                <Card className="relative z-10 w-full h-full bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl overflow-hidden group hover:shadow-4xl transition-all duration-500">
                  <Image
                    src="https://vietnetco.vn/wp-content/uploads/2022/03/soc-and-noc.jpeg"
                    alt="AI SOC Dashboard"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 via-transparent to-transparent" />
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <style jsx>{`
          @keyframes blob {
            0%, 100% { transform: translate(0, 0) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px); }
            50% { transform: translateY(20px) translateX(-10px); }
          }
          .animate-blob {
            animation: blob 7s infinite;
          }
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}</style>
      </section>

      {/* SECTION 2 - PAIN POINTS */}
      <Section spacing="xl" background="muted">
        <div className="container-responsive space-y-16">
          <ScrollReveal direction="up">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge className="inline-flex px-4 py-2 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-700 text-red-700 dark:text-red-300">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Nỗi đau thị trường
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="text-4xl lg:text-5xl">
                Tại sao SOC truyền thống không còn đủ sức bảo vệ bạn?
              </AnimatedHeading>
              <p className="text-xl text-muted-foreground">
                Doanh nghiệp đang đối mặt với một thực tế khắc nghiệt:
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {painPoints.map((point, idx) => {
              const IconComponent = point.icon
              return (
                <ScrollReveal key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 100}>
                  <Card className="p-6 hover:shadow-xl transition-all duration-300 group overflow-hidden relative h-full">
                    <div className={`absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br ${point.color} opacity-10 group-hover:opacity-20 transition-opacity`} />
                    
                    <div className="relative z-10 space-y-4">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${point.color} flex items-center justify-center`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      
                      <h3 className="text-2xl font-bold">{point.title}</h3>
                      
                      <div className="space-y-2">
                        {(point.items as string[]).map((item, i) => (
                          <div key={i} className="flex items-start gap-2 text-muted-foreground">
                            <ChevronRight className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal direction="up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <Card className="relative h-80 overflow-hidden border border-red-200 dark:border-red-800 rounded-2xl shadow-lg">
                <Image
                  src="https://cmcts.com.vn/media/data/news/2022/Th%C3%A1ng_2/CMC_SOC_HN.jpeg"
                  alt="Network Security Threats"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 to-transparent" />
              </Card>
              <Card className="p-8 bg-gradient-to-r from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20 border-2 border-red-200 dark:border-red-800">
                <p className="text-2xl font-bold text-red-700 dark:text-red-300 mb-4">
                  👉 SOC truyền thống chỉ "nhìn thấy", nhưng không kịp hành động.
                </p>
                <p className="text-muted-foreground">Giải pháp AI SOC của ICS giúp bạn không chỉ phát hiện mà còn phản ứng ngay lập tức, giảm thiểu thiệt hại từ các cuộc tấn công mạng.</p>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* SECTION 3 - SOLUTION */}
      <Section spacing="xl" background="default">
        <div className="container-responsive space-y-16">
          <ScrollReveal direction="up">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge className="inline-flex px-4 py-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                <Lightbulb className="w-4 h-4 mr-2" />
                Hệ sinh thái AI SOC
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="text-4xl lg:text-5xl">
                Giải pháp AI SOC của ICS
              </AnimatedHeading>
              <p className="text-xl text-muted-foreground">
                Hệ sinh thái AI SOC toàn diện
              </p>
              <p className="text-lg text-muted-foreground font-medium">
                ICS triển khai AI SOC thế hệ mới dựa trên sự kết hợp giữa Google Chronicle / Google Security Operations và Gurucul REVEAL Platform
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(pillars as any[]).map((pillar, idx) => {
              const IconComponent = pillarIcons[pillar.icon]
              return (
                <ScrollReveal key={idx} direction="up" delay={idx * 150}>
                  <Card className="p-8 bg-gradient-to-br from-white to-blue-50 dark:from-slate-900 dark:to-blue-950/30 border-2 border-blue-200 dark:border-blue-800 hover:shadow-2xl transition-all duration-300 group overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full opacity-0 group-hover:opacity-10 transition-opacity blur-2xl" />
                    <div className="relative space-y-6">
                      <div className="flex items-start justify-between">
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                          {IconComponent && <IconComponent className="w-8 h-8 text-white" />}
                        </div>
                        <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-2xl font-bold text-blue-600 dark:text-blue-300">
                          {pillar.number}
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold leading-tight">{pillar.title}</h3>

                      <div className="space-y-3">
                        {(pillar.items as string[]).map((item, i) => (
                          <div key={i} className="flex items-start gap-3 text-muted-foreground">
                            <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal direction="up">
            <Card className="relative h-96 overflow-hidden border-2 border-blue-200 dark:border-blue-800 rounded-2xl shadow-xl">
              <Image
                src="https://cdn.nhandan.vn/images/22f099ca8bc7ae81aa2a8d3416a84bf8364c2dc7cb172c184e762ebbc2cb754b5d204972cbd19cea1a3cad94c163e7949be16c9ab954f20205dbb9b0c96bf803fedef1245da14724585117e3d663c8a060f756bb67b9d48b3e8ee90339ffde13/tri-tue-nhan-tao-ai-2-3436.jpg.webp"
                alt="AI Technology Infrastructure"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/60 via-blue-900/40 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <h3 className="text-3xl font-bold mb-2">Công nghệ AI tiên tiến</h3>
                  <p className="text-lg text-blue-100">Google Scale + Gurucul Intelligence</p>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* SECTION 4 - FEATURES */}
      <Section spacing="xl" background="muted">
        <div className="container-responsive space-y-16">
          <ScrollReveal direction="up">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge className="inline-flex px-4 py-2 bg-purple-100 dark:bg-purple-900/30 border border-purple-300 dark:border-purple-700 text-purple-700 dark:text-purple-300">
                <Zap className="w-4 h-4 mr-2" />
                Công nghệ đột phá
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="text-4xl lg:text-5xl">
                Công nghệ đột phá trong tầm tay bạn
              </AnimatedHeading>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(features as any[]).map((feature, idx) => {
              const IconComponent = featureIcons[feature.icon]
              return (
                <ScrollReveal key={idx} direction="up" delay={idx * 80}>
                  <Card className="p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group relative overflow-hidden h-full flex flex-col">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-purple-300 to-pink-300 opacity-0 group-hover:opacity-20 rounded-full transition-opacity blur-2xl" />
                    
                    <div className="relative z-10 space-y-4 flex-1">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
                      </div>

                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal direction="up">
            <Card className="relative h-80 overflow-hidden border-2 border-purple-200 dark:border-purple-800 rounded-2xl shadow-xl">
              <Image
                src="https://media.geeksforgeeks.org/wp-content/uploads/20240705124654/Real-time-analllytics.webp"
                alt="Real-time Monitoring & Analytics"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/60 via-pink-900/40 to-transparent" />
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* SECTION 5 - PROCESS */}
      <Section spacing="xl" background="default">
        <div className="container-responsive space-y-16">
          <ScrollReveal direction="up">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge className="inline-flex px-4 py-2 bg-amber-100 dark:bg-amber-900/30 border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-300">
                <TrendingUp className="w-4 h-4 mr-2" />
                Quy trình hoạt động
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="text-4xl lg:text-5xl">
                Chu trình khép kín
              </AnimatedHeading>
              <p className="text-xl text-muted-foreground">
                Xác định – Bảo vệ – Phát hiện – Phản ứng – Phục hồi
              </p>
            </div>
          </ScrollReveal>

          {/* Process Steps */}
          <div className="space-y-6">
            {(steps as any[]).map((step, idx) => (
              <ScrollReveal key={idx} direction={idx % 2 === 0 ? 'left' : 'right'} delay={idx * 100}>
                <div
                  className="cursor-pointer transition-all duration-300"
                  onClick={() => setActiveStep(activeStep === idx ? -1 : idx)}
                >
                  <Card
                    className={`p-6 transition-all duration-300 relative overflow-hidden ${
                      activeStep === idx
                        ? 'bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 border-amber-300 dark:border-amber-700 shadow-lg'
                        : 'hover:shadow-md'
                    }`}
                  >
                    <div className={`absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-amber-300 to-orange-300 opacity-${activeStep === idx ? '10' : '0'} rounded-full transition-opacity blur-3xl`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-6">
                        <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold text-2xl transform group-hover:scale-110 transition-transform`}>
                          {step.number}
                        </div>

                        <div className="flex-1 space-y-2">
                          <h3 className="text-2xl font-bold">{step.title}</h3>
                          <p className="text-muted-foreground text-lg">{step.description}</p>
                        </div>

                        <ChevronRight
                          className={`w-6 h-6 text-amber-500 flex-shrink-0 mt-1 transition-transform ${activeStep === idx ? 'rotate-90' : ''}`}
                        />
                      </div>

                      {activeStep === idx && (
                        <div className="mt-6 pt-6 border-t border-amber-200 dark:border-amber-800 animate-in fade-in">
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {['Nhanh chóng', 'Hiệu quả', 'Tự động', 'Chi tiết', 'Bảo mật', 'Tối ưu'].map((item, i) => (
                              <div key={i} className="flex items-center gap-2 text-sm">
                                <div className="w-2 h-2 rounded-full bg-amber-500" />
                                <span className="text-muted-foreground">{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Process Flow Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <ScrollReveal direction="up">
              <Card className="p-8 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/20 border-2 border-amber-200 dark:border-amber-800">
                <div className="flex items-center justify-between overflow-x-auto pb-4 md:pb-0">
                  {['Thu thập', 'Phát hiện', 'Phân tích', 'Phản ứng', 'Phục hồi'].map((phase, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="text-center min-w-[120px]">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-white font-bold mx-auto mb-2">
                          {idx + 1}
                        </div>
                        <p className="text-sm font-semibold text-foreground">{phase}</p>
                      </div>
                      {idx < 4 && <ArrowRight className="w-6 h-6 text-amber-500 mx-2 flex-shrink-0 hidden md:block" />}
                    </div>
                  ))}
                </div>
              </Card>
            </ScrollReveal>

            <ScrollReveal direction="up">
              <Card className="relative h-72 overflow-hidden border-2 border-amber-200 dark:border-amber-800 rounded-2xl shadow-xl">
                <Image
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeQsyuyYxxOLBhyphenhyphenPUOI-UHGn8mxloyzn4GBFnuh7p3h7XUB7Z2K2kWdI2A-k0v5GKJqRANeUQ8NZknDo1M5zTdqyYyTC3vAKThq201gtemBUHiFq1GjWc1VrfMPKS7knIFoV7mO-l20SaKKVbHs-t86wVFDEqjUz-VQkVXOiB6hD5QlzLVWdQYml3tPww/s790-rw-e365/sans.jpg"
                  alt="AI Security Operations Workflow"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/60 via-amber-900/40 to-transparent" />
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* SECTION 6 - WHY ICS */}
      <Section spacing="xl" background="muted">
        <div className="container-responsive space-y-16">
          <ScrollReveal direction="up">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge className="inline-flex px-4 py-2 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 text-green-700 dark:text-green-300">
                <Award className="w-4 h-4 mr-2" />
                Lý do chọn ICS
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="text-4xl lg:text-5xl">
                Tại sao chọn ICS?
              </AnimatedHeading>
              <p className="text-xl text-muted-foreground">
                Chuyên gia an ninh mạng đồng hành cùng doanh nghiệp Việt
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {(whyIcsPoints as any[]).map((point, idx) => {
              const IconComponent = whyIcsIcons[point.icon]
              return (
                <ScrollReveal key={idx} direction="up" delay={idx * 150}>
                  <Card className="p-8 bg-gradient-to-br from-white to-green-50 dark:from-slate-900 dark:to-green-950/30 border-2 border-green-200 dark:border-green-800 hover:shadow-2xl transition-all duration-300 group">
                    <div className="space-y-6">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center transform group-hover:scale-110 transition-transform">
                        {IconComponent && <IconComponent className="w-10 h-10 text-white" />}
                      </div>

                      <h3 className="text-2xl font-bold leading-tight">{point.title}</h3>
                      <p className="text-muted-foreground leading-relaxed text-lg">{point.description}</p>

                      <Link href="/contact" className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-semibold hover:gap-3 transition-all">
                        Tìm hiểu thêm <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </Card>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </Section>

      {/* SECTION 7 - RESOURCES & DOCUMENTS */}
      <Section spacing="xl" background="gradient">
        <div className="container-responsive space-y-12">
          <ScrollReveal direction="up">
            <div className="text-center space-y-6 max-w-3xl mx-auto">
              <Badge className="inline-flex px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 border border-indigo-300 dark:border-indigo-700 text-indigo-700 dark:text-indigo-300">
                <FileText className="w-4 h-4 mr-2" />
                Tài liệu & Case Study
              </Badge>
              <AnimatedHeading as="h2" gradient centered className="text-4xl lg:text-5xl text-white">
                Khám phá chi tiết cách AI SOC vận hành trong thực tế
              </AnimatedHeading>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up">
            <Card className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-blue-600 to-cyan-600 border-none p-12 lg:p-20">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse animation-delay-2000" />
              </div>

              <div className="relative z-10 space-y-8">
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto">
                    <FileText className="w-10 h-10 text-white" />
                  </div>

                  <div className="space-y-4">
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                      Tải ngay tài liệu "Gurucul Workshop Walkthrough" để:
                    </p>

                    <div className="space-y-2">
                      {[
                        "Hiểu rõ kiến trúc AI SOC",
                        "Xem demo quy trình xử lý sự cố thực tế",
                        "Đánh giá mức độ phù hợp với doanh nghiệp của bạn"
                      ].map((point, idx) => (
                        <div key={idx} className="flex items-start gap-3 justify-center">
                          <CheckCircle className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                          <span className="text-white/90">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button
                    size="lg"
                    className="bg-white text-indigo-600 hover:bg-white/90 font-bold text-lg h-14 px-8 group"
                  >
                    Tải tài liệu hướng dẫn vận hành SOC
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </Section>

      {/* Final CTA */}
      <Section spacing="xl" background="default">
        <div className="container-responsive">
          <ScrollReveal direction="up">
            <Card className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 border-none p-12 lg:p-16 text-center group">
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
                  Sẵn sàng chuyển đổi SOC của bạn?
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto">
                  Liên hệ với ICS ngay hôm nay để được tư vấn miễn phí về giải pháp AI SOC phù hợp với doanh nghiệp của bạn.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-white/90 font-bold text-lg h-14 group"
                  >
                    Liên hệ ngay
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 font-bold text-lg h-14"
                  >
                    Tải tài liệu
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
