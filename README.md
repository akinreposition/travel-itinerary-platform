# Travel Itinerary Platform

A comprehensive travel itinerary platform built with React, TypeScript, and Tailwind CSS that integrates with the Booking.com API from RapidAPI to help users search and manage their travel plans.

## Features

- **Flight Search & Booking**: Search for flights and add them to your itinerary
- **Hotel Search & Booking**: Find and book hotels for your destination
- **Activity Search**: Discover and add activities/attractions to your trip
- **Itinerary Management**: View and manage all your travel bookings in one place
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Technology Stack

- **Framework**: Next.js 14 with React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Icons**: Lucide React
- **API**: Booking.com API via RapidAPI

## Getting Started

### Prerequisites

- Node.js 18+ installed
- RapidAPI account with access to Booking.com API
- API key from RapidAPI

### Installation

1. Clone the repository:
\`\`\`bash
git clone <repository-url>
cd travel-itinerary-platform
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Create a `.env.local` file in the root directory:
\`\`\`env
NEXT_PUBLIC_RAPIDAPI_KEY=your_rapidapi_key_here
\`\`\`

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx                 # Main itinerary page
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── sidebar.tsx             # Navigation sidebar
│   ├── header.tsx              # Top navigation header
│   ├── itinerary-header.tsx    # Trip header component
│   ├── action-cards.tsx        # Action cards for adding items
│   ├── trip-itineraries.tsx    # Main itinerary display
│   ├── cards/                  # Individual item cards
│   │   ├── flight-card.tsx
│   │   ├── hotel-card.tsx
│   │   └── activity-card.tsx
│   └── modals/                 # Search modals
│       ├── flight-search-modal.tsx
│       ├── hotel-search-modal.tsx
│       └── activity-search-modal.tsx
├── lib/
│   └── api.ts                  # API integration functions
├── types/
│   └── index.ts                # TypeScript type definitions
└── components/ui/              # Reusable UI components
\`\`\`

## API Integration

The platform integrates with the Booking.com API through RapidAPI. The main API functions are:

- `searchFlights()` - Search for available flights
- `searchHotels()` - Search for hotels in a destination
- `searchActivities()` - Search for activities and attractions

### Setting up RapidAPI

1. Sign up at [RapidAPI.com](https://rapidapi.com)
2. Subscribe to the [Booking.com API](https://rapidapi.com/DataCrawler/api/booking-com15/)
3. Get your API key from the dashboard
4. Add the key to your `.env.local` file

## Usage

### Adding Flights
1. Click "Add Flights" on the main dashboard
2. Fill in departure/arrival cities and dates
3. Select from search results
4. Flight will be added to your itinerary

### Adding Hotels
1. Click "Add Hotels" on the main dashboard
2. Enter destination, check-in/out dates, and guest count
3. Browse available hotels
4. Add selected hotel to your itinerary

### Adding Activities
1. Click "Add Activities" on the main dashboard
2. Search by destination and date
3. Filter by activity category
4. Add interesting activities to your trip

## Customization

### Styling
The project uses Tailwind CSS for styling. You can customize the design by:
- Modifying the `tailwind.config.js` file
- Updating component styles in individual files
- Adding custom CSS in `globals.css`

### API Integration
To integrate with the real Booking.com API:
1. Uncomment the actual API calls in `lib/api.ts`
2. Replace mock data with real API responses
3. Handle API errors and loading states appropriately

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support and questions:
- Create an issue in the GitHub repository
- Check the RapidAPI documentation for API-related questions
- Review Next.js documentation for framework-specific issues
# travel-itinerary-platform
