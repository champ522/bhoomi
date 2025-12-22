import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styles from '../styles/AppMaintenancePage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const AppMaintenancePage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const appsCount = useCounter(200, 2000, isStatsVisible);
  const uptimeCount = useCounter(99, 2000, isStatsVisible);
  const supportCount = useCounter(24, 1500, isStatsVisible);

  const maintenanceTypes = [
    {
      title: "Mobile App Maintenance",
      description: "Regular updates, bug fixes, and performance optimization for mobile apps",
      image: "/images/sliderimg1.png"
    },
    {
      title: "App Performance Tuning", 
      description: "Optimization of app speed, responsiveness, and resource usage",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Security Updates",
      description: "Regular security patches, vulnerability fixes, and threat prevention",
      image: "/images/appdev.png"
    },
    {
      title: "API Integration",
      description: "Integration and maintenance of third-party APIs and services",
      image: "/images/dmarketing.png"
    },
    {
      title: "Database Management",
      description: "App database optimization, backup management, and data migration",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Feature Updates",
      description: "Adding new features and updating existing functionality",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Bug Fixes & Support",
      description: "24/7 monitoring, bug tracking, and rapid issue resolution",
      image: "/images/appdev.png"
    }
  ];

  return (
    <>
      {/* System Maintenance Banner */}
      <section className={styles.maintenanceBanner}>
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>App Maintenance</h1>
            <p className={styles.subtitle}>
              Keeping your applications running smoothly with proactive maintenance and support
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services" className={styles.breadcrumbLink}>Services</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>App Maintenance</span>
            </div>
          </div>
        </div>
      </section>

      {/* System Maintenance Content Section */}
      <section className={styles.maintenanceSection}>
        <div className={styles.maintenanceContainer}>
          <div className={styles.maintenanceContent}>
            <div className={styles.textContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Reliable</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.maintenanceTitle}>
                <span className={styles.highlight}>App </span> Maintenance
              </h2>
              <p className={styles.description}>
                We provide comprehensive app maintenance services to keep your mobile and web applications running 
                at optimal performance. Our proactive approach ensures minimal downtime, enhanced security, 
                and maximum efficiency for your users and business operations.
              </p>
              <p className={styles.description}>
                From routine updates to emergency support, our team of experts monitors, maintains, and 
                optimizes your applications 24/7. We handle everything from bug fixes to feature updates, 
                ensuring your apps remain reliable, secure, and up-to-date.
              </p>
              
              <div className={styles.serviceStats} ref={statsRef}>
                <div className={styles.stat}>
                  <h3>{appsCount}+</h3>
                  <p>Apps Maintained</p>
                </div>
                <div className={styles.stat}>
                  <h3>{uptimeCount}%</h3>
                  <p>App Uptime</p>
                </div>
                <div className={styles.stat}>
                  <h3>{supportCount}/7</h3>
                  <p>Support Available</p>
                </div>
              </div>
            </div>
            <div className={styles.imageContent}>
              <lottie-player
                src="https://lottie.host/a357bf6d-263a-4409-a6d4-f9c6456cb906/292k6TX2RR.json"
                background="transparent"
                speed="1"
                className={styles.serviceImage}
                loop
                autoplay
              ></lottie-player>
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <h4>Reliable App Maintenance</h4>
                  <p>Keeping your apps running smoothly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Why is app maintenance crucial for your business?</h3>
            <p className={styles.paragraph}>
              In today's mobile-first world, app maintenance is critical for sustaining user engagement and business growth. Regular app maintenance prevents crashes, improves performance, and ensures your application stays compatible with the latest operating systems and devices. A well-maintained app delivers consistent user experiences, maintains high ratings, and keeps users coming back.
            </p>
            <p className={styles.paragraph}>
              Neglecting app maintenance can lead to user churn, negative reviews, security vulnerabilities, and lost revenue. Users expect apps to work flawlessly, load quickly, and stay updated with new features. Our proactive maintenance approach identifies and resolves issues before they impact your users, while continuously improving your app's performance and functionality.
            </p>

            <h3 className={styles.sectionHeading}>There are 5 key benefits of regular app maintenance:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Enhanced User Experience & Retention</h4>
                <p className={styles.reasonText}>Regular updates and bug fixes ensure smooth performance, keeping users satisfied and engaged with your app.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Improved Security & Data Protection</h4>
                <p className={styles.reasonText}>Continuous security updates protect user data and prevent vulnerabilities from being exploited by cyber threats.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Optimal Performance & Speed</h4>
                <p className={styles.reasonText}>Performance optimization keeps your app running fast and responsive, improving user satisfaction and retention.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Platform Compatibility & Updates</h4>
                <p className={styles.reasonText}>Regular maintenance ensures your app stays compatible with the latest OS versions and device specifications.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Competitive Edge & User Ratings</h4>
                <p className={styles.reasonText}>Well-maintained apps receive better reviews and ratings, improving visibility and downloads in app stores.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR SERVICES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone offers comprehensive app maintenance services designed to keep your mobile and web applications running flawlessly. Our expert team provides proactive monitoring, regular updates, bug fixes, and performance optimization to ensure maximum uptime and user satisfaction.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• 24/7 App Monitoring & Support</div>
              <div className={styles.serviceItem}>• Bug Fixes & Issue Resolution</div>
              <div className={styles.serviceItem}>• Performance Optimization</div>
              <div className={styles.serviceItem}>• Security Updates & Patches</div>
              <div className={styles.serviceItem}>• OS Compatibility Updates</div>
              <div className={styles.serviceItem}>• Feature Enhancements</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's PRINCIPLES OF APP MAINTENANCE:</h3>
            <p className={styles.paragraph}>
              At Bhoomi Techzone, our app maintenance philosophy is built on proactive care and continuous improvement. We believe in preventing issues before they affect users and keeping apps at peak performance. Our approach ensures reliability, security, and exceptional user experience:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Proactive Monitoring:</strong> We continuously monitor your app's performance, crash reports, and user feedback, identifying potential issues before they impact your users.
              </li>
              <li className={styles.principleItem}>
                <strong>Regular Updates & Bug Fixes:</strong> We stay on top of OS updates, device compatibility, and user-reported issues, ensuring your app always works smoothly.
              </li>
              <li className={styles.principleItem}>
                <strong>Security First:</strong> Every update prioritizes security. We implement the latest security practices and protect user data with encryption and secure coding standards.
              </li>
              <li className={styles.principleItem}>
                <strong>Performance Optimization:</strong> We continuously analyze and improve app speed, reduce load times, and optimize resource usage for a seamless user experience.
              </li>
              <li className={styles.principleItem}>
                <strong>User-Centric Approach:</strong> We prioritize user feedback and analytics, making data-driven improvements that enhance user satisfaction and engagement.
              </li>
              <li className={styles.principleItem}>
                <strong>Version Control & Testing:</strong> All updates go through rigorous testing before deployment, ensuring new features don't break existing functionality.
              </li>
              <li className={styles.principleItem}>
                <strong>Backward Compatibility:</strong> We ensure your app works across multiple OS versions and devices, maximizing your user base and market reach.
              </li>
              <li className={styles.principleItem}>
                <strong>Continuous Improvement:</strong> We regularly add new features, improve UI/UX, and adopt emerging technologies to keep your app competitive and relevant.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in app maintenance process:</h3>
            <p className={styles.paragraph}>
              Our systematic approach to app maintenance ensures comprehensive coverage of all critical aspects. We follow a proven methodology that combines proactive monitoring, regular updates, and rapid response to keep your applications running optimally.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>App Assessment & Analysis</h4>
                  <p className={styles.stepText}>We conduct a thorough assessment of your app, analyzing performance metrics, user feedback, crash reports, and identifying areas for improvement.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Maintenance Plan Development</h4>
                  <p className={styles.stepText}>Based on the assessment, we create a customized maintenance schedule including updates, feature enhancements, and optimization priorities.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Continuous Monitoring & Bug Tracking</h4>
                  <p className={styles.stepText}>We implement 24/7 monitoring to track app performance, user behavior, crashes, and bugs, ensuring rapid detection and response.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Regular Updates & Optimization</h4>
                  <p className={styles.stepText}>Scheduled updates including bug fixes, security patches, performance improvements, and new features are deployed regularly.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Performance Reporting & Enhancement</h4>
                  <p className={styles.stepText}>We provide detailed reports on app health, user metrics, and maintenance activities, with recommendations for continuous improvement.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance Types Section */}
      <section className={styles.maintenanceTypesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our <span className={styles.highlight}>Maintenance Services</span></h2>
            <p className={styles.sectionSubtitle}>Comprehensive maintenance solutions for all your mobile and web apps</p>
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
            className={styles.maintenanceSwiper}
          >
            {maintenanceTypes.map((service, index) => (
              <SwiperSlide key={index}>
                <div className={styles.maintenanceCard}>
                  <div className={styles.maintenanceImage}>
                    <img src={service.image} alt={service.title} />
                    <div className={styles.maintenanceOverlay}>
                      <Link to="/contact" className={styles.maintenanceButton}>Get Started</Link>
                    </div>
                  </div>
                  <div className={styles.maintenanceCardContent}>
                    <h3 className={styles.maintenanceCardTitle}>{service.title}</h3>
                    <p className={styles.maintenanceDescription}>{service.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Include other components similar to Web Development page */}
      <TechnologyStack />
      <Testimonials />
    </>
  );
};

export default AppMaintenancePage;
