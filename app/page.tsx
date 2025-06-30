import React from 'react'
import Link from 'next/link'
import { ArrowRight, Heart, Shield, Award, Users } from 'lucide-react'
import HeroSection from '@/components/HeroSection'
import FeaturedCats from '@/components/FeaturedCats'
import Testimonials from '@/components/Testimonials'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Introduction Section */}
      <section className="section-padding bg-ragdoll-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Welcome to Bianca Azurri Ragdolls</h2>
            <p className="text-body max-w-3xl mx-auto">
              We are dedicated to breeding exceptional ragdoll cats with gentle temperaments, stunning beauty, 
              and excellent health. Our cats are raised in a loving home environment and are well-socialized 
              with children and other pets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Heart className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">Loving Care</h3>
              <p className="text-ragdoll-gray-500">
                Our cats are raised with love and attention in our family home
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Shield className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">Health Guarantee</h3>
              <p className="text-ragdoll-gray-500">
                All kittens come with health certificates and genetic testing
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Award className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">Champion Bloodlines</h3>
              <p className="text-ragdoll-gray-500">
                Our breeding cats come from award-winning bloodlines
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">Lifetime Support</h3>
              <p className="text-ragdoll-gray-500">
                We provide ongoing support and guidance for all our families
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cats Section */}
      <FeaturedCats />

      {/* About Ragdolls Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Why Choose Ragdoll Cats?</h2>
              <div className="space-y-4 text-body">
                <p>
                  Ragdoll cats are known for their docile and placid temperament. They are often called 
                  "puppy cats" because of their tendency to follow their owners around and their relaxed 
                  nature when picked up.
                </p>
                <p>
                  These beautiful cats are perfect for families with children and get along well with 
                  other pets. Their semi-long coat is surprisingly easy to maintain, and their stunning 
                  blue eyes capture hearts everywhere.
                </p>
              </div>
              <Link href="/breed-info" className="btn-primary inline-flex items-center mt-6">
                Learn More About Ragdolls
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-ragdoll-blue-100 rounded-2xl p-8">
                <img
                  src="/images/ragdoll-with-orange-bg.jpg"
                  alt="Beautiful Ragdoll Cat"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <section className="section-padding bg-ragdoll-blue-600">
        <div className="container-max text-center">
          <h2 className="heading-2 text-white mb-6">Ready to Welcome a Ragdoll?</h2>
          <p className="text-xl text-ragdoll-blue-100 mb-8 max-w-2xl mx-auto">
            Browse our available kittens or contact us to learn more about our upcoming litters
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/available-cats" className="btn-secondary bg-white text-ragdoll-blue-600 hover:bg-ragdoll-gray-50">
              View Available Cats
            </Link>
            <Link href="/contact" className="btn-primary bg-ragdoll-blue-700 hover:bg-ragdoll-blue-800">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 