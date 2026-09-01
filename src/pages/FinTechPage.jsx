import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/FinTechPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const FinTechPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const transactionsCount = useCounter(10, 2000, isStatsVisible);
  const securityCount = useCounter(99, 2000, isStatsVisible);
  const uptimeCount = useCounter(99, 1500, isStatsVisible);

  const fintechSolutions = [
    {
      title: "Digital Banking",
      description: "Neo-banking platforms, mobile banking apps, and online account management solutions",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M2 10H22" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M6 15H10" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      title: "Payment Processing",
      description: "Secure payment gateways, digital wallets, and real-time transaction processing",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M12 6V12L16 14" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      title: "Blockchain Solutions",
      description: "Cryptocurrency platforms, DeFi applications, and smart contract development",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="3" width="7" height="7" rx="1" stroke="#0e8d38" strokeWidth="2"/>
        <rect x="14" y="3" width="7" height="7" rx="1" stroke="#0e8d38" strokeWidth="2"/>
        <rect x="3" y="14" width="7" height="7" rx="1" stroke="#0e8d38" strokeWidth="2"/>
        <rect x="14" y="14" width="7" height="7" rx="1" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M10 6.5H14M10 17.5H14M6.5 10V14M17.5 10V14" stroke="#0e8d38" strokeWidth="2"/>
      </svg>
    },
    {
      title: "Lending Platforms",
      description: "P2P lending, loan origination systems, and credit scoring solutions",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 3L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M9 22V12H15V22" stroke="#0e8d38" strokeWidth="2"/>
      </svg>
    },
    {
      title: "InsurTech",
      description: "Digital insurance platforms, claims management, and policy administration systems",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12L11 14L15 10" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "WealthTech",
      description: "Robo-advisors, portfolio management, and investment tracking applications",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 17L9 11L13 15L21 7" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 7H21V11" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }
  ];


  return (
    <>
      <SEOHead
        title="Bhoomi Techzone - Best FinTech Software Development in Noida"
        description="At Bhoomi techzone Transform your financial technology with Best FinTech Software Development in Noida. Partner with us for innovative solutions that drive success in FinTech."
        keywords="Best FinTech Software Development, FinTech Software Development in Noida"
        canonical="https://bhoomitechzone.in/fintech"
      />
      {/* FinTech Hero Banner */}
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
              <span>FinTech</span>
            </div>
            <h1 className={styles.heroTitle}>
              Best
              <span className={styles.heroHighlight}> FinTech Software </span>
              Development in Noida
            </h1>
            <p className={styles.heroSubtitle}>
              Build secure and scalable platforms with the Best FinTech Software Development tailored for modern financial businesses.
            </p>
          </div>
          <div className={styles.heroAnimation}>
            <img src="/images/finbg.png" alt="FinTech Solutions" width="1200" height="400" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection} ref={statsRef}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{transactionsCount}M+</h3>
              <p className={styles.statLabel}>Daily Transactions</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{securityCount}.9%</h3>
              <p className={styles.statLabel}>Security Rating</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{uptimeCount}.9%</h3>
              <p className={styles.statLabel}>System Uptime</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>24/7</h3>
              <p className={styles.statLabel}>Support Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* About FinTech Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <span className={styles.sectionLabel}>Our Expertise</span>
              <h2 className={styles.sectionTitle}>
                Leading <span className={styles.highlight}>FinTech Development</span> Company
              </h2>
              <p className={styles.paragraph}>
                At Bhoomi Techzone, we assist companies innovate in the rapidly expanding financial environment by offering the <strong style={{ color: 'black' }}>best FinTech software development</strong> <Link to="/services">services</Link>. Digital banking, payment solutions, blockchain, lending platforms, and cutting-edge financial <Link to="/technology">technologies</Link> are among our areas of competence.
              </p>
              <p className={styles.paragraph}>
                We are aware of the intricacies of the financial industry, including scalability, real-time data processing, security, and compliance. Building safe, scalable, and user-friendly solutions with bank-grade security, flawless performance, and a solid architecture that can effectively handle millions of transactions is the main goal of our <strong style={{ color: 'black' }}>Best FinTech Software Development in Noida</strong>.
              </p>
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>PCI-DSS & SOC 2 Compliant</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>End-to-End Encryption</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Real-Time Processing</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Scalable Architecture</span>
                </div>
              </div>
            </div>
            <div className={styles.aboutImage}>
              <lottie-player
                src="https://lottie.host/a1f77917-4010-462e-aca0-7e51a8799779/j4gbdnvFOE.json"
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
              Comprehensive <span className={styles.highlight}>FinTech Solutions</span>
            </h2>
            <p className={styles.sectionDescription}>
              From digital banking to blockchain, we deliver innovative financial technology solutions
            </p>
          </div>
          <div className={styles.solutionsGrid}>
            {fintechSolutions.map((solution, index) => (
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
              Real-World <span className={styles.highlight}>FinTech Applications</span>
            </h2>
          </div>
          
          {/* Use Case 1: Mobile Banking Apps */}
          <div className={styles.useCaseRow}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Mobile Banking Apps</h3>
              <p className={styles.useCaseDescription}>Full-featured mobile banking with account management, transfers, bill payments, and investment tracking.</p>
              <p className={styles.useCaseDetails}>We develop feature-rich mobile banking apps with account management, fund transfers, bill payments, and investment tracking. Our solutions include real-time transaction updates, mobile deposits, budgeting tools, and portfolio insights. With biometric authentication and encryption, our <strong style={{ color: 'black' }}>Best FinTech Software Development</strong> ensures top-level security and smooth user experience.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Instant Transfers
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Bill Payments
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Investment Tracking
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Biometric Security
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/sliderimg1.png" alt="Best FinTech Software Development" width="350" height="250" loading="lazy" />
            </div>
          </div>

          {/* Use Case 2: Payment Gateway Integration */}
          <div className={`${styles.useCaseRow} ${styles.reverse}`}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Payment Gateway Integration</h3>
              <p className={styles.useCaseDescription}>Seamless payment processing with multiple payment methods, fraud detection, and PCI compliance.</p>
              <p className={styles.useCaseDetails}>Our payment gateway solutions enable secure and seamless transactions using multiple payment methods like cards, UPI, wallets, and net banking. We implement fraud detection, real-time monitoring, and ensure PCI-DSS compliance. Our <strong style={{ color: 'black' }}>Best FinTech Software Development in Noida</strong> supports multi-currency transactions, recurring payments, and detailed analytics for better financial insights.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Multi-Payment Methods
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Fraud Detection
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  PCI-DSS Compliant
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Real-time Analytics
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/sliderimg2.png" alt="Best FinTech Software Development in Noida" width="350" height="250" loading="lazy" />
            </div>
          </div>

          {/* Use Case 3: Trading Platforms */}
          <div className={styles.useCaseRow}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Trading Platforms</h3>
              <p className={styles.useCaseDescription}>Real-time stock trading, cryptocurrency exchanges, and market analysis tools with high performance.</p>
              <p className={styles.useCaseDetails}>We create high-performance trading platforms with sophisticated charting tools, quick execution, and real-time data processing. With features like algorithmic trading, portfolio management, and risk analysis, our platforms facilitate the trading of stocks, cryptocurrencies, FX, and derivatives. Our scalable solutions manage large trade volumes without experiencing performance problems.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Real-time Trading
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Advanced Charts
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Algorithmic Trading
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Multi-Asset Support
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/appdev.png" alt="Trading Platforms" width="350" height="250" loading="lazy" />
            </div>
          </div>

          {/* Use Case 4: RegTech Solutions */}
          <div className={`${styles.useCaseRow} ${styles.reverse}`}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>RegTech Solutions</h3>
              <p className={styles.useCaseDescription}>Compliance automation, KYC/AML verification, transaction monitoring, and regulatory reporting.</p>
              <p className={styles.useCaseDetails}>Our RegTech solutions automate compliance processes including KYC/AML verification, transaction monitoring, and regulatory reporting. Using AI-powered systems, we reduce manual effort, minimize errors, and ensure compliance with global standards like GDPR and financial regulations. Our <strong style={{ color: 'black' }}>Best FinTech Software Development</strong> helps businesses stay secure and compliant.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  KYC/AML Automation
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Transaction Monitoring
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Risk Assessment
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Regulatory Reporting
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/dmarketing.png" alt="RegTech Solutions" width="350" height="250" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className={styles.securitySection}>
        <div className={styles.container}>
          <div className={styles.securityGrid}>
            <div className={styles.securityContent}>
              <span className={styles.sectionLabel}>Security First</span>
              <h2 className={styles.sectionTitle}>
                <span className={styles.highlight}>Bank-Grade Security</span> & Compliance
              </h2>
              <p className={styles.paragraph}>
                Our <strong style={{ color: 'black' }}>Best FinTech Software Development in Noida</strong> is built on security. To guarantee total data privacy and compliance, we adhere to stringent industry standards including PCI-DSS, GDPR, and SOC 2.
              </p>
              <div className={styles.securityFeatures}>
                <div className={styles.securityFeature}>
                  <h4>✅ Data Encryption</h4>
                  <p>End-to-end encryption for all sensitive data in transit and at rest</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Fraud Detection</h4>
                  <p>AI-powered fraud detection and prevention systems</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ KYC/AML Compliance</h4>
                  <p>Automated identity verification and anti-money laundering checks</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Audit Trails</h4>
                  <p>Complete transaction logging and compliance reporting</p>
                </div>
              </div>
            </div>
            <div className={styles.securityImage}>
              <lottie-player
                src="https://lottie.host/9b6ebf1e-650c-46e7-975c-b10998bd6674/xo36t3WHed.json"
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
            <h2 className={styles.ctaTitle}>Ready to Transform Finance?</h2>
            <p className={styles.ctaDescription}>
              Let's build innovative fintech solutions that drive growth and enhance customer experiences
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

export default FinTechPage;
