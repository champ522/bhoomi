import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/ERPSolutionsPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
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
      <SEOHead
        title="Top ERP Software Development in Noida for Smart Business"
        description="Transform your organization with our ERP software development in Noida. Experience seamless integration and improved productivity with our innovative solutions - Bhoomi Techzone."
        keywords="ERP Software Development, ERP Software Development in noida"
        canonical="https://bhoomitechzone.in/erp-solutions"
      />
      {/* ERP Solutions Banner */}
      <section className={styles.erpBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>ERP Software Development Solutions</h1>
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
                To assist companies in integrating and managing all operations on a single platform, we specialise in ERP software development. Our ERP software development in Noida offers clever solutions that increase productivity, simplify procedures, and offer real-time visibility in a variety of areas, including inventory, finance, and human resources.
              </p>
              <p className={styles.description}>
                From resource planning to performance tracking, our ERP systems automate workflows, eliminate data silos, and empower your organization with accurate data and insights. With our ERP <Link to="/software-development">Software Development</Link>, you can transform operations, reduce costs, and make better business decisions.
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
              In today’s competitive environment, managing multiple departments efficiently is critical. ERP Software Development helps unify all business processes into one system, ensuring smooth data flow and better collaboration. It provides real-time insights, automates repetitive tasks, and supports data-driven decision-making.
            </p>
            <p className={styles.paragraph}>
              Our ERP solutions simplify processes, remove data silos, and provide your company with the resources it needs to make wise decisions, from resource planning to performance monitoring. Transform your company with streamlined operations and smooth integration.
            </p>

            <h3 className={styles.sectionHeading}>There are 5 key benefits of implementing an ERP system:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Unified Business Operations</h4>
                <p className={styles.reasonText}>Integrate all departments into one platform for seamless communication and workflow management.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Real-Time Visibility</h4>
                <p className={styles.reasonText}>Access accurate, real-time data across all functions to improve decision-making.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Enhanced Productivity</h4>
                <p className={styles.reasonText}>Automate tasks and reduce manual work to increase efficiency and save time.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Cost Optimization</h4>
                <p className={styles.reasonText}>Improve resource utilization and reduce operational costs through better planning and automation.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Scalable Growth</h4>
                <p className={styles.reasonText}>Easily scale your business operations as your company grows without system limitations.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR ERP MODULES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone provides complete ERP Software Development solutions tailored to your business needs.
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
              Our tried-and-true ERP development process guarantees adoption and deployment success. In order to provide solutions that generate actual business value, we employ a methodical methodology that integrates system design, change management, and business process analysis:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Modular Architecture:</strong> We design ERP systems with flexible modules that can be implemented step-by-step as per your business needs.
              </li>
              <li className={styles.principleItem}>
                <strong>Process-Centric Design:</strong> Our ERP solutions are customized to match your workflows, ensuring smooth adoption and better efficiency.
              </li>
              <li className={styles.principleItem}>
                <strong>Real-Time Integration:</strong> All modules are connected for seamless data flow and real-time updates across departments.
              </li>
              <li className={styles.principleItem}>
                <strong>Intelligent Automation:</strong> We automate repetitive tasks and workflows to reduce manual effort and improve accuracy.
              </li>
              <li className={styles.principleItem}>
                <strong>Scalable Infrastructure:</strong> Our ERP systems are built to handle growth in users, data, and operations without performance issues.
              </li>
              <li className={styles.principleItem}>
                <strong>Advanced Analytics:</strong> We provide dashboards and reports for better insights and smarter business decisions.
              </li>
              <li className={styles.principleItem}>
                <strong>Cloud & Mobile Ready:</strong> Access your ERP system anytime with cloud-based and mobile-friendly solutions.
              </li>
              <li className={styles.principleItem}>
                <strong>Security & Compliance:</strong> We ensure strong data security, access control, and compliance with industry standards.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in ERP development process:</h3>
            <p className={styles.paragraph}>
              Our structured approach ensures smooth ERP implementation and long-term success.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Business Process Analysis</h4>
                  <p className={styles.stepText}>We analyze your business workflows and requirements to design the right ERP solution.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>System Design & Planning</h4>
                  <p className={styles.stepText}>We create detailed system architecture and implementation strategies.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Development & Customization</h4>
                  <p className={styles.stepText}>We build and customize ERP modules tailored to your business operations.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Testing & Data Migration</h4>
                  <p className={styles.stepText}>We ensure system accuracy through testing and securely migrate your data.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Deployment & Training</h4>
                  <p className={styles.stepText}>We handle deployment, provide user training, and offer ongoing support for smooth operations.</p>
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
                    <img src={feature.image} alt={feature.title} width="350" height="250" loading="lazy" />
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
      <CallToAction />
    </>
  );
};

export default ERPSolutionsPage;
