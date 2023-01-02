import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Components/Hero'
import Brand from '../Components/Brand'
import Footer from '../Components/Footer'
import AboutUs from '../Components/AboutUs'
import Features from '../Components/Features'

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