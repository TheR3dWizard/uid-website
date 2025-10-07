import TopNav from "@/components/aai/top-nav"
import Footer from "@/components/aai/footer"
import { Landmark, HelpCircle, MapPin, ImageIcon, Building2, ShoppingCart, Award, GaugeCircle } from "lucide-react"


function IconTile({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-md bg-[#3c4ba7] text-[#ffffff] shadow-sm ">
      {children}
    </div>
  )
}

function ImageTile({str,children}: {str: string, children: React.ReactNode}) {
  return (
    <div className="w-64 h-48 bg-white rounded-[19px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-black">
            <ul className="columns-2 gap-y-2 gap-x-4 flex flex-col items-center justify-center h-full">
              <li>
                {children}
              </li>
              <li>
                {str}
              </li>
            </ul>
          </div>
  )
}


export default function Page() {

    const pills = [
      "Arrivals",
      "Departures",
      "Tourist Spots",
      "Transport Services"
    ]



    return (
        <main className="min-h-screen bg-[#ffffff] text-[#0d141c]">
              <TopNav />
              <section className="w-full bg-[#e6edff]">
                <div className="mx-auto max-w-5xl px-6 py-8 md:py-10">
                    <div className="flex items-center gap-3">
                    {/* simple airplane mark */}
                    <img src="/images/aai-logo.png" alt="AAI Logo" className="h-8 w-16" />
                    <h1 className="text-balance text-2xl md:text-3xl font-semibold text-[#0766e5]">
                        Chennai International Airport
                    </h1>
                    </div>

                    <form
                    className="mt-6 flex w-full items-stretch overflow-hidden rounded-md border border-[#e5e8eb] bg-[#ffffff]"
                    role="search"
                    aria-label="Site search"
                    >
                    <input
                        placeholder="Find embassies, tourist spots and more"
                        className="w-full px-4 py-3 text-sm outline-none placeholder:text-[#0d141c]/60"
                    />
                    <button type="submit" className="bg-[#0766e5] px-5 py-3 text-sm font-medium text-[#ffffff] hover:opacity-95">
                        Search Anything
                    </button>
                    </form>

                    <div className="mt-4 flex flex-wrap gap-3">
                    {pills.map((p) => (
                        <a
                        key={p}
                        href="#"
                        className="rounded-full border border-[#e5e8eb] bg-[#ffffff] px-3 py-1 text-xs text-[#0d141c] hover:bg-[#e6edff]"
                        >
                        {p}
                        </a>
                    ))}
                    </div>
                </div>
                </section>
                <div className="h-8"></div>
                <section className="mx-auto max-w-6xl px-6">
                    <div className="grid grid-cols-3 place-items-center gap-x-64 gap-y-24 md:grid-cols-3">
                    <ImageTile str="Embassy">
                        <IconTile>
                        <Building2 className="h-8 w-8" />
                        </IconTile>
                    </ImageTile>
                    <ImageTile str="Conveniences">
                        <IconTile>
                        <HelpCircle className="h-8 w-8" />
                        </IconTile>
                    </ImageTile>
                    <ImageTile str="Tourist Places">
                        <IconTile>
                        <MapPin className="h-8 w-8" />
                        </IconTile>
                    </ImageTile>
                    <ImageTile str="Hotels">
                        <IconTile>
                        <ImageIcon className="h-8 w-8" />
                        </IconTile>
                    </ImageTile>
                    <ImageTile str="Eat and Dine">
                        <IconTile>
                        <Landmark className="h-8 w-8" />
                        </IconTile>
                    </ImageTile>
                    <ImageTile str="Achievement">
                        <IconTile>
                        <ShoppingCart className="h-8 w-8" />
                        </IconTile>
                    </ImageTile>
                    </div>
                    <div className="flex items-center gap-x-64 gap-y-24 md:grid-cols-3 mt-24 w-full justify-center">
                    <ImageTile str="Media Center">
                        <IconTile>
                        <Award className="h-8 w-8" />
                        </IconTile>
                    </ImageTile>
                    <ImageTile str="FAQs">
                        <IconTile>
                        <GaugeCircle className="h-8 w-8" />
                        </IconTile>
                    </ImageTile>
                    </div>
                </section>

        
              <Footer />
        </main>
    )
}