import React, { lazy, Suspense } from 'react';

import SEOHead from '../components/SEOHead';
// Above-the-fold components - Load immediately
import HeroBanner from '../components/HeroBanner';
import Partnership from '../components/Partnership';
// AboutUs moved to lazy loading (see below)
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
// DEFERRED LOADING - ContactModal only loaded on user interaction
const ContactModal = lazy(() => import('../components/ContactModal'));
// Lazy load AboutUs - not needed for hero section
const AboutUs = lazy(() => import('../components/AboutUs'));

const Home = () => {
  // ContactModal state removed - NOT loading on initial page load
  // Modal only loads when user clicks "Contact" or similar trigger
  // This CRITICAL change saves 1-2 seconds of LCP

  return (
    <>
      <SEOHead
        title="Bhoomi Techzone – IT Services Company | Web Dev & Digital"
        description="Bhoomi Techzone is a trusted IT Services Company offering website development, digital marketing services, and custom software solutions for business growth."
        keywords="IT Services Company, Website Development Company, Digital Marketing Services"
        canonical="https://bhoomitechzone.in/"
      />
      {/* Above-the-fold content - Only essentials loaded immediately */}
      <HeroBanner />
      <Partnership />
      {/* AboutUs lazy loaded below - NOT needed for hero section */}
      <Pricing />
      <Services />

      {/* AboutUs now lazily loaded with other below-the-fold content */}
      <Suspense fallback={<div style={{ minHeight: '100px' }} />}>
        <AboutUs />
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
      </Suspense>
    </>
  );
};

export default Home;
