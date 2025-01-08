"use client"

import Navbar from './navbar/page'
import HeroSection from './herosection/page'
import Footer from './footer/page'

export default function Home() {
  return (
    <div className="font-sans bg-gray-50">
      <Navbar />
      <HeroSection />
      <Footer />
    </div>
  )
}

