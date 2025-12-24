import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/CRMSystemsPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const CRMSystemsPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const clientsCount = useCounter(500, 2000, isStatsVisible);
  const efficiencyCount = useCounter(85, 2000, isStatsVisible);
  const revenueCount = useCounter(40, 1500, isStatsVisible);

  const crmFeatures = [
    {
      title: "Contact Management",
      description: "Centralize all customer data and interactions in one unified platform",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Sales Pipeline Management", 
      description: "Track deals through every stage with visual pipeline management",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Marketing Automation",
      description: "Automate email campaigns, lead nurturing, and customer engagement",
      image: "/images/appdev.png"
    },
    {
      title: "Analytics & Reporting",
      description: "Gain insights with real-time dashboards and comprehensive reports",
      image: "/images/dmarketing.png"
    },
    {
      title: "Customer Support",
      description: "Manage tickets, queries, and customer service workflows efficiently",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Task & Activity Tracking",
      description: "Monitor team activities, tasks, and follow-ups in real-time",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Integration Capabilities",
      description: "Connect with email, calendar, and third-party business tools seamlessly",
      image: "/images/appdev.png"
    }
  ];

  return (
    <>
      {/* CRM Systems Banner */}
      <section className={styles.crmBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>CRM Systems</h1>
            <p className={styles.subtitle}>
              Transform customer relationships with powerful CRM solutions
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services" className={styles.breadcrumbLink}>Solutions</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>CRM Systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Systems Content Section */}
      <section className={styles.crmSection}>
        <div className={styles.crmContainer}>
          <div className={styles.crmContent}>
            <div className={styles.imageContent}>
              <lottie-player
                src="https://lottie.host/0abcb63d-5f79-44ff-9810-0fab47ce40f9/I4Dtok59H9.json"
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
              <h2 className={styles.crmTitle}>
                <span className={styles.highlight}>CRM </span> Systems
              </h2>
              <p className={styles.description}>
                We develop custom Customer Relationship Management (CRM) systems that help businesses build 
                stronger relationships with their customers. Our CRM solutions streamline sales processes, 
                improve customer service, and provide actionable insights to drive business growth.
              </p>
              <p className={styles.description}>
                From lead management to customer retention, our CRM systems centralize all customer interactions, 
                automate workflows, and empower your team with the tools they need to deliver exceptional 
                customer experiences. Scale your business with data-driven decisions and efficient processes.
              </p>
              
              <div className={styles.serviceStats} ref={statsRef}>
                <div className={styles.stat}>
                  <h3>{clientsCount}+</h3>
                  <p>Customers Managed</p>
                </div>
                <div className={styles.stat}>
                  <h3>{efficiencyCount}%</h3>
                  <p>Efficiency Increase</p>
                </div>
                <div className={styles.stat}>
                  <h3>{revenueCount}%</h3>
                  <p>Revenue Growth</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Why is a CRM system essential for modern businesses?</h3>
            <p className={styles.paragraph}>
              In today's competitive business landscape, managing customer relationships effectively is crucial for success. A CRM system serves as the central hub for all customer interactions, providing a 360-degree view of each customer's journey. It enables businesses to track leads, manage sales pipelines, automate marketing campaigns, and deliver personalized customer experiences at scale.
            </p>
            <p className={styles.paragraph}>
              Without a proper CRM system, businesses struggle with scattered data, missed opportunities, inefficient processes, and poor customer service. Our custom CRM solutions eliminate these challenges by centralizing information, automating repetitive tasks, and providing actionable insights that help you make informed decisions and build lasting customer relationships.
            </p>

            <h3 className={styles.sectionHeading}>There are 5 key benefits of implementing a CRM system:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Improved Customer Relationships</h4>
                <p className={styles.reasonText}>Centralize customer data and interaction history to deliver personalized experiences and build stronger relationships.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Increased Sales & Revenue</h4>
                <p className={styles.reasonText}>Streamline sales processes, track opportunities, and close more deals with efficient pipeline management.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Enhanced Team Collaboration</h4>
                <p className={styles.reasonText}>Enable seamless communication and collaboration across sales, marketing, and customer service teams.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Data-Driven Decision Making</h4>
                <p className={styles.reasonText}>Access real-time analytics, reports, and insights to make informed business decisions and optimize strategies.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Automation & Efficiency</h4>
                <p className={styles.reasonText}>Automate repetitive tasks, workflows, and communications to save time and focus on strategic activities.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR CRM FEATURES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone develops comprehensive CRM systems tailored to your business needs. Our solutions include all essential features to manage customer relationships effectively, from lead generation to customer retention, with powerful automation and analytics capabilities.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• Contact & Lead Management</div>
              <div className={styles.serviceItem}>• Sales Pipeline Tracking</div>
              <div className={styles.serviceItem}>• Marketing Automation</div>
              <div className={styles.serviceItem}>• Customer Support Ticketing</div>
              <div className={styles.serviceItem}>• Analytics & Reporting</div>
              <div className={styles.serviceItem}>• Mobile CRM Access</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's PRINCIPLES OF CRM DEVELOPMENT:</h3>
            <p className={styles.paragraph}>
              At Bhoomi Techzone, we build CRM systems that truly serve your business needs. Our development approach focuses on creating intuitive, scalable, and feature-rich solutions that empower your team and delight your customers:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>User-Centric Design:</strong> We design CRM interfaces that are intuitive and easy to use, ensuring high adoption rates across your team with minimal training required.
              </li>
              <li className={styles.principleItem}>
                <strong>Customization & Flexibility:</strong> Every business is unique. We build CRM systems that adapt to your specific workflows, processes, and industry requirements rather than forcing you to change.
              </li>
              <li className={styles.principleItem}>
                <strong>360-Degree Customer View:</strong> Our CRM systems provide complete visibility into every customer interaction, communication, and transaction across all touchpoints.
              </li>
              <li className={styles.principleItem}>
                <strong>Automation First:</strong> We automate repetitive tasks like follow-ups, email campaigns, and data entry, freeing your team to focus on building relationships and closing deals.
              </li>
              <li className={styles.principleItem}>
                <strong>Scalable Architecture:</strong> Our CRM solutions grow with your business, handling increasing data volumes and users without compromising performance.
              </li>
              <li className={styles.principleItem}>
                <strong>Integration Capabilities:</strong> We ensure seamless integration with your existing tools like email, calendar, accounting software, and marketing platforms.
              </li>
              <li className={styles.principleItem}>
                <strong>Mobile-First Approach:</strong> Access customer information, update records, and manage activities on-the-go with fully responsive mobile CRM applications.
              </li>
              <li className={styles.principleItem}>
                <strong>Data Security & Privacy:</strong> We implement robust security measures to protect sensitive customer data and ensure compliance with data protection regulations.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in CRM development process:</h3>
            <p className={styles.paragraph}>
              Our systematic approach to CRM development ensures we deliver solutions that align perfectly with your business goals and processes. We follow a proven methodology that combines business analysis, user experience design, and technical expertise.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Business Analysis & Requirements</h4>
                  <p className={styles.stepText}>We analyze your business processes, customer journey, and specific requirements to design a CRM system that fits your needs perfectly.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>System Design & Architecture</h4>
                  <p className={styles.stepText}>Our team creates detailed wireframes, database schemas, and system architecture ensuring scalability and optimal performance.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Development & Customization</h4>
                  <p className={styles.stepText}>We develop the CRM system with custom features, workflows, and integrations tailored to your business requirements.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Testing & Training</h4>
                  <p className={styles.stepText}>Comprehensive testing ensures bug-free operation, followed by team training to ensure smooth adoption and maximum ROI.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Deployment & Ongoing Support</h4>
                  <p className={styles.stepText}>We handle seamless deployment, data migration, and provide continuous support, updates, and enhancements as your business evolves.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CRM Features Section */}
      <section className={styles.crmFeaturesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Core <span className={styles.highlight}>CRM Features</span></h2>
            <p className={styles.sectionSubtitle}>Powerful features to manage every aspect of customer relationships</p>
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
            className={styles.crmSwiper}
          >
            {crmFeatures.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className={styles.crmCard}>
                  <div className={styles.crmImage}>
                    <img src={feature.image} alt={feature.title} />
                    <div className={styles.crmOverlay}>
                      <Link to="/contact" className={styles.crmButton}>Get Started</Link>
                    </div>
                  </div>
                  <div className={styles.crmCardContent}>
                    <h3 className={styles.crmCardTitle}>{feature.title}</h3>
                    <p className={styles.crmDescription}>{feature.description}</p>
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

export default CRMSystemsPage;
