import React from 'react'
import Link from 'next/link'
import { Heart, Scissors, Utensils, Activity, Home, Stethoscope, Brush, Droplets } from 'lucide-react'

export default function CareGuidePage() {
  const careAreas = [
    {
      icon: Utensils,
      title: "Nutrition",
      tips: [
        "Feed high-quality cat food appropriate for age and activity level",
        "Provide fresh water daily in clean bowls",
        "Monitor weight to prevent obesity",
        "Establish regular feeding schedule"
      ]
    },
    {
      icon: Brush,
      title: "Grooming",
      tips: [
        "Brush 2-3 times per week to prevent matting",
        "Use a slicker brush for the undercoat",
        "Pay special attention to areas prone to matting",
        "Regular nail trimming every 2-3 weeks"
      ]
    },
    {
      icon: Activity,
      title: "Exercise",
      tips: [
        "Provide interactive toys and climbing structures",
        "Engage in daily play sessions",
        "Use puzzle feeders to encourage mental stimulation",
        "Rotate toys to maintain interest"
      ]
    },
    {
      icon: Stethoscope,
      title: "Health Care",
      tips: [
        "Annual veterinary check-ups",
        "Keep up with vaccinations",
        "Regular dental care and teeth cleaning",
        "Monitor for any changes in behavior or appetite"
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-ragdoll-blue-600 text-white py-16">
        <div className="container-max text-center">
          <h1 className="heading-1 text-white mb-6">Ragdoll Cat Care Guide</h1>
          <p className="text-xl text-ragdoll-blue-100 max-w-2xl mx-auto">
            Everything you need to know to provide the best care for your ragdoll cat, 
            from nutrition and grooming to health and enrichment.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Caring for Your Ragdoll</h2>
            <p className="text-body max-w-3xl mx-auto">
              Ragdolls are generally easy-care cats, but they do have some specific needs to keep them 
              healthy and happy. This comprehensive guide will help you provide the best possible care 
              for your gentle companion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {careAreas.map((area, index) => (
              <div key={index} className="bg-ragdoll-gray-50 rounded-xl p-6">
                <area.icon className="h-12 w-12 text-ragdoll-blue-600 mb-4" />
                <h3 className="heading-3 mb-4">{area.title}</h3>
                <ul className="space-y-2">
                  {area.tips.map((tip, tipIndex) => (
                    <li key={tipIndex} className="text-sm text-ragdoll-gray-500 flex items-start">
                      <span className="text-ragdoll-blue-600 mr-2">•</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Grooming Guide */}
      <section className="section-padding bg-ragdoll-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">Grooming Your Ragdoll</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Brush className="h-6 w-6 text-ragdoll-blue-600 mt-1" />
                  <div>
                    <h3 className="heading-3 mb-2">Daily Brushing</h3>
                    <p className="text-body">
                      While ragdolls have semi-long coats, they are surprisingly low-maintenance. 
                      Brush 2-3 times per week to prevent matting and reduce shedding.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Scissors className="h-6 w-6 text-ragdoll-blue-600 mt-1" />
                  <div>
                    <h3 className="heading-3 mb-2">Problem Areas</h3>
                    <p className="text-body">
                      Pay special attention to the areas behind the ears, under the arms, and the back legs 
                      where matting is most likely to occur.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Droplets className="h-6 w-6 text-ragdoll-blue-600 mt-1" />
                  <div>
                    <h3 className="heading-3 mb-2">Bathing</h3>
                    <p className="text-body">
                      Ragdolls rarely need baths unless they get into something messy. Their coats are 
                      naturally clean and don't hold dirt easily.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-ragdoll-blue-100 rounded-2xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Grooming a Ragdoll Cat"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition Guide */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="heading-2 text-center mb-16">Nutrition & Feeding</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-ragdoll-gray-50 rounded-xl p-8">
              <h3 className="heading-3 mb-4">Kitten (0-12 months)</h3>
              <ul className="space-y-3 text-ragdoll-gray-500">
                <li>• High-quality kitten food</li>
                <li>• Feed 3-4 times daily</li>
                <li>• Free feeding until 6 months</li>
                <li>• Monitor growth carefully</li>
                <li>• Gradual transition to adult food</li>
              </ul>
            </div>

            <div className="bg-ragdoll-gray-50 rounded-xl p-8">
              <h3 className="heading-3 mb-4">Adult (1-7 years)</h3>
              <ul className="space-y-3 text-ragdoll-gray-500">
                <li>• Premium adult cat food</li>
                <li>• Feed 2 times daily</li>
                <li>• Monitor weight closely</li>
                <li>• Adjust portions based on activity</li>
                <li>• Fresh water always available</li>
              </ul>
            </div>

            <div className="bg-ragdoll-gray-50 rounded-xl p-8">
              <h3 className="heading-3 mb-4">Senior (7+ years)</h3>
              <ul className="space-y-3 text-ragdoll-gray-500">
                <li>• Senior-specific formula</li>
                <li>• Smaller, more frequent meals</li>
                <li>• Monitor for health changes</li>
                <li>• Consider supplements</li>
                <li>• Regular weight checks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Health Monitoring */}
      <section className="section-padding bg-ragdoll-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="heading-2 mb-6">Health Monitoring</h2>
            <p className="text-body max-w-2xl mx-auto">
              Regular health monitoring helps catch potential issues early and ensures your ragdoll lives a long, healthy life.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="heading-3 mb-6">Signs of Good Health</h3>
              <ul className="space-y-3 text-ragdoll-gray-500">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Clear, bright eyes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Clean ears with no odor
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Pink gums and white teeth
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Soft, shiny coat
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Good appetite and energy
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Regular elimination habits
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="heading-3 mb-6">Warning Signs</h3>
              <ul className="space-y-3 text-ragdoll-gray-500">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Loss of appetite or excessive drinking
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Lethargy or behavioral changes
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Difficulty breathing or coughing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Vomiting or diarrhea
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Changes in litter box habits
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Hiding or avoiding interaction
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Enrichment */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="heading-2 text-center mb-16">Creating the Perfect Environment</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Home className="h-8 w-8 text-ragdoll-blue-600 mt-1" />
                <div>
                  <h3 className="heading-3 mb-3">Indoor Environment</h3>
                  <p className="text-body mb-4">
                    Ragdolls should be kept indoors for their safety. Create a stimulating environment with:
                  </p>
                  <ul className="space-y-2 text-ragdoll-gray-500">
                    <li>• Multiple levels for climbing</li>
                    <li>• Cozy hiding spots and perches</li>
                    <li>• Scratching posts and pads</li>
                    <li>• Window views for entertainment</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Activity className="h-8 w-8 text-ragdoll-blue-600 mt-1" />
                <div>
                  <h3 className="heading-3 mb-3">Mental Stimulation</h3>
                  <p className="text-body mb-4">
                    Keep your ragdoll's mind active with:
                  </p>
                  <ul className="space-y-2 text-ragdoll-gray-500">
                    <li>• Puzzle feeders and treat balls</li>
                    <li>• Interactive toys and laser pointers</li>
                    <li>• Rotating toy selection</li>
                    <li>• Training sessions with treats</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-ragdoll-blue-100 rounded-2xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Ragdoll Cat Playing"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Preparedness */}
      <section className="section-padding bg-ragdoll-blue-50">
        <div className="container-max">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h2 className="heading-2 text-center mb-8">Emergency Preparedness</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="heading-3 mb-4">Emergency Kit</h3>
                <ul className="space-y-2 text-ragdoll-gray-500 text-sm">
                  <li>• First aid supplies</li>
                  <li>• Emergency vet contact info</li>
                  <li>• Cat carrier</li>
                  <li>• 3-day food and water supply</li>
                  <li>• Medical records copy</li>
                </ul>
              </div>

              <div>
                <h3 className="heading-3 mb-4">Important Numbers</h3>
                <ul className="space-y-2 text-ragdoll-gray-500 text-sm">
                  <li>• Your veterinarian</li>
                  <li>• Emergency animal hospital</li>
                  <li>• Poison control hotline</li>
                  <li>• Your contact information</li>
                  <li>• Backup caregiver</li>
                </ul>
              </div>

              <div>
                <h3 className="heading-3 mb-4">Identification</h3>
                <ul className="space-y-2 text-ragdoll-gray-500 text-sm">
                  <li>• Microchip registration</li>
                  <li>• ID collar with tags</li>
                  <li>• Recent photos</li>
                  <li>• Detailed description</li>
                  <li>• Veterinary records</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-ragdoll-blue-600">
        <div className="container-max text-center">
          <h2 className="heading-2 text-white mb-6">Need More Guidance?</h2>
          <p className="text-xl text-ragdoll-blue-100 mb-8 max-w-2xl mx-auto">
            We're here to support you throughout your ragdoll's life. Contact us for personalized care advice 
            or browse our available kittens.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary bg-white text-ragdoll-blue-600 hover:bg-ragdoll-gray-50">
              Contact Us
            </Link>
            <Link href="/available-cats" className="btn-primary bg-ragdoll-blue-700 hover:bg-ragdoll-blue-800">
              View Available Cats
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
} 