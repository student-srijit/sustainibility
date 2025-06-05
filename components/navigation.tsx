"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Leaf, User, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userName, setUserName] = useState("")
  const router = useRouter()

  // Check authentication status
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("/api/auth/me")
        if (response.ok) {
          const data = await response.json()
          setIsAuthenticated(true)
          setUserName(data.user.name)
        }
      } catch (error) {
        setIsAuthenticated(false)
        setUserName("") // Clear user name on error/not authenticated
      }
    }

    checkAuth()
  }, []) // Empty dependency array means this runs once on mount

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" })
      setIsAuthenticated(false)
      setUserName("")
      router.push("/")
      // Use router.refresh() to re-fetch data on the page, including auth status in layout/header
      router.refresh()
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Topics", href: "/#topics" },
    { name: "Quiz", href: "/quiz" },
    { name: "Tools", href: "/tools" },
    { name: "About", href: "/about" },
  ]

  const authenticatedNavItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Games", href: "/games" },
    { name: "Leaderboard", href: "/leaderboard" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-gradient-to-r from-green-600 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Learn for Sustainability</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}

            {isAuthenticated &&
              authenticatedNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                {/* My Profile Link (Desktop) */}
                <Link href="/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 group">
                  <User className="h-4 w-4 group-hover:text-green-600" />
                  <span className="text-sm">{userName}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 group-hover:w-full transition-all duration-300" />
                </Link>
                {/* Logout Button (Desktop) */}
                <Button
                  onClick={handleLogout}
                  variant="outline"
                  size="sm"
                  className="border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                >
                  <LogOut className="h-4 w-4 mr-1" />
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Button asChild variant="outline" size="sm">
                  <Link href="/login">Login</Link>
                </Button>
                <Button
                  asChild
                  className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-full px-6"
                >
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 px-4 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {isAuthenticated &&
                authenticatedNavItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 px-4 py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

              <div className="px-4 pt-4 border-t border-gray-200">
                {isAuthenticated ? (
                  <div className="space-y-4">
                    {/* Mobile My Profile Link */}
                    <Link 
                      href="/dashboard" 
                      className="flex items-center space-x-2 text-gray-700 hover:text-green-600 font-medium transition-colors duration-200 px-4 py-2 group" 
                      onClick={() => setIsOpen(false)}
                    >
                      <User className="h-4 w-4 group-hover:text-green-600" />
                      <span className="text-sm">{userName}</span>
                    </Link>
                    {/* Mobile Logout Button */}
                    <Button
                      onClick={handleLogout}
                      variant="outline"
                      className="w-full border-red-600 text-red-600 hover:bg-red-600 hover:text-white"
                    >
                      <LogOut className="h-4 w-4 mr-1" />
                      Logout
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Button asChild variant="outline" className="w-full">
                      <Link href="/login">Login</Link>
                    </Button>
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-full"
                    >
                      <Link href="/signup">Sign Up</Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
