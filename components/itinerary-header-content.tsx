import { Button } from "@/components/ui/button"
import Image from "next/image"
import UserPlus from "@/app/asset/UserPlus.svg"

export default function ItineraryHeaderContent() {
    return (
        <div className="flex items-start justify-items-start mb-4">

            <div className="text-left text-black">
                <div className="bg-[#FEF4E6] text-[#7A4504] text-sm mb-2 w-[253px] h-[30px] p-2">📅 21 March 2024 → 25 April 2024</div>
                <h1 className="text-2xl font-bold mb-1">Bahamas Family Trip</h1>
                <p className="text-sm opacity-90">New York, United States of America | Solo Trip</p>
            </div>

            <div className="absolute right-16 flex items-center space-x-2">
                <Button variant="ghost" size="lg" className="bg-[#E7F0FF] text-[#E7F0FF] hover:bg-white/20">
                    <Image src={UserPlus} alt="Add User" />
                </Button>

                <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-300 rounded-full border-2 border-white"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full border-2 border-white"></div>
                    <div className="w-2 h-2 bg-gray-300 rounded-full border-2 border-white"></div>
                </div>
            </div>
        </div>
    )
}