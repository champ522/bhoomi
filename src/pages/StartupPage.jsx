import React from 'react';
import { Link } from 'react-router-dom';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/StartupPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const StartupPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const startupsCount = useCounter(55, 2000, isStatsVisible);
  const fundingCount = useCounter(50, 2000, isStatsVisible);
  const growthCount = useCounter(300, 1500, isStatsVisible);

  const startupSolutions = [
    {
      title: "MVP Development",
      description: "Rapid MVP development to validate your idea and launch quickly in the market",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Scalable Architecture",
      description: "Build systems that grow with your business, from startup to enterprise scale",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 17L9 11L13 15L21 7" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 7H21V11" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Tech Co-Founder Support",
      description: "Strategic technical guidance and hands-on development from experienced tech leaders",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="4" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M6 21V19C6 16.7909 7.79086 15 10 15H14C16.2091 15 18 16.7909 18 19V21" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      title: "Product Strategy",
      description: "Market research, competitor analysis, and product roadmap planning",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M9 9L15 15M15 9L9 15" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      title: "Investor-Ready Product",
      description: "Build impressive demos and prototypes to secure funding and partnerships",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Cost-Effective Solutions",
      description: "Smart technology choices and agile development to maximize your runway",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M12 6V12L16 14" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    }
  ];

  const useCases = [
    {
      title: "SaaS Platform Development",
      description: "Build multi-tenant SaaS applications with subscription management, user analytics, and seamless integrations.",
      content: "We help startups build robust SaaS platforms from the ground up. Our solutions include multi-tenant architecture, subscription billing integration with Stripe/PayPal, user onboarding flows, analytics dashboards, API development, and third-party integrations. We use modern frameworks like React, Node.js, and cloud infrastructure to ensure scalability and performance from day one.",
      features: ["Multi-tenant Architecture", "Subscription Billing", "Analytics Dashboard", "API Integration"],
      image: "/images/sliderimg1.png"
    },
    {
      title: "Mobile-First Products",
      description: "Native and cross-platform mobile apps that provide exceptional user experience on iOS and Android.",
      content: "We develop mobile-first products that reach your audience wherever they are. Whether you need native iOS/Android apps or cross-platform solutions with React Native/Flutter, we deliver high-performance applications with intuitive UX, offline capabilities, push notifications, in-app purchases, and social authentication. Perfect for startups targeting mobile-first markets.",
      features: ["Cross-Platform", "Offline Mode", "Push Notifications", "Social Login"],
      image: "/images/sliderimg2.png"
    },
    {
      title: "Marketplace Platforms",
      description: "Two-sided marketplace solutions with payments, ratings, search, and real-time matching.",
      content: "We build comprehensive marketplace platforms that connect buyers and sellers, service providers and customers, or any two-sided market. Our solutions include advanced search and filtering, secure payment processing, rating and review systems, real-time messaging, geolocation features, and admin dashboards for platform management. Scalable architecture handles growth from launch to thousands of transactions.",
      features: ["Payment Integration", "Rating System", "Real-time Chat", "Admin Dashboard"],
      image: "/images/appdev.png"
    },
    {
      title: "AI-Powered Solutions",
      description: "Integrate machine learning, natural language processing, and AI to create intelligent products.",
      content: "We help startups leverage AI and machine learning to build competitive advantages. Our team implements recommendation engines, chatbots, predictive analytics, computer vision, natural language processing, and automated decision-making systems. Whether you're in e-commerce, healthcare, finance, or education, we'll help you integrate AI capabilities that delight users and drive growth.",
      features: ["ML Models", "Chatbots", "Recommendations", "Predictive Analytics"],
      image: "/images/softdev.png"
    }
  ];

  return (
    <>
      {/* Startup Hero Banner */}
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
              <span>Startups</span>
            </div>
            <h1 className={styles.heroTitle}>
              Build Your Startup's
              <span className={styles.heroHighlight}> Technology Foundation</span>
            </h1>
            <p className={styles.heroSubtitle}>
              From idea to launch, we help startups build scalable MVPs, secure funding with 
              impressive products, and scale efficiently with the right technology stack.
            </p>
          </div>
          <div className={styles.heroAnimation}>
            <img src="/images/startbnr.png" alt="Startup Solutions" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection} ref={statsRef}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{startupsCount}+</h3>
              <p className={styles.statLabel}>Startups Launched</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>₹{fundingCount}M+</h3>
              <p className={styles.statLabel}>Funding Raised</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{growthCount}%</h3>
              <p className={styles.statLabel}>Average Growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className={styles.solutionsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Startup Solutions We Offer</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive technology services tailored for startups at every stage
            </p>
          </div>
          <div className={styles.solutionsGrid}>
            {startupSolutions.map((solution, index) => (
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
            <h2 className={styles.sectionTitle}>What We Build for Startups</h2>
            <p className={styles.sectionSubtitle}>
              From MVPs to scalable platforms, we've helped startups across various industries
            </p>
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

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Why Startups Choose Us</h2>
            <p className={styles.sectionSubtitle}>
              We understand the unique challenges and constraints of building a startup
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <div className={styles.benefitIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.benefitTitle}>Fast Time-to-Market</h3>
              </div>
              <p className={styles.benefitDescription}>
                Launch your MVP in 4-8 weeks with our agile development process
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <div className={styles.benefitIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="9" stroke="#0e8d38" strokeWidth="2"/>
                    <path d="M9 12L11 14L15 10" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.benefitTitle}>Proven Expertise</h3>
              </div>
              <p className={styles.benefitDescription}>
                100+ successful startup launches across various industries
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <div className={styles.benefitIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V6M12 18V22M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M2 12H6M18 12H22M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h3 className={styles.benefitTitle}>Flexible Engagement</h3>
              </div>
              <p className={styles.benefitDescription}>
                Fixed-price, time & material, or dedicated team models
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <div className={styles.benefitIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="11" width="18" height="11" rx="2" stroke="#0e8d38" strokeWidth="2"/>
                    <path d="M7 11V7C7 4.79086 8.79086 3 11 3H13C15.2091 3 17 4.79086 17 7V11" stroke="#0e8d38" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className={styles.benefitTitle}>IP Protection</h3>
              </div>
              <p className={styles.benefitDescription}>
                Complete code ownership with NDA and IP assignment agreements
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <div className={styles.benefitIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 17L9 11L13 15L21 7" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 7H21V11" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className={styles.benefitTitle}>Post-Launch Support</h3>
              </div>
              <p className={styles.benefitDescription}>
                Ongoing maintenance, feature updates, and scaling assistance
              </p>
            </div>
            <div className={styles.benefitCard}>
              <div className={styles.benefitHeader}>
                <div className={styles.benefitIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="7" r="4" stroke="#0e8d38" strokeWidth="2"/>
                  <path d="M3 21V19C3 16.7909 4.79086 15 7 15H11C13.2091 15 15 16.7909 15 19V21" stroke="#0e8d38" strokeWidth="2"/>
                  <path d="M16 11L18 13L22 9" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className={styles.benefitTitle}>Startup Mentorship</h3>
            </div>
            <p className={styles.benefitDescription}>
              Strategic guidance on technology decisions and product strategy
            </p>
          </div>
        </div>
      </div>
    </section>

      {/* Technology Stack Section */}
      <TechnologyStack />

      {/* Work Process Section */}
      <WorkProcess />

      {/* Testimonials Section */}
      <Testimonials />
      <CallToAction />

      {/* CTA Section */}
      {/* <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Ready to Build Your Startup?</h2>
            <p className={styles.ctaSubtitle}>
              Let's discuss your idea and create a roadmap to bring it to life
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/schedule-meeting" className={styles.primaryBtn}>
                Schedule a Free Consultation
              </Link>
              <Link to="/contact" className={styles.secondaryBtn}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default StartupPage;
