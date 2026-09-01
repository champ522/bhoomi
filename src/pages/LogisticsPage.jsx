import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/LogisticsPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const LogisticsPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const shipmentsCount = useCounter(5000, 2000, isStatsVisible);
  const clientsCount = useCounter(250, 2000, isStatsVisible);
  const satisfactionCount = useCounter(99, 1500, isStatsVisible);

  const logisticsSolutions = [
    {
      title: "Fleet Management Systems",
      description: "Real-time vehicle tracking, route optimization, and driver management for efficient fleet operations",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 16V6C13 4.89543 13.8954 4 15 4H19C20.1046 4 21 4.89543 21 6V16M13 16H3L3 10C3 8.89543 3.89543 8 5 8L13 8M13 16H21M21 16V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V16" stroke="#0e8d38" strokeWidth="2"/>
        <circle cx="7" cy="16" r="2" stroke="#0e8d38" strokeWidth="2"/>
        <circle cx="17" cy="16" r="2" stroke="#0e8d38" strokeWidth="2"/>
      </svg>
    },
    {
      title: "Warehouse Management",
      description: "Inventory tracking, automated picking, and warehouse optimization for streamlined operations",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M9 22V12H15V22" stroke="#0e8d38" strokeWidth="2"/>
      </svg>
    },
    {
      title: "Shipment Tracking",
      description: "End-to-end shipment visibility with real-time tracking and automated status updates",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke="#0e8d38" strokeWidth="2"/>
        <circle cx="12" cy="10" r="3" stroke="#0e8d38" strokeWidth="2"/>
      </svg>
    },
    {
      title: "Route Optimization",
      description: "AI-powered route planning for fuel efficiency, cost reduction, and faster deliveries",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 20L3 17V4L9 7M9 20L15 17M9 20V7M15 17L21 20V7L15 4M15 17V4M9 7L15 4" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Supply Chain Analytics",
      description: "Data-driven insights for demand forecasting, inventory optimization, and performance tracking",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 16L12 11L16 15L21 10" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Last Mile Delivery",
      description: "Optimized last-mile delivery solutions with proof of delivery and customer notifications",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 7H17L15 2H9L7 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z" stroke="#0e8d38" strokeWidth="2"/>
      </svg>
    }
  ];


  return (
    <>
      <SEOHead
        title="Logistics Software Development in Noida"
        description="Logistics software development in Noida for route optimization, tracking, and supply chain management. Build scalable, efficient logistics solutions today."
        keywords="logistics software development, logistics software development in Noida"
        canonical="https://bhoomitechzone.in/logistics"
      />
      {/* Logistics Hero Banner */}
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
              <span>Logistics</span>
            </div>
            <h1 className={styles.heroTitle}>
              Logistics 
              <span className={styles.heroHighlight}> Software Development </span>
              in Noida
            </h1>
            <p className={styles.heroSubtitle}>
              Transform your operations with advanced <strong style={{ color: 'black' }}>logistics software development in Noida</strong> designed to optimize routes, improve tracking, reduce costs, and enhance overall supply chain efficiency.
            </p>
          </div>
          <div className={styles.heroAnimation}>
            <img src="/images/log4.png" alt="logistics software development in Noida" width="1200" height="400" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection} ref={statsRef}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{shipmentsCount}+</h3>
              <p className={styles.statLabel}>Shipments Tracked</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{clientsCount}+</h3>
              <p className={styles.statLabel}>Logistics Partners</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{satisfactionCount}%</h3>
              <p className={styles.statLabel}>On-Time Delivery</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>24/7</h3>
              <p className={styles.statLabel}>Real-time Tracking</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Logistics Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <span className={styles.sectionLabel}>Our Expertise</span>
              <h2 className={styles.sectionTitle}>
                Expert <span className={styles.highlight}>Logistics Tech</span> Solutions
              </h2>
              <p className={styles.paragraph}>
                At Bhoomi Techzone, we specialize in delivering advanced <strong style={{ color: 'black' }}>logistics software development in Noida</strong> that transforms transportation and supply chain operations. Our <strong style={{ color: 'black' }}>logistics software development</strong> expertise includes fleet management, warehouse optimization, delivery tracking, and supply chain analytics to improve efficiency and scalability.
              </p>
              <p className={styles.paragraph}>
                We understand the unique challenges of logistics such as route optimization, real-time tracking, inventory management, and cost control. Our <strong style={{ color: 'black' }}>logistics software development in Noida</strong> is built with robust architecture, real-time data processing, and seamless integrations, helping logistics businesses achieve operational excellence and gain a strong competitive advantage.
              </p>
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>GPS Tracking</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Route Optimization</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Real-time Analytics</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Multi-carrier Support</span>
                </div>
              </div>
            </div>
            <div className={styles.aboutImage}>
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

      {/* Solutions Grid */}
      <section className={styles.solutionsSection} id="solutions">
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={`${styles.sectionLabel} ${styles.sectionsol}`}>Our Solutions</span>
            <h2 className={styles.sectionTitle}>
              Comprehensive <span className={styles.highlight}>Logistics Solutions</span>
            </h2>
            <p className={styles.sectionDescription}>
              From fleet management to last-mile delivery, we deliver innovative logistics <Link to="/technology">technology</Link> solutions
            </p>
          </div>
          <div className={styles.solutionsGrid}>
            {logisticsSolutions.map((solution, index) => (
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
              Real-World <span className={styles.highlight}>Logistics Applications</span>
            </h2>
          </div>
          
          {/* Use Case 1: Transportation Management Systems */}
          <div className={styles.useCaseRow}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Transportation Management Systems</h3>
              <p className={styles.useCaseDescription}>Comprehensive TMS for freight management, carrier selection, and cost optimization.</p>
              <p className={styles.useCaseDetails}>Our <strong style={{ color: 'black' }}>logistics software development</strong> services include advanced TMS solutions that streamline freight operations from booking to delivery. With <strong style={{ color: 'black' }}>logistics software development in Noida</strong>, we offer carrier integration, load optimization, automated dispatch, and real-time tracking, helping businesses reduce costs, improve efficiency, and manage high-volume logistics operations seamlessly.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Freight Booking
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Carrier Integration
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Load Optimization
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Real-time Tracking
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/log1.png" alt="logistics software development" width="350" height="250" loading="lazy" />
            </div>
          </div>

          {/* Use Case 2: Warehouse Management Solutions */}
          <div className={`${styles.useCaseRow} ${styles.reverse}`}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Warehouse Management Solutions</h3>
              <p className={styles.useCaseDescription}>Smart warehouse systems with automated inventory control and optimized picking workflows.</p>
              <p className={styles.useCaseDetails}>We deliver smart warehouse systems through <strong style={{ color: 'black' }}>logistics software development</strong> that automate inventory control, picking, and packing processes. Our <strong style={{ color: 'black' }}>logistics software development in Noida</strong> ensures real-time visibility, barcode/RFID tracking, and ERP integration, helping businesses optimize warehouse operations, reduce errors, and maintain accurate stock levels efficiently.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Inventory Control
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Barcode Scanning
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Pick Optimization
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Real-time Visibility
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/log2.png" alt="logistics software development in Noida" width="350" height="250" loading="lazy" />
            </div>
          </div>

          {/* Use Case 3: Delivery Management Platforms */}
          <div className={styles.useCaseRow}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Delivery Management Platforms</h3>
              <p className={styles.useCaseDescription}>End-to-end delivery orchestration with route optimization and customer engagement.</p>
              <p className={styles.useCaseDetails}>Our <strong style={{ color: 'black' }}>logistics software development</strong> solutions include delivery management platforms that optimize last-mile delivery with intelligent routing and real-time tracking. With <strong style={{ color: 'black' }}>logistics software development in Noida</strong>, businesses can manage driver apps, automate notifications, capture proof of delivery, and enhance customer experience while improving delivery speed and efficiency.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Route Planning
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Driver Apps
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Customer Tracking
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Proof of Delivery
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/log3.png" alt="logistics software development" width="350" height="250" loading="lazy" />
            </div>
          </div>

          {/* Use Case 4: Supply Chain Visibility */}
          <div className={`${styles.useCaseRow} ${styles.reverse}`}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Supply Chain Visibility</h3>
              <p className={styles.useCaseDescription}>Complete supply chain transparency with real-time tracking and predictive analytics.</p>
              <p className={styles.useCaseDetails}>We build end-to-end visibility systems using <strong style={{ color: 'black' }}>logistics software development</strong> that provide real-time tracking and predictive insights across your supply chain. Our <strong style={{ color: 'black' }}>logistics software development in Noida</strong> includes multi-carrier integration, AI-based ETA predictions, IoT monitoring, and analytics dashboards to improve decision-making and operational transparency.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Multi-carrier Tracking
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Predictive ETA
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  IoT Integration
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Analytics Dashboard
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/logisticbnr.png" alt="Supply Chain Visibility" width="350" height="250" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className={styles.securitySection}>
        <div className={styles.container}>
          <div className={styles.securityGrid}>
            <div className={styles.securityContent}>
              <span className={styles.sectionLabel}>Key Features</span>
              <h2 className={styles.sectionTitle}>
                <span className={styles.highlight}>Powerful Features</span> for Logistics Excellence
              </h2>
              <p className={styles.paragraph}>
                Our logistics solutions come with advanced features designed to optimize operations, 
                reduce costs, and deliver exceptional service across your supply chain network.
              </p>
              <div className={styles.securityFeatures}>
                <div className={styles.securityFeature}>
                  <h4>✅ Real-time Tracking</h4>
                  <p>Live GPS tracking with geofencing and automated alerts</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Route Optimization</h4>
                  <p>AI-powered routing for fuel efficiency and faster deliveries</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Automate Warehouse</h4>
                  <p>Automated picking, packing, and inventory management</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Multi-carrier Integrate</h4>
                  <p>Seamless integration with major carriers and 3PL providers</p>
                </div>
              </div>
            </div>
            <div className={styles.securityImage}>
              <lottie-player
                src="https://assets10.lottiefiles.com/packages/lf20_x62chJ.json"
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
            <h2 className={styles.ctaTitle}>Ready to Transform Logistics?</h2>
            <p className={styles.ctaDescription}>
              Let's build intelligent logistics solutions that drive efficiency and customer satisfaction
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              Start Now
            </Link>
          </div>
        </div>
      </section>

      {/* Include other components */}
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default LogisticsPage;
