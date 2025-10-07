"use client"

import { usePathname } from "next/navigation"

export default function TopNav() {
  const pathname = usePathname()
  const items = [
    { label: "Lost & Found", href: "/aai/lost_and_found" },
    { label: "Airports", href: "/aai/airports" },
    { label: "Business Info", href: "#" },
    { label: "Services", href: "#" },
    { label: "Tenders", href: "/aai/tenders" },
    { label: "Vigilance", href: "#" },
    { label: "Public Info", href: "/aai/public-info" },
  ]
  return (
    <header className="w-full border-b border-[#e5e8eb] bg-[#ffffff]">
      <div className="mx-auto max-w-6xl px-6">
        <nav className="flex h-11 items-center justify-between text-xs">
          <a href="/aai" className="flex items-center gap-3">
          <ul className="flex items-start gap-5">
            <img src="/images/aai-logo.png" alt="AAI Logo" className="h-6 w-auto" />
            <h1 className="text-balance font-semibold text-[#0766e5] pt-2">
              Airports Authority of India
            </h1>
          </ul>
          </a>
          <ul className="flex items-center gap-5">
            {items.map((item) => {
              const active = pathname?.startsWith(item.href) && item.href !== "#"
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`relative inline-flex items-center pb-2 pt-2 text-[#0d141c] hover:text-[#0766e5] ${
                      active ? "text-[#0766e5]" : ""
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                    {active && (
                      <span
                        aria-hidden="true"
                        className="absolute -bottom-[2px] left-0 h-[2px] w-full bg-[#0766e5] rounded"
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center gap-4">
            <button aria-label="Language" className="h-6 w-6 rounded-full border border-[#e5e8eb] bg-[#ffffff]" >
              <img src="/images/Settings.svg" alt="Language Icon" className="" />
            </button>
            <button aria-label="Profile" className="h-6 w-6 rounded-full border border-[#e5e8eb] bg-[#ffffff]">
              <img src="/images/profile.png" alt="User Icon" className="" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
