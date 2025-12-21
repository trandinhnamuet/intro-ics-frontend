import { Header } from "@/components/header"
import { HeroSlider } from "@/components/hero-slider"
import { ProductsSection } from "@/components/products-section"
import { NewsSection } from "@/components/news-section"
import { PartnersSection } from "@/components/partners-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <ProductsSection />
        <NewsSection />
        <PartnersSection />
      </main>
      <Footer />
    </div>
  )
}
