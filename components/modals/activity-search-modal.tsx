"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { Search, Star, Clock } from "lucide-react"
import type { Activity } from "@/types"
import { searchActivities } from "@/lib/api"
import Image from "next/image"

interface ActivitySearchModalProps {
  isOpen: boolean
  onClose: () => void
  onAddActivity: (activity: Activity) => void
}

export default function ActivitySearchModal({ isOpen, onClose, onAddActivity }: ActivitySearchModalProps) {
  const [searchParams, setSearchParams] = useState({
    destination: "",
    date: "",
    category: "",
  })
  const [searchResults, setSearchResults] = useState<Activity[]>([])
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    setLoading(true)
    try {
      const results = await searchActivities(searchParams)
      setSearchResults(results)
    } catch (error) {
      console.error("Error searching activities:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleAddActivity = (activity: Activity) => {
    onAddActivity(activity)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Search Activities</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="destination">Destination</Label>
              <Input
                id="destination"
                placeholder="City or location"
                value={searchParams.destination}
                onChange={(e) => setSearchParams((prev) => ({ ...prev, destination: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={searchParams.date}
                onChange={(e) => setSearchParams((prev) => ({ ...prev, date: e.target.value }))}
              />
            </div>
            <div>
              <Label htmlFor="category">Category</Label>
              <Input
                id="category"
                placeholder="Museums, Tours, etc."
                value={searchParams.category}
                onChange={(e) => setSearchParams((prev) => ({ ...prev, category: e.target.value }))}
              />
            </div>
          </div>

          <Button onClick={handleSearch} disabled={loading} className="w-full">
            <Search className="w-4 h-4 mr-2" />
            {loading ? "Searching..." : "Search Activities"}
          </Button>

          {searchResults.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Search Results</h3>
              {searchResults.map((activity) => (
                <Card key={activity.id}>
                  <CardContent className="p-4">
                    <div className="flex space-x-4">
                      <div className="relative w-32 h-24 rounded-lg overflow-hidden">
                        <Image
                          src={activity.image || "/placeholder.svg"}
                          alt={activity.name}
                          fill
                          className="object-cover"
                        />
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
                                {activity.rating} ({activity.reviews} reviews)
                              </span>
                              <div className="flex items-center space-x-1">
                                <Clock className="w-4 h-4" />
                                <span className="text-sm">{activity.duration}</span>
                              </div>
                            </div>

                            <div className="text-sm text-gray-600">
                              <span className="font-medium">Included:</span> {activity.included}
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="text-xl font-bold">₦ {activity.price.toLocaleString()}</div>
                            <div className="text-sm text-gray-500">per person</div>
                            <Button onClick={() => handleAddActivity(activity)} className="mt-2">
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
