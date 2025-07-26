"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Plane, Search } from "lucide-react"
import type { Flight } from "@/types"
import { searchFlights } from "@/lib/api"

interface FlightSearchModalProps {
  isOpen: boolean
  onClose: () => void
  onAddFlight: (flight: Flight) => void
}

export default function FlightSearchModal({ isOpen, onClose, onAddFlight }: FlightSearchModalProps) {
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    departDate: "",
    returnDate: "",
    passengers: "1",
  })
  const [searchResults, setSearchResults] = useState<Flight[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    setLoading(true)
    try {
      const results = await searchFlights(searchParams)
      setSearchResults(results)
    } catch (error) {
      console.error("Error searching flights:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddFlight = (flight: Flight) => {
    onAddFlight(flight)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Search Flights</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <Label htmlFor="from">From</Label>
              <Input
                id="from"
                placeholder="Origin city"
                value={searchParams.from}
                onChange={(e) => setSearchParams((prev) => ({ ...prev, from: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="to">To</Label>
              <Input
                id="to"
                placeholder="Destination city"
                value={searchParams.to}
                onChange={(e) => setSearchParams((prev) => ({ ...prev, to: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="departDate">Departure</Label>
              <Input
                id="departDate"
                type="date"
                value={searchParams.departDate}
                onChange={(e) => setSearchParams((prev) => ({ ...prev, departDate: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="returnDate">Return</Label>
              <Input
                id="returnDate"
                type="date"
                value={searchParams.returnDate}
                onChange={(e) => setSearchParams((prev) => ({ ...prev, returnDate: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="passengers">Passengers</Label>
              <Input
                id="passengers"
                type="number"
                min="1"
                value={searchParams.passengers}
                onChange={(e) => setSearchParams((prev) => ({ ...prev, passengers: e.target.value }))}
              />
            </div>
          </div>

          <Button onClick={handleSearch} disabled={loading} className="w-full">
            <Search className="w-4 h-4 mr-2" />
            {loading ? "Searching..." : "Search Flights"}
          </Button>

          {searchResults.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Search Results</h3>
              {searchResults.map((flight) => (
                <Card key={flight.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                            <Plane className="w-4 h-4 text-white" />
                          </div>
                          <div>
                            <div className="font-semibold">{flight.airline}</div>
                            <div className="text-sm text-gray-600">{flight.flightNumber}</div>
                          </div>
                        </div>

                        <div className="flex items-center space-x-8">
                          <div className="text-center">
                            <div className="text-xl font-bold">{flight.departure.time}</div>
                            <div className="text-sm text-gray-600">{flight.departure.airport}</div>
                          </div>

                          <div className="flex flex-col items-center">
                            <Plane className="w-4 h-4 text-gray-400 mb-1" />
                            <div className="text-sm text-gray-600">{flight.duration}</div>
                          </div>

                          <div className="text-center">
                            <div className="text-xl font-bold">{flight.arrival.time}</div>
                            <div className="text-sm text-gray-600">{flight.arrival.airport}</div>
                          </div>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="text-xl font-bold">₦ {flight.price.toLocaleString()}</div>
                        <Button onClick={() => handleAddFlight(flight)} className="mt-2">
                          Add to Itinerary
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
