"use client"

import { Star, Clock, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Activity } from "@/types"
import Image from "next/image"

interface ActivityCardProps {
  activity: Activity
  onRemove: () => void
}

export default function ActivityCard({ activity, onRemove }: ActivityCardProps) {
  return (
    <Card className="bg-white relative">
      <CardContent className="p-4">
        <div className="flex space-x-4">
          <div className="relative w-32 h-24 rounded-lg overflow-hidden">
            <Image src={activity.image || "/placeholder.svg"} alt={activity.name} fill className="object-cover" />
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg">{activity.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{activity.description}</p>

                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(activity.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm font-medium">
                    {activity.rating} ({activity.reviews})
                  </span>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{activity.duration}</span>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <span className="font-medium">What's included:</span> {activity.included}
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-bold">₦ {activity.price.toLocaleString()}</div>
                <div className="text-sm text-gray-500 line-through">
                  ₦{activity.originalPrice.toLocaleString()} per person
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-4">
              <div className="flex space-x-2">
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                  Book
                </Button>
              </div>

              <div className="flex space-x-2">
                <Button variant="link" size="sm" className="text-blue-600">
                  Activity details
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
