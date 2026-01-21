import React from 'react';
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

  const useCases = [
    {
      title: "Smart Factory Solutions",
      description: "Industry 4.0 manufacturing systems with IoT, AI, and automation integration.",
      content: "We develop comprehensive smart factory solutions that transform traditional manufacturing into intelligent, connected operations. Our systems integrate IoT sensors, machine learning algorithms, and automation technologies to optimize production efficiency. Features include real-time production monitoring, predictive maintenance, automated quality control, digital twin simulations, and adaptive scheduling. Built with scalable architecture to grow with your manufacturing needs.",
      features: ["IoT Integration", "Predictive Analytics", "Digital Twins", "Real-time Monitoring"],
      image: "/images/manu1.png"
    },
    {
      title: "Production Management Systems",
      description: "Comprehensive production planning, scheduling, and execution management platforms.",
      content: "Our production management solutions streamline manufacturing operations from planning to execution. Features include advanced production scheduling with constraint optimization, capacity planning, material requirements planning (MRP), work order management, and production tracking. Real-time dashboards provide visibility into production status, bottlenecks, and KPIs. Integration with ERP systems and shop floor equipment ensures seamless data flow and operational efficiency.",
      features: ["Production Scheduling", "MRP", "Capacity Planning", "KPI Dashboards"],
      image: "/images/manu2.png"
    },
    {
      title: "Quality Management Systems",
      description: "Automated quality control with inspection workflows and compliance management.",
      content: "We build specialized quality management systems that ensure product excellence and regulatory compliance. Our solutions include automated inspection workflows, statistical process control (SPC), non-conformance tracking, corrective action management (CAPA), and audit management. Features include digital checklists, image-based quality inspection, traceability, and comprehensive reporting for ISO, FDA, and other regulatory standards.",
      features: ["SPC Analysis", "CAPA Management", "Compliance Tracking", "Digital Inspection"],
      image: "/images/manu3.png"
    },
    {
      title: "Supply Chain Optimization",
      description: "End-to-end supply chain visibility with demand forecasting and logistics management.",
      content: "Our supply chain solutions provide complete visibility and control over your manufacturing supply chain. Features include demand forecasting using AI, supplier management, purchase order tracking, inventory optimization, warehouse management, and logistics coordination. Real-time tracking of materials from suppliers to production to delivery. Integration with vendor systems and automated replenishment based on production schedules and inventory levels.",
      features: ["Demand Forecasting", "Vendor Management", "Warehouse Control", "Logistics Tracking"],
      image: "/images/manu4.png"
    }
  ];

  return (
    <>
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
              Advanced Manufacturing
              <span className={styles.heroHighlight}> Software Solutions</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Transform your manufacturing operations with intelligent software solutions that drive 
              efficiency, quality, and innovation in the era of Industry 4.0.
            </p>
          </div>
          <div className={styles.heroAnimation}>
            <img src="/images/manubnr.png" alt="Manufacturing Solutions" />
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
                Expert <span className={styles.highlight}>Manufacturing Tech</span> Solutions
              </h2>
              <p className={styles.paragraph}>
                At Bhoomi Techzone, we specialize in developing cutting-edge manufacturing software solutions 
                that transform production operations. Our expertise spans smart factory systems, production 
                planning, quality management, and supply chain optimization for Industry 4.0.
              </p>
              <p className={styles.paragraph}>
                We understand the unique challenges of manufacturing including production efficiency, 
                quality control, inventory management, and equipment maintenance. Our solutions are built 
                with robust architecture, real-time data processing, and seamless integrations that help 
                manufacturing businesses achieve operational excellence and competitive advantage.
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
                src="https://lottie.host/b331077e-3eb6-481b-9885-50c5e45ac7d8/49Smam5Rrf.json"
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
                <span className={styles.highlight}>Powerful Features</span> for Manufacturing Excellence
              </h2>
              <p className={styles.paragraph}>
                Our manufacturing solutions come with advanced features designed to optimize production, 
                improve quality, and deliver operational excellence across your manufacturing operations.
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
