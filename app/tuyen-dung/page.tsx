"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import {
  Briefcase,
  MapPin,
  DollarSign,
  Calendar,
  Users,
  TrendingUp,
  Shield,
  Code,
  Megaphone,
  ChevronRight,
  Mail,
  Phone,
  Clock,
  Award,
  Target,
  Zap,
  Heart,
  Star,
  CheckCircle2,
  ArrowRight
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

const jobListings = [
  {
    id: "marketing-staff",
    title: "Nhân viên Marketing Giải pháp Công nghệ",
    department: "Marketing",
    type: "Toàn thời gian",
    level: "Nhân viên",
    salary: "15-20 triệu++ VNĐ/tháng",
    location: "TT3-5 Khu đô thị mới Đại Kim, Hà Nội",
    icon: Megaphone,
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    tags: ["Content Creator", "Social Media", "GenZ"],
    description: "Sáng tạo nội dung và quản trị các kênh truyền thông cho các giải pháp công nghệ",
    mission: "Trở thành 'phù thủy nội dung' để lan tỏa sức mạnh của các giải pháp công nghệ trong hệ sinh thái sản phẩm của chúng tôi.",
    responsibilities: [
      "Quản trị và sáng tạo nội dung hàng ngày trên Social Media",
      "Viết bài blog, tin tức chuyên ngành về an ninh mạng, AI SOC",
      "Lên ý tưởng và viết kịch bản cho video ngắn, clip giới thiệu",
      "Phối hợp với team thiết kế/video sản xuất ấn phẩm truyền thông",
      "Hỗ trợ tổ chức hội thảo công nghệ, webinar và sự kiện"
    ],
    requirements: [
      "Độ tuổi: 24-27 tuổi",
      "Tối thiểu 1 năm kinh nghiệm Marketing, Content hoặc Social Media",
      "Khả năng viết lách tốt, tư duy ngôn ngữ linh hoạt",
      "Biết sử dụng Canva, Photoshop hoặc edit video",
      "Có khả năng đọc hiểu tài liệu tiếng Anh cơ bản"
    ],
    benefits: [
      "Thu nhập: 15-20 triệu++ VNĐ/tháng",
      "Thưởng hoa hồng theo hiệu suất",
      "Xét duyệt điều chỉnh lương 2 lần/năm",
      "Môi trường làm việc trẻ trung, sếp tâm lý",
      "Tham gia hoạt động thể thao: bóng đá, cầu lông"
    ]
  },
  {
    id: "sales-staff",
    title: "Nhân viên Kinh doanh Giải pháp Công nghệ",
    department: "Kinh doanh",
    type: "Toàn thời gian",
    level: "Nhân viên",
    salary: "15-20 triệu++ VNĐ/tháng",
    location: "TT3-5 Khu đô thị mới Đại Kim, Hà Nội",
    icon: TrendingUp,
    color: "bg-gradient-to-br from-green-500 to-emerald-500",
    tags: ["B2B Sales", "Consulting", "Tech Solutions"],
    description: "Tư vấn và phát triển khách hàng doanh nghiệp cho các giải pháp công nghệ",
    mission: "Trở thành chuyên gia tư vấn về chuyển đổi số, là cầu nối giữa ICS và khách hàng doanh nghiệp.",
    responsibilities: [
      "Khai thác và phát triển tệp khách hàng tiềm năng",
      "Tiếp cận khách hàng qua gặp gỡ trực tiếp, điện thoại, email",
      "Demo và tư vấn giải pháp công nghệ phù hợp",
      "Đàm phán và ký kết hợp đồng thành công"
    ],
    requirements: [
      "Độ tuổi: 21-45 tuổi, có 1-2 năm kinh nghiệm bán hàng",
      "Tốt nghiệp Cao đẳng trở lên: CNTT, AI, Cơ điện tử, Kinh doanh",
      "Đam mê kinh doanh, nhiệt huyết và 'máu lửa'",
      "Kỹ năng giao tiếp tốt, xử lý tình huống linh hoạt",
      "Ưu tiên có kinh nghiệm Sales sản phẩm công nghệ"
    ],
    benefits: [
      "Thu nhập: 15-20 triệu++ VNĐ/tháng",
      "Thưởng hoa hồng theo hiệu quả kinh doanh",
      "Đào tạo bởi Ban Giám đốc giàu kinh nghiệm",
      "Lộ trình phát triển rõ ràng",
      "Trang bị đầy đủ thiết bị, phụ cấp điện thoại"
    ]
  },
  {
    id: "security-engineer",
    title: "Kỹ sư Bảo mật (Security Engineer)",
    department: "Kỹ thuật",
    type: "Toàn thời gian",
    level: "Chuyên gia",
    salary: "Thỏa thuận theo năng lực",
    location: "TT3-5 Khu đô thị mới Đại Kim, Hà Nội",
    icon: Shield,
    color: "bg-gradient-to-br from-blue-600 to-cyan-500",
    tags: ["AI SOC", "Penetration Testing", "Mobile Security"],
    description: "Vận hành AI SOC và đảm bảo an toàn cho các hệ thống di động trọng yếu",
    mission: "Tham gia đội ngũ nòng cốt, vận hành hệ thống AI SOC hiện đại và bảo vệ các nền tảng di động trọng yếu.",
    responsibilities: [
      "Giám sát và phân tích sự kiện an toàn thông tin trên AI SOC",
      "Sử dụng AI để phát hiện cuộc tấn công tinh vi (APT)",
      "Penetration Testing cho ứng dụng iOS & Android",
      "Đánh giá lỗ hổng theo OWASP Mobile Top 10",
      "Triển khai và quản trị các thiết bị bảo mật (Firewall, IDS/IPS, WAF, SIEM)"
    ],
    requirements: [
      "Tối thiểu 2-3 năm kinh nghiệm An toàn thông tin",
      "Nắm vững giao thức mạng (TCP/IP), hệ điều hành (Linux, Windows)",
      "Thành thạo Burp Suite, MobSF, Frida, Wireshark, Nessus, SIEM/SOAR",
      "Ưu tiên có chứng chỉ: Security+, CEH, OSCP",
      "Có tư duy phân tích mã độc là lợi thế lớn"
    ],
    benefits: [
      "Mức lương xứng đáng với năng lực (2-3 năm kinh nghiệm)",
      "Làm việc với chuyên gia đầu ngành",
      "Tạo điều kiện thi chứng chỉ quốc tế (OSCP, CISSP)",
      "Lộ trình thăng tiến lên Senior/Lead",
      "Hoạt động ngoại khóa: Cầu lông, bóng đá hàng tuần"
    ]
  },
  {
    id: "marketing-director",
    title: "Giám đốc Marketing",
    department: "Marketing",
    type: "Toàn thời gian",
    level: "Quản lý cấp cao",
    salary: "Thỏa thuận + Hoa hồng cao",
    location: "TT3-5 Khu đô thị mới Đại Kim, Hà Nội",
    icon: Target,
    color: "bg-gradient-to-br from-orange-500 to-red-500",
    tags: ["Strategy", "B2B Marketing", "Brand Building"],
    description: "Xây dựng chiến lược Marketing tổng thể và hệ thống Lead Generation tự động hóa",
    mission: "Trở thành 'Nhà thiết kế tài ba' cho thương hiệu và chiến lược tăng trưởng của ICS.",
    responsibilities: [
      "Xây dựng chiến lược Go-to-market cho các dòng sản phẩm",
      "Nghiên cứu thị trường và xác định USP",
      "Triển khai chiến dịch Account-Based Marketing (ABM)",
      "Xây dựng và bảo vệ uy tín thương hiệu ICS",
      "Quản lý đội ngũ Marketing và tối ưu hóa ngân sách"
    ],
    requirements: [
      "Tối thiểu 5 năm kinh nghiệm Marketing",
      "Có kinh nghiệm quản lý (Manager/Head/Director) trong lĩnh vực B2B, SaaS, IT",
      "Tư duy chiến lược sắc bén, am hiểu B2B Customer Journey",
      "Nhạy bén với xu hướng công nghệ mới (AI, Blockchain, IoT)",
      "Tiếng Anh lưu loát"
    ],
    benefits: [
      "Thu nhập không giới hạn (Lương cứng + % Hoa hồng + Thưởng)",
      "Toàn quyền quyết định chiến lược và nhân sự",
      "Cơ hội thăng tiến lên CMO, Phó Tổng Giám đốc",
      "Bảo hiểm sức khỏe cao cấp",
      "Du lịch định kỳ, CLB thể thao"
    ]
  },
  {
    id: "sales-director",
    title: "Giám đốc Kinh doanh",
    department: "Kinh doanh",
    type: "Toàn thời gian",
    level: "Quản lý cấp cao",
    salary: "Thỏa thuận + Hoa hồng cao",
    location: "TT3-5 Khu đô thị mới Đại Kim, Hà Nội",
    icon: Users,
    color: "bg-gradient-to-br from-indigo-600 to-purple-600",
    tags: ["Enterprise Sales", "Team Building", "Strategic Partnerships"],
    description: "Dẫn dắt đội ngũ kinh doanh và chịu trách nhiệm chiến lược doanh thu",
    mission: "Trở thành 'Thuyền trưởng' bản lĩnh, chịu trách nhiệm toàn diện về chiến lược doanh thu và mở rộng thị phần.",
    responsibilities: [
      "Xây dựng chiến lược kinh doanh ngắn hạn và dài hạn",
      "Tuyển dụng, đào tạo và xây dựng đội ngũ Sales thiện chiến",
      "Thiết lập hệ thống KPI và quy trình bán hàng chuẩn mực",
      "Khai thác khách hàng chiến lược (Key Accounts)",
      "Đàm phán và chốt hợp đồng dự án quy mô lớn"
    ],
    requirements: [
      "Tối thiểu 5 năm kinh nghiệm kinh doanh CNTT",
      "Có ít nhất 2 năm ở vị trí quản lý tương đương",
      "Am hiểu sâu thị trường B2B, An ninh mạng, Chuyển đổi số",
      "Có mạng lưới quan hệ với khối Tài chính, Ngân hàng, Bất động sản",
      "Tiếng Anh giao tiếp tốt"
    ],
    benefits: [
      "Thu nhập không giới hạn (Lương cứng + % Hoa hồng + Thưởng)",
      "Quyền quyết định về nhân sự và chiến lược",
      "Cơ hội trở thành cổ đông hoặc Key Person",
      "Bảo hiểm sức khỏe cao cấp",
      "Du lịch định kỳ, phụ cấp công tác phí đầy đủ"
    ]
  }
]

