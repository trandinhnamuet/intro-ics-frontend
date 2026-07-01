'use client'

import { useTranslation } from 'react-i18next'
import { useState, useEffect } from 'react'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'
import { Edit, Trash2, Eye, Plus, ArrowLeft, ShieldAlert, FileText, AlertTriangle, CheckCircle, XCircle, Info, Zap } from 'lucide-react'
import { format } from 'date-fns'
import { articlesService, type Article, type ArticlesResponse } from '@/services/articles.service'
import { CATEGORY_FILTERS, getCategoryMeta } from '@/lib/article-categories'
import { securityAlertsService, type SecurityAlert, type CreateSecurityAlertDto } from '@/services/security-alerts.service'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function ArticlesManagementPage() {
  const router = useRouter()
  const { toast } = useToast()
  const { t } = useTranslation()
  const [activeTab, setActiveTab] = useState<'articles' | 'alerts'>('articles')

  // Articles state
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [password, setPassword] = useState('')
  const [categoryFilter, setCategoryFilter] = useState<string>('all')
  const [articleSearchTerm, setArticleSearchTerm] = useState('')
  const [articleSearchQuery, setArticleSearchQuery] = useState('')

  // Security alerts state
  const [alerts, setAlerts] = useState<SecurityAlert[]>([])
  const [alertsLoading, setAlertsLoading] = useState(false)
  const [alertsPage, setAlertsPage] = useState(1)
  const [alertsTotalPages, setAlertsTotalPages] = useState(1)
  const [alertDialogOpen, setAlertDialogOpen] = useState(false)
  const [editingAlert, setEditingAlert] = useState<SecurityAlert | null>(null)
  const [alertFormData, setAlertFormData] = useState<CreateSecurityAlertDto>({
    title: '',
    summary: '',
    severity: 'medium',
    cve_ids: '',
    affected_systems: '',
    recommendation: '',
    source: '',
    is_active: true,
    alert_date: new Date().toISOString().split('T')[0],
  })
  const [alertSubmitting, setAlertSubmitting] = useState(false)

  const checkPassword = (action: 'create' | 'edit' | 'delete' = 'create') => {
    console.log('Checking password:', password, 'Action:', action)
    
    if (!password || password.trim() === '') {
      const actionText = {
        create: 'tạo bài viết mới',
        edit: 'chỉnh sửa bài viết',
        delete: 'xóa bài viết'
      }
      
      console.log('Password is empty')
      
      toast({
        title: t('articlesManagement.auth.title'),
        description: t('articlesManagement.auth.title'),
        variant: 'destructive',
      })
      return false
    }
    
    if (password.trim() !== 'ics@062025') {
      const actionText = {
        create: 'tạo bài viết mới',
        edit: 'chỉnh sửa bài viết',
        delete: 'xóa bài viết'
      }
      
      console.log('Password is wrong:', password.trim())
      
      toast({
        title: t('articlesManagement.auth.wrongPassword'),
        description: t('articlesManagement.auth.passwordError').replace('{{action}}', actionText[action]),
        variant: 'destructive',
      })
      return false
    }
    
    console.log('Password is correct')
    return true
  }

  useEffect(() => {
    fetchArticles()
  }, [page, categoryFilter, articleSearchQuery])

  useEffect(() => {
    if (activeTab === 'alerts') fetchAlerts()
  }, [activeTab, alertsPage])

  const fetchArticles = async () => {
    try {
      setIsLoading(true)
      const categoryParam = categoryFilter === 'all' ? undefined : categoryFilter
      const data = await articlesService.getAllArticles(page, 12, undefined, categoryParam, articleSearchQuery || undefined)
      setArticles(data.data)
      setTotalPages(Math.ceil(data.total / data.limit))
    } catch (error) {
      toast({
        title: t('articlesManagement.errors.errorTitle'),
        description: t('articlesManagement.errors.fetchError'),
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleDeleteArticle = async (id: string) => {
    try {
      await articlesService.deleteArticle(id)
      toast({
        title: t('common.success'),
        description: 'Xóa bài viết thành công',
      })
      fetchArticles() // Reload the list
    } catch (error) {
      toast({
        title: t('articlesManagement.errors.errorTitle'),
        description: t('articlesManagement.errors.deleteError'),
        variant: 'destructive',
      })
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
        return 'bg-green-500 hover:bg-green-600'
      case 'draft':
        return 'bg-yellow-500 hover:bg-yellow-600'
      case 'archived':
        return 'bg-gray-500 hover:bg-gray-600'
      default:
        return 'bg-gray-500 hover:bg-gray-600'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'published':
        return 'Đã xuất bản'
      case 'draft':
        return 'Bản nháp'
      case 'archived':
        return 'Lưu trữ'
      default:
        return status
    }
  }

  // ─── Security Alerts helpers ───────────────────────────────────────────────
  const fetchAlerts = async () => {
    try {
      setAlertsLoading(true)
      const data = await securityAlertsService.getAllAlerts(alertsPage, 10)
      setAlerts(data.data)
      setAlertsTotalPages(Math.ceil(data.total / data.limit))
    } catch {
      toast({ title: 'Lỗi', description: 'Không thể tải cảnh báo bảo mật', variant: 'destructive' })
    } finally {
      setAlertsLoading(false)
    }
  }

  const openCreateAlert = () => {
    setEditingAlert(null)
    setAlertFormData({
      title: '',
      summary: '',
      severity: 'medium',
      cve_ids: '',
      affected_systems: '',
      recommendation: '',
      source: '',
      is_active: true,
      alert_date: new Date().toISOString().split('T')[0],
    })
    setAlertDialogOpen(true)
  }

  const openEditAlert = (alert: SecurityAlert) => {
    if (!checkPassword('edit')) return
    setEditingAlert(alert)
    setAlertFormData({
      title: alert.title,
      summary: alert.summary,
      severity: alert.severity,
      cve_ids: alert.cve_ids || '',
      affected_systems: alert.affected_systems || '',
      recommendation: alert.recommendation || '',
      source: alert.source || '',
      is_active: alert.is_active,
      alert_date: alert.alert_date,
    })
    setAlertDialogOpen(true)
  }

  const handleAlertSubmit = async () => {
    if (!checkPassword(editingAlert ? 'edit' : 'create')) return
    if (!alertFormData.title.trim() || !alertFormData.summary.trim()) {
      toast({ title: 'Lỗi', description: 'Tiêu đề và nội dung không được để trống', variant: 'destructive' })
      return
    }
    try {
      setAlertSubmitting(true)
      if (editingAlert) {
        await securityAlertsService.updateAlert(editingAlert.id, alertFormData)
        toast({ title: 'Thành công', description: 'Cập nhật cảnh báo thành công' })
      } else {
        await securityAlertsService.createAlert(alertFormData)
        toast({ title: 'Thành công', description: 'Tạo cảnh báo mới thành công' })
      }
      setAlertDialogOpen(false)
      fetchAlerts()
    } catch {
      toast({ title: 'Lỗi', description: 'Không thể lưu cảnh báo bảo mật', variant: 'destructive' })
    } finally {
      setAlertSubmitting(false)
    }
  }

  const handleDeleteAlert = async (id: string) => {
    if (!checkPassword('delete')) return
    try {
      await securityAlertsService.deleteAlert(id)
      toast({ title: 'Thành công', description: 'Xóa cảnh báo thành công' })
      fetchAlerts()
    } catch {
      toast({ title: 'Lỗi', description: 'Không thể xóa cảnh báo', variant: 'destructive' })
    }
  }

  const getSeverityConfig = (severity: string) => {
    switch (severity) {
      case 'critical': return { label: 'Nghiêm trọng', color: 'bg-red-600', icon: <XCircle className="h-3 w-3" /> }
      case 'high':     return { label: 'Cao', color: 'bg-orange-500', icon: <AlertTriangle className="h-3 w-3" /> }
      case 'medium':   return { label: 'Trung bình', color: 'bg-yellow-500', icon: <Zap className="h-3 w-3" /> }
      case 'low':      return { label: 'Thấp', color: 'bg-blue-500', icon: <Info className="h-3 w-3" /> }
      default:         return { label: 'Thông tin', color: 'bg-gray-500', icon: <CheckCircle className="h-3 w-3" /> }
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="w-full px-4 md:px-16 lg:px-32 py-12">
          <Button variant="ghost" onClick={() => router.back()} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại
          </Button>

          {/* Page Header */}
          <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-6 gap-4">
            <h1 className="text-2xl lg:text-3xl font-bold">Quản lý nội dung</h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Input
                type="password"
                placeholder="Mật khẩu"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-36"
              />
              {activeTab === 'articles' ? (
                <Button
                  onClick={() => { if (checkPassword('create')) router.push('/tin-tuc/viet-bai-moi') }}
                  className="flex items-center gap-2 bg-[#0984c7] hover:bg-[#00A8E8] text-white"
                >
                  <Plus className="h-4 w-4" />
                  <span>Viết bài mới</span>
                </Button>
              ) : (
                <Button
                  onClick={() => { if (checkPassword('create')) openCreateAlert() }}
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white"
                >
                  <ShieldAlert className="h-4 w-4" />
                  <span>Thêm cảnh báo</span>
                </Button>
              )}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b">
            <button
              onClick={() => setActiveTab('articles')}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'articles'
                  ? 'border-[#0984c7] text-[#0984c7]'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <FileText className="h-4 w-4" />
              Bài viết
            </button>
            <button
              onClick={() => setActiveTab('alerts')}
              className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'alerts'
                  ? 'border-red-600 text-red-600'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              <ShieldAlert className="h-4 w-4" />
              Cảnh báo bảo mật
            </button>
          </div>

          {/* ── ARTICLES TAB ────────────────────────────────────────────── */}
          {activeTab === 'articles' && (
            <Card>
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <CardTitle>Danh sách bài viết</CardTitle>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Select
                      value={categoryFilter}
                      onValueChange={(v) => { setPage(1); setCategoryFilter(v) }}
                    >
                      <SelectTrigger className="w-full sm:w-44">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {CATEGORY_FILTERS.map((c) => (
                          <SelectItem key={c.key} value={c.key}>{c.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      placeholder="Tìm theo tiêu đề, tóm tắt..."
                      value={articleSearchTerm}
                      onChange={(e) => setArticleSearchTerm(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') { setPage(1); setArticleSearchQuery(articleSearchTerm) }
                      }}
                      className="w-full sm:w-64"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="flex justify-center py-8">
                    <div className="text-muted-foreground">Đang tải...</div>
                  </div>
                ) : articles.length === 0 ? (
                  <div className="text-center py-8">
                    <div className="text-muted-foreground mb-4">Chưa có bài viết nào</div>
                    <Button
                      onClick={() => { if (checkPassword('create')) router.push('/tin-tuc/viet-bai-moi') }}
                      variant="outline"
                      className="border-[#0984c7] text-[#0984c7] hover:bg-[#0984c7] hover:text-white"
                    >
                      Viết bài đầu tiên
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Tiêu đề</TableHead>
                            <TableHead>Danh mục</TableHead>
                            <TableHead className="hidden md:table-cell">Tóm tắt</TableHead>
                            <TableHead>Trạng thái</TableHead>
                            <TableHead className="hidden lg:table-cell">Ngày tạo</TableHead>
                            <TableHead>Thao tác</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {articles.map((article) => (
                            <TableRow key={article.id}>
                              <TableCell className="font-medium max-w-[200px] truncate">{article.title}</TableCell>
                              <TableCell>
                                <Badge className={`${getCategoryMeta(article.category).badgeClassName} text-xs`}>
                                  {getCategoryMeta(article.category).label}
                                </Badge>
                              </TableCell>
                              <TableCell className="hidden md:table-cell max-w-[200px] truncate text-muted-foreground">
                                {article.excerpt || 'Không có tóm tắt'}
                              </TableCell>
                              <TableCell>
                                <Badge className={`${getStatusColor(article.status)} text-xs`}>
                                  {getStatusText(article.status)}
                                </Badge>
                              </TableCell>
                              <TableCell className="hidden lg:table-cell text-sm">
                                {format(new Date(article.created_at), 'dd/MM/yyyy')}
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center gap-1">
                                  <Button variant="outline" size="sm" onClick={() => router.push(`/tin-tuc/${article.slug}`)} className="h-7 w-7 p-0" title="Xem">
                                    <Eye className="h-3 w-3" />
                                  </Button>
                                  <Button variant="outline" size="sm" onClick={() => { if (checkPassword('edit')) router.push(`/tin-tuc/viet-bai-moi?id=${article.id}`) }} className="h-7 w-7 p-0" title="Sửa">
                                    <Edit className="h-3 w-3" />
                                  </Button>
                                  <AlertDialog>
                                    <AlertDialogTrigger asChild>
                                      <Button variant="outline" size="sm" className="h-7 w-7 p-0" title="Xóa">
                                        <Trash2 className="h-3 w-3 text-red-500" />
                                      </Button>
                                    </AlertDialogTrigger>
                                    <AlertDialogContent>
                                      <AlertDialogHeader>
                                        <AlertDialogTitle>Xác nhận xóa</AlertDialogTitle>
                                        <AlertDialogDescription>
                                          Bạn có chắc chắn muốn xóa bài viết "{article.title}"? Thao tác này không thể hoàn tác.
                                        </AlertDialogDescription>
                                      </AlertDialogHeader>
                                      <AlertDialogFooter>
                                        <AlertDialogCancel>Hủy</AlertDialogCancel>
                                        <AlertDialogAction onClick={() => { if (checkPassword('delete')) handleDeleteArticle(article.id) }} className="bg-red-500 hover:bg-red-600">
                                          Xóa
                                        </AlertDialogAction>
                                      </AlertDialogFooter>
                                    </AlertDialogContent>
                                  </AlertDialog>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                    {totalPages > 1 && (
                      <div className="flex justify-center items-center gap-2 mt-6 pt-4 border-t flex-wrap">
                        <Button variant="outline" size="sm" onClick={() => setPage(1)} disabled={page === 1}>Đầu</Button>
                        <Button variant="outline" size="sm" onClick={() => setPage(p => p - 1)} disabled={page === 1}>Trước</Button>
                        <span className="text-sm text-muted-foreground">Trang {page} / {totalPages}</span>
                        <Button variant="outline" size="sm" onClick={() => setPage(p => p + 1)} disabled={page === totalPages}>Sau</Button>
                        <Button variant="outline" size="sm" onClick={() => setPage(totalPages)} disabled={page === totalPages}>Cuối</Button>
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          )}

          {/* ── SECURITY ALERTS TAB ─────────────────────────────────────── */}
          {activeTab === 'alerts' && (
            <Card className="border-red-200 dark:border-red-900">
              <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-950/30 dark:to-orange-950/30 rounded-t-lg">
                <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                  <ShieldAlert className="h-5 w-5" />
                  Danh sách cảnh báo bảo mật
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                {alertsLoading ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-600" />
                  </div>
                ) : alerts.length === 0 ? (
                  <div className="text-center py-12">
                    <ShieldAlert className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                    <div className="text-muted-foreground mb-4">Chưa có cảnh báo bảo mật nào</div>
                    <Button onClick={() => { if (checkPassword('create')) openCreateAlert() }} className="bg-red-600 hover:bg-red-700 text-white">
                      <Plus className="h-4 w-4 mr-2" />
                      Thêm cảnh báo đầu tiên
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Tiêu đề cảnh báo</TableHead>
                            <TableHead>Mức độ</TableHead>
                            <TableHead className="hidden md:table-cell">CVE IDs</TableHead>
                            <TableHead>Ngày cảnh báo</TableHead>
                            <TableHead>Trạng thái</TableHead>
                            <TableHead>Thao tác</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {alerts.map((alert) => {
                            const sev = getSeverityConfig(alert.severity)
                            return (
                              <TableRow key={alert.id}>
                                <TableCell className="font-medium max-w-[260px]">
                                  <div className="truncate" title={alert.title}>{alert.title}</div>
                                </TableCell>
                                <TableCell>
                                  <Badge className={`${sev.color} text-white text-xs flex items-center gap-1 w-fit`}>
                                    {sev.icon}
                                    {sev.label}
                                  </Badge>
                                </TableCell>
                                <TableCell className="hidden md:table-cell text-xs text-muted-foreground max-w-[120px] truncate">
                                  {alert.cve_ids || '—'}
                                </TableCell>
                                <TableCell className="text-sm">
                                  {format(new Date(alert.alert_date), 'dd/MM/yyyy')}
                                </TableCell>
                                <TableCell>
                                  <Badge variant={alert.is_active ? 'default' : 'secondary'} className={alert.is_active ? 'bg-green-500 text-white' : ''}>
                                    {alert.is_active ? 'Hoạt động' : 'Ẩn'}
                                  </Badge>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-1">
                                    <Button variant="outline" size="sm" onClick={() => openEditAlert(alert)} className="h-7 w-7 p-0" title="Sửa">
                                      <Edit className="h-3 w-3" />
                                    </Button>
                                    <AlertDialog>
                                      <AlertDialogTrigger asChild>
                                        <Button variant="outline" size="sm" className="h-7 w-7 p-0" title="Xóa">
                                          <Trash2 className="h-3 w-3 text-red-500" />
                                        </Button>
                                      </AlertDialogTrigger>
                                      <AlertDialogContent>
                                        <AlertDialogHeader>
                                          <AlertDialogTitle>Xác nhận xóa cảnh báo</AlertDialogTitle>
                                          <AlertDialogDescription>
                                            Bạn có chắc chắn muốn xóa cảnh báo "{alert.title}"? Thao tác này không thể hoàn tác.
                                          </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                          <AlertDialogCancel>Hủy</AlertDialogCancel>
                                          <AlertDialogAction onClick={() => handleDeleteAlert(alert.id)} className="bg-red-500 hover:bg-red-600">
                                            Xóa
                                          </AlertDialogAction>
                                        </AlertDialogFooter>
                                      </AlertDialogContent>
                                    </AlertDialog>
                                  </div>
                                </TableCell>
                              </TableRow>
                            )
                          })}
                        </TableBody>
                      </Table>
                    </div>
                    {alertsTotalPages > 1 && (
                      <div className="flex justify-center items-center gap-2 mt-6 pt-4 border-t flex-wrap">
                        <Button variant="outline" size="sm" onClick={() => setAlertsPage(1)} disabled={alertsPage === 1}>Đầu</Button>
                        <Button variant="outline" size="sm" onClick={() => setAlertsPage(p => p - 1)} disabled={alertsPage === 1}>Trước</Button>
                        <span className="text-sm text-muted-foreground">Trang {alertsPage} / {alertsTotalPages}</span>
                        <Button variant="outline" size="sm" onClick={() => setAlertsPage(p => p + 1)} disabled={alertsPage === alertsTotalPages}>Sau</Button>
                        <Button variant="outline" size="sm" onClick={() => setAlertsPage(alertsTotalPages)} disabled={alertsPage === alertsTotalPages}>Cuối</Button>
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      {/* ── SECURITY ALERT DIALOG ───────────────────────────────────────── */}
      <Dialog open={alertDialogOpen} onOpenChange={setAlertDialogOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
              <ShieldAlert className="h-5 w-5" />
              {editingAlert ? 'Chỉnh sửa cảnh báo bảo mật' : 'Thêm cảnh báo bảo mật mới'}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-2">
            {/* Title */}
            <div className="space-y-1.5">
              <Label htmlFor="alert-title">Tiêu đề cảnh báo <span className="text-red-500">*</span></Label>
              <Input
                id="alert-title"
                placeholder="VD: Cảnh báo lỗ hổng bảo mật mức độ cao trên Microsoft Edge"
                value={alertFormData.title}
                onChange={e => setAlertFormData(p => ({ ...p, title: e.target.value }))}
              />
            </div>
            {/* Summary */}
            <div className="space-y-1.5">
              <Label htmlFor="alert-summary">Nội dung chi tiết <span className="text-red-500">*</span></Label>
              <Textarea
                id="alert-summary"
                rows={5}
                placeholder="Mô tả chi tiết về lỗ hổng, phạm vi ảnh hưởng và khuyến nghị..."
                value={alertFormData.summary}
                onChange={e => setAlertFormData(p => ({ ...p, summary: e.target.value }))}
              />
            </div>
            {/* Row: Severity + Date */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label>Mức độ nghiêm trọng</Label>
                <Select
                  value={alertFormData.severity}
                  onValueChange={v => setAlertFormData(p => ({ ...p, severity: v }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="critical">🔴 Nghiêm trọng (Critical)</SelectItem>
                    <SelectItem value="high">🟠 Cao (High)</SelectItem>
                    <SelectItem value="medium">🟡 Trung bình (Medium)</SelectItem>
                    <SelectItem value="low">🔵 Thấp (Low)</SelectItem>
                    <SelectItem value="info">⚪ Thông tin (Info)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="alert-date">Ngày cảnh báo</Label>
                <Input
                  id="alert-date"
                  type="date"
                  value={alertFormData.alert_date}
                  onChange={e => setAlertFormData(p => ({ ...p, alert_date: e.target.value }))}
                />
              </div>
            </div>
            {/* CVE IDs */}
            <div className="space-y-1.5">
              <Label htmlFor="alert-cve">Mã CVE (phân cách bằng dấu phẩy)</Label>
              <Input
                id="alert-cve"
                placeholder="VD: CVE-2026-2648, CVE-2026-2649"
                value={alertFormData.cve_ids}
                onChange={e => setAlertFormData(p => ({ ...p, cve_ids: e.target.value }))}
              />
            </div>
            {/* Affected systems */}
            <div className="space-y-1.5">
              <Label htmlFor="alert-affected">Hệ thống / phần mềm bị ảnh hưởng</Label>
              <Input
                id="alert-affected"
                placeholder="VD: Microsoft Edge < 145.0.3800.70"
                value={alertFormData.affected_systems}
                onChange={e => setAlertFormData(p => ({ ...p, affected_systems: e.target.value }))}
              />
            </div>
            {/* Recommendation */}
            <div className="space-y-1.5">
              <Label htmlFor="alert-rec">Khuyến nghị xử lý</Label>
              <Textarea
                id="alert-rec"
                rows={2}
                placeholder="VD: Cập nhật ngay lên phiên bản mới nhất..."
                value={alertFormData.recommendation}
                onChange={e => setAlertFormData(p => ({ ...p, recommendation: e.target.value }))}
              />
            </div>
            {/* Source */}
            <div className="space-y-1.5">
              <Label htmlFor="alert-source">Nguồn / Tổ chức phát hành</Label>
              <Input
                id="alert-source"
                placeholder="VD: Trung tâm SOC ICS, NVD, CISA..."
                value={alertFormData.source}
                onChange={e => setAlertFormData(p => ({ ...p, source: e.target.value }))}
              />
            </div>
            {/* Active toggle */}
            <div className="flex items-center gap-3">
              <input
                id="alert-active"
                type="checkbox"
                className="h-4 w-4 rounded"
                checked={alertFormData.is_active}
                onChange={e => setAlertFormData(p => ({ ...p, is_active: e.target.checked }))}
              />
              <Label htmlFor="alert-active" className="cursor-pointer">Hiển thị trên trang chủ (Hoạt động)</Label>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setAlertDialogOpen(false)} disabled={alertSubmitting}>Hủy</Button>
            <Button onClick={handleAlertSubmit} disabled={alertSubmitting} className="bg-red-600 hover:bg-red-700 text-white min-w-[100px]">
              {alertSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" />
                  Đang lưu...
                </span>
              ) : editingAlert ? 'Cập nhật' : 'Tạo cảnh báo'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  )
}
