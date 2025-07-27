import { ArrowLeft, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import banner from "@/app/asset/banner.png"

export default function ItineraryHeader() {
  return (
    <div className="relative rounded-lg p-6 mb-6 overflow-hidden h-48"> {/* Set a fixed height */}
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src={banner}
          alt="Travel background"
          fill
          className="object-cover"
          quality={100}
          priority
        />
      </div>

      {/* Back button */}
      <div className="absolute top-4 left-4 z-10">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-white bg-black-100 hover:bg-white/20 backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4" />
        </Button>
      </div>

    </div>
  )
}
