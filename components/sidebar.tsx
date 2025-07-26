import { Plane, Building2, MapPin, GraduationCap, FileText, Users, Heart, Package, User } from "lucide-react"
import Link from "next/link"

const menuItems = [
  { icon: MapPin, label: "Activities", href: "/activities" },
  { icon: Building2, label: "Hotels", href: "/hotels" },
  { icon: Plane, label: "Flights", href: "/flights" },
  { icon: GraduationCap, label: "Study", href: "/study" },
  { icon: FileText, label: "Visa", href: "/visa" },
  { icon: Users, label: "Immigration", href: "/immigration" },
  { icon: Heart, label: "Medical", href: "/medical" },
  { icon: Package, label: "Vacation Packages", href: "/packages" },
]

export default function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-sm">GO</span>
          </div>
          <span className="font-semibold text-gray-900">GoTravel</span>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              >
                <item.icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center space-x-2 px-3 py-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-sm font-medium text-gray-900">Personal Account</div>
          </div>
        </div>
      </div>
    </div>
  )
}
