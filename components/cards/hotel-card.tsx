"use client"

import { Star, X, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Hotel } from "@/types"
import Image from "next/image"

interface HotelCardProps {
  hotel: Hotel
  onRemove: () => void
}

export default function HotelCard({ hotel, onRemove }: HotelCardProps) {
  return (
    <Card className="bg-white relative">
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
                    {hotel.rating} ({hotel.reviews})
                  </span>
                  <span className="text-sm text-blue-600">King size room</span>
                </div>

                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>Facilities:</span>
                  {hotel.facilities.map((facility, index) => (
                    <span key={index}>{facility}</span>
                  ))}
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold">₦ {hotel.price.toLocaleString()}</div>
                <div className="text-sm text-gray-500 line-through">
                  Total Price: ₦{hotel.originalPrice.toLocaleString()}
                </div>
                <div className="text-sm text-red-600">{hotel.roomsLeft} rooms left</div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Check in {hotel.checkIn}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>Check out {hotel.checkOut}</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="link" size="sm" className="text-blue-600">
                  Hotel details
                </Button>
                <Button variant="link" size="sm" className="text-blue-600">
                  Price details
                </Button>
                <Button variant="link" size="sm" className="text-blue-600">
                  Edit details
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Button
          variant="ghost"
          size="sm"
          className="absolute top-2 right-2 text-red-500 hover:text-red-700"
          onClick={onRemove}
        >
          <X className="w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
