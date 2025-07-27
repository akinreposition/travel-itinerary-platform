import { MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ItineraryHeaderContent() {
    return (
     <div className="flex items-center justify-center mb-4">

            <div className="text-center text-black">
                <div className="text-sm mb-2">📅 21 March 2024 → 25 April 2024</div>
                <h1 className="text-2xl font-bold mb-1">Bahamas Family Trip</h1>
                <p className="text-sm opacity-90">New York, United States of America • Solo Trip</p>
            </div>

            <div className="absolute top-4 right-16 flex items-center space-x-2">
                <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                    <MoreHorizontal className="w-4 h-4" />
                </Button>
                <div className="flex -space-x-2">
                    <div className="w-8 h-8 bg-white rounded-full border-2 border-white"></div>
                    <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white"></div>
                </div>
            </div> 
        </div>
    )
}