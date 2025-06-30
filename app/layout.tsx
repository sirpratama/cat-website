import React from 'react'
import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })

export const metadata = {
  title: 'Bianca Azurri Ragdolls - Premium Ragdoll Cat Breeder',
  description: 'Professional ragdoll cat breeder offering beautiful, healthy, and well-socialized ragdoll kittens. Discover the perfect gentle companion for your family.',
  keywords: 'ragdoll cats, ragdoll kittens, cat breeder, ragdoll breeder, kittens for sale',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
} 