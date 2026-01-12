"use client"

import Image from "next/image"
import { useTranslation } from 'react-i18next'

interface Partner {
  nameKey: string
  logo: string
}

const partnerConfigs: Partner[] = [
  { nameKey: "partners.carousel.scienceMinistry", logo: "https://icss.com.vn/wp-content/uploads/2018/09/LOGO-BO-KHOA-HOC-VA-CONG-NGHE.jpg" },
  { nameKey: "partners.carousel.environmentMinistry", logo: "https://icss.com.vn/wp-content/uploads/2018/09/logo-bo-tai-nguyen-moi-turong.jpg" },
  { nameKey: "partners.carousel.evn", logo: "https://icss.com.vn/wp-content/uploads/2018/09/LOGO-EVN.jpg" },
  { nameKey: "partners.carousel.hmm", logo: "https://icss.com.vn/wp-content/uploads/2018/09/logo-hmm.jpg" },
  { nameKey: "partners.carousel.ademax", logo: "https://icss.com.vn/wp-content/uploads/2018/09/logo-ademax.jpg" },
  { nameKey: "partners.carousel.healthMinistry", logo: "https://icss.com.vn/wp-content/uploads/2018/09/logo-bo-y-te-1.jpg" },
  { nameKey: "partners.carousel.logo1", logo: "https://icss.com.vn/wp-content/uploads/2018/09/LOGO1.jpg" },
]

export function PartnersSection() {
  const { t } = useTranslation()
  
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="w-full px-16 lg:px-32">
        <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4 text-balance">{t('home.partners.title')}</h2>
        <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
          {t('home.partners.subtitle')}
        </p>

        <div className="relative overflow-hidden">
          <div className="flex gap-12 scroll-animation">
            {[...partnerConfigs, ...partnerConfigs, ...partnerConfigs].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-[160px] h-[90px] bg-card rounded-lg border border-border hover:shadow-lg transition-all grayscale hover:grayscale-0 hover:scale-105 p-4"
              >
                <Image
                  src={partner.logo}
                  alt={t(partner.nameKey)}
                  width={120}
                  height={60}
                  className="object-contain max-h-[60px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

