import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/RetailEcommercePage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const RetailEcommercePage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const ordersCount = useCounter(500, 2000, isStatsVisible);
  const conversionCount = useCounter(35, 2000, isStatsVisible);
  const uptimeCount = useCounter(99, 1500, isStatsVisible);

  const retailSolutions = [
    {
      title: "E-commerce Platforms",
      description: "Custom online stores with product catalogs, shopping carts, and secure checkout systems",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 2L1 8L5 21H19L23 8L15 2H9Z" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1 8H23" stroke="#0e8d38" strokeWidth="2"/>
      </svg>
    },
    {
      title: "Multi-vendor Marketplaces",
      description: "Build platforms connecting multiple sellers with buyers, with commission management",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M9 22V12H15V22" stroke="#0e8d38" strokeWidth="2"/>
      </svg>
    },
    {
      title: "Inventory Management",
      description: "Real-time stock tracking, automated reordering, and warehouse management systems",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 16V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V16C3 17.1046 3.89543 18 5 18H19C20.1046 18 21 17.1046 21 16Z" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M3 10H21" stroke="#0e8d38" strokeWidth="2"/>
      </svg>
    },
    {
      title: "Mobile Commerce Apps",
      description: "Native shopping apps with push notifications, mobile payments, and AR features",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M12 18H12.01" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      title: "Payment Gateway Integration",
      description: "Secure multi-payment options including cards, UPI, wallets, and buy-now-pay-later",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M12 6V12L16 14" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      title: "Analytics & Reporting",
      description: "Sales insights, customer behavior analysis, and predictive analytics dashboards",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 16L12 11L16 15L21 10" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }
  ];

  return (
    <>
      <SEOHead
        title="Bhoomi Techzone-Best Retail software development solutions In Noida"
        description="Retail software development solutions In Noida by Bhoomi Techzone help businesses build scalable e-commerce platforms, streamline operations, and deliver seamless omnichannel shopping experiences."
        keywords="Retail software development solutions, Retail software development solutions In Noida"
        canonical="https://bhoomitechzone.in/retail-ecommerce"
      />
      {/* Retail Hero Banner */}
      <section className={styles.heroSection}>
        <ParticleBanner />
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.breadcrumb}>
              <Link to="/">Home</Link>
              <span>/</span>
              <span>Industries</span>
              <span>/</span>
              <span>Retail & E-commerce</span>
            </div>
            <h1 className={styles.heroTitle}>
              Retail 
              <span className={styles.heroHighlight}> Software Development </span>
              Solutions in Noida
            </h1>
            <p className={styles.heroSubtitle}>
              Build powerful e-commerce platforms, omnichannel retail solutions, and innovative 
              shopping experiences that drive sales and enhance customer satisfaction.
            </p>
          </div>
          <div className={styles.heroAnimation}>
            <img src="/images/ecombnr.png" alt="Retail & E-commerce Solutions" width="1200" height="400" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection} ref={statsRef}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{ordersCount}K+</h3>
              <p className={styles.statLabel}>Daily Orders Processed</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{conversionCount}%</h3>
              <p className={styles.statLabel}>Average Conversion Rate</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{uptimeCount}.9%</h3>
              <p className={styles.statLabel}>Platform Uptime</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>24/7</h3>
              <p className={styles.statLabel}>Customer Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Retail Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <span className={styles.sectionLabel}>Our Expertise</span>
              <h2 className={styles.sectionTitle}>
                Leading <span className={styles.highlight}>Retail Technology</span> Solutions Provider
              </h2>
              <p className={styles.paragraph}>
                At Bhoomi Techzone, we specialize in delivering advanced <strong style={{ color: 'black' }}>Retail software development solutions in Noida</strong> that help businesses transform how they sell online and in-store. Our expertise includes custom <Link to="/ecommerce-platform">eCommerce platforms</Link>, multi-vendor marketplaces, POS systems, and omnichannel retail solutions designed to improve efficiency and drive growth.
              </p>
              <p className={styles.paragraph}>
                We understand the unique challenges of the retail industry such as <Link to="/inventory-management">inventory management</Link>, secure payment processing, customer experience, and multi-channel integration. Our <strong style={{ color: 'black' }}>Retail software development solutions</strong> are built with scalable architecture, mobile-first design, secure payment gateways, and real-time analytics to help you understand customer behavior, optimize operations, and increase sales effectively.
              </p>
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Scalable E-com Platforms</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Secure Payment Integration</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Real-time Inventory Sync</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Mobile-First Shopping</span>
                </div>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <lottie-player
                src="https://lottie.host/a9a55275-11bd-402c-b13d-a236c6fe79d0/q50RtATs0A.json"
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
              Comprehensive <span className={styles.highlight}>Retail & E-commerce Solutions</span>
            </h2>
            <p className={styles.sectionDescription}>
              From online stores to omnichannel retail, we deliver technology solutions that drive growth
            </p>
          </div>
          <div className={styles.solutionsGrid}>
            {retailSolutions.map((solution, index) => (
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
              Real-World <span className={styles.highlight}>Retail Applications</span>
            </h2>
          </div>
          
          {/* Use Case 1: Fashion E-commerce Store */}
          <div className={styles.useCaseRow}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Fashion E-commerce Store</h3>
              <p className={styles.useCaseDescription}>Complete online fashion retail platform with virtual try-on and personalized recommendations.</p>
              <p className={styles.useCaseDetails}>Our <strong style={{ color: 'black' }}>Retail software development solutions</strong> include building feature-rich fashion eCommerce platforms with AR-based virtual try-on, personalized recommendations, and seamless shopping experiences. These <strong style={{ color: 'black' }}>Retail software development solutions in Noida</strong> offer inventory sync, advanced filters, wishlist features, and social commerce integration to enhance engagement and increase conversions across multiple sales channels.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Virtual Try-On
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Size Guide
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Easy Returns
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Social Commerce
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/retail1.png" alt="Retail software development solutions" width="350" height="250" loading="lazy" />
            </div>
          </div>

          {/* Use Case 2: Grocery Delivery Platform */}
          <div className={`${styles.useCaseRow} ${styles.reverse}`}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Grocery Delivery Platform</h3>
              <p className={styles.useCaseDescription}>On-demand grocery delivery with real-time inventory, scheduled deliveries, and subscription options.</p>
              <p className={styles.useCaseDetails}>We develop on-demand grocery platforms using <strong style={{ color: 'black' }}>Retail software development solutions</strong>  that enable real-time inventory tracking, scheduled deliveries, and subscription-based ordering. Our <strong style={{ color: 'black' }}>Retail software development solutions in Noida</strong>  ensure smooth operations with multi-store integration, smart recommendations, route optimization, and contactless delivery features, helping retailers improve efficiency and customer satisfaction.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Real-time Stock
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Scheduled Delivery
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Subscriptions
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Multi-store
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/retail2.png" alt="Retail software development solutions" width="350" height="250" loading="lazy" />
            </div>
          </div>

          {/* Use Case 3: Multi-vendor Marketplace */}
          <div className={styles.useCaseRow}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Multi-vendor Marketplace</h3>
              <p className={styles.useCaseDescription}>Scalable marketplace connecting multiple sellers with buyers, handling commissions and settlements.</p>
              <p className={styles.useCaseDetails}>Our <strong style={{ color: 'black' }}>Retail software development solutions</strong> help create scalable multi-vendor marketplaces with vendor onboarding, commission systems, and secure payment processing. These <strong style={{ color: 'black' }}>Retail software development solutions in Noida</strong> include seller dashboards, dispute management, automated payouts, and advanced analytics, enabling businesses to efficiently manage multiple vendors while delivering a seamless buying experience.</p>
              <div className={styles.useCaseFeatures}>
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
                  Commission System
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Seller Dashboard
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Dispute Resolution
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/retail3.png" alt="Multi-vendor Marketplace" width="350" height="250" loading="lazy" />
            </div>
          </div>

          {/* Use Case 4: Omnichannel Retail Solution */}
          <div className={`${styles.useCaseRow} ${styles.reverse}`}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Omnichannel Retail Solution</h3>
              <p className={styles.useCaseDescription}>Unified platform connecting online and offline stores with seamless customer experience.</p>
              <p className={styles.useCaseDetails}>We build unified retail systems through <strong style={{ color: 'black' }}>Retail software development solutions</strong> that connect online and offline sales channels seamlessly. Our <strong style={{ color: 'black' }}>Retail software development solutions in Noida</strong> offer real-time inventory sync, click-and-collect, POS integration, and personalized customer experiences, helping businesses deliver consistent shopping journeys and maximize revenue across all platforms.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Unified Inventory
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Click & Collect
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Ship from Store
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Unified Loyalty
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/retail4.png" alt="Retail software development solutions in Noida" width="350" height="250" loading="lazy" />
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
                <span className={styles.highlight}>Powerful Features</span> for Modern Retails & E-commerce
              </h2>
              <p className={styles.paragraph}>
                Our cutting-edge features for Retail software development solutions In Noida are intended to boost sales, improve customer satisfaction, and optimize operations throughout all retail channels.
              </p>
              <div className={styles.securityFeatures}>
                <div className={styles.securityFeature}>
                  <h4>✅ Smart Insights</h4>
                  <p>AI-powered product recommendations and personalized shopping</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Omnichannel Ready</h4>
                  <p>Seamless shopping experience across web, mobile, and stores</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Secure Payments</h4>
                  <p>Multiple payment gateways with PCI-DSS compliance</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Real-time Analytics</h4>
                  <p>Insights on sales, inventory, and customer behavior</p>
                </div>
              </div>
            </div>
            <div className={styles.securityImage}>
              <lottie-player
                src="https://lottie.host/7d93d25f-ec7e-44d5-a185-ea9afe0eb813/kPLBMhY2aG.json"
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
            <h2 className={styles.ctaTitle}>Ready to Transform Your Retail Business?</h2>
            <p className={styles.ctaDescription}>
              Let's build innovative e-commerce solutions that drive sales and enhance customer experience
            </p>
            <Link to="/contact" className={styles.ctaButton}>
              Start Now
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <CallToAction />
    </>
  );
};

export default RetailEcommercePage;
