"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"
import FlightSearchModal from "./modals/flight-search-modal"
import HotelSearchModal from "./modals/hotel-search-modal"
import ActivitySearchModal from "./modals/activity-search-modal"
import type { Flight, Hotel, Activity } from "@/types"

interface ActionCardsProps {
  onAddFlight: (flight: Flight) => void
  onAddHotel: (hotel: Hotel) => void
  onAddActivity: (activity: Activity) => void
}

export default function ActionCards({ onAddFlight, onAddHotel, onAddActivity }: ActionCardsProps) {
  const [activeModal, setActiveModal] = useState<"flight" | "hotel" | "activity" | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <Card className="bg-[#000031] text-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <h3 className="text-lg font-semibold">Activities</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Build personalized and optimized your itineraries with our trip planner.
            </p>
            <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setActiveModal("activity")}>
              Add Activities
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-[#E7F0FF] text-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <h3 className="text-black text-lg font-semibold">Hotels</h3>
            </div>
            <p className="text-sm text-[#1D2433] mb-4">
              Build personalized and optimized your itineraries with our trip planner.
            </p>
            <Button className="w-full bg-[#0D6EFD] hover:bg-gray-500" onClick={() => setActiveModal("hotel")}>
              Add Hotels
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center space-x-3 mb-4">
              <h3 className="text-lg font-semibold">Flights</h3>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Build personalized and optimized your itineraries with our trip planner.
            </p>
            <Button className="w-full bg-white text-[#1D2433] hover:bg-blue-400" onClick={() => setActiveModal("flight")}>
              Add Flights
            </Button>
          </CardContent>
        </Card>
      </div>

      <FlightSearchModal
        isOpen={activeModal === "flight"}
        onClose={() => setActiveModal(null)}
        onAddFlight={onAddFlight}
      />

      <HotelSearchModal isOpen={activeModal === "hotel"} onClose={() => setActiveModal(null)} onAddHotel={onAddHotel} />

      <ActivitySearchModal
        isOpen={activeModal === "activity"}
        onClose={() => setActiveModal(null)}
        onAddActivity={onAddActivity}
      />
    </>
  )
}
