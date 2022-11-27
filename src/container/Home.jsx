import React from 'react'
import Brand from '../components/Brand'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import AboutUs from '../components/AboutUs'
import Features from '../components/Features'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brand />
      <AboutUs />
      <Features />
      <Footer />
    </div>
  )
}

export default Home