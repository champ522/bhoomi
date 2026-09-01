import React from 'react';
import SEOHead from '../components/SEOHead';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ParticleBanner from '../components/ParticleBanner';
import styles from '../styles/SupportPage.module.css';
import TechnologyStack from '../components/TechnologyStack';
import WorkProcess from '../components/WorkProcess';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import useCounter from '../hooks/useCounter';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const SupportPage = () => {
  const [statsRef, isStatsVisible] = useIntersectionObserver();
  
  const ticketsCount = useCounter(2500, 2000, isStatsVisible);
  const satisfactionCount = useCounter(99, 2000, isStatsVisible);
  const responseCount = useCounter(15, 1500, isStatsVisible);

  const supportTypes = [
    {
      title: "Technical Support",
      description: "Get expert assistance for resolving software, hardware, and network-related issues quickly and efficiently.",
      image: "/images/sliderimg1.png"
    },
    {
      title: "System Maintenance", 
      description: "Regular monitoring and maintenance ensure your systems stay updated, optimized, and free from performance issues.",
      image: "/images/dmarketing.png"
    },
    {
      title: "Security Monitoring",
      description: "Protect your business with real-time threat detection, malware protection, and continuous security monitoring.",
      image: "/images/socialmediaa.png"
    },
    {
      title: "Server Management",
      description: "Complete server administration, performance optimization, and regular updates to ensure smooth operations.",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Emergency Response",
      description: "Our team provides immediate support for critical system failures to minimize downtime and business impact.",
      image: "/images/socialmediaa.png"
    }
  ];

  return (
    <>
      <SEOHead
        title="Bhoomi Techzone - IT Support Services in Noida with 24/7 Support"
        description="Get reliable IT support services in Noida to keep your systems running smoothly. Our dedicated professionals are here to provide efficient solutions for your business."
        keywords="IT support services in Noida"
        canonical="https://bhoomitechzone.in/support"
      />
      {/* Support Hero Section */}
      <section className={styles.heroSection}>
        <ParticleBanner />
        <div className={styles.overlay}></div>
        <div className={styles.heroContainer}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.breadcrumb}>
                <Link to="/" className={styles.breadcrumbLink}>Home</Link>
                <span className={styles.separator}>/</span>
                <Link to="/services" className={styles.breadcrumbLink}>Services</Link>
                <span className={styles.separator}>/</span>
                <span className={styles.breadcrumbCurrent}>24/7 Support</span>
              </div>
              <h1 className={styles.heroTitle}>24/7 IT Support Services in Noida</h1>
              <p className={styles.heroSubtitle}>
                Round-the-clock expert support to keep your business running smoothly
              </p>
            </div>
            <div className={styles.heroImage}>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_DMgKk1.json"
                background="transparent"
                speed="0.7"
                className={styles.heroLottie}
                loop
                autoplay
              ></lottie-player>
            </div>
          </div>
        </div>
      </section>

      {/* Support Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Support Services</h2>
            <p className={styles.sectionSubtitle}>We offer a wide range of IT support services in Noida to cover all aspects of your technical infrastructure:</p>
          </div>
          
          <div className={styles.sectionDescription}>
            <p className={styles.descriptionParagraph}>
              At Bhoomi Techzone, we provide reliable IT support services in Noida to ensure your business operations run without interruptions. We understand that technical issues can arise anytime, which is why our expert team is available 24/7, 365 days a year to deliver fast and effective solutions. Our goal is to minimize downtime, improve system performance, and keep your business running efficiently.
            </p>
            <p className={styles.descriptionParagraph}>
              Our IT support services in Noida are designed to be proactive as well as responsive. We continuously monitor your systems to detect potential issues before they become major problems. From troubleshooting and maintenance to security and server management, we offer complete support tailored to your business needs.
            </p>
          </div>
          
          <div className={styles.servicesContent}>
            <div className={styles.servicesText}>
              <div className={styles.servicesList}>
                {supportTypes.map((service, index) => (
                  <div key={index} className={styles.serviceItem}>
                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                    <p className={styles.serviceDescription}>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className={styles.servicesImage}>
              <img 
                src="/images/support.jpg" 
                alt="24/7 Support Services"
                className={styles.supportImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Support Section */}
      <section className={styles.whyChooseSection}>
        <div className={styles.container}>
          <div className={styles.whyChooseContent}>
            <div className={styles.whyChooseText}>
              <h2 className={styles.whyChooseTitle}>Why Choose Our IT Support Services in Noida?</h2>
              <div className={styles.whyChooseGrid}>
                <div className={styles.whyChooseItem}>
                  <h3>24/7 Availability</h3>
                  <p>Our dedicated team is always available to resolve your technical issues, ensuring uninterrupted business operations.</p>
                </div>
                <div className={styles.whyChooseItem}>
                  <h3>Rapid Response Time</h3>
                  <p>We respond quickly to all support requests, reducing downtime and keeping your systems running smoothly.</p>
                </div>
                <div className={styles.whyChooseItem}>
                  <h3>Expert Team</h3>
                  <p>Our certified professionals bring years of experience across multiple technologies and industries.</p>
                </div>
                <div className={styles.whyChooseItem}>
                  <h3>Proactive Monitoring</h3>
                  <p>We continuously monitor your systems to identify and resolve issues before they affect your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TechnologyStack />

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>Need 24/7 Technical Support?</h2>
            <p className={styles.ctaSubtitle}>Get expert assistance whenever you need it with our round-the-clock support services</p>
            <div className={styles.ctaButtons}>
              <Link to="/contact" className={styles.primaryButton}>
                <span>Get Support Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Include other components similar to other development pages */}
      <Testimonials />
      <CallToAction />
    </>
  );
};

export default SupportPage;