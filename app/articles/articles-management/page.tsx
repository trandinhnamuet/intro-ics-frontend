'use client'

import { useState, useEffect } from 'react'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
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
import { useToast } from '@/hooks/use-toast'
import { Edit, Trash2, Eye, Plus, ArrowLeft } from 'lucide-react'
import { format } from 'date-fns'
import { articlesService, type Article, type ArticlesResponse } from '@/services/articles.service'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function ArticlesManagementPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [password, setPassword] = useState('')

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
        title: 'Yêu cầu xác thực',
        description: `Vui lòng nhập mật khẩu để ${actionText[action]}`,
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
        title: 'Mật khẩu không đúng',
        description: `Mật khẩu sai. Không thể ${actionText[action]}`,
        variant: 'destructive',
      })
      return false
    }
    
    console.log('Password is correct')
    return true
  }

  useEffect(() => {
    fetchArticles()
  }, [page])

  const fetchArticles = async () => {
    try {
      setIsLoading(true)
      const data = await articlesService.getAllArticles(page, 12)
      setArticles(data.data)
      setTotalPages(Math.ceil(data.total / data.limit))
    } catch (error) {
      toast({
        title: 'Lỗi',
        description: 'Không thể tải danh sách bài viết',
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
        title: 'Thành công',
        description: 'Xóa bài viết thành công',
      })
      fetchArticles() // Reload the list
    } catch (error) {
      toast({
        title: 'Lỗi',
        description: 'Không thể xóa bài viết',
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

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="w-full px-16 lg:px-32 py-12">
          <Button
            variant="ghost"
            onClick={() => router.back()}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Quay lại
          </Button>
          <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-6 gap-4">
            <h1 className="text-2xl lg:text-3xl font-bold">Quản lý bài viết</h1>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex flex-col gap-1">
                <Input
                  id="password"
                  type="password"
                  placeholder="Mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-32 sm:w-40"
                />
              </div>
              <Button
                onClick={() => {
                  if (checkPassword('create')) {
                    router.push('/articles/write-article')
                  }
                }}
                className="flex items-center gap-2 text-sm bg-[#0984c7] hover:bg-[#00A8E8] active:bg-[#22C55E] text-white transition-colors duration-200 transform hover:scale-105 active:scale-95"
              >
                <Plus className="h-4 w-4" />
                <span className="hidden sm:inline">Viết bài mới</span>
                <span className="sm:hidden">Viết bài</span>
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Danh sách bài viết</CardTitle>
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
                    onClick={() => {
                      if (checkPassword('create')) {
                        router.push('/articles/write-article')
                      }
                    }}
                    variant="outline"
                    className="border-[#0984c7] text-[#0984c7] hover:bg-[#00A8E8] hover:text-white hover:border-[#00A8E8] active:bg-[#22C55E] active:border-[#22C55E] transition-all duration-200 transform hover:scale-105 active:scale-95"
                  >
                    Viết bài đầu tiên
                  </Button>
                </div>
              ) : (
                <>
                  <div className="overflow-x-auto -mx-4 px-4 sm:-mx-6 sm:px-6">
                    <Table className="w-full">
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[40%] min-w-[120px]">Tiêu đề</TableHead>
                          <TableHead className="w-[25%] min-w-[100px] hidden md:table-cell">Tóm tắt</TableHead>
                          <TableHead className="w-[15%] min-w-[80px]">Trạng thái</TableHead>
                          <TableHead className="w-[20%] min-w-[100px] hidden lg:table-cell">Ngày tạo</TableHead>
                          <TableHead className="w-[90px] min-w-[90px]">Thao tác</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {articles.map((article) => (
                          <TableRow key={article.id}>
                            <TableCell className="font-medium max-w-0 truncate pr-2">
                              <div className="truncate" title={article.title}>
                                {article.title}
                              </div>
                            </TableCell>
                            <TableCell className="max-w-0 truncate hidden md:table-cell pr-2">
                              <div className="truncate" title={article.excerpt || 'Không có tóm tắt'}>
                                {article.excerpt || 'Không có tóm tắt'}
                              </div>
                            </TableCell>
                            <TableCell className="pr-2">
                              <Badge className={`${getStatusColor(article.status)} text-xs px-1.5 py-0.5`}>
                                <span className="hidden sm:inline">{getStatusText(article.status)}</span>
                                <span className="sm:hidden">
                                  {article.status === 'published' ? 'PUB' : article.status === 'draft' ? 'DRA' : 'ARC'}
                                </span>
                              </Badge>
                            </TableCell>
                            <TableCell className="hidden lg:table-cell pr-2 text-sm">
                              {format(new Date(article.created_at), 'dd/MM/yyyy')}
                            </TableCell>
                            <TableCell className="pr-0">
                              <div className="flex items-center gap-0.5">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => router.push(`/articles/${article.slug}`)}
                                  className="h-7 w-7 p-0"
                                  title="Xem"
                                >
                                  <Eye className="h-3 w-3" />
                                </Button>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    if (checkPassword('edit')) {
                                      router.push(`/articles/write-article?id=${article.id}`)
                                    }
                                  }}
                                  className="h-7 w-7 p-0"
                                  title="Sửa"
                                >
                                  <Edit className="h-3 w-3" />
                                </Button>
                                <AlertDialog>
                                  <AlertDialogTrigger asChild>
                                    <Button variant="outline" size="sm" className="h-7 w-7 p-0" title="Xóa">
                                      <Trash2 className="h-3 w-3 text-red-500" />
                                    </Button>
                                  </AlertDialogTrigger>
                                  <AlertDialogContent className="max-w-sm sm:max-w-md">
                                    <AlertDialogHeader>
                                      <AlertDialogTitle>Xác nhận xóa</AlertDialogTitle>
                                      <AlertDialogDescription>
                                        Bạn có chắc chắn muốn xóa bài viết "{article.title}"? 
                                        Thao tác này không thể hoàn tác.
                                      </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                      <AlertDialogCancel>Hủy</AlertDialogCancel>
                                      <AlertDialogAction
                                        onClick={() => {
                                          if (checkPassword('delete')) {
                                            handleDeleteArticle(article.id)
                                          }
                                        }}
                                        className="bg-red-500 hover:bg-red-600"
                                      >
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

                  {/* Pagination */}
                  {totalPages > 1 && (() => {
                    const itemsPerPage = 12
                    const startItem = (page - 1) * itemsPerPage + 1
                    const endItem = Math.min(page * itemsPerPage, articles.length + startItem - 1)
                    const totalItems = totalPages * itemsPerPage
                    
                    const pages: (number | string)[] = []
                    
                    // Show first page
                    pages.push(1)
                    
                    // Show 2 pages before current
                    if (page > 3) {
                      pages.push('...')
                    }
                    if (page - 2 > 1) {
                      pages.push(page - 2)
                    }
                    if (page - 1 > 1) {
                      pages.push(page - 1)
                    }
                    
                    // Show current page
                    if (page !== 1 && page !== totalPages) {
                      pages.push(page)
                    }
                    
                    // Show 2 pages after current
                    if (page + 1 < totalPages) {
                      pages.push(page + 1)
                    }
                    if (page + 2 < totalPages) {
                      pages.push(page + 2)
                    }
                    
                    // Show last page
                    if (totalPages > 1 && !pages.includes(totalPages)) {
                      if (pages[pages.length - 1] !== '...') {
                        pages.push('...')
                      }
                      pages.push(totalPages)
                    }
                    
                    return (
                      <div className="flex flex-col items-center gap-4 py-6 mt-6 border-t">
                        <div className="text-sm text-muted-foreground text-center">
                          {startItem} to {endItem} of {totalItems}
                        </div>
                        <div className="flex justify-center items-center gap-1 sm:gap-2 flex-wrap">
                          <Button
                            variant="outline"
                            onClick={() => setPage(1)}
                            disabled={page === 1}
                            className="text-xs px-2 sm:px-3"
                          >
                            <span className="hidden sm:inline">First</span>
                            <span className="sm:hidden">Đầu</span>
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setPage(page - 1)}
                            disabled={page === 1}
                            className="text-xs px-2 sm:px-3"
                          >
                            <span className="hidden sm:inline">Trang trước</span>
                            <span className="sm:hidden">Trước</span>
                          </Button>
                          
                          {pages.map((p, idx) => (
                            <React.Fragment key={idx}>
                              {p === '...' ? (
                                <span className="px-1 sm:px-2 text-muted-foreground">...</span>
                              ) : (
                                <Button
                                  variant={p === page ? 'default' : 'outline'}
                                  onClick={() => typeof p === 'number' && setPage(p)}
                                  className="h-8 w-8 sm:h-9 sm:w-9 p-0 text-xs"
                                >
                                  {p}
                                </Button>
                              )}
                            </React.Fragment>
                          ))}
                          
                          <Button
                            variant="outline"
                            onClick={() => setPage(page + 1)}
                            disabled={page === totalPages}
                            className="text-xs px-2 sm:px-3"
                          >
                            <span className="hidden sm:inline">Trang sau</span>
                            <span className="sm:hidden">Sau</span>
                          </Button>
                          <Button
                            variant="outline"
                            onClick={() => setPage(totalPages)}
                            disabled={page === totalPages}
                            className="text-xs px-2 sm:px-3"
                          >
                            <span className="hidden sm:inline">Last</span>
                            <span className="sm:hidden">Cuối</span>
                          </Button>
                        </div>
                      </div>
                    )
                  })()}
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  )
}
