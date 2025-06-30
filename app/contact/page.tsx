'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Send, Heart } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interestedCat: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // You would typically send this to a backend service
    alert('Thank you for your inquiry! We will contact you within 24 hours.')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-ragdoll-blue-600 text-white py-16">
        <div className="container-max text-center">
          <h1 className="heading-1 text-white mb-6">Contact Us</h1>
          <p className="text-xl text-ragdoll-blue-100 max-w-2xl mx-auto">
            We'd love to hear from you! Whether you have questions about our cats, want to schedule a visit, 
            or are ready to welcome a ragdoll into your family, we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-ragdoll-gray-50 rounded-xl">
              <Phone className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">Phone</h3>
              <p className="text-ragdoll-gray-500">(555) 123-4567</p>
              <p className="text-sm text-ragdoll-gray-400 mt-2">Call or text anytime</p>
            </div>

            <div className="text-center p-6 bg-ragdoll-gray-50 rounded-xl">
              <Mail className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">Email</h3>
              <p className="text-ragdoll-gray-500">info@biancaazurriragdolls.com</p>
              <p className="text-sm text-ragdoll-gray-400 mt-2">We respond within 24 hours</p>
            </div>

            <div className="text-center p-6 bg-ragdoll-gray-50 rounded-xl">
              <MapPin className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">Location</h3>
              <p className="text-ragdoll-gray-500">Beautiful Valley, CA</p>
              <p className="text-sm text-ragdoll-gray-400 mt-2">Visits by appointment</p>
            </div>

            <div className="text-center p-6 bg-ragdoll-gray-50 rounded-xl">
              <Clock className="h-12 w-12 text-ragdoll-blue-600 mx-auto mb-4" />
              <h3 className="heading-3 mb-2">Hours</h3>
              <p className="text-ragdoll-gray-500">Mon-Sat: 9AM-6PM</p>
              <p className="text-sm text-ragdoll-gray-400 mt-2">Sunday by appointment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-ragdoll-gray-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-2 mb-6">Send Us a Message</h2>
              <p className="text-body mb-8">
                Fill out the form below and we'll get back to you as soon as possible. 
                Please provide as much detail as you can about what you're looking for.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ragdoll-blue-900 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-ragdoll-gray-300 rounded-lg focus:ring-2 focus:ring-ragdoll-blue-600 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ragdoll-blue-900 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-ragdoll-gray-300 rounded-lg focus:ring-2 focus:ring-ragdoll-blue-600 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-ragdoll-blue-900 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-ragdoll-gray-300 rounded-lg focus:ring-2 focus:ring-ragdoll-blue-600 focus:border-transparent"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="interestedCat" className="block text-sm font-medium text-ragdoll-blue-900 mb-2">
                      Interested in specific cat?
                    </label>
                    <select
                      id="interestedCat"
                      name="interestedCat"
                      value={formData.interestedCat}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-ragdoll-gray-300 rounded-lg focus:ring-2 focus:ring-ragdoll-blue-600 focus:border-transparent"
                    >
                      <option value="">Select a cat</option>
                      <option value="Luna">Luna - Seal Point</option>
                      <option value="Oliver">Oliver - Blue Point</option>
                      <option value="Max">Max - Chocolate Point</option>
                      <option value="Sophie">Sophie - Lilac Point</option>
                      <option value="Charlie">Charlie - Seal Point</option>
                      <option value="future">Future litter</option>
                      <option value="general">General inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-ragdoll-blue-900 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-ragdoll-gray-300 rounded-lg focus:ring-2 focus:ring-ragdoll-blue-600 focus:border-transparent"
                    placeholder="What's this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ragdoll-blue-900 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-ragdoll-gray-300 rounded-lg focus:ring-2 focus:ring-ragdoll-blue-600 focus:border-transparent"
                    placeholder="Tell us about your family, living situation, experience with cats, and what you're looking for in a ragdoll companion..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full inline-flex items-center justify-center"
                >
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="heading-3 mb-4">Visit Our Cattery</h3>
                <p className="text-body mb-4">
                  We welcome visits by appointment! This gives us a chance to meet in person, 
                  show you around our facility, and let you meet our cats and any available kittens.
                </p>
                <ul className="space-y-2 text-ragdoll-gray-500">
                  <li>• Meet our breeding cats and available kittens</li>
                  <li>• See our clean, loving home environment</li>
                  <li>• Ask questions and get expert advice</li>
                  <li>• Discuss the adoption process</li>
                </ul>
              </div>

              <div className="bg-ragdoll-blue-50 rounded-xl p-6">
                <Heart className="h-8 w-8 text-ragdoll-blue-600 mb-4" />
                <h3 className="heading-3 mb-3">What to Expect</h3>
                <p className="text-body">
                  When you contact us, we'll discuss your family situation, experience with cats, 
                  and what you're looking for. This helps us determine if we have the perfect match 
                  for you, either now or in future litters.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="heading-3 mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Link href="/available-cats" className="block text-ragdoll-blue-600 hover:text-ragdoll-blue-800 transition-colors">
                    → View Available Cats
                  </Link>
                  <Link href="/adoption-process" className="block text-ragdoll-blue-600 hover:text-ragdoll-blue-800 transition-colors">
                    → Learn About Our Adoption Process
                  </Link>
                  <Link href="/care-guide" className="block text-ragdoll-blue-600 hover:text-ragdoll-blue-800 transition-colors">
                    → Ragdoll Care Guide
                  </Link>
                  <Link href="/breed-info" className="block text-ragdoll-blue-600 hover:text-ragdoll-blue-800 transition-colors">
                    → About Ragdoll Cats
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="section-padding bg-ragdoll-blue-600">
        <div className="container-max text-center">
          <h2 className="heading-2 text-white mb-6">Questions About Your Ragdoll?</h2>
          <p className="text-xl text-ragdoll-blue-100 mb-8 max-w-2xl mx-auto">
            Current and past families can always reach out with questions about their ragdoll's health, 
            behavior, or care. We're here to support you for life!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+15551234567" className="btn-secondary bg-white text-ragdoll-blue-600 hover:bg-ragdoll-gray-50">
              Call (555) 123-4567
            </a>
            <a href="mailto:info@biancaazurriragdolls.com" className="btn-primary bg-ragdoll-blue-700 hover:bg-ragdoll-blue-800">
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
} 