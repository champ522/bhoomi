import React from 'react';
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
      description: "Expert assistance for all your technical challenges and system issues",
      image: "/images/sliderimg1.png"
    },
    {
      title: "System Maintenance", 
      description: "Proactive monitoring and maintenance to keep your systems running smoothly",
      image: "/images/dmarketing.png"
    },
    {
      title: "Security Monitoring",
      description: "Round-the-clock security surveillance and threat detection services",
      image: "/images/socialmediaa.png"
    },
    {
      title: "Server Management",
      description: "Complete server administration and optimization for maximum performance",
      image: "/images/sliderimg2.png"
    },
    {
      title: "Emergency Response",
      description: "Immediate response for critical system failures and urgent issues",
      image: "/images/socialmediaa.png"
    }
  ];

  return (
    <>
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
              <h1 className={styles.heroTitle}>Our Support Services</h1>
              <p className={styles.heroSubtitle}>
                Round-the-clock expert support to keep your business running smoothly.
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
            <h2 className={styles.sectionTitle}>Our 24/7 Support Services</h2>
            <p className={styles.sectionSubtitle}>Comprehensive technical support available around the clock</p>
          </div>
          
          <div className={styles.sectionDescription}>
            <p className={styles.descriptionParagraph}>
              At Bhoomi Techzone, we understand that technology challenges don't follow business hours. That's why our dedicated support team is available 24/7, 365 days a year to ensure your systems run smoothly and your business operations never skip a beat. Our comprehensive support services are designed to prevent issues before they occur and resolve them quickly when they do.
            </p>
            <p className={styles.descriptionParagraph}>
              Whether you're dealing with server downtime, security threats, or routine maintenance needs, our certified professionals bring years of experience and cutting-edge tools to deliver solutions that exceed expectations. We pride ourselves on our rapid response times and proactive approach to system monitoring and maintenance.
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
              <h2 className={styles.whyChooseTitle}>Why Choose Our Support</h2>
              <div className={styles.whyChooseGrid}>
                <div className={styles.whyChooseItem}>
                  <h3>24/7 Availability</h3>
                  <p>Our expert support team is available round the clock to assist you with any technical issues.</p>
                </div>
                <div className={styles.whyChooseItem}>
                  <h3>Rapid Response</h3>
                  <p>Quick response times ensure your business operations are never disrupted for long.</p>
                </div>
                <div className={styles.whyChooseItem}>
                  <h3>Expert Team</h3>
                  <p>Our certified professionals have extensive experience across various technologies and platforms.</p>
                </div>
                <div className={styles.whyChooseItem}>
                  <h3>Proactive Monitoring</h3>
                  <p>We monitor your systems continuously to prevent issues before they impact your business.</p>
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