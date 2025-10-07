import { Download, Eye, Bookmark } from "lucide-react"

export interface TenderRow {
  id: number
  title: string
  date: string
}

interface TendersTableProps {
  rows: TenderRow[]
}

export default function TendersTable({ rows }: TendersTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead className="bg-[#f7fafc] text-[#0d141c]/80">
          <tr className="border-b border-[#e5e8eb]">
            <th className="px-4 py-3 text-left w-16">S. No.</th>
            <th className="px-4 py-3 text-left">Title</th>
            <th className="px-4 py-3 text-left w-40">Upload Date</th>
            <th className="px-4 py-3 text-left w-48">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, idx) => (
            <tr key={r.id} className="border-b border-[#e5e8eb]">
              <td className="px-4 py-3">{idx + 1}</td>
              <td className="px-4 py-3">
                <a href="#" className="text-[#0766e5] hover:underline">
                  {r.title}
                </a>
              </td>
              <td className="px-4 py-3">{r.date}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <button
                    aria-label="View"
                    className="rounded border border-[#e5e8eb] p-2 hover:bg-[#e6edff]"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button className="ml-2 rounded border border-[#e5e8eb] px-3 py-1.5 text-xs font-medium hover:bg-[#e6edff]">
                    <Download className="mr-1 inline h-4 w-4 align-[-2px]" />
                    Download
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}