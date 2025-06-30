import React from 'react'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "San Francisco, CA",
      rating: 5,
      text: "We got our beautiful ragdoll Luna from Bianca Azurri Ragdolls 2 years ago. She has the most gentle and loving personality. The breeder was incredibly knowledgeable and supportive throughout the entire process.",
      catName: "Luna"
    },
    {
      id: 2,
      name: "Michael & Lisa Chen",
      location: "Portland, OR",
      rating: 5,
      text: "Oliver is everything we hoped for in a ragdoll cat. He's calm, affectionate, and great with our kids. The health guarantee and ongoing support from Bianca Azurri Ragdolls gave us such peace of mind.",
      catName: "Oliver"
    },
    {
      id: 3,
      name: "Jennifer Martinez",
      location: "Seattle, WA",
      rating: 5,
      text: "I can't imagine life without our sweet Bella. She's the perfect addition to our family. The professionalism and care shown by Bianca Azurri Ragdolls was exceptional from start to finish.",
      catName: "Bella"
    }
  ]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-5 w-5 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-ragdoll-gray-300'
        }`}
      />
    ))
  }

  return (
    <section className="section-padding bg-ragdoll-gray-50">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-6">What Our Families Say</h2>
          <p className="text-body max-w-2xl mx-auto">
            Don't just take our word for it. Here's what some of our ragdoll families have to say 
            about their experience with us and their beloved companions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-8 shadow-lg">
              <Quote className="h-8 w-8 text-ragdoll-blue-300 mb-4" />
              
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-ragdoll-gray-500 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-ragdoll-blue-900">{testimonial.name}</h4>
                <p className="text-sm text-ragdoll-gray-500">{testimonial.location}</p>
                <p className="text-sm text-ragdoll-blue-600 font-medium mt-1">
                  Proud parent of {testimonial.catName}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-ragdoll-gray-500 mb-4">
            Join our growing family of satisfied ragdoll parents
          </p>
          <div className="flex justify-center space-x-8 text-sm text-ragdoll-gray-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-ragdoll-blue-600">50+</div>
              <div>Happy Families</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ragdoll-blue-600">5★</div>
              <div>Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-ragdoll-blue-600">100%</div>
              <div>Health Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials 