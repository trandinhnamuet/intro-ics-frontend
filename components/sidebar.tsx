"use client"

import Link from "next/link"
import { useState, FormEvent } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"
import { contactService } from "@/services/contact.service"
import { CheckCircle2 } from "lucide-react"

const EMPTY_FORM = { fullName: "", email: "", phone: "", content: "" }

export function Sidebar() {
  const { t } = useTranslation()
  const [form, setForm] = useState(EMPTY_FORM)
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (field: keyof typeof EMPTY_FORM) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setSubmitting(true)
    try {
      await contactService.sendContact({
        fullName: form.fullName.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        content: form.content.trim() || undefined,
      })
      setSuccess(true)
      setForm(EMPTY_FORM)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Gửi thất bại. Vui lòng thử lại.")
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <aside className="w-[300px] flex-shrink-0 space-y-5 sticky top-24 h-fit">
      {/* Navigation Links */}
      <Card className="overflow-hidden border-none shadow-md">
        <div className="bg-[#0984c7] text-white px-4 py-3 text-center font-semibold text-sm">
          {t('sidebar.aboutICS')}
        </div>
        <div className="bg-muted/50">
          <Link
            href="/gioi-thieu"
            className="block px-4 py-2.5 text-[#0984c7] hover:bg-muted/80 transition-colors border-b border-border text-sm"
          >
            ⊕ {t('sidebar.generalIntro')}
          </Link>
          <Link
            href="/doi-tac"
            className="block px-4 py-2.5 text-[#0984c7] hover:bg-muted/80 transition-colors border-b border-border text-sm"
          >
            ⊕ {t('sidebar.partners')}
          </Link>
          <Link
            href="/khach-hang"
            className="block px-4 py-2.5 text-[#0984c7] hover:bg-muted/80 transition-colors border-b border-border text-sm"
          >
            ⊕ {t('sidebar.clients')}
          </Link>
          <Link
            href="/hoat-dong-xa-hoi"
            className="block px-4 py-2.5 text-[#0984c7] hover:bg-muted/80 transition-colors text-sm"
          >
            ⊕ {t('sidebar.socialActivities')}
          </Link>
        </div>
      </Card>

      {/* Recruitment Section */}
      <div className="bg-[#0984c7] text-white px-3 py-2 text-sm font-semibold rounded">
        {t('sidebar.newsRecruitment')}
      </div>

      {/* Contact Form */}
      <Card className="p-4 shadow-md">
        <h3 className="text-lg font-bold mb-4">{t('sidebar.contactUs')}</h3>

        {success ? (
          <div className="flex flex-col items-center gap-3 py-4 text-center">
            <CheckCircle2 className="w-12 h-12 text-green-500" />
            <p className="font-semibold text-green-700">Gửi thành công!</p>
            <p className="text-sm text-gray-600">Chúng tôi sẽ liên hệ với bạn sớm nhất.</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => setSuccess(false)}
            >
              Gửi liên hệ khác
            </Button>
          </div>
        ) : (
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium mb-1">{t('sidebar.form.fullName')} *</label>
              <input
                type="text"
                required
                value={form.fullName}
                onChange={handleChange("fullName")}
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t('sidebar.form.fullNamePlaceholder')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t('sidebar.form.email')} *</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={handleChange("email")}
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t('sidebar.form.emailPlaceholder')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t('sidebar.form.phone')} *</label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={handleChange("phone")}
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={t('sidebar.form.phonePlaceholder')}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">{t('sidebar.form.content')}</label>
              <textarea
                rows={4}
                value={form.content}
                onChange={handleChange("content")}
                className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder={t('sidebar.form.contentPlaceholder')}
              />
            </div>
            {error && (
              <p className="text-sm text-red-600 bg-red-50 rounded px-3 py-2">{error}</p>
            )}
            <Button
              type="submit"
              disabled={submitting}
              className="w-full bg-[#0984c7] hover:bg-[#0770a8] text-white"
            >
              {submitting ? "Đang gửi..." : t('sidebar.form.submit')}
            </Button>
          </form>
        )}
      </Card>
    </aside>
  )
}
