import React from 'react';
import SEOHead from '../components/SEOHead';
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
      <SEOHead
        title="Best HRM Software Development in Noida for Businesses"
        description="Looking for the best HRM software in Noida? Our development services provide cutting-edge solutions to enhance your HR operations and boost productivity - Bhoomi techzone."
        keywords="Best HRM software development in Noida, HRM software development"
        canonical="https://bhoomitechzone.in/hrm-software"
      />
      {/* HRM Banner */}
      <section className={styles.hrmBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Best HRM Software Development in Noida</h1>
            <p className={styles.subtitle}>
              Streamline HR operations with intelligent workforce management solutions tailored to your business needs. Our Best HRM Software Development in Noida ensures automation, accuracy, and improved employee management efficiency.
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
                Intelligent <span className={styles.highlight}>HRM </span> Software Development Solutions
              </h2>
              <p className={styles.description}>
                We offer advanced HRM <Link to="/software-development">Software Development</Link> services to help businesses automate and manage their human resources efficiently. As a trusted provider of the Best HRM Software Development in Noida, we build systems that handle employee data, payroll, attendance, performance, and compliance with ease.
              </p>
              <p className={styles.description}>
                From startups to large enterprises, our HRM solutions are designed to adapt to your organizational structure. Our HRM Software Development services improve productivity, reduce manual work, and enhance employee experience through automation and real-time insights.
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
            <h3 className={styles.sectionHeading}>Why is HRM Software Development essential for modern businesses?</h3>
            <p className={styles.paragraph}>
              Effective HR management is key to business success. HRM Software Development helps automate HR processes, improve accuracy, and provide valuable insights for better decision-making. It reduces paperwork, ensures compliance, and enhances overall workforce management.
            </p>
            <p className={styles.paragraph}>
              Without a proper system, businesses face challenges like manual payroll, scattered employee data, and compliance risks. Our Best HRM Software Development in Noida solves these issues with centralized management, automation, and smart analytics.
            </p>

            <h3 className={styles.sectionHeading}>There are 5 key benefits of implementing HRM software:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Automated HR Processes</h4>
                <p className={styles.reasonText}>Automate payroll, attendance, leave management, and reporting to save time and reduce errors.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Enhanced Employee Experience</h4>
                <p className={styles.reasonText}>Self-service portals allow employees to manage their data, apply for leaves, and access payslips easily.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Data-Driven Decisions</h4>
                <p className={styles.reasonText}>Get detailed reports and analytics for better workforce planning and performance tracking.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Compliance Management</h4>
                <p className={styles.reasonText}>Ensure compliance with labor laws and regulations through automated tracking and reporting.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Improved Productivity</h4>
                <p className={styles.reasonText}>Streamlined workflows reduce manual work and allow HR teams to focus on strategic tasks.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>Our HRM Software Development Features:</h3>
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
              Our approach focuses on delivering the Best HRM Software Development in Noida with user-friendly design, smart automation, and scalable solutions that simplify HR operations and improve workforce management:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Employee-Centric Design:</strong> We build intuitive and easy-to-use HRM systems designed for both HR teams and employees. Simple navigation and clear interfaces reduce training time and improve user adoption across the organization.
              </li>
              <li className={styles.principleItem}>
                <strong>Comprehensive Coverage:</strong> Our HRM software manages the complete employee lifecycle—from recruitment and onboarding to performance management, training, and exit—within a single, unified platform.
              </li>
              <li className={styles.principleItem}>
                <strong>Automation First:</strong> We automate repetitive HR tasks such as payroll processing, attendance tracking, leave approvals, and reporting. This reduces manual effort, minimizes errors, and increases overall efficiency.
              </li>
              <li className={styles.principleItem}>
                <strong>Compliance Built-In:</strong> Our systems are designed to comply with labor laws, tax regulations, PF, ESI, and other statutory requirements. Automated calculations and reports ensure accuracy and reduce compliance risks.
              </li>
              <li className={styles.principleItem}>
                <strong>Mobile Accessibility:</strong> Employees and managers can access HR features anytime, anywhere through mobile-friendly platforms. This enables quick actions like attendance marking, leave requests, and approvals on the go.
              </li>
              <li className={styles.principleItem}>
                <strong>Advanced Analytics:</strong> Gain access to detailed dashboards and reports that provide insights into employee performance, turnover rates, attendance patterns, and workforce trends for better decision-making.
              </li>
              <li className={styles.principleItem}>
                <strong>Flexible & Scalable:</strong> Best HRM software development in Noida is designed to grow with your business, supporting multiple locations, departments, and complex organizational structures without performance issues.
              </li>
              <li className={styles.principleItem}>
                <strong>Integration Ready:</strong> Easily integrate the HRM system with biometric devices, <Link to="/erp-solutions">ERP software</Link>, accounting tools, and other business applications to ensure smooth data flow and unified operations.
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
                  <p className={styles.stepText}>We analyze your HR processes, policies, and requirements to design a suitable solution.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>System Architecture & Design</h4>
                  <p className={styles.stepText}>We create system design, workflows, and user interface prototypes for approval.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Development & Customization</h4>
                  <p className={styles.stepText}>We build and customize HRM software based on your business needs.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Testing & Data Migration</h4>
                  <p className={styles.stepText}>We test the system thoroughly and securely migrate your existing HR data.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Training & Deployment</h4>
                  <p className={styles.stepText}>We provide training and support to ensure smooth implementation and adoption.</p>
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
                    <img src={feature.image} alt={feature.title} width="350" height="250" loading="lazy" />
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
