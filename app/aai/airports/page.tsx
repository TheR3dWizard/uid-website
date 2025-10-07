"use client"
import type React from "react"
import { useState } from "react"
import TopNav from "@/components/aai/top-nav"
import Footer from "@/components/aai/footer"

const cityPills = [
  "Mumbai",
  "Delhi",
  "Kolkata",
  "Hyderabad",
  "Bengaluru",
  "Chennai",
  "Kochi",
  "Patna",
  "Coimbatore",
  "Goa",
]

const Airports = [
  "Chennai International Airport(Chennai)",
  "Indira Gandhi International Airport(Delhi)",
  "Netaji Subhas Chandra Bose International Airport(Kolkata)",
  "Kempegowda International Airport(Bengaluru)",
  "Chhatrapati Shivaji Maharaj International Airport(Mumbai)",
  "Cochin International Airport(Kochi)",
  "Jay Prakash Narayan Airport(Patna)",
  "Rajiv Gandhi International Airport(Hyderabad)",
  "Dabolim Airport(Goa)",
  "Coimbatore International Airport(Coimbatore)",
  "Pune Airport(Pune)",
  "Sardar Vallabhbhai Patel International Airport(Ahmedabad)",
  "Dr. Babasaheb Ambedkar International Airport(Nagpur)",
  "Chandigarh Airport(Chandigarh)",
  "Trivandrum International Airport(Thiruvananthapuram)",
  "Visakhapatnam Airport(Vizag)",
  "Lucknow Airport",
  "Jaipur International Airport",
  "Ahmedabad Airport",
  "Bhubaneswar Airport",
  "Ranchi Airport",
  "Guwahati Airport",
  "Tiruchirappalli International Airport(Tiruchirappalli)",
  "Mangaluru International Airport(Mangalore)",
  "Vijayawada Airport(Vijayawada)",
  "Madurai Airport",
  "Agartala Airport",
  "Aurangabad Airport",
  "Bagdogra Airport",
  "Baroda Airport",
  "Belgaum Airport",
  "Bhavnagar Airport",
  "Bikaner Airport",
  "Calicut International Airport",
  "Cuddapah Airport",
  "Dehradun Airport",
  "Gaya Airport",
  "Gorakhpur Airport",
  "Hubli Airport",
  "Imphal Airport",
]

export default function Page() {
  const [inputValue, setInputValue] = useState("")
  const [showDialog, setShowDialog] = useState(false)

  const filteredAirports = Airports.filter(
    (airport) =>
      airport.toLowerCase().includes(inputValue.toLowerCase()) &&
      inputValue.trim() !== ""
  )

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    if (!inputValue.trim()) return

    // Check if entered value matches any airport or city
    const matchFound = Airports.some((airport) =>
      airport.toLowerCase().includes(inputValue.toLowerCase())
    )

    if (matchFound) {
      window.location.href = "/aai/airports/airport"
    } else {
      setShowDialog(true)
    }
  }

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#0d141c]">
      <TopNav />

      {/* Hero search */}
      <section className="w-full bg-[#e6edff]">
        <div className="mx-auto max-w-6xl px-6 py-6">
          <form
            onSubmit={handleSearch}
            className="mx-auto flex max-w-xl flex-col items-stretch overflow-visible rounded-md border border-[#e5e8eb] bg-[#ffffff] relative"
            role="search"
            aria-label="Airport search"
          >
            <div className="flex">
              <input
                placeholder="Find Airports by Name or City"
                className="w-full px-4 py-3 text-sm outline-none placeholder:text-[#0d141c]/60"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                autoComplete="off"
              />
              <button
                type="submit"
                className="bg-[#0766e5] px-5 py-3 text-sm font-medium text-[#ffffff] hover:bg-[#0053c7] hover:shadow-lg rounded-r-md transition-all duration-300"
              >
                Find Airports
              </button>
            </div>
            {filteredAirports.length > 0 && (
              <ul className="absolute left-0 right-0 top-full z-10 mt-1 max-h-60 overflow-auto rounded-md border border-[#e5e8eb] bg-white shadow-lg">
                {filteredAirports.map((airport) => (
                  <li
                    key={airport}
                    className="cursor-pointer px-4 py-2 text-sm hover:bg-[#e6edff]"
                    onClick={() => {
                      setInputValue(airport)
                      window.location.href = "/aai/airports/airport"
                    }}
                  >
                    {airport}
                  </li>
                ))}
              </ul>
            )}
          </form>

          {/* City Pills */}
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {cityPills.map((p) => (
              <a
                key={p}
                href="#"
                className="rounded-full border border-[#e5e8eb] bg-[#ffffff] px-3 py-1 text-xs hover:bg-[#e6edff] hover:shadow-md hover:scale-105 transition-all"
              >
                {p}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section className="mx-auto max-w-6xl px-6 py-8">
        <img
          alt="Airport interior"
          src="../images/generic-airport.png"
          className="mt-4 w-full rounded-lg border border-[#e5e8eb] object-cover shadow-sm transition-all hover:shadow-lg hover:scale-[1.01]"
        />
      </section>

      <Footer />

      {/* Dialog box */}
      {showDialog && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm text-center">
            <h2 className="text-lg font-semibold mb-3">Incorrect Airport or City</h2>
            <p className="text-sm text-gray-600 mb-4">
              Please enter a valid airport name or city.
            </p>
            <button
              onClick={() => setShowDialog(false)}
              className="bg-[#0766e5] text-white px-4 py-2 rounded-md hover:bg-[#0053c7] transition"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </main>
  )
}
