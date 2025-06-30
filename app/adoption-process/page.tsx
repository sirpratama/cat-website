import React from 'react'
import Link from 'next/link'
import { CheckCircle, Heart, Shield, FileText, Home, Calendar, Users, Award } from 'lucide-react'

export default function AdoptionProcessPage() {
  const steps = [
    {
      number: 1,
      title: "Initial Contact",
      description: "Reach out to us via phone, email, or our contact form to express your interest.",
      details: [
        "Tell us about your family and living situation",
        "Discuss your experience with cats",
        "Share what you're looking for in a ragdoll",
        "Ask any questions you might have"
      ]
    },
    {
      number: 2,
      title: "Application & Screening",
      description: "Complete our adoption application and participate in a brief screening conversation.",
      details: [
        "Fill out our comprehensive application form",
        "Provide references (veterinarian if you've had pets)",
        "Phone or video call discussion",
        "Home environment assessment"
      ]
    },
    {
      number: 3,
      title: "Meet & Match",
      description: "Visit our cattery to meet available kittens and find your perfect match.",
      details: [
        "Schedule an appointment to visit",
        "Meet available kittens and cats",
        "Observe temperaments and personalities",
        "Ask questions about specific cats"
      ]
    },
    {
      number: 4,
      title: "Reservation & Contract",
      description: "Reserve your chosen kitten with a deposit and sign our adoption contract.",
      details: [
        "Place a $300 non-refundable deposit",
        "Sign adoption contract and health guarantee",
        "Receive kitten information packet",
        "Set up payment schedule for remainder"
      ]
    },
    {
      number: 5,
      title: "Preparation Period",
      description: "Prepare your home while your kitten grows and receives final health care.",
      details: [
        "Receive regular updates and photos",
        "Prepare your home with supplies",
        "Schedule final veterinary check",
        "Plan for pickup or delivery"
      ]
    },
    {
      number: 6,
      title: "Going Home",
      description: "Take your new family member home with all necessary documentation and support.",
      details: [
        "Final payment and paperwork",
        "Health certificate and vaccination records",
        "Kitten care package and guidance",
        "Ongoing support contact information"
      ]
    }
  ]

  const requirements = [
    {
      icon: Home,
      title: "Indoor Only",
      description: "Ragdolls must be kept as indoor-only cats for their safety and health."
    },
    {
      icon: Users,
      title: "Family Commitment",
      description: "All family members must be on board with the decision to adopt a ragdoll."
    },
    {
      icon: Shield,
      title: "Veterinary Care",
      description: "Commitment to regular veterinary care and following our health guidelines."
    },
    {
      icon: Heart,
      title: "Spay/Neuter Agreement",
      description: "Pet-quality cats must be spayed/neutered by 6 months of age unless breeding rights are purchased."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-ragdoll-blue-600 text-white py-16">
        <div className="container-max text-center">
          <h1 className="heading-1 text-white mb-6">Adoption Process</h1>
          <p className="text-xl text-ragdoll-blue-100 max-w-2xl mx-auto">
            We want to ensure every ragdoll finds the perfect forever home. Our adoption process 
            is designed to match the right cat with the right family for a lifetime of happiness.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="heading-2 text-center mb-16">Our 6-Step Process</h2>
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={step.number} className="flex flex-col lg:flex-row gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-ragdoll-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{step.number}</span>
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="heading-3 mb-3">{step.title}</h3>
                  <p className="text-body mb-4">{step.description}</p>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-ragdoll-gray-500">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="section-padding bg-ragdoll-gray-50">
        <div className="container-max">
          <h2 className="heading-2 text-center mb-16">Adoption Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {requirements.map((req, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <req.icon className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
                <h3 className="heading-3 mb-3">{req.title}</h3>
                <p className="text-ragdoll-gray-500">{req.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">What's Included</h2>
              <p className="text-body mb-6">
                When you adopt a ragdoll from Bianca Azurri Ragdolls, you're not just getting a cat - 
                you're getting peace of mind and ongoing support.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-ragdoll-blue-900">Health Guarantee</h4>
                    <p className="text-ragdoll-gray-500">2-year genetic health guarantee covering hereditary conditions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-ragdoll-blue-900">Vaccination Records</h4>
                    <p className="text-ragdoll-gray-500">Complete vaccination history and health certificate</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-ragdoll-blue-900">Microchip</h4>
                    <p className="text-ragdoll-gray-500">Pre-registered microchip for permanent identification</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-ragdoll-blue-900">Care Package</h4>
                    <p className="text-ragdoll-gray-500">Food samples, toys, blanket with familiar scents</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-ragdoll-blue-900">Lifetime Support</h4>
                    <p className="text-ragdoll-gray-500">Ongoing guidance for health, behavior, and care questions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-ragdoll-blue-900">Registration Papers</h4>
                    <p className="text-ragdoll-gray-500">TICA registration (breeding rights separate)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-ragdoll-blue-100 rounded-2xl p-8">
                <img
                  src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                  alt="Happy Ragdoll Family"
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-ragdoll-gray-50">
        <div className="container-max">
          <h2 className="heading-2 text-center mb-16">Investment & Pricing</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="heading-3 mb-4">Pet Quality</h3>
              <div className="text-3xl font-bold text-ragdoll-blue-600 mb-4">$1,500 - $1,700</div>
              <ul className="space-y-2 text-ragdoll-gray-500 mb-6">
                <li>• Spay/neuter required</li>
                <li>• Perfect family companions</li>
                <li>• Full health guarantee</li>
                <li>• TICA registration</li>
                <li>• All inclusions listed above</li>
              </ul>
              <p className="text-sm text-ragdoll-gray-400">
                *Price varies by color and lineage
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-ragdoll-blue-600">
              <div className="flex justify-between items-start mb-4">
                <h3 className="heading-3">Breeding Rights</h3>
                <Award className="h-8 w-8 text-ragdoll-blue-600" />
              </div>
              <div className="text-3xl font-bold text-ragdoll-blue-600 mb-4">$2,500 - $3,500</div>
              <ul className="space-y-2 text-ragdoll-gray-500 mb-6">
                <li>• Show/breeding quality</li>
                <li>• Extended health guarantee</li>
                <li>• Breeding contract</li>
                <li>• Mentorship included</li>
                <li>• Premium bloodlines</li>
              </ul>
              <p className="text-sm text-ragdoll-gray-400">
                *Subject to approval and contract
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="heading-3 mb-4">Payment Options</h3>
              <div className="space-y-4 text-ragdoll-gray-500">
                <div>
                  <h4 className="font-semibold text-ragdoll-blue-900">Deposit</h4>
                  <p>$300 to reserve your kitten</p>
                </div>
                <div>
                  <h4 className="font-semibold text-ragdoll-blue-900">Payment Methods</h4>
                  <p>Cash, check, PayPal, or bank transfer</p>
                </div>
                <div>
                  <h4 className="font-semibold text-ragdoll-blue-900">Payment Schedule</h4>
                  <p>Balance due at pickup or delivery</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <h2 className="heading-2 text-center mb-16">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="heading-3 mb-2">How long is the waiting list?</h3>
                <p className="text-body">
                  Wait times vary depending on color preferences and specific requirements. 
                  We typically have 2-3 litters per year, and families may wait 3-8 months for their perfect match.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">Can I visit before adopting?</h3>
                <p className="text-body">
                  Yes! We encourage visits by appointment. This helps us get to know each other and 
                  ensures a good match between family and kitten.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What if my kitten gets sick?</h3>
                <p className="text-body">
                  All our kittens come with a comprehensive health guarantee. We also provide 
                  lifetime support for any health or behavioral questions.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="heading-3 mb-2">Do you ship kittens?</h3>
                <p className="text-body">
                  We prefer local pickups but can arrange safe ground transport for qualified families. 
                  We do not ship via airline cargo for the safety and well-being of our kittens.
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What age do kittens go home?</h3>
                <p className="text-body">
                  Kittens go to their new homes between 12-16 weeks of age, after they've received 
                  all vaccinations and have been spayed/neutered (unless breeding rights are purchased).
                </p>
              </div>

              <div>
                <h3 className="heading-3 mb-2">What if I need to return my cat?</h3>
                <p className="text-body">
                  We have a lifetime return policy. If you can no longer care for your ragdoll for any reason, 
                  we will take them back to ensure they find another loving home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-ragdoll-blue-600">
        <div className="container-max text-center">
          <h2 className="heading-2 text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-ragdoll-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step toward welcoming a beautiful ragdoll into your family. 
            Contact us today to begin the adoption process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-secondary bg-white text-ragdoll-blue-600 hover:bg-ragdoll-gray-50">
              Contact Us Today
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