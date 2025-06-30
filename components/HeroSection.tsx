import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Beautiful Ragdoll Cat"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-ragdoll-blue-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="heading-1 text-white mb-6">
          Beautiful Ragdoll Cats
          <span className="block text-ragdoll-blue-200">With Gentle Hearts</span>
        </h1>
        <p className="text-xl md:text-2xl text-ragdoll-blue-100 mb-8 leading-relaxed max-w-2xl mx-auto">
          Discover your perfect feline companion from our carefully bred ragdoll cats, 
          known for their loving temperament and stunning beauty.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/available-cats" className="btn-primary bg-ragdoll-blue-600 hover:bg-ragdoll-blue-700 inline-flex items-center justify-center">
            View Available Cats
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link href="/about" className="btn-secondary border-white text-ragdoll-blue-900 hover:bg-gray-200 hover:text-ragdoll-blue-900">
            Learn About Us
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 