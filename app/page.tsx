"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import Header from "@/components/header"
import ItineraryHeader from "@/components/itinerary-header"
import ItineraryHeaderContent from "@/components/itinerary-header-content"
import ActionCards from "@/components/action-cards"
import TripItineraries from "@/components/trip-itineraries"
import type { Flight, Hotel, Activity } from "@/types"

export default function Home() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  const [flights, setFlights] = useState<Flight[]>([
    {
      id: "1",
      airline: "American Airlines",
      flightNumber: "AA-924",
      departure: { time: "08:35", date: "Sun, 30 Aug", airport: "LOS" },
      arrival: { time: "09:55", date: "Sun, 30 Aug", airport: "SIN" },
      duration: "1h 20m",
      price: 123450.0,
      facilities: ["Baggage: 20kg", "Cabin baggage: 8kg", "In flight entertainment", "In flight meal", "USB Port"],
    },
    {
      id: "2",
      airline: "American Airlines",
      flightNumber: "AA-924",
      departure: { time: "08:35", date: "Sun, 30 Aug", airport: "LOS" },
      arrival: { time: "09:55", date: "Sun, 30 Aug", airport: "SIN" },
      duration: "1h 20m",
      price: 123450.0,
      facilities: ["Baggage: 20kg", "Cabin baggage: 8kg", "In flight entertainment", "In flight meal", "USB Port"],
    },
  ])

  const [hotels, setHotels] = useState<Hotel[]>([
    {
      id: "1",
      name: "Riviera Resort, Lekki",
      address: "18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1",
      rating: 4.5,
      reviews: 436,
      price: 123450.0,
      originalPrice: 160000.0,
      roomsLeft: 3,
      checkIn: "20-04-2024",
      checkOut: "29-04-2024",
      facilities: ["Pool", "Bar"],
      image: "/placeholder.svg?height=200&width=300&text=Hotel+Image",
    },
    {
      id: "2",
      name: "Riviera Resort, Lekki",
      address: "18, Kenneth Agbakuru Street, Off Access Bank Admiralty Way, Lekki Phase1",
      rating: 4.5,
      reviews: 436,
      price: 123450.0,
      originalPrice: 160000.0,
      roomsLeft: 3,
      checkIn: "20-04-2024",
      checkOut: "29-04-2024",
      facilities: ["Pool", "Bar"],
      image: "/placeholder.svg?height=200&width=300&text=Hotel+Image",
    },
  ])

  const [activities, setActivities] = useState<Activity[]>([
    {
      id: "1",
      name: "The Museum of Modern Art",
      description: "Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant.",
      rating: 4.5,
      reviews: 432,
      duration: "1 Hour",
      price: 123450.0,
      originalPrice: 160000.0,
      included: "Admission to the Empire State Building",
      image: "/placeholder.svg?height=200&width=300&text=Museum+Image",
    },
    {
      id: "2",
      name: "The Museum of Modern Art",
      description: "Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant.",
      rating: 4.5,
      reviews: 432,
      duration: "1 Hour",
      price: 123450.0,
      originalPrice: 160000.0,
      included: "Admission to the Empire State Building",
      image: "/placeholder.svg?height=200&width=300&text=Museum+Image",
    },
    {
      id: "3",
      name: "The Museum of Modern Art",
      description: "Works from Van Gogh to Warhol & beyond plus a sculpture garden, 2 cafes & The modern restaurant.",
      rating: 4.5,
      reviews: 432,
      duration: "1 Hour",
      price: 123450.0,
      originalPrice: 160000.0,
      included: "Admission to the Empire State Building",
      image: "/placeholder.svg?height=200&width=300&text=Museum+Image",
    },
  ])

  const addFlight = (flight: Flight) => {
    setFlights((prev) => [...prev, { ...flight, id: Date.now().toString() }])
  }

  const addHotel = (hotel: Hotel) => {
    setHotels((prev) => [...prev, { ...hotel, id: Date.now().toString() }])
  }

  const addActivity = (activity: Activity) => {
    setActivities((prev) => [...prev, { ...activity, id: Date.now().toString() }])
  }

  const removeFlight = (id: string) => {
    setFlights((prev) => prev.filter((flight) => flight.id !== id))
  }

  const removeHotel = (id: string) => {
    setHotels((prev) => prev.filter((hotel) => hotel.id !== id))
  }

  const removeActivity = (id: string) => {
    setActivities((prev) => prev.filter((activity) => activity.id !== id))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="hidden md:flex">
          <Sidebar />
        {/* Mobile Sidebar (conditionally rendered) */}
        {isMobileSidebarOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <div className="absolute inset-0 bg-black/30" onClick={() => setIsMobileSidebarOpen(false)} />
            <div className="relative z-50 h-full w-64 bg-white">
              <Sidebar />
            </div>
          </div>
        )}
        <main className="p-6">
          <ItineraryHeader />
          <ItineraryHeaderContent />
          <ActionCards onAddFlight={addFlight} onAddHotel={addHotel} onAddActivity={addActivity} />
          <TripItineraries
            flights={flights}
            hotels={hotels}
            activities={activities}
            onRemoveFlight={removeFlight}
            onRemoveHotel={removeHotel}
            onRemoveActivity={removeActivity}
          />
        </main>
      </div>
    </div>
  )
}
