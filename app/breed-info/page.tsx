import React from 'react'
import Link from 'next/link'
import { Heart, Users, Palette, Ruler, Brain, Shield } from 'lucide-react'

export default function BreedInfoPage() {
  const characteristics = [
    {
      icon: Heart,
      title: "Docile & Gentle",
      description: "Known for their calm, relaxed temperament and tendency to go limp when picked up"
    },
    {
      icon: Users,
      title: "People-Oriented",
      description: "Love to follow their owners around and enjoy being part of family activities"
    },
    {
      icon: Brain,
      title: "Intelligent",
      description: "Quick learners who can be taught tricks and respond well to positive reinforcement"
    },
    {
      icon: Palette,
      title: "Beautiful Colors",
      description: "Available in various point colors including seal, blue, chocolate, and lilac"
    }
  ]

  const colors = [
    {
      name: "Seal Point",
      description: "Dark brown points with cream/fawn body",
      image: "https://images.unsplash.com/photo-1513245543132-31f507417b26?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Blue Point", 
      description: "Gray-blue points with bluish-white body",
      image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Chocolate Point",
      description: "Milk chocolate points with ivory body",
      image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      name: "Flame Point",
      description: "Orange-red points with cream body",
      image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-ragdoll-blue-600 text-white py-16">
        <div className="container-max text-center">
          <h1 className="heading-1 text-white mb-6">All About Ragdoll Cats</h1>
          <p className="text-xl text-ragdoll-blue-100 max-w-2xl mx-auto">
            Discover the wonderful world of ragdoll cats - their unique characteristics, 
            gentle temperament, and what makes them such special companions.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">The Ragdoll Breed</h2>
              <div className="space-y-4 text-body">
                <p>
                  Ragdoll cats are a relatively new breed, first developed in the 1960s by breeder Ann Baker 
                  in California. They are known for their large size, semi-long coat, and most notably, 
                  their docile and placid temperament.
                </p>
                <p>
                  The name "Ragdoll" comes from their tendency to go limp and relaxed when picked up, 
                  much like a child's ragdoll toy. This unique trait, combined with their striking blue eyes 
                  and beautiful pointed coat patterns, makes them one of the most beloved cat breeds.
                </p>
                <p>
                  Ragdolls are often called "puppy cats" because they tend to follow their owners around, 
                  greet them at the door, and enjoy being part of family activities. They are excellent 
                  companions for families with children and get along well with other pets.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-ragdoll-blue-100 rounded-2xl p-8">
                <img
                  src="/images/ragdoll-digendong.avif"
                  alt="Beautiful Ragdoll Cat"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Characteristics */}
      <section className="section-padding bg-ragdoll-gray-50">
        <div className="container-max">
          <h2 className="heading-2 text-center mb-16">Key Characteristics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {characteristics.map((char, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                <char.icon className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
                <h3 className="heading-3 mb-3">{char.title}</h3>
                <p className="text-ragdoll-gray-500">{char.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Physical Traits */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="heading-2 text-center mb-16">Physical Traits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-ragdoll-gray-50 rounded-xl p-8">
              <Ruler className="h-10 w-10 text-ragdoll-blue-600 mb-4" />
              <h3 className="heading-3 mb-3">Size</h3>
              <ul className="space-y-2 text-ragdoll-gray-500">
                <li>• Males: 15-20 pounds</li>
                <li>• Females: 10-15 pounds</li>
                <li>• Large, sturdy build</li>
                <li>• Full size reached at 3-4 years</li>
              </ul>
            </div>

            <div className="bg-ragdoll-gray-50 rounded-xl p-8">
              <Palette className="h-10 w-10 text-ragdoll-blue-600 mb-4" />
              <h3 className="heading-3 mb-3">Coat</h3>
              <ul className="space-y-2 text-ragdoll-gray-500">
                <li>• Semi-long, silky texture</li>
                <li>• Minimal matting</li>
                <li>• Pointed color pattern</li>
                <li>• Seasonal shedding</li>
              </ul>
            </div>

            <div className="bg-ragdoll-gray-50 rounded-xl p-8">
              <Heart className="h-10 w-10 text-ragdoll-blue-600 mb-4" />
              <h3 className="heading-3 mb-3">Eyes</h3>
              <ul className="space-y-2 text-ragdoll-gray-500">
                <li>• Always blue</li>
                <li>• Large and oval</li>
                <li>• Striking and expressive</li>
                <li>• Deep blue preferred</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Color Patterns */}
      <section className="section-padding bg-ragdoll-gray-50">
        <div className="container-max">
          <h2 className="heading-2 text-center mb-16">Color Patterns</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {colors.map((color, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src={color.image}
                  alt={color.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="heading-3 mb-2">{color.name}</h3>
                  <p className="text-ragdoll-gray-500 text-sm">{color.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Temperament */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Temperament & Personality</h2>
            <p className="text-body max-w-3xl mx-auto">
              Ragdolls are known for their exceptional temperament, making them ideal family pets 
              and companions for people of all ages.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-ragdoll-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="heading-3 mb-2">Gentle & Calm</h3>
                  <p className="text-body">
                    Ragdolls are known for their laid-back, gentle nature. They rarely show aggression 
                    and are patient with children and other pets.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-ragdoll-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="heading-3 mb-2">Affectionate</h3>
                  <p className="text-body">
                    They love to be petted and will often seek out human companionship. Many ragdolls 
                    enjoy being held and will purr contentedly when cuddled.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-ragdoll-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="heading-3 mb-2">Social</h3>
                  <p className="text-body">
                    Unlike many cat breeds, ragdolls are very social and enjoy being around people. 
                    They often greet visitors and are comfortable in social situations.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-ragdoll-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="heading-3 mb-2">Intelligent</h3>
                  <p className="text-body">
                    Ragdolls are smart cats that can learn their names, come when called, and even 
                    learn simple tricks. They respond well to positive reinforcement.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-ragdoll-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">5</span>
                </div>
                <div>
                  <h3 className="heading-3 mb-2">Adaptable</h3>
                  <p className="text-body">
                    They adapt well to new environments and changes in routine, making them excellent 
                    pets for families with varying schedules.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-ragdoll-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">6</span>
                </div>
                <div>
                  <h3 className="heading-3 mb-2">Quiet</h3>
                  <p className="text-body">
                    Ragdolls are generally quiet cats with soft, pleasant voices. They communicate 
                    through gentle meows and purring rather than loud vocalizations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Health & Lifespan */}
      <section className="section-padding bg-ragdoll-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Health & Lifespan</h2>
            <p className="text-body max-w-2xl mx-auto">
              Ragdolls are generally healthy cats with proper care and responsible breeding practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Shield className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Lifespan</h3>
              <p className="text-2xl font-bold text-ragdoll-blue-600 mb-2">12-17 Years</p>
              <p className="text-ragdoll-gray-500">With proper care and nutrition</p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Heart className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Health Screening</h3>
              <p className="text-ragdoll-gray-500">
                Genetic testing for HCM, PKD, and other hereditary conditions is essential for breeding cats
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <Users className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-3">Veterinary Care</h3>
              <p className="text-ragdoll-gray-500">
                Regular check-ups, vaccinations, and preventive care help ensure a long, healthy life
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-ragdoll-blue-600">
        <div className="container-max text-center">
          <h2 className="heading-2 text-white mb-6">Ready to Welcome a Ragdoll?</h2>
          <p className="text-xl text-ragdoll-blue-100 mb-8 max-w-2xl mx-auto">
            Now that you know more about ragdoll cats, browse our available kittens or learn about our care recommendations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/available-cats" className="btn-secondary bg-white text-ragdoll-blue-600 hover:bg-ragdoll-gray-50">
              View Available Cats
            </Link>
            <Link href="/care-guide" className="btn-primary bg-ragdoll-blue-700 hover:bg-ragdoll-blue-800">
              Care Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 