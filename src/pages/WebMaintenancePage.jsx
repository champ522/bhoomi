import React from 'react';
import SEOHead from '../components/SEOHead';
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
import CallToAction from '../components/CallToAction';
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
      <SEOHead
        title="Bhoomi Techzone - Website Maintenance Services for Secure Fast Websites"
        description="At Bhoomi Techzone Keep your website secure and up-to-date with our professional maintenance services. Enjoy peace of mind while we manage your site's performance and reliability."
        keywords="Website Maintenance Services"
        canonical="https://bhoomitechzone.in/web-maintenance"
      />
      {/* Web Maintenance Banner */}
      <section className={styles.maintenanceBanner}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.container}>
          <div className={styles.content}>
            <h1 className={styles.title}>Website Maintenance Services</h1>
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
                Professional <span className={styles.highlight}>Website Maintenance</span> Services
              </h2>
              <p className={styles.description}>
                We provide comprehensive <Link to="/website-design">Website</Link> Maintenance Services to keep your online presence secure, up-to-date, and running smoothly. Our proactive approach ensures your website remains fast, secure, and optimized for both users and search engines.
              </p>
              <p className={styles.description}>
                Our knowledgeable staff makes sure your website keeps up to date with the newest technology and industry standards through everything from content management and performance optimisation to frequent upgrades and security monitoring. We take care of everything so you can concentrate on expanding your company.
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
            <h3 className={styles.sectionHeading}>Why are Website Maintenance Services essential for your business?</h3>
            <p className={styles.paragraph}>
              In today’s digital landscape, your website is often the first interaction customers have with your brand. Regular Website Maintenance Services are essential for ensuring optimal performance, strong security, and a seamless user experience. A well-maintained website not only ranks better in search engines but also builds credibility and increases conversions.
            </p>
            <p className={styles.paragraph}>
              Serious problems including security threats, broken links, sluggish loading times, out-of-date material, and subpar <Link to="/seo-optimization">SEO</Link> performance can result from neglecting maintenance. These issues have the potential to damage your brand's reputation and drive away customers. Our proactive strategy avoids these problems, guaranteeing that your website remains safe, effective, and productive. 
            </p>

            <h3 className={styles.sectionHeading}>There are 5 key benefits of regular website maintenance:</h3>
            <div className={styles.reasonsList}>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>1. Enhanced Security & Protection</h4>
                <p className={styles.reasonText}>Regular updates, malware scanning, and vulnerability fixes protect your website from cyber threats and ensure data safety.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>2. Improved Performance & Speed</h4>
                <p className={styles.reasonText}>Optimization techniques and regular monitoring keep your website fast, improving user experience and SEO rankings.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>3. Better Search Engine Rankings</h4>
                <p className={styles.reasonText}>Updated content, technical SEO improvements, and performance enhancements help your website rank higher in search results.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>4. Reduced Downtime & Data Loss</h4>
                <p className={styles.reasonText}>Scheduled backups and proactive monitoring minimize downtime and protect your data from unexpected failures.</p>
              </div>
              <div className={styles.reason}>
                <h4 className={styles.reasonTitle}>5. Professional Brand Image</h4>
                <p className={styles.reasonText}>A well-maintained website builds trust, improves credibility, and reflects professionalism to your audience.</p>
              </div>
            </div>

            <h3 className={styles.sectionHeading}>Our Website Maintenance Services:</h3>
            <p className={styles.paragraph}>
              Bhoomi Techzone offers complete Website Maintenance Services to ensure your website remains secure, fast, and updated. Our expert team provides continuous monitoring, timely updates, and technical support for smooth performance.
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
              At Bhoomi Techzone, our Website Maintenance Services are based on prevention, security, and continuous improvement. Our approach ensures your website stays reliable, fast, and secure at all times:
            </p>
            <ul className={styles.principlesList}>
              <li className={styles.principleItem}>
                <strong>Proactive Security:</strong> We continuously monitor and update your website to protect against hackers, malware, and vulnerabilities before they become major issues.
              </li>
              <li className={styles.principleItem}>
                <strong>Regular Updates:</strong> We keep your CMS, plugins, and themes updated to ensure compatibility, security, and access to the latest features.
              </li>
              <li className={styles.principleItem}>
                <strong>Performance First:</strong> We optimize speed and performance through caching, compression, and technical enhancements for a smooth user experience.
              </li>
              <li className={styles.principleItem}>
                <strong>Reliable Backups:</strong> We implement automated backups to keep your data secure and easily recoverable in case of emergencies.
              </li>
              <li className={styles.principleItem}>
                <strong>SEO Optimization:</strong> We maintain your website’s SEO health by fixing technical issues, optimizing metadata, and improving overall performance.
              </li>
              <li className={styles.principleItem}>
                <strong>Quality Assurance:</strong> All updates are thoroughly tested across devices and browsers to ensure stability and functionality.
              </li>
              <li className={styles.principleItem}>
                <strong>Transparent Communication:</strong> We provide detailed reports and updates, keeping you informed about website performance and improvements.
              </li>
              <li className={styles.principleItem}>
                <strong>Rapid Response:</strong> Our team quickly addresses issues and resolves them efficiently to minimize any impact on your business.
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
                  <p className={styles.stepText}>We begin with a detailed analysis of your website’s performance, security, and SEO health. This helps us identify technical issues, vulnerabilities, and improvement opportunities.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>02</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Maintenance Plan Development</h4>
                  <p className={styles.stepText}>Based on the audit, we create a customized maintenance strategy that includes regular updates, backups, security checks, and performance optimization tailored to your website’s needs.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>03</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Continuous Monitoring & Security</h4>
                  <p className={styles.stepText}>We provide 24/7 monitoring to track uptime, detect security threats, and identify errors in real time. This ensures quick action and prevents potential disruptions.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>04</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Regular Updates & Optimization</h4>
                  <p className={styles.stepText}>We perform timely updates for CMS, plugins, and content while continuously optimizing speed, performance, and functionality to keep your website up-to-date.</p>
                </div>
              </div>
              <div className={styles.processStep}>
                <div className={styles.stepNumber}>05</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>Reporting & Recommendations</h4>
                  <p className={styles.stepText}>To help you consistently develop your website and get better results, we publish comprehensive performance reports along with practical insights and suggestions.</p>
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

      {/* Include other components similar to App Maintenance page */}
      <TechnologyStack />
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default WebMaintenancePage;
