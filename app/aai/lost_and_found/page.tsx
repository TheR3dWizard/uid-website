"use client"

import { useState } from "react"
import TopNav from "@/components/aai/top-nav"
import Footer from "@/components/aai/footer"

export default function LostAndFound() {
  const [searchTerm, setSearchTerm] = useState("")
  const [airportFilter, setAirportFilter] = useState("")

  const items = [
    {
      id: "LF635915",
      title: "Electronics - Earphones",
      description: "Black earphones found near security check area.",
      airport: "Indira Gandhi International Airport (Delhi)",
      contact: "+91 9909492069",
      email: "tmgr_delhi@aai.aero",
      claim: "Initiate Claim",
      image: "../images/earphones.jpg",
    },
    {
      id: "LF635916",
      title: "Electronics - Laptop",
      description: "Silver laptop left near boarding gate.",
      airport: "Chhatrapati Shivaji International Airport (Mumbai)",
      contact: "+91 9123456780",
      email: "tmgr_mumbai@aai.aero",
      claim: "Initiate Claim",
      image: "../images/laptop.jpg",
    },
    {
      id: "LF635917",
      title: "Personal Belongings - Wallet",
      description: "Brown leather wallet found near baggage claim.",
      airport: "Chennai International Airport (Chennai)",
      contact: "+91 9988776655",
      email: "tmgr_chennai@aai.aero",
      claim: "Initiate Claim",
      image: "../images/wallet.jpg",
    },
    {
      id: "LF635918",
      title: "Personal Belongings - Ring",
      description: "Gold ring found near parking lot.",
      airport: "Netaji Subhas Chandra Bose International Airport (Kolkata)",
      contact: "+91 9876501234",
      email: "tmgr_kolkata@aai.aero",
      claim: "Initiate Claim",
      image: "../images/ring.jpeg",
    },

    {
      id: "LF635919",
      title: "Cards/Documents - Passport",
      description: "Blue passport found near check-in counter.",
      airport: "Chennai International Airport (Chennai)",
      contact: "+91 9123456789",
      email: "tmgr_chennai@aai.aero",
      claim: "Initiate Claim",
      image: "../images/passport.jpg",
    },

    {
      id: "LF635920",
      title: "Personal Belongings - Sunglasses",
      description: "Black sunglasses found near food court.",
      airport: "Chennai International Airport (Chennai)",
      contact: "+91 9988776650",
      email: "tmgr_chennai@aai.aero",
      claim: "Initiate Claim",
      image: "../images/sunglasses.jpg",
    },
    {
      id: "LF635921",
      title: "Personal Belongings - Mobile Phone",
      description: "Black mobile phone found near boarding gate.",
      airport: "Chhatrapati Shivaji International Airport (Mumbai)",
      contact: "+91 9123456789",
      email: "tmgr_mumbai@aai.aero",
      claim: "Initiate Claim",
      image: "../images/mobile.png",
    }
  ]

  const filteredItems = items.filter(
    (item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (airportFilter === "" || item.airport.includes(airportFilter))
  )

  return (
    <main className="min-h-screen bg-[#ffffff] text-[#0d141c]">
      <TopNav />

      <section className="bg-[#ffffff] py-10 px-6">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-semibold text-[#0766e5] mb-6 border-b border-[#e5e8eb] pb-2">
            Lost & Found Catalogue
          </h1>

          {/* Search Bar */}
          <form
            className="flex w-full flex-col md:flex-row items-center gap-4 md:gap-2 md:items-stretch overflow-hidden rounded-md border border-[#e5e8eb] bg-[#ffffff] mb-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Search by item title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 text-sm outline-none text-[#0d141c] placeholder:text-[#0d141c]/60"
            />
            <button
              type="submit"
              className="bg-[#0766e5] px-6 py-3 text-sm font-medium text-[#ffffff] hover:opacity-90 transition-all"
            >
              Search
            </button>
          </form>

          {/* Airport Filter */}
          <div className="flex justify-end mb-8">
            <select
              value={airportFilter}
              onChange={(e) => setAirportFilter(e.target.value)}
              className="w-full md:w-1/3 border border-[#e5e8eb] rounded-md px-4 py-2 text-sm text-[#0d141c] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0766e5]"
            >
              <option value="">All Airports</option>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Chennai">Chennai</option>
              <option value="Kolkata">Kolkata</option>
            </select>
          </div>

          {/* Items Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#e5e8eb] shadow-sm hover:shadow-[0_4px_12px_rgba(7,102,229,0.25)] transition-all duration-300 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-[#0d141c] mb-1">
                    {item.title}
                  </h2>
                  <p className="text-sm text-[#555] mb-1">{item.airport}</p>
                  <p className="text-sm text-[#777] mb-1">{item.description}</p>
                  <p className="text-sm text-[#777] mb-1">Contact: {item.contact}</p>
                  <p className="text-sm text-[#777] mb-3">Email: {item.email}</p>
                  <button className="text-sm bg-[#0766e5] text-white px-4 py-2 rounded-md hover:bg-[#0558c9] transition-all">
                    {item.claim}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <p className="text-center text-gray-500 mt-10">
              No items found. Try changing your search or filters.
            </p>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
