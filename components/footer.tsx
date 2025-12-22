"use client"

import Link from "next/link"
import { Facebook, Mail, Phone, Youtube } from "lucide-react"
import { useTranslation } from 'react-i18next'

export function Footer() {
  const { t } = useTranslation()
  
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="w-full px-16 lg:px-32 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">{t('footer.companyName')}</h3>
            <div className="space-y-2 text-secondary-foreground/90 leading-relaxed">
              <p>
                <strong>{t('footer.headquarter')}</strong> {t('footer.headquarterAddress')}
              </p>
              <p>
                <strong>{t('footer.office')}</strong> {t('footer.officeAddress')}
              </p>
              <p>
                <strong>{t('footer.phone')}</strong> 0931.487.231 - <strong>{t('footer.hotline')}</strong> 0931.487.231
              </p>
              <p>
                <strong>{t('footer.email')}</strong> info@icss.com.vn - <strong>{t('footer.website')}</strong> www.icss.com.vn
              </p>
            </div>

            <div className="flex gap-4 mt-6">
              <Link
                href="https://www.facebook.com/profile.php?id=61575247001986"
                target="_blank"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@ics_anm"
                target="_blank"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="TikTok"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </Link>
              <Link
                href="mailto:info@icss.com.vn"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
              <Link
                href="tel:0931487231"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.youtube.com/channel/UCpOn4kxyTtzmUldsDZoxLHg"
                target="_blank"
                className="w-10 h-10 rounded-full bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.products')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="http://oraclecloud.vn/" target="_blank" className="hover:text-primary transition-colors">
                  Oracle
                </Link>
              </li>
              <li>
                <Link
                  href="http://vietguardscan.icss.com.vn/"
                  target="_blank"
                  className="hover:text-primary transition-colors"
                >
                  VietGuard
                </Link>
              </li>
              <li>
                <Link href="http://smartdashboard.vn/" target="_blank" className="hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">{t('footer.consulting')}</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/toa-nha-thong-minh" className="hover:text-primary transition-colors">
                  {t('footer.smartBuilding')}
                </Link>
              </li>
              <li>
                <Link href="/esg" className="hover:text-primary transition-colors">
                  {t('footer.esgSolution')}
                </Link>
              </li>
              <li>
                <Link href="/ai-soc" className="hover:text-primary transition-colors">
                  {t('footer.aiSocSolution')}
                </Link>
              </li>
              <li>
                <Link href="/nha-may-thong-minh" className="hover:text-primary transition-colors">
                  {t('footer.smartFactory')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-secondary-foreground/70">
              {t('footer.copyright')}
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/gioi-thieu" className="hover:text-primary transition-colors">
                {t('footer.aboutIcs')}
              </Link>
              <Link href="/tin-tuc" className="hover:text-primary transition-colors">
                {t('footer.news')}
              </Link>
              <Link href="/lien-he" className="hover:text-primary transition-colors">
                {t('footer.contact')}
              </Link>
              <Link href="/tuyen-dung" className="hover:text-primary transition-colors">
                {t('footer.recruitment')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
