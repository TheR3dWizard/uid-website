import TopNav from "@/components/aai/top-nav"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import Footer from "@/components/aai/footer"

const sidebar = [
  "Citizen Charter",
  "Right to Information",
  "Public Grievance",
  "Public Documents",
  "AAI Startup Initiative",
  "Sports Control Board",
  "Major Procurement Projections",
  "No Cost No Commitment Policy",
  "Latest Updates on Rules & Policies",
  "All ISO Certification",
  "Best Practices",
  "Dashboard on Backlog Vacancies",
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#ffffff] text-[#0d141c]">
      <TopNav />
      <section className="mx-auto max-w-6xl gap-6 px-6 py-6 md:flex">
        {/* Sidebar */}
        <aside className="hidden w-64 shrink-0 rounded-md border border-[#e5e8eb] md:block">
          <div className="bg-[#e6edff] px-4 py-3 text-xs font-semibold text-[#0d141c]">PUBLIC INFO</div>
          <nav className="p-2">
            <ul className="text-sm">
              {sidebar.map((label) => {
                const active = label === "AAI Startup Initiative"
                return (
                  <li key={label}>
                    <a
                      href="#"
                      className={`block rounded px-3 py-2 ${
                        active ? "bg-[#3c4ba7] text-[#ffffff]" : "hover:bg-[#e6edff]"
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

        {/* Main content */}
        <div className="flex-1">
          <div className="rounded-md border border-[#e5e8eb] bg-[#ffffff] p-5 md:p-6">
            <h1 className="text-lg md:text-xl font-semibold">Innovate for Airports</h1>
            <div className="mt-4 space-y-4 text-sm leading-6 text-[#0d141c]/90">
              <p>
                Startup India, a flagship initiative of the Government of India, aims to build a strong ecosystem for
                nurturing innovation and start-ups in the country. Airports Authority of India is embarking on a journey
                towards innovative solutions, especially crafted for the Indian Aviation industry.
              </p>
              <p>
                To achieve this objective, AAI has released its Start-up Policy 2024 by providing more definitive paths
                for participation of start-ups in finding solutions to the problems and challenges faced by AAI.
              </p>
            </div>

            <div className="mt-6 rounded-md border border-[#e5e8eb]">
              <div className="flex items-center justify-between border-b border-[#e5e8eb] px-4 py-3">
                <h2 className="text-sm font-semibold">Solutions Developed Under Start-up Policy 2019</h2>
                <a href="#" className="text-xs text-[#0766e5] hover:underline">
                  AAI Startup Policy
                </a>
              </div>

              <div className="p-2">
                <Accordion type="single" collapsible className="w-full">
                  {["Solution 1: Novtra", "Solution 2: S-VDOS", "Solution 3: SWAAM", "Solution 4: AMCOMS"].map(
                    (label, idx) => (
                      <AccordionItem key={label} value={`item-${idx}`} className="border-none">
                        <AccordionTrigger
                          className="my-1 rounded-md bg-[#3c4ba7] px-4 py-2 text-left text-sm font-medium text-[#ffffff] hover:no-underline"
                          chevronClassName="text-[#ffffff]"
                        >
                          {label}
                        </AccordionTrigger>
                        <AccordionContent className="rounded-md border border-[#e5e8eb] bg-[#ffffff] p-4 text-sm leading-6 text-[#0d141c]">
                          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae perferendis explicabo
                          quasi blanditiis necessitatibus.
                        </AccordionContent>
                      </AccordionItem>
                    ),
                  )}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
