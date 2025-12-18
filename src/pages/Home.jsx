import React from 'react';
import HeroBanner from '../components/HeroBanner';
import Wave from '../components/Wave';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Features from '../components/Features';
import WhyChooseBhoomiTechzone from '../components/WhyChooseBhoomiTechzone';
import StatsCounter from '../components/StatsCounter';
import WorkProcess from '../components/WorkProcess';
import OurProjects from '../components/OurProjects';
import TechnologyStack from '../components/TechnologyStack';
import Pricing from '../components/Pricing';
import Testimonials from '../components/Testimonials';
import Blog from '../components/Blog';
import CallToAction from '../components/CallToAction';
import Certifications from '../components/Certifications';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Wave />
      <AboutUs />
      <Services />
      <Features />
      <WhyChooseBhoomiTechzone />
      <StatsCounter />
      <WorkProcess />
      <OurProjects />
      <TechnologyStack />
      <Pricing />
      <Testimonials />
      <Blog />
      <CallToAction />
      <Certifications />
    </>
  );
};

export default Home;
