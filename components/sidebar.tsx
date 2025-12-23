"use client"

import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useTranslation } from "react-i18next"

export function Sidebar() {
  const { t } = useTranslation()
  
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
      <div className="bg-[#ff6b35] text-white px-3 py-2 text-sm font-semibold rounded">
        {t('sidebar.newsRecruitment')}
      </div>

      {/* Contact Form */}
      <Card className="p-4 shadow-md">
        <h3 className="text-lg font-bold mb-4">{t('sidebar.contactUs')}</h3>
        <form className="space-y-3">
          <div>
            <label className="block text-sm font-medium mb-1">{t('sidebar.form.fullName')} *</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={t('sidebar.form.fullNamePlaceholder')}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('sidebar.form.email')} *</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={t('sidebar.form.emailPlaceholder')}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('sidebar.form.phone')} *</label>
            <input
              type="tel"
              required
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={t('sidebar.form.phonePlaceholder')}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">{t('sidebar.form.content')}</label>
            <textarea
              rows={4}
              className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
              placeholder={t('sidebar.form.contentPlaceholder')}
            />
          </div>
          <Button type="submit" className="w-full bg-[#0984c7] hover:bg-[#0770a8] text-white">
            {t('sidebar.form.submit')}
          </Button>
        </form>
      </Card>
    </aside>
  )
}
