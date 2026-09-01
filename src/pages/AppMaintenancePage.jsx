import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/AppMaintenancePage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
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
      <SEOHead
        title="Bhoomi Techzone - App Maintenance Services for Smooth Operation"
        description="Keep your app running smoothly with reliable App Maintenance Services. We handle updates, bug fixes, and security checks to ensure performance. Get started today!"
        keywords="App Maintenance Services"
        canonical="https://bhoomitechzone.in/app-maintenance"
      />
      {/* System Maintenance Banner */}
      <section className={styles.maintenanceBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>App Maintenance Services</h1>
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
               App <span className={styles.highlight}>Maintenance</span> Services
              </h2>
              <p className={styles.description}>
                We provide reliable App Maintenance Services to ensure your <Link to="/mobile-app-development">mobile</Link> and <Link to="/web-application">web applications</Link> perform at their best at all times. Our proactive approach focuses on reducing downtime, improving security, and maintaining consistent performance for both users and business operations.
              </p>
              <p className={styles.description}>
                From regular updates to emergency fixes, our App Maintenance Services In Noida  cover complete monitoring, optimization, and support. Our professionals work around the clock to improve features, solve problems, and keep your apps safe, reliable, and current with emerging technology.
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
            <h3 className={styles.sectionHeading}> Why are App Maintenance Services crucial for your business?</h3>
            <p className={styles.paragraph}>
              App maintenance services are essential for preserving user pleasure, security, and performance in today's hectic digital world. Frequent maintenance guarantees compatibility with the newest hardware and operating systems, increases speed, and helps prevent crashes.
            </p>
            <p className={styles.paragraph}>
              Applications may experience performance problems, security threats, and user attrition in the absence of adequate app maintenance services in Noida. By providing a smooth user experience, a well-maintained app guarantees more engagement, higher ratings, and long-term business growth.
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
              Bhoomi Techzone offers complete App Maintenance Services to keep your applications running without interruptions. Our team ensures continuous monitoring, timely updates, and performance optimization for better user experience and reliability.
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
              Our App Maintenance Services are built on a proactive and structured approach that focuses on continuous improvement, performance stability, and long-term reliability. We ensure your applications remain secure, up-to-date, and optimized to deliver a seamless user experience while supporting your business growth:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Proactive Monitoring:</strong> We keep an eye on the functionality, uptime, and user activity of your application to spot possible problems before they impact users. This guarantees constant, seamless operation and helps avoid downtime.
              </li>
              <li className={styles.principleItem}>
                <strong>Regular Updates & Bug Fixes:</strong> Our Services include timely updates and quick resolution of bugs to maintain stability and functionality. We ensure your app stays updated with the latest features and technologies.
              </li>
              <li className={styles.principleItem}>
                <strong>Security First:</strong> Security is very important to us. We frequently implement security patches, vulnerability evaluations, and best practices to safeguard your application and sensitive user data.
              </li>
              <li className={styles.principleItem}>
                <strong>Performance Optimization:</strong> We constantly assess and enhance the speed, responsiveness, and general effectiveness of your software. Our objective is to provide a quick and seamless user experience on all platforms.
              </li>
              <li className={styles.principleItem}>
                <strong>User-Centric Approach:</strong> We use user feedback, behavior insights, and analytics to enhance the app experience. Our App Maintenance Services focus on improving usability and keeping users engaged.
              </li>
              <li className={styles.principleItem}>
                <strong>Version Control & Testing:</strong> To make sure that new changes don't interfere with already-existing functionality, every update undergoes thorough testing and appropriate version control. Stability and dependable performance are therefore ensured.
              </li>
              <li className={styles.principleItem}>
                <strong>Backward Compatibility:</strong> We ensure your application works seamlessly across different devices, screen sizes, and operating system versions, helping you reach a wider audience without performance issues.
              </li>
              <li className={styles.principleItem}>
                <strong>Continuous Improvement:</strong> To keep your app competitive and in line with market trends, our app maintenance concentrate on continuous improvements, feature upgrades, and the adoption of new technologies.
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
                    <img src={service.image} alt={service.title} width="350" height="250" loading="lazy" />
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
      <CallToAction />
    </>
  );
};

export default AppMaintenancePage;
