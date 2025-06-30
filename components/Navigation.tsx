'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Heart } from 'lucide-react'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/available-cats', label: 'Available Cats' },
    { href: '/about', label: 'About Us' },
    { href: '/breed-info', label: 'Ragdoll Info' },
    { href: '/care-guide', label: 'Care Guide' },
    { href: '/adoption-process', label: 'Adoption Process' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <nav className="bg-white shadow-lg border-b border-ragdoll-blue-100 sticky top-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-ragdoll-blue-600" fill="currentColor" />
            <span className="font-display font-bold text-2xl text-ragdoll-blue-900">
              Bianca Azurri Ragdolls
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-ragdoll-blue-800 hover:text-ragdoll-blue-600 font-medium transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-ragdoll-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg text-ragdoll-blue-800 hover:bg-ragdoll-blue-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-ragdoll-blue-800 hover:text-ragdoll-blue-600 hover:bg-ragdoll-blue-50 px-4 py-2 rounded-lg font-medium transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation 