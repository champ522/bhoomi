import { useState } from 'react'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import Wave from './components/Wave'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Features from './components/Features'
import WhyChooseBhoomiTechzone from './components/WhyChooseBhoomiTechzone'
import StatsCounter from './components/StatsCounter'
import WorkProcess from './components/WorkProcess'
import OurProjects from './components/OurProjects'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import './index.css'

function App() {
  
  return (
    <>
      <Header />
      <HeroBanner />
      <Wave />
      <AboutUs />
      <Services />
      <Features />
      <WhyChooseBhoomiTechzone />
      <StatsCounter />
      <WorkProcess />
      <OurProjects />
      <Pricing />
      <Testimonials />
      <CallToAction />
    </>
  )
}

export default App
