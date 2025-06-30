import React from 'react'
import Link from 'next/link'
import { Heart, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-ragdoll-blue-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-6 w-6 text-ragdoll-blue-200" fill="currentColor" />
              <span className="font-display font-bold text-xl">Bianca Azurri Ragdolls</span>
            </div>
            <p className="text-ragdoll-blue-200 leading-relaxed">
              Dedicated to breeding beautiful, healthy, and well-socialized ragdoll cats with gentle temperaments and loving personalities.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/available-cats" className="text-ragdoll-blue-200 hover:text-white transition-colors">Available Cats</Link></li>
              <li><Link href="/about" className="text-ragdoll-blue-200 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/breed-info" className="text-ragdoll-blue-200 hover:text-white transition-colors">Ragdoll Info</Link></li>
              <li><Link href="/adoption-process" className="text-ragdoll-blue-200 hover:text-white transition-colors">Adoption Process</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-ragdoll-blue-300" />
                <span className="text-ragdoll-blue-200">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-ragdoll-blue-300" />
                <span className="text-ragdoll-blue-200">info@biancaazurriragdolls.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-ragdoll-blue-300" />
                <span className="text-ragdoll-blue-200">Beautiful Valley, CA</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-ragdoll-blue-200 hover:text-white transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-ragdoll-blue-200 hover:text-white transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-ragdoll-blue-200 hover:text-white transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="text-ragdoll-blue-200 text-sm">
              Follow us for the latest updates on available kittens and ragdoll care tips!
            </p>
          </div>
        </div>

        <div className="border-t border-ragdoll-blue-800 mt-8 pt-8 text-center">
          <p className="text-ragdoll-blue-200">
            © 2024 Bianca Azurri Ragdolls. All rights reserved. | 
            <Link href="/privacy" className="hover:text-white transition-colors ml-1">Privacy Policy</Link> | 
            <Link href="/terms" className="hover:text-white transition-colors ml-1">Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 