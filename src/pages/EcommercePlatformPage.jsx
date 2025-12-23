import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../styles/EcommercePlatformPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const EcommercePlatformPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const productsCount = useCounter(1000, 2000, isStatsVisible);
  const conversionCount = useCounter(65, 2000, isStatsVisible);
  const salesCount = useCounter(50, 1500, isStatsVisible);

  const ecommerceFeatures = [
    {
      title: "Product Management",
      description: "Comprehensive catalog management with categories, variants, and inventory tracking",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Shopping Cart & Checkout", 
      description: "Seamless shopping experience with secure payment gateway integration",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Order Management",
      description: "Complete order processing, tracking, and fulfillment automation",
      image: "/images/appdev.png"
    },
    {
      title: "Payment Integration",
      description: "Multiple payment gateways with secure transactions and PCI compliance",
      image: "/images/dmarketing.png"
    },
    {
      title: "Customer Accounts",
      description: "User registration, profiles, wishlists, and order history management",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Marketing Tools",
      description: "Promotions, discounts, coupons, and email marketing automation",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Analytics & Reports",
      description: "Sales analytics, customer insights, and comprehensive business reports",
      image: "/images/appdev.png"
    }
  ];

  return (
    <>
      {/* Ecommerce Platform Banner */}
      <section className={styles.ecommerceBanner}>
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Ecommerce Platform</h1>
            <p className={styles.subtitle}>
              Build powerful online stores with custom ecommerce solutions
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services" className={styles.breadcrumbLink}>Solutions</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>E-com Platform</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ecommerce Platform Content Section */}
      <section className={styles.ecommerceSection}>
        <div className={styles.ecommerceContainer}>
          <div className={styles.ecommerceContent}>
            <div className={styles.imageContent}>
              <lottie-player
                src="https://lottie.host/7d93d25f-ec7e-44d5-a185-ea9afe0eb813/kPLBMhY2aG.json"
                background="transparent"
                speed="0.7"
                className={styles.serviceImage}
                loop
                autoplay
              ></lottie-player>
            </div>
            <div className={styles.textContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Powerful</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.ecommerceTitle}>
                <span className={styles.highlight}>Ecommerce </span> Platform
              </h2>
              <p className={styles.description}>
                We develop feature-rich ecommerce platforms that empower businesses to sell online effectively. 
                Our custom solutions include product management, secure payment processing, inventory tracking, 
                and powerful marketing tools to drive sales and customer engagement.
              </p>
              <p className={styles.description}>
                From B2C retail stores to B2B marketplaces, our ecommerce platforms are built with scalability, 
                security, and user experience in mind. Transform your business with a complete online selling 
                solution that integrates seamlessly with your operations and grows with your business.
              </p>
              
              <div className={styles.serviceStats} ref={statsRef}>
                <div className={styles.stat}>
                  <h3>{productsCount}+</h3>
                  <p>Products Managed</p>
                </div>
                <div className={styles.stat}>
                  <h3>{conversionCount}%</h3>
                  <p>Conversion Rate</p>
                </div>
                <div className={styles.stat}>
                  <h3>{salesCount}%</h3>
                  <p>Sales Increase</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Why is an ecommerce platform essential for modern businesses?</h3>
            <p className={styles.paragraph}>
              In today's digital-first world, having a robust online presence is no longer optional—it's essential. An ecommerce platform opens up new revenue streams, expands your market reach beyond geographical boundaries, and provides customers with 24/7 access to your products and services. It enables businesses to compete effectively, reduce operational costs, and scale rapidly without the limitations of physical retail.
            </p>
            <p className={styles.paragraph}>
              Without a proper ecommerce platform, businesses miss out on the growing online market, struggle with manual order processing, lack customer insights, and face challenges in inventory management. Our custom ecommerce solutions address these challenges by providing automated workflows, integrated payment systems, real-time inventory tracking, and powerful analytics to drive informed business decisions.
            </p>

            <h3 className={styles.sectionHeading}>There are 5 key benefits of implementing an ecommerce platform:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Global Market Reach</h4>
                <p className={styles.reasonText}>Expand your business beyond local boundaries and reach customers worldwide with 24/7 availability.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Increased Sales & Revenue</h4>
                <p className={styles.reasonText}>Multiple sales channels, personalized recommendations, and marketing automation drive higher conversions.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Lower Operating Costs</h4>
                <p className={styles.reasonText}>Reduce overhead costs associated with physical stores while automating order processing and inventory management.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Enhanced Customer Experience</h4>
                <p className={styles.reasonText}>Provide seamless shopping experiences with easy navigation, quick checkout, and multiple payment options.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Data-Driven Insights</h4>
                <p className={styles.reasonText}>Track customer behavior, analyze sales patterns, and optimize marketing strategies with comprehensive analytics.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR ECOMMERCE FEATURES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone develops comprehensive ecommerce platforms with all essential features to run a successful online store. Our solutions are customizable, scalable, and designed to provide exceptional shopping experiences while maximizing your business efficiency.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• Advanced Product Catalog</div>
              <div className={styles.serviceItem}>• Secure Payment Gateways</div>
              <div className={styles.serviceItem}>• Order & Inventory Management</div>
              <div className={styles.serviceItem}>• Customer Account Management</div>
              <div className={styles.serviceItem}>• Marketing & SEO Tools</div>
              <div className={styles.serviceItem}>• Mobile Responsive Design</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's PRINCIPLES OF ECOMMERCE DEVELOPMENT:</h3>
            <p className={styles.paragraph}>
              At Bhoomi Techzone, we build ecommerce platforms that convert visitors into customers. Our development approach focuses on creating fast, secure, and user-friendly online stores that drive sales and provide exceptional shopping experiences:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>User Experience First:</strong> We design intuitive interfaces with easy navigation, quick product search, and streamlined checkout processes that minimize cart abandonment.
              </li>
              <li className={styles.principleItem}>
                <strong>Mobile-Optimized:</strong> Our ecommerce platforms are fully responsive and optimized for mobile devices, ensuring seamless shopping on any screen size.
              </li>
              <li className={styles.principleItem}>
                <strong>Security & Compliance:</strong> We implement SSL encryption, PCI DSS compliance, and secure payment gateways to protect customer data and build trust.
              </li>
              <li className={styles.principleItem}>
                <strong>Performance Optimization:</strong> Fast loading times, optimized images, and efficient code ensure smooth shopping experiences even with large product catalogs.
              </li>
              <li className={styles.principleItem}>
                <strong>Scalable Architecture:</strong> Our platforms are built to handle growing traffic, expanding product catalogs, and increasing transaction volumes seamlessly.
              </li>
              <li className={styles.principleItem}>
                <strong>SEO & Marketing:</strong> Built-in SEO features, marketing tools, and integration with advertising platforms help drive traffic and conversions.
              </li>
              <li className={styles.principleItem}>
                <strong>Inventory Integration:</strong> Real-time inventory synchronization prevents overselling and keeps stock levels accurate across all sales channels.
              </li>
              <li className={styles.principleItem}>
                <strong>Analytics & Insights:</strong> Comprehensive reporting and analytics provide actionable insights into sales performance, customer behavior, and growth opportunities.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in ecommerce development process:</h3>
            <p className={styles.paragraph}>
              Our proven ecommerce development methodology ensures we deliver platforms that not only look great but also convert visitors into loyal customers. We follow a structured approach that combines business strategy, design excellence, and technical expertise.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Business Analysis & Strategy</h4>
                  <p className={styles.stepText}>We analyze your target market, competition, and business goals to create an ecommerce strategy that drives results and maximizes ROI.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>UX Design & Prototyping</h4>
                  <p className={styles.stepText}>Our designers create intuitive user interfaces with optimized user flows, ensuring seamless shopping experiences that convert.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Development & Integration</h4>
                  <p className={styles.stepText}>We build your ecommerce platform with robust features, secure payment integration, and seamless third-party system connections.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Testing & Optimization</h4>
                  <p className={styles.stepText}>Comprehensive testing across devices, browsers, and payment scenarios ensures flawless operation and optimal performance.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Launch & Growth Support</h4>
                  <p className={styles.stepText}>We manage the launch process, provide training, and offer ongoing support to help your online store grow and succeed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecommerce Features Section */}
      <section className={styles.ecommerceFeaturesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Core <span className={styles.highlight}>Ecommerce Features</span></h2>
            <p className={styles.sectionSubtitle}>Essential features to power your online store and drive sales</p>
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
            className={styles.ecommerceSwiper}
          >
            {ecommerceFeatures.map((feature, index) => (
              <SwiperSlide key={index}>
                <div className={styles.ecommerceCard}>
                  <div className={styles.ecommerceImage}>
                    <img src={feature.image} alt={feature.title} />
                    <div className={styles.ecommerceOverlay}>
                      <Link to="/contact" className={styles.ecommerceButton}>Get Started</Link>
                    </div>
                  </div>
                  <div className={styles.ecommerceCardContent}>
                    <h3 className={styles.ecommerceCardTitle}>{feature.title}</h3>
                    <p className={styles.ecommerceDescription}>{feature.description}</p>
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

export default EcommercePlatformPage;
