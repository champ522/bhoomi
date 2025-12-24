import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/WebMaintenancePage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const WebMaintenancePage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const websitesCount = useCounter(150, 2000, isStatsVisible);
  const uptimeCount = useCounter(99, 2000, isStatsVisible);
  const supportCount = useCounter(24, 1500, isStatsVisible);

  const maintenanceTypes = [
    {
      title: "Website Updates",
      description: "Regular content updates, page modifications, and feature additions",
      image: "/images/sliderimg1.png"
    },
    {
      title: "Security Monitoring", 
      description: "24/7 security monitoring, malware scanning, and threat prevention",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Optimize Performance",
      description: "Optimized speed, caching, and resource compression for faster loading",
      image: "/images/appdev.png"
    },
    {
      title: "Backup Management",
      description: "Automated daily backups and disaster recovery solutions",
      image: "/images/dmarketing.png"
    },
    {
      title: "Plugin & Theme Updates",
      description: "Regular updates to plugins, themes, and CMS platforms",
      image: "/images/sliderimg1.png"
    },
    {
      title: "SEO Maintenance",
      description: "Ongoing SEO optimization and search engine ranking monitoring",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Technical Support",
      description: "Round-the-clock technical support and issue resolution",
      image: "/images/appdev.png"
    }
  ];

  return (
    <>
      {/* Web Maintenance Banner */}
      <section className={styles.maintenanceBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Web Maintenance</h1>
            <p className={styles.subtitle}>
              Keeping your website secure, updated, and performing at its best
            </p>
            <div className={styles.breadcrumb}>
              <Link to="/" className={styles.breadcrumbLink}>Home</Link>
              <span className={styles.separator}>/</span>
              <Link to="/services" className={styles.breadcrumbLink}>Services</Link>
              <span className={styles.separator}>/</span>
              <span className={styles.breadcrumbCurrent}>Web Maintenance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Web Maintenance Content Section */}
      <section className={styles.maintenanceSection}>
        <div className={styles.maintenanceContainer}>
          <div className={styles.maintenanceContent}>
            <div className={styles.textContent}>
              <div className={styles.welcomeSection}>
                <span className={styles.welcomeText}>Professional</span>
                <div className={styles.welcomeLine}></div>
              </div>
              <h2 className={styles.maintenanceTitle}>
                <span className={styles.highlight}>Web </span> Maintenance
              </h2>
              <p className={styles.description}>
                We provide comprehensive website maintenance services to keep your online presence secure, 
                up-to-date, and running smoothly. Our proactive approach ensures your website remains fast, 
                secure, and optimized for both users and search engines.
              </p>
              <p className={styles.description}>
                From regular updates and security monitoring to content management and performance optimization, 
                our team of experts ensures your website stays current with the latest technologies and best 
                practices. We handle everything so you can focus on your business.
              </p>
              
              <div className={styles.serviceStats} ref={statsRef}>
                <div className={styles.stat}>
                  <h3>{websitesCount}+</h3>
                  <p>Web Maintained</p>
                </div>
                <div className={styles.stat}>
                  <h3>{uptimeCount}%</h3>
                  <p>Website Uptime</p>
                </div>
                <div className={styles.stat}>
                  <h3>{supportCount}/7</h3>
                  <p>Support Available</p>
                </div>
              </div>
            </div>
            <div className={styles.imageContent}>
              <lottie-player
                src="https://lottie.host/5c585b87-8abc-4c02-b78f-936c476e59e4/Z2XJAF2b6h.json"
                background="transparent"
                speed="1"
                className={styles.serviceImage}
                loop
                autoplay
              ></lottie-player>
              <div className={styles.imageOverlay}>
                <div className={styles.overlayContent}>
                  <h4>Reliable Web Maintenance</h4>
                  <p>Keeping your website running smoothly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Content Sections */}
          <div className={styles.additionalContent}>
            <h3 className={styles.sectionHeading}>Why is website maintenance essential for your business?</h3>
            <p className={styles.paragraph}>
              In today's digital landscape, your website is often the first point of contact between your business and potential customers. Regular website maintenance is crucial for ensuring optimal performance, security, and user experience. A well-maintained website not only ranks better in search engines but also builds trust with visitors and converts them into customers.
            </p>
            <p className={styles.paragraph}>
              Neglecting website maintenance can lead to serious consequences: security breaches, broken links, slow loading times, outdated content, and poor search rankings. These issues drive visitors away and damage your brand reputation. Our proactive maintenance approach prevents these problems, keeping your website healthy, secure, and performing at its peak.
            </p>

            <h3 className={styles.sectionHeading}>There are 5 key benefits of regular website maintenance:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Enhanced Security & Protection</h4>
                <p className={styles.reasonText}>Regular security updates, malware scanning, and vulnerability patching protect your website from cyber threats and data breaches.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Improved Performance & Speed</h4>
                <p className={styles.reasonText}>Optimization, caching, and regular maintenance keep your website loading fast, improving user experience and SEO rankings.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Better Search Engine Rankings</h4>
                <p className={styles.reasonText}>Fresh content, technical SEO updates, and performance optimization help your website rank higher in search results.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Reduced Downtime & Data Loss</h4>
                <p className={styles.reasonText}>Regular backups and proactive monitoring prevent data loss and minimize downtime from technical issues.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Professional Brand Image</h4>
                <p className={styles.reasonText}>An up-to-date, well-functioning website reflects positively on your business and builds customer trust.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>OUR SERVICES:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone offers comprehensive website maintenance services designed to keep your online presence secure, fast, and up-to-date. Our expert team provides proactive monitoring, regular updates, content management, and technical support to ensure your website performs optimally 24/7.
            </p>
            <div className={styles.servicesList}>
              <div className={styles.serviceItem}>• 24/7 Website Monitoring</div>
              <div className={styles.serviceItem}>• Security Updates & Malware Protection</div>
              <div className={styles.serviceItem}>• Content Updates & Management</div>
              <div className={styles.serviceItem}>• Performance Optimization</div>
              <div className={styles.serviceItem}>• Regular Backups & Recovery</div>
              <div className={styles.serviceItem}>• Plugin & Theme Updates</div>
            </div>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's PRINCIPLES OF WEB MAINTENANCE:</h3>
            <p className={styles.paragraph}>
              At Bhoomi Techzone, our website maintenance philosophy is built on prevention, security, and continuous improvement. We believe in keeping websites secure, fast, and up-to-date through proactive care. Our approach ensures reliability, performance, and peace of mind:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Proactive Security:</strong> We don't wait for threats to strike. Our continuous monitoring and regular security updates protect your website from hackers, malware, and vulnerabilities before they become problems.
              </li>
              <li className={styles.principleItem}>
                <strong>Regular Updates:</strong> We keep your CMS, plugins, themes, and all components up-to-date with the latest versions, ensuring compatibility, security, and access to new features.
              </li>
              <li className={styles.principleItem}>
                <strong>Performance First:</strong> Speed matters. We continuously optimize your website's performance through caching, compression, and code optimization to deliver lightning-fast loading times.
              </li>
              <li className={styles.principleItem}>
                <strong>Reliable Backups:</strong> We implement automated daily backups stored in multiple locations, ensuring your data is always safe and recoverable in case of emergencies.
              </li>
              <li className={styles.principleItem}>
                <strong>SEO Optimization:</strong> We maintain and improve your website's SEO health by fixing broken links, optimizing metadata, and ensuring technical SEO best practices are followed.
              </li>
              <li className={styles.principleItem}>
                <strong>Quality Assurance:</strong> Every update and change goes through thorough testing to ensure nothing breaks. We test across different browsers and devices before deployment.
              </li>
              <li className={styles.principleItem}>
                <strong>Transparent Communication:</strong> We provide detailed reports on all maintenance activities, website health, and recommendations for improvements, keeping you informed every step of the way.
              </li>
              <li className={styles.principleItem}>
                <strong>Rapid Response:</strong> When issues arise, our team responds immediately. We prioritize critical problems and resolve them quickly to minimize any impact on your business.
              </li>
            </ul>

            <h3 className={styles.sectionHeading}>Bhoomi Techzone's essential steps in web maintenance process:</h3>
            <p className={styles.paragraph}>
              Our systematic approach to website maintenance ensures comprehensive coverage of all critical aspects. We follow a proven methodology that combines proactive monitoring, regular updates, and rapid response to keep your website running optimally.
            </p>
            <div className={styles.processList}>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>01</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Website Audit & Assessment</h4>
                  <p className={styles.stepText}>We conduct a comprehensive audit of your website, analyzing security, performance, SEO, and identifying areas that need attention or improvement.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Maintenance Plan Development</h4>
                  <p className={styles.stepText}>Based on the audit, we create a customized maintenance schedule including updates, backups, security checks, and optimization tasks.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Continuous Monitoring & Security</h4>
                  <p className={styles.stepText}>We implement 24/7 monitoring for uptime, security threats, broken links, and performance issues, ensuring immediate detection and response.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Regular Updates & Optimization</h4>
                  <p className={styles.stepText}>Scheduled maintenance activities including CMS updates, plugin updates, content updates, and performance optimization are performed regularly.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Reporting & Recommendations</h4>
                  <p className={styles.stepText}>We provide detailed monthly reports on website health, maintenance activities performed, and recommendations for ongoing improvements.</p>
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
            <p className={styles.sectionSubtitle}>Comprehensive maintenance solutions for all your website needs</p>
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

      {/* Include other components similar to App Maintenance page */}
      <TechnologyStack />
      <Testimonials />
    </>
  );
};

export default WebMaintenancePage;
