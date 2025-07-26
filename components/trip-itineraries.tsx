import type { Flight, Hotel, Activity } from "@/types"
import FlightCard from "./cards/flight-card"
import HotelCard from "./cards/hotel-card"
import ActivityCard from "./cards/activity-card"
import { Button } from "@/components/ui/button"

interface TripItinerariesProps {
  flights: Flight[]
  hotels: Hotel[]
  activities: Activity[]
  onRemoveFlight: (id: string) => void
  onRemoveHotel: (id: string) => void
  onRemoveActivity: (id: string) => void
}

export default function TripItineraries({
  flights,
  hotels,
  activities,
  onRemoveFlight,
  onRemoveHotel,
  onRemoveActivity,
}: TripItinerariesProps) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Trip Itineraries</h2>
        <p className="text-gray-600 mb-6">Your trip itineraries are placed here</p>
      </div>

      {/* Flights Section */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold">✈️ Flights</span>
          </div>
          <Button variant="outline" size="sm">
            Add Flights
          </Button>
        </div>

        <div className="space-y-4">
          {flights.map((flight) => (
            <FlightCard key={flight.id} flight={flight} onRemove={() => onRemoveFlight(flight.id)} />
          ))}
        </div>
      </div>

      {/* Hotels Section */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-white">🏨 Hotels</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-white border-white hover:bg-white hover:text-gray-800 bg-transparent"
          >
            Add Hotels
          </Button>
        </div>

        <div className="space-y-4">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} onRemove={() => onRemoveHotel(hotel.id)} />
          ))}
        </div>
      </div>

      {/* Activities Section */}
      <div className="bg-blue-600 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold text-white">🎯 Activities</span>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
          >
            Add Activities
          </Button>
        </div>

        <div className="space-y-4">
          {activities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} onRemove={() => onRemoveActivity(activity.id)} />
          ))}
        </div>
      </div>
    </div>
  )
}
