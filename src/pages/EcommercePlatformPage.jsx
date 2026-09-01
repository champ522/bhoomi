import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/EcommercePlatformPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
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
      <SEOHead
        title="Bhoomi Techzone - Ecommerce website and app development in Noida"
        description="Transform your online store with Ecommerce website and app development in noida . Partner with us for innovative designs and seamless user experiences - Bhoomi Techzone."
        keywords="ecommerce website and app development, ecommerce website development services In noida, ecommerce app development service"
        canonical="https://bhoomitechzone.in/ecommerce-platform"
      />
      {/* Ecommerce Platform Banner */}
      <section className={styles.ecommerceBanner}>        <ParticleBanner />        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Powerful Ecommerce Platform</h1>
            <p className={styles.subtitle}>
              Build powerful online stores with custom ecommerce solutions designed to deliver seamless user experiences and high performance.
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
                Ecommerce <span className={styles.highlight}> Website and App Development </span> for Modern Businesses
              </h2>
              <p className={styles.description}>
                We specialize in <strong style={{ color: 'black' }}>ecommerce website and app development</strong> to help businesses build scalable, user-friendly online stores. Our solutions simplify product management, enable secure payment processing, and streamline inventory tracking for better efficiency. As a trusted provider of <strong style={{ color: 'black' }}>ecommerce website development services in Noida</strong>, we deliver high-performance platforms tailored to your business needs.
              </p>
              <p className={styles.description}>
                The creation of quick, responsive, feature-rich <Link to="/mobile-app-development">mobile applications</Link> that improve user experience and increase engagement is the main goal of our e-commerce app development service. We offer comprehensive solutions that enable smooth operations and sustained business growth across web and mobile platforms for startups and large corporations alike.
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
            <h3 className={styles.sectionHeading}>Why is Ecommerce Website and App Development Essential for Modern Businesses?</h3>
            <p className={styles.paragraph}>
              Investing in <strong style={{ color: 'black' }}>ecommerce website and app development</strong> is now essential in today's digital-first world. A robust e-commerce infrastructure enables companies to reach a worldwide audience, grow beyond geographic boundaries, and give clients round-the-clock access to goods and services.
            </p>
            <p className={styles.paragraph}>
              With professional <strong style={{ color: 'black' }}>ecommerce website development services in Noida</strong>, businesses can automate operations, reduce costs, and improve efficiency. A well-built platform also offers valuable insights into customer behavior, helping you make smarter business decisions.
            </p>
            <p className={styles.paragraph}>
              Without a proper ecommerce solution, businesses often struggle with manual operations, limited reach, and poor inventory management. <strong style={{ color: 'black' }}>Our ecommerce app development service</strong> and web solutions eliminate these challenges by offering automation, real-time tracking, secure transactions, and advanced analytics.
            </p>

            <h3 className={styles.sectionHeading}>There are 5 key benefits of implementing an ecommerce platform:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Global Market Reach</h4>
                <p className={styles.reasonText}>Expand your business beyond local boundaries and reach customers worldwide with 24/7 accessibility through web and mobile platforms.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Increased Sales & Revenue</h4>
                <p className={styles.reasonText}>Leverage multiple sales channels, personalized recommendations, and marketing automation to boost conversions and revenue.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Lower Operating Costs</h4>
                <p className={styles.reasonText}>Reduce expenses associated with physical stores while automating processes with advanced ecommerce <Link to="/website-design ">website</Link> and app development solutions.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Enhanced Customer Experience</h4>
                <p className={styles.reasonText}>Deliver seamless shopping experiences with intuitive navigation, fast checkout, and mobile-friendly interfaces.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Data-Driven Decision Making</h4>
                <p className={styles.reasonText}>Use analytics tools to track customer behavior, monitor sales performance, and optimize your marketing strategies.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR ECOMMERCE FEATURES:</h3>
            <p className={styles.paragraph}>
              As a leading provider of <strong style={{ color: 'black' }}>ecommerce website development services in Noida</strong>, we offer complete, feature-rich solutions to run a successful online store. <strong style={{ color: 'black' }}>Our ecommerce app development service</strong> ensures that all these features work seamlessly across mobile devices for better performance and user engagement.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• Advanced Product Catalog</div>
              <div className={styles.serviceItem}>• Secure Payment Gateways</div>
              <div className={styles.serviceItem}>• Order & Inventory Management</div>
              <div className={styles.serviceItem}>• Customer Account Management</div>
              <div className={styles.serviceItem}>• Marketing & SEO Tools</div>
              <div className={styles.serviceItem}>• Mobile Responsive Design</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone’s Principles of Ecommerce Website and App Development</h3>
            <p className={styles.paragraph}>
              We follow a result-driven approach to deliver high-quality <strong style={{ color: 'black' }}>ecommerce website and app development</strong> solutions:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>User Experience First:</strong> We create intuitive interfaces with smooth navigation and simplified checkout processes to reduce cart abandonment.
              </li>
              <li className={styles.principleItem}>
                <strong>Mobile-Optimized:</strong> Our platforms are fully responsive and optimized for mobile devices, ensuring consistent performance across all screens.
              </li>
              <li className={styles.principleItem}>
                <strong>Security & Compliance:</strong> We implement SSL encryption, secure payment gateways, and compliance standards to protect user data.
              </li>
              <li className={styles.principleItem}>
                <strong>Performance Optimization:</strong> Fast loading speeds and optimized performance ensure better user retention and higher conversions.
              </li>
              <li className={styles.principleItem}>
                <strong>Scalable Architecture:</strong> Our solutions grow with your business, handling increased traffic and expanding product catalogs efficiently.
              </li>
              <li className={styles.principleItem}>
                <strong>SEO & Marketing Integration:</strong> Built-in SEO features help your ecommerce website rank higher, while marketing tools drive more traffic and sales.
              </li>
              <li className={styles.principleItem}>
                <strong>Inventory & System Integration:</strong> Real-time synchronization ensures accurate stock management across all channels.
              </li>
              <li className={styles.principleItem}>
                <strong>Analytics & Insights:</strong> Get detailed reports on customer behavior, sales trends, and performance metrics to make informed decisions.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in ecommerce development process:</h3>
            <p className={styles.paragraph}>
              Our structured approach ensures successful delivery of <strong style={{ color: 'black' }}>ecommerce website and app development</strong> projects:
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Business Analysis & Strategy</h4>
                  <p className={styles.stepText}>We analyze your business goals, target audience, and competitors to create a strong ecommerce strategy.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>UX Design & Prototyping</h4>
                  <p className={styles.stepText}>We design user-friendly interfaces focused on improving engagement and conversions.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Development & Integration</h4>
                  <p className={styles.stepText}>We develop secure, scalable platforms with seamless third-party integrations and mobile app support.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Testing & Optimization</h4>
                  <p className={styles.stepText}>Rigorous testing ensures smooth performance across devices, browsers, and payment systems.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Launch & Ongoing Support</h4>
                  <p className={styles.stepText}>We assist with launch, provide training, and offer continuous support to help your ecommerce business grow.</p>
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
                    <img src={feature.image} alt={feature.title} width="350" height="250" loading="lazy" />
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
      <CallToAction />
    </>
  );
};

export default EcommercePlatformPage;
