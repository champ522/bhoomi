import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/InventoryPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const InventoryPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const itemsCount = useCounter(4999, 2000, isStatsVisible);
  const accuracyCount = useCounter(99, 2000, isStatsVisible);
  const efficiencyCount = useCounter(80, 1500, isStatsVisible);

  const inventoryFeatures = [
    {
      title: "Stock Management",
      description: "Real-time tracking of inventory levels, stock movements, and warehouse locations",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Manage Warehouse", 
      description: "Multi-warehouse support with location tracking and transfer management",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Barcode & RFID",
      description: "Barcode scanning and RFID integration for quick and accurate tracking",
      image: "/images/appdev.png"
    },
    {
      title: "Purchase Management",
      description: "Automate purchase orders, supplier management, and procurement workflows",
      image: "/images/dmarketing.png"
    },
    {
      title: "Stock Alerts",
      description: "Automated alerts for low stock, overstock, and reorder point notifications",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Reporting & Analytics",
      description: "Comprehensive reports on stock levels, turnover rates, and inventory valuation",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Mobile Access",
      description: "Manage inventory on-the-go with mobile apps for real-time updates",
      image: "/images/appdev.png"
    }
  ];

  return (
    <>
      {/* Inventory Banner */}
      <section className={styles.inventoryBanner}>
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Inventory Solutions</h1>
            <p className={styles.subtitle}>
              Streamline stock management with intelligent inventory solutions
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services" className={styles.breadcrumbLink}>Solutions</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Inventory Systems</span>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Content Section */}
      <section className={styles.inventorySection}>
        <div className={styles.inventoryContainer}>
          <div className={styles.inventoryContent}>
            <div className={styles.imageContent}>
              <lottie-player
                src="https://lottie.host/a9a55275-11bd-402c-b13d-a236c6fe79d0/q50RtATs0A.json"
                background="transparent"
                speed="1"
                className={styles.serviceImage}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className={styles.textContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Smart</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.inventoryTitle}>
                <span className={styles.highlight}>Inventory </span> Solutions
              </h2>
              <p className={styles.description}>
                We develop advanced Inventory Management Systems that help businesses track, manage, and optimize 
                their stock levels efficiently. Our solutions provide real-time visibility into inventory across 
                multiple locations, automate reordering processes, and prevent stockouts or overstock situations.
              </p>
              <p className={styles.description}>
                From small warehouses to large distribution centers, our inventory systems streamline operations, 
                reduce carrying costs, and improve order fulfillment accuracy. Transform your inventory management 
                with automated tracking, intelligent forecasting, and comprehensive reporting capabilities.
              </p>
              
              <div className={styles.serviceStats} ref={statsRef}>
                <div className={styles.stat}>
                  <h3>{itemsCount}+</h3>
                  <p>Items Tracked</p>
                </div>
                <div className={styles.stat}>
                  <h3>{accuracyCount}%</h3>
                  <p>Inventory Accuracy</p>
                </div>
                <div className={styles.stat}>
                  <h3>{efficiencyCount}%</h3>
                  <p>Efficiency Gain</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Why is an inventory management system essential for businesses?</h3>
            <p className={styles.paragraph}>
              Effective inventory management is crucial for maintaining optimal stock levels, reducing costs, and ensuring customer satisfaction. An inventory management system provides real-time visibility into stock movements, automates reordering processes, and helps prevent costly stockouts or excess inventory. It enables businesses to make data-driven decisions, improve cash flow, and optimize warehouse operations.
            </p>
            <p className={styles.paragraph}>
              Without a proper inventory system, businesses face challenges like inaccurate stock counts, lost sales due to stockouts, excess inventory tying up capital, manual errors in tracking, and inefficient warehouse operations. Our custom inventory solutions eliminate these problems by providing automated tracking, real-time updates, intelligent alerts, and comprehensive analytics to optimize your inventory management.
            </p>

            <h3 className={styles.sectionHeading}>There are 5 key benefits of implementing an inventory management system:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Real-Time Stock Visibility</h4>
                <p className={styles.reasonText}>Track inventory levels across all locations in real-time, ensuring accurate stock information at all times.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Cost Reduction</h4>
                <p className={styles.reasonText}>Minimize carrying costs, reduce waste, and optimize stock levels to free up working capital.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Improved Accuracy</h4>
                <p className={styles.reasonText}>Eliminate manual errors with barcode scanning, automated tracking, and system-driven processes.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Better Forecasting</h4>
                <p className={styles.reasonText}>Use historical data and trends to predict demand, optimize reorder points, and prevent stockouts.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Enhanced Productivity</h4>
                <p className={styles.reasonText}>Automate routine tasks, streamline workflows, and improve warehouse efficiency with optimized processes.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR INVENTORY FEATURES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone develops comprehensive inventory management systems with all essential features to track, manage, and optimize your stock efficiently. Our solutions are customizable to your specific business needs and industry requirements.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• Real-Time Stock Tracking</div>
              <div className={styles.serviceItem}>• Multi-Warehouse Management</div>
              <div className={styles.serviceItem}>• Barcode & RFID Integration</div>
              <div className={styles.serviceItem}>• Purchase Order Management</div>
              <div className={styles.serviceItem}>• Low Stock Alerts</div>
              <div className={styles.serviceItem}>• Inventory Reports & Analytics</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's PRINCIPLES OF INVENTORY SYSTEM DEVELOPMENT:</h3>
            <p className={styles.paragraph}>
              At Bhoomi Techzone, we build inventory systems that truly optimize your stock management. Our development approach focuses on creating accurate, efficient, and user-friendly solutions that provide real-time visibility and control:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Real-Time Accuracy:</strong> Our systems provide instant updates on stock movements, ensuring you always have accurate inventory data for decision making.
              </li>
              <li className={styles.principleItem}>
                <strong>Multi-Location Support:</strong> Manage inventory across multiple warehouses, stores, or locations with centralized visibility and control.
              </li>
              <li className={styles.principleItem}>
                <strong>Automated Workflows:</strong> We automate reordering, stock transfers, cycle counts, and other routine tasks to improve efficiency and reduce errors.
              </li>
              <li className={styles.principleItem}>
                <strong>Barcode Integration:</strong> Seamless barcode and RFID integration enables quick, accurate tracking and reduces manual data entry errors.
              </li>
              <li className={styles.principleItem}>
                <strong>Intelligent Alerts:</strong> Automated notifications for low stock, overstock, expiry dates, and reorder points keep you informed and proactive.
              </li>
              <li className={styles.principleItem}>
                <strong>Advanced Analytics:</strong> Comprehensive reports and dashboards provide insights into stock turnover, valuation, and optimization opportunities.
              </li>
              <li className={styles.principleItem}>
                <strong>Integration Ready:</strong> Seamless integration with ERP, accounting, ecommerce, and other business systems for unified operations.
              </li>
              <li className={styles.principleItem}>
                <strong>Mobile Access:</strong> Manage inventory on-the-go with mobile apps for receiving, picking, counting, and real-time updates.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in inventory system development:</h3>
            <p className={styles.paragraph}>
              Our systematic approach to inventory system development ensures we deliver solutions that fit your operational needs perfectly. We follow a proven methodology that combines process analysis, system design, and user training.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Process Analysis & Requirements</h4>
                  <p className={styles.stepText}>We analyze your current inventory processes, warehouse layout, and specific requirements to design a system that fits perfectly.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>System Design & Configuration</h4>
                  <p className={styles.stepText}>Our team creates detailed system architecture, database design, and workflow configurations optimized for your operations.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Development & Customization</h4>
                  <p className={styles.stepText}>We develop the inventory system with custom features, integrations, and workflows tailored to your business requirements.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Testing & Data Migration</h4>
                  <p className={styles.stepText}>Comprehensive testing ensures accuracy and reliability, followed by secure migration of existing inventory data.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Training & Go-Live Support</h4>
                  <p className={styles.stepText}>We provide thorough training for your team and offer hands-on support during the go-live phase to ensure smooth adoption.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inventory Features Section */}
      <section className={styles.inventoryFeaturesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Core <span className={styles.highlight}>Inventory Features</span></h2>
            <p className={styles.sectionSubtitle}>Powerful features to manage and optimize your inventory operations</p>
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
            className={styles.inventorySwiper}
          >
            {inventoryFeatures.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className={styles.inventoryCard}>
                  <div className={styles.inventoryImage}>
                    <img src={feature.image} alt={feature.title} />
                    <div className={styles.inventoryOverlay}>
                      <Link to="/contact" className={styles.inventoryButton}>Get Started</Link>
                    </div>
                  </div>
                  <div className={styles.inventoryCardContent}>
                    <h3 className={styles.inventoryCardTitle}>{feature.title}</h3>
                    <p className={styles.inventoryDescription}>{feature.description}</p>
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

export default InventoryPage;