export default function RecruitmentPage() {
  const [selectedJob, setSelectedJob] = useState(jobListings[0])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const SelectedIcon = selectedJob ? selectedJob.icon : Briefcase
  const selectedColor = selectedJob ? selectedJob.color : "bg-gradient-to-br from-purple-500 to-pink-500"

  return (
    <>
      <Header />

      {/* Hero Banner */}
      <div
        className="relative overflow-hidden text-white text-center py-32 w-full mt-24"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-semibold">Đang tuyển dụng 5 vị trí</span>
          </div>
          <h1 className="text-6xl font-bold text-white drop-shadow-lg mb-6">
            Gia nhập đội ngũ ICS
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Cùng chúng tôi xây dựng tương lai an toàn cho các doanh nghiệp Việt Nam
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg">
              <Briefcase className="mr-2 h-5 w-5" />
              Xem vị trí tuyển dụng
            </Button>
            <Button size="lg" variant="outline" className="bg-white/15 text-white backdrop-blur border border-white/30 hover:bg-white/25 hover:border-white/50">
              <Heart className="mr-2 h-5 w-5" />
              Tìm hiểu về ICS
            </Button>
          </div>
        </div>
      </div>

      <main className="min-h-screen bg-gray-50">
        <div className="w-full px-6 lg:px-16 py-12">
          <div className="flex gap-8">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 space-y-8">

              {/* Why Join ICS Section */}
              <Card className="border-t-4 border-t-purple-500 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Star className="w-6 h-6 text-yellow-500" />
                    Tại sao nên gia nhập ICS?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Công nghệ tiên tiến</h3>
                      <p className="text-sm text-gray-600">Làm việc với AI SOC, Smart Building, Mobile Security và các giải pháp công nghệ đột phá</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50">
                      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Phát triển nghề nghiệp</h3>
                      <p className="text-sm text-gray-600">Lộ trình thăng tiến rõ ràng, đào tạo chuyên sâu và cơ hội trở thành chuyên gia hàng đầu</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">Văn hóa trẻ trung</h3>
                      <p className="text-sm text-gray-600">Môi trường GenZ năng động, sếp tâm lý, hoạt động thể thao đa dạng</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Global Job Detail Dialog */}
              <Dialog open={isDialogOpen} onOpenChange={(open) => setIsDialogOpen(open)}>
                <DialogContent className="max-w-4xl h-[90vh] flex flex-col overflow-hidden">
                  <DialogHeader>
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-16 h-16 ${selectedColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <SelectedIcon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <DialogTitle className="text-2xl mb-2">{selectedJob?.title}</DialogTitle>
                        <DialogDescription className="flex flex-wrap gap-2">
                          <Badge variant="outline">{selectedJob?.department}</Badge>
                          <Badge variant="outline">{selectedJob?.level}</Badge>
                          <Badge variant="outline">{selectedJob?.type}</Badge>
                        </DialogDescription>
                      </div>
                    </div>
                  </DialogHeader>

                  <ScrollArea className="flex-1 min-h-0 pr-4">
                    <div className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-purple-500" />
                          <div>
                            <div className="text-xs text-gray-500">Địa điểm</div>
                            <div className="font-semibold text-sm">{selectedJob?.location}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-green-500" />
                          <div>
                            <div className="text-xs text-gray-500">Mức lương</div>
                            <div className="font-semibold text-sm text-green-600">{selectedJob?.salary}</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <Target className="w-5 h-5 text-purple-600" />
                          Sứ mệnh của bạn
                        </h3>
                        <p className="text-gray-700 leading-relaxed bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                          {selectedJob?.mission}
                        </p>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600" />
                          Mô tả công việc
                        </h3>
                        <ul className="space-y-2">
                          {selectedJob?.responsibilities?.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-orange-600" />
                          Yêu cầu ứng viên
                        </h3>
                        <ul className="space-y-2">
                          {selectedJob?.requirements?.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <Heart className="w-5 h-5 text-red-600" />
                          Quyền lợi hấp dẫn
                        </h3>
                        <ul className="space-y-2">
                          {selectedJob?.benefits?.map((item, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-200">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                          <Mail className="w-5 h-5 text-purple-600" />
                          Cách thức ứng tuyển
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                            <div>
                              <div className="font-semibold">Gửi CV qua Email:</div>
                              <a href="mailto:CV@icss.com.vn" className="text-purple-600 hover:underline">
                                CV@icss.com.vn
                              </a>
                              <div className="text-sm text-gray-600 mt-1">
                                Tiêu đề: <span className="font-mono bg-white px-2 py-1 rounded">ICS - {selectedJob?.title} - Họ và Tên</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                              <div className="font-semibold">Liên hệ trực tiếp:</div>
                              <a href="tel:0972363821" className="text-green-600 hover:underline">
                                Ms. Diễm Quỳnh (HCVP) - 0972.363.821
                              </a>
                            </div>
                          </div>
                          <div className="mt-4 p-4 bg-white rounded border border-purple-200">
                            <p className="text-sm text-gray-700 font-semibold mb-2">📋 Hồ sơ bao gồm:</p>
                            <ul className="text-sm text-gray-600 space-y-1 ml-4">
                              <li>• CV thông tin đầy đủ và chi tiết</li>
                              <li>• Các chứng chỉ liên quan (nếu có)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>

                  <div className="flex gap-2 mt-4">
                    <Button
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      onClick={() => window.location.href = `mailto:CV@icss.com.vn?subject=ICS - ${selectedJob?.title} - Họ và Tên`}
                    >
                      <Mail className="mr-2 w-4 h-4" />
                      Ứng tuyển ngay
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      Đóng
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Job Listings Tabs */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-purple-600" />
                    Vị trí đang tuyển dụng
                  </CardTitle>
                  <CardDescription>
                    Khám phá các cơ hội nghề nghiệp phù hợp với bạn
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="all" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-8">
                      <TabsTrigger value="all">Tất cả ({jobListings.length})</TabsTrigger>
                      <TabsTrigger value="marketing">Marketing (2)</TabsTrigger>
                      <TabsTrigger value="sales">Kinh doanh (2)</TabsTrigger>
                      <TabsTrigger value="tech">Kỹ thuật (1)</TabsTrigger>
                    </TabsList>

                    <TabsContent value="all" className="space-y-4">
                      {jobListings.map((job) => (
                        <Card key={job.id} className="hover:shadow-xl transition-all duration-300 border-l-4 hover:border-l-purple-500 cursor-pointer group">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex gap-4">
                                <div className={`w-16 h-16 ${job.color} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                  <job.icon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                  <CardTitle className="text-xl mb-2 group-hover:text-purple-600 transition-colors">
                                    {job.title}
                                  </CardTitle>
                                  <CardDescription className="flex flex-wrap gap-2 mb-3">
                                    <Badge variant="outline" className="gap-1">
                                      <Briefcase className="w-3 h-3" />
                                      {job.department}
                                    </Badge>
                                    <Badge variant="outline" className="gap-1">
                                      <Award className="w-3 h-3" />
                                      {job.level}
                                    </Badge>
                                    <Badge variant="outline" className="gap-1">
                                      <Clock className="w-3 h-3" />
                                      {job.type}
                                    </Badge>
                                  </CardDescription>
                                  <p className="text-sm text-gray-600 mb-3">{job.description}</p>
                                  <div className="flex flex-wrap gap-2">
                                    {job.tags.map((tag) => (
                                      <Badge key={tag} variant="secondary" className="text-xs">
                                        {tag}
                                      </Badge>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="grid md:grid-cols-2 gap-4 text-sm">
                              <div className="flex items-center gap-2 text-gray-600">
                                <MapPin className="w-4 h-4 text-purple-500" />
                                <span>{job.location}</span>
                              </div>
                              <div className="flex items-center gap-2 text-gray-600">
                                <DollarSign className="w-4 h-4 text-green-500" />
                                <span className="font-semibold text-green-600">{job.salary}</span>
                              </div>
                            </div>
                          </CardContent>
                          <CardFooter className="flex gap-2">
                            <Button
                              className="flex-1"
                              onClick={() => {
                                setSelectedJob(job)
                                setIsDialogOpen(true)
                              }}
                            >
                              Xem chi tiết
                              <ChevronRight className="ml-2 w-4 h-4" />
                            </Button>
                            <Button
                              variant="outline"
                              onClick={() => window.location.href = `mailto:CV@icss.com.vn?subject=ICS - ${job.title} - Họ và Tên`}
                            >
                              <Mail className="w-4 h-4" />
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </TabsContent>

                    <TabsContent value="marketing" className="space-y-4">
                      {jobListings.filter(job => job.department === "Marketing").map((job) => (
                        <Card key={job.id} className="hover:shadow-xl transition-all duration-300 border-l-4 hover:border-l-purple-500">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex gap-4">
                                <div className={`w-16 h-16 ${job.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                  <job.icon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                  <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                                  <CardDescription className="flex flex-wrap gap-2 mb-3">
                                    <Badge variant="outline">{job.level}</Badge>
                                    <Badge variant="outline">{job.type}</Badge>
                                  </CardDescription>
                                  <p className="text-sm text-gray-600">{job.description}</p>
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <DollarSign className="w-4 h-4 text-green-500" />
                              <span className="font-semibold text-green-600">{job.salary}</span>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button
                              className="w-full"
                              onClick={() => {
                                setSelectedJob(job)
                                setIsDialogOpen(true)
                              }}
                            >
                              Xem chi tiết
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </TabsContent>

                    <TabsContent value="sales" className="space-y-4">
                      {jobListings.filter(job => job.department === "Kinh doanh").map((job) => (
                        <Card key={job.id} className="hover:shadow-xl transition-all duration-300 border-l-4 hover:border-l-green-500">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex gap-4">
                                <div className={`w-16 h-16 ${job.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                  <job.icon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                  <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                                  <CardDescription className="flex flex-wrap gap-2 mb-3">
                                    <Badge variant="outline">{job.level}</Badge>
                                    <Badge variant="outline">{job.type}</Badge>
                                  </CardDescription>
                                  <p className="text-sm text-gray-600">{job.description}</p>
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <DollarSign className="w-4 h-4 text-green-500" />
                              <span className="font-semibold text-green-600">{job.salary}</span>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button
                              className="w-full"
                              onClick={() => {
                                setSelectedJob(job)
                                setIsDialogOpen(true)
                              }}
                            >
                              Xem chi tiết
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </TabsContent>

                    <TabsContent value="tech" className="space-y-4">
                      {jobListings.filter(job => job.department === "Kỹ thuật").map((job) => (
                        <Card key={job.id} className="hover:shadow-xl transition-all duration-300 border-l-4 hover:border-l-blue-500">
                          <CardHeader>
                            <div className="flex items-start justify-between">
                              <div className="flex gap-4">
                                <div className={`w-16 h-16 ${job.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                  <job.icon className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                  <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                                  <CardDescription className="flex flex-wrap gap-2 mb-3">
                                    <Badge variant="outline">{job.level}</Badge>
                                    <Badge variant="outline">{job.type}</Badge>
                                  </CardDescription>
                                  <p className="text-sm text-gray-600">{job.description}</p>
                                </div>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <DollarSign className="w-4 h-4 text-green-500" />
                              <span className="font-semibold text-green-600">{job.salary}</span>
                            </div>
                          </CardContent>
                          <CardFooter>
                            <Button
                              className="w-full"
                              onClick={() => {
                                setSelectedJob(job)
                                setIsDialogOpen(true)
                              }}
                            >
                              Xem chi tiết
                            </Button>
                          </CardFooter>
                        </Card>
                      ))}
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* CTA Section */}
              <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl text-white">Sẵn sàng gia nhập ICS?</CardTitle>
                  <CardDescription className="text-white/90 text-lg">
                    Hãy gửi CV của bạn ngay hôm nay và trở thành một phần của đội ngũ ICS!
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col md:flex-row gap-4">
                    <Button
                      size="lg"
                      className="bg-white text-purple-600 hover:bg-gray-100"
                      onClick={() => window.location.href = 'mailto:CV@icss.com.vn'}
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Gửi CV ngay
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white/15 text-white backdrop-blur border border-white/30 hover:bg-white/25 hover:border-white/50"
                      onClick={() => window.location.href = 'tel:0972363821'}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      Liên hệ: 0972.363.821
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
