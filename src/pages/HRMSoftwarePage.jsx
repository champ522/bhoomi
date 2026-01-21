import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/HRMSoftwarePage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const HRMSoftwarePage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const employeesCount = useCounter(1500, 2000, isStatsVisible);
  const efficiencyCount = useCounter(70, 2000, isStatsVisible);
  const satisfactionCount = useCounter(90, 1500, isStatsVisible);

  const hrmFeatures = [
    {
      title: "Employee Management",
      description: "Centralized employee database with complete profiles, documents, and organizational hierarchy",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Payroll Processing", 
      description: "Automated payroll calculation, tax deductions, salary slips, and compliance management",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Attendance Tracking",
      description: "Biometric integration, shift management, leave tracking, and real-time attendance monitoring",
      image: "/images/appdev.png"
    },
    {
      title: "Recruitment & Onboard",
      description: "Streamline hiring process from job posting to candidate onboarding with automated workflows",
      image: "/images/dmarketing.png"
    },
    {
      title: "Manage Performance",
      description: "Goal setting, performance reviews, appraisals, and continuous feedback mechanisms",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Training & Skills",
      description: "Manage training programs, certifications, skill development, and learning paths",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Self-Service Portal",
      description: "Employee self-service for leave applications, attendance, payslips, and profile updates",
      image: "/images/appdev.png"
    }
  ];

  return (
    <>
      {/* HRM Banner */}
      <section className={styles.hrmBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>HRM Software Solutions</h1>
            <p className={styles.subtitle}>
              Streamline HR operations with intelligent workforce management solutions
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services" className={styles.breadcrumbLink}>Solutions</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>HRM Software</span>
            </div>
          </div>
        </div>
      </section>

      {/* HRM Content Section */}
      <section className={styles.hrmSection}>
        <div className={styles.hrmContainer}>
          <div className={styles.hrmContent}>
            <div className={styles.imageContent}>
              <lottie-player
                src="https://lottie.host/d2b2c5c0-a43a-4201-86ac-099688776f44/eXhuEkLTyc.json"
                background="transparent"
                speed="1"
                className={styles.serviceImage}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className={styles.textContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Intelligent</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.hrmTitle}>
                <span className={styles.highlight}>HRM </span> Software Solutions
              </h2>
              <p className={styles.description}>
                We develop comprehensive Human Resource Management Systems that automate and streamline all HR operations 
                from recruitment to retirement. Our HRM solutions help businesses manage employee data, payroll, attendance, 
                performance, and compliance efficiently, reducing administrative burden and improving workforce productivity.
              </p>
              <p className={styles.description}>
                From startups to large enterprises, our HRM software adapts to your organizational structure and HR policies. 
                Transform your HR department with automated workflows, self-service portals, real-time analytics, and 
                mobile accessibility that empowers both HR teams and employees.
              </p>
              
              <div className={styles.serviceStats} ref={statsRef}>
                <div className={styles.stat}>
                  <h3>{employeesCount}+</h3>
                  <p>Employees Managed</p>
                </div>
                <div className={styles.stat}>
                  <h3>{efficiencyCount}%</h3>
                  <p>Process Efficiency</p>
                </div>
                <div className={styles.stat}>
                  <h3>{satisfactionCount}%</h3>
                  <p>User Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Why is HRM software essential for modern businesses?</h3>
            <p className={styles.paragraph}>
              Effective human resource management is critical for organizational success and employee satisfaction. An HRM system 
              automates routine HR tasks, ensures compliance with labor laws, provides data-driven insights for strategic decisions, 
              and creates a seamless experience for both HR teams and employees. It eliminates manual paperwork, reduces errors, 
              improves transparency, and enables HR professionals to focus on strategic initiatives rather than administrative tasks.
            </p>
            <p className={styles.paragraph}>
              Without an HRM system, businesses struggle with scattered employee data, manual payroll processing, attendance tracking 
              issues, compliance risks, inefficient recruitment processes, and lack of performance visibility. Our custom HRM solutions 
              address these challenges by providing centralized employee management, automated payroll, integrated attendance systems, 
              streamlined recruitment, comprehensive performance tracking, and powerful analytics for informed HR decisions.
            </p>

            <h3 className={styles.sectionHeading}>There are 5 key benefits of implementing HRM software:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Automated HR Processes</h4>
                <p className={styles.reasonText}>Automate repetitive tasks like payroll, attendance, leave management, and compliance reporting to save time and reduce errors.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Enhanced Employee Experience</h4>
                <p className={styles.reasonText}>Self-service portals empower employees to manage their information, apply for leaves, access payslips, and update details independently.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Data-Driven Decisions</h4>
                <p className={styles.reasonText}>Comprehensive analytics and reports provide insights into workforce trends, turnover, performance, and HR metrics for strategic planning.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Compliance Management</h4>
                <p className={styles.reasonText}>Stay compliant with labor laws, tax regulations, and statutory requirements with automated tracking and reporting.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Improved Productivity</h4>
                <p className={styles.reasonText}>Streamlined workflows, reduced paperwork, and automated processes free up HR teams to focus on strategic initiatives and employee development.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR HRM FEATURES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone develops feature-rich HRM software with all essential modules to manage your workforce effectively. 
              Our solutions are fully customizable to match your organizational structure, HR policies, and specific requirements.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• Employee Database Management</div>
              <div className={styles.serviceItem}>• Payroll & Compensation</div>
              <div className={styles.serviceItem}>• Attendance & Leave Management</div>
              <div className={styles.serviceItem}>• Recruitment & Onboarding</div>
              <div className={styles.serviceItem}>• Performance Management</div>
              <div className={styles.serviceItem}>• Training & Development</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's PRINCIPLES OF HRM SOFTWARE DEVELOPMENT:</h3>
            <p className={styles.paragraph}>
              At Bhoomi Techzone, we build HRM systems that truly transform HR operations and enhance employee experiences. 
              Our development approach focuses on creating user-friendly, scalable, and compliant solutions that adapt to your organization:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Employee-Centric Design:</strong> Our HRM systems prioritize user experience for both HR teams and employees, 
                with intuitive interfaces and easy navigation that requires minimal training.
              </li>
              <li className={styles.principleItem}>
                <strong>Comprehensive Coverage:</strong> We cover the complete employee lifecycle from recruitment and onboarding to 
                performance management, training, and exit processes in a unified platform.
              </li>
              <li className={styles.principleItem}>
                <strong>Automation First:</strong> We automate routine HR tasks including payroll processing, attendance tracking, 
                leave approvals, and compliance reporting to maximize efficiency and minimize errors.
              </li>
              <li className={styles.principleItem}>
                <strong>Compliance Built-In:</strong> Our systems ensure compliance with local labor laws, tax regulations, PF, ESI, 
                and other statutory requirements with automated calculations and reporting.
              </li>
              <li className={styles.principleItem}>
                <strong>Mobile Accessibility:</strong> Employees and managers can access HRM features on-the-go with mobile apps for 
                attendance, leave applications, approvals, and self-service functions.
              </li>
              <li className={styles.principleItem}>
                <strong>Advanced Analytics:</strong> Comprehensive dashboards and reports provide insights into headcount, turnover, 
                performance trends, compensation analysis, and workforce planning.
              </li>
              <li className={styles.principleItem}>
                <strong>Flexible & Scalable:</strong> Our HRM systems grow with your organization, supporting multiple locations, 
                departments, and complex organizational structures with ease.
              </li>
              <li className={styles.principleItem}>
                <strong>Integration Ready:</strong> Seamless integration with biometric devices, accounting systems, ERP platforms, 
                and other business applications for unified operations.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in HRM software development:</h3>
            <p className={styles.paragraph}>
              Our systematic approach to HRM software development ensures we deliver solutions that perfectly align with your 
              organizational needs and HR policies. We follow a proven methodology that combines process analysis, system design, 
              and comprehensive training.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>HR Process Analysis & Requirements</h4>
                  <p className={styles.stepText}>We analyze your current HR processes, organizational structure, policies, and compliance requirements to design a tailored solution.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>System Architecture & Design</h4>
                  <p className={styles.stepText}>Our team creates detailed system architecture, database design, workflow configurations, and user interface prototypes for your approval.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Development & Customization</h4>
                  <p className={styles.stepText}>We develop the HRM system with custom modules, workflows, integrations, and features tailored to your specific requirements.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Testing & Data Migration</h4>
                  <p className={styles.stepText}>Rigorous testing ensures reliability and accuracy, followed by secure migration of existing employee data and HR records.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Training & Deployment</h4>
                  <p className={styles.stepText}>Comprehensive training for HR teams and employees, followed by phased deployment with ongoing support to ensure successful adoption.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HRM Features Section */}
      <section className={styles.hrmFeaturesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Core <span className={styles.highlight}>HRM Modules</span></h2>
            <p className={styles.sectionSubtitle}>Comprehensive modules to manage every aspect of human resources</p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            className={styles.hrmSwiper}
          >
            {hrmFeatures.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className={styles.hrmCard}>
                  <div className={styles.hrmImage}>
                    <img src={feature.image} alt={feature.title} />
                    <div className={styles.hrmOverlay}>
                      <Link to="/contact" className={styles.hrmButton}>Get Started</Link>
                    </div>
                  </div>
                  <div className={styles.hrmCardContent}>
                    <h3 className={styles.hrmCardTitle}>{feature.title}</h3>
                    <p className={styles.hrmDescription}>{feature.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Include other components */}
      <TechnologyStack />
      <WorkProcess />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default HRMSoftwarePage;
