import React from 'react';
import SEOHead from '../components/SEOHead';
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
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const HealthcarePage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const patientsCount = useCounter(100, 2000, isStatsVisible);
  const accuracyCount = useCounter(99, 2000, isStatsVisible);
  const uptimeCount = useCounter(99, 1500, isStatsVisible);

  const healthcareSolutions = [
    {
      title: "Hospital Management System (HMS)",
      description: "Complete HMS with patient records, appointment scheduling, billing, and bed management",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 9L12 3L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M9 22V12H15V22" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M12 9H12.01" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      title: "Telemedicine & Virtual Care",
      description: "Video consultations, remote patient monitoring, and digital health assessments",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M8 21H16" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 17V21" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="10" r="3" stroke="#0e8d38" strokeWidth="2"/>
      </svg>
    },
    {
      title: "Electronic Health Records (EHR)",
      description: "Secure patient data management with HL7/FHIR integration and cloud storage",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V8H20" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18V12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 15H15" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    },
    {
      title: "Medical Billing & Revenue Cycle",
      description: "Automated billing, insurance claims, coding assistance, and revenue management",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M2 10H22" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M6 15H10" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      title: "Laboratory Information System (LIS)",
      description: "Lab workflow automation, sample tracking, test management, and result reporting",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6 3H18V21L12 18L6 21V3Z" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10 10H14M10 14H14" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      title: "Pharmacy Management System",
      description: "Inventory control, prescription management, drug interaction alerts, and billing",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.5 16.5C3 15 3 12.5 3 10C3 7.5 3 5 4.5 3.5C6 2 8.5 2 11 2H13C15.5 2 18 2 19.5 3.5C21 5 21 7.5 21 10C21 12.5 21 15 19.5 16.5C18 18 15.5 18 13 18H11C8.5 18 6 18 4.5 16.5Z" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M12 6V14M8 10H16" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
        <path d="M8 21H16" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      title: "Patient Mobile Apps",
      description: "Appointment booking, health tracking, medication reminders, and test results",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="2" width="14" height="20" rx="2" stroke="#0e8d38" strokeWidth="2"/>
        <path d="M12 18H12.01" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    },
    {
      title: "Healthcare Analytics & AI",
      description: "Predictive analytics, clinical decision support, and population health insights",
      icon: <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 3V21H21" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 16L12 11L16 15L21 10" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 10H21V15" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    }
  ];


  return (
    <>
      <SEOHead
        title="Healthcare Software Development Companies in Noida"
        description="Explore leading healthcare software development companies in Noida, specializing in custom solutions that improve efficiency and patient outcomes in the medical field."
        keywords="Healthcare Software Development, Healthcare software development companies"
        canonical="https://bhoomitechzone.in/healthcare"
      />
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
              Healthcare Software
              <span className={styles.heroHighlight}> Development </span>
              In Noida
            </h1>
            <p className={styles.heroSubtitle}>
              Build secure and compliant systems with expert Healthcare Software Development in Noida for modern medical needs.
            </p>
          </div>
          <div className={styles.heroAnimation}>
            <img src="/images/healthbnr.png" alt="Healthcare Solutions" width="1200" height="400" />
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
                Leading <span className={styles.highlight}>Healthcare Technology</span> Expert
              </h2>
              <p className={styles.paragraph}>
                At Bhoomi Techzone, we provide advanced <strong style={{ color: 'black' }}>Healthcare Software Development</strong> solutions that improve patient care and streamline medical operations. Our expertise includes hospital management systems, telemedicine platforms, electronic health records (EHR), and healthcare analytics systems.
              </p>
              <p className={styles.paragraph}>
                We understand the critical challenges in healthcare such as regulatory compliance, data security, interoperability, and patient privacy. As one of the reliable <strong style={{ color: 'black' }}>Healthcare software development companies</strong>, we build solutions with HIPAA compliance, strong encryption, and user-friendly interfaces that enhance clinical workflows and deliver better patient outcomes.
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
          
          {/* Use Case 1: Patient Management System */}
          <div className={styles.useCaseRow}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Patient Management System</h3>
              <p className={styles.useCaseDescription}>Comprehensive patient care coordination with appointment scheduling and medical history tracking.</p>
              <p className={styles.useCaseDetails}>From registration to discharge, we provide all-inclusive patient management systems that optimise the patient experience. Appointment scheduling, patient portals, monitoring medical histories, lab integration, medication management, and insurance verification are some of our offerings. Healthcare providers may increase patient satisfaction, decrease wait times, and improve collaboration with our <strong style={{ color: 'black' }}>Healthcare Software Development In Noida</strong>.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Appointment Scheduling
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Medical Records
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Patient Portal
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Insurance Integration
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/care1.png" alt="Healthcare Software Development" width="350" height="250" loading="lazy" />
            </div>
          </div>

          {/* Use Case 2: Telemedicine Solutions */}
          <div className={`${styles.useCaseRow} ${styles.reverse}`}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Telemedicine Solutions</h3>
              <p className={styles.useCaseDescription}>Virtual healthcare delivery with secure video consultations and remote patient monitoring.</p>
              <p className={styles.useCaseDetails}>Through secure video consultations and real-time communication, our telemedicine technologies make it possible to deliver healthcare remotely. HD video calls, digital prescriptions, wearable integration, remote patient monitoring, and secure messaging are some of the features. We guarantee HIPAA-compliant communication and flawless virtual care experiences with improved patient involvement and quicker medical response times as a reputable brand among <strong style={{ color: 'black' }}>Healthcare Software Development</strong> firms.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Video Consultations
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Remote Monitoring
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Digital Prescriptions
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  HIPAA Compliant
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/care2.png" alt="Healthcare software development companies" width="350" height="250" loading="lazy" />
            </div>
          </div>

          {/* Use Case 3: Laboratory Information Systems */}
          <div className={styles.useCaseRow}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Laboratory Information Systems</h3>
              <p className={styles.useCaseDescription}>Complete lab workflow automation with sample tracking, test management, and result reporting.</p>
              <p className={styles.useCaseDetails}>We build powerful lab management systems that automate workflows from sample collection to report delivery with high precision and reliability. Features include barcode-based tracking, automated testing processes, result validation, and instrument integration. Our Healthcare Software Development ensures accuracy, efficiency, and seamless integration with EHR systems.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Sample Tracking
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Automated Testing
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Result Management
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Instrument Integration
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/care3.png" alt="Healthcare Software Development" width="350" height="250" loading="lazy" />
            </div>
          </div>

          {/* Use Case 4: Healthcare Mobile Apps */}
          <div className={`${styles.useCaseRow} ${styles.reverse}`}>
            <div className={styles.useCaseContent}>
              <h3 className={styles.useCaseTitle}>Healthcare Mobile Apps</h3>
              <p className={styles.useCaseDescription}>Patient-centric mobile applications for appointment booking, medication reminders, and health tracking.</p>
              <p className={styles.useCaseDetails}>We create patient-centric mobile applications as part of our <strong style={{ color: 'black' }}>Healthcare Software Development</strong> services for appointment booking, medication reminders, and health tracking. Features include telehealth access, lab reports, secure messaging, and personalized health insights. Our solutions improve patient engagement and enable better healthcare management anytime, anywhere, with real-time updates, seamless integrations, enhanced data security, and intuitive user experience.</p>
              <div className={styles.useCaseFeatures}>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Health Tracking
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Medication Reminders
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Appointment Booking
                </span>
                <span className={styles.featureTag}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path d="M20 6L9 17L4 12" stroke="#0e8d38" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Telehealth Access
                </span>
              </div>
              <Link to="/contact" className={styles.useCaseBtn}>
                Get Started
              </Link>
            </div>
            <div className={styles.useCaseImage}>
              <img src="/images/care4.png" alt="Healthcare Mobile Apps" width="350" height="250" loading="lazy" />
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
                <span className={styles.highlight}>Powerful Features</span> for Modern Healthcare
              </h2>
              <p className={styles.paragraph}>
                Our <strong style={{ color: 'black' }}>Healthcare Software Development</strong> solutions are loaded with cutting-edge features that are intended to enhance patient care, optimize operations, and guarantee adherence to data security and healthcare legislation.
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
      <CallToAction />
    </>
  );
};

export default HealthcarePage;
