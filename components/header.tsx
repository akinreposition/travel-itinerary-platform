"use client"

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
  Menu,
} from "lucide-react"
import Image from 'next/image';
import logo from "@/app/asset/logo.png"
import avatar from "@/app/asset/avatar.png"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"


export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { icon: Home, label: "Home" },
    { icon: BarChart3, label: "Dashboard" },
    { icon: Wallet, label: "Wallet" },
    { icon: Navigation, label: "Plan trip" },
    { icon: MessageSquare, label: "Commission" },
  ]

  const actionItems = [
    { icon: Bell, label: "Notification" },
    { icon: ShoppingCart, label: "Carts" },
    { icon: CreditCard, label: "Create" },
  ]

  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3 md:px-6 md:py-4">
      <div className="flex items-center justify-between">
        {/* Logo & Search */}
        <div className="flex items-center gap-3 flex-1">
          <Image src={logo} alt="logo" width={36} height={36} className="shrink-0" />
          
          {/* Mobile menu toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>

          {/* Search (hidden on small screens) */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input placeholder="Search" className="pl-10 w-52 md:w-64" />
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
          {navItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              size="sm"
              className="flex flex-col items-center space-y-1"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </Button>
          ))}
        </nav>

        {/* Right Icons */}
        <div className="hidden sm:flex items-center space-x-4 border-l border-gray-300 pl-4">
          <Button className="bg-blue-600 hover:bg-blue-700 hidden lg:inline-block">Subscribe</Button>
          {actionItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              size="sm"
              className="flex flex-col items-center space-y-1"
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs">{item.label}</span>
            </Button>
          ))}
          <div className="w-8 h-8 bg-gray-300 rounded-full">
            <Image src={avatar} alt="avatar" />
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-3 overflow-hidden"
          >
            <div className="space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant="ghost"
                  size="sm"
                  className="flex items-center space-x-2 w-full"
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Button>
              ))}
              <div className="pt-2 border-t">
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">Subscribe</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
