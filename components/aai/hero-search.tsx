"use client"

import type React from "react"

import { useState } from "react"

export default function HeroSearch() {
  const pills = [
    "Careers",
    "Media",
    "Medical",
    "Lost & Found",
    "CPP Portal",
    "MoCA",
    "Cagan",
    "Grievances",
    "SHG Application",
    "RCS UDAN",
  ]

  const autocompleteOptions = [
    "Airports",
    "Tenders",
    "RTIs",
    "Careers",
    "Media",
    "Medical",
    "Lost & Found",
    "CPP Portal",
    "MoCA",
    "Cagan",
    "Grievances",
    "SHG Application",
    "RCS UDAN",
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

  const [query, setQuery] = useState("")
  const [inputValue, setInputValue] = useState("")

  const filteredOptions = autocompleteOptions.filter((option) =>
    option.toLowerCase().includes(inputValue.toLowerCase())
  )

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    // no-op demo
  }

  return (
    <section className="w-full bg-[#e6edff]">
      <div className="mx-auto max-w-5xl px-6 py-8 md:py-10">
        <div className="flex items-center gap-3">
          {/* simple airplane mark */}
          <img src="/images/aai-logo.png" alt="AAI Logo" className="h-8 w-16" />
          <h1 className="text-balance text-2xl md:text-3xl font-semibold text-[#0766e5]">
            Airports Authority of India
          </h1>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-6 flex w-full items-stretch overflow-visible rounded-md border border-[#e5e8eb] bg-[#ffffff] relative"
          role="search"
          aria-label="Site search"
          autoComplete="off"
        >
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Find Airports, Tenders, RTIs and more"
            className="w-full px-4 py-3 text-sm outline-none placeholder:text-[#0d141c]/60"
            aria-autocomplete="list"
            aria-controls="autocomplete-list"
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-[#0766e5] px-5 py-3 text-sm font-medium text-[#ffffff] hover:opacity-95"
          >
            Search Anything
          </button>

          {inputValue.trim() && filteredOptions.length > 0 && (
            <ul
              id="autocomplete-list"
              role="listbox"
              className="absolute left-0 top-full z-10 w-full bg-white border border-[#e5e8eb] rounded-b-md rounded-t-none shadow-md max-h-60 overflow-y-auto"
            >
              {filteredOptions.map((option) => (
                <li
                  key={option}
                  role="option"
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-[#e6edff]"
                  onClick={() => setInputValue(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
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
  )
}
