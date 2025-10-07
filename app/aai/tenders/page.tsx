import TopNav from "@/components/aai/top-nav"
import { Download, Eye, Bookmark } from "lucide-react"
import TendersTable from "@/components/aai/TendersTable"
import Footer from "@/components/aai/footer"

const sidebar = [
  "Tender Search",
  "E-Tender",
  "Notice inviting Tender",
  "Restriction on Issue of Tender for AAI Projects",
  "Contract Award",
  "Status of Tenders/Contracts",
]

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
  {
    id: 4,
    title: "Tender Published for Supply of Equipment and Materials for Aviation Operations in July 2025",
    date: "13-08-2025",
  },
  {
    id: 5,
    title: "Tender in Progress for Technical Consultancy and Advisory Services Project in July 2025",
    date: "13-08-2025",
  },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#0d141c]">
      <TopNav />
      <section className="mx-auto max-w-6xl px-6 py-6 md:py-8">
        <div className="flex gap-6">
          {/* Sidebar */}
          <aside className="hidden w-64 shrink-0 rounded-md border border-[#e5e8eb] md:block">
            <div className="bg-[#e6edff] px-4 py-3 text-xs font-semibold text-[#0d141c]">TENDER</div>
            <nav className="p-2">
              <ul className="text-sm">
                {sidebar.map((label, i) => {
                  const active = label === "Status of Tenders/Contracts"
                  return (
                    <li key={label}>
                      <a
                        href="#"
                        className={`block rounded px-3 py-2 ${
                          active ? "bg-[#3c4ba7] text-[#ffffff]" : "text-[#0d141c] hover:bg-[#e6edff]"
                        }`}
                        aria-current={active ? "page" : undefined}
                      >
                        {label}
                      </a>
                    </li>
                  )
                })}
              </ul>
            </nav>
          </aside>

          {/* Main */}
          <div className="flex-1">
            <div className="rounded-md border border-[#e5e8eb] bg-[#ffffff]">
              <header className="flex items-center justify-between border-b border-[#e5e8eb] px-4 py-3">
                <h2 className="text-base font-semibold">Status of Tenders/Contracts</h2>
              </header>

              <TendersTable rows={rows} />

              {/* Pagination */}
              <div className="flex items-center justify-center gap-1 p-4">
                {Array.from({ length: 10 }).map((_, i) => (
                  <button
                    key={i}
                    className={`h-8 w-8 rounded border border-[#e5e8eb] text-xs ${
                      i === 0 ? "bg-[#3c4ba7] text-[#ffffff]" : "hover:bg-[#e6edff]"
                    }`}
                    aria-current={i === 0 ? "page" : undefined}
                  >
                    {i + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer area */}
            
          </div>
        </div>
      </section>
      <Footer />

    </main>
  )
}
