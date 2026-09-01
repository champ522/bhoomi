import React from 'react';
import SEOHead from '../components/SEOHead';
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
import CallToAction from '../components/CallToAction';
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
      <SEOHead
        title="Bhoomi Techzone - Best Inventory Management Software in Noida"
        description="Find the ideal inventory management software in Noida that meets your business needs, ensuring accurate tracking, automated processes, real-time insights, and efficient resource management."
        keywords="Inventory Management Software, Inventory Management Software In Noida"
        canonical="https://bhoomitechzone.in/inventory-management"
      />
      {/* Inventory Banner */}
      <section className={styles.inventoryBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Inventory Management Software in Noida</h1>
            <p className={styles.subtitle}>
              Streamline stock management with intelligent inventory solutions that give you real-time control and accuracy. Our Inventory Management Software in Noida helps automate processes, reduce errors, and improve efficiency.
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
                We provide advanced Inventory Management Software designed to help businesses track, manage, and optimize stock levels efficiently. As a trusted provider of Inventory Management Software in Noida, we deliver solutions with real-time tracking, automated reordering, and accurate inventory control.
              </p>
              <p className={styles.description}>
                From small warehouses to large distribution centers, our inventory systems streamline operations, reduce carrying costs, and improve order fulfillment accuracy. Transform your inventory management with automated tracking, intelligent forecasting, and comprehensive reporting capabilities.
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
              Effective inventory control is critical for business success. Inventory Management Software provides real-time visibility into stock, automates operations, and prevents stockouts or overstocking. It helps improve cash flow, reduce losses, and ensure customer satisfaction.
            </p>
            <p className={styles.paragraph}>
              Without a proper system, businesses face issues like inaccurate stock data, manual errors, and inefficient operations. Our Inventory Management Software in Noida solves these challenges with automation, real-time updates, and smart analytics.
            </p>

            <h3 className={styles.sectionHeading}>There are 5 key benefits of implementing an inventory management system:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Real-Time Stock Visibility</h4>
                <p className={styles.reasonText}>Track inventory across all locations with accurate, real-time updates.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Cost Reduction</h4>
                <p className={styles.reasonText}>Optimize stock levels, reduce waste, and lower storage costs.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Improved Accuracy</h4>
                <p className={styles.reasonText}>Minimize manual errors with automated tracking and barcode integration.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Better Forecasting</h4>
                <p className={styles.reasonText}>Use data insights to predict demand and avoid stock shortages.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Enhanced Productivity</h4>
                <p className={styles.reasonText}>Automate routine tasks and improve overall operational efficiency.</p>
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
              Our approach focuses on delivering reliable Inventory Management Software in Noida with high accuracy, smart automation, and scalable solutions that simplify inventory control and improve business efficiency:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Real-Time Accuracy:</strong> Our system provides instant updates on stock movement, ensuring your inventory data is always accurate. This helps reduce errors, prevent stock mismatches, and improve decision-making.
              </li>
              <li className={styles.principleItem}>
                <strong>Multi-Location Support:</strong> Easily manage inventory across multiple warehouses, stores, or locations from a single dashboard. Get complete visibility and centralized control over your entire stock.
              </li>
              <li className={styles.principleItem}>
                <strong>Automated Workflows:</strong> We automate routine tasks like reordering, stock transfers, and inventory updates. This saves time, reduces manual work, and improves overall operational efficiency.
              </li>
              <li className={styles.principleItem}>
                <strong>Barcode Integration:</strong> Our software supports barcode and RFID technology for fast and error-free inventory tracking. This improves accuracy and speeds up stock handling processes.
              </li>
              <li className={styles.principleItem}>
                <strong>Intelligent Alerts:</strong> Get real-time notifications for low stock levels, overstock situations, and reorder points. This helps you take timely action and avoid disruptions in operations.
              </li>
              <li className={styles.principleItem}>
                <strong>Advanced Analytics:</strong> Access detailed reports and insights on stock movement, inventory valuation, and performance trends. These insights help you make smarter business decisions.
              </li>
              <li className={styles.principleItem}>
                <strong>Integration Ready:</strong> Our inventory system easily integrates with <Link to="/erp-solutions">ERP</Link>, <Link to="/ecommerce-platform">ecommerce platforms</Link>, and accounting software, ensuring smooth data flow and unified business operations.
              </li>
              <li className={styles.principleItem}>
                <strong>Mobile Access:</strong> Manage your inventory anytime, anywhere with mobile-friendly solutions. Stay updated with real-time data even when you're on the go.
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
                  <p className={styles.stepText}>We study your business operations and inventory needs to design the right solution.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>System Design & Configuration</h4>
                  <p className={styles.stepText}>We create system architecture and workflows tailored to your business.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Development & Customization</h4>
                  <p className={styles.stepText}>We build and customize software with features that match your requirements.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Testing & Data Migration</h4>
                  <p className={styles.stepText}>We ensure accuracy through testing and safely migrate your existing data.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Training & Go-Live Support</h4>
                  <p className={styles.stepText}>We provide training and ongoing support for smooth system adoption.</p>
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
                    <img src={feature.image} alt={feature.title} width="350" height="250" loading="lazy" />
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
      <CallToAction />
    </>
  );
};

export default InventoryPage;
