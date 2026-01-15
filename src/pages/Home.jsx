import React, { useState, useEffect } from 'react';
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
import InstagramReelsSection from '../components/InstagramReelsSection';
import Partnership from '../components/Partnership';
import IdeasIntoTechnology from '../components/IdeasIntoTechnology';
import ContactModal from '../components/ContactModal';
import ClientReviews from '../components/ClientReviews';

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Show modal after 3 seconds
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 3000);

    // Cleanup timer if component unmounts
    return () => clearTimeout(timer);
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <HeroBanner />
      {/* <Wave /> */}
      <Partnership />
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
      <ClientReviews />
      <Blog />
      <InstagramReelsSection />
      <IdeasIntoTechnology />
      <CallToAction />
      <Certifications />
      
      {/* Contact Modal */}
      <ContactModal 
        isOpen={showModal} 
        onClose={handleCloseModal} 
      />
    </>
  );
};

export default Home;
