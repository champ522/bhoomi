import React from 'react';
import SEOHead from '../components/SEOHead';
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

  return (
    <>
      <SEOHead
        title="Software Development for Startups | MVP & SaaS Solutions"
        description="Get software development for startups with scalable MVPs, SaaS platforms, mobile apps, and AI tools. We deliver digital solutions for startups to launch and grow fast."
        keywords="Software development for startups, digital solutions for startups"
        canonical="https://bhoomitechzone.in/startups"
      />
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
              Software 
              <span className={styles.heroHighlight}> Development </span>
              for Startups
            </h1>
            <p className={styles.heroSubtitle}>
              Accelerate growth with expert <strong style={{ color: 'black' }}>Software development for startups</strong> designed for speed, scalability, and innovation. Our <strong style={{ color: 'black' }}>digital solutions for startups</strong> help you launch faster, attract investors, and scale efficiently. 
            </p>
          </div>
          <div className={styles.heroAnimation}>
            <img src="/images/startbnr.png" alt="Startup Solutions" width="1200" height="400" />
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
              Comprehensive <strong style={{ color: 'black' }}>Software development for startups</strong> designed to support every stage of your journey. Our <strong style={{ color: 'black' }}>digital solutions for startups</strong> help you build, launch, and scale with the right <Link to="/technology">technology</Link> and strategy.
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
              Powerful, scalable products built through expert <strong style={{ color: 'black' }}>Software development for startups</strong> and <strong style={{ color: 'black' }}>digital solutions for startups</strong> to launch, grow, and succeed faster.
            </p>
          </div>
          
          {/* Use Case 1: SaaS Platform Development */}
          <div className={styles.useCaseRow}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>SaaS Platform Development</h3>
              <p className={styles.useCaseDescription}>Build multi-tenant SaaS applications with subscription management, user analytics, and seamless integrations.</p>
              <p className={styles.useCaseDetails}>We offer <strong style={{ color: 'black' }}>Software development for startups</strong> to build scalable SaaS platforms with multi-tenant architecture, subscription billing, and analytics dashboards. Our <strong style={{ color: 'black' }}>digital solutions for startups</strong> include API integrations, secure payment systems, cloud infrastructure, user management, and performance optimization to ensure flexibility, reliability, and long-term scalability for growing businesses from day one.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Multi-tenant Architecture
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Subscription Billing
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Analytics Dashboard
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  API Integration
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/sliderimg1.png" alt="Software development for startups" width="350" height="250" loading="lazy" />
            </div>
          </div>

          {/* Use Case 2: Mobile-First Products */}
          <div className={`${styles.useCaseRow} ${styles.reverse}`}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Mobile-First Products</h3>
              <p className={styles.useCaseDescription}>Native and cross-platform <Link to="/mobile-app-development">mobile apps</Link> that provide exceptional user experience on iOS and Android.</p>
              <p className={styles.useCaseDetails}>Our <strong style={{ color: 'black' }}>Software development for startups</strong>  focuses on building mobile-first applications for iOS and Android using native and cross-platform technologies. We deliver intuitive UX, offline functionality, push notifications, and secure authentication. These <strong style={{ color: 'black' }}>digital solutions for startups</strong>  also include fast performance, seamless updates, and user engagement features to help you reach a wider audience and maximize growth.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Cross-Platform
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Offline Mode
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Push Notifications
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Social Login
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/sliderimg2.png" alt="digital solutions for startups" width="350" height="250" loading="lazy" />
            </div>
          </div>

          {/* Use Case 3: Marketplace Platforms */}
          <div className={styles.useCaseRow}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Marketplace Platforms</h3>
              <p className={styles.useCaseDescription}>Two-sided marketplace solutions with payments, ratings, search, and real-time matching.</p>
              <p className={styles.useCaseDetails}>We develop scalable marketplace platforms through  <strong style={{ color: 'black' }}>Software development for startups</strong> , connecting buyers and sellers with advanced features like smart search filters, secure payments, ratings, and real-time chat. Our <strong style={{ color: 'black' }}>digital solutions for startups</strong> ensure smooth transactions, admin control, analytics dashboards, and platform scalability to handle increasing users and business expansion efficiently.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Payment Integration
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Rating System
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Real-time Chat
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Admin Dashboard
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/appdev.png" alt="Software development for startups" width="350" height="250" loading="lazy" />
            </div>
          </div>

          {/* Use Case 4: AI-Powered Solutions */}
          <div className={`${styles.useCaseRow} ${styles.reverse}`}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>AI-Powered Solutions</h3>
              <p className={styles.useCaseDescription}>Integrate machine learning, natural language processing, and AI to create intelligent products.</p>
              <p className={styles.useCaseDetails}>Our <strong style={{ color: 'black' }}>Software development for startups</strong>  includes AI-driven solutions such as chatbots, recommendation engines, predictive analytics, and automation tools. With our <strong style={{ color: 'black' }}>digital solutions for startups</strong>, we help you build intelligent systems that personalize user experiences, automate processes, improve decision-making, and create innovative products that drive engagement, efficiency, and long-term business growth.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  ML Models
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Chatbots
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Recommendations
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Predictive Analytics
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/softdev.png" alt="AI-Powered Solutions" width="350" height="250" loading="lazy" />
            </div>
          </div>
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
