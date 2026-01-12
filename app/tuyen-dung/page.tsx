"use client"

import { useState } from "react"
import { useTranslation } from 'react-i18next'
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"
import {
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Code,
  Megaphone,
  ChevronRight,
  Mail,
  Phone,
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
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import { ScrollArea } from "@/components/ui/scroll-area"

const jobIcons = {
  "marketing-staff": Megaphone,
  "sales-staff": TrendingUp,
  "security-engineer": Shield,
  "marketing-director": Target,
  "sales-director": Users
}

const jobColors = {
  "marketing-staff": "bg-gradient-to-br from-purple-500 to-pink-500",
  "sales-staff": "bg-gradient-to-br from-green-500 to-emerald-500",
  "security-engineer": "bg-gradient-to-br from-blue-600 to-cyan-500",
  "marketing-director": "bg-gradient-to-br from-orange-500 to-red-500",
  "sales-director": "bg-gradient-to-br from-indigo-600 to-purple-600"
}

interface JobListing {
  id: string
  titleKey: string
  departmentKey: string
  typeKey: string
  levelKey: string
  salaryKey: string
  locationKey: string
  descriptionKey: string
  missionKey: string
  responsibilitiesKeys: string[]
  requirementsKeys: string[]
  benefitsKeys: string[]
  category: string
}

export default function RecruitmentPage() {
  const { t } = useTranslation()
  
  const jobListings: JobListing[] = [
    {
      id: "marketing-staff",
      titleKey: "recruitment.jobs.marketingStaff.title",
      departmentKey: "recruitment.jobs.marketingStaff.department",
      typeKey: "recruitment.jobs.marketingStaff.type",
      levelKey: "recruitment.jobs.marketingStaff.level",
      salaryKey: "recruitment.jobs.marketingStaff.salary",
      locationKey: "recruitment.jobs.marketingStaff.location",
      descriptionKey: "recruitment.jobs.marketingStaff.description",
      missionKey: "recruitment.jobs.marketingStaff.mission",
      responsibilitiesKeys: Array(5).fill(0).map((_, i) => `recruitment.jobs.marketingStaff.responsibilities.${i}`),
      requirementsKeys: Array(5).fill(0).map((_, i) => `recruitment.jobs.marketingStaff.requirements.${i}`),
      benefitsKeys: Array(5).fill(0).map((_, i) => `recruitment.jobs.marketingStaff.benefits.${i}`),
      category: "marketing"
    },
    {
      id: "sales-staff",
      titleKey: "recruitment.jobs.salesStaff.title",
      departmentKey: "recruitment.jobs.salesStaff.department",
      typeKey: "recruitment.jobs.salesStaff.type",
      levelKey: "recruitment.jobs.salesStaff.level",
      salaryKey: "recruitment.jobs.salesStaff.salary",
      locationKey: "recruitment.jobs.salesStaff.location",
      descriptionKey: "recruitment.jobs.salesStaff.description",
      missionKey: "recruitment.jobs.salesStaff.mission",
      responsibilitiesKeys: Array(4).fill(0).map((_, i) => `recruitment.jobs.salesStaff.responsibilities.${i}`),
      requirementsKeys: Array(5).fill(0).map((_, i) => `recruitment.jobs.salesStaff.requirements.${i}`),
      benefitsKeys: Array(5).fill(0).map((_, i) => `recruitment.jobs.salesStaff.benefits.${i}`),
      category: "sales"
    },
    {
      id: "security-engineer",
      titleKey: "recruitment.jobs.securityEngineer.title",
      departmentKey: "recruitment.jobs.securityEngineer.department",
      typeKey: "recruitment.jobs.securityEngineer.type",
      levelKey: "recruitment.jobs.securityEngineer.level",
      salaryKey: "recruitment.jobs.securityEngineer.salary",
      locationKey: "recruitment.jobs.securityEngineer.location",
      descriptionKey: "recruitment.jobs.securityEngineer.description",
      missionKey: "recruitment.jobs.securityEngineer.mission",
      responsibilitiesKeys: Array(5).fill(0).map((_, i) => `recruitment.jobs.securityEngineer.responsibilities.${i}`),
      requirementsKeys: Array(5).fill(0).map((_, i) => `recruitment.jobs.securityEngineer.requirements.${i}`),
      benefitsKeys: Array(5).fill(0).map((_, i) => `recruitment.jobs.securityEngineer.benefits.${i}`),
      category: "tech"
    },
    {
      id: "marketing-director",
      titleKey: "recruitment.jobs.marketingDirector.title",
      departmentKey: "recruitment.jobs.marketingDirector.department",
      typeKey: "recruitment.jobs.marketingDirector.type",
      levelKey: "recruitment.jobs.marketingDirector.level",
      salaryKey: "recruitment.jobs.marketingDirector.salary",
      locationKey: "recruitment.jobs.marketingDirector.location",
      descriptionKey: "recruitment.jobs.marketingDirector.description",
      missionKey: "recruitment.jobs.marketingDirector.mission",
      responsibilitiesKeys: Array(5).fill(0).map((_, i) => `recruitment.jobs.marketingDirector.responsibilities.${i}`),
      requirementsKeys: Array(5).fill(0).map((_, i) => `recruitment.jobs.marketingDirector.requirements.${i}`),
      benefitsKeys: Array(5).fill(0).map((_, i) => `recruitment.jobs.marketingDirector.benefits.${i}`),
      category: "marketing"
    },
    {
      id: "sales-director",
      titleKey: "recruitment.jobs.salesDirector.title",
      departmentKey: "recruitment.jobs.salesDirector.department",
      typeKey: "recruitment.jobs.salesDirector.type",
      levelKey: "recruitment.jobs.salesDirector.level",
      salaryKey: "recruitment.jobs.salesDirector.salary",
      locationKey: "recruitment.jobs.salesDirector.location",
      descriptionKey: "recruitment.jobs.salesDirector.description",
      missionKey: "recruitment.jobs.salesDirector.mission",
      responsibilitiesKeys: Array(5).fill(0).map((_, i) => `recruitment.jobs.salesDirector.responsibilities.${i}`),
      requirementsKeys: Array(5).fill(0).map((_, i) => `recruitment.jobs.salesDirector.requirements.${i}`),
      benefitsKeys: Array(5).fill(0).map((_, i) => `recruitment.jobs.salesDirector.benefits.${i}`),
      category: "sales"
    }
  ]

  const [selectedJob, setSelectedJob] = useState(jobListings[0])
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const SelectedIcon = jobIcons[selectedJob.id as keyof typeof jobIcons] || Briefcase
  const selectedColor = jobColors[selectedJob.id as keyof typeof jobColors] || "bg-gradient-to-br from-purple-500 to-pink-500"

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
            <span className="text-sm font-semibold">{t('recruitment.hero.badge')}</span>
          </div>
          <h1 className="text-6xl font-bold text-white drop-shadow-lg mb-6">
            {t('recruitment.hero.title')}
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {t('recruitment.hero.subtitle')}
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 shadow-lg">
              <Briefcase className="mr-2 h-5 w-5" />
              {t('recruitment.hero.viewPositions')}
            </Button>
            <Button size="lg" variant="outline" className="bg-white/15 text-white backdrop-blur border border-white/30 hover:bg-white/25 hover:border-white/50">
              <Heart className="mr-2 h-5 w-5" />
              {t('common.learnMore')}
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
                    {t('recruitment.whyJoin')}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50">
                      <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                        <Code className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{t('recruitment.benefit1Title')}</h3>
                      <p className="text-sm text-gray-600">{t('recruitment.benefit1Desc')}</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50">
                      <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mb-4">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{t('recruitment.benefit2Title')}</h3>
                      <p className="text-sm text-gray-600">{t('recruitment.benefit2Desc')}</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 rounded-lg bg-gradient-to-br from-green-50 to-emerald-50">
                      <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{t('recruitment.benefit3Title')}</h3>
                      <p className="text-sm text-gray-600">{t('recruitment.benefit3Desc')}</p>
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
                        <DialogTitle className="text-2xl mb-2">{t(selectedJob.titleKey)}</DialogTitle>
                        <DialogDescription className="flex flex-wrap gap-2">
                          <Badge variant="outline">{t(selectedJob.departmentKey)}</Badge>
                          <Badge variant="outline">{t(selectedJob.levelKey)}</Badge>
                          <Badge variant="outline">{t(selectedJob.typeKey)}</Badge>
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
                            <div className="text-xs text-gray-500">{t('recruitment.location')}</div>
                            <div className="font-semibold text-sm">{t(selectedJob.locationKey)}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-5 h-5 text-green-500" />
                          <div>
                            <div className="text-xs text-gray-500">{t('recruitment.salary')}</div>
                            <div className="font-semibold text-sm text-green-600">{t(selectedJob.salaryKey)}</div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <Target className="w-5 h-5 text-purple-600" />
                          {t('recruitment.mission')}
                        </h3>
                        <p className="text-gray-700 leading-relaxed bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
                          {t(selectedJob.missionKey)}
                        </p>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-blue-600" />
                          {t('recruitment.responsibilities')}
                        </h3>
                        <ul className="space-y-2">
                          {selectedJob.responsibilitiesKeys.map((key, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <ChevronRight className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{t(key)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-orange-600" />
                          {t('recruitment.requirements')}
                        </h3>
                        <ul className="space-y-2">
                          {selectedJob.requirementsKeys.map((key, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{t(key)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      <div>
                        <h3 className="font-bold text-lg mb-3 flex items-center gap-2">
                          <Heart className="w-5 h-5 text-red-600" />
                          {t('recruitment.benefits')}
                        </h3>
                        <ul className="space-y-2">
                          {selectedJob.benefitsKeys.map((key, index) => (
                            <li key={index} className="flex items-start gap-2">
                              <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700">{t(key)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Separator />

                      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg border-2 border-purple-200">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                          <Mail className="w-5 h-5 text-purple-600" />
                          {t('recruitment.applicationMethod')}
                        </h3>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                            <div>
                              <div className="font-semibold">{t('recruitment.emailLabel')}:</div>
                              <a href="mailto:CV@icss.com.vn" className="text-purple-600 hover:underline">
                                CV@icss.com.vn
                              </a>
                              <div className="text-sm text-gray-600 mt-1">
                                {t('recruitment.subject')}: <span className="font-mono bg-white px-2 py-1 rounded">ICS - {t(selectedJob.titleKey)} - {t('recruitment.yourName')}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                              <div className="font-semibold">{t('recruitment.directContact')}:</div>
                              <a href="tel:0972363821" className="text-green-600 hover:underline">
                                {t('recruitment.contactPerson')} - 0972.363.821
                              </a>
                            </div>
                          </div>
                          <div className="mt-4 p-4 bg-white rounded border border-purple-200">
                            <p className="text-sm text-gray-700 font-semibold mb-2">📋 {t('recruitment.portfolioLabel')}:</p>
                            <ul className="text-sm text-gray-600 space-y-1 ml-4">
                              <li>• {t('recruitment.portfolioItem1')}</li>
                              <li>• {t('recruitment.portfolioItem2')}</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>

                  <div className="flex gap-2 mt-4">
                    <Button
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      onClick={() => window.location.href = `mailto:CV@icss.com.vn?subject=ICS - ${t(selectedJob.titleKey)} - ${t('recruitment.yourName')}`}
                    >
                      <Mail className="mr-2 w-4 h-4" />
                      {t('recruitment.applyNow')}
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                    <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                      {t('common.close')}
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>

              {/* Job Listings Tabs */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Briefcase className="w-6 h-6 text-purple-600" />
                    {t('recruitment.jobsTitle')}
                  </CardTitle>
                  <CardDescription>
                    {t('recruitment.jobsSubtitle')}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="all" className="w-full">
                    <TabsList className="grid w-full grid-cols-4 mb-8">
                      <TabsTrigger value="all">{t('common.all')} ({jobListings.length})</TabsTrigger>
                      <TabsTrigger value="marketing">{t('recruitment.marketing')} (2)</TabsTrigger>
                      <TabsTrigger value="sales">{t('recruitment.sales')} (2)</TabsTrigger>
                      <TabsTrigger value="tech">{t('recruitment.tech')} (1)</TabsTrigger>
                    </TabsList>

                    {["all", "marketing", "sales", "tech"].map((tabValue) => (
                      <TabsContent key={tabValue} value={tabValue} className="space-y-4">
                        {jobListings
                          .filter(job => tabValue === "all" || job.category === tabValue)
                          .map((job) => (
                            <Card key={job.id} className="hover:shadow-xl transition-all duration-300 border-l-4 hover:border-l-purple-500 cursor-pointer group">
                              <CardHeader>
                                <div className="flex items-start justify-between">
                                  <div className="flex gap-4">
                                    <div className={`w-16 h-16 ${jobColors[job.id as keyof typeof jobColors]} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                      {(() => {
                                        const Icon = jobIcons[job.id as keyof typeof jobIcons]
                                        return <Icon className="w-8 h-8 text-white" />
                                      })()}
                                    </div>
                                    <div>
                                      <CardTitle className="text-xl mb-2 group-hover:text-purple-600 transition-colors">
                                        {t(job.titleKey)}
                                      </CardTitle>
                                      <CardDescription className="flex flex-wrap gap-2 mb-3">
                                        <Badge variant="outline" className="gap-1">
                                          <Briefcase className="w-3 h-3" />
                                          {t(job.departmentKey)}
                                        </Badge>
                                        <Badge variant="outline" className="gap-1">
                                          <Award className="w-3 h-3" />
                                          {t(job.levelKey)}
                                        </Badge>
                                        <Badge variant="outline" className="gap-1">
                                          <Clock className="w-3 h-3" />
                                          {t(job.typeKey)}
                                        </Badge>
                                      </CardDescription>
                                      <p className="text-sm text-gray-600 mb-3">{t(job.descriptionKey)}</p>
                                    </div>
                                  </div>
                                </div>
                              </CardHeader>
                              <CardContent>
                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <MapPin className="w-4 h-4 text-purple-500" />
                                    <span>{t(job.locationKey)}</span>
                                  </div>
                                  <div className="flex items-center gap-2 text-gray-600">
                                    <DollarSign className="w-4 h-4 text-green-500" />
                                    <span className="font-semibold text-green-600">{t(job.salaryKey)}</span>
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
                                  {t('recruitment.viewDetails')}
                                  <ChevronRight className="ml-2 w-4 h-4" />
                                </Button>
                                <Button
                                  variant="outline"
                                  onClick={() => window.location.href = `mailto:CV@icss.com.vn?subject=ICS - ${t(job.titleKey)} - ${t('recruitment.yourName')}`}
                                >
                                  <Mail className="w-4 h-4" />
                                </Button>
                              </CardFooter>
                            </Card>
                          ))}
                      </TabsContent>
                    ))}
                  </Tabs>
                </CardContent>
              </Card>

              {/* CTA Section */}
              <Card className="bg-gradient-to-br from-purple-600 to-pink-600 text-white border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl text-white">{t('recruitment.ctaTitle')}</CardTitle>
                  <CardDescription className="text-white/90 text-lg">
                    {t('recruitment.ctaSubtitle')}
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
                      {t('recruitment.sendCVNow')}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white/15 text-white backdrop-blur border border-white/30 hover:bg-white/25 hover:border-white/50"
                      onClick={() => window.location.href = 'tel:0972363821'}
                    >
                      <Phone className="mr-2 h-5 w-5" />
                      {t('recruitment.contactPhone')}
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
