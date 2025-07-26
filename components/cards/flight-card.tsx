"use client"

import { Plane, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Flight } from "@/types"

interface FlightCardProps {
  flight: Flight
  onRemove: () => void
}

export default function FlightCard({ flight, onRemove }: FlightCardProps) {
  return (
    <Card className="relative">
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
                <div className="text-2xl font-bold">{flight.departure.time}</div>
                <div className="text-sm text-gray-600">{flight.departure.date}</div>
                <div className="text-sm font-medium">{flight.departure.airport}</div>
              </div>

              <div className="flex flex-col items-center">
                <Plane className="w-4 h-4 text-gray-400 mb-1" />
                <div className="text-sm text-gray-600">Duration: {flight.duration}</div>
                <div className="text-sm text-gray-600">Direct</div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold">{flight.arrival.time}</div>
                <div className="text-sm text-gray-600">{flight.arrival.date}</div>
                <div className="text-sm font-medium">{flight.arrival.airport}</div>
              </div>
            </div>
          </div>

          <div className="text-right">
            <div className="text-2xl font-bold">₦ {flight.price.toLocaleString()}</div>
            <div className="flex space-x-2 mt-2">
              <Button variant="link" size="sm" className="text-blue-600">
                Flight details
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

        <div className="mt-4 flex flex-wrap gap-2">
          {flight.facilities.map((facility, index) => (
            <span key={index} className="text-xs bg-gray-100 px-2 py-1 rounded">
              {facility}
            </span>
          ))}
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
