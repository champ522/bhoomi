import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/RealEstatePage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const RealEstatePage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const propertiesCount = useCounter(5000, 2000, isStatsVisible);
  const clientsCount = useCounter(2000, 2000, isStatsVisible);
  const satisfactionCount = useCounter(98, 1500, isStatsVisible);

  const realEstateSolutions = [
    {
      title: "Property Management Systems",
      description: "Complete property lifecycle management with tenant tracking and maintenance scheduling",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M9 22V12H15V22" stroke="#0e8d38" strokeWidth="2"/>
      </svg>
    },
    {
      title: "Real Estate Portals",
      description: "Advanced property listing platforms with search filters and virtual tour integration",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M9 3V21M15 3V21M3 9H21M3 15H21" stroke="#0e8d38" strokeWidth="2"/>
      </svg>
    },
    {
      title: "CRM for Real Estate",
      description: "Lead management, client tracking, and automated follow-ups for real estate agents",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#0e8d38" strokeWidth="2"/>
        <circle cx="9" cy="7" r="4" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#0e8d38" strokeWidth="2"/>
      </svg>
    },
    {
      title: "Virtual Property Tours",
      description: "3D virtual tours, 360° views, and AR experiences for property showcasing",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="#0e8d38" strokeWidth="2"/>
        <circle cx="12" cy="13" r="4" stroke="#0e8d38" strokeWidth="2"/>
      </svg>
    },
    {
      title: "Property Valuation Tools",
      description: "AI-powered property valuation and market analysis with predictive pricing",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 16L12 11L16 15L21 10" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Document Management",
      description: "Digital contract management, e-signatures, and secure document storage",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    }
  ];

  const useCases = [
    {
      title: "Property Listing Portals",
      description: "Feature-rich real estate portals with advanced search, filters, and property comparisons.",
      content: "We develop comprehensive property listing platforms that connect buyers, sellers, and agents seamlessly. Our portals feature advanced search with multiple filters, interactive maps, property comparison tools, saved searches, favorite listings, and instant alerts. Features include mortgage calculators, neighborhood insights, school ratings, and integration with MLS systems. Built with responsive design for optimal viewing across all devices.",
      features: ["Advanced Search", "Interactive Maps", "Mortgage Calculator", "MLS Integration"],
      image: "/images/real1.png"
    },
    {
      title: "Property Management Software",
      description: "Complete property management with tenant portals, rent collection, and maintenance tracking.",
      content: "Our property management solutions streamline operations for property managers and landlords. Features include tenant onboarding, lease management, automated rent collection, maintenance request tracking, document storage, expense tracking, and financial reporting. Tenant portals allow online payments, maintenance requests, and communication. Integration with accounting software and automated reminders for lease renewals and inspections.",
      features: ["Tenant Portal", "Rent Collection", "Maintenance Tracking", "Financial Reports"],
      image: "/images/real3.png"
    },
    {
      title: "Real Estate CRM Systems",
      description: "Powerful CRM for agents with lead management, automated follow-ups, and sales pipeline tracking.",
      content: "We build specialized CRM systems tailored for real estate professionals. Our solutions include lead capture from multiple sources, automated lead nurturing, contact management, property matching, email campaigns, task automation, and deal pipeline tracking. Features include calendar integration, mobile apps for on-the-go access, analytics dashboards, and integration with listing platforms for seamless workflow management.",
      features: ["Lead Management", "Automated Follow-ups", "Pipeline Tracking", "Mobile Access"],
      image: "/images/real2.png"
    },
    {
      title: "Virtual Tour Platforms",
      description: "Immersive 3D tours and virtual reality experiences for remote property viewing.",
      content: "Our virtual tour solutions bring properties to life with immersive 3D walkthroughs and 360° panoramic views. Features include interactive floor plans, virtual staging, measurement tools, VR headset support, and guided tours. Buyers can explore properties remotely at their convenience. Integration with property listings and lead capture forms. Ideal for showcasing properties to remote buyers and increasing engagement rates significantly.",
      features: ["3D Walkthroughs", "360° Views", "Virtual Staging", "VR Support"],
      image: "/images/real4.png"
    }
  ];

  return (
    <>
      {/* Real Estate Hero Banner */}
      <section className={styles.heroSection}>
        <ParticleBanner />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Solutions</span>
              <span>/</span>
              <span>Real Estate</span>
            </div>
            <h1 className={styles.heroTitle}>
              Smart Real Estate
              <span className={styles.heroHighlight}> Web & Mobile App Solutions</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Build innovative real estate technology platforms that streamline property transactions, 
              enhance customer experiences, and drive business growth in the digital age.
            </p>
          </div>
          <div className={styles.heroAnimation}>
            <img src="/images/realestatebnr.png" alt="Real Estate Solutions" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection} ref={statsRef}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{propertiesCount}+</h3>
              <p className={styles.statLabel}>Properties Listed</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{clientsCount}+</h3>
              <p className={styles.statLabel}>Happy Clients</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{satisfactionCount}%</h3>
              <p className={styles.statLabel}>Client Satisfaction</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>24/7</h3>
              <p className={styles.statLabel}>Platform Access</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Real Estate Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <span className={styles.sectionLabel}>Our Expertise</span>
              <h2 className={styles.sectionTitle}>
                Expert <span className={styles.highlight}>Real Estate Tech</span> Solutions
              </h2>
              <p className={styles.paragraph}>
                At Bhoomi Techzone, we specialize in developing innovative real estate technology solutions 
                that transform property management, sales, and customer engagement. Our expertise spans property 
                portals, management systems, CRM platforms, and virtual tour technologies.
              </p>
              <p className={styles.paragraph}>
                We understand the unique challenges of the real estate industry including lead management, 
                property visualization, transaction complexity, and market competition. Our solutions are built 
                with user-friendly interfaces, powerful search capabilities, and seamless integrations that help 
                real estate businesses thrive in the digital marketplace.
              </p>
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>MLS Integration</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>3D Virtual Tours</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Advanced Analytics</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Mobile Optimized</span>
                </div>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <lottie-player
                src="https://lottie.host/9fcac0ea-606e-45b1-a60a-39e92ad96cfd/rjaWieItRe.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className={styles.solutionsSection} id="solutions">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionLabel} ${styles.sectionsol}`}>Our Solutions</span>
            <h2 className={styles.sectionTitle}>
              Comprehensive <span className={styles.highlight}>Real Estate Solutions</span>
            </h2>
            <p className={styles.sectionDescription}>
              From property portals to management systems, we deliver innovative real estate technology solutions
            </p>
          </div>
          <div className={styles.solutionsGrid}>
            {realEstateSolutions.map((solution, index) => (
              <div key={index} className={styles.solutionCard}>
                <div className={styles.solutionIcon}>{solution.icon}</div>
                <h3 className={styles.solutionTitle}>{solution.title}</h3>
                <p className={styles.solutionDescription}>{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className={styles.useCasesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionLabel} ${styles.sectionsol}`}>Use Cases</span>
            <h2 className={styles.sectionTitle}>
              Real-World <span className={styles.highlight}>Real Estate Applications</span>
            </h2>
          </div>
          
          {useCases.map((useCase, index) => (
            <div 
              key={index} 
              className={`${styles.useCaseRow} ${index % 2 === 1 ? styles.reverse : ''}`}
            >
              <div className={styles.useCaseContent}>
                <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                <p className={styles.useCaseDescription}>{useCase.description}</p>
                <p className={styles.useCaseDetails}>{useCase.content}</p>
                <div className={styles.useCaseFeatures}>
                  {useCase.features.map((feature, idx) => (
                    <span key={idx} className={styles.featureTag}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className={styles.useCaseBtn}>
                  Get Started
                </Link>
              </div>
              <div className={styles.useCaseImage}>
                <img src={useCase.image} alt={useCase.title} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Features */}
      <section className={styles.securitySection}>
        <div className={styles.container}>
          <div className={styles.securityGrid}>
            <div className={styles.securityContent}>
              <span className={styles.sectionLabel}>Key Features</span>
              <h2 className={styles.sectionTitle}>
                <span className={styles.highlight}>Powerful Features</span> for Real Estate Success
              </h2>
              <p className={styles.paragraph}>
                Our real estate solutions come with advanced features designed to accelerate sales, 
                improve property management, and deliver exceptional experiences to buyers and sellers.
              </p>
              <div className={styles.securityFeatures}>
                <div className={styles.securityFeature}>
                  <h4>✅ Smart Property Search</h4>
                  <p>Advanced filters with location-based search and map integration</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Lead Generation</h4>
                  <p>Automated lead capture and nurturing with CRM integration</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Virtual Tours</h4>
                  <p>Immersive 3D walkthroughs and 360° property views</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Analytics Dashboard</h4>
                  <p>Real-time insights on listings, leads, and market trends</p>
                </div>
              </div>
            </div>
            <div className={styles.securityImage}>
              <lottie-player
                src="https://lottie.host/7e989bb7-765b-49cc-8c1c-21e64bc81d49/zgxIfC7h9e.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </section>

      <TechnologyStack />
      <WorkProcess />

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Transform Real Estate?</h2>
            <p className={styles.ctaDescription}>
              Let's build innovative real estate solutions that accelerate sales and enhance experiences
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              Start Now
            </Link>
          </div>
        </div>
      </section>

      {/* Include other components */}
      <Testimonials />
    </>
  );
};

export default RealEstatePage;
