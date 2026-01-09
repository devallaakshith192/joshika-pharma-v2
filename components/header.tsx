"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

const navigation = [
  {
    name: "ABOUT US",
    href: "/about",
    submenu: [
      { name: "M & V", href: "/mission-vision" },
      { name: "Director's Profile", href: "/directors-profile" },
      { name: "Sustainability", href: "/sustainability" },
    ],
  },
  { name: "PRODUCTS", href: "/products" },
  { name: "MANUFACTURING", href: "/manufacturing" },
  { name: "QUALITY", href: "/quality" },
  { name: "GALLERY", href: "/gallery" },
  { name: "CONTACT", href: "/contact" },
]

function HeaderComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`bg-blue-900/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/joshika-logo.png"
              alt="Joshika Pharma Logo"
              width={48}
              height={48}
              className={`transition-all duration-300 ${isScrolled ? "w-10 h-10" : "w-12 h-12"}`}
            />
            <div className={`transition-all duration-300 ${isScrolled ? "hidden sm:block" : "block"}`}>
              <h1 className={`font-bold text-white transition-all duration-300 ${isScrolled ? "text-lg" : "text-xl"}`}>
                JOSHIKA
              </h1>
              <p className={`text-blue-200 transition-all duration-300 ${isScrolled ? "text-xs" : "text-sm"}`}>
                Pharma Pvt Ltd
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`text-sm font-semibold tracking-wide transition-colors duration-200 flex items-center gap-1 ${
                    pathname === item.href
                      ? "text-white border-b-2 border-blue-300 pb-1"
                      : "text-blue-100 hover:text-blue-200"
                  }`}
                >
                  {item.name}
                  {item.submenu && <ChevronDown className="h-4 w-4" />}
                </Link>

                {item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2 z-50">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.name}
                        href={subitem.href}
                        className={`block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                          pathname === subitem.href ? "text-blue-900 bg-blue-100" : "text-blue-900 hover:bg-blue-50"
                        }`}
                      >
                        {subitem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden text-white hover:bg-blue-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <button
                    onClick={() => item.submenu && setDropdownOpen(dropdownOpen === item.name ? null : item.name)}
                    className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors duration-200 rounded-md flex justify-between items-center ${
                      pathname === item.href
                        ? "text-white bg-blue-800"
                        : "text-blue-100 hover:bg-blue-800 hover:text-white"
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.submenu && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${dropdownOpen === item.name ? "rotate-180" : ""}`}
                      />
                    )}
                  </button>

                  {item.submenu && dropdownOpen === item.name && (
                    <div className="bg-blue-800 pl-4">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className={`block px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                            pathname === subitem.href
                              ? "text-white border-l-2 border-blue-300"
                              : "text-blue-100 hover:text-white"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export const Header = HeaderComponent

export default HeaderComponent
