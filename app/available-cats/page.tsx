import React from 'react'
import Link from 'next/link'
import { Calendar, Heart, MapPin, Filter } from 'lucide-react'

export default function AvailableCatsPage() {
  const availableCats = [
    {
      id: 1,
      name: "Luna",
      color: "Seal Point",
      age: "12 weeks",
      gender: "Female",
      price: "$1,500",
      image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "available",
      description: "Luna is a sweet and gentle kitten with beautiful blue eyes. She loves to cuddle and play.",
      parents: "Duchess & Prince"
    },
    {
      id: 2,
      name: "Oliver",
      color: "Blue Point",
      age: "10 weeks",
      gender: "Male",
      price: "$1,600",
      image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "available",
      description: "Oliver is an active and playful kitten who loves attention and interactive toys.",
      parents: "Bella & Storm"
    },
    {
      id: 3,
      name: "Stella",
      color: "Flame Point",
      age: "14 weeks",
      gender: "Female",
      price: "$1,550",
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "reserved",
      description: "Stella is a calm and affectionate kitten with a beautiful flame-colored coat.",
      parents: "Aurora & Leo"
    },
    {
      id: 4,
      name: "Max",
      color: "Chocolate Point",
      age: "8 weeks",
      gender: "Male",
      price: "$1,650",
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "available",
      description: "Max is a curious and intelligent kitten who enjoys exploring and learning new things.",
      parents: "Duchess & Prince"
    },
    {
      id: 5,
      name: "Sophie",
      color: "Lilac Point",
      age: "16 weeks",
      gender: "Female",
      price: "$1,700",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "available",
      description: "Sophie is a graceful and elegant kitten with a rare lilac coat coloring.",
      parents: "Luna & Apollo"
    },
    {
      id: 6,
      name: "Charlie",
      color: "Seal Point",
      age: "6 weeks",
      gender: "Male",
      price: "$1,500",
      image: "https://images.unsplash.com/photo-1533738363-b7f9aef128ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "available",
      description: "Charlie is a tiny bundle of joy with striking markings and a loving personality.",
      parents: "Bella & Storm"
    }
  ]

  return (
    <div className="min-h-screen bg-ragdoll-gray-50">
      {/* Header */}
      <section className="bg-ragdoll-blue-600 text-white py-16">
        <div className="container-max text-center">
          <h1 className="heading-1 text-white mb-6">Available Ragdoll Cats</h1>
          <p className="text-xl text-ragdoll-blue-100 max-w-2xl mx-auto">
            Meet our beautiful ragdoll kittens looking for their forever homes. Each kitten comes 
            with health certificates, vaccination records, and a lifetime of support.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="container-max">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-ragdoll-blue-600" />
              <span className="font-medium text-ragdoll-blue-900">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-ragdoll-blue-100 text-ragdoll-blue-800 rounded-lg hover:bg-ragdoll-blue-200 transition-colors">
                All Colors
              </button>
              <button className="px-4 py-2 bg-white border border-ragdoll-blue-300 text-ragdoll-blue-800 rounded-lg hover:bg-ragdoll-blue-50 transition-colors">
                Available Only
              </button>
              <button className="px-4 py-2 bg-white border border-ragdoll-blue-300 text-ragdoll-blue-800 rounded-lg hover:bg-ragdoll-blue-50 transition-colors">
                Male
              </button>
              <button className="px-4 py-2 bg-white border border-ragdoll-blue-300 text-ragdoll-blue-800 rounded-lg hover:bg-ragdoll-blue-50 transition-colors">
                Female
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cats Grid */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableCats.map((cat) => (
              <div key={cat.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                    cat.status === 'available' 
                      ? 'bg-green-500 text-white' 
                      : 'bg-yellow-500 text-white'
                  }`}>
                    {cat.status === 'available' ? 'Available' : 'Reserved'}
                  </div>
                  <button className="absolute top-4 left-4 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-5 w-5 text-ragdoll-blue-600" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="heading-3 text-xl">{cat.name}</h3>
                    <span className="text-2xl font-bold text-ragdoll-blue-600">{cat.price}</span>
                  </div>
                  
                  <div className="space-y-2 text-ragdoll-gray-500 mb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{cat.age} old</span>
                      </div>
                      <span className="text-sm font-medium text-ragdoll-blue-600">{cat.gender}</span>
                    </div>
                    <p className="text-sm">Color: {cat.color}</p>
                    <p className="text-sm">Parents: {cat.parents}</p>
                  </div>

                  <p className="text-ragdoll-gray-500 text-sm mb-4 line-clamp-2">
                    {cat.description}
                  </p>

                  <div className="flex gap-2">
                    <Link 
                      href={`/available-cats/${cat.id}`}
                      className="btn-primary flex-1 text-center"
                    >
                      View Details
                    </Link>
                    <Link 
                      href={`/contact?cat=${cat.name}`}
                      className="btn-secondary px-4"
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-ragdoll-blue-600">
        <div className="container-max text-center">
          <h2 className="heading-2 text-white mb-6">Didn't Find Your Perfect Match?</h2>
          <p className="text-xl text-ragdoll-blue-100 mb-8 max-w-2xl mx-auto">
            We have upcoming litters and can help you find the perfect ragdoll companion. 
            Contact us to learn about future availability.
          </p>
          <Link href="/contact" className="btn-primary bg-ragdoll-blue-700 hover:bg-ragdoll-blue-800">
            Contact Us About Future Litters
          </Link>
        </div>
      </section>
    </div>
  )
} 