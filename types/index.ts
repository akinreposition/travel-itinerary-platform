export interface Flight {
  id: string
  airline: string
  flightNumber: string
  departure: {
    time: string
    date: string
    airport: string
  }
  arrival: {
    time: string
    date: string
    airport: string
  }
  duration: string
  price: number
  facilities: string[]
}

export interface Hotel {
  id: string
  name: string
  address: string
  rating: number
  reviews: number
  price: number
  originalPrice: number
  roomsLeft: number
  checkIn: string
  checkOut: string
  facilities: string[]
  image: string
}

export interface Activity {
  id: string
  name: string
  description: string
  rating: number
  reviews: number
  duration: string
  price: number
  originalPrice: number
  included: string
  image: string
}

export interface SearchFlightParams {
  from: string
  to: string
  departDate: string
  returnDate: string
  passengers: string
}

export interface SearchHotelParams {
  destination: string
  checkIn: string
  checkOut: string
  guests: string
  rooms: string
}

export interface SearchActivityParams {
  destination: string
  date: string
  category: string
}
