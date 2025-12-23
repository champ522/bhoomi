import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../styles/ERPSolutionsPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const ERPSolutionsPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const processesCount = useCounter(200, 2000, isStatsVisible);
  const productivityCount = useCounter(75, 2000, isStatsVisible);
  const costSavingCount = useCounter(35, 1500, isStatsVisible);

  const erpFeatures = [
    {
      title: "Financial Management",
      description: "Comprehensive accounting, budgeting, and financial reporting capabilities",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Inventory Management", 
      description: "Real-time inventory tracking, warehouse management, and stock optimization",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Human Resources",
      description: "Employee management, payroll, attendance, and performance tracking",
      image: "/images/appdev.png"
    },
    {
      title: "Supply Chain Management",
      description: "End-to-end supply chain visibility and procurement automation",
      image: "/images/dmarketing.png"
    },
    {
      title: "Production Planning",
      description: "Manufacturing resource planning and production scheduling tools",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Sales & Distribution",
      description: "Order management, sales tracking, and distribution workflow automation",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Business Intelligence",
      description: "Advanced analytics, dashboards, and data-driven insights for strategic decisions",
      image: "/images/appdev.png"
    }
  ];

  return (
    <>
      {/* ERP Solutions Banner */}
      <section className={styles.erpBanner}>
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>ERP Solutions</h1>
            <p className={styles.subtitle}>
              Streamline your business operations with integrated ERP systems
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services" className={styles.breadcrumbLink}>Solutions</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>ERP Solutions</span>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Solutions Content Section */}
      <section className={styles.erpSection}>
        <div className={styles.erpContainer}>
          <div className={styles.erpContent}>
            <div className={styles.imageContent}>
              <lottie-player
                src="https://lottie.host/d461258b-5361-4831-818a-586cab8fba5b/V50OeqCUJk.json"
                background="transparent"
                speed="1"
                className={styles.serviceImage}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className={styles.textContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Integrated</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.erpTitle}>
                <span className={styles.highlight}>ERP </span> Solutions
              </h2>
              <p className={styles.description}>
                We develop comprehensive Enterprise Resource Planning (ERP) systems that integrate all your 
                business processes into a single unified platform. Our ERP solutions streamline operations, 
                improve efficiency, and provide real-time visibility across finance, HR, inventory, and more.
              </p>
              <p className={styles.description}>
                From resource planning to performance tracking, our ERP systems automate workflows, eliminate 
                data silos, and empower your organization with the tools needed to make informed decisions. 
                Transform your business with seamless integration and optimized processes.
              </p>
              
              <div className={styles.serviceStats} ref={statsRef}>
                <div className={styles.stat}>
                  <h3>{processesCount}+</h3>
                  <p>Processes Automated</p>
                </div>
                <div className={styles.stat}>
                  <h3>{productivityCount}%</h3>
                  <p>Productivity Boost</p>
                </div>
                <div className={styles.stat}>
                  <h3>{costSavingCount}%</h3>
                  <p>Cost Reduction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Why is an ERP system essential for growing businesses?</h3>
            <p className={styles.paragraph}>
              In today's complex business environment, managing multiple departments and processes efficiently is critical for success. An ERP system serves as the backbone of your organization, integrating finance, HR, inventory, production, and sales into one cohesive platform. It provides real-time data visibility, automates repetitive tasks, and enables data-driven decision making across all levels.
            </p>
            <p className={styles.paragraph}>
              Without a robust ERP system, businesses face challenges like disconnected systems, data inconsistencies, manual errors, and delayed reporting. Our custom ERP solutions address these pain points by centralizing data, automating workflows, standardizing processes, and providing comprehensive insights that drive operational excellence and business growth.
            </p>

            <h3 className={styles.sectionHeading}>There are 5 key benefits of implementing an ERP system:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Unified Business Operations</h4>
                <p className={styles.reasonText}>Integrate all departments and processes on a single platform for seamless collaboration and data flow.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Real-Time Visibility</h4>
                <p className={styles.reasonText}>Access accurate, up-to-date information across all business functions for better decision making.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Enhanced Productivity</h4>
                <p className={styles.reasonText}>Automate routine tasks, eliminate manual data entry, and free up resources for strategic initiatives.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Cost Optimization</h4>
                <p className={styles.reasonText}>Reduce operational costs through improved efficiency, better resource utilization, and waste reduction.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Scalable Growth</h4>
                <p className={styles.reasonText}>Scale your operations seamlessly as your business grows without system limitations or performance issues.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR ERP MODULES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone develops modular ERP systems tailored to your specific industry and business requirements. Our solutions include all essential modules to manage your entire enterprise, from financial operations to supply chain, with powerful automation and analytics capabilities.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• Financial Management & Accounting</div>
              <div className={styles.serviceItem}>• Inventory & Warehouse Management</div>
              <div className={styles.serviceItem}>• Human Resource Management</div>
              <div className={styles.serviceItem}>• Supply Chain & Procurement</div>
              <div className={styles.serviceItem}>• Manufacturing & Production</div>
              <div className={styles.serviceItem}>• Sales & Distribution</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's PRINCIPLES OF ERP DEVELOPMENT:</h3>
            <p className={styles.paragraph}>
              At Bhoomi Techzone, we build ERP systems that truly transform your business operations. Our development approach focuses on creating scalable, flexible, and user-friendly solutions that adapt to your unique processes and drive measurable results:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Modular Architecture:</strong> We design ERP systems with modular components that can be implemented phase-wise, allowing you to start with critical modules and expand gradually.
              </li>
              <li className={styles.principleItem}>
                <strong>Process-Centric Design:</strong> Every business has unique workflows. We customize the ERP to match your processes rather than forcing you to change your operations.
              </li>
              <li className={styles.principleItem}>
                <strong>Real-Time Integration:</strong> Our ERP systems provide seamless integration between all modules, ensuring data consistency and real-time updates across departments.
              </li>
              <li className={styles.principleItem}>
                <strong>Intelligent Automation:</strong> We automate repetitive tasks, approvals, and workflows to reduce manual effort and minimize errors throughout your operations.
              </li>
              <li className={styles.principleItem}>
                <strong>Scalable Infrastructure:</strong> Our ERP solutions are built to scale with your business, handling increased users, transactions, and data without performance degradation.
              </li>
              <li className={styles.principleItem}>
                <strong>Advanced Analytics:</strong> Built-in business intelligence tools provide actionable insights through dashboards, reports, and predictive analytics.
              </li>
              <li className={styles.principleItem}>
                <strong>Cloud & Mobile Ready:</strong> Access your ERP system anytime, anywhere with cloud-based deployment and mobile applications for on-the-go management.
              </li>
              <li className={styles.principleItem}>
                <strong>Security & Compliance:</strong> We implement robust security measures, role-based access controls, and ensure compliance with industry regulations.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in ERP development process:</h3>
            <p className={styles.paragraph}>
              Our proven ERP development methodology ensures successful implementation and adoption. We follow a structured approach that combines business process analysis, system design, and change management to deliver solutions that drive real business value.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Business Process Analysis</h4>
                  <p className={styles.stepText}>We conduct comprehensive analysis of your current processes, pain points, and requirements to design an ERP system that aligns with your business goals.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>System Design & Planning</h4>
                  <p className={styles.stepText}>Our experts create detailed architecture, database design, and implementation roadmap ensuring seamless integration and optimal performance.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Development & Customization</h4>
                  <p className={styles.stepText}>We develop the ERP system with custom modules, workflows, and features tailored to your specific industry and business requirements.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Testing & Data Migration</h4>
                  <p className={styles.stepText}>Rigorous testing ensures system reliability, followed by secure data migration from legacy systems with zero data loss.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Deployment & Training</h4>
                  <p className={styles.stepText}>We manage smooth deployment, provide comprehensive user training, and offer ongoing support to ensure successful ERP adoption.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Features Section */}
      <section className={styles.erpFeaturesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Core <span className={styles.highlight}>ERP Modules</span></h2>
            <p className={styles.sectionSubtitle}>Comprehensive modules to manage every aspect of your business</p>
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
            className={styles.erpSwiper}
          >
            {erpFeatures.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className={styles.erpCard}>
                  <div className={styles.erpImage}>
                    <img src={feature.image} alt={feature.title} />
                    <div className={styles.erpOverlay}>
                      <Link to="/contact" className={styles.erpButton}>Get Started</Link>
                    </div>
                  </div>
                  <div className={styles.erpCardContent}>
                    <h3 className={styles.erpCardTitle}>{feature.title}</h3>
                    <p className={styles.erpDescription}>{feature.description}</p>
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
    </>
  );
};

export default ERPSolutionsPage;
