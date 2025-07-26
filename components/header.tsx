import {
  Search,
  Home,
  BarChart3,
  Wallet,
  Navigation,
  MessageSquare,
  Bell,
  ShoppingCart,
  CreditCard,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search" className="pl-10 w-64" />
          </div>
        </div>

        <nav className="flex items-center space-x-6">
          <Button variant="ghost" size="sm" className="flex items-center space-x-1">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center space-x-1">
            <BarChart3 className="w-4 h-4" />
            <span>Dashboard</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center space-x-1">
            <Wallet className="w-4 h-4" />
            <span>Wallet</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center space-x-1">
            <Navigation className="w-4 h-4" />
            <span>Plan trip</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center space-x-1">
            <MessageSquare className="w-4 h-4" />
            <span>Commission for life</span>
          </Button>
        </nav>

        <div className="flex items-center space-x-4">
          <Button className="bg-blue-600 hover:bg-blue-700">Subscribe</Button>
          <Button variant="ghost" size="sm">
            <Bell className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <ShoppingCart className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <CreditCard className="w-4 h-4" />
          </Button>
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </header>
  )
}
