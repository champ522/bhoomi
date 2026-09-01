import React, { useState, useEffect, lazy, Suspense } from 'react';

import SEOHead from '../components/SEOHead';
// Above-the-fold components - Load immediately
import HeroBanner from '../components/HeroBanner';
import Partnership from '../components/Partnership';
import AboutUs from '../components/AboutUs';
import Pricing from '../components/Pricing'
import Services from '../components/Services';

// Below-the-fold components - Lazy load
const Features = lazy(() => import('../components/Features'));
const WhyChooseBhoomiTechzone = lazy(() => import('../components/WhyChooseBhoomiTechzone'));
const StatsCounter = lazy(() => import('../components/StatsCounter'));
const WorkProcess = lazy(() => import('../components/WorkProcess'));
const OurProjects = lazy(() => import('../components/OurProjects'));
const TechnologyStack = lazy(() => import('../components/TechnologyStack'));
// const Pricing = lazy(() => import('../components/Pricing'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const ClientReviews = lazy(() => import('../components/ClientReviews'));
const Blog = lazy(() => import('../components/Blog'));
const InstagramReelsSection = lazy(() => import('../components/InstagramReelsSection'));
const IdeasIntoTechnology = lazy(() => import('../components/IdeasIntoTechnology'));
const Certifications = lazy(() => import('../components/Certifications'));
const CallToAction = lazy(() => import('../components/CallToAction'));
const ContactModal = lazy(() => import('../components/ContactModal'));

const Home = () => {
  // const [showModal, setShowModal] = useState(false);

  // useEffect(() => {
  //   // Show modal after 3 seconds
  //   const timer = setTimeout(() => {
  //     setShowModal(true);
  //   }, 1000);

  //   // Cleanup timer if component unmounts
  //   return () => clearTimeout(timer);
  // }, []);

  // const handleCloseModal = () => {
  //   setShowModal(false);
  // };

  return (
    <>
      <SEOHead
        title="Bhoomi Techzone – IT Services Company | Web Dev & Digital"
        description="Bhoomi Techzone is a trusted IT Services Company offering website development, digital marketing services, and custom software solutions for business growth."
        keywords="IT Services Company, Website Development Company, Digital Marketing Services"
        canonical="https://bhoomitechzone.in/"
      />
      {/* Above-the-fold content - No lazy loading */}
      <HeroBanner />
      <Partnership />
      <AboutUs />
      <Pricing />
      <Services />

      {/* Below-the-fold content - Lazy loaded */}
      <Suspense fallback={<div style={{ minHeight: '100px' }} />}>
        <Features />
        <WhyChooseBhoomiTechzone />
        <StatsCounter />
        <WorkProcess />
        <OurProjects />
        <TechnologyStack />
        <Testimonials />
        <ClientReviews />
        <Blog />
        <InstagramReelsSection />
        <IdeasIntoTechnology />
        <Certifications />
        <CallToAction />

        {/* Contact Modal - DISABLED */}
        {/* {showModal && (
          <ContactModal
            isOpen={showModal}
            onClose={handleCloseModal}
          />
        )} */}
      </Suspense>
    </>
  );
};

export default Home;
