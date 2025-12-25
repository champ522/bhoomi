import React from 'react';
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

  const useCases = [
    {
      title: "Mobile Banking Apps",
      description: "Full-featured mobile banking with account management, transfers, bill payments, and investment tracking.",
      content: "We develop comprehensive mobile banking solutions that provide users with seamless access to their financial accounts. Our apps include features like real-time transaction tracking, instant fund transfers, bill payments, mobile check deposits, budgeting tools, and investment portfolio management. With biometric authentication and end-to-end encryption, we ensure maximum security while delivering an intuitive user experience.",
      features: ["Instant Transfers", "Bill Payments", "Investment Tracking", "Biometric Security"],
      image: "/images/sliderimg1.png"
    },
    {
      title: "Payment Gateway Integration",
      description: "Seamless payment processing with multiple payment methods, fraud detection, and PCI compliance.",
      content: "Our payment gateway solutions enable businesses to accept payments securely from multiple sources including credit cards, debit cards, UPI, digital wallets, and net banking. We implement advanced fraud detection algorithms, real-time transaction monitoring, and ensure full PCI-DSS compliance. Our gateways support multiple currencies, recurring payments, and provide detailed analytics for transaction insights.",
      features: ["Multi-Payment Methods", "Fraud Detection", "PCI-DSS Compliant", "Real-time Analytics"],
      image: "/images/sliderimg2.png"
    },
    {
      title: "Trading Platforms",
      description: "Real-time stock trading, cryptocurrency exchanges, and market analysis tools with high performance.",
      content: "We build high-performance trading platforms that handle real-time market data, execute trades in milliseconds, and provide advanced charting tools. Our solutions support stock trading, cryptocurrency exchanges, forex trading, and derivatives. Features include algorithmic trading, margin trading, stop-loss orders, portfolio analysis, and integration with major exchanges. Built with scalable architecture to handle peak trading volumes.",
      features: ["Real-time Trading", "Advanced Charts", "Algorithmic Trading", "Multi-Asset Support"],
      image: "/images/appdev.png"
    },
    {
      title: "RegTech Solutions",
      description: "Compliance automation, KYC/AML verification, transaction monitoring, and regulatory reporting.",
      content: "Our RegTech solutions help financial institutions automate compliance processes and meet regulatory requirements efficiently. We implement AI-powered KYC/AML verification, automated transaction monitoring for suspicious activities, risk assessment tools, and automated regulatory reporting. Our solutions reduce compliance costs, minimize human errors, and ensure adherence to global financial regulations including GDPR, MiFID II, and local banking laws.",
      features: ["KYC/AML Automation", "Transaction Monitoring", "Risk Assessment", "Regulatory Reporting"],
      image: "/images/dmarketing.png"
    }
  ];

  return (
    <>
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
              Transform Finance with
              <span className={styles.heroHighlight}> Innovative Technology</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Build secure, scalable, and compliant fintech solutions that revolutionize financial services 
              and create exceptional digital experiences for your customers.
            </p>
          </div>
          <div className={styles.heroAnimation}>
            <img src="/images/finbg.png" alt="FinTech Solutions" />
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
                Leading <span className={styles.highlight}>FinTech Dev</span> Company
              </h2>
              <p className={styles.paragraph}>
                At Bhoomi Techzone, we specialize in developing cutting-edge financial technology solutions 
                that empower businesses to innovate in the rapidly evolving financial services landscape. Our 
                expertise spans digital banking, payment processing, blockchain, lending platforms, and more.
              </p>
              <p className={styles.paragraph}>
                We understand the unique challenges of the financial industry including regulatory compliance, 
                security requirements, real-time processing, and scalability demands. Our fintech solutions are 
                built with bank-grade security, seamless user experiences, and robust architectures that handle 
                millions of transactions reliably.
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
                Security and compliance are at the core of everything we build. Our fintech solutions adhere 
                to the highest industry standards including PCI-DSS, GDPR, SOC 2, and regional financial regulations.
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
    </>
  );
};

export default FinTechPage;
