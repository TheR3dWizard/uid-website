"use client"
import type React from "react"
import { useState } from "react"
import TopNav from "@/components/aai/top-nav"
import { Landmark, HelpCircle, MapPin, ImageIcon, Building2, ShoppingCart, Award, GaugeCircle } from "lucide-react"
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
  "Chennai International Airport",
  "Indira Gandhi International Airport",
  "Netaji Subhas Chandra Bose International Airport",
  "Kempegowda International Airport",
  "Chhatrapati Shivaji Maharaj International Airport",
  "Cochin International Airport",
  "Jay Prakash Narayan Airport",
  "Rajiv Gandhi International Airport",
  "Dabolim Airport",
  "Coimbatore International Airport",
  "Pune Airport",
  "Sardar Vallabhbhai Patel International Airport",
  "Dr. Babasaheb Ambedkar International Airport",
  "Chandigarh Airport",
  "Trivandrum International Airport",
  "Visakhapatnam Airport",
  "Lucknow Airport",
  "Jaipur International Airport",
  "Ahmedabad Airport",
  "Bhubaneswar Airport",
  "Ranchi Airport",
  "Guwahati Airport",
  "Tiruchirappalli International Airport",
  "Mangaluru International Airport",
  "Vijayawada Airport",
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
  const [inputValue, setInputValue] = useState("");
  const filteredAirports = Airports.filter(
    (airport) =>
      airport.toLowerCase().includes(inputValue.toLowerCase()) && inputValue.trim() !== ""
  );

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#0d141c]">
      <TopNav />

      {/* Hero search */}
      <section className="w-full bg-[#e6edff]">
        <div className="mx-auto max-w-6xl px-6 py-6">
            <form
            className="mx-auto flex max-w-xl flex-col items-stretch overflow-visible rounded-md border border-[#e5e8eb] bg-[#ffffff] relative"
            role="search"
            aria-label="Airport search"
            onSubmit={e => {
              e.preventDefault()
              if (inputValue.trim()) {
              window.location.href = "/aai/airports/airport"
              }
            }}
            >
            <div className="flex">
              <input
              placeholder="Find Airports by Name or City"
              className="w-full px-4 py-3 text-sm outline-none placeholder:text-[#0d141c]/60"
              value={inputValue}
              onChange={e => setInputValue(e.target.value)}
              autoComplete="off"
              />
              <button
              type="submit"
              className="bg-[#0766e5] px-5 py-3 text-sm font-medium text-[#ffffff] hover:opacity-95 rounded-r-md"
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

          <div className="mt-4 flex flex-wrap justify-center gap-3">
            {cityPills.map((p) => (
              <a
                key={p}
                href="#"
                className="rounded-full border border-[#e5e8eb] bg-[#ffffff] px-3 py-1 text-xs hover:bg-[#e6edff]"
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
          src="..//images/generic-airport.png"
          className="mt-4 w-full rounded-lg border border-[#e5e8eb] object-cover"
        />
      </section>

      <Footer />
    </main>
  )
}
