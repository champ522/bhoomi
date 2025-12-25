import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/HealthcarePage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const HealthcarePage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const patientsCount = useCounter(100, 2000, isStatsVisible);
  const accuracyCount = useCounter(99, 2000, isStatsVisible);
  const uptimeCount = useCounter(99, 1500, isStatsVisible);

  const healthcareSolutions = [
    {
      title: "HMS Solutions",
      description: "Complete HMS with patient records, appointment scheduling, and billing management",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 3L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M9 22V12H15V22" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M12 9H12.01" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      title: "Telemedicine Platforms",
      description: "Virtual consultation systems with video conferencing and remote patient monitoring",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M8 21H16" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 17V21" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="10" r="3" stroke="#0e8d38" strokeWidth="2"/>
      </svg>
    },
    {
      title: "Electronic Health Records",
      description: "Secure EHR systems with patient data management and interoperability features",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V8H20" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18V12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 15H15" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Medical Billing Software",
      description: "Automated billing, insurance claims processing, and revenue cycle management",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M2 10H22" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M6 15H10" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      title: "Pharmacy Management",
      description: "Digital pharmacy solutions with inventory tracking and prescription management",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 16.5C3 15 3 12.5 3 10C3 7.5 3 5 4.5 3.5C6 2 8.5 2 11 2H13C15.5 2 18 2 19.5 3.5C21 5 21 7.5 21 10C21 12.5 21 15 19.5 16.5C18 18 15.5 18 13 18H11C8.5 18 6 18 4.5 16.5Z" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M12 6V14M8 10H16" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 21H16" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      title: "Health Analytics",
      description: "AI-powered analytics for clinical insights, predictive care, and population health",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 16L12 11L16 15L21 10" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 10H21V15" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }
  ];

  const useCases = [
    {
      title: "Patient Management System",
      description: "Comprehensive patient care coordination with appointment scheduling and medical history tracking.",
      content: "We develop advanced patient management systems that streamline the entire patient journey from registration to discharge. Our solutions include appointment scheduling, patient portal access, medical history management, lab results integration, prescription tracking, and insurance verification. Features include automated reminders, waitlist management, multi-location support, and seamless integration with existing hospital systems for improved patient care coordination.",
      features: ["Appointment Scheduling", "Medical Records", "Patient Portal", "Insurance Integration"],
      image: "/images/care1.png"
    },
    {
      title: "Telemedicine Solutions",
      description: "Virtual healthcare delivery with secure video consultations and remote patient monitoring.",
      content: "Our telemedicine platforms enable healthcare providers to deliver quality care remotely. Features include HD video consultations, secure messaging, digital prescriptions, remote vital monitoring, and integration with wearable devices. We implement HIPAA-compliant communication channels, virtual waiting rooms, screen sharing for medical images, and digital payment processing. Our solutions support both scheduled and on-demand consultations with multi-specialty support.",
      features: ["Video Consultations", "Remote Monitoring", "Digital Prescriptions", "HIPAA Compliant"],
      image: "/images/care2.png"
    },
    {
      title: "Laboratory Information Systems",
      description: "Complete lab workflow automation with sample tracking, test management, and result reporting.",
      content: "We build comprehensive laboratory information systems that automate lab operations from sample collection to result delivery. Our solutions include barcode-based sample tracking, test ordering and scheduling, quality control management, instrument integration, automated result validation, and digital reporting. Features include reference range management, critical value alerts, statistics reporting, and seamless integration with EHR systems for efficient diagnostic workflows.",
      features: ["Sample Tracking", "Automated Testing", "Result Management", "Instrument Integration"],
      image: "/images/care3.png"
    },
    {
      title: "Healthcare Mobile Apps",
      description: "Patient-centric mobile applications for appointment booking, medication reminders, and health tracking.",
      content: "Our healthcare mobile apps empower patients to take control of their health journey. Features include appointment booking and rescheduling, medication reminders with refill alerts, symptom checkers, health tracking dashboards, lab result access, secure messaging with providers, and telehealth integration. We implement personalized health recommendations, fitness tracking, diet planning, and emergency care locators with offline access capabilities.",
      features: ["Health Tracking", "Medication Reminders", "Appointment Booking", "Telehealth Access"],
      image: "/images/care4.png"
    }
  ];

  return (
    <>
      {/* Healthcare Hero Banner */}
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
              <span>Healthcare</span>
            </div>
            <h1 className={styles.heroTitle}>
              Better Healthcare with
              <span className={styles.heroHighlight}> Smart Technology</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Build secure, compliant, and innovative healthcare technology solutions that improve 
              patient outcomes and streamline clinical workflows for modern healthcare delivery.
            </p>
          </div>
          <div className={styles.heroAnimation}>
            <img src="/images/healthbnr.png" alt="Healthcare Solutions" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={styles.statsSection} ref={statsRef}>
        <div className={styles.container}>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{patientsCount}K+</h3>
              <p className={styles.statLabel}>Patients Served</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{accuracyCount}.9%</h3>
              <p className={styles.statLabel}>Data Accuracy</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>{uptimeCount}.9%</h3>
              <p className={styles.statLabel}>System Uptime</p>
            </div>
            <div className={styles.statCard}>
              <h3 className={styles.statNumber}>24/7</h3>
              <p className={styles.statLabel}>Patient Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Healthcare Section */}
      <section className={styles.aboutSection}>
        <div className={styles.container}>
          <div className={styles.aboutGrid}>
            <div className={styles.aboutContent}>
              <span className={styles.sectionLabel}>Our Expertise</span>
              <h2 className={styles.sectionTitle}>
                Leading <span className={styles.highlight}>Healthcare Tech</span> Expert
              </h2>
              <p className={styles.paragraph}>
                At Bhoomi Techzone, we specialize in developing cutting-edge healthcare technology solutions 
                that transform patient care and streamline medical operations. Our expertise spans hospital 
                management systems, telemedicine platforms, electronic health records, and healthcare analytics.
              </p>
              <p className={styles.paragraph}>
                We understand the unique challenges of the healthcare industry including regulatory compliance, 
                data security, interoperability, and patient privacy. Our healthcare solutions are built with 
                HIPAA compliance, advanced security protocols, and user-friendly interfaces that enhance clinical 
                workflows and improve patient outcomes.
              </p>
              <div className={styles.featuresList}>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>HIPAA Compliant Systems</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Secure Data Encryption</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>HL7/FHIR Integration</span>
                </div>
                <div className={styles.featureItem}>
                  <span className={styles.checkIcon}>✓</span>
                  <span>Cloud-Based Architecture</span>
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
              Comprehensive <span className={styles.highlight}>Healthcare Solutions</span>
            </h2>
            <p className={styles.sectionDescription}>
              From hospital management to telemedicine, we deliver innovative healthcare technology solutions
            </p>
          </div>
          <div className={styles.solutionsGrid}>
            {healthcareSolutions.map((solution, index) => (
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
              Real-World <span className={styles.highlight}>Healthcare Applications</span>
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
                <span className={styles.highlight}>Powerful Features</span> for Modern Healthcare
              </h2>
              <p className={styles.paragraph}>
                Our healthcare solutions come packed with advanced features designed to improve patient care, 
                streamline operations, and ensure compliance with healthcare regulations and data security standards.
              </p>
              <div className={styles.securityFeatures}>
                <div className={styles.securityFeature}>
                  <h4>✅ Patient Management</h4>
                  <p>Complete patient records, appointments, and care coordination</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Telemedicine Ready</h4>
                  <p>Built-in video consultations and remote patient monitoring</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ HIPAA Compliant</h4>
                  <p>Secure data encryption and role-based access controls</p>
                </div>
                <div className={styles.securityFeature}>
                  <h4>✅ Smart Analytics</h4>
                  <p>Real-time insights and predictive healthcare analytics</p>
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
            <h2 className={styles.ctaTitle}>Ready to Transform Healthcare?</h2>
            <p className={styles.ctaDescription}>
              Let's build innovative healthcare solutions that improve patient care and streamline operations
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

export default HealthcarePage;
