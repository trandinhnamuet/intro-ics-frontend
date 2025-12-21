"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  return (
    <aside className="w-[300px] flex-shrink-0 space-y-5">
      {/* Navigation Links */}
      <Card className="overflow-hidden border-none shadow-md">
        <div className="bg-[#0984c7] text-white px-4 py-3 text-center font-semibold text-sm">
          GIỚI THIỆU ICS
        </div>
        <div className="bg-muted/50">
          <Link
            href="/gioi-thieu"
            className="block px-4 py-2.5 text-[#0984c7] hover:bg-muted/80 transition-colors border-b border-border text-sm"
          >
            ⊕ Giới thiệu chung
          </Link>
          <Link
            href="/doi-tac"
            className="block px-4 py-2.5 text-[#0984c7] hover:bg-muted/80 transition-colors border-b border-border text-sm"
          >
            ⊕ Đối tác
          </Link>
          <Link
            href="/khach-hang"
            className="block px-4 py-2.5 text-[#0984c7] hover:bg-muted/80 transition-colors border-b border-border text-sm"
          >
            ⊕ Khách hàng
          </Link>
          <Link
            href="/hoat-dong-xa-hoi"
            className="block px-4 py-2.5 text-[#0984c7] hover:bg-muted/80 transition-colors text-sm"
          >
            ⊕ Hoạt động xã hội
          </Link>
        </div>
      </Card>

      {/* Recruitment Section */}
      <div className="bg-[#ff6b35] text-white px-3 py-2 text-sm font-semibold rounded">
        TIN TỨC - TUYỂN DỤNG
      </div>

      {/* Contact Form */}
      <Card className="p-4 shadow-md">
        <h3 className="text-lg font-bold mb-4">Liên hệ với chúng tôi</h3>
        <form className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">Họ và tên *</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Nhập họ tên"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email *</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Nhập email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Số điện thoại *</label>
            <input
              type="tel"
              required
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Nhập số điện thoại"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Nội dung</label>
            <textarea
              rows={4}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder="Nhập nội dung liên hệ"
            />
          </div>
          <Button type="submit" className="w-full bg-[#0984c7] hover:bg-[#0770a8] text-white">
            Gửi liên hệ
          </Button>
        </form>
      </Card>
    </aside>
  )
}
