import React from 'react'
import Link from 'next/link'
import { Award, Heart, Shield, Users, Clock, Star } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-ragdoll-blue-600 text-white py-16">
        <div className="container-max text-center">
          <h1 className="heading-1 text-white mb-6">About Bianca Azurri Ragdolls</h1>
          <p className="text-xl text-ragdoll-blue-100 max-w-2xl mx-auto">
            Dedicated to breeding exceptional ragdoll cats with love, care, and the highest standards 
            of health and temperament for over a decade.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Our Story</h2>
              <div className="space-y-4 text-body">
                <p>
                  Welcome to Bianca Azurri Ragdolls, where our passion for these magnificent cats began over 
                  12 years ago. What started as a love for our first ragdoll, Princess, has grown into 
                  a dedicated cattery focused on preserving and enhancing the wonderful qualities that 
                  make ragdolls so special.
                </p>
                <p>
                  We are a small, family-run cattery located in the beautiful hills of Northern California. 
                  Our cats are not just breeding animals - they are beloved family members who live in 
                  our home, receive daily love and attention, and are raised alongside our children.
                </p>
                <p>
                  Every kitten that leaves our home carries with it the love, care, and socialization 
                  they received during their crucial early weeks. We believe this foundation creates 
                  the gentle, loving companions that ragdolls are known for.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-ragdoll-blue-100 rounded-2xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Ragdoll family with kittens"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Credentials */}
      <section className="section-padding bg-ragdoll-gray-50">
        <div className="container-max">
          <h2 className="heading-2 text-center mb-16">Experience & Credentials</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Clock className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">12+ Years</h3>
              <p className="text-ragdoll-gray-500">
                Experience breeding and raising ragdoll cats
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Award className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">TICA Registered</h3>
              <p className="text-ragdoll-gray-500">
                Registered with The International Cat Association
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Shield className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">Health Tested</h3>
              <p className="text-ragdoll-gray-500">
                All breeding cats undergo comprehensive genetic testing
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Users className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">50+ Families</h3>
              <p className="text-ragdoll-gray-500">
                Happy families who have welcomed our ragdolls
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Star className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">Champion Lines</h3>
              <p className="text-ragdoll-gray-500">
                Our cats come from award-winning bloodlines
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <Heart className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">Lifetime Support</h3>
              <p className="text-ragdoll-gray-500">
                We're here for you and your cat for life
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Breeding Philosophy */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Our Breeding Philosophy</h2>
            <p className="text-body max-w-3xl mx-auto">
              We believe that breeding ragdoll cats is both an art and a responsibility. Our approach 
              focuses on health, temperament, and preserving the gentle nature that makes ragdolls so special.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="border-l-4 border-ragdoll-blue-600 pl-6">
                <h3 className="heading-3 mb-2">Health First</h3>
                <p className="text-body">
                  All our breeding cats undergo extensive health screening including genetic testing 
                  for HCM, PKD, and other hereditary conditions. We only breed cats with excellent 
                  health profiles to ensure the healthiest possible kittens.
                </p>
              </div>

              <div className="border-l-4 border-ragdoll-blue-600 pl-6">
                <h3 className="heading-3 mb-2">Gentle Temperament</h3>
                <p className="text-body">
                  We carefully select breeding cats not just for their physical beauty, but for their 
                  calm, loving, and docile personalities. This ensures that every kitten inherits 
                  the wonderful ragdoll temperament.
                </p>
              </div>

              <div className="border-l-4 border-ragdoll-blue-600 pl-6">
                <h3 className="heading-3 mb-2">Early Socialization</h3>
                <p className="text-body">
                  From birth, our kittens are handled daily, exposed to household sounds, and socialized 
                  with children and other pets. This early exposure creates confident, well-adjusted cats.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-4 border-ragdoll-blue-600 pl-6">
                <h3 className="heading-3 mb-2">Quality Over Quantity</h3>
                <p className="text-body">
                  We maintain a small number of breeding cats to ensure each receives individual attention 
                  and care. This allows us to focus on quality rather than quantity.
                </p>
              </div>

              <div className="border-l-4 border-ragdoll-blue-600 pl-6">
                <h3 className="heading-3 mb-2">Perfect Matches</h3>
                <p className="text-body">
                  We take time to understand each family's lifestyle and preferences to ensure the perfect 
                  match between kitten and family. Every placement is carefully considered.
                </p>
              </div>

              <div className="border-l-4 border-ragdoll-blue-600 pl-6">
                <h3 className="heading-3 mb-2">Ongoing Support</h3>
                <p className="text-body">
                  Our relationship doesn't end when you take your kitten home. We provide lifetime support, 
                  guidance, and are always available to answer questions about your ragdoll's care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="section-padding bg-ragdoll-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Meet Our Family</h2>
            <p className="text-body max-w-2xl mx-auto">
              Behind every beautiful ragdoll is a loving family dedicated to their care and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b94c?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Sarah - Main Breeder"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="heading-3 mb-2">Sarah Thompson</h3>
              <p className="text-ragdoll-blue-600 font-medium mb-4">Lead Breeder & Owner</p>
              <p className="text-body">
                With over 12 years of experience, Sarah oversees all breeding decisions and ensures 
                the highest standards of care for our cats and kittens.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                alt="Mike - Family Support"
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
              />
              <h3 className="heading-3 mb-2">Mike Thompson</h3>
              <p className="text-ragdoll-blue-600 font-medium mb-4">Co-Owner & Support</p>
              <p className="text-body">
                Mike helps with daily care and ensures our cats have the best possible environment. 
                He also manages our facility maintenance and kitten socialization programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-ragdoll-blue-600">
        <div className="container-max text-center">
          <h2 className="heading-2 text-white mb-6">Ready to Join Our Family?</h2>
          <p className="text-xl text-ragdoll-blue-100 mb-8 max-w-2xl mx-auto">
            We'd love to help you find your perfect ragdoll companion. Contact us to learn more 
            about our available kittens and upcoming litters.
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