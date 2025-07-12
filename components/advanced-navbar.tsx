"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Moon, Sun, Menu, X, User, Code, Briefcase, Mail, Sparkles } from "lucide-react"

interface NavItem {
  id: string
  label: string
  icon: React.ElementType
  href: string
}

const navItems: NavItem[] = [
  { id: "about", label: "Tentang", icon: User, href: "#about" },
  { id: "skills", label: "Keahlian", icon: Code, href: "#skills" },
  { id: "projects", label: "Proyek", icon: Briefcase, href: "#projects" },
  { id: "contact", label: "Kontak", icon: Mail, href: "#contact" },
]

interface AdvancedNavbarProps {
  activeSection: string
}

export function AdvancedNavbar({ activeSection }: AdvancedNavbarProps) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)

    // Smooth scroll with offset for fixed navbar
    const element = document.querySelector(href)
    if (element) {
      const offsetTop = element.offsetTop - 100
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  const ThemeToggle = () => {
    if (!mounted) {
      return (
        <Button variant="ghost" size="icon" className="relative overflow-hidden">
          <div className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      )
    }

    return (
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="relative overflow-hidden group hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-500 hover:scale-110"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all duration-700 dark:-rotate-180 dark:scale-0 text-orange-500 group-hover:animate-spin" />
        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-180 scale-0 transition-all duration-700 dark:rotate-0 dark:scale-100 text-blue-400 group-hover:animate-pulse" />
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 ${
          isScrolled
            ? "bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-gray-200/50 dark:border-white/10 shadow-lg shadow-purple-500/10"
            : "bg-white/70 dark:bg-black/70 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              <Link
                href="#about"
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick("#about")
                }}
                className="relative text-2xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent hover:scale-110 transition-transform duration-500 flex items-center gap-2"
              >
                <Sparkles className="h-6 w-6 text-purple-500 animate-pulse" />
                Portfolio
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-2">
              {navItems.map((item, index) => (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* Hover background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full transition-all duration-500 ${
                      hoveredItem === item.id ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                  />

                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 rounded-full animate-pulse" />
                  )}

                  <Link
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-500 transform hover:scale-110 ${
                      activeSection === item.id
                        ? "text-purple-600 dark:text-purple-400 font-semibold"
                        : "text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400"
                    }`}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    <item.icon
                      className={`h-4 w-4 transition-all duration-300 ${
                        hoveredItem === item.id ? "animate-bounce" : ""
                      }`}
                    />
                    <span className="font-medium">{item.label}</span>

                    {/* Active dot */}
                    {activeSection === item.id && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-ping" />
                    )}
                  </Link>
                </div>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-2">
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden relative overflow-hidden group hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full" />
                    <Menu
                      className={`h-5 w-5 transition-all duration-300 ${isMenuOpen ? "rotate-90 scale-0" : "rotate-0 scale-100"}`}
                    />
                    <X
                      className={`absolute h-5 w-5 transition-all duration-300 ${isMenuOpen ? "rotate-0 scale-100" : "-rotate-90 scale-0"}`}
                    />
                  </Button>
                </SheetTrigger>

                <SheetContent
                  side="right"
                  className="w-80 bg-white/95 dark:bg-black/95 backdrop-blur-xl border-l border-gray-200/50 dark:border-white/10"
                >
                  <div className="flex flex-col h-full">
                    {/* Mobile Header */}
                    <div className="flex items-center justify-between py-6 border-b border-gray-200/50 dark:border-white/10">
                      <div className="flex items-center gap-2">
                        <Sparkles className="h-6 w-6 text-purple-500 animate-pulse" />
                        <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                          Portfolio
                        </span>
                      </div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="flex-1 py-8">
                      <div className="space-y-2">
                        {navItems.map((item, index) => (
                          <Link
                            key={item.id}
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault()
                              handleNavClick(item.href)
                            }}
                            className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-500 transform hover:scale-105 hover:translate-x-2 ${
                              activeSection === item.id
                                ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-600 dark:text-purple-400 font-semibold shadow-lg"
                                : "text-gray-600 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-white/5 hover:text-purple-600 dark:hover:text-purple-400"
                            }`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                          >
                            <div
                              className={`p-2 rounded-lg transition-all duration-300 ${
                                activeSection === item.id
                                  ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                                  : "bg-gray-100 dark:bg-gray-800 group-hover:bg-purple-100 dark:group-hover:bg-purple-900/30"
                              }`}
                            >
                              <item.icon className="h-5 w-5" />
                            </div>
                            <span className="text-lg font-medium">{item.label}</span>

                            {activeSection === item.id && (
                              <div className="ml-auto">
                                <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-pulse" />
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>

                    {/* Mobile Footer */}
                    <div className="py-6 border-t border-gray-200/50 dark:border-white/10">
                      <div className="text-center text-sm text-gray-500 dark:text-gray-400">
                        <p>Dibuat dengan ❤️</p>
                        <div className="flex justify-center space-x-2 mt-2">
                          <div className="w-1 h-1 bg-purple-500 rounded-full animate-ping" />
                          <div
                            className="w-1 h-1 bg-blue-500 rounded-full animate-ping"
                            style={{ animationDelay: "0.5s" }}
                          />
                          <div
                            className="w-1 h-1 bg-indigo-500 rounded-full animate-ping"
                            style={{ animationDelay: "1s" }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Animated border */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
      </nav>

      {/* Scroll indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/30 dark:bg-gray-800/30 z-40">
        <div
          className="h-full bg-gradient-to-r from-purple-500 via-blue-500 to-indigo-500 transition-all duration-300 ease-out shadow-lg shadow-purple-500/50"
          style={{ width: `${(window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100}%` }}
        />
      </div>
    </>
  )
}
