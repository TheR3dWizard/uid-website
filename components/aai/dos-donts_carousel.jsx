"use client"

import { useRef } from "react"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from "lucide-react"



export default function DosDontsCarousel() {
  const containerRef = useRef(null)

  function scroll(delta = 300) {
    if (!containerRef.current) return
    containerRef.current.scrollBy({ left: delta, top: 0, behavior: "smooth" })
  }

  return (
    <section className="mx-auto max-w-5xl px-6">
      

      <div
        ref={containerRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {/* Single card used as the carousel item */}
        <Link
          href="/banned_items"
          className="min-w-[280px] max-w-[380px] snap-start"
        >
          <article
            className="h-full rounded-2xl border border-[#e5e8eb] p-6 bg-white hover:shadow-[0_6px_18px_rgba(7,102,229,0.12)] transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                  Don't — Banned on Person/Carry-on
                </span>
              </div>

              <h3 className="text-lg font-semibold text-[#0d141c] mb-2">
                Items Prohibited in Hand / Carry-on Baggage
              </h3>
              <p className="text-sm text-[#555]">
                Click to view the full, categorized list of items banned on board flights operating from Indian civil airports and Indian-registered aircraft. The page explains each category simply and shows exceptions where applicable.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-xs text-[#777]">View full list</span>
              <ChevronRight size={18} className="text-[#0766e5]" />
            </div>
          </article>
        </Link>
      </div>
    </section>
  )
}
