import type { Flight, Hotel, Activity, SearchFlightParams, SearchHotelParams, SearchActivityParams } from "@/types"

const RAPIDAPI_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY || "your-rapidapi-key-here"
const RAPIDAPI_HOST = "booking-com15.p.rapidapi.com"

const headers = {
  "X-RapidAPI-Key": RAPIDAPI_KEY,
  "X-RapidAPI-Host": RAPIDAPI_HOST,
}

// Mock data for demonstration - replace with actual API calls
const mockFlights: Flight[] = [
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
    airline: "Delta Airlines",
    flightNumber: "DL-456",
    departure: { time: "14:20", date: "Sun, 30 Aug", airport: "LOS" },
    arrival: { time: "16:45", date: "Sun, 30 Aug", airport: "SIN" },
    duration: "2h 25m",
    price: 156780.0,
    facilities: ["Baggage: 25kg", "Cabin baggage: 10kg", "In flight entertainment", "In flight meal", "WiFi"],
  },
]

const mockHotels: Hotel[] = [
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
    name: "Grand Palace Hotel",
    address: "25, Victoria Island, Lagos State",
    rating: 4.8,
    reviews: 892,
    price: 189000.0,
    originalPrice: 220000.0,
    roomsLeft: 2,
    checkIn: "20-04-2024",
    checkOut: "29-04-2024",
    facilities: ["Pool", "Spa", "Gym", "Restaurant"],
    image: "/placeholder.svg?height=200&width=300&text=Grand+Palace",
  },
]

const mockActivities: Activity[] = [
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
    name: "City Walking Tour",
    description: "Explore the historic downtown area with a professional guide and learn about local culture.",
    rating: 4.7,
    reviews: 256,
    duration: "3 Hours",
    price: 85000.0,
    originalPrice: 100000.0,
    included: "Professional guide, refreshments",
    image: "/placeholder.svg?height=200&width=300&text=Walking+Tour",
  },
]

export async function searchFlights(params: SearchFlightParams): Promise<Flight[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real implementation, you would make an API call like this:
  /*
  try {
    const response = await fetch(`https://${RAPIDAPI_HOST}/api/v1/flights/searchFlights`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        origin: params.from,
        destination: params.to,
        departureDate: params.departDate,
        returnDate: params.returnDate,
        adults: parseInt(params.passengers)
      })
    })
    
    if (!response.ok) {
      throw new Error('Failed to search flights')
    }
    
    const data = await response.json()
    return data.flights || []
  } catch (error) {
    console.error('Error searching flights:', error)
    throw error
  }
  */

  // Return mock data for now
  return mockFlights
}

export async function searchHotels(params: SearchHotelParams): Promise<Hotel[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real implementation, you would make an API call like this:
  /*
  try {
    const response = await fetch(`https://${RAPIDAPI_HOST}/api/v1/hotels/searchHotels`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        destination: params.destination,
        checkInDate: params.checkIn,
        checkOutDate: params.checkOut,
        adults: parseInt(params.guests),
        rooms: parseInt(params.rooms)
      })
    })
    
    if (!response.ok) {
      throw new Error('Failed to search hotels')
    }
    
    const data = await response.json()
    return data.hotels || []
  } catch (error) {
    console.error('Error searching hotels:', error)
    throw error
  }
  */

  // Return mock data for now
  return mockHotels
}

export async function searchActivities(params: SearchActivityParams): Promise<Activity[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // In a real implementation, you would make an API call like this:
  /*
  try {
    const response = await fetch(`https://${RAPIDAPI_HOST}/api/v1/attractions/searchAttractions`, {
      method: 'POST',
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        destination: params.destination,
        date: params.date,
        category: params.category
      })
    })
    
    if (!response.ok) {
      throw new Error('Failed to search activities')
    }
    
    const data = await response.json()
    return data.activities || []
  } catch (error) {
    console.error('Error searching activities:', error)
    throw error
  }
  */

  // Return mock data for now
  return mockActivities
}
