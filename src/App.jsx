import { useState } from 'react'
import Header from './components/Header'
import HeroBanner from './components/HeroBanner'
import Wave from './components/Wave'
import AboutUs from './components/AboutUs'
import Services from './components/Services'
import Features from './components/Features'
import WorkProcess from './components/WorkProcess'
import OurProjects from './components/OurProjects'
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
      <WorkProcess />
      <OurProjects />
    </>
  )
}

export default App
