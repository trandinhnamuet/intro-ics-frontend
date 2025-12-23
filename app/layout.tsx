import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/components/providers/i18n-provider"
import { Toaster } from "@/components/ui/toaster"
import { FloatingActionButton } from "@/components/ui/floating-action-button"
import "./globals.css"

const inter = Inter({ subsets: ["latin", "vietnamese"] })

export const metadata: Metadata = {
  title: "ICS - Công ty An Ninh Mạng Quốc Tế",
  description: "Giải pháp an ninh mạng toàn diện cho doanh nghiệp",
  generator: "ICS",
  icons: {
    icon: [
      {
        url: "https://icss.com.vn/wp-content/uploads/2025/08/Thiet-ke-chua-co-ten-23-1024x1024.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "https://icss.com.vn/wp-content/uploads/2025/08/Thiet-ke-chua-co-ten-23-1024x1024.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/images/ics_logo.png",
        type: "image/png",
      },
    ],
    apple: "/images/ics_logo.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <I18nProvider>
            {children}
            <FloatingActionButton />
          </I18nProvider>
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
