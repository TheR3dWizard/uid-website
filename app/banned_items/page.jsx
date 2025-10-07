"use client"

import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import TopNav from "@/components/aai/top-nav"
import Footer from "@/components/aai/footer"

export default function BannedItemsPage() {
  const categories = [
    {
      title: "Personal Items",
      description: "Small personal items that can cause safety concerns are not allowed in carry-on baggage.",
      items: ["Lighters", "Scissors — metal with pointed tips", "Realistic replica of toy weapons"],
    },
    {
      title: "Sharp Objects",
      description: "Objects with sharp edges or points which can be used to injure.",
      items: [
        "Box cutters",
        "Ice axes / ice picks",
        "Knives of any length and type (except round‑bladed butter knives and plastic cutlery)",
        "Meat cleavers",
        "Razor-type blades (e.g., utility blades) — excluding safety razors",
        "Sabers, swords",
        "Scissors — metal with pointed tips (again included here for emphasis)",
      ],
    },
    {
      title: "Sporting Goods",
      description: "Sports equipment that can be repurposed as a weapon.",
      items: [
        "Baseball bats",
        "Bows and arrows",
        "Cricket bats",
        "Golf clubs",
        "Hockey sticks",
        "Lacrosse sticks",
        "Pool cues",
        "Ski poles",
        "Spear guns",
      ],
    },
    {
      title: "Guns & Firearms",
      description: "Includes firearms, parts and realistic replicas.",
      items: [
        "Ammunition",
        "BB guns, pellet guns, compressed air guns",
        "Firearms, flare guns, starter pistols",
        "Gun lighters, gunpowder",
        "Parts of guns & firearms",
        "Realistic replicas of firearms",
      ],
    },
    {
      title: "Tools",
      description: "General tools that can cause harm if used as a weapon.",
      items: [
        "Axes and hatchets",
        "Cattle prods",
        "Crowbars",
        "Hammers",
        "Drills (including cordless portable power drills)",
        "Saws (including cordless portable power saws)",
        "Screwdrivers (except those in eyeglass repair kits)",
        "Wrenches, pliers and similar hand tools",
      ],
    },
    {
      title: "Martial Arts / Self-Defence Items",
      description: "Items commonly used in fighting or self-defence that are prohibited.",
      items: [
        "Billy clubs, black jacks, night sticks",
        "Brass knuckles",
        "Kubatons, nunchakus",
        "Mace / pepper spray",
        "Martial arts weapons",
        "Stun guns / shocking devices",
        "Throwing stars",
      ],
    },
    {
      title: "Explosive Materials",
      description: "All explosive and blasting items are forbidden.",
      items: [
        "Blasting caps, dynamite, plastic explosives",
        "Fireworks, flares (any form)",
        "Hand grenades",
        "Realistic replicas of explosives",
      ],
    },
    {
      title: "Flammable Items",
      description: "Fuels and other flammable liquids/chemicals are not allowed in carry-on.",
      items: [
        "Fuels (including cooking fuels and any flammable liquid fuel)",
        "Gasoline, gas torches",
        "Lighter fluid, strike-anywhere matches",
        "Turpentine and paint thinner",
        "Realistic replicas of incendiary devices",
      ],
    },
    {
      title: "Liquids / Aerosols / Gels / Pastes",
      description:
        "Small quantities required for the journey are allowed in a single clear 1L re-sealable plastic bag (each container ≤100 ml). Exceptions: prescription medicines/inhalers (with prescription) and baby food.",
      items: [],
    },
    {
      title: "Disabling Chemicals & Other Dangerous Items",
      description: "Chemicals and compressed gases that can disable or harm are restricted.",
      items: [
        "Chlorine for pools/spas, liquid bleach",
        "Compressed gas cylinders (including handheld fire extinguishers)",
        "Spillable batteries (except those in wheelchairs)",
        "Spray paint, tear gas",
      ],
    },
  ]

  return (
    <>
      <TopNav />
      <main className="mx-auto max-w-6xl px-6 py-10 space-y-8">
        <header className="flex items-start gap-4 mb-6">

          <div>
            <h1 className="text-3xl font-semibold text-[#0766e5]">
              Items Banned in Hand / Carry-on Baggage
            </h1>
            <p className="mt-2 text-sm text-[#555] max-w-3xl">
              The following groups list items that are prohibited from being carried on the person or in hand/cabin baggage on flights operating from civil airports in India and on Indian-registered aircraft from abroad. This is an indicative list — commonsense and airport/airline instructions also apply.
            </p>
          </div>
        </header>

        {/* Category cards */}
        <div className="grid gap-6">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="border rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h2 className="text-xl font-semibold text-[#0d141c] mb-2">{cat.title}</h2>
              <p className="text-sm text-[#555] mb-3">{cat.description}</p>
              {cat.items.length > 0 && (
                <ul className="list-disc ml-5 text-sm text-[#444] space-y-1">
                  {cat.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <section>
          <h2 className="text-lg font-semibold text-[#0d141c] mb-2">Note</h2>
          <p className="text-sm text-[#555]">
            The lists above are indicative — airport security and airline staff will assess items on a commonsense basis. If an item could reasonably be used as a weapon or cause harm, it may be disallowed. When in doubt: declare special items (batteries, medical devices, sports equipment) at check-in or consult the airline/airport website before travel.
          </p>
        </section>
      </main>
      <Footer />
    </>
  )
}
