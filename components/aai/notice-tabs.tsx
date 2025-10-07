"use client"

import { useState } from "react"
import TendersTable from "./TendersTable"

type Notice = { id: number; title: string; excerpt: string }

const notices: Notice[] = [
  {
    id: 1,
    title: "Security Measures Enhanced at All Airports",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel dignissim eros. In blandit nibh vel eleifend imperdiet.",
  },
  {
    id: 2,
    title: "New Baggage Allowance Policy",
    excerpt:
      "Sed tempor mattis nulla, vitae tempus nunc iaculis ac. Ut convallis pulvinar vulputate. Aliquam erat volutpat.",
  },
  {
    id: 3,
    title: "Airport Expansion Project Update",
    excerpt: "Vestibulum dignissim posuere urna non consectetur. Nullam efficitur ultrices odio commodo iaculis.",
  },
]

export default function NoticeTabs() {
  const [tab, setTab] = useState<"notices" | "tenders" | "gallery">("notices")

  const rows = [
  {
    id: 1,
    title: "Tender in Progress for Infrastructure Development and Modernization Project in August 2025",
    date: "23-08-2025",
  },
  {
    id: 2,
    title: "Tender Published for Airport Terminal Expansion and Construction Services in August 2025",
    date: "22-08-2025",
  },
  {
    id: 3,
    title: "No Response Tender for Maintenance and Repair Services Contract in August 2025",
    date: "22-08-2025",
  },
]

  return (
    <div className="w-full">
      <div className="flex items-center gap-6 border-b border-[#e5e8eb]">
        <button
          className={`py-3 text-sm ${tab === "notices" ? "text-[#0766e5]" : "text-[#0d141c]/80"}`}
          aria-current={tab === "notices" ? "page" : undefined}
          onClick={() => setTab("notices")}
        >
          Important Notices
        </button>
        <button
          className={`py-3 text-sm ${tab === "tenders" ? "text-[#0766e5]" : "text-[#0d141c]/80"}`}
          onClick={() => setTab("tenders")}
        >
          Latest Tenders
        </button>
        <button
          className={`py-3 text-sm ${tab === "gallery" ? "text-[#0766e5]" : "text-[#0d141c]/80"}`}
          onClick={() => setTab("gallery")}
        >
          Photo Gallery
        </button>
      </div>

      {tab === "notices" && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-[1fr_320px] gap-8">
          <div className="space-y-8">
            {notices.map((n) => (
              <article key={n.id} className="grid gap-2">
                <span className="text-xs text-[#0766e5]">Notice</span>
                <h4 className="text-sm md:text-base font-semibold">{n.title}</h4>
                <p className="text-sm leading-6 text-[#0d141c]/80">{n.excerpt}</p>
              </article>
            ))}
          </div>

          <aside className="grid gap-6">
            <div className="h-28 w-full rounded-md border border-[#e5e8eb] bg-[#e5e8eb]" aria-hidden="true" />
            <div className="h-28 w-full rounded-md border border-[#e5e8eb] bg-[#e5e8eb]" aria-hidden="true" />
            <div className="h-28 w-full rounded-md border border-[#e5e8eb] bg-[#e5e8eb]" aria-hidden="true" />
          </aside>
        </div>
      )}

      {tab === "tenders" && (
        <div className="mt-6 rounded-md border border-[#e5e8eb] bg-[#ffffff] p-6 text-sm">
          <TendersTable rows={rows} />
        </div>
        
      )}
      {tab === "gallery" && (
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
          <img
            alt="Placeholder"
            src="/airport-gallery-image.jpg"
            className="h-28 w-full rounded-md border border-[#e5e8eb] object-cover"
          />
          <img
            alt="Placeholder"
            src="/airport-gallery-image.jpg"
            className="h-28 w-full rounded-md border border-[#e5e8eb] object-cover"
          />
          <img
            alt="Placeholder"
            src="/airport-gallery-image.jpg"
            className="h-28 w-full rounded-md border border-[#e5e8eb] object-cover"
          />
        </div>
      )}
    </div>
  )
}
