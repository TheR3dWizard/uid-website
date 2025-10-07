import { ArrowRight, ChevronRight } from "lucide-react"


export default function Footer() {
  return (

    <footer className="bg-gray-100 py-6 mt-10">
      <ul className="flex justify-between">
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="pt-6">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <div className="mt-4 text-sm leading-6">
              <p>Indian Airport Authority Headquarters</p>
              <p>Rajiv Gandhi Bhawan, Safdarjung Airport,</p>
              <p>New Delhi: 110003</p>
              <p>Phone: +91-11-12345678</p>
              <p>Fax: +91-11-98765432</p>
              <p>Email: contact@indianairportauthority.gov.in</p>
            </div>
          </div>
        </div>
      </section>  
      <section className="mx-auto max-w-5xl px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Important Links</h3>
            <ul className="list-none space-y-4">
              <li>
                <ul className="flex items-center gap-4 w-full">
                  <li>
                    <a className="text-[#0766e5] underline-offset-2 hover:underline" href="#">
                      Media/Press Releases
                    </a>
                  </li>
                  <li>
                    <button
                      aria-label="Go to next section"
                      className="rounded-full border border-[#e5e8eb] p-3 hover:bg-[#e6edff] transition-colors"
                    >
                      <ArrowRight className="h-5 w-5 text-[#0d141c]" />
                    </button>
                  </li>
                </ul>
              </li>
              <ul className="flex items-center gap-4 w-full">
                  <li>
                    <a className="text-[#0766e5] underline-offset-2 hover:underline" href="#">
                      Training Institutes
                    </a>
                  </li>
                  <li>
                    <button
                      aria-label="Go to next section"
                      className="rounded-full border border-[#e5e8eb] p-3 hover:bg-[#e6edff] transition-colors"
                    >
                      <ArrowRight className="h-5 w-5 text-[#0d141c]" />
                    </button>
                  </li>
                </ul>
            </ul>

          
          </div>
        </div>
      </section>
    </ul>
    </footer>
  );
}
