import React from 'react'
import Link from 'next/link'
import { ArrowRight, Calendar, Heart } from 'lucide-react'

const FeaturedCats = () => {
  const featuredCats = [
    {
      id: 1,
      name: "Luna",
      color: "Seal Point",
      age: "12 weeks",
      price: "$1,500",
      image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "available"
    },
    {
      id: 2,
      name: "Oliver",
      color: "Blue Point",
      age: "10 weeks",
      price: "$1,600",
      image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "available"
    },
    {
      id: 3,
      name: "Stella",
      color: "Flame Point",
      age: "14 weeks",
      price: "$1,550",
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      status: "reserved"
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">Featured Available Cats</h2>
          <p className="text-body max-w-2xl mx-auto">
            Meet some of our beautiful ragdoll kittens currently available for adoption. 
            Each kitten comes with health certificates, vaccination records, and a lifetime of support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredCats.map((cat) => (
            <div key={cat.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
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
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{cat.age} old</span>
                  </div>
                  <p className="text-sm">Color: {cat.color}</p>
                </div>

                <Link 
                  href={`/available-cats/${cat.id}`}
                  className="btn-primary w-full inline-flex items-center justify-center"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/available-cats" className="btn-secondary inline-flex items-center">
            View All Available Cats
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCats 