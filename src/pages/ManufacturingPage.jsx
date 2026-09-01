import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/ManufacturingPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ManufacturingPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const projectsCount = useCounter(150, 2000, isStatsVisible);
  const clientsCount = useCounter(100, 2000, isStatsVisible);
  const satisfactionCount = useCounter(99, 1500, isStatsVisible);

  const manufacturingSolutions = [
    {
      title: "Production Planning Systems",
      description: "Advanced production scheduling and resource allocation for optimized manufacturing workflows",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11H15M9 15H15M17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H12.5858C12.851 3 13.1054 3.10536 13.2929 3.29289L18.7071 8.70711C18.8946 8.89464 19 9.149 19 9.41421V19C19 20.1046 18.1046 21 17 21Z" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Inventory Management",
      description: "Real-time inventory tracking with automated reordering and warehouse optimization",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 8H19M5 8C3.89543 8 3 7.10457 3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6C21 7.10457 20.1046 8 19 8M5 8L5 18C5 19.1046 5.89543 20 7 20H17C18.1046 20 19 19.1046 19 18V8" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M10 12H14" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      title: "Quality Control Systems",
      description: "Automated quality assurance with real-time defect detection and compliance tracking",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain visibility with vendor management and logistics optimization",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 16V6C13 4.89543 13.8954 4 15 4H19C20.1046 4 21 4.89543 21 6V16M13 16H3L3 10C3 8.89543 3.89543 8 5 8L13 8M13 16H21M21 16V18C21 19.1046 20.1046 20 19 20H5C3.89543 20 3 19.1046 3 18V16" stroke="#0e8d38" strokeWidth="2"/>
        <circle cx="7" cy="16" r="2" stroke="#0e8d38" strokeWidth="2"/>
        <circle cx="17" cy="16" r="2" stroke="#0e8d38" strokeWidth="2"/>
      </svg>
    },
    {
      title: "Equipment Monitoring",
      description: "IoT-enabled machine monitoring with predictive maintenance and downtime analytics",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.75 17L9 20L8 21H16L15 20L14.25 17M3 13H21M5 17H19C20.1046 17 21 16.1046 21 15V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V15C3 16.1046 3.89543 17 5 17Z" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "MES Integration",
      description: "Manufacturing Execution Systems for seamless shop floor control and data collection",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 6V4M12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10M12 6C13.1046 6 14 6.89543 14 8C14 9.10457 13.1046 10 12 10M6 18C6 16.3431 7.34315 15 9 15H15C16.6569 15 18 16.3431 18 18M12 10V15M9 4H15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    }
  ];


  return (
    <>
      <SEOHead
        title="Manufacturing Software Development services In Noida"
        description="Increase productivity with Manufacturing Software Development services in Noida. Obtain real-time, ERP-integrated, smart industrial solutions for expansion."
        keywords="Manufacturing Software Development services, Manufacturing Software Development services in Noida"
        canonical="https://bhoomitechzone.in/manufacturing"
      />
      {/* Manufacturing Hero Banner */}
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
              <span>Manufacturing</span>
            </div>
            <h1 className={styles.heroTitle}>
              Manufacturing
              <span className={styles.heroHighlight}> Software Development </span>
              Services
            </h1>
            <p className={styles.heroSubtitle}>
              Our Manufacturing Software Development <Link to="/services">services</Link> in Noida deliver scalable, automated, and data-driven solutions.
            </p>
          </div>
          <div className={styles.heroAnimation}>
            <img src="/images/manubnr.png" alt="Manufacturing Solutions" width="1200" height="400" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection} ref={statsRef}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{projectsCount}+</h3>
              <p className={styles.statLabel}>Projects Delivered</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{clientsCount}+</h3>
              <p className={styles.statLabel}>Manufacturing Clients</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{satisfactionCount}%</h3>
              <p className={styles.statLabel}>Quality Assurance</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>24/7</h3>
              <p className={styles.statLabel}>System Uptime</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Manufacturing Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <span className={styles.sectionLabel}>Our Expertise</span>
              <h2 className={styles.sectionTitle}>
                Expert <span className={styles.highlight}>Manufacturing Technology </span> Solutions
              </h2>
              <p className={styles.paragraph}>
                At Bhoomi Techzone, we offer cutting-edge <strong style={{ color: 'black' }}>manufacturing software development services</strong> that use intelligent, scalable, and effective digital technologies to revolutionise industrial processes. We have experience with supply chain optimisation tools, production management systems, smart factory solutions, and quality control platforms.
              </p>
              <p className={styles.paragraph}>
                We understand challenges like production efficiency, quality control, <Link to="/inventory-management">inventory management</Link>, and equipment maintenance. Our <strong style={{ color: 'black' }}>Manufacturing Software Development services in Noida</strong> focus on delivering real-time insights, seamless integrations, and intelligent automation to help businesses achieve operational excellence and long-term growth.
              </p>
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>IoT Integration</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Real-time Analytics</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Predictive Maintenance</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>ERP Integration</span>
                </div>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_kyu7xb1v.json"
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
              Comprehensive <span className={styles.highlight}>Manufacturing Solutions</span>
            </h2>
            <p className={styles.sectionDescription}>
              From production planning to quality control, we deliver innovative manufacturing software solutions
            </p>
          </div>
          <div className={styles.solutionsGrid}>
            {manufacturingSolutions.map((solution, index) => (
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
              Real-World <span className={styles.highlight}>Manufacturing Applications</span>
            </h2>
          </div>
          
          {/* Use Case 1: Smart Factory Solutions */}
          <div className={styles.useCaseRow}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Smart Factory Solutions</h3>
              <p className={styles.useCaseDescription}>Industry 4.0 manufacturing systems with IoT, AI, and automation integration.</p>
              <p className={styles.useCaseDetails}>We deliver <strong style={{ color: 'black' }}>manufacturing software development services</strong> to build smart factory systems powered by IoT, AI, and automation. Our <strong style={{ color: 'black' }}>Manufacturing Software Development services in Noida</strong>  include real-time monitoring, predictive maintenance, digital twin technology, and automated quality control to improve efficiency, reduce downtime, and optimize production processes across connected manufacturing environments.</p>
              <div className={styles.useCaseFeatures}>
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
                  Predictive Analytics
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Digital Twins
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Real-time Monitoring
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/manu1.png" alt="manufacturing software development services" width="350" height="250" loading="lazy" />
            </div>
          </div>

          {/* Use Case 2: Production Management Systems */}
          <div className={`${styles.useCaseRow} ${styles.reverse}`}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Production Management Systems</h3>
              <p className={styles.useCaseDescription}>Comprehensive production planning, scheduling, and execution management platforms.</p>
              <p className={styles.useCaseDetails}>Our <strong style={{ color: 'black' }}>manufacturing software development services</strong>  include advanced production management systems with scheduling, capacity planning, and MRP solutions. With <strong style={{ color: 'black' }}>Manufacturing Software Development services in Noida</strong>, we enable real-time tracking, KPI dashboards, and seamless ERP integration, helping manufacturers streamline operations, reduce bottlenecks, and improve overall productivity and workflow efficiency.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Production Scheduling
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  MRP
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Capacity Planning
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  KPI Dashboards
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/manu2.png" alt="manufacturing software development services in Noida" width="350" height="250" loading="lazy" />
            </div>
          </div>

          {/* Use Case 3: Quality Management Systems */}
          <div className={styles.useCaseRow}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Quality Management Systems</h3>
              <p className={styles.useCaseDescription}>Automated quality control with inspection workflows and compliance management.</p>
              <p className={styles.useCaseDetails}>We build quality control platforms through <strong style={{ color: 'black' }}>manufacturing software development services</strong> that ensure compliance and product excellence. Our <strong style={{ color: 'black' }}>Manufacturing Software Development services in Noida</strong> include SPC analysis, CAPA management, automated inspections, and traceability features, helping businesses maintain high-quality standards and meet regulatory requirements with efficient and reliable processes.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  SPC Analysis
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  CAPA Management
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Compliance Tracking
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Digital Inspection
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/manu3.png" alt="Manufacturing Software Development services in Noida" width="350" height="250" loading="lazy" />
            </div>
          </div>

          {/* Use Case 4: Supply Chain Optimization */}
          <div className={`${styles.useCaseRow} ${styles.reverse}`}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Supply Chain Optimization</h3>
              <p className={styles.useCaseDescription}>End-to-end supply chain visibility with demand forecasting and logistics management.</p>
              <p className={styles.useCaseDetails}>Our <strong style={{ color: 'black' }}>manufacturing software development services</strong> include end-to-end supply chain solutions with demand forecasting, vendor management, and logistics tracking. With <strong style={{ color: 'black' }}>Manufacturing Software Development services in Noida</strong>, we provide real-time visibility, inventory optimization, and automated workflows to improve coordination, reduce costs, and ensure smooth material flow across the supply chain.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Demand Forecasting
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Vendor Management
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Warehouse Control
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Logistics Tracking
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/manu4.png" alt="Manufacturing Software Development services" width="350" height="250" loading="lazy" />
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
                <span className={styles.highlight}>Powerful Features</span> for Manufacturing Excellence
              </h2>
              <p className={styles.paragraph}>
                Our <strong style={{ color: 'black' }}>manufacturing software development services</strong> come with advanced features designed to improve efficiency, quality, and operational performance.
              </p>
              <div className={styles.securityFeatures}>
                <div className={styles.securityFeature}>
                  <h4>✅ Real-time Monitoring</h4>
                  <p>Live production tracking with instant alerts and performance metrics</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Predictive Analytics</h4>
                  <p>AI-powered forecasting for maintenance and production planning</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Quality Control</h4>
                  <p>Automated inspection and compliance tracking systems</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Integration Ready</h4>
                  <p>Seamless connection with ERP, MES, and IoT devices</p>
                </div>
              </div>
            </div>
            <div className={styles.securityImage}>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_w51pcehl.json"
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
            <h2 className={styles.ctaTitle}>Ready to Transform Manufacturing?</h2>
            <p className={styles.ctaDescription}>
              Let's build intelligent manufacturing solutions that drive efficiency and innovation
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

export default ManufacturingPage;
