import { ArrowRight, ChevronRight } from "lucide-react"
import TopNav from "@/components/aai/top-nav"
import HeroSearch from "@/components/aai/hero-search"
import NoticeTabs from "@/components/aai/notice-tabs"
import Footer from "@/components/aai/footer"
import DosDontsCarousel from "@/components/aai/dos-donts_carousel"

export default function Page() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#0d141c]">
      <TopNav />
      <HeroSearch />
      {/* Carousel inserted here */}
      <section className="mx-auto max-w-5xl px-6 py-8">
        <DosDontsCarousel />
      </section>
      <section className="mx-auto max-w-5xl px-6 py-10">
        {/* banner placeholder */}
        <div className="rounded-lg border border-[#e5e8eb] bg-[#e5e8eb] h-40 w-full" aria-hidden="true" />
      </section>

      <section className="mx-auto max-w-5xl px-6 pb-12">
        <NoticeTabs />
      </section>

      <Footer />
    </main>
  )
}
