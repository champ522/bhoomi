import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/MobileAppDevelopmentPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const MobileAppDevelopmentPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const appsCount = useCounter(100, 2000, isStatsVisible);
  const ratingCount = useCounter(48, 2000, isStatsVisible);
  const supportCount = useCounter(24, 1500, isStatsVisible);

  const projectTypes = [
    {
      title: "Business Apps",
      description: "Professional mobile apps that streamline your business operations",
      image: "/images/appdev.png"
    },
    {
      title: "E-commerce Apps", 
      description: "Feature-rich shopping apps with secure payment integration",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Social Media Apps",
      description: "Engaging social platforms with real-time chat and sharing features",
      image: "/images/socialmediaa.png"
    },
    {
      title: "Educational Apps",
      description: "Interactive learning apps with multimedia content and progress tracking",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Healthcare Apps",
      description: "Secure medical apps for patient management and health monitoring",
      image: "/images/appdev.png"
    },
    {
      title: "Finance Apps",
      description: "Secure financial apps with banking integration and transaction tracking",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Food Delivery Apps",
      description: "Complete food ordering and delivery solutions with real-time tracking",
      image: "/images/sliderimg2.png"
    }
  ];

  return (
    <>
      {/* Mobile App Development Banner */}
      <section className={styles.appDevBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Mobile App Development</h1>
            <p className={styles.subtitle}>
              Building powerful mobile applications for iOS and Android platforms
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services" className={styles.breadcrumbLink}>Services</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Mobile App Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile App Development Content Section */}
      <section className={styles.appDevSection}>
        <div className={styles.appDevContainer}>
          <div className={styles.appDevContent}>
            <div className={styles.textContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Innovation</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.appDevTitle}>
                <span className={styles.highlight}>Mobile App </span> Development
              </h2>
              <p className={styles.description}>
                We specialize in creating innovative mobile applications that combine intuitive user interfaces with 
                robust functionality. Our mobile development team leverages cutting-edge technologies like Flutter, 
                React Native, and native iOS/Android development to build apps that deliver exceptional user experiences 
                across all devices and platforms.
              </p>
              <p className={styles.description}>
                From simple utility apps to complex enterprise solutions, we deliver mobile applications that are 
                tailored to your specific business requirements. Our development approach focuses on performance, 
                security, and scalability to ensure your app succeeds in today's competitive mobile marketplace.
              </p>
              
              <div className={styles.serviceStats} ref={statsRef}>
                <div className={styles.stat}>
                  <h3>{appsCount}+</h3>
                  <p>Apps Launched</p>
                </div>
                <div className={styles.stat}>
                  <h3>{(ratingCount / 10).toFixed(1)}★</h3>
                  <p>Average App Rating</p>
                </div>
                <div className={styles.stat}>
                  <h3>{supportCount}/7</h3>
                  <p>Technical Support</p>
                </div>
              </div>
            </div>
            <div className={styles.imageContent}>
              <lottie-player
                src="https://lottie.host/5ba5bf8c-480d-413f-815c-44bd492dc4a0/1IlpWLqQBh.json"
                background="transparent"
                speed="1"
                className={styles.serviceImage}
                loop
                autoplay
              ></lottie-player>
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <h4>Next-Gen Mobile Solutions</h4>
                  <p>Innovative apps for the mobile-first world</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Why is mobile app development crucial for modern businesses?</h3>
            <p className={styles.paragraph}>
              In today's mobile-first world, having a dedicated mobile app has become essential for businesses looking to stay competitive and connect with their customers. With over 6.8 billion smartphone users worldwide and mobile apps accounting for more than 90% of mobile internet time, businesses without a mobile presence are missing out on enormous opportunities for growth, customer engagement, and revenue generation.
            </p>
            <p className={styles.paragraph}>
              Mobile apps provide direct access to your customers' pockets, offering unparalleled convenience and engagement opportunities. They enable push notifications, offline functionality, and personalized experiences that websites simply cannot match. For businesses, mobile apps serve as powerful tools for customer retention, brand building, and creating new revenue streams through in-app purchases, subscriptions, and enhanced user experiences.
            </p>

            <h3 className={styles.sectionHeading}>Top 5 advantages of mobile app development:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Enhanced User Engagement</h4>
                <p className={styles.reasonText}>Mobile apps provide superior user experiences with faster loading times, intuitive interfaces, and personalized content that keeps users coming back.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Direct Marketing Channel</h4>
                <p className={styles.reasonText}>Push notifications and in-app messaging allow direct communication with customers, improving marketing effectiveness and customer retention rates.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Offline Accessibility</h4>
                <p className={styles.reasonText}>Unlike websites, mobile apps can function offline, providing users with access to essential features and content even without internet connectivity.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Increased Revenue Opportunities</h4>
                <p className={styles.reasonText}>Apps open new monetization avenues through in-app purchases, subscriptions, premium features, and improved conversion rates.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Competitive Market Advantage</h4>
                <p className={styles.reasonText}>A well-designed mobile app differentiates your brand and provides a competitive edge in industries where mobile presence is becoming standard.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR MOBILE APP DEVELOPMENT SERVICES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone offers comprehensive mobile app development services covering the entire app lifecycle from concept to deployment and beyond. Our expert team specializes in creating cross-platform and native mobile applications that deliver exceptional performance and user experiences on both iOS and Android platforms.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• Native iOS & Android App Development</div>
              <div className={styles.serviceItem}>• Cross-Platform App Development (Flutter/React Native)</div>
              <div className={styles.serviceItem}>• Progressive Web Apps (PWA)</div>
              <div className={styles.serviceItem}>• App Store Optimization & Publishing</div>
              <div className={styles.serviceItem}>• API Integration & Backend Development</div>
              <div className={styles.serviceItem}>• App Maintenance & Support</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's PRINCIPLES OF MOBILE APP development:</h3>
            <p className={styles.paragraph}>
              At Bhoomi Techzone, we believe in creating mobile apps that truly enhance users' lives while driving business success. Our mobile development philosophy is built on principles that ensure every app we create is not just functional, but exceptional:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>User-Centric Design:</strong> We design every screen, interaction, and feature with the end user in mind. Our apps are intuitive, accessible, and provide seamless experiences that users love and return to regularly.
              </li>
              <li className={styles.principleItem}>
                <strong>Performance Excellence:</strong> Nobody tolerates slow apps. We optimize every aspect of performance, from app launch times to smooth animations, ensuring your app feels responsive and professional on all devices.
              </li>
              <li className={styles.principleItem}>
                <strong>Cross-Platform Consistency:</strong> Whether iOS or Android, your app maintains consistent functionality and visual appeal across all platforms while respecting each platform's unique design guidelines and user expectations.
              </li>
              <li className={styles.principleItem}>
                <strong>Security by Design:</strong> We build security into every layer of your app, protecting user data, implementing secure authentication, and following industry best practices for data privacy and protection.
              </li>
              <li className={styles.principleItem}>
                <strong>Scalable Architecture:</strong> Your app is built to grow. We create flexible, modular architectures that can handle increased user loads and new features without requiring complete rebuilds.
              </li>
              <li className={styles.principleItem}>
                <strong>Offline-First Approach:</strong> Great apps work everywhere. We design apps that provide core functionality even when internet connectivity is poor or unavailable, ensuring users always have access to essential features.
              </li>
              <li className={styles.principleItem}>
                <strong>Clean & Intuitive Interface:</strong> Simplicity is sophistication. Our apps feature clean, modern interfaces that users can navigate effortlessly, with clear visual hierarchies and logical user flows.
              </li>
              <li className={styles.principleItem}>
                <strong>Continuous Improvement:</strong> We don't just launch apps; we evolve them. Through user feedback, analytics, and ongoing optimization, we continuously enhance your app to deliver better results and user satisfaction.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in mobile app development process:</h3>
            <p className={styles.paragraph}>
              Our proven mobile app development methodology ensures successful project delivery with clear timelines, transparent communication, and exceptional results. We follow a structured approach that minimizes risks while maximizing the quality and impact of your mobile application.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Strategy & Planning</h4>
                  <p className={styles.stepText}>We analyze your business goals, target audience, and market requirements to create a comprehensive app development strategy and roadmap.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>UI/UX Design</h4>
                  <p className={styles.stepText}>Our designers create intuitive user interfaces and engaging user experiences that align with platform guidelines and user expectations.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Development & Integration</h4>
                  <p className={styles.stepText}>Our developers build robust, scalable applications using modern frameworks and integrate necessary APIs and third-party services.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Testing & Quality Assurance</h4>
                  <p className={styles.stepText}>Comprehensive testing across multiple devices, operating systems, and scenarios ensures flawless performance and user experience.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Deployment & App Store Optimization</h4>
                  <p className={styles.stepText}>We handle app store submissions, optimization, and provide ongoing support to ensure successful launch and continued success.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Types Section */}
      <section className={styles.projectsSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Types of <span className={styles.highlight}>Mobile Apps</span></h2>
            <p className={styles.sectionSubtitle}>From simple utilities to complex enterprise solutions</p>
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
            className={styles.projectsSwiper}
          >
            {projectTypes.map((project, index) => (
              <SwiperSlide key={index}>
                <div className={styles.projectCard}>
                  <div className={styles.projectImage}>
                    <img src={project.image} alt={project.title} />
                    <div className={styles.projectOverlay}>
                      <Link to="/contact" className={styles.projectButton}>Get Quote</Link>
                    </div>
                  </div>
                  <div className={styles.projectContent}>
                    <h3 className={styles.projectTitle}>{project.title}</h3>
                    <p className={styles.projectDescription}>{project.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Include other components similar to Web Development page */}
      <TechnologyStack />
      <WorkProcess />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default MobileAppDevelopmentPage;