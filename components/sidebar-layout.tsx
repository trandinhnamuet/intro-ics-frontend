import { ReactNode } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Sidebar } from "@/components/sidebar"

interface SidebarLayoutProps {
  children: ReactNode
}

export function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24">
        <div className="w-full px-16 lg:px-32 py-12">
          <div className="flex gap-8">
            <Sidebar />
            <div className="flex-1">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
