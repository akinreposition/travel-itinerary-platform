"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Star } from "lucide-react"
import type { Hotel } from "@/types"
import { searchHotels } from "@/lib/api"
import Image from "next/image"

interface HotelSearchModalProps {
  isOpen: boolean
  onClose: () => void
  onAddHotel: (hotel: Hotel) => void
}

export default function HotelSearchModal({ isOpen, onClose, onAddHotel }: HotelSearchModalProps) {
  const [searchParams, setSearchParams] = useState({
    destination: "",
    checkIn: "",
    checkOut: "",
    guests: "2",
    rooms: "1",
  })
  const [searchResults, setSearchResults] = useState<Hotel[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    setLoading(true)
    try {
      const results = await searchHotels(searchParams)
      setSearchResults(results)
    } catch (error) {
      console.error("Error searching hotels:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddHotel = (hotel: Hotel) => {
    onAddHotel(hotel)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Search Hotels</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <Label htmlFor="destination">Destination</Label>
              <Input
                id="destination"
                placeholder="City or hotel name"
                value={searchParams.destination}
                onChange={(e) => setSearchParams((prev) => ({ ...prev, destination: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="checkIn">Check-in</Label>
              <Input
                id="checkIn"
                type="date"
                value={searchParams.checkIn}
                onChange={(e) => setSearchParams((prev) => ({ ...prev, checkIn: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="checkOut">Check-out</Label>
              <Input
                id="checkOut"
                type="date"
                value={searchParams.checkOut}
                onChange={(e) => setSearchParams((prev) => ({ ...prev, checkOut: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="guests">Guests</Label>
              <Input
                id="guests"
                type="number"
                min="1"
                value={searchParams.guests}
                onChange={(e) => setSearchParams((prev) => ({ ...prev, guests: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="rooms">Rooms</Label>
              <Input
                id="rooms"
                type="number"
                min="1"
                value={searchParams.rooms}
                onChange={(e) => setSearchParams((prev) => ({ ...prev, rooms: e.target.value }))}
              />
            </div>
          </div>

          <Button onClick={handleSearch} disabled={loading} className="w-full">
            <Search className="w-4 h-4 mr-2" />
            {loading ? "Searching..." : "Search Hotels"}
          </Button>

          {searchResults.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Search Results</h3>
              {searchResults.map((hotel) => (
                <Card key={hotel.id}>
                  <CardContent className="p-4">
                    <div className="flex space-x-4">
                      <div className="relative w-32 h-24 rounded-lg overflow-hidden">
                        <Image src={hotel.image || "/placeholder.svg"} alt={hotel.name} fill className="object-cover" />
                      </div>

                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-lg">{hotel.name}</h3>
                            <p className="text-sm text-gray-600 mb-2">{hotel.address}</p>

                            <div className="flex items-center space-x-2 mb-2">
                              <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className={`w-4 h-4 ${i < Math.floor(hotel.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                                  />
                                ))}
                              </div>
                              <span className="text-sm font-medium">
                                {hotel.rating} ({hotel.reviews} reviews)
                              </span>
                            </div>

                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span>Facilities:</span>
                              {hotel.facilities.map((facility, index) => (
                                <span key={index}>{facility}</span>
                              ))}
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-xl font-bold">₦ {hotel.price.toLocaleString()}</div>
                            <div className="text-sm text-gray-500">per night</div>
                            <Button onClick={() => handleAddHotel(hotel)} className="mt-2">
                              Add to Itinerary
                            </Button>
                          </div>
                        </div>
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
