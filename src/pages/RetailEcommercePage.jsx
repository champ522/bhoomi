import React from 'react';
import { Link } from 'react-router-dom';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/RetailEcommercePage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
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

  const useCases = [
    {
      title: "Fashion E-commerce Store",
      description: "Complete online fashion retail platform with virtual try-on and personalized recommendations.",
      content: "We build fashion e-commerce solutions with advanced features like size guides, virtual try-on using AR, outfit recommendations, wishlist management, and easy returns. Our platforms include inventory sync across channels, seasonal collection management, flash sales, and social commerce integration. Features include advanced filtering by size, color, brand, price range, and customer reviews with photo uploads.",
      features: ["Virtual Try-On", "Size Guide", "Easy Returns", "Social Commerce"],
      image: "/images/retail1.png"
    },
    {
      title: "Grocery Delivery Platform",
      description: "On-demand grocery delivery with real-time inventory, scheduled deliveries, and subscription options.",
      content: "Our grocery platforms enable customers to shop from multiple stores, schedule deliveries, create shopping lists, and set up recurring orders. Features include real-time stock updates, substitute suggestions, smart recommendations based on purchase history, multiple delivery slots, contactless delivery options, and integration with local stores. Admin panel includes delivery route optimization and driver management.",
      features: ["Real-time Stock", "Scheduled Delivery", "Subscriptions", "Multi-store"],
      image: "/images/retail2.png"
    },
    {
      title: "Multi-vendor Marketplace",
      description: "Scalable marketplace connecting multiple sellers with buyers, handling commissions and settlements.",
      content: "We develop comprehensive multi-vendor marketplaces with seller onboarding, product listing approval workflows, commission management, automated payouts, and dispute resolution. Our solutions include seller dashboards for inventory and sales management, buyer protection policies, rating and review systems, promotional tools for sellers, and admin controls for platform management. Supports multiple business models including commission, subscription, and listing fees.",
      features: ["Vendor Management", "Commission System", "Seller Dashboard", "Dispute Resolution"],
      image: "/images/retail3.png"
    },
    {
      title: "Omnichannel Retail Solution",
      description: "Unified platform connecting online and offline stores with seamless customer experience.",
      content: "Our omnichannel solutions provide unified inventory management across physical stores and online channels, click-and-collect options, ship-from-store capabilities, and unified customer profiles. Features include in-store digital assistance, endless aisle (order unavailable items from other locations), centralized promotions management, cross-channel analytics, and loyalty programs that work both online and offline. POS integration enables seamless checkout across all touchpoints.",
      features: ["Unified Inventory", "Click & Collect", "Ship from Store", "Unified Loyalty"],
      image: "/images/retail4.png"
    }
  ];

  return (
    <>
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
              Retail with
              <span className={styles.heroHighlight}> e-Commerce Solutions</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Build powerful e-commerce platforms, omnichannel retail solutions, and innovative 
              shopping experiences that drive sales and enhance customer satisfaction.
            </p>
          </div>
          <div className={styles.heroAnimation}>
            <img src="/images/ecombnr.png" alt="Retail & E-commerce Solutions" />
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
                Leading <span className={styles.highlight}>Retail Tech</span> Solutions Provider
              </h2>
              <p className={styles.paragraph}>
                At Bhoomi Techzone, we specialize in building cutting-edge e-commerce platforms and retail 
                technology solutions that transform how businesses sell online and in-store. Our expertise 
                spans custom e-commerce development, multi-vendor marketplaces, POS systems, and omnichannel solutions.
              </p>
              <p className={styles.paragraph}>
                We understand the unique challenges of retail including inventory management, payment processing, 
                customer experience, and multi-channel integration. Our retail solutions are built with scalable 
                architecture, secure payment gateways, mobile-first design, and analytics that help you understand 
                customer behavior and optimize sales.
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
                src="https://lottie.host/006a6429-e481-4f01-aeb1-44730b7c4e5d/fY2IDpm4dS.json"
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
                <span className={styles.highlight}>Powerful Features</span> for Modern Retails & E-commerce
              </h2>
              <p className={styles.paragraph}>
                Our retail solutions come with advanced features designed to increase sales, improve customer 
                experience, and streamline operations across all sales channels.
              </p>
              <div className={styles.securityFeatures}>
                <div className={styles.securityFeature}>
                  <h4>✅ Smart Recommendations</h4>
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
                src="https://lottie.host/28215764-d8ad-4e59-b0da-7e089088ea59/0R9dy82KRc.json"
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
    </>
  );
};

export default RetailEcommercePage;
